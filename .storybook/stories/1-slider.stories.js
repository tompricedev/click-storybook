import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

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
		<StoryBlock :items="items">
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
<!-- // Homepage Slider -->`,
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
}`,
        },
        {
          tab: "JS",
          code: null,
        },
        {
          tab: "Files",
          code: null,
          folders: [
            {
              name: "templates",
              children: [
                {
                  name: "html_homepage.tpl",
                  file: "html",
                },
              ],
            },
            {
              name: "css-src",
              children: [
                {
                  name: "less",
                  children: [
                    {
                      name: "hero-unit.less",
                      file: "css",
                    },
                  ],
                },
              ],
            },
            {
              name: "img-src",
              children: [
                {
                  name: "theme",
                  children: [
                    {
                      name: "hero-unit__bg.less",
                      file: "png",
                    },
                  ],
                },
              ],
            },
            {
              name: "js-src",
            },
          ],
        },
      ],
    };
  },
  provide: function() {
    return {
      items: this.items,
    };
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
		<StoryBlock :items="items">
			<ModSubtleText />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<!-- Slide 1 -->
<div class="rsContent slide1 lazy-background">
	<div class="wrapper">
		<div class="container">
			<div class="slider-text">
				<div class="slider-block">
					<div class="slider-heading">Welcome to {v2_NAME}</div>
					<div class="slider-subheading">A family run business with over 40 years of experience</div>
					<div class="slider-button"><a href="/search.php" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s in {v2_COUNTY}">Search Stock</a></div>
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
					<div class="slider-subheading">Flexible finance options available</div>
					<div class="slider-button"><a href="/finance.php" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC} Finance in {v2_COUNTY}">Apply Online</a></div>
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
					<div class="slider-subheading">Trade in your van with {v2_NAME}</div>
					<div class="slider-button"><a href="/partex.php" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s part exchanged">Get Valuation</a></div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- // END Slide 3 -->

<!-- Slide 4 -->
<div class="rsContent slide4 lazy-background">
	<div class="wrapper">
		<div class="container">
			<div class="slider-text">
				<div class="slider-block">
					<div class="slider-heading">Vehicle Sourcing</div>
					<div class="slider-subheading">You need the right van for the job and we can help you find it</div>
					<div class="slider-button"><a href="/car_locator.php" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s sourced in {v2_COUNTY}">Learn More</a></div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- // END Slide 4 -->`,
        },
        {
          tab: "LESS",
          code: `/* Slider Row Block */
.row-block.slider {
	background: white !important;	

	.container {
		margin: 0 auto;
		overflow: visible;
		position: relative;
	}

}



/* Slider Subtle text */
#responsive-slider-with-blocks-1,
.bContainer {
	background: white;
	height: @slider-height !important;
	max-height: @slider-height !important;
	min-height: @slider-min-height !important;

	@media @lapdevice {
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
			background-image: url('@{dealer-img}/theme/slide-1{CACHE_BUSTER}.jpg') !important;
			background-color: @primary-colour;
			// @media @tablet { 
			//  background-image: url('@{dealer-img}/theme/slide-1-tablet{CACHE_BUSTER}.jpg') !important; 
			// }
			@media @mobile {
				background-image: url('@{dealer-img}/theme/slide-1-mobile{CACHE_BUSTER}.jpg') !important;
			}
		}
	}
	.rsContent.slide2 {
		&.visible {
			background-image: url('@{dealer-img}/theme/slide-2{CACHE_BUSTER}.jpg') !important;
			background-color: @primary-colour;
			// @media @tablet { 
			//  background-image: url('@{dealer-img}/theme/slide-2-tablet{CACHE_BUSTER}.jpg') !important; 
			// }
			@media @mobile {
				background-image: url('@{dealer-img}/theme/slide-2-mobile{CACHE_BUSTER}.jpg') !important;
			}
		}
	}
	.rsContent.slide3 {
		&.visible {
			background-image: url('@{dealer-img}/theme/slide-3{CACHE_BUSTER}.jpg') !important;
			background-color: @primary-colour;
			// @media @tablet { 
			//  background-image: url('@{dealer-img}/theme/slide-3-tablet{CACHE_BUSTER}.jpg') !important; 
			// }
			@media @mobile {
				background-image: url('@{dealer-img}/theme/slide-3-mobile{CACHE_BUSTER}.jpg') !important;
			}
		}
	}
	.rsContent.slide4 {
		&.visible {
			background-image: url('@{dealer-img}/theme/slide-4{CACHE_BUSTER}.jpg') !important;
			background-color: @primary-colour;
			// @media @tablet { 
			//  background-image: url('@{dealer-img}/theme/slide-4-tablet{CACHE_BUSTER}.jpg') !important; 
			// }
			@media @mobile {
				background-image: url('@{dealer-img}/theme/slide-4-mobile{CACHE_BUSTER}.jpg') !important;
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
		&:before {
			top: 0px;
			left: 0;
			content: " ";
			height: 100%;
			width: 100%;
			// background: fade(black,40%);
			background: linear-gradient(to bottom, fade(black,60%) 40%, fade(black,20%) 100%);
			position: absolute;
			pointer-events: none;
			animation: fadein 1s;
			animation-fill-mode: forwards;
			opacity: 0;
			animation-delay: 1s;
			transition: all 0.2s linear;

			@media @tablet {
				left: 0;
				right: 0;
				width: 100%;
				background: fade(black,50%);
				display: block;
			}

		}

		@media @mobile {
			background: @primary-colour;
		}

	}

	.slider-text {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		margin: 0 auto;
		width: 600px;

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
			align-items: center;
			justify-content: center;

			@media @lapdevice {
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
				text-align: center;
				text-transform: none;
				display: block;
				margin: 0;
				padding: 0;
				animation: fadein 1s;
				animation-fill-mode: forwards;
				opacity: 0;
				transition: all 0.2s linear;
				position: relative;
				z-index: 2;

				@media @tablet {
					font-size: 18px;
				}

				@media @mobile {
					font-size: 16px;
					text-align: center;
				}
			}

			.slider-heading {
				font-weight: @heading-weight;
				font-size: 40px;
				line-height: 1;
				text-transform: none;
				padding: 0;
				margin: 20px 0;
				position: relative;
				animation-delay: 1.5s;
				text-shadow: 0 0 2px fade(black,50%);
				
				@media @mobile{
					margin-top: 0px;
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
				text-shadow: 0 0 2px 5px fade(black,50%);

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
				margin: 15px 0 0 0;
				animation-delay: 2.5s;

				@media @tablet {
					margin: 10px 0 0 0;
				}

				a {
					background: @button-bg-colour;
					color: @button-text-colour;
					font-size: 14px;
					line-height: 1;
					font-weight: 600;
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
						color: @button-text-hover-colour;
						background: @button-bg-hover-colour;
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

}`,
        },
        {
          tab: "JS",
          code: `function rsResponsive() {
	var slider = $('#responsive-slider-with-blocks-1');
	slider.royalSlider({
		arrowsNav: false,
		arrowsNavAutoHide: false,
		controlNavigationSpacing: 0,
		controlNavigation: false,
		imageScaleMode: 'fill',
		autoScaleSlider: true,
		autoScaleSliderHeight: 200,
		blockLoop: true,
		loop: true,
		numImagesToPreload: 1,
		addActiveClass: true,
		usePreloader: false,
		transitionType: 'fade',
		fadeinLoadedSlide: true,
		keyboardNavEnabled: true,
		slidesOrientation: 'horizontal',
		slidesSpacing: 0,
		autoPlay: {
			// autoplay options go here
			enabled: true,
			pauseOnHover: false,
			stopAtAction: true,
			delay: 8000
		}
	});
	if (slider.data('royalSlider')) {
		var slides = slider.data('royalSlider').slides;
		slider.data('royalSlider').ev.on('rsAfterSlideChange', function () {
			var currentSlider = slider.data('royalSlider').currSlideId;
			if (slides[currentSlider + 1]) {
				slides[currentSlider + 1].content[0].classList.add('visible');
			}
		});
	}
}
rsResponsive()`,
        },
        {
          tab: "Files",
          code: null,
          folders: [
            {
              name: "templates",
              children: [
                {
                  name: "slider_responsive_full_width.tpl",
                  file: "html",
                },
                {
                  name: "sliders.tpl",
                  file: "html",
                },
              ],
            },
            {
              name: "css-src",
              children: [
                {
                  name: "less",
                  children: [
                    {
                      name: "slider.less",
                      file: "css",
                    },
                  ],
                },
              ],
            },
            {
              name: "img-src",
              children: [
                {
                  name: "theme",
                  children: [
                    {
                      name: "slider__bg.less",
                      file: "png",
                    },
                    {
                      name: "slider__bg--mobile.less",
                      file: "png",
                    },
                  ],
                },
              ],
            },
            {
              name: "js-src",
            },
          ],
        },
      ],
    };
  },
  provide: function() {
    return {
      items: this.items,
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
		<StoryBlock :items="items">
			<ModPopUp />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<div class="rsContent slide1 lazy-background">
<div class="slider-text">
	<div class="slider-block">
		<div class="container">
			<div class="row">
				<div class="ninecol">
					<div class="slider-heading">Welcome to {v2_NAME}</div>
					<div class="slider-subheading">
						Over 45 years experience in the motortrade
					</div>
				</div>
				<div class="threecol btn-cta last">
					<div class="slider-button">
						<a href="/search.php">View Stock</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>

<div class="rsContent slide2 lazy-background">
<div class="slider-text">
	<div class="slider-block">
		<div class="container">
			<div class="row">
				<div class="ninecol">
					<div class="slider-heading">Warranty</div>
					<div class="slider-subheading">
						Drive away with complete peace of mind
					</div>
				</div>
				<div class="threecol btn-cta last">
					<div class="slider-button">
						<a href="/warranty.php">View Deals</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>

<div class="rsContent slide3 lazy-background">
<div class="slider-text">
	<div class="slider-block">
		<div class="container">
			<div class="row">
				<div class="ninecol">
					<div class="slider-heading">Delivery</div>
					<div class="slider-subheading">
						From our showroom floor to your door
					</div>
				</div>
				<div class="threecol btn-cta last">
					<div class="slider-button">
						<a href="/delivery.php">Read More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>`,
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
				background-color: @primary-colour;
				// @media @tablet { 
				//  background-image: url('@{dealer-img}/theme/slide-1-tablet{CACHE_BUSTER}.jpg') !important; 
				// }
				@media @mobile {
					background-image: url('@{dealer-img}/theme/slide-1-mobile{CACHE_BUSTER}.jpg') !important;
				}
			}
		}
		.rsContent.slide2 {
			&.visible {
				background-image: url('@{dealer-img}/theme/slide-2{CACHE_BUSTER}.jpg') !important;
				background-color: @primary-colour;
				// @media @tablet { 
				//  background-image: url('@{dealer-img}/theme/slide-2-tablet{CACHE_BUSTER}.jpg') !important; 
				// }
				@media @mobile {
					background-image: url('@{dealer-img}/theme/slide-2-mobile{CACHE_BUSTER}.jpg') !important;
				}
			}
		}
		.rsContent.slide3 {
			&.visible {
				background-image: url('@{dealer-img}/theme/slide-3{CACHE_BUSTER}.jpg') !important;
				background-color: @primary-colour;
				// @media @tablet { 
				//  background-image: url('@{dealer-img}/theme/slide-3-tablet{CACHE_BUSTER}.jpg') !important; 
				// }
				@media @mobile {
					background-image: url('@{dealer-img}/theme/slide-3-mobile{CACHE_BUSTER}.jpg') !important;
				}
			}
		}
		.rsContent.slide4 {
			&.visible {
				background-image: url('@{dealer-img}/theme/slide-4{CACHE_BUSTER}.jpg') !important;
				background-color: @primary-colour;
				// @media @tablet { 
				//  background-image: url('@{dealer-img}/theme/slide-4-tablet{CACHE_BUSTER}.jpg') !important; 
				// }
				@media @mobile {
					background-image: url('@{dealer-img}/theme/slide-4-mobile{CACHE_BUSTER}.jpg') !important;
				}
			}
		}
	
		.rsContent.slide1,
		.rsContent.slide2,
		.rsContent.slide3,
		.rsContent.slide4 {
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
						font-family: @heading-font;
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
						font-weight: @heading-weight;
						margin-bottom: 10px;
						text-transform: none;
						font-family: @heading-font;
	
						@media @tablet {
							font-size: 24px;
						}
						@media @mobile {
							font-size: 18px;
						}
					}
	
					.slider-subheading {
						color: fade(white,80%);
					}
	
				} // end slider ninecol
	
				.threecol {
					border-left: 1px solid fade(white,50%);
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
						margin: 0px auto 10px auto;
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
	
	} // end slider-with-blocks`,
        },
        {
          tab: "JS",
          code: `function rsResponsive() {
var slider = $('#responsive-slider-with-blocks-1');
slider.royalSlider({
	arrowsNav: false,
	arrowsNavAutoHide: false,
	controlNavigationSpacing: 0,
	controlNavigation: false,
	imageScaleMode: 'fill',
	autoScaleSlider: true,
	autoScaleSliderHeight: 200,
	blockLoop: true,
	loop: true,
	numImagesToPreload: 1,
	addActiveClass: true,
	usePreloader: false,
	transitionType: 'fade',
	fadeinLoadedSlide: true,
	keyboardNavEnabled: true,
	slidesOrientation: 'horizontal',
	slidesSpacing: 0,
	autoPlay: {
		// autoplay options go here
		enabled: true,
		pauseOnHover: false,
		stopAtAction: true,
		delay: 8000
	}
});
if (slider.data('royalSlider')) {
	var slides = slider.data('royalSlider').slides;
	slider.data('royalSlider').ev.on('rsAfterSlideChange', function () {
		var currentSlider = slider.data('royalSlider').currSlideId;
		if (slides[currentSlider + 1]) {
			slides[currentSlider + 1].content[0].classList.add('visible');
		}
	});
}
}				
rsResponsive()`,
				},
				{
          tab: "Files",
          code: null,
          folders: [
            {
              name: "templates",
              children: [
                {
                  name: "slider_responsive_full_width.tpl",
                  file: "html",
                },
                {
                  name: "sliders.tpl",
                  file: "html",
                },
              ],
            },
            {
              name: "css-src",
              children: [
                {
                  name: "less",
                  children: [
                    {
                      name: "slider.less",
                      file: "css",
                    },
                  ],
                },
              ],
            },
            {
              name: "img-src",
              children: [
                {
                  name: "theme",
                  children: [
                    {
                      name: "slider__bg.less",
                      file: "png",
                    },
                    {
                      name: "slider__bg--mobile.less",
                      file: "png",
                    },
                  ],
                },
              ],
            },
            {
              name: "js-src",
            },
          ],
        },
      ],
    };
  },
  provide: function() {
    return {
      items: this.items,
    };
  },
});
