import { writable } from "svelte/store";
import type { Coordinate } from "$lib/libraries/polyline.js";

export const routePoints = writable<Coordinate[]>()