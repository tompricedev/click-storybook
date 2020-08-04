<template>
  <div class="row-block row-block--promo-large-tiles">
    <div class="wrapper">
      <div class="container">
        <div class="promo-block">
          <div class="promo-block__item promo-block__item--1">
            <a href="/search.php">
              <span class="promo-block__image lazy-background"></span>
              <em>Current stock</em>
            </a>
          </div>
          <div class="promo-block__item promo-block__item--2">
            <a href="/sellcar.php">
              <span class="promo-block__image lazy-background"></span>
              <em>Sell your car</em>
            </a>
          </div>
          <div class="promo-block__item promo-block__item--3">
            <a href="/finance.php">
              <span class="promo-block__image lazy-background"></span>
              <em>Finance options</em>
            </a>
          </div>
          <div class="promo-block__item promo-block__item--4">
            <a href="/partex.php">
              <span class="promo-block__image lazy-background"></span>
              <em>Part exchange</em>
            </a>
          </div>
          <div class="promo-block__item promo-block__item--5">
            <a href="/warranty.php">
              <span class="promo-block__image lazy-background"></span>
              <em>Warranty</em>
            </a>
          </div>
          <div class="promo-block__item promo-block__item--6">
            <a href="/about.php">
              <span class="promo-block__image lazy-background"></span>
              <em>About us</em>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/less/global.less";

// promo tiles

.row-block--promo-large-tiles {
  background: white;
  box-sizing: border-box;
}

@promo-count: 3;
@promo-margin: 0px;

.promo-block {
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;

  &__item {
    position: relative;
    flex: 0 0 calc(~"100% / @{promo-count} - @{promo-margin}");
    // IE Fallback
    width: calc(~"100% / @{promo-count} - @{promo-margin}");
    height: 300px;
    margin-right: @promo-margin;
    background: @custom-colour3;
    border-bottom: 20px solid white;
    border-left: 20px solid white;
    overflow: hidden;
    box-sizing: border-box;

    @media @tablet {
      flex: 0 0 calc(~"100% / 2 - @{promo-margin}");
      // IE Fallback
      width: calc(~"100% / 2 - @{promo-margin}");
    }

    @media @mobile {
      flex: 0 0 calc(~"100% / 1 - @{promo-margin}");
      // IE Fallback
      width: calc(~"100% / 1 - @{promo-margin}");
      height: 220px;
    }

    a {
      display: block;
      position: relative;
      height: 100%;
      width: 100%;
      padding: 40px;
      box-sizing: border-box;

      @media @mobile {
        padding: 20px;
      }

      em {
        position: relative;
        display: block;
        color: white;
        font-family: @heading-font;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        text-shadow: 0 2px 2px fade(black, 70%);
        z-index: 2;
      }
    }

    &:hover {
      .promo-block__image {
        transform: scale(1.1);
      }
    }

    &--1 {
      .promo-block__image {
        background-image: url("https://source.unsplash.com/400x400") !important;
      }
    }
    &--2 {
      .promo-block__image {
        background-image: url("https://source.unsplash.com/400x400") !important;
      }
    }
    &--3 {
      .promo-block__image {
        background-image: url("https://source.unsplash.com/400x400") !important;
      }
    }
    &--4 {
      .promo-block__image {
        background-image: url("https://source.unsplash.com/400x400") !important;
      }
    }
    &--5 {
      .promo-block__image {
        background-image: url("https://source.unsplash.com/400x400") !important;
      }
    }
    &--6 {
      .promo-block__image {
        background-image: url("https://source.unsplash.com/400x400") !important;
      }
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-position: center center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    transition: 0.2s linear;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        -75deg,
        rgba(0, 0, 0, 0) 150px,
        rgba(0, 0, 0, 0.4) 100%
      );
      z-index: 1;
    }
  }
}
</style>
