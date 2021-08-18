import React from 'react'
import { Container, Nav, Navbar, Button, Row, Col, Card } from 'react-bootstrap'


export default function Dashboard() {
  return (
    <>
      {/* head  */}
      <div className="top-h d-flex">
        <div className="brand">
          <img src="/assets/logo_gram.png" alt="logo" />
        </div>
        <div className="icon-cam centering-element">
          <i className="material-icons">photo_camera</i>
        </div>
      </div>

      {/* body  */}
      <div className="d-flex">

        {/* left tabs */}
        <div className="left-tabs">
          <div className="t-selected centering-element text-white">
            <img src="/assets/icons/10.svg" alt="icons" />
          </div>

          <div className="empty-space" />

          <div className="tab-menu centering-element">
            <img src="/assets/icons/11.svg" alt="icons" />
          </div>
          <div className="tab-menu centering-element">
            <img src="/assets/icons/12.svg" alt="icons" />
          </div>

          <div className="empty-space" />

          <div className="tab-menu centering-element">
            <img src="/assets/icons/13.svg" alt="icons" />
          </div>
          <div className="tab-menu centering-element">
            <img src="/assets/icons/14.svg" alt="icons" />
          </div>

          <div className="empty-space" />

          <div className="tab-menu centering-element">
            <img src="/assets/icons/15.svg" alt="icons" />
          </div>
          <div className="tab-menu centering-element">
            <img src="/assets/icons/16.svg" alt="icons" />
          </div>

          <div className="empty-space" />

          <div className="tab-menu centering-element">
            <img src="/assets/icons/17.svg" alt="icons" />
          </div>

          <div className="empty-space" />
          
          <div className="tab-menu centering-element">
            <img src="/assets/icons/15.svg" alt="icons" />
          </div>
          <div className="tab-menu centering-element">
            <img src="/assets/icons/16.svg" alt="icons" />
          </div>

        </div>
      
        {/* right body  */}
        <div className="right-body">
          
          <div className="top-small">
            <div className="container d-flex justify-content-between">
              <div>icon</div>
              <div className="ms-auto">
                <span className="text-white">Next ADATShare: </span>
                <span className="text-blue">2021-09-01 - 1,252,964 ADAT </span>
                <span className="text-white">| Next Token Burn: </span>
                <span className="text-blue">2021-09-01 - 28,107 ADAT</span>
              </div>
            </div>
          </div>

          <div className="row bg-purple-dark pt-4 px-4 row-no-padding ">

            <div className="col-4 ">

              <div className="card card-dark p-3 mb-4">
                <div className="card-head ">
                  <div className="icon-wrapper-white me-3">
                    <img src="assets/icons/babydb.png" alt="icon" />
                  </div>
                  <div className="centering-element">
                    <span className="fw-bolder"> PANCAKE </span>
                    TOOLS
                  </div>
                </div>
                <hr />
                <div className="body-card">
                  <div className="search-wrapper mb-2 position-relative">
                    <input type="text" className="form-control input-dark " placeholder="Search pair" />
                    <i className="material-icons" style={{ top: '20%' }}>search</i>
                  </div>
                  <div className="pair mb-2">
                    <img src="/assets/icons/11.svg" alt="icons" />
                    <span className="ps-2 ">Live New Pairs</span>
                  </div>
                  <div className="pair ">
                    <img src="/assets/icons/12.svg" alt="icons" />
                    <span className="ps-2">Pair Explorer</span>
                  </div>
                </div>
              </div>

              <div className="card card-dark p-3">
                <div className="card-head ">
                  <div className="icon-wrapper-white me-3">
                    <img src="assets/logo_gram_dark.png" alt="icon" />
                  </div>
                  <div className="centering-element">
                    <span className="fw-bolder"> COMMON </span>
                    TOOLS
                  </div>
                </div>
                <hr />
                <div className="body-card">
                  <div className="pair mb-2">
                    <img src="/assets/icons/13.svg" alt="icons" />
                    <span className="ps-2 ">MultiSwap</span>
                  </div>
                  <div className="pair mb-2">
                    <img src="/assets/icons/01.svg" alt="icons" />
                    <span className="ps-2">Wallet Information</span>
                  </div>
                  <div className="pair ">
                    <img src="/assets/icons/14.svg" alt="icons" />
                    <span className="ps-2">New Pairs Bot</span>
                  </div>
                </div>
              </div>


            </div>

            <div className="col-4">
              <div className="card card-dark p-3">
                <div className="card-head w-100">
                  <div className="centering-element w-100">
                    <div>HOT</div>
                    <span className="fw-bolder"> PANCAKE </span>
                  </div>
                </div>

                <hr />

                <div className="body-card">

                  <div className="hot-list">
                    <div className="mid first">
                      <div className="num">1</div>
                      <div className="first-mid"> 
                        <div className="first-wrapper">
                          <img src="/assets/logo_gram_dark.png" alt="logo" />
                        </div>
                        <p className="code">CRUSADER</p>
                        <p>$32.471651</p>
                      </div>
                    </div>
                    <div className="i-right">
                      <i className="material-icons up">double_arrow</i>
                    </div>
                  </div>

                  <div className="hot-list">
                    <div className="mid">
                      <div className="num">2</div>
                      <div>
                        <p className="code">STARL</p>
                        <p>$0.0000000912</p>
                      </div>
                    </div>
                    <div className="i-right">
                      <i className="material-icons down">double_arrow</i>
                    </div>
                  </div>

                  <div className="hot-list">
                    <div className="mid">
                      <div className="num">3</div>
                      <div>
                        <p className="code">FLOKI</p>
                        <p>$0.0000000175</p>
                      </div>
                    </div>
                    <div className="i-right">
                      <i className="material-icons up">double_arrow</i>
                    </div>
                  </div>

                  <div className="hot-list">
                    <div className="mid">
                      <div className="num">4</div>
                      <div>
                        <p className="code">MM</p>
                        <p>$0.0000000912</p>
                      </div>
                    </div>
                    <div className="i-right">
                      <i className="material-icons down">double_arrow</i>
                    </div>
                  </div>

                  <div className="hot-list">
                    <div className="mid">
                      <div className="num">5</div>
                      <div>
                        <p className="code">SAITAMA</p>
                        <p>$0.0000000175</p>
                      </div>
                    </div>
                    <div className="i-right">
                      <i className="material-icons up">double_arrow</i>
                    </div>
                  </div>

                  <div className="hot-list">
                    <div className="mid">
                      <div className="num">6</div>
                      <div>
                        <p className="code">F9</p>
                        <p>$0.0000000912</p>
                      </div>
                    </div>
                    <div className="i-right">
                      <i className="material-icons down">double_arrow</i>
                    </div>
                  </div>

                  <div className="hot-list">
                    <div className="mid">
                      <div className="num">7</div>
                      <div>
                        <p className="code">KRZ</p>
                        <p>$0.0000000175</p>
                      </div>
                    </div>
                    <div className="i-right">
                      <i className="material-icons up">double_arrow</i>
                    </div>
                  </div>

                  <div className="hot-list">
                    <div className="mid">
                      <div className="num">8</div>
                      <div>
                        <p className="code">F9</p>
                        <p>$0.0000000912</p>
                      </div>
                    </div>
                    <div className="i-right">
                      <i className="material-icons down">double_arrow</i>
                    </div>
                  </div>

                  <div className="hot-list">
                    <div className="mid">
                      <div className="num">9</div>
                      <div>
                        <p className="code">KRZ</p>
                        <p>$0.0000000175</p>
                      </div>
                    </div>
                    <div className="i-right">
                      <i className="material-icons up">double_arrow</i>
                    </div>
                  </div>

                  

                </div>
              </div>


            </div>

            <div className="col-4">
              <div className="card card-dark p-3">
                <div className="card-head w-100">
                  <div className="centering-element w-100">
                    <div>FEATURED</div>
                    <span className="fw-bolder"> PANCAKE </span>
                  </div>
                </div>

                <hr />

                <div className="body-card">

                  <div className="list-featured">
                    <div className="num">1</div>
                    <div className="body-featured">
                      <div className="up-featured mb-2">
                        <div className="d-flex">
                          <div className="icon-wrapper-white featured-logo">
                            <img src="/assets/icons/moonfarmer.png" alt="logo" />
                          </div>
                          <div>
                            <p className="code">MFM</p>
                            <p>MoonFarmer</p>
                          </div>
                        </div>
                        <button className="live-trading-button ml-auto">
                          <i className="material-icons">fiber_manual_record</i>
                          <span className="">Live Trading</span>
                        </button>
                      </div>
                      <div className="mb-2">NFT Farming & Marketplace. Hold MFM in your wallet and EARN DAILY rewards in BNB.</div>

                      <div className="soc-icon">
                        <div className="icon-wrapper-soc me-2">
                          <img src="/assets/icons/moonfarmer.png" alt="logo" />
                        </div>
                        <div className="icon-wrapper-soc mx-2">
                          <img src="/assets/icons/moonfarmer.png" alt="logo" />
                        </div>
                        <div className="icon-wrapper-soc ms-2">
                          <img src="/assets/icons/moonfarmer.png" alt="logo" />
                        </div>
                      </div>

                    </div>
                  </div>
                
                  <div className="list-featured mt-4">
                    <div className="num">2</div>
                    <div className="body-featured">
                      <div className="up-featured mb-2">
                        <div className="d-flex">
                          <div className="icon-wrapper-white featured-logo">
                            <img src="/assets/icons/moonfarmer.png" alt="logo" />
                          </div>
                          <div>
                            <p className="code">GRNFI</p>
                            <p>GREENFI</p>
                          </div>
                        </div>
                        <button className="live-trading-button ml-auto">
                          <i className="material-icons">fiber_manual_record</i>
                          <span className="">Live Trading</span>
                        </button>
                      </div>
                      <div className="mb-2">GreenFi is the first Green DeFi hub on BSC. One transaction = 1 Tree planted</div>

                      <div className="soc-icon">
                        <div className="icon-wrapper-soc me-2">
                          <img src="/assets/icons/moonfarmer.png" alt="logo" />
                        </div>
                        <div className="icon-wrapper-soc mx-2">
                          <img src="/assets/icons/moonfarmer.png" alt="logo" />
                        </div>
                        <div className="icon-wrapper-soc ms-2">
                          <img src="/assets/icons/moonfarmer.png" alt="logo" />
                        </div>
                      </div>

                    </div>
                  </div>
                
                </div>

              </div>
            </div>

          </div>

          <div className="row bg-purple-dark pt-4 px-4 row-no-padding">

          <div className="col-4 ">

            <div className="card card-dark p-3 mb-4">
              <div className="card-head ">
                <div className="icon-wrapper-white me-3">
                  <img src="assets/icons/burgerswap.png" alt="icon" />
                </div>
                <div className="centering-element">
                  <span className="fw-bolder"> BAKERYSWAP </span>
                  TOOLS
                </div>
              </div>
              <hr />
              <div className="body-card ">
                <div className="text-center">
                  Coming soon
                </div>
              </div>
            </div>

          </div>

          <div className="col-4 ">

            <div className="card card-dark p-3 mb-4">
              <div className="card-head ">
                <div className="icon-wrapper-white me-3">
                  <img src="assets/icons/burgerswap.png" alt="icon" />
                </div>
                <div className="centering-element">
                  <span className="fw-bolder"> BAKERYSWAP </span>
                  TOOLS
                </div>
              </div>
              <hr />
              <div className="body-card ">
                <div className="text-center">
                  Coming soon
                </div>
              </div>
            </div>

          </div>
          <div className="col-4 ">

            <div className="card card-dark p-3 mb-4">
              <div className="card-head ">
                <div className="icon-wrapper-white me-3">
                  <img src="assets/icons/burgerswap.png" alt="icon" />
                </div>
                <div className="centering-element">
                  <span className="fw-bolder"> BAKERYSWAP </span>
                  TOOLS
                </div>
              </div>
              <hr />
              <div className="body-card ">
                <div className="text-center">
                  Coming soon
                </div>
              </div>
            </div>

          </div>
          </div>

          <div className="bg-purple-dark pt-5">
            <div className="container">
                <div className="d-flex justify-content-between mt-3">
                    <p className="text-white pb-3">
                        <span className="material-icons">copyright</span>
                        <span className="vertical-super ms-1">ADA Tools 2021 - info@adatools.com | Ads & Marketing: marketing@adatools.com</span>    
                    </p>

                    <div className="soc-icon ">
                        <div className="icon-wrapper-soc me-2">
                            <img src="/assets/icons/moonfarmer.png" alt="logo" />
                        </div>
                        <div className="icon-wrapper-soc mx-2">
                            <img src="/assets/icons/moonfarmer.png" alt="logo" />
                        </div>
                        <div className="icon-wrapper-soc ms-2">
                            <img src="/assets/icons/moonfarmer.png" alt="logo" />
                        </div>
                    </div>  
                </div>
            </div>
        </div>

        </div>
      </div>
      
    
    </>
  );
}
