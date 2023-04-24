import React from 'react'
import {Tabs,Card } from 'antd';
const { TabPane } = Tabs;
const { Meta } = Card;
import Image from 'next/image'
import lib from '../../public/img/facility/lib.jpg'
import news from '../../public/img/facility/news.jpg'

import sports from '../../public/img/about/ground.jpg'
import c1a from '../../public/img/cards/Card1a.png'
import c2a from '../../public/img/cards/Card2a.png'
import c3a from '../../public/img/cards/Card3a.png'
import c4a from '../../public/img/cards/Card4a.png'
import c5a from '../../public/img/cards/Card5a.png'
import c6a from '../../public/img/cards/Card6a.png'
import c7a from '../../public/img/cards/Card7a.png'
import c8a from '../../public/img/cards/Card8a.png'
import c9a from '../../public/img/cards/Card9a.png'
import c10a from '../../public/img/cards/Card10a.png'
import c11a from '../../public/img/cards/Card11a.png'
import c12a from '../../public/img/cards/Card12a.png'
import c13a from '../../public/img/cards/Card13a.png'
import c14a from '../../public/img/cards/Card14a.png'
import c15a from '../../public/img/cards/Card15a.png'
import c16a from '../../public/img/cards/Card16a.png'
import c17a from '../../public/img/cards/Card17a.png'

