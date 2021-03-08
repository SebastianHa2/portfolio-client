<template>
    <main class="main-page" v-if="active === 'main-page'">
        <div class="picture-of-me">
        </div>
        <div class="personal-information">
            <div class="name">Sebastian Haczela</div>
            <div class="navigation-2">
                <nav>
                    <div class="projects">
                        <a @click="active ='projects'" class="btn-flip" data-back="Take a look" data-front="Projects"></a>
                    </div>
                    <div class="skills-btn">
                        <a @click="active = 'skills'" class="btn-flip" data-back="trust me" data-front="skills"></a>
                    </div>
                    <div class="contact-me">
                        <a @click="active = 'contact'" class="btn-flip" data-back="Don't think twice" data-front="Contact me"></a>
                    </div>
                    <div class="resume">
                        <a href="../assets/sebastianhaczelaresume.pdf" target="_blank" class="btn-flip" data-back="view" data-front="resume"></a>
                    </div>
                </nav>
            </div>
            <div class="about-me">
                <h2>A <span>little</span> bit about coding and I</h2>
                <p>I am a young aspiring developer. I was always a more "programmatically" thinking person, who often heard "it's because you spend so much time in front of that computer". So when I first set off on my coding journey, even though first days, weeks and months were strenous, to put it mildly, I knew I was never going to look back. This was expected, because, how do you talk to someone if you don't speak their language? HTML and CSS were my first friends. They're easier to get along with, I would say, because they show much more than they speak. With them I learned how to structure and style pages in any way I like, without the help of any external libraries or boilerplates, now this is freedom. There came a limit however, when I wanted slides to move, display something dynamically or else, they just kind of looked at me. I knew it was time to meet Vanilla JavaScript. JS is much more sophisticated and logical, but this is why I fell in love with it, if you'll command it right, there is nothing in web development it won't do for you, I learned that very quickly when I saw my websites coming to life with interactiveness. This is when projects presented in this portfolio also started coming into existance. After months of failures and successes, googling, asking and researching, JavaScript and I came to a very good understanding and he decided to introduce me to family, Vue.js, who has helped me build my first demo single-page websites and is helping me build this portfolio. At the end, I cannot fail to mention, VS Code who helps me communicate, Webpack who always keeps everyone together, GIT who always kept us safe and commited.
                </p>
            </div>
        </div>
        <div class="navigation">
            <nav>
                <div class="projects">
                    <a @click="active ='projects'" class="btn-flip" data-back="Take a look" data-front="Projects"></a>
                </div>
                <div class="skills-btn">
                    <a @click="active = 'skills'" class="btn-flip" data-back="trust me" data-front="skills"></a>
                </div>
                <div class="contact-me">
                    <a @click="active = 'contact'" class="btn-flip" data-back="Don't think twice" data-front="Contact me"></a>
                </div>
                <div class="resume">
                    <a href="./assets/static/sebastianhaczelaresume.pdf" type="application/octet-stream" target="_blank" class="btn-flip" data-back="view" data-front="resume"></a>
                </div>
            </nav>
        </div>
        <p class="copy">designed and created by Sebastian Haczela &copy; 2021 </p>
    </main>
    <section class="skills" v-if="active === 'skills'">
        <skills-page></skills-page>
    </section>
    <section class="projects" v-if="active === 'projects'">
        <projects-page></projects-page>
    </section>
    <section class="contact" v-if="active === 'contact'">
        <contact-page></contact-page>
    </section>
</template>

