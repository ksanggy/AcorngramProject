package com.acorngram.project.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.acorngram.project.dto.FollowerDto;

@Repository
public class FollowerDaoImpl implements FollowerDao{
	@Autowired SqlSession session;

	@Override
	public boolean insert(FollowerDto dto) {
		//초기 follower가 생기면 초기 리스트를 생성하는 메소드
		int isAdded = session.insert("follower.follow", dto);
		System.out.println("isAdded VALUE CHECKER : " + isAdded);
		if(isAdded > 0) {
			return true;
		}
		return false;
	}

	@Override
	public List<FollowerDto> getList(int selfCode) {
		//follower list를 불러와서 리턴하는 메소드
		return session.selectList("follower.getFollowingList", selfCode);
	}

	@Override
	public boolean delete(FollowerDto dto) {
		//상대 유저가 unfollowe 하면 사용될 메소드
		int isRemoved = session.delete("follower.unfollow", dto);
		if(isRemoved > 0) {
			return true;
		}
		return false;
	}

	@Override
	public List<FollowerDto> followerList(int usercode) {
		return session.selectList("follower.getFollowerList", usercode);
	}

	@Override
	public List<FollowerDto> followingList(int usercode) {
		return session.selectList("follower.getFollowingList", usercode);
	}
	
	
}
