export default function debounce(func, timeout = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    const that = this;
    timer = setTimeout(() => {
      func.apply(that, args);
    }, timeout);
  };
}
