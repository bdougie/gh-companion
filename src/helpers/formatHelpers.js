import moment from "moment";

export function formatTime(dateString) {
  return moment(dateString, 'YYYYMMDD').fromNow();
}
