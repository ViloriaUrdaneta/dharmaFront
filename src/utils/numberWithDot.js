export const numberWithDots = (x) => {
    if (typeof x !== 'number' || isNaN(x)) {
        return '00';
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}