import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { Form, Input, InputNumber, Button, DatePicker, Upload, Space, Card,Icon, Checkbox,message,Select, Spin } from 'antd';

import Axios from 'axios';
import moment from 'moment';
import { getComplainCategoryData, getFacilityTypes } from '../../lib/api';
import BookingSuccesModalComponent from '../modal/BookingSuccesModalComponent';
const { TextArea } = Input;

const HallBookingComponent = () => {
    const dateFormat = 'DD/MM/YYYY HH:mm:ss';
    const[cData,setCdata]=React.useState(null)
    const[bookDate,setBookDate]=React.useState(undefined)
    const [fileList, setFileList] = React.useState([]);
    const [form] = Form.useForm();
    const { getFieldDecorator } =form;
    const[isLoading,setIsLoading]=React.useState(false)
    //console.log(moment().format('DDMMYYYY'))
    const imgUpload = React.useRef(null);
    const [img, setImg] = React.useState(''); 
    const [crData,setCrData]=React.useState(null)
    const [show,setShow]=React.useState(false)
    const [bookingId,setBooikngId]=React.useState(null)
    const handleShow = () => {
        setShow(true)
    };
    const handleClose = () => {

      setShow(false)
      
      
    };
    React.useEffect(()=>{
        let isApiSubscribed = true;
        setIsLoading(true)
        async function fetchData() {
            const cData = await getFacilityTypes()//applo client  
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
                setCrData(cData)
                setIsLoading(false)
            }
          }
          fetchData()
        
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
    //console.log('facility type',crData)
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    function onChangeDate(date, dateString) {
        //console.log('date', moment(date._d).format('YYYY-MM-DD HH:mm:ss'));
        setBookDate(moment(date._d).format('YYYY-MM-DD HH:mm:ss'))
    }
   
    const onFinish = (values) => {
        const imgList=values.idproof.file.originFileObj;
        //console.log('img list',imgList)
        const formData = new FormData();
        formData.append("file",imgList,imgList.name)
        formData.append("title", imgList.name);
        const userAr=[]
        values.users.forEach(element => {
            userAr.push(element.typework+':\r\nName:'+element.fullname+'\r\nContact:'+element.contact)
        });
        
        let userArData='\r\n'+userAr.join('').toString()
        //console.log('values-data',userArData)
        try {
            setIsLoading(true)
            Axios.post(`/api/hallBooking/idUpload`,formData,{ 
                headers:{
                "content-type":"multipart/form-data"
            },
            })
            .then(({data})=>{
                //console.log('image return data',data)
                const dataTemp={
                    dob:moment(values.dobk._d).format('YYYY-MM-DD HH:mm:ss'),
                    noh:values.nohrs,
                    event:values.event,
                    hirer:values.hirer,
                    address:values.address,
                    contact:values.contact,
                    imgId:data.id,
                    bkId:"HB/"+moment().format('DDMMYYYY')+"/"+data.id,
                    fInfo:userArData
                }
                setBooikngId("HB/"+moment().format('DDMMYYYY')+"/"+data.id)
                try {
                    
                    Axios.post(`/api/hallBooking/addNewBooking`,{dataTemp})
                    .then(({ data }) => {
                        setShow(true)
                        form.resetFields()
                        setFileList([])
                        setIsLoading(false)

                        /*message.success({
                            content: 'Your message Has been send successfully',
                            className: 'custom-class',
                            style: {
                              marginTop: '40vh',
                            },
                          });*/
                        //console.log('api-taxi-data',data)
                        
                    })
                    
                } catch (error) {
                    setIsLoading(false)
                }

            })
        } catch (error) {
            
        }
        /**/
        //console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      }
  return (
    <div className="bg-light-pch">
    <div className="container py-10 py-md-10 pb-md-10">
        <h2>Register Chicalim Panchayat Hall</h2>
      <div className="cm-pb-2">
        <Spin spinning={isLoading}>
        <Form
                name="basic"
                form={form}
                layout='vertical'
                className='hb-form'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
            <div className='row'>
             <div className='col-lg-6 col-md-6 col-sm-6'>
                <Card>
                <h5>Booking Information</h5>
                <div className='row'>
                    <div className='col-md-6'>
                    <Form.Item
                    label="Date of Booking"
                    name="dobk"
                    
                    rules={[
                        {
                            required: true,
                            message: 'Please Select Date of Booking!',
                        },
                    ]}
                >
                    <DatePicker 
                    showTime 
                    format={dateFormat} 
                    onChange={onChangeDate}
                    />
                </Form.Item>
                    </div>
                    <div className='col-md-6'>
                    <Form.Item
                    label="Number of Hours"
                    name="nohrs"
                    
                    rules={[
                        {
                            required: true,
                            type:'integer',
                            message: 'Please input no.of Hours!',
                        },
                    ]}
                >
                    <InputNumber/>
                </Form.Item>
                    </div>
                </div>
                

                
                
                <Form.Item
                    label="Event"
                    name="event"
                    
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Event!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Hirer"
                    name="hirer"
                    
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Hirer!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="address"
                    
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Address!',
                        },
                    ]}
                >
                    <TextArea rows={4} />
                </Form.Item>
                
                <Form.Item
                    label="Contact Number"
                    name="contact"
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(/^[0-9]{10}$/),
                            message: 'Please input your Phone Number!',
                        },
                    ]}
                >
                    

                    <Input/>
                </Form.Item>

                

                <Form.Item
                    label="ID Proof"
                    name="idproof"
                    rules={[
                        {
                            required: true,
                            
                            message: 'Please input your ID Proof.!',
                        },
                    ]}
                >
                    <Upload 
                    name="logo"  
                    listType="picture"
                    fileList={fileList}
                    onChange={handleChange}
                    >
                         {fileList.length >= 1 ? null : 
                            <Button>
                            Click to upload
                                </Button>
                         }
                        
                    </Upload>
                   
                </Form.Item>
                </Card>
             
             </div>
             <div className='col-lg-6 col-md-6 col-sm-6'>
                <Card>
                <h5>Facility  Information</h5>
            <p>Fill-up Facility Information(Decorator, Video Grapher, Caterer, etc)</p>

            <Form.List name="users">
                {(fields, { add, remove }) => (
            <>
                {fields.map(({ key, name, ...restField }) => (
                <Space
                    key={key}
                    style={{
                    display: 'flex',
                    marginBottom: 8,
                    }}
                    align="baseline"
                >
                    <Form.Item
                    {...restField}
                    name={[name, 'typework']}
                    rules={[
                        {
                        required: true,
                        message: 'Missing Type Work',
                        },
                    ]}
                    >
                    <Select placeholder="Type of Work">
                        {crData!==null?crData.map((f,idx)=>
                        <Option key={idx} value={f.name}>{f.name}</Option>
                        ):<></>}
                        
                        
                    </Select>
                    </Form.Item>
                    <Form.Item
                    {...restField}
                    name={[name, 'fullname']}
                    rules={[
                        {
                        required: true,
                        message: 'Full Name',
                        },
                    ]}
                    >
                    <Input placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                    {...restField}
                    name={[name, 'contact']}
                    rules={[
                        {
                        required: true,
                        pattern: new RegExp(/^[0-9]{10}$/),
                        message: 'Invalid Contact Number',
                        },
                    ]}
                    >
                    <Input placeholder="Contact Number" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
                ))}
                <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add field
                </Button>
                </Form.Item>
            </>
            )}
            </Form.List>
            
                </Card>
                <Form.Item className='mt-10'
                    
                    >
                        <Button type="primary" htmlType="submit" block  >Book Now</Button>
                    </Form.Item>

                
             </div>
             
            </div>
            </Form>
            
        </Spin>
      </div>
    </div>
   <BookingSuccesModalComponent
   show={show}
   onClick={handleClose}
   onHide={handleClose}
   bookingId={bookingId}
   />
    </div>
  )
}

export default HallBookingComponent