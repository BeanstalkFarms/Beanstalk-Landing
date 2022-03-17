import fs from "fs";

import { getAllPostIds } from "../lib/posts"

const Sitemap = () => {};

// credit: https://enlear.academy/how-to-create-sitemaps-with-nextjs-668da9601a03
// TODO: do we have an env variable for prod vs development?
export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://bean.money",
  }[process.env.NODE_ENV];

  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.tsx",
        "_document.tsx",
        "_error.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const posts = getAllPostIds()
  console.log(posts)
  const dynamicPaths = posts.map( postParams => {
    return `${baseUrl}/posts/${postParams.params.id}`
  })

  const allPaths = [...staticPaths, ...dynamicPaths]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;