const observers: any[] = [];

export default Object.freeze({
  notify: (data: unknown) => observers.forEach((observer) => observer(data)),
  subscribe: (func: (data: unknown) => void) => observers.push(func),
  unsubscribe: (func: (...args: any[]) => any) => {
    [...observers].forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1);
      }
    });
  },
});
