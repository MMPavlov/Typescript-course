import { format, logger, logMethod, logParameter, sealed, writable } from '../decorators';
import * as Interfaces from './../interfaces';

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;

    prop: string = 'Additional prop';
    // @logMethod
    assistCustomer(/* @logParameter */ custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting Faculty');
    }

    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching Community');
    }
}

export { UniversityLibrarian };