<script>
import SkillsPage from './SkillsPage.vue'
import ProjectsPage from './ProjectsPage.vue'
import ContactPage from './ContactPage.vue'
export default {
    components: {SkillsPage, ProjectsPage, ContactPage},
    data() {
        return{
            active: "main-page"
        }
    },
    methods: {
        goBack(to) {
            this.active = to
        } 
    },
    provide() {
        return{
            goBack: this.goBack
        }
    }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');

    .main-page{
        height: 100vh;
        width: 100vw;
        background-color: #fdf5e6;
        position: relative;

        .copy{
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            font-size: 1.5rem;
            opacity: 0.8;
        }

        .picture-of-me{
            position: absolute;
            right: 0;
            width: 30vw;
            height: 100vh;

            background: url('../assets/me.jpg') center no-repeat;
            background-size: cover;
            border-radius: 1.5rem 0 0 1.5rem;
        }


        .personal-information{
            width: 70vw;
            height: 80vh;

            .name{
                width: 100%;
                font-size: 6rem;
                font-weight: 500;
                color: #000;
                height: 20vh;
                display: flex;
                align-items: center;
                justify-content: center;
                text-transform: uppercase;
            }

            .about-me{
                font-family: 'Quicksand', sans-serif;
                width: 100%;
                font-weight: 200;
                font-size: 1.4rem;
                text-align: left;
                position: relative;

                
                h2{
                    padding-left: 5rem;
                    margin-bottom: 1rem;

                    span{
                        text-decoration: line-through;
                    }
                }

                p{
                    padding: 0 5rem;
                    font-size: 1.7rem;
                    text-align: justify;
                    line-height: 2.5rem;

                }
            }
        }

        $speed: 0.5s;

        .navigation, .navigation-2{
            width: 100%;
            height: 15vh;
            nav{
                width: 50%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                .btn-flip{
                    opacity: 1;
                    outline: 0;
                    color: #fff;
                    line-height: 4rem;
                    position: relative;
                    text-align: center;
                    letter-spacing: 0.1rem;
                    display: inline-block;
                    text-decoration: none;
                    font-family: 'Open Sans';
                    text-transform: uppercase;
                    
                    &:hover{
                        cursor: pointer;

                        &:after{
                        opacity: 1;
                        transform: translateY(0) rotateX(0);
                        }
                        
                        &:before{
                        opacity: 0;
                        transform: translateY(50%) rotateX(90deg);
                        }
                    }
                    
                    &:after{
                        top: 0;
                        left: 0;
                        opacity: 0;
                        width: 100%;
                        color: #323237;
                        display: block;
                        transition: $speed;
                        position: absolute;
                        background: #adadaf;
                        content: attr(data-back);
                        transform: translateY(-50%) rotateX(90deg);
                    }
                    
                    &:before{
                        top: 0;
                        left: 0;
                        opacity: 1;
                        color: #adadaf;
                        display: block;
                        padding: 0 3rem;
                        line-height: 4rem;
                        transition: $speed;
                        position: relative;
                        background: #323237;
                        content: attr(data-front);
                        transform: translateY(0) rotateX(0);
                    }
                }
            }
        }

        .navigation-2{
            display: none;
        }
    }

    .skills{
        min-height: 100vh;
    }

    /* Media queries */


    @media(max-height: 650px ){
        .main-page{
            height: auto;
            .personal-information{
                height: auto;
            }
        }
    }

    @media(max-width: 1300px){
        .main-page{
            height: auto;
            .personal-information{
                height: auto;
            }

            .navigation{
                nav{
                    width: 60%;
                }
            }
        }
    }

    @media(max-width: 1050px){
        .main-page{
            .navigation{
                nav{
                    width: 70%;
                }
            }
        }
    }
    
        @media(max-width: 950px){
        .main-page{
            padding-bottom: 5rem;
            .picture-of-me{
                top: 14rem;
                height: 80vh;
            }

            .personal-information{
                .name{
                    width: 140%;
                    font-size: 6rem;
                }
            }

            .navigation{
                nav{
                    width: 100%;
                }
            }
        }
    }

        
    @media(max-width: 700px){
        .main-page{

            .picture-of-me{
                top: 27rem;
            }
            .navigation{
                nav{
                    width: 100%;
                }
            }

            .personal-information{
                .name{
                    width: 140%;
                    font-size: 5.5rem;
                }
            }

            .copy{
                width: 100%;
                text-align: center;
            }
        }
    }

    @media(max-width: 650px){
        .main-page{
            .personal-information{
                .name{
                    font-size: 4.5rem;
                }
            }

        }
    }

    @media(max-width: 600px){
        .main-page{
            display: flex;
            flex-direction: column;

            .picture-of-me{
                position: relative;
                height: 50vh;
                width: 100vw;
                top: 0;
            }

            .personal-information{
                width: 100%;
                .name{
                    font-size: 3rem;
                    height: 15vh;
                    width: 100%;
                }

                .about-me{
                    padding: 5rem 0;
                }
            }

            .navigation{
                display: none;
            }

            .navigation-2{
                display: flex;
                width: 100%;
                height: 15vh;

                nav{
                    width: 100%;
                }
            }
        }
    }

    @media(max-width: 500px){
        .main-page{
            .navigation-2{
                    height: 30vh;
                    nav{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                }
            }
        }


 


</style>