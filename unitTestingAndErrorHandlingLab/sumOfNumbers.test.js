import {sum} from './sumOfNumbers.js'
import {expect} from 'chai'; 

describe ('sum(arr)', function(){
    it('should return NaN when passed not number', function(){
        expect(sum(['str', 3])).to.be.NaN;
    });
    it('should return 0 when passed empty array', function(){
        expect(sum([])).to.be.equal(0);
    });
    it('should return 6 when passed valid array', function(){
        expect(sum([1, 2, 3])).to.be.equal(6);
    });
    it('should return result  when passed string numbers', function(){
        expect(sum(['1', '2', '3'])).to.be.equal(6);
    });
    it('should return result  when passed float string numbers', function(){
        expect(sum(['1.2', '2.2', '3.2'])).to.be.closeTo(6.6, 0.01);
    });

})

