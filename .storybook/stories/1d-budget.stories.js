import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";
import StoryPreviewImg from "./Components/StoryPreviewImg";

/* Module imports for previews */
import ModSliderOnly from "./Modules/ModSliderOnly";

export default {
  title: "Homepage Modules/Budget Search",
};


/***** 01. Slider Only *****/

import SliderOnlyImg from './assets/screenshots/slider-only.png';

export const SliderOnly = () => ({
  name: "SliderOnly",
  components: {
    StoryBlock,
    StoryPreviewImg
  },
  template: `
		<StoryBlock :items="items">
			<StoryPreviewImg :preview="preview" />
		</StoryBlock>
	`,
  data() {
    return {
			preview: `${SliderOnlyImg}`,
      items: [
				{
					tab: "HTML",
					code: `<div class="row-block finance lazy-background">
	<div class="wrapper">
		<div class="container">

			<div id="budget-slider">

				<div id="finance-budget-range-min" class="clear-fix">
					<div class="row">
						<div class="sixcol">
							<h2><span>We Are</span> Finance Specialists</h2>
							<p>At CAR<span class="accent">NOW</span> we have over 15 years’ experience developing relationships with industry leading finance companies that cater for all credit profiles. With interest rates as low as 6.9% APR. We have helped hundreds of customers secure the best finance deal for their budget. Click Our car finance in 60 seconds bar below for an instant decision. </p>
							<div class="form-group clear-fix">
								<label for="amount-budget-range-min">Monthly Budget:</label>
								<input type="text" id="amount-budget-range-min" />
							</div>
							<div class="eightcolx">
								<div class="slider-group">
									<div id="slider-range-min"></div>
								</div>
							</div>
							<div class="fourcolx">
								<a id="button-budget-range-min" class="btn" href="/search_page.php?budget=200" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC} finance in {v2_TOWN}: search">Search</a>
							</div>
						</div>

							<!-- <div class="sixcol last">
							<ul class="budget-boxes">
								<li class="lazy-background"><a href="/search_page.php?budget=100" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s for sale - up to &pound;100 p/m"><span>Upto &pound;100 p/m</span></a></li>
								<li class="lazy-background"><a href="/search_page.php?budget=200" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s for sale - up to &pound;200 p/m"><span>Upto &pound;200 p/m</span></a></li>
								<li class="lazy-background"><a href="/search_page.php?budget=99999" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s for sale - over &pound;200p/m"><span>&pound;200 p/m Plus</span></a></li>
							</ul>
						</div> -->

					</div>
				</div>

			</div>

		</div>
	</div>
</div>`
				},
				{
					tab: "LESS",
					code: `.row-block.finance {
	padding: 60px 20px;

	&.visible {
		background: url('@{dealer-img}/theme/bmw-slider.jpg') no-repeat center center !important;
		background-size: cover !important;

		&::before {
			content: '';
			height: 100%;
			width: 100%;
			display: block;
			background: linear-gradient(to right, rgba(0,0,0,.6), rgba(0,0,0,.3), rgba(0,0,0,0));
			position: absolute;
			top: 0;
			left: 0;
			@media @mobile {
				width: 100%;
				background: fade(black,50%);
				background-image: url('@{dealer-img}/theme/bmw-slider--mobile.jpg')  no-repeat center center;
				background-size: cover !important;
			}
		}

		@media @mobile {
			background: none;
		}
	}

	.container {
		overflow: visible;
		.homepage-budget-search{
			.homepage-budget-search__container{
				.homepage-budget-search__slider{
					.form-group{
						input{
							color: @secondary-colour;
						}
					}
				}
			}
		}
	}

}

#budget-slider {

	h2 {
		color: white;
		font-size: 40px;
	}

	h3 {
		//font-family: @heading-font;
		font-size: 38px;
		//font-weight: @heading-weight;
		font-weight: 700;
		line-height: 1;
		color: white;
		text-transform: none;
		margin: 0 0 20px 0;

		@media @tablet {
			font-size: 34px;
		}
		@media @mobile {
			font-size: 30px;
		}

		span {
			color: white;
		}
	}

	p {
		color: white;
		margin: 0 0 15px 0;
	}

	#finance-budget-range-min  {
		clear: both;
		margin: 0px 0 0 0;

		label {
			float: left;
			margin: 0 10px 10px 0;
			padding: 0;
			//font-family: @heading-font;
			font-weight: 600;
			font-size: 24px;
			line-height: 31px;
			display: inline-block;
			float: left;
			text-transform: uppercase;
			cursor: pointer;
			color: white;
		}

		input#amount-budget-range-min {
			border: 0;
			color: @accent-colour;
			//font-family: @charlie-font;
			font-size: 24px;
			height: 30px;
			font-weight: 600;
			float: left;
			display: inline-block;
			width: 120px;
			margin: 0 !important;
			padding: 0 !important;
			background: none;
			cursor:pointer;
			box-shadow: none;
			text-shadow: none;
		}

		.slider-group {
			margin: 10px 0 0 0;
			clear: both;

			#slider-range-min {
				border: none;
				background: fade(white,10%);
				height: 14px;
				border-radius: 99px;

				.ui-slider-range {
					background: @accent-colour;
				}

				.ui-state-default {
					border: none;
					background: white;
				}

				.ui-slider-handle {
					width: 28px;
					height: 28px;
					top: -7px !important;
					margin-left: -14px !important;
					color: white;

					&:focus {
						outline: none;
					}

				}

			}

		}

		#button-budget-range-min {
			.btn;
			margin-left: 20px !important;
			&:hover {
				background: white !important;
				color: @primary-colour !important;
			}
		}

	}

}

@media handheld, only screen and (max-width: 979px) { /* <= Tablet */

	.row-block.finance {
		padding: 70px 0;
		background-image: url('@{dealer-img}/theme/finance_bg-tablet{CACHE_BUSTER}.jpg');
	}
}

@media handheld, only screen and (max-width: 739px) { /* <= Mobile */

	.row-block.finance {
		padding: 50px 0;

		.wrapper {
			padding: 0 15px;
		}

	}

	#budget-slider {

		#finance-budget-range-min {

			.slider-group {

				#slider-range,
				#slider-range-min {
					width: 96%;
				}

			}

			label {
				margin: 0 !important;
			}

			input#amount-budget-range-min {
				margin: 0 0 20px 0 !important;
			}

			#button-budget-range-min {
				width: auto;
				margin-top: 0px;
				margin: 0 0 20px 0 !important;
			}

		}

	}    

}`
				},
				{
					tab: "JS",
					code: `$(function () {
		$("#slider-range-min").slider({
				range: "min",
				value: 200,
				min: 0,
				max: 1000,
				step: 25,
				slide: function (event, ui) {
						$("#amount-budget-range-min").val("£" + ui.value);
						$("#button-budget-range-min").attr("href", "/search_page.php?budget=" + ui.value);
				}
		});
		$("#amount-budget-range-min").val("£" + $("#slider-range-min").slider("value"));
});`
				}
			],  
    };
  },
});

/***** 02. Slider with car *****/

import SliderCar from './assets/screenshots/slider-with-car.png';

