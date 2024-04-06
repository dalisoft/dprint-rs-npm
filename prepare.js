import { prepare, maps } from "binary2npm";

maps.os.linux = "linux-gnu";

await prepare({
  remote: "github",
  author: "dprint",
  repository: "dprint",
  remoteToken: process.env.GITHUB_TOKEN,
  binary: "dprint",
  orders: ["binary", "arch", "vendor", "os"],
});
