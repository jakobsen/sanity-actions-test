export default {
  title: "Books",
  name: "book",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Cover",
      name: "cover",
      type: "image",
      fields: [
        {
          name: "alttext",
          type: "string",
          title: "Alt text",
          options: {
            isHighlighted: true,
          },
          validation: (Rule) => Rule.required(),
        },
      ],
      options: {
        hotspot: true,
        storeOriginalFilename: false,
      },
    },
    {
      title: "Authors",
      name: "author",
      type: "array",
      of: [{ type: "reference", to: [{ type: "person" }] }],
    },
  ],
};
