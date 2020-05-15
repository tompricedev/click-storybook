<template>
  <!-- Homepage Search Finance -->
  <div class="{v2_4_MOBILE_ON_OFF} {v2_4_TABLET_ON_OFF} {v2_4_DESKTOP_ON_OFF}">
    <div class="row-block finance">
      <div class="wrapper">
        <div class="container">
          <div class="row flex">
            <div class="sixcolx alignvcenter text">
              <div class="" id="budget-slider">
                <div id="finance-budget-range-min" class="clear-fix">
                  <div class="row">
                    <div class="twelvecol">
                      <h3>
                        Talk to us about our latest <span>HP</span> and
                        <span>PCP</span> finance deals
                      </h3>
                      <!-- <p>We have relationships with high street lenders and specialist motoring finance houses too, that is why we have helped hundreds of customers secure the best finance deal for their budget.</p> -->
                      <p>Refused car finance? We can help.</p>
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

                    <div class="twelvecol left">
                      <div class="budget-fin-partner">
                        <img
                          src="../assets/partners/partner-motonovo.png"
                          alt="MotoNovo Finance Partners"
                          class="responsive-img"
                        />
                        <img
                          src="../assets/partners/partner-close.png"
                          alt="Evolution Finance Partners"
                          class="responsive-img tablet-hidden"
                        />
                      </div>
                    </div>

                    <div class="fourcolx">
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

      <div class="finance-car">
        <img
          src="../assets/budgets/finance-car.png"
          class="responsive-img"
          alt="Finance Specialists"
        />
      </div>
    </div>
  </div>
  <!-- // Homepage Search Finance -->
</template>

<script>
export default {
  mounted() {
    let jqueryUICss = document.createElement("link");
    jqueryUICss.setAttribute(
      "href",
      "//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
    );
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
    }, 2000);
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

.container {
	max-width: 95%;
	margin: 0 auto;
}

.sixcol {
  width: 50%;
}

.twelvecol {
  width: 100%;
}

.responsive-img {
  max-width: 100%;
  height: auto;
}

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

/* ---------- Finance Search ---------- */
.row-block.finance {
  background: #e5e5e5;
  padding: 100px 0;
  overflow: hidden;
  .container {
    overflow: visible;
  }
}

.finance-car {
  position: absolute;
  top: -138px;
  right: auto;
  left: 60%;
  width: 1150px;

  @media @tablet {
		height: 500px;
		width: 400px;
		top: 235px;
		left: 50%;
  }

  @media @mobile {
    display: none;
  }
}

#budget-slider {
  .budget-fin-partner {
    img {
      // height: 28px;
      padding: 0 10px;
      @media @mobile {
        height: auto;
        margin-top: 5px;
      }
    }
  }

  .budget-slider__item {
    width: 100%;
    float: left;
    padding: 20px;
    box-sizing: border-box;
    @media @tablet {
    }
  }

  h3 {
    font-family: @body-font;
    font-size: 36px;
    line-height: 1.2;
    color: @primary-colour;
    text-transform: none;
    margin: 0 0 20px 0;
    font-weight: 300;

    @media @tablet {
      font-size: 24px !important;
    }

    span {
      font-weight: 700;
      color: @accent-colour;
    }
  }

  p {
    margin: 0 0 15px 0;
    font-weight: 400;
    color: @primary-colour;
  }

  #finance-budget-range-min {
    clear: both;
    padding: 15px;

    label {
      float: left;
      margin: 0 10px 10px 0;
      padding: 0;
      font-family: @alpha-font;
      font-weight: 400;
      font-size: 24px;
      line-height: 31px;
      display: inline-block;
      float: left;
      cursor: pointer;
      color: @accent-colour;
    }

    input#amount-budget-range-min {
      border: 0;
      color: @accent-colour;
      font-family: @alpha-font;
      font-size: 24px;
      height: 30px;
      font-weight: bold;
      float: right;
      text-align: right;
      display: inline-block;
      width: 90px;
      margin: 0 0 10px 0;
      padding: 0;
      background: none;
      cursor: pointer;
      box-shadow: none;
      text-shadow: none;
      @media @mobile {
        float: left;
        text-align: left;
        margin: 0 0 15px !important;
      }
    }

    .slider-group {
      margin: 10px 0 0 0;
      clear: both;
      float: left;
      width: 100%;

      #slider-range-min {
        border: none;
        background: fade(black, 15%);
        height: 14px;
        border-radius: 99px;
        border-radius: 0px;

        .ui-slider-range {
          background: fade(black, 25%);
          border-radius: 0px;
        }

        .ui-state-default {
          border: none;
          background: white;
        }

        .ui-slider-handle {
          width: 28px;
          height: 28px;
          border-radius: 2px !important;
          width: 18px !important;
          top: -7px !important;
          margin-left: -14px !important;
          background: @accent-colour;

          &:focus {
            outline: none;
          }
        }
      }
    }

    #button-budget-range-min {
			.btn;
			float: right;
    }

    @media @mobile {
      .fourcolx,
      .eightcolx {
        width: 50%;
        margin: 0px;
        float: left;
        clear: none;
      }
    }
  }
}

@media handheld, only screen and (max-width: 979px) {
  /* <= Tablet */

  .row-block.finance {
    padding: 40px 0;
  }

  #budget-slider {
    h3 {
      font-size: 30px;
    }
  }
}

@media handheld, only screen and (max-width: 739px) {
  /* <= Mobile */

  .row-block.finance {
    padding: 30px 0;
  }

  #budget-slider {
    .budget-slider__item {
      width: 100%;
    }

    h3 {
      font-size: 26px;
      margin: 0 0 15px 0;
    }

    #finance-budget-range-min {
      .slider-group {
        #slider-range,
        #slider-range-min {
          width: 100%;
        }
      }

      #button-budget-range-min {
        width: auto;
        margin-top: 0px;
      }
    }
  }
}
</style>
