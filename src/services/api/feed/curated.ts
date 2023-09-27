import {configFactory} from 'services/config-factory';
import {responseFactory} from 'services/response-factory';
import {CURATED_ENDPOINT} from 'services/endpoints';

type CuratedArguments = {
  query: string;
  setLoading:
    | React.Dispatch<React.SetStateAction<boolean>>
    | ((value: boolean) => void);
  abort?: AbortSignal;
};

type ICuratedInstance = (args: CuratedArguments) => Promise<any>;

export const CURATED_INSTANCE: ICuratedInstance = async ({
  query,
  setLoading,
  abort,
}) => {
  setLoading(true);

  const config = configFactory({
    method: 'get',
    url: CURATED_ENDPOINT,
    query,
    abort,
  });

  const response = await responseFactory(config);
  setLoading(false);
  return response;
};
