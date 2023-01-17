export const formatNumber = (number: number) => {
    const formattedNumber = new Intl.NumberFormat('en', {
        notation: 'compact',
        minimumFractionDigits: 1,
    }).format(number);
    return formattedNumber;
};
