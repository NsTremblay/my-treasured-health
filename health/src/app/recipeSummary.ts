export class RecipeSummary {
    
    title : Object;
    body : Object;
    images:Object;
    uuid: Object;
    type: Object;

    //this is the recipe constructor
    constructor ( uuid:Object, title :Object,  body: Object, images:Object, type:Object){
        this.title = title;
        this.body = body;
        this.images = images;
        this.uuid = uuid;
        this.type = type;
    }

    
    
}
