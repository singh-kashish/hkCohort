// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// ```js
function startCounter(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    throw new Error("seconds must be a positive finite number");
  }

  let count = 0; // we'll log ++count so first print is 1
  const start = Date.now();
  const durationMs = Math.floor(seconds * 1000);

  const id = setInterval(() => {
    console.log(++count);

    const elapsed = Date.now() - start;
    if (elapsed >= durationMs) {
      clearInterval(id);
      console.log("Done");
    }
  }, 1000);
}
startCounter(3);
