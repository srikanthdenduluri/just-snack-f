import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="shopify-section-header" class="shopify-section">
      {/* /*================= If logo is above navigation ================== */
      /*============ If logo is on the same line as navigation ============ */}
      <div data-section-id="header" data-section-type="header-section">
        <div class="header-bar wide--hide xlarge--hide xlarge-down--show">
          <div class="wrapper">
            <div class="grid">
              <div class="grid__item one-quarter">
                <a
                  class="logo__image-mobile-link"
                  href="https://smartboxcompany.com/"
                  itemprop="url"
                >
                  <img
                    class="logo__image-mobile"
                    src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/color-upgrade-39_80x.png"
                    alt="SmartBox"
                  ></img>
                </a>
              </div>
              <div class="grid__item three-quarters">
                <div class="mobile-icons clearfix">
                  <div class="mobile-nav-social">
                    <ul class="inline-list social-icons">
                      <li>
                        <a
                          class="icon-fallback-text"
                          href="https://www.instagram.com/lazy.people.memes/"
                          title="SmartBox on Instagram"
                        >
                          <span
                            class="icon icon-instagram"
                            aria-hidden="true"
                          ></span>
                          <span class="fallback-text">Instagram</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mobile_nav">
                    <img
                      src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/hamburger.png"
                      alt="hamburger"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="mobile-sidebar" class="sidenav">
            <span class="mobile-nav-close">×</span>
            <div class="sidebar-logo">
              <img
                src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/logo_menu.png"
                alt=""
              ></img>
            </div>
            <nav role="navigation">
              <ul id="xMobileNav" class="mobile-nav">
                {/* <li class="mobile-nav__link" aria-haspopup="true">
                  <a
                    href="https://smartboxcompany.com/collections"
                    class="mobile-nav__sublist-trigger"
                    aria-controls="MobileNav-Parent-1"
                    aria-expanded="false"
                  >
                    Shop
                    <span
                      class="icon-fallback-text mobile-nav__sublist-expand"
                      aria-hidden="true"
                    >
                      <span class="icon icon-plus" aria-hidden="true"></span>
                      <span class="fallback-text">+</span>
                    </span>
                    <span
                      class="icon-fallback-text mobile-nav__sublist-contract"
                      aria-hidden="true"
                    >
                      <span class="icon icon-minus" aria-hidden="true"></span>
                      <span class="fallback-text">-</span>
                    </span>
                  </a>
                  <ul id="MobileNav-Parent-1" class="mobile-nav__sublist">
                    <li class="mobile-nav__sublist-link">
                      <a href="https://smartboxcompany.com/collections/coffee-tea">
                        NEW! Coffee + Tea and samosa
                      </a>
                    </li>

                    <li class="mobile-nav__sublist-link">
                      <a href="https://smartboxcompany.com/collections/smartbox-express">
                        Snack Boxes
                      </a>
                    </li>

                    <li class="mobile-nav__sublist-link">
                      <a
                        href="https://smartboxcompany.com/collections"
                        class="mobile-nav__sublist-trigger"
                        aria-controls="MobileNav-Child-1-3"
                        aria-expanded="false"
                      >
                        Snack Collections
                        <span
                          class="icon-fallback-text mobile-nav__sublist-expand"
                          aria-hidden="true"
                        >
                          <span
                            class="icon icon-plus"
                            aria-hidden="true"
                          ></span>
                          <span class="fallback-text">+</span>
                        </span>
                        <span
                          class="icon-fallback-text mobile-nav__sublist-contract"
                          aria-hidden="true"
                        >
                          <span
                            class="icon icon-minus"
                            aria-hidden="true"
                          ></span>
                          <span class="fallback-text">-</span>
                        </span>
                      </a>
                      <ul
                        id="MobileNav-Child-1-3"
                        class="mobile-nav__sublist mobile-nav__sublist--grandchilds"
                      >
                        <li class="mobile-nav__sublist-link">
                          <a href="https://smartboxcompany.com/collections/bars">
                            Bars
                          </a>
                        </li>

                        <li class="mobile-nav__sublist-link">
                          <a href="https://smartboxcompany.com/collections/chips-popcorn-crackers">
                            Chips + Popcorn + Crackers
                          </a>
                        </li>

                        <li class="mobile-nav__sublist-link">
                          <a href="https://smartboxcompany.com/collections/cookies-sweets">
                            Cookies + Sweets
                          </a>
                        </li>

                        <li class="mobile-nav__sublist-link">
                          <a href="https://smartboxcompany.com/collections/candy">
                            Chocolate + Candy
                          </a>
                        </li>

                        <li class="mobile-nav__sublist-link">
                          <a href="https://smartboxcompany.com/collections/jerky">
                            Jerky
                          </a>
                        </li>

                        <li class="mobile-nav__sublist-link">
                          <a href="https://smartboxcompany.com/collections/trail-mixes-granola">
                            Trail Mixes + Granola
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="mobile-nav__sublist-link">
                      <a href="https://smartboxcompany.com/collections/protein-fitness-energy">
                        Protein + Fitness + Energy
                      </a>
                    </li>

                    <li class="mobile-nav__sublist-link">
                      <a href="https://smartboxcompany.com/collections/gluten-free">
                        Gluten Free
                      </a>
                    </li>

                    <li class="mobile-nav__sublist-link">
                      <a href="https://smartboxcompany.com/collections/vegan">
                        Vegan
                      </a>
                    </li>

                    <li class="mobile-nav__sublist-link">
                      <a href="https://smartboxcompany.com/collections/keto">
                        KETO
                      </a>
                    </li>

                    <li class="mobile-nav__sublist-link">
                      <a href="https://smartboxcompany.com/collections/for-the-kids">
                        For The Kids
                      </a>
                    </li>
                  </ul>
                </li> */}

                <li class="mobile-nav__link" aria-haspopup="true">
                  <a
                    href="https://smartboxcompany.com/collections/smartbox-express"
                    class="mobile-nav__sublist-trigger"
                    aria-controls="MobileNav-Parent-2"
                    aria-expanded="false"
                  >
                    Subscribe
                    <span
                      class="icon-fallback-text mobile-nav__sublist-expand"
                      aria-hidden="true"
                    >
                      <span class="icon icon-plus" aria-hidden="true"></span>
                      <span class="fallback-text">+</span>
                    </span>
                    <span
                      class="icon-fallback-text mobile-nav__sublist-contract"
                      aria-hidden="true"
                    >
                      <span class="icon icon-minus" aria-hidden="true"></span>
                      <span class="fallback-text">-</span>
                    </span>
                  </a>
                  <ul id="MobileNav-Parent-2" class="mobile-nav__sublist">
                    <li class="mobile-nav__sublist-link ">
                      <a
                        href="https://smartboxcompany.com/collections/smartbox-express"
                        class="site-nav__link"
                      >
                        All <span class="visually-hidden">Subscribe</span>
                      </a>
                    </li>

                    <li class="mobile-nav__sublist-link">
                      <a href="https://smartboxcompany.com/collections/smartbox-express">
                        Snack Box Themes
                      </a>
                    </li>

                    <li class="mobile-nav__sublist-link">
                      <a href="https://smartboxcompany.com/collections">
                        Build your Own!
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="mobile-nav__link" aria-haspopup="true">
                  <a
                    href="https://smartboxcompany.com/pages/about-us"
                    class="mobile-nav__sublist-trigger"
                    aria-controls="MobileNav-Parent-4"
                    aria-expanded="false"
                  >
                    Our Story
                    <span
                      class="icon-fallback-text mobile-nav__sublist-expand"
                      aria-hidden="true"
                    >
                      <span class="icon icon-plus" aria-hidden="true"></span>
                      <span class="fallback-text">+</span>
                    </span>
                    <span
                      class="icon-fallback-text mobile-nav__sublist-contract"
                      aria-hidden="true"
                    >
                      <span class="icon icon-minus" aria-hidden="true"></span>
                      <span class="fallback-text">-</span>
                    </span>
                  </a>
                  <ul id="MobileNav-Parent-4" class="mobile-nav__sublist">
                    <li class="mobile-nav__sublist-link">
                      <a href="https://smartboxcompany.com/pages/about-us">
                        About Us
                      </a>
                    </li>

                    <li class="mobile-nav__sublist-link">
                      <a href="https://smartboxcompany.com/blogs/news">Blog</a>
                    </li>

                    <li class="mobile-nav__sublist-link">
                      <a href="https://smartboxcompany.com/pages/smartbox-faqs">
                        Frequently Asked Questions
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="mobile-nav__link">
                  <a
                    href="https://smartboxcompany.com/pages/contact"
                    class="mobile-nav"
                  >
                    Contact
                  </a>
                </li>

                <li class="mobile-nav__link">
                  <a
                    href="https://smartboxcompany.com/account/login"
                    id="customer_login_link"
                  >
                    Log in
                  </a>
                </li>
                <li class="mobile-nav__link">
                  <a
                    href="https://smartboxcompany.com/account/register"
                    id="customer_register_link"
                  >
                    Create account
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <header class="site-header xlarge-down--hide" role="banner">
          <div class="wrapper site-header-wrapper">
            <div class="grid--full post-large--display-table">
              <div class="grid__item post-large--one-fifth post-large--display-table-cell">
                <h1
                  class="site-header__logo"
                  itemscope=""
                  itemtype="http://schema.org/Organization"
                >
                  <noscript>
                    <div class="logo__image-wrapper">
                      <img
                        src="//cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_120x.png?v=1573177886"
                        alt="SmartBox"
                      />
                    </div>
                  </noscript>
                  <div class="logo__image-wrapper supports-js">
                    <a
                      href="https://smartboxcompany.com/"
                      itemprop="url"
                      //   style={{paddingTop:99.79757085020242%}}
                    >
                      <img
                        class="logo__image lazyautosizes lazyloaded"
                        src="./Healthy Snacks Delivered to You _ Corporate Gifts _ Subscription Box – SmartBox_files/color-upgrade-39_300x300.png"
                        data-widths="[120, 180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048]"
                        data-aspectratio="1.002028397565923"
                        data-sizes="auto"
                        alt="SmartBox"
                        itemprop="logo"
                        data-srcset="//cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_120x.png?v=1573177886 120w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_180x.png?v=1573177886 180w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_360x.png?v=1573177886 360w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_540x.png?v=1573177886 540w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_720x.png?v=1573177886 720w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_900x.png?v=1573177886 900w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_1080x.png?v=1573177886 1080w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_1296x.png?v=1573177886 1296w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_1512x.png?v=1573177886 1512w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_1728x.png?v=1573177886 1728w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_1944x.png?v=1573177886 1944w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_2048x.png?v=1573177886 2048w"
                        sizes="120px"
                        srcset="//cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_120x.png?v=1573177886 120w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_180x.png?v=1573177886 180w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_360x.png?v=1573177886 360w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_540x.png?v=1573177886 540w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_720x.png?v=1573177886 720w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_900x.png?v=1573177886 900w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_1080x.png?v=1573177886 1080w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_1296x.png?v=1573177886 1296w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_1512x.png?v=1573177886 1512w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_1728x.png?v=1573177886 1728w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_1944x.png?v=1573177886 1944w, //cdn.shopify.com/s/files/1/2616/9618/files/color-upgrade-39_2048x.png?v=1573177886 2048w"
                      ></img>
                    </a>
                  </div>
                </h1>
              </div>
              <div class="grid__item post-large--four-fifths post-large--display-table-cell">
                <div class="main-nav-social">
                  <ul class="inline-list social-icons">
                    <li>
                      <a
                        class="icon-fallback-text"
                        href="https://www.instagram.com/lazy.people.memes/"
                        title="SmartBox on Instagram"
                      >
                        <span
                          class="icon icon-instagram"
                          aria-hidden="true"
                        ></span>
                        <span class="fallback-text">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="site-main-nav">
                  <nav>
                    <ul class="site-nav" id="AccessibleNav">
                      {/* <li class="site-nav--has-dropdown " aria-haspopup="true">
                        <a
                          href="https://smartboxcompany.com/collections"
                          class="site-nav__link"
                          data-meganav-type="parent"
                          aria-controls="MenuParent-1"
                          aria-expanded="false"
                        >
                          Shop
                          <span
                            class="icon icon-arrow-down"
                            aria-hidden="true"
                          ></span>
                        </a>
                        <ul
                          id="MenuParent-1"
                          class="site-nav__dropdown site-nav--has-grandchildren"
                          data-meganav-dropdown=""
                        >
                          <li>
                            <a
                              href="https://smartboxcompany.com/collections/coffee-tea"
                              class="site-nav__link"
                              data-meganav-type="child"
                              tabindex="-1"
                            >
                              NEW! Coffee + Teas and samosa
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://smartboxcompany.com/collections/smartbox-express"
                              class="site-nav__link"
                              data-meganav-type="child"
                              tabindex="-1"
                            >
                              Snack Boxes
                            </a>
                          </li>

                          <li
                            class="site-nav--has-dropdown site-nav--has-dropdown-grandchild "
                            aria-haspopup="true"
                          >
                            <a
                              href="https://smartboxcompany.com/collections"
                              class="site-nav__link prevent_link"
                              aria-controls="MenuChildren-1-3"
                              data-meganav-type="parent"
                              tabindex="-1"
                            >
                              Snack Collections
                              <span
                                class="icon icon-arrow-down"
                                aria-hidden="true"
                              ></span>
                            </a>
                            <ul
                              id="MenuChildren-1-3"
                              class="site-nav__dropdown-grandchild"
                              data-meganav-dropdown=""
                            >
                              <li>
                                <a
                                  href="https://smartboxcompany.com/collections/bars"
                                  class="site-nav__link"
                                  data-meganav-type="child"
                                  tabindex="-1"
                                >
                                  Bars
                                </a>
                              </li>

                              <li>
                                <a
                                  href="https://smartboxcompany.com/collections/chips-popcorn-crackers"
                                  class="site-nav__link"
                                  data-meganav-type="child"
                                  tabindex="-1"
                                >
                                  Chips + Popcorn + Crackers
                                </a>
                              </li>

                              <li>
                                <a
                                  href="https://smartboxcompany.com/collections/cookies-sweets"
                                  class="site-nav__link"
                                  data-meganav-type="child"
                                  tabindex="-1"
                                >
                                  Cookies + Sweets
                                </a>
                              </li>

                              <li>
                                <a
                                  href="https://smartboxcompany.com/collections/candy"
                                  class="site-nav__link"
                                  data-meganav-type="child"
                                  tabindex="-1"
                                >
                                  Chocolate + Candy
                                </a>
                              </li>

                              <li>
                                <a
                                  href="https://smartboxcompany.com/collections/jerky"
                                  class="site-nav__link"
                                  data-meganav-type="child"
                                  tabindex="-1"
                                >
                                  Jerky
                                </a>
                              </li>

                              <li>
                                <a
                                  href="https://smartboxcompany.com/collections/trail-mixes-granola"
                                  class="site-nav__link"
                                  data-meganav-type="child"
                                  tabindex="-1"
                                >
                                  Trail Mixes + Granola
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a
                              href="https://smartboxcompany.com/collections/protein-fitness-energy"
                              class="site-nav__link"
                              data-meganav-type="child"
                              tabindex="-1"
                            >
                              Protein + Fitness + Energy
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://smartboxcompany.com/collections/gluten-free"
                              class="site-nav__link"
                              data-meganav-type="child"
                              tabindex="-1"
                            >
                              Gluten Free
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://smartboxcompany.com/collections/vegan"
                              class="site-nav__link"
                              data-meganav-type="child"
                              tabindex="-1"
                            >
                              Vegan
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://smartboxcompany.com/collections/keto"
                              class="site-nav__link"
                              data-meganav-type="child"
                              tabindex="-1"
                            >
                              KETO
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://smartboxcompany.com/collections/for-the-kids"
                              class="site-nav__link"
                              data-meganav-type="child"
                              tabindex="-1"
                            >
                              For The Kids
                            </a>
                          </li>
                        </ul>
                      </li> */}

                      <li class="site-nav--has-dropdown" aria-haspopup="true">
                        <a
                          //href="https://smartboxcompany.com/collections/smartbox-express"
                          class="site-nav__link"
                          data-meganav-type="parent"
                          aria-controls="MenuParent-2"
                          aria-expanded="false"
                        >
                          Subscribe
                          <span
                            class="icon icon-arrow-down"
                            aria-hidden="true"
                          ></span>
                        </a>
                        <ul
                          id="MenuParent-2"
                          class="site-nav__dropdown"
                          data-meganav-dropdown=""
                        >
                          <Link to={"/product1"}>
                            <li>
                              <a
                                //href="https://smartboxcompany.com/collections/smartbox-express"
                                class="site-nav__link"
                                data-meganav-type="child"
                                tabindex="-1"
                              >
                                Surprise Me
                              </a>
                            </li>
                          </Link>

                          <li>
                            <a
                              href="https://smartboxcompany.com/collections"
                              class="site-nav__link"
                              data-meganav-type="child"
                              tabindex="-1"
                            >
                              Build your Own!
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="site-nav--has-dropdown" aria-haspopup="true">
                        <a
                          href="https://smartboxcompany.com/pages/about-us"
                          class="site-nav__link"
                          data-meganav-type="parent"
                          aria-controls="MenuParent-4"
                          aria-expanded="false"
                        >
                          Our Story
                          <span
                            class="icon icon-arrow-down"
                            aria-hidden="true"
                          ></span>
                        </a>
                        <ul
                          id="MenuParent-4"
                          class="site-nav__dropdown"
                          data-meganav-dropdown=""
                        >
                          <li>
                            <a
                              href="https://smartboxcompany.com/pages/about-us"
                              class="site-nav__link"
                              data-meganav-type="child"
                              tabindex="-1"
                            >
                              About Us
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://smartboxcompany.com/blogs/news"
                              class="site-nav__link"
                              data-meganav-type="child"
                              tabindex="-1"
                            >
                              Blog
                            </a>
                          </li>

                          {/* <li>
                            <a
                              href="https://smartboxcompany.com/pages/smartbox-faqs"
                              class="site-nav__link"
                              data-meganav-type="child"
                              tabindex="-1"
                            >
                              Frequently Asked Questions
                            </a>
                          </li> */}
                        </ul>
                      </li>

                      <li>
                        <a
                          href="https://smartbox-express.com/account/login"
                          class="site-nav__link"
                          data-meganav-type="child"
                        >
                          Login
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://smartboxcompany.com/pages/contact"
                          class="site-nav__link"
                          data-meganav-type="child"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default NavBar;
