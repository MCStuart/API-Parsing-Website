import { ConditionSearch } from './functions.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#medicalCondition').click(function () {
    let condition = $('#condition').val();
    let drName = $('#drName').val();
    $('#condition').val("");
    $('#drName').val("");

    let conditionSearch = new ConditionSearch();
    let promise = conditionSearch.getDoctorsByCondition(drName, condition);

    promise.then(function (response) {
      let body = JSON.parse(response);
      if (body.data.length === 0 || (condition === "" && drName === "")) {
        $('.noResult').text("There is currently no doctors in our database with those partucular parameters. We're sorry, please try another search.")
      } 
      else { 
        body.data.forEach(function(result) {
          for (let i = 0; i < body.data.length; i++) {
            $('.foundResult').append(`${result.practices[i].name}<br>
              ${result.practices[i].visit_address.street}<br>
              ${result.practices[i].visit_address.city}<br>
              ${result.practices[i].visit_address.state}<br>
							${result.practices[i].visit_address.zip}<br>
							"Office Number: "${result.practices[i].phones[0].number}<br>
							"Website: " <a href="${result.practices[i].website}">${result.practices[i].website}</a><br>
							Currently Accepting New Patients: ${result.practices[i].accepts_new_patients}<br><br>`
            );
          }
        });		
      }
    }, 
    function (error) {
      $('.error').text(`There was an error processing your request: ${error.message}`);
    });
  });

});