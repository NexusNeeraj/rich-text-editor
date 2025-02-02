const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const FAQ = require("../models/faq.model");
const express = require("express");

// Register Mongoose Adapter
AdminJS.registerAdapter(AdminJSMongoose);

// Configure Admin Panel
const adminOptions = {
  resources: [
    {
      resource: FAQ,
      options: {
        properties: {
          answer: { type: "richtext" }, // Enables WYSIWYG support
        },
      },
    },
  ],
  branding: {
    companyName: "FAQ Admin",
  },
};

const admin = new AdminJS(adminOptions);

// Admin Route with Basic Auth
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  authenticate: async (email, password) => {
    const ADMIN_USER = "admin";
    const ADMIN_PASS = "password"; // Change this for security
    return email === ADMIN_USER && password === ADMIN_PASS ? { email } : null;
  },
  cookieName: "adminjs",
  cookiePassword: "securepassword",
}, null, {
  resave: false,
  saveUninitialized: true,
  secret: 'sessionsecret',
  cookie: { secure: false } 
});

// Express Router
const router = express.Router();
router.use(admin.options.rootPath, adminRouter);

module.exports = { admin, router };