export const SliderWithCar = () => ({
  name: "SliderWithCar",
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
			preview: `${SliderCar}`,
      items: [
				{
					tab: "HTML",
					code: `<!-- Homepage Search Finance -->
<div class="{v2_4_MOBILE_ON_OFF} {v2_4_TABLET_ON_OFF} {v2_4_DESKTOP_ON_OFF}">
	<div class="row-block finance lazy-background">
		<div class="wrapper">
			<div class="container">

				<div id="budget-slider">

					<div id="finance-budget-range-min" class="clear-fix">
						<div class="row">

							<div class="twelvecol">
								<h3>We Are <span>Finance Specialists</span></h3>
								<p>We have relationships with high street lenders and specialist motoring finance houses too, that is why we have helped hundreds of customers secure the best finance deal for their budget.</p>
								<div class="form-group">
									<label for="amount-budget-range-min">Monthly Budget:</label>
									<input type="text" id="amount-budget-range-min" readonly />
								</div>
								<div class="slider-group">
									<div id="slider-range-min"></div>
								</div>
							</div>

							<a id="button-budget-range-min" class="button" href="/search_page.php?budget=200" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC} finance in {v2_TOWN}: search">Search</a>

						</div>
					</div>

				</div>

				<div class="finance-car">
					<img data-src="/img-src/{v2_FOLDER}/theme/finance-car.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" class="lazy" alt="We are finance specialists">
				</div>

			</div>
		</div>
	</div>
</div>
<!-- // Homepage Search Finance -->`
				},
				{
					tab: "LESS",
					code: `.row-block.finance {
		&.visible {
			background: #f5f5f5 url('@{dealer-img}/theme/finance-bg{CACHE_BUSTER}.jpg') center center no-repeat !important;
			background-size: cover !important;
		}
		padding: 90px 0;
		overflow: hidden;
		@media @tablet{
			padding: 40px 0;
		}
		@media @mobile{
			padding: 40px 0 0 0;
		}
		
		.container {
			overflow: visible;
		}
	
		@media @mobile{
			.wrapper{
				overflow: visible;
			}
		}
	
		.finance-car{
			margin-top: -90px;
			position: absolute;
			left: 50%;
			pointer-events: none;
			img{
				max-height: 480px;
			}
			@media @mobile{
				margin-top: 0px;
				position: relative;
				left: auto;
				img{
					max-width: 100%;
				}
			}
		}
		
	}
		
		
		
	#budget-slider {
		padding: 20px;
		box-sizing: border-box;
		background: fade(black,65%);
		width: 90%;
		margin-left: -10%;
		float: left;
	
		@media handheld, only screen and (max-width: 1370px){
			margin-left: 0;
			width: 80%;
		}
	
		@media @mobile{
			width: 100%;
		}
		
		h3 {
			font-family: @charlie-font;
			font-size: 22px;
			line-height: 1.2;
			color: white;
			text-transform: none;
			margin: 0 0 14px 0;
			font-weight: 300;
		
			span {
				font-size: 34px;
				display: block;
				font-weight: 400;
			}
		
		}
		
		p {
			font-size: 16px;
			width: 70%;
			color: white;
			margin: 0 0 15px 0;
			@media @mobile{
				width: 100%;
			}
		}
		
		#finance-budget-range-min  {
			clear: both;
			margin: 0;
		
			label {
				float: left;
				margin: 0 10px 10px 0;
				padding: 0;
				font-family: @charlie-font;
				font-weight: 400;
				font-size: 24px;
				line-height: 31px;
				display: inline-block;
				float: left;
				cursor: pointer;
				color: white;
		
				@media @mobile{
					text-align: left;
					margin-right: 0px;
				}
			}
		
			input#amount-budget-range-min {
				border: 0;
				color: white!important;
				font-family: @charlie-font;
				font-size: 24px;
				height: 33px!important;
				font-weight: bold;
				float: left;
				display: inline-block;
				width: 120px;
				margin: 0 0 10px 0!important;
				padding: 0!important;
				background: none!important;
				cursor:pointer;
				box-shadow: none;
				text-shadow: none;
		
				@media @mobile{
					width: 80px;
					text-align: right;
					float: right;
				}
			}
		
			.slider-group {
				margin: 10px 0 0 0;
				clear: both;
				width: 70%;
	
				@media @mobile{
					width: 100%;
				}
		
				#slider-range-min {
					border: none;
					background: fade(white,20%);
					height: 14px;
					border-radius: 99px;
					border: 0px!important;
		
					.ui-slider-range {
						background: @accent-colour;
					}
		
					.ui-state-default {
						border: none;
						background: white;
					}
		
					.ui-slider-handle {
						width: 28px;
						height: 28px;
						top: -7px !important;
						margin-left: -14px !important;
						background: white;
		
						&:focus {
							outline: none;
						}
		
					}
		
				}
		
			}
		
			#button-budget-range-min {
				// .btn-main;
				float: left;
				margin: 0px!important;
		
				@media @mobile{
					position: relative;
				}
			}
		}
	}`
				},
				{
					tab: "JS",
					code: `$(function() {
	$( "#slider-range-min" ).slider({
		range: "min",
		value: 200,
		min: 0,
		max: 1000,
		step: 25,
		slide: function( event, ui ) {
			$( "#amount-budget-range-min" ).val( "£" + ui.value );
	$("#button-budget-range-min").attr("href", "/search_page.php?budget="+ui.value);
		}
	});
	$( "#amount-budget-range-min" ).val( "£" + $( "#slider-range-min" ).slider( "value" ) );
});`
				}
			],    
    };
  },
});

/***** 03. Slider with budgets *****/

import SliderWBudgets from './assets/screenshots/slider-with-budgets.png';

