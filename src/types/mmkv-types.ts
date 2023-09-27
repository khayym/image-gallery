export interface IImageMMKV {
  (method: 'get'): Promise<any>;
  (method: 'set', data: any): void;
}
