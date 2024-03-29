import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
import { LightningElement, api, wire } from 'lwc';

const COLUMNS = [
    { label: 'Education', fieldName: 'Education' },
    { label: 'Institution Name', fieldName: 'InstitutionName' },
    { label: 'Passing Year', fieldName: 'PassingYear' }    
];

export default class PortfolioEducation extends LightningElement {
    @api recordId;

    tableData = [];
    columns = COLUMNS;

    @wire(getRelatedListRecords, {
        parentRecordId:'$recordId',
        relatedListId:'Educations__r',
        fields:['Education__c.InstitutionName__c', 'Education__c.Title__c', 'Education__c.PassingYear__c'],
        sortBy:['Education__c.PassingYear__c']
    })EducationHandler({data, error}){
        if(data){
            console.log('education data: ',JSON.stringify(data));
            this.formatEducation(data);
        }
        if(error){
            console.error('education error: ', error);
        }
    }

    formatEducation(data){
        this.tableData = [...data.records].reverse().map(item=>{       
        let Id = item.id;
        const {InstitutionName__c, Title__c, PassingYear__c} = item.fields;
        let Education = Title__c.value;
        let InstitutionName = InstitutionName__c.value;
        let PassingYear = PassingYear__c.value;

        return {Id, Education, InstitutionName, PassingYear}
    })

    console.log("this.tableData", JSON.stringify(this.tableData));

    }
}