import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import uxDtDefault from "./assets/screenshots/ux-dt-default.png";

export default {
  title: "Details/UX",
};

/***** 01. DetailsUX *****/

export const DetailsUX = () => ({
  name: "DetailsUX",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
			<img src="${uxDtDefault}" alt="" style="max-width: 100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "HTML",
					code: `<div id="detail-pg">
<!-- Detail -->
<div id="detail" class="detail car-{DETAIL_ID} {YOUTUBE_CLASS} veh-loc-{LOCATION_ID}">

	<!-- Top Section -->
	<div class="dt-top-section clear-fix">

		<div class="dt-main clear-fix">

			<!-- Back button -->
			<div class="dt-back-button">
				<a href="#" class="back" title="Back to showroom"><i class="far fa-chevron-left" aria-hidden="true"></i>
					<span>Back to </span>Showroom</a>
			</div>
			<!-- // Back button -->

			<!-- summary -->
			<div class="dt-summary">
				<div class="dt-summary__badge">
					<img data-src="/assets/images/brands/{v2_VEHICLE_IMAGE_BRAND}" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="{v2_VEHICLE_IMAGE_ALT_BRAND}" class="lazy"></div>
				<div class="dt-summary__text">
					<h1 class="dt-summary__title">{DETAIL_MAKE} {DETAIL_MODEL}</h1>
					<h2 class="dt-summary__subtitle">{DETAIL_VARIANT} {DETAIL_TITLE_KSP}</h2>
				</div>
			</div>
			<!-- //summary -->

			<!-- Detail Image Block -->
			<div class="dt-image-block">
				{DETAIL_360_GALLERY}
			</div>
			<!-- // Detail Image Block -->


			<!-- Detail Info Block -->
			<div class="dt-info-block">

				<!-- Detail CTA -->
				<div class="dt-cta">
					{v2_DETAIL_PAGE_ACTIONS}
				</div>
				<!-- Detail CTA -->

				<!-- Detail Factory Fitted -->
				<div class="dt-factory-fitted" {SHOW_HIDE_COSTED_OPTIONS}>
					<div class="dt-factory-fitted__title">This car includes {CURRENCY_SYMBOL}{COSTED_OPTIONS_TITLE_EXTRA_AMOUNT} worth of fitted extras</div>
					<div class="dt-factory-fitted__list">{COSTED_OPTIONS_LIMITED_UL}</div>
					<div class="dt-factory-fitted__link"><a href="#accordion-tech--options" data-trigger="#accordion-tech--options" title="{v2_NAME}">View More</a></div>
				</div>
				<!-- // Detail Factory Fitted -->

			</div>
			<!-- // Detail Info Block -->


			<!-- Detail Spec List -->
			<div class="dt-spec">
				<ul class="dt-spec-list">
					<li><span class="dt-spec-list__label">Year of Reg</span><span class="dt-spec-list__stat">{DETAIL_YEAR}</span></li>
					<li><span class="dt-spec-list__label">Registration</span><span class="dt-spec-list__stat">{DETAIL_REGISTRATION}</span></li>
					<li><span class="dt-spec-list__label">Mileage</span><span class="dt-spec-list__stat">{DETAIL_MILEAGE} {ODOMETER_UOM}</span></li>
				</ul>
				<ul class="dt-spec-list">
					<li><span class="dt-spec-list__label">Engine Size</span><span class="dt-spec-list__stat">{DETAIL_ENGINE_SIZE} cc</span></li>
					<li><span class="dt-spec-list__label">Colour</span><span class="dt-spec-list__stat">{DETAIL_COLOUR}</span>
					</li>
					<li><span class="dt-spec-list__label">Previous owners</span><span class="dt-spec-list__stat">{DETAIL_OWNERS}</span>
					</li>
				</ul>
				<ul class="dt-spec-list">
					<li><span class="dt-spec-list__label">Body Style</span><span class="dt-spec-list__stat">{DETAIL_BODY_TYPE}</span></li>
					<li><span class="dt-spec-list__label">Transmission</span><span class="dt-spec-list__stat">{DETAIL_GEARBOX}</span></li>
					<li><span class="dt-spec-list__label">Fuel Type</span><span class="dt-spec-list__stat">{DETAIL_FUEL_TYPE}</span></li>
				</ul>
				<ul class="dt-spec-list">
					<li><span class="dt-spec-list__label">Insurance group</span><span class="dt-spec-list__stat">{DETAIL_INSURANCE_GROUP}</span></li>
					<li><span class="dt-spec-list__label">6 mths Road Tax</span><span class="dt-spec-list__stat">{CURRENCY_SYMBOL}{DETAIL_RFL_6_MONTHS}</span></li>
					<li><span class="dt-spec-list__label">12 mths Road Tax</span><span class="dt-spec-list__stat">{CURRENCY_SYMBOL}{DETAIL_RFL_12_MONTHS}</span></li>
				</ul>
			</div>
			<!-- // Detail Spec List -->
		</div>
		<!-- // main -->

		<!-- Detail Sidebar -->
		<div class="dt-sidebar">

			<!-- Detail View Counter -->
			{v2_VEHICLE_LOOKUP_TRACKER}
			<!-- //Detail View Counter -->


			<!-- Detail Retail Price -->
			<div class="dt-retail-price">
				<div class="dt-price">{CURRENCY_SYMBOL}{DETAIL_WEB_PRICE}</div>

				<div class="dt-was-price"><span class="price-was">{DETAIL_WAS}</span> <span class="price-saving">{DETAIL_SAVING}</span></div>

				{DETAIL_SIDEBAR_RESERVE_BUTTON}

			</div>
			<!-- // Detail Retail Price -->


			<!-- Detail Retail Price -->
			<div class="dt-finance-price {FINANCE_STATUS}">
				<div class="dt-finance"><span class="label">Finance from</span>{CURRENCY_SYMBOL}<span id="nop_vehicle_id_{v2_FP_RESULTS_ID}">{RESULTS_FINANCE_PAYMENT}</span></div>
				<div class="dt-finance-button">
					<a href="#finance-section" title="Apply for finance on this vehicle" class="btn">Apply for finance</a>
				</div>
				<div class="dt-finance-button--cfc">{CFC_BUTTON}</div>
			</div>
			<!-- // Detail Retail Price -->

			<!-- Detail Finance example -->
			<div class="dt-finance-example {FINANCE_STATUS}" id="detail-trigger">
				<div class="dt-finance-example__title">Finance example</div>
				<div class="dt-finance-figure dt-finance-figure--product">
					<span class="label">Product</span>
					<span class="stat">{DETAIL_FACILITY_TYPE}</span>
				</div>
				<div class="dt-finance-figure dt-finance-figure--price">
					<span class="label">Price</span>
					<span class="stat">{CURRENCY_SYMBOL}{DETAIL_WEB_PRICE}</span>
				</div>
				<div class="dt-finance-figure dt-finance-figure--deposit">
					<span class="label">Deposit</span>
					<span class="stat">{CURRENCY_SYMBOL}{DETAIL_TOTAL_DEPOSIT}</span>
				</div>
				<div class="dt-finance-figure dt-finance-figure--credit-amount">
					<span class="label">Credit Amount</span>
					<span class="stat">{CURRENCY_SYMBOL}{DETAIL_ADVANCE}</span>
				</div>
				<div class="dt-finance-figure dt-finance-figure--total-payable">
					<span class="label">Total Amount Payment</span>
					<span class="stat">{CURRENCY_SYMBOL}{DETAIL_TOTAL_PAYABLE}</span>
				</div>
				<div class="dt-finance-figure dt-finance-figure--acceptance-fee">
					<span class="label">Acceptance Fee</span>
					<span class="stat">{CURRENCY_SYMBOL}{DETAIL_ACCEPTANCE_FEE}</span>
				</div>
				<div class="dt-finance-figure dt-finance-figure--option-fee">
					<span class="label">Option to purchase fee</span>
					<span class="stat">{CURRENCY_SYMBOL}{DETAIL_OPTION_TO_PURCHASE_FEE}</span>
				</div>
				<div class="dt-finance-figure dt-finance-figure--interest_-rate">
					<span class="label">Fixed Interest Rate</span>
					<span class="stat">{DETAIL_INTEREST_RATE}%</span>
				</div>
				<div class="dt-finance-figure dt-finance-figure--term">
					<span class="label">Term (Months)</span>
					<span class="stat">{DETAIL_TERM}</span>
				</div>
				<div class="dt-finance-figure dt-finance-figure--first-payment">
					<span class="label">First Payment</span>
					<span class="stat">{CURRENCY_SYMBOL}{DETAIL_FIRST_PAYMENT}</span>
				</div>
				<div class="dt-finance-figure dt-finance-figure--monthly-payment">
					<span class="label">Monthly Payment</span>
					<span class="stat">{CURRENCY_SYMBOL}{DETAIL_REGULAR_PAYMENT}</span>
				</div>
				<div class="dt-finance-figure dt-finance-figure--final-payment">
					<span class="label">Final Payment</span>
					<span class="stat">{CURRENCY_SYMBOL}{DETAIL_FINAL_PAYMENT}</span>
				</div>
				<div class="dt-finance-figure dt-finance-figure--apr">
					<span class="label">APR Representative</span>
					<span class="stat">{DETAIL_APR}%</span>
				</div>
			</div>
			<!-- // Detail Finance example -->

		</div>
		<!-- // Sidebar -->

	</div>
	<!-- // Top Section -->
	<!-- Technical Section -->
	<div class="dt-technical-section">
		<div class="wrapper">
			<div class="container">
				<h2>Technical Details</h2>

				<!-- Accordion Tech -->
				<div id="accordion-tech">
					<!--Key Features -->
					<h3 {SHOW_HIDE_KEY_FEATURES} id="accordion-key-features">Key Features</h3>
					<div class="technical-panel {SHOW_HIDE_KEY_FEATURES_CLASS}">
						<div class="row" {SHOW_HIDE_KEY_FEATURES}>
							<div class="fivecol tablet-hidden mobile-hidden" {SHOW_HIDE_KEY_FEATURES}>
								<img data-src="{v2_DETAIL_IMAGE_1_URL}" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="View our {DETAIL_MAKE} {DETAIL_MODEL}" class="responsive-img lazy">
							</div>
							<div class="sevencol twelvecol-md last" {SHOW_HIDE_KEY_FEATURES}>
								{VEHICLE_DESCRIPTION}
								{KEY_INFO}
								{v2_SELECTED_FEATURES}
							</div>
						</div>
					</div>
					<!--// Key Features -->

					<!--Costed Options -->
					<h3 {SHOW_HIDE_COSTED_OPTIONS} id="accordion-tech--options">This {v2_WEBSITE_VEHICLE_TYPE_LC}
						includes {CURRENCY_SYMBOL}{COSTED_OPTIONS_TITLE_EXTRA_AMOUNT} worth of Factory Fitted Extras</h3>
					<div class="technical-panel">
						<div class="row">
							<div class="twelvecol">
								<!--Tech Table -->
								<div class="tech-table">
									<h4>Factory Fitted Extras</h4>
									{COSTED_OPTIONS_UL}
								</div>
								<!--// Tech Table -->
							</div>
						</div>
					</div>
					<!--// Costed Options -->
					<!--Performance -->
					<h3 id="accordion-tech--operformance">Performance</h3>
					<div class="technical-panel">
						<div class="row">
							<div class="sixcol">
								<!--Tech Table -->
								<div class="tech-table">
									<h4>Performance</h4>
									{PERFORMANCE_UL}
								</div>
								<!--// Tech Table -->
								<!--Tech Table -->
								<div class="tech-table">
									<h4>Fuel Consumption</h4>
									{FUEL_CONSUMPTION_UL}
								</div>
								<!--// Tech Table -->
							</div>
							<div class="sixcol last">
								<!--Tech Table -->
								<div class="tech-table">
									<h4>Engine and Drive Train</h4>
									{ENGINE_AND_DRIVE_TRAIN_UL}
								</div>
								<!--// Tech Table -->
								<!--Tech Table -->
								<div class="tech-table">
									<h4>Emissions</h4>
									{EMISSIONS_UL}
								</div>
								<!--// Tech Table -->
							</div>
						</div>
					</div>
					<!--// Performance -->
					<!--Interior / Exterior -->
					<h3 id="accordion-tech--interior">Interior / Exterior</h3>
					<div class="technical-panel">
						<div class="row">
							<div class="sixcol">
								<!--Tech Table -->
								<div class="tech-table">
									<h4>Interior Features</h4>
									{INTERIOR_FEATURES_UL}
								</div>
								<!--// Tech Table -->
							</div>
							<div class="sixcol last">
								<!--Tech Table -->
								<div class="tech-table">
									<h4>Exterior Features</h4>
									{EXTERIOR_FEATURES_UL}
								</div>
							</div>
						</div>
					</div>
					<!--// Interior / Exterior -->
					<!--Dimensions -->
					<h3 id="accordion-tech--dimensions">Dimensions</h3>
					<div class="technical-panel">
						<div class="row">
							<div class="sixcol">
								<!--Tech Table -->
								<div class="tech-table">
									<h4>Vehicle Dimensions</h4>
									{DIMENSIONS_UL}
								</div>
								<!--// Tech Table -->
							</div>
							<div class="sixcol last">
								<!--Tech Table -->
								<div class="tech-table">
									<h4>Weights and Capacities</h4>
									{WEIGHTS_AND_CAPACITIES_UL}
								</div>
								<!--// Tech Table -->
							</div>
						</div>
					</div>
					<!--// Dimensions -->
					<!--Safety -->
					<h3 id="accordion-tech--safety">Safety{SAFETY_TITLE_EXTRA}</h3>
					<div class="technical-panel">
						<div class="row">
							<div class="sixcol">
								<!--Tech Table -->
								<div class="tech-table">
									<h4>Safety Features</h4>
									{SAFETY_FEATURES_UL}
								</div>
								<!--// Tech Table -->
							</div>
							<div class="sixcol last">
								<!--Tech Table -->
								<div class="tech-table">
									<h4>NCAP Ratings</h4>
									{NCAP_UL}
								</div>
								<!--// Tech Table -->
							</div>
						</div>
					</div>
					<!--// Safety -->
				</div>
				<!-- // Accordion Tech -->
				<p class="dt-spec-small">*Every effort has been made to ensure the accuracy of the information above. However, errors may occur. Check with a salesperson about items which may affect your decision to purchase.</p>
			</div>
		</div>
	</div>
	<!-- // Technical Section -->

	<div class="dt-media">
		<div id="dt-media__tabs" class="dt-media__tabs">
			<ul class="dt-media__list">
				<li><a href="#dt-media__gallery"><span><img data-src="/img-src/{v2_FOLDER}/theme/details/media-icon-photos.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="lazy" alt="Photo Gallery"></span>Photo Gallery</a></li>
				<li class="{VIDEO_STATUS}"><a href="#dt-media__videos"><span><img data-src="/img-src/{v2_FOLDER}/theme/details/media-icon-video.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="lazy" alt="Videos"></span>Videos</a>
				</li>
				<li class="{CLICK360_STATUS}"><a href="#dt-media__360-photos"><span><img data-src="/img-src/{v2_FOLDER}/theme/details/media-icon-360.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="lazy" alt="360° Photos"></span>360°
						Photos</a></li>
				<li class="{DOCUMENT_STATUS}"><a href="#dt-media__documents"><span><img data-src="/img-src/{v2_FOLDER}/theme/details/media-icon-documents.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="lazy" alt="Documents"></span>Documents</a></li>
			</ul>
			<!-- Gallery -->
			<div id="dt-media__gallery" class="dt-media__content">
				<h3>Photo Gallery</h3>
				<ul class="image-gallery-grid">
					{DETAIL_IMAGES_GRID}
				</ul>
			</div>
			<!-- // Gallery -->
			<!-- Videos -->
			<div id="dt-media__videos" class="dt-media__content {VIDEO_STATUS}" style="display:none;">
				<h3>Videos</h3>
				<div class="row">
					<div class="sixcol eightcol-md twelvecol-sm">
						<div class="flexible-frame">
							<iframe src="https://www.youtube.com/embed/{DETAIL_YOUTUBE_ID}" allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
			<!-- // Videos -->
			<!-- 360 Images -->
			<div id="dt-media__360-photos" class="dt-media__content {CLICK360_STATUS}" style="display:none;">
				<h3>360° Photos</h3>
				<div class="row">
					<div class="sixcol eightcol-md twelvecol-sm">
						<div class="flexible-frame">
							{CLICK360_CONTENT}
						</div>
					</div>
				</div>
			</div>
			<!-- // 360 Images -->
			<!-- Documents -->
			<div id="dt-media__documents" class="dt-media__content {DOCUMENT_STATUS}" style="display:none;">
				<h3>Documents</h3>
				<p>The following documents are available for this vehicle:</p>
				<div class="document-list">
					{DOCUMENT_LIST}
				</div>
			</div>
			<!-- // Documents -->
		</div>
	</div>

	<!-- Finance Section -->
	<div class="dt-finance-section {FINANCE_STATUS}" id="finance-section">
		<div class="wrapper">
			<div class="container">
				<h2>Finance Specialists</h2>
				<div id="tab-finance" class="{FINANCE_STATUS}">
					<div class="detail__apply-finance clear-fix">
						<!-- Detail Finance / Webzation -->
						<div class="clear-fix">
							{FINANCE_AJAX}
						</div>
						<div class="finance-tables clear-fix">
							<!-- Detail Finance / Click -->
							<div class="finance-tables__finance-table" id="detail-table">
								{DETAIL_FINANCE_TABLE}
							</div>
							<!-- Detail Finance / Click Calculator -->
							<div class="finance-tables__calculator mobile-hidden">
								{FINANCE_TAB}
							</div>
							<!-- // Detail Finance / Webzation -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Finance Section -->

	<div class="dt-promotions">
		<div class="wrapper">
			<div class="container">

				<div class="feature-links feature-links--details">
					<!-- Featured Link -->
					<a href="/finance.php" title="Finance" class="featured-link">
						<div class="featured-link__icon"><img data-src="/img-src/{v2_FOLDER}/theme/details/icon-finance.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="lazy" alt="Finance">
						</div>
						<div class="featured-link__title">Finance Deals</div>
						<div class="featured-link__text">We have helped thousands of customers secure the best finance deal for their budget.</div>
					</a>
					<!-- // Featured Link -->
					<!-- Featured Link -->
					<!-- <a href="{ENGAGE_URL}&step_mode=partex" title="Part Exchange" class="featured-link">
						<div class="featured-link__icon"><img data-src="/img-src/{v2_FOLDER}/theme/details/icon-partex.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="lazy" alt="Part Exchange"></div>
						<div class="featured-link__title">Part Exchange</div>
						<div class="featured-link__text">Our dedicated team of vehicle valuation experts are ready to give you an up-to-the-minute market value of your car.</div>
					</a> -->
					<a href="/partex.php" title="Part Exchange" class="featured-link">
						<div class="featured-link__icon"><img data-src="/img-src/{v2_FOLDER}/theme/details/icon-partex.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="lazy" alt="Part Exchange"></div>
						<div class="featured-link__title">Part Exchange</div>
						<div class="featured-link__text">Our dedicated team of vehicle valuation experts are ready to give you an up-to-the-minute market value of your car.</div>
					</a>
					<!-- // Featured Link -->
					<!-- Featured Link -->
					<a href="/warranty.php" title="Peace of mind" class="featured-link">
						<div class="featured-link__icon"><img data-src="/img-src/{v2_FOLDER}/theme/details/icon-warranty.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="lazy" alt="Peace of mind"></div>
						<div class="featured-link__title">Peace of mind</div>
						<div class="featured-link__text">We pride ourselves on providing mechanically sound and robust products that have been maintained in accordance with the manufacturers service schedule.</div>
					</a>
					<!-- // Featured Link -->
				</div>

			</div>
		</div>
	</div>

	<!-- Similar Vehicles -->
	<div class="dt-similar-section" id="section6">
		<div class="wrapper">
			<div class="container">
				<h2>Similar Vehicles</h2>
				<div id="detail-similar-carousel" class="touchcarousel three-d clear-fix">
					<ul class="touchcarousel-container">
						{SIMILAR}
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- // Similar Vehicles -->

</div>
</div>`
				},
				{
					tab: "LESS",
					code: `.dt-top-section {
.clearfix;

@media (max-width: 9999px) {
	background: linear-gradient(to left, #e5e5e5 0%, #e5e5e5 340px, #f5f5f5 340px, #f5f5f5 100%);
}

@media (max-width: 1300px) {
	background: linear-gradient(to left, #e5e5e5 0%, #e5e5e5 300px, #f5f5f5 300px, #f5f5f5 100%);
}

@media (max-width: 1200px) {
	background: linear-gradient(to left, #e5e5e5 0%, #e5e5e5 240px, #f5f5f5 240px, #f5f5f5 100%);
}

@media (max-width: 1100px) {
	background: #f5f5f5;
}

.dt-main {
	padding: 40px;
	position: relative;
	box-sizing: border-box;
	float: left;

	@media (max-width: 9999px) {
		width: calc(~'100% - 340px');
	}

	@media (max-width: 1299px) {
		width: calc(~'100% - 300px');
	}

	@media (max-width: 1199px) {
		width: calc(~'100% - 240px');
		padding: 30px;
	}

	@media (max-width: 1099px) {
		width: 100%;
		padding: 25px;
		float: none;
	}

	@media @tablet {
		padding: 25px;
	}

	@media @mobile {
		padding: 15px;
	}
}

.dt-back-button {
	position: absolute;
	top: 25px;
	right: 40px;

	@media (max-width: 1199px) {
		position: static;
		top: auto;
		right: auto;
		margin: 0 0 15px 0;
		font-size: 13px;
	}
}

.dt-summary {
	// display: flex;
	.flex-display(@display: flex);
	margin: 0 0 25px 0;
	// flex: 0 0 100%;
	.flex-grow(@grow: 0);
	.flex-shrink(@shrink: 0);
	.flex-basis(@width: 100%);
	width: 100%;

	&__badge {
		// flex: 0 0 50px;
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: 50px);
		width: 50px;
		margin: 0 10px 0 0;

		@media @tablet {
			// flex: 0 0 40px;
			.flex-grow(@grow: 0);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: 40px);
			width: 40px;
		}

		@media @mobile {
			// flex: 0 0 30px;
			.flex-grow(@grow: 0);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: 30px);
			width: 30px;
		}

		img {
			width: 100%;
			height: auto;
		}
	}

	&__text {
		// flex: 1 1 auto;
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: auto);
	}

	&__title {
		font-size: 28px;
		line-height: 1.2;
		color: @heading-colour;
		margin: 0;

		@media @tablet {
			font-size: 24px;
		}

		@media @mobile {
			font-size: 22px;
		}
	}

	&__subtitle {
		font-size: 18px;
		line-height: 1.2;
		margin: 0;
		color: @text-colour;

		@media @tablet {
			font-size: 16px;
		}

		@media @mobile {
			font-size: 15px;
		}
	}

}

.dt-image-block {
	width: 70%;
	float: left;
	margin-bottom: 20px;

	@media (max-width: 1600px) {
		width: 60%;
	}

	@media (max-width: 1299px) {
		width: 100%;
		float: none;
	}

	.dt-gallery {
		width: 100%;
		height: auto;

		.rsThumbs {
			margin: 10px 0 0 0;

			@media @mobile {
				margin: 5px 0 0 0;
			}
		}

		.rsThumb {
			width: 160px;
			height: 105px;
			margin: 0 10px 0 0;

			@media @tablet {
				width: 120px;
				height: 79px;
			}

			@media @mobile {
				width: 80px;
				height: 53px;
				margin: 0 5px 0 0;
			}

			&.rsNavSelected {
				background: @primary-colour;
			}

			img {
				width: 100% !important;
				height: 100% !important;
			}
		}

		.rsThumbsHor {
			height: 105px;

			@media @tablet {
				height: 79px;
			}

			@media @mobile {
				height: 53px;
			}
		}

	}

	.dt-thumbs {
		clear: both;
		margin: 10px 0 0 0;

		@media @mobile {
			display: none;
		}

		ul {
			// display: flex;
			.flex-display(@display: flex);
			margin: -5px;

			li {
				// flex: 0 0 calc(~'100% / 5 - 10px');
				.flex-grow(@grow: 0);
				.flex-shrink(@shrink: 0);
				.flex-basis(@width: calc(~'100% / 5 - 10px'));
				margin: 5px;

				img {
					max-width: 100%;
				}

			}

		}

	}

	.see-more {

		a {
			background: #ccc;
			height: 120px;
			width: 100%;
			// display: flex;
			// flex-direction: column;
			// justify-content: center;
			// align-items: center;
			.flex-display(@display: flex);
			.flex-direction(@direction: column);
			.justify-content(@justify: center);
			.align-items(@align: center);
			color: white;
			transition: 0.2s all linear;

			i {
				display: block;
				text-align: center;
				font-size: 30px;
				color: white;
			}

			&:hover {
				background: white;
				color: @text-colour;

				i {
					color: @text-colour;
				}
			}

		}

	}

}

.dt-info-block {
	width: calc(~'30% - 25px');
	float: right;
	margin: 0 0 0 25px;
	box-sizing: border-box;

	@media (max-width: 1600px) {
		width: calc(~'40% - 25px');
	}

	@media (max-width: 1299px) {
		width: 100%;
		margin: 0;
	}

	.dt-cta {
		@media @tablet {
			margin-top: 20px;
		}

		.details-cta {
			float: left;
			width: 100%;
			margin-bottom: 10px;
			clear: both;
			overflow: hidden;

			li {
				float: left;
				width: 100%;
				text-align: left;
				margin: 0 0 10px 0;

				// @media @tablet {
				//   width: 49%;
				//   margin-right: 2%;

				//   &:nth-child(odd) {
				//     margin-right: 0;
				//   }
				// }
				
				@media @mobile {
					width: 100%;
					margin-right: 0;
				}

				a {
					display: flex;
					width: 100%;
					height: 50px;
					font-family: @alpha-font;
					font-weight: 400;
					font-size: 16px;
					line-height: 50px;
					color: @text-colour;
					text-decoration: none;
					padding: 0;
					box-sizing: border-box;
					background: white;
					overflow: hidden;
					transition: all .25s linear;

					@media @tablet {
						height: 50px !important;
						line-height: 50px !important;
					}

					span {
						background: @primary-colour;
						color: white;
						height: 50px;
						width: 50px;
						margin-right: 15px;
						line-height: 50px;
						text-align: center;
						border-radius: 0px !important;
						transition: all .25s linear;

						@media @tablet {
							height: 50px !important;
							width: 50px !important;
							line-height: 50px !important;
						}
					}

					&:hover {
						transition: all .25s linear;

						span {
							background: @accent-colour;
						}
					}

				}
			}
		}
	}
}

.dt-price-match {
	text-align: center;
	margin: 0 0 @dt-sidebar-padding 0;

	@media (max-width: 1299px) {
		margin: 0 0 @dt-sidebar-padding-sm 0;
	}

	@media (max-width: 1099px) {
		margin: 0 auto @dt-sidebar-padding-sm auto;
		max-width: 280px;
	}

	&__title {
		color: #2b567c;
		font-size: 20px;
		line-height: 1.2;
		margin: 0 0 5px 0;
		text-align: left;
	}

	img {
		max-height: 170px;
	}
}

.dt-factory-fitted {
	clear: both;
	background: white;
	padding: 20px;
	margin: 0 0 25px 0;

	@media (max-width: 1299px) {
		margin: 25px 0 0 0;
	}

	&__title {
		color: @text-colour;
		text-transform: uppercase;
		font-size: 18px;
		line-height: 1.4;
		margin: 0 0 15px 0;
	}

	&__list {

		li {
			// display: flex;
			// justify-content: space-between;
			.flex-display(@display: flex);
			.justify-content(@justify: space-between);
			margin: 0 0 5px 0;

			.list-stat {
				color: @primary-colour;
			}
		}

	}

	&__link a {
		border: 1px solid @primary-colour;
		display: inline-block;
		padding: 5px 10px;
		text-transform: uppercase;
		font-size: 13px;
		font-weight: bold;
		margin: 15px 0 0 0;
		color: @primary-colour;
		transition: 0.2s all linear;

		&:hover {
			background: @primary-colour;
			color: white;
			border: 1px solid @primary-colour;
		}
	}

}

.dt-spec {
	// display: flex;
	.flex-display(@display: flex);
	padding-top: 25px;
	margin-right: -20px;
	margin-bottom: -20px;
	clear: both;

	@media @desktop {
		flex-wrap: wrap;
	}

	ul {
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: 25%);
		margin-right: 20px;
		margin-bottom: 20px;

		@media @desktop {
			.flex-basis(@width: 33%);
		}
		@media @mobile {
			.flex-basis(@width: 100%);
		}
	}

	li {
		// display: flex;
		.flex-display(@display: flex);
		.justify-content(@justify: space-between);
		margin: 0 0 8px 0;
		font-size: 14px;

		@media @mobile {
			float: none;
			width: 100%;
		}

		.dt-spec-list__label {
			// flex: 0 0 50%;
			.flex-grow(@grow: 0);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: calc(~'50% - 2.5px'));
			width: 50%;
			padding: 5px;
			background: #e5e5e5;
			box-sizing: border-box;
		}

		.dt-spec-list__stat {
			// flex: 0 0 50%;
			.flex-grow(@grow: 0);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: calc(~'50% - 2.5px'));
			width: 50%;
			color: @primary-colour;
			padding: 5px;
			background: #e5e5e5;
			box-sizing: border-box;
		}

	}
}

.dt-spec-small {
	font-size: 10px;
	line-height: 1;
	width: 100%;
}

@dt-sidebar-padding: 25px;
@dt-sidebar-padding-sm: 20px;

.dt-sidebar {
	background-color: transparent;
	box-sizing: border-box;
	padding: @dt-sidebar-padding;
	float: right;

	@media (max-width: 9999px) {
		width: 340px;
	}

	@media (max-width: 1299px) {
		width: 300px;
	}

	@media (max-width: 1199px) {
		width: 240px;
		padding: @dt-sidebar-padding-sm;
	}

	@media (max-width: 1099px) {
		// flex: 0 0 100%;
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: 100%);
		width: 100%;
		float: none;
		background: fade(black, 8%);
	}

}

.dt-view-counter {
	background-color: @accent-colour;
	padding: 10px;
	color: @primary-colour;
	// display: flex;
	// justify-content: center;
	.flex-display(@display: flex);
	.justify-content(@justify: center);
	margin: -@dt-sidebar-padding -@dt-sidebar-padding @dt-sidebar-padding -@dt-sidebar-padding;

	@media (max-width: 1199px) {
		margin: -@dt-sidebar-padding-sm -@dt-sidebar-padding-sm @dt-sidebar-padding-sm -@dt-sidebar-padding-sm;
	}

	@media (max-width: 1099px) {
		margin: 0 0 @dt-sidebar-padding-sm 0;
	}

	&__icon {
		// display: flex;
		// justify-content: center;
		// align-items: center;
		.flex-display(@display: flex);
		.justify-content(@justify: center);
		.align-items(@align: center);
		margin: 0 10px 0 0;
		// flex: 0 0 auto;
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: auto);

		img {
			height: 35px;
		}
	}

	&__text {
		// display: flex;
		// justify-content: flex-end;
		// align-items: center;
		// flex: 0 0 auto;
		.flex-display(@display: flex);
		.justify-content(@justify: flex-end);
		.align-items(@align: center);
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: auto);
		color: @primary-colour;
		font-size: 15px;

		@media (max-width: 1299px) {
			font-size: 13px;
		}

		@media (max-width: 1199px) {
			font-size: 12px;
		}


		span {
			margin: 0 5px 0 0;
		}
	}
}

.dt-retail-price {
	text-align: center;
	margin: 0 0 @dt-sidebar-padding 0;

	@media (max-width: 1299px) {
		margin: 0 0 @dt-sidebar-padding-sm 0;
	}

	.dt-price {
		margin: 0 0 5px 0;
		color: @primary-colour;
		font-family: @heading-font;
		font-size: 35px;
		line-height: 1;
		font-weight: 700;
	}

	.dt-buy-button a {
		display: block;

		@media (max-width: 1099px) {
			display: inline-block;
		}
	}

}

.dt-finance-price {
	text-align: center;
	margin: 0 0 @dt-sidebar-padding 0;

	@media (max-width: 1299px) {
		margin: 0 0 @dt-sidebar-padding-sm 0;
	}

	.dt-finance {
		margin: 0 0 5px 0;
		color: @primary-colour;
		font-family: @heading-font;
		font-size: 22px;
		font-weight: 700;

		span.label {
			display: block;
			color: @text-colour;
			font-size: 16px;
			line-height: 1;
		}

	}

	.dt-finance-button {
		margin-top: 20px;
		&--cfc {

		}
	}

	.dt-finance-button a {
		display: block;

		@media (max-width: 1099px) {
			display: inline-block;
		}
	}

}


.dt-finance-example {
	margin: 0 0 @dt-sidebar-padding 0;
	// display: flex;
	// flex-wrap: wrap;
	.flex-display(@display: flex);
	.flex-wrap(@wrap: wrap);

	@media (max-width: 1299px) {
		margin: 0 0 @dt-sidebar-padding-sm 0;
	}

	&__title {
		// flex: 1 1 100%;
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: 100%);
		width: 100%;
		margin: 0 0 10px 0;
		color: @primary-colour;
		font-family: @heading-font;
		text-align: center;
	}

	.dt-finance-figure {
		// flex: 1 1 calc(~'100% / 2 - 2px');
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: calc(~'100% / 2 - 2px'));
		width: calc(~'100% / 2 - 2px');
		background-color: white;
		margin: 1px;
		padding: 7.5px;
		box-sizing: border-box;

		@media (max-width: 1099px) {
			// flex: 1 1 calc(~'100% / 3 - 2px');
			.flex-grow(@grow: 1);
			.flex-shrink(@shrink: 1);
			.flex-basis(@width: calc(~'100% / 3 - 2px'));
			width: calc(~'100% / 3 - 2px');
		}

		@media @mobile {
			// flex: 1 1 calc(~'100% / 2 - 2px');
			.flex-grow(@grow: 1);
			.flex-shrink(@shrink: 1);
			.flex-basis(@width: calc(~'100% / 2 - 2px'));
			width: calc(~'100% / 2 - 2px');
		}

		&--apr {
			// flex: 1 1 calc(~'100% / 1 - 2px');
			.flex-grow(@grow: 1);
			.flex-shrink(@shrink: 1);
			.flex-basis(@width: calc(~'100% / 1 - 2px'));
			width: 100%;
		}

		.label {
			display: block;
			text-align: center;
			font-size: 10px;
			line-height: 1.2;
		}

		.stat {
			display: block;
			font-weight: bold;
			color: @primary-colour;
			text-align: center;
			font-size: 13px;
			line-height: 1.3;
		}

	}

}


.dt-savings {
	margin: 0 0 @dt-sidebar-padding 0;
	display: none;

	@media (max-width: 1299px) {
		margin: 0 0 @dt-sidebar-padding-sm 0;
	}

	@media (max-width: 1099px) {
		margin: 0 auto @dt-sidebar-padding-sm auto;
		max-width: 280px;
	}

	&__title {
		color: #2b567c;
		font-size: 20px;
		line-height: 1.2;
		margin: 0 0 5px 0;
	}

	&__chart {
		float: left;
		margin: 0 10px 0 0;

		@media (max-width: 1199px) {
			float: none;
			text-align: center;
			margin: 0;
		}

		@media (max-width: 1099px) {
			float: left;
			margin: 0 10px 0 0;
		}

	}

	&__new-price,
	&__our-price,
	&__saving {
		// display: flex;
		// justify-content: space-between;
		.flex-display(@display: flex);
		.justify-content(@justify: space-between);
		margin: 0 0 5px;
	}

	&__saving {
		padding: 2px;
		background: white;
	}

	.radialGenerator {

		circle {
			stroke: @accent-colour;
		}

		.radialGenerator__value {
			stroke: @primary-colour;
		}

	}

}

}



.dt-promotions {
background-color: #f5f5f5;
padding: 20px 0;

@media (max-width: 1099px) {
	display: none;
}

.feature-links {
	// display: flex;
	.flex-display(@display: flex);
	margin: 0;

	@media @mobile {
		// flex-direction: column;
		.flex-direction(@direction: column);
	}

	.featured-link {
		.clearfix;
		clear: both;
		margin: 20px;
		border-bottom: 0;

		&__icon {
			float: left;
			margin-right: 20px;

			@media @mobile {
				float: none;
				margin: 0 0 10px 0;
				text-align: center;
			}

			img {
				width: 44px;;
				height: 44px;;
			}
		}

		&__title {
			font-family: @heading-font;
			font-weight: 700;
			line-height: 1;
			font-size: 22px;
			color: @primary-colour;
			width: calc(~'100% - 44px - 20px');
			float: right;

			@media @mobile {
				width: 100%;
				float: none;
				text-align: center;
			}

			&:hover {
				color: @accent-colour;
			}
		}

		&__text {
			font-size: 15px;
			line-height: 1.4;
			color: @text-colour;
			width: calc(~'100% - 44px - 20px');
			float: right;

			@media @mobile {
				width: 100%;
				float: none;
				text-align: center;
			}
		}
	}
}
}






.dt-media {
background-color: @primary-colour;

*:focus,
*:hover {
	outline: none;
}

.documents-unavailable,
.video-unavailable,
.click360-unavailable {
	display: none !important;
	visibility: hidden !important;
}

.dt-media__tabs {
	// display: flex;
	.flex-display(@display: flex);


	@media @tablet {
		// flex-wrap: wrap;
		.flex-wrap(@wrap: wrap);
	}

	.dt-media__list {
		padding: 0 0 100px 0;
		// flex: 0 0 340px;
		.flex-grow(@grow: 0);
		.flex-shrink(@shrink: 0);
		.flex-basis(@width: 340px);
		width: 340px;
		background: darken(@primary-colour, 10%);

		@media (max-width: 1299px) {
			// flex: 0 0 300px;
			.flex-grow(@grow: 0);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: 300px);
			width: 300px;
		}

		@media (max-width: 1199px) {
			// flex: 0 0 240px;
			.flex-grow(@grow: 0);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: 240px);
			width: 240px;
		}

		@media @tablet {
			// flex: 1 0 100%;
			.flex-grow(@grow: 1);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: 100%);
			padding: 0;
			display: flex;
		}

		li {

			@media @tablet {
				// flex: 1 1 auto;
				.flex-grow(@grow: 1);
				.flex-shrink(@shrink: 1);
				.flex-basis(@width: auto);
			}

			a {
				color: white;
				height: 100px;
				// display: flex;
				// justify-content: flex-start;
				// align-items: center;
				.flex-display(@display: flex);
				.justify-content(@justify: flex-start);
				.align-items(@align: center);
				padding: 0 25px 0 40px;
				font-size: 16px;
				background: darken(@primary-colour, 10%);

				&:hover {
					background: lighten(@primary-colour,10%);
					color: @accent-colour;
				}

				@media @tablet {
					padding: 15px;
					font-size: 13px;
					text-align: center;
					// justify-content: center;
					// flex-direction: column;
					.justify-content(@justify: center);
					.flex-direction(@direction: column);
					height: 50px;
				}

				span {
					margin: 0 10px 0;

					@media @tablet {
						display: block;
						margin: 0 0 5px 0;
					}

					@media @mobile {
						display: none;
					}

					img {
						width: 30px;

						@media @tablet {
							width: 20px;
						}
					}
				}

			}

		}

		.ui-state-active {

			a {
				background: @primary-colour;
				color: @accent-colour;

				&:hover {
					background: @primary-colour;
					color: @accent-colour;
				}
			}

		}

	}

	.dt-media__content {
		// flex: 1;
		.flex-grow(@grow: 1);
		.flex-shrink(@shrink: 1);
		.flex-basis(@width: auto);
		padding: 40px;
		background: @primary-colour;
		box-sizing: border-box;

		@media @tablet {
			// flex: 1 0 100%;
			.flex-grow(@grow: 1);
			.flex-shrink(@shrink: 0);
			.flex-basis(@width: 100%);
			padding: 30px;
		}

		@media @tablet {
			padding: 20px;
		}

		h3 {
			color: white;
			font-size: 22px;
		}

		p,
		li {
			color: white;
		}

		.document-list {
			color: white;
		}

		.image-gallery-grid {
			// display: flex;
			// flex-wrap: wrap;
			.flex-display(@display: flex);
			.flex-wrap(@wrap: wrap);
			margin-right: -10px;
			margin-bottom: -10px;

			li {
				margin-right: 10px;
				margin-bottom: 10px;
				flex: 0 0 calc(~'100% / 10 - 10px');
				width: calc(~'100% / 10 - 10px');

				@media @lap {
					flex: 0 0 calc(~'100% / 6 - 10px');
					width: calc(~'100% / 6 - 10px');
				}

				@media @tablet {
					flex: 0 0 calc(~'100% / 4 - 10px');
					width: calc(~'100% / 4 - 10px');
				}

				@media @tablet {
					flex: 0 0 calc(~'100% / 3 - 10px');
					width: calc(~'100% / 3 - 10px');
				}

				a {

					img {
						max-width: 100%;
						max-height: 100%;
					}

				}

			}

		}

	}

}

}







.dt-finance-section {
padding: 60px 0;

@media @tablet {
	padding: 40px 0;
}

@media @mobile {
	padding: 20px 0;
}

.fin-calc {
	overflow: hidden;
	margin-bottom: 10px;
}

#finance-apply, #finance_apply {
	float: right;
}
}





.dt-technical-section {
padding: 60px 0;
background: white;

@media @tablet {
	padding: 40px 0;
}

@media @mobile {
	padding: 20px 0;
}

#accordion-tech {

	h3 {
		background-color: @primary-colour;
		color: white;
		padding: 15px 35px 15px 15px;
		outline: none;
		font-size: 17px;
		position: relative;

		&:before {
			.char(chevron-down-l);
			display: block;
			position: absolute;
			top: 19px;
			right: 15px;
			height: 14px;
			width: 14px;
			color: @accent-colour;
			font-family: "ClickIcons";
			font-size: 14px;
			line-height: 14px;
			text-align: center;
		}

		@media @tablet {
			font-size: 15px;
		}

	}

	/* This is the active state for the accordion */
	.ui-accordion-header-active {

		&:before {
			.char(times);
		}

	}

	.technical-panel {
		padding: 20px;
		margin: -15px 0 15px;
		background: white;
		.clearfix;
	}

	.tech-table {
		margin: 0 0 40px 0;

		h4 {
			margin: 0 0 10px 0;
		}

		ul {
			border-top: 1px solid fade(black, 10%);

			li {
				font-size: 14px;
				padding: 5px 0;
				border-bottom: 1px solid fade(black, 10%);
				// display: flex;
				.flex-display(@display: flex);

				.list-label,
				.list-stat {
					width: 50%;
					// flex: 1;
					.flex-grow(@grow: 1);
					.flex-shrink(@shrink: 1);
					.flex-basis(@width: 50%);
				}

			}

		}

	}

}

}





.dt-similar-section {
padding: 60px 0;

@media @tablet {
	padding: 40px 0;
}

@media @mobile {
	padding: 20px 0;
}

.container {
	overflow: visible;
}
}`
				},
			],   
    };
  },
});

