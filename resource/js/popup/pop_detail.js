//투자모집 달성률 표시 + 애니메이션
function goalRateBarControl(cnt = 12458, totalCnt = 50000)
{
	let rate = Math.round((cnt/totalCnt)*100);

	$('.goal-rate-bar').delay(1000).animate({width:`${rate}%`},1000,'easeOutExpo');

	$({ val : 0 }).delay(1000).animate({ val : cnt }, {
		duration: 1000,
	step: function() {
		var num = numComma(Math.floor(this.val));
		$(".goal-rate-text").text(`${num}/${numComma(totalCnt)}`);
	},
	complete: function() {
		var num = numComma(Math.floor(this.val));
		$(".goal-rate-text").text(`${num}/${numComma(totalCnt)}`);
	}
});

}

//플로우바 클릭 : 해당하는 페이지 오픈, 선택클래스 부여
$(document).on('click','.flow-bar',function(){
	$(".flow-bar").removeClass("selected");
	$(this).toggleClass('selected');
	$(`.flow-view-box`).fadeIn();
	$(`.flow-list-container`).hide(0);
	console.log("hi")
})

//플로우리스트 클릭 : 해당하는 페이지 오픈, 선택클래스 부여
$(document).on('click','.flow-list',function(){
	console.log("list click")
	let listNum = $(this).index();
	$(".flow-bar").eq(listNum).click();
})

//닫기버튼 클릭 : 페이지 닫고 초기상태로
$(document).on('click','.btn_close',function(){
	console.log('close')
	$(`.flow-view-box`).hide(0);
	$(`.flow-list-container`).fadeIn();
	$(".flow-bar").removeClass("selected");
})