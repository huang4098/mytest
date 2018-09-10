/**
 * Created by Administrator on 2017/5/26.
 */
var touch = ("createTouch" in document);
var start = touch ? "touchstart" : "mousedown";
var move = touch ? "touchmove" : "mousemove";
var end = touch ? "touchend" : "mouseup";

function evTurn(e) {
    return touch ? e.originalEvent.targetTouches[0] : e
}

document.addEventListener('DOMContentLoaded', function () {

    function audioAutoPlay() {
        var u = navigator.userAgent, app = navigator.appVersion;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
        if($(document.body).width()>750){
            videoJS('video','http://zhidingfun.test.qingcdn.com/mmbscr/3.mp4')
            $('.index').attr('src','images/index3.gif')
            $('.p3').attr('src','images/end3.gif')
        }else{
            if(isAndroid){
                videoJS('video','http://zhidingfun.test.qingcdn.com/mmbscr/2.mp4');
                $('.index').attr('src','images/index2.gif')
                $('.p3').attr('src','images/end2.gif')
            }else{
                videoJS('video','http://zhidingfun.test.qingcdn.com/mmbscr/1.mp4');
                $('.index').attr('src','images/index1.gif')
                $('.p3').attr('src','images/end1.gif')
            }

        }
        document.getElementById("my_video").load();

        document.addEventListener("WeixinJSBridgeReady", function () {

            var u = navigator.userAgent, app = navigator.appVersion;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
            if($(document.body).width()>750){
                videoJS('video','http://zhidingfun.test.qingcdn.com/mmbscr/3.mp4');
                $('.index').attr('src','images/index3.gif')
                $('.p3').attr('src','images/end3.gif')
            }else{
                if(isAndroid){
                    videoJS('video','http://zhidingfun.test.qingcdn.com/mmbscr/2.mp4');
                    $('.index').attr('src','images/index2.gif')
                    $('.p3').attr('src','images/end2.gif')
                }else{
                    videoJS('video','http://zhidingfun.test.qingcdn.com/mmbscr/1.mp4');
                    $('.index').attr('src','images/index1.gif')
                    $('.p3').attr('src','images/end1.gif')
                }

            }
            document.getElementById("my_video").load();

        }, false);
    }
    audioAutoPlay();
});
$(function(){

  setTimeout(function(){
      $('.indexbtn').show()
  },3000);
    $('.indexbtn').on('click',function(){
          var  myVid1=document.getElementById("my_video");
        $('.indexbtn').hide();
        $('.index').hide();
        videoJS.play();
            myVid1.onended = function() {
                $('#my_video').css('opacity','0');
                $('#p3').show();
                $('.btn5').show();
                $('.btn6').show();
                document.getElementById('myAudio').play();
            }

    });

        $('.btn5').on('click',function(){

            window.location.href='https://weex.kaola.com/activity/pages/jf7pr30mpageru.html?tag=cf232b1c9bea568f85b00d6b7796cffa&__da_a50c7a8f_58ab885a3d433c80';

    });
    $('.btn6').on('click',function(){
        $('.share').show();

    });
    $('.share').on('click',function(){
        $('.share').hide();
    });

})

