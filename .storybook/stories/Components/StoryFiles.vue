<template>
	<v-treeview
		v-model="tree"
		:open="open"
		:items="folders"
		item-key="name"
		activatable
		open-on-click
	>
		<template v-slot:prepend="{ item, open }">
			<v-icon v-if="!item.file">
        {{ open ? "mdi-folder-open" : "mdi-folder" }}
      </v-icon>
      <v-icon v-else>
        {{ files[item.file] }}
      </v-icon>
		</template>
	</v-treeview>
</template>

<script>
export default {
	props: {
		folders: Array
	},
  data: () => ({
    open: [],
    files: {
      html: "mdi-language-html5",
      css: "mdi-language-css3",
      js: "mdi-nodejs",
      json: "mdi-json",
      md: "mdi-markdown",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      txt: "mdi-file-document-outline",
      xls: "mdi-file-excel",
    },
		tree: [],		
	}),
	mounted() {
		console.log('folders: ' + this.folders)
	}
};
</script>
