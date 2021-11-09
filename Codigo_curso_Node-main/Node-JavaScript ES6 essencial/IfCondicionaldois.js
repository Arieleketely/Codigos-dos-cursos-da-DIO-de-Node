const array=[0,1,2,3,4,5];
array.forEach(item=>{
    if(item%2===0){
        console.log('numero par:'+item);
    }
    else{
        console.log('numero impar:'+item);
    }
})