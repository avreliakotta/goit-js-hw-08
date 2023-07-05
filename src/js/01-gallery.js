import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createGalleryItems(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
    </a>
 </li>`;
    })
    .join("");
}
const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryItems(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
var lightbox = new SimpleLightbox(".gallery a", {});

lightbox.options.captionData = "title";
lightbox.options.captionDelay = 250;
lightbox.options.captionPosition = "bottom";