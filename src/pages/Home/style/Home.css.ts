import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "20px",
  paddingTop: "80px",
  paddingBottom: "80px",
});

export const chatButton = style({
  width: "100%",
  padding: "0px 24px",
  backgroundColor: "#FBE88A",
  border: "none",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  marginBottom: "30px",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: "#FFF4C4",
  },
});

export const chatText = style({
  fontSize: "18px",
  fontWeight: "500",
  color: "#333",
  flex: 1,
  fontFamily: "SCDream, sans-serif",
  textAlign: "left",
});

export const chatButtonImage = style({
  height: "70px",
  width: "auto",
  display: "block",
  flexShrink: 0,
});

export const section = style({
  marginBottom: "30px",
});

export const sectionHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
});

export const sectionTitle = style({
  fontSize: "18px",
  fontWeight: "700",
  color: "#333",
  margin: 0,
  marginBottom: "16px",
  fontFamily: "SCDream, sans-serif",
});

export const moreButton = style({
  background: "none",
  border: "none",
  fontSize: "14px",
  color: "#999",
  cursor: "pointer",
  fontFamily: "SCDream, sans-serif",

  ":hover": {
    color: "#666",
  },
});

export const emptyState = style({
  padding: "40px 20px",
  textAlign: "center",
  color: "#999",
  fontSize: "14px",
  backgroundColor: "#f9f9f9",
  borderRadius: "12px",
  fontFamily: "SCDream, sans-serif",
});

export const sliderWrapper = style({
  width: "100%",
  overflow: "hidden",
  position: "relative",
  borderRadius: "16px",
});

export const sliderTrack = style({
  display: "flex",
  transition: "transform 0.3s ease-in-out",
});

export const sliderCard = style({
  minWidth: "100%",
  height: "240px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  flexShrink: 0,
  position: "relative",
  border: "none",
  cursor: "pointer",
  overflow: "hidden",
  backgroundColor: "#f5f5f5",

  ":disabled": {
    cursor: "default",
  },
});

export const sliderImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center -10px",
});

export const sliderArrowLeft = style({
  position: "absolute",
  left: "4px",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "48px",
  fontWeight: "300",
  color: "rgba(255, 255, 255, 0.7)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",

  ":hover": {
    color: "rgba(255, 255, 255, 1)",
    transform: "translateY(-50%) scale(1.2)",
  },

  ":active": {
    transform: "translateY(-50%) scale(1)",
  },
});

export const sliderArrowRight = style({
  position: "absolute",
  right: "4px",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "48px",
  fontWeight: "300",
  color: "rgba(255, 255, 255, 0.7)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",

  ":hover": {
    color: "rgba(255, 255, 255, 1)",
    transform: "translateY(-50%) scale(1.2)",
  },

  ":active": {
    transform: "translateY(-50%) scale(1)",
  },
});

export const sliderContent = style({
  padding: "16px 32px",
  backgroundColor: "#FFB6D9",
  borderRadius: "30px",
  fontSize: "18px",
  fontWeight: "600",
  color: "#fff",
  marginBottom: "40px",
});

export const sliderDots = style({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  position: "absolute",
  bottom: "16px",
  left: "50%",
  transform: "translateX(-50%)",
});

export const dot = style({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  border: "none",
  cursor: "pointer",
  padding: 0,
  transition: "all 0.3s ease",

  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
});

export const dotActive = style({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  border: "none",
  cursor: "pointer",
  padding: 0,
});

export const tabs = style({
  display: "flex",
  gap: "8px",
  marginBottom: "16px",
});

export const tab = style({
  padding: "8px 24px",
  backgroundColor: "#f5f5f5",
  border: "none",
  borderRadius: "20px",
  fontSize: "14px",
  color: "#999",
  cursor: "pointer",
  fontFamily: "SCDream, sans-serif",

  ":hover": {
    backgroundColor: "#e0e0e0",
  },
});

export const tabActive = style({
  padding: "8px 24px",
  backgroundColor: "#333",
  border: "none",
  borderRadius: "20px",
  fontSize: "14px",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "600",
  fontFamily: "SCDream, sans-serif",
});

export const productList = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const productItem = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "16px",
  backgroundColor: "#f9f9f9",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  border: "none",
  width: "100%",
  textAlign: "left",

  ":hover": {
    backgroundColor: "#f0f0f0",
    transform: "translateY(-2px)",
  },
});

export const productRank = style({
  width: "24px",
  height: "24px",
  backgroundColor: "#333",
  color: "#fff",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: "700",
  flexShrink: 0,
});

export const productIcon = style({
  width: "48px",
  height: "48px",
  backgroundColor: "#fff",
  borderRadius: "50%",
  flexShrink: 0,
});

export const productInfo = style({
  flex: 1,
});

