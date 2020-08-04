<template>
  <v-card flat :items="items">
    <v-tabs v-model="tab" background-color="primary" dark>
      <v-tab v-for="(item, i) in items" :key="i">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, i) in items" :key="i">
        <v-card flat>					
          <v-card-text class="ma-0 pa-0">
            <StoryCodeEditor :code="item.code" v-if="!item.folders" />
            <StoryFiles v-else :folders="item.folders" />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
		<v-btn class="my-5" color="primary" @click="copyCode">
			<v-icon class="mr-2">mdi-content-copy</v-icon>
			Copy Code
		</v-btn>
  </v-card>
</template>

<script>
import StoryCodeEditor from "./StoryCodeEditor";
import StoryFiles from "./StoryFiles";

export default {
  components: {
    StoryCodeEditor,
    StoryFiles,
	},
	data() {
		return {
			tab: null,
		}
	},
	props: {
		items: Array,
		code: String,	
	},
	methods: {
		copyCode: function() {	
			let clip = this.items[this.tab].code;
			navigator.clipboard.writeText(clip);		
		}
	}
};
</script>
