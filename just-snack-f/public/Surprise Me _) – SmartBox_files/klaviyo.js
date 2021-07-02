(function () {
  var companyId = 'Lxwg3D';

  if (window.klaviyoModulesObject) {
    console.warn('Cannot load klaviyo.js multiple times for the same site. Skipping account "' + companyId + '". Active account is "' + window.klaviyoModulesObject.companyId + '"');
    return;
  };

  window._learnq = window._learnq || [];
  window.__klKey = window.__klKey || companyId;
  window._learnq.push(['account', companyId]);

  Object.defineProperty(window, 'klaviyoModulesObject', {
    value: { companyId: companyId, loadTime: new Date() },
    enumerable: false,
  });

  var loadedAssets = {};
  function addScript(asset) {
    if (loadedAssets[asset]) return;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = asset;
    document.head.appendChild(s);
    loadedAssets[asset] = true;
  }
  function addCSS(asset) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = asset;
    document.head.appendChild(link);
  }

  var manifest = {'static': {'js': ['https://static.klaviyo.com/onsite/js/fender_analytics.979a504f66f2cc27dcf8.js', 'https://static.klaviyo.com/onsite/js/sharedUtils.ff79bf923e79d7911102.js', 'https://static.klaviyo.com/onsite/js/static.64f6d1b03a478fac848f.js']}, 'signup_forms': {'js': ['https://static.klaviyo.com/onsite/js/sharedUtils.ff79bf923e79d7911102.js', 'https://static.klaviyo.com/onsite/js/styles.e4cca842c10ad5df6926.js', 'https://static.klaviyo.com/onsite/js/sentry.e9c13b4f41b96aec7b8a.js', 'https://static.klaviyo.com/onsite/js/vendors~signup_forms.e5c0d4ab52fd526d11fb.js', 'https://static.klaviyo.com/onsite/js/signup_forms.16ac5dbe56f8a8fff6ae.js'], 'css': 'https://static.klaviyo.com/onsite/js/1.f492a3d1ada3f6002e9a.css'}};
  for (var key in manifest) {
    if (manifest.hasOwnProperty(key)) {
      var onsiteModule = manifest[key];
      for (var i = 0; i < onsiteModule.js.length; i += 1) {
        addScript(onsiteModule.js[i]);
      }
      if (onsiteModule.css) {
        addCSS(onsiteModule.css);
      }
    }
  }
})();
