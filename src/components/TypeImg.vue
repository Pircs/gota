<template>
  <div :class="{ [classPrefix + '-item']: classPrefix }" @click="onClick()">
    <div class="img">{{ type.emoji }}</div>
    <div class="tips">
      <span>{{ type.name }}</span>
      <span v-if="note" class="note">{{ note }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['classPrefix', 'type', 'note'],
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$emit('onClick:Type', this.type);
    },
  },
};
</script>

<style lang="scss" scoped>
.img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgb(237 237 237);
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}

.note {
  font-size: 12px;
  color: rgb(187 189 191);
  margin-top: 2px;
}
</style>
