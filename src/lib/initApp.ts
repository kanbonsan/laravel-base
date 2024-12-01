import sample from "../sample/sample200.brm.json"
import { polyline } from "./libraries/polyline.js"

import { routePoints } from "./store/points.store.js"
import { cuePointStore } from "./store/cuepoints.store.js"

const { encodedPathAlt, points } = sample

export function init() {

    const rtPts = polyline.decode(encodedPathAlt)

    routePoints.set([...rtPts])

    points.forEach((pt, index) => {
        if (pt.cue) {
            const _cue = { ...pt.cue, lat: rtPts[index].lat, lng: rtPts[index].lng }
            cuePointStore.addCue(index, _cue)
        }
    })
}
