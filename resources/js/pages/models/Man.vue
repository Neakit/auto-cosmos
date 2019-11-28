<template>
    <div class="container py-4">
        <div class="row my-3">
			<div class="col-12" v-for="(product, index) in filtered" :key="index">
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
			...mapGetters('product', ['products']),
			filtered(){
				return this.products && this.products.data && this.products.data.filter(i => i.product_model_id === 4) || [];
			} 
		}	
	}
</script>