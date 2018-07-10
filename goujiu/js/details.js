$(function(){
	var str1 = "";
	var str2 = "";
	var num = location.href.split('?')[1];
	$.getJSON("json/index.json",function(data){
		var data1 = data.data1;
		var data2 = data.data2;
		$.each(data1,function(i){
			if(data1[i].id == num){
				str1+=`<div class="buyBox">
					<div class="category">
						<a href="##">首页</a>>
						<a href="##">${data1[i].type}</a>>
						<a href="##">${data1[i].type2}</a>>
						<a href="##">${data1[i].title}</a>
						<a href="##" class="zxkfbtn"></a>
					</div>
					<div class="itemshow clearfix">
						<div class="glass">
							<ul>
								<li>
									<img src="${data1[i].small_img[0]}" class="small"  data-url="${data1[i].big_img[0]}">
								</li>
								<li>
									<img src="${data1[i].small_img[1]}" class="small"  data-url="${data1[i].big_img[1]}">
								</li>
								<li>
									<img src="${data1[i].small_img[2]}" class="small"  data-url="${data1[i].big_img[2]}">
								</li>
								<li>
									<img src="${data1[i].small_img[3]}" class="small"  data-url="${data1[i].big_img[3]}">
								</li>
								<li>
									<img src="${data1[i].small_img[4]}" class="small"  data-url="${data1[i].big_img[4]}">
								</li>
							</ul>
							<div class="showbox">
								<div id="picshowbox">
									<div id="filter"></div>
									<img src="${data1[i].big_img[0]}" class="middle">
								</div>
								<div class="share">
									<div class="shareBox">
										<span>登录分享赢好礼：</span>
										<a href="##" class="share_weixin"></a>
										<a href="##" class="share_weibo"></a>
									</div>
									<div class="collectionBox">
										<a href="##"><img src="images/starempty.png"></a>
										<span>收藏商品</span>
									</div>
								</div>
							</div>	
						</div>
						<div id="maxBox">
							<img src="${data1[i].big_img[0]}" class="maxImg">
						</div>
						<div class="itemmsg">
							<h3 class="itemtitle">${data1[i].title}</h3>
							<p class="redad">${data1[i].preferential}</p>
							<a href="##" class="sppp">
								<span>习酒品牌馆</span>
                     		<em>官方自营</em>
							</a>
							<div class="priceBox">
								<div class="newPriceBox">
									<p class="newPrice">
										活动价
										<strong>
											<span class="rmbIcon">¥</span>
											<span class="price">${data1[i].price}</span>
										</strong>
									</p>
								</div>
								<div class="sale">
									<span>促销信息</span>
									<span class="redBox">购酒特惠</span>
								</div>
							</div>
							<div class="upmsg">
								<div class="transTo">
									<div class="psz">配 送 至:</div>
									<div class="at">
										<a class="at_btn">
	                                        <label id="lbPP">上海 ∨</label>
	                                   	</a>
									</div>
									<span>单笔订单不满100元，收运费10元</span>
									<img src="images/car.png">
									<span>满百包邮</span>
								</div>
								<div class="pay">
									<p>关注度<em>&nbsp;${data1[i].follow}</em></p>
									<span class="line"></span>
									<p>累计评价<em>&nbsp;${data1[i].evaluate}</em></p>
									<span class="line"></span>
									<p>送积分<em>&nbsp;${data1[i].integral}</em></p>
								</div>
								<div class="numbox clearfix">
									<div class="lttext">数  量:</div>
									<div>
										<input type="text" value="1" class="nums"/>
										<div class="addBtn">
											<span class="addN">+</span>
											<span class="diffN">-</span>
										</div>
									</div>
								</div>
								<div class="btnbox clearfix">
									<a href="##" class="addBuy">立即购买</a>
									<a href="##" class="addToCart">加入购物车</a>
									<a href="##" class="apphover">手机下单更优惠</a>
								</div>
							</div>
						</div> 
					</div>
				</div>`
			}
		});
		// $(".mainBox").html(str1);
		$.each(data2,function(j){
			if(data2[j].id == num){
				str2+=`<div class="buyBox">
					<div class="category">
						<a href="##">首页</a>>
						<a href="##">${data2[j].type}</a>>
						<a href="##">${data2[j].type2}</a>>
						<a href="##">${data2[j].title}</a>
						<a href="##" class="zxkfbtn"></a>
					</div>
					<div class="itemshow clearfix">
						<div class="glass">
							<ul>
								<li>
									<img src="${data2[j].small_img[0]}" class="small"  data-url="${data2[j].big_img[0]}">
								</li>
								<li>
									<img src="${data2[j].small_img[1]}" class="small"  data-url="${data2[j].big_img[1]}">
								</li>
								<li>
									<img src="${data2[j].small_img[2]}" class="small"  data-url="${data2[j].big_img[2]}">
								</li>
								<li>
									<img src="${data2[j].small_img[3]}" class="small"  data-url="${data2[j].big_img[3]}">
								</li>
								<li>
									<img src="${data2[j].small_img[4]}" class="small"  data-url="${data2[j].big_img[4]}">
								</li>
							</ul>
							<div class="showbox">
								<div id="picshowbox">
									<div id="filter"></div>
									<img src="${data2[j].big_img[0]}" class="middle">
								</div>
								<div class="share">
									<div class="shareBox">
										<span>登录分享赢好礼：</span>
										<a href="##" class="share_weixin"></a>
										<a href="##" class="share_weibo"></a>
									</div>
									<div class="collectionBox">
										<a href="##"><img src="images/starempty.png"></a>
										<span>收藏商品</span>
									</div>
								</div>
							</div>	
						</div>
						<div id="maxBox">
							<img src="${data2[j].big_img[0]}" class="maxImg">
						</div>
						<div class="itemmsg">
							<h3 class="itemtitle">${data2[j].title}</h3>
							<p class="redad">${data2[j].preferential}</p>
							<a href="##" class="sppp">
								<span>习酒品牌馆</span>
                     		<em>官方自营</em>
							</a>
							<div class="priceBox">
								<div class="newPriceBox">
									<p class="newPrice">
										活动价
										<strong>
											<span class="rmbIcon">¥</span>
											<span class="price">${data2[j].price}</span>
										</strong>
									</p>
								</div>
								<div class="sale">
									<span>促销信息</span>
									<span class="redBox">购酒特惠</span>
								</div>
							</div>
							<div class="upmsg">
								<div class="transTo">
									<div class="psz">配 送 至:</div>
									<div class="at">
										<a class="at_btn">
	                                        <label id="lbPP">上海 ∨</label>
	                                   	</a>
									</div>
									<span>单笔订单不满100元，收运费10元</span>
									<img src="images/car.png">
									<span>满百包邮</span>
								</div>
								<div class="pay">
									<p>关注度<em>&nbsp;${data2[j].follow}</em></p>
									<span class="line"></span>
									<p>累计评价<em>&nbsp;${data2[j].evaluate}</em></p>
									<span class="line"></span>
									<p>送积分<em>&nbsp;${data2[j].integral}</em></p>
								</div>
								<div class="numbox clearfix">
									<div class="lttext">数  量:</div>
									<div>
										<input type="text" value="1" class="nums"/>
										<div class="addBtn">
											<span class="addN">+</span>
											<span class="diffN">-</span>
										</div>
									</div>
								</div>
								<div class="btnbox clearfix">
									<a href="##" class="addBuy">立即购买</a>
									<a href="##" class="addToCart">加入购物车</a>
									<a href="##" class="apphover">手机下单更优惠</a>
								</div>
							</div>
						</div> 
					</div>
				</div>`
			}
		});
		$(".mainBox").html(str1.concat(str2));	
	})
});
 				
  

