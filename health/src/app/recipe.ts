export class Recipe {
    
    title : Object;
    body : Object;
    images:Object;
    uuid: Object;

    //this is the recipe constructor
    constructor ( uuid:Object, title :Object,  body: Object, images:Object){
        this.title = title;
        this.body = body;
        this.images = images;
        this.uuid = uuid;
    }

    
    
}
