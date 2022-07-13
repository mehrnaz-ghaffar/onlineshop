<template>
    <div class="carousel">
        <div class="carouselInner">
            <div  class="carouselItem" v-for="(image , imageIndex) in images" :key="imageIndex"> 
                <img :src="image" :alt="image" :key="imageIndex"/>
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
            ]
        }
    },
    
}
</script> 