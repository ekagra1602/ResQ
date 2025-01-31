"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7307],{63857:function(e,t,n){n.d(t,{h:function(){return p},t:function(){return m}});var o=n(4337),r=n(35250),i=n(95182),a=n.n(i),s=n(1454),c=n(21389);function d(){var e=(0,o._)(["text-xs flex items-center justify-center gap-1"]);return d=function(){return e},e}function u(){var e=(0,o._)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);return u=function(){return e},e}function l(){var e=(0,o._)(["flex-grow flex-shrink-0 tabular-nums"]);return l=function(){return e},e}function f(){var e=(0,o._)(["text-xs inline-flex bg-token-surface-secondary h-8 border rounded border-token-border-medium"]);return f=function(){return e},e}function g(){var e=(0,o._)(["text-token-text-secondary disabled:text-token-border-medium w-8 flex items-center justify-center hover:bg-token-surface-tertiary"]);return g=function(){return e},e}function h(){var e=(0,o._)(["text-token-text-tertiary px-2 flex items-center font-mono tracking-widest"]);return h=function(){return e},e}function p(e){var t=e.currentPage,n=e.onChangeIndex,o=e.length,i=e.className,c=function(e){n(a()(t+e,0,o-1))};return(0,r.jsxs)(y,{className:i,children:[(0,r.jsx)(b,{onClick:function(){return c(-1)},disabled:0===t,children:(0,r.jsx)(s.YFh,{className:"icon-xs"})}),(0,r.jsx)(k,{children:"".concat(t+1," / ").concat(o)}),(0,r.jsx)(b,{onClick:function(){return c(1)},disabled:t===o-1,children:(0,r.jsx)(s.Tfp,{className:"icon-xs"})})]})}var y=c.Z.div(d()),b=c.Z.button(u()),k=c.Z.span(l());function m(e){var t=e.currentPage,n=e.onChangeIndex,o=e.length,i=e.className,c=function(e){n(a()(t+e,0,o-1))};return(0,r.jsxs)(v,{className:i,children:[(0,r.jsx)(C,{onClick:function(){return c(-1)},disabled:0===t,children:(0,r.jsx)(s.YFh,{className:"icon-sm"})}),(0,r.jsx)(x,{children:"".concat(t+1,"/").concat(o)}),(0,r.jsx)(C,{onClick:function(){return c(1)},disabled:t===o-1,children:(0,r.jsx)(s.Tfp,{className:"icon-sm"})})]})}var v=c.Z.div(f()),C=c.Z.button(g()),x=c.Z.span(h())},67:function(e,t,n){n.d(t,{X:function(){return c},m:function(){return d}});var o=n(4337),r=n(35250),i=n(9181),a=n.n(i);function s(){var e=(0,o._)(["rounded-full bg-black dark:bg-gray-100"]);return s=function(){return e},e}var c=n(21389).Z.div(s());function d(){return(0,r.jsx)(a(),{href:"/",shallow:!0,className:"block h-[34px] w-[34px]",children:(0,r.jsx)(c,{className:"h-full w-full"})})}},640:function(e,t,n){n.d(t,{V:function(){return a}});var o=n(51217),r=n(36560),i=n.n(r),a=function(){function e(){(0,o._)(this,e),this.emitter=new(i()),this.emitter.setMaxListeners(1e3)}var t=e.prototype;return t.on=function(e,t){this.emitter.on(e,t)},t.off=function(e,t){this.emitter.off(e,t)},t.publish=function(e){this.emitter.emit(e.kind,e),this.emitter.emit("anyEvent",e)},e}()},10664:function(e,t,n){n.d(t,{n:function(){return D},A3:function(){return j},yx:function(){return P},JS:function(){return I}});var o,r,i,a=n(96237),s=n(39324),c=n(81949),d=n(15858),u=n(11084),l=n(82534),f=n(90408),g=n(82081),h=n(61888),p=n(70079),y=n(94968),b=n(95954),k=n(73569),m=n(88798),v=n(32877),C=n(37469),x=n(46020),M=n(78931),_=n(640),w=n(52787),A=n(45248),T=p.useLayoutEffect,B=RegExp("```.*?\\n([\\s\\S]+?)\\n?```[^`]*$","gms");(o=r||(r={})).Core="Core",o.Chat="Chat",o.Settings="Settings";var K=(0,s._)({Mod:"mod",Comma:","},d.s),S=(i={},(0,a._)(i,K.Mod,/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)?"⌘":"Ctrl"),(0,a._)(i,K.Comma,","),(0,a._)(i,K.Enter,"⏎"),(0,a._)(i,K.Escape,"Esc"),(0,a._)(i,K.ArrowUp,"↑"),(0,a._)(i,K.ArrowDown,"↓"),(0,a._)(i,K.ArrowLeft,"←"),(0,a._)(i,K.ArrowRight,"→"),(0,a._)(i,K.Backspace,"⌫"),(0,a._)(i,K.Delete,"⌦"),(0,a._)(i,K.Tab,"⇥"),(0,a._)(i,K.Control,"Ctrl"),(0,a._)(i,K.Shift,"Shift"),i),j=function(e){var t;return e.map(function(e){return null!==(t=S[e])&&void 0!==t?t:e})},L=(0,y.vU)({newChat:{id:"keyboardActions.newChat",defaultMessage:"Open new chat",description:"Keyboard shortcut to open a new chat"},focusPromptTextarea:{id:"keyboardActions.focusPromptTextarea",defaultMessage:"Focus chat input",description:"Keyboard shortcut to focus the chat input"},copyLastCodeBlock:{id:"keyboardActions.copyLastCodeBlock",defaultMessage:"Copy last code block",description:"Keyboard shortcut to copy the last code block in the chat"},copyLastResponse:{id:"keyboardActions.copyLastResponse",defaultMessage:"Copy last response",description:"Keyboard shortcut to copy the last response in the chat"},toggleCustomInstructions:{id:"keyboardActions.toggleCustomInstructions",defaultMessage:"Set custom instructions",description:"Keyboard shortcut to toggle custom instructions"},navigationToggle:{id:"keyboardActions.navigationToggle",defaultMessage:"Toggle sidebar",description:"Keyboard shortcut to toggle navigation"},deleteChat:{id:"keyboardActions.deleteChat",defaultMessage:"Delete chat",description:"Keyboard shortcut to delete chat"},toggleKeyboardActions:{id:"keyboardActions.toggleKeyboardActions",defaultMessage:"Show shortcuts",description:"Keyboard shortcut to toggle keyboard actions"}}),D=new _.V,N=function(e){var t=e.resetThreadAction,n=e.clientThreadId,o=e.features;return[{key:"newChat",action:t||h.noop,actionMessageDescriptor:L.newChat,group:r.Core,keyboardBinding:[K.Mod,K.Shift,"o"],altKeyboardBindings:[[K.Mod,"k"]]},{key:"focusPromptTextarea",action:k.go,actionMessageDescriptor:L.focusPromptTextarea,group:r.Chat,keyboardBinding:[K.Shift,K.Escape]},{key:"copyLastCodeBlock",action:function(){if(null!=n)for(var e=C.tQ.getThreadCurrentLeafId(n),t=C.tQ.getThreadConversationTurns(n,e),o=t.length-1;o>=0;o--){var r=t[o].messages.reduce(function(e,t){return null==t.err&&t.message.author.role===b.uU.Assistant&&"all"===t.message.recipient?e+(e?"\n\n":"")+(0,w.RR)(t.message):e},""),i=(0,c._)(r.matchAll(B)),a=i.length?i[i.length-1][1]:null;if(null!=a){(0,u.S)(a).then(function(){m.m.success("Copied code block to clipboard")});break}}},actionMessageDescriptor:L.copyLastCodeBlock,group:r.Chat,keyboardBinding:[K.Mod,K.Shift,";"],altKeyboardBindings:[[K.Mod,K.Shift,":"]]},{key:"copyLastResponse",action:function(){null!=n&&C.tQ.copyLastMessageToClipboard(n,"keyboard").then(function(){m.m.success("Last response copied to clipboard")})},actionMessageDescriptor:L.copyLastResponse,group:r.Chat,keyboardBinding:[K.Mod,K.Shift,"c"]},{key:"toggleCustomInstructions",action:function(){return x.vm.toggleModal(x.B.UserContext)},actionMessageDescriptor:L.toggleCustomInstructions,group:r.Settings,keyboardBinding:[K.Mod,K.Shift,"i"],enabled:o.has(v.Rw)||o.has(v.uo)},{key:"navigationToggle",action:function(){return x.vm.toggleDesktopNavCollapsed()},actionMessageDescriptor:L.navigationToggle,group:r.Core,keyboardBinding:[K.Mod,K.Shift,"s"]},{key:"deleteChat",action:function(){D.publish({kind:"deleteChat"})},actionMessageDescriptor:L.deleteChat,group:r.Chat,keyboardBinding:[K.Mod,K.Shift,K.Backspace],altKeyboardBindings:[[K.Mod,K.Shift,K.Delete]]},{key:"toggleKeyboardActions",action:function(){return x.vm.toggleModal(x.B.KeyboardActions)},actionMessageDescriptor:L.toggleKeyboardActions,group:r.Settings,keyboardBinding:[K.Mod,"/"]}]},E=function(e){var t,n,o,r=(0,M.hz)().has(v.rk);return t=function(e){f.o.logEvent(g.a.keyboardShortcut,{keyboardActionKey:e.key}),l.U.addAction("chatgpt_keyboard_shortcut",{keyboardActionKey:e.key})},n={enabled:r},o=e.map(function(e){var t=e.keyboardBinding.join("+");if(e.altKeyboardBindings){t=[t];var n=e.altKeyboardBindings.map(function(e){return e.join("+")});t=t.concat(n)}return(0,A.ZP)(t,{byKey:!0})}),void T(function(){if((null==n?void 0:n.enabled)!==!1){var r=function(n){if(!n.repeat)for(var r=0;r<o.length;r++)o[r](n)&&(void 0===e[r].enabled||e[r].enabled)&&(n.preventDefault(),t(e[r]),e[r].action())},i=function(e){void 0!==e.key&&r(e)},a=document;return a.addEventListener("keydown",i),function(){a.removeEventListener("keydown",i)}}},[e,n])},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resetThreadAction,n=e.clientThreadId,o=(0,M.hz)();return(0,p.useMemo)(function(){return N({features:o,resetThreadAction:t,clientThreadId:n}).filter(function(e){var t=e.enabled;return void 0===t||t})},[n,o,t])},P=function(e){E(I({resetThreadAction:e.resetThreadAction,clientThreadId:e.clientThreadId}))}}}]);