// var aSmall = document.querySelectorAll(".small");
// var oMiddle = document.querySelector(".middle");
// var oFilter = document.getElementById("filter");
// var oMaxBox = document.getElementById("maxBox");
// var oMaxImg = document.querySelector(".maxImg");
// var oPicshowbox = document.getElementById("picshowbox");

// var oItemshow = document.querySelector(".itemshow")
// for(var i = 0; i < aSmall.length; i++) {
// 	aSmall[i].onmouseover = function() {
// 		var src = this.getAttribute("data-url");
// 		oMiddle.src = src;
// 		oMaxImg.src = src;
// 	}
// }
// oPicshowbox.onmouseover = function() {
// 	oFilter.style.display = "block";
// 	oMaxBox.style.display = "block";
// }
// oPicshowbox.onmouseout = function() {
// 	oFilter.style.display = "none";
// 	oMaxBox.style.display = "none";
// }
// oPicshowbox.onmousemove = function(e) {
// 	var e = e || event;
// 	var left = e.clientX - oItemshow.offsetLeft - oPicshowbox.offsetLeft - oFilter.offsetWidth / 2;
// 	var top = e.clientY + window.scrollY - oItemshow.offsetTop - oPicshowbox.offsetTop - oFilter.offsetHeight / 2;
// 	if(left < 0) {
// 		left = 0;
// 	} else if(left > oPicshowbox.offsetWidth - oFilter.offsetWidth) {
// 		left = oPicshowbox.offsetWidth - oFilter.offsetWidth;
// 	}
// 	if(top < 0) {
// 		top = 0;
// 	} else if(top > oPicshowbox.offsetHeight - oFilter.offsetHeight) {
// 		top = oPicshowbox.offsetHeight - oFilter.offsetHeight;
// 	}
// 	oFilter.style.left = left + 'px';
// 	oFilter.style.top = top + 'px';
// 	var percentX = left / (oPicshowbox.offsetWidth - oFilter.offsetWidth);
// 	var percentY = top / (oPicshowbox.offsetHeight - oFilter.offsetHeight);
// 	oMaxImg.style.left = -percentX * (oMaxImg.offsetWidth - oMaxBox.offsetWidth) + 'px';
// 	oMaxImg.style.top = -percentY * (oMaxImg.offsetHeight - oMaxBox.offsetHeight) + 'px';
// }

