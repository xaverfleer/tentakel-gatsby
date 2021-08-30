const allConverters = { isoDateToGermanDate: isoDateToGermanDate };
export default allConverters;

export function isoDateToGermanDate(isoDateTime) {
  const monthStrings = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  const isoDate = isoDateTime.split("T")[0];
  const [year, month, day] = isoDate.split("-");
  const monthStr = monthStrings[+month - 1];
  return `${day}. ${monthStr} ${year}`;
}
