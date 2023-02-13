export function MsTime(value: string) {
    if(value === "Years") {
        return 31557600000
    } else if(value === "Months") {
        return 2629800000
    } else if(value === "Weeks") {
        return 604800000
    } else if(value === "Days") {
        return 86400000
    } else if(value === "Hours") {
        return 3600000
    } else if(value === "Minute") {
        return 60000
    } else if(value === "Seconds") {
        return 1000
    }
}