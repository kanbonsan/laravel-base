<script>
    import "../app.css";
</script>

<div class="header">HEADER</div>
<div class="content">
    <slot />
</div>

<div class="footer bg-pink-400">FOOTER</div>

<style global lang="scss">
    :root {
        --header-height: 36px;
        --footer-height: 24px;
    }
    :global(body) {
        height: 100vh;
        width: 100vw;
    }
    .header {
        height: var(--header-height);
    }
    .content {
        height: calc(100vh - var(--header-height) - var(--footer-height));
    }
    .footer {
        height: var(--footer-height);
    }
</style>
