function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;

}
AddressBook.prototype.getInitialContacts = function(cb){
    setTimeout(function(){
        this.initialComplete = true;
        if(cb){
            return cb();
        }
    },3);
    
}


AddressBook.prototype.addContact = function(newContact) {
  this.contacts.push(newContact);
};

AddressBook.prototype.getContact = function(id) {
    //if(this.contacts.length>id){
    return this.contacts[id];
    //}
    //throw new Error("This id is most largest than length of its contacts");
};

AddressBook.prototype.deleteContact = function(id){
    //if(this.contacts.length>id){
    this.contacts.splice(id,1);
    //}
    //throw new Error("This id is most largest than length of its contacts");
};