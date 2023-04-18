<script type="text/javascript">
                  function submitToAPI(e) {
                   e.preventDefault();
                   var URL = "https://yp6yixfvsl.execute-api.us-east-2.amazonaws.com/default";
            
                        var Refnamere = /[A-Za-z]{1}[A-Za-z]/;
                        if (!Refnamere.test($("#ref-input").val())) {
                            alert ("Name can not less than 2 char");
                            return;
                        }
                        var Fnamere = /[A-Za-z]{1}[A-Za-z]/;
                        if (!Fnamere.test($("#fname-input").val())) {
                            alert ("Name can not less than 2 char");
                            return;
                        }
                        var Lnamere = /[A-Za-z]{1}[A-Za-z]/;
                        if (!Lnamere.test($("#lname-input").val())) {
                            alert ("Name can not less than 2 char");
                            return;
                        }
                        var mobilere = /[0-9]{10}/;
                        if (!mobilere.test($("#phone-input").val())) {
                            alert ("Please enter valid mobile number");
                            return;
                        }
                        if ($("#email-input").val()=="") {
                            alert ("Please enter your email id");
                            return;
                        }
                        var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
                        if (!reeamil.test($("#email-input").val())) {
                            alert ("Please enter valid email address");
                            return;
                        }

            
                   var refname = $("#ref-input").val();
                   var fname = $("#first-input").val();
                   var lname = $("#last-input").val();
                   var phone = $("#phone-input").val();
                   var email = $("#email-input").val();
                   var street = $("#street-input").val();
                   var city = $("#city-input").val();
                   var state = $("#state-input").val();
                   var zip = $("#zip-input").val();
                   var desc = $("#comments-input").val();
                   var data = {
                      refname : refname,
                      fname : fname,
                      lname : lname,
                      phone : phone,
                      email : email,
                      street: street,
                      city : city,
                      state : state,
                      zip : zip,
                      desc : desc
                    };
            
                   $.ajax({
                     type: "POST",
                     url : "https://yp6yixfvsl.execute-api.us-east-2.amazonaws.com/default",
                     dataType: "json",
                     crossDomain: "true",
                     contentType: "application/json; charset=utf-8",
                     data: JSON.stringify(data),
            
                     
                     success: function () {
                       // clear form and show a success message
                       alert("Successfully Sent");
                       document.getElementById("contact-form").reset();
                   location.reload();
                     },
                     error: function () {
                       // show an error message
                       alert("Please check errors and try again");
                     }});
                 }
            </script>