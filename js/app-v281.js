(() => {
  "use strict";
  var e = {
      67535: (e, t, n) => {
        n(18964), n(40702);
        var a = n(61957),
          o = n(71947),
          i = n(60499),
          r = (n(46727), n(59835)),
          s = n(18910),
          l = n(21049),
          c = n(78110),
          h = n(19302),
          u = n(3967),
          d = n(16707);
        const m = {
            setup(e) {
              const t = (0, s.yj)(),
                n = (0, l.oR)(),
                a = (0, h.Z)(),
                { t: o, locale: i } = (0, c.QT)(),
                m = (0, r.Fl)(() =>
                  t.path.includes("faq")
                    ? "FAQ"
                    : t.path.includes("reviews")
                    ? "Reviews & tutorials"
                    : t.path.includes("classroom")
                    ? "Classroom"
                    : t.path.includes("privacy")
                    ? "Privacy policy"
                    : t.path.includes("changelog")
                    ? "Changelog"
                    : t.path.includes("export")
                    ? "Export"
                    : t.path.includes("admin")
                    ? "Admin"
                    : t.path.includes("gallery")
                    ? o("toolbar.Gallery")
                    : n.getters.wheelConfig.title
                    ? n.getters.wheelConfig.title
                    : " Pop It Wheel | " + o("Random Question Generator")
                );
              (0, u.ZQf)(m);
              const g = (0, r.Fl)(() => n.getters.wheelConfig),
                f = (0, r.Fl)(() => {
                  const e = [
                    "faq",
                    "reviews",
                    "classroom",
                    "privacy",
                    "changelog",
                    "admin",
                    "gallery",
                  ];
                  return !e.find((e) => t.path.includes(e));
                });
              function p(e, t) {
                (t = f.value
                  ? (0, d.getPageBackgroundColor)(e, t)
                  : e
                  ? "#121212"
                  : "#FFFFFF"),
                  (document.documentElement.style.backgroundColor = t),
                  (document.body.style.backgroundColor = t);
              }
              function w() {
                let e = "en";
                f.value && (e = i.value),
                  document.documentElement.setAttribute("lang", e);
              }
              function y() {
                let e = "";
                f.value && (e = o("app.Free and easy to use")),
                  document
                    .querySelector('meta[name="description"]')
                    .setAttribute("content", e);
              }
              return (
                (0, r.YP)(
                  () => g.value.pageBackgroundColor,
                  () => {
                    p(a.dark.isActive, g.value.pageBackgroundColor);
                  }
                ),
                (0, r.YP)(
                  () => a.dark.isActive,
                  () => {
                    p(a.dark.isActive, g.value.pageBackgroundColor);
                  }
                ),
                (0, r.YP)(
                  () => t.path,
                  () => {
                    p(a.dark.isActive, g.value.pageBackgroundColor);
                  }
                ),
                (0, r.YP)(
                  () => t.path,
                  () => {
                    w(), y();
                  },
                  { immediate: !0 }
                ),
                (0, r.YP)(
                  () => i.value,
                  () => {
                    w(), y();
                  }
                ),
                (e, t) => {
                  const n = (0, r.up)("router-view");
                  return (0, r.wg)(), (0, r.j4)(n);
                }
              );
            },
          },
          g = m,
          f = g;
        var p = n(13437),
          w = n(23340);
        const y = [
            {
              path: "/faq.html",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(5089)]).then(
                  n.bind(n, 50144)
                ),
            },
            {
              path: "/faq/:section?",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(5089)]).then(
                  n.bind(n, 50144)
                ),
            },
            {
              path: "/user-reviews-and-tutorials",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(5980)]).then(
                  n.bind(n, 53740)
                ),
            },
            {
              path: "/how-to-use-in-the-classroom",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(335)]).then(
                  n.bind(n, 11001)
                ),
            },
            {
              path: "/privacy-policy.html",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(4756)]).then(
                  n.bind(n, 23944)
                ),
            },
            {
              path: "/privacy-policy",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(4756)]).then(
                  n.bind(n, 23944)
                ),
            },
            {
              path: "/changelog",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(6739)]).then(
                  n.bind(n, 87856)
                ),
            },
            {
              path: "/gallery",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(3734)]).then(
                  n.bind(n, 21862)
                ),
            },
            {
              path: "/my-wheels",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(2748)]).then(
                  n.bind(n, 44771)
                ),
            },
            {
              path: "/noads",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(2265)]).then(
                  n.bind(n, 50540)
                ),
            },
            {
              path: "/enthusiast",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(2265)]).then(
                  n.bind(n, 50540)
                ),
            },
            {
              path: "/api-doc",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(51)]).then(
                  n.bind(n, 78291)
                ),
            },
            {
              path: "/:lang([a-z][a-z])?",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(2265)]).then(
                  n.bind(n, 50540)
                ),
            },
            {
              path: "/:lang([a-z][a-z]-[A-Z][A-Z])?",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(2265)]).then(
                  n.bind(n, 50540)
                ),
            },
            {
              path: "/:lang([a-z][a-z][a-z])",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(2265)]).then(
                  n.bind(n, 50540)
                ),
            },
            {
              path: "/:lang([a-z][a-z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(9437)]).then(
                  n.bind(n, 4014)
                ),
            },
            {
              path: "/:lang([a-z][a-z]-[A-Z][A-Z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(9437)]).then(
                  n.bind(n, 4014)
                ),
            },
            {
              path: "/:lang([a-z][a-z][a-z])/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(9437)]).then(
                  n.bind(n, 4014)
                ),
            },
            {
              path: "/view/:lang([a-z][a-z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(9437)]).then(
                  n.bind(n, 4014)
                ),
            },
            {
              path: "/view/:lang([a-z][a-z]-[A-Z][A-Z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(9437)]).then(
                  n.bind(n, 4014)
                ),
            },
            {
              path: "/view/:lang([a-z][a-z][a-z])/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(9437)]).then(
                  n.bind(n, 4014)
                ),
            },
            {
              path: "/:lang([a-z][a-z])?/gallery",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(3734)]).then(
                  n.bind(n, 21862)
                ),
            },
            {
              path: "/:lang([a-z][a-z]-[A-Z][A-Z])?/gallery",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(3734)]).then(
                  n.bind(n, 21862)
                ),
            },
            {
              path: "/:lang([a-z][a-z][a-z])/gallery",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(3734)]).then(
                  n.bind(n, 21862)
                ),
            },
            {
              path: "/export",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(8426)]).then(
                  n.bind(n, 40808)
                ),
            },
            {
              path: "/translate",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(3561)]).then(
                  n.bind(n, 51271)
                ),
            },
            {
              path: "/translate.html",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(3561)]).then(
                  n.bind(n, 51271)
                ),
            },
            {
              path: "/translations",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(3561)]).then(
                  n.bind(n, 51271)
                ),
            },
            {
              path: "/admin",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(1510)]).then(
                  n.bind(n, 14385)
                ),
              meta: { adminOnly: !0 },
            },
            {
              path: "/admin.html",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(1510)]).then(
                  n.bind(n, 14385)
                ),
              meta: { adminOnly: !0 },
            },
            {
              path: "/admin/review",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(1510)]).then(
                  n.bind(n, 94865)
                ),
              meta: { adminOnly: !0 },
            },
            {
              path: "/admin/gallery",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(1510)]).then(
                  n.bind(n, 75231)
                ),
              meta: { adminOnly: !0 },
            },
            {
              path: "/admin/carousel",
              component: () =>
                Promise.all([n.e(4736), n.e(3064), n.e(1510)]).then(
                  n.bind(n, 4850)
                ),
              meta: { adminOnly: !0 },
            },
            {
              path: "/:catchAll(.*)*",
              component: () =>
                Promise.all([n.e(4736), n.e(7143)]).then(n.bind(n, 7143)),
            },
          ],
          b = y;
        var v = n(76001),
          N = n(78821);
        const C = (0, w.BC)(function () {
          const e = s.PO,
            t = (0, s.p7)({
              scrollBehavior: () => ({ left: 0, top: 0 }),
              routes: b,
              history: e("/"),
            });
          return (
            t.beforeEach(async (e, t, n) => {
              const a = e.matched[0].meta.adminOnly;
              if (a) {
                await v.W2();
                const e = await v.qo(),
                  t = await N.sm(e);
                t ? n() : (alert("Please log in as an admin user."), n(!1));
              } else n();
            }),
            t.afterEach((e, t) => {
              try {
                ga("set", "page", e.path), ga("send", "pageview");
              } catch (n) {
                console.error(n);
              }
            }),
            t.onError((e) => {
              (0, d.trackException)("RouterError", e);
              const t =
                "An update is available. Do you want to reload?\n\nIf reloading does not fix the issue, try using https://old.wheelofnames.com.";
              confirm(t) && window.location.reload();
            }),
            t
          );
        });
        async function S(e, t) {
          const a = e(f);
          a.use(o.Z, t);
          const r = "function" === typeof p.Z ? await (0, p.Z)({}) : p.Z,
            { storeKey: s } = await Promise.resolve().then(n.bind(n, 13437)),
            l = (0, i.Xl)("function" === typeof C ? await C({ store: r }) : C);
          return (r.$router = l), { app: a, store: r, storeKey: s, router: l };
        }
        var k = n(11530),
          P = n(26950),
          I = n(6827),
          T = n(52941);
        const E = {
            config: {
              dark: "auto",
              notify: { progress: !0 },
              brand: {
                primary: "#3369e8",
                positive: "#009925",
                negative: "#d50f25",
                warning: "#EEB211",
              },
            },
            plugins: {
              Dialog: k.Z,
              Loading: P.Z,
              Notify: I.Z,
              AppFullscreen: T.Z,
            },
          },
          W = "/";
        async function A({ app: e, router: t, store: n, storeKey: a }, o) {
          let i = !1;
          const r = (e) => {
              try {
                return t.resolve(e).href;
              } catch (n) {}
              return Object(e) === e ? null : e;
            },
            s = (e) => {
              if (((i = !0), "string" === typeof e && /^https?:\/\//.test(e)))
                return void (window.location.href = e);
              const t = r(e);
              null !== t && (window.location.href = t);
            },
            l = window.location.href.replace(window.location.origin, "");
          for (let h = 0; !1 === i && h < o.length; h++)
            try {
              await o[h]({
                app: e,
                router: t,
                store: n,
                ssrContext: null,
                redirect: s,
                urlPath: l,
                publicPath: W,
              });
            } catch (c) {
              return c && c.url
                ? void s(c.url)
                : void console.error("[Quasar] boot error:", c);
            }
          !0 !== i && (e.use(t), e.use(n, a), e.mount("#q-app"));
        }
        S(a.ri, E).then((e) => {
          const [t, a] =
            void 0 !== Promise.allSettled
              ? [
                  "allSettled",
                  (e) =>
                    e.map((e) => {
                      if ("rejected" !== e.status) return e.value.default;
                      console.error("[Quasar] boot error:", e.reason);
                    }),
                ]
              : ["all", (e) => e.map((e) => e.default)];
          return Promise[t]([Promise.resolve().then(n.bind(n, 60991))]).then(
            (t) => {
              const n = a(t).filter((e) => "function" === typeof e);
              A(e, n);
            }
          );
        });
      },
      60991: (e, t, n) => {
        n.r(t), n.d(t, { default: () => r });
        var a = n(23340),
          o = n(65573),
          i = n(40506);
        const r = (0, a.xr)(({ app: e }) => {
          const t = (0, o.o)({
            legacy: !1,
            locale: "en",
            fallbackLocale: "en",
            messages: i["default"],
          });
          e.use(t);
        });
      },
      40506: (e, t, n) => {
        n.r(t), n.d(t, { default: () => o });
        var a = n(26263);
        const o = { en: a };
      },
      13437: (e, t, n) => {
        n.d(t, { Z: () => p });
        var a = n(23340),
          o = n(21049),
          i = (n(40702), n(46727), n(71998)),
          r = n(16707),
          s = n(19395),
          l = n(78821);
        const c = {
          state: {
            wheelConfig: new i.Z(),
            sheetLinked: !1,
            wheelIsBusy: !1,
            winnerEntry: {},
            winners: [],
            path: "",
            copyable: !1,
            shareMode: "",
            previousWheelConfig: "",
          },
          getters: {
            wheelType: (e) => e.wheelConfig.type,
            entries: (e) => e.wheelConfig.entries,
            entryCount: (e) => e.wheelConfig.entries.length,
            winners: (e) => e.winners,
            winnerCount: (e) => e.winners.length,
            winnerIndex: (e) =>
              e.wheelConfig.entries.findIndex((t) => t.id == e.winnerEntry.id),
            wheelConfig: (e) => e.wheelConfig,
            enabledColors: (e) =>
              e.wheelConfig.colorSettings.filter((e) => e.enabled),
            sheetLinked: (e) => e.sheetLinked,
            wheelPath: (e) => e.path,
            wheelIsBusy: (e) => e.wheelIsBusy,
            wheelIsShared: (e) => r.isPublicShareMode(e.shareMode),
            wheelIsCopyable: (e) => e.copyable,
            shareMode: (e) => e.shareMode,
            wheelIsAdvanced: (e) => e.wheelConfig.isAdvanced,
            wheelTitle: (e) => e.wheelConfig.title,
            wheelDescription: (e) => e.wheelConfig.description,
            showTitle: (e) => e.wheelConfig.showTitle,
            hubSize: (e) => e.wheelConfig.hubSize,
            nextColorInTheme: (e) => {
              const t = e.wheelConfig.getCoalescedColors(),
                n = t[e.wheelConfig.entries.length % t.length];
              return n;
            },
            winnerBackgroundColor: (e, t) => {
              if ("color" == e.wheelConfig.type)
                try {
                  let n;
                  if (e.wheelConfig.isAdvanced) return e.winnerEntry.color;
                  if (
                    !e.winnerEntry.image &&
                    e.wheelConfig.maxNames >= e.wheelConfig.entries.length
                  ) {
                    const e = t.winnerIndex % t.enabledColors.length;
                    return t.enabledColors[e].color;
                  }
                  return n;
                } catch (n) {
                  console.error(n);
                }
            },
          },
          mutations: {
            setWheelConfig(e, t) {
              const n = new i.Z();
              n.loadValues(t),
                (n.entries = r.addIdsIfNotThere(n.entries)),
                (e.wheelConfig = n);
            },
            setWheelConfigNoPersist(e, t) {
              if (r.deepObjectsEqual(e.wheelConfig, t)) return;
              const n = new i.Z();
              n.loadValues(t),
                (n.entries = r.addIdsIfNotThere(n.entries)),
                (e.wheelConfig = n);
            },
            saveWheelConfigForUndo(e) {
              e.previousWheelConfig = JSON.stringify(e.wheelConfig);
            },
            undoWheelConfigChange(e) {
              const t = e.wheelConfig.clone();
              t.loadValues(JSON.parse(e.previousWheelConfig)),
                this.commit("setWheelConfig", t);
            },
            persistWheelConfig(e) {
              this.commit("setWheelConfig", e.wheelConfig);
            },
            setGrayEmptyWheel(e) {
              const t = e.wheelConfig.clone();
              (t.entries = r.addIdsIfNotThere([{ test: " " }])),
                (t.title = ""),
                t.setColorValues(["#bbb"]),
                this.commit("setWheelConfig", t);
            },
            setWheelTitle(e, t) {
              const n = e.wheelConfig.clone();
              (n.title = t), this.commit("setWheelConfig", n);
            },
            setWheelDescription(e, t) {
              const n = e.wheelConfig.clone();
              (n.description = t), this.commit("setWheelConfig", n);
            },
            setShowTitle(e, t) {
              const n = e.wheelConfig.clone();
              (n.showTitle = t), this.commit("setWheelConfig", n);
            },
            setEntries(e, t) {
              const n = e.wheelConfig.clone();
              (n.entries = r.addIdsIfNotThere(t)),
                this.commit("setWheelConfig", n);
            },
            shuffleEntries(e) {
              const t = e.wheelConfig.clone();
              (t.entries = r.shuffleArray(e.wheelConfig.entries)),
                this.commit("setWheelConfig", t);
            },
            sortEntries(e) {
              const t = e.wheelConfig.clone();
              (t.entries = r.sortWheelEntries(e.wheelConfig.entries)),
                this.commit("setWheelConfig", t);
            },
            appendEntry(e, t) {
              const n = e.wheelConfig.clone();
              n.entries.push(t),
                (n.entries = r.addIdsIfNotThere(n.entries)),
                this.commit("setWheelConfig", n);
            },
            setEntryText(e, { index: t, text: n }) {
              const a = e.wheelConfig.clone();
              (a.entries[t].text = n),
                (a.entries = r.addIdsIfNotThere(a.entries)),
                this.commit("setWheelConfig", a);
            },
            setEntryColor(e, { index: t, color: n }) {
              const a = e.wheelConfig.clone();
              (a.entries[t].color = n),
                (a.entries = r.addIdsIfNotThere(a.entries)),
                this.commit("setWheelConfig", a);
            },
            setEntryGradientColor(e, { index: t, color: n }) {
              const a = e.wheelConfig.clone();
              (a.entries[t].gradientColor = n),
                (a.entries = r.addIdsIfNotThere(a.entries)),
                this.commit("setWheelConfig", a);
            },
            setEntrySound(e, { index: t, sound: n }) {
              const a = e.wheelConfig.clone();
              n ? (a.entries[t].sound = n) : delete a.entries[t].sound,
                (a.entries = r.addIdsIfNotThere(a.entries)),
                this.commit("setWheelConfig", a);
            },
            setEntryMessage(e, { index: t, message: n }) {
              const a = e.wheelConfig.clone();
              n ? (a.entries[t].message = n) : delete a.entries[t].message,
                (a.entries = r.addIdsIfNotThere(a.entries)),
                this.commit("setWheelConfig", a);
            },
            setEntryEnabled(e, { index: t, enabled: n }) {
              const a = e.wheelConfig.clone();
              (a.entries[t].enabled = n),
                (a.entries = r.addIdsIfNotThere(a.entries)),
                this.commit("setWheelConfig", a);
            },
            setEntryWeight(e, { index: t, weight: n }) {
              const a = e.wheelConfig.clone();
              (a.entries[t].weight = n),
                (a.entries = r.addIdsIfNotThere(a.entries)),
                this.commit("setWheelConfig", a);
            },
            refreshEntries(e) {
              const t = e.wheelConfig.clone();
              (t.entries = r.addIdsIfNotThere(t.entries)),
                this.commit("setWheelConfig", t);
            },
            setTextEntries(e, t) {
              const n = e.wheelConfig.clone();
              (n.entries = r.addIdsIfNotThere(t.map((e) => ({ text: e })))),
                this.commit("setWheelConfig", n);
            },
            appendTextEntries(e, t) {
              const n = e.wheelConfig.clone();
              (n.entries = r.addIdsIfNotThere(
                n.entries.concat(t.map((e) => ({ text: e })))
              )),
                this.commit("setWheelConfig", n);
            },
            removeTextEntries(e, t) {
              const n = e.wheelConfig.clone();
              (n.entries = r.addIdsIfNotThere(
                n.entries.filter((e) => !t.includes(e.text))
              )),
                this.commit("setWheelConfig", n);
            },
            removeEntryByIndex(e, t) {
              const n = e.wheelConfig.clone();
              n.entries.splice(t, 1),
                (e.sheetLinked = !1),
                this.commit("setWheelConfig", n);
            },
            removeEntry(e, t) {
              const n = e.wheelConfig.clone(),
                a = n.entries.findIndex((e) => e.id === t.id);
              a > -1 &&
                (n.entries.splice(a, 1),
                (e.sheetLinked = !1),
                this.commit("setWheelConfig", n));
            },
            removeEntryAll(e, t) {
              const n = e.wheelConfig.clone();
              (n.entries = n.entries.filter(
                (e) => !e.text || e.text.trim() != t.text.trim()
              )),
                (e.sheetLinked = !1),
                this.commit("setWheelConfig", n);
            },
            hideEntry(e, t) {
              const n = e.wheelConfig.clone(),
                a = n.entries.find((e) => e.id === t.id);
              a && (a.enabled = !1), this.commit("setWheelConfig", n);
            },
            moveEntry(e, { index: t, direction: n }) {
              const a = e.wheelConfig.clone(),
                o = a.entries[t];
              (a.entries[t] = a.entries[t + n]),
                (a.entries[t + n] = o),
                (a.entries = r.addIdsIfNotThere(a.entries)),
                this.commit("setWheelConfig", a);
            },
            duplicateEntry(e, t) {
              const n = e.wheelConfig.clone(),
                a = n.entries[t],
                o = Object.assign({}, a);
              (o.id = r.getNewEntryId()),
                n.entries.splice(t + 1, 0, o),
                (n.entries = r.addIdsIfNotThere(n.entries)),
                this.commit("setWheelConfig", n);
            },
            setColorValues(e, t) {
              const n = e.wheelConfig.clone();
              n.setColorValues(t), this.commit("setWheelConfig", n);
            },
            setHubSize(e, t) {
              const n = e.wheelConfig.clone();
              (n.hubSize = t), this.commit("setWheelConfig", n);
            },
            setUploadedCenterImage(e, { fileName: t, dataUri: n }) {
              const a = e.wheelConfig.clone();
              (a.type = "color"),
                a.setUploadedCenterImage(t, n),
                this.commit("setWheelConfig", a);
            },
            setUploadedBackgroundImage(e, { fileName: t, dataUri: n }) {
              const a = e.wheelConfig.clone();
              (a.type = "image"),
                a.setUploadedBackgroundImage(t, n),
                this.commit("setWheelConfig", a);
            },
            setGalleryBackgroundImage(e, t) {
              const n = e.wheelConfig.clone();
              (n.type = "image"),
                n.setGalleryBackgroundImage(t),
                this.commit("setWheelConfig", n);
            },
            setGalleryCenterImage(e, t) {
              const n = e.wheelConfig.clone();
              (n.type = "color"),
                n.setGalleryCenterImage(t),
                this.commit("setWheelConfig", n);
            },
            removeImageFromEntry(e, t) {
              const n = e.wheelConfig.clone();
              delete n.entries[t].image, this.commit("setWheelConfig", n);
            },
            setWheelBusy(e, t) {
              e.wheelIsBusy = t;
            },
            linkSheet(e) {
              e.sheetLinked = !0;
            },
            unlinkSheet(e) {
              e.sheetLinked = !1;
            },
            setPath(e, t) {
              e.path = t;
            },
            setUnshared(e) {
              (e.path = ""), (e.shareMode = "");
            },
            setShareMode(e, t) {
              e.shareMode = t;
            },
            setCopyable(e, { copyable: t, editable: n }) {
              "undefined" != typeof n && (e.copyable = n),
                "undefined" != typeof t && (e.copyable = t);
            },
            addWinner(e, t) {
              e.winnerEntry = t;
              const n = e.winners.slice(0);
              n.push(t), (e.winners = n);
            },
            sortWinners(e) {
              e.winners = r.sortWheelEntries(e.winners);
            },
            clearWinners(e) {
              e.winners = [];
            },
            setVolumes(
              e,
              { duringSpinSoundVolume: t, afterSpinSoundVolume: n }
            ) {
              const a = e.wheelConfig.clone();
              (a.duringSpinSoundVolume = t),
                (a.afterSpinSoundVolume = n),
                this.commit("setWheelConfig", a);
            },
          },
          actions: {
            loadInitialEditableWheel(e, t) {
              const n = new i.Z(t);
              n.loadJson(localStorage.getItem("LastWheelConfig")),
                e.commit("setWheelConfig", n);
            },
            async loadInitialSharedWheel(e, t) {
              e.commit("setPath", t), e.commit("setGrayEmptyWheel");
              try {
                const n = await l.iT(t);
                e.commit("setShareMode", n.shareMode),
                  e.commit("setCopyable", {
                    copyable: n.copyable,
                    editable: n.editable,
                  });
                const a = new i.Z();
                a.loadValues(n.wheelConfig),
                  e.commit("setWheelConfigNoPersist", a);
              } catch (n) {
                throw (
                  (e.commit("setWheelConfig", new i.Z()),
                  e.commit("setUnshared"),
                  n)
                );
              }
            },
            resetWheel(e, t) {
              const n = new i.Z(t);
              e.commit("unlinkSheet"),
                e.commit("setWheelConfig", n),
                e.commit("clearWinners");
            },
            async appendImageEntry(e, t) {
              const n = e.state.wheelConfig.entries.slice(0);
              let a;
              if (e.state.wheelConfig.isAdvanced) {
                let e = "#CCCCCC";
                const n = await s.hm(t),
                  o = s.y7(n);
                o || (e = s.pt(n).slice(0, 7)),
                  (a = {
                    text: "",
                    image: t,
                    color: e,
                    weight: 1,
                    enabled: !0,
                  });
              } else a = { text: "", image: t };
              n.push(a), e.commit("setEntries", n);
            },
            async attachImageToEntry(e, { imageData: t, index: n }) {
              const a = r.clone(e.state.wheelConfig.entries),
                o = await s.hm(t),
                i = s.y7(o);
              if (!i) {
                const e = s.pt(o).slice(0, 7);
                a[n].color = e;
              }
              (a[n].image = t), e.commit("setEntries", a);
            },
            async setAdvanced(e, t) {
              let n = e.state.wheelConfig.clone();
              if (((n.isAdvanced = t), t)) {
                const e = n.getCoalescedColors();
                for (let t = 0; t < n.entries.length; t++) {
                  const a = n.entries[t];
                  if (a.image) {
                    const n = await s.hm(a.image);
                    s.y7(n)
                      ? (a.color = e[t % e.length])
                      : (a.color = s.pt(n).slice(0, 7));
                  } else a.color = e[t % e.length];
                  (a.weight = 1), (a.enabled = !0);
                }
              } else
                n.entries.forEach((e) => {
                  delete e.color,
                    delete e.weight,
                    delete e.enabled,
                    delete e.sound,
                    delete e.message;
                }),
                  (n.entries = n.entries.filter((e) => e.text || e.image));
              e.commit("setWheelConfig", n);
            },
          },
        };
        var h = n(76001);
        const u = {
            state: {
              clientId: r.getRandomInt(1e5, 999999),
              liveSharedWheelUserIdToken: "",
              liveSharedWheelEditPermissions: null,
              liveSharedWheelPassword: "",
              liveSharedWheelIAmOwner: !1,
              spinState: {},
            },
            getters: {
              clientId: (e) => e.clientId,
              liveSharedWheelEditPermissions: (e) =>
                e.liveSharedWheelEditPermissions,
              liveSharedWheelPassword: (e) => e.liveSharedWheelPassword,
              liveSharedWheelIAmOwner: (e) => e.liveSharedWheelIAmOwner,
              userHasEnteredCorrectPassword: (e) => !!e.liveSharedWheelPassword,
              spinState: (e) => e.spinState,
            },
            mutations: {
              setLiveSharedWheelUserIdToken(e, t) {
                e.liveSharedWheelUserIdToken = t;
              },
              setLiveSharedWheelEditPermissions(e, t) {
                e.liveSharedWheelEditPermissions = t;
              },
              setLiveSharedWheelPassword(e, t) {
                e.liveSharedWheelPassword = t;
              },
              setLiveSharedWheelIAmOwner(e, t) {
                e.liveSharedWheelIAmOwner = t;
              },
              setSpinState(e, t) {
                e.spinState = t;
              },
            },
            actions: {
              async subscribeToLiveWheel(e, t) {
                await h.W2(),
                  e.commit(
                    "setLiveSharedWheelIAmOwner",
                    await e.dispatch("amIOwner", t)
                  ),
                  h.Nr(t, (t) => {
                    t.lastUpdatedByClientId != e.state.clientId &&
                      (e.commit(
                        "setLiveSharedWheelEditPermissions",
                        t.editPermissions
                      ),
                      e.commit("setWheelConfigNoPersist", t.config));
                  }),
                  h.Bh(t, (t) => {
                    e.commit("setSpinState", t);
                  });
              },
              async isPassword(e, t) {
                throw "Not implemented";
              },
              async setSpinState(e, t) {},
            },
          },
          d = {
            state: { userPhotoUrl: "", userDisplayName: "", myWheels: [] },
            getters: {
              userPhotoUrl: (e) => e.userPhotoUrl,
              userDisplayName: (e) => e.userDisplayName,
              myWheels: (e) => e.myWheels,
            },
            mutations: {
              setUserPhotoUrl(e, t) {
                e.userPhotoUrl = t || "/images/user_profile.png";
              },
              setUserDisplayName(e, t) {
                e.userDisplayName = t;
              },
              setMyWheels(e, t) {
                e.myWheels = t;
              },
              clearUser(e) {
                (e.userPhotoUrl = ""), (e.userDisplayName = "");
              },
            },
            actions: {
              async userIsLoggedIn({ state: e, commit: t, rootState: n }) {
                await h.W2();
                const a = await h.cR();
                if (a) {
                  const e = await h.r();
                  t("setUserPhotoUrl", e.photoURL),
                    t("setUserDisplayName", e.displayName);
                }
                return a;
              },
              async logOut({ state: e, commit: t, rootState: n }) {
                h.ni(), t("clearUser");
              },
              async deleteAccount({ state: e, commit: t, rootState: n }) {
                const a = await h.qo();
                await l.tm(a), h.ni(), t("clearUser");
              },
              async loginAnonymously(e) {
                await h.wA();
              },
              async loginWithUi({ state: e, commit: t, rootState: n }, a) {
                await h.W2();
                const o = await h.nL(),
                  i = await h.zG(a);
                t("setUserPhotoUrl", i.photoURL),
                  t("setUserDisplayName", i.displayName),
                  await l.MZ(o, await h.qo());
              },
              async logInToSheets({ state: e, commit: t, rootState: n }, a) {
                await h.W2();
                const o = await h.nL(),
                  i = await h.Yf(a),
                  r = await h.r();
                return (
                  t("setUserPhotoUrl", r.photoURL),
                  t("setUserDisplayName", r.displayName),
                  await l.MZ(o, await h.qo()),
                  i
                );
              },
              async userIsAdmin() {
                await h.W2();
                const e = await h.qo();
                try {
                  return await l.sm(e);
                } catch (t) {
                  return !1;
                }
              },
              async getUid() {
                return await h.sq();
              },
              async getUserIdToken() {
                return await h.qo();
              },
              async getSavedWheels(e, { fields: t }) {
                const n = await h.qo();
                let a = await l.Bm(n, t);
                return (
                  (a = a.sort((e, t) =>
                    e.config.title.localeCompare(t.config.title, "en", {
                      numeric: !0,
                      sensitivity: "base",
                    })
                  )),
                  a
                );
              },
              async loadSavedWheel(e, t) {
                const n = await h.qo(),
                  a = await l.mY(n, t);
                return a;
              },
              async loadMyWheels(e) {
                throw "Not implemented";
              },
              async saveWheel(e, t) {
                const n = await h.qo();
                await l.R2(n, t.getValues());
              },
              async getSharedWheels(e, { fields: t }) {
                const n = await h.qo(),
                  a = await l.Ve(n, t);
                return a;
              },
              async shareWheel(
                e,
                {
                  wheelConfig: t,
                  shareMode: n,
                  editPermissions: a,
                  password: o,
                }
              ) {
                const i = await h.qo();
                return await l.io({
                  wheelConfig: t,
                  idToken: i,
                  shareMode: n,
                  editPermissions: a,
                  password: o,
                });
              },
              async deleteWheel(e, t) {
                const n = await h.qo();
                await l.sP(n, t);
              },
              async amIOwner(e, t) {
                throw "Not implemented";
              },
              async generateApiKey() {
                const e = await h.qo(),
                  t = await l._4(e);
                return t;
              },
              async getExistingApiKey() {
                const e = await h.qo(),
                  t = await l.eO(e);
                return t;
              },
              async deleteExistingApiKey() {
                const e = await h.qo();
                await l.ld(e);
              },
            },
          },
          m = {
            state: {
              version: "281",
              appInfoVisible: !0,
              darkMode: "auto",
              latestSeenVersion: 0,
              userHasSeenCurrentVersion: !1,
              seenUkraineBanner: !1,
              wheelLocation: "",
            },
            getters: {
              version: (e) => e.version,
              darkMode: (e) => e.darkMode,
              appInfoVisible: (e) => e.appInfoVisible,
              userHasSeenCurrentVersion: (e) => e.userHasSeenCurrentVersion,
              seenUkraineBanner: (e) => e.seenUkraineBanner,
              wheelLocation: (e) => e.wheelLocation,
            },
            mutations: {
              setDurablePrefs(
                e,
                {
                  appInfoVisible: t,
                  darkMode: n,
                  latestSeenVersion: a,
                  seenUkraineBanner: o,
                  wheelLocation: i,
                }
              ) {
                (e.appInfoVisible = t),
                  (e.darkMode = n),
                  (e.latestSeenVersion = a),
                  (e.seenUkraineBanner = o),
                  (e.wheelLocation = i),
                  g(e);
              },
              setLatestSeenVersion(e, t) {
                (e.latestSeenVersion = t), g(e);
              },
              setUserHasSeenCurrentVersion(e, t) {
                e.userHasSeenCurrentVersion = t;
              },
              toggleAppInfoVisibility(e) {
                (e.appInfoVisible = !e.appInfoVisible), g(e);
              },
              setDarkMode(e, t) {
                (e.darkMode = t), g(e);
              },
              setSeenUkraineBanner(e) {
                (e.seenUkraineBanner = !0), g(e);
              },
              setWheelLocation(e, t) {
                (e.wheelLocation = t), g(e);
              },
              switchWheelLocation(e) {
                "local" === e.wheelLocation
                  ? (e.wheelLocation = "cloud")
                  : (e.wheelLocation = "local");
              },
            },
            actions: {
              loadPreferences({ state: e, commit: t }) {
                try {
                  const e = JSON.parse(localStorage.getItem("Preferences"));
                  t("setDurablePrefs", {
                    appInfoVisible: e.appInfoVisible,
                    darkMode: e.darkMode,
                    latestSeenVersion: e.latestSeenVersion,
                    seenUkraineBanner: e.seenUkraineBanner,
                    wheelLocation: e.wheelLocation,
                  });
                } catch {}
                const n = e.version;
                t("setUserHasSeenCurrentVersion", n == e.latestSeenVersion),
                  t("setLatestSeenVersion", n);
              },
            },
          };
        function g(e) {
          const t = {
            appInfoVisible: e.appInfoVisible,
            darkMode: e.darkMode,
            latestSeenVersion: e.latestSeenVersion,
            seenUkraineBanner: e.seenUkraineBanner,
            wheelLocation: e.wheelLocation,
          };
          localStorage.setItem("Preferences", JSON.stringify(t));
        }
        const f = {
            state: {
              settings: {
                carousel: { slides: [] },
                spinStats: { spinsPerSecond: 30, hoursSpunPerSecond: 0.08 },
                maintenanceMessage: "",
                readOnlyMode: !1,
                commitHash: "?",
              },
            },
            getters: {
              carouselSlides: (e) => {
                var t, n;
                return null === (t = e.settings) ||
                  void 0 === t ||
                  null === (n = t.carousel) ||
                  void 0 === n
                  ? void 0
                  : n.slides;
              },
              spinsPerSecond: (e) => {
                var t, n;
                return null === (t = e.settings) ||
                  void 0 === t ||
                  null === (n = t.spinStats) ||
                  void 0 === n
                  ? void 0
                  : n.spinsPerSecond;
              },
              hoursSpunPerSecond: (e) => {
                var t, n;
                return null === (t = e.settings) ||
                  void 0 === t ||
                  null === (n = t.spinStats) ||
                  void 0 === n
                  ? void 0
                  : n.hoursSpunPerSecond;
              },
              maintenanceMessage: (e) => {
                var t;
                return null === (t = e.settings) || void 0 === t
                  ? void 0
                  : t.maintenanceMessage;
              },
              readOnlyMode: (e) => {
                var t;
                return null === (t = e.settings) || void 0 === t
                  ? void 0
                  : t.readOnlyMode;
              },
              commitHash: (e) => {
                var t;
                return null === (t = e.settings) || void 0 === t
                  ? void 0
                  : t.commitHash;
              },
            },
            mutations: {
              setSettings(e, t) {
                e.settings = t;
              },
            },
            actions: {
              async loadServerSettings({ dispatch: e, commit: t }) {
                try {
                  const e = await l.Gw();
                  t("setSettings", e);
                } catch (n) {
                  console.log(n);
                }
              },
            },
          },
          p = (0, a.h)(function () {
            const e = (0, o.MT)({
              modules: {
                wheel: c,
                liveWheel: u,
                user: d,
                preferences: m,
                serverSettings: f,
              },
              strict: !1,
            });
            return (
              e.subscribe((e, t) => {
                "setWheelConfig" == e.type &&
                  (r.isPublicShareMode(t.wheel.shareMode) ||
                    localStorage.setItem(
                      "LastWheelConfig",
                      t.wheel.wheelConfig.getJson()
                    ));
              }),
              e
            );
          });
      },
      76001: (e, t, n) => {
        n.d(t, {
          nL: () => y,
          r: () => f,
          sq: () => w,
          qo: () => p,
          zG: () => b,
          W2: () => m,
          wA: () => v,
          Yf: () => N,
          ni: () => C,
          Nr: () => S,
          Bh: () => k,
          cR: () => g,
        });
        n(40702);
        var a = n(16707);
        async function o(e) {
          const t = await i(e);
          return !!t && !t.isAnonymous;
        }
        async function i(e) {
          return e.currentUser
            ? e.currentUser
            : new Promise(function (t) {
                e.onAuthStateChanged(function (e) {
                  t(e);
                });
              });
        }
        async function r(e) {
          return await e.signInAnonymously(), e.currentUser;
        }
        async function s(e, t) {
          t.addScope("https://www.googleapis.com/auth/drive.readonly"),
            t.addScope("https://www.googleapis.com/auth/spreadsheets.readonly"),
            t.setCustomParameters({ prompt: "select_account" });
          const n = await e.signInWithPopup(t);
          return n.credential.accessToken;
        }
        var l = n(72788),
          c = n(65883);
        let h, u, d;
        async function m() {
          h || (await P(), I(h), E(h));
        }
        async function g() {
          return await o(h.auth());
        }
        async function f() {
          return await i(h.auth());
        }
        async function p() {
          const e = await f();
          if (e) return await e.getIdToken(!0);
        }
        async function w() {
          const e = await f();
          if (e) return e.uid;
        }
        async function y() {
          const e = await f();
          if (e && e.isAnonymous) return await e.getIdToken();
        }
        function b(e) {
          return (
            (0, c.loadCSS)(
              "https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css"
            ),
            new Promise(function (t, n) {
              d || (d = new u.auth.AuthUI(h.auth())),
                d.start(`#${e}`, {
                  signInFlow: "popup",
                  credentialHelper: u.auth.CredentialHelper.NONE,
                  signInOptions: [
                    {
                      provider: h.auth.GoogleAuthProvider.PROVIDER_ID,
                      customParameters: { prompt: "select_account" },
                    },
                    h.auth.TwitterAuthProvider.PROVIDER_ID,
                    h.auth.EmailAuthProvider.PROVIDER_ID,
                  ],
                  callbacks: {
                    signInSuccessWithAuthResult: function (e, n) {
                      t(e.user);
                    },
                  },
                  tosUrl: "/faq/terms",
                  privacyPolicyUrl: "/privacy-policy.html",
                });
            })
          );
        }
        async function v() {
          const e = h.auth();
          return await r(e);
        }
        async function N(e) {
          const t = h.auth();
          t.languageCode = l.z2("Google", e);
          const n = W("Google");
          return await s(t, n);
        }
        function C() {
          try {
            h.auth().signOut();
          } catch (e) {}
        }
        function S(e, t) {
          const n = h.firestore(),
            a = n.doc(`live-wheels/${e}`);
          a.onSnapshot((e) => {
            t(e.data());
          });
        }
        function k(e, t) {
          const n = h.firestore(),
            a = n.doc(`live-wheels/${e}/live-wheels-state/spin-state`);
          a.onSnapshot((e) => {
            t(e.data());
          });
        }
        async function P() {
          const e = await Promise.all([n.e(4736), n.e(1326)]).then(
            n.bind(n, 20222)
          );
          (h = e.default),
            await Promise.all([n.e(4736), n.e(1326)]).then(n.bind(n, 82159)),
            await Promise.all([n.e(4736), n.e(1326)]).then(n.bind(n, 28686)),
            (u = await Promise.all([n.e(4736), n.e(1326)]).then(
              n.bind(n, 51068)
            ));
        }
        function I(e) {
          if (T()) return;
          const t = {
            apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
            authDomain: "wheel-of-names-firebase.firebaseapp.com",
            databaseURL: "https://wheel-of-names-firebase.firebaseio.com",
            projectId: "wheel-of-names-firebase",
            timestampsInSnapshots: !0,
          };
          e.initializeApp(t);
        }
        function T() {
          return h.apps && h.apps.length > 0;
        }
        function E(e) {
          const t = e.firestore();
          if (a.browserCanHandlePersistance(navigator.userAgent))
            try {
              t.enablePersistence({ synchronizeTabs: !0 });
            } catch (n) {}
        }
        function W(e) {
          const t = {
            google: new h.auth.GoogleAuthProvider(),
            facebook: new h.auth.FacebookAuthProvider(),
            twitter: new h.auth.TwitterAuthProvider(),
          };
          return t[e.toLowerCase()] || t["google"];
        }
      },
      19395: (e, t, n) => {
        n.d(t, {
          GV: () => o,
          IY: () => h,
          Qm: () => l,
          XW: () => i,
          be: () => c,
          cM: () => a,
          hm: () => u,
          lw: () => r,
          pt: () => s,
          y7: () => d,
        });
        n(40702);
        async function a(e) {
          return new Promise(function (t, n) {
            const a = new Image();
            (a.onload = function () {
              const n = g(a.width, a.height, 200);
              N(n, a), t(S(n, e, 0.5));
            }),
              (a.src = e);
          });
        }
        async function o(e) {
          return new Promise(function (t, n) {
            const a = new Image();
            (a.onload = function () {
              const e = f(370);
              p(a) || N(e, a, "blur(4px)"), C(e, a, !0), t(S(e, null, 0.5));
            }),
              (a.src = e);
          });
        }
        async function i(e) {
          return new Promise(function (t, n) {
            const a = new Image();
            (a.onload = function () {
              const e = f(700);
              C(e, a, !1), t(S(e, null, 0.7));
            }),
              (a.src = e);
          });
        }
        function r(e) {
          const t = document.createElement("canvas");
          return (t.width = e.canvas.width), (t.height = e.canvas.height), t;
        }
        function s(e) {
          let t = document.createElement("canvas").getContext("2d");
          t.drawImage(e, 0, 0);
          let n = t.getImageData(0, 0, 1, 1).data;
          return y(n[0], n[1], n[2]) ? "#FFFFFFFF" : b(n[0], n[1], n[2], n[3]);
        }
        function l(e) {
          let t = !1,
            n = e.match(/#\w\w\w\w\w\w(\w\w)/);
          return n && (t = "00" == n[1]), t;
        }
        async function c(e) {
          const t = (
              await Promise.all([n.e(4736), n.e(4451)]).then(
                n.t.bind(n, 17430, 23)
              )
            ).default,
            a = new Image();
          return (
            (a.src = e),
            new Promise(function (e, n) {
              a.onload = async function () {
                const n = new t(a),
                  o = await n.getPalette();
                e([
                  o.Vibrant.hex,
                  o.LightVibrant.hex,
                  o.DarkVibrant.hex,
                  o.Muted.hex,
                  o.LightMuted.hex,
                  o.DarkMuted.hex,
                ]);
              };
            })
          );
        }
        function h(e) {
          const t = 300,
            n = f(t),
            a = n.getContext("2d");
          (a.fillStyle = "white"),
            a.fillRect(0, 0, t, t),
            (a.fillStyle = "black"),
            (a.textBaseline = "middle"),
            (a.textAlign = "center");
          const o = 0.9 * t;
          m(a, e, o), a.fillText(e, t / 2, t / 2, o);
          const i = n.toDataURL("image/webp", 0.5);
          return i;
        }
        function u(e) {
          if (e)
            return new Promise(async function (t) {
              const n = new Image();
              n.setAttribute("crossOrigin", "anonymous"),
                (n.onload = function () {
                  t(n);
                }),
                (n.src = e);
            });
        }
        function d(e) {
          const t = s(e);
          return "00" == t.slice(7);
        }
        function m(e, t, n) {
          for (let a = Math.round(n / 2); a >= n / 20; a--) {
            e.font = `${a}px Quicksand, sans-serif`;
            const o = e.measureText(t);
            if (o.width <= n) break;
          }
        }
        function g(e, t, n) {
          let a = n / e,
            o = n / t,
            i = Math.max(a, o);
          const r = document.createElement("canvas");
          return (r.width = e * i), (r.height = t * i), r;
        }
        function f(e) {
          const t = document.createElement("canvas");
          return (t.width = e), (t.height = e), t;
        }
        function p(e) {
          const t = s(e);
          return "#FFFFFFFF" == t || "FF" == t.slice(7);
        }
        function w(e) {
          let t = e.getImageData(0, 0, 1, 1).data;
          return t[3] < 5;
        }
        function y(e, t, n) {
          return e == t && e == n && e > 230;
        }
        function b(e, t, n, a) {
          return `#${v(e)}${v(t)}${v(n)}${v(a)}`;
        }
        const v = (e) => Number(e).toString(16).padStart(2, "0");
        function N(e, t, n) {
          const a = e.getContext("2d");
          a.save(),
            n && (a.filter = n),
            a.drawImage(t, -2, -2, e.width + 4, e.height + 4),
            a.restore();
        }
        function C(e, t, n) {
          const a = e.width;
          let o = a / Math.min(t.width, t.height);
          n && (o = a / Math.max(t.width, t.height));
          const i = t.width * o,
            r = (a - i) / 2,
            s = t.height * o,
            l = (a - s) / 2,
            c = e.getContext("2d");
          c.drawImage(t, r, l, i, s);
        }
        function S(e, t, n) {
          let a;
          return (
            (a = w(e.getContext("2d"))
              ? e.toDataURL("image/webp", 0.5)
              : e.toDataURL("image/jpeg", n)),
            t && t.length < a.length ? t : a
          );
        }
      },
      72788: (e, t, n) => {
        n.d(t, {
          DA: () => f,
          NB: () => p,
          VX: () => m,
          WN: () => u,
          qC: () => h,
          uq: () => g,
          z2: () => d,
        });
        n(18964), n(46727);
        var a = n(81634),
          o = n(39753),
          i = n(82005),
          r = n(3626),
          s = n(38806);
        const l = [{ partialName: "noms", locale: "fr" }],
          c = [
            {
              name: "am",
              humanName: "አማርኛ",
              googleName: "am_ET",
              twitterName: "am",
              file: "am-ET.json",
            },
            {
              name: "ar",
              humanName: "العربية",
              googleName: "ar_AR",
              twitterName: "ar",
              file: "ar-EG.json",
            },
            {
              name: "az",
              humanName: "Azərbaycanca",
              googleName: "az_AZ",
              twitterName: "az",
              file: "az-Latn-AZ.json",
            },
            {
              name: "bg",
              humanName: "български",
              googleName: "bg_BG",
              twitterName: "bg",
              file: "bg-BG.json",
            },
            {
              name: "bn",
              humanName: "বাংলা",
              googleName: "bn_IN",
              twitterName: "bn",
              file: "bn-IN.json",
            },
            {
              name: "bs",
              humanName: "Bosanski",
              googleName: "bs_BA",
              twitterName: "bs",
              file: "bs-Latn-BA.json",
            },
            {
              name: "ca",
              humanName: "Català",
              googleName: "ca_ES",
              twitterName: "ca",
              file: "ca-ES.json",
            },
            {
              name: "cs",
              humanName: "Čeština",
              googleName: "cs_CZ",
              twitterName: "cs",
              file: "cs-CZ.json",
            },
            {
              name: "cy",
              humanName: "Cymraeg",
              googleName: "cy_GB",
              twitterName: "cy",
              file: "cy-GB.json",
            },
            {
              name: "da",
              humanName: "Dansk",
              googleName: "da_DK",
              twitterName: "da",
              file: "da-DK.json",
            },
            {
              name: "de",
              humanName: "Deutsch",
              googleName: "de_DE",
              twitterName: "de",
              file: "de-DE.json",
            },
            {
              name: "el",
              humanName: "Eλληνικά",
              googleName: "el_GR",
              twitterName: "el",
              file: "el-GR.json",
            },
            {
              name: "en-PI",
              humanName: "English (Pirate)",
              googleName: "en_US",
              twitterName: "en",
              file: "en-PI.json",
            },
            {
              name: "en",
              humanName: "English",
              googleName: "en_US",
              twitterName: "en",
              file: "en-US.json",
            },
            {
              name: "es",
              humanName: "Español",
              googleName: "es_ES",
              twitterName: "es",
              file: "es-ES.json",
            },
            {
              name: "et",
              humanName: "Estonian",
              googleName: "et_EE",
              twitterName: "et",
              file: "et-EE.json",
            },
            {
              name: "fa",
              humanName: "فارسی",
              googleName: "fa_IR",
              twitterName: "fa",
              file: "fa-IR.json",
            },
            {
              name: "fi",
              humanName: "Suomi",
              googleName: "fi_FI",
              twitterName: "fi",
              file: "fi-FI.json",
            },
            {
              name: "fil",
              humanName: "Filipino",
              googleName: "fil_PH",
              twitterName: "fil",
              file: "fil-PH.json",
            },
            {
              name: "fr",
              humanName: "Français",
              googleName: "fr_FR",
              twitterName: "fr",
              file: "fr-FR.json",
            },
            {
              name: "gl",
              humanName: "Galego",
              googleName: "gl_ES",
              twitterName: "gl",
              file: "gl-ES.json",
            },
            {
              name: "gu",
              humanName: "ગુજરાતી",
              googleName: "gu_IN",
              twitterName: "gu",
              file: "gu-IN.json",
            },
            {
              name: "he",
              humanName: "עברית",
              googleName: "he_IL",
              twitterName: "he",
              file: "he-IL.json",
            },
            {
              name: "hi",
              humanName: "हिंदी",
              googleName: "hi_IN",
              twitterName: "hi",
              file: "hi-IN.json",
            },
            {
              name: "hr",
              humanName: "Hrvatski",
              googleName: "hr_HR",
              twitterName: "hr",
              file: "hr-HR.json",
            },
            {
              name: "hu",
              humanName: "Magyar",
              googleName: "hu_HU",
              twitterName: "hu",
              file: "hu-HU.json",
            },
            {
              name: "hy",
              humanName: "Հայերեն",
              googleName: "hy_AM",
              twitterName: "hy",
              file: "hy-AM.json",
            },
            {
              name: "id",
              humanName: "Bahasa Indonesia",
              googleName: "id_ID",
              twitterName: "id",
              file: "id-ID.json",
            },
            {
              name: "is",
              humanName: "Íslenskur",
              googleName: "is_IS",
              twitterName: "is",
              file: "is-IS.json",
            },
            {
              name: "it",
              humanName: "Italiano",
              googleName: "it_IT",
              twitterName: "it",
              file: "it-IT.json",
            },
            {
              name: "ja",
              humanName: "日本語",
              googleName: "ja_JP",
              twitterName: "ja",
              file: "ja-JP.json",
            },
            {
              name: "ka",
              humanName: "ქართული",
              googleName: "ka_GE",
              twitterName: "ka",
              file: "ka-GE.json",
            },
            {
              name: "kk",
              humanName: "Қазақ тілі",
              googleName: "kk_KZ",
              twitterName: "kk",
              file: "kk-KZ.json",
            },
            {
              name: "kn",
              humanName: "ಕನ್ನಡ",
              googleName: "kn_IN",
              twitterName: "kn",
              file: "kn-IN.json",
            },
            {
              name: "ko",
              humanName: "한국어",
              googleName: "ko_KR",
              twitterName: "ko",
              file: "ko-KR.json",
            },
            {
              name: "lo",
              humanName: "ພາສາລາວ",
              googleName: "lo_LA",
              twitterName: "lo",
              file: "lo-LA.json",
            },
            {
              name: "lt",
              humanName: "Lietuvių",
              googleName: "lt_LT",
              twitterName: "lt",
              file: "lt-LT.json",
            },
            {
              name: "lv",
              humanName: "Latviešu",
              googleName: "lv_LV",
              twitterName: "lv",
              file: "lv-LV.json",
            },
            {
              name: "mk",
              humanName: "Mакедонски",
              googleName: "mk_MK",
              twitterName: "mk",
              file: "mk-MK.json",
            },
            {
              name: "ml",
              humanName: "മലയാളം",
              googleName: "ml_IN",
              twitterName: "ml",
              file: "ml-IN.json",
            },
            {
              name: "mn",
              humanName: "Mонгол",
              googleName: "mn_MN",
              twitterName: "mn",
              file: "mn-MN.json",
            },
            {
              name: "ms",
              humanName: "Bahasa Melayu",
              googleName: "ms_MY",
              twitterName: "ms",
              file: "ms-MY.json",
            },
            {
              name: "my",
              humanName: "မြန်မာစာ",
              googleName: "my_MM",
              twitterName: "my",
              file: "my-MM.json",
            },
            {
              name: "nl",
              humanName: "Nederlands",
              googleName: "nl_NL",
              twitterName: "nl",
              file: "nl-NL.json",
            },
            {
              name: "no",
              humanName: "Norsk",
              googleName: "nb_NO",
              twitterName: "no",
              file: "nb-NO.json",
            },
            {
              name: "pa",
              humanName: "ਪੰਜਾਬੀ",
              googleName: "pa_IN",
              twitterName: "pa",
              file: "pa-IN.json",
            },
            {
              name: "pl",
              humanName: "Polski",
              googleName: "pl_PL",
              twitterName: "pl",
              file: "pl-PL.json",
            },
            {
              name: "pt",
              humanName: "Português",
              googleName: "pt_BR",
              twitterName: "pt",
              file: "pt-PT.json",
            },
            {
              name: "ro",
              humanName: "Română",
              googleName: "ro_RO",
              twitterName: "ro",
              file: "ro-RO.json",
            },
            {
              name: "ru",
              humanName: "Pусский",
              googleName: "ru_RU",
              twitterName: "ru",
              file: "ru-RU.json",
            },
            {
              name: "sl",
              humanName: "Slovenščina",
              googleName: "sl_SL",
              twitterName: "sl",
              file: "sl-SI.json",
            },
            {
              name: "sq",
              humanName: "Shqip",
              googleName: "sq_AL",
              twitterName: "sq",
              file: "sq-AL.json",
            },
            {
              name: "sr",
              humanName: "Srpski",
              googleName: "sr_SP",
              twitterName: "sr",
              file: "sr-Latn-RS.json",
            },
            {
              name: "sv",
              humanName: "Svenska",
              googleName: "sv_SE",
              twitterName: "sv",
              file: "sv-SE.json",
            },
            {
              name: "ta",
              humanName: "தமிழ்",
              googleName: "ta_IN",
              twitterName: "ta",
              file: "ta-IN.json",
            },
            {
              name: "th",
              humanName: "ไทย",
              googleName: "th_TH",
              twitterName: "th",
              file: "th-TH.json",
            },
            {
              name: "tr",
              humanName: "Türkçe",
              googleName: "tr_TR",
              twitterName: "tr",
              file: "tr-TR.json",
            },
            {
              name: "uk",
              humanName: "Українська",
              googleName: "uk_UA",
              twitterName: "uk",
              file: "uk-UA.json",
            },
            {
              name: "ur",
              humanName: "اردو",
              googleName: "ur-PK",
              twitterName: "ur",
              file: "ur-PK.json",
            },
            {
              name: "vi",
              humanName: "Tiếng Việt",
              googleName: "vi_VN",
              twitterName: "vi",
              file: "vi-VN.json",
            },
            {
              name: "zh-CN",
              humanName: "简体中文",
              googleName: "zh_CN",
              twitterName: "zh-cn",
              file: "zh-CN.json",
            },
            {
              name: "zh-HK",
              humanName: "繁體中文",
              googleName: "zh_TW",
              twitterName: "zh-tw",
              file: "zh-HK.json",
            },
          ];
        function h(e, t) {
          return C(e) == t ? "/" : `/${t}/`;
        }
        function u(e, t, n) {
          const a = e + h(e, t) + "/" + n;
          return a.replace("//", "/");
        }
        function d(e, t) {
          const n = c.find((e) => e.name == t),
            a = "twitter" == e.toLowerCase() ? "twitterName" : "googleName";
          return (null === n || void 0 === n ? void 0 : n[a]) || "en_US";
        }
        function m(e) {
          var t;
          return (
            (null === (t = c.find((t) => t.name == e)) || void 0 === t
              ? void 0
              : t.file) || "en-US.json"
          );
        }
        function g(e, t) {
          const n = b("")(t);
          return a.Z(y, w(e), b({}), o.Z("", "name"))([n]);
        }
        function f(e) {
          return Array.isArray(e)
            ? a.Z(y, i.Z(N), r.Z(s.Z(["name", "humanName"])))(e)
            : [];
        }
        function p() {
          return c
            .map((e) => ({ name: e.name, humanName: e.humanName }))
            .sort(v);
        }
        function w(e) {
          return function (t) {
            return t.filter((t) => !S(e, t.name));
          };
        }
        function y(e) {
          return c.filter((t) => e.some((e) => S(e, t.name)));
        }
        function b(e) {
          return function (t) {
            return o.Z(e, 0, t);
          };
        }
        function v(e, t) {
          return e.humanName.localeCompare(t.humanName);
        }
        function N(e) {
          return "en-PI" == e.name;
        }
        function C(e) {
          var t;
          return (
            (null === (t = l.find((t) => e.includes(t.partialName))) ||
            void 0 === t
              ? void 0
              : t.locale) || "en"
          );
        }
        function S(e, t) {
          return e.length == t.length ? e == t : k(e) == k(t);
        }
        function k(e) {
          return e.split("-")[0];
        }
      },
      78821: (e, t, n) => {
        n.d(t, {
          Bm: () => s,
          FC: () => w,
          FV: () => m,
          Fo: () => k,
          Gw: () => y,
          H1: () => x,
          Iu: () => g,
          JX: () => C,
          MZ: () => u,
          PY: () => S,
          Px: () => P,
          R2: () => c,
          Su: () => M,
          Ve: () => r,
          Y9: () => p,
          _4: () => b,
          bH: () => L,
          cp: () => W,
          eO: () => N,
          iS: () => U,
          iT: () => i,
          io: () => o,
          jP: () => E,
          kA: () => T,
          ld: () => v,
          lf: () => A,
          mY: () => l,
          sP: () => h,
          sm: () => f,
          tm: () => d,
          uY: () => R,
          v5: () => I,
          ws: () => O,
          xi: () => j,
        });
        var a = n(16707);
        async function o({ wheelConfig: e, idToken: t, shareMode: n }) {
          const a = { wheelConfig: e.getValues(), shareMode: n },
            o = await D("POST", "wheels/shared", t, a);
          return o.data.path;
        }
        async function i(e) {
          const t = await D("GET", `wheels/shared/${e}`);
          return t.data;
        }
        async function r(e, t) {
          let n = "wheels/shared";
          t && t.length > 0 && (n += `?fields=${t}`);
          const a = await D("GET", "wheels/shared", e);
          return a.data.wheels;
        }
        async function s(e, t) {
          let n = "wheels/private";
          t && t.length > 0 && (n += `?fields=${t}`);
          const a = await D("GET", n, e);
          return a.data.wheels;
        }
        async function l(e, t) {
          const n = await D("GET", `wheels/private/${t}`, e);
          return n.data.wheel;
        }
        async function c(e, t) {
          a.getApiUrl("wheels/private");
          const n = { config: t },
            o = await D("PUT", "wheels/private", e, n);
          return o.data.path;
        }
        async function h(e, t) {
          const n = await D("DELETE", `wheels/${t}`, e);
          return n.data;
        }
        async function u(e, t) {
          await D("POST", "users/upgrade-anonymous", t, { oldIdToken: e });
        }
        async function d(e) {
          await D("POST", "users/delete", e);
        }
        async function m(e) {
          const t = await D("GET", "review-queue/info", e);
          return t.data.wheelsInReviewQueue;
        }
        async function g(e, t) {
          const n = { text: t },
            a = await D("POST", "texts/translate", e, n);
          return a.data.translations;
        }
        async function f(e) {
          const t = await D("GET", "users/is-admin", e);
          return t.data.userIsAdmin;
        }
        async function p(e, t) {
          const n = { query: e, pageNumber: t },
            a = await D("POST", "gallery/search2", null, n);
          return a.data;
        }
        async function w() {
          const e = await D("GET", "gallery/suggestions/list");
          return e.data.suggestions;
        }
        async function y() {
          const e = await D("GET", "settings/info");
          return e.data;
        }
        async function b(e) {
          const t = await D("POST", "api-keys/create", e);
          return t.data.apiKey;
        }
        async function v(e) {
          const t = await D("POST", "api-keys/delete", e);
          return t.data;
        }
        async function N(e) {
          const t = await D("GET", "api-keys/info", e);
          return t.data;
        }
        async function C(e, t, n) {
          const a = "admin/administrators/set-total-reviews",
            o = { uid: t, reviews: n },
            i = await D("POST", a, e, o);
          return i.data.wheels;
        }
        async function S(e, t, n) {
          const a = "admin/administrators/set-session-reviews",
            o = { uid: t, reviews: n },
            i = await D("POST", a, e, o);
          return i.data.wheels;
        }
        async function k(e) {
          const t = await D("GET", "admin/dirty-words", e);
          return t.data.dirtyWords;
        }
        async function P(e, t) {
          await D("POST", "admin/dirty-words", e, { dirtyWords: t });
        }
        async function I(e) {
          const t = await D("GET", "admin/administrators", e);
          return t.data;
        }
        async function T(e, t, n) {
          const a = { uid: t, name: n };
          await D("POST", "admin/administrators", e, a);
        }
        async function E(e, t) {
          const n = { uid: t };
          await D("POST", "admin/administrators/delete", e, n);
        }
        async function W(e) {
          const t = await D("GET", "admin/earnings-per-review", e);
          return t.data;
        }
        async function A(e, t) {
          await D("POST", `gallery/remove/${t}`, e);
        }
        async function x(e) {
          const t = "review-queue/next-shared-wheel",
            n = await D("GET", t, e);
          return n.data.wheel;
        }
        async function R(e) {
          const t = "review-queue/next-gallery-wheel",
            n = await D("GET", t, e);
          return n.data.wheel;
        }
        async function O(e, t) {
          await D("POST", `review-queue/approve/${t}`, e);
        }
        async function M(e, t) {
          await D("POST", `review-queue/reject/${t}`, e);
        }
        async function L(e, t) {
          await D("POST", "settings/carousel", e, { slides: t });
        }
        async function U() {
          const e = "https://discord-bot-wada35rq7a-uc.a.run.app/guild-count",
            t = { method: "GET", mode: "cors" },
            n = await fetch(e, t),
            a = await F(n);
          if (a.hasOwnProperty("guildCount")) return a.guildCount;
          throw "No guildCount property in response";
        }
        async function j() {
          const e = await D("GET", "languages");
          return e.data.languages;
        }
        async function D(e, t, n, o) {
          const i = { method: e, mode: "cors", headers: {} };
          n && (i.headers["Authorization"] = n),
            o &&
              ((i.headers["Content-Type"] = "application/json"),
              (i.body = JSON.stringify(o)));
          const r = await fetch(a.getApiUrl(t), i),
            s = await F(r);
          return s;
        }
        async function F(e) {
          const t = await e.text();
          if (t.startsWith("<")) throw t;
          const n = JSON.parse(t);
          if (n.hasOwnProperty("error")) throw n.error;
          return n;
        }
      },
      16707: (e, t, n) => {
        n.r(t),
          n.d(t, {
            addIdsIfNotThere: () => U,
            arraysEqual: () => o,
            boxFits: () => l,
            browserCanHandlePersistance: () => a,
            browserIsIE: () => v,
            browserIsIEOrOldEdge: () => C,
            browserIsIeOnWindowsRtTablet: () => N,
            clone: () => Z,
            colorIsWhite: () => M,
            createEntry: () => p,
            debounce: () => s,
            dedupeEntries: () => u,
            deepObjectsEqual: () => i,
            displayWindowsRtWarning: () => _,
            dollaramount: () => Q,
            entryIsDuplicate: () => m,
            escapeHtml: () => A,
            escapeHtmlExceptMarkTags: () => x,
            extractImage: () => f,
            extractText: () => c,
            firestoremilliseconds: () => $,
            getAddedTextEntries: () => I,
            getApiUrl: () => ae,
            getArrayDiff: () => T,
            getEntriesFromHtml: () => g,
            getFeedbackFormUrl: () => V,
            getIndexAtPointer: () => z,
            getNewEntryId: () => L,
            getNonEnglishLocale: () => F,
            getOccurences: () => b,
            getPageBackgroundColor: () => G,
            getRandomInt: () => D,
            getRandomItemFromArray: () => y,
            getTextColor: () => q,
            getTimeAgo: () => J,
            getTotalWeight: () => B,
            isPublicShareMode: () => oe,
            localestring: () => X,
            pageIsInIframe: () => ne,
            percent: () => ee,
            platformSupportsFlags: () => S,
            removeHtml: () => O,
            renderEntry: () => j,
            sanitizeWheelTitle: () => P,
            shadeColor: () => H,
            shortenText: () => h,
            shuffleArray: () => w,
            sleep: () => Y,
            sortWheelEntries: () => k,
            timeago: () => K,
            trackEvent: () => E,
            trackException: () => W,
            unescapeHtml: () => R,
          });
        n(40702), n(18964), n(46727);
        function a(e) {
          return -1 == e.indexOf("OS 12_2 like Mac OS X");
        }
        function o(e, t) {
          if (e === t) return !0;
          if (null == e || null == t) return !1;
          if (e.length != t.length) return !1;
          for (var n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
          return !0;
        }
        function i(e, t) {
          const n = Object.keys(e),
            a = Object.keys(t);
          if (n.length !== a.length) return !1;
          for (const o of n) {
            const n = e[o],
              a = t[o],
              s = r(n) && r(a);
            if ((s && !i(n, a)) || (!s && n !== a)) return !1;
          }
          return !0;
        }
        function r(e) {
          return null != e && "object" === typeof e;
        }
        function s(e, t = 300) {
          let n;
          return (...a) => {
            clearTimeout(n),
              (n = setTimeout(() => {
                e.apply(this, a);
              }, t));
          };
        }
        function l(e, t, n, a, o) {
          let i =
            Math.sqrt(Math.pow(t, 2) - Math.pow(o / 2, 2)) -
            Math.max((o * Math.cos(e)) / (2 * Math.sin(e)), n);
          return i >= a;
        }
        function c(e) {
          if (e) {
            let t = e.match(/<img.*?src="(.*?)".*?>/);
            t && (e = e.replace(t[0], ""));
          }
          let t = "";
          return e && (t = R(e)), t;
        }
        function h(e) {
          let t = "";
          if (e) {
            t = e;
            const n = 18;
            t.length > n && (t = t.substring(0, n - 1) + "…");
          }
          return t;
        }
        function u(e, t) {
          if (e) return t;
          {
            const e = [],
              n = [];
            for (let a of t) {
              const t = d(a);
              e.includes(t) || (e.push(t), n.push(a));
            }
            return n;
          }
        }
        function d(e) {
          const t = {};
          return (
            e.text && (t.text = e.text),
            e.image && (t.image = e.image),
            JSON.stringify(t)
          );
        }
        function m(e, t) {
          const n = [];
          for (let a = 0; a < e.length; a++)
            if ((d(t) == d(e[a]) && n.push(a), t.id == e[a].id))
              return n[0] != a;
          return !1;
        }
        function g(e) {
          if (!e) return [];
          let t = e.split(/<div>|<\/div>|<br>|<p>/),
            n = [
              /<div.*?>/g,
              /<\/div>/g,
              /<p.*?>/g,
              /<\/p>/g,
              /<span.*?>/g,
              /<\/span>/g,
              /<font.*?>/g,
              /<\/font>/g,
              /<!--.*?>/g,
              /<br.*?>/g,
            ];
          return t
            .map((e) => {
              let t = e;
              return (
                n.forEach((e) => {
                  t = t.replace(e, "");
                }),
                p(c(t), f(t))
              );
            })
            .filter((e) => e.text || e.image);
        }
        function f(e) {
          let t = "";
          if (e) {
            let n = e.match(/<img.*?src="(.*?)".*?>/);
            n && (t = n[1]);
          }
          return t;
        }
        function p(e, t, n, a, o) {
          const i = {};
          return (
            e && (i.text = e),
            t && (i.image = t),
            n && (i.color = n),
            a && (i.weight = a),
            o && (i.sound = o),
            i
          );
        }
        function w(e) {
          const t = e.slice(0);
          for (var n = t.length - 1; n > 0; n--) {
            var a = Math.floor(Math.random() * (n + 1)),
              o = t[n];
            (t[n] = t[a]), (t[a] = o);
          }
          return t;
        }
        function y(e) {
          return e[Math.floor(Math.random() * e.length)];
        }
        function b(e, t) {
          return t
            ? e.reduce(function (e, n) {
                return e + (n.trim() == t.trim() ? 1 : 0);
              }, 0)
            : 0;
        }
        function v() {
          return !!window.document.documentMode;
        }
        function N(e) {
          if (!e) return !1;
          const t = new RegExp("Trident.*Tablet PC.*rv.11");
          return !!e.match(t);
        }
        function C(e) {
          if (!e) return !1;
          const t = new RegExp(" MSIE \\d|Trident/|Edge/");
          return !!e.match(t);
        }
        function S(e) {
          const t = e.platform && e.platform.includes("Win");
          return !t;
        }
        function k(e) {
          return e.slice(0).sort((e, t) => {
            const n = e.text || "",
              a = t.text || "";
            return n.localeCompare(a, "en", {
              numeric: !0,
              sensitivity: "base",
            });
          });
        }
        function P(e) {
          let t = e;
          return (
            (t = t.replace(/\//g, "⁄")),
            ".." == t && (t = ".. "),
            "." == t && (t = ". "),
            "" == t && (t = "?"),
            t.length > 100 && (t = t.substring(0, 97) + "..."),
            t
          );
        }
        function I(e, t) {
          return e || (e = []), t || (t = []), t.filter((t) => !e.includes(t));
        }
        function T(e, t) {
          return (
            e || (e = []),
            t || (t = []),
            {
              additions: t.filter((t) => !e.includes(t)),
              removals: e.filter((e) => !t.includes(e)),
            }
          );
        }
        function E(e, t, n) {
          location.host.startsWith("localhost") ||
            location.host.startsWith("test") ||
            ("undefined" !== typeof ga && ga("send", "event", e, t, n),
            "undefined" !== typeof gtag &&
              gtag("event", t, { event_label: n }));
        }
        function W(e, t) {
          const n = t.toString(),
            a = navigator.userAgent;
          E(e, n, a), console.error(n);
        }
        function A(e) {
          return e
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        }
        function x(e) {
          let t = e
            .replace(/<mark>/g, "||mark||")
            .replace(/<\/mark>/g, "||/mark||");
          return A(t)
            .replace(/\|\|mark\|\|/g, "<mark>")
            .replace(/\|\|\/mark\|\|/g, "</mark>");
        }
        function R(e) {
          return e
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&nbsp;/g, " ");
        }
        function O(e) {
          return e.replace(/<.*?>/g, "");
        }
        function M(e) {
          return !e || "#ffffff" == e.toLowerCase();
        }
        function L() {
          const e = 10;
          let t = "";
          const n = "abcdefghjkmnpqrstuvwxyz23456789";
          for (let a = 0; a < e; a++)
            t += n.charAt(Math.floor(Math.random() * n.length));
          return t;
        }
        function U(e) {
          return e && e.map ? e.map((e) => ((e.id = e.id || L()), e)) : [];
        }
        function j(e) {
          let t = "",
            n = "";
          return (
            e &&
              (e.image &&
                (t = `<img src="${e.image}" style="height:25px" style="font-size:1rem;">`),
              e.text && ((n = A(e.text)), (n = n.replace(/^ +$/g, "&nbsp;")))),
            "<div>" + t + n + "</div>"
          );
        }
        function D(e, t) {
          return (
            (e = Math.ceil(e)),
            (t = Math.floor(t)),
            Math.floor(Math.random() * (t - e + 1) + e)
          );
        }
        function F(e) {
          return "en" == e ? "" : e;
        }
        function _() {
          if (N(navigator.userAgent)) {
            E("Wheel", "DisplayWindowsRtWarning", navigator.userAgent);
            const e =
              "It looks like you are using Internet Explorer on a Windows RT Tablet PC. You may not be able to open or save wheels from this device due to a bug. We realize this is frustrating and we apologize. Please use another device if possible.";
            alert(e);
          }
        }
        function V(e, t) {
          return (
            "https://docs.google.com/forms/d/e/1FAIpQLSeryxMCuDjQUGawpgIeMwSY-81fqwdbpVTIOyh1-WJG5LCeeQ/viewform?entry.1064273724=" +
            encodeURIComponent(e) +
            "&entry.558479038=" +
            t
          );
        }
        function B(e) {
          let t = 0;
          return (
            e.forEach((e) => {
              e.weight &&
                ((1 != e.enabled && e.hasOwnProperty("enabled")) ||
                  (t += e.weight));
            }),
            t
          );
        }
        function z(e, t) {
          let n = 0;
          if (0 == e.length) return 0;
          if (e[0].weight) {
            const a = B(e),
              o = e.map((e) => (2 * Math.PI * e.weight) / a),
              i = [];
            n = 0;
            let r = o[0] / 2;
            e.forEach((e, t) => {
              i.push(r), (r += o[t + 1]);
            }),
              (n = 0);
            while (1) {
              if (t < i[n]) break;
              if ((n++, n > i.length - 1)) break;
            }
          } else {
            const a = (2 * Math.PI) / e.length;
            n = Math.round(t / a);
          }
          return n >= e.length && (n = 0), n;
        }
        function G(e, t) {
          return !e || (t && "#ffffff" != t.toLowerCase())
            ? t || "#ffffff"
            : "#121212";
        }
        function q(e) {
          if (!e) return "#000000";
          let t = "#" === e.charAt(0) ? e.substring(1, 7) : e,
            n = parseInt(t.substring(0, 2), 16),
            a = parseInt(t.substring(2, 4), 16),
            o = parseInt(t.substring(4, 6), 16),
            i = [n / 255, a / 255, o / 255],
            r = i.map((e) =>
              e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)
            ),
            s = 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2];
          return s > 0.179 ? "#000000" : "#FFFFFF";
        }
        function H(e, t) {
          let n = parseInt(e.substring(1, 3), 16),
            a = parseInt(e.substring(3, 5), 16),
            o = parseInt(e.substring(5, 7), 16);
          (n = parseInt((n * (100 + t)) / 100)),
            (a = parseInt((a * (100 + t)) / 100)),
            (o = parseInt((o * (100 + t)) / 100)),
            (n = n < 255 ? Math.round(n) : 255),
            (a = a < 255 ? Math.round(a) : 255),
            (o = o < 255 ? Math.round(o) : 255);
          const i =
              1 == n.toString(16).length
                ? "0" + n.toString(16)
                : n.toString(16),
            r =
              1 == a.toString(16).length
                ? "0" + a.toString(16)
                : a.toString(16),
            s =
              1 == o.toString(16).length
                ? "0" + o.toString(16)
                : o.toString(16);
          return "#" + i + r + s;
        }
        function Z(e) {
          return JSON.parse(JSON.stringify(e));
        }
        function Y(e) {
          return new Promise((t) => setTimeout(t, e));
        }
        function J(e, t) {
          return K($(e), t);
        }
        function K(e, t, n = Date.now()) {
          if (!e) return "-";
          t || (t = "en");
          const a = Math.floor((n - e) / 1e3),
            o = [
              Math.floor(a / 31536e3),
              Math.floor(a / 2592e3),
              Math.floor(a / 604800),
              Math.floor(a / 86400),
              Math.floor(a / 3600),
              Math.floor(a / 60),
              a,
            ],
            i = ["year", "month", "week", "day", "hour", "minute", "second"],
            r = new Intl.RelativeTimeFormat(t, { numeric: "auto" });
          for (const s in o) if (o[s] >= 1) return r.format(-o[s], i[s]);
          return "moments ago";
        }
        function $(e) {
          return e && e._seconds
            ? 1e3 * e._seconds
            : e && e.seconds
            ? 1e3 * e.seconds
            : e && Number.isInteger(e)
            ? e
            : void 0;
        }
        function Q(e) {
          if (te(e)) return "$ " + e.toFixed(2);
        }
        function X(e) {
          if ((e || 0 == e) && e.toLocaleString) return e.toLocaleString();
        }
        function ee(e) {
          return te(e) && e >= 0 ? Math.round(100 * e) + " %" : "?";
        }
        function te(e) {
          return Number.isFinite(e);
        }
        function ne() {
          return window.location !== window.parent.location;
        }
        function ae(e) {
          const t = "v1";
          return location.host.startsWith("localhost")
            ? `http://localhost:8081/api/${t}/${e}`
            : `/api/${t}/${e}`;
        }
        function oe(e) {
          const t = ["spin-only", "copyable", "gallery"];
          return t.includes(e);
        }
      },
      71998: (e, t, n) => {
        n.d(t, { Z: () => o });
        n(40702), n(18964);
        var a = n(16707);
        class o {
          constructor(e) {
            (this.title = ""),
              (this.description = ""),
              (this.entries = [
                { text: "Ali" },
                { text: "Beatriz" },
                { text: "Charles" },
                { text: "Diya" },
                { text: "Eric" },
                { text: "Fatima" },
                { text: "Gabriel" },
                { text: "Hanna" },
              ]),
              (this.colorSettings = [
                { color: "#3369E8", enabled: !0 },
                { color: "#D50F25", enabled: !0 },
                { color: "#E0E101", enabled: !0 },
                { color: "#009925", enabled: !0 },
                { color: "#000000", enabled: !1 },
                { color: "#000000", enabled: !1 },
              ]),
              (this.pageBackgroundColor = "#FFFFFF"),
              (this.type = "color"),
              (this.pictureType = "none"),
              (this.coverImageType = ""),
              (this.coverImageName = ""),
              (this.galleryPicture = "/images/none.png"),
              (this.customPictureName = ""),
              (this.customPictureDataUri = ""),
              (this.customCoverImageDataUri = ""),
              (this.centerText = ""),
              (this.allowDuplicates = !0),
              (this.duringSpinSound = "ticking-sound"),
              (this.duringSpinSoundVolume = 50),
              (this.afterSpinSound = "applause-sound-soft"),
              (this.afterSpinSoundVolume = 50),
              (this.maxNames = 1e3),
              (this.spinTime = 10),
              (this.playCheers = !0),
              (this.launchConfetti = !0),
              (this.animateWinner = !1),
              (this.autoRemoveWinner = !1),
              (this.displayWinnerDialog = !0),
              (this.displayRemoveButton = !0),
              (this.displayHideButton = !0),
              (this.winnerMessage = e || "We have a winner!"),
              (this.playClickWhenWinnerRemoved = !1),
              (this.hubSize = "S"),
              (this.drawOutlines = !1),
              (this.slowSpin = !1),
              (this.showTitle = !0),
              (this.isAdvanced = !1);
          }
          loadJson(e) {
            try {
              let t = JSON.parse(e);
              t.entries.length > 0 && this.copyPropertiesFrom(t);
            } catch (t) {
              console.error(t);
            }
          }
          getJson() {
            var e = Object.keys(this),
              t = {};
            return (
              e.forEach((e) => {
                t[e] = this[e];
              }),
              JSON.stringify(t)
            );
          }
          getValues() {
            return JSON.parse(this.getJson());
          }
          loadValues(e) {
            this.copyPropertiesFrom(e);
          }
          clone() {
            const e = new o();
            return e.loadValues(this.getValues()), e;
          }
          hasOnlyDefaultEntries() {
            return a.arraysEqual(this.getTexts(), new o().getTexts());
          }
          setUploadedCenterImage(e, t) {
            (this.customPictureName = e),
              (this.customPictureDataUri = t),
              (this.pictureType = "uploaded"),
              (this.centerText = "");
          }
          setUploadedBackgroundImage(e, t) {
            (this.coverImageName = e),
              (this.customCoverImageDataUri = t),
              (this.coverImageType = "uploaded");
          }
          setGalleryBackgroundImage(e) {
            (this.coverImageType = "gallery"), (this.coverImageName = e);
          }
          setGalleryCenterImage(e) {
            (this.centerText = ""),
              (this.pictureType = "gallery"),
              (this.galleryPicture = e),
              (this.customPictureName = ""),
              (this.customPictureDataUri = "");
          }
          getWheelImage() {
            return "none" == this.pictureType
              ? "/images/none.png"
              : "gallery" == this.pictureType && this.galleryPicture
              ? this.galleryPicture
              : ("uploaded" != this.pictureType &&
                  "text" != this.pictureType) ||
                !this.customPictureDataUri
              ? null
              : this.customPictureDataUri;
          }
          getCoverImage() {
            return "gallery" == this.coverImageType && this.coverImageName
              ? this.coverImageName
              : "uploaded" == this.coverImageType &&
                this.customCoverImageDataUri
              ? this.customCoverImageDataUri
              : null;
          }
          shouldPlayTicks() {
            return "ticking-sound" == this.duringSpinSound;
          }
          setColorValues(e) {
            if (e) {
              this.colorSettings = e.map((e) => ({ color: e, enabled: !0 }));
              while (this.colorSettings.length < 6)
                this.colorSettings.push({ color: "#000000", enabled: !1 });
            }
          }
          getCoalescedColors() {
            const e = this.colorSettings
              .filter((e) => e.enabled)
              .map((e) => e.color);
            return e.length > 0 ? e : ["#CCCCCC"];
          }
          isTooBigForDatabase() {
            return this.getJson().length > 99e4;
          }
          getTexts() {
            return this.entries.map((e) => e.text).filter((e) => e);
          }
          getFirstText() {
            const e = this.getTexts();
            return e.length > 0 ? e[0] : "";
          }
          copyPropertiesFrom(e) {
            Object.assign(this, JSON.parse(JSON.stringify(e))),
              this.convertOldData();
          }
          usesAdvancedFeatures() {
            for (const [e, t] of this.entries.entries()) {
              if (t.color != this.getDefaultEntryColor(e)) return !0;
              if (t.hasOwnProperty("weight") && 1 != t.weight) return !0;
              if (t.hasOwnProperty("enabled") && !1 === t.enabled) return !0;
              if (t.hasOwnProperty("sound")) return !0;
              if (t.hasOwnProperty("message")) return !0;
            }
            return !1;
          }
          getDefaultEntryColor(e) {
            const t = this.getCoalescedColors();
            return t[e % t.length];
          }
          convertOldData() {
            Array.isArray(this.names) &&
              ((this.entries = this.names.map((e) =>
                a.createEntry(a.extractText(e), a.extractImage(e))
              )),
              delete this.names),
              (this.maxNames = parseInt(this.maxNames)),
              (this.spinTime = parseInt(this.spinTime)),
              !1 === this.playTicks && (this.duringSpinSound = "no-sound"),
              delete this.playTicks,
              !1 === this.playCheers && (this.afterSpinSound = "no-sound"),
              delete this.playCheers,
              this.hasOwnProperty("showTitle") || (this.showTitle = !0),
              "image" != this.type ||
                this.coverImageType ||
                (this.coverImageType = "gallery"),
              this.isAdvanced &&
                this.entries.length > 0 &&
                (this.entries[0].hasOwnProperty("enabled") ||
                  this.entries.forEach((e) => {
                    e.enabled = !0;
                  })),
              this.entries.forEach((e) => {
                e.text && (e.text = e.text.replace("\n", "").replace("\r", ""));
              }),
              a.addIdsIfNotThere(this.entries),
              (this.entries = this.entries.filter(
                (e) => e.text || e.image || e.color
              ));
          }
          removeImages() {
            for (const t of this.entries)
              if (t.hasOwnProperty("image")) {
                var e;
                if (null === (e = t.text) || void 0 === e || !e.trim())
                  return !1;
                delete t.image;
              }
            return (
              "image" === this.type && (this.type = "color"),
              (this.customPictureDataUri = ""),
              (this.customCoverImageDataUri = ""),
              !0
            );
          }
        }
      },
      26263: (e) => {
        e.exports = JSON.parse(
          '{"advancededitor":{"Add entry":"Add entry","Color":"Color","Duplicate":"Duplicate","Entry":"Entry","Image attached":"Image attached","Inherit from wheel":"Inherit from wheel","No entries":"No entries","Not shown on the wheel":"Not shown on the wheel","Popup message":"Popup message","Probability":"Probability","Shown on the wheel":"Shown on the wheel","Text":"Text","Visible":"Visible","Weight":"Weight"},"app":{"Ads":"Ads","An error occurred":"An error occurred. Refresh the web page with Ctrl+Shift+R (Windows, Linux, Chromebook) or Command+Shift+R (Mac) or swiping down (iPhone, Android).","Click here to report an inappropriate ad":"Click here to report an inappropriate ad.","Click the Language menu":"Click the menu in the upper right to switch to English","Close ad":"Close ad","Confirm":"Confirm","Copy this wheel":"Copy this wheel","Create your own":"Create your own","Enter password":"Please enter the password","Error":"Error","Free and easy to use":"Free and easy to use spinner. Used by teachers and for raffles. Enter names and spin the wheel to pick a random winner. Customize look and feel, save and share wheels.","Help me choose":"Help me choose","Incorrect password":"Sorry, that was not the correct password","Loaded default names and options":"Loaded default names and options","New version available":"New version available","Random name picker":"Random name picker","Removed":"Removed {name}","Removing winner in":"Removing winner in {seconds} seconds","Report bad ad":"Report bad ad","There is a new version":"There is a new version of the application. To complete your action, reload the page to get the new version and then try your action again. If that doesn\'t work, try using https://old.wheelofnames.com.","We try to display only legitimate and honest ads":"We try to display only legitimate and honest ads."},"appInfo":{"Go back to the old design":"Go back to the old design","Terms of service":"Terms & conditions","Version":"Version","You are looking at a preview":"You\'re looking at a preview of our upcoming redesign!"},"common":{"Cancel":"Cancel","Changelog":"Changelog","Close":"Close","Continue":"Continue","Customize":"Customize","Delete":"Delete","Edit":"Edit","Edit description":"Edit description","Edit title":"Edit title","Edit title and description":"Edit title and description","If you dont see a Google login button below":"If you don\'t see a Google login button below, it\'s probably because you are using an ad-blocker that mistakenly thinks the button is an ad.","Import Twitter users":"Import Twitter users","Link Google Spreadsheet":"Link Google Spreadsheet","Load more":"Load more","Log in":"Log in","My account":"My account","OK":"OK","Open":"Open","Please choose your sign-in method":"Please choose your sign-in method below.","Privacy policy":"Privacy policy","Reload":"Reload","Report offensive content":"Report offensive content","Save":"Save","Search":"Search","Undo":"Undo","Use this in the classroom":"Use this in the classroom","We have a winner!":"We have a winner!","Wheel description":"Wheel description","Wheel title":"Wheel title"},"gallery":{"Spin this wheel":"Spin this wheel","views":"{readCount} views","wheels were found":"{resultCount} wheels were found.","You can add your own wheels":"You can add your own wheels to this gallery by clicking \\"Share\\" on the main page."},"languagedialog":{"All languages":"All languages","Suggested languages":"Suggested languages"},"nameTabs":{"Clear the list":"Clear the list","Entries":"Entries","Hide":"Hide","Results":"Results"},"opendialog":{"Are you sure":"Are you sure you want to delete \\"{wheelTitle}\\"? This action cannot be undone.","Delete wheel":"Delete wheel","No wheels found":"No wheels found in your account. Try saving a wheel!","Open a local file":"Open a local file","Open a local file instead":"Open a local file instead","Open from the cloud (recommended)":"Open from the cloud (recommended)","Open wheel":"Open wheel"},"optionsdialog":{"Adjust colors on the wheel":"Adjust colors on the wheel?","After spin":"After spin","All names in the text-box":"All names in the text-box have the same chance of winning, regardless of this value.","Animate winning entry":"Animate winning entry","Appearance":"Appearance","Apply a theme":"Apply a theme","Auto-remove winner after 5 seconds":"Auto-remove winner after 5 seconds","Background color":"Page background color","Center text":"Center text","Colors":"Colors","Colors tooltip":"Click the color swatches to modify them","Contours":"Contours","Custom":"Custom","Custom page background color":"Custom page background color is not visible in dark mode","Customize colors":"Customize colors","Disabled because the entries":"Disabled because the entries have unequal weights","Display duplicates":"Display duplicates","Display every entry":"Display every entry in the textbox as an entry on the wheel, even duplicates","Display Hide button":"Display the \\"Hide\\" button","Display popup with message:":"Display popup with message:","Display Remove button":"Display the \\"Remove\\" button","During spin":"During spin","From Gallery":"From gallery","Image":"Image","Image in the center of the wheel":"Image at the center of the wheel","Image size":"Image size","Launch confetti":"Launch confetti","Max names on wheel":"Max number of names visible on the wheel","No":"No","One color":"One color per section","Pick category":"Pick category","Pick theme":"Pick theme","Play click sound when the winner is removed":"Play a click sound when the winner is removed","Remove image":"Remove the image","Select a gallery picture":"Select a gallery picture","Show title":"Show title","Sound":"Sound","Spin slowly":"Spin slowly","Spin time (seconds)":"Spin time (seconds)","Text":"Text","Upload image":"Upload image","Volume":"Volume","Wheel background image":"Wheel background image","Yes":"Yes","Your image has been uploaded":"Your image \\"{fileName}\\" has been uploaded successfully. Would you like to use the prominent colors from this image for the sectors of your wheel?"},"profiledropdown":{"Are you sure you want to delete your account":"Are you sure you want to delete your account and all your saved wheels? This action cannot be undone.","Delete account":"Delete account","Delete my account":"Delete my account","Export my data":"Export my data","Sign out":"Sign out","Signed in as":"Signed in as {name}","Your account and your saved wheels have been deleted":"Your account and your saved wheels have been deleted"},"savedialog":{"File name":"File name","Save as":"Save as","Save to a local file":"Save to a local file","Save to a local file instead":"Save to a local file instead","Save to the cloud (recommended)":"Save to the cloud (recommended)","Save to the cloud instead":"Save to the cloud instead","Save wheel":"Save wheel","Save wheel to the cloud":"Save wheel to the cloud","Select a wheel":"Select a wheel","Sorry, too many images":"Sorry, this wheel has too many images to be saved in the database. Reduce the number of images and try saving again.","Wheel saved successfully":"Wheel \\"{wheelTitle}\\" saved successfully","You are about to overwrite":"You are about to overwrite an existing wheel. Are you sure you want to continue?","You will always be able to access":"You will always be able to access your saved wheels so long as you open or save any wheel at least once every 12 months.","Your existing wheels":"Your existing wheels"},"sharedialog":{"Anyone can see the wheel in the upcoming public gallery":"Anyone can see the wheel in the upcoming public gallery and create their own copy","Anyone who knows the password":"Anyone who knows the password","Anyone with the link":"Anyone with the link","Anyone with the link can spin the wheel":"Anyone with the link can spin the wheel","Anyone with the link can spin the wheel and create their own copy":"Anyone with the link can spin the wheel and create their own copy","Broadcast spins and edits":"Broadcast spins and edits to anyone watching the wheel","Copy link":"Copy link","Created":"Created","Gallery wheels require a title":"Gallery wheels require a title","If you continue":"If you continue, you will create a public link to your current wheel, including its names, colors and settings.","Last viewed":"Last viewed","Link":"Link","Link copied to the clipboard":"Link copied to the clipboard","Link to this wheel":"Link to this wheel with current names, colors and settings:","My shared wheels":"My shared wheels","No wheels found":"No shared wheels found in your account. Try sharing a wheel!","Only me":"Only me","Only wheels shared after":"Only wheels shared after July 12th, 2021 will appear in this list.","Password":"Password","Public":"Public","See my shared wheels":"See my shared wheels","Shareable link":"Shareable link","Show title to people":"Show the title to people who use your shared link","Sorry, too many images":"Sorry, this wheel has too many images to be shared. Reduce the number of images and try saving again.","The wheel includes text that":"The wheel includes text that isn\'t family-friendly. Please adjust it and try again.","They should be able to spin the wheel and":"They should be able to spin the wheel and make a copy of it","They should only be able to spin the wheel":"They should only be able to spin the wheel","This link will work for anyone":"This link will work for anyone and you can share it by email, website, social media, etc. Unused links will be deleted after 365 days.","This wheel would be useful":"This wheel would be useful to the Pop It Wheel community and should appear in the public gallery","Unlisted":"Unlisted","Unlisted (spin-only)":"Unlisted (spin-only)","Visibility":"Visibility","Visits":"Views","We want this website to be safe place for everyone":"We want this website to be a safe place for everyone. Wheels that aren\'t family-friendly and that violate the terms of service will be deleted.","What should a person be able to do":"What should a person be able to do when they use your shared link?","Who can spin and edit the wheel":"Who should be able to spin and edit the wheel?","You are about to publish your wheel to the public gallery":"You are about to publish your wheel to the public gallery. Anyone in the world will be able to view your wheel. Please make sure it doesn\'t contain personal information, such as names. Are you sure you want to continue?","Your wheel must have a title":"Your wheel must have a title"},"sheetdialog":{"added":"{entry} added","Column":"Column","entries added":"{count} entries added","First row":"First row","Is a header and should not be imported":"Is a header and should not be imported","Link sheet":"Link sheet","Select a column":"Select a column","Select a tab":"Select a tab","Selected spreadsheet":"Selected spreadsheet","Tab":"Tab","To import sheets":"To import sheets you need to log in to your Google account. Why? Google needs to know who you are, so they can let you pick one of your spreadsheets.","When you link a spreadsheet":"When you link a spreadsheet, the wheel will contain the same entries as the spreadsheet. If rows are added or deleted in the spreadsheet, entries are automatically added to or removed from the wheel. The connection will close after one hour."},"sounds":{"Alarm clock":"Alarm clock","Angel choir":"Angel choir","Announcement bell":"Announcement bell","Applause":"Loud applause","Basketball buzzer":"Basketball buzzer","Bell ringing":"Bell ringing","Bird chirps":"Bird chirps","Boing":"Boing","Boing 2":"Boing 2","Carnival shout":"Carnival shout","Cartoon whistle":"Cartoon whistle","Cat meow":"Cat meow","Childrens hooray":"Children\'s hooray","Cinematic drum impact":"Cinematic drum impact","Cinematic music":"Cinematic music","Correct answer ding":"Correct answer ding","Crash":"Crash","Cymbals":"Cymbals","Dog bark":"Dog bark","Drum roll":"Drum roll","Easy listening":"Easy listening","Evil laugh":"Evil laugh","Fanfare":"Fanfare","Fireworks":"Fireworks","Game win ding":"Game win ding","Ghost":"Ghost","Hooray":"Hooray","Horror scream":"Horror scream","Horse":"Horse","Joke punchline":"Joke punchline","Lion roar":"Lion roar","Lost game":"Lost game","Microwave ding":"Microwave ding","Military trumpet":"Military trumpet","Mystery bell":"Mystery bell","No sound":"No sound","Notification bell":"Notification bell","Old phone ringing":"Old phone ringing","Pan flute":"Pan flute","Pop music":"Pop music","Random 8-Bit":"Random 8-Bit","Random ballroom dancing":"Random ballroom dancing","Random cinematic music":"Random cinematic music","Random dance & techno":"Random dance & techno","Random disco":"Random disco","Random easy listening":"Random easy listening","Random electronica":"Random electronica","Random folk music":"Random folk music","Random funk":"Random funk","Random hip hop":"Random hip hop","Random music":"Random music","Random polka":"Random polka","Random pop music":"Random pop music","Random reggae & reggaeton":"Random reggae & reggaeton","Random retro-rock":"Random retro-rock","Random rock music":"Random rock music","Random rockabilly":"Random rockabilly","Random silent film score":"Random silent film score","Random winter holidays":"Random winter holiday music","Random world music":"Random world music","Read out the winning name":"Read out the winning name","Read out the winning name (option 1)":"Read out the winning name (option 1)","Read out the winning name (option 2)":"Read out the winning name (option 2)","Referee whistle":"Referee whistle","Rock music":"Rock music","Sad trombone":"Sad trombone","Silent film score":"Silent film score","Sound effects":"Sound effects","Subdued applause":"Subdued applause","Swoosh ding":"Swoosh ding","Synth bell":"Synth bell","Taiko drum":"Taiko drum","Thunder":"Thunder","Ticking sound":"Ticking sound","Twinkling star":"Twinkling star","Water splash":"Water splash","Winter holidays":"Winter holiday music","Wolf howl":"Wolf howl","World music":"World music","Xylophone ascending":"Xylophone ascending"},"spinningwheel":{"Click to spin":"Click to spin","or press ctrl+enter":"or press ctrl+enter","Tap to spin":"Tap to spin"},"textboxbuttons":{"Add background image":"Add background image","Add center image":"Add center image","Add image":"Add image","Add image as entry":"Add image as entry","Advanced":"Advanced","Are you sure you want to switch to advanced":"Are you sure you want to switch to advanced mode? Advanced mode provides more customization, but you cannot paste in several entries at once. You can always switch back by unchecking the \\"Advanced\\" checkbox.","Revert from advanced":"Revert","Reverting will reset":"If you revert from advanced mode you may lose some colors. Are you sure you want to continue?","Shuffle":"Shuffle","Sort":"Sort","Updated the wheel background image":"Updated the wheel background image","Updated the wheel center image":"Updated the wheel center image"},"toolbar":{"Add your language":"Add your language","Dark mode":"Dark mode","Exit fullscreen":"Exit fullscreen","FAQ":"FAQ","Feedback":"Feedback","Fullscreen":"Fullscreen","Gallery":"Gallery","Language":"Language","More":"More","New":"New","Offline mode":"Offline mode","Please enter your email address":"Please enter your email address to continue","Send debug data":"Send debug data","Share":"Share","Unlink Google Spreadsheet":"Unlink Google Spreadsheet","User reviews and tutorials":"User reviews and tutorials","Your session is now being recorded":"Your session is now being recorded. You can stop the recording by closing your browser window."},"twitterdialog":{"Found Twitter users":"Found {userCount} Twitter users who have tweeted about \\"{term}\\" recently","Hashtag, like #gdg":"Search query","This search will fetch":"This search will fetch the users who have tweeted recently using the search term above. The most recent 600 tweets are considered and no tweet older than 24 hours is included. Twitter user names will start with \\"{\'@\'}\\"."},"unsplashdialog":{"Search the gallery":"Search the gallery"},"winnerdialog":{"Hide":"Hide","Remove":"Remove","Remove all instances":"Remove all instances"}}'
        );
      },
    },
    t = {};
  function n(a) {
    var o = t[a];
    if (void 0 !== o) return o.exports;
    var i = (t[a] = { id: a, loaded: !1, exports: {} });
    return e[a].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
  }
  (n.m = e),
    (() => {
      n.amdD = function () {
        throw new Error("define cannot be used indirect");
      };
    })(),
    (() => {
      var e = [];
      n.O = (t, a, o, i) => {
        if (!a) {
          var r = 1 / 0;
          for (h = 0; h < e.length; h++) {
            for (var [a, o, i] = e[h], s = !0, l = 0; l < a.length; l++)
              (!1 & i || r >= i) && Object.keys(n.O).every((e) => n.O[e](a[l]))
                ? a.splice(l--, 1)
                : ((s = !1), i < r && (r = i));
            if (s) {
              e.splice(h--, 1);
              var c = o();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        i = i || 0;
        for (var h = e.length; h > 0 && e[h - 1][2] > i; h--) e[h] = e[h - 1];
        e[h] = [a, o, i];
      };
    })(),
    (() => {
      n.n = (e) => {
        var t = e && e.__esModule ? () => e["default"] : () => e;
        return n.d(t, { a: t }), t;
      };
    })(),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (a, o) {
        if ((1 & o && (a = this(a)), 8 & o)) return a;
        if ("object" === typeof a && a) {
          if (4 & o && a.__esModule) return a;
          if (16 & o && "function" === typeof a.then) return a;
        }
        var i = Object.create(null);
        n.r(i);
        var r = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & o && a;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach((e) => (r[e] = () => a[e]));
        return (r["default"] = () => a), n.d(i, r), i;
      };
    })(),
    (() => {
      n.d = (e, t) => {
        for (var a in t)
          n.o(t, a) &&
            !n.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      };
    })(),
    (() => {
      (n.f = {}),
        (n.e = (e) =>
          Promise.all(
            Object.keys(n.f).reduce((t, a) => (n.f[a](e, t), t), [])
          ));
    })(),
    (() => {
      n.u = (e) =>
        "js/" +
        ({
          51: "ApiPage",
          121: "locales/bg-BG",
          170: "locales/hr-HR",
          328: "locales/cs-CZ",
          335: "ClassroomPage",
          535: "locales/uk-UA",
          623: "locales/lv-LV",
          1081: "locales/zh-HK",
          1138: "locales/ru-RU",
          1191: "locales/nb-NO",
          1206: "locales/mk-MK",
          1326: "firebase",
          1424: "locales/lo-LA",
          1510: "AdminPages",
          1573: "locales/ja-JP",
          1626: "locales/sv-SE",
          2077: "locales/ms-MY",
          2265: "EditWheelPage",
          2362: "locales/ka-GE",
          2450: "locales/pt-PT",
          2748: "MyWheelsPage",
          2830: "locales/kk-KZ",
          2937: "locales/cy-GB",
          2977: "locales/vi-VN",
          3064: "chunk-common",
          3218: "locales/az-Latn-AZ",
          3279: "locales/ur-PK",
          3561: "TranslationPage",
          3650: "locales/ar-EG",
          3662: "locales/pl-PL",
          3734: "GalleryPage",
          3749: "locales/et-EE",
          4375: "locales/ca-ES",
          4419: "locales/kn-IN",
          4451: "vibrant",
          4574: "locales/de-DE",
          4594: "locales/gu-IN",
          4756: "PrivacyPolicyPage",
          4852: "locales/fr-FR",
          4906: "locales/pa-IN",
          5060: "locales/ml-IN",
          5089: "FaqPage",
          5284: "locales/am-ET",
          5468: "locales/bs-Latn-BA",
          5728: "locales/tr-TR",
          5771: "locales/el-GR",
          5889: "locales/id-ID",
          5980: "TutorialsPage",
          6385: "locales/my-MM",
          6448: "locales/bn-IN",
          6483: "locales/zh-CN",
          6496: "locales/fa-IR",
          6561: "locales/sr-Latn-RS",
          6589: "locales/he-IL",
          6627: "locales/fil-PH",
          6739: "ChangelogPage",
          6766: "locales/hy-AM",
          6818: "locales/hi-IN",
          6895: "locales/hu-HU",
          6918: "locales/da-DK",
          7026: "locales/th-TH",
          7657: "locales/ro-RO",
          8102: "locales/ko-KR",
          8280: "locales/is-IS",
          8362: "locales/nl-NL",
          8399: "locales/ta-IN",
          8426: "ExportPage",
          8624: "locales/gl-ES",
          8691: "locales/mn-MN",
          8895: "locales/sq-AL",
          9133: "locales/fi-FI",
          9170: "locales/sl-SI",
          9348: "locales/lt-LT",
          9437: "SharedWheelPage",
          9489: "locales/en-PI",
          9795: "locales/es-ES",
          9906: "locales/it-IT",
        }[e] || e) +
        "-v281.js";
    })(),
    (() => {
      n.miniCssF = (e) =>
        "css/" +
        {
          51: "ApiPage",
          1510: "AdminPages",
          2265: "EditWheelPage",
          3734: "GalleryPage",
          4756: "PrivacyPolicyPage",
          5089: "FaqPage",
          6739: "ChangelogPage",
          8426: "ExportPage",
          9437: "SharedWheelPage",
        }[e] +
        "-v281.css";
    })(),
    (() => {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (() => {
      n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    })(),
    (() => {
      var e = {},
        t = "wheel-of-names-quasar:";
      n.l = (a, o, i, r) => {
        if (e[a]) e[a].push(o);
        else {
          var s, l;
          if (void 0 !== i)
            for (
              var c = document.getElementsByTagName("script"), h = 0;
              h < c.length;
              h++
            ) {
              var u = c[h];
              if (
                u.getAttribute("src") == a ||
                u.getAttribute("data-webpack") == t + i
              ) {
                s = u;
                break;
              }
            }
          s ||
            ((l = !0),
            (s = document.createElement("script")),
            (s.charset = "utf-8"),
            (s.timeout = 120),
            n.nc && s.setAttribute("nonce", n.nc),
            s.setAttribute("data-webpack", t + i),
            (s.src = a)),
            (e[a] = [o]);
          var d = (t, n) => {
              (s.onerror = s.onload = null), clearTimeout(m);
              var o = e[a];
              if (
                (delete e[a],
                s.parentNode && s.parentNode.removeChild(s),
                o && o.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            m = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = d.bind(null, s.onerror)),
            (s.onload = d.bind(null, s.onload)),
            l && document.head.appendChild(s);
        }
      };
    })(),
    (() => {
      n.r = (e) => {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (() => {
      n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e);
    })(),
    (() => {
      n.p = "/";
    })(),
    (() => {
      if ("undefined" !== typeof document) {
        var e = (e, t, n, a, o) => {
            var i = document.createElement("link");
            (i.rel = "stylesheet"), (i.type = "text/css");
            var r = (n) => {
              if (((i.onerror = i.onload = null), "load" === n.type)) a();
              else {
                var r = n && ("load" === n.type ? "missing" : n.type),
                  s = (n && n.target && n.target.href) || t,
                  l = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + s + ")"
                  );
                (l.code = "CSS_CHUNK_LOAD_FAILED"),
                  (l.type = r),
                  (l.request = s),
                  i.parentNode.removeChild(i),
                  o(l);
              }
            };
            return (
              (i.onerror = i.onload = r),
              (i.href = t),
              n
                ? n.parentNode.insertBefore(i, n.nextSibling)
                : document.head.appendChild(i),
              i
            );
          },
          t = (e, t) => {
            for (
              var n = document.getElementsByTagName("link"), a = 0;
              a < n.length;
              a++
            ) {
              var o = n[a],
                i = o.getAttribute("data-href") || o.getAttribute("href");
              if ("stylesheet" === o.rel && (i === e || i === t)) return o;
            }
            var r = document.getElementsByTagName("style");
            for (a = 0; a < r.length; a++) {
              (o = r[a]), (i = o.getAttribute("data-href"));
              if (i === e || i === t) return o;
            }
          },
          a = (a) =>
            new Promise((o, i) => {
              var r = n.miniCssF(a),
                s = n.p + r;
              if (t(r, s)) return o();
              e(a, s, null, o, i);
            }),
          o = { 2143: 0 };
        n.f.miniCss = (e, t) => {
          var n = {
            51: 1,
            1510: 1,
            2265: 1,
            3734: 1,
            4756: 1,
            5089: 1,
            6739: 1,
            8426: 1,
            9437: 1,
          };
          o[e]
            ? t.push(o[e])
            : 0 !== o[e] &&
              n[e] &&
              t.push(
                (o[e] = a(e).then(
                  () => {
                    o[e] = 0;
                  },
                  (t) => {
                    throw (delete o[e], t);
                  }
                ))
              );
        };
      }
    })(),
    (() => {
      var e = { 2143: 0 };
      (n.f.j = (t, a) => {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) a.push(o[2]);
          else {
            var i = new Promise((n, a) => (o = e[t] = [n, a]));
            a.push((o[2] = i));
            var r = n.p + n.u(t),
              s = new Error(),
              l = (a) => {
                if (n.o(e, t) && ((o = e[t]), 0 !== o && (e[t] = void 0), o)) {
                  var i = a && ("load" === a.type ? "missing" : a.type),
                    r = a && a.target && a.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = r),
                    o[1](s);
                }
              };
            n.l(r, l, "chunk-" + t, t);
          }
      }),
        (n.O.j = (t) => 0 === e[t]);
      var t = (t, a) => {
          var o,
            i,
            [r, s, l] = a,
            c = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (o in s) n.o(s, o) && (n.m[o] = s[o]);
            if (l) var h = l(n);
          }
          for (t && t(a); c < r.length; c++)
            (i = r[c]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(h);
        },
        a = (globalThis["webpackChunkwheel_of_names_quasar"] =
          globalThis["webpackChunkwheel_of_names_quasar"] || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
  var a = n.O(void 0, [4736], () => n(67535));
  a = n.O(a);
})();
