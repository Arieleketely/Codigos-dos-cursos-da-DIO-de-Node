const doSomethingPromise=new Promise((resolve, reject) => {
    throw new Error("deu erro primeiro");
    setTimeout(function(){
        resolve('First data');

    },1000);
    
});
const doOtherThingPromise=new Promise((resolve, reject) => {
    throw new Error("deu erro segundo");
    setTimeout(function(){
        resolve('First data');

    },1000);
    
});
doSomethingPromise
.then(data =>{
    console.log(data);
    return doOtherThingPromise;
})
.then(data2=>console.log(data2))
    .catch(error=>console.log('deu erro terceiro',error));
function doSometring(callback) {
    setTimeout(function(){
        callback('Second data');

    },1000);
    
}
function doOtherTring(callback) {
    setTimeout(function(){
        callback('Second data');

    },1000);
    
}
function doAll(){
    try{
        doSomething(function(data){
            //de acordo ao site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split o método split() divide um objeto String em um array de strings ao separar a string em substrings.
           var processedData=data.split('');
           try{
               setTimeout(function(data2){
                   var processeData2=data2.split('');
                   try{
                       setTimeout(function(){
                           console.log(processedData, processeData2);
                       },1000);
                   
               } catch (err){

               }
           } );
        
        }catch (err){

        }
    } );
}catch (err){

    }
};


