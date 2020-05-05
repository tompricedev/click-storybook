<template>
  <v-card flat>
    <v-tabs v-model="tab" background-color="primary" dark>
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
		<StoryCodeEditor />
  </v-card>
</template>

<script>

import StoryCodeEditor from './StoryCodeEditor';

export default {
	components: {
		StoryCodeEditor
	},
  data() {
    return {
      tab: null,
      items: [
        { tab: "HTML", content: "HTML" },
				{ tab: "LESS", content: "Less will go here" },
        { tab: "JS", content: "JS will go here where applicable; greyed out if not used" },
      ],
    };
  },
};
</script>
