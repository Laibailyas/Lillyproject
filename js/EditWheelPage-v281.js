"use strict";
(globalThis["webpackChunkwheel_of_names_quasar"] =
  globalThis["webpackChunkwheel_of_names_quasar"] || []).push([
    [2265],
    {
      50540: (e, l, a) => {
        a.r(l), a.d(l, { default: () => vo });
        a(40702), a(18964), a(66204), a(46727);
        var t = a(59835),
          n = a(60499),
          o = a(61957),
          i = a(86970),
          s = a(21049),
          u = a(18910),
          c = a(19302),
          r = a(78110),
          d = a(3967),
          m = a(73295),
          p = a(16707),
          w = a(72788);
        const h = {
          emits: ["open-languages"],
          setup(e, { emit: l }) {
            const { locale: a } = (0, r.QT)(),
              o = (0, t.Fl)(() => {
                var e;
                return null === (e = w.NB().find((e) => e.name == a.value)) ||
                  void 0 === e
                  ? void 0
                  : e.humanName;
              });
            return (e, a) => {
              const i = (0, t.up)("q-btn");
              return (
                (0, t.wg)(),
                (0, t.j4)(
                  i,
                  {
                    stretch: "",
                    flat: "",
                    "no-caps": "",
                    icon: "fas fa-globe",
                    label: (0, n.SU)(o),
                    "aria-label": "Language",
                    onClick: a[0] || (a[0] = (e) => l("open-languages")),
                  },
                  null,
                  8,
                  ["label"]
                )
              );
            };
          },
        };
        var f = a(68879),
          v = a(69984),
          g = a.n(v);
        const k = h,
          W = k;
        g()(h, "components", { QBtn: f.Z });
        const y = (0, t._)(
          "img",
          {
            width: "38",
            height: "38",
            src: "/images/logo-dark-background-38.png",
          },
          null,
          -1
        ),
          _ = (0, t._)("span", { class: "desktop-only" }, " ", -1),
          S = {
            emits: [
              "reset-wheel",
              "open-wheel",
              "save-wheel",
              "share-wheel",
              "customize-wheel",
              "link-sheet",
              "open-account-dialog",
              "open-languages",
            ],
            setup(e, { emit: l }) {
              const a = (0, s.oR)(),
                d = (0, u.tv)(),
                { t: m, locale: w } = (0, r.QT)(),
                h = (0, c.Z)(),
                f = "Pop It Wheel",
                v = (0, t.Fl)(() => "/" + (0, p.getNonEnglishLocale)(w.value)),
                g = (0, t.Fl)(() => h.fullscreen.isActive),
                k = (0, t.Fl)(() => a.getters.wheelIsBusy),
                S = (0, t.Fl)(() => a.getters.sheetLinked),
                U = (0, t.Fl)(() => !g.value && !S.value),
                b = (0, t.Fl)(() => !S.value),
                C = (0, t.Fl)(() => !g.value),
                q = (0, t.Fl)(() => !g.value),
                Z = (0, t.Fl)(() => !g.value),
                x = (0, t.Fl)(() => !g.value),
                Q = (0, t.Fl)(() => !g.value && S.value),
                D = (0, t.Fl)(() => !g.value),
                z = (0, t.Fl)(() => !g.value);
              function V() {
                h.fullscreen.isActive
                  ? (0, p.trackEvent)("Wheel", "ExitFullscreen")
                  : (0, p.trackEvent)("Wheel", "EnterFullscreen"),
                  h.fullscreen.toggle();
              }
              function E() {
                h.dark.toggle(),
                  h.dark.isActive
                    ? (0, p.trackEvent)("Wheel", "EnterDarkMode")
                    : (0, p.trackEvent)("Wheel", "EnterLightMode"),
                  a.commit("setDarkMode", h.dark.isActive);
              }
              function F() {
                const e = a.getters.version,
                  l = (0, p.getFeedbackFormUrl)(navigator.userAgent, e);
                window.open(l, "_new");
              }
              function T(e) {
                l("open-wheel");
              }
              function H(e) {
                l("save-wheel");
              }
              function L(e) {
                l("reset-wheel");
              }
              return (e, s) => {
                const u = (0, t.up)("q-avatar"),
                  c = (0, t.up)("q-toolbar-title"),
                  r = (0, t.up)("q-btn"),
                  p = (0, t.up)("q-space"),
                  w = (0, t.up)("q-tooltip"),
                  h = (0, t.up)("q-icon"),
                  S = (0, t.up)("q-item-section"),
                  A = (0, t.up)("q-item-label"),
                  I = (0, t.up)("q-item"),
                  j = (0, t.up)("q-separator"),
                  R = (0, t.up)("q-list"),
                  B = (0, t.up)("q-btn-dropdown"),
                  O = (0, t.up)("q-menu"),
                  P = (0, t.up)("q-toolbar"),
                  N = (0, t.Q2)("close-popup");
                return (
                  (0, t.wg)(),
                  (0, t.j4)(
                    P,
                    { class: "q-pl-none" },
                    {
                      default: (0, t.w5)(() => [
                        (0, t.Wm)(
                          r,
                          {
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            onClick:
                              s[0] ||
                              (s[0] = (e) => (0, n.SU)(d).push((0, n.SU)(v))),
                          },
                          {
                            default: (0, t.w5)(() => [
                              (0, t.Wm)(c, null, {
                                default: (0, t.w5)(() => [
                                  (0, t.Wm)(
                                    u,
                                    { class: "desktop-only" },
                                    { default: (0, t.w5)(() => [y]), _: 1 }
                                  ),
                                  _,
                                  (0, t.Uk)(" " + (0, i.zw)((0, n.SU)(f)), 1),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }
                        ),
                        (0, t.Wm)(p),
                        (0, t.wy)(
                          (0, t.Wm)(
                            r,
                            {
                              class: "desktop-only",
                              stretch: "",
                              flat: "",
                              "no-caps": "",
                              disable: (0, n.SU)(k),
                              icon: "fas fa-file",
                              label: (0, n.SU)(m)("toolbar.New"),
                              "aria-label": "New",
                              onClick: L,
                            },
                            null,
                            8,
                            ["disable", "label"]
                          ),
                          [[o.F8, (0, n.SU)(U)]]
                        ),
                        (0, t.wy)(
                          (0, t.Wm)(
                            r,
                            {
                              class: "desktop-only",
                              stretch: "",
                              flat: "",
                              "no-caps": "",
                              disable: (0, n.SU)(k),
                              icon: "fa fa-folder-open",
                              label: (0, n.SU)(g)
                                ? ""
                                : (0, n.SU)(m)("common.Open"),
                              "aria-label": "Open",
                              onClick: T,
                            },
                            {
                              default: (0, t.w5)(() => [
                                (0, n.SU)(g)
                                  ? ((0, t.wg)(),
                                    (0, t.j4)(
                                      w,
                                      { key: 0 },
                                      {
                                        default: (0, t.w5)(() => [
                                          (0, t.Uk)(
                                            (0, i.zw)(
                                              (0, n.SU)(m)("common.Open")
                                            ),
                                            1
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ))
                                  : (0, t.kq)("", !0),
                              ]),
                              _: 1,
                            },
                            8,
                            ["disable", "label"]
                          ),
                          [[o.F8, (0, n.SU)(b)]]
                        ),
                        (0, t.wy)(
                          (0, t.Wm)(
                            r,
                            {
                              class: "desktop-only",
                              stretch: "",
                              flat: "",
                              "no-caps": "",
                              disable:
                                (0, n.SU)(k) || (0, n.SU)(a).getters.readOnlyMode,
                              icon: "fa fa-save",
                              label: (0, n.SU)(m)("common.Save"),
                              "aria-label": "Save",
                              onClick: H,
                            },
                            null,
                            8,
                            ["disable", "label"]
                          ),
                          [[o.F8, (0, n.SU)(C)]]
                        ),
                        (0, t.wy)(
                          (0, t.Wm)(
                            r,
                            {
                              class: "desktop-only",
                              stretch: "",
                              flat: "",
                              "no-caps": "",
                              disable:
                                (0, n.SU)(k) || (0, n.SU)(a).getters.readOnlyMode,
                              icon: "fa fa-share-alt",
                              label: (0, n.SU)(m)("toolbar.Share"),
                              "aria-label": "Share",
                              onClick: s[1] || (s[1] = (e) => l("share-wheel")),
                            },
                            null,
                            8,
                            ["disable", "label"]
                          ),
                          [[o.F8, (0, n.SU)(q)]]
                        ),
                        (0, t.wy)(
                          (0, t.Wm)(
                            r,
                            {
                              class: "desktop-only",
                              stretch: "",
                              flat: "",
                              "no-caps": "",
                              disable: (0, n.SU)(k),
                              icon: "fa fa-search",
                              label: (0, n.SU)(m)("toolbar.Gallery"),
                              "aria-label": "Gallery",
                              onClick:
                                s[2] ||
                                (s[2] = (e) => (0, n.SU)(d).push("/gallery")),
                            },
                            null,
                            8,
                            ["disable", "label"]
                          ),
                          [[o.F8, (0, n.SU)(Z)]]
                        ),
                        (0, t.wy)(
                          (0, t.Wm)(
                            r,
                            {
                              class: "desktop-only",
                              stretch: "",
                              flat: "",
                              "no-caps": "",
                              disable: (0, n.SU)(k),
                              icon: "fas fa-palette",
                              label: (0, n.SU)(m)("common.Customize"),
                              "aria-label": "Customize",
                              onClick:
                                s[3] || (s[3] = (e) => l("customize-wheel")),
                            },
                            null,
                            8,
                            ["disable", "label"]
                          ),
                          [[o.F8, (0, n.SU)(x)]]
                        ),
                        (0, t.Wm)(
                          r,
                          {
                            class: "desktop-only",
                            stretch: "",
                            flat: "",
                            "no-caps": "",
                            disable: (0, n.SU)(k),
                            "aria-label": "Fullscreen",
                            onClick: V,
                            icon: (0, n.SU)(g)
                              ? "fa fa-compress"
                              : "fa fa-expand",
                          },
                          {
                            default: (0, t.w5)(() => [
                              (0, n.SU)(g)
                                ? ((0, t.wg)(),
                                  (0, t.j4)(
                                    w,
                                    { key: 0 },
                                    {
                                      default: (0, t.w5)(() => [
                                        (0, t.Uk)(
                                          (0, i.zw)(
                                            (0, n.SU)(m)(
                                              "toolbar.Exit fullscreen"
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ))
                                : (0, t.kq)("", !0),
                              (0, n.SU)(g)
                                ? (0, t.kq)("", !0)
                                : ((0, t.wg)(),
                                  (0, t.j4)(
                                    w,
                                    { key: 1 },
                                    {
                                      default: (0, t.w5)(() => [
                                        (0, t.Uk)(
                                          (0, i.zw)(
                                            (0, n.SU)(m)("toolbar.Fullscreen")
                                          ),
                                          1
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  )),
                            ]),
                            _: 1,
                          },
                          8,
                          ["disable", "icon"]
                        ),
                        (0, t.wy)(
                          (0, t.Wm)(
                            r,
                            {
                              class: "desktop-only",
                              stretch: "",
                              flat: "",
                              "no-caps": "",
                              disable: (0, n.SU)(k),
                              icon: "fa fa-unlink",
                              label: (0, n.SU)(m)(
                                "toolbar.Unlink Google Spreadsheet"
                              ),
                              "aria-label": "Unlink Google Spreadsheet",
                              onClick:
                                s[4] ||
                                (s[4] = (e) =>
                                  (0, n.SU)(a).commit("unlinkSheet")),
                            },
                            null,
                            8,
                            ["disable", "label"]
                          ),
                          [[o.F8, (0, n.SU)(Q)]]
                        ),
                        (0, t.wy)(
                          (0, t.Wm)(
                            B,
                            {
                              class: "desktop-only",
                              stretch: "",
                              flat: "",
                              "no-caps": "",
                              disable: (0, n.SU)(k),
                              "aria-label": "More",
                              label: (0, n.SU)(m)("toolbar.More"),
                            },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(R, null, {
                                  default: (0, t.w5)(() => [
                                    (0, t.wy)(
                                      ((0, t.wg)(),
                                        (0, t.j4)(
                                          I,
                                          { clickable: "", onClick: F },
                                          {
                                            default: (0, t.w5)(() => [
                                              (0, t.Wm)(
                                                S,
                                                { side: "" },
                                                {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Wm)(h, {
                                                      name: "fa fa-comment",
                                                    }),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                              (0, t.Wm)(S, null, {
                                                default: (0, t.w5)(() => [
                                                  (0, t.Wm)(A, null, {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Uk)(
                                                        (0, i.zw)(
                                                          (0, n.SU)(m)(
                                                            "toolbar.Feedback"
                                                          )
                                                        ),
                                                        1
                                                      ),
                                                    ]),
                                                    _: 1,
                                                  }),
                                                ]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        )),
                                      [[N]]
                                    ),
                                    (0, t.Wm)(
                                      I,
                                      {
                                        clickable: "",
                                        onClick:
                                          s[5] ||
                                          (s[5] = (e) =>
                                            (0, n.SU)(d).push("/faq")),
                                      },
                                      {
                                        default: (0, t.w5)(() => [
                                          (0, t.Wm)(
                                            S,
                                            { side: "" },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(h, {
                                                  name: "fa fa-question-circle",
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, t.Wm)(S, null, {
                                            default: (0, t.w5)(() => [
                                              (0, t.Wm)(A, null, {
                                                default: (0, t.w5)(() => [
                                                  (0, t.Uk)(
                                                    (0, i.zw)(
                                                      (0, n.SU)(m)("toolbar.FAQ")
                                                    ),
                                                    1
                                                  ),
                                                ]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    (0, t.Wm)(
                                      I,
                                      {
                                        clickable: "",
                                        onClick:
                                          s[6] ||
                                          (s[6] = (e) =>
                                            (0, n.SU)(d).push(
                                              "/user-reviews-and-tutorials"
                                            )),
                                      },
                                      {
                                        default: (0, t.w5)(() => [
                                          (0, t.Wm)(
                                            S,
                                            { side: "" },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(h, {
                                                  name: "fab fa-youtube",
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, t.Wm)(S, null, {
                                            default: (0, t.w5)(() => [
                                              (0, t.Wm)(A, null, {
                                                default: (0, t.w5)(() => [
                                                  (0, t.Uk)(
                                                    (0, i.zw)(
                                                      (0, n.SU)(m)(
                                                        "toolbar.User reviews and tutorials"
                                                      )
                                                    ),
                                                    1
                                                  ),
                                                ]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    (0, t.Wm)(
                                      I,
                                      {
                                        clickable: "",
                                        onClick:
                                          s[7] ||
                                          (s[7] = (e) =>
                                            (0, n.SU)(d).push(
                                              "/how-to-use-in-the-classroom"
                                            )),
                                      },
                                      {
                                        default: (0, t.w5)(() => [
                                          (0, t.Wm)(
                                            S,
                                            { side: "" },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(h, {
                                                  name: "fas fa-chalkboard-teacher",
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, t.Wm)(S, null, {
                                            default: (0, t.w5)(() => [
                                              (0, t.Wm)(A, null, {
                                                default: (0, t.w5)(() => [
                                                  (0, t.Uk)(
                                                    (0, i.zw)(
                                                      (0, n.SU)(m)(
                                                        "common.Use this in the classroom"
                                                      )
                                                    ),
                                                    1
                                                  ),
                                                ]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    (0, t.Wm)(
                                      I,
                                      {
                                        clickable: "",
                                        onClick:
                                          s[8] ||
                                          (s[8] = (e) =>
                                            (0, n.SU)(d).push("/changelog")),
                                      },
                                      {
                                        default: (0, t.w5)(() => [
                                          (0, t.Wm)(
                                            S,
                                            { side: "" },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(h, {
                                                  name: "fas fa-list-alt",
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, t.Wm)(S, null, {
                                            default: (0, t.w5)(() => [
                                              (0, t.Wm)(A, null, {
                                                default: (0, t.w5)(() => [
                                                  (0, t.Uk)(
                                                    (0, i.zw)(
                                                      (0, n.SU)(m)(
                                                        "common.Changelog"
                                                      )
                                                    ),
                                                    1
                                                  ),
                                                ]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    (0, t.Wm)(
                                      I,
                                      {
                                        clickable: "",
                                        onClick:
                                          s[9] ||
                                          (s[9] = (e) =>
                                            (0, n.SU)(d).push("/privacy-policy")),
                                      },
                                      {
                                        default: (0, t.w5)(() => [
                                          (0, t.Wm)(
                                            S,
                                            { side: "" },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(h, {
                                                  name: "fas fa-user-secret",
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, t.Wm)(S, null, {
                                            default: (0, t.w5)(() => [
                                              (0, t.Wm)(A, null, {
                                                default: (0, t.w5)(() => [
                                                  (0, t.Uk)(
                                                    (0, i.zw)(
                                                      (0, n.SU)(m)(
                                                        "common.Privacy policy"
                                                      )
                                                    ),
                                                    1
                                                  ),
                                                ]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    (0, t.Wm)(
                                      I,
                                      {
                                        clickable: "",
                                        onClick:
                                          s[10] ||
                                          (s[10] = (e) =>
                                            (0, n.SU)(d).push("/faq/terms")),
                                      },
                                      {
                                        default: (0, t.w5)(() => [
                                          (0, t.Wm)(
                                            S,
                                            { side: "" },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(h, {
                                                  name: "fas fa-balance-scale",
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          (0, t.Wm)(S, null, {
                                            default: (0, t.w5)(() => [
                                              (0, t.Wm)(A, null, {
                                                default: (0, t.w5)(() => [
                                                  (0, t.Uk)(
                                                    (0, i.zw)(
                                                      (0, n.SU)(m)(
                                                        "appInfo.Terms of service"
                                                      )
                                                    ),
                                                    1
                                                  ),
                                                ]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    (0, t.Wm)(j),
                                    (0, t.wy)(
                                      ((0, t.wg)(),
                                        (0, t.j4)(
                                          I,
                                          {
                                            clickable: "",
                                            onClick:
                                              s[11] ||
                                              (s[11] = (e) => l("link-sheet")),
                                          },
                                          {
                                            default: (0, t.w5)(() => [
                                              (0, t.Wm)(
                                                S,
                                                { side: "" },
                                                {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Wm)(h, {
                                                      name: "fa fa-link",
                                                    }),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                              (0, t.Wm)(S, null, {
                                                default: (0, t.w5)(() => [
                                                  (0, t.Wm)(A, null, {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Uk)(
                                                        (0, i.zw)(
                                                          (0, n.SU)(m)(
                                                            "common.Link Google Spreadsheet"
                                                          )
                                                        ),
                                                        1
                                                      ),
                                                    ]),
                                                    _: 1,
                                                  }),
                                                ]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        )),
                                      [[N]]
                                    ),
                                    (0, t.wy)(
                                      ((0, t.wg)(),
                                        (0, t.j4)(
                                          I,
                                          { clickable: "", onClick: E },
                                          {
                                            default: (0, t.w5)(() => [
                                              (0, t.Wm)(
                                                S,
                                                { side: "" },
                                                {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Wm)(h, {
                                                      name: "fas fa-moon",
                                                    }),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                              (0, t.Wm)(S, null, {
                                                default: (0, t.w5)(() => [
                                                  (0, t.Uk)(
                                                    (0, i.zw)(
                                                      (0, n.SU)(m)(
                                                        "toolbar.Dark mode"
                                                      )
                                                    ),
                                                    1
                                                  ),
                                                ]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        )),
                                      [[N]]
                                    ),
                                    (0, t.Wm)(j),
                                    (0, t.wy)(
                                      ((0, t.wg)(),
                                        (0, t.j4)(
                                          I,
                                          {
                                            clickable: "",
                                            onClick:
                                              s[12] ||
                                              (s[12] = (e) =>
                                                l("open-account-dialog")),
                                          },
                                          {
                                            default: (0, t.w5)(() => [
                                              (0, t.Wm)(
                                                S,
                                                { side: "" },
                                                {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Wm)(h, {
                                                      name: "fas fa-user-alt",
                                                    }),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                              (0, t.Wm)(S, null, {
                                                default: (0, t.w5)(() => [
                                                  (0, t.Wm)(A, null, {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Uk)(
                                                        (0, i.zw)(
                                                          (0, n.SU)(m)(
                                                            "common.My account"
                                                          )
                                                        ),
                                                        1
                                                      ),
                                                    ]),
                                                    _: 1,
                                                  }),
                                                ]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        )),
                                      [[N]]
                                    ),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            },
                            8,
                            ["disable", "label"]
                          ),
                          [[o.F8, (0, n.SU)(D)]]
                        ),
                        (0, t.wy)(
                          (0, t.Wm)(
                            W,
                            {
                              class: "desktop-only",
                              disable: (0, n.SU)(k),
                              onOpenLanguages:
                                s[13] || (s[13] = (e) => l("open-languages")),
                            },
                            null,
                            8,
                            ["disable"]
                          ),
                          [[o.F8, (0, n.SU)(z)]]
                        ),
                        (0, t.Wm)(
                          r,
                          {
                            class: "mobile-only",
                            round: "",
                            unelevated: "",
                            color: "primary",
                            icon: "fas fa-bars",
                          },
                          {
                            default: (0, t.w5)(() => [
                              (0, t.Wm)(O, null, {
                                default: (0, t.w5)(() => [
                                  (0, t.Wm)(R, null, {
                                    default: (0, t.w5)(() => [
                                      (0, t.wy)(
                                        ((0, t.wg)(),
                                          (0, t.j4)(
                                            I,
                                            {
                                              clickable: "",
                                              onClick:
                                                s[14] ||
                                                (s[14] = (e) => l("reset-wheel")),
                                            },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(
                                                  S,
                                                  { side: "" },
                                                  {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Wm)(h, {
                                                        name: "fas fa-file",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, t.Wm)(S, null, {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Uk)(
                                                      (0, i.zw)(
                                                        (0, n.SU)(m)("toolbar.New")
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          )),
                                        [[N]]
                                      ),
                                      (0, t.wy)(
                                        ((0, t.wg)(),
                                          (0, t.j4)(
                                            I,
                                            {
                                              clickable: "",
                                              onClick:
                                                s[15] ||
                                                (s[15] = (e) => l("open-wheel")),
                                            },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(
                                                  S,
                                                  { side: "" },
                                                  {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Wm)(h, {
                                                        name: "fa fa-folder-open",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, t.Wm)(S, null, {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Uk)(
                                                      (0, i.zw)(
                                                        (0, n.SU)(m)("common.Open")
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          )),
                                        [[N]]
                                      ),
                                      (0, t.wy)(
                                        ((0, t.wg)(),
                                          (0, t.j4)(
                                            I,
                                            {
                                              clickable: "",
                                              disable: (0, n.SU)(a).getters
                                                .readOnlyMode,
                                              onClick:
                                                s[16] ||
                                                (s[16] = (e) => l("save-wheel")),
                                            },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(
                                                  S,
                                                  { side: "" },
                                                  {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Wm)(h, {
                                                        name: "fa fa-save",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, t.Wm)(S, null, {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Uk)(
                                                      (0, i.zw)(
                                                        (0, n.SU)(m)("common.Save")
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                            8,
                                            ["disable"]
                                          )),
                                        [[N]]
                                      ),
                                      (0, t.wy)(
                                        ((0, t.wg)(),
                                          (0, t.j4)(
                                            I,
                                            {
                                              clickable: "",
                                              disable: (0, n.SU)(a).getters
                                                .readOnlyMode,
                                              onClick:
                                                s[17] ||
                                                (s[17] = (e) => l("share-wheel")),
                                            },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(
                                                  S,
                                                  { side: "" },
                                                  {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Wm)(h, {
                                                        name: "fa fa-share-alt",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, t.Wm)(S, null, {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Uk)(
                                                      (0, i.zw)(
                                                        (0, n.SU)(m)(
                                                          "toolbar.Share"
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                            8,
                                            ["disable"]
                                          )),
                                        [[N]]
                                      ),
                                      (0, t.wy)(
                                        ((0, t.wg)(),
                                          (0, t.j4)(
                                            I,
                                            {
                                              clickable: "",
                                              onClick:
                                                s[18] ||
                                                (s[18] = (e) =>
                                                  (0, n.SU)(d).push("/gallery")),
                                            },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(
                                                  S,
                                                  { side: "" },
                                                  {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Wm)(h, {
                                                        name: "fa fa-search",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, t.Wm)(S, null, {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Uk)(
                                                      (0, i.zw)(
                                                        (0, n.SU)(m)(
                                                          "toolbar.Gallery"
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          )),
                                        [[N]]
                                      ),
                                      (0, t.wy)(
                                        ((0, t.wg)(),
                                          (0, t.j4)(
                                            I,
                                            {
                                              clickable: "",
                                              onClick:
                                                s[19] ||
                                                (s[19] = (e) =>
                                                  l("customize-wheel")),
                                            },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(
                                                  S,
                                                  { side: "" },
                                                  {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Wm)(h, {
                                                        name: "fas fa-palette",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, t.Wm)(S, null, {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Uk)(
                                                      (0, i.zw)(
                                                        (0, n.SU)(m)(
                                                          "common.Customize"
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          )),
                                        [[N]]
                                      ),
                                      (0, t.wy)(
                                        ((0, t.wg)(),
                                          (0, t.j4)(
                                            I,
                                            { clickable: "", onClick: V },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(
                                                  S,
                                                  { side: "" },
                                                  {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Wm)(
                                                        h,
                                                        {
                                                          name: (0, n.SU)(g)
                                                            ? "fa fa-compress"
                                                            : "fa fa-expand",
                                                        },
                                                        null,
                                                        8,
                                                        ["name"]
                                                      ),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, n.SU)(g)
                                                  ? (0, t.kq)("", !0)
                                                  : ((0, t.wg)(),
                                                    (0, t.j4)(
                                                      S,
                                                      { key: 0 },
                                                      {
                                                        default: (0, t.w5)(() => [
                                                          (0, t.Uk)(
                                                            (0, i.zw)(
                                                              (0, n.SU)(m)(
                                                                "toolbar.Fullscreen"
                                                              )
                                                            ),
                                                            1
                                                          ),
                                                        ]),
                                                        _: 1,
                                                      }
                                                    )),
                                                (0, n.SU)(g)
                                                  ? ((0, t.wg)(),
                                                    (0, t.j4)(
                                                      S,
                                                      { key: 1 },
                                                      {
                                                        default: (0, t.w5)(() => [
                                                          (0, t.Uk)(
                                                            (0, i.zw)(
                                                              (0, n.SU)(m)(
                                                                "toolbar.Exit fullscreen"
                                                              )
                                                            ),
                                                            1
                                                          ),
                                                        ]),
                                                        _: 1,
                                                      }
                                                    ))
                                                  : (0, t.kq)("", !0),
                                              ]),
                                              _: 1,
                                            }
                                          )),
                                        [[N]]
                                      ),
                                      (0, t.wy)(
                                        ((0, t.wg)(),
                                          (0, t.j4)(
                                            I,
                                            { clickable: "", onClick: E },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(
                                                  S,
                                                  { side: "" },
                                                  {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Wm)(h, {
                                                        name: "fas fa-moon",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, t.Wm)(S, null, {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Uk)(
                                                      (0, i.zw)(
                                                        (0, n.SU)(m)(
                                                          "toolbar.Dark mode"
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          )),
                                        [[N]]
                                      ),
                                      (0, t.Wm)(
                                        I,
                                        {
                                          clickable: "",
                                          onClick:
                                            s[20] ||
                                            (s[20] = (e) => l("open-languages")),
                                        },
                                        {
                                          default: (0, t.w5)(() => [
                                            (0, t.Wm)(
                                              S,
                                              { side: "" },
                                              {
                                                default: (0, t.w5)(() => [
                                                  (0, t.Wm)(h, {
                                                    name: "fas fa-globe",
                                                  }),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                            (0, t.Wm)(S, null, {
                                              default: (0, t.w5)(() => [
                                                (0, t.Uk)(
                                                  (0, i.zw)(
                                                    (0, n.SU)(m)(
                                                      "toolbar.Language"
                                                    )
                                                  ),
                                                  1
                                                ),
                                              ]),
                                              _: 1,
                                            }),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      (0, t.wy)(
                                        ((0, t.wg)(),
                                          (0, t.j4)(
                                            I,
                                            { clickable: "", onClick: F },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(
                                                  S,
                                                  { side: "" },
                                                  {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Wm)(h, {
                                                        name: "fa fa-comment",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, t.Wm)(S, null, {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Uk)(
                                                      (0, i.zw)(
                                                        (0, n.SU)(m)(
                                                          "toolbar.Feedback"
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          )),
                                        [[N]]
                                      ),
                                      (0, t.wy)(
                                        ((0, t.wg)(),
                                          (0, t.j4)(
                                            I,
                                            {
                                              clickable: "",
                                              onClick:
                                                s[21] ||
                                                (s[21] = (e) =>
                                                  (0, n.SU)(d).push("/faq")),
                                            },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(
                                                  S,
                                                  { side: "" },
                                                  {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Wm)(h, {
                                                        name: "fa fa-question-circle",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, t.Wm)(S, null, {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Uk)(
                                                      (0, i.zw)(
                                                        (0, n.SU)(m)("toolbar.FAQ")
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          )),
                                        [[N]]
                                      ),
                                      (0, t.wy)(
                                        ((0, t.wg)(),
                                          (0, t.j4)(
                                            I,
                                            {
                                              clickable: "",
                                              onClick:
                                                s[22] ||
                                                (s[22] = (e) =>
                                                  (0, n.SU)(d).push(
                                                    "/user-reviews-and-tutorials"
                                                  )),
                                            },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(
                                                  S,
                                                  { side: "" },
                                                  {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Wm)(h, {
                                                        name: "fab fa-youtube",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, t.Wm)(S, null, {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Wm)(A, null, {
                                                      default: (0, t.w5)(() => [
                                                        (0, t.Uk)(
                                                          (0, i.zw)(
                                                            (0, n.SU)(m)(
                                                              "toolbar.User reviews and tutorials"
                                                            )
                                                          ),
                                                          1
                                                        ),
                                                      ]),
                                                      _: 1,
                                                    }),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          )),
                                        [[N]]
                                      ),
                                      (0, t.wy)(
                                        ((0, t.wg)(),
                                          (0, t.j4)(
                                            I,
                                            {
                                              clickable: "",
                                              onClick:
                                                s[23] ||
                                                (s[23] = (e) =>
                                                  (0, n.SU)(d).push(
                                                    "/how-to-use-in-the-classroom"
                                                  )),
                                            },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(
                                                  S,
                                                  { side: "" },
                                                  {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Wm)(h, {
                                                        name: "fas fa-chalkboard-teacher",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, t.Wm)(S, null, {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Wm)(A, null, {
                                                      default: (0, t.w5)(() => [
                                                        (0, t.Uk)(
                                                          (0, i.zw)(
                                                            (0, n.SU)(m)(
                                                              "common.Use this in the classroom"
                                                            )
                                                          ),
                                                          1
                                                        ),
                                                      ]),
                                                      _: 1,
                                                    }),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          )),
                                        [[N]]
                                      ),
                                      (0, t.Wm)(
                                        I,
                                        {
                                          clickable: "",
                                          onClick:
                                            s[24] ||
                                            (s[24] = (e) =>
                                              (0, n.SU)(d).push(
                                                "/privacy-policy"
                                              )),
                                        },
                                        {
                                          default: (0, t.w5)(() => [
                                            (0, t.Wm)(
                                              S,
                                              { side: "" },
                                              {
                                                default: (0, t.w5)(() => [
                                                  (0, t.Wm)(h, {
                                                    name: "fas fa-user-secret",
                                                  }),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                            (0, t.Wm)(S, null, {
                                              default: (0, t.w5)(() => [
                                                (0, t.Uk)(
                                                  (0, i.zw)(
                                                    (0, n.SU)(m)(
                                                      "common.Privacy policy"
                                                    )
                                                  ),
                                                  1
                                                ),
                                              ]),
                                              _: 1,
                                            }),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      (0, t.Wm)(
                                        I,
                                        {
                                          clickable: "",
                                          onClick:
                                            s[25] ||
                                            (s[25] = (e) =>
                                              (0, n.SU)(d).push("/faq/terms")),
                                        },
                                        {
                                          default: (0, t.w5)(() => [
                                            (0, t.Wm)(
                                              S,
                                              { side: "" },
                                              {
                                                default: (0, t.w5)(() => [
                                                  (0, t.Wm)(h, {
                                                    name: "fas fa-balance-scale",
                                                  }),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                            (0, t.Wm)(S, null, {
                                              default: (0, t.w5)(() => [
                                                (0, t.Uk)(
                                                  (0, i.zw)(
                                                    (0, n.SU)(m)(
                                                      "appInfo.Terms of service"
                                                    )
                                                  ),
                                                  1
                                                ),
                                              ]),
                                              _: 1,
                                            }),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      (0, t.wy)(
                                        ((0, t.wg)(),
                                          (0, t.j4)(
                                            I,
                                            {
                                              clickable: "",
                                              onClick:
                                                s[26] ||
                                                (s[26] = (e) => l("link-sheet")),
                                            },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t.Wm)(
                                                  S,
                                                  { side: "" },
                                                  {
                                                    default: (0, t.w5)(() => [
                                                      (0, t.Wm)(h, {
                                                        name: "fa fa-link",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                (0, t.Wm)(S, null, {
                                                  default: (0, t.w5)(() => [
                                                    (0, t.Wm)(A, null, {
                                                      default: (0, t.w5)(() => [
                                                        (0, t.Uk)(
                                                          (0, i.zw)(
                                                            (0, n.SU)(m)(
                                                              "common.Link Google Spreadsheet"
                                                            )
                                                          ),
                                                          1
                                                        ),
                                                      ]),
                                                      _: 1,
                                                    }),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          )),
                                        [[N]]
                                      ),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }
                  )
                );
              };
            },
          };
        var U = a(51663),
          b = a(81973),
          C = a(61357),
          q = a(90136),
          Z = a(46858),
          x = a(18479),
          Q = a(13246),
          D = a(490),
          z = a(76749),
          V = a(22857),
          E = a(33115),
          F = a(50926),
          T = a(56362),
          H = a(62146);
        const L = S,
          A = L;
        g()(S, "components", {
          QToolbar: U.Z,
          QBtn: f.Z,
          QToolbarTitle: b.Z,
          QAvatar: C.Z,
          QSpace: q.Z,
          QTooltip: Z.Z,
          QBtnDropdown: x.Z,
          QList: Q.Z,
          QItem: D.Z,
          QItemSection: z.Z,
          QIcon: V.Z,
          QItemLabel: E.Z,
          QSeparator: F.Z,
          QMenu: T.Z,
        }),
          g()(S, "directives", { ClosePopup: H.Z });
        var I = a(34025),
          j = a(6297),
          R = a(32637);
        const B = { class: "text-h6" },
          O = (0, t._)("i", { class: "fas fa-user" }, null, -1),
          P = (0, t._)("div", { id: "auth-container" }, null, -1),
          N = {
            setup(e, { expose: l }) {
              const a = (0, s.oR)(),
                { t: o } = (0, r.QT)(),
                u = ((0, c.Z)(), (0, n.iH)(!1));
              async function d() {
                if (!(0, p.pageIsInIframe)()) {
                  u.value = !0;
                  try {
                    (0, p.displayWindowsRtWarning)(),
                      (0, p.trackEvent)("Wheel", "LoginAttempt", ""),
                      await a.dispatch("loginWithUi", "auth-container"),
                      (0, p.trackEvent)("Wheel", "LoginSuccess", ""),
                      (u.value = !1);
                  } catch (e) {
                    (u.value = !1),
                      R.x2(o, e),
                      (0, p.trackEvent)("Wheel", "LoginFailure", e.toString());
                  }
                }
              }
              function m() {
                u.value = !1;
              }
              return (
                l({ askUserToLogIn: d }),
                (e, l) => {
                  const a = (0, t.up)("q-card-section"),
                    s = (0, t.up)("q-btn"),
                    c = (0, t.up)("q-card-actions"),
                    r = (0, t.up)("q-card"),
                    d = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      d,
                      {
                        modelValue: u.value,
                        "onUpdate:modelValue":
                          l[1] || (l[1] = (e) => (u.value = e)),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            r,
                            { style: { width: "640px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  a,
                                  { style: { "background-color": "#00000020" } },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", B, [
                                        O,
                                        (0, t.Uk)(
                                          " " +
                                          (0, i.zw)(
                                            (0, n.SU)(o)("common.Log in")
                                          ),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(a, null, {
                                  default: (0, t.w5)(() => [
                                    (0, t.Uk)(
                                      (0, i.zw)(
                                        (0, n.SU)(o)(
                                          "common.Please choose your sign-in method"
                                        )
                                      ),
                                      1
                                    ),
                                  ]),
                                  _: 1,
                                }),
                                (0, t.Wm)(a, null, {
                                  default: (0, t.w5)(() => [P]),
                                  _: 1,
                                }),
                                (0, t.Wm)(
                                  c,
                                  { align: "right" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        s,
                                        {
                                          unelevated: "",
                                          label: (0, n.SU)(o)("common.Cancel"),
                                          onClick: l[0] || (l[0] = (e) => m()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          };
        var M = a(43706),
          G = a(44458),
          K = a(63190),
          Y = a(11821);
        const $ = N,
          J = $;
        g()(N, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QCardActions: Y.Z,
          QBtn: f.Z,
        });
        const X = ["src"],
          ee = {
            emits: ["log-out"],
            setup(e, { emit: l }) {
              const a = (0, s.oR)(),
                o = (0, u.tv)(),
                { t: d } = (0, r.QT)(),
                m = (0, c.Z)();
              function w() {
                a.dispatch("logOut"), l("log-out");
              }
              async function h() {
                const e = d(
                  "profiledropdown.Are you sure you want to delete your account"
                );
                if (await R.iG(d, e)) {
                  m.loading.show();
                  try {
                    await a.dispatch("deleteAccount"),
                      a.dispatch("resetWheel", d("common.We have a winner!"));
                    const e = d(
                      "profiledropdown.Your account and your saved wheels have been deleted"
                    );
                    R.c0(e), l("log-out");
                  } catch (t) {
                    p.trackException("DeleteAccountError", t), R.x2(d, t);
                  }
                  m.loading.hide();
                }
              }
              return (e, l) => {
                const s = (0, t.up)("q-item-section"),
                  u = (0, t.up)("q-item"),
                  c = (0, t.up)("q-separator"),
                  r = (0, t.up)("q-item-label"),
                  m = (0, t.up)("q-list"),
                  p = (0, t.up)("q-btn-dropdown"),
                  f = (0, t.Q2)("close-popup");
                return (
                  (0, t.wg)(),
                  (0, t.j4)(p, null, {
                    label: (0, t.w5)(() => [
                      (0, t._)(
                        "img",
                        {
                          style: { "border-radius": "50%", height: "30px" },
                          src: (0, n.SU)(a).getters.userPhotoUrl,
                        },
                        null,
                        8,
                        X
                      ),
                    ]),
                    default: (0, t.w5)(() => [
                      (0, t.Wm)(m, null, {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(u, null, {
                            default: (0, t.w5)(() => [
                              (0, t.Wm)(s, null, {
                                default: (0, t.w5)(() => [
                                  (0, t.Uk)(
                                    (0, i.zw)(
                                      (0, n.SU)(d)(
                                        "profiledropdown.Signed in as",
                                        {
                                          name: (0, n.SU)(a).getters
                                            .userDisplayName,
                                        }
                                      )
                                    ),
                                    1
                                  ),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }),
                          (0, t.Wm)(c),
                          (0, t.wy)(
                            ((0, t.wg)(),
                              (0, t.j4)(
                                u,
                                {
                                  clickable: "",
                                  onClick: l[0] || (l[0] = (e) => w()),
                                },
                                {
                                  default: (0, t.w5)(() => [
                                    (0, t.Wm)(s, null, {
                                      default: (0, t.w5)(() => [
                                        (0, t.Wm)(r, null, {
                                          default: (0, t.w5)(() => [
                                            (0, t.Uk)(
                                              (0, i.zw)(
                                                (0, n.SU)(d)(
                                                  "profiledropdown.Sign out"
                                                )
                                              ),
                                              1
                                            ),
                                          ]),
                                          _: 1,
                                        }),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                }
                              )),
                            [[f]]
                          ),
                          (0, t.Wm)(
                            u,
                            {
                              clickable: "",
                              onClick:
                                l[1] ||
                                (l[1] = (e) => (0, n.SU)(o).push("/export")),
                            },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(s, null, {
                                  default: (0, t.w5)(() => [
                                    (0, t.Wm)(r, null, {
                                      default: (0, t.w5)(() => [
                                        (0, t.Uk)(
                                          (0, i.zw)(
                                            (0, n.SU)(d)(
                                              "profiledropdown.Export my data"
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            }
                          ),
                          (0, t.wy)(
                            ((0, t.wg)(),
                              (0, t.j4)(
                                u,
                                {
                                  clickable: "",
                                  onClick: l[2] || (l[2] = (e) => h()),
                                },
                                {
                                  default: (0, t.w5)(() => [
                                    (0, t.Wm)(s, null, {
                                      default: (0, t.w5)(() => [
                                        (0, t.Wm)(r, null, {
                                          default: (0, t.w5)(() => [
                                            (0, t.Uk)(
                                              (0, i.zw)(
                                                (0, n.SU)(d)(
                                                  "profiledropdown.Delete my account"
                                                )
                                              ),
                                              1
                                            ),
                                          ]),
                                          _: 1,
                                        }),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                }
                              )),
                            [[f]]
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  })
                );
              };
            },
          },
          le = ee,
          ae = le;
        g()(ee, "components", {
          QBtnDropdown: x.Z,
          QList: Q.Z,
          QItem: D.Z,
          QItemSection: z.Z,
          QSeparator: F.Z,
          QItemLabel: E.Z,
        }),
          g()(ee, "directives", { ClosePopup: H.Z });
        const te = { class: "text-h6" },
          ne = (0, t._)("i", { class: "fa fa-folder-open" }, null, -1),
          oe = { key: 0 },
          ie = { key: 1 },
          se = { style: { height: "50vh", overflow: "auto" } },
          ue = {
            emits: ["reset-wheel-rotation", "reset-address-bar"],
            setup(e, { expose: l, emit: a }) {
              const u = (0, s.oR)(),
                d = (0, c.Z)(),
                { t: m } = (0, r.QT)(),
                w = (0, n.iH)(!1),
                h = (0, n.iH)([]),
                f = (0, t.Fl)(() => 0 == h.value.length),
                v = (0, n.iH)(""),
                g = (0, t.Fl)(() => v.value.toLowerCase()),
                k = (0, t.Fl)(() =>
                  h.value.filter(
                    (e) =>
                      !v.value || e.config.title.toLowerCase().includes(g.value)
                  )
                );
              let W;
              async function y() {
                return (
                  (0, p.trackEvent)("Wheel", "ShowOpenDialog"),
                  await U(),
                  (v.value = ""),
                  (w.value = !0),
                  new Promise((e) => (W = e))
                );
              }
              async function _(e) {
                (w.value = !1), W("open");
                const l = await u.dispatch("loadSavedWheel", e);
                u.commit("setWheelConfig", l.wheelConfig),
                  u.commit("clearWinners"),
                  a("reset-wheel-rotation"),
                  a("reset-address-bar"),
                  (0, p.trackEvent)("Wheel", "OpenWheel");
              }
              async function S(e, l) {
                const a = m("opendialog.Are you sure", {
                  wheelTitle: (0, p.escapeHtml)(l),
                });
                if (await R.iG(m, a))
                  try {
                    (0, p.trackEvent)("Wheel", "DeleteWheel"),
                      (h.value = h.value.filter((l) => l.path != e)),
                      await u.dispatch("deleteWheel", e);
                  } catch (t) {
                    (0, p.trackException)("DeleteWheelError", t), R.x2(m, t);
                  }
              }
              async function U() {
                try {
                  d.loading.show(),
                    (h.value = await u.dispatch("getSavedWheels", {
                      fields: "path,config.title",
                    }));
                } catch (e) {
                  R.x2(m, e),
                    (0, p.trackException)(
                      "LoadSavedWheelsError (Open dialog)",
                      e
                    );
                } finally {
                  d.loading.hide();
                }
              }
              function b() {
                (w.value = !1), W("cancel");
              }
              function C() {
                (w.value = !1), W("switch");
              }
              return (
                l({ show: y }),
                (e, l) => {
                  const a = (0, t.up)("q-space"),
                    s = (0, t.up)("q-card-section"),
                    u = (0, t.up)("q-input"),
                    c = (0, t.up)("q-btn"),
                    r = (0, t.up)("q-item-section"),
                    d = (0, t.up)("q-item"),
                    p = (0, t.up)("q-card-actions"),
                    g = (0, t.up)("q-card"),
                    W = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      W,
                      {
                        modelValue: w.value,
                        "onUpdate:modelValue":
                          l[3] || (l[3] = (e) => (w.value = e)),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            g,
                            { style: { width: "640px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  s,
                                  {
                                    class: "row items-center",
                                    style: { "background-color": "#00000020" },
                                  },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", te, [
                                        ne,
                                        (0, t.Uk)(
                                          " " +
                                          (0, i.zw)(
                                            (0, n.SU)(m)(
                                              "opendialog.Open wheel"
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                      (0, t.Wm)(a),
                                      (0, t.Wm)(ae, {
                                        onLogOut: l[0] || (l[0] = (e) => b()),
                                      }),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(s, null, {
                                  default: (0, t.w5)(() => [
                                    (0, n.SU)(f)
                                      ? ((0, t.wg)(),
                                        (0, t.iD)(
                                          "div",
                                          oe,
                                          (0, i.zw)(
                                            (0, n.SU)(m)(
                                              "opendialog.No wheels found"
                                            )
                                          ),
                                          1
                                        ))
                                      : ((0, t.wg)(),
                                        (0, t.iD)("div", ie, [
                                          h.value.length > 5
                                            ? ((0, t.wg)(),
                                              (0, t.j4)(
                                                u,
                                                {
                                                  key: 0,
                                                  dense: "",
                                                  filled: "",
                                                  modelValue: v.value,
                                                  "onUpdate:modelValue":
                                                    l[1] ||
                                                    (l[1] = (e) => (v.value = e)),
                                                  placeholder: (0, n.SU)(m)(
                                                    "common.Search"
                                                  ),
                                                },
                                                null,
                                                8,
                                                ["modelValue", "placeholder"]
                                              ))
                                            : (0, t.kq)("", !0),
                                          (0, t._)("div", se, [
                                            (0, t.Wm)(
                                              o.W3,
                                              {
                                                name: "animated-list",
                                                tag: "q-list",
                                              },
                                              {
                                                default: (0, t.w5)(() => [
                                                  ((0, t.wg)(!0),
                                                    (0, t.iD)(
                                                      t.HY,
                                                      null,
                                                      (0, t.Ko)(
                                                        (0, n.SU)(k),
                                                        (e) => (
                                                          (0, t.wg)(),
                                                          (0, t.j4)(
                                                            d,
                                                            {
                                                              key: e.config.title,
                                                              class: "q-px-none",
                                                            },
                                                            {
                                                              default: (0, t.w5)(
                                                                () => [
                                                                  (0, t.Wm)(
                                                                    r,
                                                                    { side: "" },
                                                                    {
                                                                      default: (0,
                                                                        t.w5)(() => [
                                                                          (0, t.Wm)(
                                                                            c,
                                                                            {
                                                                              flat: "",
                                                                              color:
                                                                                "primary",
                                                                              icon: "fa fa-folder-open",
                                                                              onClick:
                                                                                (l) =>
                                                                                  _(
                                                                                    e.path
                                                                                  ),
                                                                            },
                                                                            null,
                                                                            8,
                                                                            [
                                                                              "onClick",
                                                                            ]
                                                                          ),
                                                                        ]),
                                                                      _: 2,
                                                                    },
                                                                    1024
                                                                  ),
                                                                  (0, t.Wm)(
                                                                    r,
                                                                    {
                                                                      onClick: (
                                                                        l
                                                                      ) =>
                                                                        _(e.path),
                                                                      style: {
                                                                        cursor:
                                                                          "pointer",
                                                                      },
                                                                    },
                                                                    {
                                                                      default: (0,
                                                                        t.w5)(() => [
                                                                          (0, t.Uk)(
                                                                            (0, i.zw)(
                                                                              e.config
                                                                                .title
                                                                            ),
                                                                            1
                                                                          ),
                                                                        ]),
                                                                      _: 2,
                                                                    },
                                                                    1032,
                                                                    ["onClick"]
                                                                  ),
                                                                  (0, t.Wm)(
                                                                    r,
                                                                    { side: "" },
                                                                    {
                                                                      default: (0,
                                                                        t.w5)(() => [
                                                                          (0, t.Wm)(
                                                                            c,
                                                                            {
                                                                              icon: "far fa-trash-alt",
                                                                              flat: "",
                                                                              color:
                                                                                "negative",
                                                                              onClick:
                                                                                (l) =>
                                                                                  S(
                                                                                    e.path,
                                                                                    e
                                                                                      .config
                                                                                      .title
                                                                                  ),
                                                                            },
                                                                            null,
                                                                            8,
                                                                            [
                                                                              "onClick",
                                                                            ]
                                                                          ),
                                                                        ]),
                                                                      _: 2,
                                                                    },
                                                                    1024
                                                                  ),
                                                                ]
                                                              ),
                                                              _: 2,
                                                            },
                                                            1024
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                          ]),
                                        ])),
                                  ]),
                                  _: 1,
                                }),
                                (0, t.Wm)(
                                  p,
                                  { align: "between" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        c,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          label: (0, n.SU)(m)(
                                            "opendialog.Open a local file instead"
                                          ),
                                          onClick: C,
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                      (0, t.Wm)(
                                        c,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          label: (0, n.SU)(m)("common.Cancel"),
                                          onClick: l[2] || (l[2] = (e) => b()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          };
        var ce = a(13119);
        const re = ue,
          de = re;
        g()(ue, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QSpace: q.Z,
          QInput: ce.Z,
          QList: Q.Z,
          QItem: D.Z,
          QItemSection: z.Z,
          QBtn: f.Z,
          QCardActions: Y.Z,
        });
        const me = { class: "text-h6" },
          pe = (0, t._)("i", { class: "fa fa-save" }, null, -1),
          we = { class: "row q-gutter-md items-center" },
          he = { class: "col-3" },
          fe = { class: "col" },
          ve = { class: "row q-gutter-md items-center" },
          ge = { class: "col-3" },
          ke = { class: "col" },
          We = {
            setup(e, { expose: l }) {
              const a = (0, s.oR)(),
                u = (0, c.Z)(),
                { t: d } = (0, r.QT)(),
                m = (0, n.iH)(!1),
                w = (0, n.iH)(null),
                h = (0, n.iH)([]),
                f = (0, t.Fl)(() =>
                  h.value.map((e) => ({
                    value: e.config.title,
                    label: e.config.title,
                  }))
                ),
                v = (0, t.Fl)(() => a.getters.wheelConfig),
                g = (0, n.iH)(""),
                k = (0, n.iH)(""),
                W = (0, n.iH)(""),
                y = (0, t.Fl)(
                  () =>
                    W.value != g.value &&
                    h.value.some((e) => e.config.title == g.value)
                ),
                _ = (0, n.iH)(!1);
              let S;
              async function U() {
                return (
                  (0, p.trackEvent)("Wheel", "ShowSaveDialog"),
                  q(),
                  (g.value = v.value.title),
                  (W.value = v.value.title),
                  (k.value = ""),
                  (m.value = !0),
                  new Promise((e) => (S = e))
                );
              }
              async function b() {
                if (g.value)
                  if (y.value) {
                    const e = d("savedialog.You are about to overwrite");
                    (await R.iG(d, e)) && C();
                  } else C();
              }
              async function C() {
                u.loading.show();
                try {
                  (0, p.trackEvent)("Wheel", "SaveWheel"),
                    a.commit("setWheelTitle", g.value),
                    await a.dispatch("saveWheel", v.value),
                    u.loading.hide();
                  const e = d("savedialog.Wheel saved successfully", {
                    wheelTitle: (0, p.removeHtml)(g.value),
                  });
                  R.c0(e);
                } catch (e) {
                  u.loading.hide(),
                    R.x2(d, e),
                    (0, p.trackException)("SaveWheelError", e);
                }
                (m.value = !1), S("save");
              }
              async function q() {
                try {
                  (_.value = !0),
                    (h.value = await a.dispatch("getSavedWheels", {
                      fields: "config.title",
                    }));
                } catch (e) {
                  R.x2(d, e),
                    (0, p.trackException)(
                      "LoadSavedWheelsError (Save dialog)",
                      e
                    );
                } finally {
                  _.value = !1;
                }
              }
              function Z() {
                (m.value = !1), S("cancel");
              }
              function x() {
                (m.value = !1), S("switch");
              }
              return (
                (0, t.YP)(
                  () => k.value,
                  (e) => {
                    g.value = e.value;
                  }
                ),
                l({ show: U }),
                (e, l) => {
                  const a = (0, t.up)("q-space"),
                    s = (0, t.up)("q-card-section"),
                    u = (0, t.up)("q-input"),
                    c = (0, t.up)("q-select"),
                    r = (0, t.up)("q-btn"),
                    p = (0, t.up)("q-card-actions"),
                    h = (0, t.up)("q-card"),
                    v = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      v,
                      {
                        modelValue: m.value,
                        "onUpdate:modelValue":
                          l[5] || (l[5] = (e) => (m.value = e)),
                        onShow: l[6] || (l[6] = (e) => w.value.select()),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            h,
                            { style: { width: "640px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  s,
                                  {
                                    class: "row items-center",
                                    style: { "background-color": "#00000020" },
                                  },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", me, [
                                        pe,
                                        (0, t.Uk)(
                                          " " +
                                          (0, i.zw)(
                                            (0, n.SU)(d)(
                                              "savedialog.Save wheel to the cloud"
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                      (0, t.Wm)(a),
                                      (0, t.Wm)(ae, {
                                        onLogOut: l[0] || (l[0] = (e) => Z()),
                                      }),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  s,
                                  { class: "q-gutter-md" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", we, [
                                        (0, t._)(
                                          "div",
                                          he,
                                          (0, i.zw)(
                                            (0, n.SU)(d)("savedialog.Save as")
                                          ),
                                          1
                                        ),
                                        (0, t._)("div", fe, [
                                          (0, t.Wm)(
                                            u,
                                            {
                                              modelValue: g.value,
                                              "onUpdate:modelValue":
                                                l[1] ||
                                                (l[1] = (e) => (g.value = e)),
                                              filled: "",
                                              dense: "",
                                              onKeyup:
                                                l[2] ||
                                                (l[2] = (0, o.D2)(
                                                  (e) => b(),
                                                  ["native", "enter"]
                                                )),
                                              ref_key: "saveAsField",
                                              ref: w,
                                              required: "",
                                              maxlength: "50",
                                            },
                                            null,
                                            8,
                                            ["modelValue"]
                                          ),
                                        ]),
                                      ]),
                                      (0, t._)("div", ve, [
                                        (0, t._)(
                                          "div",
                                          ge,
                                          (0, i.zw)(
                                            (0, n.SU)(d)(
                                              "savedialog.Your existing wheels"
                                            )
                                          ),
                                          1
                                        ),
                                        (0, t._)("div", ke, [
                                          (0, t.Wm)(
                                            c,
                                            {
                                              filled: "",
                                              dense: "",
                                              label: (0, n.SU)(d)(
                                                "savedialog.Select a wheel"
                                              ),
                                              modelValue: k.value,
                                              "onUpdate:modelValue":
                                                l[3] ||
                                                (l[3] = (e) => (k.value = e)),
                                              options: (0, n.SU)(f),
                                              "map-options": "",
                                              loading: _.value,
                                            },
                                            null,
                                            8,
                                            [
                                              "label",
                                              "modelValue",
                                              "options",
                                              "loading",
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      (0, t._)(
                                        "div",
                                        null,
                                        (0, i.zw)(
                                          (0, n.SU)(d)(
                                            "savedialog.You will always be able to access"
                                          )
                                        ),
                                        1
                                      ),
                                      (0, t.Wm)(
                                        r,
                                        {
                                          outline: "",
                                          "no-caps": "",
                                          color: "primary",
                                          label: (0, n.SU)(d)(
                                            "savedialog.Save to a local file instead"
                                          ),
                                          onClick: x,
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  p,
                                  { align: "right" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        r,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          label: (0, n.SU)(d)("common.Cancel"),
                                          onClick: l[4] || (l[4] = (e) => Z()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                      (0, t.Wm)(
                                        r,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          color: "primary",
                                          label: (0, n.SU)(d)("common.Save"),
                                          onClick: b,
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          };
        var ye = a(18401);
        const _e = We,
          Se = _e;
        g()(We, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QSpace: q.Z,
          QInput: ce.Z,
          QSelect: ye.Z,
          QBtn: f.Z,
          QCardActions: Y.Z,
        });
        const Ue = { class: "text-h6" },
          be = (0, t._)("i", { class: "fa fa-save" }, null, -1),
          Ce = { class: "row items-center" },
          qe = { class: "col-shrink q-mr-md q-mb-md" },
          Ze = { class: "col-12 col-md-grow q-mb-md" },
          xe = {
            setup(e, { expose: l }) {
              const a = (0, s.oR)(),
                { t: u } = (0, r.QT)(),
                c = (0, n.iH)(!1),
                d = (0, n.iH)(null),
                w = (0, t.Fl)(() => a.getters.wheelConfig),
                h = (0, n.iH)("");
              let f;
              async function v() {
                return (
                  (0, p.trackEvent)("Wheel", "ShowSaveLocalDialog"),
                  (h.value = w.value.title),
                  (c.value = !0),
                  new Promise((e) => (f = e))
                );
              }
              async function g() {
                a.commit("setWheelTitle", h.value);
                try {
                  await (0, m.NL)(
                    new Blob([JSON.stringify(w.value.getValues())]),
                    {
                      fileName: `${w.value.title || "Untitled"}.wheel`,
                      extensions: [".wheel"],
                    }
                  );
                  const e = u("savedialog.Wheel saved successfully", {
                    wheelTitle: (0, p.removeHtml)(w.value.title),
                  });
                  R.c0(e);
                } catch (e) {
                  if (e instanceof DOMException && e.message.includes("abort"))
                    return;
                  (0, p.trackException)("SaveLocalError", e), R.x2(u, e);
                }
                (c.value = !1), f("save");
              }
              function k() {
                (c.value = !1), f("cancel");
              }
              function W() {
                (c.value = !1), f("switch");
              }
              return (
                l({ show: v }),
                (e, l) => {
                  const a = (0, t.up)("q-card-section"),
                    s = (0, t.up)("q-input"),
                    r = (0, t.up)("q-btn"),
                    m = (0, t.up)("q-card-actions"),
                    p = (0, t.up)("q-card"),
                    w = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      w,
                      {
                        modelValue: c.value,
                        "onUpdate:modelValue":
                          l[2] || (l[2] = (e) => (c.value = e)),
                        onShow: l[3] || (l[3] = (e) => d.value.select()),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(p, null, {
                            default: (0, t.w5)(() => [
                              (0, t.Wm)(
                                a,
                                {
                                  class: "row items-center",
                                  style: { "background-color": "#00000020" },
                                },
                                {
                                  default: (0, t.w5)(() => [
                                    (0, t._)("div", Ue, [
                                      be,
                                      (0, t.Uk)(
                                        " " +
                                        (0, i.zw)(
                                          (0, n.SU)(u)(
                                            "savedialog.Save to a local file"
                                          )
                                        ),
                                        1
                                      ),
                                    ]),
                                  ]),
                                  _: 1,
                                }
                              ),
                              (0, t.Wm)(a, null, {
                                default: (0, t.w5)(() => [
                                  (0, t._)("div", Ce, [
                                    (0, t._)(
                                      "div",
                                      qe,
                                      (0, i.zw)(
                                        (0, n.SU)(u)("savedialog.File name")
                                      ),
                                      1
                                    ),
                                    (0, t._)("div", Ze, [
                                      (0, t.Wm)(
                                        s,
                                        {
                                          modelValue: h.value,
                                          "onUpdate:modelValue":
                                            l[0] || (l[0] = (e) => (h.value = e)),
                                          filled: "",
                                          dense: "",
                                          onKeyup:
                                            l[1] ||
                                            (l[1] = (0, o.D2)(
                                              (e) => g(),
                                              ["native", "enter"]
                                            )),
                                          ref_key: "saveAsField",
                                          ref: d,
                                          required: "",
                                          maxlength: "50",
                                          suffix: ".wheel",
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                    ]),
                                  ]),
                                  (0, t.Wm)(
                                    r,
                                    {
                                      outline: "",
                                      "no-caps": "",
                                      color: "primary",
                                      label: (0, n.SU)(u)(
                                        "savedialog.Save to the cloud instead"
                                      ),
                                      onClick: W,
                                    },
                                    null,
                                    8,
                                    ["label"]
                                  ),
                                ]),
                                _: 1,
                              }),
                              (0, t.Wm)(
                                m,
                                { align: "right" },
                                {
                                  default: (0, t.w5)(() => [
                                    (0, t.Wm)(
                                      r,
                                      {
                                        unelevated: "",
                                        "no-caps": "",
                                        label: (0, n.SU)(u)("common.Cancel"),
                                        onClick: k,
                                      },
                                      null,
                                      8,
                                      ["label"]
                                    ),
                                    (0, t.Wm)(
                                      r,
                                      {
                                        unelevated: "",
                                        "no-caps": "",
                                        color: "primary",
                                        label: (0, n.SU)(u)("common.Save"),
                                        onClick: g,
                                      },
                                      null,
                                      8,
                                      ["label"]
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          },
          Qe = xe,
          De = Qe;
        g()(xe, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QInput: ce.Z,
          QBtn: f.Z,
          QCardActions: Y.Z,
        });
        const ze = { class: "text-h6" },
          Ve = (0, t._)("i", { class: "fa fa-share-alt" }, null, -1),
          Ee = {
            setup(e, { expose: l }) {
              (0, s.oR)(), (0, c.Z)();
              const { t: a } = (0, r.QT)(),
                o = (0, n.iH)(!1);
              let u, d;
              async function m() {
                return (
                  (0, p.trackEvent)("Wheel", "ShowShareDialog"),
                  (o.value = !0),
                  new Promise((e, l) => {
                    (u = e), (d = l);
                  })
                );
              }
              function w() {
                u({ openMySharedWheels: !0, openShareSettings: !1 }),
                  (o.value = !1);
              }
              function h() {
                u({ openMySharedWheels: !1, openShareSettings: !0 }),
                  (o.value = !1);
              }
              function f() {
                u({ openMySharedWheels: !1, openShareSettings: !1 }),
                  (o.value = !1);
              }
              return (
                l({ show: m }),
                (e, l) => {
                  const s = (0, t.up)("q-card-section"),
                    u = (0, t.up)("router-link"),
                    c = (0, t.up)("q-btn"),
                    r = (0, t.up)("q-card-actions"),
                    d = (0, t.up)("q-card"),
                    m = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      m,
                      {
                        modelValue: o.value,
                        "onUpdate:modelValue":
                          l[2] || (l[2] = (e) => (o.value = e)),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            d,
                            { style: { width: "640px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  s,
                                  { style: { "background-color": "#00000020" } },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", ze, [
                                        Ve,
                                        (0, t.Uk)(
                                          " " +
                                          (0, i.zw)(
                                            (0, n.SU)(a)(
                                              "sharedialog.Shareable link"
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  s,
                                  { class: "q-gutter-md" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)(
                                        "div",
                                        null,
                                        (0, i.zw)(
                                          (0, n.SU)(a)(
                                            "sharedialog.If you continue"
                                          )
                                        ),
                                        1
                                      ),
                                      (0, t._)(
                                        "div",
                                        null,
                                        (0, i.zw)(
                                          (0, n.SU)(a)(
                                            "sharedialog.This link will work for anyone"
                                          )
                                        ),
                                        1
                                      ),
                                      (0, t._)(
                                        "div",
                                        null,
                                        (0, i.zw)(
                                          (0, n.SU)(a)(
                                            "sharedialog.We want this website to be safe place for everyone"
                                          )
                                        ),
                                        1
                                      ),
                                      (0, t._)("div", null, [
                                        (0, t.Wm)(
                                          u,
                                          { to: "/faq/terms" },
                                          {
                                            default: (0, t.w5)(() => [
                                              (0, t.Uk)(
                                                (0, i.zw)(
                                                  (0, n.SU)(a)(
                                                    "appInfo.Terms of service"
                                                  )
                                                ),
                                                1
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      (0, t.Wm)(
                                        c,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          color: "primary",
                                          label: (0, n.SU)(a)(
                                            "sharedialog.See my shared wheels"
                                          ),
                                          onClick: w,
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  r,
                                  { align: "right" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        c,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          label: (0, n.SU)(a)("common.Cancel"),
                                          onClick: l[0] || (l[0] = (e) => f()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                      (0, t.Wm)(
                                        c,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          color: "primary",
                                          label: (0, n.SU)(a)("common.Continue"),
                                          onClick: l[1] || (l[1] = (e) => h()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          },
          Fe = Ee,
          Te = Fe;
        g()(Ee, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QBtn: f.Z,
          QCardActions: Y.Z,
        });
        var He = a(65819);
        const Le = (e) => (
          (0, t.dD)("data-v-251a6d40"), (e = e()), (0, t.Cn)(), e
        ),
          Ae = { class: "text-h6" },
          Ie = Le(() => (0, t._)("i", { class: "fa fa-share-alt" }, null, -1)),
          je = { key: 0 },
          Re = { class: "text-left" },
          Be = { class: "text-left" },
          Oe = Le(() => (0, t._)("th", { class: "desktop-only" }, null, -1)),
          Pe = { class: "text-left desktop-only" },
          Ne = { class: "text-right desktop-only" },
          Me = Le(() => (0, t._)("th", { class: "desktop-only" }, null, -1)),
          Ge = { class: "break-long-words" },
          Ke = ["href"],
          Ye = { class: "desktop-only" },
          $e = { class: "desktop-only" },
          Je = { class: "text-right desktop-only" },
          Xe = { class: "desktop-only" },
          el = { key: 0 },
          ll = {
            setup(e, { expose: l }) {
              const a = (0, s.oR)(),
                u = (0, c.Z)(),
                { t: d, locale: m } = (0, r.QT)(),
                h = (0, n.iH)(!1),
                f = (0, n.iH)([]),
                v = (0, t.Fl)(() => 0 == f.value.length);
              async function g() {
                (0, p.trackEvent)("Wheel", "ViewSharedWheelsAttempt"),
                  await U(),
                  (0, p.trackEvent)("Wheel", "ViewSharedWheelsSuccess"),
                  (h.value = !0);
              }
              function k() {
                h.value = !1;
              }
              function W(e) {
                return (
                  location.protocol + "//" + (0, w.WN)(location.host, m.value, e)
                );
              }
              function y(e) {
                return (0, w.WN)(location.host, m.value, e);
              }
              async function _(e) {
                await navigator.clipboard.writeText(e);
                const l = d("sharedialog.Link copied to the clipboard");
                R.c0(l);
              }
              async function S(e) {
                const l = d("opendialog.Are you sure", {
                  wheelTitle: (0, p.escapeHtml)(e),
                });
                if (await R.iG(d, l))
                  try {
                    (f.value = f.value.filter((l) => l.path != e)),
                      await a.dispatch("deleteWheel", e);
                  } catch (t) {
                    (0, p.trackException)("DeleteSharedWheelError", t),
                      R.x2(d, t);
                  }
              }
              async function U() {
                try {
                  u.loading.show(),
                    (await a.dispatch("userIsLoggedIn")) ||
                    (await a.dispatch("loginAnonymously")),
                    (f.value = await a.dispatch("getSharedWheels", {
                      fields: "path,config.title,created,readCount",
                    }));
                } catch (e) {
                  R.x2(d, e), (0, p.trackException)("ViewSharedWheelsError", e);
                } finally {
                  u.loading.hide();
                }
              }
              return (
                l({ show: g }),
                (e, l) => {
                  const a = (0, t.up)("q-space"),
                    s = (0, t.up)("q-card-section"),
                    c = (0, t.up)("q-btn"),
                    r = (0, t.up)("q-markup-table"),
                    w = (0, t.up)("q-card-actions"),
                    g = (0, t.up)("q-card"),
                    U = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      U,
                      {
                        modelValue: h.value,
                        "onUpdate:modelValue":
                          l[1] || (l[1] = (e) => (h.value = e)),
                        maximized: (0, n.SU)(u).platform.is.mobile,
                        style: { "max-width": "900px" },
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            g,
                            { style: { width: "900px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  s,
                                  {
                                    class: "row items-center",
                                    style: { "background-color": "#00000020" },
                                  },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", Ae, [
                                        Ie,
                                        (0, t.Uk)(
                                          " " +
                                          (0, i.zw)(
                                            (0, n.SU)(d)(
                                              "sharedialog.My shared wheels"
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                      (0, t.Wm)(a),
                                      (0, t.Wm)(He.Z),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  s,
                                  {
                                    style: {
                                      "max-height": "75vh",
                                      overflow: "auto",
                                    },
                                  },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        r,
                                        { flat: "" },
                                        {
                                          default: (0, t.w5)(() => [
                                            (0, t._)("thead", null, [
                                              (0, n.SU)(v)
                                                ? (0, t.kq)("", !0)
                                                : ((0, t.wg)(),
                                                  (0, t.iD)("tr", je, [
                                                    (0, t._)(
                                                      "th",
                                                      Re,
                                                      (0, i.zw)(
                                                        (0, n.SU)(d)(
                                                          "common.Wheel title"
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    (0, t._)(
                                                      "th",
                                                      Be,
                                                      (0, i.zw)(
                                                        (0, n.SU)(d)(
                                                          "sharedialog.Link"
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    Oe,
                                                    (0, t._)(
                                                      "th",
                                                      Pe,
                                                      (0, i.zw)(
                                                        (0, n.SU)(d)(
                                                          "sharedialog.Created"
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    (0, t._)(
                                                      "th",
                                                      Ne,
                                                      (0, i.zw)(
                                                        (0, n.SU)(d)(
                                                          "sharedialog.Visits"
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    Me,
                                                  ])),
                                            ]),
                                            (0, t.Wm)(
                                              o.W3,
                                              {
                                                name: "animated-list",
                                                tag: "tbody",
                                              },
                                              {
                                                default: (0, t.w5)(() => [
                                                  ((0, t.wg)(!0),
                                                    (0, t.iD)(
                                                      t.HY,
                                                      null,
                                                      (0, t.Ko)(
                                                        f.value,
                                                        (e) => (
                                                          (0, t.wg)(),
                                                          (0, t.iD)(
                                                            "tr",
                                                            { key: e.path },
                                                            [
                                                              (0, t._)(
                                                                "td",
                                                                Ge,
                                                                (0, i.zw)(
                                                                  e.config.title
                                                                ),
                                                                1
                                                              ),
                                                              (0, t._)("td", null, [
                                                                (0, t._)(
                                                                  "a",
                                                                  {
                                                                    href: W(e.path),
                                                                  },
                                                                  (0, i.zw)(
                                                                    y(e.path)
                                                                  ),
                                                                  9,
                                                                  Ke
                                                                ),
                                                              ]),
                                                              (0, t._)("td", Ye, [
                                                                (0, t.Wm)(
                                                                  c,
                                                                  {
                                                                    icon: "far fa-clipboard",
                                                                    flat: "",
                                                                    round: "",
                                                                    dense: "",
                                                                    size: "sm",
                                                                    onClick: (l) =>
                                                                      _(W(e.path)),
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ["onClick"]
                                                                ),
                                                              ]),
                                                              (0, t._)(
                                                                "td",
                                                                $e,
                                                                (0, i.zw)(
                                                                  (0, n.SU)(
                                                                    p.getTimeAgo
                                                                  )(
                                                                    e.created,
                                                                    (0, n.SU)(m)
                                                                  )
                                                                ),
                                                                1
                                                              ),
                                                              (0, t._)(
                                                                "td",
                                                                Je,
                                                                (0, i.zw)(
                                                                  (0, n.SU)(
                                                                    p.localestring
                                                                  )(e.readCount)
                                                                ),
                                                                1
                                                              ),
                                                              (0, t._)("td", Xe, [
                                                                (0, t.Wm)(
                                                                  c,
                                                                  {
                                                                    icon: "far fa-trash-alt",
                                                                    flat: "",
                                                                    round: "",
                                                                    dense: "",
                                                                    size: "sm",
                                                                    color:
                                                                      "negative",
                                                                    onClick: (l) =>
                                                                      S(e.path),
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ["onClick"]
                                                                ),
                                                              ]),
                                                            ]
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                  (0, n.SU)(v)
                                                    ? ((0, t.wg)(),
                                                      (0, t.iD)("tr", el, [
                                                        (0, t._)(
                                                          "td",
                                                          null,
                                                          (0, i.zw)(
                                                            (0, n.SU)(d)(
                                                              "sharedialog.No wheels found"
                                                            )
                                                          ),
                                                          1
                                                        ),
                                                      ]))
                                                    : (0, t.kq)("", !0),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  w,
                                  { align: "right" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        c,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          color: "primary",
                                          label: (0, n.SU)(d)("common.Close"),
                                          onClick: l[0] || (l[0] = (e) => k()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue", "maximized"]
                    )
                  );
                }
              );
            },
          };
        var al = a(11639),
          tl = a(66933);
        const nl = (0, al.Z)(ll, [["__scopeId", "data-v-251a6d40"]]),
          ol = nl;
        g()(ll, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QSpace: q.Z,
          QMarkupTable: tl.Z,
          QBtn: f.Z,
          QCardActions: Y.Z,
        });
        const il = { class: "text-h6" },
          sl = (0, t._)("i", { class: "fa fa-share-alt" }, null, -1),
          ul = { class: "q-gutter-y-sm" },
          cl = { for: "wheelTitleField" },
          rl = { class: "q-gutter-y-sm" },
          dl = { class: "q-gutter-y-sm" },
          ml = { key: 0, class: "q-gutter-y-sm" },
          pl = { for: "wheelDescriptionField" },
          wl = {
            setup(e, { expose: l }) {
              const a = (0, s.oR)(),
                { t: u, locale: c } = (0, r.QT)(),
                d = (0, n.iH)(!1),
                m = (0, n.iH)(null),
                p = (0, n.iH)(),
                w = (0, n.iH)(),
                h = (0, n.iH)(!1),
                f = (0, t.Fl)({
                  get: () => a.getters.showTitle,
                  set: (e) => {
                    a.commit("setShowTitle", e);
                  },
                }),
                v = (0, n.iH)("copyable");
              let g, k;
              async function W() {
                return (
                  (p.value = a.getters.wheelTitle),
                  (w.value = a.getters.wheelDescription),
                  (v.value = "copyable"),
                  (d.value = !0),
                  new Promise((e, l) => {
                    (g = e), (k = l);
                  })
                );
              }
              async function y() {
                if (U())
                  if ("gallery" === v.value) {
                    const e = u(
                      "sharedialog.You are about to publish your wheel to the public gallery"
                    );
                    (await R.iG(u, e)) && _();
                  } else _();
              }
              function _() {
                a.commit("setWheelTitle", p.value),
                  a.commit("setWheelDescription", w.value),
                  g(v.value),
                  (d.value = !1);
              }
              function S() {
                g(), (d.value = !1);
              }
              function U() {
                return m.value.validate(), !m.value.hasError;
              }
              return (
                l({ askUserForSettings: W }),
                (e, l) => {
                  const a = (0, t.up)("q-card-section"),
                    s = (0, t.up)("q-input"),
                    c = (0, t.up)("q-checkbox"),
                    r = (0, t.up)("q-radio"),
                    g = (0, t.up)("q-btn"),
                    k = (0, t.up)("q-card-actions"),
                    W = (0, t.up)("q-card"),
                    _ = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      _,
                      {
                        modelValue: d.value,
                        "onUpdate:modelValue":
                          l[10] || (l[10] = (e) => (d.value = e)),
                        onShow: l[11] || (l[11] = (e) => m.value.select()),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            W,
                            { style: { width: "640px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  a,
                                  { style: { "background-color": "#00000020" } },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", il, [
                                        sl,
                                        (0, t.Uk)(
                                          " " +
                                          (0, i.zw)(
                                            (0, n.SU)(u)(
                                              "sharedialog.Shareable link"
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  a,
                                  { class: "q-gutter-y-md" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", ul, [
                                        (0, t._)(
                                          "label",
                                          cl,
                                          (0, i.zw)(
                                            (0, n.SU)(u)("common.Wheel title")
                                          ),
                                          1
                                        ),
                                        (0, t.Wm)(
                                          s,
                                          {
                                            id: "wheelTitleField",
                                            modelValue: p.value,
                                            "onUpdate:modelValue":
                                              l[0] ||
                                              (l[0] = (e) => (p.value = e)),
                                            filled: "",
                                            dense: "",
                                            "bottom-slots": "",
                                            rules: [
                                              (e) =>
                                                e.length > 0 ||
                                                (0, n.SU)(u)(
                                                  "sharedialog.Your wheel must have a title"
                                                ),
                                            ],
                                            ref_key: "wheelTitleField",
                                            ref: m,
                                            maxlength: "50",
                                            onKeyup:
                                              l[1] ||
                                              (l[1] = (0, o.D2)(
                                                (e) => y(),
                                                ["native", "enter"]
                                              )),
                                          },
                                          null,
                                          8,
                                          ["modelValue", "rules"]
                                        ),
                                        (0, t.Wm)(
                                          c,
                                          {
                                            modelValue: (0, n.SU)(f),
                                            "onUpdate:modelValue":
                                              l[2] ||
                                              (l[2] = (e) =>
                                                (0, n.dq)(f)
                                                  ? (f.value = e)
                                                  : null),
                                          },
                                          {
                                            default: (0, t.w5)(() => [
                                              (0, t.Uk)(
                                                (0, i.zw)(
                                                  (0, n.SU)(u)(
                                                    "sharedialog.Show title to people"
                                                  )
                                                ),
                                                1
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["modelValue"]
                                        ),
                                      ]),
                                      (0, t._)("div", rl, [
                                        (0, t._)(
                                          "div",
                                          null,
                                          (0, i.zw)(
                                            (0, n.SU)(u)("sharedialog.Visibility")
                                          ),
                                          1
                                        ),
                                        (0, t._)("div", dl, [
                                          (0, t.Wm)(
                                            r,
                                            {
                                              modelValue: v.value,
                                              "onUpdate:modelValue":
                                                l[3] ||
                                                (l[3] = (e) => (v.value = e)),
                                              dense: "",
                                              val: "spin-only",
                                              label: (0, n.SU)(u)(
                                                "sharedialog.Anyone with the link can spin the wheel"
                                              ),
                                            },
                                            null,
                                            8,
                                            ["modelValue", "label"]
                                          ),
                                          (0, t.Wm)(
                                            r,
                                            {
                                              modelValue: v.value,
                                              "onUpdate:modelValue":
                                                l[4] ||
                                                (l[4] = (e) => (v.value = e)),
                                              dense: "",
                                              val: "copyable",
                                              label: (0, n.SU)(u)(
                                                "sharedialog.Anyone with the link can spin the wheel and create their own copy"
                                              ),
                                            },
                                            null,
                                            8,
                                            ["modelValue", "label"]
                                          ),
                                          (0, t.Wm)(
                                            r,
                                            {
                                              modelValue: v.value,
                                              "onUpdate:modelValue":
                                                l[5] ||
                                                (l[5] = (e) => (v.value = e)),
                                              dense: "",
                                              val: "gallery",
                                              label: (0, n.SU)(u)(
                                                "sharedialog.This wheel would be useful"
                                              ),
                                            },
                                            null,
                                            8,
                                            ["modelValue", "label"]
                                          ),
                                          h.value
                                            ? ((0, t.wg)(),
                                              (0, t.j4)(
                                                r,
                                                {
                                                  key: 0,
                                                  modelValue: v.value,
                                                  "onUpdate:modelValue":
                                                    l[6] ||
                                                    (l[6] = (e) => (v.value = e)),
                                                  dense: "",
                                                  val: "live",
                                                  label: (0, n.SU)(u)(
                                                    "sharedialog.Broadcast spins and edits"
                                                  ),
                                                },
                                                null,
                                                8,
                                                ["modelValue", "label"]
                                              ))
                                            : (0, t.kq)("", !0),
                                        ]),
                                      ]),
                                      "gallery" == v.value
                                        ? ((0, t.wg)(),
                                          (0, t.iD)("div", ml, [
                                            (0, t._)(
                                              "label",
                                              pl,
                                              (0, i.zw)(
                                                (0, n.SU)(u)(
                                                  "common.Wheel description"
                                                )
                                              ),
                                              1
                                            ),
                                            (0, t.Wm)(
                                              s,
                                              {
                                                type: "textarea",
                                                modelValue: w.value,
                                                "onUpdate:modelValue":
                                                  l[7] ||
                                                  (l[7] = (e) => (w.value = e)),
                                                filled: "",
                                                dense: "",
                                                maxlength: "200",
                                                rows: "3",
                                                id: "wheelDescriptionField",
                                              },
                                              null,
                                              8,
                                              ["modelValue"]
                                            ),
                                          ]))
                                        : (0, t.kq)("", !0),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  k,
                                  { align: "right" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        g,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          label: (0, n.SU)(u)("common.Cancel"),
                                          onClick: l[8] || (l[8] = (e) => S()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                      (0, t.Wm)(
                                        g,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          color: "primary",
                                          label: (0, n.SU)(u)("common.Continue"),
                                          onClick: l[9] || (l[9] = (e) => y()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          };
        var hl = a(11221),
          fl = a(11480);
        const vl = wl,
          gl = vl;
        g()(wl, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QInput: ce.Z,
          QCheckbox: hl.Z,
          QRadio: fl.Z,
          QCardActions: Y.Z,
          QBtn: f.Z,
        });
        const kl = { class: "text-h6" },
          Wl = (0, t._)("i", { class: "fa fa-share-alt" }, null, -1),
          yl = { class: "row q-gutter-sm" },
          _l = { class: "col-grow" },
          Sl = { class: "col-shrink" },
          Ul = {
            setup(e, { expose: l }) {
              const a = (0, s.oR)(),
                o = (0, c.Z)(),
                { t: u, locale: d } = (0, r.QT)(),
                m = (0, n.iH)(!1),
                h = (0, n.iH)("");
              async function f(e, l, t) {
                o.loading.show();
                try {
                  (await a.dispatch("userIsLoggedIn")) ||
                    (await a.dispatch("loginAnonymously"));
                  const n = window.location.host,
                    o = await a.dispatch("shareWheel", {
                      wheelConfig: a.getters.wheelConfig,
                      shareMode: e,
                      editPermissions: l,
                      password: t,
                    }),
                    i = w.WN(n, d.value, o);
                  (h.value = window.location.protocol + "//" + i),
                    (0, p.trackEvent)("Wheel", "CreateSharableLink"),
                    (m.value = !0);
                } catch (n) {
                  if (n.toString().includes("family")) {
                    const e = u("sharedialog.The wheel includes text that");
                    R.om(u, e);
                  } else R.x2(u, n);
                  (0, p.trackException)("CreateSharableLinkError", n);
                }
                o.loading.hide();
              }
              async function v() {
                await navigator.clipboard.writeText(h.value),
                  (0, p.trackEvent)("Wheel", "CopySharableLink");
                const e = u("sharedialog.Link copied to the clipboard");
                R.c0(e);
              }
              function g() {
                m.value = !1;
              }
              return (
                l({ share: f }),
                (e, l) => {
                  const a = (0, t.up)("q-card-section"),
                    o = (0, t.up)("q-input"),
                    s = (0, t.up)("q-btn"),
                    c = (0, t.up)("q-card-actions"),
                    r = (0, t.up)("q-card"),
                    d = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      d,
                      {
                        modelValue: m.value,
                        "onUpdate:modelValue":
                          l[2] || (l[2] = (e) => (m.value = e)),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            r,
                            { style: { width: "640px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  a,
                                  { style: { "background-color": "#00000020" } },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", kl, [
                                        Wl,
                                        (0, t.Uk)(
                                          " " +
                                          (0, i.zw)(
                                            (0, n.SU)(u)(
                                              "sharedialog.Shareable link"
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  a,
                                  { class: "q-gutter-y-md" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)(
                                        "div",
                                        null,
                                        (0, i.zw)(
                                          (0, n.SU)(u)(
                                            "sharedialog.Link to this wheel"
                                          )
                                        ),
                                        1
                                      ),
                                      (0, t._)("div", yl, [
                                        (0, t._)("div", _l, [
                                          (0, t.Wm)(
                                            o,
                                            {
                                              id: "sharableLinkText",
                                              modelValue: h.value,
                                              "onUpdate:modelValue":
                                                l[0] ||
                                                (l[0] = (e) => (h.value = e)),
                                              readonly: "",
                                              dense: "",
                                              standout: "",
                                              style: { "min-width": "300px" },
                                            },
                                            null,
                                            8,
                                            ["modelValue"]
                                          ),
                                        ]),
                                        (0, t._)("div", Sl, [
                                          (0, t.Wm)(
                                            s,
                                            {
                                              unelevated: "",
                                              "no-caps": "",
                                              color: "positive",
                                              label: (0, n.SU)(u)(
                                                "sharedialog.Copy link"
                                              ),
                                              onClick: v,
                                            },
                                            null,
                                            8,
                                            ["label"]
                                          ),
                                        ]),
                                      ]),
                                      (0, t._)(
                                        "div",
                                        null,
                                        (0, i.zw)(
                                          (0, n.SU)(u)(
                                            "sharedialog.This link will work for anyone"
                                          )
                                        ),
                                        1
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  c,
                                  { align: "right" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        s,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          color: "primary",
                                          label: (0, n.SU)(u)("common.Close"),
                                          onClick: l[1] || (l[1] = (e) => g()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          },
          bl = Ul,
          Cl = bl;
        g()(Ul, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QInput: ce.Z,
          QBtn: f.Z,
          QCardActions: Y.Z,
        });
        const ql = { class: "text-h6" },
          Zl = (0, t._)("i", { class: "fa fa-share-alt" }, null, -1),
          xl = { class: "q-gutter-y-sm" },
          Ql = { class: "q-gutter-y-sm" },
          Dl = { class: "row" },
          zl = { class: "row q-gutter-x-md" },
          Vl = { class: "row" },
          El = {
            setup(e, { expose: l }) {
              (0, s.oR)();
              const { t: a, locale: o } = (0, r.QT)(),
                u = (0, n.iH)(!1),
                c = (0, n.iH)("owner"),
                d = (0, n.iH)("");
              let m, p;
              async function w() {
                return (
                  (c.value = "owner"),
                  (d.value = ""),
                  (u.value = !0),
                  new Promise((e, l) => {
                    (m = e), (p = l);
                  })
                );
              }
              function h() {
                m({ editPermissions: c.value, password: d.value }),
                  (u.value = !1);
              }
              function f() {
                m(), (u.value = !1);
              }
              return (
                l({ show: w }),
                (e, l) => {
                  const o = (0, t.up)("q-card-section"),
                    s = (0, t.up)("q-radio"),
                    r = (0, t.up)("q-input"),
                    m = (0, t.up)("q-btn"),
                    p = (0, t.up)("q-card-actions"),
                    w = (0, t.up)("q-card"),
                    v = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      v,
                      {
                        modelValue: u.value,
                        "onUpdate:modelValue":
                          l[6] || (l[6] = (e) => (u.value = e)),
                        onShow:
                          l[7] || (l[7] = (l) => e.wheelTitleField.select()),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            w,
                            { style: { width: "640px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  o,
                                  { style: { "background-color": "#00000020" } },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", ql, [
                                        Zl,
                                        (0, t.Uk)(
                                          " " +
                                          (0, i.zw)(
                                            (0, n.SU)(a)(
                                              "sharedialog.Shareable link"
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  o,
                                  { class: "q-gutter-y-md" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", xl, [
                                        (0, t._)(
                                          "div",
                                          null,
                                          (0, i.zw)(
                                            (0, n.SU)(a)(
                                              "sharedialog.Who can spin and edit the wheel"
                                            )
                                          ),
                                          1
                                        ),
                                        (0, t._)("div", Ql, [
                                          (0, t._)("div", Dl, [
                                            (0, t.Wm)(
                                              s,
                                              {
                                                modelValue: c.value,
                                                "onUpdate:modelValue":
                                                  l[0] ||
                                                  (l[0] = (e) => (c.value = e)),
                                                dense: "",
                                                val: "owner",
                                                label: (0, n.SU)(a)(
                                                  "sharedialog.Only me"
                                                ),
                                              },
                                              null,
                                              8,
                                              ["modelValue", "label"]
                                            ),
                                          ]),
                                          (0, t._)("div", zl, [
                                            (0, t.Wm)(
                                              s,
                                              {
                                                modelValue: c.value,
                                                "onUpdate:modelValue":
                                                  l[1] ||
                                                  (l[1] = (e) => (c.value = e)),
                                                dense: "",
                                                val: "password",
                                                label: (0, n.SU)(a)(
                                                  "sharedialog.Anyone who knows the password"
                                                ),
                                              },
                                              null,
                                              8,
                                              ["modelValue", "label"]
                                            ),
                                            (0, t.Wm)(
                                              r,
                                              {
                                                type: "password",
                                                modelValue: d.value,
                                                "onUpdate:modelValue":
                                                  l[2] ||
                                                  (l[2] = (e) => (d.value = e)),
                                                filled: "",
                                                dense: "",
                                                maxlength: "50",
                                                placeholder: (0, n.SU)(a)(
                                                  "sharedialog.Password"
                                                ),
                                                id: "wheelPasswordField",
                                                disable: "password" !== c.value,
                                              },
                                              null,
                                              8,
                                              [
                                                "modelValue",
                                                "placeholder",
                                                "disable",
                                              ]
                                            ),
                                          ]),
                                          (0, t._)("div", Vl, [
                                            (0, t.Wm)(
                                              s,
                                              {
                                                modelValue: c.value,
                                                "onUpdate:modelValue":
                                                  l[3] ||
                                                  (l[3] = (e) => (c.value = e)),
                                                dense: "",
                                                val: "anyone",
                                                label: (0, n.SU)(a)(
                                                  "sharedialog.Anyone with the link"
                                                ),
                                              },
                                              null,
                                              8,
                                              ["modelValue", "label"]
                                            ),
                                          ]),
                                        ]),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  p,
                                  { align: "right" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        m,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          label: (0, n.SU)(a)("common.Cancel"),
                                          onClick: l[4] || (l[4] = (e) => f()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                      (0, t.Wm)(
                                        m,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          color: "primary",
                                          label: (0, n.SU)(a)("common.Continue"),
                                          onClick: l[5] || (l[5] = (e) => h()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          },
          Fl = El,
          Tl = Fl;
        g()(El, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QRadio: fl.Z,
          QInput: ce.Z,
          QCardActions: Y.Z,
          QBtn: f.Z,
        });
        var Hl = a(12762);
        const Ll = { class: "text-h6" },
          Al = (0, t._)("i", { class: "fa fa-link" }, null, -1),
          Il = { style: { "margin-top": "10px" } },
          jl = { style: { "margin-top": "10px", color: "#999" } },
          Rl = {
            setup(e, { expose: l }) {
              const a = (0, s.oR)(),
                { t: o, locale: u } = ((0, c.Z)(), (0, r.QT)()),
                d = (0, n.iH)(!1);
              let m, w;
              async function h() {
                return (
                  (0, p.trackEvent)("Wheel", "ShowSpreadsheetDialog"),
                  (d.value = !0),
                  new Promise((e, l) => {
                    (m = e), (w = l);
                  })
                );
              }
              async function f() {
                d.value = !1;
                try {
                  (0, p.trackEvent)("Wheel", "LoginForSheetAttempt", "");
                  const e = await a.dispatch("logInToSheets", u);
                  (0, p.trackEvent)("Wheel", "LoginForSheetSuccess", ""), m(e);
                } catch (e) {
                  (0, p.trackException)("LoginForSheetError", e),
                    (0, p.trackEvent)(
                      "Wheel",
                      "LoginForSheetFailure",
                      e.toString()
                    ),
                    R.x2(o, e),
                    w();
                }
              }
              function v() {
                (d.value = !1), m();
              }
              return (
                l({ askUserToLogIn: h }),
                (e, l) => {
                  const a = (0, t.up)("q-card-section"),
                    s = (0, t.up)("q-btn"),
                    u = (0, t.up)("q-card-actions"),
                    c = (0, t.up)("q-card"),
                    r = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      r,
                      {
                        modelValue: d.value,
                        "onUpdate:modelValue":
                          l[2] || (l[2] = (e) => (d.value = e)),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            c,
                            { style: { width: "640px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  a,
                                  { style: { "background-color": "#00000020" } },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", Ll, [
                                        Al,
                                        (0, t.Uk)(
                                          " " +
                                          (0, i.zw)(
                                            (0, n.SU)(o)(
                                              "common.Link Google Spreadsheet"
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(a, null, {
                                  default: (0, t.w5)(() => [
                                    (0, t._)(
                                      "div",
                                      null,
                                      (0, i.zw)(
                                        (0, n.SU)(o)(
                                          "sheetdialog.When you link a spreadsheet"
                                        )
                                      ),
                                      1
                                    ),
                                    (0, t._)(
                                      "p",
                                      Il,
                                      (0, i.zw)(
                                        (0, n.SU)(o)(
                                          "sheetdialog.To import sheets"
                                        )
                                      ),
                                      1
                                    ),
                                    (0, t._)(
                                      "p",
                                      jl,
                                      (0, i.zw)(
                                        (0, n.SU)(o)(
                                          "common.If you dont see a Google login button below"
                                        )
                                      ),
                                      1
                                    ),
                                  ]),
                                  _: 1,
                                }),
                                (0, t.Wm)(
                                  u,
                                  { align: "right" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        s,
                                        {
                                          unelevated: "",
                                          label: (0, n.SU)(o)("common.Cancel"),
                                          onClick: l[0] || (l[0] = (e) => v()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                      (0, t._)("input", {
                                        type: "image",
                                        style: { height: "40px" },
                                        alt: "Sign in with Google",
                                        src: "/images/btn_google_signin_dark_normal_web@2x.png",
                                        onClick: l[1] || (l[1] = (e) => f()),
                                      }),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          },
          Bl = Rl,
          Ol = Bl;
        async function Pl(e) {
          const l = await gapi.client.sheets.spreadsheets.get({
            spreadsheetId: e,
          });
          return l.result.properties.title;
        }
        async function Nl(e) {
          const l = await gapi.client.sheets.spreadsheets.get({
            spreadsheetId: e,
          });
          return l.result.sheets.map((e) => e.properties.title);
        }
        async function Ml(e, l) {
          const a = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: e,
            range: l,
          }),
            t = [],
            n = a.result;
          if (n.values && n.values.length > 0) {
            const e = Kl(n.values)[0];
            for (let l = 0; l < e.length && l < 27; l++)
              t.push({ id: String.fromCharCode(l + 65), name: e[l] });
          }
          return t;
        }
        async function Gl(e, l, a, t) {
          const n = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: e,
            range: l + "!" + a + ":" + a,
          }),
            o = [];
          if (n.result.values && n.result.values.length > 0) {
            const e = Kl(n.result.values);
            for (let l = 0; l < e.length; l++)
              if (0 == l && t);
              else {
                const a = e[l];
                "undefined" != typeof a[0] && o.push(a[0]);
              }
          }
          return o;
        }
        function Kl(e) {
          return e.filter((e) => e.length > 0);
        }
        g()(Rl, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QCardActions: Y.Z,
          QBtn: f.Z,
        });
        const Yl = { class: "text-h6" },
          $l = (0, t._)("i", { class: "fa fa-link" }, null, -1),
          Jl = { class: "row items-center" },
          Xl = { class: "col-4" },
          ea = { class: "col" },
          la = { class: "row items-center" },
          aa = { class: "col-4" },
          ta = { class: "col" },
          na = { class: "row items-center" },
          oa = { class: "col-4" },
          ia = { class: "col" },
          sa = { class: "row items-center" },
          ua = { class: "col-4" },
          ca = { class: "col" },
          ra = {
            setup(e, { expose: l }) {
              (0, s.oR)(), (0, c.Z)();
              const { t: a, locale: o } = (0, r.QT)(),
                u = (0, n.iH)(!1),
                d = (0, n.iH)(""),
                m = (0, n.iH)(""),
                w = (0, n.iH)(null),
                h = (0, n.iH)(null),
                f = (0, n.iH)([]),
                v = (0, n.iH)([]),
                g = (0, n.iH)(!0);
              let k, W;
              async function y(e) {
                return (
                  (u.value = !0),
                  (d.value = e),
                  new Promise(async (e, l) => {
                    (k = e),
                      (W = l),
                      (m.value = ""),
                      (w.value = ""),
                      (f.value = []),
                      (h.value = ""),
                      (v.value = []),
                      (m.value = await Pl(d.value)),
                      (f.value = await Nl(d.value)),
                      f.value.length > 0 && (w.value = f.value[0]);
                  })
                );
              }
              function _() {
                (0, p.trackEvent)("Wheel", "LinkSpreadsheet"),
                  (u.value = !1),
                  k({ tab: w.value, column: h.value, skipFirstRow: g.value });
              }
              function S() {
                (u.value = !1), k({ tab: "", column: "", skipFirstRow: !1 });
              }
              return (
                (0, t.YP)(
                  () => w.value,
                  async (e) => {
                    (v.value = []), (h.value = "");
                    const l = await Ml(d.value, e);
                    (v.value = l.map((e) => ({ value: e.id, label: e.name }))),
                      v.value.length > 0 && (h.value = v.value[0].value);
                  }
                ),
                l({ askUserToConfigure: y }),
                (e, l) => {
                  const o = (0, t.up)("q-card-section"),
                    s = (0, t.up)("q-input"),
                    c = (0, t.up)("q-select"),
                    r = (0, t.up)("q-checkbox"),
                    d = (0, t.up)("q-btn"),
                    p = (0, t.up)("q-card-actions"),
                    k = (0, t.up)("q-card"),
                    W = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      W,
                      {
                        modelValue: u.value,
                        "onUpdate:modelValue":
                          l[6] || (l[6] = (e) => (u.value = e)),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            k,
                            { style: { width: "640px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  o,
                                  { style: { "background-color": "#00000020" } },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", Yl, [
                                        $l,
                                        (0, t.Uk)(
                                          " " +
                                          (0, i.zw)(
                                            (0, n.SU)(a)(
                                              "common.Link Google Spreadsheet"
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  o,
                                  { class: "q-gutter-md" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", Jl, [
                                        (0, t._)(
                                          "div",
                                          Xl,
                                          (0, i.zw)(
                                            (0, n.SU)(a)(
                                              "sheetdialog.Selected spreadsheet"
                                            )
                                          ),
                                          1
                                        ),
                                        (0, t._)("div", ea, [
                                          (0, t.Wm)(
                                            s,
                                            {
                                              dense: "",
                                              filled: "",
                                              modelValue: m.value,
                                              "onUpdate:modelValue":
                                                l[0] ||
                                                (l[0] = (e) => (m.value = e)),
                                              readonly: "",
                                            },
                                            null,
                                            8,
                                            ["modelValue"]
                                          ),
                                        ]),
                                      ]),
                                      (0, t._)("div", la, [
                                        (0, t._)(
                                          "div",
                                          aa,
                                          (0, i.zw)(
                                            (0, n.SU)(a)("sheetdialog.Tab")
                                          ),
                                          1
                                        ),
                                        (0, t._)("div", ta, [
                                          (0, t.Wm)(
                                            c,
                                            {
                                              modelValue: w.value,
                                              "onUpdate:modelValue":
                                                l[1] ||
                                                (l[1] = (e) => (w.value = e)),
                                              options: f.value,
                                              filled: "",
                                              dense: "",
                                            },
                                            null,
                                            8,
                                            ["modelValue", "options"]
                                          ),
                                        ]),
                                      ]),
                                      (0, t._)("div", na, [
                                        (0, t._)(
                                          "div",
                                          oa,
                                          (0, i.zw)(
                                            (0, n.SU)(a)("sheetdialog.Column")
                                          ),
                                          1
                                        ),
                                        (0, t._)("div", ia, [
                                          (0, t.Wm)(
                                            c,
                                            {
                                              modelValue: h.value,
                                              "onUpdate:modelValue":
                                                l[2] ||
                                                (l[2] = (e) => (h.value = e)),
                                              options: v.value,
                                              filled: "",
                                              dense: "",
                                              "emit-value": "",
                                              "map-options": "",
                                            },
                                            null,
                                            8,
                                            ["modelValue", "options"]
                                          ),
                                        ]),
                                      ]),
                                      (0, t._)("div", sa, [
                                        (0, t._)(
                                          "div",
                                          ua,
                                          (0, i.zw)(
                                            (0, n.SU)(a)("sheetdialog.First row")
                                          ),
                                          1
                                        ),
                                        (0, t._)("div", ca, [
                                          (0, t.Wm)(
                                            r,
                                            {
                                              modelValue: g.value,
                                              "onUpdate:modelValue":
                                                l[3] ||
                                                (l[3] = (e) => (g.value = e)),
                                              label: (0, n.SU)(a)(
                                                "sheetdialog.Is a header and should not be imported"
                                              ),
                                            },
                                            null,
                                            8,
                                            ["modelValue", "label"]
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  p,
                                  { align: "right" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        d,
                                        {
                                          unelevated: "",
                                          label: (0, n.SU)(a)("common.Cancel"),
                                          onClick: l[4] || (l[4] = (e) => S()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                      (0, t.Wm)(
                                        d,
                                        {
                                          unelevated: "",
                                          color: "primary",
                                          label: (0, n.SU)(a)("common.OK"),
                                          onClick: l[5] || (l[5] = (e) => _()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          },
          da = ra,
          ma = da;
        g()(ra, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QInput: ce.Z,
          QSelect: ye.Z,
          QCheckbox: hl.Z,
          QCardActions: Y.Z,
          QBtn: f.Z,
        });
        const pa = { class: "text-h6" },
          wa = (0, t._)("i", { class: "fas fa-user-alt" }, null, -1),
          ha = { class: "row items-center q-gutter-x-md" },
          fa = { class: "col-shrink" },
          va = ["src"],
          ga = { class: "col text-h5" },
          ka = { class: "col-shrink" },
          Wa = { class: "q-gutter-x-md" },
          ya = {
            setup(e, { expose: l }) {
              const a = (0, s.oR)(),
                o = (0, u.tv)(),
                { t: d } = (0, r.QT)(),
                m = (0, c.Z)(),
                w = (0, n.iH)(!1);
              function h() {
                (0, p.trackEvent)("Wheel", "ShowAccountDialog"), (w.value = !0);
              }
              function f() {
                a.dispatch("logOut"), (w.value = !1);
              }
              async function v() {
                const e = d(
                  "profiledropdown.Are you sure you want to delete your account"
                );
                if (await R.iG(d, e)) {
                  m.loading.show();
                  try {
                    (0, p.trackEvent)("Wheel", "DeleteAccount"),
                      await a.dispatch("deleteAccount"),
                      a.dispatch("resetWheel", d("common.We have a winner!")),
                      R.c0(
                        d(
                          "profiledropdown.Your account and your saved wheels have been deleted"
                        )
                      );
                  } catch (l) {
                    R.x2(d, l), (0, p.trackException)("DeleteAccountError", l);
                  }
                  m.loading.hide(), (w.value = !1);
                }
              }
              return (
                l({ show: h }),
                (e, l) => {
                  const s = (0, t.up)("q-space"),
                    u = (0, t.up)("q-card-section"),
                    c = (0, t.up)("q-avatar"),
                    r = (0, t.up)("q-btn"),
                    m = (0, t.up)("q-card-actions"),
                    p = (0, t.up)("q-card"),
                    h = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      h,
                      {
                        modelValue: w.value,
                        "onUpdate:modelValue":
                          l[4] || (l[4] = (e) => (w.value = e)),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            p,
                            { style: { width: "640px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  u,
                                  {
                                    class: "row items-center",
                                    style: { "background-color": "#00000020" },
                                  },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", pa, [
                                        wa,
                                        (0, t.Uk)(
                                          " " +
                                          (0, i.zw)(
                                            (0, n.SU)(d)("common.My account")
                                          ),
                                          1
                                        ),
                                      ]),
                                      (0, t.Wm)(s),
                                      (0, t.Wm)(He.Z),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  u,
                                  { class: "q-gutter-y-md" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", ha, [
                                        (0, t._)("div", fa, [
                                          (0, t.Wm)(
                                            c,
                                            { size: "64px" },
                                            {
                                              default: (0, t.w5)(() => [
                                                (0, t._)(
                                                  "img",
                                                  {
                                                    src: e.$store.getters
                                                      .userPhotoUrl,
                                                  },
                                                  null,
                                                  8,
                                                  va
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        (0, t._)(
                                          "div",
                                          ga,
                                          (0, i.zw)(
                                            (0, n.SU)(d)(
                                              "profiledropdown.Signed in as",
                                              {
                                                name: (0, n.SU)(a).getters
                                                  .userDisplayName,
                                              }
                                            )
                                          ),
                                          1
                                        ),
                                        (0, t._)("div", ka, [
                                          (0, t.Wm)(
                                            r,
                                            {
                                              unelevated: "",
                                              "no-caps": "",
                                              color: "warning",
                                              "text-color": "black",
                                              label: (0, n.SU)(d)(
                                                "profiledropdown.Sign out"
                                              ),
                                              onClick:
                                                l[0] || (l[0] = (e) => f()),
                                            },
                                            null,
                                            8,
                                            ["label"]
                                          ),
                                        ]),
                                      ]),
                                      (0, t._)("div", Wa, [
                                        (0, t.Wm)(
                                          r,
                                          {
                                            unelevated: "",
                                            "no-caps": "",
                                            color: "primary",
                                            label: (0, n.SU)(d)(
                                              "profiledropdown.Export my data"
                                            ),
                                            onClick:
                                              l[1] ||
                                              (l[1] = (e) =>
                                                (0, n.SU)(o).push("/export")),
                                          },
                                          null,
                                          8,
                                          ["label"]
                                        ),
                                        (0, t.Wm)(
                                          r,
                                          {
                                            unelevated: "",
                                            "no-caps": "",
                                            color: "negative",
                                            label: (0, n.SU)(d)(
                                              "profiledropdown.Delete my account"
                                            ),
                                            onClick: l[2] || (l[2] = (e) => v()),
                                          },
                                          null,
                                          8,
                                          ["label"]
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  m,
                                  { align: "right" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        r,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          label: (0, n.SU)(d)("common.Close"),
                                          onClick:
                                            l[3] ||
                                            (l[3] = (e) => (w.value = !1)),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          },
          _a = ya,
          Sa = _a;
        g()(ya, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QSpace: q.Z,
          QAvatar: C.Z,
          QBtn: f.Z,
          QCardActions: Y.Z,
        });
        var Ua = a(78821);
        const ba = (e) => (
          (0, t.dD)("data-v-06d9ceb7"), (e = e()), (0, t.Cn)(), e
        ),
          Ca = { class: "text-h6" },
          qa = ba(() => (0, t._)("i", { class: "fas fa-globe" }, null, -1)),
          Za = { class: "text-h6", style: { "margin-top": "16px" } },
          xa = { class: "q-py-md" },
          Qa = { class: "row items-start q-gutter-md" },
          Da = ["onClick"],
          za = { class: "text-h6", style: { "margin-top": "16px" } },
          Va = { class: "q-py-md", style: { height: "40vh", overflow: "auto" } },
          Ea = { class: "row items-start q-gutter-md" },
          Fa = ["onClick"],
          Ta = {
            emits: ["language-changed"],
            setup(e, { expose: l, emit: a }) {
              const { t: o } = (0, r.QT)(),
                s = (0, n.iH)(!1),
                u = (0, n.iH)([]),
                c = (0, n.iH)([]),
                d = (0, n.iH)(""),
                m = (0, t.Fl)(() => d.value.toLowerCase()),
                h = (0, t.Fl)(() =>
                  u.value.filter(
                    (e) => !d.value || e.humanName.toLowerCase().includes(m.value)
                  )
                );
              async function f() {
                (0, p.trackEvent)("Wheel", "ShowLanguageDialog"),
                  (d.value = ""),
                  (s.value = !0),
                  (u.value = w.NB()),
                  (c.value = w.DA(navigator.languages));
                try {
                  const e = await Ua.xi(),
                    l = [...navigator.languages, ...e];
                  c.value = w.DA(l);
                } catch (e) {
                  (0, p.trackException)("GetLangsForMyAddressError", e);
                }
              }
              function v(e) {
                (0, p.trackEvent)("Wheel", "ChangeLanguageFromNewDialog"),
                  a("language-changed", e),
                  (s.value = !1);
              }
              return (
                l({ show: f }),
                (e, l) => {
                  const a = (0, t.up)("q-space"),
                    u = (0, t.up)("q-card-section"),
                    r = (0, t.up)("q-input"),
                    m = (0, t.up)("q-btn"),
                    p = (0, t.up)("q-card-actions"),
                    w = (0, t.up)("q-card"),
                    f = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      f,
                      {
                        modelValue: s.value,
                        "onUpdate:modelValue":
                          l[2] || (l[2] = (e) => (s.value = e)),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            w,
                            { style: { width: "640px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  u,
                                  {
                                    class: "row items-center",
                                    style: { "background-color": "#00000020" },
                                  },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", Ca, [
                                        qa,
                                        (0, t.Uk)(
                                          " " +
                                          (0, i.zw)(
                                            (0, n.SU)(o)("toolbar.Language")
                                          ),
                                          1
                                        ),
                                      ]),
                                      (0, t.Wm)(a),
                                      (0, t.Wm)(He.Z),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(u, null, {
                                  default: (0, t.w5)(() => [
                                    (0, t._)(
                                      "div",
                                      Za,
                                      (0, i.zw)(
                                        (0, n.SU)(o)(
                                          "languagedialog.Suggested languages"
                                        )
                                      ),
                                      1
                                    ),
                                    (0, t._)("div", xa, [
                                      (0, t._)("div", Qa, [
                                        ((0, t.wg)(!0),
                                          (0, t.iD)(
                                            t.HY,
                                            null,
                                            (0, t.Ko)(
                                              c.value,
                                              (e) => (
                                                (0, t.wg)(),
                                                (0, t.iD)(
                                                  "div",
                                                  {
                                                    key: "locale.name",
                                                    onClick: (l) => v(e.name),
                                                    class: "language",
                                                  },
                                                  (0, i.zw)(e.humanName),
                                                  9,
                                                  Da
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                      ]),
                                    ]),
                                    (0, t._)(
                                      "div",
                                      za,
                                      (0, i.zw)(
                                        (0, n.SU)(o)(
                                          "languagedialog.All languages"
                                        )
                                      ),
                                      1
                                    ),
                                    (0, t.Wm)(
                                      r,
                                      {
                                        dense: "",
                                        filled: "",
                                        modelValue: d.value,
                                        "onUpdate:modelValue":
                                          l[0] || (l[0] = (e) => (d.value = e)),
                                        placeholder: (0, n.SU)(o)(
                                          "common.Search"
                                        ),
                                        style: { "margin-top": "16px" },
                                      },
                                      null,
                                      8,
                                      ["modelValue", "placeholder"]
                                    ),
                                    (0, t._)("div", Va, [
                                      (0, t._)("div", Ea, [
                                        ((0, t.wg)(!0),
                                          (0, t.iD)(
                                            t.HY,
                                            null,
                                            (0, t.Ko)(
                                              (0, n.SU)(h),
                                              (e) => (
                                                (0, t.wg)(),
                                                (0, t.iD)(
                                                  "div",
                                                  {
                                                    key: "locale.name",
                                                    onClick: (l) => v(e.name),
                                                    class: "language",
                                                  },
                                                  (0, i.zw)(e.humanName),
                                                  9,
                                                  Fa
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                      ]),
                                    ]),
                                  ]),
                                  _: 1,
                                }),
                                (0, t.Wm)(
                                  p,
                                  { align: "right" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        m,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          label: (0, n.SU)(o)("common.Close"),
                                          onClick:
                                            l[1] ||
                                            (l[1] = (e) => (s.value = !1)),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          },
          Ha = (0, al.Z)(Ta, [["__scopeId", "data-v-06d9ceb7"]]),
          La = Ha;
        g()(Ta, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QSpace: q.Z,
          QInput: ce.Z,
          QCardActions: Y.Z,
          QBtn: f.Z,
        });
        const Aa = (0, t._)("i", { class: "fas fa-pencil-alt" }, null, -1),
          Ia = {
            setup(e, { expose: l }) {
              const a = (0, s.oR)(),
                { t: u } = (0, r.QT)(),
                c = (0, n.iH)(!1),
                d = (0, t.Fl)(() => a.getters.wheelConfig),
                m = (0, n.iH)(""),
                w = (0, n.iH)("");
              function h() {
                (0, p.trackEvent)("Wheel", "ShowTitleAndDescriptionDialog"),
                  (m.value = d.value.title),
                  (w.value = d.value.description),
                  (c.value = !0);
              }
              function f() {
                (0, p.trackEvent)("Wheel", "SetTitleAndDescription"),
                  a.commit("setWheelTitle", m.value),
                  a.commit("setWheelDescription", w.value),
                  v();
              }
              function v() {
                c.value = !1;
              }
              function g(e) {
                e.preventDefault(), f();
              }
              return (
                l({ show: h }),
                (e, l) => {
                  const a = (0, t.up)("q-card-section"),
                    s = (0, t.up)("q-input"),
                    r = (0, t.up)("q-btn"),
                    d = (0, t.up)("q-card-actions"),
                    p = (0, t.up)("q-card"),
                    h = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      h,
                      {
                        modelValue: c.value,
                        "onUpdate:modelValue":
                          l[4] || (l[4] = (e) => (c.value = e)),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            p,
                            { style: { width: "640px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  a,
                                  { class: "text-h6" },
                                  {
                                    default: (0, t.w5)(() => [
                                      Aa,
                                      (0, t.Uk)(
                                        " " +
                                        (0, i.zw)(
                                          (0, n.SU)(u)(
                                            "common.Edit title and description"
                                          )
                                        ),
                                        1
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  a,
                                  { class: "q-gutter-y-md" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        s,
                                        {
                                          autofocus: "",
                                          filled: "",
                                          dense: "",
                                          modelValue: m.value,
                                          "onUpdate:modelValue":
                                            l[0] || (l[0] = (e) => (m.value = e)),
                                          ref: "wheelTitleInput",
                                          onKeydown: (0, o.D2)(g, [
                                            "native",
                                            "enter",
                                          ]),
                                          maxlength: "50",
                                          placeholder: (0, n.SU)(u)(
                                            "common.Wheel title"
                                          ),
                                        },
                                        null,
                                        8,
                                        ["modelValue", "onKeydown", "placeholder"]
                                      ),
                                      (0, t.Wm)(
                                        s,
                                        {
                                          filled: "",
                                          dense: "",
                                          type: "textarea",
                                          modelValue: w.value,
                                          "onUpdate:modelValue":
                                            l[1] || (l[1] = (e) => (w.value = e)),
                                          onKeydown: (0, o.D2)(g, [
                                            "native",
                                            "enter",
                                          ]),
                                          maxlength: "200",
                                          placeholder: (0, n.SU)(u)(
                                            "common.Wheel description"
                                          ),
                                        },
                                        null,
                                        8,
                                        ["modelValue", "onKeydown", "placeholder"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  d,
                                  { align: "right" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        r,
                                        {
                                          unelevated: "",
                                          label: (0, n.SU)(u)("common.Cancel"),
                                          onClick: l[2] || (l[2] = (e) => v()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                      (0, t.Wm)(
                                        r,
                                        {
                                          unelevated: "",
                                          color: "primary",
                                          label: (0, n.SU)(u)("common.OK"),
                                          onClick: l[3] || (l[3] = (e) => f()),
                                        },
                                        null,
                                        8,
                                        ["label"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          },
          ja = Ia,
          Ra = ja;
        g()(Ia, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QInput: ce.Z,
          QCardActions: Y.Z,
          QBtn: f.Z,
        });
        const Ba = {
          setup(e, { expose: l }) {
            const a = (0, s.oR)(),
              { t } = (0, r.QT)();
            let n = 0;
            function o(e, l, t, o) {
              (n = new Date().getTime()), a.commit("linkSheet"), i(e, l, t, o);
            }
            async function i(e, l, n, o) {
              if (!u() && a.getters.sheetLinked)
                try {
                  const t = await Gl(e, l, n, o),
                    s = t.map((e) => (0, p.removeHtml)(e)),
                    { additions: u, removals: r } = (0, p.getArrayDiff)(
                      a.getters.wheelConfig.entries.map((e) => e.text),
                      s
                    );
                  c(u),
                    a.commit("appendTextEntries", u),
                    a.commit("removeTextEntries", r),
                    setTimeout(() => i(e, l, n, o), 5e3);
                } catch (s) {
                  a.commit("unlinkSheet"),
                    (0, p.trackException)("ImportDataFromSpreadsheetError", s),
                    R.x2(t, s);
                }
              else a.commit("unlinkSheet");
            }
            function u() {
              const e = 36e5,
                l = new Date().getTime();
              return l - n > e;
            }
            function c(e) {
              if (e.length > 2) {
                const l = t("sheetdialog.entries added", { count: e.length });
                R.c0(l);
              } else
                e.forEach((e) => {
                  const l = t("sheetdialog.added", {
                    entry: (0, p.removeHtml)(e),
                  });
                  R.c0(l);
                });
            }
            return l({ start: o }), (e, l) => null;
          },
        },
          Oa = Ba,
          Pa = Oa;
        var Na = a(15613),
          Ma = a(92904),
          Ga = a(64959);
        const Ka = { style: { height: "4em" } },
          Ya = {
            key: 0,
            class: "text-h3",
            style: { position: "absolute", color: "#34a853" },
          },
          $a = {
            key: 0,
            class: "text-h3",
            style: { position: "absolute", color: "#34a853" },
          },
          Ja = {
            props: { title: String, increment: Number, fps: Number },
            setup(e) {
              const l = e,
                a = (0, n.iH)(0),
                s = (0, n.iH)(""),
                u = (0, n.iH)(!0);
              return (
                (0, Ga.Zv)(
                  () => {
                    const e = new Date(new Date().getFullYear(), 0, 1),
                      t = new Date();
                    (a.value = ((t - e) / 1e3) * l.increment),
                      (s.value = Math.round(a.value).toLocaleString()),
                      (u.value = !u.value);
                  },
                  1e3 / l.fps,
                  { immediateCallback: !0 }
                ),
                (l, a) => (
                  (0, t.wg)(),
                  (0, t.iD)("div", Ka, [
                    (0, t.Uk)((0, i.zw)(e.title) + " ", 1),
                    (0, t.Wm)(
                      o.uT,
                      { name: "fade", mode: "in-out" },
                      {
                        default: (0, t.w5)(() => [
                          u.value
                            ? ((0, t.wg)(),
                              (0, t.iD)("p", Ya, (0, i.zw)(s.value), 1))
                            : (0, t.kq)("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                    (0, t.Wm)(
                      o.uT,
                      { name: "fade", mode: "in-out" },
                      {
                        default: (0, t.w5)(() => [
                          u.value
                            ? (0, t.kq)("", !0)
                            : ((0, t.wg)(),
                              (0, t.iD)("p", $a, (0, i.zw)(s.value), 1)),
                        ]),
                        _: 1,
                      }
                    ),
                  ])
                )
              );
            },
          },
          Xa = (0, al.Z)(Ja, [["__scopeId", "data-v-e9540f52"]]),
          et = Xa,
          lt = { class: "q-pa-md row items-start q-gutter-md" },
          at = { class: "col-md" },
          tt = (0, t.Uk)(" Why use the Pop It Wheel Random Question Generator? "),
          nt = (0, t.Uk)(
            "The Pop It Wheel Random Question Generator offers many benefits, making it a great way to unlock fun and engagement in any setting. Here are a few reasons why you should use the Pop It Wheel: "
          ),
          ot = (0, t.Uk)(
            " It's a great icebreaker: This spin the wheel game introduces random questions, making it easier for people who have a hard time starting conversations and get to know each other inpersonal and professional settings. It encourages participation: By adding an element of unpredictability, the random questions encourage everyone to participate and share their thoughts. It adds excitement to any activity: Whether it's a party or team-building event, this spin the wheel game is sure to add an extra dose of excitement and energy"
          ), 
          it = (0, t.Uk)(""),
          st = (0, t._)(
            "li",
            null,
            "  It sparks creativity: With random questions being chosen, users are forced to think outside the box and come up with creative answers. Promotes interactive experiences: By injecting an element of surprise and randomness into conversations, the Pop It Wheel Random Question Generator makes interactions more lively and enjoyable. Encourages deeper discussions: The thought-provoking questions provided by the tool can spark meaningful conversations and help people get to know each other better.
 ",
            -1
          ),
          ut = (0, t._)(
            "li",
            null,
            " Increases team bonding: Whether in a workplace or social setting, this tool can help teams bond and improve communication by stimulating discussions and promoting collaboration. Provides a variety of topics: Users can add a variety of questions and categories ranging from entertainment to personal growth.",
            -1
          ),
          ct = (0, t._)(
            "li",
            null,
            " Selects a random winner: The Pop It Wheel can be customized to become a random name picker, making it a great tool for giveaways or competitions. Adds fairness and excitement: Instead of choosing a winner through traditional methods, using the Pop It Wheel adds an element of fun and fairness to the selection process. Easy to use: The Pop It Wheel is user-friendly and can be accessed through any device with an internet connection. It's also customizable, allowing users to create their own list of questions or categories. Can be used for educational purposes: Teachers can use the Pop It Wheel in the classroom to engage students and make learning more interactive and enjoyable. Students can use it as a study aid. Self-reflection: The thought-provoking questions provided by the wheel spinner can also be used for personal growth and self-reflection. Users can use the tool to reflect on their thoughts and beliefs, leading to deeper introspection. ",
            -1
          ),
          rt = (0, t._)(
            "li",
            null,
            "Helps break the ice: In social settings where people may not know each other well, this tool can help break the ice and facilitate conversations between strangers. ",
            -1
          ),
          dt = (0, t._)(
            "li",
            null,
            " Can be easily customized: Users have the ability to create their own spinner games. These user-made wheels may include team picker wheel, letter picker wheel, number picker wheel, date picker wheel, random number generator, random name generator wheel, names of prize winners, country picker wheel, spin-to-win popups, countless custom wheels of fortune, unique raffle pickers. The customization options are endless. ",
            -1
          ),
          mt = (0, t.Uk)("   "),
          pt = (0, t.Uk)(" Does it use renewable energy? "),
          wt = (0, t._)(
            "p",
            null,
            " We are proud to share that 100% of the electricity that powers our servers is renewable, and 93% comes from carbon-free energy sources. ",
            -1
          ),
          ht = (0, t.Uk)("Sustainability"),
          ft = { class: "col-md" },
          vt = (0, t.Uk)(" Adding Variety to Any Activity "),
          gt = (0, t.Uk)(
            "The Pop Wheel Random Question Generator is a versatile tool that offers endless possibilities when it comes to adding variety and excitement to any activity. Whether you're hosting a game night with friends or planning a team-building event at work, this tool can help break the ice and get people talking"
          ),
          kt = (0, t._)("i", { class: "fas fa-palette" }, null, -1),
          Wt = (0, t.Uk)(""),
          yt = (0, t.Uk)(" at the top of the page. Your Pop It Wheel is compatible with mobile devices as well as Desktop and can be easily accessed through a web browser. This makes it convenient for users to create and share their custom wheels anytime, anywhere. The next time you're planning a game night, team-building activity or just need a fun decision-making tool, give Pop It Wheel a try and see how easy and engaging it can be to use! Overall, the Pop It Wheel Random Question Generator is a versatile and engaging tool that has numerous benefits for individuals and groups alike."),
          _t = (0, t.Uk)(""),
          St = (0, t.Uk)(""),
          Ut = (0, t._)("br", null, null, -1),
          bt = (0, t._)("br", null, null, -1),
          Ct = { class: "col-md" },
          qt = (0, t.Uk)("What is the Pop It Wheel Random Question Generator?"),
          Zt = (0, t._)(
            "p",
            null,
            "The Pop It Wheel Random Question Generator is a fun way to engage with your audience and encourage participation in various settings. Whether it's a party, classroom, or team-building activity, the Spin the Wheel game adds an element of excitement and unpredictability. ",
            -1
          ),
          xt = (0, t.Uk)(" "),
          Qt = (0, t.Uk)("   "),
          Dt = (0, t.Uk)(" How to Use the Pop It Wheel "),
          zt = (0, t._)(
            "p",
            null,
            " Users simply input their questions into the question box and click the spin button at the center of the wheel. The wheel spins, releasing balloons that add festive touch to the experience. When a balloon pops, the fun begins with a random selection of a question, ensuring unpredictability and engagement for everyone involved.",
            -1
          ),
          Vt = (0, t.Uk)(""),
          Et = (0, t.Uk)(""),
          Ft = {
            setup(e) {
              const l = (0, s.oR)();
              return (e, a) => {
                const o = (0, t.up)("router-link"),
                  s = (0, t.up)("q-badge");
                return (
                  (0, t.wg)(),
                  (0, t.iD)("div", lt, [
                    (0, t._)("div", at, [
                      (0, t.Wm)(Ma.Z, null, {
                        header: (0, t.w5)(() => [tt]),
                        main: (0, t.w5)(() => [
                          nt,
                          (0, t._)("ul", null, [
                            (0, t._)("li", null, [
                              ot,
                              (0, t.Wm)(
                                o,
                                { to: "/how-to-use-in-the-classroom" },
                                { default: (0, t.w5)(() => [it]), _: 1 }
                              ),
                            ]),
                            st,
                            ut,
                            ct,
                            rt,
                            dt,
                          ]),
                        ]),
                        _: 1,
                      }),
                      mt,
                      (0, t.Wm)(Ma.Z, null, {
                        header: (0, t.w5)(() => [pt]),
                        main: (0, t.w5)(() => [
                          wt,
                          (0, t._)("p", null, [
                            (0, t.Wm)(
                              o,
                              { to: "/faq/sustainability" },
                              { default: (0, t.w5)(() => [ht]), _: 1 }
                            ),
                          ]),
                        ]),
                        _: 1,
                      }),
                    ]),
                    (0, t._)("div", ft, [
                      (0, t.Wm)(Ma.Z, null, {
                        header: (0, t.w5)(() => [vt]),
                        main: (0, t.w5)(() => [
                          (0, t._)("p", null, [
                            gt,
                            (0, t.Wm)(
                              s,
                              { color: "primary" },
                              { default: (0, t.w5)(() => [kt, Wt]), _: 1 }
                            ),
                            yt,
                          ]),
                          (0, t._)("p", null, [
                            (0, t.Wm)(
                              o,
                              { to: "/user-reviews-and-tutorials" },
                              { default: (0, t.w5)(() => [_t]), _: 1 }
                            ),
                          ]),
                        ]),
                        _: 1,
                      }),
                      St,
                      (0, t.Wm)(Ma.Z, null, {
                        header: (0, t.w5)(() => [
                          (0, t.Uk)(
                            " Activity in " + (0, i.zw)(new Date().getFullYear()),
                            1
                          ),
                        ]),
                        main: (0, t.w5)(() => [
                          (0, t.Wm)(
                            et,
                            {
                              title: "Wheel spins",
                              increment: (0, n.SU)(l).getters.spinsPerSecond,
                              fps: 0.333333,
                            },
                            null,
                            8,
                            ["increment", "fps"]
                          ),
                          Ut,
                          (0, t.Wm)(
                            et,
                            {
                              title: "Hours of spinning",
                              increment: (0, n.SU)(l).getters.hoursSpunPerSecond,
                              fps: (0, n.SU)(l).getters.hoursSpunPerSecond,
                            },
                            null,
                            8,
                            ["increment", "fps"]
                          ),
                          bt,
                        ]),
                        _: 1,
                      }),
                    ]),
                    (0, t._)("div", Ct, [
                      (0, t.Wm)(Ma.Z, null, {
                        header: (0, t.w5)(() => [qt]),
                        main: (0, t.w5)(() => [
                          Zt,
                          (0, t._)("p", null, [
                            (0, t.Wm)(
                              o,
                              { to: "/privacy-policy.html" },
                              { default: (0, t.w5)(() => [xt]), _: 1 }
                            ),
                          ]),
                        ]),
                        _: 1,
                      }),
                      Qt,
                      (0, t.Wm)(Ma.Z, null, {
                        header: (0, t.w5)(() => [Dt]),
                        main: (0, t.w5)(() => [
                          zt,
                          (0, t._)("p", null, [
                            (0, t.Wm)(
                              o,
                              { to: "/faq/randomness" },
                              { default: (0, t.w5)(() => [Vt]), _: 1 }
                            ),
                            Et,
                          ]),
                        ]),
                        _: 1,
                      }),
                    ]),
                  ])
                );
              };
            },
          };
        var Tt = a(20990);
        const Ht = Ft,
          Lt = Ht;
        g()(Ft, "components", { QBadge: Tt.Z });
        const At = (e) => (
          (0, t.dD)("data-v-0c16652e"), (e = e()), (0, t.Cn)(), e
        ),
          It = { class: "q-gutter-y-sm" },
          jt = { class: "row items-center q-gutter-x-md" },
          Rt = {
            key: 0,
            style: { "font-size": "32px" },
            class: "break-long-words",
          },
          Bt = { key: 0, class: "break-long-words" },
          Ot = At(() =>
            (0, t._)("div", { class: "q-pb-sm desktop-only" }, null, -1)
          ),
          Pt = {
            props: { editable: Boolean },
            emits: ["edit-title-and-description"],
            setup(e, { emit: l }) {
              const a = e,
                u = (0, s.oR)(),
                { t: c } = (0, r.QT)(),
                d = (0, t.Fl)(() => u.getters.wheelConfig),
                m = (0, t.Fl)(() => d.value.title),
                p = (0, t.Fl)(() => d.value.description);
              return (e, s) => {
                const u = (0, t.up)("q-tooltip"),
                  r = (0, t.up)("q-btn");
                return (
                  (0, t.wg)(),
                  (0, t.iD)("div", It, [
                    (0, t._)("div", jt, [
                      (0, n.SU)(m)
                        ? ((0, t.wg)(),
                          (0, t.iD)("span", Rt, (0, i.zw)((0, n.SU)(m)), 1))
                        : (0, t.kq)("", !0),
                      (0, t.wy)(
                        (0, t.Wm)(
                          r,
                          {
                            round: "",
                            unelevated: "",
                            dense: "",
                            color: "primary",
                            icon: "fas fa-pencil-alt",
                            onClick:
                              s[0] ||
                              (s[0] = (e) => l("edit-title-and-description")),
                          },
                          {
                            default: (0, t.w5)(() => [
                              (0, t.Wm)(u, null, {
                                default: (0, t.w5)(() => [
                                  (0, t.Uk)(
                                    (0, i.zw)(
                                      (0, n.SU)(c)(
                                        "common.Edit title and description"
                                      )
                                    ),
                                    1
                                  ),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          },
                          512
                        ),
                        [[o.F8, a.editable]]
                      ),
                    ]),
                    (0, n.SU)(p)
                      ? ((0, t.wg)(),
                        (0, t.iD)("div", Bt, (0, i.zw)((0, n.SU)(p)), 1))
                      : (0, t.kq)("", !0),
                    Ot,
                  ])
                );
              };
            },
          },
          Nt = (0, al.Z)(Pt, [["__scopeId", "data-v-0c16652e"]]),
          Mt = Nt;
        function Gt() {
          (function (e, l) {
            var a = new l(),
              t =
                "https://api.enthusiastgaming.net/scripts/cdn.enthusiast.gg/script/eg-aps/production/eg-aps-bootstrap.bundle.js?site=wheelofnames.com";
            a.open("GET", t, !0),
              (a.onreadystatechange = function () {
                if (
                  4 == a.readyState &&
                  ((a.status >= 200 && a.status < 300) || 304 == a.status)
                ) {
                  var l = e.createElement("script");
                  (l.type = "text/javascript"),
                    (l.text = a.responseText),
                    e.head.appendChild(l);
                }
              }),
              a.send(null);
          })(document, XMLHttpRequest),
            (function (e, l, a, t, n) {
              (e[t] = e[t] || []),
                e[t].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var o = l.getElementsByTagName(a)[0],
                i = l.createElement(a),
                s = "dataLayer" != t ? "&l=" + t : "";
              (i.async = !0),
                (i.src = "https://www.googletagmanager.com/gtm.js?id=" + n + s),
                o.parentNode.insertBefore(i, o);
            })(window, document, "script", "dataLayer", "GTM-WCNC9HN");
        }
        g()(Pt, "components", { QBtn: f.Z, QTooltip: Z.Z });
        const Kt = (e) => (
          (0, t.dD)("data-v-6e941b48"), (e = e()), (0, t.Cn)(), e
        ),
          Yt = { key: 0 },
          $t = { class: "ad-declaration" },
          Jt = { style: { display: "flex", "align-items": "center" } },
          Xt = { style: { display: "flex", "align-items": "center" } },
          en = { class: "ad-declaration" },
          ln = { key: 0, class: "card" },
          an = Kt(() =>
            (0, t._)(
              "div",
              { class: "card-header" },
              [
                (0, t._)(
                  "div",
                  { class: "card-header-title" },
                  " How to report an inappropriate ad "
                ),
              ],
              -1
            )
          ),
          tn = Kt(() =>
            (0, t._)(
              "div",
              { class: "card-content" },
              [
                (0, t._)("ol", null, [
                  (0, t._)("li", null, [
                    (0, t.Uk)(
                      " Take a screenshot of this page. (Unsure how to take a screenshot? "
                    ),
                    (0, t._)(
                      "a",
                      {
                        target: "_new",
                        href: "https://www.take-a-screenshot.org/",
                      },
                      "See instructions here"
                    ),
                    (0, t.Uk)(".) "),
                  ]),
                  (0, t._)("li", null, [
                    (0, t.Uk)(" Create an email with the subject line "),
                    (0, t._)("b", null, "Bad ad"),
                  ]),
                  (0, t._)(
                    "li",
                    null,
                    " Attach the screenshot to the email and send it to admin@wheelofnames.com. "
                  ),
                ]),
              ],
              -1
            )
          ),
          nn = [an, tn],
          on = Kt(() => (0, t._)("div", { id: "div-gpt-ad-won-1" }, null, -1)),
          sn = {
            setup(e) {
              (0, s.oR)();
              const { t: l } = (0, r.QT)(),
                a = (0, n.iH)(!0),
                o = (0, n.iH)(!1);
              function u() {
                p.trackEvent("Wheel", "HideDesktopAd", ""), (a.value = !1);
              }
              function c() {
                (o.value = !o.value),
                  p.trackEvent(
                    "Wheel",
                    "ToggleBadAdInstructions",
                    o.value ? "Show" : "Hide"
                  );
              }
              return (
                (0, t.bv)(async () => {
                  Gt();
                }),
                (e, s) => {
                  const r = (0, t.up)("q-btn");
                  return a.value
                    ? ((0, t.wg)(),
                      (0, t.iD)("div", Yt, [
                        (0, t._)("div", $t, [
                          (0, t._)("span", Jt, [
                            (0, t.Uk)(
                              (0, i.zw)((0, n.SU)(l)("app.Report bad ad")) + " ",
                              1
                            ),
                            (0, t.Wm)(r, {
                              onClick: s[0] || (s[0] = (e) => c()),
                              icon: "fas fa-flag",
                              flat: "",
                              round: "",
                              size: "sm",
                            }),
                          ]),
                          (0, t._)("span", Xt, [
                            (0, t.Uk)(
                              (0, i.zw)((0, n.SU)(l)("app.Close ad")) + " ",
                              1
                            ),
                            (0, t.Wm)(r, {
                              onClick: s[1] || (s[1] = (e) => u()),
                              icon: "fas fa-times-circle",
                              flat: "",
                              round: "",
                              size: "sm",
                            }),
                          ]),
                        ]),
                        (0, t._)("div", en, [
                          o.value
                            ? ((0, t.wg)(), (0, t.iD)("div", ln, nn))
                            : (0, t.kq)("", !0),
                        ]),
                        on,
                      ]))
                    : (0, t.kq)("", !0);
                }
              );
            },
          },
          un = (0, al.Z)(sn, [["__scopeId", "data-v-6e941b48"]]),
          cn = un;
        g()(sn, "components", { QBtn: f.Z });
        const rn = { id: "div-gpt-ad-won-2" };
        function dn(e, l) {
          return (0, t.wg)(), (0, t.iD)("div", rn);
        }
        const mn = {},
          pn = (0, al.Z)(mn, [["render", dn]]),
          wn = pn,
          hn = { key: 0 },
          fn = { class: "enthusiast-adhesion" },
          vn = (0, t._)("div", { id: "div-gpt-ad-sticky-bottom" }, null, -1),
          gn = {
            setup(e) {
              const l = (0, n.iH)(!1);
              function a() {
                p.trackEvent("Wheel", "HideMobileAd", ""), (l.value = !1);
              }
              return (
                (0, t.bv)(() => {
                  setTimeout(() => {
                    (l.value = !0), Gt();
                  }, 7e3);
                }),
                (e, n) =>
                  l.value
                    ? ((0, t.wg)(),
                      (0, t.iD)("div", hn, [
                        (0, t._)("div", fn, [
                          (0, t._)(
                            "div",
                            {
                              class: "enthusiast-close-button",
                              onClick: n[0] || (n[0] = (e) => a()),
                            },
                            "X"
                          ),
                          vn,
                        ]),
                      ]))
                    : (0, t.kq)("", !0)
              );
            },
          },
          kn = gn,
          Wn = kn;
        var yn = a(51074),
          _n = a(20332),
          Sn = a(80149);
        const Un = ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
          bn =
            "https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets.readonly";
        let Cn;
        function qn(e) {
          return (
            (Cn = e),
            new Promise(function (e, l) {
              gapi.load("auth2:client:picker", function () {
                gapi.client
                  .init({
                    apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
                    discoveryDocs: Un,
                    clientId:
                      "1096958520212-sbdisrtnfpeuk96lbi0cfspj7pspgk38.apps.googleusercontent.com",
                    scope: bn,
                  })
                  .then(() => {
                    gapi.client.setToken({ access_token: Cn }), e();
                  });
              });
            })
          );
        }
        function Zn() {
          return new Promise(function (e, l) {
            const a = new google.picker.DocsView(
              google.picker.ViewId.SPREADSHEETS
            ),
              t = new google.picker.PickerBuilder()
                .enableFeature(google.picker.Feature.NAV_HIDDEN)
                .setAppId("1096958520212")
                .setOAuthToken(Cn)
                .addView(a)
                .setDeveloperKey("AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g")
                .setCallback(function (a) {
                  if (
                    ("cancel" == a.action && l("No spreadsheet picked"),
                      "picked" == a.action && a.docs.length > 0)
                  ) {
                    const l = a.docs[0].id;
                    e(l);
                  }
                })
                .setTitle("Select a spreadsheet")
                .build();
            t.setVisible(!0);
          });
        }
        const xn = {
          setup(e) {
            const l = (0, s.oR)();
            function a() {
              const e = l.getters.version,
                a = (0, p.getFeedbackFormUrl)(navigator.userAgent, e);
              window.open(a, "_new");
            }
            return (e, l) => {
              const n = (0, t.up)("q-btn");
              return (
                (0, t.wg)(),
                (0, t.j4)(n, {
                  color: "primary",
                  label: "Send us your feedback!",
                  icon: "fa fa-comment",
                  "no-caps": "",
                  class: "q-mb-md",
                  onClick: a,
                })
              );
            };
          },
        },
          Qn = xn,
          Dn = Qn;
        g()(xn, "components", { QBtn: f.Z });
        const zn = (e) => (
          (0, t.dD)("data-v-03e72d16"), (e = e()), (0, t.Cn)(), e
        ),
          Vn = { key: 0, style: { "text-align": "center" } },
          En = zn(() => (0, t._)("span", { class: "banner-left" }, "    ", -1)),
          Fn = { class: "banner-text" },
          Tn = zn(() => (0, t._)("span", { class: "banner-right" }, "    ", -1)),
          Hn = {
            setup(e) {
              const l = (0, s.oR)(),
                a = (0, n.iH)(!0),
                o = () => {
                  a.value = !1;
                };
              return (e, s) =>
                a.value && (0, n.SU)(l).getters.maintenanceMessage
                  ? ((0, t.wg)(),
                    (0, t.iD)("div", Vn, [
                      En,
                      (0, t._)(
                        "span",
                        Fn,
                        (0, i.zw)((0, n.SU)(l).getters.maintenanceMessage),
                        1
                      ),
                      Tn,
                      (0, t._)("span", null, [
                        (0, t._)("i", {
                          class: "fas fa-times close-icon",
                          onClick: s[0] || (s[0] = (e) => o()),
                        }),
                      ]),
                    ]))
                  : (0, t.kq)("", !0);
            },
          },
          Ln = (0, al.Z)(Hn, [["__scopeId", "data-v-03e72d16"]]),
          An = Ln,
          In = { key: 0 },
          jn = (0, t._)("i", { class: "fas fa-save" }, null, -1),
          Rn = { key: 1 },
          Bn = (0, t._)("i", { class: "fas fa-folder-open" }, null, -1),
          On = { class: "q-mt-md" },
          Pn = { key: 0 },
          Nn = { key: 1 },
          Mn = { class: "q-gutter-x-md" },
          Gn = { class: "q-mt-md" },
          Kn = { key: 0 },
          Yn = { key: 1 },
          $n = (0, t._)(
            "i",
            { class: "fa-regular fa-circle-question q-mr-sm" },
            null,
            -1
          ),
          Jn = {
            setup(e, { expose: l }) {
              const { t: a } = (0, r.QT)(),
                o = (0, n.iH)(!1),
                s = (0, n.iH)("");
              let u, c;
              function d(e) {
                return (
                  (s.value = e),
                  (o.value = !0),
                  new Promise((e, l) => {
                    (u = e), (c = l);
                  })
                );
              }
              function m(e) {
                (0, p.trackEvent)("Wheel", "WheelLocationDialog", e),
                  u(e),
                  (o.value = !1);
              }
              return (
                l({ askUserForLocation: d }),
                (e, l) => {
                  const u = (0, t.up)("q-space"),
                    c = (0, t.up)("q-card-section"),
                    r = (0, t.up)("q-icon"),
                    d = (0, t.up)("q-btn"),
                    p = (0, t.up)("router-link"),
                    w = (0, t.up)("q-card"),
                    h = (0, t.up)("q-dialog");
                  return (
                    (0, t.wg)(),
                    (0, t.j4)(
                      h,
                      {
                        modelValue: o.value,
                        "onUpdate:modelValue":
                          l[2] || (l[2] = (e) => (o.value = e)),
                      },
                      {
                        default: (0, t.w5)(() => [
                          (0, t.Wm)(
                            w,
                            { style: { width: "400px" } },
                            {
                              default: (0, t.w5)(() => [
                                (0, t.Wm)(
                                  c,
                                  {
                                    class: "row items-center text-h6",
                                    style: { "background-color": "#00000020" },
                                  },
                                  {
                                    default: (0, t.w5)(() => [
                                      "save" === s.value
                                        ? ((0, t.wg)(),
                                          (0, t.iD)("div", In, [
                                            jn,
                                            (0, t.Uk)(
                                              " " +
                                              (0, i.zw)(
                                                (0, n.SU)(a)(
                                                  "savedialog.Save wheel"
                                                )
                                              ),
                                              1
                                            ),
                                          ]))
                                        : ((0, t.wg)(),
                                          (0, t.iD)("div", Rn, [
                                            Bn,
                                            (0, t.Uk)(
                                              " " +
                                              (0, i.zw)(
                                                (0, n.SU)(a)(
                                                  "opendialog.Open wheel"
                                                )
                                              ),
                                              1
                                            ),
                                          ])),
                                      (0, t.Wm)(u),
                                      (0, t.Wm)(He.Z),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, t.Wm)(
                                  c,
                                  { class: "q-gutter-y-md" },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t.Wm)(
                                        d,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          color: "primary",
                                          padding: "lg",
                                          onClick:
                                            l[0] || (l[0] = (e) => m("cloud")),
                                          style: { width: "100%" },
                                        },
                                        {
                                          default: (0, t.w5)(() => [
                                            (0, t._)("div", null, [
                                              (0, t.Wm)(r, {
                                                name: "fas fa-cloud",
                                                size: "8em",
                                              }),
                                              (0, t._)("div", On, [
                                                "save" === s.value
                                                  ? ((0, t.wg)(),
                                                    (0, t.iD)(
                                                      "span",
                                                      Pn,
                                                      (0, i.zw)(
                                                        (0, n.SU)(a)(
                                                          "savedialog.Save to the cloud (recommended)"
                                                        )
                                                      ),
                                                      1
                                                    ))
                                                  : ((0, t.wg)(),
                                                    (0, t.iD)(
                                                      "span",
                                                      Nn,
                                                      (0, i.zw)(
                                                        (0, n.SU)(a)(
                                                          "opendialog.Open from the cloud (recommended)"
                                                        )
                                                      ),
                                                      1
                                                    )),
                                              ]),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      (0, t.Wm)(
                                        d,
                                        {
                                          unelevated: "",
                                          "no-caps": "",
                                          color: "grey-7",
                                          padding: "sm",
                                          onClick:
                                            l[1] || (l[1] = (e) => m("local")),
                                          style: { width: "100%" },
                                        },
                                        {
                                          default: (0, t.w5)(() => [
                                            (0, t._)("div", Mn, [
                                              (0, t.Wm)(r, {
                                                name: "fas fa-hard-drive",
                                                size: "4em",
                                              }),
                                              (0, t._)("span", Gn, [
                                                "save" === s.value
                                                  ? ((0, t.wg)(),
                                                    (0, t.iD)(
                                                      "span",
                                                      Kn,
                                                      (0, i.zw)(
                                                        (0, n.SU)(a)(
                                                          "savedialog.Save to a local file"
                                                        )
                                                      ),
                                                      1
                                                    ))
                                                  : ((0, t.wg)(),
                                                    (0, t.iD)(
                                                      "span",
                                                      Yn,
                                                      (0, i.zw)(
                                                        (0, n.SU)(a)(
                                                          "opendialog.Open a local file"
                                                        )
                                                      ),
                                                      1
                                                    )),
                                              ]),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      (0, t._)("div", null, [
                                        $n,
                                        (0, t.Wm)(
                                          p,
                                          { target: "_blank", to: "/faq/saving" },
                                          {
                                            default: (0, t.w5)(() => [
                                              (0, t.Uk)(
                                                (0, i.zw)(
                                                  (0, n.SU)(a)(
                                                    "app.Help me choose"
                                                  )
                                                ),
                                                1
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    )
                  );
                }
              );
            },
          },
          Xn = Jn,
          eo = Xn;
        g()(Jn, "components", {
          QDialog: M.Z,
          QCard: G.Z,
          QCardSection: K.Z,
          QSpace: q.Z,
          QBtn: f.Z,
          QIcon: V.Z,
        });
        var lo = a(5613);
        const ao = { class: "q-pa-md" },
          to = { style: { height: "600px" } },
          no = { key: 0 },
          oo = (0, t._)("hr", null, null, -1),
          io = { class: "q-px-md q-pt-md row" },
          so = { class: "col-3" },
          uo = { class: "col-6" },
          co = { key: 0 },
          ro = (0, t._)("hr", null, null, -1),
          mo = {
            setup(e) {
              const l = (0, s.oR)(),
                h = (0, u.tv)(),
                f = (0, u.yj)(),
                v = (0, c.Z)(),
                { t: g, locale: k, setLocaleMessage: W } = (0, r.QT)(),
                { shouldUseMobileLayout: y } = (0, lo.a)();
              async function _(e) {
                (0, p.trackEvent)("Wheel", "ChangeLanguage"),
                  S(e),
                  h.push(`/${(0, p.getNonEnglishLocale)(e)}`).catch((e) => {
                    console.error(e);
                  });
              }
              async function S(e) {
                if (!e) return;
                if (!U(e)) return;
                b(e);
                const l = await C(e);
                W(e, l), (k.value = e);
              }
              function U(e) {
                return w.NB().find((l) => l.name == e);
              }
              function b(e) {
                const l = w.uq(e, navigator.languages);
                l &&
                  setTimeout(async () => {
                    const e = await C(l),
                      a = e["app"]["Click the Language menu"];
                    (0, R.c0)(a);
                  }, 3e3);
              }
              async function C(e) {
                const l = w.VX(e),
                  t = await a(30890)(`./${l}`);
                return t.default;
              }
              (0, t.bv)(async () => {
                await S(f.params.lang || "en"),
                  l.dispatch(
                    "loadInitialEditableWheel",
                    g("common.We have a winner!")
                  ),
                  l.dispatch("loadServerSettings"),
                  await l.dispatch("loadPreferences"),
                  v.dark.set(l.getters.darkMode),
                  setTimeout(() => {
                    l.getters.wheelIsAdvanced &&
                      !l.getters.wheelConfig.usesAdvancedFeatures() &&
                      ((0, p.trackEvent)("Wheel", "AdvancedWheelAutoDowngraded"),
                        l.dispatch("setAdvanced", !1));
                  }, 200);
              });
              const { width: q, height: Z } = (0, d.iPe)(),
                x = 56,
                Q = 16,
                D = (0, t.Fl)(() => Z.value - (x + Q)),
                z = (0, n.iH)(null),
                V = (0, n.iH)(null),
                E = (0, n.iH)(null),
                F = (0, t.Fl)(() => l.getters.wheelConfig);
              function T() {
                (0, p.trackEvent)("Wheel", "NewWheel"),
                  l.commit("saveWheelConfigForUndo"),
                  l.dispatch("resetWheel", g("common.We have a winner!")),
                  H(),
                  (0, R.H8)(g, g("app.Loaded default names and options"), () => {
                    (0, p.trackEvent)("Wheel", "UndoNewWheel"),
                      l.commit("undoWheelConfigChange");
                  });
                const e = w.qC(location.hostname, k.value);
                h.replace(e);
              }
              function H() {
                z.value.resetRotation();
              }
              function L() {
                const e = w.qC(location.hostname, k.value);
                window.history.replaceState({}, "", e);
              }
              function B(e) {
                F.value.displayWinnerDialog && V.value.show(e),
                  F.value.animateWinner && E.value.show(e),
                  F.value.launchConfetti &&
                  (0, _n.u)(F.value.getCoalescedColors());
              }
              (0, t.YP)(
                () => F.value,
                () => {
                  yn.qb(F.value.duringSpinSound, F.value.afterSpinSound);
                }
              );
              const O = (0, n.iH)(null),
                P = (0, n.iH)(null);
              async function N() {
                let e;
                do {
                  let a = l.getters.wheelLocation;
                  "cloud" !== a &&
                    ((a = await X.value.askUserForLocation("open")),
                      l.commit("setWheelLocation", a)),
                    (e = await ("local" === a ? K() : M())),
                    "switch" === e && l.commit("switchWheelLocation");
                } while ("switch" === e);
              }
              async function M() {
                try {
                  if (
                    ((await G()) || (await O.value.askUserToLogIn()), await G())
                  )
                    return await P.value.show();
                } catch (e) {
                  (0, R.x2)(g, e), (0, p.trackException)("OpenWheelError", e);
                }
              }
              async function G() {
                return await l.dispatch("userIsLoggedIn");
              }
              async function K() {
                try {
                  const e = await (0, m.I$)({
                    mimeTypes: ["text/*"],
                    extensions: [".wheel"],
                  }),
                    a = await e.text(),
                    t = JSON.parse(a);
                  l.commit("setWheelConfig", t);
                } catch (e) {
                  if (e instanceof DOMException && e.message.includes("abort"))
                    return;
                  (0, R.x2)(g, e),
                    (0, p.trackException)("OpenWheelFromLocalFileError", e);
                }
              }
              const Y = (0, n.iH)(null),
                $ = (0, n.iH)(null),
                X = (0, n.iH)(null);
              async function ee() {
                let e;
                do {
                  const a =
                    l.getters.wheelLocation ||
                    (await X.value.askUserForLocation("save"));
                  l.commit("setWheelLocation", a),
                    (e = await ("local" === a ? ae() : le())),
                    "switch" === e && l.commit("switchWheelLocation");
                } while ("switch" === e);
              }
              async function le() {
                if (F.value.isTooBigForDatabase())
                  return (
                    (0, p.trackEvent)("Wheel", "WheelTooBigForDatabase", ""),
                    void (0, R.om)(g, g("savedialog.Sorry, too many images"))
                  );
                try {
                  if (
                    ((await G()) || (await O.value.askUserToLogIn()), await G())
                  ) {
                    const e = await Y.value.show();
                    return L(), e;
                  }
                } catch (e) {
                  (0, R.x2)(g, e), (0, p.trackException)("SaveWheelError", e);
                }
              }
              function ae() {
                return $.value.show();
              }
              const te = (0, n.iH)(null),
                ne = (0, n.iH)(null),
                oe = (0, n.iH)(null),
                ie = (0, n.iH)(null),
                se = (0, n.iH)(null);
              async function ue() {
                if (F.value.isTooBigForDatabase())
                  return (
                    (0, p.trackEvent)("Wheel", "WheelTooBigForDatabase", ""),
                    void (0, R.om)(g, g("savedialog.Sorry, too many images"))
                  );
                try {
                  const { openMySharedWheels: e, openShareSettings: l } =
                    await te.value.show();
                  if ((e && ne.value.show(), l)) {
                    const e = await oe.value.askUserForSettings();
                    if (!e) return;
                    let l, a;
                    if ("live" === e) {
                      const e = await se.value.show();
                      if (!e) return;
                      (l = e.editPermissions), (a = e.password);
                    }
                    await ie.value.share(e, l, a);
                  }
                } catch (e) {
                  (0, R.x2)(g, e), (0, p.trackException)("ShareWheelError", e);
                }
              }
              const ce = (0, t.Fl)(() => v.fullscreen.isActive),
                re = (0, t.Fl)(
                  () =>
                    !ce.value &&
                    !v.platform.is.capacitor &&
                    !v.platform.within.iframe
                ),
                me = (0, t.Fl)(() => window.location.host.includes("preview")),
                pe = (0, t.Fl)(() => window.location.pathname.includes("/noads")),
                we = (0, t.Fl)(() => v.platform.is.desktop && !pe.value),
                he = (0, t.Fl)(() => v.platform.is.mobile && !pe.value),
                fe = (0, n.iH)(null);
              function ve() {
                fe.value.show();
              }
              const ge = (0, n.iH)(null),
                ke = (0, n.iH)(null),
                We = (0, n.iH)(null);
              async function ye() {
                l.commit("unlinkSheet");
                const e = await ge.value.askUserToLogIn();
                if (e) {
                  await qn(e);
                  const l = await Zn();
                  if (l) {
                    const {
                      tab: e,
                      column: a,
                      skipFirstRow: t,
                    } = await ke.value.askUserToConfigure(l);
                    e && a && We.value.start(l, e, a, t);
                  }
                }
              }
              const _e = (0, n.iH)(null);
              async function Ue() {
                try {
                  (await G()) || (await O.value.askUserToLogIn()),
                    (await G()) && (await _e.value.show());
                } catch (e) {
                  (0, R.x2)(g, e), (0, p.trackException)("AccountDialogError", e);
                }
              }
              const be = (0, n.iH)(null);
              function Ce() {
                be.value.show();
              }
              const qe = (0, n.iH)(null);
              function Ze() {
                qe.value.show();
              }
              const xe = (0, t.Fl)(() => "069f"),
                Qe = (0, t.Fl)(() => l.getters.commitHash);
              return (e, l) => {
                const a = (0, t.up)("q-header"),
                  s = (0, t.up)("q-page-container"),
                  u = (0, t.up)("q-layout");
                return (
                  (0, t.wg)(),
                  (0, t.iD)(
                    t.HY,
                    null,
                    [
                      (0, t.Wm)(
                        u,
                        { view: "hhh lpr fff" },
                        {
                          default: (0, t.w5)(() => [
                            (0, t.Wm)(
                              a,
                              {
                                reveal: "",
                                elevated: "",
                                class: "bg-primary text-white",
                              },
                              {
                                default: (0, t.w5)(() => [
                                  (0, t.Wm)(An),
                                  (0, t.Wm)(A, {
                                    onResetWheel: T,
                                    onOpenWheel: N,
                                    onSaveWheel: ee,
                                    onShareWheel: ue,
                                    onCustomizeWheel: ve,
                                    onLinkSheet: ye,
                                    onOpenAccountDialog: Ue,
                                    onLanguageChanged: _,
                                    onOpenLanguages: Ce,
                                  }),
                                ]),
                                _: 1,
                              }
                            ),
                            (0, n.SU)(y)
                              ? ((0, t.wg)(),
                                (0, t.j4)(
                                  s,
                                  { key: 0 },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", ao, [
                                        (0, n.SU)(me)
                                          ? ((0, t.wg)(),
                                            (0, t.j4)(Dn, { key: 0 }))
                                          : (0, t.kq)("", !0),
                                        (0, t.wy)(
                                          (0, t.Wm)(
                                            Mt,
                                            {
                                              editable: !(0, n.SU)(ce),
                                              onEditTitleAndDescription:
                                                l[0] || (l[0] = (e) => Ze()),
                                            },
                                            null,
                                            8,
                                            ["editable"]
                                          ),
                                          [[o.F8, (0, n.SU)(F).showTitle]]
                                        ),
                                        (0, t.Wm)(
                                          I.Z,
                                          {
                                            ref_key: "spinningWheel",
                                            ref: z,
                                            onWheelStopped: B,
                                          },
                                          null,
                                          512
                                        ),
                                        (0, t._)("div", to, [
                                          (0, t.wy)(
                                            (0, t.Wm)(
                                              Na.Z,
                                              { showAppInfo: !0 },
                                              null,
                                              512
                                            ),
                                            [[o.F8, !(0, n.SU)(ce)]]
                                          ),
                                        ]),
                                      ]),
                                      (0, n.SU)(re)
                                        ? ((0, t.wg)(),
                                          (0, t.iD)("div", no, [
                                            oo,
                                            (0, t.Wm)(Lt),
                                          ]))
                                        : (0, t.kq)("", !0),
                                      (0, t.Uk)(
                                        " " +
                                        (0, i.zw)((0, n.SU)(xe)) +
                                        " / " +
                                        (0, i.zw)((0, n.SU)(Qe)) +
                                        " ",
                                        1
                                      ),
                                      (0, n.SU)(he)
                                        ? ((0, t.wg)(), (0, t.j4)(Wn, { key: 1 }))
                                        : (0, t.kq)("", !0),
                                    ]),
                                    _: 1,
                                  }
                                ))
                              : ((0, t.wg)(),
                                (0, t.j4)(
                                  s,
                                  { key: 1 },
                                  {
                                    default: (0, t.w5)(() => [
                                      (0, t._)("div", io, [
                                        (0, t._)("div", so, [
                                          (0, n.SU)(me)
                                            ? ((0, t.wg)(),
                                              (0, t.j4)(Dn, { key: 0 }))
                                            : (0, t.kq)("", !0),
                                          (0, t.wy)(
                                            (0, t.Wm)(
                                              Mt,
                                              {
                                                editable: !(0, n.SU)(ce),
                                                onEditTitleAndDescription:
                                                  l[1] || (l[1] = (e) => Ze()),
                                              },
                                              null,
                                              8,
                                              ["editable"]
                                            ),
                                            [[o.F8, (0, n.SU)(F).showTitle]]
                                          ),
                                          (0, n.SU)(we)
                                            ? (0, t.wy)(
                                              ((0, t.wg)(),
                                                (0, t.j4)(
                                                  cn,
                                                  { key: 1 },
                                                  null,
                                                  512
                                                )),
                                              [[o.F8, !(0, n.SU)(ce)]]
                                            )
                                            : (0, t.kq)("", !0),
                                        ]),
                                        (0, t._)("div", uo, [
                                          (0, t.Wm)(
                                            I.Z,
                                            {
                                              ref_key: "spinningWheel",
                                              ref: z,
                                              onWheelStopped: B,
                                            },
                                            null,
                                            512
                                          ),
                                        ]),
                                        (0, t._)(
                                          "div",
                                          {
                                            class: "col-3 q-pb-md",
                                            style: (0, i.j5)(
                                              "height: " + (0, n.SU)(D) + "px"
                                            ),
                                          },
                                          [
                                            (0, t.wy)(
                                              (0, t.Wm)(
                                                Na.Z,
                                                { showAppInfo: !0 },
                                                null,
                                                512
                                              ),
                                              [[o.F8, !(0, n.SU)(ce)]]
                                            ),
                                          ],
                                          4
                                        ),
                                      ]),
                                      (0, n.SU)(re)
                                        ? ((0, t.wg)(),
                                          (0, t.iD)("div", co, [
                                            ro,
                                            (0, t.Wm)(Lt),
                                            (0, t.Wm)(wn),
                                          ]))
                                        : (0, t.kq)("", !0),
                                      (0, t.Uk)(
                                        " " +
                                        (0, i.zw)((0, n.SU)(xe)) +
                                        " / " +
                                        (0, i.zw)((0, n.SU)(Qe)),
                                        1
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                )),
                            (0, t.Wm)(
                              j.Z,
                              { ref_key: "winnerDialog", ref: V },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              J,
                              { ref_key: "loginDialog", ref: O },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              de,
                              {
                                ref_key: "openDialog",
                                ref: P,
                                onResetWheelRotation: H,
                                onResetAddressBar: L,
                              },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              Se,
                              { ref_key: "saveCloudDialog", ref: Y },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              De,
                              { ref_key: "saveLocalDialog", ref: $ },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              Te,
                              { ref_key: "shareDialogInfo", ref: te },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              ol,
                              { ref_key: "shareDialogMySharedWheels", ref: ne },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              gl,
                              { ref_key: "shareDialogSettings", ref: oe },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              Cl,
                              { ref_key: "shareDialogLink", ref: ie },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              Tl,
                              { ref_key: "liveWheelPermissionDialog", ref: se },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              Hl.Z,
                              { ref_key: "customizeDialog", ref: fe },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              Ol,
                              { ref_key: "sheetLoginDialog", ref: ge },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              ma,
                              { ref_key: "sheetConfigDialog", ref: ke },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              Pa,
                              { ref_key: "sheetDataPump", ref: We },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              Sa,
                              { ref_key: "accountDialog", ref: _e },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              La,
                              {
                                ref_key: "languageDialog",
                                ref: be,
                                onLanguageChanged: _,
                              },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              Ra,
                              { ref_key: "titleAndDescriptionDialog", ref: qe },
                              null,
                              512
                            ),
                            (0, t.Wm)(
                              eo,
                              { ref_key: "wheelLocationDialog", ref: X },
                              null,
                              512
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      (0, t.Wm)(
                        Sn.Z,
                        { ref_key: "winnerAnimation", ref: E },
                        null,
                        512
                      ),
                    ],
                    64
                  )
                );
              };
            },
          };
        var po = a(20249),
          wo = a(16602),
          ho = a(12133);
        const fo = mo,
          vo = fo;
        g()(mo, "components", {
          QLayout: po.Z,
          QHeader: wo.Z,
          QPageContainer: ho.Z,
        });
      },
    },
  ]);
