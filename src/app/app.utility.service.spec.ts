import Service from './app.utility.service';

describe('UtilityService', () => {
    
    it('should be defined', () => {
        expect(Service).toBeDefined();
    });
    
    it('self method should be detected', () => {
        expect(Service.test()).toBe('test');
    });
    
    it('lodash should be detected', () => {
        expect(Service.name).toBe('lodash');
    });
});