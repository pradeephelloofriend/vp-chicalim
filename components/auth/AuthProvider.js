import React from 'react'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { setCurrentUser } from '../../redux/user/userAction';
import { selectCuser } from '../../redux/user/userSelector';
import { createUserProfileDocument, auth } from '../../firebase/firebaseUtility';
const AuthProvider = ({children,setCurrentUser,cUser}) => {
    React.useEffect(()=>{
        if(cUser == null){
           auth.onAuthStateChanged(async userAuth => {
                //console.log(userAuth)

                if (userAuth) {
                    const userRef = await createUserProfileDocument(userAuth);
                    userRef.onSnapshot(snapShot => {
                        //console.log('snapshot', snapShot())
                        
                        setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data()
                        })
                        
                        
                        alert('successfully signed in')
                    })
                }
            })
        }
        
    },[cUser])
  return (
    <>
    {children}
    </>
  )
}
const mapStateToProps = createStructuredSelector({
    cUser: selectCuser,
})
const mapDispatchToProps=dispatch=>({
    setCurrentUser: cUser => dispatch(setCurrentUser(cUser)),
  })
export default connect(mapStateToProps,mapDispatchToProps) (AuthProvider)