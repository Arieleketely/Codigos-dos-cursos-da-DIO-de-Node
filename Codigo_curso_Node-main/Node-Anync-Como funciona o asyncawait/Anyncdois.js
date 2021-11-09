const promise=new Promise((resolve,reject)=>{
  setTimeout(()=>resolve('end'),5000)
})

(async function(){
  console.log('Begin');
  console.log(text);
  console.log(await promise)
  try{
    const res=await promise
    setTimeout(()=>console.log(res),5000)
  } catch(rej){
    console.error(rej)
  }
})()