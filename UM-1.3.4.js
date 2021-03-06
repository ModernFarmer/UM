function ___constructor_MovingScroll(obj){                          //滚动条插件
    this.OB={
        box:obj.box,
        contentBox:obj.contentBox,
        scrollBox:obj.scrollBox,
        speed:obj.speed,
        position:obj.position || null,
        watch_keyup:obj.watch_keyup || false,
        watch_mouseup:obj.watch_mouseup || false,
        watch_el:obj.watch_el || false,
        height_box:function(){
            return this.box.el.offsetHeight-parseInt(this.box.getStyle('borderTopWidth'))-parseInt(this.box.getStyle('borderBottomWidth'));
        },
        height_content:function(){
            return this.contentBox.el.offsetHeight+parseInt(this.box.getStyle('paddingTop'))+parseInt(this.box.getStyle('paddingBottom'));
        },
        height_scroll:function(){
            var h_box=this.height_box();
            var h_content=this.height_content();
            return h_content<=h_box?0:h_box*h_box/h_content;
        },
        id:parseInt(Math.random()*100000000)
    };

    this.todo();
};

___constructor_MovingScroll.prototype.todo=function(){
    this.OB.contentBox.transition('.5s ease-out');
    setTimeout(function(){
        this.OB.scrollBox.transition('.5s ease-out').css({'height':this.OB.height_scroll()+'px', 'cursor':'pointer'});       //初始化滚动条高度，必要时需要加定时器
    }.bind(this),500);
    this.OB.box.css({overflow:'hidden'}).mousewheel(function(){
        var _top=parseFloat(this.OB.contentBox.getStyle('top'));
        if(_top==0)return;
        var h_content=this.OB.height_content();
        var h_box=this.OB.height_box();
        if(h_content<h_box)return;
        var h_scroll=this.OB.height_scroll();
        var top_contentBox=_top + this.OB.speed;
        if(top_contentBox>0)top_contentBox=0;
        this.OB.contentBox.transition('.1s ease-out').css({top:top_contentBox+'px'});
        var top_scrollBox=-(h_scroll*top_contentBox/h_box);
        this.OB.scrollBox.transition('.5s ease-out').css({'height':h_scroll+'px', 'top':top_scrollBox+'px'});
    }.bind(this), function(){
        var _top=parseFloat(this.OB.contentBox.getStyle('top'));
        var h_content=this.OB.height_content();
        var h_box=this.OB.height_box();
        if(_top==-(h_content-h_box))return;
        if(h_content<h_box)return;
        var h_scroll=this.OB.height_scroll();
        var top_contentBox=_top - this.OB.speed;
        if(top_contentBox<-(h_content-h_box))top_contentBox=-(h_content-h_box);
        this.OB.contentBox.transition('.1s ease-out').css({top:top_contentBox+'px'});
        var top_scrollBox=-(h_scroll*top_contentBox/h_box);
        this.OB.scrollBox.transition('.5s ease-out').css({'height':h_scroll+'px', 'top':top_scrollBox+'px'});
    }.bind(this));

    this.OB.box.BD('mouseenter', function(){
        this.OB.scrollBox.transition('1s ease-out').css({opacity:1});
    }.bind(this)).BD('mouseleave', function(){
        this.OB.scrollBox.transition('1s ease-out').css({opacity:.4});
    }.bind(this)).BD('mousedown', function(){                                    //默认当点击容器盒子时，执行滚动条盒子的高度自动变化
        if(window['UM_MS_default_'+this.OB.id])clearTimeout(window['UM_MS_default_'+this.OB.id]);
        window['UM_MS_default_'+this.OB.id]=setTimeout(function(){
            var top_contentBox=parseFloat(this.OB.contentBox.getStyle('top'));
            var h_scroll=this.OB.height_scroll();
            var top_scrollBox=-(h_scroll*top_contentBox/this.OB.height_box());
            this.OB.scrollBox.transition('.5s ease-out').css({'height':h_scroll+'px', 'top':top_scrollBox+'px'});
            delete window['UM_MS_default_'+this.OB.id];
        }.bind(this), 500);
    }.bind(this));

    if(this.OB.watch_keyup===true){                  //当页面上按键抬起时，是否执行滚动条盒子的高度自动变化，根据需要添加该选项
        _(document).BD('keyup', function(){
            if(!this.OB.contentBox.el)return;
            if(window['UM_MS_keyup_'+this.OB.id])clearTimeout(window['UM_MS_keyup_'+this.OB.id]);
            window['UM_MS_keyup_'+this.OB.id]=setTimeout(function(){
                var top_contentBox=parseFloat(this.OB.contentBox.getStyle('top'));
                var h_scroll=this.OB.height_scroll();
                var top_scrollBox=-(h_scroll*top_contentBox/this.OB.height_box());
                this.OB.scrollBox.transition('.5s ease-out').css({'height':h_scroll+'px', 'top':top_scrollBox+'px'});
                delete window['UM_MS_keyup_'+this.OB.id];
            }.bind(this), 500);
        }.bind(this));
    }

    if(this.OB.watch_mouseup===true){                  //当页面上鼠标抬起时，是否执行滚动条盒子的高度自动变化，根据需要添加该选项
        _(document).BD('mouseup', function(){
            if(!this.OB.contentBox.el)return;
            if(window['UM_MS_mouseup_'+this.OB.id])clearTimeout(window['UM_MS_mouseup_'+this.OB.id]);
            window['UM_MS_mouseup_'+this.OB.id]=setTimeout(function() {
                var top_contentBox=parseFloat(this.OB.contentBox.getStyle('top'));
                var h_scroll=this.OB.height_scroll();
                var top_scrollBox=-(h_scroll*top_contentBox/this.OB.height_box());
                this.OB.scrollBox.transition('.5s ease-out').css({'height':h_scroll+'px', 'top':top_scrollBox+'px'});
                delete window['UM_MS_mouseup_'+this.OB.id];
            }.bind(this), 500);
        }.bind(this));
    }

    if(this.OB.watch_el){    // 当点击一个元素时, 执行滚动条高度自动变化, 根据需要添加该选项
        this.OB.watch_el.el.BD('click', function(){
            if(window['UM_MS_watchEl_'+this.OB.id])clearTimeout(window['UM_MS_watchEl_'+this.OB.id]);
            window['UM_MS_watchEl_'+this.OB.id]=setTimeout(function() {
                var top_contentBox=parseFloat(this.OB.contentBox.getStyle('top'));
                var h_scroll=this.OB.height_scroll();
                var top_scrollBox=-(h_scroll*top_contentBox/this.OB.height_box());
                this.OB.scrollBox.transition('.5s ease-out').css({'height':h_scroll+'px', 'top':top_scrollBox+'px'});
                delete window['UM_MS_watchEl_'+this.OB.id];
            }.bind(this), this.OB.watch_el.timeout);
        }.bind(this));
    }

    this.OB.scrollBox.BD('click', function(){
        _stopPropagation(event);
    }.bind(this)).BD('mousedown', function(event){
        _stopPropagation(event);
        _preventDefault(event);
        var cursor_original=_scrollDistance().y+event.clientY;
        var L=cursor_original-parseFloat(this.OB.scrollBox.getStyle('top'));
        var ___runner=function(event){
            var cursor=_scrollDistance().y+event.clientY;
            var s=cursor-L;
            var h_box=this.OB.height_box();
            var h_scroll=this.OB.height_scroll();
            var top_scroll_now=parseFloat(this.OB.scrollBox.getStyle('top'));
            if((top_scroll_now==0 && s<0) || (top_scroll_now==Math.round((h_box-h_scroll)*1000)/1000 && s>h_box-h_scroll))return;
            if(s<0)s=0;
            if(s>h_box-h_scroll)s=h_box-h_scroll;
            var S=-(h_box*s/h_scroll);
            this.OB.scrollBox.transition('').css({top:s+'px'});
            this.OB.contentBox.transition('').css({top:S+'px'});
        }.bind(this);
        var ___stopRun=function(){
            _(document).unBD('mousemove', ___runner).unBD('mouseup', ___stopRun);
        }.bind(this);
        _(document).BD('mousemove', ___runner);
        _(document).BD('mouseup', ___stopRun);
    }.bind(this));

    if(_isArray(this.OB.position) && this.OB.position.length>0){  // 锚记导航, 根据需要添加该选项
        for(var i=0; i<this.OB.position.length; i++){
            (function(a){
                this.OB.position[a].clickObj.BD('click', function(){
                    _stopPropagation(event);
                    var h_content=this.OB.height_content();
                    var h_box=this.OB.height_box();
                    if(h_content<h_box)return;
                    var mark=this.OB.position[a].targetObj.el.offsetTop>(h_content-h_box)?-(h_content-h_box):-(this.OB.position[a].targetObj.el.offsetTop);
                    console.log(mark)
                    console.log(-(this.OB.height_scroll()*mark/h_box)+'px')
                    this.OB.contentBox.transition('.5s ease-out').css({top:mark+'px'});
                    this.OB.scrollBox.transition('.5s ease-out').css({top:-(this.OB.height_scroll()*mark/h_box)+'px'});
                }.bind(this)).BD('mouseup', function(){
                    _stopPropagation(event);
                }).BD('mousedown', function(){
                    _stopPropagation(event);
                });
            }.bind(this))(i);
        };
    }
};

