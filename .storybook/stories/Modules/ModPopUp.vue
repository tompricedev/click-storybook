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
@import "../assets/less/global.less";

.rsContent { height: 100% };


.row-block.slider {
	background: white !important;
	padding: 0!important;
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
