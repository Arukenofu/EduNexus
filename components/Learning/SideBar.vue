<script setup lang="ts">


</script>

<template>
  <aside>
    <slot />
  </aside>


</template>

<style scoped lang="scss">
aside {
  align-self: flex-start;
  position: sticky;
  top: 14px;
  width: 300px;
}

nav {
  margin-top: 21px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    text-decoration: none;
    color: var(--text-secondary);
    font-weight: 600;
    box-sizing: border-box;
    transition: color .2s ease;
    font-size: 1.25em;

    &:focus-visible {
      color: var(--text);
      outline: none;
    }
  }

  a:hover, .router-link-active {
    color: var(--text);
  }
}


@media screen and (max-width: 950px) {
  aside {
    width: 250px !important;
  }
}

</style>