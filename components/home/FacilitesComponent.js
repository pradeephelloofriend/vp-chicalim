import React from 'react'
import {Tabs,Card } from 'antd';
const { TabPane } = Tabs;
const { Meta } = Card;
import Image from 'next/image'
import lib from '../../public/img/facility/lib.jpg'
import news from '../../public/img/facility/news.jpg'

import sports from '../../public/img/about/ground.jpg'


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
                                  <TabPane tab="Biodiversity" key="3">
                                      <div className='row'>
                                            <div className='col-md-4 col-12'>
                                                <Card 
                                                    title="Goa Flora" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671514627/vp/dongrim/facility/flora_onxab0.jpg'} width={350} height={197} />}
                                                >
                                                    {/* <h4 className='link-c-blue mb-0 text-center'> Goa Flora</h4> */}
                                                    <p className='mb-0'>Biodiversity of Goa flora and fauna
Much deciduous vegetation, including teak, sal, cashew and mango trees, is present. Fruits include jackfruits, mangos, pineapples and blackberries.</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Goa Fauna" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671514627/vp/dongrim/facility/fauna_lrnoqm.jpg'} width={350} height={197} />}
                                                >
                                                    {/* <h4 className='link-c-blue mb-0 text-center'> Goa Fauna</h4> */}
                                                    <p className='mb-0'>Foxes, wild boars and migratory birds are found in the jungles of Goa. The avifauna includes kingfishers, mynas and parrots </p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Mhadei  Wildlife Sanctuary" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671514626/vp/dongrim/facility/wildlife_dyacsq.jpg'} width={350} height={197} />}
                                                >
                                                    {/* <h4 className='link-c-blue mb-0 text-center'> Mhadei  Wildlife Sanctuary</h4> */}
                                                    <p className='mb-0'>The Mhadei Wildlife Sanctuary is a 208.48km protected area in the Indian state of Goa in the Western Ghats of South India. It is located in the North Goa District, Sattari taluka near the town of Valpoi.  </p>
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

                                  <TabPane tab="Conservation Programme" key="4">
                                  <div className='row'>
                                            <div className='col-md-4 col-12 '>
                                                <Card
                                                    title="Card title" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671514626/vp/dongrim/facility/tiger_conservation_lioaat.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'> Tiger Conservation</h4>
                                                    <p className='mb-0'>The Bengal tiger is a population of the Panthera tigris tigris subspecies. It ranks among the biggest wild cats alive today. It is considered to belong to the world's charismatic megafauna</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671514625/vp/dongrim/facility/lakecleaning_kilqab.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Desilting and cleaning of spring</h4>
                                                    <p className='mb-0'>Activities such as cleaning, desilting and restoring of water bodies were carried out.</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671514625/vp/dongrim/facility/govan_fjhcqx.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Govan</h4>
                                                    <p className='mb-0'>GoVan” is a brand developed by Goa State Biodiversity Board (GSBB) under its project with the aim of “Conservation of Biodiversity through livelihood interventions”</p>
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

                                  <TabPane tab="Education" key="5">
                                      <div className='row'>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671779413/vp/dongrim/facility/faclity3_wvv71n.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Govt primary school Golali</h4>
                                                    <p className='mb-0'>It gives us immense pleasure providing facilities of School for the Childrens of Golali. I appeal to all people to utilize services optimally.</p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671779415/vp/dongrim/facility/facility1_hgwotz.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'> Govt primary school Naneli</h4>
                                                    <p className='mb-0'>It gives us immense pleasure providing facilities of School for the Childrens of Naneli. I appeal to all people to utilize services optimally. </p>
                                                </Card>
                                            </div>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671779412/vp/dongrim/facility/facility4_qyieb2.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'> govt primary sachool charwane</h4>
                                                    <p className='mb-0'>It gives us immense pleasure providing facilities of School for the Childrens of charwane. I appeal to all people to utilize services optimally. </p>
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

                                  <TabPane tab="Community Services" key="1">
                                  <div className='row'>
                                            <div className='col-md-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671191824/vp/dongrim/hivere_khurd_ny6xks.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Temple at Hivere Khurd</h4>
                                                    <p className='mb-0'>We want people of Nagoa to help hear God and develop an intimate Love Relationship with God. </p>
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
                                            <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671191824/vp/dongrim/well_znrdcg.jpg'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0 text-center'>Well</h4>
                                                    <p className='mb-0'>Well has been constructed to provide clean and Pure Drinking water to the people of Nagoa
</p>
                                                </Card>
                                            </div>
                                            </div>
                                  </TabPane>

                                  <TabPane tab="Waste Management" key="2">
                                    <div className='row'>
                                  <div className='col-md-4 pt-4 col-12'>
                                                <Card
                                                    title="Card title" className='faci-card link-ct-blue mb-0 text-center'
                                                    hoverable
                                                    style={{ width: imgWidth }}
                                                    cover={<Image alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671191817/vp/dongrim/9cf70a07-e862-44f5-b25f-ecdee4083f7e_tvqliz.png'} width={350} height={197} />}
                                                >
                                                    <h4 className='link-c-blue mb-0'>Waste Management</h4>
                                                    <p className='mb-0'>Village Panchayat Dongurli-Thane has provided Waste Collection Vehicle to collect waste from different villages from the panchayat</p>
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