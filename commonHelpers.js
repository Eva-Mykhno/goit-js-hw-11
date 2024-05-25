import{S as m,i as f}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const d=document.querySelector(".gallery");function p(r){return r.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      alt="Tags: ${e.tags}. Likes: ${e.likes},   Views: ${e.views},   Comments: ${e.comments},   Downloads: ${e.downloads}"
    />
  </a>
  <div class="gallery-item-info">
  <p class="info-image"><b class="info-image-text">Likes</b><span class="info-image-number">${e.likes}</span></p>
  <p class="info-image"><b class="info-image-text">Views</b><span class="info-image-number">${e.views}</span></p>
  <p class="info-image"><b class="info-image-text">Comments</b><span class="info-image-number">${e.comments}</span></p>
  <p class="info-image"><b class="info-image-text">Downloads</b><span class="info-image-number">${e.downloads}</span></p>
  </div>
</li>`).join("")}const g=new m(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250,className:"modal-image"});function y(r){const e=p(r);d.insertAdjacentHTML("afterbegin",e),g.refresh()}function h(r){const e="https://pixabay.com/api/",o=new URLSearchParams({key:"20488832-3f7ee310b3351fba3525ae600",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${e}?${o}`;return fetch(n).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const b="/goit-js-hw-11/assets/octagon-17638c89.svg",a=document.querySelector(".form"),w=document.querySelector(".gallery"),c=document.querySelector(".loader"),i=document.querySelector(".search-btn");i.disabled=!0;u();a.input.addEventListener("input",()=>{i.disabled=!a.input.value.trim()});a.addEventListener("submit",L);function L(r){r.preventDefault(),w.innerHTML="",$();const e=r.target.elements.input.value.trim();e&&(i.disabled=!0,h(e).then(o=>{if(o&&o.hits&&o.hits.length)y(o.hits);else throw new Error("Sorry, there are no images matching your search query. Please try again!")}).catch(o=>{f.error({message:o.message,position:"topRight",backgroundColor:"#EF4040",theme:"dark",iconUrl:b,maxWidth:354,messageSize:"16"})}).finally(()=>{u(),i.disabled=!0}),a.reset())}function $(){c.style.display="inline-block"}function u(){c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
