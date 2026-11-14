const YOUTUBE_ID = /^[\w-]{11}$/;

export function getYoutubeEmbedUrl(url?: string) {
  if (!url) return undefined;

  let id: string | undefined;
  try {
    const { hostname, pathname, searchParams } = new URL(url.trim());
    if (hostname === 'youtu.be') {
      id = pathname.split('/')[1];
    } else if (hostname.endsWith('youtube.com') || hostname.endsWith('youtube-nocookie.com')) {
      const [, kind, pathId] = pathname.split('/');
      id = kind === 'embed' || kind === 'live' || kind === 'shorts' ? pathId : searchParams.get('v') || undefined;
    }
  } catch {
    return undefined;
  }

  return id && YOUTUBE_ID.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : undefined;
}
