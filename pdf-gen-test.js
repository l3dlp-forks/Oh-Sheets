var PDFDocument = require('pdfkit');
var doc = new PDFDocument("LETTER");
doc.image('resources/timesheet.png', 35, 35, {fit: [544, 729]});
doc.save();

doc.write('output/timesheet-gen.pdf');
