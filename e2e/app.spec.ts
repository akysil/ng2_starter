import { browser, element, by } from 'protractor';

describe('Demo App', function () {
	
	beforeEach(() => {
		browser.get('/');
	});
	
	it('should have a header', function () {
		expect(element(by.tagName('h1')).getText()).toEqual('Hello World!');
	});
});