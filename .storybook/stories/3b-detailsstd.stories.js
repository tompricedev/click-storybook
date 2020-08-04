import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */

import stdDtAccordion from "./assets/screenshots/std-dt-accordion.png";

export default {
  title: "Details/Standard",
};

/***** 01. DetailsAccordion *****/

export const DetailsAccordion = () => ({
  name: "DetailsAccordion",
  components: {
    StoryBlock,
  },
  template: `
		<StoryBlock :items="items" >
		<img src="${stdDtAccordion}" alt="${name}" style="max-width:100%; height: auto;" />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "LESS",
					code: `// NOTES: WILL NEED 17. ROYAL SLIDER DETAILS AND GENERAL CAROUSEL STYLINGS

#detail #webzationForm label { color: @primary-colour;}
#detail .finance-table-wrap .container,
#detail #webzation-text .container { border-top: none;}
#results #webzation-text .container { background:none!important;}
#detail #finance-table-wrap .sixcol:last-child { margin-right: 0px;}
#webzation-text {background: white;}

// NOTES: WILL NEED 17. ROYAL SLIDER DETAILS AND GENERAL CAROUSEL STYLINGS

#detail .finance-table-wrap .container,
#detail #webzation-text .container { border-top: none;}
#results #webzation-text .container { background:none!important;}
#detail #finance-table-wrap .sixcol:last-child { margin-right: 0px;}


#detail-pg {
	@media @mobile{
		padding: 0px;
	}
	.container {
		#detail{
			padding-top: 30px;
			@media @tablet{
				padding: 20px 0!important;
			}
		}

		#detail-tab-content{
			float: left;
			width: 100%;
			padding: 15px 0 0 0;
		}

		h2.lined-heading{
			position: relative;
			.main-header;
			.main-header.center;
			
		}

		.section1.detail-header {

			h1 {
				.main-header;
				padding: 0px!important;
				@media @mobile{
					.main-header.center;
				}
			}

			cite {
				float: left;
				width: 100%;
				padding-bottom: 10px;
				margin-bottom: 0;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-family: @alpha-font;
				font-weight: 400;
				font-size: 16px;
				color: @accent-colour;
				line-height: 20px;
				text-transform: none;
				text-decoration: none;
			}

			// Hidden back button

			.row{
				.sixcol{width: 100%;}
				.sixcol.last{display:none; visibility: hidden;}
			}

			.price {
				color: @primary-colour;
				background: none;
				float: left;
				display: block;
				width: 100%;
				font-family: @alpha-font;
				font-weight: 700;
				font-size: 38px;
				line-height: 1.2;
				text-align: right;
				position: relative;
				@media @mobile{
					text-align: center;
					font-size: 22px;
					margin-bottom: 20px;
				}
			}

		} // End section1 detail-header

		.section2.detail-presentation{
			padding-bottom: 50px;
			float: left;
			width: 100%;
			overflow: hidden;

			.price-wrapper {
				.pad-10{
					padding: 10px 0;
				}
				float: left;
				width: 100%;
				margin-bottom: 15px;
				height: auto;
				font-family: @alpha-font;
				font-size: 24px;
				line-height: 30px;
				color: @accent-colour;
				background:none;
				text-decoration: none;
				text-align: right;
				border-radius: 3px;
				-webkit-border-radius: 3px;
				-moz-border-radius: 3px;
				@media @mobile{
					text-align: center;
				}
				span {
					text-align: right;
					@media @mobile{
						text-align: center;
					}
					a {
						color: @text-colour;
						text-decoration: none;
						text-transform: none;
						border-bottom: none;
						font-size: 16px;
						float: left;
						width: 100%;
						clear: both;
						&:hover {
							color: @accent-colour;
						}
					}
				}
			} // End price-wrapper

			.details-cta {
				float: left;
				width: 100%;
				clear: both;
				margin-bottom: 10px;

				li {
					float: left;
					width: 100%;
					text-align: left;
					margin: 0 0 10px 0;

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
						transition: @transition;

						span {
							color: white;
							background: @accent-colour;
							width: 50px;
							text-align: center;
							margin-right: 15px;
							border-radius: 0px!important;
							transition: @transition;
							line-height: 3;
							
							@media @tablet{
								height: 50px;
								line-height: 50px;
							}
						}

						&:hover{
							background: @secondary-colour;
							color: white;
							transition: @transition;
						}

					}
				}
			} // End detail-cta



			.favourites-button{
				.sixcol.mobile-half-col{
					width: 100%!important;
					.button{
						margin-top: 0px!important;
					}
				}
			}

		} // End section2 .detail-presentation

		.section3 {
			float: left;
			width: 100%;
			padding: 20px 0;

			@media @tablet{
				border-bottom: 0px;
			}

			ul {
				float: left;
				width: 100%;
				margin: 0;
				padding: 0;

				li {
					float: left;
					width: 100%;
					font-size: 14px;
					line-height: 40px;
					margin: 0 0 5px 0;
					color: @primary-colour;
					border-bottom: 1px solid fade(black,50%);
				}

				span {
					color: @primary-colour;
					margin-right: 7px;
					float: left;
					height: 40px;
					line-height: 40px;
					font-size: 18px;
				}
			}
		} // End section3

		#tabs-here{
			float: left;
			width: 100%;
			padding: 20px 0;

			.wrapper{
				padding: 0px;
				overflow: visible!important;
			}

			h2{
				.main-header;
				.main-header.center;
				font-size: 32px;
				@media @mobile{font-size: 20px;margin: 10px 0 20px 0;}
			}

			a#finance_apply.button{float: right;}

			.detail-tabs {
				display: block;
				width: 100%;

				ul.tabs {
					list-style: none;
					border-bottom: none;
					background: none;
					display: flex;
					height: auto;

					li {
						flex: 1 1;
						text-align: center;
						font-family: @alpha-font;
						font-size: 18px;
						font-weight: 400;
						text-transform: none;
						line-height: 18px;
						color: @primary-colour;
						display: block;
						padding: 15px;
						box-sizing: border-box;
						border: none;
						background: #dddddd;
						transition: all 0.2s ease-in-out;
						@media @tablet {
							font-size: 15px;
						}
						@media @mobile {
							font-size:14px;
							padding: 12px;
						}

						&.current,
						&:hover.current,
						&:hover {
							color: @primary-colour;
							background: @tab-active-bg-colour;
							box-shadow: none;
							transition: all 0.2s ease-in-out;
							border: none;
							@media @mobile {
								padding: 12px !important;
							}
						}

						&#tab_header_features {
							order: 1;
						}

						&#tab_header_details {
							order: 2;
						}

						&#tab_header_finance {
							order: 3;
						}

						&#tab_header_gallery {
							order: 4;
						}

						span {
							font-size: 14px;
							text-transform: none;
							padding: 5px 5px 5px 5px;
							background: none;
							color: @accent-colour;
							transition: all 0.2s ease-in-out;
						}

					} // End li

				} // End ul.tabs


				.box {
					border: none;
					padding: 0;
					float: left;
					width: 100%;
					clear: both;
					background: @box-bg-colour;

					&.visible {
						display: block;
					}

					@media @mobile{
						&#tab_body_gallery{
							height: 0px!important;
						}
					}


					.tab-content {
						float: left;
						width: 100%;
						background: none;
						padding-bottom: 40px;
						color: @primary-colour;

						#detail-filters .webz .pad-15{padding: 0px!important;}

						input{
							height: 40px;
							padding: 0;
							&:focus{
								border-color: @accent-colour;
								box-shadow: none;
							}
						}

						h2 {
							span {
								display: none;
							}
							@media @mobile{font-size: 20px;margin: 10px 0 20px 0;}
						}

						h3 {
							color: @box-heading-colour;
						}

						p {
							line-height: 1.2em;
							margin-bottom: 12px;
							padding-top: 15px;
							color: @primary-colour;
						}

						select#finance_term{
							min-width: 100px;
						}


						ul.summary-list {
							margin-top: 15px;
							display: inline-block;
							// border-right: 1px solid #cccccc;
							height: auto;
							width: 100%;

							li{
								font-size: 13px;
								background: @panel-bg-colour;
								color: @primary-colour;
								line-height: 45px!important;
								height: 45px;
								margin-bottom: 5px;

								&:last-child{
									border-bottom: 0px;
								}

								div.list-label{
									line-height: 45px!important;
									height: 45px!important;
								}

								span{
									font-size: 21px;
									padding: 0 15px;
									height: 45px;
									background: @primary-colour;
									line-height: 45px;
									width: 45px;
									margin-right: 5px;
									padding: 0;
									display: inline-block;
									text-align: center;
									color: @custom-colour1;
								}
							}
						} // End summary-list

						ul.image-grid{
							li{
								position: relative;
								background: @primary-colour;
								&:hover img{
									opacity: 0.5;
								}
							}
						}

						ul.tablist{
							li{
								padding: 5px;
								color: #999;
								box-sizing: border-box;
								&:nth-child(odd){background: #f5f5f5;}
								&:nth-child(even){background: #ffffff;}
							}
						}
						
						.accordion{ // Start Accordion
							padding-bottom: 20px;

							#accordion-tech{

								.ui-accordion-header:first-child{
									margin-top: 0px!important;
								}

								.ui-accordion-header {
									display: block;
									cursor: pointer;
									position: relative;
									margin: 25px 0 0 0 !important;
									padding: 10px;
									width: auto;
									min-height: 0;
									line-height: 22px;
									font-size: 100%;
									background: @accordion-heading-bg-colour;
									color: @accordion-heading-text-colour;
									outline: none;

									&:before{display: none;}

									span{
										color: @accordion-icon-colour!important;
									}

									@media @mobile{
										font-size: 80%;
									}

								} // End ui-accordion-header

								.ui-state-default{
									&:after{
										content: '\f078';
										position: absolute;
										font-family: 'FontAwesome';
										width: 20px;
										text-align: center;
										color: @accordion-icon-colour;
										position: absolute;
										right: 15px;
										z-index: 1;
									}
								}

								.ui-state-active {
									&:after{
										content: '\f00d';
										position: absolute;
										font-family: 'FontAwesome';
										width: 20px;
										text-align: center;
										color: @accordion-icon-colour;
										position: absolute;
										right: 15px;
										z-index: 1;
									}
								}

								.ui-accordion-content{
									padding: 0px;
									border-top: none;
									overflow: auto;

									ul.tablist{
										li {
											color: white;
											font-size: 12px;
											line-height: 18px;
											font-weight: 600;
											display: block;
											width: auto;
											padding: 5px 10px;
											white-space: nowrap;
											overflow: hidden;
											text-overflow: ellipsis;
											margin: 0;
											background: #f5f5f5;

											&:nth-child(2n+2) {
												background: #ffffff;
											}

											&:last-child {
												border-bottom: none;
											}

											.list-label {
												color: @list-label;
												position: relative;
												float: left;
												text-align: left;
												display: block;
												width: 220px;
												@media @mobile{
													width: 100%!important;
												}
											}

											.list-stat {
												color: @list-stat;
												float: left;
												text-align: left;
												position: relative;
												display: block;
												width: auto;
											}
										}

									} // End ul.tablist

								} // End ui-accordion-content
							} // End accordion-tech
						} // End Accordion
					} // End tab-content
				} // End box
			} // End detail .detail-tabs
		} // End section 5 #tabs-here

		.section6{

			.vehicle-carousel {
				float: left;
				width: 100%;
				padding: 20px 0 40px 0;

				h5 {
					.main-header;
					.main-header.center;

				}

				#detail-similar-carousel{
					width: 100%;
					height: 195px;
					margin: 0 auto;

					.arrow-icon{
						display: none;
					}

					.touchcarousel-item {
						width: 204px;
						margin-right: 15px;
						position: relative;
						text-align: center;

						h4, p  {
							float:left;
							position: relative;
							margin: 0;
							padding: 0;
							border: 0;
							font-size: 13px;
						}

						img {
							width: 100%;
							height: auto;
						}

						.carousel-text {
							position: absolute;
							display: block;
							float: left;
							width: 100%;
							bottom: -50px;
							background: none;
							text-align: left;

							em.carousel-info {
								font-family: @alpha-font;
								font-weight: 700;
								font-size: 18px;
								line-height: 1.2;
								color: @primary-colour;
								position: relative;
								float: left;
								width: 100%;
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								padding: 5px 0;

								span {
									font-size: 14px;
									font-weight: 400;
									color: @accent-colour;
									display: block;
									margin-top: 5px;
								}

							}
						}
					}
				} // End detail-similar-carousel
			}
		} // End section6
	} // End Container

} // End #detail


.rsFullscreenBtn{display: none!important;}

.rsFullscreen img{
	max-height: 100%!important;
	max-width: 100%!important;
	height: auto!important;
	width: auto!important;
	display: block!important;
	position: absolute!important;
	top: 0!important;
	bottom: 0!important;
	left: 0!important;
	right: 0!important;
	box-sizing: border-box!important;
	margin: auto!important;
}`
				},
			],
    };
  },
});
