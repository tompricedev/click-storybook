<template>
  <!-- Homepage Car Carousel -->
  <div class="row-block car-carousel">
    <div class="wrapper">
      <div class="container">
        <div id="hmpg-picks-carousel" class="touchcarousel clear-fix">
          <h2>Our latest offers</h2>
          <ul class="touchcarousel-container">
            <li
              id="pick_{PICK_SEQ}"
              class="touchcarousel-item"
              v-for="item in items"
            >
              <a
                href="/"
                title="Used {PICK_MAKE} {PICK_MODEL} for sale in {v2_TOWN}"
                ><img
                  class="home-carousel-image lazy"
                  alt="{PICK_TITLE}"
                  src="../assets/picks/carousel-car.jpg"
              /></a>

              <div class="carousel-text">
                <a
                  href="{PICK_SLUG}"
                  title="Used {PICK_YEAR} {PICK_MAKE} {PICK_MODEL} {PICK_VARIANT} for sale in {v2_TOWN}"
                >
                  <div class="carousel-info__price-block">
                    <div class="carousel-info__price">
                      <div class="price">£PRICE</div>
                    </div>
                    <div class="carousel-info__finance {FINANCE_STATUS}">
                      <div class="label">Finance from</div>
                      <div class="monthly">PRICE <span>p/m</span></div>
                    </div>
                  </div>
                  <div class="carousel-info__title">
                    MAKE MODEL
                  </div>
                  <div class="carousel-info__variant">
                    YEAR, VARIANT
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- // Homepage Search Finance -->
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8],
    };
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

.car-carousel {
  background: 0;
  box-sizing: border-box;
  overflow: hidden;

  .container,
  .pad-10.overflow-hidden {
    overflow: visible !important;
    padding: 0px;
	}
	
	h2 {
		text-align: center;
		margin-bottom: 20px;
	}

	a {
		text-decoration: none;
	}
}

#hmpg-picks-carousel,
#detail-similar-carousel {
  position: relative;
  height: auto;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    transition: all 0.2s linear;
  }

  img[src*="placeholder.svg"] {
    height: 32px;
    width: 32px;
  }

  .touchcarousel-wrapper {
    padding: 0;
  }

  .touchcarousel-container {
    display: flex;
    align-items: flex-start;
  }

  .touchcarousel-item {
    // flex: 0 0 300px;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 320px;
    width: 320px;
    margin-right: 20px;
    position: relative;
    text-align: center;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    background: white;
    border: 1px solid darken(@body-colour, 7%);
    border-radius: 5px;
    box-shadow: 0 3px 3px #eaeff7;
    box-sizing: border-box;
    overflow: hidden;

    @media @mobile {
      flex-basis: 300px;
      width: 300px;
    }

    .carousel-image {
      object-fit: cover;
      width: 100%;
      height: 200px;
    }

    .carousel-info {
      &__price-block {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        min-height: 60px;
      }

      &__price,
      &__finance {
        position: relative;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 50%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: @primary-colour;
        color: white;
        padding: 10px;
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        font-weight: bold;
        box-sizing: border-box;

        @media @tablet {
          font-size: 14px;
        }

        .label {
          color: @text-colour;
          font-family: @body-font;
          font-size: 10px;
          line-height: 1;
          text-transform: uppercase;
        }

        .price {
          font-size: 18px;
        }

        .price,
        .monthly {
          color: white;
          font-family: @heading-font;
          line-height: 1;
          font-weight: bold;

          span {
            font-size: 10px;
          }
        }
      }

      &__finance {
        background: lighten(@primary-colour, 15%);

        .label {
          color: @accent-colour;
        }
      }

      &__title {
        display: block;
        margin: 15px 15px 10px 15px;
        font-family: @heading-font;
        font-size: 20px;
        line-height: 1.2;
        font-weight: bold;
        color: @text-colour;
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      &__variant {
        display: block;
        margin: 0 15px 15px 15px;
        font-family: @heading-font;
        font-size: 16px;
        line-height: 1.2;
        font-weight: normal;
        color: @text-colour;
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}

.touchcarousel .touchcarousel-container {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  left: 0;
}

.touchcarousel .touchcarousel-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

/* Arrow and Pagination Change */

.tc-paging-container {
  display: none;
}

.touchcarousel .arrow-holder {
  height: 26px;
  width: 26px;
  position: absolute;
  top: 48%;
  display: block;
  cursor: pointer;
  z-index: 25;
  text-decoration: none;
  outline: none;
  border: none;

  &.left {
    left: -34px;
  }

  &.right {
    right: -34px;
  }

  @media handheld, only screen and (max-width: 1700px) {
    display: none;
  }
}

/* arrow icons */
.touchcarousel .arrow-icon {
  width: auto;
  height: auto;
  background: none;
  color: fade(black, 25%);
  opacity: 1;
  border-radius: 0;
  cursor: pointer;
  display: block;
  font-family: "ClickIcons";
  font-style: normal;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  text-transform: none !important;
  text-decoration: none;
  outline: none;
  border: none;
  font-size: 55px;
}

.touchcarousel .arrow-icon.left:before {
  // .char(angle-left-r);
  // content: '\f104';
  display: block;
  text-align: center;
  height: 26px;
  width: 26px;
  line-height: 26px;
  font-family: "ClickIcons";
}

.touchcarousel .arrow-icon.right:before {
  // .char(angle-right-r);
  // content: '\f105';
  display: block;
  text-align: center;
  height: 26px;
  width: 26px;
  line-height: 26px;
  font-family: "ClickIcons";
}

.touchcarousel .arrow-holder:hover .arrow-icon {
  color: @accent-colour;
}

.touchcarousel .arrow-holder.disabled {
  cursor: default;
  opacity: 0.1;
}

.touchcarousel .arrow-holder.disabled .arrow-icon {
  cursor: default;
}
</style>
