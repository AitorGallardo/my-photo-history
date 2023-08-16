export class Image {

    id: string | null = null;
    title: string | null = null;
    description: string | null = null;
    labels: string[] = [];
    image_blob: any = null;
    image_src: string | null = null;;



    constructor() {}

    static create(json: any): Image {
        const image = new Image();
        if (json) {
            image.id = json._id ? json._id : null;
            image.title = json.title ? json.title : null;
            image.description = json.description ? json.description : null;
            image.labels = json.labels ? json.labels : [];
            image.image_blob = json.image ? json.image : null;
            image.image_src = json.image_src ? json.image_src : null;
        }

        return image;
    }

}   