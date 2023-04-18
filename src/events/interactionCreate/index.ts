// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

import { Event } from "../../types";
import commands from "./commands";
import help from "./help";
import setup from "./Setup"
const events: Event<any>[] = [
    commands,
    help,
    ...setup
]

export default events