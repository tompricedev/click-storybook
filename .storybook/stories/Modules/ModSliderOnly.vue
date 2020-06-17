<template>
  <!-- Homepage Search Finance -->
  <div class="{v2_4_MOBILE_ON_OFF} {v2_4_TABLET_ON_OFF} {v2_4_DESKTOP_ON_OFF}">
    <div class="row-block finance lazy-background">
      <div class="wrapper">
        <div class="container">
          <div id="budget-slider">
            <div class="row">
              <div class="sixcol">
                <h3>We can help you find the best finance deal</h3>
                <p>
                  We have relationships with high street lenders and specialist
                  motoring finance houses too, that is why we have helped
                  hundreds of customers secure the best finance deal for their
                  budget.
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
  </div>
  <!-- // Homepage Search Finance -->
</template>

<script>
export default {
  beforeCreate() {
		let jqueryUICss = document.createElement('link');
			jqueryUICss.setAttribute('href', '//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
			document.head.appendChild(jqueryUICss);
    let jquery = document.createElement("script");
    jquery.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    );
    document.head.appendChild(jquery);
    let jqueryUI = document.createElement("script");
    jqueryUI.setAttribute(
      "src",
      "//code.jquery.com/ui/1.11.4/jquery-ui.min.js"
    );
    jquery.defer = true;
    document.head.appendChild(jqueryUI);
    setTimeout(() => {
      let slider = document.createElement("script");
      slider.innerHTML = `
			$(document).ready(function() {
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
			});
		`;
      document.head.appendChild(slider);
		}, 100);
  },
};
</script>

<style lang="less" scoped>
@alpha-font: "Nunito Sans", sans-serif;

@heading-font: "Nunito Sans", sans-serif;
@body-font: "Nunito Sans", sans-serif;

@icon-font: "ClickIcons";

// Media query breakpoints
@mobile: ~"handheld, only screen and (max-width: 739px)";
@ipad: ~"handheld, only screen and (max-width: 768px)";
@tablet: ~"handheld, only screen and (max-width: 979px)";
@lap: ~"handheld, only screen and (max-width: 1279px)";
@desktop: ~"handheld, only screen and (max-width: 1440px)";

@import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");

@primary-colour: #121740;
@secondary-colour: #8e8e8e;
@accent-colour: #f5801f;

@body-colour: #ffffff;
@text-colour: #555555;
@heading-colour: @primary-colour;

@button-bg-colour: @accent-colour;
@button-text-colour: white;
@button-bg-hover-colour: @primary-colour;
@button-text-hover-colour: white;

@reserve-bg-colour: #0091d1;

// Custom Colours
@custom-colour1: #f5f5f5;
@custom-colour2: #bcbcbc;
@custom-colour3: #333333;
@custom-colour4: #424242;

// If Vue Favourites are enabled
@favourites: #e60584;

.btn {
  display: inline-block;
  margin: 15px 0;
  padding: 0 15px;
  background: @button-bg-colour;
  color: @button-text-colour !important; // Importanted to override any visited links
  font-family: @alpha-font;
  font-size: 12px;
  line-height: 36px;
  font-weight: 700;
  text-align: center;
  text-shadow: none;
  text-transform: uppercase;
  text-decoration: none;
  border: 0;
  border-radius: 3px;
  box-sizing: border-box;
  transition: 0.2s all linear;

  &:hover {
    background: @button-bg-hover-colour;
    color: @button-text-hover-colour !important; // Importanted to override any visited links
    border: 0;
  }
}

.sixcol {
	width: 50%;
}

.twelvecol {
	width: 100%;
}

.container {
	max-width: 95%;
	margin: 0 auto;
}

.row-block.finance {
  background-color: @custom-colour1;
  padding: 100px 20px;
  background: url("https://source.unsplash.com/random") center center no-repeat;
	background-size: cover;
	position: relative;

  .container {
    overflow: visible;
	}
	
	&::before {
		content: '';
		width: 100%;
		height: 100%;
		background: fade(@primary-colour, 50%);
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 1;
	}

}

#budget-slider {
	z-index: 2;
	position: relative;
  h3 {
    font-family: @heading-font;
    font-size: 40px;
    font-weight: 700;
    line-height: 1;
    color: white;
    text-transform: none;
    margin: 0 0 20px 0;

    span {
      color: @accent-colour;
    }
  }

  p {
    color: white;
    margin: 0 0 15px 0;
  }

  #finance-budget-range-min {
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
      color: white;
    }

    input#amount-budget-range-min {
      border: 0;
      color: white;
      font-family: @heading-font;
      font-size: 24px;
      height: 33px;
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

    .slider-group {
      margin: 10px 0 0 0;
      clear: both;

      #slider-range-min {
        border: none;
        background: fade(white, 10%);
        height: 14px;
        border-radius: 99px;

        .ui-slider-range {
					background: pink!important;
					height: 14px!important;
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
    }
  }
}

@media handheld, only screen and (max-width: 979px) {
  /* <= Tablet */

  .row-block.finance {
    padding: 50px 0;
    // background-image: url("@{dealer-img}/theme/finance_bg-tablet{CACHE_BUSTER}.jpg");
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
</style>
