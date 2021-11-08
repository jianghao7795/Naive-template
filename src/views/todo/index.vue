<template>
  <div>
    <n-card title="歌曲" style="margin-bottom: 16px">
      <n-tabs default-value="oasis" justify-content="space-evenly" type="line">
        <n-tab-pane name="oasis" tab="未完成">
          <n-list bordered></n-list>
        </n-tab-pane>
        <n-tab-pane name="the beatles" tab="已完成">Hey Jude</n-tab-pane>
        <n-tab-pane name="jay chou" tab="已删除">七里香</n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script lang="ts">
type PropsType = {};
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { NCard, NTabs, NTabPane, NList, NListItem } from 'naive-ui';

export default defineComponent<PropsType>({
  name: 'todo',
  components: {
    NCard,
    NTabs,
    NTabPane,
    NList,
    NListItem,
  },
  setup(props) {
    console.log(props);
    console.log(useRoute().matched);
    return {};
  },
});
</script>

<style lang="less" scoped></style>
