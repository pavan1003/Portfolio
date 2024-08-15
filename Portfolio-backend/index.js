// Import required modules
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Import custom modules for database operations and email sending functionality
const db = require("./modules/database/db");
const { sendEmail } = require("./modules/api/nodemailer");

// Initialize an Express application
const app = express();

// Set the port for the server, default to 8888 if not specified in environment variables
const port = process.env.PORT || "8888";

// Middleware to parse URL-encoded data and JSON data from incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to set up CORS headers, allowing cross-origin requests from any domain
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader("Access-Control-Allow-Methods", "*"); // Allow all methods (GET, POST, etc.)
  res.setHeader("Access-Control-Allow-Headers", "*"); // Allow all headers
  next(); // Pass control to the next middleware/handler
});

// Route to handle GET requests to "/api/careers"
// This retrieves a list of careers from the database
app.get("/api/careers", async (req, res) => {
  let careerList = await db.getCareers();
  
  // If no careers are found, initialize the data and fetch again
  if (!careerList.length) {
    await db.initializeCareers();
    careerList = await db.getCareers();
  }
  
  // Send the list of careers as the response
  res.send(careerList);
});

// Route to handle GET requests to "/api/projects"
// This retrieves a list of projects from the database
app.get("/api/projects", async (req, res) => {
  let projectList = await db.getProjects();
  
  // If no projects are found, initialize the data and fetch again
  if (!projectList.length) {
    await db.initializeProjects();
    projectList = await db.getProjects();
  }
  
  // Send the list of projects as the response
  res.send(projectList);
});

// Route to handle GET requests to "/api/skills"
// This retrieves a list of skills from the database
app.get("/api/skills", async (req, res) => {
  let skillList = await db.getSkills();
  
  // If no skills are found, initialize the data and fetch again
  if (!skillList.length) {
    await db.initializeSkills();
    skillList = await db.getSkills();
  }
  
  // Send the list of skills as the response
  res.send(skillList);
});

// Route to handle POST requests to "/api/send-email"
// This sends an email using the provided name, email, and message from the request body
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  
  // Send email using the custom sendEmail function
  const result = await sendEmail(email, `[Contact form submission from ${name} <${email}>]`, message);
  
  // Check if the email was sent successfully and respond accordingly
  if (result.success) {
    return res.status(200).json({ message: "Email sent successfully", info: result.info });
  } else {
    return res.status(500).json({ message: "Failed to send email", error: result.error });
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