import Com from '../../public/img/about/nagoa.jpg'
const FacilitesComponent = () => {
    const[tabLayout,setTablLayout]=React.useState(null)
    const[imgWidth,setImgWidth]=React.useState(270)
    React.useEffect(() => {
        function handleResize() {
          if (window.matchMedia("(min-width: 1400px)").matches) {
            setTablLayout("left")
            setImgWidth(350)
            // Viewport is less or equal to 700 pixels wide
            //console.log("min-width: 1400px")
          } else if(window.matchMedia("(min-width: 1200px)").matches) {
            setTablLayout("left")
            setImgWidth(350)
            // Viewport is greater than 700 pixels wide
            //console.log("min-width: 1200px")
          }else if(window.matchMedia("(min-width: 992px)").matches){
            setTablLayout("left")
            setImgWidth(350)
            //console.log("min-width: 1200px")
          }else if(window.matchMedia("(min-width: 768px)").matches){
            setTablLayout("top")
            setImgWidth(360)
            //console.log("min-width: 768px")
          }else if(window.matchMedia("(min-width: 576px)").matches){
            setTablLayout("top")
            setImgWidth(360)
            //console.log("min-width: 768px")
          }else{
            setTablLayout("top")
            setImgWidth(380)
            //console.log("min-width: 576px")
          }
        
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        
      })
  return (
      <>
          <section className="wrapper bg-light">
              <div className="container py-10 py-md-10 pb-md-10">
                  <div className="row">
                      <div className="col-md-12 col-lg-10 col-xl-10 mx-auto text-center">
                          <h4 className="display-6 mb-0 link-ct-blue">Village Infrastructure</h4>
                          <p className="lead mb-5 px-md-16 px-lg-3">Developing, Strengthening the capacities and provide essential services. Some of them are.</p>
                      </div>

                  </div>
                  <div className="row">
                      <div className="col-md-12 mx-auto">
                          <div className='facility-tab'>
                              <Tabs tabPosition={tabLayout}>
                                  <TabPane tab="Temples, Churches & Mosques" key="3">
                                      <div className='row'>
                                            <div className='col-md-4 col-12'>
                                                <Card 
                                                    title="St. Francis Xavier Church" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={c1a}/>}
                                                >
                                                    {/* <h4 className='link-c-blue mb-0 text-center'> Goa Flora</h4> */}
                                                    <p className='mb-0'>The St. Francis Xavier Church in Chicalim is a historic and revered site that celebrates the feast of St. Francis Xavier and Mary Immaculate every December. Additionally, visitors can explore the Palloti Retreat House, which hosts its patron's feast on January 22nd and the Harvest Festival on August 24th each year. These events offer a unique opportunity to experience the rich cultural and religious traditions of the region. Don't miss the chance to witness the beauty and significance of these ancient celebrations.</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Our Lady of Regina Mundi" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={c2a} />}
                                                >
                                                    {/* <h4 className='link-c-blue mb-0 text-center'> Goa Fauna</h4> */}
                                                    <p className='mb-0'>Monument of Our Lady of Regina Mundi is situated Near Regina Mundi High School. </p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Shri. Sateri Devasthan" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={c4a} />}
                                                >
                                                    {/* <h4 className='link-c-blue mb-0 text-center'> Mhadei  Wildlife Sanctuary</h4> */}
                                                    <p className='mb-0'>Temple located at Alto Chicalim are Shri. Sateri Devasthan at Chicalim, Goa.  </p>
                                                </Card>
                                            </div>
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665122314/vp/nagoa/Education2-min_oukcj1.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'> School</h4>
                                                    <p className='mb-0'>It gives me immense pleasure providing facilities of School for the Childrens of Nagoa.  
I appeal to all people to utilize services optimally. </p>
                                                </Card>
                                            </div> */}
                                      </div>
                                  </TabPane>

                                  <TabPane tab="Schools, Hospital & Parks" key="4">
                                  <div className='row'>
                                            <div className='col-md-4 col-12 '>
                                                <Card
                                                    title="Regina Mundi High School" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={c6a} />}
                                                >
                                                    <p className='mb-0'>Regina Mundi High School</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12 '>
                                                <Card
                                                    title="Navy Children School" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={c16a} />}
                                                >
                                                    <p className='mb-0'>Navy Children School</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12 '>
                                                <Card
                                                    title="BITS College" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={c12a} />}
                                                >
                                                    <p className='mb-0'>BITS College</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Joggers Park" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={c7a} />}
                                                >
                                                    <p className='mb-0'>Joggers Park in Chicalim, Goa.</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Cottage Hospital" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={c8a} />}
                                                >
                                                    <p className='mb-0'>Cottage Hospital near Chicalim junction, Goa</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="V.M Salgaokar Hospital" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={c13a} />}
                                                >
                                                    <p className='mb-0'>V.M Salgaokar Hospital near Chicalim junction, Goa</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Pai Hospital" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={c14a} />}
                                                >
                                                    <p className='mb-0'>Pai Hospital near Chicalim junction, Goa</p>
                                                </Card>
                                            </div>
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666161106/Untitled-3_mamr67.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>GYMNASIUM</h4>
                                                    <p className='mb-0'> well equipped gym with Proper Equipments so the people of nagoa take up Exercise as prime factor.</p>
                                                </Card>
                                            </div> */}
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666243484/Untitled-7_gg9geh.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Sports Complex</h4>
                                                    <p className='mb-0'>Football playing field was recently constructed, to encourage people to take up health as a prime factor</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666243486/Untitled-6_spvb78.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Flood Lights</h4>
                                                    <p className='mb-0'>Flood Lights for Evening Football Games</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1668424356/vp/nagoa/Education%20facility/DSC_0124_njxx4g.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>GYM Equipments </h4>
                                                    <p className='mb-0'>well equipped gym with Proper Equipments so the people of nagoa take up Exercise as prime factor.</p>
                                                </Card>
                                            </div> */}
                                            </div>
                                  </TabPane>

                                  <TabPane tab="Community Services" key="5">
                                      <div className='row'>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Chicalim Biodiversity Management Committee" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={c5a} />}
                                                >
                                                    
                                                    <p className='mb-0'>Chicalim Biodiversity Management Committee (BMC).</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Government School" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671779415/vp/dongrim/facility/facility1_hgwotz.jpg'} width={350} height={197} />}
                                                >
                                                    <p className='mb-0'>It gives us immense pleasure providing facilities of School for the Childrens of Chicalim. I appeal to all people to utilize services optimally. </p>
                                                </Card>
                                            </div>
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665122314/vp/nagoa/Education2-min_oukcj1.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'> School</h4>
                                                    <p className='mb-0'>It gives me immense pleasure providing facilities of School for the Childrens of Nagoa.  
