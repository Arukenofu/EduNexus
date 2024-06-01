<script setup lang="ts">

const isModuleToggled = ref<boolean>(false);

const props = defineProps<{
  options: string[]
}>()

const selectModuleState = defineModel<string>({
  default: 'Все модули',
});

const onOptionClick = (option: string) => {
  useRouter().replace({
    query: {
      ...useRoute().query,
      module: option
    }
  });

  selectModuleState.value = option;
}

const currentModule = computed(() => {
  return props.options.find(option => option === selectModuleState.value)
})

</script>

<template>
  <Select class="select" @click="isModuleToggled =! isModuleToggled">
    <SelectContent class="content">
      {{
        currentModule
      }}
    </SelectContent>

    <Transition name="select">
      <SelectGroup v-if="isModuleToggled" class="group">
        <SelectOption
          v-for="option in options"
          :key="option"
          @click="onOptionClick(option)"
          class="option"
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