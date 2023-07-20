export class Calculator {
    operations = {
        '+': this.add,
        '-': this.subtract,
        '×': this.multiply,
        '÷': this.divide,
        '%': this.percent,
    };

    add(n1, n2) {
        return n1 + n2;
    }

    subtract(n1, n2) {
        return n1 - n2;
    }

    multiply(n1, n2) {
        return n1 * n2;
    }

    divide(n1, n2) {
        return n1 / n2;
    }

    percent(n1, n2) {
        return (n1 / 100) * n2;
    }

    operate(n1, symbol, n2) {
        const operation = this.operations[symbol];
        if (!operation) {
            throw Error('Unsupported operation.');
        }
        return operation(n1, n2);
    }
}

export class StatefulCalculator extends Calculator {
    constructor() {
        super();
        this._current = '0';
        this._previous = '';
        this._operation = '';
    }

    get current() {
        return this._current;
    }

    set current(value) {
        if (value.toString().length > 9)
            this._current = (+value).toExponential(2);
        else this._current = value;
    }

    get previous() {
        return this._previous;
    }

    set previous(value) {
        if (value[value.length - 1] === '.') value = value.slice(0, -1);
        this._previous = value;
    }

    get operation() {
        return this._operation;
    }

    set operation(value) {
        this._operation = value;
    }

    clear() {
        this._current = '0';
        this._previous = '';
        this._operation = '';
    }

    calculateResult() {
        const n1 = +this.previous;
        const n2 = +this.current;
        const symbol = this.operation;
        const result = this.operate(n1, symbol, n2);
        this.clear();
        this.current = result.toString();
    }

    erase() {
        if (this.current !== '0') {
            this.current = this.current.slice(0, -1);
        }
        if (!this.current) this.current = '0';
    }

    compute(key) {
        if (isFinite(key)) {
            this.current == '0' ? (this.current = key) : (this.current += key);
        } else if (key === '=' && !!this.operation) {
            this.calculateResult();
        } else if (key === 'AC') {
            this.clear();
        } else if (key === 'C') {
            this.erase();
        } else if (key in this.operations) {
            if (this.previous && this.operation && this.current == '0') {
                this.operation = key;
            } else if (!this.previous) {
                this.previous = this.current;
                this.operation = key;
                this.current = '0';
            } else {
                this.calculateResult();
                const result = this.current;
                this.clear();
                this.operation = key;
                this.previous = result;
            }
        } else if (key === '.') {
            if (!this.current.includes('.')) this.current += '.';
        }
    }
}

const calculator = new StatefulCalculator();

export default calculator;
