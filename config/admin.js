module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3610442a85a9dc62bb7fb1f401fac07e'),
  },
});
