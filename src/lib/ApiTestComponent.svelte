<script lang="ts">
    import axios from "axios";
    let message = $state("アプリを開始しました");

    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

    const login = async function () {
        try {
            await axios.get("http://localhost/sanctum/csrf-cookie");
            const response = await axios.post("/api/login", {
                email: "shu.at.kantaro.org@gmail.com",
                password: "Tono2575",
            });
            message = "ログインしました";
            console.log(response.data);
        } catch (error) {
            message = "ログイン失敗";
            console.log(error);
        }
    };

    const logout = async function () {
        const response = await axios.post("/api/logout");
        message="ログアウトしました"
    };

    const loggedIn = async function () {
        try {
            const {data} = await axios.get("/api/logged-in");
            
            message = `ID: ${data.user.id}, email: ${data.user.email} でログインしています`
        } catch (error) {
            message = "ログインしていないようです"
        }
    };

    const getData = async function(){
        const {data}=await axios.get("/api/test")
        console.log(data)
    }
</script>

<div>
    <p>{message}</p>
    <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onclick={login}>LOGIN</button
    >

    <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onclick={logout}>LOGOUT</button
    >

    <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onclick={loggedIn}>ログイン確認</button
    >

    <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onclick={getData}>情報取得</button
    >
    
</div>
