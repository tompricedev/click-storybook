<template>
  <!-- Homepage Slider -->
  <div class="row-block hero-unit lazy-background">
    <div class="hero-unit-block">
      <div class="hero-unit-block__title">Welcome to {v2_NAME}</div>
      <div class="hero-unit-block__text">
        Family-run business established in 2007
      </div>

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
                    ><option value="">Any make (24)</option
                    ><option value="6">Audi (3)</option
                    ><option value="8">BMW (3)</option
                    ><option value="13">Chevrolet (1)</option
                    ><option value="25">Ford (1)</option
                    ><option value="31">Honda (1)</option
                    ><option value="32">Hyundai (1)</option
                    ><option value="34">Jaguar (1)</option
                    ><option value="37">Kia (1)</option
                    ><option value="49">Mazda (1)</option
                    ><option value="224">Mercedes-Benz (2)</option
                    ><option value="51">MINI (1)</option
                    ><option value="55">Nissan (1)</option
                    ><option value="76">Suzuki (1)</option
                    ><option value="79">Toyota (2)</option
                    ><option value="84">Volkswagen (3)</option
                    ><option value="85">Volvo (1)</option></select
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
                    ><option value="1000">From £1,000</option
                    ><option value="2000">From £2,000</option
                    ><option value="3000">From £3,000</option
                    ><option value="4000">From £4,000</option
                    ><option value="5000">From £5,000</option
                    ><option value="6000">From £6,000</option
                    ><option value="7000">From £7,000</option
                    ><option value="8000">From £8,000</option
                    ><option value="9000">From £9,000</option
                    ><option value="10000">From £10,000</option
                    ><option value="11000">From £11,000</option></select
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
                    ><option value="2000">To £2,000</option
                    ><option value="3000">To £3,000</option
                    ><option value="4000">To £4,000</option
                    ><option value="5000">To £5,000</option
                    ><option value="6000">To £6,000</option
                    ><option value="7000">To £7,000</option
                    ><option value="8000">To £8,000</option
                    ><option value="9000">To £9,000</option
                    ><option value="10000">To £10,000</option
                    ><option value="11000">To £11,000</option
                    ><option value="12000">To £12,000</option></select
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
  <!-- // Homepage Slider -->
</template>

<script>
export default {
  name: "mod-search-block",
};
</script>

<style lang="less" scoped>
@import "../assets/less/global.less";

.row-block.hero-unit {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: url("https://source.unsplash.com/random") center center no-repeat;
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

fieldset {
  padding: 0;
  border: none;
}

select {
  // appearance: caret;
  // -webkit-appearance: none;
  width: 100%;
  height: 36px;
  float: none;
  padding: 0 20px 0 5px;
  margin: 0;
  color: @text-colour;
  background: white;
  // background-size: 12px 12px;
  // background-position: right 5px center;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
  transition: 0.2s all ease-in-out;

  &:focus,
  &:hover {
    // background: white url("@{dealer-img}/theme/select-icon-hover.svg") no-repeat;
    background-size: 12px 12px;
    background-position: right 5px center;
    outline: none;
  }
}

// select::-ms-expand {
//   display: none;
// }

input,
input[type="text"],
input[type="number"],
input[type="email"],
input[type="tel"] {
  width: 100%;
  max-width: 100%;
  height: 36px;
  float: none;
  padding: 0 5px;
  margin: 0;
  color: @text-colour;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;

  // override structure
  .sidebar & {
    width: 100%;
    max-width: 100%;
  }
}

textarea {
  width: 100%;
  max-width: 100%;
  margin: 0;
  border-radius: 5px;
  border: 1px solid #ddd;

  // override structure
  .sidebar & {
    width: 100%;
    max-width: 100%;
  }
}

// Buttons

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

.btn--engage {
  .btn;
  background: @reserve-bg-colour !important;
  color: white !important;

  &:hover {
    background: @primary-colour !important;
    color: white !important;
  }
}

#slider-search-panel input.button,
#search-advanced button.button,
form#webzationForm input#webzationButton,
#fin-table-apply a.button,
#fin-table-apply-mob a.button,
#fin-calc-adjust a.button,
a#finance_apply.button,
.sidebar-widget input.button,
#partex-apply input.button,
#sellcar-submit .button,
#car-locator-apply .button,
#booking-form-submit .button,
#repair-enquiry-submit .button,
.favourites-button button.button,
.favourites-button a.button,
a.button.bespoke,
.button.full,
.button,
a.button,
.button.silver,
input[type="submit"],
input[type="submit"].button,
.widget-search-full input.button,
.widget-search-full button.button,
#search-advanced button.button {
  .btn;
}

#recaptcha_widget,
#new_captcha {
  margin-bottom: 20px;
  overflow: hidden;
  clear: left;
}

#sellcar-submit input[type="submit"] {
  float: right;
}

.o-search.o-search--home {
  .search-block__title {
    color: white;
  }

  form {
    display: flex;

    @media @mobile {
      flex-direction: column;
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

//  Search overrides
.o-search {
  .search-block__title {
    display: block;
    margin-bottom: 10px;
    color: @heading-colour;
    font-family: @heading-font;
    font-weight: 700;
  }

  .fieldset {
    position: relative;
    padding: 0;
    border: 0;

    select {
      float: none;
    }
  }

  .button-group {
    a,
    button,
    input[type="submit"] {
      .btn;
      display: block;
      width: 100%;
    }
  }

  // price and finance toggle

  .budget-toggle {
    &__wrapper {
      display: flex;
      align-items: center;
      margin-right: -10px;
      margin-bottom: -10px;
    }

    .price {
      .flex-grow(@grow: 1);
      .flex-shrink(@shrink: 1);
      .flex-basis(@width: auto);
      margin-right: 10px;
      margin-bottom: 10px;
      line-height: 28px;
      text-align: right;
    }

    .budgetswitch {
      height: 22px;
      margin: 0 10px 10px;
    }

    .finance {
      .flex-grow(@grow: 1);
      .flex-shrink(@shrink: 1);
      .flex-basis(@width: auto);
      margin-right: 10px;
      margin-bottom: 10px;
      line-height: 28px;
      text-align: left;
    }

    .form-group--budgetswitch {
      flex: 0 0 auto;
      width: auto;
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
      padding: 0;
      cursor: pointer;
      background: @primary-colour;
      border-radius: 99px;
      margin: 0 !important;

      &:before {
        content: " ";
        position: absolute;
        top: 1px;
        left: 1px;
        height: 20px;
        width: 20px;
        border-radius: 99px;
        background-color: white !important;
        transition: all 0.3s ease-in-out;
        z-index: 1;
      }
    }

    &:not(:checked) + label {
    }

    &:checked + label {
      &:before {
        left: 50px - 20px - 1px;
      }
    }
  } //end
}
</style>
