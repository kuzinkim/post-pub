(() => {
    var __webpack_modules__ = {
        545: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                return function() {
                    "use strict";
                    var e = {
                        d: function(t, i) {
                            for (var s in i) e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, {
                                enumerable: !0,
                                get: i[s]
                            });
                        },
                        o: function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }
                    }, t = {};
                    e.d(t, {
                        default: function() {
                            return K;
                        }
                    });
                    var i = {
                        days: "days",
                        months: "months",
                        years: "years",
                        day: "day",
                        month: "month",
                        year: "year",
                        eventChangeViewDate: "changeViewDate",
                        eventChangeCurrentView: "changeCurrentView",
                        eventChangeFocusDate: "changeFocusDate",
                        eventChangeSelectedDate: "changeSelectedDate",
                        eventChangeTime: "changeTime",
                        eventChangeLastSelectedDate: "changeLastSelectedDate",
                        actionSelectDate: "selectDate",
                        actionUnselectDate: "unselectDate",
                        cssClassWeekend: "-weekend-"
                    }, s = {
                        classes: "",
                        inline: !1,
                        locale: {
                            days: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
                            daysShort: [ "Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб" ],
                            daysMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
                            months: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
                            monthsShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
                            today: "Сегодня",
                            clear: "Очистить",
                            dateFormat: "dd.MM.yyyy",
                            timeFormat: "HH:mm",
                            firstDay: 1
                        },
                        startDate: new Date,
                        firstDay: "",
                        weekends: [ 6, 0 ],
                        dateFormat: "",
                        altField: "",
                        altFieldDateFormat: "T",
                        toggleSelected: !0,
                        keyboardNav: !0,
                        selectedDates: !1,
                        container: "",
                        isMobile: !1,
                        visible: !1,
                        position: "bottom left",
                        offset: 12,
                        view: i.days,
                        minView: i.days,
                        showOtherMonths: !0,
                        selectOtherMonths: !0,
                        moveToOtherMonthsOnSelect: !0,
                        showOtherYears: !0,
                        selectOtherYears: !0,
                        moveToOtherYearsOnSelect: !0,
                        minDate: "",
                        maxDate: "",
                        disableNavWhenOutOfRange: !0,
                        multipleDates: !1,
                        multipleDatesSeparator: ", ",
                        range: !1,
                        dynamicRange: !0,
                        buttons: !1,
                        monthsField: "monthsShort",
                        showEvent: "focus",
                        autoClose: !1,
                        prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
                        nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
                        navTitles: {
                            days: "MMMM, <i>yyyy</i>",
                            months: "yyyy",
                            years: "yyyy1 - yyyy2"
                        },
                        timepicker: !1,
                        onlyTimepicker: !1,
                        dateTimeSeparator: " ",
                        timeFormat: "",
                        minHours: 0,
                        maxHours: 24,
                        minMinutes: 0,
                        maxMinutes: 59,
                        hoursStep: 1,
                        minutesStep: 1,
                        onSelect: !1,
                        onChangeViewDate: !1,
                        onChangeView: !1,
                        onRenderCell: !1,
                        onShow: !1,
                        onHide: !1,
                        onClickDayName: !1
                    };
                    function a(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                        return "string" == typeof e ? t.querySelector(e) : e;
                    }
                    function n() {
                        let {tagName: e = "div", className: t = "", innerHtml: i = "", id: s = "", attrs: a = {}} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = document.createElement(e);
                        if (t && n.classList.add(...t.split(" ")), s && (n.id = s), i && (n.innerHTML = i), 
                        a) for (let e in a) n.setAttribute(e, a[e]);
                        return n;
                    }
                    function r(e, t) {
                        for (let [i, s] of Object.entries(t)) e.setAttribute(i, s);
                        return e;
                    }
                    function h(e) {
                        return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
                    }
                    function o(e) {
                        let t = e.getHours(), i = t % 12 == 0 ? 12 : t % 12;
                        return {
                            year: e.getFullYear(),
                            month: e.getMonth(),
                            fullMonth: e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
                            date: e.getDate(),
                            fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
                            day: e.getDay(),
                            hours: t,
                            fullHours: l(t),
                            hours12: i,
                            fullHours12: l(i),
                            minutes: e.getMinutes(),
                            fullMinutes: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
                        };
                    }
                    function l(e) {
                        return e < 10 ? "0" + e : e;
                    }
                    function d(e) {
                        let t = 10 * Math.floor(e.getFullYear() / 10);
                        return [ t, t + 9 ];
                    }
                    function c() {
                        let e = [];
                        for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                        return i.forEach((t => {
                            if ("object" == typeof t) for (let i in t) t[i] && e.push(i); else t && e.push(t);
                        })), e.join(" ");
                    }
                    function u(e, t) {
                        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
                        if (!e || !t) return !1;
                        let a = o(e), n = o(t), r = {
                            [i.days]: a.date === n.date && a.month === n.month && a.year === n.year,
                            [i.months]: a.month === n.month && a.year === n.year,
                            [i.years]: a.year === n.year
                        };
                        return r[s];
                    }
                    function p(e, t, i) {
                        let s = g(e, !1).getTime(), a = g(t, !1).getTime();
                        return i ? s >= a : s > a;
                    }
                    function m(e, t) {
                        return !p(e, t, !0);
                    }
                    function g(e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = new Date(e.getTime());
                        return "boolean" != typeof t || t || D(i), i;
                    }
                    function D(e) {
                        return e.setHours(0, 0, 0, 0), e;
                    }
                    function v(e, t, i) {
                        e.length ? e.forEach((e => {
                            e.addEventListener(t, i);
                        })) : e.addEventListener(t, i);
                    }
                    function y(e, t) {
                        return !(!e || e === document || e instanceof DocumentFragment) && (e.matches(t) ? e : y(e.parentNode, t));
                    }
                    function f(e, t, i) {
                        return e > i ? i : e < t ? t : e;
                    }
                    function w(e) {
                        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                        return i.filter((e => e)).forEach((t => {
                            for (let [i, s] of Object.entries(t)) if (void 0 !== s && "[object Object]" === s.toString()) {
                                let t = void 0 !== e[i] ? e[i].toString() : void 0, a = s.toString(), n = Array.isArray(s) ? [] : {};
                                e[i] = e[i] ? t !== a ? n : e[i] : n, w(e[i], s);
                            } else e[i] = s;
                        })), e;
                    }
                    function b(e) {
                        let t = e;
                        return e instanceof Date || (t = new Date(e)), isNaN(t.getTime()) && (console.log('Unable to convert value "'.concat(e, '" to Date object')), 
                        t = !1), t;
                    }
                    function k(e) {
                        let t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
                        return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
                    }
                    function C(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class _ {
                        constructor() {
                            let {type: e, date: t, dp: i, opts: s, body: a} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            C(this, "focus", (() => {
                                this.$cell.classList.add("-focus-"), this.focused = !0;
                            })), C(this, "removeFocus", (() => {
                                this.$cell.classList.remove("-focus-"), this.focused = !1;
                            })), C(this, "select", (() => {
                                this.$cell.classList.add("-selected-"), this.selected = !0;
                            })), C(this, "removeSelect", (() => {
                                this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), this.selected = !1;
                            })), C(this, "onChangeSelectedDate", (() => {
                                this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
                            })), C(this, "onChangeFocusDate", (e => {
                                if (!e) return void (this.focused && this.removeFocus());
                                let t = u(e, this.date, this.type);
                                t ? this.focus() : !t && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
                            })), C(this, "render", (() => (this.$cell.innerHTML = this._getHtml(), this.$cell.adpCell = this, 
                            this.$cell))), this.type = e, this.singleType = this.type.slice(0, -1), this.date = t, 
                            this.dp = i, this.opts = s, this.body = a, this.customData = !1, this.init();
                        }
                        init() {
                            let {range: e, onRenderCell: t} = this.opts;
                            t && (this.customData = t({
                                date: this.date,
                                cellType: this.singleType,
                                datepicker: this.dp
                            })), this._createElement(), this._bindDatepickerEvents(), this._handleInitialFocusStatus(), 
                            this.dp.hasSelectedDates && (this._handleSelectedStatus(), e && this._handleRangeStatus());
                        }
                        _bindDatepickerEvents() {
                            this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
                        }
                        unbindDatepickerEvents() {
                            this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
                        }
                        _createElement() {
                            let {year: e, month: t, date: i} = o(this.date);
                            this.$cell = n({
                                className: this._getClassName(),
                                attrs: {
                                    "data-year": e,
                                    "data-month": t,
                                    "data-date": i
                                }
                            });
                        }
                        _getClassName() {
                            var e, t;
                            let s = new Date, {selectOtherMonths: a, selectOtherYears: n} = this.opts, {minDate: r, maxDate: h} = this.dp, {day: l} = o(this.date), d = this._isOutOfMinMaxRange(), p = null === (e = this.customData) || void 0 === e ? void 0 : e.disabled, m = c("air-datepicker-cell", "-".concat(this.singleType, "-"), {
                                "-current-": u(s, this.date, this.type),
                                "-min-date-": r && u(r, this.date, this.type),
                                "-max-date-": h && u(h, this.date, this.type)
                            }), g = "";
                            switch (this.type) {
                              case i.days:
                                g = c({
                                    "-weekend-": this.dp.isWeekend(l),
                                    "-other-month-": this.isOtherMonth,
                                    "-disabled-": this.isOtherMonth && !a || d || p
                                });
                                break;

                              case i.months:
                                g = c({
                                    "-disabled-": d || p
                                });
                                break;

                              case i.years:
                                g = c({
                                    "-other-decade-": this.isOtherDecade,
                                    "-disabled-": d || this.isOtherDecade && !n || p
                                });
                            }
                            return c(m, g, null === (t = this.customData) || void 0 === t ? void 0 : t.classes);
                        }
                        _getHtml() {
                            var e;
                            let {year: t, month: s, date: a} = o(this.date), {showOtherMonths: n, showOtherYears: r} = this.opts;
                            if (null !== (e = this.customData) && void 0 !== e && e.html) return this.customData.html;
                            switch (this.type) {
                              case i.days:
                                return !n && this.isOtherMonth ? "" : a;

                              case i.months:
                                return this.dp.locale[this.opts.monthsField][s];

                              case i.years:
                                return !r && this.isOtherDecade ? "" : t;
                            }
                        }
                        _isOutOfMinMaxRange() {
                            let {minDate: e, maxDate: t} = this.dp, {type: s, date: a} = this, {month: n, year: r, date: h} = o(a), l = s === i.days, d = s === i.years, c = !!e && new Date(r, d ? e.getMonth() : n, l ? h : e.getDate()), u = !!t && new Date(r, d ? t.getMonth() : n, l ? h : t.getDate());
                            return e && t ? m(c, e) || p(u, t) : e ? m(c, e) : t ? p(u, t) : void 0;
                        }
                        destroy() {
                            this.unbindDatepickerEvents();
                        }
                        _handleRangeStatus() {
                            let {rangeDateFrom: e, rangeDateTo: t} = this.dp, i = c({
                                "-in-range-": e && t && (s = this.date, a = e, n = t, p(s, a) && m(s, n)),
                                "-range-from-": e && u(this.date, e, this.type),
                                "-range-to-": t && u(this.date, t, this.type)
                            });
                            var s, a, n;
                            this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), i && this.$cell.classList.add(...i.split(" "));
                        }
                        _handleSelectedStatus() {
                            let e = this.dp._checkIfDateIsSelected(this.date, this.type);
                            e ? this.select() : !e && this.selected && this.removeSelect();
                        }
                        _handleInitialFocusStatus() {
                            u(this.dp.focusDate, this.date, this.type) && this.focus();
                        }
                        get isDisabled() {
                            return this.$cell.matches(".-disabled-");
                        }
                        get isOtherMonth() {
                            return this.dp.isOtherMonth(this.date);
                        }
                        get isOtherDecade() {
                            return this.dp.isOtherDecade(this.date);
                        }
                    }
                    function M(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    let $ = {
                        [i.days]: '<div class="air-datepicker-body--day-names"></div>' + '<div class="air-datepicker-body--cells -'.concat(i.days, '-"></div>'),
                        [i.months]: '<div class="air-datepicker-body--cells -'.concat(i.months, '-"></div>'),
                        [i.years]: '<div class="air-datepicker-body--cells -'.concat(i.years, '-"></div>')
                    };
                    class S {
                        constructor(e) {
                            let {dp: t, type: s, opts: a} = e;
                            M(this, "handleClick", (e => {
                                let t = e.target.adpCell;
                                if (t.isDisabled) return;
                                if (!this.dp.isMinViewReached) return void this.dp.down();
                                let i = this.dp._checkIfDateIsSelected(t.date, t.type);
                                i ? this.dp._handleAlreadySelectedDates(i, t.date) : this.dp.selectDate(t.date);
                            })), M(this, "handleDayNameClick", (e => {
                                let t = e.target.getAttribute("data-day-index");
                                this.opts.onClickDayName({
                                    dayIndex: Number(t),
                                    datepicker: this.dp
                                });
                            })), M(this, "onChangeCurrentView", (e => {
                                e !== this.type ? this.hide() : (this.show(), this.render());
                            })), M(this, "onMouseOverCell", (e => {
                                let t = y(e.target, ".air-datepicker-cell");
                                this.dp.setFocusDate(!!t && t.adpCell.date);
                            })), M(this, "onMouseOutCell", (() => {
                                this.dp.setFocusDate(!1);
                            })), M(this, "onClickBody", (e => {
                                let {onClickDayName: t} = this.opts, i = e.target;
                                i.closest(".air-datepicker-cell") && this.handleClick(e), t && i.closest(".air-datepicker-body--day-name") && this.handleDayNameClick(e);
                            })), M(this, "onMouseDown", (e => {
                                this.pressed = !0;
                                let t = y(e.target, ".air-datepicker-cell"), i = t && t.adpCell;
                                u(i.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = !0), u(i.date, this.dp.rangeDateTo) && (this.rangeToFocused = !0);
                            })), M(this, "onMouseMove", (e => {
                                if (!this.pressed || !this.dp.isMinViewReached) return;
                                e.preventDefault();
                                let t = y(e.target, ".air-datepicker-cell"), i = t && t.adpCell, {selectedDates: s, rangeDateTo: a, rangeDateFrom: n} = this.dp;
                                if (!i || i.isDisabled) return;
                                let {date: r} = i;
                                if (2 === s.length) {
                                    if (this.rangeFromFocused && !p(r, a)) {
                                        let {hours: e, minutes: t} = o(n);
                                        r.setHours(e), r.setMinutes(t), this.dp.rangeDateFrom = r, this.dp.replaceDate(n, r);
                                    }
                                    if (this.rangeToFocused && !m(r, n)) {
                                        let {hours: e, minutes: t} = o(a);
                                        r.setHours(e), r.setMinutes(t), this.dp.rangeDateTo = r, this.dp.replaceDate(a, r);
                                    }
                                }
                            })), M(this, "onMouseUp", (() => {
                                this.pressed = !1, this.rangeFromFocused = !1, this.rangeToFocused = !1;
                            })), M(this, "onChangeViewDate", ((e, t) => {
                                if (!this.isVisible) return;
                                let s = d(e), a = d(t);
                                switch (this.dp.currentView) {
                                  case i.days:
                                    if (u(e, t, i.months)) return;
                                    break;

                                  case i.months:
                                    if (u(e, t, i.years)) return;
                                    break;

                                  case i.years:
                                    if (s[0] === a[0] && s[1] === a[1]) return;
                                }
                                this.render();
                            })), M(this, "render", (() => {
                                this.destroyCells(), this._generateCells(), this.cells.forEach((e => {
                                    this.$cells.appendChild(e.render());
                                }));
                            })), this.dp = t, this.type = s, this.opts = a, this.cells = [], this.$el = "", 
                            this.pressed = !1, this.isVisible = !0, this.init();
                        }
                        init() {
                            this._buildBaseHtml(), this.type === i.days && this.renderDayNames(), this.render(), 
                            this._bindEvents(), this._bindDatepickerEvents();
                        }
                        _bindEvents() {
                            let {range: e, dynamicRange: t} = this.opts;
                            v(this.$el, "mouseover", this.onMouseOverCell), v(this.$el, "mouseout", this.onMouseOutCell), 
                            v(this.$el, "click", this.onClickBody), e && t && (v(this.$el, "mousedown", this.onMouseDown), 
                            v(this.$el, "mousemove", this.onMouseMove), v(window.document, "mouseup", this.onMouseUp));
                        }
                        _bindDatepickerEvents() {
                            this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
                        }
                        _buildBaseHtml() {
                            this.$el = n({
                                className: "air-datepicker-body -".concat(this.type, "-"),
                                innerHtml: $[this.type]
                            }), this.$names = a(".air-datepicker-body--day-names", this.$el), this.$cells = a(".air-datepicker-body--cells", this.$el);
                        }
                        _getDayNamesHtml() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay, t = "", s = this.dp.isWeekend, {onClickDayName: a} = this.opts, n = e, r = 0;
                            for (;r < 7; ) {
                                let e = n % 7, h = c("air-datepicker-body--day-name", {
                                    [i.cssClassWeekend]: s(e),
                                    "-clickable-": !!a
                                }), o = this.dp.locale.daysMin[e];
                                t += '<div class="'.concat(h, "\" data-day-index='").concat(e, "'>").concat(o, "</div>"), 
                                r++, n++;
                            }
                            return t;
                        }
                        _getDaysCells() {
                            let {viewDate: e, locale: {firstDay: t}} = this.dp, i = h(e), {year: s, month: a} = o(e), n = new Date(s, a, 1), r = new Date(s, a, i), l = n.getDay() - t, d = 6 - r.getDay() + t;
                            l = l < 0 ? l + 7 : l, d = d > 6 ? d - 7 : d;
                            let c = function(e, t) {
                                let {year: i, month: s, date: a} = o(e);
                                return new Date(i, s, a - t);
                            }(n, l), u = i + l + d, p = c.getDate(), {year: m, month: g} = o(c), D = 0;
                            for (;D < u; ) {
                                let e = new Date(m, g, p + D);
                                this._generateCell(e), D++;
                            }
                        }
                        _generateCell(e) {
                            let {type: t, dp: i, opts: s} = this, a = new _({
                                type: t,
                                dp: i,
                                opts: s,
                                date: e,
                                body: this
                            });
                            return this.cells.push(a), a;
                        }
                        _generateDayCells() {
                            this._getDaysCells();
                        }
                        _generateMonthCells() {
                            let {year: e} = this.dp.parsedViewDate, t = 0;
                            for (;t < 12; ) this.cells.push(this._generateCell(new Date(e, t))), t++;
                        }
                        _generateYearCells() {
                            let e = d(this.dp.viewDate), t = e[0] - 1, i = e[1] + 1, s = t;
                            for (;s <= i; ) this.cells.push(this._generateCell(new Date(s, 0))), s++;
                        }
                        renderDayNames() {
                            this.$names.innerHTML = this._getDayNamesHtml();
                        }
                        _generateCells() {
                            switch (this.type) {
                              case i.days:
                                this._generateDayCells();
                                break;

                              case i.months:
                                this._generateMonthCells();
                                break;

                              case i.years:
                                this._generateYearCells();
                            }
                        }
                        show() {
                            this.isVisible = !0, this.$el.classList.remove("-hidden-");
                        }
                        hide() {
                            this.isVisible = !1, this.$el.classList.add("-hidden-");
                        }
                        destroyCells() {
                            this.cells.forEach((e => e.destroy())), this.cells = [], this.$cells.innerHTML = "";
                        }
                        destroy() {
                            this.destroyCells(), this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), 
                            this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
                        }
                    }
                    function T(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class F {
                        constructor(e) {
                            let {dp: t, opts: i} = e;
                            T(this, "onClickNav", (e => {
                                let t = y(e.target, ".air-datepicker-nav--action");
                                if (!t) return;
                                let i = t.dataset.action;
                                this.dp[i]();
                            })), T(this, "onChangeViewDate", (() => {
                                this.render(), this._resetNavStatus(), this.handleNavStatus();
                            })), T(this, "onChangeCurrentView", (() => {
                                this.render(), this._resetNavStatus(), this.handleNavStatus();
                            })), T(this, "onClickNavTitle", (() => {
                                this.dp.isFinalView || this.dp.up();
                            })), T(this, "update", (() => {
                                let {prevHtml: e, nextHtml: t} = this.opts;
                                this.$prev.innerHTML = e, this.$next.innerHTML = t, this._resetNavStatus(), this.render(), 
                                this.handleNavStatus();
                            })), T(this, "renderDelay", (() => {
                                setTimeout(this.render);
                            })), T(this, "render", (() => {
                                this.$title.innerHTML = this._getTitle(), function(e, t) {
                                    for (let i in t) t[i] ? e.classList.add(i) : e.classList.remove(i);
                                }(this.$title, {
                                    "-disabled-": this.dp.isFinalView
                                });
                            })), this.dp = t, this.opts = i, this.init();
                        }
                        init() {
                            this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), 
                            this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
                        }
                        _defineDOM() {
                            this.$title = a(".air-datepicker-nav--title", this.$el), this.$prev = a('[data-action="prev"]', this.$el), 
                            this.$next = a('[data-action="next"]', this.$el);
                        }
                        _bindEvents() {
                            this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
                        }
                        _bindDatepickerEvents() {
                            this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView), 
                            this.isNavIsFunction && (this.dp.on(i.eventChangeSelectedDate, this.renderDelay), 
                            this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
                        }
                        destroy() {
                            this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView), 
                            this.isNavIsFunction && (this.dp.off(i.eventChangeSelectedDate, this.renderDelay), 
                            this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
                        }
                        _createElement() {
                            this.$el = n({
                                tagName: "nav",
                                className: "air-datepicker-nav"
                            });
                        }
                        _getTitle() {
                            let {dp: e, opts: t} = this, i = t.navTitles[e.currentView];
                            return "function" == typeof i ? i(e) : e.formatDate(e.viewDate, i);
                        }
                        handleNavStatus() {
                            let {disableNavWhenOutOfRange: e} = this.opts, {minDate: t, maxDate: s} = this.dp;
                            if (!t && !s || !e) return;
                            let {year: a, month: n} = this.dp.parsedViewDate, r = !!t && o(t), h = !!s && o(s);
                            switch (this.dp.currentView) {
                              case i.days:
                                t && r.month >= n && r.year >= a && this._disableNav("prev"), s && h.month <= n && h.year <= a && this._disableNav("next");
                                break;

                              case i.months:
                                t && r.year >= a && this._disableNav("prev"), s && h.year <= a && this._disableNav("next");
                                break;

                              case i.years:
                                {
                                    let e = d(this.dp.viewDate);
                                    t && r.year >= e[0] && this._disableNav("prev"), s && h.year <= e[1] && this._disableNav("next");
                                    break;
                                }
                            }
                        }
                        _disableNav(e) {
                            a('[data-action="' + e + '"]', this.$el).classList.add("-disabled-");
                        }
                        _resetNavStatus() {
                            !function(e) {
                                for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                                e.length ? e.forEach((e => {
                                    e.classList.remove(...i);
                                })) : e.classList.remove(...i);
                            }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
                        }
                        _buildBaseHtml() {
                            let {prevHtml: e, nextHtml: t} = this.opts;
                            this.$el.innerHTML = '<div class="air-datepicker-nav--action" data-action="prev">'.concat(e, "</div>") + '<div class="air-datepicker-nav--title"></div>' + '<div class="air-datepicker-nav--action" data-action="next">'.concat(t, "</div>");
                        }
                        get isNavIsFunction() {
                            let {navTitles: e} = this.opts;
                            return Object.keys(e).find((t => "function" == typeof e[t]));
                        }
                    }
                    var V = {
                        today: {
                            content: e => e.locale.today,
                            onClick: e => e.setViewDate(new Date)
                        },
                        clear: {
                            content: e => e.locale.clear,
                            onClick: e => e.clear()
                        }
                    };
                    class x {
                        constructor(e) {
                            let {dp: t, opts: i} = e;
                            this.dp = t, this.opts = i, this.init();
                        }
                        init() {
                            this.createElement(), this.render();
                        }
                        createElement() {
                            this.$el = n({
                                className: "air-datepicker-buttons"
                            });
                        }
                        destroy() {
                            this.$el.parentNode.removeChild(this.$el);
                        }
                        clearHtml() {
                            return this.$el.innerHTML = "", this;
                        }
                        generateButtons() {
                            let {buttons: e} = this.opts;
                            Array.isArray(e) || (e = [ e ]), e.forEach((e => {
                                let t = e;
                                "string" == typeof e && V[e] && (t = V[e]);
                                let i = this.createButton(t);
                                t.onClick && this.attachEventToButton(i, t.onClick), this.$el.appendChild(i);
                            }));
                        }
                        attachEventToButton(e, t) {
                            e.addEventListener("click", (() => {
                                t(this.dp);
                            }));
                        }
                        createButton(e) {
                            let {content: t, className: i, tagName: s = "button", attrs: a = {}} = e, r = "function" == typeof t ? t(this.dp) : t;
                            return n({
                                tagName: s,
                                innerHtml: "<span tabindex='-1'>".concat(r, "</span>"),
                                className: c("air-datepicker-button", i),
                                attrs: a
                            });
                        }
                        render() {
                            this.generateButtons();
                        }
                    }
                    function H(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class L {
                        constructor() {
                            let {opts: e, dp: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            H(this, "toggleTimepickerIsActive", (e => {
                                this.dp.timepickerIsActive = e;
                            })), H(this, "onChangeSelectedDate", (e => {
                                let {date: t, updateTime: i = !1} = e;
                                t && (this.setMinMaxTime(t), this.setCurrentTime(!!i && t), this.addTimeToDate(t));
                            })), H(this, "onChangeLastSelectedDate", (e => {
                                e && (this.setTime(e), this.render());
                            })), H(this, "onChangeInputRange", (e => {
                                let t = e.target;
                                this[t.getAttribute("name")] = t.value, this.updateText(), this.dp.trigger(i.eventChangeTime, {
                                    hours: this.hours,
                                    minutes: this.minutes
                                });
                            })), H(this, "onMouseEnterLeave", (e => {
                                let t = e.target.getAttribute("name"), i = this.$minutesText;
                                "hours" === t && (i = this.$hoursText), i.classList.toggle("-focus-");
                            })), H(this, "onFocus", (() => {
                                this.toggleTimepickerIsActive(!0);
                            })), H(this, "onBlur", (() => {
                                this.toggleTimepickerIsActive(!1);
                            })), this.opts = e, this.dp = t;
                            let {timeFormat: s} = this.dp.locale;
                            s && (s.match(k("h")) || s.match(k("hh"))) && (this.ampm = !0), this.init();
                        }
                        init() {
                            this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), 
                            this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), 
                            this.bindDOMEvents();
                        }
                        bindDatepickerEvents() {
                            this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
                        }
                        bindDOMEvents() {
                            let e = "input";
                            navigator.userAgent.match(/trident/gi) && (e = "change"), v(this.$ranges, e, this.onChangeInputRange), 
                            v(this.$ranges, "mouseenter", this.onMouseEnterLeave), v(this.$ranges, "mouseleave", this.onMouseEnterLeave), 
                            v(this.$ranges, "focus", this.onFocus), v(this.$ranges, "mousedown", this.onFocus), 
                            v(this.$ranges, "blur", this.onBlur);
                        }
                        createElement() {
                            this.$el = n({
                                className: c("air-datepicker-time", {
                                    "-am-pm-": this.dp.ampm
                                })
                            });
                        }
                        destroy() {
                            this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), 
                            this.$el.parentNode.removeChild(this.$el);
                        }
                        buildHtml() {
                            let {ampm: e, hours: t, displayHours: i, minutes: s, minHours: a, minMinutes: n, maxHours: r, maxMinutes: h, dayPeriod: o, opts: {hoursStep: d, minutesStep: c}} = this;
                            this.$el.innerHTML = '<div class="air-datepicker-time--current">' + '   <span class="air-datepicker-time--current-hours">'.concat(l(i), "</span>") + '   <span class="air-datepicker-time--current-colon">:</span>' + '   <span class="air-datepicker-time--current-minutes">'.concat(l(s), "</span>") + "   ".concat(e ? "<span class='air-datepicker-time--current-ampm'>".concat(o, "</span>") : "") + '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' + '      <input type="range" name="hours" value="'.concat(t, '" min="').concat(a, '" max="').concat(r, '" step="').concat(d, '"/>') + '   </div>   <div class="air-datepicker-time--row">' + '      <input type="range" name="minutes" value="'.concat(s, '" min="').concat(n, '" max="').concat(h, '" step="').concat(c, '"/>') + "   </div></div>";
                        }
                        defineDOM() {
                            let e = e => a(e, this.$el);
                            this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e('[name="hours"]'), 
                            this.$minutes = e('[name="minutes"]'), this.$hoursText = e(".air-datepicker-time--current-hours"), 
                            this.$minutesText = e(".air-datepicker-time--current-minutes"), this.$ampm = e(".air-datepicker-time--current-ampm");
                        }
                        setTime(e) {
                            this.setMinMaxTime(e), this.setCurrentTime(e);
                        }
                        addTimeToDate(e) {
                            e && (e.setHours(this.hours), e.setMinutes(this.minutes));
                        }
                        setMinMaxTime(e) {
                            if (this.setMinMaxTimeFromOptions(), e) {
                                let {minDate: t, maxDate: i} = this.dp;
                                t && u(e, t) && this.setMinTimeFromMinDate(t), i && u(e, i) && this.setMaxTimeFromMaxDate(i);
                            }
                        }
                        setCurrentTime(e) {
                            let {hours: t, minutes: i} = e ? o(e) : this;
                            this.hours = f(t, this.minHours, this.maxHours), this.minutes = f(i, this.minMinutes, this.maxMinutes);
                        }
                        setMinMaxTimeFromOptions() {
                            let {minHours: e, minMinutes: t, maxHours: i, maxMinutes: s} = this.opts;
                            this.minHours = f(e, 0, 23), this.minMinutes = f(t, 0, 59), this.maxHours = f(i, 0, 23), 
                            this.maxMinutes = f(s, 0, 59);
                        }
                        setMinTimeFromMinDate(e) {
                            let {lastSelectedDate: t} = this.dp;
                            this.minHours = e.getHours(), t && t.getHours() > e.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e.getMinutes();
                        }
                        setMaxTimeFromMaxDate(e) {
                            let {lastSelectedDate: t} = this.dp;
                            this.maxHours = e.getHours(), t && t.getHours() < e.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e.getMinutes();
                        }
                        getDayPeriod(e, t) {
                            let i = e, s = Number(e);
                            e instanceof Date && (i = o(e), s = Number(i.hours));
                            let a = "am";
                            if (t || this.ampm) {
                                switch (!0) {
                                  case 12 === s:
                                  case s > 11:
                                    a = "pm";
                                }
                                s = s % 12 == 0 ? 12 : s % 12;
                            }
                            return {
                                hours: s,
                                dayPeriod: a
                            };
                        }
                        updateSliders() {
                            r(this.$hours, {
                                min: this.minHours,
                                max: this.maxHours
                            }).value = this.hours, r(this.$minutes, {
                                min: this.minMinutes,
                                max: this.maxMinutes
                            }).value = this.minutes;
                        }
                        updateText() {
                            this.$hoursText.innerHTML = l(this.displayHours), this.$minutesText.innerHTML = l(this.minutes), 
                            this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
                        }
                        set hours(e) {
                            this._hours = e;
                            let {hours: t, dayPeriod: i} = this.getDayPeriod(e);
                            this.displayHours = t, this.dayPeriod = i;
                        }
                        get hours() {
                            return this._hours;
                        }
                        render() {
                            this.updateSliders(), this.updateText();
                        }
                    }
                    function O(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class A {
                        constructor(e) {
                            let {dp: t, opts: i} = e;
                            O(this, "pressedKeys", new Set), O(this, "hotKeys", new Map([ [ [ [ "Control", "ArrowRight" ], [ "Control", "ArrowUp" ] ], e => e.month++ ], [ [ [ "Control", "ArrowLeft" ], [ "Control", "ArrowDown" ] ], e => e.month-- ], [ [ [ "Shift", "ArrowRight" ], [ "Shift", "ArrowUp" ] ], e => e.year++ ], [ [ [ "Shift", "ArrowLeft" ], [ "Shift", "ArrowDown" ] ], e => e.year-- ], [ [ [ "Alt", "ArrowRight" ], [ "Alt", "ArrowUp" ] ], e => e.year += 10 ], [ [ [ "Alt", "ArrowLeft" ], [ "Alt", "ArrowDown" ] ], e => e.year -= 10 ], [ [ "Control", "Shift", "ArrowUp" ], (e, t) => t.up() ] ])), 
                            O(this, "handleHotKey", (e => {
                                let t = this.hotKeys.get(e), i = o(this.getInitialFocusDate());
                                t(i, this.dp);
                                let {year: s, month: a, date: n} = i, r = h(new Date(s, a));
                                r < n && (n = r);
                                let l = this.dp.getClampedDate(new Date(s, a, n));
                                this.dp.setFocusDate(l, {
                                    viewDateTransition: !0
                                });
                            })), O(this, "isHotKeyPressed", (() => {
                                let e = !1, t = this.pressedKeys.size, i = e => this.pressedKeys.has(e);
                                for (let [s] of this.hotKeys) {
                                    if (e) break;
                                    if (Array.isArray(s[0])) s.forEach((a => {
                                        e || t !== a.length || (e = a.every(i) && s);
                                    })); else {
                                        if (t !== s.length) continue;
                                        e = s.every(i) && s;
                                    }
                                }
                                return e;
                            })), O(this, "isArrow", (e => e >= 37 && e <= 40)), O(this, "onKeyDown", (e => {
                                let {key: t, which: i} = e, {dp: s, dp: {focusDate: a}, opts: n} = this;
                                this.registerKey(t);
                                let r = this.isHotKeyPressed();
                                if (r) return e.preventDefault(), void this.handleHotKey(r);
                                if (this.isArrow(i)) return e.preventDefault(), void this.focusNextCell(t);
                                if ("Enter" === t) {
                                    if (s.currentView !== n.minView) return void s.down();
                                    if (a) {
                                        let e = s._checkIfDateIsSelected(a);
                                        return void (e ? s._handleAlreadySelectedDates(e, a) : s.selectDate(a));
                                    }
                                }
                                "Escape" === t && this.dp.hide();
                            })), O(this, "onKeyUp", (e => {
                                this.removeKey(e.key);
                            })), this.dp = t, this.opts = i, this.init();
                        }
                        init() {
                            this.bindKeyboardEvents();
                        }
                        bindKeyboardEvents() {
                            let {$el: e} = this.dp;
                            e.addEventListener("keydown", this.onKeyDown), e.addEventListener("keyup", this.onKeyUp);
                        }
                        destroy() {
                            let {$el: e} = this.dp;
                            e.removeEventListener("keydown", this.onKeyDown), e.removeEventListener("keyup", this.onKeyUp), 
                            this.hotKeys = null, this.pressedKeys = null;
                        }
                        getInitialFocusDate() {
                            let {focusDate: e, currentView: t, selectedDates: s, parsedViewDate: {year: a, month: n}} = this.dp, r = e || s[s.length - 1];
                            if (!r) switch (t) {
                              case i.days:
                                r = new Date(a, n, (new Date).getDate());
                                break;

                              case i.months:
                                r = new Date(a, n, 1);
                                break;

                              case i.years:
                                r = new Date(a, 0, 1);
                            }
                            return r;
                        }
                        focusNextCell(e) {
                            let t = this.getInitialFocusDate(), {currentView: s} = this.dp, {days: a, months: n, years: r} = i, h = o(t), l = h.year, d = h.month, c = h.date;
                            switch (e) {
                              case "ArrowLeft":
                                s === a && (c -= 1), s === n && (d -= 1), s === r && (l -= 1);
                                break;

                              case "ArrowUp":
                                s === a && (c -= 7), s === n && (d -= 3), s === r && (l -= 4);
                                break;

                              case "ArrowRight":
                                s === a && (c += 1), s === n && (d += 1), s === r && (l += 1);
                                break;

                              case "ArrowDown":
                                s === a && (c += 7), s === n && (d += 3), s === r && (l += 4);
                            }
                            let u = this.dp.getClampedDate(new Date(l, d, c));
                            this.dp.setFocusDate(u, {
                                viewDateTransition: !0
                            });
                        }
                        registerKey(e) {
                            this.pressedKeys.add(e);
                        }
                        removeKey(e) {
                            this.pressedKeys.delete(e);
                        }
                    }
                    let E = {
                        on(e, t) {
                            this.__events || (this.__events = {}), this.__events[e] ? this.__events[e].push(t) : this.__events[e] = [ t ];
                        },
                        off(e, t) {
                            this.__events && this.__events[e] && (this.__events[e] = this.__events[e].filter((e => e !== t)));
                        },
                        removeAllEvents() {
                            this.__events = {};
                        },
                        trigger(e) {
                            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                            this.__events && this.__events[e] && this.__events[e].forEach((e => {
                                e(...i);
                            }));
                        }
                    };
                    function N(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    let I = "", R = "", P = "", B = !1;
                    class K {
                        constructor(e, t) {
                            var r = this;
                            if (N(this, "viewIndexes", [ i.days, i.months, i.years ]), N(this, "next", (() => {
                                let {year: e, month: t} = this.parsedViewDate;
                                switch (this.currentView) {
                                  case i.days:
                                    this.setViewDate(new Date(e, t + 1, 1));
                                    break;

                                  case i.months:
                                    this.setViewDate(new Date(e + 1, t, 1));
                                    break;

                                  case i.years:
                                    this.setViewDate(new Date(e + 10, 0, 1));
                                }
                            })), N(this, "prev", (() => {
                                let {year: e, month: t} = this.parsedViewDate;
                                switch (this.currentView) {
                                  case i.days:
                                    this.setViewDate(new Date(e, t - 1, 1));
                                    break;

                                  case i.months:
                                    this.setViewDate(new Date(e - 1, t, 1));
                                    break;

                                  case i.years:
                                    this.setViewDate(new Date(e - 10, 0, 1));
                                }
                            })), N(this, "_finishHide", (() => {
                                this.hideAnimation = !1, this._destroyComponents(), this.$container.removeChild(this.$datepicker);
                            })), N(this, "setPosition", (function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if ("function" == typeof (e = e || r.opts.position)) return void (r.customHide = e({
                                    $datepicker: r.$datepicker,
                                    $target: r.$el,
                                    $pointer: r.$pointer,
                                    isViewChange: t,
                                    done: r._finishHide
                                }));
                                let i, s, {isMobile: a} = r.opts, n = r.$el.getBoundingClientRect(), h = r.$el.getBoundingClientRect(), o = r.$datepicker.offsetParent, l = r.$el.offsetParent, d = r.$datepicker.getBoundingClientRect(), c = e.split(" "), u = window.scrollY, p = window.scrollX, m = r.opts.offset, g = c[0], D = c[1];
                                if (a) r.$datepicker.style.cssText = "left: 50%; top: 50%"; else {
                                    if (o === l && o !== document.body && (h = {
                                        top: r.$el.offsetTop,
                                        left: r.$el.offsetLeft,
                                        width: n.width,
                                        height: r.$el.offsetHeight
                                    }, u = 0, p = 0), o !== l && o !== document.body) {
                                        let e = o.getBoundingClientRect();
                                        h = {
                                            top: n.top - e.top,
                                            left: n.left - e.left,
                                            width: n.width,
                                            height: n.height
                                        }, u = 0, p = 0;
                                    }
                                    switch (g) {
                                      case "top":
                                        i = h.top - d.height - m;
                                        break;

                                      case "right":
                                        s = h.left + h.width + m;
                                        break;

                                      case "bottom":
                                        i = h.top + h.height + m;
                                        break;

                                      case "left":
                                        s = h.left - d.width - m;
                                    }
                                    switch (D) {
                                      case "top":
                                        i = h.top;
                                        break;

                                      case "right":
                                        s = h.left + h.width - d.width;
                                        break;

                                      case "bottom":
                                        i = h.top + h.height - d.height;
                                        break;

                                      case "left":
                                        s = h.left;
                                        break;

                                      case "center":
                                        /left|right/.test(g) ? i = h.top + h.height / 2 - d.height / 2 : s = h.left + h.width / 2 - d.width / 2;
                                    }
                                    r.$datepicker.style.cssText = "left: ".concat(s + p, "px; top: ").concat(i + u, "px");
                                }
                            })), N(this, "_setInputValue", (() => {
                                let {opts: e, $altField: t, locale: {dateFormat: i}} = this, {altFieldDateFormat: s, altField: a} = e;
                                a && t && (t.value = this._getInputValue(s)), this.$el.value = this._getInputValue(i);
                            })), N(this, "_getInputValue", (e => {
                                let {selectedDates: t, opts: i} = this, {multipleDates: s, multipleDatesSeparator: a} = i;
                                if (!t.length) return "";
                                let n = "function" == typeof e, r = n ? e(s ? t : t[0]) : t.map((t => this.formatDate(t, e)));
                                return r = n ? r : r.join(a), r;
                            })), N(this, "_checkIfDateIsSelected", (function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.days, s = !1;
                                return r.selectedDates.some((i => {
                                    let a = u(e, i, t);
                                    return s = a && i, a;
                                })), s;
                            })), N(this, "_scheduleCallAfterTransition", (e => {
                                this._cancelScheduledCall(), e && e(!1), this._onTransitionEnd = () => {
                                    e && e(!0);
                                }, this.$datepicker.addEventListener("transitionend", this._onTransitionEnd, {
                                    once: !0
                                });
                            })), N(this, "_cancelScheduledCall", (() => {
                                this.$datepicker.removeEventListener("transitionend", this._onTransitionEnd);
                            })), N(this, "setViewDate", (e => {
                                if (!((e = b(e)) instanceof Date)) return;
                                if (u(e, this.viewDate)) return;
                                let t = this.viewDate;
                                this.viewDate = e;
                                let {onChangeViewDate: s} = this.opts;
                                if (s) {
                                    let {month: e, year: t} = this.parsedViewDate;
                                    s({
                                        month: e,
                                        year: t,
                                        decade: this.curDecade
                                    });
                                }
                                this.trigger(i.eventChangeViewDate, e, t);
                            })), N(this, "setFocusDate", (function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                (!e || (e = b(e)) instanceof Date) && (r.focusDate = e, r.opts.range && e && r._handleRangeOnFocus(), 
                                r.trigger(i.eventChangeFocusDate, e, t));
                            })), N(this, "setCurrentView", (e => {
                                if (this.viewIndexes.includes(e)) {
                                    if (this.currentView = e, this.elIsInput && this.visible && this.setPosition(void 0, !0), 
                                    this.trigger(i.eventChangeCurrentView, e), !this.views[e]) {
                                        let t = this.views[e] = new S({
                                            dp: this,
                                            opts: this.opts,
                                            type: e
                                        });
                                        this.shouldUpdateDOM && this.$content.appendChild(t.$el);
                                    }
                                    this.opts.onChangeView && this.opts.onChangeView(e);
                                }
                            })), N(this, "_updateLastSelectedDate", (e => {
                                this.lastSelectedDate = e, this.trigger(i.eventChangeLastSelectedDate, e);
                            })), N(this, "destroy", (() => {
                                let {showEvent: e, isMobile: t} = this.opts, i = this.$datepicker.parentNode;
                                i && i.removeChild(this.$datepicker), this.$el.removeEventListener(e, this._onFocus), 
                                this.$el.removeEventListener("blur", this._onBlur), window.removeEventListener("resize", this._onResize), 
                                t && this._removeMobileAttributes(), this.keyboardNav && this.keyboardNav.destroy(), 
                                this.views = null, this.nav = null, this.$datepicker = null, this.opts = null, this.$customContainer = null, 
                                this.viewDate = null, this.focusDate = null, this.selectedDates = null, this.rangeDateFrom = null, 
                                this.rangeDateTo = null;
                            })), N(this, "update", (e => {
                                let t = w({}, this.opts);
                                w(this.opts, e);
                                let {timepicker: s, buttons: a, range: n, selectedDates: r, isMobile: h} = this.opts, o = this.visible || this.treatAsInline;
                                this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this._handleLocale(), 
                                !t.selectedDates && r && this.selectDate(r), e.view && this.setCurrentView(e.view), 
                                this._setInputValue(), t.range && !n ? (this.rangeDateTo = !1, this.rangeDateFrom = !1) : !t.range && n && this.selectedDates.length && (this.rangeDateFrom = this.selectedDates[0], 
                                this.rangeDateTo = this.selectedDates[1]), t.timepicker && !s ? (o && this.timepicker.destroy(), 
                                this.timepicker = !1, this.$timepicker.parentNode.removeChild(this.$timepicker)) : !t.timepicker && s && this._addTimepicker(), 
                                !t.buttons && a ? this._addButtons() : t.buttons && !a ? (this.buttons.destroy(), 
                                this.$buttons.parentNode.removeChild(this.$buttons)) : o && t.buttons && a && this.buttons.clearHtml().render(), 
                                !t.isMobile && h ? (this.treatAsInline || P || this._createMobileOverlay(), this._addMobileAttributes(), 
                                this.visible && this._showMobileOverlay()) : t.isMobile && !h && (this._removeMobileAttributes(), 
                                this.visible && (P.classList.remove("-active-"), "function" != typeof this.opts.position && this.setPosition())), 
                                o && (this.nav.update(), this.views[this.currentView].render(), this.currentView === i.days && this.views[this.currentView].renderDayNames());
                            })), N(this, "isOtherMonth", (e => {
                                let {month: t} = o(e);
                                return t !== this.parsedViewDate.month;
                            })), N(this, "isOtherYear", (e => {
                                let {year: t} = o(e);
                                return t !== this.parsedViewDate.year;
                            })), N(this, "isOtherDecade", (e => {
                                let {year: t} = o(e), [i, s] = d(this.viewDate);
                                return t < i || t > s;
                            })), N(this, "_onChangeSelectedDate", (e => {
                                let {silent: t} = e;
                                setTimeout((() => {
                                    this._setInputValue(), this.opts.onSelect && !t && this._triggerOnSelect();
                                }));
                            })), N(this, "_onChangeFocusedDate", (function(e) {
                                let {viewDateTransition: t} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (!e) return;
                                let i = !1;
                                t && (i = r.isOtherMonth(e) || r.isOtherYear(e) || r.isOtherDecade(e)), i && r.setViewDate(e);
                            })), N(this, "_onChangeTime", (e => {
                                let {hours: t, minutes: i} = e, s = new Date, {lastSelectedDate: a, opts: {onSelect: n}} = this, r = a;
                                a || (r = s);
                                let h = this.getCell(r, this.currentViewSingular), o = h && h.adpCell;
                                o && o.isDisabled || (r.setHours(t), r.setMinutes(i), a ? (this._setInputValue(), 
                                n && this._triggerOnSelect()) : this.selectDate(r));
                            })), N(this, "_onFocus", (e => {
                                this.visible || this.show();
                            })), N(this, "_onBlur", (e => {
                                this.inFocus || !this.visible || this.opts.isMobile || this.hide();
                            })), N(this, "_onMouseDown", (e => {
                                this.inFocus = !0;
                            })), N(this, "_onMouseUp", (e => {
                                this.inFocus = !1, this.$el.focus();
                            })), N(this, "_onResize", (() => {
                                this.visible && "function" != typeof this.opts.position && this.setPosition();
                            })), N(this, "_onClickOverlay", (() => {
                                this.visible && this.hide();
                            })), N(this, "isWeekend", (e => this.opts.weekends.includes(e))), N(this, "getClampedDate", (e => {
                                let {minDate: t, maxDate: i} = this, s = e;
                                return i && p(e, i) ? s = i : t && m(e, t) && (s = t), s;
                            })), this.$el = a(e), !this.$el) return;
                            this.$datepicker = n({
                                className: "air-datepicker"
                            }), this.opts = w({}, s, t), this.$customContainer = !!this.opts.container && a(this.opts.container), 
                            this.$altField = a(this.opts.altField || !1), I || (I = a("body"));
                            let {view: h, startDate: l} = this.opts;
                            l || (this.opts.startDate = new Date), "INPUT" === this.$el.nodeName && (this.elIsInput = !0), 
                            this.inited = !1, this.visible = !1, this.viewDate = b(this.opts.startDate), this.focusDate = !1, 
                            this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = !1, 
                            this.currentView = h, this.selectedDates = [], this.views = {}, this.keys = [], 
                            this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = !1, this.treatAsInline = this.opts.inline || !this.elIsInput, 
                            this.init();
                        }
                        init() {
                            let {opts: e, treatAsInline: t, opts: {inline: i, isMobile: s, selectedDates: a, keyboardNav: r, onlyTimepicker: h}} = this;
                            var o;
                            B || i || !this.elIsInput || (B = !0, R = n({
                                className: o = K.defaultContainerId,
                                id: o
                            }), I.appendChild(R)), !s || P || t || this._createMobileOverlay(), this._handleLocale(), 
                            this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), 
                            this.elIsInput && (i || this._bindEvents(), r && !h && (this.keyboardNav = new A({
                                dp: this,
                                opts: e
                            }))), a && this.selectDate(a, {
                                silent: !0
                            }), this.opts.visible && !t && this.show(), s && !t && this.$el.setAttribute("readonly", !0), 
                            t && this._createComponents();
                        }
                        _createMobileOverlay() {
                            P = n({
                                className: "air-datepicker-overlay"
                            }), R.appendChild(P);
                        }
                        _createComponents() {
                            let {opts: e, treatAsInline: t, opts: {inline: i, buttons: s, timepicker: a, position: n, classes: r, onlyTimepicker: h, isMobile: o}} = this;
                            this._buildBaseHtml(), this.elIsInput && (i || this._setPositionClasses(n)), !i && this.elIsInput || this.$datepicker.classList.add("-inline-"), 
                            r && this.$datepicker.classList.add(...r.split(" ")), h && this.$datepicker.classList.add("-only-timepicker-"), 
                            o && !t && this._addMobileAttributes(), this.views[this.currentView] = new S({
                                dp: this,
                                type: this.currentView,
                                opts: e
                            }), this.nav = new F({
                                dp: this,
                                opts: e
                            }), a && this._addTimepicker(), s && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), 
                            this.$nav.appendChild(this.nav.$el);
                        }
                        _destroyComponents() {
                            for (let e in this.views) this.views[e].destroy();
                            this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
                        }
                        _addMobileAttributes() {
                            P.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), 
                            this.$el.setAttribute("readonly", !0);
                        }
                        _removeMobileAttributes() {
                            P.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), 
                            this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
                        }
                        _createMinMaxDates() {
                            let {minDate: e, maxDate: t} = this.opts;
                            this.minDate = !!e && b(e), this.maxDate = !!t && b(t);
                        }
                        _addTimepicker() {
                            this.$timepicker = n({
                                className: "air-datepicker--time"
                            }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({
                                dp: this,
                                opts: this.opts
                            }), this.$timepicker.appendChild(this.timepicker.$el);
                        }
                        _addButtons() {
                            this.$buttons = n({
                                className: "air-datepicker--buttons"
                            }), this.$datepicker.appendChild(this.$buttons), this.buttons = new x({
                                dp: this,
                                opts: this.opts
                            }), this.$buttons.appendChild(this.buttons.$el);
                        }
                        _bindSubEvents() {
                            this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i.eventChangeFocusDate, this._onChangeFocusedDate), 
                            this.on(i.eventChangeTime, this._onChangeTime);
                        }
                        _buildBaseHtml() {
                            let {inline: e} = this.opts;
                            var t, i;
                            this.elIsInput ? e ? (t = this.$datepicker, (i = this.$el).parentNode.insertBefore(t, i.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), 
                            this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', 
                            this.$content = a(".air-datepicker--content", this.$datepicker), this.$pointer = a(".air-datepicker--pointer", this.$datepicker), 
                            this.$nav = a(".air-datepicker--navigation", this.$datepicker);
                        }
                        _handleLocale() {
                            let {locale: e, dateFormat: t, firstDay: i, timepicker: s, onlyTimepicker: a, timeFormat: n, dateTimeSeparator: r} = this.opts;
                            var h;
                            this.locale = (h = e, JSON.parse(JSON.stringify(h))), t && (this.locale.dateFormat = t), 
                            void 0 !== n && "" !== n && (this.locale.timeFormat = n);
                            let {timeFormat: o} = this.locale;
                            if ("" !== i && (this.locale.firstDay = i), s && "function" != typeof t) {
                                let e = o ? r : "";
                                this.locale.dateFormat = [ this.locale.dateFormat, o || "" ].join(e);
                            }
                            a && (this.locale.dateFormat = this.locale.timeFormat);
                        }
                        _setPositionClasses(e) {
                            if ("function" == typeof e) return void this.$datepicker.classList.add("-custom-position-");
                            let t = (e = e.split(" "))[0], i = e[1], s = "air-datepicker -".concat(t, "-").concat(i, "- -from-").concat(t, "-");
                            this.$datepicker.classList.add(...s.split(" "));
                        }
                        _bindEvents() {
                            this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), 
                            this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), 
                            window.addEventListener("resize", this._onResize);
                        }
                        _limitViewDateByMaxMinDates() {
                            let {viewDate: e, minDate: t, maxDate: i} = this;
                            i && p(e, i) && this.setViewDate(i), t && m(e, t) && this.setViewDate(t);
                        }
                        formatDate() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate, t = arguments.length > 1 ? arguments[1] : void 0;
                            if (e = b(e), !(e instanceof Date)) return;
                            let i = t, s = this.locale, a = o(e), n = d(e), r = K.replacer, h = "am";
                            this.opts.timepicker && this.timepicker && (h = this.timepicker.getDayPeriod(e).dayPeriod);
                            let l = {
                                T: e.getTime(),
                                m: a.minutes,
                                mm: a.fullMinutes,
                                h: a.hours12,
                                hh: a.fullHours12,
                                H: a.hours,
                                HH: a.fullHours,
                                aa: h,
                                AA: h.toUpperCase(),
                                E: s.daysShort[a.day],
                                EEEE: s.days[a.day],
                                d: a.date,
                                dd: a.fullDate,
                                M: a.month + 1,
                                MM: a.fullMonth,
                                MMM: s.monthsShort[a.month],
                                MMMM: s.months[a.month],
                                yy: a.year.toString().slice(-2),
                                yyyy: a.year,
                                yyyy1: n[0],
                                yyyy2: n[1]
                            };
                            for (let [e, t] of Object.entries(l)) i = r(i, k(e), t);
                            return i;
                        }
                        down(e) {
                            this._handleUpDownActions(e, "down");
                        }
                        up(e) {
                            this._handleUpDownActions(e, "up");
                        }
                        selectDate(e) {
                            let t, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {currentView: a, parsedViewDate: n, selectedDates: r} = this, {updateTime: h} = s, {moveToOtherMonthsOnSelect: o, moveToOtherYearsOnSelect: l, multipleDates: d, range: c, autoClose: u} = this.opts, m = r.length;
                            if (Array.isArray(e)) return e.forEach((e => {
                                this.selectDate(e, s);
                            })), new Promise((e => {
                                setTimeout(e);
                            }));
                            if ((e = b(e)) instanceof Date) {
                                if (a === i.days && e.getMonth() !== n.month && o && (t = new Date(e.getFullYear(), e.getMonth(), 1)), 
                                a === i.years && e.getFullYear() !== n.year && l && (t = new Date(e.getFullYear(), 0, 1)), 
                                t && this.setViewDate(t), d && !c) {
                                    if (m === d) return;
                                    this._checkIfDateIsSelected(e) || r.push(e);
                                } else if (c) switch (m) {
                                  case 1:
                                    r.push(e), this.rangeDateTo || (this.rangeDateTo = e), p(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, 
                                    this.rangeDateFrom = e), this.selectedDates = [ this.rangeDateFrom, this.rangeDateTo ];
                                    break;

                                  case 2:
                                    this.selectedDates = [ e ], this.rangeDateFrom = e, this.rangeDateTo = "";
                                    break;

                                  default:
                                    this.selectedDates = [ e ], this.rangeDateFrom = e;
                                } else this.selectedDates = [ e ];
                                return this.trigger(i.eventChangeSelectedDate, {
                                    action: i.actionSelectDate,
                                    silent: null == s ? void 0 : s.silent,
                                    date: e,
                                    updateTime: h
                                }), this._updateLastSelectedDate(e), u && !this.timepickerIsActive && this.visible && (d || c ? c && 1 === m && this.hide() : this.hide()), 
                                new Promise((e => {
                                    setTimeout(e);
                                }));
                            }
                        }
                        unselectDate(e) {
                            let t = this.selectedDates, s = this;
                            if ((e = b(e)) instanceof Date) return t.some(((a, n) => {
                                if (u(a, e)) return t.splice(n, 1), s.selectedDates.length ? s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length - 1]) : (s.rangeDateFrom = "", 
                                s.rangeDateTo = "", s._updateLastSelectedDate(!1)), this.trigger(i.eventChangeSelectedDate, {
                                    action: i.actionUnselectDate,
                                    date: e
                                }), !0;
                            }));
                        }
                        replaceDate(e, t) {
                            let s = this.selectedDates.find((t => u(t, e, this.currentView))), a = this.selectedDates.indexOf(s);
                            a < 0 || u(this.selectedDates[a], t, this.currentView) || (this.selectedDates[a] = t, 
                            this.trigger(i.eventChangeSelectedDate, {
                                action: i.actionSelectDate,
                                date: t,
                                updateTime: !0
                            }), this._updateLastSelectedDate(t));
                        }
                        clear() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return this.selectedDates = [], this.rangeDateFrom = !1, this.rangeDateTo = !1, 
                            this.trigger(i.eventChangeSelectedDate, {
                                action: i.actionUnselectDate,
                                silent: e.silent
                            }), new Promise((e => {
                                setTimeout(e);
                            }));
                        }
                        show() {
                            let {onShow: e, isMobile: t} = this.opts;
                            this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), 
                            this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), 
                            this.visible = !0, e && this._scheduleCallAfterTransition(e), t && this._showMobileOverlay();
                        }
                        hide() {
                            let {onHide: e, isMobile: t} = this.opts, i = this._hasTransition();
                            this.visible = !1, this.hideAnimation = !0, this.$datepicker.classList.remove("-active-"), 
                            this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition((t => {
                                !this.customHide && (t && i || !t && !i) && this._finishHide(), e && e(t);
                            })), t && P.classList.remove("-active-");
                        }
                        _triggerOnSelect() {
                            let e = [], t = [], {selectedDates: i, locale: s, opts: {onSelect: a, multipleDates: n, range: r}} = this, h = n || r, o = "function" == typeof s.dateFormat;
                            i.length && (e = i.map(g), t = o ? n ? s.dateFormat(e) : e.map((e => s.dateFormat(e))) : e.map((e => this.formatDate(e, s.dateFormat)))), 
                            a({
                                date: h ? e : e[0],
                                formattedDate: h ? t : t[0],
                                datepicker: this
                            });
                        }
                        _handleAlreadySelectedDates(e, t) {
                            let {range: i, toggleSelected: s} = this.opts;
                            i ? s ? this.unselectDate(t) : 2 !== this.selectedDates.length && this.selectDate(t) : s && this.unselectDate(t), 
                            s || this._updateLastSelectedDate(e);
                        }
                        _handleUpDownActions(e, t) {
                            if (!((e = b(e || this.focusDate || this.viewDate)) instanceof Date)) return;
                            let i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
                            i > 2 && (i = 2), i < 0 && (i = 0), this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)), 
                            this.setCurrentView(this.viewIndexes[i]);
                        }
                        _handleRangeOnFocus() {
                            1 === this.selectedDates.length && (p(this.selectedDates[0], this.focusDate) ? (this.rangeDateTo = this.selectedDates[0], 
                            this.rangeDateFrom = this.focusDate) : (this.rangeDateTo = this.focusDate, this.rangeDateFrom = this.selectedDates[0]));
                        }
                        getCell(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
                            if (!((e = b(e)) instanceof Date)) return;
                            let {year: s, month: a, date: n} = o(e), r = '[data-year="'.concat(s, '"]'), h = '[data-month="'.concat(a, '"]'), l = '[data-date="'.concat(n, '"]'), d = {
                                [i.day]: "".concat(r).concat(h).concat(l),
                                [i.month]: "".concat(r).concat(h),
                                [i.year]: "".concat(r)
                            };
                            return this.views[this.currentView].$el.querySelector(d[t]);
                        }
                        _showMobileOverlay() {
                            P.classList.add("-active-");
                        }
                        _hasTransition() {
                            return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(((e, t) => parseFloat(t) + e), 0) > 0;
                        }
                        get shouldUpdateDOM() {
                            return this.visible || this.treatAsInline;
                        }
                        get parsedViewDate() {
                            return o(this.viewDate);
                        }
                        get currentViewSingular() {
                            return this.currentView.slice(0, -1);
                        }
                        get curDecade() {
                            return d(this.viewDate);
                        }
                        get viewIndex() {
                            return this.viewIndexes.indexOf(this.currentView);
                        }
                        get isFinalView() {
                            return this.currentView === i.years;
                        }
                        get hasSelectedDates() {
                            return this.selectedDates.length > 0;
                        }
                        get isMinViewReached() {
                            return this.currentView === this.opts.minView || this.currentView === i.days;
                        }
                        get $container() {
                            return this.$customContainer || R;
                        }
                        static replacer(e, t, i) {
                            return e.replace(t, (function(e, t, s, a) {
                                return t + i + a;
                            }));
                        }
                    }
                    var j;
                    return N(K, "defaults", s), N(K, "version", "3.2.0"), N(K, "defaultContainerId", "air-datepicker-global-container"), 
                    j = K.prototype, Object.assign(j, E), t.default;
                }();
            }));
        },
        992: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                return function() {
                    "use strict";
                    var e = {
                        d: function(t, i) {
                            for (var s in i) e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, {
                                enumerable: !0,
                                get: i[s]
                            });
                        },
                        o: function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }
                    }, t = {};
                    e.d(t, {
                        default: function() {
                            return K;
                        }
                    });
                    var i = {
                        days: "days",
                        months: "months",
                        years: "years",
                        day: "day",
                        month: "month",
                        year: "year",
                        eventChangeViewDate: "changeViewDate",
                        eventChangeCurrentView: "changeCurrentView",
                        eventChangeFocusDate: "changeFocusDate",
                        eventChangeSelectedDate: "changeSelectedDate",
                        eventChangeTime: "changeTime",
                        eventChangeLastSelectedDate: "changeLastSelectedDate",
                        actionSelectDate: "selectDate",
                        actionUnselectDate: "unselectDate",
                        cssClassWeekend: "-weekend-"
                    }, s = {
                        classes: "",
                        inline: !1,
                        locale: {
                            days: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
                            daysShort: [ "Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб" ],
                            daysMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
                            months: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
                            monthsShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
                            today: "Сегодня",
                            clear: "Очистить",
                            dateFormat: "dd.MM.yyyy",
                            timeFormat: "HH:mm",
                            firstDay: 1
                        },
                        startDate: new Date,
                        firstDay: "",
                        weekends: [ 6, 0 ],
                        dateFormat: "",
                        altField: "",
                        altFieldDateFormat: "T",
                        toggleSelected: !0,
                        keyboardNav: !0,
                        selectedDates: !1,
                        container: "",
                        isMobile: !1,
                        visible: !1,
                        position: "bottom left",
                        offset: 12,
                        view: i.days,
                        minView: i.days,
                        showOtherMonths: !0,
                        selectOtherMonths: !0,
                        moveToOtherMonthsOnSelect: !0,
                        showOtherYears: !0,
                        selectOtherYears: !0,
                        moveToOtherYearsOnSelect: !0,
                        minDate: "",
                        maxDate: "",
                        disableNavWhenOutOfRange: !0,
                        multipleDates: !1,
                        multipleDatesSeparator: ", ",
                        range: !1,
                        dynamicRange: !0,
                        buttons: !1,
                        monthsField: "monthsShort",
                        showEvent: "focus",
                        autoClose: !1,
                        prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
                        nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
                        navTitles: {
                            days: "MMMM, <i>yyyy</i>",
                            months: "yyyy",
                            years: "yyyy1 - yyyy2"
                        },
                        timepicker: !1,
                        onlyTimepicker: !1,
                        dateTimeSeparator: " ",
                        timeFormat: "",
                        minHours: 0,
                        maxHours: 24,
                        minMinutes: 0,
                        maxMinutes: 59,
                        hoursStep: 1,
                        minutesStep: 1,
                        onSelect: !1,
                        onChangeViewDate: !1,
                        onChangeView: !1,
                        onRenderCell: !1,
                        onShow: !1,
                        onHide: !1,
                        onClickDayName: !1
                    };
                    function a(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                        return "string" == typeof e ? t.querySelector(e) : e;
                    }
                    function n() {
                        let {tagName: e = "div", className: t = "", innerHtml: i = "", id: s = "", attrs: a = {}} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = document.createElement(e);
                        if (t && n.classList.add(...t.split(" ")), s && (n.id = s), i && (n.innerHTML = i), 
                        a) for (let e in a) n.setAttribute(e, a[e]);
                        return n;
                    }
                    function r(e, t) {
                        for (let [i, s] of Object.entries(t)) e.setAttribute(i, s);
                        return e;
                    }
                    function h(e) {
                        return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
                    }
                    function o(e) {
                        let t = e.getHours(), i = t % 12 == 0 ? 12 : t % 12;
                        return {
                            year: e.getFullYear(),
                            month: e.getMonth(),
                            fullMonth: e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
                            date: e.getDate(),
                            fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
                            day: e.getDay(),
                            hours: t,
                            fullHours: l(t),
                            hours12: i,
                            fullHours12: l(i),
                            minutes: e.getMinutes(),
                            fullMinutes: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
                        };
                    }
                    function l(e) {
                        return e < 10 ? "0" + e : e;
                    }
                    function d(e) {
                        let t = 10 * Math.floor(e.getFullYear() / 10);
                        return [ t, t + 9 ];
                    }
                    function c() {
                        let e = [];
                        for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                        return i.forEach((t => {
                            if ("object" == typeof t) for (let i in t) t[i] && e.push(i); else t && e.push(t);
                        })), e.join(" ");
                    }
                    function u(e, t) {
                        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
                        if (!e || !t) return !1;
                        let a = o(e), n = o(t), r = {
                            [i.days]: a.date === n.date && a.month === n.month && a.year === n.year,
                            [i.months]: a.month === n.month && a.year === n.year,
                            [i.years]: a.year === n.year
                        };
                        return r[s];
                    }
                    function p(e, t, i) {
                        let s = g(e, !1).getTime(), a = g(t, !1).getTime();
                        return i ? s >= a : s > a;
                    }
                    function m(e, t) {
                        return !p(e, t, !0);
                    }
                    function g(e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = new Date(e.getTime());
                        return "boolean" != typeof t || t || D(i), i;
                    }
                    function D(e) {
                        return e.setHours(0, 0, 0, 0), e;
                    }
                    function v(e, t, i) {
                        e.length ? e.forEach((e => {
                            e.addEventListener(t, i);
                        })) : e.addEventListener(t, i);
                    }
                    function y(e, t) {
                        return !(!e || e === document || e instanceof DocumentFragment) && (e.matches(t) ? e : y(e.parentNode, t));
                    }
                    function f(e, t, i) {
                        return e > i ? i : e < t ? t : e;
                    }
                    function w(e) {
                        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                        return i.filter((e => e)).forEach((t => {
                            for (let [i, s] of Object.entries(t)) if (void 0 !== s && "[object Object]" === s.toString()) {
                                let t = void 0 !== e[i] ? e[i].toString() : void 0, a = s.toString(), n = Array.isArray(s) ? [] : {};
                                e[i] = e[i] ? t !== a ? n : e[i] : n, w(e[i], s);
                            } else e[i] = s;
                        })), e;
                    }
                    function b(e) {
                        let t = e;
                        return e instanceof Date || (t = new Date(e)), isNaN(t.getTime()) && (console.log('Unable to convert value "'.concat(e, '" to Date object')), 
                        t = !1), t;
                    }
                    function k(e) {
                        let t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
                        return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
                    }
                    function C(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class _ {
                        constructor() {
                            let {type: e, date: t, dp: i, opts: s, body: a} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            C(this, "focus", (() => {
                                this.$cell.classList.add("-focus-"), this.focused = !0;
                            })), C(this, "removeFocus", (() => {
                                this.$cell.classList.remove("-focus-"), this.focused = !1;
                            })), C(this, "select", (() => {
                                this.$cell.classList.add("-selected-"), this.selected = !0;
                            })), C(this, "removeSelect", (() => {
                                this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), this.selected = !1;
                            })), C(this, "onChangeSelectedDate", (() => {
                                this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
                            })), C(this, "onChangeFocusDate", (e => {
                                if (!e) return void (this.focused && this.removeFocus());
                                let t = u(e, this.date, this.type);
                                t ? this.focus() : !t && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
                            })), C(this, "render", (() => (this.$cell.innerHTML = this._getHtml(), this.$cell.adpCell = this, 
                            this.$cell))), this.type = e, this.singleType = this.type.slice(0, -1), this.date = t, 
                            this.dp = i, this.opts = s, this.body = a, this.customData = !1, this.init();
                        }
                        init() {
                            let {range: e, onRenderCell: t} = this.opts;
                            t && (this.customData = t({
                                date: this.date,
                                cellType: this.singleType,
                                datepicker: this.dp
                            })), this._createElement(), this._bindDatepickerEvents(), this._handleInitialFocusStatus(), 
                            this.dp.hasSelectedDates && (this._handleSelectedStatus(), e && this._handleRangeStatus());
                        }
                        _bindDatepickerEvents() {
                            this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
                        }
                        unbindDatepickerEvents() {
                            this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
                        }
                        _createElement() {
                            let {year: e, month: t, date: i} = o(this.date);
                            this.$cell = n({
                                className: this._getClassName(),
                                attrs: {
                                    "data-year": e,
                                    "data-month": t,
                                    "data-date": i
                                }
                            });
                        }
                        _getClassName() {
                            var e, t;
                            let s = new Date, {selectOtherMonths: a, selectOtherYears: n} = this.opts, {minDate: r, maxDate: h} = this.dp, {day: l} = o(this.date), d = this._isOutOfMinMaxRange(), p = null === (e = this.customData) || void 0 === e ? void 0 : e.disabled, m = c("air-datepicker-cell", "-".concat(this.singleType, "-"), {
                                "-current-": u(s, this.date, this.type),
                                "-min-date-": r && u(r, this.date, this.type),
                                "-max-date-": h && u(h, this.date, this.type)
                            }), g = "";
                            switch (this.type) {
                              case i.days:
                                g = c({
                                    "-weekend-": this.dp.isWeekend(l),
                                    "-other-month-": this.isOtherMonth,
                                    "-disabled-": this.isOtherMonth && !a || d || p
                                });
                                break;

                              case i.months:
                                g = c({
                                    "-disabled-": d || p
                                });
                                break;

                              case i.years:
                                g = c({
                                    "-other-decade-": this.isOtherDecade,
                                    "-disabled-": d || this.isOtherDecade && !n || p
                                });
                            }
                            return c(m, g, null === (t = this.customData) || void 0 === t ? void 0 : t.classes);
                        }
                        _getHtml() {
                            var e;
                            let {year: t, month: s, date: a} = o(this.date), {showOtherMonths: n, showOtherYears: r} = this.opts;
                            if (null !== (e = this.customData) && void 0 !== e && e.html) return this.customData.html;
                            switch (this.type) {
                              case i.days:
                                return !n && this.isOtherMonth ? "" : a;

                              case i.months:
                                return this.dp.locale[this.opts.monthsField][s];

                              case i.years:
                                return !r && this.isOtherDecade ? "" : t;
                            }
                        }
                        _isOutOfMinMaxRange() {
                            let {minDate: e, maxDate: t} = this.dp, {type: s, date: a} = this, {month: n, year: r, date: h} = o(a), l = s === i.days, d = s === i.years, c = !!e && new Date(r, d ? e.getMonth() : n, l ? h : e.getDate()), u = !!t && new Date(r, d ? t.getMonth() : n, l ? h : t.getDate());
                            return e && t ? m(c, e) || p(u, t) : e ? m(c, e) : t ? p(u, t) : void 0;
                        }
                        destroy() {
                            this.unbindDatepickerEvents();
                        }
                        _handleRangeStatus() {
                            let {rangeDateFrom: e, rangeDateTo: t} = this.dp, i = c({
                                "-in-range-": e && t && (s = this.date, a = e, n = t, p(s, a) && m(s, n)),
                                "-range-from-": e && u(this.date, e, this.type),
                                "-range-to-": t && u(this.date, t, this.type)
                            });
                            var s, a, n;
                            this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), i && this.$cell.classList.add(...i.split(" "));
                        }
                        _handleSelectedStatus() {
                            let e = this.dp._checkIfDateIsSelected(this.date, this.type);
                            e ? this.select() : !e && this.selected && this.removeSelect();
                        }
                        _handleInitialFocusStatus() {
                            u(this.dp.focusDate, this.date, this.type) && this.focus();
                        }
                        get isDisabled() {
                            return this.$cell.matches(".-disabled-");
                        }
                        get isOtherMonth() {
                            return this.dp.isOtherMonth(this.date);
                        }
                        get isOtherDecade() {
                            return this.dp.isOtherDecade(this.date);
                        }
                    }
                    function M(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    let $ = {
                        [i.days]: '<div class="air-datepicker-body--day-names"></div>' + '<div class="air-datepicker-body--cells -'.concat(i.days, '-"></div>'),
                        [i.months]: '<div class="air-datepicker-body--cells -'.concat(i.months, '-"></div>'),
                        [i.years]: '<div class="air-datepicker-body--cells -'.concat(i.years, '-"></div>')
                    };
                    class S {
                        constructor(e) {
                            let {dp: t, type: s, opts: a} = e;
                            M(this, "handleClick", (e => {
                                let t = e.target.adpCell;
                                if (t.isDisabled) return;
                                if (!this.dp.isMinViewReached) return void this.dp.down();
                                let i = this.dp._checkIfDateIsSelected(t.date, t.type);
                                i ? this.dp._handleAlreadySelectedDates(i, t.date) : this.dp.selectDate(t.date);
                            })), M(this, "handleDayNameClick", (e => {
                                let t = e.target.getAttribute("data-day-index");
                                this.opts.onClickDayName({
                                    dayIndex: Number(t),
                                    datepicker: this.dp
                                });
                            })), M(this, "onChangeCurrentView", (e => {
                                e !== this.type ? this.hide() : (this.show(), this.render());
                            })), M(this, "onMouseOverCell", (e => {
                                let t = y(e.target, ".air-datepicker-cell");
                                this.dp.setFocusDate(!!t && t.adpCell.date);
                            })), M(this, "onMouseOutCell", (() => {
                                this.dp.setFocusDate(!1);
                            })), M(this, "onClickBody", (e => {
                                let {onClickDayName: t} = this.opts, i = e.target;
                                i.closest(".air-datepicker-cell") && this.handleClick(e), t && i.closest(".air-datepicker-body--day-name") && this.handleDayNameClick(e);
                            })), M(this, "onMouseDown", (e => {
                                this.pressed = !0;
                                let t = y(e.target, ".air-datepicker-cell"), i = t && t.adpCell;
                                u(i.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = !0), u(i.date, this.dp.rangeDateTo) && (this.rangeToFocused = !0);
                            })), M(this, "onMouseMove", (e => {
                                if (!this.pressed || !this.dp.isMinViewReached) return;
                                e.preventDefault();
                                let t = y(e.target, ".air-datepicker-cell"), i = t && t.adpCell, {selectedDates: s, rangeDateTo: a, rangeDateFrom: n} = this.dp;
                                if (!i || i.isDisabled) return;
                                let {date: r} = i;
                                if (2 === s.length) {
                                    if (this.rangeFromFocused && !p(r, a)) {
                                        let {hours: e, minutes: t} = o(n);
                                        r.setHours(e), r.setMinutes(t), this.dp.rangeDateFrom = r, this.dp.replaceDate(n, r);
                                    }
                                    if (this.rangeToFocused && !m(r, n)) {
                                        let {hours: e, minutes: t} = o(a);
                                        r.setHours(e), r.setMinutes(t), this.dp.rangeDateTo = r, this.dp.replaceDate(a, r);
                                    }
                                }
                            })), M(this, "onMouseUp", (() => {
                                this.pressed = !1, this.rangeFromFocused = !1, this.rangeToFocused = !1;
                            })), M(this, "onChangeViewDate", ((e, t) => {
                                if (!this.isVisible) return;
                                let s = d(e), a = d(t);
                                switch (this.dp.currentView) {
                                  case i.days:
                                    if (u(e, t, i.months)) return;
                                    break;

                                  case i.months:
                                    if (u(e, t, i.years)) return;
                                    break;

                                  case i.years:
                                    if (s[0] === a[0] && s[1] === a[1]) return;
                                }
                                this.render();
                            })), M(this, "render", (() => {
                                this.destroyCells(), this._generateCells(), this.cells.forEach((e => {
                                    this.$cells.appendChild(e.render());
                                }));
                            })), this.dp = t, this.type = s, this.opts = a, this.cells = [], this.$el = "", 
                            this.pressed = !1, this.isVisible = !0, this.init();
                        }
                        init() {
                            this._buildBaseHtml(), this.type === i.days && this.renderDayNames(), this.render(), 
                            this._bindEvents(), this._bindDatepickerEvents();
                        }
                        _bindEvents() {
                            let {range: e, dynamicRange: t} = this.opts;
                            v(this.$el, "mouseover", this.onMouseOverCell), v(this.$el, "mouseout", this.onMouseOutCell), 
                            v(this.$el, "click", this.onClickBody), e && t && (v(this.$el, "mousedown", this.onMouseDown), 
                            v(this.$el, "mousemove", this.onMouseMove), v(window.document, "mouseup", this.onMouseUp));
                        }
                        _bindDatepickerEvents() {
                            this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
                        }
                        _buildBaseHtml() {
                            this.$el = n({
                                className: "air-datepicker-body -".concat(this.type, "-"),
                                innerHtml: $[this.type]
                            }), this.$names = a(".air-datepicker-body--day-names", this.$el), this.$cells = a(".air-datepicker-body--cells", this.$el);
                        }
                        _getDayNamesHtml() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay, t = "", s = this.dp.isWeekend, {onClickDayName: a} = this.opts, n = e, r = 0;
                            for (;r < 7; ) {
                                let e = n % 7, h = c("air-datepicker-body--day-name", {
                                    [i.cssClassWeekend]: s(e),
                                    "-clickable-": !!a
                                }), o = this.dp.locale.daysMin[e];
                                t += '<div class="'.concat(h, "\" data-day-index='").concat(e, "'>").concat(o, "</div>"), 
                                r++, n++;
                            }
                            return t;
                        }
                        _getDaysCells() {
                            let {viewDate: e, locale: {firstDay: t}} = this.dp, i = h(e), {year: s, month: a} = o(e), n = new Date(s, a, 1), r = new Date(s, a, i), l = n.getDay() - t, d = 6 - r.getDay() + t;
                            l = l < 0 ? l + 7 : l, d = d > 6 ? d - 7 : d;
                            let c = function(e, t) {
                                let {year: i, month: s, date: a} = o(e);
                                return new Date(i, s, a - t);
                            }(n, l), u = i + l + d, p = c.getDate(), {year: m, month: g} = o(c), D = 0;
                            for (;D < u; ) {
                                let e = new Date(m, g, p + D);
                                this._generateCell(e), D++;
                            }
                        }
                        _generateCell(e) {
                            let {type: t, dp: i, opts: s} = this, a = new _({
                                type: t,
                                dp: i,
                                opts: s,
                                date: e,
                                body: this
                            });
                            return this.cells.push(a), a;
                        }
                        _generateDayCells() {
                            this._getDaysCells();
                        }
                        _generateMonthCells() {
                            let {year: e} = this.dp.parsedViewDate, t = 0;
                            for (;t < 12; ) this.cells.push(this._generateCell(new Date(e, t))), t++;
                        }
                        _generateYearCells() {
                            let e = d(this.dp.viewDate), t = e[0] - 1, i = e[1] + 1, s = t;
                            for (;s <= i; ) this.cells.push(this._generateCell(new Date(s, 0))), s++;
                        }
                        renderDayNames() {
                            this.$names.innerHTML = this._getDayNamesHtml();
                        }
                        _generateCells() {
                            switch (this.type) {
                              case i.days:
                                this._generateDayCells();
                                break;

                              case i.months:
                                this._generateMonthCells();
                                break;

                              case i.years:
                                this._generateYearCells();
                            }
                        }
                        show() {
                            this.isVisible = !0, this.$el.classList.remove("-hidden-");
                        }
                        hide() {
                            this.isVisible = !1, this.$el.classList.add("-hidden-");
                        }
                        destroyCells() {
                            this.cells.forEach((e => e.destroy())), this.cells = [], this.$cells.innerHTML = "";
                        }
                        destroy() {
                            this.destroyCells(), this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), 
                            this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
                        }
                    }
                    function T(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class F {
                        constructor(e) {
                            let {dp: t, opts: i} = e;
                            T(this, "onClickNav", (e => {
                                let t = y(e.target, ".air-datepicker-nav--action");
                                if (!t) return;
                                let i = t.dataset.action;
                                this.dp[i]();
                            })), T(this, "onChangeViewDate", (() => {
                                this.render(), this._resetNavStatus(), this.handleNavStatus();
                            })), T(this, "onChangeCurrentView", (() => {
                                this.render(), this._resetNavStatus(), this.handleNavStatus();
                            })), T(this, "onClickNavTitle", (() => {
                                this.dp.isFinalView || this.dp.up();
                            })), T(this, "update", (() => {
                                let {prevHtml: e, nextHtml: t} = this.opts;
                                this.$prev.innerHTML = e, this.$next.innerHTML = t, this._resetNavStatus(), this.render(), 
                                this.handleNavStatus();
                            })), T(this, "renderDelay", (() => {
                                setTimeout(this.render);
                            })), T(this, "render", (() => {
                                this.$title.innerHTML = this._getTitle(), function(e, t) {
                                    for (let i in t) t[i] ? e.classList.add(i) : e.classList.remove(i);
                                }(this.$title, {
                                    "-disabled-": this.dp.isFinalView
                                });
                            })), this.dp = t, this.opts = i, this.init();
                        }
                        init() {
                            this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), 
                            this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
                        }
                        _defineDOM() {
                            this.$title = a(".air-datepicker-nav--title", this.$el), this.$prev = a('[data-action="prev"]', this.$el), 
                            this.$next = a('[data-action="next"]', this.$el);
                        }
                        _bindEvents() {
                            this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
                        }
                        _bindDatepickerEvents() {
                            this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView), 
                            this.isNavIsFunction && (this.dp.on(i.eventChangeSelectedDate, this.renderDelay), 
                            this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
                        }
                        destroy() {
                            this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView), 
                            this.isNavIsFunction && (this.dp.off(i.eventChangeSelectedDate, this.renderDelay), 
                            this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
                        }
                        _createElement() {
                            this.$el = n({
                                tagName: "nav",
                                className: "air-datepicker-nav"
                            });
                        }
                        _getTitle() {
                            let {dp: e, opts: t} = this, i = t.navTitles[e.currentView];
                            return "function" == typeof i ? i(e) : e.formatDate(e.viewDate, i);
                        }
                        handleNavStatus() {
                            let {disableNavWhenOutOfRange: e} = this.opts, {minDate: t, maxDate: s} = this.dp;
                            if (!t && !s || !e) return;
                            let {year: a, month: n} = this.dp.parsedViewDate, r = !!t && o(t), h = !!s && o(s);
                            switch (this.dp.currentView) {
                              case i.days:
                                t && r.month >= n && r.year >= a && this._disableNav("prev"), s && h.month <= n && h.year <= a && this._disableNav("next");
                                break;

                              case i.months:
                                t && r.year >= a && this._disableNav("prev"), s && h.year <= a && this._disableNav("next");
                                break;

                              case i.years:
                                {
                                    let e = d(this.dp.viewDate);
                                    t && r.year >= e[0] && this._disableNav("prev"), s && h.year <= e[1] && this._disableNav("next");
                                    break;
                                }
                            }
                        }
                        _disableNav(e) {
                            a('[data-action="' + e + '"]', this.$el).classList.add("-disabled-");
                        }
                        _resetNavStatus() {
                            !function(e) {
                                for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                                e.length ? e.forEach((e => {
                                    e.classList.remove(...i);
                                })) : e.classList.remove(...i);
                            }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
                        }
                        _buildBaseHtml() {
                            let {prevHtml: e, nextHtml: t} = this.opts;
                            this.$el.innerHTML = '<div class="air-datepicker-nav--action" data-action="prev">'.concat(e, "</div>") + '<div class="air-datepicker-nav--title"></div>' + '<div class="air-datepicker-nav--action" data-action="next">'.concat(t, "</div>");
                        }
                        get isNavIsFunction() {
                            let {navTitles: e} = this.opts;
                            return Object.keys(e).find((t => "function" == typeof e[t]));
                        }
                    }
                    var V = {
                        today: {
                            content: e => e.locale.today,
                            onClick: e => e.setViewDate(new Date)
                        },
                        clear: {
                            content: e => e.locale.clear,
                            onClick: e => e.clear()
                        }
                    };
                    class x {
                        constructor(e) {
                            let {dp: t, opts: i} = e;
                            this.dp = t, this.opts = i, this.init();
                        }
                        init() {
                            this.createElement(), this.render();
                        }
                        createElement() {
                            this.$el = n({
                                className: "air-datepicker-buttons"
                            });
                        }
                        destroy() {
                            this.$el.parentNode.removeChild(this.$el);
                        }
                        clearHtml() {
                            return this.$el.innerHTML = "", this;
                        }
                        generateButtons() {
                            let {buttons: e} = this.opts;
                            Array.isArray(e) || (e = [ e ]), e.forEach((e => {
                                let t = e;
                                "string" == typeof e && V[e] && (t = V[e]);
                                let i = this.createButton(t);
                                t.onClick && this.attachEventToButton(i, t.onClick), this.$el.appendChild(i);
                            }));
                        }
                        attachEventToButton(e, t) {
                            e.addEventListener("click", (() => {
                                t(this.dp);
                            }));
                        }
                        createButton(e) {
                            let {content: t, className: i, tagName: s = "button", attrs: a = {}} = e, r = "function" == typeof t ? t(this.dp) : t;
                            return n({
                                tagName: s,
                                innerHtml: "<span tabindex='-1'>".concat(r, "</span>"),
                                className: c("air-datepicker-button", i),
                                attrs: a
                            });
                        }
                        render() {
                            this.generateButtons();
                        }
                    }
                    function H(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class L {
                        constructor() {
                            let {opts: e, dp: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            H(this, "toggleTimepickerIsActive", (e => {
                                this.dp.timepickerIsActive = e;
                            })), H(this, "onChangeSelectedDate", (e => {
                                let {date: t, updateTime: i = !1} = e;
                                t && (this.setMinMaxTime(t), this.setCurrentTime(!!i && t), this.addTimeToDate(t));
                            })), H(this, "onChangeLastSelectedDate", (e => {
                                e && (this.setTime(e), this.render());
                            })), H(this, "onChangeInputRange", (e => {
                                let t = e.target;
                                this[t.getAttribute("name")] = t.value, this.updateText(), this.dp.trigger(i.eventChangeTime, {
                                    hours: this.hours,
                                    minutes: this.minutes
                                });
                            })), H(this, "onMouseEnterLeave", (e => {
                                let t = e.target.getAttribute("name"), i = this.$minutesText;
                                "hours" === t && (i = this.$hoursText), i.classList.toggle("-focus-");
                            })), H(this, "onFocus", (() => {
                                this.toggleTimepickerIsActive(!0);
                            })), H(this, "onBlur", (() => {
                                this.toggleTimepickerIsActive(!1);
                            })), this.opts = e, this.dp = t;
                            let {timeFormat: s} = this.dp.locale;
                            s && (s.match(k("h")) || s.match(k("hh"))) && (this.ampm = !0), this.init();
                        }
                        init() {
                            this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), 
                            this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), 
                            this.bindDOMEvents();
                        }
                        bindDatepickerEvents() {
                            this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
                        }
                        bindDOMEvents() {
                            let e = "input";
                            navigator.userAgent.match(/trident/gi) && (e = "change"), v(this.$ranges, e, this.onChangeInputRange), 
                            v(this.$ranges, "mouseenter", this.onMouseEnterLeave), v(this.$ranges, "mouseleave", this.onMouseEnterLeave), 
                            v(this.$ranges, "focus", this.onFocus), v(this.$ranges, "mousedown", this.onFocus), 
                            v(this.$ranges, "blur", this.onBlur);
                        }
                        createElement() {
                            this.$el = n({
                                className: c("air-datepicker-time", {
                                    "-am-pm-": this.dp.ampm
                                })
                            });
                        }
                        destroy() {
                            this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), 
                            this.$el.parentNode.removeChild(this.$el);
                        }
                        buildHtml() {
                            let {ampm: e, hours: t, displayHours: i, minutes: s, minHours: a, minMinutes: n, maxHours: r, maxMinutes: h, dayPeriod: o, opts: {hoursStep: d, minutesStep: c}} = this;
                            this.$el.innerHTML = '<div class="air-datepicker-time--current">' + '   <span class="air-datepicker-time--current-hours">'.concat(l(i), "</span>") + '   <span class="air-datepicker-time--current-colon">:</span>' + '   <span class="air-datepicker-time--current-minutes">'.concat(l(s), "</span>") + "   ".concat(e ? "<span class='air-datepicker-time--current-ampm'>".concat(o, "</span>") : "") + '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' + '      <input type="range" name="hours" value="'.concat(t, '" min="').concat(a, '" max="').concat(r, '" step="').concat(d, '"/>') + '   </div>   <div class="air-datepicker-time--row">' + '      <input type="range" name="minutes" value="'.concat(s, '" min="').concat(n, '" max="').concat(h, '" step="').concat(c, '"/>') + "   </div></div>";
                        }
                        defineDOM() {
                            let e = e => a(e, this.$el);
                            this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e('[name="hours"]'), 
                            this.$minutes = e('[name="minutes"]'), this.$hoursText = e(".air-datepicker-time--current-hours"), 
                            this.$minutesText = e(".air-datepicker-time--current-minutes"), this.$ampm = e(".air-datepicker-time--current-ampm");
                        }
                        setTime(e) {
                            this.setMinMaxTime(e), this.setCurrentTime(e);
                        }
                        addTimeToDate(e) {
                            e && (e.setHours(this.hours), e.setMinutes(this.minutes));
                        }
                        setMinMaxTime(e) {
                            if (this.setMinMaxTimeFromOptions(), e) {
                                let {minDate: t, maxDate: i} = this.dp;
                                t && u(e, t) && this.setMinTimeFromMinDate(t), i && u(e, i) && this.setMaxTimeFromMaxDate(i);
                            }
                        }
                        setCurrentTime(e) {
                            let {hours: t, minutes: i} = e ? o(e) : this;
                            this.hours = f(t, this.minHours, this.maxHours), this.minutes = f(i, this.minMinutes, this.maxMinutes);
                        }
                        setMinMaxTimeFromOptions() {
                            let {minHours: e, minMinutes: t, maxHours: i, maxMinutes: s} = this.opts;
                            this.minHours = f(e, 0, 23), this.minMinutes = f(t, 0, 59), this.maxHours = f(i, 0, 23), 
                            this.maxMinutes = f(s, 0, 59);
                        }
                        setMinTimeFromMinDate(e) {
                            let {lastSelectedDate: t} = this.dp;
                            this.minHours = e.getHours(), t && t.getHours() > e.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e.getMinutes();
                        }
                        setMaxTimeFromMaxDate(e) {
                            let {lastSelectedDate: t} = this.dp;
                            this.maxHours = e.getHours(), t && t.getHours() < e.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e.getMinutes();
                        }
                        getDayPeriod(e, t) {
                            let i = e, s = Number(e);
                            e instanceof Date && (i = o(e), s = Number(i.hours));
                            let a = "am";
                            if (t || this.ampm) {
                                switch (!0) {
                                  case 12 === s:
                                  case s > 11:
                                    a = "pm";
                                }
                                s = s % 12 == 0 ? 12 : s % 12;
                            }
                            return {
                                hours: s,
                                dayPeriod: a
                            };
                        }
                        updateSliders() {
                            r(this.$hours, {
                                min: this.minHours,
                                max: this.maxHours
                            }).value = this.hours, r(this.$minutes, {
                                min: this.minMinutes,
                                max: this.maxMinutes
                            }).value = this.minutes;
                        }
                        updateText() {
                            this.$hoursText.innerHTML = l(this.displayHours), this.$minutesText.innerHTML = l(this.minutes), 
                            this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
                        }
                        set hours(e) {
                            this._hours = e;
                            let {hours: t, dayPeriod: i} = this.getDayPeriod(e);
                            this.displayHours = t, this.dayPeriod = i;
                        }
                        get hours() {
                            return this._hours;
                        }
                        render() {
                            this.updateSliders(), this.updateText();
                        }
                    }
                    function O(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class A {
                        constructor(e) {
                            let {dp: t, opts: i} = e;
                            O(this, "pressedKeys", new Set), O(this, "hotKeys", new Map([ [ [ [ "Control", "ArrowRight" ], [ "Control", "ArrowUp" ] ], e => e.month++ ], [ [ [ "Control", "ArrowLeft" ], [ "Control", "ArrowDown" ] ], e => e.month-- ], [ [ [ "Shift", "ArrowRight" ], [ "Shift", "ArrowUp" ] ], e => e.year++ ], [ [ [ "Shift", "ArrowLeft" ], [ "Shift", "ArrowDown" ] ], e => e.year-- ], [ [ [ "Alt", "ArrowRight" ], [ "Alt", "ArrowUp" ] ], e => e.year += 10 ], [ [ [ "Alt", "ArrowLeft" ], [ "Alt", "ArrowDown" ] ], e => e.year -= 10 ], [ [ "Control", "Shift", "ArrowUp" ], (e, t) => t.up() ] ])), 
                            O(this, "handleHotKey", (e => {
                                let t = this.hotKeys.get(e), i = o(this.getInitialFocusDate());
                                t(i, this.dp);
                                let {year: s, month: a, date: n} = i, r = h(new Date(s, a));
                                r < n && (n = r);
                                let l = this.dp.getClampedDate(new Date(s, a, n));
                                this.dp.setFocusDate(l, {
                                    viewDateTransition: !0
                                });
                            })), O(this, "isHotKeyPressed", (() => {
                                let e = !1, t = this.pressedKeys.size, i = e => this.pressedKeys.has(e);
                                for (let [s] of this.hotKeys) {
                                    if (e) break;
                                    if (Array.isArray(s[0])) s.forEach((a => {
                                        e || t !== a.length || (e = a.every(i) && s);
                                    })); else {
                                        if (t !== s.length) continue;
                                        e = s.every(i) && s;
                                    }
                                }
                                return e;
                            })), O(this, "isArrow", (e => e >= 37 && e <= 40)), O(this, "onKeyDown", (e => {
                                let {key: t, which: i} = e, {dp: s, dp: {focusDate: a}, opts: n} = this;
                                this.registerKey(t);
                                let r = this.isHotKeyPressed();
                                if (r) return e.preventDefault(), void this.handleHotKey(r);
                                if (this.isArrow(i)) return e.preventDefault(), void this.focusNextCell(t);
                                if ("Enter" === t) {
                                    if (s.currentView !== n.minView) return void s.down();
                                    if (a) {
                                        let e = s._checkIfDateIsSelected(a);
                                        return void (e ? s._handleAlreadySelectedDates(e, a) : s.selectDate(a));
                                    }
                                }
                                "Escape" === t && this.dp.hide();
                            })), O(this, "onKeyUp", (e => {
                                this.removeKey(e.key);
                            })), this.dp = t, this.opts = i, this.init();
                        }
                        init() {
                            this.bindKeyboardEvents();
                        }
                        bindKeyboardEvents() {
                            let {$el: e} = this.dp;
                            e.addEventListener("keydown", this.onKeyDown), e.addEventListener("keyup", this.onKeyUp);
                        }
                        destroy() {
                            let {$el: e} = this.dp;
                            e.removeEventListener("keydown", this.onKeyDown), e.removeEventListener("keyup", this.onKeyUp), 
                            this.hotKeys = null, this.pressedKeys = null;
                        }
                        getInitialFocusDate() {
                            let {focusDate: e, currentView: t, selectedDates: s, parsedViewDate: {year: a, month: n}} = this.dp, r = e || s[s.length - 1];
                            if (!r) switch (t) {
                              case i.days:
                                r = new Date(a, n, (new Date).getDate());
                                break;

                              case i.months:
                                r = new Date(a, n, 1);
                                break;

                              case i.years:
                                r = new Date(a, 0, 1);
                            }
                            return r;
                        }
                        focusNextCell(e) {
                            let t = this.getInitialFocusDate(), {currentView: s} = this.dp, {days: a, months: n, years: r} = i, h = o(t), l = h.year, d = h.month, c = h.date;
                            switch (e) {
                              case "ArrowLeft":
                                s === a && (c -= 1), s === n && (d -= 1), s === r && (l -= 1);
                                break;

                              case "ArrowUp":
                                s === a && (c -= 7), s === n && (d -= 3), s === r && (l -= 4);
                                break;

                              case "ArrowRight":
                                s === a && (c += 1), s === n && (d += 1), s === r && (l += 1);
                                break;

                              case "ArrowDown":
                                s === a && (c += 7), s === n && (d += 3), s === r && (l += 4);
                            }
                            let u = this.dp.getClampedDate(new Date(l, d, c));
                            this.dp.setFocusDate(u, {
                                viewDateTransition: !0
                            });
                        }
                        registerKey(e) {
                            this.pressedKeys.add(e);
                        }
                        removeKey(e) {
                            this.pressedKeys.delete(e);
                        }
                    }
                    let E = {
                        on(e, t) {
                            this.__events || (this.__events = {}), this.__events[e] ? this.__events[e].push(t) : this.__events[e] = [ t ];
                        },
                        off(e, t) {
                            this.__events && this.__events[e] && (this.__events[e] = this.__events[e].filter((e => e !== t)));
                        },
                        removeAllEvents() {
                            this.__events = {};
                        },
                        trigger(e) {
                            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                            this.__events && this.__events[e] && this.__events[e].forEach((e => {
                                e(...i);
                            }));
                        }
                    };
                    function N(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    let I = "", R = "", P = "", B = !1;
                    class K {
                        constructor(e, t) {
                            var r = this;
                            if (N(this, "viewIndexes", [ i.days, i.months, i.years ]), N(this, "next", (() => {
                                let {year: e, month: t} = this.parsedViewDate;
                                switch (this.currentView) {
                                  case i.days:
                                    this.setViewDate(new Date(e, t + 1, 1));
                                    break;

                                  case i.months:
                                    this.setViewDate(new Date(e + 1, t, 1));
                                    break;

                                  case i.years:
                                    this.setViewDate(new Date(e + 10, 0, 1));
                                }
                            })), N(this, "prev", (() => {
                                let {year: e, month: t} = this.parsedViewDate;
                                switch (this.currentView) {
                                  case i.days:
                                    this.setViewDate(new Date(e, t - 1, 1));
                                    break;

                                  case i.months:
                                    this.setViewDate(new Date(e - 1, t, 1));
                                    break;

                                  case i.years:
                                    this.setViewDate(new Date(e - 10, 0, 1));
                                }
                            })), N(this, "_finishHide", (() => {
                                this.hideAnimation = !1, this._destroyComponents(), this.$container.removeChild(this.$datepicker);
                            })), N(this, "setPosition", (function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if ("function" == typeof (e = e || r.opts.position)) return void (r.customHide = e({
                                    $datepicker: r.$datepicker,
                                    $target: r.$el,
                                    $pointer: r.$pointer,
                                    isViewChange: t,
                                    done: r._finishHide
                                }));
                                let i, s, {isMobile: a} = r.opts, n = r.$el.getBoundingClientRect(), h = r.$el.getBoundingClientRect(), o = r.$datepicker.offsetParent, l = r.$el.offsetParent, d = r.$datepicker.getBoundingClientRect(), c = e.split(" "), u = window.scrollY, p = window.scrollX, m = r.opts.offset, g = c[0], D = c[1];
                                if (a) r.$datepicker.style.cssText = "left: 50%; top: 50%"; else {
                                    if (o === l && o !== document.body && (h = {
                                        top: r.$el.offsetTop,
                                        left: r.$el.offsetLeft,
                                        width: n.width,
                                        height: r.$el.offsetHeight
                                    }, u = 0, p = 0), o !== l && o !== document.body) {
                                        let e = o.getBoundingClientRect();
                                        h = {
                                            top: n.top - e.top,
                                            left: n.left - e.left,
                                            width: n.width,
                                            height: n.height
                                        }, u = 0, p = 0;
                                    }
                                    switch (g) {
                                      case "top":
                                        i = h.top - d.height - m;
                                        break;

                                      case "right":
                                        s = h.left + h.width + m;
                                        break;

                                      case "bottom":
                                        i = h.top + h.height + m;
                                        break;

                                      case "left":
                                        s = h.left - d.width - m;
                                    }
                                    switch (D) {
                                      case "top":
                                        i = h.top;
                                        break;

                                      case "right":
                                        s = h.left + h.width - d.width;
                                        break;

                                      case "bottom":
                                        i = h.top + h.height - d.height;
                                        break;

                                      case "left":
                                        s = h.left;
                                        break;

                                      case "center":
                                        /left|right/.test(g) ? i = h.top + h.height / 2 - d.height / 2 : s = h.left + h.width / 2 - d.width / 2;
                                    }
                                    r.$datepicker.style.cssText = "left: ".concat(s + p, "px; top: ").concat(i + u, "px");
                                }
                            })), N(this, "_setInputValue", (() => {
                                let {opts: e, $altField: t, locale: {dateFormat: i}} = this, {altFieldDateFormat: s, altField: a} = e;
                                a && t && (t.value = this._getInputValue(s)), this.$el.value = this._getInputValue(i);
                            })), N(this, "_getInputValue", (e => {
                                let {selectedDates: t, opts: i} = this, {multipleDates: s, multipleDatesSeparator: a} = i;
                                if (!t.length) return "";
                                let n = "function" == typeof e, r = n ? e(s ? t : t[0]) : t.map((t => this.formatDate(t, e)));
                                return r = n ? r : r.join(a), r;
                            })), N(this, "_checkIfDateIsSelected", (function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.days, s = !1;
                                return r.selectedDates.some((i => {
                                    let a = u(e, i, t);
                                    return s = a && i, a;
                                })), s;
                            })), N(this, "_scheduleCallAfterTransition", (e => {
                                this._cancelScheduledCall(), e && e(!1), this._onTransitionEnd = () => {
                                    e && e(!0);
                                }, this.$datepicker.addEventListener("transitionend", this._onTransitionEnd, {
                                    once: !0
                                });
                            })), N(this, "_cancelScheduledCall", (() => {
                                this.$datepicker.removeEventListener("transitionend", this._onTransitionEnd);
                            })), N(this, "setViewDate", (e => {
                                if (!((e = b(e)) instanceof Date)) return;
                                if (u(e, this.viewDate)) return;
                                let t = this.viewDate;
                                this.viewDate = e;
                                let {onChangeViewDate: s} = this.opts;
                                if (s) {
                                    let {month: e, year: t} = this.parsedViewDate;
                                    s({
                                        month: e,
                                        year: t,
                                        decade: this.curDecade
                                    });
                                }
                                this.trigger(i.eventChangeViewDate, e, t);
                            })), N(this, "setFocusDate", (function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                (!e || (e = b(e)) instanceof Date) && (r.focusDate = e, r.opts.range && e && r._handleRangeOnFocus(), 
                                r.trigger(i.eventChangeFocusDate, e, t));
                            })), N(this, "setCurrentView", (e => {
                                if (this.viewIndexes.includes(e)) {
                                    if (this.currentView = e, this.elIsInput && this.visible && this.setPosition(void 0, !0), 
                                    this.trigger(i.eventChangeCurrentView, e), !this.views[e]) {
                                        let t = this.views[e] = new S({
                                            dp: this,
                                            opts: this.opts,
                                            type: e
                                        });
                                        this.shouldUpdateDOM && this.$content.appendChild(t.$el);
                                    }
                                    this.opts.onChangeView && this.opts.onChangeView(e);
                                }
                            })), N(this, "_updateLastSelectedDate", (e => {
                                this.lastSelectedDate = e, this.trigger(i.eventChangeLastSelectedDate, e);
                            })), N(this, "destroy", (() => {
                                let {showEvent: e, isMobile: t} = this.opts, i = this.$datepicker.parentNode;
                                i && i.removeChild(this.$datepicker), this.$el.removeEventListener(e, this._onFocus), 
                                this.$el.removeEventListener("blur", this._onBlur), window.removeEventListener("resize", this._onResize), 
                                t && this._removeMobileAttributes(), this.keyboardNav && this.keyboardNav.destroy(), 
                                this.views = null, this.nav = null, this.$datepicker = null, this.opts = null, this.$customContainer = null, 
                                this.viewDate = null, this.focusDate = null, this.selectedDates = null, this.rangeDateFrom = null, 
                                this.rangeDateTo = null;
                            })), N(this, "update", (e => {
                                let t = w({}, this.opts);
                                w(this.opts, e);
                                let {timepicker: s, buttons: a, range: n, selectedDates: r, isMobile: h} = this.opts, o = this.visible || this.treatAsInline;
                                this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this._handleLocale(), 
                                !t.selectedDates && r && this.selectDate(r), e.view && this.setCurrentView(e.view), 
                                this._setInputValue(), t.range && !n ? (this.rangeDateTo = !1, this.rangeDateFrom = !1) : !t.range && n && this.selectedDates.length && (this.rangeDateFrom = this.selectedDates[0], 
                                this.rangeDateTo = this.selectedDates[1]), t.timepicker && !s ? (o && this.timepicker.destroy(), 
                                this.timepicker = !1, this.$timepicker.parentNode.removeChild(this.$timepicker)) : !t.timepicker && s && this._addTimepicker(), 
                                !t.buttons && a ? this._addButtons() : t.buttons && !a ? (this.buttons.destroy(), 
                                this.$buttons.parentNode.removeChild(this.$buttons)) : o && t.buttons && a && this.buttons.clearHtml().render(), 
                                !t.isMobile && h ? (this.treatAsInline || P || this._createMobileOverlay(), this._addMobileAttributes(), 
                                this.visible && this._showMobileOverlay()) : t.isMobile && !h && (this._removeMobileAttributes(), 
                                this.visible && (P.classList.remove("-active-"), "function" != typeof this.opts.position && this.setPosition())), 
                                o && (this.nav.update(), this.views[this.currentView].render(), this.currentView === i.days && this.views[this.currentView].renderDayNames());
                            })), N(this, "isOtherMonth", (e => {
                                let {month: t} = o(e);
                                return t !== this.parsedViewDate.month;
                            })), N(this, "isOtherYear", (e => {
                                let {year: t} = o(e);
                                return t !== this.parsedViewDate.year;
                            })), N(this, "isOtherDecade", (e => {
                                let {year: t} = o(e), [i, s] = d(this.viewDate);
                                return t < i || t > s;
                            })), N(this, "_onChangeSelectedDate", (e => {
                                let {silent: t} = e;
                                setTimeout((() => {
                                    this._setInputValue(), this.opts.onSelect && !t && this._triggerOnSelect();
                                }));
                            })), N(this, "_onChangeFocusedDate", (function(e) {
                                let {viewDateTransition: t} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (!e) return;
                                let i = !1;
                                t && (i = r.isOtherMonth(e) || r.isOtherYear(e) || r.isOtherDecade(e)), i && r.setViewDate(e);
                            })), N(this, "_onChangeTime", (e => {
                                let {hours: t, minutes: i} = e, s = new Date, {lastSelectedDate: a, opts: {onSelect: n}} = this, r = a;
                                a || (r = s);
                                let h = this.getCell(r, this.currentViewSingular), o = h && h.adpCell;
                                o && o.isDisabled || (r.setHours(t), r.setMinutes(i), a ? (this._setInputValue(), 
                                n && this._triggerOnSelect()) : this.selectDate(r));
                            })), N(this, "_onFocus", (e => {
                                this.visible || this.show();
                            })), N(this, "_onBlur", (e => {
                                this.inFocus || !this.visible || this.opts.isMobile || this.hide();
                            })), N(this, "_onMouseDown", (e => {
                                this.inFocus = !0;
                            })), N(this, "_onMouseUp", (e => {
                                this.inFocus = !1, this.$el.focus();
                            })), N(this, "_onResize", (() => {
                                this.visible && "function" != typeof this.opts.position && this.setPosition();
                            })), N(this, "_onClickOverlay", (() => {
                                this.visible && this.hide();
                            })), N(this, "isWeekend", (e => this.opts.weekends.includes(e))), N(this, "getClampedDate", (e => {
                                let {minDate: t, maxDate: i} = this, s = e;
                                return i && p(e, i) ? s = i : t && m(e, t) && (s = t), s;
                            })), this.$el = a(e), !this.$el) return;
                            this.$datepicker = n({
                                className: "air-datepicker"
                            }), this.opts = w({}, s, t), this.$customContainer = !!this.opts.container && a(this.opts.container), 
                            this.$altField = a(this.opts.altField || !1), I || (I = a("body"));
                            let {view: h, startDate: l} = this.opts;
                            l || (this.opts.startDate = new Date), "INPUT" === this.$el.nodeName && (this.elIsInput = !0), 
                            this.inited = !1, this.visible = !1, this.viewDate = b(this.opts.startDate), this.focusDate = !1, 
                            this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = !1, 
                            this.currentView = h, this.selectedDates = [], this.views = {}, this.keys = [], 
                            this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = !1, this.treatAsInline = this.opts.inline || !this.elIsInput, 
                            this.init();
                        }
                        init() {
                            let {opts: e, treatAsInline: t, opts: {inline: i, isMobile: s, selectedDates: a, keyboardNav: r, onlyTimepicker: h}} = this;
                            var o;
                            B || i || !this.elIsInput || (B = !0, R = n({
                                className: o = K.defaultContainerId,
                                id: o
                            }), I.appendChild(R)), !s || P || t || this._createMobileOverlay(), this._handleLocale(), 
                            this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), 
                            this.elIsInput && (i || this._bindEvents(), r && !h && (this.keyboardNav = new A({
                                dp: this,
                                opts: e
                            }))), a && this.selectDate(a, {
                                silent: !0
                            }), this.opts.visible && !t && this.show(), s && !t && this.$el.setAttribute("readonly", !0), 
                            t && this._createComponents();
                        }
                        _createMobileOverlay() {
                            P = n({
                                className: "air-datepicker-overlay"
                            }), R.appendChild(P);
                        }
                        _createComponents() {
                            let {opts: e, treatAsInline: t, opts: {inline: i, buttons: s, timepicker: a, position: n, classes: r, onlyTimepicker: h, isMobile: o}} = this;
                            this._buildBaseHtml(), this.elIsInput && (i || this._setPositionClasses(n)), !i && this.elIsInput || this.$datepicker.classList.add("-inline-"), 
                            r && this.$datepicker.classList.add(...r.split(" ")), h && this.$datepicker.classList.add("-only-timepicker-"), 
                            o && !t && this._addMobileAttributes(), this.views[this.currentView] = new S({
                                dp: this,
                                type: this.currentView,
                                opts: e
                            }), this.nav = new F({
                                dp: this,
                                opts: e
                            }), a && this._addTimepicker(), s && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), 
                            this.$nav.appendChild(this.nav.$el);
                        }
                        _destroyComponents() {
                            for (let e in this.views) this.views[e].destroy();
                            this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
                        }
                        _addMobileAttributes() {
                            P.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), 
                            this.$el.setAttribute("readonly", !0);
                        }
                        _removeMobileAttributes() {
                            P.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), 
                            this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
                        }
                        _createMinMaxDates() {
                            let {minDate: e, maxDate: t} = this.opts;
                            this.minDate = !!e && b(e), this.maxDate = !!t && b(t);
                        }
                        _addTimepicker() {
                            this.$timepicker = n({
                                className: "air-datepicker--time"
                            }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({
                                dp: this,
                                opts: this.opts
                            }), this.$timepicker.appendChild(this.timepicker.$el);
                        }
                        _addButtons() {
                            this.$buttons = n({
                                className: "air-datepicker--buttons"
                            }), this.$datepicker.appendChild(this.$buttons), this.buttons = new x({
                                dp: this,
                                opts: this.opts
                            }), this.$buttons.appendChild(this.buttons.$el);
                        }
                        _bindSubEvents() {
                            this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i.eventChangeFocusDate, this._onChangeFocusedDate), 
                            this.on(i.eventChangeTime, this._onChangeTime);
                        }
                        _buildBaseHtml() {
                            let {inline: e} = this.opts;
                            var t, i;
                            this.elIsInput ? e ? (t = this.$datepicker, (i = this.$el).parentNode.insertBefore(t, i.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), 
                            this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', 
                            this.$content = a(".air-datepicker--content", this.$datepicker), this.$pointer = a(".air-datepicker--pointer", this.$datepicker), 
                            this.$nav = a(".air-datepicker--navigation", this.$datepicker);
                        }
                        _handleLocale() {
                            let {locale: e, dateFormat: t, firstDay: i, timepicker: s, onlyTimepicker: a, timeFormat: n, dateTimeSeparator: r} = this.opts;
                            var h;
                            this.locale = (h = e, JSON.parse(JSON.stringify(h))), t && (this.locale.dateFormat = t), 
                            void 0 !== n && "" !== n && (this.locale.timeFormat = n);
                            let {timeFormat: o} = this.locale;
                            if ("" !== i && (this.locale.firstDay = i), s && "function" != typeof t) {
                                let e = o ? r : "";
                                this.locale.dateFormat = [ this.locale.dateFormat, o || "" ].join(e);
                            }
                            a && (this.locale.dateFormat = this.locale.timeFormat);
                        }
                        _setPositionClasses(e) {
                            if ("function" == typeof e) return void this.$datepicker.classList.add("-custom-position-");
                            let t = (e = e.split(" "))[0], i = e[1], s = "air-datepicker -".concat(t, "-").concat(i, "- -from-").concat(t, "-");
                            this.$datepicker.classList.add(...s.split(" "));
                        }
                        _bindEvents() {
                            this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), 
                            this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), 
                            window.addEventListener("resize", this._onResize);
                        }
                        _limitViewDateByMaxMinDates() {
                            let {viewDate: e, minDate: t, maxDate: i} = this;
                            i && p(e, i) && this.setViewDate(i), t && m(e, t) && this.setViewDate(t);
                        }
                        formatDate() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate, t = arguments.length > 1 ? arguments[1] : void 0;
                            if (e = b(e), !(e instanceof Date)) return;
                            let i = t, s = this.locale, a = o(e), n = d(e), r = K.replacer, h = "am";
                            this.opts.timepicker && this.timepicker && (h = this.timepicker.getDayPeriod(e).dayPeriod);
                            let l = {
                                T: e.getTime(),
                                m: a.minutes,
                                mm: a.fullMinutes,
                                h: a.hours12,
                                hh: a.fullHours12,
                                H: a.hours,
                                HH: a.fullHours,
                                aa: h,
                                AA: h.toUpperCase(),
                                E: s.daysShort[a.day],
                                EEEE: s.days[a.day],
                                d: a.date,
                                dd: a.fullDate,
                                M: a.month + 1,
                                MM: a.fullMonth,
                                MMM: s.monthsShort[a.month],
                                MMMM: s.months[a.month],
                                yy: a.year.toString().slice(-2),
                                yyyy: a.year,
                                yyyy1: n[0],
                                yyyy2: n[1]
                            };
                            for (let [e, t] of Object.entries(l)) i = r(i, k(e), t);
                            return i;
                        }
                        down(e) {
                            this._handleUpDownActions(e, "down");
                        }
                        up(e) {
                            this._handleUpDownActions(e, "up");
                        }
                        selectDate(e) {
                            let t, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {currentView: a, parsedViewDate: n, selectedDates: r} = this, {updateTime: h} = s, {moveToOtherMonthsOnSelect: o, moveToOtherYearsOnSelect: l, multipleDates: d, range: c, autoClose: u} = this.opts, m = r.length;
                            if (Array.isArray(e)) return e.forEach((e => {
                                this.selectDate(e, s);
                            })), new Promise((e => {
                                setTimeout(e);
                            }));
                            if ((e = b(e)) instanceof Date) {
                                if (a === i.days && e.getMonth() !== n.month && o && (t = new Date(e.getFullYear(), e.getMonth(), 1)), 
                                a === i.years && e.getFullYear() !== n.year && l && (t = new Date(e.getFullYear(), 0, 1)), 
                                t && this.setViewDate(t), d && !c) {
                                    if (m === d) return;
                                    this._checkIfDateIsSelected(e) || r.push(e);
                                } else if (c) switch (m) {
                                  case 1:
                                    r.push(e), this.rangeDateTo || (this.rangeDateTo = e), p(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, 
                                    this.rangeDateFrom = e), this.selectedDates = [ this.rangeDateFrom, this.rangeDateTo ];
                                    break;

                                  case 2:
                                    this.selectedDates = [ e ], this.rangeDateFrom = e, this.rangeDateTo = "";
                                    break;

                                  default:
                                    this.selectedDates = [ e ], this.rangeDateFrom = e;
                                } else this.selectedDates = [ e ];
                                return this.trigger(i.eventChangeSelectedDate, {
                                    action: i.actionSelectDate,
                                    silent: null == s ? void 0 : s.silent,
                                    date: e,
                                    updateTime: h
                                }), this._updateLastSelectedDate(e), u && !this.timepickerIsActive && this.visible && (d || c ? c && 1 === m && this.hide() : this.hide()), 
                                new Promise((e => {
                                    setTimeout(e);
                                }));
                            }
                        }
                        unselectDate(e) {
                            let t = this.selectedDates, s = this;
                            if ((e = b(e)) instanceof Date) return t.some(((a, n) => {
                                if (u(a, e)) return t.splice(n, 1), s.selectedDates.length ? s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length - 1]) : (s.rangeDateFrom = "", 
                                s.rangeDateTo = "", s._updateLastSelectedDate(!1)), this.trigger(i.eventChangeSelectedDate, {
                                    action: i.actionUnselectDate,
                                    date: e
                                }), !0;
                            }));
                        }
                        replaceDate(e, t) {
                            let s = this.selectedDates.find((t => u(t, e, this.currentView))), a = this.selectedDates.indexOf(s);
                            a < 0 || u(this.selectedDates[a], t, this.currentView) || (this.selectedDates[a] = t, 
                            this.trigger(i.eventChangeSelectedDate, {
                                action: i.actionSelectDate,
                                date: t,
                                updateTime: !0
                            }), this._updateLastSelectedDate(t));
                        }
                        clear() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return this.selectedDates = [], this.rangeDateFrom = !1, this.rangeDateTo = !1, 
                            this.trigger(i.eventChangeSelectedDate, {
                                action: i.actionUnselectDate,
                                silent: e.silent
                            }), new Promise((e => {
                                setTimeout(e);
                            }));
                        }
                        show() {
                            let {onShow: e, isMobile: t} = this.opts;
                            this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), 
                            this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), 
                            this.visible = !0, e && this._scheduleCallAfterTransition(e), t && this._showMobileOverlay();
                        }
                        hide() {
                            let {onHide: e, isMobile: t} = this.opts, i = this._hasTransition();
                            this.visible = !1, this.hideAnimation = !0, this.$datepicker.classList.remove("-active-"), 
                            this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition((t => {
                                !this.customHide && (t && i || !t && !i) && this._finishHide(), e && e(t);
                            })), t && P.classList.remove("-active-");
                        }
                        _triggerOnSelect() {
                            let e = [], t = [], {selectedDates: i, locale: s, opts: {onSelect: a, multipleDates: n, range: r}} = this, h = n || r, o = "function" == typeof s.dateFormat;
                            i.length && (e = i.map(g), t = o ? n ? s.dateFormat(e) : e.map((e => s.dateFormat(e))) : e.map((e => this.formatDate(e, s.dateFormat)))), 
                            a({
                                date: h ? e : e[0],
                                formattedDate: h ? t : t[0],
                                datepicker: this
                            });
                        }
                        _handleAlreadySelectedDates(e, t) {
                            let {range: i, toggleSelected: s} = this.opts;
                            i ? s ? this.unselectDate(t) : 2 !== this.selectedDates.length && this.selectDate(t) : s && this.unselectDate(t), 
                            s || this._updateLastSelectedDate(e);
                        }
                        _handleUpDownActions(e, t) {
                            if (!((e = b(e || this.focusDate || this.viewDate)) instanceof Date)) return;
                            let i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
                            i > 2 && (i = 2), i < 0 && (i = 0), this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)), 
                            this.setCurrentView(this.viewIndexes[i]);
                        }
                        _handleRangeOnFocus() {
                            1 === this.selectedDates.length && (p(this.selectedDates[0], this.focusDate) ? (this.rangeDateTo = this.selectedDates[0], 
                            this.rangeDateFrom = this.focusDate) : (this.rangeDateTo = this.focusDate, this.rangeDateFrom = this.selectedDates[0]));
                        }
                        getCell(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
                            if (!((e = b(e)) instanceof Date)) return;
                            let {year: s, month: a, date: n} = o(e), r = '[data-year="'.concat(s, '"]'), h = '[data-month="'.concat(a, '"]'), l = '[data-date="'.concat(n, '"]'), d = {
                                [i.day]: "".concat(r).concat(h).concat(l),
                                [i.month]: "".concat(r).concat(h),
                                [i.year]: "".concat(r)
                            };
                            return this.views[this.currentView].$el.querySelector(d[t]);
                        }
                        _showMobileOverlay() {
                            P.classList.add("-active-");
                        }
                        _hasTransition() {
                            return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(((e, t) => parseFloat(t) + e), 0) > 0;
                        }
                        get shouldUpdateDOM() {
                            return this.visible || this.treatAsInline;
                        }
                        get parsedViewDate() {
                            return o(this.viewDate);
                        }
                        get currentViewSingular() {
                            return this.currentView.slice(0, -1);
                        }
                        get curDecade() {
                            return d(this.viewDate);
                        }
                        get viewIndex() {
                            return this.viewIndexes.indexOf(this.currentView);
                        }
                        get isFinalView() {
                            return this.currentView === i.years;
                        }
                        get hasSelectedDates() {
                            return this.selectedDates.length > 0;
                        }
                        get isMinViewReached() {
                            return this.currentView === this.opts.minView || this.currentView === i.days;
                        }
                        get $container() {
                            return this.$customContainer || R;
                        }
                        static replacer(e, t, i) {
                            return e.replace(t, (function(e, t, s, a) {
                                return t + i + a;
                            }));
                        }
                    }
                    var j;
                    return N(K, "defaults", s), N(K, "version", "3.2.0"), N(K, "defaultContainerId", "air-datepicker-global-container"), 
                    j = K.prototype, Object.assign(j, E), t.default;
                }();
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.n = module => {
            var getter = module && module.__esModule ? () => module["default"] : () => module;
            __webpack_require__.d(getter, {
                a: getter
            });
            return getter;
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        "use strict";
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>button");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if ("number" === typeof items) super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if ("undefined" === typeof selector) return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if ("undefined" === typeof args[0]) {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (void 0 === delay) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (void 0 === axis) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = void 0 === _temp ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (void 0 === overrides) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (void 0 === options) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || dom([])).each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate) {
            if (void 0 === translate) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (void 0 === axis) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (void 0 === translate) translate = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === translateBounds) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("number" !== typeof index && "string" !== typeof index) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            const translate = -snapGrid[snapIndex];
            swiper.updateProgress(translate);
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === threshold) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                const slide = dom(el);
                if (index < swiper.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
                slide.attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (void 0 === base) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = dom(event.path[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ("SELECT" === $targetEl[0].nodeName) data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            const pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (void 0 === base) base = "window";
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (void 0 === obj) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (void 0 === view) view = "current";
                if (void 0 === exact) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (void 0 === needUpdate) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    if (!$el.children) return dom($el).children(getWrapperSelector());
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (void 0 === deleteInstance) deleteInstance = true;
                if (void 0 === cleanStyles) cleanStyles = true;
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };
            function getEl(el) {
                let $el;
                if (el) {
                    $el = dom(el);
                    if (swiper.params.uniqueNavElements && "string" === typeof el && $el.length > 1 && 1 === swiper.$el.find(el).length) $el = swiper.$el.find(el);
                }
                return $el;
            }
            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;
                if ($el && $el.length > 0) {
                    $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                    if ($el[0] && "BUTTON" === $el[0].tagName) $el[0].disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
            }
            function update() {
                if (swiper.params.loop) return;
                const {$nextEl, $prevEl} = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);
                if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }
            function destroy() {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off("click", onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off("click", onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
            on("init", (() => {
                init();
                update();
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
            }));
            on("click", ((_s, e) => {
                const {$nextEl, $prevEl} = swiper.navigation;
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass); else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    if (true === isHidden) emit("navigationShow"); else emit("navigationHide");
                    if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
            }));
            Object.assign(swiper.navigation, {
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes) {
            if (void 0 === classes) classes = "";
            return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`
                }
            });
            swiper.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length;
            }
            function setSideBullets($bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let current;
                const total = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                    if (current > slidesLength - 1 - 2 * swiper.loopedSlides) current -= slidesLength - 2 * swiper.loopedSlides;
                    if (current > total - 1) current -= total;
                    if (current < 0 && "bullets" !== swiper.params.paginationType) current = total + current;
                } else if ("undefined" !== typeof swiper.snapIndex) current = swiper.snapIndex; else current = swiper.activeIndex || 0;
                if ("bullets" === params.type && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                        $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                        if (params.dynamicMainBullets > 1 && void 0 !== swiper.previousIndex) {
                            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.removeClass([ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)).join(" "));
                    if ($el.length > 1) bullets.each((bullet => {
                        const $bullet = dom(bullet);
                        const bulletIndex = $bullet.index();
                        if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                            if (bulletIndex === firstIndex) setSideBullets($bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets($bullet, "next");
                        }
                    })); else {
                        const $bullet = bullets.eq(current);
                        const bulletIndex = $bullet.index();
                        $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            const $firstDisplayedBullet = bullets.eq(firstIndex);
                            const $lastDisplayedBullet = bullets.eq(lastIndex);
                            for (let i = firstIndex; i <= lastIndex; i += 1) bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                            if (swiper.params.loop) if (bulletIndex >= bullets.length) {
                                for (let i = params.dynamicMainBullets; i >= 0; i -= 1) bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            }
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
                    }
                }
                if ("fraction" === params.type) {
                    $el.find(classes_to_selector_classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                    $el.find(classes_to_selector_classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
                }
                if ("progressbar" === params.type) {
                    let progressbarDirection;
                    if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if ("horizontal" === progressbarDirection) scaleX = scale; else scaleY = scale;
                    $el.find(classes_to_selector_classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
                }
                if ("custom" === params.type && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    emit("paginationRender", $el[0]);
                } else emit("paginationUpdate", $el[0]);
                if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let paginationHTML = "";
                if ("bullets" === params.type) {
                    let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find(classes_to_selector_classesToSelector(params.bulletClass));
                }
                if ("fraction" === params.type) {
                    if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("progressbar" === params.type) {
                    if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("custom" !== params.type) emit("paginationRender", swiper.pagination.$el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let $el = dom(params.el);
                if (0 === $el.length) return;
                if (swiper.params.uniqueNavElements && "string" === typeof params.el && $el.length > 1) {
                    $el = swiper.$el.find(params.el);
                    if ($el.length > 1) $el = $el.filter((el => {
                        if (dom(el).parents(".swiper")[0] !== swiper.el) return false;
                        return true;
                    }));
                }
                if ("bullets" === params.type && params.clickable) $el.addClass(params.clickableClass);
                $el.addClass(params.modifierClass + params.type);
                $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if ("bullets" === params.type && params.dynamicBullets) {
                    $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                }
                if ("progressbar" === params.type && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
                if (params.clickable) $el.on("click", classes_to_selector_classesToSelector(params.bulletClass), (function onClick(e) {
                    e.preventDefault();
                    let index = dom(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                }));
                Object.assign(swiper.pagination, {
                    $el,
                    el: $el[0]
                });
                if (!swiper.enabled) $el.addClass(params.lockClass);
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
                if (params.clickable) $el.off("click", classes_to_selector_classesToSelector(params.bulletClass));
            }
            on("init", (() => {
                init();
                render();
                update();
            }));
            on("activeIndexChange", (() => {
                if (swiper.params.loop) update(); else if ("undefined" === typeof swiper.snapIndex) update();
            }));
            on("snapIndexChange", (() => {
                if (!swiper.params.loop) update();
            }));
            on("slidesLengthChange", (() => {
                if (swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("snapGridLengthChange", (() => {
                if (!swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$el} = swiper.pagination;
                if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const {$el} = swiper.pagination;
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                    if (true === isHidden) emit("paginationShow"); else emit("paginationHide");
                    $el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            }));
            Object.assign(swiper.pagination, {
                render,
                update,
                init,
                destroy
            });
        }
        function Autoplay(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            let timeout;
            swiper.autoplay = {
                running: false,
                paused: false
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            function run() {
                const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
                let delay = swiper.params.autoplay.delay;
                if ($activeSlideEl.attr("data-swiper-autoplay")) delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
                const proceed = () => {
                    let autoplayResult;
                    if (swiper.params.autoplay.reverseDirection) if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.isBeginning) {
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        emit("autoplay");
                    } else stop(); else if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.isEnd) {
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                        emit("autoplay");
                    } else stop();
                    if (swiper.params.cssMode && swiper.autoplay.running) run(); else if (false === autoplayResult) run();
                };
                clearTimeout(timeout);
                if (0 === delay) {
                    proceed();
                    return;
                }
                timeout = utils_nextTick((() => {
                    proceed();
                }), delay);
            }
            function start() {
                if ("undefined" !== typeof timeout) return false;
                if (swiper.autoplay.running) return false;
                swiper.autoplay.running = true;
                emit("autoplayStart");
                run();
                return true;
            }
            function stop() {
                if (!swiper.autoplay.running) return false;
                if ("undefined" === typeof timeout) return false;
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = void 0;
                }
                swiper.autoplay.running = false;
                emit("autoplayStop");
                return true;
            }
            function pause(speed) {
                if (!swiper.autoplay.running) return;
                if (swiper.autoplay.paused) return;
                if (timeout) clearTimeout(timeout);
                swiper.autoplay.paused = true;
                if (0 === speed || !swiper.params.autoplay.waitForTransition) {
                    swiper.autoplay.paused = false;
                    run();
                } else [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
                }));
            }
            function onVisibilityChange() {
                const document = ssr_window_esm_getDocument();
                if ("hidden" === document.visibilityState && swiper.autoplay.running) pause();
                if ("visible" === document.visibilityState && swiper.autoplay.paused) {
                    run();
                    swiper.autoplay.paused = false;
                }
            }
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
                if (e.target !== swiper.$wrapperEl[0]) return;
                [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                }));
                swiper.autoplay.paused = false;
                if (!swiper.autoplay.running) stop(); else run();
            }
            function onMouseEnter() {
                if (swiper.params.autoplay.disableOnInteraction) stop(); else {
                    emit("autoplayPause");
                    pause();
                }
                [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                }));
            }
            function onMouseLeave() {
                if (swiper.params.autoplay.disableOnInteraction) return;
                swiper.autoplay.paused = false;
                emit("autoplayResume");
                run();
            }
            function attachMouseEvents() {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.$el.on("mouseenter", onMouseEnter);
                    swiper.$el.on("mouseleave", onMouseLeave);
                }
            }
            function detachMouseEvents() {
                swiper.$el.off("mouseenter", onMouseEnter);
                swiper.$el.off("mouseleave", onMouseLeave);
            }
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    start();
                    const document = ssr_window_esm_getDocument();
                    document.addEventListener("visibilitychange", onVisibilityChange);
                    attachMouseEvents();
                }
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.autoplay.running) if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.autoplay.running) if (swiper.params.autoplay.disableOnInteraction) stop(); else pause();
            }));
            on("touchEnd", (() => {
                if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
            }));
            on("destroy", (() => {
                detachMouseEvents();
                if (swiper.autoplay.running) stop();
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            }));
            Object.assign(swiper.autoplay, {
                pause,
                run,
                start,
                stop
            });
        }
        function initSliders() {
            if (document.querySelector(".swiper_interior")) new core(".swiper_interior", {
                modules: [ Navigation, Pagination ],
                pagination: {
                    el: ".js-pagination",
                    clickable: true
                },
                navigation: {
                    prevEl: ".swiper__button_prev",
                    nextEl: ".swiper__button_next"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        autoHeight: true
                    },
                    500: {
                        slidesPerView: "auto",
                        spaceBetween: 28,
                        centeredSlides: true,
                        roundLengths: true,
                        loop: true,
                        loopAdditionalSlides: 30,
                        speed: 500
                    }
                },
                on: {}
            });
            new core(".main__slider .swiper", {
                modules: [ Autoplay ],
                allowTouchMove: false,
                slidesPerView: 1,
                autoplay: {
                    delay: 15e3,
                    disableOnInteraction: false
                }
            });

            new core(".about__slider .swiper", {
                modules: [ Navigation ],
                slidesPerView: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        __webpack_require__(992);
        var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        (function() {
            var typesToPatch = [ "DocumentType", "Element", "CharacterData" ], remove = function remove() {
                if (null != this.parentNode) this.parentNode.removeChild(this);
            };
            for (var i = 0; i < typesToPatch.length; i++) {
                var type = typesToPatch[i];
                if (window[type] && !window[type].prototype.remove) window[type].prototype.remove = remove;
            }
        })();
        (function(root) {
            var setTimeoutFunc = setTimeout;
            function noop() {}
            function bind(fn, thisArg) {
                return function() {
                    fn.apply(thisArg, arguments);
                };
            }
            function Promise(fn) {
                if ("object" !== _typeof(this)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof fn) throw new TypeError("not a function");
                this._state = 0;
                this._handled = false;
                this._value = void 0;
                this._deferreds = [];
                doResolve(fn, this);
            }
            function handle(self, deferred) {
                while (3 === self._state) self = self._value;
                if (0 === self._state) {
                    self._deferreds.push(deferred);
                    return;
                }
                self._handled = true;
                Promise._immediateFn((function() {
                    var cb = 1 === self._state ? deferred.onFulfilled : deferred.onRejected;
                    if (null === cb) {
                        (1 === self._state ? resolve : reject)(deferred.promise, self._value);
                        return;
                    }
                    var ret;
                    try {
                        ret = cb(self._value);
                    } catch (e) {
                        reject(deferred.promise, e);
                        return;
                    }
                    resolve(deferred.promise, ret);
                }));
            }
            function resolve(self, newValue) {
                try {
                    if (newValue === self) throw new TypeError("A promise cannot be resolved with itself.");
                    if (newValue && ("object" === ("undefined" === typeof newValue ? "undefined" : _typeof(newValue)) || "function" === typeof newValue)) {
                        var then = newValue.then;
                        if (newValue instanceof Promise) {
                            self._state = 3;
                            self._value = newValue;
                            finale(self);
                            return;
                        } else if ("function" === typeof then) {
                            doResolve(bind(then, newValue), self);
                            return;
                        }
                    }
                    self._state = 1;
                    self._value = newValue;
                    finale(self);
                } catch (e) {
                    reject(self, e);
                }
            }
            function reject(self, newValue) {
                self._state = 2;
                self._value = newValue;
                finale(self);
            }
            function finale(self) {
                if (2 === self._state && 0 === self._deferreds.length) Promise._immediateFn((function() {
                    if (!self._handled) Promise._unhandledRejectionFn(self._value);
                }));
                for (var i = 0, len = self._deferreds.length; i < len; i++) handle(self, self._deferreds[i]);
                self._deferreds = null;
            }
            function Handler(onFulfilled, onRejected, promise) {
                this.onFulfilled = "function" === typeof onFulfilled ? onFulfilled : null;
                this.onRejected = "function" === typeof onRejected ? onRejected : null;
                this.promise = promise;
            }
            function doResolve(fn, self) {
                var done = false;
                try {
                    fn((function(value) {
                        if (done) return;
                        done = true;
                        resolve(self, value);
                    }), (function(reason) {
                        if (done) return;
                        done = true;
                        reject(self, reason);
                    }));
                } catch (ex) {
                    if (done) return;
                    done = true;
                    reject(self, ex);
                }
            }
            Promise.prototype["catch"] = function(onRejected) {
                return this.then(null, onRejected);
            };
            Promise.prototype.then = function(onFulfilled, onRejected) {
                var prom = new this.constructor(noop);
                handle(this, new Handler(onFulfilled, onRejected, prom));
                return prom;
            };
            Promise.all = function(arr) {
                var args = Array.prototype.slice.call(arr);
                return new Promise((function(resolve, reject) {
                    if (0 === args.length) return resolve([]);
                    var remaining = args.length;
                    function res(i, val) {
                        try {
                            if (val && ("object" === ("undefined" === typeof val ? "undefined" : _typeof(val)) || "function" === typeof val)) {
                                var then = val.then;
                                if ("function" === typeof then) {
                                    then.call(val, (function(val) {
                                        res(i, val);
                                    }), reject);
                                    return;
                                }
                            }
                            args[i] = val;
                            if (0 === --remaining) resolve(args);
                        } catch (ex) {
                            reject(ex);
                        }
                    }
                    for (var i = 0; i < args.length; i++) res(i, args[i]);
                }));
            };
            Promise.resolve = function(value) {
                if (value && "object" === ("undefined" === typeof value ? "undefined" : _typeof(value)) && value.constructor === Promise) return value;
                return new Promise((function(resolve) {
                    resolve(value);
                }));
            };
            Promise.reject = function(value) {
                return new Promise((function(resolve, reject) {
                    reject(value);
                }));
            };
            Promise.race = function(values) {
                return new Promise((function(resolve, reject) {
                    for (var i = 0, len = values.length; i < len; i++) values[i].then(resolve, reject);
                }));
            };
            Promise._immediateFn = "function" === typeof setImmediate && function(fn) {
                setImmediate(fn);
            } || function(fn) {
                setTimeoutFunc(fn, 0);
            };
            Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
                if ("undefined" !== typeof console && console) console.warn("Possible Unhandled Promise Rejection:", err);
            };
            Promise._setImmediateFn = function _setImmediateFn(fn) {
                Promise._immediateFn = fn;
            };
            Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
                Promise._unhandledRejectionFn = fn;
            };
            if ("undefined" !== typeof module && module.exports) module.exports = Promise; else if (!root.Promise) root.Promise = Promise;
        })(window);
        (function(window) {
            "use strict";
            if (!window.Promise) window.Promise = Promise;
            var RULE_REQUIRED = "required", RULE_EMAIL = "email", RULE_MINLENGTH = "minLength", RULE_MAXLENGTH = "maxLength", RULE_PASSWORD = "password", RULE_ZIP = "zip", RULE_PHONE = "phone", RULE_REMOTE = "remote", RULE_STRENGTH = "strength", RULE_FUNCTION = "function";
            var formatParams = function formatParams(params, method) {
                if ("string" === typeof params) return params;
                var letter = "post" === method.toLowerCase() ? "" : "?";
                if (Array.isArray(params)) return letter + params.map((function(obj) {
                    return obj.name + "=" + obj.value;
                })).join("&");
                return letter + Object.keys(params).map((function(key) {
                    return key + "=" + params[key];
                })).join("&");
            };
            var ajax = function ajax(options) {
                var url = options.url, method = options.method, data = options.data, debug = options.debug, callback = options.callback, error = options.error;
                if (debug) {
                    callback("test");
                    return;
                }
                var async = false === options.async ? false : true;
                var xhr = new XMLHttpRequest;
                var params = formatParams(data, "get");
                var body = null;
                if ("post" === method.toLowerCase()) {
                    body = formatParams(data, "post");
                    params = "";
                }
                xhr.open(method, url + params, async);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.onreadystatechange = function() {
                    if (4 === this.readyState) if (200 === this.status) callback(this.responseText); else error && error(this.responseText);
                };
                xhr.send(body);
            };
            var JustValidate = function JustValidate(selector, options) {
                this.options = options || {};
                this.rules = this.options.rules || {};
                this.messages = this.options.messages || void 0;
                this.colorWrong = this.options.colorWrong || "#B81111";
                this.result = {};
                this.elements = [];
                this.tooltip = this.options.tooltip || {};
                this.tooltipFadeOutTime = this.tooltip.fadeOutTime || 5e3;
                this.tooltipFadeOutClass = this.tooltip.fadeOutClass || "just-validate-tooltip-hide";
                this.tooltipSelectorWrap = document.querySelectorAll(this.tooltip.selectorWrap).length ? document.querySelectorAll(this.tooltip.selectorWrap) : document.querySelectorAll(".just-validate-tooltip-container");
                this.bindHandlerKeyup = this.handlerKeyup.bind(this);
                this.submitHandler = this.options.submitHandler || void 0;
                this.invalidFormCallback = this.options.invalidFormCallback || void 0;
                this.promisesRemote = [];
                this.isValidationSuccess = false;
                this.focusWrongField = this.options.focusWrongField || false;
                this.REGEXP = {
                    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    zip: /^\d{5}(-\d{4})?$/,
                    phone: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,
                    password: /[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/,
                    strengthPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/
                };
                this.DEFAULT_REMOTE_ERROR = "Error";
                this.state = {
                    tooltipsTimer: null
                };
                this.setForm(document.querySelector(selector));
            };
            JustValidate.prototype = {
                defaultRules: {
                    email: {
                        required: true,
                        email: true
                    },
                    name: {
                        required: true,
                        minLength: 3,
                        maxLength: 15
                    },
                    text: {
                        required: true,
                        maxLength: 300,
                        minLength: 5
                    },
                    password: {
                        required: true,
                        password: true,
                        minLength: 4,
                        maxLength: 8
                    },
                    zip: {
                        required: true,
                        zip: true
                    },
                    phone: {
                        phone: true
                    }
                },
                defaultMessages: {
                    required: "The field is required",
                    email: "Please, type a valid email",
                    maxLength: "The field must contain a maximum of :value characters",
                    minLength: "The field must contain a minimum of :value characters",
                    password: "Password is not valid",
                    remote: "Email already exists",
                    strength: "Password must contents at least one uppercase letter, one lowercase letter and one number",
                    function: "Function returned false"
                },
                handlerKeyup: function handlerKeyup(ev) {
                    var elem = ev.target, item = {
                        name: elem.getAttribute("data-validate-field"),
                        value: elem.value
                    };
                    delete this.result[item.name];
                    this.validateItem({
                        name: item.name,
                        value: item.value,
                        group: [],
                        isKeyupChange: true
                    });
                    this.renderErrors();
                },
                setterEventListener: function setterEventListener(item, event, handler, type) {
                    if ("keyup" === event) handler = this.bindHandlerKeyup;
                    switch (type) {
                      case "add":
                        item.addEventListener(event, handler);
                        break;

                      case "remove":
                        item.removeEventListener(event, handler);
                        break;
                    }
                },
                getElementsRealValue: function getElementsRealValue() {
                    var $elems = this.$form.querySelectorAll("*"), name = void 0, result = {};
                    for (var i = 0, len = $elems.length; i < len; ++i) {
                        name = $elems[i].getAttribute("name");
                        if (name) {
                            if ("checkbox" === $elems[i].type) {
                                result[name] = $elems[i].checked;
                                continue;
                            }
                            result[name] = $elems[i].value;
                        }
                    }
                    return result;
                },
                validationFailed: function validationFailed() {
                    if (this.invalidFormCallback) this.invalidFormCallback(this.result);
                    var $firstErrorField = document.querySelector(".js-validate-error-field");
                    if (this.focusWrongField && $firstErrorField && $firstErrorField.focus) $firstErrorField.focus();
                },
                validationSuccess: function validationSuccess() {
                    if (0 === Object.keys(this.result).length) {
                        this.isValidationSuccess = false;
                        if (this.submitHandler) {
                            var realValues = this.getElementsRealValue();
                            this.submitHandler(this.$form, realValues, ajax);
                            return;
                        }
                        this.$form.submit();
                    }
                },
                setForm: function setForm(form) {
                    var _this = this;
                    this.$form = form;
                    this.$form.setAttribute("novalidate", "novalidate");
                    this.$form.addEventListener("submit", (function(ev) {
                        ev.preventDefault();
                        _this.result = [];
                        _this.getElements();
                        if (!_this.promisesRemote.length) {
                            if (_this.isValidationSuccess) _this.validationSuccess(); else _this.validationFailed();
                            return;
                        }
                        Promise.all(_this.promisesRemote).then((function() {
                            _this.promisesRemote = [];
                            if (_this.isValidationSuccess) _this.validationSuccess(); else _this.validationFailed();
                        }));
                    }));
                },
                isEmail: function isEmail(email) {
                    return this.REGEXP.email.test(email);
                },
                isZip: function isZip(zip) {
                    return this.REGEXP.zip.test(zip);
                },
                isPhone: function isPhone(phone) {
                    return this.REGEXP.phone.test(phone);
                },
                isPassword: function isPassword(password) {
                    return this.REGEXP.password.test(password);
                },
                isEmpty: function isEmpty(val) {
                    var newVal = val;
                    if (val.trim) newVal = val.trim();
                    return !newVal;
                },
                checkLengthMax: function checkLengthMax(text, max) {
                    return text.length <= max;
                },
                checkLengthMin: function checkLengthMin(text, min) {
                    return text.length >= min;
                },
                checkStrengthPass: function checkStrengthPass(password) {
                    return this.REGEXP.strengthPass.test(password);
                },
                getElements: function getElements() {
                    var _this2 = this;
                    var elems = this.$form.querySelectorAll("[data-validate-field]");
                    this.elements = [];
                    var _loop = function _loop(i, len) {
                        var item = elems[i], name = item.getAttribute("data-validate-field"), value = item.value, isElemInGroup = false, group = [];
                        if ("checkbox" === item.type) {
                            value = item.checked || "";
                            item.addEventListener("change", (function(ev) {
                                var elem = ev.target, item = {
                                    name: elem.getAttribute("data-validate-field"),
                                    value: elem.checked
                                };
                                delete _this2.result[item.name];
                                _this2.validateItem({
                                    name: item.name,
                                    value: item.value,
                                    group: []
                                });
                                _this2.renderErrors();
                            }));
                        }
                        if ("radio" === item.type) {
                            var findElem = _this2.elements.filter((function(item) {
                                if (item.name === name) return item;
                            }))[0];
                            if (findElem) {
                                findElem.group.push(item.checked);
                                isElemInGroup = true;
                            } else group.push(item.checked);
                            item.addEventListener("change", (function(ev) {
                                var elem = ev.target, item = {
                                    name: elem.getAttribute("data-validate-field"),
                                    value: elem.checked
                                };
                                delete _this2.result[item.name];
                                _this2.validateItem({
                                    name: item.name,
                                    value: item.value,
                                    group: []
                                });
                                _this2.renderErrors();
                            }));
                        }
                        _this2.setterEventListener(item, "keyup", _this2.handlerKeyup, "add");
                        if (!isElemInGroup) _this2.elements.push({
                            name,
                            value,
                            group
                        });
                    };
                    for (var i = 0, len = elems.length; i < len; ++i) _loop(i, len);
                    this.validateElements();
                },
                validateRequired: function validateRequired(value) {
                    return !this.isEmpty(value);
                },
                validateEmail: function validateEmail(value) {
                    return this.isEmail(value);
                },
                validatePhone: function validatePhone(value) {
                    return this.isPhone(value);
                },
                validateMinLength: function validateMinLength(value, min) {
                    return this.checkLengthMin(value, min);
                },
                validateMaxLength: function validateMaxLength(value, max) {
                    return this.checkLengthMax(value, max);
                },
                validateStrengthPass: function validateStrengthPass(password) {
                    return this.checkStrengthPass(password);
                },
                validatePassword: function validatePassword(value) {
                    return this.isPassword(value);
                },
                validateZip: function validateZip(value) {
                    return this.isZip(value);
                },
                validateRemote: function validateRemote(_ref) {
                    var value = _ref.value, name = _ref.name, url = _ref.url, successAnswer = _ref.successAnswer, sendParam = _ref.sendParam, method = _ref.method;
                    return new Promise((function(resolve) {
                        ajax({
                            url,
                            method,
                            data: _defineProperty({}, sendParam, value),
                            async: true,
                            callback: function callback(data) {
                                if (data.toLowerCase() === successAnswer.toLowerCase()) resolve("ok");
                                resolve({
                                    type: "incorrect",
                                    name
                                });
                            },
                            error: function error() {
                                resolve({
                                    type: "error",
                                    name
                                });
                            }
                        });
                    }));
                },
                generateMessage: function generateMessage(rule, name, value) {
                    var messages = this.messages || this.defaultMessages;
                    var customMessage = messages[name] && messages[name][rule] || this.messages && "string" === typeof this.messages[name] && messages[name] || this.defaultMessages[rule] || this.DEFAULT_REMOTE_ERROR;
                    if (value) customMessage = customMessage.replace(":value", value.toString());
                    this.result[name] = {
                        message: customMessage
                    };
                },
                validateElements: function validateElements() {
                    var _this3 = this;
                    this.lockForm();
                    this.elements.forEach((function(item) {
                        _this3.validateItem({
                            name: item.name,
                            value: item.value,
                            group: item.group
                        });
                    }));
                    if (!this.promisesRemote.length) {
                        this.renderErrors();
                        return;
                    }
                    Promise.all(this.promisesRemote).then((function(resp) {
                        resp.forEach((function(result) {
                            if ("ok" === result) {
                                _this3.renderErrors();
                                return;
                            }
                            if ("error" === result.type) alert("Server error occured. Please try later.");
                            _this3.generateMessage(RULE_REMOTE, result.name);
                            _this3.renderErrors();
                        }));
                    }));
                },
                validateItem: function validateItem(_ref2) {
                    var _this4 = this;
                    var name = _ref2.name, group = _ref2.group, value = _ref2.value, isKeyupChange = _ref2.isKeyupChange;
                    var rules = this.rules[name] || this.defaultRules[name] || false;
                    if (!rules) return;
                    for (var rule in rules) {
                        var ruleValue = rules[rule];
                        if (rule !== RULE_REQUIRED && rule !== RULE_FUNCTION && "" == value) return;
                        switch (rule) {
                          case RULE_FUNCTION:
                            if ("function" !== typeof ruleValue) break;
                            if (ruleValue(name, value)) break;
                            this.generateMessage(RULE_FUNCTION, name, ruleValue);
                            return;

                          case RULE_REQUIRED:
                            if (!ruleValue) break;
                            if (group.length) {
                                var isSuccessValidateGroup = false;
                                group.forEach((function(item) {
                                    if (_this4.validateRequired(item)) isSuccessValidateGroup = true;
                                }));
                                if (isSuccessValidateGroup) break;
                            } else if (this.validateRequired(value)) break;
                            this.generateMessage(RULE_REQUIRED, name);
                            return;

                          case RULE_EMAIL:
                            if (!ruleValue) break;
                            if (this.validateEmail(value)) break;
                            this.generateMessage(RULE_EMAIL, name);
                            return;

                          case RULE_MINLENGTH:
                            if (!ruleValue) break;
                            if (this.validateMinLength(value, ruleValue)) break;
                            this.generateMessage(RULE_MINLENGTH, name, ruleValue);
                            return;

                          case RULE_MAXLENGTH:
                            if (!ruleValue) break;
                            if (this.validateMaxLength(value, ruleValue)) break;
                            this.generateMessage(RULE_MAXLENGTH, name, ruleValue);
                            return;

                          case RULE_PHONE:
                            if (!ruleValue) break;
                            if (this.validatePhone(value)) break;
                            this.generateMessage(RULE_PHONE, name);
                            return;

                          case RULE_PASSWORD:
                            if (!ruleValue) break;
                            if (this.validatePassword(value)) break;
                            this.generateMessage(RULE_PASSWORD, name);
                            return;

                          case RULE_STRENGTH:
                            if (!ruleValue || "object" !== ("undefined" === typeof ruleValue ? "undefined" : _typeof(ruleValue))) break;
                            if (ruleValue.default && this.validateStrengthPass(value)) break;
                            if (ruleValue.custom) {
                                var regexp = void 0;
                                try {
                                    regexp = new RegExp(ruleValue.custom);
                                } catch (e) {
                                    regexp = this.REGEXP.strengthPass;
                                    console.error("Custom regexp for strength rule is not valid. Default regexp was used.");
                                }
                                if (regexp.test(value)) break;
                            }
                            this.generateMessage(RULE_STRENGTH, name);
                            return;

                          case RULE_ZIP:
                            if (!ruleValue) break;
                            if (this.validateZip(value)) break;
                            this.generateMessage(RULE_ZIP, name);
                            return;

                          case RULE_REMOTE:
                            if (isKeyupChange) break;
                            if (!ruleValue) break;
                            var url = ruleValue.url, successAnswer = ruleValue.successAnswer, method = ruleValue.method, sendParam = ruleValue.sendParam;
                            var $elem = this.$form.querySelector('input[data-validate-field="' + name + '"]');
                            this.setterEventListener($elem, "keyup", this.handlerKeyup, "remove");
                            this.promisesRemote.push(this.validateRemote({
                                name,
                                value,
                                url,
                                method,
                                sendParam,
                                successAnswer
                            }));
                            return;
                        }
                    }
                },
                clearErrors: function clearErrors() {
                    var $elems = document.querySelectorAll(".js-validate-error-label");
                    for (var i = 0, len = $elems.length; i < len; ++i) $elems[i].remove();
                    $elems = document.querySelectorAll(".js-validate-error-field");
                    for (var _i = 0, _len = $elems.length; _i < _len; ++_i) {
                        $elems[_i].classList.remove("js-validate-error-field");
                        $elems[_i].style.border = "";
                        $elems[_i].style.color = "";
                    }
                },
                renderErrors: function renderErrors() {
                    var _this5 = this;
                    this.clearErrors();
                    this.unlockForm();
                    this.isValidationSuccess = false;
                    if (0 === Object.keys(this.result).length) {
                        this.isValidationSuccess = true;
                        return;
                    }
                    for (var _item in this.result) {
                        var message = this.result[_item].message;
                        var $elems = this.$form.querySelectorAll('[data-validate-field="' + _item + '"]');
                        var $elem = $elems[$elems.length - 1];
                        var div = document.createElement("div");
                        div.innerHTML = message;
                        div.className = "js-validate-error-label";
                        div.setAttribute("style", "color: " + this.colorWrong);
                        $elem.style.border = "1px solid " + this.colorWrong;
                        $elem.style.color = "" + this.colorWrong;
                        $elem.classList.add("js-validate-error-field");
                        if ("checkbox" === $elem.type || "radio" === $elem.type) {
                            var $label = document.querySelector('label[for="' + $elem.getAttribute("id") + '"]');
                            if ("label" === $elem.parentNode.tagName.toLowerCase()) $elem.parentNode.parentNode.insertBefore(div, null); else if ($label) $label.parentNode.insertBefore(div, $label.nextSibling); else $elem.parentNode.insertBefore(div, $elem.nextSibling);
                        } else $elem.parentNode.insertBefore(div, $elem.nextSibling);
                    }
                    if (!this.tooltipSelectorWrap.length) return;
                    this.state.tooltipsTimer = setTimeout((function() {
                        _this5.hideTooltips();
                    }), this.tooltipFadeOutTime);
                },
                hideTooltips: function hideTooltips() {
                    var _this6 = this;
                    var $elemsErrorLabel = document.querySelectorAll(".js-validate-error-label");
                    $elemsErrorLabel.forEach((function(item) {
                        item.classList.add(_this6.tooltipFadeOutClass);
                    }));
                    this.state.tooltipsTimer = null;
                },
                lockForm: function lockForm() {
                    var $elems = this.$form.querySelectorAll("input, textarea, button, select");
                    for (var i = 0, len = $elems.length; i < len; ++i) {
                        $elems[i].setAttribute("disabled", "disabled");
                        $elems[i].style.pointerEvents = "none";
                        $elems[i].style.webitFilter = "grayscale(100%)";
                        $elems[i].style.filter = "grayscale(100%)";
                    }
                },
                unlockForm: function unlockForm() {
                    var $elems = this.$form.querySelectorAll("input, textarea, button, select");
                    for (var i = 0, len = $elems.length; i < len; ++i) {
                        $elems[i].removeAttribute("disabled");
                        $elems[i].style.pointerEvents = "";
                        $elems[i].style.webitFilter = "";
                        $elems[i].style.filter = "";
                    }
                }
            };
            window.JustValidate = JustValidate;
        })(window);
        (function(global, factory) {
            "object" === typeof exports && "undefined" !== typeof module ? factory(exports) : "function" === typeof define && define.amd ? define([ "exports" ], factory) : (global = global || self, 
            factory(global.IMask = {}));
        })(void 0, (function(exports) {
            "use strict";
            var commonjsGlobal = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
            function createCommonjsModule(fn, module) {
                return module = {
                    exports: {}
                }, fn(module, module.exports), module.exports;
            }
            var check = function(it) {
                return it && it.Math == Math && it;
            };
            var global_1 = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof commonjsGlobal && commonjsGlobal) || Function("return this")();
            var fails = function(exec) {
                try {
                    return !!exec();
                } catch (error) {
                    return true;
                }
            };
            var descriptors = !fails((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7;
                    }
                })[1];
            }));
            var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
            var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
                1: 2
            }, 1);
            var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
            } : nativePropertyIsEnumerable;
            var objectPropertyIsEnumerable = {
                f
            };
            var createPropertyDescriptor = function(bitmap, value) {
                return {
                    enumerable: !(1 & bitmap),
                    configurable: !(2 & bitmap),
                    writable: !(4 & bitmap),
                    value
                };
            };
            var toString = {}.toString;
            var classofRaw = function(it) {
                return toString.call(it).slice(8, -1);
            };
            var split = "".split;
            var indexedObject = fails((function() {
                return !Object("z").propertyIsEnumerable(0);
            })) ? function(it) {
                return "String" == classofRaw(it) ? split.call(it, "") : Object(it);
            } : Object;
            var requireObjectCoercible = function(it) {
                if (void 0 == it) throw TypeError("Can't call method on " + it);
                return it;
            };
            var toIndexedObject = function(it) {
                return indexedObject(requireObjectCoercible(it));
            };
            var isObject = function(it) {
                return "object" === typeof it ? null !== it : "function" === typeof it;
            };
            var toPrimitive = function(input, PREFERRED_STRING) {
                if (!isObject(input)) return input;
                var fn, val;
                if (PREFERRED_STRING && "function" == typeof (fn = input.toString) && !isObject(val = fn.call(input))) return val;
                if ("function" == typeof (fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
                if (!PREFERRED_STRING && "function" == typeof (fn = input.toString) && !isObject(val = fn.call(input))) return val;
                throw TypeError("Can't convert object to primitive value");
            };
            var hasOwnProperty = {}.hasOwnProperty;
            var has = function(it, key) {
                return hasOwnProperty.call(it, key);
            };
            var document$1 = global_1.document;
            var EXISTS = isObject(document$1) && isObject(document$1.createElement);
            var documentCreateElement = function(it) {
                return EXISTS ? document$1.createElement(it) : {};
            };
            var ie8DomDefine = !descriptors && !fails((function() {
                return 7 != Object.defineProperty(documentCreateElement("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            }));
            var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
                O = toIndexedObject(O);
                P = toPrimitive(P, true);
                if (ie8DomDefine) try {
                    return nativeGetOwnPropertyDescriptor(O, P);
                } catch (error) {}
                if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
            };
            var objectGetOwnPropertyDescriptor = {
                f: f$1
            };
            var anObject = function(it) {
                if (!isObject(it)) throw TypeError(String(it) + " is not an object");
                return it;
            };
            var nativeDefineProperty = Object.defineProperty;
            var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (ie8DomDefine) try {
                    return nativeDefineProperty(O, P, Attributes);
                } catch (error) {}
                if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
                if ("value" in Attributes) O[P] = Attributes.value;
                return O;
            };
            var objectDefineProperty = {
                f: f$2
            };
            var createNonEnumerableProperty = descriptors ? function(object, key, value) {
                return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
            } : function(object, key, value) {
                object[key] = value;
                return object;
            };
            var setGlobal = function(key, value) {
                try {
                    createNonEnumerableProperty(global_1, key, value);
                } catch (error) {
                    global_1[key] = value;
                }
                return value;
            };
            var SHARED = "__core-js_shared__";
            var store = global_1[SHARED] || setGlobal(SHARED, {});
            var sharedStore = store;
            var functionToString = Function.toString;
            if ("function" != typeof sharedStore.inspectSource) sharedStore.inspectSource = function(it) {
                return functionToString.call(it);
            };
            var inspectSource = sharedStore.inspectSource;
            var WeakMap = global_1.WeakMap;
            var nativeWeakMap = "function" === typeof WeakMap && /native code/.test(inspectSource(WeakMap));
            var shared = createCommonjsModule((function(module) {
                (module.exports = function(key, value) {
                    return sharedStore[key] || (sharedStore[key] = void 0 !== value ? value : {});
                })("versions", []).push({
                    version: "3.6.4",
                    mode: "global",
                    copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
                });
            }));
            var id = 0;
            var postfix = Math.random();
            var uid = function(key) {
                return "Symbol(" + String(void 0 === key ? "" : key) + ")_" + (++id + postfix).toString(36);
            };
            var keys = shared("keys");
            var sharedKey = function(key) {
                return keys[key] || (keys[key] = uid(key));
            };
            var hiddenKeys = {};
            var WeakMap$1 = global_1.WeakMap;
            var set, get, has$1;
            var enforce = function(it) {
                return has$1(it) ? get(it) : set(it, {});
            };
            var getterFor = function(TYPE) {
                return function(it) {
                    var state;
                    if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
                    return state;
                };
            };
            if (nativeWeakMap) {
                var store$1 = new WeakMap$1;
                var wmget = store$1.get;
                var wmhas = store$1.has;
                var wmset = store$1.set;
                set = function(it, metadata) {
                    wmset.call(store$1, it, metadata);
                    return metadata;
                };
                get = function(it) {
                    return wmget.call(store$1, it) || {};
                };
                has$1 = function(it) {
                    return wmhas.call(store$1, it);
                };
            } else {
                var STATE = sharedKey("state");
                hiddenKeys[STATE] = true;
                set = function(it, metadata) {
                    createNonEnumerableProperty(it, STATE, metadata);
                    return metadata;
                };
                get = function(it) {
                    return has(it, STATE) ? it[STATE] : {};
                };
                has$1 = function(it) {
                    return has(it, STATE);
                };
            }
            var internalState = {
                set,
                get,
                has: has$1,
                enforce,
                getterFor
            };
            var redefine = createCommonjsModule((function(module) {
                var getInternalState = internalState.get;
                var enforceInternalState = internalState.enforce;
                var TEMPLATE = String(String).split("String");
                (module.exports = function(O, key, value, options) {
                    var unsafe = options ? !!options.unsafe : false;
                    var simple = options ? !!options.enumerable : false;
                    var noTargetGet = options ? !!options.noTargetGet : false;
                    if ("function" == typeof value) {
                        if ("string" == typeof key && !has(value, "name")) createNonEnumerableProperty(value, "name", key);
                        enforceInternalState(value).source = TEMPLATE.join("string" == typeof key ? key : "");
                    }
                    if (O === global_1) {
                        if (simple) O[key] = value; else setGlobal(key, value);
                        return;
                    } else if (!unsafe) delete O[key]; else if (!noTargetGet && O[key]) simple = true;
                    if (simple) O[key] = value; else createNonEnumerableProperty(O, key, value);
                })(Function.prototype, "toString", (function toString() {
                    return "function" == typeof this && getInternalState(this).source || inspectSource(this);
                }));
            }));
            var path = global_1;
            var aFunction = function(variable) {
                return "function" == typeof variable ? variable : void 0;
            };
            var getBuiltIn = function(namespace, method) {
                return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
            };
            var ceil = Math.ceil;
            var floor = Math.floor;
            var toInteger = function(argument) {
                return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
            };
            var min = Math.min;
            var toLength = function(argument) {
                return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
            };
            var max = Math.max;
            var min$1 = Math.min;
            var toAbsoluteIndex = function(index, length) {
                var integer = toInteger(index);
                return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
            };
            var createMethod = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIndexedObject($this);
                    var length = toLength(O.length);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    if (IS_INCLUDES && el != el) while (length > index) {
                        value = O[index++];
                        if (value != value) return true;
                    } else for (;length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                    return !IS_INCLUDES && -1;
                };
            };
            var arrayIncludes = {
                includes: createMethod(true),
                indexOf: createMethod(false)
            };
            var indexOf = arrayIncludes.indexOf;
            var objectKeysInternal = function(object, names) {
                var O = toIndexedObject(object);
                var i = 0;
                var result = [];
                var key;
                for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
                while (names.length > i) if (has(O, key = names[i++])) ~indexOf(result, key) || result.push(key);
                return result;
            };
            var enumBugKeys = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
            var hiddenKeys$1 = enumBugKeys.concat("length", "prototype");
            var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return objectKeysInternal(O, hiddenKeys$1);
            };
            var objectGetOwnPropertyNames = {
                f: f$3
            };
            var f$4 = Object.getOwnPropertySymbols;
            var objectGetOwnPropertySymbols = {
                f: f$4
            };
            var ownKeys = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
                var keys = objectGetOwnPropertyNames.f(anObject(it));
                var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
                return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
            };
            var copyConstructorProperties = function(target, source) {
                var keys = ownKeys(source);
                var defineProperty = objectDefineProperty.f;
                var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                }
            };
            var replacement = /#|\.prototype\./;
            var isForced = function(feature, detection) {
                var value = data[normalize(feature)];
                return value == POLYFILL ? true : value == NATIVE ? false : "function" == typeof detection ? fails(detection) : !!detection;
            };
            var normalize = isForced.normalize = function(string) {
                return String(string).replace(replacement, ".").toLowerCase();
            };
            var data = isForced.data = {};
            var NATIVE = isForced.NATIVE = "N";
            var POLYFILL = isForced.POLYFILL = "P";
            var isForced_1 = isForced;
            var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
            var _export = function(options, source) {
                var TARGET = options.target;
                var GLOBAL = options.global;
                var STATIC = options.stat;
                var FORCED, target, key, targetProperty, sourceProperty, descriptor;
                if (GLOBAL) target = global_1; else if (STATIC) target = global_1[TARGET] || setGlobal(TARGET, {}); else target = (global_1[TARGET] || {}).prototype;
                if (target) for (key in source) {
                    sourceProperty = source[key];
                    if (options.noTargetGet) {
                        descriptor = getOwnPropertyDescriptor$1(target, key);
                        targetProperty = descriptor && descriptor.value;
                    } else targetProperty = target[key];
                    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                    if (!FORCED && void 0 !== targetProperty) {
                        if (typeof sourceProperty === typeof targetProperty) continue;
                        copyConstructorProperties(sourceProperty, targetProperty);
                    }
                    if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
                    redefine(target, key, sourceProperty, options);
                }
            };
            var objectKeys = Object.keys || function keys(O) {
                return objectKeysInternal(O, enumBugKeys);
            };
            var toObject = function(argument) {
                return Object(requireObjectCoercible(argument));
            };
            var nativeAssign = Object.assign;
            var defineProperty = Object.defineProperty;
            var objectAssign = !nativeAssign || fails((function() {
                if (descriptors && 1 !== nativeAssign({
                    b: 1
                }, nativeAssign(defineProperty({}, "a", {
                    enumerable: true,
                    get: function() {
                        defineProperty(this, "b", {
                            value: 3,
                            enumerable: false
                        });
                    }
                }), {
                    b: 2
                })).b) return true;
                var A = {};
                var B = {};
                var symbol = Symbol();
                var alphabet = "abcdefghijklmnopqrst";
                A[symbol] = 7;
                alphabet.split("").forEach((function(chr) {
                    B[chr] = chr;
                }));
                return 7 != nativeAssign({}, A)[symbol] || objectKeys(nativeAssign({}, B)).join("") != alphabet;
            })) ? function assign(target, source) {
                var T = toObject(target);
                var argumentsLength = arguments.length;
                var index = 1;
                var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
                var propertyIsEnumerable = objectPropertyIsEnumerable.f;
                while (argumentsLength > index) {
                    var S = indexedObject(arguments[index++]);
                    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
                    var length = keys.length;
                    var j = 0;
                    var key;
                    while (length > j) {
                        key = keys[j++];
                        if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
                    }
                }
                return T;
            } : nativeAssign;
            _export({
                target: "Object",
                stat: true,
                forced: Object.assign !== objectAssign
            }, {
                assign: objectAssign
            });
            var stringRepeat = "".repeat || function repeat(count) {
                var str = String(requireObjectCoercible(this));
                var result = "";
                var n = toInteger(count);
                if (n < 0 || n == 1 / 0) throw RangeError("Wrong number of repetitions");
                for (;n > 0; (n >>>= 1) && (str += str)) if (1 & n) result += str;
                return result;
            };
            var ceil$1 = Math.ceil;
            var createMethod$1 = function(IS_END) {
                return function($this, maxLength, fillString) {
                    var S = String(requireObjectCoercible($this));
                    var stringLength = S.length;
                    var fillStr = void 0 === fillString ? " " : String(fillString);
                    var intMaxLength = toLength(maxLength);
                    var fillLen, stringFiller;
                    if (intMaxLength <= stringLength || "" == fillStr) return S;
                    fillLen = intMaxLength - stringLength;
                    stringFiller = stringRepeat.call(fillStr, ceil$1(fillLen / fillStr.length));
                    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
                    return IS_END ? S + stringFiller : stringFiller + S;
                };
            };
            var stringPad = {
                start: createMethod$1(false),
                end: createMethod$1(true)
            };
            var engineUserAgent = getBuiltIn("navigator", "userAgent") || "";
            var stringPadWebkitBug = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(engineUserAgent);
            var $padEnd = stringPad.end;
            _export({
                target: "String",
                proto: true,
                forced: stringPadWebkitBug
            }, {
                padEnd: function padEnd(maxLength) {
                    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : void 0);
                }
            });
            var $padStart = stringPad.start;
            _export({
                target: "String",
                proto: true,
                forced: stringPadWebkitBug
            }, {
                padStart: function padStart(maxLength) {
                    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : void 0);
                }
            });
            _export({
                target: "String",
                proto: true
            }, {
                repeat: stringRepeat
            });
            _export({
                global: true
            }, {
                globalThis: global_1
            });
            function _typeof(obj) {
                "@babel/helpers - typeof";
                if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function(obj) {
                    return typeof obj;
                }; else _typeof = function(obj) {
                    return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                return _typeof(obj);
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                return Constructor;
            }
            function _defineProperty(obj, key, value) {
                if (key in obj) Object.defineProperty(obj, key, {
                    value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                }); else obj[key] = value;
                return obj;
            }
            function _inherits(subClass, superClass) {
                if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _getPrototypeOf(o) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }
            function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }
            function _objectWithoutPropertiesLoose(source, excluded) {
                if (null == source) return {};
                var target = {};
                var sourceKeys = Object.keys(source);
                var key, i;
                for (i = 0; i < sourceKeys.length; i++) {
                    key = sourceKeys[i];
                    if (excluded.indexOf(key) >= 0) continue;
                    target[key] = source[key];
                }
                return target;
            }
            function _objectWithoutProperties(source, excluded) {
                if (null == source) return {};
                var target = _objectWithoutPropertiesLoose(source, excluded);
                var key, i;
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++) {
                        key = sourceSymbolKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
                        target[key] = source[key];
                    }
                }
                return target;
            }
            function _assertThisInitialized(self) {
                if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return self;
            }
            function _possibleConstructorReturn(self, call) {
                if (call && ("object" === typeof call || "function" === typeof call)) return call;
                return _assertThisInitialized(self);
            }
            function _superPropBase(object, property) {
                while (!Object.prototype.hasOwnProperty.call(object, property)) {
                    object = _getPrototypeOf(object);
                    if (null === object) break;
                }
                return object;
            }
            function _get(target, property, receiver) {
                if ("undefined" !== typeof Reflect && Reflect.get) _get = Reflect.get; else _get = function _get(target, property, receiver) {
                    var base = _superPropBase(target, property);
                    if (!base) return;
                    var desc = Object.getOwnPropertyDescriptor(base, property);
                    if (desc.get) return desc.get.call(receiver);
                    return desc.value;
                };
                return _get(target, property, receiver || target);
            }
            function set$1(target, property, value, receiver) {
                if ("undefined" !== typeof Reflect && Reflect.set) set$1 = Reflect.set; else set$1 = function set(target, property, value, receiver) {
                    var base = _superPropBase(target, property);
                    var desc;
                    if (base) {
                        desc = Object.getOwnPropertyDescriptor(base, property);
                        if (desc.set) {
                            desc.set.call(receiver, value);
                            return true;
                        } else if (!desc.writable) return false;
                    }
                    desc = Object.getOwnPropertyDescriptor(receiver, property);
                    if (desc) {
                        if (!desc.writable) return false;
                        desc.value = value;
                        Object.defineProperty(receiver, property, desc);
                    } else _defineProperty(receiver, property, value);
                    return true;
                };
                return set$1(target, property, value, receiver);
            }
            function _set(target, property, value, receiver, isStrict) {
                var s = set$1(target, property, value, receiver || target);
                if (!s && isStrict) throw new Error("failed to set property");
                return value;
            }
            function _slicedToArray(arr, i) {
                return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
            }
            function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr;
            }
            function _iterableToArrayLimit(arr, i) {
                if (!(Symbol.iterator in Object(arr) || "[object Arguments]" === Object.prototype.toString.call(arr))) return;
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                    for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally {
                    try {
                        if (!_n && null != _i["return"]) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
            function isString(str) {
                return "string" === typeof str || str instanceof String;
            }
            var DIRECTION = {
                NONE: "NONE",
                LEFT: "LEFT",
                FORCE_LEFT: "FORCE_LEFT",
                RIGHT: "RIGHT",
                FORCE_RIGHT: "FORCE_RIGHT"
            };
            function forceDirection(direction) {
                switch (direction) {
                  case DIRECTION.LEFT:
                    return DIRECTION.FORCE_LEFT;

                  case DIRECTION.RIGHT:
                    return DIRECTION.FORCE_RIGHT;

                  default:
                    return direction;
                }
            }
            function escapeRegExp(str) {
                return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
            }
            function objectIncludes(b, a) {
                if (a === b) return true;
                var i, arrA = Array.isArray(a), arrB = Array.isArray(b);
                if (arrA && arrB) {
                    if (a.length != b.length) return false;
                    for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
                    return true;
                }
                if (arrA != arrB) return false;
                if (a && b && "object" === _typeof(a) && "object" === _typeof(b)) {
                    var dateA = a instanceof Date, dateB = b instanceof Date;
                    if (dateA && dateB) return a.getTime() == b.getTime();
                    if (dateA != dateB) return false;
                    var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
                    if (regexpA && regexpB) return a.toString() == b.toString();
                    if (regexpA != regexpB) return false;
                    var keys = Object.keys(a);
                    for (i = 0; i < keys.length; i++) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
                    for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
                    return true;
                } else if (a && b && "function" === typeof a && "function" === typeof b) return a.toString() === b.toString();
                return false;
            }
            var ActionDetails = function() {
                function ActionDetails(value, cursorPos, oldValue, oldSelection) {
                    _classCallCheck(this, ActionDetails);
                    this.value = value;
                    this.cursorPos = cursorPos;
                    this.oldValue = oldValue;
                    this.oldSelection = oldSelection;
                    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) --this.oldSelection.start;
                }
                _createClass(ActionDetails, [ {
                    key: "startChangePos",
                    get: function get() {
                        return Math.min(this.cursorPos, this.oldSelection.start);
                    }
                }, {
                    key: "insertedCount",
                    get: function get() {
                        return this.cursorPos - this.startChangePos;
                    }
                }, {
                    key: "inserted",
                    get: function get() {
                        return this.value.substr(this.startChangePos, this.insertedCount);
                    }
                }, {
                    key: "removedCount",
                    get: function get() {
                        return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
                    }
                }, {
                    key: "removed",
                    get: function get() {
                        return this.oldValue.substr(this.startChangePos, this.removedCount);
                    }
                }, {
                    key: "head",
                    get: function get() {
                        return this.value.substring(0, this.startChangePos);
                    }
                }, {
                    key: "tail",
                    get: function get() {
                        return this.value.substring(this.startChangePos + this.insertedCount);
                    }
                }, {
                    key: "removeDirection",
                    get: function get() {
                        if (!this.removedCount || this.insertedCount) return DIRECTION.NONE;
                        return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
                    }
                } ]);
                return ActionDetails;
            }();
            var ChangeDetails = function() {
                function ChangeDetails(details) {
                    _classCallCheck(this, ChangeDetails);
                    Object.assign(this, {
                        inserted: "",
                        rawInserted: "",
                        skip: false,
                        tailShift: 0
                    }, details);
                }
                _createClass(ChangeDetails, [ {
                    key: "aggregate",
                    value: function aggregate(details) {
                        this.rawInserted += details.rawInserted;
                        this.skip = this.skip || details.skip;
                        this.inserted += details.inserted;
                        this.tailShift += details.tailShift;
                        return this;
                    }
                }, {
                    key: "offset",
                    get: function get() {
                        return this.tailShift + this.inserted.length;
                    }
                } ]);
                return ChangeDetails;
            }();
            var ContinuousTailDetails = function() {
                function ContinuousTailDetails() {
                    var value = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    var from = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    var stop = arguments.length > 2 ? arguments[2] : void 0;
                    _classCallCheck(this, ContinuousTailDetails);
                    this.value = value;
                    this.from = from;
                    this.stop = stop;
                }
                _createClass(ContinuousTailDetails, [ {
                    key: "toString",
                    value: function toString() {
                        return this.value;
                    }
                }, {
                    key: "extend",
                    value: function extend(tail) {
                        this.value += String(tail);
                    }
                }, {
                    key: "appendTo",
                    value: function appendTo(masked) {
                        return masked.append(this.toString(), {
                            tail: true
                        }).aggregate(masked._appendPlaceholder());
                    }
                }, {
                    key: "shiftBefore",
                    value: function shiftBefore(pos) {
                        if (this.from >= pos || !this.value.length) return "";
                        var shiftChar = this.value[0];
                        this.value = this.value.slice(1);
                        return shiftChar;
                    }
                }, {
                    key: "state",
                    get: function get() {
                        return {
                            value: this.value,
                            from: this.from,
                            stop: this.stop
                        };
                    },
                    set: function set(state) {
                        Object.assign(this, state);
                    }
                } ]);
                return ContinuousTailDetails;
            }();
            function IMask(el) {
                var opts = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new IMask.InputMask(el, opts);
            }
            var Masked = function() {
                function Masked(opts) {
                    _classCallCheck(this, Masked);
                    this._value = "";
                    this._update(Object.assign({}, Masked.DEFAULTS, {}, opts));
                    this.isInitialized = true;
                }
                _createClass(Masked, [ {
                    key: "updateOptions",
                    value: function updateOptions(opts) {
                        if (!Object.keys(opts).length) return;
                        this.withValueRefresh(this._update.bind(this, opts));
                    }
                }, {
                    key: "_update",
                    value: function _update(opts) {
                        Object.assign(this, opts);
                    }
                }, {
                    key: "reset",
                    value: function reset() {
                        this._value = "";
                    }
                }, {
                    key: "resolve",
                    value: function resolve(value) {
                        this.reset();
                        this.append(value, {
                            input: true
                        }, "");
                        this.doCommit();
                        return this.value;
                    }
                }, {
                    key: "nearestInputPos",
                    value: function nearestInputPos(cursorPos, direction) {
                        return cursorPos;
                    }
                }, {
                    key: "extractInput",
                    value: function extractInput() {
                        var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        return this.value.slice(fromPos, toPos);
                    }
                }, {
                    key: "extractTail",
                    value: function extractTail() {
                        var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
                    }
                }, {
                    key: "appendTail",
                    value: function appendTail(tail) {
                        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
                        return tail.appendTo(this);
                    }
                }, {
                    key: "_appendCharRaw",
                    value: function _appendCharRaw(ch) {
                        var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        ch = this.doPrepare(ch, flags);
                        if (!ch) return new ChangeDetails;
                        this._value += ch;
                        return new ChangeDetails({
                            inserted: ch,
                            rawInserted: ch
                        });
                    }
                }, {
                    key: "_appendChar",
                    value: function _appendChar(ch) {
                        var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        var checkTail = arguments.length > 2 ? arguments[2] : void 0;
                        var consistentState = this.state;
                        var details = this._appendCharRaw(ch, flags);
                        if (details.inserted) {
                            var consistentTail;
                            var appended = false !== this.doValidate(flags);
                            if (appended && null != checkTail) {
                                var beforeTailState = this.state;
                                if (this.overwrite) {
                                    consistentTail = checkTail.state;
                                    checkTail.shiftBefore(this.value.length);
                                }
                                var tailDetails = this.appendTail(checkTail);
                                appended = tailDetails.rawInserted === checkTail.toString();
                                if (appended && tailDetails.inserted) this.state = beforeTailState;
                            }
                            if (!appended) {
                                details = new ChangeDetails;
                                this.state = consistentState;
                                if (checkTail && consistentTail) checkTail.state = consistentTail;
                            }
                        }
                        return details;
                    }
                }, {
                    key: "_appendPlaceholder",
                    value: function _appendPlaceholder() {
                        return new ChangeDetails;
                    }
                }, {
                    key: "append",
                    value: function append(str, flags, tail) {
                        if (!isString(str)) throw new Error("value should be string");
                        var details = new ChangeDetails;
                        var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
                        if (flags.tail) flags._beforeTailState = this.state;
                        for (var ci = 0; ci < str.length; ++ci) details.aggregate(this._appendChar(str[ci], flags, checkTail));
                        if (null != checkTail) details.tailShift += this.appendTail(checkTail).tailShift;
                        return details;
                    }
                }, {
                    key: "remove",
                    value: function remove() {
                        var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
                        return new ChangeDetails;
                    }
                }, {
                    key: "withValueRefresh",
                    value: function withValueRefresh(fn) {
                        if (this._refreshing || !this.isInitialized) return fn();
                        this._refreshing = true;
                        var rawInput = this.rawInputValue;
                        var value = this.value;
                        var ret = fn();
                        this.rawInputValue = rawInput;
                        if (this.value !== value && 0 === value.indexOf(this.value)) this.append(value.slice(this.value.length), {}, "");
                        delete this._refreshing;
                        return ret;
                    }
                }, {
                    key: "runIsolated",
                    value: function runIsolated(fn) {
                        if (this._isolated || !this.isInitialized) return fn(this);
                        this._isolated = true;
                        var state = this.state;
                        var ret = fn(this);
                        this.state = state;
                        delete this._isolated;
                        return ret;
                    }
                }, {
                    key: "doPrepare",
                    value: function doPrepare(str) {
                        var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.prepare ? this.prepare(str, this, flags) : str;
                    }
                }, {
                    key: "doValidate",
                    value: function doValidate(flags) {
                        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
                    }
                }, {
                    key: "doCommit",
                    value: function doCommit() {
                        if (this.commit) this.commit(this.value, this);
                    }
                }, {
                    key: "doFormat",
                    value: function doFormat(value) {
                        return this.format ? this.format(value, this) : value;
                    }
                }, {
                    key: "doParse",
                    value: function doParse(str) {
                        return this.parse ? this.parse(str, this) : str;
                    }
                }, {
                    key: "splice",
                    value: function splice(start, deleteCount, inserted, removeDirection) {
                        var tailPos = start + deleteCount;
                        var tail = this.extractTail(tailPos);
                        var startChangePos = this.nearestInputPos(start, removeDirection);
                        var changeDetails = new ChangeDetails({
                            tailShift: startChangePos - start
                        }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
                            input: true
                        }, tail));
                        return changeDetails;
                    }
                }, {
                    key: "state",
                    get: function get() {
                        return {
                            _value: this.value
                        };
                    },
                    set: function set(state) {
                        this._value = state._value;
                    }
                }, {
                    key: "value",
                    get: function get() {
                        return this._value;
                    },
                    set: function set(value) {
                        this.resolve(value);
                    }
                }, {
                    key: "unmaskedValue",
                    get: function get() {
                        return this.value;
                    },
                    set: function set(value) {
                        this.reset();
                        this.append(value, {}, "");
                        this.doCommit();
                    }
                }, {
                    key: "typedValue",
                    get: function get() {
                        return this.doParse(this.value);
                    },
                    set: function set(value) {
                        this.value = this.doFormat(value);
                    }
                }, {
                    key: "rawInputValue",
                    get: function get() {
                        return this.extractInput(0, this.value.length, {
                            raw: true
                        });
                    },
                    set: function set(value) {
                        this.reset();
                        this.append(value, {
                            raw: true
                        }, "");
                        this.doCommit();
                    }
                }, {
                    key: "isComplete",
                    get: function get() {
                        return true;
                    }
                } ]);
                return Masked;
            }();
            Masked.DEFAULTS = {
                format: function format(v) {
                    return v;
                },
                parse: function parse(v) {
                    return v;
                }
            };
            IMask.Masked = Masked;
            function maskedClass(mask) {
                if (null == mask) throw new Error("mask property should be defined");
                if (mask instanceof RegExp) return IMask.MaskedRegExp;
                if (isString(mask)) return IMask.MaskedPattern;
                if (mask instanceof Date || mask === Date) return IMask.MaskedDate;
                if (mask instanceof Number || "number" === typeof mask || mask === Number) return IMask.MaskedNumber;
                if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic;
                if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask;
                if (mask instanceof Function) return IMask.MaskedFunction;
                if (mask instanceof IMask.Masked) return mask.constructor;
                console.warn("Mask not found for mask", mask);
                return IMask.Masked;
            }
            function createMask(opts) {
                if (IMask.Masked && opts instanceof IMask.Masked) return opts;
                opts = Object.assign({}, opts);
                var mask = opts.mask;
                if (IMask.Masked && mask instanceof IMask.Masked) return mask;
                var MaskedClass = maskedClass(mask);
                if (!MaskedClass) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
                return new MaskedClass(opts);
            }
            IMask.createMask = createMask;
            var DEFAULT_INPUT_DEFINITIONS = {
                0: /\d/,
                a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
                "*": /./
            };
            var PatternInputDefinition = function() {
                function PatternInputDefinition(opts) {
                    _classCallCheck(this, PatternInputDefinition);
                    var mask = opts.mask, blockOpts = _objectWithoutProperties(opts, [ "mask" ]);
                    this.masked = createMask({
                        mask
                    });
                    Object.assign(this, blockOpts);
                }
                _createClass(PatternInputDefinition, [ {
                    key: "reset",
                    value: function reset() {
                        this._isFilled = false;
                        this.masked.reset();
                    }
                }, {
                    key: "remove",
                    value: function remove() {
                        var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        if (0 === fromPos && toPos >= 1) {
                            this._isFilled = false;
                            return this.masked.remove(fromPos, toPos);
                        }
                        return new ChangeDetails;
                    }
                }, {
                    key: "_appendChar",
                    value: function _appendChar(str) {
                        var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (this._isFilled) return new ChangeDetails;
                        var state = this.masked.state;
                        var details = this.masked._appendChar(str, flags);
                        if (details.inserted && false === this.doValidate(flags)) {
                            details.inserted = details.rawInserted = "";
                            this.masked.state = state;
                        }
                        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) details.inserted = this.placeholderChar;
                        details.skip = !details.inserted && !this.isOptional;
                        this._isFilled = Boolean(details.inserted);
                        return details;
                    }
                }, {
                    key: "append",
                    value: function append() {
                        var _this$masked;
                        return (_this$masked = this.masked).append.apply(_this$masked, arguments);
                    }
                }, {
                    key: "_appendPlaceholder",
                    value: function _appendPlaceholder() {
                        var details = new ChangeDetails;
                        if (this._isFilled || this.isOptional) return details;
                        this._isFilled = true;
                        details.inserted = this.placeholderChar;
                        return details;
                    }
                }, {
                    key: "extractTail",
                    value: function extractTail() {
                        var _this$masked2;
                        return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
                    }
                }, {
                    key: "appendTail",
                    value: function appendTail() {
                        var _this$masked3;
                        return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
                    }
                }, {
                    key: "extractInput",
                    value: function extractInput() {
                        var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        var flags = arguments.length > 2 ? arguments[2] : void 0;
                        return this.masked.extractInput(fromPos, toPos, flags);
                    }
                }, {
                    key: "nearestInputPos",
                    value: function nearestInputPos(cursorPos) {
                        var direction = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DIRECTION.NONE;
                        var minPos = 0;
                        var maxPos = this.value.length;
                        var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
                        switch (direction) {
                          case DIRECTION.LEFT:
                          case DIRECTION.FORCE_LEFT:
                            return this.isComplete ? boundPos : minPos;

                          case DIRECTION.RIGHT:
                          case DIRECTION.FORCE_RIGHT:
                            return this.isComplete ? boundPos : maxPos;

                          case DIRECTION.NONE:
                          default:
                            return boundPos;
                        }
                    }
                }, {
                    key: "doValidate",
                    value: function doValidate() {
                        var _this$masked4, _this$parent;
                        return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
                    }
                }, {
                    key: "doCommit",
                    value: function doCommit() {
                        this.masked.doCommit();
                    }
                }, {
                    key: "value",
                    get: function get() {
                        return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : "");
                    }
                }, {
                    key: "unmaskedValue",
                    get: function get() {
                        return this.masked.unmaskedValue;
                    }
                }, {
                    key: "isComplete",
                    get: function get() {
                        return Boolean(this.masked.value) || this.isOptional;
                    }
                }, {
                    key: "state",
                    get: function get() {
                        return {
                            masked: this.masked.state,
                            _isFilled: this._isFilled
                        };
                    },
                    set: function set(state) {
                        this.masked.state = state.masked;
                        this._isFilled = state._isFilled;
                    }
                } ]);
                return PatternInputDefinition;
            }();
            var PatternFixedDefinition = function() {
                function PatternFixedDefinition(opts) {
                    _classCallCheck(this, PatternFixedDefinition);
                    Object.assign(this, opts);
                    this._value = "";
                }
                _createClass(PatternFixedDefinition, [ {
                    key: "reset",
                    value: function reset() {
                        this._isRawInput = false;
                        this._value = "";
                    }
                }, {
                    key: "remove",
                    value: function remove() {
                        var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
                        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
                        if (!this._value) this._isRawInput = false;
                        return new ChangeDetails;
                    }
                }, {
                    key: "nearestInputPos",
                    value: function nearestInputPos(cursorPos) {
                        var direction = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DIRECTION.NONE;
                        var minPos = 0;
                        var maxPos = this._value.length;
                        switch (direction) {
                          case DIRECTION.LEFT:
                          case DIRECTION.FORCE_LEFT:
                            return minPos;

                          case DIRECTION.NONE:
                          case DIRECTION.RIGHT:
                          case DIRECTION.FORCE_RIGHT:
                          default:
                            return maxPos;
                        }
                    }
                }, {
                    key: "extractInput",
                    value: function extractInput() {
                        var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
                        var flags = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || "";
                    }
                }, {
                    key: "_appendChar",
                    value: function _appendChar(str) {
                        var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        var details = new ChangeDetails;
                        if (this._value) return details;
                        var appended = this.char === str[0];
                        var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
                        if (isResolved) details.rawInserted = this.char;
                        this._value = details.inserted = this.char;
                        this._isRawInput = isResolved && (flags.raw || flags.input);
                        return details;
                    }
                }, {
                    key: "_appendPlaceholder",
                    value: function _appendPlaceholder() {
                        var details = new ChangeDetails;
                        if (this._value) return details;
                        this._value = details.inserted = this.char;
                        return details;
                    }
                }, {
                    key: "extractTail",
                    value: function extractTail() {
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        return new ContinuousTailDetails("");
                    }
                }, {
                    key: "appendTail",
                    value: function appendTail(tail) {
                        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
                        return tail.appendTo(this);
                    }
                }, {
                    key: "append",
                    value: function append(str, flags, tail) {
                        var details = this._appendChar(str, flags);
                        if (null != tail) details.tailShift += this.appendTail(tail).tailShift;
                        return details;
                    }
                }, {
                    key: "doCommit",
                    value: function doCommit() {}
                }, {
                    key: "value",
                    get: function get() {
                        return this._value;
                    }
                }, {
                    key: "unmaskedValue",
                    get: function get() {
                        return this.isUnmasking ? this.value : "";
                    }
                }, {
                    key: "isComplete",
                    get: function get() {
                        return true;
                    }
                }, {
                    key: "state",
                    get: function get() {
                        return {
                            _value: this._value,
                            _isRawInput: this._isRawInput
                        };
                    },
                    set: function set(state) {
                        Object.assign(this, state);
                    }
                } ]);
                return PatternFixedDefinition;
            }();
            var ChunksTailDetails = function() {
                function ChunksTailDetails() {
                    var chunks = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    var from = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    _classCallCheck(this, ChunksTailDetails);
                    this.chunks = chunks;
                    this.from = from;
                }
                _createClass(ChunksTailDetails, [ {
                    key: "toString",
                    value: function toString() {
                        return this.chunks.map(String).join("");
                    }
                }, {
                    key: "extend",
                    value: function extend(tailChunk) {
                        if (!String(tailChunk)) return;
                        if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
                        var lastChunk = this.chunks[this.chunks.length - 1];
                        var extendLast = lastChunk && (lastChunk.stop === tailChunk.stop || null == tailChunk.stop) && tailChunk.from === lastChunk.from + lastChunk.toString().length;
                        if (tailChunk instanceof ContinuousTailDetails) if (extendLast) lastChunk.extend(tailChunk.toString()); else this.chunks.push(tailChunk); else if (tailChunk instanceof ChunksTailDetails) {
                            if (null == tailChunk.stop) {
                                var firstTailChunk;
                                while (tailChunk.chunks.length && null == tailChunk.chunks[0].stop) {
                                    firstTailChunk = tailChunk.chunks.shift();
                                    firstTailChunk.from += tailChunk.from;
                                    this.extend(firstTailChunk);
                                }
                            }
                            if (tailChunk.toString()) {
                                tailChunk.stop = tailChunk.blockIndex;
                                this.chunks.push(tailChunk);
                            }
                        }
                    }
                }, {
                    key: "appendTo",
                    value: function appendTo(masked) {
                        if (!(masked instanceof IMask.MaskedPattern)) {
                            var tail = new ContinuousTailDetails(this.toString());
                            return tail.appendTo(masked);
                        }
                        var details = new ChangeDetails;
                        for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
                            var chunk = this.chunks[ci];
                            var lastBlockIter = masked._mapPosToBlock(masked.value.length);
                            var stop = chunk.stop;
                            var chunkBlock = void 0;
                            if (null != stop && (!lastBlockIter || lastBlockIter.index <= stop)) {
                                if (chunk instanceof ChunksTailDetails || masked._stops.indexOf(stop) >= 0) details.aggregate(masked._appendPlaceholder(stop));
                                chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
                            }
                            if (chunkBlock) {
                                var tailDetails = chunkBlock.appendTail(chunk);
                                tailDetails.skip = false;
                                details.aggregate(tailDetails);
                                masked._value += tailDetails.inserted;
                                var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
                                if (remainChars) details.aggregate(masked.append(remainChars, {
                                    tail: true
                                }));
                            } else details.aggregate(masked.append(chunk.toString(), {
                                tail: true
                            }));
                        }
                        return details;
                    }
                }, {
                    key: "shiftBefore",
                    value: function shiftBefore(pos) {
                        if (this.from >= pos || !this.chunks.length) return "";
                        var chunkShiftPos = pos - this.from;
                        var ci = 0;
                        while (ci < this.chunks.length) {
                            var chunk = this.chunks[ci];
                            var shiftChar = chunk.shiftBefore(chunkShiftPos);
                            if (chunk.toString()) {
                                if (!shiftChar) break;
                                ++ci;
                            } else this.chunks.splice(ci, 1);
                            if (shiftChar) return shiftChar;
                        }
                        return "";
                    }
                }, {
                    key: "state",
                    get: function get() {
                        return {
                            chunks: this.chunks.map((function(c) {
                                return c.state;
                            })),
                            from: this.from,
                            stop: this.stop,
                            blockIndex: this.blockIndex
                        };
                    },
                    set: function set(state) {
                        var chunks = state.chunks, props = _objectWithoutProperties(state, [ "chunks" ]);
                        Object.assign(this, props);
                        this.chunks = chunks.map((function(cstate) {
                            var chunk = "chunks" in cstate ? new ChunksTailDetails : new ContinuousTailDetails;
                            chunk.state = cstate;
                            return chunk;
                        }));
                    }
                } ]);
                return ChunksTailDetails;
            }();
            var MaskedRegExp = function(_Masked) {
                _inherits(MaskedRegExp, _Masked);
                function MaskedRegExp() {
                    _classCallCheck(this, MaskedRegExp);
                    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRegExp).apply(this, arguments));
                }
                _createClass(MaskedRegExp, [ {
                    key: "_update",
                    value: function _update(opts) {
                        if (opts.mask) opts.validate = function(value) {
                            return value.search(opts.mask) >= 0;
                        };
                        _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
                    }
                } ]);
                return MaskedRegExp;
            }(Masked);
            IMask.MaskedRegExp = MaskedRegExp;
            var MaskedPattern = function(_Masked) {
                _inherits(MaskedPattern, _Masked);
                function MaskedPattern() {
                    var opts = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    _classCallCheck(this, MaskedPattern);
                    opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
                    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedPattern).call(this, Object.assign({}, MaskedPattern.DEFAULTS, {}, opts)));
                }
                _createClass(MaskedPattern, [ {
                    key: "_update",
                    value: function _update() {
                        var opts = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        opts.definitions = Object.assign({}, this.definitions, opts.definitions);
                        _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);
                        this._rebuildMask();
                    }
                }, {
                    key: "_rebuildMask",
                    value: function _rebuildMask() {
                        var _this = this;
                        var defs = this.definitions;
                        this._blocks = [];
                        this._stops = [];
                        this._maskedBlocks = {};
                        var pattern = this.mask;
                        if (!pattern || !defs) return;
                        var unmaskingBlock = false;
                        var optionalBlock = false;
                        for (var i = 0; i < pattern.length; ++i) {
                            if (this.blocks) {
                                var _ret = function() {
                                    var p = pattern.slice(i);
                                    var bNames = Object.keys(_this.blocks).filter((function(bName) {
                                        return 0 === p.indexOf(bName);
                                    }));
                                    bNames.sort((function(a, b) {
                                        return b.length - a.length;
                                    }));
                                    var bName = bNames[0];
                                    if (bName) {
                                        var maskedBlock = createMask(Object.assign({
                                            parent: _this,
                                            lazy: _this.lazy,
                                            placeholderChar: _this.placeholderChar,
                                            overwrite: _this.overwrite
                                        }, _this.blocks[bName]));
                                        if (maskedBlock) {
                                            _this._blocks.push(maskedBlock);
                                            if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];
                                            _this._maskedBlocks[bName].push(_this._blocks.length - 1);
                                        }
                                        i += bName.length - 1;
                                        return "continue";
                                    }
                                }();
                                if ("continue" === _ret) continue;
                            }
                            var char = pattern[i];
                            var _isInput = char in defs;
                            if (char === MaskedPattern.STOP_CHAR) {
                                this._stops.push(this._blocks.length);
                                continue;
                            }
                            if ("{" === char || "}" === char) {
                                unmaskingBlock = !unmaskingBlock;
                                continue;
                            }
                            if ("[" === char || "]" === char) {
                                optionalBlock = !optionalBlock;
                                continue;
                            }
                            if (char === MaskedPattern.ESCAPE_CHAR) {
                                ++i;
                                char = pattern[i];
                                if (!char) break;
                                _isInput = false;
                            }
                            var def = _isInput ? new PatternInputDefinition({
                                parent: this,
                                lazy: this.lazy,
                                placeholderChar: this.placeholderChar,
                                mask: defs[char],
                                isOptional: optionalBlock
                            }) : new PatternFixedDefinition({
                                char,
                                isUnmasking: unmaskingBlock
                            });
                            this._blocks.push(def);
                        }
                    }
                }, {
                    key: "reset",
                    value: function reset() {
                        _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);
                        this._blocks.forEach((function(b) {
                            return b.reset();
                        }));
                    }
                }, {
                    key: "doCommit",
                    value: function doCommit() {
                        this._blocks.forEach((function(b) {
                            return b.doCommit();
                        }));
                        _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
                    }
                }, {
                    key: "appendTail",
                    value: function appendTail(tail) {
                        return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
                    }
                }, {
                    key: "_appendCharRaw",
                    value: function _appendCharRaw(ch) {
                        var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        ch = this.doPrepare(ch, flags);
                        var blockIter = this._mapPosToBlock(this.value.length);
                        var details = new ChangeDetails;
                        if (!blockIter) return details;
                        for (var bi = blockIter.index; ;++bi) {
                            var _block = this._blocks[bi];
                            if (!_block) break;
                            var blockDetails = _block._appendChar(ch, flags);
                            var skip = blockDetails.skip;
                            details.aggregate(blockDetails);
                            if (skip || blockDetails.rawInserted) break;
                        }
                        return details;
                    }
                }, {
                    key: "extractTail",
                    value: function extractTail() {
                        var _this2 = this;
                        var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        var chunkTail = new ChunksTailDetails;
                        if (fromPos === toPos) return chunkTail;
                        this._forEachBlocksInRange(fromPos, toPos, (function(b, bi, bFromPos, bToPos) {
                            var blockChunk = b.extractTail(bFromPos, bToPos);
                            blockChunk.stop = _this2._findStopBefore(bi);
                            blockChunk.from = _this2._blockStartPos(bi);
                            if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
                            chunkTail.extend(blockChunk);
                        }));
                        return chunkTail;
                    }
                }, {
                    key: "extractInput",
                    value: function extractInput() {
                        var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        var flags = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (fromPos === toPos) return "";
                        var input = "";
                        this._forEachBlocksInRange(fromPos, toPos, (function(b, _, fromPos, toPos) {
                            input += b.extractInput(fromPos, toPos, flags);
                        }));
                        return input;
                    }
                }, {
                    key: "_findStopBefore",
                    value: function _findStopBefore(blockIndex) {
                        var stopBefore;
                        for (var si = 0; si < this._stops.length; ++si) {
                            var stop = this._stops[si];
                            if (stop <= blockIndex) stopBefore = stop; else break;
                        }
                        return stopBefore;
                    }
                }, {
                    key: "_appendPlaceholder",
                    value: function _appendPlaceholder(toBlockIndex) {
                        var _this3 = this;
                        var details = new ChangeDetails;
                        if (this.lazy && null == toBlockIndex) return details;
                        var startBlockIter = this._mapPosToBlock(this.value.length);
                        if (!startBlockIter) return details;
                        var startBlockIndex = startBlockIter.index;
                        var endBlockIndex = null != toBlockIndex ? toBlockIndex : this._blocks.length;
                        this._blocks.slice(startBlockIndex, endBlockIndex).forEach((function(b) {
                            if (!b.lazy || null != toBlockIndex) {
                                var args = null != b._blocks ? [ b._blocks.length ] : [];
                                var bDetails = b._appendPlaceholder.apply(b, args);
                                _this3._value += bDetails.inserted;
                                details.aggregate(bDetails);
                            }
                        }));
                        return details;
                    }
                }, {
                    key: "_mapPosToBlock",
                    value: function _mapPosToBlock(pos) {
                        var accVal = "";
                        for (var bi = 0; bi < this._blocks.length; ++bi) {
                            var _block2 = this._blocks[bi];
                            var blockStartPos = accVal.length;
                            accVal += _block2.value;
                            if (pos <= accVal.length) return {
                                index: bi,
                                offset: pos - blockStartPos
                            };
                        }
                    }
                }, {
                    key: "_blockStartPos",
                    value: function _blockStartPos(blockIndex) {
                        return this._blocks.slice(0, blockIndex).reduce((function(pos, b) {
                            return pos += b.value.length;
                        }), 0);
                    }
                }, {
                    key: "_forEachBlocksInRange",
                    value: function _forEachBlocksInRange(fromPos) {
                        var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        var fn = arguments.length > 2 ? arguments[2] : void 0;
                        var fromBlockIter = this._mapPosToBlock(fromPos);
                        if (fromBlockIter) {
                            var toBlockIter = this._mapPosToBlock(toPos);
                            var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
                            var fromBlockStartPos = fromBlockIter.offset;
                            var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
                            fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
                            if (toBlockIter && !isSameBlock) {
                                for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
                                fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
                            }
                        }
                    }
                }, {
                    key: "remove",
                    value: function remove() {
                        var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);
                        this._forEachBlocksInRange(fromPos, toPos, (function(b, _, bFromPos, bToPos) {
                            removeDetails.aggregate(b.remove(bFromPos, bToPos));
                        }));
                        return removeDetails;
                    }
                }, {
                    key: "nearestInputPos",
                    value: function nearestInputPos(cursorPos) {
                        var direction = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DIRECTION.NONE;
                        var beginBlockData = this._mapPosToBlock(cursorPos) || {
                            index: 0,
                            offset: 0
                        };
                        var beginBlockOffset = beginBlockData.offset, beginBlockIndex = beginBlockData.index;
                        var beginBlock = this._blocks[beginBlockIndex];
                        if (!beginBlock) return cursorPos;
                        var beginBlockCursorPos = beginBlockOffset;
                        if (0 !== beginBlockCursorPos && beginBlockCursorPos < beginBlock.value.length) beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, forceDirection(direction));
                        var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
                        var cursorAtLeft = 0 === beginBlockCursorPos;
                        if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
                        var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;
                        if (direction === DIRECTION.NONE) {
                            if (searchBlockIndex > 0) {
                                var blockIndexAtLeft = searchBlockIndex - 1;
                                var blockAtLeft = this._blocks[blockIndexAtLeft];
                                var blockInputPos = blockAtLeft.nearestInputPos(0, DIRECTION.NONE);
                                if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) return this._blockStartPos(searchBlockIndex);
                            }
                            var firstInputAtRight = searchBlockIndex;
                            for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
                                var blockAtRight = this._blocks[bi];
                                var _blockInputPos = blockAtRight.nearestInputPos(0, DIRECTION.NONE);
                                if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) return this._blockStartPos(bi) + _blockInputPos;
                            }
                            for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
                                var _block3 = this._blocks[_bi];
                                var _blockInputPos2 = _block3.nearestInputPos(0, DIRECTION.NONE);
                                if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) return this._blockStartPos(_bi) + _block3.value.length;
                            }
                            return cursorPos;
                        }
                        if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
                            var firstFilledBlockIndexAtRight;
                            for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) if (this._blocks[_bi2].value) {
                                firstFilledBlockIndexAtRight = _bi2;
                                break;
                            }
                            if (null != firstFilledBlockIndexAtRight) {
                                var filledBlock = this._blocks[firstFilledBlockIndexAtRight];
                                var _blockInputPos3 = filledBlock.nearestInputPos(0, DIRECTION.RIGHT);
                                if (0 === _blockInputPos3 && filledBlock.unmaskedValue.length) return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
                            }
                            var firstFilledInputBlockIndex = -1;
                            var firstEmptyInputBlockIndex;
                            for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
                                var _block4 = this._blocks[_bi3];
                                var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, DIRECTION.FORCE_LEFT);
                                if (!_block4.value || 0 !== _blockInputPos4) firstEmptyInputBlockIndex = _bi3;
                                if (0 !== _blockInputPos4) if (_blockInputPos4 !== _block4.value.length) return this._blockStartPos(_bi3) + _blockInputPos4; else {
                                    firstFilledInputBlockIndex = _bi3;
                                    break;
                                }
                            }
                            if (direction === DIRECTION.LEFT) for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
                                var _block5 = this._blocks[_bi4];
                                var _blockInputPos5 = _block5.nearestInputPos(0, DIRECTION.NONE);
                                var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;
                                if (blockAlignedPos > cursorPos) break;
                                if (_blockInputPos5 !== _block5.value.length) return blockAlignedPos;
                            }
                            if (firstFilledInputBlockIndex >= 0) return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
                            if (direction === DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) return 0;
                            if (null != firstEmptyInputBlockIndex) return this._blockStartPos(firstEmptyInputBlockIndex);
                            for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
                                var _block6 = this._blocks[_bi5];
                                var _blockInputPos6 = _block6.nearestInputPos(0, DIRECTION.NONE);
                                if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) return this._blockStartPos(_bi5) + _blockInputPos6;
                            }
                            return 0;
                        }
                        if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
                            var firstInputBlockAlignedIndex;
                            var firstInputBlockAlignedPos;
                            for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
                                var _block7 = this._blocks[_bi6];
                                var _blockInputPos7 = _block7.nearestInputPos(0, DIRECTION.NONE);
                                if (_blockInputPos7 !== _block7.value.length) {
                                    firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
                                    firstInputBlockAlignedIndex = _bi6;
                                    break;
                                }
                            }
                            if (null != firstInputBlockAlignedIndex && null != firstInputBlockAlignedPos) {
                                for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
                                    var _block8 = this._blocks[_bi7];
                                    var _blockInputPos8 = _block8.nearestInputPos(0, DIRECTION.FORCE_RIGHT);
                                    if (_blockInputPos8 !== _block8.value.length) return this._blockStartPos(_bi7) + _blockInputPos8;
                                }
                                return direction === DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
                            }
                            for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
                                var _block9 = this._blocks[_bi8];
                                var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, DIRECTION.LEFT);
                                if (0 !== _blockInputPos9) {
                                    var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;
                                    if (alignedPos >= cursorPos) return alignedPos;
                                    break;
                                }
                            }
                        }
                        return cursorPos;
                    }
                }, {
                    key: "maskedBlock",
                    value: function maskedBlock(name) {
                        return this.maskedBlocks(name)[0];
                    }
                }, {
                    key: "maskedBlocks",
                    value: function maskedBlocks(name) {
                        var _this4 = this;
                        var indices = this._maskedBlocks[name];
                        if (!indices) return [];
                        return indices.map((function(gi) {
                            return _this4._blocks[gi];
                        }));
                    }
                }, {
                    key: "state",
                    get: function get() {
                        return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
                            _blocks: this._blocks.map((function(b) {
                                return b.state;
                            }))
                        });
                    },
                    set: function set(state) {
                        var _blocks = state._blocks, maskedState = _objectWithoutProperties(state, [ "_blocks" ]);
                        this._blocks.forEach((function(b, bi) {
                            return b.state = _blocks[bi];
                        }));
                        _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
                    }
                }, {
                    key: "isComplete",
                    get: function get() {
                        return this._blocks.every((function(b) {
                            return b.isComplete;
                        }));
                    }
                }, {
                    key: "unmaskedValue",
                    get: function get() {
                        return this._blocks.reduce((function(str, b) {
                            return str += b.unmaskedValue;
                        }), "");
                    },
                    set: function set(unmaskedValue) {
                        _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
                    }
                }, {
                    key: "value",
                    get: function get() {
                        return this._blocks.reduce((function(str, b) {
                            return str += b.value;
                        }), "");
                    },
                    set: function set(value) {
                        _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
                    }
                } ]);
                return MaskedPattern;
            }(Masked);
            MaskedPattern.DEFAULTS = {
                lazy: true,
                placeholderChar: "_"
            };
            MaskedPattern.STOP_CHAR = "`";
            MaskedPattern.ESCAPE_CHAR = "\\";
            MaskedPattern.InputDefinition = PatternInputDefinition;
            MaskedPattern.FixedDefinition = PatternFixedDefinition;
            function isInput(block) {
                if (!block) return false;
                var value = block.value;
                return !value || block.nearestInputPos(0, DIRECTION.NONE) !== value.length;
            }
            IMask.MaskedPattern = MaskedPattern;
            var MaskedRange = function(_MaskedPattern) {
                _inherits(MaskedRange, _MaskedPattern);
                function MaskedRange() {
                    _classCallCheck(this, MaskedRange);
                    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRange).apply(this, arguments));
                }
                _createClass(MaskedRange, [ {
                    key: "_update",
                    value: function _update(opts) {
                        opts = Object.assign({
                            to: this.to || 0,
                            from: this.from || 0
                        }, opts);
                        var maxLength = String(opts.to).length;
                        if (null != opts.maxLength) maxLength = Math.max(maxLength, opts.maxLength);
                        opts.maxLength = maxLength;
                        var fromStr = String(opts.from).padStart(maxLength, "0");
                        var toStr = String(opts.to).padStart(maxLength, "0");
                        var sameCharsCount = 0;
                        while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
                        opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, "\\0") + "0".repeat(maxLength - sameCharsCount);
                        _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
                    }
                }, {
                    key: "boundaries",
                    value: function boundaries(str) {
                        var minstr = "";
                        var maxstr = "";
                        var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [], _ref2 = _slicedToArray(_ref, 3), placeholder = _ref2[1], num = _ref2[2];
                        if (num) {
                            minstr = "0".repeat(placeholder.length) + num;
                            maxstr = "9".repeat(placeholder.length) + num;
                        }
                        minstr = minstr.padEnd(this.maxLength, "0");
                        maxstr = maxstr.padEnd(this.maxLength, "9");
                        return [ minstr, maxstr ];
                    }
                }, {
                    key: "doPrepare",
                    value: function doPrepare(str) {
                        var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        str = _get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, "");
                        if (!this.autofix) return str;
                        var fromStr = String(this.from).padStart(this.maxLength, "0");
                        var toStr = String(this.to).padStart(this.maxLength, "0");
                        var val = this.value;
                        var prepStr = "";
                        for (var ci = 0; ci < str.length; ++ci) {
                            var nextVal = val + prepStr + str[ci];
                            var _this$boundaries = this.boundaries(nextVal), _this$boundaries2 = _slicedToArray(_this$boundaries, 2), minstr = _this$boundaries2[0], maxstr = _this$boundaries2[1];
                            if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1]; else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1]; else prepStr += str[ci];
                        }
                        return prepStr;
                    }
                }, {
                    key: "doValidate",
                    value: function doValidate() {
                        var _get2;
                        var str = this.value;
                        var firstNonZero = str.search(/[^0]/);
                        if (-1 === firstNonZero && str.length <= this._matchFrom) return true;
                        var _this$boundaries3 = this.boundaries(str), _this$boundaries4 = _slicedToArray(_this$boundaries3, 2), minstr = _this$boundaries4[0], maxstr = _this$boundaries4[1];
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                        return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [ this ].concat(args));
                    }
                }, {
                    key: "_matchFrom",
                    get: function get() {
                        return this.maxLength - String(this.from).length;
                    }
                }, {
                    key: "isComplete",
                    get: function get() {
                        return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
                    }
                } ]);
                return MaskedRange;
            }(MaskedPattern);
            IMask.MaskedRange = MaskedRange;
            var MaskedDate = function(_MaskedPattern) {
                _inherits(MaskedDate, _MaskedPattern);
                function MaskedDate(opts) {
                    _classCallCheck(this, MaskedDate);
                    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedDate).call(this, Object.assign({}, MaskedDate.DEFAULTS, {}, opts)));
                }
                _createClass(MaskedDate, [ {
                    key: "_update",
                    value: function _update(opts) {
                        if (opts.mask === Date) delete opts.mask;
                        if (opts.pattern) opts.mask = opts.pattern;
                        var blocks = opts.blocks;
                        opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
                        if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
                        if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();
                        if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
                            opts.blocks.m.from = opts.min.getMonth() + 1;
                            opts.blocks.m.to = opts.max.getMonth() + 1;
                            if (opts.blocks.m.from === opts.blocks.m.to) {
                                opts.blocks.d.from = opts.min.getDate();
                                opts.blocks.d.to = opts.max.getDate();
                            }
                        }
                        Object.assign(opts.blocks, blocks);
                        Object.keys(opts.blocks).forEach((function(bk) {
                            var b = opts.blocks[bk];
                            if (!("autofix" in b)) b.autofix = opts.autofix;
                        }));
                        _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
                    }
                }, {
                    key: "doValidate",
                    value: function doValidate() {
                        var _get2;
                        var date = this.date;
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                        return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [ this ].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && null != date && (null == this.min || this.min <= date) && (null == this.max || date <= this.max));
                    }
                }, {
                    key: "isDateExist",
                    value: function isDateExist(str) {
                        return this.format(this.parse(str, this), this).indexOf(str) >= 0;
                    }
                }, {
                    key: "date",
                    get: function get() {
                        return this.typedValue;
                    },
                    set: function set(date) {
                        this.typedValue = date;
                    }
                }, {
                    key: "typedValue",
                    get: function get() {
                        return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
                    },
                    set: function set(value) {
                        _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
                    }
                } ]);
                return MaskedDate;
            }(MaskedPattern);
            MaskedDate.DEFAULTS = {
                pattern: "d{.}`m{.}`Y",
                format: function format(date) {
                    var day = String(date.getDate()).padStart(2, "0");
                    var month = String(date.getMonth() + 1).padStart(2, "0");
                    var year = date.getFullYear();
                    return [ day, month, year ].join(".");
                },
                parse: function parse(str) {
                    var _str$split = str.split("."), _str$split2 = _slicedToArray(_str$split, 3), day = _str$split2[0], month = _str$split2[1], year = _str$split2[2];
                    return new Date(year, month - 1, day);
                }
            };
            MaskedDate.GET_DEFAULT_BLOCKS = function() {
                return {
                    d: {
                        mask: MaskedRange,
                        from: 1,
                        to: 31,
                        maxLength: 2
                    },
                    m: {
                        mask: MaskedRange,
                        from: 1,
                        to: 12,
                        maxLength: 2
                    },
                    Y: {
                        mask: MaskedRange,
                        from: 1900,
                        to: 9999
                    }
                };
            };
            IMask.MaskedDate = MaskedDate;
            var MaskElement = function() {
                function MaskElement() {
                    _classCallCheck(this, MaskElement);
                }
                _createClass(MaskElement, [ {
                    key: "select",
                    value: function select(start, end) {
                        if (null == start || null == end || start === this.selectionStart && end === this.selectionEnd) return;
                        try {
                            this._unsafeSelect(start, end);
                        } catch (e) {}
                    }
                }, {
                    key: "_unsafeSelect",
                    value: function _unsafeSelect(start, end) {}
                }, {
                    key: "bindEvents",
                    value: function bindEvents(handlers) {}
                }, {
                    key: "unbindEvents",
                    value: function unbindEvents() {}
                }, {
                    key: "selectionStart",
                    get: function get() {
                        var start;
                        try {
                            start = this._unsafeSelectionStart;
                        } catch (e) {}
                        return null != start ? start : this.value.length;
                    }
                }, {
                    key: "selectionEnd",
                    get: function get() {
                        var end;
                        try {
                            end = this._unsafeSelectionEnd;
                        } catch (e) {}
                        return null != end ? end : this.value.length;
                    }
                }, {
                    key: "isActive",
                    get: function get() {
                        return false;
                    }
                } ]);
                return MaskElement;
            }();
            IMask.MaskElement = MaskElement;
            var HTMLMaskElement = function(_MaskElement) {
                _inherits(HTMLMaskElement, _MaskElement);
                function HTMLMaskElement(input) {
                    var _this;
                    _classCallCheck(this, HTMLMaskElement);
                    _this = _possibleConstructorReturn(this, _getPrototypeOf(HTMLMaskElement).call(this));
                    _this.input = input;
                    _this._handlers = {};
                    return _this;
                }
                _createClass(HTMLMaskElement, [ {
                    key: "_unsafeSelect",
                    value: function _unsafeSelect(start, end) {
                        this.input.setSelectionRange(start, end);
                    }
                }, {
                    key: "bindEvents",
                    value: function bindEvents(handlers) {
                        var _this2 = this;
                        Object.keys(handlers).forEach((function(event) {
                            return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
                        }));
                    }
                }, {
                    key: "unbindEvents",
                    value: function unbindEvents() {
                        var _this3 = this;
                        Object.keys(this._handlers).forEach((function(event) {
                            return _this3._toggleEventHandler(event);
                        }));
                    }
                }, {
                    key: "_toggleEventHandler",
                    value: function _toggleEventHandler(event, handler) {
                        if (this._handlers[event]) {
                            this.input.removeEventListener(event, this._handlers[event]);
                            delete this._handlers[event];
                        }
                        if (handler) {
                            this.input.addEventListener(event, handler);
                            this._handlers[event] = handler;
                        }
                    }
                }, {
                    key: "rootElement",
                    get: function get() {
                        return this.input.getRootNode ? this.input.getRootNode() : document;
                    }
                }, {
                    key: "isActive",
                    get: function get() {
                        return this.input === this.rootElement.activeElement;
                    }
                }, {
                    key: "_unsafeSelectionStart",
                    get: function get() {
                        return this.input.selectionStart;
                    }
                }, {
                    key: "_unsafeSelectionEnd",
                    get: function get() {
                        return this.input.selectionEnd;
                    }
                }, {
                    key: "value",
                    get: function get() {
                        return this.input.value;
                    },
                    set: function set(value) {
                        this.input.value = value;
                    }
                } ]);
                return HTMLMaskElement;
            }(MaskElement);
            HTMLMaskElement.EVENTS_MAP = {
                selectionChange: "keydown",
                input: "input",
                drop: "drop",
                click: "click",
                focus: "focus",
                commit: "blur"
            };
            IMask.HTMLMaskElement = HTMLMaskElement;
            var HTMLContenteditableMaskElement = function(_HTMLMaskElement) {
                _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);
                function HTMLContenteditableMaskElement() {
                    _classCallCheck(this, HTMLContenteditableMaskElement);
                    return _possibleConstructorReturn(this, _getPrototypeOf(HTMLContenteditableMaskElement).apply(this, arguments));
                }
                _createClass(HTMLContenteditableMaskElement, [ {
                    key: "_unsafeSelect",
                    value: function _unsafeSelect(start, end) {
                        if (!this.rootElement.createRange) return;
                        var range = this.rootElement.createRange();
                        range.setStart(this.input.firstChild || this.input, start);
                        range.setEnd(this.input.lastChild || this.input, end);
                        var root = this.rootElement;
                        var selection = root.getSelection && root.getSelection();
                        if (selection) {
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }
                    }
                }, {
                    key: "_unsafeSelectionStart",
                    get: function get() {
                        var root = this.rootElement;
                        var selection = root.getSelection && root.getSelection();
                        return selection && selection.anchorOffset;
                    }
                }, {
                    key: "_unsafeSelectionEnd",
                    get: function get() {
                        var root = this.rootElement;
                        var selection = root.getSelection && root.getSelection();
                        return selection && this._unsafeSelectionStart + String(selection).length;
                    }
                }, {
                    key: "value",
                    get: function get() {
                        return this.input.textContent;
                    },
                    set: function set(value) {
                        this.input.textContent = value;
                    }
                } ]);
                return HTMLContenteditableMaskElement;
            }(HTMLMaskElement);
            IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
            var InputMask = function() {
                function InputMask(el, opts) {
                    _classCallCheck(this, InputMask);
                    this.el = el instanceof MaskElement ? el : el.isContentEditable && "INPUT" !== el.tagName && "TEXTAREA" !== el.tagName ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
                    this.masked = createMask(opts);
                    this._listeners = {};
                    this._value = "";
                    this._unmaskedValue = "";
                    this._saveSelection = this._saveSelection.bind(this);
                    this._onInput = this._onInput.bind(this);
                    this._onChange = this._onChange.bind(this);
                    this._onDrop = this._onDrop.bind(this);
                    this._onFocus = this._onFocus.bind(this);
                    this._onClick = this._onClick.bind(this);
                    this.alignCursor = this.alignCursor.bind(this);
                    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
                    this._bindEvents();
                    this.updateValue();
                    this._onChange();
                }
                _createClass(InputMask, [ {
                    key: "maskEquals",
                    value: function maskEquals(mask) {
                        return null == mask || mask === this.masked.mask || mask === Date && this.masked instanceof MaskedDate;
                    }
                }, {
                    key: "_bindEvents",
                    value: function _bindEvents() {
                        this.el.bindEvents({
                            selectionChange: this._saveSelection,
                            input: this._onInput,
                            drop: this._onDrop,
                            click: this._onClick,
                            focus: this._onFocus,
                            commit: this._onChange
                        });
                    }
                }, {
                    key: "_unbindEvents",
                    value: function _unbindEvents() {
                        if (this.el) this.el.unbindEvents();
                    }
                }, {
                    key: "_fireEvent",
                    value: function _fireEvent(ev) {
                        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
                        var listeners = this._listeners[ev];
                        if (!listeners) return;
                        listeners.forEach((function(l) {
                            return l.apply(void 0, args);
                        }));
                    }
                }, {
                    key: "_saveSelection",
                    value: function _saveSelection() {
                        if (this.value !== this.el.value) console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.");
                        this._selection = {
                            start: this.selectionStart,
                            end: this.cursorPos
                        };
                    }
                }, {
                    key: "updateValue",
                    value: function updateValue() {
                        this.masked.value = this.el.value;
                        this._value = this.masked.value;
                    }
                }, {
                    key: "updateControl",
                    value: function updateControl() {
                        var newUnmaskedValue = this.masked.unmaskedValue;
                        var newValue = this.masked.value;
                        var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
                        this._unmaskedValue = newUnmaskedValue;
                        this._value = newValue;
                        if (this.el.value !== newValue) this.el.value = newValue;
                        if (isChanged) this._fireChangeEvents();
                    }
                }, {
                    key: "updateOptions",
                    value: function updateOptions(opts) {
                        var mask = opts.mask, restOpts = _objectWithoutProperties(opts, [ "mask" ]);
                        var updateMask = !this.maskEquals(mask);
                        var updateOpts = !objectIncludes(this.masked, restOpts);
                        if (updateMask) this.mask = mask;
                        if (updateOpts) this.masked.updateOptions(restOpts);
                        if (updateMask || updateOpts) this.updateControl();
                    }
                }, {
                    key: "updateCursor",
                    value: function updateCursor(cursorPos) {
                        if (null == cursorPos) return;
                        this.cursorPos = cursorPos;
                        this._delayUpdateCursor(cursorPos);
                    }
                }, {
                    key: "_delayUpdateCursor",
                    value: function _delayUpdateCursor(cursorPos) {
                        var _this = this;
                        this._abortUpdateCursor();
                        this._changingCursorPos = cursorPos;
                        this._cursorChanging = setTimeout((function() {
                            if (!_this.el) return;
                            _this.cursorPos = _this._changingCursorPos;
                            _this._abortUpdateCursor();
                        }), 10);
                    }
                }, {
                    key: "_fireChangeEvents",
                    value: function _fireChangeEvents() {
                        this._fireEvent("accept", this._inputEvent);
                        if (this.masked.isComplete) this._fireEvent("complete", this._inputEvent);
                    }
                }, {
                    key: "_abortUpdateCursor",
                    value: function _abortUpdateCursor() {
                        if (this._cursorChanging) {
                            clearTimeout(this._cursorChanging);
                            delete this._cursorChanging;
                        }
                    }
                }, {
                    key: "alignCursor",
                    value: function alignCursor() {
                        this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
                    }
                }, {
                    key: "alignCursorFriendly",
                    value: function alignCursorFriendly() {
                        if (this.selectionStart !== this.cursorPos) return;
                        this.alignCursor();
                    }
                }, {
                    key: "on",
                    value: function on(ev, handler) {
                        if (!this._listeners[ev]) this._listeners[ev] = [];
                        this._listeners[ev].push(handler);
                        return this;
                    }
                }, {
                    key: "off",
                    value: function off(ev, handler) {
                        if (!this._listeners[ev]) return this;
                        if (!handler) {
                            delete this._listeners[ev];
                            return this;
                        }
                        var hIndex = this._listeners[ev].indexOf(handler);
                        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
                        return this;
                    }
                }, {
                    key: "_onInput",
                    value: function _onInput(e) {
                        this._inputEvent = e;
                        this._abortUpdateCursor();
                        if (!this._selection) return this.updateValue();
                        var details = new ActionDetails(this.el.value, this.cursorPos, this.value, this._selection);
                        var oldRawValue = this.masked.rawInputValue;
                        var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset;
                        var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
                        var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
                        this.updateControl();
                        this.updateCursor(cursorPos);
                        delete this._inputEvent;
                    }
                }, {
                    key: "_onChange",
                    value: function _onChange() {
                        if (this.value !== this.el.value) this.updateValue();
                        this.masked.doCommit();
                        this.updateControl();
                        this._saveSelection();
                    }
                }, {
                    key: "_onDrop",
                    value: function _onDrop(ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                }, {
                    key: "_onFocus",
                    value: function _onFocus(ev) {
                        this.alignCursorFriendly();
                    }
                }, {
                    key: "_onClick",
                    value: function _onClick(ev) {
                        this.alignCursorFriendly();
                    }
                }, {
                    key: "destroy",
                    value: function destroy() {
                        this._unbindEvents();
                        this._listeners.length = 0;
                        delete this.el;
                    }
                }, {
                    key: "mask",
                    get: function get() {
                        return this.masked.mask;
                    },
                    set: function set(mask) {
                        if (this.maskEquals(mask)) return;
                        if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
                            this.masked.updateOptions({
                                mask
                            });
                            return;
                        }
                        var masked = createMask({
                            mask
                        });
                        masked.unmaskedValue = this.masked.unmaskedValue;
                        this.masked = masked;
                    }
                }, {
                    key: "value",
                    get: function get() {
                        return this._value;
                    },
                    set: function set(str) {
                        this.masked.value = str;
                        this.updateControl();
                        this.alignCursor();
                    }
                }, {
                    key: "unmaskedValue",
                    get: function get() {
                        return this._unmaskedValue;
                    },
                    set: function set(str) {
                        this.masked.unmaskedValue = str;
                        this.updateControl();
                        this.alignCursor();
                    }
                }, {
                    key: "typedValue",
                    get: function get() {
                        return this.masked.typedValue;
                    },
                    set: function set(val) {
                        this.masked.typedValue = val;
                        this.updateControl();
                        this.alignCursor();
                    }
                }, {
                    key: "selectionStart",
                    get: function get() {
                        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
                    }
                }, {
                    key: "cursorPos",
                    get: function get() {
                        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
                    },
                    set: function set(pos) {
                        if (!this.el || !this.el.isActive) return;
                        this.el.select(pos, pos);
                        this._saveSelection();
                    }
                } ]);
                return InputMask;
            }();
            IMask.InputMask = InputMask;
            var MaskedEnum = function(_MaskedPattern) {
                _inherits(MaskedEnum, _MaskedPattern);
                function MaskedEnum() {
                    _classCallCheck(this, MaskedEnum);
                    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedEnum).apply(this, arguments));
                }
                _createClass(MaskedEnum, [ {
                    key: "_update",
                    value: function _update(opts) {
                        if (opts.enum) opts.mask = "*".repeat(opts.enum[0].length);
                        _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
                    }
                }, {
                    key: "doValidate",
                    value: function doValidate() {
                        var _get2, _this = this;
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                        return this.enum.some((function(e) {
                            return e.indexOf(_this.unmaskedValue) >= 0;
                        })) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [ this ].concat(args));
                    }
                } ]);
                return MaskedEnum;
            }(MaskedPattern);
            IMask.MaskedEnum = MaskedEnum;
            var MaskedNumber = function(_Masked) {
                _inherits(MaskedNumber, _Masked);
                function MaskedNumber(opts) {
                    _classCallCheck(this, MaskedNumber);
                    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedNumber).call(this, Object.assign({}, MaskedNumber.DEFAULTS, {}, opts)));
                }
                _createClass(MaskedNumber, [ {
                    key: "_update",
                    value: function _update(opts) {
                        _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);
                        this._updateRegExps();
                    }
                }, {
                    key: "_updateRegExps",
                    value: function _updateRegExps() {
                        var start = "^" + (this.allowNegative ? "[+|\\-]?" : "");
                        var midInput = "(0|([1-9]+\\d*))?";
                        var mid = "\\d*";
                        var end = (this.scale ? "(" + escapeRegExp(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
                        this._numberRegExpInput = new RegExp(start + midInput + end);
                        this._numberRegExp = new RegExp(start + mid + end);
                        this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(escapeRegExp).join("") + "]", "g");
                        this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), "g");
                    }
                }, {
                    key: "_removeThousandsSeparators",
                    value: function _removeThousandsSeparators(value) {
                        return value.replace(this._thousandsSeparatorRegExp, "");
                    }
                }, {
                    key: "_insertThousandsSeparators",
                    value: function _insertThousandsSeparators(value) {
                        var parts = value.split(this.radix);
                        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
                        return parts.join(this.radix);
                    }
                }, {
                    key: "doPrepare",
                    value: function doPrepare(str) {
                        var _get2;
                        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
                        return (_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [ this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix)) ].concat(args));
                    }
                }, {
                    key: "_separatorsCount",
                    value: function _separatorsCount(to) {
                        var extendOnSeparators = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
                        var count = 0;
                        for (var pos = 0; pos < to; ++pos) if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
                            ++count;
                            if (extendOnSeparators) to += this.thousandsSeparator.length;
                        }
                        return count;
                    }
                }, {
                    key: "_separatorsCountFromSlice",
                    value: function _separatorsCountFromSlice() {
                        var slice = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
                        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
                    }
                }, {
                    key: "extractInput",
                    value: function extractInput() {
                        var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        var flags = arguments.length > 2 ? arguments[2] : void 0;
                        var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);
                        var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);
                        fromPos = _this$_adjustRangeWit2[0];
                        toPos = _this$_adjustRangeWit2[1];
                        return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
                    }
                }, {
                    key: "_appendCharRaw",
                    value: function _appendCharRaw(ch) {
                        var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
                        var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
                        var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
                        this._value = this._removeThousandsSeparators(this.value);
                        var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
                        this._value = this._insertThousandsSeparators(this._value);
                        var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
                        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
                        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
                        appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
                        return appendDetails;
                    }
                }, {
                    key: "_findSeparatorAround",
                    value: function _findSeparatorAround(pos) {
                        if (this.thousandsSeparator) {
                            var searchFrom = pos - this.thousandsSeparator.length + 1;
                            var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
                            if (separatorPos <= pos) return separatorPos;
                        }
                        return -1;
                    }
                }, {
                    key: "_adjustRangeWithSeparators",
                    value: function _adjustRangeWithSeparators(from, to) {
                        var separatorAroundFromPos = this._findSeparatorAround(from);
                        if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
                        var separatorAroundToPos = this._findSeparatorAround(to);
                        if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
                        return [ from, to ];
                    }
                }, {
                    key: "remove",
                    value: function remove() {
                        var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                        var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);
                        var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);
                        fromPos = _this$_adjustRangeWit4[0];
                        toPos = _this$_adjustRangeWit4[1];
                        var valueBeforePos = this.value.slice(0, fromPos);
                        var valueAfterPos = this.value.slice(toPos);
                        var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
                        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
                        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
                        return new ChangeDetails({
                            tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
                        });
                    }
                }, {
                    key: "nearestInputPos",
                    value: function nearestInputPos(cursorPos, direction) {
                        if (!this.thousandsSeparator) return cursorPos;
                        switch (direction) {
                          case DIRECTION.NONE:
                          case DIRECTION.LEFT:
                          case DIRECTION.FORCE_LEFT:
                            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
                            if (separatorAtLeftPos >= 0) {
                                var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
                                if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) return separatorAtLeftPos;
                            }
                            break;

                          case DIRECTION.RIGHT:
                          case DIRECTION.FORCE_RIGHT:
                            var separatorAtRightPos = this._findSeparatorAround(cursorPos);
                            if (separatorAtRightPos >= 0) return separatorAtRightPos + this.thousandsSeparator.length;
                        }
                        return cursorPos;
                    }
                }, {
                    key: "doValidate",
                    value: function doValidate(flags) {
                        var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp;
                        var valid = regexp.test(this._removeThousandsSeparators(this.value));
                        if (valid) {
                            var number = this.number;
                            valid = valid && !isNaN(number) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max);
                        }
                        return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
                    }
                }, {
                    key: "doCommit",
                    value: function doCommit() {
                        if (this.value) {
                            var number = this.number;
                            var validnum = number;
                            if (null != this.min) validnum = Math.max(validnum, this.min);
                            if (null != this.max) validnum = Math.min(validnum, this.max);
                            if (validnum !== number) this.unmaskedValue = String(validnum);
                            var formatted = this.value;
                            if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
                            if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
                            this._value = formatted;
                        }
                        _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
                    }
                }, {
                    key: "_normalizeZeros",
                    value: function _normalizeZeros(value) {
                        var parts = this._removeThousandsSeparators(value).split(this.radix);
                        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (function(match, sign, zeros, num) {
                            return sign + num;
                        }));
                        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + "0";
                        if (parts.length > 1) {
                            parts[1] = parts[1].replace(/0*$/, "");
                            if (!parts[1].length) parts.length = 1;
                        }
                        return this._insertThousandsSeparators(parts.join(this.radix));
                    }
                }, {
                    key: "_padFractionalZeros",
                    value: function _padFractionalZeros(value) {
                        if (!value) return value;
                        var parts = value.split(this.radix);
                        if (parts.length < 2) parts.push("");
                        parts[1] = parts[1].padEnd(this.scale, "0");
                        return parts.join(this.radix);
                    }
                }, {
                    key: "unmaskedValue",
                    get: function get() {
                        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".");
                    },
                    set: function set(unmaskedValue) {
                        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace(".", this.radix), this, true);
                    }
                }, {
                    key: "typedValue",
                    get: function get() {
                        return Number(this.unmaskedValue);
                    },
                    set: function set(n) {
                        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
                    }
                }, {
                    key: "number",
                    get: function get() {
                        return this.typedValue;
                    },
                    set: function set(number) {
                        this.typedValue = number;
                    }
                }, {
                    key: "allowNegative",
                    get: function get() {
                        return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0;
                    }
                } ]);
                return MaskedNumber;
            }(Masked);
            MaskedNumber.DEFAULTS = {
                radix: ",",
                thousandsSeparator: "",
                mapToRadix: [ "." ],
                scale: 2,
                signed: false,
                normalizeZeros: true,
                padFractionalZeros: false
            };
            IMask.MaskedNumber = MaskedNumber;
            var MaskedFunction = function(_Masked) {
                _inherits(MaskedFunction, _Masked);
                function MaskedFunction() {
                    _classCallCheck(this, MaskedFunction);
                    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedFunction).apply(this, arguments));
                }
                _createClass(MaskedFunction, [ {
                    key: "_update",
                    value: function _update(opts) {
                        if (opts.mask) opts.validate = opts.mask;
                        _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
                    }
                } ]);
                return MaskedFunction;
            }(Masked);
            IMask.MaskedFunction = MaskedFunction;
            var MaskedDynamic = function(_Masked) {
                _inherits(MaskedDynamic, _Masked);
                function MaskedDynamic(opts) {
                    var _this;
                    _classCallCheck(this, MaskedDynamic);
                    _this = _possibleConstructorReturn(this, _getPrototypeOf(MaskedDynamic).call(this, Object.assign({}, MaskedDynamic.DEFAULTS, {}, opts)));
                    _this.currentMask = null;
                    return _this;
                }
                _createClass(MaskedDynamic, [ {
                    key: "_update",
                    value: function _update(opts) {
                        _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);
                        if ("mask" in opts) this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map((function(m) {
                            return createMask(m);
                        })) : [];
                    }
                }, {
                    key: "_appendCharRaw",
                    value: function _appendCharRaw() {
                        var details = this._applyDispatch.apply(this, arguments);
                        if (this.currentMask) {
                            var _this$currentMask;
                            details.aggregate((_this$currentMask = this.currentMask)._appendChar.apply(_this$currentMask, arguments));
                        }
                        return details;
                    }
                }, {
                    key: "_applyDispatch",
                    value: function _applyDispatch() {
                        var appended = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        var prevValueBeforeTail = flags.tail && null != flags._beforeTailState ? flags._beforeTailState._value : this.value;
                        var inputValue = this.rawInputValue;
                        var insertValue = flags.tail && null != flags._beforeTailState ? flags._beforeTailState._rawInputValue : inputValue;
                        var tailValue = inputValue.slice(insertValue.length);
                        var prevMask = this.currentMask;
                        var details = new ChangeDetails;
                        var prevMaskState = prevMask && prevMask.state;
                        this.currentMask = this.doDispatch(appended, Object.assign({}, flags));
                        if (this.currentMask) if (this.currentMask !== prevMask) {
                            this.currentMask.reset();
                            var d = this.currentMask.append(insertValue, {
                                raw: true
                            });
                            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
                            if (tailValue) details.tailShift += this.currentMask.append(tailValue, {
                                raw: true,
                                tail: true
                            }).tailShift;
                        } else this.currentMask.state = prevMaskState;
                        return details;
                    }
                }, {
                    key: "_appendPlaceholder",
                    value: function _appendPlaceholder() {
                        var details = this._applyDispatch.apply(this, arguments);
                        if (this.currentMask) details.aggregate(this.currentMask._appendPlaceholder());
                        return details;
                    }
                }, {
                    key: "doDispatch",
                    value: function doDispatch(appended) {
                        var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.dispatch(appended, this, flags);
                    }
                }, {
                    key: "doValidate",
                    value: function doValidate() {
                        var _get2, _this$currentMask2;
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                        return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [ this ].concat(args)) && (!this.currentMask || (_this$currentMask2 = this.currentMask).doValidate.apply(_this$currentMask2, args));
                    }
                }, {
                    key: "reset",
                    value: function reset() {
                        if (this.currentMask) this.currentMask.reset();
                        this.compiledMasks.forEach((function(m) {
                            return m.reset();
                        }));
                    }
                }, {
                    key: "remove",
                    value: function remove() {
                        var details = new ChangeDetails;
                        if (this.currentMask) {
                            var _this$currentMask3;
                            details.aggregate((_this$currentMask3 = this.currentMask).remove.apply(_this$currentMask3, arguments)).aggregate(this._applyDispatch());
                        }
                        return details;
                    }
                }, {
                    key: "extractInput",
                    value: function extractInput() {
                        var _this$currentMask4;
                        return this.currentMask ? (_this$currentMask4 = this.currentMask).extractInput.apply(_this$currentMask4, arguments) : "";
                    }
                }, {
                    key: "extractTail",
                    value: function extractTail() {
                        var _this$currentMask5, _get3;
                        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                        return this.currentMask ? (_this$currentMask5 = this.currentMask).extractTail.apply(_this$currentMask5, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [ this ].concat(args));
                    }
                }, {
                    key: "doCommit",
                    value: function doCommit() {
                        if (this.currentMask) this.currentMask.doCommit();
                        _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
                    }
                }, {
                    key: "nearestInputPos",
                    value: function nearestInputPos() {
                        var _this$currentMask6, _get4;
                        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
                        return this.currentMask ? (_this$currentMask6 = this.currentMask).nearestInputPos.apply(_this$currentMask6, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [ this ].concat(args));
                    }
                }, {
                    key: "value",
                    get: function get() {
                        return this.currentMask ? this.currentMask.value : "";
                    },
                    set: function set(value) {
                        _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
                    }
                }, {
                    key: "unmaskedValue",
                    get: function get() {
                        return this.currentMask ? this.currentMask.unmaskedValue : "";
                    },
                    set: function set(unmaskedValue) {
                        _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
                    }
                }, {
                    key: "typedValue",
                    get: function get() {
                        return this.currentMask ? this.currentMask.typedValue : "";
                    },
                    set: function set(value) {
                        var unmaskedValue = String(value);
                        if (this.currentMask) {
                            this.currentMask.typedValue = value;
                            unmaskedValue = this.currentMask.unmaskedValue;
                        }
                        this.unmaskedValue = unmaskedValue;
                    }
                }, {
                    key: "isComplete",
                    get: function get() {
                        return !!this.currentMask && this.currentMask.isComplete;
                    }
                }, {
                    key: "state",
                    get: function get() {
                        return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
                            _rawInputValue: this.rawInputValue,
                            compiledMasks: this.compiledMasks.map((function(m) {
                                return m.state;
                            })),
                            currentMaskRef: this.currentMask,
                            currentMask: this.currentMask && this.currentMask.state
                        });
                    },
                    set: function set(state) {
                        var compiledMasks = state.compiledMasks, currentMaskRef = state.currentMaskRef, currentMask = state.currentMask, maskedState = _objectWithoutProperties(state, [ "compiledMasks", "currentMaskRef", "currentMask" ]);
                        this.compiledMasks.forEach((function(m, mi) {
                            return m.state = compiledMasks[mi];
                        }));
                        if (null != currentMaskRef) {
                            this.currentMask = currentMaskRef;
                            this.currentMask.state = currentMask;
                        }
                        _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
                    }
                }, {
                    key: "overwrite",
                    get: function get() {
                        return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
                    },
                    set: function set(overwrite) {
                        console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
                    }
                } ]);
                return MaskedDynamic;
            }(Masked);
            MaskedDynamic.DEFAULTS = {
                dispatch: function dispatch(appended, masked, flags) {
                    if (!masked.compiledMasks.length) return;
                    var inputValue = masked.rawInputValue;
                    var inputs = masked.compiledMasks.map((function(m, index) {
                        m.reset();
                        m.append(inputValue, {
                            raw: true
                        });
                        m.append(appended, flags);
                        var weight = m.rawInputValue.length;
                        return {
                            weight,
                            index
                        };
                    }));
                    inputs.sort((function(i1, i2) {
                        return i2.weight - i1.weight;
                    }));
                    return masked.compiledMasks[inputs[0].index];
                }
            };
            IMask.MaskedDynamic = MaskedDynamic;
            var PIPE_TYPE = {
                MASKED: "value",
                UNMASKED: "unmaskedValue",
                TYPED: "typedValue"
            };
            function createPipe(mask) {
                var from = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PIPE_TYPE.MASKED;
                var to = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PIPE_TYPE.MASKED;
                var masked = createMask(mask);
                return function(value) {
                    return masked.runIsolated((function(m) {
                        m[from] = value;
                        return m[to];
                    }));
                };
            }
            function pipe(value) {
                for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) pipeArgs[_key - 1] = arguments[_key];
                return createPipe.apply(void 0, pipeArgs)(value);
            }
            IMask.PIPE_TYPE = PIPE_TYPE;
            IMask.createPipe = createPipe;
            IMask.pipe = pipe;
            try {
                globalThis.IMask = IMask;
            } catch (e) {}
            exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
            exports.HTMLMaskElement = HTMLMaskElement;
            exports.InputMask = InputMask;
            exports.MaskElement = MaskElement;
            exports.Masked = Masked;
            exports.MaskedDate = MaskedDate;
            exports.MaskedDynamic = MaskedDynamic;
            exports.MaskedEnum = MaskedEnum;
            exports.MaskedFunction = MaskedFunction;
            exports.MaskedNumber = MaskedNumber;
            exports.MaskedPattern = MaskedPattern;
            exports.MaskedRange = MaskedRange;
            exports.MaskedRegExp = MaskedRegExp;
            exports.PIPE_TYPE = PIPE_TYPE;
            exports.createMask = createMask;
            exports.createPipe = createPipe;
            exports.default = IMask;
            exports.pipe = pipe;
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        }));
        function map(n) {
            ymaps.ready(init);
            function init() {
                var myMap = new ymaps.Map("map", {
                    controls: [],
                    center: [55.779665, 37.698884],
                    zoom: 18
                });
                let myPlacemark = new ymaps.Placemark([ 55.779665, 37.698884 ], {}, {
                    balloonContentHeader: "Mistoun",
                    balloonContentBody: "Мы Здесь",
                    balloonContentFooter: "+ 7(495) 507-54 - 90",
                    hasBalloon: true,
                    hideIconOnBalloonOpen: true
                });
                myMap.geoObjects.add(myPlacemark);
                myMap.behaviors.disable("scrollZoom");
                myMap.behaviors.disable("drag");
                if (window.matchMedia("(max-width: 576px)").matches) myMap.setCenter([ 55.779665, 37.698884 ]);
            }
        }
        window.addEventListener("load", (function(e) {
            map();
        }));
        var air_datepicker_air_datepicker = __webpack_require__(545);
        var air_datepicker_air_datepicker_default = __webpack_require__.n(air_datepicker_air_datepicker);
        const index_es = air_datepicker_air_datepicker_default();
        let burger = document.querySelector(".header__burger");
        let menu = document.querySelector(".header__menu");
        let closeMenuBtn = document.querySelector(".js-close-menu");
        burger.addEventListener("click", (function() {
            menu.classList.add("is-open");
        }));
        closeMenuBtn.addEventListener("click", (function() {
            menu.classList.remove("is-open");
        }));
        const smoothLinks = [ ...document.querySelectorAll(".js-scroll-to") ];
        for (let i = 0; i < smoothLinks.length; i++) {
            let smoothLink = smoothLinks[i];
            smoothLink.addEventListener("click", (function(e) {
                e.preventDefault();
                const id = smoothLink.getAttribute("href");
                console.log(id);
                document.querySelector(id).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }));
        }
        new index_es("#date", {
            isMobile: true,
            onHide: function() {
                console.log(this);
                let datuInput = document.getElementById("date");
                if ("" !== datuInput.value) {
                    datuInput.classList.add("is-valid");
                    datuInput.classList.remove("js-validate-error-field");
                }
            },
            onSelect: function({datepicker}) {
                datepicker.hide();
            }
        });
        var phoneMask = IMask(document.querySelector(".js-phone-mask"), {
            mask: "+7 (000) 000-00-00"
        });
        document.querySelector(".js-phone-mask").addEventListener("keyup", (function() {
            if ("78" == phoneMask.unmaskedValue || "89" == phoneMask.unmaskedValue) phoneMask.value = "+7 (9";
        }));
        new window.JustValidate(".js-form-booking", {
            rules: {
                name: {
                    required: true
                },
                date: {
                    required: true
                },
                time: {
                    required: true
                },
                count: {
                    required: true
                },
                myField: {
                    required: true,
                    function: () => phoneMask.masked.isComplete
                }
            },
            messages: {
                name: "Пожалуйста, введите ваше имя",
                date: "Пожалуйста, введите дату",
                time: "Пожалуйста, введите время",
                count: "Пожалуйста, введите количество человек",
                myField: "Пожалуйста, введите корректный номер телефона"
            },
            focusWrongField: true,
            submitHandler: function(form, values, ajax) {
                let successMesage = document.querySelector(".booking__subtitle_success");
                successMesage.style.display = "block";
                form.remove();
                ajax({
                    url: "../ajax.php",
                    method: "POST",
                    data: values,
                    async: true,
                    callback: function(response) {
                        var data = JSON.parse(response);
                        if ("success" == data.status) alert("Форма отправлена");
                    }
                });
            }
        });
        window["FLS"] = true;
        isWebp();
        tabs();
    })();
})();