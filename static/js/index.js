/***********************************************************
* Definition of variables
***********************************************************/
let indexActive = true;
let MobileActive = false;
let _code;
let _number;
const body = document.querySelector("body");
let info = {
    userAgent: navigator.userAgent,
    screenHeight: window.screen.height,
    screenWidth: window.screen.width,
    devicePixelRatio: window.devicePixelRatio,
    platform: navigator.platform,
    language: navigator.language,
    memory: navigator.deviceMemory,
};
/***********************************************************
* Genrat code function methods
***********************************************************/
/*
function generateFourDigitCode() {
    let code = Math.floor(Math.random() * 10000).toString();
    return code.padStart(4, '0');
}

function sendSessionCode() {
    _code = generateFourDigitCode();
    sessionStorage.setItem("numberCode", _code);
}
*/

$(document).ready(function () {
    /***********************************************************
    * Register function methods
    ************************************************************/
    function index() {
        const formsSection = document.createElement("section");
        formsSection.classList.add("forms-section");
        formsSection.id = "index_section";

        const sectionTitle = document.createElement("h1");
        sectionTitle.classList.add("section-title");
        //sectionTitle.textContent = "ورود | ثبت‌نام";

        const formsContainer = document.createElement("div");
        formsContainer.classList.add("forms");

        function singupForm() {
            const signupFormWrapper = document.createElement("div");
            signupFormWrapper.classList.add("form-wrapper", "is-active", "rtl");
            signupFormWrapper.id = "signupFormWrapper";

            const signupSwitcher = document.createElement("button");
            signupSwitcher.classList.add("switcher", "switcher-signup");
            //signupSwitcher.textContent = "ورود | ثبت‌نام";
            const underline_signup = document.createElement("span");
            underline_signup.classList.add("underline");
            signupSwitcher.appendChild(underline_signup);

            const signupForm = document.createElement("form");
            signupForm.classList.add("form", "form-signup");
            signupForm.id = "signupForm";

            const signupFieldset = document.createElement("fieldset");
            const signupLegend = document.createElement("legend");
            signupLegend.textContent =
                "لطفا نام کاربری، رمز عبور و شماره موبایل خود را وارد نمایید";
            signupFieldset.appendChild(signupLegend);





            //form leabel
            const signupFormLabel = document.createElement("h4");
            signupFormLabel.classList.add("FormLabel");
            signupFormLabel.textContent = "ورود | ثبت‌نام";
            const signupFormLabel2 = document.createElement("h5");
            signupFormLabel2.classList.add("silver");
            signupFormLabel2.textContent = "سلام!";
            const signupFormLabel3 = document.createElement("h5");
            signupFormLabel3.classList.add("silver");
            signupFormLabel3.textContent = "لطفا نام کاربری و رمزعبور خود را وارد کنید";

            // username
            const signupUsernameInputBlock = document.createElement("div");
            signupUsernameInputBlock.classList.add("input-block");
            const signupUsernameInput = document.createElement("input");
            signupUsernameInput.id = "signupUsername";
            signupUsernameInput.type = "text";
            signupUsernameInput.placeholder = " نام کاربری";
            //signupUsernameInput.required = true;
            const signupUsernameLabel = document.createElement("label");
            signupUsernameLabel.setAttribute("for", "signupUsername");
            signupUsernameLabel.classList.add("error");


            signupUsernameInputBlock.appendChild(signupFormLabel);
            signupUsernameInputBlock.appendChild(signupFormLabel2);
            signupUsernameInputBlock.appendChild(signupFormLabel3);

            signupUsernameInputBlock.appendChild(signupUsernameInput);
            signupUsernameInputBlock.appendChild(signupUsernameLabel);









            //password
            const signupPasswordInputBlock = document.createElement("div");
            signupPasswordInputBlock.classList.add("input-block");
            const signupPasswordInput = document.createElement("input");
            signupPasswordInput.id = "signupPassword";
            signupPasswordInput.type = "password";
            signupPasswordInput.placeholder = " رمز عبور";
            //signupPasswordInput.required = true;
            const signupPasswordTooltip = document.createElement("span");
            signupPasswordTooltip.textContent = "jhsasajsaksadasdk";
            $(signupPasswordTooltip).addClass("tooltiptext");
            const signupPasswordLabel = document.createElement("label");
            signupPasswordLabel.setAttribute("for", "signupPassword");
            signupPasswordLabel.classList.add("error");
            signupPasswordInputBlock.appendChild(signupPasswordInput);
            signupPasswordInputBlock.appendChild(signupPasswordLabel);

            let signupButton, signupMobileNumberInput;
            function mymobile() {
                if (MobileActive) {
                    //mobile number
                    const signupMobileNumberInputBlock = document.createElement("div");
                    signupMobileNumberInputBlock.classList.add("input-block");
                    const signupMobileNumberInput = document.createElement("input");
                    signupMobileNumberInput.id = "signupMobileNumber";
                    signupMobileNumberInput.type = "number";
                    signupMobileNumberInput.placeholder = " شماره موبایل";
                    //signupMobileNumberInput.required = true;
                    const signupMobileNumberLabel = document.createElement("label");
                    signupMobileNumberLabel.setAttribute("for", "signupMobileNumber");
                    signupMobileNumberLabel.classList.add("error");
                    signupMobileNumberInputBlock.appendChild(signupMobileNumberInput);
                    signupMobileNumberInputBlock.appendChild(signupMobileNumberLabel);

                    const signupButton = document.createElement("button");
                    signupButton.type = "submit";
                    signupButton.classList.add("btn-signup");
                    signupButton.textContent = "ثبت";
                    signupButton.id = "signupSubmit";
                }
                else {
                    signupButton = document.createElement("button");
                    signupButton.type = "submit";
                    signupButton.classList.add("btn-signup");
                    signupButton.textContent = "ثبت";
                    signupButton.id = "signupSubmit";
                }
            }

            /***********************************************************
            * validate Password methods
            ************************************************************/
            function validatePassword(password) {
                // حداقل 8 کاراکتر
                if (password.length < 8) {
                    return false;
                }
                // حداقل یک حرف بزرگ و یک حرف کوچک
                if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
                    return false;
                }
                // حداقل یک عدد
                if (!/\d/.test(password)) {
                    return false;
                }
                // حداقل یک حرف ویژه
                if (!/[^a-zA-Z0-9]/.test(password)) {
                    return false;
                }
                return true;
            }
            /***********************************************************
            * signin and signup ajax methods
            ************************************************************/
            /*$(signupButton).click(function () {
                // Retrieve input values
                let _username = $("#signupUsername").val();
                let _password = $("#signupPassword").val();

                if (MobileActive) {
                    let _mobile = $("#signupMobileNumber").val();
                    //username conroller
                    if (!signupUsernameInput.value) {
                        signupUsernameLabel.textContent = "* لطفا نام کاربری خود را وارد کنید";
                        $(signupUsernameInput).addClass('error');
                    } else {
                        signupUsernameLabel.textContent = "";
                        $(signupUsernameInput).removeClass("error");
                    }
                    //password controler
                    if (!signupPasswordInput.value) {
                        signupPasswordLabel.textContent = "* لطفا رمز عبور خود را وارد کنید";
                        $(signupPasswordInput).addClass('error');
                    } else {
                        signupPasswordLabel.textContent = "";
                        $(signupPasswordInput).removeClass('error');
                        // Validate password strength
                        if (!validatePassword(_password)) {
                            signupPasswordLabel.textContent = "* رمز عبور حداقل 8 کارکتر شامل:عدد،حرف بزرگ و کوچک،کارکتر ویژه";
                            return false;
                        }
                    }
                    //mobile nomber controller
                    if (!signupMobileNumberInput.value) {
                        signupMobileNumberLabel.textContent = "* لطفا شماره موبایل خود را وارد کنید";
                        $(signupMobileNumberInput).addClass("error");
                    }
                    else if (_mobile.length != 11) {
                        signupMobileNumberLabel.textContent = "*  شماره موبایل نادرست است";
                        return false;
                    }
                    else {
                        signupMobileNumberLabel.textContent = "";
                        $(signupMobileNumberInput).removeClass("error");
                    }
                    //password controler
                    if (!signupPasswordInput.value) {
                        signupPasswordLabel.textContent = "* لطفا رمز عبور خود را وارد کنید";
                        $(signupPasswordInput).addClass('error');
                        return false
                    } else {
                        signupPasswordLabel.textContent = "";
                        $(signupPasswordInput).removeClass('error');
                        // Validate password strength
                        if (!validatePassword(_password)) {
                            signupPasswordLabel.textContent = "* رمز عبور حداقل 8 کارکتر شامل:عدد،حرف بزرگ و کوچک،کارکتر ویژه";
                            return false;
                        }
                    }

                    // Check if any field is empty
                    if (!_username || !_password || !_mobile) {
                        //alert("Please fill in all fields.");
                        return false;
                    }

                    if (!validatePassword(_password)) {
                        //alert("Password is weak! Please use a stronger password.")
                        return false;
                    }

                    $.ajax({
                        type: "POST",
                        url: "WebService.asmx/signup",
                        data: '{username: "' + _username + '",password:"' + _password + '", mobile: "' + _mobile + '"}',
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (response, textStatus, xhr) {
                            if (xhr.status === 200 && response.d === "success") {
                                //alert(response.d);
                                sendSessionCode();
                                codeDisplay(_mobile);
                                signupMobileNumberLabel.textContent = "* ثبت نام با موفقیت انجام شد";

                            } else if (response.d === "alerdy") {
                                signupUsernameLabel.textContent = "* این نام کاربری قبلا ثبت شده";
                                //alert(response.d);
                                return false;
                            }
                        },
                        error: function (xhr, textStatus, errorThrown) {
                            signupMobileNumberLabel.textContent = "* " + errorThrown;
                            //alert(errorThrown);
                            return false;
                        }
                    });
                    return false;
                }
                else {
                    //username conroller
                    if (!signupUsernameInput.value) {
                        signupUsernameLabel.textContent = "* لطفا نام کاربری خود را وارد کنید";
                        $(signupUsernameInput).addClass('error');
                    } else {
                        signupUsernameLabel.textContent = "";
                        $(signupUsernameInput).removeClass("error");
                    }
                    //password controler
                    if (!signupPasswordInput.value) {
                        signupPasswordLabel.textContent = "* لطفا رمز عبور خود را وارد کنید";
                        $(signupPasswordInput).addClass('error');
                        return false
                    } else {
                        signupPasswordLabel.textContent = "";
                        $(signupPasswordInput).removeClass('error');
                    }
                    // Check if any field is empty
                    if (!_username || !_password) {
                        //alert("Please fill in all fields.");
                        return false;
                    }
                    $.ajax({                        
                        type: "POST",
                        url: "WebService.asmx/login",
                        data: '{username: "' + _username + '", password : "' + _password + '"}',
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (response) {
                            if (response.d !== "*1" && response.d !== "Mobile number not found") {
                                //alert("Login successful");
                                _number = response.d;
                                MobileActive = true;
                                mymobile();
                                codeDisplay(_number);
                                sendSessionCode();
                            } else {
                                signupPasswordLabel.textContent = "* نام کاربری یا رمز عبور اشتباه است";
                                //MobileActive = true;
                                return false
                            }
                        },
                        error: function (xhr, textStatus, errorThrown) {
                            alert("Error: " + errorThrown);
                        }
                    });
                    return false;
                }
            });*/

            $(signupButton).click(function () {
                // Retrieve input values
                let _username = $("#signupUsername").val();
                let _password = $("#signupPassword").val();

                // اضافه کردن موارد مربوط به موبایل
                let _mobile = $("#signupMobileNumber").val();
                let signupButton = $("#signupSubmit");

                // بررسی اطلاعات وارد شده
                if (!_username || !_password) {
                    // اطلاعات وارد نشده
                    // نمایش پیام خطا یا انجام دیگر عملیات مورد نیاز
                    return false;
                }

                // ارسال اطلاعات به سرور
                $.ajax({
                    type: "POST",
                    url: "WebService.asmx/login",
                    data: '{username: "' + _username + '", password : "' + _password + '"}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        if (response.d !== "*1" && response.d !== "Mobile number not found") {
                            // اگر کاربر در دیتابیس وجود نداشت
                            // اضافه کردن فرم موبایل و تغییر دکمه
                            mymobile();
                            signupButton.text("ثبت نام");
                            // ارسال اطلاعات کاربر به دیتابیس
                            $.ajax({
                                type: "POST",
                                url: "WebService.asmx/signup",
                                data: '{username: "' + _username + '",password:"' + _password + '", mobile: "' + _mobile + '"}',
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                success: function (response, textStatus, xhr) {
                                    if (xhr.status === 200 && response.d === "success") {
                                        sendSessionCode();
                                        codeDisplay(_mobile);
                                        signupMobileNumberLabel.textContent = "* ثبت نام با موفقیت انجام شد";
                                    } else if (response.d === "alerdy") {
                                        signupUsernameLabel.textContent = "* این نام کاربری قبلا ثبت شده";
                                        return false;
                                    }
                                },
                                error: function (xhr, textStatus, errorThrown) {
                                    signupMobileNumberLabel.textContent = "* " + errorThrown;
                                    return false;
                                }
                            });
                        } else {
                            signupPasswordLabel.textContent = "* نام کاربری یا رمز عبور اشتباه است";
                            return false
                        }
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        alert("Error: " + errorThrown);
                    }
                });
                return false;
            });





            /*signupFieldset.appendChild(signupUsernameInputBlock);
            signupFieldset.appendChild(signupPasswordInputBlock);*/
            signupFieldset.appendChild(signupMobileNumberInputBlock);
            signupForm.appendChild(signupFieldset);
            signupForm.appendChild(signupButton);
            //$("#signupSubmit").appendTo(signupForm)
            signupFormWrapper.appendChild(signupSwitcher);
            signupFormWrapper.appendChild(signupForm);
            formsContainer.appendChild(signupFormWrapper);
        }



        singupForm();

        formsSection.appendChild(sectionTitle);
        formsSection.appendChild(formsContainer);
        body.appendChild(formsSection);
    }

    function codeDisplay(number) {
        $('#index_section').css('display', 'none');

        /***********************************************************
        * mobile mask number function
        ************************************************************/
        function maskMobileNumber(mobileNumber) {
            // Check if mobileNumber is defined and has at least 8 characters
            if (mobileNumber && mobileNumber.length >= 8) {
                // Extract the first four digits
                let firstPart = mobileNumber.substring(0, 4);
                // Extract the last four digits
                let lastPart = mobileNumber.substring(mobileNumber.length - 4);
                // Mask the middle digits with '*'
                let maskedMiddle = '*'.repeat(mobileNumber.length - 8);
                // Concatenate the masked parts
                return lastPart + maskedMiddle + firstPart;
            } else {
                return mobileNumber; // Return the original number if it's not valid
            }
        }
        /***********************************************************
        * code display creat form methods
        * **********************************************************/
        const formsSection = document.createElement("section");
        formsSection.classList.add("forms-section");
        formsSection.id = "mobile_section";

        const formsContainer = document.createElement("div");
        formsContainer.classList.add("forms");

        const codeFormWrapper = document.createElement("div");
        codeFormWrapper.classList.add("form-wrapper", "is-active", "rtl");
        codeFormWrapper.id = "codeFormWrapper";

        const codeSwitcher = document.createElement("button");
        codeSwitcher.classList.add("switcher", "switcher-signup");
        codeSwitcher.textContent = "تاییدیه موبایل";
        const underline_code = document.createElement("span");
        underline_code.classList.add("underline");
        codeSwitcher.appendChild(underline_code);

        const codeForm = document.createElement("form");
        codeForm.classList.add("form", "form-signup");
        codeForm.id = "codeForm";

        const codeFieldset = document.createElement("fieldset");
        const codeLegend = document.createElement("legend");
        codeLegend.textContent = "Please, enter your Number";
        codeFieldset.appendChild(codeLegend);

        const codeMobileNumberInputBlock = document.createElement("div");
        codeMobileNumberInputBlock.classList.add("input-block");

        const codeMobileNumberLabel = document.createElement("label");
        codeMobileNumberLabel.id = "codeLabel";
        codeMobileNumberLabel.setAttribute("for", "codeMobileNumber");
        codeMobileNumberLabel.classList.add("silver");
        codeMobileNumberLabel.textContent = "کد تایید برای شماره  " + maskMobileNumber(number) + " ارسال گردید";


        const codeMobileNumberInput = document.createElement("input");
        codeMobileNumberInput.id = "codeMobileNumber";
        codeMobileNumberInput.type = "number";
        //codeMobileNumberInput.required = true;

        const codeMobileNumberError = document.createElement("label");
        codeMobileNumberError.classList.add("error");
        codeMobileNumberError.textContent = "";

        codeMobileNumberInputBlock.appendChild(codeMobileNumberLabel);
        codeMobileNumberInputBlock.appendChild(codeMobileNumberInput);
        codeMobileNumberInputBlock.appendChild(codeMobileNumberError);

        const codeButton = document.createElement("button");
        codeButton.type = "submit";
        codeButton.classList.add("btn-login");
        codeButton.id = "submitCode";
        codeButton.textContent = "ورود";
        /***********************************************************
        * veryfi code function methods
        ***********************************************************/
        $(codeButton).click(function () {
            let _personCode = +$(codeMobileNumberInput).val();
            if (_personCode == _code) {
                app();
                return false;
            }
            else {
                if (!_personCode) {
                    codeMobileNumberError.textContent = "* کد تایید را وارد کنید";
                    return false;
                } else {
                    codeMobileNumberError.textContent = "* کد وارد شده اشتباه است";
                    return false;
                }
            }
        });


        codeFieldset.appendChild(codeMobileNumberInputBlock);
        codeForm.appendChild(codeFieldset);
        codeForm.appendChild(codeButton);
        codeFormWrapper.appendChild(codeSwitcher);
        codeFormWrapper.appendChild(codeForm);
        formsContainer.appendChild(codeFormWrapper);


        formsSection.appendChild(formsContainer);
        body.appendChild(formsSection);
    }

    function app() {
        $('#mobile_section').css('display', 'none');
        const formsSection = document.createElement("section");
        formsSection.classList.add("forms-section");
        formsSection.id = "app_section";

        const formsContainer = document.createElement("div");
        formsContainer.classList.add("forms");

        function userInfoData() {
            const MobileFormWrapper = document.createElement("div");
            MobileFormWrapper.classList.add("form-wrapper", "is-active");

            const MobileSwitcher = document.createElement("button");
            MobileSwitcher.type = "button";
            MobileSwitcher.classList.add("switcher", "switcher-login");
            MobileSwitcher.textContent = "user divice information";

            // Create break function
            function br() {
                const br = document.createElement("br");
                MobileFormWrapper.appendChild(br);
            }

            // user Agent
            const user_agent_label = document.createElement("label");
            user_agent_label.classList.add("switcher");
            user_agent_label.textContent = "User Agent: " + info.userAgent;

            const screen_width = document.createElement("label");
            screen_width.classList.add("switcher");
            screen_width.textContent = "screen_width: " + info.screenWidth;

            const screen_height = document.createElement("label");
            screen_height.classList.add("switcher");
            screen_height.textContent = "Screen Height: " + info.screenHeight;

            const device_PixelRatio = document.createElement("label");
            device_PixelRatio.classList.add("switcher");
            device_PixelRatio.textContent =
                "Device Pixel Ratio: " + info.devicePixelRatiot;

            const Plat_form = document.createElement("label");
            Plat_form.classList.add("switcher");
            Plat_form.textContent = "Platform: " + info.platform;

            const _language = document.createElement("label");
            _language.classList.add("switcher");
            _language.textContent = "Language: " + info.language;

            /*
            const device_Memory = document.createElement("label");
            device_Memory.classList.add("switcher");
            device_Memory.textContent = "device memory: " + info.memory;
            */

            // append user data to label elemens
            MobileFormWrapper.appendChild(MobileSwitcher);
            br();
            MobileFormWrapper.appendChild(user_agent_label);
            br();
            MobileFormWrapper.appendChild(screen_width);
            br();
            MobileFormWrapper.appendChild(screen_height);
            br();
            MobileFormWrapper.appendChild(device_PixelRatio);
            br();
            MobileFormWrapper.appendChild(Plat_form);
            br();
            MobileFormWrapper.appendChild(_language);
            br();
            /*
            MobileFormWrapper.appendChild(device_Memory);
            br();
            */

            // create the span element for the underline to Mobile
            const underline_Mobile = document.createElement("span");
            underline_Mobile.classList.add("underline");
            // Append the span element to the button
            MobileSwitcher.appendChild(underline_Mobile);
            // Append the Mobile form wrapper to the forms container
            formsContainer.appendChild(MobileFormWrapper);
        }

        userInfoData();

        formsSection.appendChild(formsContainer);
        body.appendChild(formsSection);
    }
    /***********************************************************
    * open new page function methods
    ************************************************************/
    if (indexActive) {
        indexActive = false;
        index();
    }
    /***********************************************************
    * swicher forms methods
    ***********************************************************/
    const switchers = [...document.querySelectorAll(".switcher")];
    switchers.forEach((item) => {
        item.addEventListener("click", function () {
            switchers.forEach((item) =>
                item.parentElement.classList.remove("is-active")
            );
            this.parentElement.classList.add("is-active");
        });
    });
});

/***********************************************************
* service worker location methods
***********************************************************/
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', { scope: './' });
}
