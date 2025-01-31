"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9119],{59119:function(e,t,a){a.d(t,{FB:function(){return ez},ZP:function(){return eH},wS:function(){return eU}});var n,s,i,r,o=a(22830),c=a(35250),l=a(88798),d=a(21739),u=a(32542),p=a(77010),m=a(70079),g=a(32877),f=a(37469),h=a(78931),x=a(61888),v=a(70671),y=a(94968),b=a(95137),k=a(21722),w=a(39324),j=a(71209),M=a(38104),C=a(12155),_=a(60554),N=a(1454),T=a(32004),S=a(79579),Z=a(89368),B=a(1821);function P(){var e=(0,b.Go)(),t=(0,_.useRouter)(),a=(0,v.Z)(),n=(0,o._)((0,m.useState)(),2),s=n[0],i=n[1],r=null!==e;if((0,m.useEffect)(function(){r||i(void 0)},[r]),!r)return null;var l=(0,c.jsx)("span",{className:"font-medium",children:e.ownerEmail}),d=e.hasActiveRequest||"success"===s;return(0,c.jsx)(Z.Z,{isOpen:!0,onClose:x.noop,type:"warning",size:"custom",className:"max-w-3xl",title:(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)("div",{className:"text-lg",children:(0,c.jsx)(T.Z,(0,j._)((0,w._)({},D.title),{values:{workspaceName:e.accountName}}))}),(0,c.jsx)("div",{className:"text-sm font-normal",children:(0,c.jsx)(T.Z,(0,w._)({},D.subtitle))})]}),icon:N.UIZ,primaryButton:(0,c.jsx)(S.ZP.Button,{onClick:(0,k._)(function(){return(0,M.Jh)(this,function(t){switch(t.label){case 0:i("requesting"),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,b.ZP.requestWorkspaceAccess(e.accountId)];case 2:return t.sent().success&&i("success"),[3,4];case 3:return t.sent(),i("error"),[3,4];case 4:return[2]}})}),color:"primary",title:a.formatMessage(D.requestAccessButton),disabled:d}),secondaryButton:(0,c.jsx)(S.ZP.Button,{onClick:(0,k._)(function(){var e;return(0,M.Jh)(this,function(a){switch(a.label){case 0:return[4,(0,C.signOut)({redirect:!1,callbackUrl:"/auth/login?next=".concat(encodeURIComponent(t.asPath))})];case 1:return e=a.sent(),t.push(e.url),[2]}})}),color:"neutral",title:a.formatMessage(D.signOutButton)}),children:(0,c.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,c.jsx)("div",{children:(0,c.jsx)(T.Z,(0,j._)((0,w._)({},D.emailBelongsToWorkspace),{values:{email:(0,c.jsx)("span",{className:"font-medium",children:e.userEmail})}}))}),(0,c.jsx)("div",{children:d?(0,c.jsx)(T.Z,(0,j._)((0,w._)({},D.activeRequestMessage),{values:{email:l}})):"requesting"===s?(0,c.jsx)(B.Z,{}):"error"===s?(0,c.jsx)(T.Z,(0,j._)((0,w._)({},D.contactWorkspaceAdminEmail),{values:{email:l}})):null})]})})}var D={title:{id:"RequestWorkspaceAccessModal.title",defaultMessage:"Request access to {workspaceName}",description:"Title for request access modal for a workspace"},subtitle:{id:"RequestWorkspaceAccessModal.subtitle",defaultMessage:"ChatGPT Enterprise has been enabled in your workspace",description:"Subtitle for request access modal mentioning ChatGPT Enterprise"},emailBelongsToWorkspace:{id:"RequestWorkspaceAccessModal.emailBelongsToWorkspace",defaultMessage:"{email} belongs to a ChatGPT Enterprise plan but currently has no access.",description:"Message shown telling the user their email is part of an enterprise workspace."},requestWorkspaceAccessMessage:{id:"RequestWorkspaceAccessModal.requestWorkspaceAccessMessage",defaultMessage:"You may request access to the workspace account.",description:"Message telling the user to request access to the workspace."},requestedWorkspaceAccessMessage:{id:"RequestWorkspaceAccessModal.requestedWorkspaceAccessMessage",defaultMessage:"Successfully requested access to the workspace account. Your workspace administrator at {email} may approve the request.",description:"Message telling the user they have requested access to the workspace."},contactWorkspaceAdminEmail:{id:"RequestWorkspaceAccessModal.contactWorkspaceAdminEmail",defaultMessage:"Could not request access. Contact your workspace administrator at {email} to request access to a new workspace account.",description:"Message telling the user who to contact to create a new account for the workspace."},signOutButton:{id:"RequestWorkspaceAccessModal.signOutButton",defaultMessage:"Sign Out",description:"Label for sign out button on modal"},requestAccessButton:{id:"RequestWorkspaceAccessModal.requestAccessButton",defaultMessage:"Request access",description:"Label for request access button on modal"},activeRequestMessage:{id:"RequestWorkspaceAccessModal.activeRequestMessage",defaultMessage:"You have a pending invite request for this workspace. Contact your workspace administrator at {email} to approve your request.",description:"Message telling the user they have an active request for the workspace."}},A=a(75641),W=a(88809),I=a(25260),E=a(62509),V=a(19841),q=a(91530),L=a.n(q),O=a(19579),R=a.n(O),G=a(6038),z=a(32367),U=a(52696);function H(e){var t=e.workspace,a=(0,E.kP)().session,n=(0,h.ec)(function(e){return e.currentWorkspace}),s=(null==n?void 0:n.id)===t.id,i=(0,o._)((0,m.useState)(!1),2),r=i[0],l=i[1],d=(0,z.Z)().onEnableHistory,u=(0,m.useCallback)((0,k._)(function(){return(0,M.Jh)(this,function(e){return l(!0),h.w_.setCurrentWorkspace(t),d(),(0,W.M)(),[2]})}),[t,d]),p=(0,U.GA)(t),g=(0,c.jsx)("div",{className:"flex items-center justify-center",children:(0,c.jsx)(G.B0,{})});if(t.structure===A.CZ.PERSONAL){if(!(null==a?void 0:a.user))return null;g=(0,c.jsx)("div",{className:"flex items-center justify-center",children:(0,c.jsx)(R(),{alt:"Profile",src:a.user.picture,width:38,height:38,className:"flex items-center justify-center rounded-sm"})})}return(0,c.jsxs)(s?"div":"button",{onClick:s?L():u,className:(0,V.default)({"flex w-full items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 p-4 hover:bg-gray-100 focus:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:bg-gray-700":!0,"bg-gray-50 dark:bg-gray-800":s}),children:[(0,c.jsxs)("div",{className:"flex w-full items-center gap-4",children:[g,(0,c.jsx)("div",{className:"inline align-top font-medium",children:p})]}),(0,c.jsx)("div",{className:"flex h-full items-center p-1",children:r?(0,c.jsx)(B.Z,{}):s?(0,c.jsx)(I.Z,{className:"icon-lg"}):(0,c.jsx)(N.Tfp,{className:"icon-lg my-auto"})})]})}function F(e){var t=e.data.map(function(e){return(0,c.jsx)(H,{workspace:e},e.id)});return(0,c.jsx)("div",{className:"flex w-full flex-col gap-2",children:t})}function Q(){var e,t,a=(0,U._O)(),n=(0,E.kP)().session,s=null!==(t=null==n?void 0:null===(e=n.user)||void 0===e?void 0:e.email)&&void 0!==t?t:"";if(0===a.length)return null;var i=a.filter(function(e){return e.structure===A.CZ.WORKSPACE});return(0,c.jsx)(Z.Z,{isOpen:!0,onClose:L(),type:"success",size:"normal",title:(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)(T.Z,(0,w._)({},Y.workspaceSwitcherTitle)),(0,c.jsx)("span",{className:"mt-0.5 text-sm text-gray-700 dark:text-gray-400",children:s})]}),children:(0,c.jsxs)("div",{className:"flex w-full flex-col items-center justify-between",children:[(0,c.jsx)(F,{data:a}),(0,c.jsx)("span",{className:"mt-4 text-sm text-gray-700 dark:text-gray-400",children:(0,c.jsx)(T.Z,(0,j._)((0,w._)({},Y.workspaceSwitcherDisclaimer),{values:{workspaces:(0,c.jsx)("span",{className:"contents font-bold",children:(0,c.jsx)(y.yX,{value:i.map(function(e){return e.name})})}),numWorkspaces:i.length}}))})]})})}var Y=(0,y.vU)({workspaceSwitcherTitle:{id:"workspaceSwitcher.title",defaultMessage:"Select a workspace",description:"title for account switcher modal"},workspaceSwitcherDisclaimer:{id:"workspaceSwitcher.disclaimer",defaultMessage:"You've been added to the {workspaces} {numWorkspaces, plural, one {workspace} other {workspaces}}. You can switch between workspaces at any time.",description:"disclaimer for account switcher modal"}}),J=a(46020),X=a(80474),K=a(44544),$=a(67273);function ee(e){var t=e.children;return(0,c.jsxs)(X.zt,{children:[(0,c.jsx)(X.fC,{className:"radix-state-closed:animate-hide radix-state-open:animate-slideIn grid grid-cols-[auto_max-content] items-center gap-x-4 rounded-lg bg-white p-4 shadow-xs [grid-template-areas:_'title_action'_'description_action'] dark:bg-gray-950 sm:max-w-2xl",open:!0,children:t}),(0,c.jsx)(X.l_,{className:"fixed bottom-0 right-0 z-50 m-0 flex max-w-[100vw] list-none flex-col gap-4 p-6 outline-none"})]})}var et="oai-av-seen";function ea(e){var t=e.onClose,a=e.ageVerificationDeadline;return(0,c.jsxs)(ee,{children:[(0,c.jsx)(X.Dx,{className:"text-sm font-medium [grid-area:_title]",children:(0,c.jsx)(T.Z,(0,j._)((0,w._)({},en.ageVerificationTitle),{values:{deadline:null!=a?Math.floor(a/60/60/24):0,learnMoreLink:function(e){return(0,c.jsx)("a",{href:"https://help.openai.com/en/articles/8411987-why-am-i-being-asked-to-verify-my-age",target:"_blank",rel:"noreferrer",className:"cursor-pointer font-normal underline",children:e})}}}))}),(0,c.jsx)(X.aU,{altText:"Dismiss notification",asChild:!0,children:(0,c.jsx)($.z,{color:"primary",size:"small",onClick:function(){(0,K.setCookie)(et,"true",{maxAge:86400,path:"/"}),t(),J.vm.openModal(J.B.AgeVerificationInterstitial)},children:(0,c.jsx)(T.Z,(0,w._)({},en.startVerification))})}),(0,c.jsx)(X.x8,{})]})}var en=(0,y.vU)({ageVerificationTitle:{id:"ageVerificationBanner.title",defaultMessage:"Please verify your age in the next {deadline, plural, =0 {# days} one {# day} other {# days}}. Italian law requires you to prove you're old enough to use ChatGPT. <learnMoreLink>Learn more</learnMoreLink>.",description:"Explanation of why ChatGPT needs to verify age"},ageVerificationDescription:{id:"ageVerificationBanner.description",defaultMessage:"<learnMoreLink>Learn more</learnMoreLink>",description:"Link to learn more about why ChatGPT needs to verify age"},learnMoreLink:{id:"ageVerificationBanner.learnMoreLink",defaultMessage:"Learn more",description:"Link to learn more about why ChatGPT needs to verify age"},dismiss:{id:"ageVerificationBanner.dismiss",defaultMessage:"Dismiss",description:"Dismiss/close age verification ui Banner"},startVerification:{id:"ageVerificationBanner.startVerification",defaultMessage:"Start verification",description:"Start age verification process button"}}),es=a(4337),ei=a(21389),er=a(12346);function eo(){var e=(0,es._)(["underline font-normal"]);return eo=function(){return e},e}function ec(e){var t=e.onClose,a=(0,er.Fr)().openSettings;return(0,c.jsxs)(ee,{children:[(0,c.jsx)(X.Dx,{className:"text-sm font-medium [grid-area:_title]",children:(0,c.jsx)(T.Z,(0,j._)((0,w._)({},ed.cookieConsentBannerTitle),{values:{privacyPolicyLink:function(e){return(0,c.jsx)(el,{href:"https://openai.com/policies/privacy-policy",target:"_blank",rel:"noreferrer",children:e})},learnMoreLink:function(e){return(0,c.jsx)(el,{href:"https://help.openai.com/articles/8077698-how-do-i-use-chatgpt-browse-with-bing-to-search-the-web",target:"_blank",rel:"noreferrer",children:e})},settingsPanel:function(e){return(0,c.jsx)(el,{$as:"button",onClick:function(){a(er.u5.DataControls)},children:e})}}}))}),(0,c.jsxs)("div",{className:"flex gap-3",children:[(0,c.jsx)($.z,{color:"neutral",size:"small",onClick:function(){t()},children:(0,c.jsx)(T.Z,(0,w._)({},ed.reject))}),(0,c.jsx)($.z,{color:"primary",size:"small",onClick:function(){t()},children:(0,c.jsx)(T.Z,(0,w._)({},ed.accept))})]}),(0,c.jsx)(X.x8,{})]})}var el=ei.Z.a(eo()),ed=(0,y.vU)({cookieConsentBannerTitle:{id:"CookieConsentBanner.title",defaultMessage:"We use cookies to provide, improve, and protect our services. Visit our <privacyPolicyLink>privacy policy</privacyPolicyLink> to learn more. You can manage your cookie preferences in your <settingsPanel>settings panel</settingsPanel>. <learnMoreLink>Learn more</learnMoreLink>.",description:"Explanation of why ChatGPT needs to verify age"},reject:{id:"CookieConsentBanner.reject",defaultMessage:"Reject",description:"Reject analytics cookies button"},accept:{id:"CookieConsentBanner.accept",defaultMessage:"Accept",description:"Consent to analytics cookies button"}}),eu=a(77311),ep=a(6948),em=a(88327),eg="oai/apps/hasSeenOnboarding";function ef(e,t){return e===i.Workspace?"".concat(eg,"/").concat(e,"/").concat(t):"".concat(eg,"/").concat(e)}(n=i||(i={})).Personal="chat",n.Workspace="workspace";var eh=function(e,t){var a=(0,m.useCallback)(function(){ep.m.setItem(ef(e,t),new Date().toLocaleDateString("en-CA",{year:"numeric",month:"2-digit",day:"2-digit"}))},[e,t]),n=(0,o._)((0,m.useState)(null),2),s=n[0],r=n[1];(0,m.useEffect)(function(){var a=ep.m.getItem("".concat(eg,"/").concat(e));a||e!==i.Workspace||(a=ep.m.getItem(ef(e,t))),r(!!a&&a)},[e,t]);var c=(0,m.useCallback)(function(){return s?new Date(!0===s?"2022-12-14":s):s},[s]);return(0,m.useMemo)(function(){return{setHasSeenOnboarding:a,getHasSeenOnboardingDate:c}},[c,a])};function ex(e){var t=e.onClose,a=e.scope,n=eh(a,(0,h.ec)(h.F_.workspaceId)).setHasSeenOnboarding,s=(0,m.useCallback)(function(){t(!0),n()},[t,n]);return a===i.Personal?(0,c.jsx)(ey,{onSubmit:s}):(0,c.jsx)(eb,{onSubmit:s})}var ev=function(e){var t=e.icon,a=e.title,n=e.body;return(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"flex flex-row items-center gap-1.5",children:[(0,c.jsx)("div",{children:t}),(0,c.jsx)("div",{className:"font-medium text-token-text-primary",children:a})]}),(0,c.jsx)("div",{className:"text-sm text-token-text-secondary",children:n})]})},ey=function(e){var t=e.onSubmit,a=(0,v.Z)();return(0,c.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,c.jsx)(ev,{icon:(0,c.jsx)(em.wP,{isSolid:!0,className:"h-5 w-5 text-green-600"}),title:(0,c.jsx)(T.Z,(0,w._)({},ek.askAway)),body:(0,c.jsx)(T.Z,(0,w._)({},ek.askAwayBody))}),(0,c.jsx)(ev,{icon:(0,c.jsx)(em.NJ,{className:"text-brand-purple"}),title:(0,c.jsx)(T.Z,(0,w._)({},ek.warning)),body:(0,c.jsx)(T.Z,(0,j._)((0,w._)({},ek.warningBody),{values:{article:function(e){return(0,c.jsx)("a",{href:"https://help.openai.com/en/articles/7039943-data-usage-for-consumer-services-faq",target:"_blank",className:"underline",rel:"noopener noreferrer",children:e})}}}))}),(0,c.jsx)(ev,{icon:(0,c.jsx)(em.CJ,{className:"text-orange-300"}),title:(0,c.jsx)(T.Z,(0,w._)({},ek.accuracy)),body:(0,c.jsx)(T.Z,(0,w._)({},ek.accuracyBody))}),(0,c.jsx)("div",{className:"flex flex-row justify-end",children:(0,c.jsx)(S.mH,{title:a.formatMessage(ek.gettingStartedButton),onClick:t,color:"primary"})})]})},eb=function(e){var t=e.onSubmit,a=(0,v.Z)(),n=(0,h.ec)(function(e){return e.currentWorkspace}),s=null==n?void 0:n.name;return(0,c.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"font-medium text-token-text-primary",children:null!=s?(0,c.jsx)(T.Z,(0,w._)({values:{workspaceName:s}},ek.workspaceWelcome)):(0,c.jsx)(T.Z,(0,w._)({},ek.workspaceWelcomeNoName))}),(0,c.jsx)("div",{className:"text-sm text-token-text-secondary",children:(0,c.jsx)(T.Z,(0,w._)({},ek.workspaceWelcomeBody))})]}),(0,c.jsx)(ev,{icon:(0,c.jsx)(eu.Z,{className:"icon-md text-brand-purple"}),title:(0,c.jsx)(T.Z,(0,w._)({},ek.workUse)),body:(0,c.jsx)(T.Z,(0,w._)({},ek.workUseBody))}),(0,c.jsx)(ev,{icon:(0,c.jsx)(em.wP,{isSolid:!0,className:"h-5 w-5 text-green-600"}),title:(0,c.jsx)(T.Z,(0,w._)({},ek.askAway)),body:(0,c.jsx)(T.Z,(0,w._)({},ek.askAwayBody))}),(0,c.jsx)(ev,{icon:(0,c.jsx)(em.CJ,{className:"text-orange-300"}),title:(0,c.jsx)(T.Z,(0,w._)({},ek.accuracy)),body:(0,c.jsx)(T.Z,(0,w._)({},ek.accuracyBody))}),(0,c.jsx)("div",{className:"flex flex-row justify-end",children:(0,c.jsx)(S.mH,{title:a.formatMessage(ek.gettingStartedButton),onClick:t,color:"primary"})})]})},ek=(0,y.vU)({askAway:{id:"onboarding.askAway",defaultMessage:"Ask away",description:"Title for the tip about what ChatGPT can do"},askAwayBody:{id:"onboarding.askAwayBody",defaultMessage:"ChatGPT can answer questions, help you learn, write code, brainstorm together, and much more.",description:"Body copy for the tip about what ChatGPT can do"},warning:{id:"onboarding.warning",defaultMessage:"Don’t share sensitive info",description:"Title for the warning about ChatGPT traning"},warningBody:{id:"onboarding.warningBody",defaultMessage:"Chat history may be reviewed or used to improve our services. Learn more about your choices in our <article>Help Center</article>.",description:"Body copy for the warning about ChatGPT traning"},accuracy:{id:"onboarding.accuracy",defaultMessage:"Check your facts",description:"Title for the warning about ChatGPT inaccuracy"},accuracyBody:{id:"onboarding.accuracyBody",defaultMessage:"While we have safeguards, ChatGPT may give you inaccurate information. It’s not intended to give advice.",description:"Body copy for the warning about ChatGPT inaccuracy"},gettingStartedButton:{id:"onboarding.gettingStartedButton",defaultMessage:"Okay, let’s go",description:"Button to accept the getting started modal"},workspaceWelcome:{id:"onboarding.workspaceWelcome",defaultMessage:"Welcome to the {workspaceName} Workspace",description:"Introduction welcome for workspace onboarding"},workspaceWelcomeNoName:{id:"onboarding.workspaceWelcomeNoName",defaultMessage:"Welcome to the your Workspace",description:"Introduction welcome for workspace onboarding when no Workspace name is available"},workspaceWelcomeBody:{id:"onboarding.workspaceWelcomeBody",defaultMessage:"Here you can use our latest models, with more capabilities, and fewer limits.",description:"Introduction welcome body for workspace onboarding"},workUse:{id:"onboarding.workUse",defaultMessage:"Made for use at work",description:"Title for the warning about ChatGPT business workspace use"},workUseBody:{id:"onboarding.workUseBody",defaultMessage:"By default, chats in this workspace are not used to train our AI models.",description:"Body copy for the warning about ChatGPT business workspace use"}}),ew=a(81949),ej=a(16920),eM=a(77997),eC=function(e){var t=e.onContinue,a=(0,v.Z)();return(0,c.jsx)(Z.Z,{isOpen:!0,onClose:x.noop,type:"success",title:a.formatMessage(eZ.chatgptTitle),description:a.formatMessage(eZ.chatgptEnterpriseDescription),children:(0,c.jsx)(ex,{onClose:function(){t()},scope:i.Workspace})})},e_=function(e){var t=e.onContinue,a=e.onSkip,n=(0,v.Z)();return(0,c.jsx)(Z.Z,{isOpen:!0,onClose:x.noop,type:"success",title:n.formatMessage(eZ.primaryRoleTitle),description:n.formatMessage(eZ.tailorChatGPT),size:"custom",className:"max-w-lg",children:(0,c.jsx)(eT,{options:eD,onSkip:a,onSubmit:t})})},eN=function(e){var t=e.onContinue,a=e.onSkip,n=(0,v.Z)();return(0,c.jsx)(Z.Z,{isOpen:!0,onClose:x.noop,type:"success",title:n.formatMessage(eZ.workTypeTitle),description:n.formatMessage(eZ.tailorChatGPT),size:"custom",className:"max-w-lg",children:(0,c.jsx)(eT,{options:eA,onSkip:a,onSubmit:t,multiSelect:!0})})};function eT(e){var t=e.options,a=e.onSkip,n=void 0===a?x.noop:a,s=e.onSubmit,i=void 0===s?x.noop:s,r=e.multiSelect,l=void 0!==r&&r,d=function(e,t){var a=e.indexOf(t);return -1===a?(0,ew._)(e).concat([t]):(0,ew._)(e.slice(0,a)).concat((0,ew._)(e.slice(a+1)))},u="dark"===(0,eM.F)().theme,p=(0,v.Z)(),g=(0,o._)((0,m.useState)([]),2),f=g[0],h=g[1],y=(0,m.useCallback)(function(e){var t,a=null!==(t=e.currentTarget.dataset.value)&&void 0!==t?t:"";l?h(d(f,a)):i(a)},[i,f,h,l]);return(0,c.jsxs)("div",{children:[l&&(0,c.jsx)("p",{className:"mx-2 text-sm text-gray-400",children:p.formatMessage(eZ.selectAll)}),(0,c.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,c.jsx)("div",{className:"flex-wrap space-y-4",children:t.map(function(e){return(0,c.jsx)($.z,{onClick:y,color:f.includes(e.id)?u?"light":"dark":"neutral",size:"medium",className:"mx-2 ".concat(f.includes(e.id)?"hover:bg-gray-200":"hover:bg-gray-100"),"data-value":e.id,children:(0,c.jsx)(T.Z,(0,w._)({},e.displayValue))},e.id)})})}),(0,c.jsxs)("div",{className:"mt-4 flex flex-row justify-end",children:[(0,c.jsx)(S.mH,{title:p.formatMessage(eZ.skipButton),onClick:n}),l&&(0,c.jsx)(S.mH,{title:p.formatMessage(eZ.continueButton),onClick:function(){i(f)},disabled:0===f.length,color:"primary",className:"ml-4"})]})]})}function eS(e){var t=e.onClose,a=(0,o._)((0,m.useState)(0),2),n=a[0],s=a[1],i=(0,o._)((0,m.useState)({role:void 0,departments:void 0}),2),l=i[0],d=i[1],u=(0,h.ec)(h.F_.workspaceId),p=(0,E.kP)().session.user.id,g=function(){ej.m9.logEvent("chatgpt_biz_onboarding_skipped"),t()};switch(n){case r.InitialModal:return(0,c.jsx)(eC,{onContinue:function(){s(r.RoleModal)}});case r.RoleModal:return(0,c.jsx)(e_,{onContinue:function(e){d(function(t){return(0,j._)((0,w._)({},t),{role:e})}),s(r.DepartmentModal)},onSkip:g});case r.DepartmentModal:return(0,c.jsx)(eN,{onContinue:function(e){var a=(0,j._)((0,w._)({},l),{departments:e});t(),ej.m9.logEvent("chatgpt_biz_onboarding_completed"),b.ZP.updateWorkspaceUserOnboardingInformation(u,p,a)},onSkip:g});default:return(0,c.jsx)(c.Fragment,{})}}(s=r||(r={}))[s.InitialModal=0]="InitialModal",s[s.RoleModal=1]="RoleModal",s[s.DepartmentModal=2]="DepartmentModal";var eZ=(0,y.vU)({chatgptTitle:{id:"onboarding.chatgptTitle",defaultMessage:"ChatGPT",description:"Title for the initial onboarding modal"},chatgptEnterpriseDescription:{id:"onboarding.chatgptEnterpriseDescription",defaultMessage:"Enterprise Edition",description:"Description for the ChatGPT Enterprise Edition"},primaryRoleTitle:{id:"onboarding.primaryRoleTitle",defaultMessage:"What's your primary role?",description:"Question asking the user about their primary role"},tailorChatGPT:{id:"onboarding.tailorChatGPT",defaultMessage:"This will help us tailor ChatGPT for you.",description:"Description explaining the reason for the questions"},workTypeTitle:{id:"onboarding.workTypeTitle",defaultMessage:"What kind of work do you do?",description:"Question asking the user about the kind of work they do"},selectAll:{id:"onboarding.selectAll",defaultMessage:"Select all that apply",description:"Instruction for multi-select options"},skipButton:{id:"onboarding.skipButton",defaultMessage:"Skip",description:"Label for the skip button"},continueButton:{id:"onboarding.continueButton",defaultMessage:"Continue",description:"Label for the continue button"}}),eB=(0,y.vU)({marketing:{id:"onboarding.departments.marketing",defaultMessage:"Marketing",description:"Department option for Marketing"},analytics:{id:"onboarding.departments.analytics",defaultMessage:"Data or Analytics",description:"Department option for Data or Analytics"},product:{id:"onboarding.departments.product",defaultMessage:"Product Management",description:"Department option for Product Management"},comms:{id:"onboarding.departments.comms",defaultMessage:"Communications",description:"Department option for Communication"},finance:{id:"onboarding.departments.finance",defaultMessage:"Finance or Accounting",description:"Department option for Finance or Accounting"},customer_experience:{id:"onboarding.departments.customer_experience",defaultMessage:"Customer Experience",description:"Department option for Customer Experience"},project_management:{id:"onboarding.departments.project_management",defaultMessage:"Project or Program Management",description:"Department option for Project or Program Management"},engineering:{id:"onboarding.departments.engineering",defaultMessage:"Engineering",description:"Department option for Engineering"},education_professional:{id:"onboarding.departments.education_professional",defaultMessage:"Education Professional",description:"Department option for Education Professional"},design:{id:"onboarding.departments.design",defaultMessage:"Design",description:"Department option for Design"},administrative:{id:"onboarding.departments.administrative",defaultMessage:"Administrative Assistant",description:"Department option for Administrative Assistant"},partnerships:{id:"onboarding.departments.partnerships",defaultMessage:"Partnerships",description:"Department option for Partnerships"},it:{id:"onboarding.departments.it",defaultMessage:"Information Technology (IT)",description:"Department option for Information Technology (IT)"},ops:{id:"onboarding.departments.ops",defaultMessage:"Operations",description:"Department option for Operations"},human_resources:{id:"onboarding.departments.human_resources",defaultMessage:"Human Resources",description:"Department option for Human Resources"},research:{id:"onboarding.departments.research",defaultMessage:"Research & Development",description:"Department option for Research & Development"},sales:{id:"onboarding.departments.sales",defaultMessage:"Sales",description:"Department option for Sales"},legal:{id:"onboarding.departments.legal",defaultMessage:"Legal",description:"Department option for Legal"},healthcare:{id:"onboarding.departments.healthcare",defaultMessage:"Healthcare Professional",description:"Department option for Healthcare Professional"},other:{id:"onboarding.departments.other",defaultMessage:"Other",description:"Department option for Other"}}),eP=(0,y.vU)({team_member:{id:"onboarding.role.team_member",defaultMessage:"Team Member/ Individual Contributor",description:"Label for the role: Team Member/ Individual Contributor"},manager:{id:"onboarding.role.manager",defaultMessage:"Manager",description:"Label for the role: Manager"},student:{id:"onboarding.role.student",defaultMessage:"Student",description:"Label for the role: Student"},executive:{id:"onboarding.role.executive",defaultMessage:"Executive",description:"Label for the role: Executive"},director:{id:"onboarding.role.director",defaultMessage:"Director",description:"Label for the role: Director"},business_owner:{id:"onboarding.role.business_owner",defaultMessage:"Business Owner",description:"Label for the role: Business Owner"},freelancer:{id:"onboarding.role.freelancer",defaultMessage:"Freelancer",description:"Label for the role: Freelancer"},other:{id:"onboarding.role.other",defaultMessage:"Other",description:"Label for the role: Other"}}),eD=[{id:"team_member",displayValue:eP.team_member},{id:"manager",displayValue:eP.manager},{id:"student",displayValue:eP.student},{id:"executive",displayValue:eP.executive},{id:"director",displayValue:eP.director},{id:"business_owner",displayValue:eP.business_owner},{id:"freelancer",displayValue:eP.freelancer},{id:"other",displayValue:eP.other}],eA=[{id:"marketing",displayValue:eB.marketing},{id:"analytics",displayValue:eB.analytics},{id:"product",displayValue:eB.product},{id:"comms",displayValue:eB.comms},{id:"engineering",displayValue:eB.engineering},{id:"education_professional",displayValue:eB.education_professional},{id:"finance",displayValue:eB.finance},{id:"customer_experience",displayValue:eB.customer_experience},{id:"project_management",displayValue:eB.project_management},{id:"design",displayValue:eB.design},{id:"administrative",displayValue:eB.administrative},{id:"it",displayValue:eB.it},{id:"ops",displayValue:eB.ops},{id:"human_resources",displayValue:eB.human_resources},{id:"research",displayValue:eB.research},{id:"sales",displayValue:eB.sales},{id:"partnerships",displayValue:eB.partnerships},{id:"legal",displayValue:eB.legal},{id:"healthcare",displayValue:eB.healthcare},{id:"other",displayValue:eB.other}],eW=function(e){var t=e.onClose,a=(0,v.Z)();return(0,c.jsx)(Z.Z,{isOpen:!0,onClose:x.noop,type:"success",title:"ChatGPT",description:a.formatMessage(eE.personalOnboardingSubheading),children:(0,c.jsx)(ex,{onClose:t,scope:i.Personal})})};function eI(e){var t=e.ageVerificationDeadline,a=(0,o._)((0,m.useState)(0),2),n=a[0],s=a[1],r=(0,h.ec)(h.F_.workspaceId),l=eh(i.Personal).getHasSeenOnboardingDate,d=(0,h.ec)(h.F_.isBusinessWorkspace),u=eh(i.Workspace,r).getHasSeenOnboardingDate,p=0===(0,h.hz)().size?"loading":(0,K.getCookie)(et)||null==t?"hide":"show",g=0===(0,h.hz)().size?"loading":"hide",f=(0,h.$T)(),x=(0,b.Go)(),v=(0,h.ec)(h.F_.hasMultipleWorkspaces)&&null==r,y=(0,m.useMemo)(function(){return[{Component:Q,getModalState:function(){return f?"loading":v?"show":"hide"}},{Component:P,getModalState:function(){return f?"loading":null!==x?"show":"hide"}},{Component:ec,getModalState:function(){return g}},{Component:eW,getModalState:function(){if(d)return"hide";var e=l();return null===e?"loading":!1===e?"show":"hide"}},{Component:eS,getModalState:function(){if(!d)return"hide";var e=u();return null===e?"loading":!1===e?"show":"hide"}},{Component:ea,getModalState:function(){return p}}]},[f,v,x,g,d,l,u,p]);(0,m.useEffect)(function(){y[n]&&"hide"===y[n].getModalState()&&s(y.findIndex(function(e){return"hide"!==e.getModalState()}))},[n,y]);var k=y[n];if(null==k)return null;var w=k.getModalState();if("loading"===w)return null;"hide"===w&&s(function(e){return e+1});var j=y[n].Component;return(0,c.jsx)(j,{onClose:function(){s(function(e){return e+1})},ageVerificationDeadline:t})}var eE=(0,y.vU)({personalOnboardingSubheading:{id:"BlockingInitialModals.personalOnboardingSubheading",defaultMessage:"Tips for getting started",description:"Subheading for the Personal onbaording modal"}}),eV=a(6780),eq=a(10664),eL=function(e){var t=e.action;return(0,c.jsxs)("div",{className:"flex items-center justify-between overflow-hidden text-gray-600 dark:text-gray-300",children:[(0,c.jsx)("div",{className:"flex flex-shrink items-center overflow-hidden text-sm",children:(0,c.jsx)("div",{className:"truncate",children:(0,c.jsx)(T.Z,(0,w._)({},t.actionMessageDescriptor))})}),(0,c.jsx)("div",{className:"ml-3 flex flex-row gap-2",children:(0,eq.A3)(t.keyboardBinding).map(function(e,a){return(0,c.jsx)(eO,{keyName:e},"".concat(t.key,"-").concat(a))})})]})},eO=function(e){var t=e.keyName,a=(0,V.default)("my-2 flex h-8 items-center justify-center rounded-[4px] border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300");return t.length>1?t.length>3?(0,c.jsx)("div",{className:(0,V.default)(a,"min-w-[50px]"),children:(0,c.jsx)("span",{className:"text-xs",children:t})}):(0,c.jsx)("div",{className:(0,V.default)(a,"min-w-[32px]"),children:(0,c.jsx)("span",{className:"text-xs",children:t})}):(0,c.jsx)("div",{className:(0,V.default)(a,"min-w-[32px]"),children:(0,c.jsx)("span",{className:"text-sm",children:t})})},eR=(0,y.vU)({keyboardActionsModalTitle:{id:"KeyboardActionsModal.keyboardActionsModalTitle",defaultMessage:"Keyboard shortcuts",description:"Title of the keyboard shortcuts modal"}}),eG=function(){var e=(0,v.Z)(),t=(0,J.tN)(function(e){return e.activeModals.has(J.B.KeyboardActions)}),a=function(){J.vm.closeModal(J.B.KeyboardActions)},n=(0,eq.JS)(),s=(0,m.useMemo)(function(){var e=Math.ceil(n.length/2);return[n.slice(0,e),n.slice(e)]},[n]);return(0,c.jsx)(Z.Z,{isOpen:t,onClose:a,type:"success",size:"custom",className:"md:max-w-[672px] lg:max-w-[796px] xl:max-w-4xl",closeButton:(0,c.jsx)(S.ZP.CloseButton,{onClose:a}),title:e.formatMessage(eR.keyboardActionsModalTitle),children:(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-9",children:s.map(function(e,t){return(0,c.jsx)("div",{className:"flex flex-col overflow-hidden",children:e.map(function(e){return(0,c.jsx)(eL,{action:e},e.key)})},"col-".concat(t))})})})})},ez=Symbol("invalid path");function eU(e){var t,a=e.split(/[#?]/)[0];if("/"!==a){var n=/\/c\/([a-f0-9-]+)/.exec(a);return null!==(t=null==n?void 0:n[1])&&void 0!==t?t:ez}}function eH(e){var t=e.urlThreadId,a=e.clientThreadId,n=e.isUserInCanPayGroup,s=e.serviceStatus,i=e.serviceAnnouncement,r=e.ageVerificationDeadline,x=(0,o._)((0,m.useState)(function(){return void 0!==t?t:void 0!==a?a:(0,f.OX)()}),2),v=x[0],y=x[1];void 0!==t&&v!==t&&f.tQ.getServerThreadId(v)!==t&&y(t),void 0!==t||(0,f.Zz)(v)||y((0,f.OX)());var b=(0,h.$T)(),k=(0,h.WY)(),w=(0,h.ec)(h.F_.workspaceId),j=(0,d.g)(function(e){return e.updateFlagValue}),M=(0,h.hz)(),C=M.has(g.PL),_=M.has(g.rX);(0,m.useEffect)(function(){C&&(p.Z.setPrefetchEnabled(_),p.Z.gatherData())},[C,_]),(0,m.useEffect)(function(){void 0!==n&&j("isUserInCanPayGroup",n)},[j,n]),(0,m.useEffect)(function(){(null==s?void 0:s.type)&&!1===k&&l.m.warning(s.message,{hasCloseButton:!0,duration:5})},[k,null==s?void 0:s.message,null==s?void 0:s.type]);var N=(0,m.useRef)(!1);return(0,m.useEffect)(function(){if(!b){var e=k?i.paid:i.public;if((null==e?void 0:e.type)&&(null==e?void 0:e.message)&&!N.current){N.current=!0;var t=e.message,a={hasCloseButton:!0,duration:15};switch(e.type){case"danger":l.m.danger(t,a);break;case"info":l.m.info(t,a);break;case"warning":l.m.warning(t,a)}}}},[i,b,k]),(0,c.jsxs)(u.gB.Provider,{value:null,children:[(0,c.jsx)(eI,{ageVerificationDeadline:r},w),(0,c.jsx)(eG,{}),(0,c.jsx)(eV.Z,{clientThreadId:v,setClientThreadId:y})]})}},6780:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(39324),s=a(35250),i=a(13995),r=a(60554),o=a(70079),c=a(1454),l=a(32004),d=a(94968),u=a(37469),p=a(46020),m=a(78931),g=a(32542),f=a(28735),h=a(10664),x=a(33669),v=a(2166),y=a(41932),b=a(61402),k=a(20522),w=a(13940),j=a(47393),M=a(82816),C=a(52481),_=a(82277),N=a(13090),T=a(12787),S=a(42569);function Z(e){var t,n=e.clientThreadId,l=e.setClientThreadId,d=e.initiallyHighlightedMessageId,v=e.continueConversationUrl,y=null!==(0,o.useContext)(g.gB);(0,u.ax)(n);var Z=(0,u.XK)(n),P=(0,r.useRouter)(),D=(0,m.hz)(),A=(0,u.UL)(n),W=(0,o.useContext)(g.QL).historyDisabled,I=(0,S.Xy)(A.lastModelUsed,n),E=(0,i.NL)();(0,o.useEffect)(function(){return u.tQ.retainThread(n),function(){setTimeout(function(){E.invalidateQueries(["conversation",n])},0),u.tQ.releaseThread(n)}},[n,E]),(0,o.useEffect)(function(){p.vm.closeSharingModal()},[n,Z]);var V=(0,o.useCallback)(function(){l((0,u.OX)()),P.replace(I.tags.includes(S.S.GPT_4)?"/":"/?model=".concat(I.id),void 0,{shallow:!0})},[l,I.tags,I.id,P]);(0,h.yx)({resetThreadAction:V,clientThreadId:n});var q=(0,p.tN)(function(e){return e.activeSidebar}),L=(0,x.w$)();(0,o.useEffect)(function(){return function(){b.hx.abortAllRequests()}},[n]),t=(0,m.hz)().has("debug"),(0,o.useEffect)(function(){if(t)return(0,f.eR)(document,{keydown:function(e){e.target instanceof HTMLElement&&["input","textarea","select","button"].includes(e.target.tagName.toLowerCase())||"\\"!==e.key||p.vm.toggleActiveSidebar("debug")}})},[t]);var O=(0,o.useRef)(A.threadId);(0,o.useEffect)(function(){A.threadId!==O.current&&(p.vm.setActiveSidebar(!1),O.current=A.threadId),b.hx.clear()},[A.threadId]);var R=(0,m.ec)(function(e){return e.currentWorkspace}),G=null==R?void 0:R.id,z=(0,k.Ml)(),U=(0,o.useCallback)(function(e){z&&null!=G&&Promise.all([a.e(8682),a.e(1533),a.e(2864)]).then(a.bind(a,60790)).then(function(t){return t.gizmoCreateGPTCompletionCallback(e,G,P,l)})},[z,G,P,l]);return(0,s.jsxs)(_.Z,{showNavigation:!y,renderTitle:(0,s.jsx)(B,{clientThreadId:n}),renderMobileHeaderRightContent:(0,s.jsx)(N.js,{onClick:V,children:W?(0,s.jsx)(c.Bw1,{className:"icon-lg"}):(0,s.jsx)(c.OvN,{className:"icon-lg"})}),renderSidebar:(0,s.jsx)(j.Z,{onNewThread:V,children:(0,s.jsx)(w.Z,{activeId:W?void 0:Z,onNewThread:V})}),children:[(0,s.jsx)(T.Z,{initialThreadData:A,clientThreadId:n,initiallyHighlightedMessageId:d,continueConversationUrl:v,onCompletionFinished:U},n),(0,s.jsxs)(_.Z.Sidebars,{children:[D.has("debug")&&"debug"===q&&(0,s.jsx)(C.fv,{clientThreadId:n,slideOver:!L,onClose:function(){return p.vm.toggleActiveSidebar("debug")},isOpen:!0}),D.has("tools3_dev")&&(0,s.jsx)(M.ZP,{slideOver:!L})]})]})}function B(e){var t,a=e.clientThreadId,i=null!==(t=u.tQ.getTitle(a))&&void 0!==t?t:"New chat",r=(0,v.Z)(a,i,!0),d=r.resolvedTitle,p=r.isTypingEffect,m=(0,o.useContext)(g.QL),f=m.historyDisabled,h=m.toggleHistoryDisabled;return(0,s.jsx)(s.Fragment,{children:f?(0,s.jsxs)("button",{className:"flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",onClick:function(){return h()},children:[(0,s.jsx)(c.$IY,{className:"icon-sm"}),(0,s.jsx)(l.Z,(0,n._)({},P.enableChatHistory))]}):p&&null!=d?(0,s.jsx)(y.Z,{text:d}):null!=d?d:(0,s.jsx)(l.Z,(0,n._)({},P.newChat))})}var P=(0,d.vU)({enableChatHistory:{id:"navigation.enableChatHistory",defaultMessage:"Enable chat history",description:"Enable chat history button label"},newChat:{id:"navigation.newChat",defaultMessage:"New chat",description:"New chat header title"}})}}]);