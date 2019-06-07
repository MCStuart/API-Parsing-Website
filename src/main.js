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
			$('.displayName').text(`The Doctor, Dr. ${body.data.firstName} `);
		}, function (error) {
			$('.error').text(`There was an error processing your request: ${error.message}`);
		});
	});

});