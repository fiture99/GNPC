// server/render-server.ts
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enhanced static file finder
function findStaticPath() {
  const possiblePaths = [
    path.join(__dirname, 'public'),                    // Local: dist/public
    path.join(process.cwd(), 'dist', 'public'),        // Render: /opt/render/project/src/dist/public
    path.join(process.cwd(), 'public'),                // Alternative
    __dirname,                                         // Fallback to dist/
  ];

  console.log('🔍 ===== STATIC FILE SEARCH =====');
  console.log('📁 Server starting from:', __dirname);
  console.log('📁 Current working directory:', process.cwd());
  
  for (const testPath of possiblePaths) {
    console.log(`\n🔎 Checking: ${testPath}`);
    
    if (fs.existsSync(testPath)) {
      console.log(`   ✅ Path exists`);
      
      const files = fs.readdirSync(testPath);
      console.log(`   📂 Files:`, files);
      
      // Check for index.html
      const indexPath = path.join(testPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        console.log(`   ✅ index.html FOUND!`);
        console.log(`   🎯 USING PATH: ${testPath}`);
        return testPath;
      } else {
        console.log(`   ❌ index.html missing`);
      }
    } else {
      console.log(`   ❌ Path does not exist`);
    }
  }
  
  // Final fallback - list everything for debugging
  console.log('\n❌ CRITICAL: No valid static path found');
  console.log('📂 Files in server directory:', fs.readdirSync(__dirname));
  console.log('📂 Files in process.cwd():', fs.existsSync(process.cwd()) ? fs.readdirSync(process.cwd()) : 'Cannot access');
  
  throw new Error('NO_STATIC_FILES_FOUND');
}

const staticPath = findStaticPath();

// Serve static files
app.use(express.static(staticPath, {
  index: false, // Disable automatic index.html serving
  extensions: ['html', 'js', 'css', 'png', 'jpg'] // Explicit extensions
}));

// API health endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    serverTime: new Date().toISOString(),
    staticPath: staticPath,
    filesInStaticPath: fs.readdirSync(staticPath),
    hasIndexHtml: fs.existsSync(path.join(staticPath, 'index.html'))
  });
});

// SPA fallback - MUST be last
app.get('*', (req, res) => {
  console.log(`📄 Serving index.html for: ${req.originalUrl}`);
  res.sendFile(path.join(staticPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('\n🎉 ===== SERVER STARTED SUCCESSFULLY =====');
  console.log(`📍 Port: ${PORT}`);
  console.log(`📁 Serving from: ${staticPath}`);
  console.log(`🌐 Access: http://localhost:${PORT}`);
  console.log(`❤️  Health: http://localhost:${PORT}/api/health`);
});