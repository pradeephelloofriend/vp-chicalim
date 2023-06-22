
import React from 'react'
import { connect } from 'react-redux';
import {Result,Button} from 'antd'
import { createStructuredSelector } from 'reselect';


import { Modal, Toast } from 'react-bootstrap';

const BookingSuccesModalComponent = ({show,onHide,bookingId}) => {
    
  return (
      <>
          <Modal
              show={show}
              onHide={() => onHide()}
              className="modal-login payment-modal"
              size="sm"
              autoFocus={false}
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <button onClick={() => onHide()} type="button" className="close">
                  <i class="fa fa-times " aria-hidden="true"></i>
              </button>
              <Modal.Body className='p-2'>
                  <Result
                      status="success"
                      title="Hall is booked"
                      subTitle={<a>Please save your Booking Number: <span className='text-danger'><b><u>{bookingId}</u></b></span></a> }
                      extra={[
                          
                          <Button onClick={() => onHide()} key="buy">OK</Button>,
                      ]}
                  />
              </Modal.Body>

          </Modal>
      </>
  )
}

export default BookingSuccesModalComponent