import {AppComponent} from './app.component';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

describe('AppComponent', function () {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
				declarations: [AppComponent]
			})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(AppComponent);
				component = fixture.debugElement.componentInstance;
			});
	}));
	
	it('should create component', () => expect(component).toBeDefined());
	
	it('should test reporter', () => {
		expect(true).toBe(true);
	});
	
	xit('should test reporter 2', () => {
		
		expect(true).toBe(true);
	});
});
