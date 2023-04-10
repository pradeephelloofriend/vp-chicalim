import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { Button } from 'antd';
import { MobileOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { selectMenuData } from '../../redux/menu/menuSelector';
import { setTabKey } from '../../redux/menu/menuAction';
import { createStructuredSelector } from 'reselect'
import { useRouter } from 'next/router'

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const MenuItemSecondComponent = ({ menuData ,setTabKey}) => {
    console.log('menuData2', menuData)

    const router = useRouter()
     //console.log('router', router)
    function goToPage(pathId, catCode, desc,title,uri,iscomplete) {
        //alert(pathId)
                setTabKey(uri)
                router.push({
                    pathname: `/${pathId}/`,
                    query: { catCode: catCode, desc: desc,title:title,uri:uri,iscomplete:iscomplete }
                })
    }
    function goToPage2(pathId,iscomplete) {
        
            //setTabKey(uri)
            router.push({
                pathname: `/${pathId}/`,
                query: {iscomplete:iscomplete }
            })
    }
    return (
        <>

            <Menu className=" nav-menu" activeKey="/home">
            {menuData?menuData.map((i, index) =>
               
               i.node.childItems.edges.length<1 ?
                   <Menu.Item key={index}>
                       <Menu.Link onClick={() => goToPage2(i.node.route.link,i.node.route.iscomplete)} >{i.node.label}</Menu.Link>
                   </Menu.Item>
                   :
                   <Menu.SubMenu key={index} title={i.node.label} id="nav-dropdown" renderMenuOnMount={true}>
                       {menuData?i.node.childItems.edges.map((d,ind) =>
                   
                           <Menu.Item key={ind} eventKey={`${index}.${ind}`} onClick={() =>goToPage(i.node.route.link+'/'+d.node.route.link,d.node.route.code,d.node.label,i.node.label,d.node.uri,d.node.route.iscomplete)} >{d.node.label} </Menu.Item>
                           ):<></>}



                   </Menu.SubMenu>
           ):<></>}

                        {/*<Nav.Item>
                            <Nav.Link onClick={()=>router.push('/dashboard/')}>Dashboard</Nav.Link>
                        </Nav.Item>*/}

                        
            </Menu>

        </>
    )
}

const mapStateToProps = createStructuredSelector({
    menuData: selectMenuData
})
const mapDispatchToProps=dispatch=>({
    setTabKey:data=>dispatch(setTabKey(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(MenuItemSecondComponent)
