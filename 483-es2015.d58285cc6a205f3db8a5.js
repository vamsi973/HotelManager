(self.webpackChunkHotelManager=self.webpackChunkHotelManager||[]).push([[483],{55483:function(r,t,i){"use strict";i.r(t),i.d(t,{AuthenticationModule:function(){return A}});var e=i(61116),o=i(31041),n=i(35729),a=i(35366),s=i(28086),m=i(13070),u=i(9550),g=i(77307),l=i(84369);function Z(r,t){if(1&r&&(a.TgZ(0,"div",32),a._uU(1),a.qZA()),2&r){const r=a.oxw();a.xp6(1),a.Oqu(r.error)}}function d(r,t){1&r&&(a.TgZ(0,"mat-error"),a._uU(1," Username is required "),a.qZA())}function c(r,t){1&r&&(a.TgZ(0,"mat-error"),a._uU(1," Please enter a valid email address "),a.qZA())}function p(r,t){1&r&&(a.TgZ(0,"mat-error"),a._uU(1," Password is required "),a.qZA())}function f(r,t){1&r&&(a.TgZ(0,"mat-error"),a._uU(1," Confirm Password is required "),a.qZA())}function q(r,t){1&r&&(a.TgZ(0,"mat-error"),a._uU(1," Username is required "),a.qZA())}function h(r,t){1&r&&(a.TgZ(0,"mat-error"),a._uU(1," Password is required "),a.qZA())}const b=[{path:"",redirectTo:"signin",pathMatch:"full"},{path:"signin",component:(()=>{class r{constructor(r,t,i){this.formBuilder=r,this.router=t,this.authService=i,this.submitted=!1,this.error="",this.hide=!0}ngOnInit(){this.loginForm=this.formBuilder.group({username:["admin",o.kI.required],password:["admin",o.kI.required]})}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.error="",this.loginForm.invalid?this.error="Username and Password not valid !":this.authService.login(this.f.username.value,this.f.password.value).subscribe(r=>{r?this.authService.currentUserValue.token&&this.router.navigate(["/dashboard/main"]):this.error="Invalid Login"},r=>{this.error=r,this.submitted=!1})}}return r.\u0275fac=function(t){return new(t||r)(a.Y36(o.qu),a.Y36(n.F0),a.Y36(s.e))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-signin"]],decls:49,vars:6,consts:[[1,"limiter"],[1,"container-login100"],[1,"wrap-login100"],[1,"login100-form","validate-form",3,"formGroup","ngSubmit"],[1,"login100-form-title","pb-5"],[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","username"],["matSuffix",""],[1,"col-xl-12col-lg-12","col-md-12","col-sm-12","mb-2"],["matInput","","formControlName","password",3,"type"],["href","#","onClick","return false;","matSuffix","",1,"show-pwd-icon",3,"click"],[1,"flex-sb-m","w-full","p-t-15","p-b-20"],[1,"form-check"],[1,"form-check-label"],["type","checkbox","value","",1,"form-check-input"],[1,"form-check-sign"],[1,"check"],["routerLink","/authentication/forgot-password",1,"txt1"],[1,"container-login100-form-btn"],["mat-flat-button","","color","primary","type","submit",1,"login100-form-btn"],["class","alert alert-danger mt-3 mb-0",4,"ngIf"],[1,"text-center","p-t-30","p-b-20"],[1,"txt3"],["routerLink","/authentication/signup"],[1,"login100-form-social","flex-c-m"],["href","#",1,"login100-form-social-item","flex-c-m","bg1","m-r-5"],[1,"fab","fa-facebook-f"],["href","#",1,"login100-form-social-item","flex-c-m","bg2","m-r-5"],[1,"fab","fa-twitter"],[1,"login100-more",2,"background-image","url('assets/images/pages/bg-01.png')"],[1,"alert","alert-danger","mt-3","mb-0"]],template:function(r,t){1&r&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"form",3),a.NdJ("ngSubmit",function(){return t.onSubmit()}),a.TgZ(4,"span",4),a._uU(5," Login "),a.qZA(),a.TgZ(6,"div",5),a.TgZ(7,"div",6),a.TgZ(8,"mat-form-field",7),a.TgZ(9,"mat-label"),a._uU(10,"Username"),a.qZA(),a._UZ(11,"input",8),a.TgZ(12,"mat-icon",9),a._uU(13,"face"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(14,"div",5),a.TgZ(15,"div",10),a.TgZ(16,"mat-form-field",7),a.TgZ(17,"mat-label"),a._uU(18,"Password"),a.qZA(),a._UZ(19,"input",11),a.TgZ(20,"a",12),a.NdJ("click",function(){return t.hide=!t.hide}),a.TgZ(21,"mat-icon"),a._uU(22),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(23,"div",13),a.TgZ(24,"div",14),a.TgZ(25,"label",15),a._UZ(26,"input",16),a._uU(27," Remember me "),a.TgZ(28,"span",17),a._UZ(29,"span",18),a.qZA(),a.qZA(),a.qZA(),a.TgZ(30,"div"),a.TgZ(31,"a",19),a._uU(32,"Forgot Password?"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(33,"div",20),a.TgZ(34,"button",21),a._uU(35," Login "),a.qZA(),a.qZA(),a.YNc(36,Z,2,1,"div",22),a.TgZ(37,"div",23),a.TgZ(38,"span",24),a._uU(39," or "),a.TgZ(40,"a",25),a._uU(41," sign up "),a.qZA(),a._uU(42," using "),a.qZA(),a.qZA(),a.TgZ(43,"div",26),a.TgZ(44,"a",27),a._UZ(45,"i",28),a.qZA(),a.TgZ(46,"a",29),a._UZ(47,"i",30),a.qZA(),a.qZA(),a.qZA(),a._UZ(48,"div",31),a.qZA(),a.qZA(),a.qZA()),2&r&&(a.xp6(3),a.Q6J("formGroup",t.loginForm),a.xp6(16),a.Q6J("type",t.hide?"password":"text"),a.xp6(1),a.uIk("aria-label","Hide password")("aria-pressed",t.hide),a.xp6(2),a.Oqu(t.hide?"visibility_off":"visibility"),a.xp6(14),a.Q6J("ngIf",t.error))},directives:[o._Y,o.JL,o.sg,m.KE,m.hX,u.Nt,o.Fj,o.JJ,o.u,g.Hw,m.R9,n.yS,l.lW,e.O5],styles:[""]}),r})()},{path:"signup",component:(()=>{class r{constructor(r,t,i){this.formBuilder=r,this.router=t,this.auth=i,this.submitted=!1,this.hide=!0,this.chide=!0}ngOnInit(){this.loginForm=this.formBuilder.group({username:["",o.kI.required],email:["",[o.kI.required,o.kI.email,o.kI.minLength(5)]],password:["",o.kI.required],cpassword:["",o.kI.required]})}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.loginForm.invalid||(console.log(this.loginForm.value),this.auth.register(this.loginForm.value).subscribe(r=>{console.log(r,39),alert(r)}))}}return r.\u0275fac=function(t){return new(t||r)(a.Y36(o.qu),a.Y36(n.F0),a.Y36(s.e))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-signup"]],decls:52,vars:9,consts:[[1,"limiter"],[1,"container-login100"],[1,"wrap-login100"],[1,"login100-form","validate-form",3,"formGroup","ngSubmit"],[1,"login100-form-title","p-b-30"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","username","required",""],["matSuffix",""],[4,"ngIf"],["matInput","","formControlName","email","required",""],["matInput","","formControlName","password","required","",3,"type"],["matSuffix","",3,"click"],["matInput","","formControlName","cpassword","required","",3,"type"],[1,"flex-sb-m","w-full","p-t-15","p-b-20"],["routerLink","/authentication/signin"],[1,"container-login100-form-btn"],["mat-flat-button","","color","primary","type","submit",1,"login100-form-btn"],[1,"text-center","p-t-30","p-b-20"],[1,"txt2"],[1,"login100-form-social","flex-c-m"],["href","#",1,"login100-form-social-item","flex-c-m","bg1","m-r-5"],[1,"fab","fa-facebook-f"],["href","#",1,"login100-form-social-item","flex-c-m","bg2","m-r-5"],[1,"fab","fa-twitter"],[1,"login100-more",2,"background-image","url('assets/images/pages/bg-02.png')"]],template:function(r,t){1&r&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"form",3),a.NdJ("ngSubmit",function(){return t.onSubmit()}),a.TgZ(4,"span",4),a._uU(5," Register "),a.qZA(),a.TgZ(6,"mat-form-field",5),a.TgZ(7,"mat-label"),a._uU(8,"Username"),a.qZA(),a._UZ(9,"input",6),a.TgZ(10,"mat-icon",7),a._uU(11,"face"),a.qZA(),a.YNc(12,d,2,0,"mat-error",8),a.qZA(),a.TgZ(13,"mat-form-field",5),a.TgZ(14,"mat-label"),a._uU(15,"Email"),a.qZA(),a._UZ(16,"input",9),a.TgZ(17,"mat-icon",7),a._uU(18,"mail"),a.qZA(),a.YNc(19,c,2,0,"mat-error",8),a.qZA(),a.TgZ(20,"mat-form-field",5),a.TgZ(21,"mat-label"),a._uU(22,"Password"),a.qZA(),a._UZ(23,"input",10),a.TgZ(24,"mat-icon",11),a.NdJ("click",function(){return t.hide=!t.hide}),a._uU(25),a.qZA(),a.YNc(26,p,2,0,"mat-error",8),a.qZA(),a.TgZ(27,"mat-form-field",5),a.TgZ(28,"mat-label"),a._uU(29,"Confirm Password"),a.qZA(),a._UZ(30,"input",12),a.TgZ(31,"mat-icon",11),a.NdJ("click",function(){return t.chide=!t.chide}),a._uU(32),a.qZA(),a.YNc(33,f,2,0,"mat-error",8),a.qZA(),a.TgZ(34,"div",13),a.TgZ(35,"div"),a.TgZ(36,"span"),a._uU(37,"Already Registered? "),a.TgZ(38,"a",14),a._uU(39," Login "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(40,"div",15),a.TgZ(41,"button",16),a._uU(42," Register "),a.qZA(),a.qZA(),a.TgZ(43,"div",17),a.TgZ(44,"span",18),a._uU(45," or sign up using "),a.qZA(),a.qZA(),a.TgZ(46,"div",19),a.TgZ(47,"a",20),a._UZ(48,"i",21),a.qZA(),a.TgZ(49,"a",22),a._UZ(50,"i",23),a.qZA(),a.qZA(),a.qZA(),a._UZ(51,"div",24),a.qZA(),a.qZA(),a.qZA()),2&r&&(a.xp6(3),a.Q6J("formGroup",t.loginForm),a.xp6(9),a.Q6J("ngIf",t.loginForm.get("username").hasError("required")),a.xp6(7),a.Q6J("ngIf",t.loginForm.get("email").hasError("required")||t.loginForm.get("email").touched),a.xp6(4),a.Q6J("type",t.hide?"password":"text"),a.xp6(2),a.hij(" ",t.hide?"visibility_off":"visibility",""),a.xp6(1),a.Q6J("ngIf",t.loginForm.get("password").hasError("required")),a.xp6(4),a.Q6J("type",t.chide?"password":"text"),a.xp6(2),a.hij(" ",t.chide?"visibility_off":"visibility",""),a.xp6(1),a.Q6J("ngIf",t.loginForm.get("cpassword").hasError("required")))},directives:[o._Y,o.JL,o.sg,m.KE,m.hX,u.Nt,o.Fj,o.JJ,o.u,o.Q7,g.Hw,m.R9,e.O5,n.yS,l.lW,m.TO],styles:[""]}),r})()},{path:"forgot-password",component:(()=>{class r{constructor(r,t){this.formBuilder=r,this.router=t,this.submitted=!1}ngOnInit(){this.loginForm=this.formBuilder.group({username:["",o.kI.required]})}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.loginForm.invalid||this.router.navigate(["/dashboard/main"])}}return r.\u0275fac=function(t){return new(t||r)(a.Y36(o.qu),a.Y36(n.F0))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-forgot-password"]],decls:24,vars:2,consts:[[1,"limiter"],[1,"container-login100"],[1,"wrap-login100"],[1,"login100-form","validate-form",3,"formGroup","ngSubmit"],[1,"login100-form-title","p-b-45"],[1,"error-subheader2","p-t-20","p-b-15"],[1,"form-group","mb-5"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","username","required",""],["matSuffix",""],[4,"ngIf"],[1,"container-login100-form-btn"],["mat-flat-button","","color","primary","type","submit",1,"login100-form-btn"],[1,"w-full","p-t-25","text-center"],["routerLink","/authentication/signin",1,"txt1"],[1,"login100-more",2,"background-image","url('assets/images/pages/bg-02.png')"]],template:function(r,t){1&r&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"form",3),a.NdJ("ngSubmit",function(){return t.onSubmit()}),a.TgZ(4,"span",4),a._uU(5," Reset Password "),a.qZA(),a.TgZ(6,"span",5),a._uU(7," Enter your registered email address. "),a.qZA(),a.TgZ(8,"div",6),a.TgZ(9,"mat-form-field",7),a.TgZ(10,"mat-label"),a._uU(11,"Username"),a.qZA(),a._UZ(12,"input",8),a.TgZ(13,"mat-icon",9),a._uU(14,"face"),a.qZA(),a.YNc(15,q,2,0,"mat-error",10),a.qZA(),a.qZA(),a.TgZ(16,"div",11),a.TgZ(17,"button",12),a._uU(18," Reset My Password "),a.qZA(),a.qZA(),a.TgZ(19,"div",13),a.TgZ(20,"div"),a.TgZ(21,"a",14),a._uU(22," Login? "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a._UZ(23,"div",15),a.qZA(),a.qZA(),a.qZA()),2&r&&(a.xp6(3),a.Q6J("formGroup",t.loginForm),a.xp6(12),a.Q6J("ngIf",t.loginForm.get("username").hasError("required")))},directives:[o._Y,o.JL,o.sg,m.KE,m.hX,u.Nt,o.Fj,o.JJ,o.u,o.Q7,g.Hw,m.R9,e.O5,l.lW,n.yS,m.TO],styles:[""]}),r})()},{path:"locked",component:(()=>{class r{constructor(r,t){this.formBuilder=r,this.router=t,this.submitted=!1,this.hide=!0}ngOnInit(){this.loginForm=this.formBuilder.group({password:["",o.kI.required]})}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.loginForm.invalid||this.router.navigate(["/dashboard/main"])}}return r.\u0275fac=function(t){return new(t||r)(a.Y36(o.qu),a.Y36(n.F0))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-locked"]],decls:28,vars:4,consts:[[1,"limiter"],[1,"container-login100"],[1,"wrap-login100"],[1,"login100-form","validate-form",3,"formGroup","ngSubmit"],[1,"login100-form-logo"],[1,"image"],["src","assets/images/usrbig.jpg","alt","User"],[1,"login100-form-title","p-b-34","p-t-27"],[1,"text-center"],[1,"txt1","p-b-20"],[1,"form-group","mb-3"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","password","required","",3,"type"],["matSuffix","",3,"click"],[4,"ngIf"],[1,"container-login100-form-btn","p-t-30"],["mat-flat-button","","color","primary",1,"login100-form-btn"],[1,"w-full","p-t-15","p-b-15","text-center"],["href","#",1,"txt1"],[1,"login100-more",2,"background-image","url('assets/images/pages/bg-01.png')"]],template:function(r,t){1&r&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"form",3),a.NdJ("ngSubmit",function(){return t.onSubmit()}),a.TgZ(4,"div",4),a.TgZ(5,"div",5),a._UZ(6,"img",6),a.qZA(),a.qZA(),a.TgZ(7,"span",7),a._uU(8," Emily Smith "),a.qZA(),a.TgZ(9,"div",8),a.TgZ(10,"p",9),a._uU(11," Locked "),a.qZA(),a.qZA(),a.TgZ(12,"div",10),a.TgZ(13,"mat-form-field",11),a.TgZ(14,"mat-label"),a._uU(15,"Password"),a.qZA(),a._UZ(16,"input",12),a.TgZ(17,"mat-icon",13),a.NdJ("click",function(){return t.hide=!t.hide}),a._uU(18),a.qZA(),a.YNc(19,h,2,0,"mat-error",14),a.qZA(),a.qZA(),a.TgZ(20,"div",15),a.TgZ(21,"button",16),a._uU(22," Login "),a.qZA(),a.qZA(),a.TgZ(23,"div",17),a.TgZ(24,"div"),a.TgZ(25,"a",18),a._uU(26," Need Help? "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a._UZ(27,"div",19),a.qZA(),a.qZA(),a.qZA()),2&r&&(a.xp6(3),a.Q6J("formGroup",t.loginForm),a.xp6(13),a.Q6J("type",t.hide?"password":"text"),a.xp6(2),a.hij(" ",t.hide?"visibility_off":"visibility",""),a.xp6(1),a.Q6J("ngIf",t.loginForm.get("password").hasError("required")))},directives:[o._Y,o.JL,o.sg,m.KE,m.hX,u.Nt,o.Fj,o.JJ,o.u,o.Q7,g.Hw,m.R9,e.O5,l.lW,m.TO],styles:[""]}),r})()},{path:"page404",component:i(6741).J},{path:"page500",component:(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-page500"]],decls:16,vars:0,consts:[[1,"limiter"],[1,"container-login100"],[1,"wrap-login100"],[1,"login100-form"],[1,"error-header","p-b-45"],[1,"error-subheader2","p-b-5"],[1,"container-login100-form-btn","p-t-30"],["mat-flat-button","","color","primary",1,"login100-form-btn"],[1,"w-full","p-t-15","p-b-15","text-center"],["href","#",1,"txt1"],[1,"login100-more",2,"background-image","url('assets/images/pages/bg-04.png')"]],template:function(r,t){1&r&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"form",3),a.TgZ(4,"span",4),a._uU(5," 500 "),a.qZA(),a.TgZ(6,"span",5),a._uU(7," Oops, Something went wrong. Please try after some times. "),a.qZA(),a.TgZ(8,"div",6),a.TgZ(9,"button",7),a._uU(10," Go To Home Page "),a.qZA(),a.qZA(),a.TgZ(11,"div",8),a.TgZ(12,"div"),a.TgZ(13,"a",9),a._uU(14," Need Help? "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a._UZ(15,"div",10),a.qZA(),a.qZA(),a.qZA())},directives:[o._Y,o.JL,o.F,l.lW],styles:[""]}),r})()}];let T=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[[n.Bz.forChild(b)],n.Bz]}),r})(),A=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[[e.ez,o.u5,o.UX,T,m.lN,u.c,g.Ps,l.ot]]}),r})()}}]);