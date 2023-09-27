import {Method, AxiosRequestConfig} from 'axios';

export type Headers = {
  'Content-Type': string;
  Authorization?: string;
  signal?: any;
};
interface ConfigFactoryArguments {
  method: Method;
  url: string;
  data?: any;
  query?: string;
  abort?: any;
}

export type IConfigFactory = (
  args: ConfigFactoryArguments,
) => AxiosRequestConfig<any>;

const POST: Method = 'post';
const PATCH: Method = 'patch';
const PUT: Method = 'put';

export const METHODS_WITH_BODY: Method[] = [POST, PATCH, PUT];
