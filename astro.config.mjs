// @ts-check
import {defineConfig, envField} from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({mode:"directory"}),
  experimental: {
    env: {
      schema: {
        SECRET: envField.string({
          context: "server",
          access: "secret",
        }),
      },
      validateSecrets: true,
    }
  }
});
