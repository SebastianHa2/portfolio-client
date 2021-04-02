<template>
        <div class="skill-description">
            <h2><slot name="heading"></slot></h2>
            <div class="rating">
                <slot name="rating">
                </slot>
            </div>
            <p><slot name="paragraph"></slot></p>
            <div>
                <slot name="list">
                </slot>
            </div>
        </div>
</template>

<script>
import {Elastic, TimelineMax, gsap} from '../../node_modules/gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'
export default {
    
    mounted(){
        gsap.registerPlugin(CSSPlugin)
                const tl = new TimelineMax({repeat:0,repeatDelay:0})
                tl.to('.star1' ,0.2,{scale:1.2, ease:Elastic.easeOut.config(0.9,0.1)})
                .to('.star2', 0.2,{scale:1.2, ease:Elastic.easeOut.config(0.9,0.1)})
                .to('.star3', 0.2,{scale:1.2, ease:Elastic.easeOut.config(0.9,0.1)})
                .to('.star4', 0.2,{scale:1.2, ease:Elastic.easeOut.config(0.9,0.1)})
                .to('.star5', 0.2,{scale:1.2, ease:Elastic.easeOut.config(0.9,0.1)})

        window.scrollTo(0, 0)
    }
}
</script>

<style lang="scss" scoped>
    .skill-description{
            min-height: 70vh;
            width: 100%;
            padding: 2rem;
            margin: auto;
            font-family: 'Quicksand', sans-serif;
            overflow: hidden;

            h2{
                text-align: center;
                text-transform: uppercase;
                font-size: 3rem;
                letter-spacing: 0.2rem;
                margin-bottom: 1.5rem;
            }

            p{
                font-size: 2rem;
                text-align: justify;
                width: 70%;
                margin: 0 auto;
            }
        }
</style>