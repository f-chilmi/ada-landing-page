import React from 'react'
import { Container, Nav, Navbar, Button, Row, Col, Card } from 'react-bootstrap'


export default function Main() {
    return (
        <>
        <div className="bg-purple">

            {/* navbar  */}
          <Container>
            <Navbar>
              <Container>
                <Navbar.Brand href="#home">
                  <img
                    src="/assets/logo.png"
                    height="30"
                    className="d-inline-block align-top"
                    alt="ADA Logo"
                  />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Nav >
                    <Nav.Link href="#home" className="text-white mx-1 fw-bolder">App ADA Tools</Nav.Link>
                    <Nav.Link href="#features" className="text-white mx-1 fw-bolder">Manifesto</Nav.Link>
                    <Nav.Link href="#pricing" className="text-white mx-1 fw-bolder">ADAT Token</Nav.Link>
                    <Nav.Link href="#pricing" className="text-white mx-1 fw-bolder">Contact</Nav.Link>
                    <Button className="button-blue mx-1 fw-bolder">Launch App</Button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Container>
    
          <div className="container d-flex flex-row">
            <div className="left-side mt-5 pt-5">
              <h1 className="big-text mb-3">
                BOOST YOUR EXCHANGE EXPERIENCE
              </h1>
              <p className="mb-0">
                Real time data analysis at the tips of your fingers:
              </p>
              <p className="mb-4">
                Create unique trading strategies, anticipate market movements, search for big spreads, track and copy the most profitable wallets and much more.
              </p>
              <Button className="button-blue mx-1 fw-bolder">Launch App</Button>
            </div>
            <div className="right-side">
              <img
                src="/assets/hero_illustration.png"
                alt="Illustration"
                className="img-illustration"
              />
            </div>
          </div>
        
          <div className="text-center pointer">
            <i className="material-icons text-white">expand_more</i>
          </div>
    
          <div className="text-white text-center container p-5">
            If you are an ADA user, and you want to be able to anticipate market movements and develop better trading strategies, ADA Tools will help you in a very simple way
          </div>
        
          <div className="w-100 position-relative h-100px">
            <div className="how-wrapper">
              <div className="mx-2">
                <img
                  src="/assets/how_5.png"
                  alt="responsive"
                />
                <h4>RESPONSIVE</h4>
                <p>ADA Tools works on any device: desktop, tablet or mobile.</p>
              </div>
              <div className="mx-2">
                <img
                  src="/assets/how_4.png"
                  alt="responsive"
                />
                <h4>SUBSCRIPTION</h4>
                <p>Purchase ADAT via exchanges to enable ADAT subscriptions.</p>
              </div>
              <div className="mx-2">
                <img
                  src="/assets/how_3.png"
                  alt="responsive"
                />
                <h4>STORE YOUR DATA</h4>
                <p>Save your data and access it from any device.</p>
              </div>
              <div className="mx-2">
                <img
                  src="/assets/how_2.png"
                  alt="responsive"
                />
                <h4>NOTIFICATIONS</h4>
                <p>Set up your live notifications.</p>
              </div>
              <div className="mx-2">
                <img
                  src="/assets/how_1.png"
                  alt="responsive"
                />
                <h4>BOTS</h4>
                <p>Create unique trading strategies for maximum profitability.</p>
              </div>
            </div>
          </div>
    
        </div>
    
        <Container>
            <p className="sub-size mt-300 text-center">FEATURES</p>
            <div className="d-flex">
                <div className="f-left pe-2">
                    <div className="pool p-2">
                        <img src="/assets/icons/11.svg" alt="icons" className="p-img" />
                        <span className="ps-2">Pool Explorer</span>
                    </div>
                    <p className="text-only">
                        Search for new pools, add or remove liquidity in a pair, find the best gems and avoid the scams.
                    </p>

                    <hr  className="m-0"/>

                    <div className="pair p-2">
                        <img src="/assets/icons/12.svg" alt="icons" />
                        <span className="ps-2">Pair Explorer</span>
                    </div>

                    <hr  className="m-0"/>

                    <div className="pair p-2">
                        <img src="/assets/icons/03.svg" alt="icons" />
                        <span className="ps-2">Big Swap Explorer</span>
                    </div>

                    <hr  className="m-0"/>

                    <div className="pair p-2">
                        <img src="/assets/icons/13.svg" alt="icons" />
                        <span className="ps-2">Multiswap Explorer</span>
                    </div>

                    <hr  className="m-0"/>

                    <div className="pair p-2">
                        <img src="/assets/icons/01.svg" alt="icons" />
                        <span className="ps-2">Wallet Info</span>
                    </div>

                </div>
                <div className="f-right ps-2">
                    <img src="/assets/features_image.png" alt="feature" className="f-img" />
                </div>
            </div>
        </Container>

        <div className="bg-purple">
            <Container >

                {/* <div className="material-icons arrow-down-white text-center">arrow_drop_down</div> */}

                <p className="sub-size text-center pt-5 mb-0 text-white">USER PLANS</p>
                <p className="text-center text-white">Choose your subscription tier and upgrade now!</p>

                <Row>
                    <Col className="pe-2">
                        <Card>
                            <Card.Body className="card-wrapper">
                                <h4 className="text-purple">FREE</h4>
                                <hr className="text-purple" />
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Real time data and chart</span> 
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Pool explorer</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Pair explorer</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super"> Big swap explorer</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Multiswap windows</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">10 favourite pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Desktop price alerts</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Stable coin pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Token / token pairs</span>    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="px-2">
                        <Card>
                            <Card.Body className="card-wrapper">
                                <h4 className="text-purple">Standard</h4>
                                <p>$100 paid in ADAT/Monthly subscription -or- 1,000 ADAT/Hold*</p>
                                <hr className="text-purple" />
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Real time data and chart</span> 
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Pool explorer</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Pair explorer</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super"> Big swap explorer</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Multiswap windows</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">No limit favourite pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">My positions (P&L tracker)</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Trade analytics</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Wallet info and tracker</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Desktop/Mail/Telegram price alerts</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">No advertisements</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Stable coin pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Token/token pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Limit order & trading bot</span>    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="pe-2">
                        <Card>
                            <Card.Body className="card-wrapper">
                                <h4 className="text-purple">Premium</h4>
                                <p>1,000 ADAT/Hold*</p>
                                <hr className="text-purple" />
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Real time data and chart</span> 
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Pool explorer</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Pair explorer</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super"> Big swap explorer</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Multiswap windows</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">No limit favourite pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">My positions (P&L tracker)</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Trade analytics</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Wallet info and tracker</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Desktop/Mail/Telegram price alerts</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">No advertisements</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Stable coin pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Token/token pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super text-purple fw-bolder">ADATshare</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super text-purple fw-bolder">ADATforce & ADATforce Ventures</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">More exclusive upcoming features</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Limit order & trading bot</span>    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className="text-white text-center mt-5 pb-5">
                    *Hold means that you must have the neccessary token in your wallet at the time of sign in and login, this process will be done through any compatible wallet.
                </div>

            </Container>
        </div>
    
        <div className="bg-black">
            <Container>
                <div className="sub-size text-center pt-5 mb-0 text-white mb-5">ROADMAP</div>
                <Row>
                    <Col className="pe-2">
                        <Card className="card-bg-purple">
                            <div className="text-center bg-purple text-white top py-2 fw-bolder">2021 Q1</div>
                            <Card.Body>
                                <ul>
                                    <li>Technical improvements</li>
                                    <li>Websockets</li>
                                    <li>SushiSwap integration</li>
                                    <li>Multiexchange support</li>
                                    <li>Velox bots and limit orders integration</li>
                                    <li>UX/UI redesign</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="px-2">
                        <Card className="card-bg-purple">
                            <div className="text-center bg-purple text-white top py-2 fw-bolder">2021 Q2</div>
                            <Card.Body>
                                <ul>
                                    <li>NFT marketing promotion tool</li>
                                    <li>Presale promotion tools</li>
                                    <li>Binance smart chain integration (Pencakeswap)</li>
                                    <li>UI/UX redesign</li>
                                    <li>Pencake listing</li>
                                    <li>Improvements based on community feedback</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="px-2">
                        <Card className="card-bg-purple">
                            <div className="text-center bg-purple text-white top py-2 fw-bolder">2021 Q3</div>
                            <Card.Body>
                                <ul>
                                    <li>CEX tools</li>
                                    <li>PAdvanced public API releases</li>
                                    <li>More ADA integration</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="pe-2">
                        <Card className="card-bg-purple">
                            <div className="text-center bg-purple text-white top py-2 fw-bolder">2021 Q4</div>
                            <Card.Body>
                                <ul>
                                    <li>More ADA integration</li>
                                    <li>Improvements based on community feedback</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className="mt-5 text-white text-center pb-5">
                    This is a floating roadmap, so timelines are flexible. This is beacouse we must be agile and responsive to industry, technological and community needs. In fact, many of our existing and feature features are community requests. So please do understand that this roadmap, espescially for items outside of imminent release, is subject to charge.
                </div>

            </Container>
        </div>
        
        <div className="bg-grey">

            <div className="text-center sub-size pt-5 mb-5">ADAT TOKEN</div>

            <div className="container position-relative">
                <div className="adat-left">
                    <div className="d-flex">
                        <p className="w-40 mb-0 fw-bolder">Token Name</p>
                        <p className="w-60 mb-0">: ADAT</p>
                    </div>
                    <div className="d-flex">
                        <p className="w-40 mb-0 fw-bolder">Contract</p>
                        <p className="w-60 mb-0">: 0xvdclwha72v3j29..</p>
                    </div>
                    <div className="d-flex">
                        <p className="w-40 mb-0 fw-bolder">Total Supply</p>
                        <p className="w-60 mb-0">: 150,000,000 ADAT</p>
                    </div>
                    <div className="d-flex">
                        <p className="w-40 mb-0 fw-bolder">Circulating Supply</p>
                        <p className="w-60 mb-0">: 150,000,000 ADAT</p>
                    </div>
                    <div className="my-4">
                        ADAT Token is neccessary to access subscription tiers and benefit from unlocking all of the features of the ADAT ecosystem.
                    </div>

                    <Button className="button-blue mx-1 fw-bolder shadow">Buy ADAT Tokens</Button>

                    <div className="mt-4 pb-5">*Marketing, developments and ADATshare tokens are locked</div>

                </div>
                <div className="adat-right">
                    <Card className="shadow">
                        <img src="/assets/adat_token.png" alt="image" />
                    </Card>
                </div>
            </div>

        </div>

        <div className="bg-purple pt-5">
            <Container>
                <p className="footer-text">
                    All contents are available on our website, on hyperlinked websites, and on applications, forums, blogs, social media accounts, and other platform associated with ADA Tools is intended solely to provide you with general information. We make no warranties of any kind with respect to our content, including but not limited to, the accuracy and currency of the information. None of the content we provide should be construed as financial, legal, or any other type of advice on which you may spesifically rely on any purpose. Any use or reliance you place of our content is solely at your own risk. What you should do is conduct your our research, review and analysis, and verify our content before relying on it. Trading is a high-risk activity that can result in significant losses. So you should consult with your financial advisor before making any decisions. Nothing on our site should be considered an invitation or offer to take any action.
                </p>
                <p className="text-white m-0">
                    <span className="material-icons">copyright</span>
                    <span className="vertical-super ms-1">ADA Tools 2021 - info@adatools.com | Ads & Marketing: marketing@adatools.com</span>    
                </p>
            </Container>
        </div>

        </>
      );
}
