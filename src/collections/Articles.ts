import { CollectionConfig } from "payload/types";

export const Articles: CollectionConfig = {
  slug: "articles",
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "title",
  },
  labels: {
    plural: "News",
    singular: "Article",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "site",
      type: "relationship",
      relationTo: "sites",
      hasMany: false,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
