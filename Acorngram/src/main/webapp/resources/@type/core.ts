// import * as $ from 'jquery';

//	Timeline load시 실행
(function loadPost(){
	moment.locale('ko');

	//	시간 설정
	document.querySelectorAll('time').forEach(e=>{
		var regdate = moment().utc(e.dateTime);
		e.innerText = 
			regdate
		//	new moment(regdate).fromNow()
	})

	//	좋아요 버튼 hover 효과
	$('.post__btn-like').on('hover',function(){
		console.dir($(this).children('.glyphicon'));
		$(this).children('.glyphicon')
			.toggleClass('glyphicon-heart')
			.toggleClass('glyphicon-heart-empty');
	});

	//	to post/detail?num=?

	$('.post').on('click',function(e){
		const num:number = $(this).attr('id').replace(/\D/g, "");
		if(e.target.className.match(/img/)){
			location.href='post/detail.do?num='+num;
		}
	});

})();

var test;

//	글쓰기 창 토글

function toggleWritePopup(){
	var block:HTMLElement = document.querySelector('.writepost');
	block.classList.toggle('is-visible');
}

//	업로드전 이미지 표시

$('.writepost__img').on('change', function (e) {
	var reader = new FileReader();
	reader.onload = function (e) {
		$("#preview").attr('src', e.target.result);
	}
	reader.readAsDataURL(e.target.files[0]);
});



//	유저메뉴 토글

var makeCover = ()=>{
	var item = document.createElement('div');
	item.className = 'cover';
	item.onclick = ()=>{item.remove()}
	return item;
}
	 
const toggle = {
	run: function (org, target, is_cover){
		org?
		org.addEventListener('click',function(){
			(<HTMLElement>target)
			.classList.toggle('is-active');
			if(is_cover){
				var cover = makeCover();
				cover.addEventListener('click',()=>{
					(<HTMLElement>target).classList.remove('is-active');
				});
				(<HTMLElement>target)
					.classList.contains('is-active')?
						document.body.insertBefore(cover, document.querySelector('main')):
						document.querySelector('.cover').remove();
			}
		})
		:'';
		return this;
	}
}


toggle.run(
	document.querySelector('.header__user-info'),
	document.querySelector('nav.user-menu'),
	true
).run(
	document.querySelector('[class*="writepost"] button'),
	document.querySelector('.writepost'),
	false
);

//	유저메뉴 토글 끝



//	특정조작시 리다이렉트

function confirmAccess(url){
	var result:boolean = window.confirm('정말로 하시겠습니까?');
	if(result){
		location.href = url;
	}
}


//  좋아요 버튼

function likeControl(num){
	const flag = document.querySelector('.post-'+num+' .post__like a');
	const mode = flag.classList.contains('liked')?
		'unlike':'like';
	fetch('post/'+mode+'.do?num='+num)
	.then(res=>res.json())
	.then(res=>{
		if(res.result) {
			switch (mode){
			case 'unlike':
				flag.querySelector('i').classList.replace('glyphicon-heart', 'glyphicon-heart-empty');
				flag.classList.remove('liked');
				break;
			case 'like':
				flag.querySelector('i').classList.replace('glyphicon-heart-empty', 'glyphicon-heart');
				flag.classList.add('liked');
				break;
			}
		}
	})
	.catch(error=>{
//	테스트용 실제로는 x
		window.alert('서버와 통신 도중 에러가 발생했습니다.');
	})

	// $.ajax({
	// 	url:"post/"+mode+'.do?num'+num,
	// 	type:'get',
	// 	dataType:'json'
	// }).done(res=>{
	// 	if(res.result) {
	// 		switch (mode){
	// 		case 'unlike':
	// 			flag.querySelector('i').classList.replace('glyphicon-heart', 'glyphicon-heart-empty');
	// 			break;
	// 		case 'like':
	// 			flag.querySelector('i').classList.replace('glyphicon-heart-empty', 'glyphicon-heart');
	// 			break;
	// 		}
	// 	}
	// })
}

//	삭제버튼

function deletePost(num){
	var result:boolean = window.confirm('정말로 삭제하시겠습니까?');
	if(result){
		fetch('post/delete.do?num='+num)
		.then(res=>res.json())
		.then(res=>{
				if(res.result){
					window.alert('성공적으로 삭제되었습니다.');
					$('.post-'+num).fadeOut(300, function() { $(this).remove(); });
				}else{
					window.alert('오류가 발생했습니다.');
				}
		}).catch(
			error=>{
				window.alert('서버와 통신 도중 에러가 발생했습니다.')
			}
		)

		// $.ajax({
		// 	url : "post/delete.do",
		// 	type : "get",
		// 	data : {'num' : num},
		// 	dataType: "json",
		// }).done(
		// 	res => {
		// 		if(res.result){
		// 			window.alert('성공적으로 삭제되었습니다.');
		// 			$('.post-'+num).fadeOut(300, function() { $(this).remove(); });
		// 		}else{
		// 			window.alert('오류가 발생했습니다.');
		// 		}
		// 	}
		// ).fail(
		// 	error=>{
		// 		$('.post-'+num).fadeOut(300, function() { $(this).remove(); });
		// 	}
		// )
	}
}

//	팔로우/언팔 버튼

function followToggle(usercode){
	let url = "follwer/follow.do";
	const result = followAjax(url, usercode);
	if(result){
		window.alert('성공적으로 팔로우되었습니다.');
		const target = document.querySelector('post-'+usercode+' a[class*="follow]');
			target.classList.replace('post__btn-follow', 'post__btn-unfollow');
			target.querySelector('i.glyphicon').classList.replace('glyphicon-plus-sign', 'glyphicon-remove-sign')
			target.querySelector('span').innerText = 'Unfollow';
	}else{
		window.alert('오류가 발생했습니다.');
	}
}

function unfollowToggle(usercode){
	let url = 'follwer/unfollow.do';
	const result = followAjax(url, usercode);
	if(result){
		window.alert('성공적으로 언팔로우되었습니다.');
		const target = document.querySelector('post-'+usercode+' a[class*="follow]');
			target.classList.replace('post__btn-unfollow', 'post__btn-follow');
			target.querySelector('i.glyphicon').classList.replace('glyphicon-remove-sign', 'glyphicon-plus-sign')
			target.querySelector('span').innerText = 'Follow';
	}else{
		window.alert('오류가 발생했습니다.');
	}
}

function followAjax(url, usercode){
	return fetch(url+'?usercode='+usercode)
	.then(res=>res.json())
	.then(res=>{return res.result;})
	.catch(err=>{return false;}) // 테스트용 실제로는 반대로 
}

//	팔로우 언팔 끝




