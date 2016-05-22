//导航条实现点击下拉菜单效果
var header = document.getElementById('header');
var navUl = header.getElementsByClassName('navBar')[0];//导航条ul
var postVideo = utils.getElementsByClass('postVideo',navUl)[0];
var postVideoTri = utils.children(postVideo,'em')[0];
var postA = utils.children(postVideo,'ol')[0];
var postDivTri = utils.children(postVideo,'div')[0];
var postSpan = utils.children(postVideo,'span')[0];
console.log(postDivTri);
//用事件委托来写导航条的点击事件
navUl.onclick = function (e) {
    e=e||window.event;
    var tar = e.target||e.srcElement;
    if(tar.tagName.toUpperCase()=='A'){
        if(tar.className=='postv'){
            if(postA.className==''){
                postDivTri.style.display='block';
                postA.className='block';//postA如果不手动点击消失的话 在鼠标溢出它之后过一会它会消失 包括两个小图标也会消失 这个效果还没写到 需要在mouseout事件里写
                postVideoTri.className='down';
                postSpan.className = 'hover';
            }else if(postA.className='block'){
                postDivTri.style.display='none';
                postA.className='';
                postVideoTri.className='tri';
                postSpan.className = '';
            }
        }
    }
}

//轮播图区域
var banner = document.getElementById('banner');
var bannerMin = utils.getElementsByClass('bannerMin')[0];
var bannerNavRight = utils.getElementsByClass('bannerNavRight')[0];
var bannerNavRightUl = utils.children(bannerNavRight,'ul')[0];
//绑定轮播图区域数据
//x.ajax({
//    url: 'json/data.json',
//    method: 'get',
//    async: true,
//    cache: false,
//    timeout: 3000,
//    success: function (data) {
//        console.log(data);//得到了json里的数据
//    },
//    dataType: 'json'
//});
//~(function () {
//    var str = '',str1='';
//    var dataList=null;
//    x.ajax({
//        url:'json/data.json',
//        method:'get',
//        async:false,
//        success: function (data) {
//            console.log(data);
//            dataList = data;
//        },
//        dataType: 'json'
//    })
//    //绑定页面数据
//    var bannerImg = dataList.bannerImg;
//    for(var i=0;i<bannerImg.length;i++){
//        var cur = bannerImg[i];
//        str+='<a href="#"><img src="'+cur['img']+'" alt="轮播图" trueImg="img1.jpg"/></a>';
//        str1+='<li><a href="#">'+cur['text']+'</a></li>';
//    }
//    bannerMin.innerHTML = str;
//    bannerNavRightUl.innerHTML=str1;
//    //轮播图
//    var imgList = banner.getElementsByTagName('img');/*图片*/
//    var oLis = bannerNavRightUl.getElementsByTagName('li');/*对应的文字*/
//
//})()
var banner1 = new AutoBanner("banner", "json/data.json", 1000);
//实现图片的延迟加载
//function lazyImg(){
//    var
//}


