const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const generatePlaceholder = (width, height, text, filename) => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, width, height);

  // Add gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#6366f1');
  gradient.addColorStop(1, '#818cf8');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, height / 2, width, height / 2);

  // Add text
  ctx.fillStyle = '#000000';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(filename, buffer);
};

const placeholders = [
  { name: 'placeholder-1', text: 'Dr. Sarah Chen' },
  { name: 'placeholder-2', text: 'Michael Roberts' },
  { name: 'placeholder-3', text: 'Dr. James Wilson' }
];

// Create team directory if it doesn't exist
const teamDir = path.join(__dirname, '../public/images/team');
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
}

// Generate placeholders
placeholders.forEach(({ name, text }) => {
  const filename = path.join(teamDir, `${name}.jpg`);
  generatePlaceholder(400, 500, text, filename);
  console.log(`Generated ${filename}`);
});
