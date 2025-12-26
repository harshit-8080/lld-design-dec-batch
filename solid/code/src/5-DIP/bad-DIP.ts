
// // high-level module
// class Repository {

//     constructor(private database:MySQLDatabasee){}

//     createRecord(data: any) {
//         this.database.create()
//     }
//     fetchRecord(id: string) {
//         this.database.fetch()
//     }
//     updateRecord(id: string, data: any) {
//         this.database.update();
//     }
//     deleteRecord(id: string) {
//         this.database.delete();
//     }
// }

// // low-level module
// class MySQLDatabasee{
//     create(){}
//     fetch(){}
//     update(){}
//     delete(){}
// }

// // low-level module
// class PostgreSQLDatabasee{
//     create(){}
//     fetch(){}
//     update(){}
//     delete(){}
// }

// // low-level module
// class MongoDBDatabasee{
//     create(){}
//     fetch(){}
//     update(){}
//     delete(){}
// }


// new Repository(new MySQLDatabasee());