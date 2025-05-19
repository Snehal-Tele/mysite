export default function decorate(block) {
    block.classList.add('image-info-block');

    const rows = Array.from(block.children);

    rows.forEach((row, rowIndex) => {
        const columns = Array.from(row.children);
        columns.forEach((col, colIndex) => {
            if (rowIndex === 0) {
                col.classList.add('image-info-title');
            } else if (rowIndex === 1) {
                if (colIndex === 0) {
                    col.classList.add('image-info-img');
                    const img = col.querySelector('img');
                    if (img) {
                        col.style.backgroundImage = `url('${img.src}')`;
                        img.remove(); // Remove the img element after setting background image
                    }
                } else if (colIndex === 1) {
                    col.classList.add('image-info-text');
                }
            } else if (rowIndex === 2) {
                col.classList.add('image-info-button');
                const button = col.querySelector('button');
                if (button) {
                    col.appendChild(button);
                }
            }
        });
    });
}
