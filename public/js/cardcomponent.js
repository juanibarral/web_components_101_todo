// Create a class for the element
class CardComponent extends HTMLElement {
  constructor() {
      // Always call super first in constructor
      super();

      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});

      // Create title div
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'asset-wrapper');

      const cardHeader = document.createElement('div');
      cardHeader.setAttribute('class', 'snap-header');
      cardHeader.textContent = this.getAttribute("mod-type");

      const assetContent = document.createElement('div');

      const assetLink = document.createElement('h3');
      const modLink = document.createElement('a');
      modLink.setAttribute('class', 'snap-mod-link');
      const modIcon = document.createElement('img');
      modIcon.setAttribute('class', 'mod-icon')
      modIcon.src = this.getAttribute('mod-icon');
      const modName = document.createElement('p');
      modName.textContent = this.getAttribute('mod-name');

      // Apply external styles to the shadow dom
      const linkElem = document.createElement('link');
      linkElem.setAttribute('rel', 'stylesheet');
      linkElem.setAttribute('href', 'css/cardcomponent.css');

      // Attach the created elements to the shadow dom
      shadow.appendChild(linkElem);
      shadow.appendChild(wrapper);
      wrapper.appendChild(cardHeader);

      wrapper.appendChild(assetContent);
      assetContent.appendChild(assetLink);
      assetLink.appendChild(modLink);
      modLink.appendChild(modIcon);
      modLink.appendChild(modName);
  }
}

// Define the new element
customElements.define('card-component', CardComponent);
