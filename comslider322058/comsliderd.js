function comSlider322058() { 
var self = this; 
var g_HostRoot = "";
var g_TransitionTimeoutRef = null;
var g_CycleTimeout = 5;
var g_currFrame = 0;
var g_fontLoadJsRetries = 0;
var g_currDate = new Date(); var g_currTime = g_currDate.getTime();var g_microID = g_currTime + '-' + Math.floor((Math.random()*1000)+1); 
var g_InTransition = 0;var g_Navigation = 0;this.getCurrMicroID = function() { return g_microID; } 
this.comSLoadImgInFrame = function(frameid, src) 
{
     jqCS322058("#comSImg322058_"+frameid+" img").attr("src", src).load(function(){
         if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0)
         {
             //broken image
         }
     });
}
this.setNavStyle = function(id, background, color, border, type)
{
 if (background == "")
 {
     jqCS322058("#comSNavigation322058_"+id).css("background", "none");
 }
 else
 {
     jqCS322058("#comSNavigation322058_"+id).css("background", "#"+background);
 }
 jqCS322058("#comSNavigation322058_"+id).css("background", "#"+background);
 jqCS322058("#comSNavigation322058_"+id).css("color", "#"+color);
 jqCS322058("#comSNavigation322058_"+id).css("border", border+"px solid #"+color);
 var margin = (-1)*border;
 jqCS322058("#comSNavigation322058_"+id).css("margin-top", margin+"px");
 jqCS322058("#comSNavigation322058_"+id).css("margin-left", margin+"px");
 if (type == 0)
 {
   jqCS322058("#comImgBullet322058_"+id).show();
   jqCS322058("#comImgBulletcurr322058_"+id).hide();
 }
 else
 {
   jqCS322058("#comImgBulletcurr322058_"+id).show();
   jqCS322058("#comImgBullet322058_"+id).hide();
 }
}
this.targetClearTimeouts = function()
{
 if (g_TransitionTimeoutRef != null)     { window.clearTimeout(g_TransitionTimeoutRef); g_TransitionTimeoutRef = null;}
}
this.getNextFrame = function()
{
 var ret = g_currFrame;
 ret++;
 if (ret == 0) {ret = 0;}
 return ret;
}
this.getPrevFrame = function()
{
 var ret = g_currFrame;
 ret--;
 if (ret < 0) {ret = (0-1);}
 return ret;
}
this.stopAll = function()
{
}
this.switchFrame = function()
{
     g_Navigation = 1;
     var currFrame=g_currFrame;
     g_currFrame = self.getNextFrame();
     self.switchFromToFrame(currFrame, g_currFrame);
}
 
this.switchFramePrev = function()
{
     g_Navigation = 0;
     var currFrame=g_currFrame;
     g_currFrame = self.getPrevFrame();
     self.switchFromToFrame(currFrame, g_currFrame);
}
 
this.switchToFrame = function(toFrame)
{
     if ((g_InTransition == 1) || (g_currFrame == toFrame))
     {
         if (g_currFrame == toFrame) { return false; }
         self.stopAll();
     }
     var currFrame=g_currFrame;
     g_currFrame=toFrame;
     if (currFrame < g_currFrame)
         g_Navigation = 0;
     else
         g_Navigation = 1;
     self.switchFromToFrame(currFrame, g_currFrame);
}
 
