<script setup>


import { TextAlign } from "@tiptap/extension-text-align";

const editor = useEditor({
  content: "Напишите что то",
  extensions: [
    TiptapStarterKit,
    TextAlign.configure({
      types: ['heading', 'paragraph']
    })
  ],
});

onBeforeUnmount(() => {
  unref(editor).destroy();
});

const Bold = () => {
  editor.value.chain().focus().toggleBold().run();
}



</script>


<template>
  <div>
    <EditorControls :editor="editor" />
    <div class="editor">
      <h1 contenteditable="true" @paste.prevent>
        Заголовок
      </h1>

      <TiptapEditorContent  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" :editor="editor" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style/lecture-classes";

.editor {
  padding: 72px 0 94px;
  margin: 0 auto;
  width: 53%;
  min-width: 500px;
  line-height: 1.5;
  color: var(--text-soft);

  h1 {
    outline: none;
    margin-bottom: 14px;
  }

  :global(.tiptap) {
    outline: none;

    h2 {
      font-size: 1.9em;
      font-weight: 700;
    }

    h3 {
      font-size: 1.5em;
    }

    p {
      font-size: 1.1em;
      line-height: 1.4;
      font-weight: 500;
    }

    img {
      width: 100%;
      border-radius: 8px;
    }
  }
}

</style>