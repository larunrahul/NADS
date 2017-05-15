var assert = require('assert');
let api = require("../../src/math/power.js");
describe("Math", function() {
    describe("Power", function() {
        it("power to zero", function() {
            assert.equal(1, api.power(2, 0));
        });
        it("power to positive number", function() {
            assert.equal(32, api.power(2, 5));
        });
        it("power to negative number", function() {
            assert.equal(0.03125, api.power(2, -5));
        });
        it("power of negative number", function() {
            assert.equal(-32, api.power(-2, 5));
        });
        it("power of negative number with even exponent", function() {
            assert.equal(16, api.power(-2, 4));
        });
    });
});
