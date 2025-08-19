let cnt = 0;
document.getElementById("clk").addEventListener("click", function () {
  const counttag = document.getElementById("increase");

  function increValue(val) {
    for (let i = 0; i < val; i++) {
      cnt++;
    }
    return cnt;
  }

  const res = increValue(1);

  const ans = (counttag.innerText = "Increase Value : " + res);
  if (ans === 8) {
    alert("Your Number High", ans);
  }

  //   console.log(res);
});
