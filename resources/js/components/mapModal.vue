<template>
<div class="modal-mask">
    <div class="modal-wrapper">
        <div class="modal-container container">
            <div class="modal-header">
                <!-- <h5 class="modal-title">Оставить заявку</h5> -->
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
            <l-map  
                class="mini-map" 
                :zoom=6 
                :center="position" 
                :options="options" 
                refs="map"
                style="height: 35vh"
            >
                <!-- <v-alert 
                    :value="isScrollable"
                    type="info"
                    class="map-alert text-center"
                >
                    Нажмите CTRL, чтобы имзенить масштаб карты
                </v-alert> -->
                
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <l-marker :lat-lng="position" :draggable="draggable">
                    <l-popup :content="popupContent"></l-popup>
                </l-marker>
            </l-map>
        </div>
    </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            position: [55.812470, 37.502540],
            draggable: true,
            popupContent: "Москва, Ленинградское Шоссе, Д. 236",
            isScrollable: false,
            options: {
                scrollWheelZoom: false
            }
        }
    },
    methods: {
        ...mapMutations('modals', ['toggleModal']),
        closeModal() {
            this.toggleModal({ name: 'mapModal', bool: false });
        }
    }
}

</script>  

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
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
