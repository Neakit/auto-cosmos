<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container container">
                <div class="modal-header">
                    <h5 class="modal-title">{{ product.id ? 'Редактирование' : 'Создание'}} продукта</h5>
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        @click="closeModal()"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="row no-gutters p-2">
                    <div class="col-12 p-1">
                        <div class="images-wrapper row align-items-center">
                            <div class="col"
                                style="position: relative;  border: 1px solid #3490dc; text-align: center"
                                v-for="(image, index) in product.images"
                                :key="index"
                            >
                                <i class="material-icons"
                                    style="position: absolute; right: 0; top: 5px; cursor: pointer"
                                    @click="removeImageWrap(image, index)"
                                >
                                    close
                                </i>
                                <img
                                    :src="image"
                                    class="product-image-block"
                                    alt="part-image"
                                >
                            </div>
                            <div class="col" style="text-align: center">
                                <button class="btn btn-success" @click="selectImage">+</button>
                                <input type="file" id="file" @change="attachFile" ref="imageUploadInput" v-show="false">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 p-1">
                        <!-- Наименование -->
                        <b-form-group
                            label="Наименование:"
                            label-for="product-title"
                            :state="!$v.product.title.$error"
                        >
                            <b-input
                                type="text"
                                :value="product.title"
                                @change="setProductProp({ key: 'title', value: $event })"
                                placeholder="Введите наименование детали"
                                name="product-title"
                                :state="!$v.product.title.$error"
                            />
                            <template v-slot:invalid-feedback>
                                <span>Поле обязательно к заполнению</span>
                            </template>
                        </b-form-group>

                        <!-- Номер детали -->
                        <b-form-group
                            label="Номер детали:"
                            label-for="product-number"
                            :state="!$v.product.product_number.$error"
                        >
                            <b-input
                                type="text"
                                :value="product.product_number"
                                @change="setProductProp({ key: 'product_number', value: $event })"
                                placeholder="Введите Номер детали"
                                name="product-number"
                                :state="!$v.product.product_number.$error"
                            />
                            <template v-slot:invalid-feedback>
                                <span>Поле обязательно к заполнению</span>
                            </template>
                        </b-form-group>

                        <!-- Номера замены детали -->
                        <b-form-group
                            label="Номера замены детали:"
                            label-for="product_number_replacements"
                            :state="!$v.product.product_number_replacements.$error"
                        >
                            <b-input
                                type="text"
                                :value="product.product_number_replacements"
                                @change="setProductProp({ key: 'product_number_replacements', value: $event })"
                                placeholder="Введите Номера замены детали"
                                name="product_number_replacements"
                                :state="!$v.product.product_number_replacements.$error"
                            />
                            <template v-slot:invalid-feedback>
                                <span>Поле обязательно к заполнению</span>
                            </template>
                        </b-form-group>

                        <!-- Внутренний код товара -->
                        <b-form-group
                            label="Внутренний код детали:"
                            label-for="product_number_inner"
                            :state="!$v.product.product_number_inner.$error"
                        >
                            <b-input
                                type="text"
                                :value="product.product_number_inner"
                                @change="setProductProp({ key: 'product_number_inner', value: $event })"
                                placeholder="Введите внутренний код детали"
                                name="product_number_inner"
                                :state="!$v.product.product_number_inner.$error"
                            />
                            <template v-slot:invalid-feedback>
                                <span>Поле обязательно к заполнению</span>
                            </template>
                        </b-form-group>

                        <!-- Модель (Марка) -->
                        <b-form-group
                            label="Модель (Марка) детали:"
                            label-for="product_model_id"
                            :state="!$v.product.product_model_id.$error"
                        >
                            <div>
                                <b-select
                                    placeholder="День"
                                    :state="!$v.product.product_model_id.$error"
                                    name="product_model_id"
                                    :value="product.product_model_id"
                                    @change="setProductProp({ key: 'product_model_id', value: $event })"
                                >
                                    <option disabled value="">Выберите модель</option>
                                    <option v-for="(item, index) in models" :key="index" :value="item.id">{{ item.title }}</option>
                                </b-select>
                            </div>

                            <template v-slot:invalid-feedback>
                                <span>Поле обязательно к заполнению</span>
                            </template>
                        </b-form-group>

                        <!-- Описание коротко -->
                        <b-form-group
                            label="Описание детали крaтко:"
                            label-for="description"
                            :state="!$v.product.description.$error"
                        >
                            <b-textarea
                                type="text"
                                :value="product.description"
                                @change="setProductProp({ key: 'description', value: $event })"
                                placeholder="Введите краткое описание детали"
                                name="description"
                                :state="!$v.product.description.$error"
                            />
                            <template v-slot:invalid-feedback>
                                <span>Поле обязательно к заполнению</span>
                            </template>
                        </b-form-group>

                        <!-- Описание подробно -->
                        <b-form-group
                            label="Описание детали подробно:"
                            label-for="description_full"
                            :state="!$v.product.description_full.$error"
                        >
                            <b-textarea
                                type="text"
                                :value="product.description_full"
                                @change="setProductProp({ key: 'description_full', value: $event })"
                                placeholder="Введите краткое описание детали"
                                name="description_full"
                                :state="!$v.product.description_full.$error"
                            />
                            <template v-slot:invalid-feedback>
                                <span>Поле обязательно к заполнению</span>
                            </template>
                        </b-form-group>

                        <!-- Цена -->
                        <b-form-group
                            label="Цена:"
                            label-for="price"
                            :state="!$v.product.price.$error"
                        >
                            <b-input
                                type="number"
                                :value="product.price"
                                @change="setProductProp({ key: 'price', value: $event })"
                                placeholder="Введите цену"
                                name="price"
                                :state="!$v.product.price.$error"
                            />
                            <template v-slot:invalid-feedback>
                                <span>Поле обязательно к заполнению</span>
                            </template>
                        </b-form-group>

                        <!-- Категория -->
                        <b-form-group
                            label="Категория детали:"
                            label-for="category_id"
                            :state="!$v.product.category_id.$error"
                        >
                            <div>
                                <b-select
                                    placeholder="День"
                                    :state="!$v.product.category_id.$error"
                                    name="category_id"
                                    :value="product.category_id"
                                    @change="setProductProp({ key: 'category_id', value: $event })"
                                >
                                    <option disabled value="">Выберите категорию</option>
                                    <option v-for="(item, index) in categories" :key="index" :value="item.id">{{ item.title }}</option>
                                </b-select>
                            </div>

                            <template v-slot:invalid-feedback>
                                <span>Поле обязательно к заполнению</span>
                            </template>
                        </b-form-group>

                        <!-- Рекомендация -->
                        <b-form-checkbox
                            @change="setProductProp({ key: 'product_recommend', value: $event })"
                        >
                            Рекомендовать товар
                        </b-form-checkbox>

                    </div>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="validate"
                        >{{ product.id ? 'Обновить' : 'Создать'}}</button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters, mapState } from 'vuex';
