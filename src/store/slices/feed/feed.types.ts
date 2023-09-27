export type IFeedStore = {
  data: any | null;
  selectedFeed: any | null;
  loading: boolean;
  wait: boolean;
  feedController: any;
  fetchData: () => Promise<PexelsResponse[]>;
  paginateData: (page: number) => Promise<PexelsResponse[]>;
  setSelectedFeed: (select: Photo | null) => void;
  setLoading: (value: boolean) => void;
  setWait: (value: boolean) => void;
};

interface PhotoSource {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: PhotoSource;
  liked: boolean;
  alt: string;
}

export interface PexelsResponse {
  page: number;
  per_page: number;
  photos: Photo[];
  next_page: string;
}
