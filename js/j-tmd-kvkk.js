﻿document.addEventListener("DOMContentLoaded",(function(){if(void 0!==document.cookie){if(null!==l("isapp")&&("1"===l("isapp").toLowerCase()||"true"===l("isapp").toLowerCase()))return;var e=function(e){var t=("; "+document.cookie).split("; "+e+"=");if(2===t.length)return t.pop().split(";").shift()}("tmd_gdpr");if(e&&e.indexOf("-")>-1&&(e=e.split("-")[0]),null!==e&&3!=e)return;var t="tmd_kvkk",n=null!==c(t)?c(t).split(","):[],i="/"+("undefined"!=typeof _kvkkLang?_kvkkLang:"");if(-1===(n=Array.isArray(n)?n:[]).indexOf(i))try{var a=document.createElement("link");a.rel="stylesheet",a.href="https://i.tmgrup.com.tr/tmd-consent/c/tmd-kvkk.css",a.type="text/css",document.head.appendChild(a);var r="";if(r+='<div class="txt">',"undefined"!=typeof _kvkkLang){var k="";"en"==_kvkkLang?(k+="Please ",k+='<a href="'+("undefined"==typeof _kvkkLink?"/veri-politikasi":_kvkkLink)+'#privacyEn" target="_blank">click</a>',k+="to read our informative text prepared pursuant to the Law on the Protection of Personal Data No. 6698 and to get information about the ",k+='<a href="'+("undefined"==typeof _kvkkLink?"/veri-politikasi":_kvkkLink)+'#cookiesEn" target="_blank">cookies</a> used on our website in accordance with the relevant legislation.'):"de"==_kvkkLang?(k+="Bitte ",k+='<a href="'+("undefined"==typeof _kvkkLink?"/veri-politikasi":_kvkkLink)+'#privacyDe" target="_blank">klicken</a>',k+=" Sie hier, um den Aufklärungstext, der gemäß Gesetz Nr. 6698 zum Schutz personenbezogener Daten erstellt wurde, und um Informationen zu ",k+='<a href="'+("undefined"==typeof _kvkkLink?"/veri-politikasi":_kvkkLink)+'#cookiesDe" target="_blank">Cookies</a>',k+=" zu erhalten, die wir in Übereinstimmung mit einschlägigen Gesetzen auf unserer Website verwenden."):"ru"==_kvkkLang?(k+="Чтобы прочесть информационный лист, составленное в соответствии Закону №6698 «О защите персональных данных», а также получить информацию ",k+='<a href="'+("undefined"==typeof _kvkkLink?"/veri-politikasi":_kvkkLink)+'#cookiesRu" target="_blank">о cookie-файлах</a>',k+=", используемых на нашем сайте в соответствии с применимым законодательством",k+='<a href="'+("undefined"==typeof _kvkkLink?"/veri-politikasi":_kvkkLink)+'#privacyRu" target="_blank">, нажмите здесь.</a>'):"ar"==_kvkkLang&&(k+='<a href="'+("undefined"==typeof _kvkkLink?"/veri-politikasi":_kvkkLink)+'#privacyAr" target="_blank"> يُرجى النقر هنا</a>',k+="لقراءة نص التوعية الذي قمنا بإعداده بما يتوافق مع قانون حماية البيانات الشخصية رقم 6698، وللحصول على معلومات",k+='<a href="'+("undefined"==typeof _kvkkLink?"/veri-politikasi":_kvkkLink)+'#cookiesAr" target="_blank">متعلقة بملفات الارتباط </a>',k+=" المستخدمة في موقعنا بما يتوافق مع التشريعات ذات الصلة"),r+=""!==k?"  <span>"+k+"  </span>":""}r+="  <span class='tr'>",r+="      6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca hazırlanmış aydınlatma metnimizi okumak ve sitemizde ilgili mevzuata uygun olarak kullanılan ",r+='      <a href="'+("undefined"==typeof _kvkkLink?"/veri-politikasi":_kvkkLink)+'#cookies" target="_blank">çerezlerle</a>',r+=" ilgili bilgi almak için lütfen ",r+='      <a href="'+("undefined"==typeof _kvkkLink?"/veri-politikasi":_kvkkLink)+'#privacy" target="_blank">tıklayınız. </a>',r+="  </span>",r+='  <span class="close"><svg height="24px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg></span>',r+="</div>";var o=document.createElement("div");o.className="veriAltBar",o.innerHTML=r,o.querySelector("span.close").addEventListener("click",(function(){n.push(i),function(e,t,n){n=null==n?1:Math.abs(n);var i=Date.now()+24*n*60*60*1e3;try{localStorage.setItem(e,t),localStorage.setItem(e+"_expiresIn",i)}catch(e){return!1}}(t,n.join(","),30);try{document.querySelector(".stickyLink").style.bottom=""}catch(e){}o.remove()})),setTimeout((function(){document.body.appendChild(o);var e=o.querySelector("span.close");if(e){try{document.querySelector(".stickyLink").style.bottom=o.offsetHeight+"px"}catch(e){}"#app"==window.location.hash&&e.click()}}),2e3)}catch(e){}}function l(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}function c(e){var t=Date.now(),n=localStorage.getItem(e+"_expiresIn");if(null==n&&(n=0),n<t)return function(e){try{localStorage.removeItem(e),localStorage.removeItem(e+"_expiresIn")}catch(e){return!1}}(e),null;try{return localStorage.getItem(e)}catch(t){return console.log("getStorage: Error reading key ["+e+"] from localStorage: "+JSON.stringify(t)),null}}}));