import React from 'react';
import '../styling/about_us.css';
import Button from '../components/Button';
import { getMeaningOfLife } from '../utils/ExampleUtil';
import profile_page from './profile_page';
import work_page from './WorkPage';

function getResult() {
    alert(`Why would you want to do that?`)
  }
  function getSignOut() {
      alert(`Signed out successfully!`)
  }

function about_us() {

  return (
    <div>
      <div class="navbar">
      <a href="/"><img class= "logo" src="./img/logo sc.png"></img></a>
            <div class= "links">
            <a href = {'/profile'}>
            <Button class="btn" buttonText={"Profile"} clickAction={profile_page} />
            </a>
            <a href = {'/work'}>
            <Button class="btn" buttonText={"Go back to Work"} clickAction={work_page} />
            </a>
                {/* <Button class="btn" buttonText={"GO BACK TO WORK"} clickAction={getResult} /> */}
                
            </div>
            {/* <div class="container">
              
            </div> */}
            
        </div>
        <div class="content">
              <div class="text">
                <h1>About Us</h1>
                <p>
                    <b> Meet the creators of Procrastination Hub:</b>
                </p>
                <p>Matthew Young</p>
                <p>Xavier Ladores</p>
                <p>Samin Yasar</p>
                <p>Radwan Rahman</p>
                <p>Nathan Bond</p>
              </div>
                
                <img class= "image" src="./img/IMG_4319.png"></img>
                
            </div>
    </div>

  );
}

export default about_us;