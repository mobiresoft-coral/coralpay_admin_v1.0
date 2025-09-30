(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/core.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/** A special constant with type `never` */ __turbopack_context__.s({
    "$ZodAsyncError": ()=>$ZodAsyncError,
    "$brand": ()=>$brand,
    "$constructor": ()=>$constructor,
    "NEVER": ()=>NEVER,
    "config": ()=>config,
    "globalConfig": ()=>globalConfig
});
const NEVER = Object.freeze({
    status: "aborted"
});
/*@__NO_SIDE_EFFECTS__*/ function $constructor(name, initializer, params) {
    function init(inst, def) {
        var _a;
        var _inst__zod;
        Object.defineProperty(inst, "_zod", {
            value: (_inst__zod = inst._zod) !== null && _inst__zod !== void 0 ? _inst__zod : {},
            enumerable: false
        });
        var _traits;
        (_traits = (_a = inst._zod).traits) !== null && _traits !== void 0 ? _traits : _a.traits = new Set();
        inst._zod.traits.add(name);
        initializer(inst, def);
        // support prototype modifications
        for(const k in _.prototype){
            if (!(k in inst)) Object.defineProperty(inst, k, {
                value: _.prototype[k].bind(inst)
            });
        }
        inst._zod.constr = _;
        inst._zod.def = def;
    }
    var _params_Parent;
    // doesn't work if Parent has a constructor with arguments
    const Parent = (_params_Parent = params === null || params === void 0 ? void 0 : params.Parent) !== null && _params_Parent !== void 0 ? _params_Parent : Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", {
        value: name
    });
    function _(def) {
        var _a;
        const inst = (params === null || params === void 0 ? void 0 : params.Parent) ? new Definition() : this;
        init(inst, def);
        var _deferred;
        (_deferred = (_a = inst._zod).deferred) !== null && _deferred !== void 0 ? _deferred : _a.deferred = [];
        for (const fn of inst._zod.deferred){
            fn();
        }
        return inst;
    }
    Object.defineProperty(_, "init", {
        value: init
    });
    Object.defineProperty(_, Symbol.hasInstance, {
        value: (inst)=>{
            var _inst__zod_traits, _inst__zod;
            if ((params === null || params === void 0 ? void 0 : params.Parent) && inst instanceof params.Parent) return true;
            return inst === null || inst === void 0 ? void 0 : (_inst__zod = inst._zod) === null || _inst__zod === void 0 ? void 0 : (_inst__zod_traits = _inst__zod.traits) === null || _inst__zod_traits === void 0 ? void 0 : _inst__zod_traits.has(name);
        }
    });
    Object.defineProperty(_, "name", {
        value: name
    });
    return _;
}
const $brand = Symbol("zod_brand");
class $ZodAsyncError extends Error {
    constructor(){
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}
const globalConfig = {};
function config(newConfig) {
    if (newConfig) Object.assign(globalConfig, newConfig);
    return globalConfig;
}
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/util.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// functions
__turbopack_context__.s({
    "BIGINT_FORMAT_RANGES": ()=>BIGINT_FORMAT_RANGES,
    "Class": ()=>Class,
    "NUMBER_FORMAT_RANGES": ()=>NUMBER_FORMAT_RANGES,
    "aborted": ()=>aborted,
    "allowsEval": ()=>allowsEval,
    "assert": ()=>assert,
    "assertEqual": ()=>assertEqual,
    "assertIs": ()=>assertIs,
    "assertNever": ()=>assertNever,
    "assertNotEqual": ()=>assertNotEqual,
    "assignProp": ()=>assignProp,
    "cached": ()=>cached,
    "captureStackTrace": ()=>captureStackTrace,
    "cleanEnum": ()=>cleanEnum,
    "cleanRegex": ()=>cleanRegex,
    "clone": ()=>clone,
    "createTransparentProxy": ()=>createTransparentProxy,
    "defineLazy": ()=>defineLazy,
    "esc": ()=>esc,
    "escapeRegex": ()=>escapeRegex,
    "extend": ()=>extend,
    "finalizeIssue": ()=>finalizeIssue,
    "floatSafeRemainder": ()=>floatSafeRemainder,
    "getElementAtPath": ()=>getElementAtPath,
    "getEnumValues": ()=>getEnumValues,
    "getLengthableOrigin": ()=>getLengthableOrigin,
    "getParsedType": ()=>getParsedType,
    "getSizableOrigin": ()=>getSizableOrigin,
    "isObject": ()=>isObject,
    "isPlainObject": ()=>isPlainObject,
    "issue": ()=>issue,
    "joinValues": ()=>joinValues,
    "jsonStringifyReplacer": ()=>jsonStringifyReplacer,
    "merge": ()=>merge,
    "normalizeParams": ()=>normalizeParams,
    "nullish": ()=>nullish,
    "numKeys": ()=>numKeys,
    "omit": ()=>omit,
    "optionalKeys": ()=>optionalKeys,
    "partial": ()=>partial,
    "pick": ()=>pick,
    "prefixIssues": ()=>prefixIssues,
    "primitiveTypes": ()=>primitiveTypes,
    "promiseAllObject": ()=>promiseAllObject,
    "propertyKeyTypes": ()=>propertyKeyTypes,
    "randomString": ()=>randomString,
    "required": ()=>required,
    "stringifyPrimitive": ()=>stringifyPrimitive,
    "unwrapMessage": ()=>unwrapMessage
});
function assertEqual(val) {
    return val;
}
function assertNotEqual(val) {
    return val;
}
function assertIs(_arg) {}
function assertNever(_x) {
    throw new Error();
}
function assert(_) {}
function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v)=>typeof v === "number");
    const values = Object.entries(entries).filter((param)=>{
        let [k, _] = param;
        return numericValues.indexOf(+k) === -1;
    }).map((param)=>{
        let [_, v] = param;
        return v;
    });
    return values;
}
function joinValues(array) {
    let separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "|";
    return array.map((val)=>stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
    if (typeof value === "bigint") return value.toString();
    return value;
}
function cached(getter) {
    const set = false;
    return {
        get value () {
            if ("TURBOPACK compile-time truthy", 1) {
                const value = getter();
                Object.defineProperty(this, "value", {
                    value
                });
                return value;
            }
            //TURBOPACK unreachable
            ;
        }
    };
}
function nullish(input) {
    return input === null || input === undefined;
}
function cleanRegex(source) {
    const start = source.startsWith("^") ? 1 : 0;
    const end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
}
function defineLazy(object, key, getter) {
    const set = false;
    Object.defineProperty(object, key, {
        get () {
            if ("TURBOPACK compile-time truthy", 1) {
                const value = getter();
                object[key] = value;
                return value;
            }
            //TURBOPACK unreachable
            ;
        },
        set (v) {
            Object.defineProperty(object, key, {
                value: v
            });
        // object[key] = v;
        },
        configurable: true
    });
}
function assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
    });
}
function getElementAtPath(obj, path) {
    if (!path) return obj;
    return path.reduce((acc, key)=>acc === null || acc === void 0 ? void 0 : acc[key], obj);
}
function promiseAllObject(promisesObj) {
    const keys = Object.keys(promisesObj);
    const promises = keys.map((key)=>promisesObj[key]);
    return Promise.all(promises).then((results)=>{
        const resolvedObj = {};
        for(let i = 0; i < keys.length; i++){
            resolvedObj[keys[i]] = results[i];
        }
        return resolvedObj;
    });
}
function randomString() {
    let length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for(let i = 0; i < length; i++){
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
function esc(str) {
    return JSON.stringify(str);
}
const captureStackTrace = Error.captureStackTrace ? Error.captureStackTrace : function() {
    for(var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++){
        _args[_key] = arguments[_key];
    }
};
function isObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
}
const allowsEval = cached(()=>{
    var _navigator_userAgent, _navigator;
    if (typeof navigator !== "undefined" && ((_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator_userAgent = _navigator.userAgent) === null || _navigator_userAgent === void 0 ? void 0 : _navigator_userAgent.includes("Cloudflare"))) {
        return false;
    }
    try {
        const F = Function;
        new F("");
        return true;
    } catch (_) {
        return false;
    }
});
function isPlainObject(o) {
    if (isObject(o) === false) return false;
    // modified constructor
    const ctor = o.constructor;
    if (ctor === undefined) return true;
    // modified prototype
    const prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    // ctor doesn't have static `isPrototypeOf`
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
        return false;
    }
    return true;
}
function numKeys(data) {
    let keyCount = 0;
    for(const key in data){
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            keyCount++;
        }
    }
    return keyCount;
}
const getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return "undefined";
        case "string":
            return "string";
        case "number":
            return Number.isNaN(data) ? "nan" : "number";
        case "boolean":
            return "boolean";
        case "function":
            return "function";
        case "bigint":
            return "bigint";
        case "symbol":
            return "symbol";
        case "object":
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return "promise";
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return "map";
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return "set";
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return "date";
            }
            if (typeof File !== "undefined" && data instanceof File) {
                return "file";
            }
            return "object";
        default:
            throw new Error("Unknown data type: ".concat(t));
    }
};
const propertyKeyTypes = new Set([
    "string",
    "number",
    "symbol"
]);
const primitiveTypes = new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined"
]);
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
    const cl = new inst._zod.constr(def !== null && def !== void 0 ? def : inst._zod.def);
    if (!def || (params === null || params === void 0 ? void 0 : params.parent)) cl._zod.parent = inst;
    return cl;
}
function normalizeParams(_params) {
    const params = _params;
    if (!params) return {};
    if (typeof params === "string") return {
        error: ()=>params
    };
    if ((params === null || params === void 0 ? void 0 : params.message) !== undefined) {
        if ((params === null || params === void 0 ? void 0 : params.error) !== undefined) throw new Error("Cannot specify both `message` and `error` params");
        params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string") return {
        ...params,
        error: ()=>params.error
    };
    return params;
}
function createTransparentProxy(getter) {
    let target;
    return new Proxy({}, {
        get (_, prop, receiver) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.get(target, prop, receiver);
        },
        set (_, prop, value, receiver) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.set(target, prop, value, receiver);
        },
        has (_, prop) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.has(target, prop);
        },
        deleteProperty (_, prop) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.deleteProperty(target, prop);
        },
        ownKeys (_) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor (_, prop) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.getOwnPropertyDescriptor(target, prop);
        },
        defineProperty (_, prop, descriptor) {
            target !== null && target !== void 0 ? target : target = getter();
            return Reflect.defineProperty(target, prop, descriptor);
        }
    });
}
function stringifyPrimitive(value) {
    if (typeof value === "bigint") return value.toString() + "n";
    if (typeof value === "string") return '"'.concat(value, '"');
    return "".concat(value);
}
function optionalKeys(shape) {
    return Object.keys(shape).filter((k)=>{
        return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
    });
}
const NUMBER_FORMAT_RANGES = {
    safeint: [
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER
    ],
    int32: [
        -2147483648,
        2147483647
    ],
    uint32: [
        0,
        4294967295
    ],
    float32: [
        -3.4028234663852886e38,
        3.4028234663852886e38
    ],
    float64: [
        -Number.MAX_VALUE,
        Number.MAX_VALUE
    ]
};
const BIGINT_FORMAT_RANGES = {
    int64: [
        /* @__PURE__*/ BigInt("-9223372036854775808"),
        /* @__PURE__*/ BigInt("9223372036854775807")
    ],
    uint64: [
        /* @__PURE__*/ BigInt(0),
        /* @__PURE__*/ BigInt("18446744073709551615")
    ]
};
function pick(schema, mask) {
    const newShape = {};
    const currDef = schema._zod.def; //.shape;
    for(const key in mask){
        if (!(key in currDef.shape)) {
            throw new Error('Unrecognized key: "'.concat(key, '"'));
        }
        if (!mask[key]) continue;
        // pick key
        newShape[key] = currDef.shape[key];
    }
    return clone(schema, {
        ...schema._zod.def,
        shape: newShape,
        checks: []
    });
}
function omit(schema, mask) {
    const newShape = {
        ...schema._zod.def.shape
    };
    const currDef = schema._zod.def; //.shape;
    for(const key in mask){
        if (!(key in currDef.shape)) {
            throw new Error('Unrecognized key: "'.concat(key, '"'));
        }
        if (!mask[key]) continue;
        delete newShape[key];
    }
    return clone(schema, {
        ...schema._zod.def,
        shape: newShape,
        checks: []
    });
}
function extend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to extend: expected a plain object");
    }
    const def = {
        ...schema._zod.def,
        get shape () {
            const _shape = {
                ...schema._zod.def.shape,
                ...shape
            };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
        checks: []
    };
    return clone(schema, def);
}
function merge(a, b) {
    return clone(a, {
        ...a._zod.def,
        get shape () {
            const _shape = {
                ...a._zod.def.shape,
                ...b._zod.def.shape
            };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
        catchall: b._zod.def.catchall,
        checks: []
    });
}
function partial(Class, schema, mask) {
    const oldShape = schema._zod.def.shape;
    const shape = {
        ...oldShape
    };
    if (mask) {
        for(const key in mask){
            if (!(key in oldShape)) {
                throw new Error('Unrecognized key: "'.concat(key, '"'));
            }
            if (!mask[key]) continue;
            // if (oldShape[key]!._zod.optin === "optional") continue;
            shape[key] = Class ? new Class({
                type: "optional",
                innerType: oldShape[key]
            }) : oldShape[key];
        }
    } else {
        for(const key in oldShape){
            // if (oldShape[key]!._zod.optin === "optional") continue;
            shape[key] = Class ? new Class({
                type: "optional",
                innerType: oldShape[key]
            }) : oldShape[key];
        }
    }
    return clone(schema, {
        ...schema._zod.def,
        shape,
        checks: []
    });
}
function required(Class, schema, mask) {
    const oldShape = schema._zod.def.shape;
    const shape = {
        ...oldShape
    };
    if (mask) {
        for(const key in mask){
            if (!(key in shape)) {
                throw new Error('Unrecognized key: "'.concat(key, '"'));
            }
            if (!mask[key]) continue;
            // overwrite with non-optional
            shape[key] = new Class({
                type: "nonoptional",
                innerType: oldShape[key]
            });
        }
    } else {
        for(const key in oldShape){
            // overwrite with non-optional
            shape[key] = new Class({
                type: "nonoptional",
                innerType: oldShape[key]
            });
        }
    }
    return clone(schema, {
        ...schema._zod.def,
        shape,
        // optional: [],
        checks: []
    });
}
function aborted(x) {
    let startIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    for(let i = startIndex; i < x.issues.length; i++){
        var _x_issues_i;
        if (((_x_issues_i = x.issues[i]) === null || _x_issues_i === void 0 ? void 0 : _x_issues_i.continue) !== true) return true;
    }
    return false;
}
function prefixIssues(path, issues) {
    return issues.map((iss)=>{
        var _a;
        var _path;
        (_path = (_a = iss).path) !== null && _path !== void 0 ? _path : _a.path = [];
        iss.path.unshift(path);
        return iss;
    });
}
function unwrapMessage(message) {
    return typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
}
function finalizeIssue(iss, ctx, config) {
    var _iss_path;
    const full = {
        ...iss,
        path: (_iss_path = iss.path) !== null && _iss_path !== void 0 ? _iss_path : []
    };
    // for backwards compatibility
    if (!iss.message) {
        var _iss_inst__zod_def_error, _iss_inst__zod_def, _iss_inst, _ctx_error, _config_customError, _config_localeError;
        var _unwrapMessage, _ref, _ref1, _ref2;
        const message = (_ref2 = (_ref1 = (_ref = (_unwrapMessage = unwrapMessage((_iss_inst = iss.inst) === null || _iss_inst === void 0 ? void 0 : (_iss_inst__zod_def = _iss_inst._zod.def) === null || _iss_inst__zod_def === void 0 ? void 0 : (_iss_inst__zod_def_error = _iss_inst__zod_def.error) === null || _iss_inst__zod_def_error === void 0 ? void 0 : _iss_inst__zod_def_error.call(_iss_inst__zod_def, iss))) !== null && _unwrapMessage !== void 0 ? _unwrapMessage : unwrapMessage(ctx === null || ctx === void 0 ? void 0 : (_ctx_error = ctx.error) === null || _ctx_error === void 0 ? void 0 : _ctx_error.call(ctx, iss))) !== null && _ref !== void 0 ? _ref : unwrapMessage((_config_customError = config.customError) === null || _config_customError === void 0 ? void 0 : _config_customError.call(config, iss))) !== null && _ref1 !== void 0 ? _ref1 : unwrapMessage((_config_localeError = config.localeError) === null || _config_localeError === void 0 ? void 0 : _config_localeError.call(config, iss))) !== null && _ref2 !== void 0 ? _ref2 : "Invalid input";
        full.message = message;
    }
    // delete (full as any).def;
    delete full.inst;
    delete full.continue;
    if (!(ctx === null || ctx === void 0 ? void 0 : ctx.reportInput)) {
        delete full.input;
    }
    return full;
}
function getSizableOrigin(input) {
    if (input instanceof Set) return "set";
    if (input instanceof Map) return "map";
    if (input instanceof File) return "file";
    return "unknown";
}
function getLengthableOrigin(input) {
    if (Array.isArray(input)) return "array";
    if (typeof input === "string") return "string";
    return "unknown";
}
function issue() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    const [iss, input, inst] = args;
    if (typeof iss === "string") {
        return {
            message: iss,
            code: "custom",
            input,
            inst
        };
    }
    return {
        ...iss
    };
}
function cleanEnum(obj) {
    return Object.entries(obj).filter((param)=>{
        let [k, _] = param;
        // return true if NaN, meaning it's not a number, thus a string key
        return Number.isNaN(Number.parseInt(k, 10));
    }).map((el)=>el[1]);
}
class Class {
    constructor(..._args){}
}
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/errors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "$ZodError": ()=>$ZodError,
    "$ZodRealError": ()=>$ZodRealError,
    "flattenError": ()=>flattenError,
    "formatError": ()=>formatError,
    "prettifyError": ()=>prettifyError,
    "toDotPath": ()=>toDotPath,
    "treeifyError": ()=>treeifyError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
