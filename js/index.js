//������ʵ�ֵ�������˵�Ч��
var header = document.getElementById('header');
var navUl = header.getElementsByClassName('navBar')[0];//������ul
var postVideo = utils.getElementsByClass('postVideo',navUl)[0];
var postVideoTri = utils.children(postVideo,'em')[0];
var postA = utils.children(postVideo,'ol')[0];
var postDivTri = utils.children(postVideo,'div')[0];
var postSpan = utils.children(postVideo,'span')[0];
console.log(postDivTri);
//���¼�ί����д�������ĵ���¼�
navUl.onclick = function (e) {
    e=e||window.event;
    var tar = e.target||e.srcElement;
    if(tar.tagName.toUpperCase()=='A'){
        if(tar.className=='postv'){
            if(postA.className==''){
                postDivTri.style.display='block';
                postA.className='block';//postA������ֶ������ʧ�Ļ� ����������֮���һ��������ʧ ��������Сͼ��Ҳ����ʧ ���Ч����ûд�� ��Ҫ��mouseout�¼���д
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

//�ֲ�ͼ����
var banner = document.getElementById('banner');
var bannerMin = utils.getElementsByClass('bannerMin')[0];
var bannerNavRight = utils.getElementsByClass('bannerNavRight')[0];
var bannerNavRightUl = utils.children(bannerNavRight,'ul')[0];
//���ֲ�ͼ��������
//x.ajax({
//    url: 'json/data.json',
//    method: 'get',
//    async: true,
//    cache: false,
//    timeout: 3000,
//    success: function (data) {
//        console.log(data);//�õ���json�������
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
//    //��ҳ������
//    var bannerImg = dataList.bannerImg;
//    for(var i=0;i<bannerImg.length;i++){
//        var cur = bannerImg[i];
//        str+='<a href="#"><img src="'+cur['img']+'" alt="�ֲ�ͼ" trueImg="img1.jpg"/></a>';
//        str1+='<li><a href="#">'+cur['text']+'</a></li>';
//    }
//    bannerMin.innerHTML = str;
//    bannerNavRightUl.innerHTML=str1;
//    //�ֲ�ͼ
//    var imgList = banner.getElementsByTagName('img');/*ͼƬ*/
//    var oLis = bannerNavRightUl.getElementsByTagName('li');/*��Ӧ������*/
//
//})()
var banner1 = new AutoBanner("banner", "json/data.json", 1000);
//ʵ��ͼƬ���ӳټ���
//function lazyImg(){
//    var
//}


