<template>
  <div class="row-block brands">
    <ul class="brand-search--list">
      <li>
				<a href="/">
					<img src="../assets/brands/audi.png" alt="Brand" />
				</a>
			</li>
      <li>
				<a href="/">
					<img src="../assets/brands/bmw.png" alt="Brand" />
				</a>
			</li>
      <li>
				<a href="/">
					<img src="../assets/brands/fiat.png" alt="Brand" />
				</a>
			</li>
      <li>
				<a href="/">
					<img src="../assets/brands/ford.png" alt="Brand" />
				</a>
			</li>
      <li>
				<a href="/">
					<img src="../assets/brands/mercedes-benz.png" alt="Brand" />
				</a>
			</li>
      <li>
				<a href="/">
					<img src="../assets/brands/peugeot.png" alt="Brand" />
				</a>
			</li>
      <li>
				<a href="/">
					<img src="../assets/brands/volkswagen.png" alt="Brand" />
				</a>
			</li>
      <li>
				<a href="/">
					<img src="../assets/brands/volvo.png" alt="Brand" />
				</a>
			</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
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

.row-block.brand-search {
  padding: -10px 0 30px 0;
  background: white;

  h2 {
    font-weight: 300;
    font-size: 26px;
    @media screen and (max-width: 740px) {
      text-align: center;
      font-size: 22px;
    }
  }
}

.brand-search--list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  width: 100%;
  // border: 0.5px solid fade(white,15%);
  li {
    flex: 1 1 150px;
    height: 150px;
    // border: 0.5px solid fade(white,15%);
    @media screen and (max-width: 1000px) {
      flex: 1 1 80px;
      height: 80px;
    }
    @media screen and (max-width: 740px) {
      flex: 1 1 80px;
			height: 80px;
    }

    figure {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease;
      border-radius: 5px;
      img {
        height: 90px;
        width: 90px;
        transition: all 0.5s ease;
        @media screen and (max-width: 1000px) {
          height: 80px;
          width: 80px;
        }
        @media screen and (max-width: 740px) {
          width: 70px;
          height: 70px;
				}
      }
      figcaption {
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        z-index: -1;
        opacity: 0;
        color: white;
        transition: all 0.5s ease;
        font-size: 10px;
      }

			a {
				&:hover {
					background: @primary-colour;
					img {
						opacity: 0;
					}
					figcaption {
						z-index: 1;
						opacity: 1;
					}
				}
			}
    }
  }
}
</style>
