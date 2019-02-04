
 const minhaPromisse = () => new Promise((resolve,reject) => {
    setTimeout(() => {resolve('ok')},2000);
 })
 
 
 // async function executaPromisse() {
 //    console.log(await minhaPromisse());
 //    console.log(await minhaPromisse());
 //    console.log(await minhaPromisse());
 //}

 const  executaPromisse = async () => {
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}

 executaPromisse();