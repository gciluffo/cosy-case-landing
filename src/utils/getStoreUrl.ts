export const APP_STORE_URL =
  "https://apps.apple.com/app/apple-store/id6747253733";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.gciluffo.cosycase";

export function getStoreUrl(): string {
  if (typeof navigator === "undefined") return APP_STORE_URL;
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return PLAY_STORE_URL;
  if (/iphone|ipad|ipod/i.test(ua)) return APP_STORE_URL;
  // Desktop: default to App Store (most common for this type of app)
  return APP_STORE_URL;
}
