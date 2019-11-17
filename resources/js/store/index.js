import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// modules
import modals from './modals';
import category from './category';
import model from './model';
import product from './product';
import blog from './blog';
import order from './order';

Vue.use(Vuex);

export default new Vuex.Store({
        state: {
            auth: false,
            user: [],
            models: [],
            statuses: [],
            productModal: false,
            image: ''
        },
        getters: {
            models(state) {
                return state.models;
            },
            statuses(state) {
                return state.statuses;
            },
            user(state) {
                return state.user;
            },
            productModal(state) {
                return state.productModal;
            }
        },
        mutations: {
            setAuth(state, payload) {
                state.auth = payload;
            },
            setProductsPagination(state, payload) {
                state.productsPagination = payload;
            },
            setModels(state, payload) {
                state.models = payload;
            },
            setStatuses(state, payload) {
                state.statuses = payload;
            },
            setUser(state, payload) {
                state.user = payload;
            },
            toggleProductModal(state, bool) {
                state.productModal = bool;
            },
            setImage(state, image) {
                state.image = image;
            }
        },
        actions: {
            async getModels({ commit }) {
                const { data } = await axios({
                    baseURL: 'http://auto-mustang.ru',
                    method: 'get',
                    url: 'api/models/'
                });
                commit('setModels', data);
            },
            async getStatuses({ commit }) {
                const { data } = await axios({
                    baseURL: 'http://auto-cosmos.test',
                    // baseURL: 'http://auto-mustang.ru',
                    // baseURL: 'http://127.0.0.1:8000',
                    method: 'get',
                    url: 'api/statuses/'
                });
                commit('setStatuses', data);
            },
            async addNewOrder({ commit }, { desc, name }) {
                const url = 'https://api.trello.com/1/cards';
                const qs = {
                    name,
                    desc,
                    pos: 'bottom',
                    idList: '5d063c6c414b4355e593aa79',
                    idMembers: '5c1ecd3be3f04424b80bb26b',
                    keepFromSource: 'all',
                    key: '8f8bdc084c598239903b33ddf9a06bca',
                    token: 'a59594d1e3fb7432f4d94d8bd1870535770fdd07c3490826b0359cbe09e4ac70'
                }
                // commit("setLoading", true);
                try {
                    const { status } = await axios.post(url, qs);
                    if(status === 200) {
                        // console.log(data);
                        // commit("setLoading", false);
                        // commit("toggleOrderDialog", false);
                    }
                } catch (e) {
                    // TODO: вывести сообщение об ошибке 
                    console.log(e);
                }
            }
        },
        modules: {
            modals,
            category,
            model,
            product,
            blog,
            order
        }
    }
);
