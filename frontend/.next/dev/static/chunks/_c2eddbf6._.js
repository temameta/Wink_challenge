(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/goal/[id]/fetchGoal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/api/useFetchGoal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFetchGoal",
    ()=>useFetchGoal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$goal$2f5b$id$5d2f$fetchGoal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/goal/[id]/fetchGoal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useFetchGoal = (id)=>{
    _s();
    const [goal, setGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFetchGoal.useEffect": ()=>{
            const fetchData = {
                "useFetchGoal.useEffect.fetchData": async ()=>{
                    try {
                        const goal = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$goal$2f5b$id$5d2f$fetchGoal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchGoal"])(id);
                        setGoal(goal);
                    } catch (err) {}
                }
            }["useFetchGoal.useEffect.fetchData"];
            fetchData();
        }
    }["useFetchGoal.useEffect"], [
        id,
        setGoal
    ]);
    return {
        goal
    };
};
_s(useFetchGoal, "Lej9l9ZhL8CYlEh9rggmBkCWD7Q=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/self-assessment/[id]/AssessmentItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
const AssessmentItem = ({ text, numericValue, answer, onAnswerChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full border p-[20px] shadow-[0px_4px_4px_0px_#00000040]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[24px] mb-[10px]",
                children: text
            }, void 0, false, {
                fileName: "[project]/app/self-assessment/[id]/AssessmentItem.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            numericValue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full justify-center gap-[23px] mt-[10px]",
                children: Array.from({
                    length: 10
                }).map((el, elInd)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    onAnswerChange(elInd + 1);
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('cursor-pointer rounded-[50%] w-[40px] h-[40px] border after:content-[""] relative after:absolute after:w-[23px] after:h-[23px] after:bg-[#FF7D51] after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2', {
                                    'after:block': answer !== undefined && elInd + 1 <= answer,
                                    'after:hidden': answer === undefined || elInd + 1 > answer
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/self-assessment/[id]/AssessmentItem.tsx",
                                lineNumber: 29,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
_c = AssessmentItem;
const __TURBOPACK__default__export__ = AssessmentItem;
var _c;
__turbopack_context__.k.register(_c, "AssessmentItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/self-assessment/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$api$2f$useFetchGoal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/api/useFetchGoal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$self$2d$assessment$2f5b$id$5d2f$AssessmentItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/self-assessment/[id]/AssessmentItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { goal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$api$2f$useFetchGoal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchGoal"])(Number(params.id));
    if (!goal) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pl-[60px] pt-[22px] pr-[136px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-[32px] mb-[25px]",
                children: "Цель:"
            }, void 0, false, {
                fileName: "[project]/app/self-assessment/[id]/page.tsx",
                lineNumber: 51,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[24px] py-[12px] pl-[10px] shadow-[inset_0px_4px_4px_0px_#00000040] bg-[#F0F0F0] rounded-[20px]",
                children: goal.name
            }, void 0, false, {
                fileName: "[project]/app/self-assessment/[id]/page.tsx",
                lineNumber: 52,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-[58px] mt-[13px]",
                children: assessmentQuestions.map((qst, qstInd)=>{
                    if (qst.numericValue) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$self$2d$assessment$2f5b$id$5d2f$AssessmentItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            lineNumber: 59,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0));
                    } else {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$self$2d$assessment$2f5b$id$5d2f$AssessmentItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            lineNumber: 75,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0));
                    }
                })
            }, void 0, false, {
                fileName: "[project]/app/self-assessment/[id]/page.tsx",
                lineNumber: 55,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/self-assessment/[id]/page.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SelfAssessment, "iJ8Q2Xol471iY847tsFp084oogU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$api$2f$useFetchGoal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchGoal"]
    ];
});
_c = SelfAssessment;
const __TURBOPACK__default__export__ = SelfAssessment;
var _c;
__turbopack_context__.k.register(_c, "SelfAssessment");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
]);

//# sourceMappingURL=_c2eddbf6._.js.map