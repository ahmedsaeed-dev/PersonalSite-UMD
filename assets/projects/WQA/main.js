// START MODAL SCRIPT -----------------------------------------

// Get modal element
var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalImage');

// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside Click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display='block';
}

// Function to close modal
function closeModal(){
  modal.style.display='none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal)
    modal.style.display='none';
}

// END MODAL SCRIPT -----------------------------------------

// START RESULTS SCRIPT -----------------------------------------

// Get print button
var printBtn = document.getElementById('print-button');

// Listen for print Click
var printPath = window.location.pathname;
var printPath = printPath.substring(printPath.lastIndexOf('/') + 1);
if(printPath == "results.html"){
  printBtn.addEventListener('click', printPage);
}


// print page
function printPage(){
  window.print();
}

// END RESULTS SCRIPT -----------------------------------------

// PRE-ASSESSMENT START -------------------------------------------------------

// check for correct page
var preassPath = window.location.pathname;
var preassPath = preassPath.substring(preassPath.lastIndexOf('/') + 1);
if(preassPath == "pre-assessment.html"){
  (function (global) { // SAVES CLIENT NAME, EMAIL, AND URL TO SESSION

    // clear local storage for new assessment
    sessionStorage.clear();


      document.getElementById("start-button").addEventListener("click", function () {
          global.sessionStorage.setItem("clientName", document.getElementById("clientName").value);
          global.sessionStorage.setItem("clientEmail", document.getElementById("clientEmail").value);
          global.sessionStorage.setItem("clientURL", document.getElementById("clientURL").value);
      }, false);
  }(window));
}

// PRE-ASSESSMENT END -------------------------------------------------------

// CATEGORY 01 START -------------------------------------------------------

