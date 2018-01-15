import { ContactModule } from './contact.module';

describe('DashboardModule', () => {
    let contactModule: ContactModule;

    beforeEach(() => {
        contactModule = new ContactModule();
    });

    it('should create an instance', () => {
        expect(contactModule).toBeTruthy();
    });
});