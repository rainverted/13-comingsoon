function Clock (selector) {
    const DOM = document .querySelector(selector);
    /*const HTML = `<div class="time">
                <div class="value">432</div>
                <div class="label">days</div>
                </div>
                <div class="time">
                    <div class="value">09</div>
                    <div class="label">Hours</div>
                </div>
                <div class="time">
                    <div class="value">37</div>
                    <div class="label">Minutes</div>
                </div>
                <div class="time">
                    <div class="value">39</div>
                    <div class="label">Seconds</div>
                </div>
                <div class="time">
                    
                </div>`*/

        const timeValues = [432, 9, 37, 39];
        const labelVaues = ['Days', 'Hours', 'Minutes', 'Seconds'];
        let HTML = '';

        for (let i = 0; i < timeValues.length; i++) {
            HTML += `<div class="time">
                        <div class="value">${timeValues[i]}</div>
                        <div class="label">${labelVaues[i]}</div>
                    </div>`
            
        }

    //const selector = '.clock' - alt const DOM = document .querySelector(.clock);

    DOM.innerHTML = HTML; 
    //innerHTML paima kinatmajo HTML viduje esanti teksta 
}

export { Clock }