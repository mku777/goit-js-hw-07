
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElements = document.querySelector(".gallery");

const createImageGallery = galleryItems.map(
    ({ original, preview, description }) =>
      `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="large-image.jpg"
    alt="${description}"
  />
</a>
</div>`
  )
  .join("");

galleryElements.insertAdjacentHTML("beforeend", createImageGallery);





console.log(galleryItems);
