<script setup>
import { TextAlign } from "@tiptap/extension-text-align";
import Margin from "tiptap-extension-margin/src/margin";
import { CodeBlock } from "@tiptap/extension-code-block";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";

const editor = useEditor({
  content: "Напишите что то",
  onUpdate: () => {
  },
  extensions: [
    TiptapStarterKit.configure({
      codeBlock: false
    }),
    TextAlign.configure({
      types: ['heading', 'paragraph']
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
  unref(editor).destroy();
});



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

      pre code.hljs {
        display: block;
        overflow-x: auto;
        padding: 1em
      }
      code.hljs {
        padding: 3px 5px
      }

      .hljs {
        color: #c9d1d9;
        background: #0d1117
      }
      .hljs-doctag,
      .hljs-keyword,
      .hljs-meta .hljs-keyword,
      .hljs-template-tag,
      .hljs-template-variable,
      .hljs-type,
      .hljs-variable.language_ {
        /* prettylights-syntax-keyword */
        color: #ff7b72
      }
      .hljs-title,
      .hljs-title.class_,
      .hljs-title.class_.inherited__,
      .hljs-title.function_ {
        /* prettylights-syntax-entity */
        color: #d2a8ff
      }
      .hljs-attr,
      .hljs-attribute,
      .hljs-literal,
      .hljs-meta,
      .hljs-number,
      .hljs-operator,
      .hljs-variable,
      .hljs-selector-attr,
      .hljs-selector-class,
      .hljs-selector-id {
        /* prettylights-syntax-constant */
        color: #79c0ff
      }
      .hljs-regexp,
      .hljs-string,
      .hljs-meta .hljs-string {
        /* prettylights-syntax-string */
        color: #a5d6ff
      }
      .hljs-built_in,
      .hljs-symbol {
        /* prettylights-syntax-variable */
        color: #ffa657
      }
      .hljs-comment,
      .hljs-code,
      .hljs-formula {
        /* prettylights-syntax-comment */
        color: #8b949e
      }
      .hljs-name,
      .hljs-quote,
      .hljs-selector-tag,
      .hljs-selector-pseudo {
        /* prettylights-syntax-entity-tag */
        color: #7ee787
      }
      .hljs-subst {
        /* prettylights-syntax-storage-modifier-import */
        color: #c9d1d9
      }
      .hljs-section {
        /* prettylights-syntax-markup-heading */
        color: #1f6feb;
        font-weight: bold
      }
      .hljs-bullet {
        /* prettylights-syntax-markup-list */
        color: #f2cc60
      }
      .hljs-emphasis {
        /* prettylights-syntax-markup-italic */
        color: #c9d1d9;
        font-style: italic
      }
      .hljs-strong {
        /* prettylights-syntax-markup-bold */
        color: #c9d1d9;
        font-weight: bold
      }
      .hljs-addition {
        /* prettylights-syntax-markup-inserted */
        color: #aff5b4;
        background-color: #033a16
      }
      .hljs-deletion {
        /* prettylights-syntax-markup-deleted */
        color: #ffdcd7;
        background-color: #67060c
      }
      .hljs-char.escape_,
      .hljs-link,
      .hljs-params,
      .hljs-property,
      .hljs-punctuation,
      .hljs-tag {
        /* purposely ignored */

      }
    }
  }
}

</style>