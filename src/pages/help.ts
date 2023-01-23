import {InteractionReplyOptions,  SelectMenuOptionBuilder, EmbedBuilder, StringSelectMenuBuilder, ActionRowBuilder, APIEmbedField, ButtonBuilder, ButtonStyle} from "discord.js"
import CategoryRoot from "../commands"
import { chunk, createId, readId } from "../utils"

// NameSpaces we will use
export const NameSpaces = {
    root: "help_categoty_root",
    select: "help_categoty_select",
    action:"help_categoty_action",
}

export const Actions = {
    next: "+",
    back: "-"
}

// Generate root embed for help paginator

export function getCategotyRoot(ephemeral?: boolean): InteractionReplyOptions {
    // map the categories 
    const MappedCategories = CategoryRoot.map(({ name, description, emoji}) => 
        new SelectMenuOptionBuilder({
            label: name,
            description,
            emoji,
            value: name
        })
    )
    // Create embed
    const embed = new EmbedBuilder()
        .setTitle("Help Many")
        .setDescription("Browse thrugh all commands.")


    //create sleact meny for categorees
    const selectId = createId(NameSpaces.select)
    const select = new StringSelectMenuBuilder()
        .setCustomId(selectId)
        .setPlaceholder("Command Category")
        .setMaxValues(1)
        .setOptions(MappedCategories)

    const component = new ActionRowBuilder<StringSelectMenuBuilder>()
        .addComponents(select)

    return {
        embeds: [embed],
        components: [component],
        ephemeral,
    }    
}


// Generate new embed fir current category page

export function getCategotyPage(interactionId: string): InteractionReplyOptions {
    // Extract needed metadata from interctionId

    const [_namespace, categoryName, action, currentOffset] = readId(interactionId)

    const CategoryChunks = CategoryRoot.map((c) => {
        // pre-map all commands as embed fields
        const commands: APIEmbedField[] = c.commands.map((c) => ({
            name: c.meta.name,
            value: c.meta.description,
        }))
        return {
            ...c,
            commands: chunk(commands, 10),
        }
    })

    const category = CategoryChunks.find(({ name }) => name === categoryName)
    if(!category)
        throw new Error("Invalid interactionId; Failed to find corresoinding category page")

    //  Get current offset
    let offset = parseInt(currentOffset)
    // if is NaN set offset to 0

    if(isNaN(offset)) offset = 0
    // Increment offset accorfing to action
    if(action === Actions.next) offset++
    else if (action === Actions.back) offset--

    const emoji = category.emoji ? `${category.emoji}` : ""
    const defaultDescription = `Browse through ${category.commands.flat().length} commands in ${emoji}${category.name}`

    const embed = new EmbedBuilder()
        .setTitle(`${emoji}${category.name} Commands`)
        .setDescription(category.description ?? defaultDescription)
        .setFields(category.commands[offset])
        .setFooter({ text: `${offset + 1} / ${category.commands.length}`})


    //Back button
    const backId = createId(NameSpaces.action, category.name, Actions.back, offset)
    const backButton = new ButtonBuilder()
        .setCustomId(backId)
        .setLabel("Back")
        .setStyle(ButtonStyle.Danger)
        .setDisabled(offset <= 0 )

    // return to root 
    const rootId = createId(NameSpaces.root)
    const rootButton = new ButtonBuilder()
        .setCustomId(rootId)
        .setLabel("Categories")
        .setStyle(ButtonStyle.Secondary)


    // next button
    const nextId = createId(NameSpaces.action, category.name, Actions.next, offset)
    const nextButton = new ButtonBuilder()
        .setCustomId(nextId)
        .setLabel("Next")
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(offset >= category.commands.length -1 )

    const component = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(backButton, rootButton, nextButton)

        return {
            embeds: [embed],
            components: [component]
        }
}