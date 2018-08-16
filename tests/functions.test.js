const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;
const assert = require('chai').assert;

const sumWithoutHighestAndLowestNumber = require('../functions/sumWithoutHighestAndLowestNumber');
const reverseSequence = require('../functions/reverseSequence');
const oddOrEven = require('../functions/oddOrEven');
const squareSum = require('../functions/squareSum');

describe('Sum Without Highest And Lowest Number',() => {
    it('should return 0 when the array is empty', () => {
        expect(sumWithoutHighestAndLowestNumber([])).to.equals(0);
    });
    
    it('should return 0 when the array has a one element', () => {
        expect(sumWithoutHighestAndLowestNumber([1])).to.equals(0);
    });
    it('should return 0 when the array has a two element', () => {
        expect(sumWithoutHighestAndLowestNumber([1,2])).to.equals(0);
    });
    it('should return 0 with this array [4]', () => {
        expect(sumWithoutHighestAndLowestNumber([4])).to.equals(0);
    });
    it('should return 0 with this array [4,1]', () => {
        expect(sumWithoutHighestAndLowestNumber([4,1])).to.equals(0);
    });
    it('should return 10 with this array [100,-100,10]', () => {
        expect(sumWithoutHighestAndLowestNumber([100,-100,10])).to.equals(10);
    });
    it('should return 16 with this array [6,2,1,8,10]', () => {
        expect(sumWithoutHighestAndLowestNumber([6,2,1,8,10])).to.equals(16);
    });
    it('should return 79 with this array [6,2,1,8,10,10,15,-17,-20,0,45,98]', () => {
        expect(sumWithoutHighestAndLowestNumber([6,2,1,8,10,10,15,-17,-20,0,45,98])).to.equals(80);
    });
    it('should return 6 with this array [1, 1, 11, 2, 3]', () => {
        expect(sumWithoutHighestAndLowestNumber([1, 1, 11, 2, 3])).to.equals(6);
    });
});

describe('Reverse Sequence',() => {
    it('should return an empty array when the argument is 0',() => {
        expect(reverseSequence(0)).to.be.empty;
    });
    it('should return an empty array when the argument is less than 0',() => {
        expect(reverseSequence(-1)).to.be.empty;
    });
    it('should return this array [1] when the argument is 1',() => {
        assert.deepEqual(reverseSequence(1), [1]);
    });
    it('should return this array [5, 4, 3, 2, 1] when the argument is 5',() => {
        assert.deepEqual(reverseSequence(1), [1]);
    });  
});

describe('Odd or Even',() => {
    it('should return \'even\' with [0]', () => {
        assert.equal(oddOrEven([0]), 'even')
    });
    it('should return \'odd\' with [1]', () => {
        assert.equal(oddOrEven([1]), 'odd')
    });
    describe('Even tests', _ => {
        it('should return \'even\' with [0, 1, 5]', () => {
            assert.equal(oddOrEven([0, 1, 5]), 'even')
        });
        it('should return \'even\' with [0, 1, 3]', () => {
            assert.equal(oddOrEven([0, 1, 3]), 'even')
        });
    
    });
    describe('Negative Even tests', _ => {
        it('should return \'even\' with [0, -1, -5]', () => {
            assert.equal(oddOrEven([0, -1, -5]), 'even')
        });
        it('should return \'even\' with [0, -1, -3]', () => {
            assert.equal(oddOrEven([0, -1, -3]), 'even')
        });
    });
    describe('Odd tests', _ => {
        it('should return \'odd\' with [0, 1, 2]', () => {
            assert.equal(oddOrEven([0, 1, 2]), 'odd')
        });
        it('should return \'odd\' with [0, 1, 6]', () => {
            assert.equal(oddOrEven([0, 1, 6]), 'odd')
        });
    });
    describe('Odd tests', _ => {
        it('should return \'odd\' with [0, -1, 2]', () => {
            assert.equal(oddOrEven([0, -1, 2]), 'odd')
        });
        it('should return \'odd\' with [0, 1, -4]', () => {
            assert.equal(oddOrEven([0, 1, -4]), 'odd')
        });
    });
});

describe('Square Sum',() => {
    it('should return 0 when the array not exists', () => {
        assert.equal(squareSum(null),0);
    });
    
    it('should return 0 when the array is empty', () => {
        assert.equal(squareSum([]),0);
    });
    it('should return 9 with this array [1,2,2]', () => {
        assert.equal(squareSum([1,2,2]),9);
    });
    it('should return 9 with this array [5,5,2]', () => {
        assert.equal(squareSum([5,5,2]),54);
    });
    it('should return 2 with this array [-1,0,-1]', () => {
        assert.equal(squareSum([-1,0,1]), 2);
    });
});