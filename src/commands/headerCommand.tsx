import * as React from "react";
import {Command} from "../types";
import {makeHeader} from "../util/MarkdownUtil";
import {MdeToolbarIcon} from "../components";

export const headerCommand: Command = {
    buttonContent: <MdeToolbarIcon icon="heading"/>,
    buttonProps: { "aria-label": "Add header" },
    children: [
        {
            buttonContent: <p className="header-1">Header</p>,
            execute: (getMarkdownState, setMarkdownState) => {
                const {text, selection} = getMarkdownState();
                setMarkdownState(makeHeader({text, selection}, "# "));
            },
        },
        {
            buttonContent: <p className="header-2">Header</p>,
            execute: (getMarkdownState, setMarkdownState) => {
                const {text, selection} = getMarkdownState();
                setMarkdownState(makeHeader({text, selection}, "## "));
            },
        },
        {
            buttonContent: <p className="header-3">Header</p>,
            execute: (getMarkdownState, setMarkdownState) => {
                const {text, selection} = getMarkdownState();
                setMarkdownState(makeHeader({text, selection}, "### "));
            },
        },
    ],
};
