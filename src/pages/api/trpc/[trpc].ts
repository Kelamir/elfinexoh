/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import * as trpcNext from '@trpc/server/adapters/next';
import { publicProcedure, router } from '~/server/trpc';
import { z } from 'zod';
import { getGameBoard, makeMove } from '~/utils/gameState';

const appRouter = router({
  getGameBoard: publicProcedure.query(() => {
    return getGameBoard();
  }),

  makeMove: publicProcedure
    .input(z.number().min(0).max(8))
    .mutation(({ input }) => {
      makeMove(input);
    }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
