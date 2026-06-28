// ---------- EXAMPLE 1 ----------
function hello() {
  window.alert('Hello');
}

// DON'T auto-run this in learning demo
// setTimeout(hello, 3000);

// ---------- EXAMPLE 2 ----------
// clearTimeout() = can cancel a timeout before it triggers

// DON'T auto-run this either
// const timeoutId = setTimeout(() => window.alert('Hello'), 3000);
// clearTimeout(timeoutId);

// ---------- EXAMPLE 3 ----------
let timeoutId;

function showAlert() {
  window.alert('Hello');
}

function startTimer() {
  clearTimeout(timeoutId); // prevents stacking clicks

  timeoutId = setTimeout(showAlert, 3000);
  console.log('STARTED');
}

function clearTime() {
  clearTimeout(timeoutId);
  console.log('CLEARED');
}
