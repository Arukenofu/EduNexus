<script setup lang="ts">
import LearnHeaderLayout from "~/layouts/LearnHeaderLayout.vue";
import Picker from "~/components/Picker.vue";
import LearnAsideLayout from "~/layouts/LearnAsideLayout.vue";

const buttonState = ref<number>(1);

const isMenuActive = ref<boolean>(true);


</script>

<template>
  <LearnHeaderLayout text="Сообщения">
    <template v-slot:first>

    </template>
  </LearnHeaderLayout>

  <div class="content-wrapper">

    <main>
      <div class="bar">
        <Input  />
        <Picker v-model:state="buttonState" />
      </div>

      <button class="message">
        <div class="lines">
          <div class="line">
            <div class="username">William Smit</div>
            <div class="date">6 months ago</div>
          </div>
          <div class="about">
            Meeting Tomorrow
          </div>
        </div>

        <div class="lines">
          Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

          Please come prepared with any questions or insights you may have. Looking forward to
        </div>

        <div class="lines">

        </div>
      </button>
    </main>

    <LearnAsideLayout v-model:is-menu-active="isMenuActive">
      asd
    </LearnAsideLayout>
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
    }

    .message {
      margin-top: 9px;
      border-radius: 9px;
      padding: 16px;
      width: 100%;
      background: none;
      display: block;
      text-align: left;
      color: var(--text);
      border: 1px solid var(--border);
      transition: background-color cubic-bezier(.4,0,.2,1) .15s;

      .lines {
        width: 100%;

        &:nth-child(1) {
          .line {
            width: 100%;
            display: flex;
            align-items: center;

            .username {
              font-size: 1.3em;
              font-weight: 800;
            }

            .date {
              font-size: 1em;
              margin-left: auto;
              color: var(--text-secondary);
            }
          }

          .about {
            margin-top: 4px;
            font-size: .9em;
            font-weight: 600;
          }
        }

        &:nth-child(2) {
          margin-top: 7px;
          -webkit-line-clamp: 3;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          font-size: 1em;
          color: var(--text-secondary);
        }
      }

      &:hover {
        background-color: var(--border);
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .content-wrapper {
    grid-template-columns: 100%;
  }
}
</style>