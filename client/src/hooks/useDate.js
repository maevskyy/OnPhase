import moment from 'moment/moment';
import { useState } from 'react';

export const useDate = (scope) => {
  moment.updateLocale('en', { week: { dow: 1 } });
  const [today, setToday] = useState(moment());

  const plus = () => setToday((prev) => prev.clone().add(1, scope))
  const minus = () => setToday((prev) => prev.clone().subtract(1, scope))
  const resetToday = () =>  setToday(moment())

  return [today, plus, minus, resetToday] 
};
