const __vite__mapDeps=(e,l=__vite__mapDeps,a=l.f||(l.f=["assets/gallery-ZxZF3Z6j.js","assets/runtime-dom.esm-bundler-CxB0tIIY.js","assets/links-D3QXPqgW.js","assets/links-ConhUAZd.css","assets/Explanation.vue_vue_type_script_setup_true_lang-DeeVaOAu.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/gallery-Bf4dc25L.css"]))=>e.map((e=>a[e]));import{u as fe,_ as ye,a as ge}from"./main-uP2nwxoG.js";import{w as be,a as X}from"./runtime-dom.esm-bundler-CxB0tIIY.js";import{a as b,w as Y,b as u,c as Ne,d as Ve,e as De,_ as R,S as Se,f as ke,g as Me,h as Ie,I as we,i as Te,O as Pe,j as Ee}from"./index-aThmJgBL.js";import{O as c,V as p,T as ee,aW as t,aX as l,b1 as o,P as Ce,M as Z,N as M,Q as $e,m as q,L as Ue,b2 as E,b3 as Fe,a_ as g,b4 as i,U as n,aZ as d,b5 as r,a$ as C,b0 as J,aY as K,b6 as $,b7 as h,b8 as _}from"./links-D3QXPqgW.js";import{_ as xe}from"./Explanation.vue_vue_type_script_setup_true_lang-DeeVaOAu.js";import{m as U}from"./mineralDatalists-CKshA0d-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Ae=c({__name:"MineralInfobox",props:{mineralName:{},image:{},region:{},systemName:{},planetName:{},moonName:{},content:{},formation:{},notes:{},elemPrimary:{},elemSecondary:{},polymorphic:{},discoveredlinkName:{},discoveredName:{},discDate:{},mode:{},researchteam:{},release:{}},setup:e=>(e,a)=>(p(),ee(b,{"is-single-line":!1,"template-name":"Mineral infobox"},{default:t((()=>[l("div",null,"| name = "+o(e.mineralName),1),l("div",null,"| image = "+o(e.image||"nmsMisc_NotAvailable.png"),1),a[0]||(a[0]=l("div",null,"| galaxy = Eissentam",-1)),l("div",null,"| region = "+o(e.region),1),l("div",null,"| system = "+o(e.systemName),1),l("div",null,"| planet = "+o(e.planetName),1),l("div",null,"| moon = "+o(e.moonName),1),l("div",null,"| content = "+o(e.content),1),l("div",null,"| formation = "+o(e.formation),1),l("div",null,"| notes = "+o(e.notes),1),l("div",null,"| element_primary = "+o(e.elemPrimary),1),l("div",null,"| element_secondary = "+o(e.elemSecondary),1),l("div",null,"| polymorphic = "+o(e.polymorphic),1),a[1]||(a[1]=l("div",null,"| civilized = Eisvana",-1)),l("div",null,"| discoveredlink = "+o(e.discoveredlinkName),1),l("div",null,"| discovered = "+o(e.discoveredName),1),l("div",null,"| discovered_on = "+o(e.discDate),1),l("div",null,"| mode = "+o(e.mode),1),l("div",null,"| researchteam = "+o(e.researchteam),1),l("div",null,"| release = "+o(e.release),1)])),_:1}))}),Oe={key:1},Be={key:0},Re={key:2},Xe=c({__name:"Mineral",setup(e){const a=Ce(),{fullArticleElement:s}=Z(a),m=fe(),c=M(null);$e((()=>{s.value=c.value,q("galleryArray",["","Scanner view","Discovery Menu"]),q("galleryExplanationExternal","\n\tThere is a preferred order of gallery pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Scanner view</li>\n\t\t\t<li>Discovery Menu</li>\n\t\t</ol>\n \t</div>"),ye((()=>import("./gallery-ZxZF3Z6j.js")),__vite__mapDeps([0,1,2,3,4,5,6]))}));const v=Ue(),{release:f,name:y,orgName:N,image:V,discovered:x,discoveredlink:D,system:k,planet:I,moon:j,glyphs:S,content:w,formation:A,notes:T,elements:F,polymorphic:P,discDate:O,docBy:B,researchteam:L,region:W,sanitisedStrings:z,docBySentence:Q,appearance:G}=Z(v),H=E((()=>_(P.value))),le=E((()=>_(w.value))),ae=M(""),ne=M("");Y(A,(()=>ae.value=h(A.value,U.formationData)),{debounce:500}),Y(T,(()=>ne.value=h(T.value,U.mineralNotesData)),{debounce:500}),Fe((()=>{F.value[0]===F.value[1]&&(F.value[1]="")}));const te=E((()=>{const e=parseInt(w.value);if(!isNaN(e))return e+"%"})),oe=E((()=>F.value.filter(Boolean))),ie=M(""),re=M(!1);function se(){const{isValidData:e,message:l}=ge();ie.value=l.value,re.value=!e.value}return(e,a)=>(p(),g(C,null,[i(we,null,{default:t((()=>[l("form",{class:"table",onSubmit:a[12]||(a[12]=be((()=>{}),["prevent"]))},[i(u,{label:"Mineral name:",identifier:"nameInput",modelValue:n(y),"onUpdate:modelValue":a[0]||(a[0]=e=>d(y)?y.value=e:null),img:"mineral/mineralName"},{heading:t((()=>a[16]||(a[16]=[r("Mineral Name")]))),content:t((()=>a[17]||(a[17]=[r("Enter exactly as seen in game. Watch out for 0 (zero) and O (o).")]))),default:t((()=>[a[18]||(a[18]=r(" Enter exactly as seen in game. Watch out for 0 (zero) and O (o). "))])),_:1},8,["modelValue"]),i(u,{label:"Original name before uploading (if available):",identifier:"orgNameInput",modelValue:n(N),"onUpdate:modelValue":a[1]||(a[1]=e=>d(N)?N.value=e:null)},null,8,["modelValue"]),i(Ne),i(u,{label:"Name of the System:",identifier:"systemInput",modelValue:n(k),"onUpdate:modelValue":a[2]||(a[2]=e=>d(k)?k.value=e:null)},null,8,["modelValue"]),i(u,{label:"Name of the planet:",identifier:"planetInput",modelValue:n(I),"onUpdate:modelValue":a[3]||(a[3]=e=>d(I)?I.value=e:null)},{default:t((()=>a[19]||(a[19]=[r(" Planet Name OR the planet circled by the moon where the mineral can be found. ")]))),_:1},8,["modelValue"]),i(u,{label:"Name of the moon (if mineral is on moon):",identifier:"moonInput",modelValue:n(j),"onUpdate:modelValue":a[4]||(a[4]=e=>d(j)?j.value=e:null)},{default:t((()=>a[20]||(a[20]=[r(" If the mineral is located on a moon. Leave blank if the mineral is on a planet. ")]))),_:1},8,["modelValue"]),i(Ve),i(u,{modelValue:n(w),"onUpdate:modelValue":a[5]||(a[5]=e=>d(w)?w.value=e:null),error:le.value,label:"Metal content:",identifier:"content",img:"mineral/content",maxlength:"2"},{heading:t((()=>a[21]||(a[21]=[r("Metal Content")]))),content:t((()=>a[22]||(a[22]=[r("Found on the mineral scan.")]))),default:t((()=>[a[23]||(a[23]=r(" Found on the mineral scan. "))])),_:1},8,["modelValue","error"]),i(u,{modelValue:n(A),"onUpdate:modelValue":a[6]||(a[6]=e=>d(A)?A.value=e:null),error:ae.value,label:"Formation process:",identifier:"formation",list:"formationData",img:"mineral/formation"},{heading:t((()=>a[24]||(a[24]=[r("Formation Process")]))),content:t((()=>a[25]||(a[25]=[r("Found on the mineral scan.")]))),default:t((()=>[a[26]||(a[26]=r(" Found on the mineral scan. "))])),_:1},8,["modelValue","error"]),i(u,{modelValue:n(T),"onUpdate:modelValue":a[7]||(a[7]=e=>d(T)?T.value=e:null),error:ne.value,label:"Notes:",identifier:"notes",list:"mineralNotesData",img:"mineral/notes"},{heading:t((()=>a[27]||(a[27]=[r("Notes")]))),content:t((()=>a[28]||(a[28]=[r("Found on the mineral scan.")]))),default:t((()=>[a[29]||(a[29]=r(" Found on the mineral scan. "))])),_:1},8,["modelValue","error"]),i(u,{modelValue:n(P),"onUpdate:modelValue":a[8]||(a[8]=e=>d(P)?P.value=e:null),error:H.value,identifier:"polymorphic",label:"Polymorphic (number of instances):",maxlength:"2"},{heading:t((()=>a[30]||(a[30]=[r("Polymorphic")]))),content:t((()=>a[31]||(a[31]=[r(' Sometimes multiple mineral models have the same name. This is called "Polymorphism". Enter the number of how many different mineral models had this name. ')]))),default:t((()=>[a[32]||(a[32]=r(" How many different models of this mineral were discovered. "))])),_:1},8,["modelValue","error"]),(p(),g(C,null,J(2,(e=>i(De,{index:e-1,resources:n(U).mineralResources,item:"mineral"},null,8,["index","resources"]))),64)),i(R,null,{label:t((()=>[a[36]||(a[36]=l("label",{for:"discDate"},"Discovery date:",-1)),i(xe,{img:"mineral/discDate"},{heading:t((()=>a[33]||(a[33]=[r("Discovery Date")]))),content:t((()=>a[34]||(a[34]=[r(" Found on the mineral scan. "),l("br",null,null,-1),r(" The exact discovery timestamp is displayed on the top left. ")]))),default:t((()=>[a[35]||(a[35]=r(" Found on the mineral scan. "))])),_:1})])),input:t((()=>[K(l("input",{"onUpdate:modelValue":a[9]||(a[9]=e=>d(O)?O.value=e:null),id:"discDate",type:"date"},null,512),[[X,n(O)]])])),_:1}),i(Se,null,{default:t((()=>[i(R,null,{default:t((()=>a[37]||(a[37]=[l("p",null,"Information about the player.",-1)]))),_:1}),i(ke),i(u,{label:"Documenter if not discoverer:",identifier:"docBy",modelValue:n(B),"onUpdate:modelValue":a[10]||(a[10]=e=>d(B)?B.value=e:null)},null,8,["modelValue"]),i(Me)])),_:1}),i(R,null,{default:t((()=>[a[38]||(a[38]=l("label",{for:"appearance"},"Appearance:",-1)),K(l("textarea",{"onUpdate:modelValue":a[11]||(a[11]=e=>d(G)?G.value=e:null),id:"appearance",placeholder:"This mineral is a <size> <colour> <type>."},null,512),[[X,n(G)]])])),_:1})],32),a[39]||(a[39]=l("div",{id:"galleryInput"},null,-1)),a[40]||(a[40]=l("div",{id:"galleryItems",class:"gallery-items-wrapper"},null,-1)),i(Ie)])),_:1}),i(Te,{open:re.value,"onUpdate:open":a[13]||(a[13]=e=>re.value=e),"error-message":ie.value},null,8,["open","error-message"]),i(Pe,{onMousedown:se},{default:t((()=>[l("div",{ref_key:"wikiText",ref:c,class:"wikiText",id:"fullArticle",onMouseup:a[14]||(a[14]=(...e)=>n(m).getSelectedText&&n(m).getSelectedText(...e)),onTouchend:a[15]||(a[15]=(...e)=>n(m).getSelectedText&&n(m).getSelectedText(...e))},[l("div",null,[i(b,{"template-name":"Version"},{default:t((()=>[r(o(n(f)),1)])),_:1})]),l("div",null,[i(b,{"template-name":"Eisvana"})]),i(Ae,{"mineral-name":n(z).name,image:n(V),region:n(W),systemName:n(z).system,planetName:n(z).planet,moonName:n(z).moon,content:te.value,formation:n(A),notes:n(T),"elem-primary":n(F)[0],"elem-secondary":n(F)[1],polymorphic:n(P),"disc-date":n(O).replaceAll("-","/"),"discovered-name":n(z).discovered,"discoveredlink-name":n(z).discoveredlink,researchteam:n(L),release:n(f)},null,8,["mineral-name","image","region","systemName","planetName","moonName","content","formation","notes","elem-primary","elem-secondary","polymorphic","disc-date","discovered-name","discoveredlink-name","researchteam","release"]),l("div",null,"'''"+o(n(z).name)+"''' is a variety of mineral.",1),a[43]||(a[43]=l("br",null,null,-1)),a[44]||(a[44]=l("div",null,"==Summary==",-1)),l("div",null,"'''"+o(n(z).name)+"''' is a type of [[mineral]]. "+o(n(z).appearance),1),a[45]||(a[45]=l("br",null,null,-1)),n(P)?(p(),g(C,{key:0},[l("div",null,[i(b,{"template-name":"Polymorphicmineral"},{default:t((()=>[r(o(n(P)),1)])),_:1})]),a[41]||(a[41]=l("br",null,null,-1))],64)):$("",!0),a[46]||(a[46]=l("div",null,"==Alias Names==",-1)),n(N)?(p(),g("div",Oe,[i(b,{"template-name":"aliasc"},{default:t((()=>[r("text=Original|name="+o(n(z).orgName),1)])),_:1})])):$("",!0),l("div",null,[i(b,{"template-name":"aliasc"},{default:t((()=>[r("text=Current|name="+o(n(z).name),1)])),_:1})]),a[47]||(a[47]=l("br",null,null,-1)),a[48]||(a[48]=l("div",null,"==Discovery Menu==",-1)),l("div",null,"* Metal Content: "+o(te.value),1),l("div",null,"* Formation Process: "+o(n(A)),1),l("div",null,"* Notes: "+o(n(T)),1),a[49]||(a[49]=l("br",null,null,-1)),a[50]||(a[50]=l("div",null,"==Location==",-1)),l("div",null,[a[42]||(a[42]=r(" It can be found on the ")),n(j)?(p(),g("span",Be,"[[moon]] [["+o(n(z).moon)+"]] of the",1)):$("",!0),r(" [[planet]] [["+o(n(z).planet)+"]] in the [["+o(n(z).system)+"]] [[star system]]. ",1)]),l("div",null,[i(b,{"template-name":"CoordGlyphConvert"},{default:t((()=>[r(o(n(S)),1)])),_:1})]),a[51]||(a[51]=l("br",null,null,-1)),a[52]||(a[52]=l("div",null,"==Resources==",-1)),l("div",null," This mineral provides the "+o(oe.value.length>1?"resources":"resource")+" "+o(oe.value.map((e=>`[[${e}]]`)).join(" and "))+" when mined. ",1),a[53]||(a[53]=l("br",null,null,-1)),a[54]||(a[54]=l("div",null,"==Additional Information==",-1)),n(B)&&n(B)!==n(D)&&n(B)!==n(x)?(p(),g("div",Re,"Documented by "+o(n(Q)),1)):$("",!0),a[55]||(a[55]=l("br",null,null,-1)),a[56]||(a[56]=l("div",{id:"gallery"},null,-1))],544)])),_:1}),(p(!0),g(C,null,J(n(U),((e,l)=>(p(),ee(Ee,{identifier:l,data:e},null,8,["identifier","data"])))),256))],64))}});export{Xe as default};
