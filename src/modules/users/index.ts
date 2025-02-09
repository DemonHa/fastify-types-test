import type { FastifyInstanceWithPlugins } from "fastify";

import fastifyStatic from "fastify-static";

export default (
  fastify: FastifyInstanceWithPlugins<{ plugins: [typeof fastifyStatic] }>
) => {
  fastify.get("/", async (_, reply) => {
    return reply.sendFile("users.json");
  });
};
