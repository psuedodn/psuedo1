import React, { useEffect, useState } from 'react';

import Logo from '../assets/logo/logo.png';
import Cup from '../assets/cup.png';
import Apostrophe from '../assets/apostrophe.png';
import CupRight from '../assets/cup_right.png';
import CombinedShape from '../assets/CombinedShape.png';
import Controller from '../assets/controller.png';
import ThreeCircle from '../assets/threeCircle.png';
import TwoCircle from '../assets/twoCircle.png';
import FirstImg from '../assets/1.png';
import SecondImg from '../assets/2.png';
import ThirdImg from '../assets/3.png';
import FourthImg from '../assets/4.png';
import FifthImg from '../assets/5.png';
import SixthImg from '../assets/6.png';
import SeventhImg from '../assets/7.png';
import EigthImg from '../assets/8.png';

const WhyGazo = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };
  return (
    <div>
      <main
        className="main-page-wrapper spybody"
        data-spy="scroll"
        data-target=".navbar-example2"
        data-offset="150"
      >
        <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
          <div className="header-wrapper m--0 rn-popup-mobile-menu row align-items-center">
            <div className="col-lg-2 col-sm-4">
              <div className="header-left">
                <div className="logo">
                  <a href="index.html">
                    <img src={Logo} alt="logo" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-sm-8">
              <div className="header-center">
                <nav id="sideNav" className="mainmenu-nav navbar-example2">
                  {/* <ul className="primary-menu nav nav-pills">
                    <li className="nav-item">
                      <a
                        className="nav-link smoth-animation active"
                        href="#home"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smoth-animation" href="#">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smoth-animation" href="#">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link smoth-animation" href="#">
                        Clients
                      </a>
                    </li>
                  </ul> */}
                </nav>

                {/* <div className="header-right contactAlign">
                  <a
                    className="rn-btn no-shadow btn-theme"
                    target="_blank"
                    href="#"
                  >
                    <span>Contact Us</span>
                  </a>
                  <i
                    id="menuBtn"
                    className="feather-menu humberger-menu d-block d-xl-none"
                  ></i>
                  <div className="close-menu d-block">
                    <span className="closeTrigger">
                      <i data-feather="x"></i>
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </header>

        <div className="popup-mobile-menu">
          <div className="inner">
            <div className="menu-top">
              <div className="menu-header">
                <a className="logo" href="index.html">
                  <img src={Logo} alt="Personal Portfolio" />
                </a>
                <div className="close-button">
                  <button className="close-menu-activation close">
                    <i data-feather="x"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="content">
              <ul className="primary-menu nav nav-pills">
                <li className="nav-item">
                  {/* <a className="nav-link smoth-animation active" href="#home">
                    FAQ's
                  </a> */}
                </li>
                <li className="nav-item">
                  <a href="https://discord.gg/rtj2Gzx2b7" target='_blank' className="nav-link smoth-animation">
                    Discord
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://t.me/finofinance" target='_blank' className="nav-link smoth-animation">
                    Telegram
                  </a>
                </li>
              </ul>

              <div className="social-share-style-1 mt--40">
                {/* <span className="title">find with me</span>
                <ul className="social-share d-flex liststyle">
                  <li className="facebook">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="instagram">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-instagram"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </li>
                  <li className="linkedin">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </li>
                </ul> */}
              </div>

            </div>
          </div>
        </div>

        <div
          id="about"
          className="rn-about-area rewardsSecAlign mt_sm--30 mt_lg--30 bg_white"
        >
          <div className="col-12 mt_sm100 text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-xl-6 col-sm-12 col-12 ">
                <img src={Cup} alt="logo" />
              </div>
              <div className="col-lg-6 col-xl-4 col-sm-12 col-12 ">
                <div className="section-title">
                  <h5 className="title color_blk finoRewards">
                    <sup className="supsetAlign">
                      <img src={Apostrophe} alt="" />
                    </sup>
                    Fino rewards holders with automatic compounding interest,
                    increasing their Fino holdings over time.
                  </h5>
                </div>
              </div>
              <div className="col-lg-6 col-xl-2 col-sm-12 col-12 d-none d-sm-none d-lg-none d-xl-block">
                <img src={CupRight} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div id="service" className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  data-aos-once="true"
                  className="section-title text-left"
                >
                  <h2 className="title color_blk">How It Works</h2>
                </div>
              </div>
            </div>
            <div className="row row--25 mt_md--10 mt_sm--10 justify-content-center">
              <div className="col-xl-9 col-lg-12 col-sm-12 col-md-12">
                <div className="row">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="col-lg-6 col-xl-4 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
                  >
                    <div className="rn-service">
                      <div className="inner">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu"
                          >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                          </svg>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="#">Treasury Revenue Buy & Sell Fees</a>
                          </h4>
                          <p className="description">
                            A portion of the buy and sell fees help sustain the
                            Fino Treasury revenue. 5% of the trading volume is
                            redirected to the RFV, thus helping control the Fino
                            staking protocol distribution.
                          </p>
                          <a className="read-more-button" href="#">
                            <i className="feather-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <a className="over-link" href="#"></a>
                    </div>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    data-aos-once="true"
                    className="col-lg-6 col-xl-4  col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
                  >
                    <div className="rn-service">
                      <div className="inner">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-book-open"
                          >
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                          </svg>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="#">Treasury Growth Fino Treasury</a>
                          </h4>
                          <p className="description">
                            Treasury inflow increases the Fino Treasury balance
                            and backs outstanding $FINO tokens.
                          </p>
                          <a className="read-more-button" href="#">
                            <i className="feather-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <a className="over-link" href="#"></a>
                    </div>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="500"
                    data-aos-once="true"
                    className="col-lg-6 col-xl-4  col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
                  >
                    <div className="rn-service">
                      <div className="inner">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-tv"
                          >
                            <rect
                              x="2"
                              y="7"
                              width="20"
                              height="15"
                              rx="2"
                              ry="2"
                            ></rect>
                            <polyline points="17 2 12 7 7 2"></polyline>
                          </svg>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="#">Staking Rewards FINO Token</a>
                          </h4>
                          <p className="description">
                            Compounds automatically with a treasury-backed
                            currency with intrinsic value.
                          </p>
                          <a className="read-more-button" href="#">
                            <i className="feather-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <a className="over-link" href="#"></a>
                    </div>
                  </div>
                  <div className="CombinedShape">
                    <img src={CombinedShape} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="rn-about-area rn-section-gap bg_black">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-12 col-sm-12 col-md-12">
                <div className="row">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="col-xl-6 col-lg-12 col-sm-12 col-md-12
                    aos-init aos-animate"
                  >
                    <div className="ThreeCircleAlign">
                      <img src={ThreeCircle} alt="" />
                    </div>
                    <div className="contant firstInNever">
                      <div className="section-title text-left">
                        <span className="subtitle color_white">
                          First In Never Out Game
                        </span>
                        <h2 className="title">F.I.N.O Game</h2>
                      </div>
                      <p className="discription color_white">
                        F.I.N.O Game is the new Fino FAP based project that
                        allows Fino token holders to generate even more rewards.
                        Simple, Powerful and Proven.
                      </p>
                      <div className="homeUlList mt--50">
                        <ul>
                          <li className="description color_white">
                            <p className="color_white">
                              Your Fino Tokens Give You Access to F.I.N.O Game.
                            </p>
                          </li>
                          <li className="description color_white">
                            <p className="color_white">
                              Easy to Enter Easy to Play
                            </p>
                          </li>
                          <li className="description  color_white">
                            <p className="color_white">
                              Multiple Big Winners Each Week
                            </p>
                          </li>
                          <li className="description color_white">
                            <p className="color_white">
                              No One Loses Their Initial Deposit
                            </p>
                          </li>
                          <li className="description  color_white">
                            <p className=" color_white">
                              Even if you don’t win, keep all of your money!
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12 col-sm-12 col-md-12">
                    <div className="controllerDotAlign">
                      <img src={CombinedShape} alt="" />
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="100"
                      data-aos-once="true"
                      className="text-center aos-init aos-animate"
                    >
                      <div className="thumbnail">
                        <img src={Controller} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="rn-about-area rn-section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-9 col-sm-12">
                <div className="CombinedShape2">
                  <img src={CombinedShape} alt="" />
                </div>
                <div className="row justify-content-center">
                  <h2 className="title color_blk">How much can I earn?</h2>
                </div>
                <div className="row bg_black padd_5Per bor_radius">
                  <div className="col-12 ourprod1">
                    <div className="section-title text-left text-center">
                      <div>
                        <p className="discription color_white arePowered">
                          Our products are powered by DeFi and are designed to
                          help you effortlessly generate cash flow from your
                          crypto.
                        </p>
                        <div
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay="100"
                          data-aos-once="true"
                          className="text-center aos-init aos-animate section-title"
                        >
                          <h5 className="title m-sm-0 color_yellow">
                            At the end of the year and with $1000 USD of $FINO
                            invested.
                          </h5>
                        </div>
                        <div
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay="100"
                          data-aos-once="true"
                          className="text-center aos-init aos-animate section-title"
                        >
                          <div className="btm_align_earn">
                            <h5 className="title m-sm-0 color_yellow">
                              You can earn up to $2,114,650.20 USD of $FINO at
                              211465.20% APY*.
                            </h5>
                          </div>
                          <div className="  mt--20 earningsAreCal">
                            <p className="discription mt-sm-5 color_white">
                              Earnings are calculated in a scenario where the
                              RFV sustains the rebase reward for 365 days.
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
        </div>

        <div id="service" className="rn-service-area rn-section-gap bg_white">
          <div className="container">

          <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12 align-self-center">
                    <div className="contant">
                      <div className="section-title text-left text-center mb--10">
                        <h2 className="title tekno mb--30 rn-about-area">
                          Tokenomics
                        </h2>
                        <div className="contant">
                          <p className="discription color_blk">
                            $FINO is a BEP-20 token with an elastic supply that
                            rewards holders using a positive rebase formula.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-6 col-sm-12 col-md-12 ">
                <div className="row row--25 mt_md--10 mt_sm--10">
                  <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12  ">
                    <div className="TwoCircleAlign">
                      <img src={TwoCircle} alt="" />
                    </div>
                    <div className="row">
                      <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        data-aos-once="true"
                        className="col-xl-6 col-lg-12 col-sm-12 col-md-12 mt--50 mt_md--30 mt_sm--30"
                      >
                        <div className="rn-service">
                          <div className="inner">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-menu"
                              >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                              </svg>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="#">Automatic LP</a>
                              </h4>
                              <p className="description">
                                {' '}
                                5% of the trading fees return to the liquidity
                                ensuring $FINO's increasing collateral value.
                              </p>
                            </div>
                          </div>
                          <a className="over-link" href="#"></a>
                        </div>
                      </div>

                      <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="300"
                        data-aos-once="true"
                        className=" col-xl-6 col-lg-12 col-sm-12 col-md-12 mt--50 mt_md--30 mt_sm--30"
                      >
                        <div className="rn-service">
                          <div className="inner">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-book-open"
                              >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                              </svg>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="#">Treasury</a>
                              </h4>
                              <p className="description">
                                2% of the purchases and 4% of the sales go
                                directly to the treasury which supports the
                                treasury.
                              </p>
                            </div>
                          </div>
                          <a className="over-link" href="#"></a>
                        </div>
                      </div>

                      <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="500"
                        data-aos-once="true"
                        className="col-xl-6 col-lg-12 col-sm-12 col-md-12 mt--50 mt_md--30 mt_sm--30"
                      >
                        <div className="rn-service">
                          <div className="inner">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-tv"
                              >
                                <rect
                                  x="2"
                                  y="7"
                                  width="20"
                                  height="15"
                                  rx="2"
                                  ry="2"
                                ></rect>
                                <polyline points="17 2 12 7 7 2"></polyline>
                              </svg>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="#">Risk Free Value</a>
                              </h4>
                              <p className="description">
                                5% of the buy and 8% of the sell fees are
                                redirected to the RFV fund which helps sustain
                                and back the staking rewards provided by the
                                positive rebase.
                              </p>
                            </div>
                          </div>
                          <a className="over-link" href="#"></a>
                        </div>
                      </div>

                      <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        data-aos-once="true"
                        className="col-xl-6 col-lg-12 col-sm-12 col-md-12 mt--50 mt_md--30 mt_sm--30"
                      >
                        <div className="rn-service">
                          <div className="inner">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-codepen"
                              >
                                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                                <line x1="12" y1="2" x2="12" y2="8.5"></line>
                              </svg>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="#">Automatic Burn</a>
                              </h4>
                              <p className="description">
                                {' '}
                                1% of the transaction fee will be burned
                                automatically on every transaction to control
                                the Inflationin overtime.
                              </p>
                            </div>
                          </div>
                          <a className="over-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-xl-3 col-lg-12 col-sm-12 col-md-12 align-self-center">
                    <div className="contant">
                      <div className="section-title text-left text-center mb--10">
                        <h2 className="title tekno mb--30 rn-about-area">
                          Tokenomics
                        </h2>
                        <div className="contant">
                          <p className="discription color_blk">
                            $FINO is a BEP-20 token with an elastic supply that
                            rewards holders using a positive rebase formula.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
            {/*    */}
             
            <div className="row mt--50 justify-content-center">
            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                  'https://t.me/finofinance',
                                  '_blank'
                                );
                              }}
                              className="glow-on-hover"
                            >
                              Telegram Official Support
                            </button>
                 {/* <a href="https://t.me/finofinance">Telegram</a> */}
            </div>

            <div className="row mt--50 justify-content-center">
              <div className="col-xl-6 col-lg-12 col-sm-12 col-md-12 ">
                <ul className="flagList">
                  <li>
                    <span className="flag-icon flag-icon-chn"></span>
                  </li>
                  <li>
                    <span className="flag-icon flag-icon-sau"></span>
                  </li>
                  <li>
                    <span className="flag-icon flag-icon-phl"></span>
                  </li>
                  <li>
                    <span className="flag-icon flag-icon-deu"></span>
                  </li>
                  <li>
                    <span className="flag-icon flag-icon-ita"></span>
                  </li>
                  <li>
                    <span className="flag-icon flag-icon-ind"></span>
                  </li>
                  <li>
                    <span className="flag-icon flag-icon-cat"></span>
                  </li>
                  <li>
                    <span className="flag-icon flag-icon-idn"></span>
                  </li>
                  <li>
                    <span className="flag-icon flag-icon-nld"></span>
                  </li>
                  <li>
                    <span className="flag-icon flag-icon-caf"></span>
                  </li>
                  <li>
                    <span className="flag-icon flag-icon-bgd"></span>
                  </li>
                  <li>
                    <span className="flag-icon flag-icon-vnm"></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row mt--50 justify-content-center">
                  <h2>Fino DAO Influencers</h2>
            </div>

            <div className="row mt--50 justify-content-center">
              <div className="col-xl-6 col-lg-12 col-sm-12 col-md-12 ">
                <div className="carousel carousel-main" data-flickity>
                  <div className="carousel-cell flex-video">
                    <iframe
                      src="https://www.youtube.com/embed/_EOBiyTf5XA"
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div className="carousel-cell flex-video">
                    <iframe
                      src="https://www.youtube.com/embed/0IveKpZkrWo"
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div className="carousel-cell flex-video">
                    <iframe
                      src="https://www.youtube.com/embed/fk3Ox_quLFU"
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div className="carousel-cell flex-video">
                    <iframe
                      src="https://www.youtube.com/embed/lauwz5y_Tf0"
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div className="carousel-cell flex-video">
                    <iframe
                      src="https://www.youtube.com/embed/tQlEBkZQnH4"
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div className="carousel-cell flex-video">
                    <iframe
                      src="https://www.youtube.com/embed/kzrS3cfaIuk"
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div className="carousel-cell flex-video">
                    <iframe
                      src="https://www.youtube.com/embed/hbN1Y5DaXog"
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div className="carousel-cell flex-video">
                    <iframe
                      src="https://www.youtube.com/embed/Cm9TyEvA_kw"
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>

                <div
                  className="carousel carousel-nav"
                  data-flickity='{ "asNavFor": ".carousel-main", "contain": true, "pageDots": false }'
                >
                  <div className="carousel-cell">
                    <img src={FirstImg} alt="" />
                  </div>
                  <div className="carousel-cell">
                    <img src={SecondImg} alt="" />
                  </div>
                  <div className="carousel-cell">
                    <img src={ThirdImg} alt="" />
                  </div>
                  <div className="carousel-cell">
                    <img src={FourthImg} alt="" />
                  </div>
                  <div className="carousel-cell">
                    <img src={FifthImg} alt="" />
                  </div>
                  <div className="carousel-cell">
                    <img src={SixthImg} alt="" />
                  </div>
                  <div className="carousel-cell">
                    <img src={SeventhImg} alt="" />
                  </div>
                  <div className="carousel-cell">
                    <img src={EigthImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/*    */}
          </div>
        </div>

        {showButton && (
          <div onClick={scrollToTop} className="backto-top">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-up"
              >
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </div>
          </div>
        )}
      </main>
      <div
        id="footer"
        className="rn-footer-area footer-style-2 rn-section-gapTop footerBg1 footerBgGrey"
      >
        <div className="container mt--90 pb_sm--40 plr_sm--20">
          <div className="row">
            <div className="col-xl-3 col-12 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="logo-thumbnail">
                <img src={Logo} alt="logo-image" />
              </div>
              <div className="social-icone-wrapper"></div>
            </div>
            <div className="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="menu-wrapper">
                <div className="menu-title">
                  <h6>Socials</h6>
                </div>
                <ul className="menu-footer">
                  <li>
                    <a href="https://twitter.com/Fino_DAO">Twitter</a>
                  </li>
                  <li>
                    <a href="https://t.me/finofinance">Telegram</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/rtj2Gzx2b7">Discord</a>
                  </li>
                  {/* <li>
                    <a href="#">Medium</a>
                  </li> */}
                  <li>
                    <a href="https://github.com/finodao/contracts/tree/main">Github</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="menu-wrapper">
                <div className="menu-title">
                  <h6>Products</h6>
                </div>
                <ul className="menu-footer">
                  <li>
                    <a href="#">Automatic-Staking</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="menu-wrapper">
                <div className="menu-title">
                  <h6>Learn</h6>
                </div>
                <ul className="menu-footer">
                  <li>
                    <a href="https://finofinance.gitbook.io/fino">Documentation</a>
                  </li>
                  {/* <li>
                    <a href="#">Medium</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGazo;
