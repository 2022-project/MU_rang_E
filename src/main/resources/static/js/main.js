// import {image} from "@tensorflow/tfjs";

var user_id = '0'

$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8080/like/" + user_id,
        data: 'get',
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (dataList) {
            $(dataList).each(function (index, data) {
                console.log(data.img_url);
                console.log(data.title);
                $(".sample")
                    .append(
                        $("<li>")
                            .addClass("playlist")
                            .append(
                                $("<img>")
                                    .addClass("album")
                                    .attr({
                                        src : data.img_url
                                    }),
                                $("<div>")
                                    .addClass("sub")
                                    .append(
                                        $("<p>")
                                            .addClass("title")
                                            .text(data.title),
                                        $("<img>")
                                            .addClass("like")
                                            .attr({
                                                src : "images/like.png"
                                            })
                                    )
                            )
                    )
            });
        },
        error: function () {
            console.log("유저의 음악 정보 로딩 에러");
        }
    });
});

// var flag = new Array(30);
// var likey = document.getElementsByClassName("like");
// window.onload = function () {
//     for(var i=0; i<30; i++){
//         likey[i].id = "like"+i;
//         likey[i].src='images/unlike.png';
//         if(i<5 || (i>=15 && i<20)) likey[i].style.display='block';
//         flag[i]=0;
//     }
//
// }
//
// function like_toggle(id)  {
//     var flag_num = id.substr(4);
//     if(flag[flag_num] == 0){
//     document.getElementById(id).src='images/like.png';
//         flag[flag_num]=1;
//         //전달해줄 음악 id를 어떻게 가져올 것인가?
//             $.ajax({
//                 url: "http://localhost:8080/like/{user-id}/{music-id}",
//                 data: 'get',
//                 contentType: "application/json;charset=UTF-8",
//                 dataType: "json",
//                 success: function (data) {
//                     console.log('좋아요 전송 성공');
//                 },
//                 error: function () {
//                     console.log('좋아요 전송 실패');
//                 }
//             });
//     }
//     else{
//         document.getElementById(id).src='images/unlike.png';
//         flag[flag_num]=0;
//         // 좋아요 삭제 api 어떻게?
//     }
// }
//
// function slide1(){
//     for(var i=0; i<15; i++){
//         if(i<5)likey[i].style.display='block';
//         else likey[i].style.display='none';
//     }
// }
//
// function slide2(){
//     for(var i=0; i<15; i++){
//         if(i>=5 && i<10)likey[i].style.display='block';
//         else likey[i].style.display='none';
//     }
// }
//
// function slide3(){
//     for(var i=0; i<15; i++){
//         if(i>=10 && i<15)likey[i].style.display='block';
//         else likey[i].style.display='none';
//     }
// }
//
//
// function second_slide1(){
//     for(var i=15; i<30; i++){
//         if(i>=15 && i<20)likey[i].style.display='block';
//         else likey[i].style.display='none';
//     }
// }
//
// function second_slide2(){
//     for(var i=15; i<30; i++){
//         if(i>=20 && i<25)likey[i].style.display='block';
//         else likey[i].style.display='none';
//     }
// }
//
// function second_slide3(){
//     for(var i=15; i<30; i++){
//         if(i>=25 && i<30)likey[i].style.display='block';
//         else likey[i].style.display='none';
//     }
// }
