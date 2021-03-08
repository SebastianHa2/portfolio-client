<template>
    <transition name="msg-sent">
        <div class="back-cover" v-if="messageSent">
            <div class="message-sent">
                <h2>Your message was sent successfully!</h2>
            </div>
        </div>
    </transition>
    <div class="contact-container">
        <div class="arrow" @click="goBack('main-page')">
            <i class="fas fa-chevron-left"></i>
            <p>Go back</p>
        </div>
        <div class="contact-1">
            <div class="telephone">
                <img src="../assets/phone.png" alt="">
                <div class="icons">
                    <div class="middle">
                        <a target="_blank" class="btn fb" href="https://www.facebook.com/sebastian.haczela/">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" class="btn li" href="https://www.linkedin.com/in/sebastian-haczela-b12b801ba/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a target="_blank" class="btn git" href="https://github.com/SebastianHa2">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div class="phone-number">
                    <div class="phone-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <a href="tel:+353894676632">+353 89 467 6632</a>
                </div>
                <div class="email">
                    <div class="email-icon">
                        <i class="far fa-envelope"></i>
                    </div>
                    <a href="mailto:hacza212@gmail.com">hacza212@gmail.com</a>
                </div>
            </div>
        </div>
        <div class="contact-2">
            <div class="form-container">
                <h3> or just leave me a message</h3>
                <form @submit.prevent="submitForm()">
                    <div class="input">
                        <p class="invalid-message" v-if="invalidName">Please enter your full name</p>
                        <label for="name" :class="{labelMoveUp: nameLabelUp}">Name </label>
                        <input :class="{invalid: invalidName}" name="name" type="text" id="name" v-model="name" @focus="moveLabelUp('name'), invalidName = false" @blur="moveLabelDown('name')">
                    </div>
                    <div class="input">
                        <p class="invalid-message" v-if="invalidEmail">Please enter your email </p>
                        <label for="email" :class="{labelMoveUp: emailLabelUp}">Email</label>
                        <input :class="{invalid: invalidEmail}" type="email" name="email" id="email" v-model="email" @focus="moveLabelUp('email'), invalidEmail = false" @blur="moveLabelDown('email')">
                    </div>
                    <div class="input">
                        <p class="invalid-message" v-if="invalidSubject">Please enter the subject</p>
                        <label for="subject" :class="{labelMoveUp: subjectLabelUp}">Subject</label>
                        <input :class="{invalid: invalidSubject}" type="text" name="subject" id="subject" v-model="subject" @focus="moveLabelUp('subject'), invalidSubject = false" @blur="moveLabelDown('subject')">
                    </div>
                    <div class="input">
                        <p class="invalid-message" v-if="invalidMessage">Please enter your message</p>
                        <label for="message" id="message-label" :class="{labelMoveUp: messageLabelUp }">Your Message</label>
                        <textarea :class="{invalid: invalidMessage}" name="message" id="message" cols="30" rows="10" v-model="message" @focus="moveLabelUp('message'), invalidMessage = false" @blur="moveLabelDown('message')"></textarea>
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    inject: ['goBack'],
    data() {
        return{
            name: '',
            subject: '',
            message: '',
            email: '',
            messageLabelUp: false,
            subjectLabelUp: false,
            nameLabelUp: false,
            emailLabelUp: false,
            invalidName: false,
            invalidEmail: false,
            invalidSubject: false,
            invalidMessage: false,
            messageSent: false
        }
    },
    methods: {
        moveLabelUp(label){
            if(label === 'message'){
                this.messageLabelUp = true
            }else if(label === 'subject'){
                this.subjectLabelUp = true
            }else if(label === 'name'){
                this.nameLabelUp = true
            }else if(label === 'email'){
                this.emailLabelUp = true
            }

        },
        moveLabelDown(label){
            if(label === 'message' && this.message == ''){
                this.messageLabelUp = false
            }else if(label === 'subject' && this.subject == ''){
                this.subjectLabelUp = false
            }else if(label === 'name' && this.name == ''){
                this.nameLabelUp = false
            }else if(label === 'email' && this.email == ''){
                this.emailLabelUp = false
            }
        },
        
        async registerUser(data) {
            try {
                let response = await axios.post('http://localhost:4000/', data);
                console.log(response)
                document.body.style.overflow = "hidden"
                this.messageSent = true;
                setTimeout(() => {
                    document.body.style.overflow = "visible"
                    this.messageSent = false
                }, 2000)
            } catch (err) {
                alert("Something Went Wrong");
            }
        },
        submitForm(){
            if(this.name.length < 3 || this.subject === '' || this.message === '' || this.email === ''){
                if(this.name.length < 3){
                    this.invalidName = true
                }if(this.email === ''){
                    this.invalidEmail = true
                }if(this.subject === ''){
                    this.invalidSubject = true
                }if(this.message === ''){
                    this.invalidMessage = true
                }
            }else{
                let formData = {
                    name: this.name,
                    email: this.email,
                    subject: this.subject,
                    message: this.message
                }

                this.registerUser(formData)

            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400&display=swap');

    .back-cover{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 10;

        .message-sent{
            width: 40vw;
            height: 20vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            background-color: #fdf5e6;
            text-transform: uppercase;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .msg-sent-enter-from{
        opacity: 0;
    }

    .msg-sent-enter-active, .msg-sent-leave-active{
        transition: all 0.3s;
    }

    .msg-sent-enter-to, .msg-sent-leave-from{
        opacity: 1;
    }

    .msg-sent-leave-to{
        opacity: 0;
    }


    .contact-container{
        display: flex;

        .arrow{
            position: fixed;
            left: 2rem;
            bottom: 2rem;
            font-size: 2rem;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            transition: all 0.4s;

            &:hover{
                cursor:pointer;
                transform: scale(1.1);
            }
            
            i{
                font-size: 2.2rem;
            }
            p{
                margin-left: 2rem;
            }
        }
    }

    .contact-1{
        width: 40%;
        height: 100vh;
        padding: 5rem;
        background-color: #fdf5e6;
        font-family: 'Quicksand', sans-serif;
        text-transform: uppercase;

        .telephone{
            width: 30rem;
            height: 55rem;
            margin: 2rem auto;
            position: relative;
            background-color: #dcedc1;
            border-radius: 3rem;
            box-shadow: inset 1rem 1.2rem 0.9rem #fdf5e6;

            .icons{
                position: absolute;
                top: 30%;
                left:0;
                display: flex;
                width: 100%;
                justify-content: space-around;

                .middle{
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 100%;
                    text-align: center;

                    .btn{
                        display: inline-block;
                        width: 5rem;
                        height: 5rem;
                        background: #f1f1f1;
                        margin: 1rem;
                        border-radius: 30%;
                        box-shadow: 0 0.5rem 1.5rem -0.5rem #000;
                        overflow: hidden;
                        position: relative;

                        i{
                            line-height: 5rem;
                            font-size: 2rem;
                            transition: 0.2s linear;
                        }

                        &:hover{
                            i{
                                transform: scale(1.3);
                                color: #f1f1f1;
                            }

                            &::before{
                                animation: aaa 0.7s 1;
                                top: -10%;
                                left: -10%;
                            }
                        }

                        &::before{
                            content: "";
                            position: absolute;
                            width: 120%;
                            height: 120%;
                            transform: rotate(45deg);
                            left: -110%;
                            top: 90%;
                        }
                    }

                    .fb{
                        color: #4267B2;

                        &::before{
                            background-color: #4267B2;
                        }
                    }

                    .li{
                        color:  #0072b1;

                        &::before{
                            background-color:  #0072b1;
                        }
                    }

                    .git{
                        color: #c9510c;

                        &::before{
                            background-color: #c9510c;
                        }
                    }
                }
            }

            img{
                height: 105%;
                width: 105%;
            }

            .phone-number{
                width: 100%;
                position: absolute;
                left: 50%;
                top: 45%;
                transform: translateX(-50%);
                display: flex;
                flex-direction: column;
                align-items: center;

                i{
                    font-size: 3rem;
                }

                a{
                    font-size: 2rem;
                    padding-top: 2rem;
                    color: #000;
                }
            }

            .email{
                width: 100%;
                position: absolute;
                left: 50%;
                bottom: 20%;
                transform: translateX(-50%);
                display: flex;
                flex-direction: column;
                align-items: center;

                i{
                    font-size: 3rem;
                }

                a{
                    font-size: 2rem;
                    padding-top: 2rem;
                    color: #000;
                }
            }
        }

        @keyframes aaa {
            0%{
                left: -110%;
                top: 90%;
            }50%{
                left: 10%;
                top: -30%;
            }100%{
                top: -10%;
                left: -10%;
            }
        }
    }

    .contact-2{
        width: 60%;
        background-color: #dcedc1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Quicksand', sans-serif;

        .form-container{
            width: 100%;
            
            h3{
                width: 100%;
                text-align: center;
                font-size: 2rem;
                text-transform: uppercase;
                margin-bottom: 2rem;
            }

            form{
                height: 80vh;
                width: 80%;
                margin: auto;
                background-color: #fdf5e6;
                display: flex;
                flex-direction: column;
                justify-content: center;
                border: 0.1rem solid #000;

                .input{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 2rem 0;
                    position: relative;

                    input:-webkit-autofill,
                    input:-webkit-autofill:hover, 
                    input:-webkit-autofill:focus, 
                    input:-webkit-autofill:active{
                        box-shadow: 0 0 0 3rem #fdf5e6 inset;
                        -webkit-box-shadow: 0 0 0 3rem #fdf5e6 inset;
                    }

                    .invalid-message{
                        position: absolute;
                        color: red;
                        bottom: -1.5rem;
                        text-transform: uppercase;
                    }

                    label{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 2rem;
                        transition: all 0.3s;
                    }

                    input{
                        width: 70%;
                        margin: auto;
                        text-align: center;
                        height: 3rem;
                        background-color: transparent;
                        font-size: 1.8rem;
                        border: none;
                        border-bottom: 0.1rem solid #000;
                        
                        &:focus{
                            outline: none;
                        }
                    }

                    
                    
                    #message-label{
                        top: 1.5rem;
                    }

                    textarea{
                        width: 70%;
                        text-align: center;
                        font-size: 1.8rem;
                        background-color: transparent;
                        max-width: 70%;
                        max-height: 20rem;

                        &:focus{
                            outline: none;
                        }
                    }

                    .invalid{
                        border: 0.2rem solid red;
                    }

                    .labelMoveUp{
                        top: -1.5rem !important;
                    }
                }

                button{
                    width: 40%;
                    margin: 3rem auto;
                    padding: 1rem 3.5rem;
                    background-color: transparent;
                    font-size: 2rem;
                    font-family: 'Quicksand', sans-serif;
                    border: 0.1 solid #000;
                    outline: none;
                    text-transform: uppercase;
                    letter-spacing: 0.1rem;
                    transition: all 0.4s;
                    
                    &:hover{
                        background-color: #000;
                        color: #fdf5e6;
                        cursor: pointer
                    }
                }
            }
        }
    }

    /* Media queries */

    @media(max-height: 700px){
        .contact{
            .contact-container{
                .contact-1{
                    height: 70rem;
                }
                .contact-2{
                    .form-container{
                        form{
                            height: 100%;
                            .input{
                                textarea{
                                    max-height: 10rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 1100px){
        .contact{
            .contact-container{
                flex-direction: column;
                .contact-1{
                    width: 100%;
                }
                .contact-2{
                    width: 100%;
                    padding: 5rem;
                }
            }
        }
    }

    @media(max-width: 700px){
        .contact{
            .contact-container{
                .contact-2{
                    form{
                        width: 100%;
                    }
                }
            }
        }
    }

    @media(max-width: 500px){
        .contact{
            .contact-container{
                .contact-2{
                    padding: 3rem;
                }

                .contact-1{
                    padding: 1rem;
                }
            }
        }
    }

</style>