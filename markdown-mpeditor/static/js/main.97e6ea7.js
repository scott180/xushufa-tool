!function(e){function t(t){for(var o,s,a=t[0],l=t[1],c=t[2],d=0,g=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&g.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(p&&p(t);g.length;)g.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={0:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="./";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var p=l;r.push([171,1]),n()}({171:function(e,t,n){"use strict";n.r(t);n(82),n(83),n(84);var o=n(37),i=n.n(o),r=n(2),s=n.n(r),a=n(38),l=n.n(a),c=n(39),p=n.n(c),d=n(40),g=n.n(d),u=n(41),h=n.n(u),f=n(0),m=n.n(f),v=n(42),x=n.n(v),b=n(43),y=n.n(b),w=n(44),k=n.n(w),_=n(45),L=n.n(_),C=n(46),j=n.n(C),M=n(47),$=n.n(M),z=n(48),S=n.n(z),T=n(49),A=n.n(T),O=n(50),P=n.n(O),E=n(51),B=n.n(E),F=n(52),q=n.n(F),V=n(53),H=n.n(V),D=n(54),I=n.n(D),R=n(55),N=n.n(R),U=n(56),W=n.n(U),K=n(57),Z=n.n(K),J=n(58),Y=n.n(J),Q=n(59),G=n.n(Q),X=n(60),ee=n.n(X),te=n(61),ne=n.n(te),oe=n(62),ie=n.n(oe),re=n(63),se=n.n(re),ae=n(64),le=n.n(ae),ce=n(65),pe=n.n(ce),de=n(66),ge=n.n(de),ue=n(67),he=n.n(ue),fe=n(68),me=n.n(fe),ve=n(69),xe=n.n(ve),be=n(70),ye=n.n(be),we=n(71),ke=n.n(we),_e=n(72),Le=n.n(_e),Ce=n(73),je=n.n(Ce),Me=n(74),$e=n.n(Me),ze=n(75),Se=n.n(ze),Te=n(76),Ae=n.n(Te),Oe=n(77),Pe=n.n(Oe),Ee=n(78),Be=n.n(Ee),Fe=n(79),qe=n.n(Fe);m.a.configure({classPrefix:"code-snippet__"}),m.a.registerLanguage("bash",x.a),m.a.registerLanguage("clojure",y.a),m.a.registerLanguage("cpp",k.a),m.a.registerLanguage("css",L.a),m.a.registerLanguage("dart",j.a),m.a.registerLanguage("dockerfile",$.a),m.a.registerLanguage("erlang",S.a),m.a.registerLanguage("go",A.a),m.a.registerLanguage("gradle",P.a),m.a.registerLanguage("groovy",B.a),m.a.registerLanguage("haskell",q.a),m.a.registerLanguage("java",H.a),m.a.registerLanguage("javascript",I.a),m.a.registerLanguage("json",N.a),m.a.registerLanguage("julia",W.a),m.a.registerLanguage("kotlin",Z.a),m.a.registerLanguage("lisp",Y.a),m.a.registerLanguage("lua",G.a),m.a.registerLanguage("makefile",ee.a),m.a.registerLanguage("markdown",ne.a),m.a.registerLanguage("matlab",ie.a),m.a.registerLanguage("objectivec",se.a),m.a.registerLanguage("perl",le.a),m.a.registerLanguage("php",pe.a),m.a.registerLanguage("python",ge.a),m.a.registerLanguage("r",he.a),m.a.registerLanguage("ruby",me.a),m.a.registerLanguage("rust",xe.a),m.a.registerLanguage("scala",ye.a),m.a.registerLanguage("shell",ke.a),m.a.registerLanguage("sql",Le.a),m.a.registerLanguage("swift",je.a),m.a.registerLanguage("typescript",$e.a),m.a.registerLanguage("verilog",Se.a),m.a.registerLanguage("vhdl",Ae.a),m.a.registerLanguage("xml",Pe.a),m.a.registerLanguage("yaml",Be.a),m.a.registerLanguage("diff",qe.a);var Ve=function(e){e.renderer.rules.fence=function(e,t,n,o,i){let r=e[t],s=r.info?String(r.info).trim():"",a="bash";s&&(a=s.split(/\s+/g)[0]);const l=r.content.trim().replace(/</g,"&lt;").replace(/>/g,"&gt;");let c=!1;a&&m.a.getLanguage(a)&&(c=!0);const p=l.split("\n"),d=[],g=[];for(let u=0;u<p.length;u++){const e=p[u];d.push(`<code><span class="code-snippet_outer">${e?c?m.a.highlight(a,e,!0).value.replace("&amp;gt;",">").replace("&amp;lt;","<"):e:"<br>"}</span></code>`),g.push("<li></li>")}return`<section class="code-snippet code-snippet__fix code-snippet__js code-snippet_nowrap">\n            <ul class="code-snippet__line-index code-snippet__js">\n            ${g.join("")}\n            </ul>\n            <pre class="code-snippet__js" data-lang="${a}">\n            ${d.join("")}\n            </pre></section>`}};function He(e,t,n,o){const i=Number(e[t].meta.id+1).toString();let r="";return"string"==typeof o.docId&&(r="-"+o.docId+"-"),r+i}function De(e,t){let n=Number(e[t].meta.id+1).toString();return e[t].meta.subId>0&&(n+=":"+e[t].meta.subId),"["+n+"]"}function Ie(e,t,n,o,i){return'<span class="footnote-word">'+e[t].content+"</span>"}function Re(e,t,n,o,i){return'<sup class="footnote-ref">'+i.rules.footnote_caption(e,t,n,o,i)+"</sup>"}function Ne(e,t,n){return'<h3 class="footnotes-sep"></h3>\n<section class="footnotes">\n'}function Ue(){return"</section>\n"}function We(e,t,n,o,i){let r=i.rules.footnote_anchor_name(e,t,n,o,i);return e[t].meta.subId>0&&(r+=":"+e[t].meta.subId),'<span id="fn'+r+'" class="footnote-item"><span class="footnote-num">['+r+"] </span>"}function Ke(){return"</span>\n"}function Ze(e){switch(e){case 9:case 32:return!0}return!1}function Je(e,t){let n,o,i,r,s,a,l,c,p,d="",g=e.pos,u=!0;const h=e.pos,f=e.posMax;if(91!==e.src.charCodeAt(e.pos))return!1;const m=e.pos+1,v=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(v<0)return!1;if(r=v+1,r<f&&40===e.src.charCodeAt(r)){for(u=!1,r++;r<f&&(o=e.src.charCodeAt(r),Ze(o)||10===o);r++);if(r>=f)return!1;for(g=r,s=e.md.helpers.parseLinkDestination(e.src,r,e.posMax),s.ok&&(d=e.md.normalizeLink(s.str),p=s.str,e.md.validateLink(d)?r=s.pos:d=""),g=r;r<f&&(o=e.src.charCodeAt(r),Ze(o)||10===o);r++);if(s=e.md.helpers.parseLinkTitle(e.src,r,e.posMax),r<f&&g!==r&&s.ok)for(l=s.str,r=s.pos;r<f&&(o=e.src.charCodeAt(r),Ze(o)||10===o);r++);else l="";(r>=f||41!==e.src.charCodeAt(r))&&(u=!0),r++}if(u){if(void 0===e.env.references)return!1;if(r<f&&91===e.src.charCodeAt(r)?(g=r+1,r=e.md.helpers.parseLinkLabel(e,r),r>=0?i=e.src.slice(g,r++):r=v+1):r=v+1,i||(i=e.src.slice(m,v)),a=e.env.references[(x=i,x.trim().replace(/\s+/g," ").toUpperCase())],!a)return e.pos=h,!1;d=a.href,l=a.title}var x;if(!t)if(l){let t;e.pos=m,e.posMax=v,e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.list||(e.env.footnotes.list=[]);const n=e.env.footnotes.list.length;e.md.inline.parse(`${l}: *${p}*`,e.md,e.env,t=[]),c=e.push("footnote_word","",0),c.content=e.src.slice(m,v),c=e.push("footnote_ref","",0),c.meta={id:n},e.env.footnotes.list[n]={tokens:t}}else e.pos=m,e.posMax=v,c=e.push("link_open","a",1),n=[["href",d]],c.attrs=n,l&&n.push(["title",l]),e.md.inline.tokenize(e),c=e.push("link_close","a",-1);return e.pos=r,e.posMax=f,!0}function Ye(e){let t,n,o,i,r,s,a,l,c=!1,p={};if(e.env.footnotes&&(e.tokens=e.tokens.filter(e=>"footnote_reference_open"===e.type?(c=!0,a=[],l=e.meta.label,!1):"footnote_reference_close"===e.type?(c=!1,p[":"+l]=a,!1):(c&&a.push(e),!c)),e.env.footnotes.list)){for(i=e.env.footnotes.list,r=new e.Token("footnote_block_open","",1),e.tokens.push(r),t=0,n=i.length;t<n;t++)r=new e.Token("footnote_open","",1),r.meta={id:t,label:i[t].label},e.tokens.push(r),i[t].tokens?(s=[],r=new e.Token("paragraph_open","p",1),r.block=!0,s.push(r),r=new e.Token("inline","",0),r.children=i[t].tokens,r.content="",s.push(r),r=new e.Token("paragraph_close","p",-1),r.block=!0,s.push(r)):i[t].label&&(s=p[":"+i[t].label]),e.tokens=e.tokens.concat(s),o="paragraph_close"===e.tokens[e.tokens.length-1].type?e.tokens.pop():null,o&&e.tokens.push(o),r=new e.Token("footnote_close","",-1),e.tokens.push(r);r=new e.Token("footnote_block_close","",-1),e.tokens.push(r)}}var Qe=e=>{e.renderer.rules.footnote_ref=Re,e.renderer.rules.footnote_word=Ie,e.renderer.rules.footnote_block_open=Ne,e.renderer.rules.footnote_block_close=Ue,e.renderer.rules.footnote_open=We,e.renderer.rules.footnote_close=Ke,e.renderer.rules.footnote_caption=De,e.renderer.rules.footnote_anchor_name=He,e.inline.ruler.at("link",Je),e.core.ruler.after("inline","footnote_tail",Ye)};var Ge=e=>{e.core.ruler.push("blockquote-class",(function(e){let t,n=0;for(let o=0;o<e.tokens.length;o++){const i=e.tokens[o];"blockquote_open"!==i.type?n>0&&(t.attrs=[["class","multiquote-"+n]],n=0):(0===n&&(t=i),n++)}}))};var Xe=e=>{e.core.ruler.push("replace-li",function(e){return function(){e.renderer.rules.list_item_open=function(){return"<li><section>"},e.renderer.rules.list_item_close=function(){return"</section></li>"}}}(e))},et=n(80),tt=n.n(et),nt=n(6),ot=function(e,t){const{tag:n,content:o,attrs:i}=e[t].meta;switch(n){case"header-box":return i["sub-title"]&&"string"==typeof i["sub-title"]?`\n                <section style="display: flex;justify-content: center;align-items: center;margin:20px auto 10px;"><section>\n                <section style="margin-right: 10px;margin-left: 10px;display: flex;flex-direction: column;align-items: center;">\n                    <section><p style="font-size: 15px;text-align: center;margin-bottom:0;font-family: PingFangSC-Medium, PingFang SC;font-weight: bold;">${i["sub-title"]}</p></section>\n                </section>\n                <section style="border-top: 1px solid #000;padding-top: 2px;">\n                    <section style="padding-right: 15px;padding-left: 15px;border-bottom: 8px solid #409EFF;">\n                        <p style="margin-bottom: -8px;font-size: 15px;text-align: center;letter-spacing: 1.5px;font-family: PingFangSC-Medium, PingFang SC;font-weight: bold;">${o}</p>\n                    </section>\n                </section>\n            </section></section>`:`\n            <section style="display: flex;justify-content: center;align-items: center;padding: 10px;margin:20px auto 10px">\n            <section style="display: flex;justify-content: center;align-items: center;">\n                <section style="background: #409EFF;">\n                    <section style="text-align: left;padding: 7px 17px 5px 17px;transform: translate(-4.1px, -4.1px);background: #F9F9F9;border: 1px solid #333333;">\n                        <p style="font-size: 16px;font-family: PingFangSC-Medium, PingFang SC;font-weight: bold;color: #333;line-height: 22px;letter-spacing: 1px;margin-bottom:0;">${o}</p>\n                    </section>\n                </section>\n            </section>\n        </section>`;case"image-flow":if(i.images){if(i.vertical){let e="";const{width:t=320,height:n=344}=i;return i.images.split(",").forEach(n=>{e+=`<section style="clear: both;margin:0 !important; min-height: 1em;">\n                        <img  src="${n}" style="width: ${t}px; vertical-align: top; height: auto !important;">\n                    </section>`}),`\n                            <section style="text-align: center; border-width: 1px; border-style: solid; border-color: rgb(240, 240, 240);overflow:hidden;">\n                                <section style="display: inline-block;overflow:hidden;">\n                                    <section style="overflow: hidden scroll; height: ${n}px; display: inline-block; color: inherit;">\n                                        <section style="padding: 3px 2px; color: inherit; border-color: rgb(252, 180, 43);">\n                                        ${e}\n                                        </section>\n                                    </section>\n                                </section>\n                                <p style="margin: 15px auto 5px; clear: both; min-height: 1em;margin:0 !important;color:#888;">${o||"上下滑动展示更多"}</p>\n                            </section>\n                            `}let e="";return i.images.split(",").forEach(t=>{e+=`<section class="imageflow-item"><img src="${t}" class="imageflow-img" /></section>`}),`\n                    <section class="imageflow">\n                        <section class="imageflow-wrap">\n                            <section class="imageflow-box">\n                                ${e}\n                            </section>\n                        </section>\n                        <p class="imageflow-text">${o||"左右滑动展示更多"}</p>\n                    </section>\n                    `}case"qrcode-box":return'\n<section style="width: 100%;display: flex;flex-direction: column;align-items: center;justify-content: flex-start;margin:0 auto;" >\n<section style="width: 304px;background-repeat: no-repeat;background-size: 100% 100%;height: 22px;margin: 0 0 -20px 0;z-index: 20;"></section>\n<section style="width: 300px;display: flex;flex-direction: column;align-items: center;justify-content: flex-start;">\n    <section style="width: 100%;display: flex;flex-direction: row;align-items: center;justify-content: space-between;padding: 12px 18px;background: #ecf8ff;border-radius: 11px;border: 1px solid #50bfff;">\n        <section style="display: flex;flex-direction: column;align-items: flex-start;justify-content: center;">\n            <section style="display: flex;flex-direction: column;align-items: flex-start;justify-content: center;">\n                <p style="font-size: 18px;font-weight: 400;color: #5e6d82;margin-bottom:0;">扫描二维码</p>\n                <p style="font-size: 18px;font-weight: 400;color: #5e6d82;margin-bottom:0;">获取更多精彩</p>\n            </section>\n            <section style="display: flex;flex-direction: row;align-items: center;justify-content: center;flex-wrap: nowrap;border: 1px solid #50bfff;padding: 3px 8px;margin: 14px 0 0 0;">\n                <p style="font-size: 15px;font-weight: 400;color: #5e6d82;letter-spacing: 2px;margin-bottom:0;">三水清</p>\n            </section>\n        </section>\n        <section style="width: 120px;height: 120px;">\n            <img src="https://wx3.sinaimg.cn/orj360/796f423bly1gfzytdw3qhj20by0byq3p" alt="no" style="width: 100%;height: 100%;">\n        </section>\n    </section>\n</section>\n<section style="width: 304px;background-repeat: no-repeat;background-size: 100% 100%;height: 25px;margin: -23px 0 0 0;z-index: 30;"></section>\n</section>'}};const it=["header-box","qrcode-box","image-flow"];var rt=(e,t)=>{const n=(e,t)=>{let n;const o=e.src.slice(e.bMarks[t],e.eMarks[t]);if(45===o.charCodeAt(0)&&45===o.charCodeAt(1)||61===o.charCodeAt(0)&&61===o.charCodeAt(1)){const t=/(?:^|\n)((-|=){2,})([^\s|\=\-]+)\1(?:\n|$)/.exec(o);return!(!t||!t[1])&&(n=e.push("EOFLine","",0),n.meta=t[2],n.block=!0,n.content=t[3],e.line++,!0)}if((33===o.charCodeAt(0)||63===o.charCodeAt(0))&&62===o.charCodeAt(1))return n=e.push("customBlockquote","",0),n.meta=o[0],n.block=!0,n.content=o.replace(/^[\!\?]\>/,""),e.line++,!0;if(60!==o.charCodeAt(0))return!1;const i=o.charCodeAt(1);if(33===i||63===i||47===i||!function(e){let t=32|e;return t>=97&&t<=122}(i))return!1;const r=Object(nt.htmlInlineParser)(o);return!(!r||""===r.tag||-1===it.indexOf(r.tag))&&(n=e.push("blockifyTag","",0),n.meta=r,n.block=!0,e.line++,!0)};e.renderer.rules.blockifyTag=ot,e.block.ruler.before("paragraph","blockifyTag",n),e.renderer.rules.customBlockquote=(e,t)=>{const n=e[t].meta,o=e[t].content;return"!"===n?`<blockquote style="color:#f56c6c;quotes: none;border-left:3px solid #f56c6c;border-radius: 3px;padding:0.8em 1em;background-color:#fef0f0"><p style="margin:0;font-size:14px;">${o}</p></blockquote>`:`<blockquote style="color:#67c23a;quotes: none;border-left:3px solid #67c23a;border-radius: 3px;padding:0.8em 1em;background-color:#f0f9eb"><p style="margin:0;font-size:14px;">${o}</p></blockquote>`},e.block.ruler.before("paragraph","customBlockquote",n),e.renderer.rules.EOFLine=(e,t)=>{const{content:n,meta:o}=e[t];return`\n<section style="height:32px;">\n<section style="margin-top:20px;width:100%;border-top:${"="===o?"dashed":"solid"} 1px #515151;" data-width="100%">\n<section style="margin-top: -15px; text-align: center;"><section style="background-color:#fefefe;display:inline-block;padding:0px 5px;">\n<p>${n}</p>\n</section></section>\n</section>\n</section>`},e.block.ruler.before("paragraph","EOFLine",n)};var st=e=>{e.core.ruler.push("table-container",(function(e){let t=[];for(let n=0;n<e.tokens.length;n++){let o=e.tokens[n];if("table_open"===o.type){let n=new e.Token("html_inline","",0);n.content='<section class="table-container">',t.push(n),t.push(o)}else if("table_close"===o.type){let n=new e.Token("html_inline","",0);n.content="</section>",t.push(o),t.push(n)}else t.push(o)}e.tokens=t}))};var at=n(81),lt=n.n(at);p.a.registerHelper("$def",(function(e,t,n){n.data.root[e]=t}));const ct=window.localStorage,pt={"Cmd-S":"save","Cmd-B":"bold","Cmd-I":"italicize","Cmd-'":"blockquote","Cmd-U":"strikethrough","Cmd-P":"image","Cmd-H":"headerbox","Cmd-K":"link"};class dt{constructor(e,{text:t,updateDelayTime:n=300}={}){var o,i,r;r={save(e){this._save()},bold(){this.toggleAround("**","**")},italicize(){this.toggleAround("*","*")},strikethrough(){this.toggleAround("~~","~~")},code(){this.toggleAround("```\r\n","\r\n```")},blockquote(){this.toggleBefore("> ")},orderedList(){this.toggleBefore("1. ")},unorderedList(){this.toggleBefore("* ")},image(){this.toggleAround("![","](http://)")},link(){this.toggleAround("[","](http://)")},headerbox(){this.toggleAround("<header-box>","</header-box>")}},(i="actions")in(o=this)?Object.defineProperty(o,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[i]=r;let a=s()(e).html(lt.a);this.scale=1,this.index=1,this.$container=a;let l=this;a.find("[eid]").each((e,t)=>{let n=(t=s()(t)).attr("eid");l["$"+n]=t});const c=this.registerKeyMaps();this.resize();let p,d=this.editor=this._initEditor(this.$editor[0],t,c);this.converter=this._initMarkdownRender(),t&&this.updatePreview(t),d.on("change",()=>{p&&clearTimeout(p),p=setTimeout(()=>l.updatePreview(),n)}),this._scrollingHelper=s()("<div>"),this._isPreviewMoving=!1,this._isEditorMoving=!1,this._bindEvent(),this._autoSave()}_setCurrentIndex(e){this.index=parseInt(e,10)}setValue(e){return this.editor.setValue(e),this.updatePreview(),this}getSysVar(){const e=new Date;return{$sys:{year:e.getFullYear(),month:("00"+(e.getMonth()+1)).slice(-2),day:("00"+e.getDate()).slice(-2),today:Object(nt.dateFormat)(new Date)}}}render(e){return e=e||this.editor.getValue(),this.converter.render(e)}updatePreview(e){this._isUpdatePreview=!0;let t=this.render(e);return this.$preview.html(t),l.a.spacingNode(this.$preview[0]),this}toggleAround(e,t){let n=this.editor.getDoc(),o=n.getCursor();if(n.somethingSelected()){let o=n.getSelection();o.startsWith(e)&&o.endsWith(t)?n.replaceSelection(o.substring(e.length,o.length-t.length),"around"):n.replaceSelection(e+o+t,"around")}else n.replaceRange(e+t,{line:o.line,ch:o.ch}),n.setCursor({line:o.line,ch:o.ch+e.length})}toggleBefore(e){let t=this.editor.getDoc(),n=t.getCursor();if(t.somethingSelected()){let n=t.listSelections(),o=null;this.editor.operation((function(){n.forEach((function(n){let i=[n.head.line,n.anchor.line].sort();null==o&&(o=t.getLine(i[0]).startsWith(e));for(let r=i[0];r<=i[1];r++)o?t.getLine(r).startsWith(e)&&t.replaceRange("",{line:r,ch:0},{line:r,ch:e.length}):t.replaceRange(e,{line:r,ch:0})}))}))}else{let o=n.line;t.getLine(o).startsWith(e)?t.replaceRange("",{line:o,ch:0},{line:o,ch:e.length}):t.replaceRange(e,{line:o,ch:0})}}registerKeyMaps(e=pt){const t={};return Object.keys(e).forEach(n=>{const o=e[n];if("function"!=typeof this.actions[o])throw`MPEditor CodeMirror: ${o} is not a registered action`;let i=n.replace("Cmd-",CodeMirror.keyMap.default===CodeMirror.keyMap.macDefault?"Cmd-":"Ctrl-").replace("Alt-",CodeMirror.keyMap.default===CodeMirror.keyMap.macDefault?"Shift-":"Alt-");t[i]=this.actions[o].bind(this)}),t}resize(e){e=e||this.$container.height(),this.$previewContainer.height(e)}_autoSave(){let e=this.editor.getValue();""!==e&&(ct.mpe_content=e)}_handleScroll(){const e=this.editor,t=this.$preview,n=this.$container,o=e.getScrollInfo(),i=o.top,r=o.height-o.clientHeight;this.scale=(t[0].offsetHeight-n[0].offsetHeight+40)/r;const s=this.$previewContainer;1===this.index?s.scrollTop(i*this.scale):e.scrollTo(null,s.scrollTop()/this.scale+40)}_bindEvent(){const e=this.editor,t=this.$preview,n=this;this.$container.find("[eclass=mpe-col]").mouseover((function(){n._setCurrentIndex(this.dataset.index)})),e.on("scroll",this._handleScroll.bind(this)),t.parent().on("scroll",this._handleScroll.bind(this));new i.a(this.$copyBtn[0],{action:"cut",target:()=>this.$preview[0]}).on("success",e=>{this._createTips(this.$copyBtn,"复制成功")}),this.$editorTheme.on("change",(function(){let e=this.value;const t=n.editor.display.wrapper.className.split(/\s+/).filter(e=>/^cm\-s\-/.test(e));s()(n.editor.display.wrapper).removeClass(t.join(" ")).addClass("cm-s-"+e),ct.mpe_editorTheme=e})),this.$downloadBtn.on("click",()=>{let e=this.editor.getValue();e.trim()?function(e,t){const n="application/octet-stream";if(!e)return;t||(t="filetodonwload.txt"),"object"==typeof e&&(e=JSON.stringify(e,void 0,4));let o=new Blob([e],{type:n}),i=document.createEvent("MouseEvents"),r=document.createElement("a");r.download=t,r.href=URL.createObjectURL(o),r.dataset.downloadurl=[n,r.download,r.href].join(":"),i.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent(i)}(e,"untitled.md"):alert("写点啥再下载吧")}),this.$clearBtn.on("click",()=>{delete ct.mpe_content,this.setValue("")})}_save(){this._autoSave();let e=this.$toast.show();setTimeout(()=>e.hide(),800)}_createTips(e,t,n="bottom",o=2e3){let i=`\n        <div class="mpe-tooltip mpe-tooltip_${n}" >\n            <div class="mpe-tooltip-inner">${t}</div>\n        </div>\n    `,r=s()(e).position(),a=s()(i).appendTo(this.$container);return a.css({top:r.top-20,left:r.left-s()(e).width()/2}).animate({opacity:1,top:r.top+s()(e).height()+20},300),setTimeout(()=>{a.animate({opacity:0},300,()=>{a.remove()})},o),a}_initMarkdownRender(){let e=g()({html:!0,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’"});return e.use(Ge).use(Ve).use(Qe).use(st).use(tt.a).use(Xe).use(rt).use(h.a),e}_initEditor(e,t,n){let o=ct.mpe_editorTheme?ct.mpe_editorTheme:"default",i=CodeMirror.fromTextArea(e,{lineNumbers:!1,lineWrapping:!0,styleActiveLine:!0,theme:o,extraKeys:n,mode:"text/x-markdown"});return t&&i.setValue(t),i}}n(170);const gt=s()(window),ut=window.localStorage;function ht(e){let t=new dt("#js-mpeditor",{text:e.trim()});gt.resize(()=>{let e=gt.height();s()("#js-mpeditor").height(e),t.resize.bind(t)(e)})}s()(()=>{s()("#js-mpeditor").height(gt.height());const e=new URLSearchParams(window.location.search),t={};for(let[n,o]of e)t[n]=o;t.tpl?s.a.get("./static/"+t.tpl).done(ht):ut.mpe_content?ht(ut.mpe_content):s.a.get("./static/demo.md").done(ht)})},2:function(e,t){e.exports=jQuery},28:function(e,t,n){var o={"./bmp":29,"./bmp.js":29,"./gif":30,"./gif.js":30,"./jpg":31,"./jpg.js":31,"./png":32,"./png.js":32,"./psd":33,"./psd.js":33,"./svg":34,"./svg.js":34,"./tiff":35,"./tiff.js":35,"./webp":36,"./webp.js":36};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id=28},6:function(e,t){const n=/^<([A-Za-z][A-Za-z0-9\-]*)[^\<]*\/>$/,o=/^<([A-Za-z][A-Za-z0-9\-]*)([^\<]*)>(.*?)<\/\1>$/;t.htmlInlineParser=function(e){if("<"===e.charAt(0)){let t=n.exec(e);if(t&&t[1])return{tag:t[1]};if(t=o.exec(e),t){let[e,n,o,i]=t;return o=o.trim(),""!==o&&(o=o.split(/\s+/).map(e=>{if(-1!==e.indexOf("=")){const t=e.indexOf("=");return[e.slice(0,t),e.slice(t+1)]}return[e,""]}).reduce((e,t)=>(e[t[0]]=!t[1]||t[1].replace(/^['"]|['"]$/g,""),e),{})),{tag:n,attrs:o||{},content:i.trim()}}return!1}return!1},t.dateFormat=function(e=new Date,t="yyyy-MM-dd"){const n=typeof e;"string"!==n&&"number"!==n||(e=new Date(e));let o=e.getFullYear().toString(),i={M:e.getMonth()+1,d:e.getDate(),h:e.getHours(),m:e.getMinutes(),s:e.getSeconds()};return t=t.replace(/(y+)/gi,(e,t)=>o.substr(4-Math.min(4,t.length))),Object.keys(i).forEach(e=>{t=t.replace(new RegExp("("+e+"+)","g"),(t,n)=>i[e]<10&&n.length>1?"0"+i[e]:i[e])}),t}},80:function(e,t,n){"use strict";e.exports=function(e,t){t=t||{},e.core.ruler.before("linkify","implicit_figures",(function(e){for(let t=1,n=e.tokens.length;t<n-1;++t){let o=e.tokens[t];if("inline"!==o.type)continue;if(!o.children||1!==o.children.length&&3!==o.children.length)continue;if(1===o.children.length&&"image"!==o.children[0].type)continue;if(3===o.children.length&&("link_open"!==o.children[0].type||"image"!==o.children[1].type||"link_close"!==o.children[2].type))continue;if(0!==t&&"paragraph_open"!==e.tokens[t-1].type)continue;if(t!==n-1&&"paragraph_close"!==e.tokens[t+1].type)continue;let i,r=e.tokens[t-1];if(r.type="section_open",r.tag="section",e.tokens[t+1].type="section_close",e.tokens[t+1].tag="section",e.tokens[t-1].attrPush(["class","image-box"]),i=1===o.children.length?o.children[0]:o.children[1],i.children&&i.children.length){const t=new e.Token("section_open","section",1);t.attrPush(["class","image-text"]),o.children.push(t),o.children.splice(o.children.length,0,...i.children),o.children.push(new e.Token("section_close","section",-1)),i.children.length=0}}}))}},81:function(e,t){e.exports='<div class="mpeditor"> <div class="mpe-nav-wrap" eid="nav"> <div class="mpe-nav"> <ul class="mpe-nav-tools mpe_fl"> </ul> <ul class="mpe-nav-tools mpe_fr"> <li class="mpe-nav-item mpe-nav-text"> <span>编辑器主题</span> </li> <li class="mpe-nav-item mpe-nav-select"> <select eid="editorTheme"> <option value="default">default</option> <option value="solarized">solarized</option> <option value="monokai">monokai</option> <option value="twilight">twilight</option> <option value="material">material</option> <option value="night">night</option> <option value="midnight">midnight</option> </select> </li> <li class="mpe-nav-item"> <a href="javascript:void(0)" eid="downloadBtn" title="下载markdown文件"> <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M683.84 170.666667L853.333333 344.704V789.333333a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h449.173333zM320 234.645333L234.666667 234.666667v554.666666l85.333333-0.021333V533.333333h384v255.978667L789.333333 789.333333V370.730667l-85.333333-87.637334V384H320v-149.354667zM640 597.333333H384v191.978667h256V597.333333z m-42.666667 64v64h-170.666666v-64h170.666666z m42.666667-426.666666H384v85.333333h256v-85.333333z"/></svg> </a> </li> <li class="mpe-nav-item"> <a href="javascript:void(0)" eid="copyBtn" title="复制内容"> <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M746.666667 149.333333a64 64 0 0 1 64 64v181.333334a64 64 0 0 1 64 64v49.664l-64 58.496v-87.573334l-239.104 197.376a95.978667 95.978667 0 0 1-117.632 3.050667l-3.84-2.986667-236.757334-192V800h372.330667l62.805333 64H213.333333a64 64 0 0 1-64-64v-341.333333a64 64 0 0 1 64-64V213.333333a64 64 0 0 1 64-64h469.333334z m126.869333 467.861334l44.928 45.610666-174.08 171.456-105.536-104.106666 44.970667-45.568 60.586666 59.818666 129.130667-127.210666zM746.666667 213.333333H277.333333v240.853334l213.184 172.906666a32 32 0 0 0 37.845334 1.984l2.56-1.92L746.666667 449.109333V213.333333z m-149.333334 192v64H362.666667v-64h234.666666z m64-128v64H362.666667v-64h298.666666z"/></svg> </a> </li> <li class="mpe-nav-item"> <a href="javascript:void(0)" eid="clearBtn" title="清空内容"> <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M341.013333 394.666667l27.754667 393.450666h271.829333l27.733334-393.450666h64.106666L704.426667 792.618667a64 64 0 0 1-63.829334 59.498666H368.768a64 64 0 0 1-63.829333-59.52L276.885333 394.666667h64.128z m139.306667 19.818666v298.666667h-64v-298.666667h64z m117.013333 0v298.666667h-64v-298.666667h64zM181.333333 288h640v64h-640v-64z m453.482667-106.666667v64h-256v-64h256z"/> </svg></a> </li> <li class="mpe-nav-item"> <a href="//github.com/ksky521/mpeditor" target="_blank" title="本项目github" style="width:18px"> <svg style="vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2535"><path d="M1.3 525.3c0 223 142.9 412.6 342.1 482.2 26.8 6.8 22.7-12.4 22.7-25.4l0-88.5C211.2 911.8 205 809.2 194.5 792.1c-21.1-35.9-70.7-45-55.9-62.1 35.3-18.2 71.2 4.6 112.9 66.1 30.2 44.6 88.8 37.1 118.7 29.6 6.5-26.8 20.5-50.7 39.6-69.4-160.3-28.5-227.3-126.5-227.3-243 0-56.4 18.6-108.4 55.2-150.3-23.2-69.2 2.2-128.2 5.6-137 66.3-6 135.1 47.4 140.5 51.6 37.7-10.1 80.7-15.6 128.8-15.6 48.4 0 91.6 5.6 129.5 15.8 12.9-9.8 76.8-55.6 138.4-50 3.3 8.8 28.1 66.5 6.3 134.7 37 42 55.8 94.3 55.8 151 0 116.7-67.3 214.8-228.2 243.1 26.9 26.5 43.5 63.3 43.5 104l0 128.4c0.9 10.2 0 20.5 17.2 20.5 202.1-68.1 347.6-259.1 347.6-484.1 0-282.1-228.7-510.7-510.7-510.7C229.9 14.6 1.3 243.2 1.3 525.3z" p-id="2536"></path></svg> </a> </li> </ul> </div> </div> <div class="mpe-wrap"> <div eclass="mpe-col" class="mpe-editor-col mpe-col" data-index="1"> <div class="mpe-editor-wrap"> <textarea eid="editor" class="mpe-editor" type="textarea" placeholder="Your markdown here." style="display:none;height:100%"></textarea> </div> </div> <div eclass="mpe-col" class="mpe-preview-col mpe-col" data-index="2"> <div class="mpe-preview-wrap" eid="previewContainer"> <div class="mpe-preview" eid="preview"></div> </div> </div> </div> <div class="mpe-toast" eid="toast"> <i class="mpe-toast-icon"><svg style="vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="524"><path d="M512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448S759.04 960 512 960zM512 128.288C300.416 128.288 128.288 300.416 128.288 512c0 211.552 172.128 383.712 383.712 383.712 211.552 0 383.712-172.16 383.712-383.712C895.712 300.416 723.552 128.288 512 128.288zM726.976 393.184c-12.544-12.448-32.832-12.32-45.248 0.256l-233.28 235.84-103.264-106.112c-12.352-12.704-32.608-12.928-45.248-0.64-12.672 12.32-12.96 32.608-0.64 45.248l126.016 129.504c0.064 0.096 0.192 0.096 0.256 0.192 0.064 0.064 0.096 0.192 0.16 0.256 2.016 1.984 4.512 3.2 6.88 4.544 1.248 0.672 2.24 1.792 3.52 2.304 3.872 1.6 8 2.4 12.096 2.4 4.064 0 8.128-0.8 11.968-2.336 1.248-0.512 2.208-1.536 3.392-2.176 2.4-1.344 4.896-2.528 6.944-4.544 0.064-0.064 0.096-0.192 0.192-0.256 0.064-0.096 0.16-0.128 0.256-0.192l256.224-259.008C739.648 425.856 739.52 405.6 726.976 393.184z" p-id="525"></path></svg></i> <p class="mpe-toast-text">已保存</p> </div> </div> '},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){}});