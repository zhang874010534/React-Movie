(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{118:function(e,t,a){e.exports={logo:"App_logo__2PMk9"}},132:function(e,t,a){e.exports=a(208)},137:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(3),r=a.n(i),c=(a(137),a(15)),s=a(16),l=a(18),m=a(17),u=a(19),h=a(30),p=a(35),d=a(118),f=a.n(d),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"about\u7ec4\u4ef6")}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"home")}}]),t}(n.Component),b=a(211),E=a(209),y=a(215),j=a(66),k=a.n(j),O=a(90),w=a.n(O),C=a(212),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).goDetail=function(){window.location.hash="#/movie/detail/"+a.props.id},a.state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:w.a.container,onClick:this.goDetail},o.a.createElement("img",{src:this.props.images.small,alt:"",className:w.a.img}),o.a.createElement("h4",null,"\u7535\u5f71\u540d\u79f0\uff1a",this.props.title),o.a.createElement("h4",null,"\u4e0a\u6620\u5e74\u4efd\uff1a",this.props.year,"\u5e74"),o.a.createElement("h4",null,"\u7535\u5f71\u7c7b\u578b\uff1a",this.props.genres.join(",")),o.a.createElement(C.a,{disabled:!0,defaultValue:this.props.rating.average/2}))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){window.location.hash="#/movie/"+a.props.match.params.type+"/"+e},a.state={movieList:[],page:parseInt(a.props.match.params.page)||1,pageCount:10,total:0,isLoading:!0,movieType:a.props.match.params.type},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.axiosRequest()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},this.renderList(),this.state.movieList&&this.state.movieList.map((function(e,t){return o.a.createElement(x,Object.assign({},e,{key:t}))}))),o.a.createElement(b.a,{defaultCurrent:this.state.page,pageSize:10,total:this.state.total||0,onChange:this.onChange}))}},{key:"componentDidUpdate",value:function(e,t){this.props!==e&&(this.setState({isLoading:!0,movieList:[]}),this.axiosRequest())}},{key:"renderList",value:function(){return this.state.isLoading?o.a.createElement("div",{style:{flexGrow:1}},o.a.createElement(E.a,{tip:"Loading..."},o.a.createElement(y.a,{message:"\u6b63\u5728\u8bf7\u6c42\u7535\u5f71\u5217\u8868",description:"\u7cbe\u5f69\u5185\u5bb9\uff0c\u9a6c\u4e0a\u5448\u73b0",type:"info"}))):void 0}},{key:"axiosRequest",value:function(){var e=this,t=this.props.match.params,a=(t.page-1)*this.state.pageCount;k()("https://api.douban.com/v2/movie/".concat(t.type,"?apikey=0df993c66c0c636e29ecbb5344252a4a&start=").concat(a,"&count=").concat(this.state.pageCount)).then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,movieList:t.subjects,total:t.total})}))}}]),t}(n.Component),L=a(214),I=a(8),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).goBack=function(){a.props.history.goBack()},a.flagRender=function(){return a.state.isOk?o.a.createElement("div",null,o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("h1",null,a.state.info.title),o.a.createElement("img",{src:a.state.images,alt:""})),o.a.createElement("p",{style:{textIndent:"2em",lineHeight:"30px"}},a.state.info.summary)):o.a.createElement("div",null)},a.state={info:{},isOk:"false",images:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(L.a,{type:"primary",onClick:this.goBack},o.a.createElement(I.a,{type:"left"}),"Backward"),this.flagRender())}},{key:"componentDidMount",value:function(){var e=this;k()("https://api.douban.com/v2/movie/subject/"+this.props.match.params.id+"?apikey=0df993c66c0c636e29ecbb5344252a4a").then((function(e){return e.json()})).then((function(t){e.setState({info:t,images:t.images.large,isOk:"true"})}))}}]),t}(n.Component),M=a(210),R=a(213),S=M.a.Content,B=M.a.Sider,H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(M.a,{style:{height:"100%"}},o.a.createElement(B,{width:200,style:{background:"#fff"}},o.a.createElement(R.a,{mode:"inline",defaultSelectedKeys:[window.location.hash.split("/")[2]||"in_theaters"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0}},o.a.createElement(R.a.Item,{key:"in_theaters"},o.a.createElement(h.b,{to:"/movie/in_theaters/1"},"\u6b63\u5728\u70ed\u6620")),o.a.createElement(R.a.Item,{key:"coming_soon"},o.a.createElement(h.b,{to:"/movie/coming_soon/1"},"\u5373\u5c06\u4e0a\u6620")),o.a.createElement(R.a.Item,{key:"top250"},o.a.createElement(h.b,{to:"/movie/top250/1"},"Top250")))),o.a.createElement(S,{style:{background:"#fff",padding:10,margin:0,minHeight:280}},o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/movie/detail/:id",component:D}),o.a.createElement(p.a,{path:"/movie/:type/:page",component:_}))))}},{key:"componentDidUpdate",value:function(){}}]),t}(n.Component),N=(a(207),M.a.Header),W=M.a.Content,q=M.a.Footer,A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement(M.a,{className:"layout",style:{height:"100%"}},o.a.createElement(N,null,o.a.createElement("div",{className:f.a.logo}),o.a.createElement(R.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[window.location.hash.split("/")[1]||"home"],style:{lineHeight:"64px"}},o.a.createElement(R.a.Item,{key:"home"},o.a.createElement(h.b,{to:"/home"},"\u9996\u9875")),o.a.createElement(R.a.Item,{key:"movie"},o.a.createElement(h.b,{to:"/movie/in_theaters/1"},"\u7535\u5f71")),o.a.createElement(R.a.Item,{key:"about"},o.a.createElement(h.b,{to:"/about"},"\u5173\u4e8e")))),o.a.createElement(W,{style:{flexGrow:1}},o.a.createElement(p.a,{path:"/home",component:g}),o.a.createElement(p.a,{path:"/about",component:v}),o.a.createElement(p.a,{path:"/movie",component:H})),o.a.createElement(q,{style:{textAlign:"center"}},"React-Movie \xa92020 Created by Zhang Ce")),",")}},{key:"componentDidMount",value:function(){}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},90:function(e,t,a){e.exports={container:"MovieItem_container__rQ0fr",img:"MovieItem_img__3oEWv"}}},[[132,1,2]]]);
//# sourceMappingURL=main.ba97dd2f.chunk.js.map