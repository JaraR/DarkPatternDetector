// Track the initial document height
let originBodyScrollHeight = document.body.scrollHeight;

// Function to observe scrolling behavior
function observerScroll() {
  const bodyScrollHeight = document.body.scrollHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  // Log the current body scroll height and scroll position for debugging
  console.log("Current bodyScrollHeight:", bodyScrollHeight);
  console.log("Current scrollPosition:", scrollPosition);

  // Check if the user is near the bottom of the page
  if (scrollPosition >= bodyScrollHeight - 50) {
    console.log("You have reached the bottom of the page");

    // Check if new content is loaded (page height increases)
    if (bodyScrollHeight > originBodyScrollHeight) {
      console.log("New content detected: page height increased");
      originBodyScrollHeight = bodyScrollHeight;
      console.log("Updated originBodyScrollHeight:", originBodyScrollHeight);
      alert("Infinite Scrolling detected - new content loaded automatically");
    }
  }
}

// Attach the observerScroll function to the scroll event
window.addEventListener("scroll", observerScroll);
