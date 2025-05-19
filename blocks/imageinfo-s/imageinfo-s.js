
export default function decorate(block) {
        block.classList.add('image-info-block');
       
        const [titleRow, contentRow, buttonRow] = [...block.children];
       
        const titleCell = titleRow.querySelector('td');
        const contentCells = contentRow.querySelectorAll('td');
        const buttonCell = buttonRow.querySelector('td');
       
        const title = titleCell?.textContent;
        const img = contentCells[0]?.querySelector('img');
        const textContent = contentCells[1];
       
        const wrapper = document.createElement('div');
        wrapper.className = 'image-info-wrapper';
       
        // Title
        const heading = document.createElement('h2');
        heading.textContent = title;
        heading.className = 'image-info-title';
       
        // Image
        const image = document.createElement('div');
        image.className = 'image-info-img';
        if (img) {
          image.style.backgroundImage = `url('${img.src}')`;
        }
       
        // Text
        const text = document.createElement('div');
        text.className = 'image-info-text';
        text.innerHTML = textContent?.innerHTML || '';
       
        // Button
        const buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'image-info-button';
        const button = document.createElement('button');
        button.textContent = buttonCell?.textContent || 'Learn More';
        buttonWrapper.appendChild(button);
       
        // Append all
        wrapper.appendChild(heading);
        wrapper.appendChild(image);
        wrapper.appendChild(text);
        wrapper.appendChild(buttonWrapper);
       
        block.innerHTML = '';
        block.appendChild(wrapper);
    }
    