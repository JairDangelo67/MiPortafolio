// Script para verificar miniaturas de YouTube
const videos = [
  {
    id: 1,
    title: "MORTEM",
    videoId: "jWEGc-eD9YI",
    duration: "20:58"
  },
  {
    id: 2,
    title: "Cortometraje - 'EN MI CABEZA'",
    videoId: "6HylhLyTM0k",
    duration: "08:27"
  }
];

// Calidades de thumbnail disponibles
const qualities = ['maxresdefault', 'hqdefault', 'mqdefault', 'sddefault', 'default'];

async function testThumbnail(videoId, quality) {
  const url = `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function testAllThumbnails() {
  console.log('🔍 Probando miniaturas de YouTube...\n');
  
  for (const video of videos) {
    console.log(`📹 Video: ${video.title}`);
    console.log(`🆔 ID: ${video.videoId}`);
    
    for (const quality of qualities) {
      const isAvailable = await testThumbnail(video.videoId, quality);
      const status = isAvailable ? '✅' : '❌';
      console.log(`   ${status} ${quality}.jpg`);
    }
    
    console.log('');
  }
}

// Función para verificar si un video existe en YouTube
async function checkVideoExists(videoId) {
  try {
    const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function verifyVideos() {
  console.log('🔍 Verificando videos de YouTube...\n');
  
  for (const video of videos) {
    const exists = await checkVideoExists(video.videoId);
    const status = exists ? '✅' : '❌';
    console.log(`${status} ${video.title} (${video.videoId})`);
  }
}

// Ejecutar pruebas
console.log('🚀 Iniciando verificación de miniaturas de YouTube...\n');
testAllThumbnails().then(() => {
  console.log('✅ Verificación de miniaturas completada\n');
  return verifyVideos();
}).then(() => {
  console.log('✅ Verificación de videos completada');
});

// Función para generar URLs de prueba
function generateTestUrls() {
  console.log('\n🔗 URLs de prueba para verificar manualmente:');
  
  videos.forEach(video => {
    console.log(`\n📹 ${video.title}:`);
    qualities.forEach(quality => {
      console.log(`   https://img.youtube.com/vi/${video.videoId}/${quality}.jpg`);
    });
  });
}

// Generar URLs de prueba
generateTestUrls(); 