// this will extract the text from the slug

export const textFromSlug = (slug: string) => {
  if (typeof slug === "string") {
    return slug.split("-").join(" ");
  } else {
    return "";
  }
};
