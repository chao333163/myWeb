function banner(){
	this.oBanner = $("#banner");
	this.oUl = $("#banner>ul");
	this.aLi = $("#banner>ul>li");
	this.aDir = $("#direction>a");
	this.aBtn = $("#numBtn>a");
	this.iNow = 0;
	this.Next = 0;
	this.timer = null;
	this.init();
}
$.extend(banner.prototype,{
	init:function(){
		this.autoplay()
		this.mouseover();
		this.mouseout();
		this.dirLeft();
		this.dirRight();
		this.aBtnClick();
	},
	aBtnClick:function(){
		this.aBtn.each($.proxy(this.handleaBtnEach,this))
	},
	handleaBtnEach:function(i){
		this.aBtn.eq(i).on("click",i,$.proxy(this.handleAbtn,this))
	},
	handleAbtn:function(event){
		var index = event.data;
		this.aBtn.eq(index).addClass('active').siblings().removeClass("active");
		this.Next = index;
		this.toImg();	
	},
	dirRight:function(){
		this.aDir.eq(1).on("click",$.proxy(this.handleDirRight,this))
	},
	handleDirRight:function(){
		if(this.Next == this.aLi.length-1 ){
			this.Next = 0;
		}else{
			this.Next++;
		}
		this.toImg();
	},
	dirLeft:function(){
		this.aDir.eq(0).on("click",$.proxy(this.handleDirLeft,this))
	},
	handleDirLeft:function(){
		if(this.Next == 0 ){
			this.Next = this.aLi.length-1;
		}else{
			this.Next--;
		}
		this.toImg();;
	},
	mouseover:function(){
		this.oBanner.on("mouseover",$.proxy(this.handleMouseover,this))
	},
	handleMouseover:function(){
		clearInterval(this.timer);
	},
	mouseout:function(){
		this.oBanner.on("mouseout",$.proxy(this.handleMouseout,this))
	},
	handleMouseout:function(){
		this.autoplay()
	},
	autoplay:function(){
		this.timer = setInterval($.proxy(this.handleSetInterval,this),3000)
	},
	handleSetInterval:function(){
		if(this.Next == this.aLi.length-1 ){
			this.Next = 0;
		}else{
			this.Next++;
		}
		this.toImg();
	},
	toImg:function(){
		this.aLi.eq(this.iNow).stop(true).fadeTo(1000,0);
		this.aLi.eq(this.Next).stop(true).fadeTo(1000,1);
		this.iNow = this.Next;
		this.aBtn.eq(this.Next>=this.aLi.length?0:this.iNow).addClass("active").siblings().removeClass("active");
	}
})
new banner();

$(function(){
	var str1 = '';
	var str2 = '';
	$.getJSON("json/index.json",function(data){
		var data1 = data.data1;
		var data2 = data.data2;
		$.each(data1,function(i){
			str1+=`<li>
					<a href="##">
						<img src="${data1[i].recommend_img}" class="pics" data-id="${data1[i].id}">
						<div class="item-msg">
							<span class="fl">${data1[i].title}</span>
							<span class="fr"><em>${data1[i].price}</em>元</span>
						</div>
					</a>
				</li>`
		});
		$.each(data2,function(j){
			str2+=`<li>
					<a href="##">
						<div class="item-style">${data2[j].describe}</div>
						<img src="${data2[j].recommend_img}" class="pics" data-id="${data2[j].id}">
						<div class="item-name">${data2[j].title}</div>
						<div class="item-pri">${data2[j].price} 元</div>
					</a>
				</li>`
		});
		$(".big-addbox>ul").html(str1);
		$(".ptj-rt>ul").html(str2);
	})
});

$(function() {
	$(".center").on("click",".pics",function(){
		var num = $(this).attr("data-id");	
		location.href = "details.html?"+num;
	})
});









