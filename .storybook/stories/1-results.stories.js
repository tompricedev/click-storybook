import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import ModMakeAndModel from "./Modules/ModMakeAndModel";

export default {
  title: "Results Page/Results",
};


/***** 01. Full Width *****/

export const FullWidth = () => ({
  name: "FullWidth",
  components: {
    StoryBlock,
    ModMakeAndModel,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<p>Full width banner</p>
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "marquee",
        content: "Why am I moving?",
      },
      module: 9,
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

/***** 01. Twin Banner *****/

export const TwinBanner = () => ({
  name: "TwinBanner",
  components: {
    StoryBlock,
    ModMakeAndModel,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<p>Twin banner</p>
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "marquee",
        content: "Why am I moving?",
      },
      module: 10,
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

