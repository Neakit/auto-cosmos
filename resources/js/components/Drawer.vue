<template>
	<div class="drawer">
		<!-- <div class="search-field my-2">
            <input
                type="text"
                class="form-control"
                placeholder="Поиск"
                :value="search"
                @input="searchProducts($event.target.value)"
            >
            <i class="material-icons search-field-icon" v-if="!search.length">
                search
            </i>
            <i class="material-icons search-field-icon" v-else @click="getProducts()">
                close
            </i>
        </div> -->

        <!-- <div class="accordion mн-2" id="accordionExample">
            <div v-for="(item, index) in items" :key="index">
                <div>
                    <div :id="'headingOne' + item.title" class="d-flex justify-content-between align-items-center">
                        <span
                            class="model-accordion-link"
                            data-modelggle="collapse"
                            :data-target="'#collapseOne' + item.title"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            {{ item.title }}
                        </span>
                        <i class="material-icons">
                            keyboard_arrow_down
                        </i>
                    </div>

                    <div
                        :id="'collapseOne' + item.title"
                        class="collapse"
                        :aria-labelledby="'headingOne' + item.title"
                        data-parent="#accordionExample"
                    >
                        <div
                            class="category-accordion-link"
                            v-for="(category, index) in item.categories"
                            :key="index"
                            @click="filterProducts({ model_id: item.id, category_id: category.id })"
                        >
                            {{ category.title }}
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <div class="drawer-inner">
             <div 
                class="d-flex justify-content-between align-items-center model-link-wrap"
                v-for="(item, index) in items" :key="index"
                @click="redirectToModelPage(item.model)"
             >
                <span class="model-link">
                    {{ item.title }}
                </span>
                <i class="material-icons">
                    keyboard_arrow_right
                </i>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        computed: {
            // ...mapGetters('model', ['models']),
            // ...mapGetters('category', ['categories']),
            // items(){
            //     return this.models.map(model => {
            //         model.categories = this.categories;
            //         return model
            //     })
            // }
        },
        methods: {
            // ...mapActions('product', ['getProducts']),
            // searchProducts(value) {
            //     this.search = value;
            //     clearTimeout(this.delayTimer);
            //     this.delayTimer = setTimeout(() => {
            //         this.getProducts({ params: { title: this.search }});
            //     }, 800);
            // },
            // filterProducts({ model_id, category_id }) {
            //     const params = {
            //         model_id,
            //         category_id
            //     };
            //     this.getProducts({ params });
            // }
            redirectToModelPage(name) {
                console.log(name);
            }
        },
        data() {
            return {
                search: '',
                delayTimer: '',
                items: [
                    {
                        title: 'Карданные валы для Скания',
                        model: 'scania',
                    },
                    {
                        title: 'Карданне валы для МАН',
                        model: 'man'
                    },
                       {
                        title: 'Карданные валы для Мерседес',
                        model: 'mercedes'
                    },
                    {
                        title: 'Карданне валы для Ивеко',
                        model: 'iveco'
                    },
                       {
                        title: 'Карданные валы для ДАФ',
                        model: 'daf'
                    },
                    {
                        title: 'Карданне валы для Рено',
                        model: 'renault'
                    },
                       {
                        title: 'Карданные валы для Вольво',
                        model: 'volvo'
                    },
                    {
                        title: 'Карданне валы для Камаз 5490',
                        model: 'kamaz'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .drawer-inner {
        background: #fff;
        border-radius: 0.25rem;
        box-shadow: 0 0 4px rgba(0,0,0,0.2);
        margin-top: 18px;
    }

    // .search-field {
    //     box-shadow: 0 0 4px rgba(0,0,0,0.2);
    //     position: relative;
    //     cursor: pointer;
    // }

    // .search-field-icon {
    //     position: absolute;
    //     right: 5px;
    //     modelp: 7px;
    // }

    .model-link {
        font-family: 'PT Sans', sans-serif;
        color: #212121;
        cursor: pointer;
        font-size: 18px;
        font-weight: 400;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: 0.5rem 0.75rem;
        line-height: 1.6;
    }

    // .model-link-wrap {
    //     border-botmodelm: 1px solid #212121;
    // }
    

    // .category-accordion-link {
    //     font-family: 'PT Sans', sans-serif;
    //     color: #212121;
    //     cursor: pointer;
    //     padding: 1rem;
    // }
</style>
