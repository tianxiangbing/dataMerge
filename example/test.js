let DataMerge = require('../src/index');
let d1 = new DataMerge();
d1.init({
    data: [{id:1}],
    time: 100,
    mergeKey: 'id',
    mergeType:'json',
    // mode:'merge',
    mode: 'de-duplication',
    callback: function (data, count, mergecount) {
        if(count>0){
            // console.log(data)
            console.log(count, mergecount);
        }
    }
});
let n = 0 ;
// setInterval(function () {
//     d1.merge({ id: n});
//     n ++ ;
// }, 10)
let arr = []
for(;n <1000;n++){
    arr.push({id:n,a:n+1,b:n+2,c:n+3,d:n+4,e:n+5})
}
d1.merge(arr);
let arr2 = [];
for(n=500;n <1500;n++){
    arr2.push({id:n,a:n+10,b:n+20,c:n+30,d:n+40,e:n+50})
}
let now = Date.now();
d1.merge(arr2);
let nw = Date.now();
console.log(nw - now,'ms');