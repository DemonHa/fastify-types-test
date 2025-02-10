import fastifyAutoload from "@fastify/autoload";
import fastify from "fastify";
import fastifyStatic from "fastify-static";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export const getApp = (opts?: { logger?: boolean }) => {
  const app = fastify({
    logger: opts?.logger ?? true,
  });

  app.register(fastifyStatic, {
    root: path.join(__dirname, "/../public"),
    prefix: "/public/",
  });

  app.register(fastifyAutoload, {
    dir: path.join(__dirname, "modules"),
    options: { prefix: "/v1" },
  });

  return app;
};
