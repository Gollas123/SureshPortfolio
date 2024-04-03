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
            "link":"https://suresh-portfolio-dev-ed.develop.my.site.com/currency-converter"
        },
        {
            "name":"Weather App",
            "img":this.WeatherApp,
            "link":"https://suresh-portfolio-dev-ed.develop.my.site.com/weather-app"
        },
        {
            "name":"Survey App",
            "img":this.SurveyApp,
            "link":"https://suresh-portfolio-dev-ed.develop.my.site.com/survey/survey/runtimeApp.app?invitationId=0KiIR0000004j1s&surveyName=employee_survey&UUID=bf3d8704-2f85-4249-9ba7-2d3a66dd6321"
        },
        {
            "name":"Note Taking App",
            "img":this.NoteApp,
            "link":"https://suresh-portfolio-dev-ed.develop.my.site.com/note-taking-app"
        },
    ]

}