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