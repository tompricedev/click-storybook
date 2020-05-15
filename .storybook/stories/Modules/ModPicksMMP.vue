<template>
  <!-- Homepage Car Carousel -->
  <div class="row-block car-carousel">
    <div class="wrapper">
      <div class="container">
				<h2>Latest offers</h2>
        <div class="row">
          <div class="pad-10 overflow-hidden">
            <div class="twelvecol">              
              <div id="hmpg-picks-carousel" class="touchcarousel  three-d">
                <ul class="touchcarousel-container">
                  <li class="touchcarousel-item" v-for="item in items">
                    <a
                      href="/"
                      title="Used car in somewhere or other"
                    >
                      <img
                        class="home-carousel-img"
                        alt="Used car in somewhere or other"                      
                        src="../assets/picks/carousel-car.jpg"                
                      />
                    </a>

                    <div class="carousel-text">
                      <a
                        href="used-nissan-qashqai+2-ferndown-dorset-2776174"
                        title="USed 2010 NISSAN QASHQAI+2 1.5 ACENTA PLUS 2 DCI 5d 105 BHP for sale in Bournemouth"
                      >
                        <em class="carousel-info"
                          >Make Model <span>£PRICE</span></em
                        >
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- // Homepage Search Finance -->
</template>

<script>
export default {
	data() {
		return {
			items: [
				1,2,3,4,5,6,7,8
			]
		}
	}
};
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

.sixcol {
  width: 50%;
}

.twelvecol {
  width: 100%;
}

#gallery-2 { width: 100%;}

/* Background */
.rsDefault .rsOverflow,
.rsDefault .rsSlide,
.rsDefault .rsVideoFrameHolder,
.rsDefault .rsThumbs {
  background: none;}

/***************
*
*  1. Arrows
*
****************/

.rsDefault .rsArrow {
  height: 100%;
  width: 44px;
  position: absolute;
  display: block;
  cursor: pointer;
  z-index: 21;}

.rsDefault.rsVer .rsArrow {
  width: 100%;
  height: 44px;}

.rsDefault.rsVer .rsArrowLeft { top: 0; left: 0; }
.rsDefault.rsVer .rsArrowRight { bottom: 0;  left: 0; }

.rsDefault.rsHor .rsArrowLeft { left: 0; top: 0; }
.rsDefault.rsHor .rsArrowRight { right: 0; top:0; }

.rsDefault .rsArrowIcn {
  width: 32px;
  height: 32px;
  top: 50%;
  left: 50%;
  margin-top:-16px;
  margin-left: -16px;

  position: absolute;
  cursor: pointer;
  // background: url('@{global-img}/rs-default.png');
  background-color: rgba(0,0,0,0.75);
  *background-color: #111;

  border-radius: 2px;}

.rsDefault .rsArrowIcn:hover { background-color: rgba(0,0,0,0.9);}

.rsDefault.rsHor .rsArrowLeft .rsArrowIcn { background-position: -64px -32px; }
.rsDefault.rsHor .rsArrowRight .rsArrowIcn { background-position: -64px -64px; }

.rsDefault.rsVer .rsArrowLeft .rsArrowIcn { background-position: -96px -32px; }
.rsDefault.rsVer .rsArrowRight .rsArrowIcn { background-position: -96px -64px; }

.rsDefault .rsArrowDisabled .rsArrowIcn { background-color: rgba(0,0,0,0.4); opacity: .4; *display: none; }

/***************
*
*  2. Bullets
*
****************/

.rsDefault .rsBullets {
  position: absolute;
  z-index: 35;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  margin: 0 auto;
  background: #000;
  background: rgba(0,0,0,0.75);
  text-align: center;
  line-height: 18px;
  overflow: hidden;}

.rsDefault .rsBullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  *display:inline;
  *zoom:1;
  margin: 0 5px 1px;
  border-radius: 50%;
  background: #777;
  background: rgba(255,255,255,0.5);}

