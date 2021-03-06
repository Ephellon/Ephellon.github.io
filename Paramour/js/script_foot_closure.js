try {
  (function() {
    var h, aa = aa || {}, m = this, p = function(a) {
      return void 0 !== a
    }, r = function(a) {
      return "string" == typeof a
    }, u = function(a) {
      return "number" == typeof a
    }, x = function(a, b) {
      a = a.split(".");
      b = b || m;
      for (var c = 0; c < a.length; c++)
        if (b = b[a[c]],
        null == b)
          return null;
      return b
    }, ba = function() {}, da = function(a) {
      a.Vf = void 0;
      a.Pa = function() {
        return a.Vf ? a.Vf : a.Vf = new a
      }
    }, ea = function(a) {
      var b = typeof a;
      if ("object" == b)
        if (a) {
          if (a instanceof Array)
            return "array";
          if (a instanceof Object)
            return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c)
            return "object";
          if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
            return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
            return "function"
        } else
          return "null";
      else if ("function" == b && "undefined" == typeof a.call)
        return "object";
      return b
    }, y = function(a) {
      return "array" == ea(a)
    }, fa = function(a) {
      var b = ea(a);
      return "array" == b || "object" == b && "number" == typeof a.length
    }, ha = function(a) {
      return "function" == ea(a)
    }, ia = function(a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    }, ma = function(a) {
      return a[ka] || (a[ka] = ++la)
    }, ka = "closure_uid_" + (1E9 * Math.random() >>> 0), la = 0, na = function(a, b, c) {
      return a.call.apply(a.bind, arguments)
    }, oa = function(a, b, c) {
      if (!a)
        throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c)
        }
      }
      return function() {
        return a.apply(b, arguments)
      }
    }, z = function(a, b, c) {
      z = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
      return z.apply(null, arguments)
    }, pa = function(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
      }
    }, qa = Date.now || function() {
      return +new Date
    }
    , A = function(a, b) {
      a = a.split(".");
      var c = m;
      a[0]in c || !c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        !a.length && p(b) ? c[d] = b : c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {}
    }, B = function(a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.o = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.qn = function(a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
          d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d)
      }
    };
    var ra, sa = {
      fl: "activedescendant",
      nl: "atomic",
      ol: "autocomplete",
      rl: "busy",
      vl: "checked",
      wl: "colindex",
      Bl: "controls",
      Dl: "describedby",
      Gl: "disabled",
      Il: "dropeffect",
      Jl: "expanded",
      Kl: "flowto",
      Ml: "grabbed",
      Ql: "haspopup",
      Sl: "hidden",
      Ul: "invalid",
      Vl: "label",
      Wl: "labelledby",
      Xl: "level",
      bm: "live",
      nm: "multiline",
      om: "multiselectable",
      um: "orientation",
      vm: "owns",
      xm: "posinset",
      zm: "pressed",
      Em: "readonly",
      Hm: "relevant",
      Im: "required",
      Mm: "rowindex",
      Pm: "selected",
      Rm: "setsize",
      Tm: "sort",
      jn: "valuemax",
      ln: "valuemin",
      mn: "valuenow",
      nn: "valuetext"
    };
    var ta = function(a, b, c) {
      for (var d in a)
        b.call(c, a[d], d, a)
    }
      , ua = function(a, b) {
      for (var c in a)
        if (b.call(void 0, a[c], c, a))
          return !0;
      return !1
    }
      , va = function(a) {
      var b = [], c = 0, d;
      for (d in a)
        b[c++] = a[d];
      return b
    }
      , wa = function(a) {
      var b = [], c = 0, d;
      for (d in a)
        b[c++] = d;
      return b
    }
      , xa = function(a, b) {
      for (var c in a)
        if (a[c] == b)
          return !0;
      return !1
    }
      , za = function() {
      var a = ya, b;
      for (b in a)
        return !1;
      return !0
    }
      , Aa = function(a, b, c) {
      if (null !== a && b in a)
        throw Error('The object already contains the key "' + b + '"');
      a[b] = c
    }
      , Ba = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
      , Ca = function(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
          a[c] = d[c];
        for (var f = 0; f < Ba.length; f++)
          c = Ba[f],
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
      }
    }
      , Da = function(a) {
      var b = arguments.length;
      if (1 == b && y(arguments[0]))
        return Da.apply(null, arguments[0]);
      for (var c = {}, d = 0; d < b; d++)
        c[arguments[d]] = !0;
      return c
    };
    var Ea = {
      il: "alert",
      jl: "alertdialog",
      kl: "application",
      ll: "article",
      ql: "banner",
      tl: "button",
      ul: "checkbox",
      xl: "columnheader",
      yl: "combobox",
      zl: "complementary",
      Al: "contentinfo",
      Cl: "definition",
      El: "dialog",
      Fl: "directory",
      Hl: "document",
      Ll: "form",
      Nl: "grid",
      Ol: "gridcell",
      Pl: "group",
      Rl: "heading",
      Tl: "img",
      Yl: "link",
      Zl: "list",
      $l: "listbox",
      am: "listitem",
      cm: "log",
      dm: "main",
      em: "marquee",
      fm: "math",
      im: "menu",
      jm: "menubar",
      km: "menuitem",
      lm: "menuitemcheckbox",
      mm: "menuitemradio",
      rm: "navigation",
      sm: "note",
      tm: "option",
      ym: "presentation",
      Bm: "progressbar",
      Cm: "radio",
      Dm: "radiogroup",
      Gm: "region",
      Jm: "row",
      Km: "rowgroup",
      Lm: "rowheader",
      Nm: "scrollbar",
      Om: "search",
      Qm: "separator",
      Sm: "slider",
      Um: "spinbutton",
      Vm: "status",
      Wm: "tab",
      Xm: "tablist",
      Ym: "tabpanel",
      Zm: "textbox",
      $m: "textinfo",
      an: "timer",
      bn: "toolbar",
      cn: "tooltip",
      en: "tree",
      gn: "treegrid",
      hn: "treeitem"
    };
    var Fa = function(a) {
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, Fa);
      else {
        var b = Error().stack;
        b && (this.stack = b)
      }
      a && (this.message = String(a))
    };
    B(Fa, Error);
    Fa.prototype.name = "CustomError";
    var Ga;
    var Ha = function(a, b) {
      return 0 == a.lastIndexOf(b, 0)
    }
      , Ia = function(a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c
    }
      , Ja = function(a, b) {
      for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
        d += c.shift() + e.shift();
      return d + c.join("%s")
    }
      , Ka = function(a) {
      return /^[\s\xa0]*$/.test(a)
    }
      , La = String.prototype.trim ? function(a) {
      return a.trim()
    }
    : function(a) {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
      , Va = function(a) {
      if (!Ma.test(a))
        return a;
      -1 != a.indexOf("&") && (a = a.replace(Na, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace(Oa, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace(Pa, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(Sa, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(Ta, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(Ua, "&#0;"));
      return a
    }
      , Na = /&/g
      , Oa = /</g
      , Pa = />/g
      , Sa = /"/g
      , Ta = /'/g
      , Ua = /\x00/g
      , Ma = /[\x00&<>"']/
      , Ya = function(a) {
      return -1 != a.indexOf("&") ? "document"in m ? Wa(a) : Xa(a) : a
    }
      , Wa = function(a) {
      var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
      };
      var c = m.document.createElement("div");
      return a.replace(Za, function(a, e) {
        var d = b[a];
        if (d)
          return d;
        "#" == e.charAt(0) && (e = Number("0" + e.substr(1)),
        isNaN(e) || (d = String.fromCharCode(e)));
        d || (c.innerHTML = a + " ",
        d = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = d
      })
    }
      , Xa = function(a) {
      return a.replace(/&([^;]+);/g, function(a, c) {
        switch (c) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return '"';
        default:
          return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)),
          isNaN(c)) ? a : String.fromCharCode(c)
        }
      })
    }
      , Za = /&([^;\s<&]+);?/g
      , $a = function(a) {
      return null == a ? "" : String(a)
    }
      , ab = function(a) {
      return Array.prototype.join.call(arguments, "")
    }
      , cb = function(a, b) {
      var c = 0;
      a = La(String(a)).split(".");
      b = La(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || ""
          , g = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if (0 == f[0].length && 0 == g[0].length)
            break;
          c = bb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || bb(0 == f[2].length, 0 == g[2].length) || bb(f[2], g[2]);
          f = f[3];
          g = g[3]
        } while (0 == c)
      }
      return c
    }
      , bb = function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    }
      , db = function(a) {
      return String(a).replace(/\-([a-z])/g, function(a, c) {
        return c.toUpperCase()
      })
    }
      , eb = function(a) {
      return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    };
    var fb = function(a, b) {
      b.unshift(a);
      Fa.call(this, Ja.apply(null, b));
      b.shift()
    };
    B(fb, Fa);
    fb.prototype.name = "AssertionError";
    var gb = function(a, b, c, d) {
      var e = "Assertion failed";
      if (c) {
        e += ": " + c;
        var f = d
      } else
        a && (e += ": " + a,
        f = b);
      throw new fb("" + e,f || []);
    }
      , D = function(a, b, c) {
      a || gb("", null, b, Array.prototype.slice.call(arguments, 2));
      return a
    }
      , hb = function(a, b) {
      throw new fb("Failure" + (a ? ": " + a : ""),Array.prototype.slice.call(arguments, 1));
    }
      , ib = function(a, b, c) {
      u(a) || gb("Expected number but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    }
      , jb = function(a, b, c) {
      r(a) || gb("Expected string but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    }
      , kb = function(a, b, c) {
      ha(a) || gb("Expected function but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2))
    }
      , lb = function(a, b, c) {
      ia(a) || gb("Expected object but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2))
    }
      , mb = function(a, b, c) {
      y(a) || gb("Expected array but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    }
      , nb = function(a, b, c) {
      ia(a) && 1 == a.nodeType || gb("Expected Element but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2))
    }
      , pb = function(a, b, c, d) {
      a instanceof b || gb("Expected instanceof %s but got %s.", [ob(b), ob(a)], c, Array.prototype.slice.call(arguments, 3))
    }
      , ob = function(a) {
      return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
    var qb = Array.prototype.indexOf ? function(a, b, c) {
      D(null != a.length);
      return Array.prototype.indexOf.call(a, b, c)
    }
    : function(a, b, c) {
      c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
      if (r(a))
        return r(b) && 1 == b.length ? a.indexOf(b, c) : -1;
      for (; c < a.length; c++)
        if (c in a && a[c] === b)
          return c;
      return -1
    }
      , E = Array.prototype.forEach ? function(a, b, c) {
      D(null != a.length);
      Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
      for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
    }
      , rb = Array.prototype.filter ? function(a, b, c) {
      D(null != a.length);
      return Array.prototype.filter.call(a, b, c)
    }
    : function(a, b, c) {
      for (var d = a.length, e = [], f = 0, g = r(a) ? a.split("") : a, k = 0; k < d; k++)
        if (k in g) {
          var l = g[k];
          b.call(c, l, k, a) && (e[f++] = l)
        }
      return e
    }
      , tb = Array.prototype.map ? function(a, b, c) {
      D(null != a.length);
      return Array.prototype.map.call(a, b, c)
    }
    : function(a, b, c) {
      for (var d = a.length, e = Array(d), f = r(a) ? a.split("") : a, g = 0; g < d; g++)
        g in f && (e[g] = b.call(c, f[g], g, a));
      return e
    }
      , ub = Array.prototype.every ? function(a, b, c) {
      D(null != a.length);
      return Array.prototype.every.call(a, b, c)
    }
    : function(a, b, c) {
      for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && !b.call(c, e[f], f, a))
          return !1;
      return !0
    }
      , wb = function(a) {
      a: {
        var b = vb;
        for (var c = a.length, d = r(a) ? a.split("") : a, e = 0; e < c; e++)
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a
          }
        b = -1
      }
      return 0 > b ? null : r(a) ? a.charAt(b) : a[b]
    }
      , xb = function(a, b) {
      return 0 <= qb(a, b)
    }
      , yb = function(a, b) {
      b = qb(a, b);
      var c;
      if (c = 0 <= b)
        D(null != a.length),
        Array.prototype.splice.call(a, b, 1);
      return c
    }
      , zb = function(a) {
      return Array.prototype.concat.apply([], arguments)
    }
      , Ab = function(a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
          c[d] = a[d];
        return c
      }
      return []
    }
      , Cb = function(a, b, c, d) {
      D(null != a.length);
      Array.prototype.splice.apply(a, Bb(arguments, 1))
    }
      , Bb = function(a, b, c) {
      D(null != a.length);
      return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    var Db;
    a: {
      var Eb = m.navigator;
      if (Eb) {
        var Fb = Eb.userAgent;
        if (Fb) {
          Db = Fb;
          break a
        }
      }
      Db = ""
    }
    var F = function(a) {
      return -1 != Db.indexOf(a)
    };
    var Hb = function() {
      return F("Safari") && !(Gb() || F("Coast") || F("Opera") || F("Edge") || F("Silk") || F("Android"))
    }
      , Gb = function() {
      return (F("Chrome") || F("CriOS")) && !F("Edge")
    };
    var Ib = function() {
      return F("iPhone") && !F("iPod") && !F("iPad")
    }
      , Jb = function() {
      return Ib() || F("iPad") || F("iPod")
    };
    var Kb = function(a) {
      Kb[" "](a);
      return a
    };
    Kb[" "] = ba;
    var Lb = function(a, b) {
      try {
        return Kb(a[b]),
        !0
      } catch (c) {}
      return !1
    }
      , Nb = function(a, b) {
      var c = Mb;
      return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Ob = F("Opera"), G = F("Trident") || F("MSIE"), Pb = F("Edge"), Qb = Pb || G, Rb = F("Gecko") && !(-1 != Db.toLowerCase().indexOf("webkit") && !F("Edge")) && !(F("Trident") || F("MSIE")) && !F("Edge"), H = -1 != Db.toLowerCase().indexOf("webkit") && !F("Edge"), Sb = F("Macintosh"), Tb = F("Windows"), Ub = F("Android"), Vb = Ib(), Wb = F("iPad"), Xb = F("iPod"), Yb = Jb(), Zb = function() {
      var a = m.document;
      return a ? a.documentMode : void 0
    }, $b;
    a: {
      var ac = ""
        , bc = function() {
        var a = Db;
        if (Rb)
          return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (Pb)
          return /Edge\/([\d\.]+)/.exec(a);
        if (G)
          return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (H)
          return /WebKit\/(\S+)/.exec(a);
        if (Ob)
          return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();
      bc && (ac = bc ? bc[1] : "");
      if (G) {
        var cc = Zb();
        if (null != cc && cc > parseFloat(ac)) {
          $b = String(cc);
          break a
        }
      }
      $b = ac
    }
    var dc = $b, Mb = {}, I = function(a) {
      return Nb(a, function() {
        return 0 <= cb(dc, a)
      })
    }, fc = function(a) {
      return Number(ec) >= a
    }, gc;
    var hc = m.document;
    gc = hc && G ? Zb() || ("CSS1Compat" == hc.compatMode ? parseInt(dc, 10) : 5) : void 0;
    var ec = gc;
    var ic = !G || fc(9)
      , jc = !Rb && !G || G && fc(9) || Rb && I("1.9.1")
      , kc = G && !I("9");
    var lc = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      command: !0,
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
      wbr: !0
    };
    var nc = function() {
      this.jf = "";
      this.Mi = mc
    };
    nc.prototype.kc = !0;
    nc.prototype.Fb = function() {
      return this.jf
    }
    ;
    nc.prototype.toString = function() {
      return "Const{" + this.jf + "}"
    }
    ;
    var oc = function(a) {
      if (a instanceof nc && a.constructor === nc && a.Mi === mc)
        return a.jf;
      hb("expected object of type Const, got '" + a + "'");
      return "type_error:Const"
    }
      , mc = {}
      , pc = function(a) {
      var b = new nc;
      b.jf = a;
      return b
    };
    pc("");
    var rc = function() {
      this.ng = "";
      this.Ni = qc
    };
    h = rc.prototype;
    h.kc = !0;
    h.Fb = function() {
      return this.ng
    }
    ;
    h.Tf = !0;
    h.Hc = function() {
      return 1
    }
    ;
    h.toString = function() {
      return "TrustedResourceUrl{" + this.ng + "}"
    }
    ;
    var sc = function(a) {
      if (a instanceof rc && a.constructor === rc && a.Ni === qc)
        return a.ng;
      hb("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ea(a));
      return "type_error:TrustedResourceUrl"
    }
      , qc = {};
    var uc = function() {
      this.Yb = "";
      this.Li = tc
    };
    h = uc.prototype;
    h.kc = !0;
    h.Fb = function() {
      return this.Yb
    }
    ;
    h.Tf = !0;
    h.Hc = function() {
      return 1
    }
    ;
    h.toString = function() {
      return "SafeUrl{" + this.Yb + "}"
    }
    ;
    var vc = function(a) {
      if (a instanceof uc && a.constructor === uc && a.Li === tc)
        return a.Yb;
      hb("expected object of type SafeUrl, got '" + a + "' of type " + ea(a));
      return "type_error:SafeUrl"
    }
      , wc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
      , yc = function(a) {
      if (a instanceof uc)
        return a;
      a = a.kc ? a.Fb() : String(a);
      wc.test(a) || (a = "about:invalid#zClosurez");
      return xc(a)
    }
      , tc = {}
      , xc = function(a) {
      var b = new uc;
      b.Yb = a;
      return b
    };
    xc("about:blank");
    var Ac = function() {
      this.Xe = "";
      this.Ki = zc
    };
    Ac.prototype.kc = !0;
    var zc = {};
    Ac.prototype.Fb = function() {
      return this.Xe
    }
    ;
    Ac.prototype.toString = function() {
      return "SafeStyle{" + this.Xe + "}"
    }
    ;
    Ac.prototype.He = function(a) {
      this.Xe = a;
      return this
    }
    ;
    var Bc = (new Ac).He("")
      , Gc = function(a) {
      if (a instanceof uc)
        return 'url("' + vc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
      if (a instanceof nc)
        a = oc(a);
      else {
        a = String(a);
        var b = a.replace(Cc, "$1").replace(Dc, "url");
        if (Ec.test(b)) {
          for (var c = b = !0, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
          }
          b && c ? a = Fc(a) : (hb("String value requires balanced quotes, got: " + a),
          a = "zClosurez")
        } else
          hb("String value allows only [-,.\"'%_!# a-zA-Z0-9] and simple functions, got: " + a),
          a = "zClosurez"
      }
      D(!/[{;}]/.test(a), "Value does not allow [{;}].");
      return a
    }
      , Ec = /^[-,."'%_!# a-zA-Z0-9]+$/
      , Dc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g
      , Cc = /\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g
      , Fc = function(a) {
      return a.replace(Dc, function(a, c, d, e) {
        var b = "";
        d = d.replace(/^(['"])(.*)\1$/, function(a, c, d) {
          b = c;
          return d
        });
        a = yc(d).Fb();
        return c + b + a + b + e
      })
    };
    var Ic = function() {
      this.Yb = "";
      this.Ji = Hc;
      this.ah = null
    };
    h = Ic.prototype;
    h.Tf = !0;
    h.Hc = function() {
      return this.ah
    }
    ;
    h.kc = !0;
    h.Fb = function() {
      return this.Yb
    }
    ;
    h.toString = function() {
      return "SafeHtml{" + this.Yb + "}"
    }
    ;
    var Jc = function(a) {
      if (a instanceof Ic && a.constructor === Ic && a.Ji === Hc)
        return a.Yb;
      hb("expected object of type SafeHtml, got '" + a + "' of type " + ea(a));
      return "type_error:SafeHtml"
    }
      , Lc = function(a) {
      if (a instanceof Ic)
        return a;
      var b = null;
      a.Tf && (b = a.Hc());
      return Kc(Va(a.kc ? a.Fb() : String(a)), b)
    }
      , Mc = function(a) {
      if (a instanceof Ic)
        return a;
      a = Lc(a);
      return Kc(Jc(a).replace(/(\r\n|\r|\n)/g, "<br>"), a.Hc())
    }
      , Nc = /^[a-zA-Z0-9-]+$/
      , Oc = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0
    }
      , Pc = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0
    }
      , Rc = function(a) {
      if (!Nc.test("input"))
        throw Error("Invalid tag name <input>.");
      if ("INPUT"in Pc)
        throw Error("Tag name <input> is not allowed for SafeHtml.");
      var b = null
        , c = "";
      if (a)
        for (l in a) {
          if (!Nc.test(l))
            throw Error('Invalid attribute name "' + l + '".');
          var d = a[l];
          if (null != d) {
            var e = l;
            var f = d;
            if (f instanceof nc)
              f = oc(f);
            else if ("style" == e.toLowerCase()) {
              d = void 0;
              if (!ia(f))
                throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
              if (!(f instanceof Ac)) {
                var g = f;
                f = "";
                for (d in g) {
                  if (!/^[-_a-zA-Z0-9]+$/.test(d))
                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
                  var k = g[d];
                  null != k && (k = y(k) ? tb(k, Gc).join(" ") : Gc(k),
                  f += d + ":" + k + ";")
                }
                f ? (d = f,
                D(!/[<>]/.test(d), "Forbidden characters in style string: " + d),
                f = (new Ac).He(f)) : f = Bc
              }
              f instanceof Ac && f.constructor === Ac && f.Ki === zc ? d = f.Xe : (hb("expected object of type SafeStyle, got '" + f + "' of type " + ea(f)),
              d = "type_error:SafeStyle");
              f = d
            } else {
              if (/^on/i.test(e))
                throw Error('Attribute "' + e + '" requires goog.string.Const value, "' + f + '" given.');
              if (e.toLowerCase()in Oc)
                if (f instanceof rc)
                  f = sc(f);
                else if (f instanceof uc)
                  f = vc(f);
                else if (r(f))
                  f = yc(f).Fb();
                else
                  throw Error('Attribute "' + e + '" on tag "input" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + f + '" given.');
            }
            f.kc && (f = f.Fb());
            D(r(f) || u(f), "String or number value expected, got " + typeof f + " with value: " + f);
            e = e + '="' + Va(String(f)) + '"';
            c += " " + e
          }
        }
      var l = "<input" + c;
      c = void 0;
      null != c ? y(c) || (c = [c]) : c = [];
      !0 === lc.input ? (D(!c.length, "Void tag <input> does not allow content."),
      l += ">") : (b = Qc(c),
      l += ">" + Jc(b) + "</input>",
      b = b.Hc());
      (a = a && a.dir) && (b = /^(ltr|rtl|auto)$/i.test(a) ? 0 : null);
      return Kc(l, b)
    }
      , Qc = function(a) {
      var b = 0
        , c = ""
        , d = function(a) {
        y(a) ? E(a, d) : (a = Lc(a),
        c += Jc(a),
        a = a.Hc(),
        0 == b ? b = a : 0 != a && b != a && (b = null))
      };
      E(arguments, d);
      return Kc(c, b)
    }
      , Hc = {}
      , Kc = function(a, b) {
      return (new Ic).He(a, b)
    };
    Ic.prototype.He = function(a, b) {
      this.Yb = a;
      this.ah = b;
      return this
    }
    ;
    Kc("<!DOCTYPE html>", 0);
    var Sc = Kc("", 0)
      , Tc = Kc("<br>", 0);
    var Uc = {
      MATH: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0
    }
      , Vc = function(a, b) {
      if (Uc[a.tagName.toUpperCase()])
        throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
      a.innerHTML = Jc(b)
    };
    var J = function(a, b) {
      this.x = p(a) ? a : 0;
      this.y = p(b) ? b : 0
    };
    J.prototype.clone = function() {
      return new J(this.x,this.y)
    }
    ;
    J.prototype.toString = function() {
      return "(" + this.x + ", " + this.y + ")"
    }
    ;
    var Wc = function(a, b) {
      return new J(a.x - b.x,a.y - b.y)
    };
    h = J.prototype;
    h.ceil = function() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this
    }
    ;
    h.floor = function() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this
    }
    ;
    h.round = function() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this
    }
    ;
    h.translate = function(a, b) {
      a instanceof J ? (this.x += a.x,
      this.y += a.y) : (this.x += Number(a),
      u(b) && (this.y += b));
      return this
    }
    ;
    h.scale = function(a, b) {
      b = u(b) ? b : a;
      this.x *= a;
      this.y *= b;
      return this
    }
    ;
    var Xc = function(a, b) {
      this.width = a;
      this.height = b
    };
    h = Xc.prototype;
    h.clone = function() {
      return new Xc(this.width,this.height)
    }
    ;
    h.toString = function() {
      return "(" + this.width + " x " + this.height + ")"
    }
    ;
    h.aspectRatio = function() {
      return this.width / this.height
    }
    ;
    h.ceil = function() {
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this
    }
    ;
    h.floor = function() {
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this
    }
    ;
    h.round = function() {
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this
    }
    ;
    h.scale = function(a, b) {
      b = u(b) ? b : a;
      this.width *= a;
      this.height *= b;
      return this
    }
    ;
    var K = function(a) {
      return a ? new Yc(Zc(a)) : Ga || (Ga = new Yc)
    }
      , ad = function(a, b) {
      var c = b || document;
      return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : $c(document, "*", a, b)
    }
      , $c = function(a, b, c, d) {
      a = d || a;
      b = b && "*" != b ? String(b).toUpperCase() : "";
      if (a.querySelectorAll && a.querySelector && (b || c))
        return a.querySelectorAll(b + (c ? "." + c : ""));
      if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c);
        if (b) {
          d = {};
          for (var e = 0, f = 0, g; g = a[f]; f++)
            b == g.nodeName && (d[e++] = g);
          d.length = e;
          return d
        }
        return a
      }
      a = a.getElementsByTagName(b || "*");
      if (c) {
        d = {};
        for (f = e = 0; g = a[f]; f++)
          b = g.className,
          "function" == typeof b.split && xb(b.split(/\s+/), c) && (d[e++] = g);
        d.length = e;
        return d
      }
      return a
    }
      , cd = function(a, b) {
      ta(b, function(b, d) {
        b && b.kc && (b = b.Fb());
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : bd.hasOwnProperty(d) ? a.setAttribute(bd[d], b) : Ha(d, "aria-") || Ha(d, "data-") ? a.setAttribute(d, b) : a[d] = b
      })
    }
      , bd = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
    }
      , ed = function(a) {
      a = a.document;
      a = dd(a) ? a.documentElement : a.body;
      return new Xc(a.clientWidth,a.clientHeight)
    }
      , fd = function() {
      var a = window
        , b = a.document
        , c = 0;
      if (b) {
        c = b.body;
        var d = b.documentElement;
        if (!d || !c)
          return 0;
        a = ed(a).height;
        if (dd(b) && d.scrollHeight)
          c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
        else {
          b = d.scrollHeight;
          var e = d.offsetHeight;
          d.clientHeight != e && (b = c.scrollHeight,
          e = c.offsetHeight);
          c = b > a ? b > e ? b : e : b < e ? b : e
        }
      }
      return c
    }
      , id = function(a) {
      var b = gd(a);
      a = hd(a);
      return G && I("10") && a.pageYOffset != b.scrollTop ? new J(b.scrollLeft,b.scrollTop) : new J(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
      , gd = function(a) {
      return a.scrollingElement ? a.scrollingElement : !H && dd(a) ? a.documentElement : a.body || a.documentElement
    }
      , hd = function(a) {
      return a.parentWindow || a.defaultView
    }
      , kd = function(a, b, c, d) {
      function e(c) {
        c && b.appendChild(r(c) ? a.createTextNode(c) : c)
      }
      for (; d < c.length; d++) {
        var f = c[d];
        !fa(f) || ia(f) && 0 < f.nodeType ? e(f) : E(jd(f) ? Ab(f) : f, e)
      }
    }
      , dd = function(a) {
      return "CSS1Compat" == a.compatMode
    }
      , ld = function(a) {
      for (var b; b = a.firstChild; )
        a.removeChild(b)
    }
      , md = function(a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
      , od = function(a) {
      return p(a.firstElementChild) ? a.firstElementChild : nd(a.firstChild)
    }
      , nd = function(a) {
      for (; a && 1 != a.nodeType; )
        a = a.nextSibling;
      return a
    }
      , pd = function(a, b) {
      if (!a || !b)
        return !1;
      if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
      if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b; )
        b = b.parentNode;
      return b == a
    }
      , Zc = function(a) {
      D(a, "Node cannot be null or undefined.");
      return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
      , qd = {
      SCRIPT: 1,
      STYLE: 1,
      HEAD: 1,
      IFRAME: 1,
      OBJECT: 1
    }
      , rd = {
      IMG: " ",
      BR: "\n"
    }
      , ud = function(a) {
      return sd(a) && td(a)
    }
      , vd = function(a, b) {
      b ? a.tabIndex = 0 : (a.tabIndex = -1,
      a.removeAttribute("tabIndex"))
    }
      , sd = function(a) {
      return G && !I("9") ? (a = a.getAttributeNode("tabindex"),
      null != a && a.specified) : a.hasAttribute("tabindex")
    }
      , td = function(a) {
      a = a.tabIndex;
      return u(a) && 0 <= a && 32768 > a
    }
      , xd = function(a) {
      if (kc && null !== a && "innerText"in a)
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
      else {
        var b = [];
        wd(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      kc || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""));
      return a
    }
      , wd = function(a, b, c) {
      if (!(a.nodeName in qd))
        if (3 == a.nodeType)
          c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in rd)
          b.push(rd[a.nodeName]);
        else
          for (a = a.firstChild; a; )
            wd(a, b, c),
            a = a.nextSibling
    }
      , jd = function(a) {
      if (a && "number" == typeof a.length) {
        if (ia(a))
          return "function" == typeof a.item || "string" == typeof a.item;
        if (ha(a))
          return "function" == typeof a.item
      }
      return !1
    }
      , zd = function(a, b, c, d) {
      if (!b && !c)
        return null;
      var e = b ? String(b).toUpperCase() : null;
      return yd(a, function(a) {
        return (!e || a.nodeName == e) && (!c || r(a.className) && xb(a.className.split(/\s+/), c))
      }, d)
    }
      , Ad = function(a, b, c) {
      return zd(a, null, b, c)
    }
      , yd = function(a, b, c) {
      for (var d = 0; a && (null == c || d <= c); ) {
        D("parentNode" != a.name);
        if (b(a))
          return a;
        a = a.parentNode;
        d++
      }
      return null
    }
      , Yc = function(a) {
      this.H = a || m.document || document
    };
    h = Yc.prototype;
    h.Db = K;
    h.b = function(a) {
      return r(a) ? this.H.getElementById(a) : a
    }
    ;
    h.$ = Yc.prototype.b;
    h.getElementsByTagName = function(a, b) {
      return (b || this.H).getElementsByTagName(String(a))
    }
    ;
    h.S = function(a, b, c) {
      var d = this.H
        , e = arguments
        , f = String(e[0])
        , g = e[1];
      if (!ic && g && (g.name || g.type)) {
        f = ["<", f];
        g.name && f.push(' name="', Va(g.name), '"');
        if (g.type) {
          f.push(' type="', Va(g.type), '"');
          var k = {};
          Ca(k, g);
          delete k.type;
          g = k
        }
        f.push(">");
        f = f.join("")
      }
      f = d.createElement(f);
      g && (r(g) ? f.className = g : y(g) ? f.className = g.join(" ") : cd(f, g));
      2 < e.length && kd(d, f, e, 2);
      return f
    }
    ;
    h.createElement = function(a) {
      return this.H.createElement(String(a))
    }
    ;
    h.createTextNode = function(a) {
      return this.H.createTextNode(String(a))
    }
    ;
    h.appendChild = function(a, b) {
      a.appendChild(b)
    }
    ;
    h.append = function(a, b) {
      kd(Zc(a), a, arguments, 1)
    }
    ;
    h.canHaveChildren = function(a) {
      if (1 != a.nodeType)
        return !1;
      switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1
      }
      return !0
    }
    ;
    h.removeNode = md;
    h.qh = function(a) {
      return jc && void 0 != a.children ? a.children : rb(a.childNodes, function(a) {
        return 1 == a.nodeType
      })
    }
    ;
    h.isWindow = function(a) {
      return ia(a) && a.window == a
    }
    ;
    h.contains = pd;
    h.mc = function(a) {
      var b;
      (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!sd(a) || td(a)) : ud(a)) && G ? (a = !ha(a.getBoundingClientRect) || G && null == a.parentElement ? {
        height: a.offsetHeight,
        width: a.offsetWidth
      } : a.getBoundingClientRect(),
      a = null != a && 0 < a.height && 0 < a.width) : a = b;
      return a
    }
    ;
    h.wj = Ad;
    Da("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
    var Bd = "combobox grid group listbox menu menubar radiogroup row rowgroup tablist textbox toolbar tree treegrid".split(" ")
      , Cd = function(a, b) {
      b ? (D(xa(Ea, b), "No such ARIA role " + b),
      a.setAttribute("role", b)) : a.removeAttribute("role")
    }
      , Ed = function(a, b, c) {
      y(c) && (c = c.join(" "));
      var d = Dd(b);
      "" === c || void 0 == c ? (ra || (ra = {
        atomic: !1,
        autocomplete: "none",
        dropeffect: "none",
        haspopup: !1,
        live: "off",
        multiline: !1,
        multiselectable: !1,
        orientation: "vertical",
        readonly: !1,
        relevant: "additions text",
        required: !1,
        sort: "none",
        busy: !1,
        disabled: !1,
        hidden: !1,
        invalid: "false"
      }),
      c = ra,
      b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    }
      , Fd = function(a) {
      var b = a.getAttribute(Dd("activedescendant"));
      b = null == b || void 0 == b ? "" : String(b);
      return Zc(a).getElementById(b)
    }
      , Dd = function(a) {
      D(a, "ARIA attribute cannot be empty.");
      D(xa(sa, a), "No such ARIA attribute " + a);
      return "aria-" + a
    };
    var Gd = function() {
      this.Cc = this.Cc;
      this.Kc = this.Kc
    };
    Gd.prototype.Cc = !1;
    Gd.prototype.Xa = function() {
      this.Cc || (this.Cc = !0,
      this.T())
    }
    ;
    var Hd = function(a, b) {
      a.Cc ? p(void 0) ? b.call(void 0) : b() : (a.Kc || (a.Kc = []),
      a.Kc.push(p(void 0) ? z(b, void 0) : b))
    };
    Gd.prototype.T = function() {
      if (this.Kc)
        for (; this.Kc.length; )
          this.Kc.shift()()
    }
    ;
    var Id = function(a) {
      a && "function" == typeof a.Xa && a.Xa()
    };
    var Jd = function(a, b) {
      this.type = a;
      this.currentTarget = this.target = b;
      this.defaultPrevented = this.Oc = !1;
      this.ii = !0
    };
    Jd.prototype.stopPropagation = function() {
      this.Oc = !0
    }
    ;
    Jd.prototype.preventDefault = function() {
      this.defaultPrevented = !0;
      this.ii = !1
    }
    ;
    var Kd = !G || fc(9)
      , Ld = !G || fc(9)
      , Md = G && !I("9");
    !H || I("528");
    Rb && I("1.9b") || G && I("8") || Ob && I("9.5") || H && I("528");
    Rb && !I("8") || G && I("9");
    var Nd = function() {
      if (!m.addEventListener || !Object.defineProperty)
        return !1;
      var a = !1
        , b = Object.defineProperty({}, "passive", {
        get: function() {
          a = !0
        }
      });
      m.addEventListener("test", ba, b);
      m.removeEventListener("test", ba, b);
      return a
    }();
    var Od = G ? "focusin" : "DOMFocusIn"
      , Pd = G ? "focusout" : "DOMFocusOut"
      , Qd = H ? "webkitTransitionEnd" : Ob ? "otransitionend" : "transitionend";
    var Rd = function(a, b) {
      Jd.call(this, a ? a.type : "");
      this.relatedTarget = this.currentTarget = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
      this.key = "";
      this.charCode = this.keyCode = 0;
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.state = null;
      this.lg = !1;
      this.Tb = null;
      a && this.lc(a, b)
    };
    B(Rd, Jd);
    var Sd = [1, 4, 2];
    Rd.prototype.lc = function(a, b) {
      var c = this.type = a.type
        , d = a.changedTouches ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.currentTarget = b;
      (b = a.relatedTarget) ? Rb && (Lb(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      null === d ? (this.offsetX = H || void 0 !== a.offsetX ? a.offsetX : a.layerX,
      this.offsetY = H || void 0 !== a.offsetY ? a.offsetY : a.layerY,
      this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
      this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
      this.screenX = a.screenX || 0,
      this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
      this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
      this.screenX = d.screenX || 0,
      this.screenY = d.screenY || 0);
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.key = a.key || "";
      this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.lg = Sb ? a.metaKey : a.ctrlKey;
      this.state = a.state;
      this.Tb = a;
      a.defaultPrevented && this.preventDefault()
    }
    ;
    var Td = function(a) {
      return Kd ? 0 == a.Tb.button : "click" == a.type ? !0 : !!(a.Tb.button & Sd[0])
    };
    Rd.prototype.stopPropagation = function() {
      Rd.o.stopPropagation.call(this);
      this.Tb.stopPropagation ? this.Tb.stopPropagation() : this.Tb.cancelBubble = !0
    }
    ;
    Rd.prototype.preventDefault = function() {
      Rd.o.preventDefault.call(this);
      var a = this.Tb;
      if (a.preventDefault)
        a.preventDefault();
      else if (a.returnValue = !1,
      Md)
        try {
          if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
            a.keyCode = -1
        } catch (b) {}
    }
    ;
    var Ud = "closure_listenable_" + (1E6 * Math.random() | 0)
      , Vd = function(a) {
      return !(!a || !a[Ud])
    }
      , Wd = 0;
    var Xd = function(a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.De = e;
      this.key = ++Wd;
      this.od = this.je = !1
    }
      , Yd = function(a) {
      a.od = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.De = null
    };
    var Zd = function(a) {
      this.src = a;
      this.Aa = {};
      this.de = 0
    };
    Zd.prototype.add = function(a, b, c, d, e) {
      var f = a.toString();
      a = this.Aa[f];
      a || (a = this.Aa[f] = [],
      this.de++);
      var g = $d(a, b, d, e);
      -1 < g ? (b = a[g],
      c || (b.je = !1)) : (b = new Xd(b,this.src,f,!!d,e),
      b.je = c,
      a.push(b));
      return b
    }
    ;
    Zd.prototype.remove = function(a, b, c, d) {
      a = a.toString();
      if (!(a in this.Aa))
        return !1;
      var e = this.Aa[a];
      b = $d(e, b, c, d);
      return -1 < b ? (Yd(e[b]),
      D(null != e.length),
      Array.prototype.splice.call(e, b, 1),
      0 == e.length && (delete this.Aa[a],
      this.de--),
      !0) : !1
    }
    ;
    var ae = function(a, b) {
      var c = b.type;
      if (!(c in a.Aa))
        return !1;
      var d = yb(a.Aa[c], b);
      d && (Yd(b),
      0 == a.Aa[c].length && (delete a.Aa[c],
      a.de--));
      return d
    };
    Zd.prototype.nd = function(a) {
      a = a && a.toString();
      var b = 0, c;
      for (c in this.Aa)
        if (!a || c == a) {
          for (var d = this.Aa[c], e = 0; e < d.length; e++)
            ++b,
            Yd(d[e]);
          delete this.Aa[c];
          this.de--
        }
      return b
    }
    ;
    Zd.prototype.ye = function(a, b) {
      a = this.Aa[a.toString()];
      var c = [];
      if (a)
        for (var d = 0; d < a.length; ++d) {
          var e = a[d];
          e.capture == b && c.push(e)
        }
      return c
    }
    ;
    Zd.prototype.Ed = function(a, b, c, d) {
      a = this.Aa[a.toString()];
      var e = -1;
      a && (e = $d(a, b, c, d));
      return -1 < e ? a[e] : null
    }
    ;
    Zd.prototype.hasListener = function(a, b) {
      var c = p(a)
        , d = c ? a.toString() : ""
        , e = p(b);
      return ua(this.Aa, function(a) {
        for (var f = 0; f < a.length; ++f)
          if (!(c && a[f].type != d || e && a[f].capture != b))
            return !0;
        return !1
      })
    }
    ;
    var $d = function(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.od && f.listener == b && f.capture == !!c && f.De == d)
          return e
      }
      return -1
    };
    var be = "closure_lm_" + (1E6 * Math.random() | 0)
      , ce = {}
      , de = 0
      , L = function(a, b, c, d, e) {
      if (d && d.once)
        return ee(a, b, c, d, e);
      if (y(b)) {
        for (var f = 0; f < b.length; f++)
          L(a, b[f], c, d, e);
        return null
      }
      c = fe(c);
      return Vd(a) ? a.w(b, c, ia(d) ? !!d.capture : !!d, e) : ge(a, b, c, !1, d, e)
    }
      , ge = function(a, b, c, d, e, f) {
      if (!b)
        throw Error("Invalid event type");
      var g = ia(e) ? !!e.capture : !!e
        , k = he(a);
      k || (a[be] = k = new Zd(a));
      c = k.add(b, c, d, g, f);
      if (c.proxy)
        return c;
      d = ie();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        Nd || (e = g),
        void 0 === e && (e = !1),
        a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent)
        a.attachEvent(je(b.toString()), d);
      else
        throw Error("addEventListener and attachEvent are unavailable.");
      de++;
      return c
    }
      , ie = function() {
      var a = ke
        , b = Ld ? function(c) {
        return a.call(b.src, b.listener, c)
      }
      : function(c) {
        c = a.call(b.src, b.listener, c);
        if (!c)
          return c
      }
      ;
      return b
    }
      , ee = function(a, b, c, d, e) {
      if (y(b)) {
        for (var f = 0; f < b.length; f++)
          ee(a, b[f], c, d, e);
        return null
      }
      c = fe(c);
      return Vd(a) ? a.ag(b, c, ia(d) ? !!d.capture : !!d, e) : ge(a, b, c, !0, d, e)
    }
      , le = function(a, b, c, d, e) {
      if (y(b))
        for (var f = 0; f < b.length; f++)
          le(a, b[f], c, d, e);
      else
        d = ia(d) ? !!d.capture : !!d,
        c = fe(c),
        Vd(a) ? a.Ua(b, c, d, e) : a && (a = he(a)) && (b = a.Ed(b, c, d, e)) && me(b)
    }
      , me = function(a) {
      if (u(a) || !a || a.od)
        return !1;
      var b = a.src;
      if (Vd(b))
        return ae(b.Ka, a);
      var c = a.type
        , d = a.proxy;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(je(c), d);
      de--;
      (c = he(b)) ? (ae(c, a),
      0 == c.de && (c.src = null,
      b[be] = null)) : Yd(a);
      return !0
    }
      , ne = function(a) {
      if (a)
        if (Vd(a))
          a.Ka && a.Ka.nd(void 0);
        else if (a = he(a)) {
          var b = 0, c;
          for (c in a.Aa)
            for (var d = a.Aa[c].concat(), e = 0; e < d.length; ++e)
              me(d[e]) && ++b
        }
    }
      , oe = function(a) {
      return Vd(a) ? a.ye("click", !1) : a ? (a = he(a)) ? a.ye("click", !1) : [] : []
    }
      , je = function(a) {
      return a in ce ? ce[a] : ce[a] = "on" + a
    }
      , qe = function(a, b, c, d) {
      var e = !0;
      if (a = he(a))
        if (b = a.Aa[b.toString()])
          for (b = b.concat(),
          a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.capture == c && !f.od && (f = pe(f, d),
            e = e && !1 !== f)
          }
      return e
    }
      , pe = function(a, b) {
      var c = a.listener
        , d = a.De || a.src;
      a.je && me(a);
      return c.call(d, b)
    }
      , ke = function(a, b) {
      if (a.od)
        return !0;
      if (!Ld) {
        var c = b || x("window.event");
        b = new Rd(c,this);
        var d = !0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
          a: {
            var e = !1;
            if (0 == c.keyCode)
              try {
                c.keyCode = -1;
                break a
              } catch (g) {
                e = !0
              }
            if (e || void 0 == c.returnValue)
              c.returnValue = !0
          }
          c = [];
          for (e = b.currentTarget; e; e = e.parentNode)
            c.push(e);
          a = a.type;
          for (e = c.length - 1; !b.Oc && 0 <= e; e--) {
            b.currentTarget = c[e];
            var f = qe(c[e], a, !0, b);
            d = d && f
          }
          for (e = 0; !b.Oc && e < c.length; e++)
            b.currentTarget = c[e],
            f = qe(c[e], a, !1, b),
            d = d && f
        }
        return d
      }
      return pe(a, new Rd(b,this))
    }
      , he = function(a) {
      a = a[be];
      return a instanceof Zd ? a : null
    }
      , re = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
      , fe = function(a) {
      D(a, "Listener can not be null.");
      if (ha(a))
        return a;
      D(a.handleEvent, "An object listener must have handleEvent method.");
      a[re] || (a[re] = function(b) {
        return a.handleEvent(b)
      }
      );
      return a[re]
    };
    var M = function() {
      Gd.call(this);
      this.Ka = new Zd(this);
      this.Ri = this;
      this.jg = null
    };
    B(M, Gd);
    M.prototype[Ud] = !0;
    h = M.prototype;
    h.ze = function() {
      return this.jg
    }
    ;
    h.vg = function(a) {
      this.jg = a
    }
    ;
    h.addEventListener = function(a, b, c, d) {
      L(this, a, b, c, d)
    }
    ;
    h.removeEventListener = function(a, b, c, d) {
      le(this, a, b, c, d)
    }
    ;
    h.dispatchEvent = function(a) {
      se(this);
      var b = this.ze();
      if (b) {
        var c = [];
        for (var d = 1; b; b = b.ze())
          c.push(b),
          D(1E3 > ++d, "infinite loop")
      }
      b = this.Ri;
      d = a.type || a;
      if (r(a))
        a = new Jd(a,b);
      else if (a instanceof Jd)
        a.target = a.target || b;
      else {
        var e = a;
        a = new Jd(d,b);
        Ca(a, e)
      }
      e = !0;
      if (c)
        for (var f = c.length - 1; !a.Oc && 0 <= f; f--) {
          var g = a.currentTarget = c[f];
          e = te(g, d, !0, a) && e
        }
      a.Oc || (g = a.currentTarget = b,
      e = te(g, d, !0, a) && e,
      a.Oc || (e = te(g, d, !1, a) && e));
      if (c)
        for (f = 0; !a.Oc && f < c.length; f++)
          g = a.currentTarget = c[f],
          e = te(g, d, !1, a) && e;
      return e
    }
    ;
    h.T = function() {
      M.o.T.call(this);
      this.Ka && this.Ka.nd(void 0);
      this.jg = null
    }
    ;
    h.w = function(a, b, c, d) {
      se(this);
      return this.Ka.add(String(a), b, !1, c, d)
    }
    ;
    h.ag = function(a, b, c, d) {
      return this.Ka.add(String(a), b, !0, c, d)
    }
    ;
    h.Ua = function(a, b, c, d) {
      return this.Ka.remove(String(a), b, c, d)
    }
    ;
    var te = function(a, b, c, d) {
      b = a.Ka.Aa[String(b)];
      if (!b)
        return !0;
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.od && g.capture == c) {
          var k = g.listener
            , l = g.De || g.src;
          g.je && ae(a.Ka, g);
          e = !1 !== k.call(l, d) && e
        }
      }
      return e && 0 != d.ii
    };
    M.prototype.ye = function(a, b) {
      return this.Ka.ye(String(a), b)
    }
    ;
    M.prototype.Ed = function(a, b, c, d) {
      return this.Ka.Ed(String(a), b, c, d)
    }
    ;
    M.prototype.hasListener = function(a, b) {
      return this.Ka.hasListener(p(a) ? String(a) : void 0, b)
    }
    ;
    var se = function(a) {
      D(a.Ka, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var ue = function(a, b, c) {
      this.ik = c;
      this.jj = a;
      this.qd = b;
      this.Qe = 0;
      this.Ee = null
    };
    ue.prototype.get = function() {
      if (0 < this.Qe) {
        this.Qe--;
        var a = this.Ee;
        this.Ee = a.next;
        a.next = null
      } else
        a = this.jj();
      return a
    }
    ;
    ue.prototype.put = function(a) {
      this.qd(a);
      this.Qe < this.ik && (this.Qe++,
      a.next = this.Ee,
      this.Ee = a)
    }
    ;
    var ve = function(a) {
      m.setTimeout(function() {
        console.warn("Uncaught", a);
      }, 0)
    }, we, xe = function() {
      var a = m.MessageChannel;
      "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !F("Presto") && (a = function() {
        var a = document.createElement("IFRAME");
        a.style.display = "none";
        a.src = "";
        document.documentElement.appendChild(a);
        var b = a.contentWindow;
        a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random()
          , d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
        a = z(function(a) {
          if (("*" == d || a.origin == d) && a.data == c)
            this.port1.onmessage()
        }, this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function() {
            b.postMessage(c, d)
          }
        }
      }
      );
      if ("undefined" !== typeof a && !F("Trident") && !F("MSIE")) {
        var b = new a
          , c = {}
          , d = c;
        b.port1.onmessage = function() {
          if (p(c.next)) {
            c = c.next;
            var a = c.cb;
            c.cb = null;
            a()
          }
        }
        ;
        return function(a) {
          d.next = {
            cb: a
          };
          d = d.next;
          b.port2.postMessage(0)
        }
      }
      return "undefined" !== typeof document && "onreadystatechange"in document.createElement("SCRIPT") ? function(a) {
        var b = document.createElement("SCRIPT");
        b.onreadystatechange = function() {
          b.onreadystatechange = null;
          b.parentNode.removeChild(b);
          b = null;
          a();
          a = null
        }
        ;
        document.documentElement.appendChild(b)
      }
      : function(a) {
        m.setTimeout(a, 0)
      }
    };
    var ye = function() {
      this.nf = this.Rc = null
    }
      , Ae = new ue(function() {
      return new ze
    }
    ,function(a) {
      a.reset()
    }
    ,100);
    ye.prototype.add = function(a, b) {
      var c = Ae.get();
      c.set(a, b);
      this.nf ? this.nf.next = c : (D(!this.Rc),
      this.Rc = c);
      this.nf = c
    }
    ;
    ye.prototype.remove = function() {
      var a = null;
      this.Rc && (a = this.Rc,
      this.Rc = this.Rc.next,
      this.Rc || (this.nf = null),
      a.next = null);
      return a
    }
    ;
    var ze = function() {
      this.next = this.scope = this.fn = null
    };
    ze.prototype.set = function(a, b) {
      this.fn = a;
      this.scope = b;
      this.next = null
    }
    ;
    ze.prototype.reset = function() {
      this.next = this.scope = this.fn = null
    }
    ;
    var Fe = function(a, b) {
      Be || Ce();
      De || (Be(),
      De = !0);
      Ee.add(a, b)
    }, Be, Ce = function() {
      if (-1 != String(m.Promise).indexOf("[native code]")) {
        var a = m.Promise.resolve(void 0);
        Be = function() {
          a.then(Ge)
        }
      } else
        Be = function() {
          var a = Ge;
          !ha(m.setImmediate) || m.Window && m.Window.prototype && !F("Edge") && m.Window.prototype.setImmediate == m.setImmediate ? (we || (we = xe()),
          we(a)) : m.setImmediate(a)
        }
    }, De = !1, Ee = new ye, Ge = function() {
      for (var a; a = Ee.remove(); ) {
        try {
          a.fn.call(a.scope)
        } catch (b) {
          ve(b)
        }
        Ae.put(a)
      }
      De = !1
    };
    var Je = function(a, b) {
      this.i = 0;
      this.hi = void 0;
      this.Tc = this.Mb = this.V = null;
      this.Be = this.Mf = !1;
      if (a != ba)
        try {
          var c = this;
          a.call(b, function(a) {
            He(c, 2, a)
          }, function(a) {
            if (!(a instanceof Ie))
              try {
                if (a instanceof Error)
                  throw a;
                throw Error("Promise rejected.");
              } catch (e) {}
            He(c, 3, a)
          })
        } catch (d) {
          He(this, 3, d)
        }
    }
      , Ke = function() {
      this.next = this.context = this.jd = this.Lc = this.Ac = null;
      this.always = !1
    };
    Ke.prototype.reset = function() {
      this.context = this.jd = this.Lc = this.Ac = null;
      this.always = !1
    }
    ;
    var Le = new ue(function() {
      return new Ke
    }
    ,function(a) {
      a.reset()
    }
    ,100)
      , Me = function(a, b, c) {
      var d = Le.get();
      d.Lc = a;
      d.jd = b;
      d.context = c;
      return d
    }
      , Ne = function() {
      return new Je(function(a, b) {
        b(void 0)
      }
      )
    }
      , Pe = function() {
      var a, b, c = new Je(function(c, e) {
        a = c;
        b = e
      }
      );
      return new Oe(c,a,b)
    };
    Je.prototype.then = function(a, b, c) {
      null != a && kb(a, "opt_onFulfilled should be a function.");
      null != b && kb(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
      return Qe(this, ha(a) ? a : null, ha(b) ? b : null, c)
    }
    ;
    Je.prototype.then = Je.prototype.then;
    Je.prototype.$goog_Thenable = !0;
    Je.prototype.cancel = function(a) {
      0 == this.i && Fe(function() {
        var b = new Ie(a);
        Re(this, b)
      }, this)
    }
    ;
    var Re = function(a, b) {
      if (0 == a.i)
        if (a.V) {
          var c = a.V;
          if (c.Mb) {
            for (var d = 0, e = null, f = null, g = c.Mb; g && (g.always || (d++,
            g.Ac == a && (e = g),
            !(e && 1 < d))); g = g.next)
              e || (f = g);
            e && (0 == c.i && 1 == d ? Re(c, b) : (f ? (d = f,
            D(c.Mb),
            D(null != d),
            d.next == c.Tc && (c.Tc = d),
            d.next = d.next.next) : Se(c),
            Te(c, e, 3, b)))
          }
          a.V = null
        } else
          He(a, 3, b)
    }
      , Ve = function(a, b) {
      a.Mb || 2 != a.i && 3 != a.i || Ue(a);
      D(null != b.Lc);
      a.Tc ? a.Tc.next = b : a.Mb = b;
      a.Tc = b
    }
      , Qe = function(a, b, c, d) {
      var e = Me(null, null, null);
      e.Ac = new Je(function(a, g) {
        e.Lc = b ? function(c) {
          try {
            var e = b.call(d, c);
            a(e)
          } catch (n) {
            g(n)
          }
        }
        : a;
        e.jd = c ? function(b) {
          try {
            var e = c.call(d, b);
            !p(e) && b instanceof Ie ? g(b) : a(e)
          } catch (n) {
            g(n)
          }
        }
        : g
      }
      );
      e.Ac.V = a;
      Ve(a, e);
      return e.Ac
    };
    Je.prototype.$k = function(a) {
      D(1 == this.i);
      this.i = 0;
      He(this, 2, a)
    }
    ;
    Je.prototype.al = function(a) {
      D(1 == this.i);
      this.i = 0;
      He(this, 3, a)
    }
    ;
    var He = function(a, b, c) {
      if (0 == a.i) {
        a === c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself"));
        a.i = 1;
        a: {
          var d = c
            , e = a.$k
            , f = a.al;
          if (d instanceof Je) {
            null != e && kb(e, "opt_onFulfilled should be a function.");
            null != f && kb(f, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
            Ve(d, Me(e || ba, f || null, a));
            var g = !0
          } else {
            if (d)
              try {
                var k = !!d.$goog_Thenable
              } catch (n) {
                k = !1
              }
            else
              k = !1;
            if (k)
              d.then(e, f, a),
              g = !0;
            else {
              if (ia(d))
                try {
                  var l = d.then;
                  if (ha(l)) {
                    We(d, l, e, f, a);
                    g = !0;
                    break a
                  }
                } catch (n) {
                  f.call(a, n);
                  g = !0;
                  break a
                }
              g = !1
            }
          }
        }
        g || (a.hi = c,
        a.i = b,
        a.V = null,
        Ue(a),
        3 != b || c instanceof Ie || Xe(a, c))
      }
    }
      , We = function(a, b, c, d, e) {
      var f = !1
        , g = function(a) {
        f || (f = !0,
        c.call(e, a))
      }
        , k = function(a) {
        f || (f = !0,
        d.call(e, a))
      };
      try {
        b.call(a, g, k)
      } catch (l) {
        k(l)
      }
    }
      , Ue = function(a) {
      a.Mf || (a.Mf = !0,
      Fe(a.rj, a))
    }
      , Se = function(a) {
      var b = null;
      a.Mb && (b = a.Mb,
      a.Mb = b.next,
      b.next = null);
      a.Mb || (a.Tc = null);
      null != b && D(null != b.Lc);
      return b
    };
    Je.prototype.rj = function() {
      for (var a; a = Se(this); )
        Te(this, a, this.i, this.hi);
      this.Mf = !1
    }
    ;
    var Te = function(a, b, c, d) {
      if (3 == c && b.jd && !b.always)
        for (; a && a.Be; a = a.V)
          a.Be = !1;
      if (b.Ac)
        b.Ac.V = null,
        Ye(b, c, d);
      else
        try {
          b.always ? b.Lc.call(b.context) : Ye(b, c, d)
        } catch (e) {
          Ze.call(null, e)
        }
      Le.put(b)
    }
      , Ye = function(a, b, c) {
      2 == b ? a.Lc.call(a.context, c) : a.jd && a.jd.call(a.context, c)
    }
      , Xe = function(a, b) {
      a.Be = !0;
      Fe(function() {
        a.Be && Ze.call(null, b)
      })
    }
      , Ze = ve
      , Ie = function(a) {
      Fa.call(this, a)
    };
    B(Ie, Fa);
    Ie.prototype.name = "cancel";
    var Oe = function(a, b, c) {
      this.promise = a;
      this.resolve = b;
      this.reject = c
    };
    var $e = function(a, b, c) {
      if (ha(a))
        c && (a = z(a, c));
      else if (a && "function" == typeof a.handleEvent)
        a = z(a.handleEvent, a);
      else
        throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : m.setTimeout(a, b || 0)
    };
    var af = function(a, b, c) {
      Gd.call(this);
      this.dg = a;
      this.bk = b || 0;
      this.Qa = c;
      this.bj = z(this.eh, this)
    };
    B(af, Gd);
    h = af.prototype;
    h.Za = 0;
    h.T = function() {
      af.o.T.call(this);
      this.stop();
      delete this.dg;
      delete this.Qa
    }
    ;
    h.start = function(a) {
      this.stop();
      this.Za = $e(this.bj, p(a) ? a : this.bk)
    }
    ;
    h.stop = function() {
      this.Gb() && m.clearTimeout(this.Za);
      this.Za = 0
    }
    ;
    h.fire = function() {
      this.stop();
      this.eh()
    }
    ;
    h.Gb = function() {
      return 0 != this.Za
    }
    ;
    h.eh = function() {
      this.Za = 0;
      this.dg && this.dg.call(this.Qa)
    }
    ;
    var bf = function(a) {
      if (a.classList)
        return a.classList;
      a = a.className;
      return r(a) && a.match(/\S+/g) || []
    }
      , cf = function(a, b) {
      return a.classList ? a.classList.contains(b) : xb(bf(a), b)
    }
      , df = function(a, b) {
      a.classList ? a.classList.add(b) : cf(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }
      , ef = function(a, b) {
      if (a.classList)
        E(b, function(b) {
          df(a, b)
        });
      else {
        var c = {};
        E(bf(a), function(a) {
          c[a] = !0
        });
        E(b, function(a) {
          c[a] = !0
        });
        a.className = "";
        for (var d in c)
          a.className += 0 < a.className.length ? " " + d : d
      }
    }
      , ff = function(a, b) {
      a.classList ? a.classList.remove(b) : cf(a, b) && (a.className = rb(bf(a), function(a) {
        return a != b
      }).join(" "))
    }
      , gf = function(a, b) {
      a.classList ? E(b, function(b) {
        ff(a, b)
      }) : a.className = rb(bf(a), function(a) {
        return !xb(b, a)
      }).join(" ")
    }
      , hf = function(a, b, c) {
      c ? df(a, b) : ff(a, b)
    }
      , jf = function(a, b, c) {
      cf(a, b) && (ff(a, b),
      df(a, c))
    };
    var kf = function(a) {
      Gd.call(this);
      this.Qa = a;
      this.ha = {}
    };
    B(kf, Gd);
    var lf = [];
    kf.prototype.w = function(a, b, c, d) {
      y(b) || (b && (lf[0] = b.toString()),
      b = lf);
      for (var e = 0; e < b.length; e++) {
        var f = L(a, b[e], c || this.handleEvent, d || !1, this.Qa || this);
        if (!f)
          break;
        this.ha[f.key] = f
      }
      return this
    }
    ;
    kf.prototype.ag = function(a, b, c, d) {
      return mf(this, a, b, c, d)
    }
    ;
    var mf = function(a, b, c, d, e, f) {
      if (y(c))
        for (var g = 0; g < c.length; g++)
          mf(a, b, c[g], d, e, f);
      else {
        b = ee(b, c, d || a.handleEvent, e, f || a.Qa || a);
        if (!b)
          return a;
        a.ha[b.key] = b
      }
      return a
    };
    kf.prototype.Ua = function(a, b, c, d, e) {
      if (y(b))
        for (var f = 0; f < b.length; f++)
          this.Ua(a, b[f], c, d, e);
      else
        c = c || this.handleEvent,
        d = ia(d) ? !!d.capture : !!d,
        e = e || this.Qa || this,
        c = fe(c),
        d = !!d,
        b = Vd(a) ? a.Ed(b, c, d, e) : a ? (a = he(a)) ? a.Ed(b, c, d, e) : null : null,
        b && (me(b),
        delete this.ha[b.key]);
      return this
    }
    ;
    kf.prototype.nd = function() {
      ta(this.ha, function(a, b) {
        this.ha.hasOwnProperty(b) && me(a)
      }, this);
      this.ha = {}
    }
    ;
    kf.prototype.T = function() {
      kf.o.T.call(this);
      this.nd()
    }
    ;
    kf.prototype.handleEvent = function() {
      throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    var pf = function(a) {
      return Ya(La(a.replace(nf, function(a, c) {
        return of.test(c) ? "" : " "
      }).replace(/[\t\n ]+/g, " ")))
    }
      , of = /^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i
      , nf = /<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;
    var qf = function(a, b, c, d) {
      this.top = a;
      this.right = b;
      this.bottom = c;
      this.left = d
    };
    h = qf.prototype;
    h.clone = function() {
      return new qf(this.top,this.right,this.bottom,this.left)
    }
    ;
    h.toString = function() {
      return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    }
    ;
    h.contains = function(a) {
      return this && a ? a instanceof qf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    h.expand = function(a, b, c, d) {
      ia(a) ? (this.top -= a.top,
      this.right += a.right,
      this.bottom += a.bottom,
      this.left -= a.left) : (this.top -= a,
      this.right += Number(b),
      this.bottom += Number(c),
      this.left -= Number(d));
      return this
    }
    ;
    h.ceil = function() {
      this.top = Math.ceil(this.top);
      this.right = Math.ceil(this.right);
      this.bottom = Math.ceil(this.bottom);
      this.left = Math.ceil(this.left);
      return this
    }
    ;
    h.floor = function() {
      this.top = Math.floor(this.top);
      this.right = Math.floor(this.right);
      this.bottom = Math.floor(this.bottom);
      this.left = Math.floor(this.left);
      return this
    }
    ;
    h.round = function() {
      this.top = Math.round(this.top);
      this.right = Math.round(this.right);
      this.bottom = Math.round(this.bottom);
      this.left = Math.round(this.left);
      return this
    }
    ;
    h.translate = function(a, b) {
      a instanceof J ? (this.left += a.x,
      this.right += a.x,
      this.top += a.y,
      this.bottom += a.y) : (ib(a),
      this.left += a,
      this.right += a,
      u(b) && (this.top += b,
      this.bottom += b));
      return this
    }
    ;
    h.scale = function(a, b) {
      b = u(b) ? b : a;
      this.left *= a;
      this.right *= a;
      this.top *= b;
      this.bottom *= b;
      return this
    }
    ;
    var rf = function(a, b, c, d) {
      this.left = a;
      this.top = b;
      this.width = c;
      this.height = d
    };
    h = rf.prototype;
    h.clone = function() {
      return new rf(this.left,this.top,this.width,this.height)
    }
    ;
    h.toString = function() {
      return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
    }
    ;
    h.contains = function(a) {
      return a instanceof J ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    }
    ;
    h.ceil = function() {
      this.left = Math.ceil(this.left);
      this.top = Math.ceil(this.top);
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this
    }
    ;
    h.floor = function() {
      this.left = Math.floor(this.left);
      this.top = Math.floor(this.top);
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this
    }
    ;
    h.round = function() {
      this.left = Math.round(this.left);
      this.top = Math.round(this.top);
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this
    }
    ;
    h.translate = function(a, b) {
      a instanceof J ? (this.left += a.x,
      this.top += a.y) : (this.left += ib(a),
      u(b) && (this.top += b));
      return this
    }
    ;
    h.scale = function(a, b) {
      b = u(b) ? b : a;
      this.left *= a;
      this.width *= a;
      this.top *= b;
      this.height *= b;
      return this
    }
    ;
    var sf = function(a, b) {
      var c = Zc(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
      , tf = function(a, b) {
      return sf(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
      , vf = function(a, b, c) {
      if (b instanceof J) {
        var d = b.x;
        b = b.y
      } else
        d = b,
        b = c;
      a.style.left = uf(d);
      a.style.top = uf(b)
    }
      , wf = function(a) {
      try {
        var b = a.getBoundingClientRect()
      } catch (c) {
        return {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      }
      G && a.ownerDocument.body && (a = a.ownerDocument,
      b.left -= a.documentElement.clientLeft + a.body.clientLeft,
      b.top -= a.documentElement.clientTop + a.body.clientTop);
      return b
    }
      , xf = function(a) {
      if (G && !fc(8))
        return D(a && "offsetParent"in a),
        a.offsetParent;
      var b = Zc(a)
        , c = tf(a, "position")
        , d = "fixed" == c || "absolute" == c;
      for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (11 == a.nodeType && a.host && (a = a.host),
        c = tf(a, "position"),
        d = d && "static" == c && a != b.documentElement && a != b.body,
        !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
          return a;
      return null
    }
      , zf = function(a) {
      for (var b = new qf(0,Infinity,Infinity,0), c = K(a), d = c.H.body, e = c.H.documentElement, f = gd(c.H); a = xf(a); )
        if (!(G && 0 == a.clientWidth || H && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != tf(a, "overflow")) {
          var g = yf(a)
            , k = new J(a.clientLeft,a.clientTop);
          g.x += k.x;
          g.y += k.y;
          b.top = Math.max(b.top, g.y);
          b.right = Math.min(b.right, g.x + a.clientWidth);
          b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
          b.left = Math.max(b.left, g.x)
        }
      d = f.scrollLeft;
      f = f.scrollTop;
      b.left = Math.max(b.left, d);
      b.top = Math.max(b.top, f);
      c = ed(hd(c.H) || window);
      b.right = Math.min(b.right, d + c.width);
      b.bottom = Math.min(b.bottom, f + c.height);
      return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }
      , yf = function(a) {
      var b = Zc(a);
      lb(a, "Parameter is required");
      var c = new J(0,0);
      var d = b ? Zc(b) : document;
      d = !G || fc(9) || dd(K(d).H) ? d.documentElement : d.body;
      if (a == d)
        return c;
      a = wf(a);
      b = id(K(b).H);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c
    }
      , Bf = function(a, b) {
      a = Af(a);
      b = Af(b);
      return new J(a.x - b.x,a.y - b.y)
    }
      , Cf = function(a) {
      a = wf(a);
      return new J(a.left,a.top)
    }
      , Af = function(a) {
      D(a);
      if (1 == a.nodeType)
        return Cf(a);
      a = a.changedTouches ? a.changedTouches[0] : a;
      return new J(a.clientX,a.clientY)
    }
      , uf = function(a) {
      "number" == typeof a && (a += "px");
      return a
    }
      , Ef = function(a) {
      var b = Df;
      if ("none" != tf(a, "display"))
        return b(a);
      var c = a.style
        , d = c.display
        , e = c.visibility
        , f = c.position;
      c.visibility = "hidden";
      c.position = "absolute";
      c.display = "inline";
      a = b(a);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a
    }
      , Df = function(a) {
      var b = a.offsetWidth
        , c = a.offsetHeight
        , d = H && !b && !c;
      return p(b) && !d || !a.getBoundingClientRect ? new Xc(b,c) : (a = wf(a),
      new Xc(a.right - a.left,a.bottom - a.top))
    }
      , Ff = function(a) {
      var b = yf(a);
      a = Ef(a);
      return new rf(b.x,b.y,a.width,a.height)
    }
      , N = function(a, b) {
      a.style.display = b ? "" : "none"
    }
      , Gf = function(a) {
      return "rtl" == tf(a, "direction")
    }
      , Hf = Rb ? "MozUserSelect" : H || Pb ? "WebkitUserSelect" : null
      , If = function(a, b, c) {
      c = c ? null : a.getElementsByTagName("*");
      if (Hf) {
        if (b = b ? "none" : "",
        a.style && (a.style[Hf] = b),
        c) {
          a = 0;
          for (var d; d = c[a]; a++)
            d.style && (d.style[Hf] = b)
        }
      } else if (G || Ob)
        if (b = b ? "on" : "",
        a.setAttribute("unselectable", b),
        c)
          for (a = 0; d = c[a]; a++)
            d.setAttribute("unselectable", b)
    }
      , Jf = function(a, b) {
      if (/^\d+px?$/.test(b))
        return parseInt(b, 10);
      var c = a.style.left
        , d = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = b;
      b = a.style.pixelLeft;
      a.style.left = c;
      a.runtimeStyle.left = d;
      return +b
    }
      , Kf = function(a, b) {
      return (b = a.currentStyle ? a.currentStyle[b] : null) ? Jf(a, b) : 0
    }
      , Lf = {
      thin: 2,
      medium: 4,
      thick: 6
    }
      , Mf = function(a, b) {
      if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
        return 0;
      b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      return b in Lf ? Lf[b] : Jf(a, b)
    }
      , Nf = function(a) {
      if (G && !fc(9)) {
        var b = Mf(a, "borderLeft")
          , c = Mf(a, "borderRight")
          , d = Mf(a, "borderTop");
        a = Mf(a, "borderBottom");
        return new qf(d,c,a,b)
      }
      b = sf(a, "borderLeftWidth");
      c = sf(a, "borderRightWidth");
      d = sf(a, "borderTopWidth");
      a = sf(a, "borderBottomWidth");
      return new qf(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
    };
    var Of = function() {
      if (Tb) {
        var a = /Windows NT ([0-9.]+)/;
        return (a = a.exec(Db)) ? a[1] : "0"
      }
      return Sb ? (a = /10[_.][0-9_.]+/,
      (a = a.exec(Db)) ? a[0].replace(/_/g, ".") : "10") : Ub ? (a = /Android\s+([^\);]+)(\)|;)/,
      (a = a.exec(Db)) ? a[1] : "") : Vb || Wb || Xb ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/,
      (a = a.exec(Db)) ? a[1].replace(/_/g, ".") : "") : ""
    }();
    var Pf = F("Firefox")
      , Qf = Ib() || F("iPod")
      , Rf = F("iPad")
      , Sf = F("Android") && !(Gb() || F("Firefox") || F("Opera") || F("Silk"))
      , Tf = Gb()
      , Uf = Hb() && !Jb();
    var Vf = function(a) {
      return (a = a.exec(Db)) ? a[1] : ""
    }
      , Wf = function() {
      if (Pf)
        return Vf(/Firefox\/([0-9.]+)/);
      if (G || Pb || Ob)
        return dc;
      if (Tf)
        return Jb() ? Vf(/CriOS\/([0-9.]+)/) : Vf(/Chrome\/([0-9.]+)/);
      if (Uf && !Jb())
        return Vf(/Version\/([0-9.]+)/);
      if (Qf || Rf) {
        var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Db);
        if (a)
          return a[1] + "." + a[2]
      } else if (Sf)
        return (a = Vf(/Android\s+([0-9.]+)/)) ? a : Vf(/Version\/([0-9.]+)/);
      return ""
    }();
    var Xf = function(a) {
      if (a = a.offsetParent) {
        var b = "HTML" == a.tagName || "BODY" == a.tagName;
        if (!b || "static" != tf(a, "position")) {
          var c = yf(a);
          if (!b) {
            b = Gf(a);
            var d = Uf && 0 <= cb(Wf, 10)
              , e = Yb && 0 <= cb(Of, 10);
            b = b && (Rb || d || e) ? -a.scrollLeft : !b || Qb && I("8") || "visible" == tf(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
            c = Wc(c, new J(b,a.scrollTop))
          }
        }
      }
      return c || new J
    }
      , Yf = function(a, b) {
      return (b & 8 && Gf(a) ? b ^ 4 : b) & -9
    };
    var Zf = function() {};
    Zf.prototype.ei = function() {}
    ;
    var $f = function(a, b) {
      this.le = a;
      this.lj = !!b;
      this.Ng = {
        0: this.le + "-arrowright",
        1: this.le + "-arrowup",
        2: this.le + "-arrowdown",
        3: this.le + "-arrowleft"
      }
    };
    B($f, Zf);
    h = $f.prototype;
    h.Fh = !1;
    h.yf = 2;
    h.Qg = 20;
    h.Cf = 3;
    h.zi = null;
    h.ig = -5;
    h.wf = !1;
    h.setPosition = function(a, b, c, d) {
      null != a && (this.Cf = a);
      null != b && (this.yf = b);
      u(c) && (this.Qg = Math.max(c, 15));
      u(d) && (this.ig = d)
    }
    ;
    h.ei = function(a, b, c) {
      D(this.Pg, "Must call setElements first.");
      a = this.yf;
      2 == a && (a = 0);
      ag(this, this.Cf, a, 2 == this.yf ? cg(this.Cf) ? this.Ab.offsetHeight / 2 : this.Ab.offsetWidth / 2 : this.Qg, 0, c)
    }
    ;
    var ag = function(a, b, c, d, e, f) {
      if (a.zc) {
        var g = dg(b, c)
          , k = a.zc
          , l = a.Ab
          , n = a.zi;
        var q = Ef(k);
        a: {
          q = (cg(b) ? q.height / 2 : q.width / 2) - d;
          var t = Yf(k, g);
          if (n)
            n = n.clone(),
            l && (l = Xf(l),
            n.left += l.x,
            n.right += l.x,
            n.top += l.y,
            n.bottom += l.y);
          else if (n = zf(k),
          !n)
            break a;
          k = Ff(k);
          k = new qf(k.top,k.left + k.width,k.top + k.height,k.left);
          cg(b) ? k.top < n.top && !(t & 1) ? q -= n.top - k.top : k.bottom > n.bottom && t & 1 && (q -= k.bottom - n.bottom) : k.left < n.left && !(t & 4) ? q -= n.left - k.left : k.right > n.right && t & 4 && (q -= k.right - n.right)
        }
        k = cg(b) ? new J(a.ig,q) : new J(q,a.ig);
        t = cg(b) ? 6 : 9;
        a.wf && 2 == e && (t = cg(b) ? 4 : 1);
        q = b ^ 3;
        cg(b) && "rtl" == a.zc.dir && (q = b);
        var v = a.zc
          , ca = dg(q, c);
        q = a.Ab;
        t = a.Fh ? t : 0;
        n = a.zi;
        D(q);
        l = Xf(q);
        var w = Ff(v)
          , Q = zf(v);
        if (Q) {
          var ja = new rf(Q.left,Q.top,Q.right - Q.left,Q.bottom - Q.top);
          Q = Math.max(w.left, ja.left);
          var Qa = Math.min(w.left + w.width, ja.left + ja.width);
          if (Q <= Qa) {
            var sb = Math.max(w.top, ja.top);
            ja = Math.min(w.top + w.height, ja.top + ja.height);
            sb <= ja && (w.left = Q,
            w.top = sb,
            w.width = Qa - Q,
            w.height = ja - sb)
          }
        }
        Q = K(v);
        sb = K(q);
        if (Q.H != sb.H) {
          Qa = Q.H.body;
          sb = hd(sb.H);
          ja = new J(0,0);
          var Ra = (Ra = Zc(Qa)) ? hd(Ra) : window;
          if (Lb(Ra, "parent")) {
            var bg = Qa;
            do {
              var zj = Ra == sb ? yf(bg) : Cf(D(bg));
              ja.x += zj.x;
              ja.y += zj.y
            } while (Ra && Ra != sb && Ra != Ra.parent && (bg = Ra.frameElement) && (Ra = Ra.parent))
          }
          Qa = Wc(ja, yf(Qa));
          !G || fc(9) || dd(Q.H) || (Qa = Wc(Qa, id(Q.H)));
          w.left += Qa.x;
          w.top += Qa.y
        }
        v = Yf(v, ca);
        ca = w.left;
        v & 4 ? ca += w.width : v & 2 && (ca += w.width / 2);
        w = new J(ca,w.top + (v & 1 ? w.height : 0));
        w = Wc(w, l);
        k && (w.x += (v & 4 ? -1 : 1) * k.x,
        w.y += (v & 1 ? -1 : 1) * k.y);
        if (t)
          if (n)
            var C = n;
          else if (C = zf(q))
            C.top -= l.y,
            C.right -= l.x,
            C.bottom -= l.y,
            C.left -= l.x;
        k = w.clone();
        l = Yf(q, g);
        g = Ef(q);
        n = g.clone();
        k = k.clone();
        n = n.clone();
        v = 0;
        if (f || 0 != l)
          l & 4 ? k.x -= n.width + (f ? f.right : 0) : l & 2 ? k.x -= n.width / 2 : f && (k.x += f.left),
          l & 1 ? k.y -= n.height + (f ? f.bottom : 0) : f && (k.y += f.top);
        t && (C ? (l = k,
        v = n,
        w = 0,
        65 == (t & 65) && (l.x < C.left || l.x >= C.right) && (t &= -2),
        132 == (t & 132) && (l.y < C.top || l.y >= C.bottom) && (t &= -5),
        l.x < C.left && t & 1 && (l.x = C.left,
        w |= 1),
        t & 16 && (ca = l.x,
        l.x < C.left && (l.x = C.left,
        w |= 4),
        l.x + v.width > C.right && (v.width = Math.min(C.right - l.x, ca + v.width - C.left),
        v.width = Math.max(v.width, 0),
        w |= 4)),
        l.x + v.width > C.right && t & 1 && (l.x = Math.max(C.right - v.width, C.left),
        w |= 1),
        t & 2 && (w |= (l.x < C.left ? 16 : 0) | (l.x + v.width > C.right ? 32 : 0)),
        l.y < C.top && t & 4 && (l.y = C.top,
        w |= 2),
        t & 32 && (ca = l.y,
        l.y < C.top && (l.y = C.top,
        w |= 8),
        l.y + v.height > C.bottom && (v.height = Math.min(C.bottom - l.y, ca + v.height - C.top),
        v.height = Math.max(v.height, 0),
        w |= 8)),
        l.y + v.height > C.bottom && t & 4 && (l.y = Math.max(C.bottom - v.height, C.top),
        w |= 2),
        t & 8 && (w |= (l.y < C.top ? 64 : 0) | (l.y + v.height > C.bottom ? 128 : 0)),
        C = w) : C = 256,
        v = C);
        t = new rf(0,0,0,0);
        t.left = k.x;
        t.top = k.y;
        t.width = n.width;
        t.height = n.height;
        C = v;
        C & 496 || (vf(q, new J(t.left,t.top)),
        n = new Xc(t.width,t.height),
        g == n || g && n && g.width == n.width && g.height == n.height || (g = n,
        t = Zc(q),
        k = dd(K(t).H),
        !G || I("10") || k && I("8") ? (q = q.style,
        Rb ? q.MozBoxSizing = "border-box" : H ? q.WebkitBoxSizing = "border-box" : q.boxSizing = "border-box",
        q.width = Math.max(g.width, 0) + "px",
        q.height = Math.max(g.height, 0) + "px") : (t = q.style,
        k ? (G ? (k = Kf(q, "paddingLeft"),
        n = Kf(q, "paddingRight"),
        l = Kf(q, "paddingTop"),
        v = Kf(q, "paddingBottom"),
        k = new qf(l,n,v,k)) : (k = sf(q, "paddingLeft"),
        n = sf(q, "paddingRight"),
        l = sf(q, "paddingTop"),
        v = sf(q, "paddingBottom"),
        k = new qf(parseFloat(l),parseFloat(n),parseFloat(v),parseFloat(k))),
        q = Nf(q),
        t.pixelWidth = g.width - q.left - k.left - k.right - q.right,
        t.pixelHeight = g.height - q.top - k.top - k.bottom - q.bottom) : (t.pixelWidth = g.width,
        t.pixelHeight = g.height))));
        if (2 != e && C & 496) {
          ag(a, b ^ 3, c, d, a.wf && 0 == e ? 1 : 2, f);
          return
        }
        !a.lj || C & 496 || (e = parseFloat(a.Ab.style.left),
        f = parseFloat(a.Ab.style.top),
        D(!isNaN(e) && !isNaN(f), "Could not parse position."),
        isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1 || vf(a.Ab, Math.round(e), Math.round(f)))
      }
      eg(a, b, c, d)
    }
      , eg = function(a, b, c, d) {
      var e = a.Pg;
      ta(a.Ng, function(a) {
        hf(e, a, !1)
      }, a);
      df(e, a.Ng[b]);
      e.style.top = e.style.left = e.style.right = e.style.bottom = "";
      a.zc ? (c = Bf(a.zc, a.Ab),
      d = fg(a.zc, b),
      cg(b) ? e.style.top = gg(c.y + d.y, a.Ab.offsetHeight - 15) + "px" : e.style.left = gg(c.x + d.x, a.Ab.offsetWidth - 15) + "px") : e.style[0 == c ? cg(b) ? "top" : "left" : cg(b) ? "bottom" : "right"] = d + "px"
    }
      , gg = function(a, b) {
      return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
    }
      , dg = function(a, b) {
      switch (a) {
      case 2:
        return 0 == b ? 1 : 5;
      case 1:
        return 0 == b ? 0 : 4;
      case 0:
        return 0 == b ? 12 : 13;
      default:
        return 0 == b ? 8 : 9
      }
    }
      , fg = function(a, b) {
      var c = 0
        , d = 0;
      a = Ef(a);
      switch (b) {
      case 2:
        c = a.width / 2;
        break;
      case 1:
        c = a.width / 2;
        d = a.height;
        break;
      case 0:
        d = a.height / 2;
        break;
      case 3:
        c = a.width,
        d = a.height / 2
      }
      return new J(c,d)
    }
      , cg = function(a) {
      return 0 == a || 3 == a
    };
    var hg = function(a) {
      Gd.call(this);
      this.Cd = a || K()
    };
    B(hg, Gd);
    hg.prototype.Eh = function() {
      Cd(this.b(), this.Wb());
      Ed(this.b(), "live", "polite")
    }
    ;
    hg.prototype.Wb = function() {
      return "tooltip"
    }
    ;
    var jg = function(a) {
      hg.call(this, a);
      this.Yg = this.Cd.S("DIV", ig() + "-contentId");
      this.Og = this.Cd.S("DIV", ig() + "-arrow", this.Cd.S("DIV", ig() + "-arrowimplbefore"), this.Cd.S("DIV", ig() + "-arrowimplafter"));
      this.Bg = this.Cd.S("DIV", {
        "class": ig(),
        role: "tooltip"
      }, this.Yg, this.Og);
      this.Eh()
    };
    B(jg, hg);
    var ig = function() {
      return "devsite-tooltip"
    };
    jg.prototype.b = function() {
      return this.Bg
    }
    ;
    jg.prototype.W = function() {
      return this.Yg
    }
    ;
    jg.prototype.T = function() {
      this.Bg && md(this.Bg)
    }
    ;
    var kg = function(a) {
      jg.call(this, a)
    };
    B(kg, jg);
    kg.prototype.Eh = function() {
      Cd(this.b(), this.Wb())
    }
    ;
    var ng = function(a) {
      a = a || K();
      var b = ma(a.H);
      lg[b] || (lg[b] = new mg(a))
    }
      , og = 300
      , lg = {}
      , mg = function(a) {
      kf.call(this);
      this.fh = a;
      this.$g = new af(this.Yk,0,this);
      Hd(this, pa(Id, this.$g));
      var b = window;
      this.Pe = ha(b.MutationObserver) ? new b.MutationObserver(z(this.yj, this)) : null;
      a = a.H;
      this.w(a, ["mouseout", "mousedown", "click", "blur", Pd, "keydown"], this.fj, !0);
      this.w(a, ["mouseover", "focus", Od], this.Qk, !0)
    };
    B(mg, kf);
    mg.prototype.T = function() {
      pg(this);
      mg.o.T.call(this)
    }
    ;
    var qg = function(a, b) {
      switch (b.type) {
      case "mousedown":
      case "mouseover":
      case "mouseout":
      case "click":
        a.Gh = !1;
        break;
      case "keydown":
        a.Gh = !0
      }
    };
    mg.prototype.Qk = function(a) {
      this.Pe && this.Pe.disconnect();
      qg(this, a);
      var b = a.target;
      a = "focus" == a.type || a.type == Od;
      var c = this.ya && pd(this.ya.W(), b);
      if (this.Gh || !a || c) {
        this.dk = a;
        if (a = b && b.getAttribute && this.Pe)
          a = b.getAttribute("role") || null,
          a = xb(Bd, a);
        a && (this.Pe.observe(b, {
          attributes: !0
        }),
        (a = Fd(b)) && (b = a));
        this.Sc = b
      } else
        this.Sc = null;
      rg(this)
    }
    ;
    mg.prototype.fj = function(a) {
      qg(this, a);
      var b = a.target;
      a = "mousedown" == a.type || "click" == a.type;
      b = this.ya && pd(this.ya.W(), b);
      a && b || (this.Sc = null,
      rg(this))
    }
    ;
    mg.prototype.yj = function(a) {
      E(a, z(function(a) {
        var b = Fd(a.target);
        b && "aria-activedescendant" == a.attributeName && (this.Sc = b,
        rg(this))
      }, this))
    }
    ;
    var rg = function(a) {
      pg(a);
      a.$g.start(a.qb ? 50 : og)
    }
      , pg = function(a) {
      a.ef && (m.clearTimeout(a.ef),
      a.ef = 0,
      a.qb = null)
    };
    mg.prototype.Yk = function() {
      if (!this.Sc)
        sg(this),
        this.qb = null;
      else if (!(this.qb && this.ya && pd(this.ya.b(), this.Sc)) || this.qb.getAttribute("data-tooltip-unhoverable")) {
        var a = yd(this.Sc, function(a) {
          return a.getAttribute && (a.getAttribute("data-tooltip-contained") || a.getAttribute("data-tooltip") || a.Md) && !a.getAttribute("data-tooltip-suspended")
        })
          , b = !1;
        this.qb && this.qb != a && (sg(this),
        this.qb = null,
        b = !0);
        if (!this.qb && a && (this.qb = a,
        tg(this, a))) {
          var c = Sc;
          if (a.getAttribute("data-tooltip-contained"))
            for (var d = ad("devsite-tooltip-data", a), e = 0; e < d.length; e++) {
              if (d[e].parentNode == a) {
                c = d[e].cloneNode(!0);
                break
              }
            }
          else
            c = a.Md ? a.Md : Mc(a.getAttribute("data-tooltip"));
          d = a.getAttribute("data-tooltip-align");
          e = a.getAttribute("data-tooltip-class");
          var f = a.getAttribute("data-tooltip-offset");
          f = Ka($a(f)) ? -1 : Number(f);
          if (!b && (a = a.getAttribute("data-tooltip-delay"),
          a = Math.max(0, a - og))) {
            this.ef = $e(pa(this.oi, this.qb, c, d, f, e), a, this);
            return
          }
          this.oi(this.qb, c, d, f, e)
        }
      }
    }
    ;
    var tg = function(a, b) {
      return b.getAttribute("data-tooltip-only-on-overflow") && b.offsetWidth >= b.scrollWidth && b.offsetHeight >= b.scrollHeight || a.dk && "mouse" == b.getAttribute("data-tooltip-trigger") ? !1 : !0
    }
      , ug = function(a) {
      if (a)
        switch (a.toLowerCase().split(",")[0]) {
        case "l":
          return 0;
        case "t":
          return 2;
        case "r":
          return 3
        }
      return 1
    };
    mg.prototype.oi = function(a, b, c, d, e) {
      this.ef = 0;
      if (!this.ya) {
        this.ya = new kg(this.fh);
        sg(this);
        this.fh.H.body.appendChild(this.ya.b());
        Hd(this, pa(Id, this.ya));
        this.vd = new $f(ig(),!0);
        this.vd.Fh = !0;
        this.vd.wf = !0;
        var f = this.vd
          , g = this.ya.Og;
        f.Ab = this.ya.b();
        f.Pg = g
      }
      a: {
        if (c)
          switch (c.toLowerCase().split(",")[1]) {
          case "l":
            f = 0;
            break a;
          case "r":
            f = 1;
            break a
          }
        f = 2
      }
      this.vd.setPosition(ug(c), f, void 0, d);
      ff(this.ya.b(), "devsite-tooltip-hide");
      this.kf != e && (this.kf && !Ka($a(this.kf)) && ff(this.ya.b(), this.kf),
      Ka($a(e)) || df(this.ya.b(), e),
      this.kf = e);
      vf(this.ya.b(), 0, 0);
      if (b instanceof Ic)
        Vc(this.ya.W(), b);
      else
        for (ld(this.ya.W()); c = b.firstChild; )
          this.ya.W().appendChild(c);
      this.vd.zc = a;
      this.vd.ei(null, 0)
    }
    ;
    var sg = function(a) {
      a.ya && df(a.ya.b(), "devsite-tooltip-hide")
    };
    var vg = function(a) {
      return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    }
      , wg = function(a) {
      a = String(a);
      if (vg(a))
        try {
          return eval("(" + a + ")")
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    }
      , xg = function(a) {
      this.Ye = a
    };
    xg.prototype.serialize = function(a) {
      var b = [];
      yg(this, a, b);
      return b.join("")
    }
    ;
    var yg = function(a, b, c) {
      if (null == b)
        c.push("null");
      else {
        if ("object" == typeof b) {
          if (y(b)) {
            a.serializeArray(b, c);
            return
          }
          if (b instanceof String || b instanceof Number || b instanceof Boolean)
            b = b.valueOf();
          else {
            c.push("{");
            var d = "", e;
            for (e in b)
              if (Object.prototype.hasOwnProperty.call(b, e)) {
                var f = b[e];
                "function" != typeof f && (c.push(d),
                zg(e, c),
                c.push(":"),
                yg(a, a.Ye ? a.Ye.call(b, e, f) : f, c),
                d = ",")
              }
            c.push("}");
            return
          }
        }
        switch (typeof b) {
        case "string":
          zg(b, c);
          break;
        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
          break;
        case "boolean":
          c.push(String(b));
          break;
        case "function":
          c.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof b);
        }
      }
    }
      , Ag = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b"
    }
      , Bg = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g
      , zg = function(a, b) {
      b.push('"', a.replace(Bg, function(a) {
        var b = Ag[a];
        b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1),
        Ag[a] = b);
        return b
      }), '"')
    };
    xg.prototype.serializeArray = function(a, b) {
      var c = a.length;
      b.push("[");
      for (var d = "", e = 0; e < c; e++)
        b.push(d),
        d = a[e],
        yg(this, this.Ye ? this.Ye.call(a, String(e), d) : d, b),
        d = ",";
      b.push("]")
    }
    ;
    var Cg = function(a, b, c, d, e) {
      this.reset(a, b, c, d, e)
    };
    Cg.prototype.jh = null;
    var Dg = 0;
    Cg.prototype.reset = function(a, b, c, d, e) {
      "number" == typeof e || Dg++;
      d || qa();
      this.Od = a;
      this.sk = b;
      delete this.jh
    }
    ;
    Cg.prototype.mi = function(a) {
      this.Od = a
    }
    ;
    var Eg = function(a) {
      this.Oh = a;
      this.zh = this.Ca = this.Od = this.V = null
    }
      , Fg = function(a, b) {
      this.name = a;
      this.value = b
    };
    Fg.prototype.toString = function() {
      return this.name
    }
    ;
    var Gg = new Fg("SEVERE",1E3)
      , Hg = new Fg("INFO",800)
      , Ig = new Fg("CONFIG",700)
      , Jg = new Fg("FINE",500);
    Eg.prototype.getName = function() {
      return this.Oh
    }
    ;
    Eg.prototype.getParent = function() {
      return this.V
    }
    ;
    Eg.prototype.qh = function() {
      this.Ca || (this.Ca = {});
      return this.Ca
    }
    ;
    Eg.prototype.mi = function(a) {
      this.Od = a
    }
    ;
    var Kg = function(a) {
      if (a.Od)
        return a.Od;
      if (a.V)
        return Kg(a.V);
      hb("Root logger has no level set.");
      return null
    };
    Eg.prototype.log = function(a, b, c) {
      if (a.value >= Kg(this).value)
        for (ha(b) && (b = b()),
        a = new Cg(a,String(b),this.Oh),
        c && (a.jh = c),
        c = "log:" + a.sk,
        (b = m.console) && b.timeStamp && b.timeStamp(c),
        (b = m.msWriteProfilerMark) && b(c),
        c = this; c; ) {
          var d = c
            , e = a;
          if (d.zh)
            for (var f = 0; b = d.zh[f]; f++)
              b(e);
          c = c.getParent()
        }
    }
    ;
    Eg.prototype.info = function(a, b) {
      this.log(Hg, a, b)
    }
    ;
    var Lg = {}
      , Mg = null
      , Ng = function(a) {
      Mg || (Mg = new Eg(""),
      Lg[""] = Mg,
      Mg.mi(Ig));
      var b;
      if (!(b = Lg[a])) {
        b = new Eg(a);
        var c = a.lastIndexOf(".")
          , d = a.substr(c + 1);
        c = Ng(a.substr(0, c));
        c.qh()[d] = b;
        b.V = c;
        Lg[a] = b
      }
      return b
    };
    var Og = "StopIteration"in m ? m.StopIteration : {
      message: "StopIteration",
      stack: ""
    }
      , Pg = function() {};
    Pg.prototype.next = function() {
      throw Og;
    }
    ;
    Pg.prototype.Oi = function() {
      return this
    }
    ;
    var Qg = function(a, b) {
      a && a.log(Jg, b, void 0)
    };
    var Rg = function() {};
    Rg.prototype.Ug = null;
    var Tg = function(a) {
      var b;
      (b = a.Ug) || (b = {},
      Sg(a) && (b[0] = !0,
      b[1] = !0),
      b = a.Ug = b);
      return b
    };
    var Ug, Vg = function() {};
    B(Vg, Rg);
    var Wg = function(a) {
      return (a = Sg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }
      , Sg = function(a) {
      if (!a.Dh && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];
          try {
            return new ActiveXObject(d),
            a.Dh = d
          } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      return a.Dh
    };
    Ug = new Vg;
    var Xg = function(a, b) {
      this.rb = {};
      this.ha = [];
      this.ee = this.ta = 0;
      var c = arguments.length;
      if (1 < c) {
        if (c % 2)
          throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
          this.set(arguments[d], arguments[d + 1])
      } else
        a && this.addAll(a)
    };
    h = Xg.prototype;
    h.Ya = function() {
      Yg(this);
      for (var a = [], b = 0; b < this.ha.length; b++)
        a.push(this.rb[this.ha[b]]);
      return a
    }
    ;
    h.Eb = function() {
      Yg(this);
      return this.ha.concat()
    }
    ;
    h.Bc = function(a) {
      return Zg(this.rb, a)
    }
    ;
    h.clear = function() {
      this.rb = {};
      this.ee = this.ta = this.ha.length = 0
    }
    ;
    h.remove = function(a) {
      return Zg(this.rb, a) ? (delete this.rb[a],
      this.ta--,
      this.ee++,
      this.ha.length > 2 * this.ta && Yg(this),
      !0) : !1
    }
    ;
    var Yg = function(a) {
      if (a.ta != a.ha.length) {
        for (var b = 0, c = 0; b < a.ha.length; ) {
          var d = a.ha[b];
          Zg(a.rb, d) && (a.ha[c++] = d);
          b++
        }
        a.ha.length = c
      }
      if (a.ta != a.ha.length) {
        var e = {};
        for (c = b = 0; b < a.ha.length; )
          d = a.ha[b],
          Zg(e, d) || (a.ha[c++] = d,
          e[d] = 1),
          b++;
        a.ha.length = c
      }
    };
    h = Xg.prototype;
    h.get = function(a, b) {
      return Zg(this.rb, a) ? this.rb[a] : b
    }
    ;
    h.set = function(a, b) {
      Zg(this.rb, a) || (this.ta++,
      this.ha.push(a),
      this.ee++);
      this.rb[a] = b
    }
    ;
    h.addAll = function(a) {
      if (a instanceof Xg) {
        var b = a.Eb();
        a = a.Ya()
      } else
        b = wa(a),
        a = va(a);
      for (var c = 0; c < b.length; c++)
        this.set(b[c], a[c])
    }
    ;
    h.forEach = function(a, b) {
      for (var c = this.Eb(), d = 0; d < c.length; d++) {
        var e = c[d]
          , f = this.get(e);
        a.call(b, f, e, this)
      }
    }
    ;
    h.clone = function() {
      return new Xg(this)
    }
    ;
    h.Oi = function(a) {
      Yg(this);
      var b = 0
        , c = this.ee
        , d = this
        , e = new Pg;
      e.next = function() {
        if (c != d.ee)
          throw Error("The map has changed since the iterator was created");
        if (b >= d.ha.length)
          throw Og;
        var e = d.ha[b++];
        return a ? e : d.rb[e]
      }
      ;
      return e
    }
    ;
    var Zg = function(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b)
    };
    var $g = function(a) {
      if (a.Ya && "function" == typeof a.Ya)
        return a.Ya();
      if (r(a))
        return a.split("");
      if (fa(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
          b.push(a[d]);
        return b
      }
      return va(a)
    }
      , ah = function(a, b, c) {
      if (a.forEach && "function" == typeof a.forEach)
        a.forEach(b, c);
      else if (fa(a) || r(a))
        E(a, b, c);
      else {
        if (a.Eb && "function" == typeof a.Eb)
          var d = a.Eb();
        else if (a.Ya && "function" == typeof a.Ya)
          d = void 0;
        else if (fa(a) || r(a)) {
          d = [];
          for (var e = a.length, f = 0; f < e; f++)
            d.push(f)
        } else
          d = wa(a);
        e = $g(a);
        f = e.length;
        for (var g = 0; g < f; g++)
          b.call(c, e[g], d && d[g], a)
      }
    };
    var bh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
      , ch = function(a) {
      return a.match(bh)
    }
      , dh = function(a) {
      return a ? decodeURI(a) : a
    }
      , eh = function(a) {
      var b = ch(a);
      a = b[1];
      var c = b[2]
        , d = b[3];
      b = b[4];
      var e = "";
      a && (e += a + ":");
      d && (e += "//",
      c && (e += c + "@"),
      e += d,
      b && (e += ":" + b));
      return e
    }
      , fh = function(a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("=")
            , e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1)
          } else
            f = a[c];
          b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
        }
      }
    }
      , gh = function(a, b) {
      if (!b)
        return a;
      var c = a.indexOf("#");
      0 > c && (c = a.length);
      var d = a.indexOf("?");
      if (0 > d || d > c) {
        d = c;
        var e = ""
      } else
        e = a.substring(d + 1, c);
      a = [a.substr(0, d), e, a.substr(c)];
      c = a[1];
      a[1] = b ? c ? c + "&" + b : b : c;
      return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }
      , hh = function(a, b, c) {
      jb(a);
      if (y(b)) {
        mb(b);
        for (var d = 0; d < b.length; d++)
          hh(a, String(b[d]), c)
      } else
        null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }
      , ih = function(a) {
      var b = [], c;
      for (c in a)
        hh(c, a[c], b);
      return b.join("&")
    }
      , jh = function(a, b) {
      b = ih(b);
      return gh(a, b)
    }
      , kh = function(a, b, c) {
      c = null != c ? "=" + encodeURIComponent(String(c)) : "";
      return gh(a, b + c)
    }
      , lh = function(a, b, c, d) {
      for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
        var f = a.charCodeAt(b - 1);
        if (38 == f || 63 == f)
          if (f = a.charCodeAt(b + e),
          !f || 61 == f || 38 == f || 35 == f)
            return b;
        b += e + 1
      }
      return -1
    }
      , mh = /#|$/
      , nh = function(a, b) {
      return 0 <= lh(a, 0, b, a.search(mh))
    }
      , oh = function(a, b) {
      var c = a.search(mh)
        , d = lh(a, 0, b, c);
      if (0 > d)
        return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c)
        e = c;
      d += b.length + 1;
      return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    }
      , ph = /[?&]($|#)/
      , qh = function(a, b) {
      for (var c = a.search(mh), d = 0, e, f = []; 0 <= (e = lh(a, d, b, c)); )
        f.push(a.substring(d, e)),
        d = Math.min(a.indexOf("&", e) + 1 || c, c);
      f.push(a.substr(d));
      return f.join("").replace(ph, "$1")
    }
      , rh = function(a, b, c) {
      return kh(qh(a, b), b, c)
    }
      , sh = function(a, b) {
      D(0 > a.indexOf("#") && 0 > a.indexOf("?"), "goog.uri.utils: Fragment or query identifiers are not supported: [%s]", a);
      Ia(a, "/") && (a = a.substr(0, a.length - 1));
      Ha(b, "/") && (b = b.substr(1));
      return ab(a, "/", b)
    };
    var th = function(a) {
      M.call(this);
      this.headers = new Xg;
      this.rf = a || null;
      this.Zb = !1;
      this.qf = this.j = null;
      this.Nd = this.Jh = this.Ne = "";
      this.Jc = this.Uf = this.Ge = this.Lf = !1;
      this.ud = 0;
      this.Lb = null;
      this.Ze = "";
      this.mf = this.Ik = this.Eg = !1
    };
    B(th, M);
    var uh = th.prototype
      , vh = Ng("goog.net.XhrIo");
    uh.La = vh;
    var wh = /^https?$/i
      , xh = ["POST", "PUT"]
      , yh = []
      , zh = function(a, b, c, d, e, f, g) {
      var k = new th;
      yh.push(k);
      b && k.w("complete", b);
      k.ag("ready", k.ej);
      f && (k.ud = Math.max(0, f));
      g && (k.Eg = g);
      k.send(a, c, d, e)
    };
    th.prototype.ej = function() {
      this.Xa();
      yb(yh, this)
    }
    ;
    th.prototype.send = function(a, b, c, d) {
      if (this.j)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Ne + "; newUri=" + a);
      b = b ? b.toUpperCase() : "GET";
      this.Ne = a;
      this.Nd = "";
      this.Jh = b;
      this.Lf = !1;
      this.Zb = !0;
      this.j = this.rf ? Wg(this.rf) : Wg(Ug);
      this.qf = this.rf ? Tg(this.rf) : Tg(Ug);
      this.j.onreadystatechange = z(this.Rh, this);
      this.Ik && "onprogress"in this.j && (this.j.onprogress = z(function(a) {
        this.Qh(a, !0)
      }, this),
      this.j.upload && (this.j.upload.onprogress = z(this.Qh, this)));
      try {
        Qg(this.La, Ah(this, "Opening Xhr")),
        this.Uf = !0,
        this.j.open(b, String(a), !0),
        this.Uf = !1
      } catch (f) {
        Qg(this.La, Ah(this, "Error opening Xhr: " + f.message));
        Bh(this, f);
        return
      }
      a = c || "";
      var e = this.headers.clone();
      d && ah(d, function(a, b) {
        e.set(b, a)
      });
      d = wb(e.Eb());
      c = m.FormData && a instanceof m.FormData;
      !xb(xh, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
      e.forEach(function(a, b) {
        this.j.setRequestHeader(b, a)
      }, this);
      this.Ze && (this.j.responseType = this.Ze);
      "withCredentials"in this.j && this.j.withCredentials !== this.Eg && (this.j.withCredentials = this.Eg);
      try {
        Ch(this),
        0 < this.ud && (this.mf = Dh(this.j),
        Qg(this.La, Ah(this, "Will abort after " + this.ud + "ms if incomplete, xhr2 " + this.mf)),
        this.mf ? (this.j.timeout = this.ud,
        this.j.ontimeout = z(this.wi, this)) : this.Lb = $e(this.wi, this.ud, this)),
        Qg(this.La, Ah(this, "Sending request")),
        this.Ge = !0,
        this.j.send(a),
        this.Ge = !1
      } catch (f) {
        Qg(this.La, Ah(this, "Send error: " + f.message)),
        Bh(this, f)
      }
    }
    ;
    var Dh = function(a) {
      return G && I(9) && u(a.timeout) && p(a.ontimeout)
    }
      , vb = function(a) {
      return "content-type" == a.toLowerCase()
    };
    th.prototype.wi = function() {
      "undefined" != typeof aa && this.j && (this.Nd = "Timed out after " + this.ud + "ms, aborting",
      Qg(this.La, Ah(this, this.Nd)),
      this.dispatchEvent("timeout"),
      this.abort(8))
    }
    ;
    var Bh = function(a, b) {
      a.Zb = !1;
      a.j && (a.Jc = !0,
      a.j.abort(),
      a.Jc = !1);
      a.Nd = b;
      Eh(a);
      Fh(a)
    }
      , Eh = function(a) {
      a.Lf || (a.Lf = !0,
      a.dispatchEvent("complete"),
      a.dispatchEvent("error"))
    };
    th.prototype.abort = function() {
      this.j && this.Zb && (Qg(this.La, Ah(this, "Aborting")),
      this.Zb = !1,
      this.Jc = !0,
      this.j.abort(),
      this.Jc = !1,
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      Fh(this))
    }
    ;
    th.prototype.T = function() {
      this.j && (this.Zb && (this.Zb = !1,
      this.Jc = !0,
      this.j.abort(),
      this.Jc = !1),
      Fh(this, !0));
      th.o.T.call(this)
    }
    ;
    th.prototype.Rh = function() {
      this.Cc || (this.Uf || this.Ge || this.Jc ? Gh(this) : this.Ck())
    }
    ;
    th.prototype.Ck = function() {
      Gh(this)
    }
    ;
    var Gh = function(a) {
      if (a.Zb && "undefined" != typeof aa)
        if (a.qf[1] && 4 == Hh(a) && 2 == Ih(a))
          Qg(a.La, Ah(a, "Local request error detected and ignored"));
        else if (a.Ge && 4 == Hh(a))
          $e(a.Rh, 0, a);
        else if (a.dispatchEvent("readystatechange"),
        4 == Hh(a)) {
          Qg(a.La, Ah(a, "Request complete"));
          a.Zb = !1;
          try {
            if (Jh(a))
              a.dispatchEvent("complete"),
              a.dispatchEvent("success");
            else {
              try {
                var b = 2 < Hh(a) ? a.j.statusText : ""
              } catch (c) {
                Qg(a.La, "Can not get status: " + c.message),
                b = ""
              }
              a.Nd = b + " [" + Ih(a) + "]";
              Eh(a)
            }
          } finally {
            Fh(a)
          }
        }
    };
    th.prototype.Qh = function(a, b) {
      D("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
      this.dispatchEvent(Kh(a, "progress"));
      this.dispatchEvent(Kh(a, b ? "downloadprogress" : "uploadprogress"))
    }
    ;
    var Kh = function(a, b) {
      return {
        type: b,
        lengthComputable: a.lengthComputable,
        loaded: a.loaded,
        total: a.total
      }
    }
      , Fh = function(a, b) {
      if (a.j) {
        Ch(a);
        var c = a.j
          , d = a.qf[0] ? ba : null;
        a.j = null;
        a.qf = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d
        } catch (e) {
          (a = a.La) && a.log(Gg, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
        }
      }
    }
      , Ch = function(a) {
      a.j && a.mf && (a.j.ontimeout = null);
      u(a.Lb) && (m.clearTimeout(a.Lb),
      a.Lb = null)
    };
    th.prototype.Gb = function() {
      return !!this.j
    }
    ;
    var Jh = function(a) {
      var b = Ih(a);
      a: switch (b) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        var c = !0;
        break a;
      default:
        c = !1
      }
      if (!c) {
        if (b = 0 === b)
          a = ch(String(a.Ne))[1] || null,
          !a && m.self && m.self.location && (a = m.self.location.protocol,
          a = a.substr(0, a.length - 1)),
          b = !wh.test(a ? a.toLowerCase() : "");
        c = b
      }
      return c
    }
      , Hh = function(a) {
      return a.j ? a.j.readyState : 0
    }
      , Ih = function(a) {
      try {
        return 2 < Hh(a) ? a.j.status : -1
      } catch (b) {
        return -1
      }
    }
      , Lh = function(a) {
      try {
        return a.j ? a.j.responseText : ""
      } catch (b) {
        return Qg(a.La, "Can not get responseText: " + b.message),
        ""
      }
    }
      , Mh = function(a) {
      if (a.j) {
        a: {
          a = a.j.responseText;
          if (m.JSON)
            try {
              var b = m.JSON.parse(a);
              lb(b);
              var c = b;
              break a
            } catch (d) {}
          b = wg(a);
          D(b);
          c = b
        }
        return c
      }
    }
      , Nh = function(a) {
      try {
        if (!a.j)
          return null;
        if ("response"in a.j)
          return a.j.response;
        switch (a.Ze) {
        case "":
        case "text":
          return a.j.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer"in a.j)
            return a.j.mozResponseArrayBuffer
        }
        var b = a.La;
        b && b.log(Gg, "Response type " + a.Ze + " is not supported on this browser", void 0);
        return null
      } catch (c) {
        return Qg(a.La, "Can not get response: " + c.message),
        null
      }
    };
    th.prototype.getResponseHeader = function(a) {
      if (this.j && 4 == Hh(this))
        return a = this.j.getResponseHeader(a),
        null === a ? void 0 : a
    }
    ;
    th.prototype.getAllResponseHeaders = function() {
      return this.j && 4 == Hh(this) ? this.j.getAllResponseHeaders() : ""
    }
    ;
    var Ah = function(a, b) {
      return b + " [" + a.Jh + " " + a.Ne + " " + Ih(a) + "]"
    };
    var Oh = function(a, b) {
      this.Rb = this.Qc = this.tc = "";
      this.kd = null;
      this.Gc = this.Jb = "";
      this.$a = this.fk = !1;
      if (a instanceof Oh) {
        this.$a = p(b) ? b : a.$a;
        Ph(this, a.tc);
        var c = a.Qc;
        O(this);
        this.Qc = c;
        c = a.Rb;
        O(this);
        this.Rb = c;
        Qh(this, a.kd);
        c = a.Jb;
        O(this);
        this.Jb = c;
        Rh(this, a.Sa.clone());
        a = a.Gc;
        O(this);
        this.Gc = a
      } else
        a && (c = ch(String(a))) ? (this.$a = !!b,
        Ph(this, c[1] || "", !0),
        a = c[2] || "",
        O(this),
        this.Qc = Sh(a),
        a = c[3] || "",
        O(this),
        this.Rb = Sh(a, !0),
        Qh(this, c[4]),
        a = c[5] || "",
        O(this),
        this.Jb = Sh(a, !0),
        Rh(this, c[6] || "", !0),
        a = c[7] || "",
        O(this),
        this.Gc = Sh(a)) : (this.$a = !!b,
        this.Sa = new Th(null,0,this.$a))
    };
    Oh.prototype.toString = function() {
      var a = []
        , b = this.tc;
      b && a.push(Uh(b, Vh, !0), ":");
      var c = this.Rb;
      if (c || "file" == b)
        a.push("//"),
        (b = this.Qc) && a.push(Uh(b, Vh, !0), "@"),
        a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        c = this.kd,
        null != c && a.push(":", String(c));
      if (c = this.Jb)
        this.Rb && "/" != c.charAt(0) && a.push("/"),
        a.push(Uh(c, "/" == c.charAt(0) ? Wh : Xh, !0));
      (c = this.Sa.toString()) && a.push("?", c);
      (c = this.Gc) && a.push("#", Uh(c, Yh));
      return a.join("")
    }
    ;
    Oh.prototype.resolve = function(a) {
      var b = this.clone()
        , c = !!a.tc;
      c ? Ph(b, a.tc) : c = !!a.Qc;
      if (c) {
        var d = a.Qc;
        O(b);
        b.Qc = d
      } else
        c = !!a.Rb;
      c ? (d = a.Rb,
      O(b),
      b.Rb = d) : c = null != a.kd;
      d = a.Jb;
      if (c)
        Qh(b, a.kd);
      else if (c = !!a.Jb) {
        if ("/" != d.charAt(0))
          if (this.Rb && !this.Jb)
            d = "/" + d;
          else {
            var e = b.Jb.lastIndexOf("/");
            -1 != e && (d = b.Jb.substr(0, e + 1) + d)
          }
        e = d;
        if (".." == e || "." == e)
          d = "";
        else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
          d = Ha(e, "/");
          e = e.split("/");
          for (var f = [], g = 0; g < e.length; ) {
            var k = e[g++];
            "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
            d && g == e.length && f.push("")) : (f.push(k),
            d = !0)
          }
          d = f.join("/")
        } else
          d = e
      }
      c ? (O(b),
      b.Jb = d) : c = "" !== a.Sa.toString();
      c ? Rh(b, a.Sa.clone()) : c = !!a.Gc;
      c && (a = a.Gc,
      O(b),
      b.Gc = a);
      return b
    }
    ;
    Oh.prototype.clone = function() {
      return new Oh(this)
    }
    ;
    var Ph = function(a, b, c) {
      O(a);
      a.tc = c ? Sh(b, !0) : b;
      a.tc && (a.tc = a.tc.replace(/:$/, ""))
    }
      , Qh = function(a, b) {
      O(a);
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)
          throw Error("Bad port number " + b);
        a.kd = b
      } else
        a.kd = null
    }
      , Rh = function(a, b, c) {
      O(a);
      b instanceof Th ? (a.Sa = b,
      a.Sa.ug(a.$a)) : (c || (b = Uh(b, Zh)),
      a.Sa = new Th(b,0,a.$a))
    };
    Oh.prototype.removeParameter = function(a) {
      O(this);
      this.Sa.remove(a);
      return this
    }
    ;
    var O = function(a) {
      if (a.fk)
        throw Error("Tried to modify a read-only Uri");
    };
    Oh.prototype.ug = function(a) {
      this.$a = a;
      this.Sa && this.Sa.ug(a);
      return this
    }
    ;
    var Sh = function(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
      , Uh = function(a, b, c) {
      return r(a) ? (a = encodeURI(a).replace(b, $h),
      c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      a) : null
    }
      , $h = function(a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
      , Vh = /[#\/\?@]/g
      , Xh = /[\#\?:]/g
      , Wh = /[\#\?]/g
      , Zh = /[\#\?@]/g
      , Yh = /#/g
      , Th = function(a, b, c) {
      this.ta = this.ma = null;
      this.Oa = a || null;
      this.$a = !!c
    }
      , ai = function(a) {
      a.ma || (a.ma = new Xg,
      a.ta = 0,
      a.Oa && fh(a.Oa, function(b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
      }))
    };
    h = Th.prototype;
    h.add = function(a, b) {
      ai(this);
      this.Oa = null;
      a = bi(this, a);
      var c = this.ma.get(a);
      c || this.ma.set(a, c = []);
      c.push(b);
      this.ta = ib(this.ta) + 1;
      return this
    }
    ;
    h.remove = function(a) {
      ai(this);
      a = bi(this, a);
      return this.ma.Bc(a) ? (this.Oa = null,
      this.ta = ib(this.ta) - this.ma.get(a).length,
      this.ma.remove(a)) : !1
    }
    ;
    h.clear = function() {
      this.ma = this.Oa = null;
      this.ta = 0
    }
    ;
    h.Bc = function(a) {
      ai(this);
      a = bi(this, a);
      return this.ma.Bc(a)
    }
    ;
    h.forEach = function(a, b) {
      ai(this);
      this.ma.forEach(function(c, d) {
        E(c, function(c) {
          a.call(b, c, d, this)
        }, this)
      }, this)
    }
    ;
    h.Eb = function() {
      ai(this);
      for (var a = this.ma.Ya(), b = this.ma.Eb(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++)
          c.push(b[d]);
      return c
    }
    ;
    h.Ya = function(a) {
      ai(this);
      var b = [];
      if (r(a))
        this.Bc(a) && (b = zb(b, this.ma.get(bi(this, a))));
      else {
        a = this.ma.Ya();
        for (var c = 0; c < a.length; c++)
          b = zb(b, a[c])
      }
      return b
    }
    ;
    h.set = function(a, b) {
      ai(this);
      this.Oa = null;
      a = bi(this, a);
      this.Bc(a) && (this.ta = ib(this.ta) - this.ma.get(a).length);
      this.ma.set(a, [b]);
      this.ta = ib(this.ta) + 1;
      return this
    }
    ;
    h.get = function(a, b) {
      a = a ? this.Ya(a) : [];
      return 0 < a.length ? String(a[0]) : b
    }
    ;
    h.toString = function() {
      if (this.Oa)
        return this.Oa;
      if (!this.ma)
        return "";
      for (var a = [], b = this.ma.Eb(), c = 0; c < b.length; c++) {
        var d = b[c]
          , e = encodeURIComponent(String(d));
        d = this.Ya(d);
        for (var f = 0; f < d.length; f++) {
          var g = e;
          "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
          a.push(g)
        }
      }
      return this.Oa = a.join("&")
    }
    ;
    h.clone = function() {
      var a = new Th;
      a.Oa = this.Oa;
      this.ma && (a.ma = this.ma.clone(),
      a.ta = this.ta);
      return a
    }
    ;
    var bi = function(a, b) {
      b = String(b);
      a.$a && (b = b.toLowerCase());
      return b
    };
    Th.prototype.ug = function(a) {
      a && !this.$a && (ai(this),
      this.Oa = null,
      this.ma.forEach(function(a, c) {
        var b = c.toLowerCase();
        c != b && (this.remove(c),
        this.remove(b),
        0 < a.length && (this.Oa = null,
        this.ma.set(bi(this, b), Ab(a)),
        this.ta = ib(this.ta) + a.length))
      }, this));
      this.$a = a
    }
    ;
    Th.prototype.extend = function(a) {
      for (var b = 0; b < arguments.length; b++)
        ah(arguments[b], function(a, b) {
          this.add(b, a)
        }, this)
    }
    ;
    var ci, di, ei;
    A("devsite.settings.initSettings", function(a) {
      for (var b in a)
        A("devsite.settings." + b, a[b])
    });
    var fi = []
      , gi = ["_self", "_parent", "_top"]
      , hi = window.location
      , ii = ""
      , ji = ""
      , ki = ""
      , li = ""
      , mi = "";
    A("devsite.utils.initDevsiteUtilParams", function(a, b) {
      if (a) {
        var c = eh(a)
          , d = dh(ch(a)[5] || null) || "";
        ii = sh(c, d);
        ji = oh(a, "authuser") || "";
        ki = oh(a, "hl") || "";
        li = oh(a, "acting_user") || "";
        mi = oh(a, "tenant") || ""
      }
      b && (fi.length = 0,
      E(b, function(a) {
        "." == a.charAt(0) ? fi.push(a) : fi.push("." + a)
      }))
    });
    var pi = function(a, b, c, d, e, f, g, k) {
      a = ni(a);
      var l;
      k || (l = oi(a, e));
      e = "";
      if (c && "GET" != c || !d)
        e = ch(a)[6] || "",
        e = e + (e ? "&" : "") + (ih(d || {}) || "");
      else {
        var n = new Oh(a);
        ta(d, function(a, b) {
          n.Sa.add(b, a)
        });
        a = n.toString()
      }
      zh(a, b, c, e, l, f, g)
    }
      , ri = function(a) {
      var b = qi;
      var c = ni("/support/submit");
      zh(c, b, "POST", a, oi(c, void 0), void 0, void 0)
    }
      , oi = function(a, b) {
      b = b || {};
      if (!dh(ch(a)[3] || null) || si(a))
        if (a = document.querySelector("meta[name=xsrf_token]"))
          b.X_XSRFToken = a.content;
      return b
    }
      , ti = function(a) {
      return Ha(a, ")]}\n") ? a.substring(4) : a
    }
      , ui = function() {
      return "ontouchstart"in window
    }
      , vi = function(a, b) {
      var c = (b = b.getAttribute("target")) && -1 != gi.indexOf(b);
      return !!(b && !c || a.ctrlKey || 1 == a.button || a.metaKey || a.shiftKey)
    };
    A("devsite.utils.isClickEventInNewWindow", vi);
    var wi = window
      , xi = function(a) {
      a = ni(a);
      wi.location.href = a
    };
    A("devsite.utils.navigateTo", xi);
    A("devsite.utils.anchorIdToSelector", function(a) {
      for (var b = [], c = 0; c < a.length; c++)
        0 == c && "#" == a[c] ? b.push("#") : -1 < "~!@$%^&*()_+-=,./';:\"?><[]\\{}|`#".indexOf(a[c]) ? b.push("\\", a[c]) : "0" <= a[c] && "9" >= a[c] ? b.push("\\3", a[c], " ") : b.push(a[c]);
      return b.join("")
    });
    var yi = function(a, b) {
      a = document.querySelectorAll(a);
      for (var c = 0; c < a.length; c++)
        b(a[c])
    };
    A("devsite.utils.forEachNode", yi);
    var P = function(a, b) {
      a = document.querySelectorAll(a);
      for (var c = 0; c < a.length; c++)
        a[c].nodeType == Node.ELEMENT_NODE && b(a[c])
    };
    A("devsite.utils.forEachElement", P);
    var zi = function(a, b, c) {
      (c && !a.classList.contains(b) || !c && a.classList.contains(b)) && a.classList.toggle(b)
    };
    A("devsite.utils.setElementsShown", function(a, b) {
      P(a, function(a) {
        zi(a, "devsite-hidden", !b)
      })
    });
    var Bi = function(a) {
      if (a) {
        var b = a.getAttribute("title");
        b && (Ai(a, b),
        a.setAttribute("data-title", b),
        a.removeAttribute("title"))
      }
    }
      , Ai = function(a, b, c) {
      if (!ui()) {
        var d = "";
        switch (c) {
        case 0:
          d += "l";
          break;
        case 2:
          d += "t";
          break;
        case 3:
          d += "r";
          break;
        default:
          d += "b"
        }
        a.setAttribute("data-tooltip-align", d + ",c");
        c = b instanceof Ic ? pf(Jc(b)) : b;
        a.removeAttribute("title");
        a.removeAttribute("data-tooltip-contained");
        a.removeAttribute("data-tooltip");
        b ? (b instanceof Ic ? a.Md = b : (a.setAttribute("data-tooltip", b),
        a.Md = null),
        a.setAttribute("aria-label", c)) : (a.Md = null,
        a.removeAttribute("aria-label"));
        ng(K(a))
      }
    };
    A("devsite.utils.addTooltip", Ai);
    var Ci = function(a) {
      L(a, "click", function() {
        var b = a.getAttribute("data-platform");
        pi("/profile/setPlatform", function() {}, "POST", {
          platform: b
        })
      })
    };
    A("devsite.utils.attachPlatformSetter", Ci);
    var ni = function(a) {
      if (a && (Ha(a, "#") || Ha(a, "&")))
        return a;
      a = Di(a);
      a = Ei(a);
      si(a) && (a = Fi(a),
      ki && (a = rh(a, "hl", ki)),
      li && (a = rh(a, "acting_user", li)),
      mi && (a = rh(a, "tenant", mi)));
      return a
    };
    A("devsite.utils.makeDevsiteUrl", ni);
    A("devsite.utils.makeDevsiteRequestData", function(a, b) {
      b = b || {};
      if (a && (Ha(a, "#") || Ha(a, "&")))
        return b;
      a = Di(a);
      if (!ji || !si(a))
        return b;
      if ("string" == typeof b)
        return Fi(b);
      "authuser"in b || (b.authuser = ji);
      return b
    });
    var si = function(a) {
      if (a) {
        var b = dh(ch(a)[3] || null);
        if (b)
          return fi.some(function(a) {
            return Gi(b, a)
          })
      }
      return !0
    };
    A("devsite.utils.isGoogleDomain", si);
    var Gi = function(a, b) {
      return a && b ? Ia("." + a, b) : !1
    };
    A("devsite.utils.isInDomain", Gi);
    var Di = function(a) {
      return eh(a) ? a : ii ? sh(ii, a) : a
    };
    A("devsite.utils.addBaseUrl", Di);
    var Ei = function(a) {
      var b = Hi("VERSION_HASH", null)
        , c = "/_static/" + b + "/";
      a && b && -1 == a.indexOf(c) && (a = a.replace(/\/_static\//, c));
      return a
    };
    A("devsite.utils.makeVersionedPath", Ei);
    var Fi = function(a) {
      ji && (a = rh(a, "authuser", ji));
      return a
    }
      , Ii = function() {
      document.querySelector("a.devsite-user-signin").click()
    };
    A("devsite.utils.redirectToLogin", Ii);
    var Hi = function(a, b) {
      var c = x("devsite.settings");
      return c && a in c ? c[a] : b
    };
    A("devsite.utils.getSetting", Hi);
    var Ji = function(a, b) {
      a = a.getAttribute(b);
      return !!a && "true" === a.toLowerCase() || !1
    }
      , Mi = function(a) {
      "undefined" === typeof a && (a = 200);
      Ki(!1);
      return Li(!1, a)
    };
    A("devsite.utils.showSiteMask", Mi);
    var Ni = function(a) {
      "undefined" === typeof a && (a = 600);
      Ki(!0);
      return Li(!0, a)
    };
    A("devsite.utils.hideSiteMask", Ni);
    var Li = function(a, b) {
      var c = document.querySelector(".devsite-site-mask");
      c.style.opacity || (c.style.opacity = a ? .5 : 0);
      c.style.display || (c.style.display = a ? "block" : "none");
      c.style.transition = "opacity " + b + "ms";
      a ? (c.style.opacity = 0,
      window.setTimeout(function() {
        c.style.display = "none"
      }, b)) : (c.style.display = "block",
      window.setTimeout(function() {
        c.style.opacity = .5
      }, 0));
      return c
    }
      , Ki = function(a) {
      a ? (document.documentElement.style.overflow = "",
      document.body.style.overflow = "") : (document.documentElement.style.overflow = "hidden",
      document.body.style.overflow = "hidden")
    }
      , Oi = function(a) {
      a = ch(a)[6] || null;
      var b = {};
      fh(a ? a : "", function(a, d) {
        b[a] = d
      });
      return b
    };
    A("devsite.utils.ParseUrlParams", Oi);
    var Pi = !G && !Hb()
      , Qi = function(a, b, c) {
      Pi && a.dataset ? a.dataset[b] = c : a.setAttribute("data-" + eb(b), c)
    }
      , R = function(a, b) {
      return Pi && a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute("data-" + eb(b))
    };
    A("devsite.analytics.SITE_WIDE_EVENTS_CATEGORY", "Site-Wide Custom Events");
    var Ri = [];
    A("devsite.analytics.trackerMetadata", Ri);
    A("devsite.analytics.InitAnalytics", function(a) {
      var b = document.getElementsByClassName("google-analytics-id-json")
        , c = Si();
      Ri = [];
      if (b.length) {
        for (var d = 0; d < b.length; d++)
          Ri.push(JSON.parse(b[d].value));
        Ti();
        b = Ri;
        if (b.length)
          for (var e = d = 0; e < b.length; e++) {
            var f = "tracker" + d++;
            window.ga("create", b[e].gaid, {
              cookieDomain: window.location.hostname,
              name: f
            });
            var g = b[e].dimensions;
            if (g)
              for (var k in g)
                window.ga(f + ".set", k, g[k])
          }
        k = Ri;
        for (b = 0; b < k.length; b++)
          window.ga("require", "linkid", {
            rn: "_gali_" + k[b].gaid
          });
        a || Ui();
        E(document.querySelectorAll(".gc-analytics-event"), Vi)
      }
      if (c.length) {
        for (a = 0; a < c.length; a++)
          if (!l) {
            k = window;
            var l = c[a].value;
            k.dataLayer = k.dataLayer || [];
            k.dataLayer.push({
              "gtm.start": (new Date).getTime(),
              event: "gtm.js"
            });
            k = document.getElementsByTagName("script")[0];
            b = document.createElement("script");
            b.async = !0;
            b.src = "//www.googletagmanager.com/gtm.js?id=" + l + "";
            k.parentNode.insertBefore(b, k);
            l = void 0
          }
        Wi()
      }
    });
    A("devsite.analytics.InitAnalyticsIframes", function() {
      P("iframe.link-analytics", function(a) {
        var b = a.getAttribute("data-src")
          , c = a.getAttribute("src");
        window.ga = window.ga || x("window.ga");
        window.ga(function() {
          for (var a = window.ga.getAll(), e = 0; e < a.length; e++) {
            var f = a[e]
              , g = x("window.gaplugins.Linker");
            window.Kh = window.Kh || new g(f);
            f = window.Kh.decorate(c || b, null);
            var k = (g = this.parentNode) ? g.parentNode : null;
            g && k && "ARTICLE" == g.nodeName && !g.classList.contains("selected") && k.classList.contains("ui-datasection-main") && b && !c ? this.setAttribute("data-src", f) : (this.setAttribute("src", f),
            b && this.removeAttribute("data-src"))
          }
        }
        .bind(a))
      })
    });
    var Ti = function() {
      if (!p(window.ga)) {
        window.GoogleAnalyticsObject = "ga";
        window.ga = window.ga || function() {
          (window.ga.q = window.ga.q || []).push(arguments)
        }
        ;
        window.ga.l = 1 * new Date;
        var a = document.createElement("script")
          , b = document.getElementsByTagName("script")[0];
        a.async = 1;
        a.src = "//www.google-analytics.com/analytics.js";
        b.parentNode.insertBefore(a, b)
      }
    }
      , Ui = function() {
      window.ga(function() {
        var a = Xi();
        if (a)
          for (var b = 0; b < a.length; b++)
            a[b].send("pageview")
      })
    }
      , Yi = function(a) {
      window.ga && window.ga(function() {
        var b = window.ga.getAll();
        E(b, function(b) {
          "UA-36037335-1" == b.get("trackingId") && (0 == a.indexOf("/") && (a = a.substring(1)),
          b.set("page", "/virtual/" + a),
          b.set("dimension15", "/" + a),
          b.send("pageview"))
        })
      })
    }
      , Zi = function(a, b, c, d, e) {
      var f = Si()
        , g = Xi()
        , k = g.length;
      f.length && k++;
      var l = function() {
        0 == --k && e()
      };
      g.length && window.ga(function() {
        for (var f = 0; f < g.length; f++) {
          var k = {
            eventCategory: a,
            eventAction: b,
            eventLabel: c,
            eventValue: d
          };
          e && (k.hitCallback = l);
          g[f].send("event", k)
        }
      });
      if (f.length) {
        var n = {
          event: "GAEvent",
          eventCategory: a,
          eventAction: b,
          eventLabel: c,
          eventValue: d
        };
        e && (n.eventCallback = l);
        window.dataLayer.push(n)
      }
      g.length || f.length || e && e()
    };
    A("devsite.analytics.trackAnalyticsEvent", Zi);
    var $i = function(a, b, c) {
      var d = Ri;
      if (d.length)
        for (var e = 0; e < d.length; e++)
          if (d[e].gaid == c) {
            window.ga("tracker" + e + ".set", a, b);
            break
          }
    };
    A("devsite.analytics.setDimension", $i);
    var Wi = function() {
      var a = {};
      P("meta[name=gtm_var]", function(b) {
        var c = b.getAttribute("data-key");
        b = b.getAttribute("data-value");
        c && b && (a[c] = b)
      });
      window.dataLayer.push(a)
    }
      , Vi = function(a) {
      var b = R(a, "category");
      if (b) {
        b = jb(b);
        var c = R(a, "action") || "click"
          , d = R(a, "label") || void 0
          , e = Number(R(a, "value")) || void 0;
        isNaN(e) && (e = void 0);
        aj(a, b, c, d, e)
      }
    }
      , aj = function(a, b, c, d, e) {
      L(a, "click", function(f) {
        var g = a.getAttribute("href");
        if (g && 0 != g.indexOf("#") && !vi(f, a)) {
          var k = pa(xi, g);
          f.preventDefault();
          f.stopPropagation();
          setTimeout(k, 150)
        }
        Zi(b, c, d, e, k)
      })
    };
    A("devsite.analytics.addClickHandlerToElement", aj);
    var Si = function() {
      return document.querySelectorAll(".google-tag-manager-id")
    }
      , Xi = function() {
      var a = [];
      if (window.ga)
        for (var b = window.ga.getAll(), c = 0; c < b.length; c++)
          for (var d = 0; d < Ri.length; d++)
            Ri[d].gaid == b[c].get("trackingId") && a.push(b[c]);
      return a
    };
    var dj = function(a, b, c, d, e, f) {
      if (!(G || Pb || H && I("525")))
        return !0;
      if (Sb && e)
        return bj(a);
      if (e && !d)
        return !1;
      u(b) && (b = cj(b));
      e = 17 == b || 18 == b || Sb && 91 == b;
      if ((!c || Sb) && e || Sb && 16 == b && (d || f))
        return !1;
      if ((H || Pb) && d && c)
        switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
          return !1
        }
      if (G && d && b == a)
        return !1;
      switch (a) {
      case 13:
        return !0;
      case 27:
        return !(H || Pb)
      }
      return bj(a)
    }
      , bj = function(a) {
      if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (H || Pb) && 0 == a)
        return !0;
      switch (a) {
      case 32:
      case 43:
      case 63:
      case 64:
      case 107:
      case 109:
      case 110:
      case 111:
      case 186:
      case 59:
      case 189:
      case 187:
      case 61:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
      case 219:
      case 220:
      case 221:
        return !0;
      default:
        return !1
      }
    }
      , cj = function(a) {
      if (Rb)
        a = ej(a);
      else if (Sb && H)
        switch (a) {
        case 93:
          a = 91
        }
      return a
    }
      , ej = function(a) {
      switch (a) {
      case 61:
        return 187;
      case 59:
        return 186;
      case 173:
        return 189;
      case 224:
        return 91;
      case 0:
        return 224;
      default:
        return a
      }
    };
    var fj = {
      Cn: !0
    }
      , gj = {
      Fn: !0
    }
      , hj = {
      En: !0
    }
      , ij = {
      Bn: !0
    }
      , jj = {
      Dn: !0
    }
      , S = function() {
      throw Error("Do not instantiate directly");
    };
    S.prototype.ac = null;
    S.prototype.hc = function() {
      return this.content
    }
    ;
    S.prototype.toString = function() {
      return this.content
    }
    ;
    var kj = function(a, b) {
      this.content = String(a);
      this.ac = null != b ? b : null
    };
    B(kj, S);
    kj.prototype.Wa = jj;
    var lj = function() {
      S.call(this)
    };
    B(lj, S);
    lj.prototype.Wa = fj;
    var mj = function() {
      S.call(this)
    };
    B(mj, S);
    mj.prototype.Wa = gj;
    mj.prototype.ac = 1;
    var nj = function() {
      S.call(this)
    };
    B(nj, S);
    nj.prototype.Wa = hj;
    nj.prototype.ac = 1;
    var oj = function() {
      S.call(this)
    };
    B(oj, S);
    oj.prototype.Wa = ij;
    oj.prototype.ac = 1;
    var rj = function(a, b, c) {
      D(b, "Soy template may not be null.");
      a.innerHTML = pj(b(c || qj, void 0, void 0))
    }
      , tj = function(a, b) {
      D(a, "Soy template may not be null.");
      var c = K();
      a = a(b || qj, void 0, void 0);
      b = pj(a);
      sj(b);
      if (a instanceof S)
        if (a.Wa === jj)
          a = Lc(a.toString());
        else {
          if (a.Wa !== fj)
            throw Error("Sanitized content was not of kind TEXT or HTML.");
          b = pc("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
          var d = a.toString();
          a = a.ac;
          jb(oc(b), "must provide justification");
          D(!Ka(oc(b)), "must provide non-empty justification");
          a = Kc(d, a || null)
        }
      else
        a = Kc(b, null);
      c = c.H;
      b = a;
      a = c.createElement("DIV");
      G ? (Vc(a, Qc(Tc, b)),
      a.removeChild(a.firstChild)) : Vc(a, b);
      if (1 == a.childNodes.length)
        c = a.removeChild(a.firstChild);
      else
        for (c = c.createDocumentFragment(); a.firstChild; )
          c.appendChild(a.firstChild);
      return c
    }
      , T = function(a, b) {
      D(a, "Soy template may not be null.");
      b = a(b || qj, void 0, void 0);
      a = K().createElement("DIV");
      b = pj(b);
      sj(b);
      a.innerHTML = b;
      1 == a.childNodes.length && (b = a.firstChild,
      1 == b.nodeType && (a = b));
      return a
    }
      , pj = function(a) {
      if (!ia(a))
        return String(a);
      if (a instanceof S) {
        if (a.Wa === fj)
          return jb(a.hc());
        if (a.Wa === jj)
          return Va(a.hc())
      }
      hb("Soy template output is unsafe for use as HTML: " + a);
      return "zSoyz"
    }
      , sj = function(a) {
      var b = a.match(uj);
      D(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a)
    }
      , uj = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i
      , qj = {};
    var wj = function(a, b) {
      M.call(this);
      a && vj(this, a, b)
    };
    B(wj, M);
    h = wj.prototype;
    h.v = null;
    h.Le = null;
    h.Wf = null;
    h.Me = null;
    h.Ra = -1;
    h.nc = -1;
    h.xf = !1;
    var xj = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45
    }
      , yj = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    }
      , Aj = G || Pb || H && I("525")
      , Bj = Sb && Rb;
    wj.prototype.Kj = function(a) {
      if (H || Pb)
        if (17 == this.Ra && !a.ctrlKey || 18 == this.Ra && !a.altKey || Sb && 91 == this.Ra && !a.metaKey)
          this.nc = this.Ra = -1;
      -1 == this.Ra && (a.ctrlKey && 17 != a.keyCode ? this.Ra = 17 : a.altKey && 18 != a.keyCode ? this.Ra = 18 : a.metaKey && 91 != a.keyCode && (this.Ra = 91));
      Aj && !dj(a.keyCode, this.Ra, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.nc = cj(a.keyCode),
      Bj && (this.xf = a.altKey))
    }
    ;
    wj.prototype.Pj = function(a) {
      this.nc = this.Ra = -1;
      this.xf = a.altKey
    }
    ;
    wj.prototype.handleEvent = function(a) {
      var b = a.Tb
        , c = b.altKey;
      if (G && "keypress" == a.type) {
        var d = this.nc;
        var e = 13 != d && 27 != d ? b.keyCode : 0
      } else
        (H || Pb) && "keypress" == a.type ? (d = this.nc,
        e = 0 <= b.charCode && 63232 > b.charCode && bj(d) ? b.charCode : 0) : Ob && !H ? (d = this.nc,
        e = bj(d) ? b.keyCode : 0) : (d = b.keyCode || this.nc,
        e = b.charCode || 0,
        Bj && (c = this.xf),
        Sb && 63 == e && 224 == d && (d = 191));
      var f = d = cj(d);
      d ? 63232 <= d && d in xj ? f = xj[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in yj && (f = yj[b.keyIdentifier]);
      a = f == this.Ra;
      this.Ra = f;
      b = new Cj(f,e,a,b);
      b.altKey = c;
      this.dispatchEvent(b)
    }
    ;
    wj.prototype.b = function() {
      return this.v
    }
    ;
    var vj = function(a, b, c) {
      a.Me && a.detach();
      a.v = b;
      a.Le = L(a.v, "keypress", a, c);
      a.Wf = L(a.v, "keydown", a.Kj, c, a);
      a.Me = L(a.v, "keyup", a.Pj, c, a)
    };
    wj.prototype.detach = function() {
      this.Le && (me(this.Le),
      me(this.Wf),
      me(this.Me),
      this.Me = this.Wf = this.Le = null);
      this.v = null;
      this.nc = this.Ra = -1
    }
    ;
    wj.prototype.T = function() {
      wj.o.T.call(this);
      this.detach()
    }
    ;
    var Cj = function(a, b, c, d) {
      Rd.call(this, d);
      this.type = "key";
      this.keyCode = a;
      this.charCode = b;
      this.repeat = c
    };
    B(Cj, Rd);
    var Dj = function() {};
    da(Dj);
    Dj.prototype.tk = 0;
    var Fj = function(a) {
      M.call(this);
      this.Ja = a || K();
      this.$e = Ej;
      this.Za = null;
      this.ka = !1;
      this.v = null;
      this.jc = void 0;
      this.kb = this.Ca = this.V = null;
      this.Ai = !1
    };
    B(Fj, M);
    Fj.prototype.Zj = Dj.Pa();
    var Ej = null
      , Gj = function(a, b) {
      switch (a) {
      case 1:
        return b ? "disable" : "enable";
      case 2:
        return b ? "highlight" : "unhighlight";
      case 4:
        return b ? "activate" : "deactivate";
      case 8:
        return b ? "select" : "unselect";
      case 16:
        return b ? "check" : "uncheck";
      case 32:
        return b ? "focus" : "blur";
      case 64:
        return b ? "open" : "close"
      }
      throw Error("Invalid component state");
    }
      , Hj = function(a) {
      return a.Za || (a.Za = ":" + (a.Zj.tk++).toString(36))
    }
      , Ij = function(a, b) {
      if (a.V && a.V.kb) {
        var c = a.V.kb
          , d = a.Za;
        d in c && delete c[d];
        Aa(a.V.kb, b, a)
      }
      a.Za = b
    };
    Fj.prototype.b = function() {
      return this.v
    }
    ;
    var Jj = function(a) {
      a = a.v;
      D(a, "Can not call getElementStrict before rendering/decorating.");
      return a
    }
      , Kj = function(a) {
      a.jc || (a.jc = new kf(a));
      return a.jc
    }
      , Mj = function(a, b) {
      if (a == b)
        throw Error("Unable to set parent component");
      if (b && a.V && a.Za && Lj(a.V, a.Za) && a.V != b)
        throw Error("Unable to set parent component");
      a.V = b;
      Fj.o.vg.call(a, b)
    };
    h = Fj.prototype;
    h.getParent = function() {
      return this.V
    }
    ;
    h.vg = function(a) {
      if (this.V && this.V != a)
        throw Error("Method not supported");
      Fj.o.vg.call(this, a)
    }
    ;
    h.Db = function() {
      return this.Ja
    }
    ;
    h.S = function() {
      this.v = this.Ja.createElement("DIV")
    }
    ;
    h.ub = function(a) {
      Nj(this, a)
    }
    ;
    var Nj = function(a, b, c) {
      if (a.ka)
        throw Error("Component already rendered");
      a.v || a.S();
      b ? b.insertBefore(a.v, c || null) : a.Ja.H.body.appendChild(a.v);
      a.V && !a.V.ka || a.Cb()
    };
    h = Fj.prototype;
    h.Bb = function(a) {
      if (this.ka)
        throw Error("Component already rendered");
      if (a && this.Nb(a)) {
        this.Ai = !0;
        var b = Zc(a);
        this.Ja && this.Ja.H == b || (this.Ja = K(a));
        this.Bd(a);
        this.Cb()
      } else
        throw Error("Invalid element to decorate");
    }
    ;
    h.Nb = function() {
      return !0
    }
    ;
    h.Bd = function(a) {
      this.v = a
    }
    ;
    h.Cb = function() {
      this.ka = !0;
      Oj(this, function(a) {
        !a.ka && a.b() && a.Cb()
      })
    }
    ;
    h.Fc = function() {
      Oj(this, function(a) {
        a.ka && a.Fc()
      });
      this.jc && this.jc.nd();
      this.ka = !1
    }
    ;
    h.T = function() {
      this.ka && this.Fc();
      this.jc && (this.jc.Xa(),
      delete this.jc);
      Oj(this, function(a) {
        a.Xa()
      });
      !this.Ai && this.v && md(this.v);
      this.V = this.v = this.kb = this.Ca = null;
      Fj.o.T.call(this)
    }
    ;
    h.yc = function(a, b) {
      this.vf(a, Pj(this), b)
    }
    ;
    h.vf = function(a, b, c) {
      D(!!a, "Provided element must not be null.");
      if (a.ka && (c || !this.ka))
        throw Error("Component already rendered");
      if (0 > b || b > Pj(this))
        throw Error("Child component index out of bounds");
      this.kb && this.Ca || (this.kb = {},
      this.Ca = []);
      if (a.getParent() == this) {
        var d = Hj(a);
        this.kb[d] = a;
        yb(this.Ca, a)
      } else
        Aa(this.kb, Hj(a), a);
      Mj(a, this);
      Cb(this.Ca, b, 0, a);
      a.ka && this.ka && a.getParent() == this ? (c = this.W(),
      b = c.childNodes[b] || null,
      b != a.b() && c.insertBefore(a.b(), b)) : c ? (this.v || this.S(),
      b = Qj(this, b + 1),
      Nj(a, this.W(), b ? b.v : null)) : this.ka && !a.ka && a.v && a.v.parentNode && 1 == a.v.parentNode.nodeType && a.Cb()
    }
    ;
    h.W = function() {
      return this.v
    }
    ;
    var Rj = function(a) {
      null == a.$e && (a.$e = Gf(a.ka ? a.v : a.Ja.H.body));
      return a.$e
    };
    Fj.prototype.Vd = function(a) {
      if (this.ka)
        throw Error("Component already rendered");
      this.$e = a
    }
    ;
    var Pj = function(a) {
      return a.Ca ? a.Ca.length : 0
    }
      , Lj = function(a, b) {
      a.kb && b ? (a = a.kb,
      b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
      return b
    }
      , Qj = function(a, b) {
      return a.Ca ? a.Ca[b] || null : null
    }
      , Oj = function(a, b, c) {
      a.Ca && E(a.Ca, b, c)
    }
      , Sj = function(a, b) {
      return a.Ca && b ? qb(a.Ca, b) : -1
    };
    Fj.prototype.removeChild = function(a, b) {
      if (a) {
        var c = r(a) ? a : Hj(a);
        a = Lj(this, c);
        if (c && a) {
          var d = this.kb;
          c in d && delete d[c];
          yb(this.Ca, a);
          b && (a.Fc(),
          a.v && md(a.v));
          Mj(a, null)
        }
      }
      if (!a)
        throw Error("Child is not in parent component");
      return a
    }
    ;
    var Uj = function(a, b) {
      if (!a)
        throw Error("Invalid class name " + a);
      if (!ha(b))
        throw Error("Invalid decorator function " + b);
      Tj[a] = b
    }
      , Vj = {}
      , Tj = {};
    var Wj = function(a) {
      this.Mg = a
    };
    da(Wj);
    Wj.prototype.Wb = function() {
      return this.Mg
    }
    ;
    var Xj = function(a, b) {
      a && (a.tabIndex = b ? 0 : -1)
    };
    Wj.prototype.S = function(a) {
      return a.Db().S("DIV", this.we(a).join(" "))
    }
    ;
    Wj.prototype.W = function(a) {
      return a
    }
    ;
    Wj.prototype.Nb = function(a) {
      return "DIV" == a.tagName
    }
    ;
    Wj.prototype.Bb = function(a, b) {
      b.id && Ij(a, b.id);
      var c = this.ua()
        , d = !1
        , e = bf(b);
      e && E(e, function(b) {
        b == c ? d = !0 : b && (b == c + "-disabled" ? a.rd(!1) : b == c + "-horizontal" ? a.setOrientation("horizontal") : b == c + "-vertical" && a.setOrientation("vertical"))
      }, this);
      d || df(b, c);
      Yj(this, a, this.W(b));
      return b
    }
    ;
    var Yj = function(a, b, c) {
      if (c)
        for (var d = c.firstChild, e; d && d.parentNode == c; ) {
          e = d.nextSibling;
          if (1 == d.nodeType) {
            var f = a.Of(d);
            f && (f.v = d,
            b.isEnabled() || f.rd(!1),
            b.yc(f),
            f.Bb(d))
          } else
            d.nodeValue && "" != La(d.nodeValue) || c.removeChild(d);
          d = e
        }
    };
    h = Wj.prototype;
    h.Of = function(a) {
      a: {
        D(a);
        a = bf(a);
        for (var b = 0, c = a.length; b < c; b++) {
          var d = a[b];
          if (d = d in Tj ? Tj[d]() : null) {
            a = d;
            break a
          }
        }
        a = null
      }
      return a
    }
    ;
    h.Ld = function(a) {
      a = a.b();
      D(a, "The container DOM element cannot be null.");
      If(a, !0, Rb);
      G && (a.hideFocus = !0);
      var b = this.Wb();
      b && Cd(a, b)
    }
    ;
    h.Da = function(a) {
      return a.b()
    }
    ;
    h.ua = function() {
      return "goog-container"
    }
    ;
    h.we = function(a) {
      var b = this.ua()
        , c = [b, "horizontal" == a.Mc ? b + "-horizontal" : b + "-vertical"];
      a.isEnabled() || c.push(b + "-disabled");
      return c
    }
    ;
    var Zj = function() {}, ak;
    da(Zj);
    var bk = {
      button: "pressed",
      checkbox: "checked",
      menuitem: "selected",
      menuitemcheckbox: "checked",
      menuitemradio: "checked",
      radio: "checked",
      tab: "selected",
      treeitem: "selected"
    };
    h = Zj.prototype;
    h.Wb = function() {}
    ;
    h.S = function(a) {
      return a.Db().S("DIV", this.we(a).join(" "), a.hc())
    }
    ;
    h.W = function(a) {
      return a
    }
    ;
    h.Dd = function(a, b, c) {
      if (a = a.b ? a.b() : a) {
        var d = [b];
        G && !I("7") && (d = ck(bf(a), b),
        d.push(b));
        (c ? ef : gf)(a, d)
      }
    }
    ;
    h.Nb = function() {
      return !0
    }
    ;
    h.Bb = function(a, b) {
      b.id && Ij(a, b.id);
      var c = this.W(b);
      c && c.firstChild ? dk(a, c.firstChild.nextSibling ? Ab(c.childNodes) : c.firstChild) : a.Qb = null;
      var d = 0
        , e = this.ua()
        , f = this.ua()
        , g = !1
        , k = !1
        , l = !1
        , n = Ab(bf(b));
      E(n, function(a) {
        g || a != e ? k || a != f ? d |= this.Ae(a) : k = !0 : (g = !0,
        f == e && (k = !0));
        1 == this.Ae(a) && (nb(c),
        ud(c) && vd(c, !1))
      }, this);
      a.i = d;
      g || (n.push(e),
      f == e && (k = !0));
      k || n.push(f);
      (a = a.mb) && n.push.apply(n, a);
      if (G && !I("7")) {
        var q = ck(n);
        0 < q.length && (n.push.apply(n, q),
        l = !0)
      }
      if (!g || !k || a || l)
        b.className = n.join(" ");
      return b
    }
    ;
    h.Ld = function(a) {
      Rj(a) && this.Vd(a.b(), !0);
      a.isEnabled() && this.sd(a, a.ra)
    }
    ;
    var ek = function(a, b, c) {
      if (a = c || a.Wb())
        D(b, "The element passed as a first parameter cannot be null."),
        c = b.getAttribute("role") || null,
        a != c && Cd(b, a)
    }
      , gk = function(a, b, c) {
      D(b);
      D(c);
      var d = b.Lg;
      null != d && a.sg(c, d);
      b.ra || Ed(c, "hidden", !b.ra);
      b.isEnabled() || fk(c, 1, !b.isEnabled());
      b.wa & 8 && fk(c, 8, !!(b.i & 8));
      b.wa & 16 && fk(c, 16, !!(b.i & 16));
      b.wa & 64 && fk(c, 64, !!(b.i & 64))
    };
    h = Zj.prototype;
    h.sg = function(a, b) {
      Ed(a, "label", b)
    }
    ;
    h.ff = function(a, b) {
      If(a, !b, !G && !Ob)
    }
    ;
    h.Vd = function(a, b) {
      this.Dd(a, this.ua() + "-rtl", b)
    }
    ;
    h.mc = function(a) {
      var b;
      return a.wa & 32 && (b = a.Da()) ? ud(b) : !1
    }
    ;
    h.sd = function(a, b) {
      var c;
      if (a.wa & 32 && (c = a.Da())) {
        if (!b && a.i & 32) {
          try {
            c.blur()
          } catch (d) {}
          a.i & 32 && a.Gd(null)
        }
        ud(c) != b && vd(c, b)
      }
    }
    ;
    h.Pc = function(a, b) {
      N(a, b);
      a && Ed(a, "hidden", !b)
    }
    ;
    h.ab = function(a, b, c) {
      var d = a.b();
      if (d) {
        var e = this.ve(b);
        e && this.Dd(a, e, c);
        fk(d, b, c)
      }
    }
    ;
    var fk = function(a, b, c) {
      ak || (ak = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
      });
      D(a, "The element passed as a first parameter cannot be null.");
      b = ak[b];
      var d = a.getAttribute("role") || null;
      d && (d = bk[d] || b,
      b = "checked" == b || "selected" == b ? d : b);
      b && Ed(a, b, c)
    };
    Zj.prototype.Da = function(a) {
      return a.b()
    }
    ;
    Zj.prototype.ua = function() {
      return "goog-control"
    }
    ;
    Zj.prototype.we = function(a) {
      var b = this.ua()
        , c = [b]
        , d = this.ua();
      d != b && c.push(d);
      b = a.getState();
      for (d = []; b; ) {
        var e = b & -b;
        d.push(this.ve(e));
        b &= ~e
      }
      c.push.apply(c, d);
      (a = a.mb) && c.push.apply(c, a);
      G && !I("7") && c.push.apply(c, ck(c));
      return c
    }
    ;
    var ck = function(a, b) {
      var c = [];
      b && (a = zb(a, [b]));
      E([], function(d) {
        !ub(d, pa(xb, a)) || b && !xb(d, b) || c.push(d.join("_"))
      });
      return c
    };
    Zj.prototype.ve = function(a) {
      this.ke || hk(this);
      return this.ke[a]
    }
    ;
    Zj.prototype.Ae = function(a) {
      if (!this.ui) {
        this.ke || hk(this);
        var b = this.ke, c = {}, d;
        for (d in b)
          c[b[d]] = d;
        this.ui = c
      }
      a = parseInt(this.ui[a], 10);
      return isNaN(a) ? 0 : a
    }
    ;
    var hk = function(a) {
      var b = a.ua()
        , c = b.replace(/\xa0|\s/g, " ");
      D(-1 == c.indexOf(" "), "ControlRenderer has an invalid css class: '" + b + "'");
      a.ke = {
        1: b + "-disabled",
        2: b + "-hover",
        4: b + "-active",
        8: b + "-selected",
        16: b + "-checked",
        32: b + "-focused",
        64: b + "-open"
      }
    };
    var U = function(a, b, c) {
      Fj.call(this, c);
      if (!b) {
        b = this.constructor;
        for (var d; b; ) {
          d = ma(b);
          if (d = Vj[d])
            break;
          b = b.o ? b.o.constructor : null
        }
        b = d ? ha(d.Pa) ? d.Pa() : new d : null
      }
      this.u = b;
      this.Qb = p(a) ? a : null;
      this.Lg = null
    };
    B(U, Fj);
    h = U.prototype;
    h.Qb = null;
    h.i = 0;
    h.wa = 39;
    h.Zi = 255;
    h.Zd = 0;
    h.ra = !0;
    h.mb = null;
    h.Zc = !0;
    h.fe = !1;
    h.Hk = null;
    h.tg = function(a) {
      this.ka && a != this.Zc && ik(this, a);
      this.Zc = a
    }
    ;
    h.Da = function() {
      return this.u.Da(this)
    }
    ;
    h.xe = function() {
      return this.Ia || (this.Ia = new wj)
    }
    ;
    var jk = function(a, b) {
      b && (a.mb ? xb(a.mb, b) || a.mb.push(b) : a.mb = [b],
      a.u.Dd(a, b, !0))
    };
    h = U.prototype;
    h.Dd = function(a, b) {
      b ? jk(this, a) : a && this.mb && yb(this.mb, a) && (0 == this.mb.length && (this.mb = null),
      this.u.Dd(this, a, !1))
    }
    ;
    h.S = function() {
      var a = this.u.S(this);
      this.v = a;
      ek(this.u, a, this.Fd());
      this.fe || this.u.ff(a, !1);
      this.ra || this.u.Pc(a, !1)
    }
    ;
    h.Fd = function() {
      return this.Hk
    }
    ;
    h.sg = function(a) {
      this.Lg = a;
      var b = this.b();
      b && this.u.sg(b, a)
    }
    ;
    h.W = function() {
      return this.u.W(this.b())
    }
    ;
    h.Nb = function(a) {
      return this.u.Nb(a)
    }
    ;
    h.Bd = function(a) {
      this.v = a = this.u.Bb(this, a);
      ek(this.u, a, this.Fd());
      this.fe || this.u.ff(a, !1);
      this.ra = "none" != a.style.display
    }
    ;
    h.Cb = function() {
      U.o.Cb.call(this);
      gk(this.u, this, Jj(this));
      this.u.Ld(this);
      if (this.wa & -2 && (this.Zc && ik(this, !0),
      this.wa & 32)) {
        var a = this.Da();
        if (a) {
          var b = this.xe();
          vj(b, a);
          Kj(this).w(b, "key", this.nb).w(a, "focus", this.Ce).w(a, "blur", this.Gd)
        }
      }
    }
    ;
    var ik = function(a, b) {
      var c = Kj(a)
        , d = a.b();
      b ? (c.w(d, "mouseover", a.Rf).w(d, "mousedown", a.Yc).w(d, "mouseup", a.$c).w(d, "mouseout", a.Qf),
      a.Hd != ba && c.w(d, "contextmenu", a.Hd),
      G && (I(9) || c.w(d, "dblclick", a.rh),
      a.Id || (a.Id = new kk(a),
      Hd(a, pa(Id, a.Id))))) : (c.Ua(d, "mouseover", a.Rf).Ua(d, "mousedown", a.Yc).Ua(d, "mouseup", a.$c).Ua(d, "mouseout", a.Qf),
      a.Hd != ba && c.Ua(d, "contextmenu", a.Hd),
      G && (I(9) || c.Ua(d, "dblclick", a.rh),
      Id(a.Id),
      a.Id = null))
    };
    U.prototype.Fc = function() {
      U.o.Fc.call(this);
      this.Ia && this.Ia.detach();
      this.ra && this.isEnabled() && this.u.sd(this, !1)
    }
    ;
    U.prototype.T = function() {
      U.o.T.call(this);
      this.Ia && (this.Ia.Xa(),
      delete this.Ia);
      delete this.u;
      this.Id = this.mb = this.Qb = null
    }
    ;
    U.prototype.hc = function() {
      return this.Qb
    }
    ;
    var dk = function(a, b) {
      a.Qb = b
    };
    h = U.prototype;
    h.Vd = function(a) {
      U.o.Vd.call(this, a);
      var b = this.b();
      b && this.u.Vd(b, a)
    }
    ;
    h.ff = function(a) {
      this.fe = a;
      var b = this.b();
      b && this.u.ff(b, a)
    }
    ;
    h.Pc = function(a, b) {
      return b || this.ra != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.b()) && this.u.Pc(b, a),
      this.isEnabled() && this.u.sd(this, a),
      this.ra = a,
      !0) : !1
    }
    ;
    h.isEnabled = function() {
      return !(this.i & 1)
    }
    ;
    h.rd = function(a) {
      var b = this.getParent();
      b && "function" == typeof b.isEnabled && !b.isEnabled() || !lk(this, 1, !a) || (a || (this.setActive(!1),
      this.vb(!1)),
      this.ra && this.u.sd(this, a),
      this.ab(1, !a, !0))
    }
    ;
    h.vb = function(a) {
      lk(this, 2, a) && this.ab(2, a)
    }
    ;
    h.Gb = function() {
      return !!(this.i & 4)
    }
    ;
    h.setActive = function(a) {
      lk(this, 4, a) && this.ab(4, a)
    }
    ;
    var mk = function(a, b) {
      lk(a, 64, b) && a.ab(64, b)
    };
    U.prototype.getState = function() {
      return this.i
    }
    ;
    U.prototype.ab = function(a, b, c) {
      c || 1 != a ? this.wa & a && b != !!(this.i & a) && (this.u.ab(this, a, b),
      this.i = b ? this.i | a : this.i & ~a) : this.rd(!b)
    }
    ;
    U.prototype.Ta = function(a, b) {
      if (this.ka && this.i & a && !b)
        throw Error("Component already rendered");
      !b && this.i & a && this.ab(a, !1);
      this.wa = b ? this.wa | a : this.wa & ~a
    }
    ;
    var nk = function(a, b) {
      return !!(a.Zi & b) && !!(a.wa & b)
    }
      , lk = function(a, b, c) {
      return !!(a.wa & b) && !!(a.i & b) != c && (!(a.Zd & b) || a.dispatchEvent(Gj(b, c))) && !a.Cc
    };
    h = U.prototype;
    h.Rf = function(a) {
      (!a.relatedTarget || !pd(this.b(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && nk(this, 2) && this.vb(!0)
    }
    ;
    h.Qf = function(a) {
      a.relatedTarget && pd(this.b(), a.relatedTarget) || !this.dispatchEvent("leave") || (nk(this, 4) && this.setActive(!1),
      nk(this, 2) && this.vb(!1))
    }
    ;
    h.Hd = ba;
    h.Yc = function(a) {
      this.isEnabled() && (nk(this, 2) && this.vb(!0),
      !Td(a) || H && Sb && a.ctrlKey || (nk(this, 4) && this.setActive(!0),
      this.u && this.u.mc(this) && this.Da().focus()));
      this.fe || !Td(a) || H && Sb && a.ctrlKey || a.preventDefault()
    }
    ;
    h.$c = function(a) {
      this.isEnabled() && (nk(this, 2) && this.vb(!0),
      this.Gb() && ok(this, a) && nk(this, 4) && this.setActive(!1))
    }
    ;
    h.rh = function(a) {
      this.isEnabled() && ok(this, a)
    }
    ;
    var ok = function(a, b) {
      if (nk(a, 16)) {
        var c = !(a.i & 16);
        lk(a, 16, c) && a.ab(16, c)
      }
      nk(a, 8) && lk(a, 8, !0) && a.ab(8, !0);
      nk(a, 64) && mk(a, !(a.i & 64));
      c = new Jd("action",a);
      b && (c.altKey = b.altKey,
      c.ctrlKey = b.ctrlKey,
      c.metaKey = b.metaKey,
      c.shiftKey = b.shiftKey,
      c.lg = b.lg);
      return a.dispatchEvent(c)
    };
    U.prototype.Ce = function() {
      nk(this, 32) && lk(this, 32, !0) && this.ab(32, !0)
    }
    ;
    U.prototype.Gd = function() {
      nk(this, 4) && this.setActive(!1);
      nk(this, 32) && lk(this, 32, !1) && this.ab(32, !1)
    }
    ;
    U.prototype.nb = function(a) {
      return this.ra && this.isEnabled() && this.Ic(a) ? (a.preventDefault(),
      a.stopPropagation(),
      !0) : !1
    }
    ;
    U.prototype.Ic = function(a) {
      return 13 == a.keyCode && ok(this, a)
    }
    ;
    if (!ha(U))
      throw Error("Invalid component class " + U);
    if (!ha(Zj))
      throw Error("Invalid renderer class " + Zj);
    var pk = ma(U);
    Vj[pk] = Zj;
    Uj("goog-control", function() {
      return new U(null)
    });
    var kk = function(a) {
      Gd.call(this);
      this.qe = a;
      this.oe = !1;
      this.Qa = new kf(this);
      Hd(this, pa(Id, this.Qa));
      a = Jj(this.qe);
      this.Qa.w(a, "mousedown", this.Sj).w(a, "mouseup", this.Tj).w(a, "click", this.Bj)
    };
    B(kk, Gd);
    var qk = !G || fc(9);
    kk.prototype.Sj = function() {
      this.oe = !1
    }
    ;
    kk.prototype.Tj = function() {
      this.oe = !0
    }
    ;
    var rk = function(a, b) {
      if (!qk)
        return a.button = 0,
        a.type = b,
        a;
      var c = document.createEvent("MouseEvents");
      c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
      return c
    };
    kk.prototype.Bj = function(a) {
      if (this.oe)
        this.oe = !1;
      else {
        var b = a.Tb
          , c = b.button
          , d = b.type
          , e = rk(b, "mousedown");
        this.qe.Yc(new Rd(e,a.currentTarget));
        e = rk(b, "mouseup");
        this.qe.$c(new Rd(e,a.currentTarget));
        qk || (b.button = c,
        b.type = d)
      }
    }
    ;
    kk.prototype.T = function() {
      this.qe = null;
      kk.o.T.call(this)
    }
    ;
    var sk = function(a, b, c) {
      Fj.call(this, c);
      this.u = b || Wj.Pa();
      this.Mc = a || "vertical"
    };
    B(sk, Fj);
    h = sk.prototype;
    h.Xf = null;
    h.Ia = null;
    h.u = null;
    h.Mc = null;
    h.ra = !0;
    h.Ec = !0;
    h.Nf = !0;
    h.va = -1;
    h.Ba = null;
    h.ad = !1;
    h.Ui = !1;
    h.Gk = !0;
    h.Ob = null;
    h.Da = function() {
      return this.Xf || this.u.Da(this)
    }
    ;
    h.xe = function() {
      return this.Ia || (this.Ia = new wj(this.Da()))
    }
    ;
    h.S = function() {
      this.v = this.u.S(this)
    }
    ;
    h.W = function() {
      return this.u.W(this.b())
    }
    ;
    h.Nb = function(a) {
      return this.u.Nb(a)
    }
    ;
    h.Bd = function(a) {
      this.v = this.u.Bb(this, a);
      "none" == a.style.display && (this.ra = !1)
    }
    ;
    h.Cb = function() {
      sk.o.Cb.call(this);
      Oj(this, function(a) {
        a.ka && tk(this, a)
      }, this);
      var a = this.b();
      this.u.Ld(this);
      this.Pc(this.ra, !0);
      Kj(this).w(this, "enter", this.Pf).w(this, "highlight", this.Gj).w(this, "unhighlight", this.Yj).w(this, "open", this.Uj).w(this, "close", this.Cj).w(a, "mousedown", this.Yc).w(Zc(a), "mouseup", this.Dj).w(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.Aj);
      this.mc() && uk(this, !0)
    }
    ;
    var uk = function(a, b) {
      var c = Kj(a)
        , d = a.Da();
      b ? c.w(d, "focus", a.Ce).w(d, "blur", a.Gd).w(a.xe(), "key", a.nb) : c.Ua(d, "focus", a.Ce).Ua(d, "blur", a.Gd).Ua(a.xe(), "key", a.nb)
    };
    h = sk.prototype;
    h.Fc = function() {
      this.Kb(-1);
      this.Ba && mk(this.Ba, !1);
      this.ad = !1;
      sk.o.Fc.call(this)
    }
    ;
    h.T = function() {
      sk.o.T.call(this);
      this.Ia && (this.Ia.Xa(),
      this.Ia = null);
      this.u = this.Ba = this.Ob = this.Xf = null
    }
    ;
    h.Pf = function() {
      return !0
    }
    ;
    h.Gj = function(a) {
      var b = Sj(this, a.target);
      if (-1 < b && b != this.va) {
        var c = vk(this);
        c && c.vb(!1);
        this.va = b;
        c = vk(this);
        this.ad && c.setActive(!0);
        this.Gk && this.Ba && c != this.Ba && (c.wa & 64 ? mk(c, !0) : mk(this.Ba, !1))
      }
      b = this.b();
      D(b, "The DOM element for the container cannot be null.");
      null != a.target.b() && Ed(b, "activedescendant", a.target.b().id)
    }
    ;
    h.Yj = function(a) {
      a.target == vk(this) && (this.va = -1);
      a = this.b();
      D(a, "The DOM element for the container cannot be null.");
      a.removeAttribute(Dd("activedescendant"))
    }
    ;
    h.Uj = function(a) {
      (a = a.target) && a != this.Ba && a.getParent() == this && (this.Ba && mk(this.Ba, !1),
      this.Ba = a)
    }
    ;
    h.Cj = function(a) {
      a.target == this.Ba && (this.Ba = null);
      var b = this.b()
        , c = a.target.b();
      b && a.target.i & 2 && c && (a = "",
      c && (a = c.id,
      D(a, "The active element should have an id.")),
      Ed(b, "activedescendant", a))
    }
    ;
    h.Yc = function(a) {
      this.Ec && (this.ad = !0);
      var b = this.Da();
      b && ud(b) ? b.focus() : a.preventDefault()
    }
    ;
    h.Dj = function() {
      this.ad = !1
    }
    ;
    h.Aj = function(a) {
      a: {
        var b = a.target;
        if (this.Ob)
          for (var c = this.b(); b && b !== c; ) {
            var d = b.id;
            if (d in this.Ob) {
              b = this.Ob[d];
              break a
            }
            b = b.parentNode
          }
        b = null
      }
      if (b)
        switch (a.type) {
        case "mousedown":
          b.Yc(a);
          break;
        case "mouseup":
          b.$c(a);
          break;
        case "mouseover":
          b.Rf(a);
          break;
        case "mouseout":
          b.Qf(a);
          break;
        case "contextmenu":
          b.Hd(a)
        }
    }
    ;
    h.Ce = function() {}
    ;
    h.Gd = function() {
      this.Kb(-1);
      this.ad = !1;
      this.Ba && mk(this.Ba, !1)
    }
    ;
    h.nb = function(a) {
      return this.isEnabled() && this.ra && (0 != Pj(this) || this.Xf) && this.Ic(a) ? (a.preventDefault(),
      a.stopPropagation(),
      !0) : !1
    }
    ;
    h.Ic = function(a) {
      var b = vk(this);
      if (b && "function" == typeof b.nb && b.nb(a) || this.Ba && this.Ba != b && "function" == typeof this.Ba.nb && this.Ba.nb(a))
        return !0;
      if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)
        return !1;
      switch (a.keyCode) {
      case 27:
        if (this.mc())
          this.Da().blur();
        else
          return !1;
        break;
      case 36:
        wk(this);
        break;
      case 35:
        xk(this);
        break;
      case 38:
        if ("vertical" == this.Mc)
          yk(this);
        else
          return !1;
        break;
      case 37:
        if ("horizontal" == this.Mc)
          Rj(this) ? zk(this) : yk(this);
        else
          return !1;
        break;
      case 40:
        if ("vertical" == this.Mc)
          zk(this);
        else
          return !1;
        break;
      case 39:
        if ("horizontal" == this.Mc)
          Rj(this) ? yk(this) : zk(this);
        else
          return !1;
        break;
      default:
        return !1
      }
      return !0
    }
    ;
    var tk = function(a, b) {
      var c = b.b();
      c = c.id || (c.id = Hj(b));
      a.Ob || (a.Ob = {});
      a.Ob[c] = b
    };
    h = sk.prototype;
    h.yc = function(a, b) {
      pb(a, U, "The child of a container must be a control");
      sk.o.yc.call(this, a, b)
    }
    ;
    h.vf = function(a, b, c) {
      pb(a, U);
      a.Zd |= 2;
      a.Zd |= 64;
      !this.mc() && this.Ui || a.Ta(32, !1);
      a.tg(!1);
      var d = a.getParent() == this ? Sj(this, a) : -1;
      sk.o.vf.call(this, a, b, c);
      a.ka && this.ka && tk(this, a);
      a = d;
      -1 == a && (a = Pj(this));
      a == this.va ? this.va = Math.min(Pj(this) - 1, b) : a > this.va && b <= this.va ? this.va++ : a < this.va && b > this.va && this.va--
    }
    ;
    h.removeChild = function(a, b) {
      a = r(a) ? Lj(this, a) : a;
      pb(a, U);
      if (a) {
        var c = Sj(this, a);
        -1 != c && (c == this.va ? (a.vb(!1),
        this.va = -1) : c < this.va && this.va--);
        var d = a.b();
        d && d.id && this.Ob && (c = this.Ob,
        d = d.id,
        d in c && delete c[d])
      }
      a = sk.o.removeChild.call(this, a, b);
      a.tg(!0);
      return a
    }
    ;
    h.setOrientation = function(a) {
      if (this.b())
        throw Error("Component already rendered");
      this.Mc = a
    }
    ;
    h.Pc = function(a, b) {
      if (b || this.ra != a && this.dispatchEvent(a ? "show" : "hide")) {
        this.ra = a;
        var c = this.b();
        c && (N(c, a),
        this.mc() && Xj(this.Da(), this.Ec && this.ra),
        b || this.dispatchEvent(this.ra ? "aftershow" : "afterhide"));
        return !0
      }
      return !1
    }
    ;
    h.isEnabled = function() {
      return this.Ec
    }
    ;
    h.rd = function(a) {
      this.Ec != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Ec = !0,
      Oj(this, function(a) {
        a.Bi ? delete a.Bi : a.rd(!0)
      })) : (Oj(this, function(a) {
        a.isEnabled() ? a.rd(!1) : a.Bi = !0
      }),
      this.ad = this.Ec = !1),
      this.mc() && Xj(this.Da(), a && this.ra))
    }
    ;
    h.mc = function() {
      return this.Nf
    }
    ;
    h.sd = function(a) {
      a != this.Nf && this.ka && uk(this, a);
      this.Nf = a;
      this.Ec && this.ra && Xj(this.Da(), a)
    }
    ;
    h.Kb = function(a) {
      (a = Qj(this, a)) ? a.vb(!0) : -1 < this.va && vk(this).vb(!1)
    }
    ;
    h.vb = function(a) {
      this.Kb(Sj(this, a))
    }
    ;
    var vk = function(a) {
      return Qj(a, a.va)
    }
      , wk = function(a) {
      Ak(a, function(a, c) {
        return (a + 1) % c
      }, Pj(a) - 1)
    }
      , xk = function(a) {
      Ak(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
      }, 0)
    }
      , zk = function(a) {
      Ak(a, function(a, c) {
        return (a + 1) % c
      }, a.va)
    }
      , yk = function(a) {
      Ak(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
      }, a.va)
    }
      , Ak = function(a, b, c) {
      c = 0 > c ? Sj(a, a.Ba) : c;
      var d = Pj(a);
      c = b.call(a, c, d);
      for (var e = 0; e <= d; ) {
        var f = Qj(a, c);
        if (f && a.Vg(f)) {
          a.Kb(c);
          break
        }
        e++;
        c = b.call(a, c, d)
      }
    };
    sk.prototype.Vg = function(a) {
      return a.ra && a.isEnabled() && !!(a.wa & 2)
    }
    ;
    var Bk = function() {};
    B(Bk, Zj);
    da(Bk);
    Bk.prototype.ua = function() {
      return "goog-menuheader"
    }
    ;
    var Ck = function(a, b, c) {
      U.call(this, a, c || Bk.Pa(), b);
      this.Ta(1, !1);
      this.Ta(2, !1);
      this.Ta(4, !1);
      this.Ta(32, !1);
      this.i = 1
    };
    B(Ck, U);
    Uj("goog-menuheader", function() {
      return new Ck(null)
    });
    var Dk = function() {
      this.Xg = []
    };
    B(Dk, Zj);
    da(Dk);
    var Ek = function(a, b) {
      var c = a.Xg[b];
      if (!c) {
        switch (b) {
        case 0:
          c = a.ua() + "-highlight";
          break;
        case 1:
          c = a.ua() + "-checkbox";
          break;
        case 2:
          c = a.ua() + "-content"
        }
        a.Xg[b] = c
      }
      return c
    };
    Dk.prototype.Wb = function() {
      return "menuitem"
    }
    ;
    Dk.prototype.S = function(a) {
      var b = a.Db().S("DIV", this.we(a).join(" "), Fk(this, a.hc(), a.Db()));
      Gk(this, a, b, !!(a.wa & 8) || !!(a.wa & 16));
      return b
    }
    ;
    Dk.prototype.W = function(a) {
      return a && a.firstChild
    }
    ;
    Dk.prototype.Bb = function(a, b) {
      D(b);
      var c = od(b)
        , d = Ek(this, 2);
      c && cf(c, d) || b.appendChild(Fk(this, b.childNodes, a.Db()));
      cf(b, "goog-option") && (a.hf(!0),
      this.hf(a, b, !0));
      return Dk.o.Bb.call(this, a, b)
    }
    ;
    var Fk = function(a, b, c) {
      a = Ek(a, 2);
      return c.S("DIV", a, b)
    };
    Dk.prototype.ni = function(a, b, c) {
      a && b && Gk(this, a, b, c)
    }
    ;
    Dk.prototype.hf = function(a, b, c) {
      a && b && Gk(this, a, b, c)
    }
    ;
    var Gk = function(a, b, c, d) {
      ek(a, c, b.Fd());
      gk(a, b, c);
      var e;
      if (e = a.W(c)) {
        e = e.firstChild;
        var f = Ek(a, 1);
        e = !!e && ia(e) && 1 == e.nodeType && cf(e, f)
      } else
        e = !1;
      d != e && (hf(c, "goog-option", d),
      c = a.W(c),
      d ? (a = Ek(a, 1),
      c.insertBefore(b.Db().S("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
    };
    Dk.prototype.ve = function(a) {
      switch (a) {
      case 2:
        return Ek(this, 0);
      case 16:
      case 8:
        return "goog-option-selected";
      default:
        return Dk.o.ve.call(this, a)
      }
    }
    ;
    Dk.prototype.Ae = function(a) {
      var b = Ek(this, 0);
      switch (a) {
      case "goog-option-selected":
        return 16;
      case b:
        return 2;
      default:
        return Dk.o.Ae.call(this, a)
      }
    }
    ;
    Dk.prototype.ua = function() {
      return "goog-menuitem"
    }
    ;
    var Hk = function(a, b, c, d) {
      U.call(this, a, d || Dk.Pa(), c)
    };
    B(Hk, U);
    h = Hk.prototype;
    h.Ta = function(a, b) {
      Hk.o.Ta.call(this, a, b);
      switch (a) {
      case 8:
        this.i & 16 && !b && lk(this, 16, !1) && this.ab(16, !1);
        (a = this.b()) && this.u.ni(this, a, b);
        break;
      case 16:
        (a = this.b()) && this.u.hf(this, a, b)
      }
    }
    ;
    h.ni = function(a) {
      this.Ta(8, a)
    }
    ;
    h.hf = function(a) {
      this.Ta(16, a)
    }
    ;
    h.$c = function(a) {
      var b = this.getParent();
      if (b) {
        var c = b.Sh;
        b.Sh = null;
        if (b = c && u(a.clientX))
          b = new J(a.clientX,a.clientY),
          b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
        if (b)
          return
      }
      Hk.o.$c.call(this, a)
    }
    ;
    h.Ic = function(a) {
      return a.keyCode == this.Mh && ok(this, a) ? !0 : Hk.o.Ic.call(this, a)
    }
    ;
    h.xj = function() {
      return this.Mh
    }
    ;
    Uj("goog-menuitem", function() {
      return new Hk(null)
    });
    Hk.prototype.Fd = function() {
      return this.wa & 16 ? "menuitemcheckbox" : this.wa & 8 ? "menuitemradio" : Hk.o.Fd.call(this)
    }
    ;
    Hk.prototype.getParent = function() {
      return U.prototype.getParent.call(this)
    }
    ;
    Hk.prototype.ze = function() {
      return U.prototype.ze.call(this)
    }
    ;
    var Ik = function() {};
    B(Ik, Zj);
    da(Ik);
    Ik.prototype.S = function(a) {
      return a.Db().S("DIV", this.ua())
    }
    ;
    Ik.prototype.Bb = function(a, b) {
      b.id && Ij(a, b.id);
      if ("HR" == b.tagName) {
        var c = b;
        b = this.S(a);
        c.parentNode && c.parentNode.insertBefore(b, c);
        md(c)
      } else
        df(b, this.ua());
      return b
    }
    ;
    Ik.prototype.ua = function() {
      return "goog-menuseparator"
    }
    ;
    var Jk = function(a, b) {
      U.call(this, null, a || Ik.Pa(), b);
      this.Ta(1, !1);
      this.Ta(2, !1);
      this.Ta(4, !1);
      this.Ta(32, !1);
      this.i = 1
    };
    B(Jk, U);
    Jk.prototype.Cb = function() {
      Jk.o.Cb.call(this);
      var a = this.b();
      D(a, "The DOM element for the separator cannot be null.");
      Cd(a, "separator")
    }
    ;
    Uj("goog-menuseparator", function() {
      return new Jk
    });
    var Kk = function(a) {
      this.Mg = a || "menu"
    };
    B(Kk, Wj);
    da(Kk);
    Kk.prototype.Nb = function(a) {
      return "UL" == a.tagName || Kk.o.Nb.call(this, a)
    }
    ;
    Kk.prototype.Of = function(a) {
      return "HR" == a.tagName ? new Jk : Kk.o.Of.call(this, a)
    }
    ;
    Kk.prototype.ua = function() {
      return "goog-menu"
    }
    ;
    Kk.prototype.Ld = function(a) {
      Kk.o.Ld.call(this, a);
      a = a.b();
      D(a, "The menu DOM element cannot be null.");
      Ed(a, "haspopup", "true")
    }
    ;
    Uj("goog-menuseparator", function() {
      return new Jk
    });
    var Lk = function(a, b) {
      sk.call(this, "vertical", b || Kk.Pa(), a);
      this.sd(!1)
    };
    B(Lk, sk);
    h = Lk.prototype;
    h.Ig = !0;
    h.Vi = !1;
    h.ua = function() {
      return this.u.ua()
    }
    ;
    h.removeItem = function(a) {
      (a = this.removeChild(a, !0)) && a.Xa()
    }
    ;
    h.setPosition = function(a, b) {
      var c = this.ra;
      c || N(this.b(), !0);
      var d = this.b()
        , e = yf(d);
      a instanceof J && (b = a.y,
      a = a.x);
      a = ib(a) - e.x;
      vf(d, d.offsetLeft + a, d.offsetTop + (Number(b) - e.y));
      c || N(this.b(), !1)
    }
    ;
    h.Pc = function(a, b, c) {
      (b = Lk.o.Pc.call(this, a, b)) && a && this.ka && this.Ig && this.Da().focus();
      this.Sh = a && c && u(c.clientX) ? new J(c.clientX,c.clientY) : null;
      return b
    }
    ;
    h.Pf = function(a) {
      this.Ig && this.Da().focus();
      return Lk.o.Pf.call(this, a)
    }
    ;
    h.Vg = function(a) {
      return (this.Vi || a.isEnabled()) && a.ra && !!(a.wa & 2)
    }
    ;
    h.Bd = function(a) {
      var b = this.u;
      var c = this.Db();
      c = $c(c.H, "DIV", b.ua() + "-content", a);
      for (var d = c.length, e = 0; e < d; e++)
        Yj(b, this, c[e]);
      Lk.o.Bd.call(this, a)
    }
    ;
    h.Ic = function(a) {
      var b = Lk.o.Ic.call(this, a);
      b || Oj(this, function(c) {
        !b && c.xj && c.Mh == a.keyCode && (this.isEnabled() && this.vb(c),
        b = c.nb(a))
      }, this);
      return b
    }
    ;
    h.Kb = function(a) {
      Lk.o.Kb.call(this, a);
      var b = Qj(this, a);
      if (b) {
        a = this.b() || gd(document);
        var c = b.b();
        b = a || gd(document);
        var d = yf(c)
          , e = yf(b)
          , f = Nf(b);
        if (b == gd(document)) {
          var g = d.x - b.scrollLeft;
          d = d.y - b.scrollTop;
          G && !fc(10) && (g += f.left,
          d += f.top)
        } else
          g = d.x - e.x - f.left,
          d = d.y - e.y - f.top;
        c = Df(c);
        f = b.clientHeight - c.height;
        e = b.scrollLeft;
        var k = b.scrollTop;
        e += Math.min(g, Math.max(g - (b.clientWidth - c.width), 0));
        k += Math.min(d, Math.max(d - f, 0));
        b = new J(e,k);
        a.scrollLeft = b.x;
        a.scrollTop = b.y
      }
    }
    ;
    G && I(8);
    var Mk = function(a, b) {
      return null != a && a.Wa === b
    }
      , Nk = function(a) {
      if (null != a)
        switch (a.ac) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0
        }
      return null
    }
      , W = function(a) {
      return null != a && a.Wa === fj ? (D(a.constructor === lj),
      a) : a instanceof Ic ? V(Jc(a), a.Hc()) : V(Va(String(String(a))), Nk(a))
    }
      , Ok = function(a) {
      return new kj(a,void 0)
    }
      , V = function(a) {
      function b(a) {
        this.content = a
      }
      b.prototype = a.prototype;
      return function(a, d) {
        a = new b(String(a));
        void 0 !== d && (a.ac = d);
        return a
      }
    }(lj)
      , Pk = function(a) {
      var b = [], c;
      for (c in a)
        b.push(c);
      return b
    }
      , Qk = function(a) {
      return (a = String(a)) ? new kj(a,void 0) : ""
    }
      , Rk = function(a) {
      function b(a) {
        this.content = a
      }
      b.prototype = a.prototype;
      return function(a, d) {
        a = String(a);
        if (!a)
          return "";
        a = new b(a);
        void 0 !== d && (a.ac = d);
        return a
      }
    }(lj)
      , X = function(a) {
      return Mk(a, fj) ? (D(a.constructor === lj),
      Sk(String(a.hc()).replace(Tk, "").replace(Uk, "&lt;"))) : Va(String(a))
    }
      , Wk = function(a) {
      if (Mk(a, ij))
        return D(a.constructor === oj),
        a.hc().replace(/([^"'\s])$/, "$1 ");
      a = String(a);
      Vk.test(a) || (hb("Bad value `%s` for |filterHtmlAttributes", [a]),
      a = "zSoyz");
      return a
    }
      , al = function(a) {
      if (Mk(a, gj))
        return D(a.constructor === mj),
        Xk(a);
      if (Mk(a, hj))
        return D(a.constructor === nj),
        Xk(a);
      a instanceof uc ? a = Xk(vc(a)) : a instanceof rc ? a = Xk(sc(a)) : (a = String(a),
      Yk.test(a) ? a = a.replace(Zk, $k) : (hb("Bad value `%s` for |filterNormalizeUri", [a]),
      a = "about:invalid#zSoyz"));
      return a
    }
      , Y = function(a, b, c, d) {
      a || (a = c instanceof Function ? c.displayName || c.name || "unknown type name" : c instanceof Object ? c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) : null === c ? "null" : typeof c,
      hb("expected param " + b + " of type " + d + (", but got " + a) + "."));
      return c
    }
      , bl = {
      "\x00": "&#0;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\x0B": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "-": "&#45;",
      "/": "&#47;",
      "<": "&lt;",
      "=": "&#61;",
      ">": "&gt;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;"
    }
      , cl = function(a) {
      return bl[a]
    }
      , dl = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\x0B": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD"
    }
      , $k = function(a) {
      return dl[a]
    }
      , el = /[\x00\x22\x27\x3c\x3e]/g
      , Zk = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g
      , Yk = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i
      , fl = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i
      , Vk = /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i
      , Sk = function(a) {
      return String(a).replace(el, cl)
    }
      , Xk = function(a) {
      return String(a).replace(Zk, $k)
    }
      , Tk = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
      , Uk = /</g;
    var gl = function(a, b) {
      M.call(this);
      this.Sg = a || 0;
      this.Ja = b || K();
      this.zg = [];
      this.ld = 0;
      this.Qa = new kf(this);
      this.Va = this.Ja.S("DIV", {
        "class": "devsite-toast",
        style: "display:none"
      });
      this.Ja.H.body.appendChild(this.Va);
      Cd(this.Va, "alert");
      Ed(this.Va, "live", "polite");
      this.Qa.w(this.Va, "click", this.yk)
    };
    B(gl, M);
    var hl = function(a) {
      Jd.call(this, a)
    };
    B(hl, Jd);
    gl.prototype.xc = null;
    gl.prototype.yk = function(a) {
      il(this);
      "A" == a.target.tagName ? ("#" == a.target.href && a.preventDefault(),
      a = new hl("anchor-click")) : a = new hl("click");
      this.dispatchEvent(a);
      jl(this)
    }
    ;
    var ll = function(a, b, c) {
      a.zg.push(new kl("",b,null == c ? 5E3 : c,void 0));
      a.xc || jl(a)
    }
      , jl = function(a) {
      D(!a.xc);
      a.zg.length && (a.ld = -112,
      a.Va.style.bottom = a.ld + "px",
      a.xc = a.zg.pop(),
      a.xc.ub(a.Va),
      a.Va.style.display = "block",
      a.Kg())
    };
    gl.prototype.Kg = function() {
      this.ld = Math.min(this.ld + 12, this.Sg);
      this.Va.style.bottom = this.ld + "px";
      this.ld < this.Sg ? this.Lb = $e(this.Kg, 30, this) : (this.Lb = null,
      0 < this.xc.dh && (this.Lb = $e(function() {
        il(this);
        jl(this)
      }, this.xc.dh, this)))
    }
    ;
    var il = function(a) {
      a.Lb && (m.clearTimeout(a.Lb),
      a.Lb = null);
      a.Va.style.display = "none";
      ld(a.Va);
      a.xc = null
    };
    gl.prototype.T = function() {
      il(this);
      md(this.Va);
      this.Va = null;
      this.Qa.Xa();
      this.Qa = null;
      gl.o.T.call(this)
    }
    ;
    var kl = function(a, b, c, d) {
      this.Zk = a;
      this.Qb = b;
      this.dh = c;
      this.type = d || null
    };
    kl.prototype.ub = function(a) {
      var b = K(a);
      b = z(b.S, b, "div");
      a.appendChild(b("devsite-toast-top"));
      var c = b({
        className: "devsite-toast-content"
      });
      r(this.Qb) ? c.innerHTML = this.Qb : c.appendChild(this.Qb);
      a.appendChild(b("devsite-toast-fill", b({
        className: "devsite-toast-title",
        innerHTML: this.Zk
      }), c))
    }
    ;
    var ml = function(a, b) {
      this.Ja = b || K();
      this.td = a || null;
      this.Ok = []
    };
    ml.prototype.ub = function(a, b) {
      var c = a(b || {}, void 0, this.td ? this.td.getData() : {});
      D(!(c instanceof S) || c.Wa === fj, 'render was called with a strict template of kind other than "html" (consider using renderText or renderStrict)');
      nl(this, a, b);
      this.uh();
      return String(c)
    }
    ;
    var ol = function(a, b, c) {
      var d = b(c || {}, void 0, a.td ? a.td.getData() : {});
      pb(d, S, "renderText cannot be called on a non-strict soy template");
      D(d.Wa === jj, 'renderText was called with a template of kind other than "text"');
      nl(a, b, c);
      a.uh();
      return String(d)
    };
    ml.prototype.uh = ba;
    var nl = function(a, b, c) {
      a.Ok.push({
        Hn: b.g,
        data: c || null,
        xn: a.td ? a.td.getData() : {}
      })
    };
    var pl = function(a) {
      var b = Y(r(a.content) || a.content instanceof S, "content", a.content, "!goog.soy.data.SanitizedContent|string")
        , c = Y(r(a.type) || a.type instanceof S, "type", a.type, "!goog.soy.data.SanitizedContent|string");
      a = Y(null == a.button || r(a.button) || a.button instanceof S, "button", a.button, "!goog.soy.data.SanitizedContent|null|string|undefined");
      return V('<span class="devsite-toast-content-span devsite-toast-' + X(c) + '">' + W(b) + '</span><div class="devsite-toast-buttons">' + (a ? '<button type="button" class="devsite-toast-action devsite-top-button button-text-white">' + W(a) + "</button>" : "") + '<button type="button" class="devsite-toast-dismiss button-transparent"></button></div>')
    };
    pl.g = "devsite.snackbarBodyRenderer.snackbar";
    var ql;
    A("devsite.notification.init", function(a) {
      rl.Pa().lc(a)
    });
    A("devsite.notification.showNotification", function(a) {
      rl.Pa().showNotification(a)
    });
    A("devsite.notification.showError", function(a) {
      sl(a)
    });
    var ul = function(a, b, c, d, e) {
      a = tj(pl, {
        content: r(b) ? b : "",
        type: a,
        button: d
      });
      r(b) || a.querySelector(".devsite-toast-content-span").appendChild(b);
      c && (b = a.querySelector(".devsite-toast-dismiss"),
      L(b, "click", c));
      e && (b = a.querySelector(".devsite-toast-action"),
      L(b, "click", e));
      ll(tl(), a, -1)
    }
      , vl = function(a, b, c, d) {
      ul("", a, b, c, d)
    };
    A("devsite.notification.showSnackbar", vl);
    A("devsite.notification.showCautionSnackbar", function(a, b, c, d) {
      ul("caution", a, b, c, d)
    });
    A("devsite.notification.showErrorSnackbar", function(a, b, c, d) {
      ul("error", a, b, c, d)
    });
    A("devsite.notification.showSuccessSnackbar", function(a, b, c, d) {
      ul("success", a, b, c, d)
    });
    var sl = function(a) {
      ll(tl(), a, 5E3)
    };
    A("devsite.notification.showToast", sl);
    var tl = function() {
      ql || (ql = new gl);
      return ql
    };
    A("devsite.notification.getToaster", tl);
    var wl = function(a, b, c, d) {
      this.Uc = b || null;
      this.ri = c || null;
      this.hh = d || null;
      this.nk = a || null
    };
    A("devsite.notification.Notification", wl);
    wl.prototype.Gb = function() {
      if (this.ri && qa() < this.ri || this.hh && qa() > this.hh)
        var a = !1;
      else
        this.Uc ? (a = rl.Pa(),
        a = !xb(a.sf, this.Uc)) : a = !0;
      return a
    }
    ;
    wl.prototype.isActive = wl.prototype.Gb;
    wl.prototype.tf = function(a) {
      this.Uc && xl(this.Uc, a)
    }
    ;
    wl.prototype.acknowledge = wl.prototype.tf;
    var xl = function(a, b) {
      rl.Pa().sf.push(a);
      pi("/profile/acknowledgeNotification", b, "POST", {
        notification_id: a
      })
    };
    A("devsite.notification.acknowledgeNotificationById", xl);
    var rl = function() {
      this.sf = null;
      this.ih = new kf(this);
      Hd(this, pa(Id, this.ih))
    };
    da(rl);
    B(rl, Gd);
    rl.prototype.lc = function(a) {
      this.sf = mb(JSON.parse(a));
      E(document.querySelectorAll(".devsite-acknowledgement-link"), this.Ti, this)
    }
    ;
    rl.prototype.init = rl.prototype.lc;
    rl.prototype.showNotification = function(a) {
      if (a.Gb()) {
        var b = null;
        a.Uc && (b = function() {
          xl(a.Uc)
        }
        );
        vl(a.nk, b)
      }
    }
    ;
    rl.prototype.showNotification = rl.prototype.showNotification;
    rl.prototype.Ti = function(a) {
      this.ih.w(a, "click", pa(this.Qi, a))
    }
    ;
    rl.prototype.Kk = function() {
      window.location.reload()
    }
    ;
    rl.prototype.Qi = function(a, b) {
      (new wl(void 0,"wall-" + R(a, "globallyUniqueWallId"))).tf(z(this.Kk, this));
      b.preventDefault()
    }
    ;
    var yl = function() {
      this.$b = -1
    };
    var zl = function() {
      this.$b = 64;
      this.Fa = Array(4);
      this.$i = Array(this.$b);
      this.lf = this.wd = 0;
      this.reset()
    };
    B(zl, yl);
    zl.prototype.reset = function() {
      this.Fa[0] = 1732584193;
      this.Fa[1] = 4023233417;
      this.Fa[2] = 2562383102;
      this.Fa[3] = 271733878;
      this.lf = this.wd = 0
    }
    ;
    var Al = function(a, b, c) {
      c || (c = 0);
      var d = Array(16);
      if (r(b))
        for (var e = 0; 16 > e; ++e)
          d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
      else
        for (e = 0; 16 > e; ++e)
          d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
      b = a.Fa[0];
      c = a.Fa[1];
      e = a.Fa[2];
      var f = a.Fa[3];
      var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
      b = c + (g << 7 & 4294967295 | g >>> 25);
      g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
      f = b + (g << 12 & 4294967295 | g >>> 20);
      g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
      e = f + (g << 17 & 4294967295 | g >>> 15);
      g = c + (b ^ e & (f ^ b)) + d[3] + 3250441966 & 4294967295;
      c = e + (g << 22 & 4294967295 | g >>> 10);
      g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
      b = c + (g << 7 & 4294967295 | g >>> 25);
      g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
      f = b + (g << 12 & 4294967295 | g >>> 20);
      g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
      e = f + (g << 17 & 4294967295 | g >>> 15);
      g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
      c = e + (g << 22 & 4294967295 | g >>> 10);
      g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
      b = c + (g << 7 & 4294967295 | g >>> 25);
      g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
      f = b + (g << 12 & 4294967295 | g >>> 20);
      g = e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
      e = f + (g << 17 & 4294967295 | g >>> 15);
      g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
      c = e + (g << 22 & 4294967295 | g >>> 10);
      g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
      b = c + (g << 7 & 4294967295 | g >>> 25);
      g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
      f = b + (g << 12 & 4294967295 | g >>> 20);
      g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
      e = f + (g << 17 & 4294967295 | g >>> 15);
      g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
      c = e + (g << 22 & 4294967295 | g >>> 10);
      g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
      b = c + (g << 5 & 4294967295 | g >>> 27);
      g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
      f = b + (g << 9 & 4294967295 | g >>> 23);
      g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
      e = f + (g << 14 & 4294967295 | g >>> 18);
      g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
      c = e + (g << 20 & 4294967295 | g >>> 12);
      g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
      b = c + (g << 5 & 4294967295 | g >>> 27);
      g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
      f = b + (g << 9 & 4294967295 | g >>> 23);
      g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
      e = f + (g << 14 & 4294967295 | g >>> 18);
      g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
      c = e + (g << 20 & 4294967295 | g >>> 12);
      g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
      b = c + (g << 5 & 4294967295 | g >>> 27);
      g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
      f = b + (g << 9 & 4294967295 | g >>> 23);
      g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
      e = f + (g << 14 & 4294967295 | g >>> 18);
      g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
      c = e + (g << 20 & 4294967295 | g >>> 12);
      g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
      b = c + (g << 5 & 4294967295 | g >>> 27);
      g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
      f = b + (g << 9 & 4294967295 | g >>> 23);
      g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
      e = f + (g << 14 & 4294967295 | g >>> 18);
      g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
      c = e + (g << 20 & 4294967295 | g >>> 12);
      g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
      b = c + (g << 4 & 4294967295 | g >>> 28);
      g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
      f = b + (g << 11 & 4294967295 | g >>> 21);
      g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
      e = f + (g << 16 & 4294967295 | g >>> 16);
      g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
      c = e + (g << 23 & 4294967295 | g >>> 9);
      g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
      b = c + (g << 4 & 4294967295 | g >>> 28);
      g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
      f = b + (g << 11 & 4294967295 | g >>> 21);
      g = e + (f ^ b ^ c) + d[7] + 4139469664 & 4294967295;
      e = f + (g << 16 & 4294967295 | g >>> 16);
      g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
      c = e + (g << 23 & 4294967295 | g >>> 9);
      g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
      b = c + (g << 4 & 4294967295 | g >>> 28);
      g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
      f = b + (g << 11 & 4294967295 | g >>> 21);
      g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
      e = f + (g << 16 & 4294967295 | g >>> 16);
      g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
      c = e + (g << 23 & 4294967295 | g >>> 9);
      g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
      b = c + (g << 4 & 4294967295 | g >>> 28);
      g = f + (b ^ c ^ e) + d[12] + 3873151461 & 4294967295;
      f = b + (g << 11 & 4294967295 | g >>> 21);
      g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
      e = f + (g << 16 & 4294967295 | g >>> 16);
      g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
      c = e + (g << 23 & 4294967295 | g >>> 9);
      g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
      b = c + (g << 6 & 4294967295 | g >>> 26);
      g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
      f = b + (g << 10 & 4294967295 | g >>> 22);
      g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
      e = f + (g << 15 & 4294967295 | g >>> 17);
      g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
      c = e + (g << 21 & 4294967295 | g >>> 11);
      g = b + (e ^ (c | ~f)) + d[12] + 1700485571 & 4294967295;
      b = c + (g << 6 & 4294967295 | g >>> 26);
      g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
      f = b + (g << 10 & 4294967295 | g >>> 22);
      g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
      e = f + (g << 15 & 4294967295 | g >>> 17);
      g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
      c = e + (g << 21 & 4294967295 | g >>> 11);
      g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
      b = c + (g << 6 & 4294967295 | g >>> 26);
      g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
      f = b + (g << 10 & 4294967295 | g >>> 22);
      g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
      e = f + (g << 15 & 4294967295 | g >>> 17);
      g = c + (f ^ (e | ~b)) + d[13] + 1309151649 & 4294967295;
      c = e + (g << 21 & 4294967295 | g >>> 11);
      g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
      b = c + (g << 6 & 4294967295 | g >>> 26);
      g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
      f = b + (g << 10 & 4294967295 | g >>> 22);
      g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
      e = f + (g << 15 & 4294967295 | g >>> 17);
      g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
      a.Fa[0] = a.Fa[0] + b & 4294967295;
      a.Fa[1] = a.Fa[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
      a.Fa[2] = a.Fa[2] + e & 4294967295;
      a.Fa[3] = a.Fa[3] + f & 4294967295
    };
    zl.prototype.update = function(a, b) {
      p(b) || (b = a.length);
      for (var c = b - this.$b, d = this.$i, e = this.wd, f = 0; f < b; ) {
        if (0 == e)
          for (; f <= c; )
            Al(this, a, f),
            f += this.$b;
        if (r(a))
          for (; f < b; ) {
            if (d[e++] = a.charCodeAt(f++),
            e == this.$b) {
              Al(this, d);
              e = 0;
              break
            }
          }
        else
          for (; f < b; )
            if (d[e++] = a[f++],
            e == this.$b) {
              Al(this, d);
              e = 0;
              break
            }
      }
      this.wd = e;
      this.lf += b
    }
    ;
    zl.prototype.digest = function() {
      var a = Array((56 > this.wd ? this.$b : 2 * this.$b) - this.wd);
      a[0] = 128;
      for (var b = 1; b < a.length - 8; ++b)
        a[b] = 0;
      var c = 8 * this.lf;
      for (b = a.length - 8; b < a.length; ++b)
        a[b] = c & 255,
        c /= 256;
      this.update(a);
      a = Array(16);
      for (b = c = 0; 4 > b; ++b)
        for (var d = 0; 32 > d; d += 8)
          a[c++] = this.Fa[b] >>> d & 255;
      return a
    }
    ;
    var Bl = {};
    A("devsite.permissions.init", function(a) {
      Bl = a
    });
    var Cl = function(a) {
      var b = Bl
        , c = new zl;
      c.update(a);
      a = c.digest();
      c = [];
      for (var d = 0; d < a.length; d++)
        c[d] = a[d].toString(16),
        2 > c[d].length && (c[d] = "0" + c[d]);
      return !!b[c.join("")]
    };
    A("devsite.permissions.hasPermission", Cl);
    var Hl = function(a) {
      this.Ha = document.createElement("div");
      this.Ha.className = "devsite-history-container";
      this.tb = new Lk;
      this.Xc = new Lk;
      this.Ie = document.querySelector(".devsite-search-query");
      this.bc = this.tb;
      L(this.Ie, ["focus", "keyup"], this.Hj.bind(this));
      L(this.Ie, "keypress", this.Ej.bind(this));
      if (a) {
        this.zd(Dl);
        a = z(this.cl, this);
        var b = z(this.zd, this, El);
        Fl(a, b)
      } else
        this.zd(Gl)
    };
    A("devsite.history.HistoryController", Hl);
    Hl.prototype.zf = function(a) {
      a.append ? a.append(this.Ha) : a.appendChild(this.Ha)
    }
    ;
    Hl.prototype.attachTo = Hl.prototype.zf;
    Hl.prototype.ub = function() {
      return this.Ha
    }
    ;
    var Fl = function(a, b) {
      pi("/profile/userhistory", function() {
        Jh(this) ? a(wg(ti(Lh(this)))) : b()
      }, "GET")
    };
    Hl.prototype.cl = function(a) {
      if (a.history_on)
        if (a.recent.length) {
          a = {
            ai: a.recent,
            Nh: a.most_visited
          };
          this.Ha.innerHTML = "";
          this.Ha.appendChild(T(Il, a));
          var b = this.Ha.querySelectorAll("#devsite-recent-column .devsite-history-link");
          for (a = 0; a < b.length; a++)
            aj(b[a], "Site-Wide Custom Events", "Recently Viewed Page Click", "History", a);
          b = this.Ha.querySelectorAll("#devsite-frequent-column .devsite-history-link");
          for (a = 0; a < b.length; a++)
            aj(b[a], "Site-Wide Custom Events", "Most Visited Page Click", "History", a);
          Jl(this);
          this.tb.Bb(this.Ha.querySelector("#devsite-recent-column"));
          this.Xc.Bb(this.Ha.querySelector("#devsite-frequent-column"));
          L(this.tb, "highlight", z(this.th, this, this.tb, this.Xc));
          L(this.Xc, "highlight", z(this.th, this, this.Xc, this.tb))
        } else
          this.zd(El);
      else
        this.zd(Kl),
        aj(this.Ha.querySelector(".devsite-history-main-column a"), "Site-Wide Custom Events", "History Preferences Click", "History")
    }
    ;
    Hl.prototype.zd = function(a) {
      this.Ha.innerHTML = "";
      this.Ha.appendChild(T(a));
      Jl(this)
    }
    ;
    var Jl = function(a) {
      aj(a.Ha.querySelector(".devsite-history-preferences-link"), "Site-Wide Custom Events", "History Preferences Click", "History")
    };
    Hl.prototype.Hj = function(a) {
      if (27 == a.keyCode)
        this.bc = this.tb,
        this.tb.Kb(-1),
        this.Xc.Kb(-1);
      else if (this.Ie.value.trim())
        N(this.Ha, !1);
      else if (N(this.Ha, !0),
      this.tb)
        if (39 == a.keyCode || 37 == a.keyCode) {
          a = this.bc;
          var b;
          this.bc = b = a == this.tb ? this.Xc : this.tb;
          b.Kb(a.va)
        } else
          vk(this.bc) || (this.bc = this.tb),
          this.bc.nb(a)
    }
    ;
    Hl.prototype.Ej = function(a) {
      if (!(13 != a.keyCode && 3 != a.keyCode || this.Ie.value.trim())) {
        var b = vk(this.bc);
        b && (a.preventDefault(),
        a.stopPropagation(),
        b.W().querySelector("a").click())
      }
    }
    ;
    Hl.prototype.th = function(a, b) {
      this.bc = a;
      b.Kb(-1)
    }
    ;
    var Ll = function(a) {
      a = Y(r(a.contents) || a.contents instanceof S, "contents", a.contents, "!goog.soy.data.SanitizedContent|string");
      a = "" + ('<div class="devsite-history-wrapper"><div class="devsite-history-side-column"><div class="devsite-history-icon material-icons"></div></div><div class="devsite-history-main-column">' + W(a) + '<div class="devsite-history-footer"><a href="//myaccount.google.com/privacy#accounthistory" class="devsite-history-preferences-link button button-white">History Preferences</a></div></div></div>');
      return V(a)
    }
      , Il = function(a) {
      var b = Y(y(a.ai), "recentItems", a.ai, "!Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>");
      a = Y(y(a.Nh), "mostVisitedItems", a.Nh, "!Array<!Object<!goog.soy.data.SanitizedContent|string,!goog.soy.data.SanitizedContent|string>>");
      var c = "";
      for (var d = '<div class="devsite-history-column devsite-nav goog-menu" id="devsite-recent-column"><label>Recent Pages</label>', e = b.length, f = 0; f < e; f++) {
        var g = b[f];
        d += '<div class="devsite-history-item devsite-nav-label goog-menuitem" class="devsite-history-link"><a href="' + X(al(g.path)) + '" class="devsite-history-link">' + W(g.title) + "</a></div>"
      }
      d += '</div><div class="devsite-history-column devsite-nav goog-menu" id="devsite-frequent-column"><label>Most Visited Pages</label>';
      b = a.length;
      for (e = 0; e < b; e++)
        f = a[e],
        d += '<div class="devsite-history-item devsite-nav-label goog-menuitem" class="devsite-history-link"><a href="' + X(al(f.path)) + '" class="devsite-history-link">' + W(f.title) + "</a></div>";
      c += Ll({
        contents: Rk(d + "</div>")
      });
      return V(c + "")
    };
    Il.g = "devsite.historyRenderer.viewHistory";
    var El = function() {
      var a = "" + ("" + Ll({
        contents: Qk("The pages you visit often will appear here.")
      }) + "");
      return V(a)
    };
    El.g = "devsite.historyRenderer.historyWillShow";
    var Dl = function() {
      var a = "" + ("" + Ll({
        contents: Qk("Loading your history...")
      }) + "");
      return V(a)
    };
    Dl.g = "devsite.historyRenderer.historyIsLoading";
    var Gl = function() {
      var a = "" + ("" + Ll({
        contents: Qk("Sign in to see the pages you visit often.")
      }) + "");
      return V(a)
    };
    Gl.g = "devsite.historyRenderer.logInForHistory";
    var Kl = function() {
      var a = "";
      var b = Rk('<a href="//myaccount.google.com/privacy#accounthistory">');
      var c = Rk("</a>");
      b = "Turn on " + (W(b) + ("history" + (W(c) + " to see the pages you visit often.")));
      a += Ll({
        contents: Rk("" + b)
      }) + "";
      return V(a)
    };
    Kl.g = "devsite.historyRenderer.historyIsOff";
    var Ml = function() {
      return V("Could not load projects list.")
    }
      , Nl = function() {
      return V("Could not save your project selection.")
    }
      , Ol = function(a) {
      var b = Y(r(a.value) || a.value instanceof S, "value", a.value, "!goog.soy.data.SanitizedContent|string");
      a = Y(r(a.text) || a.text instanceof S, "text", a.text, "!goog.soy.data.SanitizedContent|string");
      return V('<option value="' + X(b) + '">' + W(a) + "</option>")
    };
    Ol.g = "devsite.developerdataRenderer.option";
    var Pl = function() {
      return V("<select></select>")
    };
    Pl.g = "devsite.developerdataRenderer.select";
    A("devsite.developerdata.getLoadProjectsErrorText", function() {
      return Ml()
    });
    A("devsite.developerdata.getSetCurrentProjectErrorText", function() {
      return Nl()
    });
    var Ql = function(a, b, c) {
      c = c.target;
      Jh(c) ? ((b = Nh(c)) && (b = wg(ti(b))),
      a && a(b)) : b && b()
    }
      , Rl = function(a, b, c) {
      pi("/developerdata/setcurrentproject", z(Ql, null, b, c), "POST", {
        projectNumber: a
      })
    };
    A("devsite.developerdata.setCurrentProject", Rl);
    var Sl = function(a, b) {
      pi("/developerdata/getprojectslist", z(Ql, null, a, b), "GET")
    };
    A("devsite.developerdata.getProjectsList", Sl);
    A("devsite.developerdata.getProjectKeys", function(a, b, c) {
      pi("/developerdata/getkeysforproject", z(Ql, null, b, c), "GET", {
        projectId: a
      })
    });
    A("devsite.developerdata.getProjectClients", function(a, b, c) {
      pi("/developerdata/getcredentialsforproject", z(Ql, null, b, c), "GET", {
        projectNumber: a
      })
    });
    var Tl = function(a, b) {
      for (var c = T(Pl), d = 0; d < a.length; d++) {
        var e = a[d];
        e.title = e.title || V("Project");
        var f = (new xg(void 0)).serialize({
          project_number: e.project_number,
          project_id: e.project_id
        });
        f = T(Ol, {
          value: f,
          text: e.title + " (" + e.project_id + ")"
        });
        e.current && f.setAttribute("selected", "selected");
        c.appendChild(f)
      }
      b && L(c, "change", b);
      return c
    };
    A("devsite.developerdata.createProjectSelector", Tl);
    A("devsite.developerdata.createCredentialSelector", function(a, b) {
      var c = T(Pl), d;
      for (d in a) {
        var e = T(Ol, {
          value: d,
          text: a[d].type + ": " + d
        });
        c.appendChild(e)
      }
      b && L(c, "change", b);
      return c
    });
    var Ul = {}
      , Vl = {}
      , Wl = []
      , Yl = function(a) {
      if (!Vl.windowResize) {
        Vl.windowResize = [];
        var b = L(window, "resize", Xl.bind(null, "windowResize"));
        Wl.push(b)
      }
      Vl.windowResize.push(a)
    };
    A("devsite.events.registerWindowResizeCallback", Yl);
    A("devsite.events.registerContentMutationCallback", function(a) {
      if (!Vl.contentMutation) {
        Vl.contentMutation = [];
        var b = document.querySelector(".devsite-article");
        b && x("MutationObserver") && (new MutationObserver(Xl.bind(null, "contentMutation"))).observe(b, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        })
      }
      Vl.contentMutation.push(a)
    });
    var Zl = function(a) {
      Vl.onDemand || (Vl.onDemand = []);
      Vl.onDemand.push(a)
    };
    A("devsite.events.registerOnDemandCallback", Zl);
    var Xl = function(a, b) {
      void 0 != Ul[a] && window.clearTimeout(Ul[a]);
      Ul[a] = window.setTimeout($l.bind(null, a, b), 100)
    }
      , $l = function(a, b) {
      if (Vl[a])
        for (var c = 0; c < Vl[a].length; c++)
          Vl[a][c](b)
    };
    A("devsite.events.executeOnDemandCallbacks", function(a) {
      $l("onDemand", a)
    });
    var am = function() {
      this.Fe = {};
      this.Ci = !1
    }
      , bm = 0
      , cm = null;
    window.addEventListener("message", function(a) {
      var b;
      if (!(b = si(a.origin))) {
        var c = window.location.origin || window.location.protocol + "//" + window.location.host;
        b = ch(a.origin);
        c = ch(c);
        b = b[3] == c[3] && b[1] == c[1] && b[4] == c[4]
      }
      if (b) {
        c = null;
        try {
          c = JSON.parse(a.data)
        } catch (k) {
          return
        }
        if (c && c.name) {
          cm || (cm = new am);
          b = cm;
          a = a.source;
          var d = c.name;
          if ("iframe_ready" == d) {
            var e = dm(a);
            e && (b = b.Kd(e),
            b = {
              id: b,
              name: "parent_acknowledge"
            },
            a.postMessage(JSON.stringify(b), "*"))
          } else {
            if ("iframe_size" == d) {
              var f = parseInt(c.height, 10)
                , g = parseInt(c.width, 10);
              if (e = b.Fe[c.id])
                isNaN(f) || (e.style.height = f + "px"),
                isNaN(g) || (e.style.width = g + "px")
            }
            if ("push_state" == d || "replace_state" == d)
              b = c.title,
              (c = em(c.url)) && ("push_state" == d ? window.history.pushState({}, b, c) : window.history.replaceState({}, b, c));
            "child_query_frag_request" == d && (e = dm(a)) && (b = e.getAttribute("id"),
            b = {
              id: b,
              name: "child_query_frag_response",
              queryAndFragment: em(window.location.toString())
            },
            a.postMessage(JSON.stringify(b), "*"))
          }
        }
      }
    }, !1);
    var em = function(a) {
      var b = "";
      if (a) {
        var c = ch(a)[6] || null
          , d = a.indexOf("#");
        a = 0 > d ? null : a.substr(d + 1);
        c && (b += "?" + c);
        a && (b += "#" + a)
      }
      return b
    }
      , dm = function(a) {
      var b = null;
      yi("iframe", function(c) {
        c.contentWindow == a && (b = c)
      });
      return b
    };
    am.prototype.Kd = function(a) {
      this.Ci || (Yl(this.Nk.bind(this)),
      this.Ci = !0);
      var b = a.getAttribute("id");
      b || (b = "autoSize-" + bm++,
      a.setAttribute("id", b));
      this.Fe[b] = a;
      return b
    }
    ;
    am.prototype.Nk = function() {
      for (var a in this.Fe) {
        var b = this.Fe[a]
          , c = JSON.stringify({
          name: "parent_request_size"
        });
        b.contentWindow.postMessage(c, "*")
      }
    }
    ;
    var fm = function(a) {
      this.H = a || {
        cookie: ""
      }
    };
    h = fm.prototype;
    h.isEnabled = function() {
      return navigator.cookieEnabled
    }
    ;
    h.set = function(a, b, c, d, e, f) {
      if (/[;=\s]/.test(a))
        throw Error('Invalid cookie name "' + a + '"');
      if (/[;\r\n]/.test(b))
        throw Error('Invalid cookie value "' + b + '"');
      p(c) || (c = -1);
      e = e ? ";domain=" + e : "";
      d = d ? ";path=" + d : "";
      f = f ? ";secure" : "";
      c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(qa() + 1E3 * c)).toUTCString();
      this.H.cookie = a + "=" + b + e + d + c + f
    }
    ;
    h.get = function(a, b) {
      for (var c = a + "=", d = (this.H.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = La(d[e]);
        if (0 == f.lastIndexOf(c, 0))
          return f.substr(c.length);
        if (f == a)
          return ""
      }
      return b
    }
    ;
    h.remove = function(a, b, c) {
      var d = this.Bc(a);
      this.set(a, "", 0, b, c);
      return d
    }
    ;
    h.Eb = function() {
      return gm(this).keys
    }
    ;
    h.Ya = function() {
      return gm(this).values
    }
    ;
    h.Bc = function(a) {
      return p(this.get(a))
    }
    ;
    h.clear = function() {
      for (var a = gm(this).keys, b = a.length - 1; 0 <= b; b--)
        this.remove(a[b])
    }
    ;
    var gm = function(a) {
      a = (a.H.cookie || "").split(";");
      for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
        e = La(a[f]),
        d = e.indexOf("="),
        -1 == d ? (b.push(""),
        c.push(e)) : (b.push(e.substring(0, d)),
        c.push(e.substring(d + 1)));
      return {
        keys: b,
        values: c
      }
    }
      , hm = new fm("undefined" == typeof document ? null : document);
    hm.hm = 3950;
    var im = function(a) {
      for (var b = '<span class="kd-button kd-menubutton kd-select"', c = a.attributes.length, d = 0; d < c; d++)
        for (var e = Pk(a.attributes[d]), f = e.length, g = 0; g < f; g++) {
          var k = e[g];
          b += " " + Wk(k) + '="' + X(a.attributes[d][k]) + '"'
        }
      b += '><div class="label">' + W(a.label) + '</div><div class="kd-disclosureindicator"></div></span>';
      return V(b)
    };
    im.g = "kennedySelectRenderer.selector";
    var jm = function(a) {
      for (var b = '<ul class="kd-menulist devsite-hidden">', c = a.options.length, d = 0; d < c; d++) {
        b += "<li class=" + (a.options[d].selected ? '"kd-menulistitem devsite-selected-option"' : '"kd-menulistitem"');
        for (var e = a.options[d].attributes.length, f = 0; f < e; f++)
          for (var g = Pk(a.options[d].attributes[f]), k = g.length, l = 0; l < k; l++) {
            var n = g[l];
            b += " " + Wk(n) + '="' + X(a.options[d].attributes[f][n]) + '"'
          }
        b += ">" + W(a.options[d].innerHTML) + "</li>"
      }
      return V(b + "</ul>")
    };
    jm.g = "kennedySelectRenderer.options";
    var km = {};
    km = km || {};
    var lm = function(a) {
      this.element = a;
      this.Ga = this.R = null;
      this.disabled = !1
    };
    h = lm.prototype;
    h.ub = function() {
      if (!this.R) {
        var a = (this.element.querySelector("[selected], .devsite-selected-option") || this.element.children[0]).innerHTML;
        for (var b = [], c = 0; c < this.element.attributes.length; c++) {
          var d = this.element.attributes[c]
            , e = {};
          1 == d.specified && "class" != d.nodeName && "id" != d.nodeName && "name" != d.nodeName && "style" != d.nodeName && (e[d.nodeName] = d.nodeValue,
          b.push(e))
        }
        this.R = T(im, {
          label: a,
          attributes: b
        });
        this.label = this.R.querySelector(".label");
        L(this.R, "click", this.Ag.bind(this, !1));
        L(this.element, "change", this.bl.bind(this));
        L(document.body, "click", this.Ag.bind(this, !0));
        Yl(this.Uh.bind(this))
      }
      a = this.R;
      if (!this.Ga) {
        c = this.element.querySelectorAll("option");
        d = [];
        for (b = 0; b < c.length; b++) {
          e = [];
          for (var f = 0; f < c[b].attributes.length; f++) {
            var g = c[b].attributes[f]
              , k = {};
            1 == g.specified && "class" != g.nodeName && "id" != g.nodeName && "name" != g.nodeName && "selected" != g.nodeName && "style" != g.nodeName && (k[g.nodeName] = g.nodeValue,
            e.push(k))
          }
          d.push({
            attributes: e,
            innerHTML: c[b].innerHTML,
            selected: null != c[b].getAttribute("selected")
          })
        }
        this.Ga = T(jm, {
          options: d
        });
        c = this.Ga.querySelectorAll(".kd-menulistitem");
        for (b = 0; b < c.length; b++)
          L(c[b], "click", this.select.bind(this, b))
      }
      return {
        select: a,
        options: this.Ga
      }
    }
    ;
    h.select = function(a) {
      if (!(0 > a || a >= this.Ga.children.length)) {
        var b = this.Ga.querySelector(".devsite-selected-option")
          , c = this.Ga.children[a];
        b != c && (b && b.classList.remove("devsite-selected-option"),
        c.classList.add("devsite-selected-option"),
        this.label.innerHTML = c.innerHTML,
        this.Ag(!0),
        this.element.selectedIndex = a,
        a = document.createEvent("Event"),
        a.initEvent("change", !0, !0),
        this.element.dispatchEvent(a))
      }
    }
    ;
    h.bl = function() {
      this.select(this.element.selectedIndex)
    }
    ;
    h.Ag = function(a) {
      this.disabled || (a || !this.Ga.classList.contains("devsite-hidden") ? this.Ga.classList.add("devsite-hidden") : (this.Ga.classList.remove("devsite-hidden"),
      this.Uh(),
      this.disabled = !0,
      setTimeout(function() {
        this.disabled = !1
      }
      .bind(this), 5)))
    }
    ;
    h.Uh = function() {
      var a = this.R.getBoundingClientRect(), b = this.Ga.getBoundingClientRect(), c = 10, d;
      a.top > window.innerHeight / 2 ? a.top < b.height ? d = a.top - 10 : c = a.top - b.height : (c = a.top + a.height,
      window.innerHeight - c < b.height && (d = window.innerHeight - c - 20));
      window.innerWidth < a.left + b.width ? (this.Ga.style.left = "auto",
      this.Ga.style.right = "0px") : (this.Ga.style.left = a.left + window.scrollX + "px",
      this.Ga.style.right = "auto");
      d && (this.Ga.style.height = d);
      this.Ga.style.top = c + window.scrollY + "px"
    }
    ;
    km.Hi = function() {
      for (var a = document.querySelectorAll("select.kd-select"), b = [], c = 0; c < a.length; c++) {
        var d = new lm(a[c])
          , e = d.ub();
        a[c].parentNode.insertBefore(e.select, a[c].nextSibling);
        document.body.appendChild(e.options);
        a[c].style.display = "none";
        b.push(d)
      }
      return b
    }
    ;
    A("devsite.kennedy.InitializeSelects", km.Hi);
    km = km || {};
    var mm = function(a) {
      this.element = a;
      this.R = null
    }
      , nm = ["kd-tabbed-horz", "kd-tabbed-vert"]
      , om = ["ds-selector-dropdown", "ds-selector-tabs", "code-sample", "data-sample"];
    mm.prototype.create = function() {
      this.R || (this.R = this.element.cloneNode(!0));
      var a = this.R.getAttribute("data-ds-scope") || "";
      a = a.replace(/:/g, "_");
      this.scope = a + ":";
      a = !1;
      var b = this.R.firstElementChild;
      b.classList.add("kd-buttonbar");
      b.classList.add("kd-tabbar-horz");
      b = b.children;
      for (var c = 0; c < b.length; c++)
        b[c].classList.add("kd-tabbutton"),
        b[c].setAttribute("kd-data-id", this.scope + b[c].textContent.trim()),
        b[c].addEventListener("click", this.select.bind(this, c, !0)),
        a = !!b[c].id || a;
      a && "onpopstate"in window && window.addEventListener("popstate", this.Vk.bind(this), !1);
      if (b) {
        var d;
        a = window.location.hash;
        (a = "#" == a ? "" : a) && (d = this.R.querySelector(a));
        d || (d = hm.get("devsite_tabbar_last"),
        d = void 0 != d && this.R.querySelector('[kd-data-id="' + d + '"]'));
        if (d)
          a = document.createEvent("Event"),
          a.initEvent("click", !0, !0),
          a.Rg = !0,
          d.dispatchEvent(a);
        else {
          d = 0;
          a = this.R.children;
          for (b = 0; b < a.length - 1; b++)
            this.R.children[b + 1].classList.contains("selected") && (d = b);
          this.select(d)
        }
      }
    }
    ;
    mm.prototype.ub = function() {
      this.R || this.create();
      return this.R
    }
    ;
    mm.prototype.render = mm.prototype.ub;
    mm.prototype.Vk = function() {
      var a = window.location.hash;
      (a = this.R.querySelector("#" == a ? "" : a)) && a.click()
    }
    ;
    mm.prototype.select = function(a, b, c) {
      var d = this.R.querySelector(".selected.kd-tabbutton")
        , e = this.Pi()
        , f = c ? c.target : this.R.firstElementChild.children[a]
        , g = this.R.children[a + 1];
      a = this.R.getBoundingClientRect().top;
      if (f != d && f && (d && d.classList.remove("selected"),
      f.classList.add("selected"),
      e && (e.classList.add("devsite-hidden"),
      e.classList.remove("selected")),
      g && ((d = g.querySelector("iframe")) && d.getAttribute("data-src") && (d.setAttribute("src", d.getAttribute("data-src")),
      d.removeAttribute("data-src")),
      g.classList.add("selected"),
      g.classList.remove("devsite-hidden")),
      c && !c.Rg)) {
        c = document.querySelectorAll('.kd-tabbutton[kd-data-id="' + this.scope + f.textContent.trim() + '"]');
        for (d = 0; d < c.length; d++)
          c[d] != f && (e = document.createEvent("Event"),
          e.initEvent("click", !0, !0),
          e.Rg = !0,
          c[d].dispatchEvent(e));
        hm.set("devsite_tabbar_last", f.getAttribute("kd-data-id"), -1, "/");
        window.scrollTo(window.scrollX, window.scrollY + this.R.getBoundingClientRect().top - a);
        b && f.id && window.history.pushState && (b = "#" + f.id,
        window.history.state && window.history.state.view == b || window.history.pushState({
          view: b
        }, "", b))
      }
    }
    ;
    mm.prototype.Pi = function() {
      for (var a = this.R.children, b = 1; b < a.length; b++)
        if (a[b].classList.contains("selected"))
          return a[b]
    }
    ;
    km.Fg = function() {
      for (var a = document.querySelectorAll("." + nm.concat(om).join(", .")), b = 0; b < a.length; b++)
        if (!a[b].classList.contains("ui-datasection-main")) {
          var c = new mm(a[b])
            , d = c;
          d.R = d.element.cloneNode(!1);
          var e = document.createElement("div");
          d.R.classList.add("ui-datasection-main");
          var f = d.element.children;
          for (d.R.appendChild(e); f.length; ) {
            var g = f[0];
            e.appendChild(g.firstElementChild);
            d.R.appendChild(g)
          }
          c.create();
          c = c.ub();
          d = a[b];
          (e = d.parentNode) && e.replaceChild(c, d)
        }
    }
    ;
    A("devsite.kennedy.InitializeTabbars", km.Fg);
    var pm, qm = 1, rm = "", sm = [], tm = 48;
    A("devsite.tableOfContents.renderTableOfContents", function(a, b, c) {
      var d = {}
        , e = []
        , f = !1;
      a = a.querySelectorAll("*:not(.code-sample):not(.data-sample):not(.kd-tabbed-horz):not(.kd-tabbed-vert) > * > h2:not(.hide-from-toc):not(#contents):not(#table-of-contents), *:not(.ds-selector-tabs):not(.ds-selector-dropdown):not(.code-sample):not(.data-sample):not(.kd-tabbed-horz):not(.kd-tabbed-vert):not(.devsite-dialog) > * > h3:not(.hide-from-toc):not(#contents):not(#table-of-contents)");
      for (var g = 0; g < a.length; g++) {
        var k = a[g];
        if (!k.id) {
          var l = k.textContent.toLowerCase().trim().replace(/ /g, "-").replace(/[^\w-]+/g, "") || "header";
          if ("contents" == l || "table-of-contents" == l)
            continue;
          k.id = um(l, d)
        }
        l = {
          id: k.id,
          text: k.textContent,
          children: []
        };
        "H2" == k.tagName ? (e.push(l),
        f = !0) : f ? e[e.length - 1].children.push(l) : e.push(l)
      }
      e.length && (b && (vm(e, b, !1, "Right nav"),
      E(a, function(a, b) {
        sm[b] = {
          headerEl: a,
          id: a.getAttribute("id"),
          height: 0
        }
      })),
      c && vm(e, c, 8 <= a.length, "Embedded nav"))
    });
    var vm = function(a, b, c, d) {
      a = T(wm, {
        Xk: a,
        Hg: c
      });
      if (c) {
        var e = a.querySelectorAll(".devsite-nav-title");
        c = a.querySelector(".devsite-nav-show-all");
        var f = a.querySelector(".devsite-nav-more-items");
        8 <= e.length && c && (xm(e, c, f),
        e = pa(xm, e, c, f, !0),
        L(c, "click", e),
        L(f, "click", e))
      }
      b.appendChild(a);
      b = a.querySelectorAll("a");
      for (a = 0; a < b.length; a++)
        aj(b[a], "Site-Wide Custom Events", "click", d, a)
    }
      , um = function(a, b) {
      for (var c = a; b[c]; )
        c = a + "_" + qm++;
      b[c] = !0;
      return c
    }
      , xm = function(a, b, c, d) {
      E(a, function(a, b) {
        5 <= b && (d ? setTimeout(function() {
          a.classList.toggle("devsite-nav-item-hidden")
        }, 15 * b) : a.classList.toggle("devsite-nav-item-hidden"))
      });
      b.classList.toggle("devsite-nav-open");
      c.classList.toggle("devsite-nav-more-items-close")
    };
    A("devsite.tableOfContents.initContentState", function() {
      var a = document.querySelector(".devsite-page-nav");
      if (a && (tm += document.querySelector(".devsite-doc-set-nav") ? 48 : 0,
      ym(),
      Yl(ym),
      rm = location.hash.substr(1))) {
        var b = a.querySelector('a[href="#' + rm + '"]');
        b ? zm(b) : Am(a)
      }
    });
    var ym = function() {
      E(sm, function(a, b) {
        var c = yf(a.headerEl);
        a.top = c.y;
        (b = (b = sm[b + 1]) ? b.headerEl : document.querySelector("footer")) ? (b = yf(b),
        a.height = b.y - a.top) : a.height = document.body.offsetHeight - a.top
      })
    }
      , Am = function(a, b) {
      if (sm.length)
        if (b = b || id(document).y,
        b += 40 + tm,
        sm[0].top > b)
          rm && (zm(),
          Cl("REWRITE_URLS_UPON_SCROLL") && history.replaceState({}, document.title, location.pathname),
          rm = "");
        else
          for (var c = 0; c < sm.length; c++) {
            var d = sm[c]
              , e = d.top
              , f = d.id;
            if (void 0 === e)
              break;
            if (!(e > b || e + d.height < b)) {
              if (rm == f)
                break;
              zm(a.querySelector('a[href="#' + f + '"]'));
              a.querySelector("a:focus") && a.querySelector("a:focus").blur();
              Cl("REWRITE_URLS_UPON_SCROLL") && history.replaceState({}, document.title, "#" + f);
              rm = f
            }
          }
    };
    A("devsite.tableOfContents.checkContentState", function(a, b, c) {
      var d = 0
        , e = !1
        , f = []
        , g = function() {
        d = 0;
        e && (e = !1,
        k())
      }
        , k = function() {
        d = m.setTimeout(g, b);
        a.apply(c, f)
      };
      return function(a) {
        f = arguments;
        d ? e = !0 : k()
      }
    }(Am, 50));
    var zm = function(a) {
      pm && pm.classList.remove("devsite-nav-active");
      a && a.classList.add("devsite-nav-active");
      pm = a
    }
      , Bm = function(a) {
      var b = document.querySelector(".devsite-page-nav");
      b && b.appendChild(a)
    };
    A("devsite.tableOfContents.appendCustomElement", Bm);
    var Cm = function() {
      yi('.devsite-page-nav .devsite-nav-title[href="#try-it"]', function(a) {
        a = a.parentElement;
        a.parentNode.removeChild(a)
      })
    };
    var wm = function(a) {
      var b = '<ul class="devsite-page-nav-list"><li class="devsite-nav-item devsite-nav-item-heading"><a href="#top_of_page" class="devsite-nav-title">Contents</a>';
      a.Hg && (b += '<button type="button" title="' + Sk("Expand/collapse contents") + '" class="devsite-nav-show-all button-transparent material-icons devsite-nav-open"></button>');
      b += "</li>";
      for (var c = a.Xk, d = c.length, e = 0; e < d; e++) {
        var f = c[e];
        b += '<li class="devsite-nav-item"><a href="#' + X(f.id) + '" class="devsite-nav-title">' + W(f.text) + "</a>";
        if (f.children.length) {
          b += '<ul class="devsite-page-nav-list">';
          f = f.children;
          for (var g = f.length, k = 0; k < g; k++) {
            var l = f[k];
            b += '<li class="devsite-nav-item"><a href="#' + X(l.id) + '" class="devsite-nav-title">' + W(l.text) + "</a></li>"
          }
          b += "</ul>"
        }
        b += "</li>"
      }
      a.Hg && (b += '<li class="devsite-nav-item"><button type="button" class="button-flat devsite-nav-more-items material-icons devsite-nav-more-items-close" title="' + Sk("Expand/collapse contents") + '"></button></li>');
      return V(b + "</ul>")
    };
    wm.g = "devsite.tableOfContentsHtmlGen.getTableOfContentsHtml";
    var Dm = function(a) {
      var b = Y(r(a.Jf) || a.Jf instanceof S, "discoveryUrl", a.Jf, "!goog.soy.data.SanitizedContent|string")
        , c = Y(r(a.method) || a.method instanceof S, "method", a.method, "!goog.soy.data.SanitizedContent|string");
      a = Y(null == a.Xd || "boolean" == typeof a.Xd || 1 === a.Xd || 0 === a.Xd, "showAsSideBar", a.Xd, "boolean|null|undefined");
      return V("" + (a ? '<div class="devsite-apix">' : "") + '<div class="apis-explorer" data-discovery-rest-url="' + X(al(b)) + '" data-method-id="' + X(c) + '"></div>' + (a ? "</div>" : "") + "")
    };
    Dm.g = "devsite.apixRenderer.apixWidget";
    var Em = function() {
      return V('<span class="devsite-apix-controls"><button type="button" class="devsite-fullscreen-apix button-flat material-icons"></button><button type="button" class="devsite-dock-apix button-flat material-icons"></button><button type="button" class="devsite-hide-apix button-flat material-icons"></button></span>')
    };
    Em.g = "devsite.apixRenderer.apixControls";
    var Fm = function() {
      return V('<button type="button" class="devsite-show-apix button-primary">Try it!</button>')
    };
    Fm.g = "devsite.apixRenderer.apixShow";
    var Gm = function() {
      return V('<a id="try-it"></a>')
    };
    Gm.g = "devsite.apixRenderer.apixAnchor";
    var Hm = function() {
      return V('<div class="devsite-apix-error">Sorry, there was a problem loading the API Explorer. This may be a result of an outdated browser/OS. You may need to try a newer machine if you want to make live requests to this API.</div>')
    };
    Hm.g = "devsite.apixRenderer.apixError";
    var Im, Jm, Km, Lm, Mm, Nm, Om, Pm, Vm = function() {
      ci = ci || x("devsite.inProd");
      di = di || x("devsite.sticky");
      Km = "cloud" == x("devsite.devsite.tenantSite");
      Qm();
      yi(".devsite-apix", function(a) {
        Rm(a);
        "#try-it" == window.location.hash && window.location.replace("#try-it")
      });
      var a = document.querySelectorAll(".apis-explorer");
      return 1 > a.length ? Ne() : Sm().then(function() {
        Tm() && (Lm.style.removeProperty("display"),
        Um())
      }, function() {
        a.forEach(function(a) {
          a.appendChild(T(Hm))
        })
      })
    };
    A("devsite.apix.init", Vm);
    var Sm = function() {
      var a = Pe()
        , b = document.createElement("script");
      b.addEventListener("load", a.resolve);
      b.addEventListener("error", a.reject);
      b.src = ci() ? "https://explorer.apis.google.com/apix-embed.js" : "https://api-explorer.googleplex.com/apix-embed.js";
      document.body.appendChild(b);
      return a.promise
    }
      , Qm = function() {
      var a = document.querySelector("section#try-it") || document.querySelector("section#apix")
        , b = !0;
      if (a)
        var c = a.querySelector("div#embedded-explorer");
      else
        (c = document.querySelector("div#embedded-explorer")) && !Ji(c, "data-load-dynamic-snippets") && (b = !1);
      if (c) {
        var d = Ji(c, "data-allow-tryit")
          , e = Ji(c, "data-load-dynamic-snippets");
        d || e || (d = !0);
        if (d) {
          var f = c.getAttribute("data-discoveryUrl");
          d = c.getAttribute("data-method");
          if (!f) {
            f = c.getAttribute("data-service");
            var g = c.getAttribute("data-version");
            f = "https://content.googleapis.com/discovery/v1/apis/" + encodeURIComponent(f) + "/" + encodeURIComponent(g) + "/rest"
          }
          b = T(Dm, {
            Jf: f,
            method: d,
            Xd: b
          });
          e ? (c.setAttribute("data-allow-tryit", "false"),
          c.parentElement.insertBefore(b, c.nextSibling)) : a ? a.parentNode.replaceChild(b, a) : (c.parentElement.insertBefore(b, c.nextSibling),
          c.parentElement.removeChild(c));
          Cm()
        }
      }
    }
      , Rm = function(a) {
      Im = a;
      Im.insertBefore(T(Gm), Im.firstChild);
      Mm = T(Em);
      Nm = Mm.querySelector(".devsite-hide-apix");
      Om = T(Fm);
      Lm = Mm.querySelector(".devsite-fullscreen-apix");
      Pm = Mm.querySelector(".devsite-dock-apix");
      Lm.style.display = "none";
      Im.insertBefore(Mm, Im.firstChild);
      Bm(Om);
      Om.addEventListener("click", function() {
        Wm()
      });
      Nm.addEventListener("click", function() {
        Xm()
      });
      Yl(function() {
        Ym(!0)
      });
      Tm() && (window.addEventListener("popstate", function() {
        Um()
      }),
      Lm.addEventListener("click", function() {
        Zm()
      }),
      Pm.addEventListener("click", function() {
        $m()
      }));
      Wm()
    }
      , Wm = function() {
      di.setPageNavActive(!1);
      di.addMainContentClass("devsite-has-apix");
      di.resize();
      Ym(!0)
    };
    A("devsite.apix.show", Wm);
    var Xm = function() {
      di.setPageNavActive(!0);
      di.removeMainContentClass("devsite-has-apix");
      di.resize();
      Ym(!0)
    };
    A("devsite.apix.hide", Xm);
    var Zm = function() {
      var a = rh(hi.href, "apix", !0);
      history.replaceState(null, "", a);
      Um()
    };
    A("devsite.apix.fullscreen", Zm);
    var $m = function() {
      var a = qh(hi.href, "apix");
      history.replaceState(null, "", a);
      Um()
    };
    A("devsite.apix.dock", $m);
    var Um = function() {
      var a = null !== oh(hi.href, "apix")
        , b = Im.querySelector(".apis-explorer");
      Tm() && b.setWideLayout && (a && !Jm ? (a = Mi(),
      Jm = ee(a, "click", function() {
        $m()
      }),
      zi(Im, "devsite-dialog", !0),
      b.setWideLayout(!0)) : !a && Jm && (Ni(),
      me(Jm),
      Jm = null,
      zi(Im, "devsite-dialog", !1),
      b.setWideLayout(!1)))
    };
    A("devsite.apix.onScroll", function(a) {
      Im && Ym(!1, a)
    });
    var Ym = function(a, b) {
      di.resetNavVars(a, b);
      a = di.getMainContentTop();
      Im.style.marginTop = a + "px";
      Im.style.maxHeight = di.footerOffset - di.topSectionShort + di.logoRowHeight - (Km ? 32 : 0) - a + "px"
    }
      , Tm = function() {
      return Cl("APIX_FULL_SCREEN")
    };
    var an = function() {
      var a = !1;
      yi("#embedded-explorer", function(b) {
        b.setAttribute("data-auth-popup", window.location.protocol + "//" + window.location.host + "/oauthWindow");
        if (!a) {
          b = ni("/_static/css/devsite-explorer.css");
          var c = document.createElement("link");
          c.rel = "stylesheet";
          c.href = b;
          document.head.appendChild(c);
          b = document.createElement("script");
          b.setAttribute("src", "https://apis-explorer.appspot.com/embedded/com.google.api.explorer.Embedded.nocache.js");
          b.setAttribute("type", "text/javascript");
          document.body.appendChild(b);
          a = !0
        }
      })
    };
    A("devsite.apiExplorer.init", an);
    var bn = 0;
    A("devsite.amountViewed.maxViewed", bn);
    var cn = 0;
    A("devsite.amountViewed.maxPercentage", cn);
    var dn = 0;
    A("devsite.amountViewed.maxInterval", dn);
    var en = 0;
    A("devsite.amountViewed.windowHeight", en);
    var fn = function(a) {
      a = (a || id(document).y) + en;
      bn = Math.max(bn, a)
    };
    A("devsite.amountViewed.setMaxViewed", fn);
    var gn = function() {
      var a = fd()
        , b = document.getElementsByTagName("footer")
        , c = [25, 50, 75, 100];
      fn();
      E(b, function(b) {
        a -= b.clientHeight
      });
      cn = bn > a - 10 ? 100 : Math.floor(100 * bn / a);
      for (b = 0; b < c.length && !(cn < c[b]); b++)
        dn = c[b]
    };
    A("devsite.amountViewed.setMaxPercentages", gn);
    var hn = function() {
      en = ed(window).height;
      L(window, "beforeunload", function() {
        gn();
        Zi("pageScroll", dn + "%");
        Zi("pageScrollRaw", cn + "%");
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "concordEvent",
          pagePath: "/virtual/pageScroll/" + dn + "%",
          eventType: "pageScroll",
          eventName: dn + "%",
          realPath: window.location.pathname
        });
        window.dataLayer.push({
          event: "concordEvent",
          pagePath: "/virtual/pageScrollRaw/" + cn + "%",
          eventType: "pageScrollRaw",
          eventName: cn + "%",
          realPath: window.location.pathname
        })
      });
      Yl(function() {
        en = ed(window).height
      })
    };
    A("devsite.amountViewed.init", hn);
    var jn = function(a, b, c, d) {
      M.call(this);
      this.Jd = b;
      this.el = a;
      this.Ek = d || function() {}
      ;
      this.fi = Pe();
      this.re = "";
      c.addEventListener("message", this.Qj.bind(this))
    };
    B(jn, M);
    jn.prototype.reset = function() {
      this.Jd.src = this.Jd.src
    }
    ;
    jn.prototype.ready = function() {
      return this.fi.promise
    }
    ;
    jn.prototype.Qj = function(a) {
      if ("https://console.developers.google.com" === a.origin && a.source === this.Jd.contentWindow && a.data[0] == this.el) {
        var b = a.data[1];
        "loaded" == b && (kn(this, a),
        this.re = a.data[4],
        this.fi.resolve(this));
        "resize" == b && kn(this, a);
        "cancel" == b && this.dispatchEvent("cancel");
        "goto" == b && ("apiConsole" == a.data[2] && this.dispatchEvent("goToApiConsole"),
        "support" == a.data[2] && this.dispatchEvent("goToSupport"));
        "analytics" == b && ("virtualPageView" == a.data[2] && (b = new Jd("analyticsVirtualPageView"),
        this.re = a.data[3],
        b.data = [this.re],
        this.dispatchEvent(b)),
        "event" == a.data[2] && (b = new Jd("analyticsEvent"),
        b.data = [a.data[3]],
        this.dispatchEvent(b)))
      }
    }
    ;
    var kn = function(a, b) {
      var c = b.data[2];
      b = b.data[3];
      a.Jd.height = c + "px";
      a.Jd.width = b + "px";
      a.Ek(b, c)
    };
    var ln = null;
    var mn = function() {}
      , nn = "function" == typeof Uint8Array
      , on = Object.freeze ? Object.freeze([]) : []
      , pn = function(a) {
      var b = a.We + a.he;
      a.yb[b] || (a.Vb = a.yb[b] = {})
    }
      , qn = function(a, b, c) {
      b < a.We ? a.yb[b + a.he] = c : (pn(a),
      a.Vb[b] = c)
    }
      , rn = function(a) {
      if (a.wb)
        for (var b in a.wb) {
          var c = a.wb[b];
          if (y(c))
            for (var d = 0; d < c.length; d++)
              c[d] && c[d].toArray();
          else
            c && c.toArray()
        }
    };
    mn.prototype.toArray = function() {
      rn(this);
      return this.yb
    }
    ;
    mn.prototype.serialize = nn ? function() {
      var a = Uint8Array.prototype.toJSON;
      Uint8Array.prototype.toJSON = function() {
        D(fa(this), "encodeByteArray takes an array as a parameter");
        if (!ln) {
          ln = {};
          for (var a = 0; 65 > a; a++)
            ln[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)
        }
        a = ln;
        for (var b = [], e = 0; e < this.length; e += 3) {
          var f = this[e]
            , g = e + 1 < this.length
            , k = g ? this[e + 1] : 0
            , l = e + 2 < this.length
            , n = l ? this[e + 2] : 0
            , q = f >> 2;
          f = (f & 3) << 4 | k >> 4;
          k = (k & 15) << 2 | n >> 6;
          n &= 63;
          l || (n = 64,
          g || (k = 64));
          b.push(a[q], a[f], a[k], a[n])
        }
        return b.join("")
      }
      ;
      try {
        var b = JSON.stringify(this.toArray(), sn)
      } finally {
        Uint8Array.prototype.toJSON = a
      }
      return b
    }
    : function() {
      return JSON.stringify(this.toArray(), sn)
    }
    ;
    var sn = function(a, b) {
      if (u(b)) {
        if (isNaN(b))
          return "NaN";
        if (Infinity === b)
          return "Infinity";
        if (-Infinity === b)
          return "-Infinity"
      }
      return b
    };
    mn.prototype.toString = function() {
      rn(this);
      return this.yb.toString()
    }
    ;
    mn.prototype.getExtension = function(a) {
      if (this.Vb) {
        this.wb || (this.wb = {});
        var b = a.un;
        if (a.yn) {
          if (a.ek())
            return this.wb[b] || (this.wb[b] = tb(this.Vb[b] || [], function(b) {
              return new a.kj(b)
            })),
            this.wb[b]
        } else if (a.ek())
          return !this.wb[b] && this.Vb[b] && (this.wb[b] = new a.kj(this.Vb[b])),
          this.wb[b];
        return this.Vb[b]
      }
    }
    ;
    mn.prototype.clone = function() {
      return new this.constructor(tn(this.toArray()))
    }
    ;
    var tn = function(a) {
      var b;
      if (y(a)) {
        for (var c = Array(a.length), d = 0; d < a.length; d++)
          null != (b = a[d]) && (c[d] = "object" == typeof b ? tn(b) : b);
        return c
      }
      if (nn && a instanceof Uint8Array)
        return new Uint8Array(a);
      c = {};
      for (d in a)
        null != (b = a[d]) && (c[d] = "object" == typeof b ? tn(b) : b);
      return c
    };
    var vn = function(a) {
      var b = a;
      a = un;
      this.wb = null;
      b || (b = []);
      this.he = -1;
      this.yb = b;
      a: {
        if (this.yb.length) {
          b = this.yb.length - 1;
          var c = this.yb[b];
          if (c && "object" == typeof c && !y(c) && !(nn && c instanceof Uint8Array)) {
            this.We = b - this.he;
            this.Vb = c;
            break a
          }
        }
        this.We = Number.MAX_VALUE
      }
      if (a)
        for (b = 0; b < a.length; b++)
          c = a[b],
          c < this.We ? (c += this.he,
          this.yb[c] = this.yb[c] || on) : (pn(this),
          this.Vb[c] = this.Vb[c] || on)
    };
    B(vn, mn);
    var un = [4, 7, 12];
    var wn = 0
      , xn = {
      API_KEY: 0,
      NO_AUTH: 2,
      OAUTH: 1,
      SERVICE_ACCOUNT: 3
    }
      , zn = function(a, b, c) {
      var d = ji
        , e = c.In || "hh-" + wn;
      wn++;
      var f = document.createElement("iframe")
        , g = new vn;
      qn(g, 2, b);
      qn(g, 1, e);
      qn(g, 5, (c.window || window).location.origin);
      void 0 !== c.qj && qn(g, 3, c.qj);
      c.vj && qn(g, 6, c.vj);
      void 0 !== c.kh && qn(g, 7, c.kh.split(",") || []);
      c.Ch && qn(g, 9, c.Ch);
      c.ji && qn(g, 12, c.ji.split(",") || []);
      c.Uk && qn(g, 13, c.Uk);
      if (c.Zg) {
        b = c.Zg;
        if (!(b in xn))
          throw Error("Unknown credential type specified: " + b);
        qn(g, 10, xn[b])
      }
      b = (c.locale || "en").toLowerCase();
      b = Ia("https://console.developers.google.com/henhouse/", "/") && xb(yn, b) ? "https://console.developers.google.com/henhouse/index__" + b + ".html" : "https://console.developers.google.com/henhouse/";
      b = new Oh(b);
      g = g.serialize();
      O(b);
      b.Sa.set("pb", g);
      d && (O(b),
      b.Sa.set("authuser", d));
      f.src = b.toString();
      a.appendChild(f);
      return (new jn(e,f,c.window || window,c.Dk)).ready()
    }
      , yn = "ar bg ca cs da el en-GB es es-419 fa fi fr de hi hr hu id it iw ja ko lt lv nl no pl pt-PT pt-BR ro ru sk sl sr sv th tr uk vi zh-CN zh-TW".split(" ");
    var An = {}
      , Cn = function(a) {
      a && L(a, "click", Bn)
    }
      , Bn = function(a) {
      a.target && (a = a.target.getAttribute("data-modal-dialog-id"),
      (new Dn(a)).show())
    }
      , En = function() {
      var a = oh(window.location.href, "dialogOnLoad");
      a && (a = "devsite-dialog-onload-" + a,
      document.querySelector("#" + a) && ((new Dn(a)).show(),
      a = qh(hi.href, "dialogOnLoad"),
      window.history.replaceState({}, "", a)))
    }
      , Fn = function(a, b) {
      An[a] = b
    }
      , Dn = function(a) {
      M.call(this);
      this.fg = document.querySelector("#" + a);
      E(this.fg.querySelectorAll(".devsite-dialog-close"), function(a) {
        L(a, "click", this.close.bind(this))
      }
      .bind(this));
      if (An[a])
        An[a](this)
    };
    B(Dn, M);
    Dn.prototype.close = function() {
      this.fg.style.display = "none";
      Ni();
      me(this.mk);
      le(document, "keydown", this.sh, !1, this);
      this.dispatchEvent("close")
    }
    ;
    Dn.prototype.show = function() {
      this.fg.style.display = "block";
      var a = Mi();
      this.mk = ee(a, "click", this.close.bind(this));
      L(document, "keydown", this.sh, !1, this);
      this.dispatchEvent("open")
    }
    ;
    Dn.prototype.sh = function(a) {
      27 == a.keyCode && this.close()
    }
    ;
    var Gn = function(a, b) {
      if (x("devsite.devsite.USER_SIGNED_IN")) {
        var c = a.getAttribute("data-henhouse-platforms-list") || void 0
          , d = a.getAttribute("data-henhouse-extra-api-ids") || void 0
          , e = a.getAttribute("data-henhouse-header-text") || void 0
          , f = a.getAttribute("data-api-id")
          , g = a.getAttribute("data-henhouse-credential-type") || void 0
          , k = a.getAttribute("data-henhouse-service-account-roles") || void 0
          , l = "devsite-dialog-onload-henhouse-" + Gn.If
          , n = l + "_widget_container"
          , q = l + "_spinner_container";
        Gn.If++;
        a.setAttribute("data-modal-dialog-id", l);
        var t = T(Hn, {
          Ef: l,
          Dg: n,
          yg: q
        })
          , v = t.querySelector("#" + n)
          , ca = t.querySelector("#" + q);
        document.body.appendChild(t);
        c = zn(v, f, {
          Zg: g,
          Gn: c,
          kh: d,
          Ch: e,
          ji: k,
          Dk: function(a, b) {
            t.style.top = "calc(50% - " + b / 2 + "px)";
            t.style.left = "calc(50% - " + a / 2 + "px)"
          }
        });
        var w = !1
          , Q = null;
        Fn(l, function(a) {
          Q = a;
          L(a, "close", function() {
            Q = null
          })
        });
        L(a, "click", function(a) {
          Q || Bn(a)
        });
        En();
        c.then(function(c) {
          var d = function(a) {
            !Q && a && Bn(a);
            Yi(c.re);
            w = !0;
            ee(c, "cancel", Q.close.bind(Q));
            ee(Q, "close", function() {
              w = !1;
              Yi((b || window).location.pathname);
              c.reset()
            })
          };
          L(c, "goToApiConsole", function() {
            (b || window).location = Gn.Gi
          });
          L(c, "analyticsVirtualPageView", function(a) {
            w && Yi(a.data[0])
          });
          L(c, "analyticsEvent", function(a) {
            w && Zi(a.data[0])
          });
          L(a, "click", d);
          Q && d();
          ca.classList.add("devsite-hidden");
          v.classList.remove("devsite-hidden")
        })
      } else
        L(a, "click", Ii)
    };
    Gn.If = 0;
    Gn.vn = function() {
      return Gn.If
    }
    ;
    Gn.Gi = ni("https://console.developers.google.com");
    var Hn = function(a) {
      var b = Y(r(a.Ef) || a.Ef instanceof S, "container_id", a.Ef, "!goog.soy.data.SanitizedContent|string")
        , c = Y(r(a.Dg) || a.Dg instanceof S, "widget_container_id", a.Dg, "!goog.soy.data.SanitizedContent|string");
      a = Y(r(a.yg) || a.yg instanceof S, "spinner_container_id", a.yg, "!goog.soy.data.SanitizedContent|string");
      return V('<div id="' + X(b) + '" class="devsite-dialog devsite-henhouse-dialog"><div class="devsite-henhouse-inner"><div id="' + X(a) + '" class="devsite-henhouse-spinner-container"><div class="devsite-henhouse-cross-container"><i class="material-icons devsite-henhouse-cross devsite-dialog-close">clear</i></div><div class="devsite-credentials-spinner-region"><div class="devsite-credentials-spinner"><div><div></div></div></div></div></div><div id="' + X(c) + '" class="devsite-hidden"></div></div></div>')
    };
    Hn.g = "devsite.attachHenhouseDialogRenderer.henhouseWidgetContainer";
    var Jn = function(a) {
      var b = T(In);
      yi(a, function(a) {
        var c = b.cloneNode();
        a.insertBefore(c, a.firstChild);
        Bi(c)
      })
    };
    A("devsite.backToTopLinks.addLinks", Jn);
    var In = function() {
      var a = "" + ('<a href="#top_of_page" class="devsite-back-to-top-link material-icons" title="' + Sk("Back to top") + '"></a>');
      return V(a)
    };
    In.g = "devsite.backToTopLinksRenderer.link";
    var Kn = function(a) {
      this.v = a;
      this.wg = {};
      this.Ad = null;
      this.se = [];
      this.Ih = 0;
      this.hk = L(a, "keydown", this.Nj.bind(this))
    }
      , Ln = null
      , Mn = function() {
      if (!Ln) {
        var a = new Kn(document.body);
        a.se.push("input");
        a.se.push("select");
        a.se.push("textarea");
        Ln = a
      }
      return Ln
    };
    A("devsite.KeyboardShortcutHandler.getInstance", Mn);
    Kn.prototype.Nj = function(a) {
      for (var b = this.se, c = 0; c < b.length; c++) {
        var d = a.target
          , e = b[c]
          , f = !1
          , g = "tag";
        0 == e.indexOf(".") ? g = "class" : 0 == e.indexOf("#") && (g = "id");
        "tag" == g ? d.tagName.toLowerCase() == e.toLowerCase() && (f = !0) : "class" == g ? d.classList.contains(e.toLowerCase().substring(1)) && (f = !0) : "id" == g && d.id == e.substring(1) && (f = !0);
        if (f)
          return
      }
      b = a.timestamp || Date.now();
      c = b - this.Ih;
      this.Ih = b;
      c = this.Ad && 1500 > c ? this.Ad : this.wg;
      b = a.which || a.keyCode;
      c = c[b];
      c || (this.Ad = null,
      c = this.wg,
      c = c[b]);
      if ("object" == typeof c)
        this.Ad = c;
      else if ("function" === typeof c)
        return a.preventDefault(),
        this.Ad = null,
        c()
    }
    ;
    var Nn = function(a, b, c) {
      a = a.wg;
      for (var d = 0; d < b.length - 1; d++) {
        var e = b[d];
        if (a[e]) {
          if ("function" === typeof a[e])
            return
        } else
          a[e] = {};
        a = a[e]
      }
      a[b[b.length - 1]] || (a[b[b.length - 1]] = c)
    };
    Kn.prototype.Xa = function() {
      me(this.hk)
    }
    ;
    var On = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
      , Qn = function() {
      Nn(Mn(), On, Pn)
    };
    A("devsite.EasterEgg.init", Qn);
    var Pn = function() {
      Zi("Easter Egg", "Show", String(window.location));
      var a = T(Rn, {
        domain: window.location.hostname
      });
      document.querySelector("html").classList.add("devsite-easter-egg-err-background");
      ld(document.body);
      document.body.appendChild(a)
    };
    var Rn = function(a) {
      a = Y(r(a.domain) || a.domain instanceof S, "domain", a.domain, "!goog.soy.data.SanitizedContent|string");
      return V("<div class='devsite-easter-egg-err devsite-easter-egg-err-background'><p>A problem has been detected and " + W(a) + " has been shut down to prevent damage to your computer.</p><p>EASTER_EGG_NOT_IMPLEMENTED</p><p>If this is the first time you've seen this Stop error screen, refresh the page. If this screen appears again, follow these steps:</p><p>Check to make sure there is not a cat on your keyboard, and if there is, that it is only typing the keys that you direct it to.</p><p>If you arrived here by inspecting the JavaScript source for this website, then bravo. If you arrived here by entering random keystrokes in your browser, you should find a new hobby.</p><p>Technical information:</p><p>*** STOP: 0x00000047, 0x00000045, 0x00000054, 0x00000042, 0x00000041, 0x00000043, 0x0000004B, 0x00000054, 0x0000004F, 0x00000057, 0x0000004F, 0x00000052, 0x0000004B</p><p>Contact your local Google Developer Group for further assistance.</p></div>")
    };
    Rn.g = "devsite.EasterEggRenderer.errMessage";
    var Sn = function(a) {
      var b = Y(r(a.kg) || a.kg instanceof S, "placeholderSrc", a.kg, "!goog.soy.data.SanitizedContent|string");
      a = Y(ia(a.Th), "params", a.Th, "{classes: (!goog.soy.data.SanitizedContent|string), link: (!goog.Uri|!goog.html.SafeUrl|!goog.html.TrustedResourceUrl|!goog.soy.data.SanitizedUri|!goog.soy.data.UnsanitizedText|string),}");
      a = "<a" + (a.link ? ' href="' + X(al(a.link)) + '"' : "") + (a.yd ? ' class="' + X(a.yd) + '"' : "") + '><img src="';
      Mk(b, gj) ? (D(b.constructor === mj),
      b = Xk(b)) : Mk(b, hj) ? (D(b.constructor === nj),
      b = Xk(b)) : b instanceof uc ? b = Xk(vc(b)) : b instanceof rc ? b = Xk(sc(b)) : (b = String(b),
      fl.test(b) ? b = b.replace(Zk, $k) : (hb("Bad value `%s` for |filterNormalizeMediaUri", [b]),
      b = "about:invalid#zSoyz"));
      a = "" + (a + X(b) + '"/><span>This resource may not be available in your region.</span></a>');
      return V(a)
    };
    Sn.g = "devsite.BlockedContentRenderer.placeholder";
    var Tn = function(a) {
      a && Array.isArray(a.yd) && (a.yd = a.yd.join(" "));
      return T(Sn, {
        kg: ni("/_static/images/video-placeholder.svg"),
        Th: a || {}
      })
    };
    A("devsite.BlockedContent.getElement", Tn);
    var Un = []
      , Vn = !1
      , Wn = !1
      , Xn = !1
      , $n = function() {
      Wn = Hi("ENABLE_BLOCKED_VIDEO_PLACEHOLDER", !1);
      Un = document.querySelectorAll(".devsite-embedded-youtube-video");
      0 < Un.length && (Wn && Yn(),
      Zn())
    };
    A("devsite.youTube.initIframeVideos", $n);
    var Zn = function() {
      if (!Xn) {
        var a = document.createElement("script");
        a.src = "//www.youtube.com/iframe_api";
        document.head.appendChild(a);
        Xn = !0
      }
    };
    A("devsite.youTube.installYouTubeScript", Zn);
    var Yn = function() {
      for (var a = 0; a < Un.length; a++) {
        var b = Un[a];
        N(b, !1);
        var c = Tn({
          link: "//www.youtube.com/watch?v=" + R(b, "videoId"),
          yd: "devsite-embedded-youtube-video-placeholder"
        });
        N(c, !1);
        b.parentNode.appendChild(c);
        setTimeout(function(a, b) {
          "none" != a.style.display || N(b, !0)
        }
        .bind(null, b, c), 500)
      }
    }
      , ao = [];
    A("devsite.youTube.addReadyCallback", function(a) {
      bo ? a() : ao.push(a)
    });
    var bo = !1
      , co = function(a, b) {
      if (Pi && a.dataset ? "videoId"in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + eb("videoId")) : a.getAttribute("data-" + eb("videoId"))) {
        if (Pi && a.dataset)
          var c = a.dataset;
        else {
          c = {};
          for (var d = a.attributes, e = 0; e < d.length; ++e) {
            var f = d[e];
            if (Ha(f.name, "data-")) {
              var g = db(f.name.substr(5));
              c[g] = f.value
            }
          }
        }
        c.enablejsapi = "1";
        d = c.videoId;
        delete c.videoId;
        a.setAttribute("src", jh("//www.youtube.com/embed/" + d, c));
        b.videoId = d
      }
      a.getAttribute("origin") || a.setAttribute("origin", window.location.origin);
      return new YT.Player(a.id,b)
    };
    A("devsite.youTube.installPlayerInFrame", co);
    A("onYouTubeIframeAPIReady", function() {
      bo = !0;
      for (var a = Un, b = new Yc, c = 0; c < a.length; c++) {
        var d = a[c];
        d.id || (d.id = "ytplayer" + c);
        var e = co(d, {
          tn: {
            onReady: eo.bind(null, d),
            onStateChange: fo
          }
        });
        (d = b.wj(d, "devsite-dialog")) && go(d, e)
      }
      for (c = 0; c < ao.length; c++)
        ao[c]()
    });
    var go = function(a, b) {
      Fn(a.id, function(a) {
        L(a, "open", function() {
          b.playVideo()
        });
        L(a, "close", function() {
          b.pauseVideo()
        })
      })
    }
      , eo = function(a) {
      Wn && (N(a.parentNode.lastChild, !1),
      N(a, !0))
    }
      , fo = function(a) {
      var b = "";
      a.data == YT.PlayerState.PLAYING ? b = Vn ? "Video Resume" : "Video Start" : a.data == YT.PlayerState.PAUSED ? (b = "Video Paused",
      Vn = !0) : a.data == YT.PlayerState.ENDED && (b = "Video Finished",
      Vn = !0);
      Zi("Site-Wide Custom Events", b, a.target.getVideoData().video_id, a.target.getCurrentTime());
      b = b.replace(" ", "");
      a = {
        type: "youTubeVideo",
        name: b,
        metadata: {
          youTubeId: a.target.getVideoData().video_id,
          videoTime: a.target.getCurrentTime()
        }
      };
      (b = x("jQuery.cloudtrack.sendEvent")) && b(a)
    };
    A("devsite.youTube.onPlayerStateChange", fo);
    var io = function() {
      P(".devsite-googler-bug", function(a) {
        a.addEventListener("click", ho)
      })
    };
    A("devsite.googlerButtons.init", io);
    var ho = function(a) {
      a = a.target;
      var b = hi.hash;
      if (a && "" != b && "#" != b) {
        b = b.replace("#", "%23");
        var c = a.parentElement.href.indexOf("%23");
        a.parentElement.href = -1 == c ? a.parentElement.href + b : a.parentElement.href.replace(a.parentElement.href.substring(c), b)
      }
    };
    var jo = {
      "google.com": !0,
      "dl.google.com": !1,
      "abc.xyz": !0,
      "admob.com": !0,
      "android.com": !0,
      "blogger.com": !0,
      "blogspot.com": !0,
      "chrome.com": !0,
      "chromium.org": !0,
      "domains.google": !0,
      "doubleclick.com": !0,
      "feedburner.com": !0,
      "g.co": !0,
      "ggpht.com": !0,
      "gmail.com": !0,
      "gmodules.com": !0,
      "goo.gl": !0,
      "google.org": !0,
      "googleapis.com": !0,
      "googleapps.com": !0,
      "googlecode.com": !0,
      "googledrive.com": !0,
      "googlemail.com": !0,
      "googlesource.com": !0,
      "googlesyndication.com": !0,
      "googletagmanager.com": !0,
      "googleusercontent.com": !0,
      "gv.com": !0,
      "keyhole.com": !0,
      "madewithcode.com": !0,
      "panoramio.com": !0,
      "urchin.com": !0,
      "withgoogle.com": !0,
      "youtu.be": !0,
      "youtube.com": !0,
      "ytimg.com": !0
    }
      , ko = function() {
      if (Hi("ENABLE_BLOCKED_LINK_TOOLTIP", !1))
        for (var a = document.querySelectorAll("a"), b = 0; b < a.length; b++)
          if (a[b].hostname != window.location.hostname) {
            var c;
            a: {
              for (c = a[b].hostname.split("."); 0 < c.length; ) {
                var d = c.join(".");
                if (d in jo) {
                  c = jo[d];
                  break a
                }
                c.shift()
              }
              c = !1
            }
            c && Ai(a[b], "This link may not be accessible in your region.")
          }
    };
    A("devsite.linkTooltip.addTooltipsForBlockedLinks", ko);
    var lo = function(a) {
      var b = Y(r(a.Pd) || a.Pd instanceof S, "notificationId", a.Pd, "!goog.soy.data.SanitizedContent|string")
        , c = Y(r(a.Ue) || a.Ue instanceof S, "paragraph", a.Ue, "!goog.soy.data.SanitizedContent|string")
        , d = Y(r(a.Re) || a.Re instanceof S, "okButtonText", a.Re, "!goog.soy.data.SanitizedContent|string")
        , e = Y(r(a.Se) || a.Se instanceof S, "okButtonUrl", a.Se, "!goog.soy.data.SanitizedContent|string");
      a = Y(r(a.te) || a.te instanceof S, "dismissButtonText", a.te, "!goog.soy.data.SanitizedContent|string");
      return V('<div class="devsite-notification-promo devsite-dialog"><div class="devsite-dialog-contents"><p>' + W(c) + '</p></div><div class="devsite-dialog-buttons"><a class="devsite-notification-promo-ok button button-white" data-category="devsite-notification-promo" data-label="' + X(b) + '" href="' + X(al(e)) + '">' + W(d) + '</a><a class="devsite-notification-promo-dismiss button button-white" href="#">' + W(a) + "</a></div></div>")
    };
    lo.g = "devsite.notifications.promo.renderer.notification";
    var mo = {
      Ue: "DevSite is hiring!",
      Re: "Learn more",
      Se: "http://go/devsite-swe",
      te: "Dismiss",
      Pd: "devsite-is-hiring-2016-04-19"
    }
      , no = {
      Ue: "Sign up for a UX study?",
      Re: "Sure",
      Se: "https://www.google.com/usability/index.html?reserved=1&pType=devel&productTag=clou&campaignType=ghc&campaignDate=0&labelTag=0&referral_code=devsite",
      te: "No thanks",
      Pd: "notification-promo-201510"
    }
      , oo = function(a) {
      var b = new wl("",a.Pd);
      if (b.Gb()) {
        var c = T(lo, a);
        document.body.appendChild(c);
        (a = c.querySelector(".devsite-notification-promo-ok")) && Vi(a);
        ee(c.querySelector(".devsite-notification-promo-dismiss"), "click", function(a) {
          b.tf();
          document.body.removeChild(c);
          a.preventDefault()
        })
      }
    };
    var so = function() {
      var a = document.querySelector(".devsite-nav-responsive");
      if (a) {
        this.mj = a.clientWidth;
        a.style.left = -this.mj + "px";
        var b = document.querySelector(".devsite-expand-section-nav");
        b && (b.addEventListener("click", function() {
          po()
        }),
        "none" !== b.style.display && "true" == Oi(document.location.href).nav && po(!0));
        (b = a.querySelector(".devsite-nav-responsive-forward")) && b.addEventListener("click", qo);
        (a = a.querySelector(".devsite-nav-responsive-back")) && a.addEventListener("click", ro);
        document.querySelector(".devsite-nav-responsive-tabs-panel + .devsite-nav-responsive-sidebar-panel") && qo()
      }
    }
      , po = function(a) {
      var b = document.querySelector(".devsite-nav-responsive");
      a ? (b.classList.add("devsite-nav-responsive-no-animate"),
      a = Mi(0)) : a = Mi();
      b.classList.add("devsite-nav-responsive-open");
      a.addEventListener("click", to);
      var c = function(a) {
        27 == a.keyCode && (to(),
        document.removeEventListener("keydown", c))
      };
      document.addEventListener("keydown", c)
    }
      , to = function() {
      var a = document.querySelector(".devsite-nav-responsive");
      Ni();
      a.classList.remove("devsite-nav-responsive-open");
      a.classList.remove("devsite-nav-responsive-no-animate");
      a.scrollTop = 0;
      Zi("Site-Wide Custom Events", "Close", "Hamburger menu")
    }
      , qo = function() {
      var a = document.querySelector(".devsite-nav-responsive-tabs-panel")
        , b = document.querySelector(".devsite-nav-responsive-sidebar-panel");
      b.style.display = "block";
      a.classList.add("devsite-nav-responsive-transition");
      a.classList.add("devsite-nav-responsive-transform");
      var c = function() {
        a.removeEventListener(Qd, c, !0);
        b.classList.remove("devsite-nav-responsive-transition");
        b.classList.remove("devsite-nav-responsive-transform");
        a.style.display = "none"
      };
      a.addEventListener(Qd, c, !0);
      setTimeout(function() {
        b.classList.add("devsite-nav-responsive-transition");
        b.classList.add("devsite-nav-responsive-transform")
      }, 1)
    }
      , ro = function() {
      var a = document.querySelector(".devsite-nav-responsive-tabs-panel")
        , b = document.querySelector(".devsite-nav-responsive-sidebar-panel");
      b.classList.remove("devsite-nav-responsive-transition");
      b.classList.add("devsite-nav-responsive-transform");
      a.style.display = "block";
      a.classList.remove("devsite-nav-responsive-transition");
      a.classList.add("devsite-nav-responsive-transform");
      setTimeout(function() {
        a.classList.add("devsite-nav-responsive-transition");
        a.classList.remove("devsite-nav-responsive-transform");
        b.classList.add("devsite-nav-responsive-transition");
        b.classList.remove("devsite-nav-responsive-transform");
        var c = function() {
          b.removeEventListener(Qd, c, !0);
          b.style.display = "none";
          a.classList.remove("devsite-nav-responsive-transition")
        };
        b.addEventListener(Qd, c, !0)
      }, 1)
    };
    var uo = []
      , xo = function() {
      uo = [];
      vo("kd-tabbar-horz");
      vo("kd-tabbar-vert");
      Yl(wo)
    };
    A("devsite.overflowMenu.init", xo);
    var vo = function(a) {
      a = document.getElementsByClassName(a);
      for (var b = 0; b < a.length; b++)
        uo.push(new yo(a[b]))
    }
      , yo = function(a) {
      this.eg = [];
      this.Ma = [];
      this.ki = a.parentNode.parentNode.hasAttribute("data-ds-scope") ? a.parentNode.parentNode.getAttribute("data-ds-scope") : "code";
      this.wc = 0;
      this.U = a;
      this.Ib = document.createElement("a");
      this.Ea = document.createElement("div");
      this.Ib.textContent = "More";
      this.Ib.className = "devsite-overflow-menu-button";
      N(this.Ib, !1);
      L(this.Ib, "click", this.Rj, !1, this);
      this.Ea.style.visibility = "hidden";
      this.Ea.className = "devsite-overflow-menu";
      this.Ea.style.top = "-1000px";
      a = "";
      for (var b = 0; b < this.U.children.length; b++) {
        var c = this.U.children[b];
        c.setAttribute("data-ds-scope", this.ki);
        a = c.className;
        this.Ma.push(c);
        L(c, "click", zo)
      }
      Ao(this);
      a && (this.Ib.className += " " + a.replace("selected", ""));
      document.body.appendChild(this.Ea);
      this.U.appendChild(this.Ib);
      Bo(this)
    }
      , Bo = function(a) {
      var b = a.wc > a.U.offsetWidth;
      N(a.Ib, b);
      var c = 0
        , d = !1
        , e = a.U.offsetWidth;
      b && (e -= a.Ib.offsetWidth + 1);
      var f;
      for (b = 0; b < a.Ma.length; b++) {
        var g = a.Ma[b];
        !d && c + a.eg[b] <= e ? a.U.children.length > b && a.Ma[b] == a.U.children[b] || (b < a.Ma.length - 1 && pd(a.U, a.Ma[b + 1]) ? a.U.insertBefore(g, a.Ma[b + 1]) : a.U.insertBefore(g, a.U.children[a.U.children.length - 1])) : (d = !0,
        a.Ea.appendChild(g),
        -1 < g.className.indexOf("selected") && (f = g));
        c += g.offsetWidth
      }
      f && Co(a, f)
    }
      , Ao = function(a) {
      a.eg = [];
      for (var b = a.wc = 0, c = a.Ma.length - 1; 0 <= c; c--) {
        var d = a.Ma[c];
        d.offsetWidth > b && (b = d.offsetWidth);
        a.wc += d.offsetWidth;
        a.eg.unshift(b)
      }
    };
    yo.prototype.Rj = function() {
      var a = Ff(this.Ib);
      this.Ea.style.right = document.body.clientWidth - a.left - a.width - 1 + "px";
      this.Ea.style.top = a.top - 16 + "px";
      this.Ea.style.visibility = "visible";
      ee(document.body, "click", this.zj, !0, this)
    }
    ;
    yo.prototype.zj = function(a) {
      this.Ea.style.visibility = "hidden";
      a.target.parentNode != this.Ea && a.stopPropagation()
    }
    ;
    var Co = function(a, b) {
      if (b.parentNode != a.U) {
        for (var c = a.U.children[a.U.children.length - 2], d = 0, e = 0; e < a.Ma.length; e++)
          if (a.Ma[e] == c) {
            d = e + 1;
            break
          }
        d == a.Ma.length ? a.Ea.appendChild(c) : a.Ea.contains(a.Ma[d]) ? a.Ea.insertBefore(c, a.Ma[d]) : a.Ea.insertBefore(c, a.Ea.childNodes[0]);
        a.U.insertBefore(b, a.U.children[a.U.children.length - 1])
      }
    }
      , wo = function() {
      for (var a = 0; a < uo.length; a++)
        Ao(uo[a]),
        Bo(uo[a])
    }
      , zo = function(a) {
      var b = a.currentTarget;
      a = xd(b).toLowerCase();
      b = b.getAttribute("data-ds-scope");
      for (var c = 0; c < uo.length; c++) {
        var d = uo[c];
        if (d.ki == b)
          for (var e = 0; e < d.Ea.childNodes.length; e++)
            if (xd(d.Ea.childNodes[e]).toLowerCase() == a) {
              Co(d, d.Ea.childNodes[e]);
              break
            }
      }
    };
    var Eo = function(a) {
      this.wc = 0;
      this.U = a;
      this.$d = a.parentElement;
      this.Sd = T(Do, {
        af: "devsite-scroll-forward"
      });
      this.Rd = T(Do, {
        af: "devsite-scroll-back"
      });
      this.Qd = [];
      this.hd = [];
      this.df = 48;
      this.Kd()
    };
    Eo.prototype.Kd = function() {
      this.Sd.classList.add("devsite-hidden");
      this.Rd.classList.add("devsite-hidden");
      this.$d.appendChild(this.Sd);
      this.$d.appendChild(this.Rd);
      this.qd();
      Yl(this.qd.bind(this));
      Zl(this.qd.bind(this));
      L(this.Sd, "click", this.qk, !1, this);
      L(this.Rd, "click", this.rk, !1, this)
    }
    ;
    Eo.prototype.qd = function() {
      this.hd = [];
      this.Qd = [];
      Fo(this);
      this.wc = Go(this);
      this.U.style.minWidth = this.wc + "px";
      this.U.style.left = 0;
      this.$d.offsetWidth < this.wc && Ho(this)
    }
    ;
    Eo.prototype.qk = function() {
      if (0 < this.hd.length) {
        var a = parseInt(this.U.style.left);
        this.U.style.left = a - (this.hd[0].offsetLeft - Math.abs(a) - this.df) + "px";
        Ho(this)
      }
    }
    ;
    Eo.prototype.rk = function() {
      if (0 != this.Qd.length) {
        var a = parseInt(this.U.style.left)
          , b = this.$d.offsetWidth + this.df;
        Math.abs(a) >= b ? (this.U.style.left = a + b + "px",
        Ho(this)) : this.qd()
      }
    }
    ;
    var Ho = function(a) {
      a.hd = [];
      a.Qd = [];
      var b = Math.abs(parseInt(a.U.style.left));
      E(a.U.children, function(a) {
        var c = a.offsetLeft;
        a.offsetLeft + a.offsetWidth - b > this.$d.offsetWidth - this.df && (c - this.df) / 2 > b ? this.hd.push(a) : b > c && this.Qd.push(a)
      }
      .bind(a));
      Fo(a)
    }
      , Fo = function(a) {
      0 == a.hd.length ? a.Sd.classList.add("devsite-hidden") : a.Sd.classList.remove("devsite-hidden");
      0 == a.Qd.length ? a.Rd.classList.add("devsite-hidden") : a.Rd.classList.remove("devsite-hidden")
    }
      , Go = function(a) {
      var b = 0;
      E(a.U.children, function(a) {
        b += a.offsetWidth
      });
      return b
    };
    var Do = function(a) {
      a = Y(r(a.af) || a.af instanceof S, "scrollButtonClass", a.af, "!goog.soy.data.SanitizedContent|string");
      return V('<button type="button" class="devsite-overflow-tabs-scroll-button devsite-top-button material-icons ' + X(a) + '"></button>')
    };
    Do.g = "devsite.overflowTabsScrollRenderer.scrollButton";
    A("devsite.profile.showProjectSelector", function(a) {
      ld(a);
      Sl(function(b) {
        b = Tl(b, Io);
        a.appendChild(b)
      }
      .bind(this), function() {
        sl(Ml())
      }
      .bind(this))
    });
    var Io = function(a) {
      a = JSON.parse(a.target.selectedOptions[0].value).project_number;
      Rl(a, null, function() {
        sl(Nl())
      }
      .bind(this))
    };
    var Ko = function() {
      document.querySelector(".devsite-firebase-status") && pi("https://status.firebase.google.com/incidents.json", Jo, "GET", null, null, null, null, !0)
    };
    A("devsite.firebaseStatus.init", Ko);
    var Jo = function(a) {
      var b = {
        low: 1,
        medium: 2,
        high: 3
      }
        , c = 0;
      a = a.target;
      200 == Ih(a) && (a = Mh(a)) && a.length && E(a, function(a) {
        var d = a.severity;
        !a.end && b[d] > c && (c = b[d])
      });
      P(".devsite-firebase-status", function(a) {
        var b = T(Lo, {
          severity: c
        });
        a.appendChild(b)
      })
    };
    var Lo = function(a) {
      a = Y(u(a.severity), "severity", a.severity, "number");
      var b = '<div class="devsite-firebase-status-content">';
      switch (a) {
      case 0:
        b += '<aside class="success"><span class="devsite-firebase-status-text">Firebase is healthy!</span>';
        break;
      case 1:
        b += '<aside class="note"><span class="devsite-firebase-status-text">Minor issues with one or more Firebase services.</span>';
        break;
      case 2:
        b += '<aside class="caution"><span class="devsite-firebase-status-text">Ongoing problems with one or more Firebase services.</span>';
        break;
      case 3:
        b += '<aside class="warning"><span class="devsite-firebase-status-text">One or more Firebase services are down.</span>'
      }
      return V(b + '<a class="devsite-firebase-status-view" href="https://status.firebase.google.com"><span>View Status</span></a></aside></div>')
    };
    Lo.g = "devsite.firebaseStatus.renderer.status";
    A("devsite.tooltipize.ELEMENT_SELECTOR", ".devsite-nav-title");
    var Mo = function() {
      E(document.querySelectorAll(".devsite-nav-title:not([title])"), function(a) {
        a.clientWidth < a.scrollWidth && (a.title = a.dataset.title || a.textContent.trim())
      })
    };
    var No = []
      , Oo = "s/rss"
      , Qo = function() {
      document.querySelector(".feed") && new Po
    };
    A("devsite.rss.init", Qo);
    var Po = function() {
      (No = document.querySelectorAll(".feed")) && E(No, function(a) {
        if (Hi("BLOCK_RSS_FEEDS", !1))
          a.parentNode.replaceChild(Tn(), a);
        else {
          var b = a.querySelector("a").href;
          if (b) {
            a: {
              var c = {
                output: "json"
              }, d = a.getAttribute("data-limit"), e = a.getAttribute("data-allow-html"), f = a.querySelector(".entry-content"), g = eh(b), k;
              f && (k = f.getAttribute("data-truncate"));
              d && (c.limit = d);
              e && (c["allow-html"] = e);
              k && (c.truncate = k);
              if (0 == !b.indexOf(hi.origin)) {
                if (!g) {
                  rj(a, Ro);
                  b = void 0;
                  break a
                }
                c["url[]"] = b
              } else
                Oo = b;
              b = c
            }
            So(b, a);
            a.classList.add("rendered")
          } else
            rj(a, Ro)
        }
      })
    }
      , So = function(a, b) {
      pi(Oo, To.bind(this, b), "GET", a)
    }
      , To = function(a, b) {
      b = b.target;
      if (Jh(b)) {
        b = Mh(b);
        var c = 0
          , d = []
          , e = a.getAttribute("data-limit") || b.result.length
          , f = a.getAttribute("data-allow-html")
          , g = a.querySelector(".entry-content");
        if (b) {
          for (var k = 0, l; (l = b.result[k]) && c < e; k++)
            d.push(Uo(l)),
            c++;
          Vo(a, d, f, g)
        } else
          rj(a, Ro)
      } else
        rj(a, Ro)
    }
      , Uo = function(a) {
      return {
        url: a.link,
        title: a.title,
        truncate: a.truncate,
        contents: Ya(a.contents),
        author: a.author,
        date: (new Date(1E3 * a.updated)).toDateString()
      }
    }
      , Vo = function(a, b, c, d) {
      if (c || !d) {
        var e = a.querySelector("article")
          , f = e.querySelector("a")
          , g = e.querySelector("time")
          , k = e.querySelector("header")
          , l = e.querySelector(".entry-content")
          , n = e.querySelector("span[rel=author]");
        a.innerHTML = "";
        ta(b, function(b) {
          e = e.cloneNode(!0);
          b.url && f && e.querySelector("a").setAttribute("href", b.url);
          b.date && g && (e.querySelector("time").innerHTML = b.date);
          b.title && k && (e.querySelector("header").innerHTML = b.title);
          b.contents && l && (e.querySelector(".entry-content").innerHTML = b.contents);
          b.author && n && (e.querySelector("span[rel=author]").innerHTML = b.author);
          a.appendChild(e)
        })
      } else
        rj(a, Wo, {
          sj: b
        })
    };
    var Wo = function(a) {
      var b = "";
      a = a.sj;
      for (var c = a.length, d = 0; d < c; d++) {
        var e = a[d];
        b += '<article class="hentry"><a class="link" href="' + X(al(e.url)) + '"><header>' + W(e.title) + "</header></a>" + (e.contents ? '<article class="entry-content" data-truncate="' + X(e.truncate) + '">' + W(e.contents) + "</article>" : "") + "<div>" + (e.author ? '<span class="vcard author" rel="author">By ' + W(e.author) + ", </span>" : "") + '<a class="link" href="' + X(al(e.url)) + '"><time class="updated published">' + W(e.date) + "</time></a></div></article>"
      }
      return V(b + "")
    };
    Wo.g = "devsite.rss.WidgetRenderer.FeedList";
    var Ro = function() {
      return V('<div class="feed-error"><p>An error has occurred.</p></div>')
    };
    Ro.g = "devsite.rss.WidgetRenderer.FeedError";
    var Xo = function() {
      return V('<div class="devsite-code-button gc-analytics-event material-icons" data-category="" data-label="" track-type="exampleCode" track-name="" title=""></div>')
    };
    Xo.g = "devsite.codeButtonsRenderer.codeButton";
    var Yo = function() {
      return V('<pre class="devsite-code-button-clone"></pre>')
    };
    Yo.g = "devsite.codeButtonsRenderer.cloneDiv";
    var Zo = function() {
      return V('<div class="devsite-code-button-wrapper"></div>')
    };
    Zo.g = "devsite.codeButtonsRenderer.wrapper";
    var $o = function(a, b, c) {
      P(a, function(a) {
        var d = T(Xo)
          , f = a.querySelector(".devsite-code-button-wrapper");
        f || (f = T(Zo),
        a.insertBefore(f, a.firstChild));
        f.appendChild(d);
        L(d, "click", c.bind(null, a));
        b(d, a);
        Bi(d);
        Vi(d)
      })
    };
    A("devsite.codeButtons.init", $o);
    var ap = function(a) {
      window.getSelection().removeAllRanges();
      var b = T(Yo);
      E(a.childNodes, function(a) {
        a.classList && a.classList.contains("no-select") || b.appendChild(a.cloneNode(!0))
      });
      document.body.appendChild(b);
      window.getSelection().selectAllChildren(b);
      window.setTimeout(function() {
        document.body.removeChild(b)
      }, 1)
    };
    var dp = function() {
      $o(".prettyprint:not(.devsite-disable-click-to-copy),.devsite-click-to-copy", bp, cp)
    };
    A("devsite.clickToCopy.init", dp);
    var bp = function(a) {
      a.classList.add("devsite-click-to-copy-button");
      a.setAttribute("data-category", "Site-Wide Custom Events");
      a.setAttribute("data-label", "Click To Copy");
      a.setAttribute("title", "Click to copy");
      a.setAttribute("track-name", "clickToCopy")
    }
      , cp = function(a) {
      ap(a);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      sl("Copied to clipboard")
    };
    var hp = function() {
      $o("pre", ep, fp);
      var a = x("devsite.base.userSignedIn") ? document.body.classList.contains("devsite-dark-code") : "on" == hm.get("devsite_dark_code");
      hm.set("devsite_dark_code", a ? "on" : "off");
      a && gp(!0)
    };
    A("devsite.darkCodeToggle.init", hp);
    var ep = function(a) {
      a.classList.add("devsite-dark-code-button");
      a.setAttribute("data-category", "Site-Wide Custom Events");
      a.setAttribute("data-label", "Dark Code Toggle");
      a.setAttribute("title", "Dark code theme");
      a.setAttribute("track-name", "darkCodeToggle")
    }
      , fp = function() {
      var a = hm.get("devsite_dark_code");
      a = a && "on" == a ? !1 : !0;
      hm.set("devsite_dark_code", a ? "on" : "off");
      x("devsite.base.userSignedIn") && pi("profile/setDarkCode", function() {}, "POST", {
        dark_code: a
      });
      gp(a)
    }
      , gp = function(a) {
      zi(document.body, "devsite-dark-code", a);
      var b = "Dark code theme";
      a && (b = "Light code theme");
      P(".devsite-dark-code-button", function(a) {
        a.setAttribute("data-tooltip", b)
      })
    };
    var ip = function(a) {
      Fj.call(this, a)
    };
    B(ip, Fj);
    ip.prototype.S = function() {
      this.v = this.Db().S("FORM", {
        method: "POST",
        style: "display:none"
      })
    }
    ;
    ip.prototype.post = function(a, b, c) {
      var d = this.b();
      d || (this.ub(),
      d = this.b());
      d.action = b || "";
      d.target = c || "";
      jp(this, d, a);
      d.submit()
    }
    ;
    var jp = function(a, b, c) {
      var d, e = [];
      for (d in c) {
        var f = c[d];
        fa(f) ? E(f, z(function(a) {
          e.push(Rc({
            type: "hidden",
            name: d,
            value: String(a)
          }))
        }, a)) : e.push(Rc({
          type: "hidden",
          name: d,
          value: String(f)
        }))
      }
      Vc(b, Qc(e))
    };
    var mp = function() {
      $o(".devsite-enable-open-in-jsfiddle", kp, lp)
    };
    A("devsite.openInJsfiddle.init", mp);
    var kp = function(a, b) {
      a.classList.add("devsite-jsfiddle-button");
      a.setAttribute("data-category", "jsfiddle");
      a.setAttribute("data-label", b.getAttribute("data-scope"));
      a.setAttribute("title", "Open in JSFiddle");
      a.setAttribute("track-name", "jsfiddle")
    }
      , lp = function(a) {
      var b = {}
        , c = a.getAttribute("data-scope");
      b.title = a.hasAttribute("data-jsfiddle-title") ? a.getAttribute("data-jsfiddle-title") : "Code sample";
      b.wrap = a.hasAttribute("data-jsfiddle-wrap") ? a.getAttribute("data-jsfiddle-wrap") : "b";
      b.description = "";
      P(".devsite-enable-open-in-jsfiddle [data-scope=" + c + "],.devsite-jsfiddle-code-sample[data-scope=" + c + "],.devsite-jsfiddle-code-sample[data-scope=" + c + "] > *", function(a) {
        var c = a.getAttribute("data-type");
        if ("js" == c || "css" == c || "html" == c)
          ap(a),
          b[c] = b[c] ? b[c] + "\n" : "",
          b[c] += window.getSelection().toString(),
          window.getSelection().removeAllRanges()
      });
      (new ip).post(b, "https://jsfiddle.net/api/post/library/pure/", "_blank")
    };
    var op = function() {
      window.prettyPrint && window.prettyPrint();
      mp();
      Cl("DARK_CODE_THEME") && hp();
      dp();
      np()
    };
    da(op);
    var np = function() {
      P(".prettyprint", function(a) {
        a.querySelectorAll("strong").length && a.classList.add("devsite-code-highlight")
      })
    };
    var qp = function(a) {
      this.rg = a;
      this.$f = T(pp);
      this.dl = this.rg.querySelector(".devsite-section-back-to-top-target");
      this.ae = 0;
      this.Ke = !0;
      this.Je = !1;
      this.Kd()
    }
      , rp = function() {
      [].slice.call(document.querySelectorAll(".devsite-section-back-to-top-container")).forEach(function(a) {
        new qp(a)
      })
    };
    A("devsite.sectionBackToTop.init", rp);
    qp.prototype.Kd = function() {
      this.rg.appendChild(this.$f);
      this.ae = document.documentElement.clientHeight;
      sp(this);
      window.onscroll = function() {
        sp(this)
      }
      .bind(this);
      Yl(function() {
        this.ae = document.documentElement.clientHeight;
        sp(this)
      }
      .bind(this))
    }
    ;
    var sp = function(a) {
      a.yi = a.dl.getBoundingClientRect().top;
      a.lk = a.rg.getBoundingClientRect().bottom;
      a.yi <= a.ae ? (a.Ke || tp(a),
      a.Je || up(a)) : a.yi > a.ae && a.Ke && tp(a);
      a.lk <= a.ae && a.Je && up(a)
    }
      , up = function(a) {
      a.$f.classList.toggle("devsite-section-back-to-top-pinned");
      a.Je = !a.Je
    }
      , tp = function(a) {
      a.$f.classList.toggle("devsite-section-back-to-top-invisible");
      a.Ke = !a.Ke
    };
    var pp = function() {
      var a = "" + ('<a href="#section-index" title="' + Sk("Back to Products Index") + '" class="devsite-section-back-to-top-link material-icons"></a>');
      return V(a)
    };
    pp.g = "devsite.sectionBackToTopRenderer.backToTopLink";
    var vp = function(a) {
      this.Tk = a.querySelector(".devsite-settings-kabob");
      this.Wd = a.querySelector(".devsite-settings-menu");
      this.Af = "";
      L(this.Tk, "click", this.xi.bind(this))
    }
      , wp = function() {
      if (Cl("HIGH_CONTRAST_ENABLED")) {
        var a = document.querySelector(".devsite-settings-menu-wrapper");
        a && new vp(a)
      }
    };
    A("devsite.settingsMenu.init", wp);
    vp.prototype.xi = function(a) {
      if (!this.Wd.contains(a.target)) {
        if ("body" == a.currentTarget.tagName.toLowerCase()) {
          if (!cf(this.Wd, "devsite-hidden")) {
            xp(this);
            return
          }
        } else
          cf(this.Wd, "devsite-hidden") ? (ff(this.Wd, "devsite-hidden"),
          ui() && df(document.body, "devsite-settings-menu-open-touch"),
          this.Af = L(document.body, "click", this.xi.bind(this))) : xp(this);
        a.stopPropagation()
      }
    }
    ;
    var xp = function(a) {
      df(a.Wd, "devsite-hidden");
      ui() && ff(document.body, "devsite-settings-menu-open-touch");
      me(a.Af);
      a.Af = ""
    };
    var yp = function() {
      return Ok("Could not determine your remaining quota. Please try again later.")
    };
    yp.g = "devsite.supportQuotaRenderer.quotaNotAvailableMsg";
    var zp = function(a) {
      var b = Y(u(a.di), "remaining", a.di, "number")
        , c = Y(null == a.Gf || u(a.Gf), "days", a.Gf, "null|number|undefined")
        , d = Y(null == a.og || u(a.og), "questionsLimit", a.og, "null|number|undefined")
        , e = Y(null == a.Hf || u(a.Hf), "daysLimit", a.Hf, "null|number|undefined");
      a = Y(r(a.Sf) || a.Sf instanceof S, "helpClass", a.Sf, "!goog.soy.data.SanitizedContent|string");
      var f = "";
      var g = Rk('<a href="https://stackoverflow.com/questions/tagged/firebase" data-category="Site-Wide Custom Events" data-label="Quota Full Stack Overflow">Stack Overflow</a>');
      f += "<div>";
      0 == b ? (c = "You have no questions remaining, but can submit another question in " + (W(c) + (" days. For community support, try " + (W(g) + "."))),
      f += c) : 1 == b ? f += "You have 1 question remaining." : 1 < b && (c = "You have " + (W(b) + " questions remaining."),
      f += c);
      -1 < b && (b = "Free troubleshooting support is limited to " + (X(d) + (" questions every " + (X(e) + " days."))),
      f += '<div class="' + X(a) + ' material-icons" title="' + Sk(b) + '"></div>');
      return V(f + "</div>")
    };
    zp.g = "devsite.supportQuotaRenderer.quotaDiv";
    var Ap = null
      , Cp = function() {
      Ap = new ml;
      P(".devsite-support-quota", function(a) {
        new Bp(a,R(a, "supportPath"),R(a, "disableElementClass"))
      })
    };
    A("devsite.supportQuota.init", Cp);
    var Bp = function(a, b, c) {
      this.Wk = b;
      this.ne = c;
      this.Dc = a;
      this.Yi = 0;
      this.ne && (this.ne = "." + this.ne);
      this.Dc.classList.add("devsite-hidden");
      Dp(this)
    }
      , Dp = function(a) {
      pi("/support/checkquota", a.Wj.bind(a), "POST", {
        supportpath: a.Wk
      })
    };
    Bp.prototype.Wj = function(a) {
      var b = a.target;
      if (200 == Ih(b)) {
        a = {};
        try {
          a = wg(ti(Nh(b)))
        } catch (c) {
          return
        }
        if ("success" == a.status) {
          b = T(zp, {
            di: a.remaining,
            Gf: a.days,
            Hf: a.days_limit,
            og: a.cases_limit,
            Sf: "devsite-support-quota-help"
          });
          this.Dc.appendChild(b);
          -1 < a.remaining && (this.Dc.classList.remove("devsite-hidden"),
          P(".devsite-support-quota-help", function(a) {
            Bi(a)
          }));
          0 == a.remaining && Ep(this);
          return
        }
      }
      3 <= ++this.Yi ? (this.Dc.textContent = ol(Ap, yp),
      this.Dc.classList.remove("devsite-hidden")) : Dp(this)
    }
    ;
    var Ep = function(a) {
      P(a.ne, function(a) {
        a.disabled = !0;
        a.removeAttribute("href")
      })
    };
    og = 0;
    var Fp = !1
      , Gp = []
      , Hp = !1;
    A("devsite.base.init", function(a, b, c, d) {
      Fp = d;
      A("devsite.base.userSignedIn", d || !1);
      ui() || document.body.classList.add("no-touch");
      Ip();
      yi(".devsite-nav-title, td>code, th>code", Jp);
      if ((b = x("devsite.readyCallbacks")) && b.length)
        for (d = 0; d < b.length; d++)
          b[d]();
      wp();
      Kp(a);
      Lp();
      c && (wi = c);
      "gbg" != x("devsite.devsite.tenantSite") && Cl("DEVSITE_EASTER_EGG") && Qn();
      Cl("DEVSITE_PWA") && "serviceWorker"in navigator && navigator.serviceWorker.register("/sw.js", {
        scope: "/"
      }).then(function(a) {
        console.log("ServiceWorker registered, scope:", a.scope)
      })["catch"](function() {
        console.log("ServiceWorker registration failed")
      });
      Mp(so);
      Mp(Np);
      Mp(io);
      Op()
    });
    var Np = function() {
      ui() || (ng(),
      Mo(),
      yi("[title]", Bi))
    }
      , Op = function() {
      var a = function() {
        if (!Hp) {
          Hp = !0;
          for (var a = 0; a < Gp.length; a++)
            Gp[a]()
        }
      };
      "interactive" != document.readyState && "complete" != document.readyState || a();
      document.addEventListener && window.addEventListener("DOMContentLoaded", a)
    }
      , Mp = function(a) {
      -1 < Gp.indexOf(a) || (Gp.push(a),
      Hp && a())
    }
      , Kp = function(a) {
      "devsite" == x("devsite.devsite.tenantSite") && (Cl("DEVSITE_NOTIFICATION_UX_STUDY") && oo(no),
      a && Cl("DEVSITE_NOTIFICATION_HIRING") && oo(mo));
      a && (li ? vl(tj(Pp, {
        Ff: qh(window.location.href, "acting_user"),
        uf: li
      })) : nh(window.location.href, "acting_user") && vl(tj(Qp)))
    }
      , Lp = function() {
      Vm();
      an();
      km.Fg();
      xo();
      P(".devsite-dialog-button", Cn);
      En();
      ei = {
        lc: function(a) {
          a = a.currentTarget;
          var b = a.getAttribute("src")
            , c = "https://" + dh(ch(b)[3] || null);
          (b = Number(ch(b)[4] || null) || null) && (c += ":" + b);
          c && -1 < c.indexOf(".google.com") && -1 == c.indexOf("login") && a.contentWindow.postMessage("AllowFrame: MobileSDK", "*")
        }
      };
      P(".devsite-mobile-sdk-frame", function(a) {
        a.addEventListener("load", ei.lc)
      });
      P(".devsite-api-getstarted-widget", Gn);
      P("[data-platform]", Ci);
      P(".devsite-overflow-tabs-scroll", function(a) {
        new Eo(a)
      });
      op.Pa();
      Fp && Cp();
      Ko();
      document.querySelector(".devsite-page-nav-embedded") && Jn("*:not(.code-sample):not(.data-sample):not(.kd-tabbed-horz):not(.kd-tabbed-vert) > * > h2:not(.hide-from-toc):not(#contents):not(#table-of-contents)");
      rp();
      hn();
      $n();
      ko();
      Qo()
    }
      , Ip = function() {
      yi("table", function(a) {
        var b = document.createElement("div");
        b.className = "devsite-table-wrapper";
        a.parentElement.replaceChild(b, a);
        b.appendChild(a)
      })
    }
      , Jp = function(a) {
      for (var b = a.childNodes, c = 0; c < b.length; c++) {
        var d = b[c];
        if (d.nodeType == Node.TEXT_NODE) {
          var e = document.createElement("span")
            , f = /([|.,]|::|[0-9a-zA-Z-_]+\()/g
            , g = d.nodeValue.split(f)
            , k = g.length;
          g.push("");
          for (var l = 0; l < k; l++) {
            var n = g[l];
            e.appendChild(document.createTextNode(n));
            0 != g[l + 1].indexOf(")") && n.match(f) && e.appendChild(document.createElement("wbr"))
          }
          a.replaceChild(e, d)
        } else
          Jp(d)
      }
    };
    var Pp = function(a) {
      var b = Y(r(a.Ff) || a.Ff instanceof S, "currentUrlNoActingUser", a.Ff, "!goog.soy.data.SanitizedContent|string");
      a = Y(r(a.uf) || a.uf instanceof S, "actingUser", a.uf, "!goog.soy.data.SanitizedContent|string");
      b = "You are browsing as " + (W(a) + (". To use your normal account, " + ('<a href="' + X(al(b)) + '">click here</a>.')));
      return V("" + ("" + b + ""))
    };
    Pp.g = "devsite.baseRenderer.actingUserMsg";
    var Qp = function() {
      return V("The specified acting user is not registered as a Google Account. You are browsing with your normal account.")
    };
    Qp.g = "devsite.baseRenderer.invalidActingUserMsg";
    A("devsite.header.init", function() {
      var a = document.querySelector(".devsite-user-avatar");
      document.querySelector(".devsite-user-dropdown") && L(a, "click", z(Rp, this, a))
    });
    var Rp = function() {
      gbar.op() ? gbar.close() : gbar.spd()
    };
    var Sp = /^[0-9a-zA-Z-]+$/
      , Tp = function() {}
      , Up = null;
    A("devsite.framebox.Framebox.convertSrcs", function(a) {
      Up || (Up = new Tp);
      yi("iframe.framebox, iframe.inherit-locale", function(b) {
        var c = b.getAttribute("data-src");
        if (c) {
          var d = oh(window.location.href, "hl") || a;
          d = d.replace(/_/, "-");
          if (d = Sp.test(d) ? d : null)
            c = rh(c, "hl", d),
            b.removeAttribute("data-src"),
            b.setAttribute("src", c)
        }
      })
    });
    var Z = {
      qc: null,
      Pk: null,
      aj: null,
      Cg: null,
      locale: "en",
      Jg: "Search",
      Di: "Full Site Search",
      Fi: "Suggestion Click",
      Ei: "Text Entered Into Search Bar",
      pn: "Remove search restriction",
      li: !1,
      oh: !1,
      qg: !1,
      lc: function(a) {
        a && (Z.locale = a);
        Z.qc = document.querySelector(".devsite-search-query");
        L(Z.qc, "keyup", Z.wh.bind(this));
        Z.qc && (Nn(Mn(), [191], HTMLElement.prototype.focus.bind(Z.qc)),
        L(Z.qc, "focus", Z.wh.bind(this)));
        Z.Pk = document.querySelector(".devsite-searchbox:first-child");
        Z.aj = document.querySelector("#search-button");
        Z.Cg = document.querySelector("#top-search");
        var b = document.querySelectorAll(".search");
        for (a = 0; a < b.length; a++) {
          var c = b[a];
          L(c, "submit", Z.xh.bind(c))
        }
        b = document.querySelectorAll(".devsite-search-form");
        for (a = 0; a < b.length; a++)
          c = b[a],
          L(c, "submit", Z.xh.bind(c));
        Z.$h();
        Z.ak()
      }
    };
    A("devsite.search.init", Z.lc);
    Z.ak = function() {
      var a = document.querySelector(".devsite-search-button");
      a && L(a, "click", function() {
        Z.Rk()
      }
      .bind(this))
    }
    ;
    Z.zn = function() {
      return Z.qg
    }
    ;
    Z.Rk = function() {
      var a = !Z.qg;
      a ? (document.querySelector(".devsite-top-logo-row").classList.add("devsite-responsive-search-open"),
      setTimeout(function() {
        Z.qc.focus()
      }, 0)) : (Z.qc.value = "",
      document.querySelector(".devsite-top-logo-row").classList.remove("devsite-responsive-search-open"));
      Z.qg = a
    }
    ;
    Z.wh = function() {
      !Z.li && Z.qc.value.trim() && (Z.li = !0,
      Zi("Site-Wide Custom Events", Z.Ei, Z.Jg))
    }
    ;
    Z.xh = function(a) {
      if (Z.oh)
        return !0;
      Z.oh = !0;
      var b = a.target;
      Zi("Site-Wide Custom Events", Z.Di, Z.Jg + ": " + this.id, void 0, function() {
        b.submit()
      });
      setTimeout(b.submit.bind(b), 150);
      return !1
    }
    ;
    Z.An = function() {
      return !0
    }
    ;
    Z.jk = function() {
      var a = Oi(Vp.search).q;
      if (a) {
        a = {
          q: a,
          hl: Z.locale || "en"
        };
        var b = document.querySelector("#search_project");
        b && (a.p = b.value);
        pi("/_s/restrictedresults", function() {
          var a = document.querySelector(".devsite-search-loading-restricted");
          a && a.parentNode.removeChild(a);
          Jh(this) && (a = Lh(this).replace(/\\"/g, '"'),
          document.querySelector(".devsite-search-results-restricted").innerHTML = a)
        }, "GET", a)
      }
    }
    ;
    A("devsite.search.loadRestrictedResults", Z.jk);
    Z.$h = function() {
      var a = Z.Cg.getAttribute("action");
      if (a) {
        a = Oi(a);
        for (var b in a) {
          var c = document.createElement("input");
          c.setAttribute("class", "devsite-search-query-param");
          c.setAttribute("type", "hidden");
          c.setAttribute("name", b);
          c.setAttribute("value", a[b]);
          Z.Cg.appendChild(c)
        }
      }
    }
    ;
    A("devsite.search.propagateQueryParamToForm", Z.$h);
    var Wp = function() {
      return V('<div class="devsite-suggest-results"></div>')
    };
    Wp.g = "searchRenderer.suggestionWrapper";
    var Xp = function(a) {
      return V('<a href="#" class="button button-white devsite-suggest-all-results">' + W(a.label) + "</a>")
    };
    Xp.g = "searchRenderer.allResultsItem";
    var Yp = function(a) {
      for (var b = '<a class="devsite-suggestion" href="' + X(al(a.link)) + '"><span class="devsite-suggestion-fragment">', c = a.text.length, d = 0; d < c; d++) {
        var e = d % 2 && a.text[d] ? W(a.text[d]) : a.text[d] ? "<b>" + W(a.text[d]) + "</b>" : "";
        b += e
      }
      b += "</span>";
      a.bi && (b += '<span class="devsite-suggestion-fragment">' + W(a.bi) + '</span><span class="devsite-suggestion-fragment">Reference</span>');
      b += (a.Yh ? '<span class="devsite-suggestion-fragment">' + W(a.Yh) + "</span>" : "") + "</a>";
      return V(b)
    };
    Yp.g = "searchRenderer.suggestion";
    var Zp = {
      Am: 1,
      wm: 2,
      Fm: 3
    }
      , $p = {
      cloud: "https://cloud.google.com",
      devsite: "https://developers.google.com",
      gbg: "https://google.com/landing/gbg"
    }
      , aq = []
      , cq = function(a, b) {
      this.nh = b.enableFullSiteSearch;
      var c = {}
        , d = document.querySelector(".suggest-project");
      c[1] = "Products";
      if (d) {
        var e = "Reference in " + d.value
          , f = "Pages and Reference in " + d.value;
        c[2] = "Pages in " + d.value;
        c[3] = e;
        c.combined = f
      } else
        c[2] = "Pages",
        c[3] = "Reference",
        c.combined = "Pages and Reference";
      this.Bh = c;
      this.Zf = "";
      this.Ii = "There are no suggestions for your query.";
      c = document.querySelectorAll(".suggest-project-metadata");
      d = {};
      for (e = 0; e < c.length; e++)
        d[c[e].getAttribute("data-path")] = {
          wn: c[e].getAttribute("data-home_url"),
          name: c[e].getAttribute("data-name")
        };
      this.uc && (d[this.uc.getAttribute("data-project-path")] = {
        name: this.uc.getAttribute("data-project-name")
      });
      this.Xh = d;
      this.Zh = b.projectPath;
      this.sc = null;
      this.Td = a;
      this.uc = document.querySelector("#search_project");
      this.xg = x("devsite.devsite.tenantSite");
      this.vc = null;
      bq(this, 2);
      bq(this, 1);
      bq(this, 3);
      "devsite" == this.xg && bq(this, 1, "cloud");
      this.sc = T(Wp);
      N(this.sc, !1);
      L(this.Td, "keyup", this.Lj.bind(this));
      L(this.Td, "keypress", this.Mj.bind(this));
      L(this.sc, "click", this.Ij.bind(this))
    };
    A("devsite.searchSuggest.SuggestInput", cq);
    cq.prototype.zf = function(a) {
      a.append ? a.append(this.sc) : a.appendChild(this.sc)
    }
    ;
    cq.prototype.attachTo = cq.prototype.zf;
    cq.prototype.Mj = function(a) {
      if ((13 == a.keyCode || 3 == a.keyCode) && this.Td.value.trim()) {
        var b = vk(this.vc);
        if (b || !this.nh)
          a.preventDefault(),
          a.stopPropagation();
        b && b.W().querySelector("a").click()
      }
    }
    ;
    var bq = function(a, b, c) {
      var d = c || a.xg;
      c = {
        hl: Z.locale || "en"
      };
      if (2 == b || 3 == b) {
        if (!a.Zh)
          return;
        c.p = a.Zh
      }
      c.s = d;
      c.c = b;
      a = a.Jj.bind(a, b, d);
      pi("/get-suggestions/", a, "GET", c)
    };
    cq.prototype.Jj = function(a, b, c) {
      if (c && Jh(c.target)) {
        c = Mh(c.target);
        if (1 == a)
          c = c[""];
        else {
          var d = [];
          for (f in c)
            for (var e = 0; e < c[f].length; e++)
              c[f][e].Xb = f,
              d.push(c[f][e]);
          c = d
        }
        if (b != this.xg) {
          var f = c || [];
          for (d = 0; d < f.length; d++)
            e = f[d],
            e.p && -1 == e.p.indexOf("//") && (e.p = $p[b] + e.p)
        }
        b = c || [];
        for (f = 0; f < b.length; f++)
          d = b[f],
          d.p = ni(d.p);
        aq[a] = (aq[a] || []).concat(c)
      }
    }
    ;
    cq.prototype.Lj = function(a) {
      if (37 <= a.keyCode && 40 >= a.keyCode)
        this.vc.nb(a);
      else if (27 != a.keyCode)
        a: {
          a = this.Td.value.trim();
          if (a == this.Zf) {
            var b = document.getElementById("search_project");
            if (b == this.uc)
              break a;
            this.uc = b
          }
          this.Zf = a;
          this.sc.innerHTML = "";
          var c = !1;
          b = [];
          if (this.uc)
            for (var d in Zp) {
              var e = Zp[d]
                , f = aq[e];
              f && (b[e] = f)
            }
          else
            b[1] = aq[1];
          this.vc = new Lk;
          if (a && b.length) {
            d = a.toLowerCase().split(/[ |.,/():]+/);
            d.push(a.toLowerCase());
            if (this.uc && (e = (b[2] || []).concat(b[3] || []),
            e.length)) {
              f = this.uc.getAttribute("data-project-path");
              var g = 0
                , k = dq(this, e, d)
                , l = k.slice(0, 5)
                , n = [];
              c = {};
              e = [];
              k = k.slice(5);
              for (var q = 0; q < k.length; q++) {
                var t = k[q];
                f == t.Xb ? 5 > n.length && n.push(t) : t.Xb in c ? 5 > c[t.Xb].length && c[t.Xb].push(t) : 4 > ++g && (c[t.Xb] = [t],
                e.push(t.Xb))
              }
              for (q = 0; q < l.length; q++)
                l[q].Xb != f && g++;
              g || (n = l.concat(n),
              l = []);
              f = !1;
              l.length && (eq(this, "Top Results", l, d, "Top ", !0),
              f = !0);
              n.length && (eq(this, this.Bh.combined, n, d, "Current "),
              f = !0);
              for (g = 0; g < e.length; g++)
                f = e[g],
                eq(this, fq(this, f), c[f], d, "Child ", !1, "project"),
                f = !0;
              c = f
            }
            b = dq(this, b[1], d);
            b = b.slice(0, 10);
            c = eq(this, this.Bh[1], b, d) || c
          }
          a && !c && this.vc.yc(gq(this), !0);
          this.nh && (b = new Hk(T(Xp, {
            label: 'See all results for "' + (a + '"')
          })),
          jk(b, "devsite-suggest-footer"),
          this.vc.yc(b, !0));
          this.vc.ub(this.sc);
          N(this.sc, c || a)
        }
    }
    ;
    cq.prototype.Ij = function(a) {
      if ("A" == a.target.nodeName) {
        var b = a.target.classList
          , c = a.target.getAttribute("data-section") || "";
        b.contains("devsite-suggest-all-results") || b.contains("suggest-all-results") ? hq(this) : Zi("Site-Wide Custom Events", c + Z.Fi, this.Zf, void 0, function() {
          var b = a.target.href;
          b = ni(b);
          window.location = b
        });
        a.preventDefault()
      }
    }
    ;
    var hq = function(a) {
      (a = zd(a.Td, "FORM")) && a.submit()
    }
      , fq = function(a, b) {
      return b in a.Xh ? a.Xh[b].name : ""
    }
      , gq = function(a) {
      a = new Ck(a.Ii);
      jk(a, "devsite-suggest-item");
      return a
    }
      , eq = function(a, b, c, d, e, f, g) {
      if (c && c.length)
        for (b = new Ck(b),
        jk(b, "devsite-suggest-" + ("project" == g ? "project" : "category")),
        a.vc.yc(b, !0),
        g = 0; g < c.length; g++) {
          b = c[g];
          for (var k = d, l = f ? fq(a, c[g].Xb) : "", n = b.t, q = n.toLowerCase(), t = [], v = 0; v < k.length; v++) {
            var ca = q.indexOf(k[v]), w;
            if (-1 < ca)
              for (w = ca + k[v].length; ca < w; ca++)
                t[ca] = !0
          }
          k = [];
          q = "";
          w = !0;
          for (v = 0; v < n.length; v++)
            t[v] != w ? (w = t[v],
            k.push(q),
            q = n[v]) : q += n[v];
          k.push(q);
          b = T(Yp, {
            text: k,
            link: b.p,
            bi: b.r,
            Yh: l
          });
          b = new Hk(b);
          jk(b, "devsite-suggest-item");
          e && b.hc().setAttribute("data-section", e);
          a.vc.yc(b, !0)
        }
      return !!c.length
    }
      , dq = function(a, b, c) {
      for (var d = 0; d < b.length; d++)
        for (var e = b[d], f = e.k, g = e.t, k = (e.r || "").toLowerCase(), l = fq(a, e.Xb), n = e.qa = 0; n < c.length; n++) {
          var q = c[n]
            , t = !1
            , v = g.toLowerCase().indexOf(q);
          -1 < v && (t = !0,
          e.qa += 1,
          e.qa += 1 / (v + 1),
          e.qa += q.length / g.length);
          -1 < k.indexOf(q) && (e.qa += .25,
          t = !0);
          for (v = 0; v < f.length; v++)
            -1 < f[v].toLowerCase().indexOf(q) && (e.qa += .1,
            f[v].toLowerCase() == q && (e.qa += .15),
            t = !0);
          -1 < l.indexOf(q) && (e.qa += .01);
          t || (e.qa -= 1E3)
        }
      return b.filter(a.uj).sort(a.hj)
    };
    cq.prototype.hj = function(a, b) {
      return b.qa - a.qa
    }
    ;
    cq.prototype.uj = function(a) {
      return 0 < a.qa
    }
    ;
    var iq = /^[\w+/]+[=]{0,2}$/;
    var jq = function(a, b, c) {
      a.timeOfStartCall = (new Date).getTime();
      var d = c || m, e = d.document, f;
      a: {
        if ((f = (d || m).document.querySelector("script[nonce]")) && (f = f.nonce || f.getAttribute("nonce")) && iq.test(f))
          break a;
        f = void 0
      }
      f && (a.nonce = f);
      if ("help" == a.flow) {
        var g = x("document.location.href", d);
        !a.helpCenterContext && g && (a.helpCenterContext = g.substring(0, 1200));
        g = !0;
        if (b && JSON && JSON.stringify) {
          var k = JSON.stringify(b);
          (g = 1200 >= k.length) && (a.psdJson = k)
        }
        g || (b = {
          invalidPsd: !0
        })
      }
      b = [a, b, c];
      d.GOOGLE_FEEDBACK_START_ARGUMENTS = b;
      c = a.serverUri || "//www.google.com/tools/feedback";
      if (g = d.GOOGLE_FEEDBACK_START)
        g.apply(d, b);
      else {
        d = c + "/load.js?";
        for (var l in a)
          b = a[l],
          null != b && !ia(b) && (d += encodeURIComponent(l) + "=" + encodeURIComponent(b) + "&");
        a = e.createElement("script");
        f && a.setAttribute("nonce", f);
        a.src = d;
        e.body.appendChild(a)
      }
    };
    A("userfeedback.api.startFeedback", jq);
    var kq = function(a, b, c, d, e, f, g) {
      this.Ve = a;
      this.Kf = d || null;
      this.lh = e || null;
      this.dj = f || null;
      this.mh = g || null;
      this.kk = c;
      this.xd = [];
      this.Tg = [];
      var k = this.Fk.bind(this);
      d || (k = this.ti.bind(this));
      E(b, function(a) {
        this.Tg.push(L(a, "click", k))
      }, this)
    };
    A("devsite.feedback.Widget", kq);
    h = kq.prototype;
    h.Ua = function() {
      E(this.Tg, function(a) {
        me(a)
      })
    }
    ;
    h.Oj = function(a) {
      27 == a.keyCode && this.Df()
    }
    ;
    h.Fj = function(a) {
      a.preventDefault();
      this.Df();
      this.ti(a, R(a.currentTarget, "type"))
    }
    ;
    h.Df = function() {
      this.Kf.style.display = "none";
      this.lh.style.display = "none";
      E(this.xd, function(a) {
        me(a)
      });
      this.xd = []
    }
    ;
    h.Fk = function() {
      this.Kf.style.display = "block";
      this.xd.push(L(this.dj, "click", this.Df, !1, this));
      for (var a = 0; a < this.mh.length; a++)
        this.xd.push(L(this.mh[a], "click", this.Fj, !1, this));
      this.lh.style.display = "block";
      this.xd.push(L(document, "keydown", this.Oj, !1, this))
    }
    ;
    h.ti = function(a, b) {
      var c = this.Ve.product_id;
      if (c) {
        var d = {
          version: this.Ve.version,
          context: this.Ve.context
        };
        r(b) && !Ka(b || "") && (d.type = b);
        b = {
          productId: c,
          locale: this.kk,
          bucket: this.Ve.bucket
        };
        this.Kf && (b.uiExtension = new lq(d));
        jq(b, d);
        a.preventDefault()
      }
    }
    ;
    var lq = function(a) {
      this.Wg = [];
      this.Wh = a
    };
    lq.prototype.Mk = function(a) {
      if ("documentation" == this.Wh.type) {
        var b = T(mq);
        E(b.querySelectorAll(".devsite-feedback-checkbox"), function(a) {
          this.Wg.push(a)
        }, this);
        a.appendChild(b)
      }
    }
    ;
    lq.prototype.renderSurveyFields = lq.prototype.Mk;
    lq.prototype.Xj = function() {
      var a = [];
      E(this.Wg, function(b) {
        b.checked && a.push(b.value)
      });
      this.Wh["devsite-docerror-type"] = a
    }
    ;
    lq.prototype.handleSubmit = lq.prototype.Xj;
    var mq = function() {
      return V('<div style="padding-bottom: 10px;"><p>How can we improve this page?</p><p><label><input type="checkbox" name="devsite-docerror-type" value="inaccurate" style="margin-right: 15px;" class="devsite-feedback-checkbox">It\'s inaccurate</label></p><p><label><input type="checkbox" name="devsite-docerror-type" value="incomplete" style="margin-right: 15px;" class="devsite-feedback-checkbox">It doesn\'t have what I need.</label></p><p><label><input type="checkbox" name="devsite-docerror-type" value="typo" style="margin-right: 15px;" class="devsite-feedback-checkbox">There\'s a typo, broken link, or layout problem.</label></p><p><label><input type="checkbox" name="devsite-docerror-type" value="other" style="margin-right: 15px;" class="devsite-feedback-checkbox">Other (use text area above)</label></p></div>')
    };
    mq.g = "devsite.feedbackRenderer.checkboxes";
    var nq = {
      fetchUrl: "",
      navSelector: ".paging-nav",
      containerSelector: ".paging-content",
      entryElement: "li",
      pageHashKey: "p",
      renderFunction: function(a) {
        var b = document.createElement("div");
        b.innerHTML = a;
        return b
      },
      postRenderFunction: function() {},
      onComplete: function() {}
    }
      , oq = function(a) {
      function b(a, b) {
        for (var c in b)
          b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
      }
      a = b(b({}, nq), a);
      this.Hb = document.querySelector(a.navSelector);
      this.Pb = document.querySelector(a.containerSelector);
      this.tj = a.fetchUrl;
      this.oj = a.entryElement;
      this.Te = a.pageHashKey;
      this.Lk = a.renderFunction;
      this.Vh = a.postRenderFunction;
      this.zk = a.onComplete;
      this.ie = {};
      if (a = hi.search)
        this.Jk = a.substr(1)
    };
    A("devsite.pagination.Pager", oq);
    var pq = function(a) {
      return (a = a.querySelector(".paging-cursor")) ? a.dataset.cursor || "" : ""
    };
    oq.prototype.$j = function() {
      this.Ah = new RegExp("(.*[#|&])" + this.Te + "=(\\d+)(.*)$");
      var a = this;
      E(this.Hb.querySelectorAll("button"), function(a) {
        ne(a)
      });
      L(this.Hb.querySelector("button.next"), "click", function() {
        a.next()
      });
      L(this.Hb.querySelector("button.previous"), "click", function() {
        qq(a, a.Nc - 1)
      });
      L(this.Hb.querySelector("button.first"), "click", function() {
        a.first()
      });
      var b = hi.hash ? hi.hash.match(this.Ah) : !1;
      b = b ? parseInt(b[2], 10) : 1;
      if (this.Pb.innerHTML.trim()) {
        this.Nc = 1;
        this.ie[1] = this.Pb.childNodes;
        this.Vh(this.Pb);
        var c = pq(this.Pb);
        1 < b && c && rq(this, 2, b, c)
      } else
        rq(this, 1, b, "")
    }
    ;
    oq.prototype.initPager = oq.prototype.$j;
    var rq = function(a, b, c, d, e) {
      e = e ? e : null;
      var f = {};
      fh(a.Jk, function(a, b) {
        f[a] = b
      });
      d && (f.c = d);
      pi(a.tj, z(a.Vj, a, e, b, c), "GET", f)
    };
    oq.prototype.Vj = function(a, b, c, d) {
      d = d.target;
      if (200 == Ih(d)) {
        d = this.Lk(Lh(d));
        var e = pq(d);
        a && a(d);
        this.ie[b] = d.childNodes;
        b != c && e ? rq(this, b + 1, c, e, a) : (e || this.zk(this.Pb),
        a || qq(this, b))
      }
    }
    ;
    oq.prototype.next = function() {
      var a = this.Nc + 1;
      this.ie[a] || rq(this, a, a, pq(this.Pb));
      qq(this, a)
    }
    ;
    oq.prototype.first = function() {
      qq(this, 1)
    }
    ;
    var sq = function(a, b) {
      E(oe(a), function(a) {
        L(b, "click", a.listener)
      });
      for (var c = 0; c < a.childNodes.length; c++)
        sq(a.childNodes[c], b.childNodes[c])
    }
      , qq = function(a, b) {
      var c = a.ie[b];
      if (c) {
        for (var d = a.Pb; d.firstChild; )
          d.removeChild(d.firstChild);
        E(c, function(a) {
          var b = d.appendChild(a.cloneNode(!0));
          sq(a, b)
        });
        a.Nc = b;
        tq(a);
        uq(a);
        vq(a, a.Nc);
        a.Vh(d)
      }
    }
      , vq = function(a, b) {
      if (hi.hash) {
        var c = a.Ah.exec(hi.hash);
        hi.hash = c ? c[1] + a.Te + "=" + b + c[3] : hi.hash + "&" + a.Te + "=" + b
      } else
        hi.hash = "#" + a.Te + "=" + b
    }
      , tq = function(a) {
      var b = a.Hb.dataset.itemsperpage
        , c = a.Pb.querySelectorAll(a.oj).length;
      a.Hb.querySelector(".paging-range .first").innerHTML = (a.Nc - 1) * b + 1;
      a.Hb.querySelector(".paging-range .last").innerHTML = (a.Nc - 1) * b + c
    }
      , uq = function(a) {
      var b = 1 == a.Nc;
      a.Hb.querySelector("button.previous").disabled = b;
      a.Hb.querySelector("button.first").disabled = b;
      a.Hb.querySelector("button.next").disabled = !pq(a.Pb)
    };
    var wq = function(a, b) {
      M.call(this);
      var a = a || document.createElement("input"), c = document.createElement("div");
      c.className = "devsite-popout devsite-popout-closed";
      a.appendChild(c);
      this.mg = c;
      this.vi = b || [];
      this.Bf = {};
      L(document, ["click", "keyup"], this.Sk.bind(this))
    };
    B(wq, M);
    A("devsite.Popout", wq);
    wq.prototype.Sk = function(a) {
      for (var b, c = 0; c < this.vi.length; c++)
        b = b || !!Ad(a.target, this.vi[c]);
      b = b && 27 != a.keyCode;
      hf(this.mg, "devsite-popout-closed", !b);
      for (var d in this.Bf)
        hf(this.Bf[d], d, b)
    }
    ;
    wq.prototype.clear = function() {
      ld(this.mg)
    }
    ;
    wq.prototype.append = function(a) {
      this.mg.appendChild(a)
    }
    ;
    wq.prototype.Si = function(a, b) {
      a && (this.Bf[b] = a)
    }
    ;
    wq.prototype.addClassWhenVisible = wq.prototype.Si;
    var xq;
    A("devsite.products.init", function() {
      yq.solutions = document.querySelectorAll(".devsite-products-highlighted-row");
      yq.popular = document.querySelectorAll(".devsite-popular-products");
      yq.alphabet = document.querySelectorAll(".devsite-products-alphabet, .devsite-products-alphabet-row-heading, .devsite-products-alphabet-letter");
      Yl(zq);
      zq();
      Aq();
      Bq();
      window.onpopstate = Cq
    });
    var yq = {}
      , Dq = !1
      , Eq = null
      , Fq = null
      , zq = function() {
      var a = 720 > window.innerWidth;
      a != Dq && (Dq = a) && Cq();
      Eq && Fq && Gq(Fq, Eq)
    }
      , Aq = function() {
      var a = L;
      P(".devsite-doc-set-nav-tab", function(b) {
        a(b, "click", Cq)
      })
    }
      , Bq = function() {
      var a = L;
      P(".devsite-products-highlighted-product-link", function(b) {
        a(b, "click", Hq.bind(null, b))
      });
      P(".devsite-products-highlighted-close", function(b) {
        a(b, "click", Hq.bind(null, null))
      })
    }
      , Hq = function(a, b) {
      a && a.parentNode == Fq ? Iq(null, b) : Iq(a, b)
    }
      , Iq = function(a, b) {
      Eq && (Eq.style.display = "none",
      Fq.style.marginBottom = "",
      Eq = Fq = null,
      xq.blur(),
      Jq(!1));
      if (a) {
        var c = a.parentNode
          , d = c.querySelector(".devsite-products-highlighted-product-popout");
        d && c && (d.style.display = "block",
        Gq(c, d),
        c.offsetTop == document.querySelector(".devsite-products-highlighted-product:last-of-type").offsetTop && Jq(!0),
        Eq = d,
        Fq = c,
        xq = a)
      }
      b.preventDefault()
    }
      , Gq = function(a, b) {
      a.style.marginBottom = 40 + b.scrollHeight + "px";
      b.querySelector(".devsite-products-highlighted-down-arrow").style.left = a.offsetLeft + a.offsetWidth / 2 - 12 + 10024 + "px"
    }
      , Jq = function(a) {
      document.querySelector(".devsite-products-highlighted-row-inner").style.paddingBottom = 1 == a ? 0 : ""
    }
      , Cq = function() {
      var a = window.location.hash || "";
      (a = a.substring(1, a.length)) ? Kq(a) : Kq("solutions")
    }
      , Kq = function(a) {
      a in yq || (a = "solutions");
      var b = document.querySelector(".devsite-products"), c;
      for (c in yq) {
        hf(b, "devsite-products-active-section-" + c, c == a);
        var d = document.querySelector('.devsite-doc-set-nav-tab[href="#' + c + '"]');
        d && hf(d, "devsite-doc-set-nav-active", c == a)
      }
    };
    var Mq = function(a) {
      a = Ad(a.target, "devsite-multiple-answer");
      var b = a.querySelector(".devsite-multiple-choice-inline-mark");
      if (!R(a, "previousClick")) {
        b && (a.hasAttribute("data-correct") ? b.classList.add("compare-yes") : b.classList.add("compare-no"),
        b.classList.remove("compare-blank"));
        Qi(a, "previousClick", "true");
        b = a.hasAttribute("data-correct");
        var c = 0
          , d = 0;
        b && (c = R(a.parentNode, "numCorrect"),
        d = parseInt(R(a.parentNode, "numCorrectFound"), 10) + 1,
        Qi(a.parentNode, "numCorrectFound", d));
        var e = a.querySelector(".expand-control");
        e = p(e.nextElementSibling) ? e.nextElementSibling : nd(e.nextSibling);
        b = T(Lq, {
          ij: b,
          uk: d,
          Ph: c
        });
        e.appendChild(b);
        e.classList.add("devsite-multiple-choice-explanation");
        b = a.parentNode;
        d = b.childElementCount - 1;
        c = (c = R(b, "uniqueAnswerClickCount")) ? parseInt(c, 10) + 1 : 1;
        e = parseInt(R(a, "presentationOrder"), 10);
        c != e + 1 && Qi(b, "selectedOutOfOrder", !0);
        1 == c ? (Zi("MCE First Selection", b.firstElementChild.innerHTML, a.querySelector(".expand-control").innerText, a.hasAttribute("data-correct") ? 1 : 0),
        Qi(b, "firstAnswerClickTime", Date.now())) : c == d && (a = R(b, "firstAnswerClickTime"),
        a = parseInt(a, 10),
        Zi("MCE All Selected", R(b, "selectedOutOfOrder") ? "Selected out of order" : "Selected sequentially", b.firstElementChild.innerHTML, Math.floor((Date.now() - a) / 1E3)));
        Qi(b, "uniqueAnswerClickCount", c)
      }
    };
    A("devsite.multipleChoice.init", function() {
      yi(".devsite-multiple-choice", function(a) {
        var b = 0
          , c = !a.hasAttribute("data-preserve-order");
        od(a).classList.add("devsite-multiple-choice-question");
        for (var d = [], e = 1; e < a.children.length; e++) {
          var f = a.children[e];
          f.hasAttribute("data-correct") && b++;
          d.push(f)
        }
        if (c)
          for (e = Math.random,
          f = d.length - 1; 0 < f; f--) {
            var g = Math.floor(e() * (f + 1))
              , k = d[f];
            d[f] = d[g];
            d[g] = k
          }
        g = x("jQuery.expandable.fromDomElement");
        for (e = 0; e < d.length; e++) {
          f = d[e];
          f.classList.add("devsite-multiple-answer");
          f.classList.add("expandable");
          k = od(f);
          k.classList.add("expand-control");
          var l = T(Nq, {});
          k.insertBefore(l, k.childNodes[0] || null);
          g(f);
          L(f.querySelector(".expand-control"), "click", Mq);
          c && a.appendChild(f);
          Qi(f, "presentationOrder", e)
        }
        Qi(a, "numCorrect", b);
        Qi(a, "numCorrectFound", 0)
      })
    });
    var Lq = function(a) {
      var b = '<div class="devsite-multiple-choice-explanation-correctness">';
      a.ij ? 1 == a.Ph ? b += "Correct answer." : (a = W(a.uk) + (" of " + (W(a.Ph) + " correct answers.")),
      b += a) : b += "Try again.";
      return V(b + "</div>")
    };
    Lq.g = "devsite.multipleChoiceRenderer.explanationCorrectness";
    var Nq = function() {
      return V('<span class="devsite-multiple-choice-inline-mark compare-blank"></span>')
    };
    Nq.g = "devsite.multipleChoiceRenderer.textCorrectness";
    var Vp = Vp || window.location;
    A("devsite.navigatingRadio.init", function() {
      for (var a = ad("devsite-navigating-radio"), b = 0; b < a.length; b++)
        if (a[b].name && a[b].name.length && a[b].value && a[b].value.length) {
          var c = oh(Vp.href, a[b].name);
          a[b].value == c || !c && a[b].hasAttribute("data-is-default") ? a[b].checked = !0 : L(a[b], "click", function(a) {
            nh(Vp.href, a.target.name) ? xi(rh(Vp.href, a.target.name, a.target.value)) : xi(kh(Vp.href, a.target.name, a.target.value))
          })
        }
    });
    A("devsite.navigation.init", function() {
      var a = Oq = document.querySelector(".devsite-section-nav");
      if (a) {
        var b = a.querySelector(".devsite-nav-active");
        if (b) {
          for (var c = a.offsetHeight, d = b.offsetTop; b != Oq && null !== b.offsetParent; )
            b = b.offsetParent,
            d += b.offsetTop;
          b = d;
          b > c && (a.scrollTop = b - c / 3)
        }
      }
    });
    var Oq = null;
    var Pq = function() {
      return Ok("Unusable documentation")
    };
    Pq.g = "devsite.ratingsRenderer.unusableDocumentationMsg";
    var Qq = function() {
      return Ok("Poor documentation")
    };
    Qq.g = "devsite.ratingsRenderer.poorDocumentationMsg";
    var Rq = function() {
      return Ok("OK documentation")
    };
    Rq.g = "devsite.ratingsRenderer.okDocumentationMsg";
    var Sq = function() {
      return Ok("Good documentation")
    };
    Sq.g = "devsite.ratingsRenderer.goodDocumentationMsg";
    var Tq = function() {
      return Ok("Excellent documentation")
    };
    Tq.g = "devsite.ratingsRenderer.excellentDocumentationMsg";
    var Uq = function(a) {
      a = 'You rated "' + ("" + Y(r(a.md) || a.md instanceof S, "rating_description", a.md, "!goog.soy.data.SanitizedContent|string") + '"');
      return Ok("" + a)
    };
    Uq.g = "devsite.ratingsRenderer.youRatedMsg";
    var Vq = function(a) {
      a = "" + Y(r(a.md) || a.md instanceof S, "rating_description", a.md, "!goog.soy.data.SanitizedContent|string");
      return Ok("" + a)
    };
    Vq.g = "devsite.ratingsRenderer.ratingDescriptionMsg";
    var Wq = function(a) {
      var b = Y(r(a.count) || a.count instanceof S, "count", a.count, "!goog.soy.data.SanitizedContent|string");
      a = Y(r(a.qa) || a.qa instanceof S, "score", a.qa, "!goog.soy.data.SanitizedContent|string");
      return V('<div class="devsite-rating-internal">Internal:&nbsp;<span class="devsite-rating-stats">Count: ' + W(b) + ", Average: " + W(a) + "</span></div>")
    };
    Wq.g = "devsite.ratingsRenderer.internalRatingStats";
    var Xq = {}
      , Yq = 0
      , Zq = []
      , $q = null;
    A("devsite.ratings.init", function(a, b, c) {
      $q = new ml;
      Xq = {
        1: ol($q, Pq),
        2: ol($q, Qq),
        3: ol($q, Rq),
        4: ol($q, Sq),
        5: ol($q, Tq)
      };
      Zq = a;
      Yq = c || 0;
      ar(Yq, !1);
      br();
      b && pi("/rating/getstats/", cr, "GET", {
        page_url: document.querySelector('link[rel="canonical"]').href
      })
    });
    var dr = function(a) {
      var b = {}
        , c = {};
      window.ga && window.ga(function() {
        var a = window.ga.getAll();
        if (0 < a.length) {
          b.cid = a[0].get("clientId");
          c.tracking_id = [];
          for (var e = 0; e < a.length; ++e)
            c.tracking_id.push(a[e].get("trackingId"))
        }
      });
      a = {
        rating: a,
        page_url: document.querySelector('link[rel="canonical"]').href
      };
      Ca(a, b, c);
      pi("/rating/submit/", function() {}, "POST", a)
    }
      , br = function() {
      P(".devsite-rating-star", function(a) {
        var b = Number(R(a, "ratingVal"));
        L(a, "mouseover", er.bind(null, b));
        L(a, "mouseout", fr);
        L(a, "click", gr.bind(null, b))
      })
    }
      , er = function(a) {
      ar(a, !0)
    }
      , fr = function() {
      ar(Yq || 0, !1)
    }
      , gr = function(a) {
      a != Yq && (Yq = a,
      ar(a, !0),
      dr(a),
      4 > a && Zq && 0 < Zq.length && Zq[0].click())
    }
      , ar = function(a, b) {
      P(".devsite-rating-star", function(b) {
        var c = Number(R(b, "ratingVal")) <= a;
        hf(b, "devsite-rating-star-full", c);
        hf(b, "devsite-rating-star-outline", !c)
      });
      if (b) {
        var c = Vq;
        a == Yq && (c = Uq);
        P(".devsite-rating-description", function(b) {
          b.textContent = ol($q, c, {
            md: Xq["" + a]
          })
        })
      } else
        P(".devsite-rating-description", function(a) {
          a.innerHTML = ""
        })
    }
      , cr = function(a) {
      a = Mh(a.target);
      if ("success" == a.status) {
        var b = document.querySelector(".devsite-rating-stats");
        b.parentElement.removeChild(b);
        a = T(Wq, {
          count: a.count,
          qa: a.score
        });
        document.querySelector(".devsite-rating-container").appendChild(a)
      }
    };
    var hr = function(a) {
      a = Y(r(a.Na) || a.Na instanceof S, "classname", a.Na, "!goog.soy.data.SanitizedContent|string");
      return V('<div class="' + X(a) + '"></div>')
    };
    hr.g = "devsite.rabbitholeRenderer.divEl";
    var ir = function(a) {
      var b = Y(r(a.Na) || a.Na instanceof S, "classname", a.Na, "!goog.soy.data.SanitizedContent|string");
      a = Y(r(a.text) || a.text instanceof S, "text", a.text, "!goog.soy.data.SanitizedContent|string");
      return V('<div class="' + X(b) + '">' + W(a) + "</div>")
    };
    ir.g = "devsite.rabbitholeRenderer.divElWithText";
    var jr = function(a) {
      var b = Y(r(a.Na) || a.Na instanceof S, "classname", a.Na, "!goog.soy.data.SanitizedContent|string");
      a = Y(r(a.text) || a.text instanceof S, "text", a.text, "!goog.soy.data.SanitizedContent|string");
      return V('<span class="' + X(b) + '">' + W(a) + "</span>")
    };
    jr.g = "devsite.rabbitholeRenderer.spanEl";
    var kr = new wl("","rh");
    A("devsite.rabbithole.init", function(a) {
      if (1E3 <= window.innerWidth && kr.Gb()) {
        var b = T(hr, {
          Na: "rh-trigger"
        });
        document.body.appendChild(b);
        ee(b, "click", function() {
          b.style.display = "none";
          lr(a)
        });
        window.onload = function() {
          ee(window, "scroll", function() {
            b.classList.add("rh-visible");
            Zi("Rabbit-Hole Element", "scroll", "Rabbit-Hole Init")
          });
          aj(b, "Rabbit-Hole Element", "click", "Rabbit-Hole Trigger")
        }
      }
    });
    var lr = function(a) {
      var b = T(hr, {
        Na: "devsite-challenge-wrapper"
      })
        , c = T(ir, {
        Na: "devsite-challenge",
        text: "You're speaking our language. Up for a challenge?"
      });
      b.appendChild(c);
      var d = T(jr, {
        Na: "devsite-challenge-play devsite-challenge-option",
        text: "I want to play"
      });
      L(d, "click", function() {
        window.open(a)
      });
      c.appendChild(d);
      var e = T(jr, {
        Na: "devsite-challenge-never devsite-challenge-option",
        text: "Don't show me this again"
      });
      L(e, "click", function() {
        xl("rh")
      });
      c.appendChild(e);
      vl(b);
      var f = mr();
      f && (f.classList.add("devsite-toast-hidden"),
      setTimeout(function() {
        f.classList.add("rh-active")
      }, 100),
      aj(d, "Rabbit-Hole Element", "click", "Rabbit-Hole Play"),
      aj(e, "Rabbit-Hole Element", "click", "Rabbit-Hole Decline"),
      aj(document.querySelector(".devsite-toast-dismiss"), "Rabbit-Hole Element", "click", "Rabbit-Hole Close"))
    };
    A("devsite.rabbithole.triggerRhToast", lr);
    var mr = function() {
      for (var a = document.querySelector(".devsite-challenge-wrapper"); a && a != document.body; ) {
        if (a.classList.contains("devsite-toast"))
          return a;
        a = a.parentElement
      }
      return null
    };
    var nr = function(a) {
      a = "Attaching more than " + ("" + Y(u(a.Lh), "maximumMbAllowed", a.Lh, "number") + " MB of files is not supported.");
      return Ok("" + a)
    };
    nr.g = "devsite.supportFormRenderer.attachmentsTooLargeMsg";
    var or = function() {
      return Ok("Error submitting request. Please try again later.")
    };
    or.g = "devsite.supportFormRenderer.serverErrorMsg";
    var pr = function() {
      return Ok("Please correct all invalid inputs, highlighted in red.")
    };
    pr.g = "devsite.supportFormRenderer.invalidFieldsMsg";
    var qr = function() {
      return Ok("Please fill out all required fields, highlighted in red.")
    };
    qr.g = "devsite.supportFormRenderer.missingFieldsMsg";
    var rr = function() {
      return Ok("Support request sent.")
    };
    rr.g = "devsite.supportFormRenderer.requestSentMsg";
    var sr, tr, ur, vr, wr;
    A("devsite.supportForm.init", function(a, b, c, d, e) {
      wr = new ml;
      tr = b;
      vr = c;
      sr = e;
      ur = a;
      L(ur, "click", xr);
      L(d, "click", yr);
      L(sr, "change", zr)
    });
    var xr = function() {
      ur.disabled = !0;
      if (sr && sr.files.length)
        if (zr())
          ur.disabled = !1;
        else {
          var a = Ar(!1);
          a.append("validate", !0);
          ri(a)
        }
      else
        ri(Ar(!0))
    }
      , yr = function() {
      tr.reset();
      Br()
    }
      , zr = function() {
      var a = sr;
      if (!a)
        return !1;
      for (var b = 26214400, c = 0; c < a.files.length; c++)
        if (b -= a.files[c].size,
        0 > b)
          return sl(ol(wr, nr, {
            Lh: 25
          })),
          a.value = "",
          !0;
      return !1
    }
      , Ar = function(a) {
      for (var b = new FormData, c = 0; c < tr.elements.length; c++) {
        var d = tr.elements[c];
        "attachment" == d.name ? a && E(d.files, function(a) {
          b.append(d.name, a)
        }) : 0 <= ["checkbox", "radio"].indexOf(d.type) ? d.checked && b.append(d.name, d.value) : d.name && d.value && b.append(d.name, d.value)
      }
      return b
    }
      , Br = function() {
      P(".devsite-form-error", function(a) {
        a.classList.remove("devsite-form-error")
      })
    }
      , qi = function(a) {
      a = a.target;
      Br();
      if (200 == Ih(a)) {
        a = Mh(a);
        if (a.validated) {
          ri(Ar(!0));
          return
        }
        if ("success" == a.status) {
          yr();
          tr.classList.add("devsite-support-form-hidden");
          vr.classList.remove("devsite-support-form-hidden");
          sl(ol(wr, rr));
          ur.disabled = !1;
          return
        }
        if (a.missing_fields) {
          Cr(a.missing_fields, qr);
          ur.disabled = !1;
          return
        }
        if (a.invalid_fields) {
          Cr(a.invalid_fields, pr);
          ur.disabled = !1;
          return
        }
      }
      ur.disabled = !1;
      sl(ol(wr, or))
    }
      , Cr = function(a, b) {
      E(a, function(a) {
        document.querySelector("label[for=" + a + "]").classList.add("devsite-form-error")
      });
      sl(ol(wr, b))
    };
    var ya = {}
      , Dr = null
      , Er = function(a) {
      a = ma(a);
      delete ya[a];
      za() && Dr && Dr.stop()
    }
      , Gr = function() {
      Dr || (Dr = new af(function() {
        Fr()
      }
      ,20));
      var a = Dr;
      a.Gb() || a.start()
    }
      , Fr = function() {
      var a = qa();
      ta(ya, function(b) {
        Hr(b, a)
      });
      za() || Gr()
    };
    var Ir = function() {
      M.call(this);
      this.i = 0;
      this.endTime = this.startTime = null
    };
    B(Ir, M);
    Ir.prototype.lb = function(a) {
      this.dispatchEvent(a)
    }
    ;
    var Jr = function(a, b, c, d) {
      Ir.call(this);
      if (!y(a) || !y(b))
        throw Error("Start and end parameters must be arrays");
      if (a.length != b.length)
        throw Error("Start and end points must be the same length");
      this.Yd = a;
      this.nj = b;
      this.duration = c;
      this.Gg = d;
      this.coords = [];
      this.progress = 0;
      this.Yf = null
    };
    B(Jr, Ir);
    h = Jr.prototype;
    h.getDuration = function() {
      return this.duration
    }
    ;
    h.play = function(a) {
      if (a || 0 == this.i)
        this.progress = 0,
        this.coords = this.Yd;
      else if (1 == this.i)
        return !1;
      Er(this);
      this.startTime = a = qa();
      -1 == this.i && (this.startTime -= this.duration * this.progress);
      this.endTime = this.startTime + this.duration;
      this.Yf = this.startTime;
      this.progress || this.lb("begin");
      this.lb("play");
      -1 == this.i && this.lb("resume");
      this.i = 1;
      var b = ma(this);
      b in ya || (ya[b] = this);
      Gr();
      Hr(this, a);
      return !0
    }
    ;
    h.stop = function(a) {
      Er(this);
      this.i = 0;
      a && (this.progress = 1);
      Kr(this, this.progress);
      this.lb("stop");
      this.lb("end")
    }
    ;
    h.pause = function() {
      1 == this.i && (Er(this),
      this.i = -1,
      this.lb("pause"))
    }
    ;
    h.T = function() {
      0 == this.i || this.stop(!1);
      this.lb("destroy");
      Jr.o.T.call(this)
    }
    ;
    h.destroy = function() {
      this.Xa()
    }
    ;
    var Hr = function(a, b) {
      ib(a.startTime);
      ib(a.endTime);
      ib(a.Yf);
      b < a.startTime && (a.endTime = b + a.endTime - a.startTime,
      a.startTime = b);
      a.progress = (b - a.startTime) / (a.endTime - a.startTime);
      1 < a.progress && (a.progress = 1);
      a.Yf = b;
      Kr(a, a.progress);
      1 == a.progress ? (a.i = 0,
      Er(a),
      a.lb("finish"),
      a.lb("end")) : 1 == a.i && a.lb("animate")
    }
      , Kr = function(a, b) {
      ha(a.Gg) && (b = a.Gg(b));
      a.coords = Array(a.Yd.length);
      for (var c = 0; c < a.Yd.length; c++)
        a.coords[c] = (a.nj[c] - a.Yd[c]) * b + a.Yd[c]
    };
    Jr.prototype.lb = function(a) {
      this.dispatchEvent(new Lr(a,this))
    }
    ;
    var Lr = function(a, b) {
      Jd.call(this, a);
      this.coords = b.coords;
      this.x = b.coords[0];
      this.y = b.coords[1];
      this.z = b.coords[2];
      this.duration = b.duration;
      this.progress = b.progress;
      this.state = b.i
    };
    B(Lr, Jd);
    var Nr = function(a, b, c, d, e) {
      function f(a) {
        if (a) {
          a.tabIndex = 0;
          Cd(a, g.Wb());
          df(a, "goog-zippy-header");
          Mr(g, a);
          var b = g;
          a && (vj(b.Ia, a),
          b.Hh.w(b.Ia, "key", b.Bk))
        }
      }
      M.call(this);
      this.Ja = e || K();
      this.Sb = this.Ja.b(a) || null;
      this.Wc = this.Ja.b(d || null);
      this.Vc = (this.Oe = ha(b) ? b : null) || !b ? null : this.Ja.b(b);
      this.Ub = 1 == c;
      p(c) || this.Oe || (this.Wc ? this.Ub = "none" != this.Wc.style.display : this.Sb && (this.Ub = cf(this.Sb, "goog-zippy-expanded")));
      this.Hh = new kf(this);
      this.Ia = new wj;
      this.hg = new kf(this);
      var g = this;
      f(this.Sb);
      f(this.Wc);
      this.Ud(this.Ub)
    };
    B(Nr, M);
    h = Nr.prototype;
    h.Zc = !0;
    h.T = function() {
      Nr.o.T.call(this);
      Id(this.Hh);
      Id(this.Ia);
      Id(this.hg)
    }
    ;
    h.Wb = function() {
      return "tab"
    }
    ;
    h.W = function() {
      return this.Vc
    }
    ;
    h.expand = function() {
      this.Ud(!0)
    }
    ;
    h.collapse = function() {
      this.Ud(!1)
    }
    ;
    h.toggle = function() {
      this.Ud(!this.Ub)
    }
    ;
    h.Ud = function(a) {
      this.Vc ? N(this.Vc, a) : a && this.Oe && (this.Vc = this.Oe());
      this.Vc && df(this.Vc, "goog-zippy-content");
      this.Wc ? (N(this.Sb, !a),
      N(this.Wc, a)) : Or(this, a);
      this.Ub = a;
      this.dispatchEvent(new Pr("toggle",this))
    }
    ;
    var Or = function(a, b) {
      a.Sb && (hf(a.Sb, "goog-zippy-expanded", b),
      hf(a.Sb, "goog-zippy-collapsed", !b),
      Ed(a.Sb, "expanded", b))
    };
    Nr.prototype.tg = function(a) {
      this.Zc != a && ((this.Zc = a) ? (Mr(this, this.Sb),
      Mr(this, this.Wc)) : this.hg.nd())
    }
    ;
    var Mr = function(a, b) {
      b && a.hg.w(b, "click", a.Ak)
    };
    Nr.prototype.Bk = function(a) {
      if (13 == a.keyCode || 32 == a.keyCode)
        this.toggle(),
        this.dispatchEvent(new Pr("action",this)),
        a.preventDefault(),
        a.stopPropagation()
    }
    ;
    Nr.prototype.Ak = function() {
      this.toggle();
      this.dispatchEvent(new Pr("action",this))
    }
    ;
    var Pr = function(a, b) {
      Jd.call(this, a, b)
    };
    B(Pr, Jd);
    var Qr = function(a, b, c, d) {
      d = d || K();
      var e = d.S("DIV", {
        style: "overflow:hidden"
      });
      b = d.b(b);
      b.parentNode.replaceChild(e, b);
      e.appendChild(b);
      this.ue = e;
      this.hb = null;
      Nr.call(this, a, b, c, void 0, d);
      a = this.Ub;
      this.ue.style.display = a ? "" : "none";
      Or(this, a)
    };
    B(Qr, Nr);
    h = Qr.prototype;
    h.Xi = 500;
    h.Wi = function(a) {
      return 1 - Math.pow(1 - a, 3)
    }
    ;
    h.Ud = function(a) {
      if (this.Ub != a || this.hb) {
        "none" == this.ue.style.display && (this.ue.style.display = "");
        var b = this.W().offsetHeight;
        if (this.hb) {
          a = this.Ub;
          ne(this.hb);
          this.hb.stop(!1);
          var c = b - Math.abs(parseInt(this.W().style.marginTop, 10))
        } else
          c = a ? 0 : b;
        Or(this, a);
        this.hb = new Jr([0, c],[0, a ? b : 0],this.Xi,this.Wi);
        L(this.hb, ["begin", "animate", "end"], this.vk, !1, this);
        L(this.hb, "begin", z(this.wk, this, a));
        L(this.hb, "end", z(this.xk, this, a));
        this.hb.play(!1)
      }
    }
    ;
    h.vk = function(a) {
      var b = this.W();
      b.style.marginTop = a.y - b.offsetHeight + "px"
    }
    ;
    h.wk = function() {
      this.dispatchEvent(new Pr("a",this))
    }
    ;
    h.xk = function(a) {
      a && (this.W().style.marginTop = "0");
      ne(this.hb);
      this.Ub = a;
      this.hb = null;
      a || (this.ue.style.display = "none");
      this.dispatchEvent(new Pr("toggle",this));
      this.dispatchEvent(new Pr("b",this))
    }
    ;
    A("devsite.trackingQuestion.init", function() {
      yi(".devsite-tracking-question", Rr)
    });
    var Sr = function(a) {
      var b = a.target.parentNode.parentNode;
      a = a.target.parentNode;
      var c = new Qr(null,b.children[0],!0);
      c.collapse();
      for (var d = 1; d < b.children.length; d++)
        c = new Qr(null,b.children[d].children[0],!0),
        c.collapse();
      c = a.children[1];
      b.appendChild(c);
      ff(c, "devsite-hidden");
      c = new Qr(null,c,!1);
      c.expand();
      a = R(a, "itemName");
      c = R(b, "trackingDimension");
      b = R(b, "trackingGaid");
      null != a && null != c && null != b && ($i(c, a, b),
      Zi("Tracking Question", "click", a),
      b = {
        type: "tracking-widget",
        name: a,
        metadata: {}
      },
      (a = x("jQuery.cloudtrack.sendEvent")) && a(b))
    }
      , Rr = function(a) {
      df(a.children[0], "devsite-tracking-question-text");
      for (var b = 1; b < a.children.length; b++) {
        var c = a.children[b].children[0];
        df(c, "devsite-tracking-question-choice-button");
        df(a.children[b].children[1], "devsite-hidden");
        L(c, "click", Sr);
        Cd(c, "button")
      }
    };
    var Tr = function(a) {
      this.Dc = a;
      a = a.querySelectorAll(".devsite-nav-item-section-expandable");
      for (var b = 0; b < a.length; b++) {
        var c = a[b].querySelector(".devsite-nav-toggle")
          , d = a[b].querySelector(".devsite-nav-title")
          , e = a[b].querySelector("ul");
        L(c, "click", z(this.yh, this, c, e));
        d.hasAttribute("href") || (d.setAttribute("tabindex", 0),
        L(d, ["click", "keypress"], z(this.yh, this, c, e)))
      }
    };
    A("devsite.Treelist.create", function(a) {
      return new Tr(a)
    });
    Tr.prototype.yh = function(a, b, c) {
      if ("keypress" != c.type || 13 == c.keyCode) {
        b.style.display = "block";
        var d = b.scrollHeight;
        if (cf(a, "devsite-nav-toggle-expanded")) {
          var e = function() {
            b.style.display = "none"
          };
          jf(a, "devsite-nav-toggle-expanded", "devsite-nav-toggle-collapsed");
          jf(b, "devsite-nav-section-expanded", "devsite-nav-section-collapsed");
          Ur(b, d, 0, e)
        } else
          e = function() {
            b.style.height = "auto";
            var a = document.querySelector(".devsite-section-nav")
              , c = document.querySelector(".devsite-nav-responsive");
            a = c && c.contains(b.parentElement) ? c.getBoundingClientRect() : a.getBoundingClientRect();
            c = b.parentElement.getBoundingClientRect();
            c.bottom > a.bottom && b.parentElement.scrollIntoView(c.height > a.height)
          }
          ,
          jf(a, "devsite-nav-toggle-collapsed", "devsite-nav-toggle-expanded"),
          jf(b, "devsite-nav-section-collapsed", "devsite-nav-section-expanded"),
          Ur(b, 0, d, e);
        a = c.currentTarget;
        "click" != c.type && "touchend" != c.type || !cf(a, "devsite-nav-title-no-path") || a.blur()
      }
    }
    ;
    var Ur = function(a, b, c, d) {
      if (window.requestAnimationFrame) {
        var e = (c - b) / 6;
        a.style.height = b + "px";
        var f = function() {
          b += e;
          0 < e && b > c || 0 > e && b < c ? (a.style.height = c,
          d && d()) : (a.style.height = b + "px",
          window.requestAnimationFrame(f))
        };
        window.requestAnimationFrame(f)
      } else
        a.style.height = c + "px",
        d && d()
    };
    Tr.prototype.Xa = function() {
      for (var a = this.Dc.querySelectorAll(".devsite-nav-item-section-expandable"), b = 0; b < a.length; b++) {
        var c = a[b].querySelector(".devsite-nav-title");
        ne(a[b].querySelector(".devsite-nav-toggle"));
        ne(c)
      }
    }
    ;
  }).call(this || window);
} catch(e) {};
