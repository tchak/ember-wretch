import wretch from 'wretch';
import fetch, { FormData } from 'fetch';
import { URLSearchParams } from 'url';

export default {
  name: 'install-wretch-polyfills',
  initialize() {
    wretch().polyfills({
      fetch,
      FormData,
      URLSearchParams
    });
  }
};
