<template>
  <ul class="pagination">
    <li :class="{
      'disabled': active === 0,
      'waves-effect': active > 0,
    }">
      <a href="javascript:void(0)" @click="(active > 0) && setActive(active - 1)"><i class="material-icons">chevron_left</i></a>
    </li>
    <li
      v-for="pIndex of paginations"
      :key="`pagination-${pIndex}`"
      :class="{
        'disabled': pIndex < 0,
        'active': active === pIndex,
        'waves-effect': pIndex >= 0 && active !== pIndex,
      }"
    >
      <a href="javascript:void(0)" @click="(pIndex >= 0 && active !== pIndex) && setActive(pIndex)">{{ pIndex < 0 ? '...' : pIndex + 1 }}</a>
    </li>
    <li :class="{
      'disabled': active + 1 === totalPage,
      'waves-effect': active + 1 < totalPage,
    }">
      <a href="javascript:void(0)" @click="(active + 1 < totalPage) && setActive(active + 1)"><i class="material-icons">chevron_right</i></a>
    </li>
  </ul>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Pagination',
  props: {
    active: Number,
    totalPage: Number,
    onChange: Function,
  },
  setup(props, { emit }) {
    const paginations = computed(() => {
      const { totalPage, active } = props;
      const pageIds = [...Array(totalPage)].map((_, i) => {
        if (i > 1 && i < totalPage - 2) {
          if (i < active - 2) {
            return -1;
          }
          if (i > active + 2) {
            return -2;
          }
        }
        return i;
      });
      return [...new Set(pageIds)];
    });
    return {
      active: computed(() => props.active),
      paginations,
      totalPage: computed(() => props.totalPage),
      setActive: props.onChange, // (active) => emit('change', active),
    }
  },
});
</script>