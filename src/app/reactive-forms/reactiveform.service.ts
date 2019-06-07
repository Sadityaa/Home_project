import { Subject } from 'rxjs/Subject';
import { ReactiveFormModel } from './reactiveform.model';


export class ReactiveFormService {

	userChanged = new Subject<ReactiveFormModel[]>();
	startedEdit = new Subject<number>();

	public reactiveUsers : ReactiveFormModel[] = [
		new ReactiveFormModel(0, 'Aditya'),
		new ReactiveFormModel(1, 'Surya' ),
		new ReactiveFormModel(2, 'Anu'),
	];

    // All
	getReativeUsers(){
		return this.reactiveUsers.slice();
    }
     // Single
    getReativeUser(any:number){
		return this.reactiveUsers[any];
	}
     // Edit
    updateUser(index:number, newUser: ReactiveFormModel){
		this.reactiveUsers[index] = newUser;
		this.userChanged.next(this.reactiveUsers.slice());
	}
	 
}