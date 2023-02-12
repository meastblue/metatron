<svelte:options tag="mtui-app" />

<script lang="ts">
  import Button from "./lib/Button.svelte";
</script>

<main>
  <h1>Metatron</h1>
  <div class="container">
    <Button variant="text">Button</Button>
    <Button variant="contained" size="small">Button</Button>
    <Button variant="outlined">Button</Button>
  </div>
</main>

<style type="text/scss">
  .container {
    display: flex;
    flex-direction: row;
  }
</style>
