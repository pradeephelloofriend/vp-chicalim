import React from 'react'
import {Card} from 'antd'
const OtherLinksComponent = () => {
  return (
    <section className="wrapper ol-section " >
        <div className="container py-10 py-md-10 pb-md-10">
            <div className='row'>
                <div className='col-3'>
                    <Card className='ol-card ol-hos'
                    title={<b>Hospitals in Chicalim</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>V.M Salgaokar Hospital</li>
                                <li>Pai Hospital</li>
                                <li>Cottage Hospital</li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-3'>
                    <Card className='ol-card ol-tur'
                    title={<b>Tourist Places Near By Chicalim</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Bogmalo Beach  </li>
                                <li>Three Kings Church    </li>
                                <li>Hollant Beach  </li>
                                <li>Sao Jacinto Island   </li>
                                <li>Naval Aviation Museum</li>
                                <br/>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-3'>
                    <Card className='ol-card ol-park'
                    title={<b>Local Parks in Chicalim</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Joggers Park</li>
                                <li>Chicalim Sports Club</li>
                                <li>Green Space Chicalim</li>
                                <li>Childrens Park</li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-3'>
                    <Card className='ol-card ol-park'
                    title={<b>Government Offices near Chicalim</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Electricity Sub-section Office</li>
                                <li>Chicalim Panchayat Ground</li>
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