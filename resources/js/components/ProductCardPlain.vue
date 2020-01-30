<template>
    <div class="card-plain row py-2">
        <div class="card-image-wrap col-12 col-md-4">
            <img v-if="card.images.length > 0" :src="card.images[0]" alt="">
            <img v-else src="/images/cardan.jpg" class="card-image" alt="product-card" />
        </div>
        <div class="col-12 col-md-6" >
            <div class="card-product-content">
                <div>
                    <span>Название модели:</span>
                    <span class="">{{ card.title || '' }}</span>
                </div>

                <div>
                    <span>Номер замены:</span>
                    <span class="card-model">{{ card.product_number_replacements || '' }}</span>
                </div>

                <div>
                    <span>Номер детали:</span>
                    <span>{{ card.product_number || '' }}</span>
                </div>

                <div>
                    <span>Внутренний код детали:</span>
                    <span>{{ card.product_number_inner || '' }}</span>
                </div>
                <div>
                    <span>Марка (модель) детали:</span>
                    <span>{{ card.model.title || '' }}</span>
                </div>

                <div class="justify-content-between no-gutters row">
                    <p>Описание:</p>
                    <p class="card-description">{{ card.description || '' }}</p>
                </div>

            </div>
        </div>
        <div class="col-12 col-md-2">
            <div  >

                    <p class="card-price">{{ card.price }} ₽</p>
            
                <router-link :to="`/product/${card.id}`" class="btn">Подробнее</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: false,
            default: () => {
                return {
                    title: '',
                    model: {
                        title: ''
                    },
                    description: '',
                    price: ''
                }
            }
        }
    },
    created() {
        console.log('this. prod', this.card)
    }
}
</script>

<style scoped>
    .card-plain {
        min-height: 200px;
        margin: 6px 0;
        /* padding: 8px; */
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    }
    .card-product-title {
        font-size: 18px;
        /* padding: 4px; */
        font-family: 'PT Sans', sans-serif;
    }
    .card-product-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .card-model {
        font-family: 'PT Sans', sans-serif;
        font-size: 16px;
        color: #212121;
    }
    .card-description {
        font-family: 'PT Sans', sans-serif;
        font-size: 14px;
        color: #212121;
    }
    .card-image {
        max-height: 100%;
        max-width: 100%;
    }
    .btn {
        background-color: #cf6100;
        color: #fff;
        border-radius: 0;
        width: 116px;
        height: 38px;
    }
    .card-status {
        text-align: right;
        font-family: 'PT Sans', sans-serif;
        font-size: 12px;
        margin: 0;
    }
    .card-price {
        margin: 0;
        font-family: 'PT Sans', sans-serif;
        font-weight: 600;
        font-size: 16px;
    }
</style>
