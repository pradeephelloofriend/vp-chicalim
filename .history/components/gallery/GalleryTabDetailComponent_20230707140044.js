import React from 'react'
import { Typography,Card,Tabs,Spin } from 'antd';
import '../../node_modules/video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';
import Image from  'next/image'
const { TabPane } = Tabs;
import Axios from 'axios';
import {getGalleryByCat, getMediaGalleryData} from '../../lib/api'

const GalleryTabDetailComponent = ({cDetailData}) => {
    //console.log('cDetailData',cDetailData)
    const [tabKey,setTabKey]=React.useState(cDetailData[0].termTaxonomyId.toString())
    //console.log('tabKey',tabKey)
    const[gData,setGdata]=React.useState([])
    const [isLoading,setIsLoading]=React.useState(false);
    React.useEffect(()=>{
        //geting data according to category
        setIsLoading(true)
        let isApiSubscribed = true;
        if(isApiSubscribed){
            async function fetchData() {
                const cData = await getGalleryByCat(Number(tabKey)) //applo client  
                // 👇️ only update state if component is mounted
                if (isApiSubscribed) {
                  setGdata(cData[0].mediaGalleries.nodes)
                  setIsLoading(false)
                  console.log('cdata-grqaphql',cData)
                }
              }
              fetchData()
        }
    },[tabKey])
    //console.log('gData',gData)
    return (
    
        <div>

        <div className=''>
            <Tabs className='g-cat-tab' activeKey={tabKey} onTabClick={(key) => setTabKey(key)} tabPosition={'top'}>
               {cDetailData.map(g=>
               <TabPane tab={g.name} key={g.termTaxonomyId}>
               <Spin spinning={isLoading}>
                  {   
                      gData.length>=0?gData.map((g,idx)=>
                      <div key={idx} className='g-box'>
                          <h4>{g.title}</h4>
                          <div className='g-box-content'>
                              
                                  {g.gallery.content.map((d,ix)=>
                                      <div key={ix} className='img-box'>
                                              {d.image.map((i,is)=> 
                                              <div className='iv-content' key={is}>
                                                  {d.categoryName.name=='photo'? 
                                                  <img src={i.med} alt=''/>
                                                          :
                                                          
                                                          <Player
                                                              playsInline
                                                              //poster="/assets/poster.png"
                                                              src={i.sourceUrl}
                                                          />
                                                  }
                                                  <div className='img-tag-box'>
                                                      <span className="badge centre bg-blue text-white link-c-blue rounded-pill">{i.title}</span>
                                                  </div>
                                              </div>
                                              
                                              )}
                                              </div>
                                      
                                  )}
                                  
                              
                          </div>
                      </div>
                  
                  )
                  :<p>No data Found</p>}
                  </Spin>
               </TabPane>
               
               )}
                



            </Tabs>
        </div>
      {/**/}

  </div>
  )
}

export default GalleryTabDetailComponent