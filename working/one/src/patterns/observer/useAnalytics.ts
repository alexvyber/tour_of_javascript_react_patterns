import { useEffect } from "react";
import Observer from "./observer";

export function sendToGoogleAnalytics(data: unknown) {
  console.log("Sent to Google analytics: ", data);
}

export function sendToCustomAnalytics(data: unknown) {
  console.log("Sent to custom analytics: ", data);
}

export function sendToEmail(data: unknown) {
  console.log("Sent to email: ", data);
}

export const useAnalytics = () => {
  useEffect(() => {
    Observer.subscribe(sendToGoogleAnalytics);
    Observer.subscribe(sendToCustomAnalytics);
    Observer.subscribe(sendToEmail);
  }, []);
};
