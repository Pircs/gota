<template>
  <div class="comp">
    <p>新增{{ type ? "收入" : "支出" }}类别</p>
    <div class="input-from">
      <input type="text" v-model="emoji" maxlength="2" placeholder="emoji"/>
      <input type="text" v-model="name" placeholder="类别名称" maxlength="8"/>
    </div>
    <div class="buttons">
      <button @click="cancel">取消</button>
      <button @click="add">添加</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Toast } from 'vant';

export default {
  props: ['type'],
  data() {
    return {
      emoji: null,
      name: null,
    };
  },
  methods: {
    ...mapActions(['addType']),
    cancel() {
      this.$emit('close:add');
    },

    add() {
      if (!this.name) {
        return Toast('类别名为什么');
      }
      if (!this.emoji) {
        this.emoji = this.name.substr(0, 1);
      }
      // 添加至vuex
      this.addType({ emoji: this.emoji, name: this.name, cut: this.type });

      this.name = null;
      this.emoji = null;
      return this.$emit('close:add');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

.comp {
  min-width: 70vw;
  border-radius: 10px;
  text-align: center;
  padding: 1rem;

  > p {
    margin-bottom: 1rem;
  }
}

.input-from {
  display: flex;
  border-radius: 5px;
  border: 1px solid rgb(210 210 210);
  margin-bottom: 1rem;

  > input {
    text-align: center;
    width: 50%;
    padding: 0.5rem 0.2rem;
  }
}

.buttons {
  > button {
    padding: 0.7rem 0;
    color: #fff;
    width: calc(50% - 0.5rem);
  }

  :first-child {
    background: $bg-gray;
    margin-right: 0.5rem;
  }

  :last-child {
    background: $bg-grad;
    margin-left: 0.5rem;
  }
}
</style>
