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
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
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
                lineNumber: 50,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[24px] py-[12px] pl-[10px] shadow-[inset_0px_4px_4px_0px_#00000040] bg-[#F0F0F0] rounded-[20px]",
                children: goal.name
            }, void 0, false, {
                fileName: "[project]/app/self-assessment/[id]/page.tsx",
                lineNumber: 51,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/self-assessment/[id]/page.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SelfAssessment, "NP9HC4poVXWQyiV/KGbFUSOQYNQ=", false, function() {
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
]);

//# sourceMappingURL=app_5bd50e7f._.js.map