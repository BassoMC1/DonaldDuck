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