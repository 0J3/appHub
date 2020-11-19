export default class APPLIST extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  static get observedAttributes() {
    return [
      /* array of attribute names to monitor for changes */
      "class",
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
    if (
      (name == "class" && newValue != "contents") ||
      false /* other conditions here lol */
    )
      return console.warn(
        `Changing propriety "${name.toUpperCase()}" of applist-main. This is not reccomended.\nInfo:\n- Propriety: ${name.toUpperCase()}\n- Old Value: ${oldValue}\n- New Value: ${newValue}\n- Element:`,
        this
      );
  }

  adoptedCallback() {
    // called when the element is moved to a new document
    // (happens in document.adoptNode, very rarely used)
  }

  // there can be other element methods and properties
}
