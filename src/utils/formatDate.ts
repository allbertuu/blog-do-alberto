import { format } from 'date-fns';

const formatDate = (date: string | number) =>
    format(new Date(date), "dd/MM/yy 'às' HH:mm");

export default formatDate;
