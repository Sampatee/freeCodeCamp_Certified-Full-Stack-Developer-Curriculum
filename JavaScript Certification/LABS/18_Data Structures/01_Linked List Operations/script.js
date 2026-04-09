function initList() {
  return {
    head: null,
    length: 0,
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
  let current = list.head;

  while (current !== null && current.element !== element) {
    current = current.next;
  }

  return current !== null;
}

function getAt(list, index) {
  if (index >= list.length || index < 0) return;

  let i = 0;
  let current = list.head;
  while (i !== index) {
    current = current.next;
    i++;
  }

  return current.element;
}

function insertAt(list, index, element) {
  if (index > list.length || index < 0) return;

  let i = 0;
  let current = list.head;
  let previous = null;
  const node = { element, next: null };

  while (i !== index) {
    previous = current;
    current = current.next;
    i++;
  }

  if (previous === null) {
    node.next = current;
    list.head = node;
  } else {
    node.next = current;
    previous.next = node;
  }

  list.length++;
  return list;
}

function removeAt(list, index) {
  if (index >= list.length || index < 0) return;

  let i = 0;
  let previous = null;
  let current = list.head;

  while (i !== index) {
    previous = current;
    current = current.next;
    i++;
  }

  if (previous === null) {
    list.head = current.next;
  } else {
    previous.next = current.next;
  }

  list.length--;
}

function clear(list) {
  list.head = null;
  list.length = 0;
}
