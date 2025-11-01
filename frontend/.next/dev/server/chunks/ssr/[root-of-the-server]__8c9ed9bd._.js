module.exports = [
"[project]/app/goal/[id]/fetchGoal.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchGoal",
    ()=>fetchGoal
]);
const fetchGoal = async (id)=>{
    // const { data } = await axiosInstance.get<FetchGoalResponse>(`/goals${id}`);
    // return data;
    return {
        id: 1,
        name: 'Изучение TypeScript',
        description: 'Полное освоение TypeScript для профессиональной разработки',
        deadline: new Date('2024-12-31'),
        isDone: false,
        expectedResults: 'Создание сложных приложений на TypeScript, понимание продвинутых типов',
        tasks: [
            {
                id: 101,
                goalId: 1,
                name: 'Изучить базовые типы',
                description: 'Освоить примитивные типы, интерфейсы, типы объединений',
                deadline: new Date('2024-03-31')
            },
            {
                id: 102,
                goalId: 1,
                name: 'Освоить дженерики',
                description: 'Изучить generic types и их применение',
                deadline: new Date('2024-06-30')
            },
            {
                id: 103,
                goalId: 1,
                name: 'Практический проект',
                description: 'Создать полноценное приложение на TypeScript',
                deadline: new Date('2024-11-30')
            }
        ]
    };
};
}),
"[project]/app/hooks/api/useFetchGoal.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFetchGoal",
    ()=>useFetchGoal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$goal$2f5b$id$5d2f$fetchGoal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/goal/[id]/fetchGoal.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const useFetchGoal = (id)=>{
    const [goal, setGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            try {
                const goal = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$goal$2f5b$id$5d2f$fetchGoal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchGoal"])(id);
                setGoal(goal);
            } catch (err) {}
        };
        fetchData();
    }, [
        id,
        setGoal
    ]);
    return {
        goal
    };
};
}),
"[project]/app/self-assessment/[id]/AssessmentItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
const AssessmentItem = ({ text, numericValue, answer, onAnswerChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full border p-[20px] shadow-[0px_4px_4px_0px_#00000040]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[24px] mb-[10px]",
                children: text
            }, void 0, false, {
                fileName: "[project]/app/self-assessment/[id]/AssessmentItem.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            numericValue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full justify-center gap-[23px] mt-[10px]",
                children: Array.from({
                    length: 10
                }).map((el, elInd)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    onAnswerChange(elInd + 1);
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('cursor-pointer rounded-[50%] w-[40px] h-[40px] border after:content-[""] relative after:absolute after:w-[23px] after:h-[23px] after:bg-[#FF7D51] after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2', {
                                    'after:block': answer !== undefined && elInd + 1 <= answer,
                                    'after:hidden': answer === undefined || elInd + 1 > answer
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/self-assessment/[id]/AssessmentItem.tsx",
                                lineNumber: 29,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-[5px] text-[20px] text-center",
                                children: elInd + 1
                            }, void 0, false, {
                                fileName: "[project]/app/self-assessment/[id]/AssessmentItem.tsx",
                                lineNumber: 41,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, elInd, true, {
                        fileName: "[project]/app/self-assessment/[id]/AssessmentItem.tsx",
                        lineNumber: 28,
                        columnNumber: 8
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/app/self-assessment/[id]/AssessmentItem.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                onChange: (e)=>{
                    onAnswerChange(e.target.value);
                },
                name: "",
                id: "",
                rows: 4,
                className: "rounded-[20px] bg-[#F0F0F0] shadow-[inset_0px_4px_4px_0px_#00000040] w-full p-[5px]"
            }, void 0, false, {
                fileName: "[project]/app/self-assessment/[id]/AssessmentItem.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/self-assessment/[id]/AssessmentItem.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AssessmentItem;
}),
"[project]/assets/Save.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Save.8a6aabe9.svg");}),
"[project]/assets/Save.svg.mjs { IMAGE => \"[project]/assets/Save.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$Save$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/assets/Save.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$Save$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 48,
    height: 48,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "axiosInstance",
    ()=>axiosInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    // baseURL: `${process.env.NEXT_PUBLIC_HOST}/api`,
    baseURL: `http://localhost:8080/api`,
    withCredentials: true
});
}),
"[project]/app/self-assessment/[id]/sendAssessment.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendAssessment",
    ()=>sendAssessment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api.ts [app-ssr] (ecmascript)");
