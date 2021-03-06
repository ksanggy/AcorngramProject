<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<jsp:include page="inc/head.jsp">
		<jsp:param value="검색" name="title"/>
		<jsp:param value="search" name="css"/>
	</jsp:include>
</head>
<body>
	<jsp:include page="inc/header.jsp" />
	<main>

		<nav class="search__header">
			<h2>${searchword}</h2>
		</nav>

		<div class="container">
			<div class="inner-header search">
				<form action="${pageContext.request.contextPath}/search.do" method="get" class="search__form">
					<div class="search__condition-selector">
						<select name="condition" id="search-condition">
							<option value="none" selected>ALL</option>
							<option value="user">USER</option>
							<option value="post">POST</option>
						</select>
					</div>
					<input type="text" name="keyword" id="search-word" placeholder="검색어를 입력하세요" value="${param.keyword }"/>
					<button class="search__btn">
						<i class="glyphicon glyphicon-search"></i>
					</button>
				</form>
			</div>
		</div>
		
		<!-- user 검색 결과 타임라인 -->
		<%--
		<c:if test="${not empty userList}">
			<div class="userlist container">
				<h3>계정</h3>
				<div class="userlist__result">
					<ul class="useritem">
						<c:forEach var="user" items="${userList }" varStatus="status">
							<li class="<c:if test="${status.count lg 4 }">is-hidden</c:if>">
								<img src="${pageContext.request.contextPath}/${user.profile_img }" alt="" class="useritem__icon"/>
								<hgroup>
									<h5 class="useritem__header-name"> ${user.usercode } </h5>
									<h6 class="useritem__header-id"> @${user.id } </h6>
								</hgroup>
								<!-- 프로필 -->
							</li>
							<c:if test="${status.last}">
								<li class="more-btn">
									더 보기
								</li>
							</c:if>
						</c:forEach>
					</ul>
				</div>
			</div>
		</c:if>
		 --%>

		<!-- post 검색 결과 타임라인 -->
		
		<c:if test="${not empty list }">
			<div class="timeline container">
				<c:forEach var="post" items="${list }">
					<article class="post post-user-${post.usercode }" id="post-${post.num }">
						<div class="post__header">
							<div class="post__header-left">
								<a href="${pageContext.request.contextPath}/users/profile.do?id=${post.id }">
									<img src="${pageContext.request.contextPath}/${post.profile_img }" alt="" class="post__icon"/>
									<hgroup>
										<h5 class="post__header-name"> ${post.usercode } </h5>
										<h6 class="post__header-id"> @${post.id } </h6>
									</hgroup>
								</a>
							</div>
							<div class="post__header-right">
							<c:choose>
								<c:when test="${post.usercode eq usercode }">
									<a href="javascript:deletePost(${post.num })" role="button" class="post__btn-delete"> <i class="glyphicon glyphicon-trash"></i></a>
								</c:when>
								<c:otherwise>
									<c:choose>
										<c:when test="${post.followed }">
										<%-- 이 유저와 팔로우 상태라면 --%>
										<a href="javascript:unfollowToggle(${post.usercode })" role="button" class="post__btn-unfollow" ><i class="glyphicon glyphicon-remove-sign"></i> <span>Unfollow</span> </a>
										</c:when>
										<c:otherwise>
											<a href="javascript:followToggle(${post.usercode })" role="button" class="post__btn-follow"><i class="glyphicon glyphicon-plus-sign"></i> <span>Follow</span> </a>
										</c:otherwise>
									</c:choose>
								</c:otherwise>
							</c:choose>
							</div>
						</div>
						<div class="post__img" style="
							background-image: url('${pageContext.request.contextPath}/upload/${post.saveFileName }')">
						</div>
						<div class="post__info">
							<div class="post__like">
								<c:choose>
									<c:when test="${post.liked}">
									<%-- 이 게시글에 like 했다면 --%>
										<a href="javascript:likeControl(${post.num})" class="post__btn-like liked"><i class="glyphicon glyphicon-heart "></i></a>
									</c:when>
									<c:otherwise>
										<a href="javascript:likeControl(${post.num})" class="post__btn-like"><i class="glyphicon glyphicon-heart-empty "></i></a>
									</c:otherwise>
								</c:choose>
								<span class="count-like">${post.like_count }</span>
								<span class="glyphicon glyphicon-comment">${post.commentCount}</span>
							</div>
							
							<div class="post__info-data">
								<time datetime="${post.regdate }"></time>
							</div>
						</div>
						<div class="post__body">
							<h3>${post.nickname } </h3>
							<p>${post.content }</p>
						</div>
					</article>
				</c:forEach>
			</div>	
		</c:if>
	</main>
	<jsp:include page="inc/footer.jsp" />
</body>
</html>