<template>
  <codemirror
    ref="cmEditor"
		:item="this.item"
		:code="this.code"
    :value="code"
    :options="cmOptions"	
    
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
      cmOptions: {
        tabSize: 2,
        theme: "dracula",
        lineNumbers: true,
				line: true,  
			},
    };
	},
	props: {
		item: Object,
		code: String,
	},
};
</script>
