// https://nuxt.com/docs/api/configuration/nuxt-config
import { $app } from "./utils";
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxtjs/tailwindcss"],
  components: [{ path: "~/components", pathPrefix: false, global: true }],
  app: {
    head: {
      title: "Homepage",
      titleTemplate: `%s - ${$app.name}`,
      charset: "utf-8",
      viewport: "width=600, initial-scale=1, shrink-to-fit=no",
      meta: [
        { name: "theme-color", content: "#024285" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
        {
          name: "description",
          content: `Join our award-winning university in the historic city of ${$app.city}, with a real focus on making you not just 'Work Ready', but 'World Ready'.`,
        },
      ],
      link: [
        {
          rel: "icon",
          sizes: "48x48",
          href: "/favicon.ico",
          type: "image/x-icon",
        },
        {
          rel: "icon",
          sizes: "16x16",
          href: "/favicon-16x16.png",
          type: "image/png",
        },
        {
          rel: "icon",
          sizes: "32x32",
          href: "/favicon-32x32.png",
          type: "image/png",
        },

        {
          rel: "icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
          type: "image/png",
        },
        {
          rel: "icon",
          sizes: "192x192",
          href: "/android-chrome-192x192.png",
          type: "image/png",
        },
        {
          rel: "icon",
          sizes: "512x512",
          href: "/android-chrome-512x512.png",
          type: "image/png",
        },
        {
          rel: "stylesheet",
          href: "/fonts/fontawesome/css/all.min.css",
        },
        {
          rel: "stylesheet",
          href: "/fonts/fontawesome/css/sharp-light.min.css",
        },
        {
          rel: "stylesheet",
          href: "/fonts/fontawesome/css/sharp-solid.min.css",
        },
      ],
    },
  },

  runtimeConfig: {
    $app,
    db_url: process.env.DB_URL,
    AccessToken: process.env.ACCESS_TOKEN_SECRET,
    emailSecret: process.env.EMAIL_SECRET,
    mailer: {
      port: 465,
      secure: true,
      host: "mail.privateemail.com",
      auth: { user: $app.email, pass: process.env.EMAIL_SECRET },
    },
  },
  compatibilityDate: "2024-09-02",
});
