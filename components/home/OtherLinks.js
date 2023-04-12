import React from 'react'
import Marquee from "react-fast-marquee";
import { NotificationOutlined, HomeOutlined} from '@ant-design/icons';
import { getNoticeHomeData } from '../../lib/api';
import { useRouter } from 'next/router'
import { setTabKey } from '../../redux/menu/menuAction';

const OtherLinks = () => {
    //console.log('noticedata1',noticeData)
    const [nData,setNdata]=React.useState(null)
   

    React.useEffect(()=>{
        //setLoading(true)
        let isApiSubscribed = true;
        async function fetchData() {
            
            const cData = await getNoticeHomeData() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
              console.log('cData',cData)
               setNdata(cData)
            }
          }
         
          fetchData()
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
    //console.log('Ndata = ', nData)


    const router = useRouter()
    function goToPage(pathId, catCode, desc,title,uri,iscomplete) {
        //alert(pathId)
        
                setTabKey(uri)
                router.push({
                    pathname: `/${pathId}/`,
                    query: { catCode: catCode, desc: desc,title:title,uri:uri,iscomplete:iscomplete }
                })
    }

    return (
        <section className='slider-bottom-bar bg-light-orange'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='marquee-box'>
                            <div className="row text-center">
                                <div className="col-md-2">
                                    <h6 class="allheadcolor">What's New</h6>
                                </div>
                                
                                <div className="col-md-10">

                                    <Marquee
                                        gradient={false}
                                        speed={50}
                                    >
                                        {nData!==null?nData.map((data, index) =>
                                            <a key={index} className="text-black ms-7">{data.notices.title
                                            }</a>
                                        ):<></>}
                                    </Marquee>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <div className='col-md-6 news-links'>
                        <div className="kam-topbar-left  align-items-center">
                            <ul className='sm-btm-right d-flex justify-content-between'>

                                <li onClick={() =>goToPage('about-us/panchayat-members','panchayat-members','Panchayat Members','About Us','/panchayat-members/','Yes')}>
                                <span>
                                    <HomeOutlined />
                                    </span>
                                    <a>House Tax</a>
                                    {/* <p>hello</p> */}
                                </li>
                                <li>
                                    <span onClick={()=> window.open("https://users.vpnagoasalcetegoa.com","_blank")}>
                                    <HomeOutlined />
                                    </span>
                                    <a onClick={()=> window.open("https://users.vpnagoasalcetegoa.com","_blank")}>House Tax</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </section>
       
         
    )
}
    
export default OtherLinks
