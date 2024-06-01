<script setup lang="ts">

const isMessageToggled = ref<boolean>(false);

const props = defineProps<{
  options: string[]
}>()

const selectMessageState = defineModel<string>('state');


const currentModule = computed(() => {
  return props.options.find(option => option === selectMessageState.value)
});

const onOptionClick = (option: string) => {
  useRouter().replace({
    query: {
      ...useRoute().query,
      days: option
    }
  });

  selectMessageState.value = option;
}


</script>

<template>
  <Select class="select" @click="isMessageToggled =! isMessageToggled">
    <SelectContent class="content">
      {{ currentModule }}
    </SelectContent>
    <Transition name="select">
      <SelectGroup v-if="isMessageToggled" class="group">
        <SelectOption
          v-for="option in options"
          :key="option"
          @click="onOptionClick(option)"
        >
          {{option}}
        </SelectOption>
      </SelectGroup>
    </Transition>

  </Select>
</template>

<style scoped lang="scss">
.select-wrap {
  display: flex;
  gap: 6px;
  margin-left: auto;

  .select {
    width: min-content;

    .content {
      background-color: var(--ui-secondary);
      border: none;
    }

    .group {
      background-color: var(--ui-secondary);
      padding: 6px !important;
      height: auto;
      width: max-content;
    }

    .option {
      background-color: var(--ui-secondary);
      padding: 6px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;

      &:hover {
        background-color: var(--bg-secondary);
      }
    }
  }
}
</style>