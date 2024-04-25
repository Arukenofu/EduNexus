<script setup lang="ts">
import LearnHeaderLayout from "~/layouts/LearnHeaderLayout.vue";

const buttonState = ref<number>(1);

const buttonStates = [
  {
    
  }
]

</script>

<template>
  <LearnHeaderLayout text="Сообщения">
    <template v-slot:first>
      <div class="recent">
        <button @click="buttonState = 1" :class="buttonState === 1 && 'active'">
          All
        </button>
        <button @click="buttonState = 2" :class="buttonState === 2 && 'active'">
          Unseen
        </button>
      </div>
    </template>
  </LearnHeaderLayout>
</template>

<style scoped lang="scss">

.recent {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-secondary);
  padding: 4px 4px;
  border-radius: 9px;
  gap: 2px;

  button {
    border-radius: 6px;
    height: 100%;
    padding: 0 18px;
    border: none;
    color: var(--text);
    font-weight: 700;
    background-color: var(--bg-secondary);
  }

  .active {
    background-color: var(--bg);
  }
}

</style>