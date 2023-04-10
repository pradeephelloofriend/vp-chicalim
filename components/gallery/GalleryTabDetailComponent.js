import React from 'react'
import { Typography,Card,Tabs } from 'antd';
import '../../node_modules/video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';
import Image from  'next/image'
const { TabPane } = Tabs;
const GalleryTabDetailComponent = ({cDetailData}) => {
    //console.log('cDetailData',cDetailData)
  return (
    <div>
        {cDetailData.map((g,idx)=>
            <div key={idx} className='g-box'>
                <h4>{g.node.title}</h4>
                <div className='g-box-content'>
                    
                        {g.node.gallery.content.map((d,ix)=>
                            <div key={ix} className='img-box'>
                                
                                <div className='row'>
                                
                                    {d.image.map((i,is)=>
                                    <div key={is} className='col-md-4 mb-5'>
                                        <Card
                                            className='dev-card1'
                                            hoverable

                                            cover={
                                                d.categoryName.name=='photo'?
                                                <Image src={i.mediaItemUrl} alt='' height={361} width={518} />
                                                :
                                                
                                                <Player
                                                    playsInline
                                                    //poster="/assets/poster.png"
                                                    src={i.mediaItemUrl}
                                                />
                                            
                                        }
                                        >
                                            <div className='dev-slider-box'>
                                            <span className="badge bg-white link-c-blue rounded-pill">{d.categoryName.name}</span>
                                            </div>
                                        </Card>
                                    </div>
                                    )}
                                    
                                </div>
                            </div>
                            
                        )}
                        
                    
                </div>
            </div>
        
        )}

    </div>
  )
}

export default GalleryTabDetailComponent