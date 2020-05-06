<template>
  <!-- Homepage Slider -->
  <div class="row-block hero-unit lazy-background">
    <div class="hero-unit-block">
      <div class="hero-unit-block__title">Welcome to {v2_NAME}</div>
      <div class="hero-unit-block__text">
        Family-run business established in 2007
      </div>

      <div class="search-block">
        <!-- {LOAD_SEARCH_HOME} -->
      </div>
    </div>
  </div>
  <!-- // Homepage Slider -->
</template>

<script>
export default {
  name: "mod-search-block",
};
</script>

<style lang="less" scoped>
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

.row-block.hero-unit {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
	padding: 0;
	background: url('https://source.unsplash.com/random') center center no-repeat;
	background-size: cover;

  // &.visible {
  //   background: url("@{dealer-img}/theme/hero-unit__bg{CACHE_BUSTER}.jpg")
  //     center center no-repeat !important;
  //   background-size: cover !important;

  //   @media @mobile {
  //     background: url("@{dealer-img}/theme/hero-unit__bg--mobile{CACHE_BUSTER}.jpg")
  //       center center no-repeat !important;
  //     background-size: cover !important;
  //   }
  // }

  @media @mobile {
  }

  .container {
    margin: 0 auto;
    overflow: visible;
    position: relative;
  }
}

.hero-unit-block {
  margin: 120px 20px;
  padding: 40px;
  width: calc(~"100% - 80px");
  max-width: 900px;
  background: fade(@primary-colour, 90%);
  box-sizing: border-box;
  z-index: 2;

  @media @tablet {
    margin: 80px 20px;
    padding: 30px;
    width: calc(~"100% - 60px");
  }

  @media @mobile {
    padding: 20px;
    margin: 20px;
    width: calc(~"100% - 40px");
  }

  &__title {
    display: block;
    margin: 0 0 10px 0;
    color: white;
    font-family: @heading-font;
    font-size: 32px;
    line-height: 1.2;
    font-weight: 700;
    text-align: center;

    @media @tablet {
      font-size: 24px;
    }
    @media @mobile {
      font-size: 22px;
      margin-bottom: 30px;
    }
  }

  &__text {
    margin: 0 0 30px 0;
    color: @accent-colour;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;

    @media @mobile {
      display: none;
    }
  }
}

.search-block {
  &__title {
    display: block;
    margin-bottom: 12px;
    color: white;
    font-size: 18px;

    @media @mobile {
      display: none;
    }
  }
}

.o-search.o-search--home {
  .search-block__title {
    color: white;
  }

  form {
    .flex-display();

    @media @mobile {
      .flex-direction(@direction: column);
    }
  }

  fieldset {
    width: auto;
    border: none;
    padding: 0;
    margin: 0;
  }

  .fieldset {
    .flex-grow(@grow: 1);
    .flex-shrink(@shrink: 1);
    .flex-basis(@width: auto);
    margin-right: 20px;

    @media @mobile {
      margin-right: 0;
    }
  }

  .fieldset__wrapper {
    .flex-display();
    padding: 0;
    margin-right: -20px;
    margin-bottom: -10px;
    border: none;
  }

  .form-group {
    .flex-grow(@grow: 0);
    .flex-shrink(@shrink: 0);
    .flex-basis(@width: calc(~"100% - 20px"));
    width: auto;
    margin-right: 20px;
    margin-bottom: 10px;
  }

  .button-group {
    width: 100%;

    @media @mobile {
      margin-right: 20px;
      margin-bottom: 10px;
    }

    a,
    button,
    input[type="submit"] {
      width: 100%;

      &:hover {
        background: white;
        color: @primary-colour !important;
      }
    }
  }

  // search fieldset

  .fieldset--search {
    .flex-basis(@width: 480px);

    @media @mobile {
      .flex-basis(@width: auto);
    }

    .fieldset__wrapper {
      @media @mobile {
        .flex-direction(@direction: column);
      }
    }

    .form-group {
      .flex-basis(@width: calc(~"100% / 2 - 20px"));
      @media @mobile {
        .flex-basis(@width: calc(~"100% - 20px"));
      }
    }
  }

  // price fieldset

  .fieldset--price {
    .flex-basis(@width: 190px);
    position: relative;

    @media @mobile {
      .flex-basis(@width: auto);
    }

    .fieldset__wrapper {
      @media @mobile {
        .flex-direction(@direction: column);
        margin-top: 15px;
      }
    }

    .form-group {
      &--budgetmin {
        display: none;
      }
    }
  }

  // button fieldset

  .fieldset--button {
    .flex-basis(@width: 120px);

    @media @mobile {
      .flex-basis(@width: auto);
    }

    .fieldset__wrapper {
      @media @mobile {
        margin-top: 10px;
      }
    }
  }

  .budget-toggle {
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-bottom: 10px;
    transform: translateX(-50%);

    @media @mobile {
      position: relative;
    }

    .finance,
    .price {
      color: white;
    }
  }

  .a-toggle + label {
    background: @accent-colour;

    &:before {
      background-color: @primary-colour;
    }
  }
}
</style>
