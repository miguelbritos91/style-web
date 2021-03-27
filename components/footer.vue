<template>
  <div class="footer">
    <div class="d-flex justify-space-between align-center">
      <span class="font-montserrat site">Style Web &copy; {{ new Date().getFullYear() }}</span>
      <a class="email font-raleway ml-3 d-flex align-center" href="mailto:styleweb.net@gmail.com">
        <v-icon class="mr-2" color="#fff">
          mdi-email-send-outline
        </v-icon>
        styleweb.net@gmail.com
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
  padding: 50px 20px;
  background: #000;
}
.site{
  color: #fff;
}
.email{
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  font-weight: 300;
  line-height: 1;
  &:hover{
    color: #2196f3;
  }
}
</style>
