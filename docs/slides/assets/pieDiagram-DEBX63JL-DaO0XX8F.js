import{p as N}from"./chunk-K2ZEYYM2-DJlIB3ix.js";import{p as B}from"./gitGraph-YCYPL57B-5MQDGNWY-C2rTeGxf.js";import{_ as i,g as U,s as H,a as K,b as V,n as Z,o as j,l as C,c as q,H as J,a8 as Q,aa as X,ab as z,ac as Y,e as tt,x as et,ad as at,K as rt}from"./md-CCa9Jkxc.js";import"./chunk-TGZYFRKZ-CNIERI2n.js";import"./index-Bz_oAfHn.js";import"./modules/vue-BSbHPjMY.js";import"./modules/shiki-BNn5UJLM.js";import"./modules/file-saver-C8BEGaqa.js";import"./slidev/default-Bd-08CO-.js";import"./slidev/context-BHg831TZ.js";var it=rt.pie,D={sections:new Map,showData:!1},m=D.sections,w=D.showData,st=structuredClone(it),ot=i(()=>structuredClone(st),"getConfig"),nt=i(()=>{m=new Map,w=D.showData,et()},"clear"),lt=i(({label:t,value:a})=>{m.has(t)||(m.set(t,a),C.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ct=i(()=>m,"getSections"),pt=i(t=>{w=t},"setShowData"),dt=i(()=>w,"getShowData"),F={getConfig:ot,clear:nt,setDiagramTitle:j,getDiagramTitle:Z,setAccTitle:V,getAccTitle:K,setAccDescription:H,getAccDescription:U,addSection:lt,getSections:ct,setShowData:pt,getShowData:dt},gt=i((t,a)=>{N(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),ut={parse:i(async t=>{const a=await B("pie",t);C.debug(a),gt(a,F)},"parse")},ft=i(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),mt=ft,ht=i(t=>{const a=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return at().value(s=>s.value)(a)},"createPieArcs"),St=i((t,a,G,s)=>{C.debug(`rendering pie chart
`+t);const n=s.db,y=q(),T=J(n.getConfig(),y.pie),$=40,o=18,d=4,c=450,h=c,S=Q(a),l=S.append("g");l.attr("transform","translate("+h/2+","+c/2+")");const{themeVariables:r}=y;let[A]=X(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(h,c)/2-$,W=z().innerRadius(0).outerRadius(g),M=z().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const b=n.getSections(),v=ht(b),O=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],p=Y(O);l.selectAll("mySlices").data(v).enter().append("path").attr("d",W).attr("fill",e=>p(e.data.label)).attr("class","pieCircle");let E=0;b.forEach(e=>{E+=e}),l.selectAll("mySlices").data(v).enter().append("text").text(e=>(e.data.value/E*100).toFixed(0)+"%").attr("transform",e=>"translate("+M.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),l.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const x=l.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(e,u)=>{const f=o+d,R=f*p.domain().length/2,I=12*o,L=u*f-R;return"translate("+I+","+L+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",p).style("stroke",p),x.data(v).append("text").attr("x",o+d).attr("y",o-d).text(e=>{const{label:u,value:f}=e.data;return n.getShowData()?`${u} [${f}]`:u});const P=Math.max(...x.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0)),k=h+$+o+d+P;S.attr("viewBox",`0 0 ${k} ${c}`),tt(S,c,k,T.useMaxWidth)},"draw"),vt={draw:St},Et={parser:ut,db:F,renderer:vt,styles:mt};export{Et as diagram};
