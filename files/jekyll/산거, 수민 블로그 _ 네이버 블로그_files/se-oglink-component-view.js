(window.webpackJsonpSELauncher=window.webpackJsonpSELauncher||[]).push([[48],{1146:function(e,t,n){"use strict";n.r(t);var o,r=n(5),a=n.n(r),i=n(7),s=n.n(i),l=n(4),c=n(292),u=n(8),p=n(21),m=n(45),d=n(393),h=n(391),b=n(360),f=n(590),v=(o=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this)._handleAfterRenderUnit=function(){t.props.useCase.refreshVirtualEditable()},t._handleClickDeleteThumbnail=function(e){var n=t.props,o=n.store,r=n.useCase,a=o.id;r.changeToTextLayout(a),f.a.log(e.nativeEvent)},t}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.shouldForceRefresh&&this.props.useCase.refreshAfterLazy()},n.render=function(){var e=this.props,t=e.store,n=e.i18n,o=e.children,r=e.moveButtonEnabled,a=t.id,i=t.ctype,s=t.layout,c=t.dthumbDomain,u=t.useBsizeThumbnail;return l.b.createElement(p.a,{id:a,ctype:i,layout:s,i18n:n},l.b.createElement(m.a,{compId:a,compStore:t},l.b.createElement(d.a,{store:t,dthumbDomain:c,msg:{DELETE_THUMBNAIL:n("oglinkComponent:delete_thumbnail")},i18n:n,useBsizeThumbnail:u,onAfterRenderUnit:this._handleAfterRenderUnit,logAreaId:"ogkct",onClickDeleteThumbnail:this._handleClickDeleteThumbnail,onMoveToPrev:this._handleMoveToPrev,onMoveToNext:this._handleMoveToNext,moveButtonEnabled:r},o)))},n._handleMoveToPrev=function(){this.props.useCase.moveToPrev(this.props.store.id)},n._handleMoveToNext=function(){this.props.useCase.moveToNext(this.props.store.id)},t}(l.b.Component),s()(o.prototype,"_handleMoveToPrev",[u.autobind],Object.getOwnPropertyDescriptor(o.prototype,"_handleMoveToPrev"),o.prototype),s()(o.prototype,"_handleMoveToNext",[u.autobind],Object.getOwnPropertyDescriptor(o.prototype,"_handleMoveToNext"),o.prototype),o);v.defaultProps={i18n:function(e){return e}},v.propTypes={shouldForceRefresh:l.a.bool,moveButtonEnabled:l.a.bool,useCase:l.a.instanceOf(b.a).isRequired,store:l.a.instanceOf(h.a).isRequired,i18n:l.a.func,children:l.a.oneOfType([l.a.element,l.a.array])};var y=Object(c.b)(v);t.default=y,function(){function e(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/plugins/components/oglink-component/src/view/index.jsx",localName:t}})}catch(e){}}e(v,"OgLinkComponent"),e(y,"default")}()},393:function(e,t,n){"use strict";var o,r=n(5),a=n.n(r),i=n(7),s=n.n(i),l=n(10),c=n.n(l),u=n(4),p=n(292),m=n(8),d=n(22),h=n(19),b=n(85),f={image:"ff120",vertical_image:"ff250_444",large_image:"ff500_300",shopping_affiliate_image:"ff120"};!function(){!function(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/shared-parts/views/oglink-unit/const.js",localName:t}})}catch(e){}}(f,"THUMBNAIL_TYPE")}();var v=(o=function(e){function t(){var t;return(t=e.call(this)||this).state={isThumbnailValid:!0},t}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.onAfterRenderUnit()},n.componentDidUpdate=function(){this.props.onAfterRenderUnit()},n.render=function(){var e=this,t=this.props,n=t.store,o=t.children,r=t.moveButtonEnabled,a=n.ctype,i=n.title,s=n.description,l=n.domain,c=n.isAffiliate,p=this._decodeHtmlEntity(i),m=this._decodeHtmlEntity(s),b=this._resolveSectionClassName(),f=this._renderThumbnail();return u.b.createElement(d.a,{blockWrapperProps:n,draggable:"true",className:b,onMoveToPrev:this._handleMoveToPrev,onMoveToNext:this._handleMoveToNext,moveButtonEnabled:r},u.b.createElement(h.a,{ctype:a},f,u.b.createElement("div",{className:"se-oglink-info"},u.b.createElement("div",{className:"se-oglink-info-container"},u.b.createElement("strong",{className:"se-oglink-title"},p),u.b.createElement("p",{className:"se-oglink-summary"},m,c?this._renderNpayIcon():null),u.b.createElement("p",{className:"se-oglink-url"},l))),u.b.createElement("div",{className:"se-oglink-frame",ref:function(t){return e._oglinkFrame=t}}),o))},n._renderNpayIcon=function(){var e=this.props.i18n;return u.b.createElement("em",{className:"se-oglink-npay"},u.b.createElement("span",{className:"se-blind"},e("oglinkComponent:npay_available")))},n._resolveSectionClassName=function(){var e=this.props.store.isVerticalThumbnail;return c()({"se-section-oglink-vertical":e})},n._renderThumbnail=function(){if(!this._hasThumbnailView())return null;var e=this.props,t=e.store,n=e.msg,o=e.onClickDeleteThumbnail,r=e.logAreaId,a=t.video,i=this._renderThumbnailImage(),s=this._renderVideoPlayer(a),l=r+".x";return u.b.createElement("div",{className:"se-oglink-thumbnail"},i,s,u.b.createElement("button",{type:"button","data-log":l,className:"se-oglink-thumbnail-delete",onClick:o},u.b.createElement("span",{className:"se-blind"},n.DELETE_THUMBNAIL)),u.b.createElement("div",{className:"se-oglink-thumbnail-frame"}))},n._hasThumbnailView=function(){var e=!!this.props.store.thumbnail&&this.state.isThumbnailValid,t=!!this._resolveThumbnailType();return e&&t},n._renderVideoPlayer=function(e){return e?u.b.createElement("span",{className:"se-oglink-thumbnail-video-icon"}):null},n._renderThumbnailImage=function(){var e=this,t=this.props,n=t.store,o=t.dthumbDomain,r=t.onAfterRenderUnit,a=n.thumbnail,i=n.title,s={src:a.src,type:this._resolveThumbnailType(),className:"se-oglink-thumbnail-resource",title:i,domain:o,onLoad:function(t){t.height=e._oglinkFrame?e._oglinkFrame.clientHeight:0,r(t)},onError:this._handleThumbnailError};return u.b.createElement(b.a,s)},n._resolveThumbnailType=function(){var e=this.props.store.layout;return f[e]},n._handleThumbnailError=function(){this.setState({isThumbnailValid:!1})},n._decodeHtmlEntity=function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value},n._handleMoveToPrev=function(){this.props.onMoveToPrev()},n._handleMoveToNext=function(){this.props.onMoveToNext()},t}(u.b.Component),s()(o.prototype,"_handleThumbnailError",[m.autobind],Object.getOwnPropertyDescriptor(o.prototype,"_handleThumbnailError"),o.prototype),s()(o.prototype,"_handleMoveToPrev",[m.autobind],Object.getOwnPropertyDescriptor(o.prototype,"_handleMoveToPrev"),o.prototype),s()(o.prototype,"_handleMoveToNext",[m.autobind],Object.getOwnPropertyDescriptor(o.prototype,"_handleMoveToNext"),o.prototype),o);v.defaultProps={msg:{},onClickDeleteThumbnail:function(){},onAfterRenderUnit:function(){},moveButtonEnabled:!1,onMoveToPrev:function(){},onMoveToNext:function(){}},v.propTypes={store:u.a.object.isRequired,msg:u.a.object,onClickDeleteThumbnail:u.a.func,onAfterRenderUnit:u.a.func,children:u.a.oneOfType([u.a.element,u.a.array]),i18n:u.a.func,dthumbDomain:u.a.string,moveButtonEnabled:u.a.bool,onMoveToPrev:u.a.func,onMoveToNext:u.a.func};var y=Object(p.b)(v);t.a=y;!function(){function e(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/shared-parts/views/oglink-unit/index.jsx",localName:t}})}catch(e){}}e(v,"OglinkUnit"),e(y,"default")}()},85:function(e,t,n){"use strict";var o=n(5),r=n.n(o),a=n(4),i=n(435),s=n(26),l=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.title,n=e.className,o=e.onLoad,r=e.onError;return a.b.createElement(s.a,{className:n,src:this._makeThumbnailSource(),alt:i.a.restoreSpecialChar(t),onLoad:o,onError:r})},n._makeThumbnailSource=function(){var e=this.props,t=e.src,n=e.type,o=e.service,r=e.domain,a="/?src=%22"+t+"%22&type="+n;return o&&(a+="&service="+o),r+a},t}(a.b.Component);l.defaultProps={service:"",title:"",onError:function(){}},l.propTypes={src:a.a.string.isRequired,type:a.a.string.isRequired,service:a.a.string,title:a.a.string,domain:a.a.string.isRequired,className:a.a.string.isRequired,onLoad:a.a.func,onError:a.a.func};var c=l;t.a=c,function(){function e(e,t){if("function"==typeof e&&!e.hasOwnProperty("__source"))try{Object.defineProperty(e,"__source",{enumerable:!1,configurable:!0,value:{fileName:"/home1/irteam/deploy/jenkins_ndeploy/jobs/Rabbit-editor-blog-desktop-normal-real/workspace/packages/shared-parts/views/thumbnail-image/index.jsx",localName:t}})}catch(e){}}e(l,"ThumbnailImage"),e(c,"default")}()}}]);