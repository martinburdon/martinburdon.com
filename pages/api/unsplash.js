import Unsplash, { toJson } from 'unsplash-js';

let unsplash;

export default async (_, res) => {
  if (!unsplash) {
    unsplash = new Unsplash({
      accessKey: process.env.UNSPLASH_ACCESS_TOKEN
    });
  }

  const userStats = await unsplash.users.statistics('mtburdon');
  const { downloads, views } = await toJson(userStats);

  return res.status(200).json({
    downloads: downloads?.total || 'N/A',
    views: views?.total || 'N/A'
  });
};
