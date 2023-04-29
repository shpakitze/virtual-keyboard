const Keyboard = {
  enKeyLayout: [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'br',
    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'del', 'br',
    'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter', 'br',
    'Lshift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', 'Rshift', 'br',
    'Lctrl', 'win', 'alt', 'space', 'alt', 'left', 'down', 'right', 'Rctrl',
  ],
  ruKeyLayout: [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'br',
    'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'del', 'br',
    'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'br',
    'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'up', 'Rshift', 'br',
    'Lctrl', 'win', 'alt', 'space', 'alt', 'left', 'down', 'right', 'Rctrl',
  ],
  enShiftLayout: [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', 'backspace', 'br',
    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', 'del', 'br',
    'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'enter', 'br',
    'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', 'up', 'Rshift', 'br',
    'Lctrl', 'win', 'alt', 'space', 'alt', 'left', 'down', 'right', 'Rctrl',
  ],

  ruShiftLayout: [
    'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '-', '=', 'backspace', 'br',
    'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'del', 'br',
    'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'br',
    'done', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', 'up', 'Rshift', 'br',
    'Lctrl', 'win', 'alt', 'space', 'alt', 'left', 'down', 'right', 'Rctrl',
  ],
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
    textInput: null,
  },

  eventHandlers: {
    onInput: null,
    onClose: null,
  },

  properties: {
    value: '',
    capsLock: false,
    currentKeyLayout: false,
    shift: false,
    sound: true,
  },
  init() {
    // Create main elements
    this.elements.textInput = document.createElement('textarea');
    this.elements.textInput.classList.add('keyboard-input');

    document.body.appendChild(this.elements.textInput);
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.appendChild(this.createKeys());
    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');
    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
  },
  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = this.currentKeyLayout ? this.enKeyLayout : this.ruKeyLayout;
    // Creates HTML for an icon
    const createIconHTML = (iconName) => `<i class="material-icons">${iconName}</i>`;
    let i = 0;
    keyLayout.forEach((key) => {
      if (key !== 'br') {
        const keyElement = document.createElement('button');
        keyElement.butnName = i;

        // Add attributes/classes
        keyElement.setAttribute('type', 'button');
        keyElement.classList.add('keyboard__key');

        switch (key) {
          case 'backspace':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('backspace');

            //    keyElement.addEventListener('click', () => {
            //    this.soundClick('click');
            //  this.properties.value =
            //  this.properties.value.substring(0, this.properties.value.length - 1);
            //   this._triggerEvent('oninput');
            //  });

            break;

          case 'caps':
            keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
            keyElement.innerHTML = createIconHTML('keyboard_capslock');

            /* keyElement.addEventListener('click', () => {
            this.soundClick('func-click');
            this._toggleCapsLock();
            keyElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
          }); */

            break;
          case 'shift':
            keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
            // keyElement.innerHTML = createIconHTML("keyboard_capslock");
            keyElement.textContent = key.toLowerCase();

            /* keyElement.addEventListener('click', () => {
            this.soundClick('func-click');
            this._toggleShift();
            keyElement.classList.toggle('keyboard__key--active', this.properties.shift);
          }); */

            break;
          case 'enter':
            keyElement.classList.add('keyboard__key--wide');
            keyElement.innerHTML = createIconHTML('keyboard_return');

            /* keyElement.addEventListener('click', () => {
            this.soundClick('click');
            this.properties.value += '\n';
            this._triggerEvent('oninput');
          }); */

            break;

          case 'space':
            keyElement.classList.add('keyboard__key--extra-wide');
            keyElement.innerHTML = createIconHTML('space_bar');

            /* keyElement.addEventListener('click', () => {
            this.soundClick('click');
            this.properties.value += ' ';
            this._triggerEvent('oninput');
          }); */
            break;

          case 'lang':

            // this.currentKeyLayout=!this.currentKeyLayout;
            /*  keyElement.addEventListener('click', () => {
            this.soundClick('func-click');
            this._triggerChangeLayout();
          }); */

            keyElement.innerHTML = createIconHTML('language');
            // keyElement.textContent = key.toLowerCase();
            break;

          case 'vol':
            keyElement.innerHTML = createIconHTML('volume_up');

            /* keyElement.addEventListener('click', () => {
            this.properties.sound = !this.properties.sound;
            if (!this.properties.sound) keyElement.children[0].innerHTML = 'volume_off';
            else keyElement.children[0].innerHTML = 'volume_up';
          }); */
            // keyElement.textContent = key.toLowerCase();
            break;

          case 'ru':

            keyElement.textContent = key.toLowerCase();
            break;
          case 'en':

            keyElement.textContent = key.toLowerCase();
            break;
          default:
            keyElement.textContent = key.toLowerCase();

            /*  keyElement.addEventListener('click', () => {
            this._updateValue();
            this.properties.value += (this.properties.capsLock
            ^ this.properties.shift) ? keyElement.textContent.toUpperCase() :
            keyElement.textContent.toLowerCase();
            // this.properties.value+=keyElement.textContent;
            this.soundClick('click');
            this._triggerEvent('oninput');
          }); */

            break;
        }

        fragment.appendChild(keyElement);
      } else {
        fragment.appendChild(document.createElement('br'));
      }

      i += 1;
    });

    return fragment;
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});
