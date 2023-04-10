import React from 'react'
import {Card} from 'antd'
import Image from 'next/image'
import { gettaxes } from '../../lib/api'
import SpinningComponent from '../spin/SpinningComponent'
const MessageComponent = () => {
    const [crData,setCrData]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        async function fetchData() {
            const cData = await gettaxes() //applo client   
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
    console.log(crData);
  return (
      <>
        {crData !== null? 
        
        <div>
        <h2 className="text-tranfor " >{crData.fees.fieldGroupName}</h2>
        <table>
            <thead>
                <tr>
                    <td className='fw-bolder fs-20'>Sr. No</td>
                    <td className='ps-10 fw-bolder fs-20'>For
                    </td>
                    <td className=' fw-bolder fs-20'>rate</td>
                </tr>
            </thead>

        { crData.fees.feesInformation.map((m) =>
        <tbody>
            <tr>
                <td className='fs-15'>{m.entry}
                </td>
                <td className='px-10 fs-15'>{m.for}</td>
                <td className='text-centre fs-15'>{m.rate}</td>
            </tr>
        </tbody>

        )}
        </table>

        <div className="pt-10">
        <h2 className="text-tranfor">{crData.taxes.fieldGroupName}</h2>
        <table>
            <thead>
                <tr>
                    <td className='fw-bolder fs-20'>Sr. No</td>
                    <td className='ps-10 fw-bolder fs-20'>Taxes
                    </td>
                    <td className=' fw-bolder fs-20'>For
                    </td>
                    <td className='  ps-9 fw-bolder fs-20'>rate</td>
                </tr>
            </thead>

        { crData.taxes.taxInformation.map((m) =>
        <tbody>
            <tr>
                <td className='fs-15'>{m.entry}
                </td>
                <td className='px-10 fs-15'>{m.taxes}</td>
                <td className='fs-15'>{m.for}</td>
                <td className=' ps-9 text-centre fs-15'>{m.rate}</td>
            </tr>
        </tbody>

        )}
        </table>
        </div>
        </div>
        
        
        : <SpinningComponent/>}
       
    
        
      </>
  )
}

export default MessageComponent