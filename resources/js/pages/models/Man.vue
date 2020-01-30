<template>
    <div class="container py-4">
		<div>
			<h2>Каданный валы для грузовиков</h2>
			<ul>
				<li> MAN TGA \ TGS \ TGX </li>
				<li> F2000 \ 3 серии </li>
				<li> TGM </li>
				<li> TGL </li>
				<li> L2000 </li>
			</ul>

            <h2> Особенность карданных валов грузовиков MAN - TGA \ TGS \ TGX</h2>
            <p> Колесная формула 4*2 \ 6*4\ 8*4 \ и др </p>
            <h2> 1 тип </h2>
            <p>	Узел под подвесной подшипник имеет "подвижное" соединение -
                <a href="#" @click.prevent="openModal({ name: 'img-55' })">рис 55</a>
                <modal name="img-55">
                    <img style="width: 100%; height: 100%" src="/images/cardan.jpg" alt="image-55">
                </modal>
                сразу за подвесным - идет крестовина карданного вала, за крестовиной нету шлицевого соединения, идет просто труба -
                <a href="#" @click.prevent="openModal({ name: 'img-55' })">рис 60</a>
                <modal name="img-60">
                    <img style="width: 100%; height: 100%" src="/images/cardan.jpg" alt="image-60">
                </modal>
            </p>

            <p>подвесной подшипник 85мм - 81394006105 -
                <a href="#" @click.prevent="openModal({ name: 'img-57' })">рис 57</a>
                <modal name="img-57">
                    <img style="width: 100%; height: 100%" src="/images/cardan.jpg" alt="image-57">
                </modal>
                пыльник 81964200545 -
                <a href="#" @click.prevent="openModal({ name: 'img-58' })">рис 58</a>
                <modal name="img-58">
                    <img style="width: 100%; height: 100%" src="/images/cardan.jpg" alt="image-58">
                </modal>
            </p>

            <p>подвесной подшипник 75мм - 81394006104 \ 81394106032 -
                <a href="#" @click.prevent="openModal({ name: 'img-59' })">рис 59</a>
                <modal name="img-59">
                    <img style="width: 100%; height: 100%" src="/images/cardan.jpg" alt="image-59">
                </modal>
                пыльник 81964200533
                <a href="#" @click.prevent="openModal({ name: 'img-58' })">рис 58</a>
                <modal name="img-58">
                    <img style="width: 100%; height: 100%" src="/images/cardan.jpg" alt="image-58">
                </modal>
            </p>

            <h2>2 тип</h2>
            <p>
                узел под подвесной подшипник имеет "обычный" тип подвесного соединения -
                <a href="#" @click.prevent="openModal({ name: 'img-61' })">рис 61</a>
                <modal name="img-61">
                    <img style="width: 100%; height: 100%" src="/images/cardan.jpg" alt="image-61">
                </modal>
                в котором после подвесного, на второй части кардана, стоит шлицевое соединение -
                <a href="#" @click.prevent="openModal({ name: 'img-64' })">рис 64</a>
                <modal name="img-64">
                    <img style="width: 100%; height: 100%" src="/images/cardan.jpg" alt="image-64">
                </modal>
                подвесной подшипник 65мм - 81394106019 / 81394106013 / 81394106017
            </p>

            <h2> Основные крестовины кардана грузовиков MAN \ TGA \ TGS \ TGX </h2>
            <p>
                крестовина кардана - 57*152 - номер - 81393746003
                (замена номера 81391266031 / 81391086048 \ 81391266006 / 81391086031 / 81391086032 / 81391096028 / 81391096029 )

                крестовина кардана 52*147,2 номер - 81999178470 \ 81364156039 / 81391266030
                крестовина кардана 57-144 (MAN F90 \ 2 серии) - номер 81391266017
            </p>

            <h2>MAN TGL \ L2000 </h2>
            <p>
                крестовина кардана 38*110 номер - 81391086052 \ 81999180348
                крестовина кардана 47,6*135,2 номер - 81999178469 / 81393746001 \ 81391266036
                подвесной подшипник 100мм номер - 81394106018
                подвесной подшипник 65мм номер - 81999180364 \ 81394106030

                подвесной подшипник 65мм номер - 81394006104 \ 81394106032

                схема как правильно мерить крестовину -
                <a href="#" @click.prevent="openModal({ name: 'img-61' })">рис 61</a>
                <modal name="img-61">
                    <img style="width: 100%; height: 100%" src="/images/cardan.jpg" alt="image-61">
                </modal>
            </p>

		</div>

        <div class="row my-3">
			<div class="col-12" v-for="(product, index) in products" :key="index">
				<ProductCardPlain :card="product" />
			</div>
		</div>
    </div>
</template>

<script>
import ProductCardPlain from '../../components/ProductCardPlain';
import { publicHTTP } from "../../services";

	export default {
		components: {
			ProductCardPlain
		},
		data() {
			return {
				products: []
			}
		},
        created() {
		    this.getProducts();
        },
        methods: {
		    openModal({ name }) {
                this.$modal.show(name);
            },
            getProducts() {
                publicHTTP({
                    method: 'get',
                    url: '/api/products',
                    params: {
                        product_model_id: 1,
                        all: true
                    }
                }).then(res => {
                    this.products = res.data.map(p => {
                        p.images = JSON.parse(p.images);
                        return p;
                    });
                })
            }
        },
        computed: {
			filtered(){
				//return this.products && this.products.data && this.products.data.filter(i => i.product_model_id === 4) || [];
			}
		}
	}
</script>
