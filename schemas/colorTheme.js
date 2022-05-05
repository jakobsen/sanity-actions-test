const colorTheme = {
  type: "object",
  name: "colorTheme",
  title: "Fargetema",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
    },
    {
      name: "textColor",
      title: "Tekstfarge",
      type: "color",
    },
    {
      name: "backgroundColor",
      title: "Bakgrunnsfarge",
      type: "color",
    },
  ],
};

export default colorTheme;
