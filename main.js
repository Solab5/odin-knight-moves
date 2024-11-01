import { ChessKnight } from "./knight.js";

const knight = new ChessKnight();

// Let's try a longer path!
knight.knightMoves([0, 0], [3, 3]);

// Or go across the whole board!
knight.knightMoves([3,3],[4,3]);