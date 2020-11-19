import APPLISTTITLE from "./applist/title.js";
import APPLIST from "./applist/applist.js";
import CARD from "./materialize/card.js";

const createElements = () => {
  const defineEl = (elname, el) =>
    customElements.define(elname.toLowerCase(), el);

  // APPLIST
  defineEl("APPLIST-TITLE", APPLISTTITLE);
  defineEl("APPLIST-MAIN", APPLIST);

  // MATERIALIZE
  defineEl("MATERIALIZE-CARD", CARD);
};

export default createElements;