;
const initializer = (inst, def)=>{
    inst.name = "$ZodError";
    Object.defineProperty(inst, "_zod", {
        value: inst._zod,
        enumerable: false
    });
    Object.defineProperty(inst, "issues", {
        value: def,
        enumerable: false
    });
    Object.defineProperty(inst, "message", {
        get () {
            return JSON.stringify(def, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsonStringifyReplacer"], 2);
        },
        enumerable: true
    });
    Object.defineProperty(inst, "toString", {
        value: ()=>inst.message,
        enumerable: false
    });
};
const $ZodError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"])("$ZodError", initializer);
const $ZodRealError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"])("$ZodError", initializer, {
    Parent: Error
});
function flattenError(error) {
    let mapper = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (issue)=>issue.message;
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of error.issues){
        if (sub.path.length > 0) {
            fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
            fieldErrors[sub.path[0]].push(mapper(sub));
        } else {
            formErrors.push(mapper(sub));
        }
    }
    return {
        formErrors,
        fieldErrors
    };
}
function formatError(error, _mapper) {
    const mapper = _mapper || function(issue) {
        return issue.message;
    };
    const fieldErrors = {
        _errors: []
    };
    const processError = (error)=>{
        for (const issue of error.issues){
            if (issue.code === "invalid_union" && issue.errors.length) {
                issue.errors.map((issues)=>processError({
                        issues
                    }));
            } else if (issue.code === "invalid_key") {
                processError({
                    issues: issue.issues
                });
            } else if (issue.code === "invalid_element") {
                processError({
                    issues: issue.issues
                });
            } else if (issue.path.length === 0) {
                fieldErrors._errors.push(mapper(issue));
            } else {
                let curr = fieldErrors;
                let i = 0;
                while(i < issue.path.length){
                    const el = issue.path[i];
                    const terminal = i === issue.path.length - 1;
                    if (!terminal) {
                        curr[el] = curr[el] || {
                            _errors: []
                        };
                    } else {
                        curr[el] = curr[el] || {
                            _errors: []
                        };
                        curr[el]._errors.push(mapper(issue));
                    }
                    curr = curr[el];
                    i++;
                }
            }
        }
    };
    processError(error);
    return fieldErrors;
}
function treeifyError(error, _mapper) {
    const mapper = _mapper || function(issue) {
        return issue.message;
    };
    const result = {
        errors: []
    };
    const processError = function(error) {
        let path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        var _a, _b;
        for (const issue of error.issues){
            if (issue.code === "invalid_union" && issue.errors.length) {
                // regular union error
                issue.errors.map((issues)=>processError({
                        issues
                    }, issue.path));
            } else if (issue.code === "invalid_key") {
                processError({
                    issues: issue.issues
                }, issue.path);
            } else if (issue.code === "invalid_element") {
                processError({
                    issues: issue.issues
                }, issue.path);
            } else {
                const fullpath = [
                    ...path,
                    ...issue.path
                ];
                if (fullpath.length === 0) {
                    result.errors.push(mapper(issue));
                    continue;
                }
                let curr = result;
                let i = 0;
                while(i < fullpath.length){
                    const el = fullpath[i];
                    const terminal = i === fullpath.length - 1;
                    if (typeof el === "string") {
                        var _curr_properties;
                        (_curr_properties = curr.properties) !== null && _curr_properties !== void 0 ? _curr_properties : curr.properties = {};
                        var _el;
                        (_el = (_a = curr.properties)[el]) !== null && _el !== void 0 ? _el : _a[el] = {
                            errors: []
                        };
                        curr = curr.properties[el];
                    } else {
                        var _curr_items;
                        (_curr_items = curr.items) !== null && _curr_items !== void 0 ? _curr_items : curr.items = [];
                        var _el1;
                        (_el1 = (_b = curr.items)[el]) !== null && _el1 !== void 0 ? _el1 : _b[el] = {
                            errors: []
                        };
                        curr = curr.items[el];
                    }
                    if (terminal) {
                        curr.errors.push(mapper(issue));
                    }
                    i++;
                }
            }
        }
    };
    processError(error);
    return result;
}
function toDotPath(path) {
    const segs = [];
    for (const seg of path){
        if (typeof seg === "number") segs.push("[".concat(seg, "]"));
        else if (typeof seg === "symbol") segs.push("[".concat(JSON.stringify(String(seg)), "]"));
        else if (/[^\w$]/.test(seg)) segs.push("[".concat(JSON.stringify(seg), "]"));
        else {
            if (segs.length) segs.push(".");
            segs.push(seg);
        }
    }
    return segs.join("");
}
function prettifyError(error) {
    const lines = [];
    // sort by path length
    const issues = [
        ...error.issues
    ].sort((a, b)=>a.path.length - b.path.length);
    // Process each issue
    for (const issue of issues){
        var _issue_path;
        lines.push("✖ ".concat(issue.message));
        if ((_issue_path = issue.path) === null || _issue_path === void 0 ? void 0 : _issue_path.length) lines.push("  → at ".concat(toDotPath(issue.path)));
    }
    // Convert Map to formatted string
    return lines.join("\n");
}
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/parse.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "_parse": ()=>_parse,
    "_parseAsync": ()=>_parseAsync,
    "_safeParse": ()=>_safeParse,
    "_safeParseAsync": ()=>_safeParseAsync,
    "parse": ()=>parse,
    "parseAsync": ()=>parseAsync,
    "safeParse": ()=>safeParse,
    "safeParseAsync": ()=>safeParseAsync
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
;
;
const _parse = (_Err)=>(schema, value, _ctx, _params)=>{
        const ctx = _ctx ? Object.assign(_ctx, {
            async: false
        }) : {
            async: false
        };
        const result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodAsyncError"]();
        }
        if (result.issues.length) {
            var _params_Err;
            const e = new ((_params_Err = _params === null || _params === void 0 ? void 0 : _params.Err) !== null && _params_Err !== void 0 ? _params_Err : _Err)(result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]())));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureStackTrace"](e, _params === null || _params === void 0 ? void 0 : _params.callee);
            throw e;
        }
        return result.value;
    };
const parse = /* @__PURE__*/ _parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _parseAsync = (_Err)=>async (schema, value, _ctx, params)=>{
        const ctx = _ctx ? Object.assign(_ctx, {
            async: true
        }) : {
            async: true
        };
        let result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) result = await result;
        if (result.issues.length) {
            var _params_Err;
            const e = new ((_params_Err = params === null || params === void 0 ? void 0 : params.Err) !== null && _params_Err !== void 0 ? _params_Err : _Err)(result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]())));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureStackTrace"](e, params === null || params === void 0 ? void 0 : params.callee);
            throw e;
        }
        return result.value;
    };
const parseAsync = /* @__PURE__*/ _parseAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _safeParse = (_Err)=>(schema, value, _ctx)=>{
        const ctx = _ctx ? {
            ..._ctx,
            async: false
        } : {
            async: false
        };
        const result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodAsyncError"]();
        }
        return result.issues.length ? {
            success: false,
            error: new (_Err !== null && _Err !== void 0 ? _Err : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodError"])(result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]())))
        } : {
            success: true,
            data: result.value
        };
    };
const safeParse = /* @__PURE__*/ _safeParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _safeParseAsync = (_Err)=>async (schema, value, _ctx)=>{
        const ctx = _ctx ? Object.assign(_ctx, {
            async: true
        }) : {
            async: true
        };
        let result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) result = await result;
        return result.issues.length ? {
            success: false,
            error: new _Err(result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]())))
        } : {
            success: true,
            data: result.value
        };
    };
