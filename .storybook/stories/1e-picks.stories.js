import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";
import StoryPreviewImg from "./Components/StoryPreviewImg";

/* Module imports for previews */
import ModPicksMMP from "./Modules/ModPicksMMP";
import ModAddInfo from "./Modules/ModAddInfo";
import ModFinancePrice from "./Modules/ModFinancePrice";

export default {
	title: "Homepage Modules/Picks Carousel",
};


/***** 01. MMP *****/

import PicksMMP from './assets/screenshots/picks-mmp.png';

export const MakeModelPrice = () => ({
  name: "MakeModelPrice",
  components: {
    StoryBlock,
    StoryPreviewImg
  },
  template: `
		<StoryBlock :items="items" >
			<StoryPreviewImg :preview="preview" />
		</StoryBlock>
	`,
  data() {
    return {
			preview: `${PicksMMP}`,
      items: [
				{
					tab: "HTML",
					code: `<div class="featured-carousel__item featured-carousel__item--{PICK_SEQ} {PICK_YOUTUBE_CLASS}" id="featured-carousel__item--{PICK_SEQ}">
		<div class="featured-carousel__img">
			<a href="{PICK_SLUG}" title="Used {PICK_MAKE} {PICK_MODEL} for sale in {v2_TOWN}">
				<img class="responsive-img lazy" alt="{PICK_TITLE}" {PICK_IMAGE_SRC} {PICK_IMAGE_PLACEHOLDER} {PICK_IMAGE_SRCSET} >
			</a>
		</div>
		<div class="featured-carousel__details">
			<em class="featured-carousel__title">{PICK_MAKE} {PICK_MODEL} {PICK_VARIANT}</em>
			<em class="featured-carousel__price">{PICK_PRICE}</em>
			
			<div class="featured-carousel__buttons">
				<a href="{PICK_SLUG}" title="Used {PICK_MAKE} {PICK_MODEL} for sale in {v2_TOWN}" class="btn btn--ghost">View this vehicle</a>
			</div>
		</div>
	</div>`
				},
				{
					tab: "LESS",
					code: `.home-panel--latest-arrivals {
		padding: 80px 0 0;
		background: @primary-colour;
	
		@media @mobile {
			padding: 30px 0 0;
		}
	
		.container {
			overflow: visible;
		}
	
		.home-panel__title {
			color: white !important;
		}
	}
	
	.featured-carousel {
		margin: 0 -20px;
		overflow: hidden;
	
		*:focus {
			outline: none;
		}
	
		&__item {
			margin: 0 20px;
			float: left;
		}
	
		&__img {
			img {
				width: 100%;
				height: auto;
			}
		}
	
		&__details {
			padding: 20px;
			border: 1px solid @custom-colour2;
			border-top: 0;
			white-space: nowrap;
	
			em {
				display: block;
				margin-bottom: 10px;
				overflow: hidden;
				text-overflow: ellipsis;
				color: white;
			}
		}
	
		&__buttons {
			display: flex;
			margin-top: 20px;
			margin-right: -20px;
			margin-bottom: -20px;
	
			a, button {
				display: block;
				flex: 1 1 180px;
				margin-right: 20px;
				margin-bottom: 20px;
			}
		}
	}
	
	.slick-arrow {
		position: absolute;
		top: 50%;
		background: white;
		color: @custom-colour3;
		font-size: 26px;
		line-height: 50px;
		border: 1px solid @custom-colour2;
	
		@media @desktop {
			display: none !important;
		}
	
		&:hover {
			color: @secondary-colour;
		}
	
		&.slick-next {
			left: 100%;
			padding: 20px 20px 20px 10px;
			border-radius: 0 999px 999px 0;
		}
	
		&.slick-prev {
			right: 100%;
			padding: 20px 10px 20px 20px;
			border-radius: 999px 0 0 999px;
		}
	}`
				},				
			],
    };
  },
});

/***** 02. Additional Info *****/

import PicksAdditional from './assets/screenshots/picks-additional.png';

