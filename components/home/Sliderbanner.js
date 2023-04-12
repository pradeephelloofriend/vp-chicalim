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
import Carousel from 'react-bootstrap/Carousel';
import { getSliderHomeData } from '../../lib/api';

const {Title,Text}=Typography
SwiperCore.use([Pagination]);

const Sliderbanner = ({sliderData}) => {
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
      <Carousel fade>
        {slData !==null ? slData.map((i,index)=>
          <Carousel.Item key={index}>
              <img className="d-block w-100 h-25"
                  alt="s1"
                  
                  src={i.image.sourceUrl}
                />
          </Carousel.Item>
        ):<></>}
      </Carousel>
      </>
    )
}

export default Sliderbanner
