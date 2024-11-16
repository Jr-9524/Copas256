// String that ends with zero

function test() {
    const transitions = {
        'q0': { '0': ['q0', 'q1'], '1': ['q0'] }, 
        'q1': { '0': ['null'], '1': ['null'] }
    };
    
    const input = document.getElementById('inputString').value.trim(); // kukunin yung Ininput ni user then ilalagay sa constant variable na input -> (const input). Yung .trim ay iignore yung mga whitespaces (spaces, tabs, or line breaks)

    let currentStates = ['q0']; 
    const transitionLog = []; // dito maistore yung bawat transition e.g. = q0,0 -> q1

    // Nested Loops
    // 1st loop: para sa input ng user
    // mag loop sya depende sa length ng ininput ni user
    for (let i = 0; i < input.length; i++) {
        const element = input[i]; // array ng input[1][0][1] eg
        const newStates = []; // dito mapunta yung mga states

        //2nd loop: para sa length ng states since may array tayo na may lenght na 1 or 2
        for (let j = 0; j < currentStates.length; j++) {
            const state = currentStates[j]; // array since may state na dalawa ang pwedeng maging value        
            // eg. transition['q0'] && transitions['q0''0']
            if (transitions[state] && transitions[state][element]) {
                // transitions['q0''0']
                const nextStates = transitions[state][element];
                
                // 3rd loop: para sa length ng nextstates
                // since 1 or 2 ang pwedeng maging next states
                // bawat loop eii mastore sa transitionLog, line 12
                for (let k = 0; k < nextStates.length; k++) {
                    const nextState = nextStates[k];
                    // push(): This method adds a new element to the end of an array. In this case, it's adding a string that represents the state transition.
                    transitionLog.push(`${state}, ${element} → ${nextState}`);
                    newStates.push(nextState);
                }
            }
        }

        if (newStates.length > 0) {
            currentStates = newStates;
        } else {
            currentStates = ['null'];
        }
    }

    // medyo may daya to dahil sa .endsWith na magchecheck if nagend sa 0 ang input ni user
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