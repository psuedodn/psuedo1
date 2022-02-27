import React from 'react';
import DexTool from '../../assets/dextool.png';
import Pancake from '../../assets/pancake.png';
import Poocoin from '../../assets/poocoin.png';
import Bogged from '../../assets/bogged.png';
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
                    <h1 className="title forLap col-lg-9 col-sm-10">
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

                  <div className="row mt--50">
                    <div className="col-lg-12 col-xl-9 col-md-12 col-sm-12 ">
                      <div className="social-share-inner-left">
                        <ul className="social-share d-flex liststyle">
                          <li className="instagram">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                  'https://finofinance.gitbook.io/fino',
                                  '_blank'
                                );
                              }}
                              className="glow-on-hover"
                            >
                              White Paper
                            </button>
                          </li>
                          <li className="facebook">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                  'https://pancakeswap.finance/swap?outputCurrency=0x6C9AE5d6746ee1B6bD03310079AA11d8EC409212',
                                  '_blank'
                                );
                              }}
                              className="glow-on-hover"
                            >
                              <span className="butt">
                                <img src={Pancake} />
                              </span>
                              Buy On Pancake Swap
                            </button>
                          </li>
                          <li className="instagram">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                  'https://poocoin.app/tokens/0x6c9ae5d6746ee1b6bd03310079aa11d8ec409212',
                                  '_blank'
                                );
                              }}
                              className="glow-on-hover"
                            >
                              <span className="butt">
                                <img src={Poocoin} />
                              </span>
                              PooCoin Chart
                            </button>
                          </li>
                          <li className="instagram">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                  'https://www.dextools.io/app/bsc/pair-explorer/0xe973cb68fe664fa424fb39e0de2f95c85565b1b8',
                                  '_blank'
                                );
                              }}
                              className="glow-on-hover"
                            >
                              <span className="butt">
                                <img src={DexTool} />
                              </span>
                              DexTool Chart
                            </button>
                          </li>
                          <li className="instagram">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                  'https://charts.bogged.finance/?c=bsc&t=0x6C9AE5d6746ee1B6bD03310079AA11d8EC409212',
                                  '_blank'
                                );
                              }}
                              className="glow-on-hover"
                            >
                              <span className="butt">
                                <img src={Bogged} />
                              </span>
                              BoggedChart
                            </button>
                          </li>

                          <li className="instagram">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                  'https://fino.tools/',
                                  '_blank'
                                );
                              }}
                              className="glow-on-hover"
                            >
                              APY Calculator
                            </button>
                          </li>

                        </ul>
                        <p className="addressTxt">
                          FINO Contract Address:
                          0x6C9AE5d6746ee1B6bD03310079AA11d8EC409212
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <p className="preSale"> */}
                  {/* Presale Starts on Feb 8th 2022, Tuesday 1.30 PM UTC */}
                  {/* </p> */}
                  {/* <h5 className="timerAlign" id="targetData"></h5> */}
                </div>

                <div id="about" className="rn-about-area   minusPosi">
                  <div className="container">
                    <div className="row justify-content-md-center">
                      <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12">
                        <div className="row bg_greyAbt">
                          <div
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            data-aos-once="true"
                            className="col-xl-7 col-lg-12 col-sm-12 col-md-12 mt_sm--30"
                          >
                            <div className="contant aboutBlock">
                              <div className="section-title text-left">
                                <span className="subtitle color_white">
                                  About Fino Dao
                                </span>
                                <h2 className="title lineHAlign forMobi">
                                  Fino Auto-Staking & Auto-Compounding Protocol
                                </h2>
                              </div>
                              <p className="discription color_white forMobi">
                                Fino Dao is transforming DeFi with the Fino
                                Autostaking Protocol (FAP) that delivers the
                                industry's highest fixed APY, rebasing rewards
                                every 30 minutes, and a simple buy-hold-earn
                                system that grows your portfolio in your wallet,
                                fast.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-12 col-sm-12 col-md-12">
                            <div
                              data-aos="fade-up"
                              data-aos-duration="1000"
                              data-aos-delay="100"
                              data-aos-once="true"
                              className=""
                            >
                              <div className="mt--30 pb--20 text-center">
                                <h1 className="pinkTxt numBg">211465.20%</h1>
                                <h5 className="mt--20 color_white">
                                  Fixed Staking APY
                                </h5>

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
