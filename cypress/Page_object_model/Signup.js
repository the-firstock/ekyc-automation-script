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
email_name='body > div:nth-child(4) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
email_field = 'body > div:nth-child(4) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)';
continue_email_button = '#yourDetailsContinueButton';

//pan verification

Pan_no_field = '#outlined-basic';
pan_dob_field = 'body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
pan_continue_button = '#panVerificationContinueButton';
kra_continue_button= '.MuiButton-contained';

//Digio
adhaar1_blank='#aadhaar_1';
adhaar2_blank='#aadhaar_2';
adhaar3_blank='#aadhaar_3';
next_btn='.btn';
allow_btn="input[value='Allow']";
clickfetched_details='#aadhaarApproveButton';
digio_aadhaar='#aadharOpenLinkButton';



//personal details
father_name_field='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
mother_name_field= '.YourProfile_subRightContainer__Z9KJv > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic';
marital_status = '.YourProfile_subRightContainer__Z9KJv > [style="width: 100%;"] > .MuiFormControl-root > .YourProfile_chipsstylecontainer__hp9Qx > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiChip-label';
trading_experience = '.YourProfile_subContainer__HH3Uj > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(2) > .MuiChip-label';
anual_income = '.YourProfile_subRightContainer__Z9KJv > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(2) > .MuiChip-label';
// occupation = ':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(6) > .MuiChip-label';
personal_detail_continue = '.YourProfile_buttonStack__Hmr31 > :nth-child(1)';

//Trading Preferences
Trading_Preferences_Continue = '#tradingPreferencesContinueButton';
trading='.TradingPreference_riskdisclosurebuttonsection__Q5GHl > .MuiButtonBase-root';

//bank details 
add_bankDetails_manualy = '#radio-b';
add_manualy_button = '#linkUsingIFSCContinueButton';
branch_ifsc_field = ':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic';
bank_act_no_field = ':nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic';
comfirm_bank_act_no_field = ':nth-child(2) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic';
bank_continue_button = '.BankDetails_buttonBackandContinueSection__ALIsQ > :nth-child(2)';

//terms & condition 
TC_button = '#termsandconditionsContinueButton';

//Nominee1 below 18 years with guardian details
nominee_name =':nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic';
relationshipdropdown=':nth-child(2) > .NomineeStyles_textfields__SHPbD > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select';
percentage_of_share ='input[name="percentageofShare"]';
date_of_birth='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
guardian_name='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
// guardian_dob='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'
// guardian_dob="body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)";
guardian_email='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
guardian_mobilenum='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
guardian_relationship='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)';
guardian_adres_same='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > span:nth-child(1) > input:nth-child(1)';
nominee_contact_same=':nth-child(4) > .MuiButtonBase-root > .PrivateSwitchBase-input';
add_nominee2='#nomineesAddNomineeButton';

//Nominee 2(address field is automated to type the nominee address)  
nominee_name2='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
nominee2_relationship="body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)";
percentage_share2='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
nominee2_dob='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
nominee2_address='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
nominee2_pincode='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
nominee2_city='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
nominee2_state='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)';
add_nominee3='#nomineesAddNomineeButton';

//nominee3 relationship as othrers(friend)
nominee3_name='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
nominee3_relationship='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)';
percentage_share3='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
other_relationship='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
nominee3_contact=':nth-child(5) > :nth-child(1) > .NomineeStyles_fieldsSection__2GYDN > .NomineeStyles_checkBox__n4c8D > .MuiButtonBase-root > .PrivateSwitchBase-input';
nominee_continue_btn='#nomineesContinueButton';

//upload documents
upload_signature='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1)';
browse_signature='[style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%;"] > .MuiButtonBase-root'
done_signature="button[class$='MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-py8jni']";
upload_pan='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > label:nth-child(1)';
browse_pan='.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-1jqrhpo';
done_pan="button[class$='MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-py8jni']";
upload_statememt=':nth-child(3) > .css-qfdd9t > .MuiStack-root > #documentsUploadButton';
browse_statement='[style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%;"] > .MuiButtonBase-root';
done_statementupload='#documentsDoneButton';
upload_cheque='#documentsUploadButton';
browse_cheque='[style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%;"] > .MuiButtonBase-root';
done_chequeupload='#documentsDoneButton';
click_uploadalldocuments='#upLoadDocumentsContinueButton';

//photo
take_photo='.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.WebCam_takePhoto__OmZks.css-1jqrhpo';
click_photocontinue='body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)';

//E-sign
click_esign='#aadharOpenLinkButton';
click_esigncontinue="button[class$='MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-ql0aov']";
verify_textonsetu='.powered-by-txt';
setu_signdoc="button[id$='complete']";
verify_text2="div[class='break-word'] p[data-text-colour='slate']";
enter_aadhar="#identifier";
send_otp='#get-otp-btn';
verify_otp='#submit-otp-btn';
completeesign='#complete';









