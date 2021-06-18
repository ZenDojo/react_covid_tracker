(this.webpackJsonpcovid_tracker=this.webpackJsonpcovid_tracker||[]).push([[0],{103:function(t,e,a){t.exports={container:"Chart_container__2pJsM"}},104:function(t,e,a){t.exports={formControl:"CountryPicker_formControl__32nCT"}},22:function(t,e,a){t.exports={container:"Cards_container__2WUrk",infected:"Cards_infected__3Iou5",recovered:"Cards_recovered__38xcs",deaths:"Cards_deaths__1KoSH"}},243:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(95),c=a.n(r),o=a(10),s=a.n(o),i=a(17),u=a(3),d=a(4),l=a(7),p=a(6),j=a(261),f=a(265),h=a(262),b=a(263),v=a(22),x=a.n(v),m=a(46),O=a.n(m),g=a(47),y=a.n(g),C=a(2),_=function(t){var e=t.data,a=e.confirmed,n=e.recovered,r=e.deaths,c=e.lastUpdate;return a?Object(C.jsx)("div",{className:x.a.container,children:Object(C.jsxs)(j.a,{container:!0,spacing:3,justify:"center",children:[Object(C.jsx)(j.a,{item:!0,component:f.a,className:y()(x.a.test,x.a.infected),xs:12,md:3,children:Object(C.jsxs)(h.a,{children:[Object(C.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(C.jsx)(b.a,{variant:"h5",children:Object(C.jsx)(O.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(C.jsx)(b.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(C.jsx)(b.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(C.jsx)(j.a,{item:!0,component:f.a,className:y()(x.a.test,x.a.recovered),xs:12,md:3,children:Object(C.jsxs)(h.a,{children:[Object(C.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(C.jsx)(b.a,{variant:"h5",children:Object(C.jsx)(O.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(C.jsx)(b.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(C.jsx)(b.a,{variant:"body2",children:"Number of recoveries from COVID-19"})]})}),Object(C.jsx)(j.a,{item:!0,component:f.a,className:y()(x.a.test,x.a.deaths),xs:12,md:3,children:Object(C.jsxs)(h.a,{children:[Object(C.jsx)(b.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(C.jsx)(b.a,{variant:"h5",children:Object(C.jsx)(O.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(C.jsx)(b.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(C.jsx)(b.a,{variant:"body2",children:"Number of deaths caused by COVID-19"})]})})]})}):"Loading"},w=a(45),k=a(48),S=a.n(k),D="https://covid19.mathdro.id/api",N=function(){var t=Object(i.a)(s.a.mark((function t(e){var a,n,r,c,o,i,u,d;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a="https://covid19.mathdro.id/api",e&&(n="".concat(a,"/countries/").concat(e)),t.prev=3,t.next=6,S.a.get(n);case 6:return r=t.sent,c=r.data,o=c.confirmed,i=c.recovered,u=c.deaths,d=c.lastUpdate,t.abrupt("return",{confirmed:o,recovered:i,deaths:u,lastUpdate:d});case 15:t.prev=15,t.t0=t.catch(3),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(e){return t.apply(this,arguments)}}(),I=function(){var t=Object(i.a)(s.a.mark((function t(){var e,a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get("".concat(D,"/daily"));case 3:return e=t.sent,a=e.data,n=a.map((function(t){return{confirmed:t.confirmed.total,deaths:t.deaths.total,date:t.reportDate}})),t.abrupt("return",n);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),B=function(){var t=Object(i.a)(s.a.mark((function t(){var e,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get("".concat(D,"/countries"));case 3:return e=t.sent,a=e.data.countries,t.abrupt("return",a.map((function(t){return t.name})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),J=a(66),U=a(103),V=a.n(U),A=(a(21),function(t){var e=t.data,a=t.country,r=Object(n.useState)([]),c=Object(w.a)(r,2),o=c[0],u=c[1];Object(n.useEffect)((function(){(function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=u,t.next=3,I();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var d=o.length?Object(C.jsx)(J.b,{data:{labels:o.map((function(t){return t.date})),datasets:[{data:o.map((function(t){return t.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:o.map((function(t){return t.deaths})),label:"deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,l=e.confirmed?Object(C.jsx)(J.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[e.confirmed.value,e.recovered.value,e.deaths.value]}]},options:{legends:{display:!1},title:{display:!0,text:"Current state in ".concat(a)}}}):null;return Object(C.jsx)("div",{className:V.a.container,children:a?l:d})}),E=a(266),M=a(264),R=a(104),W=a.n(R),G=function(t){var e=t.handleCountryChange,a=Object(n.useState)([]),r=Object(w.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){(function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o,t.next=3,B();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[o]),console.log(c),Object(C.jsx)(E.a,{className:W.a.formControls,children:Object(C.jsxs)(M.a,{defaultValue:"",onChange:function(t){return e(t.target.value)},children:[Object(C.jsx)("option",{value:"",children:"Global"}),c.map((function(t,e){return Object(C.jsx)("option",{value:t,children:t},e)}))]})})},H=a(65),K=a.n(H),L=a.p+"static/media/image.9e5d4fc7.png",P=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={data:{},country:""},t.handleCountryChange=function(){var e=Object(i.a)(s.a.mark((function e(a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(a);case 2:n=e.sent,t.setState({data:n,country:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=Object(i.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:e=t.sent,this.setState({data:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.data,a=t.country;return Object(C.jsxs)("div",{className:K.a.container,children:[Object(C.jsx)("img",{className:K.a.image,src:L,alt:"Covid19"}),Object(C.jsx)(_,{data:e}),Object(C.jsx)(G,{handleCountryChange:this.handleCountryChange}),Object(C.jsx)(A,{data:e,country:a})]})}}]),a}(n.Component);c.a.render(Object(C.jsx)(P,{}),document.getElementById("root"))},65:function(t,e,a){t.exports={container:"App_container__3xC4m",image:"App_image__3XrWJ"}}},[[243,1,2]]]);
//# sourceMappingURL=main.cbbf691f.chunk.js.map