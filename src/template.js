/*! Morphext - v2.4.4 - 2015-05-21 */
import { Morphext } from Morphext;
jQuery = { }
!function(a) {
    "use strict";
    function b(b, c) {
        this.element = a(b),
        this.settings = a.extend({}, d, c),
        this._defaults = d,
        this._init()
    }
    var c = "Morphext"
      , d = {
        animation: "bounceIn",
        separator: ",",
        speed: 2e3,
        complete: a.noop
    };
    b.prototype = {
        _init: function() {
            var b = this;
            this.phrases = [],
            this.element.addClass("morphext"),
            a.each(this.element.text().split(this.settings.separator), function(c, d) {
                b.phrases.push(a.trim(d))
            }),
            this.index = -1,
            this.animate(),
            this.start()
        },
        animate: function() {
            this.index = ++this.index % this.phrases.length,
            this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>",
            a.isFunction(this.settings.complete) && this.settings.complete.call(this)
        },
        start: function() {
            var a = this;
            this._interval = setInterval(function() {
                a.animate()
            }, this.settings.speed)
        },
        stop: function() {
            this._interval = clearInterval(this._interval)
        }
    },
    a.fn[c] = function(d) {
        return this.each(function() {
            a.data(this, "plugin_" + c) || a.data(this, "plugin_" + c, new b(this,d))
        })
    }
}(jQuery);

/* jump.js - v1.0.2 - 2017-01-08 */
!function(o, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : o.Jump = n()
}(this, function() {
    "use strict";
    var o = function(o, n, t, e) {
        return o /= e / 2,
        o < 1 ? t / 2 * o * o + n : (o--,
        -t / 2 * (o * (o - 2) - 1) + n)
    }
      , n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o
    }
    : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
    }
      , t = function() {
        function t() {
            return window.scrollY || window.pageYOffset
        }
        function e(o) {
            return o.getBoundingClientRect().top + c
        }
        function i(o) {
            b || (b = o),
            p = o - b,
            v = s(p, c, y, m),
            window.scrollTo(0, v),
            p < m ? window.requestAnimationFrame(i) : r()
        }
        function r() {
            window.scrollTo(0, c + y),
            d && l && (d.setAttribute("tabindex", "-1"),
            d.focus()),
            "function" == typeof w && w(),
            b = !1
        }
        function u(r) {
            var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (m = u.duration || 1e3,
            a = u.offset || 0,
            w = u.callback,
            s = u.easing || o,
            l = u.a11y || !1,
            c = t(),
            "undefined" == typeof r ? "undefined" : n(r)) {
            case "number":
                d = void 0,
                l = !1,
                f = c + r;
                break;
            case "object":
                d = r,
                f = e(d);
                break;
            case "string":
                d = document.querySelector(r),
                f = e(d)
            }
            switch (y = f - c + a,
            n(u.duration)) {
            case "number":
                m = u.duration;
                break;
            case "function":
                m = u.duration(y)
            }
            window.requestAnimationFrame(i)
        }
        var d = void 0
          , c = void 0
          , f = void 0
          , a = void 0
          , s = void 0
          , l = void 0
          , y = void 0
          , m = void 0
          , b = void 0
          , p = void 0
          , v = void 0
          , w = void 0;
        return u
    }
      , e = t();
    return e
});

function findByID(name) {
    return $('#' + name)
}
function findExpertise(name) {
    return findByID(name + '-expertise')
}
function parseCSS($el, prop) {
    return parseFloat($el.css(prop))
}
function resizeExpertiseCards() {
    var refHeight = '';
    if ($(window).width() > 768) {
        refHeight = parseCSS(findExpertise('business'), 'height')
    }
    findExpertise('design').css('height', refHeight);
    findExpertise('development').css('height', refHeight)
}
function mountDocumentAnimations() {
    var $subtitle = findByID('js-subtitle-rotating');
    var css = function(prop) {
        parseCSS($subtitle, prop)
    };
    $subtitle.css('height', css('height') - css('padding-top'));
    $('.navbar .navbar-brand, .navbar .burger, .hero .hero-head, .hero .hero-body').addClass('animated pulse')
    setTimeout(function() {
        $subtitle.text([' hi i am some text that comes in soluções para negócios.', 'soluções que trazem resultados.', 'consultoria em desenvolvimento de negócios e produtos digitais.', $subtitle.html()].join(',')).Morphext({
            animation: "fadeInDown",
            separator: ",",
            speed: 4000,
            complete: function() {}
        })
    }, 4000)
}
function mountDocumentEventHandlers() {
    function toggleNavbarBurguer() {
        var $burguer = $('.navbar-burger:visible');
        if ($burguer.length) {
            $burguer.toggleClass('is-active');
            findByID($burguer.data('target')).toggleClass('is-active')
        }
    }
    $(document).on('click', '[data-anchor]', function(e) {
        e.preventDefault();
        var $this = $(this);
        $('.navbar-item').removeClass('is-active');
        if (!(new RegExp('false','i')).test($this.data('active'))) {
            $this.addClass('is-active')
        }
        Jump(findByID($this.data('anchor'))[0], {
            callback: toggleNavbarBurguer
        })
    })
    $(document).on('click', '.navbar-burger', function(e) {
        e.preventDefault();
        toggleNavbarBurguer()
    })
}
function mountWindowEventHandlers() {
    resizeExpertiseCards();
    $(window).on('resize', resizeExpertiseCards)
}
$(function() {
    mountWindowEventHandlers();
    mountDocumentAnimations();
    mountDocumentEventHandlers()
})

