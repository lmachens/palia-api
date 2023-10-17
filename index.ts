import { fetchNodes } from "./routes/nodes/route";
import { fetchWeeklyWants } from "./routes/weekly-wants/route";

console.log("Starting server");
const server = Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/nodes")) return fetchNodes(req);
    if (url.pathname.startsWith("/weekly-wants")) return fetchWeeklyWants(req);
    return new Response("Not found", { status: 404 });
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});
console.log("Server started", server.id);