;
const sendAssessment = async (answers)=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/`, answers);
    return data;
};
}),
"[project]/app/self-assessment/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$api$2f$useFetchGoal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/api/useFetchGoal.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$self$2d$assessment$2f5b$id$5d2f$AssessmentItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/self-assessment/[id]/AssessmentItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$Save$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$Save$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/Save.svg.mjs { IMAGE => "[project]/assets/Save.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$self$2d$assessment$2f5b$id$5d2f$sendAssessment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/self-assessment/[id]/sendAssessment.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const assessmentQuestions = [
    {
        text: `1. Впиши, используя шаблон, каких результатов удалось достичь. (пример: выявил возможность оптимизации количества кликов при оформлении подписки и после реализации улучшения рост по оплате подписки составил +1%)`,
        numericValue: false
    },
    {
        text: `2. Какой личный вклад ты сделал в полученный результат? 
(пример: благодаря созданной документации команда находила решения в 1,5 раза быстрее)`,
        numericValue: false
    },
    {
        text: `3. Что ты забираешь с собой по результатам выполнения этой задачи? 
(например: прокачался в микросервисах, хочу это развивать дальше)`,
        numericValue: false
    },
    {
        text: `4. Что в следующий раз будешь делать по-другому?`,
        numericValue: false
    },
    {
        text: `5. Как ты оцениваешь качество своего взаимодействия с коллегами, командой по данной задаче?`,
        numericValue: true
    },
    {
        text: `6. Как ты оцениваешь общую удовлетворенность своим выполнением данной задачи?`,
        numericValue: true
    }
];
const SelfAssessment = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { goal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$api$2f$useFetchGoal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFetchGoal"])(Number(params.id));
    const onSubmit = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$self$2d$assessment$2f5b$id$5d2f$sendAssessment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendAssessment"])(answers);
        } catch (error) {
            alert('Произошла ошибка');
        }
    };
    if (!goal) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pl-[60px] pt-[22px] pr-[136px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-[32px] mb-[25px]",
                children: "Цель:"
            }, void 0, false, {
                fileName: "[project]/app/self-assessment/[id]/page.tsx",
                lineNumber: 61,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[24px] py-[12px] pl-[10px] shadow-[inset_0px_4px_4px_0px_#00000040] bg-[#F0F0F0] rounded-[20px]",
                children: goal.name
            }, void 0, false, {
                fileName: "[project]/app/self-assessment/[id]/page.tsx",
                lineNumber: 62,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-[58px] mt-[13px]",
                children: assessmentQuestions.map((qst, qstInd)=>{
                    if (qst.numericValue) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$self$2d$assessment$2f5b$id$5d2f$AssessmentItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onAnswerChange: (answer)=>{
                                setAnswers((prev)=>{
                                    const prevCopy = [
                                        ...prev
                                    ];
                                    prevCopy[qstInd] = answer;
                                    return prevCopy;
                                });
                            },
                            text: qst.text,
                            numericValue: true,
                            answer: answers[qstInd]
                        }, qstInd, false, {
                            fileName: "[project]/app/self-assessment/[id]/page.tsx",
                            lineNumber: 69,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0));
                    } else {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$self$2d$assessment$2f5b$id$5d2f$AssessmentItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onAnswerChange: (answer)=>{
                                setAnswers((prev)=>{
                                    const prevCopy = [
                                        ...prev
                                    ];
                                    prevCopy[qstInd] = answer;
                                    return prevCopy;
                                });
                            },
                            text: qst.text,
                            numericValue: false,
                            answer: answers[qstInd]
                        }, qstInd, false, {
                            fileName: "[project]/app/self-assessment/[id]/page.tsx",
                            lineNumber: 85,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0));
                    }
                })
            }, void 0, false, {
                fileName: "[project]/app/self-assessment/[id]/page.tsx",
                lineNumber: 65,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onSubmit(),
                className: "mb-[24px] shadow-[0px_4px_4px_0px_#00000040] flex gap-[20px] py-[14px] pl-[21px] items-center bg-[#EFEFEF] rounded-[20px] pr-[60px] mt-[40px] cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$Save$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$Save$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                        alt: "",
                        className: "w-[48px] h-[48px]"
                    }, void 0, false, {
                        fileName: "[project]/app/self-assessment/[id]/page.tsx",
                        lineNumber: 106,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[24px]",
                        children: "Сохранить"
                    }, void 0, false, {
                        fileName: "[project]/app/self-assessment/[id]/page.tsx",
                        lineNumber: 107,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/self-assessment/[id]/page.tsx",
                lineNumber: 102,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/self-assessment/[id]/page.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SelfAssessment;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8c9ed9bd._.js.map