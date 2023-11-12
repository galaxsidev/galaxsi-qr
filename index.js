const QRCode = require('qrcode');

// Define the data for the QR code
const data = 'https://youtube.com/@matgalaxsi';

// Options for the QR Code
const options = {
  errorCorrectionLevel: 'H',
  type: 'image/png',
  quality: 0.95,
  margin: 1,
};

// Generate QR code and save as an image file
QRCode.toFile('qr.png', data, options, function (err) {
  if (err) throw err;
  console.log('QR code generated and saved as qr.png');
});
