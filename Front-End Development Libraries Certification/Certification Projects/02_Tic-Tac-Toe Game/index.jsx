const { useState } = React;

export function Board() {
  const [blocks, setBlocks] = useState(new Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [isX, setIsX] = useState(true);

  const isWinner = (blocks) => {
    //each row contains the idxs of blocks of whose elements
    //if equal, will dictate winner
    const winIndexArrs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const row of winIndexArrs) {
      if (
        blocks[row[0]] === blocks[row[1]] &&
        blocks[row[1]] === blocks[row[2]] &&
        blocks[row[0]] !== null
      ) {
        return true;
      }
    }

    return false;
  };

  const handleClick = (idx) => {
    //no action if there is a winner or idx of blocks is not empty
    if (winner !== null || blocks[idx] !== null) return;

    //else update blocks
    const newBlocks = blocks.map((block, index) =>
      index !== idx ? block : isX ? "X" : "O",
    );
    setBlocks(newBlocks);

    //update XorO
    setIsX((prev) => !prev);

    //check for winner
    if (isWinner(newBlocks)) {
      setWinner(isX ? "X" : "O");
    }
  };

  const handleReset = () => {
    setBlocks(new Array(9).fill(null));
    setWinner(null);
    setIsX(true);
  };

  return (
    <div className="container">
      <h1 className="heading">Tic-Tac-Toe</h1>
      <div className="game-container">
        <p className="game-info">
          {
            winner !== null
              ? `Winner: ${winner}` //if there is a winner, show winner
              : blocks.every((block) => block)
                ? "It's a Draw!" //if all blocks filled but no winner, show Draw
                : `Next Player: ${isX ? "X" : "O"}` //else show next player turn
          }
        </p>
        <div className="square-grid">
          {blocks.map((block, index) => (
            <button
              className="square"
              key={index}
              onClick={() => handleClick(index)}
            >
              {block || ""}
            </button>
          ))}
        </div>
        <button id="reset" onClick={handleReset}>
          Reset Game
        </button>
      </div>
    </div>
  );
}
