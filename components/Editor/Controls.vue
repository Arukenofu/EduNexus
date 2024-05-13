<script setup lang="ts">
import { Editor } from "@tiptap/vue-3";

const editor = defineModel<Editor>('editor');

</script>

<template>
  <div class="controls left" v-if="editor">

    <EditorControlButton
      @click="editor.chain().focus().toggleBold().run()"
      :disabled="!editor.can().chain().focus().toggleBold().run()"
      :class="{ 'is-active': editor.isActive('bold') }"
      icon="material-symbols:format-bold"
    />

    <EditorControlButton
      @click="editor.chain().focus().toggleItalic().run()"
      :disabled="!editor.can().chain().focus().toggleItalic().run()"
      :class="{ 'is-active': editor.isActive('italic') }"
      icon="material-symbols:format-italic"
    />

    <EditorControlButton
      @click="editor.chain().focus().toggleStrike().run()"
      :disabled="!editor.can().chain().focus().toggleStrike().run()"
      :class="{ 'is-active': editor.isActive('strike') }"
      icon="material-symbols:format-strikethrough"
    />

    <EditorControlButton
      @click="editor.chain().focus().toggleCode().run()"
      :disabled="!editor.can().chain().focus().toggleCode().run()"
      :class="{ 'is-active': editor.isActive('code') }"
      icon="material-symbols:code"
    />

    <EditorControlButton
      @click="editor.chain().focus().unsetAllMarks().run()"
      icon="material-symbols:bookmark-remove-outline"
    />

    <EditorControlButton
      @click="editor.chain().focus().clearNodes().run()"
      icon="material-symbols:format-clear"
    />

    <EditorControlButton
      @click="editor.chain().focus().setParagraph().run()"
      :class="{ 'is-active': editor.isActive('paragraph') }"
      icon="material-symbols:format-paragraph"
    />

    <EditorControlButton
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      icon="material-symbols:format-h1"
    />

    <EditorControlButton
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      icon="material-symbols:format-h2"
    />

    <EditorControlButton
      @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      icon="material-symbols:format-h3"
    />

    <EditorControlButton
      @click="editor.chain().focus().toggleBulletList().run()"
      :class="{ 'is-active': editor.isActive('bulletList') }"
      icon="material-symbols:format-list-bulleted-rounded"
    />

    <EditorControlButton
      @click="editor.chain().focus().toggleOrderedList().run()"
      :class="{ 'is-active': editor.isActive('orderedList') }"
      icon="material-symbols:format-list-numbered"
    />

    <EditorControlButton
      @click="editor.chain().focus().toggleCodeBlock().run()"
      :class="{ 'is-active': editor.isActive('codeBlock') }"
      icon="material-symbols:code-blocks-outline-sharp"
    />

    <EditorControlButton
      @click="editor.chain().focus().setHorizontalRule().run()"
      icon="material-symbols:horizontal-rule"
    />

    <EditorControlButton
      @click="editor.chain().focus().undo().run()"
      :disabled="!editor.can().chain().focus().undo().run()"
      icon="material-symbols:undo"
    />

    <EditorControlButton
      @click="editor.chain().focus().redo().run()"
      :disabled="!editor.can().chain().focus().redo().run()"
      icon="material-symbols:redo"
    />

  </div>

  <div class="controls right" v-if="editor">

    <EditorControlButton
      icon="material-symbols:align-horizontal-left"
      @click="editor.chain().focus().setTextAlign('left').run()"
      :class="{ 'is-active': editor.isActive({textAlign: 'left'}) }"
    />
    <EditorControlButton
      icon="material-symbols:align-horizontal-center"
      @click="editor.chain().focus().setTextAlign('center').run()"
      :class="{ 'is-active': editor.isActive({textAlign: 'center'}) }"
    />
    <EditorControlButton
      icon="material-symbols:align-horizontal-right"
      @click="editor.chain().focus().setTextAlign('right').run()"
      :class="{ 'is-active': editor.isActive({textAlign: 'right'}) }"
    />

  </div>

</template>

<style scoped lang="scss">

.controls {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
}

.left {
  left: -1px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 6px;
}

.right {
  right: -1px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 6px;
}

</style>