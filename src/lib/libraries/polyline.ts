'use strict'

export type Coordinate = {
    lat: number,
    lng: number,
    alt: number | null
}

/**
 * Based off of [the offical Google document](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)
 *
 * Some parts from [this implementation](http://facstaff.unca.edu/mcmcclur/GoogleMaps/EncodePolyline/PolylineEncoder.js)
 * by [Mark McClure](http://facstaff.unca.edu/mcmcclur/)
 * 
 * （追記）標高データも一緒に encode - decode するようにした。標高データ(メートル)は 10^3 倍して整数に丸めて計算（緯度・軽度は 10^3 倍)。
 * 標高が undefined, 無効値のときは -1000m とした。
 *
 * @module polyline
 */


function py2_round(value: number) {
    // Google's polyline algorithm uses the same rounding strategy as Python 2, which is different from JS for negative values
    return Math.floor(Math.abs(value) + 0.5) * (value >= 0 ? 1 : -1)
}

function encode(current: number, previous: number, factor: number): string {
    current = py2_round(current * factor)
    previous = py2_round(previous * factor)
    var coordinate = current - previous
    coordinate <<= 1
    if (current - previous < 0) {
        coordinate = ~coordinate
    }
    var output = ''
    while (coordinate >= 0x20) {
        output += String.fromCharCode((0x20 | (coordinate & 0x1f)) + 63)
        coordinate >>= 5
    }
    output += String.fromCharCode(coordinate + 63)
    return output
}

/**
 * Decodes to a [latitude, longitude(, altitude)] coordinates array.
 *
 * This is adapted from the implementation in Project-OSRM.
 *
 * @param {String} str
 * @param {Boolean} includeAltitude 標高を加えるか
 * @param {Number} altitudeFactor 標高データを小数点以下何桁にするか（OPENROUTE は 2桁のようなので可変にした）
 * @returns {Array}
 *
 * @see https://github.com/Project-OSRM/osrm-frontend/blob/master/WebContent/routing/OSRM.RoutingGeometry.js
 */
const _decode = function (str: string, includeAltitude = true, altitudeFactor = 1000): Array<Coordinate> {
    var index = 0,
        lat = 0,
        lng = 0,
        alt = 0,
        coordinates = [],
        shift = 0,
        result = 0,
        byte: number | null = null,
        latitude_change: number,
        longitude_change: number,
        altitude_change: number

    // Coordinates have variable length when encoded, so just keep
    // track of whether we've hit the end of the string. In each
    // loop iteration, a single coordinate is decoded.
    while (index < str.length) {

        // Reset shift, result, and byte
        byte = null
        shift = 0
        result = 0

        do {
            byte = str.charCodeAt(index++) - 63
            result |= (byte & 0x1f) << shift
            shift += 5
        } while (byte >= 0x20)

        latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1))

        shift = result = 0

        do {
            byte = str.charCodeAt(index++) - 63
            result |= (byte & 0x1f) << shift
            shift += 5
        } while (byte >= 0x20)

        longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1))

        lat += latitude_change
        lng += longitude_change

        if (includeAltitude) {
            shift = result = 0
            do {
                byte = str.charCodeAt(index++) - 63
                result |= (byte & 0x1f) << shift
                shift += 5
            } while (byte >= 0x20)

            altitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1))
            alt += altitude_change
        }

        coordinates.push({
            lat: lat / 100000,
            lng: lng / 100000,
            alt: (includeAltitude) ? alt / altitudeFactor : null
        })
    }

    return coordinates
}

/**
 * Encodes the given [latitude, longitude, altitude] coordinates array.
 *
 * @param {Array.<Array.<Number>>} coordinates
 * @returns {String}
 */
export type CoordTuple = [number, number, number]

const _encode = function (coordinates: Array<CoordTuple>, altitudeFactor = 1000): string {
    if (!coordinates.length) {
        return ''
    }

    var output: string = encode(coordinates[0][0], 0, 100000) + encode(coordinates[0][1], 0, 100000) + encode(coordinates[0][2], 0, altitudeFactor)

    for (var i = 1; i < coordinates.length; i++) {
        var a = coordinates[i],
            b = coordinates[i - 1]
        output += encode(a[0], b[0], 100000)
        output += encode(a[1], b[1], 100000)
        output += encode(a[2], b[2], altitudeFactor)
    }

    return output
}

export var polyline
    = { encode: _encode, decode: _decode }
