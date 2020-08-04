<template>
  <div
    class="row-block row-block--promo-full lazy-background visible finance_promo"
  >
    <div class="wrapper">
      <div class="container">
        <div class="promo-item">
          <div class="promo-item__heading">
            <h2>Finance</h2>
            <div class="promo-item__cta">
              <p>We can help arrange finance for you.</p>
              <a
                href="/finance.php"
                title="Finance packages tailored to you"
                class="btn"
                >Apply Now</a
              >
            </div>
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

.row-block--promo-full {
  background: url("https://source.unsplash.com/random") center center
    no-repeat !important;
  background-size: cover !important;
  background-position: center center !important;
  padding: 100px 0;
  padding-bottom: 140px!important;
  @media @mobile {
    background: @secondary-colour
      url("https://source.unsplash.com/random") center center
      no-repeat !important;
    background-size: cover !important;
  }
  .wrapper {
    @media @mobile {
      overflow: visible;
    }
  }

  .container {
    overflow: visible;

    .promo-item {
      position: relative;
      z-index: 80;
      padding-left: 100px;
      @media @mobile {
        height: 260px;
        padding-left: 0 !important;
        z-index: 10;
      }

      .promo-item__heading {
        height: 200px;
        background: #2e2e36;
        width: 270px;
        position: relative;

        h2 {
          text-transform: uppercase;
          font-size: 38px;
          letter-spacing: 8px;
          position: absolute;
          right: -170px;
          width: 400px;
          top: 15px;
          color: #fff;
          line-height: 1.3;
          @media @mobile {
            right: -40px;
            width: 290px;
            font-size: 30px;
            top: 50px;
          }
        }

        .promo-item__cta {
          padding: 30px;
          background: #fff;
          position: absolute;
          bottom: -80px;
          width: 400px;
          right: -230px;
          @media @mobile {
            bottom: -140px !important;
            width: 250px;
            right: -30px !important;
          }

          p {
            letter-spacing: 2px;
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 35px;
          }
        }
      }
    }
  }
}
</style>
