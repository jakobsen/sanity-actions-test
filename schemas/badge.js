import { Award } from "react-feather";

export default {
  title: "Badge",
  name: "badge",
  type: "document",
  icon: Award,
  fields: [
    {
      title: "Tittel på merket",
      name: "title",
      type: "string",
    },
    {
      title: "Ikon",
      name: "icon",
      type: "image",
    },
  ],
};
