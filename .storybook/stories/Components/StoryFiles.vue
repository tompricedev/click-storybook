<template>
  <v-card my-5>
    <v-card-title>
      Required Files
    </v-card-title>
    
		<v-treeview :items="files">
			<template slot="label" slot-scope="props">
				<a :href="props.item.link" target="_blank" v-if="props.item.link">{{ props.item.name }}</a>
				<span v-else> {{ props.item.name }} </span>
			</template>
		</v-treeview>

  </v-card>
</template>

<script>
export default {
  props: {
		files: Array
	},	
};
</script>
