const cases = [
 {id:"homeless",name:"Бомжик",price:"0.2 TON",icon:"assets/cases/homeless.png",rewards:[
  ["0.1 TON","assets/rewards/ton-01.png","TON"],["0.2 TON","assets/rewards/ton-02.png","TON"],
  ["Lol Pop","assets/nft/lol-pop.png","NFT"],["B-Day","assets/nft/b-day.png","NFT"],["Spring Basket","assets/nft/spring-basket.png","NFT"]]},
 {id:"starter",name:"Стартер",price:"0.5 TON",icon:"assets/cases/starter.png",rewards:[
  ["0.2 TON","assets/rewards/ton-02.png","TON"],["0.5 TON","assets/rewards/ton-05.png","TON"],
  ["Candy Cane","assets/nft/candy-cane.png","NFT"],["Fortune Cookie","assets/nft/fortune-cookie.png","NFT"],["Winter Mitten","assets/nft/winter-mitten.png","NFT"]]},
 {id:"student",name:"Студент",price:"1 TON",icon:"assets/cases/student.png",rewards:[
  ["0.4 TON","assets/rewards/ton-04.png","TON"],["1 TON","assets/rewards/ton-10.png","TON"],
  ["1.5 TON","assets/rewards/ton-15.png","TON"],["Party Popper","assets/nft/party-popper.png","NFT"],["Gingerbread Man","assets/nft/gingerbread-man.png","NFT"]]},
 {id:"lucky",name:"Фартовый",price:"2.5 TON",icon:"assets/cases/lucky.png",rewards:[
  ["1 TON","assets/rewards/ton-10.png","TON"],["2.5 TON","assets/rewards/ton-25.png","TON"],
  ["4 TON","assets/rewards/ton-40.png","TON"],["Spiced Wine","assets/nft/spiced-wine.png","NFT"],["Teddy Bear","assets/nft/teddy-bear.png","NFT"]]},
 {id:"winter",name:"Зимний",price:"5 TON",icon:"assets/cases/winter.png",rewards:[
  ["2 TON","assets/rewards/ton-20.png","TON"],["5 TON","assets/rewards/ton-50.png","TON"],
  ["8 TON","assets/rewards/ton-80.png","TON"],["Santa Hat","assets/nft/santa-hat.png","NFT"],["Snow Globe","assets/nft/snow-globe.png","NFT"]]},
 {id:"mystic",name:"Мистик",price:"10 TON",icon:"assets/cases/mystic.png",rewards:[
  ["4 TON","assets/rewards/ton-40.png","TON"],["10 TON","assets/rewards/ton-100.png","TON"],
  ["15 TON","assets/rewards/ton-150.png","TON"],["Spooky Pumpkin","assets/nft/spooky-pumpkin.png","NFT"],["Magic Potion","assets/nft/magic-potion.png","NFT"]]},
 {id:"gentleman",name:"Джентльмен",price:"20 TON",icon:"assets/cases/gentleman.png",rewards:[
  ["8 TON","assets/rewards/ton-80.png","TON"],["20 TON","assets/rewards/ton-200.png","TON"],
  ["30 TON","assets/rewards/ton-300.png","TON"],["Top Hat","assets/nft/top-hat.png","NFT"],["Vintage Cigar","assets/nft/vintage-cigar.png","NFT"]]},
 {id:"star",name:"Звездный",price:"35 TON",icon:"assets/cases/star.png",rewards:[
  ["15 TON","assets/rewards/ton-150.png","TON"],["35 TON","assets/rewards/ton-350.png","TON"],
  ["50 TON","assets/rewards/ton-500.png","TON"],["Green Star","assets/nft/green-star.png","NFT"],["Blue Star","assets/nft/blue-star.png","NFT"]]},
 {id:"major",name:"Мажор",price:"60 TON",icon:"assets/cases/major.png",rewards:[
  ["25 TON","assets/rewards/ton-250.png","TON"],["60 TON","assets/rewards/ton-600.png","TON"],
  ["90 TON","assets/rewards/ton-900.png","TON"],["Golden Ring","assets/nft/golden-ring.png","NFT"],["Christmas Tree","assets/nft/christmas-tree.png","NFT"]]},
 {id:"sheikh",name:"Шейх",price:"120 TON",icon:"assets/cases/sheikh.png",rewards:[
  ["50 TON","assets/rewards/ton-500.png","TON"],["120 TON","assets/rewards/ton-1200.png","TON"],
  ["180 TON","assets/rewards/ton-1800.png","TON"],["Golden Dragon","assets/nft/golden-dragon.png","NFT"],["Diamond Ring","assets/nft/diamond-ring.png","NFT"]]}
];

const $=id=>document.getElementById(id);
const casesPage=$("casesPage"),casePage=$("casePage"),grid=$("casesGrid"),rewards=$("rewardsGrid");
let selected=null;

function renderCases(){
 grid.innerHTML="";
 cases.forEach(c=>{
  const el=document.createElement("article");
  el.className="case-card";
  el.innerHTML=`<div class="case-image"><img src="${c.icon}" onerror="this.remove()"></div>
    <div class="case-name">${c.name}</div><div class="case-price">${c.price}</div>
    <button>СМОТРЕТЬ</button>`;
  el.querySelector("button").onclick=()=>openCase(c);
  grid.appendChild(el);
 });
}
function openCase(c){
 selected=c;casesPage.classList.add("hidden");casePage.classList.remove("hidden");
 $("caseName").textContent=c.name;$("casePrice").textContent=`Демо-стоимость: ${c.price}`;
 $("caseIcon").innerHTML=`<img src="${c.icon}" onerror="this.remove()">`;
 $("result").classList.add("hidden");renderRewards(c);
}
function renderRewards(c){
 rewards.innerHTML="";
 c.rewards.forEach(([name,img,type])=>{
  const el=document.createElement("div");el.className="reward";
  el.innerHTML=`<div class="reward-img"><img src="${img}" onerror="this.remove()"></div>
   <b>${name}</b><small>${type}</small>`;rewards.appendChild(el);
 });
}
$("backButton").onclick=()=>{casePage.classList.add("hidden");casesPage.classList.remove("hidden")};
$("openButton").onclick=()=>{
 if(!selected)return;
 const r=selected.rewards[Math.floor(Math.random()*selected.rewards.length)];
 const box=$("result");box.classList.remove("hidden");
 box.innerHTML=`<div>ДЕМО-РЕЗУЛЬТАТ</div><strong>${r[0]}</strong><span>${r[2]}</span>`;
};
renderCases();
