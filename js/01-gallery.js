import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElements = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </div>
    `
    )
    .join("");
}
const addGalleryMarkup = createGalleryMarkup(galleryItems);
galleryElements.insertAdjacentHTML("beforeend", addGalleryMarkup);

//  basicLightbox library

galleryElements.addEventListener("click", onLargeImageShow);

function onLargeImageShow(event) {
  event.preventDefault();
  if (event.target.classList.value !== "gallery__image") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">
    `
  );
  instance.show();

  galleryElements.addEventListener("keydown", (event) =>
  {
    if (event.code === "Escape") {
        instance.close();
    }
  });
  }

