import React from 'react'
import { Modal, Toast } from 'react-bootstrap';
import { Button, Checkbox, Form, Input, InputNumber,Typography } from 'antd';
import { getHallBookingList } from '../../lib/api';
import jsPDF from "jspdf";
import "jspdf-autotable";
const{Text}=Typography
const BookingListModal = ({show,onHide}) => {
    const[isLoading,setIsLoading]=React.useState(false)
    const [crData,setCrData]=React.useState(null)
    const [form] = Form.useForm();
    const[err,setErr]=React.useState("")
    let aKey=1234

    React.useEffect(()=>{
        let isApiSubscribed = true;
        setIsLoading(true)
        async function fetchData() {
            const cData = await getHallBookingList()//applo client  
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
                let arr=[]
                cData.forEach(element => {
                    arr.push(element.hall_booking)
                });
                setCrData(arr)
                setIsLoading(false)
            }
          }
          fetchData()
        
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Hall Booking List";
        const headers = [["Id","Name","Event", "Date","Contact","Address","Facility"]];
    
        const data = crData.map(elt=> [elt.booingId, elt.hirer,elt.event,elt.bookingDate,elt.contactNumber,elt.address,elt.facilityInformation]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
      }
    const onFinish = (values) => {
        if (values.id==aKey) {
            setErr("")
            exportPDF()
        } else {
            setErr("Please provide valid key to download/view the file ")
        }
        // console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
      };  
  return (
    <>
          <Modal
              show={show}
              onHide={() => onHide()}
              className="modal-login"
              size="md"
              autoFocus={false}
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <button onClick={() => onHide()} type="button" className="close">
              <i class="fa fa-times " aria-hidden="true"></i>
              </button>
              <Modal.Body className='p-5 '>
              <div className="mb-4">
              <h6 className="m-0 text-dblue">Please enter your Access Key to view</h6>
          </div>
          <Form
              layout="vertical"
              form={form}
              className='login-form'
              name="basic"

              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
          >
              
              <Form.Item
                name="id"
                label="Access Code"
                rules={[{ required: true, message: 'Please enter valid access Code!' }]}
            >
                <Input />

            </Form.Item>
              {err && <a className='text-danger'>{err}</a>}
            <Form.Item>
               <Button  htmlType="submit">
                      View/Download
                  </Button>
              </Form.Item>
              
          </Form>
              </Modal.Body>
              
          </Modal>
      </>
  )
}

export default BookingListModal