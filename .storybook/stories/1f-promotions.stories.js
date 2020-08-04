import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import ModPromoFullWidth from "./Modules/ModPromoFullWidth";
import ModPromoTwin from "./Modules/ModPromoTwin";
import ModPromoTriple from "./Modules/ModPromoTriple";
import ModPromoTiles from "./Modules/ModPromoTiles";

export default {
  title: "Homepage Modules/Promotions",
};

/***** 01. Full Width *****/

export const FullWidth = () => ({
  name: "FullWidth",
  components: {
    StoryBlock,
    ModPromoFullWidth,
  },
  template: `
		<StoryBlock :items="items" >
			<ModPromoFullWidth />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<div
	class="row-block row-block--promo-full lazy-background visible finance_promo"
>
	<div class="wrapper">
		<div class="container">
			<div class="promo-item">
				<div class="promo-item__heading">
					<h2>Finance</h2>
					<div class="promo-item__cta">
						<p>We can help arrange finance for you.</p>
						<a
							href="/finance.php"
							title="Finance packages tailored to you"
							class="btn"
							>Apply Now</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>`,
        },
        {
          tab: "LESS",
          code: `.row-block--promo-full.visible {
	background: url('@{dealer-img}/theme/finance{CACHE_BUSTER}.jpg') center center no-repeat !important;
	background-size: cover !important;
	background-position: center center !important;
	padding: 100px 0;
	padding-bottom: 140px;
	@media @mobile {
		background: @secondary-colour url('@{dealer-img}/theme/finance_mobile{CACHE_BUSTER}.jpg') center center no-repeat!important;
		background-size: cover !important;
	}
	.wrapper{
		@media @mobile {
			overflow: visible;
		}
	}

	.container{
		overflow: visible;

		.promo-item {
			position: relative;
			z-index: 80;
			padding-left: 100px;
			@media @mobile {
					height: 260px;
					padding-left: 0!important;
					z-index: 10;
			}

			.promo-item__heading {
				height: 200px;
				background: #2e2e36;
				width: 270px;
				position: relative;

				h2 {
					text-transform: uppercase;
					font-size: 38px;
					letter-spacing: 8px;
					position: absolute;
					right: -170px;
					width: 400px;
					top: 15px;
					color: #fff;
					line-height: 1.3;
					@media @mobile {
						right: -40px;
						width: 290px;
						font-size: 30px;
						top: 50px;
					}
				}

				.promo-item__cta {
					padding: 30px;
					background: #fff;
					position: absolute;
					bottom: -80px;
					width: 400px;
					right: -230px;
					@media @mobile {
						bottom: -140px!important;
						width: 250px;
						right: -30px!important;
					}

					p {
						letter-spacing: 2px;
						font-size: 18px;
						line-height: 1.6;
						margin-bottom: 35px;
					}
				}
			}

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

/***** 01-a. Full Width Benefits *****/

import FullwidthBenefits from "./assets/screenshots/fullwidth-benefits.png";

export const FullWidthBenefits = () => ({
  name: "FullWidthBenefits",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
			<img src="${FullwidthBenefits}" alt="${name}" style="max-width:100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<div class="row-block why-us">

	<div class="wrapper">
		<div class="container">

			<div class="why-choose-us">
								<div class="why-choose-us__image">
					<img data-src="/img-src/{v2_FOLDER}/theme/benefits-car.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="Qashqai" class="responsive-img lazy" />
								</div>
				<div class="why-choose-us__item">
					<div class="why-choose-us__heading">Benefits of buying with {v2_NAME}</div>
					<ul class="why-choose-us__list list-ticks">
						<li>All vehicles are sold with a new MOT*</li>
						<li>All vehicles are HPI checked</li>
						<li>Buy your car and drive away the same day!</li>
						<li>Finance from 0% deposit</li>
						<li>All vehicles are sold with a minimum 3 month warranty</li>
						<li>All vehicles go through a 100 point check pre-sale</li>
						<p>(*) excluding cars which are 10 years old</p>
						<a class="btn" href="/search.php" title="Showroom">View Stock</a>
					</ul>
				</div>
			</div>

		</div>
	</div>

</div>`,
        },
        {
          tab: "LESS",
          code: `.why-us {
	
	background: linear-gradient(176deg, rgba(255,217,139,1) 0%, rgba(255,255,255,1) 30%);
}

.why-choose-us {

	display: flex;

	@media @mobile {
			flex-direction: column;
	}

	&__image {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;

		@media @mobile {
				width: 100%;
				order: 1;
		}
	}

	&__item {
		width: 50%;
		margin: 100px auto 100px 0;
		box-sizing: border-box;

		@media @tablet {
			margin: 40px auto 40px 0;
		}

		@media @mobile {
			width: 100%;
			margin: 20px auto;
		}

	}

	&__heading {
		margin: 0 0 20px 0;
		color: @text-colour;
		font-family: @heading-font;
		font-size: 32px;
		font-weight: 400;
		line-height: 1.2;
	}

	&__list {

		li {
			color: @text-colour;
			font-size: 20px;
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

/***** 2. Twin Banner *****/

export const TwinBanner = () => ({
  name: "TwinBanner",
  components: {
    StoryBlock,
    ModPromoTwin,
  },
  template: `
		<StoryBlock :items="items" >
			<ModPromoTwin />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<div class="row-block row-block--promos">

	<div class="promo-items">
		<!-- Promo -->
		<a href="/servicing.php" title="Servicing and MOT" class="promo-item promo-item--1">
			<div class="promo-item__image">
				<img data-src="/img-src/{v2_FOLDER}/theme/panel-1.jpg" data-srcset="" alt="{v2_NAME}" class="responsive-img lazy" {PLACEHOLDER_IMAGE_SRC}>
			</div>
			<h2 class="promo-item__heading">Service & MOT</h2>
			<div class="promo-item__content">We have an on-site service centre</div>
			<div class="promo-item__cta">
				<span class="btn">Book In</span>
			</div>
		</a>
		<!-- // Promo -->
		<!-- Promo -->
		<a href="/partex.php" title="Part Exchange" class="promo-item promo-item--2">
			<div class="promo-item__image">
				<img data-src="/img-src/{v2_FOLDER}/theme/panel-2.jpg" data-srcset="" alt="{v2_NAME}" class="responsive-img lazy" {PLACEHOLDER_IMAGE_SRC}>
			</div>
			<h2 class="promo-item__heading">Part Exchange</h2>
			<div class="promo-item__content">Get a great valuation when you trade in today</div>
			<div class="promo-item__cta">
				<span class="btn">Part Exchange</span>
			</div>
		</a>
		<!-- // Promo -->
	</div>

</div>`,
        },
        {
          tab: "LESS",
          code: `.row-block--promos {
	padding: 0!important;
}

.promo-items {
	display: flex;
	flex-wrap: wrap;
	margin: -1px;

	.promo-item {
		flex: 1 1 calc(~'100% / 2 - 2px');
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		overflow: hidden;
		height: 400px;
		background: @primary-colour;
		position: relative;
		cursor: pointer;
		margin: 1px;

		@media @tablet {
			height: 300px;
			flex: 1 1 calc(~'100% / 2 - 2px');
		}
		@media @mobile {
			flex: 0 0 calc(~'100% / 1 - 2px');
			height: 240px;
		}

		&__image {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 1;

			img {
				filter: grayscale(100%);
				opacity: 0.2;
				transform: scale(1);
				transition: all 0.3s linear;
				width: 100%;
				height: 100%;
				object-fit: cover;

				&:hover {
					transform: scale(1.2);
					filter: unset;
					opacity: 0.5;
					transition: all 0.3s linear;
				}
			}
		}

		&__heading,
		&__content,
		&__cta {
			text-align: center;
			z-index: 2;
			pointer-events: none;
			padding: 0 20px;

			@media @tablet {
				padding: 0 15px;
			}
		}

		&__heading {
			color: white;
			font-size: 36px;
			margin: 0;
			position: relative;

			@media @tablet {
				font-size: 32px;
			}
			@media @mobile {
				font-size: 28px;
			}

			&:after {
				top: -10px;
				left: calc(~'50% - 35px');
				margin-left: 0px;
				content: " ";
				height: 4px;
				width: 70px;
				background: @accent-colour;
				position: absolute;
				pointer-events: none;
				transform: skew(-15deg, 0deg);
				border-radius: 5px 0 5px 0;
			}
		}

		&__content {
			color: fade(white,90%);
			font-size: 20px;
			margin: 0 0 20px 0;

			@media @tablet {
				font-size: 18px;
			}
			@media @mobile {
				font-size: 16px;
			}
		}

		&__cta {
			.btn {
				background: white;
				color: @primary-colour!important;  
			}
		}
	}
}`,
        },
      ],
    };
  },
});

/***** 03. Triple Banner *****/

export const TripleBanner = () => ({
  name: "TripleBanner",
  components: {
    StoryBlock,
    ModPromoTriple,
  },
  template: `
		<StoryBlock :items="items" >
			<ModPromoTriple />
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
	<div
		id="panel-1"
		class="check-panel flex alignvcenter aligncenter lazy-background"
	>
		<div>
			<a href="/car_locator.php" class="inner-padding">
				<h2 class="check-panel__title">Vehicle Sourcing</h2>
				<div class="check-panel__text">
					We can help you find your perfect van
				</div>
				<div class="check-panel__button">Learn More</div>
			</a>
		</div>
	</div>
	<!-- // Panel Left -->

	<!-- Panel Right -->
	<div
		id="panel-2"
		class="check-panel flex alignvcenter aligncenter lazy-background"
	>
		<div>
			<a href="/partex.php" class="inner-padding">
				<h2 class="check-panel__title">Part Exchange</h2>
				<div class="check-panel__text">
					Get the up-to-the-minute market value of your van
				</div>
				<div class="check-panel__button">Get Valuation</div>
			</a>
		</div>
	</div>
	<!-- Panel Right -->

	<!-- Panel Right -->
	<div
		id="panel-3"
		class="check-panel flex alignvcenter aligncenter lazy-background"
	>
		<div>
			<a href="/finance.php" class="inner-padding">
				<h2 class="check-panel__title">Finance</h2>
				<div class="check-panel__text">
					Need help financing your next van? We can help
				</div>
				<div class="check-panel__button">Apply Online</div>
			</a>
		</div>
	</div>
	<!-- Panel Right -->
</div>
<!-- // END Homepage HTML Panel 2 -->`,
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
		@media @mobile {
			min-height: auto;
		}
		&:before {
			content: "";
			position: absolute;
			height: 100%;
			width: 100%;
			background: fade(black, 65%);
			transition: all 0.2s;
		}

		&:hover:before {
			background: fade(black, 30%);
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
			background: url("https://source.unsplash.com/random/400x400") center center no-repeat;
			background-size: cover !important;
			background-repeat: no-repeat !important;
			background-position: center center !important;
		}
	}
	#panel-2 {
		&.visible {
			background: url("https://source.unsplash.com/random/400x400") center center no-repeat;
			background-size: cover !important;
			background-repeat: no-repeat !important;
			background-position: center center !important;
		}
	}
	#panel-3 {
		&.visible {
			background: url("https://source.unsplash.com/random/400x400") center center no-repeat;
			background-size: cover !important;
			background-repeat: no-repeat !important;
			background-position: center center !important;
		}
	}
}`,
        },
      ],
    };
  },
});

/***** 03-a. Triple Banner 2s1l *****/

import promoTripleBanner2s1l from "./assets/screenshots/triple-promo-2s1l.png";

export const TripleBanner2s1l = () => ({
  name: "TripleBanner2s1l",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
			<img src="${promoTripleBanner2s1l}" style="width:100%;height:auto" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<div class="row-block row-block--promo-panels">
<div class="wrapper">
		<div class="container">

				<div class="o-promo-panels">

						<div class="l-promo-wrapper l-promo-wrapper--left">
								<!-- Promo Panel -->
								<div class="m-promo-panel m-promo-panel--1 lazy-background">
										<div class="m-promo-panel__wrapper">
												<div class="m-promo-panel__title">Finance</div>
												<div class="m-promo-panel__text">Flexible finance deals to suit your budget</div>
												<div class="m-promo-panel__link">
														<a href="/finance.php" title="Finance">Apply Online</a>
												</div>
										</div>
								</div>
								<!-- // Promo Panel -->
						</div>

						<div class="l-promo-wrapper l-promo-wrapper--right">
								<!-- Promo Panel -->
								<div class="m-promo-panel m-promo-panel--2 lazy-background">
										<div class="m-promo-panel__wrapper">
												<div class="m-promo-panel__title">Warranties</div>
												<div class="m-promo-panel__text">Drive away with complete peace of mind</div>
												<div class="m-promo-panel__link">
														<a href="/warranty_wms.php" title="Warranty">View Deals</a>
												</div>
										</div>
								</div>
								<!-- // Promo Panel -->
								<!-- Promo Panel -->
								<div class="m-promo-panel m-promo-panel--3 lazy-background">
										<div class="m-promo-panel__wrapper">
												<div class="m-promo-panel__title">Part Ex</div>
												<div class="m-promo-panel__text">Get an up-to-the-minute market value of your car</div>
												<div class="m-promo-panel__link">
														<a href="/partex.php" title="Contact us">Get Valuation</a>
												</div>
										</div>
								</div>
								<!-- // Promo Panel -->
						</div>

				</div>

		</div>
</div>
</div>`,
        },
        {
          tab: "LESS",
          code: `.row-block--promo-panels {
	background: linear-gradient(135deg, rgba(21, 21, 21, 0.09) 0%, rgba(21, 21, 21, 0.09) 38%,rgba(244, 244, 244, 0.09) 38%, rgba(244, 244, 244, 0.09) 100%),linear-gradient(45deg, rgba(14, 14, 14, 0.09) 0%, rgba(14, 14, 14, 0.09) 8%,rgba(107, 107, 107, 0.09) 8%, rgba(107, 107, 107, 0.09) 100%),linear-gradient(45deg, rgba(228, 228, 228, 0.06) 0%, rgba(228, 228, 228, 0.06) 36%,rgba(10, 10, 10, 0.06) 36%, rgba(10, 10, 10, 0.06) 100%),linear-gradient(45deg, rgba(16, 16, 16, 0.03) 0%, rgba(16, 16, 16, 0.03) 6%,rgba(197, 197, 197, 0.03) 6%, rgba(197, 197, 197, 0.03) 100%),linear-gradient(90deg, rgba(244, 244, 244, 0.1) 0%, rgba(244, 244, 244, 0.1) 73%,rgba(236, 236, 236, 0.1) 73%, rgba(236, 236, 236, 0.1) 100%),linear-gradient(45deg, rgba(187, 187, 187, 0.1) 0%, rgba(187, 187, 187, 0.1) 10%,rgba(23, 23, 23, 0.1) 10%, rgba(23, 23, 23, 0.1) 100%),linear-gradient(135deg, rgba(206, 206, 206, 0.01) 0%, rgba(206, 206, 206, 0.01) 79%,rgba(111, 111, 111, 0.01) 79%, rgba(111, 111, 111, 0.01) 100%),linear-gradient(0deg, rgba(211, 211, 211, 0.01) 0%, rgba(211, 211, 211, 0.01) 87%,rgba(78, 78, 78, 0.01) 87%, rgba(78, 78, 78, 0.01) 100%),linear-gradient(90deg, rgba(109, 109, 109, 0.07) 0%, rgba(109, 109, 109, 0.07) 55%,rgba(110, 110, 110, 0.07) 55%, rgba(110, 110, 110, 0.07) 100%),linear-gradient(90deg, rgb(2, 2, 2),rgb(84, 84, 84));
	padding: 120px 0;

	@media @tablet {
		padding: 80px 0;
	}
	@media @mobile {
		padding: 60px 0;
	}
}

.o-promo-panels {
	display: flex;
	margin: -10px;
	flex-direction: row-reverse;

	@media @mobile {
		flex-direction: column;
	}
}

.l-promo-wrapper {
flex: 1 1 auto;

&--left {
	flex: 1 1 40%;
	width: 40%;

	@media @tablet {
		flex: 1 1 45%;
		width: 45%;
	}
	@media @mobile {
		flex: 1 1 100%;
		width: 100%;
	}
}
&--right {
	flex: 1 1 60%;
	width: 60%;
	display: flex;
	flex-direction: column;

	@media @tablet {
		flex: 1 1 55%;
		width: 55%;
	}
	@media @mobile {
		flex: 1 1 100%;
		width: 100%;
	}
}
}

.m-promo-panel {
	background: white;
	box-sizing: border-box;
	margin: 10px;
	min-height: 240px;
	position: relative;

	&__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		padding: 25px;
		background: fade(black,30%);
		transition: all .3s linear;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		&:hover {
			background: fade(black,70%);
		}

		@media @mobile {
			padding: 15px;
		}
	}

	&__title {
		font-family: @heading-font;
		font-size: 30px;
		font-weight: 400;
		line-height: 1.2;
		color: white;

		@media @tablet {
			font-size: 26px;
		}
		@media @mobile {
			font-size: 22px;
		}
	}

	&__text {
		color: white;
	}

	&__link {
		margin: 15px 0 0 0;

		a {
			.btn;
			display: inline-block;
			margin: 0 !important;
		}
	}

	&--1 {
		&.visible {
			height: calc(~'100% - 20px');
			background: url('@{dealer-img}/theme/promo-1.jpg') center center no-repeat !important;
			background-size: cover !important;
		}
	}

	&--2 {
		&.visible {
			background: url('@{dealer-img}/theme/promo-2.jpg') center center no-repeat !important;
			background-size: cover !important;
		}
	}

	&--3 {
		&.visible {
			background: url('@{dealer-img}/theme/promo-3.jpg') center center no-repeat !important;
			background-size: cover !important;
		}
	}
}`,
        },
      ],
    };
  },
});

