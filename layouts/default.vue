<template>
  <v-app>
    <div v-if="load">
      <Navbar class="fixed-top" />
      <div class="d-flex flex-column">
        <nuxt />
      </div>
      <Footer />
    </div>
    <div v-else class="load-view d-flex justify-center align-center">
      <img src="/images/recursos/loading.webp">
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      fixed: false,
      load: false
    }
  },
  computed: {
    ...mapState({
      isMobile: state => state._isMobile,
      screen: state => state._screenView
    })
  },
  mounted () {
    window.onresize = this.setScreen
    this.setScreen()
    window.onload = () => {
      setTimeout(() => {
        this.load = true
      }, 7000)
    }
  },
  methods: {
    ...mapMutations({
      getScreen: 'getScreen'
    }),
    setScreen () {
      const screenData = {
        width: window.innerWidth,
        height: window.innerHeight
      }
      this.getScreen(screenData)
    }
  }
}
</script>
<style lang="scss" scped>
.load-view{
  width: 100%;
  height: 100%;
}
</style>
