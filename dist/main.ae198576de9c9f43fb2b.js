(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(r,e,t){var n=t(142);"string"==typeof n&&(n=[[r.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(56)(n,a);n.locals&&(r.exports=n.locals)},142:function(r,e,t){(r.exports=t(55)(!1)).push([r.i,".search-form > * {\n  margin: 10px 0px; }\n\nselect {\n  width: 100%;\n  padding: 5px;\n  margin: 7px 0;\n  border: 2px solid black; }\n\n/* sort-select component */\n.sort-select {\n  width: 100%;\n  border: 2px solid black;\n  background-color: white;\n  box-shadow: 3px 3px 0 0 black; }\n\n.sort-select:nth-child(1) {\n  border-right: none; }\n\n.sort-select__radio {\n  display: none; }\n\n.sort-select__text {\n  display: block;\n  width: inherit;\n  height: inherit;\n  padding: 10px;\n  transition: background-color 100ms ease-in; }\n\n:root {\n  --sortSelectBg: #95bcf2; }\n\n.sort-select__radio:checked ~ .sort-select__text {\n  background-color: var(--sortSelectBg); }\n",""])},346:function(r,e,t){var n=t(347);"string"==typeof n&&(n=[[r.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(56)(n,a);n.locals&&(r.exports=n.locals)},347:function(r,e,t){(r.exports=t(55)(!1)).push([r.i,".result-item {\n  padding: 1px 10px;\n  margin: 4px 0;\n  background-color: #EEEEEE; }\n\n.result-item > * {\n  margin: 10px 0; }\n\n.price--old {\n  text-decoration: line-through;\n  color: red; }\n\n.price--new {\n  color: green; }\n",""])},348:function(r,e,t){var n=t(349);"string"==typeof n&&(n=[[r.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(56)(n,a);n.locals&&(r.exports=n.locals)},349:function(r,e,t){(r.exports=t(55)(!1)).push([r.i,".search-results {\n  width: 200px; }\n\n.search-results > * {\n  margin: 4px 0; }\n\n.total {\n  padding: 15px 10px;\n  background-color: #DDDDDD; }\n\n.total__label {\n  font-weight: bold; }\n\n.total__cost {\n  font-weight: bold; }\n\n.price--old {\n  text-decoration: line-through;\n  color: red; }\n",""])},350:function(r,e,t){var n=t(351);"string"==typeof n&&(n=[[r.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(56)(n,a);n.locals&&(r.exports=n.locals)},351:function(r,e,t){(e=r.exports=t(55)(!1)).push([r.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),e.push([r.i,'* {\n  font-family: "Roboto", sans-serif;\n  box-sizing: border-box; }\n\n/* button */\nbutton,\n.btn-submit {\n  position: relative;\n  width: 100%;\n  padding: 5px;\n  color: white;\n  border: 2px solid black;\n  box-shadow: 3px 3px 0 0 black;\n  font-size: 16px;\n  font-weight: bold;\n  outline: none;\n  text-decoration: none;\n  background-color: #009e0f; }\n  button:hover, button:focus,\n  .btn-submit:hover,\n  .btn-submit:focus {\n    background-color: #008a0e; }\n  button:active,\n  .btn-submit:active {\n    background-color: #006b0b; }\n\nbutton,\nlabel {\n  cursor: pointer; }\n\n.search-results,\n.search-form {\n  width: 200px;\n  margin: 0px auto; }\n\n/* flex helpers */\n[class^="flex"] {\n  display: flex;\n  align-items: center; }\n\n.flex--col {\n  flex-direction: column; }\n\n.flex--row {\n  flex-direction: row; }\n\n.flex--center {\n  justify-content: center; }\n\n.flex--space {\n  display: flex;\n  justify-content: space-between; }\n\n.text-cap {\n  text-transform: capitalize; }\n\n.text--xxl {\n  font-size: xx-large; }\n\n.text--sm {\n  font-size: small; }\n\n.text--xs {\n  font-size: x-small; }\n',""])},355:function(r,e,t){"use strict";t.r(e);var n=t(1),a=t(136),o=(t(357),t(359)),i=t(361),s=t(360),c=t(358);function u(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=[],n=!0,a=!1,o=void 0;try{for(var i,s=r[Symbol.iterator]();!(n=(i=s.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(r){a=!0,o=r}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return t}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(r){return function(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(r){var e=l(new URL(r).searchParams.entries()).map(function(r){var e=u(r,2);return function(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}({},e[0],e[1])});return Object.assign.apply(Object,[{}].concat(l(e)))}function p(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function f(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function m(r,e,t){return e&&f(r.prototype,e),t&&f(r,t),r}function h(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function v(r){return String(r).length<2?"0".concat(r):r}var b=function(){function r(e){var t=e.h,n=e.m;p(this,r),h(this,"h",void 0),h(this,"m",void 0),this.h=Number(t),this.m=Number(n)}return m(r,[{key:"toString",value:function(){return"".concat(v(this.h),"h").concat(v(this.m))}},{key:"valueOf",value:function(){return 60*this.h+this.m}}]),r}(),y=function(){function r(e){var t=e.transport,n=e.departure,a=e.arrival,o=e.duration,i=e.cost,s=e.discount,c=e.reference;p(this,r),h(this,"departure",void 0),h(this,"arrival",void 0),h(this,"duration",void 0),h(this,"cost",void 0),h(this,"discount",void 0),h(this,"reference",void 0),h(this,"transport",void 0),this.transport=t,this.departure=n,this.arrival=a,this.cost=i,this.discount=s,this.reference=c,this.duration=new b(o)}return m(r,[{key:"hasDiscount",get:function(){return this.discount>0}},{key:"discountCost",get:function(){return this.cost*(1-this.discount/100)}}]),r}(),B={currency:"EUR",deals:[{transport:"train",departure:"London",arrival:"Amsterdam",duration:{h:"05",m:"00"},cost:160,discount:0,reference:"TLA0500"},{transport:"bus",departure:"London",arrival:"Amsterdam",duration:{h:"07",m:"45"},cost:40,discount:25,reference:"BLA0745"},{transport:"car",departure:"London",arrival:"Amsterdam",duration:{h:"04",m:"45"},cost:120,discount:0,reference:"CLA0445"},{transport:"train",departure:"London",arrival:"Paris",duration:{h:"04",m:"30"},cost:160,discount:0,reference:"TLP0430"},{transport:"bus",departure:"London",arrival:"Paris",duration:{h:"05",m:"30"},cost:40,discount:50,reference:"BLP0530"},{transport:"car",departure:"London",arrival:"Paris",duration:{h:"04",m:"15"},cost:120,discount:0,reference:"CLP0415"},{transport:"train",departure:"Amsterdam",arrival:"Warsaw",duration:{h:"05",m:"15"},cost:160,discount:25,reference:"TAW0515"},{transport:"bus",departure:"Amsterdam",arrival:"Warsaw",duration:{h:"05",m:"15"},cost:40,discount:25,reference:"BAW0515"},{transport:"car",departure:"Amsterdam",arrival:"Warsaw",duration:{h:"04",m:"45"},cost:120,discount:0,reference:"CAW0445"},{transport:"train",departure:"Amsterdam",arrival:"Brussels",duration:{h:"05",m:"30"},cost:160,discount:0,reference:"TAB0530"},{transport:"bus",departure:"Amsterdam",arrival:"Brussels",duration:{h:"05",m:"45"},cost:40,discount:0,reference:"BAB0545"},{transport:"car",departure:"Amsterdam",arrival:"Brussels",duration:{h:"04",m:"30"},cost:120,discount:0,reference:"CAB0430"},{transport:"train",departure:"Amsterdam",arrival:"London",duration:{h:"04",m:"15"},cost:160,discount:25,reference:"TAL0415"},{transport:"bus",departure:"Amsterdam",arrival:"London",duration:{h:"05",m:"45"},cost:40,discount:50,reference:"BAL0545"},{transport:"car",departure:"Amsterdam",arrival:"London",duration:{h:"04",m:"00"},cost:120,discount:0,reference:"CAL0400"},{transport:"train",departure:"Warsaw",arrival:"Stockholm",duration:{h:"05",m:"15"},cost:160,discount:25,reference:"TWS0515"},{transport:"bus",departure:"Warsaw",arrival:"Stockholm",duration:{h:"05",m:"15"},cost:40,discount:50,reference:"BWS0515"},{transport:"car",departure:"Warsaw",arrival:"Stockholm",duration:{h:"05",m:"15"},cost:120,discount:0,reference:"CWS0515"},{transport:"train",departure:"Warsaw",arrival:"Prague",duration:{h:"03",m:"00"},cost:160,discount:25,reference:"TWP0300"},{transport:"bus",departure:"Warsaw",arrival:"Prague",duration:{h:"06",m:"15"},cost:40,discount:0,reference:"BWP0615"},{transport:"car",departure:"Warsaw",arrival:"Prague",duration:{h:"04",m:"45"},cost:120,discount:0,reference:"CWP0445"},{transport:"train",departure:"Warsaw",arrival:"Amsterdam",duration:{h:"05",m:"30"},cost:160,discount:0,reference:"TWA0530"},{transport:"bus",departure:"Warsaw",arrival:"Amsterdam",duration:{h:"05",m:"45"},cost:40,discount:0,reference:"BWA0545"},{transport:"car",departure:"Warsaw",arrival:"Amsterdam",duration:{h:"04",m:"15"},cost:120,discount:0,reference:"CWA0415"},{transport:"train",departure:"Stockholm",arrival:"Moscow",duration:{h:"04",m:"30"},cost:160,discount:25,reference:"TSM0430"},{transport:"bus",departure:"Stockholm",arrival:"Moscow",duration:{h:"05",m:"30"},cost:40,discount:25,reference:"BSM0530"},{transport:"car",departure:"Stockholm",arrival:"Moscow",duration:{h:"04",m:"00"},cost:120,discount:0,reference:"CSM0400"},{transport:"train",departure:"Stockholm",arrival:"Warsaw",duration:{h:"05",m:"00"},cost:160,discount:25,reference:"TSW0500"},{transport:"bus",departure:"Stockholm",arrival:"Warsaw",duration:{h:"05",m:"45"},cost:40,discount:0,reference:"BSW0545"},{transport:"car",departure:"Stockholm",arrival:"Warsaw",duration:{h:"05",m:"45"},cost:120,discount:0,reference:"CSW0545"},{transport:"train",departure:"Paris",arrival:"London",duration:{h:"03",m:"15"},cost:160,discount:25,reference:"TPL0315"},{transport:"bus",departure:"Paris",arrival:"London",duration:{h:"06",m:"15"},cost:40,discount:50,reference:"BPL0615"},{transport:"car",departure:"Paris",arrival:"London",duration:{h:"05",m:"45"},cost:120,discount:0,reference:"CPL0545"},{transport:"train",departure:"Paris",arrival:"Brussels",duration:{h:"05",m:"30"},cost:160,discount:25,reference:"TPB0530"},{transport:"bus",departure:"Paris",arrival:"Brussels",duration:{h:"06",m:"30"},cost:40,discount:25,reference:"BPB0630"},{transport:"car",departure:"Paris",arrival:"Brussels",duration:{h:"05",m:"45"},cost:120,discount:0,reference:"CPB0545"},{transport:"train",departure:"Paris",arrival:"Madrid",duration:{h:"03",m:"15"},cost:160,discount:0,reference:"TPM0315"},{transport:"bus",departure:"Paris",arrival:"Madrid",duration:{h:"06",m:"45"},cost:40,discount:25,reference:"BPM0645"},{transport:"car",departure:"Paris",arrival:"Madrid",duration:{h:"05",m:"45"},cost:120,discount:0,reference:"CPM0545"},{transport:"train",departure:"Brussels",arrival:"Amsterdam",duration:{h:"05",m:"15"},cost:160,discount:0,reference:"TBA0515"},{transport:"bus",departure:"Brussels",arrival:"Amsterdam",duration:{h:"05",m:"15"},cost:40,discount:50,reference:"BBA0515"},{transport:"car",departure:"Brussels",arrival:"Amsterdam",duration:{h:"04",m:"30"},cost:120,discount:0,reference:"CBA0430"},{transport:"train",departure:"Brussels",arrival:"Prague",duration:{h:"03",m:"00"},cost:160,discount:0,reference:"TBP0300"},{transport:"bus",departure:"Brussels",arrival:"Prague",duration:{h:"05",m:"45"},cost:40,discount:50,reference:"BBP0545"},{transport:"car",departure:"Brussels",arrival:"Prague",duration:{h:"04",m:"30"},cost:120,discount:0,reference:"CBP0430"},{transport:"train",departure:"Brussels",arrival:"Geneva",duration:{h:"04",m:"45"},cost:160,discount:0,reference:"TBG0445"},{transport:"bus",departure:"Brussels",arrival:"Geneva",duration:{h:"07",m:"15"},cost:40,discount:0,reference:"BBG0715"},{transport:"car",departure:"Brussels",arrival:"Geneva",duration:{h:"05",m:"15"},cost:120,discount:0,reference:"CBG0515"},{transport:"train",departure:"Brussels",arrival:"Paris",duration:{h:"04",m:"00"},cost:160,discount:0,reference:"TBP0400"},{transport:"bus",departure:"Brussels",arrival:"Paris",duration:{h:"05",m:"45"},cost:40,discount:0,reference:"BBP0545"},{transport:"car",departure:"Brussels",arrival:"Paris",duration:{h:"04",m:"15"},cost:120,discount:0,reference:"CBP0415"},{transport:"train",departure:"Prague",arrival:"Warsaw",duration:{h:"04",m:"30"},cost:160,discount:50,reference:"TPW0430"},{transport:"bus",departure:"Prague",arrival:"Warsaw",duration:{h:"06",m:"30"},cost:40,discount:25,reference:"BPW0630"},{transport:"car",departure:"Prague",arrival:"Warsaw",duration:{h:"04",m:"30"},cost:120,discount:0,reference:"CPW0430"},{transport:"train",departure:"Prague",arrival:"Moscow",duration:{h:"04",m:"15"},cost:160,discount:0,reference:"TPM0415"},{transport:"bus",departure:"Prague",arrival:"Moscow",duration:{h:"05",m:"00"},cost:40,discount:25,reference:"BPM0500"},{transport:"car",departure:"Prague",arrival:"Moscow",duration:{h:"05",m:"15"},cost:120,discount:0,reference:"CPM0515"},{transport:"train",departure:"Prague",arrival:"Budapest",duration:{h:"04",m:"00"},cost:160,discount:25,reference:"TPB0400"},{transport:"bus",departure:"Prague",arrival:"Budapest",duration:{h:"07",m:"00"},cost:40,discount:25,reference:"BPB0700"},{transport:"car",departure:"Prague",arrival:"Budapest",duration:{h:"04",m:"30"},cost:120,discount:0,reference:"CPB0430"},{transport:"train",departure:"Prague",arrival:"Brussels",duration:{h:"05",m:"15"},cost:160,discount:0,reference:"TPB0515"},{transport:"bus",departure:"Prague",arrival:"Brussels",duration:{h:"05",m:"15"},cost:40,discount:25,reference:"BPB0515"},{transport:"car",departure:"Prague",arrival:"Brussels",duration:{h:"05",m:"30"},cost:120,discount:0,reference:"CPB0530"},{transport:"train",departure:"Moscow",arrival:"Stockholm",duration:{h:"03",m:"45"},cost:160,discount:0,reference:"TMS0345"},{transport:"bus",departure:"Moscow",arrival:"Stockholm",duration:{h:"06",m:"00"},cost:40,discount:25,reference:"BMS0600"},{transport:"car",departure:"Moscow",arrival:"Stockholm",duration:{h:"04",m:"30"},cost:120,discount:0,reference:"CMS0430"},{transport:"train",departure:"Moscow",arrival:"Kiev",duration:{h:"05",m:"15"},cost:160,discount:50,reference:"TMK0515"},{transport:"bus",departure:"Moscow",arrival:"Kiev",duration:{h:"07",m:"00"},cost:40,discount:50,reference:"BMK0700"},{transport:"car",departure:"Moscow",arrival:"Kiev",duration:{h:"04",m:"15"},cost:120,discount:0,reference:"CMK0415"},{transport:"train",departure:"Moscow",arrival:"Prague",duration:{h:"03",m:"30"},cost:160,discount:0,reference:"TMP0330"},{transport:"bus",departure:"Moscow",arrival:"Prague",duration:{h:"05",m:"00"},cost:40,discount:25,reference:"BMP0500"},{transport:"car",departure:"Moscow",arrival:"Prague",duration:{h:"05",m:"30"},cost:120,discount:0,reference:"CMP0530"},{transport:"train",departure:"Madrid",arrival:"Paris",duration:{h:"05",m:"00"},cost:160,discount:50,reference:"TMP0500"},{transport:"bus",departure:"Madrid",arrival:"Paris",duration:{h:"05",m:"30"},cost:40,discount:50,reference:"BMP0530"},{transport:"car",departure:"Madrid",arrival:"Paris",duration:{h:"05",m:"45"},cost:120,discount:0,reference:"CMP0545"},{transport:"train",departure:"Madrid",arrival:"Geneva",duration:{h:"05",m:"00"},cost:160,discount:25,reference:"TMG0500"},{transport:"bus",departure:"Madrid",arrival:"Geneva",duration:{h:"07",m:"30"},cost:40,discount:50,reference:"BMG0730"},{transport:"car",departure:"Madrid",arrival:"Geneva",duration:{h:"04",m:"15"},cost:120,discount:0,reference:"CMG0415"},{transport:"train",departure:"Madrid",arrival:"Lisbon",duration:{h:"04",m:"00"},cost:160,discount:0,reference:"TML0400"},{transport:"bus",departure:"Madrid",arrival:"Lisbon",duration:{h:"05",m:"00"},cost:40,discount:25,reference:"BML0500"},{transport:"car",departure:"Madrid",arrival:"Lisbon",duration:{h:"05",m:"00"},cost:120,discount:0,reference:"CML0500"},{transport:"train",departure:"Geneva",arrival:"Brussels",duration:{h:"03",m:"00"},cost:160,discount:0,reference:"TGB0300"},{transport:"bus",departure:"Geneva",arrival:"Brussels",duration:{h:"05",m:"15"},cost:40,discount:0,reference:"BGB0515"},{transport:"car",departure:"Geneva",arrival:"Brussels",duration:{h:"05",m:"00"},cost:120,discount:0,reference:"CGB0500"},{transport:"train",departure:"Geneva",arrival:"Budapest",duration:{h:"04",m:"45"},cost:160,discount:0,reference:"TGB0445"},{transport:"bus",departure:"Geneva",arrival:"Budapest",duration:{h:"05",m:"30"},cost:40,discount:0,reference:"BGB0530"},{transport:"car",departure:"Geneva",arrival:"Budapest",duration:{h:"05",m:"00"},cost:120,discount:0,reference:"CGB0500"},{transport:"train",departure:"Geneva",arrival:"Rome",duration:{h:"03",m:"30"},cost:160,discount:0,reference:"TGR0330"},{transport:"bus",departure:"Geneva",arrival:"Rome",duration:{h:"06",m:"30"},cost:40,discount:25,reference:"BGR0630"},{transport:"car",departure:"Geneva",arrival:"Rome",duration:{h:"05",m:"45"},cost:120,discount:0,reference:"CGR0545"},{transport:"train",departure:"Geneva",arrival:"Madrid",duration:{h:"05",m:"00"},cost:160,discount:25,reference:"TGM0500"},{transport:"bus",departure:"Geneva",arrival:"Madrid",duration:{h:"06",m:"45"},cost:40,discount:0,reference:"BGM0645"},{transport:"car",departure:"Geneva",arrival:"Madrid",duration:{h:"05",m:"45"},cost:120,discount:0,reference:"CGM0545"},{transport:"train",departure:"Budapest",arrival:"Prague",duration:{h:"03",m:"45"},cost:160,discount:0,reference:"TBP0345"},{transport:"bus",departure:"Budapest",arrival:"Prague",duration:{h:"06",m:"15"},cost:40,discount:0,reference:"BBP0615"},{transport:"car",departure:"Budapest",arrival:"Prague",duration:{h:"05",m:"30"},cost:120,discount:0,reference:"CBP0530"},{transport:"train",departure:"Budapest",arrival:"Kiev",duration:{h:"05",m:"15"},cost:160,discount:50,reference:"TBK0515"},{transport:"bus",departure:"Budapest",arrival:"Kiev",duration:{h:"05",m:"15"},cost:40,discount:25,reference:"BBK0515"},{transport:"car",departure:"Budapest",arrival:"Kiev",duration:{h:"05",m:"15"},cost:120,discount:0,reference:"CBK0515"},{transport:"train",departure:"Budapest",arrival:"Athens",duration:{h:"03",m:"30"},cost:160,discount:0,reference:"TBA0330"},{transport:"bus",departure:"Budapest",arrival:"Athens",duration:{h:"07",m:"45"},cost:40,discount:50,reference:"BBA0745"},{transport:"car",departure:"Budapest",arrival:"Athens",duration:{h:"05",m:"30"},cost:120,discount:0,reference:"CBA0530"},{transport:"train",departure:"Budapest",arrival:"Geneva",duration:{h:"03",m:"00"},cost:160,discount:0,reference:"TBG0300"},{transport:"bus",departure:"Budapest",arrival:"Geneva",duration:{h:"05",m:"00"},cost:40,discount:50,reference:"BBG0500"},{transport:"car",departure:"Budapest",arrival:"Geneva",duration:{h:"04",m:"15"},cost:120,discount:0,reference:"CBG0415"},{transport:"train",departure:"Kiev",arrival:"Moscow",duration:{h:"05",m:"00"},cost:160,discount:0,reference:"TKM0500"},{transport:"bus",departure:"Kiev",arrival:"Moscow",duration:{h:"05",m:"00"},cost:40,discount:0,reference:"BKM0500"},{transport:"car",departure:"Kiev",arrival:"Moscow",duration:{h:"05",m:"00"},cost:120,discount:0,reference:"CKM0500"},{transport:"train",departure:"Kiev",arrival:"Istanbul",duration:{h:"04",m:"15"},cost:160,discount:25,reference:"TKI0415"},{transport:"bus",departure:"Kiev",arrival:"Istanbul",duration:{h:"06",m:"00"},cost:40,discount:50,reference:"BKI0600"},{transport:"car",departure:"Kiev",arrival:"Istanbul",duration:{h:"04",m:"15"},cost:120,discount:0,reference:"CKI0415"},{transport:"train",departure:"Kiev",arrival:"Budapest",duration:{h:"05",m:"00"},cost:160,discount:0,reference:"TKB0500"},{transport:"bus",departure:"Kiev",arrival:"Budapest",duration:{h:"06",m:"00"},cost:40,discount:50,reference:"BKB0600"},{transport:"car",departure:"Kiev",arrival:"Budapest",duration:{h:"04",m:"15"},cost:120,discount:0,reference:"CKB0415"},{transport:"train",departure:"Lisbon",arrival:"Madrid",duration:{h:"05",m:"00"},cost:160,discount:0,reference:"TLM0500"},{transport:"bus",departure:"Lisbon",arrival:"Madrid",duration:{h:"07",m:"45"},cost:40,discount:0,reference:"BLM0745"},{transport:"car",departure:"Lisbon",arrival:"Madrid",duration:{h:"04",m:"30"},cost:120,discount:0,reference:"CLM0430"},{transport:"train",departure:"Lisbon",arrival:"Rome",duration:{h:"05",m:"30"},cost:160,discount:50,reference:"TLR0530"},{transport:"bus",departure:"Lisbon",arrival:"Rome",duration:{h:"07",m:"30"},cost:40,discount:25,reference:"BLR0730"},{transport:"car",departure:"Lisbon",arrival:"Rome",duration:{h:"05",m:"00"},cost:120,discount:0,reference:"CLR0500"},{transport:"train",departure:"Rome",arrival:"Geneva",duration:{h:"05",m:"00"},cost:160,discount:50,reference:"TRG0500"},{transport:"bus",departure:"Rome",arrival:"Geneva",duration:{h:"07",m:"00"},cost:40,discount:50,reference:"BRG0700"},{transport:"car",departure:"Rome",arrival:"Geneva",duration:{h:"04",m:"30"},cost:120,discount:0,reference:"CRG0430"},{transport:"train",departure:"Rome",arrival:"Athens",duration:{h:"05",m:"00"},cost:160,discount:0,reference:"TRA0500"},{transport:"bus",departure:"Rome",arrival:"Athens",duration:{h:"07",m:"45"},cost:40,discount:0,reference:"BRA0745"},{transport:"car",departure:"Rome",arrival:"Athens",duration:{h:"04",m:"30"},cost:120,discount:0,reference:"CRA0430"},{transport:"train",departure:"Rome",arrival:"Lisbon",duration:{h:"04",m:"15"},cost:160,discount:25,reference:"TRL0415"},{transport:"bus",departure:"Rome",arrival:"Lisbon",duration:{h:"05",m:"30"},cost:40,discount:50,reference:"BRL0530"},{transport:"car",departure:"Rome",arrival:"Lisbon",duration:{h:"05",m:"00"},cost:120,discount:0,reference:"CRL0500"},{transport:"train",departure:"Athens",arrival:"Budapest",duration:{h:"05",m:"30"},cost:160,discount:0,reference:"TAB0530"},{transport:"bus",departure:"Athens",arrival:"Budapest",duration:{h:"05",m:"00"},cost:40,discount:50,reference:"BAB0500"},{transport:"car",departure:"Athens",arrival:"Budapest",duration:{h:"04",m:"45"},cost:120,discount:0,reference:"CAB0445"},{transport:"train",departure:"Athens",arrival:"Istanbul",duration:{h:"05",m:"45"},cost:160,discount:25,reference:"TAI0545"},{transport:"bus",departure:"Athens",arrival:"Istanbul",duration:{h:"05",m:"30"},cost:40,discount:25,reference:"BAI0530"},{transport:"car",departure:"Athens",arrival:"Istanbul",duration:{h:"05",m:"15"},cost:120,discount:0,reference:"CAI0515"},{transport:"train",departure:"Athens",arrival:"Rome",duration:{h:"05",m:"45"},cost:160,discount:0,reference:"TAR0545"},{transport:"bus",departure:"Athens",arrival:"Rome",duration:{h:"06",m:"00"},cost:40,discount:0,reference:"BAR0600"},{transport:"car",departure:"Athens",arrival:"Rome",duration:{h:"04",m:"15"},cost:120,discount:0,reference:"CAR0415"},{transport:"train",departure:"Istanbul",arrival:"Kiev",duration:{h:"05",m:"30"},cost:160,discount:25,reference:"TIK0530"},{transport:"bus",departure:"Istanbul",arrival:"Kiev",duration:{h:"05",m:"30"},cost:40,discount:25,reference:"BIK0530"},{transport:"car",departure:"Istanbul",arrival:"Kiev",duration:{h:"05",m:"00"},cost:120,discount:0,reference:"CIK0500"},{transport:"train",departure:"Istanbul",arrival:"Athens",duration:{h:"03",m:"30"},cost:160,discount:25,reference:"TIA0330"},{transport:"bus",departure:"Istanbul",arrival:"Athens",duration:{h:"05",m:"15"},cost:40,discount:50,reference:"BIA0515"},{transport:"car",departure:"Istanbul",arrival:"Athens",duration:{h:"05",m:"15"},cost:120,discount:0,reference:"CIA0515"}]};function g(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}var w=function(){function r(){!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r)}return function(r,e,t){e&&g(r.prototype,e),t&&g(r,t)}(r,[{key:"getDealsFromServer",value:function(){return Promise.resolve(B)}},{key:"mapDeals",value:function(r){return r.deals.map(function(r){return new y(r)})}},{key:"getDeals",value:function(){var r=this;return this.getDealsFromServer().then(function(e){return r.mapDeals(e)})}}]),r}();function P(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function x(r){return r.reduce(function(r,e){return r.indexOf(e)<0&&r.push(e),r},[])}function C(r){return r.sort()}var A=new(function(){function r(){!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),function(r,e,t){e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t}(this,"dealsService",void 0),this.dealsService=new w}return function(r,e,t){e&&P(r.prototype,e),t&&P(r,t)}(r,[{key:"getDepartureCities",value:function(){return this.dealsService.getDeals().then(function(r){return r.map(function(r){return r.departure})}).then(x).then(C)}},{key:"getArrivalCities",value:function(){return this.dealsService.getDeals().then(function(r){return r.map(function(r){return r.arrival})}).then(x).then(C)}},{key:"getAllCities",value:function(){return this.getDepartureCities()}}]),r}());t(141);function E(r){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function _(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=[],n=!0,a=!1,o=void 0;try{for(var i,s=r[Symbol.iterator]();!(n=(i=s.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(r){a=!0,o=r}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return t}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function M(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function S(r){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function k(r,e){return(k=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}function T(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function O(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var G="cheapest",j="fastest",L=function(r){function e(){var r,t;!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return O(T(T(t=function(r,e){return!e||"object"!==E(e)&&"function"!=typeof e?T(r):e}(this,(r=S(e)).call.apply(r,[this].concat(a))))),"state",{departureCities:[],arrivalCities:[],departure:null,arrival:null}),O(T(T(t)),"form",null),t}return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&k(r,e)}(e,n["Component"]),function(r,e,t){e&&M(r.prototype,e),t&&M(r,t)}(e,[{key:"componentDidMount",value:function(){var r=this,e=d(location.href);Promise.all([A.getDepartureCities(),A.getArrivalCities()]).then(function(t){var n=_(t,2),a=n[0],o=n[1];r.setState({departureCities:a,arrivalCities:o,departure:e.departure||a[0],arrival:e.arrival||o[0],sortBy:e.sortBy||"fastest"})})}},{key:"search",value:function(r){r.preventDefault();var e=function(r){return l(new FormData(r).entries()).map(function(r){return r.join("=")}).join("&")}(this.form);this.props.history.push("/results?".concat(e))}},{key:"render",value:function(){var r=this,e=this.state,t=e.departureCities,a=e.arrivalCities,o=e.arrival,i=e.departure,s=e.sortBy;return 0===t.length?"cities loading...":n.createElement("form",{ref:function(e){return r.form=e},className:"search-form flex--col",onSubmit:function(e){return r.search(e)}},n.createElement("div",{className:"flex--col"},n.createElement("select",{name:"departure",defaultValue:i},t.map(function(r){return n.createElement("option",{key:r,value:r},r)})),n.createElement("select",{name:"arrival",defaultValue:o},a.map(function(r){return n.createElement("option",{key:r,value:r},r)}))),n.createElement("div",{className:"flex--row text-cap"},n.createElement("label",{className:"sort-select flex--row"},n.createElement("input",{className:"sort-select__radio",type:"radio",defaultChecked:s===G,name:"sortBy",value:G}),n.createElement("div",{className:"sort-select__text"},G)),n.createElement("label",{className:"sort-select flex--row"},n.createElement("input",{className:"sort-select__radio",type:"radio",defaultChecked:s===j,name:"sortBy",value:j}),n.createElement("div",{className:"sort-select__text"},j))),n.createElement("button",{type:"cancel",className:"flex--center text-cap btn-submit"},n.createElement("i",{className:"material-icons"},"search"),"Search"))}}]),e}();t(144);function N(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=[],n=!0,a=!1,o=void 0;try{for(var i,s=r[Symbol.iterator]();!(n=(i=s.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(r){a=!0,o=r}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return t}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function R(r,e,t,n,a,o,i){try{var s=r[o](i),c=s.value}catch(r){return void t(r)}s.done?e(c):Promise.resolve(c).then(n,a)}function D(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function K(r,e,t){return e&&D(r.prototype,e),t&&D(r,t),r}function W(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function I(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var z={isOut:!1,minDistance:1/0,cameBy:null},U=function(){function r(e){W(this,r),I(this,"isUsed",!1),Object.assign(this,e)}return K(r,[{key:"distance",get:function(){return this.weight+this.from.minDistance}}]),r}();function F(r,e){return e.filter(function(e){return e.from===r&&!e.isUsed})}function J(r){return function(r){return r.length<2?r[0]:r.reduce(function(r,e){return r.minDistance<e.minDistance?r:e})}(r.filter(function(r){return!r.isOut}))}var V=function(){function r(){W(this,r),I(this,"nodes",void 0),I(this,"edges",void 0),I(this,"dealsService",new w)}return K(r,[{key:"initGraph",value:function(r,e,t){var n=this;this.nodes=e.map(function(r){return new function r(e){W(this,r),Object.assign(this,z,{name:e})}(r)}),this.edges=r.map(function(r){return new U({_deal:r,weight:t(r),from:n.nodes.find(function(e){return e.name===r.departure}),to:n.nodes.find(function(e){return e.name===r.arrival})})})}},{key:"search",value:function(){var r=function(r){return function(){var e=this,t=arguments;return new Promise(function(n,a){var o=r.apply(e,t);function i(r){R(o,n,a,i,s,"next",r)}function s(r){R(o,n,a,i,s,"throw",r)}i(void 0)})}}(regeneratorRuntime.mark(function r(e){var t,n,a,o,i,s,c=this;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t={fastest:function(r){return r.duration},cheapest:function(r){return r.discountCost}},r.next=3,Promise.all([this.dealsService.getDeals(),A.getAllCities()]).then(function(r){var n=N(r,2),a=n[0],o=n[1];return c.initGraph(a,o,t[e.sortBy])});case 3:for(n=this.nodes.find(function(r){return r.name===e.departure}),a=this.nodes.find(function(r){return r.name===e.arrival}),n.minDistance=0,o=n;void 0!==o;o=J(this.nodes))F(o,this.edges).forEach(function(r){r.isUsed=!0,r.to.minDistance>r.distance&&(r.to.minDistance=r.distance,r.to.cameBy=r)}),o.isOut=!0;for(i=[],s=a.cameBy;null!==s;s=s.from.cameBy)i.push(s._deal);return r.abrupt("return",i.reverse());case 10:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}()}]),r}();t(346);function q(r){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function H(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Q(r,e){return!e||"object"!==q(e)&&"function"!=typeof e?function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r):e}function X(r){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function Y(r,e){return(Y=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}var Z=function(r){function e(){return function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Q(this,X(e).apply(this,arguments))}return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Y(r,e)}(e,n["Component"]),function(r,e,t){e&&H(r.prototype,e),t&&H(r,t)}(e,[{key:"render",value:function(){var r=this.props.deal;return n.createElement("div",{className:"result-item"},n.createElement("div",{className:"flex--row flex--space"},n.createElement("div",{className:"flex--row flex-center text--sm"},n.createElement("div",{className:"result-item__departure text-cap"},r.departure),n.createElement("i",{className:"material-icons"},"arrow_forward"),n.createElement("div",{className:"result-item__arrival text-cap"},r.arrival.toString())),n.createElement("div",{className:"result-item__cost flex--col"},r.hasDiscount&&n.createElement("div",{className:"price--old"},r.cost,"€"),n.createElement("div",null,r.discountCost,"€"))),n.createElement("div",{className:"flex--row flex--space text--sm"},n.createElement("div",{className:"flex--row"},n.createElement("i",{className:"material-icons"},"directions_".concat(r.transport)),n.createElement("div",{className:"result-item__transport"},r.transport)),n.createElement("div",{className:"result-item__reference"},r.reference),n.createElement("span",null,"for"),n.createElement("div",{className:"result-item__duration"},r.duration.toString())))}}]),e}();t(348);function $(r){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function rr(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function er(r){return(er=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function tr(r,e){return(tr=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}function nr(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ar(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var or=function(r){function e(){var r,t;!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return ar(nr(nr(t=function(r,e){return!e||"object"!==$(e)&&"function"!=typeof e?nr(r):e}(this,(r=er(e)).call.apply(r,[this].concat(a))))),"state",{results:[],totalCost:0,totalDiscountedCost:0,totalDuration:0}),ar(nr(nr(t)),"searchService",new V),t}return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&tr(r,e)}(e,n["Component"]),function(r,e,t){e&&rr(r.prototype,e),t&&rr(r,t)}(e,[{key:"getTotalCost",value:function(r){return r.reduce(function(r,e){return r+e.cost},0)}},{key:"getTotalDiscountedCost",value:function(r){return r.reduce(function(r,e){return r+e.discountCost},0)}},{key:"getTotalDuration",value:function(r){var e=r.reduce(function(r,e){return r+ +e.duration},0);return new b({h:Math.trunc(e/60),m:e%60})}},{key:"componentDidMount",value:function(){var r=this,e=d(location.href);this.searchService.search(e).then(function(e){0!==e.length&&(console.log(e),r.setState({results:e,totalCost:r.getTotalCost(e),totalDiscountedCost:r.getTotalDiscountedCost(e),totalDuration:r.getTotalDuration(e)}))})}},{key:"goBack",value:function(){this.props.history.push("/search".concat(location.search))}},{key:"render",value:function(){var r=this,e=this.state,t=e.results,a=e.totalDiscountedCost,o=e.totalCost,i=e.totalDuration;return 0===t.length?n.createElement("form",{className:"search-results flex--col"},n.createElement("div",{className:"flex--row flex--center"},n.createElement("i",{className:"material-icons"},"directions_run"),n.createElement("span",null,"No deals found"),n.createElement("i",{className:"material-icons"},"weekend")),n.createElement("button",{type:"button",className:"flex--center text-cap",onClick:function(){return r.goBack()}},n.createElement("i",{className:"material-icons"},"replay")," reset")):n.createElement("form",{className:"search-results flex--col"},n.createElement("div",{className:"result-list"},t.map(function(r){return n.createElement(Z,{key:r.reference,deal:r})}),n.createElement("div",{className:"total flex--row flex--space"},n.createElement("div",{className:"total__label text-cap"},"total"),n.createElement("div",{className:"total__time"},i.toString()),n.createElement("div",{className:"flex--col"},o>a&&n.createElement("div",{className:"total__cost price--old"},o,"€"),n.createElement("div",{className:"total__cost"},a,"€")))),n.createElement("button",{type:"button",className:"flex--center text-cap",onClick:function(){return r.goBack()}},n.createElement("i",{className:"material-icons"},"replay")," reset"))}}]),e}();t(350);function ir(r){return(ir="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function sr(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function cr(r,e){return!e||"object"!==ir(e)&&"function"!=typeof e?function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r):e}function ur(r){return(ur=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function lr(r,e){return(lr=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}var dr=function(r){function e(){return function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),cr(this,ur(e).apply(this,arguments))}return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&lr(r,e)}(e,n["Component"]),function(r,e,t){e&&sr(r.prototype,e),t&&sr(r,t)}(e,[{key:"render",value:function(){return n.createElement("div",{className:"app flex--col flex--center"},n.createElement("h1",{className:"flex--row flex--center"},"TripSorter"),n.createElement(o.a,null,n.createElement(i.a,null,n.createElement(s.a,{path:"/search",component:L}),n.createElement(s.a,{path:"/results",component:or}),n.createElement(c.a,{exact:!0,from:"/",to:"/search"}))))}}]),e}();a.render(n.createElement(dr,null),document.getElementById("root"))}},[[355,1,2]]]);
//# sourceMappingURL=main.ae198576de9c9f43fb2b.js.map