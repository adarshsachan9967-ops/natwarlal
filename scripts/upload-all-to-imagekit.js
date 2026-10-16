const fs = require("fs");
const path = require("path");
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: "public_uzSklsoDFlGNoIPGFtTdcYJU32Y=",
  privateKey: "private_Zgjm0jSmxe2S76y3kkULZ5nzEvo=",
  urlEndpoint: "https://ik.imagekit.io/avdarinn",
});

const MANIFEST_PATH = path.join(__dirname, "../src/data/imagekit-manifest.json");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function uploadFile(filePath, folder) {
  const fileName = path.basename(filePath);
  const fileBuffer = fs.readFileSync(filePath);
  const base64File = fileBuffer.toString("base64");

  console.log(`Uploading ${fileName} (${(fileBuffer.length / 1024).toFixed(1)} KB) to ${folder}...`);

  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        file: base64File,
        fileName: fileName,
        folder: folder,
        useUniqueFileName: false,
        tags: ["natwarlal", folder.replace(/\//g, "")],
      },
      function (error, result) {
        if (error) {
          console.error(`Failed to upload ${fileName}:`, error.message);
          resolve(null);
        } else {
          console.log(`✓ Uploaded ${fileName} -> ${result.url}`);
          resolve({
            localPath: filePath,
            fileName: fileName,
            fileId: result.fileId,
            url: result.url,
            size: result.size,
            fileType: result.fileType,
          });
        }
      }
    );
  });
}

async function main() {
  console.log("=== ImageKit Mass Upload & Compression Start ===");

  const uploadedDir = path.join(__dirname, "../public/images/uploaded");
  const galleryDir = path.join(__dirname, "../public/images/gallery");
  const videosDir = path.join(__dirname, "../public/videos");

  const manifest = fs.existsSync(MANIFEST_PATH)
    ? JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"))
    : {};

  // 1. Upload all 34 real images from public/images/uploaded
  if (fs.existsSync(uploadedDir)) {
    const uploadedFiles = fs.readdirSync(uploadedDir);
    console.log(`Found ${uploadedFiles.length} files in public/images/uploaded`);

    for (const file of uploadedFiles) {
      const fullPath = path.join(uploadedDir, file);
      if (!manifest[file]) {
        const result = await uploadFile(fullPath, "/natwarlal/uploaded");
        if (result) manifest[file] = result;
        await sleep(300); // polite rate limit
      } else {
        console.log(`Already uploaded: ${file}`);
      }
    }
  }

  // 2. Upload historical gallery images from public/images/gallery
  if (fs.existsSync(galleryDir)) {
    const galleryFiles = fs.readdirSync(galleryDir);
    console.log(`Found ${galleryFiles.length} files in public/images/gallery`);

    for (const file of galleryFiles) {
      const fullPath = path.join(galleryDir, file);
      if (!manifest[file]) {
        const result = await uploadFile(fullPath, "/natwarlal/gallery");
        if (result) manifest[file] = result;
        await sleep(300);
      } else {
        console.log(`Already uploaded: ${file}`);
      }
    }
  }

  // 3. Upload all 6 videos from public/videos
  if (fs.existsSync(videosDir)) {
    const videoFiles = fs.readdirSync(videosDir);
    console.log(`Found ${videoFiles.length} files in public/videos`);

    for (const file of videoFiles) {
      const fullPath = path.join(videosDir, file);
      if (!manifest[file]) {
        const result = await uploadFile(fullPath, "/natwarlal/videos");
        if (result) manifest[file] = result;
        await sleep(1000); // videos take slightly more time
      } else {
        console.log(`Already uploaded: ${file}`);
      }
    }
  }

  // Save Manifest
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), "utf8");
  console.log(`\n=== All uploads complete! Saved ${Object.keys(manifest).length} items to manifest. ===`);
}

main().catch(console.error);
