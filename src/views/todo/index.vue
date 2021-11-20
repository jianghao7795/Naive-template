<template>
  <div>
    <n-card title="Todo List" style="margin-bottom: 16px">
      <n-tabs :value="tabs" justify-content="space-evenly" type="line" :on-update:value="changeTab" :on-before-leave="beforeChangeTab">
        <n-tab-pane name="oasis" tab="未完成">
          <n-list bordered>
            <template #header>事件 点击 x: {{ x }}, y: {{ y }}</template>
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
        <n-tab-pane name="beatles" tab="已完成">
          <n-list bordered>
            <template #header>事件</template>
            <template #footer v-if="state.finished.length === 0">无TODO事件</template>
            <n-list-item v-for="(item, key) in state.finished" :key="item.content + key">
              <n-thing>
                <template #header>{{ item.content }}</template>
                <template #header-extra>
                  <n-tooltip trigger="hover" placement="left-start">
                    <template #trigger>
                      <n-button circle size="small" @click="() => finishItem(key, 'finished')">
                        <template #icon>
                          <ExitOutline />
                        </template>
                      </n-button>
                    </template>
                    删除Item
                  </n-tooltip>
                </template>
              </n-thing>
            </n-list-item>
          </n-list>
        </n-tab-pane>
        <n-tab-pane name="chou" tab="已删除">
          <n-list bordered>
            <template #header>事件</template>
            <n-list-item v-for="(item, key) in state.deleteItem" :key="item.content + key">
              <n-thing>
                <template #header>{{ item.content }}</template>
                <template #header-extra>
                  <n-tooltip trigger="hover" placement="left-start">
                    <template #trigger>
                      <n-button circle size="small" @click="() => finishItem(key, 'deleteItem')">
                        <template #icon>
                          <ExitOutline />
                        </template>
                      </n-button>
                    </template>
                    恢复Item
                  </n-tooltip>
                </template>
              </n-thing>
            </n-list-item>
          </n-list>
        </n-tab-pane>
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
import { defineComponent, reactive, ref, Ref, onMounted } from 'vue';
import userMousePosition from '@/hooks/userMousePosition';
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
    const tabs = ref<'oasis' | 'beatles' | 'chou'>('oasis');
    const status = ref<boolean>(false);
    const state = reactive<StateType>({
      unfinished: [] as Item[],
      finished: [] as Item[],
      deleteItem: [] as Item[],
    });

    const { x, y } = userMousePosition();

    onMounted(() => {
      inputInstRef.value && inputInstRef.value.focus();
    });

    const finishItem = (index: number, itemKey: 'unfinished' | 'finished' | 'deleteItem') => {
      const items = state[itemKey].filter((_, key) => key !== index);
      const itemFinished = state[itemKey].filter((_, key) => key === index);
      state[itemKey] = items;
      if (itemKey === 'unfinished') {
        state.finished.push(itemFinished[0]);
      }
      if (itemKey === 'finished') {
        state.deleteItem.push(itemFinished[0]);
      }
      if (itemKey === 'deleteItem') {
        state.unfinished.push(itemFinished[0]);
      }
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

    const changeTab = (value: 'oasis' | 'beatles' | 'chou') => {
      console.log(value);
      tabs.value = value;
    };

    const beforeChangeTab = (name: 'oasis' | 'beatles' | 'chou', oldName: 'oasis' | 'beatles' | 'chou'): boolean => {
      console.log(name, oldName);
      return true;
    };

    return {
      x,
      y,
      tabs,
      state,
      item,
      addItem,
      status,
      finishItem,
      message,
      inputInstRef,
      changeTab,
      beforeChangeTab,
    };
  },
});
</script>

<style lang="less" scoped>
@import './src/styles/tabs.less';
</style>
