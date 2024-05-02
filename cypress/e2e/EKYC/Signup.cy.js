import signup from "../../Page_object_model/Signup";


describe('Launch URL', () => {
    const s1 = new signup();
  
    it('Should launch the URL', () => {
      s1.visit_url();
      cy.url().should('eq', s1.url);
      cy.viewport(1366, 633)

         cy.fixture('signup').then((data)=>{
      s1.Enter_Mobile(data.mobile_number);
      s1.click_continue();
      cy.wait(30000);

    //   s1.Enter_email(data.email);
    //   s1.click_mail_continue();
    //   cy.wait(30000);

      s1.enter_pan_name(data.Pan_Name);
      s1.enter_pan_no(data.Pan_no);
      s1.enter_pan_dob(data.Pan_DOB);
      s1.click_pan_continue();


      
    
      })
    });
 });