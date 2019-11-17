<template>
  <div
    style="max-width: 280px; margin: auto; height: 100%"
    class="grey lighten-3"
  >
    <!-- <v-toolbar
      color="pink"
      dark
    >
        <v-list two-line>
            <v-list-tile
              avatar
            >
              <v-list-tile-avatar>
                <img :src="avatarSrc">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Здравствуйте!</v-list-tile-title>
                <v-list-tile-sub-title>Мы ответим на ваши вопросы</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-toolbar> -->

    <div class="card pa-2" style="height: 100%">
        <div class="row wrap">
            <div class="col-12">
                <div class="form-group">
                    <label for="phone">Email address</label>
                    <input 
                        type="number" 
                        class="form-control" 
                        id="phone" 
                        placeholder="Номер"
                        v-model="name"
                    >
                    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                </div>
            </div>
            <div class="col-12">
                <textarea
                    outline
                    label="Ваша заявка"
                    v-model="desc"
                ></textarea>
            </div>
            <div class="col-2">
                <button @click="submit()">
                    Отправить запрос
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            // avatarSrc: "/images/consult.png",
            desc: "", 
            name: "",
        }
    },
    methods: {
        ...mapActions(['addNewOrder']),
        submit() {
            this.addNewOrder({ name: this.name, desc: this.desc });
        }
    }
}
</script>