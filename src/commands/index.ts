import { boldCommand } from "./boldCommand";
import { codeCommand} from "./codeCommand";
import { headerCommand } from "./headerCommand";
import { imageCommand } from "./imageCommand";
import { italicCommand} from "./italicCommand";
import { linkCommand } from "./linkCommand";
import { orderedListCommand } from "./orderedCommand";
import { quoteCommand } from "./quoteCommand";
import { unorderedListCommand } from "./unorderedListCommand";
import {Command} from "../types";

const getDefaultCommands: () => Command[][] = () => [
    [headerCommand, boldCommand, italicCommand],
    [linkCommand, quoteCommand, codeCommand, imageCommand],
    [unorderedListCommand, orderedListCommand],
];

export {
    boldCommand,
    codeCommand,
    headerCommand,
    imageCommand,
    italicCommand,
    linkCommand,
    orderedListCommand,
    quoteCommand,
    unorderedListCommand,
    getDefaultCommands,
};
