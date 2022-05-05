import { ImageIcon } from "@sanity/icons";

export default {
  title: "Reklamebilde",
  name: "heroImage",
  type: "document",
  icon: ImageIcon,
  fields: [
    {
      type: "string",
      name: "name",
      title: "Bildetittel",
    },
    {
      title: "Bilde",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: "Alt-tekst",
          name: "altText",
          type: "string",
          options: {
            isHighlighted: true,
            storeOriginalFilename: false,
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};
