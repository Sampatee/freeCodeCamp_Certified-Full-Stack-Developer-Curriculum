const poll = new Map();

const addOption = (option) => {
  option = option.trim();
  if (!option.length) {
    return "Option cannot be empty.";
  }

  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }

  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
};

const vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voterList = poll.get(option);

  if (voterList.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voterList.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
};

const displayResults = () => {
  let pollResultStr = `Poll Results:\n`;

  poll.forEach((value, key) => {
    pollResultStr += `${key}: ${value.size} votes\n`;
  });

  return pollResultStr.trimEnd();
};

addOption("A");
addOption("B");
addOption("C");

vote("A", "1");
vote("B", "2");
vote("B", "3");
