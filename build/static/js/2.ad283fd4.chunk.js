/*! For license information please see 2.ad283fd4.chunk.js.LICENSE.txt */
(this['webpackJsonpfp-haskell-test'] = this['webpackJsonpfp-haskell-test'] || []).push([
  [2],
  [
    function (e, t, n) {
      'use strict';
      e.exports = n(41);
    },
    function (e, t, n) {
      'use strict';
      e.exports = n(35);
    },
    function (e, t, n) {
      'use strict';
      n.r(t),
        function (e) {
          n.d(t, 'ServerStyleSheet', function () {
            return Fe;
          }),
            n.d(t, 'StyleSheetConsumer', function () {
              return oe;
            }),
            n.d(t, 'StyleSheetContext', function () {
              return re;
            }),
            n.d(t, 'StyleSheetManager', function () {
              return se;
            }),
            n.d(t, 'ThemeConsumer', function () {
              return Ne;
            }),
            n.d(t, 'ThemeContext', function () {
              return Ae;
            }),
            n.d(t, 'ThemeProvider', function () {
              return Re;
            }),
            n.d(t, '__PRIVATE__', function () {
              return $e;
            }),
            n.d(t, 'createGlobalStyle', function () {
              return ze;
            }),
            n.d(t, 'css', function () {
              return be;
            }),
            n.d(t, 'isStyledComponent', function () {
              return w;
            }),
            n.d(t, 'keyframes', function () {
              return Me;
            }),
            n.d(t, 'useTheme', function () {
              return Be;
            }),
            n.d(t, 'version', function () {
              return S;
            }),
            n.d(t, 'withTheme', function () {
              return Ue;
            });
          var r = n(14),
            o = n(1),
            a = n.n(o),
            i = n(31),
            l = n.n(i),
            u = n(32),
            c = n(33),
            s = n(26),
            f = n(15),
            d = n.n(f);
          function p() {
            return (p =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
          }
          var h = function (e, t) {
              for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
              return n;
            },
            v = function (e) {
              return (
                null !== e &&
                'object' == typeof e &&
                '[object Object]' === (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
                !Object(r.typeOf)(e)
              );
            },
            m = Object.freeze([]),
            g = Object.freeze({});
          function y(e) {
            return 'function' == typeof e;
          }
          function b(e) {
            return e.displayName || e.name || 'Component';
          }
          function w(e) {
            return e && 'string' == typeof e.styledComponentId;
          }
          var k =
              ('undefined' != typeof e &&
                (Object({
                  NODE_ENV: 'production',
                  PUBLIC_URL: '/fp-haskell-test',
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }).REACT_APP_SC_ATTR ||
                  Object({
                    NODE_ENV: 'production',
                    PUBLIC_URL: '/fp-haskell-test',
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }).SC_ATTR)) ||
              'data-styled',
            S = '5.2.3',
            E = 'undefined' != typeof window && 'HTMLElement' in window,
            C = Boolean(
              'boolean' == typeof SC_DISABLE_SPEEDY
                ? SC_DISABLE_SPEEDY
                : 'undefined' != typeof e &&
                  void 0 !==
                    Object({
                      NODE_ENV: 'production',
                      PUBLIC_URL: '/fp-haskell-test',
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                    }).REACT_APP_SC_DISABLE_SPEEDY &&
                  '' !==
                    Object({
                      NODE_ENV: 'production',
                      PUBLIC_URL: '/fp-haskell-test',
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                    }).REACT_APP_SC_DISABLE_SPEEDY
                ? 'false' !==
                    Object({
                      NODE_ENV: 'production',
                      PUBLIC_URL: '/fp-haskell-test',
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                    }).REACT_APP_SC_DISABLE_SPEEDY &&
                  Object({
                    NODE_ENV: 'production',
                    PUBLIC_URL: '/fp-haskell-test',
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }).REACT_APP_SC_DISABLE_SPEEDY
                : 'undefined' != typeof e &&
                  void 0 !==
                    Object({
                      NODE_ENV: 'production',
                      PUBLIC_URL: '/fp-haskell-test',
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                    }).SC_DISABLE_SPEEDY &&
                  '' !==
                    Object({
                      NODE_ENV: 'production',
                      PUBLIC_URL: '/fp-haskell-test',
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                    }).SC_DISABLE_SPEEDY &&
                  'false' !==
                    Object({
                      NODE_ENV: 'production',
                      PUBLIC_URL: '/fp-haskell-test',
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                    }).SC_DISABLE_SPEEDY &&
                  Object({
                    NODE_ENV: 'production',
                    PUBLIC_URL: '/fp-haskell-test',
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }).SC_DISABLE_SPEEDY
            ),
            x = {};
          function _(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            throw new Error(
              'An error occurred. See https://git.io/JUIaE#' +
                e +
                ' for more information.' +
                (n.length > 0 ? ' Args: ' + n.join(', ') : '')
            );
          }
          var O = (function () {
              function e(e) {
                (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e);
              }
              var t = e.prototype;
              return (
                (t.indexOfGroup = function (e) {
                  for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                  return t;
                }),
                (t.insertRules = function (e, t) {
                  if (e >= this.groupSizes.length) {
                    for (var n = this.groupSizes, r = n.length, o = r; e >= o; ) (o <<= 1) < 0 && _(16, '' + e);
                    (this.groupSizes = new Uint32Array(o)), this.groupSizes.set(n), (this.length = o);
                    for (var a = r; a < o; a++) this.groupSizes[a] = 0;
                  }
                  for (var i = this.indexOfGroup(e + 1), l = 0, u = t.length; l < u; l++)
                    this.tag.insertRule(i, t[l]) && (this.groupSizes[e]++, i++);
                }),
                (t.clearGroup = function (e) {
                  if (e < this.length) {
                    var t = this.groupSizes[e],
                      n = this.indexOfGroup(e),
                      r = n + t;
                    this.groupSizes[e] = 0;
                    for (var o = n; o < r; o++) this.tag.deleteRule(n);
                  }
                }),
                (t.getGroup = function (e) {
                  var t = '';
                  if (e >= this.length || 0 === this.groupSizes[e]) return t;
                  for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, a = r; a < o; a++)
                    t += this.tag.getRule(a) + '/*!sc*/\n';
                  return t;
                }),
                e
              );
            })(),
            P = new Map(),
            T = new Map(),
            A = 1,
            N = function (e) {
              if (P.has(e)) return P.get(e);
              for (; T.has(A); ) A++;
              var t = A++;
              return P.set(e, t), T.set(t, e), t;
            },
            R = function (e) {
              return T.get(e);
            },
            j = function (e, t) {
              P.set(e, t), T.set(t, e);
            },
            L = 'style[' + k + '][data-styled-version="5.2.3"]',
            D = new RegExp('^' + k + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
            I = function (e, t, n) {
              for (var r, o = n.split(','), a = 0, i = o.length; a < i; a++) (r = o[a]) && e.registerName(t, r);
            },
            z = function (e, t) {
              for (var n = t.innerHTML.split('/*!sc*/\n'), r = [], o = 0, a = n.length; o < a; o++) {
                var i = n[o].trim();
                if (i) {
                  var l = i.match(D);
                  if (l) {
                    var u = 0 | parseInt(l[1], 10),
                      c = l[2];
                    0 !== u && (j(c, u), I(e, c, l[3]), e.getTag().insertRules(u, r)), (r.length = 0);
                  } else r.push(i);
                }
              }
            },
            M = function () {
              return 'undefined' != typeof window && void 0 !== window.__webpack_nonce__
                ? window.__webpack_nonce__
                : null;
            },
            F = function (e) {
              var t = document.head,
                n = e || t,
                r = document.createElement('style'),
                o = (function (e) {
                  for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                    var r = t[n];
                    if (r && 1 === r.nodeType && r.hasAttribute(k)) return r;
                  }
                })(n),
                a = void 0 !== o ? o.nextSibling : null;
              r.setAttribute(k, 'active'), r.setAttribute('data-styled-version', '5.2.3');
              var i = M();
              return i && r.setAttribute('nonce', i), n.insertBefore(r, a), r;
            },
            U = (function () {
              function e(e) {
                var t = (this.element = F(e));
                t.appendChild(document.createTextNode('')),
                  (this.sheet = (function (e) {
                    if (e.sheet) return e.sheet;
                    for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                      var o = t[n];
                      if (o.ownerNode === e) return o;
                    }
                    _(17);
                  })(t)),
                  (this.length = 0);
              }
              var t = e.prototype;
              return (
                (t.insertRule = function (e, t) {
                  try {
                    return this.sheet.insertRule(t, e), this.length++, !0;
                  } catch (e) {
                    return !1;
                  }
                }),
                (t.deleteRule = function (e) {
                  this.sheet.deleteRule(e), this.length--;
                }),
                (t.getRule = function (e) {
                  var t = this.sheet.cssRules[e];
                  return void 0 !== t && 'string' == typeof t.cssText ? t.cssText : '';
                }),
                e
              );
            })(),
            B = (function () {
              function e(e) {
                var t = (this.element = F(e));
                (this.nodes = t.childNodes), (this.length = 0);
              }
              var t = e.prototype;
              return (
                (t.insertRule = function (e, t) {
                  if (e <= this.length && e >= 0) {
                    var n = document.createTextNode(t),
                      r = this.nodes[e];
                    return this.element.insertBefore(n, r || null), this.length++, !0;
                  }
                  return !1;
                }),
                (t.deleteRule = function (e) {
                  this.element.removeChild(this.nodes[e]), this.length--;
                }),
                (t.getRule = function (e) {
                  return e < this.length ? this.nodes[e].textContent : '';
                }),
                e
              );
            })(),
            $ = (function () {
              function e(e) {
                (this.rules = []), (this.length = 0);
              }
              var t = e.prototype;
              return (
                (t.insertRule = function (e, t) {
                  return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
                }),
                (t.deleteRule = function (e) {
                  this.rules.splice(e, 1), this.length--;
                }),
                (t.getRule = function (e) {
                  return e < this.length ? this.rules[e] : '';
                }),
                e
              );
            })(),
            W = E,
            H = { isServer: !E, useCSSOMInjection: !C },
            V = (function () {
              function e(e, t, n) {
                void 0 === e && (e = g),
                  void 0 === t && (t = {}),
                  (this.options = p({}, H, {}, e)),
                  (this.gs = t),
                  (this.names = new Map(n)),
                  !this.options.isServer &&
                    E &&
                    W &&
                    ((W = !1),
                    (function (e) {
                      for (var t = document.querySelectorAll(L), n = 0, r = t.length; n < r; n++) {
                        var o = t[n];
                        o && 'active' !== o.getAttribute(k) && (z(e, o), o.parentNode && o.parentNode.removeChild(o));
                      }
                    })(this));
              }
              e.registerId = function (e) {
                return N(e);
              };
              var t = e.prototype;
              return (
                (t.reconstructWithOptions = function (t, n) {
                  return (
                    void 0 === n && (n = !0), new e(p({}, this.options, {}, t), this.gs, (n && this.names) || void 0)
                  );
                }),
                (t.allocateGSInstance = function (e) {
                  return (this.gs[e] = (this.gs[e] || 0) + 1);
                }),
                (t.getTag = function () {
                  return (
                    this.tag ||
                    (this.tag =
                      ((n = (t = this.options).isServer),
                      (r = t.useCSSOMInjection),
                      (o = t.target),
                      (e = n ? new $(o) : r ? new U(o) : new B(o)),
                      new O(e)))
                  );
                  var e, t, n, r, o;
                }),
                (t.hasNameForId = function (e, t) {
                  return this.names.has(e) && this.names.get(e).has(t);
                }),
                (t.registerName = function (e, t) {
                  if ((N(e), this.names.has(e))) this.names.get(e).add(t);
                  else {
                    var n = new Set();
                    n.add(t), this.names.set(e, n);
                  }
                }),
                (t.insertRules = function (e, t, n) {
                  this.registerName(e, t), this.getTag().insertRules(N(e), n);
                }),
                (t.clearNames = function (e) {
                  this.names.has(e) && this.names.get(e).clear();
                }),
                (t.clearRules = function (e) {
                  this.getTag().clearGroup(N(e)), this.clearNames(e);
                }),
                (t.clearTag = function () {
                  this.tag = void 0;
                }),
                (t.toString = function () {
                  return (function (e) {
                    for (var t = e.getTag(), n = t.length, r = '', o = 0; o < n; o++) {
                      var a = R(o);
                      if (void 0 !== a) {
                        var i = e.names.get(a),
                          l = t.getGroup(o);
                        if (void 0 !== i && 0 !== l.length) {
                          var u = k + '.g' + o + '[id="' + a + '"]',
                            c = '';
                          void 0 !== i &&
                            i.forEach(function (e) {
                              e.length > 0 && (c += e + ',');
                            }),
                            (r += '' + l + u + '{content:"' + c + '"}/*!sc*/\n');
                        }
                      }
                    }
                    return r;
                  })(this);
                }),
                e
              );
            })(),
            K = /(a)(d)/gi,
            Q = function (e) {
              return String.fromCharCode(e + (e > 25 ? 39 : 97));
            };
          function q(e) {
            var t,
              n = '';
            for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Q(t % 52) + n;
            return (Q(t % 52) + n).replace(K, '$1-$2');
          }
          var G = function (e, t) {
              for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
              return e;
            },
            Y = function (e) {
              return G(5381, e);
            };
          function X(e) {
            for (var t = 0; t < e.length; t += 1) {
              var n = e[t];
              if (y(n) && !w(n)) return !1;
            }
            return !0;
          }
          var J = Y('5.2.3'),
            Z = (function () {
              function e(e, t, n) {
                (this.rules = e),
                  (this.staticRulesId = ''),
                  (this.isStatic = (void 0 === n || n.isStatic) && X(e)),
                  (this.componentId = t),
                  (this.baseHash = G(J, t)),
                  (this.baseStyle = n),
                  V.registerId(t);
              }
              return (
                (e.prototype.generateAndInjectStyles = function (e, t, n) {
                  var r = this.componentId,
                    o = [];
                  if (
                    (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
                    this.isStatic && !n.hash)
                  )
                    if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);
                    else {
                      var a = ye(this.rules, e, t, n).join(''),
                        i = q(G(this.baseHash, a.length) >>> 0);
                      if (!t.hasNameForId(r, i)) {
                        var l = n(a, '.' + i, void 0, r);
                        t.insertRules(r, i, l);
                      }
                      o.push(i), (this.staticRulesId = i);
                    }
                  else {
                    for (var u = this.rules.length, c = G(this.baseHash, n.hash), s = '', f = 0; f < u; f++) {
                      var d = this.rules[f];
                      if ('string' == typeof d) s += d;
                      else if (d) {
                        var p = ye(d, e, t, n),
                          h = Array.isArray(p) ? p.join('') : p;
                        (c = G(c, h + f)), (s += h);
                      }
                    }
                    if (s) {
                      var v = q(c >>> 0);
                      if (!t.hasNameForId(r, v)) {
                        var m = n(s, '.' + v, void 0, r);
                        t.insertRules(r, v, m);
                      }
                      o.push(v);
                    }
                  }
                  return o.join(' ');
                }),
                e
              );
            })(),
            ee = /^\s*\/\/.*$/gm,
            te = [':', '[', '.', '#'];
          function ne(e) {
            var t,
              n,
              r,
              o,
              a = void 0 === e ? g : e,
              i = a.options,
              l = void 0 === i ? g : i,
              c = a.plugins,
              s = void 0 === c ? m : c,
              f = new u.a(l),
              d = [],
              p = (function (e) {
                function t(t) {
                  if (t)
                    try {
                      e(t + '}');
                    } catch (e) {}
                }
                return function (n, r, o, a, i, l, u, c, s, f) {
                  switch (n) {
                    case 1:
                      if (0 === s && 64 === r.charCodeAt(0)) return e(r + ';'), '';
                      break;
                    case 2:
                      if (0 === c) return r + '/*|*/';
                      break;
                    case 3:
                      switch (c) {
                        case 102:
                        case 112:
                          return e(o[0] + r), '';
                        default:
                          return r + (0 === f ? '/*|*/' : '');
                      }
                    case -2:
                      r.split('/*|*/}').forEach(t);
                  }
                };
              })(function (e) {
                d.push(e);
              }),
              h = function (e, r, a) {
                return (0 === r && -1 !== te.indexOf(a[n.length])) || a.match(o) ? e : '.' + t;
              };
            function v(e, a, i, l) {
              void 0 === l && (l = '&');
              var u = e.replace(ee, ''),
                c = a && i ? i + ' ' + a + ' { ' + u + ' }' : u;
              return (
                (t = l),
                (n = a),
                (r = new RegExp('\\' + n + '\\b', 'g')),
                (o = new RegExp('(\\' + n + '\\b){2,}')),
                f(i || !a ? '' : a, c)
              );
            }
            return (
              f.use(
                [].concat(s, [
                  function (e, t, o) {
                    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, h));
                  },
                  p,
                  function (e) {
                    if (-2 === e) {
                      var t = d;
                      return (d = []), t;
                    }
                  },
                ])
              ),
              (v.hash = s.length
                ? s
                    .reduce(function (e, t) {
                      return t.name || _(15), G(e, t.name);
                    }, 5381)
                    .toString()
                : ''),
              v
            );
          }
          var re = a.a.createContext(),
            oe = re.Consumer,
            ae = a.a.createContext(),
            ie = (ae.Consumer, new V()),
            le = ne();
          function ue() {
            return Object(o.useContext)(re) || ie;
          }
          function ce() {
            return Object(o.useContext)(ae) || le;
          }
          function se(e) {
            var t = Object(o.useState)(e.stylisPlugins),
              n = t[0],
              r = t[1],
              i = ue(),
              u = Object(o.useMemo)(
                function () {
                  var t = i;
                  return (
                    e.sheet ? (t = e.sheet) : e.target && (t = t.reconstructWithOptions({ target: e.target }, !1)),
                    e.disableCSSOMInjection && (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                    t
                  );
                },
                [e.disableCSSOMInjection, e.sheet, e.target]
              ),
              c = Object(o.useMemo)(
                function () {
                  return ne({ options: { prefix: !e.disableVendorPrefixes }, plugins: n });
                },
                [e.disableVendorPrefixes, n]
              );
            return (
              Object(o.useEffect)(
                function () {
                  l()(n, e.stylisPlugins) || r(e.stylisPlugins);
                },
                [e.stylisPlugins]
              ),
              a.a.createElement(re.Provider, { value: u }, a.a.createElement(ae.Provider, { value: c }, e.children))
            );
          }
          var fe = (function () {
              function e(e, t) {
                var n = this;
                (this.inject = function (e, t) {
                  void 0 === t && (t = le);
                  var r = n.name + t.hash;
                  e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, '@keyframes'));
                }),
                  (this.toString = function () {
                    return _(12, String(n.name));
                  }),
                  (this.name = e),
                  (this.id = 'sc-keyframes-' + e),
                  (this.rules = t);
              }
              return (
                (e.prototype.getName = function (e) {
                  return void 0 === e && (e = le), this.name + e.hash;
                }),
                e
              );
            })(),
            de = /([A-Z])/,
            pe = /([A-Z])/g,
            he = /^ms-/,
            ve = function (e) {
              return '-' + e.toLowerCase();
            };
          function me(e) {
            return de.test(e) ? e.replace(pe, ve).replace(he, '-ms-') : e;
          }
          var ge = function (e) {
            return null == e || !1 === e || '' === e;
          };
          function ye(e, t, n, r) {
            if (Array.isArray(e)) {
              for (var o, a = [], i = 0, l = e.length; i < l; i += 1)
                '' !== (o = ye(e[i], t, n, r)) && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
              return a;
            }
            return ge(e)
              ? ''
              : w(e)
              ? '.' + e.styledComponentId
              : y(e)
              ? 'function' != typeof (u = e) || (u.prototype && u.prototype.isReactComponent) || !t
                ? e
                : ye(e(t), t, n, r)
              : e instanceof fe
              ? n
                ? (e.inject(n, r), e.getName(r))
                : e
              : v(e)
              ? (function e(t, n) {
                  var r,
                    o,
                    a = [];
                  for (var i in t)
                    t.hasOwnProperty(i) &&
                      !ge(t[i]) &&
                      (v(t[i])
                        ? a.push.apply(a, e(t[i], i))
                        : y(t[i])
                        ? a.push(me(i) + ':', t[i], ';')
                        : a.push(
                            me(i) +
                              ': ' +
                              ((r = i),
                              (null == (o = t[i]) || 'boolean' == typeof o || '' === o
                                ? ''
                                : 'number' != typeof o || 0 === o || r in c.a
                                ? String(o).trim()
                                : o + 'px') + ';')
                          ));
                  return n ? [n + ' {'].concat(a, ['}']) : a;
                })(e)
              : e.toString();
            var u;
          }
          function be(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return y(e) || v(e)
              ? ye(h(m, [e].concat(n)))
              : 0 === n.length && 1 === e.length && 'string' == typeof e[0]
              ? e
              : ye(h(e, n));
          }
          new Set();
          var we = function (e, t, n) {
              return void 0 === n && (n = g), (e.theme !== n.theme && e.theme) || t || n.theme;
            },
            ke = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
            Se = /(^-|-$)/g;
          function Ee(e) {
            return e.replace(ke, '-').replace(Se, '');
          }
          var Ce = function (e) {
            return q(Y(e) >>> 0);
          };
          function xe(e) {
            return 'string' == typeof e && !0;
          }
          var _e = function (e) {
              return 'function' == typeof e || ('object' == typeof e && null !== e && !Array.isArray(e));
            },
            Oe = function (e) {
              return '__proto__' !== e && 'constructor' !== e && 'prototype' !== e;
            };
          function Pe(e, t, n) {
            var r = e[n];
            _e(t) && _e(r) ? Te(r, t) : (e[n] = t);
          }
          function Te(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            for (var o = 0, a = n; o < a.length; o++) {
              var i = a[o];
              if (_e(i)) for (var l in i) Oe(l) && Pe(e, i[l], l);
            }
            return e;
          }
          var Ae = a.a.createContext(),
            Ne = Ae.Consumer;
          function Re(e) {
            var t = Object(o.useContext)(Ae),
              n = Object(o.useMemo)(
                function () {
                  return (function (e, t) {
                    return e
                      ? y(e)
                        ? e(t)
                        : Array.isArray(e) || 'object' != typeof e
                        ? _(8)
                        : t
                        ? p({}, t, {}, e)
                        : e
                      : _(14);
                  })(e.theme, t);
                },
                [e.theme, t]
              );
            return e.children ? a.a.createElement(Ae.Provider, { value: n }, e.children) : null;
          }
          var je = {};
          function Le(e, t, n) {
            var r = w(e),
              i = !xe(e),
              l = t.attrs,
              u = void 0 === l ? m : l,
              c = t.componentId,
              f =
                void 0 === c
                  ? (function (e, t) {
                      var n = 'string' != typeof e ? 'sc' : Ee(e);
                      je[n] = (je[n] || 0) + 1;
                      var r = n + '-' + Ce('5.2.3' + n + je[n]);
                      return t ? t + '-' + r : r;
                    })(t.displayName, t.parentComponentId)
                  : c,
              h = t.displayName,
              v =
                void 0 === h
                  ? (function (e) {
                      return xe(e) ? 'styled.' + e : 'Styled(' + b(e) + ')';
                    })(e)
                  : h,
              k = t.displayName && t.componentId ? Ee(t.displayName) + '-' + t.componentId : t.componentId || f,
              S = r && e.attrs ? Array.prototype.concat(e.attrs, u).filter(Boolean) : u,
              E = t.shouldForwardProp;
            r &&
              e.shouldForwardProp &&
              (E = t.shouldForwardProp
                ? function (n, r) {
                    return e.shouldForwardProp(n, r) && t.shouldForwardProp(n, r);
                  }
                : e.shouldForwardProp);
            var C,
              x = new Z(n, k, r ? e.componentStyle : void 0),
              _ = x.isStatic && 0 === u.length,
              O = function (e, t) {
                return (function (e, t, n, r) {
                  var a = e.attrs,
                    i = e.componentStyle,
                    l = e.defaultProps,
                    u = e.foldedComponentIds,
                    c = e.shouldForwardProp,
                    f = e.styledComponentId,
                    d = e.target,
                    h = (function (e, t, n) {
                      void 0 === e && (e = g);
                      var r = p({}, t, { theme: e }),
                        o = {};
                      return (
                        n.forEach(function (e) {
                          var t,
                            n,
                            a,
                            i = e;
                          for (t in (y(i) && (i = i(r)), i))
                            r[t] = o[t] =
                              'className' === t ? ((n = o[t]), (a = i[t]), n && a ? n + ' ' + a : n || a) : i[t];
                        }),
                        [r, o]
                      );
                    })(we(t, Object(o.useContext)(Ae), l) || g, t, a),
                    v = h[0],
                    m = h[1],
                    b = (function (e, t, n, r) {
                      var o = ue(),
                        a = ce();
                      return t ? e.generateAndInjectStyles(g, o, a) : e.generateAndInjectStyles(n, o, a);
                    })(i, r, v),
                    w = n,
                    k = m.$as || t.$as || m.as || t.as || d,
                    S = xe(k),
                    E = m !== t ? p({}, t, {}, m) : t,
                    C = {};
                  for (var x in E)
                    '$' !== x[0] &&
                      'as' !== x &&
                      ('forwardedAs' === x ? (C.as = E[x]) : (c ? c(x, s.a) : !S || Object(s.a)(x)) && (C[x] = E[x]));
                  return (
                    t.style && m.style !== t.style && (C.style = p({}, t.style, {}, m.style)),
                    (C.className = Array.prototype
                      .concat(u, f, b !== f ? b : null, t.className, m.className)
                      .filter(Boolean)
                      .join(' ')),
                    (C.ref = w),
                    Object(o.createElement)(k, C)
                  );
                })(C, e, t, _);
              };
            return (
              (O.displayName = v),
              ((C = a.a.forwardRef(O)).attrs = S),
              (C.componentStyle = x),
              (C.displayName = v),
              (C.shouldForwardProp = E),
              (C.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : m),
              (C.styledComponentId = k),
              (C.target = r ? e.target : e),
              (C.withComponent = function (e) {
                var r = t.componentId,
                  o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      o = {},
                      a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                  })(t, ['componentId']),
                  a = r && r + '-' + (xe(e) ? e : Ee(b(e)));
                return Le(e, p({}, o, { attrs: S, componentId: a }), n);
              }),
              Object.defineProperty(C, 'defaultProps', {
                get: function () {
                  return this._foldedDefaultProps;
                },
                set: function (t) {
                  this._foldedDefaultProps = r ? Te({}, e.defaultProps, t) : t;
                },
              }),
              (C.toString = function () {
                return '.' + C.styledComponentId;
              }),
              i &&
                d()(C, e, {
                  attrs: !0,
                  componentStyle: !0,
                  displayName: !0,
                  foldedComponentIds: !0,
                  shouldForwardProp: !0,
                  styledComponentId: !0,
                  target: !0,
                  withComponent: !0,
                }),
              C
            );
          }
          var De = function (e) {
            return (function e(t, n, o) {
              if ((void 0 === o && (o = g), !Object(r.isValidElementType)(n))) return _(1, String(n));
              var a = function () {
                return t(n, o, be.apply(void 0, arguments));
              };
              return (
                (a.withConfig = function (r) {
                  return e(t, n, p({}, o, {}, r));
                }),
                (a.attrs = function (r) {
                  return e(t, n, p({}, o, { attrs: Array.prototype.concat(o.attrs, r).filter(Boolean) }));
                }),
                a
              );
            })(Le, e);
          };
          [
            'a',
            'abbr',
            'address',
            'area',
            'article',
            'aside',
            'audio',
            'b',
            'base',
            'bdi',
            'bdo',
            'big',
            'blockquote',
            'body',
            'br',
            'button',
            'canvas',
            'caption',
            'cite',
            'code',
            'col',
            'colgroup',
            'data',
            'datalist',
            'dd',
            'del',
            'details',
            'dfn',
            'dialog',
            'div',
            'dl',
            'dt',
            'em',
            'embed',
            'fieldset',
            'figcaption',
            'figure',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'head',
            'header',
            'hgroup',
            'hr',
            'html',
            'i',
            'iframe',
            'img',
            'input',
            'ins',
            'kbd',
            'keygen',
            'label',
            'legend',
            'li',
            'link',
            'main',
            'map',
            'mark',
            'marquee',
            'menu',
            'menuitem',
            'meta',
            'meter',
            'nav',
            'noscript',
            'object',
            'ol',
            'optgroup',
            'option',
            'output',
            'p',
            'param',
            'picture',
            'pre',
            'progress',
            'q',
            'rp',
            'rt',
            'ruby',
            's',
            'samp',
            'script',
            'section',
            'select',
            'small',
            'source',
            'span',
            'strong',
            'style',
            'sub',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'title',
            'tr',
            'track',
            'u',
            'ul',
            'var',
            'video',
            'wbr',
            'circle',
            'clipPath',
            'defs',
            'ellipse',
            'foreignObject',
            'g',
            'image',
            'line',
            'linearGradient',
            'marker',
            'mask',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialGradient',
            'rect',
            'stop',
            'svg',
            'text',
            'tspan',
          ].forEach(function (e) {
            De[e] = De(e);
          });
          var Ie = (function () {
            function e(e, t) {
              (this.rules = e), (this.componentId = t), (this.isStatic = X(e)), V.registerId(this.componentId + 1);
            }
            var t = e.prototype;
            return (
              (t.createStyles = function (e, t, n, r) {
                var o = r(ye(this.rules, t, n, r).join(''), ''),
                  a = this.componentId + e;
                n.insertRules(a, a, o);
              }),
              (t.removeStyles = function (e, t) {
                t.clearRules(this.componentId + e);
              }),
              (t.renderStyles = function (e, t, n, r) {
                e > 2 && V.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
              }),
              e
            );
          })();
          function ze(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            var i = be.apply(void 0, [e].concat(n)),
              l = 'sc-global-' + Ce(JSON.stringify(i)),
              u = new Ie(i, l);
            function c(e) {
              var t = ue(),
                n = ce(),
                r = Object(o.useContext)(Ae),
                a = Object(o.useRef)(t.allocateGSInstance(l)).current;
              return (
                Object(o.useLayoutEffect)(
                  function () {
                    return (
                      s(a, e, t, r, n),
                      function () {
                        return u.removeStyles(a, t);
                      }
                    );
                  },
                  [a, e, t, r, n]
                ),
                null
              );
            }
            function s(e, t, n, r, o) {
              if (u.isStatic) u.renderStyles(e, x, n, o);
              else {
                var a = p({}, t, { theme: we(t, r, c.defaultProps) });
                u.renderStyles(e, a, n, o);
              }
            }
            return a.a.memo(c);
          }
          function Me(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            var o = be.apply(void 0, [e].concat(n)).join(''),
              a = Ce(o);
            return new fe(a, o);
          }
          var Fe = (function () {
              function e() {
                var e = this;
                (this._emitSheetCSS = function () {
                  var t = e.instance.toString(),
                    n = M();
                  return (
                    '<style ' +
                    [n && 'nonce="' + n + '"', k + '="true"', 'data-styled-version="5.2.3"'].filter(Boolean).join(' ') +
                    '>' +
                    t +
                    '</style>'
                  );
                }),
                  (this.getStyleTags = function () {
                    return e.sealed ? _(2) : e._emitSheetCSS();
                  }),
                  (this.getStyleElement = function () {
                    var t;
                    if (e.sealed) return _(2);
                    var n =
                        (((t = {})[k] = ''),
                        (t['data-styled-version'] = '5.2.3'),
                        (t.dangerouslySetInnerHTML = { __html: e.instance.toString() }),
                        t),
                      r = M();
                    return r && (n.nonce = r), [a.a.createElement('style', p({}, n, { key: 'sc-0-0' }))];
                  }),
                  (this.seal = function () {
                    e.sealed = !0;
                  }),
                  (this.instance = new V({ isServer: !0 })),
                  (this.sealed = !1);
              }
              var t = e.prototype;
              return (
                (t.collectStyles = function (e) {
                  return this.sealed ? _(2) : a.a.createElement(se, { sheet: this.instance }, e);
                }),
                (t.interleaveWithNodeStream = function (e) {
                  return _(3);
                }),
                e
              );
            })(),
            Ue = function (e) {
              var t = a.a.forwardRef(function (t, n) {
                var r = Object(o.useContext)(Ae),
                  i = e.defaultProps,
                  l = we(t, r, i);
                return a.a.createElement(e, p({}, t, { theme: l, ref: n }));
              });
              return d()(t, e), (t.displayName = 'WithTheme(' + b(e) + ')'), t;
            },
            Be = function () {
              return Object(o.useContext)(Ae);
            },
            $e = { StyleSheet: V, masterSheet: ie };
          t.default = De;
        }.call(this, n(39));
    },
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return b;
      }),
        n.d(t, 'b', function () {
          return v;
        }),
        n.d(t, 'c', function () {
          return x;
        }),
        n.d(t, 'd', function () {
          return h;
        }),
        n.d(t, 'e', function () {
          return y;
        }),
        n.d(t, 'f', function () {
          return O;
        });
      var r = n(8),
        o = n(1),
        a = n.n(o),
        i = (n(11), n(9)),
        l = n(24),
        u = n(7),
        c = n(5),
        s = n(25),
        f = n.n(s),
        d = (n(14), n(13)),
        p =
          (n(15),
          (function (e) {
            var t = Object(l.a)();
            return (t.displayName = e), t;
          })('Router-History')),
        h = (function (e) {
          var t = Object(l.a)();
          return (t.displayName = e), t;
        })('Router'),
        v = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = { location: t.history.location }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              t.staticContext ||
                (n.unlisten = t.history.listen(function (e) {
                  n._isMounted ? n.setState({ location: e }) : (n._pendingLocation = e);
                })),
              n
            );
          }
          Object(r.a)(t, e),
            (t.computeRootMatch = function (e) {
              return { path: '/', url: '/', params: {}, isExact: '/' === e };
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              (this._isMounted = !0), this._pendingLocation && this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
              this.unlisten && this.unlisten();
            }),
            (n.render = function () {
              return a.a.createElement(
                h.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: t.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                a.a.createElement(p.Provider, { children: this.props.children || null, value: this.props.history })
              );
            }),
            t
          );
        })(a.a.Component);
      a.a.Component;
      a.a.Component;
      var m = {},
        g = 0;
      function y(e, t) {
        void 0 === t && (t = {}), ('string' === typeof t || Array.isArray(t)) && (t = { path: t });
        var n = t,
          r = n.path,
          o = n.exact,
          a = void 0 !== o && o,
          i = n.strict,
          l = void 0 !== i && i,
          u = n.sensitive,
          c = void 0 !== u && u;
        return [].concat(r).reduce(function (t, n) {
          if (!n && '' !== n) return null;
          if (t) return t;
          var r = (function (e, t) {
              var n = '' + t.end + t.strict + t.sensitive,
                r = m[n] || (m[n] = {});
              if (r[e]) return r[e];
              var o = [],
                a = { regexp: f()(e, o, t), keys: o };
              return g < 1e4 && ((r[e] = a), g++), a;
            })(n, { end: a, strict: l, sensitive: c }),
            o = r.regexp,
            i = r.keys,
            u = o.exec(e);
          if (!u) return null;
          var s = u[0],
            d = u.slice(1),
            p = e === s;
          return a && !p
            ? null
            : {
                path: n,
                url: '/' === n && '' === s ? '/' : s,
                isExact: p,
                params: i.reduce(function (e, t, n) {
                  return (e[t.name] = d[n]), e;
                }, {}),
              };
        }, null);
      }
      var b = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          Object(r.a)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return a.a.createElement(h.Consumer, null, function (t) {
              t || Object(u.a)(!1);
              var n = e.props.location || t.location,
                r = e.props.computedMatch ? e.props.computedMatch : e.props.path ? y(n.pathname, e.props) : t.match,
                o = Object(c.a)({}, t, { location: n, match: r }),
                i = e.props,
                l = i.children,
                s = i.component,
                f = i.render;
              return (
                Array.isArray(l) && 0 === l.length && (l = null),
                a.a.createElement(
                  h.Provider,
                  { value: o },
                  o.match
                    ? l
                      ? 'function' === typeof l
                        ? l(o)
                        : l
                      : s
                      ? a.a.createElement(s, o)
                      : f
                      ? f(o)
                      : null
                    : 'function' === typeof l
                    ? l(o)
                    : null
                )
              );
            });
          }),
          t
        );
      })(a.a.Component);
      function w(e) {
        return '/' === e.charAt(0) ? e : '/' + e;
      }
      function k(e, t) {
        if (!e) return t;
        var n = w(e);
        return 0 !== t.pathname.indexOf(n) ? t : Object(c.a)({}, t, { pathname: t.pathname.substr(n.length) });
      }
      function S(e) {
        return 'string' === typeof e ? e : Object(i.e)(e);
      }
      function E(e) {
        return function () {
          Object(u.a)(!1);
        };
      }
      function C() {}
      a.a.Component;
      var x = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          Object(r.a)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return a.a.createElement(h.Consumer, null, function (t) {
              t || Object(u.a)(!1);
              var n,
                r,
                o = e.props.location || t.location;
              return (
                a.a.Children.forEach(e.props.children, function (e) {
                  if (null == r && a.a.isValidElement(e)) {
                    n = e;
                    var i = e.props.path || e.props.from;
                    r = i ? y(o.pathname, Object(c.a)({}, e.props, { path: i })) : t.match;
                  }
                }),
                r ? a.a.cloneElement(n, { location: o, computedMatch: r }) : null
              );
            });
          }),
          t
        );
      })(a.a.Component);
      var _ = a.a.useContext;
      function O() {
        var e = _(h).match;
        return e ? e.params : {};
      }
    },
    function (e, t, n) {
      'use strict';
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return f;
      }),
        n.d(t, 'b', function () {
          return g;
        });
      var r = n(4),
        o = n(8),
        a = n(1),
        i = n.n(a),
        l = n(9),
        u = (n(11), n(5)),
        c = n(13),
        s = n(7),
        f = (function (e) {
          function t() {
            for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            return ((t = e.call.apply(e, [this].concat(r)) || this).history = Object(l.a)(t.props)), t;
          }
          return (
            Object(o.a)(t, e),
            (t.prototype.render = function () {
              return i.a.createElement(r.b, { history: this.history, children: this.props.children });
            }),
            t
          );
        })(i.a.Component);
      i.a.Component;
      var d = function (e, t) {
          return 'function' === typeof e ? e(t) : e;
        },
        p = function (e, t) {
          return 'string' === typeof e ? Object(l.c)(e, null, null, t) : e;
        },
        h = function (e) {
          return e;
        },
        v = i.a.forwardRef;
      'undefined' === typeof v && (v = h);
      var m = v(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          o = e.onClick,
          a = Object(c.a)(e, ['innerRef', 'navigate', 'onClick']),
          l = a.target,
          s = Object(u.a)({}, a, {
            onClick: function (e) {
              try {
                o && o(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (l && '_self' !== l) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), r());
            },
          });
        return (s.ref = (h !== v && t) || n), i.a.createElement('a', s);
      });
      var g = v(function (e, t) {
          var n = e.component,
            o = void 0 === n ? m : n,
            a = e.replace,
            l = e.to,
            f = e.innerRef,
            g = Object(c.a)(e, ['component', 'replace', 'to', 'innerRef']);
          return i.a.createElement(r.d.Consumer, null, function (e) {
            e || Object(s.a)(!1);
            var n = e.history,
              r = p(d(l, e.location), e.location),
              c = r ? n.createHref(r) : '',
              m = Object(u.a)({}, g, {
                href: c,
                navigate: function () {
                  var t = d(l, e.location);
                  (a ? n.replace : n.push)(t);
                },
              });
            return h !== v ? (m.ref = t || f) : (m.innerRef = f), i.a.createElement(o, m);
          });
        }),
        y = function (e) {
          return e;
        },
        b = i.a.forwardRef;
      'undefined' === typeof b && (b = y);
      b(function (e, t) {
        var n = e['aria-current'],
          o = void 0 === n ? 'page' : n,
          a = e.activeClassName,
          l = void 0 === a ? 'active' : a,
          f = e.activeStyle,
          h = e.className,
          v = e.exact,
          m = e.isActive,
          w = e.location,
          k = e.sensitive,
          S = e.strict,
          E = e.style,
          C = e.to,
          x = e.innerRef,
          _ = Object(c.a)(e, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'sensitive',
            'strict',
            'style',
            'to',
            'innerRef',
          ]);
        return i.a.createElement(r.d.Consumer, null, function (e) {
          e || Object(s.a)(!1);
          var n = w || e.location,
            a = p(d(C, n), n),
            c = a.pathname,
            O = c && c.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            P = O ? Object(r.e)(n.pathname, { path: O, exact: v, sensitive: k, strict: S }) : null,
            T = !!(m ? m(P, n) : P),
            A = T
              ? (function () {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                  return t
                    .filter(function (e) {
                      return e;
                    })
                    .join(' ');
                })(h, l)
              : h,
            N = T ? Object(u.a)({}, E, {}, f) : E,
            R = Object(u.a)({ 'aria-current': (T && o) || null, className: A, style: N, to: a }, _);
          return y !== b ? (R.ref = t || x) : (R.innerRef = x), i.a.createElement(g, R);
        });
      });
    },
    function (e, t, n) {
      'use strict';
      var r = 'Invariant failed';
      t.a = function (e, t) {
        if (!e) throw new Error(r);
      };
    },
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function o(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), r(e, t);
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return E;
      }),
        n.d(t, 'b', function () {
          return T;
        }),
        n.d(t, 'd', function () {
          return N;
        }),
        n.d(t, 'c', function () {
          return v;
        }),
        n.d(t, 'f', function () {
          return m;
        }),
        n.d(t, 'e', function () {
          return h;
        });
      var r = n(5);
      function o(e) {
        return '/' === e.charAt(0);
      }
      function a(e, t) {
        for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1) e[n] = e[r];
        e.pop();
      }
      var i = function (e, t) {
        void 0 === t && (t = '');
        var n,
          r = (e && e.split('/')) || [],
          i = (t && t.split('/')) || [],
          l = e && o(e),
          u = t && o(t),
          c = l || u;
        if ((e && o(e) ? (i = r) : r.length && (i.pop(), (i = i.concat(r))), !i.length)) return '/';
        if (i.length) {
          var s = i[i.length - 1];
          n = '.' === s || '..' === s || '' === s;
        } else n = !1;
        for (var f = 0, d = i.length; d >= 0; d--) {
          var p = i[d];
          '.' === p ? a(i, d) : '..' === p ? (a(i, d), f++) : f && (a(i, d), f--);
        }
        if (!c) for (; f--; f) i.unshift('..');
        !c || '' === i[0] || (i[0] && o(i[0])) || i.unshift('');
        var h = i.join('/');
        return n && '/' !== h.substr(-1) && (h += '/'), h;
      };
      function l(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
      }
      var u = function e(t, n) {
          if (t === n) return !0;
          if (null == t || null == n) return !1;
          if (Array.isArray(t))
            return (
              Array.isArray(n) &&
              t.length === n.length &&
              t.every(function (t, r) {
                return e(t, n[r]);
              })
            );
          if ('object' === typeof t || 'object' === typeof n) {
            var r = l(t),
              o = l(n);
            return r !== t || o !== n
              ? e(r, o)
              : Object.keys(Object.assign({}, t, n)).every(function (r) {
                  return e(t[r], n[r]);
                });
          }
          return !1;
        },
        c = n(7);
      function s(e) {
        return '/' === e.charAt(0) ? e : '/' + e;
      }
      function f(e) {
        return '/' === e.charAt(0) ? e.substr(1) : e;
      }
      function d(e, t) {
        return (function (e, t) {
          return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== '/?#'.indexOf(e.charAt(t.length));
        })(e, t)
          ? e.substr(t.length)
          : e;
      }
      function p(e) {
        return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function h(e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          o = t || '/';
        return (
          n && '?' !== n && (o += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (o += '#' === r.charAt(0) ? r : '#' + r),
          o
        );
      }
      function v(e, t, n, o) {
        var a;
        'string' === typeof e
          ? ((a = (function (e) {
              var t = e || '/',
                n = '',
                r = '',
                o = t.indexOf('#');
              -1 !== o && ((r = t.substr(o)), (t = t.substr(0, o)));
              var a = t.indexOf('?');
              return (
                -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a))),
                { pathname: t, search: '?' === n ? '' : n, hash: '#' === r ? '' : r }
              );
            })(e)).state = t)
          : (void 0 === (a = Object(r.a)({}, e)).pathname && (a.pathname = ''),
            a.search ? '?' !== a.search.charAt(0) && (a.search = '?' + a.search) : (a.search = ''),
            a.hash ? '#' !== a.hash.charAt(0) && (a.hash = '#' + a.hash) : (a.hash = ''),
            void 0 !== t && void 0 === a.state && (a.state = t));
        try {
          a.pathname = decodeURI(a.pathname);
        } catch (l) {
          throw l instanceof URIError
            ? new URIError(
                'Pathname "' +
                  a.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : l;
        }
        return (
          n && (a.key = n),
          o
            ? a.pathname
              ? '/' !== a.pathname.charAt(0) && (a.pathname = i(a.pathname, o.pathname))
              : (a.pathname = o.pathname)
            : a.pathname || (a.pathname = '/'),
          a
        );
      }
      function m(e, t) {
        return (
          e.pathname === t.pathname &&
          e.search === t.search &&
          e.hash === t.hash &&
          e.key === t.key &&
          u(e.state, t.state)
        );
      }
      function g() {
        var e = null;
        var t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, n, r, o) {
            if (null != e) {
              var a = 'function' === typeof e ? e(t, n) : e;
              'string' === typeof a ? ('function' === typeof r ? r(a, o) : o(!0)) : o(!1 !== a);
            } else o(!0);
          },
          appendListener: function (e) {
            var n = !0;
            function r() {
              n && e.apply(void 0, arguments);
            }
            return (
              t.push(r),
              function () {
                (n = !1),
                  (t = t.filter(function (e) {
                    return e !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            t.forEach(function (e) {
              return e.apply(void 0, n);
            });
          },
        };
      }
      var y = !('undefined' === typeof window || !window.document || !window.document.createElement);
      function b(e, t) {
        t(window.confirm(e));
      }
      var w = 'popstate',
        k = 'hashchange';
      function S() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function E(e) {
        void 0 === e && (e = {}), y || Object(c.a)(!1);
        var t = window.history,
          n = (function () {
            var e = window.navigator.userAgent;
            return (
              ((-1 === e.indexOf('Android 2.') && -1 === e.indexOf('Android 4.0')) ||
                -1 === e.indexOf('Mobile Safari') ||
                -1 !== e.indexOf('Chrome') ||
                -1 !== e.indexOf('Windows Phone')) &&
              window.history &&
              'pushState' in window.history
            );
          })(),
          o = !(-1 === window.navigator.userAgent.indexOf('Trident')),
          a = e,
          i = a.forceRefresh,
          l = void 0 !== i && i,
          u = a.getUserConfirmation,
          f = void 0 === u ? b : u,
          m = a.keyLength,
          E = void 0 === m ? 6 : m,
          C = e.basename ? p(s(e.basename)) : '';
        function x(e) {
          var t = e || {},
            n = t.key,
            r = t.state,
            o = window.location,
            a = o.pathname + o.search + o.hash;
          return C && (a = d(a, C)), v(a, r, n);
        }
        function _() {
          return Math.random().toString(36).substr(2, E);
        }
        var O = g();
        function P(e) {
          Object(r.a)(U, e), (U.length = t.length), O.notifyListeners(U.location, U.action);
        }
        function T(e) {
          (function (e) {
            return void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS');
          })(e) || R(x(e.state));
        }
        function A() {
          R(x(S()));
        }
        var N = !1;
        function R(e) {
          if (N) (N = !1), P();
          else {
            O.confirmTransitionTo(e, 'POP', f, function (t) {
              t
                ? P({ action: 'POP', location: e })
                : (function (e) {
                    var t = U.location,
                      n = L.indexOf(t.key);
                    -1 === n && (n = 0);
                    var r = L.indexOf(e.key);
                    -1 === r && (r = 0);
                    var o = n - r;
                    o && ((N = !0), I(o));
                  })(e);
            });
          }
        }
        var j = x(S()),
          L = [j.key];
        function D(e) {
          return C + h(e);
        }
        function I(e) {
          t.go(e);
        }
        var z = 0;
        function M(e) {
          1 === (z += e) && 1 === e
            ? (window.addEventListener(w, T), o && window.addEventListener(k, A))
            : 0 === z && (window.removeEventListener(w, T), o && window.removeEventListener(k, A));
        }
        var F = !1;
        var U = {
          length: t.length,
          action: 'POP',
          location: j,
          createHref: D,
          push: function (e, r) {
            var o = 'PUSH',
              a = v(e, r, _(), U.location);
            O.confirmTransitionTo(a, o, f, function (e) {
              if (e) {
                var r = D(a),
                  i = a.key,
                  u = a.state;
                if (n)
                  if ((t.pushState({ key: i, state: u }, null, r), l)) window.location.href = r;
                  else {
                    var c = L.indexOf(U.location.key),
                      s = L.slice(0, c + 1);
                    s.push(a.key), (L = s), P({ action: o, location: a });
                  }
                else window.location.href = r;
              }
            });
          },
          replace: function (e, r) {
            var o = 'REPLACE',
              a = v(e, r, _(), U.location);
            O.confirmTransitionTo(a, o, f, function (e) {
              if (e) {
                var r = D(a),
                  i = a.key,
                  u = a.state;
                if (n)
                  if ((t.replaceState({ key: i, state: u }, null, r), l)) window.location.replace(r);
                  else {
                    var c = L.indexOf(U.location.key);
                    -1 !== c && (L[c] = a.key), P({ action: o, location: a });
                  }
                else window.location.replace(r);
              }
            });
          },
          go: I,
          goBack: function () {
            I(-1);
          },
          goForward: function () {
            I(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = O.setPrompt(e);
            return (
              F || (M(1), (F = !0)),
              function () {
                return F && ((F = !1), M(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = O.appendListener(e);
            return (
              M(1),
              function () {
                M(-1), t();
              }
            );
          },
        };
        return U;
      }
      var C = 'hashchange',
        x = {
          hashbang: {
            encodePath: function (e) {
              return '!' === e.charAt(0) ? e : '!/' + f(e);
            },
            decodePath: function (e) {
              return '!' === e.charAt(0) ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: f, decodePath: s },
          slash: { encodePath: s, decodePath: s },
        };
      function _(e) {
        var t = e.indexOf('#');
        return -1 === t ? e : e.slice(0, t);
      }
      function O() {
        var e = window.location.href,
          t = e.indexOf('#');
        return -1 === t ? '' : e.substring(t + 1);
      }
      function P(e) {
        window.location.replace(_(window.location.href) + '#' + e);
      }
      function T(e) {
        void 0 === e && (e = {}), y || Object(c.a)(!1);
        var t = window.history,
          n = (window.navigator.userAgent.indexOf('Firefox'), e),
          o = n.getUserConfirmation,
          a = void 0 === o ? b : o,
          i = n.hashType,
          l = void 0 === i ? 'slash' : i,
          u = e.basename ? p(s(e.basename)) : '',
          f = x[l],
          m = f.encodePath,
          w = f.decodePath;
        function k() {
          var e = w(O());
          return u && (e = d(e, u)), v(e);
        }
        var S = g();
        function E(e) {
          Object(r.a)(U, e), (U.length = t.length), S.notifyListeners(U.location, U.action);
        }
        var T = !1,
          A = null;
        function N() {
          var e,
            t,
            n = O(),
            r = m(n);
          if (n !== r) P(r);
          else {
            var o = k(),
              i = U.location;
            if (!T && ((t = o), (e = i).pathname === t.pathname && e.search === t.search && e.hash === t.hash)) return;
            if (A === h(o)) return;
            (A = null),
              (function (e) {
                if (T) (T = !1), E();
                else {
                  var t = 'POP';
                  S.confirmTransitionTo(e, t, a, function (n) {
                    n
                      ? E({ action: t, location: e })
                      : (function (e) {
                          var t = U.location,
                            n = D.lastIndexOf(h(t));
                          -1 === n && (n = 0);
                          var r = D.lastIndexOf(h(e));
                          -1 === r && (r = 0);
                          var o = n - r;
                          o && ((T = !0), I(o));
                        })(e);
                  });
                }
              })(o);
          }
        }
        var R = O(),
          j = m(R);
        R !== j && P(j);
        var L = k(),
          D = [h(L)];
        function I(e) {
          t.go(e);
        }
        var z = 0;
        function M(e) {
          1 === (z += e) && 1 === e ? window.addEventListener(C, N) : 0 === z && window.removeEventListener(C, N);
        }
        var F = !1;
        var U = {
          length: t.length,
          action: 'POP',
          location: L,
          createHref: function (e) {
            var t = document.querySelector('base'),
              n = '';
            return t && t.getAttribute('href') && (n = _(window.location.href)), n + '#' + m(u + h(e));
          },
          push: function (e, t) {
            var n = 'PUSH',
              r = v(e, void 0, void 0, U.location);
            S.confirmTransitionTo(r, n, a, function (e) {
              if (e) {
                var t = h(r),
                  o = m(u + t);
                if (O() !== o) {
                  (A = t),
                    (function (e) {
                      window.location.hash = e;
                    })(o);
                  var a = D.lastIndexOf(h(U.location)),
                    i = D.slice(0, a + 1);
                  i.push(t), (D = i), E({ action: n, location: r });
                } else E();
              }
            });
          },
          replace: function (e, t) {
            var n = 'REPLACE',
              r = v(e, void 0, void 0, U.location);
            S.confirmTransitionTo(r, n, a, function (e) {
              if (e) {
                var t = h(r),
                  o = m(u + t);
                O() !== o && ((A = t), P(o));
                var a = D.indexOf(h(U.location));
                -1 !== a && (D[a] = t), E({ action: n, location: r });
              }
            });
          },
          go: I,
          goBack: function () {
            I(-1);
          },
          goForward: function () {
            I(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = S.setPrompt(e);
            return (
              F || (M(1), (F = !0)),
              function () {
                return F && ((F = !1), M(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = S.appendListener(e);
            return (
              M(1),
              function () {
                M(-1), t();
              }
            );
          },
        };
        return U;
      }
      function A(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function N(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.getUserConfirmation,
          o = t.initialEntries,
          a = void 0 === o ? ['/'] : o,
          i = t.initialIndex,
          l = void 0 === i ? 0 : i,
          u = t.keyLength,
          c = void 0 === u ? 6 : u,
          s = g();
        function f(e) {
          Object(r.a)(w, e), (w.length = w.entries.length), s.notifyListeners(w.location, w.action);
        }
        function d() {
          return Math.random().toString(36).substr(2, c);
        }
        var p = A(l, 0, a.length - 1),
          m = a.map(function (e) {
            return v(e, void 0, 'string' === typeof e ? d() : e.key || d());
          }),
          y = h;
        function b(e) {
          var t = A(w.index + e, 0, w.entries.length - 1),
            r = w.entries[t];
          s.confirmTransitionTo(r, 'POP', n, function (e) {
            e ? f({ action: 'POP', location: r, index: t }) : f();
          });
        }
        var w = {
          length: m.length,
          action: 'POP',
          location: m[p],
          index: p,
          entries: m,
          createHref: y,
          push: function (e, t) {
            var r = 'PUSH',
              o = v(e, t, d(), w.location);
            s.confirmTransitionTo(o, r, n, function (e) {
              if (e) {
                var t = w.index + 1,
                  n = w.entries.slice(0);
                n.length > t ? n.splice(t, n.length - t, o) : n.push(o),
                  f({ action: r, location: o, index: t, entries: n });
              }
            });
          },
          replace: function (e, t) {
            var r = 'REPLACE',
              o = v(e, t, d(), w.location);
            s.confirmTransitionTo(o, r, n, function (e) {
              e && ((w.entries[w.index] = o), f({ action: r, location: o }));
            });
          },
          go: b,
          goBack: function () {
            b(-1);
          },
          goForward: function () {
            b(1);
          },
          canGo: function (e) {
            var t = w.index + e;
            return t >= 0 && t < w.entries.length;
          },
          block: function (e) {
            return void 0 === e && (e = !1), s.setPrompt(e);
          },
          listen: function (e) {
            return s.appendListener(e);
          },
        };
        return w;
      }
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n(18);
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                r = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var i, l = e[Symbol.iterator]();
                  !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t);
                  r = !0
                );
              } catch (u) {
                (o = !0), (a = u);
              } finally {
                try {
                  r || null == l.return || l.return();
                } finally {
                  if (o) throw a;
                }
              }
              return n;
            }
          })(e, t) ||
          Object(r.a)(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
    },
    function (e, t, n) {
      e.exports = n(42)();
    },
    function (e, t) {
      (e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      e.exports = n(40);
    },
    function (e, t, n) {
      'use strict';
      var r = n(14),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        a = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        l = {};
      function u(e) {
        return r.isMemo(e) ? i : l[e.$$typeof] || o;
      }
      (l[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
        (l[r.Memo] = i);
      var c = Object.defineProperty,
        s = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, n, r) {
        if ('string' !== typeof n) {
          if (h) {
            var o = p(n);
            o && o !== h && e(t, o, r);
          }
          var i = s(n);
          f && (i = i.concat(f(n)));
          for (var l = u(t), v = u(n), m = 0; m < i.length; ++m) {
            var g = i[m];
            if (!a[g] && (!r || !r[g]) && (!v || !v[g]) && (!l || !l[g])) {
              var y = d(n, g);
              try {
                c(t, g, y);
              } catch (b) {}
            }
          }
        }
        return t;
      };
    },
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      var r = n(12);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.CrosswordSizeContext = t.CrosswordContext = void 0);
      var o = r(n(1)),
        a = o.default.createContext({ focused: !1, selectedDirection: null, selectedNumber: null });
      t.CrosswordContext = a;
      var i = o.default.createContext({ cellSize: 0, cellPadding: 0, cellInner: 0, cellHalf: 0, fontSize: 0 });
      t.CrosswordSizeContext = i;
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n(16);
      function o(e, t) {
        if (e) {
          if ('string' === typeof e) return Object(r.a)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Object(r.a)(e, t)
              : void 0
          );
        }
      }
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n(16);
      var o = n(18);
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Object(r.a)(e);
          })(e) ||
          (function (e) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
          })(e) ||
          Object(o.a)(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
    },
    ,
    function (e, t, n) {
      'use strict';
      var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
      function i(e) {
        if (null === e || void 0 === e) throw new TypeError('Object.assign cannot be called with null or undefined');
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc');
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
          for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join('')
          )
            return !1;
          var r = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (e) {
              r[e] = e;
            }),
            'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
          );
        } catch (o) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var n, l, u = i(e), c = 1; c < arguments.length; c++) {
              for (var s in (n = Object(arguments[c]))) o.call(n, s) && (u[s] = n[s]);
              if (r) {
                l = r(n);
                for (var f = 0; f < l.length; f++) a.call(n, l[f]) && (u[l[f]] = n[l[f]]);
              }
            }
            return u;
          };
    },
    function (e, t, n) {
      var r = n(47).default;
      function o() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      (e.exports = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ('object' !== r(e) && 'function' !== typeof e)) return { default: e };
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
            l && (l.get || l.set) ? Object.defineProperty(n, i, l) : (n[i] = e[i]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          n.apply(this, arguments)
        );
      }
      (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
    },
    function (e, t, n) {
      'use strict';
      (function (e) {
        var r = n(1),
          o = n.n(r),
          a = n(8),
          i = n(11),
          l = n.n(i),
          u = 1073741823,
          c =
            'undefined' !== typeof globalThis
              ? globalThis
              : 'undefined' !== typeof window
              ? window
              : 'undefined' !== typeof e
              ? e
              : {};
        function s(e) {
          var t = [];
          return {
            on: function (e) {
              t.push(e);
            },
            off: function (e) {
              t = t.filter(function (t) {
                return t !== e;
              });
            },
            get: function () {
              return e;
            },
            set: function (n, r) {
              (e = n),
                t.forEach(function (t) {
                  return t(e, r);
                });
            },
          };
        }
        var f =
          o.a.createContext ||
          function (e, t) {
            var n,
              o,
              i =
                '__create-react-context-' +
                (function () {
                  var e = '__global_unique_id__';
                  return (c[e] = (c[e] || 0) + 1);
                })() +
                '__',
              f = (function (e) {
                function n() {
                  var t;
                  return ((t = e.apply(this, arguments) || this).emitter = s(t.props.value)), t;
                }
                Object(a.a)(n, e);
                var r = n.prototype;
                return (
                  (r.getChildContext = function () {
                    var e;
                    return ((e = {})[i] = this.emitter), e;
                  }),
                  (r.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                      var n,
                        r = this.props.value,
                        o = e.value;
                      ((a = r) === (i = o) ? 0 !== a || 1 / a === 1 / i : a !== a && i !== i)
                        ? (n = 0)
                        : ((n = 'function' === typeof t ? t(r, o) : u), 0 !== (n |= 0) && this.emitter.set(e.value, n));
                    }
                    var a, i;
                  }),
                  (r.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(r.Component);
            f.childContextTypes = (((n = {})[i] = l.a.object.isRequired), n);
            var d = (function (t) {
              function n() {
                var e;
                return (
                  ((e = t.apply(this, arguments) || this).state = { value: e.getValue() }),
                  (e.onUpdate = function (t, n) {
                    0 !== ((0 | e.observedBits) & n) && e.setState({ value: e.getValue() });
                  }),
                  e
                );
              }
              Object(a.a)(n, t);
              var r = n.prototype;
              return (
                (r.componentWillReceiveProps = function (e) {
                  var t = e.observedBits;
                  this.observedBits = void 0 === t || null === t ? u : t;
                }),
                (r.componentDidMount = function () {
                  this.context[i] && this.context[i].on(this.onUpdate);
                  var e = this.props.observedBits;
                  this.observedBits = void 0 === e || null === e ? u : e;
                }),
                (r.componentWillUnmount = function () {
                  this.context[i] && this.context[i].off(this.onUpdate);
                }),
                (r.getValue = function () {
                  return this.context[i] ? this.context[i].get() : e;
                }),
                (r.render = function () {
                  return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(this.state.value);
                  var e;
                }),
                n
              );
            })(r.Component);
            return (d.contextTypes = (((o = {})[i] = l.a.object), o)), { Provider: f, Consumer: d };
          };
        t.a = f;
      }.call(this, n(44)));
    },
    function (e, t, n) {
      var r = n(45);
      (e.exports = p),
        (e.exports.parse = a),
        (e.exports.compile = function (e, t) {
          return l(a(e, t), t);
        }),
        (e.exports.tokensToFunction = l),
        (e.exports.tokensToRegExp = d);
      var o = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
        ].join('|'),
        'g'
      );
      function a(e, t) {
        for (var n, r = [], a = 0, i = 0, l = '', s = (t && t.delimiter) || '/'; null != (n = o.exec(e)); ) {
          var f = n[0],
            d = n[1],
            p = n.index;
          if (((l += e.slice(i, p)), (i = p + f.length), d)) l += d[1];
          else {
            var h = e[i],
              v = n[2],
              m = n[3],
              g = n[4],
              y = n[5],
              b = n[6],
              w = n[7];
            l && (r.push(l), (l = ''));
            var k = null != v && null != h && h !== v,
              S = '+' === b || '*' === b,
              E = '?' === b || '*' === b,
              C = n[2] || s,
              x = g || y;
            r.push({
              name: m || a++,
              prefix: v || '',
              delimiter: C,
              optional: E,
              repeat: S,
              partial: k,
              asterisk: !!w,
              pattern: x ? c(x) : w ? '.*' : '[^' + u(C) + ']+?',
            });
          }
        }
        return i < e.length && (l += e.substr(i)), l && r.push(l), r;
      }
      function i(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return '%' + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function l(e, t) {
        for (var n = new Array(e.length), o = 0; o < e.length; o++)
          'object' === typeof e[o] && (n[o] = new RegExp('^(?:' + e[o].pattern + ')$', f(t)));
        return function (t, o) {
          for (var a = '', l = t || {}, u = (o || {}).pretty ? i : encodeURIComponent, c = 0; c < e.length; c++) {
            var s = e[c];
            if ('string' !== typeof s) {
              var f,
                d = l[s.name];
              if (null == d) {
                if (s.optional) {
                  s.partial && (a += s.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + s.name + '" to be defined');
              }
              if (r(d)) {
                if (!s.repeat)
                  throw new TypeError(
                    'Expected "' + s.name + '" to not repeat, but received `' + JSON.stringify(d) + '`'
                  );
                if (0 === d.length) {
                  if (s.optional) continue;
                  throw new TypeError('Expected "' + s.name + '" to not be empty');
                }
                for (var p = 0; p < d.length; p++) {
                  if (((f = u(d[p])), !n[c].test(f)))
                    throw new TypeError(
                      'Expected all "' +
                        s.name +
                        '" to match "' +
                        s.pattern +
                        '", but received `' +
                        JSON.stringify(f) +
                        '`'
                    );
                  a += (0 === p ? s.prefix : s.delimiter) + f;
                }
              } else {
                if (
                  ((f = s.asterisk
                    ? encodeURI(d).replace(/[?#]/g, function (e) {
                        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : u(d)),
                  !n[c].test(f))
                )
                  throw new TypeError(
                    'Expected "' + s.name + '" to match "' + s.pattern + '", but received "' + f + '"'
                  );
                a += s.prefix + f;
              }
            } else a += s;
          }
          return a;
        };
      }
      function u(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
      }
      function c(e) {
        return e.replace(/([=!:$\/()])/g, '\\$1');
      }
      function s(e, t) {
        return (e.keys = t), e;
      }
      function f(e) {
        return e && e.sensitive ? '' : 'i';
      }
      function d(e, t, n) {
        r(t) || ((n = t || n), (t = []));
        for (var o = (n = n || {}).strict, a = !1 !== n.end, i = '', l = 0; l < e.length; l++) {
          var c = e[l];
          if ('string' === typeof c) i += u(c);
          else {
            var d = u(c.prefix),
              p = '(?:' + c.pattern + ')';
            t.push(c),
              c.repeat && (p += '(?:' + d + p + ')*'),
              (i += p = c.optional
                ? c.partial
                  ? d + '(' + p + ')?'
                  : '(?:' + d + '(' + p + '))?'
                : d + '(' + p + ')');
          }
        }
        var h = u(n.delimiter || '/'),
          v = i.slice(-h.length) === h;
        return (
          o || (i = (v ? i.slice(0, -h.length) : i) + '(?:' + h + '(?=$))?'),
          (i += a ? '$' : o && v ? '' : '(?=' + h + '|$)'),
          s(new RegExp('^' + i, f(n)), t)
        );
      }
      function p(e, t, n) {
        return (
          r(t) || ((n = t || n), (t = [])),
          (n = n || {}),
          e instanceof RegExp
            ? (function (e, t) {
                var n = e.source.match(/\((?!\?)/g);
                if (n)
                  for (var r = 0; r < n.length; r++)
                    t.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return s(e, t);
              })(e, t)
            : r(e)
            ? (function (e, t, n) {
                for (var r = [], o = 0; o < e.length; o++) r.push(p(e[o], t, n).source);
                return s(new RegExp('(?:' + r.join('|') + ')', f(n)), t);
              })(e, t, n)
            : (function (e, t, n) {
                return d(a(e, n), t, n);
              })(e, t, n)
        );
      }
    },
    function (e, t, n) {
      'use strict';
      var r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        o = (function (e) {
          var t = {};
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        })(function (e) {
          return r.test(e) || (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91);
        });
      t.a = o;
    },
    function (e, t, n) {
      'use strict';
      var r = n(12),
        o = n(22);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = u);
      var a = o(n(1)),
        i = (r(n(11)), n(2)),
        l = n(17);
      function u(e) {
        var t = e.cellData,
          n = e.onClick,
          r = e.focus,
          o = e.highlight,
          u = (0, a.useContext)(l.CrosswordSizeContext),
          c = u.cellSize,
          s = u.cellPadding,
          f = u.cellInner,
          d = u.cellHalf,
          p = u.fontSize,
          h = (0, a.useContext)(i.ThemeContext),
          v = h.cellBackground,
          m = h.cellBorder,
          g = h.textColor,
          y = h.numberColor,
          b = h.focusBackground,
          w = h.highlightBackground,
          k = (0, a.useCallback)(
            function (e) {
              e.preventDefault(), n && n(t);
            },
            [t, n]
          ),
          S = t.row,
          E = t.col,
          C = t.guess,
          x = t.number,
          _ = E * c,
          O = S * c;
        return a.default.createElement(
          'g',
          { onClick: k, style: { cursor: 'default', fontSize: p + 'px' } },
          a.default.createElement('rect', {
            x: _ + s,
            y: O + s,
            width: f,
            height: f,
            fill: r ? b : o ? w : v,
            stroke: m,
            strokeWidth: c / 50,
          }),
          x &&
            a.default.createElement(
              'text',
              {
                x: _ + 4 * s,
                y: O + 4 * s,
                textAnchor: 'start',
                dominantBaseline: 'hanging',
                style: { fontSize: '50%', fill: y },
              },
              x
            ),
          a.default.createElement(
            'text',
            { x: _ + d, y: O + d + 1, textAnchor: 'middle', dominantBaseline: 'middle', style: { fill: g } },
            C
          )
        );
      }
      u.defaultProps = { focus: !1, highlight: !1, onClick: null };
    },
    function (e, t, n) {
      'use strict';
      var r = n(22),
        o = n(12);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = f);
      var a = o(n(23)),
        i = o(n(48)),
        l = r(n(1)),
        u = (o(n(11)), r(n(2))),
        c = n(17),
        s = u.default.div
          .attrs(function (e) {
            return { className: 'clue' + (e.correct ? ' correct' : '') };
          })
          .withConfig({ displayName: 'Clue__ClueWrapper', componentId: 'sc-8w61xs-0' })(
          ['cursor:default;background-color:', ';'],
          function (e) {
            return e.highlight ? e.highlightBackground : 'transparent';
          }
        );
      function f(e) {
        var t = e.direction,
          n = e.number,
          r = e.children,
          o = e.correct,
          f = (0, i.default)(e, ['direction', 'number', 'children', 'correct']),
          d = (0, l.useContext)(u.ThemeContext).highlightBackground,
          p = (0, l.useContext)(c.CrosswordContext),
          h = p.focused,
          v = p.selectedDirection,
          m = p.selectedNumber,
          g = p.onClueSelected,
          y = (0, l.useCallback)(
            function (e) {
              e.preventDefault(), g && g(t, n);
            },
            [t, n, g]
          );
        return l.default.createElement(
          s,
          (0, a.default)({ highlightBackground: d, highlight: h && t === v && n === m, correct: o }, f, {
            onClick: y,
            'aria-label': 'clue-' + n + '-' + t,
          }),
          n,
          ': ',
          r
        );
      }
      f.defaultProps = { children: void 0, correct: void 0 };
    },
    function (e, t, n) {
      'use strict';
      var r = n(12);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = i);
      var o = r(n(1)),
        a = (r(n(11)), r(n(28)));
      function i(e) {
        var t = e.direction,
          n = e.clues;
        return o.default.createElement(
          'div',
          { className: 'direction' },
          o.default.createElement('h3', { className: 'header' }, t.toUpperCase()),
          n.map(function (e) {
            var n = e.number,
              r = e.clue,
              i = e.correct;
            return o.default.createElement(a.default, { key: n, direction: t, number: n, correct: i }, r);
          })
        );
      }
      i.defaultProps = {};
    },
    function (e, t, n) {
      'use strict';
      !(function e() {
        if (
          'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(36));
    },
    function (e, t) {
      e.exports = function (e, t, n, r) {
        var o = n ? n.call(r, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ('object' !== typeof e || !e || 'object' !== typeof t || !t) return !1;
        var a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (var l = Object.prototype.hasOwnProperty.bind(t), u = 0; u < a.length; u++) {
          var c = a[u];
          if (!l(c)) return !1;
          var s = e[c],
            f = t[c];
          if (!1 === (o = n ? n.call(r, s, f, c) : void 0) || (void 0 === o && s !== f)) return !1;
        }
        return !0;
      };
    },
    function (e, t, n) {
      'use strict';
      t.a = function (e) {
        function t(e, r, u, c, d) {
          for (
            var p,
              h,
              v,
              m,
              w,
              S = 0,
              E = 0,
              C = 0,
              x = 0,
              _ = 0,
              R = 0,
              L = (v = p = 0),
              I = 0,
              z = 0,
              M = 0,
              F = 0,
              U = u.length,
              B = U - 1,
              $ = '',
              W = '',
              H = '',
              V = '';
            I < U;

          ) {
            if (
              ((h = u.charCodeAt(I)),
              I === B && 0 !== E + x + C + S && (0 !== E && (h = 47 === E ? 10 : 47), (x = C = S = 0), U++, B++),
              0 === E + x + C + S)
            ) {
              if (I === B && (0 < z && ($ = $.replace(f, '')), 0 < $.trim().length)) {
                switch (h) {
                  case 32:
                  case 9:
                  case 59:
                  case 13:
                  case 10:
                    break;
                  default:
                    $ += u.charAt(I);
                }
                h = 59;
              }
              switch (h) {
                case 123:
                  for (p = ($ = $.trim()).charCodeAt(0), v = 1, F = ++I; I < U; ) {
                    switch ((h = u.charCodeAt(I))) {
                      case 123:
                        v++;
                        break;
                      case 125:
                        v--;
                        break;
                      case 47:
                        switch ((h = u.charCodeAt(I + 1))) {
                          case 42:
                          case 47:
                            e: {
                              for (L = I + 1; L < B; ++L)
                                switch (u.charCodeAt(L)) {
                                  case 47:
                                    if (42 === h && 42 === u.charCodeAt(L - 1) && I + 2 !== L) {
                                      I = L + 1;
                                      break e;
                                    }
                                    break;
                                  case 10:
                                    if (47 === h) {
                                      I = L + 1;
                                      break e;
                                    }
                                }
                              I = L;
                            }
                        }
                        break;
                      case 91:
                        h++;
                      case 40:
                        h++;
                      case 34:
                      case 39:
                        for (; I++ < B && u.charCodeAt(I) !== h; );
                    }
                    if (0 === v) break;
                    I++;
                  }
                  switch (((v = u.substring(F, I)), 0 === p && (p = ($ = $.replace(s, '').trim()).charCodeAt(0)), p)) {
                    case 64:
                      switch ((0 < z && ($ = $.replace(f, '')), (h = $.charCodeAt(1)))) {
                        case 100:
                        case 109:
                        case 115:
                        case 45:
                          z = r;
                          break;
                        default:
                          z = N;
                      }
                      if (
                        ((F = (v = t(r, z, v, h, d + 1)).length),
                        0 < j &&
                          ((w = l(3, v, (z = n(N, $, M)), r, P, O, F, h, d, c)),
                          ($ = z.join('')),
                          void 0 !== w && 0 === (F = (v = w.trim()).length) && ((h = 0), (v = ''))),
                        0 < F)
                      )
                        switch (h) {
                          case 115:
                            $ = $.replace(k, i);
                          case 100:
                          case 109:
                          case 45:
                            v = $ + '{' + v + '}';
                            break;
                          case 107:
                            (v = ($ = $.replace(g, '$1 $2')) + '{' + v + '}'),
                              (v = 1 === A || (2 === A && a('@' + v, 3)) ? '@-webkit-' + v + '@' + v : '@' + v);
                            break;
                          default:
                            (v = $ + v), 112 === c && ((W += v), (v = ''));
                        }
                      else v = '';
                      break;
                    default:
                      v = t(r, n(r, $, M), v, c, d + 1);
                  }
                  (H += v), (v = M = z = L = p = 0), ($ = ''), (h = u.charCodeAt(++I));
                  break;
                case 125:
                case 59:
                  if (1 < (F = ($ = (0 < z ? $.replace(f, '') : $).trim()).length))
                    switch (
                      (0 === L &&
                        ((p = $.charCodeAt(0)), 45 === p || (96 < p && 123 > p)) &&
                        (F = ($ = $.replace(' ', ':')).length),
                      0 < j &&
                        void 0 !== (w = l(1, $, r, e, P, O, W.length, c, d, c)) &&
                        0 === (F = ($ = w.trim()).length) &&
                        ($ = '\0\0'),
                      (p = $.charCodeAt(0)),
                      (h = $.charCodeAt(1)),
                      p)
                    ) {
                      case 0:
                        break;
                      case 64:
                        if (105 === h || 99 === h) {
                          V += $ + u.charAt(I);
                          break;
                        }
                      default:
                        58 !== $.charCodeAt(F - 1) && (W += o($, p, h, $.charCodeAt(2)));
                    }
                  (M = z = L = p = 0), ($ = ''), (h = u.charCodeAt(++I));
              }
            }
            switch (h) {
              case 13:
              case 10:
                47 === E ? (E = 0) : 0 === 1 + p && 107 !== c && 0 < $.length && ((z = 1), ($ += '\0')),
                  0 < j * D && l(0, $, r, e, P, O, W.length, c, d, c),
                  (O = 1),
                  P++;
                break;
              case 59:
              case 125:
                if (0 === E + x + C + S) {
                  O++;
                  break;
                }
              default:
                switch ((O++, (m = u.charAt(I)), h)) {
                  case 9:
                  case 32:
                    if (0 === x + S + E)
                      switch (_) {
                        case 44:
                        case 58:
                        case 9:
                        case 32:
                          m = '';
                          break;
                        default:
                          32 !== h && (m = ' ');
                      }
                    break;
                  case 0:
                    m = '\\0';
                    break;
                  case 12:
                    m = '\\f';
                    break;
                  case 11:
                    m = '\\v';
                    break;
                  case 38:
                    0 === x + E + S && ((z = M = 1), (m = '\f' + m));
                    break;
                  case 108:
                    if (0 === x + E + S + T && 0 < L)
                      switch (I - L) {
                        case 2:
                          112 === _ && 58 === u.charCodeAt(I - 3) && (T = _);
                        case 8:
                          111 === R && (T = R);
                      }
                    break;
                  case 58:
                    0 === x + E + S && (L = I);
                    break;
                  case 44:
                    0 === E + C + x + S && ((z = 1), (m += '\r'));
                    break;
                  case 34:
                  case 39:
                    0 === E && (x = x === h ? 0 : 0 === x ? h : x);
                    break;
                  case 91:
                    0 === x + E + C && S++;
                    break;
                  case 93:
                    0 === x + E + C && S--;
                    break;
                  case 41:
                    0 === x + E + S && C--;
                    break;
                  case 40:
                    if (0 === x + E + S) {
                      if (0 === p)
                        switch (2 * _ + 3 * R) {
                          case 533:
                            break;
                          default:
                            p = 1;
                        }
                      C++;
                    }
                    break;
                  case 64:
                    0 === E + C + x + S + L + v && (v = 1);
                    break;
                  case 42:
                  case 47:
                    if (!(0 < x + S + C))
                      switch (E) {
                        case 0:
                          switch (2 * h + 3 * u.charCodeAt(I + 1)) {
                            case 235:
                              E = 47;
                              break;
                            case 220:
                              (F = I), (E = 42);
                          }
                          break;
                        case 42:
                          47 === h &&
                            42 === _ &&
                            F + 2 !== I &&
                            (33 === u.charCodeAt(F + 2) && (W += u.substring(F, I + 1)), (m = ''), (E = 0));
                      }
                }
                0 === E && ($ += m);
            }
            (R = _), (_ = h), I++;
          }
          if (0 < (F = W.length)) {
            if (((z = r), 0 < j && void 0 !== (w = l(2, W, z, e, P, O, F, c, d, c)) && 0 === (W = w).length))
              return V + W + H;
            if (((W = z.join(',') + '{' + W + '}'), 0 !== A * T)) {
              switch ((2 !== A || a(W, 2) || (T = 0), T)) {
                case 111:
                  W = W.replace(b, ':-moz-$1') + W;
                  break;
                case 112:
                  W =
                    W.replace(y, '::-webkit-input-$1') + W.replace(y, '::-moz-$1') + W.replace(y, ':-ms-input-$1') + W;
              }
              T = 0;
            }
          }
          return V + W + H;
        }
        function n(e, t, n) {
          var o = t.trim().split(v);
          t = o;
          var a = o.length,
            i = e.length;
          switch (i) {
            case 0:
            case 1:
              var l = 0;
              for (e = 0 === i ? '' : e[0] + ' '; l < a; ++l) t[l] = r(e, t[l], n).trim();
              break;
            default:
              var u = (l = 0);
              for (t = []; l < a; ++l) for (var c = 0; c < i; ++c) t[u++] = r(e[c] + ' ', o[l], n).trim();
          }
          return t;
        }
        function r(e, t, n) {
          var r = t.charCodeAt(0);
          switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
            case 38:
              return t.replace(m, '$1' + e.trim());
            case 58:
              return e.trim() + t.replace(m, '$1' + e.trim());
            default:
              if (0 < 1 * n && 0 < t.indexOf('\f'))
                return t.replace(m, (58 === e.charCodeAt(0) ? '' : '$1') + e.trim());
          }
          return e + t;
        }
        function o(e, t, n, r) {
          var i = e + ';',
            l = 2 * t + 3 * n + 4 * r;
          if (944 === l) {
            e = i.indexOf(':', 9) + 1;
            var u = i.substring(e, i.length - 1).trim();
            return (u = i.substring(0, e).trim() + u + ';'), 1 === A || (2 === A && a(u, 1)) ? '-webkit-' + u + u : u;
          }
          if (0 === A || (2 === A && !a(i, 1))) return i;
          switch (l) {
            case 1015:
              return 97 === i.charCodeAt(10) ? '-webkit-' + i + i : i;
            case 951:
              return 116 === i.charCodeAt(3) ? '-webkit-' + i + i : i;
            case 963:
              return 110 === i.charCodeAt(5) ? '-webkit-' + i + i : i;
            case 1009:
              if (100 !== i.charCodeAt(4)) break;
            case 969:
            case 942:
              return '-webkit-' + i + i;
            case 978:
              return '-webkit-' + i + '-moz-' + i + i;
            case 1019:
            case 983:
              return '-webkit-' + i + '-moz-' + i + '-ms-' + i + i;
            case 883:
              if (45 === i.charCodeAt(8)) return '-webkit-' + i + i;
              if (0 < i.indexOf('image-set(', 11)) return i.replace(_, '$1-webkit-$2') + i;
              break;
            case 932:
              if (45 === i.charCodeAt(4))
                switch (i.charCodeAt(5)) {
                  case 103:
                    return (
                      '-webkit-box-' +
                      i.replace('-grow', '') +
                      '-webkit-' +
                      i +
                      '-ms-' +
                      i.replace('grow', 'positive') +
                      i
                    );
                  case 115:
                    return '-webkit-' + i + '-ms-' + i.replace('shrink', 'negative') + i;
                  case 98:
                    return '-webkit-' + i + '-ms-' + i.replace('basis', 'preferred-size') + i;
                }
              return '-webkit-' + i + '-ms-' + i + i;
            case 964:
              return '-webkit-' + i + '-ms-flex-' + i + i;
            case 1023:
              if (99 !== i.charCodeAt(8)) break;
              return (
                '-webkit-box-pack' +
                (u = i.substring(i.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')) +
                '-webkit-' +
                i +
                '-ms-flex-pack' +
                u +
                i
              );
            case 1005:
              return p.test(i) ? i.replace(d, ':-webkit-') + i.replace(d, ':-moz-') + i : i;
            case 1e3:
              switch (((t = (u = i.substring(13).trim()).indexOf('-') + 1), u.charCodeAt(0) + u.charCodeAt(t))) {
                case 226:
                  u = i.replace(w, 'tb');
                  break;
                case 232:
                  u = i.replace(w, 'tb-rl');
                  break;
                case 220:
                  u = i.replace(w, 'lr');
                  break;
                default:
                  return i;
              }
              return '-webkit-' + i + '-ms-' + u + i;
            case 1017:
              if (-1 === i.indexOf('sticky', 9)) break;
            case 975:
              switch (
                ((t = (i = e).length - 10),
                (l =
                  (u = (33 === i.charCodeAt(t) ? i.substring(0, t) : i)
                    .substring(e.indexOf(':', 7) + 1)
                    .trim()).charCodeAt(0) +
                  (0 | u.charCodeAt(7))))
              ) {
                case 203:
                  if (111 > u.charCodeAt(8)) break;
                case 115:
                  i = i.replace(u, '-webkit-' + u) + ';' + i;
                  break;
                case 207:
                case 102:
                  i =
                    i.replace(u, '-webkit-' + (102 < l ? 'inline-' : '') + 'box') +
                    ';' +
                    i.replace(u, '-webkit-' + u) +
                    ';' +
                    i.replace(u, '-ms-' + u + 'box') +
                    ';' +
                    i;
              }
              return i + ';';
            case 938:
              if (45 === i.charCodeAt(5))
                switch (i.charCodeAt(6)) {
                  case 105:
                    return (u = i.replace('-items', '')), '-webkit-' + i + '-webkit-box-' + u + '-ms-flex-' + u + i;
                  case 115:
                    return '-webkit-' + i + '-ms-flex-item-' + i.replace(E, '') + i;
                  default:
                    return '-webkit-' + i + '-ms-flex-line-pack' + i.replace('align-content', '').replace(E, '') + i;
                }
              break;
            case 973:
            case 989:
              if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break;
            case 931:
            case 953:
              if (!0 === x.test(e))
                return 115 === (u = e.substring(e.indexOf(':') + 1)).charCodeAt(0)
                  ? o(e.replace('stretch', 'fill-available'), t, n, r).replace(':fill-available', ':stretch')
                  : i.replace(u, '-webkit-' + u) + i.replace(u, '-moz-' + u.replace('fill-', '')) + i;
              break;
            case 962:
              if (
                ((i = '-webkit-' + i + (102 === i.charCodeAt(5) ? '-ms-' + i : '') + i),
                211 === n + r && 105 === i.charCodeAt(13) && 0 < i.indexOf('transform', 10))
              )
                return i.substring(0, i.indexOf(';', 27) + 1).replace(h, '$1-webkit-$2') + i;
          }
          return i;
        }
        function a(e, t) {
          var n = e.indexOf(1 === t ? ':' : '{'),
            r = e.substring(0, 3 !== t ? n : 10);
          return (n = e.substring(n + 1, e.length - 1)), L(2 !== t ? r : r.replace(C, '$1'), n, t);
        }
        function i(e, t) {
          var n = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
          return n !== t + ';' ? n.replace(S, ' or ($1)').substring(4) : '(' + t + ')';
        }
        function l(e, t, n, r, o, a, i, l, u, s) {
          for (var f, d = 0, p = t; d < j; ++d)
            switch ((f = R[d].call(c, e, p, n, r, o, a, i, l, u, s))) {
              case void 0:
              case !1:
              case !0:
              case null:
                break;
              default:
                p = f;
            }
          if (p !== t) return p;
        }
        function u(e) {
          return (
            void 0 !== (e = e.prefix) &&
              ((L = null), e ? ('function' !== typeof e ? (A = 1) : ((A = 2), (L = e))) : (A = 0)),
            u
          );
        }
        function c(e, n) {
          var r = e;
          if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < j)) {
            var o = l(-1, n, r, r, P, O, 0, 0, 0, 0);
            void 0 !== o && 'string' === typeof o && (n = o);
          }
          var a = t(N, r, n, 0, 0);
          return (
            0 < j && void 0 !== (o = l(-2, a, r, r, P, O, a.length, 0, 0, 0)) && (a = o), '', (T = 0), (O = P = 1), a
          );
        }
        var s = /^\0+/g,
          f = /[\0\r\f]/g,
          d = /: */g,
          p = /zoo|gra/,
          h = /([,: ])(transform)/g,
          v = /,\r+?/g,
          m = /([\t\r\n ])*\f?&/g,
          g = /@(k\w+)\s*(\S*)\s*/,
          y = /::(place)/g,
          b = /:(read-only)/g,
          w = /[svh]\w+-[tblr]{2}/,
          k = /\(\s*(.*)\s*\)/g,
          S = /([\s\S]*?);/g,
          E = /-self|flex-/g,
          C = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          x = /stretch|:\s*\w+\-(?:conte|avail)/,
          _ = /([^-])(image-set\()/,
          O = 1,
          P = 1,
          T = 0,
          A = 1,
          N = [],
          R = [],
          j = 0,
          L = null,
          D = 0;
        return (
          (c.use = function e(t) {
            switch (t) {
              case void 0:
              case null:
                j = R.length = 0;
                break;
              default:
                if ('function' === typeof t) R[j++] = t;
                else if ('object' === typeof t) for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                else D = 0 | !!t;
            }
            return e;
          }),
          (c.set = u),
          void 0 !== e && u(e),
          c
        );
      };
    },
    function (e, t, n) {
      'use strict';
      t.a = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
    },
    function (e, t, n) {
      'use strict';
      var r = n(12);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ThemeProvider', {
          enumerable: !0,
          get: function () {
            return o.ThemeProvider;
          },
        }),
        Object.defineProperty(t, 'Cell', {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, 'Clue', {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, 'DirectionClues', {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, 'Crossword', {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, 'CrosswordContext', {
          enumerable: !0,
          get: function () {
            return c.CrosswordContext;
          },
        }),
        Object.defineProperty(t, 'CrosswordSizeContext', {
          enumerable: !0,
          get: function () {
            return c.CrosswordSizeContext;
          },
        }),
        (t.default = void 0);
      var o = n(2),
        a = r(n(27)),
        i = r(n(28)),
        l = r(n(29)),
        u = r(n(49)),
        c = n(17),
        s = u.default;
      t.default = s;
    },
    function (e, t, n) {
      'use strict';
      var r = n(21),
        o = 60103,
        a = 60106;
      (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
      var i = 60109,
        l = 60110,
        u = 60112;
      t.Suspense = 60113;
      var c = 60115,
        s = 60116;
      if ('function' === typeof Symbol && Symbol.for) {
        var f = Symbol.for;
        (o = f('react.element')),
          (a = f('react.portal')),
          (t.Fragment = f('react.fragment')),
          (t.StrictMode = f('react.strict_mode')),
          (t.Profiler = f('react.profiler')),
          (i = f('react.provider')),
          (l = f('react.context')),
          (u = f('react.forward_ref')),
          (t.Suspense = f('react.suspense')),
          (c = f('react.memo')),
          (s = f('react.lazy'));
      }
      var d = 'function' === typeof Symbol && Symbol.iterator;
      function p(e) {
        for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
          t += '&args[]=' + encodeURIComponent(arguments[n]);
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      var h = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        v = {};
      function m(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h);
      }
      function g() {}
      function y(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h);
      }
      (m.prototype.isReactComponent = {}),
        (m.prototype.setState = function (e, t) {
          if ('object' !== typeof e && 'function' !== typeof e && null != e) throw Error(p(85));
          this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        (m.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (g.prototype = m.prototype);
      var b = (y.prototype = new g());
      (b.constructor = y), r(b, m.prototype), (b.isPureReactComponent = !0);
      var w = { current: null },
        k = Object.prototype.hasOwnProperty,
        S = { key: !0, ref: !0, __self: !0, __source: !0 };
      function E(e, t, n) {
        var r,
          a = {},
          i = null,
          l = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = '' + t.key), t))
            k.call(t, r) && !S.hasOwnProperty(r) && (a[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u) a.children = n;
        else if (1 < u) {
          for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
          a.children = c;
        }
        if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
        return { $$typeof: o, type: e, key: i, ref: l, props: a, _owner: w.current };
      }
      function C(e) {
        return 'object' === typeof e && null !== e && e.$$typeof === o;
      }
      var x = /\/+/g;
      function _(e, t) {
        return 'object' === typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { '=': '=0', ':': '=2' };
              return (
                '$' +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })('' + e.key)
          : t.toString(36);
      }
      function O(e, t, n, r, i) {
        var l = typeof e;
        ('undefined' !== l && 'boolean' !== l) || (e = null);
        var u = !1;
        if (null === e) u = !0;
        else
          switch (l) {
            case 'string':
            case 'number':
              u = !0;
              break;
            case 'object':
              switch (e.$$typeof) {
                case o:
                case a:
                  u = !0;
              }
          }
        if (u)
          return (
            (i = i((u = e))),
            (e = '' === r ? '.' + _(u, 0) : r),
            Array.isArray(i)
              ? ((n = ''),
                null != e && (n = e.replace(x, '$&/') + '/'),
                O(i, t, n, '', function (e) {
                  return e;
                }))
              : null != i &&
                (C(i) &&
                  (i = (function (e, t) {
                    return { $$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                  })(i, n + (!i.key || (u && u.key === i.key) ? '' : ('' + i.key).replace(x, '$&/') + '/') + e)),
                t.push(i)),
            1
          );
        if (((u = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(e)))
          for (var c = 0; c < e.length; c++) {
            var s = r + _((l = e[c]), c);
            u += O(l, t, n, s, i);
          }
        else if (
          'function' ===
          typeof (s = (function (e) {
            return null === e || 'object' !== typeof e
              ? null
              : 'function' === typeof (e = (d && e[d]) || e['@@iterator'])
              ? e
              : null;
          })(e))
        )
          for (e = s.call(e), c = 0; !(l = e.next()).done; ) u += O((l = l.value), t, n, (s = r + _(l, c++)), i);
        else if ('object' === l)
          throw (
            ((t = '' + e),
            Error(p(31, '[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)))
          );
        return u;
      }
      function P(e, t, n) {
        if (null == e) return e;
        var r = [],
          o = 0;
        return (
          O(e, r, '', '', function (e) {
            return t.call(n, e, o++);
          }),
          r
        );
      }
      function T(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
              function (t) {
                0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
              },
              function (t) {
                0 === e._status && ((e._status = 2), (e._result = t));
              }
            );
        }
        if (1 === e._status) return e._result;
        throw e._result;
      }
      var A = { current: null };
      function N() {
        var e = A.current;
        if (null === e) throw Error(p(321));
        return e;
      }
      var R = {
        ReactCurrentDispatcher: A,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: w,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (t.Children = {
        map: P,
        forEach: function (e, t, n) {
          P(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            P(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            P(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!C(e)) throw Error(p(143));
          return e;
        },
      }),
        (t.Component = m),
        (t.PureComponent = y),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
        (t.cloneElement = function (e, t, n) {
          if (null === e || void 0 === e) throw Error(p(267, e));
          var a = r({}, e.props),
            i = e.key,
            l = e.ref,
            u = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((l = t.ref), (u = w.current)),
              void 0 !== t.key && (i = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var c = e.type.defaultProps;
            for (s in t) k.call(t, s) && !S.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
          }
          var s = arguments.length - 2;
          if (1 === s) a.children = n;
          else if (1 < s) {
            c = Array(s);
            for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
            a.children = c;
          }
          return { $$typeof: o, type: e.type, key: i, ref: l, props: a, _owner: u };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: l,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: i, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = E),
        (t.createFactory = function (e) {
          var t = E.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: u, render: e };
        }),
        (t.isValidElement = C),
        (t.lazy = function (e) {
          return { $$typeof: s, _payload: { _status: -1, _result: e }, _init: T };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return N().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return N().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return N().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return N().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return N().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return N().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return N().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return N().useRef(e);
        }),
        (t.useState = function (e) {
          return N().useState(e);
        }),
        (t.version = '17.0.2');
    },
    function (e, t, n) {
      'use strict';
      var r = n(1),
        o = n(21),
        a = n(37);
      function i(e) {
        for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
          t += '&args[]=' + encodeURIComponent(arguments[n]);
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      if (!r) throw Error(i(227));
      var l = new Set(),
        u = {};
      function c(e, t) {
        s(e, t), s(e + 'Capture', t);
      }
      function s(e, t) {
        for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
      }
      var f = !(
          'undefined' === typeof window ||
          'undefined' === typeof window.document ||
          'undefined' === typeof window.document.createElement
        ),
        d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        p = Object.prototype.hasOwnProperty,
        h = {},
        v = {};
      function m(e, t, n, r, o, a, i) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = o),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = a),
          (this.removeEmptyString = i);
      }
      var g = {};
      'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
        .split(' ')
        .forEach(function (e) {
          g[e] = new m(e, 0, !1, e, null, !1, !1);
        }),
        [
          ['acceptCharset', 'accept-charset'],
          ['className', 'class'],
          ['htmlFor', 'for'],
          ['httpEquiv', 'http-equiv'],
        ].forEach(function (e) {
          var t = e[0];
          g[t] = new m(t, 1, !1, e[1], null, !1, !1);
        }),
        ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
          g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
        }),
        ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
          g[e] = new m(e, 2, !1, e, null, !1, !1);
        }),
        'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
          .split(' ')
          .forEach(function (e) {
            g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
          g[e] = new m(e, 3, !0, e, null, !1, !1);
        }),
        ['capture', 'download'].forEach(function (e) {
          g[e] = new m(e, 4, !1, e, null, !1, !1);
        }),
        ['cols', 'rows', 'size', 'span'].forEach(function (e) {
          g[e] = new m(e, 6, !1, e, null, !1, !1);
        }),
        ['rowSpan', 'start'].forEach(function (e) {
          g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var y = /[\-:]([a-z])/g;
      function b(e) {
        return e[1].toUpperCase();
      }
      function w(e, t, n, r) {
        var o = g.hasOwnProperty(t) ? g[t] : null;
        (null !== o
          ? 0 === o.type
          : !r && 2 < t.length && ('o' === t[0] || 'O' === t[0]) && ('n' === t[1] || 'N' === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null === t ||
              'undefined' === typeof t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case 'function':
                  case 'symbol':
                    return !0;
                  case 'boolean':
                    return (
                      !r &&
                      (null !== n ? !n.acceptsBooleans : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, o, r) && (n = null),
          r || null === o
            ? (function (e) {
                return !!p.call(v, e) || (!p.call(h, e) && (d.test(e) ? (v[e] = !0) : ((h[e] = !0), !1)));
              })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : o.mustUseProperty
            ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
            : ((t = o.attributeName),
              (r = o.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? '' : '' + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
        .split(' ')
        .forEach(function (e) {
          var t = e.replace(y, b);
          g[t] = new m(t, 1, !1, e, null, !1, !1);
        }),
        'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
          var t = e.replace(y, b);
          g[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
        }),
        ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
          var t = e.replace(y, b);
          g[t] = new m(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
        }),
        ['tabIndex', 'crossOrigin'].forEach(function (e) {
          g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (g.xlinkHref = new m('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
        ['src', 'href', 'action', 'formAction'].forEach(function (e) {
          g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        S = 60103,
        E = 60106,
        C = 60107,
        x = 60108,
        _ = 60114,
        O = 60109,
        P = 60110,
        T = 60112,
        A = 60113,
        N = 60120,
        R = 60115,
        j = 60116,
        L = 60121,
        D = 60128,
        I = 60129,
        z = 60130,
        M = 60131;
      if ('function' === typeof Symbol && Symbol.for) {
        var F = Symbol.for;
        (S = F('react.element')),
          (E = F('react.portal')),
          (C = F('react.fragment')),
          (x = F('react.strict_mode')),
          (_ = F('react.profiler')),
          (O = F('react.provider')),
          (P = F('react.context')),
          (T = F('react.forward_ref')),
          (A = F('react.suspense')),
          (N = F('react.suspense_list')),
          (R = F('react.memo')),
          (j = F('react.lazy')),
          (L = F('react.block')),
          F('react.scope'),
          (D = F('react.opaque.id')),
          (I = F('react.debug_trace_mode')),
          (z = F('react.offscreen')),
          (M = F('react.legacy_hidden'));
      }
      var U,
        B = 'function' === typeof Symbol && Symbol.iterator;
      function $(e) {
        return null === e || 'object' !== typeof e
          ? null
          : 'function' === typeof (e = (B && e[B]) || e['@@iterator'])
          ? e
          : null;
      }
      function W(e) {
        if (void 0 === U)
          try {
            throw Error();
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            U = (t && t[1]) || '';
          }
        return '\n' + U + e;
      }
      var H = !1;
      function V(e, t) {
        if (!e || H) return '';
        H = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
              Object.defineProperty(t.prototype, 'props', {
                set: function () {
                  throw Error();
                },
              }),
              'object' === typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (u) {
                var r = u;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (u) {
                r = u;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (u) {
              r = u;
            }
            e();
          }
        } catch (u) {
          if (u && r && 'string' === typeof u.stack) {
            for (
              var o = u.stack.split('\n'), a = r.stack.split('\n'), i = o.length - 1, l = a.length - 1;
              1 <= i && 0 <= l && o[i] !== a[l];

            )
              l--;
            for (; 1 <= i && 0 <= l; i--, l--)
              if (o[i] !== a[l]) {
                if (1 !== i || 1 !== l)
                  do {
                    if ((i--, 0 > --l || o[i] !== a[l])) return '\n' + o[i].replace(' at new ', ' at ');
                  } while (1 <= i && 0 <= l);
                break;
              }
          }
        } finally {
          (H = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : '') ? W(e) : '';
      }
      function K(e) {
        switch (e.tag) {
          case 5:
            return W(e.type);
          case 16:
            return W('Lazy');
          case 13:
            return W('Suspense');
          case 19:
            return W('SuspenseList');
          case 0:
          case 2:
          case 15:
            return (e = V(e.type, !1));
          case 11:
            return (e = V(e.type.render, !1));
          case 22:
            return (e = V(e.type._render, !1));
          case 1:
            return (e = V(e.type, !0));
          default:
            return '';
        }
      }
      function Q(e) {
        if (null == e) return null;
        if ('function' === typeof e) return e.displayName || e.name || null;
        if ('string' === typeof e) return e;
        switch (e) {
          case C:
            return 'Fragment';
          case E:
            return 'Portal';
          case _:
            return 'Profiler';
          case x:
            return 'StrictMode';
          case A:
            return 'Suspense';
          case N:
            return 'SuspenseList';
        }
        if ('object' === typeof e)
          switch (e.$$typeof) {
            case P:
              return (e.displayName || 'Context') + '.Consumer';
            case O:
              return (e._context.displayName || 'Context') + '.Provider';
            case T:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ''),
                e.displayName || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
              );
            case R:
              return Q(e.type);
            case L:
              return Q(e._render);
            case j:
              (t = e._payload), (e = e._init);
              try {
                return Q(e(t));
              } catch (n) {}
          }
        return null;
      }
      function q(e) {
        switch (typeof e) {
          case 'boolean':
          case 'number':
          case 'object':
          case 'string':
          case 'undefined':
            return e;
          default:
            return '';
        }
      }
      function G(e) {
        var t = e.type;
        return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
      }
      function Y(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = G(e) ? 'checked' : 'value',
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = '' + e[t];
            if (
              !e.hasOwnProperty(t) &&
              'undefined' !== typeof n &&
              'function' === typeof n.get &&
              'function' === typeof n.set
            ) {
              var o = n.get,
                a = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return o.call(this);
                  },
                  set: function (e) {
                    (r = '' + e), a.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = '' + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function X(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = '';
        return e && (r = G(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0);
      }
      function J(e) {
        if ('undefined' === typeof (e = e || ('undefined' !== typeof document ? document : void 0))) return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function Z(e, t) {
        var n = t.checked;
        return o({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function ee(e, t) {
        var n = null == t.defaultValue ? '' : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = q(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
          });
      }
      function te(e, t) {
        null != (t = t.checked) && w(e, 'checked', t, !1);
      }
      function ne(e, t) {
        te(e, t);
        var n = q(t.value),
          r = t.type;
        if (null != n)
          'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
        else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
        t.hasOwnProperty('value')
          ? oe(e, t.type, n)
          : t.hasOwnProperty('defaultValue') && oe(e, t.type, q(t.defaultValue)),
          null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
      }
      function re(e, t, n) {
        if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
          var r = t.type;
          if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
          (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
        }
        '' !== (n = e.name) && (e.name = ''),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          '' !== n && (e.name = n);
      }
      function oe(e, t, n) {
        ('number' === t && J(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
      }
      function ae(e, t) {
        return (
          (e = o({ children: void 0 }, t)),
          (t = (function (e) {
            var t = '';
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function ie(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
          for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty('$' + e[n].value)),
              e[n].selected !== o && (e[n].selected = o),
              o && r && (e[n].defaultSelected = !0);
        } else {
          for (n = '' + q(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
            null !== t || e[o].disabled || (t = e[o]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function le(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
        return o({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
      }
      function ue(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(i(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(i(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ''), (n = t);
        }
        e._wrapperState = { initialValue: q(n) };
      }
      function ce(e, t) {
        var n = q(t.value),
          r = q(t.defaultValue);
        null != n &&
          ((n = '' + n) !== e.value && (e.value = n),
          null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
          null != r && (e.defaultValue = '' + r);
      }
      function se(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
      }
      var fe = 'http://www.w3.org/1999/xhtml',
        de = 'http://www.w3.org/2000/svg';
      function pe(e) {
        switch (e) {
          case 'svg':
            return 'http://www.w3.org/2000/svg';
          case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
          default:
            return 'http://www.w3.org/1999/xhtml';
        }
      }
      function he(e, t) {
        return null == e || 'http://www.w3.org/1999/xhtml' === e
          ? pe(t)
          : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
      }
      var ve,
        me,
        ge =
          ((me = function (e, t) {
            if (e.namespaceURI !== de || 'innerHTML' in e) e.innerHTML = t;
            else {
              for (
                (ve = ve || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                  t = ve.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return me(e, t);
                });
              }
            : me);
      function ye(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var be = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        we = ['Webkit', 'ms', 'Moz', 'O'];
      function ke(e, t, n) {
        return null == t || 'boolean' === typeof t || '' === t
          ? ''
          : n || 'number' !== typeof t || 0 === t || (be.hasOwnProperty(e) && be[e])
          ? ('' + t).trim()
          : t + 'px';
      }
      function Se(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
              o = ke(n, t[n], r);
            'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
          }
      }
      Object.keys(be).forEach(function (e) {
        we.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (be[t] = be[e]);
        });
      });
      var Ee = o(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function Ce(e, t) {
        if (t) {
          if (Ee[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(i(60));
            if ('object' !== typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
              throw Error(i(61));
          }
          if (null != t.style && 'object' !== typeof t.style) throw Error(i(62));
        }
      }
      function xe(e, t) {
        if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
        switch (e) {
          case 'annotation-xml':
          case 'color-profile':
          case 'font-face':
          case 'font-face-src':
          case 'font-face-uri':
          case 'font-face-format':
          case 'font-face-name':
          case 'missing-glyph':
            return !1;
          default:
            return !0;
        }
      }
      function _e(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Oe = null,
        Pe = null,
        Te = null;
      function Ae(e) {
        if ((e = eo(e))) {
          if ('function' !== typeof Oe) throw Error(i(280));
          var t = e.stateNode;
          t && ((t = no(t)), Oe(e.stateNode, e.type, t));
        }
      }
      function Ne(e) {
        Pe ? (Te ? Te.push(e) : (Te = [e])) : (Pe = e);
      }
      function Re() {
        if (Pe) {
          var e = Pe,
            t = Te;
          if (((Te = Pe = null), Ae(e), t)) for (e = 0; e < t.length; e++) Ae(t[e]);
        }
      }
      function je(e, t) {
        return e(t);
      }
      function Le(e, t, n, r, o) {
        return e(t, n, r, o);
      }
      function De() {}
      var Ie = je,
        ze = !1,
        Me = !1;
      function Fe() {
        (null === Pe && null === Te) || (De(), Re());
      }
      function Ue(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = no(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case 'onClick':
          case 'onClickCapture':
          case 'onDoubleClick':
          case 'onDoubleClickCapture':
          case 'onMouseDown':
          case 'onMouseDownCapture':
          case 'onMouseMove':
          case 'onMouseMoveCapture':
          case 'onMouseUp':
          case 'onMouseUpCapture':
          case 'onMouseEnter':
            (r = !r.disabled) ||
              (r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && 'function' !== typeof n) throw Error(i(231, t, typeof n));
        return n;
      }
      var Be = !1;
      if (f)
        try {
          var $e = {};
          Object.defineProperty($e, 'passive', {
            get: function () {
              Be = !0;
            },
          }),
            window.addEventListener('test', $e, $e),
            window.removeEventListener('test', $e, $e);
        } catch (me) {
          Be = !1;
        }
      function We(e, t, n, r, o, a, i, l, u) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, c);
        } catch (s) {
          this.onError(s);
        }
      }
      var He = !1,
        Ve = null,
        Ke = !1,
        Qe = null,
        qe = {
          onError: function (e) {
            (He = !0), (Ve = e);
          },
        };
      function Ge(e, t, n, r, o, a, i, l, u) {
        (He = !1), (Ve = null), We.apply(qe, arguments);
      }
      function Ye(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function Xe(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
        }
        return null;
      }
      function Je(e) {
        if (Ye(e) !== e) throw Error(i(188));
      }
      function Ze(e) {
        if (
          !(e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Ye(e))) throw Error(i(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var o = n.return;
              if (null === o) break;
              var a = o.alternate;
              if (null === a) {
                if (null !== (r = o.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (o.child === a.child) {
                for (a = o.child; a; ) {
                  if (a === n) return Je(o), e;
                  if (a === r) return Je(o), t;
                  a = a.sibling;
                }
                throw Error(i(188));
              }
              if (n.return !== r.return) (n = o), (r = a);
              else {
                for (var l = !1, u = o.child; u; ) {
                  if (u === n) {
                    (l = !0), (n = o), (r = a);
                    break;
                  }
                  if (u === r) {
                    (l = !0), (r = o), (n = a);
                    break;
                  }
                  u = u.sibling;
                }
                if (!l) {
                  for (u = a.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = a), (r = o);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = a), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) throw Error(i(189));
                }
              }
              if (n.alternate !== r) throw Error(i(190));
            }
            if (3 !== n.tag) throw Error(i(188));
            return n.stateNode.current === n ? e : t;
          })(e))
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      function et(e, t) {
        for (var n = e.alternate; null !== t; ) {
          if (t === e || t === n) return !0;
          t = t.return;
        }
        return !1;
      }
      var tt,
        nt,
        rt,
        ot,
        at = !1,
        it = [],
        lt = null,
        ut = null,
        ct = null,
        st = new Map(),
        ft = new Map(),
        dt = [],
        pt = 'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
          ' '
        );
      function ht(e, t, n, r, o) {
        return { blockedOn: e, domEventName: t, eventSystemFlags: 16 | n, nativeEvent: o, targetContainers: [r] };
      }
      function vt(e, t) {
        switch (e) {
          case 'focusin':
          case 'focusout':
            lt = null;
            break;
          case 'dragenter':
          case 'dragleave':
            ut = null;
            break;
          case 'mouseover':
          case 'mouseout':
            ct = null;
            break;
          case 'pointerover':
          case 'pointerout':
            st.delete(t.pointerId);
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
            ft.delete(t.pointerId);
        }
      }
      function mt(e, t, n, r, o, a) {
        return null === e || e.nativeEvent !== a
          ? ((e = ht(t, n, r, o, a)), null !== t && null !== (t = eo(t)) && nt(t), e)
          : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== o && -1 === t.indexOf(o) && t.push(o), e);
      }
      function gt(e) {
        var t = Zr(e.target);
        if (null !== t) {
          var n = Ye(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Xe(n)))
                return (
                  (e.blockedOn = t),
                  void ot(e.lanePriority, function () {
                    a.unstable_runWithPriority(e.priority, function () {
                      rt(n);
                    });
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function yt(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n) return null !== (t = eo(n)) && nt(t), (e.blockedOn = n), !1;
          t.shift();
        }
        return !0;
      }
      function bt(e, t, n) {
        yt(e) && n.delete(t);
      }
      function wt() {
        for (at = !1; 0 < it.length; ) {
          var e = it[0];
          if (null !== e.blockedOn) {
            null !== (e = eo(e.blockedOn)) && tt(e);
            break;
          }
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) {
              e.blockedOn = n;
              break;
            }
            t.shift();
          }
          null === e.blockedOn && it.shift();
        }
        null !== lt && yt(lt) && (lt = null),
          null !== ut && yt(ut) && (ut = null),
          null !== ct && yt(ct) && (ct = null),
          st.forEach(bt),
          ft.forEach(bt);
      }
      function kt(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null), at || ((at = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, wt)));
      }
      function St(e) {
        function t(t) {
          return kt(t, e);
        }
        if (0 < it.length) {
          kt(it[0], e);
          for (var n = 1; n < it.length; n++) {
            var r = it[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== lt && kt(lt, e),
            null !== ut && kt(ut, e),
            null !== ct && kt(ct, e),
            st.forEach(t),
            ft.forEach(t),
            n = 0;
          n < dt.length;
          n++
        )
          (r = dt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < dt.length && null === (n = dt[0]).blockedOn; ) gt(n), null === n.blockedOn && dt.shift();
      }
      function Et(e, t) {
        var n = {};
        return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
      }
      var Ct = {
          animationend: Et('Animation', 'AnimationEnd'),
          animationiteration: Et('Animation', 'AnimationIteration'),
          animationstart: Et('Animation', 'AnimationStart'),
          transitionend: Et('Transition', 'TransitionEnd'),
        },
        xt = {},
        _t = {};
      function Ot(e) {
        if (xt[e]) return xt[e];
        if (!Ct[e]) return e;
        var t,
          n = Ct[e];
        for (t in n) if (n.hasOwnProperty(t) && t in _t) return (xt[e] = n[t]);
        return e;
      }
      f &&
        ((_t = document.createElement('div').style),
        'AnimationEvent' in window ||
          (delete Ct.animationend.animation,
          delete Ct.animationiteration.animation,
          delete Ct.animationstart.animation),
        'TransitionEvent' in window || delete Ct.transitionend.transition);
      var Pt = Ot('animationend'),
        Tt = Ot('animationiteration'),
        At = Ot('animationstart'),
        Nt = Ot('transitionend'),
        Rt = new Map(),
        jt = new Map(),
        Lt = [
          'abort',
          'abort',
          Pt,
          'animationEnd',
          Tt,
          'animationIteration',
          At,
          'animationStart',
          'canplay',
          'canPlay',
          'canplaythrough',
          'canPlayThrough',
          'durationchange',
          'durationChange',
          'emptied',
          'emptied',
          'encrypted',
          'encrypted',
          'ended',
          'ended',
          'error',
          'error',
          'gotpointercapture',
          'gotPointerCapture',
          'load',
          'load',
          'loadeddata',
          'loadedData',
          'loadedmetadata',
          'loadedMetadata',
          'loadstart',
          'loadStart',
          'lostpointercapture',
          'lostPointerCapture',
          'playing',
          'playing',
          'progress',
          'progress',
          'seeking',
          'seeking',
          'stalled',
          'stalled',
          'suspend',
          'suspend',
          'timeupdate',
          'timeUpdate',
          Nt,
          'transitionEnd',
          'waiting',
          'waiting',
        ];
      function Dt(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            o = e[n + 1];
          (o = 'on' + (o[0].toUpperCase() + o.slice(1))), jt.set(r, t), Rt.set(r, o), c(o, [r]);
        }
      }
      (0, a.unstable_now)();
      var It = 8;
      function zt(e) {
        if (0 !== (1 & e)) return (It = 15), 1;
        if (0 !== (2 & e)) return (It = 14), 2;
        if (0 !== (4 & e)) return (It = 13), 4;
        var t = 24 & e;
        return 0 !== t
          ? ((It = 12), t)
          : 0 !== (32 & e)
          ? ((It = 11), 32)
          : 0 !== (t = 192 & e)
          ? ((It = 10), t)
          : 0 !== (256 & e)
          ? ((It = 9), 256)
          : 0 !== (t = 3584 & e)
          ? ((It = 8), t)
          : 0 !== (4096 & e)
          ? ((It = 7), 4096)
          : 0 !== (t = 4186112 & e)
          ? ((It = 6), t)
          : 0 !== (t = 62914560 & e)
          ? ((It = 5), t)
          : 67108864 & e
          ? ((It = 4), 67108864)
          : 0 !== (134217728 & e)
          ? ((It = 3), 134217728)
          : 0 !== (t = 805306368 & e)
          ? ((It = 2), t)
          : 0 !== (1073741824 & e)
          ? ((It = 1), 1073741824)
          : ((It = 8), e);
      }
      function Mt(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return (It = 0);
        var r = 0,
          o = 0,
          a = e.expiredLanes,
          i = e.suspendedLanes,
          l = e.pingedLanes;
        if (0 !== a) (r = a), (o = It = 15);
        else if (0 !== (a = 134217727 & n)) {
          var u = a & ~i;
          0 !== u ? ((r = zt(u)), (o = It)) : 0 !== (l &= a) && ((r = zt(l)), (o = It));
        } else 0 !== (a = n & ~i) ? ((r = zt(a)), (o = It)) : 0 !== l && ((r = zt(l)), (o = It));
        if (0 === r) return 0;
        if (((r = n & (((0 > (r = 31 - Ht(r)) ? 0 : 1 << r) << 1) - 1)), 0 !== t && t !== r && 0 === (t & i))) {
          if ((zt(t), o <= It)) return t;
          It = o;
        }
        if (0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t; ) (o = 1 << (n = 31 - Ht(t))), (r |= e[n]), (t &= ~o);
        return r;
      }
      function Ft(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
      }
      function Ut(e, t) {
        switch (e) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return 0 === (e = Bt(24 & ~t)) ? Ut(10, t) : e;
          case 10:
            return 0 === (e = Bt(192 & ~t)) ? Ut(8, t) : e;
          case 8:
            return 0 === (e = Bt(3584 & ~t)) && 0 === (e = Bt(4186112 & ~t)) && (e = 512), e;
          case 2:
            return 0 === (t = Bt(805306368 & ~t)) && (t = 268435456), t;
        }
        throw Error(i(358, e));
      }
      function Bt(e) {
        return e & -e;
      }
      function $t(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function Wt(e, t, n) {
        e.pendingLanes |= t;
        var r = t - 1;
        (e.suspendedLanes &= r), (e.pingedLanes &= r), ((e = e.eventTimes)[(t = 31 - Ht(t))] = n);
      }
      var Ht = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === e ? 32 : (31 - ((Vt(e) / Kt) | 0)) | 0;
            },
        Vt = Math.log,
        Kt = Math.LN2;
      var Qt = a.unstable_UserBlockingPriority,
        qt = a.unstable_runWithPriority,
        Gt = !0;
      function Yt(e, t, n, r) {
        ze || De();
        var o = Jt,
          a = ze;
        ze = !0;
        try {
          Le(o, e, t, n, r);
        } finally {
          (ze = a) || Fe();
        }
      }
      function Xt(e, t, n, r) {
        qt(Qt, Jt.bind(null, e, t, n, r));
      }
      function Jt(e, t, n, r) {
        var o;
        if (Gt)
          if ((o = 0 === (4 & t)) && 0 < it.length && -1 < pt.indexOf(e)) (e = ht(null, e, t, n, r)), it.push(e);
          else {
            var a = Zt(e, t, n, r);
            if (null === a) o && vt(e, r);
            else {
              if (o) {
                if (-1 < pt.indexOf(e)) return (e = ht(a, e, t, n, r)), void it.push(e);
                if (
                  (function (e, t, n, r, o) {
                    switch (t) {
                      case 'focusin':
                        return (lt = mt(lt, e, t, n, r, o)), !0;
                      case 'dragenter':
                        return (ut = mt(ut, e, t, n, r, o)), !0;
                      case 'mouseover':
                        return (ct = mt(ct, e, t, n, r, o)), !0;
                      case 'pointerover':
                        var a = o.pointerId;
                        return st.set(a, mt(st.get(a) || null, e, t, n, r, o)), !0;
                      case 'gotpointercapture':
                        return (a = o.pointerId), ft.set(a, mt(ft.get(a) || null, e, t, n, r, o)), !0;
                    }
                    return !1;
                  })(a, e, t, n, r)
                )
                  return;
                vt(e, r);
              }
              Rr(e, t, r, null, n);
            }
          }
      }
      function Zt(e, t, n, r) {
        var o = _e(r);
        if (null !== (o = Zr(o))) {
          var a = Ye(o);
          if (null === a) o = null;
          else {
            var i = a.tag;
            if (13 === i) {
              if (null !== (o = Xe(a))) return o;
              o = null;
            } else if (3 === i) {
              if (a.stateNode.hydrate) return 3 === a.tag ? a.stateNode.containerInfo : null;
              o = null;
            } else a !== o && (o = null);
          }
        }
        return Rr(e, t, r, o, n), null;
      }
      var en = null,
        tn = null,
        nn = null;
      function rn() {
        if (nn) return nn;
        var e,
          t,
          n = tn,
          r = n.length,
          o = 'value' in en ? en.value : en.textContent,
          a = o.length;
        for (e = 0; e < r && n[e] === o[e]; e++);
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
        return (nn = o.slice(e, 1 < t ? 1 - t : void 0));
      }
      function on(e) {
        var t = e.keyCode;
        return (
          'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function an() {
        return !0;
      }
      function ln() {
        return !1;
      }
      function un(e) {
        function t(t, n, r, o, a) {
          for (var i in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = o),
          (this.target = a),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
          return (
            (this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue)
              ? an
              : ln),
            (this.isPropagationStopped = ln),
            this
          );
        }
        return (
          o(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault ? e.preventDefault() : 'unknown' !== typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = an));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation ? e.stopPropagation() : 'unknown' !== typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = an));
            },
            persist: function () {},
            isPersistent: an,
          }),
          t
        );
      }
      var cn,
        sn,
        fn,
        dn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        pn = un(dn),
        hn = o({}, dn, { view: 0, detail: 0 }),
        vn = un(hn),
        mn = o({}, hn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: On,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return 'movementX' in e
              ? e.movementX
              : (e !== fn &&
                  (fn && 'mousemove' === e.type
                    ? ((cn = e.screenX - fn.screenX), (sn = e.screenY - fn.screenY))
                    : (sn = cn = 0),
                  (fn = e)),
                cn);
          },
          movementY: function (e) {
            return 'movementY' in e ? e.movementY : sn;
          },
        }),
        gn = un(mn),
        yn = un(o({}, mn, { dataTransfer: 0 })),
        bn = un(o({}, hn, { relatedTarget: 0 })),
        wn = un(o({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
        kn = un(
          o({}, dn, {
            clipboardData: function (e) {
              return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
          })
        ),
        Sn = un(o({}, dn, { data: 0 })),
        En = {
          Esc: 'Escape',
          Spacebar: ' ',
          Left: 'ArrowLeft',
          Up: 'ArrowUp',
          Right: 'ArrowRight',
          Down: 'ArrowDown',
          Del: 'Delete',
          Win: 'OS',
          Menu: 'ContextMenu',
          Apps: 'ContextMenu',
          Scroll: 'ScrollLock',
          MozPrintableKey: 'Unidentified',
        },
        Cn = {
          8: 'Backspace',
          9: 'Tab',
          12: 'Clear',
          13: 'Enter',
          16: 'Shift',
          17: 'Control',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Escape',
          32: ' ',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'ArrowLeft',
          38: 'ArrowUp',
          39: 'ArrowRight',
          40: 'ArrowDown',
          45: 'Insert',
          46: 'Delete',
          112: 'F1',
          113: 'F2',
          114: 'F3',
          115: 'F4',
          116: 'F5',
          117: 'F6',
          118: 'F7',
          119: 'F8',
          120: 'F9',
          121: 'F10',
          122: 'F11',
          123: 'F12',
          144: 'NumLock',
          145: 'ScrollLock',
          224: 'Meta',
        },
        xn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
      function _n(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = xn[e]) && !!t[e];
      }
      function On() {
        return _n;
      }
      var Pn = un(
          o({}, hn, {
            key: function (e) {
              if (e.key) {
                var t = En[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = on(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? Cn[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: On,
            charCode: function (e) {
              return 'keypress' === e.type ? on(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type ? on(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
          })
        ),
        Tn = un(
          o({}, mn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        An = un(
          o({}, hn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: On,
          })
        ),
        Nn = un(o({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
        Rn = un(
          o({}, mn, {
            deltaX: function (e) {
              return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          })
        ),
        jn = [9, 13, 27, 32],
        Ln = f && 'CompositionEvent' in window,
        Dn = null;
      f && 'documentMode' in document && (Dn = document.documentMode);
      var In = f && 'TextEvent' in window && !Dn,
        zn = f && (!Ln || (Dn && 8 < Dn && 11 >= Dn)),
        Mn = String.fromCharCode(32),
        Fn = !1;
      function Un(e, t) {
        switch (e) {
          case 'keyup':
            return -1 !== jn.indexOf(t.keyCode);
          case 'keydown':
            return 229 !== t.keyCode;
          case 'keypress':
          case 'mousedown':
          case 'focusout':
            return !0;
          default:
            return !1;
        }
      }
      function Bn(e) {
        return 'object' === typeof (e = e.detail) && 'data' in e ? e.data : null;
      }
      var $n = !1;
      var Wn = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Hn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return 'input' === t ? !!Wn[e.type] : 'textarea' === t;
      }
      function Vn(e, t, n, r) {
        Ne(r),
          0 < (t = Lr(t, 'onChange')).length &&
            ((n = new pn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
      }
      var Kn = null,
        Qn = null;
      function qn(e) {
        _r(e, 0);
      }
      function Gn(e) {
        if (X(to(e))) return e;
      }
      function Yn(e, t) {
        if ('change' === e) return t;
      }
      var Xn = !1;
      if (f) {
        var Jn;
        if (f) {
          var Zn = 'oninput' in document;
          if (!Zn) {
            var er = document.createElement('div');
            er.setAttribute('oninput', 'return;'), (Zn = 'function' === typeof er.oninput);
          }
          Jn = Zn;
        } else Jn = !1;
        Xn = Jn && (!document.documentMode || 9 < document.documentMode);
      }
      function tr() {
        Kn && (Kn.detachEvent('onpropertychange', nr), (Qn = Kn = null));
      }
      function nr(e) {
        if ('value' === e.propertyName && Gn(Qn)) {
          var t = [];
          if ((Vn(t, Qn, e, _e(e)), (e = qn), ze)) e(t);
          else {
            ze = !0;
            try {
              je(e, t);
            } finally {
              (ze = !1), Fe();
            }
          }
        }
      }
      function rr(e, t, n) {
        'focusin' === e ? (tr(), (Qn = n), (Kn = t).attachEvent('onpropertychange', nr)) : 'focusout' === e && tr();
      }
      function or(e) {
        if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Gn(Qn);
      }
      function ar(e, t) {
        if ('click' === e) return Gn(t);
      }
      function ir(e, t) {
        if ('input' === e || 'change' === e) return Gn(t);
      }
      var lr =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
              },
        ur = Object.prototype.hasOwnProperty;
      function cr(e, t) {
        if (lr(e, t)) return !0;
        if ('object' !== typeof e || null === e || 'object' !== typeof t || null === t) return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) if (!ur.call(t, n[r]) || !lr(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      function sr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function fr(e, t) {
        var n,
          r = sr(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = sr(r);
        }
      }
      function dr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? dr(e, t.parentNode)
                : 'contains' in e
                ? e.contains(t)
                : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function pr() {
        for (var e = window, t = J(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = 'string' === typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = J((e = t.contentWindow).document);
        }
        return t;
      }
      function hr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (('input' === t &&
            ('text' === e.type ||
              'search' === e.type ||
              'tel' === e.type ||
              'url' === e.type ||
              'password' === e.type)) ||
            'textarea' === t ||
            'true' === e.contentEditable)
        );
      }
      var vr = f && 'documentMode' in document && 11 >= document.documentMode,
        mr = null,
        gr = null,
        yr = null,
        br = !1;
      function wr(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        br ||
          null == mr ||
          mr !== J(r) ||
          ('selectionStart' in (r = mr) && hr(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                  .anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
          (yr && cr(yr, r)) ||
            ((yr = r),
            0 < (r = Lr(gr, 'onSelect')).length &&
              ((t = new pn('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = mr))));
      }
      Dt(
        'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
          ' '
        ),
        0
      ),
        Dt(
          'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
            ' '
          ),
          1
        ),
        Dt(Lt, 2);
      for (
        var kr = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(' '),
          Sr = 0;
        Sr < kr.length;
        Sr++
      )
        jt.set(kr[Sr], 0);
      s('onMouseEnter', ['mouseout', 'mouseover']),
        s('onMouseLeave', ['mouseout', 'mouseover']),
        s('onPointerEnter', ['pointerout', 'pointerover']),
        s('onPointerLeave', ['pointerout', 'pointerover']),
        c('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
        c(
          'onSelect',
          'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
        ),
        c('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
        c('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
        c('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
        c('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
      var Er = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' '
        ),
        Cr = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Er));
      function xr(e, t, n) {
        var r = e.type || 'unknown-event';
        (e.currentTarget = n),
          (function (e, t, n, r, o, a, l, u, c) {
            if ((Ge.apply(this, arguments), He)) {
              if (!He) throw Error(i(198));
              var s = Ve;
              (He = !1), (Ve = null), Ke || ((Ke = !0), (Qe = s));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function _r(e, t) {
        t = 0 !== (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            o = r.event;
          r = r.listeners;
          e: {
            var a = void 0;
            if (t)
              for (var i = r.length - 1; 0 <= i; i--) {
                var l = r[i],
                  u = l.instance,
                  c = l.currentTarget;
                if (((l = l.listener), u !== a && o.isPropagationStopped())) break e;
                xr(o, l, c), (a = u);
              }
            else
              for (i = 0; i < r.length; i++) {
                if (
                  ((u = (l = r[i]).instance),
                  (c = l.currentTarget),
                  (l = l.listener),
                  u !== a && o.isPropagationStopped())
                )
                  break e;
                xr(o, l, c), (a = u);
              }
          }
        }
        if (Ke) throw ((e = Qe), (Ke = !1), (Qe = null), e);
      }
      function Or(e, t) {
        var n = ro(t),
          r = e + '__bubble';
        n.has(r) || (Nr(t, e, 2, !1), n.add(r));
      }
      var Pr = '_reactListening' + Math.random().toString(36).slice(2);
      function Tr(e) {
        e[Pr] ||
          ((e[Pr] = !0),
          l.forEach(function (t) {
            Cr.has(t) || Ar(t, !1, e, null), Ar(t, !0, e, null);
          }));
      }
      function Ar(e, t, n, r) {
        var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
          a = n;
        if (('selectionchange' === e && 9 !== n.nodeType && (a = n.ownerDocument), null !== r && !t && Cr.has(e))) {
          if ('scroll' !== e) return;
          (o |= 2), (a = r);
        }
        var i = ro(a),
          l = e + '__' + (t ? 'capture' : 'bubble');
        i.has(l) || (t && (o |= 4), Nr(a, e, o, t), i.add(l));
      }
      function Nr(e, t, n, r) {
        var o = jt.get(t);
        switch (void 0 === o ? 2 : o) {
          case 0:
            o = Yt;
            break;
          case 1:
            o = Xt;
            break;
          default:
            o = Jt;
        }
        (n = o.bind(null, t, n, e)),
          (o = void 0),
          !Be || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (o = !0),
          r
            ? void 0 !== o
              ? e.addEventListener(t, n, { capture: !0, passive: o })
              : e.addEventListener(t, n, !0)
            : void 0 !== o
            ? e.addEventListener(t, n, { passive: o })
            : e.addEventListener(t, n, !1);
      }
      function Rr(e, t, n, r, o) {
        var a = r;
        if (0 === (1 & t) && 0 === (2 & t) && null !== r)
          e: for (;;) {
            if (null === r) return;
            var i = r.tag;
            if (3 === i || 4 === i) {
              var l = r.stateNode.containerInfo;
              if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
              if (4 === i)
                for (i = r.return; null !== i; ) {
                  var u = i.tag;
                  if (
                    (3 === u || 4 === u) &&
                    ((u = i.stateNode.containerInfo) === o || (8 === u.nodeType && u.parentNode === o))
                  )
                    return;
                  i = i.return;
                }
              for (; null !== l; ) {
                if (null === (i = Zr(l))) return;
                if (5 === (u = i.tag) || 6 === u) {
                  r = a = i;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            r = r.return;
          }
        !(function (e, t, n) {
          if (Me) return e(t, n);
          Me = !0;
          try {
            Ie(e, t, n);
          } finally {
            (Me = !1), Fe();
          }
        })(function () {
          var r = a,
            o = _e(n),
            i = [];
          e: {
            var l = Rt.get(e);
            if (void 0 !== l) {
              var u = pn,
                c = e;
              switch (e) {
                case 'keypress':
                  if (0 === on(n)) break e;
                case 'keydown':
                case 'keyup':
                  u = Pn;
                  break;
                case 'focusin':
                  (c = 'focus'), (u = bn);
                  break;
                case 'focusout':
                  (c = 'blur'), (u = bn);
                  break;
                case 'beforeblur':
                case 'afterblur':
                  u = bn;
                  break;
                case 'click':
                  if (2 === n.button) break e;
                case 'auxclick':
                case 'dblclick':
                case 'mousedown':
                case 'mousemove':
                case 'mouseup':
                case 'mouseout':
                case 'mouseover':
                case 'contextmenu':
                  u = gn;
                  break;
                case 'drag':
                case 'dragend':
                case 'dragenter':
                case 'dragexit':
                case 'dragleave':
                case 'dragover':
                case 'dragstart':
                case 'drop':
                  u = yn;
                  break;
                case 'touchcancel':
                case 'touchend':
                case 'touchmove':
                case 'touchstart':
                  u = An;
                  break;
                case Pt:
                case Tt:
                case At:
                  u = wn;
                  break;
                case Nt:
                  u = Nn;
                  break;
                case 'scroll':
                  u = vn;
                  break;
                case 'wheel':
                  u = Rn;
                  break;
                case 'copy':
                case 'cut':
                case 'paste':
                  u = kn;
                  break;
                case 'gotpointercapture':
                case 'lostpointercapture':
                case 'pointercancel':
                case 'pointerdown':
                case 'pointermove':
                case 'pointerout':
                case 'pointerover':
                case 'pointerup':
                  u = Tn;
              }
              var s = 0 !== (4 & t),
                f = !s && 'scroll' === e,
                d = s ? (null !== l ? l + 'Capture' : null) : l;
              s = [];
              for (var p, h = r; null !== h; ) {
                var v = (p = h).stateNode;
                if (
                  (5 === p.tag && null !== v && ((p = v), null !== d && null != (v = Ue(h, d)) && s.push(jr(h, v, p))),
                  f)
                )
                  break;
                h = h.return;
              }
              0 < s.length && ((l = new u(l, c, null, n, o)), i.push({ event: l, listeners: s }));
            }
          }
          if (0 === (7 & t)) {
            if (
              ((u = 'mouseout' === e || 'pointerout' === e),
              (!(l = 'mouseover' === e || 'pointerover' === e) ||
                0 !== (16 & t) ||
                !(c = n.relatedTarget || n.fromElement) ||
                (!Zr(c) && !c[Xr])) &&
                (u || l) &&
                ((l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window),
                u
                  ? ((u = r),
                    null !== (c = (c = n.relatedTarget || n.toElement) ? Zr(c) : null) &&
                      (c !== (f = Ye(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                      (c = null))
                  : ((u = null), (c = r)),
                u !== c))
            ) {
              if (
                ((s = gn),
                (v = 'onMouseLeave'),
                (d = 'onMouseEnter'),
                (h = 'mouse'),
                ('pointerout' !== e && 'pointerover' !== e) ||
                  ((s = Tn), (v = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
                (f = null == u ? l : to(u)),
                (p = null == c ? l : to(c)),
                ((l = new s(v, h + 'leave', u, n, o)).target = f),
                (l.relatedTarget = p),
                (v = null),
                Zr(o) === r && (((s = new s(d, h + 'enter', c, n, o)).target = p), (s.relatedTarget = f), (v = s)),
                (f = v),
                u && c)
              )
                e: {
                  for (d = c, h = 0, p = s = u; p; p = Dr(p)) h++;
                  for (p = 0, v = d; v; v = Dr(v)) p++;
                  for (; 0 < h - p; ) (s = Dr(s)), h--;
                  for (; 0 < p - h; ) (d = Dr(d)), p--;
                  for (; h--; ) {
                    if (s === d || (null !== d && s === d.alternate)) break e;
                    (s = Dr(s)), (d = Dr(d));
                  }
                  s = null;
                }
              else s = null;
              null !== u && Ir(i, l, u, s, !1), null !== c && null !== f && Ir(i, f, c, s, !0);
            }
            if (
              'select' === (u = (l = r ? to(r) : window).nodeName && l.nodeName.toLowerCase()) ||
              ('input' === u && 'file' === l.type)
            )
              var m = Yn;
            else if (Hn(l))
              if (Xn) m = ir;
              else {
                m = or;
                var g = rr;
              }
            else
              (u = l.nodeName) &&
                'input' === u.toLowerCase() &&
                ('checkbox' === l.type || 'radio' === l.type) &&
                (m = ar);
            switch (
              (m && (m = m(e, r))
                ? Vn(i, m, n, o)
                : (g && g(e, l, r),
                  'focusout' === e &&
                    (g = l._wrapperState) &&
                    g.controlled &&
                    'number' === l.type &&
                    oe(l, 'number', l.value)),
              (g = r ? to(r) : window),
              e)
            ) {
              case 'focusin':
                (Hn(g) || 'true' === g.contentEditable) && ((mr = g), (gr = r), (yr = null));
                break;
              case 'focusout':
                yr = gr = mr = null;
                break;
              case 'mousedown':
                br = !0;
                break;
              case 'contextmenu':
              case 'mouseup':
              case 'dragend':
                (br = !1), wr(i, n, o);
                break;
              case 'selectionchange':
                if (vr) break;
              case 'keydown':
              case 'keyup':
                wr(i, n, o);
            }
            var y;
            if (Ln)
              e: {
                switch (e) {
                  case 'compositionstart':
                    var b = 'onCompositionStart';
                    break e;
                  case 'compositionend':
                    b = 'onCompositionEnd';
                    break e;
                  case 'compositionupdate':
                    b = 'onCompositionUpdate';
                    break e;
                }
                b = void 0;
              }
            else
              $n
                ? Un(e, n) && (b = 'onCompositionEnd')
                : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
            b &&
              (zn &&
                'ko' !== n.locale &&
                ($n || 'onCompositionStart' !== b
                  ? 'onCompositionEnd' === b && $n && (y = rn())
                  : ((tn = 'value' in (en = o) ? en.value : en.textContent), ($n = !0))),
              0 < (g = Lr(r, b)).length &&
                ((b = new Sn(b, e, null, n, o)),
                i.push({ event: b, listeners: g }),
                y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
              (y = In
                ? (function (e, t) {
                    switch (e) {
                      case 'compositionend':
                        return Bn(t);
                      case 'keypress':
                        return 32 !== t.which ? null : ((Fn = !0), Mn);
                      case 'textInput':
                        return (e = t.data) === Mn && Fn ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if ($n)
                      return 'compositionend' === e || (!Ln && Un(e, t))
                        ? ((e = rn()), (nn = tn = en = null), ($n = !1), e)
                        : null;
                    switch (e) {
                      case 'paste':
                        return null;
                      case 'keypress':
                        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case 'compositionend':
                        return zn && 'ko' !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  })(e, n)) &&
                0 < (r = Lr(r, 'onBeforeInput')).length &&
                ((o = new Sn('onBeforeInput', 'beforeinput', null, n, o)),
                i.push({ event: o, listeners: r }),
                (o.data = y));
          }
          _r(i, t);
        });
      }
      function jr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Lr(e, t) {
        for (var n = t + 'Capture', r = []; null !== e; ) {
          var o = e,
            a = o.stateNode;
          5 === o.tag &&
            null !== a &&
            ((o = a), null != (a = Ue(e, n)) && r.unshift(jr(e, a, o)), null != (a = Ue(e, t)) && r.push(jr(e, a, o))),
            (e = e.return);
        }
        return r;
      }
      function Dr(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Ir(e, t, n, r, o) {
        for (var a = t._reactName, i = []; null !== n && n !== r; ) {
          var l = n,
            u = l.alternate,
            c = l.stateNode;
          if (null !== u && u === r) break;
          5 === l.tag &&
            null !== c &&
            ((l = c),
            o
              ? null != (u = Ue(n, a)) && i.unshift(jr(n, u, l))
              : o || (null != (u = Ue(n, a)) && i.push(jr(n, u, l)))),
            (n = n.return);
        }
        0 !== i.length && e.push({ event: t, listeners: i });
      }
      function zr() {}
      var Mr = null,
        Fr = null;
      function Ur(e, t) {
        switch (e) {
          case 'button':
          case 'input':
          case 'select':
          case 'textarea':
            return !!t.autoFocus;
        }
        return !1;
      }
      function Br(e, t) {
        return (
          'textarea' === e ||
          'option' === e ||
          'noscript' === e ||
          'string' === typeof t.children ||
          'number' === typeof t.children ||
          ('object' === typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var $r = 'function' === typeof setTimeout ? setTimeout : void 0,
        Wr = 'function' === typeof clearTimeout ? clearTimeout : void 0;
      function Hr(e) {
        1 === e.nodeType ? (e.textContent = '') : 9 === e.nodeType && null != (e = e.body) && (e.textContent = '');
      }
      function Vr(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function Kr(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ('$' === n || '$!' === n || '$?' === n) {
              if (0 === t) return e;
              t--;
            } else '/$' === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var Qr = 0;
      var qr = Math.random().toString(36).slice(2),
        Gr = '__reactFiber$' + qr,
        Yr = '__reactProps$' + qr,
        Xr = '__reactContainer$' + qr,
        Jr = '__reactEvents$' + qr;
      function Zr(e) {
        var t = e[Gr];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Xr] || n[Gr])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
              for (e = Kr(e); null !== e; ) {
                if ((n = e[Gr])) return n;
                e = Kr(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function eo(e) {
        return !(e = e[Gr] || e[Xr]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
      }
      function to(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(i(33));
      }
      function no(e) {
        return e[Yr] || null;
      }
      function ro(e) {
        var t = e[Jr];
        return void 0 === t && (t = e[Jr] = new Set()), t;
      }
      var oo = [],
        ao = -1;
      function io(e) {
        return { current: e };
      }
      function lo(e) {
        0 > ao || ((e.current = oo[ao]), (oo[ao] = null), ao--);
      }
      function uo(e, t) {
        ao++, (oo[ao] = e.current), (e.current = t);
      }
      var co = {},
        so = io(co),
        fo = io(!1),
        po = co;
      function ho(e, t) {
        var n = e.type.contextTypes;
        if (!n) return co;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var o,
          a = {};
        for (o in n) a[o] = t[o];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
          a
        );
      }
      function vo(e) {
        return null !== (e = e.childContextTypes) && void 0 !== e;
      }
      function mo() {
        lo(fo), lo(so);
      }
      function go(e, t, n) {
        if (so.current !== co) throw Error(i(168));
        uo(so, t), uo(fo, n);
      }
      function yo(e, t, n) {
        var r = e.stateNode;
        if (((e = t.childContextTypes), 'function' !== typeof r.getChildContext)) return n;
        for (var a in (r = r.getChildContext())) if (!(a in e)) throw Error(i(108, Q(t) || 'Unknown', a));
        return o({}, n, r);
      }
      function bo(e) {
        return (
          (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || co),
          (po = so.current),
          uo(so, e),
          uo(fo, fo.current),
          !0
        );
      }
      function wo(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(i(169));
        n ? ((e = yo(e, t, po)), (r.__reactInternalMemoizedMergedChildContext = e), lo(fo), lo(so), uo(so, e)) : lo(fo),
          uo(fo, n);
      }
      var ko = null,
        So = null,
        Eo = a.unstable_runWithPriority,
        Co = a.unstable_scheduleCallback,
        xo = a.unstable_cancelCallback,
        _o = a.unstable_shouldYield,
        Oo = a.unstable_requestPaint,
        Po = a.unstable_now,
        To = a.unstable_getCurrentPriorityLevel,
        Ao = a.unstable_ImmediatePriority,
        No = a.unstable_UserBlockingPriority,
        Ro = a.unstable_NormalPriority,
        jo = a.unstable_LowPriority,
        Lo = a.unstable_IdlePriority,
        Do = {},
        Io = void 0 !== Oo ? Oo : function () {},
        zo = null,
        Mo = null,
        Fo = !1,
        Uo = Po(),
        Bo =
          1e4 > Uo
            ? Po
            : function () {
                return Po() - Uo;
              };
      function $o() {
        switch (To()) {
          case Ao:
            return 99;
          case No:
            return 98;
          case Ro:
            return 97;
          case jo:
            return 96;
          case Lo:
            return 95;
          default:
            throw Error(i(332));
        }
      }
      function Wo(e) {
        switch (e) {
          case 99:
            return Ao;
          case 98:
            return No;
          case 97:
            return Ro;
          case 96:
            return jo;
          case 95:
            return Lo;
          default:
            throw Error(i(332));
        }
      }
      function Ho(e, t) {
        return (e = Wo(e)), Eo(e, t);
      }
      function Vo(e, t, n) {
        return (e = Wo(e)), Co(e, t, n);
      }
      function Ko() {
        if (null !== Mo) {
          var e = Mo;
          (Mo = null), xo(e);
        }
        Qo();
      }
      function Qo() {
        if (!Fo && null !== zo) {
          Fo = !0;
          var e = 0;
          try {
            var t = zo;
            Ho(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (zo = null);
          } catch (n) {
            throw (null !== zo && (zo = zo.slice(e + 1)), Co(Ao, Ko), n);
          } finally {
            Fo = !1;
          }
        }
      }
      var qo = k.ReactCurrentBatchConfig;
      function Go(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = o({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      var Yo = io(null),
        Xo = null,
        Jo = null,
        Zo = null;
      function ea() {
        Zo = Jo = Xo = null;
      }
      function ta(e) {
        var t = Yo.current;
        lo(Yo), (e.type._context._currentValue = t);
      }
      function na(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if ((e.childLanes & t) === t) {
            if (null === n || (n.childLanes & t) === t) break;
            n.childLanes |= t;
          } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
          e = e.return;
        }
      }
      function ra(e, t) {
        (Xo = e),
          (Zo = Jo = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 !== (e.lanes & t) && (Li = !0), (e.firstContext = null));
      }
      function oa(e, t) {
        if (Zo !== e && !1 !== t && 0 !== t)
          if (
            (('number' === typeof t && 1073741823 !== t) || ((Zo = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === Jo)
          ) {
            if (null === Xo) throw Error(i(308));
            (Jo = t), (Xo.dependencies = { lanes: 0, firstContext: t, responders: null });
          } else Jo = Jo.next = t;
        return e._currentValue;
      }
      var aa = !1;
      function ia(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null },
          effects: null,
        };
      }
      function la(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            });
      }
      function ua(e, t) {
        return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
      }
      function ca(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
      }
      function sa(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var o = null,
            a = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var i = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
            } while (null !== n);
            null === a ? (o = a = t) : (a = a.next = t);
          } else o = a = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: o,
              lastBaseUpdate: a,
              shared: r.shared,
              effects: r.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
      }
      function fa(e, t, n, r) {
        var a = e.updateQueue;
        aa = !1;
        var i = a.firstBaseUpdate,
          l = a.lastBaseUpdate,
          u = a.shared.pending;
        if (null !== u) {
          a.shared.pending = null;
          var c = u,
            s = c.next;
          (c.next = null), null === l ? (i = s) : (l.next = s), (l = c);
          var f = e.alternate;
          if (null !== f) {
            var d = (f = f.updateQueue).lastBaseUpdate;
            d !== l && (null === d ? (f.firstBaseUpdate = s) : (d.next = s), (f.lastBaseUpdate = c));
          }
        }
        if (null !== i) {
          for (d = a.baseState, l = 0, f = s = c = null; ; ) {
            u = i.lane;
            var p = i.eventTime;
            if ((r & u) === u) {
              null !== f &&
                (f = f.next = {
                  eventTime: p,
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                });
              e: {
                var h = e,
                  v = i;
                switch (((u = t), (p = n), v.tag)) {
                  case 1:
                    if ('function' === typeof (h = v.payload)) {
                      d = h.call(p, d, u);
                      break e;
                    }
                    d = h;
                    break e;
                  case 3:
                    h.flags = (-4097 & h.flags) | 64;
                  case 0:
                    if (null === (u = 'function' === typeof (h = v.payload) ? h.call(p, d, u) : h) || void 0 === u)
                      break e;
                    d = o({}, d, u);
                    break e;
                  case 2:
                    aa = !0;
                }
              }
              null !== i.callback && ((e.flags |= 32), null === (u = a.effects) ? (a.effects = [i]) : u.push(i));
            } else
              (p = { eventTime: p, lane: u, tag: i.tag, payload: i.payload, callback: i.callback, next: null }),
                null === f ? ((s = f = p), (c = d)) : (f = f.next = p),
                (l |= u);
            if (null === (i = i.next)) {
              if (null === (u = a.shared.pending)) break;
              (i = u.next), (u.next = null), (a.lastBaseUpdate = u), (a.shared.pending = null);
            }
          }
          null === f && (c = d),
            (a.baseState = c),
            (a.firstBaseUpdate = s),
            (a.lastBaseUpdate = f),
            (Ml |= l),
            (e.lanes = l),
            (e.memoizedState = d);
        }
      }
      function da(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              o = r.callback;
            if (null !== o) {
              if (((r.callback = null), (r = n), 'function' !== typeof o)) throw Error(i(191, o));
              o.call(r);
            }
          }
      }
      var pa = new r.Component().refs;
      function ha(e, t, n, r) {
        (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : o({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      var va = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Ye(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = cu(),
            o = su(e),
            a = ua(r, o);
          (a.payload = t), void 0 !== n && null !== n && (a.callback = n), ca(e, a), fu(e, o, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = cu(),
            o = su(e),
            a = ua(r, o);
          (a.tag = 1), (a.payload = t), void 0 !== n && null !== n && (a.callback = n), ca(e, a), fu(e, o, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = cu(),
            r = su(e),
            o = ua(n, r);
          (o.tag = 2), void 0 !== t && null !== t && (o.callback = t), ca(e, o), fu(e, r, n);
        },
      };
      function ma(e, t, n, r, o, a, i) {
        return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, a, i)
          : !t.prototype || !t.prototype.isPureReactComponent || !cr(n, r) || !cr(o, a);
      }
      function ga(e, t, n) {
        var r = !1,
          o = co,
          a = t.contextType;
        return (
          'object' === typeof a && null !== a
            ? (a = oa(a))
            : ((o = vo(t) ? po : so.current),
              (a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? ho(e, o) : co)),
          (t = new t(n, a)),
          (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = va),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
          t
        );
      }
      function ya(e, t, n, r) {
        (e = t.state),
          'function' === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
          'function' === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && va.enqueueReplaceState(t, t.state, null);
      }
      function ba(e, t, n, r) {
        var o = e.stateNode;
        (o.props = n), (o.state = e.memoizedState), (o.refs = pa), ia(e);
        var a = t.contextType;
        'object' === typeof a && null !== a
          ? (o.context = oa(a))
          : ((a = vo(t) ? po : so.current), (o.context = ho(e, a))),
          fa(e, n, o, r),
          (o.state = e.memoizedState),
          'function' === typeof (a = t.getDerivedStateFromProps) && (ha(e, t, a, n), (o.state = e.memoizedState)),
          'function' === typeof t.getDerivedStateFromProps ||
            'function' === typeof o.getSnapshotBeforeUpdate ||
            ('function' !== typeof o.UNSAFE_componentWillMount && 'function' !== typeof o.componentWillMount) ||
            ((t = o.state),
            'function' === typeof o.componentWillMount && o.componentWillMount(),
            'function' === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
            t !== o.state && va.enqueueReplaceState(o, o.state, null),
            fa(e, n, o, r),
            (o.state = e.memoizedState)),
          'function' === typeof o.componentDidMount && (e.flags |= 4);
      }
      var wa = Array.isArray;
      function ka(e, t, n) {
        if (null !== (e = n.ref) && 'function' !== typeof e && 'object' !== typeof e) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(i(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(i(147, e));
            var o = '' + e;
            return null !== t && null !== t.ref && 'function' === typeof t.ref && t.ref._stringRef === o
              ? t.ref
              : (((t = function (e) {
                  var t = r.refs;
                  t === pa && (t = r.refs = {}), null === e ? delete t[o] : (t[o] = e);
                })._stringRef = o),
                t);
          }
          if ('string' !== typeof e) throw Error(i(284));
          if (!n._owner) throw Error(i(290, e));
        }
        return e;
      }
      function Sa(e, t) {
        if ('textarea' !== e.type)
          throw Error(
            i(
              31,
              '[object Object]' === Object.prototype.toString.call(t)
                ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                : t
            )
          );
      }
      function Ea(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.flags = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
          return e;
        }
        function o(e, t) {
          return ((e = Wu(e, t)).index = 0), (e.sibling = null), e;
        }
        function a(t, n, r) {
          return (
            (t.index = r),
            e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags = 2), n) : r) : ((t.flags = 2), n)) : n
          );
        }
        function l(t) {
          return e && null === t.alternate && (t.flags = 2), t;
        }
        function u(e, t, n, r) {
          return null === t || 6 !== t.tag ? (((t = Qu(n, e.mode, r)).return = e), t) : (((t = o(t, n)).return = e), t);
        }
        function c(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = o(t, n.props)).ref = ka(e, t, n)), (r.return = e), r)
            : (((r = Hu(n.type, n.key, n.props, null, e.mode, r)).ref = ka(e, t, n)), (r.return = e), r);
        }
        function s(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = qu(n, e.mode, r)).return = e), t)
            : (((t = o(t, n.children || [])).return = e), t);
        }
        function f(e, t, n, r, a) {
          return null === t || 7 !== t.tag
            ? (((t = Vu(n, e.mode, r, a)).return = e), t)
            : (((t = o(t, n)).return = e), t);
        }
        function d(e, t, n) {
          if ('string' === typeof t || 'number' === typeof t) return ((t = Qu('' + t, e.mode, n)).return = e), t;
          if ('object' === typeof t && null !== t) {
            switch (t.$$typeof) {
              case S:
                return ((n = Hu(t.type, t.key, t.props, null, e.mode, n)).ref = ka(e, null, t)), (n.return = e), n;
              case E:
                return ((t = qu(t, e.mode, n)).return = e), t;
            }
            if (wa(t) || $(t)) return ((t = Vu(t, e.mode, n, null)).return = e), t;
            Sa(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var o = null !== t ? t.key : null;
          if ('string' === typeof n || 'number' === typeof n) return null !== o ? null : u(e, t, '' + n, r);
          if ('object' === typeof n && null !== n) {
            switch (n.$$typeof) {
              case S:
                return n.key === o ? (n.type === C ? f(e, t, n.props.children, r, o) : c(e, t, n, r)) : null;
              case E:
                return n.key === o ? s(e, t, n, r) : null;
            }
            if (wa(n) || $(n)) return null !== o ? null : f(e, t, n, r, null);
            Sa(e, n);
          }
          return null;
        }
        function h(e, t, n, r, o) {
          if ('string' === typeof r || 'number' === typeof r) return u(t, (e = e.get(n) || null), '' + r, o);
          if ('object' === typeof r && null !== r) {
            switch (r.$$typeof) {
              case S:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === C ? f(t, e, r.props.children, o, r.key) : c(t, e, r, o)
                );
              case E:
                return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
            }
            if (wa(r) || $(r)) return f(t, (e = e.get(n) || null), r, o, null);
            Sa(t, r);
          }
          return null;
        }
        function v(o, i, l, u) {
          for (var c = null, s = null, f = i, v = (i = 0), m = null; null !== f && v < l.length; v++) {
            f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
            var g = p(o, f, l[v], u);
            if (null === g) {
              null === f && (f = m);
              break;
            }
            e && f && null === g.alternate && t(o, f),
              (i = a(g, i, v)),
              null === s ? (c = g) : (s.sibling = g),
              (s = g),
              (f = m);
          }
          if (v === l.length) return n(o, f), c;
          if (null === f) {
            for (; v < l.length; v++)
              null !== (f = d(o, l[v], u)) && ((i = a(f, i, v)), null === s ? (c = f) : (s.sibling = f), (s = f));
            return c;
          }
          for (f = r(o, f); v < l.length; v++)
            null !== (m = h(f, o, v, l[v], u)) &&
              (e && null !== m.alternate && f.delete(null === m.key ? v : m.key),
              (i = a(m, i, v)),
              null === s ? (c = m) : (s.sibling = m),
              (s = m));
          return (
            e &&
              f.forEach(function (e) {
                return t(o, e);
              }),
            c
          );
        }
        function m(o, l, u, c) {
          var s = $(u);
          if ('function' !== typeof s) throw Error(i(150));
          if (null == (u = s.call(u))) throw Error(i(151));
          for (
            var f = (s = null), v = l, m = (l = 0), g = null, y = u.next();
            null !== v && !y.done;
            m++, y = u.next()
          ) {
            v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
            var b = p(o, v, y.value, c);
            if (null === b) {
              null === v && (v = g);
              break;
            }
            e && v && null === b.alternate && t(o, v),
              (l = a(b, l, m)),
              null === f ? (s = b) : (f.sibling = b),
              (f = b),
              (v = g);
          }
          if (y.done) return n(o, v), s;
          if (null === v) {
            for (; !y.done; m++, y = u.next())
              null !== (y = d(o, y.value, c)) && ((l = a(y, l, m)), null === f ? (s = y) : (f.sibling = y), (f = y));
            return s;
          }
          for (v = r(o, v); !y.done; m++, y = u.next())
            null !== (y = h(v, o, m, y.value, c)) &&
              (e && null !== y.alternate && v.delete(null === y.key ? m : y.key),
              (l = a(y, l, m)),
              null === f ? (s = y) : (f.sibling = y),
              (f = y));
          return (
            e &&
              v.forEach(function (e) {
                return t(o, e);
              }),
            s
          );
        }
        return function (e, r, a, u) {
          var c = 'object' === typeof a && null !== a && a.type === C && null === a.key;
          c && (a = a.props.children);
          var s = 'object' === typeof a && null !== a;
          if (s)
            switch (a.$$typeof) {
              case S:
                e: {
                  for (s = a.key, c = r; null !== c; ) {
                    if (c.key === s) {
                      switch (c.tag) {
                        case 7:
                          if (a.type === C) {
                            n(e, c.sibling), ((r = o(c, a.props.children)).return = e), (e = r);
                            break e;
                          }
                          break;
                        default:
                          if (c.elementType === a.type) {
                            n(e, c.sibling), ((r = o(c, a.props)).ref = ka(e, c, a)), (r.return = e), (e = r);
                            break e;
                          }
                      }
                      n(e, c);
                      break;
                    }
                    t(e, c), (c = c.sibling);
                  }
                  a.type === C
                    ? (((r = Vu(a.props.children, e.mode, u, a.key)).return = e), (e = r))
                    : (((u = Hu(a.type, a.key, a.props, null, e.mode, u)).ref = ka(e, r, a)), (u.return = e), (e = u));
                }
                return l(e);
              case E:
                e: {
                  for (c = a.key; null !== r; ) {
                    if (r.key === c) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === a.containerInfo &&
                        r.stateNode.implementation === a.implementation
                      ) {
                        n(e, r.sibling), ((r = o(r, a.children || [])).return = e), (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = qu(a, e.mode, u)).return = e), (e = r);
                }
                return l(e);
            }
          if ('string' === typeof a || 'number' === typeof a)
            return (
              (a = '' + a),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = o(r, a)).return = e), (e = r))
                : (n(e, r), ((r = Qu(a, e.mode, u)).return = e), (e = r)),
              l(e)
            );
          if (wa(a)) return v(e, r, a, u);
          if ($(a)) return m(e, r, a, u);
          if ((s && Sa(e, a), 'undefined' === typeof a && !c))
            switch (e.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(i(152, Q(e.type) || 'Component'));
            }
          return n(e, r);
        };
      }
      var Ca = Ea(!0),
        xa = Ea(!1),
        _a = {},
        Oa = io(_a),
        Pa = io(_a),
        Ta = io(_a);
      function Aa(e) {
        if (e === _a) throw Error(i(174));
        return e;
      }
      function Na(e, t) {
        switch ((uo(Ta, t), uo(Pa, e), uo(Oa, _a), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : he(null, '');
            break;
          default:
            t = he((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
        }
        lo(Oa), uo(Oa, t);
      }
      function Ra() {
        lo(Oa), lo(Pa), lo(Ta);
      }
      function ja(e) {
        Aa(Ta.current);
        var t = Aa(Oa.current),
          n = he(t, e.type);
        t !== n && (uo(Pa, e), uo(Oa, n));
      }
      function La(e) {
        Pa.current === e && (lo(Oa), lo(Pa));
      }
      var Da = io(0);
      function Ia(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)) return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 !== (64 & t.flags)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var za = null,
        Ma = null,
        Fa = !1;
      function Ua(e, t) {
        var n = Bu(5, null, null, 0);
        (n.elementType = 'DELETED'),
          (n.type = 'DELETED'),
          (n.stateNode = t),
          (n.return = e),
          (n.flags = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function Ba(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
              ((e.stateNode = t), !0)
            );
          case 6:
            return null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
          case 13:
          default:
            return !1;
        }
      }
      function $a(e) {
        if (Fa) {
          var t = Ma;
          if (t) {
            var n = t;
            if (!Ba(e, t)) {
              if (!(t = Vr(n.nextSibling)) || !Ba(e, t))
                return (e.flags = (-1025 & e.flags) | 2), (Fa = !1), void (za = e);
              Ua(za, n);
            }
            (za = e), (Ma = Vr(t.firstChild));
          } else (e.flags = (-1025 & e.flags) | 2), (Fa = !1), (za = e);
        }
      }
      function Wa(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
        za = e;
      }
      function Ha(e) {
        if (e !== za) return !1;
        if (!Fa) return Wa(e), (Fa = !0), !1;
        var t = e.type;
        if (5 !== e.tag || ('head' !== t && 'body' !== t && !Br(t, e.memoizedProps)))
          for (t = Ma; t; ) Ua(e, t), (t = Vr(t.nextSibling));
        if ((Wa(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ('/$' === n) {
                  if (0 === t) {
                    Ma = Vr(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
              }
              e = e.nextSibling;
            }
            Ma = null;
          }
        } else Ma = za ? Vr(e.stateNode.nextSibling) : null;
        return !0;
      }
      function Va() {
        (Ma = za = null), (Fa = !1);
      }
      var Ka = [];
      function Qa() {
        for (var e = 0; e < Ka.length; e++) Ka[e]._workInProgressVersionPrimary = null;
        Ka.length = 0;
      }
      var qa = k.ReactCurrentDispatcher,
        Ga = k.ReactCurrentBatchConfig,
        Ya = 0,
        Xa = null,
        Ja = null,
        Za = null,
        ei = !1,
        ti = !1;
      function ni() {
        throw Error(i(321));
      }
      function ri(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!lr(e[n], t[n])) return !1;
        return !0;
      }
      function oi(e, t, n, r, o, a) {
        if (
          ((Ya = a),
          (Xa = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (qa.current = null === e || null === e.memoizedState ? Ai : Ni),
          (e = n(r, o)),
          ti)
        ) {
          a = 0;
          do {
            if (((ti = !1), !(25 > a))) throw Error(i(301));
            (a += 1), (Za = Ja = null), (t.updateQueue = null), (qa.current = Ri), (e = n(r, o));
          } while (ti);
        }
        if (((qa.current = Ti), (t = null !== Ja && null !== Ja.next), (Ya = 0), (Za = Ja = Xa = null), (ei = !1), t))
          throw Error(i(300));
        return e;
      }
      function ai() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return null === Za ? (Xa.memoizedState = Za = e) : (Za = Za.next = e), Za;
      }
      function ii() {
        if (null === Ja) {
          var e = Xa.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = Ja.next;
        var t = null === Za ? Xa.memoizedState : Za.next;
        if (null !== t) (Za = t), (Ja = e);
        else {
          if (null === e) throw Error(i(310));
          (e = {
            memoizedState: (Ja = e).memoizedState,
            baseState: Ja.baseState,
            baseQueue: Ja.baseQueue,
            queue: Ja.queue,
            next: null,
          }),
            null === Za ? (Xa.memoizedState = Za = e) : (Za = Za.next = e);
        }
        return Za;
      }
      function li(e, t) {
        return 'function' === typeof t ? t(e) : t;
      }
      function ui(e) {
        var t = ii(),
          n = t.queue;
        if (null === n) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = Ja,
          o = r.baseQueue,
          a = n.pending;
        if (null !== a) {
          if (null !== o) {
            var l = o.next;
            (o.next = a.next), (a.next = l);
          }
          (r.baseQueue = o = a), (n.pending = null);
        }
        if (null !== o) {
          (o = o.next), (r = r.baseState);
          var u = (l = a = null),
            c = o;
          do {
            var s = c.lane;
            if ((Ya & s) === s)
              null !== u &&
                (u = u.next = {
                  lane: 0,
                  action: c.action,
                  eagerReducer: c.eagerReducer,
                  eagerState: c.eagerState,
                  next: null,
                }),
                (r = c.eagerReducer === e ? c.eagerState : e(r, c.action));
            else {
              var f = { lane: s, action: c.action, eagerReducer: c.eagerReducer, eagerState: c.eagerState, next: null };
              null === u ? ((l = u = f), (a = r)) : (u = u.next = f), (Xa.lanes |= s), (Ml |= s);
            }
            c = c.next;
          } while (null !== c && c !== o);
          null === u ? (a = r) : (u.next = l),
            lr(r, t.memoizedState) || (Li = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }
      function ci(e) {
        var t = ii(),
          n = t.queue;
        if (null === n) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          o = n.pending,
          a = t.memoizedState;
        if (null !== o) {
          n.pending = null;
          var l = (o = o.next);
          do {
            (a = e(a, l.action)), (l = l.next);
          } while (l !== o);
          lr(a, t.memoizedState) || (Li = !0),
            (t.memoizedState = a),
            null === t.baseQueue && (t.baseState = a),
            (n.lastRenderedState = a);
        }
        return [a, r];
      }
      function si(e, t, n) {
        var r = t._getVersion;
        r = r(t._source);
        var o = t._workInProgressVersionPrimary;
        if (
          (null !== o
            ? (e = o === r)
            : ((e = e.mutableReadLanes), (e = (Ya & e) === e) && ((t._workInProgressVersionPrimary = r), Ka.push(t))),
          e)
        )
          return n(t._source);
        throw (Ka.push(t), Error(i(350)));
      }
      function fi(e, t, n, r) {
        var o = Al;
        if (null === o) throw Error(i(349));
        var a = t._getVersion,
          l = a(t._source),
          u = qa.current,
          c = u.useState(function () {
            return si(o, t, n);
          }),
          s = c[1],
          f = c[0];
        c = Za;
        var d = e.memoizedState,
          p = d.refs,
          h = p.getSnapshot,
          v = d.source;
        d = d.subscribe;
        var m = Xa;
        return (
          (e.memoizedState = { refs: p, source: t, subscribe: r }),
          u.useEffect(
            function () {
              (p.getSnapshot = n), (p.setSnapshot = s);
              var e = a(t._source);
              if (!lr(l, e)) {
                (e = n(t._source)),
                  lr(f, e) || (s(e), (e = su(m)), (o.mutableReadLanes |= e & o.pendingLanes)),
                  (e = o.mutableReadLanes),
                  (o.entangledLanes |= e);
                for (var r = o.entanglements, i = e; 0 < i; ) {
                  var u = 31 - Ht(i),
                    c = 1 << u;
                  (r[u] |= e), (i &= ~c);
                }
              }
            },
            [n, t, r]
          ),
          u.useEffect(
            function () {
              return r(t._source, function () {
                var e = p.getSnapshot,
                  n = p.setSnapshot;
                try {
                  n(e(t._source));
                  var r = su(m);
                  o.mutableReadLanes |= r & o.pendingLanes;
                } catch (a) {
                  n(function () {
                    throw a;
                  });
                }
              });
            },
            [t, r]
          ),
          (lr(h, n) && lr(v, t) && lr(d, r)) ||
            (((e = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: li,
              lastRenderedState: f,
            }).dispatch = s = Pi.bind(null, Xa, e)),
            (c.queue = e),
            (c.baseQueue = null),
            (f = si(o, t, n)),
            (c.memoizedState = c.baseState = f)),
          f
        );
      }
      function di(e, t, n) {
        return fi(ii(), e, t, n);
      }
      function pi(e) {
        var t = ai();
        return (
          'function' === typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: li,
            lastRenderedState: e,
          }).dispatch = Pi.bind(null, Xa, e)),
          [t.memoizedState, e]
        );
      }
      function hi(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = Xa.updateQueue)
            ? ((t = { lastEffect: null }), (Xa.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function vi(e) {
        return (e = { current: e }), (ai().memoizedState = e);
      }
      function mi() {
        return ii().memoizedState;
      }
      function gi(e, t, n, r) {
        var o = ai();
        (Xa.flags |= e), (o.memoizedState = hi(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function yi(e, t, n, r) {
        var o = ii();
        r = void 0 === r ? null : r;
        var a = void 0;
        if (null !== Ja) {
          var i = Ja.memoizedState;
          if (((a = i.destroy), null !== r && ri(r, i.deps))) return void hi(t, n, a, r);
        }
        (Xa.flags |= e), (o.memoizedState = hi(1 | t, n, a, r));
      }
      function bi(e, t) {
        return gi(516, 4, e, t);
      }
      function wi(e, t) {
        return yi(516, 4, e, t);
      }
      function ki(e, t) {
        return yi(4, 2, e, t);
      }
      function Si(e, t) {
        return 'function' === typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null !== t && void 0 !== t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function Ei(e, t, n) {
        return (n = null !== n && void 0 !== n ? n.concat([e]) : null), yi(4, 2, Si.bind(null, t, e), n);
      }
      function Ci() {}
      function xi(e, t) {
        var n = ii();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && ri(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
      }
      function _i(e, t) {
        var n = ii();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && ri(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Oi(e, t) {
        var n = $o();
        Ho(98 > n ? 98 : n, function () {
          e(!0);
        }),
          Ho(97 < n ? 97 : n, function () {
            var n = Ga.transition;
            Ga.transition = 1;
            try {
              e(!1), t();
            } finally {
              Ga.transition = n;
            }
          });
      }
      function Pi(e, t, n) {
        var r = cu(),
          o = su(e),
          a = { lane: o, action: n, eagerReducer: null, eagerState: null, next: null },
          i = t.pending;
        if (
          (null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)),
          (t.pending = a),
          (i = e.alternate),
          e === Xa || (null !== i && i === Xa))
        )
          ti = ei = !0;
        else {
          if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
            try {
              var l = t.lastRenderedState,
                u = i(l, n);
              if (((a.eagerReducer = i), (a.eagerState = u), lr(u, l))) return;
            } catch (c) {}
          fu(e, o, r);
        }
      }
      var Ti = {
          readContext: oa,
          useCallback: ni,
          useContext: ni,
          useEffect: ni,
          useImperativeHandle: ni,
          useLayoutEffect: ni,
          useMemo: ni,
          useReducer: ni,
          useRef: ni,
          useState: ni,
          useDebugValue: ni,
          useDeferredValue: ni,
          useTransition: ni,
          useMutableSource: ni,
          useOpaqueIdentifier: ni,
          unstable_isNewReconciler: !1,
        },
        Ai = {
          readContext: oa,
          useCallback: function (e, t) {
            return (ai().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: oa,
          useEffect: bi,
          useImperativeHandle: function (e, t, n) {
            return (n = null !== n && void 0 !== n ? n.concat([e]) : null), gi(4, 2, Si.bind(null, t, e), n);
          },
          useLayoutEffect: function (e, t) {
            return gi(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = ai();
            return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
          },
          useReducer: function (e, t, n) {
            var r = ai();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }).dispatch = Pi.bind(null, Xa, e)),
              [r.memoizedState, e]
            );
          },
          useRef: vi,
          useState: pi,
          useDebugValue: Ci,
          useDeferredValue: function (e) {
            var t = pi(e),
              n = t[0],
              r = t[1];
            return (
              bi(
                function () {
                  var t = Ga.transition;
                  Ga.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Ga.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = pi(!1),
              t = e[0];
            return vi((e = Oi.bind(null, e[1]))), [e, t];
          },
          useMutableSource: function (e, t, n) {
            var r = ai();
            return (
              (r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }),
              fi(r, e, t, n)
            );
          },
          useOpaqueIdentifier: function () {
            if (Fa) {
              var e = !1,
                t = (function (e) {
                  return { $$typeof: D, toString: e, valueOf: e };
                })(function () {
                  throw (e || ((e = !0), n('r:' + (Qr++).toString(36))), Error(i(355)));
                }),
                n = pi(t)[1];
              return (
                0 === (2 & Xa.mode) &&
                  ((Xa.flags |= 516),
                  hi(
                    5,
                    function () {
                      n('r:' + (Qr++).toString(36));
                    },
                    void 0,
                    null
                  )),
                t
              );
            }
            return pi((t = 'r:' + (Qr++).toString(36))), t;
          },
          unstable_isNewReconciler: !1,
        },
        Ni = {
          readContext: oa,
          useCallback: xi,
          useContext: oa,
          useEffect: wi,
          useImperativeHandle: Ei,
          useLayoutEffect: ki,
          useMemo: _i,
          useReducer: ui,
          useRef: mi,
          useState: function () {
            return ui(li);
          },
          useDebugValue: Ci,
          useDeferredValue: function (e) {
            var t = ui(li),
              n = t[0],
              r = t[1];
            return (
              wi(
                function () {
                  var t = Ga.transition;
                  Ga.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Ga.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = ui(li)[0];
            return [mi().current, e];
          },
          useMutableSource: di,
          useOpaqueIdentifier: function () {
            return ui(li)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Ri = {
          readContext: oa,
          useCallback: xi,
          useContext: oa,
          useEffect: wi,
          useImperativeHandle: Ei,
          useLayoutEffect: ki,
          useMemo: _i,
          useReducer: ci,
          useRef: mi,
          useState: function () {
            return ci(li);
          },
          useDebugValue: Ci,
          useDeferredValue: function (e) {
            var t = ci(li),
              n = t[0],
              r = t[1];
            return (
              wi(
                function () {
                  var t = Ga.transition;
                  Ga.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Ga.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = ci(li)[0];
            return [mi().current, e];
          },
          useMutableSource: di,
          useOpaqueIdentifier: function () {
            return ci(li)[0];
          },
          unstable_isNewReconciler: !1,
        },
        ji = k.ReactCurrentOwner,
        Li = !1;
      function Di(e, t, n, r) {
        t.child = null === e ? xa(t, null, n, r) : Ca(t, e.child, n, r);
      }
      function Ii(e, t, n, r, o) {
        n = n.render;
        var a = t.ref;
        return (
          ra(t, o),
          (r = oi(e, t, n, r, a, o)),
          null === e || Li
            ? ((t.flags |= 1), Di(e, t, r, o), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), nl(e, t, o))
        );
      }
      function zi(e, t, n, r, o, a) {
        if (null === e) {
          var i = n.type;
          return 'function' !== typeof i ||
            $u(i) ||
            void 0 !== i.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Hu(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = i), Mi(e, t, i, r, o, a));
        }
        return (
          (i = e.child),
          0 === (o & a) && ((o = i.memoizedProps), (n = null !== (n = n.compare) ? n : cr)(o, r) && e.ref === t.ref)
            ? nl(e, t, a)
            : ((t.flags |= 1), ((e = Wu(i, r)).ref = t.ref), (e.return = t), (t.child = e))
        );
      }
      function Mi(e, t, n, r, o, a) {
        if (null !== e && cr(e.memoizedProps, r) && e.ref === t.ref) {
          if (((Li = !1), 0 === (a & o))) return (t.lanes = e.lanes), nl(e, t, a);
          0 !== (16384 & e.flags) && (Li = !0);
        }
        return Bi(e, t, n, r, a);
      }
      function Fi(e, t, n) {
        var r = t.pendingProps,
          o = r.children,
          a = null !== e ? e.memoizedState : null;
        if ('hidden' === r.mode || 'unstable-defer-without-hiding' === r.mode)
          if (0 === (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), bu(t, n);
          else {
            if (0 === (1073741824 & n))
              return (
                (e = null !== a ? a.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e }),
                bu(t, e),
                null
              );
            (t.memoizedState = { baseLanes: 0 }), bu(t, null !== a ? a.baseLanes : n);
          }
        else null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), bu(t, r);
        return Di(e, t, o, n), t.child;
      }
      function Ui(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.flags |= 128);
      }
      function Bi(e, t, n, r, o) {
        var a = vo(n) ? po : so.current;
        return (
          (a = ho(t, a)),
          ra(t, o),
          (n = oi(e, t, n, r, a, o)),
          null === e || Li
            ? ((t.flags |= 1), Di(e, t, n, o), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), nl(e, t, o))
        );
      }
      function $i(e, t, n, r, o) {
        if (vo(n)) {
          var a = !0;
          bo(t);
        } else a = !1;
        if ((ra(t, o), null === t.stateNode))
          null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            ga(t, n, r),
            ba(t, n, r, o),
            (r = !0);
        else if (null === e) {
          var i = t.stateNode,
            l = t.memoizedProps;
          i.props = l;
          var u = i.context,
            c = n.contextType;
          'object' === typeof c && null !== c ? (c = oa(c)) : (c = ho(t, (c = vo(n) ? po : so.current)));
          var s = n.getDerivedStateFromProps,
            f = 'function' === typeof s || 'function' === typeof i.getSnapshotBeforeUpdate;
          f ||
            ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
              'function' !== typeof i.componentWillReceiveProps) ||
            ((l !== r || u !== c) && ya(t, i, r, c)),
            (aa = !1);
          var d = t.memoizedState;
          (i.state = d),
            fa(t, r, i, o),
            (u = t.memoizedState),
            l !== r || d !== u || fo.current || aa
              ? ('function' === typeof s && (ha(t, n, s, r), (u = t.memoizedState)),
                (l = aa || ma(t, n, l, r, d, u, c))
                  ? (f ||
                      ('function' !== typeof i.UNSAFE_componentWillMount &&
                        'function' !== typeof i.componentWillMount) ||
                      ('function' === typeof i.componentWillMount && i.componentWillMount(),
                      'function' === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()),
                    'function' === typeof i.componentDidMount && (t.flags |= 4))
                  : ('function' === typeof i.componentDidMount && (t.flags |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = u)),
                (i.props = r),
                (i.state = u),
                (i.context = c),
                (r = l))
              : ('function' === typeof i.componentDidMount && (t.flags |= 4), (r = !1));
        } else {
          (i = t.stateNode),
            la(e, t),
            (l = t.memoizedProps),
            (c = t.type === t.elementType ? l : Go(t.type, l)),
            (i.props = c),
            (f = t.pendingProps),
            (d = i.context),
            'object' === typeof (u = n.contextType) && null !== u
              ? (u = oa(u))
              : (u = ho(t, (u = vo(n) ? po : so.current)));
          var p = n.getDerivedStateFromProps;
          (s = 'function' === typeof p || 'function' === typeof i.getSnapshotBeforeUpdate) ||
            ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
              'function' !== typeof i.componentWillReceiveProps) ||
            ((l !== f || d !== u) && ya(t, i, r, u)),
            (aa = !1),
            (d = t.memoizedState),
            (i.state = d),
            fa(t, r, i, o);
          var h = t.memoizedState;
          l !== f || d !== h || fo.current || aa
            ? ('function' === typeof p && (ha(t, n, p, r), (h = t.memoizedState)),
              (c = aa || ma(t, n, c, r, d, h, u))
                ? (s ||
                    ('function' !== typeof i.UNSAFE_componentWillUpdate &&
                      'function' !== typeof i.componentWillUpdate) ||
                    ('function' === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, u),
                    'function' === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, u)),
                  'function' === typeof i.componentDidUpdate && (t.flags |= 4),
                  'function' === typeof i.getSnapshotBeforeUpdate && (t.flags |= 256))
                : ('function' !== typeof i.componentDidUpdate ||
                    (l === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 4),
                  'function' !== typeof i.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = h)),
              (i.props = r),
              (i.state = h),
              (i.context = u),
              (r = c))
            : ('function' !== typeof i.componentDidUpdate ||
                (l === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              'function' !== typeof i.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 256),
              (r = !1));
        }
        return Wi(e, t, n, r, a, o);
      }
      function Wi(e, t, n, r, o, a) {
        Ui(e, t);
        var i = 0 !== (64 & t.flags);
        if (!r && !i) return o && wo(t, n, !1), nl(e, t, a);
        (r = t.stateNode), (ji.current = t);
        var l = i && 'function' !== typeof n.getDerivedStateFromError ? null : r.render();
        return (
          (t.flags |= 1),
          null !== e && i ? ((t.child = Ca(t, e.child, null, a)), (t.child = Ca(t, null, l, a))) : Di(e, t, l, a),
          (t.memoizedState = r.state),
          o && wo(t, n, !0),
          t.child
        );
      }
      function Hi(e) {
        var t = e.stateNode;
        t.pendingContext ? go(0, t.pendingContext, t.pendingContext !== t.context) : t.context && go(0, t.context, !1),
          Na(e, t.containerInfo);
      }
      var Vi,
        Ki,
        Qi,
        qi = { dehydrated: null, retryLane: 0 };
      function Gi(e, t, n) {
        var r,
          o = t.pendingProps,
          a = Da.current,
          i = !1;
        return (
          (r = 0 !== (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
          r
            ? ((i = !0), (t.flags &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === o.fallback ||
              !0 === o.unstable_avoidThisFallback ||
              (a |= 1),
          uo(Da, 1 & a),
          null === e
            ? (void 0 !== o.fallback && $a(t),
              (e = o.children),
              (a = o.fallback),
              i
                ? ((e = Yi(t, e, a, n)), (t.child.memoizedState = { baseLanes: n }), (t.memoizedState = qi), e)
                : 'number' === typeof o.unstable_expectedLoadTime
                ? ((e = Yi(t, e, a, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = qi),
                  (t.lanes = 33554432),
                  e)
                : (((n = Ku({ mode: 'visible', children: e }, t.mode, n, null)).return = t), (t.child = n)))
            : (e.memoizedState,
              i
                ? ((o = Ji(e, t, o.children, o.fallback, n)),
                  (i = t.child),
                  (a = e.child.memoizedState),
                  (i.memoizedState = null === a ? { baseLanes: n } : { baseLanes: a.baseLanes | n }),
                  (i.childLanes = e.childLanes & ~n),
                  (t.memoizedState = qi),
                  o)
                : ((n = Xi(e, t, o.children, n)), (t.memoizedState = null), n))
        );
      }
      function Yi(e, t, n, r) {
        var o = e.mode,
          a = e.child;
        return (
          (t = { mode: 'hidden', children: t }),
          0 === (2 & o) && null !== a ? ((a.childLanes = 0), (a.pendingProps = t)) : (a = Ku(t, o, 0, null)),
          (n = Vu(n, o, r, null)),
          (a.return = e),
          (n.return = e),
          (a.sibling = n),
          (e.child = a),
          n
        );
      }
      function Xi(e, t, n, r) {
        var o = e.child;
        return (
          (e = o.sibling),
          (n = Wu(o, { mode: 'visible', children: n })),
          0 === (2 & t.mode) && (n.lanes = r),
          (n.return = t),
          (n.sibling = null),
          null !== e && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
          (t.child = n)
        );
      }
      function Ji(e, t, n, r, o) {
        var a = t.mode,
          i = e.child;
        e = i.sibling;
        var l = { mode: 'hidden', children: n };
        return (
          0 === (2 & a) && t.child !== i
            ? (((n = t.child).childLanes = 0),
              (n.pendingProps = l),
              null !== (i = n.lastEffect)
                ? ((t.firstEffect = n.firstEffect), (t.lastEffect = i), (i.nextEffect = null))
                : (t.firstEffect = t.lastEffect = null))
            : (n = Wu(i, l)),
          null !== e ? (r = Wu(e, r)) : ((r = Vu(r, a, o, null)).flags |= 2),
          (r.return = t),
          (n.return = t),
          (n.sibling = r),
          (t.child = n),
          r
        );
      }
      function Zi(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t), na(e.return, t);
      }
      function el(e, t, n, r, o, a) {
        var i = e.memoizedState;
        null === i
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: o,
              lastEffect: a,
            })
          : ((i.isBackwards = t),
            (i.rendering = null),
            (i.renderingStartTime = 0),
            (i.last = r),
            (i.tail = n),
            (i.tailMode = o),
            (i.lastEffect = a));
      }
      function tl(e, t, n) {
        var r = t.pendingProps,
          o = r.revealOrder,
          a = r.tail;
        if ((Di(e, t, r.children, n), 0 !== (2 & (r = Da.current)))) (r = (1 & r) | 2), (t.flags |= 64);
        else {
          if (null !== e && 0 !== (64 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Zi(e, n);
              else if (19 === e.tag) Zi(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((uo(Da, r), 0 === (2 & t.mode))) t.memoizedState = null;
        else
          switch (o) {
            case 'forwards':
              for (n = t.child, o = null; null !== n; )
                null !== (e = n.alternate) && null === Ia(e) && (o = n), (n = n.sibling);
              null === (n = o) ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
                el(t, !1, o, n, a, t.lastEffect);
              break;
            case 'backwards':
              for (n = null, o = t.child, t.child = null; null !== o; ) {
                if (null !== (e = o.alternate) && null === Ia(e)) {
                  t.child = o;
                  break;
                }
                (e = o.sibling), (o.sibling = n), (n = o), (o = e);
              }
              el(t, !0, n, null, a, t.lastEffect);
              break;
            case 'together':
              el(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function nl(e, t, n) {
        if ((null !== e && (t.dependencies = e.dependencies), (Ml |= t.lanes), 0 !== (n & t.childLanes))) {
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (n = Wu((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
              (e = e.sibling), ((n = n.sibling = Wu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        return null;
      }
      function rl(e, t) {
        if (!Fa)
          switch (e.tailMode) {
            case 'hidden':
              t = e.tail;
              for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case 'collapsed':
              n = e.tail;
              for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
              null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
          }
      }
      function ol(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
            return vo(t.type) && mo(), null;
          case 3:
            return (
              Ra(),
              lo(fo),
              lo(so),
              Qa(),
              (r = t.stateNode).pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) || (Ha(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
              null
            );
          case 5:
            La(t);
            var a = Aa(Ta.current);
            if (((n = t.type), null !== e && null != t.stateNode)) Ki(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(i(166));
                return null;
              }
              if (((e = Aa(Oa.current)), Ha(t))) {
                (r = t.stateNode), (n = t.type);
                var l = t.memoizedProps;
                switch (((r[Gr] = t), (r[Yr] = l), n)) {
                  case 'dialog':
                    Or('cancel', r), Or('close', r);
                    break;
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    Or('load', r);
                    break;
                  case 'video':
                  case 'audio':
                    for (e = 0; e < Er.length; e++) Or(Er[e], r);
                    break;
                  case 'source':
                    Or('error', r);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    Or('error', r), Or('load', r);
                    break;
                  case 'details':
                    Or('toggle', r);
                    break;
                  case 'input':
                    ee(r, l), Or('invalid', r);
                    break;
                  case 'select':
                    (r._wrapperState = { wasMultiple: !!l.multiple }), Or('invalid', r);
                    break;
                  case 'textarea':
                    ue(r, l), Or('invalid', r);
                }
                for (var c in (Ce(n, l), (e = null), l))
                  l.hasOwnProperty(c) &&
                    ((a = l[c]),
                    'children' === c
                      ? 'string' === typeof a
                        ? r.textContent !== a && (e = ['children', a])
                        : 'number' === typeof a && r.textContent !== '' + a && (e = ['children', '' + a])
                      : u.hasOwnProperty(c) && null != a && 'onScroll' === c && Or('scroll', r));
                switch (n) {
                  case 'input':
                    Y(r), re(r, l, !0);
                    break;
                  case 'textarea':
                    Y(r), se(r);
                    break;
                  case 'select':
                  case 'option':
                    break;
                  default:
                    'function' === typeof l.onClick && (r.onclick = zr);
                }
                (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
              } else {
                switch (
                  ((c = 9 === a.nodeType ? a : a.ownerDocument),
                  e === fe && (e = pe(n)),
                  e === fe
                    ? 'script' === n
                      ? (((e = c.createElement('div')).innerHTML = '<script></script>'),
                        (e = e.removeChild(e.firstChild)))
                      : 'string' === typeof r.is
                      ? (e = c.createElement(n, { is: r.is }))
                      : ((e = c.createElement(n)),
                        'select' === n && ((c = e), r.multiple ? (c.multiple = !0) : r.size && (c.size = r.size)))
                    : (e = c.createElementNS(e, n)),
                  (e[Gr] = t),
                  (e[Yr] = r),
                  Vi(e, t),
                  (t.stateNode = e),
                  (c = xe(n, r)),
                  n)
                ) {
                  case 'dialog':
                    Or('cancel', e), Or('close', e), (a = r);
                    break;
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    Or('load', e), (a = r);
                    break;
                  case 'video':
                  case 'audio':
                    for (a = 0; a < Er.length; a++) Or(Er[a], e);
                    a = r;
                    break;
                  case 'source':
                    Or('error', e), (a = r);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    Or('error', e), Or('load', e), (a = r);
                    break;
                  case 'details':
                    Or('toggle', e), (a = r);
                    break;
                  case 'input':
                    ee(e, r), (a = Z(e, r)), Or('invalid', e);
                    break;
                  case 'option':
                    a = ae(e, r);
                    break;
                  case 'select':
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (a = o({}, r, { value: void 0 })),
                      Or('invalid', e);
                    break;
                  case 'textarea':
                    ue(e, r), (a = le(e, r)), Or('invalid', e);
                    break;
                  default:
                    a = r;
                }
                Ce(n, a);
                var s = a;
                for (l in s)
                  if (s.hasOwnProperty(l)) {
                    var f = s[l];
                    'style' === l
                      ? Se(e, f)
                      : 'dangerouslySetInnerHTML' === l
                      ? null != (f = f ? f.__html : void 0) && ge(e, f)
                      : 'children' === l
                      ? 'string' === typeof f
                        ? ('textarea' !== n || '' !== f) && ye(e, f)
                        : 'number' === typeof f && ye(e, '' + f)
                      : 'suppressContentEditableWarning' !== l &&
                        'suppressHydrationWarning' !== l &&
                        'autoFocus' !== l &&
                        (u.hasOwnProperty(l)
                          ? null != f && 'onScroll' === l && Or('scroll', e)
                          : null != f && w(e, l, f, c));
                  }
                switch (n) {
                  case 'input':
                    Y(e), re(e, r, !1);
                    break;
                  case 'textarea':
                    Y(e), se(e);
                    break;
                  case 'option':
                    null != r.value && e.setAttribute('value', '' + q(r.value));
                    break;
                  case 'select':
                    (e.multiple = !!r.multiple),
                      null != (l = r.value)
                        ? ie(e, !!r.multiple, l, !1)
                        : null != r.defaultValue && ie(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    'function' === typeof a.onClick && (e.onclick = zr);
                }
                Ur(n, r) && (t.flags |= 4);
              }
              null !== t.ref && (t.flags |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) Qi(0, t, e.memoizedProps, r);
            else {
              if ('string' !== typeof r && null === t.stateNode) throw Error(i(166));
              (n = Aa(Ta.current)),
                Aa(Oa.current),
                Ha(t)
                  ? ((r = t.stateNode), (n = t.memoizedProps), (r[Gr] = t), r.nodeValue !== n && (t.flags |= 4))
                  : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Gr] = t), (t.stateNode = r));
            }
            return null;
          case 13:
            return (
              lo(Da),
              (r = t.memoizedState),
              0 !== (64 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r),
                  (n = !1),
                  null === e ? void 0 !== t.memoizedProps.fallback && Ha(t) : (n = null !== e.memoizedState),
                  r &&
                    !n &&
                    0 !== (2 & t.mode) &&
                    ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 !== (1 & Da.current)
                      ? 0 === Dl && (Dl = 3)
                      : ((0 !== Dl && 3 !== Dl) || (Dl = 4),
                        null === Al || (0 === (134217727 & Ml) && 0 === (134217727 & Fl)) || vu(Al, Rl))),
                  (r || n) && (t.flags |= 4),
                  null)
            );
          case 4:
            return Ra(), null === e && Tr(t.stateNode.containerInfo), null;
          case 10:
            return ta(t), null;
          case 17:
            return vo(t.type) && mo(), null;
          case 19:
            if ((lo(Da), null === (r = t.memoizedState))) return null;
            if (((l = 0 !== (64 & t.flags)), null === (c = r.rendering)))
              if (l) rl(r, !1);
              else {
                if (0 !== Dl || (null !== e && 0 !== (64 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (c = Ia(e))) {
                      for (
                        t.flags |= 64,
                          rl(r, !1),
                          null !== (l = c.updateQueue) && ((t.updateQueue = l), (t.flags |= 4)),
                          null === r.lastEffect && (t.firstEffect = null),
                          t.lastEffect = r.lastEffect,
                          r = n,
                          n = t.child;
                        null !== n;

                      )
                        (e = r),
                          ((l = n).flags &= 2),
                          (l.nextEffect = null),
                          (l.firstEffect = null),
                          (l.lastEffect = null),
                          null === (c = l.alternate)
                            ? ((l.childLanes = 0),
                              (l.lanes = e),
                              (l.child = null),
                              (l.memoizedProps = null),
                              (l.memoizedState = null),
                              (l.updateQueue = null),
                              (l.dependencies = null),
                              (l.stateNode = null))
                            : ((l.childLanes = c.childLanes),
                              (l.lanes = c.lanes),
                              (l.child = c.child),
                              (l.memoizedProps = c.memoizedProps),
                              (l.memoizedState = c.memoizedState),
                              (l.updateQueue = c.updateQueue),
                              (l.type = c.type),
                              (e = c.dependencies),
                              (l.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                          (n = n.sibling);
                      return uo(Da, (1 & Da.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== r.tail && Bo() > Wl && ((t.flags |= 64), (l = !0), rl(r, !1), (t.lanes = 33554432));
              }
            else {
              if (!l)
                if (null !== (e = Ia(c))) {
                  if (
                    ((t.flags |= 64),
                    (l = !0),
                    null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                    rl(r, !0),
                    null === r.tail && 'hidden' === r.tailMode && !c.alternate && !Fa)
                  )
                    return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
                } else
                  2 * Bo() - r.renderingStartTime > Wl &&
                    1073741824 !== n &&
                    ((t.flags |= 64), (l = !0), rl(r, !1), (t.lanes = 33554432));
              r.isBackwards
                ? ((c.sibling = t.child), (t.child = c))
                : (null !== (n = r.last) ? (n.sibling = c) : (t.child = c), (r.last = c));
            }
            return null !== r.tail
              ? ((n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = t.lastEffect),
                (r.renderingStartTime = Bo()),
                (n.sibling = null),
                (t = Da.current),
                uo(Da, l ? (1 & t) | 2 : 1 & t),
                n)
              : null;
          case 23:
          case 24:
            return (
              wu(),
              null !== e &&
                (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                'unstable-defer-without-hiding' !== r.mode &&
                (t.flags |= 4),
              null
            );
        }
        throw Error(i(156, t.tag));
      }
      function al(e) {
        switch (e.tag) {
          case 1:
            vo(e.type) && mo();
            var t = e.flags;
            return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 3:
            if ((Ra(), lo(fo), lo(so), Qa(), 0 !== (64 & (t = e.flags)))) throw Error(i(285));
            return (e.flags = (-4097 & t) | 64), e;
          case 5:
            return La(e), null;
          case 13:
            return lo(Da), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 19:
            return lo(Da), null;
          case 4:
            return Ra(), null;
          case 10:
            return ta(e), null;
          case 23:
          case 24:
            return wu(), null;
          default:
            return null;
        }
      }
      function il(e, t) {
        try {
          var n = '',
            r = t;
          do {
            (n += K(r)), (r = r.return);
          } while (r);
          var o = n;
        } catch (a) {
          o = '\nError generating stack: ' + a.message + '\n' + a.stack;
        }
        return { value: e, source: t, stack: o };
      }
      function ll(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      (Vi = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (Ki = function (e, t, n, r) {
          var a = e.memoizedProps;
          if (a !== r) {
            (e = t.stateNode), Aa(Oa.current);
            var i,
              l = null;
            switch (n) {
              case 'input':
                (a = Z(e, a)), (r = Z(e, r)), (l = []);
                break;
              case 'option':
                (a = ae(e, a)), (r = ae(e, r)), (l = []);
                break;
              case 'select':
                (a = o({}, a, { value: void 0 })), (r = o({}, r, { value: void 0 })), (l = []);
                break;
              case 'textarea':
                (a = le(e, a)), (r = le(e, r)), (l = []);
                break;
              default:
                'function' !== typeof a.onClick && 'function' === typeof r.onClick && (e.onclick = zr);
            }
            for (f in (Ce(n, r), (n = null), a))
              if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                if ('style' === f) {
                  var c = a[f];
                  for (i in c) c.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
                } else
                  'dangerouslySetInnerHTML' !== f &&
                    'children' !== f &&
                    'suppressContentEditableWarning' !== f &&
                    'suppressHydrationWarning' !== f &&
                    'autoFocus' !== f &&
                    (u.hasOwnProperty(f) ? l || (l = []) : (l = l || []).push(f, null));
            for (f in r) {
              var s = r[f];
              if (((c = null != a ? a[f] : void 0), r.hasOwnProperty(f) && s !== c && (null != s || null != c)))
                if ('style' === f)
                  if (c) {
                    for (i in c) !c.hasOwnProperty(i) || (s && s.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ''));
                    for (i in s) s.hasOwnProperty(i) && c[i] !== s[i] && (n || (n = {}), (n[i] = s[i]));
                  } else n || (l || (l = []), l.push(f, n)), (n = s);
                else
                  'dangerouslySetInnerHTML' === f
                    ? ((s = s ? s.__html : void 0),
                      (c = c ? c.__html : void 0),
                      null != s && c !== s && (l = l || []).push(f, s))
                    : 'children' === f
                    ? ('string' !== typeof s && 'number' !== typeof s) || (l = l || []).push(f, '' + s)
                    : 'suppressContentEditableWarning' !== f &&
                      'suppressHydrationWarning' !== f &&
                      (u.hasOwnProperty(f)
                        ? (null != s && 'onScroll' === f && Or('scroll', e), l || c === s || (l = []))
                        : 'object' === typeof s && null !== s && s.$$typeof === D
                        ? s.toString()
                        : (l = l || []).push(f, s));
            }
            n && (l = l || []).push('style', n);
            var f = l;
            (t.updateQueue = f) && (t.flags |= 4);
          }
        }),
        (Qi = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        });
      var ul = 'function' === typeof WeakMap ? WeakMap : Map;
      function cl(e, t, n) {
        ((n = ua(-1, n)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            Ql || ((Ql = !0), (ql = r)), ll(0, t);
          }),
          n
        );
      }
      function sl(e, t, n) {
        (n = ua(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ('function' === typeof r) {
          var o = t.value;
          n.payload = function () {
            return ll(0, t), r(o);
          };
        }
        var a = e.stateNode;
        return (
          null !== a &&
            'function' === typeof a.componentDidCatch &&
            (n.callback = function () {
              'function' !== typeof r && (null === Gl ? (Gl = new Set([this])) : Gl.add(this), ll(0, t));
              var e = t.stack;
              this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
          n
        );
      }
      var fl = 'function' === typeof WeakSet ? WeakSet : Set;
      function dl(e) {
        var t = e.ref;
        if (null !== t)
          if ('function' === typeof t)
            try {
              t(null);
            } catch (n) {
              zu(e, n);
            }
          else t.current = null;
      }
      function pl(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (256 & t.flags && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Go(t.type, n), r)),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
          case 3:
            return void (256 & t.flags && Hr(t.stateNode.containerInfo));
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(i(163));
      }
      function hl(e, t, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
              e = t = t.next;
              do {
                if (3 === (3 & e.tag)) {
                  var r = e.create;
                  e.destroy = r();
                }
                e = e.next;
              } while (e !== t);
            }
            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
              e = t = t.next;
              do {
                var o = e;
                (r = o.next), 0 !== (4 & (o = o.tag)) && 0 !== (1 & o) && (Lu(n, e), ju(n, e)), (e = r);
              } while (e !== t);
            }
            return;
          case 1:
            return (
              (e = n.stateNode),
              4 & n.flags &&
                (null === t
                  ? e.componentDidMount()
                  : ((r = n.elementType === n.type ? t.memoizedProps : Go(n.type, t.memoizedProps)),
                    e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
              void (null !== (t = n.updateQueue) && da(n, t, e))
            );
          case 3:
            if (null !== (t = n.updateQueue)) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                    e = n.child.stateNode;
                    break;
                  case 1:
                    e = n.child.stateNode;
                }
              da(n, t, e);
            }
            return;
          case 5:
            return (e = n.stateNode), void (null === t && 4 & n.flags && Ur(n.type, n.memoizedProps) && e.focus());
          case 6:
          case 4:
          case 12:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
              null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && St(n))))
            );
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
        }
        throw Error(i(163));
      }
      function vl(e, t) {
        for (var n = e; ; ) {
          if (5 === n.tag) {
            var r = n.stateNode;
            if (t)
              'function' === typeof (r = r.style).setProperty
                ? r.setProperty('display', 'none', 'important')
                : (r.display = 'none');
            else {
              r = n.stateNode;
              var o = n.memoizedProps.style;
              (o = void 0 !== o && null !== o && o.hasOwnProperty('display') ? o.display : null),
                (r.style.display = ke('display', o));
            }
          } else if (6 === n.tag) n.stateNode.nodeValue = t ? '' : n.memoizedProps;
          else if (((23 !== n.tag && 24 !== n.tag) || null === n.memoizedState || n === e) && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === e) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === e) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }
      function ml(e, t) {
        if (So && 'function' === typeof So.onCommitFiberUnmount)
          try {
            So.onCommitFiberUnmount(ko, t);
          } catch (a) {}
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var n = (e = e.next);
              do {
                var r = n,
                  o = r.destroy;
                if (((r = r.tag), void 0 !== o))
                  if (0 !== (4 & r)) Lu(t, n);
                  else {
                    r = t;
                    try {
                      o();
                    } catch (a) {
                      zu(r, a);
                    }
                  }
                n = n.next;
              } while (n !== e);
            }
            break;
          case 1:
            if ((dl(t), 'function' === typeof (e = t.stateNode).componentWillUnmount))
              try {
                (e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount();
              } catch (a) {
                zu(t, a);
              }
            break;
          case 5:
            dl(t);
            break;
          case 4:
            Sl(e, t);
        }
      }
      function gl(e) {
        (e.alternate = null),
          (e.child = null),
          (e.dependencies = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.return = null),
          (e.updateQueue = null);
      }
      function yl(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function bl(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (yl(t)) break e;
            t = t.return;
          }
          throw Error(i(160));
        }
        var n = t;
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(i(161));
        }
        16 & n.flags && (ye(t, ''), (n.flags &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || yl(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
            if (2 & n.flags) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.flags)) {
            n = n.stateNode;
            break e;
          }
        }
        r ? wl(e, n, t) : kl(e, n, t);
      }
      function wl(e, t, n) {
        var r = e.tag,
          o = 5 === r || 6 === r;
        if (o)
          (e = o ? e.stateNode : e.stateNode.instance),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                (null !== (n = n._reactRootContainer) && void 0 !== n) || null !== t.onclick || (t.onclick = zr));
        else if (4 !== r && null !== (e = e.child))
          for (wl(e, t, n), e = e.sibling; null !== e; ) wl(e, t, n), (e = e.sibling);
      }
      function kl(e, t, n) {
        var r = e.tag,
          o = 5 === r || 6 === r;
        if (o) (e = o ? e.stateNode : e.stateNode.instance), t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (kl(e, t, n), e = e.sibling; null !== e; ) kl(e, t, n), (e = e.sibling);
      }
      function Sl(e, t) {
        for (var n, r, o = t, a = !1; ; ) {
          if (!a) {
            a = o.return;
            e: for (;;) {
              if (null === a) throw Error(i(160));
              switch (((n = a.stateNode), a.tag)) {
                case 5:
                  r = !1;
                  break e;
                case 3:
                case 4:
                  (n = n.containerInfo), (r = !0);
                  break e;
              }
              a = a.return;
            }
            a = !0;
          }
          if (5 === o.tag || 6 === o.tag) {
            e: for (var l = e, u = o, c = u; ; )
              if ((ml(l, c), null !== c.child && 4 !== c.tag)) (c.child.return = c), (c = c.child);
              else {
                if (c === u) break e;
                for (; null === c.sibling; ) {
                  if (null === c.return || c.return === u) break e;
                  c = c.return;
                }
                (c.sibling.return = c.return), (c = c.sibling);
              }
            r
              ? ((l = n), (u = o.stateNode), 8 === l.nodeType ? l.parentNode.removeChild(u) : l.removeChild(u))
              : n.removeChild(o.stateNode);
          } else if (4 === o.tag) {
            if (null !== o.child) {
              (n = o.stateNode.containerInfo), (r = !0), (o.child.return = o), (o = o.child);
              continue;
            }
          } else if ((ml(e, o), null !== o.child)) {
            (o.child.return = o), (o = o.child);
            continue;
          }
          if (o === t) break;
          for (; null === o.sibling; ) {
            if (null === o.return || o.return === t) return;
            4 === (o = o.return).tag && (a = !1);
          }
          (o.sibling.return = o.return), (o = o.sibling);
        }
      }
      function El(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            var n = t.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
              var r = (n = n.next);
              do {
                3 === (3 & r.tag) && ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()), (r = r.next);
              } while (r !== n);
            }
            return;
          case 1:
            return;
          case 5:
            if (null != (n = t.stateNode)) {
              r = t.memoizedProps;
              var o = null !== e ? e.memoizedProps : r;
              e = t.type;
              var a = t.updateQueue;
              if (((t.updateQueue = null), null !== a)) {
                for (
                  n[Yr] = r,
                    'input' === e && 'radio' === r.type && null != r.name && te(n, r),
                    xe(e, o),
                    t = xe(e, r),
                    o = 0;
                  o < a.length;
                  o += 2
                ) {
                  var l = a[o],
                    u = a[o + 1];
                  'style' === l
                    ? Se(n, u)
                    : 'dangerouslySetInnerHTML' === l
                    ? ge(n, u)
                    : 'children' === l
                    ? ye(n, u)
                    : w(n, l, u, t);
                }
                switch (e) {
                  case 'input':
                    ne(n, r);
                    break;
                  case 'textarea':
                    ce(n, r);
                    break;
                  case 'select':
                    (e = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (a = r.value)
                        ? ie(n, !!r.multiple, a, !1)
                        : e !== !!r.multiple &&
                          (null != r.defaultValue
                            ? ie(n, !!r.multiple, r.defaultValue, !0)
                            : ie(n, !!r.multiple, r.multiple ? [] : '', !1));
                }
              }
            }
            return;
          case 6:
            if (null === t.stateNode) throw Error(i(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
          case 3:
            return void ((n = t.stateNode).hydrate && ((n.hydrate = !1), St(n.containerInfo)));
          case 12:
            return;
          case 13:
            return null !== t.memoizedState && (($l = Bo()), vl(t.child, !0)), void Cl(t);
          case 19:
            return void Cl(t);
          case 17:
            return;
          case 23:
          case 24:
            return void vl(t, null !== t.memoizedState);
        }
        throw Error(i(163));
      }
      function Cl(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new fl()),
            t.forEach(function (t) {
              var r = Fu.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      function xl(e, t) {
        return (
          null !== e &&
          (null === (e = e.memoizedState) || null !== e.dehydrated) &&
          null !== (t = t.memoizedState) &&
          null === t.dehydrated
        );
      }
      var _l = Math.ceil,
        Ol = k.ReactCurrentDispatcher,
        Pl = k.ReactCurrentOwner,
        Tl = 0,
        Al = null,
        Nl = null,
        Rl = 0,
        jl = 0,
        Ll = io(0),
        Dl = 0,
        Il = null,
        zl = 0,
        Ml = 0,
        Fl = 0,
        Ul = 0,
        Bl = null,
        $l = 0,
        Wl = 1 / 0;
      function Hl() {
        Wl = Bo() + 500;
      }
      var Vl,
        Kl = null,
        Ql = !1,
        ql = null,
        Gl = null,
        Yl = !1,
        Xl = null,
        Jl = 90,
        Zl = [],
        eu = [],
        tu = null,
        nu = 0,
        ru = null,
        ou = -1,
        au = 0,
        iu = 0,
        lu = null,
        uu = !1;
      function cu() {
        return 0 !== (48 & Tl) ? Bo() : -1 !== ou ? ou : (ou = Bo());
      }
      function su(e) {
        if (0 === (2 & (e = e.mode))) return 1;
        if (0 === (4 & e)) return 99 === $o() ? 1 : 2;
        if ((0 === au && (au = zl), 0 !== qo.transition)) {
          0 !== iu && (iu = null !== Bl ? Bl.pendingLanes : 0), (e = au);
          var t = 4186112 & ~iu;
          return 0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t;
        }
        return (
          (e = $o()),
          0 !== (4 & Tl) && 98 === e
            ? (e = Ut(12, au))
            : (e = Ut(
                (e = (function (e) {
                  switch (e) {
                    case 99:
                      return 15;
                    case 98:
                      return 10;
                    case 97:
                    case 96:
                      return 8;
                    case 95:
                      return 2;
                    default:
                      return 0;
                  }
                })(e)),
                au
              )),
          e
        );
      }
      function fu(e, t, n) {
        if (50 < nu) throw ((nu = 0), (ru = null), Error(i(185)));
        if (null === (e = du(e, t))) return null;
        Wt(e, t, n), e === Al && ((Fl |= t), 4 === Dl && vu(e, Rl));
        var r = $o();
        1 === t
          ? 0 !== (8 & Tl) && 0 === (48 & Tl)
            ? mu(e)
            : (pu(e, n), 0 === Tl && (Hl(), Ko()))
          : (0 === (4 & Tl) || (98 !== r && 99 !== r) || (null === tu ? (tu = new Set([e])) : tu.add(e)), pu(e, n)),
          (Bl = e);
      }
      function du(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
          (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
        return 3 === n.tag ? n.stateNode : null;
      }
      function pu(e, t) {
        for (
          var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes;
          0 < l;

        ) {
          var u = 31 - Ht(l),
            c = 1 << u,
            s = a[u];
          if (-1 === s) {
            if (0 === (c & r) || 0 !== (c & o)) {
              (s = t), zt(c);
              var f = It;
              a[u] = 10 <= f ? s + 250 : 6 <= f ? s + 5e3 : -1;
            }
          } else s <= t && (e.expiredLanes |= c);
          l &= ~c;
        }
        if (((r = Mt(e, e === Al ? Rl : 0)), (t = It), 0 === r))
          null !== n && (n !== Do && xo(n), (e.callbackNode = null), (e.callbackPriority = 0));
        else {
          if (null !== n) {
            if (e.callbackPriority === t) return;
            n !== Do && xo(n);
          }
          15 === t
            ? ((n = mu.bind(null, e)), null === zo ? ((zo = [n]), (Mo = Co(Ao, Qo))) : zo.push(n), (n = Do))
            : 14 === t
            ? (n = Vo(99, mu.bind(null, e)))
            : (n = Vo(
                (n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(i(358, e));
                  }
                })(t)),
                hu.bind(null, e)
              )),
            (e.callbackPriority = t),
            (e.callbackNode = n);
        }
      }
      function hu(e) {
        if (((ou = -1), (iu = au = 0), 0 !== (48 & Tl))) throw Error(i(327));
        var t = e.callbackNode;
        if (Ru() && e.callbackNode !== t) return null;
        var n = Mt(e, e === Al ? Rl : 0);
        if (0 === n) return null;
        var r = n,
          o = Tl;
        Tl |= 16;
        var a = Eu();
        for ((Al === e && Rl === r) || (Hl(), ku(e, r)); ; )
          try {
            _u();
            break;
          } catch (u) {
            Su(e, u);
          }
        if (
          (ea(), (Ol.current = a), (Tl = o), null !== Nl ? (r = 0) : ((Al = null), (Rl = 0), (r = Dl)), 0 !== (zl & Fl))
        )
          ku(e, 0);
        else if (0 !== r) {
          if (
            (2 === r &&
              ((Tl |= 64), e.hydrate && ((e.hydrate = !1), Hr(e.containerInfo)), 0 !== (n = Ft(e)) && (r = Cu(e, n))),
            1 === r)
          )
            throw ((t = Il), ku(e, 0), vu(e, n), pu(e, Bo()), t);
          switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 2:
              Tu(e);
              break;
            case 3:
              if ((vu(e, n), (62914560 & n) === n && 10 < (r = $l + 500 - Bo()))) {
                if (0 !== Mt(e, 0)) break;
                if (((o = e.suspendedLanes) & n) !== n) {
                  cu(), (e.pingedLanes |= e.suspendedLanes & o);
                  break;
                }
                e.timeoutHandle = $r(Tu.bind(null, e), r);
                break;
              }
              Tu(e);
              break;
            case 4:
              if ((vu(e, n), (4186112 & n) === n)) break;
              for (r = e.eventTimes, o = -1; 0 < n; ) {
                var l = 31 - Ht(n);
                (a = 1 << l), (l = r[l]) > o && (o = l), (n &= ~a);
              }
              if (
                ((n = o),
                10 <
                  (n =
                    (120 > (n = Bo() - n)
                      ? 120
                      : 480 > n
                      ? 480
                      : 1080 > n
                      ? 1080
                      : 1920 > n
                      ? 1920
                      : 3e3 > n
                      ? 3e3
                      : 4320 > n
                      ? 4320
                      : 1960 * _l(n / 1960)) - n))
              ) {
                e.timeoutHandle = $r(Tu.bind(null, e), n);
                break;
              }
              Tu(e);
              break;
            case 5:
              Tu(e);
              break;
            default:
              throw Error(i(329));
          }
        }
        return pu(e, Bo()), e.callbackNode === t ? hu.bind(null, e) : null;
      }
      function vu(e, t) {
        for (t &= ~Ul, t &= ~Fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
          var n = 31 - Ht(t),
            r = 1 << n;
          (e[n] = -1), (t &= ~r);
        }
      }
      function mu(e) {
        if (0 !== (48 & Tl)) throw Error(i(327));
        if ((Ru(), e === Al && 0 !== (e.expiredLanes & Rl))) {
          var t = Rl,
            n = Cu(e, t);
          0 !== (zl & Fl) && (n = Cu(e, (t = Mt(e, t))));
        } else n = Cu(e, (t = Mt(e, 0)));
        if (
          (0 !== e.tag &&
            2 === n &&
            ((Tl |= 64), e.hydrate && ((e.hydrate = !1), Hr(e.containerInfo)), 0 !== (t = Ft(e)) && (n = Cu(e, t))),
          1 === n)
        )
          throw ((n = Il), ku(e, 0), vu(e, t), pu(e, Bo()), n);
        return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Tu(e), pu(e, Bo()), null;
      }
      function gu(e, t) {
        var n = Tl;
        Tl |= 1;
        try {
          return e(t);
        } finally {
          0 === (Tl = n) && (Hl(), Ko());
        }
      }
      function yu(e, t) {
        var n = Tl;
        (Tl &= -2), (Tl |= 8);
        try {
          return e(t);
        } finally {
          0 === (Tl = n) && (Hl(), Ko());
        }
      }
      function bu(e, t) {
        uo(Ll, jl), (jl |= t), (zl |= t);
      }
      function wu() {
        (jl = Ll.current), lo(Ll);
      }
      function ku(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), Wr(n)), null !== Nl))
          for (n = Nl.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null !== (r = r.type.childContextTypes) && void 0 !== r && mo();
                break;
              case 3:
                Ra(), lo(fo), lo(so), Qa();
                break;
              case 5:
                La(r);
                break;
              case 4:
                Ra();
                break;
              case 13:
              case 19:
                lo(Da);
                break;
              case 10:
                ta(r);
                break;
              case 23:
              case 24:
                wu();
            }
            n = n.return;
          }
        (Al = e), (Nl = Wu(e.current, null)), (Rl = jl = zl = t), (Dl = 0), (Il = null), (Ul = Fl = Ml = 0);
      }
      function Su(e, t) {
        for (;;) {
          var n = Nl;
          try {
            if ((ea(), (qa.current = Ti), ei)) {
              for (var r = Xa.memoizedState; null !== r; ) {
                var o = r.queue;
                null !== o && (o.pending = null), (r = r.next);
              }
              ei = !1;
            }
            if (((Ya = 0), (Za = Ja = Xa = null), (ti = !1), (Pl.current = null), null === n || null === n.return)) {
              (Dl = 1), (Il = t), (Nl = null);
              break;
            }
            e: {
              var a = e,
                i = n.return,
                l = n,
                u = t;
              if (
                ((t = Rl),
                (l.flags |= 2048),
                (l.firstEffect = l.lastEffect = null),
                null !== u && 'object' === typeof u && 'function' === typeof u.then)
              ) {
                var c = u;
                if (0 === (2 & l.mode)) {
                  var s = l.alternate;
                  s
                    ? ((l.updateQueue = s.updateQueue), (l.memoizedState = s.memoizedState), (l.lanes = s.lanes))
                    : ((l.updateQueue = null), (l.memoizedState = null));
                }
                var f = 0 !== (1 & Da.current),
                  d = i;
                do {
                  var p;
                  if ((p = 13 === d.tag)) {
                    var h = d.memoizedState;
                    if (null !== h) p = null !== h.dehydrated;
                    else {
                      var v = d.memoizedProps;
                      p = void 0 !== v.fallback && (!0 !== v.unstable_avoidThisFallback || !f);
                    }
                  }
                  if (p) {
                    var m = d.updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(c), (d.updateQueue = g);
                    } else m.add(c);
                    if (0 === (2 & d.mode)) {
                      if (((d.flags |= 64), (l.flags |= 16384), (l.flags &= -2981), 1 === l.tag))
                        if (null === l.alternate) l.tag = 17;
                        else {
                          var y = ua(-1, 1);
                          (y.tag = 2), ca(l, y);
                        }
                      l.lanes |= 1;
                      break e;
                    }
                    (u = void 0), (l = t);
                    var b = a.pingCache;
                    if (
                      (null === b
                        ? ((b = a.pingCache = new ul()), (u = new Set()), b.set(c, u))
                        : void 0 === (u = b.get(c)) && ((u = new Set()), b.set(c, u)),
                      !u.has(l))
                    ) {
                      u.add(l);
                      var w = Mu.bind(null, a, c, l);
                      c.then(w, w);
                    }
                    (d.flags |= 4096), (d.lanes = t);
                    break e;
                  }
                  d = d.return;
                } while (null !== d);
                u = Error(
                  (Q(l.type) || 'A React component') +
                    ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.'
                );
              }
              5 !== Dl && (Dl = 2), (u = il(u, l)), (d = i);
              do {
                switch (d.tag) {
                  case 3:
                    (a = u), (d.flags |= 4096), (t &= -t), (d.lanes |= t), sa(d, cl(0, a, t));
                    break e;
                  case 1:
                    a = u;
                    var k = d.type,
                      S = d.stateNode;
                    if (
                      0 === (64 & d.flags) &&
                      ('function' === typeof k.getDerivedStateFromError ||
                        (null !== S && 'function' === typeof S.componentDidCatch && (null === Gl || !Gl.has(S))))
                    ) {
                      (d.flags |= 4096), (t &= -t), (d.lanes |= t), sa(d, sl(d, a, t));
                      break e;
                    }
                }
                d = d.return;
              } while (null !== d);
            }
            Pu(n);
          } catch (E) {
            (t = E), Nl === n && null !== n && (Nl = n = n.return);
            continue;
          }
          break;
        }
      }
      function Eu() {
        var e = Ol.current;
        return (Ol.current = Ti), null === e ? Ti : e;
      }
      function Cu(e, t) {
        var n = Tl;
        Tl |= 16;
        var r = Eu();
        for ((Al === e && Rl === t) || ku(e, t); ; )
          try {
            xu();
            break;
          } catch (o) {
            Su(e, o);
          }
        if ((ea(), (Tl = n), (Ol.current = r), null !== Nl)) throw Error(i(261));
        return (Al = null), (Rl = 0), Dl;
      }
      function xu() {
        for (; null !== Nl; ) Ou(Nl);
      }
      function _u() {
        for (; null !== Nl && !_o(); ) Ou(Nl);
      }
      function Ou(e) {
        var t = Vl(e.alternate, e, jl);
        (e.memoizedProps = e.pendingProps), null === t ? Pu(e) : (Nl = t), (Pl.current = null);
      }
      function Pu(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 0 === (2048 & t.flags))) {
            if (null !== (n = ol(n, t, jl))) return void (Nl = n);
            if (
              (24 !== (n = t).tag && 23 !== n.tag) ||
              null === n.memoizedState ||
              0 !== (1073741824 & jl) ||
              0 === (4 & n.mode)
            ) {
              for (var r = 0, o = n.child; null !== o; ) (r |= o.lanes | o.childLanes), (o = o.sibling);
              n.childLanes = r;
            }
            null !== e &&
              0 === (2048 & e.flags) &&
              (null === e.firstEffect && (e.firstEffect = t.firstEffect),
              null !== t.lastEffect &&
                (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), (e.lastEffect = t.lastEffect)),
              1 < t.flags &&
                (null !== e.lastEffect ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t), (e.lastEffect = t)));
          } else {
            if (null !== (n = al(t))) return (n.flags &= 2047), void (Nl = n);
            null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
          }
          if (null !== (t = t.sibling)) return void (Nl = t);
          Nl = t = e;
        } while (null !== t);
        0 === Dl && (Dl = 5);
      }
      function Tu(e) {
        var t = $o();
        return Ho(99, Au.bind(null, e, t)), null;
      }
      function Au(e, t) {
        do {
          Ru();
        } while (null !== Xl);
        if (0 !== (48 & Tl)) throw Error(i(327));
        var n = e.finishedWork;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(i(177));
        e.callbackNode = null;
        var r = n.lanes | n.childLanes,
          o = r,
          a = e.pendingLanes & ~o;
        (e.pendingLanes = o),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.expiredLanes &= o),
          (e.mutableReadLanes &= o),
          (e.entangledLanes &= o),
          (o = e.entanglements);
        for (var l = e.eventTimes, u = e.expirationTimes; 0 < a; ) {
          var c = 31 - Ht(a),
            s = 1 << c;
          (o[c] = 0), (l[c] = -1), (u[c] = -1), (a &= ~s);
        }
        if (
          (null !== tu && 0 === (24 & r) && tu.has(e) && tu.delete(e),
          e === Al && ((Nl = Al = null), (Rl = 0)),
          1 < n.flags
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
              : (r = n)
            : (r = n.firstEffect),
          null !== r)
        ) {
          if (((o = Tl), (Tl |= 32), (Pl.current = null), (Mr = Gt), hr((l = pr())))) {
            if ('selectionStart' in l) u = { start: l.selectionStart, end: l.selectionEnd };
            else
              e: if (
                ((u = ((u = l.ownerDocument) && u.defaultView) || window),
                (s = u.getSelection && u.getSelection()) && 0 !== s.rangeCount)
              ) {
                (u = s.anchorNode), (a = s.anchorOffset), (c = s.focusNode), (s = s.focusOffset);
                try {
                  u.nodeType, c.nodeType;
                } catch (_) {
                  u = null;
                  break e;
                }
                var f = 0,
                  d = -1,
                  p = -1,
                  h = 0,
                  v = 0,
                  m = l,
                  g = null;
                t: for (;;) {
                  for (
                    var y;
                    m !== u || (0 !== a && 3 !== m.nodeType) || (d = f + a),
                      m !== c || (0 !== s && 3 !== m.nodeType) || (p = f + s),
                      3 === m.nodeType && (f += m.nodeValue.length),
                      null !== (y = m.firstChild);

                  )
                    (g = m), (m = y);
                  for (;;) {
                    if (m === l) break t;
                    if (
                      (g === u && ++h === a && (d = f), g === c && ++v === s && (p = f), null !== (y = m.nextSibling))
                    )
                      break;
                    g = (m = g).parentNode;
                  }
                  m = y;
                }
                u = -1 === d || -1 === p ? null : { start: d, end: p };
              } else u = null;
            u = u || { start: 0, end: 0 };
          } else u = null;
          (Fr = { focusedElem: l, selectionRange: u }), (Gt = !1), (lu = null), (uu = !1), (Kl = r);
          do {
            try {
              Nu();
            } catch (_) {
              if (null === Kl) throw Error(i(330));
              zu(Kl, _), (Kl = Kl.nextEffect);
            }
          } while (null !== Kl);
          (lu = null), (Kl = r);
          do {
            try {
              for (l = e; null !== Kl; ) {
                var b = Kl.flags;
                if ((16 & b && ye(Kl.stateNode, ''), 128 & b)) {
                  var w = Kl.alternate;
                  if (null !== w) {
                    var k = w.ref;
                    null !== k && ('function' === typeof k ? k(null) : (k.current = null));
                  }
                }
                switch (1038 & b) {
                  case 2:
                    bl(Kl), (Kl.flags &= -3);
                    break;
                  case 6:
                    bl(Kl), (Kl.flags &= -3), El(Kl.alternate, Kl);
                    break;
                  case 1024:
                    Kl.flags &= -1025;
                    break;
                  case 1028:
                    (Kl.flags &= -1025), El(Kl.alternate, Kl);
                    break;
                  case 4:
                    El(Kl.alternate, Kl);
                    break;
                  case 8:
                    Sl(l, (u = Kl));
                    var S = u.alternate;
                    gl(u), null !== S && gl(S);
                }
                Kl = Kl.nextEffect;
              }
            } catch (_) {
              if (null === Kl) throw Error(i(330));
              zu(Kl, _), (Kl = Kl.nextEffect);
            }
          } while (null !== Kl);
          if (
            ((k = Fr),
            (w = pr()),
            (b = k.focusedElem),
            (l = k.selectionRange),
            w !== b && b && b.ownerDocument && dr(b.ownerDocument.documentElement, b))
          ) {
            null !== l &&
              hr(b) &&
              ((w = l.start),
              void 0 === (k = l.end) && (k = w),
              'selectionStart' in b
                ? ((b.selectionStart = w), (b.selectionEnd = Math.min(k, b.value.length)))
                : (k = ((w = b.ownerDocument || document) && w.defaultView) || window).getSelection &&
                  ((k = k.getSelection()),
                  (u = b.textContent.length),
                  (S = Math.min(l.start, u)),
                  (l = void 0 === l.end ? S : Math.min(l.end, u)),
                  !k.extend && S > l && ((u = l), (l = S), (S = u)),
                  (u = fr(b, S)),
                  (a = fr(b, l)),
                  u &&
                    a &&
                    (1 !== k.rangeCount ||
                      k.anchorNode !== u.node ||
                      k.anchorOffset !== u.offset ||
                      k.focusNode !== a.node ||
                      k.focusOffset !== a.offset) &&
                    ((w = w.createRange()).setStart(u.node, u.offset),
                    k.removeAllRanges(),
                    S > l
                      ? (k.addRange(w), k.extend(a.node, a.offset))
                      : (w.setEnd(a.node, a.offset), k.addRange(w))))),
              (w = []);
            for (k = b; (k = k.parentNode); )
              1 === k.nodeType && w.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for ('function' === typeof b.focus && b.focus(), b = 0; b < w.length; b++)
              ((k = w[b]).element.scrollLeft = k.left), (k.element.scrollTop = k.top);
          }
          (Gt = !!Mr), (Fr = Mr = null), (e.current = n), (Kl = r);
          do {
            try {
              for (b = e; null !== Kl; ) {
                var E = Kl.flags;
                if ((36 & E && hl(b, Kl.alternate, Kl), 128 & E)) {
                  w = void 0;
                  var C = Kl.ref;
                  if (null !== C) {
                    var x = Kl.stateNode;
                    switch (Kl.tag) {
                      case 5:
                        w = x;
                        break;
                      default:
                        w = x;
                    }
                    'function' === typeof C ? C(w) : (C.current = w);
                  }
                }
                Kl = Kl.nextEffect;
              }
            } catch (_) {
              if (null === Kl) throw Error(i(330));
              zu(Kl, _), (Kl = Kl.nextEffect);
            }
          } while (null !== Kl);
          (Kl = null), Io(), (Tl = o);
        } else e.current = n;
        if (Yl) (Yl = !1), (Xl = e), (Jl = t);
        else
          for (Kl = r; null !== Kl; )
            (t = Kl.nextEffect),
              (Kl.nextEffect = null),
              8 & Kl.flags && (((E = Kl).sibling = null), (E.stateNode = null)),
              (Kl = t);
        if (
          (0 === (r = e.pendingLanes) && (Gl = null),
          1 === r ? (e === ru ? nu++ : ((nu = 0), (ru = e))) : (nu = 0),
          (n = n.stateNode),
          So && 'function' === typeof So.onCommitFiberRoot)
        )
          try {
            So.onCommitFiberRoot(ko, n, void 0, 64 === (64 & n.current.flags));
          } catch (_) {}
        if ((pu(e, Bo()), Ql)) throw ((Ql = !1), (e = ql), (ql = null), e);
        return 0 !== (8 & Tl) || Ko(), null;
      }
      function Nu() {
        for (; null !== Kl; ) {
          var e = Kl.alternate;
          uu ||
            null === lu ||
            (0 !== (8 & Kl.flags) ? et(Kl, lu) && (uu = !0) : 13 === Kl.tag && xl(e, Kl) && et(Kl, lu) && (uu = !0));
          var t = Kl.flags;
          0 !== (256 & t) && pl(e, Kl),
            0 === (512 & t) ||
              Yl ||
              ((Yl = !0),
              Vo(97, function () {
                return Ru(), null;
              })),
            (Kl = Kl.nextEffect);
        }
      }
      function Ru() {
        if (90 !== Jl) {
          var e = 97 < Jl ? 97 : Jl;
          return (Jl = 90), Ho(e, Du);
        }
        return !1;
      }
      function ju(e, t) {
        Zl.push(t, e),
          Yl ||
            ((Yl = !0),
            Vo(97, function () {
              return Ru(), null;
            }));
      }
      function Lu(e, t) {
        eu.push(t, e),
          Yl ||
            ((Yl = !0),
            Vo(97, function () {
              return Ru(), null;
            }));
      }
      function Du() {
        if (null === Xl) return !1;
        var e = Xl;
        if (((Xl = null), 0 !== (48 & Tl))) throw Error(i(331));
        var t = Tl;
        Tl |= 32;
        var n = eu;
        eu = [];
        for (var r = 0; r < n.length; r += 2) {
          var o = n[r],
            a = n[r + 1],
            l = o.destroy;
          if (((o.destroy = void 0), 'function' === typeof l))
            try {
              l();
            } catch (c) {
              if (null === a) throw Error(i(330));
              zu(a, c);
            }
        }
        for (n = Zl, Zl = [], r = 0; r < n.length; r += 2) {
          (o = n[r]), (a = n[r + 1]);
          try {
            var u = o.create;
            o.destroy = u();
          } catch (c) {
            if (null === a) throw Error(i(330));
            zu(a, c);
          }
        }
        for (u = e.current.firstEffect; null !== u; )
          (e = u.nextEffect), (u.nextEffect = null), 8 & u.flags && ((u.sibling = null), (u.stateNode = null)), (u = e);
        return (Tl = t), Ko(), !0;
      }
      function Iu(e, t, n) {
        ca(e, (t = cl(0, (t = il(n, t)), 1))), (t = cu()), null !== (e = du(e, 1)) && (Wt(e, 1, t), pu(e, t));
      }
      function zu(e, t) {
        if (3 === e.tag) Iu(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              Iu(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                'function' === typeof n.type.getDerivedStateFromError ||
                ('function' === typeof r.componentDidCatch && (null === Gl || !Gl.has(r)))
              ) {
                var o = sl(n, (e = il(t, e)), 1);
                if ((ca(n, o), (o = cu()), null !== (n = du(n, 1)))) Wt(n, 1, o), pu(n, o);
                else if ('function' === typeof r.componentDidCatch && (null === Gl || !Gl.has(r)))
                  try {
                    r.componentDidCatch(t, e);
                  } catch (a) {}
                break;
              }
            }
            n = n.return;
          }
      }
      function Mu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          (t = cu()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Al === e &&
            (Rl & n) === n &&
            (4 === Dl || (3 === Dl && (62914560 & Rl) === Rl && 500 > Bo() - $l) ? ku(e, 0) : (Ul |= n)),
          pu(e, t);
      }
      function Fu(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 === (t = 0) &&
            (0 === (2 & (t = e.mode))
              ? (t = 1)
              : 0 === (4 & t)
              ? (t = 99 === $o() ? 1 : 2)
              : (0 === au && (au = zl), 0 === (t = Bt(62914560 & ~au)) && (t = 4194304))),
          (n = cu()),
          null !== (e = du(e, t)) && (Wt(e, t, n), pu(e, n));
      }
      function Uu(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
          (this.mode = r),
          (this.flags = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Bu(e, t, n, r) {
        return new Uu(e, t, n, r);
      }
      function $u(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Wu(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Bu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Hu(e, t, n, r, o, a) {
        var l = 2;
        if (((r = e), 'function' === typeof e)) $u(e) && (l = 1);
        else if ('string' === typeof e) l = 5;
        else
          e: switch (e) {
            case C:
              return Vu(n.children, o, a, t);
            case I:
              (l = 8), (o |= 16);
              break;
            case x:
              (l = 8), (o |= 1);
              break;
            case _:
              return ((e = Bu(12, n, t, 8 | o)).elementType = _), (e.type = _), (e.lanes = a), e;
            case A:
              return ((e = Bu(13, n, t, o)).type = A), (e.elementType = A), (e.lanes = a), e;
            case N:
              return ((e = Bu(19, n, t, o)).elementType = N), (e.lanes = a), e;
            case z:
              return Ku(n, o, a, t);
            case M:
              return ((e = Bu(24, n, t, o)).elementType = M), (e.lanes = a), e;
            default:
              if ('object' === typeof e && null !== e)
                switch (e.$$typeof) {
                  case O:
                    l = 10;
                    break e;
                  case P:
                    l = 9;
                    break e;
                  case T:
                    l = 11;
                    break e;
                  case R:
                    l = 14;
                    break e;
                  case j:
                    (l = 16), (r = null);
                    break e;
                  case L:
                    l = 22;
                    break e;
                }
              throw Error(i(130, null == e ? e : typeof e, ''));
          }
        return ((t = Bu(l, n, t, o)).elementType = e), (t.type = r), (t.lanes = a), t;
      }
      function Vu(e, t, n, r) {
        return ((e = Bu(7, e, r, t)).lanes = n), e;
      }
      function Ku(e, t, n, r) {
        return ((e = Bu(23, e, r, t)).elementType = z), (e.lanes = n), e;
      }
      function Qu(e, t, n) {
        return ((e = Bu(6, e, null, t)).lanes = n), e;
      }
      function qu(e, t, n) {
        return (
          ((t = Bu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
          (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
          t
        );
      }
      function Gu(e, t, n) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 0),
          (this.eventTimes = $t(0)),
          (this.expirationTimes = $t(-1)),
          (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
          (this.entanglements = $t(0)),
          (this.mutableSourceEagerHydrationData = null);
      }
      function Yu(e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: E, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
      }
      function Xu(e, t, n, r) {
        var o = t.current,
          a = cu(),
          l = su(o);
        e: if (n) {
          t: {
            if (Ye((n = n._reactInternals)) !== n || 1 !== n.tag) throw Error(i(170));
            var u = n;
            do {
              switch (u.tag) {
                case 3:
                  u = u.stateNode.context;
                  break t;
                case 1:
                  if (vo(u.type)) {
                    u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              u = u.return;
            } while (null !== u);
            throw Error(i(171));
          }
          if (1 === n.tag) {
            var c = n.type;
            if (vo(c)) {
              n = yo(n, c, u);
              break e;
            }
          }
          n = u;
        } else n = co;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = ua(a, l)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          ca(o, t),
          fu(o, l, a),
          l
        );
      }
      function Ju(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
          case 5:
          default:
            return e.child.stateNode;
        }
      }
      function Zu(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function ec(e, t) {
        Zu(e, t), (e = e.alternate) && Zu(e, t);
      }
      function tc(e, t, n) {
        var r = (null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources) || null;
        if (
          ((n = new Gu(e, t, null != n && !0 === n.hydrate)),
          (t = Bu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
          (n.current = t),
          (t.stateNode = n),
          ia(t),
          (e[Xr] = n.current),
          Tr(8 === e.nodeType ? e.parentNode : e),
          r)
        )
          for (e = 0; e < r.length; e++) {
            var o = (t = r[e])._getVersion;
            (o = o(t._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [t, o])
                : n.mutableSourceEagerHydrationData.push(t, o);
          }
        this._internalRoot = n;
      }
      function nc(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
        );
      }
      function rc(e, t, n, r, o) {
        var a = n._reactRootContainer;
        if (a) {
          var i = a._internalRoot;
          if ('function' === typeof o) {
            var l = o;
            o = function () {
              var e = Ju(i);
              l.call(e);
            };
          }
          Xu(t, i, e, o);
        } else {
          if (
            ((a = n._reactRootContainer = (function (e, t) {
              if (
                (t ||
                  (t = !(
                    !(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) ||
                    1 !== t.nodeType ||
                    !t.hasAttribute('data-reactroot')
                  )),
                !t)
              )
                for (var n; (n = e.lastChild); ) e.removeChild(n);
              return new tc(e, 0, t ? { hydrate: !0 } : void 0);
            })(n, r)),
            (i = a._internalRoot),
            'function' === typeof o)
          ) {
            var u = o;
            o = function () {
              var e = Ju(i);
              u.call(e);
            };
          }
          yu(function () {
            Xu(t, i, e, o);
          });
        }
        return Ju(i);
      }
      function oc(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nc(t)) throw Error(i(200));
        return Yu(e, t, null, n);
      }
      (Vl = function (e, t, n) {
        var r = t.lanes;
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || fo.current) Li = !0;
          else {
            if (0 === (n & r)) {
              switch (((Li = !1), t.tag)) {
                case 3:
                  Hi(t), Va();
                  break;
                case 5:
                  ja(t);
                  break;
                case 1:
                  vo(t.type) && bo(t);
                  break;
                case 4:
                  Na(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  r = t.memoizedProps.value;
                  var o = t.type._context;
                  uo(Yo, o._currentValue), (o._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (n & t.child.childLanes)
                      ? Gi(e, t, n)
                      : (uo(Da, 1 & Da.current), null !== (t = nl(e, t, n)) ? t.sibling : null);
                  uo(Da, 1 & Da.current);
                  break;
                case 19:
                  if (((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))) {
                    if (r) return tl(e, t, n);
                    t.flags |= 64;
                  }
                  if (
                    (null !== (o = t.memoizedState) && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                    uo(Da, Da.current),
                    r)
                  )
                    break;
                  return null;
                case 23:
                case 24:
                  return (t.lanes = 0), Fi(e, t, n);
              }
              return nl(e, t, n);
            }
            Li = 0 !== (16384 & e.flags);
          }
        else Li = !1;
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (o = ho(t, so.current)),
              ra(t, n),
              (o = oi(null, t, r, e, o, n)),
              (t.flags |= 1),
              'object' === typeof o && null !== o && 'function' === typeof o.render && void 0 === o.$$typeof)
            ) {
              if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), vo(r))) {
                var a = !0;
                bo(t);
              } else a = !1;
              (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null), ia(t);
              var l = r.getDerivedStateFromProps;
              'function' === typeof l && ha(t, r, l, e),
                (o.updater = va),
                (t.stateNode = o),
                (o._reactInternals = t),
                ba(t, r, e, n),
                (t = Wi(null, t, r, !0, a, n));
            } else (t.tag = 0), Di(null, t, o, n), (t = t.child);
            return t;
          case 16:
            o = t.elementType;
            e: {
              switch (
                (null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (o = (a = o._init)(o._payload)),
                (t.type = o),
                (a = t.tag = (function (e) {
                  if ('function' === typeof e) return $u(e) ? 1 : 0;
                  if (void 0 !== e && null !== e) {
                    if ((e = e.$$typeof) === T) return 11;
                    if (e === R) return 14;
                  }
                  return 2;
                })(o)),
                (e = Go(o, e)),
                a)
              ) {
                case 0:
                  t = Bi(null, t, o, e, n);
                  break e;
                case 1:
                  t = $i(null, t, o, e, n);
                  break e;
                case 11:
                  t = Ii(null, t, o, e, n);
                  break e;
                case 14:
                  t = zi(null, t, o, Go(o.type, e), r, n);
                  break e;
              }
              throw Error(i(306, o, ''));
            }
            return t;
          case 0:
            return (r = t.type), (o = t.pendingProps), Bi(e, t, r, (o = t.elementType === r ? o : Go(r, o)), n);
          case 1:
            return (r = t.type), (o = t.pendingProps), $i(e, t, r, (o = t.elementType === r ? o : Go(r, o)), n);
          case 3:
            if ((Hi(t), (r = t.updateQueue), null === e || null === r)) throw Error(i(282));
            if (
              ((r = t.pendingProps),
              (o = null !== (o = t.memoizedState) ? o.element : null),
              la(e, t),
              fa(t, r, null, n),
              (r = t.memoizedState.element) === o)
            )
              Va(), (t = nl(e, t, n));
            else {
              if (
                ((a = (o = t.stateNode).hydrate) &&
                  ((Ma = Vr(t.stateNode.containerInfo.firstChild)), (za = t), (a = Fa = !0)),
                a)
              ) {
                if (null != (e = o.mutableSourceEagerHydrationData))
                  for (o = 0; o < e.length; o += 2) ((a = e[o])._workInProgressVersionPrimary = e[o + 1]), Ka.push(a);
                for (n = xa(t, null, r, n), t.child = n; n; ) (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
              } else Di(e, t, r, n), Va();
              t = t.child;
            }
            return t;
          case 5:
            return (
              ja(t),
              null === e && $a(t),
              (r = t.type),
              (o = t.pendingProps),
              (a = null !== e ? e.memoizedProps : null),
              (l = o.children),
              Br(r, o) ? (l = null) : null !== a && Br(r, a) && (t.flags |= 16),
              Ui(e, t),
              Di(e, t, l, n),
              t.child
            );
          case 6:
            return null === e && $a(t), null;
          case 13:
            return Gi(e, t, n);
          case 4:
            return (
              Na(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Ca(t, null, r, n)) : Di(e, t, r, n),
              t.child
            );
          case 11:
            return (r = t.type), (o = t.pendingProps), Ii(e, t, r, (o = t.elementType === r ? o : Go(r, o)), n);
          case 7:
            return Di(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Di(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context), (o = t.pendingProps), (l = t.memoizedProps), (a = o.value);
              var u = t.type._context;
              if ((uo(Yo, u._currentValue), (u._currentValue = a), null !== l))
                if (
                  ((u = l.value),
                  0 ===
                    (a = lr(u, a)
                      ? 0
                      : 0 |
                        ('function' === typeof r._calculateChangedBits ? r._calculateChangedBits(u, a) : 1073741823)))
                ) {
                  if (l.children === o.children && !fo.current) {
                    t = nl(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                    var c = u.dependencies;
                    if (null !== c) {
                      l = u.child;
                      for (var s = c.firstContext; null !== s; ) {
                        if (s.context === r && 0 !== (s.observedBits & a)) {
                          1 === u.tag && (((s = ua(-1, n & -n)).tag = 2), ca(u, s)),
                            (u.lanes |= n),
                            null !== (s = u.alternate) && (s.lanes |= n),
                            na(u.return, n),
                            (c.lanes |= n);
                          break;
                        }
                        s = s.next;
                      }
                    } else l = 10 === u.tag && u.type === t.type ? null : u.child;
                    if (null !== l) l.return = u;
                    else
                      for (l = u; null !== l; ) {
                        if (l === t) {
                          l = null;
                          break;
                        }
                        if (null !== (u = l.sibling)) {
                          (u.return = l.return), (l = u);
                          break;
                        }
                        l = l.return;
                      }
                    u = l;
                  }
              Di(e, t, o.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (o = t.type),
              (r = (a = t.pendingProps).children),
              ra(t, n),
              (r = r((o = oa(o, a.unstable_observedBits)))),
              (t.flags |= 1),
              Di(e, t, r, n),
              t.child
            );
          case 14:
            return (a = Go((o = t.type), t.pendingProps)), zi(e, t, o, (a = Go(o.type, a)), r, n);
          case 15:
            return Mi(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (o = t.pendingProps),
              (o = t.elementType === r ? o : Go(r, o)),
              null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (t.tag = 1),
              vo(r) ? ((e = !0), bo(t)) : (e = !1),
              ra(t, n),
              ga(t, r, o),
              ba(t, r, o, n),
              Wi(null, t, r, !0, e, n)
            );
          case 19:
            return tl(e, t, n);
          case 23:
          case 24:
            return Fi(e, t, n);
        }
        throw Error(i(156, t.tag));
      }),
        (tc.prototype.render = function (e) {
          Xu(e, this._internalRoot, null, null);
        }),
        (tc.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          Xu(null, e, null, function () {
            t[Xr] = null;
          });
        }),
        (tt = function (e) {
          13 === e.tag && (fu(e, 4, cu()), ec(e, 4));
        }),
        (nt = function (e) {
          13 === e.tag && (fu(e, 67108864, cu()), ec(e, 67108864));
        }),
        (rt = function (e) {
          if (13 === e.tag) {
            var t = cu(),
              n = su(e);
            fu(e, n, t), ec(e, n);
          }
        }),
        (ot = function (e, t) {
          return t();
        }),
        (Oe = function (e, t, n) {
          switch (t) {
            case 'input':
              if ((ne(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var o = no(r);
                    if (!o) throw Error(i(90));
                    X(r), ne(r, o);
                  }
                }
              }
              break;
            case 'textarea':
              ce(e, n);
              break;
            case 'select':
              null != (t = n.value) && ie(e, !!n.multiple, t, !1);
          }
        }),
        (je = gu),
        (Le = function (e, t, n, r, o) {
          var a = Tl;
          Tl |= 4;
          try {
            return Ho(98, e.bind(null, t, n, r, o));
          } finally {
            0 === (Tl = a) && (Hl(), Ko());
          }
        }),
        (De = function () {
          0 === (49 & Tl) &&
            ((function () {
              if (null !== tu) {
                var e = tu;
                (tu = null),
                  e.forEach(function (e) {
                    (e.expiredLanes |= 24 & e.pendingLanes), pu(e, Bo());
                  });
              }
              Ko();
            })(),
            Ru());
        }),
        (Ie = function (e, t) {
          var n = Tl;
          Tl |= 2;
          try {
            return e(t);
          } finally {
            0 === (Tl = n) && (Hl(), Ko());
          }
        });
      var ac = { Events: [eo, to, no, Ne, Re, Ru, { current: !1 }] },
        ic = { findFiberByHostInstance: Zr, bundleType: 0, version: '17.0.2', rendererPackageName: 'react-dom' },
        lc = {
          bundleType: ic.bundleType,
          version: ic.version,
          rendererPackageName: ic.rendererPackageName,
          rendererConfig: ic.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: k.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Ze(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            ic.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        };
      if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var uc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!uc.isDisabled && uc.supportsFiber)
          try {
            (ko = uc.inject(lc)), (So = uc);
          } catch (me) {}
      }
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ac),
        (t.createPortal = oc),
        (t.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternals;
          if (void 0 === t) {
            if ('function' === typeof e.render) throw Error(i(188));
            throw Error(i(268, Object.keys(e)));
          }
          return (e = null === (e = Ze(t)) ? null : e.stateNode);
        }),
        (t.flushSync = function (e, t) {
          var n = Tl;
          if (0 !== (48 & n)) return e(t);
          Tl |= 1;
          try {
            if (e) return Ho(99, e.bind(null, t));
          } finally {
            (Tl = n), Ko();
          }
        }),
        (t.hydrate = function (e, t, n) {
          if (!nc(t)) throw Error(i(200));
          return rc(null, e, t, !0, n);
        }),
        (t.render = function (e, t, n) {
          if (!nc(t)) throw Error(i(200));
          return rc(null, e, t, !1, n);
        }),
        (t.unmountComponentAtNode = function (e) {
          if (!nc(e)) throw Error(i(40));
          return (
            !!e._reactRootContainer &&
            (yu(function () {
              rc(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[Xr] = null);
              });
            }),
            !0)
          );
        }),
        (t.unstable_batchedUpdates = gu),
        (t.unstable_createPortal = function (e, t) {
          return oc(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
        }),
        (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!nc(n)) throw Error(i(200));
          if (null == e || void 0 === e._reactInternals) throw Error(i(38));
          return rc(e, t, n, !1, r);
        }),
        (t.version = '17.0.2');
    },
    function (e, t, n) {
      'use strict';
      e.exports = n(38);
    },
    function (e, t, n) {
      'use strict';
      var r, o, a, i;
      if ('object' === typeof performance && 'function' === typeof performance.now) {
        var l = performance;
        t.unstable_now = function () {
          return l.now();
        };
      } else {
        var u = Date,
          c = u.now();
        t.unstable_now = function () {
          return u.now() - c;
        };
      }
      if ('undefined' === typeof window || 'function' !== typeof MessageChannel) {
        var s = null,
          f = null,
          d = function e() {
            if (null !== s)
              try {
                var n = t.unstable_now();
                s(!0, n), (s = null);
              } catch (r) {
                throw (setTimeout(e, 0), r);
              }
          };
        (r = function (e) {
          null !== s ? setTimeout(r, 0, e) : ((s = e), setTimeout(d, 0));
        }),
          (o = function (e, t) {
            f = setTimeout(e, t);
          }),
          (a = function () {
            clearTimeout(f);
          }),
          (t.unstable_shouldYield = function () {
            return !1;
          }),
          (i = t.unstable_forceFrameRate = function () {});
      } else {
        var p = window.setTimeout,
          h = window.clearTimeout;
        if ('undefined' !== typeof console) {
          var v = window.cancelAnimationFrame;
          'function' !== typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
            'function' !== typeof v &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              );
        }
        var m = !1,
          g = null,
          y = -1,
          b = 5,
          w = 0;
        (t.unstable_shouldYield = function () {
          return t.unstable_now() >= w;
        }),
          (i = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (b = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var k = new MessageChannel(),
          S = k.port2;
        (k.port1.onmessage = function () {
          if (null !== g) {
            var e = t.unstable_now();
            w = e + b;
            try {
              g(!0, e) ? S.postMessage(null) : ((m = !1), (g = null));
            } catch (n) {
              throw (S.postMessage(null), n);
            }
          } else m = !1;
        }),
          (r = function (e) {
            (g = e), m || ((m = !0), S.postMessage(null));
          }),
          (o = function (e, n) {
            y = p(function () {
              e(t.unstable_now());
            }, n);
          }),
          (a = function () {
            h(y), (y = -1);
          });
      }
      function E(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = (n - 1) >>> 1,
            o = e[r];
          if (!(void 0 !== o && 0 < _(o, t))) break e;
          (e[r] = t), (e[n] = o), (n = r);
        }
      }
      function C(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function x(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length; r < o; ) {
              var a = 2 * (r + 1) - 1,
                i = e[a],
                l = a + 1,
                u = e[l];
              if (void 0 !== i && 0 > _(i, n))
                void 0 !== u && 0 > _(u, i) ? ((e[r] = u), (e[l] = n), (r = l)) : ((e[r] = i), (e[a] = n), (r = a));
              else {
                if (!(void 0 !== u && 0 > _(u, n))) break e;
                (e[r] = u), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        return null;
      }
      function _(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var O = [],
        P = [],
        T = 1,
        A = null,
        N = 3,
        R = !1,
        j = !1,
        L = !1;
      function D(e) {
        for (var t = C(P); null !== t; ) {
          if (null === t.callback) x(P);
          else {
            if (!(t.startTime <= e)) break;
            x(P), (t.sortIndex = t.expirationTime), E(O, t);
          }
          t = C(P);
        }
      }
      function I(e) {
        if (((L = !1), D(e), !j))
          if (null !== C(O)) (j = !0), r(z);
          else {
            var t = C(P);
            null !== t && o(I, t.startTime - e);
          }
      }
      function z(e, n) {
        (j = !1), L && ((L = !1), a()), (R = !0);
        var r = N;
        try {
          for (D(n), A = C(O); null !== A && (!(A.expirationTime > n) || (e && !t.unstable_shouldYield())); ) {
            var i = A.callback;
            if ('function' === typeof i) {
              (A.callback = null), (N = A.priorityLevel);
              var l = i(A.expirationTime <= n);
              (n = t.unstable_now()), 'function' === typeof l ? (A.callback = l) : A === C(O) && x(O), D(n);
            } else x(O);
            A = C(O);
          }
          if (null !== A) var u = !0;
          else {
            var c = C(P);
            null !== c && o(I, c.startTime - n), (u = !1);
          }
          return u;
        } finally {
          (A = null), (N = r), (R = !1);
        }
      }
      var M = i;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          j || R || ((j = !0), r(z));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return N;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return C(O);
        }),
        (t.unstable_next = function (e) {
          switch (N) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = N;
          }
          var n = N;
          N = t;
          try {
            return e();
          } finally {
            N = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = M),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = N;
          N = e;
          try {
            return t();
          } finally {
            N = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, n, i) {
          var l = t.unstable_now();
          switch (
            ('object' === typeof i && null !== i
              ? (i = 'number' === typeof (i = i.delay) && 0 < i ? l + i : l)
              : (i = l),
            e)
          ) {
            case 1:
              var u = -1;
              break;
            case 2:
              u = 250;
              break;
            case 5:
              u = 1073741823;
              break;
            case 4:
              u = 1e4;
              break;
            default:
              u = 5e3;
          }
          return (
            (e = { id: T++, callback: n, priorityLevel: e, startTime: i, expirationTime: (u = i + u), sortIndex: -1 }),
            i > l
              ? ((e.sortIndex = i), E(P, e), null === C(O) && e === C(P) && (L ? a() : (L = !0), o(I, i - l)))
              : ((e.sortIndex = u), E(O, e), j || R || ((j = !0), r(z))),
            e
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = N;
          return function () {
            var n = N;
            N = t;
            try {
              return e.apply(this, arguments);
            } finally {
              N = n;
            }
          };
        });
    },
    function (e, t) {
      var n,
        r,
        o = (e.exports = {});
      function a() {
        throw new Error('setTimeout has not been defined');
      }
      function i() {
        throw new Error('clearTimeout has not been defined');
      }
      function l(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === a || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = 'function' === typeof setTimeout ? setTimeout : a;
        } catch (e) {
          n = a;
        }
        try {
          r = 'function' === typeof clearTimeout ? clearTimeout : i;
        } catch (e) {
          r = i;
        }
      })();
      var u,
        c = [],
        s = !1,
        f = -1;
      function d() {
        s && u && ((s = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && p());
      }
      function p() {
        if (!s) {
          var e = l(d);
          s = !0;
          for (var t = c.length; t; ) {
            for (u = c, c = []; ++f < t; ) u && u[f].run();
            (f = -1), (t = c.length);
          }
          (u = null),
            (s = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === i || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function v() {}
      (o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || s || l(p);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = 'browser'),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ''),
        (o.versions = {}),
        (o.on = v),
        (o.addListener = v),
        (o.once = v),
        (o.off = v),
        (o.removeListener = v),
        (o.removeAllListeners = v),
        (o.emit = v),
        (o.prependListener = v),
        (o.prependOnceListener = v),
        (o.listeners = function (e) {
          return [];
        }),
        (o.binding = function (e) {
          throw new Error('process.binding is not supported');
        }),
        (o.cwd = function () {
          return '/';
        }),
        (o.chdir = function (e) {
          throw new Error('process.chdir is not supported');
        }),
        (o.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      'use strict';
      var r = 'function' === typeof Symbol && Symbol.for,
        o = r ? Symbol.for('react.element') : 60103,
        a = r ? Symbol.for('react.portal') : 60106,
        i = r ? Symbol.for('react.fragment') : 60107,
        l = r ? Symbol.for('react.strict_mode') : 60108,
        u = r ? Symbol.for('react.profiler') : 60114,
        c = r ? Symbol.for('react.provider') : 60109,
        s = r ? Symbol.for('react.context') : 60110,
        f = r ? Symbol.for('react.async_mode') : 60111,
        d = r ? Symbol.for('react.concurrent_mode') : 60111,
        p = r ? Symbol.for('react.forward_ref') : 60112,
        h = r ? Symbol.for('react.suspense') : 60113,
        v = r ? Symbol.for('react.suspense_list') : 60120,
        m = r ? Symbol.for('react.memo') : 60115,
        g = r ? Symbol.for('react.lazy') : 60116,
        y = r ? Symbol.for('react.block') : 60121,
        b = r ? Symbol.for('react.fundamental') : 60117,
        w = r ? Symbol.for('react.responder') : 60118,
        k = r ? Symbol.for('react.scope') : 60119;
      function S(e) {
        if ('object' === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case o:
              switch ((e = e.type)) {
                case f:
                case d:
                case i:
                case u:
                case l:
                case h:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case p:
                    case g:
                    case m:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case a:
              return t;
          }
        }
      }
      function E(e) {
        return S(e) === d;
      }
      (t.AsyncMode = f),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = s),
        (t.ContextProvider = c),
        (t.Element = o),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = g),
        (t.Memo = m),
        (t.Portal = a),
        (t.Profiler = u),
        (t.StrictMode = l),
        (t.Suspense = h),
        (t.isAsyncMode = function (e) {
          return E(e) || S(e) === f;
        }),
        (t.isConcurrentMode = E),
        (t.isContextConsumer = function (e) {
          return S(e) === s;
        }),
        (t.isContextProvider = function (e) {
          return S(e) === c;
        }),
        (t.isElement = function (e) {
          return 'object' === typeof e && null !== e && e.$$typeof === o;
        }),
        (t.isForwardRef = function (e) {
          return S(e) === p;
        }),
        (t.isFragment = function (e) {
          return S(e) === i;
        }),
        (t.isLazy = function (e) {
          return S(e) === g;
        }),
        (t.isMemo = function (e) {
          return S(e) === m;
        }),
        (t.isPortal = function (e) {
          return S(e) === a;
        }),
        (t.isProfiler = function (e) {
          return S(e) === u;
        }),
        (t.isStrictMode = function (e) {
          return S(e) === l;
        }),
        (t.isSuspense = function (e) {
          return S(e) === h;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' === typeof e ||
            'function' === typeof e ||
            e === i ||
            e === d ||
            e === u ||
            e === l ||
            e === h ||
            e === v ||
            ('object' === typeof e &&
              null !== e &&
              (e.$$typeof === g ||
                e.$$typeof === m ||
                e.$$typeof === c ||
                e.$$typeof === s ||
                e.$$typeof === p ||
                e.$$typeof === b ||
                e.$$typeof === w ||
                e.$$typeof === k ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = S);
    },
    function (e, t, n) {
      'use strict';
      n(21);
      var r = n(1),
        o = 60103;
      if (((t.Fragment = 60107), 'function' === typeof Symbol && Symbol.for)) {
        var a = Symbol.for;
        (o = a('react.element')), (t.Fragment = a('react.fragment'));
      }
      var i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = Object.prototype.hasOwnProperty,
        u = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(e, t, n) {
        var r,
          a = {},
          c = null,
          s = null;
        for (r in (void 0 !== n && (c = '' + n),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (s = t.ref),
        t))
          l.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
        return { $$typeof: o, type: e, key: c, ref: s, props: a, _owner: i.current };
      }
      (t.jsx = c), (t.jsxs = c);
    },
    function (e, t, n) {
      'use strict';
      var r = n(43);
      function o() {}
      function a() {}
      (a.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, a, i) {
            if (i !== r) {
              var l = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((l.name = 'Invariant Violation'), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    function (e, t, n) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (r) {
        'object' === typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t) {
      e.exports =
        Array.isArray ||
        function (e) {
          return '[object Array]' == Object.prototype.toString.call(e);
        };
    },
    ,
    function (e, t) {
      function n(t) {
        return (
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? ((e.exports = n = function (e) {
                return typeof e;
              }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0))
            : ((e.exports = n = function (e) {
                return e && 'function' === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0)),
          n(t)
        );
      }
      (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
    },
    function (e, t) {
      (e.exports = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    function (e, t, n) {
      'use strict';
      var r = n(22),
        o = n(12);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = o(n(23)),
        i = r(n(1)),
        l = (o(n(11)), o(n(50))),
        u = r(n(2)),
        c = o(n(27)),
        s = o(n(29)),
        f = n(51),
        d = n(17),
        p = 'guesses',
        h = {
          columnBreakpoint: '768px',
          gridBackground: 'rgb(0,0,0)',
          cellBackground: 'rgb(255,255,255)',
          cellBorder: 'rgb(0,0,0)',
          textColor: 'rgb(0,0,0)',
          numberColor: 'rgba(0,0,0, 0.25)',
          focusBackground: 'rgb(255,255,0)',
          highlightBackground: 'rgb(255,255,204)',
        },
        v = u.default.div
          .attrs(function (e) {
            return { className: 'crossword' + (e.correct ? ' correct' : '') };
          })
          .withConfig({ displayName: 'Crossword__OuterWrapper', componentId: 'pjgvvu-0' })(
          [
            'margin:0;padding:0;border:0;display:flex;flex-direction:row;@media (max-width:',
            '){flex-direction:column;}',
          ],
          function (e) {
            return e.theme.columnBreakpoint;
          }
        ),
        m = u.default.div
          .attrs(function () {
            return { className: 'grid' };
          })
          .withConfig({ displayName: 'Crossword__GridWrapper', componentId: 'pjgvvu-1' })([
          'min-width:20rem;max-width:60rem;width:auto;flex:2 1 50%;',
        ]),
        g = u.default.div
          .attrs(function () {
            return { className: 'clues' };
          })
          .withConfig({ displayName: 'Crossword__CluesWrapper', componentId: 'pjgvvu-2' })(
          [
            'padding:0 1em;flex:1 2 25%;@media (max-width:',
            '){margin-top:2em;}.direction{margin-bottom:2em;.header{margin-top:0;margin-bottom:0.5em;}div{margin-top:0.5em;}}',
          ],
          function (e) {
            return e.theme.columnBreakpoint;
          }
        ),
        y = i.default.forwardRef(function (e, t) {
          var n = e.data,
            r = e.onCorrect,
            o = e.onLoadedCorrect,
            y = e.onCrosswordCorrect,
            b = e.onCellChange,
            w = e.useStorage,
            k = e.theme,
            S = (0, i.useState)(null),
            E = S[0],
            C = S[1],
            x = (0, i.useState)(null),
            _ = x[0],
            O = x[1],
            P = (0, i.useState)(null),
            T = P[0],
            A = P[1],
            N = (0, i.useState)(!1),
            R = N[0],
            j = N[1],
            L = (0, i.useState)(0),
            D = L[0],
            I = L[1],
            z = (0, i.useState)(0),
            M = z[0],
            F = z[1],
            U = (0, i.useState)('across'),
            B = U[0],
            $ = U[1],
            W = (0, i.useState)('1'),
            H = W[0],
            V = W[1],
            K = (0, i.useState)(null),
            Q = K[0],
            q = K[1],
            G = (0, i.useState)([]),
            Y = G[0],
            X = G[1],
            J = (0, i.useState)(!1),
            Z = J[0],
            ee = J[1],
            te = (0, i.useRef)(),
            ne = (0, i.useContext)(u.ThemeContext),
            re = (0, i.useCallback)(
              function (e, t) {
                return e >= 0 && e < E && t >= 0 && t < E ? _[e][t] : { row: e, col: t, used: !1, outOfBounds: !0 };
              },
              [E, _]
            ),
            oe = (0, i.useCallback)(
              function (e, t, n) {
                var r = re(e, t);
                r.used &&
                  r.guess !== n &&
                  (O(
                    (0, l.default)(function (r) {
                      r[e][t].guess = n;
                    })
                  ),
                  X(
                    (0, l.default)(function (n) {
                      n.push({ row: e, col: t });
                    })
                  ),
                  b && b(e, t, n));
              },
              [re, b]
            ),
            ae = (0, i.useCallback)(
              function (e, t, n) {
                r && r(e, t, n);
              },
              [r]
            ),
            ie = (0, i.useCallback)(
              function (e, t) {
                var r = re(e, t);
                f.bothDirections.forEach(function (e) {
                  var t = (0, f.isAcross)(e),
                    o = r[e];
                  if (o) {
                    var a = n[e][o],
                      i = r.guess === r.answer;
                    if (i)
                      for (var u = 0; u < a.answer.length; u++) {
                        if (re(a.row + (t ? 0 : u), a.col + (t ? u : 0)).guess !== a.answer[u]) {
                          i = !1;
                          break;
                        }
                      }
                    A(
                      (0, l.default)(function (t) {
                        t[e].find(function (e) {
                          return e.number === o;
                        }).correct = i;
                      })
                    ),
                      i && ae(e, o, a.answer);
                  }
                });
              },
              [re]
            );
          (0, i.useEffect)(
            function () {
              0 !== Y.length &&
                (Y.forEach(function (e) {
                  var t = e.row,
                    n = e.col;
                  return ie(t, n);
                }),
                X([]));
            },
            [Y, ie]
          ),
            (0, i.useEffect)(
              function () {
                ee(
                  T &&
                    f.bothDirections.every(function (e) {
                      return T[e].every(function (e) {
                        return e.correct;
                      });
                    })
                );
              },
              [T]
            ),
            (0, i.useEffect)(
              function () {
                y && y(Z);
              },
              [Z, y]
            );
          var le = (0, i.useCallback)(function () {
              te.current && (te.current.focus(), j(!0));
            }, []),
            ue = (0, i.useCallback)(
              function (e, t, n) {
                var r = null != n ? n : B,
                  o = re(e, t);
                return !!o.used && (o[r] || (r = (0, f.otherDirection)(r)), I(e), F(t), $(r), V(o[r]), o);
              },
              [re]
            ),
            ce = (0, i.useCallback)(
              function (e, t) {
                var n;
                return 0 !== e && 0 === t ? (n = 'down') : 0 === e && 0 !== t && (n = 'across'), ue(D + e, M + t, n);
              },
              [D, M, ue]
            ),
            se = (0, i.useCallback)(
              function () {
                var e = (0, f.isAcross)(B);
                ce(e ? 0 : 1, e ? 1 : 0);
              },
              [B, ce]
            ),
            fe = (0, i.useCallback)(
              function () {
                var e = (0, f.isAcross)(B);
                ce(e ? 0 : -1, e ? -1 : 0);
              },
              [B, ce]
            ),
            de = (0, i.useCallback)(
              function (e) {
                oe(D, M, e.toUpperCase()), se();
              },
              [D, M, oe, se]
            ),
            pe = (0, i.useCallback)(
              function (e) {
                if (!(e.ctrlKey || e.altKey || e.metaKey)) {
                  var t = !0,
                    r = e.key;
                  switch (r) {
                    case 'ArrowUp':
                      ce(-1, 0);
                      break;
                    case 'ArrowDown':
                      ce(1, 0);
                      break;
                    case 'ArrowLeft':
                      ce(0, -1);
                      break;
                    case 'ArrowRight':
                      ce(0, 1);
                      break;
                    case ' ':
                    case 'Tab':
                      var o = (0, f.otherDirection)(B),
                        a = re(D, M);
                      a[o] && ($(o), V(a[o]));
                      break;
                    case 'Backspace':
                    case 'Delete':
                      oe(D, M, ''), 'Backspace' === r && fe();
                      break;
                    case 'Home':
                    case 'End':
                      var i = n[B][H],
                        l = i.answer.length,
                        u = i.row,
                        c = i.col;
                      if ('End' === r) (0, f.isAcross)(B) ? (c += l - 1) : (u += l - 1);
                      ue(u, c);
                      break;
                    default:
                      if (1 !== r.length) {
                        t = !1;
                        break;
                      }
                      de(r);
                  }
                  t && e.preventDefault();
                }
              },
              [n, D, M, B, H, re, oe, ce]
            ),
            he = (0, i.useCallback)(function (e) {
              e.preventDefault(), q(e.target.value);
            }, []);
          (0, i.useEffect)(
            function () {
              Q && (de(Q[0]), q(1 === Q.length ? null : Q.substring(1)));
            },
            [Q, de]
          ),
            (0, i.useEffect)(
              function () {
                var e,
                  t = (0, f.createGridData)(n),
                  r = t.size,
                  a = t.gridData,
                  i = t.clues;
                w &&
                  ((0, f.loadGuesses)(a, p),
                  (e = (0, f.findCorrectAnswers)(n, a)).forEach(function (e) {
                    var t = e[0],
                      n = e[1];
                    i[t].find(function (e) {
                      return e.number === n;
                    }).correct = !0;
                  })),
                  C(r),
                  O(a),
                  A(i),
                  I(0),
                  F(0),
                  $('across'),
                  V('1'),
                  q(null),
                  e && e.length > 0 && o && o(e);
              },
              [n, o, w]
            ),
            (0, i.useEffect)(
              function () {
                null !== _ && w && (0, f.saveGuesses)(_, p);
              },
              [_, w]
            );
          var ve = (0, i.useCallback)(
              function (e) {
                var t = e.row,
                  n = e.col,
                  r = (0, f.otherDirection)(B);
                I(t), F(n);
                var o = B;
                (!e[B] || (R && t === D && n === M && e[r])) && ($(r), (o = r)), V(e[o]), le();
              },
              [R, D, M, B, le]
            ),
            me = (0, i.useCallback)(
              function () {
                var e = (0, f.otherDirection)(B),
                  t = re(D, M),
                  n = B;
                R && t[e] && ($(e), (n = e)), V(t[n]), le();
              },
              [B, D, M, re, le]
            ),
            ge = (0, i.useCallback)(
              function (e, t) {
                var r = n[e][t];
                ue(r.row, r.col, e), le();
              },
              [n, ue, le]
            );
          (0, i.useImperativeHandle)(
            t,
            function () {
              return {
                focus: function () {
                  le();
                },
                reset: function () {
                  O(
                    (0, l.default)(function (e) {
                      e.forEach(function (e) {
                        e.forEach(function (e) {
                          e.used && (e.guess = '');
                        });
                      });
                    })
                  ),
                    A(
                      (0, l.default)(function (e) {
                        f.bothDirections.forEach(function (t) {
                          e[t].forEach(function (e) {
                            delete e.correct;
                          });
                        });
                      })
                    ),
                    w && (0, f.clearGuesses)(p);
                },
                fillAllAnswers: function () {
                  if (
                    (O(
                      (0, l.default)(function (e) {
                        e.forEach(function (e) {
                          e.forEach(function (e) {
                            e.used && (e.guess = e.answer);
                          });
                        });
                      })
                    ),
                    A(
                      (0, l.default)(function (e) {
                        f.bothDirections.forEach(function (t) {
                          e[t].forEach(function (e) {
                            e.correct = !0;
                          });
                        });
                      })
                    ),
                    o)
                  ) {
                    var e = [];
                    f.bothDirections.forEach(function (t) {
                      Object.entries(n[t]).forEach(function (n) {
                        var r = n[0],
                          o = n[1];
                        e.push([t, r, o.answer]);
                      });
                    }),
                      o(e);
                  }
                },
                isCrosswordCorrect: function () {
                  return Z;
                },
              };
            },
            [n, o, w, le, Z]
          );
          var ye = 100 / E,
            be = ye - 0.25,
            we = 0.7 * be,
            ke = (0, a.default)({}, h, ne, k),
            Se = [];
          return (
            _ &&
              _.forEach(function (e, t) {
                e.forEach(function (e, n) {
                  e.used &&
                    Se.push(
                      i.default.createElement(c.default, {
                        key: 'R' + t + 'C' + n,
                        cellData: e,
                        focus: R && t === D && n === M,
                        highlight: R && H && e[B] === H,
                        onClick: ve,
                      })
                    );
                });
              }),
            i.default.createElement(
              d.CrosswordContext.Provider,
              { value: { focused: R, selectedDirection: B, selectedNumber: H, onClueSelected: ge } },
              i.default.createElement(
                d.CrosswordSizeContext.Provider,
                { value: { cellSize: ye, cellPadding: 0.125, cellInner: be, cellHalf: ye / 2, fontSize: we } },
                i.default.createElement(
                  u.ThemeProvider,
                  { theme: ke },
                  i.default.createElement(
                    v,
                    { correct: Z },
                    i.default.createElement(
                      m,
                      null,
                      i.default.createElement(
                        'div',
                        { style: { margin: 0, padding: 0, position: 'relative' } },
                        i.default.createElement(
                          'svg',
                          { viewBox: '0 0 100 100' },
                          i.default.createElement('rect', {
                            x: 0,
                            y: 0,
                            width: 100,
                            height: 100,
                            fill: ke.gridBackground,
                          }),
                          Se
                        ),
                        i.default.createElement('input', {
                          ref: te,
                          'aria-label': 'crossword-input',
                          type: 'text',
                          onClick: me,
                          onKeyDown: pe,
                          onChange: he,
                          value: '',
                          autoComplete: 'off',
                          spellCheck: 'false',
                          autoCorrect: 'off',
                          style: {
                            position: 'absolute',
                            top: 'calc(' + D * ye * 0.995 + '% + 2px)',
                            left: 'calc(' + M * ye + '% + 2px)',
                            width: 'calc(' + ye + '% - 4px)',
                            height: 'calc(' + ye + '% - 4px)',
                            fontSize: 6 * we + 'px',
                            textAlign: 'center',
                            textAnchor: 'middle',
                            backgroundColor: 'transparent',
                            caretColor: 'transparent',
                            margin: 0,
                            padding: 0,
                            border: 0,
                            cursor: 'default',
                          },
                        })
                      )
                    ),
                    i.default.createElement(
                      g,
                      null,
                      T &&
                        f.bothDirections.map(function (e) {
                          return i.default.createElement(s.default, { key: e, direction: e, clues: T[e] });
                        })
                    )
                  )
                )
              )
            )
          );
        });
      y.displayName = 'Crossword';
      y.defaultProps = {
        theme: null,
        useStorage: !0,
        onCorrect: null,
        onLoadedCorrect: null,
        onCrosswordCorrect: null,
        onCellChange: null,
      };
      var b = y;
      t.default = b;
    },
    function (e, t, n) {
      'use strict';
      function r(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        throw Error(
          '[Immer] minified error nr: ' +
            e +
            (n.length
              ? ' ' +
                n
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(',')
              : '') +
            '. Find the full error at: https://bit.ly/3cXEKWf'
        );
      }
      function o(e) {
        return !!e && !!e[Z];
      }
      function a(e) {
        return (
          !!e &&
          ((function (e) {
            if (!e || 'object' != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            return !t || t === Object.prototype;
          })(e) ||
            Array.isArray(e) ||
            !!e[J] ||
            !!e.constructor[J] ||
            p(e) ||
            h(e))
        );
      }
      function i(e) {
        return o(e) || r(23, e), e[Z].t;
      }
      function l(e, t, n) {
        void 0 === n && (n = !1),
          0 === u(e)
            ? (n ? Object.keys : te)(e).forEach(function (r) {
                (n && 'symbol' == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                return t(r, n, e);
              });
      }
      function u(e) {
        var t = e[Z];
        return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : p(e) ? 2 : h(e) ? 3 : 0;
      }
      function c(e, t) {
        return 2 === u(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
      }
      function s(e, t) {
        return 2 === u(e) ? e.get(t) : e[t];
      }
      function f(e, t, n) {
        var r = u(e);
        2 === r ? e.set(t, n) : 3 === r ? (e.delete(t), e.add(n)) : (e[t] = n);
      }
      function d(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function p(e) {
        return q && e instanceof Map;
      }
      function h(e) {
        return G && e instanceof Set;
      }
      function v(e) {
        return e.o || e.t;
      }
      function m(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = ne(e);
        delete t[Z];
        for (var n = te(t), r = 0; r < n.length; r++) {
          var o = n[r],
            a = t[o];
          !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) && (t[o] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: e[o] });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function g(e, t) {
        b(e) ||
          o(e) ||
          !a(e) ||
          (u(e) > 1 && (e.set = e.add = e.clear = e.delete = y),
          Object.freeze(e),
          t &&
            l(
              e,
              function (e, t) {
                return g(t, !0);
              },
              !0
            ));
      }
      function y() {
        r(2);
      }
      function b(e) {
        return null == e || 'object' != typeof e || Object.isFrozen(e);
      }
      function w(e) {
        var t = re[e];
        return t || r(18, e), t;
      }
      function k(e, t) {
        re[e] || (re[e] = t);
      }
      function S() {
        return K;
      }
      function E(e, t) {
        t && (w('Patches'), (e.u = []), (e.s = []), (e.v = t));
      }
      function C(e) {
        x(e), e.p.forEach(O), (e.p = null);
      }
      function x(e) {
        e === K && (K = e.l);
      }
      function _(e) {
        return (K = { p: [], l: K, h: e, m: !0, _: 0 });
      }
      function O(e) {
        var t = e[Z];
        0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
      }
      function P(e, t) {
        t._ = t.p.length;
        var n = t.p[0],
          o = void 0 !== e && e !== n;
        return (
          t.h.O || w('ES5').S(t, e, o),
          o
            ? (n[Z].P && (C(t), r(4)),
              a(e) && ((e = T(t, e)), t.l || N(t, e)),
              t.u && w('Patches').M(n[Z], e, t.u, t.s))
            : (e = T(t, n, [])),
          C(t),
          t.u && t.v(t.u, t.s),
          e !== X ? e : void 0
        );
      }
      function T(e, t, n) {
        if (b(t)) return t;
        var r = t[Z];
        if (!r)
          return (
            l(
              t,
              function (o, a) {
                return A(e, r, t, o, a, n);
              },
              !0
            ),
            t
          );
        if (r.A !== e) return t;
        if (!r.P) return N(e, r.t, !0), r.t;
        if (!r.I) {
          (r.I = !0), r.A._--;
          var o = 4 === r.i || 5 === r.i ? (r.o = m(r.k)) : r.o;
          l(3 === r.i ? new Set(o) : o, function (t, a) {
            return A(e, r, o, t, a, n);
          }),
            N(e, o, !1),
            n && e.u && w('Patches').R(r, n, e.u, e.s);
        }
        return r.o;
      }
      function A(e, t, n, r, i, l) {
        if (o(i)) {
          var u = T(e, i, l && t && 3 !== t.i && !c(t.D, r) ? l.concat(r) : void 0);
          if ((f(n, r, u), !o(u))) return;
          e.m = !1;
        }
        if (a(i) && !b(i)) {
          if (!e.h.N && e._ < 1) return;
          T(e, i), (t && t.A.l) || N(e, i);
        }
      }
      function N(e, t, n) {
        void 0 === n && (n = !1), e.h.N && e.m && g(t, n);
      }
      function R(e, t) {
        var n = e[Z];
        return (n ? v(n) : e)[t];
      }
      function j(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
          }
      }
      function L(e) {
        e.P || ((e.P = !0), e.l && L(e.l));
      }
      function D(e) {
        e.o || (e.o = m(e.t));
      }
      function I(e, t, n) {
        var r = p(t)
          ? w('MapSet').T(t, n)
          : h(t)
          ? w('MapSet').F(t, n)
          : e.O
          ? (function (e, t) {
              var n = Array.isArray(e),
                r = {
                  i: n ? 1 : 0,
                  A: t ? t.A : S(),
                  P: !1,
                  I: !1,
                  D: {},
                  l: t,
                  t: e,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                },
                o = r,
                a = oe;
              n && ((o = [r]), (a = ae));
              var i = Proxy.revocable(o, a),
                l = i.revoke,
                u = i.proxy;
              return (r.k = u), (r.j = l), u;
            })(t, n)
          : w('ES5').J(t, n);
        return (n ? n.A : S()).p.push(r), r;
      }
      function z(e) {
        return (
          o(e) || r(22, e),
          (function e(t) {
            if (!a(t)) return t;
            var n,
              r = t[Z],
              o = u(t);
            if (r) {
              if (!r.P && (r.i < 4 || !w('ES5').K(r))) return r.t;
              (r.I = !0), (n = M(t, o)), (r.I = !1);
            } else n = M(t, o);
            return (
              l(n, function (t, o) {
                (r && s(r.t, t) === o) || f(n, t, e(o));
              }),
              3 === o ? new Set(n) : n
            );
          })(e)
        );
      }
      function M(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return m(e);
      }
      function F() {
        function e(e, t) {
          var n = a[e];
          return (
            n
              ? (n.enumerable = t)
              : (a[e] = n = {
                  configurable: !0,
                  enumerable: t,
                  get: function () {
                    var t = this[Z];
                    return oe.get(t, e);
                  },
                  set: function (t) {
                    var n = this[Z];
                    oe.set(n, e, t);
                  },
                }),
            n
          );
        }
        function t(e) {
          for (var t = e.length - 1; t >= 0; t--) {
            var o = e[t][Z];
            if (!o.P)
              switch (o.i) {
                case 5:
                  r(o) && L(o);
                  break;
                case 4:
                  n(o) && L(o);
              }
          }
        }
        function n(e) {
          for (var t = e.t, n = e.k, r = te(n), o = r.length - 1; o >= 0; o--) {
            var a = r[o];
            if (a !== Z) {
              var i = t[a];
              if (void 0 === i && !c(t, a)) return !0;
              var l = n[a],
                u = l && l[Z];
              if (u ? u.t !== i : !d(l, i)) return !0;
            }
          }
          var s = !!t[Z];
          return r.length !== te(t).length + (s ? 0 : 1);
        }
        function r(e) {
          var t = e.k;
          if (t.length !== e.t.length) return !0;
          var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
          return !(!n || n.get);
        }
        var a = {};
        k('ES5', {
          J: function (t, n) {
            var r = Array.isArray(t),
              o = (function (t, n) {
                if (t) {
                  for (var r = Array(n.length), o = 0; o < n.length; o++) Object.defineProperty(r, '' + o, e(o, !0));
                  return r;
                }
                var a = ne(n);
                delete a[Z];
                for (var i = te(a), l = 0; l < i.length; l++) {
                  var u = i[l];
                  a[u] = e(u, t || !!a[u].enumerable);
                }
                return Object.create(Object.getPrototypeOf(n), a);
              })(r, t),
              a = { i: r ? 5 : 4, A: n ? n.A : S(), P: !1, I: !1, D: {}, l: n, t: t, k: o, o: null, g: !1, C: !1 };
            return Object.defineProperty(o, Z, { value: a, writable: !0 }), o;
          },
          S: function (e, n, a) {
            a
              ? o(n) && n[Z].A === e && t(e.p)
              : (e.u &&
                  (function e(t) {
                    if (t && 'object' == typeof t) {
                      var n = t[Z];
                      if (n) {
                        var o = n.t,
                          a = n.k,
                          i = n.D,
                          u = n.i;
                        if (4 === u)
                          l(a, function (t) {
                            t !== Z && (void 0 !== o[t] || c(o, t) ? i[t] || e(a[t]) : ((i[t] = !0), L(n)));
                          }),
                            l(o, function (e) {
                              void 0 !== a[e] || c(a, e) || ((i[e] = !1), L(n));
                            });
                        else if (5 === u) {
                          if ((r(n) && (L(n), (i.length = !0)), a.length < o.length))
                            for (var s = a.length; s < o.length; s++) i[s] = !1;
                          else for (var f = o.length; f < a.length; f++) i[f] = !0;
                          for (var d = Math.min(a.length, o.length), p = 0; p < d; p++) void 0 === i[p] && e(a[p]);
                        }
                      }
                    }
                  })(e.p[0]),
                t(e.p));
          },
          K: function (e) {
            return 4 === e.i ? n(e) : r(e);
          },
        });
      }
      function U() {
        function e(t) {
          if (!a(t)) return t;
          if (Array.isArray(t)) return t.map(e);
          if (p(t))
            return new Map(
              Array.from(t.entries()).map(function (t) {
                return [t[0], e(t[1])];
              })
            );
          if (h(t)) return new Set(Array.from(t).map(e));
          var n = Object.create(Object.getPrototypeOf(t));
          for (var r in t) n[r] = e(t[r]);
          return n;
        }
        function t(t) {
          return o(t) ? e(t) : t;
        }
        var n = 'add';
        k('Patches', {
          $: function (t, o) {
            return (
              o.forEach(function (o) {
                for (var a = o.path, i = o.op, l = t, c = 0; c < a.length - 1; c++)
                  'object' != typeof (l = s(l, a[c])) && r(15, a.join('/'));
                var f = u(l),
                  d = e(o.value),
                  p = a[a.length - 1];
                switch (i) {
                  case 'replace':
                    switch (f) {
                      case 2:
                        return l.set(p, d);
                      case 3:
                        r(16);
                      default:
                        return (l[p] = d);
                    }
                  case n:
                    switch (f) {
                      case 1:
                        return l.splice(p, 0, d);
                      case 2:
                        return l.set(p, d);
                      case 3:
                        return l.add(d);
                      default:
                        return (l[p] = d);
                    }
                  case 'remove':
                    switch (f) {
                      case 1:
                        return l.splice(p, 1);
                      case 2:
                        return l.delete(p);
                      case 3:
                        return l.delete(o.value);
                      default:
                        return delete l[p];
                    }
                  default:
                    r(17, i);
                }
              }),
              t
            );
          },
          R: function (e, r, o, a) {
            switch (e.i) {
              case 0:
              case 4:
              case 2:
                return (function (e, r, o, a) {
                  var i = e.t,
                    u = e.o;
                  l(e.D, function (e, l) {
                    var f = s(i, e),
                      d = s(u, e),
                      p = l ? (c(i, e) ? 'replace' : n) : 'remove';
                    if (f !== d || 'replace' !== p) {
                      var h = r.concat(e);
                      o.push('remove' === p ? { op: p, path: h } : { op: p, path: h, value: d }),
                        a.push(
                          p === n
                            ? { op: 'remove', path: h }
                            : 'remove' === p
                            ? { op: n, path: h, value: t(f) }
                            : { op: 'replace', path: h, value: t(f) }
                        );
                    }
                  });
                })(e, r, o, a);
              case 5:
              case 1:
                return (function (e, r, o, a) {
                  var i = e.t,
                    l = e.D,
                    u = e.o;
                  if (u.length < i.length) {
                    var c = [u, i];
                    (i = c[0]), (u = c[1]);
                    var s = [a, o];
                    (o = s[0]), (a = s[1]);
                  }
                  for (var f = 0; f < i.length; f++)
                    if (l[f] && u[f] !== i[f]) {
                      var d = r.concat([f]);
                      o.push({ op: 'replace', path: d, value: t(u[f]) }),
                        a.push({ op: 'replace', path: d, value: t(i[f]) });
                    }
                  for (var p = i.length; p < u.length; p++) {
                    var h = r.concat([p]);
                    o.push({ op: n, path: h, value: t(u[p]) });
                  }
                  i.length < u.length && a.push({ op: 'replace', path: r.concat(['length']), value: i.length });
                })(e, r, o, a);
              case 3:
                return (function (e, t, r, o) {
                  var a = e.t,
                    i = e.o,
                    l = 0;
                  a.forEach(function (e) {
                    if (!i.has(e)) {
                      var a = t.concat([l]);
                      r.push({ op: 'remove', path: a, value: e }), o.unshift({ op: n, path: a, value: e });
                    }
                    l++;
                  }),
                    (l = 0),
                    i.forEach(function (e) {
                      if (!a.has(e)) {
                        var i = t.concat([l]);
                        r.push({ op: n, path: i, value: e }), o.unshift({ op: 'remove', path: i, value: e });
                      }
                      l++;
                    });
                })(e, r, o, a);
            }
          },
          M: function (e, t, n, r) {
            n.push({ op: 'replace', path: [], value: t }), r.push({ op: 'replace', path: [], value: e.t });
          },
        });
      }
      function B() {
        function e(e, t) {
          function n() {
            this.constructor = e;
          }
          i(e, t), (e.prototype = ((n.prototype = t.prototype), new n()));
        }
        function t(e) {
          e.o || ((e.D = new Map()), (e.o = new Map(e.t)));
        }
        function n(e) {
          e.o ||
            ((e.o = new Set()),
            e.t.forEach(function (t) {
              if (a(t)) {
                var n = I(e.A.h, t, e);
                e.p.set(t, n), e.o.add(n);
              } else e.o.add(t);
            }));
        }
        function o(e) {
          e.g && r(3, JSON.stringify(v(e)));
        }
        var i = function (e, t) {
            return (i =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(e, t);
          },
          u = (function () {
            function n(e, t) {
              return (
                (this[Z] = {
                  i: 2,
                  l: t,
                  A: t ? t.A : S(),
                  P: !1,
                  I: !1,
                  o: void 0,
                  D: void 0,
                  t: e,
                  k: this,
                  C: !1,
                  g: !1,
                }),
                this
              );
            }
            e(n, Map);
            var r = n.prototype;
            return (
              Object.defineProperty(r, 'size', {
                get: function () {
                  return v(this[Z]).size;
                },
              }),
              (r.has = function (e) {
                return v(this[Z]).has(e);
              }),
              (r.set = function (e, n) {
                var r = this[Z];
                return (
                  o(r),
                  (v(r).has(e) && v(r).get(e) === n) || (t(r), L(r), r.D.set(e, !0), r.o.set(e, n), r.D.set(e, !0)),
                  this
                );
              }),
              (r.delete = function (e) {
                if (!this.has(e)) return !1;
                var n = this[Z];
                return o(n), t(n), L(n), n.D.set(e, !1), n.o.delete(e), !0;
              }),
              (r.clear = function () {
                var e = this[Z];
                o(e),
                  v(e).size &&
                    (t(e),
                    L(e),
                    (e.D = new Map()),
                    l(e.t, function (t) {
                      e.D.set(t, !1);
                    }),
                    e.o.clear());
              }),
              (r.forEach = function (e, t) {
                var n = this;
                v(this[Z]).forEach(function (r, o) {
                  e.call(t, n.get(o), o, n);
                });
              }),
              (r.get = function (e) {
                var n = this[Z];
                o(n);
                var r = v(n).get(e);
                if (n.I || !a(r)) return r;
                if (r !== n.t.get(e)) return r;
                var i = I(n.A.h, r, n);
                return t(n), n.o.set(e, i), i;
              }),
              (r.keys = function () {
                return v(this[Z]).keys();
              }),
              (r.values = function () {
                var e,
                  t = this,
                  n = this.keys();
                return (
                  ((e = {})[ee] = function () {
                    return t.values();
                  }),
                  (e.next = function () {
                    var e = n.next();
                    return e.done ? e : { done: !1, value: t.get(e.value) };
                  }),
                  e
                );
              }),
              (r.entries = function () {
                var e,
                  t = this,
                  n = this.keys();
                return (
                  ((e = {})[ee] = function () {
                    return t.entries();
                  }),
                  (e.next = function () {
                    var e = n.next();
                    if (e.done) return e;
                    var r = t.get(e.value);
                    return { done: !1, value: [e.value, r] };
                  }),
                  e
                );
              }),
              (r[ee] = function () {
                return this.entries();
              }),
              n
            );
          })(),
          c = (function () {
            function t(e, t) {
              return (
                (this[Z] = {
                  i: 3,
                  l: t,
                  A: t ? t.A : S(),
                  P: !1,
                  I: !1,
                  o: void 0,
                  t: e,
                  k: this,
                  p: new Map(),
                  g: !1,
                  C: !1,
                }),
                this
              );
            }
            e(t, Set);
            var r = t.prototype;
            return (
              Object.defineProperty(r, 'size', {
                get: function () {
                  return v(this[Z]).size;
                },
              }),
              (r.has = function (e) {
                var t = this[Z];
                return o(t), t.o ? !!t.o.has(e) || !(!t.p.has(e) || !t.o.has(t.p.get(e))) : t.t.has(e);
              }),
              (r.add = function (e) {
                var t = this[Z];
                return o(t), this.has(e) || (n(t), L(t), t.o.add(e)), this;
              }),
              (r.delete = function (e) {
                if (!this.has(e)) return !1;
                var t = this[Z];
                return o(t), n(t), L(t), t.o.delete(e) || (!!t.p.has(e) && t.o.delete(t.p.get(e)));
              }),
              (r.clear = function () {
                var e = this[Z];
                o(e), v(e).size && (n(e), L(e), e.o.clear());
              }),
              (r.values = function () {
                var e = this[Z];
                return o(e), n(e), e.o.values();
              }),
              (r.entries = function () {
                var e = this[Z];
                return o(e), n(e), e.o.entries();
              }),
              (r.keys = function () {
                return this.values();
              }),
              (r[ee] = function () {
                return this.values();
              }),
              (r.forEach = function (e, t) {
                for (var n = this.values(), r = n.next(); !r.done; ) e.call(t, r.value, r.value, this), (r = n.next());
              }),
              t
            );
          })();
        k('MapSet', {
          T: function (e, t) {
            return new u(e, t);
          },
          F: function (e, t) {
            return new c(e, t);
          },
        });
      }
      function $() {
        F(), B(), U();
      }
      function W(e) {
        return e;
      }
      function H(e) {
        return e;
      }
      n.r(t),
        n.d(t, 'Immer', function () {
          return ie;
        }),
        n.d(t, 'applyPatches', function () {
          return de;
        }),
        n.d(t, 'castDraft', function () {
          return W;
        }),
        n.d(t, 'castImmutable', function () {
          return H;
        }),
        n.d(t, 'createDraft', function () {
          return pe;
        }),
        n.d(t, 'current', function () {
          return z;
        }),
        n.d(t, 'enableAllPlugins', function () {
          return $;
        }),
        n.d(t, 'enableES5', function () {
          return F;
        }),
        n.d(t, 'enableMapSet', function () {
          return B;
        }),
        n.d(t, 'enablePatches', function () {
          return U;
        }),
        n.d(t, 'finishDraft', function () {
          return he;
        }),
        n.d(t, 'immerable', function () {
          return J;
        }),
        n.d(t, 'isDraft', function () {
          return o;
        }),
        n.d(t, 'isDraftable', function () {
          return a;
        }),
        n.d(t, 'nothing', function () {
          return X;
        }),
        n.d(t, 'original', function () {
          return i;
        }),
        n.d(t, 'produce', function () {
          return ue;
        }),
        n.d(t, 'produceWithPatches', function () {
          return ce;
        }),
        n.d(t, 'setAutoFreeze', function () {
          return se;
        }),
        n.d(t, 'setUseProxies', function () {
          return fe;
        });
      var V,
        K,
        Q = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
        q = 'undefined' != typeof Map,
        G = 'undefined' != typeof Set,
        Y = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
        X = Q ? Symbol.for('immer-nothing') : (((V = {})['immer-nothing'] = !0), V),
        J = Q ? Symbol.for('immer-draftable') : '__$immer_draftable',
        Z = Q ? Symbol.for('immer-state') : '__$immer_state',
        ee = ('undefined' != typeof Symbol && Symbol.iterator) || '@@iterator',
        te =
          'undefined' != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
              }
            : Object.getOwnPropertyNames,
        ne =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              te(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n);
              }),
              t
            );
          },
        re = {},
        oe = {
          get: function (e, t) {
            if (t === Z) return e;
            var n = v(e);
            if (!c(n, t))
              return (function (e, t, n) {
                var r,
                  o = j(t, n);
                return o
                  ? 'value' in o
                    ? o.value
                    : null === (r = o.get) || void 0 === r
                    ? void 0
                    : r.call(e.k)
                  : void 0;
              })(e, n, t);
            var r = n[t];
            return e.I || !a(r) ? r : r === R(e.t, t) ? (D(e), (e.o[t] = I(e.A.h, r, e))) : r;
          },
          has: function (e, t) {
            return t in v(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(v(e));
          },
          set: function (e, t, n) {
            var r = j(v(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
              var o = R(v(e), t),
                a = null == o ? void 0 : o[Z];
              if (a && a.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
              if (d(n, o) && (void 0 !== n || c(e.t, t))) return !0;
              D(e), L(e);
            }
            return (e.o[t] = n), (e.D[t] = !0), !0;
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== R(e.t, t) || t in e.t ? ((e.D[t] = !1), D(e), L(e)) : delete e.D[t], e.o && delete e.o[t], !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = v(e),
              r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
              ? { writable: !0, configurable: 1 !== e.i || 'length' !== t, enumerable: r.enumerable, value: n[t] }
              : r;
          },
          defineProperty: function () {
            r(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            r(12);
          },
        },
        ae = {};
      l(oe, function (e, t) {
        ae[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (ae.deleteProperty = function (e, t) {
          return oe.deleteProperty.call(this, e[0], t);
        }),
        (ae.set = function (e, t, n) {
          return oe.set.call(this, e[0], t, n, e[0]);
        });
      var ie = (function () {
          function e(e) {
            (this.O = Y),
              (this.N = !1),
              'boolean' == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
              'boolean' == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze),
              (this.produce = this.produce.bind(this)),
              (this.produceWithPatches = this.produceWithPatches.bind(this));
          }
          var t = e.prototype;
          return (
            (t.produce = function (e, t, n) {
              if ('function' == typeof e && 'function' != typeof t) {
                var o = t;
                t = e;
                var i = this;
                return function (e) {
                  var n = this;
                  void 0 === e && (e = o);
                  for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
                    a[l - 1] = arguments[l];
                  return i.produce(e, function (e) {
                    var r;
                    return (r = t).call.apply(r, [n, e].concat(a));
                  });
                };
              }
              var l;
              if (('function' != typeof t && r(6), void 0 !== n && 'function' != typeof n && r(7), a(e))) {
                var u = _(this),
                  c = I(this, e, void 0),
                  s = !0;
                try {
                  (l = t(c)), (s = !1);
                } finally {
                  s ? C(u) : x(u);
                }
                return 'undefined' != typeof Promise && l instanceof Promise
                  ? l.then(
                      function (e) {
                        return E(u, n), P(e, u);
                      },
                      function (e) {
                        throw (C(u), e);
                      }
                    )
                  : (E(u, n), P(l, u));
              }
              if (!e || 'object' != typeof e) {
                if ((l = t(e)) === X) return;
                return void 0 === l && (l = e), this.N && g(l, !0), l;
              }
              r(21, e);
            }),
            (t.produceWithPatches = function (e, t) {
              var n,
                r,
                o = this;
              return 'function' == typeof e
                ? function (t) {
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                      r[a - 1] = arguments[a];
                    return o.produceWithPatches(t, function (t) {
                      return e.apply(void 0, [t].concat(r));
                    });
                  }
                : [
                    this.produce(e, t, function (e, t) {
                      (n = e), (r = t);
                    }),
                    n,
                    r,
                  ];
            }),
            (t.createDraft = function (e) {
              a(e) || r(8), o(e) && (e = z(e));
              var t = _(this),
                n = I(this, e, void 0);
              return (n[Z].C = !0), x(t), n;
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[Z]).A;
              return E(n, t), P(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
              this.N = e;
            }),
            (t.setUseProxies = function (e) {
              e && !Y && r(20), (this.O = e);
            }),
            (t.applyPatches = function (e, t) {
              var n;
              for (n = t.length - 1; n >= 0; n--) {
                var r = t[n];
                if (0 === r.path.length && 'replace' === r.op) {
                  e = r.value;
                  break;
                }
              }
              var a = w('Patches').$;
              return o(e)
                ? a(e, t)
                : this.produce(e, function (e) {
                    return a(e, t.slice(n + 1));
                  });
            }),
            e
          );
        })(),
        le = new ie(),
        ue = le.produce,
        ce = le.produceWithPatches.bind(le),
        se = le.setAutoFreeze.bind(le),
        fe = le.setUseProxies.bind(le),
        de = le.applyPatches.bind(le),
        pe = le.createDraft.bind(le),
        he = le.finishDraft.bind(le);
      t.default = ue;
    },
    function (e, t, n) {
      'use strict';
      var r = n(12);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isAcross = l),
        (t.otherDirection = function (e) {
          return l(e) ? 'down' : 'across';
        }),
        (t.calculateExtents = u),
        (t.createEmptyGrid = s),
        (t.fillClues = f),
        (t.createGridData = function (e) {
          var t = u(e, 'across'),
            n = u(e, 'down'),
            r = Math.max.apply(Math, Object.values(t).concat(Object.values(n))) + 1,
            o = s(r),
            a = { across: [], down: [] };
          return f(o, a, e, 'across'), f(o, a, e, 'down'), { size: r, gridData: o, clues: a };
        }),
        (t.byNumber = d),
        (t.clearGuesses = function (e) {
          if (!window.localStorage) return;
          window.localStorage.removeItem(e);
        }),
        (t.saveGuesses = function (e, t) {
          var n = window.localStorage;
          if (!n) return;
          var r = p(e),
            o = { date: Date.now(), guesses: r };
          n.setItem(t, JSON.stringify(o));
        }),
        (t.serializeGuesses = p),
        (t.loadGuesses = function (e, t) {
          var n = window.localStorage;
          if (!n) return;
          var r = n.getItem(t);
          if (!r) return;
          var o = JSON.parse(r);
          h(e, o.guesses);
        }),
        (t.deserializeGuesses = h),
        (t.findCorrectAnswers = function (e, t) {
          var n = [];
          return (
            i.forEach(function (r) {
              var o = l(r);
              Object.entries(e[r]).forEach(function (e) {
                for (var a = e[0], i = e[1], l = i.row, u = i.col, c = !0, s = 0; s < i.answer.length; s++) {
                  var f = o ? u + s : u;
                  if (t[o ? l : l + s][f].guess !== i.answer[s]) {
                    c = !1;
                    break;
                  }
                }
                c && n.push([r, a, i.answer]);
              });
            }),
            n
          );
        }),
        (t.bothDirections = void 0);
      var o = r(n(23)),
        a = { across: { primary: 'col', orthogonal: 'row' }, down: { primary: 'row', orthogonal: 'col' } },
        i = Object.keys(a);
      function l(e) {
        return 'across' === e;
      }
      function u(e, t) {
        var n,
          r = a[t],
          o = 0,
          i = 0;
        return (
          Object.entries(e[t]).forEach(function (e) {
            e[0];
            var t = e[1],
              n = t[r.primary] + t.answer.length - 1;
            n > o && (o = n);
            var a = t[r.orthogonal];
            a > i && (i = a);
          }),
          ((n = {})[r.primary] = o),
          (n[r.orthogonal] = i),
          n
        );
      }
      t.bothDirections = i;
      var c = { used: !1, number: null, answer: '', guess: '', locked: !1, across: null, down: null };
      function s(e) {
        for (var t = Array(e), n = 0; n < e; n++) {
          t[n] = Array(e);
          for (var r = 0; r < e; r++) t[n][r] = (0, o.default)({}, c, { row: n, col: r });
        }
        return t;
      }
      function f(e, t, n, r) {
        var o = a[r];
        Object.entries(n[r]).forEach(function (n) {
          for (var a = n[0], i = n[1], l = i.row, u = i.col, c = i.clue, s = i.answer, f = 0; f < s.length; f++) {
            var d = l + ('row' === o.primary ? f : 0),
              p = u + ('col' === o.primary ? f : 0),
              h = e[d][p];
            (h.used = !0), (h.answer = s[f]), (h[r] = a), 0 === f && (h.number = a);
          }
          t[r].push({ number: a, clue: c });
        }),
          t[r].sort(d);
      }
      function d(e, t) {
        return Number.parseInt(e.number, 10) - Number.parseInt(t.number, 10);
      }
      function p(e) {
        return e.reduce(function (e, t, n) {
          return t.reduce(function (e, t, r) {
            return '' !== t.guess && (e[n + '_' + r] = t.guess), e;
          }, e);
        }, {});
      }
      function h(e, t) {
        Object.entries(t).forEach(function (t) {
          var n = t[0],
            r = t[1],
            o = n.split('_'),
            a = o[0],
            i = o[1];
          a <= e.length - 1 && i <= e[0].length - 1 && (e[a][i].guess = r);
        });
      }
    },
  ],
]);
//# sourceMappingURL=2.ad283fd4.chunk.js.map