export const SliderWithBudgets = () => ({
  name: "SliderWithBudgets",
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
			preview: `${SliderWBudgets}`,
      items: [
				{
					tab: "HTML",
					code: `<div class="row-block finance">

	<div class="wrapper">
		<div class="container">

			<div id="budget-slider">
				<div class="row">
					<div class="sevencol">
						<h3>We can help you find the best finance deal</h3>
						<p>We have relationships with high street lenders and specialist motoring finance houses too, that is why we have helped hundreds of customers secure the best finance deal for their budget.</p>

						<div class="budget-boxes">
							<ul>
								<li>
									<img data-src="/img-src/{v2_FOLDER}/theme/budget-1.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="Bikes up to £150 p/m" class="lazy responsive-img">
									<a href="/search_page.php?budget=150" title="Search bikes up to the value of £150 p/m" class="btn">Bikes up to £150 p/m</a>
								</li>
								<li>
									<img data-src="/img-src/{v2_FOLDER}/theme/budget-2.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="Bikes up to £250 p/m" class="lazy responsive-img">
									<a href="/search_page.php?budget=250" title="Search bikes up to the value of £250 p/m" class="btn">Bikes up to £250 p/m</a>
								</li>
								<li>
									<img data-src="/img-src/{v2_FOLDER}/theme/budget-3.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="Bikes over £250 p/m" class="lazy responsive-img">
									<a href="/search_page.php?budget=999999" title="Search bikes over the value of £250 p/m" class="btn">Bikes over £250 p/m</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="onecol"></div>
					<div class="fourcol finance-calc last">
						<div id="finance-budget-range-min" class="clear-fix">
							<div class="row">
								<h3>Have a more specific budget?</h3>
								<p>Use our budget slider to find cars in your price range</p>
								<div class="twelvecol">
									<div class="form-group">
										<label for="amount-budget-range-min">Monthly Budget:</label>
										<input type="text" id="amount-budget-range-min" />
									</div>
									<div class="slider-group">
										<div id="slider-range-min"></div>
									</div>
								</div>
								<div class="twelvecol last">
									<a id="button-budget-range-min" class="button" href="/search_page.php?budget=200" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC} finance in {v2_TOWN}: search">Search</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>

</div>`
				},
				{
					tab: "LESS",
					code: `.row-block.finance {
	background: @primary-colour;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='539' height='539' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%23262626' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%23262626' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E");
	padding: 100px 0;
	

	.container {
		overflow: visible;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
	}

	.finance-calc,
	.sevencol,
	.onecol {
		@media @tablet {
			width: 100%;
			margin-right: 0;
		}
	}

}

#budget-slider {

	h3 {
		max-width: 720px;
		margin: 0 auto 20px 0;
		color: white;
		font-family: @alpha-font;
		font-size: 40px;
		font-weight: 700;
		line-height: 1;
		text-transform: none;

		span {
			color: @accent-colour;
		}
	}

	p {
		max-width: 600px;
		margin: 0 auto 15px 0;
		color: white;
	}

	em {
		display: block;
		margin-bottom: 40px;
		color: white;
		font-size: 18px;
	}

	#finance-budget-range-min {
		padding: 20px;
		border: 4px solid fade(white,25%);
		clear: both;

		.form-group {
			overflow: hidden;
		}

		label {
			float: left;
			margin: 0 10px 10px 0;
			padding: 0;
			font-family: @alpha-font;
			font-weight: 600;
			font-size: 24px;
			line-height: 33px;
			display: inline-block;
			float: left;
			text-transform: uppercase;
			cursor: pointer;
			color: white;

			@media @tablet {
				font-size: 18px;
			}

			@media @mobile {
				font-size: 15px;
			}
		}

		input#amount-budget-range-min {
			border: 0;
			color: @accent-colour;
			font-family: @alpha-font;
			font-size: 24px;
			height: 33px;
			font-weight: 600;
			float: left;
			display: inline-block;
			width: 132px;
			margin: 0 !important;
			padding: 0 !important;
			background: none;
			cursor: pointer;
			box-shadow: none;
			text-shadow: none;

			@media @tablet {
				font-size: 18px;
			}

			@media @mobile {
				width: 105px;
			}
		}

		.slider-group {
			margin: 0 14px 0 0;
			clear: both;

			#slider-range-min {
				border: none;
				background: fade(white,20%);
				height: 14px;
				margin-top: 20px;
				margin-bottom: 40px;
				border-radius: 99px;

				.ui-slider-range {
					background: @secondary-colour;
				}

				.ui-state-default {
					border: none;
					background: white;
				}

				.ui-slider-handle {
					width: 28px;
					height: 28px;
					top: -7px !important;
					margin-left: -14px !important;
					color: white;

					&:focus {
						outline: none;
					}

				}

			}

		}

		#button-budget-range-min {
			.btn;
			display: inline-block;

			&:hover {
				background: white !important;
				color: @primary-colour  !important;
			}

		}

	}

}

@media handheld, only screen and (max-width: 979px) {
	/* <= Tablet */

	.row-block.finance {
		padding: 70px 0;
	}

	#budget-slider {

		h3 {
			font-size: 38px;
		}

	}

}

@media handheld, only screen and (max-width: 739px) {
	/* <= Mobile */

	.row-block.finance {
		padding: 50px 0;

		.wrapper {
			padding: 0 15px;
		}

	}

	#budget-slider {

		h3 {
			font-size: 32px;
			margin: 0 0 15px 0;
		}

		#finance-budget-range-min {

			.slider-group {

				#slider-range,
				#slider-range-min {
					width: 96%;
				}

			}

			label {
				margin: 0 !important;
			}

			input#amount-budget-range-min {
				margin: 0 0 20px 0 !important;
			}

			#button-budget-range-min {
				width: auto;
				margin-top: 0px;
				margin: 0 0 20px 0 !important;
			}

		}

	}

}


.budget-boxes {

	@media @tablet {
		margin-bottom: 40px;
	}

	ul {
		display: flex;
		margin-right: -20px;
		margin-bottom: -20px;

		@media @mobile {
			flex-direction: column;
		}

		li {
			position: relative;
			flex: 1 1 120px;
			margin-right: 20px;
			margin-bottom: 20px;
			text-align: right;

			&:before {
				content: '';
				position: absolute;
				left: 60px;
				top: 90px;
				height: calc(~'100% - 90px');
				width: calc(~'100% - 60px');
				border: 4px solid fade(white,25%);
				box-sizing: border-box;
				transition: all .2s ease-in-out;

				@media @tablet {
					left: 30px;
					width: calc(~'100% - 30px');
				}
			}

			&:hover {
				&:before {
					border-color: white;
					transform: scale(1.05);
				}
			}

			img {
				position: relative;
				margin-bottom: 10px;
			}

			a {
				position: relative;
				display: inline-block;
				margin: 0 10px 10px auto;
			}
		}
	}
}`
				},
				{
					tab: "JS",
					code: `$(function () {
	$("#slider-range-min").slider({
		range: "min",
		value: 200,
		min: 0,
		max: 1000,
		step: 25,
		slide: function (event, ui) {
			$("#amount-budget-range-min").val("£" + ui.value);
			$("#button-budget-range-min").attr("href", "/search_page.php?budget=" + ui.value);
		},
		blurFunc: $('#amount-budget-range-min').blur(function () {
			var price = $('#amount-budget-range-min').val().substring(1);
			$('#slider-range-min').slider('value', parseInt(price));
			$("#button-budget-range-min").attr("href", "/search_page.php?budget=" + price);
		})
	});
	$("#amount-budget-range-min").val("£" + $("#slider-range-min").slider("value"));
});`
				}
			],
    };
  },
});

/***** 04. Multirate Slider *****/

import BudgetSearchRatings from './assets/screenshots/budget-search-rating.png';

