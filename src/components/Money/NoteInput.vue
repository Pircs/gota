<template>
  <div class="record">
    <div class="input-num">
      <input type="text" :class="[defaultNum !== num ? 'active' : '']" :value="num" readonly/>
    </div>
    <div class="notes">
      <div @click="$emit('datepicker')" class="input-class">
        {{ createDay }}
      </div>
      <input
        class="input-class"
        type="text"
        value=""
        @change="inputNote($event)"
        :placeholder="this.defaultNote"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['num', 'note', 'createDay'],
  data() {
    return {
      defaultNum: null,
      defaultNote: null,
    };
  },
  beforeMount() {
    this.defaultNum = this.num;
    this.defaultNote = this.note;
  },
  methods: {
    inputNote(event) {
      this.$emit('update:note', event.currentTarget.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

.record {
  background: $bg-white;
  margin-bottom: 1rem;
  border-radius: 7px;
  padding: 1rem;

  > .input-num {
    border-bottom: 1px solid $bg-217217217;

    > input {
      font-size: 1.8rem;
      line-height: 1.8rem;
      color: $default-color-light;
      margin-bottom: 0.2rem;
      -webkit-appearance: none;
    }

    .active {
      color: $default-color;
    }
  }

  .notes {
    margin-top: 1rem;
    display: flex;
    color: $default-color;

    > .input-class {
      padding: 0.5rem 0.7rem;
      border: 1px solid $bg-217217217;
      border-radius: 25px;
    }

    & :first-child {
      margin-right: 0.8rem;
      min-width: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & :last-child {
      flex-grow: 1;
      -webkit-appearance: none;
    }
  }
}
</style>
