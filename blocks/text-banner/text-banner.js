export default function decorate(block) {
    block.classList.add('text-banner-block');

    const rows = Array.from(block.children);

    rows.forEach((row, rowIndex) => {
        const columns = Array.from(row.children);
        columns.forEach((col, colIndex) => {
            if (rowIndex === 0) {
                if (colIndex === 0) {
                    col.classList.add('text-banner-title');
                } else if (colIndex === 1) {
                    col.classList.add('text-banner-description');
                }
            } else if (rowIndex === 1) {
                col.classList.add('text-banner-button');
                const button = col.querySelector('button');
                if (button) {
                    col.appendChild(button);
                }
            }
        });
    });

    // Ensure the block is full width and content is vertically centered
    block.style.width = '100%';
    block.style.display = 'flex';
    block.style.flexDirection = 'column';
    block.style.alignItems = 'center';
    block.style.justifyContent = 'center';
}
