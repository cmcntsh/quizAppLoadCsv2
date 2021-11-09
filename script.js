//const chooseLoad = document.querySelector('#menu-load');
// const chooseSetup = document.querySelector('#menu-setup').addEventListener('click', displaySetup);
// const chooseStart = document.querySelector('#menu-start').addEventListener('click', displayStart);
// const chooseStats = document.querySelector('#menu-stats').addEventListener('click', displayStats);
// const cardLoad = document.querySelector('#card-load');
// const cardSetup = document.querySelector('#card-setup');
// const cardStart = document.querySelector('#card-start');
// const cardStats = document.querySelector('#card-stats');

//document.querySelector('#menu_load').addEventListener("click", function(){ alert("Hello World!"); }, false);

document.querySelector('#menu_load').addEventListener("click", displayLoad);
document.querySelector('#menu-setup').addEventListener("click", displaySetup);
document.querySelector('#menu-start').addEventListener("click", displayStart);
document.querySelector('#menu-stats').addEventListener("click", displayStats);

function displayLoad() {
  document.querySelector('#card-load').style.zIndex = '100';
  document.querySelector('#card-setup').style.zIndex = '1';
  document.querySelector('#card-start').style.zIndex = '1';
  document.querySelector('#card-stats').style.zIndex = '1';
  
}

function displaySetup() {
  document.querySelector('#card-load').style.zIndex = '1';
  document.querySelector('#card-setup').style.zIndex = '100';
  document.querySelector('#card-start').style.zIndex = '1';
  document.querySelector('#card-stats').style.zIndex = '1';
  
}

function displayStart() {
  document.querySelector('#card-load').style.zIndex = '1';
  document.querySelector('#card-setup').style.zIndex = '1';
  document.querySelector('#card-start').style.zIndex = '100';
  document.querySelector('#card-stats').style.zIndex = '1';
  
}

function displayStats() {
  document.querySelector('#card-load').style.zIndex = '1';
  document.querySelector('#card-setup').style.zIndex = '1';
  document.querySelector('#card-start').style.zIndex = '1';
  document.querySelector('#card-stats').style.zIndex = '100';
  
}

//document.getElementById("btn").addEventListener("click", function(){ alert("clicked");});

let questionsArr = [];
let uploadObj = [];
const uploadConfirm = document.querySelector('#uploadConfirm').addEventListener('click', () => {
    Papa.parse(document.querySelector('#uploadFile').files[0], {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
            //console.log(results);
            uploadObj = results;
            console.log(uploadObj);
            console.log(results.data);
            localStorage.setItem("questions",JSON.stringify(results.data));
            console.log(JSON.parse(localStorage.getItem("questions")));
            // for (i=0; i < results.data.length; i++) {
            //     questionsArr.push(results.data[i]);
            // }
            // console.log(questionsArr);
            
        }
        
    }); 
    
});

const logButton = document.querySelector('#logVar').addEventListener('click', makeLog);


function makeLog() {
    //console.log(questionsArr);
    //console.log(typeof questionsArr);
    //console.log(questionsArr);
    //console.log(questionsArr[8]);

    // console.log(uploadObj.meta.fields);
    // console.log(Object.keys(uploadObj.data[0]));

    console.log(JSON.parse(localStorage.getItem("questions")));
}

const exportButton = document.querySelector('#exportQuestions').addEventListener('click', exportQuestions);


function exportQuestions() {
    //console.log(questionsArr);
    //console.log(typeof questionsArr);
    //console.log(questionsArr);
    //console.log(questionsArr[8]);

    // console.log(uploadObj.meta.fields);
    // console.log(Object.keys(uploadObj.data[0]));

    //console.log(JSON.parse(localStorage.getItem("questions")));
    let csv = Papa.unparse(JSON.parse(localStorage.getItem("questions")));
    //console.log(csv);
    var csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
    var csvURL =  null;
    if (navigator.msSaveBlob) {
        csvURL = navigator.msSaveBlob(csvData, 'download.csv');
    } else {
        csvURL = window.URL.createObjectURL(csvData);
    }
    var tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'download.csv');
    tempLink.click();
}
