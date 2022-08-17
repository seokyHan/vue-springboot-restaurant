<template>
  <div class="side-bar-wrapper">
    <VueResizable
        class="resizable-side-bar"
        :width="500"
        :min-width="500"
        :max-width="Infinity"
        :active="['r']"
    >
      <div class="side-bar"></div>
    </VueResizable>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped lang="scss">
  .side-bar-wrapper {
  > .side-bar {
    background-color: #000000;
    opacity: 0.5;
    width: 500px;
    height: 100%;
  }
}
</style>
