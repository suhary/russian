import { areArraysEqual } from '@/utils';

export class BasePrompt {
  static get type() {
    throw new TypeError('Must override "type()"');
  }

  static get default() {
    throw new TypeError('Must override "default()"');
  }

  static areEqualByContent() {
    throw new TypeError('Must override "areEqualByContent()"');
  }
}

//
// Normalizers and Defaults
//

const optionDefault = '';
const optionsDefault = [];
const textDefault = '';

function normalizeOption(value) {
  if (!value) {
    return optionDefault;
  }

  return value;
}

function normalizeOptions(value) {
  if (!value) {
    return optionsDefault;
  }

  return [...value].sort();
}

function normalizeText(value) {
  if (!value) {
    return textDefault;
  }

  return value.toLowerCase();
}

//
// Option Prompts
//

export class CheckboxPrompt extends BasePrompt {
  constructor(options) {
    super();

    this.options = [...options];
  }

  static get type() {
    return 'checkbox';
  }

  static get default() {
    return optionsDefault;
  }

  static areEqualByContent(v1, v2) {
    return areArraysEqual(normalizeOptions(v1), normalizeOptions(v2));
  }
}

export class RadioPrompt extends BasePrompt {
  constructor(options) {
    super();

    this.options = [...options];
  }

  static get type() {
    return 'radio';
  }

  static get default() {
    return optionDefault;
  }

  static areEqualByContent(v1, v2) {
    return normalizeOption(v1) === normalizeOption(v2);
  }
}

export class ButtonPrompt extends BasePrompt {
  constructor(options) {
    super();

    this.options = [...options];
  }

  static get type() {
    return 'button';
  }

  static get default() {
    return optionDefault;
  }

  static areEqualByContent(v1, v2) {
    return normalizeOption(v1) === normalizeOption(v2);
  }
}

//
// Other Prompts
//

export class TextPrompt extends BasePrompt {
  constructor(placeholder) {
    super();

    this.placeholder = placeholder;
  }

  static get type() {
    return 'text';
  }

  static get default() {
    return textDefault;
  }

  static areEqualByContent(v1, v2) {
    return normalizeText(v1) === normalizeText(v2);
  }
}

export class NullPrompt extends BasePrompt {
  static get type() {
    return 'null';
  }

  static get default() {
    return null;
  }

  static areEqualByContent() {
    return null;
  }
}
