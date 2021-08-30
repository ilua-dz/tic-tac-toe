class TicTacToe {
	constructor() {
		this.currentPlayer = 'x';
		this.playField = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		];
		this.win = null;
	}
	getCurrentPlayerSymbol() {
		return this.currentPlayer;
	}
	nextTurn(rowIndex, columnIndex) {
		if (this.playField[rowIndex][columnIndex] === null) {
			this.playField[rowIndex][columnIndex] = this.currentPlayer;
			if (this.currentPlayer === 'x') return this.currentPlayer = 'o'
			else return this.currentPlayer = 'x';
		} else return this.currentPlayer;
	}
	isFinished() {
		if (this.getWinner() !== null || this.isDraw() === true) {
			return true;
		} else return false;
	}
	getWinner() {
		for (let i = 0; i < this.playField.length; i++) {
			if (this.playField.every((item) => (item[i] === this.playField[i][i]))) {
				return this.win = this.playField[i][i];
			} else if (this.playField[i].every((item) => (item === this.playField[i][i]))) {
				return this.win = this.playField[i][i];
			}
		}
		if ((this.playField[0][0] === this.playField[1][1]) && (this.playField[1][1] === this.playField[2][2])) {
			return this.win = this.playField[0][0];
		} else if ((this.playField[0][2] === this.playField[1][1]) && (this.playField[1][1] === this.playField[2][0])) {
			return this.win = this.playField[0][2];
		}
		return this.win;
	}
	noMoreTurns() {
		for (let i = 0; i < this.playField.length; i++) {
			if (this.playField.some((item) => item[i] === null)) return false;
		}
		return true;
	}
	isDraw() {
		if (this.getWinner() === null && this.noMoreTurns() === true) {
			return true;
		} else return false;
	}
	getFieldValue(rowN, colN) {
		return this.playField[rowN][colN];
	}
}

module.exports = TicTacToe;