const safeParseAsync = /* @__PURE__*/ _safeParseAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodRealError"]);
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/regexes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "base64": ()=>base64,
    "base64url": ()=>base64url,
    "bigint": ()=>bigint,
    "boolean": ()=>boolean,
    "browserEmail": ()=>browserEmail,
    "cidrv4": ()=>cidrv4,
    "cidrv6": ()=>cidrv6,
    "cuid": ()=>cuid,
    "cuid2": ()=>cuid2,
    "date": ()=>date,
    "datetime": ()=>datetime,
    "domain": ()=>domain,
    "duration": ()=>duration,
    "e164": ()=>e164,
    "email": ()=>email,
    "emoji": ()=>emoji,
    "extendedDuration": ()=>extendedDuration,
    "guid": ()=>guid,
    "hostname": ()=>hostname,
    "html5Email": ()=>html5Email,
    "integer": ()=>integer,
    "ipv4": ()=>ipv4,
    "ipv6": ()=>ipv6,
    "ksuid": ()=>ksuid,
    "lowercase": ()=>lowercase,
    "nanoid": ()=>nanoid,
    "null": ()=>_null,
    "number": ()=>number,
    "rfc5322Email": ()=>rfc5322Email,
    "string": ()=>string,
    "time": ()=>time,
    "ulid": ()=>ulid,
    "undefined": ()=>_undefined,
    "unicodeEmail": ()=>unicodeEmail,
    "uppercase": ()=>uppercase,
    "uuid": ()=>uuid,
    "uuid4": ()=>uuid4,
    "uuid6": ()=>uuid6,
    "uuid7": ()=>uuid7,
    "xid": ()=>xid
});
const cuid = /^[cC][^\s-]{8,}$/;
const cuid2 = /^[0-9a-z]+$/;
const ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
const xid = /^[0-9a-vA-V]{20}$/;
const ksuid = /^[A-Za-z0-9]{27}$/;
const nanoid = /^[a-zA-Z0-9_-]{21}$/;
const duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
const extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
const uuid = (version)=>{
    if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
    return new RegExp("^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-".concat(version, "[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$"));
};
const uuid4 = /*@__PURE__*/ uuid(4);
const uuid6 = /*@__PURE__*/ uuid(6);
const uuid7 = /*@__PURE__*/ uuid(7);
const email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
const html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
const browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emoji = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function emoji() {
    return new RegExp(_emoji, "u");
}
const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
const base64url = /^[A-Za-z0-9_-]*$/;
const hostname = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
const domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
const e164 = /^\+(?:[0-9]){6,14}[0-9]$/;
// const dateSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateSource = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
const date = /*@__PURE__*/ new RegExp("^".concat(dateSource, "$"));
function timeSource(args) {
    const hhmm = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    const regex = typeof args.precision === "number" ? args.precision === -1 ? "".concat(hhmm) : args.precision === 0 ? "".concat(hhmm, ":[0-5]\\d") : "".concat(hhmm, ":[0-5]\\d\\.\\d{").concat(args.precision, "}") : "".concat(hhmm, "(?::[0-5]\\d(?:\\.\\d+)?)?");
    return regex;
}
function time(args) {
    return new RegExp("^".concat(timeSource(args), "$"));
}
function datetime(args) {
    const time = timeSource({
        precision: args.precision
    });
    const opts = [
        "Z"
    ];
    if (args.local) opts.push("");
    if (args.offset) opts.push("([+-]\\d{2}:\\d{2})");
    const timeRegex = "".concat(time, "(?:").concat(opts.join("|"), ")");
    return new RegExp("^".concat(dateSource, "T(?:").concat(timeRegex, ")$"));
}
const string = (params)=>{
    var _params_minimum, _params_maximum;
    const regex = params ? "[\\s\\S]{".concat((_params_minimum = params === null || params === void 0 ? void 0 : params.minimum) !== null && _params_minimum !== void 0 ? _params_minimum : 0, ",").concat((_params_maximum = params === null || params === void 0 ? void 0 : params.maximum) !== null && _params_maximum !== void 0 ? _params_maximum : "", "}") : "[\\s\\S]*";
    return new RegExp("^".concat(regex, "$"));
};
const bigint = /^\d+n?$/;
const integer = /^\d+$/;
const number = /^-?\d+(?:\.\d+)?/i;
const boolean = /true|false/i;
const _null = /null/i;
;
const _undefined = /undefined/i;
;
const lowercase = /^[^A-Z]*$/;
const uppercase = /^[^a-z]*$/;
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/checks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// import { $ZodType } from "./schemas.js";
__turbopack_context__.s({
    "$ZodCheck": ()=>$ZodCheck,
    "$ZodCheckBigIntFormat": ()=>$ZodCheckBigIntFormat,
    "$ZodCheckEndsWith": ()=>$ZodCheckEndsWith,
    "$ZodCheckGreaterThan": ()=>$ZodCheckGreaterThan,
    "$ZodCheckIncludes": ()=>$ZodCheckIncludes,
    "$ZodCheckLengthEquals": ()=>$ZodCheckLengthEquals,
    "$ZodCheckLessThan": ()=>$ZodCheckLessThan,
    "$ZodCheckLowerCase": ()=>$ZodCheckLowerCase,
    "$ZodCheckMaxLength": ()=>$ZodCheckMaxLength,
    "$ZodCheckMaxSize": ()=>$ZodCheckMaxSize,
    "$ZodCheckMimeType": ()=>$ZodCheckMimeType,
    "$ZodCheckMinLength": ()=>$ZodCheckMinLength,
    "$ZodCheckMinSize": ()=>$ZodCheckMinSize,
    "$ZodCheckMultipleOf": ()=>$ZodCheckMultipleOf,
    "$ZodCheckNumberFormat": ()=>$ZodCheckNumberFormat,
    "$ZodCheckOverwrite": ()=>$ZodCheckOverwrite,
    "$ZodCheckProperty": ()=>$ZodCheckProperty,
    "$ZodCheckRegex": ()=>$ZodCheckRegex,
    "$ZodCheckSizeEquals": ()=>$ZodCheckSizeEquals,
    "$ZodCheckStartsWith": ()=>$ZodCheckStartsWith,
    "$ZodCheckStringFormat": ()=>$ZodCheckStringFormat,
    "$ZodCheckUpperCase": ()=>$ZodCheckUpperCase
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/regexes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
;
;
const $ZodCheck = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheck", (inst, def)=>{
    var _a;
    var _inst__zod;
    (_inst__zod = inst._zod) !== null && _inst__zod !== void 0 ? _inst__zod : inst._zod = {};
    inst._zod.def = def;
    var _onattach;
    (_onattach = (_a = inst._zod).onattach) !== null && _onattach !== void 0 ? _onattach : _a.onattach = [];
});
const numericOriginMap = {
    number: "number",
    bigint: "bigint",
    object: "date"
};
const $ZodCheckLessThan = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckLessThan", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        var _ref;
        const curr = (_ref = def.inclusive ? bag.maximum : bag.exclusiveMaximum) !== null && _ref !== void 0 ? _ref : Number.POSITIVE_INFINITY;
        if (def.value < curr) {
            if (def.inclusive) bag.maximum = def.value;
            else bag.exclusiveMaximum = def.value;
        }
    });
    inst._zod.check = (payload)=>{
        if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
            return;
        }
        payload.issues.push({
            origin,
            code: "too_big",
            maximum: def.value,
            input: payload.value,
            inclusive: def.inclusive,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckGreaterThan = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckGreaterThan", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        var _ref;
        const curr = (_ref = def.inclusive ? bag.minimum : bag.exclusiveMinimum) !== null && _ref !== void 0 ? _ref : Number.NEGATIVE_INFINITY;
        if (def.value > curr) {
            if (def.inclusive) bag.minimum = def.value;
            else bag.exclusiveMinimum = def.value;
        }
    });
    inst._zod.check = (payload)=>{
        if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
            return;
        }
        payload.issues.push({
            origin,
            code: "too_small",
            minimum: def.value,
            input: payload.value,
            inclusive: def.inclusive,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckMultipleOf = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckMultipleOf", (inst, def)=>{
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst)=>{
        var _a;
        var _multipleOf;
        (_multipleOf = (_a = inst._zod.bag).multipleOf) !== null && _multipleOf !== void 0 ? _multipleOf : _a.multipleOf = def.value;
    });
    inst._zod.check = (payload)=>{
        if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
        const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floatSafeRemainder"](payload.value, def.value) === 0;
        if (isMultiple) return;
        payload.issues.push({
            origin: typeof payload.value,
            code: "not_multiple_of",
            divisor: def.value,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckNumberFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckNumberFormat", (inst, def)=>{
    var _def_format;
    $ZodCheck.init(inst, def); // no format checks
    def.format = def.format || "float64";
    const isInt = (_def_format = def.format) === null || _def_format === void 0 ? void 0 : _def_format.includes("int");
    const origin = isInt ? "int" : "number";
    const [minimum, maximum] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NUMBER_FORMAT_RANGES"][def.format];
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.format = def.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
        if (isInt) bag.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integer"];
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        if (isInt) {
            if (!Number.isInteger(input)) {
                // invalid_format issue
                // payload.issues.push({
                //   expected: def.format,
                //   format: def.format,
                //   code: "invalid_format",
                //   input,
                //   inst,
                // });
                // invalid_type issue
                payload.issues.push({
                    expected: origin,
                    format: def.format,
                    code: "invalid_type",
                    input,
                    inst
                });
                return;
            // not_multiple_of issue
            // payload.issues.push({
            //   code: "not_multiple_of",
            //   origin: "number",
            //   input,
            //   inst,
            //   divisor: 1,
            // });
            }
            if (!Number.isSafeInteger(input)) {
                if (input > 0) {
                    // too_big
                    payload.issues.push({
                        input,
                        code: "too_big",
                        maximum: Number.MAX_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst,
                        origin,
                        continue: !def.abort
                    });
                } else {
                    // too_small
                    payload.issues.push({
                        input,
                        code: "too_small",
                        minimum: Number.MIN_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst,
                        origin,
                        continue: !def.abort
                    });
                }
                return;
            }
        }
        if (input < minimum) {
            payload.issues.push({
                origin: "number",
                input,
                code: "too_small",
                minimum,
                inclusive: true,
                inst,
                continue: !def.abort
            });
        }
        if (input > maximum) {
            payload.issues.push({
                origin: "number",
                input,
                code: "too_big",
                maximum,
                inst
            });
        }
    };
});
const $ZodCheckBigIntFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckBigIntFormat", (inst, def)=>{
    $ZodCheck.init(inst, def); // no format checks
    const [minimum, maximum] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIGINT_FORMAT_RANGES"][def.format];
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.format = def.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        if (input < minimum) {
            payload.issues.push({
                origin: "bigint",
                input,
                code: "too_small",
                minimum: minimum,
                inclusive: true,
                inst,
                continue: !def.abort
            });
        }
        if (input > maximum) {
            payload.issues.push({
                origin: "bigint",
                input,
                code: "too_big",
                maximum,
                inst
            });
        }
    };
});
const $ZodCheckMaxSize = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckMaxSize", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"](val) && val.size !== undefined;
    };
    inst._zod.onattach.push((inst)=>{
        var _inst__zod_bag_maximum;
        const curr = (_inst__zod_bag_maximum = inst._zod.bag.maximum) !== null && _inst__zod_bag_maximum !== void 0 ? _inst__zod_bag_maximum : Number.POSITIVE_INFINITY;
        if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const size = input.size;
        if (size <= def.maximum) return;
        payload.issues.push({
            origin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizableOrigin"](input),
            code: "too_big",
            maximum: def.maximum,
            input,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckMinSize = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckMinSize", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"](val) && val.size !== undefined;
    };
    inst._zod.onattach.push((inst)=>{
        var _inst__zod_bag_minimum;
        const curr = (_inst__zod_bag_minimum = inst._zod.bag.minimum) !== null && _inst__zod_bag_minimum !== void 0 ? _inst__zod_bag_minimum : Number.NEGATIVE_INFINITY;
        if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const size = input.size;
        if (size >= def.minimum) return;
        payload.issues.push({
            origin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizableOrigin"](input),
            code: "too_small",
            minimum: def.minimum,
            input,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckSizeEquals = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckSizeEquals", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"](val) && val.size !== undefined;
    };
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.minimum = def.size;
        bag.maximum = def.size;
        bag.size = def.size;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const size = input.size;
        if (size === def.size) return;
        const tooBig = size > def.size;
        payload.issues.push({
            origin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizableOrigin"](input),
            ...tooBig ? {
                code: "too_big",
                maximum: def.size
            } : {
                code: "too_small",
                minimum: def.size
            },
            inclusive: true,
            exact: true,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckMaxLength = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckMaxLength", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"](val) && val.length !== undefined;
    };
    inst._zod.onattach.push((inst)=>{
        var _inst__zod_bag_maximum;
        const curr = (_inst__zod_bag_maximum = inst._zod.bag.maximum) !== null && _inst__zod_bag_maximum !== void 0 ? _inst__zod_bag_maximum : Number.POSITIVE_INFINITY;
        if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const length = input.length;
        if (length <= def.maximum) return;
        const origin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLengthableOrigin"](input);
        payload.issues.push({
            origin,
            code: "too_big",
            maximum: def.maximum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckMinLength = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckMinLength", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"](val) && val.length !== undefined;
    };
    inst._zod.onattach.push((inst)=>{
        var _inst__zod_bag_minimum;
        const curr = (_inst__zod_bag_minimum = inst._zod.bag.minimum) !== null && _inst__zod_bag_minimum !== void 0 ? _inst__zod_bag_minimum : Number.NEGATIVE_INFINITY;
        if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const length = input.length;
        if (length >= def.minimum) return;
        const origin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLengthableOrigin"](input);
        payload.issues.push({
            origin,
            code: "too_small",
            minimum: def.minimum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckLengthEquals = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckLengthEquals", (inst, def)=>{
    var _a;
    $ZodCheck.init(inst, def);
    var _when;
    (_when = (_a = inst._zod.def).when) !== null && _when !== void 0 ? _when : _a.when = (payload)=>{
        const val = payload.value;
        return !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nullish"](val) && val.length !== undefined;
    };
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.minimum = def.length;
        bag.maximum = def.length;
        bag.length = def.length;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const length = input.length;
        if (length === def.length) return;
        const origin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLengthableOrigin"](input);
        const tooBig = length > def.length;
        payload.issues.push({
            origin,
            ...tooBig ? {
                code: "too_big",
                maximum: def.length
            } : {
                code: "too_small",
                minimum: def.length
            },
            inclusive: true,
            exact: true,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckStringFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckStringFormat", (inst, def)=>{
    var _a, _b;
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.format = def.format;
        if (def.pattern) {
            var _bag_patterns;
            (_bag_patterns = bag.patterns) !== null && _bag_patterns !== void 0 ? _bag_patterns : bag.patterns = new Set();
            bag.patterns.add(def.pattern);
        }
    });
    var _check, _check1;
    if (def.pattern) (_check = (_a = inst._zod).check) !== null && _check !== void 0 ? _check : _a.check = (payload)=>{
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: def.format,
            input: payload.value,
            ...def.pattern ? {
                pattern: def.pattern.toString()
            } : {},
            inst,
            continue: !def.abort
        });
    };
    else (_check1 = (_b = inst._zod).check) !== null && _check1 !== void 0 ? _check1 : _b.check = ()=>{};
});
const $ZodCheckRegex = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckRegex", (inst, def)=>{
    $ZodCheckStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "regex",
            input: payload.value,
            pattern: def.pattern.toString(),
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckLowerCase = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckLowerCase", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lowercase"];
    $ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckUpperCase = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckUpperCase", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uppercase"];
    $ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckIncludes = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckIncludes", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const escapedRegex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegex"](def.includes);
    const pattern = new RegExp(typeof def.position === "number" ? "^.{".concat(def.position, "}").concat(escapedRegex) : escapedRegex);
    def.pattern = pattern;
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        var _bag_patterns;
        (_bag_patterns = bag.patterns) !== null && _bag_patterns !== void 0 ? _bag_patterns : bag.patterns = new Set();
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload)=>{
        if (payload.value.includes(def.includes, def.position)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: def.includes,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckStartsWith = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckStartsWith", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const pattern = new RegExp("^".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegex"](def.prefix), ".*"));
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = pattern;
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        var _bag_patterns;
        (_bag_patterns = bag.patterns) !== null && _bag_patterns !== void 0 ? _bag_patterns : bag.patterns = new Set();
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload)=>{
        if (payload.value.startsWith(def.prefix)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: def.prefix,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCheckEndsWith = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckEndsWith", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(".*".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegex"](def.suffix), "$"));
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = pattern;
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        var _bag_patterns;
        (_bag_patterns = bag.patterns) !== null && _bag_patterns !== void 0 ? _bag_patterns : bag.patterns = new Set();
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload)=>{
        if (payload.value.endsWith(def.suffix)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: def.suffix,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
///////////////////////////////////
/////    $ZodCheckProperty    /////
///////////////////////////////////
function handleCheckPropertyResult(result, payload, property) {
    if (result.issues.length) {
        payload.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](property, result.issues));
    }
}
const $ZodCheckProperty = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckProperty", (inst, def)=>{
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload)=>{
        const result = def.schema._zod.run({
            value: payload.value[def.property],
            issues: []
        }, {});
        if (result instanceof Promise) {
            return result.then((result)=>handleCheckPropertyResult(result, payload, def.property));
        }
        handleCheckPropertyResult(result, payload, def.property);
        return;
    };
});
const $ZodCheckMimeType = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckMimeType", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const mimeSet = new Set(def.mime);
    inst._zod.onattach.push((inst)=>{
        inst._zod.bag.mime = def.mime;
    });
    inst._zod.check = (payload)=>{
        if (mimeSet.has(payload.value.type)) return;
        payload.issues.push({
            code: "invalid_value",
            values: def.mime,
            input: payload.value.type,
            inst
        });
    };
});
const $ZodCheckOverwrite = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCheckOverwrite", (inst, def)=>{
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload)=>{
        payload.value = def.tx(payload.value);
    };
});
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/doc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Doc": ()=>Doc
});
class Doc {
    indented(fn) {
        this.indent += 1;
        fn(this);
        this.indent -= 1;
    }
    write(arg) {
        if (typeof arg === "function") {
            arg(this, {
                execution: "sync"
            });
            arg(this, {
                execution: "async"
            });
            return;
        }
        const content = arg;
        const lines = content.split("\n").filter((x)=>x);
        const minIndent = Math.min(...lines.map((x)=>x.length - x.trimStart().length));
        const dedented = lines.map((x)=>x.slice(minIndent)).map((x)=>" ".repeat(this.indent * 2) + x);
        for (const line of dedented){
            this.content.push(line);
        }
    }
    compile() {
        var _this, _this1;
        const F = Function;
        const args = (_this = this) === null || _this === void 0 ? void 0 : _this.args;
        var _this_content;
        const content = (_this_content = (_this1 = this) === null || _this1 === void 0 ? void 0 : _this1.content) !== null && _this_content !== void 0 ? _this_content : [
            ""
        ];
        const lines = [
            ...content.map((x)=>"  ".concat(x))
        ];
        // console.log(lines.join("\n"));
        return new F(...args, lines.join("\n"));
    }
    constructor(args = []){
        this.content = [];
        this.indent = 0;
        if (this) this.args = args;
    }
}
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/versions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "version": ()=>version
});
const version = {
    major: 4,
    minor: 0,
    patch: 5
};
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/schemas.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "$ZodAny": ()=>$ZodAny,
    "$ZodArray": ()=>$ZodArray,
    "$ZodBase64": ()=>$ZodBase64,
    "$ZodBase64URL": ()=>$ZodBase64URL,
    "$ZodBigInt": ()=>$ZodBigInt,
    "$ZodBigIntFormat": ()=>$ZodBigIntFormat,
    "$ZodBoolean": ()=>$ZodBoolean,
    "$ZodCIDRv4": ()=>$ZodCIDRv4,
    "$ZodCIDRv6": ()=>$ZodCIDRv6,
    "$ZodCUID": ()=>$ZodCUID,
    "$ZodCUID2": ()=>$ZodCUID2,
    "$ZodCatch": ()=>$ZodCatch,
    "$ZodCustom": ()=>$ZodCustom,
    "$ZodCustomStringFormat": ()=>$ZodCustomStringFormat,
    "$ZodDate": ()=>$ZodDate,
    "$ZodDefault": ()=>$ZodDefault,
    "$ZodDiscriminatedUnion": ()=>$ZodDiscriminatedUnion,
    "$ZodE164": ()=>$ZodE164,
    "$ZodEmail": ()=>$ZodEmail,
    "$ZodEmoji": ()=>$ZodEmoji,
    "$ZodEnum": ()=>$ZodEnum,
    "$ZodFile": ()=>$ZodFile,
    "$ZodGUID": ()=>$ZodGUID,
    "$ZodIPv4": ()=>$ZodIPv4,
    "$ZodIPv6": ()=>$ZodIPv6,
    "$ZodISODate": ()=>$ZodISODate,
    "$ZodISODateTime": ()=>$ZodISODateTime,
    "$ZodISODuration": ()=>$ZodISODuration,
    "$ZodISOTime": ()=>$ZodISOTime,
    "$ZodIntersection": ()=>$ZodIntersection,
    "$ZodJWT": ()=>$ZodJWT,
    "$ZodKSUID": ()=>$ZodKSUID,
    "$ZodLazy": ()=>$ZodLazy,
    "$ZodLiteral": ()=>$ZodLiteral,
    "$ZodMap": ()=>$ZodMap,
    "$ZodNaN": ()=>$ZodNaN,
    "$ZodNanoID": ()=>$ZodNanoID,
    "$ZodNever": ()=>$ZodNever,
    "$ZodNonOptional": ()=>$ZodNonOptional,
    "$ZodNull": ()=>$ZodNull,
    "$ZodNullable": ()=>$ZodNullable,
    "$ZodNumber": ()=>$ZodNumber,
    "$ZodNumberFormat": ()=>$ZodNumberFormat,
    "$ZodObject": ()=>$ZodObject,
    "$ZodOptional": ()=>$ZodOptional,
    "$ZodPipe": ()=>$ZodPipe,
    "$ZodPrefault": ()=>$ZodPrefault,
    "$ZodPromise": ()=>$ZodPromise,
    "$ZodReadonly": ()=>$ZodReadonly,
    "$ZodRecord": ()=>$ZodRecord,
    "$ZodSet": ()=>$ZodSet,
    "$ZodString": ()=>$ZodString,
    "$ZodStringFormat": ()=>$ZodStringFormat,
    "$ZodSuccess": ()=>$ZodSuccess,
    "$ZodSymbol": ()=>$ZodSymbol,
    "$ZodTemplateLiteral": ()=>$ZodTemplateLiteral,
    "$ZodTransform": ()=>$ZodTransform,
    "$ZodTuple": ()=>$ZodTuple,
    "$ZodType": ()=>$ZodType,
    "$ZodULID": ()=>$ZodULID,
    "$ZodURL": ()=>$ZodURL,
    "$ZodUUID": ()=>$ZodUUID,
    "$ZodUndefined": ()=>$ZodUndefined,
    "$ZodUnion": ()=>$ZodUnion,
    "$ZodUnknown": ()=>$ZodUnknown,
    "$ZodVoid": ()=>$ZodVoid,
    "$ZodXID": ()=>$ZodXID,
    "isValidBase64": ()=>isValidBase64,
    "isValidBase64URL": ()=>isValidBase64URL,
    "isValidJWT": ()=>isValidJWT
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$doc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/doc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/parse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/regexes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/versions.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const $ZodType = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodType", (inst, def)=>{
    var _a;
    inst !== null && inst !== void 0 ? inst : inst = {};
    inst._zod.def = def; // set _def property
    inst._zod.bag = inst._zod.bag || {}; // initialize _bag object
    inst._zod.version = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"];
    var _inst__zod_def_checks;
    const checks = [
        ...(_inst__zod_def_checks = inst._zod.def.checks) !== null && _inst__zod_def_checks !== void 0 ? _inst__zod_def_checks : []
    ];
    // if inst is itself a checks.$ZodCheck, run it as a check
    if (inst._zod.traits.has("$ZodCheck")) {
        checks.unshift(inst);
    }
    //
    for (const ch of checks){
        for (const fn of ch._zod.onattach){
            fn(inst);
        }
    }
    if (checks.length === 0) {
        var _inst__zod_deferred;
        var // deferred initializer
        // inst._zod.parse is not yet defined
        _deferred;
        (_deferred = (_a = inst._zod).deferred) !== null && _deferred !== void 0 ? _deferred : _a.deferred = [];
        (_inst__zod_deferred = inst._zod.deferred) === null || _inst__zod_deferred === void 0 ? void 0 : _inst__zod_deferred.push(()=>{
            inst._zod.run = inst._zod.parse;
        });
    } else {
        const runChecks = (payload, checks, ctx)=>{
            let isAborted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aborted"](payload);
            let asyncResult;
            for (const ch of checks){
                if (ch._zod.def.when) {
                    const shouldRun = ch._zod.def.when(payload);
                    if (!shouldRun) continue;
                } else if (isAborted) {
                    continue;
                }
                const currLen = payload.issues.length;
                const _ = ch._zod.check(payload);
                if (_ instanceof Promise && (ctx === null || ctx === void 0 ? void 0 : ctx.async) === false) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodAsyncError"]();
                }
                if (asyncResult || _ instanceof Promise) {
                    asyncResult = (asyncResult !== null && asyncResult !== void 0 ? asyncResult : Promise.resolve()).then(async ()=>{
                        await _;
                        const nextLen = payload.issues.length;
                        if (nextLen === currLen) return;
                        if (!isAborted) isAborted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aborted"](payload, currLen);
                    });
                } else {
                    const nextLen = payload.issues.length;
                    if (nextLen === currLen) continue;
                    if (!isAborted) isAborted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aborted"](payload, currLen);
                }
            }
            if (asyncResult) {
                return asyncResult.then(()=>{
                    return payload;
                });
            }
            return payload;
        };
        inst._zod.run = (payload, ctx)=>{
            const result = inst._zod.parse(payload, ctx);
            if (result instanceof Promise) {
                if (ctx.async === false) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodAsyncError"]();
                return result.then((result)=>runChecks(result, checks, ctx));
            }
            return runChecks(result, checks, ctx);
        };
    }
    inst["~standard"] = {
        validate: (value)=>{
            try {
                var _r_error;
                const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(inst, value);
                return r.success ? {
                    value: r.data
                } : {
                    issues: (_r_error = r.error) === null || _r_error === void 0 ? void 0 : _r_error.issues
                };
            } catch (_) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParseAsync"])(inst, value).then((r)=>{
                    var _r_error;
                    return r.success ? {
                        value: r.data
                    } : {
                        issues: (_r_error = r.error) === null || _r_error === void 0 ? void 0 : _r_error.issues
                    };
                });
            }
        },
        vendor: "zod",
        version: 1
    };
});
;
const $ZodString = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodString", (inst, def)=>{
    var _inst__zod_bag;
    $ZodType.init(inst, def);
    var _inst__zod_bag_patterns, _pop;
    inst._zod.pattern = (_pop = [
        ...(_inst__zod_bag_patterns = inst === null || inst === void 0 ? void 0 : (_inst__zod_bag = inst._zod.bag) === null || _inst__zod_bag === void 0 ? void 0 : _inst__zod_bag.patterns) !== null && _inst__zod_bag_patterns !== void 0 ? _inst__zod_bag_patterns : []
    ].pop()) !== null && _pop !== void 0 ? _pop : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"](inst._zod.bag);
    inst._zod.parse = (payload, _)=>{
        if (def.coerce) try {
            payload.value = String(payload.value);
        } catch (_) {}
        if (typeof payload.value === "string") return payload;
        payload.issues.push({
            expected: "string",
            code: "invalid_type",
            input: payload.value,
            inst
        });
        return payload;
    };
});
const $ZodStringFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodStringFormat", (inst, def)=>{
    // check initialization must come first
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckStringFormat"].init(inst, def);
    $ZodString.init(inst, def);
});
const $ZodGUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodGUID", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guid"];
    $ZodStringFormat.init(inst, def);
});
const $ZodUUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodUUID", (inst, def)=>{
    var _def_pattern;
    if (def.version) {
        const versionMap = {
            v1: 1,
            v2: 2,
            v3: 3,
            v4: 4,
            v5: 5,
            v6: 6,
            v7: 7,
            v8: 8
        };
        const v = versionMap[def.version];
        if (v === undefined) throw new Error('Invalid UUID version: "'.concat(def.version, '"'));
        var _def_pattern1;
        (_def_pattern1 = def.pattern) !== null && _def_pattern1 !== void 0 ? _def_pattern1 : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid"](v);
    } else (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid"]();
    $ZodStringFormat.init(inst, def);
});
const $ZodEmail = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodEmail", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["email"];
    $ZodStringFormat.init(inst, def);
});
const $ZodURL = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodURL", (inst, def)=>{
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        try {
            const orig = payload.value;
            const url = new URL(orig);
            const href = url.href;
            if (def.hostname) {
                def.hostname.lastIndex = 0;
                if (!def.hostname.test(url.hostname)) {
                    payload.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid hostname",
                        pattern: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hostname"].source,
                        input: payload.value,
                        inst,
                        continue: !def.abort
                    });
                }
            }
            if (def.protocol) {
                def.protocol.lastIndex = 0;
                if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) {
                    payload.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid protocol",
                        pattern: def.protocol.source,
                        input: payload.value,
                        inst,
                        continue: !def.abort
                    });
                }
            }
            // payload.value = url.href;
            if (!orig.endsWith("/") && href.endsWith("/")) {
                payload.value = href.slice(0, -1);
            } else {
                payload.value = href;
            }
            return;
        } catch (_) {
            payload.issues.push({
                code: "invalid_format",
                format: "url",
                input: payload.value,
                inst,
                continue: !def.abort
            });
        }
    };
});
const $ZodEmoji = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodEmoji", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emoji"]();
    $ZodStringFormat.init(inst, def);
});
const $ZodNanoID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNanoID", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nanoid"];
    $ZodStringFormat.init(inst, def);
});
const $ZodCUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCUID", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cuid"];
    $ZodStringFormat.init(inst, def);
});
const $ZodCUID2 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCUID2", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cuid2"];
    $ZodStringFormat.init(inst, def);
});
const $ZodULID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodULID", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ulid"];
    $ZodStringFormat.init(inst, def);
});
const $ZodXID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodXID", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xid"];
    $ZodStringFormat.init(inst, def);
});
const $ZodKSUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodKSUID", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ksuid"];
    $ZodStringFormat.init(inst, def);
});
const $ZodISODateTime = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodISODateTime", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["datetime"](def);
    $ZodStringFormat.init(inst, def);
});
const $ZodISODate = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodISODate", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"];
    $ZodStringFormat.init(inst, def);
});
const $ZodISOTime = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodISOTime", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"](def);
    $ZodStringFormat.init(inst, def);
});
const $ZodISODuration = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodISODuration", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["duration"];
    $ZodStringFormat.init(inst, def);
});
const $ZodIPv4 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodIPv4", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ipv4"];
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.format = "ipv4";
    });
});
const $ZodIPv6 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodIPv6", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ipv6"];
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst)=>{
        const bag = inst._zod.bag;
        bag.format = "ipv6";
    });
    inst._zod.check = (payload)=>{
        try {
            new URL("http://[".concat(payload.value, "]"));
        // return;
        } catch (e) {
            payload.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: payload.value,
                inst,
                continue: !def.abort
            });
        }
    };
});
const $ZodCIDRv4 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCIDRv4", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cidrv4"];
    $ZodStringFormat.init(inst, def);
});
const $ZodCIDRv6 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCIDRv6", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cidrv6"]; // not used for validation
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        const [address, prefix] = payload.value.split("/");
        try {
            if (!prefix) throw new Error();
            const prefixNum = Number(prefix);
            if ("".concat(prefixNum) !== prefix) throw new Error();
            if (prefixNum < 0 || prefixNum > 128) throw new Error();
            new URL("http://[".concat(address, "]"));
        } catch (e) {
            payload.issues.push({
                code: "invalid_format",
                format: "cidrv6",
                input: payload.value,
                inst,
                continue: !def.abort
            });
        }
    };
});
function isValidBase64(data) {
    if (data === "") return true;
    if (data.length % 4 !== 0) return false;
    try {
        atob(data);
        return true;
    } catch (e) {
        return false;
    }
}
const $ZodBase64 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodBase64", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64"];
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst)=>{
        inst._zod.bag.contentEncoding = "base64";
    });
    inst._zod.check = (payload)=>{
        if (isValidBase64(payload.value)) return;
        payload.issues.push({
            code: "invalid_format",
            format: "base64",
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
function isValidBase64URL(data) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64url"].test(data)) return false;
    const base64 = data.replace(/[-_]/g, (c)=>c === "-" ? "+" : "/");
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
    return isValidBase64(padded);
}
const $ZodBase64URL = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodBase64URL", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64url"];
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst)=>{
        inst._zod.bag.contentEncoding = "base64url";
    });
    inst._zod.check = (payload)=>{
        if (isValidBase64URL(payload.value)) return;
        payload.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodE164 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodE164", (inst, def)=>{
    var _def_pattern;
    (_def_pattern = def.pattern) !== null && _def_pattern !== void 0 ? _def_pattern : def.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e164"];
    $ZodStringFormat.init(inst, def);
});
function isValidJWT(token) {
    let algorithm = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    try {
        const tokensParts = token.split(".");
        if (tokensParts.length !== 3) return false;
        const [header] = tokensParts;
        if (!header) return false;
        const parsedHeader = JSON.parse(atob(header));
        if ("typ" in parsedHeader && (parsedHeader === null || parsedHeader === void 0 ? void 0 : parsedHeader.typ) !== "JWT") return false;
        if (!parsedHeader.alg) return false;
        if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
        return true;
    } catch (e) {
        return false;
    }
}
const $ZodJWT = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodJWT", (inst, def)=>{
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        if (isValidJWT(payload.value, def.alg)) return;
        payload.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodCustomStringFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCustomStringFormat", (inst, def)=>{
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        if (def.fn(payload.value)) return;
        payload.issues.push({
            code: "invalid_format",
            format: def.format,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
const $ZodNumber = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNumber", (inst, def)=>{
    $ZodType.init(inst, def);
    var _inst__zod_bag_pattern;
    inst._zod.pattern = (_inst__zod_bag_pattern = inst._zod.bag.pattern) !== null && _inst__zod_bag_pattern !== void 0 ? _inst__zod_bag_pattern : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"];
    inst._zod.parse = (payload, _ctx)=>{
        if (def.coerce) try {
            payload.value = Number(payload.value);
        } catch (_) {}
        const input = payload.value;
        if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
            return payload;
        }
        const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : undefined : undefined;
        payload.issues.push({
            expected: "number",
            code: "invalid_type",
            input,
            inst,
            ...received ? {
                received
            } : {}
        });
        return payload;
    };
});
const $ZodNumberFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNumber", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckNumberFormat"].init(inst, def);
    $ZodNumber.init(inst, def); // no format checksp
});
const $ZodBoolean = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodBoolean", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"];
    inst._zod.parse = (payload, _ctx)=>{
        if (def.coerce) try {
            payload.value = Boolean(payload.value);
        } catch (_) {}
        const input = payload.value;
        if (typeof input === "boolean") return payload;
        payload.issues.push({
            expected: "boolean",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
const $ZodBigInt = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodBigInt", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bigint"];
    inst._zod.parse = (payload, _ctx)=>{
        if (def.coerce) try {
            payload.value = BigInt(payload.value);
        } catch (_) {}
        if (typeof payload.value === "bigint") return payload;
        payload.issues.push({
            expected: "bigint",
            code: "invalid_type",
            input: payload.value,
            inst
        });
        return payload;
    };
});
const $ZodBigIntFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodBigInt", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckBigIntFormat"].init(inst, def);
    $ZodBigInt.init(inst, def); // no format checks
});
const $ZodSymbol = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodSymbol", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (typeof input === "symbol") return payload;
        payload.issues.push({
            expected: "symbol",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
const $ZodUndefined = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodUndefined", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["undefined"];
    inst._zod.values = new Set([
        undefined
    ]);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (typeof input === "undefined") return payload;
        payload.issues.push({
            expected: "undefined",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
const $ZodNull = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNull", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.pattern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["null"];
    inst._zod.values = new Set([
        null
    ]);
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (input === null) return payload;
        payload.issues.push({
            expected: "null",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
const $ZodAny = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodAny", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload)=>payload;
});
const $ZodUnknown = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodUnknown", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload)=>payload;
});
const $ZodNever = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNever", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        payload.issues.push({
            expected: "never",
            code: "invalid_type",
            input: payload.value,
            inst
        });
        return payload;
    };
});
const $ZodVoid = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodVoid", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (typeof input === "undefined") return payload;
        payload.issues.push({
            expected: "void",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
const $ZodDate = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodDate", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        if (def.coerce) {
            try {
                payload.value = new Date(payload.value);
            } catch (_err) {}
        }
        const input = payload.value;
        const isDate = input instanceof Date;
        const isValidDate = isDate && !Number.isNaN(input.getTime());
        if (isValidDate) return payload;
        payload.issues.push({
            expected: "date",
            code: "invalid_type",
            input,
            ...isDate ? {
                received: "Invalid Date"
            } : {},
            inst
        });
        return payload;
    };
});
function handleArrayResult(result, final, index) {
    if (result.issues.length) {
        final.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](index, result.issues));
    }
    final.value[index] = result.value;
}
const $ZodArray = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodArray", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!Array.isArray(input)) {
            payload.issues.push({
                expected: "array",
                code: "invalid_type",
                input,
                inst
            });
            return payload;
        }
        payload.value = Array(input.length);
        const proms = [];
        for(let i = 0; i < input.length; i++){
            const item = input[i];
            const result = def.element._zod.run({
                value: item,
                issues: []
            }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result)=>handleArrayResult(result, payload, i)));
            } else {
                handleArrayResult(result, payload, i);
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(()=>payload);
        }
        return payload; //handleArrayResultsAsync(parseResults, final);
    };
});
function handleObjectResult(result, final, key) {
    // if(isOptional)
    if (result.issues.length) {
        final.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, result.issues));
    }
    final.value[key] = result.value;
}
function handleOptionalObjectResult(result, final, key, input) {
    if (result.issues.length) {
        // validation failed against value schema
        if (input[key] === undefined) {
            // if input was undefined, ignore the error
            if (key in input) {
                final.value[key] = undefined;
            } else {
                final.value[key] = result.value;
            }
        } else {
            final.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, result.issues));
        }
    } else if (result.value === undefined) {
        // validation returned `undefined`
        if (key in input) final.value[key] = undefined;
    } else {
        // non-undefined value
        final.value[key] = result.value;
    }
}
const $ZodObject = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodObject", (inst, def)=>{
    // requires cast because technically $ZodObject doesn't extend
    $ZodType.init(inst, def);
    const _normalized = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cached"](()=>{
        const keys = Object.keys(def.shape);
        for (const k of keys){
            if (!(def.shape[k] instanceof $ZodType)) {
                throw new Error('Invalid element at key "'.concat(k, '": expected a Zod schema'));
            }
        }
        const okeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalKeys"](def.shape);
        return {
            shape: def.shape,
            keys,
            keySet: new Set(keys),
            numKeys: keys.length,
            optionalKeys: new Set(okeys)
        };
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "propValues", ()=>{
        const shape = def.shape;
        const propValues = {};
        for(const key in shape){
            const field = shape[key]._zod;
            if (field.values) {
                var _propValues_key;
                (_propValues_key = propValues[key]) !== null && _propValues_key !== void 0 ? _propValues_key : propValues[key] = new Set();
                for (const v of field.values)propValues[key].add(v);
            }
        }
        return propValues;
    });
    const generateFastpass = (shape)=>{
        const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$doc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doc"]([
            "shape",
            "payload",
            "ctx"
        ]);
        const normalized = _normalized.value;
        const parseStr = (key)=>{
            const k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["esc"](key);
            return "shape[".concat(k, "]._zod.run({ value: input[").concat(k, "], issues: [] }, ctx)");
        };
        doc.write("const input = payload.value;");
        const ids = Object.create(null);
        let counter = 0;
        for (const key of normalized.keys){
            ids[key] = "key_".concat(counter++);
        }
        // A: preserve key order {
        doc.write("const newResult = {}");
        for (const key of normalized.keys){
            if (normalized.optionalKeys.has(key)) {
                const id = ids[key];
                doc.write("const ".concat(id, " = ").concat(parseStr(key), ";"));
                const k = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["esc"](key);
                doc.write("\n        if (".concat(id, ".issues.length) {\n          if (input[").concat(k, "] === undefined) {\n            if (").concat(k, " in input) {\n              newResult[").concat(k, "] = undefined;\n            }\n          } else {\n            payload.issues = payload.issues.concat(\n              ").concat(id, ".issues.map((iss) => ({\n                ...iss,\n                path: iss.path ? [").concat(k, ", ...iss.path] : [").concat(k, "],\n              }))\n            );\n          }\n        } else if (").concat(id, ".value === undefined) {\n          if (").concat(k, " in input) newResult[").concat(k, "] = undefined;\n        } else {\n          newResult[").concat(k, "] = ").concat(id, ".value;\n        }\n        "));
            } else {
                const id = ids[key];
                //  const id = ids[key];
                doc.write("const ".concat(id, " = ").concat(parseStr(key), ";"));
                doc.write("\n          if (".concat(id, ".issues.length) payload.issues = payload.issues.concat(").concat(id, ".issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["esc"](key), ", ...iss.path] : [").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["esc"](key), "]\n          })));"));
                doc.write("newResult[".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["esc"](key), "] = ").concat(id, ".value"));
            }
        }
        doc.write("payload.value = newResult;");
        doc.write("return payload;");
        const fn = doc.compile();
        return (payload, ctx)=>fn(shape, payload, ctx);
    };
    let fastpass;
    const isObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"];
    const jit = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalConfig"].jitless;
    const allowsEval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowsEval"];
    const fastEnabled = jit && allowsEval.value; // && !def.catchall;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx)=>{
        value !== null && value !== void 0 ? value : value = _normalized.value;
        const input = payload.value;
        if (!isObject(input)) {
            payload.issues.push({
                expected: "object",
                code: "invalid_type",
                input,
                inst
            });
            return payload;
        }
        const proms = [];
        if (jit && fastEnabled && (ctx === null || ctx === void 0 ? void 0 : ctx.async) === false && ctx.jitless !== true) {
            // always synchronous
            if (!fastpass) fastpass = generateFastpass(def.shape);
            payload = fastpass(payload, ctx);
        } else {
            payload.value = {};
            const shape = value.shape;
            for (const key of value.keys){
                const el = shape[key];
                // do not add omitted optional keys
                // if (!(key in input)) {
                //   if (optionalKeys.has(key)) continue;
                //   payload.issues.push({
                //     code: "invalid_type",
                //     path: [key],
                //     expected: "nonoptional",
                //     note: `Missing required key: "${key}"`,
                //     input,
                //     inst,
                //   });
                // }
                const r = el._zod.run({
                    value: input[key],
                    issues: []
                }, ctx);
                const isOptional = el._zod.optin === "optional" && el._zod.optout === "optional";
                if (r instanceof Promise) {
                    proms.push(r.then((r)=>isOptional ? handleOptionalObjectResult(r, payload, key, input) : handleObjectResult(r, payload, key)));
                } else if (isOptional) {
                    handleOptionalObjectResult(r, payload, key, input);
                } else {
                    handleObjectResult(r, payload, key);
                }
            }
        }
        if (!catchall) {
            // return payload;
            return proms.length ? Promise.all(proms).then(()=>payload) : payload;
        }
        const unrecognized = [];
        // iterate over input keys
        const keySet = value.keySet;
        const _catchall = catchall._zod;
        const t = _catchall.def.type;
        for (const key of Object.keys(input)){
            if (keySet.has(key)) continue;
            if (t === "never") {
                unrecognized.push(key);
                continue;
            }
            const r = _catchall.run({
                value: input[key],
                issues: []
            }, ctx);
            if (r instanceof Promise) {
                proms.push(r.then((r)=>handleObjectResult(r, payload, key)));
            } else {
                handleObjectResult(r, payload, key);
            }
        }
        if (unrecognized.length) {
            payload.issues.push({
                code: "unrecognized_keys",
                keys: unrecognized,
                input,
                inst
            });
        }
        if (!proms.length) return payload;
        return Promise.all(proms).then(()=>{
            return payload;
        });
    };
});
function handleUnionResults(results, final, inst, ctx) {
    for (const result of results){
        if (result.issues.length === 0) {
            final.value = result.value;
            return final;
        }
    }
    final.issues.push({
        code: "invalid_union",
        input: final.value,
        inst,
        errors: results.map((result)=>result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]())))
    });
    return final;
}
const $ZodUnion = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodUnion", (inst, def)=>{
    $ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optin", ()=>def.options.some((o)=>o._zod.optin === "optional") ? "optional" : undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optout", ()=>def.options.some((o)=>o._zod.optout === "optional") ? "optional" : undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>{
        if (def.options.every((o)=>o._zod.values)) {
            return new Set(def.options.flatMap((option)=>Array.from(option._zod.values)));
        }
        return undefined;
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "pattern", ()=>{
        if (def.options.every((o)=>o._zod.pattern)) {
            const patterns = def.options.map((o)=>o._zod.pattern);
            return new RegExp("^(".concat(patterns.map((p)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanRegex"](p.source)).join("|"), ")$"));
        }
        return undefined;
    });
    inst._zod.parse = (payload, ctx)=>{
        let async = false;
        const results = [];
        for (const option of def.options){
            const result = option._zod.run({
                value: payload.value,
                issues: []
            }, ctx);
            if (result instanceof Promise) {
                results.push(result);
                async = true;
            } else {
                if (result.issues.length === 0) return result;
                results.push(result);
            }
        }
        if (!async) return handleUnionResults(results, payload, inst, ctx);
        return Promise.all(results).then((results)=>{
            return handleUnionResults(results, payload, inst, ctx);
        });
    };
});
const $ZodDiscriminatedUnion = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodDiscriminatedUnion", (inst, def)=>{
    $ZodUnion.init(inst, def);
    const _super = inst._zod.parse;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "propValues", ()=>{
        const propValues = {};
        for (const option of def.options){
            const pv = option._zod.propValues;
            if (!pv || Object.keys(pv).length === 0) throw new Error('Invalid discriminated union option at index "'.concat(def.options.indexOf(option), '"'));
            for (const [k, v] of Object.entries(pv)){
                if (!propValues[k]) propValues[k] = new Set();
                for (const val of v){
                    propValues[k].add(val);
                }
            }
        }
        return propValues;
    });
    const disc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cached"](()=>{
        const opts = def.options;
        const map = new Map();
        for (const o of opts){
            var _o__zod_propValues;
            const values = (_o__zod_propValues = o._zod.propValues) === null || _o__zod_propValues === void 0 ? void 0 : _o__zod_propValues[def.discriminator];
            if (!values || values.size === 0) throw new Error('Invalid discriminated union option at index "'.concat(def.options.indexOf(o), '"'));
            for (const v of values){
                if (map.has(v)) {
                    throw new Error('Duplicate discriminator value "'.concat(String(v), '"'));
                }
                map.set(v, o);
            }
        }
        return map;
    });
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](input)) {
            payload.issues.push({
                code: "invalid_type",
                expected: "object",
                input,
                inst
            });
            return payload;
        }
        const opt = disc.value.get(input === null || input === void 0 ? void 0 : input[def.discriminator]);
        if (opt) {
            return opt._zod.run(payload, ctx);
        }
        if (def.unionFallback) {
            return _super(payload, ctx);
        }
        // no matching discriminator
        payload.issues.push({
            code: "invalid_union",
            errors: [],
            note: "No matching discriminator",
            input,
            path: [
                def.discriminator
            ],
            inst
        });
        return payload;
    };
});
const $ZodIntersection = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodIntersection", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        const left = def.left._zod.run({
            value: input,
            issues: []
        }, ctx);
        const right = def.right._zod.run({
            value: input,
            issues: []
        }, ctx);
        const async = left instanceof Promise || right instanceof Promise;
        if (async) {
            return Promise.all([
                left,
                right
            ]).then((param)=>{
                let [left, right] = param;
                return handleIntersectionResults(payload, left, right);
            });
        }
        return handleIntersectionResults(payload, left, right);
    };
});
function mergeValues(a, b) {
    // const aType = parse.t(a);
    // const bType = parse.t(b);
    if (a === b) {
        return {
            valid: true,
            data: a
        };
    }
    if (a instanceof Date && b instanceof Date && +a === +b) {
        return {
            valid: true,
            data: a
        };
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"](a) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"](b)) {
        const bKeys = Object.keys(b);
        const sharedKeys = Object.keys(a).filter((key)=>bKeys.indexOf(key) !== -1);
        const newObj = {
            ...a,
            ...b
        };
        for (const key of sharedKeys){
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [
                        key,
                        ...sharedValue.mergeErrorPath
                    ]
                };
            }
            newObj[key] = sharedValue.data;
        }
        return {
            valid: true,
            data: newObj
        };
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return {
                valid: false,
                mergeErrorPath: []
            };
        }
        const newArray = [];
        for(let index = 0; index < a.length; index++){
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [
                        index,
                        ...sharedValue.mergeErrorPath
                    ]
                };
            }
            newArray.push(sharedValue.data);
        }
        return {
            valid: true,
            data: newArray
        };
    }
    return {
        valid: false,
        mergeErrorPath: []
    };
}
function handleIntersectionResults(result, left, right) {
    if (left.issues.length) {
        result.issues.push(...left.issues);
    }
    if (right.issues.length) {
        result.issues.push(...right.issues);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aborted"](result)) return result;
    const merged = mergeValues(left.value, right.value);
    if (!merged.valid) {
        throw new Error("Unmergable intersection. Error path: " + "".concat(JSON.stringify(merged.mergeErrorPath)));
    }
    result.value = merged.data;
    return result;
}
const $ZodTuple = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodTuple", (inst, def)=>{
    $ZodType.init(inst, def);
    const items = def.items;
    const optStart = items.length - [
        ...items
    ].reverse().findIndex((item)=>item._zod.optin !== "optional");
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!Array.isArray(input)) {
            payload.issues.push({
                input,
                inst,
                expected: "tuple",
                code: "invalid_type"
            });
            return payload;
        }
        payload.value = [];
        const proms = [];
        if (!def.rest) {
            const tooBig = input.length > items.length;
            const tooSmall = input.length < optStart - 1;
            if (tooBig || tooSmall) {
                payload.issues.push({
                    input,
                    inst,
                    origin: "array",
                    ...tooBig ? {
                        code: "too_big",
                        maximum: items.length
                    } : {
                        code: "too_small",
                        minimum: items.length
                    }
                });
                return payload;
            }
        }
        let i = -1;
        for (const item of items){
            i++;
            if (i >= input.length) {
                if (i >= optStart) continue;
            }
            const result = item._zod.run({
                value: input[i],
                issues: []
            }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result)=>handleTupleResult(result, payload, i)));
            } else {
                handleTupleResult(result, payload, i);
            }
        }
        if (def.rest) {
            const rest = input.slice(items.length);
            for (const el of rest){
                i++;
                const result = def.rest._zod.run({
                    value: el,
                    issues: []
                }, ctx);
                if (result instanceof Promise) {
                    proms.push(result.then((result)=>handleTupleResult(result, payload, i)));
                } else {
                    handleTupleResult(result, payload, i);
                }
            }
        }
        if (proms.length) return Promise.all(proms).then(()=>payload);
        return payload;
    };
});
function handleTupleResult(result, final, index) {
    if (result.issues.length) {
        final.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](index, result.issues));
    }
    final.value[index] = result.value;
}
const $ZodRecord = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodRecord", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"](input)) {
            payload.issues.push({
                expected: "record",
                code: "invalid_type",
                input,
                inst
            });
            return payload;
        }
        const proms = [];
        if (def.keyType._zod.values) {
            const values = def.keyType._zod.values;
            payload.value = {};
            for (const key of values){
                if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
                    const result = def.valueType._zod.run({
                        value: input[key],
                        issues: []
                    }, ctx);
                    if (result instanceof Promise) {
                        proms.push(result.then((result)=>{
                            if (result.issues.length) {
                                payload.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, result.issues));
                            }
                            payload.value[key] = result.value;
                        }));
                    } else {
                        if (result.issues.length) {
                            payload.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, result.issues));
                        }
                        payload.value[key] = result.value;
                    }
                }
            }
            let unrecognized;
            for(const key in input){
                if (!values.has(key)) {
                    unrecognized = unrecognized !== null && unrecognized !== void 0 ? unrecognized : [];
                    unrecognized.push(key);
                }
            }
            if (unrecognized && unrecognized.length > 0) {
                payload.issues.push({
                    code: "unrecognized_keys",
                    input,
                    inst,
                    keys: unrecognized
                });
            }
        } else {
            payload.value = {};
            for (const key of Reflect.ownKeys(input)){
                if (key === "__proto__") continue;
                const keyResult = def.keyType._zod.run({
                    value: key,
                    issues: []
                }, ctx);
                if (keyResult instanceof Promise) {
                    throw new Error("Async schemas not supported in object keys currently");
                }
                if (keyResult.issues.length) {
                    payload.issues.push({
                        origin: "record",
                        code: "invalid_key",
                        issues: keyResult.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]())),
                        input: key,
                        path: [
                            key
                        ],
                        inst
                    });
                    payload.value[keyResult.value] = keyResult.value;
                    continue;
                }
                const result = def.valueType._zod.run({
                    value: input[key],
                    issues: []
                }, ctx);
                if (result instanceof Promise) {
                    proms.push(result.then((result)=>{
                        if (result.issues.length) {
                            payload.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, result.issues));
                        }
                        payload.value[keyResult.value] = result.value;
                    }));
                } else {
                    if (result.issues.length) {
                        payload.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, result.issues));
                    }
                    payload.value[keyResult.value] = result.value;
                }
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(()=>payload);
        }
        return payload;
    };
});
const $ZodMap = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodMap", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!(input instanceof Map)) {
            payload.issues.push({
                expected: "map",
                code: "invalid_type",
                input,
                inst
            });
            return payload;
        }
        const proms = [];
        payload.value = new Map();
        for (const [key, value] of input){
            const keyResult = def.keyType._zod.run({
                value: key,
                issues: []
            }, ctx);
            const valueResult = def.valueType._zod.run({
                value: value,
                issues: []
            }, ctx);
            if (keyResult instanceof Promise || valueResult instanceof Promise) {
                proms.push(Promise.all([
                    keyResult,
                    valueResult
                ]).then((param)=>{
                    let [keyResult, valueResult] = param;
                    handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
                }));
            } else {
                handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
            }
        }
        if (proms.length) return Promise.all(proms).then(()=>payload);
        return payload;
    };
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
    if (keyResult.issues.length) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyKeyTypes"].has(typeof key)) {
            final.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, keyResult.issues));
        } else {
            final.issues.push({
                origin: "map",
                code: "invalid_key",
                input,
                inst,
                issues: keyResult.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]()))
            });
        }
    }
    if (valueResult.issues.length) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyKeyTypes"].has(typeof key)) {
            final.issues.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixIssues"](key, valueResult.issues));
        } else {
            final.issues.push({
                origin: "map",
                code: "invalid_element",
                input,
                inst,
                key: key,
                issues: valueResult.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]()))
            });
        }
    }
    final.value.set(keyResult.value, valueResult.value);
}
const $ZodSet = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodSet", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!(input instanceof Set)) {
            payload.issues.push({
                input,
                inst,
                expected: "set",
                code: "invalid_type"
            });
            return payload;
        }
        const proms = [];
        payload.value = new Set();
        for (const item of input){
            const result = def.valueType._zod.run({
                value: item,
                issues: []
            }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result)=>handleSetResult(result, payload)));
            } else handleSetResult(result, payload);
        }
        if (proms.length) return Promise.all(proms).then(()=>payload);
        return payload;
    };
});
function handleSetResult(result, final) {
    if (result.issues.length) {
        final.issues.push(...result.issues);
    }
    final.value.add(result.value);
}
const $ZodEnum = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodEnum", (inst, def)=>{
    $ZodType.init(inst, def);
    const values = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnumValues"](def.entries);
    inst._zod.values = new Set(values);
    inst._zod.pattern = new RegExp("^(".concat(values.filter((k)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyKeyTypes"].has(typeof k)).map((o)=>typeof o === "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegex"](o) : o.toString()).join("|"), ")$"));
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (inst._zod.values.has(input)) {
            return payload;
        }
        payload.issues.push({
            code: "invalid_value",
            values,
            input,
            inst
        });
        return payload;
    };
});
const $ZodLiteral = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodLiteral", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.values = new Set(def.values);
    inst._zod.pattern = new RegExp("^(".concat(def.values.map((o)=>typeof o === "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegex"](o) : o ? o.toString() : String(o)).join("|"), ")$"));
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (inst._zod.values.has(input)) {
            return payload;
        }
        payload.issues.push({
            code: "invalid_value",
            values: def.values,
            input,
            inst
        });
        return payload;
    };
});
const $ZodFile = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodFile", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (input instanceof File) return payload;
        payload.issues.push({
            expected: "file",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
const $ZodTransform = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodTransform", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        const _out = def.transform(payload.value, payload);
        if (_ctx.async) {
            const output = _out instanceof Promise ? _out : Promise.resolve(_out);
            return output.then((output)=>{
                payload.value = output;
                return payload;
            });
        }
        if (_out instanceof Promise) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodAsyncError"]();
        }
        payload.value = _out;
        return payload;
    };
});
const $ZodOptional = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodOptional", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>{
        return def.innerType._zod.values ? new Set([
            ...def.innerType._zod.values,
            undefined
        ]) : undefined;
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "pattern", ()=>{
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp("^(".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanRegex"](pattern.source), ")?$")) : undefined;
    });
    inst._zod.parse = (payload, ctx)=>{
        if (def.innerType._zod.optin === "optional") {
            return def.innerType._zod.run(payload, ctx);
        }
        if (payload.value === undefined) {
            return payload;
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodNullable = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNullable", (inst, def)=>{
    $ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optin", ()=>def.innerType._zod.optin);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optout", ()=>def.innerType._zod.optout);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "pattern", ()=>{
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp("^(".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanRegex"](pattern.source), "|null)$")) : undefined;
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>{
        return def.innerType._zod.values ? new Set([
            ...def.innerType._zod.values,
            null
        ]) : undefined;
    });
    inst._zod.parse = (payload, ctx)=>{
        if (payload.value === null) return payload;
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodDefault = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodDefault", (inst, def)=>{
    $ZodType.init(inst, def);
    // inst._zod.qin = "true";
    inst._zod.optin = "optional";
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>def.innerType._zod.values);
    inst._zod.parse = (payload, ctx)=>{
        if (payload.value === undefined) {
            payload.value = def.defaultValue;
            /**
             * $ZodDefault always returns the default value immediately.
             * It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */ return payload;
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result)=>handleDefaultResult(result, def));
        }
        return handleDefaultResult(result, def);
    };
});
function handleDefaultResult(payload, def) {
    if (payload.value === undefined) {
        payload.value = def.defaultValue;
    }
    return payload;
}
const $ZodPrefault = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodPrefault", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>def.innerType._zod.values);
    inst._zod.parse = (payload, ctx)=>{
        if (payload.value === undefined) {
            payload.value = def.defaultValue;
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
const $ZodNonOptional = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNonOptional", (inst, def)=>{
    $ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>{
        const v = def.innerType._zod.values;
        return v ? new Set([
            ...v
        ].filter((x)=>x !== undefined)) : undefined;
    });
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result)=>handleNonOptionalResult(result, inst));
        }
        return handleNonOptionalResult(result, inst);
    };
});
function handleNonOptionalResult(payload, inst) {
    if (!payload.issues.length && payload.value === undefined) {
        payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: payload.value,
            inst
        });
    }
    return payload;
}
const $ZodSuccess = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodSuccess", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result)=>{
                payload.value = result.issues.length === 0;
                return payload;
            });
        }
        payload.value = result.issues.length === 0;
        return payload;
    };
});
const $ZodCatch = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCatch", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optout", ()=>def.innerType._zod.optout);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>def.innerType._zod.values);
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result)=>{
                payload.value = result.value;
                if (result.issues.length) {
                    payload.value = def.catchValue({
                        ...payload,
                        error: {
                            issues: result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]()))
                        },
                        input: payload.value
                    });
                    payload.issues = [];
                }
                return payload;
            });
        }
        payload.value = result.value;
        if (result.issues.length) {
            payload.value = def.catchValue({
                ...payload,
                error: {
                    issues: result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]()))
                },
                input: payload.value
            });
            payload.issues = [];
        }
        return payload;
    };
});
const $ZodNaN = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodNaN", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
            payload.issues.push({
                input: payload.value,
                inst,
                expected: "nan",
                code: "invalid_type"
            });
            return payload;
        }
        return payload;
    };
});
const $ZodPipe = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodPipe", (inst, def)=>{
    $ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>def.in._zod.values);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optin", ()=>def.in._zod.optin);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optout", ()=>def.out._zod.optout);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "propValues", ()=>def.in._zod.propValues);
    inst._zod.parse = (payload, ctx)=>{
        const left = def.in._zod.run(payload, ctx);
        if (left instanceof Promise) {
            return left.then((left)=>handlePipeResult(left, def, ctx));
        }
        return handlePipeResult(left, def, ctx);
    };
});
function handlePipeResult(left, def, ctx) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aborted"](left)) {
        return left;
    }
    return def.out._zod.run({
        value: left.value,
        issues: left.issues
    }, ctx);
}
const $ZodReadonly = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodReadonly", (inst, def)=>{
    $ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "propValues", ()=>def.innerType._zod.propValues);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "values", ()=>def.innerType._zod.values);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optin", ()=>def.innerType._zod.optin);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optout", ()=>def.innerType._zod.optout);
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then(handleReadonlyResult);
        }
        return handleReadonlyResult(result);
    };
});
function handleReadonlyResult(payload) {
    payload.value = Object.freeze(payload.value);
    return payload;
}
const $ZodTemplateLiteral = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodTemplateLiteral", (inst, def)=>{
    $ZodType.init(inst, def);
    const regexParts = [];
    for (const part of def.parts){
        if (part instanceof $ZodType) {
            if (!part._zod.pattern) {
                // if (!source)
                throw new Error("Invalid template literal part, no pattern found: ".concat([
                    ...part._zod.traits
                ].shift()));
            }
            const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
            if (!source) throw new Error("Invalid template literal part: ".concat(part._zod.traits));
            const start = source.startsWith("^") ? 1 : 0;
            const end = source.endsWith("$") ? source.length - 1 : source.length;
            regexParts.push(source.slice(start, end));
        } else if (part === null || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primitiveTypes"].has(typeof part)) {
            regexParts.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeRegex"]("".concat(part)));
        } else {
            throw new Error("Invalid template literal part: ".concat(part));
        }
    }
    inst._zod.pattern = new RegExp("^".concat(regexParts.join(""), "$"));
    inst._zod.parse = (payload, _ctx)=>{
        if (typeof payload.value !== "string") {
            payload.issues.push({
                input: payload.value,
                inst,
                expected: "template_literal",
                code: "invalid_type"
            });
            return payload;
        }
        inst._zod.pattern.lastIndex = 0;
        if (!inst._zod.pattern.test(payload.value)) {
            var _def_format;
            payload.issues.push({
                input: payload.value,
                inst,
                code: "invalid_format",
                format: (_def_format = def.format) !== null && _def_format !== void 0 ? _def_format : "template_literal",
                pattern: inst._zod.pattern.source
            });
            return payload;
        }
        return payload;
    };
});
const $ZodPromise = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodPromise", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        return Promise.resolve(payload.value).then((inner)=>def.innerType._zod.run({
                value: inner,
                issues: []
            }, ctx));
    };
});
const $ZodLazy = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodLazy", (inst, def)=>{
    $ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "innerType", ()=>def.getter());
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "pattern", ()=>inst._zod.innerType._zod.pattern);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "propValues", ()=>inst._zod.innerType._zod.propValues);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optin", ()=>inst._zod.innerType._zod.optin);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineLazy"](inst._zod, "optout", ()=>inst._zod.innerType._zod.optout);
    inst._zod.parse = (payload, ctx)=>{
        const inner = inst._zod.innerType;
        return inner._zod.run(payload, ctx);
    };
});
const $ZodCustom = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("$ZodCustom", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheck"].init(inst, def);
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _)=>{
        return payload;
    };
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const r = def.fn(input);
        if (r instanceof Promise) {
            return r.then((r)=>handleRefineResult(r, payload, input, inst));
        }
        handleRefineResult(r, payload, input, inst);
        return;
    };
});
function handleRefineResult(result, payload, input, inst) {
    if (!result) {
        var _inst__zod_def_path;
        const _iss = {
            code: "custom",
            input,
            inst,
            path: [
                ...(_inst__zod_def_path = inst._zod.def.path) !== null && _inst__zod_def_path !== void 0 ? _inst__zod_def_path : []
            ],
            continue: !inst._zod.def.abort
        };
        if (inst._zod.def.params) _iss.params = inst._zod.def.params;
        payload.issues.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["issue"](_iss));
    }
}
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/registries.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "$ZodRegistry": ()=>$ZodRegistry,
    "$input": ()=>$input,
    "$output": ()=>$output,
    "globalRegistry": ()=>globalRegistry,
    "registry": ()=>registry
});
const $output = Symbol("ZodOutput");
const $input = Symbol("ZodInput");
class $ZodRegistry {
    add(schema) {
        for(var _len = arguments.length, _meta = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            _meta[_key - 1] = arguments[_key];
        }
        const meta = _meta[0];
        this._map.set(schema, meta);
        if (meta && typeof meta === "object" && "id" in meta) {
            if (this._idmap.has(meta.id)) {
                throw new Error("ID ".concat(meta.id, " already exists in the registry"));
            }
            this._idmap.set(meta.id, schema);
        }
        return this;
    }
    clear() {
        this._map = new Map();
        this._idmap = new Map();
        return this;
    }
    remove(schema) {
        const meta = this._map.get(schema);
        if (meta && typeof meta === "object" && "id" in meta) {
            this._idmap.delete(meta.id);
        }
        this._map.delete(schema);
        return this;
    }
    get(schema) {
        // return this._map.get(schema) as any;
        // inherit metadata
        const p = schema._zod.parent;
        if (p) {
            var _this_get;
            const pm = {
                ...(_this_get = this.get(p)) !== null && _this_get !== void 0 ? _this_get : {}
            };
            delete pm.id; // do not inherit id
            return {
                ...pm,
                ...this._map.get(schema)
            };
        }
        return this._map.get(schema);
    }
    has(schema) {
        return this._map.has(schema);
    }
    constructor(){
        this._map = new Map();
        this._idmap = new Map();
    }
}
function registry() {
    return new $ZodRegistry();
}
const globalRegistry = /*@__PURE__*/ registry();
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "TimePrecision": ()=>TimePrecision,
    "_any": ()=>_any,
    "_array": ()=>_array,
    "_base64": ()=>_base64,
    "_base64url": ()=>_base64url,
    "_bigint": ()=>_bigint,
    "_boolean": ()=>_boolean,
    "_catch": ()=>_catch,
    "_cidrv4": ()=>_cidrv4,
    "_cidrv6": ()=>_cidrv6,
    "_coercedBigint": ()=>_coercedBigint,
    "_coercedBoolean": ()=>_coercedBoolean,
    "_coercedDate": ()=>_coercedDate,
    "_coercedNumber": ()=>_coercedNumber,
    "_coercedString": ()=>_coercedString,
    "_cuid": ()=>_cuid,
    "_cuid2": ()=>_cuid2,
    "_custom": ()=>_custom,
    "_date": ()=>_date,
    "_default": ()=>_default,
    "_discriminatedUnion": ()=>_discriminatedUnion,
    "_e164": ()=>_e164,
    "_email": ()=>_email,
    "_emoji": ()=>_emoji,
    "_endsWith": ()=>_endsWith,
    "_enum": ()=>_enum,
    "_file": ()=>_file,
    "_float32": ()=>_float32,
    "_float64": ()=>_float64,
    "_gt": ()=>_gt,
    "_gte": ()=>_gte,
    "_guid": ()=>_guid,
    "_includes": ()=>_includes,
    "_int": ()=>_int,
    "_int32": ()=>_int32,
    "_int64": ()=>_int64,
    "_intersection": ()=>_intersection,
    "_ipv4": ()=>_ipv4,
    "_ipv6": ()=>_ipv6,
    "_isoDate": ()=>_isoDate,
    "_isoDateTime": ()=>_isoDateTime,
    "_isoDuration": ()=>_isoDuration,
    "_isoTime": ()=>_isoTime,
    "_jwt": ()=>_jwt,
    "_ksuid": ()=>_ksuid,
    "_lazy": ()=>_lazy,
    "_length": ()=>_length,
    "_literal": ()=>_literal,
    "_lowercase": ()=>_lowercase,
    "_lt": ()=>_lt,
    "_lte": ()=>_lte,
    "_map": ()=>_map,
    "_max": ()=>_lte,
    "_maxLength": ()=>_maxLength,
    "_maxSize": ()=>_maxSize,
    "_mime": ()=>_mime,
    "_min": ()=>_gte,
    "_minLength": ()=>_minLength,
    "_minSize": ()=>_minSize,
    "_multipleOf": ()=>_multipleOf,
    "_nan": ()=>_nan,
    "_nanoid": ()=>_nanoid,
    "_nativeEnum": ()=>_nativeEnum,
    "_negative": ()=>_negative,
    "_never": ()=>_never,
    "_nonnegative": ()=>_nonnegative,
    "_nonoptional": ()=>_nonoptional,
    "_nonpositive": ()=>_nonpositive,
    "_normalize": ()=>_normalize,
    "_null": ()=>_null,
    "_nullable": ()=>_nullable,
    "_number": ()=>_number,
    "_optional": ()=>_optional,
    "_overwrite": ()=>_overwrite,
    "_pipe": ()=>_pipe,
    "_positive": ()=>_positive,
    "_promise": ()=>_promise,
    "_property": ()=>_property,
    "_readonly": ()=>_readonly,
    "_record": ()=>_record,
    "_refine": ()=>_refine,
    "_regex": ()=>_regex,
    "_set": ()=>_set,
    "_size": ()=>_size,
    "_startsWith": ()=>_startsWith,
    "_string": ()=>_string,
    "_stringFormat": ()=>_stringFormat,
    "_stringbool": ()=>_stringbool,
    "_success": ()=>_success,
    "_symbol": ()=>_symbol,
    "_templateLiteral": ()=>_templateLiteral,
    "_toLowerCase": ()=>_toLowerCase,
    "_toUpperCase": ()=>_toUpperCase,
    "_transform": ()=>_transform,
    "_trim": ()=>_trim,
    "_tuple": ()=>_tuple,
    "_uint32": ()=>_uint32,
    "_uint64": ()=>_uint64,
    "_ulid": ()=>_ulid,
    "_undefined": ()=>_undefined,
    "_union": ()=>_union,
    "_unknown": ()=>_unknown,
    "_uppercase": ()=>_uppercase,
    "_url": ()=>_url,
    "_uuid": ()=>_uuid,
    "_uuidv4": ()=>_uuidv4,
    "_uuidv6": ()=>_uuidv6,
    "_uuidv7": ()=>_uuidv7,
    "_void": ()=>_void,
    "_xid": ()=>_xid
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/schemas.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
;
;
;
function _string(Class, params) {
    return new Class({
        type: "string",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _coercedString(Class, params) {
    return new Class({
        type: "string",
        coerce: true,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _email(Class, params) {
    return new Class({
        type: "string",
        format: "email",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _guid(Class, params) {
    return new Class({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uuid(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uuidv4(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v4",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uuidv6(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v6",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uuidv7(Class, params) {
    return new Class({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v7",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _url(Class, params) {
    return new Class({
        type: "string",
        format: "url",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _emoji(Class, params) {
    return new Class({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _nanoid(Class, params) {
    return new Class({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _cuid(Class, params) {
    return new Class({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _cuid2(Class, params) {
    return new Class({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _ulid(Class, params) {
    return new Class({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _xid(Class, params) {
    return new Class({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _ksuid(Class, params) {
    return new Class({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _ipv4(Class, params) {
    return new Class({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _ipv6(Class, params) {
    return new Class({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _cidrv4(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _cidrv6(Class, params) {
    return new Class({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _base64(Class, params) {
    return new Class({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _base64url(Class, params) {
    return new Class({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _e164(Class, params) {
    return new Class({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _jwt(Class, params) {
    return new Class({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: false,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
const TimePrecision = {
    Any: null,
    Minute: -1,
    Second: 0,
    Millisecond: 3,
    Microsecond: 6
};
function _isoDateTime(Class, params) {
    return new Class({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: false,
        local: false,
        precision: null,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _isoDate(Class, params) {
    return new Class({
        type: "string",
        format: "date",
        check: "string_format",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _isoTime(Class, params) {
    return new Class({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _isoDuration(Class, params) {
    return new Class({
        type: "string",
        format: "duration",
        check: "string_format",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _number(Class, params) {
    return new Class({
        type: "number",
        checks: [],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _coercedNumber(Class, params) {
    return new Class({
        type: "number",
        coerce: true,
        checks: [],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _int(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "safeint",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _float32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float32",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _float64(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "float64",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _int32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "int32",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uint32(Class, params) {
    return new Class({
        type: "number",
        check: "number_format",
        abort: false,
        format: "uint32",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _boolean(Class, params) {
    return new Class({
        type: "boolean",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _coercedBoolean(Class, params) {
    return new Class({
        type: "boolean",
        coerce: true,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _bigint(Class, params) {
    return new Class({
        type: "bigint",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _coercedBigint(Class, params) {
    return new Class({
        type: "bigint",
        coerce: true,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _int64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "int64",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uint64(Class, params) {
    return new Class({
        type: "bigint",
        check: "bigint_format",
        abort: false,
        format: "uint64",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _symbol(Class, params) {
    return new Class({
        type: "symbol",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _undefined(Class, params) {
    return new Class({
        type: "undefined",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _null(Class, params) {
    return new Class({
        type: "null",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _any(Class) {
    return new Class({
        type: "any"
    });
}
function _unknown(Class) {
    return new Class({
        type: "unknown"
    });
}
function _never(Class, params) {
    return new Class({
        type: "never",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _void(Class, params) {
    return new Class({
        type: "void",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _date(Class, params) {
    return new Class({
        type: "date",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _coercedDate(Class, params) {
    return new Class({
        type: "date",
        coerce: true,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _nan(Class, params) {
    return new Class({
        type: "nan",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _lt(value, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckLessThan"]({
        check: "less_than",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        value,
        inclusive: false
    });
}
function _lte(value, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckLessThan"]({
        check: "less_than",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        value,
        inclusive: true
    });
}
;
function _gt(value, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckGreaterThan"]({
        check: "greater_than",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        value,
        inclusive: false
    });
}
function _gte(value, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckGreaterThan"]({
        check: "greater_than",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        value,
        inclusive: true
    });
}
;
function _positive(params) {
    return _gt(0, params);
}
function _negative(params) {
    return _lt(0, params);
}
function _nonpositive(params) {
    return _lte(0, params);
}
function _nonnegative(params) {
    return _gte(0, params);
}
function _multipleOf(value, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMultipleOf"]({
        check: "multiple_of",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        value
    });
}
function _maxSize(maximum, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMaxSize"]({
        check: "max_size",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        maximum
    });
}
function _minSize(minimum, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMinSize"]({
        check: "min_size",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        minimum
    });
}
function _size(size, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckSizeEquals"]({
        check: "size_equals",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        size
    });
}
function _maxLength(maximum, params) {
    const ch = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMaxLength"]({
        check: "max_length",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        maximum
    });
    return ch;
}
function _minLength(minimum, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMinLength"]({
        check: "min_length",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        minimum
    });
}
function _length(length, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckLengthEquals"]({
        check: "length_equals",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        length
    });
}
function _regex(pattern, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckRegex"]({
        check: "string_format",
        format: "regex",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        pattern
    });
}
function _lowercase(params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckLowerCase"]({
        check: "string_format",
        format: "lowercase",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _uppercase(params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckUpperCase"]({
        check: "string_format",
        format: "uppercase",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _includes(includes, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckIncludes"]({
        check: "string_format",
        format: "includes",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        includes
    });
}
function _startsWith(prefix, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckStartsWith"]({
        check: "string_format",
        format: "starts_with",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        prefix
    });
}
function _endsWith(suffix, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckEndsWith"]({
        check: "string_format",
        format: "ends_with",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params),
        suffix
    });
}
function _property(property, schema, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckProperty"]({
        check: "property",
        property,
        schema,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _mime(types, params) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckMimeType"]({
        check: "mime_type",
        mime: types,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _overwrite(tx) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheckOverwrite"]({
        check: "overwrite",
        tx
    });
}
function _normalize(form) {
    return _overwrite((input)=>input.normalize(form));
}
function _trim() {
    return _overwrite((input)=>input.trim());
}
function _toLowerCase() {
    return _overwrite((input)=>input.toLowerCase());
}
function _toUpperCase() {
    return _overwrite((input)=>input.toUpperCase());
}
function _array(Class, element, params) {
    return new Class({
        type: "array",
        element,
        // get element() {
        //   return element;
        // },
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _union(Class, options, params) {
    return new Class({
        type: "union",
        options,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _discriminatedUnion(Class, discriminator, options, params) {
    return new Class({
        type: "union",
        options,
        discriminator,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _intersection(Class, left, right) {
    return new Class({
        type: "intersection",
        left,
        right
    });
}
function _tuple(Class, items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodType"];
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new Class({
        type: "tuple",
        items,
        rest,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _record(Class, keyType, valueType, params) {
    return new Class({
        type: "record",
        keyType,
        valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _map(Class, keyType, valueType, params) {
    return new Class({
        type: "map",
        keyType,
        valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _set(Class, valueType, params) {
    return new Class({
        type: "set",
        valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _enum(Class, values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v)=>[
            v,
            v
        ])) : values;
    // if (Array.isArray(values)) {
    //   for (const value of values) {
    //     entries[value] = value;
    //   }
    // } else {
    //   Object.assign(entries, values);
    // }
    // const entries: util.EnumLike = {};
    // for (const val of values) {
    //   entries[val] = val;
    // }
    return new Class({
        type: "enum",
        entries,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _nativeEnum(Class, entries, params) {
    return new Class({
        type: "enum",
        entries,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _literal(Class, value, params) {
    return new Class({
        type: "literal",
        values: Array.isArray(value) ? value : [
            value
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _file(Class, params) {
    return new Class({
        type: "file",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _transform(Class, fn) {
    return new Class({
        type: "transform",
        transform: fn
    });
}
function _optional(Class, innerType) {
    return new Class({
        type: "optional",
        innerType
    });
}
function _nullable(Class, innerType) {
    return new Class({
        type: "nullable",
        innerType
    });
}
function _default(Class, innerType, defaultValue) {
    return new Class({
        type: "default",
        innerType,
        get defaultValue () {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        }
    });
}
function _nonoptional(Class, innerType, params) {
    return new Class({
        type: "nonoptional",
        innerType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _success(Class, innerType) {
    return new Class({
        type: "success",
        innerType
    });
}
function _catch(Class, innerType, catchValue) {
    return new Class({
        type: "catch",
        innerType,
        catchValue: typeof catchValue === "function" ? catchValue : ()=>catchValue
    });
}
function _pipe(Class, in_, out) {
    return new Class({
        type: "pipe",
        in: in_,
        out
    });
}
function _readonly(Class, innerType) {
    return new Class({
        type: "readonly",
        innerType
    });
}
function _templateLiteral(Class, parts, params) {
    return new Class({
        type: "template_literal",
        parts,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](params)
    });
}
function _lazy(Class, getter) {
    return new Class({
        type: "lazy",
        getter
    });
}
function _promise(Class, innerType) {
    return new Class({
        type: "promise",
        innerType
    });
}
function _custom(Class, fn, _params) {
    const norm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](_params);
    var _norm_abort;
    (_norm_abort = norm.abort) !== null && _norm_abort !== void 0 ? _norm_abort : norm.abort = true; // default to abort:false
    const schema = new Class({
        type: "custom",
        check: "custom",
        fn: fn,
        ...norm
    });
    return schema;
}
function _refine(Class, fn, _params) {
    const schema = new Class({
        type: "custom",
        check: "custom",
        fn: fn,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](_params)
    });
    return schema;
}
function _stringbool(Classes, _params) {
    const params = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](_params);
    var _params_truthy;
    let truthyArray = (_params_truthy = params.truthy) !== null && _params_truthy !== void 0 ? _params_truthy : [
        "true",
        "1",
        "yes",
        "on",
        "y",
        "enabled"
    ];
    var _params_falsy;
    let falsyArray = (_params_falsy = params.falsy) !== null && _params_falsy !== void 0 ? _params_falsy : [
        "false",
        "0",
        "no",
        "off",
        "n",
        "disabled"
    ];
    if (params.case !== "sensitive") {
        truthyArray = truthyArray.map((v)=>typeof v === "string" ? v.toLowerCase() : v);
        falsyArray = falsyArray.map((v)=>typeof v === "string" ? v.toLowerCase() : v);
    }
    const truthySet = new Set(truthyArray);
    const falsySet = new Set(falsyArray);
    var _Classes_Pipe;
    const _Pipe = (_Classes_Pipe = Classes.Pipe) !== null && _Classes_Pipe !== void 0 ? _Classes_Pipe : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodPipe"];
    var _Classes_Boolean;
    const _Boolean = (_Classes_Boolean = Classes.Boolean) !== null && _Classes_Boolean !== void 0 ? _Classes_Boolean : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBoolean"];
    var _Classes_String;
    const _String = (_Classes_String = Classes.String) !== null && _Classes_String !== void 0 ? _Classes_String : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodString"];
    var _Classes_Transform;
    const _Transform = (_Classes_Transform = Classes.Transform) !== null && _Classes_Transform !== void 0 ? _Classes_Transform : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodTransform"];
    const tx = new _Transform({
        type: "transform",
        transform: (input, payload)=>{
            let data = input;
            if (params.case !== "sensitive") data = data.toLowerCase();
            if (truthySet.has(data)) {
                return true;
            } else if (falsySet.has(data)) {
                return false;
            } else {
                payload.issues.push({
                    code: "invalid_value",
                    expected: "stringbool",
                    values: [
                        ...truthySet,
                        ...falsySet
                    ],
                    input: payload.value,
                    inst: tx
                });
                return {};
            }
        },
        error: params.error
    });
    // params.error;
    const innerPipe = new _Pipe({
        type: "pipe",
        in: new _String({
            type: "string",
            error: params.error
        }),
        out: tx,
        error: params.error
    });
    const outerPipe = new _Pipe({
        type: "pipe",
        in: innerPipe,
        out: new _Boolean({
            type: "boolean",
            error: params.error
        }),
        error: params.error
    });
    return outerPipe;
}
function _stringFormat(Class, format, fnOrRegex) {
    let _params = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const params = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](_params);
    const def = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeParams"](_params),
        check: "string_format",
        type: "string",
        format,
        fn: typeof fnOrRegex === "function" ? fnOrRegex : (val)=>fnOrRegex.test(val),
        ...params
    };
    if (fnOrRegex instanceof RegExp) {
        def.pattern = fnOrRegex;
    }
    const inst = new Class(def);
    return inst;
}
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/util.js [app-client] (ecmascript) <export * as util>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "util": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _overwrite as overwrite>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "overwrite": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_overwrite"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _regex as regex>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "regex": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_regex"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _includes as includes>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "includes": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_includes"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _startsWith as startsWith>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "startsWith": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_startsWith"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _endsWith as endsWith>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "endsWith": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_endsWith"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _minLength as minLength>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "minLength": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_minLength"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _maxLength as maxLength>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "maxLength": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_maxLength"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _length as length>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "length": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_length"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _lowercase as lowercase>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "lowercase": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lowercase"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _uppercase as uppercase>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "uppercase": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uppercase"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _trim as trim>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "trim": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_trim"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _normalize as normalize>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "normalize": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_normalize"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _toLowerCase as toLowerCase>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "toLowerCase": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_toLowerCase"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _toUpperCase as toUpperCase>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "toUpperCase": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_toUpperCase"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _gt as gt>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "gt": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_gt"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _gte as gte>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "gte": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_gte"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _lt as lt>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "lt": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lt"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _lte as lte>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "lte": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_lte"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _multipleOf as multipleOf>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "multipleOf": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_multipleOf"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/classic/iso.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ZodISODate": ()=>ZodISODate,
    "ZodISODateTime": ()=>ZodISODateTime,
    "ZodISODuration": ()=>ZodISODuration,
    "ZodISOTime": ()=>ZodISOTime,
    "date": ()=>date,
    "datetime": ()=>datetime,
    "duration": ()=>duration,
    "time": ()=>time
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/schemas.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/classic/schemas.js [app-client] (ecmascript)");
;
;
const ZodISODateTime = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodISODateTime", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodISODateTime"].init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodStringFormat"].init(inst, def);
});
function datetime(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isoDateTime"](ZodISODateTime, params);
}
const ZodISODate = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodISODate", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodISODate"].init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodStringFormat"].init(inst, def);
});
function date(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isoDate"](ZodISODate, params);
}
const ZodISOTime = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodISOTime", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodISOTime"].init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodStringFormat"].init(inst, def);
});
function time(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isoTime"](ZodISOTime, params);
}
const ZodISODuration = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodISODuration", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodISODuration"].init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodStringFormat"].init(inst, def);
});
function duration(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_isoDuration"](ZodISODuration, params);
}
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/classic/errors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ZodError": ()=>ZodError,
    "ZodRealError": ()=>ZodRealError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
;
;
const initializer = (inst, issues)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodError"].init(inst, issues);
    inst.name = "ZodError";
    Object.defineProperties(inst, {
        format: {
            value: (mapper)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatError"](inst, mapper)
        },
        flatten: {
            value: (mapper)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flattenError"](inst, mapper)
        },
        addIssue: {
            value: (issue)=>inst.issues.push(issue)
        },
        addIssues: {
            value: (issues)=>inst.issues.push(...issues)
        },
        isEmpty: {
            get () {
                return inst.issues.length === 0;
            }
        }
    });
// Object.defineProperty(inst, "isEmpty", {
//   get() {
//     return inst.issues.length === 0;
//   },
// });
};
const ZodError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodError", initializer);
const ZodRealError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodError", initializer, {
    Parent: Error
}); // /** @deprecated Use `z.core.$ZodErrorMapCtx` instead. */
 // export type ErrorMapCtx = core.$ZodErrorMapCtx;
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/classic/parse.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parse": ()=>parse,
    "parseAsync": ()=>parseAsync,
    "safeParse": ()=>safeParse,
    "safeParseAsync": ()=>safeParseAsync
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/parse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/classic/errors.js [app-client] (ecmascript)");
;
;
const parse = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_parse"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodRealError"]);
const parseAsync = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_parseAsync"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodRealError"]);
const safeParse = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_safeParse"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodRealError"]);
const safeParseAsync = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_safeParseAsync"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZodRealError"]);
}),
"[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/classic/schemas.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ZodAny": ()=>ZodAny,
    "ZodArray": ()=>ZodArray,
    "ZodBase64": ()=>ZodBase64,
    "ZodBase64URL": ()=>ZodBase64URL,
    "ZodBigInt": ()=>ZodBigInt,
    "ZodBigIntFormat": ()=>ZodBigIntFormat,
    "ZodBoolean": ()=>ZodBoolean,
    "ZodCIDRv4": ()=>ZodCIDRv4,
    "ZodCIDRv6": ()=>ZodCIDRv6,
    "ZodCUID": ()=>ZodCUID,
    "ZodCUID2": ()=>ZodCUID2,
    "ZodCatch": ()=>ZodCatch,
    "ZodCustom": ()=>ZodCustom,
    "ZodCustomStringFormat": ()=>ZodCustomStringFormat,
    "ZodDate": ()=>ZodDate,
    "ZodDefault": ()=>ZodDefault,
    "ZodDiscriminatedUnion": ()=>ZodDiscriminatedUnion,
    "ZodE164": ()=>ZodE164,
    "ZodEmail": ()=>ZodEmail,
    "ZodEmoji": ()=>ZodEmoji,
    "ZodEnum": ()=>ZodEnum,
    "ZodFile": ()=>ZodFile,
    "ZodGUID": ()=>ZodGUID,
    "ZodIPv4": ()=>ZodIPv4,
    "ZodIPv6": ()=>ZodIPv6,
    "ZodIntersection": ()=>ZodIntersection,
    "ZodJWT": ()=>ZodJWT,
    "ZodKSUID": ()=>ZodKSUID,
    "ZodLazy": ()=>ZodLazy,
    "ZodLiteral": ()=>ZodLiteral,
    "ZodMap": ()=>ZodMap,
    "ZodNaN": ()=>ZodNaN,
    "ZodNanoID": ()=>ZodNanoID,
    "ZodNever": ()=>ZodNever,
    "ZodNonOptional": ()=>ZodNonOptional,
    "ZodNull": ()=>ZodNull,
    "ZodNullable": ()=>ZodNullable,
    "ZodNumber": ()=>ZodNumber,
    "ZodNumberFormat": ()=>ZodNumberFormat,
    "ZodObject": ()=>ZodObject,
    "ZodOptional": ()=>ZodOptional,
    "ZodPipe": ()=>ZodPipe,
    "ZodPrefault": ()=>ZodPrefault,
    "ZodPromise": ()=>ZodPromise,
    "ZodReadonly": ()=>ZodReadonly,
    "ZodRecord": ()=>ZodRecord,
    "ZodSet": ()=>ZodSet,
    "ZodString": ()=>ZodString,
    "ZodStringFormat": ()=>ZodStringFormat,
    "ZodSuccess": ()=>ZodSuccess,
    "ZodSymbol": ()=>ZodSymbol,
    "ZodTemplateLiteral": ()=>ZodTemplateLiteral,
    "ZodTransform": ()=>ZodTransform,
    "ZodTuple": ()=>ZodTuple,
    "ZodType": ()=>ZodType,
    "ZodULID": ()=>ZodULID,
    "ZodURL": ()=>ZodURL,
    "ZodUUID": ()=>ZodUUID,
    "ZodUndefined": ()=>ZodUndefined,
    "ZodUnion": ()=>ZodUnion,
    "ZodUnknown": ()=>ZodUnknown,
    "ZodVoid": ()=>ZodVoid,
    "ZodXID": ()=>ZodXID,
    "_ZodString": ()=>_ZodString,
    "_default": ()=>_default,
    "any": ()=>any,
    "array": ()=>array,
    "base64": ()=>base64,
    "base64url": ()=>base64url,
    "bigint": ()=>bigint,
    "boolean": ()=>boolean,
    "catch": ()=>_catch,
    "check": ()=>check,
    "cidrv4": ()=>cidrv4,
    "cidrv6": ()=>cidrv6,
    "cuid": ()=>cuid,
    "cuid2": ()=>cuid2,
    "custom": ()=>custom,
    "date": ()=>date,
    "discriminatedUnion": ()=>discriminatedUnion,
    "e164": ()=>e164,
    "email": ()=>email,
    "emoji": ()=>emoji,
    "enum": ()=>_enum,
    "file": ()=>file,
    "float32": ()=>float32,
    "float64": ()=>float64,
    "guid": ()=>guid,
    "instanceof": ()=>_instanceof,
    "int": ()=>int,
    "int32": ()=>int32,
    "int64": ()=>int64,
    "intersection": ()=>intersection,
    "ipv4": ()=>ipv4,
    "ipv6": ()=>ipv6,
    "json": ()=>json,
    "jwt": ()=>jwt,
    "keyof": ()=>keyof,
    "ksuid": ()=>ksuid,
    "lazy": ()=>lazy,
    "literal": ()=>literal,
    "looseObject": ()=>looseObject,
    "map": ()=>map,
    "nan": ()=>nan,
    "nanoid": ()=>nanoid,
    "nativeEnum": ()=>nativeEnum,
    "never": ()=>never,
    "nonoptional": ()=>nonoptional,
    "null": ()=>_null,
    "nullable": ()=>nullable,
    "nullish": ()=>nullish,
    "number": ()=>number,
    "object": ()=>object,
    "optional": ()=>optional,
    "partialRecord": ()=>partialRecord,
    "pipe": ()=>pipe,
    "prefault": ()=>prefault,
    "preprocess": ()=>preprocess,
    "promise": ()=>promise,
    "readonly": ()=>readonly,
    "record": ()=>record,
    "refine": ()=>refine,
    "set": ()=>set,
    "strictObject": ()=>strictObject,
    "string": ()=>string,
    "stringFormat": ()=>stringFormat,
    "stringbool": ()=>stringbool,
    "success": ()=>success,
    "superRefine": ()=>superRefine,
    "symbol": ()=>symbol,
    "templateLiteral": ()=>templateLiteral,
    "transform": ()=>transform,
    "tuple": ()=>tuple,
    "uint32": ()=>uint32,
    "uint64": ()=>uint64,
    "ulid": ()=>ulid,
    "undefined": ()=>_undefined,
    "union": ()=>union,
    "unknown": ()=>unknown,
    "url": ()=>url,
    "uuid": ()=>uuid,
    "uuidv4": ()=>uuidv4,
    "uuidv6": ()=>uuidv6,
    "uuidv7": ()=>uuidv7,
    "void": ()=>_void,
    "xid": ()=>xid
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/schemas.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/registries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$overwrite__as__overwrite$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _overwrite as overwrite>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$regex__as__regex$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _regex as regex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$includes__as__includes$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _includes as includes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$startsWith__as__startsWith$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _startsWith as startsWith>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$endsWith__as__endsWith$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _endsWith as endsWith>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$minLength__as__minLength$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _minLength as minLength>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$maxLength__as__maxLength$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _maxLength as maxLength>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$length__as__length$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _length as length>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lowercase__as__lowercase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _lowercase as lowercase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$uppercase__as__uppercase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _uppercase as uppercase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$trim__as__trim$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _trim as trim>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$normalize__as__normalize$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _normalize as normalize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$toLowerCase__as__toLowerCase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _toLowerCase as toLowerCase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$toUpperCase__as__toUpperCase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _toUpperCase as toUpperCase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gt__as__gt$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _gt as gt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _gte as gte>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lt__as__lt$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _lt as lt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _lte as lte>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$multipleOf__as__multipleOf$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/core/api.js [app-client] (ecmascript) <export _multipleOf as multipleOf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/classic/iso.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.5/node_modules/zod/v4/classic/parse.js [app-client] (ecmascript)");
;
;
;
;
;
const ZodType = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodType", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodType"].init(inst, def);
    inst.def = def;
    Object.defineProperty(inst, "_def", {
        value: def
    });
    // base methods
    inst.check = function() {
        for(var _len = arguments.length, checks = new Array(_len), _key = 0; _key < _len; _key++){
            checks[_key] = arguments[_key];
        }
        var _def_checks;
        return inst.clone({
            ...def,
            checks: [
                ...(_def_checks = def.checks) !== null && _def_checks !== void 0 ? _def_checks : [],
                ...checks.map((ch)=>typeof ch === "function" ? {
                        _zod: {
                            check: ch,
                            def: {
                                check: "custom"
                            },
                            onattach: []
                        }
                    } : ch)
            ]
        });
    };
    inst.clone = (def, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"](inst, def, params);
    inst.brand = ()=>inst;
    inst.register = (reg, meta)=>{
        reg.add(inst, meta);
        return inst;
    };
    // parsing
    inst.parse = (data, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"](inst, data, params, {
            callee: inst.parse
        });
    inst.safeParse = (data, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"](inst, data, params);
    inst.parseAsync = async (data, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsync"](inst, data, params, {
            callee: inst.parseAsync
        });
    inst.safeParseAsync = async (data, params)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParseAsync"](inst, data, params);
    inst.spa = inst.safeParseAsync;
    // refinements
    inst.refine = (check, params)=>inst.check(refine(check, params));
    inst.superRefine = (refinement)=>inst.check(superRefine(refinement));
    inst.overwrite = (fn)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$overwrite__as__overwrite$3e$__["overwrite"](fn));
    // wrappers
    inst.optional = ()=>optional(inst);
    inst.nullable = ()=>nullable(inst);
    inst.nullish = ()=>optional(nullable(inst));
    inst.nonoptional = (params)=>nonoptional(inst, params);
    inst.array = ()=>array(inst);
    inst.or = (arg)=>union([
            inst,
            arg
        ]);
    inst.and = (arg)=>intersection(inst, arg);
    inst.transform = (tx)=>pipe(inst, transform(tx));
    inst.default = (def)=>_default(inst, def);
    inst.prefault = (def)=>prefault(inst, def);
    // inst.coalesce = (def, params) => coalesce(inst, def, params);
    inst.catch = (params)=>_catch(inst, params);
    inst.pipe = (target)=>pipe(inst, target);
    inst.readonly = ()=>readonly(inst);
    // meta
    inst.describe = (description)=>{
        const cl = inst.clone();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalRegistry"].add(cl, {
            description
        });
        return cl;
    };
    Object.defineProperty(inst, "description", {
        get () {
            var _core_globalRegistry_get;
            return (_core_globalRegistry_get = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalRegistry"].get(inst)) === null || _core_globalRegistry_get === void 0 ? void 0 : _core_globalRegistry_get.description;
        },
        configurable: true
    });
    inst.meta = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (args.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalRegistry"].get(inst);
        }
        const cl = inst.clone();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalRegistry"].add(cl, args[0]);
        return cl;
    };
    // helpers
    inst.isOptional = ()=>inst.safeParse(undefined).success;
    inst.isNullable = ()=>inst.safeParse(null).success;
    return inst;
});
const _ZodString = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("_ZodString", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodString"].init(inst, def);
    ZodType.init(inst, def);
    const bag = inst._zod.bag;
    var _bag_format;
    inst.format = (_bag_format = bag.format) !== null && _bag_format !== void 0 ? _bag_format : null;
    var _bag_minimum;
    inst.minLength = (_bag_minimum = bag.minimum) !== null && _bag_minimum !== void 0 ? _bag_minimum : null;
    var _bag_maximum;
    inst.maxLength = (_bag_maximum = bag.maximum) !== null && _bag_maximum !== void 0 ? _bag_maximum : null;
    // validations
    inst.regex = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$regex__as__regex$3e$__["regex"](...args));
    };
    inst.includes = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$includes__as__includes$3e$__["includes"](...args));
    };
    inst.startsWith = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$startsWith__as__startsWith$3e$__["startsWith"](...args));
    };
    inst.endsWith = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$endsWith__as__endsWith$3e$__["endsWith"](...args));
    };
    inst.min = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$minLength__as__minLength$3e$__["minLength"](...args));
    };
    inst.max = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$maxLength__as__maxLength$3e$__["maxLength"](...args));
    };
    inst.length = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$length__as__length$3e$__["length"](...args));
    };
    inst.nonempty = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$minLength__as__minLength$3e$__["minLength"](1, ...args));
    };
    inst.lowercase = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lowercase__as__lowercase$3e$__["lowercase"](params));
    inst.uppercase = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$uppercase__as__uppercase$3e$__["uppercase"](params));
    // transforms
    inst.trim = ()=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$trim__as__trim$3e$__["trim"]());
    inst.normalize = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$normalize__as__normalize$3e$__["normalize"](...args));
    };
    inst.toLowerCase = ()=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$toLowerCase__as__toLowerCase$3e$__["toLowerCase"]());
    inst.toUpperCase = ()=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$toUpperCase__as__toUpperCase$3e$__["toUpperCase"]());
});
const ZodString = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodString", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodString"].init(inst, def);
    _ZodString.init(inst, def);
    inst.email = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_email"](ZodEmail, params));
    inst.url = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_url"](ZodURL, params));
    inst.jwt = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_jwt"](ZodJWT, params));
    inst.emoji = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_emoji"](ZodEmoji, params));
    inst.guid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_guid"](ZodGUID, params));
    inst.uuid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuid"](ZodUUID, params));
    inst.uuidv4 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv4"](ZodUUID, params));
    inst.uuidv6 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv6"](ZodUUID, params));
    inst.uuidv7 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv7"](ZodUUID, params));
    inst.nanoid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nanoid"](ZodNanoID, params));
    inst.guid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_guid"](ZodGUID, params));
    inst.cuid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cuid"](ZodCUID, params));
    inst.cuid2 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cuid2"](ZodCUID2, params));
    inst.ulid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ulid"](ZodULID, params));
    inst.base64 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_base64"](ZodBase64, params));
    inst.base64url = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_base64url"](ZodBase64URL, params));
    inst.xid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_xid"](ZodXID, params));
    inst.ksuid = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ksuid"](ZodKSUID, params));
    inst.ipv4 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ipv4"](ZodIPv4, params));
    inst.ipv6 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ipv6"](ZodIPv6, params));
    inst.cidrv4 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cidrv4"](ZodCIDRv4, params));
    inst.cidrv6 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cidrv6"](ZodCIDRv6, params));
    inst.e164 = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_e164"](ZodE164, params));
    // iso
    inst.datetime = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["datetime"](params));
    inst.date = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"](params));
    inst.time = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"](params));
    inst.duration = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$iso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["duration"](params));
});
function string(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_string"](ZodString, params);
}
const ZodStringFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodStringFormat", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodStringFormat"].init(inst, def);
    _ZodString.init(inst, def);
});
const ZodEmail = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodEmail", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodEmail"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function email(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_email"](ZodEmail, params);
}
const ZodGUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodGUID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodGUID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function guid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_guid"](ZodGUID, params);
}
const ZodUUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodUUID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUUID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function uuid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuid"](ZodUUID, params);
}
function uuidv4(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv4"](ZodUUID, params);
}
function uuidv6(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv6"](ZodUUID, params);
}
function uuidv7(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uuidv7"](ZodUUID, params);
}
const ZodURL = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodURL", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodURL"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function url(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_url"](ZodURL, params);
}
const ZodEmoji = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodEmoji", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodEmoji"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function emoji(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_emoji"](ZodEmoji, params);
}
const ZodNanoID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNanoID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNanoID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function nanoid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nanoid"](ZodNanoID, params);
}
const ZodCUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCUID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCUID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function cuid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cuid"](ZodCUID, params);
}
const ZodCUID2 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCUID2", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCUID2"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function cuid2(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cuid2"](ZodCUID2, params);
}
const ZodULID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodULID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodULID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function ulid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ulid"](ZodULID, params);
}
const ZodXID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodXID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodXID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function xid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_xid"](ZodXID, params);
}
const ZodKSUID = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodKSUID", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodKSUID"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function ksuid(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ksuid"](ZodKSUID, params);
}
const ZodIPv4 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodIPv4", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodIPv4"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function ipv4(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ipv4"](ZodIPv4, params);
}
const ZodIPv6 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodIPv6", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodIPv6"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function ipv6(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ipv6"](ZodIPv6, params);
}
const ZodCIDRv4 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCIDRv4", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCIDRv4"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function cidrv4(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cidrv4"](ZodCIDRv4, params);
}
const ZodCIDRv6 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCIDRv6", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCIDRv6"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function cidrv6(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_cidrv6"](ZodCIDRv6, params);
}
const ZodBase64 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodBase64", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBase64"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function base64(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_base64"](ZodBase64, params);
}
const ZodBase64URL = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodBase64URL", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBase64URL"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function base64url(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_base64url"](ZodBase64URL, params);
}
const ZodE164 = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodE164", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodE164"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function e164(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_e164"](ZodE164, params);
}
const ZodJWT = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodJWT", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodJWT"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function jwt(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_jwt"](ZodJWT, params);
}
const ZodCustomStringFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCustomStringFormat", (inst, def)=>{
    // ZodStringFormat.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCustomStringFormat"].init(inst, def);
    ZodStringFormat.init(inst, def);
});
function stringFormat(format, fnOrRegex) {
    let _params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_stringFormat"](ZodCustomStringFormat, format, fnOrRegex, _params);
}
const ZodNumber = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNumber", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNumber"].init(inst, def);
    ZodType.init(inst, def);
    inst.gt = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gt__as__gt$3e$__["gt"](value, params));
    inst.gte = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.min = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.lt = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lt__as__lt$3e$__["lt"](value, params));
    inst.lte = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](value, params));
    inst.max = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](value, params));
    inst.int = (params)=>inst.check(int(params));
    inst.safe = (params)=>inst.check(int(params));
    inst.positive = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gt__as__gt$3e$__["gt"](0, params));
    inst.nonnegative = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](0, params));
    inst.negative = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lt__as__lt$3e$__["lt"](0, params));
    inst.nonpositive = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](0, params));
    inst.multipleOf = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$multipleOf__as__multipleOf$3e$__["multipleOf"](value, params));
    inst.step = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$multipleOf__as__multipleOf$3e$__["multipleOf"](value, params));
    // inst.finite = (params) => inst.check(core.finite(params));
    inst.finite = ()=>inst;
    const bag = inst._zod.bag;
    var _bag_minimum, _bag_exclusiveMinimum, _Math_max;
    inst.minValue = (_Math_max = Math.max((_bag_minimum = bag.minimum) !== null && _bag_minimum !== void 0 ? _bag_minimum : Number.NEGATIVE_INFINITY, (_bag_exclusiveMinimum = bag.exclusiveMinimum) !== null && _bag_exclusiveMinimum !== void 0 ? _bag_exclusiveMinimum : Number.NEGATIVE_INFINITY)) !== null && _Math_max !== void 0 ? _Math_max : null;
    var _bag_maximum, _bag_exclusiveMaximum, _Math_min;
    inst.maxValue = (_Math_min = Math.min((_bag_maximum = bag.maximum) !== null && _bag_maximum !== void 0 ? _bag_maximum : Number.POSITIVE_INFINITY, (_bag_exclusiveMaximum = bag.exclusiveMaximum) !== null && _bag_exclusiveMaximum !== void 0 ? _bag_exclusiveMaximum : Number.POSITIVE_INFINITY)) !== null && _Math_min !== void 0 ? _Math_min : null;
    var _bag_format, _bag_multipleOf;
    inst.isInt = ((_bag_format = bag.format) !== null && _bag_format !== void 0 ? _bag_format : "").includes("int") || Number.isSafeInteger((_bag_multipleOf = bag.multipleOf) !== null && _bag_multipleOf !== void 0 ? _bag_multipleOf : 0.5);
    inst.isFinite = true;
    var _bag_format1;
    inst.format = (_bag_format1 = bag.format) !== null && _bag_format1 !== void 0 ? _bag_format1 : null;
});
function number(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_number"](ZodNumber, params);
}
const ZodNumberFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNumberFormat", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNumberFormat"].init(inst, def);
    ZodNumber.init(inst, def);
});
function int(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_int"](ZodNumberFormat, params);
}
function float32(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_float32"](ZodNumberFormat, params);
}
function float64(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_float64"](ZodNumberFormat, params);
}
function int32(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_int32"](ZodNumberFormat, params);
}
function uint32(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uint32"](ZodNumberFormat, params);
}
const ZodBoolean = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodBoolean", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBoolean"].init(inst, def);
    ZodType.init(inst, def);
});
function boolean(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_boolean"](ZodBoolean, params);
}
const ZodBigInt = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodBigInt", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBigInt"].init(inst, def);
    ZodType.init(inst, def);
    inst.gte = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.min = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.gt = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gt__as__gt$3e$__["gt"](value, params));
    inst.gte = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.min = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.lt = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lt__as__lt$3e$__["lt"](value, params));
    inst.lte = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](value, params));
    inst.max = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](value, params));
    inst.positive = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gt__as__gt$3e$__["gt"](BigInt(0), params));
    inst.negative = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lt__as__lt$3e$__["lt"](BigInt(0), params));
    inst.nonpositive = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](BigInt(0), params));
    inst.nonnegative = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](BigInt(0), params));
    inst.multipleOf = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$multipleOf__as__multipleOf$3e$__["multipleOf"](value, params));
    const bag = inst._zod.bag;
    var _bag_minimum;
    inst.minValue = (_bag_minimum = bag.minimum) !== null && _bag_minimum !== void 0 ? _bag_minimum : null;
    var _bag_maximum;
    inst.maxValue = (_bag_maximum = bag.maximum) !== null && _bag_maximum !== void 0 ? _bag_maximum : null;
    var _bag_format;
    inst.format = (_bag_format = bag.format) !== null && _bag_format !== void 0 ? _bag_format : null;
});
function bigint(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_bigint"](ZodBigInt, params);
}
const ZodBigIntFormat = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodBigIntFormat", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodBigIntFormat"].init(inst, def);
    ZodBigInt.init(inst, def);
});
function int64(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_int64"](ZodBigIntFormat, params);
}
function uint64(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_uint64"](ZodBigIntFormat, params);
}
const ZodSymbol = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodSymbol", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodSymbol"].init(inst, def);
    ZodType.init(inst, def);
});
function symbol(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_symbol"](ZodSymbol, params);
}
const ZodUndefined = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodUndefined", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUndefined"].init(inst, def);
    ZodType.init(inst, def);
});
function _undefined(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_undefined"](ZodUndefined, params);
}
;
const ZodNull = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNull", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNull"].init(inst, def);
    ZodType.init(inst, def);
});
function _null(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_null"](ZodNull, params);
}
;
const ZodAny = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodAny", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodAny"].init(inst, def);
    ZodType.init(inst, def);
});
function any() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_any"](ZodAny);
}
const ZodUnknown = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodUnknown", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUnknown"].init(inst, def);
    ZodType.init(inst, def);
});
function unknown() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_unknown"](ZodUnknown);
}
const ZodNever = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNever", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNever"].init(inst, def);
    ZodType.init(inst, def);
});
function never(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_never"](ZodNever, params);
}
const ZodVoid = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodVoid", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodVoid"].init(inst, def);
    ZodType.init(inst, def);
});
function _void(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_void"](ZodVoid, params);
}
;
const ZodDate = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodDate", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodDate"].init(inst, def);
    ZodType.init(inst, def);
    inst.min = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$gte__as__gte$3e$__["gte"](value, params));
    inst.max = (value, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$lte__as__lte$3e$__["lte"](value, params));
    const c = inst._zod.bag;
    inst.minDate = c.minimum ? new Date(c.minimum) : null;
    inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
