﻿function myFunction(){var e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}function playOnPause(){null!=video&&(video.paused?(video.play(),update=setInterval(updatePlayer,30),playScreen.style.display="none"):(video.pause(),window.clearInterval(update),playScreen.style.display="block"))}function updatePlayer(){var e=video.currentTime/video.duration*100;pbar.style.width=e+"%",timeField.innerHTML=getFormattedTime(),video.ended?(window.clearInterval(update),playScreen.style.display="block"):video.paused&&(playButton.src="../i/cocuk-play-icon.png",screenButton.src="../i/cocuk-play-icon.png")}function skip(e){var t=e.pageX-pbarContainer.offsetLeft,n=window.getComputedStyle(pbarContainer).getPropertyValue("width");n=parseFloat(n.substr(0,n.length-2)),video.currentTime=t/n*video.duration,updatePlayer()}function getFormattedTime(){var e=Math.round(video.currentTime),t=Math.floor(e/60);t>0&&(e-=60*t),1===e.toString().length&&(e="0"+e);var n=Math.round(video.duration),o=Math.floor(n/60);return o>0&&(n-=60*o),1===n.toString().length&&(n="0"+n),t+":"+e+"/"+o+":"+n}function muteOrUnmute(){video.muted?(video.muted=!1,soundButton.src="",sbar.style.display="block"):(video.muted=!0,soundButton.src="",sbar.style.display="none")}function updateVolume(e){var t=e.pageX-sbarContainer.offsetLeft,n=window.getComputedStyle(sbarContainer).getPropertyValue("width");n=parseFloat(n.substr(0,n.length-2)),video.volume=t/n,sbar.style.width=t/n*100+"%",video.muted=!1,soundButton.src="",sbar.style.display="block"}function fullscreen(){video.requestFullscreen?video.requestFullscreen():video.webkitRequestFullscreen?video.webkitRequestFullscreen():video.mozRequestFullscreen?video.mozRequestFullscreen():video.msRequestFullscreen&&video.msRequestFullscreen()}window.addEventListener("load",function(){video=document.getElementById("video"),playButton=document.getElementById("play-button"),pbarContainer=document.getElementById("pbar-container"),pbar=document.getElementById("pbar"),timeField=document.getElementById("time-field"),soundButton=document.getElementById("sound-button"),sbarContainer=document.getElementById("sbar-container"),sbar=document.getElementById("sbar"),fullscreenButton=document.getElementById("fullscreen-button"),playScreen=document.getElementById("screen"),screenButton=document.getElementById("screen-button"),null!=video&&(video.load(),video.addEventListener("canplay",function(){playButton.addEventListener("click",playOnPause,!1),pbarContainer.addEventListener("click",skip,!1),updatePlayer(),soundButton.addEventListener("click",muteOrUnmute,!1),sbarContainer.addEventListener("click",updateVolume,!1),fullscreenButton.addEventListener("click",fullscreen,!1),screenButton.addEventListener("click",playOnPause,!1)}))},!1),function(e){e(function(){var t=e(window),n=e(".dergi-list");t.on("resize",function(){t.width()<=767?(n.addClass("mobile-menu"),e(".mobile-menu").on("click",function(){e(".dropdown-content").stop().slideToggle()})):(n.removeClass("mobile-menu"),e(".dropdown-content").removeAttr("style"))}).trigger("resize"),e(document).mouseup(function(t){var n=e(".mobile-menu");n.is(t.target)||0!==n.has(t.target).length||e(".dropdown-content").slideUp()})})}(jQuery);var x=document.getElementById("myAudio");function playAudio(){x.play()}var y=document.getElementById("myAudioOne");function playAudioOne(){y.play()}function pauseAudioOne(){y.pause()}var bubble=document.getElementById("myAudioTwo");function playAudioTwo(){bubble.play()}function pauseAudioTwo(){bubble.pause()}var game=document.getElementById("myAudioThree");function playAudioThree(){game.play()}function pauseAudioThree(){game.pause()}var minika=document.getElementById("myAudioFour");function myAudioFour(){minika.play()}function pauseAudioFour(){minika.pause()}var age=document.getElementById("myAudioFive");function myAudioFive(){age.play()}function pauseAudioFive(){age.pause()}var letter=document.getElementById("myAudioSix");function myAudioSix(){letter.play()}function pauseAudioSix(){letter.pause()}var chem=document.getElementById("myAudioSeven");function myAudioSeven(){chem.play()}function pauseAudioSeven(){chem.pause()}var ball=document.getElementById("myAudioEight");function myAudioEight(){ball.play()}function myAudioEight(){ball.pause()}