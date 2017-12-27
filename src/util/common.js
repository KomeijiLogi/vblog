const STORAGE_USER_KEY='STORAGE_USER_KEY';

export default {
   //获取用
   getLocal(key=STORAGE_USER_KEY){
       //给key赋值STORAGE_USER_KEY
       //根据key返回localstorage中json序列化的对象
       return JSON.parse(window.localStorage.getItem(key));
   },
   //设置用
   setLocal(res,key=STORAGE_USER_KEY,isSaveOldData=false){
       if(isSaveOldData){
           if(this.getLocal(key)){
              //如果isSaveOldData为true，就在原有基础上新增
              let oldData=this.getLocal(key);
              return window.localStorage.setItem(key,JSON.stringify(oldData.concat(res)));
           }
       }
       //如果isSaveOldData为false，就直接替换原有内容
       return window.localStorage.setItem(key,JSON.stringify(res));
   }

}
