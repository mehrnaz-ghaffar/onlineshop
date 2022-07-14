<template>
    <input class="radio" type="radio" id="radio1">
    <input class="radio" type="radio" id="radio2">
    <input class="radio" type="radio" id="radio3">
    <input class="radio" type="radio" id="radio4">
    <div class="carousel flex justify-center">
        <div class="carouselInner relative w-9/12 h-400 overflow-hidden">
            <transition 
                name="slideIn"
                v-for="(image , imageIndex) in images" 
                :key="imageIndex"
                v-show="currentSlide===imageIndex"
            >
                <div  class="carouselItem absolute inset-0"> 
                    <img 
                        :src="image"   
                        :alt="image" 
                        :key="imageIndex"
                    />
                </div>
            </transition>  
            <div class="dots w-full absolute bottom-px flex justify-center items-center">
                <label for="radio1"></label>
                <label for="radio2"></label>
                <label for="radio3"></label>
                <label for="radio4"></label>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    // props: ["slides"],
    data(){
        return{
            images:[
                require("../assets/img/pexels-andrea-piacquadio-720606.jpg"),
                require("../assets/img/pexels-pixabay-247298.jpg"),
                require("../assets/img/pexels-andrea-piacquadio-720606.jpg"),
                require("../assets/img/pexels-daniel-adesina-833052.jpg")
            ],
            currentSlide: 0,
            slideInterval: null
        }
    },
    methods: {
        setCurrentSlide(index){
            this.currentSlide = index ;
        }
    },
    mounted(){
        this.slideInterval = setInterval(()=> {
            const index = this.currentSlide < this.images.length -1 ? this.currentSlide +1 : 0;
            this.setCurrentSlide(index);
        }, 3000)
    },
    beforeUnmount(){
        clearInterval(this.slideInterval);
    }
    
}
</script> 

<style scoped>
.slideIn-enter-active,
.slideIn-leave-active{
    transition: all 2s ease-in-out;
}

.slideIn-enter-from{
    transform: translateX(-100%);
}

.slideIn-leave-to{
    transform: translateX(100%);
}

.radio{
    display: none;
}

.dots label{
    width: 15px;
    height: 15px;
    background: #000;
    margin: 0 10px;
    border-radius: 50%;
    opacity: 0.3;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.dots label:hover{
    opacity: 0.7;
}

</style>