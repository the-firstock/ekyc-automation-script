class signup 
{

url = 'https://signup-uat.thefirstock.tech/';

//mobile verification
Mobile_no_field = 'body > div:nth-child(4) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)';
Continue_Button = '#signupContinueButton';

//mail verification
email_field = '#outlined-basic';
continue_email_button = '#yourDetailsContinueButton';

//pan verification
Pan_name_field = ':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic';
Pan_no_field = ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic';
pan_dob_field = 'body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
pan_continue_button = '#panVerificationContinueButton';








visit_url()
{
    cy.visit(this.url);
}

//mobile verification
Enter_Mobile(mobileNumber)
{
    cy.get(this.Mobile_no_field).type(mobileNumber);
}
click_continue()
{
    cy.get(this.Continue_Button).click();
}

//mail verification
Enter_email(email)
{
    cy.get(this.email_field).type(email);
}
click_mail_continue()
{
    cy.get(this.continue_email_button).click();
}

//pan verification
enter_pan_name(PanName)
{
    cy.get(this.Pan_name_field).type(PanName);
}
enter_pan_no(PanNo)
{
    cy.get(this.Pan_no_field).type(PanNo);
}
enter_pan_dob(PanDOB)
{
    cy.get(this.pan_dob_field).type(PanDOB);
}
click_pan_continue()
{
    cy.get(this.pan_continue_button).click();
}




}
export default signup;