const sharp = require('sharp');
const fs = require('fs');

async function processImage() {
  const input = 'public/logo.png';
  const output = 'public/favicon-large.png';

  console.log(`Processing ${input}...`);
  try {
    const image = sharp(input);
    
    // Trim transparent pixels from borders
    await image
      .trim()
      .toFile(output);
      
    console.log(`Saved optimized favicon to ${output}`);
  } catch (error) {
    console.error('Error processing image:', error);
    process.exit(1);
  }
}

processImage();