.rsDefault .rsBullet.rsNavSelected  { background-color: #ffffff;}

/***************
*
*  3. Thumbnails
*
****************/

.rsDefault .rsThumbsHor {
  width: 100%;
  height: 72px;}

.rsDefault .rsThumbsVer {
  padding-right: 0px;
  width: 96px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;}

.rsDefault.rsWithThumbsHor .rsThumbsContainer { position: relative; height: 100%;}
.rsDefault.rsWithThumbsVer .rsThumbsContainer { position: relative; width: 100%;}

.rsDefault .rsThumb {
  float: left;
  overflow: hidden;
  width: 96px;
  height: 72px;}

.rsDefault .rsThumb img { width: 100%; height: 100%;}

.rsDefault .rsThumb.rsNavSelected { background: #2087e3;}
.rsDefault .rsThumb.rsNavSelected img { opacity: 0.3; filter: alpha(opacity=30);}

.rsDefault .rsTmb { display: block;}

/* Thumbnails arrow icons */
.rsDefault .rsThumbsArrow {
  height: 100%;
  width: 20px;
  position: absolute;
  display: block;
  cursor: pointer;
  z-index: 21;
  background: #000;
  background: rgba(0,0,0,0.75);}

.rsDefault .rsThumbsArrow:hover { background: rgba(0,0,0,0.9);}
.rsDefault.rsWithThumbsVer .rsThumbsArrow { width: 100%; height: 20px;}
.rsDefault.rsWithThumbsVer .rsThumbsArrowLeft { top: 0; left: 0; }
.rsDefault.rsWithThumbsVer .rsThumbsArrowRight { bottom: 0;  left: 0; }

.rsDefault.rsWithThumbsHor .rsThumbsArrowLeft { left: 0; top: 0; }
.rsDefault.rsWithThumbsHor .rsThumbsArrowRight { right: 0; top:0; }

.rsDefault .rsThumbsArrowIcn {
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin-top:-8px;
  margin-left: -8px;
  position: absolute;
  cursor: pointer;
	// background: url('@{global-img}/rs-default.png');}
}

.rsDefault.rsWithThumbsHor .rsThumbsArrowLeft .rsThumbsArrowIcn { background-position: -128px -32px; }
.rsDefault.rsWithThumbsHor .rsThumbsArrowRight .rsThumbsArrowIcn { background-position: -128px -48px; }

.rsDefault.rsWithThumbsVer .rsThumbsArrowLeft .rsThumbsArrowIcn { background-position: -144px -32px; }
.rsDefault.rsWithThumbsVer .rsThumbsArrowRight .rsThumbsArrowIcn { background-position: -144px -48px; }

.rsDefault .rsThumbsArrowDisabled { display: none !important; }

/* Thumbnails resizing on smaller screens */
@media screen and (min-width: 0px) and (max-width: 800px) {
  .rsDefault .rsThumb {
    width: 59px;
    height: 44px;}
  .rsDefault .rsThumbsHor {
    height: 44px;}
  .rsDefault .rsThumbsVer {
    width: 59px;}
}

/***************
*
*  4. Tabs
*
****************/

.rsDefault .rsTabs {
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align:center;
  overflow: hidden; padding-top: 12px; position: relative;}

.rsDefault .rsTab {
  display: inline-block;
  cursor: pointer;
  text-align: center;
  height: auto;
  width: auto;
  color: #333;
  padding: 5px 13px 6px;
  min-width: 72px;
  border: 1px solid #D9D9DD;
  border-right: 1px solid #f5f5f5;
  text-decoration: none;

  background-color: #ffffff;
  background-image: -webkit-linear-gradient(top, #fefefe, #f4f4f4);
  background-image:    -moz-linear-gradient(top, #fefefe, #f4f4f4);
  background-image:         linear-gradient(to bottom, #fefefe, #f4f4f4);

  -webkit-box-shadow: inset 1px 0 0 #ffffff;
  box-shadow: inset 1px 0 0 #ffffff;

  *display:inline;
  *zoom:1;}

.rsDefault .rsTab:first-child {
  -webkit-border-top-left-radius: 4px;
  border-top-left-radius: 4px;
  -webkit-border-bottom-left-radius: 4px;
  border-bottom-left-radius: 4px;}

.rsDefault .rsTab:last-child {
  -webkit-border-top-right-radius: 4px;
  border-top-right-radius: 4px;
  -webkit-border-bottom-right-radius: 4px;
  border-bottom-right-radius: 4px;

  border-right:  1px solid #cfcfcf;}

.rsDefault .rsTab:active {
  border: 1px solid #D9D9DD;
  background-color: #f4f4f4;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2) inset;
  box-shadow:  0 1px 4px rgba(0, 0, 0, 0.2) inset;}

.rsDefault .rsTab.rsNavSelected {
  color: white;
  border: 1px solid #999;
  text-shadow: 1px 1px #838383;
  -webkit-box-shadow: 0 1px 9px rgba(102, 102, 102, 0.65) inset;
  box-shadow: 0 1px 9px rgba(102, 102, 102, 0.65) inset;
  background: #ACACAC;
  background-image: -webkit-linear-gradient(top, #ACACAC, #BBB);
  background-image: -moz-llinear-gradient(top, #ACACAC, #BBB);
  background-image: linear-gradient(to bottom, #ACACAC, #BBB);}

/***************
*
*  5. Fullscreen button
*
****************/

.rsDefault .rsFullscreenBtn {
  right: 0;
  top: 0;
  width: 44px;
  height: 44px;
  z-index: 22;
  display: block;
  position: absolute;
  cursor: pointer;}

.rsDefault .rsFullscreenIcn {
  display: block;
  margin: 6px;
  width: 32px;
  height: 32px;

  // background: url('@{global-img}/rs-default.png') 0 0;
  background-color: rgba(0,0,0,0.75);
  *background-color: #000;
  border-radius: 2px;}

.rsDefault .rsFullscreenIcn:hover { background-color: rgba(0,0,0,0.9);}

.rsDefault.rsFullscreen .rsFullscreenIcn { background-position: -32px 0;}

/***************
*
*  6. Play/close video button
*
****************/

.rsDefault .rsPlayBtn {
  -webkit-tap-highlight-color:rgba(0,0,0,0.3);
  width:64px;
  height:64px;
  margin-left:-82px;
  margin-top:-82px;
  cursor: pointer;}

.rsDefault .rsPlayBtnIcon {
  width:164px;
  display:block;
  height:164px;
  -webkit-border-radius: 14px;
  border-radius: 14px;

  text-align: center;
  text-indent: 0px;
  line-height: 164px;
  font-family: 'icomoon';
  font-size: 100px;
  color: #ffffff;

  background-color: rgba(0,0,0,0.75);
  -webkit-transition: .3s;
  -moz-transition: .3s;
  transition: .3s;
  *background-color: #000;}

  .rsDefault .rsPlayBtnIcon:before { content: "\0064";}

.rsDefault .rsPlayBtn:hover .rsPlayBtnIcon { background-color: rgba(0,0,0,0.9);}

.rsDefault .rsBtnCenterer {
  position:absolute;
  left:50%;
  top:50%;
  width: 20px;
  height: 20px;}

.rsDefault .rsCloseVideoBtn {
  right: 0;
  top: 0;
  width: 44px;
  height: 44px;
  z-index: 500;
  position: absolute;
  cursor: pointer;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0);}

.rsDefault .rsCloseVideoBtn.rsiOSBtn {
  top: -38px;
  right: -6px;}

.rsDefault .rsCloseVideoIcn {
  margin: 6px;
  width: 32px;
  height: 32px;
  // background: url('@{global-img}/rs-default.png') -64px 0;
  background-color: #000;
  background-color: rgba(0,0,0,0.75);}

.rsDefault .rsCloseVideoIcn:hover { background-color: rgba(0,0,0,0.9);}

/***************
*
*  7. Preloader
*
****************/

.rsDefault .rsPreloader {
  width:20px;
  height:20px;
  // background-image:url('@{global-img}/preloaders/preloader-white.gif');
  left:50%;
  top:50%;
  margin-left:-10px;
  margin-top:-10px;}


//////////////////////////////////////////
/* ---------- Picks Carousel ---------- */
//////////////////////////////////////////

.car-carousel {
  background: white;
  padding: 30px 0 60px 0;

  .container,
  .pad-10.overflow-hidden {
    overflow: visible !important;
		padding: 0px;
		
		.row {
			overflow: hidden;
		}
  }

  h2 {
    // .main-header;
    // .main-header.center;
    color: @primary-colour;
		text-align: center;
		margin-bottom: 20px;
  }
}

#hmpg-picks-carousel {
  height: 263px;
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  .touchcarousel-wrapper {
    float: left;
    padding: 20px 0 0 0;
	}
	
	.touchcarousel-container {
		list-style: none;
	}

  .touchcarousel-item {
    width: 212px;
    margin-left: 10px;
    position: relative;
    text-align: center;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    border: 1px solid #ddd;
    background: white;

    .carousel-text {
      font-family: @alpha-font;
      font-weight: 400;
      height: auto;
      background: ;
      display: block;
      overflow: hidden;
      padding: 10px;
      box-sizing: border-box;

      .carousel-info {
        font-family: @alpha-font;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        color: @text-colour;
        position: relative;
        float: left;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: left;

        span {
          display: block;
          font-weight: 400;
        }

        span.price {
          font-size: 22px;
          padding: 10px 0 0 0;
          display: block;
          position: relative;

          &:before {
            top: 3px;
            left: 0;
            content: "";
            height: 0;
            width: 20px;
            position: absolute;
            pointer-events: none;
            border-top: 1px solid @accent-colour;
          }
        }
      }
    }
  }
}

/* Arrow and Pagination Change */

.tc-paging-container {
  display: none;
}

.touchcarousel .arrow-holder {
  height: 26px;
  width: 26px;
  position: absolute;
  top: 48%;
  display: block;
  cursor: pointer;
  z-index: 25;
  text-decoration: none;
  outline: none;
  border: none;

  &.left {
    left: -34px;
  }

  &.right {
    right: -34px;
  }
}

/* arrow icons */
.touchcarousel .arrow-icon {
  width: auto;
  height: auto;
  background: none;
  color: @primary-colour;
  opacity: 1;
  border-radius: 0;
  cursor: pointer;
  display: block;
  font-family: "ClickIcons";
  font-style: normal;
  speak: none;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  text-transform: none !important;
  text-decoration: none;
  outline: none;
  border: none;
  font-size: 55px;
}

.touchcarousel .arrow-icon.left:before {
  display: block;
  text-align: center;
  height: 26px;
  width: 26px;
  line-height: 26px;
  font-family: "ClickIcons";
}

.touchcarousel .arrow-icon.right:before {
  display: block;
  text-align: center;
  height: 26px;
  width: 26px;
  line-height: 26px;
  font-family: "ClickIcons";
}

.touchcarousel .arrow-holder:hover .arrow-icon {
  color: @accent-colour;
}

.touchcarousel .arrow-holder.disabled {
  cursor: default;
  opacity: 0.1;
}

.touchcarousel .arrow-holder.disabled .arrow-icon {
  cursor: default;
}
</style>
