export const IMAGE_FORMATS = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
] as const;

// пока только фото, потом добавить и видео
export const IMAGE_ACCEPT = ".jpg,.jpeg,.png,.webp,.gif";

export const MAX_IMAGE_SIZE = 20 * 1024 * 1024;