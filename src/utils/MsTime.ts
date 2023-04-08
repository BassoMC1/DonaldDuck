// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

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