import React from 'react'
import Marquee from "react-fast-marquee";
const OtherLinks = ({ noticeData }) => {
    console.log('noticedata1',noticeData)
    return (
        <section className='slider-bottom-bar bg-light-orange'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='marquee-box'>
                            <div className="row text-center">
                                
                                <div className="col-md-12">

                                    <Marquee
                                        gradient={false}
                                        speed={50}
                                    >
                                        {noticeData.map((data, index) =>
                                            <a key={index} className="text-black ms-7">{data.acf.title
                                            }</a>
                                        )}
                                    </Marquee>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
       
         
    )
}
    
export default OtherLinks
