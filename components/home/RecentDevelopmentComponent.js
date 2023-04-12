import React from 'react'
import { Typography,Card,Button } from 'antd';
import Image from  'next/image'
//Import Swiper React components
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Figure from 'react-bootstrap/Figure'
const { Title ,Text} = Typography;
const { Meta } = Card;
class RecentDevelopmentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render(){
    const {devData}=this.props
    // console.log('devData new',devData)
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>

        
          <div className="rd-btn-arrow offset-md-1 offset-lg-3">
            <Button type="text" className="btn-prev " onClick={this.previous} ><LeftOutlined /></Button>
            <Button type="text" className="btn-next ms-xxl-2" onClick={this.next}><RightOutlined /></Button>
          </div>
        
        <Slider ref={c => (this.slider = c)} {...settings}>
          {devData!==null?
          devData.map((d,idx)=>
          <div key={idx} className="slick-item">
            <Card
              className='dev-card1'
              hoverable

              cover={<Image src={d.acf.image.url} alt='' height={427} width={518} />}
            >
              <div className='dev-slider-box rd-badge'>
                <span className="badge bg-white link-c-blue rounded-pill">{d.acf.title}</span>
              </div>
            </Card>
          </div>
          )
          :
          <></>}
          
          
        </Slider>
        {/*<div className='row g-2'>
          <div className='col-md-6 col-12'>
            <Card
              className='dev-card1'
              hoverable
  
              cover={<Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665068680/vp/nagoa/s4-min_gpbbng.jpg'} alt='' height={361} width={518} />}
            >
              <div className='dev-slider-box'>
                <span className="badge bg-white link-c-blue rounded-pill">Village under monitor Camera</span>
              </div>
            </Card>
          </div>
  
          <div className='col-md-6 col-12'>
            <Card
              className='dev-card1'
              hoverable
  
              cover={<Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665068680/vp/nagoa/s2-min_ssit0c.jpg'} alt='' height={361} width={518} />}
            >
              <div className='dev-slider-box'>
                <span className="badge bg-white link-c-blue rounded-pill">Tubwell Work</span>
              </div>
            </Card>
          </div>
        </div>*/}
      </>
    )
  }
  
}

export default RecentDevelopmentComponent