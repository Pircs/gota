<template>
  <Layout>
    <div class="main">
      <div class="panel my">
        <div class="avatar"></div>
        <div class="user-info">
          <span class="nickname">Rico</span>
          <span class="about-me">养鱼要蓄水，致富要积累。</span>
        </div>
      </div>

      <div class="panel item-list">
        <router-link to="/setting/types">
          <div class="item">
            <div class="title">
              <icon class="icon" icon="tags" />
              <span>类别管理</span>
            </div>
            <icon icon="angle-right" />
          </div>
        </router-link>

        <a href="#">
          <div class="item">
            <div class="title">
              <icon class="icon" icon="file-csv" />
              <span>导出为CSV</span>
            </div>
            <icon icon="angle-right" />
          </div>
        </a>

        <a href="#">
          <div class="item">
            <div class="title">
              <icon class="icon" icon="code-branch" />
              <span>Github</span>
            </div>
            <icon icon="angle-right" />
          </div>
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';

export default {
  components: { Layout },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

.main {
  padding: 1rem;
}

.panel {
  background: $bg-white;
  margin-bottom: 0.5rem;
  border-radius: 7px;
  -webkit-box-shadow: 0 12px 17px 0 rgba(123, 123, 123, 0.05);
}

.my {
  padding: 1rem;
  display: flex;
  align-items: center;

  .avatar {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-image: url("../assets/avatar.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-right: 1rem;
  }

  .user-info {
    display: flex;
    flex-direction: column;

    :first-child {
      font-weight: 600;
      margin-bottom: 0.3rem;
      font-size: 1.1rem;
    }

    :last-child {
      font-size: 0.6rem;
    }
  }
}

.item-list {
  padding: 0.2rem 1rem;

  .item {
    display: flex;
    padding: 0.7rem 0.3rem;
    border-bottom: 1px solid $bg-217217217;
    justify-content: space-between;

    .title {
      .icon {
        min-width: 1rem;
      }

      span {
        margin-left: 0.7rem;
      }
    }
  }

  :last-child {
    .item {
      border-bottom: none;
    }
  }
}
</style>
