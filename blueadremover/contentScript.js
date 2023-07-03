// Find and remove the <div> element with a specific class
function removeDiv() {
  var divElements = document.querySelectorAll('.css-1dbjc4n.r-g2wdr4.r-14wv3jr.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x');

  // Iterate through the matched elements
  for (var i = 0; i < divElements.length; i++) {
    var divElement = divElements[i];

    // Add any additional conditions to identify the specific <div> element you want to remove
    var asideElement = divElement.querySelector('aside.css-1dbjc4n.r-1habvwh.r-eqz5dr.r-uaa2di.r-ymttw5.r-1f1sjgu');

    // Check if the <aside> element is present inside the <div> element
    if (asideElement) {
      divElement.parentNode.removeChild(divElement);
    }
  }
}


// MutationObserver configuration
var observerConfig = {
  childList: true,
  subtree: true
};

// Callback function for the MutationObserver
function mutationCallback(mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type === 'childList') {
      removeDiv();
    }
  }
}

// Create a new MutationObserver instance
var observer = new MutationObserver(mutationCallback);

// Start observing changes in the document
observer.observe(document, observerConfig);