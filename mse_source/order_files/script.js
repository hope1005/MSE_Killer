!
function(e, t) {
    function n(e) {
        var t = e.length,
        n = ct.type(e);
        return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e) {
        var t = kt[e] = {};
        return ct.each(e.match(pt) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function i(e, n, r, i) {
        if (ct.acceptData(e)) {
            var o, a, s = ct.expando,
            u = e.nodeType,
            l = u ? ct.cache: e,
            c = u ? e[s] : e[s] && s;
            if (c && l[c] && (i || l[c].data) || r !== t || "string" != typeof n) return c || (c = u ? e[s] = tt.pop() || ct.guid++:s),
            l[c] || (l[c] = u ? {}: {
                toJSON: ct.noop
            }),
            ("object" == typeof n || "function" == typeof n) && (i ? l[c] = ct.extend(l[c], n) : l[c].data = ct.extend(l[c].data, n)),
            a = l[c],
            i || (a.data || (a.data = {}), a = a.data),
            r !== t && (a[ct.camelCase(n)] = r),
            "string" == typeof n ? (o = a[n], null == o && (o = a[ct.camelCase(n)])) : o = a,
            o
        }
    }
    function o(e, t, n) {
        if (ct.acceptData(e)) {
            var r, i, o = e.nodeType,
            a = o ? ct.cache: e,
            u = o ? e[ct.expando] : ct.expando;
            if (a[u]) {
                if (t && (r = n ? a[u] : a[u].data)) {
                    ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in r ? t = [t] : (t = ct.camelCase(t), t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !s(r) : !ct.isEmptyObject(r)) return
                } (n || (delete a[u].data, s(a[u]))) && (o ? ct.cleanData([e], !0) : ct.support.deleteExpando || a != a.window ? delete a[u] : a[u] = null)
            }
        }
    }
    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(St, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null: +r + "" === r ? +r: Et.test(r) ? ct.parseJSON(r) : r
                } catch(o) {}
                ct.data(e, n, r)
            } else r = t
        }
        return r
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function u() {
        return ! 0
    }
    function l() {
        return ! 1
    }
    function c() {
        try {
            return G.activeElement
        } catch(e) {}
    }
    function f(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function p(e, t, n) {
        if (ct.isFunction(t)) return ct.grep(e,
        function(e, r) {
            return !! t.call(e, r, e) !== n
        });
        if (t.nodeType) return ct.grep(e,
        function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if ($t.test(t)) return ct.filter(t, e, n);
            t = ct.filter(t, e)
        }
        return ct.grep(e,
        function(e) {
            return ct.inArray(e, t) >= 0 !== n
        })
    }
    function d(e) {
        var t = Ut.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    function h(e, t) {
        return ct.nodeName(e, "table") && ct.nodeName(1 === t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function g(e) {
        return e.type = (null !== ct.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function m(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function y(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ct._data(n, "globalEval", !t || ct._data(t[r], "globalEval"))
    }
    function v(e, t) {
        if (1 === t.nodeType && ct.hasData(e)) {
            var n, r, i, o = ct._data(e),
            a = ct._data(t, o),
            s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) ct.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ct.extend({},
            a.data))
        }
    }
    function b(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ct.support.noCloneEvent && t[ct.expando]) {
                i = ct._data(t);
                for (r in i.events) ct.removeEvent(t, r, i.handle);
                t.removeAttribute(ct.expando)
            }
            "script" === n && t.text !== e.text ? (g(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function x(e, n) {
        var r, i, o = 0,
        a = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) ! n || ct.nodeName(i, n) ? a.push(i) : ct.merge(a, x(i, n));
        return n === t || n && ct.nodeName(e, n) ? ct.merge([e], a) : a
    }
    function T(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }
    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = kn.length; i--;) if (t = kn[i] + n, t in e) return t;
        return r
    }
    function C(e, t) {
        return e = t || e,
        "none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e)
    }
    function N(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a],
        r.style && (o[a] = ct._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && C(r) && (o[a] = ct._data(r, "olddisplay", A(r.nodeName)))) : o[a] || (i = C(r), (n && "none" !== n || !i) && ct._data(r, "olddisplay", i ? n: ct.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a],
        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "": "none"));
        return e
    }
    function k(e, t, n) {
        var r = vn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function E(e, t, n, r, i) {
        for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += ct.css(e, n + Nn[o], !0, i)),
        r ? ("content" === n && (a -= ct.css(e, "padding" + Nn[o], !0, i)), "margin" !== n && (a -= ct.css(e, "border" + Nn[o] + "Width", !0, i))) : (a += ct.css(e, "padding" + Nn[o], !0, i), "padding" !== n && (a += ct.css(e, "border" + Nn[o] + "Width", !0, i)));
        return a
    }
    function S(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = fn(e),
        a = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = pn(e, t, o), (0 > i || null == i) && (i = e.style[t]), bn.test(i)) return i;
            r = a && (ct.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + E(e, t, n || (a ? "border": "content"), r, o) + "px"
    }
    function A(e) {
        var t = G,
        n = Tn[e];
        return n || (n = j(e, t), "none" !== n && n || (cn = (cn || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = j(e, t), cn.detach()), Tn[e] = n),
        n
    }
    function j(e, t) {
        var n = ct(t.createElement(e)).appendTo(t.body),
        r = ct.css(n[0], "display");
        return n.remove(),
        r
    }
    function D(e, t, n, r) {
        var i;
        if (ct.isArray(t)) ct.each(t,
        function(t, i) {
            n || Sn.test(e) ? r(e, i) : D(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
        });
        else if (n || "object" !== ct.type(t)) r(e, t);
        else for (i in t) D(e + "[" + i + "]", t[i], n, r)
    }
    function L(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            o = t.toLowerCase().match(pt) || [];
            if (ct.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function H(e, n, r, i) {
        function o(u) {
            var l;
            return a[u] = !0,
            ct.each(e[u] || [],
            function(e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || s || a[c] ? s ? !(l = c) : t: (n.dataTypes.unshift(c), o(c), !1)
            }),
            l
        }
        var a = {},
        s = e === zn;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }
    function q(e, n) {
        var r, i, o = ct.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e: r || (r = {}))[i] = n[i]);
        return r && ct.extend(!0, e, r),
        e
    }
    function _(e, n, r) {
        for (var i, o, a, s, u = e.contents,
        l = e.dataTypes;
        "*" === l[0];) l.shift(),
        o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in u) if (u[s] && u[s].test(o)) {
            l.unshift(s);
            break
        }
        if (l[0] in r) a = l[0];
        else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }
    function M(e, t, n, r) {
        var i, o, a, s, u, l = {},
        c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0) if (a && e["throws"]) t = a(t);
            else try {
                t = a(t)
            } catch(f) {
                return {
                    state: "parsererror",
                    error: a ? f: "No conversion from " + u + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function O() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function B() {
        return setTimeout(function() {
            Zn = t
        }),
        Zn = ct.now()
    }
    function P(e, t, n) {
        for (var r, i = (or[t] || []).concat(or["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r
    }
    function R(e, t, n) {
        var r, i, o = 0,
        a = ir.length,
        s = ct.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (i) return ! 1;
            for (var t = Zn || B(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]),
            1 > o && u ? n: (s.resolveWith(e, [l]), !1)
        },
        l = s.promise({
            elem: e,
            props: ct.extend({},
            t),
            opts: ct.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Zn || B(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = ct.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? l.tweens.length: 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                this
            }
        }),
        c = l.props;
        for (W(c, l.opts.specialEasing); a > o; o++) if (r = ir[o].call(l, e, c, l.opts)) return r;
        return ct.map(c, P, l),
        ct.isFunction(l.opts.start) && l.opts.start.call(e, l),
        ct.fx.timer(ct.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function W(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = ct.camelCase(n), i = t[r], o = e[n], ct.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ct.cssHooks[r], a && "expand" in a) {
            o = a.expand(o),
            delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }
    function $(e, t, n) {
        var r, i, o, a, s, u, l = this,
        c = {},
        f = e.style,
        p = e.nodeType && C(e),
        d = ct._data(e, "fxshow");
        n.queue || (s = ct._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, l.always(function() {
            l.always(function() {
                s.unqueued--,
                ct.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden", ct.support.shrinkWrapBlocks || l.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], tr.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (p ? "hide": "show")) continue;
            c[r] = d && d[r] || ct.style(e, r)
        }
        if (!ct.isEmptyObject(c)) {
            d ? "hidden" in d && (p = d.hidden) : d = ct._data(e, "fxshow", {}),
            o && (d.hidden = !p),
            p ? ct(e).show() : l.done(function() {
                ct(e).hide()
            }),
            l.done(function() {
                var t;
                ct._removeData(e, "fxshow");
                for (t in c) ct.style(e, t, c[t])
            });
            for (r in c) a = P(p ? d[r] : 0, r, l),
            r in d || (d[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function I(e, t, n, r, i) {
        return new I.prototype.init(e, t, n, r, i)
    }
    function z(e, t) {
        var n, r = {
            height: e
        },
        i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Nn[i],
        r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function X(e) {
        return ct.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    var U, V, Y = typeof t,
    J = e.location,
    G = e.document,
    Q = G.documentElement,
    K = e.jQuery,
    Z = e.$,
    et = {},
    tt = [],
    nt = "1.10.2",
    rt = tt.concat,
    it = tt.push,
    ot = tt.slice,
    at = tt.indexOf,
    st = et.toString,
    ut = et.hasOwnProperty,
    lt = nt.trim,
    ct = function(e, t) {
        return new ct.fn.init(e, t, V)
    },
    ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    pt = /\S+/g,
    dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    mt = /^[\],:{}\s]*$/,
    yt = /(?:^|:|,)(?:\s*\[)+/g,
    vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    xt = /^-ms-/,
    Tt = /-([\da-z])/gi,
    wt = function(e, t) {
        return t.toUpperCase()
    },
    Ct = function(e) { (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (Nt(), ct.ready())
    },
    Nt = function() {
        G.addEventListener ? (G.removeEventListener("DOMContentLoaded", Ct, !1), e.removeEventListener("load", Ct, !1)) : (G.detachEvent("onreadystatechange", Ct), e.detachEvent("onload", Ct))
    };
    ct.fn = ct.prototype = {
        jquery: nt,
        constructor: ct,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ht.exec(e), !i || !i[1] && n) return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n: G, !0)), gt.test(i[1]) && ct.isPlainObject(n)) for (i in n) ct.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = G.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1,
                    this[0] = o
                }
                return this.context = G,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return ot.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = ct.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return ct.each(this, e, t)
        },
        ready: function(e) {
            return ct.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(ot.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(ct.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: it,
        sort: [].sort,
        splice: [].splice
    },
    ct.fn.init.prototype = ct.fn,
    ct.extend = ct.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
        u = 1,
        l = arguments.length,
        c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {},
        u = 2), "object" == typeof s || ct.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (o = arguments[u])) for (i in o) e = s[i],
        r = o[i],
        s !== r && (c && r && (ct.isPlainObject(r) || (n = ct.isArray(r))) ? (n ? (n = !1, a = e && ct.isArray(e) ? e: []) : a = e && ct.isPlainObject(e) ? e: {},
        s[i] = ct.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    },
    ct.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === ct && (e.$ = Z),
            t && e.jQuery === ct && (e.jQuery = K),
            ct
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ct.readyWait++:ct.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ct.readyWait: !ct.isReady) {
                if (!G.body) return setTimeout(ct.ready);
                ct.isReady = !0,
                e !== !0 && --ct.readyWait > 0 || (U.resolveWith(G, [ct]), ct.fn.trigger && ct(G).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === ct.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === ct.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object": typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !ut.call(e, "constructor") && !ut.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(r) {
                return ! 1
            }
            if (ct.support.ownLast) for (n in e) return ut.call(e, n);
            for (n in e);
            return n === t || ut.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1),
            t = t || G;
            var r = gt.exec(e),
            i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ct.buildFragment([e], t, i), i && ct(i).remove(), ct.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n: "string" == typeof n && (n = ct.trim(n), n && mt.test(n.replace(vt, "@").replace(bt, "]").replace(yt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch(o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && ct.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(xt, "ms-").replace(Tt, wt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
            a = e.length,
            s = n(e);
            if (r) {
                if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else for (o in e) if (i = t.apply(e[o], r), i === !1) break
            } else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: lt && !lt.call("﻿ ") ?
        function(e) {
            return null == e ? "": lt.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(dt, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ct.merge(r, "string" == typeof e ? [e] : e) : it.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (at) return at.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, n) {
            var r = n.length,
            i = e.length,
            o = 0;
            if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
            else for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [],
            o = 0,
            a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o),
            n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
            a = e.length,
            s = n(e),
            u = [];
            if (s) for (; a > o; o++) i = t(e[o], o, r),
            null != i && (u[u.length] = i);
            else for (o in e) i = t(e[o], o, r),
            null != i && (u[u.length] = i);
            return rt.apply([], u)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o),
            ct.isFunction(e) ? (r = ot.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(ot.call(arguments)))
            },
            i.guid = e.guid = e.guid || ct.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0,
            l = e.length,
            c = null == r;
            if ("object" === ct.type(r)) {
                o = !0;
                for (u in r) ct.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, ct.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                return c.call(ct(e), n)
            })), n)) for (; l > u; u++) n(e[u], r, s ? i: i.call(e[u], u, n(e[u], r)));
            return o ? e: c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o],
            e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }),
    ct.ready.promise = function(t) {
        if (!U) if (U = ct.Deferred(), "complete" === G.readyState) setTimeout(ct.ready);
        else if (G.addEventListener) G.addEventListener("DOMContentLoaded", Ct, !1),
        e.addEventListener("load", Ct, !1);
        else {
            G.attachEvent("onreadystatechange", Ct),
            e.attachEvent("onload", Ct);
            var n = !1;
            try {
                n = null == e.frameElement && G.documentElement
            } catch(r) {}
            n && n.doScroll &&
            function i() {
                if (!ct.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(e) {
                        return setTimeout(i, 50)
                    }
                    Nt(),
                    ct.ready()
                }
            } ()
        }
        return U.promise(t)
    },
    ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    }),
    V = ct(G),
    function(e, t) {
        function n(e, t, n, r) {
            var i, o, a, s, u, l, c, f, h, g;
            if ((t ? t.ownerDocument || t: R) !== H && L(t), t = t || H, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (_ && !r) {
                if (i = bt.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o),
                        n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o),
                    n
                } else {
                    if (i[2]) return et.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((a = i[3]) && C.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(a)),
                    n
                }
                if (C.qsa && (!M || !M.test(e))) {
                    if (f = c = P, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = p(e), (c = t.getAttribute("id")) ? f = c.replace(wt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", u = l.length; u--;) l[u] = f + d(l[u]);
                        h = dt.test(e) && t.parentNode || t,
                        g = l.join(",")
                    }
                    if (g) try {
                        return et.apply(n, h.querySelectorAll(g)),
                        n
                    } catch(m) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return T(e.replace(lt, "$1"), t, n, r)
        }
        function r() {
            function e(n, r) {
                return t.push(n += " ") > k.cacheLength && delete e[t.shift()],
                e[n] = r
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[P] = !0,
            e
        }
        function o(e) {
            var t = H.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function a(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) k.attrHandle[n[r]] = t
        }
        function s(e, t) {
            var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function f() {}
        function p(e, t) {
            var r, i, o, a, s, u, l, c = z[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = k.preFilter; s;) { (!r || (i = ft.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])),
                r = !1,
                (i = pt.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(lt, " ")
                }), s = s.slice(r.length));
                for (a in k.filter) ! (i = yt[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return t ? s.length: s ? n.error(e) : z(e, u).slice(0)
        }
        function d(e) {
            for (var t = 0,
            n = e.length,
            r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function h(e, t, n) {
            var r = t.dir,
            i = n && "parentNode" === r,
            o = $++;
            return t.first ?
            function(t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            }: function(t, n, a) {
                var s, u, l, c = W + " " + o;
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return ! 0
                } else for (; t = t[r];) if (1 === t.nodeType || i) if (l = t[P] || (t[P] = {}), (u = l[r]) && u[0] === c) {
                    if ((s = u[1]) === !0 || s === N) return s === !0
                } else if (u = l[r] = [c], u[1] = e(t, n, a) || N, u[1] === !0) return ! 0
            }
        }
        function g(e) {
            return e.length > 1 ?
            function(t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }
        function y(e, t, n, r, o, a) {
            return r && !r[P] && (r = y(r)),
            o && !o[P] && (o = y(o, a)),
            i(function(i, a, s, u) {
                var l, c, f, p = [],
                d = [],
                h = a.length,
                g = i || x(t || "*", s.nodeType ? [s] : s, []),
                y = !e || !i && t ? g: m(g, p, e, s, u),
                v = n ? o || (i ? e: h || r) ? [] : a: y;
                if (n && n(y, v, s, u), r) for (l = m(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (l = o ? nt.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                    }
                } else v = m(v === a ? v.splice(h, v.length) : v),
                o ? o(null, a, v, u) : et.apply(a, v)
            })
        }
        function v(e) {
            for (var t, n, r, i = e.length,
            o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                return e === t
            },
            a, !0), l = h(function(e) {
                return nt.call(t, e) > -1
            },
            a, !0), c = [function(e, n, r) {
                return ! o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }]; i > s; s++) if (n = k.relative[e[s].type]) c = [h(g(c), n)];
            else {
                if (n = k.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                    for (r = ++s; i > r && !k.relative[e[r].type]; r++);
                    return y(s > 1 && g(c), s > 1 && d(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*": ""
                    })).replace(lt, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && d(e))
                }
                c.push(n)
            }
            return g(c)
        }
        function b(e, t) {
            var r = 0,
            o = t.length > 0,
            a = e.length > 0,
            s = function(i, s, u, l, c) {
                var f, p, d, h = [],
                g = 0,
                y = "0",
                v = i && [],
                b = null != c,
                x = j,
                T = i || a && k.find.TAG("*", c && s.parentNode || s),
                w = W += null == x ? 1 : Math.random() || .1;
                for (b && (j = s !== H && s, N = r); null != (f = T[y]); y++) {
                    if (a && f) {
                        for (p = 0; d = e[p++];) if (d(f, s, u)) {
                            l.push(f);
                            break
                        }
                        b && (W = w, N = ++r)
                    }
                    o && ((f = !d && f) && g--, i && v.push(f))
                }
                if (g += y, o && y !== g) {
                    for (p = 0; d = t[p++];) d(v, h, s, u);
                    if (i) {
                        if (g > 0) for (; y--;) v[y] || h[y] || (h[y] = K.call(l));
                        h = m(h)
                    }
                    et.apply(l, h),
                    b && !i && h.length > 0 && g + t.length > 1 && n.uniqueSort(l)
                }
                return b && (W = w, j = x),
                v
            };
            return o ? i(s) : s
        }
        function x(e, t, r) {
            for (var i = 0,
            o = t.length; o > i; i++) n(e, t[i], r);
            return r
        }
        function T(e, t, n, r) {
            var i, o, a, s, u, l = p(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && C.getById && 9 === t.nodeType && _ && k.relative[o[1].type]) {
                    if (t = (k.find.ID(a.matches[0].replace(Ct, Nt), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = yt.needsContext.test(e) ? 0 : o.length; i--&&(a = o[i], !k.relative[s = a.type]);) if ((u = k.find[s]) && (r = u(a.matches[0].replace(Ct, Nt), dt.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && d(o), !e) return et.apply(n, r),
                    n;
                    break
                }
            }
            return A(e, l)(r, t, !_, n, dt.test(e)),
            n
        }
        var w, C, N, k, E, S, A, j, D, L, H, q, _, M, O, F, B, P = "sizzle" + -new Date,
        R = e.document,
        W = 0,
        $ = 0,
        I = r(),
        z = r(),
        X = r(),
        U = !1,
        V = function(e, t) {
            return e === t ? (U = !0, 0) : 0
        },
        Y = typeof t,
        J = 1 << 31,
        G = {}.hasOwnProperty,
        Q = [],
        K = Q.pop,
        Z = Q.push,
        et = Q.push,
        tt = Q.slice,
        nt = Q.indexOf ||
        function(e) {
            for (var t = 0,
            n = this.length; n > t; t++) if (this[t] === e) return t;
            return - 1
        },
        rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        it = "[\\x20\\t\\r\\n\\f]",
        ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        at = ot.replace("w", "w#"),
        st = "\\[" + it + "*(" + ot + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + it + "*\\]",
        ut = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)",
        lt = RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
        ft = RegExp("^" + it + "*," + it + "*"),
        pt = RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
        dt = RegExp(it + "*[+~]"),
        ht = RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"),
        gt = RegExp(ut),
        mt = RegExp("^" + at + "$"),
        yt = {
            ID: RegExp("^#(" + ot + ")"),
            CLASS: RegExp("^\\.(" + ot + ")"),
            TAG: RegExp("^(" + ot.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + st),
            PSEUDO: RegExp("^" + ut),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
            bool: RegExp("^(?:" + rt + ")$", "i"),
            needsContext: RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
        },
        vt = /^[^{]+\{\s*\[native \w/,
        bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        xt = /^(?:input|select|textarea|button)$/i,
        Tt = /^h\d$/i,
        wt = /'|\\/g,
        Ct = RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
        Nt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            et.apply(Q = tt.call(R.childNodes), R.childNodes),
            Q[R.childNodes.length].nodeType
        } catch(kt) {
            et = {
                apply: Q.length ?
                function(e, t) {
                    Z.apply(e, tt.call(t))
                }: function(e, t) {
                    for (var n = e.length,
                    r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        S = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        C = n.support = {},
        L = n.setDocument = function(e) {
            var n = e ? e.ownerDocument || e: R,
            r = n.defaultView;
            return n !== H && 9 === n.nodeType && n.documentElement ? (H = n, q = n.documentElement, _ = !S(n), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload",
            function() {
                L()
            }), C.attributes = o(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), C.getElementsByTagName = o(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }), C.getElementsByClassName = o(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }), C.getById = o(function(e) {
                return q.appendChild(e).id = P,
                !n.getElementsByName || !n.getElementsByName(P).length
            }), C.getById ? (k.find.ID = function(e, t) {
                if (typeof t.getElementById !== Y && _) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            k.filter.ID = function(e) {
                var t = e.replace(Ct, Nt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function(e) {
                var t = e.replace(Ct, Nt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = C.getElementsByTagName ?
            function(e, n) {
                return typeof n.getElementsByTagName !== Y ? n.getElementsByTagName(e) : t
            }: function(e, t) {
                var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            },
            k.find.CLASS = C.getElementsByClassName &&
            function(e, n) {
                return typeof n.getElementsByClassName !== Y && _ ? n.getElementsByClassName(e) : t
            },
            O = [], M = [], (C.qsa = vt.test(n.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + rt + ")"),
                e.querySelectorAll(":checked").length || M.push(":checked")
            }), o(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("t", ""),
                e.querySelectorAll("[t^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"),
                e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                M.push(",.*:")
            })), (C.matchesSelector = vt.test(F = q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && o(function(e) {
                C.disconnectedMatch = F.call(e, "div"),
                F.call(e, "[s!='']:x"),
                O.push("!=", ut)
            }), M = M.length && RegExp(M.join("|")), O = O.length && RegExp(O.join("|")), B = vt.test(q.contains) || q.compareDocumentPosition ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            V = q.compareDocumentPosition ?
            function(e, t) {
                if (e === t) return U = !0,
                0;
                var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return r ? 1 & r || !C.sortDetached && t.compareDocumentPosition(e) === r ? e === n || B(R, e) ? -1 : t === n || B(R, t) ? 1 : D ? nt.call(D, e) - nt.call(D, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }: function(e, t) {
                var r, i = 0,
                o = e.parentNode,
                a = t.parentNode,
                u = [e],
                l = [t];
                if (e === t) return U = !0,
                0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : D ? nt.call(D, e) - nt.call(D, t) : 0;
                if (o === a) return s(e, t);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
            },
            n) : H
        },
        n.matches = function(e, t) {
            return n(e, null, null, t)
        },
        n.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== H && L(e), t = t.replace(ht, "='$1']"), !(!C.matchesSelector || !_ || O && O.test(t) || M && M.test(t))) try {
                var r = F.call(e, t);
                if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch(i) {}
            return n(t, H, null, [e]).length > 0
        },
        n.contains = function(e, t) {
            return (e.ownerDocument || e) !== H && L(e),
            B(e, t)
        },
        n.attr = function(e, n) { (e.ownerDocument || e) !== H && L(e);
            var r = k.attrHandle[n.toLowerCase()],
            i = r && G.call(k.attrHandle, n.toLowerCase()) ? r(e, n, !_) : t;
            return i === t ? C.attributes || !_ ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value: null: i
        },
        n.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        },
        n.uniqueSort = function(e) {
            var t, n = [],
            r = 0,
            i = 0;
            if (U = !C.detectDuplicates, D = !C.sortStable && e.slice(0), e.sort(V), U) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return e
        },
        E = n.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += E(t);
            return n
        },
        k = n.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: yt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Ct, Nt),
                    e[3] = (e[4] || e[5] || "").replace(Ct, Nt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return yt.CHILD.test(e[0]) ? null: (e[3] && e[4] !== t ? e[2] = e[4] : r && gt.test(r) && (n = p(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Ct, Nt).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = I[e + " "];
                    return t || (t = RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && I(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, r) {
                    return function(i) {
                        var o = n.attr(i, e);
                        return null == o ? "!=" === t: t ? (o += "", "=" === t ? o === r: "!=" === t ? o !== r: "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice( - r.length) === r: "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        y = s && t.nodeName.toLowerCase(),
                        v = !u && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === y: 1 === f.nodeType) return ! 1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [a ? m.firstChild: m.lastChild], a && v) {
                                for (c = m[P] || (m[P] = {}), l = c[e] || [], d = l[0] === W && l[1], p = l[0] === W && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [W, d, p];
                                    break
                                }
                            } else if (v && (l = (t[P] || (t[P] = {}))[e]) && l[0] === W) p = l[1];
                            else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y: 1 !== f.nodeType) || !++p || (v && ((f[P] || (f[P] = {}))[e] = [W, p]), f !== t)););
                            return p -= i,
                            p === r || 0 === p % r && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return o[P] ? o(t) : o.length > 1 ? (r = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        for (var r, i = o(e, t), a = i.length; a--;) r = nt.call(e, i[a]),
                        e[r] = !(n[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                    n = [],
                    r = A(e.replace(lt, "$1"));
                    return r[P] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(t) {
                        return n(e, t).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return mt.test(e || "") || n.error("unsupported lang: " + e),
                    e = e.replace(Ct, Nt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = _ ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === q
                },
                focus: function(e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! k.pseudos.empty(e)
                },
                header: function(e) {
                    return Tt.test(e.nodeName)
                },
                input: function(e) {
                    return xt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; t > ++r;) e.push(r);
                    return e
                })
            }
        },
        k.pseudos.nth = k.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) k.pseudos[w] = u(w);
        for (w in {
            submit: !0,
            reset: !0
        }) k.pseudos[w] = l(w);
        f.prototype = k.filters = k.pseudos,
        k.setFilters = new f,
        A = n.compile = function(e, t) {
            var n, r = [],
            i = [],
            o = X[e + " "];
            if (!o) {
                for (t || (t = p(e)), n = t.length; n--;) o = v(t[n]),
                o[P] ? r.push(o) : i.push(o);
                o = X(e, b(i, r))
            }
            return o
        },
        C.sortStable = P.split("").sort(V).join("") === P,
        C.detectDuplicates = U,
        L(),
        C.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }),
        o(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width",
        function(e, n, r) {
            return r ? t: e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }),
        C.attributes && o(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || a("value",
        function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t: e.defaultValue
        }),
        o(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(rt,
        function(e, n, r) {
            var i;
            return r ? t: (i = e.getAttributeNode(n)) && i.specified ? i.value: e[n] === !0 ? n.toLowerCase() : null
        }),
        ct.find = n,
        ct.expr = n.selectors,
        ct.expr[":"] = ct.expr.pseudos,
        ct.unique = n.uniqueSort,
        ct.text = n.getText,
        ct.isXMLDoc = n.isXML,
        ct.contains = n.contains
    } (e);
    var kt = {};
    ct.Callbacks = function(e) {
        e = "string" == typeof e ? kt[e] || r(e) : ct.extend({},
        e);
        var n, i, o, a, s, u, l = [],
        c = !e.once && [],
        f = function(t) {
            for (i = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && a > s; s++) if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break
            }
            n = !1,
            l && (c ? c.length && f(c.shift()) : i ? l = [] : p.disable())
        },
        p = {
            add: function() {
                if (l) {
                    var t = l.length; !
                    function r(t) {
                        ct.each(t,
                        function(t, n) {
                            var i = ct.type(n);
                            "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    } (arguments),
                    n ? a = l.length: i && (u = t, f(i))
                }
                return this
            },
            remove: function() {
                return l && ct.each(arguments,
                function(e, t) {
                    for (var r; (r = ct.inArray(t, l, r)) > -1;) l.splice(r, 1),
                    n && (a >= r && a--, s >= r && s--)
                }),
                this
            },
            has: function(e) {
                return e ? ct.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                a = 0,
                this
            },
            disable: function() {
                return l = c = i = t,
                this
            },
            disabled: function() {
                return ! l
            },
            lock: function() {
                return c = t,
                i || p.disable(),
                this
            },
            locked: function() {
                return ! c
            },
            fireWith: function(e, t) {
                return ! l || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : f(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! o
            }
        };
        return p
    },
    ct.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", ct.Callbacks("once memory"), "resolved"], ["reject", "fail", ct.Callbacks("once memory"), "rejected"], ["notify", "progress", ct.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return ct.Deferred(function(n) {
                        ct.each(t,
                        function(t, o) {
                            var a = o[0],
                            s = ct.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ct.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            ct.each(t,
            function(e, o) {
                var a = o[2],
                s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0,
            o = ot.call(arguments),
            a = o.length,
            s = 1 !== a || e && ct.isFunction(e.promise) ? a: 0,
            u = 1 === s ? e: ct.Deferred(),
            l = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? ot.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1) for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && ct.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o),
            u.promise()
        }
    }),
    ct.support = function(t) {
        var n, r, i, o, a, s, u, l, c, f = G.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*") || [], r = f.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        o = G.createElement("select"),
        s = o.appendChild(G.createElement("option")),
        i = f.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t.getSetAttribute = "t" !== f.className,
        t.leadingWhitespace = 3 === f.firstChild.nodeType,
        t.tbody = !f.getElementsByTagName("tbody").length,
        t.htmlSerialize = !!f.getElementsByTagName("link").length,
        t.style = /top/.test(r.getAttribute("style")),
        t.hrefNormalized = "/a" === r.getAttribute("href"),
        t.opacity = /^0.5/.test(r.style.opacity),
        t.cssFloat = !!r.style.cssFloat,
        t.checkOn = !!i.value,
        t.optSelected = s.selected,
        t.enctype = !!G.createElement("form").enctype,
        t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML,
        t.inlineBlockNeedsLayout = !1,
        t.shrinkWrapBlocks = !1,
        t.pixelPosition = !1,
        t.deleteExpando = !0,
        t.noCloneEvent = !0,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        i.checked = !0,
        t.noCloneChecked = i.cloneNode(!0).checked,
        o.disabled = !0,
        t.optDisabled = !s.disabled;
        try {
            delete f.test
        } catch(p) {
            t.deleteExpando = !1
        }
        i = G.createElement("input"),
        i.setAttribute("value", ""),
        t.input = "" === i.getAttribute("value"),
        i.value = "t",
        i.setAttribute("type", "radio"),
        t.radioValue = "t" === i.value,
        i.setAttribute("checked", "t"),
        i.setAttribute("name", "t"),
        a = G.createDocumentFragment(),
        a.appendChild(i),
        t.appendChecked = i.checked,
        t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        f.attachEvent && (f.attachEvent("onclick",
        function() {
            t.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(u = "on" + c, "t"),
        t[c + "Bubbles"] = u in e || f.attributes[u].expando === !1;
        f.style.backgroundClip = "content-box",
        f.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === f.style.backgroundClip;
        for (c in ct(t)) break;
        return t.ownLast = "0" !== c,
        ct(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            a = G.getElementsByTagName("body")[0];
            a && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(a, null != a.style.zoom ? {
                zoom: 1
            }: {},
            function() {
                t.boxSizing = 4 === f.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                width: "4px"
            }).width, r = f.appendChild(G.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== Y && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
        }),
        n = o = a = s = r = i = null,
        t
    } ({});
    var Et = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    St = /([A-Z])/g;
    ct.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando],
            !!e && !s(e)
        },
        data: function(e, t, n) {
            return i(e, t, n)
        },
        removeData: function(e, t) {
            return o(e, t)
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return o(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return ! 1;
            var t = e.nodeName && ct.noData[e.nodeName.toLowerCase()];
            return ! t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    ct.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
            s = 0,
            u = this[0];
            if (e === t) {
                if (this.length && (o = ct.data(u), 1 === u.nodeType && !ct._data(u, "parsedAttrs"))) {
                    for (r = u.attributes; r.length > s; s++) i = r[s].name,
                    0 === i.indexOf("data-") && (i = ct.camelCase(i.slice(5)), a(u, i, o[i]));
                    ct._data(u, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                ct.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ct.data(this, e, n)
            }) : u ? a(u, e, ct.data(u, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                ct.removeData(this, e)
            })
        }
    }),
    ct.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = ct._data(e, n), r && (!i || ct.isArray(r) ? i = ct._data(e, n, ct.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ct.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = ct._queueHooks(e, t),
            a = function() {
                ct.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ct._data(e, n) || ct._data(e, n, {
                empty: ct.Callbacks("once memory").add(function() {
                    ct._removeData(e, t + "queue"),
                    ct._removeData(e, n)
                })
            })
        }
    }),
    ct.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--),
            r > arguments.length ? ct.queue(this[0], e) : n === t ? this: this.each(function() {
                var t = ct.queue(this, e, n);
                ct._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ct.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = ct.fx ? ct.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
            o = ct.Deferred(),
            a = this,
            s = this.length,
            u = function() {--i || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ct._data(a[s], e + "queueHooks"),
            r && r.empty && (i++, r.empty.add(u));
            return u(),
            o.promise(n)
        }
    });
    var At, jt, Dt = /[\t\r\n\f]/g,
    Lt = /\r/g,
    Ht = /^(?:input|select|textarea|button|object)$/i,
    qt = /^(?:a|area)$/i,
    _t = /^(?:checked|selected)$/i,
    Mt = ct.support.getSetAttribute,
    Ot = ct.support.input;
    ct.fn.extend({
        attr: function(e, t) {
            return ct.access(this, ct.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ct.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return ct.access(this, ct.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ct.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch(n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            u = "string" == typeof e && e;
            if (ct.isFunction(e)) return this.each(function(t) {
                ct(this).addClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(pt) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : " ")) {
                for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = ct.trim(r)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
            s = this.length,
            u = 0 === arguments.length || "string" == typeof e && e;
            if (ct.isFunction(e)) return this.each(function(t) {
                ct(this).removeClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(pt) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                n.className = e ? ct.trim(r) : ""
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ct.isFunction(e) ?
            function(n) {
                ct(this).toggleClass(e.call(this, n, this.className, t), t)
            }: function() {
                if ("string" === n) for (var t, r = 0,
                i = ct(this), o = e.match(pt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Y || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": ct._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            n = 0,
            r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dt, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = ct.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, ct(this).val()) : e, null == o ? o = "": "number" == typeof o ? o += "": ct.isArray(o) && (o = ct.map(o,
                function(e) {
                    return null == e ? "": e + ""
                })), r = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (r = ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n: (n = o.value, "string" == typeof n ? n.replace(Lt, "") : null == n ? "": n)) : void 0
        }
    }),
    ct.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ct.find.attr(e, "value");
                    return null != t ? t: e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type || 0 > i,
                    a = o ? null: [], s = o ? i + 1 : r.length, u = 0 > i ? s: o ? i: 0; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (ct.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ct(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options,
                    o = ct.makeArray(t), a = i.length; a--;) r = i[a],
                    (r.selected = ct.inArray(ct(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === Y ? ct.prop(e, n, r) : (1 === a && ct.isXMLDoc(e) || (n = n.toLowerCase(), i = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? jt: At)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o: (o = ct.find.attr(e, n), null == o ? t: o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o: (e.setAttribute(n, r + ""), r) : (ct.removeAttr(e, n), t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            o = t && t.match(pt);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = ct.propFix[n] || n,
            ct.expr.match.bool.test(n) ? Ot && Mt || !_t.test(n) ? e[r] = !1 : e[ct.camelCase("default-" + n)] = e[r] = !1 : ct.attr(e, n, ""),
            e.removeAttribute(Mt ? n: r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !ct.isXMLDoc(e), a && (n = ct.propFix[n] || n, o = ct.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i: e[n] = r: o && "get" in o && null !== (i = o.get(e, n)) ? i: e[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ct.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ht.test(e.nodeName) || qt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    jt = {
        set: function(e, t, n) {
            return t === !1 ? ct.removeAttr(e, n) : Ot && Mt || !_t.test(n) ? e.setAttribute(!Mt && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    ct.each(ct.expr.match.bool.source.match(/\w+/g),
    function(e, n) {
        var r = ct.expr.attrHandle[n] || ct.find.attr;
        ct.expr.attrHandle[n] = Ot && Mt || !_t.test(n) ?
        function(e, n, i) {
            var o = ct.expr.attrHandle[n],
            a = i ? t: (ct.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return ct.expr.attrHandle[n] = o,
            a
        }: function(e, n, r) {
            return r ? t: e[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }),
    Ot && Mt || (ct.attrHooks.value = {
        set: function(e, n, r) {
            return ct.nodeName(e, "input") ? (e.defaultValue = n, t) : At && At.set(e, n, r)
        }
    }),
    Mt || (At = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n: t
        }
    },
    ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t: (i = e.getAttributeNode(n)) && "" !== i.value ? i.value: null
    },
    ct.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value: t
        },
        set: At.set
    },
    ct.attrHooks.contenteditable = {
        set: function(e, t, n) {
            At.set(e, "" === t ? !1 : t, n)
        }
    },
    ct.each(["width", "height"],
    function(e, n) {
        ct.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })),
    ct.support.hrefNormalized || ct.each(["href", "src"],
    function(e, t) {
        ct.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    ct.support.style || (ct.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    ct.support.optSelected || (ct.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        ct.propFix[this.toLowerCase()] = this
    }),
    ct.support.enctype || (ct.propFix.enctype = "encoding"),
    ct.each(["radio", "checkbox"],
    function() {
        ct.valHooks[this] = {
            set: function(e, n) {
                return ct.isArray(n) ? e.checked = ct.inArray(ct(e).val(), n) >= 0 : t
            }
        },
        ct.support.checkOn || (ct.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    });
    var Ft = /^(?:input|select|textarea)$/i,
    Bt = /^key/,
    Pt = /^(?:mouse|contextmenu)|click/,
    Rt = /^(?:focusinfocus|focusoutblur)$/,
    Wt = /^([^.]*)(?:\.(.+)|)$/;
    ct.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, g, m, y = ct._data(e);
            if (y) {
                for (r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = ct.guid++), (s = y.events) || (s = y.events = {}), (f = y.handle) || (f = y.handle = function(e) {
                    return typeof ct === Y || e && ct.event.triggered === e.type ? t: ct.event.dispatch.apply(f.elem, arguments)
                },
                f.elem = e), n = (n || "").match(pt) || [""], u = n.length; u--;) a = Wt.exec(n[u]) || [],
                h = m = a[1],
                g = (a[2] || "").split(".").sort(),
                h && (c = ct.event.special[h] || {},
                h = (o ? c.delegateType: c.bindType) || h, c = ct.event.special[h] || {},
                p = ct.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ct.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                },
                l), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), ct.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = ct.hasData(e) && ct._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(pt) || [""], l = t.length; l--;) if (s = Wt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = ct.event.special[d] || {},
                    d = (r ? f.delegateType: f.bindType) || d, p = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o],
                    !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                    u && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ct.removeEvent(e, d, m.handle), delete c[d])
                } else for (d in c) ct.event.remove(e, d + t[l], n, r, !0);
                ct.isEmptyObject(c) && (delete m.handle, ct._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var a, s, u, l, c, f, p, d = [i || G],
            h = ut.call(n, "type") ? n.type: n,
            g = ut.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !Rt.test(h + ct.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ct.expando] ? n: new ct.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ct.makeArray(r, [n]), c = ct.event.special[h] || {},
            o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !ct.isWindow(i)) {
                    for (l = c.delegateType || h, Rt.test(l + h) || (u = u.parentNode); u; u = u.parentNode) d.push(u),
                    f = u;
                    f === (i.ownerDocument || G) && d.push(f.defaultView || f.parentWindow || e)
                }
                for (p = 0; (u = d[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? l: c.bindType || h,
                a = (ct._data(u, "events") || {})[n.type] && ct._data(u, "handle"),
                a && a.apply(u, r),
                a = s && u[s],
                a && ct.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && ct.acceptData(i) && s && i[h] && !ct.isWindow(i)) {
                    f = i[s],
                    f && (i[s] = null),
                    ct.event.triggered = h;
                    try {
                        i[h]()
                    } catch(m) {}
                    ct.event.triggered = t,
                    f && (i[s] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = ct.event.fix(e);
            var n, r, i, o, a, s = [],
            u = ot.call(arguments),
            l = (ct._data(this, "events") || {})[e.type] || [],
            c = ct.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ct.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ct.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
            u = n.delegateCount,
            l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; u > a; a++) i = n[a],
                r = i.selector + " ",
                o[r] === t && (o[r] = i.needsContext ? ct(r, this).index(l) >= 0 : ct.find(r, this, null, [l]).length),
                o[r] && o.push(i);
                o.length && s.push({
                    elem: l,
                    handlers: o
                })
            }
            return n.length > u && s.push({
                elem: this,
                handlers: n.slice(u)
            }),
            s
        },
        fix: function(e) {
            if (e[ct.expando]) return e;
            var t, n, r, i = e.type,
            o = e,
            a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Pt.test(i) ? this.mouseHooks: Bt.test(i) ? this.keyHooks: {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ct.Event(o), t = r.length; t--;) n = r[t],
            e[n] = o[n];
            return e.target || (e.target = o.srcElement || G),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button,
                s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || G, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement: s),
                e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== c() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === c() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return ct.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ct.extend(new ct.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ct.event.trigger(i, null, t) : ct.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    ct.removeEvent = G.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Y && (e[r] = null), e.detachEvent(r, n))
    },
    ct.Event = function(e, n) {
        return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u: l) : this.type = e, n && ct.extend(this, n), this.timeStamp = e && e.timeStamp || ct.now(), this[ct.expando] = !0, t) : new ct.Event(e, n)
    },
    ct.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = u,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = u,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = u,
            this.stopPropagation()
        }
    },
    ct.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        ct.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                o = e.handleObj;
                return (!i || i !== r && !ct.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    ct.support.submitBubbles || (ct.event.special.submit = {
        setup: function() {
            return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit",
            function(e) {
                var n = e.target,
                r = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form: t;
                r && !ct._data(r, "submitBubbles") && (ct.event.add(r, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), ct._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), t)
        }
    }),
    ct.support.changeBubbles || (ct.event.special.change = {
        setup: function() {
            return Ft.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ct.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                ct.event.simulate("change", this, e, !0)
            })), !1) : (ct.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                Ft.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0)
                }), ct._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return ct.event.remove(this, "._change"),
            !Ft.test(this.nodeName)
        }
    }),
    ct.support.focusinBubbles || ct.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = 0,
        r = function(e) {
            ct.event.simulate(t, e.target, ct.event.fix(e), !0)
        };
        ct.event.special[t] = {
            setup: function() {
                0 === n++&&G.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && G.removeEventListener(e, r, !0)
            }
        }
    }),
    ct.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = l;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return ct().off(e),
                s.apply(this, arguments)
            },
            i.guid = s.guid || (s.guid = ct.guid++)),
            this.each(function() {
                ct.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
            ct(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t),
            r === !1 && (r = l),
            this.each(function() {
                ct.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ct.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? ct.event.trigger(e, n, r, !0) : t
        }
    });
    var $t = /^.[^:#\[\.,]*$/,
    It = /^(?:parents|prev(?:Until|All))/,
    zt = ct.expr.match.needsContext,
    Xt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ct.fn.extend({
        find: function(e) {
            var t, n = [],
            r = this,
            i = r.length;
            if ("string" != typeof e) return this.pushStack(ct(e).filter(function() {
                for (t = 0; i > t; t++) if (ct.contains(r[t], this)) return ! 0
            }));
            for (t = 0; i > t; t++) ct.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ct.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e: e,
            n
        },
        has: function(e) {
            var t, n = ct(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (ct.contains(this, n[t])) return ! 0
            })
        },
        not: function(e) {
            return this.pushStack(p(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(p(this, e || [], !1))
        },
        is: function(e) {
            return !! p(this, "string" == typeof e && zt.test(e) ? ct(e) : e || [], !1).length
        },
        closest: function(e, t) {
            for (var n, r = 0,
            i = this.length,
            o = [], a = zt.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, e))) {
                n = o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? ct.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e),
            r = ct.merge(this.get(), n);
            return this.pushStack(ct.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    ct.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return ct.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ct.dir(e, "parentNode", n)
        },
        next: function(e) {
            return f(e, "nextSibling")
        },
        prev: function(e) {
            return f(e, "previousSibling")
        },
        nextAll: function(e) {
            return ct.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ct.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ct.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ct.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ct.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ct.sibling(e.firstChild)
        },
        contents: function(e) {
            return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: ct.merge([], e.childNodes)
        }
    },
    function(e, t) {
        ct.fn[e] = function(n, r) {
            var i = ct.map(this, t, n);
            return "Until" !== e.slice( - 5) && (r = n),
            r && "string" == typeof r && (i = ct.filter(r, i)),
            this.length > 1 && (Xt[e] || (i = ct.unique(i)), It.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    }),
    ct.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? ct.find.matchesSelector(r, e) ? [r] : [] : ct.find.matches(e, ct.grep(t,
            function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ct(o).is(r));) 1 === o.nodeType && i.push(o),
            o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Vt = / jQuery\d+="(?:null|\d+)"/g,
    Yt = RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
    Jt = /^\s+/,
    Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Qt = /<([\w:]+)/,
    Kt = /<tbody/i,
    Zt = /<|&#?\w+;/,
    en = /<(?:script|style|link)/i,
    tn = /^(?:checkbox|radio)$/i,
    nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rn = /^$|\/(?:java|ecma)script/i,
    on = /^true\/(.*)/,
    an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    sn = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    un = d(G),
    ln = un.appendChild(G.createElement("div"));
    sn.optgroup = sn.option,
    sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead,
    sn.th = sn.td,
    ct.fn.extend({
        text: function(e) {
            return ct.access(this,
            function(e) {
                return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
            },
            null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? ct.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ct.cleanData(x(n)),
            n.parentNode && (t && ct.contains(n.ownerDocument, n) && y(x(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ct.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ct.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return ct.clone(this, e, t)
            })
        },
        html: function(e) {
            return ct.access(this,
            function(e) {
                var n = this[0] || {},
                r = 0,
                i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : t;
                if (! ("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Yt.test(e) || !ct.support.leadingWhitespace && Jt.test(e) || sn[(Qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Gt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {},
                        1 === n.nodeType && (ct.cleanData(x(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch(o) {}
                }
                n && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = ct.map(this,
            function(e) {
                return [e.nextSibling, e.parentNode]
            }),
            t = 0;
            return this.domManip(arguments,
            function(n) {
                var r = e[t++],
                i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), ct(this).remove(), i.insertBefore(n, r))
            },
            !0),
            t ? this: this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = rt.apply([], e);
            var r, i, o, a, s, u, l = 0,
            c = this.length,
            f = this,
            p = c - 1,
            d = e[0],
            h = ct.isFunction(d);
            if (h || !(1 >= c || "string" != typeof d || ct.support.checkClone) && nn.test(d)) return this.each(function(r) {
                var i = f.eq(r);
                h && (e[0] = d.call(this, r, i.html())),
                i.domManip(e, t, n)
            });
            if (c && (u = ct.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = u.firstChild, 1 === u.childNodes.length && (u = r), r)) {
                for (a = ct.map(x(u, "script"), g), o = a.length; c > l; l++) i = u,
                l !== p && (i = ct.clone(i, !0, !0), o && ct.merge(a, x(i, "script"))),
                t.call(this[l], i, l);
                if (o) for (s = a[a.length - 1].ownerDocument, ct.map(a, m), l = 0; o > l; l++) i = a[l],
                rn.test(i.type || "") && !ct._data(i, "globalEval") && ct.contains(s, i) && (i.src ? ct._evalUrl(i.src) : ct.globalEval((i.text || i.textContent || i.innerHTML || "").replace(an, "")));
                u = r = null
            }
            return this
        }
    }),
    ct.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        ct.fn[e] = function(e) {
            for (var n, r = 0,
            i = [], o = ct(e), a = o.length - 1; a >= r; r++) n = r === a ? this: this.clone(!0),
            ct(o[r])[t](n),
            it.apply(i, n.get());
            return this.pushStack(i)
        }
    }),
    ct.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = ct.contains(e.ownerDocument, e);
            if (ct.support.html5Clone || ct.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(o = ln.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e))) for (r = x(o), s = x(e), a = 0; null != (i = s[a]); ++a) r[a] && b(i, r[a]);
            if (t) if (n) for (s = s || x(e), r = r || x(o), a = 0; null != (i = s[a]); a++) v(i, r[a]);
            else v(e, o);
            return r = x(o, "script"),
            r.length > 0 && y(r, !u && x(e, "script")),
            r = s = i = null,
            o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length,
            p = d(t), h = [], g = 0; f > g; g++) if (o = e[g], o || 0 === o) if ("object" === ct.type(o)) ct.merge(h, o.nodeType ? [o] : o);
            else if (Zt.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), u = (Qt.exec(o) || ["", ""])[1].toLowerCase(), c = sn[u] || sn._default, s.innerHTML = c[1] + o.replace(Gt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ct.support.leadingWhitespace && Jt.test(o) && h.push(t.createTextNode(Jt.exec(o)[0])), !ct.support.tbody) for (o = "table" !== u || Kt.test(o) ? "<table>" !== c[1] || Kt.test(o) ? 0 : s: s.firstChild, i = o && o.childNodes.length; i--;) ct.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ct.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else h.push(t.createTextNode(o));
            for (s && p.removeChild(s), ct.support.appendChecked || ct.grep(x(h, "input"), T), g = 0; o = h[g++];) if ((!r || -1 === ct.inArray(o, r)) && (a = ct.contains(o.ownerDocument, o), s = x(p.appendChild(o), "script"), a && y(s), n)) for (i = 0; o = s[i++];) rn.test(o.type || "") && n.push(o);
            return s = null,
            p
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0,
            s = ct.expando,
            u = ct.cache,
            l = ct.support.deleteExpando,
            c = ct.event.special; null != (n = e[a]); a++) if ((t || ct.acceptData(n)) && (i = n[s], o = i && u[i])) {
                if (o.events) for (r in o.events) c[r] ? ct.event.remove(n, r) : ct.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Y ? n.removeAttribute(s) : n[s] = null, tt.push(i))
            }
        },
        _evalUrl: function(e) {
            return ct.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    ct.fn.extend({
        wrapAll: function(e) {
            if (ct.isFunction(e)) return this.each(function(t) {
                ct(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ct(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(ct.isFunction(e) ?
            function(t) {
                ct(this).wrapInner(e.call(this, t))
            }: function() {
                var t = ct(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ct.isFunction(e);
            return this.each(function(n) {
                ct(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var cn, fn, pn, dn = /alpha\([^)]*\)/i,
    hn = /opacity\s*=\s*([^)]*)/,
    gn = /^(top|right|bottom|left)$/,
    mn = /^(none|table(?!-c[ea]).+)/,
    yn = /^margin/,
    vn = RegExp("^(" + ft + ")(.*)$", "i"),
    bn = RegExp("^(" + ft + ")(?!px)[a-z%]+$", "i"),
    xn = RegExp("^([+-])=(" + ft + ")", "i"),
    Tn = {
        BODY: "block"
    },
    wn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Cn = {
        letterSpacing: 0,
        fontWeight: 400
    },
    Nn = ["Top", "Right", "Bottom", "Left"],
    kn = ["Webkit", "O", "Moz", "ms"];
    ct.fn.extend({
        css: function(e, n) {
            return ct.access(this,
            function(e, n, r) {
                var i, o, a = {},
                s = 0;
                if (ct.isArray(n)) {
                    for (o = fn(e), i = n.length; i > s; s++) a[n[s]] = ct.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? ct.style(e, n, r) : ct.css(e, n)
            },
            e, n, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                C(this) ? ct(this).show() : ct(this).hide()
            })
        }
    }),
    ct.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = pn(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ct.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = ct.camelCase(n),
                l = e.style;
                if (n = ct.cssProps[u] || (ct.cssProps[u] = w(l, u)), s = ct.cssHooks[n] || ct.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o: l[n];
                if (a = typeof r, "string" === a && (o = xn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ct.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ct.cssNumber[u] || (r += "px"), ct.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch(c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = ct.camelCase(n);
            return n = ct.cssProps[u] || (ct.cssProps[u] = w(e.style, u)),
            s = ct.cssHooks[n] || ct.cssHooks[u],
            s && "get" in s && (a = s.get(e, !0, r)),
            a === t && (a = pn(e, n, i)),
            "normal" === a && n in Cn && (a = Cn[n]),
            "" === r || r ? (o = parseFloat(a), r === !0 || ct.isNumeric(o) ? o || 0 : a) : a
        }
    }),
    e.getComputedStyle ? (fn = function(t) {
        return e.getComputedStyle(t, null)
    },
    pn = function(e, n, r) {
        var i, o, a, s = r || fn(e),
        u = s ? s.getPropertyValue(n) || s[n] : t,
        l = e.style;
        return s && ("" !== u || ct.contains(e.ownerDocument, e) || (u = ct.style(e, n)), bn.test(u) && yn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)),
        u
    }) : G.documentElement.currentStyle && (fn = function(e) {
        return e.currentStyle
    },
    pn = function(e, n, r) {
        var i, o, a, s = r || fn(e),
        u = s ? s[n] : t,
        l = e.style;
        return null == u && l && l[n] && (u = l[n]),
        bn.test(u) && !gn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em": u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)),
        "" === u ? "auto": u
    }),
    ct.each(["height", "width"],
    function(e, n) {
        ct.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && mn.test(ct.css(e, "display")) ? ct.swap(e, wn,
                function() {
                    return S(e, n, i)
                }) : S(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && fn(e);
                return k(e, t, r ? E(e, n, r, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    ct.support.opacity || (ct.cssHooks.opacity = {
        get: function(e, t) {
            return hn.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === ct.trim(o.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = dn.test(o) ? o.replace(dn, i) : o + " " + i)
        }
    }),
    ct(function() {
        ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? ct.swap(e, {
                    display: "inline-block"
                },
                pn, [e, "marginRight"]) : t
            }
        }),
        !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"],
        function(e, n) {
            ct.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = pn(e, n), bn.test(r) ? ct(e).position()[n] + "px": r) : t
                }
            }
        })
    }),
    ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display"))
    },
    ct.expr.filters.visible = function(e) {
        return ! ct.expr.filters.hidden(e)
    }),
    ct.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        ct.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0,
                i = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Nn[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        yn.test(e) || (ct.cssHooks[e + t].set = k)
    });
    var En = /%20/g,
    Sn = /\[\]$/,
    An = /\r?\n/g,
    jn = /^(?:submit|button|image|reset|file)$/i,
    Dn = /^(?:input|select|textarea|keygen)/i;
    ct.fn.extend({
        serialize: function() {
            return ct.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ct.prop(this, "elements");
                return e ? ct.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ct(this).is(":disabled") && Dn.test(this.nodeName) && !jn.test(e) && (this.checked || !tn.test(e))
            }).map(function(e, t) {
                var n = ct(this).val();
                return null == n ? null: ct.isArray(n) ? ct.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(An, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(An, "\r\n")
                }
            }).get()
        }
    }),
    ct.param = function(e, n) {
        var r, i = [],
        o = function(e, t) {
            t = ct.isFunction(t) ? t() : null == t ? "": t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e)) ct.each(e,
        function() {
            o(this.name, this.value)
        });
        else for (r in e) D(r, e[r], n, o);
        return i.join("&").replace(En, "+")
    },
    ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        ct.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    ct.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Ln, Hn, qn = ct.now(),
    _n = /\?/,
    Mn = /#.*$/,
    On = /([?&])_=[^&]*/,
    Fn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Pn = /^(?:GET|HEAD)$/,
    Rn = /^\/\//,
    Wn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    $n = ct.fn.load,
    In = {},
    zn = {},
    Xn = "*/".concat("*");
    try {
        Hn = J.href
    } catch(Un) {
        Hn = G.createElement("a"),
        Hn.href = "",
        Hn = Hn.href
    }
    Ln = Wn.exec(Hn.toLowerCase()) || [],
    ct.fn.load = function(e, n, r) {
        if ("string" != typeof e && $n) return $n.apply(this, arguments);
        var i, o, a, s = this,
        u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)),
        ct.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"),
        s.length > 0 && ct.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments,
            s.html(i ? ct("<div>").append(ct.parseHTML(e)).find(i) : e)
        }).complete(r &&
        function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }),
        this
    },
    ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        ct.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ct.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Hn,
            type: "GET",
            isLocal: Bn.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ct.parseJSON,
                "text xml": ct.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? q(q(e, ct.ajaxSettings), t) : q(ct.ajaxSettings, e)
        },
        ajaxPrefilter: L(In),
        ajaxTransport: L(zn),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, f, v, b, T, C = n;
                2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", w.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && (b = _(p, w, r)), b = M(p, b, w, o), o ? (p.ifModified && (T = w.getResponseHeader("Last-Modified"), T && (ct.lastModified[a] = T), T = w.getResponseHeader("etag"), T && (ct.etag[a] = T)), 204 === e || "HEAD" === p.type ? C = "nocontent": 304 === e ? C = "notmodified": (C = b.state, f = b.data, v = b.error, o = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || C) + "", o ? g.resolveWith(d, [f, C, w]) : g.rejectWith(d, [w, C, v]), w.statusCode(y), y = t, l && h.trigger(o ? "ajaxSuccess": "ajaxError", [w, p, o ? f: v]), m.fireWith(d, [w, C]), l && (h.trigger("ajaxComplete", [w, p]), --ct.active || ct.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t),
            n = n || {};
            var i, o, a, s, u, l, c, f, p = ct.ajaxSetup({},
            n),
            d = p.context || p,
            h = p.context && (d.nodeType || d.jquery) ? ct(d) : ct.event,
            g = ct.Deferred(),
            m = ct.Callbacks("once memory"),
            y = p.statusCode || {},
            v = {},
            b = {},
            x = 0,
            T = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!f) for (f = {}; t = Fn.exec(s);) f[t[1].toLowerCase()] = t[2];
                        t = f[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > x) for (t in e) y[t] = [y[t], e[t]];
                    else w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return c && c.abort(t),
                    r(0, t),
                    this
                }
            };
            if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || Hn) + "").replace(Mn, "").replace(Rn, Ln[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ct.trim(p.dataType || "*").toLowerCase().match(pt) || [""], null == p.crossDomain && (i = Wn.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ("http:" === i[1] ? "80": "443")) === (Ln[3] || ("http:" === Ln[1] ? "80": "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ct.param(p.data, p.traditional)), H(In, p, n, w), 2 === x) return w;
            l = p.global,
            l && 0 === ct.active++&&ct.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Pn.test(p.type),
            a = p.url,
            p.hasContent || (p.data && (a = p.url += (_n.test(a) ? "&": "?") + p.data, delete p.data), p.cache === !1 && (p.url = On.test(a) ? a.replace(On, "$1_=" + qn++) : a + (_n.test(a) ? "&": "?") + "_=" + qn++)),
            p.ifModified && (ct.lastModified[a] && w.setRequestHeader("If-Modified-Since", ct.lastModified[a]), ct.etag[a] && w.setRequestHeader("If-None-Match", ct.etag[a])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType),
            w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xn + "; q=0.01": "") : p.accepts["*"]);
            for (o in p.headers) w.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === x)) return w.abort();
            T = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) w[o](p[o]);
            if (c = H(zn, p, n, w)) {
                w.readyState = 1,
                l && h.trigger("ajaxSend", [w, p]),
                p.async && p.timeout > 0 && (u = setTimeout(function() {
                    w.abort("timeout")
                },
                p.timeout));
                try {
                    x = 1,
                    c.send(v, r)
                } catch(C) {
                    if (! (2 > x)) throw C;
                    r( - 1, C)
                }
            } else r( - 1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return ct.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return ct.get(e, t, n, "script")
        }
    }),
    ct.each(["get", "post"],
    function(e, n) {
        ct[n] = function(e, r, i, o) {
            return ct.isFunction(r) && (o = o || i, i = r, r = t),
            ct.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }),
    ct.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ct.globalEval(e),
                e
            }
        }
    }),
    ct.ajaxPrefilter("script",
    function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    ct.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var n, r = G.head || ct("head")[0] || G.documentElement;
            return {
                send: function(t, i) {
                    n = G.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    },
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Vn = [],
    Yn = /(=)\?(?=&|$)|\?\?/;
    ct.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vn.pop() || ct.expando + "_" + qn++;
            return this[e] = !0,
            e
        }
    }),
    ct.ajaxPrefilter("json jsonp",
    function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Yn.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Yn, "$1" + o) : n.jsonp !== !1 && (n.url += (_n.test(n.url) ? "&": "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || ct.error(o + " was not called"),
            s[0]
        },
        n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        },
        i.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = r.jsonpCallback, Vn.push(o)),
            s && ct.isFunction(a) && a(s[0]),
            s = a = t
        }), "script") : t
    });
    var Jn, Gn, Qn = 0,
    Kn = e.ActiveXObject &&
    function() {
        var e;
        for (e in Jn) Jn[e](t, !0)
    };
    ct.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return ! this.isLocal && O() || F()
    }: O,
    Gn = ct.ajaxSettings.xhr(),
    ct.support.cors = !!Gn && "withCredentials" in Gn,
    Gn = ct.support.ajax = !!Gn,
    Gn && ct.ajaxTransport(function(n) {
        if (!n.crossDomain || ct.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch(l) {}
                    u.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var s, l, c, f;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = ct.noop, Kn && delete Jn[a]), i) 4 !== u.readyState && u.abort();
                            else {
                                f = {},
                                s = u.status,
                                l = u.getAllResponseHeaders(),
                                "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    c = u.statusText
                                } catch(p) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch(d) {
                            i || o( - 1, d)
                        }
                        f && o(s, c, f, l)
                    },
                    n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Qn, Kn && (Jn || (Jn = {},
                    ct(e).unload(Kn)), Jn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/,
    nr = RegExp("^(?:([+-])=|)(" + ft + ")([a-z%]*)$", "i"),
    rr = /queueHooks$/,
    ir = [$],
    or = {
        "*": [function(e, t) {
            var n = this.createTween(e, t),
            r = n.cur(),
            i = nr.exec(t),
            o = i && i[3] || (ct.cssNumber[e] ? "": "px"),
            a = (ct.cssNumber[e] || "px" !== o && +r) && nr.exec(ct.css(n.elem, e)),
            s = 1,
            u = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                i = i || [],
                a = +r || 1;
                do s = s || ".5",
                a /= s,
                ct.style(n.elem, e, a + o);
                while (s !== (s = n.cur() / r) && 1 !== s && --u)
            }
            return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
            n
        }]
    };
    ct.Animation = ct.extend(R, {
        tweener: function(e, t) {
            ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0,
            i = e.length; i > r; r++) n = e[r],
            or[n] = or[n] || [],
            or[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? ir.unshift(e) : ir.push(e)
        }
    }),
    ct.Tween = I,
    I.prototype = {
        constructor: I,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (ct.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = I.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : I.propHooks._default.set(this),
            this
        }
    },
    I.prototype.init.prototype = I.prototype,
    I.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ct.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = ct.fn[t];
        ct.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, r, i)
        }
    }),
    ct.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(C).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = ct.isEmptyObject(e),
            o = ct.speed(t, n, r),
            a = function() {
                var t = R(this, ct.extend({},
                e), o); (i || ct._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                n = null != e && e + "queueHooks",
                o = ct.timers,
                a = ct._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else for (n in a) a[n] && a[n].stop && rr.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && ct.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = ct._data(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = ct.timers,
                a = r ? r.length: 0;
                for (n.finish = !0, ct.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    ct.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        ct.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    ct.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ct.extend({},
        e) : {
            complete: n || !n && t || ct.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ct.isFunction(t) && t
        };
        return r.duration = ct.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in ct.fx.speeds ? ct.fx.speeds[r.duration] : ct.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            ct.isFunction(r.old) && r.old.call(this),
            r.queue && ct.dequeue(this, r.queue)
        },
        r
    },
    ct.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    ct.timers = [],
    ct.fx = I.prototype.init,
    ct.fx.tick = function() {
        var e, n = ct.timers,
        r = 0;
        for (Zn = ct.now(); n.length > r; r++) e = n[r],
        e() || n[r] !== e || n.splice(r--, 1);
        n.length || ct.fx.stop(),
        Zn = t
    },
    ct.fx.timer = function(e) {
        e() && ct.timers.push(e) && ct.fx.start()
    },
    ct.fx.interval = 13,
    ct.fx.start = function() {
        er || (er = setInterval(ct.fx.tick, ct.fx.interval))
    },
    ct.fx.stop = function() {
        clearInterval(er),
        er = null
    },
    ct.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ct.fx.step = {},
    ct.expr && ct.expr.filters && (ct.expr.filters.animated = function(e) {
        return ct.grep(ct.timers,
        function(t) {
            return e === t.elem
        }).length
    }),
    ct.fn.offset = function(e) {
        if (arguments.length) return e === t ? this: this.each(function(t) {
            ct.offset.setOffset(this, e, t)
        });
        var n, r, i = {
            top: 0,
            left: 0
        },
        o = this[0],
        a = o && o.ownerDocument;
        return a ? (n = a.documentElement, ct.contains(n, o) ? (typeof o.getBoundingClientRect !== Y && (i = o.getBoundingClientRect()), r = X(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i) : void 0
    },
    ct.offset = {
        setOffset: function(e, t, n) {
            var r = ct.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ct(e),
            s = a.offset(),
            u = ct.css(e, "top"),
            l = ct.css(e, "left"),
            c = ("absolute" === r || "fixed" === r) && ct.inArray("auto", [u, l]) > -1,
            f = {},
            p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0),
            ct.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + i),
            null != t.left && (f.left = t.left - s.left + o),
            "using" in t ? t.using.call(e, f) : a.css(f)
        }
    },
    ct.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === ct.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - ct.css(r, "marginTop", !0),
                    left: t.left - n.left - ct.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Q; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");) e = e.offsetParent;
                return e || Q
            })
        }
    }),
    ct.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, n) {
        var r = /Y/.test(n);
        ct.fn[e] = function(i) {
            return ct.access(this,
            function(e, i, o) {
                var a = X(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ct(a).scrollLeft() : o, r ? o: ct(a).scrollTop()) : e[i] = o, t)
            },
            e, i, arguments.length, null)
        }
    }),
    ct.each({
        Height: "height",
        Width: "width"
    },
    function(e, n) {
        ct.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        },
        function(r, i) {
            ct.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                s = r || (i === !0 || o === !0 ? "margin": "border");
                return ct.access(this,
                function(n, r, i) {
                    var o;
                    return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ct.css(n, r, s) : ct.style(n, r, i, s)
                },
                n, a ? i: t, a, null)
            }
        })
    }),
    ct.fn.size = function() {
        return this.length
    },
    ct.fn.andSelf = ct.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct: (e.jQuery = e.$ = ct, "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return ct
    }))
} (window);;
void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
function(e, t, n) {
    function r(n) {
        var r = t.console;
        i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
    }
    function a(t, a, i, o) {
        if (Object.defineProperty) try {
            return Object.defineProperty(t, a, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return r(o),
                    i
                },
                set: function(e) {
                    r(o),
                    i = e
                }
            }),
            n
        } catch(s) {}
        e._definePropertyBroken = !0,
        t[a] = i
    }
    var i = {};
    e.migrateWarnings = [],
    !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"),
    e.migrateTrace === n && (e.migrateTrace = !0),
    e.migrateReset = function() {
        i = {},
        e.migrateWarnings.length = 0
    },
    "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var o = e("<input/>", {
        size: 1
    }).attr("size") && e.attrFn,
    s = e.attr,
    u = e.attrHooks.value && e.attrHooks.value.get ||
    function() {
        return null
    },
    c = e.attrHooks.value && e.attrHooks.value.set ||
    function() {
        return n
    },
    l = /^(?:input|button)$/i,
    d = /^[238]$/,
    p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    f = /^(?:checked|selected)$/i;
    a(e, "attrFn", o || {},
    "jQuery.attrFn is deprecated"),
    e.attr = function(t, a, i, u) {
        var c = a.toLowerCase(),
        g = t && t.nodeType;
        return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o: e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
            get: function(t, r) {
                var a, i = e.prop(t, r);
                return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
            },
            set: function(t, n, r) {
                var a;
                return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())),
                r
            }
        },
        f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
    },
    e.attrHooks.value = {
        get: function(e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value: null)
        },
        set: function(e, t) {
            var a = (e.nodeName || "").toLowerCase();
            return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
        }
    };
    var g, h, v = e.fn.init,
    m = e.parseJSON,
    y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, n, a) {
        var i;
        return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
    },
    e.fn.init.prototype = e.fn,
    e.parseJSON = function(e) {
        return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
    },
    e.uaMatch = function(e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
    },
    e.browser || (g = e.uaMatch(navigator.userAgent), h = {},
    g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h),
    a(e, "browser", e.browser, "jQuery.browser is deprecated"),
    e.sub = function() {
        function t(e, n) {
            return new t.fn.init(e, n)
        }
        e.extend(!0, t, this),
        t.superclass = this,
        t.fn = t.prototype = this(),
        t.fn.constructor = t,
        t.sub = this.sub,
        t.fn.init = function(r, a) {
            return a && a instanceof e && !(a instanceof t) && (a = t(a)),
            e.fn.init.call(this, r, a, n)
        },
        t.fn.init.prototype = t.fn;
        var n = t(document);
        return r("jQuery.sub() is deprecated"),
        t
    },
    e.ajaxSetup({
        converters: {
            "text json": e.parseJSON
        }
    });
    var b = e.fn.data;
    e.fn.data = function(t) {
        var a, i, o = this[0];
        return ! o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
    };
    var j = /\/(java|ecma)script/i,
    w = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        w.apply(this, arguments)
    },
    e.clean || (e.clean = function(t, a, i, o) {
        a = a || document,
        a = !a.nodeType && a[0] || a,
        a = a.ownerDocument || a,
        r("jQuery.clean() is deprecated");
        var s, u, c, l, d = [];
        if (e.merge(d, e.buildFragment(t, a).childNodes), i) for (c = function(e) {
            return ! e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
        },
        s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
        return d
    });
    var Q = e.event.add,
    x = e.event.remove,
    k = e.event.trigger,
    N = e.fn.toggle,
    T = e.fn.live,
    M = e.fn.die,
    S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
    C = RegExp("\\b(?:" + S + ")\\b"),
    H = /(?:^|\s)hover(\.\S+|)\b/,
    A = function(t) {
        return "string" != typeof t || e.event.special.hover ? t: (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
    };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"),
    e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"),
    e.event.add = function(e, t, n, a, i) {
        e !== document && C.test(t) && r("AJAX events should be attached to document: " + t),
        Q.call(this, e, A(t || ""), n, a, i)
    },
    e.event.remove = function(e, t, n, r, a) {
        x.call(this, e, A(t) || "", n, r, a)
    },
    e.fn.error = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        return r("jQuery.fn.error() is deprecated"),
        e.splice(0, 0, "error"),
        arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
    },
    e.fn.toggle = function(t, n) {
        if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var a = arguments,
        i = t.guid || e.guid++,
        o = 0,
        s = function(n) {
            var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
            return e._data(this, "lastToggle" + t.guid, r + 1),
            n.preventDefault(),
            a[r].apply(this, arguments) || !1
        };
        for (s.guid = i; a.length > o;) a[o++].guid = i;
        return this.click(s)
    },
    e.fn.live = function(t, n, a) {
        return r("jQuery.fn.live() is deprecated"),
        T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
    },
    e.fn.die = function(t, n) {
        return r("jQuery.fn.die() is deprecated"),
        M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
    },
    e.event.trigger = function(e, t, n, a) {
        return n || C.test(e) || r("Global events are undocumented and deprecated"),
        k.call(this, e, t, n || document, a)
    },
    e.each(S.split("|"),
    function(t, n) {
        e.event.special[n] = {
            setup: function() {
                var t = this;
                return t !== document && (e.event.add(document, n + "." + e.guid,
                function() {
                    e.event.trigger(n, null, t, !0)
                }), e._data(this, n, e.guid++)),
                !1
            },
            teardown: function() {
                return this !== document && e.event.remove(document, n + "." + e._data(this, n)),
                !1
            }
        }
    })
} (jQuery, window);;
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"),
        e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e) if (void 0 !== t.style[i]) return {
            end: e[i]
        };
        return ! 1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
        o = this;
        t(this).one(t.support.transition.end,
        function() {
            i = !0
        });
        var n = function() {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(n, e),
        this
    },
    t(function() {
        t.support.transition = e()
    })
} (jQuery),
+
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
    i = function(i) {
        t(i).on("click", e, this.close)
    };
    i.prototype.close = function(e) {
        function i() {
            s.trigger("closed.bs.alert").remove()
        }
        var o = t(this),
        n = o.attr("data-target");
        n || (n = o.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(n);
        e && e.preventDefault(),
        s.length || (s = o.hasClass("alert") ? o: o.parent()),
        s.trigger(e = t.Event("close.bs.alert")),
        e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one(t.support.transition.end, i).emulateTransitionEnd(150) : i())
    };
    var o = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var o = t(this),
            n = o.data("bs.alert");
            n || o.data("bs.alert", n = new i(this)),
            "string" == typeof e && n[e].call(o)
        })
    },
    t.fn.alert.Constructor = i,
    t.fn.alert.noConflict = function() {
        return t.fn.alert = o,
        this
    },
    t(document).on("click.bs.alert.data-api", e, i.prototype.close)
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(i, o) {
        this.$element = t(i),
        this.options = t.extend({},
        e.DEFAULTS, o),
        this.isLoading = !1
    };
    e.DEFAULTS = {
        loadingText: "loading..."
    },
    e.prototype.setState = function(e) {
        var i = "disabled",
        o = this.$element,
        n = o.is("input") ? "val": "html",
        s = o.data();
        e += "Text",
        s.resetText || o.data("resetText", o[n]()),
        o[n](s[e] || this.options[e]),
        setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
        },
        this), 0)
    },
    e.prototype.toggle = function() {
        var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")),
            t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = function(i) {
        return this.each(function() {
            var o = t(this),
            n = o.data("bs.button"),
            s = "object" == typeof i && i;
            n || o.data("bs.button", n = new e(this, s)),
            "toggle" == i ? n.toggle() : i && n.setState(i)
        })
    },
    t.fn.button.Constructor = e,
    t.fn.button.noConflict = function() {
        return t.fn.button = i,
        this
    },
    t(document).on("click.bs.button.data-api", "[data-toggle^=button]",
    function(e) {
        var i = t(e.target);
        i.hasClass("btn") || (i = i.closest(".btn")),
        i.button("toggle"),
        e.preventDefault()
    })
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = i,
        this.paused = this.sliding = this.interval = this.$active = this.$items = null,
        "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    },
    e.prototype.cycle = function(e) {
        return e || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
        this
    },
    e.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"),
        this.$items = this.$active.parent().children(),
        this.$items.index(this.$active)
    },
    e.prototype.to = function(e) {
        var i = this,
        o = this.getActiveIndex();
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel",
        function() {
            i.to(e)
        }) : o == e ? this.pause().cycle() : this.slide(e > o ? "next": "prev", t(this.$items[e]))
    },
    e.prototype.pause = function(e) {
        return e || (this.paused = !0),
        this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    },
    e.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    },
    e.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    },
    e.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active"),
        n = i || o[e](),
        s = this.interval,
        a = "next" == e ? "left": "right",
        r = "next" == e ? "first": "last",
        l = this;
        if (!n.length) {
            if (!this.options.wrap) return;
            n = this.$element.find(".item")[r]()
        }
        if (n.hasClass("active")) return this.sliding = !1;
        var h = t.Event("slide.bs.carousel", {
            relatedTarget: n[0],
            direction: a
        });
        return this.$element.trigger(h),
        h.isDefaultPrevented() ? void 0 : (this.sliding = !0, s && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel",
        function() {
            var e = t(l.$indicators.children()[l.getActiveIndex()]);
            e && e.addClass("active")
        })), t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, o.addClass(a), n.addClass(a), o.one(t.support.transition.end,
        function() {
            n.removeClass([e, a].join(" ")).addClass("active"),
            o.removeClass(["active", a].join(" ")),
            l.sliding = !1,
            setTimeout(function() {
                l.$element.trigger("slid.bs.carousel")
            },
            0)
        }).emulateTransitionEnd(1e3 * o.css("transition-duration").slice(0, -1))) : (o.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), s && this.cycle(), this)
    };
    var i = t.fn.carousel;
    t.fn.carousel = function(i) {
        return this.each(function() {
            var o = t(this),
            n = o.data("bs.carousel"),
            s = t.extend({},
            e.DEFAULTS, o.data(), "object" == typeof i && i),
            a = "string" == typeof i ? i: s.slide;
            n || o.data("bs.carousel", n = new e(this, s)),
            "number" == typeof i ? n.to(i) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    },
    t.fn.carousel.Constructor = e,
    t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i,
        this
    },
    t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]",
    function(e) {
        var i, o = t(this),
        n = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")),
        s = t.extend({},
        n.data(), o.data()),
        a = o.attr("data-slide-to");
        a && (s.interval = !1),
        n.carousel(s),
        (a = o.attr("data-slide-to")) && n.data("bs.carousel").to(a),
        e.preventDefault()
    }),
    t(window).on("load",
    function() {
        t('[data-ride="carousel"]').each(function() {
            var e = t(this);
            e.carousel(e.data())
        })
    })
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(i, o) {
        this.$element = t(i),
        this.options = t.extend({},
        e.DEFAULTS, o),
        this.transitioning = null,
        this.options.parent && (this.$parent = t(this.options.parent)),
        this.options.toggle && this.toggle()
    };
    e.DEFAULTS = {
        toggle: !0
    },
    e.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width": "height"
    },
    e.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e = t.Event("show.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var o = i.data("bs.collapse");
                    if (o && o.transitioning) return;
                    i.collapse("hide"),
                    o || i.data("bs.collapse", null)
                }
                var n = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[n](0),
                this.transitioning = 1;
                var s = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[n]("auto"),
                    this.transitioning = 0,
                    this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return s.call(this);
                var a = t.camelCase(["scroll", n].join("-"));
                this.$element.one(t.support.transition.end, t.proxy(s, this)).emulateTransitionEnd(350)[n](this.$element[0][a])
            }
        }
    },
    e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
                this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0,
                    this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[i](0).one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350) : o.call(this)
            }
        }
    },
    e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    };
    var i = t.fn.collapse;
    t.fn.collapse = function(i) {
        return this.each(function() {
            var o = t(this),
            n = o.data("bs.collapse"),
            s = t.extend({},
            e.DEFAULTS, o.data(), "object" == typeof i && i); ! n && s.toggle && "show" == i && (i = !i),
            n || o.data("bs.collapse", n = new e(this, s)),
            "string" == typeof i && n[i]()
        })
    },
    t.fn.collapse.Constructor = e,
    t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i,
        this
    },
    t(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]",
    function(e) {
        var i, o = t(this),
        n = o.attr("data-target") || e.preventDefault() || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
        s = t(n),
        a = s.data("bs.collapse"),
        r = a ? "toggle": o.data(),
        l = o.attr("data-parent"),
        h = l && t(l);
        a && a.transitioning || (h && h.find('[data-toggle=collapse][data-parent="' + l + '"]').not(o).addClass("collapsed"), o[s.hasClass("in") ? "addClass": "removeClass"]("collapsed")),
        s.collapse(r)
    })
} (jQuery),
+
function(t) {
    "use strict";
    function e(e) {
        t(o).remove(),
        t(n).each(function() {
            var o = i(t(this)),
            n = {
                relatedTarget: this
            };
            o.hasClass("open") && (o.trigger(e = t.Event("hide.bs.dropdown", n)), e.isDefaultPrevented() || o.removeClass("open").trigger("hidden.bs.dropdown", n))
        })
    }
    function i(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o: e.parent()
    }
    var o = ".dropdown-backdrop",
    n = "[data-toggle=dropdown]",
    s = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    s.prototype.toggle = function(o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = i(n),
            a = s.hasClass("open");
            if (e(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var r = {
                    relatedTarget: this
                };
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                s.toggleClass("open").trigger("shown.bs.dropdown", r),
                n.focus()
            }
            return ! 1
        }
    },
    s.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var o = t(this);
            if (e.preventDefault(), e.stopPropagation(), !o.is(".disabled, :disabled")) {
                var s = i(o),
                a = s.hasClass("open");
                if (!a || a && 27 == e.keyCode) return 27 == e.which && s.find(n).focus(),
                o.click();
                var r = " li:not(.divider):visible a",
                l = s.find("[role=menu]" + r + ", [role=listbox]" + r);
                if (l.length) {
                    var h = l.index(l.filter(":focus"));
                    38 == e.keyCode && h > 0 && h--,
                    40 == e.keyCode && h < l.length - 1 && h++,
                    ~h || (h = 0),
                    l.eq(h).focus()
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this),
            o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new s(this)),
            "string" == typeof e && o[e].call(i)
        })
    },
    t.fn.dropdown.Constructor = s,
    t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a,
        this
    },
    t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form",
    function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", n, s.prototype.toggle).on("keydown.bs.dropdown.data-api", n + ", [role=menu], [role=listbox]", s.prototype.keydown)
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(e, i) {
        this.options = i,
        this.$element = t(e),
        this.$backdrop = this.isShown = null,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        },
        this))
    };
    e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    e.prototype.toggle = function(t) {
        return this[this.isShown ? "hide": "show"](t)
    },
    e.prototype.show = function(e) {
        var i = this,
        o = t.Event("show.bs.modal", {
            relatedTarget: e
        });
        this.$element.trigger(o),
        this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(document.body),
            i.$element.show().scrollTop(0),
            o && i.$element[0].offsetWidth,
            i.$element.addClass("in").attr("aria-hidden", !1),
            i.enforceFocus();
            var n = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$element.find(".modal-dialog").one(t.support.transition.end,
            function() {
                i.$element.focus().trigger(n)
            }).emulateTransitionEnd(300) : i.$element.focus().trigger(n)
        }))
    },
    e.prototype.hide = function(e) {
        e && e.preventDefault(),
        e = t.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    },
    e.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.focus()
        },
        this))
    },
    e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        },
        this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    },
    e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop(function() {
            t.removeBackdrop(),
            t.$element.trigger("hidden.bs.modal")
        })
    },
    e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    e.prototype.backdrop = function(e) {
        var i = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            },
            this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
        } else ! this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
    };
    var i = t.fn.modal;
    t.fn.modal = function(i, o) {
        return this.each(function() {
            var n = t(this),
            s = n.data("bs.modal"),
            a = t.extend({},
            e.DEFAULTS, n.data(), "object" == typeof i && i);
            s || n.data("bs.modal", s = new e(this, a)),
            "string" == typeof i ? s[i](o) : a.show && s.show(o)
        })
    },
    t.fn.modal.Constructor = e,
    t.fn.modal.noConflict = function() {
        return t.fn.modal = i,
        this
    },
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
    function(e) {
        var i = t(this),
        o = i.attr("href"),
        n = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
        s = n.data("bs.modal") ? "toggle": t.extend({
            remote: !/#/.test(o) && o
        },
        n.data(), i.data());
        i.is("a") && e.preventDefault(),
        n.modal(s, this).one("hide",
        function() {
            i.is(":visible") && i.focus()
        })
    }),
    t(document).on("show.bs.modal", ".modal",
    function() {
        t(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal",
    function() {
        t(document.body).removeClass("modal-open")
    })
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
        this.init("tooltip", t, e)
    };
    e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    },
    e.prototype.init = function(e, i, o) {
        this.enabled = !0,
        this.type = e,
        this.$element = t(i),
        this.options = this.getOptions(o);
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter": "focusin",
                l = "hover" == a ? "mouseleave": "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({},
        this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    },
    e.prototype.getDefaults = function() {
        return e.DEFAULTS
    },
    e.prototype.getOptions = function(e) {
        return e = t.extend({},
        this.getDefaults(), this.$element.data(), e),
        e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        e
    },
    e.prototype.getDelegateOptions = function() {
        var e = {},
        i = this.getDefaults();
        return this._options && t.each(this._options,
        function(t, o) {
            i[t] != o && (e[t] = o)
        }),
        e
    },
    e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e: t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout),
        i.hoverState = "in",
        i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        },
        i.options.delay.show)) : i.show()
    },
    e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e: t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout),
        i.hoverState = "out",
        i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        },
        i.options.delay.hide)) : i.hide()
    },
    e.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(e), e.isDefaultPrevented()) return;
            var i = this,
            o = this.tip();
            this.setContent(),
            this.options.animation && o.addClass("fade");
            var n = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
            s = /\s?auto?\s?/i,
            a = s.test(n);
            a && (n = n.replace(s, "") || "top"),
            o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(n),
            this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var r = this.getPosition(),
            l = o[0].offsetWidth,
            h = o[0].offsetHeight;
            if (a) {
                var p = this.$element.parent(),
                d = n,
                c = document.documentElement.scrollTop || document.body.scrollTop,
                f = "body" == this.options.container ? window.innerWidth: p.outerWidth(),
                u = "body" == this.options.container ? window.innerHeight: p.outerHeight(),
                v = "body" == this.options.container ? 0 : p.offset().left;
                n = "bottom" == n && r.top + r.height + h - c > u ? "top": "top" == n && r.top - c - h < 0 ? "bottom": "right" == n && r.right + l > f ? "left": "left" == n && r.left - l < v ? "right": n,
                o.removeClass(d).addClass(n)
            }
            var m = this.getCalculatedOffset(n, r, l, h);
            this.applyPlacement(m, n),
            this.hoverState = null;
            var g = function() {
                i.$element.trigger("shown.bs." + i.type)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one(t.support.transition.end, g).emulateTransitionEnd(150) : g()
        }
    },
    e.prototype.applyPlacement = function(e, i) {
        var o, n = this.tip(),
        s = n[0].offsetWidth,
        a = n[0].offsetHeight,
        r = parseInt(n.css("margin-top"), 10),
        l = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0),
        isNaN(l) && (l = 0),
        e.top = e.top + r,
        e.left = e.left + l,
        t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        },
        e), 0),
        n.addClass("in");
        var h = n[0].offsetWidth,
        p = n[0].offsetHeight;
        if ("top" == i && p != a && (o = !0, e.top = e.top + a - p), /bottom|top/.test(i)) {
            var d = 0;
            e.left < 0 && (d = -2 * e.left, e.left = 0, n.offset(e), h = n[0].offsetWidth, p = n[0].offsetHeight),
            this.replaceArrow(d - s + h, h, "left")
        } else this.replaceArrow(p - a, p, "top");
        o && n.offset(e)
    },
    e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%": "")
    },
    e.prototype.setContent = function() {
        var t = this.tip(),
        e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html": "text"](e),
        t.removeClass("fade in top bottom left right")
    },
    e.prototype.hide = function() {
        function e() {
            "in" != i.hoverState && o.detach(),
            i.$element.trigger("hidden.bs." + i.type)
        }
        var i = this,
        o = this.tip(),
        n = t.Event("hide.bs." + this.type);
        return this.$element.trigger(n),
        n.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? o.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    },
    e.prototype.fixTitle = function() {
        var t = this.$element; (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    },
    e.prototype.hasContent = function() {
        return this.getTitle()
    },
    e.prototype.getPosition = function() {
        var e = this.$element[0];
        return t.extend({},
        "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        },
        this.$element.offset())
    },
    e.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        }: "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        }: "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        }: {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    },
    e.prototype.getTitle = function() {
        var t, e = this.$element,
        i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    },
    e.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    },
    e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    e.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    },
    e.prototype.enable = function() {
        this.enabled = !0
    },
    e.prototype.disable = function() {
        this.enabled = !1
    },
    e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    },
    e.prototype.toggle = function(e) {
        var i = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    },
    e.prototype.destroy = function() {
        clearTimeout(this.timeout),
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var o = t(this),
            n = o.data("bs.tooltip"),
            s = "object" == typeof i && i; (n || "destroy" != i) && (n || o.data("bs.tooltip", n = new e(this, s)), "string" == typeof i && n[i]())
        })
    },
    t.fn.tooltip.Constructor = e,
    t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i,
        this
    }
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.DEFAULTS = t.extend({},
    t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    e.prototype = t.extend({},
    t.fn.tooltip.Constructor.prototype),
    e.prototype.constructor = e,
    e.prototype.getDefaults = function() {
        return e.DEFAULTS
    },
    e.prototype.setContent = function() {
        var t = this.tip(),
        e = this.getTitle(),
        i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html": "text"](e),
        t.find(".popover-content")[this.options.html ? "string" == typeof i ? "html": "append": "text"](i),
        t.removeClass("fade top bottom left right in"),
        t.find(".popover-title").html() || t.find(".popover-title").hide()
    },
    e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    },
    e.prototype.getContent = function() {
        var t = this.$element,
        e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    },
    e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    },
    e.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)),
        this.$tip
    };
    var i = t.fn.popover;
    t.fn.popover = function(i) {
        return this.each(function() {
            var o = t(this),
            n = o.data("bs.popover"),
            s = "object" == typeof i && i; (n || "destroy" != i) && (n || o.data("bs.popover", n = new e(this, s)), "string" == typeof i && n[i]())
        })
    },
    t.fn.popover.Constructor = e,
    t.fn.popover.noConflict = function() {
        return t.fn.popover = i,
        this
    }
} (jQuery),
+
function(t) {
    "use strict";
    function e(i, o) {
        var n, s = t.proxy(this.process, this);
        this.$element = t(t(i).is("body") ? window: i),
        this.$body = t("body"),
        this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", s),
        this.options = t.extend({},
        e.DEFAULTS, o),
        this.selector = (this.options.target || (n = t(i).attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a",
        this.offsets = t([]),
        this.targets = t([]),
        this.activeTarget = null,
        this.refresh(),
        this.process()
    }
    e.DEFAULTS = {
        offset: 10
    },
    e.prototype.refresh = function() {
        var e = this.$element[0] == window ? "offset": "position";
        this.offsets = t([]),
        this.targets = t([]);
        var i = this;
        this.$body.find(this.selector).map(function() {
            var o = t(this),
            n = o.data("target") || o.attr("href"),
            s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [[s[e]().top + (!t.isWindow(i.$scrollElement.get(0)) && i.$scrollElement.scrollTop()), n]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            i.offsets.push(this[0]),
            i.targets.push(this[1])
        })
    },
    e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
        i = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
        o = i - this.$scrollElement.height(),
        n = this.offsets,
        s = this.targets,
        a = this.activeTarget;
        if (e >= o) return a != (t = s.last()[0]) && this.activate(t);
        if (a && e <= n[0]) return a != (t = s[0]) && this.activate(t);
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (!n[t + 1] || e <= n[t + 1]) && this.activate(s[t])
    },
    e.prototype.activate = function(e) {
        this.activeTarget = e,
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
        o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")),
        o.trigger("activate.bs.scrollspy")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = function(i) {
        return this.each(function() {
            var o = t(this),
            n = o.data("bs.scrollspy"),
            s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)),
            "string" == typeof i && n[i]()
        })
    },
    t.fn.scrollspy.Constructor = e,
    t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i,
        this
    },
    t(window).on("load",
    function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };
    e.prototype.show = function() {
        var e = this.element,
        i = e.closest("ul:not(.dropdown-menu)"),
        o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a")[0],
            s = t.Event("show.bs.tab", {
                relatedTarget: n
            });
            if (e.trigger(s), !s.isDefaultPrevented()) {
                var a = t(o);
                this.activate(e.parent("li"), i),
                this.activate(a, a.parent(),
                function() {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n
                    })
                })
            }
        }
    },
    e.prototype.activate = function(e, i, o) {
        function n() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
            e.addClass("active"),
            a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"),
            o && o()
        }
        var s = i.find("> .active"),
        a = o && t.support.transition && s.hasClass("fade");
        a ? s.one(t.support.transition.end, n).emulateTransitionEnd(150) : n(),
        s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = function(i) {
        return this.each(function() {
            var o = t(this),
            n = o.data("bs.tab");
            n || o.data("bs.tab", n = new e(this)),
            "string" == typeof i && n[i]()
        })
    },
    t.fn.tab.Constructor = e,
    t.fn.tab.noConflict = function() {
        return t.fn.tab = i,
        this
    },
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]',
    function(e) {
        e.preventDefault(),
        t(this).tab("show")
    })
} (jQuery),
+
function(t) {
    "use strict";
    var e = function(i, o) {
        this.options = t.extend({},
        e.DEFAULTS, o),
        this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = t(i),
        this.affixed = this.unpin = this.pinnedOffset = null,
        this.checkPosition()
    };
    e.RESET = "affix affix-top affix-bottom",
    e.DEFAULTS = {
        offset: 0
    },
    e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$window.scrollTop(),
        i = this.$element.offset();
        return this.pinnedOffset = i.top - t
    },
    e.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    },
    e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var i = t(document).height(),
            o = this.$window.scrollTop(),
            n = this.$element.offset(),
            s = this.options.offset,
            a = s.top,
            r = s.bottom;
            "top" == this.affixed && (n.top += o),
            "object" != typeof s && (r = a = s),
            "function" == typeof a && (a = s.top(this.$element)),
            "function" == typeof r && (r = s.bottom(this.$element));
            var l = null != this.unpin && o + this.unpin <= n.top ? !1 : null != r && n.top + this.$element.height() >= i - r ? "bottom": null != a && a >= o ? "top": !1;
            if (this.affixed !== l) {
                this.unpin && this.$element.css("top", "");
                var h = "affix" + (l ? "-" + l: ""),
                p = t.Event(h + ".bs.affix");
                this.$element.trigger(p),
                p.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(h).trigger(t.Event(h.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: i - r - this.$element.height()
                }))
            }
        }
    };
    var i = t.fn.affix;
    t.fn.affix = function(i) {
        return this.each(function() {
            var o = t(this),
            n = o.data("bs.affix"),
            s = "object" == typeof i && i;
            n || o.data("bs.affix", n = new e(this, s)),
            "string" == typeof i && n[i]()
        })
    },
    t.fn.affix.Constructor = e,
    t.fn.affix.noConflict = function() {
        return t.fn.affix = i,
        this
    },
    t(window).on("load",
    function() {
        t('[data-spy="affix"]').each(function() {
            var e = t(this),
            i = e.data();
            i.offset = i.offset || {},
            i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            i.offsetTop && (i.offset.top = i.offsetTop),
            e.affix(i)
        })
    })
} (jQuery);; !
function(e, n) {
    var t = e();
    e.fn.dropdownHover = function(s) {
        return t = t.add(this.parent()),
        this.each(function() {
            var a, d = e(this),
            i = d.parent(),
            r = {
                delay: 500,
                instantlyCloseOthers: !0
            },
            h = {
                delay: e(this).data("delay"),
                instantlyCloseOthers: e(this).data("close-others")
            },
            l = e.extend(!0, {},
            r, s, h);
            i.hover(function(e) {
                return i.hasClass("open") || d.is(e.target) ? void(o && (l.instantlyCloseOthers === !0 && t.removeClass("open"), n.clearTimeout(a), i.addClass("open"))) : !0
            },
            function() {
                o && (a = n.setTimeout(function() {
                    i.removeClass("open")
                },
                l.delay))
            }),
            d.hover(function() {
                o && (l.instantlyCloseOthers === !0 && t.removeClass("open"), n.clearTimeout(a), i.addClass("open"))
            }),
            i.find(".dropdown-submenu").each(function() {
                var t, s = e(this);
                s.hover(function() {
                    o && (n.clearTimeout(t), s.children(".dropdown-menu").show(), s.siblings().children(".dropdown-menu").hide())
                },
                function() {
                    var e = s.children(".dropdown-menu");
                    o ? t = n.setTimeout(function() {
                        e.hide()
                    },
                    l.delay) : e.hide()
                })
            })
        })
    };
    var o = !1,
    s = {
        hits: 0,
        x: null,
        y: null
    };
    e(document).ready(function() {
        e('[data-hover="dropdown"]').dropdownHover(),
        e(document).mousemove(function(n) {
            s.hits++,
            s.hits > 20 || Math.abs(n.pageX - s.x) + Math.abs(n.pageY - s.y) < 4 ? (e(this).unbind(n), o = !0) : (s.x = n.pageX, s.y = n.pageY)
        })
    });
    var a = ".dropdown-submenu:hover>.dropdown-menu{display:none}",
    d = document.createElement("style");
    d.type = "text/css",
    d.styleSheet ? d.styleSheet.cssText = a: d.appendChild(document.createTextNode(a)),
    e("head")[0].appendChild(d)
} (jQuery, this);;
jQuery.extend({
    createUploadIframe: function(e, t) {
        var r = "jUploadFrame" + e,
        a = '<iframe id="' + r + '" name="' + r + '" style="position:absolute; top:-9999px; left:-9999px"';
        return window.ActiveXObject && ("boolean" == typeof t ? a += ' src="javascript:false"': "string" == typeof t && (a += ' src="' + t + '"')),
        a += " />",
        jQuery(a).appendTo(document.body),
        jQuery("#" + r).get(0)
    },
    createUploadForm: function(e, t, r) {
        var a = "jUploadForm" + e,
        n = "jUploadFile" + e,
        o = jQuery('<form  action="" method="POST" name="' + a + '" id="' + a + '" enctype="multipart/form-data"></form>');
        if (r) for (var u in r) jQuery('<input type="hidden" name="' + u + '" value="' + r[u] + '" />').appendTo(o);
        var d = jQuery("#" + t),
        c = d.attr("onchange");
        d.attr("onchange", "");
        var l = jQuery(d).clone();
        return d.attr("onchange", c),
        l.attr("onchange", c),
        jQuery(d).attr("id", n),
        jQuery(d).before(l),
        jQuery(d).appendTo(o),
        jQuery(o).css("position", "absolute"),
        jQuery(o).css("top", "-1200px"),
        jQuery(o).css("left", "-1200px"),
        jQuery(o).appendTo("body"),
        o
    },
    ajaxFileUpload: function(e) {
        e = jQuery.extend({},
        jQuery.ajaxSettings, e);
        var t = (new Date).getTime(),
        r = jQuery.createUploadForm(t, e.fileElementId, "undefined" == typeof e.data ? !1 : e.data),
        a = (jQuery.createUploadIframe(t, e.secureuri), "jUploadFrame" + t),
        n = "jUploadForm" + t;
        e.global && !jQuery.active++&&jQuery.event.trigger("ajaxStart");
        var o = !1,
        u = {};
        e.global && jQuery.event.trigger("ajaxSend", [u, e]);
        var d = function(t) {
            var n = document.getElementById(a);
            try {
                n.contentWindow ? (u.responseText = n.contentWindow.document.body ? n.contentWindow.document.body.innerHTML: null, u.responseXML = n.contentWindow.document.XMLDocument ? n.contentWindow.document.XMLDocument: n.contentWindow.document) : n.contentDocument && (u.responseText = n.contentDocument.document.body ? n.contentDocument.document.body.innerHTML: null, u.responseXML = n.contentDocument.document.XMLDocument ? n.contentDocument.document.XMLDocument: n.contentDocument.document)
            } catch(d) {
                jQuery.handleError(e, u, null, d)
            }
            if (u || "timeout" == t) {
                o = !0;
                var c;
                try {
                    if (c = "timeout" != t ? "success": "error", "error" != c) {
                        var l = jQuery.uploadHttpData(u, e.dataType);
                        e.success && e.success(l, c),
                        e.global && jQuery.event.trigger("ajaxSuccess", [u, e])
                    } else jQuery.handleError(e, u, c)
                } catch(d) {
                    c = "error",
                    jQuery.handleError(e, u, c, d)
                }
                e.global && jQuery.event.trigger("ajaxComplete", [u, e]),
                e.global && !--jQuery.active && jQuery.event.trigger("ajaxStop"),
                e.complete && e.complete(u, c),
                jQuery(n).unbind(),
                setTimeout(function() {
                    try {
                        jQuery(n).remove(),
                        jQuery(r).remove()
                    } catch(t) {
                        jQuery.handleError(e, u, null, t)
                    }
                },
                100),
                u = null
            }
        };
        e.timeout > 0 && setTimeout(function() {
            o || d("timeout")
        },
        e.timeout);
        try {
            var r = jQuery("#" + n);
            jQuery(r).attr("action", e.url),
            jQuery(r).attr("method", "POST"),
            jQuery(r).attr("target", a),
            r.encoding ? jQuery(r).attr("encoding", "multipart/form-data") : jQuery(r).attr("enctype", "multipart/form-data"),
            jQuery(r).submit()
        } catch(c) {
            jQuery.handleError(e, u, null, c)
        }
        return jQuery("#" + a).load(d),
        {
            abort: function() {}
        }
    },
    uploadHttpData: function(r, type) {
        var data = !type;
        return data = "xml" == type || data ? r.responseXML: r.responseText,
        "script" == type && jQuery.globalEval(data),
        "json" == type && data.length > data.indexOf("}") + 1 && (data = data.substr(data.indexOf("{"), data.indexOf("}"))),
        data.length > data.indexOf("}") + 1 && (data = data.substr(data.indexOf("{"), data.indexOf("}") + 1)),
        data = eval("(" + data.replace("<pre>", "").replace("</pre>", "").replace("</pr", "") + ")"),
        "html" == type && jQuery("<div>").html(data).evalScripts(),
        data
    },
    handleError: function(e, t, r, a) {
        e.error && e.error.call(e.context || e, t, r, a),
        e.global && (e.context ? jQuery(e.context) : jQuery.event).trigger("ajaxError", [t, e, a])
    }
});; !
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
} (function(e) {
    function n(e) {
        return u.raw ? e: encodeURIComponent(e)
    }
    function o(e) {
        return u.raw ? e: decodeURIComponent(e)
    }
    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }
    function r(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(c, " ")),
            u.json ? JSON.parse(e) : e
        } catch(n) {}
    }
    function t(n, o) {
        var i = u.raw ? n: r(n);
        return e.isFunction(o) ? o(i) : i
    }
    var c = /\+/g,
    u = e.cookie = function(r, c, f) {
        if (void 0 !== c && !e.isFunction(c)) {
            if (f = e.extend({},
            u.defaults, f), "number" == typeof f.expires) {
                var a = f.expires,
                d = f.expires = new Date;
                d.setTime( + d + 864e5 * a)
            }
            return document.cookie = [n(r), "=", i(c), f.expires ? "; expires=" + f.expires.toUTCString() : "", f.path ? "; path=" + f.path: "", f.domain ? "; domain=" + f.domain: "", f.secure ? "; secure": ""].join("")
        }
        for (var p = r ? void 0 : {},
        s = document.cookie ? document.cookie.split("; ") : [], m = 0, x = s.length; x > m; m++) {
            var v = s[m].split("="),
            k = o(v.shift()),
            l = v.join("=");
            if (r && r === k) {
                p = t(l, c);
                break
            }
            r || void 0 === (l = t(l)) || (p[k] = l)
        }
        return p
    };
    u.defaults = {},
    e.removeCookie = function(n, o) {
        return void 0 === e.cookie(n) ? !1 : (e.cookie(n, "", e.extend({},
        o, {
            expires: -1
        })), !e.cookie(n))
    }
});; !
function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (!this.length) return void(e && e.debug && window.console && console.warn("nothing selected, can't validate, returning nothing"));
            var i = t.data(this[0], "validator");
            if (i) return i;
            if (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit) {
                var s = this.find("input, button");
                s.filter(".cancel").click(function() {
                    i.cancelSubmit = !0
                }),
                i.settings.submitHandler && s.filter(":submit").click(function() {
                    i.submitButton = this
                }),
                this.submit(function(e) {
                    function s() {
                        if (i.settings.submitHandler) {
                            if (i.submitButton) var e = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm);
                            return i.settings.submitHandler.call(i, i.currentForm),
                            i.submitButton && e.remove(),
                            !1
                        }
                        return ! 0
                    }
                    return i.settings.debug && e.preventDefault(),
                    i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
                })
            }
            return i
        },
        valid: function() {
            if (t(this[0]).is("form")) return this.validate().form();
            var e = !0,
            i = t(this[0].form).validate();
            return this.each(function() {
                e &= i.element(this)
            }),
            e
        },
        removeAttrs: function(e) {
            var i = {},
            s = this;
            return t.each(e.split(/\s/),
            function(t, e) {
                i[e] = s.attr(e),
                s.removeAttr(e)
            }),
            i
        },
        rules: function(e, i) {
            var s = this[0];
            if (e) {
                var n = t.data(s.form, "validator").settings,
                r = n.rules,
                a = t.validator.staticRules(s);
                switch (e) {
                case "add":
                    t.extend(a, t.validator.normalizeRule(i)),
                    r[s.name] = a,
                    i.messages && (n.messages[s.name] = t.extend(n.messages[s.name], i.messages));
                    break;
                case "remove":
                    if (!i) return delete r[s.name],
                    a;
                    var u = {};
                    return t.each(i.split(/\s/),
                    function(t, e) {
                        u[e] = a[e],
                        delete a[e]
                    }),
                    u
                }
            }
            var o = t.validator.normalizeRules(t.extend({},
            t.validator.metadataRules(s), t.validator.classRules(s), t.validator.attributeRules(s), t.validator.staticRules(s)), s);
            if (o.required) {
                var l = o.required;
                delete o.required,
                o = t.extend({
                    required: l
                },
                o)
            }
            return o
        }
    }),
    t.extend(t.expr[":"], {
        blank: function(e) {
            return ! t.trim("" + e.value)
        },
        filled: function(e) {
            return !! t.trim("" + e.value)
        },
        unchecked: function(t) {
            return ! t.checked
        }
    }),
    t.validator = function(e, i) {
        this.settings = t.extend(!0, {},
        t.validator.defaults, e),
        this.currentForm = i,
        this.init()
    },
    t.validator.format = function(e, i) {
        return 1 == arguments.length ?
        function() {
            var i = t.makeArray(arguments);
            return i.unshift(e),
            t.validator.format.apply(this, i)
        }: (arguments.length > 2 && i.constructor != Array && (i = t.makeArray(arguments).slice(1)), i.constructor != Array && (i = [i]), t.each(i,
        function(t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), i)
        }), e)
    },
    t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t,
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t) { (t.name in this.submitted || t == this.lastElement) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
            },
            unhighlight: function(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "必填字段。",
            remote: "请把这场。",
            email: "请输入有效的电子邮件地址。",
            url: "请输入有效地址。",
            date: "请输入有效的日期。",
            dateISO: "请输入有效的日期",
            number: "请输入有效数字。",
            digits: "请只输入数字。",
            creditcard: "请输入一个有效的信用卡号码。",
            equalTo: "请再次输入相同的值。",
            accept: "请提供一个有效的扩展输入一个值。",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var i = t.data(this[0].form, "validator"),
                    s = "on" + e.type.replace(/^validate/, "");
                    i.settings[s] && i.settings[s].call(i, this[0], e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm),
                this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var i = this.groups = {};
                t.each(this.settings.groups,
                function(e, s) {
                    t.each(s.split(/\s/),
                    function(t, s) {
                        i[s] = e
                    })
                });
                var s = this.settings.rules;
                t.each(s,
                function(e, i) {
                    s[e] = t.validator.normalizeRule(i)
                }),
                t(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e),
                this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                t.extend(this.submitted, this.errorMap),
                this.invalid = t.extend({},
                this.errorMap),
                this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0,
                e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                e = this.validationTargetFor(this.clean(e)),
                this.lastElement = e,
                this.prepareElement(e),
                this.currentElements = t(e);
                var i = this.check(e);
                return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                i
            },
            showErrors: function(e) {
                if (e) {
                    t.extend(this.errorMap, e),
                    this.errorList = [];
                    for (var i in e) this.errorList.push({
                        message: e[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = t.grep(this.successList,
                    function(t) {
                        return ! (t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(),
                this.submitted = {},
                this.lastElement = null,
                this.prepareForm(),
                this.hideErrors(),
                this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e = 0;
                for (var i in t) e++;
                return e
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 == this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch(e) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 == t.grep(this.errorList,
                function(t) {
                    return t.element.name == e.name
                }).length && e
            },
            elements: function() {
                var e = this,
                i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return ! this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                return t(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = t([]),
                this.toHide = t([]),
                this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(),
                this.toHide = this.errorsFor(t)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i = t(e).rules(),
                s = !1;
                for (var n in i) {
                    var r = {
                        method: n,
                        parameters: i[n]
                    };
                    try {
                        var a = t.validator.methods[n].call(this, e.value.replace(/\r/g, ""), e, r.parameters);
                        if ("dependency-mismatch" == a) {
                            s = !0;
                            continue
                        }
                        if (s = !1, "pending" == a) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!a) return this.formatAndAdd(e, r),
                        !1
                    } catch(u) {
                        throw this.settings.debug && window.console && console.log("exception occured when checking element " + e.id + ", check the '" + r.method + "' method", u),
                        u
                    }
                }
                return s ? void 0 : (this.objectLength(i) && this.successList.push(e), !0)
            },
            customMetaMessage: function(e, i) {
                if (t.metadata) {
                    var s = this.settings.meta ? t(e).metadata()[this.settings.meta] : t(e).metadata();
                    return s && s.messages && s.messages[i]
                }
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor == String ? i: i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++) if (void 0 !== arguments[t]) return arguments[t];
                return void 0
            },
            defaultMessage: function(e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customMetaMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(t, e) {
                var i = this.defaultMessage(t, e.method),
                s = /\$?\{(\d+)\}/g;
                "function" == typeof i ? i = i.call(this, e.parameters, t) : s.test(i) && (i = jQuery.format(i.replace(s, "{$1}"), e.parameters)),
                this.errorList.push({
                    message: i,
                    element: t
                }),
                this.errorMap[t.name] = i,
                this.submitted[t.name] = i
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))),
                t
            },
            defaultShowErrors: function() {
                for (var t = 0; this.errorList[t]; t++) {
                    var e = this.errorList[t];
                    this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(e.element, e.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (var t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight) for (var t = 0,
                i = this.validElements(); i[t]; t++) this.settings.unhighlight.call(this, i[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, i) {
                var s = this.errorsFor(e);
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.attr("generated") && s.html(i)) : (s = t("<" + this.settings.errorElement + "/>").attr({
                    "for": this.idOrName(e),
                    generated: !0
                }).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))),
                !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s)),
                this.toShow = this.toShow.add(s)
            },
            errorsFor: function(e) {
                var i = this.idOrName(e);
                return this.errors().filter(function() {
                    return t(this).attr("for") == i
                })
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name: t.id || t.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]),
                t
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                var i = this.currentForm;
                return t(document.getElementsByName(e)).map(function(t, s) {
                    return s.form == i && s.name == e && s || null
                })
            },
            getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return t("option:selected", i).length;
                case "input":
                    if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            },
            dependTypes: {
                "boolean": function(t) {
                    return t
                },
                string: function(e, i) {
                    return !! t(e, i.form).length
                },
                "function": function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                return ! t.validator.methods.required.call(this, t.trim(e.value), e) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            },
            stopRequest: function(e, i) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[e.name],
                i && 0 == this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 == this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            dateDE: {
                dateDE: !0
            },
            number: {
                number: !0
            },
            numberDE: {
                numberDE: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, i) {
            e.constructor == String ? this.classRuleSettings[e] = i: t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var i = {},
            s = t(e).attr("class");
            return s && t.each(s.split(" "),
            function() {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }),
            i
        },
        attributeRules: function(e) {
            var i = {},
            s = t(e);
            for (var n in t.validator.methods) {
                var r;
                r = "required" === n && "function" == typeof t.fn.prop ? s.prop(n) : s.attr(n),
                r ? i[n] = r: s[0].getAttribute("type") === n && (i[n] = !0)
            }
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength,
            i
        },
        metadataRules: function(e) {
            if (!t.metadata) return {};
            var i = t.data(e.form, "validator").settings.meta;
            return i ? t(e).metadata()[i] : t(e).metadata()
        },
        staticRules: function(e) {
            var i = {},
            s = t.data(e.form, "validator");
            return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}),
            i
        },
        normalizeRules: function(e, i) {
            return t.each(e,
            function(s, n) {
                if (n === !1) return void delete e[s];
                if (n.param || n.depends) {
                    var r = !0;
                    switch (typeof n.depends) {
                    case "string":
                        r = !!t(n.depends, i.form).length;
                        break;
                    case "function":
                        r = n.depends.call(i, i)
                    }
                    r ? e[s] = void 0 !== n.param ? n.param: !0 : delete e[s]
                }
            }),
            t.each(e,
            function(s, n) {
                e[s] = t.isFunction(n) ? n(i) : n
            }),
            t.each(["minlength", "maxlength", "min", "max"],
            function() {
                e[this] && (e[this] = Number(e[this]))
            }),
            t.each(["rangelength", "range"],
            function() {
                e[this] && (e[this] = [Number(e[this][0]), Number(e[this][1])])
            }),
            t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)),
            e.messages && delete e.messages,
            e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/),
                function() {
                    i[this] = !0
                }),
                e = i
            }
            return e
        },
        addMethod: function(e, i, s) {
            t.validator.methods[e] = i,
            t.validator.messages[e] = void 0 != s ? s: t.validator.messages[e],
            i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, i, s) {
                if (!this.depend(s, i)) return "dependency-mismatch";
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    var n = t(i).val();
                    return n && n.length > 0;
                case "input":
                    if (this.checkable(i)) return this.getLength(e, i) > 0;
                default:
                    return t.trim(e).length > 0
                }
            },
            remote: function(e, i, s) {
                if (this.optional(i)) return "dependency-mismatch";
                var n = this.previousValue(i);
                if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), n.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = n.message, s = "string" == typeof s && {
                    url: s
                } || s, this.pending[i.name]) return "pending";
                if (n.old === e) return n.valid;
                n.old = e;
                var r = this;
                this.startRequest(i);
                var a = {};
                return a[i.name] = e,
                t.ajax(t.extend(!0, {
                    url: s,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: a,
                    success: function(s) {
                        r.settings.messages[i.name].remote = n.originalMessage;
                        var a = s === !0;
                        if (a) {
                            var u = r.formSubmitted;
                            r.prepareElement(i),
                            r.formSubmitted = u,
                            r.successList.push(i),
                            r.showErrors()
                        } else {
                            var o = {},
                            l = s || r.defaultMessage(i, "remote");
                            o[i.name] = n.message = t.isFunction(l) ? l(e) : l,
                            r.showErrors(o)
                        }
                        n.valid = a,
                        r.stopRequest(i, a)
                    }
                },
                s)),
                "pending"
            },
            minlength: function(e, i, s) {
                return this.optional(i) || this.getLength(t.trim(e), i) >= s
            },
            maxlength: function(e, i, s) {
                return this.optional(i) || this.getLength(t.trim(e), i) <= s
            },
            rangelength: function(t, e, i) {
                var s = t.replace(/[^\x00-\xff]/g, "**").length;
                return this.optional(e) || s >= i[0] && s <= i[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function(t, e, i) {
                return this.optional(e) || i >= t
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            email: function(t, e) {
                return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t))
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e)) return "dependency-mismatch";
                if (/[^0-9 -]+/.test(t)) return ! 1;
                var i = 0,
                s = 0,
                n = !1;
                t = t.replace(/\D/g, "");
                for (var r = t.length - 1; r >= 0; r--) {
                    var a = t.charAt(r),
                    s = parseInt(a, 10);
                    n && (s *= 2) > 9 && (s -= 9),
                    i += s,
                    n = !n
                }
                return i % 10 == 0
            },
            accept: function(t, e, i) {
                return i = "string" == typeof i ? i.replace(/,/g, "|") : "png|jpe?g|gif",
                this.optional(e) || t.match(new RegExp(".(" + i + ")$", "i"))
            },
            equalTo: function(e, i, s) {
                var n = t(s).unbind(".validate-equalTo").bind("blur.validate-equalTo",
                function() {
                    t(i).valid()
                });
                return e == n.val()
            }
        }
    }),
    t.format = t.validator.format
} (jQuery),
function(t) {
    var e = {};
    if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, s) {
        var n = t.port;
        "abort" == t.mode && (e[n] && e[n].abort(), e[n] = s)
    });
    else {
        var i = t.ajax;
        t.ajax = function(s) {
            var n = ("mode" in s ? s: t.ajaxSettings).mode,
            r = ("port" in s ? s: t.ajaxSettings).port;
            return "abort" == n ? (e[r] && e[r].abort(), e[r] = i.apply(this, arguments)) : i.apply(this, arguments)
        }
    }
} (jQuery),
function(t) {
    jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || t.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, i) {
        function s(e) {
            return e = t.event.fix(e),
            e.type = i,
            t.event.handle.call(this, e)
        }
        t.event.special[i] = {
            setup: function() {
                this.addEventListener(e, s, !0)
            },
            teardown: function() {
                this.removeEventListener(e, s, !0)
            },
            handler: function(e) {
                return arguments[0] = t.event.fix(e),
                arguments[0].type = i,
                t.event.handle.apply(this, arguments)
            }
        }
    }),
    t.extend(t.fn, {
        validateDelegate: function(e, i, s) {
            return this.bind(i,
            function(i) {
                var n = t(i.target);
                return n.is(e) ? s.apply(n, arguments) : void 0
            })
        }
    })
} (jQuery);;
function addValid() {
    jQuery.validator.addMethod("numberPhone",
    function(e, t) {
        var r = /^\d*$/,
        o = e.length;
        return this.optional(t) || o >= 11 && 18 >= o && r.test(e)
    },
    "只能输入11至18位的数字"),
    jQuery.validator.addMethod("mobile",
    function(e, t) {
        var r = e.length,
        o = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        return this.optional(t) || 11 == r && o.test(e)
    },
    "手机号码格式错误"),
    jQuery.validator.addMethod("homePhone",
    function(e, t) {
        var r = /^(((010)|((02[0-6,8-9])|(0[3-9]\d{2})))?\-(([0-9]{7,8})|(([0-9]{7,8})\-\d{1,4})))$|(((((13[0-9]{1})|(15[0-9]{1}))|((18[0-9]{1})|(17[0-9]{1})))+\d{8}))$/;
        return this.optional(t) || r.test(e)
    },
    "请输入正确的电话号码，区号或分机号用'-'隔开"),
    jQuery.validator.addMethod("loginName",
    function(e, t) {
        return this.optional(t) || goVerify(1, e, "")
    },
    "用户帐号已存在"),
    jQuery.validator.addMethod("loginNameFormat",
    function(e, t) {
        var r = /^[a-z-A-Z]{1}([a-z-A-Z0-9]|[._]){0,19}$/;
        return this.optional(t) || r.test(e)
    },
    "只能以字母开头，且不能输入特殊字符"),
    jQuery.validator.addMethod("checkCode",
    function(e, t) {
        return this.optional(t) || checkCodeValue(e)
    },
    "码表值已存在"),
    jQuery.validator.addMethod("checkType",
    function(e, t) {
        return this.optional(t) || checkCodeType(e)
    },
    "码表类型编码已存在"),
    jQuery.validator.addMethod("loginPwd",
    function(e, t) {
        return this.optional(t) || verifyPwd(e)
    },
    "原密码错误"),
    jQuery.validator.addMethod("comparePwd",
    function(e, t) {
        var r = $("#newPwdOne").val();
        return this.optional(t) || comparePwdequals(e, r)
    },
    "两次输入密码不一致"),
    jQuery.validator.addMethod("comparePWD",
    function(e, t) {
        var r = $("#newPwdOne").val();
        return this.optional(t) || comparePWDEQ(e, r)
    },
    "两次输入密码不一致"),
    jQuery.validator.addMethod("loginEmail",
    function(e, t) {
        var r = $("#uId").val();
        return this.optional(t) || goVerify(2, e, r)
    },
    "邮箱已存在"),
    jQuery.validator.addMethod("loginPhone",
    function(e, t) {
        var r = $("#uId").val();
        return this.optional(t) || goVerify(3, e, r)
    },
    "手机号已存在"),
    jQuery.validator.addMethod("userName",
    function(e, t) {
        return this.optional(t) || /^([\u0391-\uFFE5a-zA-Z0-9]+[\s]?)*[\u0391-\uFFE5a-zA-Z0-9]$/.test(e)
    },
    "用户名只能包括中英文和数字"),
    jQuery.validator.addMethod("maxChar",
    function(e, t) {
        return this.optional(t) || /^[\u0391-\uFFE5\w]{1,60}$/.test(e)
    },
    "只可输入1到60个字符"),
    jQuery.validator.addMethod("ip",
    function(e, t) {
        var r = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return this.optional(t) || r.test(e) && RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256
    },
    "Ip地址格式错误"),
    jQuery.validator.addMethod("idCard",
    function(e, t) {
        return this.optional(t) || validId(e)
    },
    "身份证号码错误"),
    jQuery.validator.addMethod("staffIdno",
    function(e, t) {
        return "1" == $("#certificatesType").val() ? this.optional(t) || validId(e) : !0
    },
    "身份证号码错误"),
    jQuery.validator.addMethod("zipCode",
    function(e, t) {
        var r = /^[0-9]{6}$/;
        return this.optional(t) || r.test(e)
    },
    "邮政编码格式错误"),
    jQuery.validator.addMethod("mail",
    function(e, t) {
        var r = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return this.optional(t) || r.test(e)
    },
    "邮箱格式错误"),
    jQuery.validator.addMethod("code",
    function(e, t) {
        var r = (e.length, /^[A-Za-z0-9]+$/);
        return this.optional(t) || r.test(e)
    },
    "不能包含特殊字符"),
    jQuery.validator.addMethod("en",
    function(e, t) {
        var r = /^[a-zA-Z0-9]*$/;
        return this.optional(t) || r.test(e)
    },
    "只能输入英文和数字"),
    jQuery.validator.addMethod("codeType",
    function(e, t) {
        var r = /^\w+$/;
        return this.optional(t) || r.test(e)
    },
    "只能输入英文、数字和下划线"),
    jQuery.validator.addMethod("zh",
    function(e, t) {
        var r = /^[\u4e00-\u9fa50-9]+$/;
        return this.optional(t) || r.test(e)
    },
    "只能输入中文和数字"),
    jQuery.validator.addMethod("uri",
    function(e, t) {
        var r = /^((http|https|ftp):\/\/)?(\w*|\w*:\d{2,4})(\w*(\.|\/)[^\n\f\r\t\v\.]*)+$/;
        return this.optional(t) || r.test(e)
    },
    "网址不正确"),
    jQuery.validator.addMethod("PInt",
    function(e, t) {
        var r = /^[0-9]*[1-9][0-9]*$/;
        return this.optional(t) || r.test(e)
    },
    "只能输入正整数")
}
function validId(e) {
    var t = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/i,
    r = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|[X|x])$/i,
    o = {
        11 : "北京",
        12 : "天津",
        13 : "河北",
        14 : "山西",
        15 : "内蒙古",
        21 : "辽宁",
        22 : "吉林",
        23 : "黑龙江",
        31 : "上海",
        32 : "江苏",
        33 : "浙江",
        34 : "安徽",
        35 : "福建",
        36 : "江西",
        37 : "山东",
        41 : "河南",
        42 : "湖北",
        43 : "湖南",
        44 : "广东",
        45 : "广西",
        46 : "海南",
        50 : "重庆",
        51 : "四川",
        52 : "贵州",
        53 : "云南",
        54 : "西藏",
        61 : "陕西",
        62 : "甘肃",
        63 : "青海",
        64 : "宁夏",
        65 : "新疆",
        71 : "台湾",
        81 : "香港",
        82 : "澳门",
        91 : "国外"
    },
    a = 0;
    if (!t.test(e) && !r.test(e)) return ! 1;
    if (e = e.replace(/x$/i, "a"), null == o[parseInt(e.substr(0, 2))]) return ! 1;
    var n = e.substr(6, 4) + "-" + Number(e.substr(10, 2)) + "-" + Number(e.substr(12, 2));
    15 == e.length && (n = "19" + e.substr(6, 2) + "-" + Number(e.substr(8, 2)) + "-" + Number(e.substr(10, 2)), console.log(n));
    var i = new Date(n.replace(/-/g, "/"));
    if (n != i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate()) return ! 1;
    if (18 == e.length) {
        for (var d = 17; d >= 0; d--) a += Math.pow(2, d) % 11 * parseInt(e.charAt(17 - d), 11);
        if (a % 11 != 1) return ! 1
    }
    return ! 0
}
function comparePwdequals(e, t) {
    return null != e && null != t && e == t ? !0 : !1
}
$(function() {
    addValid();
    for (var e = $("Form"), t = 0; t < e.length; t++) {
        var r = $(e[t]);
        r.hasClass("form-validation") && r.validate({
            rules: {
                userNameRule: {
                    required: !0,
                    userName: !0
                },
                numberPhone: {
                    numberPhone: !0
                },
                loginNameFormat: {
                    loginNameFormat: !0
                },
                loginName: {
                    loginName: !0
                },
                loginPwd: {
                    loginPwd: !0
                },
                comparePwd: {
                    comparePwd: !0
                },
                comparePWD: {
                    comparePWD: !0
                },
                checkCode: {
                    checkCode: !0
                },
                checkType: {
                    checkType: !0
                },
                loginEmail: {
                    loginEmail: !0
                },
                loginPhone: {
                    loginPhone: !0
                },
                mobile: {
                    mobile: !0,
                    required: !0
                },
                homePhone: {
                    homePhone: !0
                },
                ip: {
                    ip: !0
                },
                idCard: {
                    required: !0,
                    idCard: !0
                },
                staffIdno: {
                    required: !0,
                    idno: !0
                },
                zipCode: {
                    zipCode: !0
                },
                mail: {
                    mail: !0
                },
                code: {
                    required: !0,
                    code: !0
                },
                maxChar: {
                    required: !0,
                    maxChar: !0
                },
                codeType: {
                    codeType: !0
                },
                en: {
                    en: !0
                },
                zh: {
                    zh: !0
                },
                uri: {
                    uri: !0
                },
                PInt: {
                    PInt: !0
                }
            },
            errorClass: "help-inline",
            errorElement: "span",
            highlight: function(e) {
                $(e).parents(".form-group").removeClass("success"),
                $(e).parents(".form-group").addClass("error")
            },
            unhighlight: function(e) {
                $(e).parents(".form-group").removeClass("error"),
                $(e).parents(".form-group").addClass("success")
            }
        })
    }
});; !
function($) {
    $.extend({
        metadata: {
            defaults: {
                type: "class",
                name: "metadata",
                cre: /({.*})/,
                single: "metadata"
            },
            setType: function(t, e) {
                this.defaults.type = t,
                this.defaults.name = e
            },
            get: function(elem, opts) {
                var settings = $.extend({},
                this.defaults, opts);
                settings.single.length || (settings.single = "metadata");
                var data = $.data(elem, settings.single);
                if (data) return data;
                data = "{}";
                var getData = function(data) {
                    return "string" != typeof data ? data: void(data.indexOf("{") < 0 && (data = eval("(" + data + ")")))
                },
                getObject = function(data) {
                    return "string" != typeof data ? data: data = eval("(" + data + ")")
                };
                if ("html5" == settings.type) {
                    var object = {};
                    $(elem.attributes).each(function() {
                        var t = this.nodeName;
                        return t.match(/^data-/) ? (t = t.replace(/^data-/, ""), void(object[t] = getObject(this.nodeValue))) : !0
                    })
                } else {
                    if ("class" == settings.type) {
                        var m = settings.cre.exec(elem.className);
                        m && (data = m[1])
                    } else if ("elem" == settings.type) {
                        if (!elem.getElementsByTagName) return;
                        var e = elem.getElementsByTagName(settings.name);
                        e.length && (data = $.trim(e[0].innerHTML))
                    } else if (void 0 != elem.getAttribute) {
                        var attr = elem.getAttribute(settings.name);
                        attr && (data = attr)
                    }
                    object = getObject(data.indexOf("{") < 0 ? "{" + data + "}": data)
                }
                return $.data(elem, settings.single, object),
                object
            }
        }
    }),
    $.fn.metadata = function(t) {
        return $.metadata.get(this[0], t)
    }
} (jQuery);;
function openNewDiv() {
    var e = "loadingBg";
    docEle(e) && document.body.removeChild(docEle(e));
    var t = document.createElement("div");
    t.id = e,
    t.style.position = "fixed",
    t.style.zIndex = "9999",
    _scrollWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
    _scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
    t.style.width = _scrollWidth - 20 + "px",
    t.style.height = _scrollHeight - 20 + "px",
    t.style.top = "0px",
    t.style.left = "0px",
    t.style.background = "#ffffff",
    t.style.filter = "alpha(opacity=50)",
    t.style.opacity = "0.50",
    t.innerHTML = "<div  align='center' style='margin-top: 20%;'><div class='loading spin'></div><div>",
    document.body.appendChild(t)
}
function loadingBgAdd() {
    openNewDiv()
}
function loadingBgRemove() {
    setTimeout('$("#loadingBg").remove()', 5000)
}
var docEle = function() {
    return document.getElementById(arguments[0]) || !1
};;
/*function tempNotice(t, e) {
    var i = tempNotice.Notices(t, e);
    i.init()
} !
function() {
    function t(t, e) {
        var i = this;
        return i.hostname = t,
        i.rootUrl = e,
        i.noticeFlag = $.cookie("noticeFlag"),
        i.u = "",
        i.initDiv = function() {
            var t = document.createElement("div");
            t.innerHTML = "<div id='alterConetntDiv' class='alert alert-info alert-dismissible' role='alert' style='display: none;'><button type='button' id='close'  class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true' >&times;</span></button><div id='alterConetnts' style='color:#fff;text-align:center;font-weight: 600font-size:15px;' ></div></div> ",
            document.body.appendChild(t)
        },
        i.setCookie = function(t, e) {
            var n = new Date;
            n.setTime(n.getTime() + 12e5),
            $.cookie(t, e, {
                expires: n,
                path: "/",
                domain: i.hostname
            })
        },
        i.isStartInterval = function() {
            return "undefined" == typeof i.noticeFlag ? !0 : "0" != i.noticeFlag ? !0 : !1
        },
        i.startNoticeTimer = function() {
            i.u = setInterval(this.startRequest(), 3e5)
        },
        i.startRequest = function() {
            $.ajax({
                url: i.rootUrl + "/notice/get?callback=?",
                dataType: "JSONP",
                async: !1,
                success: function(t) {
                    t.success && (i.setCookie("noticeFlag", "1"), i.noticeFlag = "1", $("#alterConetntDiv").show(), $("#alterConetnts").html(t.msg), clearInterval(i.u))
                }
            })
        },
        i.init = function() {
            i.initDiv(),
            i.isStartInterval() && i.startRequest(),
            "undefined" == typeof i.noticeFlag && i.startNoticeTimer(),
            $("#close").click(function() {
                console.log("close"),
                i.setCookie("noticeFlag", "0"),
                i.noticeFlag = "0"
            })
        },
        i
    }
    tempNotice.Notices = t
} ();*/