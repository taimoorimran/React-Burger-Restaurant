(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports={Logo:"Logo_Logo__1RykQ"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},,,function(e,t,a){e.exports=a(61)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),i=(a(26),a(1)),s=a(2),o=a(4),u=a(3),d=a(5),m=a(16),h=a.n(m),p=a(17),f=a.n(p),g=(a(27),function(e){return r.a.createElement("div",{className:"Logo"},r.a.createElement("img",{src:f.a,alt:"My Burger"}))}),b=(a(28),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),E=(a(29),a(30),function(e){return r.a.createElement("li",{className:"NavigationItem"},r.a.createElement("a",{href:e.link,className:e.active?"active":null},e.children))}),v=function(){return r.a.createElement("ul",{className:"NavigationItems"},r.a.createElement(E,{link:"/",active:!0},"Burger Builder"),r.a.createElement(E,{link:"/"},"Checkout"))},y=(a(31),function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:h.a.Logo},r.a.createElement(g,null)),r.a.createElement("nav",null,r.a.createElement(v,null))))}),w=(a(32),a(33),function(e){return r.a.createElement("div",{className:"DrawerToggle",onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),k=function(e){return r.a.createElement("header",{className:"Toolbar"},r.a.createElement(w,{clicked:e.showSideDrawer}),r.a.createElement(g,null),r.a.createElement("nav",{className:"DesktopOnly"},r.a.createElement(v,null)))},O=(a(34),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState(function(e){return{showSideDrawer:!a.state.showSideDrawer}})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{showSideDrawer:this.sideDrawerToggleHandler}),r.a.createElement(y,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:"Content"},this.props.children))}}]),t}(n.Component)),j=a(7),S=a(18),N=a.n(S).a.create({baseURL:"https://react-my-burger-c7029.firebaseio.com/"}),C=(a(54),function(e){return r.a.createElement("button",{className:["Button",e.btnType].join(" "),onClick:e.clicked},e.children)}),P=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){console.log("[OrderSummary.js] componentDidUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null," Your Order"),r.a.createElement("p",null," A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price:",this.props.totalPrice)),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(C,{btnType:"Danger",clicked:this.props.cancelPurchaseHandler},"Cancel"),r.a.createElement(C,{btnType:"Success",clicked:this.props.continuePurchaseHandler},"Continue"))}}]),t}(n.Component),H=(a(55),a(56),function(e){return r.a.createElement("div",{className:"BuildControl"},r.a.createElement("div",{className:"Label"},e.label),r.a.createElement("button",{className:"Less",onClick:e.remove,disabled:e.disabled},"-"),r.a.createElement("button",{className:"More",onClick:e.add},"+"))}),D=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],B=function(e){return r.a.createElement("div",{className:"BuildControls"},r.a.createElement("p",null," Current Price: ",r.a.createElement("strong",null,e.totalPrice.toFixed(2))),D.map(function(t){return r.a.createElement(H,{key:t.label,label:t.label,add:function(){return e.add(t.type)},remove:function(){return e.remove(t.type)},disabled:e.disabledInfo[t.type]})}),r.a.createElement("button",{className:"OrderButton",disabled:!e.purchasable,onClick:e.purchaseHandler},"Order Now"))},T=a(19),I=(a(57),a(58),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:"BreadBottom"}," ");break;case"bread-top":e=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{className:"Seeds1"}," "),r.a.createElement("div",{className:"Seeds2"}," "));break;case"meat":e=r.a.createElement("div",{className:"Meat"}," ");break;case"cheese":e=r.a.createElement("div",{className:"Cheese"}," ");break;case"bacon":e=r.a.createElement("div",{className:"Bacon"}," ");break;case"salad":e=r.a.createElement("div",{className:"Salad"}," ");break;default:e=null}return e}}]),t}(n.Component)),L=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(T.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(I,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)});return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:"Burger"},r.a.createElement(I,{type:"bread-top"}),t,r.a.createElement(I,{type:"bread-bottom"}))},x=(a(59),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(e,t){console.log("model will update")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{show:this.props.show,clicked:this.props.cancelPurchaseHandler}),r.a.createElement("div",{className:"Modal",style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(n.Component)),F=(a(60),function(e){return r.a.createElement("div",{className:"Loader"},"Loading...")}),M={salad:.5,cheese:.4,meat:1.3,bacon:.7},A=function(e,t){return function(a){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(d.a)(n,a),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;t.interceptors.request.use(function(t){return e.setState({error:null}),t}),t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{show:this.state.error,cancelPurchaseHandler:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),n}(n.Component)}(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:!1},a.updatePurchaseState=function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);a.setState({purchasable:t>0}),console.log(t)},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(j.a)({},a.state.ingredients);n[e]=t;var r=a.state.totalPrice+M[e];a.setState({totalPrice:r,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){if(0!==a.state.ingredients[e]){var t=a.state.ingredients[e]-1,n=Object(j.a)({},a.state.ingredients);n[e]=t;var r=a.state.totalPrice-M[e];a.setState({totalPrice:r,ingredients:n}),a.updatePurchaseState(n)}},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.cancelPurchaseHandler=function(){a.setState({purchasing:!1})},a.continuePurchaseHandler=function(){a.setState({loading:!0});var e={ingredients:a.state.ingredients,price:a.state.totalPrice,customer:{name:"Max",address:{address:"Testreet 1",zipCode:"324324",country:"Germany"},email:"goxr3plus@gmail.com"},deliveryMethod:"fastest"};N.post("/orders.json",e).then(function(e){return a.setState({loading:!1,purchasing:!1})}).catch(function(e){return a.setState({loading:!1,purchasing:!1})})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(e){var t=this;this.setState({ingredients:{salad:1,bacon:1,cheese:1,meat:1}}),N.get("ingredients.json").then(function(e){console.log(t.state.ingredients),t.setState({ingredients:e.data})}).catch(function(e){t.setState({error:!0}),console.log(e)})}},{key:"render",value:function(){var e=Object(j.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",{style:{textAlign:"center"}}," Ingredients can't be loaded "):r.a.createElement(F,null);return null!==this.state.ingredients&&(n=r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{ingredients:this.state.ingredients}),r.a.createElement(B,{disabledInfo:e,add:this.addIngredientHandler,remove:this.removeIngredientHandler,totalPrice:this.state.totalPrice,purchasable:this.state.purchasable,purchaseHandler:this.purchaseHandler})),a=this.state.loading?r.a.createElement(F,null):r.a.createElement(P,{totalPrice:this.state.totalPrice.toFixed(2),ingredients:this.state.ingredients,cancelPurchaseHandler:this.cancelPurchaseHandler,continuePurchaseHandler:this.continuePurchaseHandler})),this.state.loading&&(a=r.a.createElement(F,null)),r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{show:this.state.purchasing,cancelPurchaseHandler:this.cancelPurchaseHandler},a),n)}}]),t}(n.Component),N),U=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(A,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[20,1,2]]]);
//# sourceMappingURL=main.f80f6285.chunk.js.map