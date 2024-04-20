import React from 'react';
import '../styling/profile_page.css';
import Button from '../components/Button';
import { getMeaningOfLife } from '../utils/ExampleUtil';
import about_us from './about_us';
import Procrastination from './Procrastination';

function getResult() {
    alert(`Why would you want to do that?`)
  }
  function getSignOut() {
      alert(`Signed out successfully!`)
  }
  function aboutUs() {

  }

function profile_page() {

  return (
    <div>
      <div class = 'body'>
      <div class="navbar">
      <a href="/"><img class= "logo" src="./img/logo sc.png"></img></a>
            <div class= "links">
              <a href = {'/about'}>
                <Button class="btn" buttonText={"About Us"} clickAction={about_us}/>
                </a>
              <a href = {'/procrastination'}>
                <Button class="btn" buttonText={"Procrastinate"} clickAction={Procrastination}/>
                </a>
                <Button class="btn" buttonText={"Go back to Work"} clickAction={getResult} />
                
            </div>
        </div>
        <div class="whatever">
        <div class="profile">
          <h1>Profile</h1><br></br>
          <p>
            <b>Name: </b>Samin Yasar<br></br> <b>Username: </b>syas141<br></br> <b>Email: </b>samin123@gmail.com<br></br><br></br> 
          </p>
          <h2>Weekly Leaderboard</h2>
          <table>
            <th>Position </th>
            <th>Name </th>
            <th>Hours Procrastinated </th>
            <tr>
              <td>1</td>
              <td>Radwan</td>
              <td>12</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Matthew</td>
              <td>10</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Xavier</td>
              <td>9</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Samin</td>
              <td>6</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Nathan</td>
              <td>5</td>
            </tr>
          </table>
          <br></br><br></br>
        </div>
        <img class = "chart image" src = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0f297862-be32-4fe8-b270-8cbf9ec256b1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210731T232805Z&X-Amz-Expires=86400&X-Amz-Signature=cea108d868cf99ded6178300147d04ce00e6d954e1d92f1cc03b60d6024e5c7e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"></img>
        </div>
        </div>
    </div>

  );
}

export default profile_page;
