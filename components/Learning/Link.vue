<script setup lang="ts">

defineProps<{
  to: any,
  icon: string,
  text: any
}>();

</script>

<template>
  <nuxt-link
    class="project"
    activeClass="active"
    :title="text"
    :to="to"
  >
    <Icon
      :name="icon"
      class="icon"
      size="1.2em"
    />
    <span>{{text}}</span>
  </nuxt-link>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
  background: var(--bg-fourth);
  border: none;
  color: var(--text-secondary);

  .icon {
    position: relative;
    bottom: 1px;
    margin-left: 12px;
    height: 100%;
    flex-shrink: 0;
  }

  span {
    margin-left: 12px;
    font-weight: 600;
    font-size: .9em;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

.active {
  box-shadow: -2px 0px 0px 0px #6161cc;
  color: var(--text);
}

a, .create {
  height: 35px;

  &:focus-visible {
    outline: 2px solid var(--text);
  }

  &:hover {
    color: var(--text);
  }

  &:not(:last-child) {
    margin-bottom: 6px;
  }
}
</style>