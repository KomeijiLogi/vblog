var Mock=require('mockjs')
var Random=Mock.Random;

var index=Mock.mock('http://api.com/index',{
   //length=4 name为swiper的数组,用于模拟存放播片的image
   'swiper|4':[
     {
       'imgPath':Random.image('800*200','#50B347', '#FFF', 'image'),
       'id':'@id'
     }
   ],
   //模拟主体第一部分,存放包括标题和主体，以及1张图 主要的三部分
   'section1':{
       'list|5':[
         {
           'title':'@ctitle()',
            'content':'@csentence()',
            'imgPath':Random.image('100*100','#894FC4','#FFF','png','hello')
         }
       ]
   },
   //模拟主体第二部分,存放包括标题，以及3张图 主要的两部分
   'section2':{
        'list|5':[
          {
             'title':'@ctitle()',
             'content':'@csentence()',
             'imgPath1':Random.image('100*100','#E85A90','#FFF','png','hello'),
             'imgPath2':Random.image('100*100','#2C6BCC','#FFF','png','hello'),
             'imgPath3':Random.image('100*100','#B33D5A','#FFF','png','hello')
          }
        ]
   }

});

var category=Mock.mock('http://api.com/category',{

});

var detail=Mock.mock('http://api.com/detail',{

});

export default  {
   index,
   category,
   detail
}


