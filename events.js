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

webide.module("ace", function(settings, tabs){
    /**
     * Function to set options to Ace Editor 
     * 
     * @param string key
     * @param mixed value
     * @return void
     */
    settings.setAceEditor = function(key, value){
        settings.set(key, value);
        var tabsList = tabs.getAll();
        
        for(var keyTab in tabsList){
            if(typeof tabsList[keyTab].editor == "object"){
                if(value == "true") value = true;//Bugfix
                if(value == "false") value = false;//Bugfix

                if(!isNaN(parseInt(value)))
                    value = parseInt(value);
                                
                tabsList[keyTab].editor.setOption(key.replace("ace.editor.", ""), value);
            }
        }
    };
    
    /**
     * Function to set theme to Ace Editor
     * 
     * @param string theme
     * @returns void
     */
    settings.setAceEditorTheme = function(key, theme){
        settings.set(key, theme);
        var tabsList = tabs.getAll();
        
        for(var keyTab in tabsList){
            if(typeof tabsList[keyTab].editor == "object")
                tabsList[keyTab].editor.setTheme("ace/theme/" + theme);
        }
    };
});