this.switchFromToFrame =  function(currFrame, toFrame)
{
     if (g_InTransition == 1)
     {
         self.stopAll();
     }
g_InTransition = 1;
self.startTransitionTimer();
     jqCS322058("#comSFrameSek322058_"+currFrame+"").css("z-index", 1);
     jqCS322058("#comSFrameSek322058_"+toFrame+"").css("z-index", 2);
     jqCS322058("#comSFrameSek322058_"+toFrame+"").hide().fadeIn(1350, function() { 
if (g_microID !=objcomSlider322058.getCurrMicroID()){return false;};jqCS322058("#comSFrame322058_"+currFrame).hide(); g_InTransition = 0;
 } ); 
  self.setNavStyle(currFrame, '','CCCCCC',1, 0);  self.setNavStyle(toFrame, '','FFFFFF',1, 1);     jqCS322058("#comSFrame322058_"+toFrame).show(1, function(){  });
     
     
     
     
}
this.startTransitionTimer = function()
{
  self.targetClearTimeouts(); g_TransitionTimeoutRef = window.setTimeout(function() {objcomSlider322058.onTransitionTimeout(g_microID)}, g_CycleTimeout*1000);
}
this.onTransitionTimeout = function(microID)
{
   if (g_microID != microID) { return false; }
     self.switchFrame();
}
this.initFrame = function()
{
g_currFrame = 0;
self.startTransitionTimer();
     jqCS322058("#comSFrameSek322058_"+g_currFrame+"").hide().fadeIn(1350);
  jqCS322058("#comSFrame322058_"+g_currFrame).show(1, function(){if (g_microID !=objcomSlider322058.getCurrMicroID()){return false;};self.setNavStyle(g_currFrame, '','FFFFFF',1, 1);     });
  return true;
}

					this.scriptLoaded = function()
					{
				   jqCS322058 = jQuery322058.noConflict(false);jqCS322058("#comslider_in_point_322058").html('<div id="comSWrapper322058_" name="comSWrapper322058_" style="border:0px; width:0px; height:60px; position: relative;"><div id="comSWrapper322058_" name="comSWrapper322058_" style="overflow:hidden; background: none; border:0px; width:0px; height:60px; "><div id="comSFrameWrapper322058_" name="comSFrameWrapper322058_" style="position: absolute; top: 0px; left: 0px;"></div></div>');
                    jqCS322058("#comslider_in_point_322058 a").bind('click',  function() { if ((this.name.length > 0) && (isNaN(this.name) == false)) {  self.switchToFrame(parseInt(this.name)); return false;} });
                self.initFrame();

}
var g_CSIncludes = new Array();
var g_CSLoading = false;
var g_CSCurrIdx = 0; 
 this.include = function(src, last) 
                {
                    if (src != '')
                    {				
                            var tmpInclude = Array();
                            tmpInclude[0] = src;
                            tmpInclude[1] = last;					
                            //
                            g_CSIncludes[g_CSIncludes.length] = tmpInclude;
                    }            
                    if ((g_CSLoading == false) && (g_CSCurrIdx < g_CSIncludes.length))
                    {


                            var oScript = null;
                            if (g_CSIncludes[g_CSCurrIdx][0].split('.').pop() == 'css')
                            {
                                oScript = document.createElement('link');
                                oScript.href = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/css';
                                oScript.rel = 'stylesheet';

                                oScript.onloadDone = true; 
                                g_CSLoading = false;
                                g_CSCurrIdx++;								
                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                        self.scriptLoaded(); 
                                else
                                        self.include('', false);
                            }
                            else
                            {
                                oScript = document.createElement('script');
                                oScript.src = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/javascript';

                                //oScript.onload = scriptLoaded;
                                oScript.onload = function() 
                                { 
                                        if ( ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true; 
                                                g_CSLoading = false;
                                                g_CSCurrIdx++;								
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                };
                                oScript.onreadystatechange = function() 
                                { 
                                        if ( ( "loaded" === oScript.readyState || "complete" === oScript.readyState ) && ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true;
                                                g_CSLoading = false;	
                                                g_CSCurrIdx++;
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                }
                                
                            }
                            //
                            document.getElementsByTagName("head").item(0).appendChild(oScript);
                            //
                            g_CSLoading = true;
                    }

                }
                

}
objcomSlider322058 = new comSlider322058();
objcomSlider322058.include('comslider322058/js/helpers.js', false);
objcomSlider322058.include('comslider322058/js/jquery-1.10.1.js', false);
objcomSlider322058.include('comslider322058/js/jquery-ui-1.10.3.effects.js', true);
