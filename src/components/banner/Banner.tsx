import React from 'react';
const Banner = () => {
  return (
    <div>
      <div id="home" className="rn-slider-area">
        <div className="slide slider-style-4 bg_image bg_image--1 slider_topAlign">
          <div className="container">
            <div className="row justify-content-center">
              <div className="order-2 order-lg-1 col-lg-10 col-xl-10 col-12">
                <div className="content">
                  <div className="inner mb_sm--80">
                    <h1 className="title col-lg-6">
                      The Hyper Deflationary & Auto- Compounding Protocol in
                      Crypto
                    </h1>
                    <div className="homeUlList">
                      {/* <ul>
                        <li className="description color_white">
                          <p className="color_white">
                            Highest Fixed APY - 211465.20%
                          </p>
                        </li>
                        <li className="description color_white">
                          <p className="color_white">
                            First Automatic Staking and Compounding in Your
                            Wallet!
                          </p>
                        </li>
                        <li className="description color_white">
                          <p className="color_white">
                            Get Rewards Every 30 Minutes / 48 Times Daily!
                          </p>
                        </li>
                        <li className="description color_white">
                          <p className="color_white">
                            Elastic Supply with no Minting Function
                          </p>
                        </li>
                        <li className="description color_white">
                          <p className="color_white">
                            Auto burn Mechanism on every transaction
                          </p>
                        </li>
                      </ul> */}
                    </div>
                  </div>

                  <div className="row mt--100">
                    <div className="col-lg-12 col-xl-9 col-md-12 col-sm-12 ">
                      <div className="social-share-inner-left">
                        <ul className="social-share d-flex liststyle">
                          <li className="instagram">
                            <button type="button" className="glow-on-hover">
                              White Paper
                            </button>
                          </li>
                          <li className="facebook">
                            <button type="button" className="glow-on-hover">
                              Buy On Pancake Swap
                            </button>
                          </li>
                          <li className="instagram">
                            <button type="button" className="glow-on-hover">
                              PooCoin Chart
                            </button>
                          </li>
                          <li className="instagram">
                            <button type="button" className="glow-on-hover">
                              DexTool Chart
                            </button>
                          </li>
                          <li className="instagram">
                            <button type="button" className="glow-on-hover">
                              BoggedChart
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="preSale">
                    Presale Starts on Feb 8th 2022, Tuesday 1.30 PM UTC
                  </p>
                  <h5 className="timerAlign" id="targetData"></h5>
                </div>

                <div id="about" className="rn-about-area   minusPosi">
                  <div className="container">
                    <div className="row justify-content-md-center">
                      <div className="col-12">
                        <div className="row bg_greyAbt">
                          <div
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            data-aos-once="true"
                            className="col-lg-7 mt_sm--30"
                          >
                            <div className="contant">
                              <div className="section-title text-left">
                                <span className="subtitle color_white">
                                  About
                                </span>
                                <h2 className="title lineHAlign">
                                  Fino Auto-Staking & Auto-Compounding Protocol
                                </h2>
                              </div>
                              <p className="discription color_white">
                                Fino Finance is transforming DeFi with the Fino
                                Autostaking Protocol (FAP) that delivers the
                                industry's highest fixed APY, rebasing rewards
                                every 30 minutes, and a simple buy-hold-earn
                                system that grows your portfolio in your wallet,
                                fast.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div
                              data-aos="fade-up"
                              data-aos-duration="1000"
                              data-aos-delay="100"
                              data-aos-once="true"
                              className=""
                            >
                              <div className="mt--20 text-center">
                                <h2 className=" pinkTxt">211465.20%</h2>
                                <h6 className="mt--20 color_white">
                                  Fixed Staking APY
                                </h6>

                                <a
                                  className="rn-btn animated-button victoria-three"
                                  href="#contacts"
                                >
                                  <span>Open App</span>
                                </a>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
