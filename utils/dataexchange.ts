export default class dataexchange {
    private static data: any = {};

    public static set(key:string , value: any) {
        this.data[key] = value;
    }

    public static get(key: string): any {
        return this.data[key];
    }
}
