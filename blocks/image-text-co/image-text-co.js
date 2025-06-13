export default function decorate(block) {
  block.classList.add('image-text-block');

  const rows = Array.from(block.children);
  const carouselImages = [];

  // Extract content and images
  rows.forEach((row, index) => {
    const [content, image] = row.children;

    if (image) {
      const picture = image.querySelector('picture');
      if (picture) {
        picture.classList.add('image-text-picture');
        carouselImages.push(picture.cloneNode(true));
      }
    }

    // Only keep the first row's content
    if (index > 0) {
      row.remove();
    }
  });

  // Create carousel container
  const carouselWrapper = document.createElement('div');
  carouselWrapper.className = 'image-carousel';

  const carouselTrack = document.createElement('div');
  carouselTrack.className = 'carousel-track';

  carouselImages.forEach((img) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.appendChild(img);
    carouselTrack.appendChild(slide);
  });

  carouselWrapper.appendChild(carouselTrack);

  // Get the first row's content
  const [firstRow] = block.children;
  const [content] = firstRow.children;
  content.classList.add('image-text-content');

  // Extract heading
  const firstParagraph = content.querySelector('p');
  if (firstParagraph) {
    const heading = document.createElement('h2');
    heading.className = 'image-text-heading';
    heading.textContent = firstParagraph.textContent;
    content.insertBefore(heading, firstParagraph);
    firstParagraph.remove();
  }

  // Create layout row
  const layoutRow = document.createElement('div');
  layoutRow.className = 'image-text-row';
  layoutRow.appendChild(carouselWrapper);
  layoutRow.appendChild(content);

  
  block.appendChild(layoutRow);
}