___constructor_MovingScroll.prototype.adaptive=function(){

};

function _MovingScroll(obj){
    return new ___constructor_MovingScroll(obj);
};


function ___constructor_PullDown(obj){             //下拉内容过渡插件-构造函数
    this.OB={
        caption:obj.caption,
        down:obj.down,
        speed:obj.speed || 0.5,
        select:obj.select || false,
        D_click:obj.D_click || false,
        choosable:obj.choosable || false,
        within:obj.within || null,
        maxHeight:obj.maxHeight || null,
        scrollClassName:obj.scrollClassName || 'UM_PullDown_scrollClassName'
    };

    this.downHidden=true; // 用于判断执行一些特定事件时是否要隐藏下拉框
    this.selectHidden=true; // 用于判断点击下拉框背景时是否要折叠下拉框

    this.id='UM_PullDown_'+Math.ceil(Math.random()*100000000);
    this.now=obj.now || false;

    this._m_todo();
};

___constructor_PullDown.prototype._m_todo=function(){
    this.top_p=(function(){
        return this.OB.down.getStyle('paddingTop');
    }.bind(this))();
    this.bottom_p=(function(){
        return this.OB.down.getStyle('paddingBottom');
    }.bind(this))();
    this.top_m=(function(){
        return this.OB.down.getStyle('marginTop');
    }.bind(this))();
    this.bottom_m=(function(){
        return this.OB.down.getStyle('marginBottom');
    }.bind(this))();

    this.OB.down.css({overflow:'hidden', maxHeight:this.OB.maxHeight?this.OB.maxHeight:'none'}).BD('click', function(){
        _stopPropagation(event);
        this.downHidden=true;
        if(this.selectHidden)return;
        if(this.OB.down.el.style.height!=='auto'){
            if(this.OB.within)this.OB.within.css({height:'auto'});
            this.OB.down.transition(this.OB.speed+'s linear').transformOrigin('CENTER TOP').css({opacity:0, height:0, paddingTop:0, paddingBottom:0, marginTop:0, marginBottom:0});
            this.now=false;
        }else{
            this.OB.down.css({height:this.OB.down.getStyle('height')});
            setTimeout(function(){
                if(this.OB.within)this.OB.within.css({height:'auto'});
                this.OB.down.transition(this.OB.speed+'s linear').transformOrigin('CENTER TOP').css({opacity:0, height:0, paddingTop:0, paddingBottom:0, marginTop:0, marginBottom:0});
                this.now=false;
            }.bind(this));
        };
        this.selectHidden=true;
    }.bind(this)).BD('mousedown', function(){
        _stopPropagation(event);
        this.downHidden=false;
    }.bind(this));

    if(this.OB.maxHeight){
        var _html=this.OB.down.el.innerHTML;
        this.OB.down.el.innerHTML='';
        var dom_content=document.createElement('div'), dom_scroll=document.createElement('div');
        dom_content.id=this.id;
        dom_content.innerHTML=_html;
        dom_content.style.width='calc(100% - 2px)';
        dom_content.style.position='relative';
        dom_content.style.top='0';
        dom_content.style.left='0';
        dom_content.style.zIndex='5';
        dom_content.style.border='1px solid transparent'; // 防止滚动条插件的内容盒子里面的选项元素含有margin-top或者margin-bottom选项时内容盒子高度不包括第一个选项元素的margin-top和最后一个选项元素的margin-bottom

        dom_scroll.style.height='0';
        dom_scroll.style.position='absolute';
        dom_scroll.style.top='0';
        dom_scroll.style.right='2px';
        dom_scroll.style.zIndex='10';
        dom_scroll.className=this.OB.scrollClassName;
        _(dom_scroll).BD('mousedown', function(){
            _stopPropagation(event);
            this.downHidden=false;
        }.bind(this)).BD('mouseup', function(){
            this.downHidden=true;
        }.bind(this));

        this.OB.down.el.appendChild(dom_content);
        this.OB.down.el.appendChild(dom_scroll);
        if(this.OB.select===false){
            for(var i=0; i<_('#'+this.id, 0).el.children.length; i++){
                if(_('#'+this.id, 0).el.children[i].getAttribute('isUmCaption')===null)_(_('#'+this.id, 0).el.children[i]).BD('click', function(){
                    this.selectHidden=false;
                }.bind(this));
            };
        }
        _MovingScroll({  // 滚动条插件
            box:this.OB.down,　　//　容器盒子选择器
            contentBox:_(dom_content),　　//　滚动内容盒子选择器
            scrollBox:_(dom_scroll),　　//　滚动条盒子选择器
            watch_el:{　　　//　当点击某个h5元素时, 执行滚动条高度自动变化,可选项,默认false (主要用于配合下拉插件, 点击下拉的caption元素时, 延时执行滚动条变化, 由于caption元素已经阻止了冒泡, 故而增加该选项)　　json
                el:this.OB.caption,　　　//　被点击的元素　　selector
                timeout:500　　　//　执行延时　　number
            },
            speed:100
        });
    }

    if(this.now===true){  // 设置初始状态为显示时的下拉框体样式
        this.OB.down.css({opacity:1, height:this._m_height()});
    }else if(this.now===false){  // 设置初始状态为隐藏时的下拉框体样式
        this.OB.down.css({opacity:0, height:0, paddingTop:0, paddingBottom:0, marginTop:0, marginBottom:0});
    }
    if(this.OB.choosable===false)this.OB.caption.choosable(false);  // 标题字体内容是否可被选中
    this.OB.caption.css({cursor:'pointer'});  // 设置标题的cursor样式

    this.OB.caption.BD('click', function(){
        _stopPropagation(event);
        if(this.OB.down.el.style.height!=='auto'){
            if(this.OB.within)this.OB.within.css({height:'auto'});
            if(this.now===false){
                this.OB.down.transition(this.OB.speed+'s linear').transformOrigin('CENTER TOP').css({opacity:1, height:this._m_height(), paddingTop:this.top_p, paddingBottom:this.bottom_p, marginTop:this.top_m, marginBottom:this.bottom_m});
            }else{
                this.OB.down.transition(this.OB.speed+'s linear').transformOrigin('CENTER TOP').css({opacity:0, height:0, paddingTop:0, paddingBottom:0, marginTop:0, marginBottom:0});
            };
            this.now=!this.now;
        }else{
            this.OB.down.css({height:this.OB.down.getStyle('height')});
            setTimeout(function(){
                if(this.OB.within)this.OB.within.css({height:'auto'});
                if(this.now===false){
                    this.OB.down.transition(this.OB.speed+'s linear').transformOrigin('CENTER TOP').css({opacity:1, height:this._m_height(), paddingTop:this.top_p, paddingBottom:this.bottom_p, marginTop:this.top_m, marginBottom:this.bottom_m});
                }else{
                    this.OB.down.transition(this.OB.speed+'s linear').transformOrigin('CENTER TOP').css({opacity:0, height:0, paddingTop:0, paddingBottom:0, marginTop:0, marginBottom:0});
                };
                this.now=!this.now;
            }.bind(this));
        };
    }.bind(this)).BD('mousedown', function(){
        _stopPropagation(event);
    }.bind(this));

    if(!this.OB.within && this.OB.D_click===false)_(document).BD('click', function(){
        if(!this.downHidden){
            this.downHidden=true;
            return;
        }
        if(this.OB.down.el.style.height==='auto')this.OB.down.css({height:this.OB.down.getStyle('height')});  // 为了使动画正常过渡, 需要设置height(当height的值为auto时, 改变height值不会显示动效)
        if(!this.OB.within){
            setTimeout(function(){
                this.OB.down.transition(this.OB.speed+'s linear').transformOrigin('CENTER TOP').css({opacity:0, height:0, paddingTop:0, paddingBottom:0, marginTop:0, marginBottom:0});
                this.now=false;
            }.bind(this));
        }
    }.bind(this));  // 当点击背景时, 折叠下拉框

    if(this.OB.select===false && !this.OB.maxHeight){  // 当点击选项时, 折叠下拉框
        for(var i=0; i<this.OB.down.el.children.length; i++){
            if(this.OB.down.el.children[i].getAttribute('isUmCaption')===null)_(this.OB.down.el.children[i]).BD('click', function(){
                this.selectHidden=false;
            }.bind(this));
        };
    }
};

