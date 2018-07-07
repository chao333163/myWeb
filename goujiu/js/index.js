var oBanner = $("banner");
var aLi = oBanner.getElementsByTagName("ul")[0].getElementsByTagName("li");
var aA = $("direction").getElementsByTagName("a");;
var aBtn = $("numBtn").getElementsByTagName("a");
var iNow = 0;
var Next = 0;
var timer = null;
for(var i = 0; i < aBtn.length; i++) {
	aBtn[i].index = i;
	aBtn[i].onmouseover = function() {
		for(var j = 0; j < aBtn.length; j++) {
			aBtn[j].className = '';
		}
		this.className = "active";
		move(aLi[iNow], {
			"opacity": 0
		});
		move(aLi[this.index], {
			"opacity": 100
		});
		Next = this.index
		iNow = Next;
	}
}
aA[0].onclick = function() {
	if(Next == 0) {
		Next = aLi.length - 1;
	} else {
		Next--;
	}
	toImg()
}

aA[1].onclick = function() {
	if(Next == aLi.length - 1) {
		Next = 0;
	} else {
		Next++;
	}
	toImg()
}
oBanner.onmouseover = function() {
	clearInterval(timer)
}
oBanner.onmouseout = function() {
	autoPlay()
}
autoPlay()

function autoPlay() {
	timer = setInterval(function() {
		if(Next == aLi.length - 1) {
			Next = 0;
		} else {
			Next++;
		}
		toImg()
	}, 3000)
}

function toImg() {
	move(aLi[iNow], {
		"opacity": 0
	});
	move(aLi[Next], {
		"opacity": 100
	});
	iNow = Next;
	for(var i = 0; i < aBtn.length; i++) {
		aBtn[i].className = '';
	}
	aBtn[Next].className = "active";
}

 ajax("get","json/index.json",{},function(data){
 	var oList1 = document.querySelector(".big-addbox>ul");
 	var oList2 = document.querySelector(".ptj-rt>ul");
 	var str1 = "";
 	var str2 = "";
 	var data1 = data.data1;
 	var data2 = data.data2;
 	for(var i=0;i<data1.length;i++){
 		str1+=`<li>
					<a href="##">
						<img src="${data1[i].recommend_img}">
						<div class="item-msg">
							<span class="fl">${data1[i].title}</span>
							<span class="fr"><em>${data1[i].price}</em>元</span>
						</div>
					</a>
				</li>`
 	};
   	for(var j=0;j<data2.length;j++){
   		str2+=`<li>
					<a href="##">
						<div class="item-style">${data2[j].describe}</div>
						<img src="${data2[j].recommend_img}">
						<div class="item-name">${data2[j].title}</div>
						<div class="item-pri">${data2[j].price} 元</div>
					</a>
				</li>`
   	};
 	
 	oList1.innerHTML = str1;
   	oList2.innerHTML = str2;
 });






