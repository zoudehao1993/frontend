function sumOnSteroids() {
var i,
res = 0,
         number_of_params = arguments.length;
    for (i = 0; i < number_of_params; i++) {
      res += arguments[i];
    }
return res; 
}
var res = sumOnSteroids(1,2,3,4,5);
console.log(res);

