import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';


export default function PairExplorer() {
  const columns = [
  {
    dataField: 'token',
    text: 'Token',
    sort: true,
    headerClasses: 'border-bottom'
  }, 
  {
    dataField: 'listed',
    text: 'Listed Since',
    sort: true,
    headerClasses: 'border-bottom'
  }, 
  {
    text: 'Actions',
    headerClasses: 'border-bottom',
    formatter: () => {
      return (
        <div className="d-flex justify-content-between">
          <div className="icon-wrapper-table ">
            <img src="assets/icons/babydb.png" alt="icon" />
          </div>
          <div className="icon-wrapper-table mx-2">
            <img src="assets/icons/bscscan.png" alt="icon" />
          </div>
          <div className="icon-wrapper-table me-2">
            <img src="assets/icons/uniswap.png" alt="icon" />
          </div>
          <div className="icon-wrapper-table">
            <img src="assets/icons/32.svg" alt="icon" />
          </div>
        </div>
      )
    }
  },
  {
    dataField: 'contract',
    text: 'Contract Details',
    headerClasses: 'border-bottom',
    formatter: () => {
      return (
        <div className="d-flex justify-content-between">
          <div className="icon-wrapper-table ">
            <img src="assets/icons/21.svg" alt="icon" />
          </div>
          <div className="icon-wrapper-table mx-2">
            <img src="assets/icons/20.svg" alt="icon" />
          </div>
          <div className="icon-wrapper-table me-2">
            <img src="assets/icons/19.svg" alt="icon" />
          </div>
          <div className="icon-wrapper-table">
            <img src="assets/icons/18.svg" alt="icon" />
          </div>
        </div>
      )
    }
  }, 
  {
    dataField: 'tokenPrice',
    text: 'Token Price: BNB',
    sort: true,
    headerClasses: 'border-bottom'
  }, 
  {
    dataField: 'liquidity',
    text: 'Total Liquidity',
    sort: true,
    headerClasses: 'border-bottom'
  }, 
  {
    dataField: 'poolAmount',
    text: 'Pool Amount',
    sort: true,
    headerClasses: 'border-bottom'
  }, 
  {
    dataField: 'poolVariation',
    text: 'Pool Variation',
    sort: true,
    headerClasses: 'border-bottom',
    formatter: (cell, row) => {
      if (cell === "0%") return (
        <div className="grey-0 text-center">
          <p className="text-center m-0"> {cell}</p>
        </div>
      )
      if (cell === "531.32%") return (
        <div className="green-0 text-center">
          <p className="text-center m-0"> {cell}</p>
        </div>
      )
      if (cell === "-100%") return (
        <div className="red-0 text-center">
          <p className="text-center m-0"> {cell}</p>
        </div>
      )
      return null
    }
  }, 
  {
    dataField: 'poolRemaining',
    text: 'Pool Remaining',
    sort: true,
    headerClasses: 'border-bottom'
  }, 
];

  const data = [
    {
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.04004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.04004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.04004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.04004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.04004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.04004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.04004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.04004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.04004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.04004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.04004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },

  ]
  
  
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
          <div className="tab-menu centering-element text-white">
            <img src="/assets/icons/10.svg" alt="icons" />
          </div>

          <div className="empty-space" />

          <div className="tab-menu centering-element">
            <img src="/assets/icons/11.svg" alt="icons" />
          </div>
          <div className="tab-menu t-selected centering-element">
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
            <div className="container h-100 d-flex align-items-center justify-content-between">
              <div className="h-100 contering-element">
                <span className="text-white vertical-middle">BNB: </span>
                <span className="text-blue vertical-middle">$2613.62 </span>
              </div>
              <div className="mid-block fw-bolder px-2">
                <div className="text-grey">HOT PAIRS: </div>
                <div className="text-white ms-auto">
                  <span className="mx-2">
                    <span className="text-blue">#1</span>
                    <span>STARL</span>
                  </span>
                  <span className="mx-2">#2 BANKETH </span>
                  <span className="mx-2">#3 FLOKI </span>
                  <span className="mx-2">#4 PRXY </span>
                  <span className="mx-2">#5 SAITAMA </span>
                  <span className="mx-2">#6 TES </span>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-flex justify-content-center align-items-center text-white fw-bolder">
                  <div className="icon-wrapper-top me-2">
                    <img src="assets/icons/babydb.png" alt="icon" />
                  </div>
                  <span className="">BABYDB</span>
                </div>
                <button className="live-trading-button ms-3">
                  <i className="material-icons">fiber_manual_record</i>
                  <span className="">Live Trading</span>
                </button>
              </div>
            </div>
          </div>

          <div className="body-body pb-5">

            <div className="container">
              <div className="d-flex justify-content-between align-items-center pt-4">
                <h6 className="text-white">PANCAKESWAP SWAP {'>'} 
                  <span className="text-blue ">
                    PAIR EXPLORER
                  </span>
                </h6>
                <div className="search-wrapper">
                  <div className="refresh-div-search">
                    <span className="material-icons refresh-icon">autorenew</span>
                  </div>
                  <div className="input-wrapper">
                    <input type="text" className="form-control input-dark " placeholder="Search pair" />
                    <i className="material-icons">search</i>
                  </div>
                </div>
              </div>
              
              <div className="row py-3">

                <div className="col-5">

                  <div className="d-flex justify-content-end">
                    <div className="icons-tab">
                      <i className="material-icons me-2">share</i>
                      <i className="material-icons">star</i>
                    </div>
                    <div className="trade-tab">TRADE</div>
                  </div>

                  <div className="card card-dark mb-4">
                    <div className="d-flex card-adat card-body">
                      <div className="icon-wrapper-white-big me-3">
                        <img src="/assets/logo_gram_dark.png" alt="logo" />
                      </div>
                      <div className="card-adat-right card-title">
                        <div>
                          <p className="text">
                            WBNB / 
                            <span className="fw-bolder">ADAT</span>
                          </p>
                          <span className="sub-text">(ADATools)</span>
                        </div>
                        
                        <div className="text-2">
                          <p className="text-white">Token contract: </p>
                          <p className="blue-color ms-2">0xfb7b45...c75a </p>
                          <i className="material-icons blue-color">content_copy</i>
                          <p className="text-white">- Pair</p>
                          <i className="material-icons blue-color">content_copy</i>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-start">
                          <div className="icon-wrapper-table me-2">
                            <img src="assets/icons/bscscan.png" alt="icon" />
                          </div>
                          <div className="icon-wrapper-table mx-2">
                            <img src="assets/icons/babydb.png" alt="icon" />
                          </div>
                          
                          <div className="icon-wrapper-table mx-2">
                            <img src="assets/icons/07.svg" alt="icon" />
                          </div>
                          <div className="icon-wrapper-table mx-2">
                            <img src="assets/icons/08.svg" alt="icon" />
                          </div>
                          <div className="icon-wrapper-table mx-2">
                            <img src="assets/icons/21.svg" alt="icon" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">

                    <div className="favorites">
                      <div className="card card-dark card-favorites">
                        <div className="card-body">
                          <h5 className="fw-bolder">FAVORITES</h5>
                          <hr />
                          <div className="pe-2 list-code">
                            <div className="d-flex justify-content-between">
                              <p className="fw-bolder">META</p>
                              <p>$0.04003121</p>
                            </div>
                            <div className="d-flex justify-content-between color-aqua">
                              <p className="fw-bolder">ADAT</p>
                              <p>$0.04003121</p>
                            </div>
                            <div className="d-flex justify-content-between selected">
                              <p className="fw-bolder">RALPH</p>
                              <p>$0.04003121 <span className="x-code color-aqua">x</span> </p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p className="fw-bolder">SOTU</p>
                              <p>$0.04003121</p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p className="fw-bolder">MIMETIC</p>
                              <p>$0.04003121</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="info">
                      <div className="card card-dark card-info-code">
                        <div className="card-body">

                          <div className="centering-element">
                            <h4 className="fw-bolder">$0.27772691</h4>
                            <i className="material-icons up ms-2 f20">double_arrow</i>
                          </div>

                          <hr />

                          <div className="centering-element">
                            <p className="text-red">(24h: -2.36%)</p>
                            <p className="text-green">0.00011046 BNB</p>
                          </div>

                          <div>
                            <div className="d-flex justify-content-between">
                              <p className="fw-bolder my-2">Total liquidity :</p>
                              <p>$3,300,722,40</p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p className="fw-bolder mb-2">Daily volume : </p>
                              <p>$3,300,722,40</p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p className="fw-bolder mb-2">Pooled WBNB :</p>
                              <p>$3,300,722,40</p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p className="fw-bolder mb-2">Pooled ADAT :</p>
                              <p>$3,300,722,40</p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p className="fw-bolder mb-2">Total tx :</p>
                              <p>$3,300,722,40</p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p className="fw-bolder mb-2">Holders</p>
                              <p>$3,300,722,40</p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p className="fw-bolder mb-2">Market cap :</p>
                              <p>$3,300,722,40</p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p className="fw-bolder mb-2">Diluted market cap:</p>
                              <p>$3,300,722,40</p>
                            </div>
                            <div className="text-center color-aqua">View more info</div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="col-7"></div>

              </div>

              <div className="d-flex justify-content-between">

                <div className="contract-detail w200px">
                  {/* contract detail  */}
                  <div className="card card-dark mb-3">
                    <div className="card-body">
                      <p className="fw-bolder">Contract Details</p>
                      <div className="mt-2 d-flex justify-content-start">
                      <div className="icon-wrapper-table ">
                        <img src="assets/icons/21.svg" alt="icon" />
                      </div>
                      <div className="icon-wrapper-table mx-2">
                        <img src="assets/icons/20.svg" alt="icon" />
                      </div>
                      <div className="icon-wrapper-table me-2">
                        <img src="assets/icons/19.svg" alt="icon" />
                      </div>
                      <div className="icon-wrapper-table">
                        <img src="assets/icons/18.svg" alt="icon" />
                      </div>
                    </div>

                    <hr />

                    <div className="d-flex">
                      <p className="fw-bolder me-2 mb-2">Community Trust</p>
                      <i className="material-icons color-purple ask-small">help</i>
                    </div>

                    <div className="d-flex">
                      <div className="sip-ic">
                        <i className="material-icons">thumb_up</i>
                      </div>
                      <div className="hr-wrapper">
                        <hr />
                      </div>
                      <div className="sip-ic">
                        <i className="material-icons">thumb_down</i>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="text-grey">95%</p>
                      <p className="text-grey">(545 votes)</p>
                      <p className="text-grey">5%</p>
                    </div>


                    </div>
                  </div>
                
                  {/* adat score  */}
                  <div className="card card-dark mb-3">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 >ADAT <span className="fw-bolder">SCORE</span> </h5>
                        <h5 >99</h5>
                      </div>

                      <hr />

                      <div>
                        <div className="d-flex justify-content-between">
                          <p className="fw-bolder mb-2">Information</p>
                          <p className="text-grey">99</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fw-bolder mb-2">Transaction</p>
                          <p className="text-grey">99</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fw-bolder mb-2">Holder</p>
                          <p className="text-grey">99</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fw-bolder mb-2">Creation</p>
                          <p className="text-grey">99</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="fw-bolder mb-2">Pool</p>
                          <p className="text-grey">99</p>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* top sponsor  */}
                  <div className="card card-dark mb-3">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 >TOP <span className="fw-bolder">SPONSOR</span> </h5>
                        <i className="material-icons color-purple ask-small">help</i>
                      </div>

                      <hr />

                      <div className="up-featured mb-2">
                        <div className="d-flex">
                          <div>
                            <h4 className="mb-0">MFM</h4>
                            <p>MoonFarmer</p>
                          </div>
                          <i className="material-icons text-green">fiber_manual_record</i>
                        </div>
                      </div>
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
                      <div className="mt-2">
                        Join ICO of the marketing platform made to promote blockchain
                      </div>
                    </div>
                  </div>

                  {/* faraland */}
                  <div className="card card-purple mb-3">
                    <div className="card-body text-center">
                      <h4 className="fw-bolder mb-0">FARALAND</h4>
                      <p>backed by <span className="fw-bolder">ADAT Force</span></p>
                    </div>
                  </div>

                  {/* token news  */}
                  <div className="card card-dark">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5>TOKEN <span className="fw-bolder">NEWS</span></h5>
                        <i className="material-icons color-purple ask-small">help</i>
                      </div>

                      <hr />

                      <div className="text-center text-grey mb-3">No news</div>

                      <hr className="after-no-news" />

                      <div >
                        If you want your news to appear in this section, please contact us
                      </div>
                      <div className="soc-icon mt-3">
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


          {/* footer  */}
          <div className="footer-copyright bg-purple-dark pt-5">
            <div className="text-white m-0 container d-flex justify-content-between ">
              <div>
                <span className="material-icons">copyright</span>
                <span className="vertical-super ms-1">
                  ADA Tools 2021 - info@adatools.com | Ads & Marketing: marketing@adatools.com
                </span> 
              </div>

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
      
    
    </>
  );
}
