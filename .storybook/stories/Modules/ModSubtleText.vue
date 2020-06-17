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
@import "../assets/less/global.less";

.rsContent { height: 100% };

/* Slider Row Block */
.row-block.slider {
	background: white !important;
	padding: 0!important;

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
