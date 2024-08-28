const actions = {
    'start': () => console.log("Started"),
    'stop': () => console.log("Stopped"),
}
const action = 'start';
actions[action] ? actions[action]() : console.log("Unknown action");
