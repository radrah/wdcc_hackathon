import React from 'react';
import '../styling/profile_page.css';
import Button from '../components/Button';
import about_us from './about_us';
import Procrastination from './Procrastination';

function getResult() {
    alert(`Why would you want to do that?`)
  }

function profile_page() {

  return (
    <div>
      <div class = 'body'>
      <div class="navbar">
      <a href="/"><img class= "logo" src="./img/NewLogo.png" alt="logo" style={{width:"500px", height:"125px"}}></img></a>
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
        <img class = "chart image" alt="chart" style={{width: "750px"}} src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Pushkin_population_history.svg/1200px-Pushkin_population_history.svg.png"></img>
        </div>
        </div>
    </div>

  );
}

export default profile_page;
