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
      if (body.data.length === 0) {
        $('.noResult').text("There is currently no doctors in our database with those partucular parameters. We're sorry, please try another search.")
      } 
      else { 
        body.data.forEach(function(result) {
          for (let i = 0; i < body.data.length; i++) {
            $('.foundResult').append(`${result.practices[i].name}`
              // `${result.practices[i].visit_address.street}`,
              // `${result.practices[i].visit_address.city}`,
              // `${result.practices[i].visit_address.state}`,
              // `${result.practices[i].visit_address.zip}`,
              // // if ()
							// `${result.practices[i].phones.type}`, `${result.practices[i].phones.number}`
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