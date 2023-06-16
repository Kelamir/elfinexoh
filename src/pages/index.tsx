/**
 * This is a Next.js page.
 */
import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const gameBoard = trpc.getGameBoard.useQuery();
  const makeMove = trpc.makeMove.useMutation({
    onSuccess: () => {
      console.log('it worked');
    },
    onSettled: () => {
      gameBoard.refetch();
    },
  });

  async function handleClick(index: number) {
    await makeMove.mutate(index);
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
