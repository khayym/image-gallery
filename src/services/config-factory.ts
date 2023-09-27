import {AxiosRequestConfig} from 'axios';
import {Headers, IConfigFactory, METHODS_WITH_BODY} from 'types/services-types';
import {API_KEY} from './endpoints';

export const configFactory: IConfigFactory = ({
  method,
  url,
  data,
  query,
  abort,
}) => {
  let headers: Headers = {
    'Content-Type': 'application/json',
    Authorization: API_KEY,
  };

  const configs: AxiosRequestConfig<any> = {
    method,
    url,
    headers,
  };

  if (query) {
    Object.assign(configs, {url: `${configs.url}/${query}`});
  }

  if (abort) {
    Object.assign(configs, {signal: abort.signal});
  }

  if (METHODS_WITH_BODY.includes(method)) {
    Object.assign(configs, {data});
  }

  return configs;
};
