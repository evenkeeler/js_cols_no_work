import { RedBlackSet } from "js_cols";

export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    // const set = new RedBlackSet();
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
