<template>
    <div>
        <div class="container-fluid main-section">
            <div class="container h-100">
                <div class="row h-100">
                    <div class="col-12 col-md-4">
                        <Drawer />
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="mt-3">
                            <button class="h2 btn btn-outline-secondary btn-block">Перейти в интернет-магазин</button>
                            <div class="row align-items-center justify-content-center p-3">
                                <img src="/images/cardan.jpg" style="width: 100%">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row my-3">
                <div class="col-12" v-for="(product, index) in products.data" :key="index">
                    <ProductCardPlain :card="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Drawer from "../components/Drawer";
    import ProductCardPlain from "../components/ProductCardPlain";
    import { mapGetters } from 'vuex';

    export default {
        components: {
            ProductCardPlain,
            Drawer
        },
        computed: {
            ...mapGetters('product', ['products'])
        },
    }
</script>

<style scoped>
    .main-section {
        /* background: url('/images/engine.jpg') no-repeat center center; */
        /* height: 593px; */
    }
</style>
