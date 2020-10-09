/*
Each time the debounced function is invoked, clear the current pending timeout with clearTimeout() and use setTimeout() to create a new timeout that delays invoking the function until at least ms milliseconds has elapsed.
Omit the second argument, ms, to set the timeout at a default of 0 ms.
*/
const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

// Example
window.addEventListener(
  "resize",
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
);
// Will log the window dimensions at most every 250ms