export const MultirateSlider = () => ({
  name: "MultirateSlider",
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
			preview: `${BudgetSearchRatings}`,
      items: [
				{
					tab: "HTML",
					code: `<!-- Homepage Search Finance -->
<div class="row-block row-block--finance">

		<div class="wrapper">
			<div class="container">

				<div class="apply-cta">
					<h1>Apply for car finance</h1>
					<p>Complete our simple application or call us on {v2_TELEPHONE_NUMBER}</p>
				</div>


				<div class="finance-calculator">

					<script>
						function format_currency(amount) {
							var i = parseFloat(amount);
							if(isNaN(i)) { i = 0.00; }
							var minus = '';
							if(i < 0) { minus = '-'; }
							i = Math.abs(i);
							i = parseInt((i + .005) * 100);
							i = i / 100;
							s = new String(i);
							if(s.indexOf('.') < 0) { s += '.00'; }
							if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
							s = minus + s;
							return s;
						}

						function recalculateFinance() {
							//spread fees option
							var spread_finance_fees = 0; //parseInt ($("#spread_finance_fees").val());
							var this_rate = parseFloat(document.getElementById('finance_selected_rate').value);
							var fixed_rate = this_rate;
							var acceptance_fee = parseFloat(document.getElementById('finance_acceptance_fee').value);
							var option_fee = parseFloat(document.getElementById('finance_option_fee').value);
							var princ = document.getElementById('amount').value;
							princ = princ.replace('£','');
							princ = parseFloat(princ);
							var original_amount = princ;
							var deposit = 0;
							var term = document.getElementById('mths-term').value;
							term = term.replace(' months', '');
							term = parseFloat(term);
							var payment = 0;
							var fiddle_factor = {FINANCE_FIDDLE_FACTOR};
							fiddle_factor = parseFloat(fiddle_factor);
							var first_payment = 0;
							var final_payment = 0;
							var balance = princ;
							var total = 0;
							var total_inc_deposit = 0;

							var num_payments = term;

							princ = format_currency(balance - deposit);

							var intr = (term/12) * princ * fixed_rate / 100;
							total = format_currency(parseFloat(princ) + parseFloat(acceptance_fee) + parseFloat(option_fee) + parseFloat(intr));

							total_inc_deposit = format_currency(total + deposit);
							var rate1 = 100 * (total - princ) / princ;
							var actual_rate = 10 * rate1 / term;

							var rate = 0;
							rate = format_currency((actual_rate * 2) + fiddle_factor);

							payment = format_currency(total / term);

							if (spread_finance_fees==1) {
								payment.value = format_currency((princ + acceptance_fee + option_fee + intr) / term.value);
							}

							if (spread_finance_fees==1) {
								first_payment.value = format_currency(parseFloat(payment.value));
								final_payment.value = format_currency(parseFloat(payment.value));
							}

							var new_apr = rate;
							new_apr = parseFloat(new_apr).toFixed(1);
							rate = new_apr;
							document.getElementById('finance_payment_monthly').value = payment;
							document.getElementById('monthly_payment').innerHTML = 'Pay <span>' + '&pound;' + payment + ' p/m</span> over <span>' + term + ' months</span>';

							document.getElementById('finance_example').innerHTML = '<p>We could finance you a car up to the value of <span>&pound;' + original_amount + '</span> based on your credit rating. This would equate to <span>&pound;' + payment + ' per month</span>. The total amount payable including fees would be <span>&pound;' + total + '</span> over <span>' + term + ' months</span> with a representative <span>APR of ' + rate + '%</span> at a fixed rate of <span>' + fixed_rate + '%</span>. The fees would be <span>&pound;' + (acceptance_fee + option_fee) + '</span>.</p>';
						}

						// function searchBudget() {
						//  self.location = 'search.php?budget=' + $("#finance_payment_monthly").val();
						// }

						function searchBudget() {
							self.location = '/finance.php';
						}
					</script>

					<div id="promo-finance-search">

						<div id="tab-finance">
							<div class="inner-wrapper">
								<form>
									<!-- Credit Rating -->
									<div class="credit-rating">
										<input type="hidden" id="finance_payment_monthly" value=""/>
										<input type="hidden" id="finance_selected_rate" value="{FINANCE_RATE_DEFAULT}"/>
										<input type="hidden" id="finance_acceptance_fee" value="{FINANCE_ACCEPTANCE_FEE_DEFAULT}"/>
										<input type="hidden" id="finance_option_fee" value="{FINANCE_OPTION_FEE_DEFAULT}"/>
										<input type="radio" name="rating-state" id="excellent" {FINANCE_RATE_EXCELLENT_CHECKED} onclick="$('#finance_selected_rate').val('{FINANCE_RATE_EXCELLENT}'); $('#finance_acceptance_fee').val('{FINANCE_ACCEPTANCE_FEE_EXCELLENT}'); $('#finance_option_fee').val('{FINANCE_OPTION_FEE_EXCELLENT}'); recalculateFinance();" />
										<input type="radio" name="rating-state" id="good" {FINANCE_RATE_GOOD_CHECKED} onclick="$('#finance_selected_rate').val('{FINANCE_RATE_GOOD}');  $('#finance_acceptance_fee').val('{FINANCE_ACCEPTANCE_FEE_GOOD}'); $('#finance_option_fee').val('{FINANCE_OPTION_FEE_GOOD}'); recalculateFinance();" />
										<input type="radio" name="rating-state" id="fair" {FINANCE_RATE_AVERAGE_CHECKED} onclick="$('#finance_selected_rate').val('{FINANCE_RATE_AVERAGE}'); $('#finance_acceptance_fee').val('{FINANCE_ACCEPTANCE_FEE_AVERAGE}'); $('#finance_option_fee').val('{FINANCE_OPTION_FEE_AVERAGE}'); recalculateFinance();" />
										<input type="radio" name="rating-state" id="poor" {FINANCE_RATE_POOR_CHECKED} onclick="$('#finance_selected_rate').val('{FINANCE_RATE_POOR}'); $('#finance_acceptance_fee').val('{FINANCE_ACCEPTANCE_FEE_POOR}'); $('#finance_option_fee').val('{FINANCE_OPTION_FEE_POOR}'); recalculateFinance();" />
										<label class="excellent" for="excellent">Excellent</label>
										<label class="good" for="good">Good</label>
										<label class="fair" for="fair">Fair</label>
										<label class="poor" for="poor">Poor</label>
									</div>
									<!-- // Credit Rating -->


									<div class="sliders">
										<!-- Amount -->
										<fieldset id="fieldset-amount">
											<div class="form-group">
												<label for="amount">How much would you like to borrow?</label>
												<div id="slider-amount" onclick="recalculateFinance();"></div>
											</div>
										</fieldset>
										<!-- // Amount -->
										<!-- Term -->
										<fieldset id="fieldset-monthly-budget">
											<div class="form-group">
												<label for="mths-term">Over how many months?</label>
												<div id="slider-term" onclick="recalculateFinance();"></div>
											</div>
										</fieldset>
										<!-- // Term -->
									</div>


									<div class="finance-example">
										<div class="fin-example" id="finance_example"></div>
										<div class="monthly-price">
											<div id="monthly_payment">

											</div>
										</div>
									</div>

									<div class="finance-example-cta">
										<a id="finance-search-button" class="btn btn--extra-large" onclick="searchBudget();" href="javascript:;" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC} finance in {v2_TOWN}: search">Apply for Finance</a>
									</div>

								</form>

							</div>
						</div>

					</div>

				</div>

			</div>
		</div>


	</div>

<!-- // Homepage Search Finance -->`
				},
				{
					tab: "LESS",
					code: `// Finance Calculator
.row-block--finance {
	.section-padding;
	padding-bottom: 0;

	.container {
		overflow: visible;
	}

	.apply-cta {
		text-align: center;
	
		h1 {
			text-align: center;
			font-size: 50px;
			margin: 0;
			text-align: center;
	
			@media @tablet {
				font-size: 42px;
			}
			@media @mobile {
				font-size: 36px;
			}
		}
	
		p {
			margin: 0 0 30px 0;
			text-align: center;
			font-weight: 700;
			font-size: 18px;
			color: @accent-colour;
	
			@media @tablet {
				margin: 0 0 30px 0;
				font-size: 16px
			}
			@media @mobile {
				margin: 0 0 20px 0;
			}
		}
		
	
		// a {
		//   &:after {
		//     .char('arrow-right');
		//   }
		// }
	}

	
}

.finance-calculator {
	position: relative;
	display: block;
	max-width: 1300px;
	margin: 0 auto;

	fieldset {
		border: 0;
	}
}

.credit-rating {
	display: flex;
	width: 100%;
	max-width: 800px;
	margin: 0 auto 20px;

	// @media @mobile {
	//   flex-direction: column;
	// }

	input[name="rating-state"] {
		display: none;
	}

	label {
		flex: 1 1 auto;
		background: @custom-colour1;
		color: @primary-colour;
		width: 25%;
		margin: 0;
		padding: 0;
		text-align: center;
		font-family: @alpha-font;
		font-size: 18px;
		line-height: 70px;
		font-weight: 700;
		margin-right: 5px;
		cursor: pointer;

		@media @tablet {
			font-size: 16px;
			line-height: 52px;
		}

		@media @mobile {
			width: 100%;
			font-size: 12px;
			line-height: 44px;
			margin-right: 2px;
			margin-bottom: 20px;
		}

		&:hover {
			background: @primary-colour;
			color: white;
		}

		&:first-of-type {
			border-radius: 99px 0 0 99px;

			// @media @mobile {
			//   border-radius: 99px 99px 0 0;
			// }
		}
		&:last-of-type {
			border-radius: 0 99px 99px 0;
			border-right: 0;

			// @media @mobile {
			//   border-radius: 0 0 99px 99px;
			//   border-bottom: 0;
			// }
		}
	}

}

#excellent:checked ~ .excellent,
#good:checked ~ .good,
#fair:checked ~ .fair,
#poor:checked ~ .poor {
	background: @accent-colour !important;
	color: white;
}

.sliders {
	display: flex;
	flex-wrap: wrap;

	fieldset {
		flex: 1 1 280px;
		padding: 0;
		margin-right: 50px;

		@media @mobile {
			flex: 1 1 100%;
			margin-right: 0;
		}

		&#fieldset-monthly-budget {

			@media @mobile {
				margin-top: 20px;
			}
		}

		.form-group {
			padding-bottom: 75px;

			* {
				outline: none;
			}

			label {
				font-family: @alpha-font;
				font-weight: 700;
				line-height: 1.1;
				font-size: 18px;
				color: @primary-colour;
				padding: 0;
				display: block;
				text-align: left;

				@media @tablet {
					font-size: 16px;
				}
				@media @mobile {
					text-align: center;
					font-size: 16px;
					margin: 0 0 20px 0;
				}
			}

			.ui-slider {
				height: 15px;
				margin: 0;
				background: fade(black,10%);
				margin-top: 30px;

				@media @mobile {
					width: 90%;
					margin: 0 auto;
				}
			}

			.ui-slider-range {
				border-radius: 50px 0 0 50px;
				background: @accent-colour;
			}

			.ui-slider-handle {
				top: -8px;
				margin-left: -17px;
				height: 32px;
				width: 32px;
				background: white;
				border: 9px solid @accent-colour;
				box-shadow: 0 0 15px #7b7b7b66;
				
				&:before {
					content: "";
					background: red;
					height: 10px;
					width: 10px;
				}

				span.arrow {
					position: absolute;
					top: 26px;
					width: 100%;
					margin: 0 auto 0 5px;
					transform: translate(-45%);

					&:before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						margin: 0 auto;
						width: 0;
						height: 0;
						border-left: 9px solid transparent;
						border-right: 9px solid transparent;
						border-bottom: 9px solid @primary-colour;
					}
				}

				#amount,
				#mths-term {
					display: block;
					position: absolute;
					top: 35px;
					left: 0px;
					max-width: 140px !important;
					font-family: @alpha-font;
					font-size: 22px;
					font-weight: 700;
					line-height: 33px;
					text-align: center;
					margin: 0 !important;
					padding: 5px !important;
					background: @primary-colour;
					color: white;
					border: 0;
					border-radius: 5px !important;
					box-shadow: none;
					transform: translate(-45%);
					width: auto;

					@media @tablet {
						font-size: 20px;
						max-width: 120px !important;
					}
				}

				#mths-term {
					width: 70px;
				}
			}
		}
	}
}

.finance-example {
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	@media @mobile {
		margin-right: 0;
	}

	.fin-example {
		margin: 0 auto 30px auto;
		flex: 0 0 80%;
		text-align: center;

		@media @mobile {
			flex: 0 0 100%;
			margin: 0 auto 20px auto;
		}

		p {
			font-size: 16px;
			color: @text-colour;

			span {
				font-weight: bold;
				font-size: 20px;
				color: @accent-colour;
			}
		}
	}

	.monthly-price {
		flex: 1 1 150px;
		background: @primary-colour;
		color: fade(white,75%);
		padding: 10px;
		margin-right: 50px;
		margin-bottom: 50px;
		font-size: 16px;
		font-weight: 400;
		line-height: 1.2;
		letter-spacing: -0.5px;
		text-align: center;
		border-radius: 3px;
		max-width: 200px;
		// hide
		display: none;

		@media @mobile {
			flex: 1 1 100%;
			max-width: 100%;
			margin-right: 0;
		}

		span {
			display: block;
			color: white;
			font-size: 26px;
			font-weight: 700;
		}

		a {
			display: block;
			margin-top: 15px !important;
		}
	}
}

.finance-example-cta {
	text-align: center;
}`
				},
				{
					tab: "JS",
					code: `window.addEventListener("load", function(){

	(function() {
		$( "#slider-term" ).slider({
			range: "min",
			value: {FINANCE_TERM_DEFAULT},
			min: 12,
			max: 60,
			step: 6,
			slide: function( event, ui ) {
				$( "#mths-term" ).val( ui.value );
					recalculateFinance();
			}
		});
		$("#slider-term .ui-slider-handle").append("<span class='arrow'></span><input id='mths-term' value='{FINANCE_TERM_DEFAULT}' />");
		$( "#mths-term" ).val( $( "#slider-term" ).slider( "value" ));
	})();

	(function() {
		$( "#slider-amount" ).slider({
			range: "min",
			value: 10000,
			min: 1000,
			max: 25000,
			step: 500,
			slide: function( event, ui ) {
				$( "#amount" ).val( "£" + ui.value );
					recalculateFinance();
			}
		});
		$("#slider-amount .ui-slider-handle").append("<span class='arrow'></span><input id='amount' value='&pound;{FINANCE_PRICE_DEFAULT}' />");
		$( "#amount" ).val( "£" + $( "#slider-amount" ).slider( "value" ) );
	})();

	// value: {FINANCE_PRICE_DEFAULT},
	// max: {MAX_FINANCE_PRICE},


	var url = window.location.pathname;
	if(url === "/"){
			recalculateFinance();
	}
	// Calculate on load // only on the homepage
	// recalculateFinance();

});`
				}
			],
    };
  },
});