/***** 04. Tile Promo *****/

export const TilePromo = () => ({
  name: "TilePromo",
  components: {
    StoryBlock,
    ModPromoTiles,
  },
  template: `
		<StoryBlock :items="items" >
			<ModPromoTiles />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<div class="row-block row-block--promo-large-tiles">
	<div class="wrapper">
		<div class="container">
			<div class="promo-block">
				<div class="promo-block__item promo-block__item--1">
					<a href="/search.php">
						<span class="promo-block__image lazy-background"></span>
						<em>Current stock</em>
					</a>
				</div>
				<div class="promo-block__item promo-block__item--2">
					<a href="/sellcar.php">
						<span class="promo-block__image lazy-background"></span>
						<em>Sell your car</em>
					</a>
				</div>
				<div class="promo-block__item promo-block__item--3">
					<a href="/finance.php">
						<span class="promo-block__image lazy-background"></span>
						<em>Finance options</em>
					</a>
				</div>
				<div class="promo-block__item promo-block__item--4">
					<a href="/partex.php">
						<span class="promo-block__image lazy-background"></span>
						<em>Part exchange</em>
					</a>
				</div>
				<div class="promo-block__item promo-block__item--5">
					<a href="/warranty.php">
						<span class="promo-block__image lazy-background"></span>
						<em>Warranty</em>
					</a>
				</div>
				<div class="promo-block__item promo-block__item--6">
					<a href="/about.php">
						<span class="promo-block__image lazy-background"></span>
						<em>About us</em>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>`,
        },
        {
          tab: "LESS",
          code: `// promo tiles

.row-block--promo-large-tiles {
	background: white;
	box-sizing: border-box;
}

@promo-count: 3;
@promo-margin: 0px;

.promo-block {
	display: flex;
	flex-wrap: wrap;
	margin-right: 20px;

	&__item {
		position: relative;
		flex: 0 0 calc(~"100% / @{promo-count} - @{promo-margin}");
		// IE Fallback
		width: calc(~"100% / @{promo-count} - @{promo-margin}");
		height: 300px;
		margin-right: @promo-margin;
		background: @custom-colour3;
		border-bottom: 20px solid white;
		border-left: 20px solid white;
		overflow: hidden;
		box-sizing: border-box;

		@media @tablet {
			flex: 0 0 calc(~"100% / 2 - @{promo-margin}");
			// IE Fallback
			width: calc(~"100% / 2 - @{promo-margin}");
		}

		@media @mobile {
			flex: 0 0 calc(~"100% / 1 - @{promo-margin}");
			// IE Fallback
			width: calc(~"100% / 1 - @{promo-margin}");
			height: 220px;
		}

		a {
			display: block;
			position: relative;
			height: 100%;
			width: 100%;
			padding: 40px;
			box-sizing: border-box;

			@media @mobile {
				padding: 20px;
			}

			em {
				position: relative;
				display: block;
				color: white;
				font-family: @heading-font;
				font-size: 24px;
				font-weight: 700;
				text-transform: uppercase;
				text-shadow: 0 2px 2px fade(black, 70%);
				z-index: 2;
			}
		}

		&:hover {
			.promo-block__image {
				transform: scale(1.1);
			}
		}

		&--1 {
			.promo-block__image.visible {
				background-image: url("@{dealer-img}/theme/promo-1.jpg") !important;
			}
		}
		&--2 {
			.promo-block__image.visible {
				background-image: url("@{dealer-img}/theme/promo-2.jpg") !important;
			}
		}
		&--3 {
			.promo-block__image.visible {
				background-image: url("@{dealer-img}/theme/promo-3.jpg") !important;
			}
		}
		&--4 {
			.promo-block__image.visible {
				background-image: url("@{dealer-img}/theme/promo-4.jpg") !important;
			}
		}
		&--5 {
			.promo-block__image.visible {
				background-image: url("@{dealer-img}/theme/promo-5.jpg") !important;
			}
		}
		&--6 {
			.promo-block__image.visible {
				background-image: url("@{dealer-img}/theme/promo-6.jpg") !important;
			}
		}
	}

	&__image {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-position: center center !important;
		background-repeat: no-repeat !important;
		background-size: cover !important;
		transition: 0.2s linear;

		&:before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background: linear-gradient(
				-75deg,
				rgba(0, 0, 0, 0) 150px,
				rgba(0, 0, 0, 0.4) 100%
			);
			z-index: 1;
		}
	}
}`,
        },
      ],
    };
  },
});

