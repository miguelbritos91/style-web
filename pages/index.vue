<template>
  <div class="d-flex flex-column">
    <div id="banner" class="d-flex flex-column">
      <h1 class="font-rubik">
        {{ typing }}
      </h1>
      <h2 v-if="subtitleEnabled" class="font-rubik fadein-load">
        Expande tu negocio a través de la web.
      </h2>
      <a v-if="subtitleEnabled" href="#info" class="btn-rounded font-montserrat fadein-load">
        descubre más
      </a>
      <div class="d-flex justify-center align-end container-img mt-auto">
        <img src="/images/logos/logo-portada-banner-light.png" alt="/images/logos/logo-portada-banner-light.png">
      </div>
    </div>
    <div id="info">
      <v-container>
        <v-row class="justify-center">
          <v-col>
            <h2 class="font-raleway text-center">
              Te brindamos el stack más completo en desarrollo de aplicaciones web y sitios institucionales.
            </h2>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col
            v-for="(item, i) of services"
            :key="i"
            cols="12"
            sm="6"
            lg="3"
            xl="3"
          >
            <div class="cards-items d-flex flex-column mx-auto">
              <v-img
                :src="item.icon"
                width="100px"
                class="mx-auto"
              />
              <p class="title-card text-center mt-5 font-raleway">
                {{ item.title }}
              </p>
              <div class="d-flex justify-center w-100">
                <v-btn
                  color="blue lighten-2"
                  text
                >
                  + Info
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="tecnology">
      <v-container>
        <v-row class="justify-center">
          <v-col>
            <h2 class="font-raleway text-center">
              Somos desarrolladores Fullstack
            </h2>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col
            v-for="(tec,n) in tecnology"
            :key="n"
            class="d-flex flex-column align-center justify-center"
            cols="6"
            sm="4"
            md="4"
            lg="3"
            xl="2"
          >
            <div class="cards-tecnology d-flex justify-center align-center" :title="tec.name.toUpperCase()">
              <img :src="tec.icon" :alt="tec.icon">
            </div>
            <p v-if="screen.width<992" class="font-montserrat title-xs">
              {{ tec.name }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="template">
      <v-container>
        <v-row>
          <v-col cols="12">
            <Carousel v-if="screen.width > 768" :templates="templates" />
            <Gallery v-if="screen.width < 769" :templates="templates" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Carousel from '~/components/carousel.vue'

export default {
  components: { Carousel },
  data () {
    return {
      title: 'Diseño web personalizado',
      typing: '',
      typingLength: 0,
      subtitleEnabled: false,
      show: false,
      model: null
    }
  },
  computed: {
    ...mapState({
      services: state => state._services,
      tecnology: state => state._tecnology,
      screen: state => state._screenView,
      templates: state => state._templates
    })
  },
  mounted () {
    this.$nextTick(function () {
      this.effectTyping()
    })
  },
  methods: {
    effectTyping () {
      if (this.typingLength < this.title.length) {
        this.typing += this.title[this.typingLength]
        this.typingLength++
        setTimeout(this.effectTyping, 100)
      } else {
        this.subtitleEnabled = true
      }
    }
  }
}
</script>
<style lang="scss">
#banner{
  width: 100vw;
  height: 100vh;
  background-image: url('/images/recursos/header01.jpg');
  background-size: cover;
  background-position: bottom;
  padding: 40px;
  h1, h2{
    text-align: center;
    color: #fff;
    text-transform: uppercase;
  }
  h1 {
    margin-top: 10vh;
    font-weight: 900;
    font-size: 4.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  .btn-rounded{
    border-radius: 10px;
    width: 200px;
    height: auto;
    padding: 10px 0px;
    border: solid 2px white;
    text-transform: uppercase;
    color: #fff;
    margin: 30px auto;
    text-decoration: none;
    text-align: center;
    &:focus{
      outline: none !important;
    }
    &:hover{
      box-shadow: 20px 20px 30px rgba(0,0,0,.14);
      background: rgba($color: #0098d4, $alpha: .6);
      transition: all 0.5s;
    }
  }
  .container-img{
    width: 100%;
    height: 20vh;
    img{
      max-height: 100%;
      max-width: 100%;
      width: auto;
      height: auto;
    }
  }
  .fadein-load{
    -webkit-animation: fadein .2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein .2s; /* Firefox < 16 */
        -ms-animation: fadein .2s; /* Internet Explorer */
         -o-animation: fadein .2s; /* Opera < 12.1 */
            animation: fadein .2s;
  }
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
}
#info{
  padding: 100px 40px;
  background-color: #000;
  h2{
    color: #fff;
    font-weight: 300;
    font-size: 3rem;
    margin-bottom: 100px;
  }
  .cards-items{
    max-width: 340px;
    // border: solid .5px #fff;
    box-shadow: 5px 5px 20px rgba($color: #0098d4, $alpha: .6);
    border-radius: 5px;
    padding: 20px;
    &:hover{
      box-shadow: 10px 10px 20px rgba($color: #0098d4, $alpha: .6);
      transition: all .3s;
    }
    .title-card{
      color: #fff;
      text-transform: uppercase;
      font-weight: 300;
    }
  }
}
#tecnology{
  padding-top: 100px;
  h2{
    font-weight: 300;
    font-size: 2rem;
    margin-bottom: 50px;
  }
  .cards-tecnology{
    width: 150px;
    height: 150px;
    padding: 10px;
    img{
      max-height: 100%;
      max-width: 100%;
      width: auto;
      height: auto;
    }
  }
  .title-xs{
    font-size: 14px;
    margin-bottom: 0px !important;
    margin-top: auto;
  }
}
#template{
  margin: 100px 0px;
}
@media (max-width: 768px) {
  #banner{
    padding: 20px;
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
}
@media (max-width: 540px) {
  #banner{
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
}
@media (max-width: 370px) {
  #banner{
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 0.8rem;
    }
  }
  #tecnology{
    .cards-tecnology{
      width: 100px;
      height: 100px;
      padding: 5px;
    }
  }
}
</style>
