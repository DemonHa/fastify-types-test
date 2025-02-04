import { getApp } from "./app";

const app = getApp();

app.route({
  method: "GET",
  url: "/hi",
  handler: async (_, reply) => {
    return reply.sendFile("text.txt");
  },
});

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
