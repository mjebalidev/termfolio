<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  // @ts-ignore
  import Keyboard from "svelte-keyboard";

  let showVirtualKeyboard = false;

  function toggleVirtualKeyboard() {
    showVirtualKeyboard = !showVirtualKeyboard;
  }

  const onKeydown = (event) => {
    const key = event.detail;
    // Simulate keypress event
    handleEvents({ key, code: key });
  };

  let text = "";
  let textInArray = [];
  let history = [];
  let commandHistory = [];
  let jsonContainer = [];
  let historyCounter = 1;
  let specialKeysList = [
    "Escape",
    "Tab",
    "CapsLock",
    "Backspace",
    "Shift",
    "ArrowUp",
    "ArrowDown",
    "Control",
    "Alt",
    "AltGraph",
    "Enter",
    "Space",
    "Dead",
    " ",
    "ArrowRight",
    "ArrowLeft",
  ];
  let commands = {
    ls: `<b>projects.txt</b> &nbsp;&nbsp;&nbsp; <b>about.me</b> &nbsp;&nbsp;&nbsp; <b>social.txt</b> &nbsp;&nbsp;&nbsp <b>cv.pdf</b>`, // Add your file list here
    cat: {
      "projects.txt": `

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

`.replace(/\n/g, "<br>"), // Replace newlines with HTML line breaks
      "about.me": `

<b>Name:</b> Mehdi
<b>Occupation:</b> IT Enthusiast
<b>Current Position:</b> Fullstack Developer

<b>Summary:</b>
I am an IT enthusiast with a background in information technology. 
Currently, I work as a Fullstack Developer with professional experience in creating tools to automate working processes. 

If you need further information, feel free to <a href="mailto:mjebali.dev@gmail.com">contact me</a>.

`.replace(/\n/g, "<br>"), // Replace newlines with HTML line breaks
      "social.txt": `
            
<b>GitHub</b>: <a href="https://github.com/mjebalidev" target="_blank">Click me</a>

<b>LinkedIn</b>: <a href="https://www.linkedin.com/in/mjebali/" target="_blank">Click me</a>

`.replace(/\n/g, "<br>"), // Replace newlines with HTML line breaks
    },
    man: `

        <b>Manual:</b>

        <b>man</b>: Displays the manual.
        <b>ls</b>: Lists the current files.
        <b>clear</b>: Clears the terminal.
        <b>download</b> &lt;file&gt;: Downloads a file.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example: download cv.pdf
        <b>cat</b> &lt;file&gt;: Displays the current file text.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example: cat myprojects.txt
        
        `.replace(/\n/g, "<br>"),
  };

  let currentCommandIndex = -1;
  let currentCommand = "";
  let cursorVisible = true;

  function handleEvents(event) {
    let key = event.key;
    let code = event.code;
    let ctrlPressed = event.ctrlKey; // Check if CTRL key is pressed

    if (!specialKeysList.includes(key)) {
      textInArray.push(key);
      text = textInArray.join("");
    } else {
      switch (key) {
        case "Backspace":
          if (textInArray.length > 0) {
            textInArray.pop();
            text = textInArray.join("");
          }
          break;
        case "Tab":
          event.preventDefault(); // Prevent default Tab behavior
          //autocompleteCommand();
          break;
        case " ":
        case "Space":
          textInArray.push(" ");
          text = textInArray.join("");
          break;
        case "Escape":
          if (showVirtualKeyboard) {
            showVirtualKeyboard = false;
          }
          break;
        case "Enter":
          executeCommand(text);
          break;
        case "ArrowUp":
          navigateHistory(1);
          break;
        case "ArrowDown":
          navigateHistory(-1);
          break;
        case ctrlPressed && key === "c":
          // Handle CTRL + C combination
          logToTerminal("^C", false);
          // Add your logic for CTRL + C combination here
          break;
        default:
          break;
      }
    }
  }

  function executeCommand(command) {
    history.push(command);
    jsonContainer = history.map((entry, index) => ({
      key: index + 1,
      content: entry,
    }));

    switch (command) {
      case "clear":
        clearTerminal();
        break;
      case "download cv.pdf":
        downloadFile("cv.pdf");
        logToTerminal("Downloading cv.pdf ...", false);
        break;
      case "download projects.txt":
        downloadFile("projects.txt");
        logToTerminal("Downloading projects.txt ...", false);
        break;
      case "download about.me":
        downloadFile("about.me");
        logToTerminal("Downloading about.me ...", false);
        break;
      case "download social.txt":
        downloadFile("social.txt");
        logToTerminal("Downloading social.txt ...", false);
        break;
      case "":
        break;
      default:
        let parts = command.split(" ");
        let action = parts[0];
        let args = parts.slice(1);

        if (commands[action]) {
          if (typeof commands[action] === "string") {
            logToTerminal(commands[action], false);
          } else if (typeof commands[action] === "object") {
            let target = args[0];
            if (commands[action][target]) {
              logToTerminal(commands[action][target], false);
            } else {
              logToTerminal(`cat ${args}: No such file or directory`, false);
            }
          }
        } else {
          logToTerminal(`${action}: command not found`, false);
        }
    }
    commandHistory.unshift(command);
    text = "";
    textInArray = [];
    currentCommandIndex = -1;
    currentCommand = "";
  }

  function downloadFile(filename) {
    // Simulate file download
    const link = document.createElement("a");
    link.href = filename; // Replace with the actual file URL
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function autocompleteCommand() {
    let availableCommands = Object.keys(commands);
    let inputCommand = text.trim().split(" ")[0];

    if (inputCommand === "") {
      return; // No command entered yet
    }

    let matchedCommands = availableCommands.filter((command) =>
      command.startsWith(inputCommand)
    );
    if (matchedCommands.length === 1) {
      // Autocomplete the command
      text = matchedCommands[0];
    } else if (matchedCommands.length > 1) {
      // Display available options
      logToTerminal(matchedCommands.join(" "));
    }
  }

  function clearTerminal() {
    text = "";
    textInArray = [];
    history = [];
    jsonContainer = [];
    historyCounter = 1;
  }

  function navigateHistory(direction) {
    let newIndex = currentCommandIndex + direction;
    if (newIndex >= 0 && newIndex < commandHistory.length) {
      currentCommandIndex = newIndex;
      currentCommand = commandHistory[currentCommandIndex];
      text = currentCommand;
      textInArray = currentCommand.split("");
    } else if (newIndex === -1) {
      currentCommandIndex = -1;
      currentCommand = "";
      text = "";
      textInArray = [];
    }
  }

  function logToTerminal(message, saveToHistory = true) {
    if (saveToHistory) {
      commandHistory.push(message);
    }
    history.push(message);
    jsonContainer = history.map((entry, index) => ({
      key: index + 1,
      content: entry,
    }));
  }

  // Function to toggle cursor visibility
  function toggleCursorVisibility() {
    cursorVisible = !cursorVisible;
  }

  // Initialize cursor blinking on component mount
  onMount(() => {
    logToTerminal("Starting the server", false);
    setTimeout(() => {
      clearTerminal();
      logToTerminal("Server starting .", false);
    }, 500);
    setTimeout(() => {
      clearTerminal();
      logToTerminal("Server starting ..", false);
    }, 1000);
    setTimeout(() => {
      clearTerminal();
      logToTerminal("Server starting ...", false);
    }, 1500);
    setTimeout(() => {
      clearTerminal();
      logToTerminal("Server starting ....", false);
    }, 2000);
    setTimeout(() => {
      clearTerminal();
      logToTerminal("Server starting .....", false);
    }, 2500);
    setTimeout(() => {
      clearTerminal();
      // Simulate successful server start
      logToTerminal("Server started successfully!", false);
    }, 3000);

    setTimeout(() => {
      clearTerminal();
      // Simulate successful server start
      logToTerminal("Server started successfully!", false);
      logToTerminal("Hi 👋 Welcome to my Portfolio!", false);
      logToTerminal(
        "Enter the command <b>man</b> to see all the commands",
        false
      );
    }, 3500);
    setInterval(toggleCursorVisibility, 1000); // Toggle cursor visibility every 500ms
  });
</script>

<svelte:window on:keydown={handleEvents} />
<main>
  <div class="renderer">
    <div class="terminal-box">
      {#each jsonContainer as old_entry}
        <p class="text-terminal">
          <span class="text-pwd">guest@portfolio ~ </span><span
            >{@html old_entry.content}</span
          >
        </p>
      {/each}
      <p class="text-terminal">
        <span class="text-pwd">guest@portfolio ~</span>
        <span class="text-entry">{text}</span>
        <span
          class="cursor"
          style="visibility: {cursorVisible ? 'visible' : 'hidden'};">█</span
        >
      </p>
    </div>
    <div class="work-in-progress">Work in progress ...</div>
    <div class="virtual-keyboard-container">
      {#if showVirtualKeyboard}
        <Keyboard
          class="svelte-keyboard"
          on:keydown={onKeydown}
          --height="2.5rem"
          --flex="1"
        />
      {/if}
    </div>

    <button on:click={toggleVirtualKeyboard} class="virtual-keyboard-button"
      ><div class="keyboard-icon">⌨️</div></button
    >
  </div>
</main>

<style>
  .svelte-keyboard button.key {
    display: flex;
    flex-wrap: wrap;
  }

  .keyboard-icon {
    font-size: 1.7rem;
  }

  .virtual-keyboard-container {
    position: fixed;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 2%;
    overflow: auto; /* Enable scrolling if the keyboard exceeds the maximum height */
    border: 1px solid #ccc; /* Add border for visual separation */
    background-color: #ebebebd0; /* Background color for the keyboard */
    z-index: 1; /* Ensure the keyboard appears above other elements */
  }

  .virtual-keyboard-button {
    position: fixed;
    top: 0;
    left: 0;
    margin: 10px;
    padding: 10px 14px;
    font-size: 12px;
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 2; /* Ensure the button appears above the keyboard */
  }
  .renderer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background-color: rgba(
      18,
      67,
      18,
      0.9
    ); /* Dark green background with opacity */
    background-image: url("/src/assets/wp.webp"); /* Replace 'linux_background.jpg' with your image path */
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }

  .terminal-box {
    display: inline-block;
    position: relative;
    width: 80%; /* Adjust width as needed */
    height: 70%; /* Adjust height as needed */
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
    position: relative;
  }

  .text-entry {
    display: inline-block;
    position: relative; /* Required for cursor positioning */
  }

  .text-pwd {
    color: rgb(198, 196, 191); /* Green text color */
  }

  .cursor {
    position: relative;
    top: 0;
    right: 0;
    margin-top: 1px; /* Adjust vertical alignment */
    margin-left: -5px; /* Adjust horizontal alignment */
    width: 10px; /* Adjust cursor width as needed */
    color: #fff; /* Cursor color */
    z-index: 2;
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
