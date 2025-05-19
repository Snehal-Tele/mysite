export default function decorate(block) {
    block.classList.add('imageinfo-s-block');

    const rows = Array.from(block.children);

    rows.forEach((row, rowIndex) => {
        const columns = Array.from(row.children);
        columns.forEach((col, colIndex) => {
            if (rowIndex === 0) {
                col.classList.add('imageinfo-s-title');
            } else if (rowIndex === 1) {
                if (colIndex === 0) {
                    col.classList.add('imageinfo-s-img');
                    const img = col.querySelector('picture');
                    img.classList.add("imagePicture");
                } else if (colIndex === 1) {
                    col.classList.add('imageinfo-s-text');
                    if (!col.innerHTML.trim()) {
                        col.style.display = 'none'; // Hide the column if it's empty
                    }
                }
            } else if (rowIndex === 2) {
                col.classList.add('imageinfo-s-button');
                const button = col.querySelector('button');
                if (button) {
                    col.appendChild(button);
                } /*else {
                    const newButton = document.createElement('button');
                    newButton.textContent = 'Learn More';
                    col.appendChild(newButton);
                }*/
            }
        });
    });

    // Ensure the image column is always visible

}
