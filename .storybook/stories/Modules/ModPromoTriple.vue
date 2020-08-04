<template>
  <!-- Homepage HTML Panel 2 -->
  <div class="row-block promo-triple">
    <!-- Panel Left -->
    <div
      id="panel-1"
      class="check-panel flex alignvcenter aligncenter lazy-background"
    >
      <div>
        <a href="/car_locator.php" class="inner-padding">
          <h2 class="check-panel__title">Vehicle Sourcing</h2>
          <div class="check-panel__text">
            We can help you find your perfect van
          </div>
          <div class="check-panel__button">Learn More</div>
        </a>
      </div>
    </div>
    <!-- // Panel Left -->

    <!-- Panel Right -->
    <div
      id="panel-2"
      class="check-panel flex alignvcenter aligncenter lazy-background"
    >
      <div>
        <a href="/partex.php" class="inner-padding">
          <h2 class="check-panel__title">Part Exchange</h2>
          <div class="check-panel__text">
            Get the up-to-the-minute market value of your van
          </div>
          <div class="check-panel__button">Get Valuation</div>
        </a>
      </div>
    </div>
    <!-- Panel Right -->

    <!-- Panel Right -->
    <div
      id="panel-3"
      class="check-panel flex alignvcenter aligncenter lazy-background"
    >
      <div>
        <a href="/finance.php" class="inner-padding">
          <h2 class="check-panel__title">Finance</h2>
          <div class="check-panel__text">
            Need help financing your next van? We can help
          </div>
          <div class="check-panel__button">Apply Online</div>
        </a>
      </div>
    </div>
    <!-- Panel Right -->
  </div>
  <!-- // END Homepage HTML Panel 2 -->
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/less/global.less";
.promo-triple {
  display: flex;
  flex-wrap: wrap;
  background: @custom-colour1;
  .check-panel {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 320px;
    min-height: 400px;
    padding: 40px;
    text-align: center;
    @media @mobile {
      min-height: auto;
    }
    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background: fade(black, 65%);
      transition: all 0.2s;
    }

    &:hover:before {
      background: fade(black, 30%);
    }

    &__title {
      // .main-header;
      // .main-header.center;
      text-align: center;
      font-family: @heading-font;
      size: 36px;
      font-weight: 700;
      position: relative;
      display: block;
      font-size: 26px;
      color: white;

      @media @mobile {
        font-size: 22px;
      }
    }

    &__text {
      position: relative;
      display: block;
      font-size: 16px;
      color: white;

      @media @mobile {
        font-size: 15px;
      }
    }

    &__button {
      position: relative;
      display: inline-block;
      .btn;
      margin: 20px 0 0 0 !important;
    }
  }

  #panel-1 {
    background: url("https://source.unsplash.com/random/400x400") center center
      no-repeat;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
  }
  #panel-2 {
    background: url("https://source.unsplash.com/random/400x400") center center
      no-repeat;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
  }
  #panel-3 {
    background: url("https://source.unsplash.com/random/400x400") center center
      no-repeat;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
  }
}
</style>
