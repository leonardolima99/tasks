import AsyncStorage from '@react-native-community/async-storage';

export type DayArrayProps = {
  day: number;
  week: number;
  month: number;
  year: number;
  unfocused?: boolean;
  highlight?: boolean;
};

export type DaysProps = DayArrayProps[];

const handlePopulateArrayDate = (
  arrayMonth: Array<{}>,
  currentDay: Date,
  date: Date,
) => {
  const today = new Date();

  let dayForArray: DayArrayProps = {
    day: currentDay.getDate(),
    week: currentDay.getDay(),
    month: currentDay.getMonth(),
    year: currentDay.getFullYear(),
  };

  if (
    today.getDate() === dayForArray.day &&
    today.getMonth() === dayForArray.month &&
    today.getFullYear() === dayForArray.year
  ) {
    arrayMonth.push({
      ...dayForArray,
      highlight: true,
    });
  } else if (date.getMonth() !== currentDay.getMonth()) {
    arrayMonth.push({
      ...dayForArray,
      unfocused: true,
    });
  } else {
    // adiciona o dia com mês e semana no array
    arrayMonth.push(dayForArray);
  }

  currentDay = new Date(currentDay.setDate(currentDay.getDate() + 1));
};

const getWeeksDays = (language: string) => {
  const pt_BR = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
  const en_US = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  if (language === 'pt-BR') {
    return pt_BR;
  } else {
    return en_US;
  }
};

const buildCalendar = (date2: Date): DaysProps => {
  let arrayMonth: DaysProps = [];
  console.log('start', date2);
  const date = new Date(date2);
  const time = date.getTime();

  // pega o último dia do mes atual
  // E guarda em lastDay
  date2.setMonth(date2.getMonth() + 1);
  date2.setDate(1);

  const lastDay = new Date(date2.setDate(date2.getDate() - 1));

  // Define o dia para o primeiro do mês
  date2.setDate(1);

  // verifica se o primeiro dia é no meio da semana
  if (date2.getDay() + 1 > date2.getDate()) {
    // define o dia para o primeiro dia dessa semana
    date2.setDate(date2.getDate() - date2.getDay());
  }

  let currentDay = date2;

  while (currentDay <= lastDay) {
    handlePopulateArrayDate(arrayMonth, currentDay, date);
  }

  if (currentDay.getDay() !== 0) {
    for (let i = currentDay.getDay(); i <= 6; i++) {
      handlePopulateArrayDate(arrayMonth, currentDay, date);
    }
  }
  /* currentDay.setMonth(currentDay.getMonth() - 1); */
  currentDay.setTime(time); // Para voltar na data atual.

  return arrayMonth;
};

const setupCalendar = async (date: Date) => {
  /* const date = new Date(); */
  let date2 = date;
  console.log('function', date2);
  const storedLanguage = (await AsyncStorage.getItem('language')) as string;

  const monthNameLower = date.toLocaleDateString(storedLanguage || 'en-US', {
    month: 'long',
  });

  const monthName =
    monthNameLower.charAt(0).toUpperCase() + monthNameLower.slice(1);

  const header = `${monthName} ${date.getFullYear()}`;

  const weekNames = getWeeksDays(storedLanguage);

  const arrayMonth = buildCalendar(date2);

  return {header, weekNames, days: arrayMonth};
};

export default setupCalendar;
