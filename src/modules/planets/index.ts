import { plugin } from "@fastify/autoload";
import fastifyStatic from "fastify-static";

export default plugin(
  (fastify) => {
    fastify.get("/", (_, reply) => {
      return reply.sendFile("planets.json");
    });
  },
  {
    dependencies: [fastifyStatic],
  }
);
