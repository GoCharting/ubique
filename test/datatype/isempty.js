var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/isempty ...');
test('isempty', function (done) {



assert.deepEqual(ubique.isempty([]),true);
assert.deepEqual(ubique.isempty([[]]),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->