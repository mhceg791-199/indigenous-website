function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}


export default generateSlug