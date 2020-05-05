import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import StoryPreview from "./Components/StoryPreview";
import StoryCode from "./Components/StoryCode";
import StoryCodeTabs from "./Components/StoryCodeTabs";
import StoryUserGuide from "./Components/StoryUserGuide";
import ModSearchBlock from "./Modules/ModSearchBlock";

export default {
  title: "Homepage Modules/Hero Unit",
};

export const UXSearchBlock = () => ({
  name: "UX/UI SearchBlock",
  components: {
    StoryPreview,
    StoryCode,
    StoryCodeTabs,
    ModSearchBlock,
    StoryUserGuide,
  },
  template: `
	<section>
		<StoryPreview>
			<ModSearchBlock />
		</StoryPreview>
		<StoryCode>
			<StoryCodeTabs />
		</StoryCode>
		<StoryUserGuide>
			<v-list
				flat
				subheader
			>
				<v-subheader>Steps</v-subheader>
				<v-list-item-group
        v-model="settings"
        multiple
        active-class=""
      >
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Do something in webplanner</v-list-item-title>
              <v-list-item-subtitle>You will find it somewhere in the jungle</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="active"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Pray for no 504</v-list-item-title>
              <v-list-item-subtitle>Don't ask for news unless you want a link to the BBC website</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
			</v-list>
		</StoryUserGuide>
	</section>
	`,
});

export const SliderSubtleText = () => ({
  name: "Slider Subtle Text",
  components: {
    StoryPreview,
    StoryCode,
    StoryCodeTabs,
    ModSearchBlock,
    StoryUserGuide,
  },
  template: `
	<section>
		<StoryPreview>
			<ModSearchBlock />
		</StoryPreview>
		<StoryCode>
			<StoryCodeTabs />
		</StoryCode>
		<StoryUserGuide />
	</section>
	`,
});

export const SliderPopUp = () => ({
  name: "Slider Pop Up",
  components: {
    StoryPreview,
    StoryCode,
    StoryCodeTabs,
    ModSearchBlock,
    StoryUserGuide,
  },
  template: `
	<section>
		<StoryPreview>
			<ModSearchBlock />
		</StoryPreview>
		<StoryCode>
			<StoryCodeTabs />
		</StoryCode>
		<StoryUserGuide />
	</section>
	`,
});
