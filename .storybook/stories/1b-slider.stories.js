import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";
import StoryPreviewImg from "./Components/StoryPreviewImg";

export default {
  title: "Homepage Modules/Hero Unit",
};

/***** 01. UXUI Search Block *****/

import UxHeroUnit from './assets/screenshots/ux-hero-unit.png';

export const UXSearchBlock = () => ({
  name: "UXSearchBlock",
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
			preview: `${UxHeroUnit}`,
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
    };
  },
});

//***** 02. Slider Subtle Text *****//

import SliderSubtText from './assets/screenshots/slider-subtle-text.png';

export const SliderSubtleText = () => ({
  name: "SliderSubtleText",
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
			preview: `${SliderSubtText}`,
      items: [
				{
					tab: "HTML",
					code: `<!-- Slide 1 -->
<div class="rsContent slide1 lazy-background">
	<div class="wrapper">
		<div class="container">
			<div class="slider-text">
				<div class="slider-block">
					<div class="slider-heading">Welcome to<br>{v2_NAME}</div>
					<div class="slider-subheading">Over 40 years experience in motortrade</div>
					<div class="slider-button"><a href="/used-cars">View Stock</a></div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- // END Slide 1 -->

<!-- Slide 2 -->
<div class="rsContent slide2 lazy-background">
	<div class="wrapper">
		<div class="container">
			<div class="slider-text">
				<div class="slider-block">
					<div class="slider-heading">Finance Specialists</div>
					<div class="slider-subheading">Low rate finance packages available, tailored to you</div>
					<div class="slider-button"><a href="/finance.php">Apply Online</a></div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- // END Slide 2 -->

<!-- Slide 3 -->
<div class="rsContent slide3 lazy-background">
	<div class="wrapper">
		<div class="container">
			<div class="slider-text">
				<div class="slider-block">
					<div class="slider-heading">Part Exchange</div>
					<div class="slider-subheading">Offset the cost of your next vehicle</div>
					<div class="slider-button"><a href="/partex.php">Trade In Today</a></div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- // END Slide 3 -->`
				},
				{
					tab: "LESS",
					code: `// slider heights
@slider-height: 65vh;
@slider-min-height: 600px;
@slider-height-tablet: 60vh;
@slider-min-height-tablet: 500px;
@slider-height-mobile: 350px;
@slider-min-height-mobile: 250px;

/* Slider Row Block */
.row-block.slider {
	background: white !important;
	padding: 0;
	// display: flex;
	

	.container {
		margin: 0 auto;
		overflow: visible;
		position: relative;
		z-index: 2;
	}

}

/* Slider Subtle text */
#responsive-slider-with-blocks-1,
.bContainer {
	background: white;
	height: @slider-height !important;
	max-height: @slider-height !important;
	min-height: @slider-min-height !important;
	width: 100%;
	position: relative;
	

	@media @lap {
		height: @slider-height-tablet !important;
		max-height: @slider-height-tablet !important;
		min-height: @slider-min-height-tablet !important;
	}

	@media @mobile {
		height: @slider-height-mobile !important;
		max-height: @slider-height-mobile !important;
		min-height: @slider-min-height-mobile !important;
	}

	.rsContent.slide1 {
		&.visible {
			background-image: url('@{dealer-img}/theme/banner1{CACHE_BUSTER}.jpg') !important;
			background-color: @primary-colour;
			@media screen and (max-width: 1920px) {
				background-image: url('@{dealer-img}/theme/banner1{CACHE_BUSTER}.jpg') !important;
			}
			// @media @tablet { 
			//  background-image: url('@{dealer-img}/theme/slide-1-tablet{CACHE_BUSTER}.jpg') !important; 
			// }
			@media @mobile {
				background-image: url('@{dealer-img}/theme/banner1_mobile{CACHE_BUSTER}.jpg') !important;
			}
		}
	}

	.rsContent.slide2 {
		&.visible {
			background-image: url('@{dealer-img}/theme/banner2{CACHE_BUSTER}.jpg') !important;
			background-color: @primary-colour;
			@media screen and (max-width: 1920px) {
				background-image: url('@{dealer-img}/theme/banner2{CACHE_BUSTER}.jpg') !important;
			}
			// @media @tablet { 
			//  background-image: url('@{dealer-img}/theme/slide-2-tablet{CACHE_BUSTER}.jpg') !important; 
			// }
			@media @mobile {
				background-image: url('@{dealer-img}/theme/banner1_mobile{CACHE_BUSTER}.jpg') !important;
			}
		}
	}

	.rsContent.slide3 {
		&.visible {
			background-image: url('@{dealer-img}/theme/banner3{CACHE_BUSTER}.jpg') !important;
			background-color: @primary-colour;
			@media screen and (max-width: 1920px) {
				background-image: url('@{dealer-img}/theme/banner3{CACHE_BUSTER}.jpg') !important;
			}
			// @media @tablet { 
			//  background-image: url('@{dealer-img}/theme/slide-3-tablet{CACHE_BUSTER}.jpg') !important; 
			// }
			@media @mobile {
				background-image: url('@{dealer-img}/theme/banner3_mobile{CACHE_BUSTER}.jpg') !important;
			}
		}
	}

	.rsContent.slide1,
	.rsContent.slide2,
	.rsContent.slide3,
	.rsContent.slide4 {
		-webkit-background-size: cover !important;
		-moz-background-size: cover !important;
		-o-background-size: cover !important;
		background-size: cover !important;
		background-repeat: no-repeat !important;
		background-position: center center !important;
		position: relative;
		display: flex;
		&:before {
			content:'';
			display: block;
			background: linear-gradient(90deg, fade(#000, 50%) 0%, fade(#000, 0%) 100%);
			position: absolute;
			z-index: 1;
			height: 100%;
			top: 0px;
			left: 0px;
			width: 100%;
		}

		@media @mobile {
			background: @primary-colour;
		}

	}

	.slider-text {
		position: absolute;
		top: 0;
		left: 0;
		width: 370px;

		@media @mobile {
			width: 100%;
			position: relative;
		}

		.slider-block {
			margin: 0;
			height: @slider-height !important;
			max-height: @slider-height !important;
			min-height: @slider-min-height !important;
			box-sizing: border-box;
			display: flex !important;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;

			@media @lap {
				height: @slider-height-tablet !important;
				max-height: @slider-height-tablet !important;
				min-height: @slider-min-height-tablet !important;
				justify-content: center;
			}

			@media @mobile {
				height: @slider-height-mobile !important;
				max-height: @slider-height-mobile !important;
				min-height: @slider-min-height-mobile !important;
				align-items: center;
				justify-content: center;
			}

			.slider-heading,
			.slider-subheading,
			.slider-button {
				font-family: @heading-font;
				font-weight: 400;
				font-size: 18px;
				line-height: 1.2;
				color: white;
				text-align: left;
				text-transform: none;
				display: block;
				margin: 0;
				padding: 0;
				animation: fadein 1s;
				animation-fill-mode: forwards;
				//opacity: 0;
				transition: all 0.2s linear;

				@media @tablet {
					font-size: 18px;
				}

				@media @mobile {
					font-size: 16px;
					text-align: center;
					position: relative;
					z-index: 2;
				}
			}

			.slider-heading {
				font-weight: @heading-weight;
				font-size: 40px;
				line-height: 1;
				text-transform: none;
				padding: 0;
				margin: 0 0 20px 0;
				position: relative;
				animation-delay: 1.5s;
				text-shadow: 0 0 2px fade(black, 50%);

				@media @mobile {
					margin-top: 0px;
				}

				&:after {
					top: -20px;
					left: 0%;
					margin-left: 0px;
					content: " ";
					height: 4px;
					width: 70px;
					background: @accent-colour;
					position: absolute;
					pointer-events: none;
					transform: skew(-15deg, 0deg);
					border-radius: 5px 0 5px 0;

					@media @mobile {
						top: -20px;
						left: 50%;
						margin-left: -35px;
					}
				}

				@media @tablet {
					font-size: 34px;
				}

				@media @mobile {
					font-size: 28px;
				}
			}

			.slider-subheading {
				color: white;
				letter-spacing: 0.5px;
				text-transform: none;
				animation-delay: 2s;
				margin: 0 0 20px 0;
				text-shadow: 0 2px 5px fade(black, 50%);

				span {
					width: 30px;
					height: 30px;
					line-height: 30px;
					font-size: 20px;
					font-weight: 600;
					color: white;
					background: @accent-colour;
					border-radius: 99px;
					display: inline-block;
					text-align: center;
				}

				.list-ticks {

					li {
						color: white;
						font-weight: bold;
						display: inline-block;
					}
				}
			}

			.slider-button {
				margin: 15px 0 131px 0;
				animation-delay: 2.5s;

				@media @tablet {
					margin: 10px 0 0 0;
				}

				a {
					.btn;
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
		background: white;

		@media @mobile {
			width: 10px;
			height: 10px;
			margin: 0 3px;
			background: white;
			display: inline-block;
		}

	}

	.rsBullet.rsNavSelected, .rsMinW .rsThumbs {
		background: @accent-colour;
	}

}`
				},				
			],
    };
  },
});



