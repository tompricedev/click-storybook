<template>
  <!-- Homepage Slider -->
  <div class="row-block slider">
    <div id="responsive-slider-with-blocks-1" class="royalSlider rsMinW">
      <!-- Slide 1 -->
      <div class="rsContent slide1 lazy-background">
        <div class="wrapper">
          <div class="container">
            <div class="slider-text">
              <div class="slider-block">
                <div class="slider-heading">Welcome to {v2_NAME}</div>
                <div class="slider-subheading">
                  A family run business with over 40 years of experience
                </div>
                <div class="slider-button">
                  <a
                    href="/search.php"
                    title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s in {v2_COUNTY}"
                    >Search Stock</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- // END Slide 1 -->

      <!-- Slide 2 -->
      <!-- <div class="rsContent slide2 lazy-background">
        <div class="wrapper">
          <div class="container">
            <div class="slider-text">
              <div class="slider-block">
                <div class="slider-heading">Finance Specialists</div>
                <div class="slider-subheading">
                  Flexible finance options available
                </div>
                <div class="slider-button">
                  <a
                    href="/finance.php"
                    title="Used {v2_WEBSITE_VEHICLE_TYPE_LC} Finance in {v2_COUNTY}"
                    >Apply Online</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- // END Slide 2 -->

      <!-- Slide 3 -->
      <!-- <div class="rsContent slide3 lazy-background">
        <div class="wrapper">
          <div class="container">
            <div class="slider-text">
              <div class="slider-block">
                <div class="slider-heading">Part Exchange</div>
                <div class="slider-subheading">
                  Trade in your van with {v2_NAME}
                </div>
                <div class="slider-button">
                  <a
                    href="/partex.php"
                    title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s part exchanged"
                    >Get Valuation</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- // END Slide 3 -->

      <!-- Slide 4 -->
      <!-- <div class="rsContent slide4 lazy-background">
        <div class="wrapper">
          <div class="container">
            <div class="slider-text">
              <div class="slider-block">
                <div class="slider-heading">Vehicle Sourcing</div>
                <div class="slider-subheading">
                  You need the right van for the job and we can help you find it
                </div>
                <div class="slider-button">
                  <a
                    href="/car_locator.php"
                    title="Used {v2_WEBSITE_VEHICLE_TYPE_LC}s sourced in {v2_COUNTY}"
                    >Learn More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- // END Slide 4 -->
    </div>
  </div>
  <!-- // Homepage Slider -->
</template>

