import { dep } from 'worona-deps';

export const libs = {
  get call() { return dep('connection', 'libs', 'call'); },
  get loginWithPassword() { return dep('connection', 'libs', 'loginWithPassword'); },
  get loggedInEventChannel() { return dep('connection', 'libs', 'loggedInEventChannel'); },
  get loggedOutEventChannel() { return dep('connection', 'libs', 'loggedOutEventChannel'); },
  get logout() { return dep('connection', 'libs', 'logout'); },
  get push() { return dep('router', 'libs', 'push'); },
};

export const types = {
  get CONNECTION_SUCCEED() { return dep('connection', 'types', 'CONNECTION_SUCCEED'); },
  get ROUTER_DID_CHANGE() { return dep('router', 'types', 'ROUTER_DID_CHANGE'); },
};

export const selectors = {
  get getIsConnected() { return dep('connection', 'selectors', 'getIsConnected'); },
};
