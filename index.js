import{S as f,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="https://pixabay.com/api/",d="48245420-0c25989f875d1fe30dc45addb";function h(s){const o=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function p(s){return s.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:m})=>`<li class="gallery-item">
            <a class="gallery-link" href="${r}">
                <img class="gallery-image" src="${o}" alt="${n}"/>
            </a>
                <ul class="inform">
                    <li class="inform-item">
                        <h2 class="inform-title">Likes:</h2>
                        <p class="inform-dan">${e}</p>
                    </li>
                    <li class="inform-item">
                        <h2 class="inform-title">Views:</h2>
                        <p class="inform-dan">${t}</p>
                    </li>
                    <li class="inform-item">
                        <h2 class="inform-title">Comments:</h2>
                        <p class="inform-dan">${i}</p>
                    </li>
                    <li class="inform-item">
                        <h2 class="inform-title">Downloads:</h2>
                        <p class="inform-dan">${m}</p>
                    </li>
                </ul>
            
    </li>`).join("")}const y=document.querySelector(".form-search"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";const g=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),F=s=>{s.preventDefault();let o=s.target.elements.user_query.value.trim();if(c.innerHTML=" ",!o){l.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}a.style.display="inline-block",h(o).then(r=>{r.hits.length===0&&l.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),c.insertAdjacentHTML("beforeend",p(r.hits)),g.refresh(),a.style.display="none"}).catch(r=>{console.log(r.message),l.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topCenter",backgroundColor:"#EF4040",messageColor:"#FFFFFF"})}).finally(()=>{s.target.reset(),a.style.display="none"})};y.addEventListener("submit",F);
//# sourceMappingURL=index.js.map
