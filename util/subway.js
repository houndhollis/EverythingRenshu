const $S_INPUT = document.querySelector('.S_input')
const $S_ADD = document.querySelector('.S_add')
const $S_TABLE = document.querySelector('.S_table')

const station = []

const renderStation = () => {
        const newRow = $S_TABLE.insertRow()
        station.forEach((name)=>{
        newRow.innerHTML = `
        <td class='S_delete'>${name}</td>
        <td><button>삭제</button></td>
        `;
    })
}

const addStationName = () => {
    station.push($S_INPUT.value)
    $S_INPUT.value = ''
    renderStation()    
}

const checkStation = () => {
    if(station.includes($S_INPUT.value)){
        $S_INPUT.value = ''
        return alert('역이 중복 되었습니다')
    }
    if(!isNaN(Number($S_INPUT.value))){
        $S_INPUT.value = ''
        return alert('역 이름만 가능합니다')
    }
    if($S_INPUT.value.length <= 1){
        $S_INPUT.value = ''
        return alert('역 이름은 두 글자 이상입니다.')
    }
    addStationName()
}

$S_ADD.addEventListener('click',()=>{
    checkStation()
})

// 아래 부터는 삭제 영역

const deleteStation = (e) => {
    console.log(e.forEach((it)=>console.log(it.innerText)))
}

$S_TABLE.addEventListener('click',(e) => {
    let $stationNAME = document.querySelector('.S_delete')

    console.log($S_TABLE.closest())
    // e.stopPropagation()
    // if(window.confirm('삭제 하시겠습니까?')){
    //     deleteStation($stationNAME)
    // }
})
