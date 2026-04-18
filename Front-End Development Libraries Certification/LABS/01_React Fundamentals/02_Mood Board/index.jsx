export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  const destinations = [
    {
      id: 1,
      color: "purple",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Caribbean",
    },
    {
      id: 2,
      color: "royalblue",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Gawadar Beach",
    },
    {
      id: 3,
      color: "skyblue",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Cape Town",
    },
    {
      id: 4,
      color: "green",
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Suez Canal",
    },
    {
      id: 5,
      color: "gold",
      image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      description: "Santorini",
    },
    {
      id: 6,
      color: "tomato",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "Istanbul",
    },
  ];

  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {destinations.map((dest) => (
          <MoodBoardItem key={dest.id} {...dest} />
        ))}
      </div>
    </div>
  );
}
