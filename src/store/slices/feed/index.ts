import {create} from 'zustand';
import {initialFeedStore} from './feed.utils';
import {IFeedStore} from './feed.types';
import {CURATED_INSTANCE} from 'services/api/feed/curated';

export const useFeedStore = create<IFeedStore>((set, get) => ({
  ...initialFeedStore,
  setLoading: (value: boolean) => set({loading: value}),
  setWait: (value: boolean) => set({wait: value}),
  fetchData: async () => {
    set({feedController: new AbortController()});
    const {setLoading, feedController} = get();

    const {response, status} = await CURATED_INSTANCE({
      query: '?page=1&per_page=30',
      setLoading,
      abort: feedController,
    });

    if (status === 200 || status) {
      set({data: response});
      return response;
    }

    return;
  },
  paginateData: async page => {
    set({feedController: new AbortController()});
    const {setWait, feedController, data} = get();

    const {response, status} = await CURATED_INSTANCE({
      query: `?page=${page}&per_page=30`,
      setLoading: setWait,
      abort: feedController,
    });

    if (status === 200 || status) {
      set({data: {...data, photos: [...data.photos, ...response.photos]}});
      return response;
    }

    return;
  },
  setSelectedFeed: select => {
    return set({selectedFeed: select});
  },
}));
