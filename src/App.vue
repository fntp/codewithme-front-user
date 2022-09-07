<template>
    <div class="codewithmeApplication">
        <div class="codewithme-header-view">
            <Navigation></Navigation>
        </div>
        <div class="codewithme-body-view">
            <div class="codewithme-body-left-view">
                <Carousels></Carousels>
            </div>
            <div class="codewithme-body-right-view">
                
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from './views/components/base/Navigation.vue'
    import CarouselsVue from './views/components/base/Carousels.vue'
import Carousels from './views/components/base/Carousels.vue'
    export default {
        components: {
    Navigation,
    Carousels
},
        setup(){

            return{

            }
        }
    }
</script>

<style>
    /* .codewithmeApplication{
        position: absolute;
    }
    .codewithme-header-view{
        position: relative;
        align-content: center;
    } */
</style>