(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf0d2b2c"],{"0496":function(e,t,o){var c={"./charts":"cfa4","./charts.json":"cfa4","./color":"1c36","./color.json":"1c36","./common":"ec2b","./common.json":"ec2b","./css":"bf15","./css.json":"bf15","./desktop":"e5df","./desktop.json":"e5df","./engine":"6c41","./engine.json":"6c41","./icon":"9870","./icon.json":"9870","./image":"bc42","./image.json":"bc42","./inspiration":"6649","./inspiration.json":"6649","./map":"3e16","./map.json":"3e16","./menu":"d4db","./menu.json":"d4db","./mobile":"dc56","./mobile.json":"dc56","./react":"d170","./react.json":"d170","./technology":"abc0","./technology.json":"abc0","./tools":"c720","./tools.json":"c720","./vue":"5dde","./vue.json":"5dde"};function i(e){var t=s(e);return o(t)}function s(e){if(!o.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}i.keys=function(){return Object.keys(c)},i.resolve=s,e.exports=i,i.id="0496"},"11ab":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAY9JREFUWEftVj1LAzEYft+kHDhIO4k6CgqigpMfiOLoLBw4lrvmCrr5Dxz8D73rHe3ivxAs6KCOKi4nVgUH9Q+UNk0kpXdcB5eS2g7JFELyvE+ePHl4EcY8cMz1wRCYHAVs254qFAo+IvJ2u31cr9dbyh+e551IKQ8BgGrySzOOY9ZoNLjCSxUolUr7hJArtSiE2AvD8LpP4AsAZjQVT2B2gyC4GSBQLBZnLcu6l1JySulWpVL57hO4AIAjACA6SEgpm1n8yfGAjtsNg2EUMAoMKOA4zkIul+NBEHwkhnIcZ5oQsq4riNQ3jKLoPcFPCXietwYAD71wQFzyfT9Wc8bYEyKuDOPwv850u93FKIpeBoLIdd1VSumjWsxuYIw9I+LyyAmoAv/xBISQ1+wTm19gFDAKZINoDgDuVEPCOd+s1Wo/o2hIAOCt0+lsJPgpAdd1dyilvTZJCLEdhuFtPwk/EXFeZxBl8VMCtm3TfD5/hoitarV6DgBSFS2XywdCiFMAsDSRuMziGxMaBcauwC8sc5whV05ZiQAAAABJRU5ErkJggg=="},"155b":function(e,t,o){"use strict";o.r(t);o("14d9");var c=o("7a23"),i=o("11ab"),s=o.n(i),a=o("f6f2"),r=o("d4db"),l=o("48b8");const n=e=>(Object(c["pushScopeId"])("data-v-84b5e976"),e=e(),Object(c["popScopeId"])(),e),p={class:"collect"},d={class:"collect-left"},g={class:"search"},h={class:"collect-left-content"},m=["name"],f={class:"content-title"},b=n(()=>Object(c["createElementVNode"])("img",{src:s.a},null,-1)),u=["onClick"],w=["src"],j={class:"li-content"},v={class:"describe"},O={class:"collect-right"},k=n(()=>Object(c["createElementVNode"])("div",{class:"collect-right-title"},"TOC",-1)),y=["onClick"],C={class:"drawerContent"},A=["onClick"],x=["src"],V={class:"drawerFlex"},I={class:"drawerTitle"},E={class:"drawerDescribe"};var N=Object(c["defineComponent"])({__name:"collect",setup(e){const t=Object(c["reactive"])([]),i=Object(c["ref"])(""),s=Object(c["ref"])(""),n=Object(c["ref"])(!1),N=Object(c["ref"])([]),S=Object(c["ref"])(""),_=Object(c["ref"])(null);Object(c["onMounted"])(()=>{Object(l["getWallpaper"])().then(e=>{"object"===typeof e&&null!==e&&"url"in e&&(_.value=`url(${e.url})`)}),r.data.forEach(async e=>{const o=await z(e.file);t.push({name:e.name,data:o.data})})});const z=async e=>{const t=await o("0496")("./"+e);return t},D=e=>{window.open(e,"_blank")},P=e=>{const t=document.querySelectorAll(`div[name='${e}']`)[0];t&&t.scrollIntoView({block:"center",behavior:"smooth"})},B=()=>{if(""!==Object(c["unref"])(i)){const e=document.getElementsByClassName("collect-left-content")[0].querySelectorAll("li");let t=-1;for(let o=0;o<e.length;o++){const s=e[o].innerText;if(s&&"undefined"!==s&&-1!==s.toLocaleLowerCase().indexOf(Object(c["unref"])(i).toLocaleLowerCase())){t=o;break}}-1!==t&&e[t].scrollIntoView({block:"center",behavior:"smooth"})}},R=()=>{document.getElementsByClassName("main")[0].scrollTo(0,0)};return(e,o)=>{const l=Object(c["resolveComponent"])("el-input"),z=Object(c["resolveComponent"])("el-button"),J=Object(c["resolveComponent"])("el-divider"),H=Object(c["resolveComponent"])("el-affix"),q=Object(c["resolveComponent"])("el-drawer");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("div",g,[Object(c["createVNode"])(l,{class:"search-input",modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=e=>i.value=e),placeholder:"请输入查询关键字",clearable:""},null,8,["modelValue"]),Object(c["createVNode"])(z,{type:"primary",onClick:B},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("查询")]),_:1})]),Object(c["createElementVNode"])("div",h,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:e.name},[0!==t?(Object(c["openBlock"])(),Object(c["createBlock"])(J,{key:0})):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",{class:"content-header",name:e.name},[Object(c["createElementVNode"])("div",f,[b,Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.name),1)])],8,m),Object(c["createElementVNode"])("ul",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.data,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:e.title,onClick:t=>D(e.href)},[Object(c["createElementVNode"])("img",{src:e.logo,class:"content-img"},null,8,w),Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("div",null,Object(c["toDisplayString"])(e.title),1),Object(c["createElementVNode"])("div",v,Object(c["toDisplayString"])(e.describe),1)])],8,u))),128))])]))),128))])]),Object(c["createElementVNode"])("div",O,[Object(c["createVNode"])(H,{offset:80,class:"collect-right-affix"},{default:Object(c["withCtx"])(()=>[k,Object(c["createElementVNode"])("ul",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(r).data,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:e.name,onClick:t=>P(e.name)},[Object(c["createElementVNode"])("div",null,Object(c["toDisplayString"])(e.name),1)],8,y))),128))])]),_:1}),Object(c["createElementVNode"])("div",{class:"content-right-bg",style:Object(c["normalizeStyle"])({backgroundImage:_.value})},null,4)]),Object(c["createVNode"])(q,{"append-to-body":!0,title:s.value,modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=e=>n.value=e)},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(H,{offset:60,class:"affix"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(l,{modelValue:S.value,"onUpdate:modelValue":o[1]||(o[1]=e=>S.value=e),placeholder:"请输入关键字"},{append:Object(c["withCtx"])(()=>[Object(c["createVNode"])(z,{icon:Object(c["unref"])(a["a"])},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1}),Object(c["createElementVNode"])("ul",C,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(N.value,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[""===S.value||-1!==e.title.toLocaleLowerCase().indexOf(S.value.toLocaleLowerCase())?(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:e.title,onClick:t=>D(e.href)},[Object(c["createElementVNode"])("img",{src:e.logo,alt:"logo"},null,8,x),Object(c["createElementVNode"])("div",V,[Object(c["createElementVNode"])("div",I,Object(c["toDisplayString"])(e.title),1),Object(c["createElementVNode"])("div",E,Object(c["toDisplayString"])(e.describe),1)])],8,A)):Object(c["createCommentVNode"])("",!0)],64))),256))])]),_:1},8,["title","modelValue"])]),Object(c["createElementVNode"])("img",{src:"https://wimg.588ku.com/gif/20/07/22/8d2d56434a9d7759cf409655e201b42f.gif",alt:"gif",class:"goback",title:"回到顶部",onClick:R})],64)}}}),S=(o("6591"),o("6b0d")),_=o.n(S);const z=_()(N,[["__scopeId","data-v-84b5e976"]]);t["default"]=z},"1c36":function(e){e.exports=JSON.parse('{"name":"Color","data":[{"title":"渐变色","href":"https://webkul.github.io/coolhue/","describe":"网页渐变色","logo":"https://webkul.github.io/coolhue/images/coolhue-logo.png"},{"title":"渐变色","href":"https://webgradients.com/","describe":"网页渐变色","logo":"https://webgradients.com/img/other/logos/webgradients_logo.png"},{"title":"colors","describe":"各类颜色集合","href":"https://materialui.co/colors/","logo":"https://tse2-mm.cn.bing.net/th/id/OIP-C.mLI8QfxK8k16QuLN1J3hwgHaHm?pid=ImgDet&rs=1"}]}')},"3e16":function(e){e.exports=JSON.parse('{"name":"地图专区","data":[{"title":"leafletjs","describe":"leafletjs地图","href":"https://leafletjs.com/","logo":"https://avatars0.githubusercontent.com/u/2854298?s=200&v=4"},{"title":"高德地图","describe":"高德地图文档","href":"https://lbs.amap.com/api/javascript-api/summary/","logo":"https://img.ixintu.com/upload/jpg/20210524/eb84c18ed3b7ad8d72602eb5b79e10c4_28075_500_500.jpg!con"},{"title":"百度地图","describe":"百度地图文档","href":"https://lbsyun.baidu.com/index.php?title=webapi","logo":"https://ts1.cn.mm.bing.net/th/id/R-C.0c7b21d3b849ce841074f07bdd6c10f2?rik=rcAQIViHvPrz%2bw&riu=http%3a%2f%2fysggw.org%2fimages%2f201801%2fgoods_img%2f1144_P_1516256633276.jpg&ehk=%2b02yWxHPiXIKViyTy%2f8j29U2tty2H7CIvRYzRjUELVw%3d&risl=&pid=ImgRaw&r=0"},{"title":"echartsMap","describe":"geojson数据下载网址","href":"https://hxkj.vip/demo/echartsMap/","logo":"https://yoo66.com/app/echarts/doc/asset/img/echarts-logo2.png"},{"title":"datav","describe":"阿里云geojson数据下载网址","href":"http://datav.aliyun.com/tools/atlas/index.html#&lat=31.840232667909365&lng=104.2822265625&zoom=4","logo":"https://ts1.cn.mm.bing.net/th/id/R-C.db71c1a18193988483076319a70d88c9?rik=PMOqn31KbQ%2b8Yg&riu=http%3a%2f%2fdatav.jiaminghi.com%2ffavicon.ico&ehk=jvXHO0pId86zI4aSewf9qRbMSExcbijGDtUHMBjf6qU%3d&risl=&pid=ImgRaw&r=0"},{"title":"mapshaper","describe":"mapshaper可预览shp格式文件，将shp转换为其他文件","href":"https://mapshaper.org/","logo":"https://tse1-mm.cn.bing.net/th/id/OIP-C.a2oVJwQHhVFdmJTshrKGawHaHS?pid=ImgDet&rs=1"},{"title":"geojson","describe":"可在线编辑/预览geojson格式文件","href":"http://geojson.org","logo":"https://s3.amazonaws.com/media-p.slid.es/uploads/387398/images/5861893/JSON_logo2.png"},{"title":"cesium","describe":"创建3D地球仪和地图","href":"https://cesium.com/platform/cesiumjs/","logo":"https://www.osgeo.cn/osgeo-live/_images/logo_cesium.png"}]}')},"5dde":function(e){e.exports=JSON.parse('{"name":"Vue","data":[{"title":"Vue","logo":"https://pic2.zhimg.com/50/009f838f5a7381b01f74c6f49bee27f4_720w.png?source=54b3c3a5","href":"https://cn.vuejs.org/","describe":"渐进式JavaScript 框架"},{"title":"Vite","describe":"下一代前端开发与构建工具","href":"https://cn.vitejs.dev/","logo":"https://cn.vitejs.dev/logo.svg"},{"title":"Vuex","describe":"vue状态管理","href":"https://vuex.vuejs.org/zh/","logo":"https://developer.johncayde.com/img/tech/vuex.png"},{"title":"Pinia","describe":"符合直觉的Vue.js状态管理库","href":"https://pinia.vuejs.org/zh/","logo":"https://pinia.vuejs.org/logo.svg"},{"title":"Element-plus","describe":"Vue3.0框架","href":"https://element-plus.gitee.io/zh-CN/","logo":"https://src.pcsoft.com.cn/d/file/soft/yygj/yyqt/2020-10-15/8a05e89f1fa1da1ef125828e11c4f1e8.jpg"},{"title":"Element UI","describe":"Vue2.0框架","href":"https://element.eleme.cn/#/zh-CN","logo":"https://src.pcsoft.com.cn/d/file/soft/yygj/yyqt/2020-10-15/8a05e89f1fa1da1ef125828e11c4f1e8.jpg"},{"title":"Vant","describe":"轻量、可靠的移动端 Vue 组件库","href":"https://youzan.github.io/vant/#/zh-CN/","logo":"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png"},{"title":"iView","describe":"一套基于 Vue.js 的高质量UI 组件库","href":"https://www.iviewui.com/","logo":"https://file.iviewui.com/admin-cloud-dist/img/logo-small.4a34a883.png"},{"title":"vue-draggable","describe":"Vue拖拽组件","href":"https://www.itxst.com/vue-draggable/tutorial.html","logo":"https://img.zcool.cn/community/01cdab5a66a75ea8012113c7849434.jpg@1280w_1l_2o_100sh.jpg"},{"title":"vue-qr","describe":"vue生成二维码","href":"https://www.npmjs.com/package/vue-qr","logo":"https://res.cloudinary.com/practicaldev/image/fetch/s--GK_jtVfL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/diadal/vue3-qr-code-styling/master/src/assets/qr_code_example.png"},{"title":"vue-cropper","describe":"Vue图片剪裁","href":"https://github.com/xyxiao001/vue-cropper","logo":"https://img0.baidu.com/it/u=314231641,2837626923&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500"},{"title":"vue-lazyload","describe":"Vue图片懒加载","href":"https://www.npmjs.com/package/vue-lazyload","logo":"https://img.zcool.cn/community/01867e59151dfba801216a3eb45dcd.gif"},{"title":"vue-grid-layout","describe":"网格布局系统，可拖拽","href":"https://jbaysolutions.github.io/vue-grid-layout/","logo":"https://t7.baidu.com/it/u=860330160,4117395242&fm=193&f=GIF"},{"title":"vue cli","describe":"基于 Vue.js 进行快速开发的完整系统","href":"https://cli.vuejs.org/zh/config/","logo":"https://pic2.zhimg.com/50/009f838f5a7381b01f74c6f49bee27f4_720w.png?source=54b3c3a5"},{"title":"vue-virtual-scroll-list","describe":"vue组件支持大数据量列表","href":"https://github.com/tangbc/vue-virtual-scroll-list","logo":"https://img12.360buyimg.com/imgzone/jfs/t1/213672/23/2946/109192/6181296fEa5169689/141ac8cfd0e351c9.jpg"}]}')},6591:function(e,t,o){"use strict";o("c572")},6649:function(e){e.exports=JSON.parse('{"name":"灵感创意","data":[{"title":"花瓣","describe":"创意灵感天堂，搜索、发现设计灵感、设计素材","href":"https://huaban.com/follow","logo":"https://st0.dancf.com/static/02/202306090204-51f4.png"},{"title":"Pinterest","describe":"全球最大的创意灵感图片分享站","href":"https://www.pinterest.com/","logo":"https://tse2-mm.cn.bing.net/th/id/OIP-C.JDDBRDjwuLk7Q5WdcaxIpAAAAA?pid=ImgDet&rs=1"},{"title":"Dribbble","describe":"国际知名设计站点","href":"https://dribbble.com/","logo":"https://icons-for-free.com/iconfiles/png/512/dribbble+logo+network+social+icon-1320086256852001411.png"},{"title":"Behance","describe":"全球领先的创意设计类聚合平台","href":"https://www.behance.net/","logo":"https://www.vectorico.com/wp-content/uploads/2018/02/Behance-Logo.png"},{"title":"站酷","describe":"设计师互动平台","href":"https://www.zcool.com.cn/","logo":"https://ts1.cn.mm.bing.net/th/id/R-C.5a8564182c7248bc2fb61ccac65ce752?rik=dyFWP6r4Um7jBQ&riu=http%3a%2f%2fpic.2265.com%2fupload%2f2022-10%2f20221081455134229.png&ehk=1wudfwSRKatGwJnKgsJlBpatljgXPUcR6Qhlx0anqqM%3d&risl=&pid=ImgRaw&r=0"},{"title":"创客贴","describe":"一款无需PS，会打字就能用的图片、视频编辑器","href":"https://www.chuangkit.com/","logo":"https://pic4.zhimg.com/v2-d8affd87a60aefdf0448c71ae0b1e000_xll.jpg"},{"title":"Canca可画","describe":"在线平面设计软件，免费提供设计模板和正版图片素材","href":"https://www.canva.cn/","logo":"https://tse3-mm.cn.bing.net/th/id/OIP-C.d9OyrJ9MN-e7nYzpnTQiuAAAAA?pid=ImgDet&rs=1"},{"title":"Portfolio","describe":"主要展示插画，风格清新","href":"https://boygirlparty.com/illo/","logo":"https://www.silhcdn.com/3/i/shapes/lg/6/7/d10876.jpg"},{"title":"Hippopx","describe":"免费图片库","href":"https://www.hippopx.com/","logo":"https://ts1.cn.mm.bing.net/th/id/R-C.f9ebac1e9ee391409caa45acf87a7854?rik=rXoZjafEVBRzzg&riu=http%3a%2f%2fwww.hepou.com%2fimages%2f2020%2f08%2fHippopxlogo.jpg&ehk=vcmDvgnGyFKCBlKIm3QkWmu3eryIEEogRXIrrvqCgKY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"},{"title":"freepik","describe":"免费矢量图、PSD、图片下载","href":"https://www.freepik.com/","logo":"https://www.trustenablement.com/wp-content/uploads/2022/05/freepik-300x300.jpg"}]}')},"6c41":function(e){e.exports=JSON.parse('{"name":"游戏引擎","data":[{"title":"ThreeJS","describe":"javascript 3D库","href":"https://threejs.org/","logo":"https://user-images.githubusercontent.com/30949385/58746251-e0446a00-8479-11e9-9396-4829edcf6afa.png"},{"title":"Cocos","describe":"开源免费跨平台游戏开发引擎","href":"https://www.cocos.com/","logo":"https://pic3.zhimg.com/v2-d04282b76375bb6c8b47710a4cc42a93_xll.jpg"}]}')},9870:function(e){e.exports=JSON.parse('{"name":"Icon","data":[{"title":"iconfont","logo":"https://www.qyxdh.cn/wp-content/uploads/2020/11/iconfont.jpg","href":"https://www.iconfont.cn/home/index","describe":"阿里图标库"},{"title":"Font Awesome","logo":"https://www.drupal.org/files/styles/grid-3-2x/public/project-images/font_awesome_logo.png?itok=MtqWCxXg","href":"http://www.fontawesome.com.cn/faicons/","describe":"字体图标库"},{"title":"IconPark","logo":"https://sotuw.com/file/icon/7PKUEVnRgE3N2kkfVnq2sxnY.png","href":"https://iconpark.oceanengine.com/home","describe":"字节跳动图标库"},{"title":"矢量logo","logo":"https://tse1-mm.cn.bing.net/th/id/OIP-C.DviTEXcLxNcqJFF8UEOUowAAAA?pid=ImgDet&rs=1","href":"https://worldvectorlogo.com/","describe":"知名logo矢量资源下载"},{"title":"IcoMoon","describe":"免费的开源字体图标库","href":"https://icomoon.io/#home","logo":"https://tse4-mm.cn.bing.net/th/id/OIP-C.RvyixXB5of6InfXn5gW8UwAAAA?pid=ImgDet&rs=1"},{"title":"LigatureSymbols","describe":"免费字体图标库","href":"https://c.runoob.com/more/LigatureSymbols/site/","logo":"https://cdn0.iconfinder.com/data/icons/text-editor-42/25/ligature-1024.png"}]}')},abc0:function(e){e.exports=JSON.parse('{"name":"社区","data":[{"title":"博客园","logo":"https://img2.baidu.com/it/u=468013898,4135718053&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500","href":"https://www.cnblogs.com/","describe":"开发者的网上家园"},{"title":"CSDN","logo":"https://tse2-mm.cn.bing.net/th/id/OIP-C.lR7AjKcM-eZFrCECv627gwAAAA?pid=ImgDet&rs=1","href":"https://www.csdn.net/","describe":"中文最大的技术社区"},{"title":"掘金","logo":"https://ss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/wisegame/wh=512,512/sign=4b70ada26ed9f2d320442cea98dea626/962bd40735fae6cd4b0d392203b30f2442a70f33.jpg","href":"https://juejin.cn/","describe":"一个帮助开发者成长的社区"},{"title":"开源中国","logo":"https://img11.18183.com/ku18183/wdjku/2021/6a0feedbc08cd7125233364240b24a1f.png","href":"https://www.oschina.net/","describe":"目前国内最大的开源技术社区"},{"title":"SF思否","logo":"https://tm-image.tianyancha.com/tm/24c99398523ae46828562b5250b066ef.jpg","href":"https://segmentfault.com/","describe":"思否是中国领先的开发者技术社区"},{"title":"StackOverflow","logo":"https://bpic.588ku.com/element_origin_min_pic/00/22/41/5756cea19f8ad25.jpg","href":"https://stackoverflow.com/","describe":"全球最大的技术问答社区"},{"title":"codePen","logo":"https://bpic.588ku.com/element_origin_min_pic/00/90/72/7056f065e2695f5.jpg","href":"https://codepen.io/your-work","describe":"在线前端代码编辑工具，内含很多分享实例"},{"title":"Staticfile CDN","describe":"提供免费、快速、开放的CDN服务，也提供开源库源接入的入口，让所有人都可以提交开源库","href":"https://www.staticfile.org/","logo":"https://www.vipbic.com/uploads/20190130/6619db28ba568cc75b2ebb6023f0e473.png"},{"title":"cdnjs","describe":"为开发人员提供流行的前端web开发资源，帮助代码库与框架开发者分发他们的项目","href":"https://www.staticfile.org/","logo":"https://www.bqrdh.com/favicon/get.php?url=https://cdnjs.com/"},{"title":"gitee","describe":"基于 Git 的代码托管和研发协作平台","href":"https://gitee.com/","logo":"https://pic2.zhimg.com/v2-77b1a31dc62d9e00abd0ea6cdaba5c83_xll.jpg"},{"title":"github","describe":"软件项目托管平台","href":"https://github.com/","logo":"https://tse3-mm.cn.bing.net/th/id/OIP-C.ubSILFSxqIBFGc7obpdB_QHaHw?pid=ImgDet&rs=1"},{"title":"慕课网","describe":"程序员的梦工厂","href":"http://www.imooc.com/","logo":"https://pic2.zhimg.com/50/8501315f73063a1d6c7517f62282995a_qhd.jpg"},{"title":"简书网","describe":"创作你的创作","href":"https://www.jianshu.com/","logo":"https://img.pcsoft.com.cn/soft/202101/092025-5ff3bed9c053e.jpg"}]}')},bc42:function(e){e.exports=JSON.parse('{"name":"图片专区","data":[{"title":"图片在线编辑","describe":"一款免费在线处理图片文件的网站","href":"https://www.iloveimg.com/zh-cn","logo":"https://innovacionufv.com/wp-content/uploads/2021/02/Logos-53.png"},{"title":"图片背景消除","describe":"快速AI自动抠图","href":"https://www.remove.bg/zh","logo":"https://images.saasworthy.com/removebg_9286_logo_1596691464_kzvqa.png"},{"title":"图片无损压缩","describe":"图片无损压缩","href":"https://tinypng.com/","logo":"https://img.wmzhe.top/uploadimg/mac/05/058f/058f1c9313741f08f86325384f1c2d40.png"},{"title":"Logo设计","describe":"快速设计出专属于你的logo","href":"https://www.designevo.com/cn/logo-maker/","logo":"https://super-monitoring.com/blog/wp-content/uploads/2018/10/designevo.png"},{"title":"生成透明ICO","describe":"在线生成透明ICO图标","href":"http://www.ico51.cn/","logo":"https://ts1.cn.mm.bing.net/th/id/R-C.782490713283d579eb4cb4c5277d9d05?rik=uGrDNgvo6tnA8Q&riu=http%3a%2f%2fwww.conquestcentre.org.uk%2fwp-content%2fuploads%2f2016%2f06%2fICO-Logo-768x768.jpg&ehk=14pzgizEhEw9FU9i1PkSyajllADwE7LEzBPoCSXklPc%3d&risl=&pid=ImgRaw&r=0"},{"title":"Pixabay","describe":"免费正版高清图片素材库","href":"https://pixabay.com/","logo":"https://img.51miz.com/Photo/2017/06/21/12/P836591_f4f5cfcdd3797c8687cd9740cdbaaaca.png"},{"title":"Pexels","describe":"可免费用于商业用途图片分享网站","href":"https://www.pexels.com/","logo":"https://hindimeinfo.com/wp-content/uploads/2019/12/pexels-logo-323.png"},{"title":"svg转png","describe":"SVG to PNG","href":"https://svgtopng.com/zh/","logo":"https://downloads.claris.com/M/962331746_WYdqUKwD47gvKO.png"},{"title":"Foter","describe":"拥有3亿张图片，图片免费下载","href":"https://foter.com/","logo":"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/jacz2dsjaectivufgu8t"},{"title":"Picjumbo","describe":"国外最佳图片素材图库，提供高分辨率的免费图片素材","href":"https://picjumbo.com/","logo":"https://www.xinxi114.net/wp-content/uploads/2021/01/3947622138.jpg"}]}')},bf15:function(e){e.exports=JSON.parse('{"name":"Css","data":[{"title":"animation.css","href":"https://animate.style/","logo":"https://tse2-mm.cn.bing.net/th/id/OIP-C.irPmT1L3VJRsxXHn0tVBkgHaHa?pid=ImgDet&rs=1"},{"title":"css形状分割线","describe":"自定义形状分隔器","logo":"https://img.ixintu.com/download/jpg/201912/d730b68113b63999446a5b6f71d43407.jpg!ys","href":"https://www.shapedivider.app/"},{"title":"波浪图","describe":"生成svg波浪图形","logo":"https://tse3-mm.cn.bing.net/th/id/OIP-C.fC88cViY8hyNpUNVY3drMAAAAA?pid=ImgDet&rs=1","href":"https://getwaves.io/"},{"title":"uiverse","describe":"css效果图分享","href":"https://uiverse.io/","logo":"https://api.iowen.cn/favicon/uiverse.io.png"}]}')},c572:function(e,t,o){},c720:function(e){e.exports=JSON.parse('{"name":"开发工具","data":[{"title":"Navicat","logo":"https://bugstack.cn/images/roadmap/04-%E7%8E%AF%E5%A2%83/042-%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/3-Navicat/images/Navicat.png","href":"https://www.navicat.com.cn/download/navicat-premium","describe":"数据库常用客户端工具"},{"title":"Postman","logo":"https://www2.itroom.fr/wp-content/uploads/2019/05/postman.png","href":"https://www.postman.com/downloads/","describe":"API接口测试神器"},{"title":"Fiddler","logo":"https://softradar.com/static/products/fiddler/fiddler-logo.jpg","href":"https://www.telerik.com/download/fiddler","describe":"最常见的网络抓包工具"},{"title":"EditPlus","logo":"https://www.xzji.com/upload/y20/08x24/1059075f432cfb5ff40.png","href":"https://www.editplus.com/download.html","describe":"文本编辑器"},{"title":"Beyond Compare","logo":"https://www.macupdate.com/images/icons512/50189.png","href":"https://www.scootersoftware.com/download.php","describe":"文件、代码比对工具"},{"title":"XMind","logo":"https://assets.xmind.net/www/assets/images/xmind2021/xmind2021-logo_512x512@2x-b5005db0ed.png","href":"https://www.xmind.cn/download/","describe":"思维导图设计工具"},{"title":"SnipPaste","logo":"https://ts1.cn.mm.bing.net/th/id/R-C.b1138e090107442ab086e2ec467cd5ca?rik=OER0SSgJ8ZCg1g&riu=http%3a%2f%2fwww.keem.cc%2fwp-content%2fthemes%2fWebStack-master%2flogos%2fdevTools%2fSnipaste.jpg&ehk=qiOneE3CXkTmGf6vhDgyX%2fV6g2o0GjDp%2fTsj8ffrrVw%3d&risl=&pid=ImgRaw&r=0","href":"https://www.snipaste.com/","describe":"便捷的截图工具"},{"title":"fastmock","logo":"https://pic2.zhimg.com/v2-5672c4c3ad6c206bed80a730962dca15_xs.jpg?source=172ae18b","href":"https://www.fastmock.site/#/login","describe":"mock在线模拟数据"},{"title":"mockjs","logo":"https://www.wenjiangs.com/wp-content/uploads/2019/12/mockjs-1.png","href":"http://mockjs.com/","describe":"生成随机数据，拦截ajax"},{"title":"Sourcetree","logo":"https://tse1-mm.cn.bing.net/th/id/OIP-C.15c6x2bUmWGdPOeFMgSHqgHaHa?pid=ImgDet&rs=1","href":"https://www.sourcetreeapp.com/","describe":"git客户端"},{"title":"SwitchHosts","logo":"https://tse4-mm.cn.bing.net/th/id/OIP-C.plv6oCohuxoh8ZHuQlrClQAAAA?pid=ImgDet&rs=1","href":"https://github.com/oldj/SwitchHosts/blob/master/README.zh_hans.md","describe":"管理/快速切换hosts的小工具","info":"https://raw.hellogithub.com/hosts"},{"title":"Xftp","logo":"https://pic.mairuan.com/gimg/1617932709829/606fc14d10db4.png","href":"https://www.xshell.com/zh/xftp/","describe":"文件传输"},{"title":"everything","logo":"https://img.wmzhe.top/uploadimg/mac/80/8029/80291e5df41c9d0ed2ed8a79a58cb638.png","href":"https://www.voidtools.com/zh-cn/","describe":"高效快捷的本地文件搜索工具"}]}')},cfa4:function(e){e.exports=JSON.parse('{"name":"图标专区","data":[{"title":"eCharts","describe":"一个基于 JavaScript 的开源可视化图表库","href":"https://echarts.apache.org/zh/index.html","logo":"https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-3/3/74-1024.png"},{"title":"D3.js","describe":"用于定制数据可视化的JavaScript库","href":"https://d3js.org/","logo":"https://tse2-mm.cn.bing.net/th/id/OIP-C.BD_xl0BXfCREKA6Vjq3yEAHaHa?pid=ImgDet&rs=1"},{"title":"Chartist.js","describe":"尖端的svg库","href":"https://gionkunz.github.io/chartist-js/","logo":"https://www.creative-tim.com/assets/tools/chartist-logo-3358ce27a6c813e344c7c7a36f61b72bedb33c7c74ac39a33448d266ae68ffa7.png"},{"title":"Recharts","describe":"基于React的组合式图表","href":"https://recharts.org/zh-CN","logo":"https://screenshots.imgix.net/recharts/recharts/pie-chart/1.6.2/5ceced9916ee3000144d62cb/ea294af8-63a3-42af-83a6-5e28dff81044.png"},{"title":"Highcharts","describe":"轻松的为网络和移动平台创建图表","href":"https://www.highcharts.com/","logo":"https://images.saasbase.cn/images/product/highcharts/logo/highcharts.png"}]}')},d170:function(e){e.exports=JSON.parse('{"name":"React","data":[{"title":"React","describe":"用于构建用户界面的 JavaScript 库","href":"https://react.dev/","logo":"https://ts1.cn.mm.bing.net/th/id/R-C.cd7bb6bec60f6799aa174b4e07b92ea4?rik=BHSaQZLldSrFEg&riu=http%3a%2f%2fpewlehh.com%2fimages%2freact.png&ehk=YveCdhSmivB2dp1byBMJFp7rWw3vDbrzY%2bp2FBLI3Zs%3d&risl=&pid=ImgRaw&r=0"},{"title":"UmiJS","describe":"插件化的企业级前端应用框架","href":"https://umijs.org/docs/guides/getting-started","logo":"https://gw.alipayobjects.com/zos/bmw-prod/598d14af-4f1c-497d-b579-5ac42cd4dd1f/k7bjua9c_w132_h130.png"},{"title":"DvaJS","describe":"基于React和redux的轻量级elm风格框架","href":"https://dvajs.com/","logo":"https://i-1.lanrentuku.com/2020/11/6/9232f107-4dac-4006-9c7e-e825df5e52e1.png?imageView2/2/w/500"},{"title":"React Router","describe":"React路由","href":"https://reactrouter.com/core/guides/quick-start","logo":"https://wp-img.daozhao.com.cn/2021/04/image-1617408402336.png"},{"title":"Ant Design","describe":"企业级产品设计体系，创造高效愉悦的工作体验","href":"https://ant-design.gitee.io/index-cn","logo":"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"},{"title":"Ant Design Pro","describe":"Ant Design官方实例","href":"https://preview.pro.ant.design/dashboard/analysis","logo":"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"},{"title":"Material-UI","describe":"实现了Google的Material Design 全新设计语言的React组件库","href":"https://mui.com/zh/","logo":"https://www.uimaker.com/uploads/userup/106857/1450S6495-A53.png"},{"title":"react-grid-layout","describe":"网格布局系统，可拖拽","href":"https://github.com/react-grid-layout/react-grid-layout","logo":"https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/f8/77/b2/f877b2c7-57fb-1b6a-7f55-edc7a825f92a/source/512x512bb.jpg"}]}')},d4db:function(e){e.exports=JSON.parse('{"data":[{"name":"常用","file":"common.json"},{"name":"Vue","file":"vue.json"},{"name":"React","file":"react.json"},{"name":"社区","file":"technology.json"},{"name":"Icon","file":"icon.json"},{"name":"Color","file":"color.json"},{"name":"Css","file":"css.json"},{"name":"开发工具","file":"tools.json"},{"name":"图片专区","file":"image.json"},{"name":"地图专区","file":"map.json"},{"name":"灵感创意","file":"inspiration.json"},{"name":"图表专区","file":"charts.json"},{"name":"游戏引擎","file":"engine.json"},{"name":"移动框架","file":"mobile.json"},{"name":"桌面应用","file":"desktop.json"}]}')},dc56:function(e){e.exports=JSON.parse('{"name":"移动框架","data":[{"title":"Ionic","describe":"接近原生的Html5移动App开发框架","href":"https://ionicframework.com/","logo":"https://tse4-mm.cn.bing.net/th/id/OIP-C.OoZmhetVOQ8UxmNAG8Jz8gHaHa?pid=ImgDet&rs=1"},{"title":"MUI","describe":"最接近原生APP体验的高性能前端框架","href":"https://dev.dcloud.net.cn/mui/","logo":"https://coala.es/nueva/wp-content/uploads/2020/04/Logo-Mui-e1585841440298.png"},{"title":"React Native","describe":"react跨平台移动应用开发框架","href":"https://reactnative.dev/","logo":"https://www.computerhope.com/jargon/r/react-native.jpg"},{"title":"Flutter","describe":"谷歌的移动 UI 框架，可以快速在 iOS 和 Android 上构建高质量的原生用户界面","href":"https://flutter.cn/","logo":"https://tse1-mm.cn.bing.net/th/id/OIP-C.4TPmJeIzRk78ci4_WCFxeQHaHa?pid=ImgDet&rs=1"},{"title":"Cordova","describe":"著名的跨平台应用程序开发框架，也可将静态页面打包成apk","href":"https://cordova.apache.org/","logo":"https://iconape.com/wp-content/png_logo_vector/cordova.png"},{"title":"Vant","describe":"轻量、可定制的移动端Vue组件库","href":"https://vant-ui.github.io/vant/#/zh-CN/","logo":"https://tse1-mm.cn.bing.net/th/id/OIP-C.LgNuPvrrT5QjxAOcUSfyJAAAAA?pid=ImgDet&rs=1"}]}')},e5df:function(e){e.exports=JSON.parse('{"name":"桌面应用","data":[{"title":"Electron","describe":"使用 JavaScript、 HTML 和 CSS 构建跨平台桌面应用程序","href":"https://www.electronjs.org/","logo":"https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-science-electron-symbol-png-icon-png-image_914518.jpg"},{"title":"Tauri","describe":"为多平台部署构建一个优化、安全且独立于前端的应用程序","href":"https://tauri.app/","logo":"https://raw.githubusercontent.com/tauri-apps/tauri/HEAD/app-icon.png"},{"title":"Wails","describe":"使用Go构建漂亮的跨平台应用程序","href":"https://wails.io/","logo":"https://avatars.githubusercontent.com/u/39746503?v=4&s=160"}]}')},ec2b:function(e){e.exports=JSON.parse('{"name":"常用","data":[{"title":"扩展迷","logo":"https://pic4.zhimg.com/v2-013471d1e9c3de2c1f4a3b4ba1be5ba1_l.jpg?source=3af55fa1","href":"https://extfans.com/","describe":"浏览器插件扩展"},{"title":"百度翻译","logo":"https://infinityicon.infinitynewtab.com/user-share-icon/c9f7546ad597dd7fb53e8129b6c07877.png","href":"https://fanyi.baidu.com/translate","describe":"百度翻译网站"},{"title":"草料二维码","logo":"https://img1.baidu.com/it/u=379176792,3402430394&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500","href":"https://cli.im/","describe":"解析/生成二维码"},{"title":"油猴","logo":"https://img.3dmgame.com/uploads/images/thumbnews/20191107/1573110086_895537.jpg","href":"https://www.userscript.zone/?utm_source=tm.net&utm_medium=index","describe":"油猴，浏览器插件扩展下载"},{"title":"Element-UI","logo":"https://src.pcsoft.com.cn/d/file/soft/yygj/yyqt/2020-10-15/8a05e89f1fa1da1ef125828e11c4f1e8.jpg","href":"https://element.eleme.cn/#/zh-CN/component/installation","describe":"基于 Vue 2.0 的桌面端组件库"},{"title":"Element-plus","logo":"https://src.pcsoft.com.cn/d/file/soft/yygj/yyqt/2020-10-15/8a05e89f1fa1da1ef125828e11c4f1e8.jpg","href":"https://element-plus.gitee.io/zh-CN/","describe":"基于 Vue 3，面向设计师和开发者的组件库"},{"title":"React","logo":"https://ts1.cn.mm.bing.net/th/id/R-C.cd7bb6bec60f6799aa174b4e07b92ea4?rik=BHSaQZLldSrFEg&riu=http%3a%2f%2fpewlehh.com%2fimages%2freact.png&ehk=YveCdhSmivB2dp1byBMJFp7rWw3vDbrzY%2bp2FBLI3Zs%3d&risl=&pid=ImgRaw&r=0","href":"https://react.dev/","describe":"React中文网站"},{"title":"Ant Design","logo":"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg","href":"https://ant-design.gitee.io/index-cn/","describe":"企业级产品设计体系，创造高效愉悦的工作体验"},{"title":"uni-app","describe":"使用Vue.js开发所有前端应用的框架","href":"https://uniapp.dcloud.io/README","logo":"https://pic2.zhimg.com/50/v2-cc91fdd3ece4c5591bfa51e6fea0062a_720w.jpg?source=54b3c3a5"},{"title":"uView","describe":"多平台快速开发的UI框架","href":"https://www.uviewui.com/","logo":"https://ts1.cn.mm.bing.net/th/id/R-C.657676ea51ad90a8b37ccb2b6dd2f806?rik=OfSr8%2bMEAG9Qzw&riu=http%3a%2f%2fv1.uviewui.com%2fcommon%2flogo.png&ehk=BnyyHwvEQHCqleVEPC5%2foCzjxQu3aaZHNvqX1%2buVgUw%3d&risl=&pid=ImgRaw&r=0"},{"title":"微信公众平台","describe":"微信公众平台，管理发布小程序和公众号","href":"https://mp.weixin.qq.com/","logo":"https://tse2-mm.cn.bing.net/th/id/OIP-C.8YpfmkLqxkoVj5gv7w1APgHaHa?pid=ImgDet&rs=1"},{"title":"微信开放文档","describe":"微信官方文档","href":"https://developers.weixin.qq.com/miniprogram/dev/framework/","logo":"https://tse2-mm.cn.bing.net/th/id/OIP-C.8YpfmkLqxkoVj5gv7w1APgHaHa?pid=ImgDet&rs=1"},{"title":"秀米","describe":"微信公众号开发平台","href":"https://xiumi.us/#/","logo":"https://ts1.cn.mm.bing.net/th/id/R-C.7c8581ccf52971103daa123cc18e32bd?rik=iJX4T8CaUQSqbg&riu=http%3a%2f%2fpic.danji100.com%2fupload%2f2022-4%2f2022414113687409.png&ehk=rDm3a9zdyPUY55J4m6dmic9aVWeubRDfRE8teKoHrZU%3d&risl=&pid=ImgRaw&r=0"},{"title":"吾爱破解论坛","describe":"专注软件安全与病毒分析的技术交流论坛","href":"https://www.52pojie.cn/","logo":"https://pic.qqtn.com/up/2019-9/20199898584588.png"},{"title":"QQ邮箱","describe":"QQ邮箱，常联系！","href":"https://wx.mail.qq.com/","logo":"https://p1.ssl.qhimg.com/t01a6b4799bac2e7c01.png"},{"title":"百度网盘","describe":"记录每一份热爱，让美好永远陪伴","href":"https://pan.baidu.com/login","logo":"https://img.zcool.cn/community/0114ed5945efb4a8012193a3dced37.png@1280w_1l_2o_100sh.png"},{"title":"阿里云盘","describe":"备份无忧，整理有序","href":"https://www.aliyundrive.com/","logo":"https://img.alicdn.com/imgextra/i3/O1CN01H1yruR1PgVJIh7dsD_!!6000000001870-0-tps-512-512.jpg"}]}')}}]);
//# sourceMappingURL=chunk-bf0d2b2c.6be1286c.js.map