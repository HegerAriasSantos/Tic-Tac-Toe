(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    14: function (t, e, s) {},
    15: function (t, e, s) {
      "use strict";
      s.r(e);
      var i = s(1),
        n = s.n(i),
        a = s(3),
        r = s.n(a),
        c = s(6),
        l = s(4),
        u = s(5),
        o = s(8),
        h = s(7),
        j = s(0),
        d = function (t) {
          return Object(j.jsx)("button", {
            onClick: t.onClick,
            children: t.value,
          });
        },
        p =
          (s(14),
          (function (t) {
            Object(o.a)(s, t);
            var e = Object(h.a)(s);
            function s(t) {
              var i;
              return (
                Object(l.a)(this, s),
                ((i = e.call(this, t)).handleClick = function (t) {
                  var e = i.state.ListSquares.slice();
                  if (!i.calculateWinner(e) && !e[t]) {
                    (e[t] = i.state.Xturn ? "X" : "O"),
                      i.setState({ ListSquares: e, Xturn: !i.state.Xturn });
                    var s = i.calculateWinner(e);
                    null !== s &&
                      ("X" === s
                        ? i.setState({ Xpts: i.state.Xpts + 1 })
                        : i.setState({ Opts: i.state.Opts + 1 }));
                  }
                }),
                (i.state = {
                  ListSquares: Array(9).fill(null),
                  Xturn: !0,
                  winner: null,
                  Xpts: 0,
                  Opts: 0,
                }),
                i
              );
            }
            return (
              Object(u.a)(s, [
                {
                  key: "calculateWinner",
                  value: function (t) {
                    for (
                      var e = [
                          [0, 1, 2],
                          [3, 4, 5],
                          [6, 7, 8],
                          [0, 3, 6],
                          [1, 4, 7],
                          [2, 5, 8],
                          [0, 4, 8],
                          [2, 4, 6],
                        ],
                        s = 0;
                      s < e.length;
                      s++
                    ) {
                      var i = Object(c.a)(e[s], 3),
                        n = i[0],
                        a = i[1],
                        r = i[2];
                      if (t[n] && t[n] === t[a] && t[n] === t[r]) return t[n];
                    }
                    return null;
                  },
                },
                {
                  key: "positionSquare",
                  value: function (t) {
                    var e = this;
                    return Object(j.jsx)("div", {
                      className: "Board__Item",
                      children: Object(j.jsx)(d, {
                        onClick: function () {
                          return e.handleClick(t);
                        },
                        value: this.state.ListSquares[t],
                      }),
                    });
                  },
                },
                {
                  key: "again",
                  value: function () {
                    this.setState({
                      ListSquares: Array(9).fill(null),
                      Xturn: !0,
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t,
                      e = this,
                      s = this.calculateWinner(this.state.ListSquares);
                    return (
                      (t = s
                        ? "The winner is: ".concat(s)
                        : "The turn " + (this.state.Xturn ? "X" : "O")),
                      Object(j.jsxs)("div", {
                        className: "Game",
                        children: [
                          Object(j.jsxs)("div", {
                            className: "Ptos",
                            children: [
                              Object(j.jsxs)("div", {
                                className: "Ptos__ptos",
                                children: [
                                  Object(j.jsx)("div", {
                                    children: "X points",
                                  }),
                                  Object(j.jsx)("div", {
                                    children: this.state.Xpts,
                                  }),
                                ],
                              }),
                              Object(j.jsxs)("div", {
                                className: "Ptos__ptos",
                                children: [
                                  Object(j.jsx)("div", {
                                    children: "O Points",
                                  }),
                                  Object(j.jsx)("div", {
                                    children: this.state.Opts,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(j.jsxs)("div", {
                            children: [
                              Object(j.jsx)("h1", {
                                className: "Game__Title",
                                children: t,
                              }),
                              Object(j.jsxs)("div", {
                                className: "Game__Board",
                                children: [
                                  this.positionSquare(0),
                                  this.positionSquare(1),
                                  this.positionSquare(2),
                                  this.positionSquare(3),
                                  this.positionSquare(4),
                                  this.positionSquare(5),
                                  this.positionSquare(6),
                                  this.positionSquare(7),
                                  this.positionSquare(8),
                                ],
                              }),
                            ],
                          }),
                          Object(j.jsx)("div", {
                            children: Object(j.jsx)("button", {
                              className: "Game__repeat",
                              onClick: function () {
                                return e.again(e.state.winner);
                              },
                              children: "Play again",
                            }),
                          }),
                        ],
                      })
                    );
                  },
                },
              ]),
              s
            );
          })(n.a.Component));
      r.a.render(Object(j.jsx)(p, {}), document.getElementById("root"));
    },
  },
  [[15, 1, 2]],
]);
//# sourceMappingURL=main.fc11e68f.chunk.js.map
