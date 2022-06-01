<template>
  <v-flex
    @focus="handleFocus"
    @focusout="handleFocusOut"
    class="toastui-viewer"
  >
    <div ref="editor" style="display: block; height: 1000px"></div>
    <input type="hidden" id="tmp" />
  </v-flex>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";

import $ from "jquery";
import _ from "lodash";
import Editor from "@toast-ui/editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";

Editor.setLanguage(["th", "th-TH"], {
  Markdown: "Markdown",
  WYSIWYG: "WYSIWYG",
  Write: "Write",
  Preview: "Preview",
  Headings: "Headings",
  Paragraph: "Paragraph",
  Bold: "Bold",
  Italic: "Italic",
  Strike: "Strike",
  Code: "Inline code",
  Line: "Line",
  Blockquote: "Blockquote",
  "Unordered list": "Unordered list",
  "Ordered list": "Ordered list",
  Task: "Task",
  Indent: "Indent",
  Outdent: "Outdent",
  "Insert link": "Insert link",
  "Insert CodeBlock": "Insert codeBlock",
  "Insert table": "Insert table",
  "Insert image": "Insert image",
  Heading: "Heading",
  "Image URL": "Image URL",
  "Select image file": "Select image file",
  Description: "Description",
  OK: "OK",
  More: "More",
  Cancel: "Cancel",
  File: "File",
  URL: "URL",
  "Link text": "Link text",
  "Add row": "Add row",
  "Add col": "Add col",
  "Remove row": "Remove row",
  "Remove col": "Remove col",
  "Align left": "Align left",
  "Align center": "Align center",
  "Align right": "Align right",
  "Remove table": "Remove table",
  "Would you like to paste as table?": "Would you like to paste as table?",
  "Text color": "Text color",
  "Auto scroll enabled": "Auto scroll enabled",
  "Auto scroll disabled": "Auto scroll disabled",
  "Choose language": "Choose language"
});
/*
[
        ["bold", "italic", "strike", "underline", "blockquote"],
        ["code", "table"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ["clean"]
      ]
      */
export default {
  props: {
    value: { type: String, default: '' },
    toolbars: {
      type: Array,
      default: () => [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
        ['scrollSync']
      ]
    }
  },
  data() {
    return {};
  },
  computed: {
    tmpdata() {
      return this.value;
    }
  },
  watch: {
    value(v) {
      try {
        this.editor.setMarkdown(this.$(v).text() || v);
      } catch (error) {
        this.editor.setMarkdown(v);
      }
    },
    tmpData(v) {
      try {
        this.value = this.$(v).text() || v;
      } catch (error) {
        this.value = v;
      }
    }
  },
  methods: {
    handleFocus() {
      // do something here
    },
    handleFocusOut() {
      this.$emit("input", this.editor.getMarkdown());
      // do something here
    }
  },
  async mounted() {
    try {
      this.tmpData = this.$(this.value).text() || this.value;
    } catch (error) {
      this.tmpData = this.value;
    }
    console.log(this.toolbars);
    const editor = (this.editor = new Editor({
      el: this.$refs.editor,
      toolbarItems: this.toolbars,
      initialEditType: "wysiwyg",
      language: "th",
      initialValue: this.tmpData,
      hideModeSwitch: true,
      events: {
        change: v => {
          this.disabledWatchValue = true;
          // this.$emit("input", this.editor.getMarkdown());
        }
      },
      hooks: {
        addImageBlobHook(blob, callback) {
          return false;
        }
      },
      
      // plugins: [colorSyntax, tableMergedCell]
    }));

    // fix disable upload image
    {
      $(this.$el)
        .find(".te-popup-add-image .te-tab-section")
        .hide();
      $(this.$el)
        .find(".te-popup-add-image .te-file-type")
        .removeClass("te-tab-active");
      $(this.$el)
        .find(".te-popup-add-image .te-url-type")
        .addClass("te-tab-active");
    }
  }
};
</script>

<style lang="scss">
h6 {
  font-size: 0.95rem;
}
h5 {
  font-size: 1rem;
}
h4 {
  font-size: 1.1rem;
}
h3 {
  font-size: 1.18rem;
}
h2 {
  font-size: 1.27rem;
}
h1 {
  font-size: 1.36rem;
}
.toastui-viewer {
  .tui-editor-contents {
    font-size: 1rem;
  }

  h6 {
    font-size: 1.05rem;
  }
  h5 {
    font-size: 1rem;
  }
  h4 {
    font-size: 1.1rem;
  }
  h3 {
    font-size: 1.18rem;
  }
  h2 {
    font-size: 1.27rem;
  }
  h1 {
    font-size: 1.36rem;
  }
}
</style>
