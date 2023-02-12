<svelte:options tag="mtui-button" />

<script lang="ts" context="module">
    export type Variant = "text" | "contained" | "outlined" | undefined;
    export type Size = "small" | "medium";
    export type Color =
        | "primary"
        | "secondary"
        | "success"
        | "error"
        | "warning"
        | "danger";
</script>

<script lang="ts">
    // Primtive props
    export let autofocus: boolean;
    export let disabled: boolean = false;
    export let form: string;
    export let formaction: string;
    export let formenctype: string;
    export let formmethod: "get" | "post";
    export let formnovalidate: boolean;
    export let formtarget:
        | "_blank"
        | "_self"
        | "_parent"
        | "_top"
        | "framename";
    export let name: string;
    export let type: "button" | "reset" | "submit";
    export let value: string;

    // Metratron button props
    export let variant: Variant = "contained";
    export let color: Color = "primary";
    export let size: Size = "medium";
</script>

<main>
    <button
        class="btn-base variant-{variant} color-{color} size-{size}"
        {autofocus}
        {disabled}
        {form}
        {formaction}
        {formenctype}
        {formmethod}
        {formnovalidate}
        {formtarget}
        {name}
        {type}
        {value}
    >
        <slot />
    </button>
</main>

<style lang="scss">
    @use "../shared/colors/functions/colors.scss" as c;

    .btn-base {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;

        &.variant- {
            &contained {
                background-color: c.get("primary");
                color: c.get("neutral", "white");

                &:hover {
                    background-color: c.get("primary", "hover");
                }

                &:active {
                    background-color: c.get("primary", "active");
                }

                &:focus {
                    background-color: c.get("primary");
                }

                &:disabled {
                    background-color: c.get("neutral", "background-disable");
                    color: c.get("neutral", "text-minor");
                }
            }
            &outlined {
                background-color: c.get("neutral", "white");
                color: c.get("primary");

                &:hover {
                    background-color: c.get("primary", "background");
                }

                &:active {
                    background-color: c.get("primary", "background-alt");
                    border: 1px solid c.get("primary", "active");
                }

                &:focus {
                    background-color: c.get("neutral", "white");
                    border: 1px solid c.get("primary");
                }
                &:disabled {
                    background-color: c.get("neutral", "white");
                    color: c.get("neutral", "text-minor");
                    border: 1px solid c.get("neutral", "background-disable");
                }
            }
            &text {
                background-color: transparent;
                color: c.get("primary");
                &:hover {
                    background-color: c.get("neutral", "background");
                }
                &:active {
                    background-color: c.get("neutral", "background-alt");
                }
                &:focus {
                    background-color: transparent;
                    border: 1px solid c.get("primary");
                }
                &:disabled {
                    background-color: transparent;
                    color: c.get("neutral", "text-minor");
                }
            }
        }

        &.color {
            &danger {
                background-color: c.get("danger");
            }
        }

        &.size- {
            &small {
                height: 2rem;
            }

            &medium {
                height: 2.5rem;
            }
        }
    }

    :disabled {
        cursor: not-allowed;
        pointer-events: none !important;
    }
</style>
