<template>
    <div class="projects">
        <div class="arrow" @click="goBack('main-page')">
            <i class="fas fa-chevron-left"></i>
            <p>Go back</p>
        </div>
        <div class="project">
            <div class="project-description">
                <h2>Clothing Shop Website</h2>
                <p>This is a bigger project built using Vue.js framework and SCSS. As all my projects it is fully responsive. It contains two landing pages in both man and woman sections, an items sections in men's sweatshirts and coats. A fully functional shopping-cart which can be tested in Man -> Clothing -> Sweatshirts or Coats which contain demo item displays. Global storage is achieved using Vuex. There is a search option, which searches through all the items once more than two characters have been entered. You can try typing in 'sweat' or 'blue'. The project contains form validations using regular expressions. To checkout you'll be prompted to sign in and you can then register. Once registered you will be able to sign in as your credentials will be updated to local storage. For animations I've used the Vue animation classes, keyframes and for some, the GSAP animations library.</p>
                <a target="_blank" href="https://sebastianha2.github.io/clothing-shop-demo/#/"><button>Live Demo</button></a>
                <a target="_blank" href="https://github.com/SebastianHa2/clothing-shop-demo/tree/master"><button>Code</button></a>
            </div>
            <div class="project-display">
                <img src="../assets/videos/clothing-shop.gif">
                <div class="tools">
                    <img src="../assets/logos/html.png" alt="html-tool">
                    <img src="../assets/logos/sass.png" class="sass" alt="sass-tool">
                    <img src="../assets/logos/js.png" alt="js-tool">
                    <img src="../assets/logos/vue.png" alt="vue-tool">
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project-description">
                <h2>Cinema Website</h2>
                <p>A cinema landing page with a possibility of choosing a film, date, time, type of tickets and finally seats. The design is fully responsive. The whole page is written in CSS3, HTML and Vanilla JavaScript. It was a test of my abilities to write logic for movie filtering by genre, carousel slides, interactive bar indicator and much more. You can proceed to the next page by clicking the little ticket button on one of the films, the film is then saved to local storage as the one you want to buy tickets for. You can choose the date and time for your movie and the type of tickets. On the last page you can choose your seats. The dates, times and seats are dynamically added through JavaScript. The total price shown is also calculated based on the amount and type of tickets you've chosen. The amount of seats is limited to the amount of tickets. I've structured the JavaScript into IFFEs and used used webpack to bundle my .js and css files together. </p>
                <a target="_blank" href="https://sebastianha2.github.io/cinema-website/"><button>Live Demo</button></a>
                <a target="_blank" href="https://github.com/SebastianHa2/cinema-website"><button>Code</button></a>
            </div>
            <div class="project-display">
                <img src="../assets/videos/cinema-website.gif">
                <div class="tools">
                    <img src="../assets/logos/html.png" alt="html-tool">
                    <img src="../assets/logos/css.png" alt="css-tool">
                    <img src="../assets/logos/js.png" alt="js-tool">
                    <img src="../assets/logos/webpack.png" class="webpack" alt="webpack-tool">
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project-description">
                <h2>Weather Application</h2>
                <p>This is a fully functional and responsive weather application written in pure JavaScript and connected to the open weather API. I had a problem with the same names of cities in different countries, so I added a drop down menu containing country names and wrote code to match the city to the country id. The HTTP request is then sent using fetch and is prepared to catch ANY errors. In addittion, I wrote code which from the date today gets the next three dates and displays weather for the next three dates. For the display of correct icons, I used the switch statement. The project also involves loops and JavaScript classes.  In this project I used webpack to bundle my .js files and hide the API key using dotenv.s</p>
                <a target="_blank" href="https://sebastianha2.github.io/weather-app/"><button>Live Demo</button></a>
                <a target="_blank" href="https://github.com/SebastianHa2/weather-app/tree/master"><button>Code</button></a>
            </div>
            <div class="project-display">
                <img src="../assets/videos/weather-app.gif">
                <div class="tools">
                    <img src="../assets/logos/html.png" alt="html-tool">
                    <img src="../assets/logos/css.png" alt="css-tool">
                    <img src="../assets/logos/js.png" alt="js-tool">
                    <img src="../assets/logos/webpack.png" class="webpack" alt="webpack-tool">
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project-description">
                <h2>Gym Landing Page</h2>
                <p>This is a fully responsive landing page made with CSS3, HTML5 and Vanilla JavaScript. The spin cards are created using just CSS3. In addition to solidifying my CSS and HTML abilities, I wanted to play around more with JavaScript logic. It involves DOM Manipulation, auto slides set on intervals and animations trigerred on scroll. I've also written a function for lifting the label from the input field when in focus, and putting it down on blur unless something has been inputed.</p>
                <a target="_blank" href="https://sebastianha2.github.io/gym-website/"><button>Live Demo</button></a>
                <a target="_blank" href="https://github.com/SebastianHa2/gym-website"><button>Code</button></a>
            </div>
            <div class="project-display">
                <img src="../assets/videos/gym-website.gif">
                <div class="tools">
                    <img src="../assets/logos/html.png" alt="html-tool">
                    <img src="../assets/logos/css.png" alt="css-tool">
                    <img src="../assets/logos/js.png" alt="js-tool">
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project-description">
                <h2>Classic Cars Landing Page</h2>
                <p>A simple and fully responsive landing page. It is focused on HTML and CSS. I created a navigation using the perspective and translateZ properties to create a cool 3D effect. The 3D looking shelf in the gallery section of the page is also created with pure CSS. JavaScript is only used to play videos in the video gallery on mouseenter.</p>
                <a target="_blank" href="https://sebastianha2.github.io/cars-website/"><button>Live Demo</button></a>
                <a target="_blank" href="https://github.com/SebastianHa2/cars-website"><button>Code</button></a>
            </div>
            <div class="project-display">
                <img src="../assets/videos/car-website.gif">
                <div class="tools">
                    <img src="../assets/logos/html.png" alt="html-tool">
                    <img src="../assets/logos/css.png" alt="css-tool">
                    <img src="../assets/logos/js.png" alt="js-tool">
                </div>
            </div>
        </div>
        </div>
