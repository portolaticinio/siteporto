import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const foldersToProcess = ["src/assets"];

const outputRoot = "src/assets_optimized";

let successCount = 0;
let errorCount = 0;
let skippedCount = 0;

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function processFolder(folder) {
  if (!fs.existsSync(folder)) {
    console.log(`⚠️ Pasta não encontrada: ${folder}`);
    return;
  }

  const items = fs.readdirSync(folder);

  for (const item of items) {
    const fullPath = path.join(folder, item);
    const stats = fs.statSync(fullPath);

    // Processa subpastas
    if (stats.isDirectory()) {
      await processFolder(fullPath);
      continue;
    }

    // Apenas PNG, JPG e JPEG
    if (!/\.(png|jpg|jpeg)$/i.test(item)) {
      skippedCount++;
      continue;
    }

    const relativeFolder = path.relative("src/assets", folder);

    const outputFolder = path.join(
      outputRoot,
      relativeFolder
    );

    ensureDirSync(outputFolder);

    const baseName = path.parse(item).name;

    const outputFile = path.join(
      outputFolder,
      `${baseName}.webp`
    );

    try {
      console.log(`\nProcessando: ${fullPath}`);

      await sharp(fullPath)
        .webp({
          quality: 80,
        })
        .toFile(outputFile);

      console.log(
        `✅ Convertido: ${fullPath} → ${outputFile}`
      );

      successCount++;
    } catch (error) {
      console.error(`❌ Erro ao converter: ${fullPath}`);
      console.error(error.message);

      errorCount++;
    }
  }
}

async function main() {
  console.log("🚀 Iniciando otimização das imagens...\n");

  for (const folder of foldersToProcess) {
    await processFolder(folder);
  }

  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📊 RESULTADO");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`✅ Convertidas: ${successCount}`);
  console.log(`❌ Erros: ${errorCount}`);
  console.log(`⏭️ Ignoradas: ${skippedCount}`);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  if (errorCount === 0) {
    console.log("\n🎉 Conversão concluída com sucesso!");
  } else {
    console.log("\n⚠️ Algumas imagens apresentaram erro.");
  }
}

main();