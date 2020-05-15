import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import ModPicksMMP from "./Modules/ModPicksMMP";
import ModPicksFinance from "./Modules/ModPicksFinance";

export default {
  title: "Homepage Modules/Picks Carousel",
};


/***** 01. MMP *****/

export const MakeModelPrice = () => ({
  name: "MakeModelPrice",
  components: {
    StoryBlock,
    ModPicksMMP,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModPicksMMP />
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "text",
        content: "Why am I moving?",
      },
      module: 6,
    };
  },
  created() {
    axios
      .get(
        "https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/clickcomponents-uwksb/service/getModules/incoming_webhook/webhook0"
      )
      .then((response) => {        
        
				this.items = response.data[0].modules[this.module].items
        console.log(this.items, this.module);
      });
  },
});

/***** 02. Additional Info *****/

export const AdditionalInfo = () => ({
  name: "AdditionalInfo",
  components: {
    StoryBlock,
    ModPicksMMP,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<p>Additional info - use the one from Wavmob</p>
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "text",
        content: "Why am I moving?",
      },
      module: 7,
    };
  },
  created() {
    axios
      .get(
        "https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/clickcomponents-uwksb/service/getModules/incoming_webhook/webhook0"
      )
      .then((response) => {        
        
				this.items = response.data[0].modules[this.module].items
        console.log(this.items, this.module);
      });
  },
});

/***** 03. Show Finance *****/

export const ShowFinance = () => ({
  name: "ShowFinance",
  components: {
    StoryBlock,
    ModPicksFinance,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModPicksFinance />
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "text",
        content: "Why am I moving?",
      },
      module: 7,
    };
  },
  created() {
    axios
      .get(
        "https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/clickcomponents-uwksb/service/getModules/incoming_webhook/webhook0"
      )
      .then((response) => {        
        
				this.items = response.data[0].modules[this.module].items
        console.log(this.items, this.module);
      });
  },
});
