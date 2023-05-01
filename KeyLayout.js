/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-multi-spaces */
/* eslint-disable object-curly-newline */
const Backquote =  { sys: false, name: 'Backquote', Enkey: '`', sEnKey: '~', Rukey: 'ё', sRuKey: 'Ё' };
const Digit1 =     { sys: false, name: 'Digit1', Enkey: '1', sEnKey: '!', Rukey: '1', sRuKey: '!' };
const Digit2 =     { sys: false, name: 'Digit2', Enkey: '2', sEnKey: '@', Rukey: '2', sRuKey: '"' };
const Digit3 =     { sys: false, name: 'Digit3', Enkey: '3', sEnKey: '#', Rukey: '3', sRuKey: '№' };
const Digit4 =     { sys: false, name: 'Digit4', Enkey: '4', sEnKey: '$', Rukey: '4', sRuKey: ';' };
const Digit5 =     { sys: false, name: 'Digit5', Enkey: '5', sEnKey: '%', Rukey: '5', sRuKey: '%' };
const Digit6 =     { sys: false, name: 'Digit6', Enkey: '6', sEnKey: '^', Rukey: '6', sRuKey: ':' };
const Digit7 =     { sys: false, name: 'Digit7', Enkey: '7', sEnKey: '&', Rukey: '7', sRuKey: '?' };
const Digit8 =     { sys: false, name: 'Digit8', Enkey: '8', sEnKey: '*', Rukey: '8', sRuKey: '*' };
const Digit9 =     { sys: false, name: 'Digit9', Enkey: '9', sEnKey: '(', Rukey: '9', sRuKey: '(' };
const Digit0 =     { sys: false, name: 'Digit0', Enkey: '0', sEnKey: ')', Rukey: '0', sRuKey: ')' };
const Minus =      { sys: false, name: 'Minus',  Enkey: '-', sEnKey: '_', Rukey: '-', sRuKey: '_' };
const Equal =      { sys: false, name: 'Equal',  Enkey: '=', sEnKey: '+', Rukey: '=', sRuKey: '+' };
const Backslash =  { sys: false, name: 'Backslash', Enkey: '\\', sEnKey: '|', Rukey: '\\', sRuKey: '/' };
const Backspace =  { sys: true, name: 'Backspace', Enkey: 'Backspace', sEnKey: 'Backspace', Rukey: 'Backspace', sRuKey: 'Backspace' };
const Tab =        { sys: true, name: 'Tab',  Enkey: 'Tab', sEnKey: 'Tab', Rukey: 'Tab', sRuKey: 'Tab' };
const KeyQ =       { sys: false, name: 'KeyQ', Enkey: 'q', sEnKey: 'Q', Rukey: 'й', sRuKey: 'Й' };
const KeyW =       { sys: false, name: 'KeyW', Enkey: 'w', sEnKey: 'W', Rukey: 'ц', sRuKey: 'Ц' };
const KeyE =       { sys: false, name: 'KeyE',  Enkey: 'e', sEnKey: 'E', Rukey: 'у', sRuKey: 'У' };
const KeyR =       { sys: false, name: 'KeyR',  Enkey: 'r', sEnKey: 'R', Rukey: 'к', sRuKey: 'К' };
const KeyT =       { sys: false, name: 'KeyT',  Enkey: 't', sEnKey: 'T', Rukey: 'е', sRuKey: 'Е' };
const KeyY =       { sys: false, name: 'KeyY',  Enkey: 'y', sEnKey: 'Y', Rukey: 'н', sRuKey: 'Н' };
const KeyU =       { sys: false, name: 'KeyU',  Enkey: 'u', sEnKey: 'U', Rukey: 'г', sRuKey: 'Г' };
const KeyI =       { sys: false, name: 'KeyI',  Enkey: 'i', sEnKey: 'I', Rukey: 'ш', sRuKey: 'Ш' };
const KeyO =       { sys: false, name: 'KeyO',  Enkey: 'o', sEnKey: 'O', Rukey: 'щ', sRuKey: 'Щ' };
const KeyP =       { sys: false, name: 'KeyP',  Enkey: 'p', sEnKey: 'P', Rukey: 'з', sRuKey: 'З' };
const BracketLeft = { sys: false, name: 'BracketLeft',  Enkey: '[', sEnKey: '{', Rukey: 'х', sRuKey: 'Х' };
const BracketRight = { sys: false, name: 'BracketRight',  Enkey: ']', sEnKey: '}', Rukey: 'ъ', sRuKey: 'Ъ' };
const CapsLock = { sys: true, name: 'CapsLock',  Enkey: 'CapsLock', sEnKey: 'CapsLock', Rukey: 'CapsLock', sRuKey: 'CapsLock' };
const KeyA = { sys: false, name: 'KeyA',  Enkey: 'a', sEnKey: 'A', Rukey: 'ф', sRuKey: 'Ф' };
const KeyS = { sys: false, name: 'KeyS',  Enkey: 's', sEnKey: 'S', Rukey: 'ы', sRuKey: 'Ы' };
const KeyD = { sys: false, name: 'KeyD',  Enkey: 'd', sEnKey: 'D', Rukey: 'в', sRuKey: 'В' };
const KeyF = { sys: false, name: 'KeyF',  Enkey: 'f', sEnKey: 'F', Rukey: 'а', sRuKey: 'А' };
const KeyG = { sys: false, name: 'KeyG',  Enkey: 'g', sEnKey: 'G', Rukey: 'п', sRuKey: 'П' };
const KeyH = { sys: false, name: 'KeyH',  Enkey: 'h', sEnKey: 'H', Rukey: 'р', sRuKey: 'Р' };
const KeyJ = { sys: false, name: 'KeyJ',  Enkey: 'j', sEnKey: 'J', Rukey: 'о', sRuKey: 'О' };
const KeyK = { sys: false, name: 'KeyK',  Enkey: 'k', sEnKey: 'K', Rukey: 'л', sRuKey: 'Л' };
const KeyL = { sys: false, name: 'KeyL',  Enkey: 'l', sEnKey: 'L', Rukey: 'д', sRuKey: 'Д' };
const Semicolon = { sys: false, name: 'Semicolon',  Enkey: ';', sEnKey: ':', Rukey: 'ж', sRuKey: 'Ж' };
const Quote = { sys: false, name: 'Quote',  Enkey: '\'', sEnKey: '"', Rukey: 'э', sRuKey: 'Э' };
const Enter = { sys: true, name: 'Enter',  Enkey: 'Enter', sEnKey: 'Enter', Rukey: 'Enter', sRuKey: 'Enter' };

