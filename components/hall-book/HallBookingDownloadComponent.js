import React from 'react'
import {Result,Button} from 'antd'
import { getHallBookingById, getHallBookingSlots } from '../../lib/api';
import jsPDF from "jspdf";
import "jspdf-autotable";
const HallBookingDownloadComponent = ({onHide,bookingId}) => {
    const[isLoading,setIsLoading]=React.useState(false)
    const [crData,setCrData]=React.useState(null)
    const [hbSlotData,setHbslotData]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        setIsLoading(true)
        async function fetchData() {
            const cData = await getHallBookingById(Number(bookingId))//applo client  
            const hbSlot=await getHallBookingSlots()
            // 👇️ only update state if component is mounted
            //console.log('cddatahalllist',cData)
            if (isApiSubscribed) {
                let arr=[]
                
                /*cData.forEach(elt => {
                    arr.push({
                        booingId:elt.databaseId, 
                        hirer:elt.hall_booking.hirer,
                        event:elt.hall_booking.event,
                        bookingDate:elt.hall_booking.bookingDate,
                        contactNumber:elt.hall_booking.contactNumber,
                        address:elt.hall_booking.address,
                        facilityInformation:elt.hall_booking.facilityInformation
                    })
                });*/
                setHbslotData(hbSlot)
                setCrData(cData)
                //console.log('arr',arr)
                setIsLoading(false)
            }
          }
          if (bookingId!==null) {
            fetchData()
          }
          
        
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[bookingId])
    const exportPDF = () => {
      const sTaken=crData.hall_booking.slotTaken.split(',')
                const sArry=[]
                        sTaken.forEach(ex => {
                           const tempData=hbSlotData.find((x)=>{return ex==x.termTaxonomyId})
                           //console.log('tempdata',tempData)
                           
                           /*tempData.forEach(ed => {
                            
                           });*/
                           sArry.push(tempData.name)
                            
                        });
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Hall Booking Information";
        const headers = [["Id","Name","Event", "Date","Slot","Contact","Address","Facility"]];
    
        const data =[[
            crData.databaseId, 
            crData.hall_booking.hirer,
            crData.hall_booking.event,
            crData.hall_booking.bookingDate,
            sArry.toString(),
            crData.hall_booking.contactNumber,
            crData.hall_booking.address,
            crData.hall_booking.facilityInformation 
        ]]
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
      }
  return (
    <>
    <Result
                      status="success"
                      title="Hall is booked"
                      subTitle={<a>Please save your Booking Number: <span className='text-danger'><b><u>{bookingId}</u></b></span></a> }
                      extra={[
                          
                          <Button onClick={() => onHide()} key="buy">Close</Button>,
                          <Button onClick={() => exportPDF()} key="1buiy1">View/Download</Button>
                      ]}
                  />
    </>
  )
}

export default HallBookingDownloadComponent