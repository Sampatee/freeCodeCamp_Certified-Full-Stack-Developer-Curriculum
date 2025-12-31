let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = (name, propName) => {
  for (const contact of contacts) {
    //if no such name found
    if (contact.firstName !== name) {
      if (contacts[contacts.length - 1] === contact) {
        return "No such contact";
      } else {
        continue;
      }
    }

    //if no such prop exist in contact
    if (!(propName in contact)) {
      return "No such property";
    }

    //if name and propName is found
    return contact[propName];
  }
};
