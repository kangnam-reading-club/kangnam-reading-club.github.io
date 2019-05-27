(window.webpackJsonpSELauncher=window.webpackJsonpSELauncher||[]).push([[8],{1165:function(e,t,r){"use strict";r.r(t);var n,o=r(13),a=r.n(o),i=r(4),s=r(5),p=r.n(s),c=r(7),l=r.n(c),d=r(8),u=r(1121),g=r(936),h=r(175),y=r(371),b=r(292),_=r(10),f=r.n(_),v=(n=function(e){function t(){return e.call(this)||this}p()(t,e);var r=t.prototype;return r.componentDidMount=function(){this._canvas=i.c.findDOMNode(this).querySelector(".se-canvas")},r.render=function(){var e=this.props,t=e.className,r=e.store,n=f()(t,{"se-is-dragging":r.isDragging});return i.b.createElement("div",{className:n,onClick:this._handleClick,onMouseDown:this._handleMouseDown,onMouseMove:this._handleMouseMove,onMouseUp:this._handleMouseUp,onDragStart:this._handleDragStart,onDragEnter:this._handleDragEnter,onDragLeave:this._handleDragLeave,onDragOver:this._handleDragOver,onDragEnd:this._handleDragEnd,onDrop:this._handleDrop},this.props.children)},r._handleClick=function(e){this.props.onEnhancerClick(e)},r._handleMouseDown=function(e){this.props.onEnhancerMouseDown(e)},r._handleMouseMove=function(e){this.props.onEnhancerMouseMove(e)},r._handleMouseUp=function(e){this.props.onEnhancerMouseUp(e)},r._isDroppable=function(e){return!!this._canvas&&this._canvas.contains(e.target)},r._handleDragStart=function(e){this.props.store.isDisabled||(this.props.useCase.dragStart(e.nativeEvent),this.props.onEnhancerDragStart(e))},r._handleDragEnter=function(e){this.props.store.isDisabled||this.props.useCase.dragEnter(e.dataTransfer)},r._handleDragLeave=function(){this.props.store.isDisabled||this.props.useCase.dragLeave()},r._handleDragOver=function(e){this.props.store.isDisabled||(this._dragPosition={screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,setDragImage:e.dataTransfer&&!!e.dataTransfer.setDragImage},this.props.useCase.dragOver(this._dragPosition),this._isDroppable(e)&&e.preventDefault(),this.props.onEnhancerDragOver(e))},r._handleDragEnd=function(e){this.props.store.isDisabled||(this.props.useCase.dragEnd(),this.props.onEnhancerDragEnd(e))},r._handleDrop=function(e){if(!this.props.store.isDisabled&&(e.preventDefault(),!1!==this._isDroppable(e))){var t={screenX:e.screenX,screenY:e.screenY,clientY:e.clientY},r=e.dataTransfer;this.props.useCase.drop(t,r),this.props.onEnhancerDrop(e)}},t}(i.b.Component),l()(n.prototype,"_handleClick",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleClick"),n.prototype),l()(n.prototype,"_handleMouseDown",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleMouseDown"),n.prototype),l()(n.prototype,"_handleMouseMove",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleMouseMove"),n.prototype),l()(n.prototype,"_handleMouseUp",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleMouseUp"),n.prototype),l()(n.prototype,"_handleDragStart",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleDragStart"),n.prototype),l()(n.prototype,"_handleDragEnter",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleDragEnter"),n.prototype),l()(n.prototype,"_handleDragLeave",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleDragLeave"),n.prototype),l()(n.prototype,"_handleDragOver",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleDragOver"),n.prototype),l()(n.prototype,"_handleDragEnd",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleDragEnd"),n.prototype),l()(n.prototype,"_handleDrop",[d.autobind],Object.getOwnPropertyDescriptor(n.prototype,"_handleDrop"),n.prototype),n);v.defaultProps={onEnhancerClick:function(){},onEnhancerMouseDown:function(){},onEnhancerMouseMove:function(){},onEnhancerMouseUp:function(){},onEnhancerDragStart:function(){},onEnhancerDragOver:function(){},onEnhancerDragEnd:function(){},onEnhancerDrop:function(){}},v.propTypes={useCase:i.a.instanceOf(h.a).isRequired,children:i.a.oneOfType([i.a.arrayOf(i.a.oneOfType([i.a.element,i.a.string])),i.a.element]),className:i.a.string,store:i.a.instanceOf(g.a).isRequired,onEnhancerClick:i.a.func,onEnhancerMouseDown:i.a.func,onEnhancerMouseMove:i.a.func,onEnhancerMouseUp:i.a.func,onEnhancerDragStart:i.a.func,onEnhancerDragOver:i.a.func,onEnhancerDragEnd:i.a.func,onEnhancerDrop:i.a.func};var m=Object(b.b)(v),D=m;!function(){function e(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/shared-parts/views/drag-and-drop-enhancer/index.jsx",localName:t}})}catch(e){}}e(v,"DragAndDropEnhancer"),e(m,"default")}();var E,O=r(16),S=r.n(O),w=r(6),k=(E=function(e){function t(){var t,r;if((t=e.call(this)||this)._isDragging=!1,t._hotkeyBinder=w.J.get("hotkeyBinder"),t._wrapperDomRef=i.b.createRef(),"undefined"==typeof DragEvent)return t._shouldUseNativeDragEvent=!0,S()(t);try{new DragEvent("dragover"),r=!0}catch(e){r=!1}return t._dispatchDragEvent=r?function(e,t,r){var n=new DragEvent(e,r);t.dispatchEvent(n)}:function(e,t,r){var n=document.createEvent("DragEvent"),o=r.bubbles,a=r.cancelable,i=r.view,s=r.detail,p=r.screenX,c=r.screenY,l=r.clientX,d=r.clientY,u=r.ctrlKey,g=r.altKey,h=r.shiftKey,y=r.metaKey,b=r.button,_=r.relatedTarget;n.initMouseEvent(e,o,a,i,s,p,c,l,d,u,g,h,y,b,_),t.dispatchEvent(n)},t}p()(t,e);var r=t.prototype;return r.componentWillUnmount=function(){this._isDragging&&this._finishDragging()},r.render=function(){return this._shouldUseNativeDragEvent?i.b.createElement("div",{ref:this._wrapperDomRef,className:"se-dnd-wrap se-dnd-wrap-native"},this.props.children):i.b.createElement("div",{ref:this._wrapperDomRef,className:"se-dnd-wrap",onDragStart:this._handleDragStart,onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave,onMouseMoveCapture:this._handleMouseMove,onMouseUp:this._handleMouseUp,onDragEnd:this._handleDragEnd},this.props.children)},r._handleDragStart=function(e){e.preventDefault(),this._startDragging(e.target)},r._handleMouseEnter=function(e){this._isDragging&&this._dispatchDragEvent("dragenter",e.target,e)},r._handleMouseLeave=function(e){this._isDragging&&this._dispatchDragEvent("dragleave",e.target,e)},r._handleMouseMove=function(e){this._isDragging&&(e.preventDefault(),this._dispatchDragEvent("dragover",e.target,e))},r._isEventOccuredInWrapper=function(e){return this._wrapperDomRef.current.contains(e)},r._handleMouseUp=function(e){this._isDragging&&(!0===this._isEventOccuredInWrapper(e.target)&&this._dispatchDragEvent("drop",e.target,e),this._dispatchDragEvent("dragend",this._draggingTarget,e),this._finishDragging())},r._startDragging=function(e){this._isDragging||(this._isDragging=!0,this._draggingTarget=e,this._hotkeyBinder.pause(),document.addEventListener("keydown",this._handleKeyDown,{capture:!0}),document.addEventListener("mouseup",this._handleMouseUp))},r._finishDragging=function(){this._isDragging&&(this._isDragging=!1,this._draggingTarget=null,this._hotkeyBinder.unpause(),document.removeEventListener("keydown",this._handleKeyDown,{capture:!0}),document.removeEventListener("mouseup",this._handleMouseUp))},r._handleKeyDown=function(e){this._isDragging&&(e.preventDefault(),e.stopImmediatePropagation(),"Escape"!==e.key&&"Esc"!==e.key||this._dispatchDragEvent("dragend",this._draggingTarget,e))},t}(i.b.Component),l()(E.prototype,"_handleDragStart",[d.autobind],Object.getOwnPropertyDescriptor(E.prototype,"_handleDragStart"),E.prototype),l()(E.prototype,"_handleMouseEnter",[d.autobind],Object.getOwnPropertyDescriptor(E.prototype,"_handleMouseEnter"),E.prototype),l()(E.prototype,"_handleMouseLeave",[d.autobind],Object.getOwnPropertyDescriptor(E.prototype,"_handleMouseLeave"),E.prototype),l()(E.prototype,"_handleMouseMove",[d.autobind],Object.getOwnPropertyDescriptor(E.prototype,"_handleMouseMove"),E.prototype),l()(E.prototype,"_handleMouseUp",[d.autobind],Object.getOwnPropertyDescriptor(E.prototype,"_handleMouseUp"),E.prototype),l()(E.prototype,"_handleKeyDown",[d.autobind],Object.getOwnPropertyDescriptor(E.prototype,"_handleKeyDown"),E.prototype),E);k.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.oneOfType([i.a.element,i.a.string])),i.a.element])};var j,P=Object(b.b)(k),M=P;!function(){function e(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/shared-parts/views/drag-and-wheel-enhancer/index.jsx",localName:t}})}catch(e){}}e(k,"DragAndWheelEnhancer"),e(P,"default")}();var L=(j=function(e){function t(t){var r;(r=e.call(this)||this).state={errorToggle:!1};var n=t.errorRecoveryUseCase;return r._errorRecoveryUseCase=n,window.onerror=r._handleError,r}p()(t,e);var r=t.prototype;return r.componentWillUnmount=function(){window.onerror=function(){return!1}},r.render=function(){var e=this.props,t=e.children,r=e.className,n=e.dragAndDropStore,o=e.dragAndDropUseCase,a=e.language;return i.b.createElement("div",{className:"se-body __se-body",lang:a},i.b.createElement(D,{store:n,useCase:o,className:r,onEnhancerClick:this._handleClick,onEnhancerMouseDown:this._handleMouseDown,onEnhancerMouseUp:this._handleMouseUp,onEnhancerDragStart:this._handleDragStart,onEnhancerDragOver:this._handleDragOver,onEnhancerDrop:this._handleDrop,onEnhancerDragEnd:this._handleDragEnd},i.b.createElement(M,null,t)))},r._handleError=function(e){this._errorRecoveryUseCase.recoverError(e)},r._handleClick=function(e){u.a.triggerEvent("click",e)},r._handleMouseDown=function(e){u.a.triggerEvent("mousedown",e)},r._handleMouseUp=function(e){u.a.triggerEvent("mouseup",e)},r._handleDragStart=function(){},r._handleDrop=function(){},t}(i.b.Component),l()(j.prototype,"_handleError",[d.autobind],Object.getOwnPropertyDescriptor(j.prototype,"_handleError"),j.prototype),l()(j.prototype,"_handleClick",[d.autobind],Object.getOwnPropertyDescriptor(j.prototype,"_handleClick"),j.prototype),l()(j.prototype,"_handleMouseDown",[d.autobind],Object.getOwnPropertyDescriptor(j.prototype,"_handleMouseDown"),j.prototype),l()(j.prototype,"_handleMouseUp",[d.autobind],Object.getOwnPropertyDescriptor(j.prototype,"_handleMouseUp"),j.prototype),l()(j.prototype,"_handleDragStart",[d.autobind],Object.getOwnPropertyDescriptor(j.prototype,"_handleDragStart"),j.prototype),l()(j.prototype,"_handleDrop",[d.autobind],Object.getOwnPropertyDescriptor(j.prototype,"_handleDrop"),j.prototype),j);L.defaultProps={className:"",children:null},L.propTypes={errorRecoveryUseCase:i.a.instanceOf(y.a).isRequired,dragAndDropUseCase:i.a.instanceOf(h.a).isRequired,dragAndDropStore:i.a.instanceOf(g.a).isRequired,language:i.a.string.isRequired,children:i.a.oneOfType([i.a.element,i.a.array]),className:i.a.string};var C=Object(b.b)(L);!function(){function e(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/shared-parts/views/smart-editor-wrapper/index.jsx",localName:t}})}catch(e){}}e(L,"SmartEditorWrapper"),e(C,"default")}();var I=function(e){var t=e.layouts,r=t.CanvasLayout,n=t.HeaderLayout,o=t.ContentsToolbarLayout,s=t.DocumentToolbarLayout,p=t.PropertyToolbarLayout,c=t.UploadProgressLayer,l=t.ToastLayer,d=t.LoadingLayer,u=t.AlertLayer,g=t.SpecialLetterLayer,h=t.SidebarLayout,y=t.SearchPanelLayout,b=t.StickerPanelLayout,_=t.LibraryPanelLayout,v=t.TemplatePanelLayout,m=t.LoadingProgressLayout,D=t.ImageDetailLayer,E=t.ViewModeLayout,O=t.LinkLayer,S=t.CloudSnsLayer,w=t.ScheduleLayer,k=t.PlaceLayer,j=t.FileUploadLayer,P=t.VideoUploadLayer,M=t.StickerRefreshLayer,C=t.PaidPhotoNotificationLayer,I=t.InsertMenuLayout,U=t.ContextToolbarLayout,x=t.SpellCheckLayout,T=t.ImageTypeLayer,A=t.ImageGroupOrderLayer,N=t.TalktalkEditLayer,R=t.HelpPanelLayout,B=t.ContextmenuLayer,J={dragAndDropStore:e.dragAndDropStore,dragAndDropUseCase:e.dragAndDropUseCase,errorRecoveryUseCase:e.errorRecoveryUseCase,language:e.language},F=!!document.documentMode,Y=f()({"se-wrap":!0,"se-dnd-wrap":!0,"se-wrap-ie":F});return i.b.createElement(L,a()({className:Y},J),i.b.createElement(n,null,i.b.createElement(s,null),i.b.createElement(p,null),i.b.createElement(m,null)),i.b.createElement(A,null)," ",i.b.createElement(l,null),i.b.createElement("div",{className:"se-container"},i.b.createElement("div",{id:"drag-ghost"}),i.b.createElement("div",{className:"se-content __se-scroll-target"},i.b.createElement(r,null),i.b.createElement(U,null),i.b.createElement(o,null),i.b.createElement(I,{contentSelector:".__se-scroll-target"})),i.b.createElement(h,null,i.b.createElement(y,null),i.b.createElement(b,null),i.b.createElement(_,null),i.b.createElement(v,null)),i.b.createElement(R,null)),i.b.createElement(E,null),i.b.createElement(c,null),i.b.createElement(d,null),i.b.createElement(g,null),i.b.createElement(O,null),i.b.createElement(S,null),i.b.createElement(D,null),i.b.createElement(w,null),i.b.createElement(k,null),i.b.createElement(j,null),i.b.createElement(P,null),i.b.createElement(T,null),i.b.createElement(M,null),i.b.createElement(C,null),i.b.createElement(x,null),i.b.createElement(N,null),i.b.createElement(u,null),i.b.createElement(B,null))};I.propTypes={layouts:i.a.object,dragAndDropStore:i.a.object,themeStore:i.a.object,dragAndDropUseCase:i.a.object,errorRecoveryUseCase:i.a.object,language:i.a.string.isRequired};var U=I;t.default=U;!function(){function e(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/products/blog-desktop-normal/src/app.jsx",localName:t}})}catch(e){}}e(I,"App"),e(U,"default")}()},175:function(e,t,r){"use strict";r.d(t,"a",function(){return D});var n,o,a,i=r(0),s=r.n(i),p=r(2),c=r.n(p),l=r(5),d=r.n(l),u=r(7),g=r.n(u),h=r(41),y=r(66),b=r(11),_=r(6),f=r(4),v=r(46),m=r(8),D=(n=Object(m.history)({sync:!1}),o=Object(m.history)({sync:!1}),a=function(e){function t(){var t;return(t=e.call(this)||this)._imageBehavior=new v.a,t._toastLayerService=_.J.get("toastLayerService"),t._dragAndDropService=_.J.get("dragAndDropService"),t._finderService=_.J.get("finderService"),t._editingService=_.J.get("editingService"),t._canvasScrollingService=_.J.get("canvasScrollingService"),t._alertLayerService=_.J.get("alertLayerService"),t._canvasLayoutService=_.J.get("canvasLayoutService"),t._imageStripComponentService=_.J.get("imageStripComponentService"),t._imageComponentService=_.J.get("imageComponentService"),t._searchPanelLayoutService=_.J.get("searchPanelLayoutService"),t._i18n=_.J.get("i18n"),t}d()(t,e);var r=t.prototype;return r.dragStart=function(e){if(!this._dragAndDropService.isAleadyDragStart()){var t=this._finderService.getDraggableCompStoresWithinSelection();this._dragAndDropService.dragStart({event:e,items:t})}},r.dragEnter=function(e){this._dragAndDropService.dragEnter(e)},r.dragLeave=function(){this._dragAndDropService.dragLeave()},r.dragOver=function(e){this._dragAndDropService.dragOver(e),this._canvasScrollingService.scrollPageByDrag(e)},r.drop=function(){var e=c()(s.a.mark(function e(t,r){var n,o,a,i,p;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this._dragAndDropService.filterImageFiles(r),o=this._dragAndDropService.drop(t),a=n&&!1===Object(h.a)(n.nonImageFiles),this._canvasScrollingService.forceStopAutoScroll(),o){e.next=6;break}return e.abrupt("return");case 6:if(a&&this._alertLayerService.open({type:"alert",title:this._i18n("dragAndDropUseCase:file_format_error_title"),description:this._i18n("dragAndDropUseCase:file_format_error")}),i=o.skipDrop,!(p=o.errorMsg)){e.next=11;break}return this._showWarning(p),e.abrupt("return");case 11:if(!i){e.next=13;break}return e.abrupt("return");case 13:e.t0=o.type,e.next="external-file"===e.t0?16:"library"===e.t0?19:"template"===e.t0?21:"aside"===e.t0?23:26;break;case 16:return e.next=18,this._dropExternalFile(o);case 18:return e.abrupt("break",27);case 19:return this._dropLibrary(o),e.abrupt("break",27);case 21:return this._dropTemplate(o),e.abrupt("break",27);case 23:return e.next=25,this._dropAside(o);case 25:return e.abrupt("break",27);case 26:this._move(o);case 27:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),r._move=function(e){var t=this._makeInsertMeta(e);this._dragAndDropService.setUpdateReadySelection(!0),this._editingService.move(t)},r._dropAside=function(){var e=c()(s.a.mark(function e(t){var r,n,o,a,i,p,c,l,d,u,g,h,_,f,v,m,D,E=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.insertPoint,n=t.items,o=t.targetCtype,a=t.targetCompId,i=this._makeInsertMeta(t),p=n[0],c=p.ctype,l=encodeURIComponent(p.src),"image"!==c){e.next=34;break}if("image"!==o&&"imageStrip"!==o){e.next=22;break}if(d=this._imageComponentService.createShellsFromCompData(n),u=d.imageCompStores,g=d.ids,i.items=u,h=this._editingService.insertByDrop(i),!this._imageStripComponentService.isImageCompIncluded(Object(b.a)(h,"start"),r)){e.next=17;break}return _=this._imageStripComponentService.getShellUnitInfoOfImageStripComp(h),f=_.id,v=_.unitStores,e.next=14,this._imageBehavior.uploadImageFromUrls([f],[l],{onSuccessEachUpload:function(e){var t=Object(y.a)(v,{id:e.id});E._imageStripComponentService.updateShellImageUnitBy(e,t)}});case 14:return e.abrupt("return",e.sent);case 17:return e.next=19,this._imageBehavior.uploadImageFromUrls(g,[l]);case 19:return e.abrupt("return",e.sent);case 20:e.next=32;break;case 22:if("documentTitle"!==o){e.next=28;break}return e.next=25,this._imageBehavior.uploadImageFromUrls([a],[l],{onSuccessEachUpload:function(e){E._insertBackgroundImageByDrop(i,e)}});case 25:return e.abrupt("return",e.sent);case 28:return m=this._insertByDrop.bind(this,i),e.next=31,this._imageBehavior.dropImageFromAside(n,m);case 31:return e.abrupt("return",e.sent);case 32:e.next=43;break;case 34:if("material"!==c||"news"!==p.type){e.next=42;break}return e.next=37,this._searchPanelLayoutService.itemDataToStore(p);case 37:D=e.sent,i.items=[D],this._editingService.insertByDrop(i),e.next=43;break;case 42:this._editingService.insertByDrop(i);case 43:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),r._makeInsertMeta=function(e){return{insertPoint:e.insertPoint,insertCommand:e.insertCommand,items:e.items}},r._dropTemplate=function(e){var t=this._makeInsertMeta(e);t.followCurrentAlign=!1,this._editingService.insertByDrop(t)},r._dropLibrary=function(e){var t=this._makeInsertMeta(e);this._editingService.insertByDrop(t)},r._dropExternalFile=function(){var e=c()(s.a.mark(function e(t){var r,n,o,a,i,p;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.items,n=t.targetCtype,o=t.targetCompId,a=this._makeInsertMeta(t),"documentTitle"!==n){e.next=9;break}return i=this._insertBackgroundImageByDrop.bind(this,a),e.next=6,this._imageBehavior.insertExternalBackground(o,r,i);case 6:return e.abrupt("return",e.sent);case 9:return p=this._insertByDrop.bind(this,a),e.next=12,this._imageBehavior.insertExternalImage(r,p);case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),r._insertByDrop=function(e,t){e.items=t,this._editingService.insertByDrop(e)},r._insertBackgroundImageByDrop=function(e,t){var r=this._dragAndDropService.getBackgroundImageData(t);e.items=[r],this._editingService.insertByDrop(e)},r.dragEnd=function(){this._dragAndDropService.reset(),this._canvasLayoutService.refreshVirtualEditable(),this._canvasScrollingService.forceStopAutoScroll()},r._showWarning=function(e){e&&this._toastLayerService.warningMessage(e)},r.hideIENativeDragGhost=function(e){this._dragAndDropService.hideIENativeDragGhost(e)},t}(_.n),g()(a.prototype,"dragStart",[m.preventOnComponentProcessing,f.d],Object.getOwnPropertyDescriptor(a.prototype,"dragStart"),a.prototype),g()(a.prototype,"dragEnter",[f.d],Object.getOwnPropertyDescriptor(a.prototype,"dragEnter"),a.prototype),g()(a.prototype,"dragLeave",[f.d],Object.getOwnPropertyDescriptor(a.prototype,"dragLeave"),a.prototype),g()(a.prototype,"dragOver",[f.d],Object.getOwnPropertyDescriptor(a.prototype,"dragOver"),a.prototype),g()(a.prototype,"drop",[f.d],Object.getOwnPropertyDescriptor(a.prototype,"drop"),a.prototype),g()(a.prototype,"_move",[f.d,m.history],Object.getOwnPropertyDescriptor(a.prototype,"_move"),a.prototype),g()(a.prototype,"_dropAside",[f.d,n],Object.getOwnPropertyDescriptor(a.prototype,"_dropAside"),a.prototype),g()(a.prototype,"_dropTemplate",[m.history],Object.getOwnPropertyDescriptor(a.prototype,"_dropTemplate"),a.prototype),g()(a.prototype,"_dropLibrary",[m.history],Object.getOwnPropertyDescriptor(a.prototype,"_dropLibrary"),a.prototype),g()(a.prototype,"_dropExternalFile",[f.d,o],Object.getOwnPropertyDescriptor(a.prototype,"_dropExternalFile"),a.prototype),g()(a.prototype,"dragEnd",[f.d],Object.getOwnPropertyDescriptor(a.prototype,"dragEnd"),a.prototype),a);!function(){!function(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/shared-parts/use-case/drag-and-drop-use-case.js",localName:t}})}catch(e){}}(D,"DragAndDropUseCase")}()},371:function(e,t,r){"use strict";var n,o=r(7),a=r.n(o),i=r(6),s=r(4),p=(n=function(){function e(){this._canvasScrollingService=i.J.get("canvasScrollingService"),this._virtualEditable=i.J.get("virtualEditable"),this._errorResolver=i.J.get("errorResolver")}return e.prototype.recoverError=function(){this._canvasScrollingService.focusToFirstComp(),this._virtualEditable.recover(),this._errorResolver.throwError("low_level_error")},e}(),a()(n.prototype,"recoverError",[s.d],Object.getOwnPropertyDescriptor(n.prototype,"recoverError"),n.prototype),n),c=p;t.a=c,function(){function e(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/shared-parts/use-case/error-recovery-use-case.js",localName:t}})}catch(e){}}e(p,"ErrorRecoveryUseCase"),e(c,"default")}()},66:function(e,t,r){"use strict";var n=r(65),o=r(72),a=r(69);var i=function(e){return function(t,r,i){var s=Object(t);if(!Object(o.a)(t)){var p=Object(n.a)(r,3);t=Object(a.a)(t),r=function(e){return p(s[e],e,s)}}var c=e(t,r,i);return c>-1?s[p?t[c]:c]:void 0}}(r(73).a);t.a=i},73:function(e,t,r){"use strict";var n=r(208),o=r(65),a=r(100),i=Math.max;t.a=function(e,t,r){var s=null==e?0:e.length;if(!s)return-1;var p=null==r?0:Object(a.a)(r);return p<0&&(p=i(s+p,0)),Object(n.a)(e,Object(o.a)(t,3),p)}},936:function(e,t,r){"use strict";r.d(t,"a",function(){return m});var n,o,a,i,s,p,c,l,d=r(17),u=r.n(d),g=r(20),h=r.n(g),y=r(7),b=r.n(y),_=(r(18),r(4)),f=r(6),v={INSIDE:["text","object","complex","iframe","image"],OUTSIDE:["template","groupLayer","aside","library"],EXTERNAL:["external-file","external-text","external-complex"]},m=(n=_.g.ref,o=function(){function e(e){void 0===e&&(e={disable:!1}),u()(this,"progress",a,this),u()(this,"type",i,this),u()(this,"items",s,this),u()(this,"dropPosition",p,this),u()(this,"disabled",c,this),u()(this,"updateReadySelection",l,this),this.disabled=e.disable}var t=e.prototype;return t.setItem=function(e,t){this.items.replace([e]),this.type=t},t.setItems=function(e,t){this.items.replace(e),this.type=t},t.reset=function(){this.items=[],this.type=null,this.progress="none",this.dropPosition={direction:"",point:{compId:"",unitId:"",paraId:null,nodeId:null,offset:0}}},t.disable=function(){this.disabled=!0},t.enable=function(){this.disabled=!1},h()(e,[{key:"isInsideType",get:function(){return v.INSIDE.includes(this.type)}},{key:"isOutsideType",get:function(){return v.OUTSIDE.includes(this.type)}},{key:"isDragging",get:function(){return"dragging"===this.progress}},{key:"isExternalType",get:function(){return v.EXTERNAL.includes(this.type)}},{key:"isCanvasBottomActivated",get:function(){return"dragging"===this.progress&&this.dropPosition.direction===f.v.CANVAS_BOTTOM}},{key:"isDisabled",get:function(){return!0===this.disabled}}]),e}(),a=b()(o.prototype,"progress",[_.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"none"}}),i=b()(o.prototype,"type",[_.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),s=b()(o.prototype,"items",[_.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),p=b()(o.prototype,"dropPosition",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{direction:"",point:{compId:"",unitId:"",paraId:null,nodeId:null,offset:0}}}}),c=b()(o.prototype,"disabled",[_.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=b()(o.prototype,"updateReadySelection",[_.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),b()(o.prototype,"isInsideType",[_.e],Object.getOwnPropertyDescriptor(o.prototype,"isInsideType"),o.prototype),b()(o.prototype,"isOutsideType",[_.e],Object.getOwnPropertyDescriptor(o.prototype,"isOutsideType"),o.prototype),b()(o.prototype,"isDragging",[_.e],Object.getOwnPropertyDescriptor(o.prototype,"isDragging"),o.prototype),b()(o.prototype,"isExternalType",[_.e],Object.getOwnPropertyDescriptor(o.prototype,"isExternalType"),o.prototype),b()(o.prototype,"isCanvasBottomActivated",[_.e],Object.getOwnPropertyDescriptor(o.prototype,"isCanvasBottomActivated"),o.prototype),b()(o.prototype,"setItem",[_.d],Object.getOwnPropertyDescriptor(o.prototype,"setItem"),o.prototype),b()(o.prototype,"setItems",[_.d],Object.getOwnPropertyDescriptor(o.prototype,"setItems"),o.prototype),b()(o.prototype,"reset",[_.d],Object.getOwnPropertyDescriptor(o.prototype,"reset"),o.prototype),b()(o.prototype,"isDisabled",[_.e],Object.getOwnPropertyDescriptor(o.prototype,"isDisabled"),o.prototype),b()(o.prototype,"disable",[_.d],Object.getOwnPropertyDescriptor(o.prototype,"disable"),o.prototype),b()(o.prototype,"enable",[_.d],Object.getOwnPropertyDescriptor(o.prototype,"enable"),o.prototype),o),D=m;!function(){function e(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/shared-parts/stores/drag-and-drop-store.js",localName:t}})}catch(e){}}e(v,"TYPES"),e(m,"DragAndDropStore"),e(D,"default")}()}}]);