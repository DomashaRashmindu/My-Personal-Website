// Disable copy content, prevent blacked out text, prevent "I" key, "J" key, "S" key + macOS, "U" key, "F12" key
jQuery(document).ready(function(){
    jQuery(function() {
          jQuery(this).bind("contextmenu", function(event) {
              event.preventDefault();
              alert('š”š¼šš¶š³š¶š°š®šš¶š¼š»\n\nšš°š³š³šŗ @š¶š“š¦š³ š³šŖšØš©šµ š¤š­šŖš¤š¬ šŖš“ š„šŖš“š¢š£š­š¦. šš°šµšŖš§šŖš¤š¢šµšŖš°šÆ š§š³š°š® šš³š¢š£š¢š“š©šøš¢š³š¢ ( šš„š®šŖšÆ š°š§ šš¦š£š“šŖšµš¦ )')
          });
      });
      (function() {
          'use strict';
          let style = document.createElement('style');
          style.innerHTML = '*{ user-select: none !important; }';
   
      document.body.appendChild(style);
      })();
      window.onload = function () {
          document.addEventListener("contextmenu", function (e) {
              e.preventDefault();
              }, false);
              document.addEventListener("keydown", function (e) {
                  
                 if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
                     disabledEvent(e);
                 }
                  
                 if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                     disabledEvent(e);
                 }
                  
                 if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                     disabledEvent(e);
                 }
                  
                 if (e.ctrlKey && e.keyCode == 85) {
                     disabledEvent(e);
                 }
                 
                 if (event.keyCode == 123) {
                     disabledEvent(e);
                 }
              }, false);
              function disabledEvent(e) {
                 if (e.stopPropagation) {
                     e.stopPropagation();
                 } else if (window.event) {
                     window.event.cancelBubble = true;
                 }
                 e.preventDefault();
                 return false;
               
          }
      }
  });
  