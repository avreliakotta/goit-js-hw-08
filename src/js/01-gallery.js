import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


console.log(galleryItems);
//  console.log(createGalleryItems(galleryItems));

function createGalleryItems(arr){
   return arr.map(({preview, original, description})=>{return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
 }).join('');
  
  } 
  console.log('Hello')
  const galleryContainer= document.querySelector('.gallery');
  console.log('gallay-container',galleryContainer);
  const galleryMarkup=createGalleryItems(galleryItems);
  console.log(galleryMarkup)
  galleryContainer.insertAdjacentHTML('beforeend',galleryMarkup);
  galleryContainer.addEventListener('click',onClick);
  
  function onClick(event){
    event.preventDefault();
    console.dir(event.target);
    if(!event.target.classList.contains('gallery__image')){
      return
    }else{
      const url= event.target.dataset.source;
       const instance = basicLightbox.create(`
      <img src="${url}" width="1200" height="900">
        `)
     instance.show()
     document.addEventListener('keydown',(event=>{
      if(event.code ==='Escape'){
        instance.close();
      }
     }));
    }
  }