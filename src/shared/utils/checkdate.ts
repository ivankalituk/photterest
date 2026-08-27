
// From now
export const validateDate = (date: string) => {
    if (!date) {
        return false;
    }

    const selectedDate = new Date(date);
    const today = new Date();

    return selectedDate <= today;
};