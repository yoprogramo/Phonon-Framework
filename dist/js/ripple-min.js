"use strict";!function(t,e){var n=function(t){var e=function(){return t.apply(this,arguments)};return e.toString=function(){return t.toString()},e}(function(t){var n=t.target;if(null!==n.getAttribute("no-ripple"))return!1;if("button"!==n.tagName.toLowerCase()&&!n.classList.contains("btn"))return!1;if(n.classList.contains("btn-action")||n.classList.contains("floating-action"))return!1;if(n.disabled===!0)return!1;var s=n.getBoundingClientRect(),a=n.querySelector(".ripple");a||(a=e.createElement("span"),a.className="ripple",a.style.height=a.style.width=Math.max(s.width,s.height)+"px",n.appendChild(a)),a.classList.remove("show");var i=(t.changedTouches?t.changedTouches[0].pageY:t.pageY)-s.top-a.offsetHeight/2-e.body.scrollTop,r=(t.changedTouches?t.changedTouches[0].pageX:t.pageX)-s.left-a.offsetWidth/2-e.body.scrollLeft;return a.style.top=i+"px",a.style.left=r+"px",a.classList.add("show"),!1});e.addEventListener("touchstart",n,!1)}(window,document);