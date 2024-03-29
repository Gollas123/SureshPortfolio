import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
   @api recordId;
   @api objectApiName;
   @api resumeUrl;


   downloadResume(){
    window.open(this.resumeUrl, "_blank");
   }
}

// "https://github.com/Gollas123/suresh-resume/blob/main/Salesforce%20Developer%20Suresh%20Golla.pdf"