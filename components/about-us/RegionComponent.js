import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import pmap from '../../public/img/mormugaoMap2.png'

const RegionComponent = () => {
    const router=useRouter()
    //console.log(router)
  return (
    <div>

        <div className='region-Image'>
            <Image className='image' src={pmap} alt='' height={1596} width={1920}/>
            {/* <Image src='https://res.cloudinary.com/depg2aab2/image/upload/v1671172468/vp/dongrim/dongurlithanepanchayt_ch67ux.jpg' alt='' height={1596} width={1920}/> */}
        </div>
    </div>
  )
}

export default RegionComponent