<template>
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
    transition: all 1s ease-in-out;
}

.slideIn-enter-from{
    transform: translateX(-100%);
}

.slideIn-leave-to{
    transform: translateX(100%);
}


</style>