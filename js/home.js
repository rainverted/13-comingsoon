//IMPORT
import { Clock } from "./components/clock/Clock.js";
import { socials } from "./components/socials/socials.js";
import { socialsData } from "./data/socialsData.js";


//EXECUTION
Clock('.clock');
socials('footer .socials', socialsData);