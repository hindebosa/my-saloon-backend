module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2db785e93ec2e02ad474817a40e7df74'),
  },
});
