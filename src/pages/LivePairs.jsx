import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';


export default function LivePairs() {
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

          <div className="tab-menu t-selected centering-element">
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

          <div className="body-body">

            <div className="container">
              <div className="d-flex justify-content-between align-items-center pt-4">
                <h6 className="text-white">PANCAKESWAP POOL TOOLS > 
                  <span className="text-blue ">
                    LIVE NEW PAIRS
                  </span>
                </h6>
                <div className="search-wrapper">
                  <input type="text" className="form-control input-dark " placeholder="Filter by token" />
                  <i className="material-icons">search</i>
                </div>
              </div>
              <p className="text-grey">Search for live new pairs and pool updates</p>

              <BootstrapTable 
                keyField='id' 
                data={ data } 
                columns={ columns } 
                bordered={ false }
              />

              <div style={{ height: 100, width: "100%" }} />

            </div>
          </div>


          {/* footer  */}
          <div className="footer-copyright bg-purple-dark">
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
