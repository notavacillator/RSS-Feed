import cors from "cors";
import express from "express";
import RSSparser from "rss-parser";

const feedURL = "https://netflixtechblog.com/feed";

const parser = new RSSparser();

// Contains all the articles from the feed
let articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);
  console.log("Feed title" + feed.title);

  feed.items.forEach((item) => articles.push(item));
};

parse(feedURL);

let app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(articles);
});

const server = app.listen("4000", () => {
  console.log("App is listening to http://localhost:4000");
});

export default server;
