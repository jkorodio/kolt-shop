import moment from 'moment';

export function formatDate(date, format, isInvalidValue) {
    var curr = new Date();
    if (date !== false && date !== undefined) {
        curr = new Date(date);
    }

    if (date === null) {
        return isInvalidValue !== undefined ? moment(isInvalidValue).format(format) : "";
    }
    else if (isInvalidValue === "date-no-min-check") {
        return moment(date).format(format);
    }
    else if (new Date(date) < new Date("1753-01-01")) {
        return isInvalidValue !== undefined ? moment(isInvalidValue).format(format) : "";
    }
    else if (format !== undefined && format !== '') {
        return moment(date).format(format);
    }
    else {
        return curr.getFullYear() + '-' + ('0' + (curr.getMonth() + 1)).slice(-2) + '-' + ('0' + curr.getDate()).slice(-2);
    }
}