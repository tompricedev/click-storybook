import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import ModMakeAndModel from "./Modules/ModMakeAndModel";

/* screenshot imports */
import internalStatic from './assets/screenshots/internal-static.png';
import internalCarousel from './assets/screenshots/internal-carousel.png';
import externalStatic from './assets/screenshots/external-static.png';
import externalCarousel from './assets/screenshots/external-carousel.png';

export default {
  title: "Homepage Modules/Reviews",
};

/***** 01. InternalStatic *****/

export const InternalStatic = () => ({
  name: "InternalStatic",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
			<img src="${internalStatic}" alt="${name}" style="max-width: 100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<!-- Homepage Judge Service Reviews -->
	<div class="row-block row-block--judgeservice-reviews">
	
		<div class="wrapper">
			<div class="container">
	
				<div class="judgeservice-carousel clear-fix">
	
					<div class="judgeservice-carousel__person-image">
						<img data-src="/img-src/{v2_FOLDER}/theme/reviews-person.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="Smiling Man" class="responsive-img lazy" />
					</div>
	
					<div class="judgeservice-carousel__review-slider">
						<div id="judgeservice-carousel" class="clear-fix">
							<ul class="touchcarousel-container">
								<li class="judgeservice-review">
									<i class="judgeservice-review__quotation judgeservice-review__quotation--left fas fa-quote-left"></i>
									<blockquote class="judgeservice-review__quote">Great experience and above all seamless. Everything was nice and easy and worked a treat. Financing a car has never been easier in my mind. Very happy with how easy it all was and how quick it went through. They even assisted with some non-standard wishes and provided quick and easy updates.</blockquote>
									<em class="judgeservice-review__author">Andrew Kaufmann</em>
									<div class="judgeservice-review__rating">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
									</div>
									<i class="judgeservice-review__quotation judgeservice-review__quotation--right fal fa-quote-right"></i>
									<a href="/testimonials.php" class="btn">View All Reviews</a>
								</li>
							</ul>
						</div>
					</div>
					
	
				</div>
				
	
			</div>
		</div>
	
	</div>
	<!-- // END Homepage Judge Service Reviews -->`,
        },
        {
          tab: "LESS",
          code: `// Judge Service Reviews
.row-block.row-block--judgeservice-reviews {
	padding: 0;
	background: @accent-colour;

	.container,
	.wrapper {
		overflow: visible;
	}
}

#judgeservice-carousel {
	width: 100%;
	height: auto;
	padding: 60px 0 20px;

	@media @lap {
		padding: 40px 0 20px;
	}
}

.judgeservice-carousel {
	position: relative;
	max-width: 1280px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;

	@media @mobile {
		text-align: center;
	}

	&__person-image {
		position: absolute;
		left: 10px;
		bottom: 0;
		margin-right: 40px;

		@media @mobile {
			display: none;
		}

		img {
			width: 300px;

			@media @mobile {
				width: 180px;
			}
		}
	}

	&__review-slider {
		margin-right: 50px;
		margin-left: 420px;

		@media @mobile {
			margin: 0 35px;
		}
	}

	&__credits {
		margin-left: 50px;
		margin-bottom: 60px;

		@media @tablet {
			margin-left: 20px;
			margin-bottom: 40px;
		}

		@media @mobile {
			margin-left: 110px;
			margin-bottom: 30px;
		}

		em {
			color: white;
			font-weight: 300;
		}

		img {
			max-height: 20px;

			@media @mobile {
				max-height: 15px;
			}
		}
	}
}

.judgeservice-review {
	position: relative;
	padding: 20px 50px 80px;
	min-height: 180px;
	box-sizing: border-box;
	// max-width: 80%;
	margin-left: auto;

	@media @tablet {
		padding: 20px 20px 40px;
	}

	&__quotation {
		position: absolute;
		color: fade(white, 80%);
		font-size: 60px;

		@media @tablet {
			font-size: 40px;
		}

		&--left {
			top: 0;
			left: -40px;
		}

		&--right {
			right: -55px;
			bottom: 40px;
			color: fade(white, 40%);
			font-size: 105px;

			@media @tablet {
				right: -35px;
				font-size: 75px;
			}

			@media @mobile {
				bottom: 90px;
				font-size: 42px;
			}
		}
	}

	.btn {
		margin-top: 20px;
		background: @primary-colour;
		color: white !important;

		&:hover {
			background: white;
			color: @primary-colour !important;
		}
	}

	&__quote {
		margin: 0 0 40px;
		color: white;
		font-size: 18px;
		font-weight: 300;
		line-height: 26px;

		@media @tablet {
			font-size: 16px;
			line-height: 20px;
		}

		@media @mobile {
			font-size: 14px;
		}
	}

	&__author {
		color: white;
		font-family: @heading-font;
		font-weight: bold;
	}

	&__rating {

		i {
			color: @primary-colour;
		}

	}
}`,
        },
      ],
      userguide: {
        type: "text",
        content: "Why am I moving?",
      },
    };
  },
});

