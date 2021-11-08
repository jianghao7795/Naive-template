<template>
  <div>
    <n-card title="Todo List" style="margin-bottom: 16px">
      <n-tabs default-value="oasis" justify-content="space-evenly" type="line">
        <n-tab-pane name="oasis" tab="未完成">
          <n-list bordered>
            <template #header>事件</template>
            <template #footer v-if="state.unfinished.length === 0">无TODO事件</template>
            <n-list-item v-for="(item, key) in state.unfinished" :key="item.content + key">
              <n-thing>
                <template #header>{{ item.content }}</template>
                <template #header-extra>
                  <n-tooltip trigger="hover" placement="left-start">
                    <template #trigger>
                      <n-button circle size="small" @click="() => finishItem(key, 'unfinished')">
                        <template #icon>
                          <ExitOutline />
                        </template>
                      </n-button>
                    </template>
                    完成Item
                  </n-tooltip>
                </template>
              </n-thing>
            </n-list-item>
          </n-list>
          <p style="text-align: center">
            <n-input-group>
              <n-input ref="inputInstRef" placeholder="请输入" v-model:value="item"></n-input>
              <n-button type="primary" @click="addItem" :loading="status">增加TODO</n-button>
            </n-input-group>
          </p>
        </n-tab-pane>
        <n-tab-pane name="the beatles" tab="已完成">Hey Jude</n-tab-pane>
        <n-tab-pane name="jay chou" tab="已删除">七里香</n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script lang="ts">
type PropsType = {};

type Item = {
  content: string;
  finish: 0 | 1;
  isDelete: 0 | 1;
};

type StateType = {
  unfinished: Item[];
  finished: Item[];
  deleteItem: Item[];
};
import { defineComponent, reactive, ref, Ref } from 'vue';
// import { useRoute } from 'vue-router';
import { NCard, NTabs, NTabPane, NList, NListItem, NThing, NInput, NInputGroup, NButton, NTooltip, useMessage } from 'naive-ui';
import { ExitOutline } from '@vicons/ionicons5';

export default defineComponent<PropsType>({
  name: 'todo',
  components: {
    NCard,
    NTabs,
    NTabPane,
    NList,
    NListItem,
    NThing,
    NInput,
    NInputGroup,
    NButton,
    ExitOutline,
    NTooltip,
  },
  setup() {
    const message = useMessage();
    const item = ref<string>('');
    const inputInstRef: Ref<HTMLInputElement | null> = ref(null);
    const status = ref<boolean>(false);
    const state = reactive<StateType>({
      unfinished: [] as Item[],
      finished: [] as Item[],
      deleteItem: [] as Item[],
    });

    const finishItem = (index: number, itemKey: 'unfinished' | 'finished' | 'deleteItem') => {
      const items = state[itemKey].filter((_, key) => key !== index);

      state[itemKey] = items;
    };

    const addItem = () => {
      if (item.value === '') {
        message.warning('请输入');
        return;
      }
      status.value = true;
      state.unfinished.push({ content: item.value, finish: 0, isDelete: 0 });
      setTimeout(() => {
        status.value = false;
        item.value = '';
        inputInstRef.value?.focus();
        // console.log(inputItem);
      }, 500);
    };

    return {
      state,
      item,
      addItem,
      status,
      finishItem,
      message,
      inputInstRef,
    };
  },
});
</script>

<style lang="less" scoped></style>
