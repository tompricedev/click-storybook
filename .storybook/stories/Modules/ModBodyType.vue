<template>
  <div class="row-block type">
    <div class="wrapper">
      <div class="container">
        <ul class="type-list">
          <li class="type-list--item">
            <a href="">
              <img src="../assets/cars/hatchback.png" alt="Body type" />							
							<span>Body type</span>
            </a>
          </li>
          <li class="type-list--item">
            <a href="">
              <img src="../assets/cars/saloons.png" alt="Body type" />
							<span>Body type</span>
            </a>
          </li>
          <li class="type-list--item">
            <a href="">
              <img src="../assets/cars/mpv.png" alt="Body type" />
							<span>Body type</span>
            </a>
          </li>
          <li class="type-list--item">
            <a href="">
              <img src="../assets/cars/sports+cabs.png" alt="Body type" />
							<span>Body type</span>
            </a>
          </li>
          <li class="type-list--item">
            <a href="">
              <img src="../assets/cars/diesels.png" alt="Body type" />
							<span>Body type</span>
            </a>
          </li>
          <li class="type-list--item">
            <a href="">
              <img src="../assets/cars/4x4.png" alt="Body type" />
							<span>Body type</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
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

.row-block.type {
  position: relative;
  display: block;
  width: 100%;
  margin: 0;
  padding: 50px 0;
  .type-list {
    display: flex;
    align-items: center;
		text-align: center;
		flex-wrap: wrap;
		list-style: none;
    &--item {
			flex: 1 1 calc(100% / 6 - 20px);
			width: 1 1 calc(100% / 6 - 20px);
			margin: 10px;
			@media @tablet {
				flex: 1 1 calc(100% / 3 - 20px);
				width: calc(100% / 3 - 20px);
			}
			a {
				display: inline-block;
				color: @accent-colour;
				text-decoration: none;
				transition: .2s linear;
				max-width: 100%;
				img {
					max-width: 100%;						
					height: auto;
				}
				&:hover,
				&:focus {
					color: @primary-colour;
					transform: translateY(-10px);				
				}
			}
			span {
				display: block;
			}
    }
  }
}
</style>
