// @ts-ignore
import PersianDate from "persian-date";

export const unixToPersianDate = (
  unix: number | string,
  showClock?: boolean
) => {
  if (unix) {
    return new PersianDate.unix(Number(unix) / 1000).format(
      showClock ? "HH:mm - YYYY/MM/DD" : "YYYY/MM/DD"
    );
  }

  return "-";
};
