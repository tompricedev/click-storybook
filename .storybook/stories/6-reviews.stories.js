import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import ModMakeAndModel from "./Modules/ModMakeAndModel";

export default {
  title: "Homepage Modules/Reviews",
};


/***** 01. InternalStatic *****/

export const InternalStatic = () => ({
  name: "InternalStatic",
  components: {
    StoryBlock,
    ModMakeAndModel,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<p>Internal static reviews</p>
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "marquee",
        content: "Why am I moving?",
      },
      module: 11,
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

/***** 01. InternalCarousel *****/

export const InternalCarousel = () => ({
  name: "InternalCarousel",
  components: {
    StoryBlock,
    ModMakeAndModel,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<p>Internal carousel</p>
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "marquee",
        content: "Why am I moving?",
      },
      module: 12,
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

