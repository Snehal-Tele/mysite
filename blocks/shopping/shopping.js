
/*
 * Shopping Tools block
 * Expected authored structure (table in the document):
 *
 * | Shopping Tools          |              |
 * |--------------------------|--------------|
 * | (icon image)             | Build & Price |
 * | (icon image)             | Search Inventory |
 * | (icon image)             | Special Offers |
 * | (icon image)             | Find a Dealer |
 *
 * The block name row becomes the section heading "Shopping Tools".
 * Each subsequent row becomes one item: first cell = icon (picture),
 * second cell = label text.
 */

export default function decorate(block) {
    // First row is treated as the heading, remaining rows are items
    const rows = [...block.children];
  
    // Build heading
    const heading = document.createElement('h2');
    heading.className = 'shopping-tools-heading';
    heading.textContent = rows[0]?.textContent.trim() || 'Shopping Tools';
  
    // Build item list container
    const list = document.createElement('ul');
    list.className = 'shopping-tools-list';
  
    rows.slice(1).forEach((row) => {
      const cells = [...row.children];
      const [iconCell, labelCell] = cells;
  
      const li = document.createElement('li');
      li.className = 'shopping-tools-item';
  
      // Make the whole item a link if an href was authored in the label cell
      const link = labelCell?.querySelector('a');
      const itemWrapper = document.createElement(link ? 'a' : 'div');
      itemWrapper.className = 'shopping-tools-item-inner';
      if (link) {
        itemWrapper.href = link.href;
      }
  
      // Icon
      const iconWrap = document.createElement('span');
      iconWrap.className = 'shopping-tools-icon';
      const picture = iconCell?.querySelector('picture');
      if (picture) {
        iconWrap.append(picture);
      }
  
      // Label
      const labelWrap = document.createElement('span');
      labelWrap.className = 'shopping-tools-label';
      labelWrap.textContent = link ? link.textContent.trim() : labelCell?.textContent.trim();
  
      itemWrapper.append(iconWrap, labelWrap);
      li.append(itemWrapper);
      list.append(li);
    });
  
    block.textContent = '';
    block.append(heading, list);
  }