/***** 02. DetailsUXHilton *****/

import uxDtHilton from './assets/screenshots/ux-dt-hilton.png';

export const DetailsUXHilton = () => ({
  name: "DetailsUXHilton",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
			<img src="${uxDtHilton}" alt="" style="max-width: 100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "HTML",
					code: `<div id="detail-pg">

<div id="detail" class="detail car-{DETAIL_ID} {YOUTUBE_CLASS} veh-loc-{LOCATION_ID}">

	<section class="detail-header">
		<div class="wrapper">
			<div class="container">

				<div class="detail__flex-wrapper">
					
					<div class="detail-header__main-gallery">
						<div class="detail-gallery">
							{DETAIL_360_GALLERY}
						</div>
						<!-- <div class="detail-promo">
							<img data-src="/img-src/{v2_FOLDER}/theme/click-inspect-drive-collect.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="Click Inspect Drive Collect" class="lazy responsive-img">
						</div> -->
					</div>

					<div class="detail-header__vehicle-info">
						<div class="vehicle-information">

							<div class="vehicle-information__header">
								<div class="vehicle-information__badge">
									<img data-src="/assets/images/brands/{v2_VEHICLE_IMAGE_BRAND}" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="{v2_VEHICLE_IMAGE_ALT_BRAND}" class="responsive-img lazy">
								</div>

								<div class="vehicle-information__title">
									<h1>{DETAIL_MAKE} {DETAIL_MODEL}</h1>
									<em>{DETAIL_VARIANT}</em>
									<p>{DETAIL_AUTOTRADER_KSP}</p>
								</div>
							</div>

							<div class="vehicle-information__stats">
								<ul>
									<li><em>{DETAIL_MILEAGE} Miles</em></li>
									<li><em>{DETAIL_YEAR}</em></li>
									<li><em>{DETAIL_FUEL_TYPE}</em></li>
									<li><em>{DETAIL_GEARBOX}</em></li>
									<li><em>{DETAIL_ENGINE_L} L</em></li>
								</ul>
							</div>

							<div class="vehicle-information__main-block">
								<div class="detail__flex-wrapper">
									<div class="detail-price">
										<em class="detail-price__figure detail-price__figure--cash">{CURRENCY_SYMBOL}{DETAIL_WEB_PRICE}</em>
										<em class="detail-price__figure detail-price__figure--finance">{DETAIL_FINANCE_TEXT}</em>
									</div>

									<div class="detail-main-cta">
										<div class="detail-main-cta__modal-link">
											<button type="button" class="btn btn--main btn--large" id="dt-modal-open">Want this car?</button>
										</div>
										<div class="detail-main-cta__favourites">
											<favourites-toggle class="app" vehicle-id="{DETAIL_ID}"></favourites-toggle>
										</div>
									</div>

									<div id="detail-trigger"></div>

									<div class="detail-cta-list">
										<ul>
											<li {HIDE_ENGAGE} id="dt-engage"><a target="_blank" href="{ENGAGE_URL}" title="Click here now to build your deal" onclick="ga('send', 'event', 'Engage Button', 'click', 'dp_l_fe');" class="btn btn--ghost">Reserve today for {CURRENCY_SYMBOL}{ENGAGE_RESERVATION_AMOUNT}</a></li>
											<!-- <li id="dt-finance"><a href="/finance.php" title="Apply for finance on this vehicle" class="btn btn--ghost">Apply For Finance</a></li> -->
											<li {HIDE_ENGAGE} id="dt-partex"><a target="_blank" href="{ENGAGE_URL}&step_mode=partex" title="Click here to get a free partex valuation" onclick="ga('send', 'event', 'Engage Button', 'click', 'dp_l_px');" class="btn btn--ghost">Part Exchange Valuation</a></li>
											<!-- <li id="dt-callback"><a href="/email.php?callback={DETAIL_ID}" title="Request a callback regarding this vehicle" class="btn btn--ghost">Arrange Call Back</a></li> -->
											<li id="dt-click-collect"><button type="button" class="btn btn--ghost" id="dt-collect-modal-open">Click & Collect</a></li>
											<li {HIDE_ENGAGE} id="dt-delivery"><button type="button" class="btn btn--ghost" id="dt-delivery-modal-open">Home Delivery</a></li>
										</ul>
									</div>

									<div class="price-promise price-promise--details">
										<em class="price-promise__title">Why buy from {v2_NAME}</em>
										<ul class="price-promise__ticks">
											<li>Over 45 years of Trust, Value and Service</li>
											<li>One of the largest car supermarkets in the UK</li>
											<li>Wide range of used cars at low prices</li>
											<li>All cars are checked & prepared prior to collection</li>
										</ul>
										<div class="price-promise__badge">
											<img data-src="/img-src/{v2_FOLDER}/theme/price-promise-badge.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="{v2_NAME} Price Match Promise" class="responsive-img lazy">
											<em><strong>If you find the same car at a lower price.</strong> We will refund the difference plus <strong>£300</strong></em>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>

			</div>
		</div>
	</section>

	<section class="detail-spec">
		<div class="wrapper">
			<div class="container">

				<div class="detail__flex-wrapper">

					<div class="detail-spec__accordion detail-spec__accordion--wide">
						<em class="detail__heading">Vehicle Specification</em>

						<div class="detail-accordion" id="dt-accordion--spec">

							<h3 class="detail-accordion__title" {SHOW_HIDE_COSTED_OPTIONS}>This {SALE_TYPE} includes <strong>{CURRENCY_SYMBOL}{COSTED_OPTIONS_TITLE_EXTRA_AMOUNT}</strong> worth of Factory Fitted Extras</h3>
							<div class="detail-accordion__wrapper" {SHOW_HIDE_COSTED_OPTIONS}>
								<div class="detail-accordion__content detail-accordion__content--costed-options">
									{COSTED_OPTIONS_UL}
								</div>
							</div>

							<h3 class="detail-accordion__title">Description</h3>
							<div class="detail-accordion__wrapper">
								<div class="detail-accordion__content">
									<p>{KEY_INFO}</p>
									<!-- <p>{VEHICLE_DESCRIPTION}</p> -->
									<p>{v2_CUSTOM_TEXT_NEW}</p>
									<p>{v2_DEALER_STRAPLINE}</p>
									<!-- <p>{v2_SELECTED_FEATURES}</p> -->
								</div>
							</div>

							<h3 class="detail-accordion__title">Key Features</h3>
							<div class="detail-accordion__wrapper">
								<div class="detail-accordion__content">
									<div class="detail-accordion" id="dt-accordion--features">

										<h3 class="detail-accordion__title">Exterior</h3>
										<div class="detail-accordion__wrapper">
											<div class="detail-accordion__content">
												{EXTERIOR_FEATURES_UL}
											</div>
										</div>

										<h3 class="detail-accordion__title">Interior</h3>
										<div class="detail-accordion__wrapper">
											<div class="detail-accordion__content">
												{INTERIOR_FEATURES_UL}
											</div>
										</div>

										<h3 class="detail-accordion__title">Comfort</h3>
										<div class="detail-accordion__wrapper">
											<div class="detail-accordion__content">
												{COMFORT_FEATURES_UL}
											</div>
										</div>

										<h3 class="detail-accordion__title">Other</h3>
										<div class="detail-accordion__wrapper">
											<div class="detail-accordion__content">
												{OTHER_FEATURES_UL}
											</div>
										</div>
									</div>
								</div>
							</div>

							<h3 class="detail-accordion__title">Dimensions</h3>
							<div class="detail-accordion__wrapper">
								<div class="detail-accordion__content">
									{DIMENSIONS_UL}
								</div>
							</div>

							<h3 class="detail-accordion__title">Safety</h3>
							<div class="detail-accordion__wrapper">
								<div class="detail-accordion__content">
									{SAFETY_FEATURES_UL}
								</div>
							</div>

						</div>
					</div>

					<div class="detail-spec__accordion">
						<em class="detail__heading">More Information</em>

						<div class="detail-accordion" id="dt-accordion--more">

							<h3 class="detail-accordion__title">COVID-19 Safety Aware</h3>
							<div class="detail-accordion__wrapper">
								<div class="detail-accordion__content">
									<p>We're a COVID-19 Safety Aware Company.</p>
									<p>The health and safety of our Staff and Customers is of paramount importance to us here. We have taken all the necessary precautions to ensure we are COVID Secure.</p>
									<p>We now operate contactless click and collect, as well as home deliveries - and at every step in every process we are committed to leaving no stone unturned. Below are just some of the measures we have undertaken.</p>
									<ul class="list-ticks">
										<li>Effective quarantine of vehicles using our advanced key tracking system.</li>
										<li>All vehicles are sanitised and quarantined prior to collection.</li>
										<li>Social distancing measures in place, adhere to floor marking.</li>
										<li>Touch points are cleaned, extensive rota in place.</li>
										<li>Staff and customers are required to wash their hands upon entry using hand sanitiser supplied.</li>
										<li>Desks are cleaned before and after use - sneeze guards have been fitted.</li>
										<li>Staff temperatures are taken daily.</li>
										<li>Car interiors are cleaned before and after any human contact.</li>
										<li>Disposable seat and steering wheel covers and gloves are available.</li>
										<li>We request payment via bank transfer.</li>
										<li>Safe zone for vehicle collections.</li>
										<li>Invoices and supporting paperwork left in cars for collections.</li>
									</ul>
									<p>As a family business of 45 years based in Hilton, Derby - we are extremely aware of the importance of community, and the role that each and every one of us can now play. It's our aim to make you feel as comfortable as possible when buying a new car - whilst leading the way on value and customer service. We look forward to welcoming you back into our business.</p>
								</div>
							</div>

							<h3 class="detail-accordion__title">Peace of Mind Warranty</h3>
							<div class="detail-accordion__wrapper">
								<div class="detail-accordion__content">
									<p class="intro-text">Every car comes with a full cover for the first month from ourselves, many cars will come with the balance of manufactures warranty, dependant on age, mileage and service schedules being met.</p>

									<h2>Significant Features and benefits of RAC Platinum Cover</h2>
									
									<ul class="list-ticks">
										<li>Cover is available for up to 3 years</li>
										<li>Unlimited number of claims up to the retail value of the vehicle in aggregate</li>
										<li>Unlimited vehicle mileage once cover has started</li>
										<li>Contribution towards hotel, travel expenses, recovery and car hire in the event of a valid claim</li>
										<li>Claims can be managed on your behalf through our nationwide network of nominated repairers</li>
										<li>Up to 60 days cover for breakdowns in continental Europe and Eire included, subject to certain exceptions</li>
									</ul>

									<p class="notes">Subject to full terms and conditions</p>

									<p><a href="/img-src/{v2_FOLDER}/theme/rac-platinum-cover.pdf" title="RAC Warranty" class="btn" target="_blank"><i class="fas fa-download"></i> Platinum Cover</a></p>
								</div>
							</div>

							<h3 class="detail-accordion__title">Click & Collect</h3>
							<div class="detail-accordion__wrapper">
								<div class="detail-accordion__content">
									<h2>Click</h2>
									<p>Reserve your car online with a fully refundable £100 deposit we will call you to arrange a convenient collection date – we can also arrange a video walkaround of the vehicle at your request.</p>
									<p><strong>Our part</strong> - We will prepare the car for you, it will undergo a full mechanical inspection – If the MOT expires within the next 6 months we will put a fresh 12 months on for you. It will then be valeted and following that it will undergo full sanitisation for your piece of mind. We'll quarantine the vehicle in one of our 'Safe Spots' at our Click and Collect Centre.</p>
									<h2>Inspect</h2>
									<p>Upon your arrival someone will be there to greet you and point you towards your car. Feel free to look around to make sure you're happy with everything.</p>
									<h2>Drive</h2>
									<p>The car has been sanitised and quarantined so you're more than welcome to take it for a spin before you complete your purchase.</p>
									<h2>Collect</h2>
									<p>If you're happy with everything we will take payment of the remaining balance and you’re ready to drive away in your new car – Simple!</p>
									<p><a target="_blank" href="{ENGAGE_URL}" title="Click here now to build your deal" onclick="ga('send', 'event', 'Engage Button', 'click', 'dp_l_fe');" class="btn">Reserve today for {CURRENCY_SYMBOL}{ENGAGE_RESERVATION_AMOUNT}</a></p>
								</div>
							</div>

							<h3 class="detail-accordion__title">Nationwide Delivery</h3>
							<div class="detail-accordion__wrapper">
								<div class="detail-accordion__content">
									<h2>Step 1</h2>
									<p>Order your car online with a £100 deposit, a member of our team will get in touch with you to arrange a delivery date</p>
									<h2>Step 2</h2>
									<p>We will prepare the car for you, it will undergo a full mechanical inspection – If the MOT expires within the next 6 months we will put a fresh 12 months on for you. It will then be valeted and following that it will undergo full sanitisation for your piece of mind.</p>
									<h2>Step 3</h2>
									<p>Your car is about to be dispatched – we request that we receive payment of the full balance 24 hours before delivery, but don’t worry – you're covered by our 14 day money-back guarantee click the link for full Terms and Conditions.</p>
									<h2>Step 4</h2>
									<p>Your car will be delivered to your door and the handover will be contactless. You'll then have 14 days to get to know your car and make sure you're happy</p>
									<p><a target="_blank" href="{ENGAGE_URL}" title="Click here now to build your deal" onclick="ga('send', 'event', 'Engage Button', 'click', 'dp_l_fe');" class="btn btn">Reserve today for {CURRENCY_SYMBOL}{ENGAGE_RESERVATION_AMOUNT}</a></p>
									<p><a target="_blank" href="/terms-of-use.php#distance-selling" class="btn btn--ghost"><span class="icon icon-file-pdf"></span> Distance selling regulations</a></p>
								</div>
							</div>

							<h3 class="detail-accordion__title detail-accordion__title--image"><img data-src="/img-src/{v2_FOLDER}/theme/reviews--trustpilot-title-img.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="TrustPilot Reviews" class="lazy"></h3>
							<div class="detail-accordion__wrapper">
								<div class="detail-accordion__content">
									<!-- TrustBox widget - Quote -->
									<div class="trustpilot-widget" data-locale="en-GB" data-template-id="54d0e1d8764ea9078c79e6ee" data-businessunit-id="5a8bf544e8353d0001e19a07" data-style-height="250px" data-style-width="100%" data-theme="light" data-stars="4,5" data-review-languages="en">
										<a href="https://uk.trustpilot.com/review/www.hiltongarage.co.uk" target="_blank" rel="noopener">Trustpilot</a>
									</div>
									<!-- End TrustBox widget -->
								</div>
							</div>

						</div>
					</div>

				</div>

			</div>
		</div>
	</section>

	<section class="detail-finance-block {FINANCE_STATUS}">
		<a id="tabs-here"></a>
		<div class="wrapper">
			<div class="container">

				<em class="detail__heading">Finance this {SALE_TYPE} from {CURRENCY_SYMBOL}{DETAIL_REGULAR_PAYMENT} per month</em>

				<!-- Finance plugins -->
				<div class="finance-block">
					<!-- Detail Finance / Webzation -->
					<div class="clear-fix">
						{FINANCE_AJAX}
					</div>
					<div class="finance-tables clear-fix">
						<!-- Detail Finance / Click -->
						<div class="finance-tables__finance-table" id="detail-table">
							{DETAIL_FINANCE_TABLE}
						</div>
						<!-- Detail Finance / Click Calculator -->
						<div class="finance-tables__calculator mobile-hidden">
							{FINANCE_TAB}
						</div>
						<!-- // Detail Finance / Webzation -->
					</div>
				</div>
				<!-- // Finance plugins -->

			</div>
		</div>
	</section>

	<section class="detail-similar-vehicles">
		<div class="wrapper">
			<div class="container">

				<em class="detail__heading">Similar {SALE_TYPE}s</em>

				<div id="detail-similar-carousel" class="touchcarousel three-d clear-fix">
					<ul class="touchcarousel-container">
						{SIMILAR}
					</ul>
				</div>

			</div>
		</div>
	</section>

</div>

</div>




<!-- Sticky Bar -->
<div id="detail-sticky-bar">
<div class="sticky-wrapper wrapper">
	<div class="sticky-bar container">
		<div class="sticky-bar__image"><img src="{v2_DETAIL_IMAGE_1_URL}" alt="View our {DETAIL_MAKE} {DETAIL_MODEL}" class="responsive-img"></div>
		<div class="sticky-bar__summary">
			<div class="sticky-bar__title">{DETAIL_MAKE} {DETAIL_MODEL}</div>
			<div class="sticky-bar__subtitle">{VARIANT_DESCRIPTION}</div>
		</div>
		<div class="sticky-bar__cta">
			<button type="button" class="btn btn--search" id="dt-modal-sticky-open">Want this car?</button>
		</div>
	</div>
</div>
</div>
<!-- // stick bar -->




<!-- Modal Window -->

<div id="detail-cta-modal">
<div class="modal-block modal-block--detail-cta">
	<button class="modal-close" id="dt-modal-close"><i class="fa fa-times"></i></button>

	<div class="modal-block__wrapper">
		<em class="modal-block__title">Would you like to<br>purchase this {SALE_TYPE}?</em>
		<div class="modal-block__icon">
			<img data-src="/img-src/{v2_FOLDER}/theme/icon--add-to-basket.svg" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="User adding an item to their basket" class="lazy responsive-img">
		</div>
		<div class="modal-block__cta-list">
			<ul>
				<li {HIDE_ENGAGE} id="dt-engage-modal"><a target="_blank" href="{ENGAGE_URL}" title="Click here now to build your deal" onclick="ga('send', 'event', 'Engage Button', 'click', 'dp_l_fe');" class="btn">Reserve today for {CURRENCY_SYMBOL}{ENGAGE_RESERVATION_AMOUNT}</a></li>
				<li id="dt-finance-modal"><a href="#tabs-here" title="Apply for finance on this vehicle" class="btn btn--ghost" id="apply-modal-close" {FINANCE_STATUS}>Apply For Finance</a></li>
				<li {HIDE_ENGAGE} id="dt-partex-modal"><a target="_blank" href="{ENGAGE_URL}&step_mode=partex" title="Click here to get a free partex valuation" onclick="ga('send', 'event', 'Engage Button', 'click', 'dp_l_px');" class="btn btn--ghost">Part Exchange Valuation</a></li>
				<li id="dt-test-modal"><a target="_blank" href="/email.php?book_test_drive={DETAIL_ID}" title="Click here to arrange a test drive" class="btn btn--ghost">Book a Test Drive</a></li>
			</ul>
		</div>
	</div>
</div>
</div>

<div id="detail-collect-modal">
<div class="modal-block modal-block--detail-cta">
	<button class="modal-close" id="dt-collect-modal-close"><i class="fa fa-times"></i></button>

	<div class="modal-block__wrapper">
		<em class="modal-block__title">Click & Collect</em>
		<div class="modal-block__icon">
			<img data-src="/img-src/{v2_FOLDER}/theme/click-inspect-drive-collect.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="Click Inspect Drive Collect" class="lazy responsive-img">
		</div>
		<div class="modal-block__content">
			<h2>Click</h2>
			<p>Reserve your car online with a fully refundable £100 deposit we will call you to arrange a convenient collection date – we can also arrange a video walkaround of the vehicle at your request.</p>
			<p><strong>Our part</strong> - We will prepare the car for you, it will undergo a full mechanical inspection – If the MOT expires within the next 6 months we will put a fresh 12 months on for you. It will then be valeted and following that it will undergo full sanitisation for your piece of mind. We'll quarantine the vehicle in one of our 'Safe Spots' at our Click and Collect Centre.</p>
			<h2>Inspect</h2>
			<p>Upon your arrival someone will be there to greet you and point you towards your car. Feel free to look around to make sure you're happy with everything.</p>
			<h2>Drive</h2>
			<p>The car has been sanitised and quarantined so you're more than welcome to take it for a spin before you complete your purchase.</p>
			<h2>Collect</h2>
			<p>If you're happy with everything we will take payment of the remaining balance and you’re ready to drive away in your new car – Simple!</p>
			<p><a target="_blank" href="{ENGAGE_URL}" title="Click here now to build your deal" onclick="ga('send', 'event', 'Engage Button', 'click', 'dp_l_fe');" class="btn">Reserve today for {CURRENCY_SYMBOL}{ENGAGE_RESERVATION_AMOUNT}</a></p>
		</div>
	</div>
</div>
</div>

<div id="detail-delivery-modal">
<div class="modal-block modal-block--detail-cta">
	<button class="modal-close" id="dt-delivery-modal-close"><i class="fa fa-times"></i></button>
	
	<div class="modal-block__wrapper">
		<em class="modal-block__title">Home Delivery</em>
		<div class="modal-block__content">
			<h2>Step 1</h2>
			<p>Order your car online with a £100 deposit, a member of our team will get in touch with you to arrange a delivery date</p>
			<h2>Step 2</h2>
			<p>We will prepare the car for you, it will undergo a full mechanical inspection – If the MOT expires within the next 6 months we will put a fresh 12 months on for you. It will then be valeted and following that it will undergo full sanitisation for your piece of mind.</p>
			<h2>Step 3</h2>
			<p>Your car is about to be dispatched – we request that we receive payment of the full balance 24 hours before delivery, but don’t worry – you're covered by our 14 day money-back guarantee click the link for full Terms and Conditions.</p>
			<h2>Step 4</h2>
			<p>Your car will be delivered to your door and the handover will be contactless. You'll then have 14 days to get to know your car and make sure you're happy</p>
			<p><a target="_blank" href="{ENGAGE_URL}" title="Click here now to build your deal" onclick="ga('send', 'event', 'Engage Button', 'click', 'dp_l_fe');" class="btn btn">Reserve today for {CURRENCY_SYMBOL}{ENGAGE_RESERVATION_AMOUNT}</a></p>
			<p><a target="_blank" href="/terms-of-use.php#distance-selling" class="btn btn--ghost"><span class="icon icon-file-pdf"></span> Distance selling regulations</a></p>
		</div>
	</div>
</div>
</div>`
				},
				{
					tab: "LESS",
					code: `// Mixins
.detail-padding {
	padding: 50px 0;

	@media @tablet {
		padding: 40px 0;
	}
}

.detail {
	&__flex-wrapper {
		display: flex;
		flex-wrap: wrap;
		margin-right: -40px;
		margin-bottom: -20px;
	}

	&__heading {
		display: block;
		margin-bottom: 20px;
		color: @heading-colour;
		font-family: @heading-font;
		font-size: 22px;
		font-weight: 700;
	}
}

.detail-header {
	.detail-padding;
	background: white;

	&__main-gallery {
		position: relative;
		flex: 0 0 900px;
		width: 900px;
		margin-right: 40px;
		margin-bottom: 20px;
		min-width: 0;

		@media @desktop {
			flex: 0 0 640px;
			width: 640px;
		}

		@media @lap {
			flex: 0 0 480px;
			width: 480px;
		}

		@media @tablet {
			flex: 1 1 500px;
		}
	}

	&__vehicle-info {
		flex: 1 1 200px;
		margin-right: 40px;
		margin-bottom: 20px;
		min-width: 0;

		@media @tablet {
			flex: 1 1 500px;
		}

		@media @mobile {
			margin-bottom: 20px;
		}
	}

	// Mobile full width
	@media @mobile {
		padding: 0 0 50px;
		.wrapper {
			padding: 0 !important;
		}
	}
}

.detail-promo {
	position: absolute;
	bottom: 70px;
	left: 20px;
	z-index: 5;

	@media @mobile {
		bottom: 60px;
		left: 10px;
	}

	img {
		max-height: 60px;
		border-radius: 10px;

		@media @mobile {
			max-height: 44px;
		}
	}
}

.vehicle-information {

	@media @mobile {
		padding: 0 10px;
	}

	&__header {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	&__badge {
		flex: 0 0 40px;
		margin-right: 10px;
	}

	&__title {
		min-width: 0;

		h1 {
			display: block;
			position: relative;
			margin-bottom: 0;
			font-size: 32px;
			line-height: 1.2;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;

			@media @lap {
				font-size: 26px;
			}

			@media @mobile {
				padding: 0 !important;
				font-size: 20px !important;
				text-align: left !important;
			}
		}
		em {
			display: block;
			position: relative;
			margin-bottom: 8px;
			font-size: 14px;
			font-weight: 400;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		p {
			color: @primary-colour;
			font-size: 12px;
			margin-bottom: 0;
		}
	}

	&__stats {
		margin-bottom: 30px;

		ul {
			display: flex;
			flex-wrap: wrap;
			margin-right: -10px;
			margin-bottom: -10px;

			li {
				flex: 0 0 auto;
				padding: 5px 10px;
				margin-right: 10px;
				margin-bottom: 10px;
				background: @secondary-colour;
				color: @heading-colour;
				font-size: 14px;
				font-weight: 700;
				border-radius: 5px;

				@media @mobile {
					font-size: 10px;
				}
			}
		}
	}

	&__main-block {
		padding: 20px;
		background: #fafafa;
		border-radius: 20px;

		@media @mobile {
			padding: 0;
			background: none;
			border-radius: 0;
		}

		.detail__flex-wrapper {
			display: flex;
			flex-wrap: wrap;
			margin-right: -30px;
			margin-bottom: -30px;
		}
	}
}

.detail-price {
	flex: 1 1 100%;
	margin-right: 20px;
	margin-bottom: 30px;

	&__figure {
		display: block;
		color: @heading-colour;

		&--cash {
			font-size: 28px;
			font-weight: 700;

			@media @mobile {
				font-size: 26px;
			}
		}

		&--finance {
			font-size: 16px;
			font-weight: 400;

			@media @mobile {
				font-size: 14px;
			}
		}
	}

	a.dt-finance-link {
		border-bottom: 1px dashed @accent-colour;
	}
}

.detail-main-cta {
	flex: 1 1 100%;
	display: flex;
	margin-right: 30px;
	margin-bottom: 30px;

	&__modal-link {
		flex: 0 0 auto;
		margin-right: 10px;

		@media @mobile {
			flex: 1 1 auto;
		}

		button {
			line-height: 44px;
			min-width: 420px; // 🤙

			@media @lap {
				min-width: 200px;
			}

			@media @tablet {
				min-width: 360px;
			}

			@media @mobile {
				width: 100%;
				min-width: 0;
			}
		}
	}

	&__favourites {
		flex: 0 0 auto;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 44px;
			width: 44px;
			background: @secondary-colour;
			color: @heading-colour;
			font-size: 20px;
			border-radius: 3px;

			&:hover,
			&.favourites-added {
				background: @favourites;
				color: white;
			}
		}
	}
}

.detail-cta-list {
	flex: 1 1 320px;
	align-self: flex-start;
	margin-right: 30px;
	margin-bottom: 30px;

	ul {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: -5px;
		margin-right: -10px;
		li {
			flex: 1 1 220px;
			margin-bottom: 5px;
			margin-right: 10px;
			min-width: 0;

			@media handheld, only screen and (max-width: 1060px) {
				flex: 1 1 180px;
			}
			a, button {
				display: block;
				width: 100%;
				padding: 0 10px;
			}
		}
	}
}

.price-promise--details {
	flex: 1 1 320px;
	align-self: flex-end;
	margin-right: 30px;
	margin-bottom: 30px;

	.price-promise__badge img {
		max-width: 60px;
	}
}


.detail-spec {
	.detail-padding;
	background: @custom-colour2;

	&__accordion {
		flex: 2 2 400px;
		margin-right: 40px;
		margin-bottom: 20px;

		&--wide {
			flex: 4 4 600px;
		}
	}
}

.detail-accordion {

	*, *:focus { 
		outline: none;
	}

	&__title {
		position: relative;
		display: block;
		padding: 12px 40px 12px 15px;
		margin: 0 0 5px;
		background: white;
		color: @heading-colour;
		font-size: 14px;
		font-weight: 400;
		border-radius: 3px;
		cursor: pointer;

		&:after {
			.char(chevron-down-l);
			position: absolute;
			top: 50%;
			right: 0;
			font-family: ClickIcons;
			font-size: 16px;
			transform: translateX(-15px) translateY(-50%);
		}

		&.ui-state-active {
			margin-bottom: 0;
			border-radius: 3px 3px 0 0;
		}

		&--image {
			padding: 11px 15px;

			img {
				max-height: 21px;
			}
		}
	}

	&__wrapper {
		padding: 0 15px 15px;
		margin-bottom: 5px;
		background: white;
		border-radius: 0 0 3px 3px;
	}

	&__content {
		padding-top: 15px;
		color: @text-colour;
		font-size: 14px;
		border-top: 1px solid @custom-colour2;

		p {
			color: @text-colour;
			font-size: 14px;
		}

		.tablist {
			display: flex;
			flex-wrap: wrap;
			padding: 0;
			margin: 0 -20px -15px 0;
			list-style-type: none;

			li {
				flex: 0 0 calc(~'100% / 2 - 20px');
				width: calc(~'100% / 2 - 20px');
				position: relative;
				display: block;
				padding: 0 0 0 30px;
				margin: 0 20px 15px 0;
				font-size: 14px;

				@media @mobile {
					flex: 0 0 calc(~'100% - 20px');
					width: calc(~'100% - 20px');
				}

				&:before {
					.char(check-circle);
					position: absolute;
					top: 0;
					left: 0;
					background: white;
					color: @accent-colour;
					font-family: "ClickIcons";
					font-size: 20px;
					line-height: 1;
					border-radius: 9999px;
				}
			}
		}

		&--costed-options {
			ul li {
				display: flex;
				padding-bottom: 5px;
				margin-bottom: 10px;
				font-size: 14px;
				border-bottom: 1px solid @custom-colour2;

				.list-label {
					flex: 0 0 calc(~'(100% / 4) * 3 - 20px');
					width: calc(~'(100% / 4) * 3 - 20px');
					color: @text-colour;
					margin-right: 20px;
				}

				.list-stat {
					flex: 0 0 calc(~'100% / 4');
					width: calc(~'100% / 4');
					color: @accent-colour;
					text-align: right;
				}

				// Total count

				&:last-child {
					padding-top: 15px;
					font-weight: 700;

					.list-stat {
						font-size: 18px;
					}
				}
			}
		}
	}

	&#dt-accordion--features {
		.detail-accordion__title {
			padding: 10px 0;
			font-weight: 700;
			border-bottom: 1px solid @custom-colour2;

			&:after {
				font-size: 12px;
				transform: translateX(-5px) translateY(-50%);
			}
		}

		.detail-accordion__wrapper {
			padding: 0 0 15px;
		}

		.detail-accordion__content {
			border: 0;
		}
	}

	&#dt-accordion--more {

		h2 {
			font-size: 18px;
		}

		ul li {
			font-size: 14px;

			&:before {
				font-size: 16px;
			}
		}
	}
}


.detail-finance-block {
	.detail-padding;
	background: white;
}


.detail-similar-vehicles {
	.detail-padding;
	background: @custom-colour2;

	.container {
		overflow: visible;
	}
}







// modal window

#detail-cta-modal,
#detail-collect-modal,
#detail-delivery-modal {
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: fade(@primary-colour,14%);
	z-index: 99999;
	transition: opacity .2s linear;

	display: none;
	opacity: 0;

	&.toggled {
		display: flex;
		opacity: 1;
		transition: opacity .2s linear;
	}
}

.modal-block--detail-cta {
	.modal-block__wrapper {
		max-height: calc(~'85vh - 40px');
		overflow: auto;
	}
}

#detail-collect-modal, 
#detail-delivery-modal {
	.modal-block {
		max-width: 1280px;
		&__wrapper {
			max-width: 1200px;
		}
	}
}




// Sticky bar

#detail-sticky-bar {
	position: fixed;
	top: -200px;
	left: 0;
	right: 0;
	z-index: 0;
	transition: all 0.4s linear;
	background: @primary-colour;
	opacity: 0;
	.clearfix;
	@media (min-width: 414px) and (max-width: 812px) and (orientation: landscape) {
		display: none;
	}

	&.stick {
		position: fixed;
		top: 0;
		background: darken(@primary-colour,15%);
		opacity: 1;
		z-index: 9999;
		transition: all 0.4s linear;
	}

	.sticky-bar {
		display: flex;
		align-items: center;
		padding: 21px 0;

		@media @tablet {
			padding: 10px 0;
		}

		&__image {
			flex: 0 0 auto;
			margin: 0 15px 0 0;

			img {
				height: 70px;

				@media @mobile {
					height: 35px;
				}
			}
		}

		&__summary {
			flex: 1 1 auto;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}

		&__title {
			color: white;
			margin-bottom: 5px;
			font-weight: bold;
			font-size: 22px;
			line-height: 1;

			@media @mobile {
				font-size: 16px;
			}
		}

		&__subtitle {
			color: @accent-colour;
			font-size: 18px;
			line-height: 1;

			@media @mobile {
				font-size: 11px;
			}
		}

		&__cta {
			flex: 0 0 auto;
			display: flex;
			align-items: center;
			margin: -5px;

			a.btn {
				flex: 1 0 auto;
				margin: 5px;
				font-size: 16px;
				@media @mobile {
					height: auto;
					padding: 0 10px;
					font-size: 11px;
					line-height: 36px;
				}
				&:hover {
					background-color: white !important;
					color: @primary-colour !important;
				}
			}

			a {
				&:first-child {
					@media @mobile {
						display: none;
					}
				}
			}
		}
	}
}




// Click 360 overrides

.rsThumbs {
	display: none;
	visibility: hidden;
}

.rsFullscreen .rsThumbs {
	display: block;
	visibility: visible;
}

.click-360-gallery {
	margin-bottom: 50px;

	&__gallery {
		background: fade(black,60%);
	}

	&__controls {
		display: flex;
		top: 100%;
		width: 100%;
		padding: 0;
		margin-right: -1px;
		background: @custom-colour2;
		color: @text-colour;

		li {
			flex: 1 1 50px;
			margin: 0;
			padding: 0;
			background: @custom-colour2;
			text-align: center;
			border-right: 1px solid white;

			@media @mobile {
				padding: 0;
			}

			&:hover,
			&.current {
				i:first-of-type {
					color: @accent-colour;
				}
			}

			&[data-gallery-control="spinner"] {
				flex: 2 2 100px;

				.ci.ci-threesixty-l {
					display: none;
				}

				.ci.ci-doors-closed-l:before {
					.char(threesixty-l);
				}

				ul {
					display: flex !important;
					margin-right: -1px;

					li {
						flex: 1 1 50px;
						text-align: center;
						border-right: 1px solid white;

						&:hover,
						&.current {
							i:first-of-type {
								color: @accent-colour !important;
							}
						}

						i {
							background: none !important;
							color: @text-colour !important;
						}
					}
				}
			}

			i {
				padding: 11px;
				background: none !important;
				color: @text-colour;
			}
		}

		ul {
			display: inline-block !important;
			pointer-events: initial !important;

			& > li {
				opacity: 1 !important;
				transform: none !important;
			}
		}
	}
}`
				},
			],   
    };
  },
});
