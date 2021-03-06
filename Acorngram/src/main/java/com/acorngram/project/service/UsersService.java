package com.acorngram.project.service;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.acorngram.project.dto.FollowerDto;
import com.acorngram.project.dto.UsersDto;


public interface UsersService {
	
	// 회원 정보 DB 저장 
	public void addUser(UsersDto dto, ModelAndView mView);
	// 로그인 시 아이디 유무 체크 
	public boolean validUser(UsersDto dto, ModelAndView mView, HttpSession session, HttpServletRequest request);
	// 회원 정보 
	public void showInfo(String id, ModelAndView mView, HttpServletRequest request);
	// 아이디 중복 체크 
	public Map<String, Object> isExistId(String inputId);
	// 회원 정보 삭제 
	public void deleteUser(HttpSession session);
	//  프로 파일 이미지를 저장하는 메서드 
	public String saveProfileImage(HttpServletRequest request, MultipartFile mFile);
	// 개인정보 수정 반영하는 메소드
	public void updateUser(UsersDto dto, HttpServletRequest request);
	
}
