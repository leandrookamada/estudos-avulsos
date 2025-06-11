// const paragrafos = paragrafos.Queryselectorall(".main_section_article_p");
const paragrafos = document.querySelectorAll(".main_section_article_p");

const bodyStyles = getComputedStyle(document.body);
const fundoStyle = bodyStyles.backgroundColor;

const mainStyle = getComputedStyle(document.querySelector(".main_section"));
const fundoMain = mainStyle.backgroundColor;

// console.log(fundoStyle);

for (let p of paragrafos) {
  p.style.backgroundColor = fundoStyle;
  p.style.color = fundoMain;
  p.style.borderRadius = "10px";
  p.style.margin = "1em";
  p.style.textTransform = "uppercase";
  p.style.fontSize = ".825rem";
}