/***** 05. MotoRate Banner *****/

import MotorateBanner from "./assets/screenshots/motorate-banner.png";

export const MotoRateBanner = () => ({
  name: "MotoRateBanner",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
			<img src="${MotorateBanner}" alt="${name}" style="max-width:100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<!-- Homepage HTML Panel 8 -->
<div class="motonovo-banner">
	<div class="wrap">

		<div class="inner">

			<div class="thead"><span class="rate1" id="rate1">Personalise your motor finance.<br> Rates from <span id="prates"
						class="rate1-prates"></span></span></div>

			<div><span class="subt">8.9% Representative APR</span></div>

			<div><a href="/finance.php" class="button " style="text-transform:none;color:white">Find out more!</a></div>

			<div class="tfoot">Representative example: Cash Price &pound;9,999.00. Deposit &pound;1000. Total Amount of Credit
				&pound;8,999.59 Monthly Payments of &pound;205.42 with a final payment of &pound;206.42 which includes an Option
				to Purchase fee of &pound;1.00. Duration of Agreement is 60 months. Total Amount Payable is &pound;12,326.20
				Total Cost of Credit is &pound;3,327.20 Annual Fixed Interest Rate of 4.65%.</div>

		</div>

		<!-- <div class="logo mobile-hidden"><img src="/img-src/{v2_FOLDER}/theme/motonovo-logo.png" alt="MotoNovo Finance" /></div> -->

	</div>

	<style>
		@import url("https://mnfsuite.com/Banners/MotoRate/main-style.css");

		@import url("https://mnfsuite.com/Banners/MotoRate/rates.css");
	</style>
</div>
<!-- // END Homepage HTML Panel 8 -->`,
        },
        {
          tab: "LESS",
          code: `// MotoNovo Banner
// @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900&display=swap');
@moto-blue: #009fbe;

.motonovo-banner {
	clear: both;
	box-sizing: border-box;
	padding: 40px 0;

	.wrap {
		background: url("@{dealer-img}/theme/motonovo-bg.jpg") bottom right !important;
		background-size: cover !important;
		max-width: 1400px;
		margin: 0 auto;
		padding: 40px;
		border-radius: 20px;
		@media @mobile {
			background: #f6ede8 !important;
			text-align: center;
		}
	}

	.rate1 {
		color: #009fbe;
		font-size: 36px;
		font-weight: 900;
		margin-bottom: 10px;
		display: inline-block;
		font-family: Montserrat, sans-serif;
		@media @mobile {
			font-size: 26px;
		}
	}

	.subt {
		font-size: 26px;
		font-weight: 900;
		margin-bottom: 20px;
		display: inline-block;
		font-family: Montserrat, sans-serif;
		@media @mobile {
			font-size: 22px;
		}
	}

	.tfoot {
		color: black;
		width: 40%;
		font-size: 12px;
		margin-top: 10px;
		font-family: Montserrat, sans-serif;
		@media @mobile {
			width: 100%;
		}
	}
}
// END`,
        },
      ],
    };
  },
});

