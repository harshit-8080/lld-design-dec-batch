export interface ICommand {
    execute(): boolean
    undo(): boolean
}