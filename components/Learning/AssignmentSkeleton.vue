<script setup lang="ts">

</script>

<template>
  <div class="assign">
    <div class="text">
      <p>&nbsp;</p>

      <span>&nbsp;</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.assign {
  display: flex;
  align-items: center;
  width: 80%;
  height: 70px;
  background-color: var(--ui-secondary);
  margin-bottom: 9px;
  padding: 0 12px;
  border-radius: 14px;
  color: var(--text);
  text-decoration: none;

  .text {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    p {
      font-size: 1.05em;
      font-weight: 600;
      max-width: 80%;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: block;
      background-color: var(--bg-secondary);
      width: 40%;
      margin-bottom: 3px;
      border-radius: 3px;
      animation: loading 2.5s ease-in-out infinite;
      user-select: none;
    }

    span {
      font-size: .8em;
      font-weight: 500;
      color: var(--text-secondary);
      background-color: var(--bg-secondary);
      width: 25%;
      border-radius: 3px;
      animation: loading 2.5s ease-in-out infinite;
      user-select: none;
    }
  }
}

@keyframes loading {
  0% {
    opacity: 1;
  }

  50% {
    opacity: .6;
  }

  100% {
    opacity: 1;
  }
}
</style>