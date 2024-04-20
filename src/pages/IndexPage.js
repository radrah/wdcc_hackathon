import React, {useState} from 'react';
import '../styling/index.css';
import Button from '../components/Button';
import '../styling/background.css';

// import '../styling/navbar.css';

function signIn() {
  //take username/pwd as a params
  //then want to import the server
  //then call the correct backend endpoint to make a request
}


function IndexPage() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div class="body">
    <div id={'index-container'}>
      <div className={'spacer'} />
      <div className={'content'}>
        <div class="title">
        <img class= "logo" src="./img/NewLogo.png" alt="logo" style={{width:"600px", height:"175px"}}></img>
          <h2>"Just do it, later."</h2>
        </div>
        
        <div class = "signUpBox">
        <p><b>Username</b></p>
        <div class="stroke">
        <input type="text" id="firstName" name="lastName"></input>
        </div>
        <p><b>Password</b></p>
        <input type={showPassword? "text": "password"} id="passwordInput"></input>
        <br></br>
        <span>
        <input type="checkbox" onClick={() => {setShowPassword(!showPassword)}}/>Show Password
        </span>
        {/* Xavier change this to the next page please */}
        <a href={'/work'}>
        <Button buttonText= 'Sign In' clickAction={signIn}/>
        </a>
        <a href={'/another'}>
        <Button buttonText= 'Sign Up' clickAction={signIn}/>
        </a>
        </div>
      </div>
      <div className={'spacer'} />
    </div>
    </div>
  );
}

export default IndexPage;