import router from '@system.router';
export default {
    data: {
        squareValues: [],
        xIsNext: true,
        winner: null,
        hasResult: false
    },
    clickReset () {
        this.winner = null;
        this.xIsNext = true;
        this.squareValues = ['','','', '', '', '', '', '', ''];
        setTimeout(() => {
            this.hasResult = false;
        }, 0)
    },
    clickBack () {
        router.replace({
            uri: 'pages/index/index'
        })
    },
    clickSquare (value) {
        if (this.calculateWinner(this.squareValues) || this.squareValues[value]) {
            return;
        }
        let squares = this.shallowClone(this.squareValues);
        squares[value] = this.xIsNext ? 'X' : 'O';
        this.xIsNext = !this.xIsNext;
        this.squareValues = squares;
        this.winner = this.calculateWinner(this.squareValues);
        if (this.winner == 'X' || this.winner == 'O') {
            setTimeout(() => {
                this.hasResult = true;
            }, 0)
        }
    },
    shallowClone (array) {
        let result = [];
        for (let index = 0; index < array.length; index++) {
            result.push(array[index]);
        }
        return result;
    },
    calculateWinner (squares) {
        let lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            let array = lines[i];
            let a = array[0];
            let b = array[1];
            let c = array[2]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    },
    onInit() {
        this.winner = null;
        this.hasResult = false;
        this.xIsNext = true;
        this.squareValues = ['','','', '', '', '', '', '', ''];
    }
}
