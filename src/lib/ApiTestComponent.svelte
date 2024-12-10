<script lang="ts">
    import axios from "axios";
    let message = $state("hello");

    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

    axios.get("http://127.0.0.1/api/test").then((response) => {
        console.log(response.data);
        message = response.data;
    });

    axios.get("http://127.0.0.1/sanctum/csrf-cookie").then((response) => {
        console.log(response)
        axios.get("http://127.0.0.1/api/test").then((response) => {
            console.log(response.data);
            message = response.data;
        });
    });
</script>

<div>
    <p>{message}</p>
</div>
