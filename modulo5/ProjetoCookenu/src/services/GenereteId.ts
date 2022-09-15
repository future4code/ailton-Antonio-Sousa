import { v4 } from "uuid";

export class GenereteId {
    public generate():string{
        return v4()
    }
}