import React from 'react';
import '../styling/procrastination.css';
import Button from '../components/Button';
import profile_page from './profile_page';


function getResult() {
  alert(`Why would you want to do that?`)
}

function Procrastination() {

  return (
    <div>
        <div class="navbar">
            <a href="/"><img class= "logo" src="./img/NewLogo.png" alt="logo" style={{width:"500px", height:"125px"}}></img></a>
            <div class= "links">
                <a href = {'/profile'}>
            <Button class="btn" buttonText={"Profile"} clickAction={profile_page} />
            </a>
                <Button class="btn" buttonText={"Go back to Work"} clickAction={getResult} />
            </div>
            
        </div>
      <div class="websites">
          <div>
            <h2><a href= "https://netflix.com" alt="netflix" target= "_blank" rel="noreferrer"><img alt="netflix" src="./img/netflix-2-logo.png"></img></a></h2>
            <div class= "windows">
            <div class="thumbnailsVid"><a href="https://www.netflix.com/watch/81092221?tctx=1%2C0%2C%2C%2C%2C" target="_blank" rel="noreferrer"><img alt="thumbnail1" src="https://wallpapers.com/images/hd/joker-poster-37j6jfl9mk1jmozx.jpg"></img></a></div>
            <div class="thumbnailsVid"><a href="https://www.netflix.com/watch/80226513?trackId=254983298&tctx=1%2C1%2C6b23ddb4-1fc1-48e3-bde6-32bb5c42d0d8-324845200%2C9e17d0cd-7ab1-4946-9a3f-e5a4d14e2aca_112104972X94XX1627774858063%2C9e17d0cd-7ab1-4946-9a3f-e5a4d14e2aca_ROOT%2C" target="_blank" rel="noreferrer"><img alt="thumbnail2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbNuEgTBU9uU8azp3cLkWNHyOmSB-XOMamYXsgLM7_A&s"></img></a></div>
            <div class="thumbnailsVid"><a href="https://www.netflix.com/watch/80077368?trackId=256654739&tctx=2%2C0%2C6b23ddb4-1fc1-48e3-bde6-32bb5c42d0d8-324845200%2C9e17d0cd-7ab1-4946-9a3f-e5a4d14e2aca_112104973X93XX1627774858063%2C9e17d0cd-7ab1-4946-9a3f-e5a4d14e2aca_ROOT%2C" target="_blank" rel="noreferrer"><img alt="thumbnail3" src="https://i.redd.it/ejoejqocppc91.png"></img></a></div>
            </div>
          </div>
          <div>
            <h2 class="read">Reading & Social Media</h2>
            <div class= "windows">
            
            <div class="thumbnails"><a href= "https://facebook.com" target= "_blank" rel="noreferrer"><img src= "https://strikingplaces.com/wp-content/uploads/Facebook-banner.png" alt="facebook"></img></a></div>
                <div class="thumbnails"><a href= "https://reddit.com" target= "_blank" rel="noreferrer"><img alt="reddit" src="https://www.redditinc.com/assets/images/blog/reddit_header_2023-11-28-222257_hthh.png"></img></a></div>
                <div class="thumbnails"><a href= "https://twitter.com" target= "_blank" rel="noreferrer"><img alt="twitter" src="https://media.sketchfab.com/models/8a66de89107f44e2a9524f38d9ed7110/thumbnails/3cdfc6de78e84022936d3af7127a4ecf/79590e616bd349f6b6ee0e19bda3f14e.jpeg"></img></a></div>
            </div>
          </div>
          <div>
            <h2><a href= "https://youtube.com" target= "_blank" rel="noreferrer"><img alt="youtube" src="./img/youtube.png"></img></a></h2>
            <div class= "windows">
            <div class="thumbnailsVid"><a href="https://www.youtube.com/watch?v=ktyJIj6i4Qw&pp=sAQA" target="_blank" rel="noreferrer"><img alt="thumbnail1" src="https://i.ytimg.com/vi/ktyJIj6i4Qw/maxresdefault.jpg"></img></a></div>
            <div class="thumbnailsVid"><a href="https://www.youtube.com/watch?v=8HEfIJlcFbs&pp=sAQA" target="_blank" rel="noreferrer"><img alt="thumbnail2" src="https://i.ytimg.com/vi/8HEfIJlcFbs/maxresdefault.jpg"></img></a></div>
            <div class="thumbnailsVid"><a href="https://www.youtube.com/watch?v=CEw-7cMnBDY&pp=sAQA" target="_blank" rel="noreferrer"><img alt="thumbnail3" src="https://i.ytimg.com/vi/-TE1NoKHb8M/maxresdefault.jpg"></img></a></div>
            </div>
          </div>
          
          <div>
            <div class= "windows">
            <div class="thumbnails"><a href= "https://viz.com" target= "_blank" rel="noreferrer"><img alt="viz" src= "https://assets.viz.com/assets/logo@2x-b76f649f933ea15f45147ff5445a2501c85c7f863ba0aba5ea7bec93c3272cc6.png"></img></a></div>
                <div class="thumbnails"><a href= "https://instagram.com" target= "_blank" rel="noreferrer"><img  alt="instagram" src="https://1000logos.net/wp-content/uploads/2017/02/ig-logo.png"></img></a></div>
                <div class="thumbnails"><a href= "https://tiktok.com" target= "_blank" rel="noreferrer"><img alt="tiktok" src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/TikTok_Logo_Design_History_Evolution_0_1024x1024.jpg?v=1692901546"></img></a></div>
            </div>
          </div>
          <div>
            <h2><a href= "https://disneyplus.com" target= "_blank" rel="noreferrer"><img alt="disneyPlus" src="https://images.unidays.world/i/customers/mobile/active/c8d15a83-499b-4e13-b198-d46f07c118b5"></img></a></h2>
            <div class= "windows">
            <div class="thumbnailsVid"><a href="https://www.disneyplus.com/series/monsters-at-work/6ci9sdc0MA6a" target="_blank" rel="noreferrer"><img alt="thumbnail1" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0a38d087-f0a1-4d46-ad3b-532148fbaff3/Monsters-at-Work_Disney_plus.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210801T011851Z&X-Amz-Expires=86400&X-Amz-Signature=15580a8796c81b7872c3c6261d9e9dd8d5fe2b0e1a7cd3344a9fddf3762367d3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Monsters-at-Work_Disney_plus.png%22"></img></a></div>
            <div class="thumbnailsVid"><a href="https://www.disneyplus.com/movies/luca/7K1HyQ6Hl16P" target="_blank" rel="noreferrer"><img alt="thumbnail2" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3edb8caf-5eda-47bc-944d-53d61266c4cf/Luca_Disneyplus.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210801T012008Z&X-Amz-Expires=86400&X-Amz-Signature=07773d662f2ce1d2a74200ef6dd3d54fca44f9819d37ccd5ec5e2c76a38edd35&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Luca_Disneyplus.jpeg%22"></img></a></div>
            <div class="thumbnailsVid"><a href="https://www.disneyplus.com/series/the-bad-batch/4gMliqFxxqXC" target="_blank" rel="noreferrer"><img alt="thumbnail3" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/34295365-cfb1-4f80-b479-4d1d78a32c10/Bad_Batch_Disney_Plus.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210801T012039Z&X-Amz-Expires=86400&X-Amz-Signature=91ad067d71b421063685efe8dbdefdb2ec27c24957e7429f10a0723b35c33146&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bad_Batch_Disney_Plus.jpg%22"></img></a></div>
            </div>
          </div>
          
      </div>
    </div>

  );
}

export default Procrastination;
