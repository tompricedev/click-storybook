import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import ModSearchBlock from "./Modules/ModSearchBlock";
import ModSubtleText from "./Modules/ModSubtleText";
import ModPopUp from "./Modules/ModPopUp";

export default {
  title: "Homepage Modules/Hero Unit",
};

/***** 01. UXUI Search Block *****/

export const UXSearchBlock = () => ({
  name: "UXSearchBlock",
  components: {
    StoryBlock,
    ModSearchBlock,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModSearchBlock />
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "marquee",
        content: "Why am I moving?",
      },
      module: 0,
    };
  },
  created() {
    axios
      .get(
        "https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/clickcomponents-uwksb/service/getModules/incoming_webhook/webhook0"
      )
      .then((response) => {        
        // this.$set(
        //   this.items,
        //   this.module,
        //   response.data[0].modules[this.module].items
				// );
				this.items = response.data[0].modules[this.module].items
        console.log(this.items, this.module);
      });
  },
});

//***** 02. Slider Subtle Text *****//

export const SliderSubtleText = () => ({
  name: "SliderSubtleText",
  components: {
    StoryBlock,
    ModSubtleText,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModSubtleText />
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "marquee",
        content: "Why am I moving?",
      },
      module: 1,
    };
  },
  created() {
    axios
      .get(
        "https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/clickcomponents-uwksb/service/getModules/incoming_webhook/webhook0"
      )
      .then((response) => {        
        // this.$set(
        //   this.items,
        //   this.module,
        //   response.data[0].modules[this.module].items
				// );
				this.items = response.data[0].modules[this.module].items
        console.log(this.items, this.module);
      });
  },
});

//***** 03. Slider Pop Up *****//

export const SliderPopUp = () => ({
  name: "SliderPopUp",
  components: {
    StoryBlock,
    ModPopUp,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModPopUp />
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "marquee",
        content: "Why am I moving?",
      },
      module: 2,
    };
  },
  created() {
    var self = this;
    axios
      .get(
        "https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/clickcomponents-uwksb/service/getModules/incoming_webhook/webhook0"
      )
      .then((response) => {
        // this.$set(
        //   this.items,
        //   this.module,
        //   response.data[0].modules[this.module].items
				// );
				this.items = response.data[0].modules[this.module].items
        console.log(this.items, this.module);
      });
  },
});
