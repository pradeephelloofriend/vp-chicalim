import React from 'react'
import {Card} from 'antd'
const OtherLinksComponent = () => {
  return (
    <section className="wrapper ol-section " >
        <div className="container py-10 py-md-10 pb-md-10">
            <div className='row'>
                <div className='col-3'>
                    <Card className='ol-card ol-hos'
                    title={<b>Hospitals in Dongurli,Satari</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Rural Medical Dispensary Thane</li>
                                <li>Joshi Dr Anuja Dattatray</li>
                                <li>Rural Medical Dispensary ;Keri</li>
                                <li>CHAITANYA HOSPITAL</li>
                                <li>Manguirish Clinic</li>
                                <li>Health Center Poriem</li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-3'>
                    <Card className='ol-card ol-tur'
                    title={<b>Tourist Places Near By Dongurli</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Nersa  </li>
                                <li>Amboli    </li>
                                <li>Sawantwadi   </li>
                                <li>Vengurla   </li>
                                <li>goa</li>
                                <br/>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-3'>
                    <Card className='ol-card ol-park'
                    title={<b>Local Parks in Dongurli,Satari</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Mangeli Waterfall Parking New</li>
                                <li>Usap Waterfall</li>
                                <li>HBC Children Park</li>
                                <li>Flower Valley</li>
                                <li>BICHOLIM WALKING PARK</li>
                                <li>Tariwada Grounds</li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-3'>
                    <Card className='ol-card ol-park'
                    title={<b>Governement Offices near Dongurli,Satari</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Prarthana Hall</li>
                                <li>VEAB OFFICE</li>
                                <li>Water Resources Department</li>
                                <li>Zonal Agriculture office; Bicholim</li>
                                <li>BSNL Office</li>
                                <li>Village Panchayat Office St Estevam</li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OtherLinksComponent