// import './style.css';
import { useEffect } from "react";
import {
  sendToGoogleAnalytics,
  sendToCustomAnalytics,
  sendToEmail,
} from "./useAnalytics.js";

const pinkBtn = document.getElementById("pink-btn");
const blueBtn = document.getElementById("blue-btn");

if (!(pinkBtn && blueBtn)) throw new Error("no buttons");

pinkBtn.addEventListener("click", () => {
  const data = "🎀 Click on pink button! 🎀";
  sendToGoogleAnalytics(data);
  sendToCustomAnalytics(data);
  sendToEmail(data);
});

blueBtn.addEventListener("click", () => {
  const data = "🦋 Click on blue button! 🦋";
  sendToGoogleAnalytics(data);
  sendToCustomAnalytics(data);
  sendToEmail(data);
});
