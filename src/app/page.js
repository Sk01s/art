"use client";
import { Suspense } from "react";
import Gallery from "../components/Gallery";
import Procces from "@/components/Procces";
import Link from "next/link";
import Loading from "./loading";
import Contact from "@/components/Contact";

export default function RootLayout({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <head>
        <title>Raouf Rifai</title>
        <meta name="description" content="Onepage Parallax Site" />
        <meta name="keywords" content="onepage, parallax" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="/bower_components/fontawesome/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="/bower_components/animate.css/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="/bower_components/minicolors/jquery.minicolors.css"
        />
        <link
          rel="stylesheet"
          href="/bower_components/slick.js/slick/slick.css"
        />
        <link
          rel="stylesheet"
          href="/bower_components/slick.js/slick/slick-theme.css"
        />
        <link
          rel="stylesheet"
          href="/bootstrap/dist/css/bootstrap-custom.min.css"
        />
        <link rel="stylesheet" href="/lib/linecons/style.css" />
        <link rel="stylesheet" href="/styles/style.min.css" />
        <link rel="stylesheet" href="/theme-custom.css" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="apple-touch-icon-152x152.png"
        />
      </head>
      <div className="page-border bottom colors-e background-solid">
        <a href="#top" className="hover-effect">
          To <span className="highlight">Top</span>
        </a>
      </div>
      <div className="page-border left colors-e background-solid">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/raouf.rifai?ref=br_rs"
              target="_blank"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/raouf_rifai/" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="page-border right colors-e background-solid"></div>
      <nav
        className="navbar navbar-default navbar-fixed-top page-transition colors-e background-solid"
        role="navigation"
        id="top-nav"
      >
        <div className="container">
          <div className="navbar-header">
            <Link
              className="menu-toggle navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              href=""
            >
              <span></span>
            </Link>
            <a className="navbar-brand" href="" style={{ color: "white" }}>
              Raouf Rifai
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link
                  href="#home"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                  className="hover-effect "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                  href="#about"
                  className="hover-effect "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="hover-effect "
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  Artwork
                </Link>
              </li>
              <li>
                <Link
                  href="#book"
                  className="hover-effect "
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="hover-effect "
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover-effect "
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul id="dot-scroll" className="colors-e background-solid">
        <li>
          <a href="#home">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#about">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#team">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#work" className="">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#book">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#process">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <span></span>
          </a>
        </li>
      </ul>
      <div
        className="overlay-window gallery-overlay colors-g background-95-g"
        data-overlay-zoom="#work .content"
      >
        <div className="overlay-control background-90-b">
          <a className="previos" href="#"></a>
          <a className="next" href="#"></a>
          <a className="cross" href="#"></a>
        </div>
        <div className="overlay-view"></div>
        <ul className="loader">
          <li className="background-highlight-e"></li>
          <li className="background-highlight-e"></li>
          <li className="background-highlight-e"></li>
        </ul>
      </div>
      <div className="overlay-window map-overlay colors-g background-95-g">
        <div className="overlay-control background-20-b">
          <a className="cross" href="#"></a>
        </div>
        <div className="overlay-view">
          <div
            className="map-canvas"
            data-latitude="42.487606"
            data-longitude="-71.115661"
            data-zoom="14"
          >
            <div
              className="map-marker"
              data-latitude="42.487606"
              data-longitude="-71.115661"
              data-text="Our awesome location"
            ></div>
            <div
              className="map-marker"
              data-latitude="42.485100"
              data-longitude="-71.113256"
              data-text="Our sales office"
            ></div>
          </div>
        </div>
      </div>
      <div className="overlay-window credits-overlay colors-g background-95-g">
        <div className="overlay-control background-90-b">
          <a className="cross" href="#"></a>
        </div>
      </div>
      <section id="home">
        <div className="view">
          <img
            alt=""
            className="bg"
            src="/images/placeholders/1920x1200-0.jpg"
          />
          <img alt="" className="bg" src="/images/placeholders/slider4.jpg" />
          <img
            alt=""
            className="bg"
            src="/images/placeholders/1920x1200-1.jpg"
          />
          <div className="content home-lucy full-size colors-c background-20">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="textillate highlight"
                    style={{ color: "#000000" }}
                    data-textillate-options="{loop:true, in:{effect:'flipInY', reverse:false}, out:{effect:'flipOutY', reverse:false}}"
                  >
                    <ul className="texts"></ul>
                  </div>
                  <h1 className="heading text-left">Raouf Rifai</h1>
                  <p
                    className="box border background-10-h"
                    style={{ fontSize: "1.2em" }}
                  >
                    My Art&apos;s main subject is Humanity; it is nourished by
                    the history of our civilization and our heritage. My work is
                    a mirror reflecting the reality of our Middle Eastern
                    society&apos;s transitions and evolution.
                  </p>
                  <div className="big-separator"></div>
                  <p>
                    <a
                      href="#about"
                      className="button background-90-d heading-d border-hard"
                    >
                      About the Artist
                    </a>
                    <a
                      href="#work"
                      className="button background-90-f heading-f border-hard"
                    >
                      The Artwork
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="view">
          <img
            alt=""
            className="bg"
            src="/images/placeholders/1920x1200-2.jpg"
          />
          <div className="content pane">
            <div className="container-fluid">
              <div className="row hidden-xs hidden-sm">
                <div className="col-md-4 colors-b">
                  <div className="row">
                    <div className="col-xs-12 banner-cell">
                      <h3 className="light-font-weight">Paintings </h3>
                      <p className="title"></p>
                    </div>
                    <div className="col-xs-12 success heading-b banner-cell">
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 colors-c">
                  <div className="row">
                    <div className="col-xs-12 banner-cell">
                      <h3 className="light-font-weight">
                        <span>Work on paper</span>
                      </h3>
                      <p className="title"></p>
                    </div>
                    <div className="col-xs-12 warning heading-c banner-cell">
                      <br />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 colors-d">
                  <div className="row">
                    <div className="col-xs-12 banner-cell">
                      <h3 className="light-font-weight">Installations </h3>
                      <p className="title"></p>
                    </div>
                    <div className="col-xs-12 info heading-d banner-cell">
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view">
          <div className="content colors-e background-solid"></div>
        </div>
        <div className="view" id="how-we-work" />
      </section>
      <section id="team">
        <div className="view">
          <div className="content colors-e background-solid"></div>
        </div>
        <div className="view" id="who-we-are">
          <div className="content pane">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 stretch-height pane">
                  <div className="view fluid-height ani">
                    <div className="content incut colors-d background-transparent">
                      <div className="position-middle-center text-center"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6  stretch-height pane">
                  <div className="view fluid-height">
                    <div className="content incut colors-h background-solid">
                      <div className="position-middle-center">
                        <h3 className="text-left">Raouf Rifai</h3>
                        <p className="subtitle highlight">
                          <strong>
                            Lebanese-born Raouf Rifai is one of the most
                            important figurative\abstract painters in the Middle
                            East today. <br /> Over the course of more than
                            thirty years, he has produced a vibrant, compelling
                            and expressive body of work in the range of media
                            that is widely collected and internationally
                            exhibited.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section id="book">
        <div className="view">
          <div className="content pane">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 stretch-height pane">
                  <div className="view fluid-height">
                    <img
                      alt=""
                      className="bg"
                      src="/images/placeholders/book.jpg"
                    />
                    <div className="content incut colors-d background-transparent"></div>
                  </div>
                </div>
                <div className="col-md-6  stretch-height pane">
                  <div className="view fluid-height">
                    <div className="content incut colors-h background-solid">
                      <div className="position-middle-center">
                        <h3 className="text-left">Raouf Rifai&apos;s Book</h3>
                        <p className="subtitle highlight">
                          <strong>
                            This book includes work in all media, paintings,
                            photographs, prints, drawings, sculptures, and
                            installations. From the early 1970s to the present,
                            the only book to cover Rifai’s entire career to
                            date.
                            <br />
                            Essays by Joseph Tarrab, who positions the artists
                            within the world of paintings, while discussing the
                            critical, emotional, human, social, and spiritual
                            nature of his art.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Procces />
      <section id="skills">
        <div className="view">
          <div className="content colors-e background-solid">
            <div className="container"></div>
          </div>
        </div>
      </section>
      <Contact /> ;
      <footer className="colors-g page-transition non-preloading">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4>Raouf Rifai</h4>
              <div className="footer-description">
                <p>SAVING THE BEAUTY OF THE WORLD</p>
              </div>
              <p className="social-links">
                <a
                  target="_blank"
                  href="https://www.facebook.com/raouf.rifai?ref=br_rs"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/raouf_rifai/"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </p>
            </div>

            <div className="col-md-3">
              <h5></h5>
            </div>
          </div>
        </div>
        <div className="bottom text-center background-5-b">
          © 2019 All Rights Reserved. Raouf Rifai . Developed and managed by{" "}
          <a
            href="https://www.lumbercode.com"
            className="open-overlay-window heading"
            data-overlay-window=".credits-overlay"
          >
            LumberCode.
          </a>
        </div>
      </footer>
      <script src="/bower_components/less.js/dist/less.min.js" async></script>
      <script src="/bower_components/jquery/dist/jquery.min.js" async></script>
      <script src="/bootstrap/dist/js/bootstrap.min.js" async></script>
      {/* <script src="/lib/SmoothScroll-1.2.1/SmoothScroll.js"></script> */}
      <script
        src="/bower_components/jquery-cookie/jquery.cookie.js"
        async
      ></script>
      {/* <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script> */}
      <script
        src="/bower_components/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.min.js"
        async
      ></script>
      <script
        src="/bower_components/minicolors/jquery.minicolors.min.js"
        async
      ></script>
      {/* <script src="/bower_components/slick.js/slick/slick.min.js"></script> */}
      <script
        src="/bower_components/shufflejs/dist/jquery.shuffle.min.js"
        async
      ></script>
      <script
        src="/bower_components/textillate/assets/jquery.lettering.js"
        async
      ></script>
      <script
        src="/bower_components/textillate/assets/jquery.fittext.js"
        async
      ></script>
      <script
        src="/bower_components/textillate/jquery.textillate.js"
        async
      ></script>
      <script src="/lib/prism/prism.js" async></script>
    </Suspense>
  );
}