export const AdditionalInfo = () => ({
  name: "AdditionalInfo",
  components: {
    StoryBlock,
    StoryPreviewImg
  },
  template: `
		<StoryBlock :items="items" >
			<StoryPreviewImg :preview="preview" />
		</StoryBlock>
	`,
  data() {
    return {
			preview: `${PicksAdditional}`,
      items: [
				{
					tab: "HTML",
					code: `<li id="pick_{PICK_SEQ}" class="specials__item touchcarousel-item">
	<a href="{PICK_SLUG}" title="View our {PICK_MAKE} {PICK_MODEL}">
		<!-- <div class="specials__ref">Ref: {PICK_REGISTRATION}</div> -->
		<div class="specials__image">
				
<img class="home-carousel-img lazy" alt="{PICK_TITLE}" {PICK_IMAGE_SRC} {PICK_IMAGE_PLACEHOLDER} {PICK_IMAGE_SRCSET} >

		</div>
		<div class="specials__content">
			<div class="specials__heading">{PICK_MAKE} {PICK_MODEL}</div>
			<div class="specials__variant">{PICK_VARIANT}</div>
			<div class="specials__info">{PICK_TRANSMISSION}, {PICK_FUEL}, {PICK_COLOUR}, {PICK_YEAR}, {PICK_MILEAGE} miles</div>
		</div>
		<div class="specials__prices">
			<div class="specials__cash">{PICK_PRICE}</div>
			<div class="specials__divider"><span>or</span></div>
			<div class="specials__finance">{PICK_MONTHLY_PAYMENT} <span>p/m</span></div>
		</div>
	</a>
</li>`
				},
				{
					tab: "LESS",
					code: `.row-block--car-carousel {
	padding: 30px 0 50px 0;
	background: @secondary-colour;

	.container,
	.pad-10.overflow-hidden {
		overflow: visible !important;
		padding: 0px;
	}

	.tc-paging-container,
	.arrow-holder {
		display: none;
	}

	h2 {
		.main-header.center;
		color: white;
		@media @mobile {
			.main-header.center;
		}
	}
}

.specials {
	width: 100%;
	height: auto;

	&__list {
		.flex-display;
	}

	&__item {
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: 334px);
		margin-right: 20px !important;
		// border: 1px solid #ddd;
		border-radius: 4px;
		overflow: hidden;

		a {
			display: inline-block;
			background-color: white;
			transition: all 0.3s linear;
			height: 100%;
			.flex-display;
			.flex-direction(@direction: column);

			&:hover {
				background-color: @panel-bg-colour;
				color: @text-colour;
			}
		}
	}

	&__ref {
		padding: 7px 10px;
		background: @accent-colour;
		font-size: 13px;
		color: white;
		text-align: center;
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: auto);
	}

	&__image {
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: auto);

		img {
			width: 100%;
			height: 200px;
			object-fit: cover;
		}
	}

	&__content {
		padding: 15px;
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: auto);
	}

	&__heading {
		font-family: @charlie-font;
		font-size: 18px;
		line-height: 1.2;
		color: darken(@text-colour,5%);
		font-weight: @heading-weight;
		text-transform: capitalize;
	}

	&__variant {
		font-family: @alpha-font;
		font-size: 16px;
		line-height: 1.2;
		color: @heading-colour;
	}

	&__info {
		border-top: 1px solid #ddd;
		padding: 10px 0 0 0;
		margin: 10px 0 0 0;
		font-size: 12px;
		color: @text-colour;
	}

	&__prices {
		margin: 0 15px 15px 15px;
		.flex-display;
		position: relative;
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: auto);
	}

	&__cash {
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: 50%);
		.flex-display;
		.justify-content(@justify: center);
		.align-items(@align: center);
		background-color: @primary-colour;
		height: 45px;
		color: white;
		font-size: 16px;
		font-weight: @heading-weight;
		font-family: @alpha-font;
		margin-right: 1px;
	}

	&__divider {
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: auto);
		.flex-display;
		.justify-content(@justify: center);
		.align-items(@align: center);

		span {
			background: white;
			border-radius: 99px;
			width: 24px;
			height: 24px;
			.flex-display;
			.justify-content(@justify: center);
			.align-items(@align: center);
			color: #111;
			position: absolute;
			left: calc(~'50% - 12px');
			font-size: 13px;
			font-weight: @heading-weight;
		}
	}

	&__finance {
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: 50%);
		.flex-display;
		.justify-content(@justify: center);
		.align-items(@align: center);
		background-color: @accent-colour;
		height: 45px;
		color: #111;
		font-size: 16px;
		font-weight: @heading-weight;
		font-family: @alpha-font;
		margin-left: 1px;

		span {
			font-size: 14px;
			margin: 0 0 0 5px;
		}
	}

}`
				},
				{
					tab: "JS",
					code: "JS goes brrrrrrrrr"
				},
			],
    };
  },
});

