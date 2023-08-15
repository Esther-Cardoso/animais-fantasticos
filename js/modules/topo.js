export default function initTop() {
  const btnTopo = document.querySelector("#back-to-top");
  btnTopo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}