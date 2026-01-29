import { useState } from "react";
import { useNavigate } from "react-router";
import logo from "@/assets/images/logo.png";
import { login } from "@/services/authApi";
import { PAGE_PATHS } from "@/shared/config/paths";
import Layout from "../layout/Layout";
import * as styles from "./style/LoginForm.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!userId.trim() || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      const data = await login({ userId, password });
      console.log("로그인 응답:", data);
      console.log("Role:", data.data?.role);

      if (data.success) {
        // 로그인 성공 시 사용자 정보 저장
        console.log("로그인 데이터:", data);
        console.log("저장할 userName:", data.data.name);

        localStorage.setItem("userId", data.data.userId);
        localStorage.setItem("userName", data.data.name);
        localStorage.setItem("userRole", data.data.role);

        console.log("저장 후 localStorage:", {
          userId: localStorage.getItem("userId"),
          userName: localStorage.getItem("userName"),
          userRole: localStorage.getItem("userRole"),
        });

        // ADMIN이면 상담사 페이지로, 아니면 홈으로
        if (data.data.role === "ADMIN") {
          navigate("/chat/admin");
        } else {
          navigate(PAGE_PATHS.HOME);
        }
      }
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "로그인 중 오류가 발생했습니다.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupClick = () => {
    navigate(PAGE_PATHS.SIGNUP);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      handleLogin();
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <button
          type="button"
          className={styles.backButton}
          onClick={() => navigate(PAGE_PATHS.LOGIN)}
        >
          ‹ 돌아가기
        </button>

        <div className={styles.logoContainer}>
          <img src={logo} alt="다무너 로고" className={styles.logo} />
        </div>

        <div className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="userId" className={styles.label}>
              아이디
            </label>
            <input
              id="userId"
              type="text"
              className={styles.input}
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
          </div>

          <button
            type="button"
            className={styles.loginButton}
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "로그인 중..." : "로그인"}
          </button>

          <button
            type="button"
            className={styles.signupText}
            onClick={handleSignupClick}
          >
            회원가입
          </button>
        </div>
      </div>
    </Layout>
  );
}
