// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cFWjG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "8e76394d41f51bca";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1jwFz":[function(require,module,exports) {
var _indexScss = require("./scss/index.scss");
var _copyClipboardJs = require("./javascript/copy-clipboard.js");
var _goatCounterJs = require("./javascript/goat-counter.js");
var _embedYtLiteJs = require("./javascript/embed-yt-lite.js");

},{"./scss/index.scss":"b5Vku","./javascript/copy-clipboard.js":"k1vnI","./javascript/goat-counter.js":"PyZA7","./javascript/embed-yt-lite.js":"bALW9"}],"b5Vku":[function() {},{}],"k1vnI":[function(require,module,exports) {
const copyButtonLabel = "Copy";
// use a class selector if available
let blocks = document.querySelectorAll("pre");
blocks.forEach((block)=>{
    // only add a button if browser supports Clipboard API
    if (navigator.clipboard) {
        let button = document.createElement("button");
        button.innerText = copyButtonLabel;
        button.classList.add("clipboard");
        button.addEventListener("click", copyCode);
        block.appendChild(button);
    }
});
async function copyCode(event) {
    const button = event.srcElement;
    button.innerText = "Copied";
    setTimeout(()=>{
        button.innerText = copyButtonLabel;
    }, 5000);
    const pre = button.parentElement;
    let code = pre.querySelector("code");
    let text = code.innerText;
    await navigator.clipboard.writeText(text);
}

},{}],"PyZA7":[function(require,module,exports) {
// GoatCounter: https://www.goatcounter.com
// This file (and *only* this file) is released under the ISC license:
// https://opensource.org/licenses/ISC
(function() {
    "use strict";
    if (window.goatcounter && window.goatcounter.vars) window.goatcounter = window.goatcounter.vars;
    else window.goatcounter = window.goatcounter || {};
    // Load settings from data-goatcounter-settings.
    var s = document.querySelector("body[data-goatcounter]");
    if (s && s.dataset.goatcounterSettings) {
        try {
            var set = JSON.parse(s.dataset.goatcounterSettings);
        } catch (err) {
            console.error("invalid JSON in data-goatcounter-settings: " + err);
        }
        for(var k in set)if ([
            "no_onload",
            "no_events",
            "allow_local",
            "allow_frame",
            "path",
            "title",
            "referrer",
            "event"
        ].indexOf(k) > -1) window.goatcounter[k] = set[k];
    }
    var enc = encodeURIComponent;
    // Get all data we're going to send off to the counter endpoint.
    var get_data = function(vars) {
        var data = {
            p: vars.path === undefined ? goatcounter.path : vars.path,
            r: vars.referrer === undefined ? goatcounter.referrer : vars.referrer,
            t: vars.title === undefined ? goatcounter.title : vars.title,
            e: !!(vars.event || goatcounter.event),
            s: [
                window.screen.width,
                window.screen.height,
                window.devicePixelRatio || 1
            ],
            b: is_bot(),
            q: location.search
        };
        var rcb, pcb, tcb // Save callbacks to apply later.
        ;
        if (typeof data.r === "function") rcb = data.r;
        if (typeof data.t === "function") tcb = data.t;
        if (typeof data.p === "function") pcb = data.p;
        if (is_empty(data.r)) data.r = document.referrer;
        if (is_empty(data.t)) data.t = document.title;
        if (is_empty(data.p)) data.p = get_path();
        if (rcb) data.r = rcb(data.r);
        if (tcb) data.t = tcb(data.t);
        if (pcb) data.p = pcb(data.p);
        return data;
    };
    // Check if a value is "empty" for the purpose of get_data().
    var is_empty = function(v) {
        return v === null || v === undefined || typeof v === "function";
    };
    // See if this looks like a bot; there is some additional filtering on the
    // backend, but these properties can't be fetched from there.
    var is_bot = function() {
        // Headless browsers are probably a bot.
        var w = window, d = document;
        if (w.callPhantom || w._phantom || w.phantom) return 150;
        if (w.__nightmare) return 151;
        if (d.__selenium_unwrapped || d.__webdriver_evaluate || d.__driver_evaluate) return 152;
        if (navigator.webdriver) return 153;
        return 0;
    };
    // Object to urlencoded string, starting with a ?.
    var urlencode = function(obj) {
        var p = [];
        for(var k in obj)if (obj[k] !== "" && obj[k] !== null && obj[k] !== undefined && obj[k] !== false) p.push(enc(k) + "=" + enc(obj[k]));
        return "?" + p.join("&");
    };
    // Show a warning in the console.
    var warn = function(msg) {
        if (console && "warn" in console) console.warn("goatcounter: " + msg);
    };
    // Get the endpoint to send requests to.
    var get_endpoint = function() {
        var s = document.querySelector("script[data-goatcounter]");
        if (s && s.dataset.goatcounter) return s.dataset.goatcounter;
        return goatcounter.endpoint || window.counter // counter is for compat; don't use.
        ;
    };
    // Get current path.
    var get_path = function() {
        var loc = location, c = document.querySelector('link[rel="canonical"][href]');
        if (c) {
            var a = document.createElement("a");
            a.href = c.href;
            if (a.hostname.replace(/^www\./, "") === location.hostname.replace(/^www\./, "")) loc = a;
        }
        return loc.pathname + loc.search || "/";
    };
    // Run function after DOM is loaded.
    var on_load = function(f) {
        if (document.body === null) document.addEventListener("DOMContentLoaded", function() {
            f();
        }, false);
        else f();
    };
    // Filter some requests that we (probably) don't want to count.
    goatcounter.filter = function() {
        if ("visibilityState" in document && document.visibilityState === "prerender") return "visibilityState";
        if (!goatcounter.allow_frame && location !== parent.location) return "frame";
        if (!goatcounter.allow_local && location.hostname.match(/(localhost$|^127\.|^10\.|^172\.(1[6-9]|2[0-9]|3[0-1])\.|^192\.168\.|^0\.0\.0\.0$)/)) return "localhost";
        if (!goatcounter.allow_local && location.protocol === "file:") return "localfile";
        if (localStorage && localStorage.getItem("skipgc") === "t") return "disabled with #toggle-goatcounter";
        return false;
    };
    // Get URL to send to GoatCounter.
    window.goatcounter.url = function(vars) {
        var data = get_data(vars || {});
        if (data.p === null) return;
        data.rnd = Math.random().toString(36).substr(2, 5) // Browsers don't always listen to Cache-Control.
        ;
        var endpoint = get_endpoint();
        if (!endpoint) return warn("no endpoint found");
        return endpoint + urlencode(data);
    };
    // Count a hit.
    window.goatcounter.count = function(vars) {
        var f = goatcounter.filter();
        if (f) return warn("not counting because of: " + f);
        var url = goatcounter.url(vars);
        if (!url) return warn("not counting because path callback returned null");
        var img = document.createElement("img");
        img.src = url;
        img.style.position = "absolute" // Affect layout less.
        ;
        img.style.bottom = "0px";
        img.style.width = "1px";
        img.style.height = "1px";
        img.loading = "eager";
        img.setAttribute("alt", "");
        img.setAttribute("aria-hidden", "true");
        var rm = function() {
            if (img && img.parentNode) img.parentNode.removeChild(img);
        };
        img.addEventListener("load", rm, false);
        document.body.appendChild(img);
    };
    // Get a query parameter.
    window.goatcounter.get_query = function(name) {
        var s = location.search.substr(1).split("&");
        for(var i = 0; i < s.length; i++)if (s[i].toLowerCase().indexOf(name.toLowerCase() + "=") === 0) return s[i].substr(name.length + 1);
    };
    // Track click events.
    window.goatcounter.bind_events = function() {
        if (!document.querySelectorAll) return;
        var send = function(elem) {
            return function() {
                goatcounter.count({
                    event: true,
                    path: elem.dataset.goatcounterClick || elem.name || elem.id || "",
                    title: elem.dataset.goatcounterTitle || elem.title || (elem.innerHTML || "").substr(0, 200) || "",
                    referrer: elem.dataset.goatcounterReferrer || elem.dataset.goatcounterReferral || ""
                });
            };
        };
        Array.prototype.slice.call(document.querySelectorAll("*[data-goatcounter-click]")).forEach(function(elem) {
            if (elem.dataset.goatcounterBound) return;
            var f = send(elem);
            elem.addEventListener("click", f, false);
            elem.addEventListener("auxclick", f, false) // Middle click.
            ;
            elem.dataset.goatcounterBound = "true";
        });
    };
    // Add a "visitor counter" frame or image.
    window.goatcounter.visit_count = function(opt) {
        on_load(function() {
            opt = opt || {};
            opt.type = opt.type || "html";
            opt.append = opt.append || "body";
            opt.path = opt.path || get_path();
            opt.attr = opt.attr || {
                width: "200",
                height: opt.no_branding ? "60" : "80"
            };
            opt.attr["src"] = get_endpoint() + "er/" + enc(opt.path) + "." + enc(opt.type) + "?";
            if (opt.no_branding) opt.attr["src"] += "&no_branding=1";
            if (opt.style) opt.attr["src"] += "&style=" + enc(opt.style);
            if (opt.start) opt.attr["src"] += "&start=" + enc(opt.start);
            if (opt.end) opt.attr["src"] += "&end=" + enc(opt.end);
            var tag = {
                png: "img",
                svg: "img",
                html: "iframe"
            }[opt.type];
            if (!tag) return warn("visit_count: unknown type: " + opt.type);
            if (opt.type === "html") {
                opt.attr["frameborder"] = "0";
                opt.attr["scrolling"] = "no";
            }
            var d = document.createElement(tag);
            for(var k in opt.attr)d.setAttribute(k, opt.attr[k]);
            var p = document.querySelector(opt.append);
            if (!p) return warn("visit_count: append not found: " + opt.append);
            p.appendChild(d);
        });
    };
    // Make it easy to skip your own views.
    if (location.hash === "#toggle-goatcounter") {
        if (localStorage.getItem("skipgc") === "t") {
            localStorage.removeItem("skipgc", "t");
            alert("GoatCounter tracking is now ENABLED in this browser.");
        } else {
            localStorage.setItem("skipgc", "t");
            alert("GoatCounter tracking is now DISABLED in this browser until " + location + " is loaded again.");
        }
    }
    if (!goatcounter.no_onload) on_load(function() {
        // 1. Page is visible, count request.
        // 2. Page is not yet visible; wait until it switches to 'visible' and count.
        // See #487
        if (!("visibilityState" in document) || document.visibilityState === "visible") goatcounter.count();
        else {
            var f = function(e) {
                if (document.visibilityState !== "visible") return;
                document.removeEventListener("visibilitychange", f);
                goatcounter.count();
            };
            document.addEventListener("visibilitychange", f);
        }
        if (!goatcounter.no_events) goatcounter.bind_events();
    });
})();

},{}],"bALW9":[function(require,module,exports) {
/**
 * A lightweight youtube embed. Still should feel the same to the user, just MUCH faster to initialize and paint.
 *
 * Thx to these as the inspiration
 *   https://storage.googleapis.com/amp-vs-non-amp/youtube-lazy.html
 *   https://autoplay-youtube-player.glitch.me/
 *
 * Once built it, I also found these:
 *   https://github.com/ampproject/amphtml/blob/master/extensions/amp-youtube (👍👍)
 *   https://github.com/Daugilas/lazyYT
 *   https://github.com/vb/lazyframe
 */ class LiteYTEmbed extends HTMLElement {
    connectedCallback() {
        this.videoId = this.getAttribute("videoid");
        let playBtnEl = this.querySelector(".lty-playbtn");
        // A label for the button takes priority over a [playlabel] attribute on the custom-element
        this.playLabel = playBtnEl && playBtnEl.textContent.trim() || this.getAttribute("playlabel") || "Play";
        // Set up play button, and its visually hidden label
        if (!playBtnEl) {
            playBtnEl = document.createElement("button");
            playBtnEl.type = "button";
            playBtnEl.classList.add("lty-playbtn");
            this.append(playBtnEl);
        }
        if (!playBtnEl.textContent) {
            const playBtnLabelEl = document.createElement("span");
            playBtnLabelEl.className = "lyt-visually-hidden";
            playBtnLabelEl.textContent = this.playLabel;
            playBtnEl.append(playBtnLabelEl);
        }
        playBtnEl.removeAttribute("href");
        // On hover (or tap), warm up the TCP connections we're (likely) about to use.
        this.addEventListener("pointerover", LiteYTEmbed.warmConnections, {
            once: true
        });
        // Once the user clicks, add the real iframe and drop our play button
        // TODO: In the future we could be like amp-youtube and silently swap in the iframe during idle time
        //   We'd want to only do this for in-viewport or near-viewport ones: https://github.com/ampproject/amphtml/pull/5003
        this.addEventListener("click", this.addIframe);
        // Press play with a suer defined element
        document.querySelector(".start-youtube").addEventListener("click", (event)=>{
            playBtnEl.click();
            event.stopPropagation();
        });
        // Chrome & Edge desktop have no problem with the basic YouTube Embed with ?autoplay=1
        // However Safari desktop and most/all mobile browsers do not successfully track the user gesture of clicking through the creation/loading of the iframe,
        // so they don't autoplay automatically. Instead we must load an additional 2 sequential JS files (1KB + 165KB) (un-br) for the YT Player API
        // TODO: Try loading the the YT API in parallel with our iframe and then attaching/playing it. #82
        this.needsYTApiForAutoplay = navigator.vendor.includes("Apple") || navigator.userAgent.includes("Mobi");
    }
    /**
     * Add a <link rel={preload | preconnect} ...> to the head
     */ static addPrefetch(kind, url, as) {
        const linkEl = document.createElement("link");
        linkEl.rel = kind;
        linkEl.href = url;
        if (as) linkEl.as = as;
        document.head.append(linkEl);
    }
    /**
     * Begin pre-connecting to warm up the iframe load
     * Since the embed's network requests load within its iframe,
     *   preload/prefetch'ing them outside the iframe will only cause double-downloads.
     * So, the best we can do is warm up a few connections to origins that are in the critical path.
     *
     * Maybe `<link rel=preload as=document>` would work, but it's unsupported: http://crbug.com/593267
     * But TBH, I don't think it'll happen soon with Site Isolation and split caches adding serious complexity.
     */ static warmConnections() {
        if (LiteYTEmbed.preconnected) return;
        // The iframe document and most of its subresources come right off youtube.com
        LiteYTEmbed.addPrefetch("preconnect", "https://www.youtube-nocookie.com");
        // The botguard script is fetched off from google.com
        LiteYTEmbed.addPrefetch("preconnect", "https://www.google.com");
        // Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling.
        LiteYTEmbed.addPrefetch("preconnect", "https://googleads.g.doubleclick.net");
        LiteYTEmbed.addPrefetch("preconnect", "https://static.doubleclick.net");
        LiteYTEmbed.preconnected = true;
    }
    fetchYTPlayerApi() {
        if (window.YT || window.YT && window.YT.Player) return;
        this.ytApiPromise = new Promise((res, rej)=>{
            var el = document.createElement("script");
            el.src = "https://www.youtube.com/iframe_api";
            el.async = true;
            el.onload = (_)=>{
                YT.ready(res);
            };
            el.onerror = rej;
            this.append(el);
        });
    }
    async addYTPlayerIframe(params) {
        this.fetchYTPlayerApi();
        await this.ytApiPromise;
        const videoPlaceholderEl = document.createElement("div");
        this.append(videoPlaceholderEl);
        const paramsObj = Object.fromEntries(params.entries());
        new YT.Player(videoPlaceholderEl, {
            width: "100%",
            videoId: this.videoId,
            playerVars: paramsObj,
            events: {
                "onReady": (event)=>{
                    event.target.playVideo();
                }
            }
        });
    }
    async addIframe() {
        if (this.classList.contains("lyt-activated")) return;
        this.classList.add("lyt-activated");
        const params = new URLSearchParams(this.getAttribute("params") || []);
        params.append("autoplay", "1");
        params.append("playsinline", "1");
        if (this.needsYTApiForAutoplay) return this.addYTPlayerIframe(params);
        const iframeEl = document.createElement("iframe");
        iframeEl.width = 560;
        iframeEl.height = 315;
        // No encoding necessary as [title] is safe. https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#:~:text=Safe%20HTML%20Attributes%20include
        iframeEl.title = this.playLabel;
        iframeEl.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
        iframeEl.allowFullscreen = true;
        // AFAIK, the encoding here isn't necessary for XSS, but we'll do it only because this is a URL
        // https://stackoverflow.com/q/64959723/89484
        iframeEl.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${params.toString()}`;
        this.append(iframeEl);
        // Set focus for a11y
        iframeEl.focus();
    }
}
// Register custom element
customElements.define("lite-youtube", LiteYTEmbed);

},{}]},["cFWjG","1jwFz"], "1jwFz", "parcelRequire94c2")

//# sourceMappingURL=index.js.map
