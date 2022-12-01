<template>
  <div class="data">
    <h2>Information....</h2>

    <h3>
      <span class="crypto">{{ crypto }}</span>
      -
      <span class="coin">{{ coin }}</span>
    </h3>

    <img :src="`https://www.cryptocompare.com/${img}`" alt="">
    <p>
      Price: <strong>$ {{ price }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    crypto: {
      type: String,
      required: true
    },
    coin: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
  }
}
</script>