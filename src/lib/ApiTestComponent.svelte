<script lang="ts">
    import axios from "axios";
    let message = $state("hello");

    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

    axios.get("http://localhost/sanctum/csrf-cookie").then(() => {
        axios
            .post("http://localhost/api/login", {
                email: "shu.at.kantaro.org@gmail.com",
                password: "Tono2575",
            })
            .then((response) => {
                console.log(response.data)
                axios.get("http://localhost/api/user").then((res)=>console.log(res))
            })
            .catch((error) => {
                console.log(error);
                message = 'error'
            });
    });

    const logout = async function(){
        const response = await axios.get("http://localhost/api/logout")
        
        // const res2 = await axios.get("http://localhost/api/test")
        // console.log(res2)
    }

    const getdata = async function(){
        const res2 = await axios.get("http://localhost/api/logged-in")
        
        console.log('getdata',res2)
    }
</script>

<div>
    <p>{message}</p>
    <button onclick={logout}>LOGOUT</button>
    <button onclick={getdata}>GETDATA</button>
</div>
