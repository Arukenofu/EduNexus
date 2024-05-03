<script setup lang="ts">

</script>

<template>
  <div class="layout">
    <h1>Лекция 2. Изучение JSON и работа с структурой полей.</h1>

    <h2 class="mb-2">
      Подготовительная работа
    </h2>

    <p class="mb-3">
      Подключим обе виртуальные машины <b>Workstation</b> и <b>servera</b> в одну виртуальную сеть. Для этого откроем свойства виртуальной машины в VMware Workstation по щелчку правой кнопки мыши на ВМ и выберите Settings:
    </p>

    <img
      src="https://ast-poly.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1e25c0f1-4472-4e40-b395-22e539266561%2F4ece9584-2061-4926-9d2d-586d64644b5e%2FUntitled.png?table=block&id=e22ded34-2a74-4986-9b54-7a8012f9e9f7&spaceId=1e25c0f1-4472-4e40-b395-22e539266561&width=1770&userId=&cache=v2"
      alt=""
      class="mb-4"
    >

    <h2 class="mb-6">
      Упражнение 1. Управление файлами с помощью утилит командной строки.
    </h2>

    <h3 class="mb-1">
      Цель
    </h3>

    <p class="mb-4">
      Получение базовых навыков создания, организации, копирования и удаления файлов и каталогов.
    </p>

    <h3 class="mb-1">
      Задачи
    </h3>

    <p class="mb-4">
      В этом упражнении вы будете создавать, организовывать, копировать и удалять файлы и каталоги.
    </p>

    <h3 class="mb-1">
      Инструкции
    </h3>

    <p class="mb-4">
      Войдине на <b>servera</b> как пользователь <i>student</i> с паролем <i>student</i>.
    </p>

  </div>
</template>

<style scoped lang="scss">
@import "style/lecture-classes";


.layout {
  margin-top: 72px;
  margin-bottom: 72px;
  padding-left: 45px;
  padding-right: 240px;
  line-height: 1.5;
  color: #dcdcdc;

  h1 {
    font-size: 2.75em;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 1.9em;
    font-weight: 700;
  }

  h3 {
    font-size: 1.5em;
  }

  p {
    font-size: 1.1em;
    line-height: 1.4;
  }

  img {
    width: 100%;
    border-radius: 8px;
  }



}

</style>