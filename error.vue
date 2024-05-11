<script setup>
import renderDocumentStyleRoot from "~/utils/theme/renderDocumentStyleRoot";

onMounted(() => {

  renderDocumentStyleRoot();

  if (isElectron) {
    document.documentElement.style.setProperty('--electron', '30px');
  } else {
    document.documentElement.style.setProperty('--electron', '0px');
  }

})

const {isElectron} = useUpdater();

</script>

<template>
  <TitleBar v-if="isElectron" />

  <div class="error">
    <h1>Cтраница не найдена</h1>

    <button @click="$router.push('/home/main')">
      Вернуться
    </button>
  </div>

</template>

<style scoped lang="scss">

.error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-weight: 800;
    white-space: nowrap;
    text-align: center;
    padding: 0 15px;
    margin-bottom: 12px;
  }

  button {
    background-color: var(--text);
    border: none;
    color: var(--bg);
    display: block;
    margin: 0 auto;
    padding: 9px 15px;
    font-size: 1em;
    font-weight: 800;
    border-radius: 2px;
  }
}

</style>