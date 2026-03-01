const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2] || '.';

function getAllHtmlFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllHtmlFiles(dirPath + "/" + file, arrayOfFiles);
        } else if (file.endsWith('.html')) {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

const htmlFiles = getAllHtmlFiles(directoryPath);

const ctaSnippet = `
    <!-- ================= Mobile Sticky CTA ================= -->
    <div class="mobile-sticky-cta">
      <a href="tel:+919063484335" class="sticky-btn sticky-call"><i class="fas fa-phone"></i> Call</a>
      <a href="https://wa.me/919063484335" class="sticky-btn sticky-whatsapp">
        <i class="fab fa-whatsapp"></i> WhatsApp
      </a>
    </div>

    <!-- ================= desktop sticky cta ================= -->

    <div class="floating-contact">
      <a href="tel:+919063484335" class="float-btn call" aria-label="Call Now">
        <i class="fas fa-phone"></i>
      </a>
      <a
        href="https://wa.me/919063484335"
        target="_blank"
        class="float-btn whatsapp"
        aria-label="WhatsApp Chat"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
`;

let modifiedCount = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Check if it already has the sticky CTA
    if (!content.includes('class="mobile-sticky-cta"') && !content.includes('class="floating-contact"')) {
        // Insert before </body>
        if (content.includes('</body>')) {
            content = content.replace('</body>', `${ctaSnippet}\n  </body>`);
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated: ${file}`);
            modifiedCount++;
        } else {
            console.log(`Warning: No </body> tag found in ${file}`);
        }
    } else {
        console.log(`Skipped (Already contains CTA): ${file}`);
    }
});

console.log(`\nSuccessfully injected CTA into ${modifiedCount} files.`);
