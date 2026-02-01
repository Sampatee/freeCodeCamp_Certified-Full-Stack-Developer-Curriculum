const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" },
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(idea) {
    this.ideas.push(idea);
  }

  unpin(idea) {
    const ideaIndex = this.ideas.indexOf(idea);
    this.ideas.splice(ideaIndex, 1);
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let returnStr = `${this.title} has ${this.count()} idea(s)\n`;

    if (!this.count()) {
      return returnStr;
    }

    this.ideas.forEach(
      ({ title, description, status }) =>
        (returnStr += `${title} (${status.description}) - ${description}\n`),
    );
    return returnStr;
  }
}
