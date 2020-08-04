import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import uxSidebar from "./assets/screenshots/ux-results-sidebar.png";
import uxFullWidth from "./assets/screenshots/ux-results-fw.png";

export default {
  title: "Results/UX",
};

/***** 01. UXSidebarSearch *****/

export const UXSidebarSearch = () => ({
  name: "UXSidebarSearch",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
		<img src="${uxSidebar}" alt="${name}" style="max-width:100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "HTML",
					code: `<!-- Vehicle Listing -->
<div class="listing {RESULTS_CLASS} veh-loc-{RESULTS_LOCATION_ID} {VEH-ODDEVEN} veh-{RESULTS_ID}">

	<!-- Image Block -->
	<div class="results-image-block">
		<div class="results-image">
			<a href="/{RESULTS_SLUG}" title="{RESULTS_TITLE_MAKEMODEL}">
				<img {RESULTS_IMAGE_1_SRC} {RESULTS_IMAGE_1_SRC_SET} {RESULTS_IMAGE_1_PLACEHOLDER} alt="View our {RESULTS_MAKE} {RESULTS_MODEL}" class="lazy" />
			</a>
		</div>
		<!-- Price -->
		<div class="results-price">
			<div class="results-price__price">
				<div class="price">{CURRENCY_SYMBOL}{RESULTS_WEB_PRICE}</div>
			</div>
			<div class="results-price__finance {FINANCE_STATUS}">
				<div class="label">Finance from</div>
				<div class="monthly">{CURRENCY_SYMBOL}{RESULTS_FINANCE_PAYMENT}</div>
			</div>
		</div>
		<!-- // Price -->
	</div>
	<!-- // Image Block -->

	<!-- Info Block -->
	<div class="results-info-block">
		<!-- Summary -->
		<div class="results-summary">
			<div class="results-summary__title">{RESULTS_YEAR} {RESULTS_MAKE} {RESULTS_MODEL} {RESULTS_VARIANT}</div>
		</div>
		<!-- //Summary -->

		<!-- info -->
		<div class="results-info">
			<ul class="results-spec">
				<li><span class="results-spec__label">Year</span><span class="results-spec__stat">{RESULTS_YEAR}</span></li>
				<li><span class="results-spec__label">Mileage</span><span class="results-spec__stat">{RESULTS_MILEAGE} {ODOMETER_UOM}</span></li>
				<li><span class="results-spec__label">Fuel Type</span><span class="results-spec__stat">{RESULTS_FUEL_TYPE}</span></li>
				<li><span class="results-spec__label">Engine Size</span><span class="results-spec__stat">{RESULTS_ENGINE_SIZE} L</span></li>
				<li><span class="results-spec__label">Transmission</span><span class="results-spec__stat">{RESULTS_GEARBOX}</span></li>
			</ul>
			<ul class="results-key-info">
				{v2_KEY_INFO_LIST}
			</ul>
		</div>
		<!-- // info -->

		<!-- CTA-->
		<div class="results-cta">
			<a href="/{RESULTS_SLUG}" title="View Details" class="results-button results-button--details btn btn--primary">View Details</a>
			<a href="{ENGAGE_URL}" rel="nofollow" title="Reserve Now" target="_blank" class="results-button results-button--details btn btn--engage" {HIDE_ENGAGE} onclick="ga('send', 'event', 'Engage Button', 'click', 'sp_l_fe');">{ENGAGE_LABEL}</a>
		</div>
		<!-- // CTA -->

	</div>
	<!-- // Info Block -->

</div>
<!-- // END Vehicle Listing -->`
				},
				{
					tab: "LESS",
					code: `.results-layout {
	.flex-display;

	// Swap search to the right hand side
	// .flex-direction(@direction: row-reverse);

	&__search {
		position: relative;
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: 320px);
		padding: 20px;
		background: darken(@body-colour,4%);
		box-sizing: border-box;

		@media @lap {
			.flex-basis(@width: 260px);
		}

		@media @tablet {
			.flex-basis(@width: 220px);
			padding: 10px;
		}

		@media @mobile {
			display: none;
			position: fixed;
			top: 50px;
			height: calc(~'100vh - 50px');
			width: 100%;
			margin-top: 0;
			padding: 20px;
			overflow: scroll;
			z-index: 9999;
		}

		#mobile-close {
			display: none;
		}

		&.toggled {
			display: block;

			#mobile-close {
				.flex-display(@display: flex);
				.align-items(@align: center);
				position: absolute;
				top: 10px;
				right: 20px;
				padding: 5px;
				background: darken(@body-colour,8%);
				color: @custom-colour4;
				border-radius: 99px;

				i {
					margin-left: 5px;
					padding: 5px 8px;
					background: fade(black,10%);
					color: @custom-colour4;
					border-radius: 9999px;
				}
			}
		}
	}

	&__listings {
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: auto);
		width: auto;
		background: @body-colour;
	}
}




// Makes position sticky work
#search_page #wrapper {
	overflow: visible;
}

.o-search.o-search--results {
	position: sticky;
	position: -webkit-sticky;
	top: 138px;

	@media @tablet {
		top: 107px
	}

	@media @mobile {
		position: static;
		overflow: scroll;
		overflow-x: hidden;
	}

	.fieldset {
		margin-bottom: 20px;
	}

	.form-group {
		margin-bottom: 5px;
	}

	// Two col on mobile
	@media @mobile {
		.fieldset__wrapper {
			display: flex;
			flex-wrap: wrap;
			margin-right: -10px;
			margin-bottom: -10px;
		}

		.form-group {
			flex: 0 0 calc(~'100% / 2 - 10px');
			margin-right: 10px;
			margin-bottom: 10px;
		}

		.budget-toggle {
			flex: 0 0 calc(~'100% - 10px');
			margin-right: 10px;
			margin-bottom: 10px;

			.form-group {
				flex: 0 0 auto;
				margin-right: 10px;
			}
		}

		.button-group {
			flex: 0 0 calc(~'100% - 10px');
		}
	}
}


// Fix search button if viewport height is smaller than form height

@media screen and (max-height: 720px) {
	.o-search--results {
		max-height: calc(~'100vh - 80px - 38px');
		overflow: scroll;

		.button-group {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 320px;
			padding: 20px;
			background: darken(@body-colour, 4%);
			box-sizing: border-box;
			z-index: 1;

			&:before {
				content: '';
				position: absolute;
				bottom: 100%;
				left: 0;
				height: 15px;
				width: 100%;
				background: linear-gradient(to top, fade(black, 10%), fade(fade(black, 10%), 0%));
			}
		}

		.fieldset--price {
			margin-bottom: 100px !important; // Safari fix - replaces the height lost from the button fixing
		}
	}
}

@media screen and (max-height: 720px) and (max-width: 1279px) {
	.o-search--results {

		.button-group {
			width: 260px !important;
		}
	}
}

@media screen and (max-height: 720px) and (max-width: 979px) {
	.o-search--results {

		.button-group {
			width: 220px !important;
			padding: 20px 10px !important;
		}
	}
}

@media screen and (max-height: 720px) and (max-width: 739px) {
	.o-search--results {
		max-height: calc(~'100vh - 80px - 50px') !important;

		.button-group {
			width: 100% !important;
			padding: 20px !important;
		}
	}
}

// re-positions the button if the site hits the footer
.o-search--results.at-foot {
	overflow: visible !important;
	max-height: unset !important;

	.button-group--search {
		position: unset !important;
		bottom: unset !important;
		left: unset !important;
		width: unset !important;
		padding: unset !important;
		background: unset !important;
		z-index: unset !important;

		&:before {
			content: none;
		}
	}
}


#results {
	overflow: hidden;
}



.super-banner {
	padding: 0 !important;
}



// Filters

.res-filt {
	position: relative;
	padding: 20px;
	clear: left;
	box-sizing: border-box;

	@media @tablet {
		padding: 10px;
	}

	@media @mobile {
		.align-items(@align: stretch);
		padding: 0;
		margin-top: 50px;
		margin-right: -2px;
		margin-bottom: 60px;
	}

	&--top {
		border-bottom: 1px solid darken(@body-colour,7%);
	}
	&--bottom {
		border-top: 1px solid darken(@body-colour,7%);
		border-bottom: 1px solid darken(@body-colour,7%);
	}

	&__wrapper {
		.flex-display(@display: flex);
		.align-items(@align: center);
		.justify-content(@justify: space-between);
		margin-right: -20px;
		margin-bottom: -10px;

		@media @mobile {
			margin-bottom: 0;
		}
	}

	&__showing {
		flex: 0 0 auto;
		margin-bottom: 10px;

		@media @lap {
			font-size: 12px;
		}

		.hide-me {
			@media @lap {
				display: none;
			}
		}
	}

	&__pagination {
		flex: 0 0 auto;
		margin: 0 auto;
		margin-bottom: 10px;

		@media @mobile {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			margin: 0 auto;
			border-bottom: 1px solid darken(@body-colour, 7%);
		}
	}

	&__mobile-filters {
		display: none;

		@media @mobile {
			position: fixed;
			top: 50px;
			left: 0;
			height: 50px;
			width: calc(~'(100% / 2)');
			display: block;
			background: @primary-colour;
			z-index: 10;
		}

		a {
			background: @primary-colour;
			color: white;
			font-family: @heading-font;
			font-size: 14px;
			font-weight: 700;
			white-space: nowrap;
			padding: 8px 4px;
			&:hover {
				color: @accent-colour;
			}

			i {
				color: @accent-colour;
				font-weight: 400;
			}
		}
	}

	&__sortform {
		flex: 0 0 auto;
		margin-right: 20px;
		margin-bottom: 10px;
		
		@media @ipad {
			select {
				font-size: 12px;
			}
		}

		@media @mobile {
			position: fixed;
			top: 50px;
			right: 0;
			height: 50px;
			width: calc(~'(100% / 2)');
			display: block;
			margin-right: 0;
			padding: 8px;
			background: @custom-colour1;
			box-sizing: border-box;
			z-index: 10;

			select {
				background: #f5f5f5 url('@{dealer-img}/theme/select-icon.svg') no-repeat;
				background-size: 12px 12px;
				background-position: right 5px center;
				border: 0;
				box-shadow: none;
			}
		}
	}

	&__layout-toggle {
		margin-right: 20px;
		margin-bottom: 10px;

		@media @ipad {
			display: none;
		}
	}
}




// pagination

ol.pagenavi {
	.flex-display(@display: flex);
	.flex-direction(@direction: row-reverse);
	.justify-content(@justify: center);

	@media @mobile {
		float: none !important;
		.flex-display(@display: flex) !important;
	}

	li {
		margin: 0 5px 0 0;

		a {
			.flex-display(@display: flex);
			.justify-content(@justify: center);
			.align-items(@align: center);
			width: 30px;
			height: 30px;
			padding: 0;
			background: @custom-colour2;
			color: white;
			font-weight: 600;
			border-radius: 99px;

			&:hover {
				background: @primary-colour;
				color: white;
			}

			&.active {
				background: @accent-colour;
				color: white;
			}

			&.next,
			&.previous {
				width: auto;
				background: transparent;
				color: @text-colour;
				font-size: 14px;
				white-space: nowrap;

				@media @tablet {
					font-size: 10px;
				}

				&:hover {
					background: transparent;
					color: @primary-colour;
				}
			}
		}

		&.pagenavi__next {
			margin-left: 10px;

			i {
				margin-left: 5px;
			}
		}

		&.pagenavi__prev {
			margin-right: 10px;

			i {
				margin-right: 5px;
			}
		}

	}
}

.mobile-filters {
	.flex-display(@display: flex);
	.align-items(@align: center);
	.justify-content(@justify: center);
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

#sortform,
#sortform_bottom {
	width: 100%;
	select {
		margin: 0 !important;
		height: 36px;
	}
	label {
		display: none;
	}
	.select {
		width: 100%;
	}
}





// Showroom Layout

.showroom-layout-toggle {
	margin: 0;
	.flex-display(@display: flex);
	.justify-content(@justify: center);

	button {
		.flex-display(@display: flex);
		.align-items(@align: center);
		padding: 5px !important;
		margin: 0 0 0 5px !important;
		background: none;
		text-shadow: none;
		border: 0;
		box-shadow: none;
		outline: none;

		i {
			font-size: 24px !important;
			margin: 0 !important;
			color: #9b9b9b !important;
		}

		span {
			font-size: 14px !important;
			font-weight: bold !important;
			text-transform: uppercase !important;
			color: #9b9b9b !important;
		}

		&.toggled {

			i {
				color: @primary-colour !important;
			}
		}
	}
}

.vehicle-results-list {
	padding: 20px;
	box-sizing: border-box;

	@media @tablet {
		padding: 10px;
	}

	@media @mobile {
		padding: 0 10px 10px;
	}
}

.results-vehicleresults {
	margin: 0 -20px -20px 0;
	.flex-display(@display: flex);
	.flex-direction(@direction: column);
}

.listing {
	.flex-display(@display: flex);
	margin: 0 20px 20px 0;
	background: white;
	border: 1px solid darken(@body-colour, 7%);
	border-radius: 5px;
	box-shadow: 0 3px 3px #eaeff7;
	box-sizing: border-box;
	overflow: hidden;

	@media @ipad {
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: calc(~'100% / 1 - 20px'));
		.flex-wrap(@wrap: wrap);
		width: calc(~'100% / 1 - 20px');
	}

	@media @mobile {
		.flex-direction(@direction: column);
		flex-wrap: wrap;
	}

	.results-image-block {
		position: relative;

		@media @lap {
			.flex-basis(@width: 320px);
			max-width: 320px;
		}

		@media @tablet {
			.flex-basis(@width: 220px);
			max-width: 220px;
		}

		@media @ipad {
			flex: 0 0 100%;
			.flex-grow(@grow: 0);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: 100%);
			width: 100%;
			max-width: 100%;
		}

		img {
			width: 100%;
		}
	}

	.results-info-block {
		position: relative;
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: auto);
		width: 100%;
		font-family: @body-font;
		overflow: hidden;

		@media @ipad {
			width: auto;
			display: block;
		}
	}

	.results-summary {
		.flex-display(@display: flex);
		.align-items(@align: center);
		margin: 0 0 30px 0;

		@media @ipad {
			margin: 0;
		}

		&__title {
			margin-right: 10px;
			font-family: @heading-font;
			font-size: 24px;
			line-height: 1.2;
			font-weight: 700;
			color: @heading-colour;

			@media @lap {
				font-size: 20px;
			} 

			@media @tablet {
				font-size: 18px;
			}
			@media @ipad {
				font-size: 16px;
			}
		}

		&__subtitle {
			font-size: 16px;
			line-height: 1.2;
			color: @text-colour;

			@media @tablet {
				font-size: 15px;
			}
			@media @ipad {
				font-size: 14px;
			}
		}

	}

	.results-price {
		.flex-display(@display: flex);
		width: 100%;
		box-sizing: border-box;
		min-height: 60px;

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
	}

	.results-info {
		.flex-display(@display: flex);

		@media (max-width:1200px) {
			.flex-direction(@direction: column);
		}

		@media @ipad {
			margin-top: 15px;
		}

		.results-spec,
		.results-key-info {
			flex: 0 0 50%;
			.flex-grow(@grow: 0);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: 50%);
			width: 50%;

			li {
				display: flex;
				margin: 0 0 5px 0;
				line-height: 26px;
				border-bottom: 1px solid @custom-colour1;

				@media @mobile {
					font-size: 14px;
				}

				.results-spec__label,
				.results-spec__stat {
					flex: 0 0 50%;
					.flex-grow(@grow: 0);
					.flex-shrink(@shrink: 0);
					.flex-basis(@width: 50%);
					width: 50%;
					float: left;
				}

				.results-spec__stat {
					color: @primary-colour;
				}

			}

		}

		.results-spec {

			@media (max-width: 1200px) {
				flex: 0 0 100%;
				.flex-grow(@grow: 0);
				.flex-shrink(@shrink: 0);
				.flex-basis(@width: 100%);
				width: 100%;
			}

			@media @ipad {
				li:first-child {
					display: none;
				}
			}
		}

		.results-key-info {

			@media (max-width: 1200px) {
				display: none;
			}

			li {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			span {
				margin: 0 5px 0 0;
				color: @primary-colour;
				line-height: 24px;
			}
		}
	}

	.results-cta {
		.flex-display(@display: flex);
		flex-wrap: wrap;
		position: absolute;
		bottom: 20px;
		margin-right: -20px;
		margin-bottom: -10px;
	}

	.results-button,
	.btn-engage {
		.btn;
		display: inline-block;
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: auto);
		width: auto;
		padding: 0 30px;
		margin-right: 20px !important;
		margin-bottom: 10px !important;
		line-height: 45px !important;

		@media @tablet {
			.flex-grow(@grow: 1);
			.flex-shrink(@shrink: 1);
			.flex-basis(@width: 140px);
		}
		
		@media @ipad {
			padding: 0 15px;
		}
	}
}


//////////////////////////////////////////
/* ------------ Grid View  ------------ */
//////////////////////////////////////////

.results-vehicleresults.grid-view {
	.flex-display(@display: flex);
	.flex-wrap(@wrap: wrap);
	.flex-direction(@direction: row);

	.listing {
		position: relative;
		.flex-display(@display: flex);
		.flex-direction(@direction: column);
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: calc(~'100% / 4 - 20px'));
		width: calc(~'100% / 4 - 20px');
		padding: 0;

		@media @desktop {
			.flex-grow(@grow: 0);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: calc(~'100% / 3 - 20px'));
			width: calc(~'100% / 3 - 20px');
		}

		@media @lap {
			.flex-grow(@grow: 0);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: calc(~'100% / 2 - 20px'));
			width: calc(~'100% / 2 - 20px');
		}

		@media @ipad {
			display: block;
			.flex-grow(@grow: 0);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: calc(~'100% / 1 - 20px'));
			width: calc(~'100% / 1 - 20px');
		}

		.results-image-block {
			.flex-grow(@grow: 0);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: auto);
			width: auto;
			max-width: 100%;
			margin: 0;

			img {
				object-fit: initial;
				height: auto;
				width: 100%;
			}
		}

		.results-info-block {
			position: static;
			.flex-display();
			.flex-direction(@direction: column);
			width: auto;
			padding: 20px;
		}

		.results-summary {
			width: 100%;
			margin: 0 0 20px 0;

			&__title {
				font-size: 20px;
				@media @tablet {
					font-size: 18px;
				}
			}

			&__subtitle {
				font-size: 14px;
			}

		}

		.results-price {
			position: static;
			width: 100%;
			box-sizing: border-box;
			margin: 0;

			&__price {
				&:before {
					display: none;
				}
			}
		}

		.results-info {
			.flex-display(@display: flex);
			.flex-direction(@direction: column);
			margin-bottom: 20px;
		}

		.results-spec {
			width: 100%;
			li {
				font-size: 14px;
			}
		}

		.results-key-info {
			display: none;
		}

		.results-savings {
			margin: 20px 0 0 0;
		}

		.results-cta {
			position: relative;
			bottom: 0;
			margin-top: auto;
		}

		.results-button {
			.flex-grow(@grow: 1);
			.flex-shrink(@shrink: 1);
			.flex-basis(@width: 140px);
			padding: 0 10px;
		}
	}
}



// list view

.results-vehicleresults.list-view {

	.listing {
		@media @tablet {
			.flex-wrap(@wrap: wrap);
		}
		
		.results-image-block {
			flex: 0 0 480px;
			.flex-grow(@grow: 0);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: 480px);
			max-width: 480px;

			@media @lap {
				flex: 0 0 320px;
				.flex-grow(@grow: 0);
				.flex-shrink(@shrink: 0);
				.flex-basis(@width: 320px);
				max-width: 320px;
			}

			@media @tablet {
				.flex-grow(@grow: 0);
				.flex-shrink(@shrink: 0);
				.flex-basis(@width: 100%);
				max-width: 100%;
			}
		}

		.results-info-block {
			padding: 20px 20px 85px 20px;

			@media @tablet {
				padding: 20px;
			}
		}

		.results-cta {
			@media @tablet {
				position: relative;
				bottom: 0;
				margin-top: 20px;
			}
		}
	}
}



.results-finance-section {
	margin: 0;
	padding: 50px 0;

	@media @tablet {
		padding: 40px 0;
	}

	@media @mobile {
		padding: 30px 0;
	}

	.results-finance-example__title {
		display: block;
		font-family: @heading-font;
		font-weight: 700;
		text-align: center;
	}
}


.makesmodels {
	padding: 50px 0;
	background: white;
	border-top: 1px solid darken(@body-colour, 7%);
	border-bottom: 1px solid darken(@body-colour, 7%);

	@media @tablet {
		padding: 40px 0;
	}

	@media @mobile {
		padding: 30px 0;
	}

	&__header {
		color: @heading-colour;
		font-family: @heading-font;
		font-weight: 700;
		text-align: center;
	}

	a.makesmodels__listitem__link,
	a:visited.makesmodels__listitem__link {
		color: @text-colour;

		&:hover {
			color: @primary-colour;
			text-decoration: none;
		}
	}
}

#search_page #webzation-text {
	padding: 50px 0;
	background: white;
	overflow: hidden;
	clear: both;

	@media @tablet {
		padding: 40px 0;
	}

	@media @mobile {
		padding: 30px 0;
	}
}

.breadcrumb {
	background: @primary-colour;

	.breadcrumb__listitem a:hover,
	.breadcrumb__listitem a:visited:hover {
		color: @accent-colour;
	}
}`
				},				
			],
    };
  },
});

