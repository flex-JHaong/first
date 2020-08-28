// 存放所有的接口地址
export default {
     baseUrl:'http://localhost:4000',    //接口网址
     bannerUrl:'/banner',                 //轮播图
     songUrl:"/personalized?limit=6",     //推荐歌单 
     newsong:"/personalized/newsong",      //推荐新音乐 
     toplist: "/top/list?idx=1",          //热歌榜  
     songdetail: "/playlist/detail",
     //热门搜索
     searchhot: "/search/hot",
     //搜索  /search?keywords= 海阔天空
     search: "/search"
} 