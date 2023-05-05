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
import { getSliderHomeData } from '../../lib/api';
import { getVillageData } from '../../lib/api'
import abt1 from '../../public/img/abtus1a.png'

const {Title,Text}=Typography
SwiperCore.use([Pagination]);

const Banner = ({sliderData}) => {
  // console.log('sliderdata',sliderData)
  //const Demo= sliderData.content.map(i=>i)
  //console.log('demo',Demo)
  const [slData,setSldata]=React.useState(null)
  const [vilData, setVilData]=React.useState(null)
    React.useEffect(()=>{
        //setLoading(true)
        let isApiSubscribed = true;
        async function fetchData() {
            
            const cData = await getSliderHomeData() //applo client   
            const vData = await getVillageData()
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
              // console.log('cData',cData)
              // console.log('vilData',vilData)
              setSldata(cData)
              setVilData(vData)
            }
          }
         
          fetchData()
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
    // console.log('slData',slData)
    // console.log('vilData',vilData)
    return (
      <>
       <section className="wrapper ">
          <div className="container py-10 py-md-10 pb-md-10">
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-6'>
                <Card>
                  
                  <div className='slider-block  '>
                    <div className="caption1">
                      <h1>About </h1>
                      <h2>{ vilData!==null?vilData.title:<></>}</h2>
                    </div>
                    <div className='slider-content'>
                      
                      <div className="mb-3" dangerouslySetInnerHTML={{ __html:vilData!==null?vilData.desc:<></>}} />
                      <div className="mb-3" dangerouslySetInnerHTML={{ __html:vilData!==null?vilData.otherDesc:<></>}} />
                      <Divider />
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


            </div>
            
          </div>
          
        </section>
      </>
    )
}

export default Banner
