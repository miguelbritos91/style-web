<template>
  <div>
    <div class="top">
      <div class="filter d-flex justify-center align-center">
        <h1 class="font-rubik">
          Contacto
        </h1>
      </div>
    </div>
    <div id="body-contact" class="d-flex justify-space-between">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div class="card-contact">
              <h2 class="font-raleway text-uppercase">
                Contactanos
              </h2>
              <div class="d-flex flex-row align-center mt-4">
                <i class="i-contact" />
                <a class="email font-raleway ml-3 d-flex" href="mailto:styleweb.net@gmail.com">
                  styleweb.net@gmail.com
                </a>
              </div>
              <ul id="redes" class="d-flex">
                <li><i class="i-fb" /></li>
                <li><i class="i-in" /></li>
                <li><i class="i-wp" /></li>
                <li><i class="i-wk" /></li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="form-contact">
              <formulario />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import formulario from '~/components/formulario.vue'
export default {
  components: { formulario }

}
</script>

<style lang="scss" scoped>
.top{
    width: 100%;
    height: calc(100vw * (9/16));
    max-height: 450px;
    background-color: #000;
    background-image: url('/images/recursos/bg-contact.jpg');
    background-position: center 50px;
    background-repeat: no-repeat;
    position: relative;
    .filter{
        background-color: rgba($color: #000000, $alpha: 0.60);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        h1{
            text-align: center;
            color: #fff;
            text-transform: uppercase;
            font-weight: 900;
            font-size: 4.5rem;
        }
    }
}
#body-contact{
    padding: 50px 0px;
    background-color: #e3e3e3;
    .card-contact{
      width: 100%;
      height: 300px;
      background: #fff;
      padding: 40px;
      box-shadow: 20px 20px 30px rgba(0,0,0,.5);
      h2{
        font-size: 29px;
      }
      .email{
        font-size: 22px;
        text-decoration: none;
        color: #000;
        font-weight: 300;
        line-height: 1;
        width: calc(100% - 42px);
      }
      .i-contact{
        background-image: url('/icons/contact.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 30px;
        height: 30px;
        display: block;
      }
      #redes{
        padding: 0px;
        margin-top: 50px;
        li{
          list-style: none;
          margin-right: 10px;
        }
      }
      .i-fb{
        background-image: url('/icons/facebook.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 30px;
        height: 30px;
        display: block;
      }
      .i-in{
        background-image: url('/icons/instagram.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 30px;
        height: 30px;
        display: block;
      }
      .i-wp{
        background-image: url('/icons/whatsapp.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 30px;
        height: 30px;
        display: block;
      }
      .i-wk{
        background-image: url('/icons/workana.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 170px;
        height: 30px;
        display: block;
      }
    }
    .form-contact{
      width: 100%;
      height: auto;
      background: #fff;
      padding: 40px;
      box-shadow: 20px 20px 30px rgba(0,0,0,.5);
    }
}
@media (min-width: 520px) {
  .card-contact{
      background-image: url('/images/recursos/contact.png') !important;
      background-position: center right !important;
      background-repeat: no-repeat !important;
      background-size: contain !important;
    }
}
@media (max-width: 520px) {
  .top{
    .filter{
        h1{
          font-size: 2.2rem;
        }
    }
}
#body-contact{
  .card-contact{
      padding: 20px;
      height: auto;
      h2{
        font-size: 1.2rem;
        white-space: nowrap;
      }
      .email{
        font-size: 1rem;
      }
      .i-fb, .i-in, .i-wp{
        width: 20px;
        height: 20px;
      }
      .i-wk{
        width: 100px;
        height: 20px;
      }
    }
  }
}
</style>