/***** 03. Show Finance *****/

import PicksShowFinance from './assets/screenshots/picks-show-finance.png';

export const ShowFinance = () => ({
  name: "ShowFinance",
  components: {
    StoryBlock,
    StoryPreviewImg
  },
  template: `
		<StoryBlock :items="items" >
			<StoryPreviewImg :preview="preview" />
		</StoryBlock>
	`,
  data() {
    return {
			preview: `${PicksShowFinance}`,
      items: [
				{
					tab: "HTML",
					code: `<li id="pick_{PICK_SEQ}" class="touchcarousel-item">
	<a href="{PICK_SLUG}" title="Used {PICK_MAKE} {PICK_MODEL} for sale in {v2_TOWN}"><img class="home-carousel-image lazy" alt="{PICK_TITLE}" {PICK_IMAGE_SRC} {PICK_IMAGE_PLACEHOLDER} {PICK_IMAGE_SRCSET}></a>

	<div class="carousel-text">
		<a href="{PICK_SLUG}" title="Used {PICK_YEAR} {PICK_MAKE} {PICK_MODEL} {PICK_VARIANT} for sale in {v2_TOWN}">
			<div class="carousel-info__price-block">
				<div class="carousel-info__price">
					<div class="price">{PICK_PRICE}</div>
				</div>
				<div class="carousel-info__finance {FINANCE_STATUS}">
					<div class="label">Finance from</div>
					<div class="monthly">{PICK_MONTHLY_PAYMENT} <span>p/m</span></div>
				</div>
			</div>
			<div class="carousel-info__title">{PICK_MAKE} {PICK_MODEL}</div>
			<div class="carousel-info__variant">{PICK_YEAR} {PICK_VARIANT}</div>
		</a>
	</div>
	
</li>`
				},
				{
					tab: "LESS",
					code: `.car-carousel {
	background: #f5f5f5;
	box-sizing: border-box;

	.container,
	.pad-10.overflow-hidden {
		overflow: visible !important;
		padding: 0px;
	}

}

#hmpg-picks-carousel,
#detail-similar-carousel {
	position: relative;
	height: auto;
	width: 100%;

	img {
		width: 100%;
		height: auto;
		transition: all .2s linear;
	}

	img[src*="placeholder.svg"] {
		height: 32px;
		width: 32px;
	}

	.touchcarousel-wrapper {
		padding: 0;
	}

	.touchcarousel-container {
		// display: flex;
		.flex-display(@display: flex);
		.align-items(@align: flex-start);
	}

	.touchcarousel-item {
		// flex: 0 0 300px;
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: 320px);
		width: 320px;
		margin-right: 20px;
		position: relative;
		text-align: center;
		transition: all 0.2s ease-in-out;
		box-sizing: border-box;
		background: white;
		border: 1px solid darken(@body-colour, 7%);
		border-radius: 5px;
		box-shadow: 0 3px 3px #eaeff7;
		box-sizing: border-box;
		overflow: hidden;

		@media @mobile {
			.flex-basis(@width: 300px);
			width: 300px;
		}

		.carousel-image {
			object-fit: cover;
			width: 100%;
			height: 200px;
		}

		.carousel-info {

			&__price-block {
				.flex-display(@display: flex);
				width: 100%;
				box-sizing: border-box;
				min-height: 60px;
			}

			&__price,
			&__finance {
				position: relative;
				.flex-grow(@grow: 1);
				.flex-shrink(@shrink: 1);
				.flex-basis(@width: 50%);
				width: 50%;
				.flex-display(@display: flex);
				.flex-direction(@direction: column);
				.justify-content(@justify: center);
				.align-items(@align: center);
				background: @primary-colour;
				color: white;
				padding: 10px;
				font-size: 16px;
				font-weight: 700;
				line-height: 1;
				font-weight: bold;
				box-sizing: border-box;

				@media @tablet {
					font-size: 14px;
				}

				.label {
					color: @text-colour;
					font-family: @body-font;
					font-size: 10px;
					line-height: 1;
					text-transform: uppercase;
				}

				.price {
					font-size: 18px;
				}

				.price, .monthly {
					color: white;
					font-family: @heading-font;
					line-height: 1;
					font-weight: bold;

					span {
						font-size: 10px;
					}
				}
			}

			&__finance {
				background: lighten(@primary-colour,15%);

				.label {
					color: @accent-colour;
				}
			}

			&__title {
				display: block;
				margin: 15px 15px 10px 15px;
				font-family: @heading-font;
				font-size: 20px;
				line-height: 1.2;
				font-weight: bold;
				color: @text-colour;
				text-align: left;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			&__variant {
				display: block;
				margin: 0 15px 15px 15px;
				font-family: @heading-font;
				font-size: 16px;
				line-height: 1.2;
				font-weight: normal;
				color: @text-colour;
				text-align: left;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
}

.touchcarousel .touchcarousel-container {
	position: relative;
	margin: 0;
	padding: 0;
	list-style: none;
	left: 0;
}

.touchcarousel .touchcarousel-wrapper {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
}

/* Arrow and Pagination Change */

.tc-paging-container {
	display: none;
}

.touchcarousel .arrow-holder {
	height: 26px;
	width: 26px;
	position: absolute;
	top: 48%;
	display: block;
	cursor: pointer;
	z-index: 25;
	text-decoration: none;
	outline: none;
	border: none;

	&.left {
		left: -34px;
	}

	&.right {
		right: -34px;
	}

	@media handheld,
	only screen and (max-width: 1700px) {
		display: none;
	}
}

/* arrow icons */
.touchcarousel .arrow-icon {
	width: auto;
	height: auto;
	background: none;
	color: fade(black, 25%);
	opacity: 1;
	border-radius: 0;
	cursor: pointer;
	display: block;
	font-family: 'ClickIcons';
	font-style: normal;
	font-weight: normal;
	-webkit-font-smoothing: antialiased;
	text-transform: none !important;
	text-decoration: none;
	outline: none;
	border: none;
	font-size: 55px;
}

.touchcarousel .arrow-icon.left:before {
	.char(angle-left-r);
	// content: '\f104';
	display: block;
	text-align: center;
	height: 26px;
	width: 26px;
	line-height: 26px;
	font-family: 'ClickIcons';
}

.touchcarousel .arrow-icon.right:before {
	.char(angle-right-r);
	// content: '\f105';
	display: block;
	text-align: center;
	height: 26px;
	width: 26px;
	line-height: 26px;
	font-family: 'ClickIcons';
}

.touchcarousel .arrow-holder:hover .arrow-icon {
	color: @accent-colour;
}

.touchcarousel .arrow-holder.disabled {
	cursor: default;
	opacity: 0.1;
}

.touchcarousel .arrow-holder.disabled .arrow-icon {
	cursor: default;
}`
				},
				{
					tab: "JS",
					code: "JS goes brrrrrrrrr"
				},
			],
    };
  },
});
