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

(function(){
    /**
     * Function to set options to Ace Editor 
     * 
     * @param string key
     * @param mixed value
     * @return void
     */
    webide.settings.setAceEditor = function(key, value){
        webide.settings.set(key, value);
        var tabs = webide.tabs.getAll();
        
        for(var keyTab in tabs){
            if(typeof tabs[keyTab].editor == "object"){
                if(value == "true") value = true;//Bugfix
                if(value == "false") value = false;//Bugfix

                if(!isNaN(parseInt(value)))
                    value = parseInt(value);
                                
                tabs[keyTab].editor.setOption(key.replace("ace.editor.", ""), value);
            }
        }
    };
    
    /**
     * Function to set theme to Ace Editor
     * 
     * @param string theme
     * @returns void
     */
    webide.settings.setAceEditorTheme = function(key, theme){
        webide.settings.set(key, theme);
        var tabs = webide.tabs.getAll();
        
        for(var keyTab in tabs){
            if(typeof tabs[keyTab].editor == "object")
                tabs[keyTab].editor.setTheme("ace/theme/" + theme);
        }
    };
})();


