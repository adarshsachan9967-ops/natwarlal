import ImageKit from "imagekit";

export const imagekitEndpoint =
  process.env.IMAGEKIT_URL_ENDPOINT ||
  process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ||
  "https://ik.imagekit.io/avdarinn";

export const imagekitPublicKey =
  process.env.IMAGEKIT_PUBLIC_KEY ||
  process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY ||
  "public_uzSklsoDFlGNoIPGFtTdcYJU32Y=";

export const imagekitPrivateKey =
  process.env.IMAGEKIT_PRIVATE_KEY ||
  "private_Zgjm0jSmxe2S76y3kkULZ5nzEvo=";

let imagekitInstance: ImageKit | null = null;

export function getImageKit(): ImageKit {
  if (!imagekitInstance) {
    imagekitInstance = new ImageKit({
      publicKey: imagekitPublicKey,
      privateKey: imagekitPrivateKey,
      urlEndpoint: imagekitEndpoint,
    });
  }
  return imagekitInstance;
}

/**
 * Returns an optimized ImageKit delivery URL with automatic format and compression
 */
export function getOptimizedImageUrl(
  imagePathOrUrl: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: "auto" | "webp" | "jpg";
    blur?: number;
  }
): string {
  if (!imagePathOrUrl) return "";

  // If already full ImageKit URL
  const endpoint = imagekitEndpoint.replace(/\/$/, "");
  let cleanPath = imagePathOrUrl;

  if (cleanPath.startsWith(endpoint)) {
    cleanPath = cleanPath.substring(endpoint.length);
  }

  // Build transformation params
  const trs: string[] = [];
  const q = options?.quality || 80;
  const f = options?.format || "auto";

  trs.push(`q-${q}`);
  trs.push(`f-${f}`);

  if (options?.width) trs.push(`w-${options.width}`);
  if (options?.height) trs.push(`h-${options.height}`);
  if (options?.blur) trs.push(`bl-${options.blur}`);

  const trString = trs.join(",");

  // Clean leading slash
  const pathClean = cleanPath.replace(/^\/+/, "");
  return `${endpoint}/tr:${trString}/${pathClean}`;
}
