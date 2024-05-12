<script setup lang="ts">

const isModalOpen = ref<boolean>(false);

</script>

<template>
  <div class="layout">
    <section class="profile-panel">
      <div class="profile-card">
        <h2>Личные Данные</h2>

        <div class="profile-avatar" />

        <h1>Бауыржан Алкенов</h1>

        <p>Моё красивое описание, очень красвиое опсание, очень понятное внятное описание, самое крутое описание</p>

        <button class="edit" @click="isModalOpen =! isModalOpen">
          <Icon class="icon" name="iconoir:edit" size="1.2em" />
        </button>

      </div>
    </section>

    <section class="main-info-panel">
      <h1>Опыт</h1>
    </section>
  </div>


  <Modal v-model:is-open="isModalOpen">
    <ProfileModal v-model:is-open="isModalOpen" />
  </Modal>
</template>

<style scoped lang="scss">
.layout {
  margin-top: 101px;
  display: flex;
  gap: 21px;

  .profile-panel {

    .profile-card {
      width: 350px;
      border-radius: 8px;
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      padding: 20px 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      h2 {
        font-size: 1.05em;
        text-align: center;
        margin-bottom: 21px;
      }

      .profile-avatar {
        background-color: var(--bg);
        width: 150px;
        border-radius: 50%;
        aspect-ratio: 1/1;
        margin: 0 auto 7px;
        background-position: center;
        background-size: cover;
        border: 5px solid var(--border);
        background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRti360Z7yNie-vn3gcK-X1j4RzqUTMyyvX6yGmcIx1JQ&s");
      }

      h1 {
        text-align: center;
        margin-bottom: 9px;
      }

      p {
        text-align: center;
        font-size: .85em;
        padding: 0 16px;
        color: var(--text-secondary);
        margin-bottom: 21px;
      }

      .edit {
        --positioning: 15px;
        position: absolute;
        top: var(--positioning);
        right: var(--positioning);
        border: none;
        color: var(--text);
        aspect-ratio: 1/1;
        padding: 6px;
        border-radius: 4px;
        background-color: initial;

        &:hover {
          backdrop-filter: brightness(.6);
        }

        .icon {
          position: relative;
          bottom: 2px;
        }
      }

    }
  }

  .main-info-panel {
    flex: 1;

    h1 {
      display: block;
      width: 100%;
      font-size: 1.75em;
      margin-bottom: 7px;
    }
  }
}


</style>