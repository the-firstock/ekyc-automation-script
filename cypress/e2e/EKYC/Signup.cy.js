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
      s1.click_continue();
      //email verification
      // s1.Enter_email(data.email);
      // s1.click_mail_continue();
      
      //  pan verification
      s1.enter_pan_name(data.Pan_Name);
      s1.enter_pan_no(data.Pan_no);
      s1.enter_pan_dob(data.Pan_DOB);
      s1.click_pan_continue();
      cy.wait(10000);
      s1.click_kra_continue();

      // personal details
      s1.enter_mother_name();
      s1.select_marital_status(data.marital_status);
    //   s1.select_trading_experience();
    //   s1.select_anual_income();
    //   s1.select_occupation();
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



      
    
      })
    });
 });