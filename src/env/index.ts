export const BUNDLR_STORAGE_ADDRESS =
  import.meta.env.VITE_BUNDLR_STORAGE_ADDRESS ||
  "https://devnet.bundlr.network/";
export const BUNDLR_STORAGE_PROVIDE_URL =
  import.meta.env.VITE_BUNDLR_STORAGE_PROVIDE_URL ||
  "https://api.devnet.solana.com/";
export const BUNDLR_STORAGE_TIMEOUT =
  Number(import.meta.env.VITE_BUNDLR_STORAGE_TIMEOUT) || 60000;

export const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY || "";
export const CLUSTER = import.meta.env.VITE_CLUSTER || "devnet";
export const API = import.meta.env.VITE_API || "http://localhost:9000/api/v1/";
