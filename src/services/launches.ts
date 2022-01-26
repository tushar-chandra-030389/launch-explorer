import axios from "axios";

import CONFIG from "config";

type fetchLaunchParams = [
  string,
  {
    startDate: string;
    endDate: string;
    agency: string;
  }
];

export type LaunchResult = {
  id: string;
  pad: {
    latitude: string;
    longitude: string;
  };
};

type Response = {
  results: LaunchResult[];
};

export async function fetchLaunch({
  queryKey,
}: {
  queryKey: fetchLaunchParams;
}) {
  const [_key, { startDate, endDate, agency }] = queryKey;
  console.log({ startDate, endDate, agency });
  const result = await axios.get<Response>(`${CONFIG.LAUNCH_API_URL}`, {
    params: {
      window_start__gte: startDate,
      window_end__lte: endDate,
      name: agency,
    },
  });
  return result.data.results;
}