I appeal to all people to utilize services optimally. </p>
                                                </Card>
                                            </div> */}
                                      </div>
                                  </TabPane>

                                  <TabPane tab="Biodiversity" key="1">
                                  <div className='row'>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Farm Land" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={c10a} />}
                                                >
                                                    <p className='mb-0'>Farm Land Near Chicalim Panchayat Ground, Goa. </p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Paddy Field" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={c17a} />}
                                                >
                                                    <p className='mb-0'>Paddy Field Near Chicalim Panchayat Ground, Goa. </p>
                                                </Card>
                                            </div>
                                            {/* <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665122315/vp/nagoa/Community_Services1-min_finaoy.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0'>Community Services</h4>
                                                    <p className='mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                                </Card>
                                            </div> */}
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665122314/vp/nagoa/community_services_8-min_k0lu6x.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Wheelchair facilities</h4>
                                                    <p className='mb-0'>It gives us immense pleasure providing facilities of Wheelchair to the Disabled people of Nagoa.  </p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665122313/vp/nagoa/community_services-min_wcu1hb.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0'>Nagoa Church</h4>
                                                    <p className='mb-0'>We want people of Nagoa to help hear God and develop an intimate Love Relationship with Jesus Christ. </p>
                                                </Card>
                                            </div> */}
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665122313/vp/nagoa/community_services2-min_ofjlfd.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Nagoa Village Panchayat Parking Area</h4>
                                                    <p className='mb-0'>A Parking Lot is provided outside the nagoa village panchayat</p>
                                                </Card>
                                            </div> */}
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666161092/Untitled-1_uac0rk.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Health care center</h4>
                                                    <p className='mb-0'>A Sub Health centre for immediate medical attention was also inaugurated on the 12th of December 2013.</p>
                                                </Card>
                                            </div> */}
                                            {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666161091/Untitled-5_rnekch.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'> LIBRARY</h4>
                                                    <p className='mb-0'>It gives us immense pleasure providing facilities of Library to the people of Nagoa.  
I appeal to all people to utilize services optimally. 
</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666161096/Untitled-2_fymdb2.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Fair price shop</h4>
                                                    <p className='mb-0'>Village Panchayat Fair Price shop is put up so that people of nagoa get the essentials at very low price</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666161100/Untitled-4_uyk1fv.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Panchayat LIBRARY</h4>
                                                    <p className='mb-0'>It gives me immense pleasure providing facilities of Library to the people of Nagoa.  
I appeal to all people to utilize services optimally. 
</p>
                                                </Card>
                                            </div> */}
                                            </div>
                                  </TabPane>

                                  <TabPane tab="Other Infrastrutures- Airport, Naval Museum" key="2">
                                      <div className='row'>
                                          <div className='col-md-4 pt-4 col-12'>
                                              <Card
                                                  title="Airport" className='faci-card link-ct-blue mb-0 text-center'
                                                  hoverable
                                                  style={{ width: imgWidth }}
                                                  cover={<Image alt="example" src={c11a} />}
                                              >
                                                  <p className='mb-0'>Airport Near Chicalim, Goa.</p>
                                              </Card>
                                          </div>
                                          <div className='col-md-4 pt-4 col-12'>
                                              <Card
                                                  title="Shivaji Maharaj Statue" className='faci-card link-ct-blue mb-0 text-center'
                                                  hoverable
                                                  style={{ width: imgWidth }}
                                                  cover={<Image alt="example" src={c9a} />}
                                              >
                                                  <p className='mb-0'>Shivaji Maharaj Statue Near Chicalim, Goa.</p>
                                              </Card>
                                          </div>
                                          <div className='col-md-4 pt-4 col-12'>
                                              <Card
                                                  title="Menlingtas Caves" className='faci-card link-ct-blue mb-0 text-center'
                                                  hoverable
                                                  style={{ width: imgWidth }}
                                                  cover={<Image alt="example" src={c3a} />}
                                              >
                                                  <p className='mb-0'>There are two Menlingtas Caves/(Buyar) located near Post Office at Naquelim-Chicalim, Goa.</p>
                                              </Card>
                                          </div>
                                          {/* <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1668423456/vp/nagoa/Education%20facility/Biogas-3_oaz2km.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0'>Bio Gas</h4>
                                                    <p className='mb-0'>A biogas plant is facilited to people of Nagoa that treats farm wastes or house wastes Material. This will produce Bio-Gas using anaerobic digesters.</p>
                                                </Card>
                                            </div> */}
                                      </div>
                                  </TabPane>
                                  
                              </Tabs>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default FacilitesComponent