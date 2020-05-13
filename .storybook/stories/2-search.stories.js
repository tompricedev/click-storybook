import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import ModMakeAndModel from "./Modules/ModMakeAndModel";

export default {
  title: "Homepage Modules/Search",
};


/***** 01. Make & Model *****/

export const MakeAndModel = () => ({
  name: "MakeAndModel",
  components: {
    StoryBlock,
    ModMakeAndModel,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModMakeAndModel />
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "marquee",
        content: "Why am I moving?",
      },
      module: 3,
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

/***** 02. Brands *****/

export const Brands = () => ({
  name: "Brands",
  components: {
    StoryBlock,
    ModMakeAndModel,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<p>Brand search preview here</p>
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "marquee",
        content: "Why am I moving?",
      },
      module: 4,
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

/***** 03. Body type *****/

export const BodyType = () => ({
  name: "BodyType",
  components: {
    StoryBlock,
    ModMakeAndModel,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<p>Body type search preview here</p>
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "marquee",
        content: "Why am I moving?",
      },
      module: 5,
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