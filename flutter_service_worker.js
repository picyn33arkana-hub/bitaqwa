'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "385788449ab61d4118a6175e3604ac5f",
"version.json": "b2eabaf2d4ce72a63599e9167b4d9f6d",
"index.html": "37134968d9bd1c8ab13f59dcaa9091f3",
"/": "37134968d9bd1c8ab13f59dcaa9091f3",
"main.dart.js": "fa1e82e5eb7452a679f60031e38c508f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "35ad203bcd957937a05ab3bc2c85fc60",
"assets/AssetManifest.json": "180dad8209f10ac4c48419fa161e4613",
"assets/NOTICES": "4cf3a289a32ad6e2fa40d6d60df4d3eb",
"assets/FontManifest.json": "946b8843f37f974edc56614a9934098d",
"assets/AssetManifest.bin.json": "da20b4a1dd9e0e9dd7ed296985b5a2df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "316474815ed38d397f336875fd1f4e00",
"assets/fonts/MaterialIcons-Regular.otf": "8573cf723ff6b62c6dcb9a954312b045",
"assets/assets/images/ic_doa_sholat.png": "36eaf10cd8bb4cd1d7705cf511008107",
"assets/assets/images/bg_header_dashboard_morning.png": "2c9e90291df804b9110c02e280609cbc",
"assets/assets/images/ic_doa_makanan_minuman.png": "606af2b7edde192834b4c8e09a0f807d",
"assets/assets/images/pagi.jpg": "baebbfe44b3c7887a5b1e45e8c62f5db",
"assets/assets/images/bg_header_dashboard_night.png": "0ce7151c936c61340671cd824cb1b803",
"assets/assets/images/ic_menu_doa.png": "976b2b28e05b4ec8130f235c62dc2edb",
"assets/assets/images/ic_doa_perjalanan.png": "57bd5461d1ca2c7ad502fb98f389b47a",
"assets/assets/images/ic_doa_etika_baik.png": "d834182d4a0b3f06cec3eee501f1cbaf",
"assets/assets/images/semangat.jpg": "9032385090581535d97f6fe77426f121",
"assets/assets/images/ic_menu_video_kajian.png": "26be27c75c0a5d379b0aff2181792f3b",
"assets/assets/images/ic_doa_rumah.png": "1b78fd342f66e6a6391fbdb5e6c9960c",
"assets/assets/images/img_icon.png": "0dbb27259e1b2ef0968822ed972e90da",
"assets/assets/images/siang.jpg": "a539307d59535e45b683c37a4ccc5704",
"assets/assets/images/ic_menu_dzikir.png": "b262f4ea91fd661f0194899545dcd4c1",
"assets/assets/images/kebaikan.jpg": "dced8095abc137accede7b279b34094c",
"assets/assets/images/ic_menu_jadwal_sholat.png": "51d85cb37727ee84db1c00b0627ffb31",
"assets/assets/images/ic_doa_pagi_malam.png": "456305c05da54745c179195a876c2411",
"assets/assets/images/img_clock.png": "08382f5ac46df94092f866e0be0c17c3",
"assets/assets/images/bg_detail_doa.png": "6c4e70be464baaa779fc1d9ae99fb6d3",
"assets/assets/images/bg_header_dashboard_afternoon.png": "269a5d97dccdabff53317f2572b39cc5",
"assets/assets/images/malam.jpeg": "58c66c0f6440e4fe59fd692819a15f71",
"assets/assets/images/ic_play_video_kajian.png": "b4c74653bfc4205b1bd90efb7305b368",
"assets/assets/images/ic_menu_zakat.png": "7b0ff9cb90b196447eb050f98a71ec19",
"assets/assets/images/bg_header_doa.png": "88fd44184795a695c128e2f3b1b6cde0",
"assets/assets/images/bg_header_zakat.png": "3d4310122fa2af190b72b048db9e3c0d",
"assets/assets/images/thumbnail_video_kajian_5.jpg": "34f211cbc46750053c0327d063dec821",
"assets/assets/images/bg_header_jadwal_sholat.png": "ef92b3efcacf04b22797e72e6d4982a0",
"assets/assets/images/img_inspiration.png": "fc13cd78e9561502a1696831c01595df",
"assets/assets/images/thumbnail_video_kajian_4.jpg": "199c45d65c82a3b0e1e64f9c4bd051c1",
"assets/assets/images/thumbnail_video_kajian_1.jpg": "fe1a6f891023966b969b749defad5235",
"assets/assets/images/thumbnail_video_kajian_3.jpg": "4776b40dcc650f70f75bd0ac8676308f",
"assets/assets/images/thumbnail_video_kajian_2.jpg": "1e0192faac05a5ff520cf7225d9c0ba2",
"assets/assets/images/bebas.jpg": "9d73bfdab40447ae9f834160a385ff13",
"assets/assets/fonts/poppins_light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins_medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins_bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins_regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins_semi_bold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins_thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/assets/fonts/poppins_italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
