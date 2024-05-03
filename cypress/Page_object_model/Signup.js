class signup 
{
    constructor(data) {
        this.data = data;
        this.url = 'https://signup-uat.thefirstock.tech/';
        // Other class properties remain unchanged
    }
url = 'https://signup-uat.thefirstock.tech/';

//mobile verification
Mobile_no_field = 'body > div:nth-child(4) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)';
Continue_Button = '#signupContinueButton';

//mail verification
email_field = '#outlined-basic';
continue_email_button = '#yourDetailsContinueButton';

//pan verification
Pan_name_field = 'body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
Pan_no_field = ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic';
pan_dob_field = 'body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
pan_continue_button = '#panVerificationContinueButton';
kra_continue_button= '.MuiButton-contained';

//personal details
mother_name_field= '.YourProfile_subRightContainer__Z9KJv > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic';
marital_status = '.YourProfile_subRightContainer__Z9KJv > [style="width: 100%;"] > .MuiFormControl-root > .YourProfile_chipsstylecontainer__hp9Qx > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiChip-label';
trading_experience = '.YourProfile_subContainer__HH3Uj > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(2) > .MuiChip-label';
anual_income = '.YourProfile_subRightContainer__Z9KJv > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(2) > .MuiChip-label';
occupation = ':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(6) > .MuiChip-label';
personal_detail_continue = '.YourProfile_buttonStack__Hmr31 > :nth-child(1)';

//Trading Preferences
Trading_Preferences_Continue = '#tradingPreferencesContinueButton';

//bank details 
add_bankDetails_manualy = '#radio-b';
add_manualy_button = '#linkUsingIFSCContinueButton';
branch_ifsc_field = ':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic';
bank_act_no_field = ':nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic';
comfirm_bank_act_no_field = ':nth-child(2) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic';
bank_continue_button = '.BankDetails_buttonBackandContinueSection__ALIsQ > :nth-child(2)';

//terms & condition 
TC_button = '#termsandconditionsContinueButton';






visit_url(){
    cy.visit(this.url);
}

//mobile verification
Enter_Mobile(mobileNumber){
    cy.get(this.Mobile_no_field).type(mobileNumber);
}
click_continue() {
    cy.get(this.Continue_Button).click();
    cy.get(this.email_field, { timeout: 500000 }).should('be.visible');
}

//mail verification
Enter_email(email){
    cy.get(this.email_field).type(email);
}
click_mail_continue() {
    cy.get(this.continue_email_button).click();
    cy.get(this.Pan_name_field, { timeout: 500000 }).should('be.visible');
}

//pan verification
enter_pan_name(PanName){
    cy.get(this.Pan_name_field).type(PanName);
}
enter_pan_no(PanNo){
    cy.get(this.Pan_no_field).type(PanNo);
}
enter_pan_dob(PanDOB){
    cy.get(this.pan_dob_field).type(PanDOB);
}
click_pan_continue(){
    cy.get(this.pan_continue_button).click();
}
click_kra_continue(){
    cy.get(this.kra_continue_button).click();
}

//personal deatils
enter_mother_name(){
    cy.get(this.mother_name_field).type('Mother Name');
}
// select_marital_status(){
//     cy.get(this.marital_status).click();
// }

select_marital_status(maritalStatus) {
    if (maritalStatus === 'single') {
        cy.get('.YourProfile_subRightContainer__Z9KJv [style="width: 100%;"] .MuiFormControl-root .YourProfile_chipsstylecontainer__hp9Qx :nth-child(1) .MuiFormControlLabel-root .MuiButtonBase-root .MuiChip-label').click();
    } else if (maritalStatus === 'married') {
        cy.get('.YourProfile_subRightContainer__Z9KJv [style="width: 100%;"] .MuiFormControl-root .YourProfile_chipsstylecontainer__hp9Qx :nth-child(2) .MuiFormControlLabel-root .MuiButtonBase-root .MuiChip-label').click();
    } else {
        throw new Error('Invalid marital status provided');
    }
}







select_trading_experience(){
    cy.get(this.trading_experience).click();
}
select_anual_income(){
    cy.get(this.anual_income).click();
}
select_occupation(){
    cy.get(this.occupation).click();
}
click_personal_detail_continue(){
    cy.get(this.personal_detail_continue).click();
}

click_Trading_Preferences_Continue(){
    cy.get(this.Trading_Preferences_Continue).click();
}

//bank details 
select_add_bankDetails_manualy(){
    cy.get(this.add_bankDetails_manualy).click();
}
click_add_manualy_button(){
    cy.get(this.add_manualy_button).click();
}
enter_branch_ifsc_field(ifsc){
    cy.get(this.branch_ifsc_field).type(ifsc);
}
enter_bank_act_no_field(actNo){
    cy.get(this.bank_act_no_field).type(actNo);
}
enter_comfirm_bank_act_no_field(comfirm){
    cy.get(this.comfirm_bank_act_no_field).type(comfirm);
}
click_bank_continue_button(){
    cy.get(this.bank_continue_button).click();
}

//Terms & condition
click_TC_button(){
    cy.get(this.TC_button).click();
}





















}
export default signup;