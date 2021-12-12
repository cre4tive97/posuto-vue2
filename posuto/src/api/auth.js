import { instance } from '@/api/index';

// 회원가입
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