//***** 03. Slider Pop Up *****//

import SliderPopup from './assets/screenshots/slider-pop-up.png';

export const SliderPopUp = () => ({
  name: "SliderPopUp",
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
			preview: `${SliderPopup}`,
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
    };
  },
});


//***** 04. UX Search Bottom *****//

import uxSearchBottom from "./assets/screenshots/uxhero-search-bottom.png";

export const UXSearchBottom = () => ({
  name: "UXSearchBottom",
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
			preview: `${uxSearchBottom}`,
      items: [
				{
					tab: "HTML",
					code: `<!-- Homepage Slider -->
<div class="row-block hero-unit">

	<div id="responsive-slider-with-blocks-1" class="royalSlider rsMinW">
		{SLIDERS}
	</div>
		

	<div class="hero-unit-block">
		<!-- <div class="hero-unit-block__title">Welcome to {v2_NAME}</div>
		<div class="hero-unit-block__text">A family-run business with up to 30 vehicles in stock</div> -->

		<div class="search-block">
			{LOAD_SEARCH_HOME}
		</div>
	</div>

</div>
<!-- // Homepage Slider -->`
				},
				{
					tab: "LESS",
					code: `@slider-height: 700px;
@slider-height-tablet: 600px;
@slider-height-mobile: 400px;


.row-block.hero-unit {
	position: relative;
	.flex-display(@display: flex);
	.align-items(@align: center);
	.justify-content(@justify: center);
	padding: 0;
	height: @slider-height;

	@media @tablet {
		height: @slider-height-tablet;
	}

	@media @mobile {
		flex-direction: column;
		height: auto;
	}

//   &.visible {
//     background: url('@{dealer-img}/theme/hero-unit__bg{CACHE_BUSTER}.jpg') center center no-repeat!important;
//     background-size: cover !important;
//     background-attachment: unset !important;

//     @media @mobile {
//       background: url('@{dealer-img}/theme/hero-unit__bg--mobile{CACHE_BUSTER}.jpg') center center no-repeat!important;
//       background-size: cover !important;
//     }
//   }

	

	.container {
		margin: 0 auto;
		overflow: visible;
		position: relative;
	}

		/* Slider Subtle text */
#responsive-slider-with-blocks-1,
.bContainer {
	width: 100%;
	height: @slider-height !important;
	position: absolute;
	top: 0;
	left: 0;

	@media @tablet {
		height: @slider-height-tablet !important;
	}

	@media @mobile {
		height: 300px !important;
		position: relative;
		top: 0px;
		width: 100%;
	}

	.rsContent.slide1.visible {
		background: @secondary-colour url('@{dealer-img}/theme/slide-1{CACHE_BUSTER}.jpg') center center no-repeat!important;
		background-size: cover!important;
		background-attachment: unset !important;		
		@media @mobile {
			background: @secondary-colour url('@{dealer-img}/theme/slide-1--mobile{CACHE_BUSTER}.jpg') center center no-repeat!important;
			background-size: cover !important;
			background-attachment: unset !important;
		}
	}

	.rsContent.slide2.visible {
		background: @secondary-colour url('@{dealer-img}/theme/slide-2{CACHE_BUSTER}.jpg') center center no-repeat !important;
		background-size: cover!important;
		background-attachment: unset !important;		
		@media @mobile {
			background: @secondary-colour url('@{dealer-img}/theme/slide-2--mobile{CACHE_BUSTER}.jpg') center center no-repeat!important;
			background-size: cover!important;
			background-attachment: unset !important;
		}
	}

	.rsContent.slide3.visible {
		background: @secondary-colour url('@{dealer-img}/theme/slide-3{CACHE_BUSTER}.jpg') center center no-repeat !important;
		background-size: cover!important;
		background-attachment: unset !important;
		@media @mobile {
			background: @secondary-colour url('@{dealer-img}/theme/slide-3--mobile{CACHE_BUSTER}.jpg') center center no-repeat!important;
			background-size: cover !important;
			background-attachment: unset !important;;
		}
	}

	.rsContent.slide1,
	.rsContent.slide2,
	.rsContent.slide3,
	.rsContent.slide4,
	.rsContent.slide5,
	.rsContent.slide6 {
		background-size: cover !important;
		background-repeat: no-repeat !important;
		background-position: center center !important;
		
		@media @mobile {
				background-attachment: unset !important;
		}

		&:before {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			background: fade(black,40%);
		}
	}


}


.slider-overlay {
	background: fade(@primary-colour,25%);
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}




.slider-intro {
	margin: 100px 100px 50px 100px;
	padding: 40px;
	width: calc(~'100% - 80px');
	width: 900px;
	background: fade(@primary-colour,50%);
	box-sizing: border-box;
	z-index: 2;

	@media @tablet {
		margin: 40px 20px 30px 20px;
		padding: 30px;
		width: calc(~'100% - 60px');
	}

	@media @mobile {
		padding: 30px 25px 50px 25px;
		margin: 0;
		width: 100%;
		background: fade(@primary-colour,80%);
	}

	&__title {
		font-family: @heading-font;
		color: white;
		font-size: 42px;
		line-height: 1.2;
		font-weight: 700;
		text-align: center;
		margin: 0;

		@media @tablet {
			font-size: 34px;
		}
		@media @mobile {
			font-size: 26px;
		}
	}

	&__text {
		color: white;
		font-size: 24px;
		line-height: 1.2;
		text-align: center;
		margin: 0 0 30px 0;

		@media @tablet {
			font-size: 20px;
		}
		@media @mobile {
			font-size: 16px;
		}
	}
}

}


.hero-unit-block {
	margin: 320px 20px 0;
	padding: 40px;
	width: calc(~'100% - 80px');
	max-width: 900px;
	background: none;
	box-sizing: border-box;
	z-index: 10;
	align-self: flex-end;

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
				{
					tab: "JS",
					code: `function rsSliderQuarters() {
$("#responsive-slider-with-blocks-1").royalSlider({
	arrowsNav: false,
	arrowsNavAutoHide: false,
	controlNavigationSpacing: 0,
	controlNavigation: false,
	imageScaleMode: "fill",
	autoScaleSlider: true,
	autoScaleSliderHeight: 200,
	blockLoop: true,
	loop: true,
	numImagesToPreload: 1,
	addActiveClass: true,
	usePreloader: false,
	transitionType: "fade",
	fadeinLoadedSlide: true,
	keyboardNavEnabled: true,
	slidesOrientation: "horizontal",
	slidesSpacing: 0,
	// block: {
	//   delay: 0
	// },
	autoPlay: {
		// autoplay options go here
		enabled: true,
		pauseOnHover: false,
		stopAtAction: true,
		delay: 8000,
	},
});
}

rsSliderQuarters();`
				}
			],
    };
  },
});


//***** 05. UX Search Right *****//

import uxSearchRight from "./assets/screenshots/uxhero-search-right.png";

export const UXSearchRight = () => ({
  name: "UXSearchRight",
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
			preview: `${uxSearchRight}`,
      items: [
				{
					tab: "HTML",
					code: `<!-- Homepage Slider -->
<div class="row-block hero-unit lazy-background">

	<div id="responsive-slider-with-blocks-1" class="royalSlider rsMinW">
		{SLIDERS}
	</div>

	<div class="hero-unit-block">
		<h1 class="hero-unit-block__title">Welcome to <span>{v2_NAME}</span></h1>
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
					code: `@keyframes fadein {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
@-moz-keyframes fadein {
	/* Firefox */
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
@-webkit-keyframes fadein {
	/* Safari and Chrome */
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
@-o-keyframes fadein {
	/* Opera */
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@slider-height: 700px;
@slider-min-height: 700px;
@slider-height-tablet: 600px;
@slider-min-height-tablet: 600px;
@slider-height-mobile: 350px;
@slider-min-height-mobile: 250px;

/* Slider Row Block */
.row-block.slider {
	background: #f5f5f5 !important;
	padding: 0;

	.container {
		margin: 0 auto;
		overflow: visible
	}
}

/* Slider Subtle text */
#responsive-slider-with-blocks-1,
.bContainer {
	background: #f5f5f5;
	height: @slider-height !important;
	max-height: @slider-height !important;
	min-height: @slider-min-height !important;
	width: 100%;

	@media @tablet {
		height: @slider-height-tablet !important;
		max-height: @slider-height-tablet !important;
		min-height: @slider-min-height-tablet !important;
	}

	@media @mobile {
		height: @slider-height-mobile !important;
		max-height: @slider-height-mobile !important;
		min-height: @slider-min-height-mobile !important;
	}

	.rsContent.slide1,
	.rsContent.slide2,
	.rsContent.slide3,
	.rsContent.slide4,
	.rsContent.slide5,
	.rsContent.slide6,
	.rsContent.slide7, .lazy-background {
		-webkit-background-size: cover !important;
		-moz-background-size: cover !important;
		-o-background-size: cover !important;
		background-size: cover !important;
		background-repeat: no-repeat !important;
		background-position: center center!important;
		position: relative;
		// &:before {
		//   top: 0px;
		//   right: -55%;
		//   content: " ";
		//   height: 100%;
		//   width: 100%;
		//   background: fade(black,40%);
		//   background: linear-gradient(to right, fade(black,50%) 70%, fade(black,0%) 100%);
		//   position: absolute;
		//   pointer-events: none;
		//   transform: skew(-15deg, 0deg);
		//   animation: fadein 1s;
		//   animation-fill-mode: forwards;
		//   opacity: 0;
		//   animation-delay: 1s;
		//   transition: all 0.2s linear;

		//   @media handheld, only screen and (max-width: 1600px) {
		//     right: -55%;
		//   }

		//   @media handheld, only screen and (min-width: 1600px) {
		//     right: -52%;
		//   }

		//   @media handheld, only screen and (max-width: 1300px) {
		//     right: -55%;
		//   }

		//   @media handheld, only screen and (max-width: 980px) {
		//     right: -57%;
		//   }

		//   @media @tablet {
		//     left: 0;
		//     right: 0;
		//     width: 100%;
		//     transform: skew(0deg, 0deg);
		//     background: fade(black,50%);
		//     display: block;
		//   }
		// }

		@media @mobile {
			background: @primary-colour;
		}

	}

	.rsContent.slide1 {
		&.visible {
			background-image: url('@{dealer-img}/theme/slide-1{CACHE_BUSTER}.jpg') !important;
			background-size: cover !important;
			background-repeat: no-repeat !important;
			background-position: center center!important;
		}

		@media @mobile {
			&.visible {
				background-image: url('@{dealer-img}/theme/slide-1-mobile{CACHE_BUSTER}.jpg') !important;
				background-size: cover !important;
				background-repeat: no-repeat !important;
				background-position: center center!important;
			}
		}
	}


	.rsContent.slide2 {
		&.visible {
			background-image: url('@{dealer-img}/theme/slide-2{CACHE_BUSTER}.jpg') !important;
			background-size: cover !important;
			background-repeat: no-repeat !important;
			background-position: center center!important;
		}


		@media @mobile {
			&.visible {
				background-image: url('@{dealer-img}/theme/slide-2-mobile{CACHE_BUSTER}.jpg') !important;
				background-size: cover !important;
				background-repeat: no-repeat !important;
				background-position: center center!important;
			}
		}
	}


	.rsContent.slide3 {
		&.visible {
			background-image: url('@{dealer-img}/theme/slide-3{CACHE_BUSTER}.jpg') !important;
			background-size: cover !important;
			background-repeat: no-repeat !important;
			background-position: center center!important;
		}


		@media @mobile {
			&.visible {
				background-image: url('@{dealer-img}/theme/slide-3-mobile{CACHE_BUSTER}.jpg') !important;
				background-size: cover !important;
				background-repeat: no-repeat !important;
				background-position: center center!important;
			}
		}
	}
	
	.rsContent.slide4 {
		&.visible {
			background-image: url('@{dealer-img}/theme/slide-4{CACHE_BUSTER}.jpg') !important;
			background-size: cover !important;
			background-repeat: no-repeat !important;
			background-position: center center!important;
		}


		@media @mobile {
			&.visible {
				background-image: url('@{dealer-img}/theme/slide-4-mobile{CACHE_BUSTER}.jpg') !important;
				background-size: cover !important;
				background-repeat: no-repeat !important;
				background-position: center center!important;
			}
		}
	}

	.slider-text {
		position: absolute;
		top: 0;
		right: 0;
		width: 370px;

		@media @mobile {
			width: 100%;
			position: static;
		}

		.slider-block {
			margin: 0;
			height: @slider-height !important;
			max-height: @slider-height !important;
			min-height: @slider-min-height !important;
			box-sizing: border-box;
			display: flex !important;
			flex-direction: column;
			justify-content: center;

			@media @tablet {
				height: @slider-height-tablet !important;
				max-height: @slider-height-tablet !important;
				min-height: @slider-min-height-tablet !important;
				justify-content: center;
			}

			@media @mobile {
				height: @slider-height-mobile !important;
				max-height: @slider-height-mobile !important;
				min-height: @slider-min-height-mobile !important;
				align-items: center;
				justify-content: center;
			}

			.slider-heading,
			.slider-subheading,
			.slider-button {
				font-family: @heading-font;
				font-weight: 400;
				font-size: 18px;
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

			}

			.slider-heading {
				font-weight: 700;
				font-size: 40px;
				line-height: 1;
				text-transform: uppercase;
				padding: 0;
				margin: 0 0 20px 0;
				position: relative;
				animation-delay: 1.5s;
				text-shadow: 0 2px 5px fade(black,50%);
				
				@media @mobile{
					margin-top: 0px;
				}
				&:after {
					top: -20px;
					left: 0%;
					margin-left: 0px;
					content: " ";
					height: 4px;
					width: 70px;
					background: @accent-colour;
					position: absolute;
					pointer-events: none;
					transform: skew(-15deg, 0deg);
					border-radius: 5px 0 5px 0;

					@media @mobile {
						top: -20px;
						left: 50%;
						margin-left: -35px;
					}

				}

				@media @tablet {
					font-size: 34px;
				}

				@media @mobile {
					font-size: 28px;
				}

			}

			.slider-subheading {
				color: white;
				letter-spacing: 0.5px;
				text-transform: none;
				animation-delay: 2s;
				margin: 0 0 20px 0;
				text-shadow: 0 2px 5px fade(black,50%);

				span {
					width: 30px;
					height: 30px;
					line-height: 30px;
					font-size: 20px;
					font-weight: 600;
					color: white;
					background: @accent-colour;
					border-radius: 99px;
					display: inline-block;
					text-align: center;
				}

			}

			.slider-button {
				margin: 15px 0 0 0;
				animation-delay: 2.5s;

				@media @tablet {
					margin: 10px 0 0 0;
				}

				a {
					color: @button-text-hover-colour  !important;
					background: @button-bg-hover-colour;
					font-size: 14px;
					line-height: 1;
					font-weight: 700;
					text-transform: uppercase;
					text-shadow: none;
					text-decoration: none;
					display: inline-block;
					padding: 15px 40px;
					border-radius: 4px;
					transition: all 0.2s linear;

					@media @tablet {
						padding: 13px 25px;
						font-size: 12px;
					}

					&:hover {
						background: white;
						color: @button-text-hover-colour  !important;
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
		background: white;

		@media @mobile {
			width: 10px;
			height: 10px;
			margin: 0 3px;
			background: white;
			display: inline-block;
		}

	}

	.rsBullet.rsNavSelected, .rsMinW .rsThumbs {
		background: @accent-colour;
	}

}


.slider-wrapper {
	position: absolute;
	top: 50%;
	left: 5vw;
	padding: 25px 25px 40px 25px;
	background: fade(@primary-colour,80%);
	border-radius: 10px;
	width: 340px;
	z-index: 11;
	transform: translateY(-50%);
	box-sizing: border-box;

	@media @tablet {
		width: 300px;
	}
	@media @mobile {
		position: initial;
		width: 100%;
		border-radius: 0;
		background: fade(@primary-colour,100%);
		padding: 20px 20px 40px 20px;
		transform: none;
	}
}

.slider-intro {

	&__title {
		font-family: @heading-font;
		color: white;
		font-size: 24px;
		line-height: 1.2;
		font-weight:700;
		text-align: center;
		margin: 0 0 20px 0;

		@media @tablet {
			font-size: 20px;
		}
		@media @mobile {
			font-size: 18px;
		}
	}

	&__text {
		color: @accent-colour;
		font-size: 24px;
		line-height: 1.2;
		text-align: center;
		margin: 0 0 30px 0;
		// hide
		display: none;

		@media @tablet {
			font-size: 20px;
		}
		@media @mobile {
			font-size: 16px;
		}
	}
}


.search-block {

	&__title {
		// hide
		display: none;
	}

}



.row-block.hero-unit {
	position: relative;
	.flex-display(@display: flex);
	// .align-items(@align: center);
	.justify-content(@justify: center);
	padding: 0;
	// height: 85vh;
	min-height: 700px;

	&.visible {
		background: none!important;
	}

	@media @tablet {
		min-height: 500px;
	}

	@media @mobile {
		height: unset;
		min-height: initial;
		flex-direction: column;
	}

	.container {
		margin: 0 auto;
		overflow: visible;
		position: relative;
	}
}


.hero-unit-block {
	padding: 40px;
	background: fade(@primary-colour,90%);
	box-sizing: border-box;
	z-index: 11;
	margin: 0;
	position: absolute;
	right: 8%;
	max-width: 500px;
	padding: 40px 40px 60px 40px;
	border-radius: 25px;
	top: 26%;
	width: calc(~'100% - 80px');

	@media @lap {
		top: 22%;
		right: 20px;
	}

	@media @tablet {
		max-width: 400px;
		top: 15%;
		right: 20px;
		// background: fade(@primary-colour, 60%);
	}

	@media @mobile {
		padding: 20px;
		margin: 0;
		width: 100%;
		position: static;
		border-radius: 0;
		right: 0;
		left: 0;
		background: @primary-colour;
		max-width: 100%;
	}

	&__title {
		display: block;
		margin: 0 0 10px 0;
		color: white;
		font-family: @heading-font;
		font-size: 46px;
		line-height: 1.2;
		font-weight: 700;
		text-align: center;
		text-transform: uppercase;

		span {
			color: @secondary-colour;
		}

		@media @tablet {
			font-size: 32px;
		}
		@media @mobile {
			font-size: 32px;
			margin-bottom: 15px;
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
		display: none;
	}

	form {
		// .flex-display();

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

		select {
			border-radius: 0;
			background: #000 url(/img-src/_themev2-highwaycarslimited-2912/theme/select-icon.png) no-repeat;
			padding: 0 10px;
			color: #fff;
			background-position: 96%;
			background-size: 10px;
		}
	}

	.form-group {
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: calc(~'100% - 20px'));
		width: auto;
		margin-right: 0;
		margin-bottom: 10px;

		@media @mobile {
			margin-right: 20px;
		}

		&.form-group--make {
			margin-right: 20px;
		}
	}

	.button-group {
		width: 100%;

		@media @mobile {
			margin-right: 20px;
			margin-bottom: 10px;
		}

		a, button, input[type=submit] {
			width: 96%;
			line-height: 45px;
			border-radius: 0;

			@media @mobile {
				width: 100%;
				line-height: 38px;
			}

			&:hover {
				background: white;
				color: @primary-colour !important;
			}
		}
	}

	// search fieldset

	.fieldset--search {
		.flex-basis(@width: 480px);
		margin-bottom: 50px;
		margin-right: 0;

		@media @mobile {
			.flex-basis(@width: auto);
			margin-bottom: 0;
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
		margin-bottom: 20px;
		margin-right: 0;

		@media @mobile {
			.flex-basis(@width: auto);
			margin-bottom: 0;
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
		margin-right: 0;    
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
    };
  },
});


