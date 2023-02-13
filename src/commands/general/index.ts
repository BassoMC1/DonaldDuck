import { category } from "../../utils"
import help from "./help"
import echo from "./echo"
import poll from "./poll"

export default category("General", [
    help,
    echo,
    poll,
])