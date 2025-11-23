// server/render-server.ts
import express from 'express';
import path from 'path';
import fs from 'fs';

console.log('🔧 Starting server initialization...');

// Global error handler to catch crashes
process.on('uncaughtException', (error) => {
  console.error('💥 UNCAUGHT EXCEPTION:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 UNHANDLED REJECTION at:', promise, 'reason:', reason);
  process.exit(1);
});

try {
  const app = express();
  const PORT = process.env.PORT || 3000;

  console.log('📦 Environment:', process.env.NODE_ENV);
  console.log('🔧 Port:', PORT);
  console.log('📁 Current directory:', process.cwd());

  // Check what exists in the current directory
  try {
    const files = fs.readdirSync(process.cwd());
    console.log('📂 Files in root:', files);
  } catch (error) {
    console.log('❌ Cannot read root directory:', error);
  }

  // Check dist directory
  const distPath = path.join(process.cwd(), 'dist');
  let distExists = false;
  try {
    distExists = fs.existsSync(distPath);
    console.log('📁 dist/ exists:', distExists);
    if (distExists) {
      const distFiles = fs.readdirSync(distPath);
      console.log('📂 Files in dist/:', distFiles);
    }
  } catch (error) {
    console.log('❌ Cannot read dist directory:', error);
  }

  // Check dist/public directory
  const publicPath = path.join(distPath, 'public');
  let publicExists = false;
  try {
    publicExists = fs.existsSync(publicPath);
    console.log('📁 dist/public/ exists:', publicExists);
    if (publicExists) {
      const publicFiles = fs.readdirSync(publicPath);
      console.log('📂 Files in dist/public/:', publicFiles);
    }
  } catch (error) {
    console.log('❌ Cannot read public directory:', error);
  }

  // Set static path
  let staticPath = publicPath;
  if (!publicExists && distExists) {
    // Fallback to dist/ if public/ doesn't exist
    staticPath = distPath;
    console.log('🔄 Falling back to dist/ as static path');
  }

  console.log('🎯 Final static path:', staticPath);

  // Serve static files
  app.use(express.static(staticPath));

  // Health endpoint - always works
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'OK',
      message: 'Server is running!',
      staticPath: staticPath,
      timestamp: new Date().toISOString()
    });
  });

  // SPA fallback - only if index.html exists
  app.get('*', (req, res) => {
    const indexPath = path.join(staticPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).json({
        error: 'Index file not found',
        staticPath: staticPath,
        files: fs.existsSync(staticPath) ? fs.readdirSync(staticPath) : 'Path not accessible'
      });
    }
  });

  // Start server
  app.listen(PORT, '0.0.0.0', () => {
    console.log('\n🎉 SERVER STARTED SUCCESSFULLY!');
    console.log(`📍 Port: ${PORT}`);
    console.log(`📁 Serving from: ${staticPath}`);
    console.log(`🌐 Health: https://gnpc.onrender.com/api/health`);
  });

} catch (error) {
  console.error('💥 SERVER STARTUP FAILED:', error);
  process.exit(1);
}