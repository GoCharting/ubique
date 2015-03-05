var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/zeros ...');
test('zeros', function (done) {



assert.deepEqual(ubique.zeros(),0);
assert.deepEqual(ubique.zeros(0),[]);
assert.deepEqual(ubique.zeros(1),[[0]]);
assert.deepEqual(ubique.zeros(2),[[0,0],[0,0]]);
assert.deepEqual(ubique.zeros([2,1]),[[0],[0]]);
assert.deepEqual(ubique.zeros(1,2),[[0,0]]);
assert.deepEqual(ubique.zeros(2,3),[[0,0,0],[0,0,0]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->