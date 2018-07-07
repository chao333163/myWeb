ajax("get","json/index.json",{},function(data){
	var oBuyBox = document.querySelector(".buyBox");
	var str = "";
	console.log(data.length);
    for(var i=0;i<data.length;i++){
    	for(var j=0;j<data[i].length;j++){
    		
//  		str =`<div class="buyBox">
//					<div class="category">
//						<a href="#">首页</a>>
//						<a href="#">白酒</a>>
//						<a href="#">习酒</a>>
//						<a href="">53度 习酒 窖藏1998 500ml</a>
//						<a href="#" class="zxkfbtn"></a>
//					</div>
//					<div class="itemshow clearfix">
//						<div class="glass">
//							<ul>
//								<li>
//									<img src="images/tj_1_small_1.jpg" class="small"  data-url="images/tj_1_big_1.jpg">
//								</li>
//								<li>
//									<img src="images/tj_1_small_2.jpg" class="small"  data-url="images/tj_1_big_2.jpg">
//								</li>
//								<li>
//									<img src="images/tj_1_small_3.jpg" class="small"  data-url="images/tj_1_big_3.jpg">
//								</li>
//								<li>
//									<img src="images/tj_1_small_4.jpg" class="small"  data-url="images/tj_1_big_4.jpg">
//								</li>
//								<li>
//									<img src="images/tj_1_small_5.jpg" class="small"  data-url="images/tj_1_big_5.jpg">
//								</li>
//							</ul>
//							<div id="picshowbox">
//								<div id="filter"></div>
//								<img src="images/tj_1_big_1.jpg" class="middle">
//							</div>
//						</div>
//						<div id="maxBox">
//							<img src="images/tj_1_big_1.jpg" class="maxImg">
//						</div>
//						<div class="itemmsg">
//							<h3 class="itemtitle">53度 习酒 窖藏1998 500ml</h3>
//							<p class="redad">下单送汉酱375ml品鉴装 随货发出</p>
//							<div class="priceBox">
//								<div class="newPriceBox">
//									<p class="newPrice">
//										活动价
//										<strong>
//											<span class="rmbIcon">¥</span>
//											<span class="price">498</span>
//										</strong>
//									</p>
//								</div>
//								<div class="sale">
//									<span>促销信息</span>
//									<span class="redBox">购酒特惠</span>
//								</div>
//							</div>
//							<div class="upmsg">
//								<div class="transTo"></div>
//								<div class="pay">
//									<p>关注度<em>&nbsp;186509</em></p>
//									<span class="line"></span>
//									<p>累计评价<em>&nbsp;132</em></p>
//									<span class="line"></span>
//									<p>送积分<em>&nbsp;498</em></p>
//								</div>
//								<div class="numbox clearfix">
//									<div class="lttext">数  量:</div>
//									<div>
//										<input type="text" value="1" class="nums"/>
//										<div class="addBtn">
//											<span class="addN">+</span>
//											<span class="diffN">-</span>
//										</div>
//									</div>
//								</div>
//								<div class="btnbox clearfix">
//									<a href="##" class="addBuy">立即购买</a>
//									<a href="##" class="addToCart">加入购物车</a>
//								</div>
//							</div>
//						</div> 
//					</div>
//				</div>`
    	}
    };
//  oBuyBox.innerHTML = str;
})

var aSmall = document.querySelectorAll(".small");
var oMiddle = document.querySelector(".middle");
var oFilter = document.getElementById("filter");
var oMaxBox = document.getElementById("maxBox");
var oMaxImg = oMaxBox.getElementsByTagName("img")[0];
var oPicshowbox = document.getElementById("picshowbox");

var oItemshow = document.querySelector(".itemshow")
for(var i = 0; i < aSmall.length; i++) {
	aSmall[i].onmouseover = function() {
		var src = this.getAttribute("data-url");
		oMiddle.src = src;
		oMaxImg.src = src;
	}
}
oPicshowbox.onmouseover = function() {
	oFilter.style.display = "block";
	oMaxBox.style.display = "block";
}
oPicshowbox.onmouseout = function() {
	oFilter.style.display = "none";
	oMaxBox.style.display = "none";
}
oPicshowbox.onmousemove = function(e) {
	var e = e || event;
	var left = e.clientX - oItemshow.offsetLeft - oPicshowbox.offsetLeft - oFilter.offsetWidth / 2;
	var top = e.clientY + window.scrollY - oItemshow.offsetTop - oPicshowbox.offsetTop - oFilter.offsetHeight / 2;
	if(left < 0) {
		left = 0;
	} else if(left > oPicshowbox.offsetWidth - oFilter.offsetWidth) {
		left = oPicshowbox.offsetWidth - oFilter.offsetWidth;
	}
	if(top < 0) {
		top = 0;
	} else if(top > oPicshowbox.offsetHeight - oFilter.offsetHeight) {
		top = oPicshowbox.offsetHeight - oFilter.offsetHeight;
	}
	oFilter.style.left = left + 'px';
	oFilter.style.top = top + 'px';
	var percentX = left / (oPicshowbox.offsetWidth - oFilter.offsetWidth);
	var percentY = top / (oPicshowbox.offsetHeight - oFilter.offsetHeight);
	oMaxImg.style.left = -percentX * (oMaxImg.offsetWidth - oMaxBox.offsetWidth) + 'px';
	oMaxImg.style.top = -percentY * (oMaxImg.offsetHeight - oMaxBox.offsetHeight) + 'px';
}

