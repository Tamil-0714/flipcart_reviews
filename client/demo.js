/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/@textea/json-viewer@3.5.0/dist/browser.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).JsonViewer =
        t());
})(this, function () {
  "use strict";
  function e(e, t) {
    return (
      t.forEach(function (t) {
        t &&
          "string" != typeof t &&
          !Array.isArray(t) &&
          Object.keys(t).forEach(function (n) {
            if ("default" !== n && !(n in e)) {
              var r = Object.getOwnPropertyDescriptor(t, n);
              Object.defineProperty(
                e,
                n,
                r.get
                  ? r
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }
              );
            }
          });
      }),
      Object.freeze(e)
    );
  }
  function t(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function n(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function r(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if ("function" == typeof t) {
      var n = function e() {
        return this instanceof e
          ? Reflect.construct(t, arguments, this.constructor)
          : t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else n = {};
    return (
      Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.keys(e).forEach(function (t) {
        var r = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(
          n,
          t,
          r.get
            ? r
            : {
                enumerable: !0,
                get: function () {
                  return e[t];
                },
              }
        );
      }),
      n
    );
  }
  var o = { exports: {} },
    a = {},
    l = { exports: {} },
    i = {},
    u = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    p = Symbol.for("react.provider"),
    m = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    k = Object.assign,
    w = {};
  function S(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = w),
      (this.updater = n || x);
  }
  function C() {}
  function E(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = w),
      (this.updater = n || x);
  }
  (S.prototype.isReactComponent = {}),
    (S.prototype.setState = function (e, t) {
      if ("object" != typeof e && "function" != typeof e && null != e)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (S.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }),
    (C.prototype = S.prototype);
  var _ = (E.prototype = new C());
  (_.constructor = E), k(_, S.prototype), (_.isPureReactComponent = !0);
  var P = Array.isArray,
    z = Object.prototype.hasOwnProperty,
    T = { current: null },
    O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(e, t, n) {
    var r,
      o = {},
      a = null,
      l = null;
    if (null != t)
      for (r in (void 0 !== t.ref && (l = t.ref),
      void 0 !== t.key && (a = "" + t.key),
      t))
        z.call(t, r) && !O.hasOwnProperty(r) && (o[r] = t[r]);
    var i = arguments.length - 2;
    if (1 === i) o.children = n;
    else if (1 < i) {
      for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
      o.children = s;
    }
    if (e && e.defaultProps)
      for (r in (i = e.defaultProps)) void 0 === o[r] && (o[r] = i[r]);
    return {
      $$typeof: u,
      type: e,
      key: a,
      ref: l,
      props: o,
      _owner: T.current,
    };
  }
  function N(e) {
    return "object" == typeof e && null !== e && e.$$typeof === u;
  }
  var M = /\/+/g;
  function R(e, t) {
    return "object" == typeof e && null !== e && null != e.key
      ? (function (e) {
          var t = { "=": "=0", ":": "=2" };
          return (
            "$" +
            e.replace(/[=:]/g, function (e) {
              return t[e];
            })
          );
        })("" + e.key)
      : t.toString(36);
  }
  function A(e, t, n, r, o) {
    var a = typeof e;
    ("undefined" !== a && "boolean" !== a) || (e = null);
    var l = !1;
    if (null === e) l = !0;
    else
      switch (a) {
        case "string":
        case "number":
          l = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case u:
            case s:
              l = !0;
          }
      }
    if (l)
      return (
        (o = o((l = e))),
        (e = "" === r ? "." + R(l, 0) : r),
        P(o)
          ? ((n = ""),
            null != e && (n = e.replace(M, "$&/") + "/"),
            A(o, t, n, "", function (e) {
              return e;
            }))
          : null != o &&
            (N(o) &&
              (o = (function (e, t) {
                return {
                  $$typeof: u,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner,
                };
              })(
                o,
                n +
                  (!o.key || (l && l.key === o.key)
                    ? ""
                    : ("" + o.key).replace(M, "$&/") + "/") +
                  e
              )),
            t.push(o)),
        1
      );
    if (((l = 0), (r = "" === r ? "." : r + ":"), P(e)))
      for (var i = 0; i < e.length; i++) {
        var c = r + R((a = e[i]), i);
        l += A(a, t, n, c, o);
      }
    else if (
      ((c = (function (e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (b && e[b]) || e["@@iterator"])
          ? e
          : null;
      })(e)),
      "function" == typeof c)
    )
      for (e = c.call(e), i = 0; !(a = e.next()).done; )
        l += A((a = a.value), t, n, (c = r + R(a, i++)), o);
    else if ("object" === a)
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            ("[object Object]" === t
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return l;
  }
  function L(e, t, n) {
    if (null == e) return e;
    var r = [],
      o = 0;
    return (
      A(e, r, "", "", function (e) {
        return t.call(n, e, o++);
      }),
      r
    );
  }
  function I(e) {
    if (-1 === e._status) {
      var t = e._result;
      (t = t()).then(
        function (t) {
          (0 !== e._status && -1 !== e._status) ||
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (0 !== e._status && -1 !== e._status) ||
            ((e._status = 2), (e._result = t));
        }
      ),
        -1 === e._status && ((e._status = 0), (e._result = t));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
  }
  var F = { current: null },
    $ = { transition: null },
    D = {
      ReactCurrentDispatcher: F,
      ReactCurrentBatchConfig: $,
      ReactCurrentOwner: T,
    };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  (i.Children = {
    map: L,
    forEach: function (e, t, n) {
      L(
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
        L(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        L(e, function (e) {
          return e;
        }) || []
      );
    },
    only: function (e) {
      if (!N(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  }),
    (i.Component = S),
    (i.Fragment = c),
    (i.Profiler = d),
    (i.PureComponent = E),
    (i.StrictMode = f),
    (i.Suspense = y),
    (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
    (i.act = V),
    (i.cloneElement = function (e, t, n) {
      if (null == e)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
        );
      var r = k({}, e.props),
        o = e.key,
        a = e.ref,
        l = e._owner;
      if (null != t) {
        if (
          (void 0 !== t.ref && ((a = t.ref), (l = T.current)),
          void 0 !== t.key && (o = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var i = e.type.defaultProps;
        for (s in t)
          z.call(t, s) &&
            !O.hasOwnProperty(s) &&
            (r[s] = void 0 === t[s] && void 0 !== i ? i[s] : t[s]);
      }
      var s = arguments.length - 2;
      if (1 === s) r.children = n;
      else if (1 < s) {
        i = Array(s);
        for (var c = 0; c < s; c++) i[c] = arguments[c + 2];
        r.children = i;
      }
      return { $$typeof: u, type: e.type, key: o, ref: a, props: r, _owner: l };
    }),
    (i.createContext = function (e) {
      return (
        ((e = {
          $$typeof: m,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }).Provider = { $$typeof: p, _context: e }),
        (e.Consumer = e)
      );
    }),
    (i.createElement = j),
    (i.createFactory = function (e) {
      var t = j.bind(null, e);
      return (t.type = e), t;
    }),
    (i.createRef = function () {
      return { current: null };
    }),
    (i.forwardRef = function (e) {
      return { $$typeof: h, render: e };
    }),
    (i.isValidElement = N),
    (i.lazy = function (e) {
      return { $$typeof: v, _payload: { _status: -1, _result: e }, _init: I };
    }),
    (i.memo = function (e, t) {
      return { $$typeof: g, type: e, compare: void 0 === t ? null : t };
    }),
    (i.startTransition = function (e) {
      var t = $.transition;
      $.transition = {};
      try {
        e();
      } finally {
        $.transition = t;
      }
    }),
    (i.unstable_act = V),
    (i.useCallback = function (e, t) {
      return F.current.useCallback(e, t);
    }),
    (i.useContext = function (e) {
      return F.current.useContext(e);
    }),
    (i.useDebugValue = function () {}),
    (i.useDeferredValue = function (e) {
      return F.current.useDeferredValue(e);
    }),
    (i.useEffect = function (e, t) {
      return F.current.useEffect(e, t);
    }),
    (i.useId = function () {
      return F.current.useId();
    }),
    (i.useImperativeHandle = function (e, t, n) {
      return F.current.useImperativeHandle(e, t, n);
    }),
    (i.useInsertionEffect = function (e, t) {
      return F.current.useInsertionEffect(e, t);
    }),
    (i.useLayoutEffect = function (e, t) {
      return F.current.useLayoutEffect(e, t);
    }),
    (i.useMemo = function (e, t) {
      return F.current.useMemo(e, t);
    }),
    (i.useReducer = function (e, t, n) {
      return F.current.useReducer(e, t, n);
    }),
    (i.useRef = function (e) {
      return F.current.useRef(e);
    }),
    (i.useState = function (e) {
      return F.current.useState(e);
    }),
    (i.useSyncExternalStore = function (e, t, n) {
      return F.current.useSyncExternalStore(e, t, n);
    }),
    (i.useTransition = function () {
      return F.current.useTransition();
    }),
    (i.version = "18.3.1"),
    (l.exports = i);
  var U = l.exports,
    B = n(U),
    W = e({ __proto__: null, default: B }, [U]),
    H = U,
    K = Symbol.for("react.element"),
    Q = Symbol.for("react.fragment"),
    q = Object.prototype.hasOwnProperty,
    G = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Y(e, t, n) {
    var r,
      o = {},
      a = null,
      l = null;
    for (r in (void 0 !== n && (a = "" + n),
    void 0 !== t.key && (a = "" + t.key),
    void 0 !== t.ref && (l = t.ref),
    t))
      q.call(t, r) && !X.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
      for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
    return {
      $$typeof: K,
      type: e,
      key: a,
      ref: l,
      props: o,
      _owner: G.current,
    };
  }
  (a.Fragment = Q), (a.jsx = Y), (a.jsxs = Y), (o.exports = a);
  var J = o.exports,
    Z = { exports: {} },
    ee = {},
    te = { exports: {} },
    ne = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  !(function (e) {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      e: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (!(0 < o(a, t))) break e;
        (e[r] = t), (e[n] = a), (n = r);
      }
    }
    function n(e) {
      return 0 === e.length ? null : e[0];
    }
    function r(e) {
      if (0 === e.length) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
          var i = 2 * (r + 1) - 1,
            u = e[i],
            s = i + 1,
            c = e[s];
          if (0 > o(u, n))
            s < a && 0 > o(c, u)
              ? ((e[r] = c), (e[s] = n), (r = s))
              : ((e[r] = u), (e[i] = n), (r = i));
          else {
            if (!(s < a && 0 > o(c, n))) break e;
            (e[r] = c), (e[s] = n), (r = s);
          }
        }
      }
      return t;
    }
    function o(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    if (
      "object" == typeof performance &&
      "function" == typeof performance.now
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var l = Date,
        i = l.now();
      e.unstable_now = function () {
        return l.now() - i;
      };
    }
    var u = [],
      s = [],
      c = 1,
      f = null,
      d = 3,
      p = !1,
      m = !1,
      h = !1,
      y = "function" == typeof setTimeout ? setTimeout : null,
      g = "function" == typeof clearTimeout ? clearTimeout : null,
      v = "undefined" != typeof setImmediate ? setImmediate : null;
    function b(e) {
      for (var o = n(s); null !== o; ) {
        if (null === o.callback) r(s);
        else {
          if (!(o.startTime <= e)) break;
          r(s), (o.sortIndex = o.expirationTime), t(u, o);
        }
        o = n(s);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (null !== n(u)) (m = !0), N(k);
        else {
          var t = n(s);
          null !== t && M(x, t.startTime - e);
        }
    }
    function k(t, o) {
      (m = !1), h && ((h = !1), g(E), (E = -1)), (p = !0);
      var a = d;
      try {
        for (
          b(o), f = n(u);
          null !== f && (!(f.expirationTime > o) || (t && !z()));

        ) {
          var l = f.callback;
          if ("function" == typeof l) {
            (f.callback = null), (d = f.priorityLevel);
            var i = l(f.expirationTime <= o);
            (o = e.unstable_now()),
              "function" == typeof i ? (f.callback = i) : f === n(u) && r(u),
              b(o);
          } else r(u);
          f = n(u);
        }
        if (null !== f) var c = !0;
        else {
          var y = n(s);
          null !== y && M(x, y.startTime - o), (c = !1);
        }
        return c;
      } finally {
        (f = null), (d = a), (p = !1);
      }
    }
    "undefined" != typeof navigator &&
      void 0 !== navigator.scheduling &&
      void 0 !== navigator.scheduling.isInputPending &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var w,
      S = !1,
      C = null,
      E = -1,
      _ = 5,
      P = -1;
    function z() {
      return !(e.unstable_now() - P < _);
    }
    function T() {
      if (null !== C) {
        var t = e.unstable_now();
        P = t;
        var n = !0;
        try {
          n = C(!0, t);
        } finally {
          n ? w() : ((S = !1), (C = null));
        }
      } else S = !1;
    }
    if ("function" == typeof v)
      w = function () {
        v(T);
      };
    else if ("undefined" != typeof MessageChannel) {
      var O = new MessageChannel(),
        j = O.port2;
      (O.port1.onmessage = T),
        (w = function () {
          j.postMessage(null);
        });
    } else
      w = function () {
        y(T, 0);
      };
    function N(e) {
      (C = e), S || ((S = !0), w());
    }
    function M(t, n) {
      E = y(function () {
        t(e.unstable_now());
      }, n);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        m || p || ((m = !0), N(k));
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return d;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(u);
      }),
      (e.unstable_next = function (e) {
        switch (d) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = d;
        }
        var n = d;
        d = t;
        try {
          return e();
        } finally {
          d = n;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (e, t) {
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
        var n = d;
        d = e;
        try {
          return t();
        } finally {
          d = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, o, a) {
        var l = e.unstable_now();
        switch (
          ("object" == typeof a && null !== a
            ? (a = "number" == typeof (a = a.delay) && 0 < a ? l + a : l)
            : (a = l),
          r)
        ) {
          case 1:
            var i = -1;
            break;
          case 2:
            i = 250;
            break;
          case 5:
            i = 1073741823;
            break;
          case 4:
            i = 1e4;
            break;
          default:
            i = 5e3;
        }
        return (
          (r = {
            id: c++,
            callback: o,
            priorityLevel: r,
            startTime: a,
            expirationTime: (i = a + i),
            sortIndex: -1,
          }),
          a > l
            ? ((r.sortIndex = a),
              t(s, r),
              null === n(u) &&
                r === n(s) &&
                (h ? (g(E), (E = -1)) : (h = !0), M(x, a - l)))
            : ((r.sortIndex = i), t(u, r), m || p || ((m = !0), N(k))),
          r
        );
      }),
      (e.unstable_shouldYield = z),
      (e.unstable_wrapCallback = function (e) {
        var t = d;
        return function () {
          var n = d;
          d = t;
          try {
            return e.apply(this, arguments);
          } finally {
            d = n;
          }
        };
      });
  })(ne),
    (te.exports = ne);
  var re = te.exports,
    oe = U,
    ae = re;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ function le(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var ie = new Set(),
    ue = {};
  function se(e, t) {
    ce(e, t), ce(e + "Capture", t);
  }
  function ce(e, t) {
    for (ue[e] = t, e = 0; e < t.length; e++) ie.add(t[e]);
  }
  var fe = !(
      void 0 === window.document || void 0 === window.document.createElement
    ),
    de = Object.prototype.hasOwnProperty,
    pe =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    me = {},
    he = {};
  function ye(e, t, n, r, o, a, l) {
    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = a),
      (this.removeEmptyString = l);
  }
  var ge = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      ge[e] = new ye(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      ge[t] = new ye(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      ge[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      ge[e] = new ye(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        ge[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      ge[e] = new ye(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      ge[e] = new ye(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      ge[e] = new ye(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      ge[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var ve = /[\-:]([a-z])/g;
  function be(e) {
    return e[1].toUpperCase();
  }
  function xe(e, t, n, r) {
    var o = ge.hasOwnProperty(t) ? ge[t] : null;
    (null !== o
      ? 0 !== o.type
      : r ||
        !(2 < t.length) ||
        ("o" !== t[0] && "O" !== t[0]) ||
        ("n" !== t[1] && "N" !== t[1])) &&
      ((function (e, t, n, r) {
        if (
          null == t ||
          (function (e, t, n, r) {
            if (null !== n && 0 === n.type) return !1;
            switch (typeof t) {
              case "function":
              case "symbol":
                return !0;
              case "boolean":
                return (
                  !r &&
                  (null !== n
                    ? !n.acceptsBooleans
                    : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                      "aria-" !== e)
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
            return (
              !!de.call(he, e) ||
              (!de.call(me, e) &&
                (pe.test(e) ? (he[e] = !0) : ((me[e] = !0), !1)))
            );
          })(t) &&
          (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : o.mustUseProperty
        ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          null === n
            ? e.removeAttribute(t)
            : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(ve, be);
      ge[t] = new ye(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(ve, be);
        ge[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(ve, be);
      ge[t] = new ye(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      ge[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (ge.xlinkHref = new ye(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      ge[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  var ke = oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    we = Symbol.for("react.element"),
    Se = Symbol.for("react.portal"),
    Ce = Symbol.for("react.fragment"),
    Ee = Symbol.for("react.strict_mode"),
    _e = Symbol.for("react.profiler"),
    Pe = Symbol.for("react.provider"),
    ze = Symbol.for("react.context"),
    Te = Symbol.for("react.forward_ref"),
    Oe = Symbol.for("react.suspense"),
    je = Symbol.for("react.suspense_list"),
    Ne = Symbol.for("react.memo"),
    Me = Symbol.for("react.lazy"),
    Re = Symbol.for("react.offscreen"),
    Ae = Symbol.iterator;
  function Le(e) {
    return null === e || "object" != typeof e
      ? null
      : "function" == typeof (e = (Ae && e[Ae]) || e["@@iterator"])
      ? e
      : null;
  }
  var Ie,
    Fe = Object.assign;
  function $e(e) {
    if (void 0 === Ie)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        Ie = (t && t[1]) || "";
      }
    return "\n" + Ie + e;
  }
  var De = !1;
  function Ve(e, t) {
    if (!e || De) return "";
    De = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          "object" == typeof Reflect && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (e) {
            var r = e;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (e) {
            r = e;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (e) {
          r = e;
        }
        e();
      }
    } catch (t) {
      if (t && r && "string" == typeof t.stack) {
        for (
          var o = t.stack.split("\n"),
            a = r.stack.split("\n"),
            l = o.length - 1,
            i = a.length - 1;
          1 <= l && 0 <= i && o[l] !== a[i];

        )
          i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (o[l] !== a[i]) {
            if (1 !== l || 1 !== i)
              do {
                if ((l--, 0 > --i || o[l] !== a[i])) {
                  var u = "\n" + o[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      u.includes("<anonymous>") &&
                      (u = u.replace("<anonymous>", e.displayName)),
                    u
                  );
                }
              } while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      (De = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? $e(e) : "";
  }
  function Ue(e) {
    switch (e.tag) {
      case 5:
        return $e(e.type);
      case 16:
        return $e("Lazy");
      case 13:
        return $e("Suspense");
      case 19:
        return $e("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Ve(e.type, !1));
      case 11:
        return (e = Ve(e.type.render, !1));
      case 1:
        return (e = Ve(e.type, !0));
      default:
        return "";
    }
  }
  function Be(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
      case Ce:
        return "Fragment";
      case Se:
        return "Portal";
      case _e:
        return "Profiler";
      case Ee:
        return "StrictMode";
      case Oe:
        return "Suspense";
      case je:
        return "SuspenseList";
    }
    if ("object" == typeof e)
      switch (e.$$typeof) {
        case ze:
          return (e.displayName || "Context") + ".Consumer";
        case Pe:
          return (e._context.displayName || "Context") + ".Provider";
        case Te:
          var t = e.render;
          return (
            (e = e.displayName) ||
              (e =
                "" !== (e = t.displayName || t.name || "")
                  ? "ForwardRef(" + e + ")"
                  : "ForwardRef"),
            e
          );
        case Ne:
          return null !== (t = e.displayName || null)
            ? t
            : Be(e.type) || "Memo";
        case Me:
          (t = e._payload), (e = e._init);
          try {
            return Be(e(t));
          } catch (e) {}
      }
    return null;
  }
  function We(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = (e = t.render).displayName || e.name || ""),
          t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Be(t);
      case 8:
        return t === Ee ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" == typeof t) return t.displayName || t.name || null;
        if ("string" == typeof t) return t;
    }
    return null;
  }
  function He(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ke(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      "input" === e.toLowerCase() &&
      ("checkbox" === t || "radio" === t)
    );
  }
  function Qe(e) {
    e._valueTracker ||
      (e._valueTracker = (function (e) {
        var t = Ke(e) ? "checked" : "value",
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
          r = "" + e[t];
        if (
          !e.hasOwnProperty(t) &&
          void 0 !== n &&
          "function" == typeof n.get &&
          "function" == typeof n.set
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
                (r = "" + e), a.call(this, e);
              },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
              getValue: function () {
                return r;
              },
              setValue: function (e) {
                r = "" + e;
              },
              stopTracking: function () {
                (e._valueTracker = null), delete e[t];
              },
            }
          );
        }
      })(e));
  }
  function qe(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Ke(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r) !== n && (t.setValue(e), !0)
    );
  }
  function Ge(e) {
    if (
      void 0 === (e = e || ("undefined" != typeof document ? document : void 0))
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch (t) {
      return e.body;
    }
  }
  function Xe(e, t) {
    var n = t.checked;
    return Fe({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != n ? n : e._wrapperState.initialChecked,
    });
  }
  function Ye(e, t) {
    var n = null == t.defaultValue ? "" : t.defaultValue,
      r = null != t.checked ? t.checked : t.defaultChecked;
    (n = He(null != t.value ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          "checkbox" === t.type || "radio" === t.type
            ? null != t.checked
            : null != t.value,
      });
  }
  function Je(e, t) {
    null != (t = t.checked) && xe(e, "checked", t, !1);
  }
  function Ze(e, t) {
    Je(e, t);
    var n = He(t.value),
      r = t.type;
    if (null != n)
      "number" === r
        ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if ("submit" === r || "reset" === r)
      return void e.removeAttribute("value");
    t.hasOwnProperty("value")
      ? tt(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && tt(e, t.type, He(t.defaultValue)),
      null == t.checked &&
        null != t.defaultChecked &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function et(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          ("submit" !== r && "reset" !== r) ||
          (void 0 !== t.value && null !== t.value)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    "" !== (n = e.name) && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      "" !== n && (e.name = n);
  }
  function tt(e, t, n) {
    ("number" === t && Ge(e.ownerDocument) === e) ||
      (null == n
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var nt = Array.isArray;
  function rt(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + He(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n)
          return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
        null !== t || e[o].disabled || (t = e[o]);
      }
      null !== t && (t.selected = !0);
    }
  }
  function ot(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(le(91));
    return Fe({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function at(e, t) {
    var n = t.value;
    if (null == n) {
      if (((n = t.children), (t = t.defaultValue), null != n)) {
        if (null != t) throw Error(le(92));
        if (nt(n)) {
          if (1 < n.length) throw Error(le(93));
          n = n[0];
        }
        t = n;
      }
      null == t && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: He(n) };
  }
  function lt(e, t) {
    var n = He(t.value),
      r = He(t.defaultValue);
    null != n &&
      ((n = "" + n) !== e.value && (e.value = n),
      null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
      null != r && (e.defaultValue = "" + r);
  }
  function it(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      "" !== t &&
      null !== t &&
      (e.value = t);
  }
  function ut(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function st(e, t) {
    return null == e || "http://www.w3.org/1999/xhtml" === e
      ? ut(t)
      : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var ct,
    ft,
    dt =
      ((ft = function (e, t) {
        if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
          e.innerHTML = t;
        else {
          for (
            (ct = ct || document.createElement("div")).innerHTML =
              "<svg>" + t.valueOf().toString() + "</svg>",
              t = ct.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      }),
      "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
        ? function (e, t, n, r) {
            MSApp.execUnsafeLocalFunction(function () {
              return ft(e, t);
            });
          }
        : ft);
  function pt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && 3 === n.nodeType)
        return void (n.nodeValue = t);
    }
    e.textContent = t;
  }
  var mt = {
      animationIterationCount: !0,
      aspectRatio: !0,
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
    ht = ["Webkit", "ms", "Moz", "O"];
  function yt(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t
      ? ""
      : n || "number" != typeof t || 0 === t || (mt.hasOwnProperty(e) && mt[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function gt(e, t) {
    for (var n in ((e = e.style), t))
      if (t.hasOwnProperty(n)) {
        var r = 0 === n.indexOf("--"),
          o = yt(n, t[n], r);
        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
      }
  }
  Object.keys(mt).forEach(function (e) {
    ht.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mt[t] = mt[e]);
    });
  });
  var vt = Fe(
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
  function bt(e, t) {
    if (t) {
      if (vt[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
        throw Error(le(137, e));
      if (null != t.dangerouslySetInnerHTML) {
        if (null != t.children) throw Error(le(60));
        if (
          "object" != typeof t.dangerouslySetInnerHTML ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(le(61));
      }
      if (null != t.style && "object" != typeof t.style) throw Error(le(62));
    }
  }
  function xt(e, t) {
    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var kt = null;
  function wt(e) {
    return (
      (e = e.target || e.srcElement || window).correspondingUseElement &&
        (e = e.correspondingUseElement),
      3 === e.nodeType ? e.parentNode : e
    );
  }
  var St = null,
    Ct = null,
    Et = null;
  function _t(e) {
    if ((e = ka(e))) {
      if ("function" != typeof St) throw Error(le(280));
      var t = e.stateNode;
      t && ((t = Sa(t)), St(e.stateNode, e.type, t));
    }
  }
  function Pt(e) {
    Ct ? (Et ? Et.push(e) : (Et = [e])) : (Ct = e);
  }
  function zt() {
    if (Ct) {
      var e = Ct,
        t = Et;
      if (((Et = Ct = null), _t(e), t)) for (e = 0; e < t.length; e++) _t(t[e]);
    }
  }
  function Tt(e, t) {
    return e(t);
  }
  function Ot() {}
  var jt = !1;
  function Nt(e, t, n) {
    if (jt) return e(t, n);
    jt = !0;
    try {
      return Tt(e, t, n);
    } finally {
      (jt = !1), (null !== Ct || null !== Et) && (Ot(), zt());
    }
  }
  function Mt(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = Sa(n);
    if (null === r) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          (r = !(
            "button" === (e = e.type) ||
            "input" === e ||
            "select" === e ||
            "textarea" === e
          )),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && "function" != typeof n) throw Error(le(231, t, typeof n));
    return n;
  }
  var Rt = !1;
  if (fe)
    try {
      var At = {};
      Object.defineProperty(At, "passive", {
        get: function () {
          Rt = !0;
        },
      }),
        window.addEventListener("test", At, At),
        window.removeEventListener("test", At, At);
    } catch (ft) {
      Rt = !1;
    }
  function Lt(e, t, n, r, o, a, l, i, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, s);
    } catch (e) {
      this.onError(e);
    }
  }
  var It = !1,
    Ft = null,
    $t = !1,
    Dt = null,
    Vt = {
      onError: function (e) {
        (It = !0), (Ft = e);
      },
    };
  function Ut(e, t, n, r, o, a, l, i, u) {
    (It = !1), (Ft = null), Lt.apply(Vt, arguments);
  }
  function Bt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do {
        0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
      } while (e);
    }
    return 3 === t.tag ? n : null;
  }
  function Wt(e) {
    if (13 === e.tag) {
      var t = e.memoizedState;
      if (
        (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
        null !== t)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ht(e) {
    if (Bt(e) !== e) throw Error(le(188));
  }
  function Kt(e) {
    return (
      (e = (function (e) {
        var t = e.alternate;
        if (!t) {
          if (null === (t = Bt(e))) throw Error(le(188));
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
              if (a === n) return Ht(o), e;
              if (a === r) return Ht(o), t;
              a = a.sibling;
            }
            throw Error(le(188));
          }
          if (n.return !== r.return) (n = o), (r = a);
          else {
            for (var l = !1, i = o.child; i; ) {
              if (i === n) {
                (l = !0), (n = o), (r = a);
                break;
              }
              if (i === r) {
                (l = !0), (r = o), (n = a);
                break;
              }
              i = i.sibling;
            }
            if (!l) {
              for (i = a.child; i; ) {
                if (i === n) {
                  (l = !0), (n = a), (r = o);
                  break;
                }
                if (i === r) {
                  (l = !0), (r = a), (n = o);
                  break;
                }
                i = i.sibling;
              }
              if (!l) throw Error(le(189));
            }
          }
          if (n.alternate !== r) throw Error(le(190));
        }
        if (3 !== n.tag) throw Error(le(188));
        return n.stateNode.current === n ? e : t;
      })(e)),
      null !== e ? Qt(e) : null
    );
  }
  function Qt(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
      var t = Qt(e);
      if (null !== t) return t;
      e = e.sibling;
    }
    return null;
  }
  var qt = ae.unstable_scheduleCallback,
    Gt = ae.unstable_cancelCallback,
    Xt = ae.unstable_shouldYield,
    Yt = ae.unstable_requestPaint,
    Jt = ae.unstable_now,
    Zt = ae.unstable_getCurrentPriorityLevel,
    en = ae.unstable_ImmediatePriority,
    tn = ae.unstable_UserBlockingPriority,
    nn = ae.unstable_NormalPriority,
    rn = ae.unstable_LowPriority,
    on = ae.unstable_IdlePriority,
    an = null,
    ln = null;
  var un = Math.clz32
      ? Math.clz32
      : function (e) {
          return (e >>>= 0), 0 === e ? 32 : (31 - ((sn(e) / cn) | 0)) | 0;
        },
    sn = Math.log,
    cn = Math.LN2;
  var fn = 64,
    dn = 4194304;
  function pn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return 4194240 & e;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return 130023424 & e;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function mn(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
      o = e.suspendedLanes,
      a = e.pingedLanes,
      l = 268435455 & n;
    if (0 !== l) {
      var i = l & ~o;
      0 !== i ? (r = pn(i)) : 0 !== (a &= l) && (r = pn(a));
    } else 0 !== (l = n & ~o) ? (r = pn(l)) : 0 !== a && (r = pn(a));
    if (0 === r) return 0;
    if (
      0 !== t &&
      t !== r &&
      0 == (t & o) &&
      ((o = r & -r) >= (a = t & -t) || (16 === o && 0 != (4194240 & a)))
    )
      return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
      for (e = e.entanglements, t &= r; 0 < t; )
        (o = 1 << (n = 31 - un(t))), (r |= e[n]), (t &= ~o);
    return r;
  }
  function hn(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      default:
        return -1;
    }
  }
  function yn(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes)
      ? e
      : 1073741824 & e
      ? 1073741824
      : 0;
  }
  function gn() {
    var e = fn;
    return 0 == (4194240 & (fn <<= 1)) && (fn = 64), e;
  }
  function vn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function bn(e, t, n) {
    (e.pendingLanes |= t),
      536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      ((e = e.eventTimes)[(t = 31 - un(t))] = n);
  }
  function xn(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - un(n),
        o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
  }
  var kn = 0;
  function wn(e) {
    return 1 < (e &= -e)
      ? 4 < e
        ? 0 != (268435455 & e)
          ? 16
          : 536870912
        : 4
      : 1;
  }
  var Sn,
    Cn,
    En,
    _n,
    Pn,
    zn = !1,
    Tn = [],
    On = null,
    jn = null,
    Nn = null,
    Mn = new Map(),
    Rn = new Map(),
    An = [],
    Ln =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function In(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        On = null;
        break;
      case "dragenter":
      case "dragleave":
        jn = null;
        break;
      case "mouseover":
      case "mouseout":
        Nn = null;
        break;
      case "pointerover":
      case "pointerout":
        Mn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rn.delete(t.pointerId);
    }
  }
  function Fn(e, t, n, r, o, a) {
    return null === e || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: a,
          targetContainers: [o],
        }),
        null !== t && null !== (t = ka(t)) && Cn(t),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        null !== o && -1 === t.indexOf(o) && t.push(o),
        e);
  }
  function $n(e) {
    var t = xa(e.target);
    if (null !== t) {
      var n = Bt(t);
      if (null !== n)
        if (13 === (t = n.tag)) {
          if (null !== (t = Wt(n)))
            return (
              (e.blockedOn = t),
              void Pn(e.priority, function () {
                En(n);
              })
            );
        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
          return void (e.blockedOn =
            3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
  }
  function Dn(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Yn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (null !== n)
        return null !== (t = ka(n)) && Cn(t), (e.blockedOn = n), !1;
      var r = new (n = e.nativeEvent).constructor(n.type, n);
      (kt = r), n.target.dispatchEvent(r), (kt = null), t.shift();
    }
    return !0;
  }
  function Vn(e, t, n) {
    Dn(e) && n.delete(t);
  }
  function Un() {
    (zn = !1),
      null !== On && Dn(On) && (On = null),
      null !== jn && Dn(jn) && (jn = null),
      null !== Nn && Dn(Nn) && (Nn = null),
      Mn.forEach(Vn),
      Rn.forEach(Vn);
  }
  function Bn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      zn ||
        ((zn = !0),
        ae.unstable_scheduleCallback(ae.unstable_NormalPriority, Un)));
  }
  function Wn(e) {
    function t(t) {
      return Bn(t, e);
    }
    if (0 < Tn.length) {
      Bn(Tn[0], e);
      for (var n = 1; n < Tn.length; n++) {
        var r = Tn[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      null !== On && Bn(On, e),
        null !== jn && Bn(jn, e),
        null !== Nn && Bn(Nn, e),
        Mn.forEach(t),
        Rn.forEach(t),
        n = 0;
      n < An.length;
      n++
    )
      (r = An[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < An.length && null === (n = An[0]).blockedOn; )
      $n(n), null === n.blockedOn && An.shift();
  }
  var Hn = ke.ReactCurrentBatchConfig,
    Kn = !0;
  function Qn(e, t, n, r) {
    var o = kn,
      a = Hn.transition;
    Hn.transition = null;
    try {
      (kn = 1), Gn(e, t, n, r);
    } finally {
      (kn = o), (Hn.transition = a);
    }
  }
  function qn(e, t, n, r) {
    var o = kn,
      a = Hn.transition;
    Hn.transition = null;
    try {
      (kn = 4), Gn(e, t, n, r);
    } finally {
      (kn = o), (Hn.transition = a);
    }
  }
  function Gn(e, t, n, r) {
    if (Kn) {
      var o = Yn(e, t, n, r);
      if (null === o) Ko(e, t, r, Xn, n), In(e, r);
      else if (
        (function (e, t, n, r, o) {
          switch (t) {
            case "focusin":
              return (On = Fn(On, e, t, n, r, o)), !0;
            case "dragenter":
              return (jn = Fn(jn, e, t, n, r, o)), !0;
            case "mouseover":
              return (Nn = Fn(Nn, e, t, n, r, o)), !0;
            case "pointerover":
              var a = o.pointerId;
              return Mn.set(a, Fn(Mn.get(a) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
              return (
                (a = o.pointerId),
                Rn.set(a, Fn(Rn.get(a) || null, e, t, n, r, o)),
                !0
              );
          }
          return !1;
        })(o, e, t, n, r)
      )
        r.stopPropagation();
      else if ((In(e, r), 4 & t && -1 < Ln.indexOf(e))) {
        for (; null !== o; ) {
          var a = ka(o);
          if (
            (null !== a && Sn(a),
            null === (a = Yn(e, t, n, r)) && Ko(e, t, r, Xn, n),
            a === o)
          )
            break;
          o = a;
        }
        null !== o && r.stopPropagation();
      } else Ko(e, t, r, null, n);
    }
  }
  var Xn = null;
  function Yn(e, t, n, r) {
    if (((Xn = null), null !== (e = xa((e = wt(r))))))
      if (null === (t = Bt(e))) e = null;
      else if (13 === (n = t.tag)) {
        if (null !== (e = Wt(t))) return e;
        e = null;
      } else if (3 === n) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return 3 === t.tag ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Xn = e), null;
  }
  function Jn(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Zt()) {
          case en:
            return 1;
          case tn:
            return 4;
          case nn:
          case rn:
            return 16;
          case on:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Zn = null,
    er = null,
    tr = null;
  function nr() {
    if (tr) return tr;
    var e,
      t,
      n = er,
      r = n.length,
      o = "value" in Zn ? Zn.value : Zn.textContent,
      a = o.length;
    for (e = 0; e < r && n[e] === o[e]; e++);
    var l = r - e;
    for (t = 1; t <= l && n[r - t] === o[a - t]; t++);
    return (tr = o.slice(e, 1 < t ? 1 - t : void 0));
  }
  function rr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? 0 === (e = e.charCode) && 13 === t && (e = 13)
        : (e = t),
      10 === e && (e = 13),
      32 <= e || 13 === e ? e : 0
    );
  }
  function or() {
    return !0;
  }
  function ar() {
    return !1;
  }
  function lr(e) {
    function t(t, n, r, o, a) {
      for (var l in ((this._reactName = t),
      (this._targetInst = r),
      (this.type = n),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null),
      e))
        e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(o) : o[l]));
      return (
        (this.isDefaultPrevented = (
          null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue
        )
          ? or
          : ar),
        (this.isPropagationStopped = ar),
        this
      );
    }
    return (
      Fe(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = or));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = or));
        },
        persist: function () {},
        isPersistent: or,
      }),
      t
    );
  }
  var ir,
    ur,
    sr,
    cr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    fr = lr(cr),
    dr = Fe({}, cr, { view: 0, detail: 0 }),
    pr = lr(dr),
    mr = Fe({}, dr, {
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
      getModifierState: _r,
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
        return "movementX" in e
          ? e.movementX
          : (e !== sr &&
              (sr && "mousemove" === e.type
                ? ((ir = e.screenX - sr.screenX), (ur = e.screenY - sr.screenY))
                : (ur = ir = 0),
              (sr = e)),
            ir);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ur;
      },
    }),
    hr = lr(mr),
    yr = lr(Fe({}, mr, { dataTransfer: 0 })),
    gr = lr(Fe({}, dr, { relatedTarget: 0 })),
    vr = lr(Fe({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    br = Fe({}, cr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    xr = lr(br),
    kr = lr(Fe({}, cr, { data: 0 })),
    wr = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Sr = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Cr = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Er(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = Cr[e]) && !!t[e];
  }
  function _r() {
    return Er;
  }
  var Pr = Fe({}, dr, {
      key: function (e) {
        if (e.key) {
          var t = wr[e.key] || e.key;
          if ("Unidentified" !== t) return t;
        }
        return "keypress" === e.type
          ? 13 === (e = rr(e))
            ? "Enter"
            : String.fromCharCode(e)
          : "keydown" === e.type || "keyup" === e.type
          ? Sr[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: _r,
      charCode: function (e) {
        return "keypress" === e.type ? rr(e) : 0;
      },
      keyCode: function (e) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      },
      which: function (e) {
        return "keypress" === e.type
          ? rr(e)
          : "keydown" === e.type || "keyup" === e.type
          ? e.keyCode
          : 0;
      },
    }),
    zr = lr(Pr),
    Tr = lr(
      Fe({}, mr, {
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
    Or = lr(
      Fe({}, dr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: _r,
      })
    ),
    jr = lr(Fe({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Nr = Fe({}, mr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Mr = lr(Nr),
    Rr = [9, 13, 27, 32],
    Ar = fe && "CompositionEvent" in window,
    Lr = null;
  fe && "documentMode" in document && (Lr = document.documentMode);
  var Ir = fe && "TextEvent" in window && !Lr,
    Fr = fe && (!Ar || (Lr && 8 < Lr && 11 >= Lr)),
    $r = String.fromCharCode(32),
    Dr = !1;
  function Vr(e, t) {
    switch (e) {
      case "keyup":
        return -1 !== Rr.indexOf(t.keyCode);
      case "keydown":
        return 229 !== t.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ur(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
  }
  var Br = !1;
  var Wr = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
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
  function Hr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!Wr[e.type] : "textarea" === t;
  }
  function Kr(e, t, n, r) {
    Pt(r),
      0 < (t = qo(t, "onChange")).length &&
        ((n = new fr("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Qr = null,
    qr = null;
  function Gr(e) {
    Do(e, 0);
  }
  function Xr(e) {
    if (qe(wa(e))) return e;
  }
  function Yr(e, t) {
    if ("change" === e) return t;
  }
  var Jr = !1;
  if (fe) {
    var Zr;
    if (fe) {
      var eo = "oninput" in document;
      if (!eo) {
        var to = document.createElement("div");
        to.setAttribute("oninput", "return;"),
          (eo = "function" == typeof to.oninput);
      }
      Zr = eo;
    } else Zr = !1;
    Jr = Zr && (!document.documentMode || 9 < document.documentMode);
  }
  function no() {
    Qr && (Qr.detachEvent("onpropertychange", ro), (qr = Qr = null));
  }
  function ro(e) {
    if ("value" === e.propertyName && Xr(qr)) {
      var t = [];
      Kr(t, qr, e, wt(e)), Nt(Gr, t);
    }
  }
  function oo(e, t, n) {
    "focusin" === e
      ? (no(), (qr = n), (Qr = t).attachEvent("onpropertychange", ro))
      : "focusout" === e && no();
  }
  function ao(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e)
      return Xr(qr);
  }
  function lo(e, t) {
    if ("click" === e) return Xr(t);
  }
  function io(e, t) {
    if ("input" === e || "change" === e) return Xr(t);
  }
  var uo =
    "function" == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        };
  function so(e, t) {
    if (uo(e, t)) return !0;
    if (
      "object" != typeof e ||
      null === e ||
      "object" != typeof t ||
      null === t
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!de.call(t, o) || !uo(e[o], t[o])) return !1;
    }
    return !0;
  }
  function co(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function fo(e, t) {
    var n,
      r = co(e);
    for (e = 0; r; ) {
      if (3 === r.nodeType) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e };
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
      r = co(r);
    }
  }
  function po(e, t) {
    return (
      !(!e || !t) &&
      (e === t ||
        ((!e || 3 !== e.nodeType) &&
          (t && 3 === t.nodeType
            ? po(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : !!e.compareDocumentPosition &&
              !!(16 & e.compareDocumentPosition(t)))))
    );
  }
  function mo() {
    for (var e = window, t = Ge(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = "string" == typeof t.contentWindow.location.href;
      } catch (e) {
        n = !1;
      }
      if (!n) break;
      t = Ge((e = t.contentWindow).document);
    }
    return t;
  }
  function ho(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      (("input" === t &&
        ("text" === e.type ||
          "search" === e.type ||
          "tel" === e.type ||
          "url" === e.type ||
          "password" === e.type)) ||
        "textarea" === t ||
        "true" === e.contentEditable)
    );
  }
  function yo(e) {
    var t = mo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      po(n.ownerDocument.documentElement, n)
    ) {
      if (null !== r && ho(n))
        if (
          ((t = r.start),
          void 0 === (e = r.end) && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          (e = ((t = n.ownerDocument || document) && t.defaultView) || window)
            .getSelection
        ) {
          e = e.getSelection();
          var o = n.textContent.length,
            a = Math.min(r.start, o);
          (r = void 0 === r.end ? a : Math.min(r.end, o)),
            !e.extend && a > r && ((o = r), (r = a), (a = o)),
            (o = fo(n, a));
          var l = fo(n, r);
          o &&
            l &&
            (1 !== e.rangeCount ||
              e.anchorNode !== o.node ||
              e.anchorOffset !== o.offset ||
              e.focusNode !== l.node ||
              e.focusOffset !== l.offset) &&
            ((t = t.createRange()).setStart(o.node, o.offset),
            e.removeAllRanges(),
            a > r
              ? (e.addRange(t), e.extend(l.node, l.offset))
              : (t.setEnd(l.node, l.offset), e.addRange(t)));
        }
      for (t = [], e = n; (e = e.parentNode); )
        1 === e.nodeType &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var go = fe && "documentMode" in document && 11 >= document.documentMode,
    vo = null,
    bo = null,
    xo = null,
    ko = !1;
  function wo(e, t, n) {
    var r =
      n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    ko ||
      null == vo ||
      vo !== Ge(r) ||
      ("selectionStart" in (r = vo) && ho(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : (r = {
            anchorNode: (r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          }),
      (xo && so(xo, r)) ||
        ((xo = r),
        0 < (r = qo(bo, "onSelect")).length &&
          ((t = new fr("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = vo))));
  }
  function So(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Co = {
      animationend: So("Animation", "AnimationEnd"),
      animationiteration: So("Animation", "AnimationIteration"),
      animationstart: So("Animation", "AnimationStart"),
      transitionend: So("Transition", "TransitionEnd"),
    },
    Eo = {},
    _o = {};
  function Po(e) {
    if (Eo[e]) return Eo[e];
    if (!Co[e]) return e;
    var t,
      n = Co[e];
    for (t in n) if (n.hasOwnProperty(t) && t in _o) return (Eo[e] = n[t]);
    return e;
  }
  fe &&
    ((_o = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Co.animationend.animation,
      delete Co.animationiteration.animation,
      delete Co.animationstart.animation),
    "TransitionEvent" in window || delete Co.transitionend.transition);
  var zo = Po("animationend"),
    To = Po("animationiteration"),
    Oo = Po("animationstart"),
    jo = Po("transitionend"),
    No = new Map(),
    Mo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ro(e, t) {
    No.set(e, t), se(t, [e]);
  }
  for (var Ao = 0; Ao < Mo.length; Ao++) {
    var Lo = Mo[Ao];
    Ro(Lo.toLowerCase(), "on" + (Lo[0].toUpperCase() + Lo.slice(1)));
  }
  Ro(zo, "onAnimationEnd"),
    Ro(To, "onAnimationIteration"),
    Ro(Oo, "onAnimationStart"),
    Ro("dblclick", "onDoubleClick"),
    Ro("focusin", "onFocus"),
    Ro("focusout", "onBlur"),
    Ro(jo, "onTransitionEnd"),
    ce("onMouseEnter", ["mouseout", "mouseover"]),
    ce("onMouseLeave", ["mouseout", "mouseover"]),
    ce("onPointerEnter", ["pointerout", "pointerover"]),
    ce("onPointerLeave", ["pointerout", "pointerover"]),
    se(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    se(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    se("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    se(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    se(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    se(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Io =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Fo = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Io)
    );
  function $o(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n),
      (function (e, t, n, r, o, a, l, i, u) {
        if ((Ut.apply(this, arguments), It)) {
          if (!It) throw Error(le(198));
          var s = Ft;
          (It = !1), (Ft = null), $t || (($t = !0), (Dt = s));
        }
      })(r, t, void 0, e),
      (e.currentTarget = null);
  }
  function Do(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var l = r.length - 1; 0 <= l; l--) {
            var i = r[l],
              u = i.instance,
              s = i.currentTarget;
            if (((i = i.listener), u !== a && o.isPropagationStopped()))
              break e;
            $o(o, i, s), (a = u);
          }
        else
          for (l = 0; l < r.length; l++) {
            if (
              ((u = (i = r[l]).instance),
              (s = i.currentTarget),
              (i = i.listener),
              u !== a && o.isPropagationStopped())
            )
              break e;
            $o(o, i, s), (a = u);
          }
      }
    }
    if ($t) throw ((e = Dt), ($t = !1), (Dt = null), e);
  }
  function Vo(e, t) {
    var n = t[ga];
    void 0 === n && (n = t[ga] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ho(t, e, 2, !1), n.add(r));
  }
  function Uo(e, t, n) {
    var r = 0;
    t && (r |= 4), Ho(n, e, r, t);
  }
  var Bo = "_reactListening" + Math.random().toString(36).slice(2);
  function Wo(e) {
    if (!e[Bo]) {
      (e[Bo] = !0),
        ie.forEach(function (t) {
          "selectionchange" !== t && (Fo.has(t) || Uo(t, !1, e), Uo(t, !0, e));
        });
      var t = 9 === e.nodeType ? e : e.ownerDocument;
      null === t || t[Bo] || ((t[Bo] = !0), Uo("selectionchange", !1, t));
    }
  }
  function Ho(e, t, n, r) {
    switch (Jn(t)) {
      case 1:
        var o = Qn;
        break;
      case 4:
        o = qn;
        break;
      default:
        o = Gn;
    }
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !Rt ||
        ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
        (o = !0),
      r
        ? void 0 !== o
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : void 0 !== o
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
  }
  function Ko(e, t, n, r, o) {
    var a = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
      e: for (;;) {
        if (null === r) return;
        var l = r.tag;
        if (3 === l || 4 === l) {
          var i = r.stateNode.containerInfo;
          if (i === o || (8 === i.nodeType && i.parentNode === o)) break;
          if (4 === l)
            for (l = r.return; null !== l; ) {
              var u = l.tag;
              if (
                (3 === u || 4 === u) &&
                ((u = l.stateNode.containerInfo) === o ||
                  (8 === u.nodeType && u.parentNode === o))
              )
                return;
              l = l.return;
            }
          for (; null !== i; ) {
            if (null === (l = xa(i))) return;
            if (5 === (u = l.tag) || 6 === u) {
              r = a = l;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
    Nt(function () {
      var r = a,
        o = wt(n),
        l = [];
      e: {
        var i = No.get(e);
        if (void 0 !== i) {
          var u = fr,
            s = e;
          switch (e) {
            case "keypress":
              if (0 === rr(n)) break e;
            case "keydown":
            case "keyup":
              u = zr;
              break;
            case "focusin":
              (s = "focus"), (u = gr);
              break;
            case "focusout":
              (s = "blur"), (u = gr);
              break;
            case "beforeblur":
            case "afterblur":
              u = gr;
              break;
            case "click":
              if (2 === n.button) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              u = hr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              u = yr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              u = Or;
              break;
            case zo:
            case To:
            case Oo:
              u = vr;
              break;
            case jo:
              u = jr;
              break;
            case "scroll":
              u = pr;
              break;
            case "wheel":
              u = Mr;
              break;
            case "copy":
            case "cut":
            case "paste":
              u = xr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              u = Tr;
          }
          var c = 0 != (4 & t),
            f = !c && "scroll" === e,
            d = c ? (null !== i ? i + "Capture" : null) : i;
          c = [];
          for (var p, m = r; null !== m; ) {
            var h = (p = m).stateNode;
            if (
              (5 === p.tag &&
                null !== h &&
                ((p = h),
                null !== d && null != (h = Mt(m, d)) && c.push(Qo(m, h, p))),
              f)
            )
              break;
            m = m.return;
          }
          0 < c.length &&
            ((i = new u(i, s, null, n, o)), l.push({ event: i, listeners: c }));
        }
      }
      if (0 == (7 & t)) {
        if (
          ((u = "mouseout" === e || "pointerout" === e),
          (!(i = "mouseover" === e || "pointerover" === e) ||
            n === kt ||
            !(s = n.relatedTarget || n.fromElement) ||
            (!xa(s) && !s[ya])) &&
            (u || i) &&
            ((i =
              o.window === o
                ? o
                : (i = o.ownerDocument)
                ? i.defaultView || i.parentWindow
                : window),
            u
              ? ((u = r),
                null !==
                  (s = (s = n.relatedTarget || n.toElement) ? xa(s) : null) &&
                  (s !== (f = Bt(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                  (s = null))
              : ((u = null), (s = r)),
            u !== s))
        ) {
          if (
            ((c = hr),
            (h = "onMouseLeave"),
            (d = "onMouseEnter"),
            (m = "mouse"),
            ("pointerout" !== e && "pointerover" !== e) ||
              ((c = Tr),
              (h = "onPointerLeave"),
              (d = "onPointerEnter"),
              (m = "pointer")),
            (f = null == u ? i : wa(u)),
            (p = null == s ? i : wa(s)),
            ((i = new c(h, m + "leave", u, n, o)).target = f),
            (i.relatedTarget = p),
            (h = null),
            xa(o) === r &&
              (((c = new c(d, m + "enter", s, n, o)).target = p),
              (c.relatedTarget = f),
              (h = c)),
            (f = h),
            u && s)
          )
            e: {
              for (d = s, m = 0, p = c = u; p; p = Go(p)) m++;
              for (p = 0, h = d; h; h = Go(h)) p++;
              for (; 0 < m - p; ) (c = Go(c)), m--;
              for (; 0 < p - m; ) (d = Go(d)), p--;
              for (; m--; ) {
                if (c === d || (null !== d && c === d.alternate)) break e;
                (c = Go(c)), (d = Go(d));
              }
              c = null;
            }
          else c = null;
          null !== u && Xo(l, i, u, c, !1),
            null !== s && null !== f && Xo(l, f, s, c, !0);
        }
        if (
          "select" ===
            (u =
              (i = r ? wa(r) : window).nodeName && i.nodeName.toLowerCase()) ||
          ("input" === u && "file" === i.type)
        )
          var y = Yr;
        else if (Hr(i))
          if (Jr) y = io;
          else {
            y = ao;
            var g = oo;
          }
        else
          (u = i.nodeName) &&
            "input" === u.toLowerCase() &&
            ("checkbox" === i.type || "radio" === i.type) &&
            (y = lo);
        switch (
          (y && (y = y(e, r))
            ? Kr(l, y, n, o)
            : (g && g(e, i, r),
              "focusout" === e &&
                (g = i._wrapperState) &&
                g.controlled &&
                "number" === i.type &&
                tt(i, "number", i.value)),
          (g = r ? wa(r) : window),
          e)
        ) {
          case "focusin":
            (Hr(g) || "true" === g.contentEditable) &&
              ((vo = g), (bo = r), (xo = null));
            break;
          case "focusout":
            xo = bo = vo = null;
            break;
          case "mousedown":
            ko = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ko = !1), wo(l, n, o);
            break;
          case "selectionchange":
            if (go) break;
          case "keydown":
          case "keyup":
            wo(l, n, o);
        }
        var v;
        if (Ar)
          e: {
            switch (e) {
              case "compositionstart":
                var b = "onCompositionStart";
                break e;
              case "compositionend":
                b = "onCompositionEnd";
                break e;
              case "compositionupdate":
                b = "onCompositionUpdate";
                break e;
            }
            b = void 0;
          }
        else
          Br
            ? Vr(e, n) && (b = "onCompositionEnd")
            : "keydown" === e &&
              229 === n.keyCode &&
              (b = "onCompositionStart");
        b &&
          (Fr &&
            "ko" !== n.locale &&
            (Br || "onCompositionStart" !== b
              ? "onCompositionEnd" === b && Br && (v = nr())
              : ((er = "value" in (Zn = o) ? Zn.value : Zn.textContent),
                (Br = !0))),
          0 < (g = qo(r, b)).length &&
            ((b = new kr(b, e, null, n, o)),
            l.push({ event: b, listeners: g }),
            v ? (b.data = v) : null !== (v = Ur(n)) && (b.data = v))),
          (v = Ir
            ? (function (e, t) {
                switch (e) {
                  case "compositionend":
                    return Ur(t);
                  case "keypress":
                    return 32 !== t.which ? null : ((Dr = !0), $r);
                  case "textInput":
                    return (e = t.data) === $r && Dr ? null : e;
                  default:
                    return null;
                }
              })(e, n)
            : (function (e, t) {
                if (Br)
                  return "compositionend" === e || (!Ar && Vr(e, t))
                    ? ((e = nr()), (tr = er = Zn = null), (Br = !1), e)
                    : null;
                switch (e) {
                  case "paste":
                  default:
                    return null;
                  case "keypress":
                    if (
                      !(t.ctrlKey || t.altKey || t.metaKey) ||
                      (t.ctrlKey && t.altKey)
                    ) {
                      if (t.char && 1 < t.char.length) return t.char;
                      if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                  case "compositionend":
                    return Fr && "ko" !== t.locale ? null : t.data;
                }
              })(e, n)) &&
            0 < (r = qo(r, "onBeforeInput")).length &&
            ((o = new kr("onBeforeInput", "beforeinput", null, n, o)),
            l.push({ event: o, listeners: r }),
            (o.data = v));
      }
      Do(l, t);
    });
  }
  function Qo(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function qo(e, t) {
    for (var n = t + "Capture", r = []; null !== e; ) {
      var o = e,
        a = o.stateNode;
      5 === o.tag &&
        null !== a &&
        ((o = a),
        null != (a = Mt(e, n)) && r.unshift(Qo(e, a, o)),
        null != (a = Mt(e, t)) && r.push(Qo(e, a, o))),
        (e = e.return);
    }
    return r;
  }
  function Go(e) {
    if (null === e) return null;
    do {
      e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
  }
  function Xo(e, t, n, r, o) {
    for (var a = t._reactName, l = []; null !== n && n !== r; ) {
      var i = n,
        u = i.alternate,
        s = i.stateNode;
      if (null !== u && u === r) break;
      5 === i.tag &&
        null !== s &&
        ((i = s),
        o
          ? null != (u = Mt(n, a)) && l.unshift(Qo(n, u, i))
          : o || (null != (u = Mt(n, a)) && l.push(Qo(n, u, i)))),
        (n = n.return);
    }
    0 !== l.length && e.push({ event: t, listeners: l });
  }
  var Yo = /\r\n?/g,
    Jo = /\u0000|\uFFFD/g;
  function Zo(e) {
    return ("string" == typeof e ? e : "" + e)
      .replace(Yo, "\n")
      .replace(Jo, "");
  }
  function ea(e, t, n) {
    if (((t = Zo(t)), Zo(e) !== t && n)) throw Error(le(425));
  }
  function ta() {}
  var na = null,
    ra = null;
  function oa(e, t) {
    return (
      "textarea" === e ||
      "noscript" === e ||
      "string" == typeof t.children ||
      "number" == typeof t.children ||
      ("object" == typeof t.dangerouslySetInnerHTML &&
        null !== t.dangerouslySetInnerHTML &&
        null != t.dangerouslySetInnerHTML.__html)
    );
  }
  var aa = "function" == typeof setTimeout ? setTimeout : void 0,
    la = "function" == typeof clearTimeout ? clearTimeout : void 0,
    ia = "function" == typeof Promise ? Promise : void 0,
    ua =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : void 0 !== ia
        ? function (e) {
            return ia.resolve(null).then(e).catch(sa);
          }
        : aa;
  function sa(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ca(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && 8 === o.nodeType))
        if ("/$" === (n = o.data)) {
          if (0 === r) return e.removeChild(o), void Wn(t);
          r--;
        } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
      n = o;
    } while (n);
    Wn(t);
  }
  function fa(e) {
    for (; null != e; e = e.nextSibling) {
      var t = e.nodeType;
      if (1 === t || 3 === t) break;
      if (8 === t) {
        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
        if ("/$" === t) return null;
      }
    }
    return e;
  }
  function da(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (8 === e.nodeType) {
        var n = e.data;
        if ("$" === n || "$!" === n || "$?" === n) {
          if (0 === t) return e;
          t--;
        } else "/$" === n && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var pa = Math.random().toString(36).slice(2),
    ma = "__reactFiber$" + pa,
    ha = "__reactProps$" + pa,
    ya = "__reactContainer$" + pa,
    ga = "__reactEvents$" + pa,
    va = "__reactListeners$" + pa,
    ba = "__reactHandles$" + pa;
  function xa(e) {
    var t = e[ma];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[ya] || n[ma])) {
        if (
          ((n = t.alternate),
          null !== t.child || (null !== n && null !== n.child))
        )
          for (e = da(e); null !== e; ) {
            if ((n = e[ma])) return n;
            e = da(e);
          }
        return t;
      }
      n = (e = n).parentNode;
    }
    return null;
  }
  function ka(e) {
    return !(e = e[ma] || e[ya]) ||
      (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
      ? null
      : e;
  }
  function wa(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(le(33));
  }
  function Sa(e) {
    return e[ha] || null;
  }
  var Ca = [],
    Ea = -1;
  function _a(e) {
    return { current: e };
  }
  function Pa(e) {
    0 > Ea || ((e.current = Ca[Ea]), (Ca[Ea] = null), Ea--);
  }
  function za(e, t) {
    Ea++, (Ca[Ea] = e.current), (e.current = t);
  }
  var Ta = {},
    Oa = _a(Ta),
    ja = _a(!1),
    Na = Ta;
  function Ma(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ta;
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
  function Ra(e) {
    return null != (e = e.childContextTypes);
  }
  function Aa() {
    Pa(ja), Pa(Oa);
  }
  function La(e, t, n) {
    if (Oa.current !== Ta) throw Error(le(168));
    za(Oa, t), za(ja, n);
  }
  function Ia(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), "function" != typeof r.getChildContext))
      return n;
    for (var o in (r = r.getChildContext()))
      if (!(o in t)) throw Error(le(108, We(e) || "Unknown", o));
    return Fe({}, n, r);
  }
  function Fa(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ta),
      (Na = Oa.current),
      za(Oa, e),
      za(ja, ja.current),
      !0
    );
  }
  function $a(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(le(169));
    n
      ? ((e = Ia(e, t, Na)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Pa(ja),
        Pa(Oa),
        za(Oa, e))
      : Pa(ja),
      za(ja, n);
  }
  var Da = null,
    Va = !1,
    Ua = !1;
  function Ba(e) {
    null === Da ? (Da = [e]) : Da.push(e);
  }
  function Wa() {
    if (!Ua && null !== Da) {
      Ua = !0;
      var e = 0,
        t = kn;
      try {
        var n = Da;
        for (kn = 1; e < n.length; e++) {
          var r = n[e];
          do {
            r = r(!0);
          } while (null !== r);
        }
        (Da = null), (Va = !1);
      } catch (t) {
        throw (null !== Da && (Da = Da.slice(e + 1)), qt(en, Wa), t);
      } finally {
        (kn = t), (Ua = !1);
      }
    }
    return null;
  }
  var Ha = [],
    Ka = 0,
    Qa = null,
    qa = 0,
    Ga = [],
    Xa = 0,
    Ya = null,
    Ja = 1,
    Za = "";
  function el(e, t) {
    (Ha[Ka++] = qa), (Ha[Ka++] = Qa), (Qa = e), (qa = t);
  }
  function tl(e, t, n) {
    (Ga[Xa++] = Ja), (Ga[Xa++] = Za), (Ga[Xa++] = Ya), (Ya = e);
    var r = Ja;
    e = Za;
    var o = 32 - un(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var a = 32 - un(t) + o;
    if (30 < a) {
      var l = o - (o % 5);
      (a = (r & ((1 << l) - 1)).toString(32)),
        (r >>= l),
        (o -= l),
        (Ja = (1 << (32 - un(t) + o)) | (n << o) | r),
        (Za = a + e);
    } else (Ja = (1 << a) | (n << o) | r), (Za = e);
  }
  function nl(e) {
    null !== e.return && (el(e, 1), tl(e, 1, 0));
  }
  function rl(e) {
    for (; e === Qa; )
      (Qa = Ha[--Ka]), (Ha[Ka] = null), (qa = Ha[--Ka]), (Ha[Ka] = null);
    for (; e === Ya; )
      (Ya = Ga[--Xa]),
        (Ga[Xa] = null),
        (Za = Ga[--Xa]),
        (Ga[Xa] = null),
        (Ja = Ga[--Xa]),
        (Ga[Xa] = null);
  }
  var ol = null,
    al = null,
    ll = !1,
    il = null;
  function ul(e, t) {
    var n = Nc(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      null === (t = e.deletions)
        ? ((e.deletions = [n]), (e.flags |= 16))
        : t.push(n);
  }
  function sl(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          null !==
            (t =
              1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t) &&
          ((e.stateNode = t), (ol = e), (al = fa(t.firstChild)), !0)
        );
      case 6:
        return (
          null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
          ((e.stateNode = t), (ol = e), (al = null), !0)
        );
      case 13:
        return (
          null !== (t = 8 !== t.nodeType ? null : t) &&
          ((n = null !== Ya ? { id: Ja, overflow: Za } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          ((n = Nc(18, null, null, 0)).stateNode = t),
          (n.return = e),
          (e.child = n),
          (ol = e),
          (al = null),
          !0)
        );
      default:
        return !1;
    }
  }
  function cl(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
  }
  function fl(e) {
    if (ll) {
      var t = al;
      if (t) {
        var n = t;
        if (!sl(e, t)) {
          if (cl(e)) throw Error(le(418));
          t = fa(n.nextSibling);
          var r = ol;
          t && sl(e, t)
            ? ul(r, n)
            : ((e.flags = (-4097 & e.flags) | 2), (ll = !1), (ol = e));
        }
      } else {
        if (cl(e)) throw Error(le(418));
        (e.flags = (-4097 & e.flags) | 2), (ll = !1), (ol = e);
      }
    }
  }
  function dl(e) {
    for (
      e = e.return;
      null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

    )
      e = e.return;
    ol = e;
  }
  function pl(e) {
    if (e !== ol) return !1;
    if (!ll) return dl(e), (ll = !0), !1;
    var t;
    if (
      ((t = 3 !== e.tag) &&
        !(t = 5 !== e.tag) &&
        (t =
          "head" !== (t = e.type) &&
          "body" !== t &&
          !oa(e.type, e.memoizedProps)),
      t && (t = al))
    ) {
      if (cl(e)) throw (ml(), Error(le(418)));
      for (; t; ) ul(e, t), (t = fa(t.nextSibling));
    }
    if ((dl(e), 13 === e.tag)) {
      if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
        throw Error(le(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("/$" === n) {
              if (0 === t) {
                al = fa(e.nextSibling);
                break e;
              }
              t--;
            } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
          }
          e = e.nextSibling;
        }
        al = null;
      }
    } else al = ol ? fa(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ml() {
    for (var e = al; e; ) e = fa(e.nextSibling);
  }
  function hl() {
    (al = ol = null), (ll = !1);
  }
  function yl(e) {
    null === il ? (il = [e]) : il.push(e);
  }
  var gl = ke.ReactCurrentBatchConfig;
  function vl(e, t, n) {
    if (
      null !== (e = n.ref) &&
      "function" != typeof e &&
      "object" != typeof e
    ) {
      if (n._owner) {
        if ((n = n._owner)) {
          if (1 !== n.tag) throw Error(le(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(le(147, e));
        var o = r,
          a = "" + e;
        return null !== t &&
          null !== t.ref &&
          "function" == typeof t.ref &&
          t.ref._stringRef === a
          ? t.ref
          : ((t = function (e) {
              var t = o.refs;
              null === e ? delete t[a] : (t[a] = e);
            }),
            (t._stringRef = a),
            t);
      }
      if ("string" != typeof e) throw Error(le(284));
      if (!n._owner) throw Error(le(290, e));
    }
    return e;
  }
  function bl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        le(
          31,
          "[object Object]" === e
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function xl(e) {
    return (0, e._init)(e._payload);
  }
  function kl(e) {
    function t(t, n) {
      if (e) {
        var r = t.deletions;
        null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
      }
    }
    function n(n, r) {
      if (!e) return null;
      for (; null !== r; ) t(n, r), (r = r.sibling);
      return null;
    }
    function r(e, t) {
      for (e = new Map(); null !== t; )
        null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
      return e;
    }
    function o(e, t) {
      return ((e = Rc(e, t)).index = 0), (e.sibling = null), e;
    }
    function a(t, n, r) {
      return (
        (t.index = r),
        e
          ? null !== (r = t.alternate)
            ? (r = r.index) < n
              ? ((t.flags |= 2), n)
              : r
            : ((t.flags |= 2), n)
          : ((t.flags |= 1048576), n)
      );
    }
    function l(t) {
      return e && null === t.alternate && (t.flags |= 2), t;
    }
    function i(e, t, n, r) {
      return null === t || 6 !== t.tag
        ? (((t = Fc(n, e.mode, r)).return = e), t)
        : (((t = o(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
      var a = n.type;
      return a === Ce
        ? c(e, t, n.props.children, r, n.key)
        : null !== t &&
          (t.elementType === a ||
            ("object" == typeof a &&
              null !== a &&
              a.$$typeof === Me &&
              xl(a) === t.type))
        ? (((r = o(t, n.props)).ref = vl(e, t, n)), (r.return = e), r)
        : (((r = Ac(n.type, n.key, n.props, null, e.mode, r)).ref = vl(
            e,
            t,
            n
          )),
          (r.return = e),
          r);
    }
    function s(e, t, n, r) {
      return null === t ||
        4 !== t.tag ||
        t.stateNode.containerInfo !== n.containerInfo ||
        t.stateNode.implementation !== n.implementation
        ? (((t = $c(n, e.mode, r)).return = e), t)
        : (((t = o(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, a) {
      return null === t || 7 !== t.tag
        ? (((t = Lc(n, e.mode, r, a)).return = e), t)
        : (((t = o(t, n)).return = e), t);
    }
    function f(e, t, n) {
      if (("string" == typeof t && "" !== t) || "number" == typeof t)
        return ((t = Fc("" + t, e.mode, n)).return = e), t;
      if ("object" == typeof t && null !== t) {
        switch (t.$$typeof) {
          case we:
            return (
              ((n = Ac(t.type, t.key, t.props, null, e.mode, n)).ref = vl(
                e,
                null,
                t
              )),
              (n.return = e),
              n
            );
          case Se:
            return ((t = $c(t, e.mode, n)).return = e), t;
          case Me:
            return f(e, (0, t._init)(t._payload), n);
        }
        if (nt(t) || Le(t)) return ((t = Lc(t, e.mode, n, null)).return = e), t;
        bl(e, t);
      }
      return null;
    }
    function d(e, t, n, r) {
      var o = null !== t ? t.key : null;
      if (("string" == typeof n && "" !== n) || "number" == typeof n)
        return null !== o ? null : i(e, t, "" + n, r);
      if ("object" == typeof n && null !== n) {
        switch (n.$$typeof) {
          case we:
            return n.key === o ? u(e, t, n, r) : null;
          case Se:
            return n.key === o ? s(e, t, n, r) : null;
          case Me:
            return d(e, t, (o = n._init)(n._payload), r);
        }
        if (nt(n) || Le(n)) return null !== o ? null : c(e, t, n, r, null);
        bl(e, n);
      }
      return null;
    }
    function p(e, t, n, r, o) {
      if (("string" == typeof r && "" !== r) || "number" == typeof r)
        return i(t, (e = e.get(n) || null), "" + r, o);
      if ("object" == typeof r && null !== r) {
        switch (r.$$typeof) {
          case we:
            return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
          case Se:
            return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
          case Me:
            return p(e, t, n, (0, r._init)(r._payload), o);
        }
        if (nt(r) || Le(r)) return c(t, (e = e.get(n) || null), r, o, null);
        bl(t, r);
      }
      return null;
    }
    function m(o, l, i, u) {
      for (
        var s = null, c = null, m = l, h = (l = 0), y = null;
        null !== m && h < i.length;
        h++
      ) {
        m.index > h ? ((y = m), (m = null)) : (y = m.sibling);
        var g = d(o, m, i[h], u);
        if (null === g) {
          null === m && (m = y);
          break;
        }
        e && m && null === g.alternate && t(o, m),
          (l = a(g, l, h)),
          null === c ? (s = g) : (c.sibling = g),
          (c = g),
          (m = y);
      }
      if (h === i.length) return n(o, m), ll && el(o, h), s;
      if (null === m) {
        for (; h < i.length; h++)
          null !== (m = f(o, i[h], u)) &&
            ((l = a(m, l, h)), null === c ? (s = m) : (c.sibling = m), (c = m));
        return ll && el(o, h), s;
      }
      for (m = r(o, m); h < i.length; h++)
        null !== (y = p(m, o, h, i[h], u)) &&
          (e && null !== y.alternate && m.delete(null === y.key ? h : y.key),
          (l = a(y, l, h)),
          null === c ? (s = y) : (c.sibling = y),
          (c = y));
      return (
        e &&
          m.forEach(function (e) {
            return t(o, e);
          }),
        ll && el(o, h),
        s
      );
    }
    function h(o, l, i, u) {
      var s = Le(i);
      if ("function" != typeof s) throw Error(le(150));
      if (null == (i = s.call(i))) throw Error(le(151));
      for (
        var c = (s = null), m = l, h = (l = 0), y = null, g = i.next();
        null !== m && !g.done;
        h++, g = i.next()
      ) {
        m.index > h ? ((y = m), (m = null)) : (y = m.sibling);
        var v = d(o, m, g.value, u);
        if (null === v) {
          null === m && (m = y);
          break;
        }
        e && m && null === v.alternate && t(o, m),
          (l = a(v, l, h)),
          null === c ? (s = v) : (c.sibling = v),
          (c = v),
          (m = y);
      }
      if (g.done) return n(o, m), ll && el(o, h), s;
      if (null === m) {
        for (; !g.done; h++, g = i.next())
          null !== (g = f(o, g.value, u)) &&
            ((l = a(g, l, h)), null === c ? (s = g) : (c.sibling = g), (c = g));
        return ll && el(o, h), s;
      }
      for (m = r(o, m); !g.done; h++, g = i.next())
        null !== (g = p(m, o, h, g.value, u)) &&
          (e && null !== g.alternate && m.delete(null === g.key ? h : g.key),
          (l = a(g, l, h)),
          null === c ? (s = g) : (c.sibling = g),
          (c = g));
      return (
        e &&
          m.forEach(function (e) {
            return t(o, e);
          }),
        ll && el(o, h),
        s
      );
    }
    return function e(r, a, i, u) {
      if (
        ("object" == typeof i &&
          null !== i &&
          i.type === Ce &&
          null === i.key &&
          (i = i.props.children),
        "object" == typeof i && null !== i)
      ) {
        switch (i.$$typeof) {
          case we:
            e: {
              for (var s = i.key, c = a; null !== c; ) {
                if (c.key === s) {
                  if ((s = i.type) === Ce) {
                    if (7 === c.tag) {
                      n(r, c.sibling),
                        ((a = o(c, i.props.children)).return = r),
                        (r = a);
                      break e;
                    }
                  } else if (
                    c.elementType === s ||
                    ("object" == typeof s &&
                      null !== s &&
                      s.$$typeof === Me &&
                      xl(s) === c.type)
                  ) {
                    n(r, c.sibling),
                      ((a = o(c, i.props)).ref = vl(r, c, i)),
                      (a.return = r),
                      (r = a);
                    break e;
                  }
                  n(r, c);
                  break;
                }
                t(r, c), (c = c.sibling);
              }
              i.type === Ce
                ? (((a = Lc(i.props.children, r.mode, u, i.key)).return = r),
                  (r = a))
                : (((u = Ac(i.type, i.key, i.props, null, r.mode, u)).ref = vl(
                    r,
                    a,
                    i
                  )),
                  (u.return = r),
                  (r = u));
            }
            return l(r);
          case Se:
            e: {
              for (c = i.key; null !== a; ) {
                if (a.key === c) {
                  if (
                    4 === a.tag &&
                    a.stateNode.containerInfo === i.containerInfo &&
                    a.stateNode.implementation === i.implementation
                  ) {
                    n(r, a.sibling),
                      ((a = o(a, i.children || [])).return = r),
                      (r = a);
                    break e;
                  }
                  n(r, a);
                  break;
                }
                t(r, a), (a = a.sibling);
              }
              ((a = $c(i, r.mode, u)).return = r), (r = a);
            }
            return l(r);
          case Me:
            return e(r, a, (c = i._init)(i._payload), u);
        }
        if (nt(i)) return m(r, a, i, u);
        if (Le(i)) return h(r, a, i, u);
        bl(r, i);
      }
      return ("string" == typeof i && "" !== i) || "number" == typeof i
        ? ((i = "" + i),
          null !== a && 6 === a.tag
            ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
            : (n(r, a), ((a = Fc(i, r.mode, u)).return = r), (r = a)),
          l(r))
        : n(r, a);
    };
  }
  var wl = kl(!0),
    Sl = kl(!1),
    Cl = _a(null),
    El = null,
    _l = null,
    Pl = null;
  function zl() {
    Pl = _l = El = null;
  }
  function Tl(e) {
    var t = Cl.current;
    Pa(Cl), (e._currentValue = t);
  }
  function Ol(e, t, n) {
    for (; null !== e; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
          : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function jl(e, t) {
    (El = e),
      (Pl = _l = null),
      null !== (e = e.dependencies) &&
        null !== e.firstContext &&
        (0 != (e.lanes & t) && (xu = !0), (e.firstContext = null));
  }
  function Nl(e) {
    var t = e._currentValue;
    if (Pl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), null === _l)) {
        if (null === El) throw Error(le(308));
        (_l = e), (El.dependencies = { lanes: 0, firstContext: e });
      } else _l = _l.next = e;
    return t;
  }
  var Ml = null;
  function Rl(e) {
    null === Ml ? (Ml = [e]) : Ml.push(e);
  }
  function Al(e, t, n, r) {
    var o = t.interleaved;
    return (
      null === o ? ((n.next = n), Rl(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      Ll(e, r)
    );
  }
  function Ll(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
      (e.childLanes |= t),
        null !== (n = e.alternate) && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return 3 === n.tag ? n.stateNode : null;
  }
  var Il = !1;
  function Fl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function $l(e, t) {
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
  function Dl(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Vl(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & Ts))) {
      var o = r.pending;
      return (
        null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        Ll(e, n)
      );
    }
    return (
      null === (o = r.interleaved)
        ? ((t.next = t), Rl(r))
        : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      Ll(e, n)
    );
  }
  function Ul(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
      var r = t.lanes;
      (n |= r &= e.pendingLanes), (t.lanes = n), xn(e, n);
    }
  }
  function Bl(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
      var o = null,
        a = null;
      if (null !== (n = n.firstBaseUpdate)) {
        do {
          var l = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          null === a ? (o = a = l) : (a = a.next = l), (n = n.next);
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
    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Wl(e, t, n, r) {
    var o = e.updateQueue;
    Il = !1;
    var a = o.firstBaseUpdate,
      l = o.lastBaseUpdate,
      i = o.shared.pending;
    if (null !== i) {
      o.shared.pending = null;
      var u = i,
        s = u.next;
      (u.next = null), null === l ? (a = s) : (l.next = s), (l = u);
      var c = e.alternate;
      null !== c &&
        (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
        (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
        (c.lastBaseUpdate = u));
    }
    if (null !== a) {
      var f = o.baseState;
      for (l = 0, c = s = u = null, i = a; ; ) {
        var d = i.lane,
          p = i.eventTime;
        if ((r & d) === d) {
          null !== c &&
            (c = c.next =
              {
                eventTime: p,
                lane: 0,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              });
          e: {
            var m = e,
              h = i;
            switch (((d = t), (p = n), h.tag)) {
              case 1:
                if ("function" == typeof (m = h.payload)) {
                  f = m.call(p, f, d);
                  break e;
                }
                f = m;
                break e;
              case 3:
                m.flags = (-65537 & m.flags) | 128;
              case 0:
                if (
                  null ==
                  (d =
                    "function" == typeof (m = h.payload) ? m.call(p, f, d) : m)
                )
                  break e;
                f = Fe({}, f, d);
                break e;
              case 2:
                Il = !0;
            }
          }
          null !== i.callback &&
            0 !== i.lane &&
            ((e.flags |= 64),
            null === (d = o.effects) ? (o.effects = [i]) : d.push(i));
        } else
          (p = {
            eventTime: p,
            lane: d,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
            (l |= d);
        if (null === (i = i.next)) {
          if (null === (i = o.shared.pending)) break;
          (i = (d = i).next),
            (d.next = null),
            (o.lastBaseUpdate = d),
            (o.shared.pending = null);
        }
      }
      if (
        (null === c && (u = f),
        (o.baseState = u),
        (o.firstBaseUpdate = s),
        (o.lastBaseUpdate = c),
        null !== (t = o.shared.interleaved))
      ) {
        o = t;
        do {
          (l |= o.lane), (o = o.next);
        } while (o !== t);
      } else null === a && (o.shared.lanes = 0);
      (Is |= l), (e.lanes = l), (e.memoizedState = f);
    }
  }
  function Hl(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (null !== o) {
          if (((r.callback = null), (r = n), "function" != typeof o))
            throw Error(le(191, o));
          o.call(r);
        }
      }
  }
  var Kl = {},
    Ql = _a(Kl),
    ql = _a(Kl),
    Gl = _a(Kl);
  function Xl(e) {
    if (e === Kl) throw Error(le(174));
    return e;
  }
  function Yl(e, t) {
    switch ((za(Gl, t), za(ql, e), za(Ql, Kl), (e = t.nodeType))) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : st(null, "");
        break;
      default:
        t = st(
          (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
          (e = e.tagName)
        );
    }
    Pa(Ql), za(Ql, t);
  }
  function Jl() {
    Pa(Ql), Pa(ql), Pa(Gl);
  }
  function Zl(e) {
    Xl(Gl.current);
    var t = Xl(Ql.current),
      n = st(t, e.type);
    t !== n && (za(ql, e), za(Ql, n));
  }
  function ei(e) {
    ql.current === e && (Pa(Ql), Pa(ql));
  }
  var ti = _a(0);
  function ni(e) {
    for (var t = e; null !== t; ) {
      if (13 === t.tag) {
        var n = t.memoizedState;
        if (
          null !== n &&
          (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
        )
          return t;
      } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
        if (0 != (128 & t.flags)) return t;
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
  var ri = [];
  function oi() {
    for (var e = 0; e < ri.length; e++)
      ri[e]._workInProgressVersionPrimary = null;
    ri.length = 0;
  }
  var ai = ke.ReactCurrentDispatcher,
    li = ke.ReactCurrentBatchConfig,
    ii = 0,
    ui = null,
    si = null,
    ci = null,
    fi = !1,
    di = !1,
    pi = 0,
    mi = 0;
  function hi() {
    throw Error(le(321));
  }
  function yi(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!uo(e[n], t[n])) return !1;
    return !0;
  }
  function gi(e, t, n, r, o, a) {
    if (
      ((ii = a),
      (ui = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ai.current = null === e || null === e.memoizedState ? eu : tu),
      (e = n(r, o)),
      di)
    ) {
      a = 0;
      do {
        if (((di = !1), (pi = 0), 25 <= a)) throw Error(le(301));
        (a += 1),
          (ci = si = null),
          (t.updateQueue = null),
          (ai.current = nu),
          (e = n(r, o));
      } while (di);
    }
    if (
      ((ai.current = Zi),
      (t = null !== si && null !== si.next),
      (ii = 0),
      (ci = si = ui = null),
      (fi = !1),
      t)
    )
      throw Error(le(300));
    return e;
  }
  function vi() {
    var e = 0 !== pi;
    return (pi = 0), e;
  }
  function bi() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return null === ci ? (ui.memoizedState = ci = e) : (ci = ci.next = e), ci;
  }
  function xi() {
    if (null === si) {
      var e = ui.alternate;
      e = null !== e ? e.memoizedState : null;
    } else e = si.next;
    var t = null === ci ? ui.memoizedState : ci.next;
    if (null !== t) (ci = t), (si = e);
    else {
      if (null === e) throw Error(le(310));
      (e = {
        memoizedState: (si = e).memoizedState,
        baseState: si.baseState,
        baseQueue: si.baseQueue,
        queue: si.queue,
        next: null,
      }),
        null === ci ? (ui.memoizedState = ci = e) : (ci = ci.next = e);
    }
    return ci;
  }
  function ki(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  function wi(e) {
    var t = xi(),
      n = t.queue;
    if (null === n) throw Error(le(311));
    n.lastRenderedReducer = e;
    var r = si,
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
      (a = o.next), (r = r.baseState);
      var i = (l = null),
        u = null,
        s = a;
      do {
        var c = s.lane;
        if ((ii & c) === c)
          null !== u &&
            (u = u.next =
              {
                lane: 0,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null,
              }),
            (r = s.hasEagerState ? s.eagerState : e(r, s.action));
        else {
          var f = {
            lane: c,
            action: s.action,
            hasEagerState: s.hasEagerState,
            eagerState: s.eagerState,
            next: null,
          };
          null === u ? ((i = u = f), (l = r)) : (u = u.next = f),
            (ui.lanes |= c),
            (Is |= c);
        }
        s = s.next;
      } while (null !== s && s !== a);
      null === u ? (l = r) : (u.next = i),
        uo(r, t.memoizedState) || (xu = !0),
        (t.memoizedState = r),
        (t.baseState = l),
        (t.baseQueue = u),
        (n.lastRenderedState = r);
    }
    if (null !== (e = n.interleaved)) {
      o = e;
      do {
        (a = o.lane), (ui.lanes |= a), (Is |= a), (o = o.next);
      } while (o !== e);
    } else null === o && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Si(e) {
    var t = xi(),
      n = t.queue;
    if (null === n) throw Error(le(311));
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
      uo(a, t.memoizedState) || (xu = !0),
        (t.memoizedState = a),
        null === t.baseQueue && (t.baseState = a),
        (n.lastRenderedState = a);
    }
    return [a, r];
  }
  function Ci() {}
  function Ei(e, t) {
    var n = ui,
      r = xi(),
      o = t(),
      a = !uo(r.memoizedState, o);
    if (
      (a && ((r.memoizedState = o), (xu = !0)),
      (r = r.queue),
      Ii(zi.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || a || (null !== ci && 1 & ci.memoizedState.tag))
    ) {
      if (
        ((n.flags |= 2048),
        Ni(9, Pi.bind(null, n, r, o, t), void 0, null),
        null === Os)
      )
        throw Error(le(349));
      0 != (30 & ii) || _i(n, t, o);
    }
    return o;
  }
  function _i(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      null === (t = ui.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (ui.updateQueue = t),
          (t.stores = [e]))
        : null === (n = t.stores)
        ? (t.stores = [e])
        : n.push(e);
  }
  function Pi(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ti(t) && Oi(e);
  }
  function zi(e, t, n) {
    return n(function () {
      Ti(t) && Oi(e);
    });
  }
  function Ti(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !uo(e, n);
    } catch (e) {
      return !0;
    }
  }
  function Oi(e) {
    var t = Ll(e, 1);
    null !== t && rc(t, e, 1, -1);
  }
  function ji(e) {
    var t = bi();
    return (
      "function" == typeof e && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ki,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Gi.bind(null, ui, e)),
      [t.memoizedState, e]
    );
  }
  function Ni(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      null === (t = ui.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (ui.updateQueue = t),
          (t.lastEffect = e.next = e))
        : null === (n = t.lastEffect)
        ? (t.lastEffect = e.next = e)
        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
    );
  }
  function Mi() {
    return xi().memoizedState;
  }
  function Ri(e, t, n, r) {
    var o = bi();
    (ui.flags |= e),
      (o.memoizedState = Ni(1 | t, n, void 0, void 0 === r ? null : r));
  }
  function Ai(e, t, n, r) {
    var o = xi();
    r = void 0 === r ? null : r;
    var a = void 0;
    if (null !== si) {
      var l = si.memoizedState;
      if (((a = l.destroy), null !== r && yi(r, l.deps)))
        return void (o.memoizedState = Ni(t, n, a, r));
    }
    (ui.flags |= e), (o.memoizedState = Ni(1 | t, n, a, r));
  }
  function Li(e, t) {
    return Ri(8390656, 8, e, t);
  }
  function Ii(e, t) {
    return Ai(2048, 8, e, t);
  }
  function Fi(e, t) {
    return Ai(4, 2, e, t);
  }
  function $i(e, t) {
    return Ai(4, 4, e, t);
  }
  function Di(e, t) {
    return "function" == typeof t
      ? ((e = e()),
        t(e),
        function () {
          t(null);
        })
      : null != t
      ? ((e = e()),
        (t.current = e),
        function () {
          t.current = null;
        })
      : void 0;
  }
  function Vi(e, t, n) {
    return (
      (n = null != n ? n.concat([e]) : null), Ai(4, 4, Di.bind(null, t, e), n)
    );
  }
  function Ui() {}
  function Bi(e, t) {
    var n = xi();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && yi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Wi(e, t) {
    var n = xi();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && yi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Hi(e, t, n) {
    return 0 == (21 & ii)
      ? (e.baseState && ((e.baseState = !1), (xu = !0)), (e.memoizedState = n))
      : (uo(n, t) ||
          ((n = gn()), (ui.lanes |= n), (Is |= n), (e.baseState = !0)),
        t);
  }
  function Ki(e, t) {
    var n = kn;
    (kn = 0 !== n && 4 > n ? n : 4), e(!0);
    var r = li.transition;
    li.transition = {};
    try {
      e(!1), t();
    } finally {
      (kn = n), (li.transition = r);
    }
  }
  function Qi() {
    return xi().memoizedState;
  }
  function qi(e, t, n) {
    var r = nc(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Xi(e))
    )
      Yi(t, n);
    else if (null !== (n = Al(e, t, n, r))) {
      rc(n, e, r, tc()), Ji(n, t, r);
    }
  }
  function Gi(e, t, n) {
    var r = nc(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Xi(e)) Yi(t, o);
    else {
      var a = e.alternate;
      if (
        0 === e.lanes &&
        (null === a || 0 === a.lanes) &&
        null !== (a = t.lastRenderedReducer)
      )
        try {
          var l = t.lastRenderedState,
            i = a(l, n);
          if (((o.hasEagerState = !0), (o.eagerState = i), uo(i, l))) {
            var u = t.interleaved;
            return (
              null === u
                ? ((o.next = o), Rl(t))
                : ((o.next = u.next), (u.next = o)),
              void (t.interleaved = o)
            );
          }
        } catch (e) {}
      null !== (n = Al(e, t, o, r)) && (rc(n, e, r, (o = tc())), Ji(n, t, r));
    }
  }
  function Xi(e) {
    var t = e.alternate;
    return e === ui || (null !== t && t === ui);
  }
  function Yi(e, t) {
    di = fi = !0;
    var n = e.pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Ji(e, t, n) {
    if (0 != (4194240 & n)) {
      var r = t.lanes;
      (n |= r &= e.pendingLanes), (t.lanes = n), xn(e, n);
    }
  }
  var Zi = {
      readContext: Nl,
      useCallback: hi,
      useContext: hi,
      useEffect: hi,
      useImperativeHandle: hi,
      useInsertionEffect: hi,
      useLayoutEffect: hi,
      useMemo: hi,
      useReducer: hi,
      useRef: hi,
      useState: hi,
      useDebugValue: hi,
      useDeferredValue: hi,
      useTransition: hi,
      useMutableSource: hi,
      useSyncExternalStore: hi,
      useId: hi,
      unstable_isNewReconciler: !1,
    },
    eu = {
      readContext: Nl,
      useCallback: function (e, t) {
        return (bi().memoizedState = [e, void 0 === t ? null : t]), e;
      },
      useContext: Nl,
      useEffect: Li,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          Ri(4194308, 4, Di.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ri(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ri(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = bi();
        return (
          (t = void 0 === t ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = bi();
        return (
          (t = void 0 !== n ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = qi.bind(null, ui, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        return (e = { current: e }), (bi().memoizedState = e);
      },
      useState: ji,
      useDebugValue: Ui,
      useDeferredValue: function (e) {
        return (bi().memoizedState = e);
      },
      useTransition: function () {
        var e = ji(!1),
          t = e[0];
        return (e = Ki.bind(null, e[1])), (bi().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ui,
          o = bi();
        if (ll) {
          if (void 0 === n) throw Error(le(407));
          n = n();
        } else {
          if (((n = t()), null === Os)) throw Error(le(349));
          0 != (30 & ii) || _i(r, t, n);
        }
        o.memoizedState = n;
        var a = { value: n, getSnapshot: t };
        return (
          (o.queue = a),
          Li(zi.bind(null, r, a, e), [e]),
          (r.flags |= 2048),
          Ni(9, Pi.bind(null, r, a, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = bi(),
          t = Os.identifierPrefix;
        if (ll) {
          var n = Za;
          (t =
            ":" +
            t +
            "R" +
            (n = (Ja & ~(1 << (32 - un(Ja) - 1))).toString(32) + n)),
            0 < (n = pi++) && (t += "H" + n.toString(32)),
            (t += ":");
        } else t = ":" + t + "r" + (n = mi++).toString(32) + ":";
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    tu = {
      readContext: Nl,
      useCallback: Bi,
      useContext: Nl,
      useEffect: Ii,
      useImperativeHandle: Vi,
      useInsertionEffect: Fi,
      useLayoutEffect: $i,
      useMemo: Wi,
      useReducer: wi,
      useRef: Mi,
      useState: function () {
        return wi(ki);
      },
      useDebugValue: Ui,
      useDeferredValue: function (e) {
        return Hi(xi(), si.memoizedState, e);
      },
      useTransition: function () {
        return [wi(ki)[0], xi().memoizedState];
      },
      useMutableSource: Ci,
      useSyncExternalStore: Ei,
      useId: Qi,
      unstable_isNewReconciler: !1,
    },
    nu = {
      readContext: Nl,
      useCallback: Bi,
      useContext: Nl,
      useEffect: Ii,
      useImperativeHandle: Vi,
      useInsertionEffect: Fi,
      useLayoutEffect: $i,
      useMemo: Wi,
      useReducer: Si,
      useRef: Mi,
      useState: function () {
        return Si(ki);
      },
      useDebugValue: Ui,
      useDeferredValue: function (e) {
        var t = xi();
        return null === si ? (t.memoizedState = e) : Hi(t, si.memoizedState, e);
      },
      useTransition: function () {
        return [Si(ki)[0], xi().memoizedState];
      },
      useMutableSource: Ci,
      useSyncExternalStore: Ei,
      useId: Qi,
      unstable_isNewReconciler: !1,
    };
  function ru(e, t) {
    if (e && e.defaultProps) {
      for (var n in ((t = Fe({}, t)), (e = e.defaultProps)))
        void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ou(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : Fe({}, t, n)),
      (e.memoizedState = n),
      0 === e.lanes && (e.updateQueue.baseState = n);
  }
  var au = {
    isMounted: function (e) {
      return !!(e = e._reactInternals) && Bt(e) === e;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = tc(),
        o = nc(e),
        a = Dl(r, o);
      (a.payload = t),
        null != n && (a.callback = n),
        null !== (t = Vl(e, a, o)) && (rc(t, e, o, r), Ul(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = tc(),
        o = nc(e),
        a = Dl(r, o);
      (a.tag = 1),
        (a.payload = t),
        null != n && (a.callback = n),
        null !== (t = Vl(e, a, o)) && (rc(t, e, o, r), Ul(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = tc(),
        r = nc(e),
        o = Dl(n, r);
      (o.tag = 2),
        null != t && (o.callback = t),
        null !== (t = Vl(e, o, r)) && (rc(t, e, r, n), Ul(t, e, r));
    },
  };
  function lu(e, t, n, r, o, a, l) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate
      ? e.shouldComponentUpdate(r, a, l)
      : !t.prototype ||
          !t.prototype.isPureReactComponent ||
          !so(n, r) ||
          !so(o, a);
  }
  function iu(e, t, n) {
    var r = !1,
      o = Ta,
      a = t.contextType;
    return (
      "object" == typeof a && null !== a
        ? (a = Nl(a))
        : ((o = Ra(t) ? Na : Oa.current),
          (a = (r = null != (r = t.contextTypes)) ? Ma(e, o) : Ta)),
      (t = new t(n, a)),
      (e.memoizedState =
        null !== t.state && void 0 !== t.state ? t.state : null),
      (t.updater = au),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      t
    );
  }
  function uu(e, t, n, r) {
    (e = t.state),
      "function" == typeof t.componentWillReceiveProps &&
        t.componentWillReceiveProps(n, r),
      "function" == typeof t.UNSAFE_componentWillReceiveProps &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && au.enqueueReplaceState(t, t.state, null);
  }
  function su(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Fl(e);
    var a = t.contextType;
    "object" == typeof a && null !== a
      ? (o.context = Nl(a))
      : ((a = Ra(t) ? Na : Oa.current), (o.context = Ma(e, a))),
      (o.state = e.memoizedState),
      "function" == typeof (a = t.getDerivedStateFromProps) &&
        (ou(e, t, a, n), (o.state = e.memoizedState)),
      "function" == typeof t.getDerivedStateFromProps ||
        "function" == typeof o.getSnapshotBeforeUpdate ||
        ("function" != typeof o.UNSAFE_componentWillMount &&
          "function" != typeof o.componentWillMount) ||
        ((t = o.state),
        "function" == typeof o.componentWillMount && o.componentWillMount(),
        "function" == typeof o.UNSAFE_componentWillMount &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && au.enqueueReplaceState(o, o.state, null),
        Wl(e, n, o, r),
        (o.state = e.memoizedState)),
      "function" == typeof o.componentDidMount && (e.flags |= 4194308);
  }
  function cu(e, t) {
    try {
      var n = "",
        r = t;
      do {
        (n += Ue(r)), (r = r.return);
      } while (r);
      var o = n;
    } catch (e) {
      o = "\nError generating stack: " + e.message + "\n" + e.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function fu(e, t, n) {
    return {
      value: e,
      source: null,
      stack: null != n ? n : null,
      digest: null != t ? t : null,
    };
  }
  function du(e, t) {
    try {
      console.error(t.value);
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  var pu = "function" == typeof WeakMap ? WeakMap : Map;
  function mu(e, t, n) {
    ((n = Dl(-1, n)).tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Hs || ((Hs = !0), (Ks = r)), du(0, t);
      }),
      n
    );
  }
  function hu(e, t, n) {
    (n = Dl(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ("function" == typeof r) {
      var o = t.value;
      (n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          du(0, t);
        });
    }
    var a = e.stateNode;
    return (
      null !== a &&
        "function" == typeof a.componentDidCatch &&
        (n.callback = function () {
          du(0, t),
            "function" != typeof r &&
              (null === Qs ? (Qs = new Set([this])) : Qs.add(this));
          var e = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : "",
          });
        }),
      n
    );
  }
  function yu(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
      r = e.pingCache = new pu();
      var o = new Set();
      r.set(t, o);
    } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = _c.bind(null, e, t, n)), t.then(e, e));
  }
  function gu(e) {
    do {
      var t;
      if (
        ((t = 13 === e.tag) &&
          (t = null === (t = e.memoizedState) || null !== t.dehydrated),
        t)
      )
        return e;
      e = e.return;
    } while (null !== e);
    return null;
  }
  function vu(e, t, n, r, o) {
    return 0 == (1 & e.mode)
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            1 === n.tag &&
              (null === n.alternate
                ? (n.tag = 17)
                : (((t = Dl(-1, 1)).tag = 2), Vl(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = o), e);
  }
  var bu = ke.ReactCurrentOwner,
    xu = !1;
  function ku(e, t, n, r) {
    t.child = null === e ? Sl(t, null, n, r) : wl(t, e.child, n, r);
  }
  function wu(e, t, n, r, o) {
    n = n.render;
    var a = t.ref;
    return (
      jl(t, o),
      (r = gi(e, t, n, r, a, o)),
      (n = vi()),
      null === e || xu
        ? (ll && n && nl(t), (t.flags |= 1), ku(e, t, r, o), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Hu(e, t, o))
    );
  }
  function Su(e, t, n, r, o) {
    if (null === e) {
      var a = n.type;
      return "function" != typeof a ||
        Mc(a) ||
        void 0 !== a.defaultProps ||
        null !== n.compare ||
        void 0 !== n.defaultProps
        ? (((e = Ac(n.type, null, r, t, t.mode, o)).ref = t.ref),
          (e.return = t),
          (t.child = e))
        : ((t.tag = 15), (t.type = a), Cu(e, t, a, r, o));
    }
    if (((a = e.child), 0 == (e.lanes & o))) {
      var l = a.memoizedProps;
      if ((n = null !== (n = n.compare) ? n : so)(l, r) && e.ref === t.ref)
        return Hu(e, t, o);
    }
    return (
      (t.flags |= 1),
      ((e = Rc(a, r)).ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Cu(e, t, n, r, o) {
    if (null !== e) {
      var a = e.memoizedProps;
      if (so(a, r) && e.ref === t.ref) {
        if (((xu = !1), (t.pendingProps = r = a), 0 == (e.lanes & o)))
          return (t.lanes = e.lanes), Hu(e, t, o);
        0 != (131072 & e.flags) && (xu = !0);
      }
    }
    return Pu(e, t, n, r, o);
  }
  function Eu(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      a = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode)
      if (0 == (1 & t.mode))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          za(Rs, Ms),
          (Ms |= n);
      else {
        if (0 == (1073741824 & n))
          return (
            (e = null !== a ? a.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            za(Rs, Ms),
            (Ms |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = null !== a ? a.baseLanes : n),
          za(Rs, Ms),
          (Ms |= r);
      }
    else
      null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
        za(Rs, Ms),
        (Ms |= r);
    return ku(e, t, o, n), t.child;
  }
  function _u(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Pu(e, t, n, r, o) {
    var a = Ra(n) ? Na : Oa.current;
    return (
      (a = Ma(t, a)),
      jl(t, o),
      (n = gi(e, t, n, r, a, o)),
      (r = vi()),
      null === e || xu
        ? (ll && r && nl(t), (t.flags |= 1), ku(e, t, n, o), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Hu(e, t, o))
    );
  }
  function zu(e, t, n, r, o) {
    if (Ra(n)) {
      var a = !0;
      Fa(t);
    } else a = !1;
    if ((jl(t, o), null === t.stateNode))
      Wu(e, t), iu(t, n, r), su(t, n, r, o), (r = !0);
    else if (null === e) {
      var l = t.stateNode,
        i = t.memoizedProps;
      l.props = i;
      var u = l.context,
        s = n.contextType;
      "object" == typeof s && null !== s
        ? (s = Nl(s))
        : (s = Ma(t, (s = Ra(n) ? Na : Oa.current)));
      var c = n.getDerivedStateFromProps,
        f =
          "function" == typeof c ||
          "function" == typeof l.getSnapshotBeforeUpdate;
      f ||
        ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
          "function" != typeof l.componentWillReceiveProps) ||
        ((i !== r || u !== s) && uu(t, l, r, s)),
        (Il = !1);
      var d = t.memoizedState;
      (l.state = d),
        Wl(t, r, l, o),
        (u = t.memoizedState),
        i !== r || d !== u || ja.current || Il
          ? ("function" == typeof c && (ou(t, n, c, r), (u = t.memoizedState)),
            (i = Il || lu(t, n, i, r, d, u, s))
              ? (f ||
                  ("function" != typeof l.UNSAFE_componentWillMount &&
                    "function" != typeof l.componentWillMount) ||
                  ("function" == typeof l.componentWillMount &&
                    l.componentWillMount(),
                  "function" == typeof l.UNSAFE_componentWillMount &&
                    l.UNSAFE_componentWillMount()),
                "function" == typeof l.componentDidMount &&
                  (t.flags |= 4194308))
              : ("function" == typeof l.componentDidMount &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = u)),
            (l.props = r),
            (l.state = u),
            (l.context = s),
            (r = i))
          : ("function" == typeof l.componentDidMount && (t.flags |= 4194308),
            (r = !1));
    } else {
      (l = t.stateNode),
        $l(e, t),
        (i = t.memoizedProps),
        (s = t.type === t.elementType ? i : ru(t.type, i)),
        (l.props = s),
        (f = t.pendingProps),
        (d = l.context),
        "object" == typeof (u = n.contextType) && null !== u
          ? (u = Nl(u))
          : (u = Ma(t, (u = Ra(n) ? Na : Oa.current)));
      var p = n.getDerivedStateFromProps;
      (c =
        "function" == typeof p ||
        "function" == typeof l.getSnapshotBeforeUpdate) ||
        ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
          "function" != typeof l.componentWillReceiveProps) ||
        ((i !== f || d !== u) && uu(t, l, r, u)),
        (Il = !1),
        (d = t.memoizedState),
        (l.state = d),
        Wl(t, r, l, o);
      var m = t.memoizedState;
      i !== f || d !== m || ja.current || Il
        ? ("function" == typeof p && (ou(t, n, p, r), (m = t.memoizedState)),
          (s = Il || lu(t, n, s, r, d, m, u) || !1)
            ? (c ||
                ("function" != typeof l.UNSAFE_componentWillUpdate &&
                  "function" != typeof l.componentWillUpdate) ||
                ("function" == typeof l.componentWillUpdate &&
                  l.componentWillUpdate(r, m, u),
                "function" == typeof l.UNSAFE_componentWillUpdate &&
                  l.UNSAFE_componentWillUpdate(r, m, u)),
              "function" == typeof l.componentDidUpdate && (t.flags |= 4),
              "function" == typeof l.getSnapshotBeforeUpdate &&
                (t.flags |= 1024))
            : ("function" != typeof l.componentDidUpdate ||
                (i === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof l.getSnapshotBeforeUpdate ||
                (i === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = m)),
          (l.props = r),
          (l.state = m),
          (l.context = u),
          (r = s))
        : ("function" != typeof l.componentDidUpdate ||
            (i === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 4),
          "function" != typeof l.getSnapshotBeforeUpdate ||
            (i === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Tu(e, t, n, r, a, o);
  }
  function Tu(e, t, n, r, o, a) {
    _u(e, t);
    var l = 0 != (128 & t.flags);
    if (!r && !l) return o && $a(t, n, !1), Hu(e, t, a);
    (r = t.stateNode), (bu.current = t);
    var i =
      l && "function" != typeof n.getDerivedStateFromError ? null : r.render();
    return (
      (t.flags |= 1),
      null !== e && l
        ? ((t.child = wl(t, e.child, null, a)), (t.child = wl(t, null, i, a)))
        : ku(e, t, i, a),
      (t.memoizedState = r.state),
      o && $a(t, n, !0),
      t.child
    );
  }
  function Ou(e) {
    var t = e.stateNode;
    t.pendingContext
      ? La(0, t.pendingContext, t.pendingContext !== t.context)
      : t.context && La(0, t.context, !1),
      Yl(e, t.containerInfo);
  }
  function ju(e, t, n, r, o) {
    return hl(), yl(o), (t.flags |= 256), ku(e, t, n, r), t.child;
  }
  var Nu,
    Mu,
    Ru,
    Au,
    Lu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Iu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Fu(e, t, n) {
    var r,
      o = t.pendingProps,
      a = ti.current,
      l = !1,
      i = 0 != (128 & t.flags);
    if (
      ((r = i) ||
        (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
      r
        ? ((l = !0), (t.flags &= -129))
        : (null !== e && null === e.memoizedState) || (a |= 1),
      za(ti, 1 & a),
      null === e)
    )
      return (
        fl(t),
        null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
          ? (0 == (1 & t.mode)
              ? (t.lanes = 1)
              : "$!" === e.data
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((i = o.children),
            (e = o.fallback),
            l
              ? ((o = t.mode),
                (l = t.child),
                (i = { mode: "hidden", children: i }),
                0 == (1 & o) && null !== l
                  ? ((l.childLanes = 0), (l.pendingProps = i))
                  : (l = Ic(i, o, 0, null)),
                (e = Lc(e, o, n, null)),
                (l.return = t),
                (e.return = t),
                (l.sibling = e),
                (t.child = l),
                (t.child.memoizedState = Iu(n)),
                (t.memoizedState = Lu),
                e)
              : $u(t, i))
      );
    if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
      return (function (e, t, n, r, o, a, l) {
        if (n)
          return 256 & t.flags
            ? ((t.flags &= -257), Du(e, t, l, (r = fu(Error(le(422))))))
            : null !== t.memoizedState
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((a = r.fallback),
              (o = t.mode),
              (r = Ic({ mode: "visible", children: r.children }, o, 0, null)),
              ((a = Lc(a, o, l, null)).flags |= 2),
              (r.return = t),
              (a.return = t),
              (r.sibling = a),
              (t.child = r),
              0 != (1 & t.mode) && wl(t, e.child, null, l),
              (t.child.memoizedState = Iu(l)),
              (t.memoizedState = Lu),
              a);
        if (0 == (1 & t.mode)) return Du(e, t, l, null);
        if ("$!" === o.data) {
          if ((r = o.nextSibling && o.nextSibling.dataset)) var i = r.dgst;
          return (
            (r = i), Du(e, t, l, (r = fu((a = Error(le(419))), r, void 0)))
          );
        }
        if (((i = 0 != (l & e.childLanes)), xu || i)) {
          if (null !== (r = Os)) {
            switch (l & -l) {
              case 4:
                o = 2;
                break;
              case 16:
                o = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                o = 32;
                break;
              case 536870912:
                o = 268435456;
                break;
              default:
                o = 0;
            }
            0 !== (o = 0 != (o & (r.suspendedLanes | l)) ? 0 : o) &&
              o !== a.retryLane &&
              ((a.retryLane = o), Ll(e, o), rc(r, e, o, -1));
          }
          return yc(), Du(e, t, l, (r = fu(Error(le(421)))));
        }
        return "$?" === o.data
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = zc.bind(null, e)),
            (o._reactRetry = t),
            null)
          : ((e = a.treeContext),
            (al = fa(o.nextSibling)),
            (ol = t),
            (ll = !0),
            (il = null),
            null !== e &&
              ((Ga[Xa++] = Ja),
              (Ga[Xa++] = Za),
              (Ga[Xa++] = Ya),
              (Ja = e.id),
              (Za = e.overflow),
              (Ya = t)),
            (t = $u(t, r.children)),
            (t.flags |= 4096),
            t);
      })(e, t, i, o, r, a, n);
    if (l) {
      (l = o.fallback), (i = t.mode), (r = (a = e.child).sibling);
      var u = { mode: "hidden", children: o.children };
      return (
        0 == (1 & i) && t.child !== a
          ? (((o = t.child).childLanes = 0),
            (o.pendingProps = u),
            (t.deletions = null))
          : ((o = Rc(a, u)).subtreeFlags = 14680064 & a.subtreeFlags),
        null !== r ? (l = Rc(r, l)) : ((l = Lc(l, i, n, null)).flags |= 2),
        (l.return = t),
        (o.return = t),
        (o.sibling = l),
        (t.child = o),
        (o = l),
        (l = t.child),
        (i =
          null === (i = e.child.memoizedState)
            ? Iu(n)
            : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions,
              }),
        (l.memoizedState = i),
        (l.childLanes = e.childLanes & ~n),
        (t.memoizedState = Lu),
        o
      );
    }
    return (
      (e = (l = e.child).sibling),
      (o = Rc(l, { mode: "visible", children: o.children })),
      0 == (1 & t.mode) && (o.lanes = n),
      (o.return = t),
      (o.sibling = null),
      null !== e &&
        (null === (n = t.deletions)
          ? ((t.deletions = [e]), (t.flags |= 16))
          : n.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function $u(e, t) {
    return (
      ((t = Ic({ mode: "visible", children: t }, e.mode, 0, null)).return = e),
      (e.child = t)
    );
  }
  function Du(e, t, n, r) {
    return (
      null !== r && yl(r),
      wl(t, e.child, null, n),
      ((e = $u(t, t.pendingProps.children)).flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Vu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), Ol(e.return, t, n);
  }
  function Uu(e, t, n, r, o) {
    var a = e.memoizedState;
    null === a
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o,
        })
      : ((a.isBackwards = t),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = r),
        (a.tail = n),
        (a.tailMode = o));
  }
  function Bu(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      a = r.tail;
    if ((ku(e, t, r.children, n), 0 != (2 & (r = ti.current))))
      (r = (1 & r) | 2), (t.flags |= 128);
    else {
      if (null !== e && 0 != (128 & e.flags))
        e: for (e = t.child; null !== e; ) {
          if (13 === e.tag) null !== e.memoizedState && Vu(e, n, t);
          else if (19 === e.tag) Vu(e, n, t);
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
    if ((za(ti, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; null !== n; )
            null !== (e = n.alternate) && null === ni(e) && (o = n),
              (n = n.sibling);
          null === (n = o)
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
            Uu(t, !1, o, n, a);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; null !== o; ) {
            if (null !== (e = o.alternate) && null === ni(e)) {
              t.child = o;
              break;
            }
            (e = o.sibling), (o.sibling = n), (n = o), (o = e);
          }
          Uu(t, !0, n, null, a);
          break;
        case "together":
          Uu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Wu(e, t) {
    0 == (1 & t.mode) &&
      null !== e &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Hu(e, t, n) {
    if (
      (null !== e && (t.dependencies = e.dependencies),
      (Is |= t.lanes),
      0 == (n & t.childLanes))
    )
      return null;
    if (null !== e && t.child !== e.child) throw Error(le(153));
    if (null !== t.child) {
      for (
        n = Rc((e = t.child), e.pendingProps), t.child = n, n.return = t;
        null !== e.sibling;

      )
        (e = e.sibling), ((n = n.sibling = Rc(e, e.pendingProps)).return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Ku(e, t) {
    if (!ll)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; null !== t; )
            null !== t.alternate && (n = t), (t = t.sibling);
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; null !== n; )
            null !== n.alternate && (r = n), (n = n.sibling);
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Qu(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var o = e.child; null !== o; )
        (n |= o.lanes | o.childLanes),
          (r |= 14680064 & o.subtreeFlags),
          (r |= 14680064 & o.flags),
          (o.return = e),
          (o = o.sibling);
    else
      for (o = e.child; null !== o; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags),
          (r |= o.flags),
          (o.return = e),
          (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function qu(e, t, n) {
    var r = t.pendingProps;
    switch ((rl(t), t.tag)) {
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
        return Qu(t), null;
      case 1:
      case 17:
        return Ra(t.type) && Aa(), Qu(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Jl(),
          Pa(ja),
          Pa(Oa),
          oi(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (null !== e && null !== e.child) ||
            (pl(t)
              ? (t.flags |= 4)
              : null === e ||
                (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                ((t.flags |= 1024), null !== il && (ic(il), (il = null)))),
          Mu(e, t),
          Qu(t),
          null
        );
      case 5:
        ei(t);
        var o = Xl(Gl.current);
        if (((n = t.type), null !== e && null != t.stateNode))
          Ru(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (null === t.stateNode) throw Error(le(166));
            return Qu(t), null;
          }
          if (((e = Xl(Ql.current)), pl(t))) {
            (r = t.stateNode), (n = t.type);
            var a = t.memoizedProps;
            switch (((r[ma] = t), (r[ha] = a), (e = 0 != (1 & t.mode)), n)) {
              case "dialog":
                Vo("cancel", r), Vo("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Vo("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Io.length; o++) Vo(Io[o], r);
                break;
              case "source":
                Vo("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Vo("error", r), Vo("load", r);
                break;
              case "details":
                Vo("toggle", r);
                break;
              case "input":
                Ye(r, a), Vo("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!a.multiple }),
                  Vo("invalid", r);
                break;
              case "textarea":
                at(r, a), Vo("invalid", r);
            }
            for (var l in (bt(n, a), (o = null), a))
              if (a.hasOwnProperty(l)) {
                var i = a[l];
                "children" === l
                  ? "string" == typeof i
                    ? r.textContent !== i &&
                      (!0 !== a.suppressHydrationWarning &&
                        ea(r.textContent, i, e),
                      (o = ["children", i]))
                    : "number" == typeof i &&
                      r.textContent !== "" + i &&
                      (!0 !== a.suppressHydrationWarning &&
                        ea(r.textContent, i, e),
                      (o = ["children", "" + i]))
                  : ue.hasOwnProperty(l) &&
                    null != i &&
                    "onScroll" === l &&
                    Vo("scroll", r);
              }
            switch (n) {
              case "input":
                Qe(r), et(r, a, !0);
                break;
              case "textarea":
                Qe(r), it(r);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" == typeof a.onClick && (r.onclick = ta);
            }
            (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
          } else {
            (l = 9 === o.nodeType ? o : o.ownerDocument),
              "http://www.w3.org/1999/xhtml" === e && (e = ut(n)),
              "http://www.w3.org/1999/xhtml" === e
                ? "script" === n
                  ? (((e = l.createElement("div")).innerHTML =
                      "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : "string" == typeof r.is
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    "select" === n &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
                : (e = l.createElementNS(e, n)),
              (e[ma] = t),
              (e[ha] = r),
              Nu(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((l = xt(n, r)), n)) {
                case "dialog":
                  Vo("cancel", e), Vo("close", e), (o = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Vo("load", e), (o = r);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Io.length; o++) Vo(Io[o], e);
                  o = r;
                  break;
                case "source":
                  Vo("error", e), (o = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Vo("error", e), Vo("load", e), (o = r);
                  break;
                case "details":
                  Vo("toggle", e), (o = r);
                  break;
                case "input":
                  Ye(e, r), (o = Xe(e, r)), Vo("invalid", e);
                  break;
                case "option":
                default:
                  o = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = Fe({}, r, { value: void 0 })),
                    Vo("invalid", e);
                  break;
                case "textarea":
                  at(e, r), (o = ot(e, r)), Vo("invalid", e);
              }
              for (a in (bt(n, o), (i = o)))
                if (i.hasOwnProperty(a)) {
                  var u = i[a];
                  "style" === a
                    ? gt(e, u)
                    : "dangerouslySetInnerHTML" === a
                    ? null != (u = u ? u.__html : void 0) && dt(e, u)
                    : "children" === a
                    ? "string" == typeof u
                      ? ("textarea" !== n || "" !== u) && pt(e, u)
                      : "number" == typeof u && pt(e, "" + u)
                    : "suppressContentEditableWarning" !== a &&
                      "suppressHydrationWarning" !== a &&
                      "autoFocus" !== a &&
                      (ue.hasOwnProperty(a)
                        ? null != u && "onScroll" === a && Vo("scroll", e)
                        : null != u && xe(e, a, u, l));
                }
              switch (n) {
                case "input":
                  Qe(e), et(e, r, !1);
                  break;
                case "textarea":
                  Qe(e), it(e);
                  break;
                case "option":
                  null != r.value && e.setAttribute("value", "" + He(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    null != (a = r.value)
                      ? rt(e, !!r.multiple, a, !1)
                      : null != r.defaultValue &&
                        rt(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  "function" == typeof o.onClick && (e.onclick = ta);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Qu(t), null;
      case 6:
        if (e && null != t.stateNode) Au(e, t, e.memoizedProps, r);
        else {
          if ("string" != typeof r && null === t.stateNode)
            throw Error(le(166));
          if (((n = Xl(Gl.current)), Xl(Ql.current), pl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[ma] = t),
              (a = r.nodeValue !== n) && null !== (e = ol))
            )
              switch (e.tag) {
                case 3:
                  ea(r.nodeValue, n, 0 != (1 & e.mode));
                  break;
                case 5:
                  !0 !== e.memoizedProps.suppressHydrationWarning &&
                    ea(r.nodeValue, n, 0 != (1 & e.mode));
              }
            a && (t.flags |= 4);
          } else
            ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[
              ma
            ] = t),
              (t.stateNode = r);
        }
        return Qu(t), null;
      case 13:
        if (
          (Pa(ti),
          (r = t.memoizedState),
          null === e ||
            (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
        ) {
          if (ll && null !== al && 0 != (1 & t.mode) && 0 == (128 & t.flags))
            ml(), hl(), (t.flags |= 98560), (a = !1);
          else if (((a = pl(t)), null !== r && null !== r.dehydrated)) {
            if (null === e) {
              if (!a) throw Error(le(318));
              if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null))
                throw Error(le(317));
              a[ma] = t;
            } else
              hl(),
                0 == (128 & t.flags) && (t.memoizedState = null),
                (t.flags |= 4);
            Qu(t), (a = !1);
          } else null !== il && (ic(il), (il = null)), (a = !0);
          if (!a) return 65536 & t.flags ? t : null;
        }
        return 0 != (128 & t.flags)
          ? ((t.lanes = n), t)
          : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
              r &&
              ((t.child.flags |= 8192),
              0 != (1 & t.mode) &&
                (null === e || 0 != (1 & ti.current)
                  ? 0 === As && (As = 3)
                  : yc())),
            null !== t.updateQueue && (t.flags |= 4),
            Qu(t),
            null);
      case 4:
        return (
          Jl(),
          Mu(e, t),
          null === e && Wo(t.stateNode.containerInfo),
          Qu(t),
          null
        );
      case 10:
        return Tl(t.type._context), Qu(t), null;
      case 19:
        if ((Pa(ti), null === (a = t.memoizedState))) return Qu(t), null;
        if (((r = 0 != (128 & t.flags)), null === (l = a.rendering)))
          if (r) Ku(a, !1);
          else {
            if (0 !== As || (null !== e && 0 != (128 & e.flags)))
              for (e = t.child; null !== e; ) {
                if (null !== (l = ni(e))) {
                  for (
                    t.flags |= 128,
                      Ku(a, !1),
                      null !== (r = l.updateQueue) &&
                        ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    null !== n;

                  )
                    (e = r),
                      ((a = n).flags &= 14680066),
                      null === (l = a.alternate)
                        ? ((a.childLanes = 0),
                          (a.lanes = e),
                          (a.child = null),
                          (a.subtreeFlags = 0),
                          (a.memoizedProps = null),
                          (a.memoizedState = null),
                          (a.updateQueue = null),
                          (a.dependencies = null),
                          (a.stateNode = null))
                        : ((a.childLanes = l.childLanes),
                          (a.lanes = l.lanes),
                          (a.child = l.child),
                          (a.subtreeFlags = 0),
                          (a.deletions = null),
                          (a.memoizedProps = l.memoizedProps),
                          (a.memoizedState = l.memoizedState),
                          (a.updateQueue = l.updateQueue),
                          (a.type = l.type),
                          (e = l.dependencies),
                          (a.dependencies =
                            null === e
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return za(ti, (1 & ti.current) | 2), t.child;
                }
                e = e.sibling;
              }
            null !== a.tail &&
              Jt() > Bs &&
              ((t.flags |= 128), (r = !0), Ku(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (null !== (e = ni(l))) {
              if (
                ((t.flags |= 128),
                (r = !0),
                null !== (n = e.updateQueue) &&
                  ((t.updateQueue = n), (t.flags |= 4)),
                Ku(a, !0),
                null === a.tail &&
                  "hidden" === a.tailMode &&
                  !l.alternate &&
                  !ll)
              )
                return Qu(t), null;
            } else
              2 * Jt() - a.renderingStartTime > Bs &&
                1073741824 !== n &&
                ((t.flags |= 128), (r = !0), Ku(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((l.sibling = t.child), (t.child = l))
            : (null !== (n = a.last) ? (n.sibling = l) : (t.child = l),
              (a.last = l));
        }
        return null !== a.tail
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = Jt()),
            (t.sibling = null),
            (n = ti.current),
            za(ti, r ? (1 & n) | 2 : 1 & n),
            t)
          : (Qu(t), null);
      case 22:
      case 23:
        return (
          dc(),
          (r = null !== t.memoizedState),
          null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
          r && 0 != (1 & t.mode)
            ? 0 != (1073741824 & Ms) &&
              (Qu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
            : Qu(t),
          null
        );
      case 24:
      case 25:
        return null;
    }
    throw Error(le(156, t.tag));
  }
  function Gu(e, t) {
    switch ((rl(t), t.tag)) {
      case 1:
        return (
          Ra(t.type) && Aa(),
          65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
        );
      case 3:
        return (
          Jl(),
          Pa(ja),
          Pa(Oa),
          oi(),
          0 != (65536 & (e = t.flags)) && 0 == (128 & e)
            ? ((t.flags = (-65537 & e) | 128), t)
            : null
        );
      case 5:
        return ei(t), null;
      case 13:
        if ((Pa(ti), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
          if (null === t.alternate) throw Error(le(340));
          hl();
        }
        return 65536 & (e = t.flags)
          ? ((t.flags = (-65537 & e) | 128), t)
          : null;
      case 19:
        return Pa(ti), null;
      case 4:
        return Jl(), null;
      case 10:
        return Tl(t.type._context), null;
      case 22:
      case 23:
        return dc(), null;
      default:
        return null;
    }
  }
  (Nu = function (e, t) {
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
    (Mu = function () {}),
    (Ru = function (e, t, n, r) {
      var o = e.memoizedProps;
      if (o !== r) {
        (e = t.stateNode), Xl(Ql.current);
        var a,
          l = null;
        switch (n) {
          case "input":
            (o = Xe(e, o)), (r = Xe(e, r)), (l = []);
            break;
          case "select":
            (o = Fe({}, o, { value: void 0 })),
              (r = Fe({}, r, { value: void 0 })),
              (l = []);
            break;
          case "textarea":
            (o = ot(e, o)), (r = ot(e, r)), (l = []);
            break;
          default:
            "function" != typeof o.onClick &&
              "function" == typeof r.onClick &&
              (e.onclick = ta);
        }
        for (s in (bt(n, r), (n = null), o))
          if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && null != o[s])
            if ("style" === s) {
              var i = o[s];
              for (a in i) i.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
            } else
              "dangerouslySetInnerHTML" !== s &&
                "children" !== s &&
                "suppressContentEditableWarning" !== s &&
                "suppressHydrationWarning" !== s &&
                "autoFocus" !== s &&
                (ue.hasOwnProperty(s)
                  ? l || (l = [])
                  : (l = l || []).push(s, null));
        for (s in r) {
          var u = r[s];
          if (
            ((i = null != o ? o[s] : void 0),
            r.hasOwnProperty(s) && u !== i && (null != u || null != i))
          )
            if ("style" === s)
              if (i) {
                for (a in i)
                  !i.hasOwnProperty(a) ||
                    (u && u.hasOwnProperty(a)) ||
                    (n || (n = {}), (n[a] = ""));
                for (a in u)
                  u.hasOwnProperty(a) &&
                    i[a] !== u[a] &&
                    (n || (n = {}), (n[a] = u[a]));
              } else n || (l || (l = []), l.push(s, n)), (n = u);
            else
              "dangerouslySetInnerHTML" === s
                ? ((u = u ? u.__html : void 0),
                  (i = i ? i.__html : void 0),
                  null != u && i !== u && (l = l || []).push(s, u))
                : "children" === s
                ? ("string" != typeof u && "number" != typeof u) ||
                  (l = l || []).push(s, "" + u)
                : "suppressContentEditableWarning" !== s &&
                  "suppressHydrationWarning" !== s &&
                  (ue.hasOwnProperty(s)
                    ? (null != u && "onScroll" === s && Vo("scroll", e),
                      l || i === u || (l = []))
                    : (l = l || []).push(s, u));
        }
        n && (l = l || []).push("style", n);
        var s = l;
        (t.updateQueue = s) && (t.flags |= 4);
      }
    }),
    (Au = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  var Xu = !1,
    Yu = !1,
    Ju = "function" == typeof WeakSet ? WeakSet : Set,
    Zu = null;
  function es(e, t) {
    var n = e.ref;
    if (null !== n)
      if ("function" == typeof n)
        try {
          n(null);
        } catch (n) {
          Ec(e, t, n);
        }
      else n.current = null;
  }
  function ts(e, t, n) {
    try {
      n();
    } catch (n) {
      Ec(e, t, n);
    }
  }
  var ns = !1;
  function rs(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var a = o.destroy;
          (o.destroy = void 0), void 0 !== a && ts(t, n, a);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function os(e, t) {
    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function as(e) {
    var t = e.ref;
    if (null !== t) {
      var n = e.stateNode;
      e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
    }
  }
  function ls(e) {
    var t = e.alternate;
    null !== t && ((e.alternate = null), ls(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      5 === e.tag &&
        null !== (t = e.stateNode) &&
        (delete t[ma], delete t[ha], delete t[ga], delete t[va], delete t[ba]),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function is(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
  }
  function us(e) {
    e: for (;;) {
      for (; null === e.sibling; ) {
        if (null === e.return || is(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

      ) {
        if (2 & e.flags) continue e;
        if (null === e.child || 4 === e.tag) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(2 & e.flags)) return e.stateNode;
    }
  }
  function ss(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      (e = e.stateNode),
        t
          ? 8 === n.nodeType
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (8 === n.nodeType
              ? (t = n.parentNode).insertBefore(e, n)
              : (t = n).appendChild(e),
            null != (n = n._reactRootContainer) ||
              null !== t.onclick ||
              (t.onclick = ta));
    else if (4 !== r && null !== (e = e.child))
      for (ss(e, t, n), e = e.sibling; null !== e; )
        ss(e, t, n), (e = e.sibling);
  }
  function cs(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && null !== (e = e.child))
      for (cs(e, t, n), e = e.sibling; null !== e; )
        cs(e, t, n), (e = e.sibling);
  }
  var fs = null,
    ds = !1;
  function ps(e, t, n) {
    for (n = n.child; null !== n; ) ms(e, t, n), (n = n.sibling);
  }
  function ms(e, t, n) {
    if (ln && "function" == typeof ln.onCommitFiberUnmount)
      try {
        ln.onCommitFiberUnmount(an, n);
      } catch (e) {}
    switch (n.tag) {
      case 5:
        Yu || es(n, t);
      case 6:
        var r = fs,
          o = ds;
        (fs = null),
          ps(e, t, n),
          (ds = o),
          null !== (fs = r) &&
            (ds
              ? ((e = fs),
                (n = n.stateNode),
                8 === e.nodeType
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : fs.removeChild(n.stateNode));
        break;
      case 18:
        null !== fs &&
          (ds
            ? ((e = fs),
              (n = n.stateNode),
              8 === e.nodeType
                ? ca(e.parentNode, n)
                : 1 === e.nodeType && ca(e, n),
              Wn(e))
            : ca(fs, n.stateNode));
        break;
      case 4:
        (r = fs),
          (o = ds),
          (fs = n.stateNode.containerInfo),
          (ds = !0),
          ps(e, t, n),
          (fs = r),
          (ds = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Yu &&
          null !== (r = n.updateQueue) &&
          null !== (r = r.lastEffect)
        ) {
          o = r = r.next;
          do {
            var a = o,
              l = a.destroy;
            (a = a.tag),
              void 0 !== l && (0 != (2 & a) || 0 != (4 & a)) && ts(n, t, l),
              (o = o.next);
          } while (o !== r);
        }
        ps(e, t, n);
        break;
      case 1:
        if (
          !Yu &&
          (es(n, t),
          "function" == typeof (r = n.stateNode).componentWillUnmount)
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (e) {
            Ec(n, t, e);
          }
        ps(e, t, n);
        break;
      case 21:
        ps(e, t, n);
        break;
      case 22:
        1 & n.mode
          ? ((Yu = (r = Yu) || null !== n.memoizedState), ps(e, t, n), (Yu = r))
          : ps(e, t, n);
        break;
      default:
        ps(e, t, n);
    }
  }
  function hs(e) {
    var t = e.updateQueue;
    if (null !== t) {
      e.updateQueue = null;
      var n = e.stateNode;
      null === n && (n = e.stateNode = new Ju()),
        t.forEach(function (t) {
          var r = Tc.bind(null, e, t);
          n.has(t) || (n.add(t), t.then(r, r));
        });
    }
  }
  function ys(e, t) {
    var n = t.deletions;
    if (null !== n)
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
          var a = e,
            l = t,
            i = l;
          e: for (; null !== i; ) {
            switch (i.tag) {
              case 5:
                (fs = i.stateNode), (ds = !1);
                break e;
              case 3:
              case 4:
                (fs = i.stateNode.containerInfo), (ds = !0);
                break e;
            }
            i = i.return;
          }
          if (null === fs) throw Error(le(160));
          ms(a, l, o), (fs = null), (ds = !1);
          var u = o.alternate;
          null !== u && (u.return = null), (o.return = null);
        } catch (e) {
          Ec(o, t, e);
        }
      }
    if (12854 & t.subtreeFlags)
      for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
  }
  function gs(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ys(t, e), vs(e), 4 & r)) {
          try {
            rs(3, e, e.return), os(3, e);
          } catch (t) {
            Ec(e, e.return, t);
          }
          try {
            rs(5, e, e.return);
          } catch (t) {
            Ec(e, e.return, t);
          }
        }
        break;
      case 1:
        ys(t, e), vs(e), 512 & r && null !== n && es(n, n.return);
        break;
      case 5:
        if (
          (ys(t, e),
          vs(e),
          512 & r && null !== n && es(n, n.return),
          32 & e.flags)
        ) {
          var o = e.stateNode;
          try {
            pt(o, "");
          } catch (t) {
            Ec(e, e.return, t);
          }
        }
        if (4 & r && null != (o = e.stateNode)) {
          var a = e.memoizedProps,
            l = null !== n ? n.memoizedProps : a,
            i = e.type,
            u = e.updateQueue;
          if (((e.updateQueue = null), null !== u))
            try {
              "input" === i && "radio" === a.type && null != a.name && Je(o, a),
                xt(i, l);
              var s = xt(i, a);
              for (l = 0; l < u.length; l += 2) {
                var c = u[l],
                  f = u[l + 1];
                "style" === c
                  ? gt(o, f)
                  : "dangerouslySetInnerHTML" === c
                  ? dt(o, f)
                  : "children" === c
                  ? pt(o, f)
                  : xe(o, c, f, s);
              }
              switch (i) {
                case "input":
                  Ze(o, a);
                  break;
                case "textarea":
                  lt(o, a);
                  break;
                case "select":
                  var d = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!a.multiple;
                  var p = a.value;
                  null != p
                    ? rt(o, !!a.multiple, p, !1)
                    : d !== !!a.multiple &&
                      (null != a.defaultValue
                        ? rt(o, !!a.multiple, a.defaultValue, !0)
                        : rt(o, !!a.multiple, a.multiple ? [] : "", !1));
              }
              o[ha] = a;
            } catch (t) {
              Ec(e, e.return, t);
            }
        }
        break;
      case 6:
        if ((ys(t, e), vs(e), 4 & r)) {
          if (null === e.stateNode) throw Error(le(162));
          (o = e.stateNode), (a = e.memoizedProps);
          try {
            o.nodeValue = a;
          } catch (t) {
            Ec(e, e.return, t);
          }
        }
        break;
      case 3:
        if (
          (ys(t, e), vs(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
        )
          try {
            Wn(t.containerInfo);
          } catch (t) {
            Ec(e, e.return, t);
          }
        break;
      case 4:
      default:
        ys(t, e), vs(e);
        break;
      case 13:
        ys(t, e),
          vs(e),
          8192 & (o = e.child).flags &&
            ((a = null !== o.memoizedState),
            (o.stateNode.isHidden = a),
            !a ||
              (null !== o.alternate && null !== o.alternate.memoizedState) ||
              (Us = Jt())),
          4 & r && hs(e);
        break;
      case 22:
        if (
          ((c = null !== n && null !== n.memoizedState),
          1 & e.mode ? ((Yu = (s = Yu) || c), ys(t, e), (Yu = s)) : ys(t, e),
          vs(e),
          8192 & r)
        ) {
          if (
            ((s = null !== e.memoizedState),
            (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode))
          )
            for (Zu = e, c = e.child; null !== c; ) {
              for (f = Zu = c; null !== Zu; ) {
                switch (((p = (d = Zu).child), d.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    rs(4, d, d.return);
                    break;
                  case 1:
                    es(d, d.return);
                    var m = d.stateNode;
                    if ("function" == typeof m.componentWillUnmount) {
                      (r = d), (n = d.return);
                      try {
                        (t = r),
                          (m.props = t.memoizedProps),
                          (m.state = t.memoizedState),
                          m.componentWillUnmount();
                      } catch (e) {
                        Ec(r, n, e);
                      }
                    }
                    break;
                  case 5:
                    es(d, d.return);
                    break;
                  case 22:
                    if (null !== d.memoizedState) {
                      ws(f);
                      continue;
                    }
                }
                null !== p ? ((p.return = d), (Zu = p)) : ws(f);
              }
              c = c.sibling;
            }
          e: for (c = null, f = e; ; ) {
            if (5 === f.tag) {
              if (null === c) {
                c = f;
                try {
                  (o = f.stateNode),
                    s
                      ? "function" == typeof (a = o.style).setProperty
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none")
                      : ((i = f.stateNode),
                        (l =
                          null != (u = f.memoizedProps.style) &&
                          u.hasOwnProperty("display")
                            ? u.display
                            : null),
                        (i.style.display = yt("display", l)));
                } catch (t) {
                  Ec(e, e.return, t);
                }
              }
            } else if (6 === f.tag) {
              if (null === c)
                try {
                  f.stateNode.nodeValue = s ? "" : f.memoizedProps;
                } catch (t) {
                  Ec(e, e.return, t);
                }
            } else if (
              ((22 !== f.tag && 23 !== f.tag) ||
                null === f.memoizedState ||
                f === e) &&
              null !== f.child
            ) {
              (f.child.return = f), (f = f.child);
              continue;
            }
            if (f === e) break e;
            for (; null === f.sibling; ) {
              if (null === f.return || f.return === e) break e;
              c === f && (c = null), (f = f.return);
            }
            c === f && (c = null),
              (f.sibling.return = f.return),
              (f = f.sibling);
          }
        }
        break;
      case 19:
        ys(t, e), vs(e), 4 & r && hs(e);
      case 21:
    }
  }
  function vs(e) {
    var t = e.flags;
    if (2 & t) {
      try {
        e: {
          for (var n = e.return; null !== n; ) {
            if (is(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(le(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            32 & r.flags && (pt(o, ""), (r.flags &= -33)), cs(e, us(e), o);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo;
            ss(e, us(e), a);
            break;
          default:
            throw Error(le(161));
        }
      } catch (t) {
        Ec(e, e.return, t);
      }
      e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
  }
  function bs(e, t, n) {
    (Zu = e), xs(e);
  }
  function xs(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Zu; ) {
      var o = Zu,
        a = o.child;
      if (22 === o.tag && r) {
        var l = null !== o.memoizedState || Xu;
        if (!l) {
          var i = o.alternate,
            u = (null !== i && null !== i.memoizedState) || Yu;
          i = Xu;
          var s = Yu;
          if (((Xu = l), (Yu = u) && !s))
            for (Zu = o; null !== Zu; )
              (u = (l = Zu).child),
                22 === l.tag && null !== l.memoizedState
                  ? Ss(o)
                  : null !== u
                  ? ((u.return = l), (Zu = u))
                  : Ss(o);
          for (; null !== a; ) (Zu = a), xs(a), (a = a.sibling);
          (Zu = o), (Xu = i), (Yu = s);
        }
        ks(e);
      } else
        0 != (8772 & o.subtreeFlags) && null !== a
          ? ((a.return = o), (Zu = a))
          : ks(e);
    }
  }
  function ks(e) {
    for (; null !== Zu; ) {
      var t = Zu;
      if (0 != (8772 & t.flags)) {
        var n = t.alternate;
        try {
          if (0 != (8772 & t.flags))
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Yu || os(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (4 & t.flags && !Yu)
                  if (null === n) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ru(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var a = t.updateQueue;
                null !== a && Hl(t, a, r);
                break;
              case 3:
                var l = t.updateQueue;
                if (null !== l) {
                  if (((n = null), null !== t.child))
                    switch (t.child.tag) {
                      case 5:
                      case 1:
                        n = t.child.stateNode;
                    }
                  Hl(t, l, n);
                }
                break;
              case 5:
                var i = t.stateNode;
                if (null === n && 4 & t.flags) {
                  n = i;
                  var u = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      u.autoFocus && n.focus();
                      break;
                    case "img":
                      u.src && (n.src = u.src);
                  }
                }
                break;
              case 6:
              case 4:
              case 12:
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              case 13:
                if (null === t.memoizedState) {
                  var s = t.alternate;
                  if (null !== s) {
                    var c = s.memoizedState;
                    if (null !== c) {
                      var f = c.dehydrated;
                      null !== f && Wn(f);
                    }
                  }
                }
                break;
              default:
                throw Error(le(163));
            }
          Yu || (512 & t.flags && as(t));
        } catch (e) {
          Ec(t, t.return, e);
        }
      }
      if (t === e) {
        Zu = null;
        break;
      }
      if (null !== (n = t.sibling)) {
        (n.return = t.return), (Zu = n);
        break;
      }
      Zu = t.return;
    }
  }
  function ws(e) {
    for (; null !== Zu; ) {
      var t = Zu;
      if (t === e) {
        Zu = null;
        break;
      }
      var n = t.sibling;
      if (null !== n) {
        (n.return = t.return), (Zu = n);
        break;
      }
      Zu = t.return;
    }
  }
  function Ss(e) {
    for (; null !== Zu; ) {
      var t = Zu;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              os(4, t);
            } catch (e) {
              Ec(t, n, e);
            }
            break;
          case 1:
            var r = t.stateNode;
            if ("function" == typeof r.componentDidMount) {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (e) {
                Ec(t, o, e);
              }
            }
            var a = t.return;
            try {
              as(t);
            } catch (e) {
              Ec(t, a, e);
            }
            break;
          case 5:
            var l = t.return;
            try {
              as(t);
            } catch (e) {
              Ec(t, l, e);
            }
        }
      } catch (e) {
        Ec(t, t.return, e);
      }
      if (t === e) {
        Zu = null;
        break;
      }
      var i = t.sibling;
      if (null !== i) {
        (i.return = t.return), (Zu = i);
        break;
      }
      Zu = t.return;
    }
  }
  var Cs,
    Es = Math.ceil,
    _s = ke.ReactCurrentDispatcher,
    Ps = ke.ReactCurrentOwner,
    zs = ke.ReactCurrentBatchConfig,
    Ts = 0,
    Os = null,
    js = null,
    Ns = 0,
    Ms = 0,
    Rs = _a(0),
    As = 0,
    Ls = null,
    Is = 0,
    Fs = 0,
    $s = 0,
    Ds = null,
    Vs = null,
    Us = 0,
    Bs = 1 / 0,
    Ws = null,
    Hs = !1,
    Ks = null,
    Qs = null,
    qs = !1,
    Gs = null,
    Xs = 0,
    Ys = 0,
    Js = null,
    Zs = -1,
    ec = 0;
  function tc() {
    return 0 != (6 & Ts) ? Jt() : -1 !== Zs ? Zs : (Zs = Jt());
  }
  function nc(e) {
    return 0 == (1 & e.mode)
      ? 1
      : 0 != (2 & Ts) && 0 !== Ns
      ? Ns & -Ns
      : null !== gl.transition
      ? (0 === ec && (ec = gn()), ec)
      : 0 !== (e = kn)
      ? e
      : (e = void 0 === (e = window.event) ? 16 : Jn(e.type));
  }
  function rc(e, t, n, r) {
    if (50 < Ys) throw ((Ys = 0), (Js = null), Error(le(185)));
    bn(e, n, r),
      (0 != (2 & Ts) && e === Os) ||
        (e === Os && (0 == (2 & Ts) && (Fs |= n), 4 === As && uc(e, Ns)),
        oc(e, r),
        1 === n &&
          0 === Ts &&
          0 == (1 & t.mode) &&
          ((Bs = Jt() + 500), Va && Wa()));
  }
  function oc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          o = e.expirationTimes,
          a = e.pendingLanes;
        0 < a;

      ) {
        var l = 31 - un(a),
          i = 1 << l,
          u = o[l];
        -1 === u
          ? (0 != (i & n) && 0 == (i & r)) || (o[l] = hn(i, t))
          : u <= t && (e.expiredLanes |= i),
          (a &= ~i);
      }
    })(e, t);
    var r = mn(e, e === Os ? Ns : 0);
    if (0 === r)
      null !== n && Gt(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((null != n && Gt(n), 1 === t))
        0 === e.tag
          ? (function (e) {
              (Va = !0), Ba(e);
            })(sc.bind(null, e))
          : Ba(sc.bind(null, e)),
          ua(function () {
            0 == (6 & Ts) && Wa();
          }),
          (n = null);
      else {
        switch (wn(r)) {
          case 1:
            n = en;
            break;
          case 4:
            n = tn;
            break;
          case 16:
          default:
            n = nn;
            break;
          case 536870912:
            n = on;
        }
        n = Oc(n, ac.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function ac(e, t) {
    if (((Zs = -1), (ec = 0), 0 != (6 & Ts))) throw Error(le(327));
    var n = e.callbackNode;
    if (Sc() && e.callbackNode !== n) return null;
    var r = mn(e, e === Os ? Ns : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = gc(e, r);
    else {
      t = r;
      var o = Ts;
      Ts |= 2;
      var a = hc();
      for (
        (Os === e && Ns === t) || ((Ws = null), (Bs = Jt() + 500), pc(e, t));
        ;

      )
        try {
          bc();
          break;
        } catch (t) {
          mc(e, t);
        }
      zl(),
        (_s.current = a),
        (Ts = o),
        null !== js ? (t = 0) : ((Os = null), (Ns = 0), (t = As));
    }
    if (0 !== t) {
      if ((2 === t && 0 !== (o = yn(e)) && ((r = o), (t = lc(e, o))), 1 === t))
        throw ((n = Ls), pc(e, 0), uc(e, r), oc(e, Jt()), n);
      if (6 === t) uc(e, r);
      else {
        if (
          ((o = e.current.alternate),
          0 == (30 & r) &&
            !(function (e) {
              for (var t = e; ; ) {
                if (16384 & t.flags) {
                  var n = t.updateQueue;
                  if (null !== n && null !== (n = n.stores))
                    for (var r = 0; r < n.length; r++) {
                      var o = n[r],
                        a = o.getSnapshot;
                      o = o.value;
                      try {
                        if (!uo(a(), o)) return !1;
                      } catch (e) {
                        return !1;
                      }
                    }
                }
                if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                  (n.return = t), (t = n);
                else {
                  if (t === e) break;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) return !0;
                    t = t.return;
                  }
                  (t.sibling.return = t.return), (t = t.sibling);
                }
              }
              return !0;
            })(o) &&
            (2 === (t = gc(e, r)) &&
              0 !== (a = yn(e)) &&
              ((r = a), (t = lc(e, a))),
            1 === t))
        )
          throw ((n = Ls), pc(e, 0), uc(e, r), oc(e, Jt()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(le(345));
          case 2:
          case 5:
            wc(e, Vs, Ws);
            break;
          case 3:
            if (
              (uc(e, r), (130023424 & r) === r && 10 < (t = Us + 500 - Jt()))
            ) {
              if (0 !== mn(e, 0)) break;
              if (((o = e.suspendedLanes) & r) !== r) {
                tc(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = aa(wc.bind(null, e, Vs, Ws), t);
              break;
            }
            wc(e, Vs, Ws);
            break;
          case 4:
            if ((uc(e, r), (4194240 & r) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var l = 31 - un(r);
              (a = 1 << l), (l = t[l]) > o && (o = l), (r &= ~a);
            }
            if (
              ((r = o),
              10 <
                (r =
                  (120 > (r = Jt() - r)
                    ? 120
                    : 480 > r
                    ? 480
                    : 1080 > r
                    ? 1080
                    : 1920 > r
                    ? 1920
                    : 3e3 > r
                    ? 3e3
                    : 4320 > r
                    ? 4320
                    : 1960 * Es(r / 1960)) - r))
            ) {
              e.timeoutHandle = aa(wc.bind(null, e, Vs, Ws), r);
              break;
            }
            wc(e, Vs, Ws);
            break;
          default:
            throw Error(le(329));
        }
      }
    }
    return oc(e, Jt()), e.callbackNode === n ? ac.bind(null, e) : null;
  }
  function lc(e, t) {
    var n = Ds;
    return (
      e.current.memoizedState.isDehydrated && (pc(e, t).flags |= 256),
      2 !== (e = gc(e, t)) && ((t = Vs), (Vs = n), null !== t && ic(t)),
      e
    );
  }
  function ic(e) {
    null === Vs ? (Vs = e) : Vs.push.apply(Vs, e);
  }
  function uc(e, t) {
    for (
      t &= ~$s,
        t &= ~Fs,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - un(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function sc(e) {
    if (0 != (6 & Ts)) throw Error(le(327));
    Sc();
    var t = mn(e, 0);
    if (0 == (1 & t)) return oc(e, Jt()), null;
    var n = gc(e, t);
    if (0 !== e.tag && 2 === n) {
      var r = yn(e);
      0 !== r && ((t = r), (n = lc(e, r)));
    }
    if (1 === n) throw ((n = Ls), pc(e, 0), uc(e, t), oc(e, Jt()), n);
    if (6 === n) throw Error(le(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      wc(e, Vs, Ws),
      oc(e, Jt()),
      null
    );
  }
  function cc(e, t) {
    var n = Ts;
    Ts |= 1;
    try {
      return e(t);
    } finally {
      0 === (Ts = n) && ((Bs = Jt() + 500), Va && Wa());
    }
  }
  function fc(e) {
    null !== Gs && 0 === Gs.tag && 0 == (6 & Ts) && Sc();
    var t = Ts;
    Ts |= 1;
    var n = zs.transition,
      r = kn;
    try {
      if (((zs.transition = null), (kn = 1), e)) return e();
    } finally {
      (kn = r), (zs.transition = n), 0 == (6 & (Ts = t)) && Wa();
    }
  }
  function dc() {
    (Ms = Rs.current), Pa(Rs);
  }
  function pc(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), la(n)), null !== js))
      for (n = js.return; null !== n; ) {
        var r = n;
        switch ((rl(r), r.tag)) {
          case 1:
            null != (r = r.type.childContextTypes) && Aa();
            break;
          case 3:
            Jl(), Pa(ja), Pa(Oa), oi();
            break;
          case 5:
            ei(r);
            break;
          case 4:
            Jl();
            break;
          case 13:
          case 19:
            Pa(ti);
            break;
          case 10:
            Tl(r.type._context);
            break;
          case 22:
          case 23:
            dc();
        }
        n = n.return;
      }
    if (
      ((Os = e),
      (js = e = Rc(e.current, null)),
      (Ns = Ms = t),
      (As = 0),
      (Ls = null),
      ($s = Fs = Is = 0),
      (Vs = Ds = null),
      null !== Ml)
    ) {
      for (t = 0; t < Ml.length; t++)
        if (null !== (r = (n = Ml[t]).interleaved)) {
          n.interleaved = null;
          var o = r.next,
            a = n.pending;
          if (null !== a) {
            var l = a.next;
            (a.next = o), (r.next = l);
          }
          n.pending = r;
        }
      Ml = null;
    }
    return e;
  }
  function mc(e, t) {
    for (;;) {
      var n = js;
      try {
        if ((zl(), (ai.current = Zi), fi)) {
          for (var r = ui.memoizedState; null !== r; ) {
            var o = r.queue;
            null !== o && (o.pending = null), (r = r.next);
          }
          fi = !1;
        }
        if (
          ((ii = 0),
          (ci = si = ui = null),
          (di = !1),
          (pi = 0),
          (Ps.current = null),
          null === n || null === n.return)
        ) {
          (As = 1), (Ls = t), (js = null);
          break;
        }
        e: {
          var a = e,
            l = n.return,
            i = n,
            u = t;
          if (
            ((t = Ns),
            (i.flags |= 32768),
            null !== u && "object" == typeof u && "function" == typeof u.then)
          ) {
            var s = u,
              c = i,
              f = c.tag;
            if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
              var d = c.alternate;
              d
                ? ((c.updateQueue = d.updateQueue),
                  (c.memoizedState = d.memoizedState),
                  (c.lanes = d.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var p = gu(l);
            if (null !== p) {
              (p.flags &= -257),
                vu(p, l, i, 0, t),
                1 & p.mode && yu(a, s, t),
                (u = s);
              var m = (t = p).updateQueue;
              if (null === m) {
                var h = new Set();
                h.add(u), (t.updateQueue = h);
              } else m.add(u);
              break e;
            }
            if (0 == (1 & t)) {
              yu(a, s, t), yc();
              break e;
            }
            u = Error(le(426));
          } else if (ll && 1 & i.mode) {
            var y = gu(l);
            if (null !== y) {
              0 == (65536 & y.flags) && (y.flags |= 256),
                vu(y, l, i, 0, t),
                yl(cu(u, i));
              break e;
            }
          }
          (a = u = cu(u, i)),
            4 !== As && (As = 2),
            null === Ds ? (Ds = [a]) : Ds.push(a),
            (a = l);
          do {
            switch (a.tag) {
              case 3:
                (a.flags |= 65536),
                  (t &= -t),
                  (a.lanes |= t),
                  Bl(a, mu(0, u, t));
                break e;
              case 1:
                i = u;
                var g = a.type,
                  v = a.stateNode;
                if (
                  0 == (128 & a.flags) &&
                  ("function" == typeof g.getDerivedStateFromError ||
                    (null !== v &&
                      "function" == typeof v.componentDidCatch &&
                      (null === Qs || !Qs.has(v))))
                ) {
                  (a.flags |= 65536),
                    (t &= -t),
                    (a.lanes |= t),
                    Bl(a, hu(a, i, t));
                  break e;
                }
            }
            a = a.return;
          } while (null !== a);
        }
        kc(n);
      } catch (e) {
        (t = e), js === n && null !== n && (js = n = n.return);
        continue;
      }
      break;
    }
  }
  function hc() {
    var e = _s.current;
    return (_s.current = Zi), null === e ? Zi : e;
  }
  function yc() {
    (0 !== As && 3 !== As && 2 !== As) || (As = 4),
      null === Os ||
        (0 == (268435455 & Is) && 0 == (268435455 & Fs)) ||
        uc(Os, Ns);
  }
  function gc(e, t) {
    var n = Ts;
    Ts |= 2;
    var r = hc();
    for ((Os === e && Ns === t) || ((Ws = null), pc(e, t)); ; )
      try {
        vc();
        break;
      } catch (t) {
        mc(e, t);
      }
    if ((zl(), (Ts = n), (_s.current = r), null !== js)) throw Error(le(261));
    return (Os = null), (Ns = 0), As;
  }
  function vc() {
    for (; null !== js; ) xc(js);
  }
  function bc() {
    for (; null !== js && !Xt(); ) xc(js);
  }
  function xc(e) {
    var t = Cs(e.alternate, e, Ms);
    (e.memoizedProps = e.pendingProps),
      null === t ? kc(e) : (js = t),
      (Ps.current = null);
  }
  function kc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), 0 == (32768 & t.flags))) {
        if (null !== (n = qu(n, t, Ms))) return void (js = n);
      } else {
        if (null !== (n = Gu(n, t))) return (n.flags &= 32767), void (js = n);
        if (null === e) return (As = 6), void (js = null);
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      }
      if (null !== (t = t.sibling)) return void (js = t);
      js = t = e;
    } while (null !== t);
    0 === As && (As = 5);
  }
  function wc(e, t, n) {
    var r = kn,
      o = zs.transition;
    try {
      (zs.transition = null),
        (kn = 1),
        (function (e, t, n, r) {
          do {
            Sc();
          } while (null !== Gs);
          if (0 != (6 & Ts)) throw Error(le(327));
          n = e.finishedWork;
          var o = e.finishedLanes;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(le(177));
          (e.callbackNode = null), (e.callbackPriority = 0);
          var a = n.lanes | n.childLanes;
          if (
            ((function (e, t) {
              var n = e.pendingLanes & ~t;
              (e.pendingLanes = t),
                (e.suspendedLanes = 0),
                (e.pingedLanes = 0),
                (e.expiredLanes &= t),
                (e.mutableReadLanes &= t),
                (e.entangledLanes &= t),
                (t = e.entanglements);
              var r = e.eventTimes;
              for (e = e.expirationTimes; 0 < n; ) {
                var o = 31 - un(n),
                  a = 1 << o;
                (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
              }
            })(e, a),
            e === Os && ((js = Os = null), (Ns = 0)),
            (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
              qs ||
              ((qs = !0),
              Oc(nn, function () {
                return Sc(), null;
              })),
            (a = 0 != (15990 & n.flags)),
            0 != (15990 & n.subtreeFlags) || a)
          ) {
            (a = zs.transition), (zs.transition = null);
            var l = kn;
            kn = 1;
            var i = Ts;
            (Ts |= 4),
              (Ps.current = null),
              (function (e, t) {
                if (((na = Kn), ho((e = mo())))) {
                  if ("selectionStart" in e)
                    var n = { start: e.selectionStart, end: e.selectionEnd };
                  else
                    e: {
                      var r =
                        (n = ((n = e.ownerDocument) && n.defaultView) || window)
                          .getSelection && n.getSelection();
                      if (r && 0 !== r.rangeCount) {
                        n = r.anchorNode;
                        var o = r.anchorOffset,
                          a = r.focusNode;
                        r = r.focusOffset;
                        try {
                          n.nodeType, a.nodeType;
                        } catch (e) {
                          n = null;
                          break e;
                        }
                        var l = 0,
                          i = -1,
                          u = -1,
                          s = 0,
                          c = 0,
                          f = e,
                          d = null;
                        t: for (;;) {
                          for (
                            var p;
                            f !== n ||
                              (0 !== o && 3 !== f.nodeType) ||
                              (i = l + o),
                              f !== a ||
                                (0 !== r && 3 !== f.nodeType) ||
                                (u = l + r),
                              3 === f.nodeType && (l += f.nodeValue.length),
                              null !== (p = f.firstChild);

                          )
                            (d = f), (f = p);
                          for (;;) {
                            if (f === e) break t;
                            if (
                              (d === n && ++s === o && (i = l),
                              d === a && ++c === r && (u = l),
                              null !== (p = f.nextSibling))
                            )
                              break;
                            d = (f = d).parentNode;
                          }
                          f = p;
                        }
                        n = -1 === i || -1 === u ? null : { start: i, end: u };
                      } else n = null;
                    }
                  n = n || { start: 0, end: 0 };
                } else n = null;
                for (
                  ra = { focusedElem: e, selectionRange: n }, Kn = !1, Zu = t;
                  null !== Zu;

                )
                  if (
                    ((e = (t = Zu).child),
                    0 != (1028 & t.subtreeFlags) && null !== e)
                  )
                    (e.return = t), (Zu = e);
                  else
                    for (; null !== Zu; ) {
                      t = Zu;
                      try {
                        var m = t.alternate;
                        if (0 != (1024 & t.flags))
                          switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                              break;
                            case 1:
                              if (null !== m) {
                                var h = m.memoizedProps,
                                  y = m.memoizedState,
                                  g = t.stateNode,
                                  v = g.getSnapshotBeforeUpdate(
                                    t.elementType === t.type
                                      ? h
                                      : ru(t.type, h),
                                    y
                                  );
                                g.__reactInternalSnapshotBeforeUpdate = v;
                              }
                              break;
                            case 3:
                              var b = t.stateNode.containerInfo;
                              1 === b.nodeType
                                ? (b.textContent = "")
                                : 9 === b.nodeType &&
                                  b.documentElement &&
                                  b.removeChild(b.documentElement);
                              break;
                            default:
                              throw Error(le(163));
                          }
                      } catch (e) {
                        Ec(t, t.return, e);
                      }
                      if (null !== (e = t.sibling)) {
                        (e.return = t.return), (Zu = e);
                        break;
                      }
                      Zu = t.return;
                    }
                (m = ns), (ns = !1);
              })(e, n),
              gs(n, e),
              yo(ra),
              (Kn = !!na),
              (ra = na = null),
              (e.current = n),
              bs(n),
              Yt(),
              (Ts = i),
              (kn = l),
              (zs.transition = a);
          } else e.current = n;
          if (
            (qs && ((qs = !1), (Gs = e), (Xs = o)),
            (a = e.pendingLanes),
            0 === a && (Qs = null),
            (function (e) {
              if (ln && "function" == typeof ln.onCommitFiberRoot)
                try {
                  ln.onCommitFiberRoot(
                    an,
                    e,
                    void 0,
                    128 == (128 & e.current.flags)
                  );
                } catch (e) {}
            })(n.stateNode),
            oc(e, Jt()),
            null !== t)
          )
            for (r = e.onRecoverableError, n = 0; n < t.length; n++)
              (o = t[n]),
                r(o.value, { componentStack: o.stack, digest: o.digest });
          if (Hs) throw ((Hs = !1), (e = Ks), (Ks = null), e);
          0 != (1 & Xs) && 0 !== e.tag && Sc(),
            (a = e.pendingLanes),
            0 != (1 & a) ? (e === Js ? Ys++ : ((Ys = 0), (Js = e))) : (Ys = 0),
            Wa();
        })(e, t, n, r);
    } finally {
      (zs.transition = o), (kn = r);
    }
    return null;
  }
  function Sc() {
    if (null !== Gs) {
      var e = wn(Xs),
        t = zs.transition,
        n = kn;
      try {
        if (((zs.transition = null), (kn = 16 > e ? 16 : e), null === Gs))
          var r = !1;
        else {
          if (((e = Gs), (Gs = null), (Xs = 0), 0 != (6 & Ts)))
            throw Error(le(331));
          var o = Ts;
          for (Ts |= 4, Zu = e.current; null !== Zu; ) {
            var a = Zu,
              l = a.child;
            if (0 != (16 & Zu.flags)) {
              var i = a.deletions;
              if (null !== i) {
                for (var u = 0; u < i.length; u++) {
                  var s = i[u];
                  for (Zu = s; null !== Zu; ) {
                    var c = Zu;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        rs(8, c, a);
                    }
                    var f = c.child;
                    if (null !== f) (f.return = c), (Zu = f);
                    else
                      for (; null !== Zu; ) {
                        var d = (c = Zu).sibling,
                          p = c.return;
                        if ((ls(c), c === s)) {
                          Zu = null;
                          break;
                        }
                        if (null !== d) {
                          (d.return = p), (Zu = d);
                          break;
                        }
                        Zu = p;
                      }
                  }
                }
                var m = a.alternate;
                if (null !== m) {
                  var h = m.child;
                  if (null !== h) {
                    m.child = null;
                    do {
                      var y = h.sibling;
                      (h.sibling = null), (h = y);
                    } while (null !== h);
                  }
                }
                Zu = a;
              }
            }
            if (0 != (2064 & a.subtreeFlags) && null !== l)
              (l.return = a), (Zu = l);
            else
              e: for (; null !== Zu; ) {
                if (0 != (2048 & (a = Zu).flags))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rs(9, a, a.return);
                  }
                var g = a.sibling;
                if (null !== g) {
                  (g.return = a.return), (Zu = g);
                  break e;
                }
                Zu = a.return;
              }
          }
          var v = e.current;
          for (Zu = v; null !== Zu; ) {
            var b = (l = Zu).child;
            if (0 != (2064 & l.subtreeFlags) && null !== b)
              (b.return = l), (Zu = b);
            else
              e: for (l = v; null !== Zu; ) {
                if (0 != (2048 & (i = Zu).flags))
                  try {
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        os(9, i);
                    }
                  } catch (e) {
                    Ec(i, i.return, e);
                  }
                if (i === l) {
                  Zu = null;
                  break e;
                }
                var x = i.sibling;
                if (null !== x) {
                  (x.return = i.return), (Zu = x);
                  break e;
                }
                Zu = i.return;
              }
          }
          if (
            ((Ts = o),
            Wa(),
            ln && "function" == typeof ln.onPostCommitFiberRoot)
          )
            try {
              ln.onPostCommitFiberRoot(an, e);
            } catch (e) {}
          r = !0;
        }
        return r;
      } finally {
        (kn = n), (zs.transition = t);
      }
    }
    return !1;
  }
  function Cc(e, t, n) {
    (e = Vl(e, (t = mu(0, (t = cu(n, t)), 1)), 1)),
      (t = tc()),
      null !== e && (bn(e, 1, t), oc(e, t));
  }
  function Ec(e, t, n) {
    if (3 === e.tag) Cc(e, e, n);
    else
      for (; null !== t; ) {
        if (3 === t.tag) {
          Cc(t, e, n);
          break;
        }
        if (1 === t.tag) {
          var r = t.stateNode;
          if (
            "function" == typeof t.type.getDerivedStateFromError ||
            ("function" == typeof r.componentDidCatch &&
              (null === Qs || !Qs.has(r)))
          ) {
            (t = Vl(t, (e = hu(t, (e = cu(n, e)), 1)), 1)),
              (e = tc()),
              null !== t && (bn(t, 1, e), oc(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function _c(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
      (t = tc()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Os === e &&
        (Ns & n) === n &&
        (4 === As || (3 === As && (130023424 & Ns) === Ns && 500 > Jt() - Us)
          ? pc(e, 0)
          : ($s |= n)),
      oc(e, t);
  }
  function Pc(e, t) {
    0 === t &&
      (0 == (1 & e.mode)
        ? (t = 1)
        : ((t = dn), 0 == (130023424 & (dn <<= 1)) && (dn = 4194304)));
    var n = tc();
    null !== (e = Ll(e, t)) && (bn(e, t, n), oc(e, n));
  }
  function zc(e) {
    var t = e.memoizedState,
      n = 0;
    null !== t && (n = t.retryLane), Pc(e, n);
  }
  function Tc(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          o = e.memoizedState;
        null !== o && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(le(314));
    }
    null !== r && r.delete(t), Pc(e, n);
  }
  function Oc(e, t) {
    return qt(e, t);
  }
  function jc(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Nc(e, t, n, r) {
    return new jc(e, t, n, r);
  }
  function Mc(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
  }
  function Rc(e, t) {
    var n = e.alternate;
    return (
      null === n
        ? (((n = Nc(e.tag, t, e.key, e.mode)).elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = 14680064 & e.flags),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ac(e, t, n, r, o, a) {
    var l = 2;
    if (((r = e), "function" == typeof e)) Mc(e) && (l = 1);
    else if ("string" == typeof e) l = 5;
    else
      e: switch (e) {
        case Ce:
          return Lc(n.children, o, a, t);
        case Ee:
          (l = 8), (o |= 8);
          break;
        case _e:
          return ((e = Nc(12, n, t, 2 | o)).elementType = _e), (e.lanes = a), e;
        case Oe:
          return ((e = Nc(13, n, t, o)).elementType = Oe), (e.lanes = a), e;
        case je:
          return ((e = Nc(19, n, t, o)).elementType = je), (e.lanes = a), e;
        case Re:
          return Ic(n, o, a, t);
        default:
          if ("object" == typeof e && null !== e)
            switch (e.$$typeof) {
              case Pe:
                l = 10;
                break e;
              case ze:
                l = 9;
                break e;
              case Te:
                l = 11;
                break e;
              case Ne:
                l = 14;
                break e;
              case Me:
                (l = 16), (r = null);
                break e;
            }
          throw Error(le(130, null == e ? e : typeof e, ""));
      }
    return (
      ((t = Nc(l, n, t, o)).elementType = e), (t.type = r), (t.lanes = a), t
    );
  }
  function Lc(e, t, n, r) {
    return ((e = Nc(7, e, r, t)).lanes = n), e;
  }
  function Ic(e, t, n, r) {
    return (
      ((e = Nc(22, e, r, t)).elementType = Re),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Fc(e, t, n) {
    return ((e = Nc(6, e, null, t)).lanes = n), e;
  }
  function $c(e, t, n) {
    return (
      ((t = Nc(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Dc(e, t, n, r, o) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = vn(0)),
      (this.expirationTimes = vn(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vn(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Vc(e, t, n, r, o, a, l, i, u) {
    return (
      (e = new Dc(e, t, n, i, u)),
      1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
      (a = Nc(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Fl(a),
      e
    );
  }
  function Uc(e) {
    if (!e) return Ta;
    e: {
      if (Bt((e = e._reactInternals)) !== e || 1 !== e.tag)
        throw Error(le(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ra(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (null !== t);
      throw Error(le(171));
    }
    if (1 === e.tag) {
      var n = e.type;
      if (Ra(n)) return Ia(e, n, t);
    }
    return t;
  }
  function Bc(e, t, n, r, o, a, l, i, u) {
    return (
      ((e = Vc(n, r, !0, e, 0, a, 0, i, u)).context = Uc(null)),
      (n = e.current),
      ((a = Dl((r = tc()), (o = nc(n)))).callback = null != t ? t : null),
      Vl(n, a, o),
      (e.current.lanes = o),
      bn(e, o, r),
      oc(e, r),
      e
    );
  }
  function Wc(e, t, n, r) {
    var o = t.current,
      a = tc(),
      l = nc(o);
    return (
      (n = Uc(n)),
      null === t.context ? (t.context = n) : (t.pendingContext = n),
      ((t = Dl(a, l)).payload = { element: e }),
      null !== (r = void 0 === r ? null : r) && (t.callback = r),
      null !== (e = Vl(o, t, l)) && (rc(e, o, l, a), Ul(e, o, l)),
      l
    );
  }
  function Hc(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
  }
  function Kc(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
      var n = e.retryLane;
      e.retryLane = 0 !== n && n < t ? n : t;
    }
  }
  function Qc(e, t) {
    Kc(e, t), (e = e.alternate) && Kc(e, t);
  }
  Cs = function (e, t, n) {
    if (null !== e)
      if (e.memoizedProps !== t.pendingProps || ja.current) xu = !0;
      else {
        if (0 == (e.lanes & n) && 0 == (128 & t.flags))
          return (
            (xu = !1),
            (function (e, t, n) {
              switch (t.tag) {
                case 3:
                  Ou(t), hl();
                  break;
                case 5:
                  Zl(t);
                  break;
                case 1:
                  Ra(t.type) && Fa(t);
                  break;
                case 4:
                  Yl(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  var r = t.type._context,
                    o = t.memoizedProps.value;
                  za(Cl, r._currentValue), (r._currentValue = o);
                  break;
                case 13:
                  if (null !== (r = t.memoizedState))
                    return null !== r.dehydrated
                      ? (za(ti, 1 & ti.current), (t.flags |= 128), null)
                      : 0 != (n & t.child.childLanes)
                      ? Fu(e, t, n)
                      : (za(ti, 1 & ti.current),
                        null !== (e = Hu(e, t, n)) ? e.sibling : null);
                  za(ti, 1 & ti.current);
                  break;
                case 19:
                  if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                    if (r) return Bu(e, t, n);
                    t.flags |= 128;
                  }
                  if (
                    (null !== (o = t.memoizedState) &&
                      ((o.rendering = null),
                      (o.tail = null),
                      (o.lastEffect = null)),
                    za(ti, ti.current),
                    r)
                  )
                    break;
                  return null;
                case 22:
                case 23:
                  return (t.lanes = 0), Eu(e, t, n);
              }
              return Hu(e, t, n);
            })(e, t, n)
          );
        xu = 0 != (131072 & e.flags);
      }
    else (xu = !1), ll && 0 != (1048576 & t.flags) && tl(t, qa, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Wu(e, t), (e = t.pendingProps);
        var o = Ma(t, Oa.current);
        jl(t, n), (o = gi(null, t, r, e, o, n));
        var a = vi();
        return (
          (t.flags |= 1),
          "object" == typeof o &&
          null !== o &&
          "function" == typeof o.render &&
          void 0 === o.$$typeof
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ra(r) ? ((a = !0), Fa(t)) : (a = !1),
              (t.memoizedState =
                null !== o.state && void 0 !== o.state ? o.state : null),
              Fl(t),
              (o.updater = au),
              (t.stateNode = o),
              (o._reactInternals = t),
              su(t, r, e, n),
              (t = Tu(null, t, r, !0, a, n)))
            : ((t.tag = 0), ll && a && nl(t), ku(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Wu(e, t),
            (e = t.pendingProps),
            (r = (o = r._init)(r._payload)),
            (t.type = r),
            (o = t.tag =
              (function (e) {
                if ("function" == typeof e) return Mc(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === Te) return 11;
                  if (e === Ne) return 14;
                }
                return 2;
              })(r)),
            (e = ru(r, e)),
            o)
          ) {
            case 0:
              t = Pu(null, t, r, e, n);
              break e;
            case 1:
              t = zu(null, t, r, e, n);
              break e;
            case 11:
              t = wu(null, t, r, e, n);
              break e;
            case 14:
              t = Su(null, t, r, ru(r.type, e), n);
              break e;
          }
          throw Error(le(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          Pu(e, t, r, (o = t.elementType === r ? o : ru(r, o)), n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          zu(e, t, r, (o = t.elementType === r ? o : ru(r, o)), n)
        );
      case 3:
        e: {
          if ((Ou(t), null === e)) throw Error(le(387));
          (r = t.pendingProps),
            (o = (a = t.memoizedState).element),
            $l(e, t),
            Wl(t, r, null, n);
          var l = t.memoizedState;
          if (((r = l.element), a.isDehydrated)) {
            if (
              ((a = {
                element: r,
                isDehydrated: !1,
                cache: l.cache,
                pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                transitions: l.transitions,
              }),
              (t.updateQueue.baseState = a),
              (t.memoizedState = a),
              256 & t.flags)
            ) {
              t = ju(e, t, r, n, (o = cu(Error(le(423)), t)));
              break e;
            }
            if (r !== o) {
              t = ju(e, t, r, n, (o = cu(Error(le(424)), t)));
              break e;
            }
            for (
              al = fa(t.stateNode.containerInfo.firstChild),
                ol = t,
                ll = !0,
                il = null,
                n = Sl(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
          } else {
            if ((hl(), r === o)) {
              t = Hu(e, t, n);
              break e;
            }
            ku(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Zl(t),
          null === e && fl(t),
          (r = t.type),
          (o = t.pendingProps),
          (a = null !== e ? e.memoizedProps : null),
          (l = o.children),
          oa(r, o) ? (l = null) : null !== a && oa(r, a) && (t.flags |= 32),
          _u(e, t),
          ku(e, t, l, n),
          t.child
        );
      case 6:
        return null === e && fl(t), null;
      case 13:
        return Fu(e, t, n);
      case 4:
        return (
          Yl(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          null === e ? (t.child = wl(t, null, r, n)) : ku(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          wu(e, t, r, (o = t.elementType === r ? o : ru(r, o)), n)
        );
      case 7:
        return ku(e, t, t.pendingProps, n), t.child;
      case 8:
      case 12:
        return ku(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (a = t.memoizedProps),
            (l = o.value),
            za(Cl, r._currentValue),
            (r._currentValue = l),
            null !== a)
          )
            if (uo(a.value, l)) {
              if (a.children === o.children && !ja.current) {
                t = Hu(e, t, n);
                break e;
              }
            } else
              for (null !== (a = t.child) && (a.return = t); null !== a; ) {
                var i = a.dependencies;
                if (null !== i) {
                  l = a.child;
                  for (var u = i.firstContext; null !== u; ) {
                    if (u.context === r) {
                      if (1 === a.tag) {
                        (u = Dl(-1, n & -n)).tag = 2;
                        var s = a.updateQueue;
                        if (null !== s) {
                          var c = (s = s.shared).pending;
                          null === c
                            ? (u.next = u)
                            : ((u.next = c.next), (c.next = u)),
                            (s.pending = u);
                        }
                      }
                      (a.lanes |= n),
                        null !== (u = a.alternate) && (u.lanes |= n),
                        Ol(a.return, n, t),
                        (i.lanes |= n);
                      break;
                    }
                    u = u.next;
                  }
                } else if (10 === a.tag) l = a.type === t.type ? null : a.child;
                else if (18 === a.tag) {
                  if (null === (l = a.return)) throw Error(le(341));
                  (l.lanes |= n),
                    null !== (i = l.alternate) && (i.lanes |= n),
                    Ol(l, n, t),
                    (l = a.sibling);
                } else l = a.child;
                if (null !== l) l.return = a;
                else
                  for (l = a; null !== l; ) {
                    if (l === t) {
                      l = null;
                      break;
                    }
                    if (null !== (a = l.sibling)) {
                      (a.return = l.return), (l = a);
                      break;
                    }
                    l = l.return;
                  }
                a = l;
              }
          ku(e, t, o.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          jl(t, n),
          (r = r((o = Nl(o)))),
          (t.flags |= 1),
          ku(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (o = ru((r = t.type), t.pendingProps)),
          Su(e, t, r, (o = ru(r.type, o)), n)
        );
      case 15:
        return Cu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : ru(r, o)),
          Wu(e, t),
          (t.tag = 1),
          Ra(r) ? ((e = !0), Fa(t)) : (e = !1),
          jl(t, n),
          iu(t, r, o),
          su(t, r, o, n),
          Tu(null, t, r, !0, e, n)
        );
      case 19:
        return Bu(e, t, n);
      case 22:
        return Eu(e, t, n);
    }
    throw Error(le(156, t.tag));
  };
  var qc =
    "function" == typeof reportError
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Gc(e) {
    this._internalRoot = e;
  }
  function Xc(e) {
    this._internalRoot = e;
  }
  function Yc(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
  }
  function Jc(e) {
    return !(
      !e ||
      (1 !== e.nodeType &&
        9 !== e.nodeType &&
        11 !== e.nodeType &&
        (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    );
  }
  function Zc() {}
  function ef(e, t, n, r, o) {
    var a = n._reactRootContainer;
    if (a) {
      var l = a;
      if ("function" == typeof o) {
        var i = o;
        o = function () {
          var e = Hc(l);
          i.call(e);
        };
      }
      Wc(t, l, e, o);
    } else
      l = (function (e, t, n, r, o) {
        if (o) {
          if ("function" == typeof r) {
            var a = r;
            r = function () {
              var e = Hc(l);
              a.call(e);
            };
          }
          var l = Bc(t, r, e, 0, null, !1, 0, "", Zc);
          return (
            (e._reactRootContainer = l),
            (e[ya] = l.current),
            Wo(8 === e.nodeType ? e.parentNode : e),
            fc(),
            l
          );
        }
        for (; (o = e.lastChild); ) e.removeChild(o);
        if ("function" == typeof r) {
          var i = r;
          r = function () {
            var e = Hc(u);
            i.call(e);
          };
        }
        var u = Vc(e, 0, !1, null, 0, !1, 0, "", Zc);
        return (
          (e._reactRootContainer = u),
          (e[ya] = u.current),
          Wo(8 === e.nodeType ? e.parentNode : e),
          fc(function () {
            Wc(t, u, n, r);
          }),
          u
        );
      })(n, t, e, o, r);
    return Hc(l);
  }
  (Xc.prototype.render = Gc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (null === t) throw Error(le(409));
      Wc(e, t, null, null);
    }),
    (Xc.prototype.unmount = Gc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          fc(function () {
            Wc(null, e, null, null);
          }),
            (t[ya] = null);
        }
      }),
    (Xc.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = _n();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < An.length && 0 !== t && t < An[n].priority; n++);
        An.splice(n, 0, e), 0 === n && $n(e);
      }
    }),
    (Sn = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = pn(t.pendingLanes);
            0 !== n &&
              (xn(t, 1 | n),
              oc(t, Jt()),
              0 == (6 & Ts) && ((Bs = Jt() + 500), Wa()));
          }
          break;
        case 13:
          fc(function () {
            var t = Ll(e, 1);
            if (null !== t) {
              var n = tc();
              rc(t, e, 1, n);
            }
          }),
            Qc(e, 1);
      }
    }),
    (Cn = function (e) {
      if (13 === e.tag) {
        var t = Ll(e, 134217728);
        if (null !== t) rc(t, e, 134217728, tc());
        Qc(e, 134217728);
      }
    }),
    (En = function (e) {
      if (13 === e.tag) {
        var t = nc(e),
          n = Ll(e, t);
        if (null !== n) rc(n, e, t, tc());
        Qc(e, t);
      }
    }),
    (_n = function () {
      return kn;
    }),
    (Pn = function (e, t) {
      var n = kn;
      try {
        return (kn = e), t();
      } finally {
        kn = n;
      }
    }),
    (St = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ze(e, n), (t = n.name), "radio" === n.type && null != t)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var o = Sa(r);
                if (!o) throw Error(le(90));
                qe(r), Ze(r, o);
              }
            }
          }
          break;
        case "textarea":
          lt(e, n);
          break;
        case "select":
          null != (t = n.value) && rt(e, !!n.multiple, t, !1);
      }
    }),
    (Tt = cc),
    (Ot = fc);
  var tf = { usingClientEntryPoint: !1, Events: [ka, wa, Sa, Pt, zt, cc] },
    nf = {
      findFiberByHostInstance: xa,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    rf = {
      bundleType: nf.bundleType,
      version: nf.version,
      rendererPackageName: nf.rendererPackageName,
      rendererConfig: nf.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ke.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return null === (e = Kt(e)) ? null : e.stateNode;
      },
      findFiberByHostInstance:
        nf.findFiberByHostInstance ||
        function () {
          return null;
        },
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var of = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!of.isDisabled && of.supportsFiber)
      try {
        (an = of.inject(rf)), (ln = of);
      } catch (ft) {}
  }
  (ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tf),
    (ee.createPortal = function (e, t) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!Yc(t)) throw Error(le(200));
      return (function (e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: Se,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      })(e, t, null, n);
    }),
    (ee.createRoot = function (e, t) {
      if (!Yc(e)) throw Error(le(299));
      var n = !1,
        r = "",
        o = qc;
      return (
        null != t &&
          (!0 === t.unstable_strictMode && (n = !0),
          void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
          void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
        (t = Vc(e, 1, !1, null, 0, n, 0, r, o)),
        (e[ya] = t.current),
        Wo(8 === e.nodeType ? e.parentNode : e),
        new Gc(t)
      );
    }),
    (ee.findDOMNode = function (e) {
      if (null == e) return null;
      if (1 === e.nodeType) return e;
      var t = e._reactInternals;
      if (void 0 === t) {
        if ("function" == typeof e.render) throw Error(le(188));
        throw ((e = Object.keys(e).join(",")), Error(le(268, e)));
      }
      return (e = null === (e = Kt(t)) ? null : e.stateNode);
    }),
    (ee.flushSync = function (e) {
      return fc(e);
    }),
    (ee.hydrate = function (e, t, n) {
      if (!Jc(t)) throw Error(le(200));
      return ef(null, e, t, !0, n);
    }),
    (ee.hydrateRoot = function (e, t, n) {
      if (!Yc(e)) throw Error(le(405));
      var r = (null != n && n.hydratedSources) || null,
        o = !1,
        a = "",
        l = qc;
      if (
        (null != n &&
          (!0 === n.unstable_strictMode && (o = !0),
          void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
          void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
        (t = Bc(t, null, e, 1, null != n ? n : null, o, 0, a, l)),
        (e[ya] = t.current),
        Wo(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (o = (o = (n = r[e])._getVersion)(n._source)),
            null == t.mutableSourceEagerHydrationData
              ? (t.mutableSourceEagerHydrationData = [n, o])
              : t.mutableSourceEagerHydrationData.push(n, o);
      return new Xc(t);
    }),
    (ee.render = function (e, t, n) {
      if (!Jc(t)) throw Error(le(200));
      return ef(null, e, t, !1, n);
    }),
    (ee.unmountComponentAtNode = function (e) {
      if (!Jc(e)) throw Error(le(40));
      return (
        !!e._reactRootContainer &&
        (fc(function () {
          ef(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[ya] = null);
          });
        }),
        !0)
      );
    }),
    (ee.unstable_batchedUpdates = cc),
    (ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Jc(n)) throw Error(le(200));
      if (null == e || void 0 === e._reactInternals) throw Error(le(38));
      return ef(e, t, n, !1, r);
    }),
    (ee.version = "18.3.1-next-f1338f8080-20240426"),
    (function e() {
      if (
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
    })(),
    (Z.exports = ee);
  var af,
    lf = Z.exports;
  (af = lf.createRoot), lf.hydrateRoot;
  const uf = { black: "#000", white: "#fff" },
    sf = {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000",
    },
    cf = {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
      A100: "#ea80fc",
      A200: "#e040fb",
      A400: "#d500f9",
      A700: "#aa00ff",
    },
    ff = {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff",
    },
    df = {
      50: "#e1f5fe",
      100: "#b3e5fc",
      200: "#81d4fa",
      300: "#4fc3f7",
      400: "#29b6f6",
      500: "#03a9f4",
      600: "#039be5",
      700: "#0288d1",
      800: "#0277bd",
      900: "#01579b",
      A100: "#80d8ff",
      A200: "#40c4ff",
      A400: "#00b0ff",
      A700: "#0091ea",
    },
    pf = {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      A100: "#b9f6ca",
      A200: "#69f0ae",
      A400: "#00e676",
      A700: "#00c853",
    },
    mf = {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
      A100: "#ffd180",
      A200: "#ffab40",
      A400: "#ff9100",
      A700: "#ff6d00",
    },
    hf = {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    };
  function yf(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let e = 1; e < arguments.length; e += 1)
      t += "&args[]=" + encodeURIComponent(arguments[e]);
    return (
      "Minified MUI error #" + e + "; visit " + t + " for the full message."
    );
  }
  var gf = Object.freeze({ __proto__: null, default: yf }),
    vf = "$$material";
  function bf() {
    return (
      (bf = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      bf.apply(this, arguments)
    );
  }
  function xf(e, t) {
    if (null == e) return {};
    var n,
      r,
      o = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o;
  }
  function kf(e) {
    var t = Object.create(null);
    return function (n) {
      return void 0 === t[n] && (t[n] = e(n)), t[n];
    };
  }
  var wf =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    Sf = kf(function (e) {
      return (
        wf.test(e) ||
        (111 === e.charCodeAt(0) &&
          110 === e.charCodeAt(1) &&
          e.charCodeAt(2) < 91)
      );
    });
  var Cf = (function () {
      function e(e) {
        var t = this;
        (this._insertTag = function (e) {
          var n;
          (n =
            0 === t.tags.length
              ? t.insertionPoint
                ? t.insertionPoint.nextSibling
                : t.prepend
                ? t.container.firstChild
                : t.before
              : t.tags[t.tags.length - 1].nextSibling),
            t.container.insertBefore(e, n),
            t.tags.push(e);
        }),
          (this.isSpeedy = void 0 === e.speedy || e.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = e.nonce),
          (this.key = e.key),
          (this.container = e.container),
          (this.prepend = e.prepend),
          (this.insertionPoint = e.insertionPoint),
          (this.before = null);
      }
      var t = e.prototype;
      return (
        (t.hydrate = function (e) {
          e.forEach(this._insertTag);
        }),
        (t.insert = function (e) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
            this._insertTag(
              (function (e) {
                var t = document.createElement("style");
                return (
                  t.setAttribute("data-emotion", e.key),
                  void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                  t.appendChild(document.createTextNode("")),
                  t.setAttribute("data-s", ""),
                  t
                );
              })(this)
            );
          var t = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var n = (function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            })(t);
            try {
              n.insertRule(e, n.cssRules.length);
            } catch (e) {}
          } else t.appendChild(document.createTextNode(e));
          this.ctr++;
        }),
        (t.flush = function () {
          this.tags.forEach(function (e) {
            var t;
            return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
          }),
            (this.tags = []),
            (this.ctr = 0);
        }),
        e
      );
    })(),
    Ef = "-ms-",
    _f = "-moz-",
    Pf = "-webkit-",
    zf = "comm",
    Tf = "rule",
    Of = "decl",
    jf = "@keyframes",
    Nf = Math.abs,
    Mf = String.fromCharCode,
    Rf = Object.assign;
  function Af(e) {
    return e.trim();
  }
  function Lf(e, t, n) {
    return e.replace(t, n);
  }
  function If(e, t) {
    return e.indexOf(t);
  }
  function Ff(e, t) {
    return 0 | e.charCodeAt(t);
  }
  function $f(e, t, n) {
    return e.slice(t, n);
  }
  function Df(e) {
    return e.length;
  }
  function Vf(e) {
    return e.length;
  }
  function Uf(e, t) {
    return t.push(e), e;
  }
  var Bf = 1,
    Wf = 1,
    Hf = 0,
    Kf = 0,
    Qf = 0,
    qf = "";
  function Gf(e, t, n, r, o, a, l) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: a,
      line: Bf,
      column: Wf,
      length: l,
      return: "",
    };
  }
  function Xf(e, t) {
    return Rf(
      Gf("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t
    );
  }
  function Yf() {
    return (
      (Qf = Kf > 0 ? Ff(qf, --Kf) : 0), Wf--, 10 === Qf && ((Wf = 1), Bf--), Qf
    );
  }
  function Jf() {
    return (
      (Qf = Kf < Hf ? Ff(qf, Kf++) : 0), Wf++, 10 === Qf && ((Wf = 1), Bf++), Qf
    );
  }
  function Zf() {
    return Ff(qf, Kf);
  }
  function ed() {
    return Kf;
  }
  function td(e, t) {
    return $f(qf, e, t);
  }
  function nd(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function rd(e) {
    return (Bf = Wf = 1), (Hf = Df((qf = e))), (Kf = 0), [];
  }
  function od(e) {
    return (qf = ""), e;
  }
  function ad(e) {
    return Af(td(Kf - 1, ud(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
  }
  function ld(e) {
    for (; (Qf = Zf()) && Qf < 33; ) Jf();
    return nd(e) > 2 || nd(Qf) > 3 ? "" : " ";
  }
  function id(e, t) {
    for (
      ;
      --t &&
      Jf() &&
      !(Qf < 48 || Qf > 102 || (Qf > 57 && Qf < 65) || (Qf > 70 && Qf < 97));

    );
    return td(e, ed() + (t < 6 && 32 == Zf() && 32 == Jf()));
  }
  function ud(e) {
    for (; Jf(); )
      switch (Qf) {
        case e:
          return Kf;
        case 34:
        case 39:
          34 !== e && 39 !== e && ud(Qf);
          break;
        case 40:
          41 === e && ud(e);
          break;
        case 92:
          Jf();
      }
    return Kf;
  }
  function sd(e, t) {
    for (; Jf() && e + Qf !== 57 && (e + Qf !== 84 || 47 !== Zf()); );
    return "/*" + td(t, Kf - 1) + "*" + Mf(47 === e ? e : Jf());
  }
  function cd(e) {
    for (; !nd(Zf()); ) Jf();
    return td(e, Kf);
  }
  function fd(e) {
    return od(dd("", null, null, null, [""], (e = rd(e)), 0, [0], e));
  }
  function dd(e, t, n, r, o, a, l, i, u) {
    for (
      var s = 0,
        c = 0,
        f = l,
        d = 0,
        p = 0,
        m = 0,
        h = 1,
        y = 1,
        g = 1,
        v = 0,
        b = "",
        x = o,
        k = a,
        w = r,
        S = b;
      y;

    )
      switch (((m = v), (v = Jf()))) {
        case 40:
          if (108 != m && 58 == Ff(S, f - 1)) {
            -1 != If((S += Lf(ad(v), "&", "&\f")), "&\f") && (g = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          S += ad(v);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          S += ld(m);
          break;
        case 92:
          S += id(ed() - 1, 7);
          continue;
        case 47:
          switch (Zf()) {
            case 42:
            case 47:
              Uf(md(sd(Jf(), ed()), t, n), u);
              break;
            default:
              S += "/";
          }
          break;
        case 123 * h:
          i[s++] = Df(S) * g;
        case 125 * h:
        case 59:
        case 0:
          switch (v) {
            case 0:
            case 125:
              y = 0;
            case 59 + c:
              -1 == g && (S = Lf(S, /\f/g, "")),
                p > 0 &&
                  Df(S) - f &&
                  Uf(
                    p > 32
                      ? hd(S + ";", r, n, f - 1)
                      : hd(Lf(S, " ", "") + ";", r, n, f - 2),
                    u
                  );
              break;
            case 59:
              S += ";";
            default:
              if (
                (Uf((w = pd(S, t, n, s, c, o, i, b, (x = []), (k = []), f)), a),
                123 === v)
              )
                if (0 === c) dd(S, t, w, w, x, a, f, i, k);
                else
                  switch (99 === d && 110 === Ff(S, 3) ? 100 : d) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      dd(
                        e,
                        w,
                        w,
                        r && Uf(pd(e, w, w, 0, 0, o, i, b, o, (x = []), f), k),
                        o,
                        k,
                        f,
                        i,
                        r ? x : k
                      );
                      break;
                    default:
                      dd(S, w, w, w, [""], k, 0, i, k);
                  }
          }
          (s = c = p = 0), (h = g = 1), (b = S = ""), (f = l);
          break;
        case 58:
          (f = 1 + Df(S)), (p = m);
        default:
          if (h < 1)
            if (123 == v) --h;
            else if (125 == v && 0 == h++ && 125 == Yf()) continue;
          switch (((S += Mf(v)), v * h)) {
            case 38:
              g = c > 0 ? 1 : ((S += "\f"), -1);
              break;
            case 44:
              (i[s++] = (Df(S) - 1) * g), (g = 1);
              break;
            case 64:
              45 === Zf() && (S += ad(Jf())),
                (d = Zf()),
                (c = f = Df((b = S += cd(ed())))),
                v++;
              break;
            case 45:
              45 === m && 2 == Df(S) && (h = 0);
          }
      }
    return a;
  }
  function pd(e, t, n, r, o, a, l, i, u, s, c) {
    for (
      var f = o - 1, d = 0 === o ? a : [""], p = Vf(d), m = 0, h = 0, y = 0;
      m < r;
      ++m
    )
      for (var g = 0, v = $f(e, f + 1, (f = Nf((h = l[m])))), b = e; g < p; ++g)
        (b = Af(h > 0 ? d[g] + " " + v : Lf(v, /&\f/g, d[g]))) && (u[y++] = b);
    return Gf(e, t, n, 0 === o ? Tf : i, u, s, c);
  }
  function md(e, t, n) {
    return Gf(e, t, n, zf, Mf(Qf), $f(e, 2, -2), 0);
  }
  function hd(e, t, n, r) {
    return Gf(e, t, n, Of, $f(e, 0, r), $f(e, r + 1, -1), r);
  }
  function yd(e, t) {
    for (var n = "", r = Vf(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n;
  }
  function gd(e, t, n, r) {
    switch (e.type) {
      case "@layer":
        if (e.children.length) break;
      case "@import":
      case Of:
        return (e.return = e.return || e.value);
      case zf:
        return "";
      case jf:
        return (e.return = e.value + "{" + yd(e.children, r) + "}");
      case Tf:
        e.value = e.props.join(",");
    }
    return Df((n = yd(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function vd(e) {
    var t = Vf(e);
    return function (n, r, o, a) {
      for (var l = "", i = 0; i < t; i++) l += e[i](n, r, o, a) || "";
      return l;
    };
  }
  var bd = "undefined" != typeof document,
    xd = function (e, t, n) {
      for (
        var r = 0, o = 0;
        (r = o), (o = Zf()), 38 === r && 12 === o && (t[n] = 1), !nd(o);

      )
        Jf();
      return td(e, Kf);
    },
    kd = function (e, t) {
      return od(
        (function (e, t) {
          var n = -1,
            r = 44;
          do {
            switch (nd(r)) {
              case 0:
                38 === r && 12 === Zf() && (t[n] = 1),
                  (e[n] += xd(Kf - 1, t, n));
                break;
              case 2:
                e[n] += ad(r);
                break;
              case 4:
                if (44 === r) {
                  (e[++n] = 58 === Zf() ? "&\f" : ""), (t[n] = e[n].length);
                  break;
                }
              default:
                e[n] += Mf(r);
            }
          } while ((r = Jf()));
          return e;
        })(rd(e), t)
      );
    },
    wd = new WeakMap(),
    Sd = function (e) {
      if ("rule" === e.type && e.parent && !(e.length < 1)) {
        for (
          var t = e.value,
            n = e.parent,
            r = e.column === n.column && e.line === n.line;
          "rule" !== n.type;

        )
          if (!(n = n.parent)) return;
        if (
          (1 !== e.props.length || 58 === t.charCodeAt(0) || wd.get(n)) &&
          !r
        ) {
          wd.set(e, !0);
          for (
            var o = [], a = kd(t, o), l = n.props, i = 0, u = 0;
            i < a.length;
            i++
          )
            for (var s = 0; s < l.length; s++, u++)
              e.props[u] = o[i]
                ? a[i].replace(/&\f/g, l[s])
                : l[s] + " " + a[i];
        }
      }
    },
    Cd = function (e) {
      if ("decl" === e.type) {
        var t = e.value;
        108 === t.charCodeAt(0) &&
          98 === t.charCodeAt(2) &&
          ((e.return = ""), (e.value = ""));
      }
    };
  function Ed(e, t) {
    switch (
      (function (e, t) {
        return 45 ^ Ff(e, 0)
          ? (((((((t << 2) ^ Ff(e, 0)) << 2) ^ Ff(e, 1)) << 2) ^ Ff(e, 2)) <<
              2) ^
              Ff(e, 3)
          : 0;
      })(e, t)
    ) {
      case 5103:
        return Pf + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return Pf + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return Pf + e + _f + e + Ef + e + e;
      case 6828:
      case 4268:
        return Pf + e + Ef + e + e;
      case 6165:
        return Pf + e + Ef + "flex-" + e + e;
      case 5187:
        return (
          Pf +
          e +
          Lf(e, /(\w+).+(:[^]+)/, Pf + "box-$1$2" + Ef + "flex-$1$2") +
          e
        );
      case 5443:
        return Pf + e + Ef + "flex-item-" + Lf(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          Pf +
          e +
          Ef +
          "flex-line-pack" +
          Lf(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return Pf + e + Ef + Lf(e, "shrink", "negative") + e;
      case 5292:
        return Pf + e + Ef + Lf(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          Pf +
          "box-" +
          Lf(e, "-grow", "") +
          Pf +
          e +
          Ef +
          Lf(e, "grow", "positive") +
          e
        );
      case 4554:
        return Pf + Lf(e, /([^-])(transform)/g, "$1" + Pf + "$2") + e;
      case 6187:
        return (
          Lf(
            Lf(Lf(e, /(zoom-|grab)/, Pf + "$1"), /(image-set)/, Pf + "$1"),
            e,
            ""
          ) + e
        );
      case 5495:
      case 3959:
        return Lf(e, /(image-set\([^]*)/, Pf + "$1$`$1");
      case 4968:
        return (
          Lf(
            Lf(
              e,
              /(.+:)(flex-)?(.*)/,
              Pf + "box-pack:$3" + Ef + "flex-pack:$3"
            ),
            /s.+-b[^;]+/,
            "justify"
          ) +
          Pf +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return Lf(e, /(.+)-inline(.+)/, Pf + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (Df(e) - 1 - t > 6)
          switch (Ff(e, t + 1)) {
            case 109:
              if (45 !== Ff(e, t + 4)) break;
            case 102:
              return (
                Lf(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    Pf +
                    "$2-$3$1" +
                    _f +
                    (108 == Ff(e, t + 3) ? "$3" : "$2-$3")
                ) + e
              );
            case 115:
              return ~If(e, "stretch")
                ? Ed(Lf(e, "stretch", "fill-available"), t) + e
                : e;
          }
        break;
      case 4949:
        if (115 !== Ff(e, t + 1)) break;
      case 6444:
        switch (Ff(e, Df(e) - 3 - (~If(e, "!important") && 10))) {
          case 107:
            return Lf(e, ":", ":" + Pf) + e;
          case 101:
            return (
              Lf(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  Pf +
                  (45 === Ff(e, 14) ? "inline-" : "") +
                  "box$3$1" +
                  Pf +
                  "$2$3$1" +
                  Ef +
                  "$2box$3"
              ) + e
            );
        }
        break;
      case 5936:
        switch (Ff(e, t + 11)) {
          case 114:
            return Pf + e + Ef + Lf(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return Pf + e + Ef + Lf(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return Pf + e + Ef + Lf(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return Pf + e + Ef + e + e;
    }
    return e;
  }
  var _d = bd
      ? void 0
      : (function (e) {
          var t = new WeakMap();
          return function (n) {
            if (t.has(n)) return t.get(n);
            var r = e(n);
            return t.set(n, r), r;
          };
        })(function () {
          return kf(function () {
            var e = {};
            return function (t) {
              return e[t];
            };
          });
        }),
    Pd = [
      function (e, t, n, r) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case Of:
              e.return = Ed(e.value, e.length);
              break;
            case jf:
              return yd([Xf(e, { value: Lf(e.value, "@", "@" + Pf) })], r);
            case Tf:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join("");
                })(e.props, function (t) {
                  switch (
                    (function (e, t) {
                      return (e = t.exec(e)) ? e[0] : e;
                    })(t, /(::plac\w+|:read-\w+)/)
                  ) {
                    case ":read-only":
                    case ":read-write":
                      return yd(
                        [Xf(e, { props: [Lf(t, /:(read-\w+)/, ":-moz-$1")] })],
                        r
                      );
                    case "::placeholder":
                      return yd(
                        [
                          Xf(e, {
                            props: [Lf(t, /:(plac\w+)/, ":" + Pf + "input-$1")],
                          }),
                          Xf(e, { props: [Lf(t, /:(plac\w+)/, ":-moz-$1")] }),
                          Xf(e, {
                            props: [Lf(t, /:(plac\w+)/, Ef + "input-$1")],
                          }),
                        ],
                        r
                      );
                  }
                  return "";
                });
          }
      },
    ],
    zd = function (e) {
      var t = e.key;
      if (bd && "css" === t) {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function (e) {
          -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
            (document.head.appendChild(e), e.setAttribute("data-s", ""));
        });
      }
      var r,
        o,
        a = e.stylisPlugins || Pd,
        l = {},
        i = [];
      bd &&
        ((r = e.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
          function (e) {
            for (
              var t = e.getAttribute("data-emotion").split(" "), n = 1;
              n < t.length;
              n++
            )
              l[t[n]] = !0;
            i.push(e);
          }
        ));
      var u,
        s = [Sd, Cd];
      if (bd) {
        var c,
          f = [
            gd,
            ((u = function (e) {
              c.insert(e);
            }),
            function (e) {
              e.root || ((e = e.return) && u(e));
            }),
          ],
          d = vd(s.concat(a, f));
        o = function (e, t, n, r) {
          (c = n),
            (function (e) {
              yd(fd(e), d);
            })(e ? e + "{" + t.styles + "}" : t.styles),
            r && (g.inserted[t.name] = !0);
        };
      } else {
        var p = [gd],
          m = vd(s.concat(a, p)),
          h = _d(a)(t),
          y = function (e, t) {
            var n = t.name;
            return (
              void 0 === h[n] &&
                (h[n] = (function (e) {
                  return yd(fd(e), m);
                })(e ? e + "{" + t.styles + "}" : t.styles)),
              h[n]
            );
          };
        o = function (e, t, n, r) {
          var o = t.name,
            a = y(e, t);
          return void 0 === g.compat
            ? (r && (g.inserted[o] = !0), a)
            : r
            ? void (g.inserted[o] = a)
            : a;
        };
      }
      var g = {
        key: t,
        sheet: new Cf({
          key: t,
          container: r,
          nonce: e.nonce,
          speedy: e.speedy,
          prepend: e.prepend,
          insertionPoint: e.insertionPoint,
        }),
        nonce: e.nonce,
        inserted: l,
        registered: {},
        insert: o,
      };
      return g.sheet.hydrate(i), g;
    },
    Td = { exports: {} },
    Od = {},
    jd = "function" == typeof Symbol && Symbol.for,
    Nd = jd ? Symbol.for("react.element") : 60103,
    Md = jd ? Symbol.for("react.portal") : 60106,
    Rd = jd ? Symbol.for("react.fragment") : 60107,
    Ad = jd ? Symbol.for("react.strict_mode") : 60108,
    Ld = jd ? Symbol.for("react.profiler") : 60114,
    Id = jd ? Symbol.for("react.provider") : 60109,
    Fd = jd ? Symbol.for("react.context") : 60110,
    $d = jd ? Symbol.for("react.async_mode") : 60111,
    Dd = jd ? Symbol.for("react.concurrent_mode") : 60111,
    Vd = jd ? Symbol.for("react.forward_ref") : 60112,
    Ud = jd ? Symbol.for("react.suspense") : 60113,
    Bd = jd ? Symbol.for("react.suspense_list") : 60120,
    Wd = jd ? Symbol.for("react.memo") : 60115,
    Hd = jd ? Symbol.for("react.lazy") : 60116,
    Kd = jd ? Symbol.for("react.block") : 60121,
    Qd = jd ? Symbol.for("react.fundamental") : 60117,
    qd = jd ? Symbol.for("react.responder") : 60118,
    Gd = jd ? Symbol.for("react.scope") : 60119;
  function Xd(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case Nd:
          switch ((e = e.type)) {
            case $d:
            case Dd:
            case Rd:
            case Ld:
            case Ad:
            case Ud:
              return e;
            default:
              switch ((e = e && e.$$typeof)) {
                case Fd:
                case Vd:
                case Hd:
                case Wd:
                case Id:
                  return e;
                default:
                  return t;
              }
          }
        case Md:
          return t;
      }
    }
  }
  function Yd(e) {
    return Xd(e) === Dd;
  }
  (Od.AsyncMode = $d),
    (Od.ConcurrentMode = Dd),
    (Od.ContextConsumer = Fd),
    (Od.ContextProvider = Id),
    (Od.Element = Nd),
    (Od.ForwardRef = Vd),
    (Od.Fragment = Rd),
    (Od.Lazy = Hd),
    (Od.Memo = Wd),
    (Od.Portal = Md),
    (Od.Profiler = Ld),
    (Od.StrictMode = Ad),
    (Od.Suspense = Ud),
    (Od.isAsyncMode = function (e) {
      return Yd(e) || Xd(e) === $d;
    }),
    (Od.isConcurrentMode = Yd),
    (Od.isContextConsumer = function (e) {
      return Xd(e) === Fd;
    }),
    (Od.isContextProvider = function (e) {
      return Xd(e) === Id;
    }),
    (Od.isElement = function (e) {
      return "object" == typeof e && null !== e && e.$$typeof === Nd;
    }),
    (Od.isForwardRef = function (e) {
      return Xd(e) === Vd;
    }),
    (Od.isFragment = function (e) {
      return Xd(e) === Rd;
    }),
    (Od.isLazy = function (e) {
      return Xd(e) === Hd;
    }),
    (Od.isMemo = function (e) {
      return Xd(e) === Wd;
    }),
    (Od.isPortal = function (e) {
      return Xd(e) === Md;
    }),
    (Od.isProfiler = function (e) {
      return Xd(e) === Ld;
    }),
    (Od.isStrictMode = function (e) {
      return Xd(e) === Ad;
    }),
    (Od.isSuspense = function (e) {
      return Xd(e) === Ud;
    }),
    (Od.isValidElementType = function (e) {
      return (
        "string" == typeof e ||
        "function" == typeof e ||
        e === Rd ||
        e === Dd ||
        e === Ld ||
        e === Ad ||
        e === Ud ||
        e === Bd ||
        ("object" == typeof e &&
          null !== e &&
          (e.$$typeof === Hd ||
            e.$$typeof === Wd ||
            e.$$typeof === Id ||
            e.$$typeof === Fd ||
            e.$$typeof === Vd ||
            e.$$typeof === Qd ||
            e.$$typeof === qd ||
            e.$$typeof === Gd ||
            e.$$typeof === Kd))
      );
    }),
    (Od.typeOf = Xd),
    (Td.exports = Od);
  var Jd = Td.exports,
    Zd = {};
  (Zd[Jd.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  }),
    (Zd[Jd.Memo] = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    });
  var ep = "undefined" != typeof document;
  var tp = function (e, t, n) {
      var r = e.key + "-" + t.name;
      (!1 === n || (!1 === ep && void 0 !== e.compat)) &&
        void 0 === e.registered[r] &&
        (e.registered[r] = t.styles);
    },
    np = function (e, t, n) {
      tp(e, t, n);
      var r = e.key + "-" + t.name;
      if (void 0 === e.inserted[t.name]) {
        var o = "",
          a = t;
        do {
          var l = e.insert(t === a ? "." + r : "", a, e.sheet, !0);
          ep || void 0 === l || (o += l), (a = a.next);
        } while (void 0 !== a);
        if (!ep && 0 !== o.length) return o;
      }
    };
  var rp = {
      animationIterationCount: 1,
      aspectRatio: 1,
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
    },
    op = !1,
    ap = /[A-Z]|^ms/g,
    lp = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    ip = function (e) {
      return 45 === e.charCodeAt(1);
    },
    up = function (e) {
      return null != e && "boolean" != typeof e;
    },
    sp = kf(function (e) {
      return ip(e) ? e : e.replace(ap, "-$&").toLowerCase();
    }),
    cp = function (e, t) {
      switch (e) {
        case "animation":
        case "animationName":
          if ("string" == typeof t)
            return t.replace(lp, function (e, t, n) {
              return (pp = { name: t, styles: n, next: pp }), t;
            });
      }
      return 1 === rp[e] || ip(e) || "number" != typeof t || 0 === t
        ? t
        : t + "px";
    },
    fp =
      "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
  function dp(e, t, n) {
    if (null == n) return "";
    var r = n;
    if (void 0 !== r.__emotion_styles) return r;
    switch (typeof n) {
      case "boolean":
        return "";
      case "object":
        var o = n;
        if (1 === o.anim)
          return (pp = { name: o.name, styles: o.styles, next: pp }), o.name;
        var a = n;
        if (void 0 !== a.styles) {
          var l = a.next;
          if (void 0 !== l)
            for (; void 0 !== l; )
              (pp = { name: l.name, styles: l.styles, next: pp }), (l = l.next);
          return a.styles + ";";
        }
        return (function (e, t, n) {
          var r = "";
          if (Array.isArray(n))
            for (var o = 0; o < n.length; o++) r += dp(e, t, n[o]) + ";";
          else
            for (var a in n) {
              var l = n[a];
              if ("object" != typeof l) {
                var i = l;
                null != t && void 0 !== t[i]
                  ? (r += a + "{" + t[i] + "}")
                  : up(i) && (r += sp(a) + ":" + cp(a, i) + ";");
              } else {
                if ("NO_COMPONENT_SELECTOR" === a && op) throw new Error(fp);
                if (
                  !Array.isArray(l) ||
                  "string" != typeof l[0] ||
                  (null != t && void 0 !== t[l[0]])
                ) {
                  var u = dp(e, t, l);
                  switch (a) {
                    case "animation":
                    case "animationName":
                      r += sp(a) + ":" + u + ";";
                      break;
                    default:
                      r += a + "{" + u + "}";
                  }
                } else
                  for (var s = 0; s < l.length; s++)
                    up(l[s]) && (r += sp(a) + ":" + cp(a, l[s]) + ";");
              }
            }
          return r;
        })(e, t, n);
      case "function":
        if (void 0 !== e) {
          var i = pp,
            u = n(e);
          return (pp = i), dp(e, t, u);
        }
    }
    var s = n;
    if (null == t) return s;
    var c = t[s];
    return void 0 !== c ? c : s;
  }
  var pp,
    mp = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
  function hp(e, t, n) {
    if (
      1 === e.length &&
      "object" == typeof e[0] &&
      null !== e[0] &&
      void 0 !== e[0].styles
    )
      return e[0];
    var r = !0,
      o = "";
    pp = void 0;
    var a = e[0];
    null == a || void 0 === a.raw
      ? ((r = !1), (o += dp(n, t, a)))
      : (o += a[0]);
    for (var l = 1; l < e.length; l++) {
      if (((o += dp(n, t, e[l])), r)) o += a[l];
    }
    mp.lastIndex = 0;
    for (var i, u = ""; null !== (i = mp.exec(o)); ) u += "-" + i[1];
    var s =
      (function (e) {
        for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
          (t =
            1540483477 *
              (65535 &
                (t =
                  (255 & e.charCodeAt(r)) |
                  ((255 & e.charCodeAt(++r)) << 8) |
                  ((255 & e.charCodeAt(++r)) << 16) |
                  ((255 & e.charCodeAt(++r)) << 24))) +
            ((59797 * (t >>> 16)) << 16)),
            (n =
              (1540483477 * (65535 & (t ^= t >>> 24)) +
                ((59797 * (t >>> 16)) << 16)) ^
              (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
        switch (o) {
          case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
          case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
          case 1:
            n =
              1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
              ((59797 * (n >>> 16)) << 16);
        }
        return (
          ((n =
            1540483477 * (65535 & (n ^= n >>> 13)) +
            ((59797 * (n >>> 16)) << 16)) ^
            (n >>> 15)) >>>
          0
        ).toString(36);
      })(o) + u;
    return { name: s, styles: o, next: pp };
  }
  var yp = "undefined" != typeof document,
    gp = function (e) {
      return e();
    },
    vp = !!W.useInsertionEffect && W.useInsertionEffect,
    bp = (yp && vp) || gp,
    xp = vp || U.useLayoutEffect,
    kp = "undefined" != typeof document,
    wp = U.createContext(
      "undefined" != typeof HTMLElement ? zd({ key: "css" }) : null
    ),
    Sp = wp.Provider,
    Cp = function (e) {
      return U.forwardRef(function (t, n) {
        var r = U.useContext(wp);
        return e(t, r, n);
      });
    };
  kp ||
    (Cp = function (e) {
      return function (t) {
        var n = U.useContext(wp);
        return null === n
          ? ((n = zd({ key: "css" })),
            U.createElement(wp.Provider, { value: n }, e(t, n)))
          : e(t, n);
      };
    });
  var Ep = U.createContext({}),
    _p = Cp(function (e, t) {
      var n = hp([e.styles], void 0, U.useContext(Ep));
      if (!kp) {
        for (var r, o = n.name, a = n.styles, l = n.next; void 0 !== l; )
          (o += " " + l.name), (a += l.styles), (l = l.next);
        var i = !0 === t.compat,
          u = t.insert("", { name: o, styles: a }, t.sheet, i);
        return i
          ? null
          : U.createElement(
              "style",
              (((r = {})["data-emotion"] = t.key + "-global " + o),
              (r.dangerouslySetInnerHTML = { __html: u }),
              (r.nonce = t.sheet.nonce),
              r)
            );
      }
      var s = U.useRef();
      return (
        xp(
          function () {
            var e = t.key + "-global",
              r = new t.sheet.constructor({
                key: e,
                nonce: t.sheet.nonce,
                container: t.sheet.container,
                speedy: t.sheet.isSpeedy,
              }),
              o = !1,
              a = document.querySelector(
                'style[data-emotion="' + e + " " + n.name + '"]'
              );
            return (
              t.sheet.tags.length && (r.before = t.sheet.tags[0]),
              null !== a &&
                ((o = !0), a.setAttribute("data-emotion", e), r.hydrate([a])),
              (s.current = [r, o]),
              function () {
                r.flush();
              }
            );
          },
          [t]
        ),
        xp(
          function () {
            var e = s.current,
              r = e[0];
            if (e[1]) e[1] = !1;
            else {
              if ((void 0 !== n.next && np(t, n.next, !0), r.tags.length)) {
                var o = r.tags[r.tags.length - 1].nextElementSibling;
                (r.before = o), r.flush();
              }
              t.insert("", n, r, !1);
            }
          },
          [t, n.name]
        ),
        null
      );
    });
  function Pp() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return hp(t);
  }
  var zp = Sf,
    Tp = function (e) {
      return "theme" !== e;
    },
    Op = function (e) {
      return "string" == typeof e && e.charCodeAt(0) > 96 ? zp : Tp;
    },
    jp = function (e, t, n) {
      var r;
      if (t) {
        var o = t.shouldForwardProp;
        r =
          e.__emotion_forwardProp && o
            ? function (t) {
                return e.__emotion_forwardProp(t) && o(t);
              }
            : o;
      }
      return "function" != typeof r && n && (r = e.__emotion_forwardProp), r;
    },
    Np = "undefined" != typeof document,
    Mp = function (e) {
      var t = e.cache,
        n = e.serialized,
        r = e.isStringTag;
      tp(t, n, r);
      var o = bp(function () {
        return np(t, n, r);
      });
      if (!Np && void 0 !== o) {
        for (var a, l = n.name, i = n.next; void 0 !== i; )
          (l += " " + i.name), (i = i.next);
        return U.createElement(
          "style",
          (((a = {})["data-emotion"] = t.key + " " + l),
          (a.dangerouslySetInnerHTML = { __html: o }),
          (a.nonce = t.sheet.nonce),
          a)
        );
      }
      return null;
    },
    Rp = function e(t, n) {
      var r,
        o,
        a = t.__emotion_real === t,
        l = (a && t.__emotion_base) || t;
      void 0 !== n && ((r = n.label), (o = n.target));
      var i = jp(t, n, a),
        u = i || Op(l),
        s = !u("as");
      return function () {
        var c = arguments,
          f =
            a && void 0 !== t.__emotion_styles
              ? t.__emotion_styles.slice(0)
              : [];
        if (
          (void 0 !== r && f.push("label:" + r + ";"),
          null == c[0] || void 0 === c[0].raw)
        )
          f.push.apply(f, c);
        else {
          f.push(c[0][0]);
          for (var d = c.length, p = 1; p < d; p++) f.push(c[p], c[0][p]);
        }
        var m = Cp(function (e, t, n) {
          var r,
            a,
            c,
            d,
            p = (s && e.as) || l,
            m = "",
            h = [],
            y = e;
          if (null == e.theme) {
            for (var g in ((y = {}), e)) y[g] = e[g];
            y.theme = U.useContext(Ep);
          }
          "string" == typeof e.className
            ? ((r = t.registered),
              (a = h),
              (c = e.className),
              (d = ""),
              c.split(" ").forEach(function (e) {
                void 0 !== r[e] ? a.push(r[e] + ";") : (d += e + " ");
              }),
              (m = d))
            : null != e.className && (m = e.className + " ");
          var v = hp(f.concat(h), t.registered, y);
          (m += t.key + "-" + v.name), void 0 !== o && (m += " " + o);
          var b = s && void 0 === i ? Op(p) : u,
            x = {};
          for (var k in e) (s && "as" === k) || (b(k) && (x[k] = e[k]));
          return (
            (x.className = m),
            n && (x.ref = n),
            U.createElement(
              U.Fragment,
              null,
              U.createElement(Mp, {
                cache: t,
                serialized: v,
                isStringTag: "string" == typeof p,
              }),
              U.createElement(p, x)
            )
          );
        });
        return (
          (m.displayName =
            void 0 !== r
              ? r
              : "Styled(" +
                ("string" == typeof l
                  ? l
                  : l.displayName || l.name || "Component") +
                ")"),
          (m.defaultProps = t.defaultProps),
          (m.__emotion_real = m),
          (m.__emotion_base = l),
          (m.__emotion_styles = f),
          (m.__emotion_forwardProp = i),
          Object.defineProperty(m, "toString", {
            value: function () {
              return "." + o;
            },
          }),
          (m.withComponent = function (t, r) {
            return e(
              t,
              bf({}, n, r, { shouldForwardProp: jp(m, r, !0) })
            ).apply(void 0, f);
          }),
          m
        );
      };
    }.bind();
  let Ap;
  function Lp(e) {
    const { styles: t, defaultTheme: n = {} } = e,
      r =
        "function" == typeof t
          ? (e) => {
              return t(null == (r = e) || 0 === Object.keys(r).length ? n : e);
              var r;
            }
          : t;
    return J.jsx(_p, { styles: r });
  }
  /**
   * @mui/styled-engine v5.16.6
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ function Ip(e, t) {
    return Rp(e, t);
  }
  [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ].forEach(function (e) {
    Rp[e] = Rp(e);
  }),
    "object" == typeof document && (Ap = zd({ key: "css", prepend: !0 }));
  var Fp = Object.freeze({
    __proto__: null,
    GlobalStyles: Lp,
    StyledEngineProvider: function (e) {
      const { injectFirst: t, children: n } = e;
      return t && Ap ? J.jsx(Sp, { value: Ap, children: n }) : n;
    },
    ThemeContext: Ep,
    css: Pp,
    default: Ip,
    internal_processStyles: (e, t) => {
      Array.isArray(e.__emotion_styles) &&
        (e.__emotion_styles = t(e.__emotion_styles));
    },
    keyframes: function () {
      var e = Pp.apply(void 0, arguments),
        t = "animation-" + e.name;
      return {
        name: t,
        styles: "@keyframes " + t + "{" + e.styles + "}",
        anim: 1,
        toString: function () {
          return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        },
      };
    },
  });
  function $p(e) {
    if ("object" != typeof e || null === e) return !1;
    const t = Object.getPrototypeOf(e);
    return !(
      (null !== t &&
        t !== Object.prototype &&
        null !== Object.getPrototypeOf(t)) ||
      Symbol.toStringTag in e ||
      Symbol.iterator in e
    );
  }
  function Dp(e) {
    if (!$p(e)) return e;
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        t[n] = Dp(e[n]);
      }),
      t
    );
  }
  function Vp(e, t, n = { clone: !0 }) {
    const r = n.clone ? bf({}, e) : e;
    return (
      $p(e) &&
        $p(t) &&
        Object.keys(t).forEach((o) => {
          $p(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && $p(e[o])
            ? (r[o] = Vp(e[o], t[o], n))
            : n.clone
            ? (r[o] = $p(t[o]) ? Dp(t[o]) : t[o])
            : (r[o] = t[o]);
        }),
      r
    );
  }
  var Up = Object.freeze({ __proto__: null, default: Vp, isPlainObject: $p });
  const Bp = ["values", "unit", "step"],
    Wp = (e) => {
      const t = Object.keys(e).map((t) => ({ key: t, val: e[t] })) || [];
      return (
        t.sort((e, t) => e.val - t.val),
        t.reduce((e, t) => bf({}, e, { [t.key]: t.val }), {})
      );
    };
  function Hp(e) {
    const {
        values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        unit: n = "px",
        step: r = 5,
      } = e,
      o = xf(e, Bp),
      a = Wp(t),
      l = Object.keys(a);
    function i(e) {
      return `@media (min-width:${"number" == typeof t[e] ? t[e] : e}${n})`;
    }
    function u(e) {
      return `@media (max-width:${
        ("number" == typeof t[e] ? t[e] : e) - r / 100
      }${n})`;
    }
    function s(e, o) {
      const a = l.indexOf(o);
      return `@media (min-width:${
        "number" == typeof t[e] ? t[e] : e
      }${n}) and (max-width:${(-1 !== a && "number" == typeof t[l[a]] ? t[l[a]] : o) - r / 100}${n})`;
    }
    return bf(
      {
        keys: l,
        values: a,
        up: i,
        down: u,
        between: s,
        only: function (e) {
          return l.indexOf(e) + 1 < l.length ? s(e, l[l.indexOf(e) + 1]) : i(e);
        },
        not: function (e) {
          const t = l.indexOf(e);
          return 0 === t
            ? i(l[1])
            : t === l.length - 1
            ? u(l[t])
            : s(e, l[l.indexOf(e) + 1]).replace("@media", "@media not all and");
        },
        unit: n,
      },
      o
    );
  }
  const Kp = { borderRadius: 4 };
  function Qp(e, t) {
    return t ? Vp(e, t, { clone: !1 }) : e;
  }
  const qp = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    Gp = {
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (e) => `@media (min-width:${qp[e]}px)`,
    };
  function Xp(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
      const e = r.breakpoints || Gp;
      return t.reduce((r, o, a) => ((r[e.up(e.keys[a])] = n(t[a])), r), {});
    }
    if ("object" == typeof t) {
      const e = r.breakpoints || Gp;
      return Object.keys(t).reduce((r, o) => {
        if (-1 !== Object.keys(e.values || qp).indexOf(o)) {
          r[e.up(o)] = n(t[o], o);
        } else {
          const e = o;
          r[e] = t[e];
        }
        return r;
      }, {});
    }
    return n(t);
  }
  function Yp(e) {
    if ("string" != typeof e) throw new Error(yf(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var Jp = Object.freeze({ __proto__: null, default: Yp });
  function Zp(e, t, n = !0) {
    if (!t || "string" != typeof t) return null;
    if (e && e.vars && n) {
      const n = `vars.${t}`
        .split(".")
        .reduce((e, t) => (e && e[t] ? e[t] : null), e);
      if (null != n) return n;
    }
    return t.split(".").reduce((e, t) => (e && null != e[t] ? e[t] : null), e);
  }
  function em(e, t, n, r = n) {
    let o;
    return (
      (o =
        "function" == typeof e
          ? e(n)
          : Array.isArray(e)
          ? e[n] || r
          : Zp(e, n) || r),
      t && (o = t(o, r, e)),
      o
    );
  }
  function tm(e) {
    const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
      a = (e) => {
        if (null == e[t]) return null;
        const a = e[t],
          l = Zp(e.theme, r) || {};
        return Xp(e, a, (e) => {
          let r = em(l, o, e);
          return (
            e === r &&
              "string" == typeof e &&
              (r = em(l, o, `${t}${"default" === e ? "" : Yp(e)}`, e)),
            !1 === n ? r : { [n]: r }
          );
        });
      };
    return (a.propTypes = {}), (a.filterProps = [t]), a;
  }
  const nm = { m: "margin", p: "padding" },
    rm = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"],
    },
    om = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
    am = (function (e) {
      const t = {};
      return (n) => (void 0 === t[n] && (t[n] = e(n)), t[n]);
    })((e) => {
      if (e.length > 2) {
        if (!om[e]) return [e];
        e = om[e];
      }
      const [t, n] = e.split(""),
        r = nm[t],
        o = rm[n] || "";
      return Array.isArray(o) ? o.map((e) => r + e) : [r + o];
    }),
    lm = [
      "m",
      "mt",
      "mr",
      "mb",
      "ml",
      "mx",
      "my",
      "margin",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
      "marginX",
      "marginY",
      "marginInline",
      "marginInlineStart",
      "marginInlineEnd",
      "marginBlock",
      "marginBlockStart",
      "marginBlockEnd",
    ],
    im = [
      "p",
      "pt",
      "pr",
      "pb",
      "pl",
      "px",
      "py",
      "padding",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "paddingX",
      "paddingY",
      "paddingInline",
      "paddingInlineStart",
      "paddingInlineEnd",
      "paddingBlock",
      "paddingBlockStart",
      "paddingBlockEnd",
    ];
  function um(e, t, n, r) {
    var o;
    const a = null != (o = Zp(e, t, !1)) ? o : n;
    return "number" == typeof a
      ? (e) => ("string" == typeof e ? e : a * e)
      : Array.isArray(a)
      ? (e) => ("string" == typeof e ? e : a[e])
      : "function" == typeof a
      ? a
      : () => {};
  }
  function sm(e) {
    return um(e, "spacing", 8);
  }
  function cm(e, t) {
    if ("string" == typeof t || null == t) return t;
    const n = e(Math.abs(t));
    return t >= 0 ? n : "number" == typeof n ? -n : `-${n}`;
  }
  function fm(e, t, n, r) {
    if (-1 === t.indexOf(n)) return null;
    const o = (function (e, t) {
      return (n) => e.reduce((e, r) => ((e[r] = cm(t, n)), e), {});
    })(am(n), r);
    return Xp(e, e[n], o);
  }
  function dm(e, t) {
    const n = sm(e.theme);
    return Object.keys(e)
      .map((r) => fm(e, t, r, n))
      .reduce(Qp, {});
  }
  function pm(e) {
    return dm(e, lm);
  }
  function mm(e) {
    return dm(e, im);
  }
  function hm(...e) {
    const t = e.reduce(
        (e, t) => (
          t.filterProps.forEach((n) => {
            e[n] = t;
          }),
          e
        ),
        {}
      ),
      n = (e) =>
        Object.keys(e).reduce((n, r) => (t[r] ? Qp(n, t[r](e)) : n), {});
    return (
      (n.propTypes = {}),
      (n.filterProps = e.reduce((e, t) => e.concat(t.filterProps), [])),
      n
    );
  }
  function ym(e) {
    return "number" != typeof e ? e : `${e}px solid`;
  }
  function gm(e, t) {
    return tm({ prop: e, themeKey: "borders", transform: t });
  }
  (pm.propTypes = {}),
    (pm.filterProps = lm),
    (mm.propTypes = {}),
    (mm.filterProps = im);
  const vm = gm("border", ym),
    bm = gm("borderTop", ym),
    xm = gm("borderRight", ym),
    km = gm("borderBottom", ym),
    wm = gm("borderLeft", ym),
    Sm = gm("borderColor"),
    Cm = gm("borderTopColor"),
    Em = gm("borderRightColor"),
    _m = gm("borderBottomColor"),
    Pm = gm("borderLeftColor"),
    zm = gm("outline", ym),
    Tm = gm("outlineColor"),
    Om = (e) => {
      if (void 0 !== e.borderRadius && null !== e.borderRadius) {
        const t = um(e.theme, "shape.borderRadius", 4),
          n = (e) => ({ borderRadius: cm(t, e) });
        return Xp(e, e.borderRadius, n);
      }
      return null;
    };
  (Om.propTypes = {}),
    (Om.filterProps = ["borderRadius"]),
    hm(vm, bm, xm, km, wm, Sm, Cm, Em, _m, Pm, Om, zm, Tm);
  const jm = (e) => {
    if (void 0 !== e.gap && null !== e.gap) {
      const t = um(e.theme, "spacing", 8),
        n = (e) => ({ gap: cm(t, e) });
      return Xp(e, e.gap, n);
    }
    return null;
  };
  (jm.propTypes = {}), (jm.filterProps = ["gap"]);
  const Nm = (e) => {
    if (void 0 !== e.columnGap && null !== e.columnGap) {
      const t = um(e.theme, "spacing", 8),
        n = (e) => ({ columnGap: cm(t, e) });
      return Xp(e, e.columnGap, n);
    }
    return null;
  };
  (Nm.propTypes = {}), (Nm.filterProps = ["columnGap"]);
  const Mm = (e) => {
    if (void 0 !== e.rowGap && null !== e.rowGap) {
      const t = um(e.theme, "spacing", 8),
        n = (e) => ({ rowGap: cm(t, e) });
      return Xp(e, e.rowGap, n);
    }
    return null;
  };
  (Mm.propTypes = {}), (Mm.filterProps = ["rowGap"]);
  function Rm(e, t) {
    return "grey" === t ? t : e;
  }
  hm(
    jm,
    Nm,
    Mm,
    tm({ prop: "gridColumn" }),
    tm({ prop: "gridRow" }),
    tm({ prop: "gridAutoFlow" }),
    tm({ prop: "gridAutoColumns" }),
    tm({ prop: "gridAutoRows" }),
    tm({ prop: "gridTemplateColumns" }),
    tm({ prop: "gridTemplateRows" }),
    tm({ prop: "gridTemplateAreas" }),
    tm({ prop: "gridArea" })
  );
  function Am(e) {
    return e <= 1 && 0 !== e ? 100 * e + "%" : e;
  }
  hm(
    tm({ prop: "color", themeKey: "palette", transform: Rm }),
    tm({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: Rm,
    }),
    tm({ prop: "backgroundColor", themeKey: "palette", transform: Rm })
  );
  const Lm = tm({ prop: "width", transform: Am }),
    Im = (e) => {
      if (void 0 !== e.maxWidth && null !== e.maxWidth) {
        const t = (t) => {
          var n, r;
          const o =
            (null == (n = e.theme) ||
            null == (n = n.breakpoints) ||
            null == (n = n.values)
              ? void 0
              : n[t]) || qp[t];
          return o
            ? "px" !==
              (null == (r = e.theme) || null == (r = r.breakpoints)
                ? void 0
                : r.unit)
              ? { maxWidth: `${o}${e.theme.breakpoints.unit}` }
              : { maxWidth: o }
            : { maxWidth: Am(t) };
        };
        return Xp(e, e.maxWidth, t);
      }
      return null;
    };
  Im.filterProps = ["maxWidth"];
  const Fm = tm({ prop: "minWidth", transform: Am }),
    $m = tm({ prop: "height", transform: Am }),
    Dm = tm({ prop: "maxHeight", transform: Am }),
    Vm = tm({ prop: "minHeight", transform: Am });
  tm({ prop: "size", cssProperty: "width", transform: Am }),
    tm({ prop: "size", cssProperty: "height", transform: Am });
  hm(Lm, Im, Fm, $m, Dm, Vm, tm({ prop: "boxSizing" }));
  const Um = {
    border: { themeKey: "borders", transform: ym },
    borderTop: { themeKey: "borders", transform: ym },
    borderRight: { themeKey: "borders", transform: ym },
    borderBottom: { themeKey: "borders", transform: ym },
    borderLeft: { themeKey: "borders", transform: ym },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: ym },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Om },
    color: { themeKey: "palette", transform: Rm },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Rm,
    },
    backgroundColor: { themeKey: "palette", transform: Rm },
    p: { style: mm },
    pt: { style: mm },
    pr: { style: mm },
    pb: { style: mm },
    pl: { style: mm },
    px: { style: mm },
    py: { style: mm },
    padding: { style: mm },
    paddingTop: { style: mm },
    paddingRight: { style: mm },
    paddingBottom: { style: mm },
    paddingLeft: { style: mm },
    paddingX: { style: mm },
    paddingY: { style: mm },
    paddingInline: { style: mm },
    paddingInlineStart: { style: mm },
    paddingInlineEnd: { style: mm },
    paddingBlock: { style: mm },
    paddingBlockStart: { style: mm },
    paddingBlockEnd: { style: mm },
    m: { style: pm },
    mt: { style: pm },
    mr: { style: pm },
    mb: { style: pm },
    ml: { style: pm },
    mx: { style: pm },
    my: { style: pm },
    margin: { style: pm },
    marginTop: { style: pm },
    marginRight: { style: pm },
    marginBottom: { style: pm },
    marginLeft: { style: pm },
    marginX: { style: pm },
    marginY: { style: pm },
    marginInline: { style: pm },
    marginInlineStart: { style: pm },
    marginInlineEnd: { style: pm },
    marginBlock: { style: pm },
    marginBlockStart: { style: pm },
    marginBlockEnd: { style: pm },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: jm },
    rowGap: { style: Mm },
    columnGap: { style: Nm },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: Am },
    maxWidth: { style: Im },
    minWidth: { transform: Am },
    height: { transform: Am },
    maxHeight: { transform: Am },
    minHeight: { transform: Am },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  };
  function Bm() {
    function e(e, t, n, r) {
      const o = { [e]: t, theme: n },
        a = r[e];
      if (!a) return { [e]: t };
      const { cssProperty: l = e, themeKey: i, transform: u, style: s } = a;
      if (null == t) return null;
      if ("typography" === i && "inherit" === t) return { [e]: t };
      const c = Zp(n, i) || {};
      if (s) return s(o);
      return Xp(o, t, (t) => {
        let n = em(c, u, t);
        return (
          t === n &&
            "string" == typeof t &&
            (n = em(c, u, `${e}${"default" === t ? "" : Yp(t)}`, t)),
          !1 === l ? n : { [l]: n }
        );
      });
    }
    return function t(n) {
      var r;
      const { sx: o, theme: a = {} } = n || {};
      if (!o) return null;
      const l = null != (r = a.unstable_sxConfig) ? r : Um;
      function i(n) {
        let r = n;
        if ("function" == typeof n) r = n(a);
        else if ("object" != typeof n) return n;
        if (!r) return null;
        const o = (function (e = {}) {
            var t;
            return (
              (null == (t = e.keys)
                ? void 0
                : t.reduce((t, n) => ((t[e.up(n)] = {}), t), {})) || {}
            );
          })(a.breakpoints),
          i = Object.keys(o);
        let u = o;
        return (
          Object.keys(r).forEach((n) => {
            const o = ((i = r[n]), (s = a), "function" == typeof i ? i(s) : i);
            var i, s;
            if (null != o)
              if ("object" == typeof o)
                if (l[n]) u = Qp(u, e(n, o, a, l));
                else {
                  const e = Xp({ theme: a }, o, (e) => ({ [n]: e }));
                  !(function (...e) {
                    const t = e.reduce((e, t) => e.concat(Object.keys(t)), []),
                      n = new Set(t);
                    return e.every((e) => n.size === Object.keys(e).length);
                  })(e, o)
                    ? (u = Qp(u, e))
                    : (u[n] = t({ sx: o, theme: a }));
                }
              else u = Qp(u, e(n, o, a, l));
          }),
          (function (e, t) {
            return e.reduce((e, t) => {
              const n = e[t];
              return (!n || 0 === Object.keys(n).length) && delete e[t], e;
            }, t);
          })(i, u)
        );
      }
      return Array.isArray(o) ? o.map(i) : i(o);
    };
  }
  const Wm = Bm();
  function Hm(e, t) {
    const n = this;
    if (n.vars && "function" == typeof n.getColorSchemeSelector) {
      return {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      };
    }
    return n.palette.mode === e ? t : {};
  }
  Wm.filterProps = ["sx"];
  const Km = ["breakpoints", "palette", "spacing", "shape"];
  function Qm(e = {}, ...t) {
    const {
        breakpoints: n = {},
        palette: r = {},
        spacing: o,
        shape: a = {},
      } = e,
      l = xf(e, Km),
      i = Hp(n),
      u = (function (e = 8) {
        if (e.mui) return e;
        const t = sm({ spacing: e }),
          n = (...e) =>
            (0 === e.length ? [1] : e)
              .map((e) => {
                const n = t(e);
                return "number" == typeof n ? `${n}px` : n;
              })
              .join(" ");
        return (n.mui = !0), n;
      })(o);
    let s = Vp(
      {
        breakpoints: i,
        direction: "ltr",
        components: {},
        palette: bf({ mode: "light" }, r),
        spacing: u,
        shape: bf({}, Kp, a),
      },
      l
    );
    return (
      (s.applyStyles = Hm),
      (s = t.reduce((e, t) => Vp(e, t), s)),
      (s.unstable_sxConfig = bf(
        {},
        Um,
        null == l ? void 0 : l.unstable_sxConfig
      )),
      (s.unstable_sx = function (e) {
        return Wm({ sx: e, theme: this });
      }),
      s
    );
  }
  var qm = Object.freeze({
    __proto__: null,
    default: Qm,
    private_createBreakpoints: Hp,
    unstable_applyStyles: Hm,
  });
  function Gm(e = null) {
    const t = U.useContext(Ep);
    return t && ((n = t), 0 !== Object.keys(n).length) ? t : e;
    var n;
  }
  const Xm = Qm();
  function Ym(e = Xm) {
    return Gm(e);
  }
  function Jm({ styles: e, themeId: t, defaultTheme: n = {} }) {
    const r = Ym(n),
      o = "function" == typeof e ? e((t && r[t]) || r) : e;
    return J.jsx(Lp, { styles: o });
  }
  const Zm = ["sx"],
    eh = (e) => {
      var t, n;
      const r = { systemProps: {}, otherProps: {} },
        o =
          null !=
          (t =
            null == e || null == (n = e.theme) ? void 0 : n.unstable_sxConfig)
            ? t
            : Um;
      return (
        Object.keys(e).forEach((t) => {
          o[t] ? (r.systemProps[t] = e[t]) : (r.otherProps[t] = e[t]);
        }),
        r
      );
    };
  function th(e) {
    const { sx: t } = e,
      n = xf(e, Zm),
      { systemProps: r, otherProps: o } = eh(n);
    let a;
    return (
      (a = Array.isArray(t)
        ? [r, ...t]
        : "function" == typeof t
        ? (...e) => {
            const n = t(...e);
            return $p(n) ? bf({}, r, n) : r;
          }
        : bf({}, r, t)),
      bf({}, o, { sx: a })
    );
  }
  var nh = Object.freeze({
    __proto__: null,
    default: Wm,
    extendSxProp: th,
    unstable_createStyleFunctionSx: Bm,
    unstable_defaultSxConfig: Um,
  });
  const rh = (e) => e,
    oh = (() => {
      let e = rh;
      return {
        configure(t) {
          e = t;
        },
        generate: (t) => e(t),
        reset() {
          e = rh;
        },
      };
    })();
  function ah(e) {
    var t,
      n,
      r = "";
    if ("string" == typeof e || "number" == typeof e) r += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
          e[t] && (n = ah(e[t])) && (r && (r += " "), (r += n));
      } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
  }
  function lh() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
      (e = arguments[n]) && (t = ah(e)) && (r && (r += " "), (r += t));
    return r;
  }
  const ih = ["className", "component"];
  const uh = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
  function sh(e, t, n = "Mui") {
    const r = uh[t];
    return r ? `${n}-${r}` : `${oh.generate(e)}-${t}`;
  }
  function ch(e, t, n = "Mui") {
    const r = {};
    return (
      t.forEach((t) => {
        r[t] = sh(e, t, n);
      }),
      r
    );
  }
  var fh,
    dh = { exports: {} },
    ph = {},
    mh = Symbol.for("react.element"),
    hh = Symbol.for("react.portal"),
    yh = Symbol.for("react.fragment"),
    gh = Symbol.for("react.strict_mode"),
    vh = Symbol.for("react.profiler"),
    bh = Symbol.for("react.provider"),
    xh = Symbol.for("react.context"),
    kh = Symbol.for("react.server_context"),
    wh = Symbol.for("react.forward_ref"),
    Sh = Symbol.for("react.suspense"),
    Ch = Symbol.for("react.suspense_list"),
    Eh = Symbol.for("react.memo"),
    _h = Symbol.for("react.lazy"),
    Ph = Symbol.for("react.offscreen");
  function zh(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case mh:
          switch ((e = e.type)) {
            case yh:
            case vh:
            case gh:
            case Sh:
            case Ch:
              return e;
            default:
              switch ((e = e && e.$$typeof)) {
                case kh:
                case xh:
                case wh:
                case _h:
                case Eh:
                case bh:
                  return e;
                default:
                  return t;
              }
          }
        case hh:
          return t;
      }
    }
  }
  (fh = Symbol.for("react.module.reference")),
    (ph.ContextConsumer = xh),
    (ph.ContextProvider = bh),
    (ph.Element = mh),
    (ph.ForwardRef = wh),
    (ph.Fragment = yh),
    (ph.Lazy = _h),
    (ph.Memo = Eh),
    (ph.Portal = hh),
    (ph.Profiler = vh),
    (ph.StrictMode = gh),
    (ph.Suspense = Sh),
    (ph.SuspenseList = Ch),
    (ph.isAsyncMode = function () {
      return !1;
    }),
    (ph.isConcurrentMode = function () {
      return !1;
    }),
    (ph.isContextConsumer = function (e) {
      return zh(e) === xh;
    }),
    (ph.isContextProvider = function (e) {
      return zh(e) === bh;
    }),
    (ph.isElement = function (e) {
      return "object" == typeof e && null !== e && e.$$typeof === mh;
    }),
    (ph.isForwardRef = function (e) {
      return zh(e) === wh;
    }),
    (ph.isFragment = function (e) {
      return zh(e) === yh;
    }),
    (ph.isLazy = function (e) {
      return zh(e) === _h;
    }),
    (ph.isMemo = function (e) {
      return zh(e) === Eh;
    }),
    (ph.isPortal = function (e) {
      return zh(e) === hh;
    }),
    (ph.isProfiler = function (e) {
      return zh(e) === vh;
    }),
    (ph.isStrictMode = function (e) {
      return zh(e) === gh;
    }),
    (ph.isSuspense = function (e) {
      return zh(e) === Sh;
    }),
    (ph.isSuspenseList = function (e) {
      return zh(e) === Ch;
    }),
    (ph.isValidElementType = function (e) {
      return (
        "string" == typeof e ||
        "function" == typeof e ||
        e === yh ||
        e === vh ||
        e === gh ||
        e === Sh ||
        e === Ch ||
        e === Ph ||
        ("object" == typeof e &&
          null !== e &&
          (e.$$typeof === _h ||
            e.$$typeof === Eh ||
            e.$$typeof === bh ||
            e.$$typeof === xh ||
            e.$$typeof === wh ||
            e.$$typeof === fh ||
            void 0 !== e.getModuleId))
      );
    }),
    (ph.typeOf = zh),
    (dh.exports = ph);
  var Th = dh.exports;
  const Oh = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
  function jh(e) {
    const t = `${e}`.match(Oh);
    return (t && t[1]) || "";
  }
  function Nh(e, t = "") {
    return e.displayName || e.name || jh(e) || t;
  }
  function Mh(e, t, n) {
    const r = Nh(t);
    return e.displayName || ("" !== r ? `${n}(${r})` : n);
  }
  var Rh = Object.freeze({
    __proto__: null,
    default: function (e) {
      if (null != e) {
        if ("string" == typeof e) return e;
        if ("function" == typeof e) return Nh(e, "Component");
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case Th.ForwardRef:
              return Mh(e, e.render, "ForwardRef");
            case Th.Memo:
              return Mh(e, e.type, "memo");
            default:
              return;
          }
      }
    },
    getFunctionName: jh,
  });
  function Ah(e, t) {
    const n = bf({}, t);
    return (
      Object.keys(e).forEach((r) => {
        if (r.toString().match(/^(components|slots)$/))
          n[r] = bf({}, e[r], n[r]);
        else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
          const o = e[r] || {},
            a = t[r];
          (n[r] = {}),
            a && Object.keys(a)
              ? o && Object.keys(o)
                ? ((n[r] = bf({}, a)),
                  Object.keys(o).forEach((e) => {
                    n[r][e] = Ah(o[e], a[e]);
                  }))
                : (n[r] = a)
              : (n[r] = o);
        } else void 0 === n[r] && (n[r] = e[r]);
      }),
      n
    );
  }
  const Lh = U.useLayoutEffect;
  var Ih = Object.freeze({
    __proto__: null,
    default: function (
      e,
      t = Number.MIN_SAFE_INTEGER,
      n = Number.MAX_SAFE_INTEGER
    ) {
      return Math.max(t, Math.min(e, n));
    },
  });
  function Fh(e) {
    const t = (function (e) {
      return (e && e.ownerDocument) || document;
    })(e);
    return t.defaultView || window;
  }
  function $h(...e) {
    return U.useMemo(
      () =>
        e.every((e) => null == e)
          ? null
          : (t) => {
              e.forEach((e) => {
                !(function (e, t) {
                  "function" == typeof e ? e(t) : e && (e.current = t);
                })(e, t);
              });
            },
      e
    );
  }
  function Dh(e, t, n = void 0) {
    const r = {};
    return (
      Object.keys(e).forEach((o) => {
        r[o] = e[o]
          .reduce((e, r) => {
            if (r) {
              const o = t(r);
              "" !== o && e.push(o), n && n[r] && e.push(n[r]);
            }
            return e;
          }, [])
          .join(" ");
      }),
      r
    );
  }
  function Vh(e) {
    return "string" == typeof e;
  }
  const Uh = U.createContext(null);
  function Bh() {
    return U.useContext(Uh);
  }
  var Wh =
    "function" == typeof Symbol && Symbol.for
      ? Symbol.for("mui.nested")
      : "__THEME_NESTED__";
  function Hh(e) {
    const { children: t, theme: n } = e,
      r = Bh(),
      o = U.useMemo(() => {
        const e =
          null === r
            ? n
            : (function (e, t) {
                if ("function" == typeof t) return t(e);
                return bf({}, e, t);
              })(r, n);
        return null != e && (e[Wh] = null !== r), e;
      }, [n, r]);
    return J.jsx(Uh.Provider, { value: o, children: t });
  }
  const Kh = ["value"],
    Qh = U.createContext();
  function qh(e) {
    let { value: t } = e,
      n = xf(e, Kh);
    return J.jsx(Qh.Provider, bf({ value: null == t || t }, n));
  }
  const Gh = U.createContext(void 0);
  function Xh({ value: e, children: t }) {
    return J.jsx(Gh.Provider, { value: e, children: t });
  }
  function Yh({ props: e, name: t }) {
    return (function (e) {
      const { theme: t, name: n, props: r } = e;
      if (!t || !t.components || !t.components[n]) return r;
      const o = t.components[n];
      return o.defaultProps
        ? Ah(o.defaultProps, r)
        : o.styleOverrides || o.variants
        ? r
        : Ah(o, r);
    })({ props: e, name: t, theme: { components: U.useContext(Gh) } });
  }
  const Jh = {};
  function Zh(e, t, n, r = !1) {
    return U.useMemo(() => {
      const o = (e && t[e]) || t;
      if ("function" == typeof n) {
        const a = n(o),
          l = e ? bf({}, t, { [e]: a }) : a;
        return r ? () => l : l;
      }
      return bf({}, t, e ? { [e]: n } : n);
    }, [e, t, n, r]);
  }
  function ey(e) {
    const { children: t, theme: n, themeId: r } = e,
      o = Gm(Jh),
      a = Bh() || Jh,
      l = Zh(r, o, n),
      i = Zh(r, a, n, !0),
      u = "rtl" === l.direction;
    return J.jsx(Hh, {
      theme: i,
      children: J.jsx(Ep.Provider, {
        value: l,
        children: J.jsx(qh, {
          value: u,
          children: J.jsx(Xh, {
            value: null == l ? void 0 : l.components,
            children: t,
          }),
        }),
      }),
    });
  }
  var ty = {},
    ny = { exports: {} };
  !(function (e) {
    (e.exports = function (e) {
      return e && e.__esModule ? e : { default: e };
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  })(ny);
  var ry = ny.exports,
    oy = r(gf),
    ay = r(Ih),
    ly = ry;
  Object.defineProperty(ty, "__esModule", { value: !0 });
  var iy = (ty.alpha = xy);
  (ty.blend = function (e, t, n, r = 1) {
    const o = (e, t) =>
        Math.round((e ** (1 / r) * (1 - n) + t ** (1 / r) * n) ** r),
      a = hy(e),
      l = hy(t),
      i = [
        o(a.values[0], l.values[0]),
        o(a.values[1], l.values[1]),
        o(a.values[2], l.values[2]),
      ];
    return gy({ type: "rgb", values: i });
  }),
    (ty.colorChannel = void 0);
  var uy = (ty.darken = ky);
  (ty.decomposeColor = hy), (ty.emphasize = Sy);
  var sy = (ty.getContrastRatio = function (e, t) {
    const n = by(e),
      r = by(t);
    return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
  });
  (ty.getLuminance = by), (ty.hexToRgb = my), (ty.hslToRgb = vy);
  var cy = (ty.lighten = wy);
  (ty.private_safeAlpha = function (e, t, n) {
    try {
      return xy(e, t);
    } catch (t) {
      return e;
    }
  }),
    (ty.private_safeColorChannel = void 0),
    (ty.private_safeDarken = function (e, t, n) {
      try {
        return ky(e, t);
      } catch (t) {
        return e;
      }
    }),
    (ty.private_safeEmphasize = function (e, t, n) {
      try {
        return Sy(e, t);
      } catch (t) {
        return e;
      }
    }),
    (ty.private_safeLighten = function (e, t, n) {
      try {
        return wy(e, t);
      } catch (t) {
        return e;
      }
    }),
    (ty.recomposeColor = gy),
    (ty.rgbToHex = function (e) {
      if (0 === e.indexOf("#")) return e;
      const { values: t } = hy(e);
      return `#${t
        .map((e, t) =>
          (function (e) {
            const t = e.toString(16);
            return 1 === t.length ? `0${t}` : t;
          })(3 === t ? Math.round(255 * e) : e)
        )
        .join("")}`;
    });
  var fy = ly(oy),
    dy = ly(ay);
  function py(e, t = 0, n = 1) {
    return (0, dy.default)(e, t, n);
  }
  function my(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let n = e.match(t);
    return (
      n && 1 === n[0].length && (n = n.map((e) => e + e)),
      n
        ? `rgb${4 === n.length ? "a" : ""}(${n
            .map((e, t) =>
              t < 3
                ? parseInt(e, 16)
                : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3
            )
            .join(", ")})`
        : ""
    );
  }
  function hy(e) {
    if (e.type) return e;
    if ("#" === e.charAt(0)) return hy(my(e));
    const t = e.indexOf("("),
      n = e.substring(0, t);
    if (-1 === ["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n))
      throw new Error((0, fy.default)(9, e));
    let r,
      o = e.substring(t + 1, e.length - 1);
    if ("color" === n) {
      if (
        ((o = o.split(" ")),
        (r = o.shift()),
        4 === o.length && "/" === o[3].charAt(0) && (o[3] = o[3].slice(1)),
        -1 ===
          ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
            r
          ))
      )
        throw new Error((0, fy.default)(10, r));
    } else o = o.split(",");
    return (
      (o = o.map((e) => parseFloat(e))), { type: n, values: o, colorSpace: r }
    );
  }
  const yy = (e) => {
    const t = hy(e);
    return t.values
      .slice(0, 3)
      .map((e, n) => (-1 !== t.type.indexOf("hsl") && 0 !== n ? `${e}%` : e))
      .join(" ");
  };
  ty.colorChannel = yy;
  function gy(e) {
    const { type: t, colorSpace: n } = e;
    let { values: r } = e;
    return (
      -1 !== t.indexOf("rgb")
        ? (r = r.map((e, t) => (t < 3 ? parseInt(e, 10) : e)))
        : -1 !== t.indexOf("hsl") && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
      (r =
        -1 !== t.indexOf("color") ? `${n} ${r.join(" ")}` : `${r.join(", ")}`),
      `${t}(${r})`
    );
  }
  function vy(e) {
    e = hy(e);
    const { values: t } = e,
      n = t[0],
      r = t[1] / 100,
      o = t[2] / 100,
      a = r * Math.min(o, 1 - o),
      l = (e, t = (e + n / 30) % 12) =>
        o - a * Math.max(Math.min(t - 3, 9 - t, 1), -1);
    let i = "rgb";
    const u = [
      Math.round(255 * l(0)),
      Math.round(255 * l(8)),
      Math.round(255 * l(4)),
    ];
    return (
      "hsla" === e.type && ((i += "a"), u.push(t[3])),
      gy({ type: i, values: u })
    );
  }
  function by(e) {
    let t =
      "hsl" === (e = hy(e)).type || "hsla" === e.type
        ? hy(vy(e)).values
        : e.values;
    return (
      (t = t.map(
        (t) => (
          "color" !== e.type && (t /= 255),
          t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
        )
      )),
      Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
    );
  }
  function xy(e, t) {
    return (
      (e = hy(e)),
      (t = py(t)),
      ("rgb" !== e.type && "hsl" !== e.type) || (e.type += "a"),
      "color" === e.type ? (e.values[3] = `/${t}`) : (e.values[3] = t),
      gy(e)
    );
  }
  function ky(e, t) {
    if (((e = hy(e)), (t = py(t)), -1 !== e.type.indexOf("hsl")))
      e.values[2] *= 1 - t;
    else if (-1 !== e.type.indexOf("rgb") || -1 !== e.type.indexOf("color"))
      for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return gy(e);
  }
  function wy(e, t) {
    if (((e = hy(e)), (t = py(t)), -1 !== e.type.indexOf("hsl")))
      e.values[2] += (100 - e.values[2]) * t;
    else if (-1 !== e.type.indexOf("rgb"))
      for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (-1 !== e.type.indexOf("color"))
      for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return gy(e);
  }
  function Sy(e, t = 0.15) {
    return by(e) > 0.5 ? ky(e, t) : wy(e, t);
  }
  ty.private_safeColorChannel = (e, t) => {
    try {
      return yy(e);
    } catch (t) {
      return e;
    }
  };
  const Cy = ["mode", "contrastThreshold", "tonalOffset"],
    Ey = {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: { paper: uf.white, default: uf.white },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
    _y = {
      text: {
        primary: uf.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: { paper: "#121212", default: "#121212" },
      action: {
        active: uf.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24,
      },
    };
  function Py(e, t, n, r) {
    const o = r.light || r,
      a = r.dark || 1.5 * r;
    e[t] ||
      (e.hasOwnProperty(n)
        ? (e[t] = e[n])
        : "light" === t
        ? (e.light = cy(e.main, o))
        : "dark" === t && (e.dark = uy(e.main, a)));
  }
  function zy(e) {
    const {
        mode: t = "light",
        contrastThreshold: n = 3,
        tonalOffset: r = 0.2,
      } = e,
      o = xf(e, Cy),
      a =
        e.primary ||
        (function (e = "light") {
          return "dark" === e
            ? { main: ff[200], light: ff[50], dark: ff[400] }
            : { main: ff[700], light: ff[400], dark: ff[800] };
        })(t),
      l =
        e.secondary ||
        (function (e = "light") {
          return "dark" === e
            ? { main: cf[200], light: cf[50], dark: cf[400] }
            : { main: cf[500], light: cf[300], dark: cf[700] };
        })(t),
      i =
        e.error ||
        (function (e = "light") {
          return "dark" === e
            ? { main: sf[500], light: sf[300], dark: sf[700] }
            : { main: sf[700], light: sf[400], dark: sf[800] };
        })(t),
      u =
        e.info ||
        (function (e = "light") {
          return "dark" === e
            ? { main: df[400], light: df[300], dark: df[700] }
            : { main: df[700], light: df[500], dark: df[900] };
        })(t),
      s =
        e.success ||
        (function (e = "light") {
          return "dark" === e
            ? { main: pf[400], light: pf[300], dark: pf[700] }
            : { main: pf[800], light: pf[500], dark: pf[900] };
        })(t),
      c =
        e.warning ||
        (function (e = "light") {
          return "dark" === e
            ? { main: mf[400], light: mf[300], dark: mf[700] }
            : { main: "#ed6c02", light: mf[500], dark: mf[900] };
        })(t);
    function f(e) {
      return sy(e, _y.text.primary) >= n ? _y.text.primary : Ey.text.primary;
    }
    const d = ({
        color: e,
        name: t,
        mainShade: n = 500,
        lightShade: o = 300,
        darkShade: a = 700,
      }) => {
        if (
          (!(e = bf({}, e)).main && e[n] && (e.main = e[n]),
          !e.hasOwnProperty("main"))
        )
          throw new Error(yf(11, t ? ` (${t})` : "", n));
        if ("string" != typeof e.main)
          throw new Error(yf(12, t ? ` (${t})` : "", JSON.stringify(e.main)));
        return (
          Py(e, "light", o, r),
          Py(e, "dark", a, r),
          e.contrastText || (e.contrastText = f(e.main)),
          e
        );
      },
      p = { dark: _y, light: Ey };
    return Vp(
      bf(
        {
          common: bf({}, uf),
          mode: t,
          primary: d({ color: a, name: "primary" }),
          secondary: d({
            color: l,
            name: "secondary",
            mainShade: "A400",
            lightShade: "A200",
            darkShade: "A700",
          }),
          error: d({ color: i, name: "error" }),
          warning: d({ color: c, name: "warning" }),
          info: d({ color: u, name: "info" }),
          success: d({ color: s, name: "success" }),
          grey: hf,
          contrastThreshold: n,
          getContrastText: f,
          augmentColor: d,
          tonalOffset: r,
        },
        p[t]
      ),
      o
    );
  }
  const Ty = [
    "fontFamily",
    "fontSize",
    "fontWeightLight",
    "fontWeightRegular",
    "fontWeightMedium",
    "fontWeightBold",
    "htmlFontSize",
    "allVariants",
    "pxToRem",
  ];
  const Oy = { textTransform: "uppercase" },
    jy = '"Roboto", "Helvetica", "Arial", sans-serif';
  function Ny(e, t) {
    const n = "function" == typeof t ? t(e) : t,
      {
        fontFamily: r = jy,
        fontSize: o = 14,
        fontWeightLight: a = 300,
        fontWeightRegular: l = 400,
        fontWeightMedium: i = 500,
        fontWeightBold: u = 700,
        htmlFontSize: s = 16,
        allVariants: c,
        pxToRem: f,
      } = n,
      d = xf(n, Ty),
      p = o / 14,
      m = f || ((e) => (e / s) * p + "rem"),
      h = (e, t, n, o, a) => {
        return bf(
          { fontFamily: r, fontWeight: e, fontSize: m(t), lineHeight: n },
          r === jy
            ? { letterSpacing: ((l = o / t), Math.round(1e5 * l) / 1e5) + "em" }
            : {},
          a,
          c
        );
        var l;
      },
      y = {
        h1: h(a, 96, 1.167, -1.5),
        h2: h(a, 60, 1.2, -0.5),
        h3: h(l, 48, 1.167, 0),
        h4: h(l, 34, 1.235, 0.25),
        h5: h(l, 24, 1.334, 0),
        h6: h(i, 20, 1.6, 0.15),
        subtitle1: h(l, 16, 1.75, 0.15),
        subtitle2: h(i, 14, 1.57, 0.1),
        body1: h(l, 16, 1.5, 0.15),
        body2: h(l, 14, 1.43, 0.15),
        button: h(i, 14, 1.75, 0.4, Oy),
        caption: h(l, 12, 1.66, 0.4),
        overline: h(l, 12, 2.66, 1, Oy),
        inherit: {
          fontFamily: "inherit",
          fontWeight: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
          letterSpacing: "inherit",
        },
      };
    return Vp(
      bf(
        {
          htmlFontSize: s,
          pxToRem: m,
          fontFamily: r,
          fontSize: o,
          fontWeightLight: a,
          fontWeightRegular: l,
          fontWeightMedium: i,
          fontWeightBold: u,
        },
        y
      ),
      d,
      { clone: !1 }
    );
  }
  function My(...e) {
    return [
      `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,
      `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,
      `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`,
    ].join(",");
  }
  const Ry = [
      "none",
      My(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      My(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      My(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      My(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      My(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      My(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      My(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      My(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      My(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      My(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      My(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      My(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      My(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      My(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      My(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      My(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      My(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      My(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      My(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      My(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      My(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      My(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      My(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      My(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    Ay = ["duration", "easing", "delay"],
    Ly = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    Iy = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    };
  function Fy(e) {
    return `${Math.round(e)}ms`;
  }
  function $y(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.round(10 * (4 + 15 * t ** 0.25 + t / 5));
  }
  function Dy(e) {
    const t = bf({}, Ly, e.easing),
      n = bf({}, Iy, e.duration);
    return bf(
      {
        getAutoHeightDuration: $y,
        create: (e = ["all"], r = {}) => {
          const {
            duration: o = n.standard,
            easing: a = t.easeInOut,
            delay: l = 0,
          } = r;
          return (
            xf(r, Ay),
            (Array.isArray(e) ? e : [e])
              .map(
                (e) =>
                  `${e} ${"string" == typeof o ? o : Fy(o)} ${a} ${
                    "string" == typeof l ? l : Fy(l)
                  }`
              )
              .join(",")
          );
        },
      },
      e,
      { easing: t, duration: n }
    );
  }
  const Vy = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
    Uy = [
      "breakpoints",
      "mixins",
      "spacing",
      "palette",
      "transitions",
      "typography",
      "shape",
    ];
  function By(e = {}, ...t) {
    const {
        mixins: n = {},
        palette: r = {},
        transitions: o = {},
        typography: a = {},
      } = e,
      l = xf(e, Uy);
    if (e.vars) throw new Error(yf(18));
    const i = zy(r),
      u = Qm(e);
    let s = Vp(u, {
      mixins:
        ((c = u.breakpoints),
        (f = n),
        bf(
          {
            toolbar: {
              minHeight: 56,
              [c.up("xs")]: {
                "@media (orientation: landscape)": { minHeight: 48 },
              },
              [c.up("sm")]: { minHeight: 64 },
            },
          },
          f
        )),
      palette: i,
      shadows: Ry.slice(),
      typography: Ny(i, a),
      transitions: Dy(o),
      zIndex: bf({}, Vy),
    });
    var c, f;
    return (
      (s = Vp(s, l)),
      (s = t.reduce((e, t) => Vp(e, t), s)),
      (s.unstable_sxConfig = bf(
        {},
        Um,
        null == l ? void 0 : l.unstable_sxConfig
      )),
      (s.unstable_sx = function (e) {
        return Wm({ sx: e, theme: this });
      }),
      s
    );
  }
  const Wy = By();
  var Hy,
    Ky = {},
    Qy = { exports: {} };
  var qy,
    Gy = { exports: {} };
  var Xy = r(Fp),
    Yy = r(Up),
    Jy = r(Jp),
    Zy = r(Rh),
    eg = r(qm),
    tg = r(nh),
    ng = ry;
  Object.defineProperty(Ky, "__esModule", { value: !0 });
  var rg = (Ky.default = function (e = {}) {
    const {
        themeId: t,
        defaultTheme: n = hg,
        rootShouldForwardProp: r = mg,
        slotShouldForwardProp: o = mg,
      } = e,
      a = (e) =>
        (0, sg.default)(
          (0, og.default)({}, e, {
            theme: gg((0, og.default)({}, e, { defaultTheme: n, themeId: t })),
          })
        );
    return (
      (a.__mui_systemSx = !0),
      (e, l = {}) => {
        (0, lg.internal_processStyles)(e, (e) =>
          e.filter((e) => !(null != e && e.__mui_systemSx))
        );
        const {
            name: i,
            slot: u,
            skipVariantsResolver: s,
            skipSx: c,
            overridesResolver: f = vg(yg(u)),
          } = l,
          d = (0, ag.default)(l, dg),
          p = void 0 !== s ? s : (u && "Root" !== u && "root" !== u) || !1,
          m = c || !1;
        let h = mg;
        "Root" === u || "root" === u
          ? (h = r)
          : u
          ? (h = o)
          : (function (e) {
              return "string" == typeof e && e.charCodeAt(0) > 96;
            })(e) && (h = void 0);
        const y = (0, lg.default)(
            e,
            (0, og.default)({ shouldForwardProp: h, label: undefined }, d)
          ),
          g = (e) =>
            ("function" == typeof e && e.__emotion_real !== e) ||
            (0, ig.isPlainObject)(e)
              ? (r) =>
                  bg(
                    e,
                    (0, og.default)({}, r, {
                      theme: gg({
                        theme: r.theme,
                        defaultTheme: n,
                        themeId: t,
                      }),
                    })
                  )
              : e,
          v = (r, ...o) => {
            let l = g(r);
            const u = o ? o.map(g) : [];
            i &&
              f &&
              u.push((e) => {
                const r = gg(
                  (0, og.default)({}, e, { defaultTheme: n, themeId: t })
                );
                if (
                  !r.components ||
                  !r.components[i] ||
                  !r.components[i].styleOverrides
                )
                  return null;
                const o = r.components[i].styleOverrides,
                  a = {};
                return (
                  Object.entries(o).forEach(([t, n]) => {
                    a[t] = bg(n, (0, og.default)({}, e, { theme: r }));
                  }),
                  f(e, a)
                );
              }),
              i &&
                !p &&
                u.push((e) => {
                  var r;
                  const o = gg(
                    (0, og.default)({}, e, { defaultTheme: n, themeId: t })
                  );
                  return bg(
                    {
                      variants:
                        null == o ||
                        null == (r = o.components) ||
                        null == (r = r[i])
                          ? void 0
                          : r.variants,
                    },
                    (0, og.default)({}, e, { theme: o })
                  );
                }),
              m || u.push(a);
            const s = u.length - o.length;
            if (Array.isArray(r) && s > 0) {
              const e = new Array(s).fill("");
              (l = [...r, ...e]), (l.raw = [...r.raw, ...e]);
            }
            const c = y(l, ...u);
            return e.muiName && (c.muiName = e.muiName), c;
          };
        return y.withConfig && (v.withConfig = y.withConfig), v;
      }
    );
  });
  (Ky.shouldForwardProp = mg), (Ky.systemDefaultTheme = void 0);
  var og = ng(
      (Hy ||
        ((Hy = 1),
        (function (e) {
          function t() {
            return (
              (e.exports = t =
                Object.assign
                  ? Object.assign.bind()
                  : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                            (e[r] = n[r]);
                      }
                      return e;
                    }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports),
              t.apply(this, arguments)
            );
          }
          (e.exports = t),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
        })(Qy)),
      Qy.exports)
    ),
    ag = ng(
      (qy ||
        ((qy = 1),
        (function (e) {
          (e.exports = function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
        })(Gy)),
      Gy.exports)
    ),
    lg = (function (e, t) {
      if (e && e.__esModule) return e;
      if (null === e || ("object" != typeof e && "function" != typeof e))
        return { default: e };
      var n = pg(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
          var l = o ? Object.getOwnPropertyDescriptor(e, a) : null;
          l && (l.get || l.set)
            ? Object.defineProperty(r, a, l)
            : (r[a] = e[a]);
        }
      return (r.default = e), n && n.set(e, r), r;
    })(Xy),
    ig = Yy;
  ng(Jy), ng(Zy);
  var ug = ng(eg),
    sg = ng(tg);
  const cg = ["ownerState"],
    fg = ["variants"],
    dg = [
      "name",
      "slot",
      "skipVariantsResolver",
      "skipSx",
      "overridesResolver",
    ];
  function pg(e) {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap(),
      n = new WeakMap();
    return (pg = function (e) {
      return e ? n : t;
    })(e);
  }
  function mg(e) {
    return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
  }
  const hg = (Ky.systemDefaultTheme = (0, ug.default)()),
    yg = (e) => (e ? e.charAt(0).toLowerCase() + e.slice(1) : e);
  function gg({ defaultTheme: e, theme: t, themeId: n }) {
    return (r = t), 0 === Object.keys(r).length ? e : t[n] || t;
    var r;
  }
  function vg(e) {
    return e ? (t, n) => n[e] : null;
  }
  function bg(e, t) {
    let { ownerState: n } = t,
      r = (0, ag.default)(t, cg);
    const o =
      "function" == typeof e ? e((0, og.default)({ ownerState: n }, r)) : e;
    if (Array.isArray(o))
      return o.flatMap((e) => bg(e, (0, og.default)({ ownerState: n }, r)));
    if (o && "object" == typeof o && Array.isArray(o.variants)) {
      const { variants: e = [] } = o;
      let t = (0, ag.default)(o, fg);
      return (
        e.forEach((e) => {
          let o = !0;
          "function" == typeof e.props
            ? (o = e.props((0, og.default)({ ownerState: n }, r, n)))
            : Object.keys(e.props).forEach((t) => {
                (null == n ? void 0 : n[t]) !== e.props[t] &&
                  r[t] !== e.props[t] &&
                  (o = !1);
              }),
            o &&
              (Array.isArray(t) || (t = [t]),
              t.push(
                "function" == typeof e.style
                  ? e.style((0, og.default)({ ownerState: n }, r, n))
                  : e.style
              ));
        }),
        t
      );
    }
    return o;
  }
  const xg = rg({
      themeId: vf,
      defaultTheme: Wy,
      rootShouldForwardProp: (e) =>
        (function (e) {
          return (
            "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e
          );
        })(e) && "classes" !== e,
    }),
    kg = ["theme"];
  function wg(e) {
    let { theme: t } = e,
      n = xf(e, kg);
    const r = t[vf];
    return J.jsx(ey, bf({}, n, { themeId: r ? vf : void 0, theme: r || t }));
  }
  const Sg = (e) => {
    let t;
    return (
      (t = e < 1 ? 5.11916 * e ** 2 : 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  };
  function Cg(e) {
    return Yh(e);
  }
  function Eg(e) {
    return sh("MuiSvgIcon", e);
  }
  ch("MuiSvgIcon", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "colorAction",
    "colorError",
    "colorDisabled",
    "fontSizeInherit",
    "fontSizeSmall",
    "fontSizeMedium",
    "fontSizeLarge",
  ]);
  const _g = [
      "children",
      "className",
      "color",
      "component",
      "fontSize",
      "htmlColor",
      "inheritViewBox",
      "titleAccess",
      "viewBox",
    ],
    Pg = xg("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          "inherit" !== n.color && t[`color${Yp(n.color)}`],
          t[`fontSize${Yp(n.fontSize)}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      var n, r, o, a, l, i, u, s, c, f, d, p, m;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        fill: t.hasSvgAsChild ? void 0 : "currentColor",
        flexShrink: 0,
        transition:
          null == (n = e.transitions) || null == (r = n.create)
            ? void 0
            : r.call(n, "fill", {
                duration:
                  null == (o = e.transitions) || null == (o = o.duration)
                    ? void 0
                    : o.shorter,
              }),
        fontSize: {
          inherit: "inherit",
          small:
            (null == (a = e.typography) || null == (l = a.pxToRem)
              ? void 0
              : l.call(a, 20)) || "1.25rem",
          medium:
            (null == (i = e.typography) || null == (u = i.pxToRem)
              ? void 0
              : u.call(i, 24)) || "1.5rem",
          large:
            (null == (s = e.typography) || null == (c = s.pxToRem)
              ? void 0
              : c.call(s, 35)) || "2.1875rem",
        }[t.fontSize],
        color:
          null !=
          (f =
            null == (d = (e.vars || e).palette) || null == (d = d[t.color])
              ? void 0
              : d.main)
            ? f
            : {
                action:
                  null == (p = (e.vars || e).palette) || null == (p = p.action)
                    ? void 0
                    : p.active,
                disabled:
                  null == (m = (e.vars || e).palette) || null == (m = m.action)
                    ? void 0
                    : m.disabled,
                inherit: void 0,
              }[t.color],
      };
    }),
    zg = U.forwardRef(function (e, t) {
      const n = Cg({ props: e, name: "MuiSvgIcon" }),
        {
          children: r,
          className: o,
          color: a = "inherit",
          component: l = "svg",
          fontSize: i = "medium",
          htmlColor: u,
          inheritViewBox: s = !1,
          titleAccess: c,
          viewBox: f = "0 0 24 24",
        } = n,
        d = xf(n, _g),
        p = U.isValidElement(r) && "svg" === r.type,
        m = bf({}, n, {
          color: a,
          component: l,
          fontSize: i,
          instanceFontSize: e.fontSize,
          inheritViewBox: s,
          viewBox: f,
          hasSvgAsChild: p,
        }),
        h = {};
      s || (h.viewBox = f);
      const y = ((e) => {
        const { color: t, fontSize: n, classes: r } = e;
        return Dh(
          {
            root: [
              "root",
              "inherit" !== t && `color${Yp(t)}`,
              `fontSize${Yp(n)}`,
            ],
          },
          Eg,
          r
        );
      })(m);
      return J.jsxs(
        Pg,
        bf(
          {
            as: l,
            className: lh(y.root, o),
            focusable: "false",
            color: u,
            "aria-hidden": !c || void 0,
            role: c ? "img" : void 0,
            ref: t,
          },
          h,
          d,
          p && r.props,
          {
            ownerState: m,
            children: [
              p ? r.props.children : r,
              c ? J.jsx("title", { children: c }) : null,
            ],
          }
        )
      );
    });
  function Tg(e) {
    return sh("MuiPaper", e);
  }
  (zg.muiName = "SvgIcon"),
    ch("MuiPaper", [
      "root",
      "rounded",
      "outlined",
      "elevation",
      "elevation0",
      "elevation1",
      "elevation2",
      "elevation3",
      "elevation4",
      "elevation5",
      "elevation6",
      "elevation7",
      "elevation8",
      "elevation9",
      "elevation10",
      "elevation11",
      "elevation12",
      "elevation13",
      "elevation14",
      "elevation15",
      "elevation16",
      "elevation17",
      "elevation18",
      "elevation19",
      "elevation20",
      "elevation21",
      "elevation22",
      "elevation23",
      "elevation24",
    ]);
  const Og = ["className", "component", "elevation", "square", "variant"],
    jg = xg("div", {
      name: "MuiPaper",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          !n.square && t.rounded,
          "elevation" === n.variant && t[`elevation${n.elevation}`],
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      var n;
      return bf(
        {
          backgroundColor: (e.vars || e).palette.background.paper,
          color: (e.vars || e).palette.text.primary,
          transition: e.transitions.create("box-shadow"),
        },
        !t.square && { borderRadius: e.shape.borderRadius },
        "outlined" === t.variant && {
          border: `1px solid ${(e.vars || e).palette.divider}`,
        },
        "elevation" === t.variant &&
          bf(
            { boxShadow: (e.vars || e).shadows[t.elevation] },
            !e.vars &&
              "dark" === e.palette.mode && {
                backgroundImage: `linear-gradient(${iy(
                  "#fff",
                  Sg(t.elevation)
                )}, ${iy("#fff", Sg(t.elevation))})`,
              },
            e.vars && {
              backgroundImage:
                null == (n = e.vars.overlays) ? void 0 : n[t.elevation],
            }
          )
      );
    }),
    Ng = U.forwardRef(function (e, t) {
      const n = Cg({ props: e, name: "MuiPaper" }),
        {
          className: r,
          component: o = "div",
          elevation: a = 1,
          square: l = !1,
          variant: i = "elevation",
        } = n,
        u = xf(n, Og),
        s = bf({}, n, { component: o, elevation: a, square: l, variant: i }),
        c = ((e) => {
          const { square: t, elevation: n, variant: r, classes: o } = e;
          return Dh(
            {
              root: [
                "root",
                r,
                !t && "rounded",
                "elevation" === r && `elevation${n}`,
              ],
            },
            Tg,
            o
          );
        })(s);
      return J.jsx(
        jg,
        bf({ as: o, ownerState: s, className: lh(c.root, r), ref: t }, u)
      );
    }),
    Mg = ["onChange", "maxRows", "minRows", "style", "value"];
  function Rg(e) {
    return parseInt(e, 10) || 0;
  }
  const Ag = {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  };
  const Lg = U.forwardRef(function (e, t) {
    const { onChange: n, maxRows: r, minRows: o = 1, style: a, value: l } = e,
      i = xf(e, Mg),
      { current: u } = U.useRef(null != l),
      s = U.useRef(null),
      c = $h(t, s),
      f = U.useRef(null),
      d = U.useRef(null),
      p = U.useCallback(() => {
        const t = s.current,
          n = Fh(t).getComputedStyle(t);
        if ("0px" === n.width) return { outerHeightStyle: 0, overflowing: !1 };
        const a = d.current;
        (a.style.width = n.width),
          (a.value = t.value || e.placeholder || "x"),
          "\n" === a.value.slice(-1) && (a.value += " ");
        const l = n.boxSizing,
          i = Rg(n.paddingBottom) + Rg(n.paddingTop),
          u = Rg(n.borderBottomWidth) + Rg(n.borderTopWidth),
          c = a.scrollHeight;
        a.value = "x";
        const f = a.scrollHeight;
        let p = c;
        o && (p = Math.max(Number(o) * f, p)),
          r && (p = Math.min(Number(r) * f, p)),
          (p = Math.max(p, f));
        return {
          outerHeightStyle: p + ("border-box" === l ? i + u : 0),
          overflowing: Math.abs(p - c) <= 1,
        };
      }, [r, o, e.placeholder]),
      m = U.useCallback(() => {
        const e = p();
        if (
          null == (t = e) ||
          0 === Object.keys(t).length ||
          (0 === t.outerHeightStyle && !t.overflowing)
        )
          return;
        var t;
        const n = e.outerHeightStyle,
          r = s.current;
        f.current !== n && ((f.current = n), (r.style.height = `${n}px`)),
          (r.style.overflow = e.overflowing ? "hidden" : "");
      }, [p]);
    Lh(() => {
      const e = () => {
        m();
      };
      const t = (function (e, t = 166) {
          let n;
          function r(...r) {
            clearTimeout(n),
              (n = setTimeout(() => {
                e.apply(this, r);
              }, t));
          }
          return (
            (r.clear = () => {
              clearTimeout(n);
            }),
            r
          );
        })(e),
        n = s.current,
        r = Fh(n);
      let o;
      return (
        r.addEventListener("resize", t),
        "undefined" != typeof ResizeObserver &&
          ((o = new ResizeObserver(e)), o.observe(n)),
        () => {
          t.clear(),
            cancelAnimationFrame(undefined),
            r.removeEventListener("resize", t),
            o && o.disconnect();
        }
      );
    }, [p, m]),
      Lh(() => {
        m();
      });
    return J.jsxs(U.Fragment, {
      children: [
        J.jsx(
          "textarea",
          bf(
            {
              value: l,
              onChange: (e) => {
                u || m(), n && n(e);
              },
              ref: c,
              rows: o,
              style: a,
            },
            i
          )
        ),
        J.jsx("textarea", {
          "aria-hidden": !0,
          className: e.className,
          readOnly: !0,
          ref: d,
          tabIndex: -1,
          style: bf({}, Ag, a, { paddingTop: 0, paddingBottom: 0 }),
        }),
      ],
    });
  });
  const Ig = U.createContext(void 0);
  function Fg(e) {
    return J.jsx(Jm, bf({}, e, { defaultTheme: Wy, themeId: vf }));
  }
  function $g(e) {
    return null != e && !(Array.isArray(e) && 0 === e.length);
  }
  function Dg(e) {
    return sh("MuiInputBase", e);
  }
  const Vg = ch("MuiInputBase", [
      "root",
      "formControl",
      "focused",
      "disabled",
      "adornedStart",
      "adornedEnd",
      "error",
      "sizeSmall",
      "multiline",
      "colorSecondary",
      "fullWidth",
      "hiddenLabel",
      "readOnly",
      "input",
      "inputSizeSmall",
      "inputMultiline",
      "inputTypeSearch",
      "inputAdornedStart",
      "inputAdornedEnd",
      "inputHiddenLabel",
    ]),
    Ug = [
      "aria-describedby",
      "autoComplete",
      "autoFocus",
      "className",
      "color",
      "components",
      "componentsProps",
      "defaultValue",
      "disabled",
      "disableInjectingGlobalStyles",
      "endAdornment",
      "error",
      "fullWidth",
      "id",
      "inputComponent",
      "inputProps",
      "inputRef",
      "margin",
      "maxRows",
      "minRows",
      "multiline",
      "name",
      "onBlur",
      "onChange",
      "onClick",
      "onFocus",
      "onKeyDown",
      "onKeyUp",
      "placeholder",
      "readOnly",
      "renderSuffix",
      "rows",
      "size",
      "slotProps",
      "slots",
      "startAdornment",
      "type",
      "value",
    ],
    Bg = xg("div", {
      name: "MuiInputBase",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.formControl && t.formControl,
          n.startAdornment && t.adornedStart,
          n.endAdornment && t.adornedEnd,
          n.error && t.error,
          "small" === n.size && t.sizeSmall,
          n.multiline && t.multiline,
          n.color && t[`color${Yp(n.color)}`],
          n.fullWidth && t.fullWidth,
          n.hiddenLabel && t.hiddenLabel,
        ];
      },
    })(({ theme: e, ownerState: t }) =>
      bf(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${Vg.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          bf({ padding: "4px 0 5px" }, "small" === t.size && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" }
      )
    ),
    Wg = xg("input", {
      name: "MuiInputBase",
      slot: "Input",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.input,
          "small" === n.size && t.inputSizeSmall,
          n.multiline && t.inputMultiline,
          "search" === n.type && t.inputTypeSearch,
          n.startAdornment && t.inputAdornedStart,
          n.endAdornment && t.inputAdornedEnd,
          n.hiddenLabel && t.inputHiddenLabel,
        ];
      },
    })(({ theme: e, ownerState: t }) => {
      const n = "light" === e.palette.mode,
        r = bf(
          { color: "currentColor" },
          e.vars
            ? { opacity: e.vars.opacity.inputPlaceholder }
            : { opacity: n ? 0.42 : 0.5 },
          {
            transition: e.transitions.create("opacity", {
              duration: e.transitions.duration.shorter,
            }),
          }
        ),
        o = { opacity: "0 !important" },
        a = e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 };
      return bf(
        {
          font: "inherit",
          letterSpacing: "inherit",
          color: "currentColor",
          padding: "4px 0 5px",
          border: 0,
          boxSizing: "content-box",
          background: "none",
          height: "1.4375em",
          margin: 0,
          WebkitTapHighlightColor: "transparent",
          display: "block",
          minWidth: 0,
          width: "100%",
          animationName: "mui-auto-fill-cancel",
          animationDuration: "10ms",
          "&::-webkit-input-placeholder": r,
          "&::-moz-placeholder": r,
          "&:-ms-input-placeholder": r,
          "&::-ms-input-placeholder": r,
          "&:focus": { outline: 0 },
          "&:invalid": { boxShadow: "none" },
          "&::-webkit-search-decoration": { WebkitAppearance: "none" },
          [`label[data-shrink=false] + .${Vg.formControl} &`]: {
            "&::-webkit-input-placeholder": o,
            "&::-moz-placeholder": o,
            "&:-ms-input-placeholder": o,
            "&::-ms-input-placeholder": o,
            "&:focus::-webkit-input-placeholder": a,
            "&:focus::-moz-placeholder": a,
            "&:focus:-ms-input-placeholder": a,
            "&:focus::-ms-input-placeholder": a,
          },
          [`&.${Vg.disabled}`]: {
            opacity: 1,
            WebkitTextFillColor: (e.vars || e).palette.text.disabled,
          },
          "&:-webkit-autofill": {
            animationDuration: "5000s",
            animationName: "mui-auto-fill",
          },
        },
        "small" === t.size && { paddingTop: 1 },
        t.multiline && {
          height: "auto",
          resize: "none",
          padding: 0,
          paddingTop: 0,
        },
        "search" === t.type && { MozAppearance: "textfield" }
      );
    }),
    Hg = J.jsx(Fg, {
      styles: {
        "@keyframes mui-auto-fill": { from: { display: "block" } },
        "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
      },
    }),
    Kg = U.forwardRef(function (e, t) {
      var n;
      const r = Cg({ props: e, name: "MuiInputBase" }),
        {
          "aria-describedby": o,
          autoComplete: a,
          autoFocus: l,
          className: i,
          components: u = {},
          componentsProps: s = {},
          defaultValue: c,
          disabled: f,
          disableInjectingGlobalStyles: d,
          endAdornment: p,
          fullWidth: m = !1,
          id: h,
          inputComponent: y = "input",
          inputProps: g = {},
          inputRef: v,
          maxRows: b,
          minRows: x,
          multiline: k = !1,
          name: w,
          onBlur: S,
          onChange: C,
          onClick: E,
          onFocus: _,
          onKeyDown: P,
          onKeyUp: z,
          placeholder: T,
          readOnly: O,
          renderSuffix: j,
          rows: N,
          slotProps: M = {},
          slots: R = {},
          startAdornment: A,
          type: L = "text",
          value: I,
        } = r,
        F = xf(r, Ug),
        $ = null != g.value ? g.value : I,
        { current: D } = U.useRef(null != $),
        V = U.useRef(),
        B = U.useCallback((e) => {}, []),
        W = $h(V, v, g.ref, B),
        [H, K] = U.useState(!1),
        Q = U.useContext(Ig),
        q = (function ({ props: e, states: t, muiFormControl: n }) {
          return t.reduce(
            (t, r) => ((t[r] = e[r]), n && void 0 === e[r] && (t[r] = n[r]), t),
            {}
          );
        })({
          props: r,
          muiFormControl: Q,
          states: [
            "color",
            "disabled",
            "error",
            "hiddenLabel",
            "size",
            "required",
            "filled",
          ],
        });
      (q.focused = Q ? Q.focused : H),
        U.useEffect(() => {
          !Q && f && H && (K(!1), S && S());
        }, [Q, f, H, S]);
      const G = Q && Q.onFilled,
        X = Q && Q.onEmpty,
        Y = U.useCallback(
          (e) => {
            !(function (e, t = !1) {
              return (
                e &&
                (($g(e.value) && "" !== e.value) ||
                  (t && $g(e.defaultValue) && "" !== e.defaultValue))
              );
            })(e)
              ? X && X()
              : G && G();
          },
          [G, X]
        );
      Lh(() => {
        D && Y({ value: $ });
      }, [$, Y, D]);
      U.useEffect(() => {
        Y(V.current);
      }, []);
      let Z = y,
        ee = g;
      k &&
        "input" === Z &&
        ((ee = bf(
          N
            ? { type: void 0, minRows: N, maxRows: N }
            : { type: void 0, maxRows: b, minRows: x },
          ee
        )),
        (Z = Lg));
      U.useEffect(() => {
        Q && Q.setAdornedStart(Boolean(A));
      }, [Q, A]);
      const te = bf({}, r, {
          color: q.color || "primary",
          disabled: q.disabled,
          endAdornment: p,
          error: q.error,
          focused: q.focused,
          formControl: Q,
          fullWidth: m,
          hiddenLabel: q.hiddenLabel,
          multiline: k,
          size: q.size,
          startAdornment: A,
          type: L,
        }),
        ne = ((e) => {
          const {
            classes: t,
            color: n,
            disabled: r,
            error: o,
            endAdornment: a,
            focused: l,
            formControl: i,
            fullWidth: u,
            hiddenLabel: s,
            multiline: c,
            readOnly: f,
            size: d,
            startAdornment: p,
            type: m,
          } = e;
          return Dh(
            {
              root: [
                "root",
                `color${Yp(n)}`,
                r && "disabled",
                o && "error",
                u && "fullWidth",
                l && "focused",
                i && "formControl",
                d && "medium" !== d && `size${Yp(d)}`,
                c && "multiline",
                p && "adornedStart",
                a && "adornedEnd",
                s && "hiddenLabel",
                f && "readOnly",
              ],
              input: [
                "input",
                r && "disabled",
                "search" === m && "inputTypeSearch",
                c && "inputMultiline",
                "small" === d && "inputSizeSmall",
                s && "inputHiddenLabel",
                p && "inputAdornedStart",
                a && "inputAdornedEnd",
                f && "readOnly",
              ],
            },
            Dg,
            t
          );
        })(te),
        re = R.root || u.Root || Bg,
        oe = M.root || s.root || {},
        ae = R.input || u.Input || Wg;
      return (
        (ee = bf({}, ee, null != (n = M.input) ? n : s.input)),
        J.jsxs(U.Fragment, {
          children: [
            !d && Hg,
            J.jsxs(
              re,
              bf(
                {},
                oe,
                !Vh(re) && { ownerState: bf({}, te, oe.ownerState) },
                {
                  ref: t,
                  onClick: (e) => {
                    V.current &&
                      e.currentTarget === e.target &&
                      V.current.focus(),
                      E && E(e);
                  },
                },
                F,
                {
                  className: lh(
                    ne.root,
                    oe.className,
                    i,
                    O && "MuiInputBase-readOnly"
                  ),
                  children: [
                    A,
                    J.jsx(Ig.Provider, {
                      value: null,
                      children: J.jsx(
                        ae,
                        bf(
                          {
                            ownerState: te,
                            "aria-invalid": q.error,
                            "aria-describedby": o,
                            autoComplete: a,
                            autoFocus: l,
                            defaultValue: c,
                            disabled: q.disabled,
                            id: h,
                            onAnimationStart: (e) => {
                              Y(
                                "mui-auto-fill-cancel" === e.animationName
                                  ? V.current
                                  : { value: "x" }
                              );
                            },
                            name: w,
                            placeholder: T,
                            readOnly: O,
                            required: q.required,
                            rows: N,
                            value: $,
                            onKeyDown: P,
                            onKeyUp: z,
                            type: L,
                          },
                          ee,
                          !Vh(ae) && {
                            as: Z,
                            ownerState: bf({}, te, ee.ownerState),
                          },
                          {
                            ref: W,
                            className: lh(
                              ne.input,
                              ee.className,
                              O && "MuiInputBase-readOnly"
                            ),
                            onBlur: (e) => {
                              S && S(e),
                                g.onBlur && g.onBlur(e),
                                Q && Q.onBlur ? Q.onBlur(e) : K(!1);
                            },
                            onChange: (e, ...t) => {
                              if (!D) {
                                const t = e.target || V.current;
                                if (null == t) throw new Error(yf(1));
                                Y({ value: t.value });
                              }
                              g.onChange && g.onChange(e, ...t),
                                C && C(e, ...t);
                            },
                            onFocus: (e) => {
                              q.disabled
                                ? e.stopPropagation()
                                : (_ && _(e),
                                  g.onFocus && g.onFocus(e),
                                  Q && Q.onFocus ? Q.onFocus(e) : K(!0));
                            },
                          }
                        )
                      ),
                    }),
                    p,
                    j ? j(bf({}, q, { startAdornment: A })) : null,
                  ],
                }
              )
            ),
          ],
        })
      );
    }),
    Qg = ch("MuiBox", ["root"]),
    qg = By(),
    Gg = (function (e = {}) {
      const {
          themeId: t,
          defaultTheme: n,
          defaultClassName: r = "MuiBox-root",
          generateClassName: o,
        } = e,
        a = Ip("div", {
          shouldForwardProp: (e) => "theme" !== e && "sx" !== e && "as" !== e,
        })(Wm);
      return U.forwardRef(function (e, l) {
        const i = Ym(n),
          u = th(e),
          { className: s, component: c = "div" } = u,
          f = xf(u, ih);
        return J.jsx(
          a,
          bf(
            {
              as: c,
              ref: l,
              className: lh(s, o ? o(r) : r),
              theme: (t && i[t]) || i,
            },
            f
          )
        );
      });
    })({
      themeId: vf,
      defaultTheme: qg,
      defaultClassName: Qg.root,
      generateClassName: oh.generate,
    });
  function Xg(e) {
    const { children: t, defer: n = !1, fallback: r = null } = e,
      [o, a] = U.useState(!1);
    return (
      Lh(() => {
        n || a(!0);
      }, [n]),
      U.useEffect(() => {
        n && a(!0);
      }, [n]),
      J.jsx(U.Fragment, { children: o ? t : r })
    );
  }
  const Yg = (e) => {
      let t;
      const n = new Set(),
        r = (e, r) => {
          const o = "function" == typeof e ? e(t) : e;
          if (!Object.is(o, t)) {
            const e = t;
            (t = (null != r ? r : "object" != typeof o || null === o)
              ? o
              : Object.assign({}, t, o)),
              n.forEach((n) => n(t, e));
          }
        },
        o = () => t,
        a = {
          setState: r,
          getState: o,
          getInitialState: () => l,
          subscribe: (e) => (n.add(e), () => n.delete(e)),
          destroy: () => {
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
            ),
              n.clear();
          },
        },
        l = (t = e(r, o, a));
      return a;
    },
    Jg = (e) => (e ? Yg(e) : Yg);
  var Zg = { exports: {} },
    ev = {},
    tv = { exports: {} },
    nv = {},
    rv = U;
  var ov =
      "function" == typeof Object.is
        ? Object.is
        : function (e, t) {
            return (
              (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            );
          },
    av = rv.useState,
    lv = rv.useEffect,
    iv = rv.useLayoutEffect,
    uv = rv.useDebugValue;
  function sv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ov(e, n);
    } catch (e) {
      return !0;
    }
  }
  var cv =
    void 0 === window.document || void 0 === window.document.createElement
      ? function (e, t) {
          return t();
        }
      : function (e, t) {
          var n = t(),
            r = av({ inst: { value: n, getSnapshot: t } }),
            o = r[0].inst,
            a = r[1];
          return (
            iv(
              function () {
                (o.value = n), (o.getSnapshot = t), sv(o) && a({ inst: o });
              },
              [e, n, t]
            ),
            lv(
              function () {
                return (
                  sv(o) && a({ inst: o }),
                  e(function () {
                    sv(o) && a({ inst: o });
                  })
                );
              },
              [e]
            ),
            uv(n),
            n
          );
        };
  (nv.useSyncExternalStore =
    void 0 !== rv.useSyncExternalStore ? rv.useSyncExternalStore : cv),
    (tv.exports = nv);
  var fv = tv.exports,
    dv = U,
    pv = fv;
  /**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var mv =
      "function" == typeof Object.is
        ? Object.is
        : function (e, t) {
            return (
              (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            );
          },
    hv = pv.useSyncExternalStore,
    yv = dv.useRef,
    gv = dv.useEffect,
    vv = dv.useMemo,
    bv = dv.useDebugValue;
  (ev.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
    var a = yv(null);
    if (null === a.current) {
      var l = { hasValue: !1, value: null };
      a.current = l;
    } else l = a.current;
    a = vv(
      function () {
        function e(e) {
          if (!u) {
            if (((u = !0), (a = e), (e = r(e)), void 0 !== o && l.hasValue)) {
              var t = l.value;
              if (o(t, e)) return (i = t);
            }
            return (i = e);
          }
          if (((t = i), mv(a, e))) return t;
          var n = r(e);
          return void 0 !== o && o(t, n) ? t : ((a = e), (i = n));
        }
        var a,
          i,
          u = !1,
          s = void 0 === n ? null : n;
        return [
          function () {
            return e(t());
          },
          null === s
            ? void 0
            : function () {
                return e(s());
              },
        ];
      },
      [t, n, r, o]
    );
    var i = hv(e, a[0], a[1]);
    return (
      gv(
        function () {
          (l.hasValue = !0), (l.value = i);
        },
        [i]
      ),
      bv(i),
      i
    );
  }),
    (Zg.exports = ev);
  var xv = n(Zg.exports);
  const { useDebugValue: kv } = B,
    { useSyncExternalStoreWithSelector: wv } = xv;
  let Sv = !1;
  const Cv = (e) => e;
  function Ev(e, t = Cv, n) {
    n &&
      !Sv &&
      (console.warn(
        "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
      ),
      (Sv = !0));
    const r = wv(
      e.subscribe,
      e.getState,
      e.getServerState || e.getInitialState,
      t,
      n
    );
    return kv(r), r;
  }
  const _v = (e) => {
      "function" != typeof e &&
        console.warn(
          "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
        );
      const t = "function" == typeof e ? Jg(e) : e,
        n = (e, n) => Ev(t, e, n);
      return Object.assign(n, t), n;
    },
    Pv = {
      scheme: "Light Theme",
      author: "mac gainor (https://github.com/mac-s-g)",
      base00: "rgba(0, 0, 0, 0)",
      base01: "rgb(245, 245, 245)",
      base02: "rgb(235, 235, 235)",
      base03: "#93a1a1",
      base04: "rgba(0, 0, 0, 0.3)",
      base05: "#586e75",
      base06: "#073642",
      base07: "#002b36",
      base08: "#d33682",
      base09: "#cb4b16",
      base0A: "#ffd500",
      base0B: "#859900",
      base0C: "#6c71c4",
      base0D: "#586e75",
      base0E: "#2aa198",
      base0F: "#268bd2",
    },
    zv = {
      scheme: "Dark Theme",
      author: "Chris Kempson (http://chriskempson.com)",
      base00: "#181818",
      base01: "#282828",
      base02: "#383838",
      base03: "#585858",
      base04: "#b8b8b8",
      base05: "#d8d8d8",
      base06: "#e8e8e8",
      base07: "#f8f8f8",
      base08: "#ab4642",
      base09: "#dc9656",
      base0A: "#f7ca88",
      base0B: "#a1b56c",
      base0C: "#86c1b9",
      base0D: "#7cafc2",
      base0E: "#ba8baf",
      base0F: "#a16946",
    };
  var Tv = Object.freeze({
    __proto__: null,
    darkColorspace: zv,
    lightColorspace: Pv,
  });
  const Ov = () => null;
  Ov.when = () => !1;
  const jv = (e) => {
      return (t ? _v(t) : _v)((t, n) => {
        var r, o, a, l, i, u, s, c, f, d, p, m, h, y, g, v, b, x, k, w, S, C, E;
        return {
          rootName: null !== (r = e.rootName) && void 0 !== r ? r : "root",
          indentWidth: null !== (o = e.indentWidth) && void 0 !== o ? o : 3,
          keyRenderer: null !== (a = e.keyRenderer) && void 0 !== a ? a : Ov,
          enableAdd: null !== (l = e.enableAdd) && void 0 !== l && l,
          enableDelete: null !== (i = e.enableDelete) && void 0 !== i && i,
          enableClipboard:
            null === (u = e.enableClipboard) || void 0 === u || u,
          editable: null !== (s = e.editable) && void 0 !== s && s,
          onChange: null !== (c = e.onChange) && void 0 !== c ? c : () => {},
          onCopy: null !== (f = e.onCopy) && void 0 !== f ? f : void 0,
          onSelect: null !== (d = e.onSelect) && void 0 !== d ? d : void 0,
          onAdd: null !== (p = e.onAdd) && void 0 !== p ? p : void 0,
          onDelete: null !== (m = e.onDelete) && void 0 !== m ? m : void 0,
          defaultInspectDepth:
            null !== (h = e.defaultInspectDepth) && void 0 !== h ? h : 5,
          defaultInspectControl:
            null !== (y = e.defaultInspectControl) && void 0 !== y ? y : void 0,
          maxDisplayLength:
            null !== (g = e.maxDisplayLength) && void 0 !== g ? g : 30,
          groupArraysAfterLength:
            null !== (v = e.groupArraysAfterLength) && void 0 !== v ? v : 100,
          collapseStringsAfterLength:
            !1 === e.collapseStringsAfterLength
              ? Number.MAX_VALUE
              : null !== (b = e.collapseStringsAfterLength) && void 0 !== b
              ? b
              : 50,
          objectSortKeys: null !== (x = e.objectSortKeys) && void 0 !== x && x,
          quotesOnKeys: null === (k = e.quotesOnKeys) || void 0 === k || k,
          displayDataTypes:
            null === (w = e.displayDataTypes) || void 0 === w || w,
          displaySize: null === (S = e.displaySize) || void 0 === S || S,
          displayComma: null !== (C = e.displayComma) && void 0 !== C && C,
          highlightUpdates:
            null !== (E = e.highlightUpdates) && void 0 !== E && E,
          inspectCache: {},
          hoverPath: null,
          colorspace: Pv,
          value: e.value,
          prevValue: void 0,
          getInspectCache: (e, t) => {
            const r =
              void 0 !== t ? e.join(".") + "[".concat(t, "]nt") : e.join(".");
            return n().inspectCache[r];
          },
          setInspectCache: (e, n, r) => {
            const o =
              void 0 !== r ? e.join(".") + "[".concat(r, "]nt") : e.join(".");
            t((e) => ({
              inspectCache: {
                ...e.inspectCache,
                [o]: "function" == typeof n ? n(e.inspectCache[o]) : n,
              },
            }));
          },
          setHover: (e, n) => {
            t({ hoverPath: e ? { path: e, nestedIndex: n } : null });
          },
        };
      });
      var t;
    },
    Nv = U.createContext(void 0);
  Nv.Provider;
  const Mv = (e, t) => Ev(U.useContext(Nv), e, t),
    Rv = () => Mv((e) => e.colorspace.base07);
  var Av = function () {
      var e = document.getSelection();
      if (!e.rangeCount) return function () {};
      for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
        n.push(e.getRangeAt(r));
      switch (t.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          t.blur();
          break;
        default:
          t = null;
      }
      return (
        e.removeAllRanges(),
        function () {
          "Caret" === e.type && e.removeAllRanges(),
            e.rangeCount ||
              n.forEach(function (t) {
                e.addRange(t);
              }),
            t && t.focus();
        }
      );
    },
    Lv = { "text/plain": "Text", "text/html": "Url", default: "Text" };
  var Iv = function (e, t) {
      var n,
        r,
        o,
        a,
        l,
        i,
        u = !1;
      t || (t = {}), (n = t.debug || !1);
      try {
        if (
          ((o = Av()),
          (a = document.createRange()),
          (l = document.getSelection()),
          ((i = document.createElement("span")).textContent = e),
          (i.ariaHidden = "true"),
          (i.style.all = "unset"),
          (i.style.position = "fixed"),
          (i.style.top = 0),
          (i.style.clip = "rect(0, 0, 0, 0)"),
          (i.style.whiteSpace = "pre"),
          (i.style.webkitUserSelect = "text"),
          (i.style.MozUserSelect = "text"),
          (i.style.msUserSelect = "text"),
          (i.style.userSelect = "text"),
          i.addEventListener("copy", function (r) {
            if ((r.stopPropagation(), t.format))
              if ((r.preventDefault(), void 0 === r.clipboardData)) {
                n && console.warn("unable to use e.clipboardData"),
                  n && console.warn("trying IE specific stuff"),
                  window.clipboardData.clearData();
                var o = Lv[t.format] || Lv.default;
                window.clipboardData.setData(o, e);
              } else
                r.clipboardData.clearData(),
                  r.clipboardData.setData(t.format, e);
            t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
          }),
          document.body.appendChild(i),
          a.selectNodeContents(i),
          l.addRange(a),
          !document.execCommand("copy"))
        )
          throw new Error("copy command was unsuccessful");
        u = !0;
      } catch (o) {
        n && console.error("unable to copy using execCommand: ", o),
          n && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(t.format || "text", e),
            t.onCopy && t.onCopy(window.clipboardData),
            (u = !0);
        } catch (o) {
          n && console.error("unable to copy using clipboardData: ", o),
            n && console.error("falling back to prompt"),
            (r = (function (e) {
              var t =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
              return e.replace(/#{\s*key\s*}/g, t);
            })(
              "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
            )),
            window.prompt(r, e);
        }
      } finally {
        l &&
          ("function" == typeof l.removeRange
            ? l.removeRange(a)
            : l.removeAllRanges()),
          i && document.body.removeChild(i),
          o();
      }
      return u;
    },
    Fv = n(Iv);
  const $v = Object.prototype.constructor.toString();
  function Dv(e) {
    if (!e || "object" != typeof e) return !1;
    const t = Object.getPrototypeOf(e);
    if (null === t) return !0;
    const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return (
      n === Object ||
      ("function" == typeof n && Function.toString.call(n) === $v)
    );
  }
  function Vv(e) {
    return (
      !!e && (Dv(e) || Array.isArray(e) || e instanceof Map || e instanceof Set)
    );
  }
  function Uv(e) {
    return Array.isArray(e)
      ? Array.prototype.slice.call(e)
      : e instanceof Set
      ? new Set(e)
      : e instanceof Map
      ? new Map(e)
      : "object" == typeof e && null !== e
      ? Object.assign({}, e)
      : e;
  }
  function Bv(e, t, n) {
    let r =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : new Map();
    if ("object" != typeof e || null === e) {
      if (0 !== t.length) throw new Error("path is incorrect");
      return n;
    }
    if (Vv(e)) {
      let t = r.get(e);
      t || ((t = Uv(e)), r.set(e, t)), (e = t);
    }
    const [o, ...a] = t;
    if (void 0 !== o) {
      if ("__proto__" === o)
        throw new TypeError("Modification of prototype is not allowed");
      a.length > 0 ? (e[o] = Bv(e[o], a, n, r)) : (e[o] = n);
    }
    return e;
  }
  const Wv = (e, t, n) => {
    if (null === e || null === n) return !1;
    if ("object" != typeof e) return !1;
    if ("object" != typeof n) return !1;
    if (Object.is(e, n) && 0 !== t.length) return "";
    const r = [],
      o = [...t];
    let a = e;
    for (; a !== n || 0 !== o.length; ) {
      if ("object" != typeof a || null === a) return !1;
      if (Object.is(a, n))
        return r.reduce(
          (e, t, n) =>
            "number" == typeof t
              ? e + "[".concat(t, "]")
              : e + "".concat(0 === n ? "" : ".").concat(t),
          ""
        );
      const e = o.shift();
      r.push(e), (a = a[e]);
    }
    return !1;
  };
  function Hv(e) {
    return null === e
      ? 0
      : Array.isArray(e)
      ? e.length
      : e instanceof Map || e instanceof Set
      ? e.size
      : e instanceof Date
      ? 1
      : "object" == typeof e
      ? Object.keys(e).length
      : "string" == typeof e
      ? e.length
      : 1;
  }
  function Kv(e, t) {
    const n = [];
    let r = 0;
    for (; r < e.length; ) n.push(e.slice(r, r + t)), (r += t);
    return n;
  }
  function Qv(e, t) {
    const n = [];
    return JSON.stringify(
      e,
      function (e, t) {
        if ("bigint" == typeof t) return t.toString();
        if (t instanceof Map) {
          if ("toJSON" in t && "function" == typeof t.toJSON) return t.toJSON();
          if (0 === t.size) return {};
          if (n.includes(t)) return "[Circular]";
          n.push(t);
          const e = Array.from(t.entries());
          return e.every((e) => {
            let [t] = e;
            return "string" == typeof t || "number" == typeof t;
          })
            ? Object.fromEntries(e)
            : {};
        }
        if (t instanceof Set)
          return "toJSON" in t && "function" == typeof t.toJSON
            ? t.toJSON()
            : n.includes(t)
            ? "[Circular]"
            : (n.push(t), Array.from(t.values()));
        if ("object" == typeof t && null !== t && Object.keys(t).length) {
          const r = n.length;
          if (r) {
            for (let o = r - 1; o >= 0 && n[o][e] !== t; --o) n.pop();
            if (n.includes(t)) return "[Circular]";
          }
          n.push(t);
        }
        return t;
      },
      t
    );
  }
  async function qv(e) {
    if ("clipboard" in navigator)
      try {
        await navigator.clipboard.writeText(e);
      } catch {}
    Fv(e);
  }
  function Gv(e, t) {
    const n = Mv((e) => e.value);
    return U.useMemo(() => Wv(n, e, t), [e, t, n]);
  }
  const Xv = (e) =>
      J.jsx(Gg, {
        component: "div",
        ...e,
        sx: { display: "inline-block", ...e.sx },
      }),
    Yv = (e) => {
      let { dataType: t, enable: n = !0 } = e;
      return n
        ? J.jsx(Xv, {
            className: "data-type-label",
            sx: {
              mx: 0.5,
              fontSize: "0.7rem",
              opacity: 0.8,
              userSelect: "none",
            },
            children: t,
          })
        : null;
    };
  function Jv(e) {
    let {
      is: t,
      serialize: n,
      deserialize: r,
      type: o,
      colorKey: a,
      displayTypeLabel: l = !0,
      Renderer: i,
    } = e;
    const u = U.memo(i),
      s = (e) => {
        const t = Mv((e) => e.displayDataTypes),
          n = Mv((e) => e.colorspace[a]),
          r = Mv((e) => e.onSelect);
        return J.jsxs(Xv, {
          onClick: () => (null == r ? void 0 : r(e.path, e.value)),
          sx: { color: n },
          children: [
            l && t && J.jsx(Yv, { dataType: o }),
            J.jsx(Xv, {
              className: "".concat(o, "-value"),
              children: J.jsx(u, {
                path: e.path,
                inspect: e.inspect,
                setInspect: e.setInspect,
                value: e.value,
                prevValue: e.prevValue,
              }),
            }),
          ],
        });
      };
    if (((s.displayName = "easy-".concat(o, "-type")), !n || !r))
      return { is: t, Component: s };
    const c = (e) => {
      let { value: t, setValue: n, abortEditing: r, commitEditing: o } = e;
      const l = Mv((e) => e.colorspace[a]),
        i = U.useCallback(
          (e) => {
            "Enter" === e.key && (e.preventDefault(), o(t)),
              "Escape" === e.key && (e.preventDefault(), r());
          },
          [r, o, t]
        ),
        u = U.useCallback(
          (e) => {
            n(e.target.value);
          },
          [n]
        );
      return J.jsx(Kg, {
        autoFocus: !0,
        value: t,
        onChange: u,
        onKeyDown: i,
        size: "small",
        multiline: !0,
        sx: {
          color: l,
          padding: 0.5,
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: 1,
          fontSize: "0.8rem",
          fontFamily: "monospace",
          display: "inline-flex",
        },
      });
    };
    return (
      (c.displayName = "easy-".concat(o, "-type-editor")),
      { is: t, serialize: n, deserialize: r, Component: s, Editor: c }
    );
  }
  const Zv = Jv({
      is: (e) => "boolean" == typeof e,
      type: "bool",
      colorKey: "base0E",
      serialize: (e) => e.toString(),
      deserialize: (e) => {
        if ("true" === e) return !0;
        if ("false" === e) return !1;
        throw new Error("Invalid boolean value");
      },
      Renderer: (e) => {
        let { value: t } = e;
        return J.jsx(J.Fragment, { children: t ? "true" : "false" });
      },
    }),
    eb = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    },
    tb = Jv({
      is: (e) => e instanceof Date,
      type: "date",
      colorKey: "base0D",
      Renderer: (e) => {
        let { value: t } = e;
        return J.jsx(J.Fragment, {
          children: t.toLocaleTimeString("en-us", eb),
        });
      },
    }),
    nb = (e) => {
      const t = e.toString();
      let n = !0;
      const r = t.indexOf(")"),
        o = t.indexOf("=>");
      return (
        -1 !== o && o > r && (n = !1),
        n
          ? t.substring(t.indexOf("{", r) + 1, t.lastIndexOf("}"))
          : t.substring(t.indexOf("=>") + 2)
      );
    },
    rb = (e) => {
      const t = e.toString();
      return -1 !== t.indexOf("function")
        ? t.substring(8, t.indexOf("{")).trim()
        : t.substring(0, t.indexOf("=>") + 2).trim();
    },
    ob = {
      is: (e) => "function" == typeof e,
      Component: (e) => {
        const t = Mv((e) => e.colorspace.base05);
        return J.jsx(Xg, {
          children: J.jsx(Gg, {
            className: "data-function",
            sx: {
              display: e.inspect ? "block" : "inline-block",
              pl: e.inspect ? 2 : 0,
              color: t,
            },
            children: e.inspect
              ? nb(e.value)
              : J.jsx(Gg, {
                  component: "span",
                  className: "data-function-body",
                  onClick: () => e.setInspect(!0),
                  sx: { "&:hover": { cursor: "pointer" }, padding: 0.5 },
                  children: "…",
                }),
          }),
        });
      },
      PreComponent: (e) =>
        J.jsxs(Xg, {
          children: [
            J.jsx(Yv, { dataType: "function" }),
            J.jsxs(Gg, {
              component: "span",
              className: "data-function-start",
              sx: { letterSpacing: 0.5 },
              children: [rb(e.value), " ", "{"],
            }),
          ],
        }),
      PostComponent: () =>
        J.jsx(Xg, {
          children: J.jsx(Gg, {
            component: "span",
            className: "data-function-end",
            children: "}",
          }),
        }),
    },
    ab = Jv({
      is: (e) => null === e,
      type: "null",
      colorKey: "base08",
      displayTypeLabel: !1,
      Renderer: () => {
        const e = Mv((e) => e.colorspace.base02);
        return J.jsx(Gg, {
          sx: {
            fontSize: "0.8rem",
            backgroundColor: e,
            fontWeight: "bold",
            borderRadius: "3px",
            padding: "0.5px 2px",
          },
          children: "NULL",
        });
      },
    }),
    lb = (e) => e % 1 == 0,
    ib = Jv({
      is: (e) => "number" == typeof e && isNaN(e),
      type: "NaN",
      colorKey: "base08",
      displayTypeLabel: !1,
      serialize: () => "NaN",
      deserialize: (e) => parseFloat(e),
      Renderer: () => {
        const e = Mv((e) => e.colorspace.base02);
        return J.jsx(Gg, {
          sx: {
            backgroundColor: e,
            fontSize: "0.8rem",
            fontWeight: "bold",
            borderRadius: "3px",
            padding: "0.5px 2px",
          },
          children: "NaN",
        });
      },
    }),
    ub = Jv({
      is: (e) => "number" == typeof e && !lb(e) && !isNaN(e),
      type: "float",
      colorKey: "base0B",
      serialize: (e) => e.toString(),
      deserialize: (e) => parseFloat(e),
      Renderer: (e) => {
        let { value: t } = e;
        return J.jsx(J.Fragment, { children: t });
      },
    }),
    sb = Jv({
      is: (e) => "number" == typeof e && lb(e),
      type: "int",
      colorKey: "base0F",
      serialize: (e) => e.toString(),
      deserialize: (e) => parseFloat(e),
      Renderer: (e) => {
        let { value: t } = e;
        return J.jsx(J.Fragment, { children: t });
      },
    }),
    cb = Jv({
      is: (e) => "bigint" == typeof e,
      type: "bigint",
      colorKey: "base0F",
      serialize: (e) => e.toString(),
      deserialize: (e) => BigInt(e.replace(/\D/g, "")),
      Renderer: (e) => {
        let { value: t } = e;
        return J.jsx(J.Fragment, { children: "".concat(t, "n") });
      },
    }),
    fb = (e) => {
      let { d: t, ...n } = e;
      return J.jsx(zg, { ...n, children: J.jsx("path", { d: t }) });
    },
    db = (e) =>
      J.jsx(fb, {
        d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z",
        ...e,
      }),
    pb = (e) =>
      J.jsx(fb, {
        d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
        ...e,
      }),
    mb = (e) =>
      J.jsx(fb, { d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z", ...e }),
    hb = (e) =>
      J.jsx(fb, {
        d: "M 12 2 C 10.615 1.998 9.214625 2.2867656 7.890625 2.8847656 L 8.9003906 4.6328125 C 9.9043906 4.2098125 10.957 3.998 12 4 C 15.080783 4 17.738521 5.7633175 19.074219 8.3222656 L 17.125 9 L 21.25 11 L 22.875 7 L 20.998047 7.6523438 C 19.377701 4.3110398 15.95585 2 12 2 z M 6.5097656 4.4882812 L 2.2324219 5.0820312 L 3.734375 6.3808594 C 1.6515335 9.4550558 1.3615962 13.574578 3.3398438 17 C 4.0308437 18.201 4.9801562 19.268234 6.1601562 20.115234 L 7.1699219 18.367188 C 6.3019219 17.710187 5.5922656 16.904 5.0722656 16 C 3.5320014 13.332354 3.729203 10.148679 5.2773438 7.7128906 L 6.8398438 9.0625 L 6.5097656 4.4882812 z M 19.929688 13 C 19.794687 14.08 19.450734 15.098 18.927734 16 C 17.386985 18.668487 14.531361 20.090637 11.646484 19.966797 L 12.035156 17.9375 L 8.2402344 20.511719 L 10.892578 23.917969 L 11.265625 21.966797 C 14.968963 22.233766 18.681899 20.426323 20.660156 17 C 21.355156 15.801 21.805219 14.445 21.949219 13 L 19.929688 13 z",
        ...e,
      }),
    yb = (e) =>
      J.jsx(fb, {
        d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        ...e,
      }),
    gb = (e) =>
      J.jsx(fb, {
        d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",
        ...e,
      }),
    vb = (e) =>
      J.jsx(fb, {
        d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
        ...e,
      }),
    bb = (e) =>
      J.jsx(fb, { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z", ...e }),
    xb = (e) =>
      J.jsx(fb, {
        d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z",
        ...e,
      });
  function kb(e) {
    const t = Hv(e);
    let n = "";
    return (
      (e instanceof Map || e instanceof Set) && (n = e[Symbol.toStringTag]),
      Object.prototype.hasOwnProperty.call(e, Symbol.toStringTag) &&
        (n = e[Symbol.toStringTag]),
      "".concat(t, " Items").concat(n ? " (".concat(n, ")") : "")
    );
  }
  const wb = {
      is: (e) => "object" == typeof e,
      Component: (e) => {
        const t = Rv(),
          n = Mv((e) => e.colorspace.base02),
          r = Mv((e) => e.groupArraysAfterLength),
          o = Gv(e.path, e.value),
          [a, l] = U.useState(Mv((e) => e.maxDisplayLength)),
          i = Mv((e) => e.objectSortKeys),
          u = U.useMemo(() => {
            if (!e.inspect) return null;
            const n = e.value,
              o = (function (e) {
                return (
                  "function" == typeof (null == e ? void 0 : e[Symbol.iterator])
                );
              })(n);
            if (o && !Array.isArray(n)) {
              const t = [];
              if (n instanceof Map) {
                const r = n.size - 1;
                let o = 0;
                n.forEach((n, a) => {
                  const l = a.toString(),
                    i = [...e.path, l];
                  t.push(
                    J.jsx(
                      Nb,
                      {
                        path: i,
                        value: n,
                        prevValue:
                          e.prevValue instanceof Map
                            ? e.prevValue.get(a)
                            : void 0,
                        editable: !1,
                        last: o === r,
                      },
                      l
                    )
                  ),
                    o++;
                });
              } else {
                const r = n[Symbol.iterator]();
                let o = r.next(),
                  a = 0;
                for (;;) {
                  const n = r.next();
                  var u;
                  if (
                    (t.push(
                      J.jsx(
                        Nb,
                        {
                          path: [...e.path, "iterator:".concat(a)],
                          value: o.value,
                          nestedIndex: a,
                          editable: !1,
                          last: null !== (u = n.done) && void 0 !== u && u,
                        },
                        a
                      )
                    ),
                    n.done)
                  )
                    break;
                  a++, (o = n);
                }
              }
              return t;
            }
            if (Array.isArray(n)) {
              const o = n.length - 1;
              if (n.length <= r) {
                const i = n.slice(0, a).map((t, n) => {
                  const a = e.nestedIndex ? e.nestedIndex * r + n : n,
                    l = [...e.path, a];
                  return J.jsx(
                    Nb,
                    {
                      path: l,
                      value: t,
                      prevValue: Array.isArray(e.prevValue)
                        ? e.prevValue[a]
                        : void 0,
                      last: n === o,
                    },
                    a
                  );
                });
                if (n.length > a) {
                  const e = n.length - a;
                  i.push(
                    J.jsxs(
                      Xv,
                      {
                        sx: {
                          cursor: "pointer",
                          lineHeight: 1.5,
                          color: t,
                          letterSpacing: 0.5,
                          opacity: 0.8,
                          userSelect: "none",
                        },
                        onClick: () => l((e) => 2 * e),
                        children: ["hidden ", e, " items…"],
                      },
                      "last"
                    )
                  );
                }
                return i;
              }
              const i = Kv(n, r),
                u = Array.isArray(e.prevValue) ? Kv(e.prevValue, r) : void 0,
                s = i.length - 1;
              return i.map((t, n) =>
                J.jsx(
                  Nb,
                  {
                    path: e.path,
                    value: t,
                    nestedIndex: n,
                    prevValue: null == u ? void 0 : u[n],
                    last: n === s,
                  },
                  n
                )
              );
            }
            let s = Object.entries(n);
            i &&
              (s =
                !0 === i
                  ? s.sort((e, t) => {
                      let [n] = e,
                        [r] = t;
                      return n.localeCompare(r);
                    })
                  : s.sort((e, t) => {
                      let [n] = e,
                        [r] = t;
                      return i(n, r);
                    }));
            const c = s.length - 1,
              f = s.slice(0, a).map((t, n) => {
                let [r, o] = t;
                var a;
                const l = [...e.path, r];
                return J.jsx(
                  Nb,
                  {
                    path: l,
                    value: o,
                    prevValue:
                      null === (a = e.prevValue) || void 0 === a
                        ? void 0
                        : a[r],
                    last: n === c,
                  },
                  r
                );
              });
            if (s.length > a) {
              const e = s.length - a;
              f.push(
                J.jsxs(
                  Xv,
                  {
                    sx: {
                      cursor: "pointer",
                      lineHeight: 1.5,
                      color: t,
                      letterSpacing: 0.5,
                      opacity: 0.8,
                      userSelect: "none",
                    },
                    onClick: () => l((e) => 2 * e),
                    children: ["hidden ", e, " items…"],
                  },
                  "last"
                )
              );
            }
            return f;
          }, [
            e.inspect,
            e.value,
            e.prevValue,
            e.path,
            e.nestedIndex,
            r,
            a,
            t,
            i,
          ]),
          s = e.inspect ? 0.6 : 0,
          c = Mv((e) => e.indentWidth),
          f = e.inspect ? c - s : c;
        return U.useMemo(() => 0 === Hv(e.value), [e.value])
          ? null
          : J.jsx(Gg, {
              className: "data-object",
              sx: {
                display: e.inspect ? "block" : "inline-block",
                pl: e.inspect ? f - 0.6 : 0,
                marginLeft: s,
                color: t,
                borderLeft: e.inspect ? "1px solid ".concat(n) : "none",
              },
              children: e.inspect
                ? u
                : !o &&
                  J.jsx(Gg, {
                    component: "span",
                    className: "data-object-body",
                    onClick: () => e.setInspect(!0),
                    sx: {
                      "&:hover": { cursor: "pointer" },
                      padding: 0.5,
                      userSelect: "none",
                    },
                    children: "…",
                  }),
            });
      },
      PreComponent: (e) => {
        const t = Mv((e) => e.colorspace.base04),
          n = Rv(),
          r = U.useMemo(
            () => Array.isArray(e.value) || e.value instanceof Set,
            [e.value]
          ),
          o = U.useMemo(() => 0 === Hv(e.value), [e.value]),
          a = U.useMemo(() => kb(e.value), [e.value]),
          l = Mv((e) => e.displaySize),
          i = U.useMemo(
            () => ("function" == typeof l ? l(e.path, e.value) : l),
            [l, e.path, e.value]
          ),
          u = Gv(e.path, e.value);
        return J.jsxs(Gg, {
          component: "span",
          className: "data-object-start",
          sx: { letterSpacing: 0.5 },
          children: [
            r ? "[" : "{",
            i &&
              e.inspect &&
              !o &&
              J.jsx(Gg, {
                component: "span",
                sx: {
                  pl: 0.5,
                  fontStyle: "italic",
                  color: t,
                  userSelect: "none",
                },
                children: a,
              }),
            u &&
              !e.inspect &&
              J.jsxs(J.Fragment, {
                children: [
                  J.jsx(hb, { sx: { fontSize: 12, color: n, mx: 0.5 } }),
                  J.jsx(Xv, {
                    sx: { cursor: "pointer", userSelect: "none" },
                    children: u,
                  }),
                ],
              }),
          ],
        });
      },
      PostComponent: (e) => {
        const t = Mv((e) => e.colorspace.base04),
          n = Rv(),
          r = U.useMemo(
            () => Array.isArray(e.value) || e.value instanceof Set,
            [e.value]
          ),
          o = U.useMemo(() => 0 === Hv(e.value), [e.value]),
          a = U.useMemo(() => kb(e.value), [e.value]),
          l = Mv((e) => e.displaySize),
          i = U.useMemo(
            () => ("function" == typeof l ? l(e.path, e.value) : l),
            [l, e.path, e.value]
          );
        return J.jsxs(Gg, {
          component: "span",
          className: "data-object-end",
          sx: { lineHeight: 1.5, color: n, letterSpacing: 0.5, opacity: 0.8 },
          children: [
            r ? "]" : "}",
            !i || (!o && e.inspect)
              ? null
              : J.jsx(Gg, {
                  component: "span",
                  sx: {
                    pl: 0.5,
                    fontStyle: "italic",
                    color: t,
                    userSelect: "none",
                  },
                  children: a,
                }),
          ],
        });
      },
    },
    Sb = Jv({
      is: (e) => "string" == typeof e,
      type: "string",
      colorKey: "base09",
      serialize: (e) => e,
      deserialize: (e) => e,
      Renderer: (e) => {
        const [t, n] = U.useState(!1),
          r = Mv((e) => e.collapseStringsAfterLength),
          o = t ? e.value : e.value.slice(0, r),
          a = e.value.length > r;
        return J.jsxs(Gg, {
          component: "span",
          sx: { overflowWrap: "anywhere", cursor: a ? "pointer" : "inherit" },
          onClick: () => {
            var e;
            "Range" !==
              (null === (e = window.getSelection()) || void 0 === e
                ? void 0
                : e.type) &&
              a &&
              n((e) => !e);
          },
          children: [
            '"',
            o,
            a &&
              !t &&
              J.jsx(Gg, {
                component: "span",
                sx: { padding: 0.5 },
                children: "…",
              }),
            '"',
          ],
        });
      },
    }),
    Cb = Jv({
      is: (e) => void 0 === e,
      type: "undefined",
      colorKey: "base05",
      displayTypeLabel: !1,
      Renderer: () => {
        const e = Mv((e) => e.colorspace.base02);
        return J.jsx(Gg, {
          sx: {
            fontSize: "0.7rem",
            backgroundColor: e,
            borderRadius: "3px",
            padding: "0.5px 2px",
          },
          children: "undefined",
        });
      },
    });
  var Eb = Object.freeze({
    __proto__: null,
    bigIntType: cb,
    booleanType: Zv,
    dateType: tb,
    defineEasyType: Jv,
    floatType: ub,
    functionType: ob,
    intType: sb,
    nanType: ib,
    nullType: ab,
    objectType: wb,
    stringType: Sb,
    undefinedType: Cb,
  });
  function _b(e) {
    function t(e, t) {
      var n, r;
      return (
        Object.is(e.value, t.value) &&
        e.inspect &&
        t.inspect &&
        (null === (n = e.path) || void 0 === n ? void 0 : n.join(".")) ===
          (null === (r = t.path) || void 0 === r ? void 0 : r.join("."))
      );
    }
    return (
      (e.Component = U.memo(e.Component, t)),
      e.Editor &&
        (e.Editor = U.memo(e.Editor, function (e, t) {
          return Object.is(e.value, t.value);
        })),
      e.PreComponent && (e.PreComponent = U.memo(e.PreComponent, t)),
      e.PostComponent && (e.PostComponent = U.memo(e.PostComponent, t)),
      e
    );
  }
  const Pb = [
      _b(Zv),
      _b(tb),
      _b(ab),
      _b(Cb),
      _b(Sb),
      _b(ob),
      _b(ib),
      _b(sb),
      _b(ub),
      _b(cb),
    ],
    zb = U.createContext(void 0);
  zb.Provider;
  const Tb = (e, t) => Ev(U.useContext(zb), e, t);
  function Ob(e, t) {
    const n = Tb((e) => e.registry);
    return U.useMemo(
      () =>
        (function (e, t, n) {
          let r;
          for (const o of n) o.is(e, t) && (r = o);
          if (void 0 === r) {
            if ("object" == typeof e) return wb;
            throw new Error("No type matched for value: ".concat(e));
          }
          return r;
        })(e, t, n),
      [e, t, n]
    );
  }
  const jb = (e) =>
      J.jsx(Gg, {
        component: "span",
        ...e,
        sx: { cursor: "pointer", paddingLeft: "0.7rem", ...e.sx },
      }),
    Nb = (e) => {
      const { value: t, prevValue: n, path: r, nestedIndex: o, last: a } = e,
        {
          Component: l,
          PreComponent: i,
          PostComponent: u,
          Editor: s,
          serialize: c,
          deserialize: f,
        } = Ob(t, r);
      var d;
      const p = null !== (d = e.editable) && void 0 !== d ? d : void 0,
        m = Mv((e) => e.editable),
        h = U.useMemo(
          () =>
            !1 !== m && !1 !== p && ("function" == typeof m ? !!m(r, t) : m),
          [r, p, m, t]
        ),
        [y, g] = U.useState(""),
        v = r.length,
        b = r[v - 1],
        x = Mv((e) => e.hoverPath),
        k = U.useMemo(
          () => x && r.every((e, t) => e === x.path[t] && o === x.nestedIndex),
          [x, r, o]
        ),
        w = Mv((e) => e.setHover),
        S = Mv((e) => e.value),
        [C, E] = (function (e, t, n) {
          const r = e.length,
            o = Gv(e, t),
            a = Mv((e) => e.getInspectCache),
            l = Mv((e) => e.setInspectCache),
            i = Mv((e) => e.defaultInspectDepth),
            u = Mv((e) => e.defaultInspectControl);
          U.useEffect(() => {
            if (void 0 !== a(e, n)) return;
            if (void 0 !== n) return void l(e, !1, n);
            const s = !o && ("function" == typeof u ? u(e, t) : r < i);
            l(e, s);
          }, [i, u, r, a, o, n, e, t, l]);
          const [s, c] = U.useState(() => {
            const l = a(e, n);
            return void 0 !== l
              ? l
              : void 0 === n &&
                  !o &&
                  ("function" == typeof u ? u(e, t) : r < i);
          });
          return [
            s,
            U.useCallback(
              (t) => {
                c((r) => {
                  const o = "boolean" == typeof t ? t : t(r);
                  return l(e, o, n), o;
                });
              },
              [n, e, l]
            ),
          ];
        })(r, t, o),
        [_, P] = U.useState(!1),
        z = Mv((e) => e.onChange),
        T = Rv(),
        O = Mv((e) => e.colorspace.base0C),
        j = Mv((e) => e.colorspace.base0A),
        N = Mv((e) => e.displayComma),
        M = Mv((e) => e.quotesOnKeys),
        R = Mv((e) => e.rootName),
        A = S === t,
        L = Number.isInteger(Number(b)),
        I = Mv((e) => e.enableAdd),
        F = Mv((e) => e.onAdd),
        $ = U.useMemo(
          () =>
            !(!F || void 0 !== o) &&
            !1 !== I &&
            !1 !== p &&
            ("function" == typeof I
              ? !!I(r, t)
              : !(!Array.isArray(t) && !Dv(t))),
          [F, o, r, I, p, t]
        ),
        D = Mv((e) => e.enableDelete),
        V = Mv((e) => e.onDelete),
        B = U.useMemo(
          () =>
            !(!V || void 0 !== o) &&
            !A &&
            !1 !== D &&
            !1 !== p &&
            ("function" == typeof D ? !!D(r, t) : D),
          [V, o, A, r, D, p, t]
        ),
        W = Mv((e) => e.enableClipboard),
        { copy: H, copied: K } = (function () {
          let { timeout: e = 2e3 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const [t, n] = U.useState(!1),
            r = U.useRef(null),
            o = U.useCallback(
              (t) => {
                const o = r.current;
                o && window.clearTimeout(o),
                  (r.current = window.setTimeout(() => n(!1), e)),
                  n(t);
              },
              [e]
            ),
            a = Mv((e) => e.onCopy);
          return {
            copy: U.useCallback(
              async (e, t) => {
                if ("function" == typeof a)
                  try {
                    await a(e, t, qv), o(!0);
                  } catch (t) {
                    console.error(
                      "error when copy ".concat(
                        0 === e.length ? "src" : "src[".concat(e.join(".")),
                        "]"
                      ),
                      t
                    );
                  }
                else
                  try {
                    const e = Qv(
                      "function" == typeof t ? t.toString() : t,
                      "  "
                    );
                    await qv(e), o(!0);
                  } catch (t) {
                    console.error(
                      "error when copy ".concat(
                        0 === e.length ? "src" : "src[".concat(e.join(".")),
                        "]"
                      ),
                      t
                    );
                  }
              },
              [o, a]
            ),
            reset: U.useCallback(() => {
              n(!1), r.current && clearTimeout(r.current);
            }, []),
            copied: t,
          };
        })(),
        Q = Mv((e) => e.highlightUpdates),
        q = U.useMemo(
          () =>
            !(!Q || void 0 === n) &&
            (typeof t != typeof n ||
              ("number" == typeof t
                ? (!isNaN(t) || !isNaN(n)) && t !== n
                : Array.isArray(t) !== Array.isArray(n) ||
                  ("object" != typeof t && "function" != typeof t && t !== n))),
          [Q, n, t]
        ),
        G = U.useRef();
      U.useEffect(() => {
        G.current &&
          q &&
          "animate" in G.current &&
          G.current.animate([{ backgroundColor: j }, { backgroundColor: "" }], {
            duration: 1e3,
            easing: "ease-in",
          });
      }, [j, q, n, t]);
      const X = U.useCallback(
          (e) => {
            e.preventDefault(), c && g(c(t)), P(!0);
          },
          [c, t]
        ),
        Y = U.useCallback(() => {
          P(!1), g("");
        }, [P, g]),
        Z = U.useCallback(
          (e) => {
            if ((P(!1), f))
              try {
                z(r, t, f(e));
              } catch (e) {}
          },
          [P, f, z, r, t]
        ),
        ee = U.useMemo(
          () =>
            _
              ? J.jsxs(J.Fragment, {
                  children: [
                    J.jsx(jb, {
                      children: J.jsx(yb, {
                        sx: { fontSize: ".8rem" },
                        onClick: Y,
                      }),
                    }),
                    J.jsx(jb, {
                      children: J.jsx(pb, {
                        sx: { fontSize: ".8rem" },
                        onClick: () => Z(y),
                      }),
                    }),
                  ],
                })
              : J.jsxs(J.Fragment, {
                  children: [
                    W &&
                      J.jsx(jb, {
                        onClick: (e) => {
                          e.preventDefault();
                          try {
                            H(r, t, qv);
                          } catch (e) {
                            console.error(e);
                          }
                        },
                        children: K
                          ? J.jsx(pb, { sx: { fontSize: ".8rem" } })
                          : J.jsx(gb, { sx: { fontSize: ".8rem" } }),
                      }),
                    s &&
                      h &&
                      c &&
                      f &&
                      J.jsx(jb, {
                        onClick: X,
                        children: J.jsx(vb, { sx: { fontSize: ".8rem" } }),
                      }),
                    $ &&
                      J.jsx(jb, {
                        onClick: (e) => {
                          e.preventDefault(), null == F || F(r);
                        },
                        children: J.jsx(db, { sx: { fontSize: ".8rem" } }),
                      }),
                    B &&
                      J.jsx(jb, {
                        onClick: (e) => {
                          e.preventDefault(), null == V || V(r, t);
                        },
                        children: J.jsx(xb, { sx: { fontSize: ".9rem" } }),
                      }),
                  ],
                }),
          [s, c, f, K, H, h, _, W, $, B, y, r, t, F, V, X, Y, Z]
        ),
        te = U.useMemo(() => 0 === Hv(t), [t]),
        ne = !te && !(!i || !u),
        re = Mv((e) => e.keyRenderer),
        oe = U.useMemo(
          () => ({
            path: r,
            inspect: C,
            setInspect: E,
            value: t,
            prevValue: n,
            nestedIndex: o,
          }),
          [C, r, E, t, n, o]
        );
      return J.jsxs(Gg, {
        className: "data-key-pair",
        "data-testid": "data-key-pair" + r.join("."),
        sx: { userSelect: "text" },
        onMouseEnter: U.useCallback(() => w(r, o), [w, r, o]),
        children: [
          J.jsxs(Xv, {
            component: "span",
            className: "data-key",
            sx: { lineHeight: 1.5, color: T, letterSpacing: 0.5, opacity: 0.8 },
            onClick: U.useCallback(
              (e) => {
                e.isDefaultPrevented() || te || E((e) => !e);
              },
              [te, E]
            ),
            children: [
              ne
                ? C
                  ? J.jsx(bb, {
                      className: "data-key-toggle-expanded",
                      sx: {
                        fontSize: ".8rem",
                        "&:hover": { cursor: "pointer" },
                      },
                    })
                  : J.jsx(mb, {
                      className: "data-key-toggle-collapsed",
                      sx: {
                        fontSize: ".8rem",
                        "&:hover": { cursor: "pointer" },
                      },
                    })
                : null,
              J.jsx(Gg, {
                ref: G,
                className: "data-key-key",
                component: "span",
                children:
                  A && 0 === v
                    ? !1 !== R
                      ? M
                        ? J.jsxs(J.Fragment, { children: ['"', R, '"'] })
                        : J.jsx(J.Fragment, { children: R })
                      : null
                    : re.when(oe)
                    ? J.jsx(re, { ...oe })
                    : void 0 === o &&
                      (L
                        ? J.jsx(Gg, {
                            component: "span",
                            style: {
                              color: O,
                              userSelect: L ? "none" : "auto",
                            },
                            children: b,
                          })
                        : M
                        ? J.jsxs(J.Fragment, { children: ['"', b, '"'] })
                        : J.jsx(J.Fragment, { children: b })),
              }),
              A
                ? !1 !== R &&
                  J.jsx(Xv, {
                    className: "data-key-colon",
                    sx: { mr: 0.5 },
                    children: ":",
                  })
                : void 0 === o &&
                  J.jsx(Xv, {
                    className: "data-key-colon",
                    sx: {
                      mr: 0.5,
                      ".data-key-key:empty + &": { display: "none" },
                      userSelect: L ? "none" : "auto",
                    },
                    children: ":",
                  }),
              i && J.jsx(i, { ...oe }),
              k && ne && C && ee,
            ],
          }),
          _ && h
            ? s &&
              J.jsx(s, {
                path: r,
                value: y,
                setValue: g,
                abortEditing: Y,
                commitEditing: Z,
              })
            : l
            ? J.jsx(l, { ...oe })
            : J.jsx(Gg, {
                component: "span",
                className: "data-value-fallback",
                children: "fallback: ".concat(t),
              }),
          u && J.jsx(u, { ...oe }),
          !a && N && J.jsx(Xv, { children: "," }),
          k && ne && !C && ee,
          k && !ne && ee,
          !k && _ && ee,
        ],
      });
    },
    Mb = "(prefers-color-scheme: dark)";
  function Rb(e, t) {
    const { setState: n } = U.useContext(Nv);
    U.useEffect(() => {
      void 0 !== t && n({ [e]: t });
    }, [e, t, n]);
  }
  const Ab = (e) => {
      const { setState: t } = U.useContext(Nv);
      U.useEffect(() => {
        t((t) => ({ prevValue: t.value, value: e.value }));
      }, [e.value, t]),
        Rb("rootName", e.rootName),
        Rb("indentWidth", e.indentWidth),
        Rb("keyRenderer", e.keyRenderer),
        Rb("enableAdd", e.enableAdd),
        Rb("enableDelete", e.enableDelete),
        Rb("enableClipboard", e.enableClipboard),
        Rb("editable", e.editable),
        Rb("onChange", e.onChange),
        Rb("onCopy", e.onCopy),
        Rb("onSelect", e.onSelect),
        Rb("onAdd", e.onAdd),
        Rb("onDelete", e.onDelete),
        Rb("maxDisplayLength", e.maxDisplayLength),
        Rb("groupArraysAfterLength", e.groupArraysAfterLength),
        Rb("quotesOnKeys", e.quotesOnKeys),
        Rb("displayDataTypes", e.displayDataTypes),
        Rb("displaySize", e.displaySize),
        Rb("displayComma", e.displayComma),
        Rb("highlightUpdates", e.highlightUpdates),
        U.useEffect(() => {
          "light" === e.theme
            ? t({ colorspace: Pv })
            : "dark" === e.theme
            ? t({ colorspace: zv })
            : "object" == typeof e.theme && t({ colorspace: e.theme });
        }, [t, e.theme]);
      const n = U.useMemo(
          () =>
            "object" == typeof e.theme
              ? "json-viewer-theme-custom"
              : "dark" === e.theme
              ? "json-viewer-theme-dark"
              : "json-viewer-theme-light",
          [e.theme]
        ),
        r = U.useRef(!0),
        o = Tb((e) => e.registerTypes);
      if (r.current) {
        const t = e.valueTypes ? [...Pb, ...e.valueTypes] : [...Pb];
        o(t), (r.current = !1);
      }
      U.useEffect(() => {
        const t = e.valueTypes ? [...Pb, ...e.valueTypes] : [...Pb];
        o(t);
      }, [e.valueTypes, o]);
      const a = Mv((e) => e.value),
        l = Mv((e) => e.prevValue),
        i = U.useMemo(() => [], []),
        u = Mv((e) => e.setHover),
        s = U.useCallback(() => u(null), [u]);
      return J.jsx(Ng, {
        elevation: 0,
        className: lh(n, e.className),
        style: e.style,
        sx: {
          fontFamily: "monospace",
          userSelect: "none",
          contentVisibility: "auto",
          ...e.sx,
        },
        onMouseLeave: s,
        children: J.jsx(Nb, { value: a, prevValue: l, path: i, last: !0 }),
      });
    },
    Lb = function (e) {
      const t = (function () {
          const [e, t] = U.useState(!1);
          return (
            U.useEffect(() => {
              const e = (e) => t(e.matches);
              t(window.matchMedia(Mb).matches);
              const n = window.matchMedia(Mb);
              return (
                n.addEventListener("change", e),
                () => n.removeEventListener("change", e)
              );
            }, []),
            e
          );
        })(),
        n = U.useMemo(() => {
          var n;
          return "auto" === e.theme
            ? t
              ? "dark"
              : "light"
            : null !== (n = e.theme) && void 0 !== n
            ? n
            : "light";
        }, [t, e.theme]),
        r = U.useMemo(() => {
          const e =
            "object" == typeof n
              ? n.base00
              : "dark" === n
              ? zv.base00
              : Pv.base00;
          return By({
            components: {
              MuiPaper: {
                styleOverrides: {
                  root: {
                    backgroundColor: e,
                    color:
                      "object" == typeof n
                        ? n.base07
                        : "dark" === n
                        ? zv.base07
                        : Pv.base07,
                  },
                },
              },
            },
            palette: {
              mode: "dark" === n ? "dark" : "light",
              background: { default: e },
            },
          });
        }, [n]),
        o = { ...e, theme: n },
        a = U.useMemo(() => jv(e), []),
        l = U.useMemo(
          () =>
            Jg()((e) => ({
              registry: Pb,
              registerTypes: (t) => {
                e((e) => ({
                  registry: "function" == typeof t ? t(e.registry) : t,
                }));
              },
            })),
          []
        );
      return J.jsx(wg, {
        theme: r,
        children: J.jsx(zb.Provider, {
          value: l,
          children: J.jsx(Nv.Provider, {
            value: a,
            children: J.jsx(Ab, { ...o }),
          }),
        }),
      });
    };
  class Ib {
    render(e) {
      const t = ((e) =>
        e
          ? "string" == typeof e
            ? document.querySelector(e)
            : e
          : document.getElementById("json-viewer"))(e);
      t &&
        ((this.root = af(t)), this.root.render(J.jsx(Lb, { ...this.props })));
    }
    destroy() {
      this.root && this.root.unmount();
    }
    constructor(e) {
      t(this, "props", void 0), t(this, "root", void 0), (this.props = e);
    }
  }
  return (
    t(Ib, "Component", Lb),
    t(Ib, "DataTypes", Eb),
    t(Ib, "Themes", Tv),
    t(Ib, "Utils", {
      applyValue: function (e, t, n) {
        return Bv(e, t, n);
      },
      defineDataType: function (e) {
        let {
          is: t,
          serialize: n,
          deserialize: r,
          Component: o,
          Editor: a,
          PreComponent: l,
          PostComponent: i,
        } = e;
        return {
          is: t,
          serialize: n,
          deserialize: r,
          Component: o,
          Editor: a,
          PreComponent: l,
          PostComponent: i,
        };
      },
      deleteValue: function e(t, n, r) {
        if ("object" != typeof t || null === t) {
          if (0 !== n.length) throw new Error("path is incorrect");
          return r;
        }
        Vv(t) && (t = Uv(t));
        const [o, ...a] = n;
        if (void 0 !== o) {
          if ("__proto__" === o)
            throw new TypeError("Modification of prototype is not allowed");
          a.length > 0
            ? (t[o] = e(t[o], a, r))
            : Array.isArray(t)
            ? t.splice(Number(o), 1)
            : delete t[o];
        }
        return t;
      },
      isCycleReference: Wv,
      safeStringify: Qv,
    }),
    Ib
  );
});
//# sourceMappingURL=/sm/275faa3a6138333eec611b4cac79945534713660c36c468bef5d8c5ffce626ab.map
