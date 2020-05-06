<template>
  <!-- Homepage HTML Panel 1 -->
  <div class="row-block row-block--home-search">
    <div class="wrapper">
      <div class="container">
        <div class="search-block">
          <div data-advanced-search="main" class="o-search o-search--home">
            <em class="search-block__title">Quick Search:</em>

            <form method="get" action="/search_page.php">
              <input type="hidden" id="search-instance" value="home" />
              <input type="hidden" value="0" name="budgetswitch" />

              <fieldset class="fieldset fieldset--search">
                <div class="fieldset__wrapper">
                  <div class="form-group form-group--make">
                    <select
                      name="make"
                      id="make"
                      data-search-field="main"
                      data-search-filters="type,injectedLocation,location,budgetmin,budgetmax,yearmin,yearmax"
                      class="default"
                      ><option value="">Any make (25)</option
                      ><option value="15">Citroen (11)</option
                      ><option value="25">Ford (1)</option
                      ><option value="60">Peugeot (11)</option
                      ><option value="65">Renault (2)</option></select
                    >
                  </div>
                  <div class="form-group form-group--model">
                    <select
                      name="model"
                      id="model"
                      data-search-field="main"
                      data-search-filters="type,injectedLocation,location,make,trim,body,gearbox,doors,body_colour,fuel_type,budgetmin,budgetmax,seats,yearmin,yearmax"
                      class="default"
                      disabled=""
                      ><option value="">Any model</option></select
                    >
                  </div>
                </div>
              </fieldset>

              <fieldset class="fieldset fieldset--price">
                <div class="fieldset__wrapper">
                  <div class="budget-toggle">
                    <div class="budget-toggle__wrapper">
                      <div class="price">Price</div>
                      <div class="budgetswitch">
                        <input
                          type="checkbox"
                          class="a-toggle"
                          name="budgetswitch"
                          id="budgetswitch"
                          data-search-field=""
                          value="1"
                        />
                        <label
                          for="budgetswitch"
                          data-checked="Monthly Price"
                          data-unchecked="Total Price"
                        ></label>
                      </div>
                      <div class="finance">Finance</div>
                    </div>
                  </div>

                  <div class="form-group form-group--budgetmin">
                    <select
                      name="budgetmin"
                      id="budgetmin"
                      data-search-field="aside"
                      data-search-filters="type,injectedLocation,location,make,model,variant,trim,body,gearbox,doors,body_colour,fuel_type,seats,yearmin,yearmax"
                      class="default"
                      ><option value="">Price (Min)</option
                      ><option value="4000">From £4,000</option
                      ><option value="5000">From £5,000</option
                      ><option value="6000">From £6,000</option
                      ><option value="7000">From £7,000</option
                      ><option value="8000">From £8,000</option
                      ><option value="9000">From £9,000</option
                      ><option value="10000">From £10,000</option
                      ><option value="11000">From £11,000</option
                      ><option value="12000">From £12,000</option
                      ><option value="13000">From £13,000</option
                      ><option value="14000">From £14,000</option></select
                    >
                  </div>
                  <div class="form-group form-group--budgetmax">
                    <select
                      name="budgetmax"
                      id="budgetmax"
                      data-search-field="aside"
                      data-search-filters="type,injectedLocation,location,make,model,variant,trim,body,gearbox,doors,body_colour,fuel_type,seats,yearmin,yearmax"
                      class="default"
                      ><option value="">Price (Max)</option
                      ><option value="5000">To £5,000</option
                      ><option value="6000">To £6,000</option
                      ><option value="7000">To £7,000</option
                      ><option value="8000">To £8,000</option
                      ><option value="9000">To £9,000</option
                      ><option value="10000">To £10,000</option
                      ><option value="11000">To £11,000</option
                      ><option value="12000">To £12,000</option
                      ><option value="13000">To £13,000</option
                      ><option value="14000">To £14,000</option
                      ><option value="15000">To £15,000</option></select
                    >
                  </div>
                </div>
              </fieldset>

              <fieldset class="fieldset fieldset--button">
                <div class="fieldset__wrapper">
                  <!-- Button Group -->
                  <div class="button-group button-group--search">
                    <button
                      type="submit"
                      class="a-btn search-button"
                      onclick="ga('send', 'event', 'Submit', 'Click', 'HP_Quick_Search_Menu_Search');"
                    >
                      Search
                    </button>
                  </div>
                  <!-- // Button Group -->
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- // END -->
</template>

