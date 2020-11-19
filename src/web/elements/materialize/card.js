export default class CARD extends HTMLElement {
  // Custom Methods
  _customEvents = {};

  checkWarn() {
    let doWarn = this.getAttribute("disableWarnings");
    doWarn = !(
      doWarn == false ||
      doWarn == "false" ||
      doWarn == void 0 ||
      doWarn == 0
    );

    try {
      let doHeadWarn = document.head.getAttribute("disableWarnings");
      doHeadWarn = !(
        doHeadWarn == false ||
        doHeadWarn == "false" ||
        doHeadWarn == void 0 ||
        doHeadWarn == 0
      );

      if (doWarn == true && doHeadWarn == false) doWarn = false;
    } catch (error) {}

    this.doWarn = doWarn;

    return doWarn;
  }

  _title = "";

  setTitle(title) {
    this._title = title;
  }

  getTitle() {
    return this._title;
  }

  addButtons() {
    const btn1text = this.getAttribute("button1");
    const btn2text = this.getAttribute("button2");
    const action = this.getElementsByClassName("card-action")[0];

    action.innerHTML = "";

    if (action == void 0) {
      throw new Error("card-action NOT FOUND");
    }
    if (
      btn1text != "" &&
      btn1text != void 0 &&
      typeof btn1text == typeof "string kthx"
    ) {
      const btn1 = document.createElement("a");
      btn1.class = "btn-1 card-btn btn";
      const btn1el = action.appendChild(btn1);

      btn1el.addEventListener(
        "click",
        (e) => {
          this.dispatchEvent(this._customEvents.btn1click);
        },
        false
      );
      // 2nd button
      if (
        btn2text != "" &&
        btn2text != void 0 &&
        typeof btn2text == typeof "string kthx"
      ) {
        const btn2 = document.createElement("a");
        btn2.class = "btn-2 card-btn btn";
        const btn2el = action.appendChild(btn2);

        btn2el.addEventListener(
          "click",
          (e) => {
            this.dispatchEvent(this._customEvents.btn2click);
          },
          false
        );
      }
    }
  }

  // Default Element Methods
  constructor() {
    // Call Default Constructor
    super();

    // Create events
    this._customEvents.btnclick = new Event("btnclick");
    this._customEvents.btn1click = new Event("btn1click");
    this._customEvents.btn2click = new Event("btn2click");

    this.addEventListener(
      "btn1click",
      (e) => {
        this.dispatchEvent(this._customEvents.btnclick);
      },
      false
    );
    this.addEventListener(
      "btn2click",
      (e) => {
        this.dispatchEvent(this._customEvents.btnclick);
      },
      false
    );

    // Setup Element Inner HTML

    const container = this;

    const row = document.createElement("div");
    row.classList.add("row");

    const col = document.createElement("div");
    col.classList.add("col");
    col.classList.add("s12");
    col.classList.add("m6");

    const innerCardContainer = document.createElement("div");
    innerCardContainer.classList.add("card");
    innerCardContainer.classList.add("blue-grey");
    innerCardContainer.classList.add("darken-1");

    const innerCard = document.createElement("div");
    innerCard.classList.add("card-content");
    innerCard.classList.add("white-text");

    const cardTitle = document.createElement("span");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = this.getAttribute("title") || "No title specified";

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardDescription.innerText =
      this.getAttribute("description") || "No description specified";

    const actionDiv = document.createElement("div");
    actionDiv.classList.add("card-action");

    // Title & Description
    innerCard.appendChild(cardTitle);
    innerCard.appendChild(cardDescription);

    // Card
    innerCardContainer.appendChild(innerCard);
    innerCardContainer.appendChild(actionDiv);

    // Core Structure
    col.appendChild(innerCardContainer);
    row.appendChild(col);
    container.appendChild(row);

    // add buttons initially
    this.addButtons();

    // <div class="row">
    //   <div class="col s12 m6">
    //     <div class="card blue-grey darken-1">
    //       <div class="card-content white-text">
    //         <span class="card-title">Card Title</span>
    //         <p>
    //           I am a very simple card. I am good at containing small bits of
    //           information. I am convenient because I require little markup to use
    //           effectively.
    //         </p>
    //       </div>
    //       <div class="card-action">
    //         <a href="#">This is a link</a>
    //         <a href="#">This is a link</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>;
  }

  connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
    let title = this.getAttribute("title");

    this.checkWarn();

    this.addButtons();

    if (title == null || title == false || title == void 0) {
      if (this.doWarn) {
        console.warn(
          `Initialized Materialize-Card without TITLE. This is discouraged.\nHide this message by adding the \"disableWarnings\" attribute in the source element, or the HEAD element.\nElement:`,
          this
        );
      }
    }
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  static get observedAttributes() {
    return [
      /* array of attribute names to monitor for changes */
      "title",
      "description",
      "class",
      "style",
      "button1",
      "button2",
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified

    this.style = "display: contents !important;";

    // if (name == "class")
    //   console.warn(
    //     `Changing propriety "${name.toUpperCase()}" of materialize-card. Changing it's class is unnecesary in most cases.\nInfo:\n- Propriety: ${name.toUpperCase()}\n- Old Value: ${oldValue}\n- New Value: ${newValue}\n- Element:`,
    //     this
    //   );

    checkWarn();

    if (name == "title") {
      if (newValue == "")
        if (this.doWarn)
          console.warn(
            "Empty title values for cards are discouraged.\nELEMENT: ",
            this
          );
      return this.setTitle(newValue);
    }
  }

  adoptedCallback() {
    // called when the element is moved to a new document
    // (happens in document.adoptNode, very rarely used)
  }

  // there can be other element methods and properties
}

/*
  CARD STRUCTURE:
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
*/
