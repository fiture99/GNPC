// server/render-server.ts
import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

// Log startup information
console.log('🚀 ===== SERVER STARTUP =====');
console.log('📦 NODE_ENV:', process.env.NODE_ENV);
console.log('🔧 PORT:', PORT);
console.log('📁 Current directory:', process.cwd());

// List all files for debugging
try {
  const rootFiles = fs.readdirSync(process.cwd());
  console.log('📂 Root directory files:', rootFiles);
} catch (error) {
  console.log('❌ Cannot read root directory');
}

// Define static path - Use absolute path from project root
const staticPath = path.resolve(process.cwd(), 'dist', 'public');

console.log('🎯 Static path:', staticPath);

// Check if static path exists
if (!fs.existsSync(staticPath)) {
  console.error('💥 CRITICAL: Static path does not exist!');
  console.log('📂 Available in dist/:', fs.existsSync(path.join(process.cwd(), 'dist')) 
    ? fs.readdirSync(path.join(process.cwd(), 'dist'))
    : 'dist/ does not exist'
  );
} else {
  console.log('✅ Static path exists');
  console.log('📂 Files in static path:', fs.readdirSync(staticPath));
}

// Serve static files with explicit configuration
app.use('/assets', express.static(path.join(staticPath, 'assets')));
app.use(express.static(staticPath));

// Health endpoint - test if server is responding
app.get('/api/health', (req, res) => {
  console.log('❤️ Health check requested');
  res.json({
    status: 'OK',
    server: 'Express on Render',
    staticPath: staticPath,
    files: fs.existsSync(staticPath) ? fs.readdirSync(staticPath) : [],
    hasIndex: fs.existsSync(path.join(staticPath, 'index.html')),
    timestamp: new Date().toISOString()
  });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// SPA fallback - serve index.html for all other routes
app.get('*', (req, res) => {
  console.log('📄 Request for:', req.originalUrl);
  
  const indexPath = path.join(staticPath, 'index.html');
  
  if (fs.existsSync(indexPath)) {
    console.log('✅ Serving index.html');
    res.sendFile(indexPath);
  } else {
    console.log('❌ index.html not found at:', indexPath);
    res.status(404).json({
      error: 'File not found',
      requested: req.originalUrl,
      staticPath: staticPath,
      filesAvailable: fs.existsSync(staticPath) ? fs.readdirSync(staticPath) : 'none'
    });
  }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log('\n🎉 ===== SERVER STARTED SUCCESSFULLY =====');
  console.log(`📍 Port: ${PORT}`);
  console.log(`📁 Static path: ${staticPath}`);
  console.log(`🌐 Your App: https://gnpc.onrender.com`);
  console.log(`❤️  Health Check: https://gnpc.onrender.com/api/health`);
  console.log(`🧪 Test API: https://gnpc.onrender.com/api/test`);
  console.log(`📄 Main Page: https://gnpc.onrender.com/`);
});

console.log('🔧 Server configuration complete');