import fastify from "fastify";
import fastifyStatic from "fastify-static";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export const getApp = () => {
  const app = fastify({
    logger: true,
  });

  return app.register(fastifyStatic, {
    root: path.join(__dirname, "/../public"),
    prefix: "/public/",
  });
};
