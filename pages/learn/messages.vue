<script setup lang="ts">
import LearnHeaderLayout from "~/layouts/LearnHeaderLayout.vue";
import Picker from "~/components/Picker.vue";
import Button1x1 from "~/components/Buttons/Button1x1.vue";

const buttonState = ref<number>(1);



</script>

<template>
  <LearnHeaderLayout text="Сообщения">
    <template v-slot:first>

    </template>
  </LearnHeaderLayout>

  <div class="content-wrapper">

    <main>
      <div class="bar">
        <Input />
        <Picker v-model:state="buttonState" />
      </div>

      <MessagePreview v-for="a in 6" />
    </main>

    <MessageChat>
      Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.
      <br><br>
      Please come prepared with any questions or insights you may have. Looking forward to our meeting!
      <br><br>
      Best regards, William
    </MessageChat>
  </div>


</template>

<style scoped lang="scss">

.content-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 15px;

  main {
    .bar {
      display: flex;
      gap: 4px;
      margin-bottom: 6px;
      height: 45px;
      align-items: center;
    }
  }
}

@media screen and (max-width: 1200px) {
  .content-wrapper {
    grid-template-columns: 100%;
  }


}
</style>