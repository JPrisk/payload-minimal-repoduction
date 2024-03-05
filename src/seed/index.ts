import type { Payload } from "payload";

export const seed = async (payload: Payload): Promise<void> => {
  payload.logger.info("Seeding database...");

  payload.logger.info(`— Seeding user...`);

  await payload.create({
    collection: "users",
    data: {
      email: "demo@demo.com",
      password: "password",
    },
  });

  const siteA = await payload.create({
    collection: "sites",
    data: {
      title: "A",
    },
  });

  const siteB = await payload.create({
    collection: "sites",
    data: {
      title: "B",
    },
  });

  payload.logger.info(`— Seeding example pages...`);

  await payload.create({
    collection: "articles",
    data: {
      title: "Unpublished article [Site A]",
      site: siteA.id,
      _status: "draft",
    },
  });

  const publishedArticle = await payload.create({
    collection: "articles",
    data: {
      title: "Published article [Site A]",
      site: siteA.id,
      _status: "published",
    },
  });

  await payload.create({
    collection: "articles",
    data: {
      title: "Published article [Site B]",
      site: siteB.id,
      _status: "published",
    },
  });

  await payload.create({
    collection: "pages",
    data: {
      title: "Example page",
      site: siteA.id,
      featuredNews: [publishedArticle.id],
    },
  });
};