visit_url(){
    cy.visit(this.url);
}

//mobile verification
Enter_Mobile(mobileNumber){
    cy.get(this.Mobile_no_field).type(mobileNumber);
}
checkbox_kyc(){
    cy.get('.PrivateSwitchBase-input').click();
}
click_continue() {
    cy.get(this.Continue_Button).click();
    // cy.get(this.email_field, { timeout: 200000 }).should('be.visible');
    // cy.get(this.Pan_no_field, { timeout: 200000 }).should('be.visible');
    cy.wait(25000); 
}

//mail verification
Enter_name(name){
    cy.get(this.email_name).type(name)
}
Enter_email(email){
    cy.get(this.email_field).type(email);
}
click_mail_continue() {
    cy.get(this.continue_email_button).click();
    cy.wait(2000);
    cy.get(this.Pan_no_field, { timeout: 200000 }).should('be.visible');
    // cy.wait(35000);
}

//pan verification

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
//Aadhaar
Digio_link(){
    cy.get(this.digio_aadhaar).click() 
    cy.wait(70000);
    cy.visit('https://signup-uat.thefirstock.tech/aadhaar')
    cy.wait(1000)
    cy.get(this.clickfetched_details).click()
    cy.visit('https://signup-uat.thefirstock.tech/yourprofile')
    cy.wait(4000);
}
testdigio(){cy.get(this.digio_aadhaar).click()
    cy.wait(2000)
    cy.visit('https://accounts.digitallocker.gov.in/oauth_partner/register/%252Foauth2%252F1%252Fconsent%253Flogo%253D%2526response_type%253Dcode%2526client_id%253DF58D9414%2526state%253D438dea06-4e64-483c-964c-565b781de6c0%252521LzI4NDYyNmMyLWMzZjctNGNiZi1iMGNiLTk2NGViOWFmM2ZlZi8%25253D%2526redirect_uri%253Dhttps%25253A%25252F%25252Fdg.setu.co%25252Fapi%25252Fdigilocker%25252Fcallback%2526code_challenge%253DOgwhzqAQxFiN4yu__SFl_7gjdwWmt5_ohglc4ESqECc%2526code_challenge_method%253DS256%2526scope%253Dopenid%2526orgid%253D003533%2526txn%253D664db4f309903oauth21716368627%2526hashkey%253D837ff866bc96c41c3522ef55dee124b481b4d94c31ea3ebcd607c79555f24643%2526requst_pdf%253DN%2526app_name%253DU2V0dQ%25253D%25253D%2526signup%253Dsignup');
    cy.get(this.adhaar1_blank).type('3113')
    cy.get(this.adhaar2_blank).type('0706')
    cy.get(this.adhaar3_blank).type('8251')
    cy.get(this.next_btn).click()
    cy.wait(25000)
    cy.get('#otp_button').click()
    cy.wait(2000)
    cy.get('#v_pin_1').type('0')
    cy.get('#v_pin_2').type('8')
    cy.get('#v_pin_3').type('1')
    cy.get('#v_pin_4').type('9')
    cy.get('#v_pin_5').type('8')
    cy.get('#v_pin_6').type('5')
    cy.get('#verify_pin_button').click()
    cy.wait(1000)
    cy.get(this.allow_btn).click()
    cy.wait(15000)
    cy.visit('https://signup-uat.thefirstock.tech/aadhaar')
    cy.wait(1000)
    cy.get(this.clickfetched_details).click()
    

}


