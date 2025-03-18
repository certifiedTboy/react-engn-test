import { SEOData } from "../interfaces/props-interfaces";

export const SEO = (data: SEOData) => {
  console.log(data);

  if (!data.title || !data.metaDescription) {
    return (document.title = "Mail - Inbox");
  }

  document.title = data.title;
  const metaDescriptionTag = document.querySelector('meta[name="description"]');
  if (metaDescriptionTag) {
    metaDescriptionTag.setAttribute("content", data.metaDescription);
  }
};
