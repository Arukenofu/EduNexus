<script setup lang="ts">

</script>

<template>
  <li>
    <button>
      <slot />
    </button>
  </li>
</template>

<style scoped lang="scss">
li {
  height: 100%;
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
  border-radius: 4px;
  cursor: pointer;
  transition-property: color,background-color,text-decoration-color,fill,stroke;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .15s;

  &:hover {
    background-color: var(--bg-secondary);
  }

  button {
    background: none;
    color: var(--text);
    border: none;
    font-size: 1em;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  a {

  }
}
</style>