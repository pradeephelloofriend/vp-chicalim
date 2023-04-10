import React from 'react'
import {Card} from 'antd'
import Image from 'next/image'
import { getSarpanchMsg } from '../../lib/api'
import SpinningComponent from '../spin/SpinningComponent'
const MessageComponent = () => {
    const [crData,setCrData]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        async function fetchData() {
            const cData = await getSarpanchMsg() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
                setCrData(cData)
            }
          }
          fetchData()
       
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
    // console.log(crData);
  return (
      <>
      {crData!==null?
      <div className='about_section1 pt-8'>
      <Card className='abt-card sar-profile mb-5' >

          <div className='desk-image'>
          
          <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1670563789/vp/dongrim/team/dong-sarpanch-min_u6tdkd.jpg'} alt='' height={200} width={200} />
            
          </div>
          <div className="mb-3" dangerouslySetInnerHTML={{ __html:crData!==null?crData.desc:<></>}} />
        </Card>
  </div>
      :
      <SpinningComponent/>
      }
          
      </>
  )
}

export default MessageComponent