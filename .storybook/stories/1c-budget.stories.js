import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import ModSliderOnly from "./Modules/ModSliderOnly";
import ModSliderCar from "./Modules/ModSliderCar";
import ModSliderBudgets from "./Modules/ModSliderBudgets";

export default {
  title: "Homepage Modules/Budget Search",
};


/***** 01. Slider Only *****/

export const SliderOnly = () => ({
  name: "SliderOnly",
  components: {
    StoryBlock,
    ModSliderOnly,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModSliderOnly />
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "text",
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
        
				this.items = response.data[0].modules[this.module].items
        console.log(this.items, this.module);
      });
  },
});

/***** 02. Slider with car *****/

export const SliderWithCar = () => ({
  name: "SliderWithCar",
  components: {
		StoryBlock,
		ModSliderCar
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModSliderCar />
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "text",
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
        
				this.items = response.data[0].modules[this.module].items
        console.log(this.items, this.module);
      });
  },
});

/***** 03. Slider with budgets *****/

export const SliderWithBudgets = () => ({
  name: "SliderWithBudgets",
  components: {
		StoryBlock,
		ModSliderBudgets
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModSliderBudgets />
		</StoryBlock>
	`,
  data() {
    return {
      items: [],
      userguide: {
        type: "text",
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
        
				this.items = response.data[0].modules[this.module].items
        console.log(this.items, this.module);
      });
  },
});

