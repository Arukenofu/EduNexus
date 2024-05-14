<script setup lang="ts">

const languages = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'swift', label: 'Swift' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'c', label: 'C' },
  { value: 'cplusplus', label: 'C++' },
  { value: 'scala', label: 'Scala' },
  { value: 'kotlin', label: 'Kotlin' },
  { value: 'perl', label: 'Perl' },
  { value: 'lua', label: 'Lua' },
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'sql', label: 'SQL' },
  { value: 'r', label: 'R' },
  { value: 'assembly', label: 'Assembly' },
  { value: 'dart', label: 'Dart' },
  { value: 'shell', label: 'Shell Script' },
  { value: 'powershell', label: 'PowerShell' },
  { value: 'matlab', label: 'MATLAB' },
  { value: 'swift', label: 'Swift' },
  { value: 'objectivec', label: 'Objective-C' }
];

const isSelected = ref<boolean>(false);

function onClickOutside() {
  if (isSelected.value) {
    isSelected.value = !isSelected.value;
  }
}

function setSelectedLanguage(index: number) {
  selectedLanguage.value = index;

  isSelected.value = false;
}

const selectedLanguage = ref<number>();

defineEmits(['setLanguage']);

</script>

<template>
  <div class="modal">
    <div class="control">

      <button>
        Закрыть
        <Icon class="icon" name="ic:baseline-close" size="1.4em" />
      </button>
    </div>

    <div class="content">
      <h1>Выберите язык программирования</h1>

      <p>Добавьте язык программирования для более лучшего понимания хайлайтера.</p>

      <Select class="select" v-click-outside="() => onClickOutside()">
        <SelectContent @click="isSelected =! isSelected">
          {{ languages[selectedLanguage!]?.label || 'Авто' }}
        </SelectContent>

        <Transition name="select">
          <SelectGroup v-if="isSelected">
            <SelectOption
              v-for="(language, index) in languages"
              :key="index"
              @click="setSelectedLanguage(index)"
            >
              {{language.label}}
            </SelectOption>
          </SelectGroup>
        </Transition>
      </Select>
    </div>

    <button
      @click="$emit('setLanguage', languages[selectedLanguage!]?.value || '')"
      class="setLang"
    >
      Установить
    </button>
  </div>
</template>

<style scoped lang="scss">
.modal {
  background-color: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  width: 550px;
  aspect-ratio: 1/.8;
  padding: 16px;
  overflow-y: hidden;
  position: relative;

  .control {
    width: 100%;
    height: 40px;
    background-color: var(--bg);

    button {
      display: block;
      margin-left: auto;
      height: 90%;
      padding: 0 12px;
      background: none;
      border: none;
      color: var(--text);
      font-size: .8em;
      font-weight: 600;

      .icon {
        position: relative;
        bottom: 1px;
      }

      &:hover {
        text-decoration: underline;
        background-color: var(--border);
        border-radius: 4px;
      }
    }
  }

  .content {
    padding: 0 24px;
    position: relative;

    h1 {
      font-size: 1.7em;
      font-weight: 700;
      margin-bottom: 21px;
    }

    p {
      font-size: .95em;
      font-weight: 400;
      line-height: 1.5;
      margin-bottom: 14px;
    }
  }
}

.setLang {
  position: absolute;
  bottom: 32px;
  right: 32px;
  background-color: var(--text);
  border: none;
  color: var(--bg);
  border-radius: 4px;
  padding: 9px 16px;
  font-weight: 600;
  font-size: .8em;
}

.select {
  width: 45%;
}

.select-enter-active, .select-leave-active {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .15s;
}

.select-enter-from,
.select-leave-to {
  opacity: 0;
}
</style>