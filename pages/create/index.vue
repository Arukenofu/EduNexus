<script setup lang="ts">

const query = useRouteQuery()

const assignmentTypes = [
  'Код',
  'Викторина',
];
const assignmentState = ref(assignmentTypes[0]);
const isAssignmentSelectOpen = ref(false);

const modules = [
  ...(await getModules(query.value.course as string) ?? [])
]
const moduleState = ref(modules[0]);
const isModuleSelectOpen = ref(false);

const title = ref<string>('');
const description = ref<string>('')

</script>

<template>
  <div class="layout">
    <h1>Создание задания для вашего курса</h1>

    <div class="content">
      <div class="control">
        <div class="form">
          <p>Тип задания:</p>
          <Select @click="isAssignmentSelectOpen =! isAssignmentSelectOpen">
            <SelectContent>
              {{assignmentState}}
            </SelectContent>

            <Transition name="select">
              <SelectGroup
                v-if="isAssignmentSelectOpen"
                class="select-group"
              >
                <SelectOption
                  v-for="option in assignmentTypes"
                  :key="option"
                  @click="assignmentState = option"
                >
                  {{option}}
                </SelectOption>
              </SelectGroup>
            </Transition>
          </Select>
        </div>

        <div class="form">
          <p>Модуль:</p>
          <Select @click="isModuleSelectOpen =! isModuleSelectOpen">
            <SelectContent>
              {{moduleState}}
            </SelectContent>

            <Transition name="select">
              <SelectGroup
                v-if="isModuleSelectOpen"
                class="select-group"
              >
                <SelectOption
                  v-for="option in modules"
                  :key="option"
                  @click="moduleState = option"
                >
                  {{option}}
                </SelectOption>
              </SelectGroup>
            </Transition>
          </Select>
        </div>
      </div>

      <CreateAssignmentCode
        v-if="assignmentState === 'Код'"
        v-model:title="title"
        v-model:description="description"
        v-model:module="moduleState"
      />

      <CreateAssignmentQuiz
        v-if="assignmentState === 'Викторина'"
        v-model:title="title"
        v-model:description="description"
        v-model:module="moduleState"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100dvh;
  width: 100dvw;
  background-color: var(--bg);
  transition: background-color var(--transition-function) .15s;
  padding: 72px 120px;

  h1 {
    margin-bottom: 9px;
    width: 100%;
  }

  .content {
    .control {
      width: 100%;
      display: flex;
      gap: 24px;
      margin-bottom: 21px;

      .form {
        display: flex;
        align-items: center;
        gap: 9px;

        .selected-option {
          min-width: 150px;
          padding: 8px 12px;
        }

        .select-group {
          padding: 6px ;
          height: auto;

          .option {
            padding: 6px 9px;
          }
        }
      }

    }

  }
}


@media screen and (max-width: 850px) {
  .layout {
    padding: 55px 32px;
  }
}

</style>