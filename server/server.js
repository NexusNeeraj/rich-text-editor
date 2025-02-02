const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const faqRoutes = require("./routes/faq.routes");
const { admin, router: adminRouter } = require("./admin/admin");
const connectDB = require("./config/db");
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/faqs", faqRoutes);
app.use(admin.options.rootPath, adminRouter);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
