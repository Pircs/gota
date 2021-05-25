<template>
  <div id="app">
    <div class="mobile-tips">
      <div class="tips">
        <span>使用开发者工具模拟手机查看</span><br />
        <span>或</span><br />
        <span>手机扫码查看</span> <br />
        <img src="./assets/qrcode.png" alt="qrcode" />
      </div>
    </div>
    <router-view class="app-page" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~@/assets/scss/reset.scss";

body {
  background: rgb(241 244 248);
  letter-spacing: 0.1rem;
}

.app-page {
  height: 100vh;
}

.mobile-tips {
  display: none;
}

@media screen and (min-width: 769px) {
  .mobile-tips {
    z-index: 20;
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #00000050;
    display: flex;
    justify-content: center;
    align-items: center;

    > .tips {
      text-align: center;
      background: white;
      padding: 1rem;
      border-radius: 8px;

      > span {
        margin: 0.3rem;
        display: inline-block;
      }
      > img {
        margin-top: 1rem;
        max-width: 150px;
      }
    }
  }
}
</style>
