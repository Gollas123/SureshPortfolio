public without sharing class NoteTakingController {
    @AuraEnabled
    public static Boolean createNoteRecord(String title, string description){
        try{
            if(!String.isBlank(title)){
              MyNote__c noteRec = new MyNote__c(Name=title, Note_Description__c=description);
              insert noteRec;
              return true;
            } 
            return false;
        } catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<MyNote__c> getNotes(){
        return [SELECT Id, Name, Note_Description__c, LastModifiedDate from MyNote__c order by LastModifiedDate desc];
    }

    @AuraEnabled
    public static Boolean updateNoteRecord(String noteId, String title, String description){
        try {
            if(!String.isBlank(noteId)){
                MyNote__c note = [SELECT Id, Name, Note_Description__c, LastModifiedDate from MyNote__c where id =:noteId];
                note.Name = title;
                note.Note_Description__c = description;
                update note;
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Boolean deleteNoteRecord(String noteId){
        try {
            if(!String.isBlank(noteId)){
                MyNote__c noteRec = new MyNote__c(Id= noteId);
                delete noteRec;
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}