/***** 02. UXFullWidth *****/
export const UXFullWidth = () => ({
  name: "UXFullWidth",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
			<img src="${uxFullWidth}" alt="${name}" style="max-width:100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "HTML",
					code: `<div class="l-row-block l-row-block--search-results">
<div class="l-wrapper">
		<div class="l-container">

				<div data-advanced-search="main" class="o-search o-search--results">
						<a id="mobile-close">Close <i class="far fa-close"></i></a>
						<form method="get" action="/search_page.php">
								<div class="inner-wrapper">

										<input type="hidden" id="search-instance" value="{{ instance }}">
										<input type='hidden' value='0' name='budgetswitch'>
										<input type='hidden' value='{{ vehicle_type }}' name='vehicle_type'>
										{% if sort %}<input type="hidden" name="sort" value="{{ sort }}">{% endif %}

										<div class="fieldset fieldset--search">
												<h2 class="search__title"><i aria-hidden="true" class="fa fa-search"></i> Search</h2>

												{% for key, field in fields if field.position == "main"%}
														<div class="form-group form-group--{{ loop.index }}">
																<select name="{{ key }}" id="{{ key }}" data-search-field="main" data-search-filters="{{ field.filters|keys|join(",") }}">
																		<option value="{% if values[key] != "" %}{{ values[key] }}{% endif %}">{{ field.display }}</option>
																</select>
														</div>
												{% endfor %}
										</div>

										<div class="fieldset fieldset--price">

												{% if "budgetmin" in fields|keys %}
														<div class="budget-toggle">
																<h2 class="search__title"><i aria-hidden="true" class="fa fa-gbp"></i> Price</h2>
																{% if settings['display_budget_toggle'] == '1' %}
																		<div class="toggle-wrapper">
																				<div class="price">Cash Price</div>
																				<div class="form-group form-group--budgetswitch">
																						<input type="checkbox" class="a-toggle" name="budgetswitch" id="budgetswitch" data-search-field value="1"{% if budget_toggled %} checked {% endif %}>
																						<label for="budgetswitch" data-checked="Monthly Price" data-unchecked="Total Price"></label>
																				</div>
																				<div class="finance">Finance p/m</div>
																		</div>
																{% else %}
																		<input type="hidden" name="budgetswitch" data-search-field value="{% if budget_toggled %}1{% endif %}">
																{% endif %}
														</div>
												{% endif %}

												{% for key, field in fields if field.position == "section1" %}
														<div class="form-group form-group--{{ loop.index }}">
																<select name="{{ key }}" id="{{ key }}" data-search-field="aside" data-search-filters="{{ field.filters|keys|join(",") }}">
																		<option value="{% if values[key] != "" %}{{ values[key] }}{% endif %}">{{ field.display }}</option>
																</select>
														</div>
												{% endfor %}

												<!-- Fieldset Price -->
												{% if "budgetmin" in fields|keys %}
														<!-- Button Group -->
														<div class="button-group button-group--search">
																{% if settings['display_reset_button'] == "1" %}
																		<button type="button" class="a-btn reset-button" data-search-reset><span aria-hidden="true" class="fa fa-history"></span> Reset</button>
																{% endif %}
																<button type="submit" class="a-btn search-button"><span aria-hidden="true" class="fa fa-search"></span> Search {% if settings['display_search_button_counter'] %}(<span data-search-total></span>){% endif %}</button>
														</div>
														<!-- // Button Group -->
												{% endif %}

												{% if "budgetmin" not in fields|keys %}
														<!-- Button Group -->
														<div class="button-group button-group--search">
																{% if settings['display_reset_button'] == "1" %}
																		<button type="button" class="a-btn reset-button" data-search-reset><span aria-hidden="true" class="fa fa-history"></span> Reset</button>
																{% endif %}
																<button type="submit" class="a-btn search-button"><span aria-hidden="true" class="fa fa-search"></span> Search</button>
														</div>
														<!-- // Button Group -->
												{% endif %}

										</div>

								</div>
						</form>
				</div>

		</div>
</div>
</div>

<script src="/assets/js/themev2/search.min.js?v={{ cache_buster }}" defer></script>`
				},
				{
					tab: "LESS",
					code: `@cellsinrow: 4;
@cellsinrow-mob: 2;

@toggleWidth: 50px;
@toggleHeight: 20px;
@toggleBorderWidth: 8px;
@toggleWidth-mob: 40px;

.l-row-block--search-results {
	background: @custom-colour1;
	padding: 30px 0;

	@media @tablet {
		padding: 30px 0;
	}

	.l-wrapper {
		display: block;
		padding: 0 10px;
		width: auto;
	}
	.l-container {
		background: none;
		max-width: @container-max-width;
		margin: 0 auto;
	}
}

.o-search--results{

	.inner-wrapper{
		display: flex;
		flex-wrap: wrap;
		margin: 0 -5px;
	}

	.search__title{
		font-family: @alpha-font;
		color: @heading-colour;
		flex-grow: 1;
		flex-basis: 100%;
		width: 100%;
		margin: 0 5px 7px 5px;
		@media @tablet {
			font-size: 16px;
		}
		@media @mobile {
				text-align: center;
		}
	}

	.fieldset--search{
		flex-grow: 1;
		flex-shrink: 1;
		width: auto;
		flex-basis: auto;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		padding-right: 20px;
		box-sizing: border-box;
		flex: 0 0 calc(~'100% - 300px');
		width: calc(~'100% - 300px');

		@media @tablet{
			flex: 0 0 100%;
			width: 100%;
			padding-right: 0px;
		}

		.form-group{
			margin: 5px;
			flex: 0 0 calc(~'100% / @{cellsinrow} - 10px');
			width: calc(~'100% / @{cellsinrow} - 10px');
			@media @mobile{
				flex: 0 0 calc(~'100% / @{cellsinrow-mob} - 10px');
				width: calc(~'100% / @{cellsinrow-mob} - 10px');
			}
		}

	}

	.fieldset--price{
		flex-shrink: 0;
		width: 300px;
		flex-basis: 300px;
		display: flex;
		flex-wrap: wrap;
		@media @tablet{
			width: 100%;
			flex: 0 0 100%;
		}
		.search__title{
			flex-grow: 0;
			flex-basis: auto;
			width: auto;
			// hide
			display: none;
		}

		.budget-toggle{
			display: flex;
			flex-grow: 1;
			width: 100%;
			flex-basis: 100%;
			margin: 0 5px;
			height: 35px;
			align-items: center;
			justify-content: space-between;
			@media @tablet{
				justify-content: flex-start;
				margin-top: 10px;
			}
			@media @mobile{
				justify-content: center;
			}
			.toggle-wrapper{
				flex-grow: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				.price,
				.finance{
					color: @heading-colour;
					font-size: 14px;
					font-weight: 500;
					// margin-bottom: 10px;
				}
			}
		}
		.form-group{
			flex-grow: 1;
			margin: 10px 5px 0;
		}
		.form-group--budgetswitch{
			flex-grow: 0;
		}
		.button-group{
			flex-grow: 1;
			width: 100%;
			margin: 0 0px 5px 0px;
			display: flex;
			align-items: flex-end;
			padding: 5px;

			@media @tablet{
				margin: 5px 0;
			}
			.search-button{
				color: @button-text-colour;
				background: @button-bg-colour;
				line-height: 40px;
				height: 40px; 
				width: 100%;
				.btn;
				margin: -5px 0!important;

				&:hover {
					color: @button-text-hover-colour;
					background: @button-bg-hover-colour;
				}
			}
			.reset-button{
				display: none;
			}
		} //end button group
	}

	.a-toggle {
		display: none;

		+ label {
			height: @toggleHeight;
			width: @toggleWidth;
			position: relative;
			font-size: 14px;
			padding: 0;
			cursor: pointer;
			background: @accent-colour!important;
			border-radius: @toggleHeight * (50/100);

			@media @mobile{
				width: @toggleWidth-mob;
				margin: 0;
			}

			&:before {
				position: absolute;
				top: 0px;
				left: 0;
				content: ' ';
				z-index: 1;
				height: @toggleHeight;
				width: @toggleHeight;
				border-radius: percentage(50/100);
				background-color: white!important;
				transition: all 0.3s ease-in-out;
			}
		}

		&:not(:checked) + label { }

		&:checked + label {
			&:before {
				left: @toggleWidth - @toggleHeight;
				@media @mobile{
					left: @toggleWidth-mob - @toggleHeight;
				}
			}
		}
	} //end

} //end o-search`
				},
				{
					tab: "JS",
					code: `$('#mobile-open').click(function () {
						$(".results-layout__search").toggleClass("toggled");
				});
		
				$('#mobile-close').click(function () {
						$(".results-layout__search").toggleClass("toggled");
				});`
				},				
			],				
    };
  },
});

