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
          <v-card-text class="ma-0 pa-0">
            <StoryCodeEditor :code="item.code" v-if="!item.folders" />
            <StoryFiles v-else :folders="item.folders" />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
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
    };
  },
  inject: ["items"],
};
</script>
