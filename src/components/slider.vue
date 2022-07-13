<template>
    <div class="carousel flex justify-center">
        <div class="carouselInner relative w-9/12 h-400 overflow-hidden">
            <div  class="carouselItem absolute inset-0" 
                v-for="(image , imageIndex) in images" 
                :key="imageIndex"
                v-show="currentSlide===imageIndex"

            > 
                <img 
                    :src="image"   
                    :alt="image" 
                    :key="imageIndex"
                />
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