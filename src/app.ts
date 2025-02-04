import fastify from "fastify";
import fastifyStatic from "fastify-static";
import path from "path";

export const getApp = () => {
  const app = fastify({
    logger: true,
  });

  return app.register(fastifyStatic, {
    root: path.join(__dirname, "/../public"),
    prefix: "/public/",
  });
};
