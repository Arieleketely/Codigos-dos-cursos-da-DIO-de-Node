const asyncTimer=()=>
new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(12345);
  },1000);
  });

constsimpleFunc=async()=>{
  constdata=await asyncTimer();
  dataJSON=await fetch('data/.json').then(resStream=>
    resStream=>resStream.json()
    );
  return data;
};
simpleFunc()
.then(data=>{
  console.log(data);
})
.catch(err=>{
  console.log(err);
})