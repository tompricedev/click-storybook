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
      items: [
				{
					tab: "HTML",
					code: `<!-- Homepage Slider -->
<div class="row-block hero-unit lazy-background">

	<div class="hero-unit-block">
		<div class="hero-unit-block__title">Welcome to {v2_NAME}</div>
		<div class="hero-unit-block__text">Family-run business established in 2007</div>

		<div class="search-block">
			{LOAD_SEARCH_HOME}
		</div>
	</div>

</div>
<!-- // Homepage Slider -->`
				},
				{
					tab: "LESS",
					code: `.row-block.hero-unit {
	position: relative;
	.flex-display(@display: flex);
	.align-items(@align: center);
	.justify-content(@justify: center);
	padding: 0;

	&.visible {
		background: url('@{dealer-img}/theme/hero-unit__bg{CACHE_BUSTER}.jpg') center center no-repeat!important;
		background-size: cover !important;

		@media @mobile {
			background: url('@{dealer-img}/theme/hero-unit__bg--mobile{CACHE_BUSTER}.jpg') center center no-repeat!important;
			background-size: cover !important;
		}
	}

	@media @mobile {
	}

	.container {
		margin: 0 auto;
		overflow: visible;
		position: relative;
	}
}


.hero-unit-block {
	margin: 120px 20px;
	padding: 40px;
	width: calc(~'100% - 80px');
	max-width: 900px;
	background: fade(@primary-colour,90%);
	box-sizing: border-box;
	z-index: 2;

	@media @tablet {
		margin: 80px 20px;
		padding: 30px;
		width: calc(~'100% - 60px');
	}

	@media @mobile {
		padding: 20px;
		margin: 20px;
		width: calc(~'100% - 40px');
	}

	&__title {
		display: block;
		margin: 0 0 10px 0;
		color: white;
		font-family: @heading-font;
		font-size: 32px;
		line-height: 1.2;
		font-weight: 700;
		text-align: center;

		@media @tablet {
			font-size: 24px;
		}
		@media @mobile {
			font-size: 22px;
			margin-bottom: 30px;
		}
	}

	&__text {
		margin: 0 0 30px 0;
		color: @accent-colour;
		font-size: 20px;
		line-height: 1.2;
		text-align: center;

		@media @mobile {
			display: none;
		}
	}
}


.search-block {

	&__title {
		display: block;
		margin-bottom: 12px;
		color: white;
		font-size: 18px;

		@media @mobile {
			display: none;
		}
	}

}


.o-search.o-search--home {

	.search-block__title {
		color: white;
	}

	form {
		.flex-display();

		@media @mobile {
			.flex-direction(@direction: column);
		}
	}

	fieldset {
		width: auto;
		border: none;
		padding: 0;
		margin: 0;
	}

	.fieldset {
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: auto);
		margin-right: 20px;

		@media @mobile {
			margin-right: 0;
		}
	}

	.fieldset__wrapper {
		.flex-display();
		padding: 0;
		margin-right: -20px;
		margin-bottom: -10px;
		border: none;
	}

	.form-group {
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: calc(~'100% - 20px'));
		width: auto;
		margin-right: 20px;
		margin-bottom: 10px;
	}

	.button-group {
		width: 100%;

		@media @mobile {
			margin-right: 20px;
			margin-bottom: 10px;
		}

		a, button, input[type=submit] {
			width: 100%;

			&:hover {
				background: white;
				color: @primary-colour !important;
			}
		}
	}

	// search fieldset

	.fieldset--search {
		.flex-basis(@width: 480px);

		@media @mobile {
			.flex-basis(@width: auto);
		}

		.fieldset__wrapper {
			@media @mobile {
				.flex-direction(@direction: column);
			}
		}

		.form-group {
			.flex-basis(@width: calc(~'100% / 2 - 20px'));
			@media @mobile {
				.flex-basis(@width: calc(~'100% - 20px'));
			}
		}
	}

	// price fieldset

	.fieldset--price {
		.flex-basis(@width: 190px);
		position: relative;

		@media @mobile {
			.flex-basis(@width: auto);
		} 

		.fieldset__wrapper {
			@media @mobile {
				.flex-direction(@direction: column);
				margin-top: 15px;
			}
		}

		.form-group {
			&--budgetmin {
				display: none;
			}
		}
	}

	// button fieldset

	.fieldset--button {
		.flex-basis(@width: 120px);
		
		@media @mobile {
			.flex-basis(@width: auto);
			
		}

		.fieldset__wrapper {
			@media @mobile {
				margin-top: 10px;
			}
		}
	}

	.budget-toggle {
		position: absolute;
		bottom: 100%;
		left: 50%;
		margin-bottom: 10px;
		transform: translateX(-50%);

		@media @mobile {
			position: relative;
		}

		.finance, .price {
			color: white;
		}
	}

	.a-toggle+label {
		background: @accent-colour;

		&:before {
			background-color: @primary-colour;
		}
	}
}`
				},
			],
      userguide: {
        type: "text",
        content: "Why am I moving?",
      },
      module: 0,
    };
  },
  // created() {
  //   axios
  //     .get(
  //       "https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/clickcomponents-uwksb/service/getModules/incoming_webhook/webhook0"
  //     )
  //     .then((response) => {
  //       this.items = response.data[0].modules[this.module].items;
  //       console.log(this.items, this.module);
  //     });
  // },
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
      items: [
				{
					tab: "HTML",
					code: `<!-- Homepage Slider -->
<div class="row-block row-block--hero-header">
	
	<div id="responsive-slider-with-blocks-1" class="royalSlider rsMinW">
		{SLIDERS}
	</div>

</div>
<!-- // Homepage Slider -->`
				},
				{
					tab: "LESS",
					code: `.row-block.row-block--hero-header {
		padding: 0;
		background: @secondary-colour;
	
		.container {
			overflow: visible;
		}
	}
	
	@keyframes fadein {
		0% {
			opacity: 0;
		}
	
		100% {
			opacity: 1;
		}
	}
	
	@slider-height: 65vh;
	@slider-height-tablet: 55vh;
	@slider-height-mobile: 320px;
	
	
	/* Slider Subtle text */
	#responsive-slider-with-blocks-1,
	.bContainer {
		background: white;
		height: @slider-height !important;
		max-height: @slider-height !important;
		min-height: 500px !important;
		width: 100%;
	
		@media @tablet {
			height: @slider-height-tablet !important;
			max-height: @slider-height-tablet !important;
			min-height: 400px !important;
		}
	
		@media @mobile {
			height: @slider-height-mobile !important;
			max-height: @slider-height-mobile !important;
			min-height: @slider-height-mobile !important;
		}
	
		.rsContent.slide1.visible {
			background-image: url('@{dealer-img}/theme/slide-1{CACHE_BUSTER}.jpg') !important;
			@media @mobile {
				background-image: url('@{dealer-img}/theme/slide-1--mobile{CACHE_BUSTER}.jpg') !important;
			}
		}
		.rsContent.slide2.visible {
			background-image: url('@{dealer-img}/theme/slide-2{CACHE_BUSTER}.jpg') !important;
			@media @mobile {
				background-image: url('@{dealer-img}/theme/slide-2--mobile{CACHE_BUSTER}.jpg') !important;
			}
		}
		.rsContent.slide3.visible {
			background-image: url('@{dealer-img}/theme/slide-3{CACHE_BUSTER}.jpg') !important;
			@media @mobile {
				background-image: url('@{dealer-img}/theme/slide-3--mobile{CACHE_BUSTER}.jpg') !important;
			}
		}
		.rsContent.slide4.visible {
			background-image: url('@{dealer-img}/theme/slide-4{CACHE_BUSTER}.jpg') !important;
			@media @mobile {
				background-image: url('@{dealer-img}/theme/slide-4--mobile{CACHE_BUSTER}.jpg') !important;
			}
		}
	
		.rsContent.slide1.visible,
		.rsContent.slide2.visible,
		.rsContent.slide3.visible,
		.rsContent.slide4.visible,
		.rsContent.slide5.visible {
			-webkit-background-size: cover !important;
			-moz-background-size: cover !important;
			-o-background-size: cover !important;
			background-size: cover !important;
			background-repeat: no-repeat !important;
			background-position: center center !important;
			position: relative;
			&:before {
				content: " ";
				height: 100%;
				width: 100%;
				background: fade(@secondary-colour,50%);
				background: linear-gradient(to right, fade(@secondary-colour,50%) 30%, fade(@secondary-colour,0%));
				position: absolute;
				pointer-events: none;
				animation: fadein 1s;
				animation-fill-mode: forwards;
				opacity: 0;
				animation-delay: 1s;
				transition: all 0.2s linear;
	
				@media @mobile {
					top: 0;
					left: 0;
					transform: none;
					border-radius: 0;
					height: 100%;
					width: 100%;
					border: 0;
					background: fade(@secondary-colour,50%);
				}
	
			}
	
			@media @mobile {
				background: @secondary-colour;
			}
	
		}
	
		.slider-text {
			position: absolute;
			top: 0;
			left: 0;
			width: 520px;
			// background: linear-gradient(to right, fade(#000,45%) 0%, fade(#000,0%) 80%);
	
			@media @lap {
				width: 420px;
			}
	
			@media @tablet {
				width: 250px;
			}
	
			@media @mobile {
				width: 100%;
				position: static;
			}
	
			.slider-block {
				margin: 0;
				height: @slider-height !important;
				max-height: @slider-height !important;
				min-height: 500px !important;
				box-sizing: border-box;
				display: flex !important;
				flex-direction: column;
				justify-content: center;
	
				@media @tablet {
					height: @slider-height-tablet !important;
					max-height: @slider-height-tablet !important;
					min-height: 400px !important;
				}
	
				@media @mobile {
					height: @slider-height-mobile !important;
					max-height: @slider-height-mobile !important;
					min-height: @slider-height-mobile !important;
					align-items: center;
					justify-content: center;
				}
	
				.slider-heading,
				.slider-subheading,
				.slider-button {
					font-family: @alpha-font;
					font-weight: 300;
					font-size: 20px;
					line-height: 1.2;
					color: white;
					text-align: left;
					text-transform: none;
					display: block;
					margin: 0;
					padding: 0;
					animation: fadein 1s;
					animation-fill-mode: forwards;
					opacity: 0;
					transition: all 0.2s linear;
	
					@media @tablet {
						font-size: 18px;
					}
	
					@media @mobile {
						font-size: 16px;
						text-align: center;
					}
	
					i {
						display: block;
					}
	
				}
	
				.slider-heading {
					font-family: @heading-font;
					font-size: 55px;
					line-height: 1;
					font-weight: 900;
					padding: 0 0 30px;
					margin: 0 0 20px 0;
					position: relative;
					animation-delay: 1.5s;
					&:after {
						bottom: 0px;
						left: 0%;
						margin-left: 0px;
						content: " ";
						height: 4px;
						width: 70px;
						background: @accent-colour;
						border-radius: 10px;
						position: absolute;
						pointer-events: none;
	
						@media @mobile {
							left: 50%;
							margin-left: -35px;
						}
	
					}
	
					@media @tablet {
						font-size: 37px;
					}
	
					@media @mobile {
						font-size: 30px;
					}
	
				}
	
				.slider-subheading {
					color: white;
					text-transform: none;
					animation-delay: 2s;
					margin: 0 0 20px 0;
	
					span {
						width: 30px;
						height: 30px;
						line-height: 30px;
						font-size: 20px;
						font-weight: 500;
						color: white;
						background: @accent-colour;
						border-radius: 99px;
						display: inline-block;
						text-align: center;
					}
	
				}
	
				.slider-button {
					margin: 15px 0 0 0;
					width: 100%;
					animation-delay: 2.5s;
	
					@media @tablet {
						margin: 10px 0 0 0;
					}
	
					a {
						background: fade(black,15%);
						color: @primary-colour;
						border: 1px solid @primary-colour;
						font-size: 14px;
						line-height: 1;
						font-weight: 300;
						text-transform: none;
						text-shadow: none;
						text-decoration: none;
						padding: 15px 30px;
						border-radius: 0px;
						transition: all 0.2s linear;
	
						@media @tablet {
							padding: 13px 25px;
							font-size: 12px;
						}
	
						&:hover {
							color: @secondary-colour;
							background: white;
						}
	
					}
	
				}
	
			}
	
		}
	
	}
	
	.rsMinW {
	
		.rsBullets {
			position: absolute;
			z-index: 35;
			bottom: 45%;
			right: 40px;
			text-align: left;
			overflow: hidden;
			line-height: 12px;
	
			@media @mobile {
				bottom: 15px;
				right: 41%;
				line-height: 10px;
			}
	
		}
	
		.rsBullet {
			width: 12px;
			height: 12px;
			display: block;
			margin: 8px 0;
			border-radius: 0;
			background: @secondary-colour;
	
			@media @mobile {
				width: 10px;
				height: 10px;
				margin: 0 3px;
				background: @secondary-colour;
				display: inline-block;
			}
	
		}
	
		.rsBullet.rsNavSelected, .rsMinW .rsThumbs {
			background: white;
		}
	
	}`
				},
			],
      userguide: {
        type: "text",
        content: "Why am I moving?",
      },
      module: 1,
    };
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
      items: [
				{
					tab: "HTML",
					code: `<!-- Homepage Slider -->
<div class="{v2_36_MOBILE_ON_OFF} {v2_36_TABLET_ON_OFF} {v2_36_DESKTOP_ON_OFF}">
	<div class="row-block slider">

		<div id="responsive-slider-with-blocks-1" class="royalSlider rsMinW">
			{SLIDERS}
		</div>

	</div>
</div>
<!-- // Homepage Slider -->`
				},
				{
					tab: "LESS",
					code: `.row-block.slider {
	background: white !important;
}

/* Slider Horizontal Pop Up Text */
#responsive-slider-with-blocks-1{
	background: none;
	height: @slider-height!important;
	min-height: @slider-min-height!important;
	width: 100%;
	/* same height as slider-block */
	@media @tablet {
		height: @slider-height-tablet!important;
		min-height: @slider-min-height-tablet!important;
		/* same height as slider-block */
	}
	@media @mobile {
		height: @slider-height-mobile!important;
		min-height: @slider-min-height-mobile!important;
		/* same height as slider-block */
	}

	.rsContent.slide1 {
		&.visible {
			background-image: url('@{dealer-img}/theme/slide-1{CACHE_BUSTER}.jpg') !important;
		@media @mobile {
			background-image: url('@{dealer-img}/theme/slide-1-mob{CACHE_BUSTER}.jpg') !important;
		}
		}
	}

	.rsContent.slide2 {
		&.visible {
		background-image: url('@{dealer-img}/theme/slide-2{CACHE_BUSTER}.jpg') !important;
		@media @mobile {
			background-image: url('@{dealer-img}/theme/slide-2-mob{CACHE_BUSTER}.jpg') !important;
		}
		}
	}

	.rsContent.slide3 {
		&.visible {
		background-image: url('@{dealer-img}/theme/slide-3{CACHE_BUSTER}.jpg') !important;
		@media @mobile {
			background-image: url('@{dealer-img}/theme/slide-3-mob{CACHE_BUSTER}.jpg') !important;
		}
		}
	}

	.rsContent.slide4 {
		&.visible {
			background-image: url('@{dealer-img}/theme/slide-4{CACHE_BUSTER}.jpg') !important;
			@media @mobile {
				background-image: url('@{dealer-img}/theme/slide-4-mob{CACHE_BUSTER}.jpg') !important;
			}
		}
	}



	.rsContent.slide1,
	.rsContent.slide2,
	.rsContent.slide3,
	.rsContent.slide4{
		background-size: cover !important;
		background-repeat: no-repeat !important;
		background-position: center center !important;
	}

	.slider-text {
		position: absolute !important;
		right: 0;
		bottom: -200px;
		left: 0;
		width: 100%;
		transition: all 1s linear;
		background: fade(black,40%);

		.slider-block {
			margin: 0;
			padding: 25px 0;


			@media @mobile {
				padding: 10px 0;
			}

			.row {
				display: flex;
				flex-wrap: wrap;
			}

			.ninecol {
				flex: 4 4 500px;

				@media @tablet{
					width: 100%;
					.flex-basis(@width: 100%);
					margin: 0;
					text-align: center;
				}

				@media @mobile {
					padding: 3px 0 10px;
					flex: 4 4 100%;
				}

				.slider-heading,
				.slider-subheading {
					font-family: @alpha-font;
					font-size: 20px;
					font-weight: 400;
					line-height: 1.2;
					display: block;
					margin: 0;
					padding: 0 10px;
					text-align: left;
					letter-spacing: 0;
					color: white;
					@media @tablet {
						font-size: 17px;
						text-align: center;
					}
					@media @mobile {
						font-size: 14px;
						text-align: center;
					}

				} // end slider-heading and slider-subheading

				.slider-heading {
					font-size: 28px;
					font-weight: 700;
					margin-bottom: 10px;
					text-transform: uppercase;
					font-family: @charlie-font;
					@media @tablet {
						font-size: 24px;
					}
					@media @mobile {
						font-size: 18px;
					}
				}

			} // end slider ninecol

			.threecol {
				border-left: 1px solid fade(@custom-colour1,50%);
				flex: 1 1 200px;
				align-self: stretch !important;
				display: flex;
				align-items: center;
				
				@media @tablet{
					width: 100%;
					flex-basis: 100%;
					max-width: 70%;
					text-align: center;
					border-left: 0px;
					border-top: 1px solid fade(@custom-colour1,50%);
					margin: 20px auto 0 auto;
				}

				.slider-button {
					padding: 0 10px;
					text-align: center;
					margin-left: auto;  

					@media @tablet{
						width: 100%;
						margin-top: 20px;
					}

					@media @mobile{
						margin-right: auto;
					}

					a {
						.btn;

					} // end slider-button a

				} // end slider-button

			} // end slider threecol

		} // end slider-block

	} // end slider-text

	.rsActiveSlide{
		.slider-text{
			position: absolute !important;
			right: 0;
			bottom: 0px;
			left: 0;
			width: 100%;
		}
	}

} // end slider-with-blocks`
				}
			],
      userguide: {
        type: "text",
        content: "Why am I moving?",
      },
      module: 2,
    };
  },
  // created() {
  //   var self = this;
  //   axios
  //     .get(
  //       "https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/clickcomponents-uwksb/service/getModules/incoming_webhook/webhook0"
  //     )
  //     .then((response) => {
  //       this.items = response.data[0].modules[this.module].items;
  //       console.log(this.items, this.module);
  //     });
  // },
});


