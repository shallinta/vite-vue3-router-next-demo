<template>
  <td class="table-cell">{{ production.name }}</td>
  <td class="table-cell max-width text-small">{{ production.description }}</td>
  <td class="table-cell">
    <i v-if="production.offcial" class="material-icons teal-text text-accent-4">fiber_manual_record</i>
    <i v-else class="material-icons icon pink-text text-accent-4">fiber_manual_record</i>
  </td>
  <td class="table-cell">
    <span v-if="!detail.comments">
      <i class="material-icons icon infinite-rotate orange-text text-accent-2">track_changes</i>
    </span>
    <span v-else class="text-small">{{ startTime }}</span>
    <span v-if="comments.length > 0" :class="`comments comments-${detail.result}`">
      <span
        v-for="comment of comments"
        :key="comment.text"
        :class="{ 'comment-item tooltipped': true, 'comment-good': comment.good, 'comment-bad': !comment.good }"
        :title="comment.text"
      />
    </span>
  </td>
  <td class="table-cell">
    {{ duration }}
  </td>
  <td class="table-cell">
    <a class="waves-effect waves-light btn-small btn-tiny" @click="update">
      <span class="icon-btn-text">Update</span>
      <i class="material-icons icon tiny">send</i>
    </a>
  </td>
</template>

<script>
import { defineComponent, inject, computed } from 'vue';
import { useState, useEffect } from '../../common/utils/useHooks';
import { format, formatDistance } from '../../common/utils/date';
import delay from '../../common/utils/delay';

export default defineComponent({
  name: 'ListItem',
  props: {
    data: Object,
  },
  setup(props) {
    const { productsService } = inject('services');
    const [detail, setDetail] = useState({});
    const [refreshing, refresh] = useState(Date.now());
    useEffect(async ([{ name }, _]) => {
      console.log('test useEffect', name);
      const detailData = await productsService.getDetail({ name });
      setDetail(detailData);
    }, [() => props.data, refreshing]);
    return {
      production: computed(() => props.data),
      detail,
      startTime: computed(() => detail.startTime ? format(detail.startTime, 'M月d日 HH:mm') : '-'),
      duration: computed(() => detail.stopTime ? formatDistance(detail.stopTime, detail.startTime) : '-'),
      comments: computed(() => {
        const comments = detail.comments ? JSON.parse(detail.comments) : {};
        return Object.entries(comments).map(([key, value]) => ({ name: key, good: value === 'good'})).sort((_, n) => n.good ? 1 : -1);
      }),
      update: async () => {
        setDetail({ ...detail, comments: undefined });
        await productsService.update(detail.name);
        // refresh(Date.now());
        await delay(3000);
        refresh(Date.now());
      },
    };
  },
});
</script>

<style scoped>
.table-cell {
  padding: 10px;
  font-size: 1rem;
  word-break: break-all;
}

.max-width {
  max-width: 300px;
}

.text-small {
  font-size: 13px;
}

.btn-tiny {
  font-size: 8px;
  height: 28px;
  line-height: 28px;
  word-break: keep-all;
}

.icon-btn-text {
  vertical-align: top;
  margin-right: 10px;
}

.comments {
  display: flex;
  width: 100%;
  height: 16px;
  border: 1px solid #fff;
  border-radius: 3px;
}

.comments-good {
  border-color: #00e676;
}

.comments-bad {
  border-color: #ff5252; /* #ff3d00 */
}

.comment-item {
  flex: 1;
  height: 12px;
  margin: 1px;
  border-radius: 3px;
  background: #fff;
}

.comment-good {
  background: #00e676;
}

.comment-bad {
  background: #ff5252;
}

.infinite-rotate {
  animation: infinite-rotate 2s linear infinite;
  font-size: 1.5rem;
}

@keyframes infinite-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>