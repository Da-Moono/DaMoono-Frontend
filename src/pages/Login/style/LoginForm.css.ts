import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "40px 20px",
  position: "relative",
});

export const backButton = style({
  position: "absolute",
  top: "20px",
  left: "20px",
  background: "none",
  border: "none",
  fontSize: "16px",
  fontWeight: "500",
  color: "#666",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  padding: "8px 18px",
  transition: "all 0.2s ease",
  fontFamily: "SCDream, sans-serif",

  ":hover": {
    color: "#333",
  },
});

export const logoContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "60px",
});

export const logo = style({
  width: "200px",
  height: "auto",
  objectFit: "contain",
  marginBottom: "20px",
});

export const formContainer = style({
  width: "100%",
  maxWidth: "340px",
});

export const inputGroup = style({
  marginBottom: "24px",
});

export const label = style({
  display: "block",
  fontSize: "16px",
  fontWeight: "600",
  color: "#333",
  marginBottom: "8px",
});

export const input = style({
  width: "100%",
  padding: "16px",
  fontSize: "16px",
  border: "1px solid #E0E0E0",
  borderRadius: "8px",
  backgroundColor: "#F8F8F8",
  outline: "none",

  ":focus": {
    borderColor: "#F4E185",
    backgroundColor: "#fff",
  },
});

export const loginButton = style({
  width: "100%",
  padding: "18px",
  backgroundColor: "#F4E185",
  border: "none",
  borderRadius: "12px",
  fontSize: "18px",
  fontWeight: "700",
  color: "#333",
  cursor: "pointer",
  marginTop: "40px",
  marginBottom: "20px",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: "#F0D96F",
    transform: "translateY(-2px)",
  },

  ":active": {
    transform: "translateY(0)",
  },
});

export const signupText = style({
  width: "100%",
  padding: "12px",
  background: "none",
  border: "none",
  fontSize: "14px",
  fontWeight: "500",
  color: "#999",
  cursor: "pointer",
  textAlign: "center",

  ":hover": {
    color: "#666",
  },
});
