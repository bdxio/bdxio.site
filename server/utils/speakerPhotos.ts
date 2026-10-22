import sharp from 'sharp';
import type { Talk } from '~/types';

const PHOTO_SIZE = 96;
const CONCURRENCY = 8;
const TIMEOUT_MS = 10_000;

async function fetchPhoto(url: string) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!response.ok) return undefined;

    const jpeg = await sharp(Buffer.from(await response.arrayBuffer()))
      .resize(PHOTO_SIZE, PHOTO_SIZE, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toBuffer();
    return `data:image/jpeg;base64,${jpeg.toString('base64')}`;
  } catch {
    return undefined;
  }
}

// Speakers whose photo can't be fetched or decoded are left out and get their initials in the PDF.
export async function fetchSpeakerPhotos(talks: Talk[]) {
  const speakers = new Map(talks.flatMap((talk) => talk.speakers ?? []).map((speaker) => [speaker.id, speaker]));
  const queue = [...speakers.values()].filter((speaker) => speaker.photoUrl);
  const photos: Record<number, string> = {};

  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      for (let speaker = queue.shift(); speaker; speaker = queue.shift()) {
        const photo = await fetchPhoto(speaker.photoUrl!);
        if (photo) photos[speaker.id] = photo;
      }
    })
  );

  return photos;
}
