function debounce(func: any, wait?: number) {
  let timer: any = null;
  return () => {
      clearTimeout(timer);
      timer = setTimeout(func, wait);
  };
}

export default debounce;