<script>
export default {
  name: "mod-make-and-model",
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


.search-block {
  margin: 0 auto;
  padding: 40px 0;

  @media @tablet {
    padding: 20px 0;
  }

  @media @mobile {
    padding: 10px 0;
  }

  &__title {
    display: block;
    margin-bottom: 12px;
    color: @heading-colour;
    font-size: 22px;
    font-family: @heading-font;
    font-weight: 700;

    @media @tablet {
      font-size: 20px;
    }
    @media @mobile {
      text-align: center;
    }
  }
}

.o-search--home {
  form {
    .flex-display();
    margin: -7.5px;

    @media @mobile {
      .flex-direction(@direction: column);
      margin: 0px;
    }
  }

  fieldset {
    width: auto;
    border: none;
    padding: 0;
    margin: 0;
  }

  .fieldset {
    padding: 0;
    margin: 0 7.5px;
    .flex-grow(@grow: 1);
    .flex-shrink(@shrink: 1);
    .flex-basis(@width: auto);
  }

  .fieldset__wrapper {
    padding: 0;
    border: none;
    margin: -7.5px;
    .flex-display();
  }

  .form-group {
    margin: 7.5px;
    width: auto;
    .flex-grow(@grow: 0);
    .flex-shrink(@shrink: 0);
    .flex-basis(@width: calc(~"100% - 15px"));

    select {
      height: 36px !important;
			line-height: 36px !important;
			outline: 1px solid grey;
			padding: 0 15px;
			width: 100%;

      @media @mobile {
        height: 36px !important;
        line-height: 36px !important;
      }

      &:disabled {
        cursor: pointer;
        background-color: white;
      }
    }
  }

  .button-group {
    margin: 7.5px;
    width: 100%;

    button {
      .btn;
      width: 100%;
      // line-height: 17px !important;

      &:hover {
        background: @primary-colour !important;
        color: white !important;
      }

      @media @mobile {
        line-height: 17px !important;
      }
    }
  }

  // price and finance toggle

  .budget-toggle {
    position: absolute;
    top: -32px;
    width: 100%;
    color: white;
    box-sizing: border-box;

    @media @mobile {
      position: static;
      padding-right: 0;
      margin-bottom: 10px;
    }

    &__wrapper {
      display: flex;
      align-items: center;
      margin-right: -10px;
      margin-bottom: -10px;
    }

    .price,
    .finance {
      color: @text-colour;
    }

    .price {
      .flex-grow(@grow: 1);
      .flex-shrink(@shrink: 1);
      .flex-basis(@width: auto);
      text-align: right;
    }

    .budgetswitch {
      margin: 0 10px;
    }

    .finance {
      .flex-grow(@grow: 1);
      .flex-shrink(@shrink: 1);
      .flex-basis(@width: auto);
      text-align: left;
    }

    .form-group--budgetswitch {
      flex: 0 0 auto;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }

  .a-toggle {
    display: none;

    + label {
      height: 22px;
      width: 50px;
      position: relative;
      font-size: 14px;
      padding: 0 20px;
      cursor: pointer;
      background: @primary-colour;
      border: 1px solid @primary-colour;
      border-radius: 99px;
      margin: 0 !important;

      &:before {
        position: absolute;
        top: 0;
        left: 0;
        content: " ";
        z-index: 1;
        height: 18px;
        width: 18px;
        border-radius: 99px;
        background-color: @accent-colour !important;
        transition: all 0.3s ease-in-out;
      }
    }

    &:not(:checked) + label {
    }

    &:checked + label {
      &:before {
        left: 21px;
      }
    }
  } //end

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
      .flex-basis(@width: calc(~"100% / 2 - 15px"));
      @media @mobile {
        .flex-basis(@width: calc(~"100% - 15px"));
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
}

.search-type {
  padding: 40px 0;
  list-style: none;
  display: flex !important;
  flex-wrap: wrap;

  li {
    width: calc(~"100% / 7");
    flex: 1 1 calc(~"100% / 7");
    padding: 5px;
    box-sizing: border-box;

    @media @tablet {
      width: calc(~"100% / 3");
      flex: 0 0 calc(~"100% / 3");
    }
    @media @mobile {
      width: calc(~"100% / 2");
      flex: 0 0 calc(~"100% / 2");
    }

    a {
      display: block;
      text-align: center;
      color: @primary-colour;
      font-size: 14px;
      font-weight: 600;

      img {
        margin-bottom: 10px;
        transform: translateY(0px);
        transition: 0.2s linear;
      }

      &:hover {
        color: @accent-colour;

        img {
          transform: translateY(-5px);
        }
      }
    }
  }
}

.btn {
  display: inline-block;
  margin: 0;
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

.search-horizontal-double {
  background: white;
  padding: 50px 0;

  @media @tablet {
    padding: 25px 0;
  }
}

// // Blocks Modifiers

.search-type--horizontal-search {
  form {
    display: flex;
    flex-wrap: wrap;
    margin-right: -20px;
    margin-bottom: -20px;

    select,
    input[type="submit"] {
      flex: 1 1 195px;
			min-width: auto;			
      margin-right: 20px !important;
      margin-bottom: 20px !important;
      height: 38px;
      line-height: 38px;
    }

    input[type="submit"] {
      flex: 1 1 150px;
    }
  }
}

.search-type--brand-search {
  .brands {
    display: flex;
    flex-wrap: wrap;
    a {
      flex: 0 0 48px;
      height: 48px;
      display: flex;
      align-items: center;

      img {
        max-height: 32px;
        max-width: 32px;
        transform: translateY(0px);
        transition: 0.2s linear;
      }

      &:hover {
        img {
          transform: translateY(-5px);
        }
      }
    }
  }
}

.row-block--home-search {
  padding: 35px 0 30px 0;
  background: white;
  position: sticky;
  position: -webkit-sticky;
  top: 46px;
  z-index: 13;

  @media @mobile {
    position: initial;
    padding: 20px 0 30px 0;
  }
}

</style>
