(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,n){t.exports=n(37)},29:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(12),l=n.n(r),c=(n(29),n(2)),o=n(3),s=n(5),m=n(4),u=n(6),g=n(38),p=n(39),d=n(21),h=n(40),f=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(i)))).state={popMenu:"hidden nav-menu"},n._toggleMenu=function(){n.setState(function(){return"hidden nav-menu"===n.state.popMenu?{popMenu:"shown nav-menu"}:{popMenu:"hidden nav-menu"}})},n}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement(g.a,null,i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"mobile-nav"},i.a.createElement("button",{className:"toggle-button",onClick:this._toggleMenu},"hidden nav-menu"===this.state.popMenu?i.a.createElement("i",{className:"fas fa-bars"}):i.a.createElement("i",{className:"fas fa-times"}))),i.a.createElement("div",{className:"title-full"},i.a.createElement("h2",{className:"header-text"},"Malibu Landscaping & Lawn Service")),i.a.createElement("div",{className:"mobile-spacer"})),i.a.createElement("nav",{className:"full-nav"},i.a.createElement(h.a,{exact:!0,to:"/",className:"header-text",activeClassName:"current-page"},"Home"),i.a.createElement(h.a,{to:"/gallery",className:"header-text",activeClassName:"current-page"},"Photo Gallery"),i.a.createElement(h.a,{to:"/about",className:"header-text",activeClassName:"current-page"},"About Us"),i.a.createElement(h.a,{to:"/services",className:"header-text",activeClassName:"current-page"},"Services"))),i.a.createElement("nav",{className:this.state.popMenu},i.a.createElement(h.a,{exact:!0,to:"/",className:"mobile-link",activeClassName:"mobile-current-page",onClick:this._toggleMenu},"Home"),i.a.createElement(h.a,{to:"/gallery",className:"mobile-link",activeClassName:"mobile-current-page",onClick:this._toggleMenu},"Photo Gallery"),i.a.createElement(h.a,{to:"/about",className:"mobile-link",activeClassName:"mobile-current-page",onClick:this._toggleMenu},"About Us"),i.a.createElement(h.a,{to:"/services",className:"mobile-link",activeClassName:"mobile-current-page",onClick:this._toggleMenu},"Services"),i.a.createElement("ul",{className:"contact-list"},"Contact Us",i.a.createElement("li",null,i.a.createElement("a",{href:"tel://17049106379"},i.a.createElement("i",{className:"fas fa-phone-square"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"tel://9045358034"},i.a.createElement("i",{className:"fas fa-mobile"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"mailto:elpilotcpa@msn.com"},i.a.createElement("i",{className:"fas fa-envelope"})))))))}}]),e}(a.Component),b=n(8),v=function(t){var e=t.pic;return i.a.createElement("div",{className:"slide"},i.a.createElement("img",{className:"slide-pic",src:e,alt:e}))},x=n(9);function E(){var t=Object(b.a)(["\n\tposition: relative;\n\tmax-width: 500px;\n\tmax-height: 500px;\n\tmargin: 0 2rem;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\tborder-radius: 5%;\n\tborder: .1rem solid rgb(2, 60, 64);\n\tdiv {\n\t\tposition: relative;\n\n\t}\n"]);return E=function(){return t},t}var w=x.a.div(E()),y=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(m.a)(e).call(this,t))).updateScreen=function(){n.setState(function(){return{transValue:-n.slideWidth()*n.state.index}})},n.nextPicture=function(){n.state.index===n.state.pictures.length-1?n.setState(function(){return{index:0,transValue:0}}):n.setState(function(t){return{index:t.index+1,transValue:t.transValue-n.slideWidth()}})},n.slideWidth=function(){return document.querySelector(".slide").clientWidth},n.state={pictures:["./img/pic19.jpg","./img/pic20.jpg","./img/pic28.jpg","./img/pic13.jpg","./img/pic26.jpg"],index:0,transValue:0},n}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentWillUnmount",value:function(){clearInterval(this.slideShow)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateScreen),this.slideShow=setInterval(this.nextPicture,4e3)}},{key:"render",value:function(){return i.a.createElement(w,null,i.a.createElement("div",{className:"slide-frame",style:{transform:"translateX(".concat(this.state.transValue,"px)"),transition:"transform ease-out 0.45s"}},this.state.pictures.map(function(t){return i.a.createElement(v,{key:t,pic:t})})))}}]),e}(a.Component);function j(){var t=Object(b.a)(["\n\tmargin: 5.5rem .5rem 0 .5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 100vh;\n\t.angieslogo {\n\t\tbackground-color: rgb(41, 160, 54);\n\t\twidth: 110px;\n\t\tpadding: 5px;\n\t\tborder-radius: 5px;\n\t\tmargin-top: .5rem\n\t}\n\t.contact-home {\n\t\tdisplay: none;\n\t}\n\tp {\n\t\tmax-width: 300px;\n\t\tmargin: 0;\n\t}\n\t.angiesdiv {\n\t\ttext-align center;\n\t}\n\t.home-info {\n\t\tpadding-top: .5rem;\n\t}\n\t@media (min-width: 700px) {\n\t\tmargin: 6.5rem .5rem 10.4rem .5rem;\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t\tflex-wrap: wrap;\n\t\tfont-size: 1.3rem;\n\t\tline-height: 3rem;\n\t\t.angieslogo {\n\t\t\twidth: 120px;\n\t\t}\n\t\t.angieslogo:hover {\n\t\t\tbox-shadow: 0.1rem 0.1rem 0.1rem rgb(56, 228, 174),\n\t\t\t-0.1rem -0.1rem 0.1rem rgb(56, 228, 174),\n\t\t\t-0.1rem -0.1rem 0.1rem rgb(56, 228, 174),\n\t\t\t0.1rem 0.1rem 0.1rem rgb(56, 228, 174);\n\t\t}\n\t\t.contact-home {\n\t\t\tdisplay: flex;\n\t\t}\n\t\t.contact-home img {\n\t\t\theight: 13rem;\n\t\t\tpadding-left: 4rem;\n\t\t}\n\t\t.contact-home a {\n\t\t\ttext-shadow: 0.1rem 0.1rem 0.1rem rgb(56, 228, 174);\n\t\t}\n\t\t.contact-home a:hover {\n\t\t\ttext-shadow: 0.1rem 0.1rem 0.1rem rgb(56, 228, 174),\n\t\t\t\t-0.1rem -0.1rem 0.1rem rgb(56, 228, 174),\n\t\t\t\t-0.1rem -0.1rem 0.1rem rgb(56, 228, 174),\n\t\t\t\t0.1rem 0.1rem 0.1rem rgb(56, 228, 174);\n\t\t}\n\t\t.contact-links {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tpadding: 0 0 0 1rem;\n\t\t}\n\t\tp {\n\t\t\tmax-width: 600px;\n\t\t}\n\t\t.home-info {\n\t\t\tpadding: 0 0 0 2rem;\n\t\t}\t\t\n\t}\n"]);return j=function(){return t},t}var N=x.a.div(j()),O=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null,i.a.createElement(y,null),i.a.createElement("div",{className:"home-info"},i.a.createElement("p",null,"At Malibu Landscaping & Lawn Service, we take care to provide our customers high quality Landscaping services personalized for their unique needs. We are available for estimates that will fit your budget. Serving Mint Hill, Matthews and Charlotte since 2010."),i.a.createElement("div",{className:"angiesdiv"},i.a.createElement("p",null,"Check Out Our ",i.a.createElement("strong",null,"A")," Rating On"),i.a.createElement("a",{href:"https://member.angieslist.com/member/store/10667294/reviews",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:"./img/angieslogo.png",className:"angieslogo",alt:"angies list logo"}))),i.a.createElement("div",{className:"contact-home"},i.a.createElement("div",{className:"contact-links"},"Contact Us",i.a.createElement("a",{href:"tel://17049106379"},i.a.createElement("i",{className:"fas fa-phone-square"})," (704) 910-6379"),i.a.createElement("a",{href:"tel://9045358034"},i.a.createElement("i",{className:"fas fa-mobile"})," (904) 535-8034"),i.a.createElement("a",{href:"mailto:elpilotcpa@msn.com"},i.a.createElement("i",{className:"fas fa-envelope"})," elpilotcpa@msn.com")),i.a.createElement("img",{src:"./img/angieslist2014.png",alt:"angie list 2104"})))))}}]),e}(a.Component),k=function(t){return i.a.createElement("div",{className:"backArrow",onClick:t.prevSlide},i.a.createElement("i",{className:"fas fa-angle-left",title:"Back"}))},L=function(t){return i.a.createElement("div",{className:"nextArrow",onClick:t.nextSlide},i.a.createElement("i",{className:"fas fa-angle-right",title:"Next"}))};function S(){var t=Object(b.a)(["\ndisplay:flex;\nflex-wrap: wrap;\njustify-content: center;\n\n\t.thumb-gallery{\n\t\tdisplay: none;\n\t}\n\t@media (min-width: 1100px) {\n\t\t.thumb-gallery{\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\twidth: 500px;\n\t\t\tjustify-content: center;\n\t\t\tmargin: 1rem;\n\t\t\tborder-radius: 5%;\n\t\t\tborder: .1rem solid rgb(2, 60, 64);\n\t\t\tbackground-color: rgb(93, 253, 203);\n\t\t\tpadding: 1rem 0;\n\n\t\t}\n\t\t.thumb-print {\n\t\t\tmargin: .2rem;\n\t\t\twidth: 60px;\n\t\t\theight: 60px;\n\n\n\n\t\t}\n\t\t.thumb-print img{\n\t\t\twidth: 60px;\n\t\t\theight: 60px;\n\t\t\tborder-radius: 5%;\n\t\t\tborder: .1rem solid rgb(2, 60, 64);\n\n\t\t}\n\t\t.not {\n\t\t\ttransition: opacity ease-in-out .4s, transform ease-in-out .7s;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.selected {\n\t\t\topacity:.2;\n\t\t\ttransform: scale(.5);\n\t\t\ttransition: opacity ease-in-out .4s, transform ease-in-out .7s;\n\n\n\t\t}\n}\n\n"]);return S=function(){return t},t}var C=x.a.div(S()),M=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(m.a)(e).call(this,t))).jumpTo=function(t){n.setState({index:t,transValue:-n.slideWidth()*t})},n.updateScreen=function(){n.setState(function(){return{transValue:-n.slideWidth()*n.state.index}})},n.prevSlide=function(){0===n.state.index&&n.setState(function(){return{index:n.state.pictures.length-1,transValue:-n.slideWidth()*(n.state.pictures.length-1)}}),0!==n.state.index&&n.setState(function(t){return{index:t.index-1,transValue:t.transValue+n.slideWidth()}})},n.nextSlide=function(){n.state.index===n.state.pictures.length-1&&n.setState(function(){return{index:0,transValue:0}}),n.state.index!==n.state.pictures.length-1&&n.setState(function(t){return{index:t.index+1,transValue:t.transValue-n.slideWidth()}})},n.slideWidth=function(){return document.querySelector(".slide-frame").clientWidth},n.state={pictures:["./img/pic01.jpg","./img/pic02.jpg","./img/pic03.jpg","./img/pic04.jpg","./img/pic05.jpg","./img/pic06.jpg","./img/pic07.jpg","./img/pic08.jpg","./img/pic09.jpg","./img/pic10.jpg","./img/pic11.jpg","./img/pic12.jpg","./img/pic13.jpg","./img/pic14.jpg","./img/pic15.jpg","./img/pic16.jpg","./img/pic17.jpg","./img/pic18.jpg","./img/pic19.jpg","./img/pic20.jpg","./img/pic21.jpg","./img/pic22.jpg","./img/pic23.jpg","./img/pic24.jpg","./img/pic25.jpg","./img/pic26.jpg","./img/pic27.jpg","./img/pic28.jpg","./img/pic29.jpg","./img/pic30.jpg","./img/pic31.jpg","./img/pic35.jpg","./img/pic36.jpg","./img/pic37.jpg","./img/pic38.jpg","./img/pic39.jpg","./img/pic40.jpg","./img/pic41.jpg","./img/TN03.png","./img/TN04.png","./img/TN05.png","./img/TN06.png"],index:0,transValue:0},n}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateScreen)}},{key:"render",value:function(){var t=this;return i.a.createElement(C,null,i.a.createElement("div",{className:"slider"},i.a.createElement("div",{className:"slide-frame",style:{transform:"translateX(".concat(this.state.transValue,"px)"),transition:"transform ease-out 0.45s"}},this.state.pictures.map(function(t){return i.a.createElement(v,{key:t,pic:t})})),i.a.createElement(k,{prevSlide:this.prevSlide}),i.a.createElement(L,{nextSlide:this.nextSlide})),i.a.createElement("div",{className:"thumb-gallery"},this.state.pictures.map(function(e,n){return i.a.createElement("button",{key:n,className:"thumb-print",onClick:function(){return t.jumpTo(n)},disabled:t.index},i.a.createElement("img",{className:t.state.index===n?"selected":"not",src:e,alt:e}))})))}}]),e}(a.Component);function V(){var t=Object(b.a)(["\n\tmargin: 5rem .5rem 0 .5rem;\n\ttext-align: center;\n\theight: 100vh;\n\th2 {\n\t\tfont-size: .9rem;\n\t\ttext-align: center;\n\t\tmargin-bottom: 1rem;\t\t\n\t}\n\t.angiesdiv{\n\t\tpadding-top: 1rem;\n\t\t.angieslogo {\n\t\t\tbackground-color: rgb(41, 160, 54);\n\t\t\twidth: 110px;\n\t\t\tpadding: 5px;\n\t\t\tborder-radius: 5px;\n\t\t}\n\t}\n\t@media (min-width: 700px) {\n\t\tmargin: 5.5rem .5rem 9.05rem .5rem;;\n\t\theight: 100%;\n\t\th2{\n\t\t\tfont-size: 1.3rem;\n\t\t}\n\t\t.angiesdiv {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-self: center;\n\t\t\tpadding: 0;\n\t\t\th3 {\n\t\t\t\tfont-size: 1rem;\n\t\t\t\tmargin: 0\n\t\t\t\tpadding: .7rem 0 0 0;\n\t\t\t}\n\t\t}\n\t\t.angieslogo {\n\t\t\twidth: 100px;\n\t\t\tmargin: .3rem 0 0 .4rem;\n\t\t}\n\t\t.angieslogo:hover {\n\t\t\tbox-shadow: 0.1rem 0.1rem 0.1rem rgb(56, 228, 174),\n\t\t\t-0.1rem -0.1rem 0.1rem rgb(56, 228, 174),\n\t\t\t-0.1rem -0.1rem 0.1rem rgb(56, 228, 174),\n\t\t\t0.1rem 0.1rem 0.1rem rgb(56, 228, 174);\n\t\t}\n\t}\n"]);return V=function(){return t},t}var W=x.a.div(V()),P=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(W,null,i.a.createElement("h2",null,"Some examples of our latest work"),i.a.createElement(M,null),i.a.createElement("div",{className:"angiesdiv"},i.a.createElement("h3",null,"See More On"),i.a.createElement("a",{href:"https://member.angieslist.com/member/store/10667294/about",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:"./img/angieslogo.png",className:"angieslogo",alt:"angies list logo"})))))}}]),e}(a.Component);function z(){var t=Object(b.a)(["\n\tmargin-top: 4rem;\n\tp{\n\t\tpadding: 0 .5rem;\n\t\tline-height: 1.7rem;\n\t\tmax-width:300px;\n\t}\n\tsection {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t}\n\taside {\n\t\twidth:300px;\n\t\tpadding: 10px 0 4px 10px;\n\t\tborder-radius: 10px;\n\t\tborder: .1rem solid rgb(2, 60, 64);\n\t\tbackground-color: rgb(93, 253, 203);\n\t\timg {\n\t\t\twidth: 290px;\n\t\t\tborder-radius: 5px;\n\t\t}\n\t}\n\th2 {\n\t\ttext-align: center;\n\t}\n\t@media (min-width: 700px) {\n\t\tmargin: 5rem 0 5rem 0;\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t\tflex-wrap: wrap;\n\t\tp {\n\t\t\tmax-width: 500px;\n\t\t}\n\t\t.about-title{\n\t\t\tdisplay: none;\n\t\t}\n\t\tsection{\n\t\t\tmax-width: 500px;\n\t\t\tmargin: 1rem;\n\t\t}\n\t\taside {\n\t\t\tmargin: 2rem 0;\n\t\t\twidth: 500px;\n\t\t\timg {\n\t\t\t\twidth: 490px;\n\t\t\t}\n\t\t}\n\t}\n"]);return z=function(){return t},t}var I=x.a.div(z()),q=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(I,null,i.a.createElement("h2",{className:"about-title"},"About Us"),i.a.createElement("section",null,i.a.createElement("p",null,"Malibu Landscaping & Lawn Service is family-owned and operated in Charlotte, NC. Since opening in 2010, we\u2019ve treated every customer like they were a part of our family. Other companies may offer similar services, but our services come with a personal touch."),i.a.createElement("aside",null,i.a.createElement("img",{src:"./img/header.jpg",alt:"home sweet home"}))),i.a.createElement("section",null,i.a.createElement("p",null,"We use only the best quality products across the board. For example, our Volt Outdoor, Architectural and Security lights all come with a Lifetime transferable Warranty. Three factors that make VOLT\xae LED landscape and garden lighting so popular are luminosity, light quality and durability. VOLT\xae uses industry leading photometric techniques to ensure the maximum light output per watt consumed for each of our LED landscape lighting fixtures. VOLT\xae also makes use of the highest quality Light Emitting Diodes and driver technology to ensure each and every one of our LED landscape lighting fixtures produce consistent and natural light, making our LED fixtures indistinguishable from standard high quality halogen fixtures. Our super-efficient designs allow our all-in-one integrated LED landscape lighting fixtures to outlast the competition and for this reason be covered by our Lifetime transferrable manufacturer's warranty. LED Flood Lighting, Pathway Lights, In-Grade Lights , Deck & Patio Lighting, Outdoor Step Lighting, Hardscape Lighting are just a few of the many lighting options. As for our Belgard Hardscape products, they also come with a Lifetime Warranty. And finally, our seed and fertilizers are the absolute best available."))))}}]),e}(a.Component);function A(){var t=Object(b.a)(["\n\tmargin-top: 5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tsection {\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tmax-width: 400px;\n\t}\n\t.special {\n\t\twidth: 300px;\n\t\tborder: .1rem solid rgb(2, 60, 64);\n\t}\n\tul {\n\t\tmargin: 0\t\n\t}\n\th2 {\n\t\tfont-size: 1rem;\n\t\ttext-align: center;\n\t}\n\tul {\n\t\tlist-style: square;\n\t}\n\tli {\n\t\tpadding: .3rem 0 0 0;\n\t}\n\tp{\n\t\tpadding: 0 1rem;\n\t\tmax-width:300px;\n\t}\n\t.logo {\n\t\twidth: 150px;\n\t}\n\tdiv {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t}\n\t@media (min-width: 700px) {\n\t\tmargin-top: 9rem;\n\t\tfont-size: 1.3rem;\n\t\theight: 100%;\n\t\t.top-sec {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row-reverse;\n\t\t\tjustify-content: center;\n\t\t\tmax-width: 900px;\n\t\t\tdiv {\n\t\t\t\twidth: 40%\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.special {\n\t\t\t\tmargin-left: 1rem;\n\t\t\t\twidth: 400px;\n\t\t\t}\n\t\t}\n\t\t.bottom-sec {\n\t\t\tmax-width: 900px;\n\t\t\tmargin-top: 2rem;\n\t\t\tdiv {\n\t\t\t\twidth: 80%;\t\t\t\n\t\t\t}\n\t\t\t.logo {\n\t\t\t\twidth: 200px;\n\t\t\t}\n\t\t}\n\t\tp {\n\t\t\tmax-width: 800px;\n\t\t}\n\t}\n"]);return A=function(){return t},t}var F=x.a.div(A()),_=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(F,null,i.a.createElement("section",{className:"top-sec"},i.a.createElement("img",{src:"./img/special.PNG",alt:"ask about our lighting special",className:"special"}),i.a.createElement("div",null,i.a.createElement("h2",null,"Full-Service Landscaper specializing in"),i.a.createElement("ul",null,i.a.createElement("li",null,"New Landscaping"),i.a.createElement("li",null,"Replacement Landscaping\u200b"),i.a.createElement("li",null,"Landscape Lighting"),i.a.createElement("li",null,"Landscape Design"),i.a.createElement("li",null,"Mulching"),i.a.createElement("li",null,"Fertilizing"),i.a.createElement("li",null,"French Drains"),i.a.createElement("li",null,"Aluminum Fencing"),i.a.createElement("li",null,"Outdoor Lighting"),i.a.createElement("li",null,"Security Lighting"),i.a.createElement("li",null,"Pavers"),i.a.createElement("li",null,"Outdoor Fire Pits"),i.a.createElement("li",null,"Outdoor Patios"),i.a.createElement("li",null,"Outdoor Kitchens")))),i.a.createElement("section",{className:"bottom-sec"},i.a.createElement("div",null,i.a.createElement("p",null,"We take pride in our wide selection of quality products. All of the products we offer are from trusted brands with a Lifetime transferrable manufacturer's warranty."),i.a.createElement("p",null,"We utilize only premium products for our outdoor lighting, landscape lighting, architectural lighting, security lighting, outdoor hardscapes, paver patios, outdoor kitchens, outdoor fireplaces and fire pits including:"),i.a.createElement("a",{href:"https://www.belgard.com",target:"_balnk",rel:"noopener noreferrer"},i.a.createElement("img",{src:"./img/belgard.png",alt:"belgard logo",className:"logo"})),i.a.createElement("p",null,"Belgard Lifetime Paver and Materials. We only use the best! You can't go wrong with a lifetime manufacturer's warranty!"),i.a.createElement("a",{href:"https://www.voltlighting.com",target:"_balnk",rel:"noopener noreferrer"},i.a.createElement("img",{src:"./img/volt-logo.png",alt:"volt logo",className:"logo"})),i.a.createElement("p",null,"Volt Lifetime Lighting Products: heavy, durable, waterproof, beautiful, life-long-lasting and impressive fixtures. Have us design and install your beautiful lights and never, ever have to worry about them again.")),i.a.createElement("div",null,i.a.createElement("a",{href:"https://www.icpi.org/",target:"_balnk",rel:"noopener noreferrer"},i.a.createElement("img",{src:"./img/ICPI-logo.png",alt:"I C P I logo",className:"logo"})),i.a.createElement("p",null,"ICPI Paver certification note: Compaction of the soil subgrade and aggregate base materials are essential to the long-term performance of interlocking concrete pavements."),i.a.createElement("p",null,"Installation steps typically include job planning, layout, excavating and compacting the soil subgrade, applying geotextiles (optional), spreading and compacting the sub-base and/or base aggregates, constructing edge, restraints, placing and screeding the bedding sand, placing concrete pavers, compacting concrete pavers, sweeping in jointing sand and final compaction. It is imperative that your installer is fully ICPI certified.")))))}}]),e}(a.Component);function D(){var t=Object(b.a)(["\npostion: absolute;\nbottom: 0;\nwidth: 100%;\nbackground-color: rgb(56, 228, 174);\nz-index: 999;\nfooter{\n\tdisplay:flex;\n\tjustify-content: center;\n\tp {\n\t\ttext-indent: 0;\n\t\tmargin-right: .5rem;\n\t}\n}\n.reactdiv {\n\tdisplay:none;\n}\n.justindiv {\n\tdisplay: flex;\n\talign-content: center;\n\tfont-size: 1rem;\n}\n\t@media (min-width: 1100px) {\n\t\tfont-size: 1rem;\n\t\tfooter {\n\t\t\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\t}\n\t\tp {\n\t\t\tmargin:10px;\n\t\t}\n\t\t.reactdiv {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\theight: 40px;\n\t\t\tmargin-left: .5rem;\n\t\t}\n\t\t.justindiv {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\theight: 40px;\n\t\t\tmargin-right: .5rem;\n\t\t}\n\t\timg {\n\t\t\t\twidth: 30px;\n\t\t\t\theight: 30px;\n\t\t\t\tanimation: rotate 10s infinite linear;\n\t\t}\n\t\t.imgdiv {\n\t\t\tdisplay: flex;\n\t\t\talign-self: center;\n\t\t}\n\t@keyframes rotate {\n\t\tfrom {\n\t\t\ttransform: rotate(0deg)\n\t\t}\n\t\tto {\n\t\t\ttransform: rotate(360deg)\n\t\t}\n\t}\n"]);return D=function(){return t},t}var T=x.a.div(D()),B=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement(T,null,i.a.createElement("footer",null,i.a.createElement("div",{className:"reactdiv"},i.a.createElement("p",null,"Powered by ",i.a.createElement("a",{href:"https://reactjs.org/",target:"_balnk",rel:"noopener noreferrer"},"React")),i.a.createElement("div",{className:"imgdiv"},i.a.createElement("img",{src:"./img/reactlogo.png",alt:"react logo"}))),i.a.createElement("div",{className:"justindiv"},i.a.createElement("p",null,"Built by ",i.a.createElement("a",{href:"https://www.justin-oliver.com",target:"_balnk",rel:"noopener noreferrer"},"Justin Lee")))))}}]),e}(a.Component),H=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null),i.a.createElement(g.a,null,i.a.createElement("main",{className:"content"},i.a.createElement(p.a,null,i.a.createElement(d.a,{exact:!0,path:"/",component:O}),i.a.createElement(d.a,{exact:!0,path:"/gallery",component:P}),i.a.createElement(d.a,{path:"/about",component:q}),i.a.createElement(d.a,{path:"/services",component:_})))),i.a.createElement(B,null))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.db3cb53b.chunk.js.map