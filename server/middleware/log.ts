export default defineEventHandler(event => {
  const { method, url } = event.node.req;
  console.log(`🌎 [${method}] ${url}`);
});
