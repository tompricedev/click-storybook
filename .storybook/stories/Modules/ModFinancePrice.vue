<template>
  <div class="row-block car-carousel">
    <div class="wrapper">
      <div class="container">
        <div
          id="hmpg-picks-carousel"
          class="touchcarousel clear-fix"
          style="overflow: visible;"
        >
          <em class="row-block__heading center">Our latest offers</em>
          <div class="touchcarousel-wrapper grabbing-cursor">
            <ul
              class="touchcarousel-container"              
            >
              <li id="pick" class="touchcarousel-item" v-for="vehicle in vehicles">
                <a
                  href="void();"
                  title="Used MERCEDES-BENZ C-CLASS for sale in Stoke on Trent"
                  ><img
                    class="home-carousel-image"
                    alt="2009 MERCEDES-BENZ C-CLASS 2.1 C220 CDI BLUEEFFICIENCY SPORT 4d 170 BHP £7895.00"
                    src="https://source.unsplash.com/random"
                /></a>
                <div class="carousel-text">
                  <a
                    href="used-mercedes-benz-c-class-stoke-on-trent-staffordshire-2508370"
                    title="Used 2009 MERCEDES-BENZ C-CLASS 2.1 C220 CDI BLUEEFFICIENCY SPORT 4d 170 BHP for sale in Stoke on Trent"
                  >
                    <div class="carousel-info__price-block">
                      <div class="carousel-info__price">
                        <div class="price">£7,895</div>
                      </div>
                      <div class="carousel-info__finance {FINANCE_STATUS}">
                        <div class="label">Finance from</div>
                        <div class="monthly">£184 <span>p/m</span></div>
                      </div>
                    </div>
                    <div class="carousel-info__title">
                      MERCEDES-BENZ C-CLASS
                    </div>
                    <div class="carousel-info__variant">
                      2009 2.1 C220 CDI BLUEEFFICIENCY SPORT 4d 170 BHP
                    </div>
                  </a>
                </div>
              </li>
							
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vehicles: [1, 2, 3, 4, 5, 6, 7],
    };
  },
};
</script>

<style lang="less">
@import "../assets/less/global.less";

.car-carousel {
  background: #f5f5f5;
	box-sizing: border-box;
	padding: 40px 0;

  .container,
  .pad-10.overflow-hidden {
    overflow: visible !important;
    padding: 0px;
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
    // display: flex;
    .flex-display(@display: flex);
    .align-items(@align: flex-start);
  }

  .touchcarousel-item {
    // flex: 0 0 300px;
    .flex-grow(@grow: 0);
    .flex-shrink(@shrink: 0);
    .flex-basis(@width: 320px);
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
      .flex-basis(@width: 300px);
      width: 300px;
    }

    .carousel-image {
      object-fit: cover;
      width: 100%;
      height: 200px;
    }

    .carousel-info {
      &__price-block {
        .flex-display(@display: flex);
        width: 100%;
        box-sizing: border-box;
        min-height: 60px;
      }

      &__price,
      &__finance {
        position: relative;
        .flex-grow(@grow: 1);
        .flex-shrink(@shrink: 1);
        .flex-basis(@width: 50%);
        width: 50%;
        .flex-display(@display: flex);
        .flex-direction(@direction: column);
        .justify-content(@justify: center);
        .align-items(@align: center);
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
  .char(angle-left-r);
  // content: '\f104';
  display: block;
  text-align: center;
  height: 26px;
  width: 26px;
  line-height: 26px;
  font-family: "ClickIcons";
}

.touchcarousel .arrow-icon.right:before {
  .char(angle-right-r);
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
