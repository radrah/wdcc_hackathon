import React from 'react';
import '../styling/work.css';
// import '../styling/procrastination.css';
import Button from '../components/Button';
import { getMeaningOfLife } from '../utils/ExampleUtil';
import about_us from './about_us';

var counter= 4;
function getResult() {
  alert(`Why would you want to do that?`)
}
function getSignOut() {
    alert(`Signed out successfully!`)
}

function WorkPage() {

  return (
    <div>
      <div class="navbar">
            <a href="/"><img class= "logo" src="./img/logo sc.png"></img></a>
            <div class= "links">
            <a href = {'/about'}>
                <Button buttonText={"About Us"} clickAction={about_us}/>
                </a>
            <a href = {'/profile'}>
                <Button buttonText={"Profile"} clickAction={about_us}/>
                </a>
            </div>
            
        </div>
      <div class="workContain">
        <div class="space todo">
        <h1>To Do:</h1>
        <ul id="myUL">
  <li>Start Assignment 1</li>
  <li class="checked">Read Textbook</li>
  <li>Finish Quiz 3</li>
</ul>
        </div>
        <div>
          <h2><b>Time Until Break:</b></h2>
          <p>0 <b>H</b> 20 <b>M</b> 27 <b>S</b></p>
        <p class= "procrastinate"><a href={'/procrastination'}>Procrastinate Now!</a></p>
      </div>
      <div class="space later">
        <h1>Things you want to do later:</h1>
        <ul id="myUL">
  <li>Hit the gym</li>
  <li class="checked">Pay bills</li>
  <li>Meet George</li>
  <li>Buy eggs</li>
  <li>Read a book</li>
  <li>Organize office</li>
</ul>
      </div>
      </div>
      
    </div>
  );
}

export default WorkPage;