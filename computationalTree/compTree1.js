// nested objects
// NFA
// Strings that starts with '0'


function test1() {
    const transitions = {
        'q0': { '0': 'q1', '1': 'p' }, 
        'q1': { '0': 'q1', '1': 'q1' }
    };

    document.getElementById("language").innerText = "Strings that starts with '0'";
    const input = document.getElementById('inputString').value.trim(); // dito mapunta yung value ng tinype mo. Ignore whitespaces

    let currentState = 'q0';
    let accepted = false;
    const transitionLog = []; 
    document.getElementById('initial').innerText = `Start State: 'q0'`;
    document.getElementById('final').innerText = `Final State: 'q1'`;
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (transitions[currentState] && transitions[currentState][element]) {
            const nextState = transitions[currentState][element];
            transitionLog.push(`${element} → '${currentState}' → '${nextState}'`); // yung .push eii mag lagay lang ng maglagay ng element sa array
            currentState = nextState;
        } else {
            currentState = 'p';
            break;
        }
    }

    accepted = currentState === 'q1' && input.startsWith('0');
    document.getElementById('result').innerText = accepted ?
        `The string "${input}" is accepted.\nTransitions:\n${transitionLog.join('\n')}` : // .join, pagsamasamahin yung mga element ng array
        `The string "${input}" is not accepted.\nTransitions:\n${transitionLog.join('\n')}`;
}

// Test2
// NFA
// String that ends with zero

function test2() {

    const transitions = {
        'q0': { '0': ['q0', 'q1'], '1': ['q0'] }, 
        'q1': { '0': ['p'], '1': ['p'] }
    };

    document.getElementById("language").innerText = "String that ends with zero";

    const input = document.getElementById('inputString').value.trim();
    let currentStates = ['q0']; 
    const transitionLog = []; 
    document.getElementById('initial').innerText = `Start State: 'q0'`;
    document.getElementById('final').innerText = `Final State: 'q1'`;

    for (let i = 0; i < input.length; i++) {
        const element = input[i]; // array ng input[1][0][1] eg
        const newStates = []; // dito mapunta yung mga states

        for (let j = 0; j < currentStates.length; j++) {
            const state = currentStates[j]; // array since may state na dalawa ang pwedeng maging value
            
            // eg. transition['q0'] && transitions['q0''0']
            if (transitions[state] && transitions[state][element]) {
                // transitions['q0''0']
                const nextStates = transitions[state][element];
                
                for (let k = 0; k < nextStates.length; k++) {
                    const nextState = nextStates[k];
                    transitionLog.push(`'${state}' → '${element}' → '${nextState}'`);
                    newStates.push(nextState);
                }
            }
        }

        if (newStates.length > 0) {
            currentStates = newStates;
        } else {
            currentStates = ['p'];
        }
    }

    let accepted = false;
    if (currentStates.includes('q1') && input.endsWith('0')) {
        accepted = true;
    }

    if (accepted) {
        document.getElementById('result').innerText = 
            `The string "${input}" is accepted.\nTransitions:\n${transitionLog.join('\n')}`;
    } else {
        document.getElementById('result').innerText = 
            `The string "${input}" is not accepted.\nTransitions:\n${transitionLog.join('\n')}`;
    }
}

// test 3

// nested objects

// Strings that contains even number of '0' and '1'


function test3() {
    const transitions = {
        'q0': { '0': 'q1', '1': 'q2' }, 
        'q1': { '0': 'q0', '1': 'q3' },
        'q2': { '0': 'q3', '1': 'q0' },
        'q3': { '0': 'q2', '1': 'q1' }
    };

    document.getElementById("language").innerText = "Strings that contains even number of '0' and '1'";
    const input = document.getElementById('inputString').value.trim(); // dito mapunta yung value ng tinype mo. Ignore whitespaces

    let currentState = 'q0';
    let accepted = false;
    const transitionLog = []; 
    document.getElementById('initial').innerText = `Start State: 'q0'`;
    document.getElementById('final').innerText = `Final State: 'q0'`;
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (transitions[currentState] && transitions[currentState][element]) {
            const nextState = transitions[currentState][element];
            transitionLog.push(`${element} → '${currentState}' → '${nextState}'`); // yung .push eii mag lagay lang ng maglagay ng element sa array
            currentState = nextState;
        } else {
            currentState = 'p';
            break;
        }
    }

    accepted = currentState === 'q0' ;
    document.getElementById('result').innerText = accepted ?
        `The string "${input}" is accepted.\nTransitions:\n${transitionLog.join('\n')}` : // .join, pagsamasamahin yung mga element ng array
        `The string "${input}" is not accepted.\nTransitions:\n${transitionLog.join('\n')}`;
}

//Test 4
// nested objects

// not sure pa kung anong language to
// pero nag aaccept sya ng binary string odd number na substring na "10" or "01" 


function test4() {

    const transitions = {
        'q0': { '0': 'q2', '1': 'q1' }, 
        'q1': { '0': 'q3', '1': 'q0' },
        'q2': { '0': 'q0', '1': 'q3' },
        'q3': { '0': 'q1', '1': 'q2' }
    };
    
    document.getElementById("language").innerText = "not sure pa kung anong language to pero nag aaccept sya ng binary string odd number na substring na '10' or '01' ";
    const input = document.getElementById('inputString').value.trim(); // dito mapunta yung value ng tinype mo. Ignore whitespaces

    let currentState = 'q0';
    let accepted = false;
    const transitionLog = []; 
    document.getElementById('initial').innerText = `Start State: 'q0'`;
    document.getElementById('final').innerText = `Final State: 'q3'`;
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (transitions[currentState] && transitions[currentState][element]) {
            const nextState = transitions[currentState][element];
            transitionLog.push(`${element} → '${currentState}' → '${nextState}'`); // yung .push eii mag lagay lang ng maglagay ng element sa array
            currentState = nextState;
        } else {
            currentState = 'p';
            break;
        }
    }

    accepted = currentState === 'q3' ;
    document.getElementById('result').innerText = accepted ?
        `The string "${input}" is accepted.\nTransitions:\n${transitionLog.join('\n')}` : // .join, pagsamasamahin yung mga element ng array
        `The string "${input}" is not accepted.\nTransitions:\n${transitionLog.join('\n')}`;
}