/***** 03. UXRefineButton *****/

import uxRefineButton from './assets/screenshots/ux-refine-button.png'

export const UXRefineButton = () => ({
  name: "UXRefineButton",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
			<img src="${uxRefineButton}" alt="${name}" style="max-width:100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "HTML",
					code: `<!-- Filters & Webzation -->
<div class="res-filt res-filt--top">

	<div class="res-filt__wrapper">

		<div class="res-filt__mobile-filters">
			<div class="mobile-filters">
				<div class="mobile-filters__search">
					<a id="mobile-open" class="btn"><i class="fal fa-sliders-h"></i> Refine Search</a>
				</div>
			</div>
		</div>

		<div class="res-filt__showing mobile-hidden">
			<div id="vehicle-search-showing-top">
				<span class="hide-me">Showing </span><span><strong>{FIRST_RESULT} - {LAST_RESULT}</strong> <span class="hide-me">vehicles
					</span>of <strong>{NUM_RESULTS}</strong></span>
			</div>
		</div>

		<!-- Sort -->
		<div class="res-filt__sortform">
			<form class="alpha" name="sortform" id="sortform" action="/search_page.php?{RESULTS_QUERY_STRING}" method="GET">
				<label class="alpha mobile-hidden tablet-hidden">Sort</label>
				{SORT_SELECT}
			</form>
		</div>

	</div>

</div>
<!-- // Filters & Webzation -->`
				},
				{
					tab: "LESS",
					code: `.results-layout {
// .flex-display;

// Swap search to the right hand side
// .flex-direction(@direction: row-reverse);

&__search {
	position: absolute;
	left: -320px;
	height: calc(~'100vh - 43px');
	width: 320px;
	// .flex-grow(@grow: 0);
	// .flex-shrink(@shrink: 0);
	// .flex-basis(@width: 320px);
	padding: 20px;
	background: darken(@body-colour, 4%);
	z-index: 10;
	box-shadow: 0 5px 10px fade(black,15%);
	box-sizing: border-box;
	transition: left .2s linear;

	&.stick {
		position: fixed;
		top: 43px;

		@media @tablet {
			top: 37px;
		}

		&.at-foot {
			position: absolute;
		}
	}

	@media @lap {
		// .flex-basis(@width: 260px);
	}

	@media @tablet {
		height: calc(~'100vh - 37px');
		// .flex-basis(@width: 220px);
		padding: 10px;
	}

	@media @mobile {
		display: none;
		position: fixed;
		top: 50px;
		height: calc(~'100vh - 50px');
		width: 100%;
		margin-top: 0;
		padding: 20px;
		overflow: scroll;
		z-index: 9999;
	}

	#mobile-close {
		display: none;
	}

	.button-group--search {
		display: none !important;
	}

	&.toggled {
		display: block;
		left: 0;

		.button-group--search {
			display: block !important;
		}

		#mobile-close {
			.flex-display(@display: flex);
			.align-items(@align: center);
			position: absolute;
			top: 0px;
			right: 0px;
			padding: 5px 5px;
			background: darken(@body-colour,8%);
			color: @custom-colour4;
			border-radius: 99px;
			font-size: 14px;

			@media @mobile {
				top: 10px;
				right: 20px;
			}

			i {
				margin-left: 5px;
				padding: 5px 8px;
				background: fade(black,10%);
				color: @custom-colour4;
				border-radius: 9999px;
				font-size: 10px;
			}
		}
	}
}

&__listings {
	.flex-grow(@grow: 1);
	.flex-shrink(@shrink: 1);
	.flex-basis(@width: auto);
	width: auto;
	background: @body-colour;
}
}`
				},
				{
					tab: "JS",
					code: `  // Toggles for refine search

$('#mobile-open').click(function () {
	$(".results-layout__search").toggleClass("toggled");
});

$('#mobile-close').click(function () {
	$(".results-layout__search").toggleClass("toggled");
});`
				},
			],
      userguide: {
        type: "text",
        content: "Why am I moving?",
      },
    };
  },
});