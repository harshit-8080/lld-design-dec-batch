interface IDatabase{
    create():void;
    fetch():void;
    update():void;
    delete():void;
}

class MySQLDatabasee implements IDatabase{
    create(){}
    fetch(){}
    update(){}
    delete(){}
}

class PostgreSQLDatabasee implements IDatabase{
    create(){}
    fetch(){}
    update(){}
    delete(){}
}

class MongoDBDatabasee implements IDatabase{
    create(){}
    fetch(){}
    update(){}
    delete(){}
}



// high-level module
class Repository {

    constructor(private database:IDatabase){}

    createRecord(data: any) {
        this.database.create()
    }
    fetchRecord(id: string) {
        this.database.fetch()
    }
    updateRecord(id: string, data: any) {
        this.database.update();
    }
    deleteRecord(id: string) {
        this.database.delete();
    }
}


new Repository(new MySQLDatabasee());
new Repository(new PostgreSQLDatabasee());
new Repository(new MongoDBDatabasee());