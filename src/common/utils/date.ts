import { format as dateFormat, formatDistance as dateFormatDistance } from 'date-fns';
import { zhCN } from 'date-fns/locale';

type DateFnsInput = number | Date;

export const formatDistance = (date: DateFnsInput, baseDate: DateFnsInput): string => dateFormatDistance(date, baseDate, { locale: zhCN, includeSeconds: true });
export const format = (date: DateFnsInput, formatString: string): string => dateFormat(date, formatString, { locale: zhCN });
