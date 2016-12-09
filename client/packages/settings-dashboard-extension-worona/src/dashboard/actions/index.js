import stringifyError from 'stringify-error-message';
import * as types from '../types';

// Save settings actions:
export const saveSettingsRequested = (settings, woronaInfo) =>
  ({ type: types.SAVE_SETTINGS_REQUESTED, settings, woronaInfo });
export const saveSettingsStatusChanged = status =>
  ({ type: types.SAVE_SETTINGS_STATUS_CHANGED, status });
export const saveSettingsSucceed = ({ settingId }) =>
  ({ type: types.SAVE_SETTINGS_SUCCEED, settingId });
export const saveSettingsFailed = ({ errorObj }) =>
  ({ type: types.SAVE_SETTINGS_FAILED, error: stringifyError(errorObj) });

export const addSettingsRequested = ({ name, namespace, siteId }) =>
  ({ type: types.ADD_SETTINGS_REQUESTED, name, namespace, siteId });
export const addSettingsSucceed = ({ id, name, namespace, siteId }) =>
  ({ type: types.ADD_SETTINGS_SUCCEED, id, name, namespace, siteId });
export const addSettingsFailed = ({ error, name, namespace, siteId }) =>
  ({ type: types.ADD_SETTINGS_FAILED, error, name, namespace, siteId });

export const defaultSettingsNeeded = ({ name, siteId }) =>
  ({ type: types.DEFAULT_SETTINGS_NEEDED, name, siteId });
