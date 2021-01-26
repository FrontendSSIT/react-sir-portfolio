
import React, { useContext, useState } from 'react';
import  firebase from "firebase";
import "firebase/auth";
import firebaseConfig from './firebase.config';
// import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../../images/googles.png';
import './Login.css'
import { userContext } from '../../App';



export const Login = () => {
  const [loginUser,setLoginUser]=useContext(userContext)
  const [user, setUser] = useState({
    isSiggnedIn: false,
    name: '',
    email:'',
    photo: ''
});

localStorage.setItem('email',user.email)
  const history = useHistory();
  const location=useLocation().location?.pathname
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  // const[admin,setAdmin]=useState([]);
  
  // const adminDashboard=(email1)=>{
  //   if(userLogin.email===email1 ){
  //     history.push("/dashboard")
  //   }
  //   else{
      
  //   }
  // }
// useEffect(() => {
//   fetch('https://aqueous-shelf-28126.herokuapp.com/singleService?email='+userLogin.email)
//       .then(res => res.json())
//       .then(data =>console.log(data));
// },[])

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(res=> {
      const {displayName, email, photoURL} = res.user;
            const signedInUser = {
                isSiggnedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signedInUser);
            setLoginUser(signedInUser);
            history.replace(location || "/")
            // storeAuthToken();
     
    })
    .catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  // const storeAuthToken = () => {
  //   firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
  //     .then(function (idToken) {
  //       sessionStorage.setItem('token', idToken);
  //       sessionStorage.setItem('eamil',userLogin.email)
  //       // history.replace(location || "/");
  //     }).catch(function (error) {
  //       // Handle error
  //     });
  // }

  return (
    <div className="container ">
      <div className="row" >
        <div className="col-md-6 shadow p-5 m-auto " style={{ height:"457px", }}>
          <h2>Login With</h2>
          <div className="from-group mt-5">
            <div className="login-btn" onClick={handleGoogleSignIn}>
            <img style={{width:'35px', margin:'0', padding:'0'}} src={google} alt=""/>
            <small>Continue with Google</small></div>
          </div>
        </div>
      </div>
    </div>
  );
};