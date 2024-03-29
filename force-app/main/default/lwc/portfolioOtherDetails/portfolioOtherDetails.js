import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import SUPERBADGE_FIELD from '@salesforce/schema/Portfolio__c.Superbadges__c';
import AWARDS_FIELD from '@salesforce/schema/Portfolio__c.Awards__c';
import LANGUAGES_FIELD from '@salesforce/schema/Portfolio__c.Languages__c';

import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioOtherDetails extends LightningElement {
    @api recordId;

    awardIcon = `${PortfolioAssets}/PortfolioAssets/trophy.png`;
    languageIcon = `${PortfolioAssets}/PortfolioAssets/language.png`;
    badgeIcon = `${PortfolioAssets}/PortfolioAssets/badge.png`;

    superbadges = [];
    languages = [];
    awards = [];
    
    @wire(getRecord, {
        recordId:'$recordId',
        fields:[SUPERBADGE_FIELD, AWARDS_FIELD, LANGUAGES_FIELD]
    })otherFieldsHandler({data, error}){
        if(data){
            console.log("otherfields data: ", JSON.stringify(data));
            this.formatData(data);
        }
        if(error){
            console.error("otherdetails error: ", error);
        }
    }

    formatData(data){
        const {Superbadges__c, Awards__c, Languages__c} = data.fields;
        this.awards = Awards__c && Awards__c.value ? Awards__c.value.split(','):[];
        this.languages = Languages__c && Languages__c.value ? Languages__c.value.split(','):[];
        this.superbadges = Superbadges__c && Superbadges__c.value ? Superbadges__c.value.split(';'):[];
    }
}