import React from "react";
import "./SliderDiv.css";
import "./Carousel.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpg";
import img5 from "./Images/img5.jpg";
import { Link } from "react-router-dom";

export default function SliderDiv() {
  const buttonStyle = {
    padding: "15px",
    opacity: 0.7,
    fontSize: "1%",
  };
  const contentStyle = {
    color: "black",
    fontSize: "20px",
  };
  const bgImg = {
    position: "absolute",
    zIndex: -1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  };
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div>
      <main class="main-content" role="main">
        <div className="totcss">
          <AutoplaySlider
            cssModule={AwesomeSliderStyles}
            className="mobilecss"
            animation="cubeAnimation"
            buttonContentRight={<p style={buttonStyle}>{">"}</p>}
            buttonContentLeft={<p style={buttonStyle}>{"<"}</p>}
            play
            // customContent={<p style={contentStyle}>{"I am the content/text"}</p>}
            interval={4000}
          >
            <div style={{ zIndex: 1 }}>
              <div>
                <img style={bgImg} alt="Wow" src={img5} />
                <h1>Microsoft</h1>
                <h2>Nice to see you</h2>
                <button> Click Me </button>
              </div>
            </div>
            <div style={{ zIndex: 1 }}>
              <div>
                <img style={bgImg} alt="Wow" src={img2} />
                <h1>Microsoft 2</h1>
                <h2>Nice to see you</h2>
              </div>
            </div>
            <div style={{ zIndex: 1 }}>
              <div>
                <img style={bgImg} alt="Wow" src={img3} />
                <h1>Microsoft 2</h1>
                <h2>Nice to see you</h2>
              </div>
            </div>
            <div style={{ zIndex: 1 }}>
              <div>
                <img style={bgImg} alt="Wow" src={img4} />
                <h1>Microsoft 2</h1>
                <h2>Nice to see you</h2>
              </div>
            </div>
          </AutoplaySlider>
        </div>

        {/* <div id="shopify-section-1576090947829" class="shopify-section">
          <div class="slider-section slider_half_half ">
            <div
              class="flexslider"
              id="flexslider--1576090947829"
              data-section-id="1576090947829"
              data-section-type="slideshow-section"
              data-transition="slide"
              data-autoplay="true"
              data-speed="5000"
              data-show-dots="true"
            >
              <div
                class="flex-viewport"
                style={{
                  overflow: "hidden",
                  position: "fixed",
                  height: "967px",
                }}
              >
                <ul
                  class="slides supports-js"
                  style={{
                    width: "1400%",
                    transform: "translate3d(-1468px, 0px, 0px)",
                  }}
                >
                  <li
                    id="slide--1576166213510_clone"
                    class="slider-item-1576166213510 clone slide-hide"
                    data-flexslider-index="9"
                    aria-hidden="true"
                    style={{
                      width: "734px",
                      marginRight: "0px",
                      float: "left",
                      display: "block",
                    }}
                  >
                    <div class="silder-item">
                      <div class="flex-caption-overlay-x">
                        <div class="overlay-content-wrapper">
                          <div class="wrapper">
                            <div class="grid">
                              <div class="grid__item">
                                <div class="page-width feature-row">
                                  <div class="feature-row">
                                    <div class="feature-row__item--text-1576166213510 feature-row__text feature-row__text--right">
                                      <div class="feature-row-text-inner">
                                        <h2
                                          class="header-title"
                                          style={{ color: "#ffffff" }}
                                        >
                                          <img
                                            src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/Express_Sliders-11_16522734-788c-48d8-a22f-aae8ec40c9c2.png"
                                            draggable="false"
                                            alt=""
                                          ></img>
                                        </h2>

                                        <div
                                          class="rte featured-row__subtext"
                                          style={{ color: "#ffffff" }}
                                        >
                                          <h3>
                                            Leave your employees &amp; <br></br>
                                            clients a lasting impression!
                                          </h3>
                                        </div>

                                        <a
                                          class="custom-btn"
                                          href="https://smartboxcompany.com/pages/smartbox-for-business"
                                          style={{ color: "#ffffff" }}
                                        >
                                          Corporate Gifts
                                        </a>
                                      </div>
                                    </div>

                                    <div class="feature-row__item-1576166213510">
                                      <div class="feature-row__image-wrapper">
                                        <img
                                          class="desktop-feature-row-image"
                                          src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/Express_Sliders-07_9c791050-bc52-4679-a26e-368bf13ac57a.png"
                                          alt=""
                                          draggable="false"
                                        ></img>
                                        <img
                                          class="mobile-feature-row-image"
                                          src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/Express_Sliders-11_0400345c-f343-4f6a-bfd0-5c8c4a475308.png"
                                          alt=""
                                          draggable="false"
                                        ></img>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    id="slide--1601391185848"
                    class="slider-item-1601391185848 slide-hide"
                    data-flexslider-index="1"
                    style={{
                      width: "734px",
                      marginRight: "0px",
                      float: "left",
                      display: "block",
                    }}
                    data-thumb-alt=""
                  >
                    <div class="silder-item">
                      <div class="flex-caption-overlay-x">
                        <div class="overlay-content-wrapper">
                          <div class="wrapper">
                            <div class="grid">
                              <div class="grid__item">
                                <div class="page-width feature-row">
                                  <div class="feature-row">
                                    <div class="feature-row__item--text-1601391185848 feature-row__text feature-row__text--right">
                                      <div class="feature-row-text-inner">
                                        <h2
                                          class="header-title"
                                          style={{ color: "#000000" }}
                                        >
                                          <img
                                            src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/Monthly_Campains-24_c88c351b-497b-4b4b-b6e3-64f37e321422.png"
                                            draggable="false"
                                            alt=""
                                          ></img>
                                        </h2>

                                        <div
                                          class="rte featured-row__subtext"
                                          style={{ color: "#ffffff" }}
                                        >
                                          <h3>
                                            Our vegan box gives 10%<br></br> to
                                            plant trees all April long!
                                          </h3>
                                        </div>

                                        <a
                                          class="custom-btn"
                                          href="https://smartboxcompany.com/collections/vegan"
                                          style={{ color: "#ffffff" }}
                                        >
                                          Shop Now!
                                        </a>
                                      </div>
                                    </div>

                                    <div class="feature-row__item-1601391185848">
                                      <div class="feature-row__image-wrapper">
                                        <img
                                          class="desktop-feature-row-image"
                                          src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/Monthly_Campains-88_7920bdc4-6edc-4139-aaca-afd0f9b3c74b.png"
                                          alt=""
                                          draggable="false"
                                        ></img>
                                        <img
                                          class="mobile-feature-row-image"
                                          src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/Monthly_Campains-89_aac51cc5-965b-4ea1-98b0-f70e5f767cf7.png"
                                          alt=""
                                          draggable="false"
                                        ></img>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <ol class="flex-control-nav flex-control-paging">
                <li class="slide-hide">
                  <a href="#" class="">
                    1
                  </a>
                </li>
                <li class="slide-hide">
                  <a href="#" class="">
                    2
                  </a>
                </li>
              </ol>
              <ul class="flex-direction-nav">
                <li class="flex-nav-prev slide-hide">
                  <a class="flex-prev" href="#">
                    Previous
                  </a>
                </li>
                <li class="flex-nav-next slide-hide">
                  <a class="flex-next" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* ----------------------------------------------------------------------- */}
        <div
          id="shopify-section-1549183561497"
          class="shopify-section image-with-text"
        >
          <div
            class="image-with-text-bg-1549183561497 image-with-text-bg"
            data-section-id="1549183561497"
            data-section-type="template-index"
          >
            <div class="wrapper">
              <div class="grid">
                <div class="grid__item">
                  <div class="page-width feature-row">
                    <div class="feature-row">
                      <div class="feature-row__item feature-row-item-image-1549183561497">
                        <noscript>
                          <img
                            src="//cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_640x640.png?v=1573582514"
                            alt=""
                          />
                        </noscript>

                        <div
                          id="FeatureRowImageWrapper--1549183561497"
                          class="feature-row__image-wrapper supports-js"
                        >
                          <div style={{ paddingTop: "85.45454545454545%" }}>
                            <img
                              id="FeatureRowImage--1549183561497"
                              class="feature-row__image lazyautosizes lazyloaded"
                              src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/new_family_small_300x300.png"
                              data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048]"
                              data-aspectratio="1.1702127659574468"
                              data-sizes="auto"
                              alt=""
                              data-srcset="//cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_180x.png?v=1573582514 180w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_360x.png?v=1573582514 360w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_540x.png?v=1573582514 540w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_720x.png?v=1573582514 720w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_900x.png?v=1573582514 900w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_1080x.png?v=1573582514 1080w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_1296x.png?v=1573582514 1296w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_1512x.png?v=1573582514 1512w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_1728x.png?v=1573582514 1728w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_1944x.png?v=1573582514 1944w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_2048x.png?v=1573582514 2048w"
                              sizes="202px"
                              srcset="//cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_180x.png?v=1573582514 180w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_360x.png?v=1573582514 360w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_540x.png?v=1573582514 540w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_720x.png?v=1573582514 720w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_900x.png?v=1573582514 900w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_1080x.png?v=1573582514 1080w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_1296x.png?v=1573582514 1296w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_1512x.png?v=1573582514 1512w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_1728x.png?v=1573582514 1728w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_1944x.png?v=1573582514 1944w, //cdn.shopify.com/s/files/1/2616/9618/files/new_family_small_2048x.png?v=1573582514 2048w"
                            ></img>
                          </div>
                        </div>
                      </div>

                      <div class="feature-row__item  feature-row-item-text-1549183561497 feature-row__text feature-row__text--left">
                        <div class="rte featured-row__subtext">
                          <p>
                            <strong>JustSnack</strong> delivers the highest
                            quality healthy snacks, with only the finest
                            ingredients, so you can eat smarter on-the-go. Save
                            time and money with a snack subscription today!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------- */}

        <div
          id="shopify-section-1549195108394"
          class="shopify-section featured-collection"
        >
          <div
            class="featured-collection-wrapper"
            style={{ background: "#f0f0f0" }}
          >
            <div class="wrapper">
              <div class="grid">
                <div class="grid__item">
                  <div
                    data-section-id="1549195108394"
                    data-section-type="featured-products-section"
                  >
                    <div class="section-header section-header--small text-center">
                      <h2 class="header-title">Packs:</h2>
                    </div>

                    <div class="grid-uniform">
                      <div class="grid__item medium-down--one-half post-large--one-quarter">
                        <div class="product-item ">
                          <Link to={"/product1"}>
                            <a
                              // href="https://smartboxcompany.com/products/snack-for-a-good-cause"
                              class="grid-link text-center"
                            >
                              <span
                                class="grid-link__image grid-link__image--product"
                                style={{ height: "297px" }}
                              >
                                <span class="grid-link__image-centered">
                                  <style></style>

                                  <div
                                    id="ProductImageWrapper-14844243214423"
                                    class="product__img-wrapper supports-js"
                                  >
                                    <div
                                      style={{ paddingTop: "99.951171875%" }}
                                    >
                                      <img
                                        id="ProductImage-14844243214423"
                                        class="product__img lazyautosizes lazyloaded"
                                        src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/8ffa658337e345efe4e640c0f4072646_300x300.png"
                                        data-widths="[150, 220, 360, 470, 600, 750, 940, 1080, 1296, 1512, 1728, 2048]"
                                        data-aspectratio="1.0004885197850513"
                                        data-sizes="auto"
                                        alt="NEW! Snacks for a Cause"
                                        data-srcset="//cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_150x.png?v=1608065747 150w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_220x.png?v=1608065747 220w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_360x.png?v=1608065747 360w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_470x.png?v=1608065747 470w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_600x.png?v=1608065747 600w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_750x.png?v=1608065747 750w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_940x.png?v=1608065747 940w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_1080x.png?v=1608065747 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_1296x.png?v=1608065747 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_1512x.png?v=1608065747 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_1728x.png?v=1608065747 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_2048x.png?v=1608065747 2048w"
                                        sizes="322px"
                                        srcset="//cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_150x.png?v=1608065747 150w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_220x.png?v=1608065747 220w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_360x.png?v=1608065747 360w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_470x.png?v=1608065747 470w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_600x.png?v=1608065747 600w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_750x.png?v=1608065747 750w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_940x.png?v=1608065747 940w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_1080x.png?v=1608065747 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_1296x.png?v=1608065747 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_1512x.png?v=1608065747 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_1728x.png?v=1608065747 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_2048x.png?v=1608065747 2048w"
                                      ></img>
                                    </div>
                                  </div>

                                  <noscript>
                                    <Link to={"/product1"}>
                                      <img
                                        src="//cdn.shopify.com/s/files/1/2616/9618/products/8ffa658337e345efe4e640c0f4072646_large.png?v=1608065747"
                                        alt="NEW! Snacks for a Cause"
                                        class="product__img"
                                      ></img>
                                    </Link>
                                  </noscript>
                                </span>
                              </span>
                              <p class="grid-link__title devPrdTitle">
                                Surprise Me
                              </p>
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div class="grid__item medium-down--one-half post-large--one-quarter">
                        <div class="product-item ">
                          <Link to={"/product2"}>
                            <a
                              // href="https://smartboxcompany.com/products/family-box-1"
                              class="grid-link text-center"
                            >
                              <span
                                class="grid-link__image grid-link__image--product"
                                style={{ height: "297px" }}
                              >
                                <span class="grid-link__image-centered">
                                  <style></style>

                                  <div
                                    id="ProductImageWrapper-11142864535639"
                                    class="product__img-wrapper supports-js"
                                  >
                                    <div
                                      style={{
                                        paddingTop: "99.95975855130786%",
                                      }}
                                    >
                                      <img
                                        id="ProductImage-11142864535639"
                                        class="product__img lazyautosizes lazyloaded"
                                        src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/box_images-09_300x300.png"
                                        data-widths="[150, 220, 360, 470, 600, 750, 940, 1080, 1296, 1512, 1728, 2048]"
                                        data-aspectratio="1.000402576489533"
                                        data-sizes="auto"
                                        alt="Family Box"
                                        data-srcset="//cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_150x.png?v=1598458057 150w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_220x.png?v=1598458057 220w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_360x.png?v=1598458057 360w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_470x.png?v=1598458057 470w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_600x.png?v=1598458057 600w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_750x.png?v=1598458057 750w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_940x.png?v=1598458057 940w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_1080x.png?v=1598458057 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_1296x.png?v=1598458057 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_1512x.png?v=1598458057 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_1728x.png?v=1598458057 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_2048x.png?v=1598458057 2048w"
                                        sizes="322px"
                                        srcset="//cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_150x.png?v=1598458057 150w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_220x.png?v=1598458057 220w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_360x.png?v=1598458057 360w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_470x.png?v=1598458057 470w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_600x.png?v=1598458057 600w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_750x.png?v=1598458057 750w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_940x.png?v=1598458057 940w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_1080x.png?v=1598458057 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_1296x.png?v=1598458057 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_1512x.png?v=1598458057 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_1728x.png?v=1598458057 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_2048x.png?v=1598458057 2048w"
                                      ></img>
                                    </div>
                                  </div>

                                  <noscript>
                                    <img
                                      src="//cdn.shopify.com/s/files/1/2616/9618/products/box_images-09_large.png?v=1598458057"
                                      alt="Family Box"
                                      class="product__img"
                                    ></img>
                                  </noscript>
                                </span>
                              </span>
                              <p
                                class="grid-link__title devPrdTitle"
                                style={{}}
                              >
                                Normal
                              </p>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------- */}
        <div
          id="shopify-section-1571072873133"
          class="shopify-section image-text-section"
        >
          <div
            data-section-id="1571072873133"
            class="image-text-bg home_corporate"
            style={{
              backgroundColor: "#ffffff",

              padding: "0px 0 0px 0",
            }}
          >
            <div class="image-text-wrapper">
              <div class="grid">
                <div class="grid__item">
                  <div class="page-width feature-row">
                    <div class="feature-row">
                      <div class="feature-row__item--text-1571072873133 feature-row__text feature-row__text--right">
                        <div class="feature-row-text-inner">
                          <h2 class="header-title" style={{ color: "#37944a" }}>
                            <span>Send a healthier corporate gift!</span>
                            Not another grocery store cake...
                          </h2>

                          <div
                            class="rte featured-row__subtext"
                            style={{ color: "#414042" }}
                          >
                            <p>
                              Give better gifts with SmartBox! Our snack boxes
                              work for almost any dietary need and preference.
                              Our gift concierge service makes ordering large
                              quantities of custom boxes easy. This is a perfect
                              gift choice for brands where healthier choices
                              matter!
                            </p>
                          </div>

                          <a
                            href="https://smartboxcompany.com/pages/smartbox-for-business"
                            class="custom-btn"
                            style={{ color: "#414042" }}
                          >
                            Corporate Gifting
                          </a>
                        </div>
                      </div>

                      <div class="feature-row__item-1571072873133">
                        <div id="" class="image-wrapper">
                          <img
                            class="row-image desktop-feature-row-image"
                            src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/smartbox-home.jpg"
                            alt=""
                          ></img>
                          <img
                            class="row-image mobile-feature-row-image"
                            src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/smartbox-home.jpg"
                            alt=""
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------------------------------------- */}
        {/* <div class="newsletter-footer">
          <div
            id="shopify-section-footer-newsletter"
            class="shopify-section newsletter-section"
          >
            <style></style>

            <div class="newsletter-footer-wrapper">
              <div class="wrapper">
                <div class="grid newsletter-grid">
                  <div class="grid__item one-half small--one-whole">
                    <div class="newsletter-content-wrapper">
                      <div class="newsletter-content">
                        <div class="section-header">
                          <h2 class="section-header__title">
                            Subscribe to our newsletter
                          </h2>
                        </div>

                        <p>
                          Promotions, new products and sales. Directly to your
                          inbox.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="grid__item one-half small--one-whole">
                    <div class="newsletter-content-wrapper">
                      <div class="newsletter-content">
                        <div class="klaviyo-form-KWMfzk klaviyo-form form-version-cid-1">
                          <div class="needsclick undefined kl-private-reset-css-Xuajs1">
                            <form
                              class="needsclick View__FormView-sc-1ou3cq2-0 cCObTl klaviyo-form-version-cid_1 kl-private-reset-css-Xuajs1"
                              novalidate=""
                              isembed="true"
                              tabindex="-1"
                            >
                              <div class="needsclick Column__FormColumn-z5j99u-0 hVFNhP kl-private-reset-css-Xuajs1">
                                <div
                                  data-testid="form-row"
                                  class="needsclick Row__FormRow-sc-17nghml-0 lnviXl kl-private-reset-css-Xuajs1"
                                >
                                  <div
                                    component="[object Object]"
                                    formcomponentstyling="[object Object]"
                                    data-testid="form-component"
                                    class="needsclick FormComponent__StyledFormComponentWrapper-e0xun6-0 fptOlf notranslate kl-private-reset-css-Xuajs1"
                                    formcomponenttheme="[object Object]"
                                  >
                                    <div class="RichText__StyledQuillContainer-sc-11o3xhj-0 kzkVSS undefined kl-private-reset-css-Xuajs1 kl-private-quill-wrapper-Lkqws1">
                                      <div class="ql-snow ql-container ql-disabled">
                                        <div
                                          class="ql-editor"
                                          data-gramm="false"
                                          contenteditable="false"
                                        >
                                          <p style={{ textAlign: "center" }}>
                                            <strong
                                              class="ql-font-geneva"
                                              style={{
                                                color: "rgb(247, 242, 242)",
                                                fontSize: "24px",
                                              }}
                                            >
                                              Sign up for our newsletter &amp;
                                              receive 10% off your first
                                              SmartBox Express purchase!
                                            </strong>
                                          </p>
                                        </div>
                                        <div
                                          class="ql-clipboard"
                                          contenteditable="true"
                                          tabindex="-1"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-testid="form-row"
                                  class="needsclick Row__FormRow-sc-17nghml-0 lnviXl kl-private-reset-css-Xuajs1"
                                >
                                  <div
                                    component="[object Object]"
                                    formcomponentstyling="[object Object]"
                                    data-testid="form-component"
                                    class="needsclick FormComponent__StyledFormComponentWrapper-e0xun6-0 fptOlf notranslate kl-private-reset-css-Xuajs1"
                                    formcomponenttheme="[object Object]"
                                  >
                                    <div class="needsclick TextInput__StyledInputContainer-sc-1o6de9f-1 kvTDNe kl-private-reset-css-Xuajs1">
                                      <input
                                        type="email"
                                        name="email"
                                        tabindex="0"
                                        styling="[object Object]"
                                        placeholder="Enter your email"
                                        aria-label="Enter your email"
                                        aria-invalid="false"
                                        valid="1"
                                        options="[object Object]"
                                        class="notranslate needsclick TextInput__FormStyledTextInput-sc-1o6de9f-0 jYwOKt kl-private-reset-css-Xuajs1"
                                      />
                                      <div class="needsclick ValidationMessage__Container-sc-1agouhi-0 eVRHhz kl-private-reset-css-Xuajs1"></div>
                                    </div>
                                  </div>
                                  <div
                                    component="[object Object]"
                                    formcomponentstyling="[object Object]"
                                    data-testid="form-component"
                                    class="needsclick FormComponent__StyledFormComponentWrapper-e0xun6-0 jBjzuA notranslate kl-private-reset-css-Xuajs1"
                                    formcomponenttheme="[object Object]"
                                  >
                                    <button
                                      type="button"
                                      tabindex="0"
                                      class="needsclick Button__FormStyledButton-p2mbjt-0 izywAZ kl-private-reset-css-Xuajs1"
                                    >
                                      Subscribe
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <input
                                type="submit"
                                tabindex="-1"
                                class="notranslate needsclick View__HiddenSubmit-sc-1ou3cq2-1 StXTa kl-private-reset-css-Xuajs1"
                                value="Submit"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}
