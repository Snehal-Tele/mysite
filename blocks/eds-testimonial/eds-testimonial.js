export default function decorate(block) {
  // Add a base class to the block for overall styling
  block.classList.add('s-testimonial-block');

  // Get all rows in the block (which are the table rows)
  const rows = Array.from(block.children);

  rows.forEach((row, rowIndex) => {
      row.classList.add('s-testimonial-item'); // Add class for each testimonial item

      // Get all columns in the current row
      const cols = Array.from(row.children);

      cols.forEach((col, colIndex) => {
          if (colIndex === 0) { // First column: Image
              col.classList.add('s-testimonial-image-wrapper');
              // Find the picture element and add a class for styling
              const pic = col.querySelector('picture');
              if (pic) {
                  pic.classList.add('s-testimonial-image');
              }
              // Also, if there's an img directly inside the picture, give it a class
              const img = col.querySelector('picture img');
              if (img) {
                  img.classList.add('s-testimonial-profile-img');
              }
          } else if (colIndex === 1) { // Second column: Text Content
              col.classList.add('s-testimonial-content-wrapper');

              // Get all paragraphs within the content column
              const paragraphs = Array.from(col.children);

              // Assuming the order: message, name, designation
              if (paragraphs[0]) {
                  paragraphs[0].classList.add('s-testimonial-message');
              }
              if (paragraphs[1]) {
                  paragraphs[1].classList.add('s-testimonial-name');
              }
              if (paragraphs[2]) {
                  paragraphs[2].classList.add('s-testimonial-designation');
              }
          }
      });
  });
}