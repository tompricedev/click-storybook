<template>
  <div class="row-block row-block--car-carousel">
    <div class="wrapper">
      <div class="container">
        <div class="section-heading">
          <h2 class="main-header">Latest Arrivals</h2>
        </div>

        <div
          id="hmpg-picks-carousel"
          class="specials touchcarousel"
          style="overflow: visible;"
        >
          <div class="touchcarousel-wrapper grabbing-cursor">
            <ul class="specials__list touchcarousel-container">
              <li
                id="pick_2"
                class="specials__item touchcarousel-item"
                v-for="vehicle in vehicles"
              >
                <a
                  href="used-mercedes-benz-vito-cardiff-glamorgan-2812421"
                  title="View our MERCEDES-BENZ VITO"
                >
                  <!-- <div class="specials__ref">Ref: CK13RVX</div> -->
                  <div class="specials__image">
                    <img
                      class="home-carousel-img"
                      alt="2013 MERCEDES-BENZ VITO 3.0 122 CDI DUALINER 224 BHP"
                      src="https://source.unsplash.com/300x200"
                    />
                  </div>
                  <div class="specials__content">
                    <div class="specials__heading">MERCEDES-BENZ VITO</div>
                    <div class="specials__variant">
                      3.0 122 CDI DUALINER 224 BHP
                    </div>
                    <div class="specials__info">
                      Automatic, Diesel, Blue, 2013, 58,000 miles
                    </div>
                  </div>
                  <div class="specials__prices">
                    <div class="specials__cash">DEPOSIT TAKEN</div>
                    <div class="specials__divider"><span>or</span></div>
                    <div class="specials__finance">£351 <span>p/m</span></div>
                  </div>
                </a>
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
                ><a class="tc-paging-item" href="#">6</a
                ><a class="tc-paging-item" href="#">7</a
                ><a class="tc-paging-item" href="#">8</a
                ><a class="tc-paging-item current" href="#">9</a
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
              style="width: 297px; left: 635.997px;"
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

.row-block--car-carousel {
  padding: 30px 0 50px 0;
  background: @custom-colour1;

  .container,
  .pad-10.overflow-hidden {
    overflow: hidden !important;
    padding: 0px;
  }

  .tc-paging-container,
  .arrow-holder {
    display: none;
  }

  h2 {
    .center;
		color: @heading-colour;
		margin-bottom: 20px;
    @media @mobile {
    	.center;
    }
  }
}

.specials {
  width: 100%;
  height: auto;

  &__list {
    .flex-display;
  }

  &__item {
    .flex-grow(@grow: 0);
    .flex-shrink(@shrink: 0);
    .flex-basis(@width: 334px);
    margin-right: 20px !important;
    // border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;

    a {
      display: inline-block;
      background-color: white;
      transition: all 0.3s linear;
      height: 100%;
      .flex-display;
      .flex-direction(@direction: column);

      &:hover {
        background-color: @custom-colour1;
        color: @text-colour;
      }
    }
  }

  &__ref {
    padding: 7px 10px;
    background: @accent-colour;
    font-size: 13px;
    color: white;
    text-align: center;
    .flex-grow(@grow: 0);
    .flex-shrink(@shrink: 0);
    .flex-basis(@width: auto);
  }

  &__image {
    .flex-grow(@grow: 0);
    .flex-shrink(@shrink: 0);
    .flex-basis(@width: auto);

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }

  &__content {
    padding: 15px;
    .flex-grow(@grow: 1);
    .flex-shrink(@shrink: 1);
    .flex-basis(@width: auto);
  }

  &__heading {
    font-family: @heading-font;
    font-size: 18px;
    line-height: 1.2;
    color: darken(@text-colour, 5%);
    font-weight: 700;
    text-transform: capitalize;
  }

  &__variant {
    font-family: @alpha-font;
    font-size: 16px;
    line-height: 1.2;
    color: @heading-colour;
  }

  &__info {
    border-top: 1px solid #ddd;
    padding: 10px 0 0 0;
    margin: 10px 0 0 0;
    font-size: 12px;
    color: @text-colour;
  }

  &__prices {
    margin: 0 15px 15px 15px;
    .flex-display;
    position: relative;
    .flex-grow(@grow: 0);
    .flex-shrink(@shrink: 0);
    .flex-basis(@width: auto);
  }

  &__cash {
    .flex-grow(@grow: 1);
    .flex-shrink(@shrink: 1);
    .flex-basis(@width: 50%);
    .flex-display;
    .justify-content(@justify: center);
    .align-items(@align: center);
    background-color: @primary-colour;
    height: 45px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    font-family: @alpha-font;
    margin-right: 1px;
  }

  &__divider {
    .flex-grow(@grow: 0);
    .flex-shrink(@shrink: 0);
    .flex-basis(@width: auto);
    .flex-display;
    .justify-content(@justify: center);
    .align-items(@align: center);

    span {
      background: white;
      border-radius: 99px;
      width: 24px;
      height: 24px;
      .flex-display;
      .justify-content(@justify: center);
      .align-items(@align: center);
      color: #111;
      position: absolute;
      left: calc(~"50% - 12px");
      font-size: 13px;
      font-weight: 700;
    }
  }

  &__finance {
    .flex-grow(@grow: 1);
    .flex-shrink(@shrink: 1);
    .flex-basis(@width: 50%);
    .flex-display;
    .justify-content(@justify: center);
    .align-items(@align: center);
    background-color: @accent-colour;
    height: 45px;
    color: #111;
    font-size: 16px;
    font-weight: 700;
    font-family: @alpha-font;
    margin-left: 1px;

    span {
      font-size: 14px;
      margin: 0 0 0 5px;
    }
  }
}
</style>
