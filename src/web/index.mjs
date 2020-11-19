document.addEventListener("DOMContentLoaded", function () {
  (async () => {
    (() => {
      let elems = document.querySelectorAll(".sidenav");
      let instances = M.Sidenav.init(elems, {});
    })();
    (() => {
      let elems = document.querySelectorAll(".fixed-action-btn");
      let instances = M.FloatingActionButton.init(elems, {});
    })();
    (() => {
      let elems = document.querySelectorAll(".dropdown-trigger");
      let instances = M.Dropdown.init(elems, {});
    })();
    (() => {
      let elems = document.querySelectorAll(".tabs");
      let instance = M.Tabs.init(elems, {});
    })();
  })();
});

export default () => {};
