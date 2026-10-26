// Strapi only returns published entries unless the publication state is set to "preview".
// Draft talks are fetched too when the DRAFT_TALKS env var is "true".
export function getTalksPublicationParams(draftTalks?: string) {
  return draftTalks === 'true' ? { publicationState: 'preview' } : {};
}
