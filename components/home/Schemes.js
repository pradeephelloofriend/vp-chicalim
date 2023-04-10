import React from 'react'
import { Button, Typography } from 'antd';
import Image from 'next/image';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {withRouter} from 'next/router'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Figure from 'react-bootstrap/Figure'
const { Title, Text } = Typography
import QuoteForm from './schemes/QuoteForm'
import i2 from '../../public/img/istockphoto-1201112520-612x612.jpg'

class Schemes extends React.Component {
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
  render() {
    const { schemesData,router } = this.props
    // console.log('schemesData',schemesData)
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
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
        <section className="wrapper bg-skyblue scheme-area text-center">
          <div className="container  pt-md-11 pb-13 pb-md-10">
            <div className="row">
              <div className="col-md-12 col-lg-12 ">
                    <div className="text-center">
                      <div className="scheme-header mb-5 ">
                        <h4 className="display-6 mb-0 link-c-white text-center">Schemes</h4>
                        <p className="lead mb-5 link-c-darkblue lead-pd">We strive to provide the best facilities for our village members. Some of these are listed below.</p>
                      </div>
                      {/*<div className="btn-arrow offset-md-1 offset-lg-3">
                        <Button type="text" className="btn-prev " onClick={this.previous} ><LeftOutlined /></Button>
                        <Button type="text" className="btn-next ms-xxl-2" onClick={this.next}><RightOutlined /></Button>
                      </div>*/}
                    </div>
                    <div className="scheme-slider text-center">
                      
                      {schemesData.map((d,idx)=>
                      <div key={idx}  className="mb-5">
                        <Button onClick={()=>router.push({
                        pathname:`/media/schemes/${d.acf.title}`,
                        query:{slug:d.slug,title:d.acf.title}
                      })} size='large'>{d.title.rendered}<RightOutlined /></Button>
                      
                    </div>
                      )}
                      
                      
                          
                          

                      
                </div>

                </div>
              
              </div>
            </div>
        </section>

      </>
    )
  }

}

export default withRouter(Schemes)
