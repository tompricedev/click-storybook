import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import ModSearchBlock from "./Modules/ModSearchBlock";

export default {
  title: "Homepage Modules/Header",
};

/***** 01. Streamlined *****/

import headerStreamlined from './assets/screenshots/headerStreamlined.png';

export const Streamlined = () => ({
  name: "Streamlined",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
		<img src="${headerStreamlined}" alt="" style="max-width: 100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "HTML",
					code: `<!-- Header -->
<header id="header">

	<div class="wrapper">
		<div class="container">

			<div class="header">

				<div class="header__logo">
					<a href="{SELF_URL}" title="{SITE_NAME}" class="hdr-logo">
						<img src="/img-src/{v2_FOLDER}/theme/Click-Logo.svg" alt="{v2_NAME}" class="responsive-img">
					</a>
				</div>

				<div class="header__nav">
					{v2_WEB_NAV_HEADER_DISPLAY}
				</div>

				<div class="header__contact">
					<ul>
						{v2_HEADER_TELEPHONE}
					</ul>
				</div>

			</div>

		</div>
	</div>

</header>
<!-- // Header -->

<div id="header-promotions">

	<div class="wrapper">
		<div class="container">

			<ul class="header-promotions">
				<li class="header-promotions__promo header-promotions__promo--stock">
					<a href="/search.php" title="Quality Used Cars of {v2_TOWN}">
						<i class="ci ci-car-garage"></i>
						<em>Quality Used Cars</em>
					</a>
				</li>
				<li class="header-promotions__promo header-promotions__promo--reviews">
					<a href="/testimonials.php" title="5 Star Customer Reviews">
						<i class="ci ci-comments"></i>
						<em>5* Customer Reviews</em>
					</a>
				</li>
				<li class="header-promotions__promo header-promotions__promo--finance">
					<a href="/finance.php" title="Finance Specialists">
						<i class="ci ci-calculator"></i>
						<em>Finance Specialists</em>
					</a>
				</li>
				<li class="header-promotions__promo header-promotions__promo--partex">
					<a href="/partex.php" title="Get a valuation">
						<i class="ci ci-sync"></i>
						<em>Competitive Valuations</em>
					</a>
				</li>
			</ul>

		</div>
	</div>

</div>`
				},
				{
					tab: "LESS",
					code: `@right-col-width: 340px;

#header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	background: white;
	z-index: 99;

	@media @mobile {

		.container .row {
			height: auto !important;
		}

		.hdr-logo {
			.flex-display(@display: flex);
			.flex-direction(@direction: column);
			.justify-content(@justify: center);
			.align-items(@align: center);
			position: fixed;
			top: 0;
			left: 50%;
			width: calc(~'100% - 100px');
			height: 50px;
			padding: 3px 0;
			margin-top: 0;
			margin-bottom: 0;
			background: 0 0;
			text-align: center;
			box-shadow: none;
			transform: translateX(-50%);
			z-index: 9999;

			img {
				max-height: 44px;
				line-height: 44px;
			}
		}

		.wrapper {
			padding: 0 !important;
		}
	}

	.container {
		height: auto;
		padding: 0;
		overflow: visible;
	}

	a {
		text-decoration: none;
	}
}

.header {
	.flex-display(@display: flex);
	.align-items(@align: center);
	.justify-content(@justify: space-between);

	@media @mobile {
		padding: 0;
		display: block;
	}

	&__logo {
		padding: 0;
		flex: 0 0 auto;
		margin-right: 20px;

		@media @mobile {
			margin-right: 0;
		}

		.hdr-logo {

			img,
			svg {
				height: 60px;

				@media @tablet {
					height: 35px;
				}

				@media @mobile {
					height: 50px;
				}
			}
		}
	}

	&__nav {

	}

	&__contact {
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: auto);

		@media @mobile {
			display: none;
		}

		ul {
			transition: all 0.3s linear;

			li {
				float: left;
				margin: 0;
				transition: all 0.3s linear;

				a {
					color: @primary-colour;
					font-size: 22px;
					font-weight: 600;
					line-height: 40px;
					margin: 0;
					padding: 0;
					transition: all .2s linear;

					@media @tablet {
						font-size: 18px;
						line-height: 30px;
					}

					&:hover {
						color: @accent-colour;
					}
				}

				span {
					color: @accent-colour;
					font-size: 22px;
					line-height: 40px;

					@media @tablet {
						font-size: 18px;
						line-height: 30px;
					}
				}

				&:last-child {
					margin: 0;
				}
			}
		}
	}
}


#header-promotions {
	position: fixed;
	top: 80px;
	left: 0;
	width: 100%;
	background: @primary-colour;
	color: white;
	box-shadow: 0 3px 5px fade(black, 15%);
	z-index: 98;

	@media @tablet {
		top: 60px;
	}

	@media @mobile {
		top: 50px;
		display: none;
	}
}

.header-promotions {
	.flex-display(@display: flex);
	.justify-content(@justify: space-between);
	margin: 0 -10px 0 0;
	padding: 0;

	@media @mobile {
		.flex-direction(column);
		text-align: center;
		position: relative;
		height: 36px;
		width: 100%;
	}

	&__promo {
		flex: 0 0 auto;
		margin-right: 10px;

		@media @mobile {
			position: absolute;
			top: 0px;
			left: 0px;
			right: 0px;
			width: 100%;
			position: absolute;
			align-items: center;
			justify-content: center;
			opacity: 0;
		}

		a {

			&:hover em {
				color: @accent-colour;
			}
		}

		i {
			color: @accent-colour;
			margin-right: 5px;
			font-size: 20px;
			font-weight: 400;
			line-height: 36px;

			@media @tablet {
				font-size: 14px;
			}

			@media @mobile {
				font-size: 18px;
			}
		}

		em {
			color: white;
			font-size: 14px;
			line-height: 36px;

			@media @tablet {
				font-size: 10px;
			}

			@media @mobile {
				font-size: 14px;
			}
		}
	}
}

@keyframes add-fade {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}


.add-fade {
	@media @mobile {
		animation: add-fade 2s forwards;
	}
}





// Navigation

// Top level
@mm-link-colour: @text-colour; // link colours
@mm-link-bg-colour: none;

@mm-link-hover-colour: @accent-colour; // link hover colours
@mm-link-hover-bg-colour: none;

@mm-link-current-colour: @accent-colour;
@mm-link-current-bg-colour: none;

// Sub Menu
@mm-sub-bg-colour: @primary-colour;
@mm-sub-link-colour: white;
@mm-sub-link-border-colour: fade(white,10%);

// hover states
@mm-sub-link-hover-colour: white;
@mm-sub-link-hover-border-colour: @accent-colour;




/////////////////////////////////////
// ------- DESKTOP MEGAMENU -------//
/////////////////////////////////////

nav#primary-navigation {
	background: none;
	font-family: @body-font;
	border: none;
	z-index: 999;

	@media @mobile {
		height: 50px;
		background: white;
		box-shadow: 0 0 10px 0 fade(black, 15%);
		z-index: 998;
	}

	.container {
		margin: 0 auto; // overrides the structure styling
	}

	.wrapper {
		padding: 0 !important;
	}
}

.megamenu {
	.flex-display(@display: flex);

	@media @mobile {
		display: block;
	}

	// Mobile state only
	&.toggled {
		background: @custom-colour1;
		min-height: calc(~'100vh - 50px - 44px');
		z-index: 1;
		transition: none;
		overflow: visible;
		position: relative;


		.megamenu__listitem {
			background: @custom-colour1;
		}

		a.megamenu__listitem__link,
		a:visited.megamenu__listitem__link {
			color: @text-colour;
			padding: 0;
			background: none;
			font-size: 14px;
			line-height: 3;
			border-color: fade(black,10%);

			&:hover,
			&:focus {
				color: @text-colour  !important;
			}
		}
	}

	&__listitem {
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: auto);
		position: static !important;

		@media @tablet {
			margin-left: 0px;
			margin-right: 0px;
		}

		@media @mobile {
			margin-left: 0;
			margin-right: 0;
		}

		&#listitem__used-cars--parent,
		&#listitem__used-vans--parent,
		&#listitem__used-bikes--parent {
			position: static !important;

			.megasubmenu {
				left: 0 !important;
				width: 100% !important;
				position: fixed;
				left: 0;
				right: 0;
			}
		}

		@media @mobile {
			&#listitem__used-cars--parent.toggled,
			&#listitem__used-vans--parent.toggled,
			&#listitem__used-bikes--parent.toggled &.toggled {
				position: absolute !important;
			}
		}

		&.toggled {
			a.megamenu__listitem__link,
			a:visited.megamenu__listitem__link {
				font-size: 16px;
			}

			& > .megasubmenu {
				overflow: scroll;
				max-height: calc(~'100vh - 50px - 50px - 44px') !important;
			}
		}

		a&__link,
		a:visited&__link {
			color: @mm-link-colour;
			background: @mm-link-bg-colour;
			font-size: 16px;
			line-height: 80px;

			@media @lap {
				font-size: 14px;
				padding: 0 5px;
			}

			@media @tablet {
				font-size: 12px;
				line-height: 60px;
			}

			// Arrow on submenu styles
			&:before {
				width: 0;
				height: 0;
				border-style: solid;
				border-width: 0 10px 10px 10px;
				border-color: transparent transparent @mm-sub-bg-colour transparent !important;
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				margin: 0 auto;
			}

			i {
				margin-left: 0; //reduce space between link and dropdown icon
			}

			&--current {
				background: @mm-link-current-bg-colour;
				color: @mm-link-current-colour;

				&:hover,
				&:focus,
				&:active {
					color: @mm-link-hover-colour;
					background: @mm-link-hover-bg-colour;
				}
			}
		}

		// Desktop hovered state

		&:hover,
		&:active,
		&:focus {
			color: @mm-link-hover-colour;
			background: @mm-link-hover-bg-colour; // Important to put any background colour on the hover of the li & not the a link

			&:nth-last-child(2),
			&:last-child {
				&>.megasubmenu {
					right: 0px !important;

					@media @mobile {
						left: 0;
					}
				}
			}

			a.megamenu__listitem__link,
			a:visited.megamenu__listitem__link {
				color: @mm-link-hover-colour;

				@media @mobile {
					color: @primary-colour  !important;
				}
			}

			// Display arrow above submenu
			&.sub {
				a.megamenu__listitem__link:before,
				a:visited.megamenu__listitem__link:before {
					content: '';

					@media @mobile {
						content: none;
					}
				}
			}
		}
	}
}


.megasubmenu {
	left: auto;
	width: auto;
	min-width: 250px;
	background: @mm-sub-bg-colour;
	text-align: left;
	border-radius: 0;

	@media @mobile {
		background: @custom-colour1;
	}

	.container {
		max-width: 1600px;
		min-width: initial;
	}

	&__list {
		flex-direction: column;

		@media @mobile {
			margin: 0 auto !important;
		}

		&--brand {
			column-count: 5;
			@media @mobile {
				column-count: 2;
			}
		}

		&--footlinks {
			display: block;

			@media @mobile {
				column-count: 1;
			}
		}
	}

	&__listitem {
		flex: 0 0 auto;

		@media @mobile {
			margin-right: 0;
		}

		&--brand {
			margin-right: 0;
		}
	}

	&__listitem,
	&__listitem--footlink {

		a.megasubmenu__listitem__link,
		a:visited.megasubmenu__listitem__link {
			color: @mm-sub-link-colour;
			border-bottom: 1px solid @mm-sub-link-border-colour;

			@media @mobile {
				color: @text-colour;
				border-bottom-color: fade(black,10%);
			}

			@media @tablet {
				font-size: 11px;
			}

			&:hover,
			&:active,
			&:focus {
				color: @mm-sub-link-hover-colour;
				border-bottom: 1px solid @mm-sub-link-hover-border-colour;

				@media @mobile {
					color: @text-colour;
					border-bottom-color: fade(black, 10%);
				}
			}
		}

		&--brand {

			// Override individual brand link styles
			a.megasubmenu__listitem__link,
			a:visited.megasubmenu__listitem__link {
				color: @mm-sub-link-colour;
				border-bottom: 1px solid @mm-sub-link-border-colour;

				&:hover,
				&:active,
				&:focus {
					color: @mm-sub-link-hover-colour;
					border-bottom: 1px solid @mm-sub-link-hover-border-colour;
				}
			}
		}

		&__listitem--footlink {
			@media @mobile {
				display: block !important;
			}
		}
	}
}


@media @mobile {
	// Adds margin to the body for header and tab bar
	body {
		margin-top: 50px;
		margin-bottom: 44px;
	}

} // End mobile styles


// Styles for toggle buttons in the mobile nav.
.toggles {

	.toggle {
		color: @text-colour;

		&:hover,
		&:visited,
		&:focus {
			color: @accent-colour;
		}
	}
}


// bottom bar CTA
#tab-bar {
	i {
		font-weight: 400;
	}

	a:focus,
	a:hover,
	a:visited:focus,
	a:visited:hover {
		color: @accent-colour;
	}
}


// Top right search button
#dropdown-search {
	background: @custom-colour1;

	.dropdown-search {
		&__title {
			margin-bottom: 10px;
			padding-bottom: 13px;
			color: @heading-colour;
			font-family: @heading-font;

			&:after {
				border-bottom: 3px solid @accent-colour;
			}
		}

		&__vehtype input[type=radio]:checked+label.dropdown-search__label--radio {
			background: @accent-colour;
			color: white;
		}

		&__label--radio {
			color: @primary-colour;
			border-color: @primary-colour;
		}

		&__label {
			color: @text-colour;
		}

		&__button.button {
			.btn;
			padding: 0 15px !important;
		}
	}
}



// Finance/Price/Brands styles
//////////////////////////////////////////
/* -------------- Megamenu ------------ */
//////////////////////////////////////////

nav#primary-navigation .l-megamenu {

	.wrapper {
		padding: 0 20px !important;
	}
}

.o-megamenu {
	.flex-display(@display: flex);
	padding: 20px 0;
	width: calc(~'100% - 40px');
	margin: 0 -20px -20px 0;

	@media @mobile {
		flex-wrap: wrap;
		flex-direction: row-reverse;
	}
	
	.column-1 {
		flex: 0 0 20%;
		width: 20%;
		margin-right: 40px;
		margin-bottom: 20px;

		@media @tablet {
			flex: 0 0 30%;
			width: 30%;
		}
		@media @mobile {
			flex: 0 0 100%;
			width: 100%;
			margin: 0;
			order: 2;
		}

	}

	.column-2 {
		flex: 0 0 20%;
		width: 20%;
		margin-right: 40px;
		margin-bottom: 20px;

		@media @tablet {
			display: none;
		}
		@media @mobile {
			display: none;
		}
	}

	.column-3 {
		flex: 0 0 60%;
		width: 60%;
		margin-right: 20px;
		margin-bottom: 20px;
		display: flex;

		@media @tablet {
			flex: 0 0 70%;
			width: 70%;
		}
		@media @mobile {
			flex: 0 0 100%;
			width: 100%;
			margin: 0;
			order: 1;
		}
	}

	.column-4 {
		display: none;
	}

	.megamenu-group {

		&__title {
			margin: 0 0 10px 0;
			color: white;
			font-size: 18px;
			font-weight: 700;
			line-height: 1.2;
			text-align: left;

			@media @mobile {
				color: @heading-colour;
				font-size: 16px;
			}
		}

		&__list {
			margin: 0 0 20px;
			display: block !important;
			text-align: left;

			li {
				position: relative !important;
				color: white;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;

				@media @tablet {
					font-size: 14px;
				}

				@media @mobile {
					font-size: 14px;
				}

				a {
					padding: 0;
					margin-bottom: 10px;
					color: @mm-sub-link-colour;
					font-size: 14px;
					font-weight: 700;
					border-bottom: 1px solid @mm-sub-link-border-colour;

					@media @mobile {
						color: @text-colour;
						font-size: 11px;
						font-weight: 700;
						line-height: 2.5;
						border-bottom-color: fade(black,10%);
					}

					&:hover {
						color: @mm-sub-link-hover-colour;
						border-bottom: 1px solid @mm-sub-link-hover-border-colour;

						@media @mobile {
							color: @text-colour;
							border-bottom-color: fade(black,10%);
						}
					}
				}
			}

		}

	}

	.megamenu-group--used-cars {
		margin: 0 0 40px 0;

		@media @tablet {
			margin: 0 0 30px 0;
		}

		@media @mobile {

			.megamenu-group__title {
				display: none;
			}
		}
	}

	.megamenu-group--used-vans {
		margin: 0 0 40px 0;

		@media @tablet {
			margin: 0 0 30px 0;
		}

		@media @mobile {

			.megamenu-group__title {
				display: none;
			}
		}
	}

	.megamenu-group--brands {
		width: 100%;

		ul {
			margin: 0 -15px 0 0;
			column-count: 4;
			column-gap: 20px;

			@media @tablet {
				column-count: 3;
			}

			@media @mobile {
				column-count: 2;
				margin-bottom: 50px;
			}

			li {
				break-inside: avoid-column;
				overflow: initial;
			}
		}
	}
}`
				}
			],
    };
  },
});


