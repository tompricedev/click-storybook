import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import ModMakeAndModel from "./Modules/ModMakeAndModel";
import stdKSP from "./assets/screenshots/std-results-ksp.png";

export default {
  title: "Results/Standard",
};

/***** 01. KSPs *****/

export const KeySellingPoints = () => ({
  name: "KeySellingPoints",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
		<img src="${stdKSP}" alt="${name}" style="max-width:100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
        {
          tab: "HTML",
          code: `<div class="row-block listing {RESULTS_CLASS} veh-loc-{RESULTS_LOCATION_ID} {VEH-ODDEVEN}">
	<div class="container">
		<div class="row">
			<section class="container vehicle {RESULTS_CLASS} veh-loc-{RESULTS_LOCATION_ID}">
				<div class="pad-10 overflow-hidden">
					<div class="row section1">
						<div class="fourcol">
							<a href="/{RESULTS_SLUG}" title="{RESULTS_TITLE_MAKEMODEL}" class="vehicle-image">
										<img {RESULTS_IMAGE_1_SRC} {RESULTS_IMAGE_1_SRC_SET} {RESULTS_IMAGE_1_PLACEHOLDER} alt="View our {RESULTS_MAKE} {RESULTS_MODEL}" class="lazy" />
								</a>
							<div class="button-block">
								<a href="/{RESULTS_SLUG}" class="" title="View Gallery"><span aria-hidden="true" class="icon icon-picture"></span> {NUM_IMAGES} Images</a>
								<a href="/{RESULTS_SLUG}" class="youtube" title="View Video"><span aria-hidden="true" class="icon icon-youtube"></span> View Video</a>
							</div>
							<div class="clear"></div>
							<div class="row">
								<div class="twelvecol mobile-hidden dt-partners">
									<div class="row">
										{v2_SHOWROOM_PARTNER_LOGOS}
									</div>
								</div>
							</div>
						</div>
						<div class="eightcol last">
							<div class="eightcol vehicle-title">
								<h3><a href="/{RESULTS_SLUG}" title="View Vehicle Details">{RESULTS_TITLE_MAKEMODEL}</a></h3>
								<cite class="mobile-hidden">{RESULTS_TITLE_KSP}</cite>
								<p class="price-save"><span class="price-was">{RESULTS_WAS}</span> {RESULTS_SAVING}</p>
							</div>
							<div class="fourcol last right">
								<div class="price">
										<span class="price-is">{CURRENCY_SYMBOL}{RESULTS_WEB_PRICE}<br /><span class="results_monthly_payment">{RESULTS_FINANCE_TEXT}</span></span>
								</div>
				{CFC_BUTTON}
							</div>
							<div class="clear"></div>
							<div class="row">
								<div class="twelvecol desktop-hidden mob-partners">
									<div class="row">
												{v2_SHOWROOM_PARTNER_LOGOS}
									</div>
								</div>
							</div>
							<div class="clear"></div>
									<div class="row">
										{v2_RESULTS_TWO_CAR_BULLET_POINTS}
											<div class="fivecol spec-three last mobile-hidden">
												<div class="spec ticks">
													<div class="pad-10-top-bottom">
														<ul>
																{v2_KEY_INFO_LIST}
														</ul>
													</div>
												</div>
											</div>
									</div>
							<div class="clear"></div>
							<div class="row">
								<div class="container">
									<div class="results-btn-add threecol mobile-hidden">
										<!-- <button type="button" class="button full {FAVOURITE_CLASS}" id="favourite-{RESULTS_ID}" title="Favourite">{ADD_REMOVE_FAVOURITES}</button> -->
										{ADD_REMOVE_FAVOURITES}
									</div>
									<div class="results-btn-compare fourcol mobile-hidden">
										<a href="/compare.php" class="button white full" title="Compare">View Watchlist</a>
									</div>
									<div class="results-btn-finance fourcol last desktop-hidden mobile-half-col">
										<a href="/{RESULTS_SLUG}#tabs-here" class="button black full" title="View Finance Details"><span aria-hidden="true" class="icon icon-calculate"></span> Finance Options</a>
									</div>
									<div class="results-btn-view fivecol last mobile-half-col">
										<a href="/{RESULTS_SLUG}" class="button black full" title="View Vehicle Details"><span aria-hidden="true" class="icon icon-search"></span> View Vehicle</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row section4 mobile-hidden">
						<div class="twelvecol">
							{RESULTS_FINANCE_TABLE}
								{v2_RESULTS_FINANCE_PROMOTION}
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</div>`,
        },
        {
          tab: "LESS",
          code: `.super-banner {
	display: none !important;
}


#results {
	position: relative;
	float: left;
	width: 100%;
	
	.listing{
		background: white;
		padding: 40px 0;
		border-bottom: 1px solid #eee;
	}

	.section1{
		margin-bottom: 10px;
		float: left;

		.results-btn-add,
		.results-btn-view{
			width: 32%;
		}
		.results-btn-add{
			button{
				padding:0px!important;
			}
		}
	}

	.vehicle,
	.vehicle-sold {
		float: left;
		width: 100%;
		margin-bottom: 15px;
		background: none;
		border-top: none;

		.vehicle-title{

			.price-was {
				text-decoration:
				line-through;
				color: #9c0000;
			}

			.price-save {
				color: #006925;
				margin-left: 5px;
				text-align: left;
			}

			h3 {
				margin-bottom: 0px;

				a {
					font-family: @heading-font;
					font-weight: @heading-weight;
					color: @heading-colour;
					font-size: 24px;
					line-height: 1;
					text-transform: none;
					text-decoration: none;
					text-overflow: ellipsis;
					@media @tablet{
						font-size: 18px;
					}
				}
			}
			cite {
				font-family: @alpha-font;
				font-weight: 400;
				font-size: 16px;
				font-variant: normal !important;
				color: @accent-colour;
				line-height: 20px;
				float: left;
				width: 100%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				margin-bottom: 10px;
				margin-bottom: 0;
				overflow: hidden;
				text-transform: none;
				text-decoration: none;
			}
		} // End .vehicle-title

		.price{
			float: left;
			width: 100%;
			clear: both;
			overflow: hidden;
			margin-bottom: 10px;
			text-transform: none;
			text-decoration: none;

			.price-is {
				font-family: @heading-font;
				font-weight: @heading-weight;
				color: @heading-colour;
				font-size: 24px;
				float: left;
				width: 100%;
				text-align: right;
				display: block;
			}

			.results_monthly_payment {
				float: left;
				width: 100%;
				clear: both;
				overflow: hidden;
				font-family: @alpha-font;
				font-size: 14px;
				font-weight: 400;
				color: @accent-colour;
				padding-top: 4px;
				line-height: 18px;

				@media @tablet{
					font-size: 16px;
				}

				a {
					color: @accent-colour;
					text-decoration: none;
					&:hover {
					color: @primary-colour;
					}
				}

			} // End .results_monthly_payment

			.results_weekly_payment {
				float: left;
				width: 100%;
				clear: both;
				overflow: hidden;
				font-family: @alpha-font;
				font-size: 14px;
				font-weight: 400;
				color: @accent-colour;
				padding-top: 4px;
				line-height: 18px;
				visibility: hidden;
				display: none;

				a {
					color: @accent-colour;
					text-decoration: none;
					&:hover{
					color: @primary-colour;
					}
				}

			} // .results_weekly_payment

		} // End .price

		.spec {
			float: left;
			width: 100%;
			color: @text-colour;
			font-family: sans-serif;
			font-weight: normal;
			font-size: 12px;
			line-height: 1.2em;

			li{
				background: fade(black,5%);
				height: 40px;
				font-size: 16px;
				margin-bottom: 10px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				color: @text-colour;
				&:last-child{
					margin-bottom: 20px;
				}
				span{
					display: inline-block;
					text-align: center;
					height: 40px;
					width: 40px;
					line-height: 40px;
					background: black;
					color: white;
					margin-right: 5px;
				}
			}

		} // End spec


		.vehicle-image{
			img{
				width: 100%;
				height: auto;
			}
		}

		.button-block {
			background: black;
			float: left;
			position: relative;
			height: 33px;
			margin-bottom: 10px;
			width: 100%;
			text-align: left;
			padding: 0;
			z-index: 2;

			a {
				font-family: @alpha-font;
				font-weight: 400;
				font-size: 18px;
				color: white;
				text-decoration: none;
				text-shadow: none;
				display: inline;
				line-height: 33px;
				height: 33px;
				padding-right: 5px;
				&:hover{
					color: @accent-colour;
				}
				span{
					height:33px;
					color: white;
					margin-right: 7px;
					background:@accent-colour;
					width: 33px;
					display: inline-block;
					text-align: center;
				}
			}

			@media @tablet {
				height: 25px;
				a{
					font-size: 14px;
					line-height: 25px;
					height: 25px;
					span{
						height: 25px;
						width: 25px;
					}
				}
			}

		}

		.dt-partners {
			img {
				height: 60px;
			}
		}

		.fin-promo {
			background: @fin-promo-bg-colour;
			display: none;
			em {
				position: relative;
				float: left;
				width: 100%;
				font-family: @alpha-font;
				font-weight: 400;
				font-size: 18px;
				line-height: 42px;
				text-align: center;
				color: @fin-promo-text-colour;

				@media @tablet {
					font-size: 15px;
				}

				span{
					color: @fin-promo-span-colour;
				}

				a {
					text-decoration: none;
					text-transform: none;
					border-bottom: none;
					color: @fin-promo-link-colour;

					&:hover{
						color: @fin-promo-link-hover-colour;
					}
				}
			}
		} // End .fin-promo


		/* Hide Youtube Video Button on standard vehicle row */
		a.youtube { visibility: hidden; display: none;}

		&.youtube { // youtube styles

			a.youtube { visibility: visible; display: inline;}

			a.vehicle-image {
				&:after {
					content: url('@{global-img}/youtube-sash.png');
					display: block;
					position: absolute;
					float: left;
					top: -4px;
					left: -5px;
				}
			}

			.price .price-was {
				color: #70000b;
			}

			cite {
				color: #70000b;
			}
		} // End youtube styles



	} // End .vehicle

} // End #results`,
        },
      ],
    };
  },
});
