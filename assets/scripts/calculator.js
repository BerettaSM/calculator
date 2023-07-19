class Calculator {
    operations = {
        '+': this.add,
        '-': this.subtract,
        '×': this.multiply,
        '÷': this.divide,
        '+/-': this.invertSignal,
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

    invertSignal(n) {
        return n * -1;
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

export default class StatefulCalculator extends Calculator {
    constructor() {
        super();
        this.current = '0';
        this.previous = '';
        this.operation = '';
    }

    clear() {
        this.current = '0';
        this.previous = '';
        this.operation = '';
    }

    compute(key) {
        if (isFinite(key)) {
            // A number
            this.current === '0'
                ? (this.current = key)
                : (this.current += key);
        } else if (key === '=') {
            const n1 = +this.previous;
            const n2 = +this.current;
            const symbol = this.operation
            const result = this.operate(n1, symbol, n2)
            this.clear()
            this.current = result
        } else if (key === 'AC') {
            this.clear();
        } else if(key === '+/-') {
            console.log('invert signal')
        } else if (key in this.operations) {
            if(this.current !== '0')
                this.previous = this.current
            this.operation = key
            this.current = '0'
        } else if (key === '.') {
            if(!this.current.includes('.'))
                this.current += '.';
        } else {
            throw Error('Unknown key');
        }
    }
}
