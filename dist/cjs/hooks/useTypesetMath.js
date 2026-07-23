"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTypesetMath = exports.TypesetMathContext = void 0;
const react_1 = __importDefault(require("react"));
exports.TypesetMathContext = react_1.default.createContext(() => { throw new Error('context not initialized'); });
const useTypesetMath = () => react_1.default.useContext(exports.TypesetMathContext);
exports.useTypesetMath = useTypesetMath;
//# sourceMappingURL=useTypesetMath.js.map