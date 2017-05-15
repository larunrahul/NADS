module.exports = (function() {
    function power(base, exponent) {
        if (exponent == 0) {
            return 1;
        }
        if (exponent < 0) {
            return 1 / power(base, -exponent); // a^-b = 1 / a^b
        }
        if (exponent & 1 == 1) { //if exponent is odd
            return base * power(base, exponent - 1);
        } else {
            let pow = power(base, exponent >> 1); //divide exponent by 2
            return pow * pow;
        }
    }
    return {
        power
    }
})();
