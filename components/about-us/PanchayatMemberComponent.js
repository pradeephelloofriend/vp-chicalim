import React from 'react'
import { Card,Typography,Tabs,Button } from 'antd';
import { Tree, TreeNode } from 'react-organizational-chart';
import Image from 'next/image'
import t1 from '../../public/img/team/Dario.jpg'
const {Title,Text}=Typography
const PanchayatMemberComponent = () => {
  return (
      <>
          <div className='pm-block h-scroll'>
            <Tree label={<div>
                <Button className='team-level'>Directorate Of Panchayats</Button>
                    <div className='team-content-block'>
                        <div className="team-block">
                            <div className="team-image">
                                <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                            </div>
                            <div className="team-content">
                                <p className="darkGrey">Siddhi Halarnkar</p>
                                <p className="grey">
                                    Director  </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            }>
                <TreeNode label={<div>
                    <Button className='team-level'>Block Development Officer</Button>
                    <div className='team-content-block'>
                        <div className="team-block">
                            <div className="team-image">
                                <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                            </div>
                            <div className="team-content">
                                <p className="darkGrey">Suryajirao V. Rane</p>
                                <p className="grey">
                                    BDO  </p>
                            </div>
                        </div>
                    </div>
                    </div>
                }>
                    <TreeNode label={
                    <div>
                        <Button className='team-level'>Sarpanch</Button>
                        <div className='team-content-block'>
                        <div className="team-block">
                            <div className="team-image">
                                <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1670563789/vp/dongrim/team/dong-sarpanch-min_u6tdkd.jpg'} alt=""  />
                            </div>
                            <div className="team-content">
                                <p className="darkGrey">Sarita Fatgo Gaonkar</p>
                                <p className="grey">
                                Sarpanch  </p>
                            </div>
                        </div>
                    </div>
                    </div>
                }>
                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 1</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671104555/vp/dongrim/team/image_1_gu4x1o.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Nilesh S. parwar</p>
                                        <p className="grey">
                                        Member </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>
                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 2</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671166873/vp/dongrim/team/Untitled-1_jzwlen.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Tanaya T. Gaonkar</p>
                                        <p className="grey">
                                        dy sarpanch  </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>

                    
                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 3</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={' https://res.cloudinary.com/depg2aab2/image/upload/v1671104553/vp/dongrim/team/image_3_ijapfh.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Suresh Kashinath Ainkar</p>
                                        <p className="grey">
                                        Member  </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>
                        
                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 5</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671104553/vp/dongrim/team/image_4_ydkehp.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Vinayak Uttam Gawas</p>
                                        <p className="grey">
                                        Member  </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>
                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 6</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671104553/vp/dongrim/team/image_6_pj401y.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Anushka Anant Gawas</p>
                                        <p className="grey">
                                            Member  </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>

                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 7</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671104553/vp/dongrim/team/image_2_cej3l0.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Subhash Gawade</p>
                                        <p className="grey">
                                            Member  </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode> 

                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 8</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671104554/vp/dongrim/team/image_7_fngzoq.jpg '} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Suchita Premkumar Gaonkar </p>
                                        <p className="grey">
                                            Member  </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>

                        <TreeNode label={
                        <div>
                            <Button className='team-level'>Ward 9</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671104553/vp/dongrim/team/image_5_lwsguv.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Sonia Santosh Gaonkar</p>
                                        <p className="grey">
                                            Member  </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>


                    </TreeNode>
                    <TreeNode label={
                    <div>
                        <Button className='team-level'>Secretary</Button>
                        <div className='team-content-block'>
                        <div className="team-block">
                            <div className="team-image">
                                <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                            </div>
                            <div className="team-content">
                                <p className="darkGrey">Sarvesh R. Gaonkar</p>
                                <p className="grey">
                                Secretary  </p>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                }>
                        <TreeNode label={<div><Button>Staffs</Button></div>}>
                            
                            </TreeNode>
                    </TreeNode>
                </TreeNode>
                
            </Tree>
             
          </div>
      </>
  )
}

export default PanchayatMemberComponent