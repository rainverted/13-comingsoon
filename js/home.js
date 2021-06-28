//IMPORT
import { Clock } from "./components/clock/Clock.js";
import { socials } from "./components/socials/socials.js";
import { SocialsOOP } from "../css/components/SocialsOOP.js";
import { clockData } from "./data/clockData.js";
import { socialsData } from "./data/socialsData.js";
import { Progressbar } from "./components/progress-bar/ProgressBar.js";
import { progressBarData } from "./data/progressBarData.js";

//EXECUTION
new Clock('#clock_1', clockData);
//socials('footer .socials', socialsData);
new Progressbar('.left-column', progressBarData);
new SocialsOOP('footer .socials', socialsData);


