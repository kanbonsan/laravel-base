/**
 * cuepoint store
 * 
 */
import { writable } from "svelte/store"

function createStore(){

    const { subscribe, set, update } = writable<{ index: number, cue: any }[]>([])

    return ({
        subscribe,
        set,
        update,
        addCue: (index: number, cue: any) => {
            update((currentCues) => [...currentCues, { index, cue }]
            )
        },
    })
}

export const cuePointStore = createStore()