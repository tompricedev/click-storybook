<template>
  <codemirror
    ref="cmEditor"
    :value="code"
    :options="cmOptions"
    @ready="onCmReady"
    @focus="onCmFocus"
    @input="onCmCodeChange"
  />
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";

export default {
	components: {
		codemirror
	},
  data() {
    return {
			code: `<!-- Homepage Slider -->
<div class="row-block hero-unit lazy-background">
	<div class="hero-unit-block">
		<div class="hero-unit-block__title">Welcome to {v2_NAME}</div>
		<div class="hero-unit-block__text">
			Family-run business established in 2007
		</div>

		<div class="search-block">
			<!-- {LOAD_SEARCH_HOME} -->
		</div>
	</div>
</div>
<!-- // Homepage Slider -->
			`,
      cmOptions: {
        tabSize: 2,
        mode: {
					name: "htmlembedded"
				},
        theme: "dracula",
        lineNumbers: true,
        line: true,
        // more CodeMirror options...
      },
    };
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focused!", cm);
    },
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
    },
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror;
    },
  },
  mounted() {
    console.log("the current CodeMirror instance object:", this.codemirror);
    // you can use this.codemirror to do something...
  },
};
</script>
