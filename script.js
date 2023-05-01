/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import { KeyLayout } from './KeyLayout.js';

class Keyboard {
  keys = KeyLayout;

  elements = {
    main: null,
    keysContainer: null,
    textInput: null,
    keys: [],
  };

  properties = {
    value: '',
    capsLock: false,
    currentKeyLayout: 'Enkey',
    shift: false,
  };

  init() {
    if (localStorage.getItem('layout') !== null) { this.properties.currentKeyLayout = localStorage.getItem('layout'); }
    // Create main elements
    this.elements.textInput = document.createElement('textarea');
    this.elements.textInput.classList.add('keyboard-input');
    document.body.appendChild(this.elements.textInput);
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p1.classList.add('description');
    p2.classList.add('description');
    p1.textContent = 'Клавиатура создана в операционной системе Windows';
    p2.textContent = 'Для переключения языка комбинация: левыe LeftCtrl + LeftShift';
    document.body.appendChild(p1);
    document.body.appendChild(p2);
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');
    // Setup main elements
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.createKeys();
    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      const keyboardKey = this.elements.keys.find((el) => el[1].name === e.code);
      if (keyboardKey !== undefined) {
        const a = document.querySelector(`.${e.code}`);
        if ((e.code === 'ControlLeft' && e.shiftKey) || (e.code === 'ShiftLeft' && e.ctrlKey)) {
          this.properties.currentKeyLayout = this.properties.currentKeyLayout === 'Enkey' ? 'Rukey' : 'Enkey';
          localStorage.setItem('layout', this.properties.currentKeyLayout);
          this.updateLayout();
        }
        this.keydown(e.code, keyboardKey[1]);
        a.classList.add('active');
      }
    });

    window.addEventListener('keyup', (e) => {
      e.preventDefault();
      const keyboardKey = this.elements.keys.find((el) => el[1].name === e.code);
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.properties.shift = false;
        this.updateLayout();
      }
      if (keyboardKey !== undefined) {
        const a = document.querySelector(`.${e.code}`);
        a.classList.remove('active');
        this.updateLayout();
      }
    });
  }

  keydown(code, key) {
    switch (code) {
      case 'ShiftLeft':
        this.properties.shift = true;
        this.updateLayout();
        break;
      case 'ShiftRight':
        this.properties.shift = true;
        this.updateLayout();
        break;
      case 'CapsLock':
        this.properties.capsLock = !this.properties.capsLock;
        this.updateLayout();
        break;
      case 'Backspace':
        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
        this.updateValue('');
        break;
      case 'Tab':
        this.updateValue('\t');
        break;
      case 'Enter':
        this.updateValue('\n');
        break;
      default:
        if (!key.sys) {
          const a = document.querySelector(`.${code}`);
          this.updateValue(a.innerHTML);
        }
        break;
    }
  }

  createKeys() {
    this.keys.forEach((el) => {
      const row = document.createElement('div');
      row.classList.add('key__row');
      this.elements.keysContainer.appendChild(row);
      el.forEach((key) => {
        const keyElement = document.createElement('button');
        this.elements.keys.push([keyElement, key]);
        row.appendChild(keyElement);
        keyElement.setAttribute('type', 'button');
        keyElement.classList.add('keyboard__key', key.name);
        keyElement.textContent = key[this.properties.currentKeyLayout];
        keyElement.addEventListener('mousedown', () => {
          keyElement.classList.add('active');
          this.keydown(key.name, key);
        });
        keyElement.addEventListener('mouseup', () => {
          keyElement.classList.remove('active');
          if (key.name === 'ShiftLeft' || key.name === 'ShiftRight') {
            this.properties.shift = false;
          }
          this.updateLayout();
        });
        keyElement.addEventListener('mouseleave', () => {
          keyElement.classList.remove('active');
          this.updateLayout();
        });
      });
    });
  }

  updateLayout() {
    const caps = document.querySelector('.CapsLock');
    if (this.properties.capsLock) {
      caps.classList.add('active');
    } else {
      caps.classList.remove('active');
    }
    let { currentKeyLayout } = this.properties;
    if (this.properties.shift && this.properties.capsLock) {
      currentKeyLayout = currentKeyLayout === 'Enkey' ? 'sEnKey' : 'sRuKey';
      this.elements.keys.forEach((el) => {
        if (!el[1].sys) {
          el[0].textContent = el[1][currentKeyLayout].toLowerCase();
        }
      });
    } else
    if (this.properties.capsLock) {
      this.elements.keys.forEach((el) => {
        if (!el[1].sys) {
          el[0].textContent = el[1][currentKeyLayout].toUpperCase();
        }
      });
    } else
    if (this.properties.shift) {
      currentKeyLayout = currentKeyLayout === 'Enkey' ? 'sEnKey' : 'sRuKey';
      this.elements.keys.forEach((el) => {
        if (!el[1].sys) {
          el[0].textContent = el[1][currentKeyLayout];
        }
      });
    } else {
      this.elements.keys.forEach((el) => {
        if (!el[1].sys) {
          el[0].textContent = el[1][currentKeyLayout];
        }
      });
    }
  }

  updateValue(key) {
    this.properties.value += key;
    this.elements.textInput.value = this.properties.value;
  }
}
const userKeyboard = new Keyboard();

window.addEventListener('DOMContentLoaded', () => {
  userKeyboard.init();
});
