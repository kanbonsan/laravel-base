<script>
    export const ssr = false;
    import "../app.css";
    import { Pane, Splitpanes } from "svelte-splitpanes";
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
    .splitpanes.modern-theme {
        .splitpanes__pane {
            background-color: #f8f8f8;
        }
        .splitpanes__splitter {
            background-color: #ccc;
            position: relative;

            &:before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                transition: opacity 0.4s;
                background-color: #2db9d2;
                opacity: 0;
                z-index: 1;
            }
            &:hover:before {
                opacity: 1;
            }
            &.splitpanes__splitter__active {
                z-index: 2; /* Fix an issue of overlap fighting with a near hovered splitter */
            }
        }
    }
    .modern-theme {
        &.splitpanes--vertical > .splitpanes__splitter:before {
            left: -3px;
            right: -3px;
            height: 100%;
            cursor: col-resize;
        }
        &.splitpanes--horizontal > .splitpanes__splitter:before {
            top: -3px;
            bottom: -3px;
            width: 100%;
            cursor: row-resize;
        }
    }

    .splitpanes.no-splitter {
        .splitpanes__pane {
            background-color: #f8f8f8;
        }
        .splitpanes__splitter {
            background-color: #ccc;
            position: relative;
        }
    }
    .no-splitter {
        &.splitpanes--horizontal > .splitpanes__splitter:before {
            width: 0.125rem;
            pointer-events: none;
            cursor: none;
        }
        &.splitpanes--vertical > .splitpanes__splitter:before {
            height: 0.125rem;
            pointer-events: none;
            cursor: none;
        }
    }
</style>
