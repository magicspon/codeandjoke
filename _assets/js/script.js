/**
 * Create module for configuring loading external fonts
 * @module WebFontConfig
 */
var html = document.getElementsByTagName('html')[0];
html.className += '  wf-loading';
setTimeout(function() {
  html.className = html.className.replace(' wf-loading', ' wf-fail');
}, 1500);

 
var WebFontConfig = {
    typekit: {
      id: 'loy5med'
    }
};

/** 
 * Load external fonts
 */
(function() {
  "use strict";
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s); 
})();

/** 
 * Method used to create an object based on input string
 * @method namespace
 * @param  {String} namespaceString dot notation of object representation
 * @return {Object} parent returns object relative indepth to notation
 * @example
 * var mrb = namespace('mrb.Application.Site');
 */
function namespace(namespaceString) {
    "use strict";
    var parts = namespaceString.split('.'),
        parent = window,
        currentPart = '',
        i = 0;

    for (i, length = parts.length; i < length; i++) {
        currentPart = parts[i];
        parent[currentPart] = parent[currentPart] || {};
        parent = parent[currentPart];
    }
    return parent;
}

 
var cj = namespace('cj.Application.Site');

// declare our JS framework, HT @jackfranklin
cj.play = {
   // variables you want available on page load
   getVars: function () {
       "use strict";
   	// eg this.accordion = $('.accordion');
   },    
   // functions you want to kick in on page load
   init: function () {
       "use strict";
       this.getVars();
   	// eg  this.doShowcase();
   },


   doText: function() {

   },
   // your functions
   doShowcase: function() {
       "use strict";
     // create local instance of this
       var self = this;
    }
};

$(function($){
  cj.play.init();
});