export const productName = style({
  fontSize: "14px",
  color: "#333",
  margin: 0,
  marginBottom: "4px",
  lineHeight: "1.4",
});

export const productPrice = style({
  fontSize: "16px",
  fontWeight: "700",
  color: "#333",
  margin: 0,
});

export const productCard = style({
  width: "100%",
  cursor: "pointer",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  backgroundColor: "#fff",
  padding: "16px 20px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  transition: "box-shadow 0.2s, border-color 0.2s",
  textAlign: "left",

  ":hover": {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
});

export const cardHeader = style({
  marginBottom: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const cardProvider = style({
  fontSize: "14px",
  color: "#1f2937",
  fontFamily: "SCDream, sans-serif",
});

export const cardCategory = style({
  fontSize: "14px",
  color: "#1f2937",
  fontFamily: "SCDream, sans-serif",
});

export const cardPrice = style({
  fontSize: "14px",
  fontWeight: "600",
  color: "#E91685",
  fontFamily: "SCDream, sans-serif",
});

export const cardName = style({
  maxWidth: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: "18px",
  fontWeight: "700",
  margin: 0,
  marginBottom: "8px",
  fontFamily: "SCDream, sans-serif",
});

export const badgeContainer = style({
  marginTop: "8px",
  display: "flex",
  width: "100%",
  flexWrap: "nowrap",
  gap: "8px",
  overflowX: "auto",
  scrollbarWidth: "none",

  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const badge = style({
  borderRadius: "9999px",
  border: "none",
  padding: "4px 8px",
  fontSize: "12px",
  whiteSpace: "nowrap",
  fontFamily: "SCDream, sans-serif",
});

export const badgeData = style({
  backgroundColor: "#eef2ff",
  color: "#4f46e5",
});

export const badgeVoice = style({
  backgroundColor: "#ecfdf5",
  color: "#059669",
});

export const badgeSpeed = style({
  backgroundColor: "#fffbeb",
  color: "#d97706",
});

export const badgeSms = style({
  backgroundColor: "#fef2f2",
  color: "#dc2626",
});

export const ottContainer = style({
  marginTop: "12px",
  display: "flex",
  alignItems: "center",
});

export const ottCircle = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  backgroundColor: "#d1d5db",
  border: "2px solid #fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
});

export const ottCircleOverlap = style({
  marginLeft: "-12px",
});

export const descriptionContainer = style({
  marginBottom: "16px",
  marginTop: "8px",
});

export const descriptionText = style({
  fontSize: "14px",
  color: "#6b7280",
  lineHeight: "1.5",
  margin: 0,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontFamily: "SCDream, sans-serif",
});

export const subscribeContainer = style({
  marginTop: "12px",
  display: "flex",
  alignItems: "center",
});

export const subscribeCircle = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  backgroundColor: "#d1d5db",
  border: "2px solid #fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  fontWeight: "600",
  overflow: "hidden",
});

export const subscribeImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const counselSliderWrapper = style({
  width: "100%",
  position: "relative",
  overflow: "hidden",
});

export const counselSliderTrack = style({
  display: "flex",
  transition: "transform 0.3s ease-in-out",
});

export const counselCard = style({
  minWidth: "100%",
  width: "100%",
  padding: "24px 56px",
  backgroundColor: "#fbe88a1c",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  border: "none",
  textAlign: "left",
  flexShrink: 0,
  boxSizing: "border-box",

  ":hover": {
    backgroundColor: "#fbe88a94",
  },
});

export const counselDate = style({
  fontSize: "14px",
  color: "#999",
  marginBottom: "8px",
  fontFamily: "SCDream, sans-serif",
});

export const counselTitle = style({
  fontSize: "16px",
  fontWeight: "600",
  color: "#333",
  lineHeight: "1.5",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontFamily: "SCDream, sans-serif",
});

export const counselArrowLeft = style({
  position: "absolute",
  left: "8px",
  top: "calc(50% - 13px)",
  transform: "translateY(-50%)",
  zIndex: 10,
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "36px",
  fontWeight: "300",
  color: "rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",

  ":hover": {
    color: "rgba(0, 0, 0, 0.6)",
    transform: "translateY(-50%) scale(1.2)",
  },

  ":active": {
    transform: "translateY(-50%) scale(1)",
  },
});

export const counselArrowRight = style({
  position: "absolute",
  right: "8px",
  top: "calc(50% - 13px)",
  transform: "translateY(-50%)",
  zIndex: 10,
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "36px",
  fontWeight: "300",
  color: "rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",

  ":hover": {
    color: "rgba(0, 0, 0, 0.6)",
    transform: "translateY(-50%) scale(1.2)",
  },

  ":active": {
    transform: "translateY(-50%) scale(1)",
  },
});

export const counselDots = style({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  marginTop: "16px",
});
