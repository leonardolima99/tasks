export default function formatDate(
  d: Date,
  type: 'string' | 'isoDate' | 'filter',
  locale: string,
  start: boolean = false,
  end: boolean = false,
): string | {dateStart: Date; dateEnd: Date} {
  let config = {
    options: {
      weekday: 'short' as 'short' | 'long' | 'narrow' | undefined,
      month: 'short' as 'short' | 'long' | 'narrow' | undefined,
    },
  };

  if (type === 'string') {
    let day = d.getDate();
    let [month, week] = d.toLocaleDateString(locale, config.options).split(' ');

    month = month === 'mai' ? month.replace('mai', 'maio') : month;
    month = month.charAt(0).toUpperCase() + month.slice(1);
    week = week.charAt(0).toUpperCase() + week.slice(1);
    let year = d.getFullYear();

    return `${week}, ${day} ${month} ${year}`;
  } else if (type === 'isoDate') {
    d.setTime(d.getTime() - d.getTimezoneOffset() * 60 * 1000);

    return d.toISOString().substring(0, 10);
  } else if (start && end && type === 'filter') {
    let dateStart = d;
    dateStart.setHours(0);
    dateStart.setMinutes(0);
    dateStart.setSeconds(0);
    dateStart.setMilliseconds(0);
    dateStart = new Date(dateStart.getTime());

    let dateEnd = d;
    dateEnd.setHours(23);
    dateEnd.setMinutes(59);
    dateEnd.setSeconds(59);
    dateEnd.setMilliseconds(999);

    return {dateStart, dateEnd};
  } else {
    return '2025-12-24';
  }
}