<script>
export default {
  name: "mod-subtle-text",
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
@slider-height: 60vh;
@slider-min-height: 500px;
@slider-height-tablet: 500px;
@slider-min-height-tablet: 500px;
@slider-height-mobile: 350px;
@slider-min-height-mobile: 250px;

/* Slider Row Block */
.row-block.slider {
  background: white !important;

  .container {
    margin: 0 auto;
    overflow: visible;
    position: relative;
  }
}

/* Slider Subtle text */
#responsive-slider-with-blocks-1,
.bContainer {
  background: white;
  height: @slider-height !important;
  max-height: @slider-height !important;
  min-height: @slider-min-height !important;

  @media @lap {
    height: @slider-height-tablet !important;
    max-height: @slider-height-tablet !important;
    min-height: @slider-min-height-tablet !important;
  }

  @media @mobile {
    height: @slider-height-mobile !important;
    max-height: @slider-height-mobile !important;
    min-height: @slider-min-height-mobile !important;
  }

  .rsContent.slide1,
  .rsContent.slide2,
  .rsContent.slide3,
  .rsContent.slide4 {
    background: url("https://source.unsplash.com/random") center center
      no-repeat;
    background-size: cover;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    position: relative;
    &:before {
      top: 0px;
      left: 0;
      content: " ";
      height: 100%;
      width: 100%;
      // background: fade(black,40%);
      background: linear-gradient(
        to bottom,
        fade(black, 60%) 40%,
        fade(black, 20%) 100%
      );
      position: absolute;
      pointer-events: none;
      animation: fadein 1s;
      animation-fill-mode: forwards;
      opacity: 0;
      animation-delay: 1s;
      transition: all 0.2s linear;

      @media @tablet {
        left: 0;
        right: 0;
        width: 100%;
        background: fade(black, 50%);
        display: block;
      }
    }

    @media @mobile {
      background: @primary-colour;
    }
  }

  .slider-text {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 600px;

    @media @mobile {
      width: 100%;
      position: static;
    }

    .slider-block {
      margin: 0;
      height: @slider-height !important;
      max-height: @slider-height !important;
      min-height: @slider-min-height !important;
      box-sizing: border-box;
      display: flex !important;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media @lap {
        height: @slider-height-tablet !important;
        max-height: @slider-height-tablet !important;
        min-height: @slider-min-height-tablet !important;
        justify-content: center;
      }

      @media @mobile {
        height: @slider-height-mobile !important;
        max-height: @slider-height-mobile !important;
        min-height: @slider-min-height-mobile !important;
        align-items: center;
        justify-content: center;
      }

      .slider-heading,
      .slider-subheading,
      .slider-button {
        font-family: @heading-font;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.2;
        color: white;
        text-align: center;
        text-transform: none;
        display: block;
        margin: 0;
        padding: 0;
        animation: fadein 1s;
        animation-fill-mode: forwards;
        opacity: 0;
        transition: all 0.2s linear;
        position: relative;
        z-index: 2;

        @media @tablet {
          font-size: 18px;
        }

        @media @mobile {
          font-size: 16px;
          text-align: center;
        }
      }

      .slider-heading {
        font-weight: 700;
        font-size: 40px;
        line-height: 1;
        text-transform: none;
        padding: 0;
        margin: 20px 0;
        position: relative;
        animation-delay: 1.5s;
        text-shadow: 0 0 2px fade(black, 50%);

        @media @mobile {
          margin-top: 0px;
        }

        @media @tablet {
          font-size: 34px;
        }

        @media @mobile {
          font-size: 28px;
        }
      }

      .slider-subheading {
        color: white;
        letter-spacing: 0.5px;
        text-transform: none;
        animation-delay: 2s;
        margin: 0 0 20px 0;
        text-shadow: 0 0 2px 5px fade(black, 50%);

        span {
          width: 30px;
          height: 30px;
          line-height: 30px;
          font-size: 20px;
          font-weight: 600;
          color: white;
          background: @accent-colour;
          border-radius: 99px;
          display: inline-block;
          text-align: center;
        }

        .list-ticks {
          li {
            color: white;
            font-weight: bold;
            display: inline-block;
          }
        }
      }

      .slider-button {
        margin: 15px 0 0 0;
        animation-delay: 2.5s;

        @media @tablet {
          margin: 10px 0 0 0;
        }

        a {
          background: @button-bg-colour;
          color: @button-text-colour;
          font-size: 14px;
          line-height: 1;
          font-weight: 600;
          text-transform: uppercase;
          text-shadow: none;
          text-decoration: none;
          display: inline-block;
          padding: 15px 40px;
          border-radius: 4px;
          transition: all 0.2s linear;

          @media @tablet {
            padding: 13px 25px;
            font-size: 12px;
          }

          &:hover {
            color: @button-text-hover-colour;
            background: @button-bg-hover-colour;
          }
        }
      }
    }
  }
}

.rsMinW {
  .rsBullets {
    position: absolute;
    z-index: 35;
    bottom: 45%;
    right: 40px;
    text-align: left;
    overflow: hidden;
    line-height: 12px;

    @media @mobile {
      bottom: 15px;
      right: 41%;
      line-height: 10px;
    }
  }

  .rsBullet {
    width: 12px;
    height: 12px;
    display: block;
    margin: 8px 0;
    border-radius: 0;
    background: white;

    @media @mobile {
      width: 10px;
      height: 10px;
      margin: 0 3px;
      background: white;
      display: inline-block;
    }
  }

  .rsBullet.rsNavSelected,
  .rsMinW .rsThumbs {
    background: @accent-colour;
  }
}
</style>
