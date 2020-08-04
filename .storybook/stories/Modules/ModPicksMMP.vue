<template>
  <div class="row-block car-carousel">
    <div class="wrapper">
      <div class="container">
        <div
          id="hmpg-picks-carousel"
          class="touchcarousel clear-fix"
          style="overflow: visible;"
        >
          <em class="row-block__heading center">Latest arrivals</em>
          <div class="touchcarousel-wrapper grabbing-cursor">
            <ul
              class="touchcarousel-container"              
            >
              <li v-for="vehicle in vehicles" id="pick_2" class="touchcarousel-item">
                <a href="" title="Used MINI HATCH COOPER for sale in Thurleigh"
                  ><img
                    class="home-carousel-image"
                    alt="2004 MINI HATCH COOPER 1.6 COOPER 3d 114 BHP £1999.00"
                    src="https://source.unsplash.com/random/300x200"
                /></a>

                <div class="carousel-info">
                  <div class="carousel-info__title">MINI HATCH COOPER</div>
                  <div class="carousel-info__variant">
                    2004 1.6 COOPER 3d 114 BHP
                  </div>
                  <div class="carousel-info__price-block">
                    £1,999
                    <span class="monthly {FINANCE_STATUS}">From £59 p/m</span>
                  </div>
                  <div class="carousel-info__ctas">
                    <a
                      href="used-mini-hatch-cooper-thurleigh-bedfordshire-2826943"
                      title="Used 2004 MINI HATCH COOPER 1.6 COOPER 3d 114 BHP for sale in Thurleigh"
                      class="btn"
                      >View this vehicle</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <a href="#" class="arrow-holder left"
            ><span class="icon-arrow-left arrow-icon left"></span
          ></a>
          <a href="#" class="arrow-holder right"
            ><span class="icon-arrow-right arrow-icon right"></span
          ></a>
          <div class="tc-paging-container">
            <div class="tc-paging-centerer">
              <div class="tc-paging-centerer-inside">
                <a class="tc-paging-item" href="#">1</a
                ><a class="tc-paging-item" href="#">2</a
                ><a class="tc-paging-item" href="#">3</a
                ><a class="tc-paging-item" href="#">4</a
                ><a class="tc-paging-item" href="#">5</a
                ><a class="tc-paging-item current" href="#">6</a
                ><a class="tc-paging-item" href="#">7</a
                ><a class="tc-paging-item" href="#">8</a
                ><a class="tc-paging-item" href="#">9</a
                ><a class="tc-paging-item" href="#">10</a
                ><a class="tc-paging-item" href="#">11</a
                ><a class="tc-paging-item" href="#">12</a
                ><a class="tc-paging-item" href="#">13</a
                ><a class="tc-paging-item" href="#">14</a>
              </div>
            </div>
          </div>
          <div class="scrollbar-holder">
            <div
              class="scrollbar dark"
              style="width: 314px; left: 369.388px;"
            ></div>
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
      vehicles: [1, 2, 3, 4, 5, 6],
    };
  },
};
</script>

<style lang="less" scoped>
@import "../assets/less/global.less";

.car-carousel {
  background: white;
  box-sizing: border-box;

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
    object-fit: cover;
    width: 100%;
    height: 200px;
  }

  // img[src*="placeholder.svg"] {
  //   height: 32px;
  //   width: 32px;
  // }

  .touchcarousel-wrapper {
    padding: 0;
  }

  .touchcarousel-container {
    display: flex;
    .flex-display(@display: flex);
    .align-items(@align: flex-start);
    padding: 0 0 10px 0;
  }

  .touchcarousel-item {
    // flex: 0 0 300px;
    .flex-grow(@grow: 0);
    .flex-shrink(@shrink: 0);
    .flex-basis(@width: 303px);
    width: 303px;
    margin-right: 20px;
    position: relative;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    background: white;
    border: 1px solid darken(@body-colour, 7%);
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;

    @media @mobile {
      .flex-basis(@width: 300px);
      width: 300px;
    }

    .carousel-info {
      &__title {
        display: block;
        margin: 20px 20px 5px 20px;
        font-family: @heading-font;
        font-size: 20px;
        line-height: 1.2;
        font-weight: 700;
        color: @heading-colour;
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      &__variant {
        display: block;
        margin: 0 20px 10px 20px;
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

      &__price-block {
        display: block;
        margin: 10px 20px 20px;
        font-family: @heading-font;
        font-size: 20px;
        line-height: 1.2;
        font-weight: 700;
        color: @heading-colour;

        span.monthly {
          display: block;
          font-size: 14px;
          font-weight: 400;
        }
      }

      &__ctas {
        margin: 0 20px 10px 20px;

        a {
          display: block;
        }
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
  height: 40px;
  width: 40px;
  position: absolute;
  top: 54%;
  display: block;
  cursor: pointer;
  z-index: 25;
  text-decoration: none;
  outline: none;
  border: none;

  &.left {
    left: -50px;
  }

  &.right {
    right: -50px;
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
