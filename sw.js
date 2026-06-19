// ไฟล์ sw.js สำหรับทำ PWA (Progressive Web App)
self.addEventListener('install', (e) => { 
    self.skipWaiting(); 
}); 

self.addEventListener('activate', (e) => { 
    e.waitUntil(clients.claim()); 
}); 

self.addEventListener('fetch', (e) => { 
    // ยอมให้โหลดข้อมูลผ่าน Network ปกติ
    e.respondWith(fetch(e.request).catch(() => new Response('Offline'))); 
});
