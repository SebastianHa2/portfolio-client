<template>
    <div class="skills">
        <div class="logos">
            <div class="logo html" @click="wiggle('html'), active = 'html'"> 
                <img src="../assets/logos/html.png" alt="html-logo">
            </div>
            <div class="logo css" @click="wiggle('css'), active = 'css'">
                <img src="../assets/logos/css.png" alt="css-logo">
            </div>
            <div class="logo js" @click="wiggle('js'), active = 'js'">
                <img src="../assets/logos/js.png" alt="js-logo">
            </div>
            <div class="logo vue" @click="wiggle('vue'), active = 'vue'">
                <img src="../assets/logos/vue.png" alt="vue-logo">
            </div>
            <div class="logo react" @click="wiggle('react'), active = 'react'">
                <img src="../assets/logos/react.png" alt="react-logo">
            </div>
            <div class="logo node" @click="wiggle('node'), active = 'node'">
                <img src="../assets/logos/node.png" alt="node-logo">
            </div>
            <div class="logo graphql" @click="wiggle('graphql'), active = 'graphql'">
                <img src="../assets/logos/graphql.png" alt="graphql-logo">
            </div>
            <div class="logo mysql" @click="wiggle('mysql'), active = 'mysql'">
                <img src="../assets/logos/mysql.png" alt="mysql-logo">
            </div>
            <div class="logo mongodb" @click="wiggle('mongodb'), active = 'mongodb'">
                <img src="../assets/logos/mongodb.png" alt="mongodb-logo">
            </div>
            <div class="logo sass" @click="wiggle('sass'), active = 'sass'">
                <img src="../assets/logos/sass.png" alt="sass-logo">
            </div>
            <div class="logo jquery" @click="wiggle('jquery'), active = 'jquery'">
                <img src="../assets/logos/jquery.png" alt="jquery-logo">
            </div>
            <div class="logo webpack" @click="wiggle('webpack'), active = 'webpack'">
                <img src="../assets/logos/webpack.png" alt="webpack-logo">
            </div>
            <div class="logo git" @click="wiggle('git'), active = 'git'">
                <img src="../assets/logos/git.png" alt="git-logo">
            </div>
            <div class="logo npm" @click="wiggle('npm'), active = 'npm'">
                <img src="../assets/logos/npm.png" alt="git-logo">
            </div>
        </div>
        <transition name="skill-show">
            <div class="overall-container" v-if="active !== ''">
                <div class="logo overall">
                    <button @click="active = ''">Overall</button>
                </div>
            </div>
        </transition>
        <transition name="skill-show">
            <div class="skill-description overall" v-if="active === ''">
                <skill-description>
                    <template v-slot:heading>
                        <h2>Overall</h2>
                    </template>
                    <template v-slot:paragraph>
                        <p>I have always prided myself in my <span class="highlight-1">analytical thinking</span> and approach. During my time studying Actuarial Maths I have enjoyed modules such as Analytical Modelling, Statistical Analysis and Economics. I strive in <span class="highlight-2">problem-solving</span>, be it real-world decisions, mathematical questions, chess puzzles, I love the feeling of a problem solved and we all know the feeling of code running after hours of failures. The key for me is always keep an <span class="highlight-1">open mind - think creatively</span>, take <span class="highlight-2">initiative</span> and stay <span class="highlight-3">resilient</span>. As a person I am <span class="highlight-2">open and friendly</span> which makes it very easy for me to engage in <span class="highlight-1">teamwork</span>. <br><br> <span class="highlight-4">When it comes to my coding skills click on a logo to see what I know!</span> </p>
                        <i class="star4 star5 star2 star1 star3"></i>
                    </template>
                </skill-description>
            </div>
        </transition>

        <transition name="skill-show">
            <div v-if="active === 'html'">
                <skill-description>
                    <template v-slot:heading>
                        HTML5
                    </template>
                    <template v-slot:rating>
                        <div class="rating">
                            <i class="fas fa-star star1"></i>
                            <i class="fas fa-star star2"></i>
                            <i class="fas fa-star star3"></i>
                            <i class="fas fa-star star4"></i>
                            <i class="fas fa-star star5"></i>
                        </div>
                    </template>
                    <template v-slot:paragraph>
                    I am not afraid to give myself a 5 star rating for my knowledge of HTML5. It has been by my side from the very beginning and writing it for each one of my projects made me confident in my ability to use it. Perfection by repetition.
                    </template>
                    <template v-slot:list>
                        <ul>
                            <li><p>Semantics</p> <i class="fas fa-check"></i></li>
                            <li><p>Text</p> <i class="fas fa-check"></i></li>
                            <li><p>Lists</p> <i class="fas fa-check"></i></li>
                            <li><p>Links</p> <i class="fas fa-check"></i></li>
                            <li><p>Images</p> <i class="fas fa-check"></i></li>
                            <li><p>Tables</p> <i class="fas fa-check"></i></li>
                            <li><p>Forms</p> <i class="fas fa-check"></i></li>
                        </ul>
                    </template>
                </skill-description>
            </div>
        </transition>

        <transition name="skill-show">
        <div v-if="active === 'css'">
            <skill-description>
                <template v-slot:heading>
                    CSS3
                </template>
                <template v-slot:rating>
                    <div class="rating">
                        <i class="fas fa-star star1"></i>
                        <i class="fas fa-star star2"></i>
                        <i class="fas fa-star star3"></i>
                        <i class="fas fa-star star4"></i>
                        <i class="far fa-star star5"></i>
                    </div>
                </template>
                <template v-slot:paragraph>
                    CSS3 has granted me the abilities to create fully responsive layouts, control images, style almost all HTML elements and even animate the elements with just a few lines of code. The CSS Flexbox module and CSS Grid Layout system give you incredible freedom as to what your page can look like.
                </template>
                <template v-slot:list>
                    <ul>
                        <li><p>Color</p> <i class="fas fa-check"></i></li>
                        <li><p>Positioning</p> <i class="fas fa-check"></i></li>
                        <li><p>Lists, Tables and Forms</p> <i class="fas fa-check"></i></li>
                        <li><p>Images</p> <i class="fas fa-check"></i></li>
                        <li><p>CSS Flexbox</p> <i class="fas fa-check"></i></li>
                        <li><p>CSS Grid</p> <i class="fas fa-check"></i></li>
                        <li><p>Media Queries</p> <i class="fas fa-check"></i></li>
                    </ul>
                </template>
            </skill-description>
        </div>
        </transition>

        <transition name="skill-show">
            <div v-if="active === 'js'">
                <skill-description>
                    <template v-slot:heading>
                        Vanilla JavaScript
                    </template>
                    <template v-slot:rating>
                        <div class="rating">
                            <i class="fas fa-star star1"></i>
                            <i class="fas fa-star star2"></i>
                            <i class="fas fa-star star3"></i>
                            <i class="fas fa-star star4"></i>
                            <i class="far fa-star star5"></i>
                        </div>
                    </template>
                    <template v-slot:paragraph>
                        JavaScript is another one of the technologies that never leave my side. After completing Jon Duckett's book on JS, Brad Traversy's udemy course and creating a lot of projects of my own, I feel very comfortable writing clean JavaScript code. I have a great grasp on OOP and some of the design patterns. However, Kyle Simpson and his You Don't Know JS series have made me realise that there is a long way to go. Definitely someday...
                    </template>
                    <template v-slot:list>
                        <ul>
                            <li><p>DOM Manipulation and Events</p> <i class="fas fa-check"></i></li>
                            <li><p>OOP in JavaScript</p> <i class="fas fa-check"></i></li>
                            <li><p>Asynchronous Programming</p> <i class="fas fa-check"></i></li>
                            <li><p>ES6+</p> <i class="fas fa-check"></i></li>
                            <li><p>Patterns</p> <i class="fas fa-check"></i></li>
                        </ul>
                    </template>
                </skill-description>
            </div>
        </transition>

        <transition name="skill-show">
            <div v-if="active === 'vue'">
                <skill-description>
                    <template v-slot:heading>
                        Vue.js
                    </template>
                    <template v-slot:rating>
                        <div class="rating">
                            <i class="fas fa-star star1"></i>
                            <i class="fas fa-star star2"></i>
                            <i class="fas fa-star star3"></i>
                            <i class="fas fa-star-half-alt star4"></i>
                            <i class="far fa-star star5"></i>
                        </div>
                    </template>
                    <template v-slot:paragraph>
                        I started learning Vue.js when I was comfortable writing pure Vanilla JavaScript based websites and applications, but needed something that would help me structure larger projects. I completed Maximilian Schwarzmüller's Vue - The Complete Guide course, along the way practicing and building my own projects. I learned how to split my projects into smaller components that work together, route between them, utilize Vue's reactivity and much more. At this point I feel confident enough to sit down and write the front-end of a website / application on my own. 
                    </template>
                    <template v-slot:list>
                        <ul>
                            <li><p>Core Concepts in Vue</p> <i class="fas fa-check"></i></li>
                            <li><p>Vue Server Side Rendering</p> <i class="fas fa-check"></i></li>
                            <li><p>Conditional Content</p> <i class="fas fa-check"></i></li>
                            <li><p>Forms and validation</p> <i class="fas fa-check"></i></li>
                            <li><p>Vue Router and Vuex</p> <i class="fas fa-check"></i></li>
                            <li><p>Animations and Transitions</p> <i class="fas fa-check"></i></li>
                        </ul>
                    </template>
                </skill-description>
            </div>
        </transition>

        <transition name="skill-show">
            <div v-if="active === 'react'">
                <skill-description>
                    <template v-slot:heading>
                        React.js
                    </template>
                    <template v-slot:rating>
                        <div class="rating">
                            <i class="fas fa-star star1"></i>
                            <i class="fas fa-star star2"></i>
                            <i class="fas fa-star star3"></i>
                            <i class="fas fa-star-half-alt star4"></i>
                            <i class="far fa-star star5"></i>
                        </div>
                    </template>
                    <template v-slot:paragraph>
                        React is another JavaScript framework that I've learnt and used for my projects. The more I work with it, the more I believe it's a candidate for my favourite framework. 
                    </template>
                    <template v-slot:list>
                        <ul>
                            <li><p>Core Concepts in React</p> <i class="fas fa-check"></i></li>
                            <li><p>Functional Hooks</p> <i class="fas fa-check"></i></li>
                            <li><p>Forms and validation</p> <i class="fas fa-check"></i></li>
                            <li><p>React Router</p> <i class="fas fa-check"></i></li>
                            <li><p>Redux</p> <i class="fas fa-check"></i></li>
                        </ul>
                    </template>
                </skill-description>
            </div>
        </transition>

        <transition name="skill-show">
            <div v-if="active === 'node'">
                <skill-description>
                    <template v-slot:heading>
                        Node.js
                    </template>
                    <template v-slot:rating>
                        <div class="rating">
                            <i class="fas fa-star star1"></i>
                            <i class="fas fa-star star2"></i>
                            <i class="fas fa-star star3"></i>
                            <i class="far fa-star star4"></i>
                            <i class="far fa-star star5"></i>
                        </div>
                    </template>
                    <template v-slot:paragraph>
                        Learning Node.js and its framework Express.js has given me the ability to create robust REST APIs as well as create server-side rendered templates with templating engines. I've taken my time to carefully learn how to handle errors and validation on the server-side, authentication, authorization, use databases in my projects and much more. Everyday I discover new possibilities and packages with Node.js.
                    </template>
                    <template v-slot:list>
                        <ul>
                            <li><p>Express.js</p> <i class="fas fa-check"></i></li>
                            <li><p>Templating engines like EJS</p> <i class="fas fa-check"></i></li>
                            <li><p>Rest APIs</p> <i class="fas fa-check"></i></li>
                            <li><p>Websockets / Socket.io</p> <i class="fas fa-check"></i></li>
                            <li><p>Sequelize and Mongoose</p> <i class="fas fa-check"></i></li>
                            <li><p>Authorization with sessions OR JWTs</p> <i class="fas fa-check"></i></li>
                            <li><p>MVC</p> <i class="fas fa-check"></i></li>
                            <li><p>GraphQl</p> <i class="fas fa-check"></i></li>
                        </ul>
                    </template>
                </skill-description>
            </div>
        </transition>

        <transition name="skill-show">
            <div v-if="active === 'graphql'">
                <skill-description>
                    <template v-slot:heading>
                        GraphQL
                    </template>
                    <template v-slot:rating>
                        <div class="rating">
                            <i class="fas fa-star star1"></i>
                            <i class="fas fa-star star2"></i>
                            <i class="far fa-star star3"></i>
                            <i class="far fa-star star4"></i>
                            <i class="far fa-star star5"></i>
                        </div>
                    </template>
                    <template v-slot:paragraph>
                        I've converted some of my projects from REST APIs to utilize GraphQL and become quite comfortable in creating GraphQL APIs. While GraphQL can be a bit more verbose, I prefer its data fetching approach to just one endpoint and possibility of personalising the fetched data allowing for better performance. 
                    </template>
                    <template v-slot:list>
                        <ul>
                            <li><p>Building APIs</p> <i class="fas fa-check"></i></li>
                            <li><p>Queries</p> <i class="fas fa-check"></i></li>
                            <li><p>Error Handling</p> <i class="fas fa-check"></i></li>
                            <li><p>GraphiQL</p> <i class="fas fa-check"></i></li>
                        </ul>
                    </template>
                </skill-description>
            </div>
        </transition>

        <transition name="skill-show">
            <div v-if="active === 'mysql'">
                <skill-description>
                    <template v-slot:heading>
                        MySQL
                    </template>
                    <template v-slot:rating>
                        <div class="rating">
                            <i class="fas fa-star star1"></i>
                            <i class="fas fa-star star2"></i>
                            <i class="far fa-star star3"></i>
                            <i class="far fa-star star4"></i>
                            <i class="far fa-star star5"></i>
                        </div>
                    </template>
                    <template v-slot:paragraph>
                        I've learned MySQL not only with Node's sequelize but also taken The Ultimate MySQL Bootcamp course on udemy where I learned pure MySQL.
                    </template>
                    <template v-slot:list>
                        <ul>
                            <li><p>MySQL workbench</p> <i class="fas fa-check"></i></li>
                            <li><p>CRUD queries</p> <i class="fas fa-check"></i></li>
                            <li><p>Data Realtionships</p> <i class="fas fa-check"></i></li>
                            <li><p>Logical Operators</p> <i class="fas fa-check"></i></li>
                            <li><p>Sequelize</p> <i class="fas fa-check"></i></li>
                            <li><p>Pagination</p> <i class="fas fa-check"></i></li>
                        </ul>
                    </template>
                </skill-description>
            </div>
        </transition>

        <transition name="skill-show">
            <div v-if="active === 'mongodb'">
                <skill-description>
                    <template v-slot:heading>
                        mongoDB
                    </template>
                    <template v-slot:rating>
                        <div class="rating">
                            <i class="fas fa-star star1"></i>
                            <i class="fas fa-star star2"></i>
                            <i class="far fa-star star3"></i>
                            <i class="far fa-star star4"></i>
                            <i class="far fa-star star5"></i>
                        </div>
                    </template>
                    <template v-slot:paragraph>
                        During my learning of Node.js I've came across MongoDB, it is a different type of database to MySQL in that there is no set schemas and there is no set out relationships between collections, this makes scaling these databases easier. 
                    </template>
                    <template v-slot:list>
                        <ul>
                            <li><p>MongoDB Compass</p> <i class="fas fa-check"></i></li>
                            <li><p>CRUD queries</p> <i class="fas fa-check"></i></li>
                            <li><p>Embedded Documents</p> <i class="fas fa-check"></i></li>
                            <li><p>Logical Operators</p> <i class="fas fa-check"></i></li>
                            <li><p>Mogoose</p> <i class="fas fa-check"></i></li>
                            <li><p>Pagination</p> <i class="fas fa-check"></i></li>
                        </ul>
                    </template>
                </skill-description>
            </div>
        </transition>

        <transition name="skill-show">
            <div v-if="active === 'sass'">
                <skill-description>
                    <template v-slot:heading>
                        SASS
                    </template>
                    <template v-slot:rating>
                        <div class="rating">
                            <i class="fas fa-star star1"></i>
                            <i class="fas fa-star star2"></i>
                            <i class="fas fa-star star3"></i>
                            <i class="far fa-star star4"></i>
                            <i class="far fa-star star5"></i>
                        </div>
                    </template>
                    <template v-slot:paragraph>
                        When I learned Sass writing CSS became even easier. Things I thought never possible with CSS have just become possible, reference symbols, nesting, creating reusable styling functions with mixins, all making the code cleaner.
                    </template>
                    <template v-slot:list>
                        <ul>
                            <li><p>Variables</p> <i class="fas fa-check"></i></li>
                            <li><p>Reference symbols</p> <i class="fas fa-check"></i></li>
                            <li><p>Nesting</p> <i class="fas fa-check"></i></li>
                            <li><p>Mixins</p> <i class="fas fa-check"></i></li>
                            <li><p>Extend/Inheritence</p> <i class="fas fa-check"></i></li>
                        </ul>
                    </template>
                </skill-description>
            </div>
        </transition>

        <transition name="skill-show">
            <div v-if="active === 'jquery'">
                <skill-description>
                    <template v-slot:heading>
                        jQuery
                    </template>
                    <template v-slot:rating>
                        <div class="rating">
                            <i class="fas fa-star star1"></i>
                            <i class="fas fa-star star2"></i>
                            <i class="fas fa-star-half-alt star3"></i>
                            <i class="far fa-star star4"></i>
                            <i class="far fa-star star5"></i>
                        </div>
                    </template>
                    <template v-slot:paragraph>
                        I have read about jQuery and practiced some of it when studying from Jon Duckett's JavaScript book that includes it. As I dove deeper into JavaScript though, I never felt the need for it, because anything that jQuery was used for could now be achieved with modern JavaScript and so my knowledge of it is limited to theory.
                    </template>
                    <template v-slot:list>
                        <ul>
                            <li><p>DOM Manipulation</p> <i class="fas fa-check"></i></li>
                            <li><p>Editing CSS Rules</p> <i class="fas fa-check"></i></li>
                        </ul>
                    </template>
                </skill-description>
            </div>
        </transition>

        <transition name="skill-show">
            <div v-if="active === 'webpack'">
                <skill-description>
                    <template v-slot:heading>
                        Webpack
                    </template>
                    <template v-slot:rating>
                        <div class="rating">
                            <i class="fas fa-star star1"></i>
                            <i class="fas fa-star star2"></i>
                            <i class="fas fa-star-half-alt star3"></i>
                            <i class="far fa-star star4"></i>
                            <i class="far fa-star star5"></i>
                        </div>
                    </template>
                    <template v-slot:paragraph>
                        My need for webpack arose when I built a bigger website without the use of a JavaScript framework. Having more than just one .js and .css files and dependencies all around, I wondered if there was a way to bring it all together. Webpack was the answer, I learned to utilize the module bundler through practice and acquired a good working knowledge of it.
                    </template>
                    <template v-slot:list>
                        <ul>
                            <li><p>Configuration</p> <i class="fas fa-check"></i></li>
                            <li><p>Loaders</p> <i class="fas fa-check"></i></li>
                            <li><p>Plugins</p> <i class="fas fa-check"></i></li>
                        </ul>
                    </template>
                </skill-description>
            </div>
        </transition>

        <transition name="skill-show">
            <div v-if="active === 'git'">
                <skill-description>
                    <template v-slot:heading>
                        GIT
                    </template>
                    <template v-slot:rating>
                        <div class="rating">
                            <i class="fas fa-star star1"></i>
                            <i class="fas fa-star star2"></i>
                            <i class="fas fa-star star3"></i>
                            <i class="fas fa-star star4"></i>
                            <i class="far fa-star star5"></i>
                        </div>
                    </template>
                    <template v-slot:paragraph>
                        I know GIT is one of the most important tools when working in a group, where sharing and keeping the project up-to-date for everyone is key. I started using this version control system as soon as I began programming to become comfortable with it. I now have basic working knowledge of it and using it through GIT Bash.
                    </template>
                    <template v-slot:list>
                        <ul>
                            <li><p>Basic Snapshotting</p> <i class="fas fa-check"></i></li>
                            <li><p>Continuous Integration</p> <i class="fas fa-check"></i></li>
                            <li><p>Branching and merging</p> <i class="fas fa-check"></i></li>
                        </ul>
                    </template>
                </skill-description>
            </div>
        </transition>
        <transition name="skill-show">
            <div v-if="active === 'npm'">
                <skill-description>
                    <template v-slot:heading>
                        NPM
                    </template>
                    <template v-slot:rating>
                        <div class="rating">
                            <i class="fas fa-star star1"></i>
                            <i class="fas fa-star star2"></i>
                            <i class="fas fa-star star3"></i>
                            <i class="fas fa-star star4"></i>
                            <i class="far fa-star star5"></i>
                        </div>
                    </template>
                    <template v-slot:paragraph>
                        I've used the Node.js package manager for a while now to adapt packages of code for my applications and to download tools for use right away. Sometimes it can provide many different ways to solve one problem.
                    </template>
                    <template v-slot:list>
                        <ul>
                            <li><p>Packages</p> <i class="fas fa-check"></i></li>
                            <li><p>Tools</p> <i class="fas fa-check"></i></li>
                        </ul>
                    </template>
                </skill-description>
            </div>
        </transition>
        <div class="arrow" @click="goBack('main-page')">
            <i class="fas fa-chevron-left"></i>
            <p>Go back</p>
        </div>
    </div>