import { required } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                attachment: null,
                attachments: null,
                clientImages: []
            }
        },

        validations: {
            product: {
                title: { required },
                product_number: { required },
                product_number_replacements: { required },
                product_number_inner: { required },
                product_model_id: { required },
                description: { required },
                description_full: { required },
                price: { required },
                category_id: { required }
            }
        },

        computed: {
            ...mapGetters('model', ['models']),
            ...mapGetters('category', ['categories']),
            ...mapGetters('product', ['product'])
        },
        methods: {
            ...mapMutations('modals', ['toggleModal']),
            ...mapMutations('product', [
                'clearProduct',
                'setProductProp',
                'addImages',
                'removeImage'
            ]),
            ...mapActions('product', ['updateProduct', 'createProduct']),

            validate() {
                this.$v.$touch();
                if(!this.$v.$anyError) {
                    this.saveChanges();
                } else return
            },

            removeImageWrap(image, index) {
                const nameIndex = image.lastIndexOf('/');
                const name = image.slice(nameIndex + 1);

                const id = this.product.id || null;

                if(id) {
                    const images = JSON.stringify(this.product.images);
                    this.$axios({
                        method: 'get',
                        url: '/api/delete-file',
                        params: {
                            name,
                            images,
                            id
                        }
                    }).then(res => {
                        this.removeImage(index);
                    })
                } else {
                    this.$axios({
                        method: 'get',
                        url: '/api/delete-file',
                        params: {
                            name
                        }
                    }).then(res => {
                        this.removeImage(index);
                    })
                }
            },
            selectImage() {
                this.$refs.imageUploadInput.click()
            },
            attachFile(event) {
                this.attachment = event.target.files[0];
                this.uploadFile();
            },

            attachFiles(event) {
                this.attachments = event.target.files[0];
            },

            async saveChanges() {
                if(this.product.id) {
                    await this.updateProduct();
                } else {
                    await this.createProduct();
                }
            },

            async uploadFile() {
                if (this.attachment != null) {
                    const data = new FormData();
                    data.append("image", this.attachment);
                    const result = await this.$axios({
                        method: 'post',
                        url: '/api/upload-file',
                        data,
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    this.addImages(result.data);

                } else {
                    // this.$emit('close', this.product)
                }
            },

            /**
             * Очистить объект продукта и закрыть модальное окно
             * */
            closeModal() {
                this.clearProduct();
                this.$v.$reset();
                this.toggleModal({
                    name: 'productModal',
                    bool: false
                });
            }
        }
    }
</script>

<style scoped>
    .image-small {
        width: 150px;
        height: 150px;
    }
    .modal-mask {
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    .modal-container {
        overflow: scroll;
        height: 38em;
        /* width: 300px; */
        margin: 0px auto;
        /* padding: 20px 30px; */
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }
    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }
    .modal-default-button {
        float: right;
    }
    .modal-enter {
        opacity: 0;
    }
    .modal-leave-active {
        opacity: 0;
    }
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    .images-wrapper {
        height: 150px;
        border: 1px solid #000;
        border-radius: 8px;
    }
    .product-image-block {
        margin: 4px;
        /* width: 100%; */
        max-height: 138px;
    }
</style>
