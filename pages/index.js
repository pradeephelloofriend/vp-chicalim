import React from 'react'
import Banner from '../components/home/Banner';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {setServiceAreaData,setSchemeAreaData} from '../redux/services/serviceAction'

import { selectServiceData} from '../redux/services/serviceSelector';
import MapComponent from '../components/home/MapComponent';

import AboutUsBlockComponent from '../components/home/AboutUsBlockComponent';
import NewsSectionComponent from '../components/home/NewsSectionComponent';
import PopulationSectionComponent from '../components/home/PopulationSectionComponent';
import FacilitesComponent from '../components/home/FacilitesComponent';
import Schemes from '../components/home/Schemes';
import OtherLinks from '../components/home/OtherLinks';
import BigMenuComponent from '../components/home/BigMenuComponent';
import ProfileComponent from '../components/home/ProfileComponent';
import OtherLinksComponent from '../components/home/OtherLinksComponent';
import Sliderbanner from '../components/home/Sliderbanner';

//get initial ServerSideProps
export async function getServerSideProps() {
    //-------------------------------
    const home = await fetch(`${process.env.WP_API_PATH}pages/578`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.JWT_TOKEN}` 
        }
      })
     
    const homeData = await home.json()
    const schemes = await fetch(`${process.env.WP_API_PATH}schemes`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.JWT_TOKEN}` 
      }
    })
    const schemesData = await schemes.json()
    
    /****** */
    const news = await fetch(`${process.env.WP_API_PATH}news_letter?per_page=5`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.JWT_TOKEN}` 
      }
    })
  const newsData = await news.json()
  /****** */
  const msg = await fetch(`${process.env.WP_API_PATH}pages/1365`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.JWT_TOKEN}` 
    }
  })
const msgData = await msg.json()
/****** */
const village= await fetch(`${process.env.WP_API_PATH}pages/1070`,{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.JWT_TOKEN}` 
  }
})
const villageData = await village.json()

/**/// */
const dev = await fetch(`${process.env.WP_API_PATH}development?per_page=20`,{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.JWT_TOKEN}` 
  }
})
const devData = await dev.json()
    //BIND RETURN DATA THROUGH PROPS
    //-----------------------------------
    return { props: {homeData,schemesData,newsData,villageData,msgData,devData} }
}
const Index = ({ homeData,msgData,setServiceAreaData,data,villageData,setSchemeAreaData,devData,schemesData,newsData}) => {
    console.log('pdata=',homeData)
    React.useEffect(() => {
        setServiceAreaData(data)
        
    }, [data])
    const {acf}=homeData
    //console.log('pdata=',acf)
    const{slider}=acf
    return (
        <>
            {/* <OtherLinks noticeData={noticeData}/> */}
            {/* <OtherLinks /> */}
            {/* <Banner sliderData={slider} noticeData={noticeData} /> */}
            <Sliderbanner/>
            <OtherLinks />
            <Banner />
            {/* <BigMenuComponent/> */}
           
            {/*<AboutUsBlockComponent villageData={villageData} msgData={msgData}/>*/}
            <ProfileComponent/>
            <NewsSectionComponent devData={devData}/>
            <OtherLinksComponent/> 
            <PopulationSectionComponent/>
            <FacilitesComponent/>
            <Schemes/>
            {/*<AddBlock stepData={stepData} />
            <Scheme schemeData={data1} />
            <EventsComponent eventdata={eventdata}/>
            <ProductComponent aboutData={aboutData} /> {/* ABOUT AREA*/}
            <MapComponent/>
            {/*<ContactComponent/>*/}
            {/*<SmallAreaComponent/>*/}
            {/*<ContactComponent/>*/}

        </>
    )
}
const mapStateToProps=createStructuredSelector({
    serviceAllData: selectServiceData
})
const mapDispatchToProps=(dispatch)=>({
setServiceAreaData:(data)=>dispatch(setServiceAreaData(data)),
setSchemeAreaData:(data)=>dispatch(setSchemeAreaData(data))
})
export default connect(mapStateToProps,mapDispatchToProps) (Index)