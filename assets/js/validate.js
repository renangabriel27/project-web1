
	/* ---------- Function for newsfeed  ------------ */

	function follow() {
		do {
			var email = prompt("Digite seu email ");
		} while(!validateTxt(email));

		var email_confirm = confirm("Você deseja receber atualizações do site por email?");

		if(email_confirm != "")
			alert("Email cadastrado com sucesso!");

	}

	/* --------- Validate txt ------------ */


	function validateTxt(txt) {
		if((txt==null) || (txt=="") || (!isNaN(txt))) {
			return false;
		}
		return true;
	}

	/* --------- Functions for contact-page ---------- */


	function validateEmpty() {

		var name = document.forms[0].elements[0].value;
		var email = document.forms[0].elements[1].value;
		var message = document.forms[0].elements[2].value;
		if (validateTxt(name) && (validateTxt(email) && validateTxt(message))) {
			return true;
		}
		return false;
	}

	function validate() {
		if(validateEmpty()) {
			alert("Envio realizado com sucesso\n\n" + name);
		} else {
			alert("Preencha os campos vazios");
		}
	}

	/* --------- Error forms ----------- */

    function inputClass() {
    	$("#name").focus();
        $("input,textarea").blur(function(){
            if($(this).val() == ""){
                $(this).addClass('border-error');
                $("#error").text("Preencha os campos obrigatórios!").fadeToggle();
            }
        });
        $("input,textarea").keyup(function(){
            $(this).addClass('bg-input');
        });
    }

	$(document).ready(function(){
		inputClass();
    });
