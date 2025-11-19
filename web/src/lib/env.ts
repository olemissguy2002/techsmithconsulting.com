// web/src/lib/env.ts

const RAW_ENV = process.env.NEXT_PUBLIC_ENV ?? "production";

export const APP_ENV = RAW_ENV; // "production" | "staging" | "development" | anything else

export const IS_PRODUCTION = APP_ENV === "production";
export const IS_STAGING = APP_ENV === "staging";
export const IS_DEVELOPMENT = !IS_PRODUCTION && !IS_STAGING;

/**
 * Feature flag: show AI portfolio + chatbot?
 *
 * - true in staging and local dev
 * - false in production
 */
export const ENABLE_AI_PORTFOLIO = !IS_PRODUCTION;