/***** 02. Logo Left *****/

import headerLogoLeft from './assets/screenshots/headerLogoLeft.png';

export const LogoLeft = () => ({
  name: "LogoLeft",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
		<img src="${headerLogoLeft}" alt="" style="max-width: 100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "HTML",
					code: `<!-- Header -->
<header id="header" class="clear-fix">
		<div class="wrapper">
				<div class="container">

						<div class="header">

								<div class="header__left">
										<!-- <div class="contact">
							<ul>
								<li><i class="ci ci-phone"></i><a href="/contact.php" title="Call {v2_NAME}">{v2_TELEPHONE_NUMBER}</a></li>
							</ul>
						</div> -->
								</div>

								<div class="header__main">
										<a href="{SELF_URL}" title="{SITE_NAME}" class="hdr-logo">
												<img src="/img-src/{v2_FOLDER}/theme/logo.png" class="responsive-img" alt="{v2_NAME}">
										</a>
								</div>

								<div class="header__right">
										<div class="flex-column">
												<div class="header__right--contact">
														<ul>
																<li>
																		<i class="ci ci-envelope"></i>
																		<a href="/contact.php">{v2_EMAIL}</a>
																</li>
																<li>
																		<i class="ci ci-phone"></i>
																		<a href="/contact.php">{v2_TELEPHONE_NUMBER}</a>
																</li>
																<li>
																			<i class="ci ci-mobile-alt"></i>
																			<a href="/contact.php">{v2_MOBILE}</a>
																	</li>
														</ul>
												</div>
												<div class="header__right--address tablet-hidden">
														<address>
																{v2_ADDRESS1}
																{v2_ADDRESS2},
																{v2_TOWN},
																{v2_COUNTY},
																{v2_POSTCODE}
														</address>
												</div>
										</div>
								</div>

						</div>

				</div>
		</div>
</header>
<!-- // Header -->`
				},
				{
					tab: "LESS",
					code: `// header
@header-bg-colour: @primary-colour;
@header-text-colour: white;
@header-link-colour: white;
@header-link-hover-colour: @accent-colour;
@header-icon-colour: @accent-colour;
@header-icon-bg-colour: transparent;
@header-social-colour: white;
@header-social-bg-colour: @accent-colour;
@header-social-hover-colour: white;
@header-social-bg-hover-colour: @primary-colour;


#header {
	background: @primary-colour;
	position: static;
	top: 0;
	width: 100%;
	z-index: 999;
	transition: all 0.2s linear;

	@media @mobile{
		border: none;
	}

	.container {
		padding: 0;
		height: auto;
		overflow: visible;
	}

}

.header {
	.flex-display(@display:flex);
	padding: 25px 0;

	@media @tablet {
		padding: 15px 0;
	}
	@media @mobile {
		display: block;
		padding: 0;
	}

	&__left {
		.flex-grow(@grow:1);
		.flex-shrink(@shrink:1);
		.flex-basis(@width: auto);
		.flex-display(@display: flex);
		.justify-content(@justify: flex-end);
		.align-items(@align: center);
		order: 2;

		@media @tablet {
			.flex-basis(@width: auto);
		}
		@media @mobile {
			display: none;
				}
		
	}

	&__main {
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: auto);
		.flex-display(@display: flex);
		.justify-content(@justify: center);
		.align-items(@align: center);
		order: 1;

		.hdr-logo {
			
			img,
			svg {
				height: 55px;
				transition: all 0.1s linear;

				@media @tablet {
					height: 30px;
				}
				@media @mobile {
					height: 25px;
				}
			}
		}
	}

	&__right {
		.flex-grow(@grow:0);
		.flex-shrink(@shrink:0);
		.flex-basis(@width: auto);
		.flex-display(@display: flex);
		.justify-content(@justify: center);
		.align-items(@align: center);
		order: 3;

		@media @tablet {
			.flex-basis(@width: auto);
		}
		@media @mobile {
			display: none;
				}
				
				.flex-column {
						display: flex;
						flex-direction: column;
						align-items: flex-end;
				}

				&--contact,
				&--address {
						margin: 5px 0;			
				}

		&--contact {
						ul {
								display: flex;
								flex-flow: row nowrap;
								li {
										font-size: 14px;
										font-weight: 700;
										.ci {
												margin: 0 4px 0 15px;
												color: white;
										}
								}
						}
						a:hover {
								color: white;
						}
				}
				
				&--address {
						display: flex;
						flex-flow: row nowrap;
						* {
								font-size: 14px;
								font-weight: 700;
								color: white;
						}
				}

	}
}






// Navigation

// Top level
@mm-link-colour: white; // link colours
@mm-link-bg-colour: none;

@mm-link-hover-colour: @primary-colour; // link hover colours
@mm-link-hover-bg-colour: none;

@mm-link-current-colour: @primary-colour;
@mm-link-current-bg-colour: none;

// Sub Menu
@mm-sub-bg-colour: @primary-colour;
@mm-sub-link-colour: white;
@mm-sub-link-border-colour: fade(white,10%);

// hover states
@mm-sub-link-hover-colour: white;
@mm-sub-link-hover-border-colour: @accent-colour;

@mm-icon-colour: white; // arrow icon colour
@mm-icon-size: 16px;
@mm-mobile-icon-size: 12px;

// Mobile mega menu styles

@mm-mobile-height: 50px!important; //
@tab-bar-mobile-height: 44px!important; //

@mm-background-colour: @primary-colour;  // top bar background colour

// Link colours
@mm-mobile-link-colour: @text-colour;
@mm-mobile-link-hover-colour: @accent-colour;
@mm-mobile-link-current-colour: @accent-colour;

// Toggle buttons: use the below for icons on the top menu and tab bar
@toggle-button-colour: white;
@toggle-button-hover-colour: @accent-colour; // sets focus and hover

@transition: ~'all 0.2s linear';






/////////////////////////////////////
// ------- DESKTOP MEGAMENU -------//
/////////////////////////////////////

#primary-navigation  {
	position: static;
	background-color: @accent-colour;
	width: 100%;
	height: 46px;
	z-index: 999;
	transition: all 0.1s linear;
	box-shadow: 0 2px 2px rgba(0,0,0,.2);

	.container {
		margin: 10px auto;
		display: block;
		margin: 0 auto;
		position: relative;
		text-align: center;
		clear: both;
		overflow: visible;
	}

}

.megamenu {
	display: flex;

	&__listitem {
		flex: 1 1 auto;
		position: static!important;

		a&__link, a:visited&__link {
			font-family: @alpha-font;
			color: @mm-link-colour;
			background: @mm-link-bg-colour;
			font-size: 14px;
			line-height: 1;
			font-weight: 600;
			letter-spacing: 0.5px;
			line-height: 46px;
			padding: 0 0px;
			text-transform: uppercase;
			transition: all 0.1s linear;

			@media @tablet{
				font-size: 12px;
			}

			i {
			//   color: @mm-icon-colour;
				font-size: @mm-icon-size;
				line-height: 1;
			}

			&:hover,
			&:focus,
			&:active {
				color: @mm-link-hover-colour !important;
				background: @mm-link-hover-bg-colour!important;
			//   i{
			//     color: @primary-colour;
			//   }
			}
			// dropdown icon


			&--current {
				// background: @mm-link-current-bg-colour;
				background: @mm-link-current-bg-colour;
				color: @mm-link-current-colour!important;
				border-bottom: none!important;
			//   i{
			//       color: @primary-colour;
			//   }

				&:hover,
				&:focus,
				&:active {
					color:  @mm-link-hover-colour!important;
					background: @mm-link-current-bg-colour;
								}
								
							//   i.ci-angle-down-l {
							//       color: white!important;

							//       @media @mobile {
							//           color: @primary-colour!important;
							//       }

							//   }

				// &:after {
				//   content: "";
				//   position: absolute;
				//   bottom: -3px;
				//   left: 0;
				//   right: 0;
				//   height: 3px;
				//   background: @primary-colour;
				// }
			}
		} // End a Link styles
		

		// Desktop hovered state

		&:hover,
		&:active,
		&:focus {
			color: @mm-link-colour;
			background: @mm-link-hover-bg-colour;


			// keeps colour on a link when hovering megasubmenu
			a.megamenu__listitem__link,
			a:visited.megamenu__listitem__link {
								color: @mm-link-hover-colour;
								background: @mm-link-hover-bg-colour;
				@media @mobile {
					color: @mm-mobile-link-colour !important;
				}
			}

			& > .megasubmenu {
				overflow: visible;

				@media @mobile {
					overflow: hidden;
					border: 0px
				}
			}  // end megasubmenu styles


		} // End li__list-item hover styles

	} // End li__list-item




}


.megasubmenu {
	background: none;


	&__list {
			background: @mm-sub-bg-colour;
			margin-right: 0px;
			@media @mobile {
				background: white!important;
			}
		&--brand {

			&:hover,
			&:focus,
			&:active {

			}
			@media @mobile{
				column-count:2;
			}
		}

		&--footlinks{
		}

		&item {
			&--footlink {
				a {
					text-align: left;
				}
			}

			a&__link, a:visited&__link {
				color: @mm-sub-link-colour;
				border-bottom: 1px solid @mm-sub-link-border-colour;
				padding-left: 10px;
				transition: @transition;
				@media @mobile {
					color: @primary-colour;
				}
				&:before{
					.char("angle-right");
					font-family: 'ClickIcons';
					position: absolute;
					left: 0px;
					color: @accent-colour;
					
					@media @mobile {
						color: @primary-colour;
					}
				}
				&:hover,
				&:active,
				&:focus {
					color: @mm-sub-link-hover-colour !important;
					border-bottom: 1px solid @mm-sub-link-hover-border-colour!important;
					transition: @transition;
					@media @mobile {
						color: @accent-colour!important;
					}
				}
			}
		}

	}

}

/////////////////////////////////////
// --------- NAV ADD ONS ----------//
/////////////////////////////////////

// Remove these styles to make megamenu full width

.megamenu {

	&__listitem {
		position: relative!important;
		&#listitem__used-cars--parent,
		&#listitem__used-vans--parent,
		&#listitem__used-bikes--parent {
			position: static!important;
			.megasubmenu {
				left: 0!important;
				width: 100%!important;
			}
		}

		&:hover,
		&:focus,
		&:active{

			// aligns megamenu right for last two links

			&:nth-last-child(2),
			&:last-child{
				& > .megasubmenu {
					right: 0px!important;
				}
			}


			// if link has sub menu adds triangle to link

			&.sub{
			a.megamenu__listitem__link,
			a:visited.megamenu__listitem__link {
					&:before{
						content: '';
						width: 0;
						height: 0;
						border-style: solid;
						border-width: 0 10px 10px 10px;
						border-color: transparent transparent @primary-colour transparent;
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
						margin: 0 auto;
						@media @mobile {
							border-color: transparent transparent white transparent;

						}
					}
				}
			}

		}

	}

	.megasubmenu{
		left: auto;
		width: 100%;
		min-width: 250px;
	}
}




// Notes: Comment out original mobile header styles in the stylesheet.

// Creats header with search and menu icons, reduces size and centers logo

/////////////////////////////////////
// ------ Mobile Nav Header -------//
/////////////////////////////////////



@media @mobile {

	// Adds margin to the body for header and tab bar
	body {
		margin-top: @mm-mobile-height;
		margin-bottom: @tab-bar-mobile-height;
	}

	// Mobile mega menu stlyes

	#primary-navigation{
		height: @mm-mobile-height;
		top: 0px!important;
		margin-top: 0px;
		padding: 0px!important;
		border-top: none;
		background: @header-bg-colour;

		.wrapper {
			padding:0px !important;
		}
	} // End Primary Navigation

	.megamenu{
		display: block;
		background: white;

		&__listitem {

			a&__link, a:visited&__link {
				font-weight: 600;
				background: none!important;
				color: @mm-mobile-link-colour;
				border-bottom: 1px solid fade(black, 10%);

				i{
					line-height: 3;
				}

				&:hover,
				&:focus,
				&:active {
					background: none!important;
					color: @accent-colour!important;

					// i{
					//   color: @primary-colour;
					// }

				}

				&--current {
				background: none!important;
				color: @mm-mobile-link-current-colour!important;
				border-bottom: 1px solid fade(black, 10%)!important;
					&:hover,
					&:focus,
					&:active {
						background: none!important;
						color: @accent-colour!important;

					}
				}

			} // end a link hover styles

			&#listitem__used-cars--parent.toggled,
			&#listitem__used-vans--parent.toggled,
			&#listitem__used-bikes--parent.toggled
			&.toggled{
				position: absolute!important;
			}

		}

		&.toggled {
			top: @mm-mobile-height;
			background: white;
			min-height: calc(~'100vh - @{mm-mobile-height} - @{tab-bar-mobile-height}');
			.megamenu__listitem{
				background: white!important;
			}
			a.megamenu__listitem__link {
				padding-left: 0px !important;
				background: none!important;
				font-size: 12px;
				line-height: 50px;
				&:focus{
					color:@primary-colour!important;
				}
			}
		}
	}

	.megasubmenu{
		border-bottom: 0px!important;
	}





	// Styles for toggle buttons in the mobile nav.

	.toggles {

		.toggle {
			color: @toggle-button-colour;
			&:hover,
			&:visited,
			&:focus {
				color: @toggle-button-hover-colour;
			}
		}

		// Float left or right to change position of nav triggers
		#megamenu__trigger {display: flex; height: 50px;}
		#usedcars__trigger {display: flex; height: 50px;}

	} // END .toggles


	// Creates nav header

	#header {
		margin-top: 50px;
		position: fixed;
		top: 0;
		left: 50%;
		margin-left: -25%;
		width: 50%;
		height: 44px!important;
		margin-top: 0!important;
		margin-bottom: 0!important;
		padding: 3px 0!important;
		background: 0 0;
		z-index: 99;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.container .row{height: auto!important;}

		#hdr-logo {
			padding: 0px!important;
			margin: 0px!important;
			img,
			svg {
				height: 44px;
				line-height: 44px;
			}
		}
	}




// bottom bar CTA
#tab-bar{
	a:focus, a:hover, a:visited:focus, a:visited:hover{
		color: @accent-colour;
	}
}

// Mobile search styles

#dropdown-search {
	background: white;
	&.toggled{
		min-height: calc(~'100vh - @{mm-mobile-height} - @{tab-bar-mobile-height}');
	}
	.dropdown-search {
		&__title {
			color: @primary-colour;
			&:after {
				border-bottom: 3px solid white;
			}
		}
		&__vehtype input[type=radio]:checked+label.dropdown-search__label--radio{
			background: @accent-colour;
			color: white;
		}
		&__label--radio{
			color: @text-colour;
			border-color: white;
			background: @secondary-colour;
		}
		&__label{
			color: @text-colour;
		}
		&__button.button {
			.btn;
			margin: 20px 0 0 0 !important;
		}
	}
	#mobile-search .formgroup select{
		color: @text-colour;
		background: #f5f5f5 url('@{dealer-img}/theme/select-icon.svg') no-repeat;
		background-size: 14px;
		background-position: right 15px center;
		padding: 0 15px!important;
		transition: 0.2s all ease-in-out;
		border-radius: 4px!important;
		outline: 0px;
		height: 40px;
		line-height: 40px;
		border: 1px solid @primary-colour!important;
		appearance: none;
		&:focus,
		&:hover {
			color: @text-colour;
			background: #f5f5f5 url('@{dealer-img}/theme/select-icon-hover.svg') no-repeat;
			background-size: 14px;
			background-position: right 15px center;
		}
	}
}

} // End mobile styles`
				}
			],
    };
  },
});

