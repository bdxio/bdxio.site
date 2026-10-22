import type { Talk } from '~/types';

const PHOTO_SIZE = 96;
const CONCURRENCY = 8;

// Resolves to a square JPEG data URL, or to the original URL when the image can't be read through a canvas.
export function loadSpeakerPhoto(url: string) {
  return new Promise<string>((resolve) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onerror = () => resolve(url);
    image.onload = () => {
      const side = Math.min(image.naturalWidth, image.naturalHeight);
      const canvas = document.createElement('canvas');
      canvas.width = PHOTO_SIZE;
      canvas.height = PHOTO_SIZE;
      canvas
        .getContext('2d')!
        .drawImage(
          image,
          (image.naturalWidth - side) / 2,
          (image.naturalHeight - side) / 2,
          side,
          side,
          0,
          0,
          PHOTO_SIZE,
          PHOTO_SIZE
        );
      resolve(canvas.toDataURL('image/jpeg', 0.8));
    };
    image.src = url;
  });
}

export async function loadSpeakerPhotos(talks: Talk[], onPhoto: (speakerId: number, photo: string) => void) {
  const speakers = new Map(talks.flatMap((talk) => talk.speakers ?? []).map((speaker) => [speaker.id, speaker]));
  const queue = [...speakers.values()].filter((speaker) => speaker.photoUrl);

  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      for (let speaker = queue.shift(); speaker; speaker = queue.shift()) {
        onPhoto(speaker.id, await loadSpeakerPhoto(speaker.photoUrl!));
      }
    })
  );
}
