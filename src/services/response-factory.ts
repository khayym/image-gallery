import axios, {AxiosRequestConfig} from 'axios';

type ApiResponse = {
  response: any;
  status: number;
};

export const responseFactory = async (
  config: AxiosRequestConfig,
): Promise<ApiResponse> => {
  try {
    const response = await axios(config);
    return {
      response: response.data,
      status: response.status,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        response: error.response?.data?.message || 'Unknown error',
        status: error.response?.status || 500,
      };
    }
    throw error;
  }
};
