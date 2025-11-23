import fs from "node:fs";
import path from "node:path";
import { type Server } from "node:http";
import { fileURLToPath } from 'url';

import express, { type Express } from "express";
import runApp from "./app";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function serveStatic(app: Express, _server: Server) {
  console.log('🔍 Debug Information:');
  console.log('  - Server file location:', __dirname);
  console.log('  - Current working directory:', process.cwd());
  
  // Try multiple possible locations for static files
  const possiblePaths = [
    path.join(__dirname, 'public'),                    // dist/public
    path.join(process.cwd(), 'dist', 'public'),        // /opt/render/project/src/dist/public
    path.join(process.cwd(), 'public'),                // /opt/render/project/src/public
    __dirname,                                         // dist/ (if files are moved)
  ];

  let staticPath = '';
  
  // Check which path exists
  for (const testPath of possiblePaths) {
    console.log(`  - Checking: ${testPath}`);
    if (fs.existsSync(testPath)) {
      staticPath = testPath;
      console.log(`  ✅ Found static files at: ${staticPath}`);
      console.log(`  📁 Contents:`, fs.readdirSync(staticPath));
      break;
    }
  }

  if (!staticPath) {
    console.error('❌ Could not find static files in any location');
    // List all files in current directory for debugging
    console.log('📁 Files in server directory:', fs.readdirSync(__dirname));
    console.log('📁 Files in process.cwd():', fs.readdirSync(process.cwd()));
    throw new Error('Static files not found after build');
  }

  // Serve static files
  app.use(express.static(staticPath));

  // SPA fallback - serve index.html for all routes
  app.get("*", (req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send('Index.html not found');
    }
  });
}

(async () => {
  await runApp(serveStatic);
})();