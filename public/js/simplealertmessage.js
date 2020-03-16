// Create a class for the custom element
// This will be an autonomous element
class AlertMessage extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Add an event listener to hide the element when clicked
    this.addEventListener("click", e => {
      this.visible = false;
    });
  }

  // Which attributes will trigger attributeChangedCallback
  static get observedAttributes() {
      return ["visible"];
  }
  // ***************************************
  // Custom element lifecycle functions
  // ***************************************
  connectedCallback() {
    console.log("alert-message connected to page");
  }

  disconnectedCallback() {
    console.log("alert-message disconnected from page");
  }

  adoptedCallback() {
    console.log("alert-message adopted in page");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("alert-message attr: " + name + " changed from '"
    + oldValue + "' to '" + newValue + "'");
  }
  // Getter for the visible property
  get visible() {
    return this.hasAttribute('visible');
  }

  // Setter for the visible property
  set visible(val) {
    if (val) {
      this.setAttribute('visible', '');
    }
    else {
      this.removeAttribute('visible');
    }
  }
}

// Define the new element
customElements.define('alert-message', AlertMessage);