___constructor_PullDown.prototype._m_getStyleInf=function(dom, typeName){
    if(window.getComputedStyle){
        return parseFloat(getComputedStyle(dom,false)[typeName]);
    }else{
        return parseFloat(dom.currentStyle[typeName]);
    };
};

___constructor_PullDown.prototype._m_height=function(){
    var result=0;
    if(this.OB.maxHeight){
        for(var i=0; i<_('#'+this.id, 0).el.children.length; i++){
            result=result+_('#'+this.id, 0).el.children[i].offsetHeight+this._m_getStyleInf(_('#'+this.id, 0).el.children[i], 'marginTop')+this._m_getStyleInf(_('#'+this.id, 0).el.children[i], 'marginBottom');
        };
    }else{
        for(var i=0; i<this.OB.down.el.children.length; i++){
            result=result+this.OB.down.el.children[i].offsetHeight+this._m_getStyleInf(this.OB.down.el.children[i], 'marginTop')+this._m_getStyleInf(this.OB.down.el.children[i], 'marginBottom');
        };
    };
    return result+'px';
};

___constructor_PullDown.prototype.unfold=function(){
    if(this.OB.down.el.style.height!=='auto'){
        if(this.OB.within && this.OB.within.getStyle('opacity')!=0)this.OB.within.css({height:'auto'});
        this.OB.down.transition(this.OB.speed+'s linear').transformOrigin('CENTER TOP').css({opacity:1, height:this._m_height(), paddingTop:this.top_p, paddingBottom:this.bottom_p, marginTop:this.top_m, marginBottom:this.bottom_m});
        this.now=true;
    }else{
        this.OB.down.css({height:this.OB.down.getStyle('height')});
        setTimeout(function(){
            if(this.OB.within && this.OB.within.getStyle('opacity')!=0)this.OB.within.css({height:'auto'});
            this.OB.down.transition(this.OB.speed+'s linear').transformOrigin('CENTER TOP').css({opacity:1, height:this._m_height(), paddingTop:this.top_p, paddingBottom:this.bottom_p, marginTop:this.top_m, marginBottom:this.bottom_m});
            this.now=true;
        }.bind(this));
    };
};

___constructor_PullDown.prototype.fold=function(){
    if(this.OB.down.el.style.height!=='auto'){
        if(this.OB.within && this.OB.within.getStyle('opacity')!=0)this.OB.within.css({height:'auto'});
        this.OB.down.transition(this.OB.speed+'s linear').transformOrigin('CENTER TOP').css({opacity:0, height:0, paddingTop:0, paddingBottom:0, marginTop:0, marginBottom:0});
        this.now=false;
    }else{
        this.OB.down.css({height:this.OB.down.getStyle('height')});
        setTimeout(function(){
            if(this.OB.within && this.OB.within.getStyle('opacity')!=0)this.OB.within.css({height:'auto'});
            this.OB.down.transition(this.OB.speed+'s linear').transformOrigin('CENTER TOP').css({opacity:0, height:0, paddingTop:0, paddingBottom:0, marginTop:0, marginBottom:0});
            this.now=false;
        }.bind(this));
    };
};

function _PullDown(obj){             //下拉内容过渡插件
    return new ___constructor_PullDown(obj);
};
