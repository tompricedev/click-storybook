import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import axios from "axios";

import StoryBlock from "./Components/StoryBlock";

/* Module imports for previews */
import ModSliderOnly from "./Modules/ModSliderOnly";
import ModSliderCar from "./Modules/ModSliderCar";
import ModSliderBudgets from "./Modules/ModSliderBudgets";

export default {
  title: "Homepage Modules/Budget Search",
};


/***** 01. Slider Only *****/

export const SliderOnly = () => ({
  name: "SliderOnly",
  components: {
    StoryBlock,
    ModSliderOnly,
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModSliderOnly />
		</StoryBlock>
	`,
  data() {
    return {
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
      module: 3,
    };
  },
});

/***** 02. Slider with car *****/

export const SliderWithCar = () => ({
  name: "SliderWithCar",
  components: {
		StoryBlock,
		ModSliderCar
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModSliderCar />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "HTML",
					code: `<!-- Homepage Search Finance -->
<div class="row-block finance lazy-background">
	<div class="wrapper">
		<div class="container">
			<div id="budget-slider">
				<div class="row">
					<div class="sixcol">
						<img
							src="../assets/budgets/finance-car.png"
							alt=""
							class="responsive-img"
						/>
					</div>

					<div class="sixcol">
						<h3>We can help you find the best finance deal</h3>
						<p>
							We have relationships with high street lenders and specialist
							motoring finance houses too, that is why we have helped hundreds
							of customers secure the best finance deal for their budget.
						</p>
						<div id="finance-budget-range-min" class="clear-fix">
							<div class="row">
								<div class="twelvecol">
									<div class="form-group">
										<label for="amount-budget-range-min"
											>Monthly Budget:</label
										>
										<input type="text" id="amount-budget-range-min" />
									</div>
									<div class="slider-group">
										<div id="slider-range-min"></div>
									</div>
								</div>
								<div class="twelvecol last">
									<a
										id="button-budget-range-min"
										class="button"
										href="/search_page.php?budget=200"
										title="Used {v2_WEBSITE_VEHICLE_TYPE_LC} finance in {v2_TOWN}: search"
										>Search</a
									>
								</div>
							</div>
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
					code: `.row-block.finance {
//background: url('@{dealer-img}/theme/slider_banner.jpg') no-repeat center center !important;
padding: 60px 20px;
//background: @primary-colour;

&.visible {
	//background: url('@{dealer-img}/theme/1.png') no-repeat center center !important;
	//background-size: cover !important;

	&::before {
		content: '';
		height: 100%;
		width: 100%;
		display: block;
		//background: linear-gradient(to right, rgba(0, 0, 0, .6), rgba(0, 0, 0, .3), rgba(0, 0, 0, 0));
		position: absolute;
		top: 0;
		left: 0;
		@media @mobile {
			width: 100%;
			background: white;
			// background: fade(black, 50%);
			// background-image: url('@{dealer-img}/theme/budget_mobile.jpg');
		}
	}

	@media @mobile {
		background: none;
	}
}

.container {
	overflow: visible;

	.homepage-budget-search {
		.homepage-budget-search__container {
			.homepage-budget-search__slider {
				.slider-group {
					.ui-slider-horizontal {
						background: @accent-colour;
					}
				}

				.form-group {
					input {
						color: @secondary-colour;
					}
				}
			}

			.homepage-budget-search__buttons {
				.button {
					&:hover {
						color: @primary-colour !important;
						background: @secondary-colour;
					}
				}
			}
		}
	}
}

}

#budget-slider {

h2 {
	color: @accent-colour;
	font-size: 40px;
}

h3 {
	//font-family: @heading-font;
	font-size: 38px;
	//font-weight: @heading-weight;
	font-weight: 700;
	line-height: 1;
	color: @primary-colour;
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
	color: @primary-colour;
	margin: 0 0 15px 0;
}

#finance-budget-range-min {
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
		color: @primary-colour;
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
		cursor: pointer;
		box-shadow: none;
		text-shadow: none;
	}

	.last {
		float: right;
	}

	.sixcol-img {
		display: flex;
		justify-content: center;
		@media @mobile {
			width: 100%;
		}
	}

	.slider-group {
		margin: 10px 0 0 0;
		clear: both;


		#slider-range-min {
			border: none;
			background: fade(@primary-colour, 50%);
			height: 14px;
			border-radius: 99px;

			.ui-slider-range {
				background: @accent-colour;
			}

			.ui-state-default {
				border: none;
				background: @primary-colour;
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
	}

}

}

@media handheld, only screen and (max-width: 979px) {
/* <= Tablet */
.row-block.finance {
	padding: 70px 0;
	background-image: url('@{dealer-img}/theme/finance_bg-tablet{CACHE_BUSTER}.jpg');
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
					code: `$(document).ready(function() {
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
	document.querySelector('.ui-slider-range').style.height = "14px";
	document.querySelector('.ui-slider-range').style.backgroundColor = "#f5801f";
});`
				}
			],    
    };
  },
  created() {
    axios
      .get(
        "https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/clickcomponents-uwksb/service/getModules/incoming_webhook/webhook0"
      )
      .then((response) => {        
        
				this.items = response.data[0].modules[this.module].items
        console.log(this.items, this.module);
      });
  },
});

/***** 03. Slider with budgets *****/

export const SliderWithBudgets = () => ({
  name: "SliderWithBudgets",
  components: {
		StoryBlock,
		ModSliderBudgets
  },
  template: `
		<StoryBlock :items="items" :module="module">
			<ModSliderBudgets />
		</StoryBlock>
	`,
  data() {
    return {
      items: [
				{
					tab: "HTML",
					code: `<!-- Homepage Search Finance -->
<div class="{v2_4_MOBILE_ON_OFF} {v2_4_TABLET_ON_OFF} {v2_4_DESKTOP_ON_OFF}">
	<div class="row-block finance">

			<div class="wrapper">
				<div class="container">
					<div class="row flex">

						<div class="sixcol alignvcenter text">

							<div class="" id="budget-slider">

								<div id="finance-budget-range-min" class="clear-fix">
									<div class="row">

										<div class="twelvecol">
											<h3>Our finance team can help you get the best <span>finance deal based on your budget</span></h3>
											<div class="form-group">
												<label for="amount-budget-range-min">Monthly Budget:</label>
												<input type="text" id="amount-budget-range-min" />
											</div>
											<div class="slider-group">
												<div id="slider-range-min"></div>
											</div>
										</div>

										<div class="eightcolx left">
										</div>

										<div class="fourcolx">
											<a id="button-budget-range-min" class="button" href="/search_page.php?budget=200" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC} finance in {v2_TOWN}: search">Search</a>
										</div>

									</div>
								</div>

							</div>

						</div>

						<div class="sixcol last alignvcenter">
							<div class="row">
								<ul class="budget-boxes">
									<li><a href="/search_page.php?budget=100" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s for sale - up to &pound;100p/m"><span>Upto &pound;100 p/m</span></a></li>
									<li><a href="/search_page.php?budget=150" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s for sale - up to &pound;150p/m"><span>Upto &pound;150 p/m</span></a></li>
									<li><a href="/search_page.php?budget=99999" title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s for sale - over &pound;200p/m"><span>&pound;200 p/m Plus</span></a></li>
								</ul>
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
					code: `.row-block.finance {
	padding: 60px 0 60px 0;

	.container {
		overflow: visible;
	}

	ul.budget-boxes{
		width: 100%;
		display: flex;
		@media @mobile{
			flex-direction: column;
			display: none;
		}
		li{
			flex: 1;
			text-align: center;
			background: #ffffff;
			margin-right: 5px;
			height: 266px;
			position: relative;
			transition: all 0.3s ease-in-out;
			@media @mobile{
				margin: 0 0 10px 0;
				height: 220px;
			}
			a {
				position: absolute;
				top: 0px;
				left: 0px;
				right: 0px;
				bottom: 0px;
				transition: all 0.3s ease-in-out;

				span {
					font-size: 14px;
					position: absolute;
					background: @accent-colour;
					padding: 10px 5px;
					color: white;
					width: 100%;
					bottom: 0px;
					left: 0px;
					box-sizing: border-box;
					transition: all 0.3s ease-in-out;
				}

			}
			&:nth-child(1){
				background: @primary-colour url('@{dealer-img}/theme/budget-box-1{CACHE_BUSTER}.jpg') center center no-repeat;
				background-size: cover;
				@media @mobile{
				background:@primary-colour url('@{dealer-img}/theme/budget-box-mob-1{CACHE_BUSTER}.jpg') center center no-repeat;
				background-size: cover;
			}
			}
			&:nth-child(2){
				background: @primary-colour url('@{dealer-img}/theme/budget-box-2{CACHE_BUSTER}.jpg') center center no-repeat;
				background-size: cover;
				@media @mobile{
				background:@primary-colour url('@{dealer-img}/theme/budget-box-mob-2{CACHE_BUSTER}.jpg') center center no-repeat;
				background-size: cover;
			}
			}
			&:nth-child(3){
				background: @primary-colour url('@{dealer-img}/theme/budget-box-3{CACHE_BUSTER}.jpg') center center no-repeat;
				background-size: cover;
				@media @mobile{
				background:@primary-colour url('@{dealer-img}/theme/budget-box-mob-3{CACHE_BUSTER}.jpg') center center no-repeat;
				background-size: cover;
			}
			}
			&:last-child{
				margin-right: 0px;
			}
			&:hover{

				> a{
					background: fade(black, 50%);
					span{
						padding: 15px 5px;
					}
				}
			}
		} // end li
	}

}

#budget-slider {

	h3 {
		font-family: @charlie-font;
		font-size: 32px;
		line-height: 1.2;
		color: @custom-colour2;
		text-transform: none;
		margin: 0 0 20px 0;

		@media @mobile{
			text-align: center;
		}

		span {
			// color: @accent-colour;
		}

	}

	p {
		color: @custom-colour2;
		margin: 0 0 15px 0;
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
			float: left;
			cursor: pointer;
			color: @accent-colour;
			@media @mobile{
				text-align: center;
			}
		}

		input#amount-budget-range-min {
			border: 0;
			color: @accent-colour;
			font-family: @charlie-font;
			font-size: 24px;
			height: 33px;
			font-weight: bold;
			float: left;
			width: 120px;
			margin: 0 0 10px 0;
			padding: 0;
			background: none;
			cursor:pointer;
			box-shadow: none;
			text-shadow: none;
			@media @mobile{
				width: 100%;
				text-align: center;
			}
		}

		.slider-group {
			margin: 10px 0 0 0;
			clear: both;

			#slider-range-min {
				border: none;
				background: fade(black,15%);
				height: 14px;
				border-radius: 99px;

				.ui-slider-range {
					background: @accent-colour;
				}

				.ui-state-default {
					border: none;
					background: @custom-colour2;
				}

				.ui-slider-handle {
					width: 28px;
					height: 28px;
					top: -7px !important;
					margin-left: -14px !important;

					&:focus {
						outline: none;
					}

				}

			}

		}

		#button-budget-range-min {
			width: auto;
			border: none;
			background: @accent-colour;
			font-size: 14px;
			font-weight: 700;
			color: white;
			padding: 12px 25px;
			line-height: 1;
			text-shadow: none;
			box-shadow: none;
			margin-top: 10px;
			transition: all 0.3s linear;
			float: right;
			border-radius: 0!important;

			&:hover {
				background: @accent-colour--light;
				color: black;
			}

		}

	}

}



@media handheld, only screen and (max-width: 979px) { /* <= Tablet */

	.row-block.finance {
		padding: 40px 0;
		background-size: auto 80%;
	}

	#budget-slider {

		h3 {
			font-size: 25px;
		}

	}

}

@media handheld, only screen and (max-width: 739px) { /* <= Mobile */

	.row-block.finance {

		.wrapper {
			padding: 0 15px;
		}

	}

	#budget-slider {

		h3 {
			font-size: 29px;
			margin: 0 0 15px 0;
		}

		#finance-budget-range-min {

			.slider-group {

				#slider-range,
				#slider-range-min {
					width: 100%;
				}

			}

			.fourcolx {
				width: 100%!important;
				#button-budget-range-min {
					// width: 90%;
					display: block;
					position: static;
					margin: 0;
				}
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

