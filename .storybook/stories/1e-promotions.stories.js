import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import ModMakeAndModel from "./Modules/ModMakeAndModel";

export default {
  title: "Homepage Modules/Promotions",
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
        type: "text",
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
        
				this.items = response.data[0].modules[this.module].items
        console.log(this.items, this.module);
      });
  },
});

/***** 2. Twin Banner *****/

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
        type: "text",
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
        
				this.items = response.data[0].modules[this.module].items
        console.log(this.items, this.module);
      });
  },
});

/***** 3. Triple Banner *****/

export const TripleBanner = () => ({
  name: "TripleBanner",
  components: {
    StoryBlock,
    ModMakeAndModel,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<p>Triple banner -- Trade Vans Cardiff</p>
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "HTML",
					code: `<!-- Homepage HTML Panel 2 -->
<div class="row-block promo-triple">

		<!-- Panel Left -->
		<div id="panel-1" class="check-panel flex alignvcenter aligncenter lazy-background">
			<div>
				<a href="/car_locator.php" class="inner-padding">
					<h2 class="check-panel__title">Vehicle Sourcing</h2>
					<div class="check-panel__text">We can help you find your perfect van</div>
					<div class="check-panel__button">Learn More</div>
				</a>
			</div>
		</div>
		<!-- // Panel Left -->

		<!-- Panel Right -->
		<div id="panel-2" class="check-panel flex alignvcenter aligncenter lazy-background">
			<div>
				<a href="/partex.php" class="inner-padding">
					<h2 class="check-panel__title">Part Exchange</h2>
					<div class="check-panel__text">Get the up-to-the-minute market value of your van</div>
					<div class="check-panel__button">Get Valuation</div>
				</a>
			</div>
		</div>
		<!-- Panel Right -->
		

		<!-- Panel Right -->
		<div id="panel-3" class="check-panel flex alignvcenter aligncenter lazy-background">
			<div>
				<a href="/finance.php" class="inner-padding">
					<h2 class="check-panel__title">Finance</h2>
					<div class="check-panel__text">Need help financing your next van? We can help</div>
					<div class="check-panel__button">Apply Online</div>
				</a>
			</div>
		</div>
		<!-- Panel Right -->

</div>
<!-- // END Homepage HTML Panel 2 -->`
				},
				{
					tab: "LESS",
					code: `.promo-triple {
	display: flex;
	flex-wrap: wrap;
	background: @panel-bg-colour;
	.check-panel {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1 1 320px;
		min-height: 400px;
		padding: 40px;
		text-align: center;
		@media @mobile{
			min-height: auto;
		}
		&:before {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			background: fade(black,65%);
			transition: all .2s;
		}

		&:hover:before {
			background: fade(black,30%);
		}

		&__title {
			.main-header;
			.main-header.center;
			position: relative;
			display: block;
			font-size: 26px;
			color: white;

			@media @mobile {
				font-size: 22px;
			}
		}

		&__text {
			position: relative;
			display: block;
			font-size: 16px;
			color: white;

			@media @mobile {
				font-size: 15px;
			}
		}

		&__button {
			position: relative;
			display: inline-block;
			.btn;
			margin: 20px 0 0 0 !important;
		}
	}

	#panel-1 {
		&.visible {
		background: url('@{dealer-img}/theme/promo-1.jpg') center center no-repeat;
		background-size: cover!important;
		background-repeat: no-repeat!important;
		background-position: center center!important;
		}

	}
	#panel-2 {
		&.visible {
		background: url('@{dealer-img}/theme/promo-2.jpg') center center no-repeat;
		background-size: cover!important;
		background-repeat: no-repeat!important;
		background-position: center center!important;
		}
	}
	#panel-3 {
		&.visible {
		background: url('@{dealer-img}/theme/promo-3.jpg') center center no-repeat;
		background-size: cover!important;
		background-repeat: no-repeat!important;
		background-position: center center!important;
		}
	}
}`
				},
			],
		}
  },
});

/***** 4. Tile Promo *****/

export const TilePromo = () => ({
  name: "TilePromo",
  components: {
    StoryBlock,
    ModMakeAndModel,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<p>Tile promo - Beacon Hill</p>
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "HTML",
					code: ``,
				},
				{
					tab: "LESS",
					code: ``,
				},				
			],
    };
  },
});