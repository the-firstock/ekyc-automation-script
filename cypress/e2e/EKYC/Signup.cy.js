import signup from "../../Page_object_model/Signup";

describe('Launch URL', () => {
    // const s1 = new signup();
    const s1 = new signup();
    it('Should launch the URL', () => {
      s1.visit_url();
      cy.url().should('eq', s1.url);
      cy.viewport(1366, 633)

  cy.fixture('signup').then((data)=>{
      //mobile number verification
      s1.Enter_Mobile(data.mobile_number);
      s1.checkbox_kyc();
      s1.click_continue();
     
      // email verification
      // s1.Enter_name(data.Name);
      // s1.Enter_email(data.email);
      // s1.click_mail_continue();   
      
     //  pan verification
    
      s1.enter_pan_no(data.Pan_no);
    //   s1.enter_pan_dob(data.Pan_DOB);
    //   s1.click_pan_continue();  
        
    //   s1.click_kra_continue();

      
    //   //Digio

    //   // s1.testdigio();  
         
    //  // s1.Digio_link();

    //  // personal details
     
    //   s1.enter_father_name(data.Father_name);
    //   s1.enter_mother_name(data.Mother_Name);
    //   s1.select_marital_status(data.marital_status);
    //   s1.Are_you_politically_exposed(data.politically_exposed);
    //   s1.select_trading_experience(data.Your_trading_experience);
    //   s1.select_anual_income(data.Anual_income);
    //   // s1.select_occupation(data.occupation);
    //   if (data.occupation.type === 'others') {
    //     s1.select_occupation('others');
    //     s1.enter_other_occupation(data.occupation.name);
    // } else {
    //     s1.select_occupation(data.occupation.type);
    // }
      
    //   s1.click_personal_detail_continue();
     
    // //Trading Preferences
    
    // s1.click_Trading_Preferences_Continue();
    
    // //bank details
    
    // s1.select_add_bankDetails_manualy();
    // s1.click_add_manualy_button();
    // s1.enter_branch_ifsc_field(data.Branch_IFSC);
    // s1.enter_bank_act_no_field(data.Bank_account_number);
    // s1.enter_comfirm_bank_act_no_field(data.confirm_Bank_account_number);
    // s1.click_bank_continue_button();

    // //T&C
    // s1.click_TC_button(); 


    //nominee1 details
    s1.Enter_Nominee_name(data.Nominee1_name);
    s1.SelectNomineeRelationship(data.Nominee_Relationship);
    s1.Enter_percentage_share(data.Percentage_share1);
    s1.Enter_birth_date(data.Nominee_DOB);
    // cy.wait(500);
    s1.Enter_guardian_name(data.Guardian_name);
    // cy.wait(12000)
    s1.Enter_guardian_dob(data.Guardian_dob);
    s1.Enter_guardian_email(data.Guardian_email);
    s1.Enter_guardian_mobilenum(data.Guardian_mobilenum);
    s1.SelectGuardianRelationship(data.Guardian_Relationship);
    s1.Click_Guardian_address_asmine();
    s1.Click_nominee_contact();
    s1.Click_add_nominee2();
    

    //Nominee2 details
    s1.Enter_nominee2(data.Nominee2_name);
    s1.SelectNominee2_Relationship();
    s1.Enter_percentage_share2();
    cy.wait(12000);
    s1.Enter_Nominee2dob();
    s1.Enter_nominee2_address(data.Nominee2_address);
    s1.Enter_nominee2_pincode();
    s1.Enter_nominee2_city();
    s1.Enter_nominee2_state();
    s1.Click_add_nominee3();
    
    //nominee3 details
    s1.Enter_nominee3_name(data.Nominee3_name);
    s1.Select_nominee3_relationship();
    s1.Enter_percentage_share3();
    cy.wait(12000);
    s1.Enter_otherrelationship();
    s1.Click_nominee3contact();
    s1.Click_nominee_continue();    
   
    //upload documents
    
    s1.SelectsignatureFile();
    s1.Done_signature();
    
    s1.SelectpanFile();
    s1.Done_pan();
    
    s1.SelectStatementFile();
    s1.Done_statement();
   
    s1.SelectchequeFile();
    s1.Done_chequeupload();
    s1.Click_Uploadalldocuments(); 

    //Photo

    //s1.Take_Photo();  
    
    //E-sign
    s1.Click_Esign(); 
     s1.Click_signsetudoc(); 
   


      
    
      })
    });
 });