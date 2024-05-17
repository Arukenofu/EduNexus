<script lang="ts" setup>
import { TextAlign } from "@tiptap/extension-text-align";
import Margin from "tiptap-extension-margin/src/margin";
import { CodeBlock } from "@tiptap/extension-code-block";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import CacheModal from "~/components/Editor/CacheModal.vue";
import MathExtension from "@aarkue/tiptap-math-extension";

const editor = useEditor({
  content: "Напишите что то",
  onUpdate: ({editor}) => {
    localStorage.setItem('editorCache', editor.getHTML());
  },
  extensions: [
    TiptapStarterKit.configure({
      codeBlock: false
    }),
    TextAlign.configure({
      types: ['heading', 'paragraph']
    }),
    MathExtension.configure({
      evaluation: true
    }),
    Margin,
    CodeBlock.configure({
      languageClassPrefix: 'language-',
      exitOnTripleEnter: false,
      exitOnArrowDown: false,
    }),
    CodeBlockLowlight.configure({
      lowlight: createLowlight(common)
    })
  ],
});

onBeforeUnmount(() => {
  unref(editor)!.destroy();
});

const isOpen = ref<boolean>(false);

onMounted(() => {
  if (localStorage.getItem('editorCache')) {
    isOpen.value = true;
  }
})

function onExit() {
  localStorage.removeItem('editorCache')

  isOpen.value = false;
}

function onContinue() {
  editor.value?.commands.setContent(localStorage.getItem('editorCache'))

  isOpen.value = false;
}

</script>


<template>
  <div>
    <EditorControls :editor="editor" />
    <div class="editor">
      <h1 contenteditable="true" spellcheck="false" @paste.prevent>
        Заголовок
      </h1>

      <TiptapEditorContent autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" :editor="editor" />
    </div>
  </div>

  <Modal  v-model:is-open="isOpen">
    <CacheModal @onExit="onExit" @onContinue="onContinue" />
  </Modal>
</template>

<style lang="scss" scoped>
@import "style/lecture-classes";
@import "style/syntax";

.editor {
  padding: 72px 0 94px;
  margin: 0 auto;
  width: 53%;
  min-width: 500px;
  line-height: 1.5;
  color: var(--text-soft);

  h1 {
    outline: none;
    font-size: 2.75rem;
    margin-bottom: 14px;
    font-weight: 800;
  }
}

:deep(.tiptap ) {
  outline: none;

  h2 {
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 7px;
  }

  h3 {
    font-size: 1.2em;
    margin-bottom: 7px;
  }

  p {
    font-size: 1em;
    line-height: 1.4;
    font-weight: 500;
  }

  ul {

    li {
      margin-left: 15px;
    }
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  pre {
    background-color: #18181a;
    padding: 12px 21px;
    border-radius: 0.3em;
    border: 1px solid var(--border);
    user-select: none;

    code {
      white-space: inherit;
      font-weight: 700;

      @include syntax();
    }
  }
}

:global(.katex-html) {
  display: none;
}
</style>