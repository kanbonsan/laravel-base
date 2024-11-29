import { Loader } from "@googlemaps/js-api-loader";
import { PUBLIC_GOOGLE_MAPS } from "$env/static/public";

export const loader = new Loader({
    apiKey: PUBLIC_GOOGLE_MAPS,
    version: "weekly",
})
