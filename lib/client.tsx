import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "zxrpodw8",
  dataset: "production",
  apiVersion: "2022-07-22",
  useCdn: true,
  token: process.env.NEXY_PUPLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