/***** 02. InternalCarousel *****/

export const InternalCarousel = () => ({
  name: "InternalCarousel",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
			<img src="${internalCarousel}" alt="${name}" style="max-width: 100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<div class="row-block testimonial">
	<div class="wrapper">
		<div class="container">
			<h2 class="row-block__heading">Customer Reviews</h2>

			<div id="review-slider" class="royalSlider rsMinW">
				{v2_CUSTOMER_REVIEW_SLIDER_COMMENT}
			</div>

			<p><a href="/testimonials.php" class="btn">Read our reviews</a></p>
			
		</div>
	</div>
</div>`,
        },
        {
          tab: "LESS",
          code: `/* ---------- Full Testimonial ---------- */
.row-block.testimonial {
	padding: 40px 0;
	background: @primary-colour;
	text-align: center;

	.container, .wrapper {
		overflow: visible !important;
	}

	.row-block__heading {
		margin-bottom: 0;
	}

	h2 {
		color: white;
	}

	.sub-heading {
		color: darken(white,15%);
	} 
	
	.btn {
		&:hover {
			background: white !important;
			color: @primary-colour !important;
		}
	}
}

.review-icons {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-right: -20px;
	margin-bottom: -20px;

	&__title {
		flex: 1 1 calc(~'100% - 20px');
		margin-right: 20px;
		margin-bottom: 20px;

		em {
			display: block;
			margin-bottom: 20px;
			font-size: 32px;
			color: white;

			@media @tablet {
				font-size: 24px;
			}
		}
	}

	&__item {
		flex: 0 0 auto;
		margin-right: 20px;
		margin-bottom: 20px;
		text-align: center;

		img {
			padding: 10px 20px;
			background: white;
			border-radius: 9999px;
			max-height: 40px;
			box-sizing: content-box;
			transition: transform .2s linear;
		}

		a:hover img {
			transform: scale(1.1);
		}
	}
}

#review-slider {
	width: 100%;
	height: auto;
	padding-bottom: 20px; // Allows speach bubble arrow to show

	.rsContent {
		background: none !important;
	}

	blockquote {
		position: relative;
		display: inline-block;
		max-width: 900px;
		padding: 20px;
		margin: 40px auto 20px;
		background: transparent;
		text-align: center;
		border-radius: 20px;
		box-sizing: border-box;

		// &:before {
		//   .char(quote-left);
		//   position: absolute;
		//   top: -40px;
		//   left: -35px;
		//   color: @accent-colour2;
		//   font-family: "ClickIcons";
		//   font-size: 50px;
		// }

		// &:after {
		//   content: '';
		//   position: absolute;
		//   top: 100%;
		//   right: 40px;
		//   border-left: 20px solid transparent;
		//   border-right: 20px solid transparent;
		//   border-top: 20px solid white;
		// }

		.quote {
			margin-bottom: 20px;
			color: fade(white,80%);
			font-family: @alpha-font;
			font-size: 18px;
			font-weight: 400;
			line-height: 1.4;
			font-style: italic;
			text-overflow: ellipsis;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			min-height: 77px;
		}

		cite {
			display: block;
			margin-bottom: 20px;
			color: white;
			font-family: @heading-font;
			font-size: 20px;
			font-weight: 900;
			line-height: 1;
		}

		.star-rating {
			text-align: center;

			span {
				color: @accent-colour;
				font-size: 20px;
				margin: 0 2px;
			}
		}
	}
}`,
        },
        {
          tab: "JS",
          code: `function reviewSlider() {
	$('#review-slider').royalSlider({
		arrowsNav: false,
		arrowsNavAutoHide: false,
		fadeinLoadedSlide: false,
		controlNavigationSpacing: 0,
		controlNavigation: 'none',
		imageScaleMode: 'none',
		imageAlignCenter: false,
		autoHeight: true,
		autoScaleSliderHeight: 140,
		blockLoop: true,
		loop: true,
		numImagesToPreload: 1,
		transitionType: 'slide',
		keyboardNavEnabled: true,
		block: {
			delay: 100
		},
		autoPlay: {
			// autoplay options go here
			enabled: true,
			pauseOnHover: false,
			stopAtAction: false,
			delay: 9000
		}
	});
}
reviewSlider();`,
        },
      ],
    };
  },
});

/***** 03. ExternalStatic *****/

export const ExternalStatic = () => ({
  name: "ExternalStatic",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
			<img src="${externalStatic}" alt="${name}" style="max-width: 100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<div class="row-block promo--reviews">
	<div class="wrapper">
		<div class="container">

			<div class="review-promo">
				<div class="review-promo__main-text">
					<h2 class="review-promo__heading">Customer Reviews</h2>
					<div class="review-promo__subtext"><span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span> See what our customers have to say about us</div>
				</div>
				<div class="review-promo__links">
					<div class="review-promo__at">
						<a href="https://www.autotrader.co.uk/dealers/county-londonderry/coleraine/roadside-garages-ltd-10005745" target="_blank" title="{v2_NAME} Reviews">
							<img data-src="/img-src/{v2_FOLDER}/theme/autotrader.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="responsive-img lazy" alt="Autotrader Reviews">
							<p>Rated: 4.9/5</p>
						</a>
						
					</div>
					<div class="review-promo__google">
						<a href="https://www.google.com/search?sxsrf=ALeKk01jUdEIlmGd-H1m-JR04DIru3eb8g%3A1582285776592&ei=0MNPXrTSI8zKgQa45pPIBw&q=roadside+garages+limited&oq=roadside+garages+limited&gs_l=psy-ab.3..0j0i22i10i30j0i22i30.1873.3425..3496...0.2..0.76.571.9......0....1..gws-wiz.......0i71.cLVPEg-9q1o&ved=0ahUKEwi0-pXtyeLnAhVMZcAKHTjzBHkQ4dUDCAs&uact=5#lrd=0x48603b5abce0bb77:0x8f967eb3f5d1bf14,1,,," target="_blank" title="{v2_NAME} Reviews">
							<img data-src="/img-src/{v2_FOLDER}/theme/google.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="responsive-img lazy" alt="Google Reviews">
							<p>Rated: 4.8/5</p>
						</a>
						
					</div>
					<div class="review-promo__fb">
						<a href="https://en-gb.facebook.com/roadsidegarages/" target="_blank" title="{v2_NAME} Reviews">
							<img data-src="/img-src/{v2_FOLDER}/theme/facebook.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="responsive-img lazy" alt="Facebook Reviews">
							<p>Rated: 4.8/5</p>
						</a>
					</div>
					<div class="review-promo__js">
						<a href="http://www.judgeservice.com/en-gb/car-dealership/name/Roadside+Garages+Limited+New+&+Used+Cars/" target="_blank" title="{v2_NAME} Reviews">
							<img data-src="/img-src/{v2_FOLDER}/theme/judgeservice.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="responsive-img lazy" alt="JudgeService Reviews">
							<p>Rated: 4.8/5</p>
						</a>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>`,
        },
        {
          tab: "LESS",
          code: `// reviews panel

.promo--reviews{
	padding: 40px 0;
	background: @accent-colour;
	float: none;
}

.review-promo {
	width: 100%;
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	
	&__main-text{
		flex: 1 1 auto;
		width: auto;
		@media screen and(max-width:1180px){
			width: 100%;
			flex-basis: 100%;
			margin-bottom: 20px;
		}
	}
	&__heading{
		color: white;
		margin: 0px;
		font-size: 28px;
		font-weight: 600;
		@media screen and(max-width:1180px){
			text-align: center;
		}
	}
	&__subtext{
		font-size: 18px;
		color: white;
		margin: 0 0 10px 0;

		span {
			display: block;
			font-size: 32px;
			color: @accent-colour--dark;
		}

		@media screen and(max-width:1180px){
			text-align: center;
		}
	}
	&__links{
		display: flex;
		flex: 0 0 auto;
		p {
			text-align: center;
			margin-bottom: 0px !important;
		}

		@media screen and(max-width:1180px){
			width: 100%;
			flex-basis: 100%;
			min-width: auto;
			align-items: center;
			justify-content: center;
		}
	}

	&__google,
	&__at,
	&__fb,
	&__js {
		flex-basis: auto;
		width: auto;
		padding: 5px;
		box-sizing: border-box;


		a{
			display: inline-block;
			background: white;
			padding: 15px 25px;
			box-sizing: border-box;
			border-radius: 99px;
			@media @mobile{
				padding: 5px 10px;
			}
			&:hover{
				background: fade(white, 80%);
			}
		}
		img{
			max-height: 45px;
			@media @mobile{
				max-height: 25px;
			}
		}
	}

}`,
        },
      ],
    };
  },
});

