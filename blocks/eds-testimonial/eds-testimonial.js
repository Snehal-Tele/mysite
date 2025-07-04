export default function decorate(block) {
  block.classList.add('s-testimonial-block'); // Add a main class to the block

  const rows = Array.from(block.children); // Get all direct children (assumed to be rows)

  rows.forEach((row, rowIndex) => {
      row.classList.add('s-testimonial-row'); // Add class to each row

      const columns = Array.from(row.children); // Get all direct children of the row (assumed to be columns)

      if (columns.length === 2) {
          const imageColumn = columns[0];
          const contentColumn = columns[1];

          imageColumn.classList.add('s-testimonial-image-column');
          contentColumn.classList.add('s-testimonial-content-column');

          // Decorate image within the image column
          const pic = imageColumn.querySelector('picture, img'); // Look for picture or img
          if (pic) {
              pic.classList.add('s-testimonial-image');
          }

          // Decorate content within the content column
          const contentChildren = Array.from(contentColumn.children);
          if (contentChildren.length >= 3) {
              // Assuming first child is message, second is name, third is designation
              contentChildren[0].classList.add('s-testimonial-message');
              contentChildren[1].classList.add('s-testimonial-name');
              contentChildren[2].classList.add('s-testimonial-designation');
          }
      } else {
          console.warn('Testimonial row does not have 2 columns:', row);
      }
  });
}