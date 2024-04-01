<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';

const list = ref<Array<{
  picture: {
    large: string;
  },
  name: {
    last: string;
  },
  loading: boolean;
}>>([]);
const initLoading = ref(true);
const loading = ref(false);
const data = ref([]);

const count = 50;

const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

function getList() {
  return new Promise((resolve) => {
    fetch(fakeDataUrl).then((res) => res.json()).then(res => resolve(res.results));
  });
};

onMounted(() => {
  getList().then((l: any) => {
    initLoading.value = false;
    list.value = l;
  });
});

const onLoadMore = () => {
  loading.value = true;
  list.value = data.value.concat(
    [...new Array(count)].map(() => ({
      loading: true,
      name: {},
      picture: {},
    })),
  );
  fetch(fakeDataUrl)
    .then(res => res.json())
    .then(res => {
      const newData = data.value.concat(res.results);
      loading.value = false;
      data.value = newData;
      list.value = newData;
      nextTick(() => {
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
    });
};

</script>

<template>
  <a-list
    class="demo-loadmore-list"
    :loading="initLoading"
    item-layout="horizontal"
    :data-source="list"
  >
    <template #loadMore>
      <div
        v-if="!initLoading && !loading"
        :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
      >
        <a-button @click="onLoadMore">loading more</a-button>
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a key="list-loadmore-edit">edit</a>
          <a key="list-loadmore-more">more</a>
        </template>
        <a-skeleton avatar :title="false" :loading="!!item.loading" active>
          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <template #title>
              <a href="https://www.antdv.com/">{{ item.name.last }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.picture.large" />
            </template>
          </a-list-item-meta>
          <div>content</div>
        </a-skeleton>
      </a-list-item>
    </template>
  </a-list>
</template>

<style scoped>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