// check for correct page
var cat01Path = window.location.pathname;
var cat01Path = cat01Path.substring(cat01Path.lastIndexOf('/') + 1);
if(cat01Path == "category-01.html"){
  (function (global) { // CATEGORY 1 INFO TO SESSION
      document.getElementById("next-button").addEventListener("click", function () {
          //global.sessionStorage.setItem("clientName", document.getElementById("clientName").value);


          // QUESTION 1
          var cat1_1 = document.getElementsByName('CAT01_01');
          var value;
          for(var i = 0; i < cat1_1.length; i++){
              if(cat1_1[i].checked){
                  value = cat1_1[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat01_01", value);

          // QUESTION 2
          var cat1_2 = document.getElementsByName('CAT01_02');
          var value;
          for(var i = 0; i < cat1_2.length; i++){
              if(cat1_2[i].checked){
                  value = cat1_2[i].value;
                  break;
              }
          }
          global.sessionStorage.setItem("cat01_02", value);

          // QUESTION 3
          var cat1_3 = document.getElementsByName('CAT01_03');
          var value;
          for(var i = 0; i < cat1_3.length; i++){
              if(cat1_3[i].checked){
                  value = cat1_3[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat01_03", value);

          // QUESTION 4
          var cat1_4 = document.getElementsByName('CAT01_04');
          var value;
          for(var i = 0; i < cat1_4.length; i++){
              if(cat1_4[i].checked){
                  value = cat1_4[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat01_04", value);

          // QUESTION 5
          var cat1_5 = document.getElementsByName('CAT01_05');
          var value;
          for(var i = 0; i < cat1_5.length; i++){
              if(cat1_5[i].checked){
                  value = cat1_5[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat01_05", value);

          // QUESTION 6
          var cat1_6 = document.getElementsByName('CAT01_06');
          var value;
          for(var i = 0; i < cat1_6.length; i++){
              if(cat1_6[i].checked){
                  value = cat1_6[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat01_06", value);

          // QUESTION 7
          var cat1_7 = document.getElementsByName('CAT01_07');
          var value;
          for(var i = 0; i < cat1_7.length; i++){
              if(cat1_7[i].checked){
                  value = cat1_7[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat01_07", value);

          // QUESTION 8
          var cat1_8 = document.getElementsByName('CAT01_08');
          var value;
          for(var i = 0; i < cat1_8.length; i++){
              if(cat1_8[i].checked){
                  value = cat1_8[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat01_08", value);

          // QUESTION 9
          var cat1_9 = document.getElementsByName('CAT01_09');
          var value;
          for(var i = 0; i < cat1_9.length; i++){
              if(cat1_9[i].checked){
                  value = cat1_9[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat01_09", value);

          // QUESTION 10
          var cat1_10 = document.getElementsByName('CAT01_10');
          var value;
          for(var i = 0; i < cat1_10.length; i++){
              if(cat1_10[i].checked){
                  value = cat1_10[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat01_10", value);


      }, false);
  }(window));
}

// CATEGORY 01 END -------------------------------------------------------

// CATEGORY 02 START -------------------------------------------------------

// check for correct page
var cat02Path = window.location.pathname;
var cat02Path = cat02Path.substring(cat02Path.lastIndexOf('/') + 1);
if(cat02Path == "category-02.html"){
  (function (global) { // CATEGORY 2 INFO TO SESSION
      document.getElementById("next-button").addEventListener("click", function () {
          //global.sessionStorage.setItem("clientName", document.getElementById("clientName").value);


          // QUESTION 1
          var cat2_1 = document.getElementsByName('CAT02_01');
          var value;
          for(var i = 0; i < cat2_1.length; i++){
              if(cat2_1[i].checked){
                  value = cat2_1[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat02_01", value);

          // QUESTION 2
          var cat2_2 = document.getElementsByName('CAT02_02');
          var value;
          for(var i = 0; i < cat2_2.length; i++){
              if(cat2_2[i].checked){
                  value = cat2_2[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat02_02", value);

          // QUESTION 3
          var cat2_3 = document.getElementsByName('CAT02_03');
          var value;
          for(var i = 0; i < cat2_3.length; i++){
              if(cat2_3[i].checked){
                  value = cat2_3[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat02_03", value);

          // QUESTION 4
          var cat2_4 = document.getElementsByName('CAT02_04');
          var value;
          for(var i = 0; i < cat2_4.length; i++){
              if(cat2_4[i].checked){
                  value = cat2_4[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat02_04", value);

          // QUESTION 5
          var cat2_5 = document.getElementsByName('CAT02_05');
          var value;
          for(var i = 0; i < cat2_5.length; i++){
              if(cat2_5[i].checked){
                  value = cat2_5[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat02_05", value);

          // QUESTION 6
          var cat2_6 = document.getElementsByName('CAT02_06');
          var value;
          for(var i = 0; i < cat2_6.length; i++){
              if(cat2_6[i].checked){
                  value = cat2_6[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat02_06", value);

          // QUESTION 7
          var cat2_7 = document.getElementsByName('CAT02_07');
          var value;
          for(var i = 0; i < cat2_7.length; i++){
              if(cat2_7[i].checked){
                  value = cat2_7[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat02_07", value);

          // QUESTION 8
          var cat2_8 = document.getElementsByName('CAT02_08');
          var value;
          for(var i = 0; i < cat2_8.length; i++){
              if(cat2_8[i].checked){
                  value = cat2_8[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat02_08", value);

          // QUESTION 9
          var cat2_9 = document.getElementsByName('CAT02_09');
          var value;
          for(var i = 0; i < cat2_9.length; i++){
              if(cat2_9[i].checked){
                  value = cat2_9[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat02_09", value);

          // QUESTION 10
          var cat2_10 = document.getElementsByName('CAT02_10');
          var value;
          for(var i = 0; i < cat2_10.length; i++){
              if(cat2_10[i].checked){
                  value = cat2_10[i].value; break;
              }
          }
          global.sessionStorage.setItem("cat02_10", value);


      }, false);
  }(window));
}

// CATEGORY 02 END -------------------------------------------------------

// CATEGORY 03 START -------------------------------------------------------

// check for correct page
var cat03Path = window.location.pathname;
var cat03Path = cat03Path.substring(cat03Path.lastIndexOf('/') + 1);
if(cat03Path == "category-03.html"){
  (function (global) { // CATEGORY 2 INFO TO SESSION
      document.getElementById("next-button").addEventListener("click", function () {
          //global.sessionStorage.setItem("clientName", document.getElementById("clientName").value);


          // QUESTION 1
          var cat3_1 = document.getElementsByName('CAT03_01');
          var value;
          for(var i = 0; i < cat3_1.length; i++){
              if(cat3_1[i].checked){
                  value = cat3_1[i].value;
              }
          }
          global.sessionStorage.setItem("cat03_01", value);

          // QUESTION 2
          var cat3_2 = document.getElementsByName('CAT03_02');
          var value;
          for(var i = 0; i < cat3_2.length; i++){
              if(cat3_2[i].checked){
                  value = cat3_2[i].value;
              }
          }
          global.sessionStorage.setItem("cat03_02", value);

          // QUESTION 3
          var cat3_3 = document.getElementsByName('CAT03_03');
          var value;
          for(var i = 0; i < cat3_3.length; i++){
              if(cat3_3[i].checked){
                  value = cat3_3[i].value;
              }
          }
          global.sessionStorage.setItem("cat03_03", value);

          // QUESTION 4
          var cat3_4 = document.getElementsByName('CAT03_04');
          var value;
          for(var i = 0; i < cat3_4.length; i++){
              if(cat3_4[i].checked){
                  value = cat3_4[i].value;
              }
          }
          global.sessionStorage.setItem("cat03_04", value);

          // QUESTION 5
          var cat3_5 = document.getElementsByName('CAT03_05');
          var value;
          for(var i = 0; i < cat3_5.length; i++){
              if(cat3_5[i].checked){
                  value = cat3_5[i].value;
              }
          }
          global.sessionStorage.setItem("cat03_05", value);

          // QUESTION 6
          var cat3_6 = document.getElementsByName('CAT03_06');
          var value;
          for(var i = 0; i < cat3_6.length; i++){
              if(cat3_6[i].checked){
                  value = cat3_6[i].value;
              }
          }
          global.sessionStorage.setItem("cat03_06", value);

          // QUESTION 7
          var cat3_7 = document.getElementsByName('CAT03_07');
          var value;
          for(var i = 0; i < cat3_7.length; i++){
              if(cat3_7[i].checked){
                  value = cat3_7[i].value;
              }
          }
          global.sessionStorage.setItem("cat03_07", value);

          // QUESTION 8
          var cat3_8 = document.getElementsByName('CAT03_08');
          var value;
          for(var i = 0; i < cat3_8.length; i++){
              if(cat3_8[i].checked){
                  value = cat3_8[i].value;
              }
          }
          global.sessionStorage.setItem("cat03_08", value);

          // QUESTION 9
          var cat3_9 = document.getElementsByName('CAT03_09');
          var value;
          for(var i = 0; i < cat3_9.length; i++){
              if(cat3_9[i].checked){
                  value = cat3_9[i].value;
              }
          }
          global.sessionStorage.setItem("cat03_09", value);

          // QUESTION 10
          var cat3_10 = document.getElementsByName('CAT03_10');
          var value;
          for(var i = 0; i < cat3_10.length; i++){
              if(cat3_10[i].checked){
                  value = cat3_10[i].value;
              }
          }
          global.sessionStorage.setItem("cat03_10", value);


      }, false);
  }(window));
}

// CATEGORY 03 END -------------------------------------------------------

// CATEGORY 04 START -------------------------------------------------------

// check for correct page
var cat04Path = window.location.pathname;
var cat04Path = cat04Path.substring(cat04Path.lastIndexOf('/') + 1);
if(cat04Path == "category-04.html"){
  (function (global) { // CATEGORY 2 INFO TO SESSION
      document.getElementById("next-button").addEventListener("click", function () {
          //global.sessionStorage.setItem("clientName", document.getElementById("clientName").value);


          // QUESTION 1
          var cat4_1 = document.getElementsByName('CAT04_01');
          var value;
          for(var i = 0; i < cat4_1.length; i++){
              if(cat4_1[i].checked){
                  value = cat4_1[i].value;
              }
          }
          global.sessionStorage.setItem("cat04_01", value);

          // QUESTION 2
          var cat4_2 = document.getElementsByName('CAT04_02');
          var value;
          for(var i = 0; i < cat4_2.length; i++){
              if(cat4_2[i].checked){
                  value = cat4_2[i].value;
              }
          }
          global.sessionStorage.setItem("cat04_02", value);

          // QUESTION 3
          var cat4_3 = document.getElementsByName('CAT04_03');
          var value;
          for(var i = 0; i < cat4_3.length; i++){
              if(cat4_3[i].checked){
                  value = cat4_3[i].value;
              }
          }
          global.sessionStorage.setItem("cat04_03", value);

          // QUESTION 4
          var cat4_4 = document.getElementsByName('CAT04_04');
          var value;
          for(var i = 0; i < cat4_4.length; i++){
              if(cat4_4[i].checked){
                  value = cat4_4[i].value;
              }
          }
          global.sessionStorage.setItem("cat04_04", value);

          // QUESTION 5
          var cat4_5 = document.getElementsByName('CAT04_05');
          var value;
          for(var i = 0; i < cat4_5.length; i++){
              if(cat4_5[i].checked){
                  value = cat4_5[i].value;
              }
          }
          global.sessionStorage.setItem("cat04_05", value);

          // QUESTION 6
          var cat4_6 = document.getElementsByName('CAT04_06');
          var value;
          for(var i = 0; i < cat4_6.length; i++){
              if(cat4_6[i].checked){
                  value = cat4_6[i].value;
              }
          }
          global.sessionStorage.setItem("cat04_06", value);

          // QUESTION 7
          var cat4_7 = document.getElementsByName('CAT04_07');
          var value;
          for(var i = 0; i < cat4_7.length; i++){
              if(cat4_7[i].checked){
                  value = cat4_7[i].value;
              }
          }
          global.sessionStorage.setItem("cat04_07", value);

          // QUESTION 8
          var cat4_8 = document.getElementsByName('CAT04_08');
          var value;
          for(var i = 0; i < cat4_8.length; i++){
              if(cat4_8[i].checked){
                  value = cat4_8[i].value;
              }
          }
          global.sessionStorage.setItem("cat04_08", value);

          // QUESTION 9
          var cat4_9 = document.getElementsByName('CAT04_09');
          var value;
          for(var i = 0; i < cat4_9.length; i++){
              if(cat4_9[i].checked){
                  value = cat4_9[i].value;
              }
          }
          global.sessionStorage.setItem("cat04_09", value);

          // QUESTION 10
          var cat4_10 = document.getElementsByName('CAT04_10');
          var value;
          for(var i = 0; i < cat4_10.length; i++){
              if(cat4_10[i].checked){
                  value = cat4_10[i].value;
              }
          }
          global.sessionStorage.setItem("cat04_10", value);


      }, false);
  }(window));
}

// CATEGORY 04 END -------------------------------------------------------

// CATEGORY 05 START -------------------------------------------------------

// check for correct page
var cat05Path = window.location.pathname;
var cat05Path = cat05Path.substring(cat05Path.lastIndexOf('/') + 1);
if(cat05Path == "category-05.html"){
  (function (global) { // CATEGORY 5 INFO TO SESSION
      document.getElementById("next-button").addEventListener("click", function () {
          //global.sessionStorage.setItem("clientName", document.getElementById("clientName").value);


          // QUESTION 1
          var cat5_1 = document.getElementsByName('CAT05_01');
          var value;
          for(var i = 0; i < cat5_1.length; i++){
              if(cat5_1[i].checked){
                  value = cat5_1[i].value;
              }
          }
          global.sessionStorage.setItem("cat05_01", value);

          // QUESTION 2
          var cat5_2 = document.getElementsByName('CAT05_02');
          var value;
          for(var i = 0; i < cat5_2.length; i++){
              if(cat5_2[i].checked){
                  value = cat5_2[i].value;
              }
          }
          global.sessionStorage.setItem("cat05_02", value);

          // QUESTION 3
          var cat5_3 = document.getElementsByName('CAT05_03');
          var value;
          for(var i = 0; i < cat5_3.length; i++){
              if(cat5_3[i].checked){
                  value = cat5_3[i].value;
              }
          }
          global.sessionStorage.setItem("cat05_03", value);

          // QUESTION 4
          var cat5_4 = document.getElementsByName('CAT05_04');
          var value;
          for(var i = 0; i < cat5_4.length; i++){
              if(cat5_4[i].checked){
                  value = cat5_4[i].value;
              }
          }
          global.sessionStorage.setItem("cat05_04", value);

          // QUESTION 5
          var cat5_5 = document.getElementsByName('CAT05_05');
          var value;
          for(var i = 0; i < cat5_5.length; i++){
              if(cat5_5[i].checked){
                  value = cat5_5[i].value;
              }
          }
          global.sessionStorage.setItem("cat05_05", value);

          // QUESTION 6
          var cat5_6 = document.getElementsByName('CAT05_06');
          var value;
          for(var i = 0; i < cat5_6.length; i++){
              if(cat5_6[i].checked){
                  value = cat5_6[i].value;
              }
          }
          global.sessionStorage.setItem("cat05_06", value);

          // QUESTION 7
          var cat5_7 = document.getElementsByName('CAT05_07');
          var value;
          for(var i = 0; i < cat5_7.length; i++){
              if(cat5_7[i].checked){
                  value = cat5_7[i].value;
              }
          }
          global.sessionStorage.setItem("cat05_07", value);

          // QUESTION 8
          var cat5_8 = document.getElementsByName('CAT05_08');
          var value;
          for(var i = 0; i < cat5_8.length; i++){
              if(cat5_8[i].checked){
                  value = cat5_8[i].value;
              }
          }
          global.sessionStorage.setItem("cat05_08", value);

          // QUESTION 9
          var cat5_9 = document.getElementsByName('CAT05_09');
          var value;
          for(var i = 0; i < cat5_9.length; i++){
              if(cat5_9[i].checked){
                  value = cat5_9[i].value;
              }
          }
          global.sessionStorage.setItem("cat05_09", value);

          // QUESTION 10
          var cat5_10 = document.getElementsByName('CAT05_10');
          var value;
          for(var i = 0; i < cat5_10.length; i++){
              if(cat5_10[i].checked){
                  value = cat5_10[i].value;
              }
          }
          global.sessionStorage.setItem("cat05_10", value);


      }, false);
  }(window));
}

// CATEGORY 05 END -------------------------------------------------------

// CONFIRMATION PAGE START -----------------------------------------------
var confPath = window.location.pathname;
var confPath = confPath.substring(confPath.lastIndexOf('/') + 1);
if(confPath == "confirm.html"){
  (function (global) { // SAVES CLIENT NAME, EMAIL, AND URL TO SESSION
    var temp; var value;

      // BEGIN PUSH CATEGORY 01 - - - - - - - - - - - - - - - - - - - -

        // BEGIN QUESTION 01
        value = sessionStorage.getItem('cat01_01');
        temp = document.getElementsByName('CAT01_01');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 02
        value = sessionStorage.getItem('cat01_02');
        temp = document.getElementsByName('CAT01_02');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 03
        value = sessionStorage.getItem('cat01_03');
        temp = document.getElementsByName('CAT01_03');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 04
        value = sessionStorage.getItem('cat01_04');
        temp = document.getElementsByName('CAT01_04');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 05
        value = sessionStorage.getItem('cat01_05');
        temp = document.getElementsByName('CAT01_05');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 06
        value = sessionStorage.getItem('cat01_06');
        temp = document.getElementsByName('CAT01_06');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 07
        value = sessionStorage.getItem('cat01_07');
        temp = document.getElementsByName('CAT01_07');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 08
        value = sessionStorage.getItem('cat01_08');
        temp = document.getElementsByName('CAT01_08');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 09
        value = sessionStorage.getItem('cat01_09');
        temp = document.getElementsByName('CAT01_09');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 10
        value = sessionStorage.getItem('cat01_10');
        temp = document.getElementsByName('CAT01_10');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN PUSH CATEGORY 02 - - - - - - - - - - - - - - - - - - - -

          // BEGIN QUESTION 01
          value = sessionStorage.getItem('cat02_01');
          temp = document.getElementsByName('CAT02_01');
          if (value != 'X')
            temp[value - 1].checked = true;

          // BEGIN QUESTION 02
          value = sessionStorage.getItem('cat02_02');
          temp = document.getElementsByName('CAT02_02');
          if (value != 'X')
            temp[value - 1].checked = true;

          // BEGIN QUESTION 03
          value = sessionStorage.getItem('cat02_03');
          temp = document.getElementsByName('CAT02_03');
          if (value != 'X')
            temp[value - 1].checked = true;

          // BEGIN QUESTION 04
          value = sessionStorage.getItem('cat02_04');
          temp = document.getElementsByName('CAT02_04');
          if (value != 'X')
            temp[value - 1].checked = true;

          // BEGIN QUESTION 05
          value = sessionStorage.getItem('cat02_05');
          temp = document.getElementsByName('CAT02_05');
          if (value != 'X')
            temp[value - 1].checked = true;

          // BEGIN QUESTION 06
          value = sessionStorage.getItem('cat02_06');
          temp = document.getElementsByName('CAT02_06');
          if (value != 'X')
            temp[value - 1].checked = true;

          // BEGIN QUESTION 07
          value = sessionStorage.getItem('cat02_07');
          temp = document.getElementsByName('CAT02_07');
          if (value != 'X')
            temp[value - 1].checked = true;

          // BEGIN QUESTION 08
          value = sessionStorage.getItem('cat02_08');
          temp = document.getElementsByName('CAT02_08');
          if (value != 'X')
            temp[value - 1].checked = true;

          // BEGIN QUESTION 09
          value = sessionStorage.getItem('cat02_09');
          temp = document.getElementsByName('CAT02_09');
          if (value != 'X')
            temp[value - 1].checked = true;

          // BEGIN QUESTION 10
          value = sessionStorage.getItem('cat02_10');
          temp = document.getElementsByName('CAT02_10');
          if (value != 'X')
            temp[value - 1].checked = true;

          // BEGIN PUSH CATEGORY 03 - - - - - - - - - - - - - - - - - - - -

            // BEGIN QUESTION 01
            value = sessionStorage.getItem('cat03_01');
            temp = document.getElementsByName('CAT03_01');
            if (value != 'X')
              temp[value - 1].checked = true;

            // BEGIN QUESTION 02
            value = sessionStorage.getItem('cat03_02');
            temp = document.getElementsByName('CAT03_02');
            if (value != 'X')
              temp[value - 1].checked = true;

            // BEGIN QUESTION 03
            value = sessionStorage.getItem('cat03_03');
            temp = document.getElementsByName('CAT03_03');
            if (value != 'X')
              temp[value - 1].checked = true;

            // BEGIN QUESTION 04
            value = sessionStorage.getItem('cat03_04');
            temp = document.getElementsByName('CAT03_04');
            if (value != 'X')
              temp[value - 1].checked = true;

            // BEGIN QUESTION 05
            value = sessionStorage.getItem('cat03_05');
            temp = document.getElementsByName('CAT03_05');
            if (value != 'X')
              temp[value - 1].checked = true;

            // BEGIN QUESTION 06
            value = sessionStorage.getItem('cat03_06');
            temp = document.getElementsByName('CAT03_06');
            if (value != 'X')
              temp[value - 1].checked = true;

            // BEGIN QUESTION 07
            value = sessionStorage.getItem('cat03_07');
            temp = document.getElementsByName('CAT03_07');
            if (value != 'X')
              temp[value - 1].checked = true;

            // BEGIN QUESTION 08
            value = sessionStorage.getItem('cat03_08');
            temp = document.getElementsByName('CAT03_08');
            if (value != 'X')
              temp[value - 1].checked = true;

            // BEGIN QUESTION 09
            value = sessionStorage.getItem('cat03_09');
            temp = document.getElementsByName('CAT03_09');
            if (value != 'X')
              temp[value - 1].checked = true;

            // BEGIN QUESTION 10
            value = sessionStorage.getItem('cat03_10');
            temp = document.getElementsByName('CAT03_10');
            if (value != 'X')
              temp[value - 1].checked = true;

            // BEGIN PUSH CATEGORY 04 - - - - - - - - - - - - - - - - - - - -

              // BEGIN QUESTION 01
              value = sessionStorage.getItem('cat04_01');
              temp = document.getElementsByName('CAT04_01');
              if (value != 'X')
                temp[value - 1].checked = true;

              // BEGIN QUESTION 02
              value = sessionStorage.getItem('cat04_02');
              temp = document.getElementsByName('CAT04_02');
              if (value != 'X')
                temp[value - 1].checked = true;

              // BEGIN QUESTION 03
              value = sessionStorage.getItem('cat04_03');
              temp = document.getElementsByName('CAT04_03');
              if (value != 'X')
                temp[value - 1].checked = true;

              // BEGIN QUESTION 04
              value = sessionStorage.getItem('cat04_04');
              temp = document.getElementsByName('CAT04_04');
              if (value != 'X')
                temp[value - 1].checked = true;

              // BEGIN QUESTION 05
              value = sessionStorage.getItem('cat04_05');
              temp = document.getElementsByName('CAT04_05');
              if (value != 'X')
                temp[value - 1].checked = true;

              // BEGIN QUESTION 06
              value = sessionStorage.getItem('cat04_06');
              temp = document.getElementsByName('CAT04_06');
              if (value != 'X')
                temp[value - 1].checked = true;

              // BEGIN QUESTION 07
              value = sessionStorage.getItem('cat04_07');
              temp = document.getElementsByName('CAT04_07');
              if (value != 'X')
                temp[value - 1].checked = true;

              // BEGIN QUESTION 08
              value = sessionStorage.getItem('cat04_08');
              temp = document.getElementsByName('CAT04_08');
              if (value != 'X')
                temp[value - 1].checked = true;

              // BEGIN QUESTION 09
              value = sessionStorage.getItem('cat04_09');
              temp = document.getElementsByName('CAT04_09');
              if (value != 'X')
                temp[value - 1].checked = true;

              // BEGIN QUESTION 10
              value = sessionStorage.getItem('cat04_10');
              temp = document.getElementsByName('CAT04_10');
              if (value != 'X')
                temp[value - 1].checked = true;

              // BEGIN PUSH CATEGORY 05 - - - - - - - - - - - - - - - - - - - -

                // BEGIN QUESTION 01
                value = sessionStorage.getItem('cat05_01');
                temp = document.getElementsByName('CAT05_01');
                if (value != 'X')
                  temp[value - 1].checked = true;

                // BEGIN QUESTION 02
                value = sessionStorage.getItem('cat05_02');
                temp = document.getElementsByName('CAT05_02');
                if (value != 'X')
                  temp[value - 1].checked = true;

                // BEGIN QUESTION 03
                value = sessionStorage.getItem('cat05_03');
                temp = document.getElementsByName('CAT05_03');
                if (value != 'X')
                  temp[value - 1].checked = true;

                // BEGIN QUESTION 04
                value = sessionStorage.getItem('cat05_04');
                temp = document.getElementsByName('CAT05_04');
                if (value != 'X')
                  temp[value - 1].checked = true;

                // BEGIN QUESTION 05
                value = sessionStorage.getItem('cat05_05');
                temp = document.getElementsByName('CAT05_05');
                if (value != 'X')
                  temp[value - 1].checked = true;

                // BEGIN QUESTION 06
                value = sessionStorage.getItem('cat05_06');
                temp = document.getElementsByName('CAT05_06');
                if (value != 'X')
                  temp[value - 1].checked = true;

                // BEGIN QUESTION 07
                value = sessionStorage.getItem('cat05_07');
                temp = document.getElementsByName('CAT05_07');
                if (value != 'X')
                  temp[value - 1].checked = true;

                // BEGIN QUESTION 08
                value = sessionStorage.getItem('cat05_08');
                temp = document.getElementsByName('CAT05_08');
                if (value != 'X')
                  temp[value - 1].checked = true;

                // BEGIN QUESTION 09
                value = sessionStorage.getItem('cat05_09');
                temp = document.getElementsByName('CAT05_09');
                if (value != 'X')
                  temp[value - 1].checked = true;

                // BEGIN QUESTION 10
                value = sessionStorage.getItem('cat05_10');
                temp = document.getElementsByName('CAT05_10');
                if (value != 'X')
                  temp[value - 1].checked = true;

  }(window));
}
// CONFIRMATION PAGE END -------------------------------------------------

// Edit Usability PAGE START -----------------------------------------------
var editCat01 = window.location.pathname;
var editCat01 = editCat01.substring(editCat01.lastIndexOf('/') + 1);
if(editCat01 == "category-01.html"){
  (function (global) { // SAVES CLIENT NAME, EMAIL, AND URL TO SESSION
    var temp; var value;

      // BEGIN RELOAD USABILITY PAGE - - - - - - - - - - - - - - - - - - - -

        // BEGIN QUESTION 01
        value = sessionStorage.getItem('cat01_01');
        temp = document.getElementsByName('CAT01_01');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 02
        value = sessionStorage.getItem('cat01_02');
        temp = document.getElementsByName('CAT01_02');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 03
        value = sessionStorage.getItem('cat01_03');
        temp = document.getElementsByName('CAT01_03');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 04
        value = sessionStorage.getItem('cat01_04');
        temp = document.getElementsByName('CAT01_04');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 05
        value = sessionStorage.getItem('cat01_05');
        temp = document.getElementsByName('CAT01_05');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 06
        value = sessionStorage.getItem('cat01_06');
        temp = document.getElementsByName('CAT01_06');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 07
        value = sessionStorage.getItem('cat01_07');
        temp = document.getElementsByName('CAT01_07');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 08
        value = sessionStorage.getItem('cat01_08');
        temp = document.getElementsByName('CAT01_08');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 09
        value = sessionStorage.getItem('cat01_09');
        temp = document.getElementsByName('CAT01_09');
        if (value != 'X')
          temp[value - 1].checked = true;

        // BEGIN QUESTION 10
        value = sessionStorage.getItem('cat01_10');
        temp = document.getElementsByName('CAT01_10');
        if (value != 'X')
          temp[value - 1].checked = true;


  }(window));
}
// Edit Usability PAGE END -----------------------------------------------

// Edit Functionality PAGE START -----------------------------------------------
var editCat02 = window.location.pathname;
var editCat02 = editCat02.substring(editCat02.lastIndexOf('/') + 1);
if(editCat02 == "category-02.html"){
  (function (global) { // SAVES CLIENT NAME, EMAIL, AND URL TO SESSION
    var temp; var value;

      // BEGIN RELOAD Functionality PAGE - - - - - - - - - - - - - - - - - - - -
      // BEGIN QUESTION 01
      value = sessionStorage.getItem('cat02_01');
      temp = document.getElementsByName('CAT02_01');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 02
      value = sessionStorage.getItem('cat02_02');
      temp = document.getElementsByName('CAT02_02');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 03
      value = sessionStorage.getItem('cat02_03');
      temp = document.getElementsByName('CAT02_03');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 04
      value = sessionStorage.getItem('cat02_04');
      temp = document.getElementsByName('CAT02_04');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 05
      value = sessionStorage.getItem('cat02_05');
      temp = document.getElementsByName('CAT02_05');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 06
      value = sessionStorage.getItem('cat02_06');
      temp = document.getElementsByName('CAT02_06');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 07
      value = sessionStorage.getItem('cat02_07');
      temp = document.getElementsByName('CAT02_07');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 08
      value = sessionStorage.getItem('cat02_08');
      temp = document.getElementsByName('CAT02_08');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 09
      value = sessionStorage.getItem('cat02_09');
      temp = document.getElementsByName('CAT02_09');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 10
      value = sessionStorage.getItem('cat02_10');
      temp = document.getElementsByName('CAT02_10');
      if (value != 'X')
        temp[value - 1].checked = true;


  }(window));
}
// Edit Functionality PAGE END -----------------------------------------------

// Edit Reliability PAGE START -----------------------------------------------
var editCat03 = window.location.pathname;
var editCat03 = editCat03.substring(editCat03.lastIndexOf('/') + 1);
if(editCat03 == "category-03.html"){
  (function (global) { // SAVES CLIENT NAME, EMAIL, AND URL TO SESSION
    var temp; var value;

      // BEGIN RELOAD Reliability PAGE - - - - - - - - - - - - - - - - - - - -

      // BEGIN QUESTION 01
      value = sessionStorage.getItem('cat03_01');
      temp = document.getElementsByName('CAT03_01');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 02
      value = sessionStorage.getItem('cat03_02');
      temp = document.getElementsByName('CAT03_02');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 03
      value = sessionStorage.getItem('cat03_03');
      temp = document.getElementsByName('CAT03_03');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 04
      value = sessionStorage.getItem('cat03_04');
      temp = document.getElementsByName('CAT03_04');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 05
      value = sessionStorage.getItem('cat03_05');
      temp = document.getElementsByName('CAT03_05');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 06
      value = sessionStorage.getItem('cat03_06');
      temp = document.getElementsByName('CAT03_06');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 07
      value = sessionStorage.getItem('cat03_07');
      temp = document.getElementsByName('CAT03_07');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 08
      value = sessionStorage.getItem('cat03_08');
      temp = document.getElementsByName('CAT03_08');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 09
      value = sessionStorage.getItem('cat03_09');
      temp = document.getElementsByName('CAT03_09');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 10
      value = sessionStorage.getItem('cat03_10');
      temp = document.getElementsByName('CAT03_10');
      if (value != 'X')
        temp[value - 1].checked = true;

  }(window));
}
// Edit Reliability PAGE END -----------------------------------------------

// Edit Efficiency PAGE START -----------------------------------------------
var editCat04 = window.location.pathname;
var editCat04 = editCat04.substring(editCat04.lastIndexOf('/') + 1);
if(editCat04 == "category-04.html"){
  (function (global) { // SAVES CLIENT NAME, EMAIL, AND URL TO SESSION
    var temp; var value;

      // BEGIN RELOAD Efficiency PAGE - - - - - - - - - - - - - - - - - - - -

      // BEGIN QUESTION 01
      value = sessionStorage.getItem('cat04_01');
      temp = document.getElementsByName('CAT04_01');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 02
      value = sessionStorage.getItem('cat04_02');
      temp = document.getElementsByName('CAT04_02');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 03
      value = sessionStorage.getItem('cat04_03');
      temp = document.getElementsByName('CAT04_03');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 04
      value = sessionStorage.getItem('cat04_04');
      temp = document.getElementsByName('CAT04_04');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 05
      value = sessionStorage.getItem('cat04_05');
      temp = document.getElementsByName('CAT04_05');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 06
      value = sessionStorage.getItem('cat04_06');
      temp = document.getElementsByName('CAT04_06');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 07
      value = sessionStorage.getItem('cat04_07');
      temp = document.getElementsByName('CAT04_07');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 08
      value = sessionStorage.getItem('cat04_08');
      temp = document.getElementsByName('CAT04_08');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 09
      value = sessionStorage.getItem('cat04_09');
      temp = document.getElementsByName('CAT04_09');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 10
      value = sessionStorage.getItem('cat04_10');
      temp = document.getElementsByName('CAT04_10');
      if (value != 'X')
        temp[value - 1].checked = true;


  }(window));
}
// Edit Efficiency PAGE END -----------------------------------------------

// Edit Maintainability PAGE START -----------------------------------------------
var editCat05 = window.location.pathname;
var editCat05 = editCat05.substring(editCat05.lastIndexOf('/') + 1);
if(editCat05 == "category-05.html"){
  (function (global) { // SAVES CLIENT NAME, EMAIL, AND URL TO SESSION
    var temp; var value;

      // BEGIN RELOAD Maintainability PAGE - - - - - - - - - - - - - - - - - - - -

      // BEGIN QUESTION 01
      value = sessionStorage.getItem('cat05_01');
      temp = document.getElementsByName('CAT05_01');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 02
      value = sessionStorage.getItem('cat05_02');
      temp = document.getElementsByName('CAT05_02');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 03
      value = sessionStorage.getItem('cat05_03');
      temp = document.getElementsByName('CAT05_03');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 04
      value = sessionStorage.getItem('cat05_04');
      temp = document.getElementsByName('CAT05_04');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 05
      value = sessionStorage.getItem('cat05_05');
      temp = document.getElementsByName('CAT05_05');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 06
      value = sessionStorage.getItem('cat05_06');
      temp = document.getElementsByName('CAT05_06');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 07
      value = sessionStorage.getItem('cat05_07');
      temp = document.getElementsByName('CAT05_07');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 08
      value = sessionStorage.getItem('cat05_08');
      temp = document.getElementsByName('CAT05_08');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 09
      value = sessionStorage.getItem('cat05_09');
      temp = document.getElementsByName('CAT05_09');
      if (value != 'X')
        temp[value - 1].checked = true;

      // BEGIN QUESTION 10
      value = sessionStorage.getItem('cat05_10');
      temp = document.getElementsByName('CAT05_10');
      if (value != 'X')
        temp[value - 1].checked = true;


  }(window));
}
// Edit Maintainability PAGE END -----------------------------------------------

// RESULTS PAGE START - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// check for correct page
var resultsPath = window.location.pathname;
var resultsPath = resultsPath.substring(resultsPath.lastIndexOf('/') + 1);
if(resultsPath == "results.html"){

  (function (global) {

    // possible score, actual score:
    var overallScorePoss = 250; var overallScoreAct = 0; var overallTotal = 0; var overallEval;
    var useScorePoss = 50; var useScoreAct = 0; var useTotal = 0; var useEval;
    var funcScorePoss = 50; var funcScoreAct = 0; var funcTotal = 0; var funcEval;
    var reliScorePoss = 50; var reliScoreAct = 0; var reliTotal = 0; var reliEval;
    var efficScorePoss = 50; var efficScoreAct = 0; var efficTotal = 0; var efficEval;
    var mainScorePoss = 50; var mainScoreAct = 0; var mainTotal = 0; var mainEval;

    // add all scores for USABILITY together, if N/A is selected, subtract 5 from denominator
    if (sessionStorage.getItem('cat01_01') != 'X'){
        useScoreAct += Number(sessionStorage.getItem('cat01_01'));
    } else {
      useScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat01_02') != 'X'){
        useScoreAct += Number(sessionStorage.getItem('cat01_02'));
    } else {
      useScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat01_03') != 'X'){
        useScoreAct += Number(sessionStorage.getItem('cat01_03'));
    } else {
      useScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat01_04') != 'X'){
        useScoreAct += Number(sessionStorage.getItem('cat01_04'));
    } else {
      useScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat01_05') != 'X'){
        useScoreAct += Number(sessionStorage.getItem('cat01_05'));
    } else {
      useScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat01_06') != 'X'){
        useScoreAct += Number(sessionStorage.getItem('cat01_06'));
    } else {
      useScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat01_07') != 'X'){
        useScoreAct += Number(sessionStorage.getItem('cat01_07'));
    } else {
      useScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat01_08') != 'X'){
        useScoreAct += Number(sessionStorage.getItem('cat01_08'));

    } else {
      useScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat01_09') != 'X'){
        useScoreAct += Number(sessionStorage.getItem('cat01_09'));

    } else {
      useScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat01_10') != 'X'){
        useScoreAct += Number(sessionStorage.getItem('cat01_10'));

    } else {
      useScorePoss -= 5;
    }

    if (useScorePoss == 0) {
      console.log(useScorePoss);
      document.getElementById('useScore').innerHTML = 'N/A';
    }
    else {
        useTotal = (useScoreAct / useScorePoss) * 100;
        console.log(Math.round(useTotal));
        useTotal = Math.round(useTotal);
    }

    //console.log(useTotal);

    if (useScorePoss == 0) {
      document.getElementById("useEval").innerHTML = "<span style='color: black;'><strong>N/A</strong></span>";
    } else if (useTotal >= 0 && useTotal <= 30){
      document.getElementById("useEval").innerHTML = "<span style='color: red;'><strong>Needs Work!</strong></span>";
      document.getElementById("useEval").style.textShadow = "1px 1px  #000";
    } else if (useTotal >= 31 && useTotal <= 69) {
      document.getElementById("useEval").innerHTML = "<span style='color: orange;'><strong>On The Right Track!</strong></span>";
      document.getElementById("useEval").style.textShadow = "1px 1px  #000";
    } else if (useTotal >= 70) {
      document.getElementById("useEval").innerHTML = "<span style='color: green;'><strong>Looking Good!</strong></span>";
      document.getElementById("useEval").style.textShadow = "1px 1px  #000";
    }

    if (useTotal != 0) {
      document.getElementById('useScore').innerHTML = useTotal += '%';

    } else {
      document.getElementById('useScore').innerHTML = 'N/A';
    }

    // add all scores for FUNCTIONALITY together, if N/A is selected, subtract 5 from denominator - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - - - - -



    if (sessionStorage.getItem('cat02_01') != 'X'){
        funcScoreAct += Number(sessionStorage.getItem('cat02_01'));
    } else {
      funcScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat02_02') != 'X'){
        funcScoreAct += Number(sessionStorage.getItem('cat02_02'));
    } else {
      funcScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat02_03') != 'X'){
        funcScoreAct += Number(sessionStorage.getItem('cat02_03'));
    } else {
      funcScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat02_04') != 'X'){
        funcScoreAct += Number(sessionStorage.getItem('cat02_04'));
    } else {
      funcScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat02_05') != 'X'){
        funcScoreAct += Number(sessionStorage.getItem('cat02_05'));
    } else {
      funcScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat02_06') != 'X'){
        funcScoreAct += Number(sessionStorage.getItem('cat02_06'));
    } else {
      funcScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat02_07') != 'X'){
        funcScoreAct += Number(sessionStorage.getItem('cat02_07'));
    } else {
      funcScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat02_08') != 'X'){
        funcScoreAct += Number(sessionStorage.getItem('cat02_08'));

    } else {
      funcScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat02_09') != 'X'){
        funcScoreAct += Number(sessionStorage.getItem('cat02_09'));

    } else {
      funcScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat02_10') != 'X'){
        funcScoreAct += Number(sessionStorage.getItem('cat02_10'));

    } else {
      funcScorePoss -= 5;
    }

    if (funcScorePoss == 0) {
      document.getElementById('funcScore').innerHTML = 'N/A';
    }
    else {
        funcTotal = (funcScoreAct / funcScorePoss) * 100;
        funcTotal = Math.round(funcTotal);
        //console.log(funcTotal);
    }

    if (funcScorePoss == 0) {
      document.getElementById("funcEval").innerHTML = "<span style='color: black;'><strong>N/A</strong></span>";
    } else if (funcTotal >= 0 && funcTotal <= 30){
      document.getElementById("funcEval").innerHTML = "<span style='color: red;'><strong>Needs Work!</strong></span>";
      document.getElementById("funcEval").style.textShadow = "1px 1px  #000";
    } else if (funcTotal >= 31 && funcTotal <= 69) {
      document.getElementById("funcEval").innerHTML = "<span style='color: orange;'><strong>On The Right Track!</strong></span>";
      document.getElementById("funcEval").style.textShadow = "1px 1px  #000";
    } else if (funcTotal >= 70) {
      document.getElementById("funcEval").innerHTML = "<span style='color: green;'><strong>Looking Good!</strong></span>";
      document.getElementById("funcEval").style.textShadow = "1px 1px  #000";
    }

    if (funcTotal == 0) {
      document.getElementById('funcScore').innerHTML = 'N/A';
    } else {
      document.getElementById('funcScore').innerHTML = funcTotal += '%';
    }

    // add all scores for RELIABILITY together, if N/A is selected, subtract 5 from denominator - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - - - - -

    if (sessionStorage.getItem('cat03_01') != 'X'){
        reliScoreAct += Number(sessionStorage.getItem('cat03_01'));
    } else {
      reliScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat03_02') != 'X'){
        reliScoreAct += Number(sessionStorage.getItem('cat03_02'));
    } else {
      reliScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat03_03') != 'X'){
        reliScoreAct += Number(sessionStorage.getItem('cat03_03'));
    } else {
      reliScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat03_04') != 'X'){
        reliScoreAct += Number(sessionStorage.getItem('cat03_04'));
    } else {
      reliScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat03_05') != 'X'){
        reliScoreAct += Number(sessionStorage.getItem('cat03_05'));
    } else {
      reliScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat03_06') != 'X'){
        reliScoreAct += Number(sessionStorage.getItem('cat03_06'));
    } else {
      reliScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat03_07') != 'X'){
        reliScoreAct += Number(sessionStorage.getItem('cat03_07'));
    } else {
      reliScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat03_08') != 'X'){
        reliScoreAct += Number(sessionStorage.getItem('cat03_08'));

    } else {
      reliScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat03_09') != 'X'){
        reliScoreAct += Number(sessionStorage.getItem('cat03_09'));

    } else {
      reliScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat03_10') != 'X'){
        reliScoreAct += Number(sessionStorage.getItem('cat03_10'));

    } else {
      reliScorePoss -= 5;
    }

    if (reliScorePoss == 0) {
      document.getElementById('reliScore').innerHTML = 'N/A';
    }
    else {
        reliTotal = (reliScoreAct / reliScorePoss) * 100;
        reliTotal = Math.round(reliTotal);
    }

    //console.log(useTotal);
    if (reliScorePoss == 0) {
      document.getElementById("reliEval").innerHTML = "<span style='color: black;'><strong>N/A</strong></span>";
    } else if (reliTotal >= 0 && reliTotal <= 30){
      document.getElementById("reliEval").innerHTML = "<span style='color: red;'><strong>Needs Work!</strong></span>";
      document.getElementById("reliEval").style.textShadow = "1px 1px  #000";
    } else if (reliTotal >= 31 && reliTotal <= 69) {
      document.getElementById("reliEval").innerHTML = "<span style='color: orange;'><strong>On The Right Track!</strong></span>";
      document.getElementById("reliEval").style.textShadow = "1px 1px  #000";
    } else if (reliTotal >= 70) {
      document.getElementById("reliEval").innerHTML = "<span style='color: green;'><strong>Looking Good!</strong></span>";
      document.getElementById("reliEval").style.textShadow = "1px 1px  #000";
    }

    if (reliTotal == 0) {
      document.getElementById('reliScore').innerHTML = 'N/A';
    } else {
      document.getElementById('reliScore').innerHTML = reliTotal += '%';
    }

    // add all scores for EFFICIENCY together, if N/A is selected, subtract 5 from denominator - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - - - - -

    if (sessionStorage.getItem('cat04_01') != 'X'){
        efficScoreAct += Number(sessionStorage.getItem('cat04_01'));
    } else {
      efficScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat04_02') != 'X'){
        efficScoreAct += Number(sessionStorage.getItem('cat04_02'));
    } else {
      efficScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat04_03') != 'X'){
        efficScoreAct += Number(sessionStorage.getItem('cat04_03'));
    } else {
      efficScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat04_04') != 'X'){
        efficScoreAct += Number(sessionStorage.getItem('cat04_04'));
    } else {
      efficScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat04_05') != 'X'){
        efficScoreAct += Number(sessionStorage.getItem('cat04_05'));
    } else {
      efficScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat04_06') != 'X'){
        efficScoreAct += Number(sessionStorage.getItem('cat04_06'));
    } else {
      efficScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat04_07') != 'X'){
        efficScoreAct += Number(sessionStorage.getItem('cat04_07'));
    } else {
      efficScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat04_08') != 'X'){
        efficScoreAct += Number(sessionStorage.getItem('cat04_08'));

    } else {
      efficScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat04_09') != 'X'){
        efficScoreAct += Number(sessionStorage.getItem('cat04_09'));

    } else {
      efficScorePoss -= 5;
    }

    if (sessionStorage.getItem('cat04_10') != 'X'){
        efficScoreAct += Number(sessionStorage.getItem('cat04_10'));

    } else {
      efficScorePoss -= 5;
    }

    if (efficScorePoss == 0) {
      document.getElementById('efficScore').innerHTML = 'N/A';
    }
    else {
        efficTotal = (efficScoreAct / efficScorePoss) * 100;
        efficTotal = Math.round(efficTotal);
    }

    //console.log(useTotal);
    if (efficScorePoss == 0) {
      document.getElementById("efficEval").innerHTML = "<span style='color: black;'><strong>N/A</strong></span>";
    } else if (efficTotal >= 0 && efficTotal <= 30){
      document.getElementById("efficEval").innerHTML = "<span style='color: red;'><strong>Needs Work!</strong></span>";
      document.getElementById("efficEval").style.textShadow = "1px 1px  #000";
    } else if (efficTotal >= 31 && efficTotal <= 69) {
      document.getElementById("efficEval").innerHTML = "<span style='color: orange;'><strong>On The Right Track!</strong></span>";
      document.getElementById("efficEval").style.textShadow = "1px 1px  #000";
    } else if (efficTotal >= 70) {
      document.getElementById("efficEval").innerHTML = "<span style='color: green;'><strong>Looking Good!</strong></span>";
      document.getElementById("efficEval").style.textShadow = "1px 1px  #000";
    }

    if (efficTotal == 0) {
      document.getElementById('efficScore').innerHTML = 'N/A';
    } else {
      console.log(efficTotal);
      document.getElementById('efficScore').innerHTML = efficTotal += '%';
    }


        // add all scores for MAINTAINABILITY together, if N/A is selected, subtract 5 from denominator - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - - - - -


        if (sessionStorage.getItem('cat05_01') != 'X'){
            mainScoreAct += Number(sessionStorage.getItem('cat05_01'));
        } else {
            mainScorePoss -= 5;
        }

        if (sessionStorage.getItem('cat05_02') != 'X'){
            mainScoreAct += Number(sessionStorage.getItem('cat05_02'));
        } else {
          mainScorePoss -= 5;
        }

        if (sessionStorage.getItem('cat05_03') != 'X'){
            mainScoreAct += Number(sessionStorage.getItem('cat05_03'));
        } else {
          mainScorePoss -= 5;
        }

        if (sessionStorage.getItem('cat05_04') != 'X'){
            mainScoreAct += Number(sessionStorage.getItem('cat05_04'));
        } else {
          mainScorePoss -= 5;
        }

        if (sessionStorage.getItem('cat05_05') != 'X'){
            mainScoreAct += Number(sessionStorage.getItem('cat05_05'));
        } else {
          mainScorePoss -= 5;
        }

        if (sessionStorage.getItem('cat05_06') != 'X'){
            mainScoreAct += Number(sessionStorage.getItem('cat05_06'));
        } else {
          mainScorePoss -= 5;
        }

        if (sessionStorage.getItem('cat05_07') != 'X'){
            mainScoreAct += Number(sessionStorage.getItem('cat05_07'));
        } else {
          mainScorePoss -= 5;
        }

        if (sessionStorage.getItem('cat05_08') != 'X'){
            mainScoreAct += Number(sessionStorage.getItem('cat05_08'));

        } else {
          mainScorePoss -= 5;
        }

        if (sessionStorage.getItem('cat05_09') != 'X'){
            mainScoreAct += Number(sessionStorage.getItem('cat05_09'));

        } else {
          mainScorePoss -= 5;
        }

        if (sessionStorage.getItem('cat05_10') != 'X'){
            mainScoreAct += Number(sessionStorage.getItem('cat05_10'));

        } else {
          mainScorePoss -= 5;
        }

        if (mainScorePoss == 0) {
          document.getElementById('mainScore').innerHTML = 'N/A';
        }
        else {
            mainTotal = (mainScoreAct / mainScorePoss) * 100;
            mainTotal = Math.round(mainTotal);
        }

        //console.log(useTotal);
        if (mainScorePoss == 0) {
          document.getElementById("mainEval").innerHTML = "<span style='color: black;'><strong>N/A</strong></span>";
        } else if (mainTotal >= 0 && mainTotal <= 30){
          document.getElementById("mainEval").innerHTML = "<span style='color: red;'><strong>Needs Work!</strong></span>";
          document.getElementById("mainEval").style.textShadow = "1px 1px  #000";
        } else if (mainTotal >= 31 && mainTotal <= 69) {
          document.getElementById("mainEval").innerHTML = "<span style='color: orange;'><strong>On The Right Track!</strong></span>";
          document.getElementById("mainEval").style.textShadow = "1px 1px  #000";
        } else if (mainTotal >= 70) {
          document.getElementById("mainEval").innerHTML = "<span style='color: green;'><strong>Looking Good!</strong></span>";
          document.getElementById("mainEval").style.textShadow = "1px 1px  #000";
        }

        if (mainTotal == 0) {
          document.getElementById('mainScore').innerHTML = 'N/A';
        } else {
          document.getElementById('mainScore').innerHTML = mainTotal += '%';
        }

  }(window));

}

// RESULTS PAGE END - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
