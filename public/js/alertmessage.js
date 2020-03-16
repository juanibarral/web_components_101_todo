// Create a class for the custom element
// This will be an autonomous element
class AlertMessage extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  // Which attributes will trigger attributeChangedCallback
  static get observedAttributes() {
      return ["visible"];
  }

  static get template() {
    if(!this._template) {
      this._template = document.querySelector("#alert-message-template");
    }
    return this._template;
  }
  // ***************************************
  // Custom element lifecycle functions
  // ***************************************
  connectedCallback() {
    let shadowRoot = this.attachShadow({mode: "open"});
    let template = document.querySelector("#alert-message-template");
    shadowRoot.appendChild(
        document.importNode(template.content,true)
    );

    let linkElement = document.createElement("link");
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', 'css/alertmessage.css')
    // Apply external class
    shadowRoot.appendChild(linkElement);

    this.addEventListener("click", e => {
      this.visible = false;
    });
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
