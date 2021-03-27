<template>
  <div class="navigation d-flex w-100 align-center justify-space-between" :class="{'bg-dark': scrollTop>0, 'open-menu': drawer && screen.width<993 }">
    <nuxt-link to="/" class="logo" />
    <ul v-if="screen.width>992 || drawer" class="menu d-flex" :class="{'nav-mobile openMenu-animation bg-dark flex-column': drawer && screen.width<993, 'openMenu-animation': !drawer && screen.width<993}">
      <li class="item-menu">
        <nuxt-link to="/" exact class="font-montserrat">
          Inicio
        </nuxt-link>
      </li>
      <li class="item-menu">
        <nuxt-link to="/nosotros" class="font-montserrat">
          Nosotros
        </nuxt-link>
      </li>
      <li class="item-menu">
        <nuxt-link to="/servicios" class="font-montserrat">
          Servicios
        </nuxt-link>
      </li>
      <li class="item-menu">
        <nuxt-link to="/tecnologias" class="font-montserrat">
          Tecnologías
        </nuxt-link>
      </li>
      <li class="item-menu">
        <nuxt-link to="/proyectos" class="font-montserrat">
          Proyectos
        </nuxt-link>
      </li>
      <li class="item-menu">
        <nuxt-link to="/contacto" class="font-montserrat">
          Contacto
        </nuxt-link>
      </li>
    </ul>
    <v-icon
      v-if="screen.width<993"
      large
      color="white"
      @click="openMenuMobile()"
    >
      mdi-menu
    </v-icon>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      drawer: false,
      scrollTop: 0
    }
  },
  computed: {
    ...mapState({
      isMobile: state => state._isMobile,
      screen: state => state._screenView
    })
  },
  mounted () {
    this.$nextTick(function () {
      this.onScroll()
    })
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      this.scrollTop = window.scrollY
    },
    openMenuMobile () {
      this.drawer = !this.drawer
      if (this.drawer) {
        document.documentElement.style.overflowY = 'hidden'
      } else {
        document.documentElement.style.overflowY = 'auto'
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.navigation{
    .logo{
        width: 200px;
        height: 80%;
        display: block;
        background-image: url('/images/logos/logo-style-web-flat-light.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position-y: center;
        background-position-x: left;
    }
    background-color: transparent;
    height: 50px;
    padding: 0px 20px;
    .menu{
        list-style: none;
    }
}
.bg-dark{
  background-color: #000;
  transition: all 1s;
}
.item-menu{
  padding: 0px 10px;
  a{
    color: #fff;
    text-decoration: none;
    font-weight: 200;
  }
}
.nuxt-link-active {
    font-weight: bold !important;
    color: #fff !important;
}
.nav-mobile{
  position: fixed;
  padding-top: 25px;
  top: 0px;
  right: 0;
  width: 250px;
  height: 100%;
  z-index: 100000;
  .item-menu{
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
}
.open-menu{
  width: calc(100% - 250px);
  transition: all .2s;
}
.openMenu-animation{
  -webkit-animation: openMenu .2s; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: openMenu .2s; /* Firefox < 16 */
      -ms-animation: openMenu .2s; /* Internet Explorer */
        -o-animation: openMenu .2s; /* Opera < 12.1 */
          animation: openMenu .2s;
}
@keyframes openMenu {
  from { width: 0px; }
  to   { width: 250px; }
}

/* Firefox < 16 */
@-moz-keyframes openMenu {
  from { width: 0px; }
  to   { width: 250px; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes openMenu {
  from { width: 0px; }
  to   { width: 250px; }
}

/* Internet Explorer */
@-ms-keyframes openMenu {
  from { width: 0px; }
  to   { width: 250px; }
}

/* Opera < 12.1 */
@-o-keyframes openMenu {
  from { width: 0px; }
  to   { width: 250px; }
}

.closeMenu-animation{
  -webkit-animation: closeMenu .2s; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: closeMenu .2s; /* Firefox < 16 */
      -ms-animation: closeMenu .2s; /* Internet Explorer */
        -o-animation: closeMenu .2s; /* Opera < 12.1 */
          animation: closeMenu .2s;
}
@keyframes closeMenu {
  from { width: 250px; }
  to   { width: 0px; }
}

/* Firefox < 16 */
@-moz-keyframes closeMenu {
  from { width: 250px; }
  to   { width: 0px; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes closeMenu {
  from { width: 250px; }
  to   { width: 0px; }
}

/* Internet Explorer */
@-ms-keyframes closeMenu {
  from { width: 250px; }
  to   { width: 0px; }
}

/* Opera < 12.1 */
@-o-keyframes closeMenu {
  from { width: 250px; }
  to   { width: 0px; }
}

</style>
