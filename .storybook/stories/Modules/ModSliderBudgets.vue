<template>
  <!-- Homepage Search Finance -->
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
                      <h3>
                        Our finance team can help you get the best
                        <span>finance deal based on your budget.</span>
                      </h3>
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

                    <div class="eightcolx left"></div>

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

            <div class="sixcol last alignvcenter">
              <div class="row">
                <ul class="budget-boxes">
                  <li class="lazy-background">
                    <a
                      href="/search_page.php?budget=100"
                      title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s for sale - up to &pound;100p/m"
                      ><span>Upto &pound;100 p/m</span></a
                    >
                  </li>
                  <li class="lazy-background">
                    <a
                      href="/search_page.php?budget=150"
                      title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s for sale - up to &pound;150p/m"
                      ><span>Upto &pound;150 p/m</span></a
                    >
                  </li>
                  <li class="lazy-background">
                    <a
                      href="/search_page.php?budget=99999"
                      title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s for sale - over &pound;200p/m"
                      ><span>&pound;200 p/m Plus</span></a
                    >
                  </li>
                </ul>
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

.sixcol {
  width: 50%;
}

.twelvecol {
  width: 100%;
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
  background: #f5f5f5;
  padding: 60px 0 60px 0;

  .container {
    overflow: visible;
  }

  ul.budget-boxes {
    width: 100%;
		display: flex;
		list-style: none;
    @media @mobile {
      flex-direction: column;
      display: none;
    }
    li {
      flex: 1;
      text-align: center;
      background: #ffffff;
      margin-right: 5px;
      height: 266px;
      position: relative;
      transition: all 0.3s ease-in-out;
      @media @mobile {
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
          padding: 9px 5px;
          color: white;
          width: 100%;
          bottom: 0px;
          left: 0px;
          box-sizing: border-box;
          transition: all 0.3s ease-in-out;
        }
      }
      &:nth-child(1),
      .lazy-background {
				background: @primary-colour url('https://source.unsplash.com/random') center no-repeat;
				background-size: cover;
      }
      &:nth-child(2),
      .lazy-background {
				background: @primary-colour url('https://source.unsplash.com/random') center no-repeat;
				background-size: cover;
      }
      &:nth-child(3),
      .lazy-background {
				background: @primary-colour url('https://source.unsplash.com/random') center no-repeat;
				background-size: cover;
      }
      &:last-child {
        margin-right: 0px;
      }
      &:hover {
        > a {
          // .linear-gradient
          //   (
          //     @startColour: fade(black, 90%),
          //     @endColour: fade(black, 0%),
          //     @direction: top
          //   );
          span {
            padding: 15px 5px;
          }
        }
      }
    } // end li
  }
}

#budget-slider {
  height: 266px;
  position: relative;

  h3 {
    font-family: @heading-font;
    font-size: 34px;
    line-height: 1.2;
    color: @primary-colour;
    text-transform: none;
    margin: 0 0 14px 0;

    span {
      color: @accent-colour;
    }
  }

  p {
    color: fade(white, 75%);
    margin: 0 0 15px 0;
  }

  #finance-budget-range-min {
    clear: both;
    margin: 0;

    label {
      float: left;
      margin: 0 10px 10px 0;
      padding: 0;
      font-family: @heading-font;
      font-weight: 400;
      font-size: 24px;
      line-height: 31px;
      display: inline-block;
      float: left;
      cursor: pointer;
      color: @primary-colour;

      @media @mobile {
        text-align: center;
        width: 100%;
        margin-right: 0px;
      }
    }

    input#amount-budget-range-min {
      border: 0;
      color: @primary-colour!important;
      font-family: @heading-font;
      font-size: 24px;
      height: 33px !important;
      font-weight: bold;
      float: left;
      display: inline-block;
      width: 120px;
      margin: 0 0 10px 0 !important;
      padding: 0 !important;
      background: none !important;
      cursor: pointer;
      box-shadow: none;
      text-shadow: none;

      @media @mobile {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
      }
    }

    .slider-group {
      margin: 10px 0 0 0;
      clear: both;

      #slider-range-min {
        border: none;
        background: fade(black, 10%);
        height: 14px;
        border-radius: 99px;
        border: 0px !important;

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
          background: black;

          &:focus {
            outline: none;
          }
        }
      }
    }

    #button-budget-range-min {
      width: auto;
      border: none;
      line-height: 1;
      text-shadow: none;
      box-shadow: none;
      transition: all 0.2s linear;
      float: right;
      border-radius: 0px !important;
      .btn;
      position: absolute;
      right: 0px;
      bottom: 0px;
      margin: 0px !important;

      @media @mobile {
        position: relative;
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
      font-size: 25px;
    }
  }
}

@media handheld, only screen and (max-width: 739px) {
  /* <= Mobile */

  .row-block.finance {
    padding: 40px 0;

    .wrapper {
      padding: 0 15px;
    }

    .row.flex {
      flex-direction: column;
      h3 {
        text-align: center;
        font-size: 20px !important;
      }
      .sixcol {
        width: 100%;
      }

      #finance-budget-range-min {
        margin-bottom: 15px !important;
      }

      #button-budget-range-min {
        width: 100% !important;
      }
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
          width: 96%;
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
