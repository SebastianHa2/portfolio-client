<template>
    <div class="projects">
        <div class="arrow" @click="goBack('main-page')">
            <i class="fas fa-chevron-left"></i>
            <p>Go back</p>
        </div>
        <div class="project">
            <div class="project-description">
                <h2>Real Time Chat</h2>
                <p>This is a real time chat I've built using React.js, Node.js and websockets with Socket.io. You can choose a room to enter, once you enter you will see a welcome message from the admin and other present users would have seen a message that you've joined. The information about user's present in the room are also updated on real time. You can chat with people present in the room in real time!</p>
                <a target="_blank" href="https://realtime-peace-chat.herokuapp.com/"><button>Live Demo</button></a>
                <a target="_blank" href="https://github.com/SebastianHa2/realtime-chat-server"><button>Backend Code</button></a>
                <a target="_blank" href="https://github.com/SebastianHa2/realtime-chat-client"><button>Frontend Code</button></a>
            </div>
            <div class="project-display">
                <div class="gif-container">
                    <img src="../assets/videos/realchat.jpg" alt="real-chat-img" class="loading realchat-gif">
                </div>
                <div class="tools">
                    <img src="../assets/logos/react.png" alt="react-tool">
                    <img src="../assets/logos/css.png" alt="css-tool">
                    <img src="../assets/logos/node.png" alt="node-tool">
                    <img src="../assets/logos/socketio.png" alt="socketio-tool">
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project-description">
                <h2>Save Your Recipe SPA</h2>
                <p>This is a full-stack SPA I built using Vue.js as my front-end framework, Node.js plus Express.js on the server-side and MySQL as the database. I use axios to send requests to a REST API and MySQL queries are handled using the Sequelize ORM. I implemented pagination for the main recipes page, it is only showing one item at a time for demo purposes. There are register, log-in, create/edit/delete recipe functionalities with validation on both front and back-end. Only users who are logged in can create recipes, and only the creator of a recipe can edit or delete it. Authentication is achieved using a JWT. In addition safety from cross-site request forgery is implemented using csrf tokens. </p>
                <a target="_blank" href="https://save-your-recipe-full-stack.herokuapp.com/"><button>Live Demo</button></a>
                <a target="_blank" href="https://github.com/SebastianHa2/recipe-backend"><button>Backend Code</button></a>
                <a target="_blank" href="https://github.com/SebastianHa2/recipe-frontend"><button>Frontend Code</button></a>
            </div>
            <div class="project-display">
                <div class="gif-container">
                    <img src="../assets/videos/recipe-spa.png" alt="clothing-shop-img" class="loading recipe-gif">
                </div>
                <div class="tools">
                    <img src="../assets/logos/css.png" alt="css-tool">
                    <img src="../assets/logos/vue.png" alt="vue-tool">
                    <img src="../assets/logos/node.png" class="node-tool" alt="node-tool">
                    <img src="../assets/logos/mysql.png" alt="mysql-tool">
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project-description">
                <h2>Portfolio Website</h2>
                <p>This is a portfolio website you are currently on that I have made for myself. It is created using Vue.js and SCSS preprocessor. I've utilized the Vue animations lifecycles for some of the animations alongside the GSAP animation library. There is a small backend functionality written in Node.js that sends me an email when a person leaves a message. I had a problem with GIFs loading very slow because of their size, I've put images in their place and asynchronously place GIFs over them when they're fully loaded.</p>
                <a target="_blank" href="https://github.com/SebastianHa2/portfolio-email-backend"><button>Backend Code</button></a>
                <a target="_blank" href="https://github.com/SebastianHa2/portfolio-client"><button>Frontend Code</button></a>
            </div>
            <div class="project-display">
                <div class="gif-container">
                    <img src="../assets/videos/portfolio.jpg" alt="portfolio-img" class="loading portfolio-gif">
                </div>
                <div class="tools">
                    <img src="../assets/logos/vue.png" alt="vue-tool">
                    <img src="../assets/logos/sass.png" alt="sass-tool">
                    <img src="../assets/logos/node.png" alt="node-tool">
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project-description">
                <h2>Clothing Shop Website</h2>
                <p>This is a bigger project built using Vue.js framework and SCSS. As all my projects it is fully responsive. It contains two landing pages in both man and woman sections, an items sections in men's sweatshirts and coats. A fully functional shopping-cart which can be tested in Man -> Clothing -> Sweatshirts or Coats which contain demo item displays. Global state is achieved using Vuex. There is a search option, which searches through all the items once more than two characters have been entered. You can try typing in 'sweat' or 'blue'. The project contains form validations using regular expressions. To checkout you'll be prompted to sign in and you can then register. Once registered you will be able to sign in as your credentials will be updated to local storage. For animations I've used the Vue animation classes, keyframes and for some, the GSAP animations library.</p>
                <a target="_blank" href="https://sebastianha2.github.io/clothing-shop-demo/#/"><button>Live Demo</button></a>
                <a target="_blank" href="https://github.com/SebastianHa2/clothing-shop-demo/tree/master"><button>Code</button></a>
            </div>
            <div class="project-display">
                <div class="gif-container">
                    <img src="../assets/videos/clothing-shop.jpg" alt="clothing-shop-img" class="loading clothing-gif">
                </div>
                <div class="tools">
                    <img src="../assets/logos/sass.png" class="sass" alt="sass-tool">
                    <img src="../assets/logos/vue.png" alt="vue-tool">
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project-description">
                <h2>Cinema Website</h2>
                <p>A cinema landing page with a possibility of choosing a film, date, time, type of tickets and finally seats. The design is fully responsive. The whole page is written in CSS3, HTML and Vanilla JavaScript with an imperative approach. It was a test of my abilities to write logic for movie filtering by genre, carousel slides, interactive bar indicator and much more. You can proceed to the next page by clicking the little ticket button on one of the films, the film is then saved to local storage as the one you want to buy tickets for. You can choose the date and time for your movie and the type of tickets. On the last page you can choose your seats. The dates, times and seats are dynamically added through JavaScript. The total price shown is also calculated based on the amount and type of tickets you've chosen. The amount of seats is limited to the amount of tickets. I've structured the JavaScript using the Revealing Module Pattern and used webpack to bundle my .js and css files together. </p>
                <a target="_blank" href="https://sebastianha2.github.io/cinema-website/"><button>Live Demo</button></a>
                <a target="_blank" href="https://github.com/SebastianHa2/cinema-website"><button>Code</button></a>
            </div>
            <div class="project-display">
                <div class="gif-container">
                    <img src="../assets/videos/cinema-website.jpg" alt="cinema-website-img" class="loading cinema-gif">
                </div>
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
                <div class="gif-container">
                    <img src="../assets/videos/gym-website.jpg" alt="gym-website-img" class="loading gym-gif">
                </div>
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
import clothingGifUrl from '../../public/assets/static/clothing-shop.gif'
import cinemaGifUrl from '../../public/assets/static/cinema-website.gif'
import portfolioGifUrl from '../../public/assets/static/portfolio.gif'
import gymGifUrl from '../../public/assets/static/gym-website.gif'
import carsGifUrl from '../../public/assets/static/car-website.gif'
import recipeGifUrl from '../../public/assets/static/recipe-spa.gif'
import realchatGifUrl from '../../public/assets/static/realchat.gif'
export default {
    methods: {
        goBack() {
            this.$router.push('/main')
        },

        asyncImageLoader(url){
            return new Promise( (resolve, reject) => {
                let image = new Image()
                image.src = url
                image.onload = () => resolve(image)
                image.onerror = () => reject(new Error('could not load image'))
            })
        }
    },
    mounted(){
        window.scrollTo(0, 0)

        this.asyncImageLoader(clothingGifUrl).then(result => {
            document.querySelector('.clothing-gif').src = result.src
        })
        
        this.asyncImageLoader(cinemaGifUrl).then(result => {
            document.querySelector('.cinema-gif').src = result.src
        })

        this.asyncImageLoader(portfolioGifUrl).then(result => {
            document.querySelector('.portfolio-gif').src = result.src
        })

        this.asyncImageLoader(gymGifUrl).then(result => {
            document.querySelector('.gym-gif').src = result.src
        })

        this.asyncImageLoader(carsGifUrl).then(result => {
            document.querySelector('.cars-gif').src = result.src
        })

        this.asyncImageLoader(recipeGifUrl).then(result => {
            document.querySelector('.recipe-gif').src = result.src
        })
        this.asyncImageLoader(realchatGifUrl).then(result => {
            document.querySelector('.realchat-gif').src = result.src
        })
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
    .projects{
        width: 100%;
        background-color: #fdf5e6;
        padding-top: 4rem;
        overflow: hidden;

        .arrow{
            position: absolute;
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

                
                .gif-container{
                    height: 40%;
                    width: 70%;
                    margin-bottom: 1rem;
                    position: relative;

                    .gif{
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0; 
                        right: 0;
                        height: 100%;
                        width: 100%;
                        z-index: 100;
                        visibility: hidden;
                    }

                    .loading{
                        height: 100%;
                        width: 100%;
                    }
                }

                .tools{
                    width: 70%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    img{
                        width: 8rem;
                    }

                    .sass{
                        width: 11rem;
                    }

                    .webpack{
                        width: 9rem;
                    }

                    .node{
                        width: 13rem;
                        height: 7rem;
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