</template>



.<script>
import {TimelineMax, Elastic, gsap} from '../../node_modules/gsap'
import SkillDescription from './SkillDescription.vue'
import { CSSPlugin } from 'gsap/CSSPlugin'
export default {
    components: {SkillDescription},
    data() {
        return{
            active: ''
        }
    },
    methods: {
        wiggle(element){
            gsap.registerPlugin(CSSPlugin)
            const tl = new TimelineMax({repeat:0,repeatDelay:2})
                tl.to(`.${element}` ,0.5,{rotation:50})
                .to(`.${element}` ,3,{rotation:0,ease:Elastic.easeOut.config(0.9,0.1)});
        },
        goBack() {
            this.$router.push('/main')
        } 
    },
    mounted(){
        window.scrollTo(0, 0)
        gsap.from('.logo', {duration: 0.5, opacity: '0', stagger: 0.5})
        gsap.from('.overall', {duration: 1, y: '+100%'})
    }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');

    .skills{
        width: 100%;
        background-color: #fdf5e6;
        padding-bottom: 5rem;
        height: auto;
        padding-top: 4rem;

        .logos{
            display: flex;
            align-items: center;
            justify-content: space-around;
            min-height: 30vh;
            width: 100%;
            flex-wrap: wrap;
            .logo{
                img{
                    width: 9rem;
                    margin: 0 0.1rem;

                    &:hover{
                        cursor: pointer;
                    }
                }
            }
        }

        .highlight-1{
            font-size: 2.8rem;
            text-decoration: underline;
            text-transform: uppercase;
        }

        .highlight-2{
            font-size: 2.5rem;
            text-decoration: underline;
            text-transform: uppercase;
        }

        .highlight-3{
            font-size: 2.2rem;
            text-decoration: underline;
            text-transform: uppercase;
        }

        .highlight-4{
            text-transform: uppercase;
        }

        .rating{
            width: 100%;
            text-align: center;
            margin: 3rem 0;
            i{
                font-size: 4rem;
                color: #fed766;
                margin: 0 0.5rem;
                transform: scale(0);
            }
        }

        ul{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 4rem 0;
            min-height: 20vh;

            li{
                width: 100%;
                display: flex;
                justify-content: space-evenly;

                p{
                    width: 50%;
                    text-align: right;
                    text-transform: uppercase;
                    font-size: 1.7rem;
                    line-height: 3rem;
                }

                i{
                    width: 50%;
                    text-align: left;
                    margin-left: 2rem;
                    font-size: 2rem;
                }
            }
        }

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

        .overall-container{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3rem 0;
            .overall{
                margin: auto;

                button{
                    padding: 1rem 3rem;
                    background-color: transparent;
                    border: 0.2rem solid #000;
                    text-transform: uppercase;
                    letter-spacing: 0.1rem;
                    transition: all 0.4s;

                    &:hover{
                        background-color: #000;
                        color: #fff;
                        cursor: pointer;
                    }
                }
            }
        }
        
    }

    .skill-show-enter-from{
        opacity: 0;
    }

    .skill-show-enter-active{
        transition: opacity 2s;
    }

    .skill-show-enter-to{
        opacity: 1;
    }

    /* Media queries */

    @media(max-width: 1200px){
        .skills{
            .logos{
                .logo{
                    padding: 1rem;
                }
            }
        }
    }

    @media(max-width: 1100px){
        .skills{
            padding-top: 5rem;
        }
    }

</style>
