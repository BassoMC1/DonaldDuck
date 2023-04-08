// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************


//Takes an array of items and chunck items into a matrix.
//Useful for offset based pagination.

export function chunk<T>(items: T[], chunk: number) : T[][] {
    // Initalalize the matrix
    const chunks: T[][] = []

    //For loop, loop unitl i is more thne our items availavle. Incremet by the given chunk
    // Each interaction copy push targetd chunk from the passed items to the chnks array
    for(let i = 0; i < items.length; i += chunk) {
        chunks.push(items.slice(i, i + chunk))   
    }
    return chunks
}