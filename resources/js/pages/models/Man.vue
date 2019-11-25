<template>
    <div class="container py-4">
        <div class="row my-3">
			<div class="col-12" v-for="(product, index) in products.data" :key="index">
				<ProductCardPlain :card="product" />
			</div>
		</div>
    </div>
</template>

<script>
import ProductCardPlain from '../../components/ProductCardPlain'; 
import { mapGetters } from 'vuex';

	export default {
		components: {
			ProductCardPlain
		},
		data() {
			return {
				// products: []
			}
		},
		computed: {
			...mapGetters('product', ['products']) 
		}	
	}
</script>