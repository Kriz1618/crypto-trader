<template>
  <div class="container">
    <h1>Crypto Trader</h1>
    <Grid>
      <data-form @get-data="getData"/>
      <Data 
        :crypto="info.crypto"
        :coin="info.coin"
        :img="info.img"
        :price="info.price"
      />
    </Grid>
  </div>

  <reload-prompt/>
</template>

<script>
import DataForm from './components/Form.vue';
import Data from './components/Data.vue';
import Grid from './components/Grid.vue';
import ReloadPrompt from './components/ReloadPrompt.vue';

export default {
  components: { DataForm, Data, Grid, ReloadPrompt },
  data: () => ({
    info: {
      crypto: "*",
      coin: "*",
      img: "/media/37746251/btc.png",
      price: 0,
    },
  }),
  methods: {
    async getData(crypto, coin) {
      const res = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${encodeURI(crypto)}&tsyms=${encodeURI(coin)}`
      );

      const { RAW } = await res.json();
      const data = RAW[crypto][coin];

      this.info.crypto = crypto;
      this.info.coin = coin;
      this.info.img = data.IMAGEURL;
      this.info.price = data.PRICE;
    },
  }
};
</script>