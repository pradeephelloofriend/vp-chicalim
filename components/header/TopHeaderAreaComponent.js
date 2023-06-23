import React from 'react'
import { connect, Connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { setRegStatus } from '../../redux/menu/menuAction';
import { selectCuser } from '../../redux/user/userSelector';
import LoginModalComponent from '../modal/LoginModalComponent'
import BookingListModal from '../modal/BookingListModal';

const TopHeaderAreaComponent = ({setRegStatus,cUser}) => {
    const [show,setShow]=React.useState(false)
    const [show1,setShow1]=React.useState(false)
  const handleShow = () => {
      setShow(true)
  };
  const handleClose = () => {
    setShow(false)
    setRegStatus(false)
  };
    const handleShow1 = () => {
        setShow1(true)
    };
    const handleClose1 = () => {
    setShow1(false)
    
    };
    return (
        <>
            <div className="top-header-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="header-content-left">
                                {/*<a>Welcome To Dongruli Panchayat!</a>*/}
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header-content-right">
                                
                                    <a href="tel:7588405843" className="me-xl-8 text-dblue">
                                    <i className="fa fa-mobile me-xl-1"></i>
                                        Call Us For Inquiry:7588405843
                                    </a>
                                    <a href="mailto:hello@surety.com" className="me-xl-8 text-dblue ">
                                    <i className="fa fa-envelope-o me-xl-1"></i>
                                        Email: vpchicalim@gmail.com
                                    </a>
                                    <a href="#" onClick={()=>handleShow1()} className="me-xl-8 text-dblue blink1">
                                    <i className="fa fa-angle-double-right me-xl-1 "></i>
                                        View hall booking list
                                    </a>
                                    {cUser!==null?
                                    <a href="#" onClick={()=>handleShow()} className="text-red">
                                    <i className="fa fa-sign-out me-xl-1"></i>
                                        Log Out
                                    </a>
                                    :
                                    <a href="#" onClick={()=> window.open("https://chicalim-user.netlify.app/","_blank")} className="text-white">
                                    <i className="fa fa-user-o me-xl-1"></i>
                                        Login/Register
                                    </a>
                                    }
                                    
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LoginModalComponent
            show={show}
            onClick={handleClose}
            onHide={handleClose}
            />
            <BookingListModal
            show={show1}
            onClick={handleClose1}
            onHide={handleClose1}
            />
        </>
    )
}
const mapStateToProps=createStructuredSelector({
    cUser:selectCuser
})
const mapDispatchToProps=dispatch=>({
    setRegStatus:data=>dispatch(setRegStatus(data))
  })
export default connect(mapStateToProps,mapDispatchToProps) (TopHeaderAreaComponent)
