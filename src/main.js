import { ConditionSearch } from './functions.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
	$('#medicalCondition').click(function () {
		let condition = $('#condition').val();
		$('#condition').val("");

		let conditionSearch = new ConditionSearch();
		let promise = conditionSearch.getDoctorsByCondition(condition);

		promise.then(function (response) {
			let body = JSON.parse(response);
			$('.nameAndTitle').text(`${body.data.practices.name}`);
			$('.address').text('${body.data.practices.visit_address.street}<br>${body.data.practices.visit_address.city}, ${body.data.practices.visit_address.state}<br>${body.data.practices.visit_address.zip}');
			$('.contact').text('${body.data.practices.phones.type}: ${body.data.practices.phones.number}')
		}, function (error) {
			$('.error').text(`There was an error processing your request: ${error.message}`);
		});
	});

});