<template>
  <div class="row-block row-block--promos">
    <div class="promo-items">
      <!-- Promo -->
      <a
        href="/servicing.php"
        title="Servicing and MOT"
        class="promo-item promo-item--1"
      >
        <div class="promo-item__image">
          <img
            src="https://source.unsplash.com/random"
            alt="{v2_NAME}"
            class="responsive-img lazy"            
          />
        </div>
        <h2 class="promo-item__heading">Service &amp; MOT</h2>
        <div class="promo-item__content">We have an on-site service centre</div>
        <div class="promo-item__cta">
          <span class="btn">Book In</span>
        </div>
      </a>
      <!-- // Promo -->
      <!-- Promo -->
      <a
        href="/partex.php"
        title="Part Exchange"
        class="promo-item promo-item--2"
      >
        <div class="promo-item__image">
          <img
            src="https://source.unsplash.com/random"
            alt="{v2_NAME}"
            class="responsive-img lazy"          
          />
        </div>
        <h2 class="promo-item__heading">Part Exchange</h2>
        <div class="promo-item__content">
          Get a great valuation when you trade in today
        </div>
        <div class="promo-item__cta">
          <span class="btn">Part Exchange</span>
        </div>
      </a>
      <!-- // Promo -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/less/global.less";

.row-block--promos {
  padding: 0 !important;
}

.promo-items {
  display: flex;
  flex-wrap: wrap;
  margin: -1px;

  .promo-item {
    flex: 1 1 calc(~"100% / 2 - 2px");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    overflow: hidden;
    height: 400px;
    background: @primary-colour;
    position: relative;
    cursor: pointer;
    margin: 1px;

    @media @tablet {
      height: 300px;
      flex: 1 1 calc(~"100% / 2 - 2px");
    }
    @media @mobile {
      flex: 0 0 calc(~"100% / 1 - 2px");
      height: 240px;
    }

    &__image {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;

      img {
        filter: grayscale(100%);
        opacity: 0.2;
        transform: scale(1);
        transition: all 0.3s linear;
        width: 100%;
        height: 100%;
        object-fit: cover;

        &:hover {
          transform: scale(1.2);
          filter: unset;
          opacity: 0.5;
          transition: all 0.3s linear;
        }
      }
    }

    &__heading,
    &__content,
    &__cta {
      text-align: center;
      z-index: 2;
      pointer-events: none;
      padding: 0 20px;

      @media @tablet {
        padding: 0 15px;
      }
    }

    &__heading {
      color: white;
      font-size: 36px;
      margin: 0;
      position: relative;

      @media @tablet {
        font-size: 32px;
      }
      @media @mobile {
        font-size: 28px;
      }

      &:after {
        top: -10px;
        left: calc(~"50% - 35px");
        margin-left: 0px;
        content: " ";
        height: 4px;
        width: 70px;
        background: @accent-colour;
        position: absolute;
        pointer-events: none;
        transform: skew(-15deg, 0deg);
        border-radius: 5px 0 5px 0;
      }
    }

    &__content {
      color: fade(white, 90%);
      font-size: 20px;
      margin: 0 0 20px 0;

      @media @tablet {
        font-size: 18px;
      }
      @media @mobile {
        font-size: 16px;
      }
    }

    &__cta {
      .btn {
        background: white;
        color: @primary-colour!important;
      }
    }
  }
}
</style>
