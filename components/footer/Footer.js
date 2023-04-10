import React from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import { useRouter } from 'next/router'
import {createStructuredSelector} from 'reselect';
import {selectFootData} from '../../redux/footer/footSelector';

  
  const Footer = ({footdata}) => {  
   //console.log('footerdata',footdata)

   const router = useRouter()
   function goToPage(pathId,catCode) {
       router.push({
           pathname: `/${pathId}/`,
           query:{catCode:catCode}
       })

   }
     return (
         <>
             <footer className='c-footer'>
                 <div className="container-fluid pb-2 mt-5 mt-md-5">
                     
                    <div className='f-link'>
                        <nav className="nav social social-muted mb-0 justify-content-center">
                            <a href="#">Website Policy</a>
                            <a href="#">Help</a>
                            <a href="#">Disclaimer</a>
                            <a href="#">Terms and Conditions</a>
                            <a href="#">Feedback</a>
                        </nav>
                    </div>
                     <hr className="mt-0 mb-2" />
                     <div className="c-footer-pd text-center">
                            <p className="mb-2 mb-lg-0 adress-block">
                                <span className='mr-5'><i className="fa fa-map-marker" aria-hidden="true"></i> Village Panchayat Dongurli,V.P. Dongurli Thane, Sattri - Goa</span>
                                <span className='mr-5'><i className="fa fa-phone" aria-hidden="true"></i> 2379274</span>
                                <span className='mr-5'> <i className="fa fa-envelope-o" aria-hidden="true"></i> contactus@vpdongurlithane.com</span></p>
                         <p className="mb-2 mb-lg-0">© 2022 VPDongruli. All rights reserved.</p>
                     </div>
                 </div>

             </footer>

         </>
    )
}
const mapStateToProps=createStructuredSelector({
    footdata:selectFootData
})


export default connect(mapStateToProps) (Footer)


