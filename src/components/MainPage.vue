<template>
    <main class="main-page" v-if="$route.path === '/main'">
        <div class="picture-of-me">
        </div>
        <div class="personal-information">
            <div class="name">Sebastian Haczela</div>
            <div class="navigation-2">
                <nav>
                <div class="projects">
                    <router-link to="/projects" class="btn-flip" data-back="Take a look" data-front="Projects"></router-link>
                </div>
                <div class="skills-btn">
                    <router-link to="/skills" class="btn-flip" data-back="trust me" data-front="skills"></router-link>
                </div>
                <div class="contact-me">
                    <router-link to="/contact" class="btn-flip" data-back="Don't think twice" data-front="Contact me"></router-link>
                </div>
                <div class="resume">
                    <a href="../assets/sebastianhaczelaresume.pdf" target="_blank" class="btn-flip" data-back="view" data-front="resume"></a>
                </div>
                </nav>
            </div>
            <div class="about-me">
                <div class="location">
                    <i class="fas fa-location-arrow"></i>
                    <p>Dundalk, Ireland</p>
                </div>
                <h2 class="about-me-heading">A <span>little</span> bit about coding and I</h2>
                <p class="about-me-paragraph">I am an aspiring full-stack web developer currently based in Dundalk, Ireland. I have many dreams, but becoming a successful web developer is definitely up there. I was always a more "programmatically" thinking person, who often heard "it's because you spend so much time in front of that computer". My first connection with programming was when I learned Python in college, but my true love was and is JavaScript. 
                <br />
                <br />
                I am dedicated to writing simple code, but code that is clean and does its job. Learning new technologies and new skills, to me, is like making new cool friends. I always push myself to do the best I can and take pride in my work. I enjoy transforming designs into code, creating animation effects and writing JavaScript logic. I have profound interest in both the frontend and the backend technologies and strive to perfectly understand the flow between them.
                <br />
                <br />
                I am looking for a job position where I can give my all and where both sides will push each other forward, working on interesting projects/ideas around experienced people.
                </p>
            </div>
        </div>
        <div class="navigation">
            <nav>
                <div class="projects">
                    <router-link to="/projects" class="btn-flip" data-back="Take a look" data-front="Projects"></router-link>
                </div>
                <div class="skills-btn">
                    <router-link to="/skills" class="btn-flip" data-back="trust me" data-front="skills"></router-link>
                </div>
                <div class="contact-me">
                    <router-link to="/contact" class="btn-flip" data-back="Don't think twice" data-front="Contact me"></router-link>
                </div>
                <div class="resume">
                    <a href="https://drive.google.com/file/d/1bXC-22edJmqfLaC4kyT0VXHZTGjJCY7u/view?usp=sharing" class="btn-flip" data-back="view" data-front="resume"></a>
                </div>
            </nav>
        </div>
        <p class="copy">designed and created by Sebastian Haczela &copy; 2021 </p>
    </main>
    <router-view name="skills"></router-view>
    <router-view name="projects"></router-view>
    <router-view name="contact"></router-view>
</template>

<script>
import gsap from '../../node_modules/gsap'
export default {
    data() {
        return{
            mobile: false
        }
    },
    mounted(){
        window.scrollTo(0, 0)
        gsap.from('.picture-of-me', {duration: 1, right: '-100vw'})
        gsap.from('.name', {duration: 1, y: '-100%'})
        gsap.from('.btn-flip', {duration: 0.5, opacity: '0', stagger: 0.3})
        gsap.from('.about-me-heading', {duration: 1, x: '-100%'})
        gsap.from('.about-me-paragraph', {duration: 1, x: '+100%'})
        gsap.from('.location', {duration: 1, x: '+100%' })
    }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');

    .main-page{
        height: auto;
        width: 100vw;
        background-color: #fdf5e6;
        position: relative;
        overflow: hidden;

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
            height: 100%;

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

                .location{
                    padding-left: 5rem;
                    margin-bottom: 3rem;
                    
                    display: flex;

                    i{
                        font-size: 2rem;
                        margin-right: 1rem;
                    }

                    p{
                        font-size: 2rem;
                        padding: 0;
                    }
                }

                
                h2{
                    padding-left: 5rem;
                    margin-bottom: 2rem;

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
            width: 70vw;
            height: 15vh;
            nav{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding-left: 1rem;

                .skills-btn, .projects, .contact-me, .resume{
                    width: 13.5rem;
                }

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
                    width: 100%;
                    
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

    @media(max-height: 750px){
        .main-page{
            .personal-information{
                height: 100vh;
            }
        }
    }

    @media(max-height: 550px){
        .main-page{
            .personal-information{
                height: 120vh;
            }
        }
    }

    @media(min-width: 1300px){
        .main-page{
            .personal-information{
                height: 80vh;
            }
            .navigation{
                height: 20vh;
            }
        }

    }

    @media(max-width: 1300px){
        .main-page{
            height: auto;

            .navigation{
                height: 20vh;
                nav{
                    width: 100%;
                }
            }
        }
    }

    @media(max-width: 1150px){
        .main-page{

            .personal-information{
                height: 100vh;
            }
        }
    }

    @media(max-width: 1050px){
        .main-page{
            .personal-information{
                height: auto;
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
                width: 100%;
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

    @media(max-width: 650px){
        .main-page{
            display: flex;
            flex-direction: column;

            .picture-of-me{
                position: relative;
                height: 70vh;
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

    @media(max-width: 650px){
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