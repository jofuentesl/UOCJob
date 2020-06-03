function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ffW3:function(e,t,r){"use strict";r.r(t),r.d(t,"OffersModule",(function(){return G}));var n=r("ofXK"),b=r("PCNd"),c=r("tyNb"),i=r("dnXt"),a=r("OVFJ"),s=r("fXoL"),o=r("kt0X"),f=r("XhcP"),u=r("XiUz"),d=r("f0Cb"),l=r("Wp6s"),p=r("bTqV"),m=r("NFeN"),h=function(e){return[e]};function X(e,t){if(1&e&&(s.Xb(0,"tr",8),s.Xb(1,"td"),s.Bc(2),s.Wb(),s.Xb(3,"td"),s.Bc(4),s.Wb(),s.Xb(5,"td"),s.Bc(6),s.Wb(),s.Xb(7,"td"),s.Bc(8),s.Wb(),s.Xb(9,"td"),s.Bc(10),s.Wb(),s.Xb(11,"td"),s.Bc(12),s.Wb(),s.Xb(13,"td"),s.Bc(14),s.Wb(),s.Xb(15,"td"),s.Xb(16,"div",9),s.Xb(17,"div",10),s.Xb(18,"button",11),s.Xb(19,"a",12),s.Xb(20,"mat-icon"),s.Bc(21,"visibility"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&e){var r=t.$implicit;s.Fb(2),s.Cc(r.job.name),s.Fb(2),s.Cc(r.company.name),s.Fb(2),s.Cc(r.category.name),s.Fb(2),s.Cc(r.date),s.Fb(2),s.Cc(r.province.name),s.Fb(2),s.Cc(r.municipe.name),s.Fb(2),s.Cc(r.subscribe?"S\xed":"No"),s.Fb(5),s.oc("routerLink",s.qc(8,h,r.id))}}function W(e,t){if(1&e&&(s.Xb(0,"tr",8),s.Xb(1,"td"),s.Bc(2),s.Wb(),s.Xb(3,"td"),s.Bc(4),s.Wb(),s.Xb(5,"td"),s.Bc(6),s.Wb(),s.Xb(7,"td"),s.Bc(8),s.Wb(),s.Xb(9,"td"),s.Bc(10),s.Wb(),s.Xb(11,"td"),s.Bc(12),s.Wb(),s.Wb()),2&e){var r=t.$implicit;s.Fb(2),s.Cc(r.job.name),s.Fb(2),s.Cc(r.company.name),s.Fb(2),s.Cc(r.category.name),s.Fb(2),s.Cc(r.date),s.Fb(2),s.Cc(r.province.name),s.Fb(2),s.Cc(r.municipe.name)}}var y,v=((y=function(){function e(){_classCallCheck(this,e),this.offersStudy=[],this.offersOther=[]}return _createClass(e,[{key:"ngOnChanges",value:function(e){e.user&&e.offers&&this.selectOffers()}},{key:"selectOffers",value:function(){var e=this.user.studies,t=this.user.offers;this.offersStudy=this.offers.filter((function(t){return e.some((function(e){return e.uid===t.category.uid}))})).map((function(e){var r=!!t.find((function(t){return t.id===e.id}));return Object.assign(Object.assign({},e),{subscribe:r})})),this.offersOther=this.offers.filter((function(t){return e.every((function(e){return e.uid!==t.category.uid}))}))}}]),e}()).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=s.Lb({type:y,selectors:[["app-offers-list"]],inputs:{user:"user",offers:"offers"},features:[s.Db()],decls:59,vars:2,consts:[["fxLayout","column","fxLayoutGap","30px",1,"container"],[1,"row"],["fxLayoutGap","30px","fxLayoutAlign","center",1,"cold-md-12"],[1,"card-header"],[1,"material-icons"],[1,"table-responsive"],[1,"text-primary"],["fxLayoutGap","30px",4,"ngFor","ngForOf"],["fxLayoutGap","30px"],[1,"flex-container"],[1,"button-container"],["mat-mini-fab","","color","primary"],[3,"routerLink"]],template:function(e,t){1&e&&(s.Xb(0,"div",0),s.Xb(1,"div",1),s.Xb(2,"div",2),s.Xb(3,"mat-card"),s.Xb(4,"mat-card-header",3),s.Xb(5,"mat-card-title"),s.Xb(6,"i",4),s.Bc(7,"school"),s.Wb(),s.Bc(8," Complies with the Degree"),s.Wb(),s.Wb(),s.Xb(9,"mat-card-content"),s.Xb(10,"div",5),s.Xb(11,"table"),s.Xb(12,"thead",6),s.Xb(13,"tr"),s.Xb(14,"th"),s.Bc(15,"Job"),s.Wb(),s.Xb(16,"th"),s.Bc(17,"Company"),s.Wb(),s.Xb(18,"th"),s.Bc(19,"Category"),s.Wb(),s.Xb(20,"th"),s.Bc(21,"Date"),s.Wb(),s.Xb(22,"th"),s.Bc(23,"Province"),s.Wb(),s.Xb(24,"th"),s.Bc(25,"Municipe"),s.Wb(),s.Xb(26,"th"),s.Bc(27,"Subscribe"),s.Wb(),s.Xb(28,"th"),s.Bc(29,"Actions"),s.Wb(),s.Wb(),s.Wb(),s.Xb(30,"tbody"),s.Ac(31,X,22,10,"tr",7),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(32,"div",1),s.Xb(33,"div",2),s.Xb(34,"mat-card"),s.Xb(35,"mat-card-header",3),s.Xb(36,"mat-card-title"),s.Xb(37,"i",4),s.Bc(38,"work"),s.Wb(),s.Bc(39," Others offers "),s.Wb(),s.Wb(),s.Xb(40,"mat-card-content"),s.Xb(41,"div",5),s.Xb(42,"table"),s.Xb(43,"thead",6),s.Xb(44,"tr"),s.Xb(45,"th"),s.Bc(46,"Job"),s.Wb(),s.Xb(47,"th"),s.Bc(48,"Company"),s.Wb(),s.Xb(49,"th"),s.Bc(50,"Category"),s.Wb(),s.Xb(51,"th"),s.Bc(52,"Date"),s.Wb(),s.Xb(53,"th"),s.Bc(54,"Province"),s.Wb(),s.Xb(55,"th"),s.Bc(56,"Municipe"),s.Wb(),s.Wb(),s.Wb(),s.Xb(57,"tbody"),s.Ac(58,W,13,6,"tr",7),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&e&&(s.Fb(31),s.oc("ngForOf",t.offersStudy),s.Fb(27),s.oc("ngForOf",t.offersOther))},directives:[u.c,u.d,u.b,l.a,l.e,l.g,l.d,n.k,p.b,c.h,m.a],encapsulation:2}),y),C=function(e){return["/admin/offers/",e]};function g(e,t){if(1&e&&(s.Xb(0,"tr"),s.Xb(1,"td"),s.Bc(2),s.Wb(),s.Xb(3,"td"),s.Bc(4),s.Wb(),s.Xb(5,"td"),s.Bc(6),s.Wb(),s.Xb(7,"td"),s.Bc(8),s.Wb(),s.Xb(9,"td"),s.Bc(10),s.Wb(),s.Xb(11,"td"),s.Bc(12),s.Wb(),s.Xb(13,"td"),s.Xb(14,"div",7),s.Xb(15,"div",8),s.Xb(16,"button",9),s.Xb(17,"a",10),s.Xb(18,"mat-icon"),s.Bc(19,"search"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&e){var r=t.$implicit;s.Fb(2),s.Cc(r.job.name),s.Fb(2),s.Cc(r.company.name),s.Fb(2),s.Cc(r.category.name),s.Fb(2),s.Cc(r.date),s.Fb(2),s.Cc(r.province.name),s.Fb(2),s.Cc(r.municipe.name),s.Fb(5),s.oc("routerLink",s.qc(7,C,r.id))}}var B,O=((B=function(){function e(){_classCallCheck(this,e),this.offers=[]}return _createClass(e,[{key:"ngOnChanges",value:function(){this.offers=this.user.offers}}]),e}()).\u0275fac=function(e){return new(e||B)},B.\u0275cmp=s.Lb({type:B,selectors:[["app-offers-profile"]],inputs:{user:"user"},features:[s.Db()],decls:29,vars:1,consts:[[1,"row"],["fxLayoutGap","30px","fxLayoutAlign","center",1,"cold-md-12"],[1,"card-header"],[1,"material-icons"],[1,"table-responsive"],[1,"text-primary"],[4,"ngFor","ngForOf"],["fxLayoutAlign","end",1,"flex-container"],[1,"button-container"],["mat-mini-fab","","color","primary"],[3,"routerLink"]],template:function(e,t){1&e&&(s.Xb(0,"div",0),s.Xb(1,"div",1),s.Xb(2,"mat-card"),s.Xb(3,"mat-card-header",2),s.Xb(4,"mat-card-title"),s.Xb(5,"i",3),s.Bc(6,"work"),s.Wb(),s.Bc(7,"My Offers"),s.Wb(),s.Wb(),s.Xb(8,"mat-card-content"),s.Xb(9,"div",4),s.Xb(10,"table"),s.Xb(11,"thead",5),s.Xb(12,"tr"),s.Xb(13,"th"),s.Bc(14,"Job"),s.Wb(),s.Xb(15,"th"),s.Bc(16,"Company"),s.Wb(),s.Xb(17,"th"),s.Bc(18,"Category"),s.Wb(),s.Xb(19,"th"),s.Bc(20,"Date"),s.Wb(),s.Xb(21,"th"),s.Bc(22,"Province"),s.Wb(),s.Xb(23,"th"),s.Bc(24,"Municipe"),s.Wb(),s.Xb(25,"th"),s.Bc(26,"Accions"),s.Wb(),s.Wb(),s.Wb(),s.Xb(27,"tbody"),s.Ac(28,g,20,9,"tr",6),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&e&&(s.Fb(28),s.oc("ngForOf",t.offers))},directives:[u.d,u.b,l.a,l.e,l.g,l.d,n.k,p.b,c.h,m.a],encapsulation:2}),B);function k(e,t){if(1&e&&(s.Sb(0,"app-offers-list",3),s.kc(1,"async"),s.kc(2,"async")),2&e){var r=s.jc();s.oc("user",s.lc(1,2,r.user$))("offers",s.lc(2,4,r.offers$))}}function F(e,t){if(1&e&&(s.Sb(0,"app-offers-profile",4),s.kc(1,"async")),2&e){var r=s.jc();s.oc("user",s.lc(1,1,r.user$))}}var w,_=((w=function(){function e(t,r){var n=this;_classCallCheck(this,e),this.route=t,this.store$=r,this.isOffersList=!0,this.route.data.subscribe((function(e){return n.isOffersList=!e.my_offers})),this.user$=this.store$.select(i.b),this.offers$=this.store$.select(a.c)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||w)(s.Rb(c.a),s.Rb(o.h))},w.\u0275cmp=s.Lb({type:w,selectors:[["app-offers"]],decls:8,vars:2,consts:[["fxLayoutAlign","center"],[3,"user","offers",4,"ngIf"],[3,"user",4,"ngIf"],[3,"user","offers"],[3,"user"]],template:function(e,t){1&e&&(s.Xb(0,"mat-drawer-container",0),s.Xb(1,"mat-drawer-content"),s.Xb(2,"h2"),s.Bc(3," Offers\n"),s.Wb(),s.Sb(4,"mat-divider"),s.Xb(5,"div"),s.Ac(6,k,3,6,"app-offers-list",1),s.Ac(7,F,2,3,"app-offers-profile",2),s.Wb(),s.Wb(),s.Wb()),2&e&&(s.Fb(6),s.oc("ngIf",t.isOffersList),s.Fb(1),s.oc("ngIf",!t.isOffersList))},directives:[f.a,u.b,f.b,d.a,n.l,v,O],pipes:[n.b],styles:[".card[_ngcontent-%COMP%]{width:100%;padding-top:.25%}"]}),w),A=r("lJxs"),L=r("eIep"),x=r("dS7W"),j=r("MutI");function S(e,t){if(1&e){var r=s.Yb();s.Xb(0,"button",5),s.fc("click",(function(e){return s.uc(r),s.jc().subscribe()})),s.Bc(1," Inscribirse "),s.Wb()}}function $(e,t){if(1&e){var r=s.Yb();s.Xb(0,"button",6),s.fc("click",(function(e){return s.uc(r),s.jc().unsubscribe()})),s.Bc(1," Eliminar oferta "),s.Wb()}}var I,P,M,T,D=((I=function(){function e(){_classCallCheck(this,e),this.subscribeOffer=new s.o,this.unsubscribeOffer=new s.o,this.displayedColumns=["id","job"],this.dataSource=this.offer}return _createClass(e,[{key:"subscribe",value:function(){var e=[].concat(_toConsumableArray(this.user.offers),[this.offer]),t=Object.assign(Object.assign({},this.user),{offers:e});this.subscribeOffer.emit(t)}},{key:"unsubscribe",value:function(){var e=this,t=this.user.offers.filter((function(t){return t.id!==e.offer.id})),r=Object.assign(Object.assign({},this.user),{offers:t});this.unsubscribeOffer.emit(r)}},{key:"isSubscribe",value:function(){var e=this;return!(!this.user||!this.user.offers.find((function(t){return e.offer.id===t.id})))}}]),e}()).\u0275fac=function(e){return new(e||I)},I.\u0275cmp=s.Lb({type:I,selectors:[["app-offers-detail"]],inputs:{offer:"offer",user:"user"},outputs:{subscribeOffer:"subscribeOffer",unsubscribeOffer:"unsubscribeOffer"},decls:34,vars:7,consts:[["fxLayoutAlign","center"],[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],["mat-raised-button","","color","primary","class","btn btn-primary",3,"click",4,"ngIf"],["mat-raised-button","","color","warn","class","btn btn-danger",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",1,"btn","btn-primary",3,"click"],["mat-raised-button","","color","warn",1,"btn","btn-danger",3,"click"]],template:function(e,t){1&e&&(s.Xb(0,"mat-drawer-container",0),s.Xb(1,"mat-drawer-content"),s.Xb(2,"h2"),s.Bc(3," Offers Detail "),s.Wb(),s.Sb(4,"mat-divider"),s.Xb(5,"mat-card",1),s.Xb(6,"mat-card-header"),s.Sb(7,"div",2),s.Sb(8,"mat-card-title"),s.Wb(),s.Xb(9,"mat-card-content"),s.Xb(10,"mat-list"),s.Xb(11,"mat-list-item"),s.Xb(12,"strong"),s.Bc(13,"Job: "),s.Wb(),s.Bc(14),s.Wb(),s.Xb(15,"mat-list-item"),s.Xb(16,"strong"),s.Bc(17,"Company:"),s.Wb(),s.Bc(18),s.Wb(),s.Xb(19,"mat-list-item"),s.Xb(20,"strong"),s.Bc(21,"Date:"),s.Wb(),s.Bc(22),s.Wb(),s.Xb(23,"mat-list-item"),s.Xb(24,"strong"),s.Bc(25,"Province:"),s.Wb(),s.Bc(26),s.Wb(),s.Xb(27,"mat-list-item"),s.Xb(28,"strong"),s.Bc(29,"Municipe:"),s.Wb(),s.Bc(30),s.Wb(),s.Wb(),s.Wb(),s.Xb(31,"mat-card-actions"),s.Ac(32,S,2,0,"button",3),s.Ac(33,$,2,0,"button",4),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&e&&(s.Fb(14),s.Dc(" ",t.offer.job.name," "),s.Fb(4),s.Cc(t.offer.company.name),s.Fb(4),s.Cc(t.offer.date),s.Fb(4),s.Cc(t.offer.province.name),s.Fb(4),s.Cc(t.offer.municipe.name),s.Fb(2),s.oc("ngIf",!t.isSubscribe()),s.Fb(1),s.oc("ngIf",t.isSubscribe()))},directives:[f.a,u.b,f.b,d.a,l.a,l.e,l.c,l.g,l.d,j.a,j.b,l.b,n.l,p.b],styles:[".card[_ngcontent-%COMP%]{width:600px;padding-top:.25%}.example-card[_ngcontent-%COMP%]{width:500px;padding-top:.25%}"]}),I),J=[{path:"",component:_},{path:"my-offers",component:_,data:{my_offers:!0}},{path:":id",component:(P=function(){function e(t,r){var n=this;_classCallCheck(this,e),this.store$=t,this.route=r,this.user$=this.store$.select(i.b),this.offer$=this.route.params.pipe(Object(A.a)((function(e){var t=e.id;return Number.parseInt(t)})),Object(L.a)((function(e){return n.store$.select(Object(a.b)(e))})))}return _createClass(e,[{key:"onSubscribeOffer",value:function(e){this.store$.dispatch(new x.l(e))}},{key:"onUnsubscribeOffer",value:function(e){this.store$.dispatch(new x.l(e))}}]),e}(),P.\u0275fac=function(e){return new(e||P)(s.Rb(o.h),s.Rb(c.a))},P.\u0275cmp=s.Lb({type:P,selectors:[["app-offers-detail-wrapper"]],decls:3,vars:6,consts:[[3,"user","offer","subscribeOffer","unsubscribeOffer"]],template:function(e,t){1&e&&(s.Xb(0,"app-offers-detail",0),s.fc("subscribeOffer",(function(e){return t.onSubscribeOffer(e)}))("unsubscribeOffer",(function(e){return t.onUnsubscribeOffer(e)})),s.kc(1,"async"),s.kc(2,"async"),s.Wb()),2&e&&s.oc("user",s.lc(1,2,t.user$))("offer",s.lc(2,4,t.offer$))},directives:[D],pipes:[n.b],encapsulation:2}),P)}],N=((T=function e(){_classCallCheck(this,e)}).\u0275mod=s.Pb({type:T}),T.\u0275inj=s.Ob({factory:function(e){return new(e||T)},imports:[[c.i.forChild(J)],c.i]}),T),G=((M=function e(){_classCallCheck(this,e)}).\u0275mod=s.Pb({type:M}),M.\u0275inj=s.Ob({factory:function(e){return new(e||M)},imports:[[n.c,N,b.a]]}),M)}}]);