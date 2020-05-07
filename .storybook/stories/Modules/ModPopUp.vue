<template>
  <!-- Homepage Slider -->
  <div
    class="{v2_36_MOBILE_ON_OFF} {v2_36_TABLET_ON_OFF} {v2_36_DESKTOP_ON_OFF}"
  >
    <div class="row-block slider">
      <div id="responsive-slider-with-blocks-1" class="royalSlider rsMinW">
        <div class="rsContent slide1 lazy-background">
          <div class="slider-text">
            <div class="slider-block">
              <div class="container">
                <div class="row">
                  <div class="ninecol">
                    <div class="slider-heading">Welcome to {v2_NAME}</div>
                    <div class="slider-subheading">
                      Over 45 years experience in the motortrade
                    </div>
                  </div>
                  <div class="threecol btn-cta last">
                    <div class="slider-button">
                      <a href="/search.php">View Stock</a>
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
  <!-- // Homepage Slider -->
</template>

<script>
export default {
  name: "mod-pop-up",
};
</script>

<style lang="less" scoped>
@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
@-moz-keyframes fadein {
  /* Firefox */
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fadein {
  /* Safari and Chrome */
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
@-o-keyframes fadein {
  /* Opera */
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes popup {
	from {
		bottom: -200px;
	}
	to {
		bottom: 0;
	}
}

// overwrites to get things working in preview
.rsContent {
  height: 100%;
}
// end overwrites

.flex-display {
  display: flex;
}

// The 'flex' shorthand
// - applies to: flex items
// <positive-number>, initial, auto, or none
.flex(@columns: initial) {
  -webkit-flex: @columns;
  -ms-flex: @columns;
  flex: @columns;
}

// Flex Flow Direction
// - applies to: flex containers
// row | row-reverse | column | column-reverse
.flex-direction(@direction: row) {
  -webkit-flex-direction: @direction;
  -ms-flex-direction: @direction;
  flex-direction: @direction;
}

// Flex Line Wrapping
// - applies to: flex containers
// nowrap | wrap | wrap-reverse
.flex-wrap(@wrap: nowrap) {
  -webkit-flex-wrap: @wrap;
  -ms-flex-wrap: @wrap;
  flex-wrap: @wrap;
}

// Flex Direction and Wrap
// - applies to: flex containers
// <flex-direction> || <flex-wrap>
.flex-flow(@flow) {
  -webkit-flex-flow: @flow;
  -ms-flex-flow: @flow;
  flex-flow: @flow;
}

// Display Order
// - applies to: flex items
// <integer>
.flex-order(@order: 0) {
  -webkit-order: @order;
  -ms-order: @order;
  order: @order;
}

// Flex grow factor
// - applies to: flex items
// <number>
.flex-grow(@grow: 0) {
  -webkit-flex-grow: @grow;
  -ms-flex-grow: @grow;
  flex-grow: @grow;
}

// Flex shrink
// - applies to: flex item shrink factor
// <number>
.flex-shrink(@shrink: 1) {
  -webkit-flex-shrink: @shrink;
  -ms-flex-shrink: @shrink;
  flex-shrink: @shrink;
}

// Flex basis
// - the initial main size of the flex item
// - applies to: flex itemsnitial main size of the flex item
// <width>
.flex-basis(@width: auto) {
  -webkit-flex-basis: @width;
  -ms-flex-basis: @width;
  flex-basis: @width;
}

// Axis Alignment
// - applies to: flex containers
// flex-start | flex-end | center | space-between | space-around
.justify-content(@justify: flex-start) {
  -webkit-justify-content: @justify;
  -ms-justify-content: @justify;
  justify-content: @justify;
}

// Packing Flex Lines
// - applies to: multi-line flex containers
// flex-start | flex-end | center | space-between | space-around | stretch
.align-content(@align: stretch) {
  -webkit-align-content: @align;
  -ms-align-content: @align;
  align-content: @align;
}

// Cross-axis Alignment
// - applies to: flex containers
// flex-start | flex-end | center | baseline | stretch
.align-items(@align: stretch) {
  -webkit-align-items: @align;
  -ms-align-items: @align;
  align-items: @align;
}

// Cross-axis Alignment
// - applies to: flex items
// auto | flex-start | flex-end | center | baseline | stretch
.align-self(@align: auto) {
  -webkit-align-self: @align;
  -ms-align-self: @align;
  align-self: @align;
}

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

// slider heights
@slider-height: 500px;
@slider-min-height: 500px;
@slider-height-tablet: 500px;
@slider-min-height-tablet: 500px;
@slider-height-mobile: 350px;
@slider-min-height-mobile: 250px;

.btn {
	color: @button-text-colour !important;
  background: @button-bg-colour !important;
  font-family: @alpha-font;
  font-weight: 600 !important;
  font-size: 15px;
  text-transform: none;
	outline: none;
	text-decoration: none;
  border-radius: 4px!important;
  box-shadow: none !important;
  text-shadow: none !important;
  line-height: 18px !important;
  margin: 0 !important;
  padding: 10px 15px !important;
  box-sizing: border-box;
  height: 36px !important;
  transition: 0.2s all ease-in-out;
  border: none!important;
  height: auto !important;
  text-align: center !important;
}


.row-block.slider {
  background: white !important;
}

/* Slider Horizontal Pop Up Text */
#responsive-slider-with-blocks-1 {
  background: none;
  height: @slider-height!important;
  min-height: @slider-min-height!important;
  width: 100%;
  /* same height as slider-block */
  @media @tablet {
    height: @slider-height-tablet!important;
    min-height: @slider-min-height-tablet!important;
    /* same height as slider-block */
  }
  @media @mobile {
    height: @slider-height-mobile!important;
    min-height: @slider-min-height-mobile!important;
    /* same height as slider-block */
  }

  .rsContent.slide1,
  .rsContent.slide2,
  .rsContent.slide3,
  .rsContent.slide4 {
    background: url("https://source.unsplash.com/random") center center
      no-repeat;
    background-size: cover !important;
    background-repeat: no-repeat !important;
		background-position: center center !important;
		    overflow: hidden;
    position: relative;
  }

  .slider-text {
    position: absolute !important;
    right: 0;
    bottom: -200px;
    left: 0;
    width: 100%;
    transition: all 1s linear;
		background: fade(black, 40%);
		animation: popup 1.5s linear forwards;

    .slider-block {
      margin: 0;
      padding: 25px 0;

      @media @mobile {
        padding: 10px 0;
      }

      .row {
				display: flex;
				justify-content: space-between;
        flex-wrap: nowrap;
      }

      .ninecol {
        flex: 4 4 500px;

        @media @tablet {
          width: 100%;
          .flex-basis(@width: 100%);
          margin: 0;
          text-align: center;
        }

        @media @mobile {
          padding: 3px 0 10px;
          flex: 4 4 100%;
        }

        .slider-heading,
        .slider-subheading {
          font-family: @heading-font;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.2;
          display: block;
          margin: 0;
          padding: 0 10px;
          text-align: left;
          letter-spacing: 0;
					color: white;
					white-space: nowrap;
          @media @tablet {
            font-size: 17px;
            text-align: left;
          }
          @media @mobile {
            font-size: 14px;
            text-align: center;
          }
        } // end slider-heading and slider-subheading

        .slider-heading {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
          text-transform: none;
          font-family: @heading-font;

          @media @tablet {
            font-size: 24px;
          }
          @media @mobile {
            font-size: 18px;
          }
        }

        .slider-subheading {
          color: fade(white, 80%);
        }
      } // end slider ninecol

      .threecol {
        border-left: 1px solid fade(white, 50%);
        flex: 1 1 200px;
        align-self: stretch !important;
        display: flex;
        align-items:center;

        @media @tablet {
          // width: 100%;
          // flex-basis: 100%;
          // max-width: 70%;
          // text-align: center;
          // border-left: 0px;
          // margin: 0px auto 10px auto;
        }

        .slider-button {
          padding: 0 10px;
          text-align: center;
          margin-left: auto;

          @media @tablet {
            width: 100%;
            // margin-top: 20px;
          }

          @media @mobile {
            margin-right: auto;
          }

          a {
            .btn;
          } // end slider-button a
        } // end slider-button
      } // end slider threecol
    } // end slider-block
  } // end slider-text

  .rsActiveSlide {
    .slider-text {
      position: absolute !important;
      right: 0;
      bottom: 0px;
      left: 0;
      width: 100%;
    }
  }
} // end slider-with-blocks
</style>