const ShiftLeft = { sys: true, name: 'ShiftLeft',  Enkey: 'Shift', sEnKey: 'Shift', Rukey: 'Shift', sRuKey: 'Shift' };
const KeyZ = { sys: false, name: 'KeyZ',  Enkey: 'z', sEnKey: 'Z', Rukey: 'я', sRuKey: 'Я' };
const KeyX = { sys: false, name: 'KeyX',  Enkey: 'x', sEnKey: 'X', Rukey: 'ч', sRuKey: 'Ч' };
const KeyC = { sys: false, name: 'KeyC',  Enkey: 'c', sEnKey: 'C', Rukey: 'с', sRuKey: 'С' };
const KeyV = { sys: false, name: 'KeyV',  Enkey: 'v', sEnKey: 'V', Rukey: 'м', sRuKey: 'М' };
const KeyB = { sys: false, name: 'KeyB',  Enkey: 'b', sEnKey: 'B', Rukey: 'и', sRuKey: 'И' };
const KeyN = { sys: false, name: 'KeyN',  Enkey: 'n', sEnKey: 'N', Rukey: 'т', sRuKey: 'Т' };
const KeyM = { sys: false, name: 'KeyM',  Enkey: 'm', sEnKey: 'M', Rukey: 'ь', sRuKey: 'Ь' };
const Comma = { sys: false, name: 'Comma',  Enkey: ',', sEnKey: '<', Rukey: 'б', sRuKey: 'Б' };
const Period = { sys: false, name: 'Period',  Enkey: '.', sEnKey: '>', Rukey: 'ю', sRuKey: 'Ю' };
const Slash = { sys: false, name: 'Slash',  Enkey: '/', sEnKey: '?', Rukey: '.', sRuKey: ',' };
const ShiftRight = { sys: true, name: 'ShiftRight',  Enkey: 'Shift', sEnKey: 'Shift', Rukey: 'Shift', sRuKey: 'Shift' };
const ArrowUp = { sys: false, name: 'ArrowUp',  Enkey: '▲', sEnKey: '▲', Rukey: '▲', sRuKey: '▲' };

const  ControlLeft = { sys: true, name: 'ControlLeft',  Enkey: 'Ctrl', sEnKey: 'Ctrl', Rukey: 'Ctrl', sRuKey: 'Ctrl' };
const  MetaLeft = { sys: true, name: 'MetaLeft',  Enkey: 'MetaLeft', sEnKey: 'MetaLeft', Rukey: 'MetaLeft', sRuKey: 'MetaLeft' };
const  AltLeft = { sys: true, name: 'AltLeft',  Enkey: 'Alt', sEnKey: 'Alt', Rukey: 'Alt', sRuKey: 'Alt' };
const  Space = { sys: false, name: 'Space',  Enkey: ' ', sEnKey: ' ', Rukey: ' ', sRuKey: ' ' };
const  AltRight = { sys: true, name: 'AltRight',  Enkey: 'Alt', sEnKey: 'Alt', Rukey: 'Alt', sRuKey: 'Alt' };
const ArrowLeft = { sys: false, name: 'ArrowLeft',  Enkey: '◄', sEnKey: '◄', Rukey: '◄', sRuKey: '◄' };
const ArrowDown = { sys: false, name: 'ArrowDown',  Enkey: '▼', sEnKey: '▼', Rukey: '▼', sRuKey: '▼' };
const ArrowRight = { sys: false, name: 'ArrowRight',  Enkey: '►', sEnKey: '►', Rukey: '►', sRuKey: '►' };
const  ControlRight = { sys: true, name: 'ControlRight',  Enkey: 'Ctrl', sEnKey: 'Ctrl', Rukey: 'Ctrl', sRuKey: 'Ctrl' };
export const KeyLayout  = [
  [Backquote, Digit1, Digit2, Digit3, Digit4, Digit5, Digit6, Digit7, Digit8, Digit9, Digit0, Minus, Equal, Backslash, Backspace],
  [Tab, KeyQ, KeyW, KeyE, KeyR, KeyT, KeyY, KeyU, KeyI, KeyO, KeyP, BracketLeft, BracketRight],
  [CapsLock, KeyA, KeyS, KeyD, KeyF, KeyG, KeyH, KeyJ, KeyK, KeyL, Semicolon, Quote, Enter],
  [ShiftLeft, KeyZ, KeyX, KeyC, KeyV, KeyB, KeyN, KeyM, Comma, Period, Slash, ArrowUp, ShiftRight],
  [ControlLeft, MetaLeft, AltLeft, Space, AltRight, ArrowLeft, ArrowDown, ArrowRight, ControlRight],
];
