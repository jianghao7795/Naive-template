import { onBeforeMount, onMounted, ref } from 'vue';

const UserMousePosition = () => {
  const x = ref<number>(-1);
  const y = ref<number>(-1);

  const clickHandler = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };
  onMounted(() => {
    window.addEventListener('click', clickHandler);
  });
  onBeforeMount(() => {
    window.removeEventListener('click', clickHandler);
  });

  return { x, y };
};

export default UserMousePosition;
