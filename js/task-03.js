const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://picsum.photos/300/200?random=1',
    alt: 'Random picture',
  },
  {
    url: 'https://picsum.photos/300/200?random=2',
    alt: 'Random picture',
  },
  {
    url: 'https://picsum.photos/300/200?random=3',
    alt: 'Random picture',
  },
  {
    url: 'https://picsum.photos/300/200?random=4',
    alt: 'Random picture',
  },
  {
    url: 'https://picsum.photos/300/200?random=5',
    alt: 'Random picture',
  },
  {
    url: 'https://picsum.photos/300/200?random=6',
    alt: 'Random picture',
  },
];


const gallery = document.querySelector(".gallery");

const markup = images
  .map((image) => `<li><img src=${image.url} alt=${image.alt}></li>`)
  .join("");

  gallery.insertAdjacentHTML("beforeend", markup);

