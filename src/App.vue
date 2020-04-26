<template>
  <div id="app">
    <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <iframe
        class="iframe"
        src="contact.html"
        name="iframe"
        scrolling="yes"
        frameborder="0"
        marginheight="0px"
        marginwidth="0px"
      >
      </iframe>
    </swiper-slide>
    <swiper-slide>
      <iframe
        class="iframe"
        src="example.html"
        name="iframe"
        scrolling="yes"
        frameborder="0"
        marginheight="0px"
        marginwidth="0px"
      >
      </iframe>
    </swiper-slide><swiper-slide>
      <iframe
        class="iframe"
        src="gallery.html"
        name="iframe"
        scrolling="yes"
        frameborder="0"
        marginheight="0px"
        marginwidth="0px"
      >
      </iframe>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper);
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

.swiper-container,
.swiper-wrapper,
.swiper-slide,
.iframe {
  min-height: 100vh;
}

.swiper-slide {
  background: lightblue;
}

.iframe {
  width: 90%;
  background: #ffffff;
}
</style>
