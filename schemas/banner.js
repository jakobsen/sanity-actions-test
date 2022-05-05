import PrependUrl from "../components/PrependUrl";
import colorTheme from "./colorTheme";

export default {
  title: "Banner",
  name: "banner",
  type: "document",
  fields: [
    {
      title: "Overskrift",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Undertittel",
      name: "subtitle",
      type: "string",
      description: "Tekst som vil vises under tittelen av banneret",
    },
    {
      title: "Hovedbilde",
      name: "mainImage",
      type: "reference",
      to: [{ type: "heroImage" }],
    },
    {
      name: "urlTo",
      title: "Morgenlevering-URL",
      type: "string",
      inputComponent: PrependUrl,
      options: {
        prepend: 'https://morgenlevering.no/'
      }
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage.image",
    },
  },
};