/***** 04. ExternalCarousel *****/

export const ExternalCarousel = () => ({
  name: "ExternalCarousel",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
			<img src="${externalCarousel}" alt="${name}" style="max-width: 100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<div class="row-block testimonial">
	<div class="wrapper">
		<div class="container">
			<h2 class="row-block__heading">Customer Reviews</h2>

			<div id="review-slider" class="royalSlider rsMinW">
					{v2_CUSTOMER_REVIEW_SLIDER_COMMENT}
			</div>
			
			<div class="review-icons">
				<div class="review-icons__item">
					<a href="https://www.facebook.com/WoodsonCars/reviews" target="_blank" title="Facebook Reviews">
						<img data-src="/img-src/{v2_FOLDER}/theme/review-facebook.png" alt="Facebook" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="responsive-img lazy" />
					</a>
				</div>
				<div class="review-icons__item">
					<a href="https://www.google.com/search?q=woodson+cars+ltd&oq=woodson+cars&aqs=chrome.0.69i59j69i57j0l3j69i61l2j69i60.1575j0j4&sourceid=chrome&ie=UTF-8#lrd=0x487baa470f41f4c7:0x8c2a8608e2cde070,1,,," target="_blank" title="Google Reviews">
						<img data-src="/img-src/{v2_FOLDER}/theme/review-google.png" alt="Google" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="responsive-img lazy" />
					</a>
				</div>
				<div class="review-icons__item">
					<a href="/testimonials.php" title="Click Dealer Reviews">
						<img data-src="/img-src/{v2_FOLDER}/theme/review-click.png" alt="Click Dealer" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="responsive-img lazy" />
					</a>
				</div>
			</div>
		</div>
	</div>
</div>`,
        },
        {
          tab: "LESS",
          code: `/* ---------- Full Testimonial ---------- */
.row-block.testimonial {
	padding: 40px 0;
	background: linear-gradient(to right, @primary-colour, darken(@primary-colour,10%));
	text-align: center;

	.container, .wrapper {
		overflow: visible !important;
	}

	.row-block__heading {
		margin-bottom: 0;
	}

	h2 {
		color: white;
	}

	.sub-heading {
		color: darken(white,15%);
	}  
}

.review-icons {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-right: -20px;
	margin-bottom: -20px;

	&__title {
		flex: 1 1 calc(~'100% - 20px');
		margin-right: 20px;
		margin-bottom: 20px;

		em {
			display: block;
			margin-bottom: 20px;
			font-size: 32px;
			color: white;

			@media @tablet {
				font-size: 24px;
			}
		}
	}

	&__item {
		flex: 0 0 auto;
		margin-right: 20px;
		margin-bottom: 20px;
		text-align: center;

		img {
			padding: 10px 20px;
			background: white;
			border-radius: 9999px;
			max-height: 40px;
			box-sizing: content-box;
			transition: transform .2s linear;
		}

		a:hover img {
			transform: scale(1.1);
		}
	}
}

#review-slider {
	width: 100%;
	height: auto;
	padding-bottom: 20px; // Allows speach bubble arrow to show

	.rsContent {
		background: none !important;
	}

	blockquote {
		position: relative;
		display: inline-block;
		max-width: 900px;
		padding: 20px;
		margin: 40px auto 20px;
		background: white;
		text-align: center;
		border-radius: 20px;
		box-sizing: border-box;

		// &:before {
		//   .char(quote-left);
		//   position: absolute;
		//   top: -40px;
		//   left: -35px;
		//   color: @accent-colour2;
		//   font-family: "ClickIcons";
		//   font-size: 50px;
		// }

		&:after {
			content: '';
			position: absolute;
			top: 100%;
			right: 40px;
			border-left: 20px solid transparent;
			border-right: 20px solid transparent;
			border-top: 20px solid white;
		}

		.quote {
			margin-bottom: 20px;
			color: @text-colour;
			font-family: @body-font;
			font-size: 16px;
			font-weight: 400;
			line-height: 1.4;
			font-style: italic;
		}

		cite {
			display: block;
			margin-bottom: 20px;
			color: @primary-colour;
			font-family: @heading-font;
			font-size: 20px;
			font-weight: 900;
			line-height: 1;
		}

		.star-rating {
			text-align: center;

			span {
				color: goldenrod;
				font-size: 20px;
				margin: 0 2px;
			}
		}
	}
}`,
        },
        {
          tab: "JS",
          code: `function reviewSlider() {
	$('#review-slider').royalSlider({
		arrowsNav: false,
		arrowsNavAutoHide: false,
		fadeinLoadedSlide: false,
		controlNavigationSpacing: 0,
		controlNavigation: 'none',
		imageScaleMode: 'none',
		imageAlignCenter: false,
		autoHeight: true,
		autoScaleSliderHeight: 140,
		blockLoop: true,
		loop: true,
		numImagesToPreload: 1,
		transitionType: 'slide',
		keyboardNavEnabled: true,
		block: {
			delay: 100
		},
		autoPlay: {
			// autoplay options go here
			enabled: true,
			pauseOnHover: false,
			stopAtAction: false,
			delay: 9000
		}
	});
}

reviewSlider();`,
        },
      ],
    };
  },
});
