<template>
  <article class="z-depth-2 panel">
    <div class="table-head valign-wrapper">
      <h5 class="text-bold">Production List</h5>
      <div class="flex-grow" />
      <a class="waves-effect waves-light btn-small" @click="updateAll">
        <span class="icon-btn-text">Update All</span>
        <i class="material-icons icon">send</i>
      </a>
    </div>
    <table class="striped highlight table">
      <thead>
        <tr>
          <th class="table-cell" v-for="thead of theads" :key="thead">{{ thead }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="production of page.list" :key="production.name">
          <ListItem :data="production" />
        </tr>
      </tbody>
    </table>
    <section class="valign-wrapper table-foot">
      <div>共有 <em class="flow-text indigo-text text-accent-2">{{ page.pageInfo.totalItem }}</em> 件商品</div>
      <div class="flex-grow"></div>
      <div>
        <Pagination
          :active="active"
          :totalPage="page.pageInfo.totalPage"
          @change="setActive"
        ></Pagination>
      </div>
    </section>
  </article>
</template>

<script>
import { defineComponent, inject, ref, onMounted, onUpdated } from 'vue';
import Header from '../../common/components/header/Header.vue';
import Footer from '../../common/components/footer/Footer.vue';
import Pagination from '../../common/components/pagination/Pagination.vue';
import { useState, useEffect } from '../../common/utils/useHooks';
import ListItem from './list-item.vue';

export default defineComponent({
  name: 'ListPage',
  components: {
    Header,
    Footer,
    Pagination,
    ListItem,
  },
  setup() {
    const { productsService } = inject('services');
    const [page, setPage] = useState({
      pageInfo: {},
      list: [],
    });
    const [active, setActive] = useState(0);
    const [refreshing, refresh] = useState(Date.now());
    // onMounted(async () => {
    //   setPage(await productsService.getList({}));
    // });
    // onUpdated(() => {
    //   setPage(await productsService.getList({}));
    // })
    useEffect(async ([nextActive, _]) => {
      console.log(' === nextActive === ', nextActive);
      // setPage(await productsService.getList({ page: nextActive }));
      const data = await productsService.getList({ page: nextActive });
      console.log('----->', data);
      setPage(data);
    }, [active, refreshing]);
    return {
      page,
      active,
      setActive,
      theads: ['Name', 'Description', 'Offcial Shop', 'Comments', 'Last Sale', 'Operate'],
      updateAll: async () => {
        await productsService.updateAll();
        refresh(Date.now());
      },
    };
  }
});
</script>

<style scoped>
.panel {
  margin: 40px auto;
}

.table-head {
  padding: 0 10px;
  height: 64px;
}

.icon-btn-text {
  vertical-align: top;
  margin-right: 12px;
}

.text-bold {
  font-weight: 600;
  font-size: 1.3rem;
}

.table-cell {
  padding: 10px;
  font-size: 1rem;
  word-break: break-all;
}

.table-foot {
  height: 64px;
  margin-bottom: 60px;
  padding: 0 10px;
}

.flex-grow {
  flex: 1;
}
</style>