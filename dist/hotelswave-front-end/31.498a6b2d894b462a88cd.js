(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{qAU8:function(e,t,r){"use strict";r.r(t),r.d(t,"ROUTES",function(){return K}),r.d(t,"SpecialOfferModule",function(){return X});var i=r("iInd"),n=r("KZX/"),o=r("cUdh"),c=r("/e7+"),a=r("8Y7J"),l=r("G0yt"),s=r("s7LF"),f=r("SVse"),b=function(){return(b=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function u(e,t){1&e&&(a.Qb(0,"small",26),a.Lc(1,"Title required"),a.Pb())}function p(e,t){1&e&&(a.Qb(0,"small",26),a.Lc(1,"ShortTag required"),a.Pb())}function d(e,t){1&e&&(a.Qb(0,"small",26),a.Lc(1," Duration required"),a.Pb())}function h(e,t){1&e&&(a.Qb(0,"small",26),a.Lc(1," Price required"),a.Pb())}function m(e,t){1&e&&(a.Qb(0,"small",26),a.Lc(1," Url required"),a.Pb())}function g(e,t){1&e&&(a.Qb(0,"small",26),a.Lc(1,"Description required"),a.Pb())}function v(e,t){if(1&e&&(a.Qb(0,"span",26),a.Lc(1),a.Pb()),2&e){var r=a.ec();a.zb(1),a.Nc(" ",r.getFormValidationErrors()," ")}}var P=function(e,t,r){return{disabled:e,"btn-warning":t,"btn-success":r}},y=function(){function e(e,t){this.fb=e,this.calendar=t,this.create=new a.n,this.edit=!1,this.mouseoverShifting=!1,this.createForm()}return e.prototype.ngOnChanges=function(e){if(e.specialOffer&&this.specialOffer&&this.specialOffer.id){if(this.edit=!0,this.specialOffer.tourDate){var t=this.specialOffer.tourDate.split("-"),r={year:parseInt(t[0]),month:parseInt(t[1]),day:parseInt(t[2])};this.specialOffer.tourDate=r}this.form.patchValue(this.specialOffer)}},e.prototype.createForm=function(){this.form=this.fb.group({title:["",s.w.required],shortTag:["",s.w.required],price:["",s.w.required],url:["",s.w.required],tourDate:[null,[]],duration:["",s.w.required],description:["",s.w.required]})},e.prototype.submit=function(){if(this.edit){var e=b({id:this.specialOffer.id,active:this.specialOffer.active,imagePaths:this.specialOffer.imagePaths},this.form.value);this.create.emit(e)}else this.create.emit(this.form.value);this.edit=!1,this.form.reset(),this.createForm()},e.prototype.getFormValidationErrors=function(){var e=this,t="";return Object.keys(this.form.controls).forEach(function(r){var i=e.form.get(r).errors;null!=i&&Object.keys(i).forEach(function(e){t+=r+" : "+e+"; "})}),t},e.\u0275fac=function(t){return new(t||e)(a.Lb(s.d),a.Lb(l.b))},e.\u0275cmp=a.Fb({type:e,selectors:[["special-offer-form"]],inputs:{specialOffer:"specialOffer"},outputs:{create:"create"},features:[a.xb],decls:48,vars:14,consts:[[1,"container"],[1,"my-3","p-4","shifting-form","label1","text-left",3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["for","title"],["formControlName","title","id","title","placeholder","Title",1,"form-control"],["class","text-danger",4,"ngIf"],["for","shortTag"],["formControlName","shortTag","id","shortTag","placeholder","ShortTag",1,"form-control"],["for","duration"],["formControlName","duration","id","duration","placeholder","Duration",1,"form-control"],["for","price"],["formControlName","price","id","price","type","number","placeholder","Price",1,"form-control"],["for","url"],["formControlName","url","id","url","placeholder","Url",1,"form-control"],[1,"col-auto"],["for","tourDate"],[1,"form-group"],[1,"input-group"],["placeholder","yyyy-mm-dd","formControlName","tourDate","ngbDatepicker","",1,"form-control",3,"click"],["tourDate","ngbDatepicker"],["for","description"],["id","description","rows","3","formControlName","description",1,"form-control"],[1,"d-flex","flex-row-reverse","bd-highlight"],[3,"mouseenter"],["type","submit","type","submit",1,"btn","btn-warning","mx-1",3,"ngClass"],[1,"text-danger"]],template:function(e,t){if(1&e){var r=a.Rb();a.Qb(0,"div",0),a.Qb(1,"form",1),a.bc("ngSubmit",function(){return t.submit()}),a.Qb(2,"div",2),a.Qb(3,"div",3),a.Qb(4,"label",4),a.Lc(5,"Title *"),a.Pb(),a.Mb(6,"input",5),a.Jc(7,u,2,0,"small",6),a.Pb(),a.Qb(8,"div",3),a.Qb(9,"label",7),a.Lc(10,"ShortTag *"),a.Pb(),a.Mb(11,"input",8),a.Jc(12,p,2,0,"small",6),a.Pb(),a.Pb(),a.Qb(13,"div",2),a.Qb(14,"div",3),a.Qb(15,"label",9),a.Lc(16,"Duration *"),a.Pb(),a.Mb(17,"input",10),a.Jc(18,d,2,0,"small",6),a.Pb(),a.Qb(19,"div",3),a.Qb(20,"label",11),a.Lc(21,"Price *"),a.Pb(),a.Mb(22,"input",12),a.Jc(23,h,2,0,"small",6),a.Pb(),a.Pb(),a.Qb(24,"div",2),a.Qb(25,"div",3),a.Qb(26,"label",13),a.Lc(27,"Url *"),a.Pb(),a.Mb(28,"input",14),a.Jc(29,m,2,0,"small",6),a.Pb(),a.Pb(),a.Qb(30,"div",2),a.Qb(31,"div",15),a.Qb(32,"label",16),a.Lc(33,"Tour Date"),a.Pb(),a.Qb(34,"div",17),a.Qb(35,"div",18),a.Qb(36,"input",19,20),a.bc("click",function(){return a.Ac(r),a.xc(37).toggle()}),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(38,"div",17),a.Qb(39,"label",21),a.Lc(40,"Description *"),a.Pb(),a.Mb(41,"textarea",22),a.Jc(42,g,2,0,"small",6),a.Pb(),a.Qb(43,"div",23),a.Qb(44,"span",24),a.bc("mouseenter",function(){return t.mouseoverShifting=!0}),a.Qb(45,"button",25),a.Lc(46),a.Pb(),a.Pb(),a.Jc(47,v,2,1,"span",6),a.Pb(),a.Pb(),a.Pb()}2&e&&(a.zb(1),a.mc("formGroup",t.form),a.zb(6),a.mc("ngIf",(null==t.form.controls.title.errors?null:t.form.controls.title.errors.required)&&t.form.controls.title.dirty),a.zb(5),a.mc("ngIf",(null==t.form.controls.shortTag.errors?null:t.form.controls.shortTag.errors.required)&&t.form.controls.shortTag.dirty),a.zb(6),a.mc("ngIf",(null==t.form.controls.duration.errors?null:t.form.controls.duration.errors.required)&&t.form.controls.duration.dirty),a.zb(5),a.mc("ngIf",(null==t.form.controls.price.errors?null:t.form.controls.price.errors.required)&&t.form.controls.price.dirty),a.zb(6),a.mc("ngIf",(null==t.form.controls.url.errors?null:t.form.controls.url.errors.required)&&t.form.controls.url.dirty),a.zb(13),a.mc("ngIf",(null==t.form.controls.description.errors?null:t.form.controls.description.errors.required)&&t.form.controls.description.dirty),a.zb(3),a.mc("ngClass",a.sc(10,P,t.form.invalid,t.edit,!t.edit)),a.zb(1),a.Nc(" ",t.edit?"Update":"Create"," Special Offer "),a.zb(1),a.mc("ngIf",t.mouseoverShifting))},directives:[s.y,s.o,s.h,s.b,s.n,s.g,f.p,s.s,l.k,f.n],styles:[""]}),e}(),Q=r("uEz7"),O=r("HF3I"),w=function(e,t,r,i){return new(r||(r=Promise))(function(n,o){function c(e){try{l(i.next(e))}catch(t){o(t)}}function a(e){try{l(i.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(c,a)}l((i=i.apply(e,t||[])).next())})},L=function(e,t){var r,i,n,o,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,i=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!((n=(n=c.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){c.label=o[1];break}if(6===o[0]&&c.label<n[1]){c.label=n[1],n=o;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(o);break}n[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(a){o=[6,a],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},I=function(e,t){return{"btn-danger":e,"btn-warning":t}};function S(e,t){if(1&e){var r=a.Rb();a.Qb(0,"tr"),a.Qb(1,"td"),a.Lc(2),a.Pb(),a.Qb(3,"td"),a.Lc(4),a.Pb(),a.Qb(5,"td"),a.Lc(6),a.Pb(),a.Qb(7,"td"),a.Lc(8),a.Pb(),a.Qb(9,"td"),a.Qb(10,"a",9),a.Lc(11," Image "),a.Pb(),a.Qb(12,"a",10),a.Lc(13," Details "),a.Pb(),a.Qb(14,"button",11),a.bc("click",function(){a.Ac(r);var e=t.$implicit;return a.ec(2).onActivate(e.id,!e.active)}),a.Lc(15),a.Pb(),a.Pb(),a.Pb()}if(2&e){var i=t.$implicit;a.zb(2),a.Mc(i.title),a.zb(2),a.Mc(i.tourDate),a.zb(2),a.Mc(i.price),a.zb(2),a.Mc(i.active?"Active":"Inactive"),a.zb(2),a.oc("routerLink","/dashboard/admin/special-offer/image/",i.id,""),a.zb(2),a.oc("routerLink","/dashboard/admin/special-offer/details/",i.id,""),a.zb(2),a.mc("ngClass",a.rc(8,I,i.active,!i.active)),a.zb(1),a.Nc(" ",i.active?"Deactivate":"Activate"," ")}}function x(e,t){if(1&e){var r=a.Rb();a.Qb(0,"pagination",12),a.bc("getPage",function(e){return a.Ac(r),a.ec(2).getAdminSpecialOfferPage(e)}),a.Pb()}if(2&e){var i=a.ec(2);a.mc("page",i.specialOfferPage)}}function k(e,t){if(1&e&&(a.Qb(0,"table",5),a.Qb(1,"thead"),a.Qb(2,"tr"),a.Qb(3,"th"),a.Lc(4,"Title"),a.Pb(),a.Qb(5,"th"),a.Lc(6,"Date"),a.Pb(),a.Qb(7,"th"),a.Lc(8,"Price"),a.Pb(),a.Qb(9,"th"),a.Lc(10,"Active"),a.Pb(),a.Mb(11,"th"),a.Pb(),a.Pb(),a.Qb(12,"tbody"),a.Jc(13,S,16,11,"tr",6),a.Pb(),a.Qb(14,"tfoot"),a.Qb(15,"tr"),a.Qb(16,"td",7),a.Jc(17,x,1,1,"pagination",8),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&e){var r=a.ec();a.zb(13),a.mc("ngForOf",null==r.specialOfferPage?null:r.specialOfferPage.content),a.zb(4),a.mc("ngIf",null!=r.specialOfferPage)}}function z(e,t){1&e&&a.Mb(0,"loading")}var M=function(){function e(e){this.specialOfferService=e,this.loading=!1}return e.prototype.ngOnInit=function(){this.getAdminSpecialOfferPage()},e.prototype.getAdminSpecialOfferPage=function(e){return void 0===e&&(e=0),w(this,void 0,void 0,function(){var t=this;return L(this,function(r){switch(r.label){case 0:return this.loading=!0,[4,this.specialOfferService.getAdminSpecialOfferPage(e).subscribe(function(e){t.specialOfferPage=e,t.loading=!1})];case 1:return r.sent(),[2]}})})},e.prototype.onActivate=function(e,t){return w(this,void 0,void 0,function(){var r=this;return L(this,function(i){switch(i.label){case 0:return this.loading=!0,[4,this.specialOfferService.adminSpecialOfferStatus(e,t).subscribe(function(t){r.specialOfferPage.content.splice(r.specialOfferPage.content.findIndex(function(t){return t.id===e}),1,t),r.loading=!1})];case 1:return i.sent(),[2]}})})},e.\u0275fac=function(t){return new(t||e)(a.Lb(o.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-list"]],decls:7,vars:2,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"container"],["class","table border table-responsive-sm",4,"ngIf","ngIfElse"],["showLoading",""],[1,"table","border","table-responsive-sm"],[4,"ngFor","ngForOf"],["colspan","5"],[3,"page","getPage",4,"ngIf"],[1,"btn","btn-sm","btn-primary","mr-1",3,"routerLink"],[1,"btn","btn-sm","btn-success","mr-1",3,"routerLink"],[1,"btn","btn-sm",3,"ngClass","click"],[3,"page","getPage"]],template:function(e,t){if(1&e&&(a.Qb(0,"div",0),a.Qb(1,"span",1),a.Lc(2,"Special offer list"),a.Pb(),a.Pb(),a.Qb(3,"div",2),a.Jc(4,k,18,2,"table",3),a.Jc(5,z,1,0,"ng-template",null,4,a.Kc),a.Pb()),2&e){var r=a.xc(6);a.zb(4),a.mc("ngIf",!t.loading)("ngIfElse",r)}},directives:[f.p,f.o,i.c,f.n,Q.a,O.a],styles:[""]}),e}();function D(e,t){if(1&e){var r=a.Rb();a.Qb(0,"special-offer-form",7),a.bc("create",function(e){return a.Ac(r),a.ec().onCreate(e)}),a.Pb()}if(2&e){var i=a.ec();a.mc("specialOffer",i.specialOffer)}}function A(e,t){1&e&&(a.Ob(0),a.Mb(1,"app-list"),a.Nb())}var C=function(){function e(e,t,r,i){this.specialOfferService=e,this.activeRoute=t,this.utilService=r,this.router=i,this.activeNav=1,this.id=t.snapshot.params.id}return e.prototype.ngOnInit=function(){this.id&&this.getAdminSpecialOffer(this.id)},e.prototype.getAdminSpecialOffer=function(e){return t=this,void 0,i=function(){var t=this;return function(e,t){var r,i,n,o,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,i=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!((n=(n=c.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){c.label=o[1];break}if(6===o[0]&&c.label<n[1]){c.label=n[1],n=o;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(o);break}n[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(a){o=[6,a],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}(this,function(r){switch(r.label){case 0:return[4,this.specialOfferService.getAdminSpecialOffer(e).subscribe(function(e){t.specialOffer=e})];case 1:return r.sent(),[2]}})},new((r=void 0)||(r=Promise))(function(e,n){function o(e){try{a(i.next(e))}catch(t){n(t)}}function c(e){try{a(i.throw(e))}catch(t){n(t)}}function a(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r(function(e){e(i)})).then(o,c)}a((i=i.apply(t,[])).next())});var t,r,i},e.prototype.onCreate=function(e){var t=this;e.tourDate&&(e.tourDate=this.utilService.getDateStringFromDateObj(e.tourDate)),this.specialOfferService.saveAdminSpecialOffer(e).subscribe(function(e){t.router.navigate(["/dashboard/admin/special-offer"])})},e.\u0275fac=function(t){return new(t||e)(a.Lb(o.a),a.Lb(i.a),a.Lb(c.a),a.Lb(i.b))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-add"]],decls:12,vars:4,consts:[[1,"container"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[1,"mt-2",3,"ngbNavOutlet"],[3,"specialOffer","create"]],template:function(e,t){if(1&e&&(a.Qb(0,"div",0),a.Qb(1,"ul",1,2),a.bc("activeIdChange",function(e){return t.activeNav=e}),a.Qb(3,"li",3),a.Qb(4,"a",4),a.Lc(5,"Create"),a.Pb(),a.Jc(6,D,1,1,"ng-template",5),a.Pb(),a.Qb(7,"li",3),a.Qb(8,"a",4),a.Lc(9,"List"),a.Pb(),a.Jc(10,A,2,0,"ng-template",5),a.Pb(),a.Pb(),a.Mb(11,"div",6),a.Pb()),2&e){var r=a.xc(2);a.zb(1),a.mc("activeId",t.activeNav),a.zb(2),a.mc("ngbNavItem",1),a.zb(4),a.mc("ngbNavItem",2),a.zb(4),a.mc("ngbNavOutlet",r)}},directives:[l.n,l.p,l.q,l.o,l.s,y,M],styles:[""]}),e}();function T(e,t){if(1&e&&(a.Qb(0,"div",3),a.Qb(1,"div",4),a.Qb(2,"div",5),a.Qb(3,"label",6),a.Lc(4,"Title *"),a.Pb(),a.Qb(5,"label",7),a.Lc(6),a.Pb(),a.Pb(),a.Qb(7,"div",5),a.Qb(8,"label",8),a.Lc(9,"ShortTag *"),a.Pb(),a.Qb(10,"label",9),a.Lc(11),a.Pb(),a.Pb(),a.Pb(),a.Qb(12,"div",4),a.Qb(13,"div",5),a.Qb(14,"label",10),a.Lc(15,"Duration *"),a.Pb(),a.Qb(16,"label",11),a.Lc(17),a.Pb(),a.Pb(),a.Qb(18,"div",5),a.Qb(19,"label",12),a.Lc(20,"Price *"),a.Pb(),a.Qb(21,"label",13),a.Lc(22),a.Pb(),a.Pb(),a.Pb(),a.Qb(23,"div",4),a.Qb(24,"div",5),a.Qb(25,"label",14),a.Lc(26,"Url *"),a.Pb(),a.Qb(27,"label",15),a.Lc(28),a.Pb(),a.Pb(),a.Pb(),a.Qb(29,"div",4),a.Qb(30,"div",16),a.Qb(31,"label",17),a.Lc(32,"Tour Date"),a.Pb(),a.Qb(33,"label",18),a.Lc(34),a.Pb(),a.Pb(),a.Pb(),a.Qb(35,"div",19),a.Qb(36,"label",20),a.Lc(37,"Description *"),a.Pb(),a.Qb(38,"label",21),a.Lc(39),a.Pb(),a.Pb(),a.Qb(40,"div",22),a.Qb(41,"a",23),a.Lc(42,"Edit"),a.Pb(),a.Pb(),a.Pb()),2&e){var r=a.ec();a.zb(6),a.Mc(r.specialOffer.title),a.zb(5),a.Mc(r.specialOffer.shortTag),a.zb(6),a.Mc(r.specialOffer.duration),a.zb(5),a.Mc(r.specialOffer.price),a.zb(6),a.Mc(r.specialOffer.url),a.zb(6),a.Mc(r.specialOffer.tourDate),a.zb(5),a.Mc(r.specialOffer.description),a.zb(2),a.oc("routerLink","/dashboard/admin/special-offer/add/",null==r.specialOffer?null:r.specialOffer.id,"")}}var U=function(){function e(e,t){this.specialOfferService=e,this.activeRoute=t,this.id=t.snapshot.params.id}return e.prototype.ngOnInit=function(){this.id&&this.getAdminSpecialOffer(this.id)},e.prototype.getAdminSpecialOffer=function(e){return t=this,void 0,i=function(){var t=this;return function(e,t){var r,i,n,o,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,i=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!((n=(n=c.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){c.label=o[1];break}if(6===o[0]&&c.label<n[1]){c.label=n[1],n=o;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(o);break}n[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(a){o=[6,a],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}(this,function(r){switch(r.label){case 0:return[4,this.specialOfferService.getAdminSpecialOffer(e).subscribe(function(e){t.specialOffer=e})];case 1:return r.sent(),[2]}})},new((r=void 0)||(r=Promise))(function(e,n){function o(e){try{a(i.next(e))}catch(t){n(t)}}function c(e){try{a(i.throw(e))}catch(t){n(t)}}function a(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r(function(e){e(i)})).then(o,c)}a((i=i.apply(t,[])).next())});var t,r,i},e.\u0275fac=function(t){return new(t||e)(a.Lb(o.a),a.Lb(i.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-details"]],decls:4,vars:1,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],["class","container",4,"ngIf"],[1,"container"],[1,"row"],[1,"col"],["for","title"],["id","title",1,"form-control"],["for","shortTag"],["id","shortTag",1,"form-control"],["for","duration"],["id","duration",1,"form-control"],["for","price"],["id","price",1,"form-control"],["for","url"],["id","url",1,"form-control"],[1,"col-auto"],["for","tourDate"],["id","tourDate",1,"form-control"],[1,"form-group"],["for","description"],["id","description",1,"form-control"],[1,"d-flex","flex-row-reverse","bd-highlight","mb-5","pb-5"],[1,"btn","btn-sm","btn-warning",3,"routerLink"]],template:function(e,t){1&e&&(a.Qb(0,"div",0),a.Qb(1,"span",1),a.Lc(2,"Special Offer Details"),a.Pb(),a.Pb(),a.Jc(3,T,43,8,"div",2)),2&e&&(a.zb(3),a.mc("ngIf",t.specialOffer))},directives:[f.p,i.c],styles:[""]}),e}(),N=r("R/zX"),J=r("eIep"),F=r("LLt/"),q=function(e,t,r,i){return new(r||(r=Promise))(function(n,o){function c(e){try{l(i.next(e))}catch(t){o(t)}}function a(e){try{l(i.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(c,a)}l((i=i.apply(e,t||[])).next())})},E=function(e,t){var r,i,n,o,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,i=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!((n=(n=c.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){c.label=o[1];break}if(6===o[0]&&c.label<n[1]){c.label=n[1],n=o;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(o);break}n[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(a){o=[6,a],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};function R(e,t){if(1&e&&a.Mb(0,"img",16),2&e){var r=a.ec();a.mc("src",r.imageUrl,a.Dc)}}function j(e,t){if(1&e&&(a.Qb(0,"div",17),a.Lc(1),a.Pb()),2&e){var r=a.ec();a.zb(1),a.Nc(" ",r.errorMessage," ")}}function G(e,t){1&e&&(a.Qb(0,"div"),a.Lc(1," Uploaded "),a.Mb(2,"i",18),a.Pb())}function _(e,t){if(1&e){var r=a.Rb();a.Qb(0,"button",19),a.bc("click",function(){return a.Ac(r),a.ec().startUpload()}),a.Lc(1," Upload "),a.Pb()}}function $(e,t){if(1&e){var r=a.Rb();a.Qb(0,"div"),a.Qb(1,"button",21),a.bc("click",function(){a.Ac(r);var e=a.ec().$implicit;return a.ec().deleteImage(e)}),a.Qb(2,"span"),a.Lc(3,"\xd7"),a.Pb(),a.Pb(),a.Qb(4,"div",22),a.Mb(5,"img",23),a.Pb(),a.Pb()}if(2&e){var i=a.ec().$implicit;a.zb(5),a.mc("src",i,a.Dc)}}function V(e,t){if(1&e&&(a.Qb(0,"div",20),a.Jc(1,$,6,1,"div",11),a.Pb()),2&e){var r=t.$implicit;a.zb(1),a.mc("ngIf",r.length)}}var K=[{path:"add",component:C},{path:"add/:id",component:C},{path:"details/:id",component:U},{path:"image/:id",component:function(){function e(e,t,r,i,n){this.specialOfferService=e,this.activeRoute=t,this.location=r,this.auth=i,this.ng2ImgMax=n,this.specialOfferImagesUrl=[],this.errorMessage="",this.id=t.snapshot.params.id}return e.prototype.ngOnInit=function(){this.id&&(this.getAdminSpecialOffer(this.id),this.loadSpecialOfferImages(this.id))},e.prototype.getAdminSpecialOffer=function(e){return q(this,void 0,void 0,function(){var t=this;return E(this,function(r){switch(r.label){case 0:return[4,this.specialOfferService.getAdminSpecialOffer(e).subscribe(function(e){t.specialOffer=e})];case 1:return r.sent(),[2]}})})},e.prototype.loadSpecialOfferImages=function(e){return q(this,void 0,void 0,function(){var t=this;return E(this,function(r){switch(r.label){case 0:return[4,this.specialOfferService.getSpecialOfferImageUrls(e).subscribe(function(e){t.specialOfferImagesUrl=[],e.forEach(function(e){var r=t.specialOfferService.imageUrl+e+"?access_token="+t.auth.getAccessToken();t.specialOfferImagesUrl.push(r)})},function(e){console.log(e)})];case 1:return r.sent(),[2]}})})},e.prototype.previewFile=function(e){var t=this,r=new FileReader;r.onload=function(e){t.imageUrl=e.target.result},r.readAsDataURL(e.target.files[0])},e.prototype.fileChange=function(e){this.previewFile(e),this.fileList=e.target.files,this.progressPercentage=0,this.errorMessage=""},e.prototype.startUpload=function(){var e=this;if(this.fileList.length>0){var t=new FormData,r=this.fileList[0];this.ng2ImgMax.resizeImage(r,800,600).pipe(Object(J.a)(function(i){return t.append("image",i,r.name),e.specialOfferService.uploadSpecialOfferImage(e.id,t)})).subscribe(function(t){e.imageUrl="",e.fileList=null,e.progressPercentage=100,e.loadSpecialOfferImages(e.id)},function(t){console.log(t),e.errorMessage=t._body})}},e.prototype.deleteImage=function(e){var t=this,r=new URL(e).pathname.split("/"),i=parseInt(r[r.length-1]);this.specialOfferService.deleteSpecialOfferImage(r[r.length-3],i).subscribe(function(e){t.specialOfferImagesUrl.splice(i,1,""),t.loadSpecialOfferImages(t.id)},function(e){console.log("Image could not delete")})},e.prototype.resizeImage=function(e,t,r){return this.ng2ImgMax.resizeImage(e,t,r)},e.prototype.back=function(){this.location.back()},e.\u0275fac=function(t){return new(t||e)(a.Lb(o.a),a.Lb(i.a),a.Lb(f.l),a.Lb(F.a),a.Lb(N.b))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-images"]],decls:27,vars:6,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"container","mt-4"],[1,"row","mb-4"],[1,"col-md-10","offset-md-1","my-2","raised"],[1,"form-row","uploadbox"],[1,"col-md-4"],["class","img-thumbnail","height","180px","width","320","alt","","style","height: 270px;",3,"src",4,"ngIf"],[1,"col-md-8","border","p-2","rounded"],["class","alert alert-danger",4,"ngIf"],["type","file","placeholder","Upload file","accept","image/x-png,image/gif,image/jpeg",3,"change"],[4,"ngIf"],["type","button","class","btn btn-outline-dark btn-sm mr-1",3,"click",4,"ngIf"],["type","button",1,"btn","btn-outline-dark","btn-sm",3,"click"],[1,"row","py-3"],["class","col-md-3",4,"ngFor","ngForOf"],["height","180px","width","320","alt","",1,"img-thumbnail",2,"height","270px",3,"src"],[1,"alert","alert-danger"],[1,"fa","fa-check-square-o","text-success"],["type","button",1,"btn","btn-outline-dark","btn-sm","mr-1",3,"click"],[1,"col-md-3"],["type","button",1,"delete",3,"click"],[1,"image-panel"],["alt","",1,"img-thumbnail",3,"src"]],template:function(e,t){1&e&&(a.Qb(0,"div",0),a.Qb(1,"span",1),a.Lc(2,"Special Offer Images"),a.Pb(),a.Pb(),a.Qb(3,"div",2),a.Qb(4,"div",3),a.Qb(5,"div",4),a.Qb(6,"div",5),a.Qb(7,"div",6),a.Jc(8,R,1,1,"img",7),a.Pb(),a.Qb(9,"div",8),a.Qb(10,"h4"),a.Lc(11),a.Pb(),a.Jc(12,j,2,1,"div",9),a.Qb(13,"div"),a.Lc(14," Please select a image to upload "),a.Mb(15,"br"),a.Lc(16," Image ratio should be 16:9 (i.e. height:450px, width:800px) "),a.Pb(),a.Qb(17,"p"),a.Qb(18,"input",10),a.bc("change",function(e){return t.fileChange(e)}),a.Pb(),a.Pb(),a.Jc(19,G,3,0,"div",11),a.Qb(20,"div"),a.Jc(21,_,2,0,"button",12),a.Qb(22,"button",13),a.bc("click",function(){return t.back()}),a.Lc(23," Back "),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(24,"div",4),a.Qb(25,"div",14),a.Jc(26,V,2,1,"div",15),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.zb(8),a.mc("ngIf",t.imageUrl),a.zb(3),a.Nc(" ",null==t.specialOffer?null:t.specialOffer.title,""),a.zb(1),a.mc("ngIf",(null==t.errorMessage?null:t.errorMessage.length)>0),a.zb(7),a.mc("ngIf",100==t.progressPercentage),a.zb(2),a.mc("ngIf",t.fileList),a.zb(5),a.mc("ngForOf",t.specialOfferImagesUrl))},directives:[f.p,f.o],styles:[".delete[_ngcontent-%COMP%]{cursor:pointer!important;font-size:20px;position:absolute;color:#fff;border:none;background:none;right:10px;top:0;line-height:1;z-index:99;padding:0}.delete[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{height:20px;width:20px;background-color:red;border-radius:50%;display:block}.uploadbox[_ngcontent-%COMP%]{font-size:18px;min-height:230px}.img-thumbnail[_ngcontent-%COMP%]{margin:5px;height:135px;width:240px}"]}),e}()},{path:"",component:M}],X=function(){function e(){}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[n.a,i.d.forChild(K)]]}),e}()}}]);