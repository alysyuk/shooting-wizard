import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {id: 11, name: 'Mr. Nice', power:100},
            {id: 12, name: 'Narco', power:101},
            {id: 13, name: 'Bombasto', power:102},
            {id: 14, name: 'Celeritas', power:103},
            {id: 15, name: 'Magneta', power:104},
            {id: 16, name: 'RubberMan', power:105},
            {id: 17, name: 'Dynama', power:106},
            {id: 18, name: 'Dr IQ', power:95},
            {id: 19, name: 'Magma', power:87},
            {id: 20, name: 'Tornado', power:52}
        ];
        return {heroes};
    }
}
