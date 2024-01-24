import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
export default {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: { adapter: adapter({
    pages: 'build',
    assets: 'build',
    fallback: undefined,
    precompress: false,
    strict: true
  })}
};