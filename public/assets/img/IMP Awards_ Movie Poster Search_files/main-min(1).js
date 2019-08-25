//Mirai
function begin(){_g.feedConfig=getFeed("Config"),_g.feedKeys=getFeed("Keys"),_g.feedCar=getFeed("Car"),_g.feedColors=getFeed("Colors"),_g.feedBackground=getFeed("Background"),_g.feedCta=getFeed("Cta"),_g.feedAccolades=getFeed("Accolades"),initSetup(),_g.feedCar.modelText=checkObjForSize(_g.feedCar.modelText),queryStr||(queryStr=""),_g.animationVersion=queryStr||_g.feedConfig.version,_g.feedAccolades.hasOwnProperty("category")&&(_g.animationVersion=String(_g.feedAccolades.category)),console.log("animationVersion: "+_g.animationVersion),console.log(dynamicContent),-1!=_g.feedBackground.type.indexOf("interior")||-1!=queryStr.indexOf("int")?_g.isInterior=!0:_g.isInterior=!1,_g.isNight=!1,_g.extras.hasOwnProperty("isNight")&&"true"==_g.extras.isNight&&(_g.isNight=!0),_g.exit=getTrackingCodeUrl(_g.feedAccolades.exit.Url),
//hack
_g.feedCar.fileNameSuffix=_g.feedCar.fileNameSuffix.split("MY18").join("MY19");var e=_g.feedCar.fileNameSuffix,s=e+"_"+(/*_g.feedColors.fileNameSuffix+*/_g.isNight?"_Night":""),a="",t,i;if(-1!=e.indexOf("/")){var o=e.split("/"),n=s.split("/");o[o.length-1]=a+o[o.length-1],n[n.length-1]=a+n[n.length-1],t=o.join("/"),i=n.join("/")}else t=a+e,i=a+s;var g=checkObjForSize(_g.feedBackground.backgroundImage);if(-1!=g.indexOf("http")||/*fc*/-1!=g.indexOf("./")){var r=g.split("/");r[r.length-1]=_g.doc.size+"_"+r[r.length-1],r=r.join("/"),_g.feedBackground.backgroundImage=r+".jpg"}else _g.feedBackground.backgroundImage=_g.doc.size+"_"+g+".jpg";if(_g.isInterior)switch(_g.feedBackground.backgroundImage=_g.feedBackground.backgroundImage.split("bg").join("int"),_g.assets.background_image={optRetina:!1,src:_g.feedBackground.backgroundImage},_g.doc.size){case"300x250":case"320x50":break;default:_g.extras.textColor="#000000";break}else _g.assets.background_image={optRetina:!1,src:_g.feedBackground.backgroundImage};
//demo
-1!=queryStr.indexOf("alt")&&(_g.feedCar.modelText="<b>Camry</b>",_g.feedAccolades.text="Every ride is a joyride with the new Direct Shift Transmission."),buildInterfaceDefaultPrep({cta:{text:_g.feedCta.text}}),
//_g.assets.model_text.alt = _g.assets.model_text.text.split("<b>").join("").split("</b>").join("").split("<i>").join("").split("</i>").join("").split("&nbsp;").join("");
//_g.assets.headline = {className:"headline", text:checkObjForSize(_g.feedAccolades.text), color:_g.assets.model_text.color, fontSize:12.5, x:"center", valign:"middle", y:["parseFloat(_g.model_text.style.top)+parseFloat(_g.model_text.clientHeight)", "_g.assets.model_animation.boundingBox.y*0.5", 0.45], textAlign:"center"};
_g.assets.headline.text=String(checkObjForSize(_g.feedAccolades.text)),
//fix for extra spaces at end
" "==_g.assets.headline.text.substr(_g.assets.headline.text.length-1)&&(_g.assets.headline.text=_g.assets.headline.text.substr(0,_g.assets.headline.text.length-1));for(
//check for non-breaking combos
var l=[" hwy mpg"],_=_g.assets.headline.text,d=0;d<l.length;d++){var c=_.indexOf(l[d]);if(-1!=c){for(var m=1;!isNaN(parseInt(_.substr(c-m,1)));)m++;m--;var h=_.substr(c-m,m+l[d].length),p=h.split(" ").join("&nbsp;");_g.assets.headline.text=_g.assets.headline.text.split(h).join(p)}}if(_g.assets.accoladeExtra={tempWidth:150,y:120,tempX:"center"},_g.feedAccolades.hasOwnProperty("accoladeExtra")&&""!=_g.feedAccolades.accoladeExtra)if(-1!=_g.feedAccolades.accoladeExtra.indexOf("{")){var y=JSON.parse(_g.feedAccolades.accoladeExtra);_g.assets.accoladeExtra.src=y.src,y.hasOwnProperty("width")&&(_g.assets.accoladeExtra.tempWidth=Number(y.width)),y.hasOwnProperty("y")&&(_g.assets.accoladeExtra.y=Number(y.y))}else _g.assets.accoladeExtra.src=_g.feedAccolades.accoladeExtra;_g.assets.accoladeExtra.tempWidth>_g.doc.width-20&&(_g.assets.accoladeExtra.tempWidth=_g.doc.width-20),
//swap hyphens to prevent line breaks
_g.assets.model_text.text=_g.assets.model_text.text.split("-").join("&#8209;");var x=!0;_g.resources.hasOwnProperty("headline")&&_g.resources.headline.hasOwnProperty("hyphens")&&(x=!1),x&&(_g.assets.headline.text=_g.assets.headline.text.split("-").join("&#8209;")),_g.assets.headline.text=_g.assets.headline.text.split("font&#8209;size").join("font-size"),
//fix breaks with spaces
_g.assets.headline.text=_g.assets.headline.text.split("<br />").join("<br/>"),
//prevent breaks on superscripted brackets
_g.assets.headline.text=_g.assets.headline.text.split("<sup>").join("&#65279;<sup>"),_g.assets.rollover_disclaimer={optRetina:!1,text:_g.extras.disclaimer,buffer:20,closeButton:{src:"closeButton.png"}},_g.assets.rollover_disclaimer_prompt.text=prioritizeSelection([_g.feedAccolades.disclosureCTA,_g.feedCar.rolloverDisclaimerPrompt,"[#] Important Information"]),
//customize tags from feed
_g.assets.rollover_disclaimer.text=_g.assets.rollover_disclaimer.text.split("\n").join("<br />"),_g.assets.rollover_disclaimer.text=_g.assets.rollover_disclaimer.text.split("<it>").join("<i>"),_g.assets.rollover_disclaimer.text=_g.assets.rollover_disclaimer.text.split("</it>").join("</i>"),_g.assets.headline.text=_g.assets.headline.text.split("<it>").join("<i>"),_g.assets.headline.text=_g.assets.headline.text.split("</it>").join("</i>"),setPersistentDisclaimer(_g.assets.persistent_disclaimer,["text"]),_g.extras.hasOwnProperty("persistent_disclaimer_fontColor")&&(_g.assets.persistent_disclaimer.color=_g.extras.persistent_disclaimer_color),
//car animation
_g.assets.model_animation={src:"imagesModels|"+i+".png",x:164,y:154,origin:{x:"center",y:"center"}/*, boundingBox:{x:32,y:90,width:226,height:114}*/},_g.assets.model_animation.glare={src:"imagesLocal|"+t+"_Glare.png"},_g.assets.model_animation.start={amp:200,angle:-4,scale:.6},_g.assets.model_animation.glareMask={leaveSrc:!0,src:"imagesCommon|car_glare_mask.png"},
//_g.assets.guide = {leaveSrc:true, src:"imagesLocal|guide.png"};
//mirai mod
//_g.assets.headline.text = "Press power.<br /><span style='font-size:75%;'>Start something bigger.</span>";
console.log("A: "+_g.assets.headline.text),console.log("B: Press power.<br /><span style='font-size:75%;'>Start something bigger.</span>"),_g.assets.lockup.src="imagesLocal|miraiLockup.png",_g.assets.lockup.x="center",delete _g.assets.lockup.bottom,_g.assets.lockup.y=8,_g.assets.lockup.width=93,_g.assets.model_text.text="",_g.assets.headline.y=["parseFloat(_g.displayObjects.lockup.style.top)+parseFloat(_g.displayObjects.lockup.clientHeight)",102,.45],_g.assets.headline.fontWeight="bold",_g.assets.headline.fontSize=19,_g.assets.headline.lineHeight="1.2em",_g.assets.headline.letterSpacing="0.0em",_g.assets.cta.width=83,_g.assets.cta.height=25,_g.assets.cta.x=210,_g.assets.cta.bottom=37,_g.assets.cta.fontSize=9,_g.assets.cta.on={leaveSrc:!0,src:"imagesCommon|ctaOff.png"},_g.assets.cta.off={leaveSrc:!0,src:"imagesCommon|ctaOn.png"},"300x250"==_g.doc.size&&(
//_g.assets.persistent_disclaimer.flipOrder = true;
_g.assets.persistent_disclaimer.align="left",
//_g.assets.persistent_disclaimer.buffer.extra = -1;
_g.assets.persistent_disclaimer.buffer.v=4,
//_g.assets.persistent_disclaimer.width = 194;
_g.assets.persistent_disclaimer.fontSize=7),_g.assets.persistent_disclaimer.color="#999999";var f="_300x250",u;switch(_g.animationVersion){case"B":_g.assets.model_animation.isVertical=!1,
//_g.assets.headline.text = "Press power to<br />change the world.";
//_g.assets.headline.text = "<span class='font-size:12px'>Fueled by hydrogen. Powered by optimism.<br />Hydrogen Fuel Cell technology available now.</span>";
_g.assets.headline.fontSize=14,_g.assets.headline.letterSpacing="-0.025em",_g.assets.headline.lineHeight="1.2em",_g.assets.headline.y=["parseFloat(_g.displayObjects.lockup.style.top)+parseFloat(_g.displayObjects.lockup.clientHeight)",102,.45],
//_g.assets.headline.y = ["parseFloat(_g.displayObjects.lockup.style.top)+parseFloat(_g.displayObjects.lockup.clientHeight)", 80, 0.4];
_g.assets.model_animation.boundingBox={x:32,y:103,width:217,height:113},_g.assets.background_image.src=_g.assets.background_image.src.split(".j").join("b.j"),_g.assets.model_animation.src=_g.assets.model_animation.src.split("_.png").join("b.png"),_g.assets.model_animation.glare.src=_g.assets.model_animation.glare.src.split("_Glare").join("b_Glare"),_g.assets.light0={src:"imagesLocal|light0.png"},_g.assets.light1={src:"imagesLocal|light1.png"},_g.assets.light2={src:"imagesLocal|light2.png"},_g.assets.stars0={src:"imagesLocal|stars0.png"},_g.assets.stars1={src:"imagesLocal|stars1.png"},_g.assets.stars2={src:"imagesLocal|stars2.png"},_g.assets.auroraBackgroundMask={src:"imagesLocal|auroraBackgroundMask.png",optRetina:!0},_g.assets.shootingStar={src:"imagesLocal|shootingStar.png",origin:{x:"center",y:"center"}},_g.assets.shootingStars={spreadY:1},delete _g.assets.model_animation.headlights;break;case"C":_g.assets.lensFlare={src:"imagesLocal|lensFlare.png",x:.75*_g.doc.width,animation:{scaleE:{a:1.25,b:3}}},
//_g.assets.headline.text = "The future is present.";
//_g.assets.headline.text = "You take care of the planet. We'll take care of the fuel.<br /><span style=''>Up to $15,000 of complimentary fuel included.<sup>[1]</sup></span>";
_g.assets.headline.fontSize=12.5,
//_g.assets.headline.lineHeight = "1.5em";
_g.assets.headline.letterSpacing="-0.025em",
//_g.assets.rollover_disclaimer.text = "[1] Compimentary fuel for three years or $15,000 maximum, whichever comes first. Call Toyota Customer Service at 1-800-331-4331 for information on hydrogen fueling stations avialable to Mirai.";
_g.assets.headline.y=["parseFloat(_g.displayObjects.lockup.style.top)+parseFloat(_g.displayObjects.lockup.clientHeight)",92,.45],_g.assets.persistent_disclaimer.color="#cccccc",_g.assets.model_animation.boundingBox={x:38,y:92,width:232,height:121},_g.assets.background_image.src=_g.assets.background_image.src.split(".j").join("c.j"),_g.assets.model_animation.src=_g.assets.model_animation.src.split("_.png").join("c.png"),_g.assets.model_animation.glare.src=_g.assets.model_animation.glare.src.split("_Glare").join("c_Glare"),delete _g.assets.model_animation.headlights;break;default:_g.assets.model_animation.isVertical=!0,_g.assets.model_animation.headlights={src:"imagesLocal|"+t+"_Headlights.png"},_g.assets.model_animation.window_glare={src:"imagesLocal|window_glare.png"},_g.assets.model_animation.window_front={src:"imagesLocal|"+e+"_window_front.png"},_g.assets.model_animation.window_side={src:"imagesLocal|"+e+"_window_side.png"},_g.assets.model_animation.hub={opacity:.6,src:"imagesLocal|"+t+"_Hub.png"},_g.assets.model_animation.hub.a={rotation:7,x:116,y:78,scalingX:.35,scalingY:.87},_g.assets.model_animation.hub.b={rotation:5,x:168,y:44,scalingX:.125,scalingY:.525},_g.assets.road_mask={optRetina:!1,src:"imagesLocal|road_mask_"+_g.doc.size+".png"},_g.assets.road_strip={optRetina:!1,src:"imagesLocal|road_strip"+f+".png"},_g.assets.white_road_strip={optRetina:!1,src:"imagesLocal|white_road_strip"+f+".png"},_g.assets.road_animated={total_r:3},
/*_g.assets.road_animated.x = 60;
			_g.assets.road_animated.y = 160;
			_g.assets.road_animated.scalingX = 1.33;
			_g.assets.road_animated.scalingY = 2.25;
			_g.assets.road_animated.rotation = -20.0;*/
_g.assets.road_animated.r0={x:60,y:140,scalingX:1.33,scalingY:2.25,rotation:-15,opacity:.6},_g.assets.road_animated.r1={x:120,y:160,scalingX:1.33,scalingY:2.25,rotation:-25,opacity:.6},_g.assets.road_animated.r2={x:-40,y:200,scalingX:1,scalingY:.25,rotation:-15,opacity:.25,s:_g.assets.white_road_strip}}
//size specific layout stuff
switch(_g.doc.size){case"320x50":case"300x50":_g.assets.model_animation.x=282,_g.assets.model_animation.y=-54,_g.assets.model_animation.boundingBox={x:138,y:1,width:90,height:47},"Spanish"==_g.language&&_g.assets.cta.text.length<10&&(_g.assets.cta.y=14),_g.assets.rollover_disclaimer.text="";break;case"728x90":switch(_g.assets.cta.x=594,_g.assets.cta.bottom=64,_g.assets.cta.width=124,_g.assets.cta.height=36,_g.assets.cta.fontSize=13.53,_g.assets.model_text.fontSize=22,_g.assets.model_text.x=100,_g.assets.model_text.y=20,_g.assets.model_text.group={optRetina:!1,valign:"middle",y:.5*_g.doc.height,spacingY:1.2,items:["model_text","headline"]},_g.assets.headline.fontSize=16,_g.assets.headline.x=160,
//_g.assets.headline.y = 46;
//_g.assets.headline.y = ["parseFloat(_g.model_text.style.top)+parseFloat(_g.model_text.clientHeight)", "_g.doc.height", 0.45];
_g.assets.headline.width=230,_g.assets.headline.textAlign="left",_g.assets.headline.limitBottom=88,
//delete _g.assets.headline.valign;
//_g.assets.headline.lineHeight = "1.15em";
_g.assets.lockup.x=20,_g.assets.lockup.bottom=66,_g.assets.lockup.width=100,
//_g.assets.lockup.src = _g.extras.textColor=="#FFFFFF"?"lgpLockup_alt_white.svg":"lgpLockup_alt_black.svg";
_g.assets.model_animation.x=696,_g.assets.model_animation.y=38,
//_g.assets.model_animation.scaling = 0.65;
_g.assets.model_animation.boundingBox={x:370,y:4,width:130,height:80},_g.animationVersion){case"B":
//_g.assets.headline.text = "Fueled by hydrogen. Powered by optimism. Hydrogen Fuel Cell technology available now.";
_g.assets.headline.fontSize=14,_g.assets.headline.lineHeight="1.4em",_g.assets.headline.width=230,_g.assets.model_animation.boundingBox={x:411,y:4,width:150,height:88};break;case"C":
//_g.assets.headline.text = "You take care of the planet. We'll take care of the fuel. Up to $15,000 of complimentary fuel included.<sup>[1]</sup>";
_g.assets.headline.width=230,_g.assets.headline.fontSize=12,_g.assets.headline.lineHeight="1.6em",_g.assets.model_animation.boundingBox={x:430,y:5,width:160,height:82},_g.assets.lensFlare.x=528,_g.assets.lensFlare.y=-50,_g.assets.lensFlare.animation.scaleE={a:1.5,b:3};break;default:_g.assets.road_animated.total_r=4;var b=1;_g.assets.road_animated.r0={x:-20,y:60,scalingX:1,scalingY:2.25,rotation:-15,opacity:0},_g.assets.road_animated.r1={x:210,y:60,scalingX:.9,scalingY:2.1,rotation:-22,opacity:.66*b},_g.assets.road_animated.r2={x:400,y:50,scalingX:1.25,scalingY:2.75,rotation:-54,opacity:.4},_g.assets.road_animated.r3={x:370,y:60,scalingX:1.25,scalingY:.18,rotation:-15,opacity:.2*b,s:_g.assets.white_road_strip};break}_g.isInterior?(_g.assets.persistent_disclaimer.color="#e5e5e5",_g.assets.background_image.frame={x:364,width:364},_g.assets.model_text.alt.length<=8&&(_g.assets.model_text.fontSize+=2)):_g.assets.model_text.singleLineHeadlineY=10;break;case"160x600":
//_g.assets.accoladeExtra.y += 16;
_g.assets.accoladeExtra.y+=4,_g.assets.accoladeExtra.maxHeight=75,_g.assets.model_animation.src="imagesModels|"+i+".png",
//_g.assets.model_animation.shine.src = _g.configData.images+"160x600_carShine_"+_g.version.model+".png";
_g.assets.model_animation.x=140,_g.assets.model_animation.y=344,_g.assets.model_animation.boundingBox={x:4,y:242,width:268,height:216},_g.assets.cta.width=98,_g.assets.cta.height=32,_g.assets.cta.fontSize=11,_g.assets.headline.fontSize=12,_g.assets.headline.x="center",
//_g.assets.headline.y = /*82*/["parseFloat(_g.model_text.style.top)+parseFloat(_g.model_text.clientHeight)", "parseFloat(_g.cta.style.top)", 0.45];
_g.assets.headline.width=134,_g.assets.headline.limitTop=10,
//_g.assets.headline.lineHeight = "1.15em";
//delete _g.assets.headline.valign;
//_g.assets.lockup.src = _g.extras.textColor=="#FFFFFF"?"lgpLockup_alt_white.svg":"lgpLockup_alt_black.svg";
_g.assets.lockup.x="center",_g.assets.lockup.width=82,_g.assets.lockup.bottom=136,_g.assets.persistent_disclaimer.rel="stacked",_g.assets.persistent_disclaimer.align="center",_g.isInterior&&(_g.assets.model_text.fontSize=25,_g.assets.headline.fontSize=11,_g.assets.model_text.y=35,_g.assets.headline.y=["parseFloat(_g.model_text.style.top)+parseFloat(_g.model_text.clientHeight)","parseFloat(_g.cta.style.top)",.45],_g.assets.headline.width=150,_g.assets.headline.lineHeight="1.2em",_g.assets.cta.bottom=478,_g.assets.model_text.bypassHeadlineProx=!0,_g.assets.lockup.bottom=124,_g.assets.persistent_disclaimer.color=_g.assets.rollover_disclaimer_prompt.color="#999999",_g.assets.background_image.frame={y:160,height:300});
//if(_g.assets.model_animation.hasOwnProperty("night")) _g.assets.model_animation.night = {src:_g.configData.images+"160x600_"+_g.version.model+"_night.png"};
break;case"300x600":switch(
//_g.assets.model_animation.src = "imagesModels|"+fileNameSizeModelColor+".png";
//_g.assets.model_animation.shine.src = _g.configData.images+"160x600_carShine_"+_g.version.model+".png";
_g.assets.model_animation.x=150,_g.assets.model_animation.y=346,_g.assets.model_animation.boundingBox={x:18,y:234,width:268,height:216},
//_g.assets.lockup.src = _g.extras.textColor=="#FFFFFF"?"lgpLockup_alt_white.svg":"lgpLockup_alt_black.svg";
_g.assets.cta.x="center",_g.assets.cta.bottom=104,_g.assets.cta.width=115,_g.assets.cta.height=36,_g.assets.cta.fontSize=12,_g.assets.headline.y=["parseFloat(_g.displayObjects.lockup.style.top)+parseFloat(_g.displayObjects.lockup.clientHeight)",254,.5],_g.assets.headline.fontWeight="bold",_g.assets.headline.fontSize=28,_g.assets.headline.lineHeight="1.2em",_g.assets.persistent_disclaimer.buffer.v=2,
//_g.assets.model_text.fontSize = 26.34;
//_g.assets.model_text.x = "center";
//_g.assets.model_text.y = 42;
_g.assets.lockup.x="center",delete _g.assets.lockup.bottom,_g.assets.lockup.y=20,
//_g.assets.lockup.y = 518;
_g.assets.lockup.width=135,_g.animationVersion){case"B":
//_g.assets.headline.text = "Fueled by hydrogen.<br />Powered by optimism.<br />Hydrogen Fuel Cell technology available now.";
_g.assets.headline.fontSize=18,_g.assets.headline.lineHeight="1.35em",_g.assets.headline.y=["parseFloat(_g.displayObjects.lockup.style.top)+parseFloat(_g.displayObjects.lockup.clientHeight)",266,.5],_g.assets.model_animation.boundingBox={x:12,y:230,width:274,height:216};break;case"C":
//_g.assets.headline.text = "You take care of the planet.<br />We'll take care of the fuel.<br />Up to $15,000 of complimentary fuel included.<sup>[1]</sup>";
_g.assets.headline.fontSize=18,_g.assets.headline.lineHeight="1.35em",_g.assets.model_animation.boundingBox={x:26,y:340,width:254,height:134},_g.assets.lensFlare.animation.scaleE={a:2,b:4},_g.assets.lensFlare.x=.75*_g.doc.width,_g.assets.lensFlare.y=150;break;default:_g.assets.road_animated.total_r=4,_g.assets.road_animated.r0={x:60,y:340,scalingX:1.33,scalingY:2.25,rotation:-15,opacity:.6},_g.assets.road_animated.r1={x:100,y:460,scalingX:1.33,scalingY:4.25,rotation:-50,opacity:.5},_g.assets.road_animated.r2={x:100,y:370,scalingX:1.33,scalingY:3.25,rotation:-35,opacity:.6},_g.assets.road_animated.r3={x:-40,y:400,scalingX:1,scalingY:.25,rotation:-15,opacity:.25,s:_g.assets.white_road_strip};break}_g.isInterior&&(_g.assets.model_text.fontSize=25,_g.assets.headline.fontSize=11,_g.assets.model_text.y=35,_g.assets.headline.y=["parseFloat(_g.model_text.style.top)+parseFloat(_g.model_text.clientHeight)","parseFloat(_g.cta.style.top)",.45],_g.assets.headline.fontSize=12,_g.assets.headline.lineHeight="1.5em",_g.assets.cta.bottom=484,_g.assets.model_text.bypassHeadlineProx=!0,_g.assets.lockup.bottom=124,_g.assets.persistent_disclaimer.color=_g.assets.rollover_disclaimer_prompt.color="#999999",_g.assets.background_image.frame={y:160,height:300}),_g.assets.persistent_disclaimer.rel="sideBySide",_g.assets.persistent_disclaimer.align="center";break;case"970x250":switch(_g.assets.cta.x=837,_g.assets.cta.bottom=50,_g.assets.cta.width=117,_g.assets.cta.height=35,_g.assets.cta.fontSize=13,_g.assets.headline.x=20,_g.assets.headline.textAlign="left",_g.assets.headline.y=[0,184,.45],_g.assets.headline.fontWeight="bold",_g.assets.headline.fontSize=34,_g.assets.headline.lineHeight="0.95em",_g.assets.persistent_disclaimer.buffer.v=2,_g.assets.persistent_disclaimer.buffer.extra=-2,_g.assets.persistent_disclaimer.color="#bfbfbf",
//_g.assets.model_text.fontSize = 26.34;
//_g.assets.model_text.x = "center";
//_g.assets.model_text.y = 42;
_g.assets.lockup.x=16,_g.assets.lockup.bottom=67,
//_g.assets.lockup.y = 518;
_g.assets.lockup.width=128,_g.assets.model_animation.x=616,_g.assets.model_animation.y=38,
//_g.assets.model_animation.scaling = 0.65;
_g.assets.model_animation.boundingBox={x:506,y:26,width:322,height:194},_g.animationVersion){case"B":
//_g.assets.headline.text = "Fueled by hydrogen. Powered by optimism. Hydrogen Fuel Cell technology available now.";
_g.assets.headline.fontSize=22,_g.assets.headline.lineHeight="1.25em",_g.assets.headline.y=[0,180,.5],_g.assets.model_animation.boundingBox={x:394,y:52,width:408,height:198};break;case"C":
//_g.assets.headline.text = "You take care of the planet.<br />We'll take care of the fuel.<br />Up to $15,000 of complimentary<br />fuel included.<sup>[1]</sup>";
_g.assets.headline.fontSize=22,_g.assets.headline.lineHeight="1.25em",_g.assets.headline.width=444,_g.assets.headline.y=[0,180,.4],_g.assets.model_animation.boundingBox={x:482,y:36,width:384,height:202},_g.assets.lensFlare.animation.scaleE={a:3,b:5},_g.assets.lensFlare.x=780,_g.assets.lensFlare.y=-50;break;default:_g.assets.road_animated.total_r=6;var b=0;_g.assets.road_animated.r0={x:130,y:140,scalingX:2.25,scalingY:3.25,rotation:-15,opacity:.66},_g.assets.road_animated.r1={x:340,y:170,scalingX:1.3,scalingY:3.25,rotation:-20,opacity:.66},_g.assets.road_animated.r2={x:570,y:220,scalingX:2,scalingY:3.75,rotation:-48,opacity:.66},_g.assets.road_animated.r3={x:800,y:160,scalingX:1,scalingY:4.25,rotation:-75,opacity:.5},_g.assets.road_animated.r4={x:220,y:250,scalingX:3.5,scalingY:.7,rotation:-18,opacity:.2,s:_g.assets.white_road_strip},_g.assets.road_animated.r5={x:638,y:150,scalingX:1,scalingY:.15,rotation:-18,opacity:.4,s:_g.assets.white_road_strip};break}_g.isInterior?(_g.assets.persistent_disclaimer.color="#e5e5e5",_g.assets.background_image.frame={x:364,width:364},_g.assets.model_text.alt.length<=8&&(_g.assets.model_text.fontSize+=2)):_g.assets.model_text.singleLineHeadlineY=10;break;default:_g.assets.persistent_disclaimer.buffer.rel=3,_g.assets.headline.width=280,/*_g.doc.width-_g.assets.headline.y;*/
_g.isInterior?(_g.assets.model_text.y-=18,_g.assets.headline.y=["parseFloat(_g.model_text.style.top)+parseFloat(_g.model_text.clientHeight)","parseFloat(_g.model_text.clientHeight)/8"],_g.assets.model_text.fontSize=21,_g.assets.headline.fontSize=11.2,_g.assets.headline.lineHeight="1.2em",delete _g.assets.model_text.valign,delete _g.assets.headline.valign):_g.assets.model_text.singleLineHeadlineY=8;break}
//orphan fix
if("160x600"!=_g.doc.size&&"320x50"!=_g.doc.size){var w=_g.assets.headline.text,k=w.substr(w.lastIndexOf(" ")-1,1),v=w.substr(w.lastIndexOf(" ")-6,6);"."!=k&&"<br />"!=k&&(_g.assets.headline.text=w.substr(0,w.lastIndexOf(" "))+"&nbsp;"+w.substr(w.lastIndexOf(" ")+1))}
//car specific layout stuff
if(_g.assets.model_animation.src=_g.assets.model_animation.src.split("imagesModels").join("imagesLocal").split("_.").join("."),_g.extras.hasOwnProperty("lockupColor")&&(_g.extras.lockupColor=checkObjForSize(_g.extras.lockupColor,"null"),"null"!=_g.extras.lockupColor&&(_g.assets.lockup.src=_g.assets.lockup.src.split(-1!=_g.assets.lockup.src.indexOf("white")?"white":"black").join(_g.extras.lockupColor))),_g.extras.hasOwnProperty("bgTintOpacity")&&(_g.assets.imageTintGradient={optRetina:!1,opacity:checkObjForSize(_g.extras.bgTintOpacity),src:"#FFFFFF"==_g.assets.headline.color?"imageTintGradient_black.png":"imageTintGradient_white.png"},_g.assets.imageTintGradient.src="imagesCommon|"+_g.assets.imageTintGradient.src),_g.extras.hasOwnProperty("bgTintBottom")&&_g.extras.bgTintBottom.hasOwnProperty(_g.doc.size)&&(u=_g.extras.bgTintBottom[_g.doc.size]),u?_g.assets.rollover_disclaimer_prompt.color=_g.assets.persistent_disclaimer.color="white"==u?"#333333":"#FFFFFF":u=-1!=_g.assets.lockup.src.indexOf("white")?"black":"white",_g.extras.hasOwnProperty("bgTintOpacityBottom")&&(_g.assets.imageTintGradientBottom={optRetina:!1,opacity:0,src:"imageTintGradient_"+u+".png"}),_g.feedLanguages&&"320x50"!=_g.doc.size)switch(_g.language){case"Asian Indian":case"Spanish":break;default:_g.assets.lockup.src=_g.assets.lockup.src.split(".").join("_"+String(_g.language.split(" ").join("")+"."));break}switch(_g.doc.size){case"320x50":case"300x50":case"728x90":
//adjusted 120716A
var O="#FFFFFF"==_g.assets.headline.color?"black":"white";_g.extras.hasOwnProperty("sideTintColor")&&(O=checkObjForSize(_g.extras.sideTintColor,O)),_g.assets.imageSideTintGradient={optRetina:!1,opacity:.3,src:"728x90_sideGradient_"+O+".png"},_g.extras.hasOwnProperty("sideGradientOpacity")&&(_g.assets.imageSideTintGradient.opacity=_g.extras.sideGradientOpacity),delete _g.assets.imageSideTintGradient;case"300x250":break;case"160x600":case"300x600":_g.assets.model_animation.glareMask={leaveSrc:!0,src:"car_glare_mask_v.png"};
//delete _g.assets.model_animation.hub;
break;default:break}if(_g.isInterior)switch(_g.doc.size){case"300x250":case"320x50":break;default:delete _g.assets.imageTintGradient,delete _g.assets.imageTintGradientBottom,delete _g.assets.imageSideTintGradient;break}
//setupCarProperties();
//temp
//_g.assets.lockup.src = "images/"+_g.assets.lockup.src;
//_g.assets.lockup.src = _g.assets.lockup.src.split(".svg").join(".png");
if(_g.disableFullAnimation&&delete _g.assets.model_animation.hub,_g.isInterior)
//_g.assets.persistent_disclaimer.text = "";
//_g.assets.rollover_disclaimer.text = "";
switch(delete _g.assets.model_animation,_g.doc.size){case"160x600":case"728x90":case"300x600":_g.assets.headline.color=_g.assets.model_text.color="#000000",_g.assets.lockup.src=_g.assets.lockup.src.split("white").join("black");break;default:break}
//
console.log("main > updateGlobalTextFormatting"),updateGlobalTextFormatting(),
//loading
checkForRetina();var F=[],S=[];prependBaseUrls(_g.assets,_g.resources,F),preloadAssets(F,ready,null,!0)}function ready(){document.body.style.opacity=0,initMain()}function initMain(){function e(){for(var e=canvas.display.rectangle({}),s=0;s<12;s++){var a=canvas.display.ellipse({x:Math.random()*_g.doc.scaled_width,y:Math.random()*_g.doc.scaled_height*.4,radius:2*Math.random()+.5,fill:"#FFFFFF"});e.addChild(a)}return e}
/*var stars0 = makeImage(_g.assets.stars0, lightContainer);
						var stars1 = makeImage(_g.assets.stars1, lightContainer);
						var stars2 = makeImage(_g.assets.stars2, lightContainer);*/function r(e,s,a,t,i){var o=t||.25,n=a||"overlay",g=s;(_g.isFirefox&&!isMac()||isSansBlendModes())&&(n="source-over",g*=.33),e.composition=n,TweenLite.to(e,Math.random()*o+o,{opacity:Math.random()*g,ease:Linear.easeNone,onComplete:r,onCompleteParams:[e,s,a,t,!0]})}function s(){var e=makeImage(_g.assets.shootingStar),s=canvas.display.rectangle({});s.addChild(e);var a=.2,t=1*Math.random()+.5,i=new TimelineMax({delay:4.5+16*Math.random()});return i.append([TweenLite.from(e,.2,{opacity:0,ease:Quad.easeInOut}),TweenLite.to(e,t,{y:5*-e.height,ease:Linear.easeNone})]),i.append(TweenLite.to(e,.2,{opacity:0,ease:Quad.easeInOut})),s.x=Math.random()*_g.doc.scaled_width,s.y=Math.random()*_g.doc.scaled_height*_g.assets.shootingStars.spreadY,s.rotation=120,s.scalingX=s.scalingY=.2*Math.random()+.3,s.opacity=.7,s}
//road
function i(e,s){var a=e(),t=a||s;TweenLite.delayedCall(t,i,[e,s])}function a(){var e=.55;TweenLite.to(re.buffer.p,e,{x:40,y:.5*-re.buffer.height,startAt:{x:0,y:.5*re.buffer.height},ease:Linear.easeNone,onUpdate:re.buffer.draw}),TweenLite.to(le.buffer.p,e,{x:1*le.buffer.width,startAt:{x:.5*-le.buffer.width},ease:Linear.easeNone,onUpdate:le.buffer.draw,delay:.15})}function t(){oe.animate(),J.animate()}buildInterfaceDefault();var o={width:_g.assets.background_image.src.width,height:_g.assets.background_image.src.height},n=makeImageDiv(_g.assets.background_image),g;if(_g.doc.width/_g.doc.height==o.width/o.height)_g.layers.div0.appendChild(n);else{_g.layers.div0a=$(_g.layers.div1).clone().insertBefore($(_g.layers.div1))[0];var l={width:o.width,height:o.height};_g.assets.background_image.hasOwnProperty("frame")&&(_g.assets.background_image.frame.hasOwnProperty("x")&&(l.x=_g.assets.background_image.frame.x),_g.assets.background_image.frame.hasOwnProperty("y")&&(l.y=_g.assets.background_image.frame.y),_g.assets.background_image.frame.hasOwnProperty("width")?l.width=_g.assets.background_image.frame.width:l.width=_g.doc.width,_g.assets.background_image.frame.hasOwnProperty("height")?l.height=_g.assets.background_image.frame.height:l.height=_g.doc.height);var _=makeDiv(l,_g.layers.div0a);_.style.overflow="hidden",_.appendChild(n)}if(n.style.width="100%",n.style.height="100%",_g.assets.hasOwnProperty("imageTintGradient")){var d=makeImageDiv(_g.assets.imageTintGradient,_g.layers.div0);d.style.width=_g.doc.scaled_width+"px",d.style.height=_g.doc.scaled_height+"px"}if(_g.assets.hasOwnProperty("imageSideTintGradient")){var c=makeImageDiv(_g.assets.imageSideTintGradient,_g.layers.div0);c.style.width=_g.doc.scaled_width+"px",c.style.height=_g.doc.scaled_height+"px"}if(_g.extras.hasOwnProperty("bgTintOpacityBottom")&&_g.assets.hasOwnProperty("imageTintGradientBottom")){var m=makeImageDiv(_g.assets.imageTintGradientBottom,_g.layers.div0);m.style.opacity=_g.extras.bgTintOpacityBottom,cssTransform(m,{scaleY:-1}),m.style.bottom=_g.doc.scaled_height+"px",m.style.width=_g.doc.scaled_width+"px",m.style.height=_g.doc.scaled_height+"px"}TweenLite.ticker.addEventListener("tick",draw);var h=$("<canvas id='canvas' width='"+_g.doc.width+"px' height='"+_g.doc.height+"px'></canvas>");$("body").append($(_g.layers.div0a));var p=$($(_g.layers.div0).clone());p.empty(),_g.layers.div0a=p[0],$("body").append($(_g.layers.div0a)),(canvas=oCanvas.create({canvas:"#canvas"})).display.register("canvas",{shapeType:"rectangular"},function(e){e.drawImage(this.buffer,0,0)}),_g.layers.layer0=canvas.display.rectangle({}),canvas.addChild(_g.layers.layer0);var y=canvas.display.rectangle({});
//lightContainer.x -= _g.doc.scaled_width*0.5;
//lightContainer.y -= _g.doc.scaled_height*0.5;
switch(_g.layers.layer0.addChild(y),_g.animationVersion){case"B":switch(_g.doc.size){case"728x90":case"970x250":break;default:for(var x=.5,f=0,u=0;u<2;u++){var b=makeImage(_g.assets.light0,y),w=makeImage(_g.assets.light1,y),k=makeImage(_g.assets.light2,y),v=e(),O=e(),F=e();y.addChild(v),y.addChild(O),y.addChild(F),b.opacity=.3,w.opacity=.3,k.opacity=.3,r(b,0*x,"overlay",1),r(w,0*x,"overlay",1),r(k,0*x,"overlay",1),r(v,x,"normal",.4),r(O,x,"normal",.4),r(F,x,"normal",.4),x*=.5}break}_g.assets.model_animation.opacity=0;break;case"C":var S=makeImage(_g.assets.lensFlare,_g.layers.layer0),T=.4;S.origin={x:.66*S.width,y:.31*S.height},S.x+=S.origin.x,S.y-=S.origin.y;var C=_g.assets.lensFlare.animation.scaleE;S.scalingX=S.scalingY=C.a,S.rotation=60;var L=2;TweenLite.from(S,2,{rotation:-60,ease:Linear.easeNone}),TweenLite.to(S,1,{scalingX:C.b,scalingY:C.b,ease:Sine.easeOut}),TweenLite.to(S,1,{scalingX:C.a,scalingY:C.a+.4*(C.b-C.a),ease:Sine.easeIn,delay:1});var j={amp:.4};TweenLite.to(j,2,{amp:0,ease:Quad.easeInOut}),i(function(){TweenLite.to(S,T,{opacity:.1*Math.random()+j.amp})},T),_g.assets.model_animation.opacity=0;break;default:_g.removeDisplayObjects=[];for(var z=_g.assets.road_animated.hasOwnProperty("total_r")?_g.assets.road_animated.total_r:1,I=0;I<z;I++){var B=_g.assets.road_animated.hasOwnProperty("total_r")?_g.assets.road_animated["r"+I]:_g.assets.road_animated,P=makeRect(B),H,Y;if(_g.layers.layer0.addChild(P),_g.removeDisplayObjects.push(P),_g.assets.hasOwnProperty("road_shadow"))makeImage(_g.assets.road_shadow,_g.layers.layer0).opacity=.45;!function(){var e=B.hasOwnProperty("s")?B.s:_g.assets.road_strip,s=makeImage(e,P),a=makeImage(e,P),t=makeImage(e,P);B.hasOwnProperty("s")&&(
//road_b.opacity = 0;
t.opacity=0),Y=function(){var e=.7;TweenLite.from(s,M,{startAt:{x:0},x:.7*-s.width,ease:Linear.easeNone}),TweenLite.from(a,M,{startAt:{x:.7*s.width},x:0,ease:Linear.easeNone}),TweenLite.from(t,M,{startAt:{x:.7*-s.width},x:.7*-s.width*2,ease:Linear.easeNone})}}();var M=.25;i(Y,M)}var A=canvas.display.canvas({buffer:makeImageMasked({img:_g.assets.background_image,mask:_g.assets.road_mask}),scalingX:1,scalingY:1});_g.layers.layer0.addChild(A);break}
//headline
switch(_g.doc.size){case"728x90":case"300x250":_g.assets.model_text.alt.length;break;default:break}var G=addHtmlText(_g.assets.model_text);_g.model_text=G;var N=Math.round(parseInt(G.offsetHeight)/parseInt(G.style.fontSize));
//custom fix for headline based on descender:
if("160x600"==_g.doc.size){for(var X="qypgj",D=!1,I=0;I<X.length;I++){var E=_g.assets.model_text.alt.split(" ");if(-1!=E[E.length-1].indexOf(X.substr(I,1))){D=!0;break}}D&&(_g.assets.headline.y[2]=.48)}var R=addHtmlText(_g.assets.headline);console.log("HEADLINE WIDTH: "+_g.assets.headline.width),_g.headline=R,_g.assets.headline.hasOwnProperty("kill")&&(R.style.display="none");var V=Math.round(parseInt(R.offsetHeight)/parseInt(R.style.fontSize)),W;switch(V){case 1:
//if(_g.assets.model_text.hasOwnProperty("singleLineHeadlineY")) model_text.style.top = parseFloat(model_text.style.top)+_g.assets.model_text.singleLineHeadlineY+"px";
break;default:break}if(_g.assets.model_text.hasOwnProperty("group")){var q=0;2<V&&(_g.assets.model_text.group.spacingY*=.9);for(var I=0;I<_g.assets.model_text.group.items.length;I++){var B;(B=_g[_g.assets.model_text.group.items[I]]).style.top=q+"px",q+=parseFloat(B.clientHeight)*(I==_g.assets.model_text.group.items.length-1?1:_g.assets.model_text.group.spacingY)}for(var Q=_g.assets.model_text.group.y-.5*q,I=0;I<_g.assets.model_text.group.items.length;I++){var B;(B=_g[_g.assets.model_text.group.items[I]]).style.top=parseFloat(B.style.top)+Q+"px"}}"728x90"==_g.doc.size&&(_g.assets.headline.hasOwnProperty("limitBottom")&&(W=fitTextToHeight(R,_g.assets.headline.limitBottom-parseFloat(R.style.top)))<0&&(G.style.top=parseFloat(G.style.top)-.5*W+"px",R.style.top=parseFloat(R.style.top)-.5*W+"px"));if("160x600"==_g.doc.size){var U=parseFloat(R.style.top)-(parseFloat(G.style.top)+G.clientHeight);if(_g.assets.headline.hasOwnProperty("limitTop")&&U<_g.assets.headline.limitTop){var W=_g.assets.headline.limitTop-U;G.style.top=parseFloat(G.style.top)-W+"px",R.style.top=parseFloat(R.style.top)-.5*W+"px"}}var K=5,J;
//console.log(splitted);
if("160x600"==_g.doc.size){
//"&nbsp;"
//special orphan for 160 size
var Z=getLineBreaks(R);if(Z[Z.length-1].length<2){var ee=Z[Z.length-2],se=ee.join(" ").split("<sup>").join("").split("</sup").join(""),ae;(ee[ee.length-1]+" "+Z[Z.length-1][0]).split("<sup>").join("").split("</sup").join("").length<se.length&&((ee=R.innerHTML.split(" "))[ee.length-1]="&nbsp;"+ee[ee.length-1],R.innerHTML=ee.join(" ").split(" &nbsp;").join("&nbsp;"))}}
/*switch(_g.doc.size) {
		case "320x50":
		case "300x50":
		case "728x90":
			if(_g.doc.size == "320x50" || _g.doc.size == "300x50") {
				headlineTopBuffer = 4;
			}else if(_g.doc.size == "728x90") {
				headlineTopBuffer = 10;
			}
		case "300x250":
			var numLines = Math.round(parseInt(headline.clientHeight)/parseInt(headline.style.fontSize));

			if(_g.doc.size == "300x250" || _g.doc.size == "728x90") {
				if(numLines>3) {

					var lineHeightTemp = parseFloat(getComputedStyle(headline).lineHeight);

					headline.style.fontSize = parseFloat(headline.style.fontSize)*0.95+"px";
					if(_g.doc.size == "728x90") {
						headline.style.top = parseFloat(headline.style.top)*0.95+"px";
						headline.style.lineHeight = lineHeightTemp*0.95+"px";
					}
				}
			}

			var lineHeightRatio = 1.0;
			var carTopRatio = 0.0;
			if(numLines > 3) {
				lineHeightRatio = 0.8;
				carTopRatio = 1.0;

				if(numLines>4 && false) {
					var tempCounter = 0;
					var tempText = _g.assets.headline.text;
					tempCounter += tempText.split("<sup>").length+tempText.split("</sup>").length+tempText.split("<br />").length;
					tempText = _g.assets.headline.text.substr(0, 100+tempCounter*5)+"...";
					headline.innerHTML = tempText;
				}
			}else if(numLines == 3) {
				lineHeightRatio = 0.9;
				carTopRatio = 0.5;
			}
			if(lineHeightRatio != 1.0) {
				headline.style.top = (parseInt(headline.style.top)-headlineTopBuffer*carTopRatio)+"px";

				if(_g.doc.size == "300x250") _g.assets.model_animation.y += 2*carTopRatio*_g.scaleForDensity;
				else {
					model_text.style.top = (parseInt(model_text.style.top)-headlineTopBuffer*0.5*carTopRatio)+"px";
				}
			}
		break;
		default:
		break;
	}*/
/*if(_g.doc.size == "320x50" || _g.doc.size == "300x50") {
		if(numLines == 1) {
			var headlineJump = 6;
			model_text.style.top = (parseInt(model_text.style.top)+headlineJump)+"px";
			headline.style.top = (parseInt(headline.style.top)+headlineJump)+"px";
		}else if(numLines == 2) {
			var headlineJump = 2;
			model_text.style.top = (parseInt(model_text.style.top)+headlineJump)+"px";
			headline.style.top = (parseInt(headline.style.top)+headlineJump)+"px";
		}
	}*/if(_g.isInterior)TweenLite.from(n,1.5,{scale:1.33,ease:Quint.easeOut});else{J=makeCarDiv(_g.assets.model_animation),_g.layers.div0a.appendChild(J);var te=makeDiv({x:parseInt(J.style.left),y:parseInt(J.style.top)},_g.layers.div0a),ie=makeDiv({},te),oe=makeCarGlare({car:_g.assets.model_animation.glare,mask:_g.assets.model_animation.glareMask});
//cssTransform(carGlare, {scale:_g.assets.model_animation.scaling});
switch(ie.appendChild(oe),cssTransform(ie,{scale:J.firstChild.hasOwnProperty("scaling")?J.firstChild.scaling:1}),ie.style.left=J.firstChild.style.left,ie.style.top=J.firstChild.style.top,ie.style.opacity=_g.isNight?.6:.7,_g.animationVersion){case"B":break;case"C":break;default:TweenLite.set($(J.hubA).parent(),{rotation:_g.assets.model_animation.hub.a.rotation}),TweenLite.set($(J.hubB).parent(),{rotation:_g.assets.model_animation.hub.b.rotation});var ne=.25;i(function(){TweenLite.to(J.hubA,ne,{rotation:-360,startAt:{rotation:0},ease:Linear.easeNone}),TweenLite.to(J.hubB,ne,{rotation:-360,startAt:{rotation:0},ease:Linear.easeNone})},ne);var ge=$(J).children()[0],re=makeImageMaskedDiv({img:_g.assets.model_animation.window_glare,mask:_g.assets.model_animation.window_front}),le=makeImageMaskedDiv({img:_g.assets.model_animation.window_glare,mask:_g.assets.model_animation.window_side});ge.appendChild(re),ge.appendChild(le),re.style.opacity=.15,le.style.opacity=.25,i(a,5);break}t(),TweenLite.delayedCall(5,t)}
//TweenLite.from(model_text, 0.75, {opacity:0, ease:Quad.easeInOut, delay:0.0});
//TweenLite.from(headline, 1.0, {opacity:0, ease:Quad.easeInOut, delay:1.0});
//adjust for too long headline
/*switch(_g.doc.size) {
		case "160x600":
		case "300x600":
			var headlineProx = parseInt(_g.cta.style.top)-(parseInt(headline.style.top)+parseInt(headline.clientHeight));
			if(headlineProx<_g.assets.model_text.fontSize && !_g.assets.model_text.hasOwnProperty("bypassHeadlineProx")) {
				var shift = _g.assets.model_text.fontSize-headlineProx;
				model_text.style.top = parseInt(model_text.style.top)-shift+"px";
				headline.style.top = parseInt(headline.style.top)-shift+"px";
			}
		break;
		default:
		break;
	}*/if(_g.assets.hasOwnProperty("guide")){var _e=makeImageDiv(_g.assets.guide);TweenLite.set(_e,{transformOrigin:"0 0",scale:.5,opacity:.5}),_g.layers.div1.appendChild(_e)}fade(!0,{speed:.75,ease:Quad.easeOut,width:_g.doc.scaled_width,height:_g.doc.scaled_height}),makeDisclaimerDiv(_g.assets.rollover_disclaimer),document.body.style.opacity=1}function draw(){canvas.draw.redraw()}var _g={disableFullAnimation:!1,version:{},assets:{},layers:{}},canvas,preloader={},isDev=!1,feed;