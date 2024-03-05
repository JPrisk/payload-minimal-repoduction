import { CollectionConfig } from "payload/types";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  versions: {
    drafts: true,
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
    {
      name: "featuredNews",
      type: "relationship",
      relationTo: "articles",
      hasMany: true,
      filterOptions: ({ data }) => {
        if (!data.site) {
          console.info("You must select a site before selecting articles");
          return false;
        }
        return {
          site: { equals: data.site },
          and: [
            {
              _status: { equals: "published" },
            },
          ],
        };
      },
    },
  ],
};
