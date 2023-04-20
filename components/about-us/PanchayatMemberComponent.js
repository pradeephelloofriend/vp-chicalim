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
                                <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                            </div>
                            <div className="team-content">
                                <p className="darkGrey">KAMALAPRASAD JAGANNATH YADAV</p>
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
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">MARIA JOAO MASCARENHAS</p>
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
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">NEELAM AVDUTH NAIK</p>
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
                            <Button className='team-level'>Ward 3</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">SUNITADEVI KAMALAPRASAD YADAV</p>
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
                            <Button className='team-level'>Ward 4</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">DATTAPRASAD LAXMAN BANDODKAR</p>
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
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">KAMALAPRASAD JAGANNATH YADAV</p>
                                        <p className="grey">
                                        Sarpanch  </p>
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
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">SAPNA SHIVAJI KURADE</p>
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
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">Shailesh Mayekar</p>
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
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">FRANCISCO JOSE DIOGO FRANCISCO NUNES </p>
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
                                        <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt=""  />
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">POONAM DATTA CHARI</p>
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
                                <Button className='team-level'>Ward 10</Button>
                                <div className='team-content-block'>
                                    <div className="team-block">
                                        <div className="team-image">
                                            <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt="" />
                                        </div>
                                        <div className="team-content">
                                            <p className="darkGrey">AISHWARYA ARVIND KORGAONKAR</p>
                                            <p className="grey">Dy-Sarpanch  </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }>
                        </TreeNode>

                        <TreeNode label={
                            <div>
                                <Button className='team-level'>Ward 11</Button>
                                <div className='team-content-block'>
                                    <div className="team-block">
                                        <div className="team-image">
                                            <Image className='lazy' layout='fill' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt="" />
                                        </div>
                                        <div className="team-content">
                                            <p className="darkGrey">ROMAN FRANCISCO VAZ</p>
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
                                <p className="darkGrey">Amrit Sakhalkar</p>
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