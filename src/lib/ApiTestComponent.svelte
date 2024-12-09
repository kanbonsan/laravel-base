<script lang="ts">
    import axios from "axios";
    let message = $state("hello");

    axios.get("http://127.0.0.1/api/test").then((response) => {
        console.log(response.data);
        message = response.data;
    });
</script>

<div>
    <p>{message}</p>
</div>
