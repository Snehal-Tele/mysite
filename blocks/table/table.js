export default async function decorate(block) {
    const jsonUrl = 'https://main--mysite--snehal-tele.aem.live/countries.json';
  
    try {
      const response = await fetch('https://main--mysite--snehal-tele.aem.live/countries.json');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const json = await response.json();
  
      // Check if the JSON is an array and has data
      const data = Array.isArray(json.data) ? json.data : json;
      if (!Array.isArray(data) || data.length === 0) {
        block.textContent = 'No data available.';
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
  