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
    name: Slider,
    props: ["slides"],
    data:{
        slides:[
            "./img/pexels-andrea-piacquadio-720606.jpg",
            "./img/pexels-andrea-piacquadio-720606.jpg"
        ]
    },
    
}
</script>