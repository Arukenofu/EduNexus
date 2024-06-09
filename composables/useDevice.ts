export default function() {
  const isMobile = ref<boolean>(false);

  function checkDevice() {
    const isWindow = window.innerWidth <= 768;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;

    isMobile.value = !!(isTouchDevice && isWindow);
  }

  onMounted(() => {
    checkDevice();
    window.addEventListener('resize', checkDevice);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkDevice);
  });

  return isMobile;

}