// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function createLoginForm() {
  var signIn = document.createElement('div');
  signIn.classList.add('sign_in');
  var loginTextName = document.createElement('h2');
  loginTextName.classList.add('login_text_name');
  loginTextName.textContent = 'Log In';
  signIn.appendChild(loginTextName);
  var loginInput = document.createElement('input');
  loginInput.classList.add('login');
  loginInput.placeholder = 'Username';
  loginInput.type = 'text';
  signIn.appendChild(loginInput);
  var passwordInput = document.createElement('input');
  passwordInput.classList.add('password');
  passwordInput.placeholder = 'Password';
  passwordInput.type = 'password';
  signIn.appendChild(passwordInput);
  var loginButton = document.createElement('button');
  loginButton.classList.add('button_login');
  loginButton.type = 'submit';
  loginButton.textContent = 'Войти';
  signIn.appendChild(loginButton);
  var noAccountButton = document.createElement('button');
  noAccountButton.id = 'button_no_account';
  noAccountButton.type = 'submit';
  noAccountButton.textContent = 'Нет аккаунта? Регистрация';
  signIn.appendChild(noAccountButton);
  document.body.appendChild(signIn);
  noAccountButton.addEventListener("click", function () {
    signIn.remove();
    SignUpForm();
  });
}
function SignUpForm() {
  var signUp = document.createElement('div');
  signUp.classList.add('sign_up');
  var registerText = document.createElement('h2');
  registerText.classList.add('register_text_name');
  registerText.textContent = 'Sign up';
  signUp.appendChild(registerText);
  var email = document.createElement('input');
  email.classList.add('email');
  email.placeholder = 'Email';
  email.type = 'text';
  email.pattern = "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(\\.[a-zA-Z]+)+";
  signUp.appendChild(email);
  email.addEventListener('input', function () {
    if (email.validity.patternMismatch || email.value === '') {
      email.style.borderBottom = '2px solid red';
    } else {
      email.style.borderBottom = '2px solid green';
    }
  });
  var registerLoginInput = document.createElement('input');
  registerLoginInput.classList.add('register_login');
  registerLoginInput.placeholder = 'Username';
  registerLoginInput.type = 'text';
  registerLoginInput.pattern = "^[a-zA-Z][a-zA-Z0-9_-]{2,14}$";
  signUp.appendChild(registerLoginInput);
  registerLoginInput.addEventListener('input', function () {
    if (registerLoginInput.validity.patternMismatch || registerLoginInput.value === '') {
      registerLoginInput.style.borderBottom = '2px solid red';
    } else {
      registerLoginInput.style.borderBottom = '2px solid green';
    }
  });
  var name = document.createElement('input');
  name.classList.add('name');
  name.placeholder = 'First name';
  name.type = 'text';
  name.pattern = "^[a-zA-Zа-яА-Я]+(-[a-zA-Zа-яА-Я]+)*$";
  signUp.appendChild(name);
  name.addEventListener('input', function () {
    if (name.validity.patternMismatch || name.value === '') {
      name.style.borderBottom = '2px solid red';
    } else {
      name.style.borderBottom = '2px solid green';
    }
  });
  var lastName = document.createElement('input');
  lastName.classList.add('lastName');
  lastName.placeholder = 'Last name';
  lastName.type = 'text';
  lastName.pattern = "^[a-zA-Zа-яА-Я]+(-[a-zA-Zа-яА-Я]+)*$";
  signUp.appendChild(lastName);
  lastName.addEventListener('input', function () {
    if (lastName.validity.patternMismatch || lastName.value === '') {
      lastName.style.borderBottom = '2px solid red';
    } else {
      lastName.style.borderBottom = '2px solid green';
    }
  });
  var phone = document.createElement('input');
  phone.classList.add('phone');
  phone.placeholder = 'Phone';
  phone.type = 'text';
  phone.pattern = '^\\+?\\d{8,15}$';
  signUp.appendChild(phone);
  phone.addEventListener('input', function () {
    if (phone.validity.patternMismatch || lastName.value === '') {
      phone.style.borderBottom = '2px solid red';
    } else {
      phone.style.borderBottom = '2px solid green';
    }
  });
  var registerPassword = document.createElement('input');
  registerPassword.classList.add('registerPassword');
  registerPassword.placeholder = 'Password';
  registerPassword.type = 'password';
  registerPassword.pattern = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\\]{};':\"\\\\|,.<>/?])[ -~]{8,30}";
  signUp.appendChild(registerPassword);
  registerPassword.addEventListener('input', function () {
    if (registerPassword.validity.patternMismatch || registerPassword.value === '') {
      registerPassword.style.borderBottom = '2px solid red';
    } else {
      registerPassword.style.borderBottom = '2px solid green';
    }
  });
  var repeatPassword = document.createElement('input');
  repeatPassword.classList.add('repeatPassword');
  repeatPassword.placeholder = 'Confirm password';
  repeatPassword.type = 'password';
  signUp.appendChild(repeatPassword);
  repeatPassword.addEventListener('input', function () {
    if (repeatPassword.value !== registerPassword.value || repeatPassword.value === '') {
      repeatPassword.style.borderBottom = '2px solid red';
    } else {
      repeatPassword.style.borderBottom = '2px solid green';
    }
  });
  var signUpButton = document.createElement('button');
  signUpButton.classList.add('button_login');
  signUpButton.type = 'submit';
  signUpButton.textContent = 'Sign Up';
  signUp.appendChild(signUpButton);
  signUpButton.addEventListener('click', function () {
    var inputList = [email, name, registerLoginInput, lastName, phone, registerPassword, repeatPassword];
    var validInputs = inputList.filter(function (input) {
      return !input.validity.patternMismatch && input.value !== '';
    });
    if (validInputs.length === inputList.length) {
      var inputData = validInputs.map(function (input) {
        return input.value;
      });
      console.log(inputData);
    }
  });
  var haveAnAccount = document.createElement('button');
  haveAnAccount.id = 'haveAnAccount';
  haveAnAccount.type = 'submit';
  haveAnAccount.textContent = 'Есть аккаунт, войти';
  signUp.appendChild(haveAnAccount);
  document.body.appendChild(signUp);
  haveAnAccount.addEventListener("click", function () {
    signUp.remove();
    createLoginForm();
  });
}
createLoginForm();
},{}],"../../.local/share/fnm/node-versions/v18.13.0/installation/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35385" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../.local/share/fnm/node-versions/v18.13.0/installation/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/auth.e31bb0bc.js.map