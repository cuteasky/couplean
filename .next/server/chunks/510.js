"use strict";
exports.id = 510;
exports.ids = [510];
exports.modules = {

/***/ 121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./components/navbar.js



function Navbar() {
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-white shadow-md shadow-slate-300 py-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-2xl uppercase font-semibold tracking-normal",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "block bg-gradient-to-br text-transparent bg-clip-text from-red-600 via-pink-600 to-purple-600",
                                children: "Couplean"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: router.pathname == "/" ? "text-red-500 font-semibold border-b-2 border-dashed border-red-600" : "text-slate-700",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: router.pathname == "/about" ? "text-red-500 font-semibold border-b-2 border-dashed border-red-500 ml-5" : "text-slate-700 ml-5",
                                    children: "About"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/layout.js



function Layout(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mt-8",
                children: props.children
            })
        ]
    }));
};


/***/ })

};
;