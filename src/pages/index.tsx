/**
 * This is a Next.js page.
 */
import { useEffect } from 'react';
import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const result = trpc.greeting.useQuery({ name: 'catto' });
  const gameBoard = trpc.getGameBoard.useQuery();
  if (!result.data) {
    return (
      <div style={styles}>
        <h1>Loading...</h1>
      </div>
    );
  }

  function handleClick(index: number) {
    // const { mutate } = trpc.makeMove.useMutation();
    // mutate(index);
    console.log('Hi');
  }

  return (
    <div className="main-container">
      <h1>ElfinExOh</h1>
      <p>TicTacToe with your friends</p>

      <div className="grid-container">
        {gameBoard.data?.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  width: '100vw',
  height: '100vh',
};
