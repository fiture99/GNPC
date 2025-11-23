import fs from "node:fs";
import path from "node:path";
import { type Server } from "node:http";
import { fileURLToPath } from 'url';

import express, { type Express } from "express";
import runApp from "./app";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function serveStatic(app: Express, _server: Server) {
  // Since your server is bundled to dist/index.js, we need to go up one level
  const distPath = path.resolve(__dirname, "public");
  
  console.log('🔍 Debug: Server file location:', __dirname);
  console.log('🔍 Debug: Looking for static files in:', distPath);
  console.log('🔍 Debug: Current working directory:', process.cwd());

  // Check if the path exists
  if (!fs.existsSync(distPath)) {
    console.error('❌ Build directory not found at:', distPath);
    
    // List what's actually in the dist directory
    const distDir = path.resolve(__dirname);
    if (fs.existsSync(distDir)) {
      console.log('📁 Files in dist directory:', fs.readdirSync(distDir));
    } else {
      console.log('❌ dist directory does not exist at:', distDir);
    }
    
    throw new Error(
      `Could not find the build directory: ${distPath}`
    );
  }

  console.log('✅ Found build directory!');
  console.log('📁 Files in public directory:', fs.readdirSync(distPath));

  // Serve static files
  app.use(express.static(distPath));

  // API routes should come before the catch-all
  // Add your API routes here if you have any

  // Fall through to index.html for SPA routing (must be last)
  app.get("*", (req, res) => {
    console.log('📄 Serving index.html for route:', req.originalUrl);
    res.sendFile(path.join(distPath, "index.html"));
  });
}

(async () => {
  await runApp(serveStatic);
})();