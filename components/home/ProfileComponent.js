import React from 'react'
import Card from 'react-bootstrap/Card';

const ProfileComponent = () => {
  return (
    <>
    <section class="wrapper image-wrapper bg-image bg-overlay profile-section" >
      <div class="container py-12">
        <div class="row">
          <div class="col-lg-5">
            <div className='pf-img-block'>
                <img src='https://res.cloudinary.com/depg2aab2/image/upload/v1670342628/vp/dongrim/dongurli-map-min_jhxgx1.png' alt=''/>
            </div>
            
          </div>
          <div className='col-7'>
          <Card >
            <Card.Body>
            <div className='pf-content-block '>
            <h4 class="display-6 mb-0 text-white">Chicalim Profile</h4>
              <Card className='display-c1'>
                <Card.Body>
                  <ul className='pf-ul text-white mt-3'>
                    <li>Block / Taluka :
                      <p>Mormugao</p>
                    </li>
                    <li>District :
                      <p>South Goa</p>
                    </li>
                    <li>State :
                      <p>Goa</p>
                    </li>
                    <li>Pincode :
                      <p>403711</p>
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='display-c1'>
                <Card.Body>
                  <ul className='pf-ul text-white mt-3'>
                    <li>Area :
                      <p>6901.68 hectares</p>
                    </li>
                    <li>Population(2011) :
                      <p>6,933</p>
                    </li>
                    <li>Households :
                      <p>1190</p>
                    </li>

                  </ul>
                </Card.Body>
              </Card>
            <ul className='pf-ul pf-other text-white text-center mt-3'>
              {/* <Card className='pf-bg-orange'>
                <Card.Body>
                <li className=''>Assembly Constituency<p>Poriem</p></li>  
                </Card.Body>
              </Card>

              <Card className='pf-bg-blue'>
                <Card.Body>
                <li className=''>Parliament Constituency<p>North Goa</p></li>
                </Card.Body>
              </Card>

              <Card className='pf-bg-merun'>
                <Card.Body>
                <li className='pf-bg-merun'>Nearest Town <p>Satari</p></li> 
                </Card.Body>
              </Card> */}
              
              
              <li className='pf-bg-orange'>Assembly Constituency<p>Mormugao</p></li> 
              <li className='pf-bg-blue'>Parliament Constituency<p>South goa</p></li>
              <li className='pf-bg-merun'>Nearest Town <p>NA</p></li>
            </ul>  
            </div>
            </Card.Body>
          </Card>

          </div>
        </div>
        
      </div>
      
    </section>
    </>
  )
}

export default ProfileComponent