function Maiores(value) {
    return value >= 10;
  }
  
  var valores = [11,12,10,5,1,3, 55, 8, 130, 100].filter(Maiores);
  console.log(valores);