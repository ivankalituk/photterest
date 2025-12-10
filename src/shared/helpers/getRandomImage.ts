import image1 from '@/shared/assets/testImages/1.jpg'
import image2 from '@/shared/assets/testImages/2.jpg'
import image3 from '@/shared/assets/testImages/3.jpg'
import image4 from '@/shared/assets/testImages/4.jpg'
import image5 from '@/shared/assets/testImages/5.jpg'
import image6 from '@/shared/assets/testImages/6.jpg'
import image7 from '@/shared/assets/testImages/7.jpg'
import image8 from '@/shared/assets/testImages/8.jpg'

export const pinImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
] as const;

function seededRandom(seed: number) {
    return Math.abs(Math.sin(seed) * 10_000) % 1;
}

// heavy func to prevent images rerender (idk how it works)
export function getPinImgById(id: number | string) {
    const seed = typeof id === 'string'
        ? [...id].reduce((a, c) => a + c.charCodeAt(0), 0)
        : id;

    const index = Math.floor(seededRandom(seed) * pinImages.length);
    return pinImages[index];
}