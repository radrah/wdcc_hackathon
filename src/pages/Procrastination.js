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
            <div class="thumbnailsVid"><a href="https://www.netflix.com/watch/81092221?tctx=1%2C0%2C%2C%2C%2C" target="_blank" rel="noreferrer"><img alt="thumbnail1" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e404fffa-c34c-4231-bf06-394cc8e5ee60/Joker_Thumbnail.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210801T010228Z&X-Amz-Expires=86400&X-Amz-Signature=71fae2599401697523b125d160a895229bcf4e3a7553146456271d329d943d81&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Joker_Thumbnail.jpg%22"></img></a></div>
            <div class="thumbnailsVid"><a href="https://www.netflix.com/watch/80226513?trackId=254983298&tctx=1%2C1%2C6b23ddb4-1fc1-48e3-bde6-32bb5c42d0d8-324845200%2C9e17d0cd-7ab1-4946-9a3f-e5a4d14e2aca_112104972X94XX1627774858063%2C9e17d0cd-7ab1-4946-9a3f-e5a4d14e2aca_ROOT%2C" target="_blank" rel="noreferrer"><img alt="thumbnail2" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/510a92b6-2b90-4fe4-8261-3c09b9238c07/How_to_sell_drugs_online_netflix.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210801T010656Z&X-Amz-Expires=86400&X-Amz-Signature=d8001e5200c5afb742237ca3df124eca03ac7a5fddefeb8afd99c5eb5dc21f6c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22How_to_sell_drugs_online_netflix.jpg%22"></img></a></div>
            <div class="thumbnailsVid"><a href="https://www.netflix.com/watch/80077368?trackId=256654739&tctx=2%2C0%2C6b23ddb4-1fc1-48e3-bde6-32bb5c42d0d8-324845200%2C9e17d0cd-7ab1-4946-9a3f-e5a4d14e2aca_112104973X93XX1627774858063%2C9e17d0cd-7ab1-4946-9a3f-e5a4d14e2aca_ROOT%2C" target="_blank" rel="noreferrer"><img alt="thumbnail3" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/67ceb729-9c8c-46d7-9ed6-3fe892fbd5b5/Stranger_Things_Netflix.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210801T011008Z&X-Amz-Expires=86400&X-Amz-Signature=c2a0405ab4cbde27acedb6f6803fb3bc691ff7dd5626a906878c7c5f566b528f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Stranger_Things_Netflix.png%22"></img></a></div>
            </div>
          </div>
          <div>
            <h2 class="read">Reading & Social Media</h2>
            <div class= "windows">
            
            <div class="thumbnails"><a href= "https://facebook.com" target= "_blank" rel="noreferrer"><img src= "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="facebook"></img></a></div>
                <div class="thumbnails"><a href= "https://reddit.com" target= "_blank" rel="noreferrer"><img alt="reddit" src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2"></img></a></div>
                <div class="thumbnails"><a href= "https://twitter.com" target= "_blank" rel="noreferrer"><img alt="twitter" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"></img></a></div>
            </div>
          </div>
          <div>
            <h2><a href= "https://youtube.com" target= "_blank" rel="noreferrer"><img alt="youtube" src="./img/youtube.png"></img></a></h2>
            <div class= "windows">
            <div class="thumbnailsVid"><a href="https://www.youtube.com/watch?v=ktyJIj6i4Qw&pp=sAQA" target="_blank" rel="noreferrer"><img alt="thumbnail1" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/14f2a7fb-8eea-4233-9556-13ec3e3458ca/Youtube_Trending_1.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210801T011338Z&X-Amz-Expires=86400&X-Amz-Signature=3e0af9a911849ab06ca607d190acf16f8f5132b79cef3867c8d791b6d0323b8a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Youtube_Trending_1.webp%22"></img></a></div>
            <div class="thumbnailsVid"><a href="https://www.youtube.com/watch?v=8HEfIJlcFbs&pp=sAQA" target="_blank" rel="noreferrer"><img alt="thumbnail2" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/976ccfd6-eb12-4c46-9d14-962458382e08/Youtube_Trending_2.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210801T011515Z&X-Amz-Expires=86400&X-Amz-Signature=b346961f1110f63c45aa25a4fe33be03ee36c3b06c8e7ef39b45224823a11cc0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Youtube_Trending_2.webp%22"></img></a></div>
            <div class="thumbnailsVid"><a href="https://www.youtube.com/watch?v=CEw-7cMnBDY&pp=sAQA" target="_blank" rel="noreferrer"><img alt="thumbnail3" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/66479c13-d857-4432-8ebe-01f24e5d39ef/Youtube_Trending_3.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210801T011550Z&X-Amz-Expires=86400&X-Amz-Signature=c9b70b216a420290b30e5bd15e800121874d7334890e46d8f8d859c325de7e1a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Youtube_Trending_3.webp%22"></img></a></div>
            </div>
          </div>
          
          <div>
            <div class= "windows">
            <div class="thumbnails"><a href= "https://viz.com" target= "_blank" rel="noreferrer"><img alt="viz" src= "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5867bdd2-da77-45db-b504-d914385836b8/viz-media-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210801T005550Z&X-Amz-Expires=86400&X-Amz-Signature=ef7f4838ae33cafcfda914e1591fdf51972007837e0a80b697f422da0e6eedb2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22viz-media-logo.png%22"></img></a></div>
                <div class="thumbnails"><a href= "https://instagram.com" target= "_blank" rel="noreferrer"><img  alt="instagram" src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg"></img></a></div>
                <div class="thumbnails"><a href= "https://tiktok.com" target= "_blank" rel="noreferrer"><img alt="tiktok" src="https://i.pinimg.com/originals/5d/d2/53/5dd25319e5ab4d5221bbc7da5e8a3bfa.png"></img></a></div>
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
