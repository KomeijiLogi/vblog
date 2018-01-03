var Mock=require('mockjs')
var Random=Mock.Random;

var index=Mock.mock('http://api.com/index',{
   //length=4 name为swiper的数组,用于模拟存放播片的image
   'swiper|4':[
     {
       'imgPath':Random.image('800x400', '#57AEF1', '#FFF', 'png', ''),
       'id':'@id',
       'pageId':'@integer(0,99)'
     }
   ],
   //模拟主体第一部分,存放包括标题和主体，以及1张图 主要的三部分
   'section1':{
       'list|10':[
         {
           'id':'@id',
           'pageId':'@integer(0,99)',
           'title':'@ctitle()',
            'content':'@csentence()',
            'imgPath':Random.image('100x100','#894FC4','#FFF','png','')
         }
       ],
       'banner':Random.image('400x100', '#ffcc33', '#FFF', 'png', '')

   },
   //模拟主体第二部分,存放包括标题，以及3张图 主要的两部分
   'section2':{
        'list|10':[
          {
             'id':'@id()',
            'pageId':'@integer(0,99)',
             'title':'@ctitle()',
             'content':'@csentence()',
             'imgPath1':Random.image('200x100','#E85A90','#FFF','png',''),
             'imgPath2':Random.image('200x100','#2C6BCC','#FFF','png',''),
             'imgPath3':Random.image('200x100','#B33D5A','#FFF','png','')
          }
        ],
        'banner':Random.image('400x100', '#b97cc9', '#FFF', 'png', '')
   }

});

var category=Mock.mock('http://api.com/category',{

});

var detail=Mock.mock('http://api.com/detail',{
     'content|1':[{
         'title':'@ctitle()',
         'time':'@datetime()',
         'para|6':[
           {
             'cimg': Random.image('800x200', '#3F9EC8', '#FFF', 'png', ''),
             'ctext':'@cparagraph()'
           }
         ],
         'auth':'@cname'


     }]
});

var comment=Mock.mock('http://api.com/comment',{
    'list|10':[
      {
        'name':'@cname()',
        'comment':'@cparagraph(1, 3)',
        'ip':'@ip()',
        'time':'@datetime()',
        'account':'@integer(10000,99999)'
      }
    ]
});

export   {
   index,
   category,
   detail
}


