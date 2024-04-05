import { prepare, maps } from "binary2npm";

await prepare({
  remote: "github",
  author: "dprint",
  repository: "dprint",
  remoteToken: process.env.GITHUB_TOKEN,
  binary: "dprint",
  useVersion: false,
});