/***** 04-a. Multirate slider streamlined *****/

import MultiSliderStreamlined from './assets/screenshots/multirate-slider-streamlined.png';

export const MultirateSliderStreamlined = () => ({
  name: "MultirateSliderStreamlined",
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
			preview: `${MultiSliderStreamlined}`,
      items: [
				{
					tab: "HTML",
					code: `<div class="row-block row-block--hero-unit">

	<div class="wrapper">
		<div class="container">

			<div class="hero-unit">
				<h1 class="hero-unit__main-title">Get Pre-Approved Now</h1>
				<em class="hero-unit__sub-title">with no impact on your credit score</em>

				<div class="hero-unit__calculator lazy-background">

					<div class="hero-unit__car">
						<img data-src="/img-src/{v2_FOLDER}/theme/finance-calc-car.png" {PLACEHOLDER_IMAGE_SRC} data-srcset="" alt="Vehicle Image" class="lazy responsive-img" />
					</div>

					<div id="fin-calc-expanded">
						<script>
							function format_currency(amount) {
								var i = parseFloat(amount);
								if(isNaN(i)) { i = 0.00; }
								var minus = '';
								if(i < 0) { minus = '-'; }
								i = Math.abs(i);
								i = parseInt((i + .005) * 100);
								i = i / 100;
								s = new String(i);
								if(s.indexOf('.') < 0) { s += '.00'; }
								if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
								s = minus + s;
								return s;
							}

							function setCreditScore(e) {
								var data = {
									rate: document.querySelector('#finance_selected_rate').value,
								}
								var select = document.querySelector('#rating-select');
								
								if (select.value === "EXCELLENT") {
									data.rate = {FINANCE_RATE_EXCELLENT}
								}
								if (select.value === "GOOD") {
									data.rate = {FINANCE_RATE_GOOD}
								}
								if (select.value === "FAIR") {
									data.rate = {FINANCE_RATE_AVERAGE}
								}
								if (select.value === "POOR") {
									data.rate = {FINANCE_RATE_POOR}
								}		
								
								return parseFloat(data.rate);
							}					
	
							function recalculateFinance() {
								//spread fees option
								var spread_finance_fees = 0; //parseInt ($("#spread_finance_fees").val());
								// var this_rate = parseFloat(document.getElementById('finance_selected_rate').value);
								var this_rate = setCreditScore();
								var fixed_rate = this_rate;
								var acceptance_fee = parseFloat(document.getElementById('finance_acceptance_fee').value);
								var option_fee = parseFloat(document.getElementById('finance_option_fee').value);
								var princ = document.getElementById('amount').value;
								princ = princ.replace('£','');
								princ = parseFloat(princ);
								var original_amount = princ;
								var deposit = 0;
								var term = document.getElementById('mths-term').value;
								term = term.replace(' months', '');
								term = parseFloat(term);
								var payment = 0;
								var fiddle_factor = {FINANCE_FIDDLE_FACTOR};
								fiddle_factor = parseFloat(fiddle_factor);
								var first_payment = 0;
								var final_payment = 0;
								var balance = princ;
								var total = 0;
								var total_inc_deposit = 0;
	
								var num_payments = term;
	
								princ = format_currency(balance - deposit);
	
								var intr = (term/12) * princ * fixed_rate / 100;
								total = format_currency(parseFloat(princ) + parseFloat(acceptance_fee) + parseFloat(option_fee) + parseFloat(intr));
	
								total_inc_deposit = format_currency(total + deposit);
								var rate1 = 100 * (total - princ) / princ;
								var actual_rate = 10 * rate1 / term;
	
								var rate = 0;
								rate = format_currency((actual_rate * 2) + fiddle_factor);
	
								payment = format_currency(total / term);
	
								if (spread_finance_fees==1) {
									payment.value = format_currency((princ + acceptance_fee + option_fee + intr) / term.value);
								}
	
								if (spread_finance_fees==1) {
									first_payment.value = format_currency(parseFloat(payment.value));
									final_payment.value = format_currency(parseFloat(payment.value));
								}
	
								var new_apr = rate;
								new_apr = parseFloat(new_apr).toFixed(1);
								rate = new_apr;

								// Output figures and messages
								document.getElementById('total-credit').innerHTML = '<em>Total cost of credit</em> &pound;' + (total - original_amount);
								document.getElementById('total-repay').innerHTML = '<em>Total repayment</em> &pound;' + total;

								document.getElementById('finance_payment_monthly').value = payment;
								document.getElementById('fin-term').innerHTML = '<em><span>' + term + ' monthly</span> payments of</em>';
								document.getElementById('monthly_payment').innerHTML = '<span>&pound;</span>' + payment;

								// Finance Example output
								document.getElementById('finance_example').innerHTML = '<p>We could finance you a car up to the value of <span>&pound;' + original_amount + '</span> based on your credit rating. This would equate to <span>&pound;' + payment + '</span> per month.</p> <p>The total amount payable including fees would be <span>&pound;' + total + '</span> over <span>' + term + ' months</span> with a representative APR of <span>' + rate + '%</span> at a fixed rate of <span>' + fixed_rate + '%</span>. The fees would be <span>&pound;' + (acceptance_fee + option_fee) + '</span>.</p>';
							}					
						</script>

						<form>
							<div class="fin-calc">
								<div class="fin-calc__inputs">
									<div class="fin-calc__wrapper">
										<fieldset id="fieldset-amount">
											<div class="form-group">
												<label for="amount">Amount to borrow?</label>
												<input id='amount' value='&pound;{FINANCE_PRICE_DEFAULT}' />
												<div class="slider-wrapper">
													<div id="slider-amount" onclick="recalculateFinance();"></div>
												</div>
											</div>
										</fieldset>
										<fieldset id="fieldset-monthly-budget">
											<div class="form-group">
												<label for="mths-term">To pay over</label>
												<div class="term-figure"><input id='mths-term' value='{FINANCE_TERM_DEFAULT}' /> <em>months</em></div>
												<div class="slider-wrapper">
													<div id="slider-term" onclick="recalculateFinance();"></div>
												</div>
											</div>
										</fieldset>
										<div class="credit-rating">
											<label>Assuming your credit profile is</label>
											<div class="rating">
												<input type="hidden" id="finance_payment_monthly" value=""/>
												<input type="hidden" id="finance_selected_rate" value="{FINANCE_RATE_DEFAULT}"/>
												<input type="hidden" id="finance_acceptance_fee" value="{FINANCE_ACCEPTANCE_FEE_DEFAULT}"/>
												<input type="hidden" id="finance_option_fee" value="{FINANCE_OPTION_FEE_DEFAULT}"/>
												<select id="rating-select">
													<option value="EXCELLENT" id="excellent">Excellent</option>
													<option value="GOOD" id="good">Good</option>
													<option value="FAIR" id="fair">Fair</option>
													<option value="POOR" id="poor">Poor</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="fin-calc__output">
									<div class="fin-calc__wrapper">
										<div class="fin-calc__rep">
											<div class="credit-amount">
												<div id="total-credit"></div>
												<div id="total-repay"></div>
											</div>
											<div class="monthly-price">
												<div id="fin-term"></div>
												<div id="monthly_payment"></div>
												<a id="finance-search-button" class="btn" href="/finance.php" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC} finance in {v2_TOWN}: search">Get a quote<i>No impact on your credit score</i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="fin-example" id="finance_example"></div>
						</form>
					</div>

				</div>

			</div>

		</div>
	</div>

</div>


<script>
	document.querySelector('#rating-select').addEventListener("change", e => {
		recalculateFinance();
	});
</script>`
				},
				{
					tab: "LESS",
					code: `.row-block--hero-unit {
	padding: 100px 0 40px;
	background: white;
}

.hero-unit {
	text-align: center;

	&__main-title {
		display: block;
		margin-bottom: 0;
		color: @primary-colour;
		font-size: 54px;
		font-weight: 300;
		line-height: 1;

		@media @tablet {
			font-size: 42px;
		}

		@media @mobile {
			font-size: 34px;
		}
	}

	&__sub-title {
		display: block;
		color: @accent-colour;
		font-size: 26px;

		@media @tablet {
			font-size: 22px;
		}

		@media @mobile {
			font-size: 18px;
		}
	}

	&__calculator {
		max-width: 1000px;
		margin: 30px auto 0;

		&.visible {
			background: url('@{dealer-img}/theme/finance-calc-header__bg.jpg') top center no-repeat !important;
			background-size: 100% auto !important;
		}

		img {
			position: relative;
			margin-top: 100px;
			margin-bottom: -80px;
			max-height: 220px;

			@media @mobile {
				margin-top: 40px;
				margin-bottom: -60px;
			}
		}
	}
}					
					
#fin-calc-expanded {
	position: static;
	max-width: 800px;
	margin: 0 auto;
}

.fin-calc {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin-bottom: 40px;
	background: white;
	border: 2px solid #eeeeee;
	border-radius: 10px;
	text-align: left;
	overflow: hidden;

	label {
		padding: 0 0 15px;
		font-family: @body-font;
		font-size: 16px;
		font-weight: 500;

		@media @tablet {
			font-size: 14px;
		}
	}

	&__wrapper {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		height: 100%;
	}

	&__inputs {
		flex: 1 1 320px;
		padding: 40px;
		padding-top: 80px;
		background: white;
		box-sizing: border-box;

		@media @mobile {
			padding: 20px;
			padding-top: 80px;
		}

		// Arrow
		&:after {
			content: '';
			position: absolute;
			left: 100%;
			top: 50%;
			border-top: 30px solid transparent;
			border-left: 30px solid white;
			border-bottom: 30px solid transparent;
			transform: translateY(-50%);
		}

		// Budget sliders
		.ui-slider {
			height: 4px;
			margin-right: 55px;
			background: #ddd;

			&:after {
				content: '';
				position: absolute;
				height: 4px;
				left: 100%;
				width: 54px;
				background: #ddd;
			}
		}

		.ui-slider-range {
			background: #bbb;
		}

		.ui-slider-handle {
			top: 50%;
			width: 55px;
			height: 20px;
			margin-left: 0;
			background: white;
			border: 3px solid @accent-colour;
			border-radius: 100px;
			transform: translateY(-50%);

			&:focus {
				outline: none;
			}
		}

		fieldset {
			margin-bottom: 30px;
		}

		input {
			font-family: @body-font;
		}

		// Amount to borrow
		input#amount {
			height: 52px;
			padding: 0 15px;
			margin-bottom: 40px;
			color: @primary-colour;
			font-size: 26px;
			font-weight: 300;
			border-color: @accent-colour;
			transition: box-shadow .2s linear;

			&:hover {
				box-shadow: 0 0 2px @accent-colour;
			}

			&:focus {
				box-shadow: 0 0 7px @accent-colour;
			}
		}

		.term-figure {
			display: flex;
			align-items: flex-end;
			margin-bottom: 20px;

			em {
				color: @primary-colour;
				font-size: 22px;
			}
		}

		// To pay over
		input#mths-term {
			display: inline-block;
			height: 42px;
			width: 52px;
			padding: 0;
			color: @accent-colour;
			font-size: 42px;
			font-weight: 300;
			line-height: 1;
			border: 0;
		}

		// credit rating
		.credit-rating {
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			label {
				flex: 2 2 120px;
				padding: 0;
				margin-right: 10px;
				font-size: 14px;
				white-space: nowrap;
			}

			.rating {
				flex: 1 1 70px;
			}

			select {
				font-family: @body-font;
				border-color: @accent-colour;
				transition: box-shadow .2s linear;

				&:hover {
					box-shadow: 0 0 2px @accent-colour;
				}

				&:focus {
					box-shadow: 0 0 7px @accent-colour;
				}
			}
		}
	}

	&__output {
		flex: 1 1 320px;
		padding: 40px;
		padding-top: 80px;
		background: @custom-colour1;
		box-sizing: border-box;

		@media @mobile {
			padding: 20px;
		}

		.credit-amount {
			flex: 0 0 auto;
			margin-bottom: 40px;
		}

		#total-credit,
		#total-repay {
			display: flex;
			justify-content: space-between;
			font-weight: 500;
			line-height: 3;
			border-bottom: 2px solid #ddd;

			em {
				font-weight: 300;
			}
		}

		#total-repay {
			border-bottom: 0;
		}

		.monthly-price {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			flex: 0 0 auto;
			margin-right: -10px;
			margin-bottom: -10px;

			#fin-term {
				flex: 2 2 100px;
				margin-right: 10px;
				margin-bottom: 10px;
				color: @primary-colour;
				font-size: 18px;
				font-weight: 500;

				@media @tablet {
					font-size: 16px;
				}

				span {
					display: block;
					color: @accent-colour;
				}
			}

			#monthly_payment {
				display: flex;
				align-items: flex-start;
				flex: 1 1 50px;
				margin-right: 10px;
				margin-bottom: 10px;
				color: @primary-colour;
				font-size: 46px;

				@media @tablet {
					font-size: 36px;
				}

				span {
					margin-right: 5px;
					font-size: 16px;
					font-weight: 500;

					@media @tablet {
						font-size: 14px;
					}
				}
			}
		}

		a#finance-search-button {
			display: block;
			flex: 1 1 400px;
			padding: 10px 25px;
			margin-right: 10px;
			margin-bottom: 10px;
			font-size: 26px;
			line-height: 1.1;
			font-weight: 500;
			text-transform: none;

			i {
				display: block;
				font-size: 14px;
				font-weight: 300;
			}
		}
	}
}

.fin-example {
	p span {
		font-weight: 500;
	}
}`
				},
				{
					tab: "JS",
					code: `window.addEventListener("load", function(){

	(function() {
		$( "#slider-term" ).slider({
			range: "min",
			value: {FINANCE_TERM_DEFAULT},
			min: 12,
			max: 60,
			step: 6,
			slide: function( event, ui ) {
				$( "#mths-term" ).val( ui.value );
					recalculateFinance();
			}
		});
		$("#slider-term .ui-slider-handle").append("<span class='arrow'></span><input id='mths-term' value='{FINANCE_TERM_DEFAULT}' />");
		$( "#mths-term" ).val( $( "#slider-term" ).slider( "value" ));
	})();

	(function() {
		$( "#slider-amount" ).slider({
			range: "min",
			value: 10000,
			min: 1000,
			max: 25000,
			step: 500,
			slide: function( event, ui ) {
				$( "#amount" ).val( "£" + ui.value );
					recalculateFinance();
			}
		});
		$("#slider-amount .ui-slider-handle").append("<span class='arrow'></span><input id='amount' value='&pound;{FINANCE_PRICE_DEFAULT}' />");
		$( "#amount" ).val( "£" + $( "#slider-amount" ).slider( "value" ) );
	})();

	// value: {FINANCE_PRICE_DEFAULT},
	// max: {MAX_FINANCE_PRICE},


	var url = window.location.pathname;
	if(url === "/"){
			recalculateFinance();
	}
	// Calculate on load // only on the homepage
	// recalculateFinance();

});`
				}
			],
    };
  },
});

