const initStack = () => ({ collection: [] });

const push = (stack, el) => stack.collection.push(el);

const pop = (stack) => stack.collection.pop();

const peek = (stack) => stack.collection[stack.collection.length - 1];

const isEmpty = (stack) => stack.collection.length === 0;

const clear = (stack) => (stack.collection = []);
