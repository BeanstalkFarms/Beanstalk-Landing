/** @type {import('next-sitemap').IConfig} */

const siteUrl = {
  development: "http://localhost:3000",
  production: "https://bean.money",
}[process.env.NODE_ENV];

module.exports = {
  siteUrl: siteUrl || "http://localhost:3000",
  generateRobotsTxt: true,
  // ...other options
}