//personal deatils
enter_father_name(fathername){
    cy.get(this.father_name_field).type(fathername);
}
enter_mother_name(mothername){
    cy.get(this.mother_name_field).type(mothername);
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


Are_you_politically_exposed(politicallyexposed) {
    if (politicallyexposed === 'No') {
        cy.get('.YourProfile_subContainer__HH3Uj > [style="width: 100%;"] > .MuiFormControl-root > .YourProfile_chipsstylecontainer__hp9Qx > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiChip-label').click();
    } else if (politicallyexposed === 'Yes') {
        cy.get('.YourProfile_subContainer__HH3Uj > [style="width: 100%;"] > .MuiFormControl-root > .YourProfile_chipsstylecontainer__hp9Qx > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root').click();
    }
}


select_trading_experience(trading_experience){
    if (trading_experience === 'New'){
        cy.get('.YourProfile_subContainer__HH3Uj > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(1) > .MuiChip-label').click();
    } else if (trading_experience === '1-5 years'){
        cy.get('.YourProfile_subContainer__HH3Uj > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(2) > .MuiChip-label').click();
    } else if (trading_experience === '5-10 years'){
        cy.get('.YourProfile_subContainer__HH3Uj > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(3)').click();
    } else if (trading_experience === '10-15 years'){
        cy.get('.YourProfile_subContainer__HH3Uj > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(4) > .MuiChip-label').click();
    } else if (trading_experience === '15+ years'){
        cy.get('.YourProfile_subContainer__HH3Uj > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(5) > .MuiChip-label').click();
    }
}
select_anual_income(anual_income){
    if (anual_income === 'Below 1 lakh'){
        cy.get('.YourProfile_subRightContainer__Z9KJv > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(1) > .MuiChip-label').click();
    } else if (anual_income === '1-5 lakhs'){
        cy.get('.YourProfile_subRightContainer__Z9KJv > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(2) > .MuiChip-label').click();
    }  else if (anual_income === '5-10 lakhs'){
        cy.get('.YourProfile_subRightContainer__Z9KJv > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(3) > .MuiChip-label').click();
    } else if (anual_income === '10-25 lakhs'){
        cy.get('.YourProfile_subRightContainer__Z9KJv > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(4) > .MuiChip-label').click();
    } else if (anual_income === '25lakhs - 1crore'){
        cy.get('.YourProfile_subRightContainer__Z9KJv > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(5) > .MuiChip-label').click();
    } else if (anual_income === 'Above one crore'){
        cy.get('.YourProfile_subRightContainer__Z9KJv > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(6) > .MuiChip-label').click();
    }
}

select_occupation(occupation){
   if (occupation === 'Agriculturist'){
    cy.get('.YourProfile_subRightContainerOccupation__-0cfa > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(1)').click();
   } else if (occupation === 'Buisness'){
    cy.get('.YourProfile_subRightContainerOccupation__-0cfa > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(2) > .MuiChip-label').click();
   } else if (occupation === 'Government service'){
    cy.get('.YourProfile_subRightContainerOccupation__-0cfa > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(3)').click();
   } else if (occupation === 'homemaker/housewife'){
    cy.get('.YourProfile_subRightContainerOccupation__-0cfa > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(4) > .MuiChip-label').click();
   } else if (occupation === 'professional'){
    cy.get('.YourProfile_subRightContainerOccupation__-0cfa > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(5) > .MuiChip-label').click();
   } else if (occupation === 'Private sector'){
    cy.get(':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .Selectdropdown_mainWrapper__aYA6c > :nth-child(6) > .MuiChip-label').click();
   } else if (occupation === 'Public sector'){
    cy.get(':nth-child(7) > .MuiChip-label').click();
   } else if (occupation === 'retired'){
    cy.get(':nth-child(8) > .MuiChip-label').click();
   } else if (occupation === 'Student'){
    cy.get(':nth-child(9) > .MuiChip-label').click();
   } else if (occupation === 'others'){
    cy.get(':nth-child(10) > .MuiChip-label').click();
   } else if (occupation === ' self employed'){
    cy.get(':nth-child(11) > .MuiChip-label').click();
   }
}
enter_other_occupation(enter){
    cy.get('body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(enter);

}
click_personal_detail_continue(){
    cy.get(this.personal_detail_continue).click();
}

unselect_Trading_Preferences(unselect){
    if (unselect === 'F&O'){
        cy.get('.MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root').click();
    } else if (unselect === 'mutual fund'){
        cy.get(':nth-child(2) > .MuiFormControlLabel-root').click();
    }
}

click_Trading_Preferences_Continue(){
    cy.wait(7000);
    cy.get(this.Trading_Preferences_Continue).click();
    cy.wait(3000);
    cy.get(this.trading).click();
    cy.wait(2000);
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

//Nominee details

Enter_Nominee_name(Nominee){
    cy.get(this.nominee_name).type(Nominee)
}

SelectNomineeRelationship(Relationship)
{
    cy.get(this.relationshipdropdown).click()
    cy.contains(Relationship).click({force:true});
    cy.wait(1000)
}

Enter_percentage_share(share){
    cy.get(this.percentage_of_share).clear()
    cy.get(this.percentage_of_share).type(share)
    
}
Enter_birth_date(dob){
    cy.get(this.date_of_birth).type(dob)
}
Enter_guardian_name(gname){
    cy.get(this.guardian_name).type(gname)
}
Enter_guardian_dob(gdob){
    
    cy.get(this.guardian_dob).type(gdob)
}
Enter_guardian_email(gemail){
    cy.get(this.guardian_email).type(gemail)
}
Enter_guardian_mobilenum(mnum){
    cy.get(this.guardian_mobilenum).type(mnum)
}
SelectGuardianRelationship(GuardianRelationship)
{
    cy.get(this.guardian_relationship).click()
    cy.contains(GuardianRelationship).click({force:true});
    
}
Click_Guardian_address_asmine(){
    cy.get(this.guardian_adres_same).click()
}
Click_nominee_contact(){
    cy.get(this.nominee_contact_same).click()
}
Click_add_nominee2(){
    cy.get(this.add_nominee2).click()
}
//Nominee2
Enter_nominee2(name2){
    cy.get(this.nominee_name2).type(name2)
}
SelectNominee2_Relationship()
{
    cy.get(this.nominee2_relationship).click()
    cy.get('.MuiList-root > :nth-child(2)').click();
    
}
Enter_percentage_share2(){
    cy.get(this.percentage_share2).clear()
    cy.get(this.percentage_share2).type('25')
}
Enter_Nominee2dob(){
    //cy.get(this.nominee2_dob).type('19061960')

}
Enter_nominee2_address(add){
    cy.get(this.nominee2_address).type(add)
}
Enter_nominee2_pincode(){
    cy.get(this.nominee2_pincode).type('567432')
}
Enter_nominee2_city(){
    cy.get(this.nominee2_city).type('Tiptur')
}
Enter_nominee2_state(){
    cy.get(this.nominee2_state).click()
    cy.contains('Delhi').click({Force:true});
}
Click_add_nominee3(){
    cy.get(this.add_nominee3).click()
}
Enter_nominee3_name(name3){
    cy.get(this.nominee3_name).type(name3)
}
Select_nominee3_relationship(){
    cy.get(this.nominee3_relationship).click()
    cy.contains('Others').click()
}
Enter_percentage_share3(){
    cy.get(this.percentage_share3).type('25')
}
Enter_otherrelationship(){
    cy.get(this.other_relationship).type('Friend')
}
Click_nominee3contact(){
    cy.get(this.nominee3_contact).click()
}

Click_nominee_continue(){
    cy.get(this.nominee_continue_btn).click()
}
//upload documents
SelectsignatureFile()
{
    cy.get(this.upload_signature).click()
    cy.get(this.browse_signature).attachFile('signature.jpg',{ subjectType: 'drag-n-drop' });
    cy.wait(1000);
}
Done_signature(){
    cy.get(this.done_signature).click();
    cy.wait(8000);
}
SelectpanFile(){
    cy.get(this.upload_pan).click();
    cy.get(this.browse_pan).attachFile('PAN.jpg',{ subjectType: 'drag-n-drop' });
    cy.wait(1000);
}
Done_pan(){
    cy.get(this.done_pan).click({force:true});
    cy.wait(8000);
}
SelectStatementFile(){
    cy.get(this.upload_statememt).click();
    cy.get(this.browse_statement).attachFile('completeV4.pdf',{ subjectType: 'drag-n-drop' });
    cy.wait(1000);
}
Done_statement(){
    cy.get(this.done_statementupload).click();
    cy.wait(8000);
}
SelectchequeFile(){
    cy.get(this.upload_cheque).click();
    cy.get(this.browse_cheque).attachFile('completeV4.pdf',{ subjectType: 'drag-n-drop' });
    cy.wait(1000);
}
Done_chequeupload(){
    cy.get(this.done_chequeupload).click();
    cy.wait(5000)
}
Click_Uploadalldocuments(){
    cy.get(this.click_uploadalldocuments).click();
    cy.wait(30000);
}

//Photo
Take_Photo(){
    cy.get(this.take_photo).click();
    cy.get(this.click_photocontinue).click();
}
//E-sign
Click_Esign(){
    cy.wait(2000);
    cy.get(this.click_esign).click();
    cy.wait(50000);
    cy.get(this.click_esigncontinue).click();
}
//SETU
Click_signsetudoc(){
    cy.visit('https://dg.setu.co/signature/preview?requestId=92ef437d-6d05-4a48-adcb-dcf52e5c66b1&signerId=5fc1ee9d-eaa3-4c1b-bcb1-3d8cd7040f50');
    
    cy.get(this.verify_textonsetu).should('have.text',"Powered by")
    cy.get(this.Click_signsetudoc).contains("SIGN YOUR DOCUMENT").click({ force: true });

    //cy.get(this.Click_signsetudoc).click({force:true});
    
    cy.visit('https://authenticate.e-mudhra.com/SETU/index.jsp?txnref=amFkbnJ1bmtUTU9vdFNaUTVLRS1MQTpiODc5MDU5YjI4NTg0ODRkYjFlNXxkM2U1NGI0ODMyODY5YzU5MjQzOTliYWZlZDZiMmQyNDdkMDA5ZDE1YzNhMjE3YjE5ZmU4ODA5MWVkM2Y1ZmUx&env=');
    cy.get(this.verify_text2).should('have.text',"Document name")
    cy.get(this.enter_aadhar).type('311307068251');
    cy.get(this.send_otp).click();
    cy.wait(15000);
    cy.get(this.verify_otp).click();
    cy.wait(1000)
    cy.get(this.completeesign).click();
}
















}
export default signup;