import App from "./Hello.svelte"
import { mount } from "svelte"

const app = mount(App, {
    target: document.getElementById("app")
})

export default app