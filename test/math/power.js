var assert = require('assert');
let api = require("../../src/math/power.js");
describe("Math", function() {
    describe("Power", function() {
        it("power to zero", function() {
            assert.equal(1, api.power(2, 0));
        });
        it("power of +ve int to +ve int", function() {
            assert.equal(32, api.power(2, 5));
        });
        it("power of +ve int to -ve int", function() {
            assert.equal(0.03125, api.power(2, -5));
        });
        it("power of -ve int to +ve int odd", function() {
            assert.equal(-32, api.power(-2, 5));
        });
        it("power of -ve int to +ve int even", function() {
            assert.equal(16, api.power(-2, 4));
        });
        it("power of -ve int to -ve int odd", function() {
            assert.equal(-0.03125, api.power(-2, -5));
        });
        it("power of -ve int to -ve int even", function() {
            assert.equal(0.0625, api.power(-2, -4));
        });
    });
});
