// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

import { Event  } from "../types";
import ready from "./ready";
import interactionCreate from "./interactionCreate"
import messageCreate from "./massageCreate"


const events: Event<any>[] = [
    ...interactionCreate,
    ...messageCreate,
    ready,


]

export default events