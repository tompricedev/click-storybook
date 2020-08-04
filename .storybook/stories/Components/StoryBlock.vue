<template>
	<section>
		<StoryPreview>
			<slot></slot>
		</StoryPreview>
		<StoryCode>
			<StoryCodeTabs :items="items"  />
		</StoryCode>
		<StoryFiles :files="files" v-if="files" />
	</section>
</template>

<script>
import StoryPreview from "./StoryPreview";
import StoryCode from "./StoryCode";
import StoryCodeTabs from "./StoryCodeTabs";
import StoryCodeEditor from "./StoryCodeEditor";
import StoryFiles from "./StoryFiles";

export default {
	name: "story-block",
	components: {
    StoryPreview,
    StoryCode,
    StoryCodeTabs,
		StoryCodeEditor,		
		StoryFiles,		
	},
	props: {
		items: Array,
		files: Array
	},
}
</script>