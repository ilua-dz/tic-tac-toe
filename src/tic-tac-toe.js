class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.playField = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }
    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }
    nextTurn(rowIndex, columnIndex) {
        if (this.playField[rowIndex][columnIndex] === null) {
            this.playField[rowIndex][columnIndex] = this.currentPlayer;
            if (this.currentPlayer === 'x') return this.currentPlayer = 'o';
            else return this.currentPlayer = 'x';
        } else return this.currentPlayer;
    }
    isFinished() {
        if (this.getWinner() !== null || this.isDraw() === true) return true;
        else return false;
    }
    getWinner() {
        if ((this.playField[0][0] === this.playField[1][1]) && (this.playField[1][1] === this.playField[2][2])) {
            return this.winner = this.playField[0][0];
        } else if ((this.playField[0][2] === this.playField[1][1]) && (this.playField[1][1] === this.playField[2][0])) {
            return this.winner = this.playField[0][2];
        }
        for (i = 0; i < this.playField.length; i++) {
            if (this.playField[i][0] === this.playField[i][1] && this.playField[i][1] === this.playField[i][2]) {
                return this.arr[i][0];
            }
            if (this.playField[0][i] === this.playField[1][i] && this.playField[1][i] === this.playField[2][i]) {
                return this.arr[0][i];
            }
        }
        return null;
    }
    noMoreTurns() {
        for (let i = 0; i < this.playField.length; i++) {
            if (this.playField.some((item) => item[i] === null)) return false;
        }
        return true;
    }
    isDraw() {
        if (this.getWinner() === null && this.noMoreTurns() === true) return true;
        else return false;
    }
    getFieldValue(rowIndex, colIndex) {
        return this.playField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
