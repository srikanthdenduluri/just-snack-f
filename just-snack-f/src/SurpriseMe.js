import React from "react";
import "./SurpriseMe.css";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";
import { DataStore } from "@aws-amplify/datastore";
import { Subscribe } from "./models";
import { useState, useEffect, useRef } from "react";
import { Auth } from "aws-amplify";
import useCurrentUser from "./useCurrentUser";
import Overlay from "react-bootstrap/Overlay";

import Tooltip from "react-bootstrap/Tooltip";

function SurpriseMe() {
  const userStatus = useCurrentUser();

  const isLoggedIn = null !== userStatus;
  const [isNoUser, setisNoUser] = useState(true);

  const userslist = [];
  const currentuser = [];
  const [Data, setData] = useState({
    full_name: "",
    area: "",
    email: "",
    mobile: "",
    address: "",
  });
  const [show, setShow] = useState(false);
  const target = useRef(null);
  useEffect(() => {
    async function myfunc() {
      const temp = await DataStore.query(Subscribe, (c) =>
        c.user_id("eq", Auth.user.username)
      );
      console.log("temp", temp);
      userslist.push(temp);
      console.log("userslist", userslist);
      const cu = userslist[0][userslist[0].length - 1];
      if (cu === undefined) {
        console.log("error occured");
        setisNoUser(true);
        console.log("isNoUser", isNoUser);
        return null;
      } else {
        setisNoUser(false);
        console.log("isNoUser", isNoUser);
      }

      // console.log(userslist[userslist[0].length]);
      // console.log(userslist[0][userslist[0].length - 1]);
      currentuser.push(cu);
      console.log("current user", currentuser);
      console.log("current user", currentuser[0].area);
      setData({
        full_name: currentuser[0].full_name,
        area: currentuser[0].area,
        email: currentuser[0].email,
        address: currentuser[0].address,
        mobile: currentuser[0].mobile,
      });

      console.log(Auth.user.username);
      // const addressNewValue = document.getElementById("addressId").value;
      // console.log("addressNewValue", addressNewValue);
    }
    myfunc();
  }, []);
  console.log("isNoUser outside useeffect", isNoUser);
  return (
    <div>
      <main class="main-content" role="main">
        <div id="shopify-section-product-template" class="shopify-section">
          <div class="wrapper">
            <div class="grid">
              <div class="grid__item">
                <div
                  itemscope=""
                  itemtype="http://schema.org/Product"
                  id="ProductSection"
                  data-section-id="product-template"
                  data-section-type="product-template"
                  data-image-zoom-type="lightbox"
                  data-related-enabled="true"
                  data-show-extra-tab="false"
                  data-extra-tab-content=""
                  data-enable-history-state="true"
                >
                  <br></br>
                  <div class="section-header section-header--breadcrumb">
                    <nav
                      class="breadcrumb"
                      role="navigation"
                      aria-label="breadcrumbs"
                    >
                      <a
                        href="https://smartboxcompany.com/"
                        title="Back to the frontpage"
                      >
                        Home
                      </a>

                      <span aria-hidden="true" class="breadcrumb__sep">
                        ›
                      </span>
                      <span>Surprise Me :</span>
                    </nav>
                  </div>

                  <div class="product-single">
                    <div class="grid product-single__hero">
                      <div class="grid__item post-large--one-half">
                        <div class="product-single__photos">
                          <div
                            id="ProductImageWrapper-6704531439703"
                            class="product-single__image-wrapper supports-js zoom-lightbox"
                            data-image-id="6704531439703"
                          >
                            <div style={{ paddingTop: "100.0%" }}>
                              <img
                                id="ProductImage-6704531439703"
                                class="product-single__image lazyautosizes lazyloaded"
                                src="./Surprise Me _) – SmartBox_files/Box_Surprise_300x300.png"
                                data-widths="[180, 370, 540, 740, 900, 1080, 1296, 1512, 1728, 2048]"
                                data-aspectratio="1.0"
                                data-sizes="auto"
                                alt="Surprise Me :)"
                                data-srcset="//cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_180x.png?v=1598464408 180w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_370x.png?v=1598464408 370w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_540x.png?v=1598464408 540w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_740x.png?v=1598464408 740w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_900x.png?v=1598464408 900w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_1080x.png?v=1598464408 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_1296x.png?v=1598464408 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_1512x.png?v=1598464408 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_1728x.png?v=1598464408 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_2048x.png?v=1598464408 2048w"
                                sizes="595px"
                                srcset="//cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_180x.png?v=1598464408 180w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_370x.png?v=1598464408 370w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_540x.png?v=1598464408 540w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_740x.png?v=1598464408 740w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_900x.png?v=1598464408 900w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_1080x.png?v=1598464408 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_1296x.png?v=1598464408 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_1512x.png?v=1598464408 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_1728x.png?v=1598464408 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_2048x.png?v=1598464408 2048w"
                              ></img>
                            </div>
                          </div>

                          <div
                            id="ProductImageWrapper-13070917107799"
                            class="product-single__image-wrapper supports-js hide zoom-lightbox"
                            data-image-id="13070917107799"
                          >
                            <div style={{ paddingTop: "66.66666666666666%" }}>
                              <img
                                id="ProductImage-13070917107799"
                                class="product-single__image lazypreload lazyautosizes lazyloaded"
                                data-widths="[180, 370, 540, 740, 900, 1080, 1296, 1512, 1728, 2048]"
                                data-aspectratio="1.5"
                                data-sizes="auto"
                                alt="Surprise Me :)"
                                data-srcset="//cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_180x.jpg?v=1598464410 180w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_370x.jpg?v=1598464410 370w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_540x.jpg?v=1598464410 540w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_740x.jpg?v=1598464410 740w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_900x.jpg?v=1598464410 900w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_1080x.jpg?v=1598464410 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_1296x.jpg?v=1598464410 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_1512x.jpg?v=1598464410 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_1728x.jpg?v=1598464410 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_2048x.jpg?v=1598464410 2048w"
                                sizes="625px"
                                srcset="//cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_180x.jpg?v=1598464410 180w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_370x.jpg?v=1598464410 370w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_540x.jpg?v=1598464410 540w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_740x.jpg?v=1598464410 740w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_900x.jpg?v=1598464410 900w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_1080x.jpg?v=1598464410 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_1296x.jpg?v=1598464410 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_1512x.jpg?v=1598464410 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_1728x.jpg?v=1598464410 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_2048x.jpg?v=1598464410 2048w"
                              ></img>
                            </div>
                          </div>

                          <div
                            id="ProductImageWrapper-13070912389207"
                            class="product-single__image-wrapper supports-js hide zoom-lightbox"
                            data-image-id="13070912389207"
                          >
                            <div style={{ paddingTop: "66.65760130541203%" }}>
                              <img
                                id="ProductImage-13070912389207"
                                class="product-single__image lazypreload lazyautosizes lazyloaded"
                                data-widths="[180, 370, 540, 740, 900, 1080, 1296, 1512, 1728, 2048]"
                                data-aspectratio="1.500203998368013"
                                data-sizes="auto"
                                alt="Surprise Me :)"
                                data-srcset="//cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_180x.jpg?v=1598464410 180w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_370x.jpg?v=1598464410 370w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_540x.jpg?v=1598464410 540w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_740x.jpg?v=1598464410 740w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_900x.jpg?v=1598464410 900w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_1080x.jpg?v=1598464410 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_1296x.jpg?v=1598464410 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_1512x.jpg?v=1598464410 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_1728x.jpg?v=1598464410 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_2048x.jpg?v=1598464410 2048w"
                                sizes="625px"
                                srcset="//cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_180x.jpg?v=1598464410 180w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_370x.jpg?v=1598464410 370w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_540x.jpg?v=1598464410 540w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_740x.jpg?v=1598464410 740w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_900x.jpg?v=1598464410 900w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_1080x.jpg?v=1598464410 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_1296x.jpg?v=1598464410 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_1512x.jpg?v=1598464410 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_1728x.jpg?v=1598464410 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_2048x.jpg?v=1598464410 2048w"
                              ></img>
                            </div>
                          </div>

                          <div
                            id="ProductImageWrapper-13070923169879"
                            class="product-single__image-wrapper supports-js hide zoom-lightbox"
                            data-image-id="13070923169879"
                          >
                            <div style={{ paddingTop: "66.65806451612903%" }}>
                              <img
                                id="ProductImage-13070923169879"
                                class="product-single__image lazypreload lazyautosizes lazyloaded"
                                data-widths="[180, 370, 540, 740, 900, 1080, 1296, 1512, 1728, 2048]"
                                data-aspectratio="1.500193573364305"
                                data-sizes="auto"
                                alt="Surprise Me :)"
                                data-srcset="//cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_180x.jpg?v=1598464410 180w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_370x.jpg?v=1598464410 370w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_540x.jpg?v=1598464410 540w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_740x.jpg?v=1598464410 740w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_900x.jpg?v=1598464410 900w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_1080x.jpg?v=1598464410 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_1296x.jpg?v=1598464410 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_1512x.jpg?v=1598464410 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_1728x.jpg?v=1598464410 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_2048x.jpg?v=1598464410 2048w"
                                sizes="625px"
                                srcset="//cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_180x.jpg?v=1598464410 180w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_370x.jpg?v=1598464410 370w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_540x.jpg?v=1598464410 540w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_740x.jpg?v=1598464410 740w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_900x.jpg?v=1598464410 900w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_1080x.jpg?v=1598464410 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_1296x.jpg?v=1598464410 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_1512x.jpg?v=1598464410 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_1728x.jpg?v=1598464410 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_2048x.jpg?v=1598464410 2048w"
                              ></img>
                            </div>
                          </div>

                          <div
                            id="ProductImageWrapper-12817470783575"
                            class="product-single__image-wrapper supports-js hide zoom-lightbox"
                            data-image-id="12817470783575"
                          >
                            <div style={{ paddingTop: "86.64259927797835%" }}>
                              <img
                                id="ProductImage-12817470783575"
                                class="product-single__image lazypreload lazyautosizes lazyloaded"
                                data-widths="[180, 370, 540, 740, 900, 1080, 1296, 1512, 1728, 2048]"
                                data-aspectratio="1.1541666666666666"
                                data-sizes="auto"
                                alt="Surprise Me :)"
                                data-srcset="//cdn.shopify.com/s/files/1/2616/9618/products/box-vend_180x.png?v=1598464412 180w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_370x.png?v=1598464412 370w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_540x.png?v=1598464412 540w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_740x.png?v=1598464412 740w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_900x.png?v=1598464412 900w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_1080x.png?v=1598464412 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_1296x.png?v=1598464412 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_1512x.png?v=1598464412 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_1728x.png?v=1598464412 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_2048x.png?v=1598464412 2048w"
                                sizes="625px"
                                srcset="//cdn.shopify.com/s/files/1/2616/9618/products/box-vend_180x.png?v=1598464412 180w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_370x.png?v=1598464412 370w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_540x.png?v=1598464412 540w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_740x.png?v=1598464412 740w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_900x.png?v=1598464412 900w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_1080x.png?v=1598464412 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_1296x.png?v=1598464412 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_1512x.png?v=1598464412 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_1728x.png?v=1598464412 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/box-vend_2048x.png?v=1598464412 2048w"
                              ></img>
                            </div>
                          </div>

                          <div
                            id="ProductImageWrapper-13494125330519"
                            class="product-single__image-wrapper supports-js hide zoom-lightbox"
                            data-image-id="13494125330519"
                          >
                            <div style={{ paddingTop: "66.66666666666666%" }}>
                              <img
                                id="ProductImage-13494125330519"
                                class="product-single__image lazypreload lazyautosizes lazyloaded"
                                data-widths="[180, 370, 540, 740, 900, 1080, 1296, 1512, 1728, 2048]"
                                data-aspectratio="1.5"
                                data-sizes="auto"
                                alt="Surprise Me :)"
                                data-srcset="//cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_180x.png?v=1598464412 180w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_370x.png?v=1598464412 370w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_540x.png?v=1598464412 540w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_740x.png?v=1598464412 740w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_900x.png?v=1598464412 900w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_1080x.png?v=1598464412 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_1296x.png?v=1598464412 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_1512x.png?v=1598464412 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_1728x.png?v=1598464412 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_2048x.png?v=1598464412 2048w"
                                sizes="625px"
                                srcset="//cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_180x.png?v=1598464412 180w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_370x.png?v=1598464412 370w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_540x.png?v=1598464412 540w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_740x.png?v=1598464412 740w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_900x.png?v=1598464412 900w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_1080x.png?v=1598464412 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_1296x.png?v=1598464412 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_1512x.png?v=1598464412 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_1728x.png?v=1598464412 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_2048x.png?v=1598464412 2048w"
                              ></img>
                            </div>
                          </div>

                          <div
                            id="ProductImageWrapper-13472127844439"
                            class="product-single__image-wrapper supports-js hide zoom-lightbox"
                            data-image-id="13472127844439"
                          >
                            <div style={{ paddingTop: "66.66666666666666%" }}>
                              <img
                                id="ProductImage-13472127844439"
                                class="product-single__image lazypreload lazyautosizes lazyloaded"
                                data-widths="[180, 370, 540, 740, 900, 1080, 1296, 1512, 1728, 2048]"
                                data-aspectratio="1.5"
                                data-sizes="auto"
                                alt="Surprise Me :)"
                                data-srcset="//cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_180x.png?v=1598464412 180w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_370x.png?v=1598464412 370w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_540x.png?v=1598464412 540w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_740x.png?v=1598464412 740w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_900x.png?v=1598464412 900w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_1080x.png?v=1598464412 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_1296x.png?v=1598464412 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_1512x.png?v=1598464412 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_1728x.png?v=1598464412 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_2048x.png?v=1598464412 2048w"
                                sizes="625px"
                                srcset="//cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_180x.png?v=1598464412 180w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_370x.png?v=1598464412 370w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_540x.png?v=1598464412 540w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_740x.png?v=1598464412 740w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_900x.png?v=1598464412 900w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_1080x.png?v=1598464412 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_1296x.png?v=1598464412 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_1512x.png?v=1598464412 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_1728x.png?v=1598464412 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_2048x.png?v=1598464412 2048w"
                              ></img>
                            </div>
                          </div>

                          <div
                            id="ProductImageWrapper-14521834176599"
                            class="product-single__image-wrapper supports-js hide zoom-lightbox"
                            data-image-id="14521834176599"
                          >
                            <div style={{ paddingTop: "66.650390625%" }}>
                              <img
                                id="ProductImage-14521834176599"
                                class="product-single__image lazypreload lazyautosizes lazyloaded"
                                data-widths="[180, 370, 540, 740, 900, 1080, 1296, 1512, 1728, 2048]"
                                data-aspectratio="1.5003663003663004"
                                data-sizes="auto"
                                alt="Surprise Me :)"
                                data-srcset="//cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_180x.jpg?v=1598464414 180w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_370x.jpg?v=1598464414 370w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_540x.jpg?v=1598464414 540w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_740x.jpg?v=1598464414 740w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_900x.jpg?v=1598464414 900w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_1080x.jpg?v=1598464414 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_1296x.jpg?v=1598464414 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_1512x.jpg?v=1598464414 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_1728x.jpg?v=1598464414 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_2048x.jpg?v=1598464414 2048w"
                                sizes="625px"
                                srcset="//cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_180x.jpg?v=1598464414 180w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_370x.jpg?v=1598464414 370w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_540x.jpg?v=1598464414 540w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_740x.jpg?v=1598464414 740w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_900x.jpg?v=1598464414 900w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_1080x.jpg?v=1598464414 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_1296x.jpg?v=1598464414 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_1512x.jpg?v=1598464414 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_1728x.jpg?v=1598464414 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_2048x.jpg?v=1598464414 2048w"
                              ></img>
                            </div>
                          </div>

                          <div
                            id="ProductImageWrapper-14521834209367"
                            class="product-single__image-wrapper supports-js hide zoom-lightbox"
                            data-image-id="14521834209367"
                          >
                            <div style={{ paddingTop: "66.650390625%" }}>
                              <img
                                id="ProductImage-14521834209367"
                                class="product-single__image lazypreload lazyautosizes lazyloaded"
                                data-widths="[180, 370, 540, 740, 900, 1080, 1296, 1512, 1728, 2048]"
                                data-aspectratio="1.5003663003663004"
                                data-sizes="auto"
                                alt="Surprise Me :)"
                                data-srcset="//cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_180x.jpg?v=1598464415 180w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_370x.jpg?v=1598464415 370w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_540x.jpg?v=1598464415 540w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_740x.jpg?v=1598464415 740w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_900x.jpg?v=1598464415 900w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_1080x.jpg?v=1598464415 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_1296x.jpg?v=1598464415 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_1512x.jpg?v=1598464415 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_1728x.jpg?v=1598464415 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_2048x.jpg?v=1598464415 2048w"
                                sizes="625px"
                                srcset="//cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_180x.jpg?v=1598464415 180w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_370x.jpg?v=1598464415 370w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_540x.jpg?v=1598464415 540w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_740x.jpg?v=1598464415 740w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_900x.jpg?v=1598464415 900w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_1080x.jpg?v=1598464415 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_1296x.jpg?v=1598464415 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_1512x.jpg?v=1598464415 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_1728x.jpg?v=1598464415 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_2048x.jpg?v=1598464415 2048w"
                              ></img>
                            </div>
                          </div>

                          <div
                            id="ProductImageWrapper-13070899478615"
                            class="product-single__image-wrapper supports-js hide zoom-lightbox"
                            data-image-id="13070899478615"
                          >
                            <div style={{ paddingTop: "66.66666666666666%" }}>
                              <img
                                id="ProductImage-13070899478615"
                                class="product-single__image lazypreload lazyautosizes lazyloaded"
                                data-widths="[180, 370, 540, 740, 900, 1080, 1296, 1512, 1728, 2048]"
                                data-aspectratio="1.5"
                                data-sizes="auto"
                                alt="Surprise Me :)"
                                data-srcset="//cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_180x.jpg?v=1598464415 180w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_370x.jpg?v=1598464415 370w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_540x.jpg?v=1598464415 540w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_740x.jpg?v=1598464415 740w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_900x.jpg?v=1598464415 900w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_1080x.jpg?v=1598464415 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_1296x.jpg?v=1598464415 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_1512x.jpg?v=1598464415 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_1728x.jpg?v=1598464415 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_2048x.jpg?v=1598464415 2048w"
                                sizes="625px"
                                srcset="//cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_180x.jpg?v=1598464415 180w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_370x.jpg?v=1598464415 370w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_540x.jpg?v=1598464415 540w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_740x.jpg?v=1598464415 740w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_900x.jpg?v=1598464415 900w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_1080x.jpg?v=1598464415 1080w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_1296x.jpg?v=1598464415 1296w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_1512x.jpg?v=1598464415 1512w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_1728x.jpg?v=1598464415 1728w, //cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_2048x.jpg?v=1598464415 2048w"
                              ></img>
                            </div>
                          </div>

                          <noscript>
                            <img
                              src="//cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_1024x1024@2x.png?v=1598464408"
                              alt="Surprise Me :)"
                            ></img>
                          </noscript>
                        </div>
                        <div class="w3-container">
                          <ul
                            class="product-single__thumbnails grid-uniform"
                            id="ProductThumbs"
                          >
                            <li class="grid__item wide--one-quarter large--one-third medium-down--one-third">
                              <ModalImage
                                small={
                                  "./Surprise Me _) – SmartBox_files/Box_Surprise_grande.png"
                                }
                                large={
                                  "./Surprise Me _) – SmartBox_files/Box_Surprise_grande.png"
                                }
                                hideDownload={true}
                                hideZoom={true}
                              />
                            </li>

                            <li class="grid__item wide--one-quarter large--one-third medium-down--one-third">
                              <ModalImage
                                small={
                                  "./Surprise Me _) – SmartBox_files/SB_Halloween-2094_grande.jpg"
                                }
                                large={
                                  "./Surprise Me _) – SmartBox_files/SB_Halloween-2094_grande.jpg"
                                }
                                hideDownload={true}
                                hideZoom={true}
                              />
                            </li>

                            <li class="grid__item wide--one-quarter large--one-third medium-down--one-third">
                              <ModalImage
                                small={
                                  "./Surprise Me _) – SmartBox_files/SB_Halloween-2059_grande.jpg"
                                }
                                large={
                                  "./Surprise Me _) – SmartBox_files/SB_Halloween-2059_grande.jpg"
                                }
                                hideDownload={true}
                                hideZoom={true}
                              />
                            </li>

                            <li class="grid__item wide--one-quarter large--one-third medium-down--one-third">
                              <ModalImage
                                small={
                                  "./Surprise Me _) – SmartBox_files/SB_Halloween-2073_grande.jpg"
                                }
                                large={
                                  "./Surprise Me _) – SmartBox_files/SB_Halloween-2073_grande.jpg"
                                }
                                hideDownload={true}
                                hideZoom={true}
                              />
                            </li>

                            <li class="grid__item wide--one-quarter large--one-third medium-down--one-third">
                              <ModalImage
                                small={
                                  "./Surprise Me _) – SmartBox_files/box-vend_grande.png"
                                }
                                large={
                                  "./Surprise Me _) – SmartBox_files/box-vend_grande.png"
                                }
                                hideDownload={true}
                                hideZoom={true}
                              />
                            </li>

                            <li class="grid__item wide--one-quarter large--one-third medium-down--one-third">
                              <ModalImage
                                small={
                                  "./Surprise Me _) – SmartBox_files/Chevron_Citrus_Green_Bow_grande.png"
                                }
                                large={
                                  "./Surprise Me _) – SmartBox_files/Chevron_Citrus_Green_Bow_grande.png"
                                }
                                hideDownload={true}
                                hideZoom={true}
                              />
                            </li>

                            <li class="grid__item wide--one-quarter large--one-third medium-down--one-third">
                              <ModalImage
                                small={
                                  "./Surprise Me _) – SmartBox_files/Emoji_Red_Sheer_Ribbon_grande.png"
                                }
                                large={
                                  "./Surprise Me _) – SmartBox_files/Emoji_Red_Sheer_Ribbon_grande.png"
                                }
                                hideDownload={true}
                                hideZoom={true}
                              />
                            </li>

                            <li class="grid__item wide--one-quarter large--one-third medium-down--one-third">
                              <ModalImage
                                small={
                                  "./Surprise Me _) – SmartBox_files/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_grande.jpg"
                                }
                                large={
                                  "./Surprise Me _) – SmartBox_files/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_grande.jpg"
                                }
                                hideDownload={true}
                                hideZoom={true}
                              />
                            </li>

                            <li class="grid__item wide--one-quarter large--one-third medium-down--one-third">
                              <ModalImage
                                small={
                                  "./Surprise Me _) – SmartBox_files/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_grande.jpg"
                                }
                                large={
                                  "./Surprise Me _) – SmartBox_files/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_grande.jpg"
                                }
                                hideDownload={true}
                                hideZoom={true}
                              />
                            </li>

                            <li class="grid__item wide--one-quarter large--one-third medium-down--one-third">
                              <ModalImage
                                small={
                                  "./Surprise Me _) – SmartBox_files/SB_Halloween-2072_grande.jpg"
                                }
                                large={
                                  "./Surprise Me _) – SmartBox_files/SB_Halloween-2072_grande.jpg"
                                }
                                hideDownload={true}
                                hideZoom={true}
                              />
                            </li>
                          </ul>

                          <ul class="gallery">
                            <li
                              data-image-id="6704531439703"
                              class="gallery__item"
                              data-mfp-src="//cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_1024x1024@2x.png?v=1598464408"
                            ></li>

                            <li
                              data-image-id="13070917107799"
                              class="gallery__item"
                              data-mfp-src="//cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2094_1024x1024@2x.jpg?v=1598464410"
                            ></li>

                            <li
                              data-image-id="13070912389207"
                              class="gallery__item"
                              data-mfp-src="//cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2059_1024x1024@2x.jpg?v=1598464410"
                            ></li>

                            <li
                              data-image-id="13070923169879"
                              class="gallery__item"
                              data-mfp-src="//cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2073_1024x1024@2x.jpg?v=1598464410"
                            ></li>

                            <li
                              data-image-id="12817470783575"
                              class="gallery__item"
                              data-mfp-src="//cdn.shopify.com/s/files/1/2616/9618/products/box-vend_1024x1024@2x.png?v=1598464412"
                            ></li>

                            <li
                              data-image-id="13494125330519"
                              class="gallery__item"
                              data-mfp-src="//cdn.shopify.com/s/files/1/2616/9618/products/Chevron_Citrus_Green_Bow_1024x1024@2x.png?v=1598464412"
                            ></li>

                            <li
                              data-image-id="13472127844439"
                              class="gallery__item"
                              data-mfp-src="//cdn.shopify.com/s/files/1/2616/9618/products/Emoji_Red_Sheer_Ribbon_1024x1024@2x.png?v=1598464412"
                            ></li>

                            <li
                              data-image-id="14521834176599"
                              class="gallery__item"
                              data-mfp-src="//cdn.shopify.com/s/files/1/2616/9618/products/459925e694f2fa324caeba431b532952_13368988-bfd4-4622-b2fb-289390295170_1024x1024@2x.jpg?v=1598464414"
                            ></li>

                            <li
                              data-image-id="14521834209367"
                              class="gallery__item"
                              data-mfp-src="//cdn.shopify.com/s/files/1/2616/9618/products/b2529fd900726048f3ff85a9dd5305fa_f48a6541-6f40-4344-b525-c00288f6794a_1024x1024@2x.jpg?v=1598464415"
                            ></li>

                            <li
                              data-image-id="13070899478615"
                              class="gallery__item"
                              data-mfp-src="//cdn.shopify.com/s/files/1/2616/9618/products/SB_Halloween-2072_1024x1024@2x.jpg?v=1598464415"
                            ></li>
                          </ul>
                        </div>
                      </div>
                      <div class="grid__item post-large--one-half">
                        <h1 itemprop="name" class="SdevPrdTitle">
                          Surprise Me :
                        </h1>

                        <div
                          itemprop="offers"
                          itemscope=""
                          itemtype="http://schema.org/Offer"
                        >
                          <div class="product-single__prices">
                            <span id="PriceA11y" class="visually-hidden">
                              Regular price
                            </span>
                            <span
                              id="ProductPrice"
                              class="product-single__price"
                              itemprop="price"
                              content="29.99"
                            >
                              ₹ 2,999
                            </span>

                            <span
                              id="ComparePriceA11y"
                              class="visually-hidden"
                              aria-hidden="true"
                            >
                              Sale price
                            </span>
                            <s
                              id="ComparePrice"
                              class="product-single__sale-price hide"
                            ></s>
                          </div>

                          <input
                            type="hidden"
                            name="form_type"
                            value="product"
                          />

                          <div class="product-single__quantity">
                            <label for="Quantity">Quantity</label>
                            <br></br>
                            <div class="product-quantity-seloctor">
                              <input
                                type="button"
                                value="-"
                                class="qtyminus"
                                field="quantity"
                              />
                              <input
                                type="text"
                                id="Quantity"
                                name="quantity"
                                value="1"
                                min="1"
                                class="qty-text"
                                mm-min="1"
                                step="1"
                                mm-step="1"
                              />
                              <input
                                type="button"
                                value="+"
                                class="qtyplus"
                                field="quantity"
                              />
                            </div>
                          </div>
                          <div class="product-subscribe"></div>
                          <span
                            class="bold-ro__widget-loading"
                            data-widget-loading=""
                            style={{ display: "none" }}
                          >
                            <span class="bold-ro__loading-container">
                              <div
                                data-bold-widget-loading-icon=""
                                class="bold-ro__widget-loading-icon"
                              ></div>
                            </span>
                          </span>
                          <button
                            class="btn button bold-ro__custombutton-1967822176343 bold_hidden"
                            style={{ display: "none" }}
                            data-event-queue-button="1"
                          ></button>
                          <button
                            class="btn button bold-ro__custombutton-1967822176343 bold_clone"
                            style={{ display: "none" }}
                            data-event-queue-button="1"
                          ></button>
                          <button
                            type="submit"
                            name="add"
                            id="AddToCart"
                            class="btn AddToCart btn--initial cartbutton bold_hidden"
                            style={{ visibility: "visible", display: "none" }}
                            data-event-queue-button="0"
                          ></button>
                          {isNoUser ? (
                            <Link to={"/details"}>
                              <button
                                //type="submit"
                                //name="add"
                                //id="AddToCart"

                                class="btn AddToCart btn--initial cartbutton bold_clone"
                                style={{ visibility: "visible" }}
                                data-event-queue-button="0"
                              >
                                <span id="AddToCartText" class="AddToCartText">
                                  Buy now
                                </span>
                              </button>
                            </Link>
                          ) : (
                            <div>
                              <button
                                //type="submit"
                                //name="add"
                                //id="AddToCart"
                                ref={target}
                                onClick={() => setShow(!show)}
                                class="btn AddToCart btn--initial cartbutton bold_clone"
                                style={{ visibility: "visible" }}
                                data-event-queue-button="0"
                              >
                                Buy now not
                              </button>
                              <Overlay
                                target={target.current}
                                show={show}
                                placement="right"
                              >
                                {(props) => (
                                  <Tooltip id="overlay-example" {...props}>
                                    You have already purchased one of our
                                    product. You have to wait till your
                                    subscription ends to buy another pack.
                                  </Tooltip>
                                )}
                              </Overlay>
                            </div>
                          )}
                          {/* {isNoUser ? (
                                    <li>
                                      <Nav.Link onClick={signOut}>
                                        Sign Out
                                      </Nav.Link>
                                    </li>
                                  ) : (
                                    <li
                                      style={{
                                        backgroundColor:
                                          "rgba(0,0,0,.5) !important",
                                      }}
                                    >
                                      <Nav.Link>
                                        <Link to={"/login"}>Sign In</Link>
                                      </Nav.Link>
                                    </li>
                                  )} */}
                          {/* <Link to={"/details"}>
                              <button
                                //type="submit"
                                //name="add"
                                //id="AddToCart"

                                class="btn AddToCart btn--initial cartbutton bold_clone"
                                style={{ visibility: "visible" }}
                                data-event-queue-button="0"
                              >
                                <span id="AddToCartText" class="AddToCartText">
                                  Buy now
                                </span>
                              </button>
                            </Link> */}
                          {/* <div
                              class="bold_options bold_options_loaded"
                              data-product-id="1967822176343"
                            >
                              <div class="bold_option_product_title">
                                Gift Customizations - OPTIONAL
                              </div>
                              <div class="bold_option_set">
                                <div class="bold_option bold_option_textarea bold_option_hidden"></div>
                              </div>
                            </div> */}
                          <div
                            class="bold_add_to_orders"
                            style={{ display: "inline-block" }}
                          ></div>
                          {/* <div class="back-add-to-cart">
                              <a href="https://smartboxcompany.com/products/surprise">
                                &lt; Back to{" "}
                              </a>
                            </div> */}

                          <div
                            class="product-description rte"
                            itemprop="description"
                          >
                            <p>
                              <span style={{ color: "#99cc00" }}>
                                <strong>Description:</strong>
                              </span>{" "}
                              Get a surprise assortment of the newest, most
                              popular, unique items on the market!&nbsp; Perfect
                              for thrill-seekers and those who would rather not
                              be choosy.
                            </p>
                            <p>
                              Featuring premium quality products with the finest
                              ingredients that are both healthy and
                              delicious!&nbsp; This is a versatile mix of
                              top-sellers and hot new items not widely available
                              in stores yet.&nbsp; Send a fun, creative{" "}
                              <strong>gift</strong> for a birthday, employee
                              appreciation, or a simple thank-you to your
                              friends, family, or coworkers.&nbsp; Put your
                              thrill-seeking on autopilot!{" "}
                              <strong>
                                Subscribe &amp; Save{" "}
                                <span style={{ color: "#99cc00" }}>10%</span>
                              </strong>{" "}
                              on weekly or monthly deliveries for a pleaseant
                              surprise of the highest quality snacks.&nbsp; Send
                              to your family, your colleagues or anyone who
                              would enjoy this delicious, healthy variety of
                              snacks.
                              <br />
                              <span style={{ color: "#99cc00" }}>
                                <strong>
                                  <br />
                                  Brands included:
                                  <br />
                                  <br />
                                </strong>
                              </span>
                              It's a Surprise :<br />
                              <span style={{ color: "#99cc00" }}>
                                <strong>
                                  <br />
                                </strong>
                              </span>
                            </p>
                            <p>
                              <span style={{ color: "#99cc00" }}>
                                <strong>Estimated Item Quantity:</strong>
                              </span>
                              &nbsp; 16-19 snacks. Most of our snacks are
                              single-serve, item quantity varies because some
                              selections may come in a larger multi-serve size.
                              Flavors and selections rotate monthly.&nbsp;
                            </p>
                            <h3 style={{ textAlign: "center" }}>
                              <span style={{ color: "#99cc00" }}>
                                Bulk Ordering Available!
                              </span>
                            </h3>
                            <p>
                              Looking for an awesome gift to send your
                              employees? In need of corporate gifts for an event
                              or client? We offer fully customized corporate
                              gifting services! Call{" "}
                              <a href="tel:9047399100">904-739-9100</a> or email
                              our concierge at{" "}
                              <a href="mailto:express@smartboxcompany.com">
                                express@smartboxcompany.com
                              </a>
                              !
                            </p>
                            <p>
                              <div class="video-wrapper">
                                <iframe
                                  title=""
                                  src="./Surprise Me _) – SmartBox_files/cxU1r-SUky4.html"
                                  width="953"
                                  height="536"
                                  frameborder="0"
                                  allowfullscreen="allowfullscreen"
                                ></iframe>
                              </div>
                            </p>
                          </div>

                          <hr class="hr--clear hr--small" />
                          <h2 class="h4">Share this Product</h2>

                          <div
                            class="social-sharing normal"
                            data-permalink="https://smartboxcompany.com/products/surprise"
                          >
                            <a
                              href="https://www.facebook.com/sharer.php?u=https://smartboxcompany.com/products/surprise"
                              class="share-facebook"
                              title="Share on Facebook"
                            >
                              <span
                                class="icon icon-facebook"
                                aria-hidden="true"
                              ></span>
                              <span class="share-title" aria-hidden="true">
                                Share
                              </span>
                              <span class="visually-hidden">
                                Share on Facebook
                              </span>
                            </a>

                            <a
                              href="https://pinterest.com/pin/create/button/?url=https://smartboxcompany.com/products/surprise&amp;media=http://cdn.shopify.com/s/files/1/2616/9618/products/Box_Surprise_1024x1024.png?v=1598464408&amp;description=Surprise%20Me%20:)"
                              class="share-pinterest"
                              title="Pin on Pinterest"
                            >
                              <span
                                class="icon icon-pinterest"
                                aria-hidden="true"
                              ></span>
                              <span class="share-title" aria-hidden="true">
                                Pin it
                              </span>
                              <span class="visually-hidden">
                                Pin on Pinterest
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="hr--clear hr--small" />

                  <div class="grid-uniform grid-link__container">
                    <div class="grid__item post-large--one-quarter medium--one-half small--one-half"></div>

                    <div class="grid__item post-large--one-quarter medium--one-half small--one-half"></div>

                    <div class="grid__item post-large--one-quarter medium--one-half small--one-half"></div>

                    <div class="grid__item post-large--one-quarter medium--one-half small--one-half"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SurpriseMe;
