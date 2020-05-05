import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

export default {
	title: "Homepage Modules/Search Items"
}

import StoryPreview from "./Components/StoryPreview";
import StoryCode from "./Components/StoryCode";
import StoryCodeTabs from "./Components/StoryCodeTabs";
import ModSearchBlock from "./Modules/ModSearchBlock";

export const MakeAndModel = () => ({
  name: "MakeAndModel",
  components: {
    StoryPreview,
		StoryCode,
		StoryCodeTabs,
    ModSearchBlock,
  },
  template: `
	<section>
		<StoryPreview>
			<ModSearchBlock />
		</StoryPreview>
		<StoryCode>
			<StoryCodeTabs />
		</StoryCode>
	</section>
	`,
});

export const Brands = () => ({
  name: "Brands",
  components: {
    StoryPreview,
		StoryCode,
		StoryCodeTabs,
    ModSearchBlock,
  },
  template: `
	<section>
		<StoryPreview>
			<ModSearchBlock />
		</StoryPreview>
		<StoryCode>
			<StoryCodeTabs />
		</StoryCode>
	</section>
	`,
});

export const BodyType = () => ({
  name: "Body Type",
  components: {
    StoryPreview,
		StoryCode,
		StoryCodeTabs,
    ModSearchBlock,
  },
  template: `
	<section>
		<StoryPreview>
			<ModSearchBlock />
		</StoryPreview>
		<StoryCode>
			<StoryCodeTabs />
		</StoryCode>
	</section>
	`,
});