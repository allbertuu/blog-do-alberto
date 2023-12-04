import { format } from 'date-fns';

const formatDate = (date: string | number) => {
  const fDate = new Date(date);
  return format(fDate, "dd/MM/yy 'às' HH:mm");
};

export default formatDate;