/***** 05. Slider Split *****/

import BudgetSearchSplit from './assets/screenshots/budget-split.png';

export const SliderSplit = () => ({
  name: "SliderSplit",
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
			preview: `${BudgetSearchSplit}`,
      items: [
				{
					tab: "HTML",
					code: `<!-- Homepage Search Finance -->
<div class="row-block finance animate-me clear-fix">
	<div class="wrapper">
		<div class="container">


			<div id="budget-slider">
				<div class="row">
					<div class="twelvecol">
						<h3>We can help you find the best finance deal</h3>
						<p>We have relationships with high street lenders and specialist motoring finance houses too, that is why
							we
							have helped hundreds of customers secure the best finance deal for their budget.</p>
						<div id="finance-budget-range-min" class="clear-fix">
							<div class="row">
								<div class="twelvecol">
									<div class="form-group">
										<label for="amount-budget-range-min">Monthly Budget:</label>
										<input type="text" id="amount-budget-range-min" />
									</div>
									<div class="slider-group">
										<div id="slider-range-min"></div>
									</div>
								</div>
								<div class="twelvecol last">
									<a id="button-budget-range-min" class="button" href="/search_page.php?budget=200" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC} finance in {v2_TOWN}: search">Search</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="budget-slider-image" class="lazy-background">

			</div>


		</div>
	</div>
</div>
<!-- // Homepage Search Finance -->`
				},
				{
					tab: "LESS",
					code: `.row-block.finance {
	background: white;
	padding: 120px 20px;
	position: relative;

	.container {
		overflow: visible;
		display: flex;
		position: relative;

		&:before {
			.char(coins-l);
			font-family: 'ClickIcons';
			font-size: 208px;
			color: fade(black, 10%);
			left: -135px;
			top: -150px;
			z-index: 4;
			position: absolute;
			opacity: 0;

			@media @tablet {
					display: none;
			}
		}
	}

	&.ani-active {
			.container {
					&:before {
							opacity: 1;
							transition: all 1s ease-in;
					}
			}
			#budget-slider-image {
					transform: scale(1.2) translateX(-40px);
					opacity: 1;
					transition: transform 0.6s ease-in, opacity 0.3s ease-in;
			}
			#budget-slider {
					transform: translateX(0px);
					opacity: 1;
					transition: transform 0.6s ease-in, opacity 0.3s ease-in;
			}
		}
	}

	#budget-slider-image {
		width: 50% !important;
		transform: scale(1.2) translateX(200px);
		border-radius: 10px;
		box-shadow: 0 0 10px 10px rgba(0,0,0,0.1);
		opacity: 0;
		&.visible {
				background: @primary-colour url('/img-src/{v2_FOLDER}/theme/finance__bg.jpg') center center no-repeat !important;
				background-size: cover !important;
		}

		@media only screen and (max-width: 1279px) {
			transform: scale(1.15) translateX(100px);
		}

		@media @tablet {
			position: absolute;
			height: 100%;
			bottom: 0;
			right: 0;
			transform: scale(1.15) translateX(100px);
		}

		@media @mobile {
				display: none;
		}
	}

	#budget-slider {
		width: 50%;
		background: white;
		box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);
		padding: 80px 60px;
		border-radius: 10px;
		box-sizing: border-box;
		overflow: auto;
		position: relative;
		z-index: 5;
		transform: translateX(-200px);
		opacity: 0;

		@media @tablet {
				width: 60%;
				padding: 30px;
		}

		@media only screen and (max-width: 1279px) {
				padding: 60px;
				width: 60%;
		}

		@media @mobile {
				width: 100%;
				background: none;
				box-shadow: none;
				padding: 0px;
		}

	h3 {
		font-family: @heading-font;
		font-size: 40px;
		line-height: 1;
		color: @text-colour;
		text-transform: none;
		margin: 0 0 20px 0;

		span {
			color: @accent-colour;
		}
	}

	p {
		color: @primary-colour;
		margin: 0 0 15px 0;
	}

	#finance-budget-range-min  {
		clear: both;
		margin: 30px 0 0 0;

		label {
			float: left;
			margin: 0 10px 10px 0;
			padding: 0;
			font-family: @heading-font;
			font-weight: 600;
			font-size: 24px;
			line-height: 31px;
			display: inline-block;
			float: left;
			text-transform: uppercase;
			cursor: pointer;
			color: @primary-colour;

			@media @tablet {
					font-size: 22px;
			}
		}

		input#amount-budget-range-min {
			border: 0;
			color: @accent-colour;
			font-family: @charlie-font;
			font-size: 24px;
			height: 33px;
			font-weight: 600;
			float: left;
			display: inline-block;
			width: 120px;
			margin: 0 !important;
			padding: 0 !important;
			background: none;
			cursor:pointer;
			box-shadow: none;
			text-shadow: none;

			@media @tablet {
					font-size: 22px;
			}
		}

		.slider-group {
			margin: 10px 0 0 0;
			clear: both;

			#slider-range-min {
				border: none;
				background: fade(black,10%);
				height: 14px;
				border-radius: 99px;

				.ui-slider-range {
					background: @accent-colour;
				}

				.ui-state-default {
					border: none;
					background: black;
				}

				.ui-slider-handle {
					width: 28px;
					height: 28px;
					top: -7px !important;
					margin-left: -14px !important;
					color: @accent-colour;

					&:focus {
						outline: none;
					}

				}

			}

		}

		#button-budget-range-min {
			.btn;

		}

	}

	}

	@media handheld, only screen and (max-width: 979px) { /* <= Tablet */

	.row-block.finance {
		padding: 70px 0;
		background-image: url('@{dealer-img}/theme/finance_bg-tablet{CACHE_BUSTER}.jpg');
	}

	#budget-slider {

		h3 {
			font-size: 38px;
		}

	}

}

	@media handheld, only screen and (max-width: 739px) { /* <= Mobile */

	.row-block.finance {
		padding: 50px 0;

		.wrapper {
			padding: 0 15px;
		}

	}

	#budget-slider {

		h3 {
			font-size: 32px;
			margin: 0 0 15px 0;
		}

		#finance-budget-range-min {

			.slider-group {

				#slider-range,
				#slider-range-min {
					width: 96%;
				}

			}

			label {
				margin: 0 !important;
			}

			input#amount-budget-range-min {
				margin: 0 0 20px 0 !important;
			}

			#button-budget-range-min {
				width: auto;
				margin-top: 0px;
				margin: 0 0 20px 0 !important;
			}

		}

	}    

	}`
				},
				{
					tab: "JS",
					code: `$(function () {
	$("#slider-range-min").slider({
		range: "min",
		value: 200,
		min: 0,
		max: 1000,
		step: 25,
		slide: function (event, ui) {
			$("#amount-budget-range-min").val("£" + ui.value);
			$("#button-budget-range-min").attr("href", "/search_page.php?budget=" + ui.value);
		},
		blurFunc: $('#amount-budget-range-min').blur(function() {
			var price = $('#amount-budget-range-min').val().substring(1);
			$('#slider-range-min').slider('value', parseInt(price));
			$("#button-budget-range-min").attr("href", "/search_page.php?budget=" + price);
	})
	});
	$("#amount-budget-range-min").val("£" + $("#slider-range-min").slider("value"));
});`
				}
			],
    };
  },
});

