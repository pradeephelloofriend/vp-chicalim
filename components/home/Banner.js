import React from 'react'
import Image from 'next/image';
import SocialLinkComponant from '../social/SocialLinkComponant'
import { Typography,Card,Divider } from 'antd';
//import s1 from '../../public/img/slider/slide1.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
  Pagination
} from 'swiper';
import SliderBottomBarComponent from './SliderBottomBarComponent';
import { getSliderHomeData } from '../../lib/api';
import abt1 from '../../public/img/abtus1a.png'

const {Title,Text}=Typography
SwiperCore.use([Pagination]);

const Banner = ({sliderData}) => {
  // console.log('sliderdata',sliderData)
  //const Demo= sliderData.content.map(i=>i)
  //console.log('demo',Demo)
  const [slData,setSldata]=React.useState(null)
   
    React.useEffect(()=>{
        //setLoading(true)
        let isApiSubscribed = true;
        async function fetchData() {
            
            const cData = await getSliderHomeData() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
              console.log('cData',cData)
              setSldata(cData)
            }
          }
         
          fetchData()
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])

    return (
      <>
       <section className="wrapper ">
          <div className="container py-10 py-md-10 pb-md-10">
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-6'>
                <Card>
                  
                  <div className='slider-block  '>
                    <div class="caption1">
                      <h1>About </h1>
                      <h2>Village Panchayat Chicalim</h2>
                    </div>
                    <div className='slider-content'>
                      <p>The Village Panchayat of Chicalim is situated in Mormugao Taluka of South Goa District and it consists of three revenue Village i.e. Chicalim, Dabolim & Sao Jacinto Island. Chicalim is a beautiful village; one often comes to this pleasant village while on the way to or from the Dabolim International Airport.</p>
                      <p>Here one can see the Village scene of Goa and also the culture of Goa. On the way also one can see the St. Hyacinthi Cathedral church which is also known by public in the name by St. Jacinto Church located on the on exotic Sao Jacinto Island. Also there exists an old chapel at Sao Jacinto Island that has an underground tunnel to the other side of the river to St. Domnic Chapel, Siridao. On the island you can also see a well preserved old Portuguese light house, from the top of which one can enjoy the breathtakingly beautiful view on to the Indian ocean and the Goa Coast. Most of the Island is covered with forest; therefore the island still has preserved the purity and its natural charm Another Light House is situated at Alto Chicalim.</p>
                      <p>There is Church in Chicalim that is old & ancient known as the St. Francis Xavier Church, which celebrates the feast of St. Francis Xavier and Mary Immaculate in the month of December. One can also see the Palloti Retreat House here that holds the feast of its patron on 22nd January and Harvest Festival is celebrated on 24th August of Every year. There are two Menlingtas Caves/(Buyar) located near Post Office at Naquelim-Chicalim Goa, and Monument of Our Lady of Regina Mundi is situated Near Regina Mundi High School. There is also a temple located at Alto Chicalim known as Shri. Sateri Devasthan and Masjid near M.E.S. College.</p>
                      <Divider />
                       {/* <div className='slider-help'>
                        <div className='row'>
                          <div className='col-6'>
                            <h4>May I Help You</h4>
                            <a href="tel:+822456974" class="me-xl-8 text-c-blue"><i class="fa fa-mobile me-xl-1"></i>Call Us For Inquiry: +91 86688 67032</a><br />
                            <a href="mailto:hello@surety.com" class="me-xl-8 text-c-blue"><i class="fa fa-envelope-o me-xl-1"></i>Email: contactus@vpdongurlithane.com</a>
                          </div>
                          <div className='col-6'>
                            <h4>Important Links</h4>
                            <ul class="icon-list bullet-theme">
                              <li><span><i class="uil uil-arrow-right"></i></span><span>Aenean eu leo quam pellentesque.</span></li>
                              <li><span><i class="uil uil-arrow-right"></i></span><span>Nullam quis risus eget urna mollis.</span></li>
                              <li><span><i class="uil uil-arrow-right"></i></span><span>Donec id elit non mi porta gravida.</span></li>
                              <li><span><i class="uil uil-arrow-right"></i></span><span>Fusce dapibus, tellus ac cursus.</span></li>
                            </ul>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </Card>

              </div>


              <div className='col-lg-6 col-md-6 col-sm-6'>
                <Swiper spaceBetween={30} pagination={{
                  "clickable": true
                }} className="mySwiper">
                    <SwiperSlide>
                      <Image
                        alt="s1"

                        src={abt1}
                      />
                      <div className="crousel_content container">
                        {/*<Title level={2} className="text-white">{i.caption_small}</Title>
                  <Title level={4} className="text-white mt-1">{i.caption_big}</Title>*/}
                      </div>
                    </SwiperSlide>
                </Swiper>
              </div>



              {/* <div className='col-lg-6 col-md-6 col-sm-6'>
                <Swiper spaceBetween={30} pagination={{
                  "clickable": true
                }} className="mySwiper">
                  {slData !==null ? slData.map((i, index) =>
                    <SwiperSlide key={index}>
                      <img
                        alt="s1"

                        src={i.image.sourceUrl}
                      />
                      <div className="crousel_content container">
                        {/*<Title level={2} className="text-white">{i.caption_small}</Title>
                  <Title level={4} className="text-white mt-1">{i.caption_big}</Title>*/}
                      {/* </div>
                    </SwiperSlide>
                  ):<></>}
                </Swiper>
              </div> */} 







              {/* <div className='col-5'>
                <div className='pub-msg'>
                  <div className='pub-img'>
                    <img src='https://res.cloudinary.com/depg2aab2/image/upload/v1665069348/vp/nagoa/sarpanch_ybjuif.png' alt=''/>
                    <h1>Pramod Sawant</h1>
                    <h4>The Hon'ble Governor Shri of Goa</h4>
                  </div>
                  <div className='sar-msg'>
                  
                        <Card className='abt-card dev0-card ' 
                        title={
                        <>
                        <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070375/vp/nagoa/msg_bt2e56.png'} alt='' height={35} width={35} />
                          <span className='abt-card-head-title text-white'> Sarpanch message to the public</span>
                        </>}>
                            <p>The lives of local communities are closely interwoven with their environment, and are dependent upon their immediate resources for meeting their needs. These communities have a vast knowledge about local flora and fauna which is very important for biodiversity conservation. Much of this knowledge is orally passed on from generation to generation. Such indigenous knowledge needs to be recorded and preserved before it is lost. Despite all threats, diversity of the species and diversity within the species still continue to survive. Their continued existence is due to farmers and other communities living within and in the vicinity of the forest and other ecosystems. Their cultural practices and knowledge systems have helped nurture biodiversity. Nature worship is a tribal belief based on the premise that all creations of nature have to be protected. Such beliefs have helped preserve several virgin forests in pristine form called Sacred Groves (the forests of God and Goddesses). These patches of forest or parts of large forests have been left untouched by the local people and any interference with them is banned, practice dating back to thousands of years.</p>
                          </Card>
                        
                  </div>
                  

                </div>
              </div> */}
            </div>
            
          </div>
          
        </section>
        {/*<SliderBottomBarComponent noticeData={noticeData}/>*/}
      </>
    )
}

export default Banner
