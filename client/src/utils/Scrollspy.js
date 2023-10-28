const Scrollspy = () => {
  const scrollspy = new window.bootstrap.ScrollSpy(document.body, {
    target: "#navigation",
  });

  return scrollspy;
};

export default Scrollspy;
