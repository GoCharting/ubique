var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/setrow ...');
test('setrow', function (done) {



assert.deepEqual(ubique.setrow([2,0,-2],[[5,6,5],[7,8,-1]],0),[[2,0,-2],[7,8,-1]]);
assert.deepEqual(ubique.setrow([9,21,57],[[5,6,5],[7,8,-1]],1),[[5,6,5],[9,21,57]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->