import { Constants } from "./../config/constants";

export function getJobInfo(jobId) {
  return fetch(Constants.BASE_URL + Constants.ROUTES.JOB + "?jobId=" + jobId);
}
