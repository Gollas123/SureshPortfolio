import { LightningElement, api, wire } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c';
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c';
import COMAPANY_NAME from '@salesforce/schema/Portfolio__c.ComapanyName__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';


export default class PortfolioBanner extends LightningElement {

    @api recordId; // = 'a00IR00001vkMGUYA2';
    @api linkedinUrl; // = 'https://www.linkedin.com/in/suresh-golla-5a7177248/';
    @api twitterUrl; // = 'https://twitter.com/i/flow/login';
    @api githubUrl; // = 'https://github.com/Gollas123';
    @api youtubeUrl; // = 'https://www.youtube.com/watch?v=sTF-Jq3CxpQ&list=PLsKCaIlvhikHbaxB0PAGUNGk-R42LYoup';
    @api trailheadUrl; // = 'https://www.salesforce.com/trailblazer/sgolla111';
    @api blogUrl; // = 'https://www.salesforce.com/blog/';

    userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`;
    linkedIn = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`;
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`;
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;
    blog = `${PortfolioAssets}/PortfolioAssets/Social/blogger.svg`;


    
    @wire(getRecord, {recordId:'$recordId', fields:[FULLNAME, COMAPANY_NAME, COMPANY_LOCATION, DESIGNATION]})
    portfolioData;

    // portfolioHandler({data, error}){
    //     if(data){
    //         console.log("Record Data: ", JSON.stringify(data));
    //     }
    //     if(error){
    //         console.log("error", error);
    //     }
    // }

    get fullName(){
        return getFieldValue(this.portfolioData.data, FULLNAME);
    }

    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION);
    }

    get companyName(){
        return getFieldValue(this.portfolioData.data, COMAPANY_NAME);
    }

    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION);
    }


}