/***** 03. Logo Center *****/

import headerLogoCentre from './assets/screenshots/headerLogoCentre.png';

export const LogoCentre = () => ({
  name: "LogoCentre",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
		<img src="${headerLogoCentre}" alt="" style="max-width: 100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "HTML",
					code: `<!-- Header -->
<header id="header" class="clear-fix">
	<div class="wrapper">
		<div class="container">

			<div class="header">

				<div class="header__left">
					<div class="contact">
						<ul>
							<!-- <li><a href="{v2_FACEBOOK_URL}" title="Like us on Facebook" target="_blank"><i class="ci ci-facebook-square"></i></a></li>
							<li><a href="{v2_INSTAGRAM_URL}" title="Follow us on Instagram" target="_blank"><i class="ci ci-instagram"></i></a></li> -->
							<li><a href="mailto:{v2_EMAIL}" title="Email {v2_NAME}"><i class="ci ci-envelope-r"></i></a></li>
							<li><a href="/contact.php" title="Contact {v2_NAME}"><i class="ci ci-map-marker-alt"></i> Find Us</a></li>
						</ul>
					</div>
				</div>

				<div class="header__main">
					<a href="{SELF_URL}" title="{SITE_NAME}" class="hdr-logo">
						<img src="/img-src/{v2_FOLDER}/theme/logo.png" class="responsive-img" alt="{v2_NAME}">
					</a>
				</div>

				<div class="header__right">
					<div class="contact">
						<ul>
							<li><i class="ci ci-phone"></i><a href="/contact.php" title="Call {v2_NAME}">{v2_TELEPHONE_NUMBER}</a></li>
							<!-- <li><i class='ci ci-mobile-alt'></i><a href="/contact.php" title="Call {v2_NAME}">{v2_MOBILE}</a></li> -->
						</ul>
					</div>
					<!-- <ul class="icons-social">
						{SEO_WEB_FOOTER_SOCIAL_LINKS}
					</ul> -->
				</div>

			</div>

		</div>
	</div>
</header>
<!-- // Header -->`
				},
				{
					tab: "LESS",
					code: `#header {
	background: white;
	position: relative;
	top: 0;
	width: 100%;
	height: auto;
	z-index: 999;
	transition: all 0.2s linear;

	@media @mobile{
		border: none;
	}

	.container {
		padding: 0;
		height: auto;
		overflow: visible;
	}
	}

	.header {
	.flex-display(@display:flex);
	padding: 20px 0;
	transition: all 0.2s linear;

	@media @tablet {
		padding: 15px 0;
	}
	@media @mobile {
		display: block;
		padding: 0;
	}

	&__left {
		.flex-grow(@grow:0);
		.flex-shrink(@shrink:0);
		.flex-basis(@width: 280px);
		.flex-display(@display: flex);
		.justify-content(@justify: flex-start);
		.align-items(@align: center);
		order: 1;

		@media @tablet {
			.flex-basis(@width: 220px);
		}

		@media @mobile {
			display: none;
		}

		.contact {
			margin-right: 20px;
			padding-right: 20px;

			ul {
				display: flex;
			}

			li {
				// margin-bottom: 10px;
				color: @primary-colour;
				font-size: 20px;
				font-weight: 700;
				margin-left: 10px;
			}

			i {
				font-size: 24px;
				color: @accent-colour;
				margin: 0 5px 0 0;

				@media @tablet{
					font-size: 16px;
				}
				
			}

			a {
				color: @primary-colour;
				line-height: 1;
				font-size: 24px;
				font-family: @alpha-font;
				transition: @transition;
				font-weight: 700;

				&:hover {
					color: @accent-colour;
					transition: @transition;
				}

				@media @tablet {
					font-size: 16px;
				}
			}
		}
	}

	&__main {
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: auto);
		.flex-display(@display: flex);
		.justify-content(@justify: center);
		.align-items(@align: center);
		order: 2;

		.hdr-logo {
			
			img,
			svg {
				height: 80px;
				transition: all 0.2s linear;

				@media @tablet {
					height: 54px;
				}
				@media @mobile {
					height: 26px;
					// max-width: 100%;
				}
			}
		}
	}

	&__right {
		.flex-grow(@grow:0);
		.flex-shrink(@shrink:0);
		.flex-basis(@width: 280px);
		.flex-display(@display: flex);
		.justify-content(@justify: flex-end);
		.align-items(@align: center);
		order: 3;

		@media @tablet {
			.flex-basis(@width: 220px);
		}

		@media @mobile {
			display: none;
		}

		.contact {
			margin-left: 20px;
			padding-left: 20px;

			li {
				text-align: right;
				margin-bottom: 10px;
				&:last-child{
					margin: 0px;
				}
			}

			i {
				font-size: 20px;
				color: @accent-colour;
				margin: 0 5px 0 0;
				@media @tablet{
					font-size: 16px;
				}
			}

			a {
				color: @primary-colour;
				line-height: 1;
				font-size: 24px;
				font-weight: 700;
				font-family: @alpha-font;
				transition: @transition;
				&:hover {
					color: @accent-colour;
					transition: @transition;
				}

				@media @tablet {
					font-size: 16px;
				}

				&:after {
						content: 'Established 1988';
						display: block;
						text-align: right;
						font-size: 16px;
						color: @text-colour;
						margin-top: 3px;

						@media @tablet {
								font-size: 14px;
						}
				}

			}

		}

		
	}

	// hides email on scroll

	#header-email {
		opacity: 1;
		transition: all 0.2s linear;

		@media @tablet {
			display: block;
			opacity: 1;
		}
		@media @mobile {
			display: none;
		}
	}
}`
				}
			],
    };
  },
});
