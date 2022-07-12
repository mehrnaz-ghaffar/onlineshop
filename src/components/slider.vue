<template>
    <div class="carousel">
        <div class="carouselInner">
            <div  class="carouselItem" :v-for="slide in slides"> 
                <img src="" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    props: ["slides"],
    data(){
        return{
            slides:[
                "./img/pexels-andrea-piacquadio-720606.jpg",
                "./img/pexels-andrea-piacquadio-720606.jpg"
            ]
        }
    },
    
}
</script> 