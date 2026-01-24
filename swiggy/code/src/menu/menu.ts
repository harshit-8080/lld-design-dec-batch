import { MenuItem } from "./menuItem";

export class Menu {

    constructor(
        private items: Map<string, MenuItem> = new Map()
    ){}

    addMenuItem(item: MenuItem): void {
        this.items.set(item.getId(), item);
    }

    removeMenuItem(itemId: string): void {
        this.items.delete(itemId);
    }

    getMenuItem(itemId: string): MenuItem | undefined {
        return this.items.get(itemId);
    }

    getAllMenuItems(): MenuItem[] {
        return Array.from(this.items.values());
    }
}
