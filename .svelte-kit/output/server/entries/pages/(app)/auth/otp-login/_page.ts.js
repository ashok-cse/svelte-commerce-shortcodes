const prerender = false;
async function load({ url, params, fetch, parent, context }) {
  const ref = url.searchParams.get("ref");
  const { store, me } = await parent();
  return {
    me,
    store,
    ref
  };
}
export {
  load,
  prerender
};
