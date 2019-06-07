import { Subject } from 'rxjs/Subject';
import { UserTableModel } from './usertable.model';


export class UserTableService {

	userChanged = new Subject<UserTableModel[]>();
	startedEdit = new Subject<number>();

	public allusers : UserTableModel[] = [
		new UserTableModel(0, 'Aditya'),
		new UserTableModel(1, 'Surya' ),
		new UserTableModel(2, 'Anu'),
	];


	getAllusers(){
		return this.allusers.slice();
	}
	// Submit Details Push Users to Another Component
	addUsers(alluser: UserTableModel ){
		//debugger
		this.allusers.push(alluser);
		this.userChanged.next(this.allusers.slice());
		// No Need Slice property if we remove also working
	}

	setUser(allusers: UserTableModel[]){
		this.allusers = allusers;
		this.userChanged.next(this.allusers.slice());
	}
	getuser(any:number){
		return this.allusers[any];
	}

	// Update UserTables list
	updateUser(index:number, newUser: UserTableModel){
		this.allusers[index] = newUser;
		this.userChanged.next(this.allusers.slice());
	}

	deleteUser(index:number){
		
		this.allusers.splice(index, 1);
		this.userChanged.next(this.allusers.slice());
	}



 

// 	deleteMsg(msg:string) {
//     const index: number = this.allusers.indexOf(msg);
//     if (index !== -1) {
//         //this.allusers.splice(index, 1);
//         this.allusers.splice(this.allusers.indexOf(msg), 1);
//     }        
// }
	 
}