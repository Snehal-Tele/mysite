export default function decorate(block) {
    block.classList.add('list-columns-block');
  
    const row = block.querySelector('div'); // Only one row
    const columns = Array.from(row.children);
  
    // Create a wrapper for the columns
    const wrapper = document.createElement('div');
    wrapper.classList.add('list-wrapper');
  
    const listBlock = document.createElement('div');
    listBlock.classList.add('list', 'block', 'list-columns-block');
    listBlock.setAttribute('data-block-name', 'list');
    listBlock.setAttribute('data-block-status', 'loaded');
  
    columns.forEach((col) => {
      const columnDiv = document.createElement('div');
      columnDiv.classList.add('list-column');
  
      // Wrap list items in a <ul> if not already wrapped
      let list = col.querySelector('ul') || col.querySelector('ol');
      if (!list) {
        list = document.createElement('ul');
        const items = Array.from(col.querySelectorAll('li'));
        items.forEach((li) => list.appendChild(li.cloneNode(true)));
      } else {
        list = list.cloneNode(true);
      }
  
      columnDiv.appendChild(list);
      listBlock.appendChild(columnDiv);
    });
  
    wrapper.appendChild(listBlock);
    block.innerHTML = '';
    block.appendChild(wrapper);
  }
  