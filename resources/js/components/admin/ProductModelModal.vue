<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container container">
                <div class="modal-header">
                    <h5 class="modal-title">{{ model.id ? 'Редактирование' : 'Создание'}} модели</h5>
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

                <b-form-group
                    label="Наименование модели (марки) детали:"
                    label-for="title"
                    :state="!$v.model.title.$error"
                >
                    <b-input
                        type="text"
                        :value="model.title"
                        @change="setModelProp({ key: 'title', value: $event })"
                        placeholder="Наименование модели (марки) детали"
                        name="title"
                        :state="!$v.model.title.$error"
                    />
                    <template v-slot:invalid-feedback>
                        <span>Поле обязательно к заполнению</span>
                    </template>
                </b-form-group>

                <div class="modal-footer">
                    <slot name="footer">
                        <button type="button" class="btn btn-primary" @click="validate">{{ model.id ? 'Обновить' : 'Создать'}}</button>
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
            ...mapGetters('model', ['model']),
        },
        validations: {
            model: {
                title: { required }
            }
        },
        methods: {
            ...mapActions('model', ['updateModel', 'createModel']),
            ...mapMutations('model', ['clearModel', 'setModelProp']),
            ...mapMutations('modals', ['toggleModal']),
            validate() {
                this.$v.$touch();
                if(!this.$v.$anyError) {
                    this.saveChanges();
                } else return
            },
            saveChanges() {
                if(this.model.id) {
                    // update
                    this.updateModel();
                } else {
                    // create
                    this.createModel();
                }
            },
            closeModal() {
                this.clearModel();
                this.$v.$reset();
                this.toggleModal({ name: 'productModelModal', bool: false });
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
