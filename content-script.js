// 1. Select the DOM node you want to watch
const targetNode = document.querySelector(
  '[data-e2e-locator="submission-result"]',
);

// 2. Define the callback function to run when changes happen
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      console.log("A child node was added or removed.");
    } else if (mutation.type === "attributes") {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};

// 3. Create an instance of the observer linked to your callback
const observer = new MutationObserver(callback);

// 4. Configure what exactly you want to watch
const config = {
  childList: true, // Watch for additions/removals of children
  subtree: true, // Watch all descendant nodes deep into the tree
};

// 5. Start observing the element
observer.observe(targetNode, config);
