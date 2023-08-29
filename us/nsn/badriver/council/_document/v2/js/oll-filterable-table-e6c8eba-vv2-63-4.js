"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[754],{393:(t,e,n)=>{var r=n(8393),i=n(3897);r({target:"Array",stat:!0,forced:!n(6477)((function(t){Array.from(t)}))},{from:i})},6020:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});n(5453),n(297);var r=function(){var t=this,e=t._self._c;return e("span",{staticClass:"table--filtered"},[t.tableCaption?e("h6",{staticClass:"h__caption"},[t._v("\n    "+t._s(t.tableCaption.content)+"\n  ")]):t._e(),t._v(" "),e("div",{staticClass:"filter-form"},[e("span",{staticClass:"icon icon-funnel"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"filter__input",attrs:{type:"text",placeholder:"Filter table...","aria-label":"Enter search term to filter table results"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})]),t._v(" "),t.tableThead?e("div",{staticClass:"table_wrap"},[e("table",{staticStyle:{width:"100%"}},[t.tableThead?e("thead",t._l(t.tableThead.children,(function(n,r){return e("tr",{key:"trh_"+r},t._l(n.children,(function(n,i){return e("th",{key:"th_"+r+"_"+i},[t._v("\n            "+t._s(n.content)+"\n          ")])})),0)})),0):t._e(),t._v(" "),t.tableTbody?e("tbody",[t.isFilterEmpty?e("tr",[e("td",{attrs:{colspan:t.colspan}},[t._v("No results")])]):t._l(t.filteredRows,(function(n,r){return e("tr",{key:"trb_"+r},t._l(n.children,(function(n,i){return e("td",{key:"td_"+r+"_"+i},["children"in n&&0!==n.children.length?e("span",t._l(n.children,(function(n,l){return e(n.nodeName,{key:"a_"+r+"_"+i+"_"+l,tag:"component",class:t.attr("class",n.attributes),attrs:{href:t.attr("href",n.attributes),title:t.attr("title",n.attributes)},domProps:{innerHTML:t._s(t.highlightMatches(n.content))}})})),1):e("span",{key:"span_"+r+"_"+i,domProps:{innerHTML:t._s(t.highlightMatches(n.content))}})])})),0)}))],2):t._e()])]):e("div",{domProps:{innerHTML:t._s(t.processedHtml.outerHTML)}})])};r._withStripped=!0;var i=n(6770),l=n(6311),a=n(2932);var o=n(4797);function s(t){return function(t){if(Array.isArray(t))return(0,a.Z)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(3491),n(4579),n(5742),n(8406),n(6047),n(4418),n(2684),n(3094),n(1626),n(5573),n(1611),n(1464),n(8670),n(2357),n(393),n(642),n(3365),n(9272);var c=n(8849),u=n.n(c),h=n(20);const d={name:"TableFilter",props:{rawHtml:{type:String}},data:function(){return{processedHtml:null,tableJson:null,filter:""}},computed:{tableCaption:function(){return this.findEl("caption",this.tableJson)},tableThead:function(){return this.findEl("thead",this.tableJson)},tableTbody:function(){return this.findEl("tbody",this.tableJson)},filteredRows:function(){var t=this;return""!==this.filter.trim()?this.tableTbody.children.filter((function(e){var n=!1;return e.children.forEach((function(e){e.content.toString().toLowerCase().includes(t.filter.toLocaleLowerCase())&&(n=!0)})),!!n&&e})):this.tableTbody.children},colspan:function(){return this.tableThead.children.length+1},isFilterEmpty:function(){return 0===this.filteredRows.length},preparedHtml:function(){return(0,h.U)(this.rawHtml)}},watch:{filter:function(t,e){this.debouncedAnnouncement()}},created:function(){this.processHtml(),this.debouncedAnnouncement=u()(this.announcement,1e3)},methods:{tableToJson:function(t){var e=this;this.tableJson=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===n)return!1;var r={nodeName:String(n.nodeName).toLowerCase()};if(r.content=n.textContent.trim(),"attributes"in n&&e.nodeMap2Obj(n.attributes)&&(r.attributes=e.nodeMap2Obj(n.attributes)),null!=n&&n.colspan&&(r.colspan=n.colspan),null!=n&&n.rowspan&&(r.rowspan=n.rowspan),(null==n?void 0:n.children.length)>0){null!=r&&r.children||(r.children=[]);for(var i=0;i<n.children.length;i++){var l=n.children[i];r.children[i]=t(l)}}return r}(t)},findEl:function(t,e){var n=!1;return function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(String(r.nodeName)===String(t)&&(n=r),null!=r&&r.children)for(var i=0;i<r.children.length;i++){if(e(r.children[i]))break}return n}(e),n},highlightMatches:function(t){if(""!==this.filter.trim()){var e=t.toLowerCase().includes(this.filter.toLowerCase()),n=new RegExp(this.filter,"ig");return e?t.replace(n,(function(t){return'<b class="filter--highlight">'.concat(t,"</b>")})):t}return t},processHtml:function(){var t=(new DOMParser).parseFromString(this.preparedHtml,"text/html");this.processedHtml=t.activeElement.children[0],this.tableToJson(t.activeElement.firstChild)},nodeMap2Obj:function(t){var e=Object.assign.apply(Object,[{}].concat(s(Array.from(t,(function(t){var e=t.name,n=t.value;return(0,l.Z)({},e,n)})))));return 0===Object.keys(e).length?null:e},announcement:function(){var t="Filtered table results, found ".concat(this.filteredRows.length,' results for query "').concat(this.filter,'"');""!==this.filter.trim()&&(console.log(t),this.$announcer.set(t))},attr:function(t,e){return"object"===(0,i.Z)(e)&&(t in e&&e[t])}}};const f=(0,n(8).Z)(d,r,[],!1,null,null,null).exports}}]);