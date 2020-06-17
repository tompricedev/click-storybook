<template>
  <v-card class="my-5">
    <v-container>
      <v-card-title>
        Submit A Module
      </v-card-title>
      <v-form>
        <v-row>
          <v-col cols="4">
            <v-select 
							dense
							outlined
							label="Module Page" 
							:items="pages"			
						></v-select>
          </v-col>

          <v-col cols="4">
            <v-select
							dense
              outlined
              :items="sections"
              label="Module Section"
							disabled							
            ></v-select>
          </v-col>

          <v-col cols="4">
            <v-text-field dense outlined label="Module Name"></v-text-field>
          </v-col>

          <v-col cols="4" sm="12" xs="12">
            <v-textarea dense outlined label="HTML"></v-textarea>
          </v-col>

          <v-col cols="4" sm="12" xs="12">
            <v-textarea dense outlined label="LESS"></v-textarea>
          </v-col>

          <v-col cols="4" sm="12" xs="12">
            <v-textarea dense outlined label="JS"></v-textarea>
          </v-col>

					<v-col>
						<v-file-input
							dense
							outlined
							counter
							label="Upload Files"
						></v-file-input>
					</v-col>

					<v-col cols="12">
						<v-btn class="primary">Submit</v-btn>
					</v-col>

        </v-row>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      pages: ["Homepage", "Results", "Details"],
      sections: [
        "Hero Unit",
        "Search",
        "Picks",
        "Budget",
        "Promotions",
        "Reviews",
      ],
    };
	},
};
</script>
