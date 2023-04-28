<template>
  <div>
    <section class="p-0">
      <div class="slide-1 home-slider">
        <swiper loop=true :navigation="true" :modules="modules" :slidesPerView="auto" class="swiper-wrapper" >

          <swiper-slide class="swiper-slide" v-for="(item, index) in items" :key="index">
            <div class="home text-center" :class="item.alignclass"
              v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="slider-contain">
                      <div>
                        <h1 class="text-bg-danger">{{ item.title }}</h1>
                        <h4 class="text-bg-warning">{{ item.subtitle }}</h4>
                        <nuxt-link :to="{ path: '/collection/leftsidebar/all' }" class="btn btn-solid">shop
                          now</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

      </div>
    </section>
    <!-- Home slider end -->
  </div>
</template>
<script type="text/javascript">
import {
  Swiper,
  SwiperSlide
} from "swiper/vue";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
export default {
  data() {
    return {

      items: [
        {
          imagepath: 'https://media.istockphoto.com/id/1195371317/photo/sale-and-promotion-tag-in-supermarket.jpg?s=612x612&w=0&k=20&c=WRn9WWtzdJIHktwJRXG7wymZHzkDlGx3MYe3sTpeAFE=',
          title: 'Expiro',
          subtitle: 'Find great discounts from supermarkets near you',
          alignclass: 'p-left'
        },
        {
          imagepath: 'https://content.pymnts.com/wp-content/uploads/2019/11/Africa-FinTech-investors-OPay-Nigeria-funding-PalmPay-1000x600.jpg',
          title: 'welcome to Expiro',
          subtitle: 'Buy Any Product',
          alignclass: 'p-left'
        }
      ]
    }
  },
  components: { Swiper, SwiperSlide },

  setup() {

    return {
      modules: [Navigation]
    }
  }
}
</script>
