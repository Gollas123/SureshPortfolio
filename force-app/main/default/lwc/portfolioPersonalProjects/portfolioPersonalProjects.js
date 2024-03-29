import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';


export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`;
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`;
    CurrencyCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`;
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`;
    SurveyApp = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`;
    NoteApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`;

    projects = [
        {
            "name":"BMI Calculator App",
            "img":this.BMICalculator,
            "link":"https://suresh-portfolio-dev-ed.develop.my.site.com/bmi-calculator"
        },
        {
            "name":"Alarm Clock App",
            "img":this.AlarmClock,
            "link":"https://suresh-portfolio-dev-ed.develop.my.site.com/alarm-clock"
        },
        {
            "name":"Currency Converter App",
            "img":this.CurrencyCalculator,
            "link":""
        },
        {
            "name":"Weather App",
            "img":this.WeatherApp,
            "link":"https://suresh-portfolio-dev-ed.develop.my.site.com/weather-app"
        },
        {
            "name":"Survey App",
            "img":this.SurveyApp,
            "link":"https://suresh-portfolio-dev-ed.develop.my.salesforce.com/survey/runtimeApp.app?invitationId=0KiIR0000004j1n&surveyName=employee_survey&UUID=f3553703-db49-4b18-ad12-56df4829240a"
        },
        {
            "name":"Note Taking App",
            "img":this.NoteApp,
            "link":""
        },
    ]

}