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
"[project]/app/self-assessment/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/self-assessment/[id]/page.tsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=_9ef7beea._.js.map