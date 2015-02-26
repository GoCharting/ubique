### iqr
Interquartile range


#### Description

Return the interquartile (Q3 - Q1 quartiles)


|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = ubique.cat(1,x,y);

ubique.iqr(x); // 0.023
ubique.iqr(z); // [[0.023, 0.095]]
```
