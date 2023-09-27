import {MMKVLoader} from 'react-native-mmkv-storage';
import {IImageMMKV} from 'types/mmkv-types';

export const storage = new MMKVLoader().initialize();

export const imageMMKV: IImageMMKV = async (method, data?) => {
  if (method === 'get') {
    const images = await storage.getArrayAsync('images');
    return images ?? [];
  }

  if (!data.id) {
    throw new Error("Data to be set must have an 'id' property.");
  }

  if (method === 'set') {
    const images = (await storage.getArrayAsync('images')) ?? [];
    const dataExists = images.some((image: any) => image.id === data.id);

    if (!dataExists) {
      const arr = [...images, data];
      storage.setArray('images', arr);
      return arr;
    } else {
      return images;
    }
  }

  throw new Error(`Unsupported method in when imageMMKV: ${method}`);
};
