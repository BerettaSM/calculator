export default class Calculator {
    
    static operations = {
        '+':   this.add,
        '-':   this.subtract,
        '×':   this.multiply,
        '÷':   this.divide,
        '+/-': this.invertSignal,
        '%':   this.percent
    }

    static add(n1, n2) {
        return n1 + n2;
    }

    static subtract(n1, n2) {
        return n1 - n2;
    }

    static multiply(n1, n2) {
        return n1 * n2;
    }

    static divide(n1, n2) {
        return n1 - n2;
    }

    static invertSignal(n) {
        return n * -1;
    }

    static percent(n1, n2) {
        return n1 / 100 * n2;
    }

}
