import { conditionSearch } from './function.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
	$('#medicalCondition').click(function () {
		let condition = $('#condition').val();
		$('#condition').val("");

		let conditionSearch = new conditionSearch();
		let promise = conditionSearch.getDoctorsByCondition(condition);

		promise.then(function (response) {
			let body = JSON.parse(response);
			$('.name&Title').text(`${data.practices.name}`);
			$('.address').text('${data.practices.visit_address.street}<br>${data.practices.visit_address.city}, ${data.practices.visit_address.state}<br>${data.practices.visit_address.zip}');
			$('.contact').text('${data.practices.phones.type}: ${data.practices.phones.number}')
		}, function (error) {
			$('.error').text(`There was an error processing your request: ${error.message}`);
		});
	});

});