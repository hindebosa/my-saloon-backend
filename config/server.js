module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  production: true,
  cron: {
    enabled: false,
  },
  proxy: {
    enabled: true,
    ssl: true,
    host: env("HOST", "0.0.0.0"),
    port: 443,
  }, admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "8d61be0bbfc2230aecaae22fe0175e55"),
    },
  },
});
