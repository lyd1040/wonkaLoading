const loadingWrap = document.querySelector('.loadingWrap');
let $countInterval;
let $count = 0; 

// 태그 만들기
const createElementFunc = () => {
    const aniArr = [5,4,6,3,7,2,8,1,9,0]
    for(let x=0; x<aniArr.length; x++){
        const loadBarTag = document.createElement('div');
        loadBarTag.setAttribute('class','loadGrid');
        loadBarTag.setAttribute('style',` clip-path: polygon(${aniArr[x]*9.9}% 0, ${10+aniArr[x]*9.99}% 0, ${10+aniArr[x]*9.99}% 100%, ${aniArr[x]*9.9}% 100%); background-position:center`);

        loadingWrap.appendChild(loadBarTag);

        setTimeout(()=>{
            loadBarTag.classList.add('active');
        },600 + x * 100);

        setTimeout(()=>{
            loadBarTag.classList.remove('active');
        },8000 + x * 100)
     }
     setTimeout(()=>{
        changeLoadingImg(loadingWrap);
        setTimeout(()=>{
            clearInterval($countInterval);
        },5000)
    },3000)
} 
createElementFunc();

// 이미지 변환
const changeLoadingImg = (chBgElement) => {
    $countInterval = setInterval(()=>{
        $count++;
        if($count > 3){
            $count = 0;
        }
        for(let x=1; x<chBgElement.childNodes.length; x++){
            chBgElement.childNodes[x].style.background = `#2e2e2e url('./Loading${$count}.png') no-repeat center`
        }
    },500);
}