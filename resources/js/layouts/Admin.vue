<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light" v-if="auth">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/admin/dashboard">Admin Dashboard</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/products">Продукты: {{ products.data && products.data.length || 0 }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/models">Модели: {{ models.length || 0 }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/categories">Категории: {{ categories.length || 0 }}</router-link>
                </li>
            </ul>
            <button type="button" class="btn btn-outline-dark" @click="clearAuth">Выйти</button>
        </nav>
        <nav class="navbar navbar-expand-sm navbar-light bg-light" v-else>
            <p>Авторизуйтесь, чтобы войти в панель управления</p>
        </nav>
        <InfoToast />
        <DestroyConfirmModal v-show="destroyConfirmModal"/>
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import InfoToast from "../components/InfoToast";
    import DestroyConfirmModal from "../components/admin/DestroyConfirmModal";

    export default {
        components: {
            InfoToast,
            DestroyConfirmModal
        },
        mounted() {
            this.getProducts();
            this.getModels();
             this.getCategories();
        },
        computed: {
            ...mapGetters('product', ['products']),
            ...mapGetters('model', ['models']),
            ...mapGetters('category', ['categories']),

            ...mapGetters('modals', ['destroyConfirmModal']),
            ...mapGetters(['user']),
            auth() {
                return this.$route.path !== "/admin/login";
            }
        },
        methods: {
            ...mapActions('product', ['getProducts']),
            ...mapActions('category', ['getCategories']),
            ...mapActions('model', ['getModels']),
            ...mapActions(['getStatuses']),
            clearAuth() {
                localStorage.removeItem("bigStore");
                this.$router.push('/shop');
            }
        }
    }
</script>
