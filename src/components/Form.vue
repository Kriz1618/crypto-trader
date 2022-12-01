<template>
  <div>
    <form @submit.prevent="$emit('get-data', crypto, coin)">
      <div>
        <label>Local Coin:</label>
        <select v-model="coin" required>
          <option value="" disabled selected>Choose a coin</option>
          <option>COP</option>
          <option>USD</option>
          <option>EUR</option>
          <option>MXN</option>
        </select>
      </div>
      <div>
        <label>Crypto Coin:</label>
        <select v-model="crypto" required>
          <option value="" disabled selected>Choose a crypto</option>
          <option>BTC</option>
          <option>ETH</option>
          <option>LTC</option>
          <option>BNB</option>
          <option>BUSD</option>
        </select>
      </div>
      <div>
        <button type="submit">Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    coin: "",
    crypto: "",
  }),
}

</script>