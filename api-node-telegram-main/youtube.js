const youTube=require('youtube-node');
const config =require('./yt-config');

const youtube=new youTube();
youtube.setkey(config.key);

youtube.search('Exercicios em casa',2,functions(error,result)){
    if(!error){
         console.log(JSON.stringify(result,NULL,2));
    }
   else{
       console.log('Deu erro!')
   }
}