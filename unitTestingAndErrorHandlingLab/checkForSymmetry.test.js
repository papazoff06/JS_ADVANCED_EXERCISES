import {isSymmetric} from './checkForSymmetry.js'
import {expect} from 'chai'


describe ('tests is arr symmetric', function(){
    it('check if input is not an array', function (){
        expect(isSymmetric('z')).to.be.false;
    });
    it('check if input is not an array', function (){
        expect(isSymmetric({})).to.be.false;
    });
    it('check if input is not an array', function (){
        expect(isSymmetric({'z': 1})).to.be.false;
    });
    it('check if input is symmetrical but wit wrong data', function (){
        expect(isSymmetric(['1', '2', 1])).to.be.false;
    });
    it('return symmetrical if arr is symmetrical', function (){
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });
    it('check if input is an array but is not symmetrical', function (){
        expect(isSymmetric(['a', 'b', 'c', 'c', 'z'])).to.be.false;
    });
  
})

