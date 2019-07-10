// fetch POST 参数格式转换 
export const postBodyProps=(data)=>{
    let url="?";
    for(let i in data){
        url+= `${i}=${data[i]}&`
    }
    url=url.substring(0,url.length-1);
   return url;
}
// http fetch 封装  
export const httpFetch = (type,url,thenFun,catchFun)=>{
    fetch(url,{
            method: type,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }, 
          })
          .then((res) => res.json())
          .then((res)=> thenFun(res))
          .catch((error)=> catchFun(error));
}