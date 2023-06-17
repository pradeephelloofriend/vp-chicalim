import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Form, Input, InputNumber, Button, DatePicker, Upload, Space, Icon, Checkbox,message,Select, Spin } from 'antd';
import Axios from 'axios';
import { getComplainCategoryData } from '../../lib/api';
const { TextArea } = Input;
const HallBookingComponent = () => {
    const[cData,setCdata]=React.useState(null)
    const [form] = Form.useForm();
    const { getFieldDecorator } =form;
    const[isLoading,setIsLoading]=React.useState(false)
    React.useEffect(()=>{
        

    },[])
  return (
    <div className="bg-light-pch">
    <div className="container py-10 py-md-10 pb-md-10">
        <h2>Register Chicalim Panchayat Hall</h2>
      <div className="cm-pb-2">
        <Spin spinning={isLoading}>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
                <Form
                name="basic"
                form={form}
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 20,
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >

            {/* <Form.Item
                label="Booking ID"
                name="bookingID"
                
                rules={[
                    {
                        required: true,
                        type:"email",
                        message: 'Please input your Booking ID!',
                    },
                ]}
            >
                <Input />
            </Form.Item> */}

            {/* <Form.Item
                wrapperCol={{
                    offset: 6,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit"  > Send OTP</Button>
            </Form.Item> */}
            
            {/* <Form.Item
                label="Enter OTP"
                name="otpno"
                
                rules={[
                    {
                        required: true,
                        message: 'Please input your OTP!',
                    },
                ]}
            >
                <Input />
            </Form.Item> */}
            
            {/* <Form.Item
                wrapperCol={{
                    offset: 6,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit"  > Submit</Button>
            </Form.Item> */}

            <h5>Booking Information</h5>
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
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                </Form.Item>

                <Form.Item
                    label="Number of Hours"
                    name="nohrs"
                    
                    rules={[
                        {
                            required: true,
                            message: 'Please input no.of Hours!',
                        },
                    ]}
                >
                    <InputNumber min={1} max={100} />
                </Form.Item>
                
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
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Contact Number"
                    name="contact"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Phone Number!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit"  >Verify Contact Number</Button>
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
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button>
                             Click to upload
                        </Button>
                    </Upload>
                </Form.Item>
            
            
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
                        <Option value="a">Type1</Option>
                        <Option value="b">Type2</Option>
                    </Select>,
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
                        message: 'Missing Contact Number',
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

                <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit"  >Submit</Button>
                </Form.Item>
            </Form>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'></div>
        </div>

          
          </Spin>
      </div>
    </div>
    </div>
  )
}

export default HallBookingComponent