/***** 06. AT Highly Rated Banner *****/

import ATHighlyRatedBanner from "./assets/screenshots/at-highly-rated-banner.png";

export const ATHighlyRated = () => ({
  name: "ATHighlyRated",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
			<img src="${ATHighlyRatedBanner}" alt="${name}" style="max-width:100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<div class="row-block row-block--at-award-bnr">

	<div class="wrapper">
		<div class="container">
			
			<div class="at-bnr">
				<div class="at-bnr__message">
					<div class="at-bnr__wrapper">
						<em>We've been recognised as Highly Rated on AutoTrader for 2020!</em>
						<p>Our customers have spoken and have consistently recognised our excellent customer service.</p>
					</div>
				</div>
				<div class="at-bnr__award">
					<img src="/img-src/{v2_FOLDER}/theme/at-award--with-shadow.png" alt="AutoTrader Highly Rated for our customer service 2020" class="responsive-img">
					<!-- <img data-src="/img-src/{v2_FOLDER}/theme/cg-award--with-shadow.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="Car Gurus Highly Rated for 2020" class="responsive-img lazy"> -->
				</div>
			</div>

		</div>
	</div>

</div>`,
        },
        {
          tab: "LESS",
          code: `// AutoTrader/CarGurus Award Banner

@at-red: #e63538;
@at-blue: #313c53;
@cg-blue: #00a2e5;

.row-block.row-block--at-award-bnr {
	padding: 0;
	background: @at-blue;

	.wrapper {
		@media @mobile {
			padding: 0 !important; // padding applied to inner elements
		}
	}
}

.at-bnr {
	display: flex;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;

	@media @mobile {
		flex-direction: column-reverse;
	}

	&__message {
		display: flex;
		align-items: center;
		background: @at-blue;
		padding: 20px 0;
		padding-right: 40px;

		@media @mobile {
			text-align: center;
			padding: 20px;
		}

		em {
			display: block;
			margin-bottom: 20px;
			color: white;
			font-size: 24px;

			@media @tablet {
				font-size: 20px;
			}
		}

		p {
			color: #dddddd;

			@media @tablet {
				font-size: 14px;
			}
		}
	}

	&__award {
		flex: 0 0 auto;
		padding: 30px 0;
		background: none;
		text-align: center;

		@media @mobile {
			background: none;
			padding: 10px;
		}

		img {
			max-height: 160px;
		}
	}
}`,
        },
      ],
    };
  },
});
