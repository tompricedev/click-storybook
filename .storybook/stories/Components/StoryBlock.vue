<template>
	<section>
		<StoryPreview>
			<slot></slot>
		</StoryPreview>
		<StoryCode>
			<StoryCodeTabs :items="items" :module="module" />
		</StoryCode>
		<StoryUserGuide />
	</section>
</template>

<script>
import StoryPreview from "./StoryPreview";
import StoryCode from "./StoryCode";
import StoryCodeTabs from "./StoryCodeTabs";
import StoryCodeEditor from "./StoryCodeEditor";
import StoryUserGuide from "./StoryUserGuide";

export default {
	name: "story-block",
	components: {
    StoryPreview,
    StoryCode,
    StoryCodeTabs,
    StoryCodeEditor,
		StoryUserGuide,		
	},
	props: {
		items: Array,
		module: Number
	},
}
</script>