<template>
  <div class="num" @click="inputNum">
    <button id="1">1</button>
    <button id="2">2</button>
    <button id="3">3</button>
    <button id="del" class="operator">
      <icon icon="backspace"/>
    </button>
    <button id="4">4</button>
    <button id="5">5</button>
    <button id="6">6</button>
    <button id="7">7</button>
    <button id="8">8</button>
    <button id="9">9</button>
    <button id="ok" class="operator">OK</button>
    <button id=".">.</button>
    <button id="0">0</button>
    <button id="again">再记</button>
  </div>
</template>

<script>
export default {
  props: ['num'],
  data() {
    return {
      numPad: '',
    };
  },
  methods: {
    inputNum(event) {
      const { id } = event.target;
      const firstNum = this.numPad.substr(0, 1);
      const haveDot = this.numPad.indexOf('.');
      if (firstNum === '' && id === '.') {
        this.numPad = '0.';
        return;
      }
      if (firstNum === '0' && id === '0' && haveDot === -1) {
        return;
      }
      if (id === '.' && haveDot > -1) {
        return;
      }
      switch (id) {
        case 'ok':
          this.clickOk();
          break;
        case 'del':
          this.clickDel();
          break;
        case 'again':
          this.clickAgain();
          break;
        default:
          if (this.numPad.length < 15) {
            this.numPad += id;
          }
          break;
      }
    },

    clickOk() {
      this.recordDone({ data: this.numPad });
    },

    clickAgain() {
      this.recordDone({ data: this.numPad, status: true });
    },

    clickDel() {
      this.numPad = this.numPad.substring(0, this.numPad.length - 1);
    },

    recordDone(val) {
      this.$emit('record:done', val);
    },
  },
  watch: {
    numPad(val) {
      this.$emit('update:num', val);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

.num {
  @extend %clearFix;

  .operator {
    margin-right: 0;
    height: 5.3rem;
    float: right;
  }

  > button {
    color: $default-color;
    float: left;
    height: 2.5rem;
    min-width: 23.9%;
    margin: 0 0.3rem 0.3rem 0;
    text-align: center;
    padding: 0.8rem 0;
    border-radius: 5px;
    background: #fff;
    font-weight: 600;
    transition: all 0.3s;

    &:active {
      background: rgb(237 237 237);
    }
  }
}
</style>
