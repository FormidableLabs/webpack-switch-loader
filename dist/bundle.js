!function(o) {
    function r(t) {
        if (n[t]) return n[t].exports;
        var e = n[t] = {
            exports: {},
            id: t,
            loaded: !1
        };
        return o[t].call(e.exports, e, e.exports, r), e.loaded = !0, e.exports;
    }
    var n = {};
    return r.m = o, r.c = n, r.p = "", r(0);
}([ function(o, r, n) {
    var t = n(1);
    console.log("CLIENT"), console.log(t);
}, function(o, r, n) {
    o.exports = n(2);
}, function(o, r) {
    o.exports = "hi from client foo";
} ]);