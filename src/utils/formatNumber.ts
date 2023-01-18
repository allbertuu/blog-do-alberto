export const formatNumber = (number: number) => {
    const formattedNumber = new Intl.NumberFormat('en', {
        notation: 'compact',
    }).format(number);
    return formattedNumber;
};
