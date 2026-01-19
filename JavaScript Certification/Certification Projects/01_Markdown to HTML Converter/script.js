const markdownInput = document.querySelector("#markdown-input");
const rawHtmlOutput = document.querySelector("#html-output");
const preview = document.querySelector("#preview");

const regexList = [
  {
    name: "h1",
    regex: /^ *# (.+)/gm,
    replaceWith: (match, ...args) => `<h1>${args[0]}</h1>`,
  },
  {
    name: "h2",
    regex: /^ *## (.+)/gm,
    replaceWith: (match, ...args) => `<h2>${args[0]}</h2>`,
  },
  {
    name: "h3",
    regex: /^ *### (.+)/gm,
    replaceWith: (match, ...args) => `<h3>${args[0]}</h3>`,
  },
  {
    name: "bold",
    regex: /([*_]{2})(.+)\1/g,
    replaceWith: (match, ...args) => `<strong>${args[1]}</strong>`,
  },
  {
    name: "italic",
    regex: /([*_]{1})(.+)\1/g,
    replaceWith: (match, ...args) => `<em>${args[1]}</em>`,
  },
  {
    name: "image",
    regex: /!\[([^\]]*)\]\(([^\)]*)\)/g,
    replaceWith: (match, ...args) => `<img alt="${args[0]}" src="${args[1]}">`,
  },
  {
    name: "link",
    regex: /\[([^\]]*)\]\(([^\)]*)\)/g,
    replaceWith: (match, ...args) => `<a href="${args[1]}">${args[0]}</a>`,
  },
  {
    name: "quote",
    regex: /^ *> (.+)/gm,
    replaceWith: (match, ...args) => `<blockquote>${args[0]}</blockquote>`,
  },
];

const convertMarkdown = () => {
  let str = markdownInput.value;

  regexList.forEach(({ regex, replaceWith }) => {
    str = str.replace(regex, replaceWith);
  });

  return str;
};

const handleInput = () => {
  const convertedOutput = convertMarkdown();
  rawHtmlOutput.textContent = convertedOutput;
  preview.innerHTML = convertedOutput;
};

markdownInput.addEventListener("input", handleInput);
