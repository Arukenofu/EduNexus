<script setup lang="ts">
import * as Monaco from "monaco-editor";

const model = defineModel('model');

const options: Monaco.editor.IStandaloneEditorConstructionOptions = {
  theme: 'github',
  fontSize: 16,
  fontFamily: 'JetBrains Mono',
  fontWeight: '600',
  minimap: {
    enabled: false
  },
  fontLigatures: ''
}

</script>

<template>
  <MonacoEditor v-model:model-value="model" lang="go" class="editor" :options="options">
    ...Loading
  </MonacoEditor>
</template>

<style scoped lang="scss">
.editor {
  flex: 1;
  height: calc(100dvh - 75px - 12px);
  position: relative;
  top: 12px;

  ::v-deep(*) {
    .monaco-editor-background, .monaco-editor, .margin, .current-line {
      transition: all .15s var(--transition-function);
    }
  }
}

</style>