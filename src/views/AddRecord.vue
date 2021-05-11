<template>
  <div class="page">
    <top-menu>
      <div @click="backTo">🔙</div>
      <div class="record-type">
        <span :class="[nowType === 0 ? 'active' : '']" @click="nowType = 0">支出</span>
        <span :class="[nowType === 1 ? 'active' : '']" @click="nowType = 1">收入</span>
      </div>
      <span>❗</span>
    </top-menu>
    <div class="main">
      <div class="types">
        <type-img
          class-prefix="type"
          :class="[checkType === index ? 'active' : '']"
          v-for="(item, index) in typeList"
          :key="item.name"
          :type="item"
          @onClick:Type="selectType($event, index)"
        />
        <type-img
          class-prefix="type"
          :type="{ name: '添加', emoji: '➕' }"
          @click.native="addType"
        />
      </div>
      <note-input
        :num="record.num"
        @datepicker="showDatePick = !showDatePick"
        :note.sync="record.note"
        :create-day="selectDate"
      />
      <num-pad :num.sync="record.num" @record:done="saveRecord($event)" class="num-pad"/>
    </div>

    <van-action-sheet v-model="showDatePick" :round="false" duration="0.2">
      <date-picker :show-date-pick.sync="showDatePick" type="date" @getPickDate="getPickDate"/>
    </van-action-sheet>

    <van-popup v-model="showAddType" round>
      <add-type :type="nowType" @close:add="showAddType = false"/>
    </van-popup>
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu.vue';
import NumPad from '@/components/Money/NumPad.vue';
import NoteInput from '@/components/Money/NoteInput.vue';
import TypeImg from '@/components/TypeImg.vue';
import { mapGetters, mapActions } from 'vuex';
import { Toast } from 'vant';
import DatePicker from '@/components/DatePicker.vue';
import dayjs from 'dayjs';
import AddType from '@/components/addType.vue';

export default {
  components: {
    AddType,
    DatePicker,
    TypeImg,
    NoteInput,
    NumPad,
    TopMenu,
  },
  data() {
    return {
      checkType: null,
      nowType: 0,
      showDatePick: false,
      showAddType: false,
      record: {
        num: '0.00',
        note: '备注',
        type: null,
        create: new Date(),
      },
      editModel: false,
    };
  },
  computed: {
    ...mapGetters(['types']),

    selectDate() {
      const res = dayjs().isSame(this.record.create, 'day');
      if (res) {
        return '今日';
      }
      const month = dayjs(this.record.create).month() + 1;
      const day = dayjs(this.record.create).date();
      return `${month}-${day}`;
    },

    typeList() {
      const temp = [];
      this.types.forEach((val) => {
        if (val.cut === this.nowType) {
          temp.push(val);
        }
      });
      return temp;
    },
  },

  beforeMount() {
    this.initTypes();
    this.checkEdit();
  },

  methods: {
    ...mapActions(['setRecordList', 'editRecord', 'initTypes']),
    selectType(event, index) {
      this.checkType = index;
      this.record.type = event;
    },

    saveRecord(event) {
      if (!this.record.type) {
        return Toast('这个钱是干啥花的你没选');
      }
      if (this.record.num === '0.00' || this.record.num === '') {
        if (this.record.type.cut === 1) {
          return Toast(`${this.record.type.name}收入了多少钱`);
        }
        return Toast(`用于${this.record.type.name}花了多少钱`);
      }
      if (this.record.note === '备注') {
        this.record.note = null;
      }

      // 判断是新记一笔还是编辑
      if (this.editModel === false) {
        this.record.create = new Date().toISOString();
        this.setRecordList(this.record);
      } else {
        this.editRecord(this.record);
      }

      // true 代表用需要再次记账，不用返回
      if (!event.status) {
        return this.$router.back();
      }
      this.renewRecord();
      return Toast('记账成功，再记一笔吧');
    },

    getPickDate(event) {
      console.log(event);
      this.record.create = event;
    },

    renewRecord() {
      this.checkType = null;
      this.record = {
        num: '0.00',
        note: '备注',
        type: null,
        create: new Date(),
      };
    },

    addType() {
      this.showAddType = !this.showAddType;
    },

    backTo() {
      this.$router.back();
    },

    checkEdit() {
      const { params } = this.$route;
      if (Object.keys(params).length === 0) return;
      this.editModel = true;
      this.record = params;
      this.typeList.forEach((val, index) => {
        if (val.name === this.record.type.name) {
          this.checkType = index;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

::v-deep {
  .menu {
    justify-content: space-between;
  }

  .type-item {
    width: 20%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    > .img {
      margin-bottom: 0.4rem;
      margin-right: 0;
    }
  }

  .active {
    > .img {
      background: $bg-132133134;
    }
  }
}

.page {
  overflow-x: hidden;
}

.main {
  height: calc(100vh - 2.6rem);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.record-type {
  font-weight: 600;

  > span {
    padding: 0 0.3rem 0 0.4rem;
    border-bottom: 2px solid transparent;
    color: $default-color-light;
  }

  .active {
    color: $default-color;
    border-bottom: 2px solid black;
  }
}

.record-type :first-child {
  margin-right: 0.5rem;
}

.record-type :last-child {
  margin-left: 0.5rem;
}

.num-pad {
  margin-bottom: -0.3rem;
}

.types {
  overflow: auto;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;

  > p {
    height: 50px;
  }
}
</style>