function date(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_date"](ZodDate, params);
}
const ZodArray = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodArray", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodArray"].init(inst, def);
    ZodType.init(inst, def);
    inst.element = def.element;
    inst.min = (minLength, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$minLength__as__minLength$3e$__["minLength"](minLength, params));
    inst.nonempty = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$minLength__as__minLength$3e$__["minLength"](1, params));
    inst.max = (maxLength, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$maxLength__as__maxLength$3e$__["maxLength"](maxLength, params));
    inst.length = (len, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$length__as__length$3e$__["length"](len, params));
    inst.unwrap = ()=>inst.element;
});
function array(element, params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_array"](ZodArray, element, params);
}
function keyof(schema) {
    const shape = schema._zod.def.shape;
    return literal(Object.keys(shape));
}
const ZodObject = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodObject", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodObject"].init(inst, def);
    ZodType.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].defineLazy(inst, "shape", ()=>def.shape);
    inst.keyof = ()=>_enum(Object.keys(inst._zod.def.shape));
    inst.catchall = (catchall)=>inst.clone({
            ...inst._zod.def,
            catchall: catchall
        });
    inst.passthrough = ()=>inst.clone({
            ...inst._zod.def,
            catchall: unknown()
        });
    // inst.nonstrict = () => inst.clone({ ...inst._zod.def, catchall: api.unknown() });
    inst.loose = ()=>inst.clone({
            ...inst._zod.def,
            catchall: unknown()
        });
    inst.strict = ()=>inst.clone({
            ...inst._zod.def,
            catchall: never()
        });
    inst.strip = ()=>inst.clone({
            ...inst._zod.def,
            catchall: undefined
        });
    inst.extend = (incoming)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].extend(inst, incoming);
    };
    inst.merge = (other)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].merge(inst, other);
    inst.pick = (mask)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].pick(inst, mask);
    inst.omit = (mask)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].omit(inst, mask);
    inst.partial = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].partial(ZodOptional, inst, args[0]);
    };
    inst.required = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].required(ZodNonOptional, inst, args[0]);
    };
});
function object(shape, params) {
    const def = {
        type: "object",
        get shape () {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assignProp(this, "shape", {
                ...shape
            });
            return this.shape;
        },
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    };
    return new ZodObject(def);
}
function strictObject(shape, params) {
    return new ZodObject({
        type: "object",
        get shape () {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assignProp(this, "shape", {
                ...shape
            });
            return this.shape;
        },
        catchall: never(),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
function looseObject(shape, params) {
    return new ZodObject({
        type: "object",
        get shape () {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assignProp(this, "shape", {
                ...shape
            });
            return this.shape;
        },
        catchall: unknown(),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodUnion = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodUnion", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodUnion"].init(inst, def);
    ZodType.init(inst, def);
    inst.options = def.options;
});
function union(options, params) {
    return new ZodUnion({
        type: "union",
        options: options,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodDiscriminatedUnion = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodDiscriminatedUnion", (inst, def)=>{
    ZodUnion.init(inst, def);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodDiscriminatedUnion"].init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
    // const [options, params] = args;
    return new ZodDiscriminatedUnion({
        type: "union",
        options,
        discriminator,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodIntersection = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodIntersection", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodIntersection"].init(inst, def);
    ZodType.init(inst, def);
});
function intersection(left, right) {
    return new ZodIntersection({
        type: "intersection",
        left: left,
        right: right
    });
}
const ZodTuple = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodTuple", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodTuple"].init(inst, def);
    ZodType.init(inst, def);
    inst.rest = (rest)=>inst.clone({
            ...inst._zod.def,
            rest: rest
        });
});
function tuple(items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodType"];
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new ZodTuple({
        type: "tuple",
        items: items,
        rest,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodRecord = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodRecord", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodRecord"].init(inst, def);
    ZodType.init(inst, def);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
    return new ZodRecord({
        type: "record",
        keyType,
        valueType: valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
function partialRecord(keyType, valueType, params) {
    return new ZodRecord({
        type: "record",
        keyType: union([
            keyType,
            never()
        ]),
        valueType: valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodMap = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodMap", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodMap"].init(inst, def);
    ZodType.init(inst, def);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
});
function map(keyType, valueType, params) {
    return new ZodMap({
        type: "map",
        keyType: keyType,
        valueType: valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodSet = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodSet", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodSet"].init(inst, def);
    ZodType.init(inst, def);
    inst.min = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_minSize"](...args));
    };
    inst.nonempty = (params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_minSize"](1, params));
    inst.max = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_maxSize"](...args));
    };
    inst.size = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_size"](...args));
    };
});
function set(valueType, params) {
    return new ZodSet({
        type: "set",
        valueType: valueType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodEnum = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodEnum", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodEnum"].init(inst, def);
    ZodType.init(inst, def);
    inst.enum = def.entries;
    inst.options = Object.values(def.entries);
    const keys = new Set(Object.keys(def.entries));
    inst.extract = (values, params)=>{
        const newEntries = {};
        for (const value of values){
            if (keys.has(value)) {
                newEntries[value] = def.entries[value];
            } else throw new Error("Key ".concat(value, " not found in enum"));
        }
        return new ZodEnum({
            ...def,
            checks: [],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params),
            entries: newEntries
        });
    };
    inst.exclude = (values, params)=>{
        const newEntries = {
            ...def.entries
        };
        for (const value of values){
            if (keys.has(value)) {
                delete newEntries[value];
            } else throw new Error("Key ".concat(value, " not found in enum"));
        }
        return new ZodEnum({
            ...def,
            checks: [],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params),
            entries: newEntries
        });
    };
});
function _enum(values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v)=>[
            v,
            v
        ])) : values;
    return new ZodEnum({
        type: "enum",
        entries,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
;
function nativeEnum(entries, params) {
    return new ZodEnum({
        type: "enum",
        entries,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodLiteral = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodLiteral", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodLiteral"].init(inst, def);
    ZodType.init(inst, def);
    inst.values = new Set(def.values);
    Object.defineProperty(inst, "value", {
        get () {
            if (def.values.length > 1) {
                throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            }
            return def.values[0];
        }
    });
});
function literal(value, params) {
    return new ZodLiteral({
        type: "literal",
        values: Array.isArray(value) ? value : [
            value
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodFile = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodFile", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodFile"].init(inst, def);
    ZodType.init(inst, def);
    inst.min = (size, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_minSize"](size, params));
    inst.max = (size, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_maxSize"](size, params));
    inst.mime = (types, params)=>inst.check(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_mime"](Array.isArray(types) ? types : [
            types
        ], params));
});
function file(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_file"](ZodFile, params);
}
const ZodTransform = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodTransform", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodTransform"].init(inst, def);
    ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        payload.addIssue = (issue)=>{
            if (typeof issue === "string") {
                payload.issues.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].issue(issue, payload.value, def));
            } else {
                // for Zod 3 backwards compatibility
                const _issue = issue;
                if (_issue.fatal) _issue.continue = false;
                var _issue_code;
                (_issue_code = _issue.code) !== null && _issue_code !== void 0 ? _issue_code : _issue.code = "custom";
                var _issue_input;
                (_issue_input = _issue.input) !== null && _issue_input !== void 0 ? _issue_input : _issue.input = payload.value;
                var _issue_inst;
                (_issue_inst = _issue.inst) !== null && _issue_inst !== void 0 ? _issue_inst : _issue.inst = inst;
                var _issue_continue;
                (_issue_continue = _issue.continue) !== null && _issue_continue !== void 0 ? _issue_continue : _issue.continue = true;
                payload.issues.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].issue(_issue));
            }
        };
        const output = def.transform(payload.value, payload);
        if (output instanceof Promise) {
            return output.then((output)=>{
                payload.value = output;
                return payload;
            });
        }
        payload.value = output;
        return payload;
    };
});
function transform(fn) {
    return new ZodTransform({
        type: "transform",
        transform: fn
    });
}
const ZodOptional = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodOptional", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodOptional"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function optional(innerType) {
    return new ZodOptional({
        type: "optional",
        innerType: innerType
    });
}
const ZodNullable = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNullable", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNullable"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function nullable(innerType) {
    return new ZodNullable({
        type: "nullable",
        innerType: innerType
    });
}
function nullish(innerType) {
    return optional(nullable(innerType));
}
const ZodDefault = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodDefault", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodDefault"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
    return new ZodDefault({
        type: "default",
        innerType: innerType,
        get defaultValue () {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        }
    });
}
const ZodPrefault = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodPrefault", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodPrefault"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
    return new ZodPrefault({
        type: "prefault",
        innerType: innerType,
        get defaultValue () {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        }
    });
}
const ZodNonOptional = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNonOptional", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNonOptional"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
    return new ZodNonOptional({
        type: "nonoptional",
        innerType: innerType,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodSuccess = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodSuccess", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodSuccess"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function success(innerType) {
    return new ZodSuccess({
        type: "success",
        innerType: innerType
    });
}
const ZodCatch = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCatch", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCatch"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
    return new ZodCatch({
        type: "catch",
        innerType: innerType,
        catchValue: typeof catchValue === "function" ? catchValue : ()=>catchValue
    });
}
;
const ZodNaN = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodNaN", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodNaN"].init(inst, def);
    ZodType.init(inst, def);
});
function nan(params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_nan"](ZodNaN, params);
}
const ZodPipe = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodPipe", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodPipe"].init(inst, def);
    ZodType.init(inst, def);
    inst.in = def.in;
    inst.out = def.out;
});
function pipe(in_, out) {
    return new ZodPipe({
        type: "pipe",
        in: in_,
        out: out
    });
}
const ZodReadonly = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodReadonly", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodReadonly"].init(inst, def);
    ZodType.init(inst, def);
});
function readonly(innerType) {
    return new ZodReadonly({
        type: "readonly",
        innerType: innerType
    });
}
const ZodTemplateLiteral = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodTemplateLiteral", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodTemplateLiteral"].init(inst, def);
    ZodType.init(inst, def);
});
function templateLiteral(parts, params) {
    return new ZodTemplateLiteral({
        type: "template_literal",
        parts,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
}
const ZodLazy = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodLazy", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodLazy"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.getter();
});
function lazy(getter) {
    return new ZodLazy({
        type: "lazy",
        getter: getter
    });
}
const ZodPromise = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodPromise", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodPromise"].init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
function promise(innerType) {
    return new ZodPromise({
        type: "promise",
        innerType: innerType
    });
}
const ZodCustom = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$constructor"]("ZodCustom", (inst, def)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["$ZodCustom"].init(inst, def);
    ZodType.init(inst, def);
});
function check(fn) {
    const ch = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$ZodCheck"]({
        check: "custom"
    });
    ch._zod.check = fn;
    return ch;
}
function custom(fn, _params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_custom"](ZodCustom, fn !== null && fn !== void 0 ? fn : ()=>true, _params);
}
function refine(fn) {
    let _params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_refine"](ZodCustom, fn, _params);
}
function superRefine(fn) {
    const ch = check((payload)=>{
        payload.addIssue = (issue)=>{
            if (typeof issue === "string") {
                payload.issues.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].issue(issue, payload.value, ch._zod.def));
            } else {
                // for Zod 3 backwards compatibility
                const _issue = issue;
                if (_issue.fatal) _issue.continue = false;
                var _issue_code;
                (_issue_code = _issue.code) !== null && _issue_code !== void 0 ? _issue_code : _issue.code = "custom";
                var _issue_input;
                (_issue_input = _issue.input) !== null && _issue_input !== void 0 ? _issue_input : _issue.input = payload.value;
                var _issue_inst;
                (_issue_inst = _issue.inst) !== null && _issue_inst !== void 0 ? _issue_inst : _issue.inst = ch;
                var _issue_continue;
                (_issue_continue = _issue.continue) !== null && _issue_continue !== void 0 ? _issue_continue : _issue.continue = !ch._zod.def.abort;
                payload.issues.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].issue(_issue));
            }
        };
        return fn(payload.value, payload);
    });
    return ch;
}
function _instanceof(cls) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        error: "Input not instance of ".concat(cls.name)
    };
    const inst = new ZodCustom({
        type: "custom",
        check: "custom",
        fn: (data)=>data instanceof cls,
        abort: true,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].normalizeParams(params)
    });
    inst._zod.bag.Class = cls;
    return inst;
}
;
const stringbool = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$5$2f$node_modules$2f$zod$2f$v4$2f$core$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_stringbool"]({
        Pipe: ZodPipe,
        Boolean: ZodBoolean,
        String: ZodString,
        Transform: ZodTransform
    }, ...args);
};
function json(params) {
    const jsonSchema = lazy(()=>{
        return union([
            string(params),
            number(),
            boolean(),
            _null(),
            array(jsonSchema),
            record(string(), jsonSchema)
        ]);
    });
    return jsonSchema;
}
function preprocess(fn, schema) {
    return pipe(transform(fn), schema);
}
}),
}]);

//# sourceMappingURL=95938_zod_v4_73cd1f4c._.js.map