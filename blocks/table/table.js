export default async function decorate(block) {
    const jsonUrl = 'https://main--mysite--snehal-tele.aem.live/countries.json';
  
    try {
      const response = await fetch(jsonUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
  
      // Log the data for debugging
      console.log('Fetched JSON:', data);
  
      // Check if data is an array and has at least one item
      if (!Array.isArray(data) || data.length === 0) {
        block.textContent = 'No data available to display.';
        return;
      }
  
      // Create table
      const table = document.createElement('table');
      table.className = 'json-table';
  
      // Create table header
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);
  
      // Create table body
      const tbody = document.createElement('tbody');
      data.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
          const td = document.createElement('td');
          td.textContent = value;
          row.appendChild(td);
        });
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
  
      // Clear block and append table
      block.textContent = '';
      block.appendChild(table);
    } catch (error) {
      console.error('Error fetching or rendering JSON:', error);
      block.textContent = 'Failed to load data.';
    }
  }
  