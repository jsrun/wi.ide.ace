/**
 *  __          __  _    _____ _____  ______                    
 *  \ \        / / | |  |_   _|  __ \|  ____|     /\            
 *   \ \  /\  / /__| |__  | | | |  | | |__       /  \   ___ ___ 
 *    \ \/  \/ / _ \ '_ \ | | | |  | |  __|     / /\ \ / __/ _ \
 *     \  /\  /  __/ |_) || |_| |__| | |____ _ / ____ \ (_|  __/
 *      \/  \/ \___|_.__/_____|_____/|______(_)_/    \_\___\___|
 *                                                                                          
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 */

"use strict";

module.exports = (_this) => {    
    //Editor Options
    _this.settings.addSettingItem("Code Editor (Ace)", "Editor Options", "ace.editor.selectionStyle", "Selection Style", "option", "line", "line:Line|text:Text", "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Editor Options", "ace.editor.highlightActiveLine", "Highlight Active Line", "boolean", true, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Editor Options", "ace.editor.highlightSelectedWord", "Highlight Selected Word", "boolean", true, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Editor Options", "ace.editor.cursorStyle", "Cursor Style", "option", "ace", "ace:Ace|slim:Slim|smooth:Smooth|wide:Wide", "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Editor Options", "ace.editor.behavioursEnabled", "Behaviours Enabled", "boolean", true, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Editor Options", "ace.editor.wrapBehavioursEnabled", "Wrap Behaviours Enabled", "boolean", true, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Editor Options", "ace.editor.autoScrollEditorIntoView", "Auto Scroll Editor Into View", "boolean", false, null, "webide.settings.setAceEditor");
    
    //Renderer Options
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.hScrollBarAlwaysVisible", "Horizontal ScrollBar Always Visible", "boolean", false, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.vScrollBarAlwaysVisible", "Vertical ScrollBar Always Visible", "boolean", false, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.highlightGutterLine", "Highlight Gutter Line", "boolean", true, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.animatedScroll", "Animated Scroll", "boolean", false, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.showInvisibles", "Show Invisibles", "boolean", false, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.showPrintMargin", "Show Print Margin", "boolean", true, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.printMarginColumn", "Print Margin Column", "number", 80, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.printMargin", "Print Margin", "number", 80, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.fadeFoldWidgets", "Fade Fold Widgets", "boolean", false, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.showFoldWidgets", "Show Fold Widgets", "boolean", true, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.showLineNumbers", "Show Line Numbers", "boolean", true, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.showGutter", "Show Gutter", "boolean", true, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.displayIndentGuides", "Display Indent Guides", "boolean", true, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.fontSize", "Font Size", "number", 12, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.fontFamily", "Font Family", "fontfamily", "", null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.scrollPastEnd", "Scroll Past End", "number", 0, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Renderer Options", "ace.editor.theme", "Theme", "option", "twilight", "ambiance:Ambiance|chaos:Chaos|chrome:Chrome|clouds:Clouds|clouds_midnight:Clouds Midnight|cobalt:Cobalt|crimson_editor:Crimson Editor|dawn:Dawn|dreamweaver:Dreamweaver|eclipse:Eclipse|github:Github|idle_fingers:idle Fingers|iplastic:IPlastic|katzenmilch:KatzenMilch|kr_theme:krTheme|kuroir:Kuroir|merbivore:Merbivore|merbivore_soft:Merbivore Soft|mono_industrial:Mono Industrial|monokai:Monokai|pastel_on_dark:Pastel on dark|solarized_dark:Solarized Dark|solarized_light:Solarized Light|sqlserver:SQL Server|terminal:Terminal|textmate:TextMate|tomorrow:Tomorrow|tomorrow_night:Tomorrow Night|tomorrow_night_blue:Tomorrow Night Blue|tomorrow_night_bright:Tomorrow Night Bright|tomorrow_night_eighties:Tomorrow Night 80s|twilight:Twilight|vibrant_ink:Vibrant Ink|xcode:XCode", "webide.settings.setAceEditorTheme");
    
    //MouseHandler Options   
    _this.settings.addSettingItem("Code Editor (Ace)", "Mouse Handler Options", "ace.editor.scrollSpeed", "Show Print Margin", "number", 2, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Mouse Handler Options", "ace.editor.focusTimout", "Focus Timout", "number", 0, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Mouse Handler Options", "ace.editor.tooltipFollowsMouse", "Tooltip Follows Mouse", "boolean", true, null, "webide.settings.setAceEditor");
    
    //Session Options
    _this.settings.addSettingItem("Code Editor (Ace)", "Session Options", "ace.editor.firstLineNumber", "First Line Number", "number", 1, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Session Options", "ace.editor.overwrite", "Overwrite", "boolean", false, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Session Options", "ace.editor.newLineMode", "New Line Mode", "option", "auto", "auto:Auto|windows:Windows (CRLF)|unix:Unix (LF)", "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Session Options", "ace.editor.useWorker", "Use Worker", "boolean", true, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Session Options", "ace.editor.useSoftTabs", "Use Soft Tabs", "boolean", true, null, "webide.settings.setAceEditor");
    _this.settings.addSettingItem("Code Editor (Ace)", "Session Options", "ace.editor.tabSize", "Tab Size", "number", 4, null, "webide.settings.setAceEditor");
    
    /**
     * Default Keyboard Shortcuts
     * @see https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts
     */
    
    //Line Operations
    _this.commands.addCommand({name: "editor:line:removeline", bind: {mac: "Command-D", win: "Ctrl-D"}, element: ".ace_editor", description: "Remove line"});
    _this.commands.addCommand({name: "editor:line:copylinesdown", bind: {mac: "Command-Option-Down", win: "Alt-Shift-Down"}, element: ".ace_editor", description: "Copy lines down"});
    _this.commands.addCommand({name: "editor:line:copylinesup", bind: {mac: "Command-Option-Up", win: "Alt-Shift-Up"}, element: ".ace_editor", description: "Copy lines up"});
    _this.commands.addCommand({name: "editor:line:movelinesdown", bind: {mac: "Option-Down", win: "Alt-Down"}, element: ".ace_editor", description: "Move lines down"});
    _this.commands.addCommand({name: "editor:line:movelinesup", bind: {mac: "Option-Up", win: "Alt-Up"}, element: ".ace_editor", description: "Move lines up"});
    _this.commands.addCommand({name: "editor:line:removetolineend", bind: {mac: "Ctrl-K", win: "Alt-Delete"}, element: ".ace_editor", description: "Remove to line end"});
    _this.commands.addCommand({name: "editor:line:removetolinestart", bind: {mac: "Command-Backspace", win: "Alt-Backspace"}, element: ".ace_editor", description: "Remove to linestart"});
    _this.commands.addCommand({name: "editor:line:removewordleft", bind: {mac: "Option-Backspace", win: "Ctrl-Backspace"}, element: ".ace_editor", description: "Remove word left"});
    _this.commands.addCommand({name: "editor:line:removewordright", bind: {mac: "Option-Delete", win: "Ctrl-Delete"}, element: ".ace_editor", description: "Remove word right"});
    _this.commands.addCommand({name: "editor:line:splitline", bind: {mac: "Ctrl-O"}, element: ".ace_editor", description: "Split line"});
    
    //Selection
    //Multicursor
    //Go to
    //Find/Replace
    //Folding
    //Other
};