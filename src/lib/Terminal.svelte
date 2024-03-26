<script>
    import { onMount } from 'svelte';

    let text = '';
    let text_in_array = [];
    let history = [];
    let json_container = [];
    let history_counter = 1;
    let special_keys_list = ['CapsLock', 'Backspace', 'Shift', 'ArrowUp', 'ArrowDown', 'Control', 'Alt', 'AltGraph', 'Enter', 'ArrowRight', 'ArrowLeft'];
    let commands = {
        'ls': `<b>projects.txt</b> &nbsp;&nbsp;&nbsp; <b>about.me</b> &nbsp;&nbsp;&nbsp; <b>social.txt</b> &nbsp;&nbsp;&nbsp <b>cv.pdf</b>`, // Add your file list here
        'cat': {
            'projects.txt': `

DEVOTEAM
- Job Title: Full Stack Developer
- Employment Type: Work Study
- Duration: May 2023 - Present (11 months)
- Location: Frankfurt, Hesse, Germany (Remote)
- Tools: Bash, Java, JavaScript, Docker etc

MEETYOO
- Job Title: Technical Operations Manager
- Employment Type: Work Study
- Duration: Jan 2022 - Apr 2023 (1 year 4 months)
- Location: Berlin, Germany
- Tools: Python (programming language), XML

- Job Title: IT Support & Configuration
- Employment Type: Work Study
- Duration: Sept 2020 - Jan 2022 (1 year 5 months)
- Tools: Python (programming language), XML

`.replace(/\n/g, '<br>'), // Replace newlines with HTML line breaks
            'about.me': `

<b>Name:</b> Mehdi
<b>Occupation:</b> IT Enthusiast
<b>Current Position:</b> Fullstack Developer

<b>Summary:</b>
I am an IT enthusiast with a background in information technology. 
Currently, I work as a Fullstack Developer with professional experience in creating tools to automate working processes. 

If you need further information, feel free to <a href="mailto:mjebali.dev@gmail.com">contact me</a>.

`.replace(/\n/g, '<br>'), // Replace newlines with HTML line breaks
            'social.txt': `
            
<b>GitHub</b>: <a href="https://github.com/mjebalidev" target="_blank">Click me</a>

<b>LinkedIn</b>: <a href="https://www.linkedin.com/in/mjebali/" target="_blank">Click me</a>

`.replace(/\n/g, '<br>') // Replace newlines with HTML line breaks
        },
        'man': `

        <b>Manual:</b>

        <b>man</b>: Displays the manual.
        <b>ls</b>: Lists the current files.
        <b>clear</b>: Clears the terminal.
        <b>download</b> &lt;file&gt;: Downloads a file.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example: download cv.pdf
        <b>cat</b> &lt;file&gt;: Displays the current file text.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example: cat myprojects.txt
        
        `.replace(/\n/g, '<br>')
    };

    let currentCommandIndex = -1;
    let currentCommand = '';
    let cursorVisible = true;

    function handleEvents(event) {
        let key = event.key;
        let code = event.code;
        let ctrlPressed = event.ctrlKey; // Check if CTRL key is pressed
        console.log('key: ' + key + ' code: ' + code);

        if (ctrlPressed && key === 'c') {
            // Handle CTRL + C combination
            logToTerminal("^C")
            // Add your logic for CTRL + C combination here
        } else if (key === 'Backspace') {
            if (text_in_array.length > 0) {
                text_in_array.pop();
                text = text_in_array.join('');
            }
        } else if (key === 'Tab') {
            event.preventDefault(); // Prevent default Tab behavior
            //autocompleteCommand();
        } else if (!special_keys_list.includes(key)) {
            text_in_array.push(key);
            text = text_in_array.join('');
        }

        if (key === 'Enter') {
            executeCommand(text);
        } else if (key === 'ArrowUp') {
            navigateHistory(1);
        } else if (key === 'ArrowDown') {
            navigateHistory(-1);
        }
    }

    function executeCommand(command) {
        history.push(command);
        json_container = history.map((entry, index) => ({ key: index + 1, content: entry }));
        
        if (command === 'clear') {
            clearTerminal();
        } else if (command === 'download cv.pdf') {
            downloadFile('cv.pdf');
            logToTerminal("Downloading cv.pdf ...");
        } else if (command === 'download projects.txt') {
            downloadFile('projects.txt');
            logToTerminal("Downloading projects.txt ...");
        } else if (command === 'download about.me') {
            downloadFile('about.me');
            logToTerminal("Downloading about.me ...");
        } else if (command === 'download social.txt') {
            downloadFile('social.txt');
            logToTerminal("Downloading social.txt ...");
        }
        else if (command === ""){
            //logToTerminal("")
        }
        else {
            let parts = command.split(' ');
            let action = parts[0];
            let args = parts.slice(1);

            if (commands[action]) {
                if (typeof commands[action] === 'string') {
                    logToTerminal(commands[action]);
                } else if (typeof commands[action] === 'object') {
                    let target = args[0];
                    if (commands[action][target]) {
                        logToTerminal(commands[action][target]);
                    } else {
                        logToTerminal(`cat: ${target}: No such file or directory`);
                    }
                }
            } else {
                logToTerminal(`${action}: command not found`);
            }
        }

        text = '';
        text_in_array = [];
        currentCommandIndex = -1;
        currentCommand = '';
    }

    function downloadFile(filename) {
        // Simulate file download
        const link = document.createElement('a');
        link.href = '/public/'+ filename; // Replace with the actual file URL
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function autocompleteCommand() {
        let availableCommands = Object.keys(commands);
        let inputCommand = text.trim().split(' ')[0];

        if (inputCommand === '') {
            return; // No command entered yet
        }

        let matchedCommands = availableCommands.filter(command => command.startsWith(inputCommand));
        if (matchedCommands.length === 1) {
            // Autocomplete the command
            text = matchedCommands[0];
        } else if (matchedCommands.length > 1) {
            // Display available options
            logToTerminal(matchedCommands.join(' '));
        }
    }

    function clearTerminal() {
        text = '';
        text_in_array = [];
        history = [];
        json_container = [];
        history_counter = 1;
    }

    function navigateHistory(direction) {
        let newIndex = currentCommandIndex + direction;
        if (newIndex >= 0 && newIndex < history.length) {
            currentCommandIndex = newIndex;
            currentCommand = history[currentCommandIndex];
            text = currentCommand;
            text_in_array = currentCommand.split('');
        } else if (newIndex === -1) {
            currentCommandIndex = -1;
            currentCommand = '';
            text = '';
            text_in_array = [];
        }
    }

    function logToTerminal(message) {
        history.push(message);
        json_container = history.map((entry, index) => ({ key: index + 1, content: entry }));
    }

    // Function to toggle cursor visibility
    function toggleCursorVisibility() {
        cursorVisible = !cursorVisible;
    }

    // Initialize cursor blinking on component mount
    onMount(() => {
        logToTerminal("Starting the server...");
        logToTerminal("Hi 👋 Welcome to my Portfolio!")
        logToTerminal("Enter the command <b>man</b> to see all the commands")
        setInterval(toggleCursorVisibility, 1000); // Toggle cursor visibility every 500ms
    });
</script>

<svelte:window on:keydown={handleEvents} />
<main>
    <div class="renderer">
        <div class="terminal-box">
            {#each json_container as old_entry}
                <p class="text-terminal text-entry"> guest@portfolio ~ {@html old_entry.content}</p>
            {/each}
            <div class="text-terminal text-entry" style="position: relative;">
                guest@portfolio ~ {text}
                <span class="cursor" style="visibility: {cursorVisible ? 'visible' : 'hidden'};">█</span>
            </div>
        </div>
        <div class="work-in-progress">Work in progress ...</div>
    </div>
</main>

<style>
    .renderer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        background-color: rgba(0, 128, 0, 0.9); /* Dark green background with opacity */
        background-image: url('/src/assets/wp.webp'); /* Replace 'linux_background.jpg' with your image path */
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }

    .terminal-box {
        position: relative;
        width: 80%; /* Adjust width as needed */
        height: 80%; /* Adjust height as needed */
        margin: auto;
        background-color: rgba(0, 0, 0, 0.7); /* Dark background with opacity */
        border-radius: 10px;
        margin-top: 2%;
        padding: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8); /* Add shadow effect */
        overflow: auto;
    }

    .text-terminal {
        color: rgba(255, 255, 255, 1); /* Fully opaque white text */
        font-family: monospace;
        font-size: 1.5rem;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        text-align: left; /* Align text to the left */
    }

    .text-entry {
        margin-bottom: 5px; /* Adjust spacing between text entries */
        position: relative; /* Required for cursor positioning */
    }

    .cursor {
        position: relative;
        top: 0;
        right: 0;
        margin-top: 1px; /* Adjust vertical alignment */
        margin-left: 5px; /* Adjust horizontal alignment */
        width: 10px; /* Adjust cursor width as needed */
        color: #fff; /* Cursor color */
    }

    .work-in-progress {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: rgba(255, 255, 255, 0.5); /* Semi-transparent white */
    font-size: 0.8rem;
    }


    @keyframes blink {
        50% {
            opacity: 0; /* Hide cursor */
        }
    }
</style>



