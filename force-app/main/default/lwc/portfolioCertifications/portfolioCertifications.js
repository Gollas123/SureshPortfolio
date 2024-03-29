import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

import SF_CERT_FIELDS from '@salesforce/schema/Portfolio__c.SalesforceCertifications__c';
import OTHER_CERT_FIELDS from '@salesforce/schema/Portfolio__c.OtherCertifications__c';

export default class PortfolioCertifications extends LightningElement {

    certLogo = `${PortfolioAssets}/PortfolioAssets/cert_logo.png`;
    sfCertList = [];
    otherCertList = [];

    @api recordId;

    @wire(getRecord, {
        recordId:'$recordId',
        fields:[SF_CERT_FIELDS, OTHER_CERT_FIELDS]
    })certsHandler({data, error}){
        if(data){
            console.log("certshandler data: ", JSON.stringify(data));
            this.formatData(data);
        }
        if(error){
            console.error('certsHandler error: ', error);
        }
    }

    formatData(data){
        const {SalesforceCertifications__c, OtherCertifications__c} = data.fields;
        this.sfCertList = SalesforceCertifications__c ? SalesforceCertifications__c.value.split(';').map(item=>{
            return `${item}`
        }):[];

        this.otherCertList = OtherCertifications__c ? OtherCertifications__c.value.split(','):[];
    }
}