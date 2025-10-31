export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const hashtag = query.hashtag;
  const limit = query.limit || 20;

  if (!hashtag) {
    throw createError({
      statusCode: 400,
      message: "Le hashtag est requis",
    });
  }

  try {
    // 1. Créer une session (authentification)
    // IMPORTANT: Remplacez ces identifiants par les vôtres
    const identifier = process.env.BLUESKY_IDENTIFIER; // Votre handle (ex: votrecompte.bsky.social)
    const password = process.env.BLUESKY_PASSWORD; // Votre mot de passe ou App Password

    if (!identifier || !password) {
      throw new Error("Identifiants Bluesky manquants. Configurez BLUESKY_IDENTIFIER et BLUESKY_PASSWORD dans .env");
    }

    console.log("Création de session Bluesky...");
    const authResponse = await fetch("https://bsky.social/xrpc/com.atproto.server.createSession", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    if (!authResponse.ok) {
      throw new Error(`Erreur d'authentification: ${authResponse.status}`);
    }

    const authData = await authResponse.json();
    const accessToken = authData.accessJwt;

    // 2. Faire la recherche avec le token
    const searchUrl = `https://bsky.social/xrpc/app.bsky.feed.searchPosts?q=${encodeURIComponent("#" + hashtag)}&limit=${limit}`;
    
    console.log("Recherche des posts pour:", hashtag);
    
    const searchResponse = await fetch(searchUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Accept": "application/json",
      },
    });

    if (!searchResponse.ok) {
      const errorText = await searchResponse.text();
      console.error("Erreur recherche:", searchResponse.status, errorText);
      throw new Error(`Erreur de recherche: ${searchResponse.status}`);
    }

    const data = await searchResponse.json();
    console.log("Nombre de posts trouvés:", data.posts?.length || 0);

    return {
      posts: data.posts || [],
      cursor: data.cursor,
    };
  } catch (error) {
    console.error("Erreur complète:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Erreur lors de la récupération des posts Bluesky",
    });
  }
});
