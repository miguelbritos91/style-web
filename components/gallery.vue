<template>
  <div>
    <v-container fluid>
      <v-row dense class="justify-center">
        <v-col
          v-for="(card,i) in templates"
          :key="i"
          cols="12"
          xs="6"
          sm="6"
        >
          <v-card>
            <v-img
              :src="card.img"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              :height="screen.width<600 ? '70vw' : '200px'"
            >
              <v-card-title v-text="card.name" />
            </v-img>

            <v-card-actions>
              <v-spacer />

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <a class="view-template" :href="card.link" title="Ver Template" target="_blank">
                <v-icon class="i-view">mdi-eye</v-icon>
              </a>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    templates: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
      ]
    }
  },
  computed: {
    ...mapState({
      screen: state => state._screenView
    })
  }
}
</script>

<style lang="scss" scoped>
.view-template{
  text-decoration: none;
  .i-view:hover{
    color: #0098d4;
  }
}
</style>