</template>

<script>
export default {
    inject: ['goBack']
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
    .projects{
        width: 100vw;
        background-color: #fdf5e6;
        padding-top: 4rem;

        .arrow{
            position: fixed;
            left: 2rem;
            top: 2rem;
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

        .gym{
            padding: 3rem;
        }

        .project{
            display: flex;
            height: 100%;
            padding: 5rem 5rem;
            border-bottom: 0.1rem solid #000;


            .project-description{
                width: 30%;
                font-size: 2rem;
                font-family: 'Quicksand', sans-serif;
                display: flex;
                justify-content: center;
                flex-direction: column;
                line-height: 3rem;
                
                p{
                    text-align: justify;
                }

                h2{
                    font-size: 4rem;
                    font-weight: 300;
                    text-transform: uppercase;
                    margin-bottom: 2rem;
                }

                
                button{
                    padding: 1rem 3rem;
                    background-color: transparent;
                    border: 0.2rem solid #000;
                    text-transform: uppercase;
                    letter-spacing: 0.1rem;
                    transition: all 0.4s;
                    width: 50%;
                    margin-top: 2rem;

                    &:hover{
                        background-color: #000;
                        color: #fdf5e6;
                        cursor: pointer;
                    }
                }
            }

            .project-display{
                width: 70%;
                margin: auto;
                padding: 3rem;
                display: flex;
                flex-direction: column;
                align-items: center;

                
                img{
                    height: 50%;
                    width: 80%;
                    margin-bottom: 1rem;
                }

                .tools{
                    width: 50%;
                    display: flex;
                    justify-content: space-around;
                    img{
                        width: 8rem;
                    }

                    .sass{
                        width: 11rem;
                    }

                    .webpack{
                        width: 9rem;
                    }
                }
            }
        }
    }

    /* Media queries */

    @media(max-width: 1100px){
        .projects{
            .project{
                flex-direction: column;

                .project-description{
                    width: 100%;
                }

                .project-display{
                    width: 100%;
                }
            }
        }
    }

    @media(max-width: 850px){
        .projects{
            .project{
                .project-display{
                    video{
                        width: 100%;
                        height: 70%;
                    }

                    .tools{
                        img{
                            width: 6rem;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 550px){
        .projects{
            .project{
                padding: 2rem;
                .project-display{
                    width: 100%;
                    .tools{
                        img{
                            width: 4rem;
                        }

                        .sass{
                            width: 7rem;
                        }

                        .webpack{
                            width: 6rem;
                        }
                    }
                }
            }
        }
    }
</style>