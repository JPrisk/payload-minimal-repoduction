import { CollectionConfig } from "payload/types";

export const Sites: CollectionConfig = {
  slug: "sites",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
  ],
};
