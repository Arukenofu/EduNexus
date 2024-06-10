<script lang="ts" setup>
import { TextAlign } from "@tiptap/extension-text-align";
import Margin from "tiptap-extension-margin/src/margin";
import { CodeBlock } from "@tiptap/extension-code-block";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import CacheModal from "~/components/Editor/CacheModal.vue";
import MathExtension from "@aarkue/tiptap-math-extension";
import { Image } from "@tiptap/extension-image";
import { useRouteQuery } from "#imports";

const editor = useEditor({
  content: "Напишите что то",
  onUpdate: ({editor}) => {
    localStorage.setItem('editorCache', editor.getHTML());
    localStorage.setItem('editorCacheFor', useRoute()?.query?.for as string);
    localStorage.setItem('editorCacheCourse', useRoute()?.query?.course as string);
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
    }),
    Image.configure({
      allowBase64: true
    })
  ],
});

onBeforeUnmount(() => {
  unref(editor)!.destroy();
});

const query = useRouteQuery();

const isOpen = ref<boolean>(false);

onMounted(() => {
  const isCache =
    localStorage.getItem('editorCache') &&
    localStorage.getItem('editorCacheFor') === useRoute()?.query?.for &&
    localStorage.getItem('editorCacheCourse') === useRoute()?.query?.course;

  if (isCache) {
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

function onTabPressed() {
  if (editor.value?.isActive('codeBlock')) {
    return editor.value?.commands.insertContent('\t')
  }
}

function onSubmit(form: {header: string, description: string, module_name: string}) {
  useAPI(`/teaching/${query.value.course}/lectures`, {
    baseURL: useRuntimeConfig().public.apiBase,
    method: 'POST',
    body: {
      title: form.header,
      module_name: form.module_name,
      description: form.description,
      content: editor.value?.getHTML()
    }
  })
}

</script>


<template>
  <EditorHeader
    @onSubmit="onSubmit"
  />

  <div>
    <EditorControls :editor="editor" />
    <div class="editor">
      <h1
        id="lectureHeader"
        contenteditable="true"
        spellcheck="false"
        @paste.prevent
      >
        Заголовок
      </h1>

      <TiptapEditorContent
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        :editor="editor"
        @keydown.tab.prevent="onTabPressed"
      />
    </div>
  </div>

  <Modal v-model:is-open="isOpen">
    <CacheModal @onExit="onExit" @onContinue="onContinue" />
  </Modal>
</template>

<style lang="scss" scoped>
@import "style/lecture-classes";
@import "style/syntax";

body {
  transition: background-color var(--transition-function) .15s;
}

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