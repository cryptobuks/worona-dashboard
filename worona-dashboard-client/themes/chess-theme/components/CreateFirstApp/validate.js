import urlValidator from 'url-regexp';

export const config = {
  titleMax: 15,
  passwordMin: 8,
};

export const messages = {
  required: 'Required',
  maxChar: maxChar => `Must be ${maxChar} characters or less`,
  invalidUrl: 'Invalid url. It should be something like: http://www.mydomain.com.',
};

export const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = messages.required;
  } else if (values.title.length > 15) {
    errors.title = messages.maxChar(15);
  }
  if (!values.url) {
    errors.url = messages.required;
  } else if (!urlValidator.validate(values.url)) {
    errors.url = messages.invalidUrl;
  }
  return errors;
};