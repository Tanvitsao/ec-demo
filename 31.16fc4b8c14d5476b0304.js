(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"H/sf":function(t,e,n){"use strict";n.r(e);var i=n("Valr"),a=n("QJY3"),c=n("PCNd"),o=n("DUip"),r=n("omOQ"),s=n("iDUo"),u=n("rtiL"),l=n("GiNM"),b=n("wd/R"),g=n("TYT/"),d=n("R08+"),p=n("lEQb"),h=n("/dic"),f=n("VnD/"),v=n("67Y/"),m=n("2WpN"),O=n("ThRj"),S=n("Ue4Y"),C=n("WTUP"),P=function(){function t(t,e,n,i){this.networkingService=t,this.message=e,this.productPopupMsgService=n,this.loadingSvc=i}return t.prototype.getClaimStatusByTaxId=function(t){var e=this;return this.loadingSvc.loading(!0),this.networkingService.sendRequest(O.a.POST,"/DisputeInquiryWebService/rest/DisputeInquiryService/getClaimStatusByTaxId",{id:t}).pipe(Object(f.a)((function(t){if(t&&t.getData()){var n=t.getData().returnCode,i=t.getData().returnMessage;return"S00"===n||(e.message.alert(i),!1)}return!1})),Object(v.a)((function(t){return t.getData().claimList||[]})),Object(m.a)((function(){e.loadingSvc.loading(!1)})))},t.\u0275fac=function(e){return new(e||t)(g.ec(O.b),g.ec(h.a),g.ec(S.a),g.ec(C.a))},t.\u0275prov=g.Qb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),M=n("SloE"),y=n("X5uw"),D=n("rCsC"),w=n("611w");function x(t,e){1&t&&(g.ac(0,"div"),g.Oc(1,"\u203b\u67e5\u8a62\u671f\u9593\u70ba1\u5e74\u5167\u4e4b\u7533\u8acb\u7d00\u9304\u3002"),g.Zb(),g.ac(2,"div"),g.Oc(3," \u203b\u8b39\u63d0\u4f9b20\u6b72(\u542b)\u4ee5\u4e0a\u4e4b\u88ab\u4fdd\u96aa\u4eba\u7533\u8acb\u8a18\u9304\uff0c\u5018\u60a8\u6709\u9700\u67e5\u8a6220\u6b72\u4ee5\u4e0b\uff0c\u62161\u5e74\u4ee5\u524d\u4e4b\u7533\u8acb\u8cc7\u6599\u9700\u6c42\uff0c\u8acb\u81f4\u96fb\u672c\u516c\u53f824\u5c0f\u6642\u514d\u8cbb\u5ba2\u6236\u670d\u52d9\u5c08\u7dda0800-005-678\u3002 "),g.Zb())}function Z(t,e){if(1&t&&(g.ac(0,"tr",12),g.ac(1,"td",13),g.Oc(2),g.Zb(),g.ac(3,"td",14),g.Oc(4),g.Zb(),g.ac(5,"td",15),g.Oc(6),g.Zb(),g.ac(7,"td",16),g.Oc(8),g.Zb(),g.ac(9,"td",17),g.Oc(10),g.Zb(),g.Zb()),2&t){var n=e.$implicit,i=g.lc();g.Db(2),g.Qc(" ",n.policyNo," "),g.Db(2),g.Qc(" ",i.moment(n.lossReportedDate).format("YYYY-MM-DD")," "),g.Db(2),g.Qc(" ",n.claimNo," "),g.Db(2),g.Qc(" ",n.coverageTxt," "),g.Db(2),g.Qc(" ",n.claimStatus," ")}}var _=[{path:"",component:function(){function t(t,e,n,i,a,c,o){this.nzModalService=t,this.piiLogService=e,this.messageService=n,this.disputeInquiryWebService=i,this.loginService=a,this.storage=c,this.networkingService=o,this.searchResultList=[],this.moment=b}return Object.defineProperty(t.prototype,"user",{get:function(){return this.loginService.userData},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){this.storage.getData(r.a.token,u.b.SESSION)||this.networkingService.getEBaoToken(),this.user&&this.user.getUserId()?(this.getSearchList(),this.piiLogService.callVaccinePiilog([],s.a.CLICK_SEARCH)):this.showLoginModal()},t.prototype.ngOnDestroy=function(){},t.prototype.getSearchList=function(){var t=this;this.disputeInquiryWebService.getClaimStatusByTaxId(this.user.getUserId()).subscribe((function(e){t.searchResultList=e,0===t.searchResultList.length?t.piiLogService.callVaccinePiilog(["\u67e5\u7121\u7406\u8ce0\u9032\u5ea6"],s.a.PRODUCT_NO_DATA).subscribe():t.searchResultList.forEach((function(e){t.piiLogService.callVaccinePiilog(["\u88ab\u4fdd\u4eba\u4fdd\u55ae\u865f\u78bc: "+e.policyNo,"\u88ab\u4fdd\u4eba\u53d7\u7406\u65e5\u671f: "+e.lossReportedDate,"\u88ab\u4fdd\u4eba\u7406\u8ce0\u6848\u865f: "+e.claimNo,"\u88ab\u4fdd\u4eba\u627f\u4fdd\u7bc4\u570d: "+e.coverageTxt,"\u88ab\u4fdd\u4eba\u5be9\u6838\u72c0\u614b: "+e.claimStatus],s.a.PRODUCT_HAS_DATA).subscribe()}))}))},t.prototype.showLoginModal=function(){var t=this;this.ref=this.nzModalService.create({nzContent:l.a,nzClosable:!1,nzStyle:{width:"400px",height:"900px"},nzFooter:null,nzMaskClosable:!1,nzComponentParams:{currentPage:"login",product:"vaccine"},nzOnCancel:function(e){"pwd"===e.currentPage&&(e.onParentPageChange("login"),t.showLoginModal())},nzOnOk:function(){t.getSearchList()}})},t.\u0275fac=function(e){return new(e||t)(g.Ub(d.e),g.Ub(p.a),g.Ub(h.a),g.Ub(P),g.Ub(M.a),g.Ub(u.a),g.Ub(O.b))},t.\u0275cmp=g.Ob({type:t,selectors:[["app-status-of-claim"]],decls:26,vars:4,consts:[[1,"background-zone"],[1,"inner-container"],[1,"banner"],[1,"content-box"],["headerHint",""],[3,"title","headerHint","useTemplate"],[1,"table","table991","thead-blue"],["policyTable",""],[1,"custom-thead"],["scope","col"],["scope","col",1,"text-lg-center"],["class","tr-hover",4,"ngFor","ngForOf"],[1,"tr-hover"],["data-title","\u4fdd\u55ae\u865f\u78bc"],["data-title","\u53d7\u7406\u65e5\u671f"],["data-title","\u7406\u8ce0\u6848\u865f"],["data-title","\u627f\u4fdd\u7bc4\u570d"],["data-title","\u5be9\u6838\u72c0\u614b",1,"text-lg-center"]],template:function(t,e){if(1&t&&(g.ac(0,"div",0),g.ac(1,"div",1),g.ac(2,"div",2),g.ac(3,"h4"),g.Oc(4,"\u500b\u4eba\u9632\u75ab\u96aa\u53ca\u50b7\u5bb3\u96aa-\u7406\u8ce0\u6848\u4ef6"),g.Zb(),g.Zb(),g.ac(5,"div",3),g.Mc(6,x,4,0,"ng-template",null,4,g.Nc),g.ac(8,"app-expansion-panel",5),g.ac(9,"panel-content"),g.ac(10,"table",6,7),g.ac(12,"thead",8),g.ac(13,"tr"),g.ac(14,"th",9),g.Oc(15,"\u4fdd\u55ae\u865f\u78bc"),g.Zb(),g.ac(16,"th",9),g.Oc(17,"\u53d7\u7406\u65e5\u671f"),g.Zb(),g.ac(18,"th",9),g.Oc(19,"\u7406\u8ce0\u6848\u865f"),g.Zb(),g.ac(20,"th",9),g.Oc(21,"\u627f\u4fdd\u7bc4\u570d"),g.Zb(),g.ac(22,"th",10),g.Oc(23,"\u5be9\u6838\u72c0\u614b"),g.Zb(),g.Zb(),g.Zb(),g.ac(24,"tbody"),g.Mc(25,Z,11,5,"tr",11),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.Zb()),2&t){var n=g.Cc(7);g.Db(8),g.tc("title","\u500b\u4eba\u9632\u75ab\u96aa\u53ca\u50b7\u5bb3\u96aa-\u7406\u8ce0\u9032\u5ea6\u67e5\u8a62\u5217\u8868")("headerHint",n)("useTemplate",!0),g.Db(17),g.tc("ngForOf",e.searchResultList)}},directives:[y.a,D.a,w.f,w.g,w.a,w.e,w.d,i.m],styles:[".inner-container[_ngcontent-%COMP%]{max-width:1200px;margin:auto;padding:12px}.banner[_ngcontent-%COMP%]{padding:50px}.banner[_ngcontent-%COMP%], .banner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#fff;font-weight:700!important}.banner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:60px}@media (max-width:1100px){.banner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:25px}}.banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}@media (max-width:1100px){.banner[_ngcontent-%COMP%]{padding:20px}}.content-box[_ngcontent-%COMP%]{margin:20px 0}.tr-hover[_ngcontent-%COMP%]:hover{background-color:#dcdcdc}"]}),t}()}],L=function(){function t(){}return t.\u0275mod=g.Sb({type:t}),t.\u0275inj=g.Rb({factory:function(e){return new(e||t)},imports:[[o.j.forChild(_)],o.j]}),t}();n.d(e,"StatusOfClaimModule",(function(){return T}));var T=function(){function t(){}return t.\u0275mod=g.Sb({type:t}),t.\u0275inj=g.Rb({factory:function(e){return new(e||t)},providers:[a.k],imports:[[i.c,c.a,a.m,a.u,L]]}),t}()}}]);