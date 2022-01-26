import { useQuery, useQueryClient } from "react-query";
import { fetchLaunch } from "services/launches";

export function useLaunches(startDate, endDate, agency) {
  const query = useQuery(
    ["launches", { startDate, endDate, agency }],
    fetchLaunch
  );
  console.log({ query });
  return query;
}
