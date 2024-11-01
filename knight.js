class ChessKnight {
    isOnBoard(position) {
        const [row, col] = position;
        return row >= 0 && row <= 7 && col >= 0 && col <= 7;
    }

    getPossibleMoves(position) {
        const [row, col] = position;

        const moves = [
            [row + 2, col + 1],
            [row + 2, col - 1],
            [row - 2, col + 1],
            [row - 2, col - 1],
            [row + 1, col + 2],
            [row + 1, col - 2],
            [row - 1, col + 2],
            [row - 1, col - 2]
        ];
        return moves.filter(move => this.isOnBoard(move));
    }

    positionToString(position) {
        return position.join(',');
    }

    findPath(start, end) {
        if (start[0] === end[0] && start[1] === end[1]) {
            return start;
        }

        const queue = [[start]];

        const visited = new Set([this.positionToString(start)]);
        
        while (queue.length > 0) {
            const path = queue.shift();
            const currentPosition = path[path.length - 1];
            const possibleMoves = this.getPossibleMoves(currentPosition);

            for (const nextMove of possibleMoves) {
                const moveString = this.positionToString(nextMove);

                if (!visited.has(moveString)) {
                    const newPath = [...path, nextMove];
                    if (nextMove[0] === end[0] && nextMove[1] === end[1]) {
                        return newPath;
                    }

                    queue.push(newPath);

                    visited.add(moveString);
                }
            }
        }
        return null;
    }

    knightMoves(start, end) {
        const path = this.findPath(start, end);

        if (path) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path: `);
            path.forEach(position => console.log(position));
            return path;
        } else {
            console.log("No path found!");
            return null;
        }
    }
}

export {ChessKnight}