
/*
 * Cards block
 *
 * Authored structure (matches the actual doc table):
 *
 * | Cards |                                                |
 * |-------|------------------------------------------------|
 * | (img) | FEATURED STORIES                                |
 * |       | Freshen up this fall                            |
 * |       | Explore hundreds of Toyota Genuine Parts and... |
 * |       | Shop Now (as a link)                            |
 * | (img) | FEATURED STORIES                                |
 * |       | An Easier Way to Buy Your Next Toyota           |
 * |       | SmartPath helps you find your Toyota...         |
 * |       | Learn More (as a link)                          |
 * | (img) | OFFERS & SERVICES                               |
 * |       | Toyota Rewards Visa Signature®                  |
 * |       | Earn more with Toyota Rewards Visa Signature... |
 * |       | Learn More (as a link)                          |
 *
 * Each row = one card. Column 1 = background image (the "SmartPath" logo,
 * disclaimer text, etc. are baked into the image itself — no separate
 * authoring needed for those). Column 2 = a stack of plain-text lines:
 *   line 1            -> eyebrow/category label
 *   line 2            -> card heading
 *   middle line(s)    -> optional description
 *   last line (link)  -> CTA button
 */

export default function decorate(block) {
    const rows = [...block.children];
  
    const list = document.createElement('ul');
    list.className = 'cards-list';
  
    rows.forEach((row) => {
      const cells = [...row.children];
      const [imageCell, contentCell] = cells;
  
      const li = document.createElement('li');
      li.className = 'cards-item';
  
      // Background image (logo/disclaimer overlays are part of the image itself)
      const picture = imageCell?.querySelector('picture');
      if (picture) {
        const img = picture.querySelector('img');
        if (img) img.setAttribute('loading', 'lazy');
        const bg = document.createElement('div');
        bg.className = 'cards-bg';
        bg.append(picture);
        li.append(bg);
      }
  
      // Content overlay
      const content = document.createElement('div');
      content.className = 'cards-content';
  
      if (contentCell) {
        // Each authored line is a paragraph; classify by position
        const lines = [...contentCell.children].filter((el) => el.textContent.trim() || el.querySelector('a'));
  
        lines.forEach((line, index) => {
          const link = line.querySelector('a');
  
          if (link) {
            const cta = document.createElement('a');
            cta.className = 'cards-cta';
            cta.href = link.href;
            cta.textContent = link.textContent.trim();
            content.append(cta);
            return;
          }
  
          if (index === 0) {
            const eyebrow = document.createElement('p');
            eyebrow.className = 'cards-eyebrow';
            eyebrow.textContent = line.textContent.trim();
            content.append(eyebrow);
            return;
          }
  
          if (index === 1) {
            const heading = document.createElement('h3');
            heading.className = 'cards-heading';
            heading.textContent = line.textContent.trim();
            content.append(heading);
            return;
          }
  
          // Any remaining lines before the CTA are description text
          const desc = document.createElement('p');
          desc.className = 'cards-description';
          desc.textContent = line.textContent.trim();
          content.append(desc);
        });
      }
  
      li.append(content);
      list.append(li);
    });
  
    block.textContent = '';
    block.append(list);
  }