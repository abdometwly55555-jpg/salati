self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('notificationclick', e => {
    e.notification.close();
    e.waitUntil(clients.matchAll({type:'window'}).then(l => {
        if (l.length) return l[0].focus();
        return clients.openWindow('/salati/');
    }));
});
