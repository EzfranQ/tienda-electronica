astraToggleSetupPro=function(e,t,a){var n,l,o,s=!1;if(0<(n="off-canvas"===e||"full-width"===e?(l=document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"),(o=t.classList.contains("ast-header-break-point")?document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle"):document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length):t.classList.contains("ast-header-break-point")?(l=document.querySelectorAll("#ast-mobile-header"),(s=!(0<(n=(o=document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length)))?1:n):(l=document.querySelectorAll("#ast-desktop-header"),(o=document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length))||s)for(var r=0;r<n;r++)if(s||(o[r].setAttribute("data-index",r),a[r])||(a[r]=o[r],o[r].addEventListener("click",astraNavMenuToggle,!1)),void 0!==l[r])for(var d,i=0;i<l.length;i++)if(0<(d=document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")?l[i].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle"):l[i].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)for(var c=0;c<d.length;c++)d[c].addEventListener("click",AstraToggleSubMenu,!1)},astraNavMenuTogglePro=function(e,t,a,n){e.preventDefault();var l=e.target.closest("#ast-desktop-header"),o=document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"),s=(l=null!=l&&""!==l?l.querySelector(".main-header-menu-toggle"):document.querySelector("#masthead > #ast-desktop-header .main-header-menu-toggle"),document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content .main-header-bar-navigation"));if("desktop"===e.currentTarget.trigger_type)null!==s&&""!==s&&void 0!==s&&(astraToggleClass(s,"toggle-on"),s.classList.contains("toggle-on")?s.style.display="block":s.style.display=""),astraToggleClass(l,"toggled"),l.classList.contains("toggled")?(t.classList.add("ast-main-header-nav-open"),"dropdown"===a&&(o.style.display="block")):(t.classList.remove("ast-main-header-nav-open"),o.style.display="none");else{e=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"),s=(menu_toggle_all=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"),"0"),l=!1;if(null!==n.closest("#ast-fixed-header")&&(e=document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"),menu_toggle_all=document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"),s="0",l=!0),void 0===e[s])return!1;for(var r=e[s].querySelectorAll(".menu-item-has-children"),d=0;d<r.length;d++){r[d].classList.remove("ast-submenu-expanded");for(var i=r[d].querySelectorAll(".sub-menu"),c=0;c<i.length;c++)i[c].style.display="none"}-1!==(n.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(astraToggleClass(e[s],"toggle-on"),astraToggleClass(menu_toggle_all[s],"toggled"),l&&1<menu_toggle_all.length&&astraToggleClass(menu_toggle_all[1],"toggled"),e[s].classList.contains("toggle-on")?(e[s].style.display="block",t.classList.add("ast-main-header-nav-open")):(e[s].style.display="",t.classList.remove("ast-main-header-nav-open")))}};const accountMenuToggle=function(){const n=astraAddon.hf_account_action_type&&"menu"===astraAddon.hf_account_action_type,l=n&&astraAddon.hf_account_show_menu_on&&"click"===astraAddon.hf_account_show_menu_on;var e=document.querySelectorAll(".ast-header-account-wrap");e&&e.forEach(t=>{const a=t.querySelector(".ast-account-nav-menu");document.addEventListener("pointerup",function(e){(l||n&&document.querySelector("body").classList.contains("ast-header-break-point"))&&!t.contains(e.target)&&(a.style.right="",a.style.left="")});var e=t.querySelector(".ast-header-account-link");e&&e.addEventListener("click",function(e){(l||n&&document.querySelector("body").classList.contains("ast-header-break-point"))&&(headerSelectionPosition=e.target.closest(".site-header-section"))&&(headerSelectionPosition.classList.contains("site-header-section-left")?(a.style.left=""===a.style.left?"-100%":"",a.style.right=""===a.style.right?"auto":""):(a.style.right=""===a.style.right?"-100%":"",a.style.left=""===a.style.left?"auto":""))})})};document.addEventListener("astPartialContentRendered",function(){accountMenuToggle()}),window.addEventListener("load",function(){accountMenuToggle()}),document.addEventListener("astLayoutWidthChanged",function(){accountMenuToggle()});!function(n,h){var a="astExtSticky",l=h.document,r=(jQuery(h).outerWidth(),jQuery(h).width()),c=astraAddon.header_builder_active,s={dependent:[],max_width:"",site_layout:"",break_point:920,admin_bar_height_lg:32,admin_bar_height_sm:46,admin_bar_height_xs:0,stick_upto_scroll:0,gutter:0,wrap:"<div></div>",body_padding_support:!0,html_padding_support:!0,shrink:{padding_top:"",padding_bottom:""},sticky_on_device:"desktop",header_style:"none",hide_on_scroll:"no"},d=0,p=null!==l.querySelector("#ast-hb-account-login-wrap");function t(e,t){this.element=e,this.options=n.extend({},s,t),this._defaults=s,this._name=a,"1"==this.options.hide_on_scroll&&(this.navbarHeight=n(e).outerHeight()),this.lastScrollTop=0,this.delta=5,this.should_stick=!0,this.hideScrollInterval="",this.init()}t.prototype.stick_me=function(e,t){var a,s,d,i,r,o=jQuery(e.element);jQuery(h).outerWidth();stick_upto_scroll=parseInt(e.options.stick_upto_scroll),max_width=parseInt(o.parent().attr("data-stick-maxwidth")),gutter=parseInt(o.parent().attr("data-stick-gutter")),aboveHeaderSelectorValue=gutter,c&&astraAddon.header_main_shrink&&((o.hasClass("ast-stick-primary-below-wrapper")||o.hasClass("ast-primary-header"))&&1==astraAddon.header_above_stick&&0<gutter&&(gutter-=10),a=l.querySelector(".ast-above-header-bar"),1==astraAddon.header_above_stick)&&null!==a&&(aboveHeaderSelectorValue=a.getBoundingClientRect().height+parseInt(a.parentNode.getAttribute("data-stick-gutter"))),("desktop"!=e.options.sticky_on_device||!jQuery("body").hasClass("ast-header-break-point"))&&("mobile"!=e.options.sticky_on_device||jQuery("body").hasClass("ast-header-break-point"))?(stick_upto_scroll<0&&(stick_upto_scroll=0),a=0<l.getElementsByClassName("elementor-motion-effects-parent").length,jQuery(h).scrollTop()>stick_upto_scroll?(s=o,c&&(r=o.closest(".ast-mobile-header-wrap"),d=o.closest("#ast-desktop-header"),r=0===r.length?o.find(".ast-mobile-header-wrap"):r,d=0===d.length?o.find("#ast-desktop-header"):d,r.find(".ast-mobile-header-content").css("top",o.outerHeight()+gutter),"ast-box-layout"==e.options.site_layout?(i=jQuery("body").width(),r.find(".ast-mobile-header-content").css("width",i)):r.find(".ast-mobile-header-content").css("width",max_width),d.find(".ast-desktop-header-content").css("top",o.outerHeight()+gutter),d.find(".ast-desktop-header-content").css("width",max_width)),"1"===e.options.hide_on_scroll?(e.hasScrolled(e,"stick"),s.addClass("ast-desktop-header").stop().css({transform:p?"none":"translateY(0)"})):"none"==e.options.header_style?(a||o.parent().css("min-height",o.outerHeight()),l.querySelector("body").classList.contains("fl-builder-edit")||o.addClass("ast-sticky-active").stop().css({top:gutter}),o.addClass("ast-sticky-active").stop().css({"max-width":max_width,"padding-top":e.options.shrink.padding_top,"padding-bottom":e.options.shrink.padding_bottom}),(o.hasClass("ast-stick-primary-below-wrapper")||o.hasClass("ast-primary-header"))&&1==astraAddon.header_above_stick&&o.closest("#ast-desktop-header").find(".ast-above-header-bar").outerHeight()<70&&(o.addClass("ast-sticky-active").stop().css({top:a?aboveHeaderSelectorValue:"unset"}),o.parent().css("min-height","unset")),o.addClass("ast-sticky-shrunk").stop(),n(l).trigger("addStickyClass"),s.addClass("ast-header-sticked")):"slide"==e.options.header_style?(s.css({top:gutter}),s.addClass("ast-header-slide"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({transform:p?"none":"translateY(0)"}),n("html").addClass("ast-header-stick-slide-active"),n(l).trigger("addStickyClass"),s.addClass("ast-header-sticked")):"fade"==e.options.header_style&&(s.css({top:gutter}),s.addClass("ast-header-fade"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({opacity:"1"}),n("html").addClass("ast-header-stick-fade-active"),n(l).trigger("addStickyClass"),s.addClass("ast-header-sticked"))):(e.stickRelease(e),c&&(r=0===(r=o.closest(".ast-mobile-header-wrap")).length?o.find(".ast-mobile-header-wrap"):r,jQuery("body").hasClass("ast-primary-sticky-header-active")&&jQuery("body").hasClass("ast-above-sticky-header-active")&&jQuery("body").hasClass("ast-below-sticky-header-active")||r.find(".ast-mobile-header-content").removeAttr("style")))):e.stickRelease(e)},t.prototype.update_attrs=function(){var e,a,t=this,s=jQuery(t.element),d=parseInt(t.options.gutter),i=t.options.max_width;"none"!=t.options.header_style||jQuery("body").hasClass("ast-sticky-toggled-off")?n("#masthead").length&&(e=n("#masthead"),a=e.offset().top+e.outerHeight()+100||0):a=s.offset().top||0,"ast-box-layout"!=t.options.site_layout&&(i=jQuery("body").width()),t.options.dependent&&jQuery.each(t.options.dependent,function(e,t){jQuery(t).length&&"on"==jQuery(t).parent().attr("data-stick-support")&&(dependent_height=jQuery(t).outerHeight(),d+=parseInt(dependent_height),a-=parseInt(dependent_height))}),t.options.admin_bar_height_lg&&jQuery("#wpadminbar").length&&782<r&&(d+=parseInt(t.options.admin_bar_height_lg),a-=parseInt(t.options.admin_bar_height_lg)),t.options.admin_bar_height_sm&&jQuery("#wpadminbar").length&&600<=r&&r<=782&&(d+=parseInt(t.options.admin_bar_height_sm),a-=parseInt(t.options.admin_bar_height_sm)),t.options.admin_bar_height_xs&&jQuery("#wpadminbar").length&&(d+=parseInt(t.options.admin_bar_height_xs),a-=parseInt(t.options.admin_bar_height_xs)),t.options.body_padding_support&&(d+=parseInt(jQuery("body").css("padding-top"),10),a-=parseInt(jQuery("body").css("padding-top"),10)),t.options.html_padding_support&&(d+=parseInt(jQuery("html").css("padding-top"),10),a-=parseInt(jQuery("html").css("padding-top"),10)),I&&a--,t.options.stick_upto_scroll=a,"none"==t.options.header_style?s.parent().css("min-height",s.outerHeight()).attr("data-stick-gutter",parseInt(d)).attr("data-stick-maxwidth",parseInt(i)):(s.parent().attr("data-stick-gutter",parseInt(d)).attr("data-stick-maxwidth",parseInt(i)),"ast-padded-layout"===t.options.site_layout&&s.css("max-width",parseInt(i)))},t.prototype.hasScrolled=function(e,t){var a,s=n(h).scrollTop();Math.abs(d-s)<=5||(a=jQuery(e.element),d<s&&0<s?jQuery(e.element).removeClass("ast-nav-down").addClass("ast-nav-up"):s+n(h).height()<n(l).height()&&jQuery(e.element).removeClass("ast-nav-up").addClass("ast-nav-down"),d=s,n(e.element).hasClass("ast-nav-up")||"stick"!=t?(a.css({transform:"translateY(-100%)"}).stop(),setTimeout(function(){a.removeClass("ast-sticky-active")},300),a.css({visibility:"hidden",top:""}),n(l).trigger("removeStickyClass"),n("html").removeClass("ast-header-stick-scroll-active"),a.removeClass("ast-header-sticked")):(a.css({top:gutter}),a.addClass("ast-header-sticked"),a.addClass("ast-header-slide"),a.css("visibility","visible"),a.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),n(l).trigger("addStickyClass"),n("html").addClass("ast-header-stick-scroll-active")))},t.prototype.stickRelease=function(e){var t=jQuery(e.element),a=t;"1"===e.options.hide_on_scroll?e.hasScrolled(e,"release"):"none"==e.options.header_style?(t.removeClass("ast-sticky-active").stop().css({"max-width":"",top:"",padding:""}),t.parent().css("min-height",""),n(l).trigger("removeStickyClass"),a.removeClass("ast-header-sticked"),t.removeClass("ast-sticky-shrunk").stop()):"slide"==e.options.header_style?(a.removeClass("ast-sticky-active").stop().css({transform:p?"translateY(-100vh)":"translateY(-100%)"}),a.css({visibility:"hidden",top:""}),n("html").removeClass("ast-header-stick-slide-active"),n(l).trigger("removeStickyClass"),a.removeClass("ast-header-sticked")):"fade"==e.options.header_style&&(a.removeClass("ast-sticky-active").stop().css({opacity:"0"}),a.css({visibility:"hidden"}),a.removeClass("ast-header-sticked"),n(l).trigger("removeStickyClass"),n("html").removeClass("ast-header-stick-fade-active"))},t.prototype.init=function(){var t,e;jQuery(this.element)&&(t=this,e=jQuery(t.element),("none"==t.options.header_style?e.wrap(t.options.wrap).parent().css("min-height",e.outerHeight()):e.wrap(t.options.wrap)).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(t.options.max_width)),t.update_attrs(),jQuery(h).on("resize",function(){t.stickRelease(t),t.update_attrs(),t.stick_me(t)}),jQuery(h).on("scroll",function(){t.stick_me(t,"scroll"),jQuery("body").hasClass("ast-sticky-toggled-off")&&(t.update_attrs(),t.stick_me(t,"scroll"))}),jQuery(l).ready(function(e){t.stick_me(t)}))},n.fn[a]=function(e){return this.each(function(){n.data(this,"plugin_"+a)||n.data(this,"plugin_"+a,new t(this,e))})};var e,i=jQuery("body"),o=i.width(),y=astraAddon.stick_header_meta||"default",_=astraAddon.header_main_stick||"",m=astraAddon.header_main_shrink||"",u=astraAddon.header_above_stick||"",k=astraAddon.header_below_stick||"",b=astraAddon.header_main_stick_meta||"",g=astraAddon.header_above_stick_meta||"",v=astraAddon.header_below_stick_meta||"",w=astraAddon.site_layout||"",j=astraAddon.site_layout_box_width||1200,Q=astraAddon.sticky_header_on_devices||"desktop",f=astraAddon.sticky_header_style||"none",x=astraAddon.sticky_hide_on_scroll||"",C=astraAddon.header_logo_width||"",S=astraAddon.responsive_header_logo_width||"",I=astraAddon.stick_origin_position||"",A=astraAddon.tablet_break_point||768,E=astraAddon.mobile_break_point||544;"disabled"!=y&&("enabled"===y&&(_=b,u=g,k=v),0<n("header .site-logo-img img").length&&(-1===(b=0==(b=void 0===(b=(y=n("header .site-logo-img img")).attr("height"))?y.height():b)?"":b).toString().indexOf("%")&&(b+="px"),""!=S.desktop||""!=S.tablet||""!=S.mobile?e="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: "+S.desktop+"px; } @media (max-width: "+A+"px) { #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: "+S.tablet+"px; } } @media (max-width: "+E+"px) { #masthead .ast-header-sticked .site-logo-img .astra-logo-svg{ width: "+S.mobile+"px; } } </style>":""!=C&&(e="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: "+C+"px; } #masthead .ast-header-sticked .site-logo-img img { max-height: "+b+"; width: auto; } </style>"),n("head").append(e)),_||u||k)&&(n(l).on("addStickyClass",function(){var e="";"1"!=_&&"on"!=_&&"disabled"!=_||(e+=" ast-primary-sticky-header-active"),"1"!=u&&"on"!=u&&"disabled"!=u||(e+=" ast-above-sticky-header-active"),"1"!=k&&"on"!=k&&"disabled"!=k||(e+=" ast-below-sticky-header-active"),n("body").addClass(e)}),n(l).on("removeStickyClass",function(){var e="";"1"!=_&&"on"!=_&&"disabled"!=_||(e+=" ast-primary-sticky-header-active"),"1"!=u&&"on"!=u&&"disabled"!=u||(e+=" ast-above-sticky-header-active"),"1"!=k&&"on"!=k&&"disabled"!=k||(e+=" ast-below-sticky-header-active"),n("body").removeClass(e)}),"ast-box-layout"===w&&(o=parseInt(j)),jQuery(l).on("ready astLayoutWidthChanged",function(e){if("astLayoutWidthChanged"===e.type){if(!(parseInt(_)||parseInt(k)||parseInt(u)))return;jQuery("div.ast-stick-primary-below-wrapper").children().unwrap(),jQuery('div[data-stick-support="on"]').children().unwrap()}var t;"1"==x?("1"==m&&jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=u&&"on"!=u&&"disabled"!=u&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=_&&"on"!=_&&"disabled"!=_&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=k&&"on"!=k&&"disabled"!=k&&jQuery("#ast-fixed-header .ast-below-header").hide(),jQuery("#ast-fixed-header").astExtSticky({max_width:o,site_layout:w,sticky_on_device:Q,header_style:"slide",hide_on_scroll:x})):"none"==f?c?("both"===Q?["desktop","mobile"]:[Q]).forEach(function(e){var t;"1"!=u&&"on"!=u&&"disabled"!=u||jQuery("#masthead #ast-"+e+"-header .ast-above-header").astExtSticky({max_width:o,site_layout:w,sticky_on_device:Q,header_style:f,hide_on_scroll:x}),"1"!=_&&"on"!=_&&"disabled"!=_||"1"!=k&&"on"!=k&&"disabled"!=k?("1"!=_&&"on"!=_&&"disabled"!=_||(t=m?{padding_top:"",padding_bottom:""}:"",jQuery("#masthead #ast-"+e+"-header .main-header-bar").astExtSticky({dependent:["#masthead #ast-"+e+"-header .ast-above-header"],max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x}),jQuery("#masthead #ast-"+e+"-header .ast-custom-header").astExtSticky({max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x})),"1"!=k&&"on"!=k&&"disabled"!=k||jQuery("#masthead #ast-"+e+"-header .ast-below-header").astExtSticky({dependent:["#masthead #ast-"+e+"-header .main-header-bar","#masthead #ast-"+e+"-header .ast-above-header"],max_width:o,site_layout:w,sticky_on_device:Q,header_style:f,hide_on_scroll:x})):((jQuery("#masthead #ast-"+e+"-header .main-header-bar-wrap").length?jQuery("#masthead #ast-"+e+"-header .main-header-bar-wrap"):jQuery("#masthead #ast-"+e+"-header .ast-below-header-wrap")).wrap('<div class="ast-stick-primary-below-wrapper"></div>'),jQuery("#masthead #ast-"+e+"-header .ast-below-header-wrap").prependTo("#masthead #ast-"+e+"-header .ast-stick-primary-below-wrapper"),jQuery("#masthead #ast-"+e+"-header .main-header-bar-wrap").prependTo("#masthead #ast-"+e+"-header .ast-stick-primary-below-wrapper"),jQuery("#masthead #ast-"+e+"-header .ast-stick-primary-below-wrapper").astExtSticky({dependent:["#masthead #ast-"+e+"-header .ast-above-header"],max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x}))}):("1"!=u&&"on"!=u&&"disabled"!=u||jQuery("#masthead .ast-above-header").astExtSticky({max_width:o,site_layout:w,sticky_on_device:Q,header_style:f,hide_on_scroll:x}),"1"!=_&&"on"!=_&&"disabled"!=_||"1"!=k&&"on"!=k&&"disabled"!=k?("1"!=_&&"on"!=_&&"disabled"!=_||(t=m?{padding_top:"",padding_bottom:""}:"",jQuery("#masthead .main-header-bar").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x}),jQuery("#masthead .ast-custom-header").astExtSticky({max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x})),"1"!=k&&"on"!=k&&"disabled"!=k||jQuery("#masthead .ast-below-header").astExtSticky({dependent:["#masthead .main-header-bar","#masthead .ast-above-header"],max_width:o,site_layout:w,sticky_on_device:Q,header_style:f,hide_on_scroll:x})):(jQuery("#masthead .main-header-bar-wrap").wrap('<div class="ast-stick-primary-below-wrapper"></div>'),jQuery("#masthead .ast-below-header-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .main-header-bar-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .ast-stick-primary-below-wrapper").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x}))):(jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=u&&"on"!=u&&"disabled"!=u&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=_&&"on"!=_&&"disabled"!=_&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=k&&"on"!=k&&"disabled"!=k&&jQuery("#ast-fixed-header .ast-below-header").hide(),"1"!=u&&"on"!=u&&"disabled"!=u&&"1"!=_&&"on"!=_&&"disabled"!=_&&"1"!=k&&"on"!=k&&"disabled"!=k||(t=m?{padding_top:"",padding_bottom:""}:"",jQuery("#ast-fixed-header").astExtSticky({max_width:o,site_layout:w,shrink:t,sticky_on_device:Q,header_style:f,hide_on_scroll:x}))),"mobile"!=Q&&"both"!=Q||(jQuery("#masthead .main-header-menu-toggle").click(function(e){var t,a;jQuery("#masthead .main-header-menu-toggle").hasClass("toggled")?(i.addClass("ast-sticky-toggled-off"),"none"==s.header_style&&(jQuery("#masthead .main-header-bar").hasClass("ast-sticky-active")||jQuery("#masthead .ast-stick-primary-below-wrapper").hasClass("ast-sticky-active"))&&(t=jQuery(h).height(),a=0,jQuery("#masthead .ast-above-header")&&jQuery("#masthead .ast-above-header").length&&(a=jQuery("#masthead .ast-above-header").height()),"1"==x&&jQuery("html").css({overflow:"hidden"}),("1"!=m||"1"!=_&&"on"!=_&&"disabled"!=_||"1"!=k&&"on"!=k&&"disabled"!=k?jQuery("#masthead .main-header-bar.ast-sticky-active"):jQuery("#masthead .ast-stick-primary-below-wrapper")).css({"max-height":t-a+"px","overflow-y":"auto"}))):(i.addClass("ast-sticky-toggled-off"),jQuery("html").css({overflow:""}),("1"!=m||"1"!=_&&"on"!=_&&"disabled"!=_||"1"!=k&&"on"!=k&&"disabled"!=k?jQuery("#masthead .main-header-bar.ast-sticky-active"):jQuery("#masthead .ast-stick-primary-below-wrapper")).css({"max-height":"","overflow-y":""}))}),jQuery("#ast-fixed-header .main-header-menu-toggle").click(function(e){var t;jQuery("#ast-fixed-header .main-header-menu-toggle").hasClass("toggled")?(t=jQuery(h).height(),"1"==x&&jQuery("html").css({overflow:"auto"}),jQuery("#ast-fixed-header").css({"max-height":t+"px","overflow-y":"auto"})):(jQuery("html").css({overflow:""}),jQuery("#ast-fixed-header").css({"max-height":"","overflow-y":""}))}))}))}(jQuery,window);const getHeaderHeightIfSticky=()=>{var e=document.querySelector("body"),o=document.querySelector(".ast-above-sticky-header-active"),c=document.querySelector(".ast-primary-sticky-header-active"),r=document.querySelector(".ast-below-sticky-header-active"),a=document.querySelector(".admin-bar"),s=document.querySelectorAll(".ast-sticky-active");let i,n;if(e&&(e.classList.contains("woocommerce-shop")||e.classList.contains("ast-woo-shop-archive"))&&(i=document.querySelector(".woocommerce-shop.ast-left-sidebar #content .ast-container, .woocommerce-shop.ast-right-sidebar #content .ast-container, .ast-woo-shop-archive.ast-left-sidebar #content .ast-container, .ast-woo-shop-archive.ast-right-sidebar #content .ast-container"),n=document.querySelector(".woocommerce-shop.ast-left-sidebar #content .ast-container > .widget-area, .woocommerce-shop.ast-right-sidebar #content .ast-container > .widget-area, .ast-woo-shop-archive.ast-left-sidebar #content .ast-container > .widget-area, .ast-woo-shop-archive.ast-right-sidebar #content .ast-container > .widget-area")),e&&e.classList.contains("woocommerce-cart")&&astraAddon.cart_sticky_cart_totals&&(i=document.querySelector("#ast-cart-wrapper"),n=document.querySelector("#ast-cart-wrapper .cart-collaterals")),e&&e.classList.contains("single-product")&&(i=document.querySelector("#ast-sticky-row-summary"),n=document.querySelector("#ast-sticky-row-summary .summary")),e&&e.classList.contains("woocommerce-checkout")&&astraAddon.checkout_order_review_sticky&&(i=document.querySelector(".woocommerce-checkout"),n=document.querySelector("#ast-order-review-wrapper")),s){let t=0;s.forEach(e=>{t+=e.clientHeight}),i&&(o||c||r)&&n&&t?(n.style.position="sticky",n.style.top=a?t+50+"px":t+20+"px"):i&&n&&(n.style.position="sticky",n.style.top=a?"3em":"1em")}};let desktopElement=document.querySelector(".ast-desktop");desktopElement&&(window.onscroll=function(e){getHeaderHeightIfSticky()});function CartCrossSellsSummaryHeight(){var e=document.querySelector("body"),t=document.querySelector(".cross-sells");e.classList.contains("woocommerce-cart")&&t&&(e=t.querySelectorAll(".products > li"))&&e.forEach(e=>{e&&(e=e.querySelectorAll(".astra-shop-summary-wrap"))&&e.forEach(e=>{var t=e.querySelector(".price"),r=e.querySelector("a.button"),o=e.querySelector("a.ast-quick-view-button");(t||r)&&(t=(t?t.clientHeight:0)+(r?r.clientHeight:0)+(o?o.clientHeight:0)+15)&&(e.style.minHeight=t+"px")})})}function CartCrossSellsSummaryHeightResize(){let t;window.addEventListener("resize",function(e){clearTimeout(t),t=setTimeout(function(){CartCrossSellsSummaryHeight()},500)})}window.addEventListener("DOMContentLoaded",e=>{CartCrossSellsSummaryHeight()}),CartCrossSellsSummaryHeightResize();function customCoupon(){var e=document.querySelector("div.woocommerce"),o=document.querySelector("body");if(e&&(o.classList.contains("woocommerce-checkout")||o.classList.contains("woocommerce-cart"))){const t=e=>{var o=document.querySelector("#coupon_code"),t=document.querySelector('button[name="apply_coupon"]'),c=document.querySelector("#ast-coupon-code"),n=document.querySelector("#ast-checkout-coupon .coupon");n&&e.target&&"ast-coupon-trigger"===e.target.id&&(n.style.display="flex",e.target.style.display="none"),o&&t&&c&&e.target&&"ast-apply-coupon"===e.target.id&&(o.value=c.value,t.click())};e.addEventListener("click",function(e){t(e)}),e.addEventListener("keypress",function(e){13===(e.which||e.keyCode)&&t(e)})}}window.addEventListener("DOMContentLoaded",e=>{customCoupon()});function cartQuantityUpdater(){var e=document.querySelector("body");pageParentClass=document.querySelector("div.woocommerce");let t;e.classList.contains("woocommerce-cart")&&pageParentClass&&pageParentClass.addEventListener("change",function(e){e.target&&e.target.classList.contains("qty")&&(null!=t&&clearTimeout(t),""!=e.target.value)&&(t=setTimeout(function(){document.querySelector('[name="update_cart"]').click()},1e3))})}window.addEventListener("DOMContentLoaded",e=>{cartQuantityUpdater()});function modernLayoutInputs(){var e=document.querySelectorAll(".woocommerce input, .woocommerce select, .woocommerce textarea");e&&e.forEach(e=>{e.addEventListener("input",function(e){addAnimateClass(e.currentTarget)}),addPlaceholder(e),addRequiredFields(e),addAnimateClass(e)})}function addAnimateClass(e){var t,a="ast-animate-input",s=e.closest(".form-row");s&&((""!==(t="select"===e.tagName||e.classList.contains("select2-hidden-accessible")?e.querySelector(":selected").textContent:e.value)||" "!==t&&"select"===e.tagName)&&s.classList.add(a),"hidden"===t&&s.classList.remove(a),""===t?s.classList.remove(a):s.classList.add(a))}function addPlaceholder(e){var t;e.closest(".form-row")&&!e.getAttribute("placeholder")&&(t=e.closest(".form-row").querySelector("label"))&&e.setAttribute("placeholder",t.textContent)}function addRequiredFields(t){var a=t.closest(".form-row");if(a){a=a.classList.contains("validate-required");let e=t.getAttribute("placeholder");a&&""!==e&&!e.includes("*")&&(e+=" *"),t.setAttribute("placeholder",e)}}document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector("body");t&&!t.classList.contains("cartflows_step-template")&&modernLayoutInputs()});function slideInAndOutContent(e,s){e=document.querySelector(e);const c=document.querySelector(".ast-order-review-toggle-text");e&&e.addEventListener("click",function(e){const t=document.querySelector(s);var o=t.querySelector("*");if(t)if(e.currentTarget.classList.contains("active"))e.currentTarget.classList.remove("active"),t.style.maxHeight=0,setTimeout(()=>{t.style.display="none"},300),c&&(c.textContent=astraAddon.order_review_toggle_texts.toggle_show_text);else if(o&&(e.currentTarget.classList.add("active"),t.style.display="block",t.style.maxHeight=o.clientHeight+"px",c)){c.textContent=astraAddon.order_review_toggle_texts.toggle_hide_text;const n=document.querySelector("#ast-order-review-content"),a=document.querySelector("#order_review");["change",'select.shipping_method, input[name^="shipping_method"]'].forEach(e=>n.addEventListener(e,function(){a.querySelectorAll('input[name^="shipping_method"][type="radio"]:checked').forEach(e=>{e.removeAttribute("checked")}),document.querySelector("body").dispatchEvent(new CustomEvent("update_checkout",{detail:{update_shipping_method:!0}}))}))}})}let xhrCountEmail=0,delayTimerEmail;function validateInlineEmail(){const o=document.querySelector("#billing_email");if(o){const n=o.value;if(void 0===n||astraAddon.is_logged_in)return;const a=document.querySelector(".ast-create-account-section"),s=document.querySelector(".woocommerce-billing-fields__customer-login-label"),c=document.querySelector(".ast-email-validation-block"),i=document.querySelector("#ast-customer-login-url");if(""!==n){c&&c.remove(),clearTimeout(delayTimerEmail);const r=++xhrCountEmail;delayTimerEmail=setTimeout(async function(){let t=new XMLHttpRequest;t.open("POST",astra.ajax_url,!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send("action=astra_woo_check_user_exist&user_name_email="+n+"&security="+astraAddon.check_user_exist_nonce),t.onload=function(){var e;t.readyState==XMLHttpRequest.DONE&&(200<=t.status||400<=t.status)&&(document.cookie="ast_modern_checkout_useremail="+n,e=JSON.parse(t.responseText),r===xhrCountEmail)&&(c&&c.remove(),e.data.success&&i&&i.classList.contains("active")?o.insertAdjacentHTML("afterend",'<span class="ast-email-validation-block success">'+astraAddon.user_validation_msgs.success_msg+"</span>"):e.data.success?(e.data.is_login_allowed&&(o.insertAdjacentHTML("afterend",'<span class="ast-email-validation-block success">'+astraAddon.user_validation_msgs.success_msg+"</span>"),i)&&!i.classList.contains("active")&&i.click(),a&&(a.style.display="none"),s&&(s.style.display="block")):(i&&i.classList.contains("active")&&i.click(),a&&((e=a.querySelector(".create-account label.checkbox"))&&(e.style.display="block"),a.style.display="block"),s&&""==n&&(s.style.display="none")))}},300)}else i&&i.classList.contains("active")&&i.click(),c&&(c.style.display="none"),s&&(s.style.display="block"),a&&(a.style.display="none")}return!1}function supportNativeEmailFunctionality(){var e=document.querySelector("#billing_email");if(e){e=e.value;if(void 0===e||astraAddon.is_logged_in)return;var t=document.querySelector(".ast-create-account-section");t&&(t.style.display=""!==e?"block":"none")}return!1}function woocommerceUserLogin(){var e=document.querySelector(".ast-customer-login-section__login-button");e&&e.addEventListener("click",function(){var e=document.querySelector("#billing_email"),t=document.querySelector("#billing_password");if(e||!t){let o=new XMLHttpRequest;o.open("POST",astra.ajax_url,!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send("action=astra_woocommerce_login_user&user_name_email="+encodeURIComponent(e.value)+"&password="+encodeURIComponent(t.value)+"&security="+encodeURIComponent(astraAddon.woocommerce_login_nonce)),o.onload=function(){var e,t;o.readyState==XMLHttpRequest.DONE&&(200<=o.status||400<=o.status)&&((e=JSON.parse(o.responseText)).data.success?location.reload():(t=document.querySelector(".ast-customer-info__notice"))&&(t.classList.add("active"),t.innerHTML=e.data.error))}}})}document.addEventListener("DOMContentLoaded",function(e){var t,o,n=document.querySelector("body");!astraAddon.cartflows_version&&n&&n.classList.contains("woocommerce-checkout")&&(t=astraAddon.is_complete_package,(o=document.querySelector("#billing_email"))&&(t?(o.addEventListener("input",validateInlineEmail),validateInlineEmail):(o.addEventListener("input",supportNativeEmailFunctionality),supportNativeEmailFunctionality))(),n&&!n.classList.contains("ast-woo-two-step-modern-checkout")&&slideInAndOutContent("#ast-order-review-toggle","#ast-order-review-content"),t)&&(slideInAndOutContent("#ast-customer-login-url","#ast-customer-login-section"),woocommerceUserLogin())});!function(){var e;function o(e){var t=(t=document.body.className).replace(e,"");document.body.className=t}function d(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function n(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}r="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",e="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+r,document.body.className+=" "+e;for(var t=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),a=0;t.length>a;a++)t[a].onclick=function(e){var t,a,o,n;if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var s=document.querySelectorAll(".ast-search-box.header-cover"),c=astraAddon.is_header_builder_active||!1,r=0;r<s.length;r++)for(var l=s[r].parentNode.querySelectorAll("a.astra-search-icon"),i=0;i<l.length;i++)l[i]==this&&(d(s[r]),s[r].querySelector("input.search-field").focus(),c?(t=s[r],n=o=a=void 0,document.body.classList.contains("ast-header-break-point")&&(n=document.querySelector(".main-navigation"),a=document.querySelector(".main-header-bar"),o=document.querySelector(".ast-mobile-header-wrap"),null!==a)&&null!==n&&(n=n.offsetHeight,a=a.offsetHeight,o=o.offsetHeight,n=n&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(n)-parseFloat(a):parseFloat(a),t.parentNode.classList.contains("ast-mobile-header-wrap")&&(n=parseFloat(o)),t.style.maxHeight=Math.abs(n)+"px")):(a=s[r],t=o=void 0,document.body.classList.contains("ast-header-break-point")&&(t=document.querySelector(".main-navigation"),null!==(o=document.querySelector(".main-header-bar")))&&null!==t&&(t=t.offsetHeight,o=o.offsetHeight,t=t&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(t)-parseFloat(o):parseFloat(o),a.style.maxHeight=Math.abs(t)+"px")));else this.classList.contains("full-screen")&&(e=document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen")&&(d(e),document.body.className+=" full-screen",e.querySelector("input.search-field").focus())};for(var s=document.querySelectorAll(".ast-search-box .close"),a=0,c=s.length;a<c;++a)s[a].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){n(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode)for(var e=document.getElementById("ast-seach-full-screen-form"),t=(null!=e&&(n(e),o("full-screen")),document.querySelectorAll(".ast-search-box.header-cover")),a=0;a<t.length;a++)n(t[a])},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}});var r=document.getElementById("close");r&&r.addEventListener("keydown",function(e){"Enter"===e.key?(e.preventDefault(),this.click()):"Tab"===e.key&&e.preventDefault()})}();