<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container container">
                <div class="modal-header">
                    <h5 class="modal-title">{{ category.id ? 'Редактирование' : 'Создание'}} категории</h5>
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
                        <!-- Внутренний код товара -->
                        <b-form-group
                            label="Наименование категории:"
                            label-for="title"
                            :state="!$v.category.title.$error"
                        >
                            <b-input
                                type="text"
                                :value="category.title"
                                @change="setCategoryProp({ key: 'title', value: $event })"
                                placeholder="Введите наименование категории"
                                name="title"
                                :state="!$v.category.title.$error"
                            />
                            <template v-slot:invalid-feedback>
                                <span>Поле обязательно к заполнению</span>
                            </template>
                        </b-form-group>

                        <!-- Описание категории -->
                        <b-form-group
                            label="Описание категории:"
                            label-for="description"
                            :state="!$v.category.description.$error"
                        >
                            <b-textarea
                                type="text"
                                :value="category.description"
                                @change="setCategoryProp({ key: 'description', value: $event })"
                                placeholder="Введите описание категории"
                                name="description"
                                :state="!$v.category.description.$error"
                            />
                            <template v-slot:invalid-feedback>
                                <span>Поле обязательно к заполнению</span>
                            </template>
                        </b-form-group>
                    </div>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <button type="button" class="btn btn-primary" @click="validate">{{ category.id ? 'Обновить' : 'Создать'}}</button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapActions, mapGetters } from 'vuex';
    import {required} from "vuelidate/lib/validators";
    export default {
        computed: {
            ...mapGetters('category', ['category']),
            ...mapGetters('modals', ['categoryModal']),
        },

        validations: {
            category: {
                title: { required },
                description: { required },
            }
        },

        methods: {
            ...mapActions('category', ['createCategory', 'updateCategory']),
            ...mapMutations('category', ['setCategoryProp', 'clearCategory', '']),
            ...mapMutations('modals', ['toggleModal']),
            validate() {
                this.$v.$touch();
                if(!this.$v.$anyError) {
                    this.saveChanges();
                } else return
            },

            saveChanges() {
                if(this.category.id) {
                    // update product
                    this.updateCategory();
                } else {
                    // create
                    this.createCategory();
                }
            },
            closeModal() {
                this.clearCategory();
                this.toggleModal({ name: 'categoryModal', bool: false });
            }
        }
    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 1;
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
</style>
