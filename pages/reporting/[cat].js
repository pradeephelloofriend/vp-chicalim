import React,{ Suspense }from 'react'
import dynamic from 'next/dynamic'

import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
import b from '../../public/img/breadcumb/b-page.jpg'
import { useRouter } from 'next/router';

import AboutUsComponent from '../../components/about-us/AboutUsComponent';
import ReportingComponent from '../../components/reporting/ReportingComponent';
const reporting = () => {
  const router=useRouter()
    
    const tempTitle=router.query.title;
    console.log('router report',router)
    console.log('tempTitle report',tempTitle)
  return (
    <>
    
      <ReportingComponent routeTitle={tempTitle}/>
    
    </>
  )
}

export default reporting