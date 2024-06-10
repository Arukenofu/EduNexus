<script setup lang="ts">

const state = defineModel<boolean>('state')

const isMobile = useDevice();

</script>

<template>
  <aside v-if="!isMobile">
    <slot />
  </aside>

  <Dialog
    v-model:state="state"
    v-else-if="state"
  />

</template>

<style scoped lang="scss">
aside {
  align-self: flex-start;
  position: sticky;
  top: 14px;
  width: 300px;
}


@media screen and (max-width: 950px) {
  aside {
    width: 250px !important;
  }
}

@media screen and (max-width: 768px) {

}
</style>