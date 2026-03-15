import { useEffect } from "react";

export default function BrowserAgent() {
  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (/chrome|chromium|crios/i.test(userAgent)) {
      console.log("chrome browser detected");
    } else if (/firefox|fxios/i.test(userAgent)) {
      console.log("firefox browser detected");
    } else if (/safari/i.test(userAgent)) {
      console.log("safari browser detected");
    } else if (/opr\//i.test(userAgent)) {
      console.log("opera browser detected");
    } else if (/edg/i.test(userAgent)) {
      console.log("edge browser detected");
    }
  }, []);

  return null;
}
