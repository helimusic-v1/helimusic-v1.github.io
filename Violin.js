var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(c,b,e){if(e.get||e.set)throw new TypeError("ES3 does not support getters and setters.");c!=Array.prototype&&c!=Object.prototype&&(c[b]=e.value)};$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(c){return $jscomp.SYMBOL_PREFIX+(c||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var c=$jscomp.global.Symbol.iterator;c||(c=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[c]&&$jscomp.defineProperty(Array.prototype,c,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(c){var b=0;return $jscomp.iteratorPrototype(function(){return b<c.length?{done:!1,value:c[b++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(c){$jscomp.initSymbolIterator();c={next:c};c[$jscomp.global.Symbol.iterator]=function(){return this};return c};$jscomp.polyfill=function(c,b,e,d){if(b){e=$jscomp.global;c=c.split(".");for(d=0;d<c.length-1;d++){var g=c[d];g in e||(e[g]={});e=e[g]}c=c[c.length-1];d=e[c];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(e,c,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("Array.from",function(c){return c?c:function(b,e,d){$jscomp.initSymbolIterator();e=null!=e?e:function(f){return f};var g=[],a=b[Symbol.iterator];if("function"==typeof a)for(b=a.call(b);!(a=b.next()).done;)g.push(e.call(d,a.value));else for(var a=b.length,h=0;h<a;h++)g.push(e.call(d,b[h]));return g}},"es6-impl","es3");$jscomp.makeIterator=function(c){$jscomp.initSymbolIterator();var b=c[Symbol.iterator];return b?b.call(c):$jscomp.arrayIterator(c)};
$jscomp.owns=function(c,b){return Object.prototype.hasOwnProperty.call(c,b)};
$jscomp.polyfill("WeakMap",function(c){function b(a){$jscomp.owns(a,d)||$jscomp.defineProperty(a,d,{value:{}})}function e(a){var f=Object[a];f&&(Object[a]=function(a){b(a);return f(a)})}if(function(){if(!c||!Object.seal)return!1;try{var a=Object.seal({}),f=Object.seal({}),b=new c([[a,2],[f,3]]);if(2!=b.get(a)||3!=b.get(f))return!1;b["delete"](a);b.set(f,4);return!b.has(a)&&4==b.get(f)}catch(n){return!1}}())return c;var d="$jscomp_hidden_"+Math.random().toString().substring(2);e("freeze");e("preventExtensions");
e("seal");var g=0,a=function(a){this.id_=(g+=Math.random()+1).toString();if(a){$jscomp.initSymbol();$jscomp.initSymbolIterator();a=$jscomp.makeIterator(a);for(var f;!(f=a.next()).done;)f=f.value,this.set(f[0],f[1])}};a.prototype.set=function(a,f){b(a);if(!$jscomp.owns(a,d))throw Error("WeakMap key fail: "+a);a[d][this.id_]=f;return this};a.prototype.get=function(a){return $jscomp.owns(a,d)?a[d][this.id_]:void 0};a.prototype.has=function(a){return $jscomp.owns(a,d)&&$jscomp.owns(a[d],this.id_)};a.prototype["delete"]=
function(a){return $jscomp.owns(a,d)&&$jscomp.owns(a[d],this.id_)?delete a[d][this.id_]:!1};return a},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_MAP=!1;
$jscomp.polyfill("Map",function(c){if(!$jscomp.ASSUME_NO_NATIVE_MAP&&function(){if(!c||!c.prototype.entries||"function"!=typeof Object.seal)return!1;try{var a=Object.seal({x:4}),b=new c($jscomp.makeIterator([[a,"s"]]));if("s"!=b.get(a)||1!=b.size||b.get({x:4})||b.set({x:4},"t")!=b||2!=b.size)return!1;var e=b.entries(),d=e.next();if(d.done||d.value[0]!=a||"s"!=d.value[1])return!1;d=e.next();return d.done||4!=d.value[0].x||"t"!=d.value[1]||!e.next().done?!1:!0}catch(p){return!1}}())return c;$jscomp.initSymbol();
$jscomp.initSymbolIterator();var b=new WeakMap,e=function(f){this.data_={};this.head_=a();this.size=0;if(f){f=$jscomp.makeIterator(f);for(var b;!(b=f.next()).done;)b=b.value,this.set(b[0],b[1])}};e.prototype.set=function(a,b){var f=d(this,a);f.list||(f.list=this.data_[f.id]=[]);f.entry?f.entry.value=b:(f.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:a,value:b},f.list.push(f.entry),this.head_.previous.next=f.entry,this.head_.previous=f.entry,this.size++);return this};e.prototype["delete"]=
function(a){a=d(this,a);return a.entry&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.data_[a.id],a.entry.previous.next=a.entry.next,a.entry.next.previous=a.entry.previous,a.entry.head=null,this.size--,!0):!1};e.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=a();this.size=0};e.prototype.has=function(a){return!!d(this,a).entry};e.prototype.get=function(a){return(a=d(this,a).entry)&&a.value};e.prototype.entries=function(){return g(this,function(a){return[a.key,
a.value]})};e.prototype.keys=function(){return g(this,function(a){return a.key})};e.prototype.values=function(){return g(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var f=this.entries(),e;!(e=f.next()).done;)e=e.value,a.call(b,e[1],e[0],this)};e.prototype[Symbol.iterator]=e.prototype.entries;var d=function(a,e){var f;f=e&&typeof e;"object"==f||"function"==f?b.has(e)?f=b.get(e):(f=""+ ++h,b.set(e,f)):f="p_"+e;var d=a.data_[f];if(d&&$jscomp.owns(a.data_,f))for(var g=0;g<
d.length;g++){var m=d[g];if(e!==e&&m.key!==m.key||e===m.key)return{id:f,list:d,index:g,entry:m}}return{id:f,list:d,index:-1,entry:void 0}},g=function(a,b){var e=a.head_;return $jscomp.iteratorPrototype(function(){if(e){for(;e.head!=a.head_;)e=e.previous;for(;e.next!=e.head;)return e=e.next,{done:!1,value:b(e)};e=null}return{done:!0,value:void 0}})},a=function(){var a={};return a.previous=a.next=a.head=a},h=0;return e},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.polyfill("Set",function(c){if(!$jscomp.ASSUME_NO_NATIVE_SET&&function(){if(!c||!c.prototype.entries||"function"!=typeof Object.seal)return!1;try{var e=Object.seal({x:4}),b=new c($jscomp.makeIterator([e]));if(!b.has(e)||1!=b.size||b.add(e)!=b||1!=b.size||b.add({x:4})!=b||2!=b.size)return!1;var g=b.entries(),a=g.next();if(a.done||a.value[0]!=e||a.value[1]!=e)return!1;a=g.next();return a.done||a.value[0]==e||4!=a.value[0].x||a.value[1]!=a.value[0]?!1:g.next().done}catch(h){return!1}}())return c;
$jscomp.initSymbol();$jscomp.initSymbolIterator();var b=function(b){this.map_=new Map;if(b){b=$jscomp.makeIterator(b);for(var e;!(e=b.next()).done;)this.add(e.value)}this.size=this.map_.size};b.prototype.add=function(b){this.map_.set(b,b);this.size=this.map_.size;return this};b.prototype["delete"]=function(b){b=this.map_["delete"](b);this.size=this.map_.size;return b};b.prototype.clear=function(){this.map_.clear();this.size=0};b.prototype.has=function(b){return this.map_.has(b)};b.prototype.entries=
function(){return this.map_.entries()};b.prototype.values=function(){return this.map_.values()};b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(b,d){var e=this;this.map_.forEach(function(a){return b.call(d,a,a,e)})};return b},"es6-impl","es3");$jscomp.array=$jscomp.array||{};
$jscomp.iteratorFromArray=function(c,b){$jscomp.initSymbolIterator();c instanceof String&&(c+="");var e=0,d={next:function(){if(e<c.length){var g=e++;return{value:b(g,c[g]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d};$jscomp.polyfill("Array.prototype.keys",function(c){return c?c:function(){return $jscomp.iteratorFromArray(this,function(b){return b})}},"es6-impl","es3");
var AboutPage=function(){return{initialize:function(c){document.querySelector("body > div#container > div#controls > div.control#ok").addEventListener("click",function(){Header.handlePlay()})},draw:function(){},getPath:function(){return"/about.html"}}}(),AJAX=function(){return{GET:function(c,b,e){b=void 0===b?null:b;e=void 0===e?null:e;var d=new XMLHttpRequest;d.onreadystatechange=function(){4==this.readyState&&(200==this.status?null!==b&&b(this.responseText):null!==e&&e(this.status))};d.open("GET",
c,!0);d.send()}}}(),CatalogPage=function(){function c(){AJAX.GET(App.getPiecesPath()+"indexes.json",function(b){b=JSON.parse(b);var e=b.scales;1==a.length?b.hasOwnProperty(a[0])&&(e=b[a[0]]):1<a.length&&"scales"==a[0]&&b.scales.hasOwnProperty(a[1])&&(e=b.scales[a[1]]);g={query:a,tiles:[]};b=[];for(c in e)e.hasOwnProperty(c)&&"_"!==c.substring(0,1)&&b.push(c);b.sort(function(a,b){var f=Locale.getTranslation(e[a]._desc,"en"),c=Locale.getTranslation(e[b]._desc,"en");return f<c?-1:f>c?1:0});for(var f=
0;f<b.length;f++){var c=b[f],p=e[c];if("_"!==c.substring(0,1)){var c={id:c,description:p._desc},m=0;for(keyInNextLevel in p)p.hasOwnProperty(keyInNextLevel)&&"_"!==keyInNextLevel.substring(0,1)&&(m+=1);0>=m?c.type="piece":(c.type="folder",c.total=m);g.tiles.push(c)}}d()})}function b(a){a=a.target.getAttribute("data");window.location=App.getPagePath(CatalogPage)+"?q="+encodeURIComponent("scales,"+a)}function e(a){window.location=App.getPagePath(IndexPage)+"?p="+encodeURIComponent(a.target.getAttribute("data"))}
function d(){for(var a=0;a<g.tiles.length;a++){var c=g.tiles[a];if("folder"==c.type){var d=document.createElement("div");d.classList.add("tile");d.classList.add("folder");d.setAttribute("data",c.id);d.innerHTML=Locale.getTranslation(c.description);d.addEventListener("click",b);h.appendChild(d)}else d=document.createElement("div"),d.classList.add("tile"),d.classList.add("piece"),d.setAttribute("data",c.id),d.innerHTML=Locale.getTranslation(c.description),d.addEventListener("click",e),h.appendChild(d),
c.hasOwnProperty("data")}}var g={},a="",h=null;return{initialize:function(b){h=document.querySelector("div#tiles");window.hasOwnProperty("catalogSnapshot")&&(g=window.catalogSnapshot);parseInt(b.p);a=Array.from(new Set((b.q||"").split(",")));c()},draw:function(){},getPath:function(){return"/catalog.html"}}}(),Header=function(){function c(){var a;a=App.getParams();var b="default";a.hasOwnProperty("p")?b=a.p:"lastPieceId"in sessionStorage&&(b=sessionStorage.lastPieceId);a=b;window.location=App.getPagePath(IndexPage)+
"?p="+encodeURIComponent(a)+"&v=0"}function b(){window.location=App.getPagePath(CatalogPage)}function e(){window.location=App.getPagePath(AboutPage)}var d=null,g=null;return{initialize:function(){d=document.querySelector("div#header > div#controls > div.control#play");g=document.querySelector("div#header > div#controls > div.control#open");d.addEventListener("click",c);g.addEventListener("click",b);document.querySelector("div#header > div#title  > div#text").addEventListener("click",e);document.querySelector("div#header > div#title  > div#icon").addEventListener("click",
e);document.querySelector("div#header > div#title  > div#text").innerHTML=Locale.getApplicationTitle()},handlePlay:c,highlight:function(a){d.classList.remove("highlighted");g.classList.remove("highlighted");a===IndexPage?d.classList.add("highlighted"):a===CatalogPage&&g.classList.add("highlighted")}}}(),IndexPage=function(){function c(){return"/index.html"}var b=null,e=0,d=function(){function a(a){a=a.target.id;b.getData();if("pdf"===a){LoadingIconManager.show();var d=document.querySelector("body > div#pdfRenderer");
d.style.display="block";(new PDFRenderer(d)).render(b);(new PDFConverter(d,function(a){window.location=a;d.style.display="none";LoadingIconManager.hide()})).convert(b)}else if("pre"==a){var c=b.getPreBar(e);a=b.getTotalVerticals()-1;null!==c&&(a=c.first);window.location=window.location.pathname+"?p="+b.getData().id+"&v="+a}else"next"==a&&(c=b.getNextBar(e),a=0,null!==c&&(a=c.first),window.location=window.location.pathname+"?p="+b.getData().id+"&v="+a)}return{initialize:function(){for(var b=document.querySelectorAll("body > div#container > div#music > div#header > div#controls > div.control"),
e=0;e<b.length;e++)b[e].addEventListener("click",a)},enableControls:function(){for(var a=document.querySelectorAll("body > div#container > div#music > div#header > div#controls > div.control"),b=0;b<a.length;b++)a[b].classList.remove("disabled")}}}(),g=function(){function a(a){var b=a.clientX,e=a.clientY;"ontouchstart"in window&&(b=a.touches[0].clientX,e=a.touches[0].clientY);c(b,e)}function d(a){a=null;for(var d=document.querySelectorAll("body > div#container > div#notes > div.note"),c=0;c<d.length;c++)if(d[c].classList.contains("selected")){a=
d[c];break}if(null!==a){a.classList.remove("selected");StringInstrumentSimulator.stop();var d=b.getBar(e),c=e-d.first,f=d.verticals[c],f=Array.from(f.notes.keys());"playAllNotesAndMoveNext"!==a.id?(f=[parseInt(a.getAttribute("value"))],l.changeNotesColor(c,f,"green"),l.changeNotesSize(c,f,1)):(l.changeNotesColor(c,f,"black"),l.changeNotesSize(c,f,1),e+=1,a=!1,e>=d.first+d.verticals.length&&(a=!0),e>=b.getTotalVerticals()&&(e=0),a?window.location=window.location.pathname+"?p="+b.getData().id+"&v="+
e:(c+=1,f=d.verticals[c],f=Array.from(f.notes.keys()),l.changeNotesColor(c,f,"green"),l.changeNotesSize(c,f,1),g()))}}function c(a,c){for(var d=null,f=document.querySelectorAll("body > div#container > div#notes > div.note"),g=0;g<f.length;g++){var m=f[g].getBoundingClientRect();if(a>=m.left&&a<=m.right&&c>=m.top&&c<=m.bottom){d=f[g];break}}if(null!==d){for(;!d.classList.contains("note");)d=d.parentNode;d.classList.add("selected");var g=b.getBar(e),f=e-g.first,m=g.verticals[f],p=[],h=[];if("playAllNotesAndMoveNext"===
d.id)for(g=0;g<m.notes.length;g++)p.push(Note.getNoteFrequency(m.notes[g])),h.push(g);else d=parseInt(d.getAttribute("value")),p.push(Note.getNoteFrequency(m.notes[d])),h.push(d);"r"===m.duration.substr(-1)?StringInstrumentSimulator.play([0]):StringInstrumentSimulator.play(p);l.changeNotesColor(f,h,"red");l.changeNotesSize(f,h,1.3)}}function g(){for(var a=document.querySelectorAll("body > div#container > div#notes > div.note"),d=0;d<a.length;d++)"playAllNotesAndMoveNext"!==a[d].id&&a[d].parentNode.removeChild(a[d]);
var a=document.querySelector("body > div#container > div#notes"),d=b.getBar(e),c=d.verticals[e-d.first];if("r"!==c.duration.substr(-1))for(d=c.notes.length-1;0<=d;d--){var g=document.createElement("div");g.classList.add("note");g.setAttribute("value",""+d);var f=g,l;l=Note.getNoteDetail(c.notes[d]);var h=""===l.accidental?"":"withAccidental";l=('<div class="natural YYY">'+l.natural+'</div><div class="accidental XXX"></div><div class="octave ZZZ">'+l.octave+"</div>").replace("XXX",""===l.accidental?
"hidden":l.accidental).replace("YYY",h).replace("ZZZ",h);f.innerHTML=l;a.appendChild(g)}}function n(){l.display();g()}var l=null;return{initialize:function(){var b="mousedown",e="mouseup";"ontouchstart"in window&&(b="touchstart",e="touchend");window.addEventListener(b,a);window.addEventListener(e,d);l=new MusicPlayer(document.querySelector("body > div#container > div#music > div#sheet"))},playNoteAtPosition:c,reDraw:n,firstDraw:function(){l.setPiece(b);l.setFocus(e);n();var a=b.getBar(e),d=e-a.first;
l.changeNotesColor(d,Array.from(a.verticals[d].notes.keys()),"green");document.querySelector("body > div#container > div#music > div#header > div#title").innerHTML=Locale.getTranslation(b.getData().descriptions)}}}();return{initialize:function(a){function h(a){e>=b.getTotalVerticals()&&(e=0);g.firstDraw();d.enableControls();null!==a&&g.playNoteAtPosition(a.x,a.y);sessionStorage.lastPieceId=b.getData().id;a=b.getNextBar(e);var c=0;null!==a&&(c=a.first);AJAX.GET(window.location.pathname+"?p="+b.getData().id+
"&v="+c)}var f=a.p||"default";e=parseInt(a.v)||0;var k=null;"unhandledEvent"in a&&a.lastPage===c()&&(k=a.unhandledEvent);g.initialize();d.initialize();b=MusicStorageManager.getPiece(f);null!==b?h(k):(LoadingIconManager.show(),AJAX.GET(App.getPiecesPath()+f+".json",function(a){b=Piece.createFromString(a);MusicStorageManager.setPiece(b);h(k);LoadingIconManager.hide()},function(a){alert(Locale.getPieceLoadingFailureNotice(f));window.location=App.getPagePath(CatalogPage)}))},draw:function(){null!==b&&
g.reDraw()},getPath:c}}(),LoadingIconManager=function(){var c=0,b=document.querySelector("body > div#loading");return{show:function(){setTimeout(function(){100<(new Date).getTime()-c&&b.classList.remove("hidden")},100)},hide:function(){b.classList.add("hidden");c=(new Date).getTime()}}}(),Locale=function(){function c(){if("language"in localStorage&&0<=e.indexOf(localStorage.language))d=localStorage.language;else{var a=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage,
a=a.toLowerCase();d=0<=e.indexOf(a)?a:"en"}}function b(a,b){var e;void 0===b&&(b=d);e=b in a?a[b]:a.en;for(var c=2;c<arguments.length;c++)e=e.replace("{"+(c-1)+"}",arguments[c]);return e}var e=["en","zh-cn"],d="en",g={en:"More resources from {1}","zh-cn":"\u66f4\u591a\u8d44\u6e90\u5728 {1}"},a={en:"Cannot load piece {1} from {2}. Please choose a new one.","zh-cn":"\u65e0\u6cd5\u4ece{2}\u4e0b\u8f7d\u66f2\u76ee{1}\u3002\u8bf7\u9009\u62e9\u65b0\u66f2\u76ee\u3002"},h={en:"Violin","zh-cn":"\u5c0f\u63d0\u7434"};
c();return{checkLanguage:c,getApplicationTitle:function(a){return b(h,a)},getPrintFooter:function(a){return b(g,a,window.location.hostname)},getTranslation:b,getPieceLoadingFailureNotice:function(e,d){return b(a,d,e,App.getHost()+App.getPiecesPath())}}}();
function MusicPlayer(c){function b(a){for(var b=a.first,e=[],c=0;c<a.verticals.length;c++){for(var g=[],f=0;f<a.verticals[c].notes.length;f++)g.push({color:"black",size:"1.0"});e.push(g)}return{isOnBar:function(a){return b===a.first},changeNotesSize:function(a,b,d){for(var c=0;c<b.length;c++)e[a][b[c]].size=d},changeNotesColor:function(a,b,d){for(var c=0;c<b.length;c++)e[a][b[c]].color=d},drawAllOrnaments:function(){for(var a=0<=navigator.userAgent.toLowerCase().indexOf("firefox"),b=0;b<e.length;b++)for(var c=
0;c<e[b].length;c++){if("1.0"!==e[b][c].size&&!a){var g=d(b,[c]);g[0].style.transformOrigin="50% 50%";g[0].style.transform="scale("+e[b][c].size+")"}"black"!==e[b][c].color&&(g=d(b,[c]),g[0].setAttribute("fill",e[b][c].color))}}}}function e(){a.innerHTML="";var b=new Vex.Flow.Renderer(a,Vex.Flow.Renderer.Backends.SVG);context=b.getContext();b.resize(a.clientWidth,a.clientHeight);context.setFont("Arial",10,"").setBackgroundFillStyle("#ffffff");return context}function d(a,b){for(var e=document.querySelectorAll("#vf-"+
f[a].attrs.id+" g.vf-notehead path"),c=[],d=0;d<b.length;d++)c.push(e[b[d]]);return c}function g(a){var b=h.getBar(a);return a-b.first}var a=c,h=null,f=[],k=0,n=null;return{setPiece:function(a){h=a;k=0},setFocus:function(a){k=a},display:function(){var a=e(),c=new Vex.Flow.Stave(4,64,a.width-8),d=h.getBar(k);c.addClef(d.clef).addTimeSignature(d.time).addKeySignature(VFUtility.toVFKeySignature(d.key));c.setMeasure(h.getData().bars.indexOf(d)+1);c.setContext(a).draw();f=[];for(var g={},z=0;z<d.verticals.length;z++)f.push(VFUtility.prepareStaveNote(d.key,
d.clef,d.verticals[z],g));g=Vex.Flow.Beam.generateBeams(f);Vex.Flow.Formatter.FormatAndDraw(a,c,f);g.forEach(function(b){b.setContext(a).draw()});null!==n&&n.isOnBar(d)?n.drawAllOrnaments():n=new b(d)},changeNotesSize:function(a,b,c){c=void 0===c?"1.0":c;if(!(0<=navigator.userAgent.toLowerCase().indexOf("firefox"))){a=g(a);for(var e=d(a,b),f=0;f<e.length;f++)e[f].style.transformOrigin="50% 50%",e[f].style.transform="scale("+c+")";n.changeNotesSize(a,b,c)}},changeNotesColor:function(a,b,c){c=void 0===
c?"black":c;a=g(a);for(var e=d(a,b),f=0;f<e.length;f++)e[f].setAttribute("fill",c);n.changeNotesColor(a,b,c)}}}var MusicStorageManager=function(){return{getPiece:function(c){c=localStorage.getItem("_piece_"+c);return null===c?null:Piece.createFromString(c)},setPiece:function(c){localStorage.setItem("_piece_"+c.id,JSON.stringify(c))}}}();
function MusicViewer(c){function b(){g.innerHTML="";var a=Vex.Flow.Renderer.Backends.SVG;"CANVAS"===g.tagName.toUpperCase()&&(a=Vex.Flow.Renderer.Backends.CANVAS);a=new Vex.Flow.Renderer(g,a);k=a.getContext();a.resize(g.clientWidth,g.clientHeight);k.setFont("Arial",10,"").setBackgroundFillStyle("#ffffff");return k}function e(b,c,e){c=void 0===c?0:c;e=void 0===e?0:e;var d={"C\u266f":7,"b\u266d":5,"E\u266d":3,"c\u266f":4,d:1,c:3,"a\u266f":7,F:1,B:5,D:2,"G\u266d":6,"B\u266d":2,"g\u266f":5,e:1,"C\u266d":7,
"F\u266f":6,b:2,G:1,"a\u266d":7,E:4,a:0,C:0,"A\u266d":4,"f\u266f":3,"d\u266f":6,g:2,A:3,f:4,"D\u266d":5,"e\u266d":6};c=(0===c?g.clientWidth:c)-8;var h=0===e?g.clientHeight:e;e=Math.floor(h/160);for(var h=40+.33*(h-160*e),m=a.getData(),k=[],l=0;l<e;l++)k.push({height:160,staves:[]});for(l=0;l<e&&b<m.bars.length;l++){for(var p=[],n="",u="",x="",q=b;q<m.bars.length;q++){var v=m.bars[q],r={clef:"",key:"",time:"",verticals:v.verticals.length,size:0};v.clef!==n&&(n=r.clef=v.clef,r.size+=25);v.key!==u&&
(u=r.key=v.key,r.size+=8*d[v.key]);v.time!==x&&(x=r.time=v.time,r.size+=14);r.size+=50*r.verticals;p.push(r)}u=0;n=m.bars.length-b;for(q=b;q<m.bars.length;q++)if(u+=p[q-b].size,u>c){n=q>b?q-b:1;break}for(q=u=0;q<n;q++)u+=p[q].size;for(q=x=0;q<n;q++)f=v=q+b,r=p[q].size/u*c,k[l].staves.push({barIndex:v,left:x+4,width:r}),x+=r;b+=n}return{rows:k,staveOffsetTop:h}}function d(b){var c=a.getData();b=0==b?c.bars.length-1:b-1;for(var d=0,g=0;g<c.bars.length;g++){for(var f=d,h=e(d),k=0;k<h.rows.length;k++)for(var l=
0;l<h.rows[k].length;l++){if(b===h.rows[k][l].barIndex)return 0==k+l?f:d;d=h.rows[k][l].barIndex}d+=1}}var g=c,a=null,h=0,f=0,k=null,n=null;b();return{setPiece:function(b){a=b},setFirstBar:function(a){h=a},display:function(){b();var c=a.getData(),d=e(h),g=d.staveOffsetTop;n=d;for(var f=0;f<d.rows.length;f++){for(var z="",B="",C="",w=0;w<d.rows[f].staves.length;w++){var t=c.bars[d.rows[f].staves[w].barIndex],A=new Vex.Flow.Stave(d.rows[f].staves[w].left,g,d.rows[f].staves[w].width);0==w&&A.setMeasure(d.rows[f].staves[w].barIndex+
1);t.clef!==z&&(z=t.clef,A.addClef(t.clef));t.key!==B&&(B=t.key,A.addKeySignature(VFUtility.toVFKeySignature(t.key)));t.time!==C&&(C=t.time,A.addTimeSignature(t.time));A.setContext(k).draw();for(var u=[],x={},q=0;q<t.verticals.length;q++)u.push(VFUtility.prepareStaveNote(t.key,t.clef,t.verticals[q],x));t=Vex.Flow.Beam.generateBeams(u);Vex.Flow.Formatter.FormatAndDraw(k,A,u);t.forEach(function(a){a.setContext(k).draw()})}g+=d.rows[f].height}},getLastBar:function(){return f},getCurrentLayout:function(){return n},
getFirstBarInPreviousPage:d,getFirstBarInLastPage:function(){return d(0)}}}
var Note=function(){function c(c){var a={A:[0,1],"B\ud834\udd2b":[0,1],"G\ud834\udd2a":[0,1],"A\u266f":[0,2],"B\u266d":[0,2],B:[0,3],"A\ud834\udd2a":[0,3],"C\u266d":[1,3],C:[1,4],"D\ud834\udd2b":[1,4],"B\u266f":[0,4],"C\u266f":[1,5],"D\u266d":[1,5],D:[1,6],"E\ud834\udd2b":[1,6],"C\ud834\udd2a":[1,6],"D\u266f":[1,7],"E\u266d":[1,7],"F\ud834\udd2b":[1,7],E:[1,8],"F\u266d":[1,8],"D\ud834\udd2a":[1,8],F:[1,9],"G\ud834\udd2b":[1,9],"E\u266f":[1,9],"F\u266f":[1,10],"G\u266d":[1,10],G:[1,11],"A\ud834\udd2b":[1,
11],"F\ud834\udd2a":[1,11],"G\u266f":[1,12],"A\u266d":[1,12]};c=b(c);var d=c.natural+c.accidental;return a.hasOwnProperty(d)?(a=a[d],a[1]+12*(c.octave-a[0])):-1}function b(b){var a={natural:"",octave:-1,accidental:""};if(0>=b.length)return a;a.natural=b[0];a.octave=parseInt(b.substring(b.length-1,b.length));a.accidental="";a.accidentalASCII="";2<b.length&&(1==b.indexOf("\u266d")?(a.accidental="\u266d",a.accidentalASCII="b"):1==b.indexOf("\u266f")?(a.accidental="\u266f",a.accidentalASCII="#"):1==b.indexOf("\ud834\udd2b")?
(a.accidental="\ud834\udd2b",a.accidentalASCII="bb"):1==b.indexOf("\ud834\udd2a")&&(a.accidental="\ud834\udd2a",a.accidentalASCII="##"));return a}function e(b,a){var c=d[b],e="";"\u266d"==c.sharpflat&&"BEADGCF".indexOf(a)<c.amount?e="\u266d":"\u266f"==c.sharpflat&&"FCGDAEB".indexOf(a)<c.amount&&(e="\u266f");return e}var d={"D\u266d":{index:0,sharpflat:"\u266d",amount:5},"G\u266f":{index:1,sharpflat:"\u266f",amount:8},"b\u266d":{index:2,sharpflat:"\u266d",amount:5},"C\u266d":{index:3,sharpflat:"\u266d",
amount:7},e:{index:4,sharpflat:"\u266f",amount:1},"C\u266f":{index:5,sharpflat:"\u266f",amount:7},B:{index:6,sharpflat:"\u266f",amount:5},g:{index:7,sharpflat:"\u266d",amount:2},f:{index:8,sharpflat:"\u266d",amount:4},"F\u266d":{index:9,sharpflat:"\u266d",amount:8},a:{index:10,sharpflat:"\u266f",amount:0},G:{index:11,sharpflat:"\u266f",amount:1},"B\u266d":{index:12,sharpflat:"\u266d",amount:2},"e\u266f":{index:13,sharpflat:"\u266f",amount:8},"a\u266f":{index:14,sharpflat:"\u266f",amount:7},"d\u266d":{index:15,
sharpflat:"\u266d",amount:8},d:{index:16,sharpflat:"\u266d",amount:1},"F\u266f":{index:17,sharpflat:"\u266f",amount:6},"g\u266f":{index:18,sharpflat:"\u266f",amount:5},C:{index:19,sharpflat:"\u266f",amount:0},D:{index:20,sharpflat:"\u266f",amount:2},"A\u266d":{index:21,sharpflat:"\u266d",amount:4},A:{index:22,sharpflat:"\u266f",amount:3},"E\u266d":{index:23,sharpflat:"\u266d",amount:3},"f\u266f":{index:24,sharpflat:"\u266f",amount:3},c:{index:25,sharpflat:"\u266d",amount:3},b:{index:26,sharpflat:"\u266f",
amount:2},F:{index:27,sharpflat:"\u266d",amount:1},E:{index:28,sharpflat:"\u266f",amount:4},"G\u266d":{index:29,sharpflat:"\u266d",amount:6},"c\u266f":{index:30,sharpflat:"\u266f",amount:4},"e\u266d":{index:31,sharpflat:"\u266d",amount:6},"a\u266d":{index:32,sharpflat:"\u266d",amount:7},"d\u266f":{index:33,sharpflat:"\u266f",amount:6}};return{flat:"\u266d",sharp:"\u266f",flatflat:"\ud834\udd2b",sharpsharp:"\ud834\udd2a",getNoteOrder:c,getNoteFrequency:function(b){b=c(b);"DoubleBass"===Locale.getApplicationTitle("en")&&
(b-=12);return 0>b?0:440*Math.pow(Math.pow(2,1/12),b-49)},getNoteDetail:b,getDefaultAccidental:e,getDefaultAccidentalASCII:function(b,a){return e(b,a).replace("\u266f","#").replace("\u266d","b")},getFirstNoteInKey:function(b){b=b.substring(0,1);return 0<="GAB".indexOf(b)?b+"3":b+"4"}}}(),PDFConverter=function(c,b){function e(){var b=d.querySelectorAll("div.page");h+=1;h>=b.length?g(a.output("datauristring")):(a.addPage(),a.addHTML(b[h],e))}var d=c,g=b,a=null,h=0;return{convert:function(){var b=d.querySelectorAll("div.page");
0>=b.length?g(null):(a=new jsPDF("p","pt","a4"),h=0,a.addHTML(b[0],e))}}},PDFRenderer=function(c){return{render:function(b){c.innerHTML="";for(var e=-1,d=-1,g=0;8>g;g++){d+=1;e+=1;if(e>=b.getData().bars.length)break;var a;a=d;var h=document.createElement("div");h.classList.add("page");h.innerHTML='<div class="header"></div><div class="title XXX"></div><canvas class="music"></canvas><div class="footer"></div>'.replace("XXX",0===a?"":"hide");c.appendChild(h);a=h;a.querySelector("div.title").innerHTML=
Locale.getTranslation(b.getData().descriptions);a.querySelector("div.footer").innerHTML=Locale.getPrintFooter();a=new MusicViewer(a.querySelector("canvas.music"));a.setPiece(b);a.setFirstBar(e);a.display();e=a.getLastBar()}}}},Piece=function(){function c(b){function c(b){for(var a=0;a<d.bars.length;a++)if(d.bars[a].first<=b&&b<d.bars[a].first+d.bars[a].verticals.length)return d.bars[a];return null}var d=JSON.parse(b);return{getData:function(){return d},getBar:c,getPreBar:function(b){b=c(b);return null===
b?null:c(b.first-1)},getNextBar:function(b){b=c(b);return null===b?null:c(b.first+b.verticals.length)},getTotalVerticals:function(){var b=d.bars[d.bars.length-1];return b.first+b.verticals.length}}}return{createFromString:function(b){return new c(b)}}}(),StringInstrumentSimulator=function(){function c(){if(null!=b)return!0;if("AudioContext"in window)b=new AudioContext;else if("webkitAudioContext"in window)b=new webkitAudioContext;else return b=null,!1;e=b.createGain();e.gain.value=0;e.connect(b.destination);
return!0}var b=null,e=null,d=[];return{play:function(g){c();for(var a=0;a<g.length;a++){var h=b.createOscillator();h.frequency.value=g[a];var f=h,k=Math.PI,n=new Float32Array(12),l=new Float32Array(12),p=[.49,.995,.94,.425,.48,0,.365,.04,.085,0,.09,0],k=[0,0,k/2,0,k/2,0,k/2,0,k/2,0,k/2,0];n[0]=0;l[0]=0;for(var m=1;12>m;m++)n[m]=p[m]*p[0]*Math.cos(k[m]),l[m]=p[m]*p[0]*Math.sin(k[m]);n=b.createPeriodicWave(l,n);f.setPeriodicWave(n);h.connect(e);h.start(0);d.push(h)}e.gain.linearRampToValueAtTime(0,
b.currentTime);e.gain.linearRampToValueAtTime(.5,b.currentTime+.05)},stop:function(){c();e.gain.linearRampToValueAtTime(.5,b.currentTime);e.gain.linearRampToValueAtTime(0,b.currentTime+.05);setTimeout(function(){for(var b=0;b<d.length;b++){var a=d[b];a.stop(0);a.disconnect(e)}d=[]},50)},playAndStop:function(b,a,c){}}}(),VFUtility=function(){function c(b){b=Note.getNoteDetail(b);return b.natural+b.accidentalASCII+"/"+b.octave}return{toVFKeySignature:function(b){b!==b.toUpperCase()&&(b=b.toUpperCase()+
"m");return b=b.replace(Note.flat,"b").replace(Note.sharp,"#")},prepareStaveNote:function(b,e,d,g){for(var a,h,f,k=[],n=0;n<d.notes.length;n++)k.push(c(d.notes[n]));e=new Vex.Flow.StaveNote({clef:e,keys:k,duration:d.duration});if("r"!==d.duration.substr(-1))for(n=0;n<d.notes.length;n++)a:{var l=b,k=e,p=n,m=g;f=k.keys[p];var y=f.indexOf("/");a=f.substring(0,1);h=parseInt(f.substring(y+1));f=f.substring(1,y);y=a+h;h=!1;if(m.hasOwnProperty(y))if(m[y]==f)break a;else h=!0;m[y]=f;"bb"==f?k.addAccidental(p,
new Vex.Flow.Accidental("bb")):"##"==f?k.addAccidental(p,new Vex.Flow.Accidental("##")):(a=Note.getDefaultAccidentalASCII(l,a),"#"==a?"#"==f?h&&k.addAccidental(p,new Vex.Flow.Accidental("#")):"b"==f?k.addAccidental(p,new Vex.Flow.Accidental("b")):k.addAccidental(p,new Vex.Flow.Accidental("n")):"b"==a?"#"==f?k.addAccidental(p,new Vex.Flow.Accidental("#")):"b"==f?h&&k.addAccidental(p,new Vex.Flow.Accidental("b")):k.addAccidental(p,new Vex.Flow.Accidental("n")):"#"==f?k.addAccidental(p,new Vex.Flow.Accidental("#")):
"b"==f?k.addAccidental(p,new Vex.Flow.Accidental("b")):h&&k.addAccidental(p,new Vex.Flow.Accidental("n")))}b=d.duration;"dd"==b.substring(b.length-2)?e.addDotToAll().addDotToAll():(d=d.duration,"d"==d.substring(d.length-1)&&e.addDotToAll());return e}}}(),App=function(){function c(){e.draw()}var b={},e=null;return{initialize:function(d){d=void 0===d?{}:d;Header.initialize();for(var g=window.location.pathname,a=window.location.search,a=("?"===a[0]?a.substr(1):a).split("&"),h=0;h<a.length;h++){var f=
a[h].split("=");d[decodeURIComponent(f[0])]=decodeURIComponent(f[1]||"")}d.lastPage=sessionStorage.lastPage||null;b=d;e=0===g.indexOf(""+CatalogPage.getPath())?CatalogPage:0===g.indexOf(""+AboutPage.getPath())?AboutPage:IndexPage;Header.highlight(e);e.initialize(d);sessionStorage.setItem("lastPage",e.getPath());window.addEventListener("resize",c)},getParams:function(){return b},getHost:function(){var b="";"http:"===window.location.protocol&&"80"!==window.location.port&&(b=":"+window.location.port);
"https:"===window.location.protocol&&"443"!==window.location.port&&(b=":"+window.location.port);return window.location.protocol+"//"+window.location.hostname+b},getRootPath:function(){return""},getPagePath:function(b){return""+(void 0===b?null:b).getPath()},getPiecesPath:function(){return"/pieces/"},resize:c}}();
