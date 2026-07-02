import { reports } from '../utils/climafyData';

export function useClimateReports() {
  return {
    reports,
    totalReports: reports.length,
  };
}
