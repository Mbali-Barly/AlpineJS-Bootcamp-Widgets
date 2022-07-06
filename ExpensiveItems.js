function findItemsOver20(x){
    var array = [];
  for (var i = 0; i < x.length; i++){
  let list = x[i]
  if (list.qty > 20){
  array.push(list);
  }
   
  }
    return array;
  }
  function  findItemsOver(x,y){
   var array = [];
  for (var i = 0; i < x.length; i++){
  let list = x[i]
  if (list.qty > y){
  array.push(list);
  }
   
  }
    return array;
  }