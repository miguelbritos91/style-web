<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="form"
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Nombre y Apellido"
      required
      class="font-montserrat input-form"
    />

    <v-text-field
      v-model="phone"
      :rules="phoneRules"
      label="Teléfono"
      required
      class="font-montserrat input-form"
    />

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      class="font-montserrat input-form"
    />

    <v-textarea
      v-model="message"
      clearable
      required
      :rules="messageRules"
      clear-icon="mdi-close-circle"
      label="Ingrese aquí su consulta"
    />

    <!-- :disabled="!valid" -->
    <v-btn
      color="info"
      class="w-100 text-white font-releway btn-send"
      @click="validate"
    >
      <v-progress-circular
        v-if="sending"
        indeterminate
        color="white"
        class="mr-3"
      />
      {{ !sending ? (screen.width > 768 ? 'ENVIAR MENSAJE' : 'ENVIAR') : 'ENVIANDO...' }}
    </v-btn>
    <v-alert
      v-if="sended"
      class="toats"
      type="success"
    >
      Email enviado!
    </v-alert>
    <v-alert
      v-if="toats && (!valid || error)"
      class="toats"
      type="error"
    >
      {{ !valid ? 'Faltan Datos!' : errorMessage }}
    </v-alert>
    <p class="m-0 mt-4 terms-google-recaptcha text-dark">
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy">Privacy Policy</a> and
      <a href="https://policies.google.com/terms">Terms of Service</a> apply.
    </p>
  </v-form>
</template>

<script>

import { mapState } from 'vuex'

export default {
  props: {
    template: {
      type: String,
      default: 'null'
    }
  },
  data () {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'El Nombre y Apellido es requerido'
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'El telefono es requerido',
        v => /^[0-9]+$/.test(v) || 'Telefono no es valido. Solo ingrese números'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail no es valido'
      ],
      messageRules: [
        v => !!v || 'El mensaje es requerido'
      ],
      message: '',
      // baseURL: process.env.baseUrl,
      mailserver: process.env.mailServer,
      sending: false,
      sended: false,
      error: false,
      errorMessage: 'Error!',
      toats: false,
      emailTo: 'styleweb.net@gmail.com'
    }
  },
  computed: {
    ...mapState({
      screen: state => state._screenView
    })
  },
  async mounted () {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    validate () {
      const validate = this.$refs.form.validate()
      if (validate) {
        this.onSubmit()
        this.sendMail()
      } else {
        this.toats = true
        setTimeout(() => {
          this.toats = false
        }, 5000)
      }
    },
    async onSubmit () {
      try {
        const token = await this.$recaptcha.execute('contacto')
        console.log('ReCaptcha token:', token)
        await this.sendMail()
        await this.$recaptcha.reset()
      } catch (e) {
        this.toats = true
        this.error = true
        this.errorMessage = 'Error al validar Recaptcha'
        console.log('Error al validar Recaptcha')
        setTimeout(() => {
          this.toats = false
        }, 5000)
      }
    },
    reset () {
      this.$refs.form.reset()
      this.$refs.form.resetValidation()
    },
    async sendMail () {
      this.sending = true

      const mailServer = this.mailserver

      const form = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      }

      const templeteAdmin = `
      <body>
        <div>
            <p>Un nuevo usuario se ha contactado desde la web</p>
            <p>Datos de contacto:</p>
            <ul>
                <li>Nombre y apellido: ${form.name}</li>
                <li>Teléfono: ${form.phone}</li>
                <li>Email: ${form.email}</li>
                <li>Mensaje: ${form.message}</li>
            </ul>
        </div>
      </body>`

      const templateUser = `
      <body>
        <div>
            <p>¡Gracias por comunicarte con nosotros!</p>
            <p>En breve nos estaremos contactando.</p>
            <p>Que tengas un buen dia, saludos.</p>
        </div>
      </body>`

      // Envio de email admin
      await this.$axios.$post('api/mail/send', {
        from: 'style-web <' + mailServer + '>',
        subject: 'Nuevo Contacto de styleweb.net',
        html: templeteAdmin,
        to: this.emailTo
      })
        .then(async (resp) => {
          console.log(resp)
          if (resp === 'OK') {
            // Envio de mail de confirmacion al usuario
            const confirm = await this.$axios.$post('api/mail/send', {
              from: 'style-web <' + mailServer + '>',
              subject: 'Hemos recibido tu consulta',
              html: templateUser,
              to: form.email
            })
            console.log(confirm)
            this.sended = true
          }
        })
        .catch((e) => {
          console.log(e)
          this.error = true
          if (e.response.status === 500 || e.response.status === '500') {
            this.errorMessage = 'Error interno del servidor'
          } else {
            this.errorMessage = '¡Error! Vuelva a intentar'
          }
        })

      this.sending = false
      this.toats = true
      this.reset()
      setTimeout(() => {
        this.toats = false
        this.sended = false
        this.error = false
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-form{
    font-size: 17px;
    font-weight: 400;
    color: #313131;
}
.terms-google-recaptcha {
    font-family: "Montserrat",sans-serif!important;
    font-size: 11px;
    color: #e3e3e3;
}

.text-dark {
    color: #343a40!important;
}
@media (max-width:1280px){
  .btn-send{
    height: 50px !important;
  }
}
</style>
