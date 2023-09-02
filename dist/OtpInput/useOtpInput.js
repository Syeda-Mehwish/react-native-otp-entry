"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOtpInput = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const useOtpInput = ({ onTextChange }) => {
    const [text, setText] = (0, react_1.useState)("");
    const inputRef = (0, react_1.useRef)(null);
    const focusedInputIndex = text.length;
    const handlePress = () => {
        // To fix bug when keyboard is not popping up after being dismissed
        if (!react_native_1.Keyboard.isVisible()) {
            react_native_1.Keyboard.dismiss();
        }
        inputRef.current?.focus();
    };
    const handleTextChange = (value) => {
        setText(value);
        onTextChange?.(value);
    };
    const clear = () => {
        setText("");
    };
    return {
        models: { text, inputRef, focusedInputIndex },
        actions: { handlePress, handleTextChange, clear },
        forms: { setText },
    };
};
exports.useOtpInput = useOtpInput;
